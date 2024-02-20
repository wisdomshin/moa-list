import { Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'MoaList',
  description: '나만의 위시리스트를 모아리스트에 저장해보세요!',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='ko' className={sans.className}>
      <body className='flex flex-col w-full max-w-screen-xl p-2 mx-auto'>
        <Header />
        <main className='mt-8 mb-20'>{children}</main>
      </body>
    </html>
  );
}
