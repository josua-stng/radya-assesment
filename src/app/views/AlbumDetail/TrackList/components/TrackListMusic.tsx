import { GiPauseButton } from 'react-icons/gi';
import { TrackListMusicResponse } from '../Tracklist.types';
import { formatDuration } from '../helpers/formatDuration';

function TrackListMusic({ track, toggleTrackList }: TrackListMusicResponse) {
  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-yellow-300 max-w-2xl w-full  px-4 py-3 rounded-md flex items-center justify-between shadow-lg"
      style={{ zIndex: 1000 }}
    >
      <div className="flex items-center space-x-2">
        <GiPauseButton
          className="text-xl cursor-pointer hover:text-gray-400"
          onClick={toggleTrackList}
        />
        <h2 className="font-bold text-xl">{track.strTrack}</h2>
      </div>
      <h3 className="text-xl">{formatDuration(track.intDuration)}</h3>
    </div>
  );
}

export default TrackListMusic;
