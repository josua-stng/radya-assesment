import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
export default function SocialMedia() {
  return (
    <div className="bg-gradient-to-r from-gray-400 to-zinc-200 p-10 mb-10">
      <h1 className="font-bold ml-2 text-2xl italic mb-12 text-center ">
        Follow Eminem Us Here!
      </h1>
      <div className="flex items-center justify-center text-4xl space-x-8 mb-5">
        <Link href={'https://www.facebook.com/eminem/'} target="_blank">
          <FaFacebook className="cursor-pointer hover:text-gray-500" />
        </Link>
        <Link href={'https://www.instagram.com/eminem/'} target="_blank">
          <FaInstagram className="cursor-pointer hover:text-gray-500" />
        </Link>
        <Link href={'https://x.com/Eminem'} target="_blank">
          <FaSquareXTwitter className="cursor-pointer hover:text-gray-500" />
        </Link>
        <Link href={'https://www.youtube.com/@eminem'} target="_blank">
          <FaYoutube className="cursor-pointer hover:text-gray-500" />
        </Link>
      </div>
    </div>
  );
}
