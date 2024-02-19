import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method == 'POST') {
    let edit = { title: req.body.title, content: req.body.content };

    const db = (await connectDB).db('forum');
    let items = await db
      .collection('post')
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: edit });

    res.status(200).redirect('/list');
  }
}
