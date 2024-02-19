export default async function Edit(props) {
  const db = (await connectDB).db('forum');
  let result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.id) });

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
          수정하기
        </button>
      </form>
    </div>
  );
}
