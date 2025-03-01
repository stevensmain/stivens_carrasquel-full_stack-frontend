import { Suspense } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

import { getArtist } from "@/services/artists";
import AlbumListSection from "@/components/album/album-list-section";
import AlbumListSkeleton from "@/components/album/album-list-skeleton";

export default async function ArtistPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const id = (await params).id;
  const page = Number((await searchParams).page) || 1;

  const { images, name, followers, popularity } = await getArtist(id);

  return (
    <>
      <section className="flex flex-col gap-7 mb-14 md:gap-14 md:flex-row md:mb-28">
        <Image
          src={images[0].url ?? ""}
          width={images[0].width}
          height={images[0].height}
          alt="Artist"
          className="rounded-full w-40 aspect-square md:w-60"
        />

        <div className="text-left">
          <div className="inline-flex items-center gap-3.5">
            <div className="w-6 h-6 bg-[#619CED] rounded-full grid place-items-center">
              <Check className="w-3.5 h-4.5" />
            </div>
            <p className="font-semibold">Artista certificado</p>
          </div>
          <h2 className="text-[64px] font-bold">{name}</h2>
          <p>Followers: {followers.total}</p>
          <p>Oyentes mensuales: {popularity}</p>
        </div>
      </section>

      <h3 className="text-left">Guarda tus álbumes favoritos de {name}</h3>

      <Suspense fallback={<AlbumListSkeleton />}>
        <AlbumListSection id={id} page={page} />
      </Suspense>
    </>
  );
}
