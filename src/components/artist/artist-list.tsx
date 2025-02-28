import { Artist } from "@/types/search";

import ArtistCard from "./artist-card";
import Link from "next/link";

interface ArtistListProps {
  artists: Artist[];
}

export default function ArtistList({ artists }: ArtistListProps) {
  return (
    <div className="grid grid-cols-1 my-4 md:grid-cols-2 md:mt-7 md:mb-14 lg:grid-cols-4">
      {artists.map((artist) => (
        <Link key={artist.id} href={`/artist/${artist.id}`}>
          <ArtistCard
            name={artist.name}
            followers={artist.followers.total}
            image={
              artist.images.length > 0
                ? artist.images[0].url
                : "/placeholder.jpg"
            }
          />
        </Link>
      ))}
    </div>
  );
}
