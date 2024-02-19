import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  const db = (await connectDB).db('moalist');
  let findEmail = await db
    .collection('user_cred')
    .findOne({ email: req.body.email });

  if (req.method == 'POST') {
    if (req.body.name == '') {
      res.status(400).json('이름을 입력해주세요.');
    } else if (req.body.email == '') {
      res.status(400).json('이메일을 입력해주세요.');
    } else if (req.body.password == '') {
      res.status(400).json('비밀번호를 입력해주세요.');
    }

    if (findEmail == null) {
      let hash = await bcrypt.hash(req.body.password, 10);
      req.body.password = hash;

      await db.collection('user_cred').insertOne(req.body);
      res.status(200).redirect('/');
    } else {
      res.status(200).json('이미 가입된 이메일 입니다.');
    }
  }
}
