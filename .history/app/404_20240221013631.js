import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <>
      <Image
        src='/not-found.jpg'
        width={400}
        height={400}
        alt='페이지를 찾을 수 없음'
      />
    </>
  );
}
