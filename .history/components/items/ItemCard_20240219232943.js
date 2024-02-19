import Link from 'next/link';
import Image from 'next/image';

export default function ItemCard({ item }) {
  console.log(item);
  return (
    <Link href={`/moa/${item._id}`} className='my-2'>
      {item.ogImage ? (
        <div className='flex items-center justify-center w-full h-full h-[200px] rounded-md'>
          <img src={item.ogImage} width={300} height={250} alt={item.ogTitle} />
        </div>
      ) : (
        <div className='flex items-center justify-center w-full h-full h-[200px] bg-gray-200 rounded-md'>
          <Image src='/no-image.svg' width={30} height={25} alt='no image' />
        </div>
      )}
      <div className='mt-2'>{item.ogTitle}</div>
    </Link>
  );
}
