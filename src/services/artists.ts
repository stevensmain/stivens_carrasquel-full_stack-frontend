import apiClient from "@/lib/api-client";
import { Artist } from "@/types/artists";

export const getArtist = async (id: string) => {
  const response = await apiClient.get<Artist>(`/artists/${id}`);

  return response.data;
};
