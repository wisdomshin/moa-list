'use client';

import { signIn } from 'next-auth/react';

export default function LoginBtn() {
  return (
    <button
      onClick={() => signIn()}
      className='ml-4 bg-[#546de5] text-white py-1 px-2 rounded-md'
    >
      로그인
    </button>
  );
}
