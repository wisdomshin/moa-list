export default function Register() {
  return (
    <section className='flex justify-center items-center w-full h-[calc(100vh-200px)]'>
      <form method='POST' action='/api/auth/signup'>
        <section className='flex flex-col gap-4 p-12 rounded-md shadow-lg w-[350px] border border-gray-100'>
          <h2 className='mb-2 text-xl font-semibold'>회원가입</h2>
          <input
            name='name'
            type='text'
            placeholder='이름'
            className='border rounded-sm active:border-[#546de5] p-2'
          />
          <input
            name='user_id'
            type='text'
            placeholder='아이디'
            className='border rounded-sm active:border-[#546de5] p-2'
          />
          <input
            name='password'
            type='password'
            placeholder='비밀번호'
            className='border rounded-sm active:border-[#546de5] p-2'
          />
          <input
            name='role'
            type='text'
            defaultValue='normal'
            style={{ display: 'none' }}
          />
          <button
            type='submit'
            className='bg-[#546de5] text-white py-2 px-3 rounded-md'
          >
            id/pw 가입요청
          </button>
        </section>
      </form>
    </section>
  );
}
