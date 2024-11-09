import { useState } from 'react';
import useSWR from 'swr';
import { ITrack, ITrackListResponse } from './Tracklist.types';
import useGetData from '@/app/hooks/useGetData';

export default function useTrackList(id: string) {
  const [playingTrack, setPlayingTrack] = useState<ITrack | null>(null);

  const {
    data: trackList,
    isLoading,
    error,
  } = useGetData<ITrackListResponse>(
    `https://www.theaudiodb.com/api/v1/json/2/track.php?m=${id}`,
    'listTrack'
  );

  const toggleTrackList = (trackId: string) => {
    const selectedTrack = trackList?.track.find(
      (track) => track.idTrack === trackId
    );
    setPlayingTrack((prevTrack) =>
      prevTrack?.idTrack === trackId ? null : selectedTrack || null
    );
  };

  const handleShare = (trackData: ITrack) => {
    navigator.share({
      title: trackData.strTrack,
      text: `Check out this track: ${trackData.strTrack}`,
      url: window.location.href,
    });
  };

  const formatDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return {
    trackList,
    error,
    isLoading,
    playingTrack,
    setPlayingTrack,
    toggleTrackList,
    handleShare,
    formatDuration,
  };
}
