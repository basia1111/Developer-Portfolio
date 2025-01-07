'use client';

import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/header/Header';
import { LoadingContext } from './contexts/LoadingContext';
import './globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import { PropagateLoader } from 'react-spinners';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <html lang='en'>
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <body className='bg-light-bg-secondary dark:bg-dark-bg-secondary relative'>
          <Header />
          {children}
          <Footer />

          <AnimatePresence mode='wait'>
            {isLoading && (
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                exit={{
                  y: '-100%',
                  transition: { duration: 0.4, ease: 'easeOut' },
                }}
                className='bg-dark-bg-tertiary fixed inset-0 z-50 flex items-center justify-center'
              >
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.2, ease: 'easeOut' },
                  }}
                >
                  <PropagateLoader color='#6466F1' />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </body>
      </LoadingContext.Provider>
    </html>
  );
}
