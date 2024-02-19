import FilterableItems from '@/components/items/FilterableItems';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';

export default async function MoaList() {
  let session = await getServerSession(authOptions);
  const db = (await connectDB).db('moalist');

  const items = await db
    .collection('moa')
    .find({ author: session.user.email })
    .toArray();

  const categories = [...new Set(items.map((item) => item.category))];
  console.log(categories);

  return <FilterableItems />;
}
