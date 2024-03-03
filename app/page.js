export default function Home() {
  return (
    <section
      className='flex border min-h-[700px] shadow-md rounded-md justify-center items-center'
      style={{
        'background-image': 'url("/img_background03/img_background03@2x.png")',
        'background-color': '#08234D65',
        'background-position': 'center',
        'background-size': 'cover',
        'box-shadow': '10px 10px 20px #00000014',
      }}
    >
      <div className='flex flex-col gap-8'>
        <h2 className='text-white shadow-md lg:text-4xl md:text-2xl'>
          URL 입력 만으로 버킷 리스트 저장하세요!
        </h2>
        <input
          type='text'
          className='border max-w-[700px] rounded-md h-8 p-6'
          placeholder='가지고 싶은 아이템 url을 입력하세요.'
          disabled
        />
      </div>
    </section>
  );
}
