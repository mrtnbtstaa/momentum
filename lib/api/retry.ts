export interface RetryConfig {
  // Max number of retry attempts after the initial try. Default: 2.
  maxRetries: number;
  // Base delay in ms for exponential backoff. Default: 200. 
  baseDelayMs: number;
  // Cap for backoff delay in ms. Default: 5000. 
  maxDelayMs: number;
  // HTTP statuses that should be retried. Default: 502, 503, 504. 
  retryableStatuses: ReadonlySet<number>;
  // HTTP methods that should be retried. Default: GET, HEAD, PUT, DELETE, OPTIONS. 
  retryableMethods: ReadonlySet<string>;
}

const DEFAULT_CONFIG: RetryConfig = {
  maxRetries: 2,
  baseDelayMs: 200,
  maxDelayMs: 5000,
  // Only idempotent-safe statuses. 500 is intentionally excluded: it usually
  // indicates a deterministic bug, and retrying wastes upstream capacity.
  retryableStatuses: new Set([502, 503, 504]),
  // POST is excluded because it's not idempotent. PATCH is excluded too.
  retryableMethods: new Set(['GET', 'HEAD', 'PUT', 'DELETE', 'OPTIONS']),
};

// Returns true if the error is worth retrying (network failure).
function isRetryableNetworkError(err: unknown): boolean {
  // fetch() throws TypeError on network failures, AbortError on timeout.
  // Treat both as transient.
  if (err instanceof TypeError) return true;
  if (err instanceof DOMException && err.name === 'AbortError') return true;
  return false;
}

// Returns true if the response status warrants a retry.
function isRetryableResponse(response: Response, config: RetryConfig): boolean {
  return config.retryableStatuses.has(response.status);
}

// Honors `Retry-After` header if present, otherwise exponential backoff + jitter.
function computeDelay(attempt: number, response: Response | undefined, config: RetryConfig): number {
  const retryAfter = response?.headers.get('retry-after');
  if (retryAfter) {
    const seconds = Number(retryAfter);
    if (Number.isFinite(seconds) && seconds >= 0) {
      return Math.min(seconds * 1000, config.maxDelayMs);
    }
    // Could be an HTTP date — fall back to backoff
  }
  const exponential = Math.min(config.baseDelayMs * 2 ** attempt, config.maxDelayMs);
  // Full jitter to avoid thundering herd
  return Math.random() * exponential;
}

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * Executes `fn` with retry semantics. `fn` must return a `Response`; a
 * retryable status on the Response triggers another attempt after the current
 * body is discarded.
 *
 * Retries on:
 *   - Network errors thrown by fetch (TypeError, AbortError)
 *   - Responses with a status in `config.retryableStatuses` (default 502/503/504)
 *     for methods in `config.retryableMethods`
 */
export async function withRetry(
  fn: () => Promise<Response>,
  method: string,
  config: Partial<RetryConfig> = {}
): Promise<Response> {
  const cfg = { ...DEFAULT_CONFIG, ...config };
  const canRetry = cfg.retryableMethods.has(method.toUpperCase());
  const maxAttempts = canRetry ? cfg.maxRetries + 1 : 1;

  let lastResponse: Response | undefined;
  let lastError: unknown;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    if (attempt > 0) {
      await sleep(computeDelay(attempt - 1, lastResponse, cfg));
    }

    try {
      const response = await fn();

      if (!isRetryableResponse(response, cfg) || attempt === maxAttempts - 1) {
        return response;
      }

      // Drain the body so the connection can be reused
      await response.body?.cancel().catch(() => {});
      lastResponse = response;
      lastError = undefined;
    } catch (err) {
      lastError = err;
      lastResponse = undefined;

      if (!isRetryableNetworkError(err) || attempt === maxAttempts - 1) {
        throw err;
      }
    }
  }

  // Unreachable: loop always returns or throws
  if (lastError) throw lastError;
  if (lastResponse) return lastResponse;
  throw new Error('withRetry: exhausted without response or error');
}