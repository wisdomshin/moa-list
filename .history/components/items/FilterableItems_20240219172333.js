import { useState } from 'react';

export default async function FilterableItems() {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? result
      : result.filter((item) => item.category === selected);

  return <></>;
}
