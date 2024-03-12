'use client';

import { usePathname } from 'next/navigation';
import MarqueePage from './marqueePage';

export default function MainBg({ items }) {
  const pathname = usePathname();

  return (
    <section className=''>
      {pathname === '/' && (
        <section className='-z-10'>
          <MarqueePage items={items} />
        </section>
      )}
    </section>
  );
}
