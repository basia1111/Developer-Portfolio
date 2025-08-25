import { AnimationDefaultsType } from '@/types';
import { motion } from 'framer-motion';

const Buttons = ({ animationDefaults, isVisible }: { animationDefaults: AnimationDefaultsType; isVisible: boolean }) => {
  return (
    <motion.div {...animationDefaults(0.8, 2.2)} className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
      <a
        href='#projects'
        className='rounded-full border border-purple-400 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 text-center text-base font-semibold text-white shadow-md shadow-purple-500/40 transition-all duration-200 hover:scale-[1.02] sm:text-lg dark:border-purple-400/50 dark:shadow-2xl'
      >
        View Projects
      </a>

      <a
        href='#contact'
        className='rounded-full border border-gray-300 bg-white px-8 py-3 text-center text-base font-semibold text-gray-700 shadow-md shadow-gray-500/5 transition-all duration-200 hover:scale-[1.02] hover:border-purple-400 hover:bg-gray-50 hover:text-gray-900 sm:text-lg dark:border-gray-600/50 dark:bg-gray-800/60 dark:text-gray-300 dark:shadow-2xl dark:shadow-purple-500/5 dark:hover:border-purple-400/50 dark:hover:bg-gray-700/80 dark:hover:text-white'
      >
        Get In Touch
      </a>
    </motion.div>
  );
};

export default Buttons;
