import Discography from './views/Discography';
import Footer from './views/Footer';
import HeaderAlbum from './views/HeaderAlbum';
import LatestAlbum from './views/LatestAlbum';
import SocialMedia from './views/SocialMedia';

export default function Home() {
  return (
    <div>
      <HeaderAlbum />
      <LatestAlbum />
      <Discography />
      <SocialMedia />
      <Footer />
    </div>
  );
}
