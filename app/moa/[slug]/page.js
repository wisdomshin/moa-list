import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';
import { ObjectId } from 'mongodb';
import Link from 'next/link';
import DeleteBtn from '@/components/items/DeleteBtn';
import CommentWrite from '@/components/comment/CommentWrite';
import CommnetList from '@/components/comment/CommentList';

export default async function Detail(props) {
  let session = await getServerSession(authOptions);

  const db = (await connectDB).db('moalist');
  const item = await db
    .collection('moa')
    .findOne({ _id: new ObjectId(props.params.slug) });

  const itemId = JSON.stringify(item._id);
  // console.log('itemId', itemId);

  const find = await db
    .collection('moa')
    .findOne({ _id: new ObjectId(props.params.slug) });

  const findRole = await db
    .collection('user_cred')
    .findOne({ user_id: session?.user.user_id });

  return (
    <>
      <section>
        <div className='pb-2 border-b border-gray-200'>
          <h2 className='text-2xl font-bold'>
            {item.ogTitle}
            <span className='text-xl text-gray-400'> ({item.category})</span>
          </h2>
          <span className='block text-right text-sm text-[#8A8A8A] pt-1'>
            {item.createdAt}
          </span>
        </div>
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
          판매 페이지로 이동하기
        </Link>
      </section>
      <CommnetList itemId={itemId} />
      <CommentWrite itemId={itemId} />
      <div className='flex justify-end gap-2'>
        <Link
          href={'/moa'}
          className='px-2 py-1 rounded-md bg-[#546de5] text-white'
        >
          목록으로
        </Link>
        {session?.user.user_id == find.author || findRole?.role == 'admin' ? (
          <DeleteBtn id={props.params.slug} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
