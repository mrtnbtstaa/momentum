// lib/api/browser.ts
import axios, { AxiosError } from 'axios';

export const browserApi = axios.create({
  baseURL: '/api', // hits your Next.js Route Handler
  withCredentials: true, // send httpOnly cookies to the BFF
  headers: { 'Content-Type': 'application/json' },
  timeout: 30_000,
});

// Request interceptor: attach CSRF token if your BFF requires it
browserApi.interceptors.request.use((config) => {
  if (typeof document !== 'undefined') {
    const csrf = document.cookie
      .split('; ')
      .find((c) => c.startsWith('csrf_token='))
      ?.split('=')[1];
    if (csrf) config.headers['X-CSRF-Token'] = csrf;
  }
  return config;
});

// Response interceptor: normalize errors + handle 401
browserApi.interceptors.response.use(
  (res) => res,
  (error: AxiosError<{ detail?: string; message?: string }>) => {
    if (error.response?.status === 401) {
      // Redirect to login on auth failure
      if (typeof window !== 'undefined' && !window.location.pathname.startsWith('/login')) {
        window.location.href = `/login?next=${encodeURIComponent(window.location.pathname)}`;
      }
    }
    // Return a normalized error shape so components don't need to know Axios internals
    const message =
      error.response?.data?.detail ??
      error.response?.data?.message ??
      error.message;
    return Promise.reject(new Error(message));
  }
);

export default browserApi;