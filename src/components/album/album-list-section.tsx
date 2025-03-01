import { getArtistAlbums } from "@/services/albums";
import Pagination from "../ui/pagination";
import AlbumList from "./album-list";

interface AlbumListSectionProps {
  id: string;
  page: number;
}

const AlbumListSection = async ({ id, page }: AlbumListSectionProps) => {
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
  } catch (error) {
    console.error(error);
    return (
      <p className="mt-20">Ocurrió un error inesperado. Inténtalo más tarde</p>
    );
  }
};

export default AlbumListSection;
