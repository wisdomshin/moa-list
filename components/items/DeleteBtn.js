'use client';

export default function DeleteBtn(props) {
  const onRemove = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      alert('삭제되었습니다.');
    } else {
      alert('취소 되었습니다.');
    }
  };
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
        className='px-2 py-1 border border-[#546de5] text-[#546de5] rounded-md'
        onClick={onRemove}
      >
        삭제
      </button>
    </form>
  );
}
