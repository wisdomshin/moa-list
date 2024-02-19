import Link from 'next/link';
import { Raleway } from 'next/font/google';
import LoginBtn from './LoginBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import LogoutBtn from './LogoutBtn';
import Image from 'next/image';

const raleway = Raleway({ subsets: ['latin'] });

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className='flex items-center justify-between py-4'>
      <h1 className='text-3xl font-bold text-[#546de5]'>
        <Link href='/' className={raleway.className}>
          MoaList<i className='bi bi-list-stars'></i>
        </Link>
      </h1>
      <nav className='flex items-center gap-4'>
        <Link href='/moa'>moa</Link>
        {session ? (
          <div className='flex'>
            {session.user.image ? (
              <span>{session.user.image}</span>
            ) : (
              <span className='bg-[#E9ECEG]'>
                <Image
                  src='/avatar.svg'
                  width={10}
                  height={10}
                  alt={session.user.name}
                />
              </span>
            )}

            <span className='mr-4 text-[#546de5]'>{session.user.name}</span>
            <LogoutBtn />
          </div>
        ) : (
          <LoginBtn />
        )}
      </nav>
    </header>
  );
}
