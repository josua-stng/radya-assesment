import { Skeleton } from '@/components/ui/skeleton';

export default function AlbumInformationSkeleton() {
  return (
    <div className="flex mx-auto justify-center space-x-32 items-center">
      <Skeleton className="h-60 w-[350px]" />
      <div className="space-y-5">
        <Skeleton className="h-4 w-[350px] mt-4 mb-2 ml-2 bg-gray-300 mx-auto" />
        <Skeleton className="h-4 w-[500px] mt-4 mb-2 ml-2 bg-gray-300 " />
        <Skeleton className="h-4 w-[500px] mt-4 mb-2 ml-2 bg-gray-300 " />
        <Skeleton className="h-4 w-[500px] mt-4 mb-2 ml-2 bg-gray-300 " />
        <Skeleton className="h-4 w-[100px] mt-4 mb-2 ml-2 bg-gray-300 mx-auto" />
      </div>
    </div>
  );
}
