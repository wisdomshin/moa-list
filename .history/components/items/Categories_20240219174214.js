export default function Categories({ categories, selected, onClick }) {
  return (
    <>
      {/* <h2>Category</h2> */}
      <ul className='flex gap-4'>
        {categories.map((category, i) => (
          <li
            key={i}
            onClick={() => onClick(category)}
            className='px-2 py-1 border border-[#ced4da] rounded-md'
          >
            {category}
          </li>
        ))}
      </ul>
    </>
  );
}
