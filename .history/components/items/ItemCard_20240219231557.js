export default function ItemCard(item) {
  return (
    <Link href={`/moa/item._id`}>
      <div>{item.ogTitle}</div>
      <img src={item.ogImage} width={300} height={250} alt={item.ogTitle} />
    </Link>
  );
}
