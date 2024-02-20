import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';
import { ObjectId } from 'mongodb';
import { getUrlMeta } from '@/util/openGraph';
import Link from 'next/link';
import DeleteBtn from '@/components/items/DeleteBtn';

export default async function Detail(props) {
  let session = await getServerSession(authOptions);

  const db = (await connectDB).db('moalist');
  const item = await db
    .collection('moa')
    .findOne({ _id: new ObjectId(props.params.slug) });

  const itemId = JSON.stringify(item._id);

  const find = await db
    .collection('moa')
    .findOne({ _id: new ObjectId(props.params.slug) });

  const findRole = await db
    .collection('user_cred')
    .findOne({ email: session?.user.email });

  // const ogTitle = (await getUrlMeta(item?.url))?.title;
  // const ogImage = (await getUrlMeta(item?.url))?.image;
  // const ogDesc = (await getUrlMeta(item?.url))?.desc;

  return (
    <>
      <div>
        <h2 className='text-xl font-bold'>{item.ogTitle}</h2>
        <img
          src={item.ogImage}
          alt={item.ogTitle}
          className='mx-auto w-[600px] my-6'
        />
        <p>{item.ogDesc}</p>
        <Link
          href={item.url}
          target='_blank'
          className='text-[#546de5] my-4 inline-block'
        >
          판매 페이지로 이동하기 &#xF138;
        </Link>
      </div>
      <div className='flex justify-end gap-2'>
        <Link
          href={'/moa'}
          className='px-2 py-1 rounded-md bg-[#546de5] text-white'
        >
          목록으로
        </Link>
        {session?.user.email == find.author || findRole?.role == 'admin' ? (
          <DeleteBtn id={props.params.slug} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
