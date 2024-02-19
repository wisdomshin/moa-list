export default function Categories({ categories, selected, onClick }) {
  return (
    <>
      <ul className='flex gap-4'>
        {categories.map((category, i) => (
          <li
            key={i}
            onClick={() => onClick(category)}
            className={`px-2 py-1 border border-[#ced4da] rounded-md hover:bg-[#f1f3f5]${
              category === selected && 'text-sky-600'
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </>
  );
}
