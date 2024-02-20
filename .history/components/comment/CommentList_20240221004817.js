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
      {data.length > 0
        ? data.map((a, i) => (
            <p key={i}>
              <span>{a.content}</span>
            </p>
          ))
        : '댓글없음'}
    </div>
  );
}
