import { connectDB } from '@/util/database';
import MainBg from './mainBg';

export default async function WrapBackground() {
  const db = (await connectDB).db('moalist');
  const items = await db
    .collection('sample')
    .find()
    .sort({ createdAt: -1 })
    .toArray();

  return (
    <section className='absolute bottom-0 w-full p-4 pointer-events-none'>
      <MainBg items={items} />
    </section>
  );
}
