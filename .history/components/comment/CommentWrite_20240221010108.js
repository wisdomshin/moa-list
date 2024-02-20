'use client';

import { useState } from 'react';

export default function CommentWrite({ itemId }) {
  const [comment, setComment] = useState('');

  return (
    <section className='mt-8 border border-[#ababab]'>
      <b className='block'>댓글 쓰기</b>
      <input
        className='p-1 mr-2 border rounded-md w-80'
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        className='px-2 py-1 rounded-md bg-[#546de5] text-white'
        onClick={() => {
          fetch('/api/comment/write', {
            method: 'POST',
            body: JSON.stringify({ comment: comment, id: itemId }),
          });
        }}
      >
        댓글 전송
      </button>
    </section>
  );
}
