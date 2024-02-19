import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

const ALL_POSTS = '전체';

export default async function MoaList() {
  let session = await getServerSession(authOptions);
  const db = (await connectDB).db('moalist');

  const items = await db
    .collection('moa')
    .find({ author: session.user.email })
    .toArray();

  return <></>;
}
