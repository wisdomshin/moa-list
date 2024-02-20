import { connectDB } from '@/util/database';
import { ObjectID } from 'mongodb';

export default async function handler(req, res) {
  // console.log(req.query.id);

  const db = (await connectDB).db('forum');
  let result = await db
    .collection('comment')
    .find({ parent: new ObjectID(req.query.id) })
    .toArray();

  return res.status(200).json(result);
}
