const Footer = () => {
  return (
    <footer className='border-t border-accent-primary/10 bg-light-bg-secondary py-6 backdrop-blur-sm dark:bg-dark-bg-secondary'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
          <div className='flex items-center gap-2'>
            <span className='font-mono text-sm text-accent-primary dark:text-accent-light'>❯</span>
            <p className='text-sm text-light-text-secondary dark:text-dark-text-secondary'>© 2024 Basia Żygilewicz</p>
          </div>

          <div className='flex items-center gap-2 text-sm'>
            <span className='text-light-text-secondary dark:text-dark-text-secondary'>Built with</span>
            <span className='font-mono text-accent-primary dark:text-accent-light'>Next.js</span>
            <span className='text-light-text-secondary dark:text-dark-text-secondary'>+</span>
            <span className='font-mono text-accent-primary dark:text-accent-light'>FramerMotion</span>
            <span className='text-light-text-secondary dark:text-dark-text-secondary'>+</span>
            <span className='font-mono text-accent-primary dark:text-accent-light'>Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
