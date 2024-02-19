import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

export default async function Write() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }

  return (
    <div>
      <h4>위시리스트 모아놓기</h4>
      <form action='/api/post/new' method='POST'>
        <div className='flex flex-col gap-2 my-4'>
          <input
            name='url'
            placeholder='url을 입력해주세요.'
            className='w-full border max-w-screen-sm active:border-[#546de5] p-2 rounded-sm'
          />
          <input
            name='category'
            placeholder='카테고리를 입력해주세요.'
            className='w-full border max-w-screen-sm active:border-[#546de5] p-2 rounded-sm'
          />
        </div>
        <button
          type='submit'
          className='px-4 py-1 bg-[#546de5] rounded-md text-white'
        >
          버튼
        </button>
      </form>
    </div>
  );
}