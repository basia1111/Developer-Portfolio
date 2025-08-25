'use client';

import { motion } from 'framer-motion';

const orbPulse = (delay: number, duration: number) => ({
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
  },
  transition: {
    duration,
    delay,
    repeat: Infinity,
    ease: 'easeInOut',
  },
});

const Gradients = () => {
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>
      <motion.div
        {...orbPulse(0.2, 8)}
        className='absolute -right-48 -top-48 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-purple-300/90 via-pink-300/90 to-blue-300/95 blur-3xl dark:from-purple-400/40 dark:via-pink-400/30 dark:to-blue-400/35'
      />
      <motion.div
        {...orbPulse(1.5, 4)}
        className='absolute -top-20 left-[60%] h-56 w-56 rounded-full bg-gradient-to-tl from-pink-200/90 to-purple-300/95 blur-2xl dark:from-pink-300/30 dark:to-purple-300/25'
      />
      <motion.div
        {...orbPulse(3, 7)}
        className='left-1/5 absolute top-48 h-96 w-96 rounded-full bg-gradient-to-l from-pink-300/95 via-purple-300/90 to-cyan-300/95 blur-3xl dark:from-pink-300/35 dark:via-purple-300/30 dark:to-cyan-300/35'
      />
      <motion.div
        {...orbPulse(0.8, 7)}
        className='absolute -bottom-48 ml-auto mr-auto h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-300/95 via-cyan-300/90 to-purple-500/90 blur-3xl dark:from-blue-400/35 dark:via-cyan-400/40 dark:to-purple-400/30'
      />
      <motion.div
        {...orbPulse(2.2, 5)}
        className='absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-gradient-to-l from-pink-200/95 via-purple-200/90 to-cyan-200/95 blur-3xl dark:from-pink-300/35 dark:via-purple-300/30 dark:to-cyan-300/35'
      />
      <motion.div
        {...orbPulse(1, 6)}
        className='absolute right-1/3 top-1/2 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-200/95 to-blue-200/90 blur-2xl dark:from-cyan-300/25 dark:to-blue-300/30'
      />
      <motion.div
        {...orbPulse(2.8, 6)}
        className='left-1/6 absolute top-2/3 h-48 w-48 rounded-full bg-gradient-to-r from-blue-200/95 to-cyan-200/90 blur-2xl dark:from-blue-300/25 dark:to-cyan-300/30'
      />
    </div>
  );
};

export default Gradients;
