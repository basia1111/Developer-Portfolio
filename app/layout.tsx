'use client';
import Cursor from './components/cursor';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='transition: all 0.2s relative z-[2] flex !cursor-none justify-center bg-base px-[clamp(40px,7vw,112px)] py-[clamp(20px,3vw,36px)] font-body text-primary'>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
