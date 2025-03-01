import { render, screen } from "@testing-library/react";

import { Album } from "@/types/albums";
import AlbumCard from "@/components/album/album-card";

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

test("renders album card with album details", () => {
  render(<AlbumCard album={mockAlbum} />);

  expect(screen.getByText("Test Album")).toBeInTheDocument();
  expect(screen.getByRole("img", { name: /Test Album/i })).toBeInTheDocument();
});
