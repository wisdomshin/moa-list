import Link from 'next/link';

export default function CategoryItems({ filtered, items }) {
  // console.log('filtered', filtered);
  console.log('items', items);
  return (
    <>
      {filtered.map((item, i) => (
        <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <li href={`/moa/${item._id}`} className='text-blue-900' key={i}>
            <div>{item?.ogTitle}</div>
            <img src={item?.ogImage} width={300} height={250} />
          </li>
        </ul>
      ))}
    </>
  );
}
