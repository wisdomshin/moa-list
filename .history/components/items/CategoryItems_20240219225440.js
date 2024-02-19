import Link from 'next/link';

export default function CategoryItems({ filtered, items }) {
  // console.log('filtered', filtered);
  console.log('items', items);
  return (
    <>
      {filtered.map((item, i) => (
        <div key={i}>
          <Link href={`/moa/${item._id}`} className='text-blue-900'>
            <div className='border border-red-500'>
              <div>{item?.ogTitle}</div>
              <img src={item?.onImage} />
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
