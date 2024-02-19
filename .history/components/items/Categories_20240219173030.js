export default function Categories({ categories, selected, onClick }) {
  return (
    <>
      <h2>Category</h2>
      <ul>
        {categories.map((category, i) => (
          <li key={i} onClick={() => onClick(category)}>
            {category}
          </li>
        ))}
      </ul>
    </>
  );
}
