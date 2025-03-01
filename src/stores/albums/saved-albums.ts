import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Album } from "@/types/albums";

interface SavedAlbumsState {
  artists: string[];
  albumsByArtist: Record<string, Album[]>;
  saveAlbum: (artist: string, album: Album) => void;
  removeAlbum: (artist: string, album: Album) => void;
}

export const useSavedAlbumsStore = create<SavedAlbumsState>()(
  persist(
    (set) => ({
      artists: [],
      albumsByArtist: {},
      saveAlbum: (artist, album) => {
        set((state) => {
          const artistsExist = state.artists.includes(artist);
          const artistAlbums = state.albumsByArtist[artist] || [];

          return {
            artists: artistsExist ? state.artists : [...state.artists, artist],
            albumsByArtist: {
              ...state.albumsByArtist,
              [artist]: [...artistAlbums, album],
            },
          };
        });
      },

      removeAlbum: (artist, album) => {
        set((state) => {
          const artistAlbums = state.albumsByArtist[artist] || [];
          const updatedAlbums = artistAlbums.filter(
            (a) => a.id !== album.id // Suponiendo que `Album` tiene un `id`
          );

          const updatedArtists = updatedAlbums.length
            ? state.artists
            : state.artists.filter((a) => a !== artist);

          const updatedAlbumsByArtist = updatedAlbums.length
            ? { ...state.albumsByArtist, [artist]: updatedAlbums }
            : Object.fromEntries(
                Object.entries(state.albumsByArtist).filter(
                  ([key]) => key !== artist
                )
              );

          return {
            artists: updatedArtists,
            albumsByArtist: updatedAlbumsByArtist,
          };
        });
      },
    }),
    { name: "albums-store" }
  )
);
