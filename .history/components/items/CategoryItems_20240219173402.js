export default function CategoryItems({ filtered }) {
  return (
    <>
      <h2>Category List</h2>
      {filtered.map((el, i) => (
        <div key={i}>
          <div>{el.title}</div>
          <div>{el?.category}</div>
        </div>
      ))}
    </>
  );
}
