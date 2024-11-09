import AlbumFooter from '@/app/views/AlbumDetail/AlbumFooter';
import AlbumHeader from '@/app/views/AlbumDetail/AlbumHeader';
import AlbumInformation from '@/app/views/AlbumDetail/AlbumInformation';
import DiscographyAlbum from '@/app/views/AlbumDetail/DiscographyAlbum';
import NewsLetter from '@/app/views/AlbumDetail/NewsLetter';
import TrackList from '@/app/views/AlbumDetail/TrackList';

export default async function AlbumDetail({ params }: any) {
  const { id } = await params;
  return (
    <div>
      <AlbumHeader />
      <AlbumInformation id={id} />
      <TrackList id={id} />
      <DiscographyAlbum />
      <NewsLetter />
      <AlbumFooter />
    </div>
  );
}
