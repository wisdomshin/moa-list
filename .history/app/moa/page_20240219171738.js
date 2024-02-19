import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

export default async function MoaList() {
  let session = await getServerSession(authOptions);

  const db = (await connectDB).db('forum2');

  return <></>;
}
