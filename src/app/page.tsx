import Discography from './views/Discography';
import LatestAlbum from './views/LatestAlbum';
import SocialMedia from './views/SocialMedia';

export default function Home() {
  return (
    <div>
      <LatestAlbum />
      <Discography />
      <SocialMedia />
    </div>
  );
}
