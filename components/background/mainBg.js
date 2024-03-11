'use client';

import { usePathname } from 'next/navigation';
import MarqueePage from './marqueePage';

export default function MainBg({ items }) {
  const pathname = usePathname();

  return (
    <>
      {pathname === '/' && (
        <section className='absolute top-0 left-0 w-full h-full -z-10'>
          <MarqueePage items={items} />
        </section>
      )}
    </>
  );
}
