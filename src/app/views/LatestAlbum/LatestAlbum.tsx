'use client';
import useGetData from '@/app/hooks/useGetData';
import Image from 'next/image';
import Link from 'next/link';
import type { ILatestAlbum, ILatestAlbumResponse } from './LatestAlbum.types';
import { LatestAlbumSkeleton } from './components/LatestAlbumSkeleton';

export default function LatestAlbum() {
  const { data: newAlbum, isLoading } = useGetData<ILatestAlbumResponse>(
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2431240',
    'latestAlbum'
  );

  return (
    <div>
      <div className="bg-gray-100 mt-8 py-20" id="new-album">
        {isLoading ? (
          <LatestAlbumSkeleton />
        ) : (
          <>
            {newAlbum?.album?.map((album: ILatestAlbum) => {
              return (
                <div
                  key={album.idAlbum}
                  className="md:flex mx-auto justify-center md:space-x-32 items-center px-10"
                >
                  <div className="max-w-2xl">
                    <h1 className="font-bold ml-2 text-2xl italic mt-3 mb-3 text-center">
                      New Album Released
                    </h1>
                    <h3 className="text-lg underline mb-2">{album.strAlbum}</h3>
                    <p className="max-w-6xl line-clamp-3 font-mono">
                      {album.strDescriptionEN}
                    </p>
                    <div className="flex flex-col mt-2">
                      <Link
                        href={`/album-detail/${album.idAlbum}`}
                        className="text-red-600 hover:text-yellow-700 font-bold cursor-pointer w-max italic"
                      >
                        View Detail
                      </Link>
                      <Link href={`https://www.youtube.com/results?search_query=${album.strAlbum}`} target='_blank' className="mx-auto bg-black text-white px-8 py-2.5 rounded-md hover:bg-gray-800 mt-5">
                        Listen Now
                      </Link>
                    </div>
                  </div>
                  <Image
                    alt="album image"
                    src={album.strAlbumThumb}
                    width={320}
                    height={320}
                    className="rounded-md mx-auto mt-5 md:mt-0"
                    priority
                  />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
