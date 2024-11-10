import Link from 'next/link';

export default function HeaderAlbum() {
  return (
    <header className="flex sticky top-0 z-20 justify-between p-5 font-sans font-semibold bg-gray-300">
      <Link href={'/'} className="hover:underline cursor-pointer">
        Albums
      </Link>
      <div className="flex gap-5">
        <Link href="/#new-album" className="hover:underline cursor-pointer">
          New Album
        </Link>
        <Link href="/#discography" className="hover:underline cursor-pointer">
          Discography
        </Link>
        <Link href="/#social-media" className="hover:underline cursor-pointer">
          Social Media
        </Link>
      </div>
    </header>
  );
}
