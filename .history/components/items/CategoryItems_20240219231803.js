import ItemCard from './ItemCard';

export default function CategoryItems({ filtered, items }) {
  // console.log('filtered', filtered);
  // console.log('items', items);
  return (
    <>
      <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {filtered.map((item, i) => (
          <liclassName='text-blue-900' key={i}>
            <ItemCard item={item} />
          </liclassName=>
        ))}
      </ul>
    </>
  );
}