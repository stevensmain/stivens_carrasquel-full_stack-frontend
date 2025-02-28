import axios, { InternalAxiosRequestConfig } from "axios";
import axiosRetry from "axios-retry";

const SPOTIFY_BASE_URL = "https://api.spotify.com/v1";
const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/api/token";

let cachedToken: { token: string; expiresAt: number } | null = null;

const getAccessToken = async (): Promise<string> => {
  const clientId = process.env.AUTH_SPOTIFY_ID;
  const clientSecret = process.env.AUTH_SPOTIFY_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Missing Spotify API credentials");
  }

  const now = Date.now();

  if (cachedToken && now < cachedToken.expiresAt) {
    return cachedToken.token;
  }

  const response = await fetch(SPOTIFY_AUTH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to obtain Spotify token: ${response.statusText}`);
  }

  const data = await response.json();

  cachedToken = {
    token: data.access_token,
    expiresAt: now + data.expires_in * 1000,
  };

  return cachedToken.token;
};

const setRequestHeaders = async (request: InternalAxiosRequestConfig) => {
  try {
    const token = await getAccessToken();
    request.headers.Authorization = `Bearer ${token}`;
  } catch (error) {
    console.error("Error setting authorization header:", error);
    throw error;
  }

  return request;
};

const handleError = (error: unknown): Promise<never> => {
  console.error("API Request Error:", error);
  return Promise.reject(error);
};

const apiClient = axios.create({
  baseURL: SPOTIFY_BASE_URL,
  timeout: 10000,
});

apiClient.interceptors.request.use(setRequestHeaders, handleError);

axiosRetry(apiClient, {
  retries: 3,
  retryDelay: (retryCount) => retryCount * 1000,
  retryCondition: (error) => error.response?.status === 401,
});

export default apiClient;
