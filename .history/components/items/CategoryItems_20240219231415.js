import Link from 'next/link';
import ItemCard from './ItemCard';

export default function CategoryItems({ filtered, items }) {
  // console.log('filtered', filtered);
  console.log('items', items);
  return (
    <>
      <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {filtered.map((item, i) => (
          <li href={`/moa/${item._id}`} className='text-blue-900' key={i}>
            <ItemCard post={post} />
          </li>
        ))}
      </ul>
    </>
  );
}
