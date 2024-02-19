'use client';
import { useState } from 'react';
import Categories from './Categories';
import CategoryItems from './CategoryItems';
import Link from 'next/link';

const ALL_POSTS = '전체';

export default function FilterableItems({ items, categories }) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? items
      : items.filter((item) => item.category === selected);

  return (
    <>
      <Link
        href='/moa/write'
        className='inline-block px-4 py-1 bg-[#546de5] rounded-md text-white mt-4'
      >
        작성하기
      </Link>
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
      <CategoryItems filtered={filtered} items={items} />
    </>
  );
}
