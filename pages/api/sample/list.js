import { connectDB } from '@/util/database';

export default async function handler(req, res) {
  const db = (await connectDB).db('moalist');
  if (req.method == 'POST') {
    const items = await db
      .collection('sample')
      .find()
      .sort({ createdAt: -1 })
      .toArray();
  }
}
