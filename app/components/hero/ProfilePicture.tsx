import { motion } from 'framer-motion';
import { AnimationDefaultsType } from '@/types';

const ProfilePicture = ({ animationDefaults, isVisible }: { animationDefaults: AnimationDefaultsType; isVisible: boolean }) => {
  return (
    <motion.div
      {...animationDefaults(0.8, 1.2)}
      className='relative mx-auto flex h-28 w-28 justify-center rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 align-middle shadow-2xl shadow-purple-500/40 sm:h-40 sm:w-40'
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        className='absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 opacity-75'
      />
      <div className='relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-purple-400/30 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900'>
        <img src='/my-photo.png' alt='Barbara Żygilewicz' className='h-full w-full object-cover transition-transform hover:scale-110' />
      </div>
    </motion.div>
  );
};

export default ProfilePicture;
