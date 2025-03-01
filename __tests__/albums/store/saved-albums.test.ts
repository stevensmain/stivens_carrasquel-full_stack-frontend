import { act, renderHook } from "@testing-library/react";

import { Album } from "@/types/albums";
import { useSavedAlbumsStore } from "@/stores/albums/saved-albums";

const mockAlbum: Album = {
  id: "1",
  name: "Test Album",
  images: [{ url: "https://via.placeholder.com/150", width: 150, height: 150 }],
  artists: [
    {
      name: "Test Artist",
      id: "2",
      external_urls: { spotify: "" },
      href: "",
      type: "",
      uri: "",
    },
  ],
  total_tracks: 10,
  available_markets: [],
  external_urls: { spotify: "" },
  href: "",
  release_date: "2024-01-01",
  release_date_precision: "day",
  type: "album",
  uri: "",
  album_group: "",
  album_type: "",
};

describe("Saved album store", () => {
  test("saves album", () => {
    const { result } = renderHook(() => useSavedAlbumsStore());

    act(() => {
      result.current.saveAlbum("Test Artist", mockAlbum);
    });

    expect(result.current.albumsByArtist).toHaveProperty("Test Artist");
    expect(result.current.albumsByArtist["Test Artist"]).toHaveLength(1);
  });

  test("removes album", () => {
    const { result } = renderHook(() => useSavedAlbumsStore());

    act(() => {
      result.current.saveAlbum("Test Artist", mockAlbum);
    });

    act(() => {
      result.current.removeAlbum("Test Artist", mockAlbum);
    });

    expect(result.current.albumsByArtist["Test Artist"] || []).toHaveLength(0);
  });
});
