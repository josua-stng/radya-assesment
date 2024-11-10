'use client';

import useGetData from '@/app/hooks/useGetData';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
import {
  IIDiscographyAlbum,
  IIDiscographyAlbumResponse,
} from './DiscographyAlbum.types';
import { DiscographyAlbumSkeleton } from './components/DiscographyAlbumSkeleton';

export default function DiscographyAlbum() {
  const { data: discographyAlbum, isLoading } =
    useGetData<IIDiscographyAlbumResponse>(
      'https://www.theaudiodb.com/api/v1/json/2/album.php?i=111304',
      'discographyAlbum'
    );
  return (
    <Carousel className="mt-24 mb-20 w-full max-w-7xl mx-auto">
      {isLoading ? (
        <DiscographyAlbumSkeleton />
      ) : (
        <>
          <h1 className="font-bold ml-2 text-xl italic mt-3 mb-1">
            Other Release
          </h1>
          <h2 className="mb-1 text-sm px-1">
            This remix album presents a new perspective on the artist&apos;s
            work through the artist&apos;s creative interpretation. Each song is
            reimagined with a modern electronic twist
          </h2>
          <CarouselContent>
            {discographyAlbum?.album.map((discographys: IIDiscographyAlbum) => {
              return (
                <CarouselItem
                  key={discographys.idAlbum}
                  className="pl-1 md:basis-1/4 lg:basis-1/6"
                >
                  <Link href={`/album-detail/${discographys.idAlbum}`}>
                    <Card className="hover:bg-slate-200 cursor-pointer">
                      <CardContent className="flex aspect-square items-center justify-center p-2">
                        <Image
                          src={discographys.strAlbumThumb}
                          width={500}
                          height={200}
                          alt="image thumb"
                          className="w-full h-full object-cover rounded-md"
                        />
                      </CardContent>
                      <div className=" ml-3 mt-1 space-y-1 mb-2">
                        <p className="line-clamp-1 font-bold text-sm">
                          {discographys.strAlbum}
                        </p>
                        <p className="text-xs">
                          {discographys.intYearReleased}
                        </p>
                      </div>
                    </Card>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </>
      )}
    </Carousel>
  );
}
