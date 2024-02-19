import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req, res) {
  const db = (await connectDB).db('moalist');
  let session = await getServerSession(req, res, authOptions);

  const find = await db
    .collection('post')
    .findOne({ _id: new ObjectId(req.body._id) });

  const findRole = await db
    .collection('user_cred')
    .findOne({ email: session?.user.email });

  if (req.method == 'POST') {
    if (session.user.email == find.author || findRole?.role == 'admin') {
      try {
        const result = await db
          .collection('post')
          .deleteOne({ _id: new ObjectId(req.body._id) });
        return res.status(200).redirect('/board');
      } catch (error) {
        return res.status(500).json(error);
      }
    }
  }
}
