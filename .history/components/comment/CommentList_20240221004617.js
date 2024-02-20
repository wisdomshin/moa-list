'use client';

import { useState } from 'react';

export default function CommnetList({ itemId }) {
  const [data, setData] = useState([]);
  console.log((itemId = { itemId }));

  useEffect(() => {
    fetch('/api/comment/list?id=' + itemId)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
        // console.log(data);
      });
  }, [data]);

  return <div>댓글 리스트</div>;
}