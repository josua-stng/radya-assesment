import { Skeleton } from '@/components/ui/skeleton';

export default function TrackListSkeleton() {
  return (
    <div>
      <Skeleton className="h-4 w-[200px] mt-4 mb-2 ml-2 bg-gray-300 mx-auto" />
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index}>
          <Skeleton className=" h-8 w-[650px] mt-10 mb-2 ml-2 bg-gray-300 mx-auto border border-black" />
        </div>
      ))}
    </div>
  );
}
