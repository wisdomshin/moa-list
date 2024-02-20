'use client';

export default function DeleteBtn(props) {
  console.log(props);
  return (
    <form action='/api/post/delete' method='POST'>
      <input
        type='text'
        name='_id'
        defaultValue={props.id}
        style={{ display: 'none' }}
      />
      <button
        type='submit'
        className='px-2 py-1 border border-[#546de5] text-[#546de5]'
      >
        삭제
      </button>
    </form>
  );
}
