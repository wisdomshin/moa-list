'use client';
import { useState } from 'react';
import Categories from './Categories';

export default function FilterableItems({ items, categories }) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? items
      : items.filter((item) => item.category === selected);

  return (
    <>
      <Categories />
    </>
  );
}
