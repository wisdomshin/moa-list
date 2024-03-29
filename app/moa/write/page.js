import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

export default async function Write() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }

  return (
    <div className='flex flex-col items-center mt-[50px] border py-[80px] min-h-[500px] shadow-lg'>
      <div className='w-[600px]'>
        <h4 className='text-xl'>작성하기</h4>
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
          <div className='flex justify-end'>
            <button
              type='submit'
              className='px-4 py-1 bg-[#546de5] rounded-md text-white mt-8'
            >
              등록하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
