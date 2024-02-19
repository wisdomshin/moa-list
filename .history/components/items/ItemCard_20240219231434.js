export default function ItemCard({ ogTitle, ogImage }) {
  return (
    <>
      <div>{ogTitle}</div>
      <img src={ogImage} width={300} height={250} />
    </>
  );
}
