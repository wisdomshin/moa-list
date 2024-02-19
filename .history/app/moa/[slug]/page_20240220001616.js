import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';
import { ObjectId } from 'mongodb';
import { getUrlMeta } from '@/util/openGraph';
import Link from 'next/link';

export default async function Detail(props) {
  let session = await getServerSession(authOptions);

  const db = (await connectDB).db('moalist');
  const item = await db
    .collection('moa')
    .findOne({ _id: new ObjectId(props.params.slug) });

  // console.log(item);

  const itemId = JSON.stringify(item._id);

  const find = await db
    .collection('moa')
    .findOne({ _id: new ObjectId(props.params.slug) });

  console.log(props);

  const findRole = await db
    .collection('user_cred')
    .findOne({ email: session?.user.email });

  const ogTitle = (await getUrlMeta(item?.url))?.title;
  const ogImage = (await getUrlMeta(item?.url))?.image;
  const ogDesc = (await getUrlMeta(item?.url))?.desc;

  return (
    <>
      <b>상세페이지</b>
      <div>
        <h2>{ogTitle}</h2>
        <img src={ogImage} alt={ogTitle} />
        <p>{ogDesc}</p>
      </div>
      <div>
        <Link href={'/moa'}>목록으로</Link>
        {/* {session?.user.email == find.author ? (
          <Link href={`/moa/${props.params.id}/edit`}>수정하기</Link>
        ) : (
          <></>
        )} */}
      </div>
    </>
  );
}