import { Album } from "@/types/albums";
import SaveAlbumButton from "./save-album-button";

interface AlbumCardProps {
  album: Album;
}

const AlbumCard = ({ album }: AlbumCardProps) => {
  const { name, images } = album;

  return (
    <div className="group flex flex-col gap-6 p-6 rounded-3xl text-left">
      <img
        src={images[0].url ?? "/placeholder.jpg"}
        alt={name}
        className="rounded-xl w-full h-60 object-cover"
      />
      <h3 className="text-4xl font-semibold">{name}</h3>
      <SaveAlbumButton artist={album.artists[0].name} album={album} />
    </div>
  );
};

export default AlbumCard;
