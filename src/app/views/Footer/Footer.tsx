import { IoHeart } from 'react-icons/io5';
export default function Footer() {
  return (
    <div className="flex items-center mx-auto justify-center mb-3 space-x-2">
      <h1>Created with</h1>
      <IoHeart className="text-red-500 text-xl" />
      <h2 className="font-semibold">By Josua Sitanggang</h2>
    </div>
  );
}
