'use client';

export default function DeleteBtn(props) {
  return (
    <form action='/api/post/delete' method='POST'>
      <input
        type='text'
        name='_id'
        defaultValue={props.slug}
        style={{ display: 'none' }}
      />
      <button type='submit'>삭제</button>
    </form>
  );
}
