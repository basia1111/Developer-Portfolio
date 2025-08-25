import { AnimatePresence, motion } from 'framer-motion';

const PageLoader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <AnimatePresence mode='wait'>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{
            opacity: 0,
            transition: { delay: 1.5, duration: 0.6, ease: 'easeInOut' },
          }}
          className='fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-light-bg-tertiary dark:bg-dark-bg-tertiary'
        >
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 2, ease: 'easeOut' },
            }}
            className='relative z-10'
          >
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='h-20 w-20 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-2xl'
            />
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              exit={{
                scale: [0, 1.15, 0.95, 15],
                opacity: [1, 1, 1, 0],
                transition: {
                  duration: 1,
                  ease: ['easeOut', 'easeInOut', 'easeIn'],
                  times: [0, 0.25, 0.4, 1],
                },
              }}
              className='absolute inset-0 m-auto h-20 w-20 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-lg'
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
