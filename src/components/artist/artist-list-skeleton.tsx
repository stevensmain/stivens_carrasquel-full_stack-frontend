import ArtistCardSkeleton from "./artist-card-skeleton";

const ArtistsListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 my-4 md:grid-cols-2 md:mt-7 md:mb-14 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <ArtistCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default ArtistsListSkeleton;
