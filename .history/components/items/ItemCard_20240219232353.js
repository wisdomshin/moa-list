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
        <div>
          <Image />
        </div>
      )}
    </Link>
  );
}
