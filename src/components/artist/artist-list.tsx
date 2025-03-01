import Link from "next/link";

import { Artist } from "@/types/artists";
import ArtistCard from "./artist-card";

interface ArtistListProps {
  artists: Artist[];
}

const ArtistList = ({ artists }: ArtistListProps) => {
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
};

export default ArtistList;
