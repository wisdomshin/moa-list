export default function Home() {
  return (
    <section className='flex min-h-[700px] rounded-md justify-center'>
      <div className='flex flex-col gap-8'>
        <h2 className='text-2xl font-semibold text-center text-gray-800 xl:text-5xl md:text-4xl'>
          <div>나만의 갈망템을</div>
          <div className='mt-12'>모아리스트에 저장하세요!</div>
        </h2>
        <p className='text-lg text-center text-gray-800 md:text-xl xl:text-2xl'>
          URL 입력으로 간단하게 저장할 수 있습니다!
        </p>
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
