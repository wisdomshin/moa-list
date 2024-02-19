export default function ItemCard({ ogTitle, ogImage }) {
  return (
    <>
      <div>{item?.ogTitle}</div>
      <img src={item?.ogImage} width={300} height={250} />
    </>
  );
}
