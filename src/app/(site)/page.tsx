import { Suspense } from "react";

import SearchBar from "@/components/search/search-bar";
import SearchSection from "@/components/search/search-section";
import ArtistsListSkeleton from "@/components/artist/artist-list-skeleton";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  const query = (await searchParams).q || "";
  const page = Number((await searchParams).page) || 1;

  return (
    <>
      <h1 className="text-[40px] leading-tight font-bold max-w-[458px] mx-auto md:text-[64px]">
        Busca tus <span className="text-primary">artistas</span>
      </h1>
      <p className="my-6 md:my-9">
        Encuentra tus artistas favoritos gracias a nuestro buscador y guarda tus
        álbumes favoritos
      </p>

      <SearchBar />

      <Suspense fallback={<ArtistsListSkeleton />}>
        <SearchSection q={query} page={page} />
      </Suspense>
    </>
  );
}
