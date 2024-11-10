import { Skeleton } from '@/components/ui/skeleton';

export function DiscographyAlbumSkeleton() {
  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <Skeleton className="h-4 w-[100px] mt-4 mb-2 ml-2 bg-gray-300 " />
      </div>
      <div className="flex  max-w-7xl mx-auto gap-5 items-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="p-1  space-y-2">
            <Skeleton className="h-[125px] w-[190px] rounded-xl bg-gray-300" />
            <Skeleton className="h-4 w-[150px] bg-gray-300" />
            <Skeleton className="h-4 w-[100px] bg-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
