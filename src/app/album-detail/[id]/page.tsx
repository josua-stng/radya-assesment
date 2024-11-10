import AlbumInformation from '@/app/views/AlbumDetail/AlbumInformation';
import DiscographyAlbum from '@/app/views/AlbumDetail/DiscographyAlbum';
import NewsLetter from '@/app/views/AlbumDetail/NewsLetter';
import TrackList from '@/app/views/AlbumDetail/TrackList';

export default async function AlbumDetail({ params }: any) {
  const { id } = await params;
  return (
    <div>
      <AlbumInformation id={id} />
      <TrackList id={id} />
      <DiscographyAlbum />
      <NewsLetter />
    </div>
  );
}
