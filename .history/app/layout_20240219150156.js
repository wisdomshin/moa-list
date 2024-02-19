import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MoaList',
  description: '나만의 위시리스트를 모아리스트에 저장해보세요!',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
