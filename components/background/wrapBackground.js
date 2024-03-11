import { connectDB } from '@/util/database';
import MainBg from './mainBg';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function WrapBackground() {
  let session = await getServerSession(authOptions);
  const db = (await connectDB).db('moalist');
  const items = await db
    .collection('sample')
    .find({ author: session?.user.user_id })
    .sort({ createdAt: -1 })
    .toArray();
  return <MainBg items={items} />;
}
