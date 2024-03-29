import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req, res) {
  const db = (await connectDB).db('moalist');
  let session = await getServerSession(req, res, authOptions);

  const find = await db
    .collection('moa')
    .findOne({ _id: new ObjectId(req.body._id) });

  console.log('req.body', req.body);

  const findRole = await db
    .collection('user_cred')
    .findOne({ user_id: session?.user.user_id });

  if (req.method == 'POST') {
    if (session.user.user_id == find.author || findRole?.role == 'admin') {
      try {
        const item = await db
          .collection('moa')
          .deleteOne({ _id: new ObjectId(req.body._id) });
        return res.status(200).redirect('/moa');
      } catch (error) {
        return res.status(500).json(error);
      }
    }
  }
}
