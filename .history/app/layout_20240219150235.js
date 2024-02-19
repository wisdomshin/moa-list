import { Open_Sans } from 'next/font/google';
import './globals.css';

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
    <html lang='en' className={sans.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
