'use client';
import useGetData from '@/app/hooks/useGetData';
import Image from 'next/image';
import Link from 'next/link';
import type { ILatestAlbum, ILatestAlbumResponse } from './LatestAlbum.types';

export default function LatestAlbum() {
  const { data: newAlbum, isLoading } = useGetData<ILatestAlbumResponse>(
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2431240',
    'latestAlbum'
  );

  return (
    <div>
      <div className="bg-gray-100 mt-8 py-20">
        {newAlbum?.album?.map((datas: ILatestAlbum) => {
          return (
            <div
              key={datas.idAlbum}
              className="flex mx-auto justify-center space-x-32 items-center"
            >
              <div className="max-w-2xl">
                <h1 className="font-bold ml-2 text-2xl italic mt-3 mb-3 text-center">
                  New Album Released
                </h1>
                <h3 className="text-lg underline mb-2">{datas.strAlbum}</h3>
                <p className="max-w-6xl line-clamp-3 font-mono">
                  {datas.strDescriptionEN}
                </p>
                <div className="flex flex-col mt-2">
                  <Link
                    href={`/album-detail/${datas.idAlbum}`}
                    className="text-sky-600 hover:text-sky-700 font-semibold cursor-pointer"
                  >
                    View Detail
                  </Link>
                  <button className="mx-auto bg-black text-white px-8 py-2.5 rounded-md hover:bg-gray-800 mt-5">
                    Listen Now
                  </button>
                </div>
              </div>
              <Image
                alt="album image"
                src={datas.strAlbumThumb}
                width={320}
                height={320}
                className="rounded-md"
                priority
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
