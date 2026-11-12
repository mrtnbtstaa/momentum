import { serverConfig } from './config';

export type FetchOptions = Omit<RequestInit, 'body'> & {
  body?: unknown;
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
};

export interface BuiltRequest {
  url: string;
  init: RequestInit & { next?: FetchOptions['next'] };
}

export function buildRequest(
  path: string,
  options: FetchOptions,
  authHeaders: Record<string, string>
): BuiltRequest {
  const { body, next, headers: customHeaders, ...rest } = options;

  const headers = new Headers(customHeaders);
  if (body !== undefined && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }
  for (const [key, value] of Object.entries(authHeaders)) {
    headers.set(key, value);
  }

  return {
    url: `${serverConfig.baseUrl}${path}`,
    init: {
      ...rest,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined,
      next,
    },
  };
}