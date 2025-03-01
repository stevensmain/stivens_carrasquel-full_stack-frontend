import apiClient from "@/lib/api-client";
import { ArtistAlbumResponse, GetArtistAlbumsOptions } from "@/types/albums";

export const getArtistAlbums = async ({
  id,
  page = 1,
  limit = 4,
}: GetArtistAlbumsOptions) => {
  const offset = (page - 1) * limit;
  const response = await apiClient.get<ArtistAlbumResponse>(
    `/artists/${id}/albums`
  );

  const { items, total } = response.data;

  return { items, offset, limit, total };
};
