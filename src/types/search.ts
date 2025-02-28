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

export interface Artist {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: Type;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href: null;
  total: number;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

export enum Type {
  Artist = "artist",
}

export interface SearchArtistOptions {
  q: string;
  page?: number;
  limit?: number;
}
