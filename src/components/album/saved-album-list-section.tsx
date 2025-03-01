"use client";

import { useSavedAlbumsStore } from "@/stores/albums/saved-albums";
import AlbumList from "./album-list";

const SavedAlbumListSection = () => {
  const { artists, albumsByArtist } = useSavedAlbumsStore();

  return (
    <>
      {artists.length === 0 ? (
        <p className="mt-20">No tienes álbumes guardados</p>
      ) : (
        <div className="space-y-12">
          {artists.map((artist) => (
            <div key={artist}>
              <h2 className="text-3xl text-left font-bold">{artist}</h2>
              <AlbumList albums={albumsByArtist[artist]} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SavedAlbumListSection;
