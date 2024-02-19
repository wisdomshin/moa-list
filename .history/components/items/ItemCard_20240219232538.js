import Link from 'next/link';
import Image from 'next/image';

export default function ItemCard({ item }) {
  console.log(item);
  return (
    <Link href={`/moa/${item._id}`}>
      <div>{item.ogTitle}</div>
      {item.ogImage ? (
        <img src={item.ogImage} width={300} height={250} alt={item.ogTitle} />
      ) : (
        <div className='w-full h-full bg-gray-200'>
          <Image src='/no-image.svg' width={30} height={25} alt='no image' />
        </div>
      )}
    </Link>
  );
}
