import { Skeleton } from '@/components/ui/skeleton';

export function LatestAlbumSkeleton() {
  return (
    <div className="flex mx-auto justify-center space-x-32 items-center">
      <div className="space-y-5">
        <Skeleton className="h-4 w-[350px] mt-4 mb-2 ml-2 bg-gray-300 mx-auto" />
        <Skeleton className="h-4 w-[500px] mt-4 mb-2 ml-2 bg-gray-300 " />
        <Skeleton className="h-4 w-[500px] mt-4 mb-2 ml-2 bg-gray-300 " />
        <Skeleton className="h-4 w-[500px] mt-4 mb-2 ml-2 bg-gray-300 " />
        <Skeleton className="h-4 w-[100px] mt-4 mb-2 ml-2 bg-gray-300 mx-auto" />
      </div>
      <Skeleton className="h-60 w-[350px]" />
    </div>
  );
}
