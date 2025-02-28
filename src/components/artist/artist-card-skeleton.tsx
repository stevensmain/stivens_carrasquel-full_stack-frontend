import { Skeleton } from "@/components/ui/skeleton";

const ArtistCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 p-6 rounded-3xl">
      <Skeleton className="w-full h-[180px] md:h-[200px] rounded-xl" />
      <Skeleton className="w-3/4 h-5 mt-4 rounded-md" />
      <Skeleton className="w-1/2 h-4 mt-2 rounded-md" />
    </div>
  );
};

export default ArtistCardSkeleton;
