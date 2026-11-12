export class ApiError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    public data: unknown,
    public url: string
  ) {
    super(`API Error ${status} ${statusText} at ${url}`);
    this.name = 'ApiError';
  }
}