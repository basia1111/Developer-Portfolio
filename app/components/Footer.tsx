const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='border-t border-gray-200 bg-white/70 py-8 backdrop-blur-md dark:border-gray-700/30 dark:bg-gray-900/50'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
          <div className='flex items-center gap-2'>
            <span className='font-mono text-sm text-purple-400'>❯</span>
            <p className='text-sm font-light text-gray-700 dark:text-gray-300'>
              © {currentYear} <span className='font-medium text-gray-700 dark:text-white'>Basia Żygilewicz</span>
            </p>
          </div>

          <div className='flex items-center gap-3 text-xs sm:text-sm'>
            <span className='font-light text-gray-700 dark:text-gray-400'>Built with</span>
            <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-mono font-medium text-transparent'>Next.js</span>
            <span className='text-gray-500'>+</span>
            <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-mono font-medium text-transparent'>FramerMotion</span>
            <span className='text-gray-500'>+</span>
            <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-mono font-medium text-transparent'>Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
