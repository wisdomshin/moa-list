import Marquee from 'react-fast-marquee';
import ItemCard from '../items/ItemCard';

export default async function MarqueePage({ items }) {
  return (
    <section className='relative h-full pointer-events-none'>
      <Marquee
        className='absolute bottom-0 top-[65%] left-[10%] w-[200%]'
        style={{ transform: 'rotate(-25deg)' }}
      >
        <ul className='flex gap-8'>
          {items.map((item) => (
            <li key={item.ogTitle} className='w-[300px]'>
              <ItemCard item={item} />
            </li>
          ))}
        </ul>
      </Marquee>
    </section>
  );
}
