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

  const categories = [...new Set(items.map((item) => item.category))];

  return (
    <>
      <div>
        <Link
          href='/moa/write'
          className='inline-block px-4 py-1 bg-[#546de5] rounded-md text-white mt-4'
        >
          작성하기
        </Link>
      </div>
      <FilterableItems items={items} categories={categories} />
    </>
  );
}
