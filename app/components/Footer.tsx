const Footer = () => {
  return (
    <footer className='border-dark-border-primary/10 bg-light-bg-secondary dark:bg-dark-bg-secondary/50 border-t py-6 backdrop-blur-sm'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='flex items-center justify-between'>
          <p className='text-light-text-secondary dark:text-dark-text-secondary text-sm'>© 2024 Basia Żygilewicz</p>
          <div className='flex items-center gap-2 text-sm'>
            <span className='text-light-text-secondary dark:text-dark-text-secondary'>Built with</span>
            <span className='text-accent-primary font-mono'>Next.js, FramerMotion</span>
            <span className='text-light-text-secondary dark:text-dark-text-secondary'>&</span>
            <span className='text-accent-primary font-mono'>Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
