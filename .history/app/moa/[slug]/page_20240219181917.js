import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';
import { ObjectId } from 'mongodb';

export default async function Detail(props) {
  let session = await getServerSession(authOptions);

  const db = (await connectDB).db('moalist');
  const item = await db
    .collection('moa')
    .findOne({ _id: new ObjectId(props.params.id) });

  // const itemId = JSON.stringify(item._id);

  const find = await db
    .collection('moa')
    .findOne({ _id: new ObjectId(props.params.id) });

  const findRole = await db
    .collection('user_cred')
    .findOne({ email: session?.user.email });

  const ogTtile = (await getUrlMeta(result.url))?.title;
  const ogImage = (await getUrlMeta(result.url))?.image;
  const ogDesc = (await getUrlMeta(result.url))?.desc;

  return (
    <>
      <b>상세페이지</b>
      <div>{item.ogTitle}</div>
      <div>{item.ogImage}</div>
      <div>{item.ogDesc}</div>
    </>
  );
}