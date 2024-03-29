import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function Edit(props) {
  const db = (await connectDB).db('moalist');
  let items = await db
    .collection('moa')
    .findOne({ _id: new ObjectId(props.params.slug) });

  return (
    <div>
      <h4>위시리스트 모아놓기</h4>
      <form action='/api/post/edit' method='POST'>
        <div className='flex flex-col gap-2 my-4'>
          <input
            name='category'
            placeholder='카테고리를 입력해주세요.'
            defaultValue={items.category}
            className='w-full border max-w-screen-sm active:border-[#546de5] bg-blue-100 p-2 rounded-sm'
          />
          <input
            type='text'
            name='url'
            placeholder='url을 입력해주세요.'
            defaultValue={items.url}
            className='w-full border max-w-screen-sm active:border-[#546de5] p-2 rounded-sm'
          />
        </div>
        <button
          type='submit'
          className='px-4 py-1 bg-[#546de5] rounded-md text-white'
        >
          수정하기
        </button>
      </form>
    </div>
  );
}
