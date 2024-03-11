'use client';

import { usePathname } from 'next/navigation';

export default function MainBg() {
  const pathname = usePathname();

  return (
    <>
      {pathname === '/' && (
        <section className='absolute top-0 left-0 w-full h-full -z-10'></section>
      )}
    </>
  );
}
