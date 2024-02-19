import ItemCard from './ItemCard';

export default function CategoryItems({ filtered }) {
  return (
    <>
      <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {filtered.map((item, i) => (
          <li className='text-blue-900' key={item.ogTitle}>
            <ItemCard item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
