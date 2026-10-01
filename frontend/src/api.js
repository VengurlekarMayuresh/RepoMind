const configuredApiUrl = (import.meta.env.VITE_API_URL || '').trim().replace(/\/$/, '');

export const apiUrl = (path) => `${configuredApiUrl}${path}`;

export const websocketUrl = (path) => {
  const baseUrl = configuredApiUrl || window.location.origin;
  const url = new URL(path, baseUrl);
  url.protocol = url.protocol === 'https:' ? 'wss:' : 'ws:';
  return url.toString();
};