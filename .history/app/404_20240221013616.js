import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <>
      <Image src='/not-found.jpg' width={400} height={400} />
    </>
  );
}
