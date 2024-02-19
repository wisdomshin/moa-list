export default async function FilterableItems() {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? result
      : result.filter((post) => post.category === selected);

  return <></>;
}
