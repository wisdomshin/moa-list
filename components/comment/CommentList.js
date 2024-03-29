'use client';

import { useEffect, useState } from 'react';

export default function CommnetList({ itemId }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/comment/list?id=' + itemId)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, [data]);

  return (
    <section className='mt-10'>
      <b className='block'>댓글</b>
      <div className='mt-2 px-5 bg-[#F2F2F2]'>
        {data.length > 0 ? (
          data.map((comment, i) => (
            <p
              key={i}
              className='flex justify-between py-2 text-gray-500 border-b border-gray-200'
            >
              {comment.content}
              <span className='text-sm text-gray-400'>
                {comment?.createdAt}
              </span>
            </p>
          ))
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
