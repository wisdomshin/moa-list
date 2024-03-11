import useSWR from 'swr';

export default function useSample() {
  const { data: items, error, isLoading } = useSWR('/api/sample.list');

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // render data
  return items;
}
