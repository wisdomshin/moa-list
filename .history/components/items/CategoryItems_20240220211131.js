import ItemCard from './ItemCard';

export default function CategoryItems({ filtered }) {
  return (
    <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {filtered.map((item) => (
        <li key={item.ogTitle} className='my-4'>
          <ItemCard item={item} />
        </li>
      ))}
    </ul>
  );
}
