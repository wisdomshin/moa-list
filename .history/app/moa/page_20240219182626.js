import FilterableItems from '@/components/items/FilterableItems';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

export default async function MoaList() {
  let session = await getServerSession(authOptions);
  const db = (await connectDB).db('moalist');

  const items = await db
    .collection('moa')
    .find({ author: session.user.email })
    .toArray();

  console.log(items);

  const categories = [...new Set(items.map((item) => item.category))];
  // console.log(categories);

  return (
    <>
      <FilterableItems items={items} categories={categories} />
      <div className='border'>
        <Link href='/moa/write'>작성하기</Link>
      </div>
    </>
  );
}
