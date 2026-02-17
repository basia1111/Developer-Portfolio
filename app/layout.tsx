'use client';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-base text-primary font-body relative z-[2] flex justify-center px-[clamp(40px,7vw,112px)] py-[clamp(20px,3vw,36px)]'>{children}</body>
    </html>
  );
}
