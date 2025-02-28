import apiClient from "@/lib/api-client";
import { ArtistSearchResponse, SearchArtistOptions } from "@/types/search";

export const searchArtist = async ({
  q,
  page = 1,
  limit = 4,
}: SearchArtistOptions) => {
  const offset = (page - 1) * limit;

  const response = await apiClient.get<ArtistSearchResponse>(`/search`, {
    params: { type: "artist", limit, offset: offset, q },
  });

  const { items, total } = response.data.artists;

  return { items, offset, limit, total };
};
