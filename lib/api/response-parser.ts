import { ApiError } from './errors';

function isEmptyResponse(response: Response): boolean {
  return (
    response.status === 204 ||
    response.status === 205 ||
    response.headers.get('content-length') === '0'
  );
}

async function decodeBody(response: Response): Promise<unknown> {
  const contentType = response.headers.get('content-type') ?? '';
  if (contentType.includes('application/json')) {
    try {
      return await response.json();
    } catch {
      return await response.text();
    }
  }
  return response.text();
}

/**
 * Parses a fetch Response into either the typed payload or throws ApiError.
 */
export async function parseResponse<T>(response: Response, url: string): Promise<T> {
  if (isEmptyResponse(response)) {
    if (!response.ok) {
      throw new ApiError(response.status, response.statusText, undefined, url);
    }
    return undefined as T;
  }

  const data = await decodeBody(response);

  if (!response.ok) {
    throw new ApiError(response.status, response.statusText, data, url);
  }

  return data as T;
}