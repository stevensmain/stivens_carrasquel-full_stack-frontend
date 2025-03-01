import SavedAlbumListSection from "@/components/album/saved-album-list-section";

export default function AlbumsPage() {
  return (
    <>
      <h1 className="text-[40px] leading-tight font-bold max-w-[458px] mx-auto md:text-[64px]">
        Mis albumes <span className="text-primary">guardados</span>
      </h1>

      <p className="my-6 max-w-[458px] mx-auto md:my-9">
        Disfruta de tu música a un solo click y descube que discos has guardado
        dentro de “mis álbumes”
      </p>

      <SavedAlbumListSection />
    </>
  );
}
