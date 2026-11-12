// lib/api/config.ts
function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not set`);
  return value;
}

export const serverConfig = {
  baseUrl: requireEnv('FASTAPI_INTERNAL_URL'),
  authCookieName: process.env.AUTH_COOKIE_NAME ?? 'access_token',
  authScheme: process.env.AUTH_SCHEME ?? 'Bearer',
} as const;