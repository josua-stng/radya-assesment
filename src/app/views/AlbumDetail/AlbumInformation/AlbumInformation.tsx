'use client';

import useGetData from '@/app/hooks/useGetData';
import Image from 'next/image';
import {
  IAlbumInformation,
  IAlbumInformationResponse,
} from './AlbumInformation.types';
import AlbumInformationSkeleton from './components/AlbumInformationSkeleton';
import Link from 'next/link';

export default function AlbumInformation({ id }: { id: string }) {
  const { data: informationAlbums, isLoading } =
    useGetData<IAlbumInformationResponse>(
      `https://www.theaudiodb.com/api/v1/json/2/album.php?m=${id}`,
      'latestAlbum'
    );
  return (
    <div className="mt-5">
      <div className="bg-gray-200 px-10 py-20">
        {isLoading ? (
          <AlbumInformationSkeleton />
        ) : (
          <>
            <h1 className="font-bold italic text-2xl mb-3 text-center">
              New Album Released
            </h1>
            {informationAlbums?.album?.map((album: IAlbumInformation) => {
              return (
                <div
                  key={album.idAlbum}
                  className=" md:flex mx-auto justify-center md:space-x-24 items-center max-w-7xl"
                >
                  <Image
                    alt="album image"
                    src={album.strAlbumThumb}
                    width={320}
                    height={320}
                    className="rounded-md mx-auto md:mx-0 mt-5 mb-3 md:mt-0 md:mb-0"
                  />
                  <div>
                    <h3 className="text-lg underline mb-2">
                      {album.strAlbum} <span>{album.intYearReleased}</span>
                    </h3>
                    <h2 className="font-semibold text-lg font-sans mb-1">
                      {album.strArtist}
                    </h2>
                    <h3 className="mb-3">Genre: {album.strGenre}</h3>
                    <p className="max-w-2xl line-clamp-5 font-mono">
                      {album.strDescriptionEN}
                    </p>
                    <Link
                      href={`https://www.youtube.com/results?search_query=${album.strAlbum}`}
                      target="_blank"
                      className="flex items-center  mx-auto bg-black text-white px-8 py-2.5 rounded-md hover:bg-gray-800 mt-5 w-max"
                    >
                      Listen Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
