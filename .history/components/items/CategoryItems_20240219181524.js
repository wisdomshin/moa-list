export default function CategoryItems({ filtered }) {
  return (
    <>
      {/* <h2>Category List</h2> */}
      console.log(filtered);
      {filtered.map((item, i) => (
        <div key={i}>
          {/* <div>{item.title}</div> */}
          <div className='text-blue-100'>{item?.category}</div>
        </div>
      ))}
    </>
  );
}
