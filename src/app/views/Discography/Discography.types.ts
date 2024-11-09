export interface IIDiscography {
    idAlbum: string;
    strAlbum: string;
    intYearReleased: number;
    strAlbumThumb: string;
}

export interface IIDiscographyResponse {
    album: IIDiscography[];
}