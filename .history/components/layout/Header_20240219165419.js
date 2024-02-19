import Link from 'next/link';
import { Raleway } from 'next/font/google';
import LoginBtn from './LoginBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const raleway = Raleway({ subsets: ['latin'] });

export default function Header() {
  const session = getServerSession(authOptions);
  return (
    <header className='flex items-center justify-between py-4'>
      <h1 className='text-3xl font-bold text-[#546de5]'>
        <Link href='/' className={raleway.className}>
          MoaList<i className='bi bi-list-stars'></i>
        </Link>
      </h1>
      <nav className='flex gap-4'>
        <Link href='/moa'>moa</Link>
        <LoginBtn />
      </nav>
    </header>
  );
}
