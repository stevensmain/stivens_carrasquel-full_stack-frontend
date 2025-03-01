import { render, screen } from "@testing-library/react";

import ArtistCard from "@/components/artist/artist-card";

test("renders artist card with correct details", () => {
  render(
    <ArtistCard
      name="Test Artist"
      followers={1000}
      image="https://via.placeholder.com/150"
    />
  );

  expect(screen.getByText("Test Artist")).toBeInTheDocument();
  expect(screen.getByText("Followers: 1,000")).toBeInTheDocument();
});
