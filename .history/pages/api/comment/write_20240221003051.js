import { ObjectID } from 'mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import { connectDB } from '@/util/database';

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);

  if (req.method == 'POST') {
    req.body = JSON.parse(req.body);

    // console.log(req.body);

    // console.log(session);
    let comment = {
      content: req.body.comment,
      parent: new ObjectID(req.body.id),
      author: session.user.email,
      name: session.user.name,
    };

    const db = (await connectDB).db('moa');
    let result = await db.collection('comment').insertOne(comment);
    res.status(200).json('댓글 저장 완료');
  }
}
