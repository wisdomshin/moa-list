import Link from 'next/link';

export default function ItemCard(item) {
  console.log(item);
  return (
    <Link href={`/moa/${item._id.toString()}`}>
      <div>{item.ogTitle}</div>
      <img src={item.ogImage} width={300} height={250} alt={item.ogTitle} />
    </Link>
  );
}