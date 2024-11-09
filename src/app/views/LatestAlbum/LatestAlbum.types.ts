export interface ILatestAlbum {
    idAlbum: string;
    strAlbum: string;
    strDescriptionEN: string;
    strAlbumThumb: string;
}

export interface ILatestAlbumResponse {
    album: ILatestAlbum[];
}