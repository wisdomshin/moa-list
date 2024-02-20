'use client';

import { useState } from 'react';

export default function CommnetList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/comment/list?id=' + props._id)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
        // console.log(data);
      });
  }, [data]);

  return <div>댓글 리스트</div>;
}
