import type { PaginatedResponse } from './common';

export type LogMessage = {
  timestamp: string;
  level: string;
  label?: string;
  message: string;
  data?: Record<string, unknown>;
};

export interface LogsResultsResponse extends PaginatedResponse {
  results: LogMessage[];
}

export interface SettingsAboutResponse {
  version: string;
  totalRequests: number;
  totalMediaItems: number;
  tz?: string;
  appDataPath: string;
}

export interface PublicSettingsResponse {
  initialized: boolean;
  applicationTitle: string;
  applicationUrl: string;
  hideAvailable: boolean;
  localLogin: boolean;
  movie4kEnabled: boolean;
  series4kEnabled: boolean;
  region: string;
  originalLanguage: string;
  partialRequestsEnabled: boolean;
  cacheImages: boolean;
  vapidPublic: string;
  enablePushRegistration: boolean;
  locale: string;
  emailEnabled: boolean;
  newPlexLogin: boolean;
  oidcLogin: boolean;
  oidcName: string;
}

export interface CacheItem {
  id: string;
  name: string;
  stats: {
    hits: number;
    misses: number;
    keys: number;
    ksize: number;
    vsize: number;
  };
}

export interface CacheResponse {
  apiCaches: CacheItem[];
  imageCache: Record<'tmdb', { size: number; imageCount: number }>;
}

export interface StatusResponse {
  version: string;
  commitTag: string;
  updateAvailable: boolean;
  commitsBehind: number;
  restartRequired: boolean;
}
