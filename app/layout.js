import { Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import WrapBackground from '@/components/background/wrapBackground';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'MoaList',
  description: '나만의 갈망템을 모아리스트에 저장해보세요!',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='ko' className={`${sans.className} relative h-full`}>
      <body>
        <Header />
        <main className='w-full max-w-screen-xl p-2 mx-auto mt-8 mb-20'>
          {children}
        </main>
        <WrapBackground />
      </body>
    </html>
  );
}
