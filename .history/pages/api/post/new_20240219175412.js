import { connectDB } from '@/util/database';
import { getDate } from '@/util/date';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (session) {
    req.body.author = session.user.email;
  }

  let dateTime = getDate();

  if (req.method == 'POST') {
    if (req.body.url == '') {
      res.status(400).json('글 제목을 작성해주세요.');
    } else if (req.body.category == '') {
      res.status(400).json('글 내용을 작성해주세요.');
    }

    try {
      const db = (await connectDB).db('forum2');
      const result = await db
        .collection('post')
        .insertOne({ createdAt: dateTime, ...req.body });

      return res.status(200).redirect(302, '/board');
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}
