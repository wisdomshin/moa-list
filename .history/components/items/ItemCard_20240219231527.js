export default function ItemCard(item) {
  return (
    <>
      <div>{item.ogTitle}</div>
      <img src={item.ogImage} width={300} height={250} alt={item.ogTitle} />
    </>
  );
}
