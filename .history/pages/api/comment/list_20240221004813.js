import { connectDB } from '@/util/database';

export default async function handler(req, res) {
  const db = (await connectDB).db('moalist');
  let result = await db
    .collection('comment')
    .find({ parent: JSON.parse(req.query.id) })
    .toArray();

  return res.status(200).json(result);
}
