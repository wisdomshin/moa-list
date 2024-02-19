export default function Detail() {
  let session = await getServerSession(authOptions);

  const db = (await connectDB).db('forum2');
  const result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.id) });

  return <></>;
}
