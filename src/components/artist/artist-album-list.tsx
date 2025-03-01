import { getArtistAlbums } from "@/services/albums";
import Pagination from "../ui/pagination";
import AlbumList from "../album/album-list";

interface ArtistAlbumListProps {
  id: string;
  page: number;
}

const ArtistAlbumList = async ({ id, page }: ArtistAlbumListProps) => {
  try {
    const { items, limit, total } = await getArtistAlbums({ id, page });

    return (
      <>
        {items.length > 0 ? (
          <AlbumList albums={items} />
        ) : (
          <p className="mt-20">No hay resultados disponibles</p>
        )}

        <Pagination currentPage={page} totalPages={Math.floor(total / limit)} />
      </>
    );
  } catch (error: any) {
    return (
      <p className="mt-20">Ocurrió un error inesperado. Inténtalo más tarde</p>
    );
  }
};

export default ArtistAlbumList;
