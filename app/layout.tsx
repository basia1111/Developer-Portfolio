'use client';

import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/header/Header';
import { LoadingContext } from './contexts/LoadingContext';
import './globals.css';
import PageLoader from './components/layout /PageLoader';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang='en'>
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <body className='relative bg-gradient-to-br from-gray-200 via-white to-gray-100 transition-colors duration-700 dark:from-gray-900 dark:via-black dark:to-gray-900'>
          <Header />
          {children}
          <Footer />
          <PageLoader isLoading={isLoading} />
        </body>
      </LoadingContext.Provider>
    </html>
  );
}
