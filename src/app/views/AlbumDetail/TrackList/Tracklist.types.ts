export interface ITrack {
  idTrack: string;
  strTrack: string;
  intDuration: number;
}

export interface ITrackListResponse {
  track: ITrack[];
}

export interface TrackListMusicResponse {
  track: ITrack;
  toggleTrackList: () => void;
}
