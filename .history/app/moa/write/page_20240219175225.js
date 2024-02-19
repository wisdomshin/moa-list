export default async function Write() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }

  return (
    <div>
      <h4>글작성</h4>
      <form action='/api/post/new' method='POST'>
        <input name='title' placeholder='title' />
        <textarea name='content' placeholder='content' />
        <input
          name='url'
          placeholder='원하는 제품 페이지의 url을 입력해주세요.'
        />
        <button type='submit'>버튼</button>
      </form>
    </div>
  );
}
