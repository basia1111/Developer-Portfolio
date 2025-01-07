const Footer = () => {
  return (
    <footer className='border-t border-dark-border-primary/10 bg-light-bg-secondary py-6 backdrop-blur-sm dark:bg-dark-bg-secondary/50'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='flex flex-col items-center justify-between gap-2 md:flex-row'>
          <p className='text-sm text-light-text-secondary dark:text-dark-text-secondary'>© 2024 Basia Żygilewicz</p>
          <div className='flex items-center gap-2 text-sm'>
            <span className='text-light-text-secondary dark:text-dark-text-secondary'>Built with</span>
            <span className='font-mono text-accent-primary'>Next.js, FramerMotion</span>
            <span className='text-light-text-secondary dark:text-dark-text-secondary'>&</span>
            <span className='font-mono text-accent-primary'>Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
