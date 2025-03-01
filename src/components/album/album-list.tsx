import { Album } from "@/types/albums";
import AlbumCard from "./album-card";

interface AlbumListProps {
  albums: Album[];
}

const AlbumList = ({ albums }: AlbumListProps) => {
  return (
    <div className="grid grid-cols-1 my-4 md:grid-cols-2 md:mt-7 md:mb-14 lg:grid-cols-4">
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
};

export default AlbumList;
