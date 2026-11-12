import { cookies } from 'next/headers';
import { serverConfig } from './config';

/**
 * Reads the incoming request's auth token and returns the header(s) to
 * forward to FastAPI. Returns an empty object if no token is present.
 */
export async function resolveAuthHeaders(): Promise<Record<string, string>> {

  const cookieStore = await cookies();
  const token = cookieStore.get(serverConfig.authCookieName)?.value;
  if (!token) return {};

  if (serverConfig.authScheme === 'Bearer') {
    return { Bearer: `${serverConfig.authCookieName}=${token}` };
  }
  return { Authorization: `${serverConfig.authScheme} ${token}` };
}