import { connectDB } from '@/util/database';
import { getDate } from '@/util/date';
import { getUrlMeta } from '@/util/openGraph';

export default async function handler(req, res) {
  let dateTime = getDate();

  if (req.method == 'POST') {
    if (req.body.url == '') {
      res.status(400).json('제품 url을 입력해주세요.');
    } else if (req.body.category == '') {
      res.status(400).json('카테고리를 입력해주세요.');
    }

    req.body._id = JSON.parse(JSON.stringify(req.body._id));
    req.body.ogTitle = (await getUrlMeta(req.body.url)).title;
    req.body.ogImage = (await getUrlMeta(req.body.url)).image;
    req.body.ogDesc = (await getUrlMeta(req.body.url)).desc;

    try {
      const db = (await connectDB).db('moalist');
      const items = await db.collection('sample').insertOne({
        createdAt: dateTime,
        ...req.body,
      });

      return res.status(200).redirect(302, '/sample');
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}
