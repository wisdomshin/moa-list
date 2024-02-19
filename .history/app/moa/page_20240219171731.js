export default function MoaList() {
  let session = await getServerSession(authOptions);

  const db = (await connectDB).db('forum2');

  
  return <></>;
}
