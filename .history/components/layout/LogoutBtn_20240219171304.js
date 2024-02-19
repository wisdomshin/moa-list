'use client';

import { signOut } from 'next-auth/react';

export default function LogoutBtn() {
  return (
    <button onClick={() => signOut()} className='ml-4 bg-[#546de5]'>
      로그아웃
    </button>
  );
}
