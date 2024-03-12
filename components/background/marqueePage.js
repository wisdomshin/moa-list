import Marquee from 'react-fast-marquee';
import ItemCard from '../items/ItemCard';

export default async function MarqueePage({ items }) {
  return (
    <section className=''>
      <Marquee>
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
