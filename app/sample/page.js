import FilterableItems from '@/components/items/FilterableItems';
import { connectDB } from '@/util/database';

export default async function MoaList() {
  const db = (await connectDB).db('moalist');

  const items = await db
    .collection('sample')
    .find()
    .sort({ createdAt: -1 })
    .toArray();
  const categories = [...new Set(items.map((item) => item.category))];

  return (
    <>
      <h3 className='mb-4 text-2xl'>sample</h3>
      <FilterableItems items={items} categories={categories} />
    </>
  );
}
