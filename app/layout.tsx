'use client';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-base text-primary font-body relative z-[2] overflow-hidden px-[clamp(40px,7vw,112px)] py-[clamp(20px,3vw,36px)]'>
        <div className='fixed bottom-0 left-[clamp(20px,5vw,72px)] top-0 z-0 w-[1px] bg-[rgba(255,255,255,0.05)]' />
        <div className='fixed bottom-0 right-[clamp(20px,5vw,72px)] top-0 z-0 w-[1px] bg-[rgba(255,255,255,0.05)]' />
        {children}
      </body>
    </html>
  );
}
