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
    <div>
      {data.length > 0 ? (
        data.map((comment, i) => (
          <p
            key={i}
            className='flex justify-between py-2 border-b border-gray-200'
          >
            {comment.content}
            <span className='text-sm text-[#8A8A8A]'>{comment?.createdAt}</span>
          </p>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}