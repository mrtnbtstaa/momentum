export interface ActiveSession {
  id: string;
  device: string;
  browser: string;
  location: string;
  ip: string;
  current?: boolean;
  lastActive: string;
}