import { Suspense } from "react";

import SearchBar from "@/components/search/search-bar";
import SearchSection from "@/components/search/search-section";
import ArtistsListSkeleton from "@/components/artist/artist-list-skeleton";

export default async function HomePage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string };
}) {
  const query = searchParams?.q || "";
  const page = Number(searchParams?.page) || 1;

  return (
    <div className="container mx-auto px-8 py-11 text-left md:px-12 md:py-20 md:text-center">
      <h1 className="text-[40px] leading-tight font-bold max-w-[458px] mx-auto md:text-[64px]">
        Busca tus <span className="text-primary">artistas</span>
      </h1>
      <p className="text-base text-foreground my-6 md:my-9">
        Encuentra tus artistas favoritos gracias a nuestro buscador y guarda tus
        álbumes favoritos
      </p>

      <SearchBar />

      <Suspense fallback={<ArtistsListSkeleton />}>
        <SearchSection q={query} page={page} />
      </Suspense>
    </div>
  );
}
