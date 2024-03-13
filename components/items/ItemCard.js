import Link from 'next/link';
import Image from 'next/image';

export default function ItemCard({ item }) {
  return (
    <Link href={`/moa/${item._id.toString()}`}>
      <article>
        {item.ogImage ? (
          <div className='flex items-center justify-center w-full h-[200px] md:h-[250px] rounded-md shadow-md hover:shadow-xl overflow-hidden'>
            <img
              src={item.ogImage}
              width={300}
              height={250}
              alt={item.ogTitle}
              className='duration-300 scale-90 hover:scale-100'
            />
          </div>
        ) : (
          <div className='flex items-center justify-center w-full h-[200px] md:h-[250px] bg-gray-200 rounded-md'>
            <Image src='/no-image.svg' width={30} height={25} alt='no image' />
          </div>
        )}
        <div className='mt-2 text-sm md:text-md lg:text-base line-clamp-2'>
          {item.ogTitle}
        </div>
      </article>
    </Link>
  );
}
