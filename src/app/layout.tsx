import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { Inter } from 'next/font/google';
import HeaderAlbum from './views/HeaderAlbum';
import Footer from './views/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'The Albums',
  description: 'The Albums Web Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderAlbum />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
