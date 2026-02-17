'use client';

export default function Home() {
  return (
    <div className='relative min-h-screen'>
      <div className='fixed bottom-0 left-[clamp(20px,5vw,72px)] top-0 z-0 w-[1px] bg-[rgba(255,255,255,0.05)]' />
      <div className='fixed bottom-0 right-[clamp(20px,5vw,72px)] top-0 z-0 w-[1px] bg-[rgba(255,255,255,0.05)]' />
    </div>
  );
}
