import { connectDB } from '@/util/database';
import MainBg from './mainBg';

export default async function WrapBackground() {
  const db = (await connectDB).db('moalist');
  const items = await db
    .collection('sample')
    .find()
    .sort({ createdAt: -1 })
    .toArray();

  return <MainBg items={items} />;
}
