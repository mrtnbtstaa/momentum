import { resolveAuthHeaders } from './auth';
import { buildRequest, type FetchOptions } from './request-builder';
import { parseResponse } from './response-parser';
import { withRetry, type RetryConfig } from './retry';
import { ApiError } from './errors';

export { ApiError };
export type { FetchOptions };

export interface ServerFetchOptions extends FetchOptions {
  retry?: Partial<RetryConfig>;
}

/**
 * Server-side fetch wrapper for FastAPI.
 * Orchestrates: auth → request building → retried fetch → response parsing.
 */
export async function serverFetch<T = unknown>(
  path: string,
  options: ServerFetchOptions = {}
): Promise<T> {
  const { retry, ...fetchOptions } = options;

  const authHeaders = await resolveAuthHeaders();
  const { url, init } = buildRequest(path, fetchOptions, authHeaders);

  const method = (init.method ?? 'GET').toString();

  let response: Response;
  try {
    response = await withRetry(() => fetch(url, init), method, retry);
  } catch (err) {
    throw new ApiError(0, 'Network Error', { cause: String(err) }, url);
  }

  return parseResponse<T>(response, url);
}