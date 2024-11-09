export interface IIDiscographyAlbum {
    idAlbum: string;
    strAlbum: string;
    intYearReleased: number;
    strAlbumThumb: string;
}

export interface IIDiscographyAlbumResponse {
    album: IIDiscographyAlbum[];
}