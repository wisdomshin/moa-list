'use client';

export default function CommentWrite() {
  return (
    <section className='border border-red-500'>
      <b className='block'>댓글 쓰기</b>
      <input type='text' className='p-1 mr-2 border rounded-md w-80' />
      <button
        className='px-2 py-1 rounded-md bg-[#546de5] text-white'
        onClick={() => {
          fetch('/api/comment/new', {
            method: 'POST',
            body: JSON.stringify({ comment: comment, _id: props._id }),
          });
        }}
      >
        댓글 전송
      </button>
    </section>
  );
}
