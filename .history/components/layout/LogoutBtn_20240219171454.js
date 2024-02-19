'use client';

import { signOut } from 'next-auth/react';

export default function LogoutBtn() {
  return (
    <button
      onClick={() => signOut()}
      className='bg-[#546de5] text-white py-1 px-2 rounded-md'
    >
      로그아웃
    </button>
  );
}
