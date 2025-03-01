"use client";

import { useSavedAlbumsStore } from "@/stores/albums/saved-albums";
import { Album } from "@/types/albums";
import { Button } from "@/components/ui/button";

interface SaveAlbumButtonProps {
  artist: string;
  album: Album;
}

const SaveAlbumButton = ({ artist, album }: SaveAlbumButtonProps) => {
  const { albumsByArtist, saveAlbum, removeAlbum } = useSavedAlbumsStore();

  const isSaved = albumsByArtist[artist]?.some((a) => a.id === album.id);

  const handleClick = () => {
    if (isSaved) {
      removeAlbum(artist, album);
    } else {
      saveAlbum(artist, album);
    }
  };

  return (
    <Button onClick={handleClick} variant={isSaved ? "destructive" : "default"}>
      {isSaved ? "- Remove album" : "+ Add album"}
    </Button>
  );
};

export default SaveAlbumButton;
