import FilterableItems from '@/components/items/FilterableItems';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function MoaList() {
  let session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }
  const db = (await connectDB).db('moalist');

  const items = await db
    .collection('moa')
    .find({ author: session?.user.user_id })
    .sort({ createdAt: -1 })
    .toArray();
  const categories = [...new Set(items.map((item) => item.category))];

  return <FilterableItems items={items} categories={categories} />;
}
