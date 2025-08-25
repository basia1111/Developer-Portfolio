import { AnimationDefaultsType } from '@/types';
import { motion } from 'framer-motion';

const Text = ({ animationDefaults, isVisible }: { animationDefaults: AnimationDefaultsType; isVisible: boolean }) => {
  return (
    <>
      <motion.h1 {...animationDefaults(0.8, 1.4)} className='mb-6 text-5xl font-bold tracking-tight text-gray-900 md:text-7xl dark:text-white'>
        Barbara Żygilewicz
      </motion.h1>

      <motion.h2
        {...animationDefaults(0.8, 1.5)}
        className='mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-xl font-semibold text-transparent md:text-2xl dark:from-purple-400 dark:via-pink-400 dark:to-blue-400'
      >
        Fullstack Developer
      </motion.h2>

      <motion.p {...animationDefaults(0.8, 1.7)} className='mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl dark:text-gray-400'>
        Passionate developer building modern web applications with React, Next.js, and TypeScript. I have hands-on experience contributing to commercial
        WordPress projects and developing frontend applications through personal projects. Currently, I am expanding my skills in cloud technologies and DevOps.
      </motion.p>
    </>
  );
};

export default Text;
