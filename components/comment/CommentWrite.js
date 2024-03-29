'use client';

import { useState } from 'react';

export default function CommentWrite({ itemId }) {
  const [comment, setComment] = useState('');

  return (
    <section className='my-6'>
      <b className='block'>댓글 쓰기</b>
      <div className='flex my-5'>
        <input
          type='text'
          className='p-1 mr-2 border rounded-md grow'
          onChange={(e) => {
            setComment(e.target.value);
          }}
          value={comment}
        />
        <button
          className='px-2 py-1 rounded-md bg-[#546de5] text-white'
          onClick={() => {
            fetch('/api/comment/write', {
              method: 'POST',
              body: JSON.stringify({ comment: comment, id: itemId }),
            });
            setComment('');
          }}
        >
          댓글 등록
        </button>
      </div>
    </section>
  );
}
