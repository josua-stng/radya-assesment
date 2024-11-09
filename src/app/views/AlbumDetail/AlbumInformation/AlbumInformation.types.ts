export interface IAlbumInformation {
  idAlbum: string;
  strAlbum: string;
  intYearReleased: number;
  strAlbumThumb: string;
  strArtist: string;
  strGenre: string;
  strDescriptionEN: string;
}

export interface IAlbumInformationResponse {
  album: IAlbumInformation[];
}
