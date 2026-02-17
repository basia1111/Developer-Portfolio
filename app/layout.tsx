'use client';

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-base text-primary font-body relative overflow-hidden'>{children}</body>
    </html>
  );
}
