'use client';
import { useState } from 'react';
import Categories from './Categories';
import CategoryItems from './CategoryItems';

const ALL_POSTS = '전체';

export default function FilterableItems({ items, categories }) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? items
      : items.filter((item) => item.category === selected);

  return (
    <>
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
      <CategoryItems filtered={filtered} items={items} />
    </>
  );
}
