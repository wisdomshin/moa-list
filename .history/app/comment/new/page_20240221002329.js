export default function CommentWrite() {
  return (
    <section className='border border-red-500'>
      <b>댓글 쓰기</b>
      <input type='text' className='border' />
      <button className='px-2 py-1 rounded-md bg-[#546de5] text-white'>
        댓글 전송
      </button>
    </section>
  );
}
