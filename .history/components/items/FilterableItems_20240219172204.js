import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';

export default async function FilterableItems() {
  let session = await getServerSession(authOptions);
  const db = (await connectDB).db('moalist');
  // 내 글만 보이게
  const result = await db
    .collection('post')
    .find({ author: session.user.email })
    .toArray();

  return <></>;
}