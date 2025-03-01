import { Artist } from "./artists";

export interface ArtistSearchResponse {
  artists: Artists;
}

export interface Artists {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
  items: Artist[];
}

export interface SearchArtistOptions {
  q: string;
  page?: number;
  limit?: number;
}
