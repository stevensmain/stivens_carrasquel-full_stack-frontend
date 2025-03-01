import axios from "axios";
import { searchArtist } from "@/services/search";

import Pagination from "../ui/pagination";
import ArtistList from "@/components/artist/artist-list";

interface SearchSectionProps {
  q: string;
  page: number;
}

const SearchSection = async ({ q, page }: SearchSectionProps) => {
  try {
    const { items, limit, offset, total } = await searchArtist({ q, page });

    return (
      <>
        <p className="text-left mt-11 md:mt-20">
          Mostrando resultados {offset + 1} - {Math.min(offset + limit, total)}{" "}
          de {total} resultados
        </p>

        {items.length > 0 ? (
          <ArtistList artists={items} />
        ) : (
          <p className="mt-20">No hay resultados disponibles</p>
        )}

        <Pagination currentPage={page} totalPages={Math.floor(total / limit)} />
      </>
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        return (
          <p className="mt-20">Por favor, ingresa un término de búsqueda</p>
        );
      }
    }
    return (
      <p className="mt-20">Ocurrió un error inesperado. Inténtalo más tarde</p>
    );
  }
};

export default SearchSection;
