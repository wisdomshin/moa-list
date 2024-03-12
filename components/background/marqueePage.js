import Marquee from 'react-fast-marquee';
import ItemCard from '../items/ItemCard';

export default async function MarqueePage({ items }) {
  return (
    <section className='relative h-full pointer-events-none'>
      <Marquee className='absolute bottom-0 top-[65%] lg:left-[10%] w-[200%] transform rotate-45 md:-rotate-45 lg:-rotate-45'>
        <ul className='flex gap-8'>
          {items.map((item) => (
            <li key={item.ogTitle} className='xl:w-[300px] w-[200px] last:mr-8'>
              <ItemCard item={item} />
            </li>
          ))}
        </ul>
      </Marquee>
    </section>
  );
}
