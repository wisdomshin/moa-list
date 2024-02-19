import { useState } from 'react';

export default async function FilterableItems({ items, categories }) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? items
      : items.filter((item) => item.category === selected);

  return <></>;
}