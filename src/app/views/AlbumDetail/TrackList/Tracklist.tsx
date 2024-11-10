'use client';
import { CgPlayButtonO } from 'react-icons/cg';
import { GiPauseButton } from 'react-icons/gi';
import { FaShareSquare } from 'react-icons/fa';
import useTrackList from './Tracklist.hooks';
import { ITrack } from './Tracklist.types';
import TrackListMusic from './components/TrackListMusic';
import TrackListSkeleton from './components/TrackListSkeleton';

interface TrackListProps {
  id: string;
}

export default function TrackList({ id }: TrackListProps) {
  const {
    trackList,
    playingTrack,
    toggleTrackList,
    handleShare,
    formatDuration,
    setPlayingTrack,
    isLoading,
  } = useTrackList(id);

  return (
    <div className="mt-24">
      {isLoading ? (
        <TrackListSkeleton />
      ) : (
        <>
          <h1 className="font-bold italic text-3xl mb-5 text-center">
            Track List
          </h1>
          {trackList?.track?.map((trackData: ITrack) => (
            <div
              key={trackData.idTrack}
              className="border border-gray-400 flex max-w-2xl mx-auto p-3 justify-between mt-5 rounded-md hover:bg-gray-100"
            >
              <div className="flex items-center space-x-3">
                {playingTrack?.idTrack === trackData.idTrack ? (
                  <GiPauseButton
                    className="text-2xl cursor-pointer hover:text-gray-400"
                    onClick={() => toggleTrackList(trackData.idTrack)}
                  />
                ) : (
                  <CgPlayButtonO
                    className="text-2xl cursor-pointer hover:text-gray-400"
                    onClick={() => toggleTrackList(trackData.idTrack)}
                  />
                )}
                <p>{trackData.strTrack}</p>
              </div>
              <div className="flex items-center space-x-7">
                <p>{formatDuration(trackData.intDuration)}</p>
                <FaShareSquare
                  className="text-xl cursor-pointer hover:text-gray-400"
                  onClick={() => handleShare(trackData)}
                />
              </div>
            </div>
          ))}
          {playingTrack && (
            <TrackListMusic
              track={playingTrack}
              toggleTrackList={() => setPlayingTrack(null)}
            />
          )}
        </>
      )}
    </div>
  );
}
