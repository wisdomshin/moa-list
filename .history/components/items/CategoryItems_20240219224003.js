import Link from 'next/link';

export default function CategoryItems({ filtered, items }) {
  console.log('filtered', filtered);
  console.log('items', items);
  return (
    <>
      {filtered.map((item, i) => (
        <div key={i}>
          {/* <div>{item.title}</div> */}
          <Link href={`/moa/${item._id}`} className='text-blue-900'>
            {item?.url}
          </Link>
        </div>
      ))}
    </>
  );
}
