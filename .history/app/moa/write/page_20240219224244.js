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
      <h4>글작성</h4>
      <form action='/api/post/new' method='POST'>
        <input
          name='url'
          placeholder='url을 입력해주세요.'
          className='border'
        />
        <input name='category' placeholder='카테고리를 입력해주세요.' />
        <button type='submit'>버튼</button>
      </form>
    </div>
  );
}
