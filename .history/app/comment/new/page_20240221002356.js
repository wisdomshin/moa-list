export default function CommentWrite() {
  return (
    <section className='border border-red-500'>
      <b className='block'>댓글 쓰기</b>
      <input type='text' className='border w-60' />
      <button className='px-2 py-1 rounded-md bg-[#546de5] text-white'>
        댓글 전송
      </button>
    </section>
  );
}
