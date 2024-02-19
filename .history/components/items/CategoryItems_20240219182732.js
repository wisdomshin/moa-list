export default function CategoryItems({ filtered, items }) {
  // console.log('filtered', filtered);
  return (
    <>
      {/* <h2>Category List</h2> */}
      {filtered.map((item, i) => (
        <div key={i}>
          {/* <div>{item.title}</div> */}
          <div className='text-blue-900'>{item?.ogTitle}</div>
        </div>
      ))}
    </>
  );
}
