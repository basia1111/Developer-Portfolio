import React from 'react';
import ModeSwitch from './ModeSwitch';

const TopBar = () => {
  return (
    <div className='hidden w-full border-b border-accent-primary/10 bg-light-bg-secondary backdrop-blur-sm sm:block dark:bg-dark-bg-secondary'>
      <div className='mx-auto'>
        <div className='flex items-center justify-between px-6 py-2'>
          <div className='flex items-center gap-6 font-mono text-xs text-light-text-secondary dark:text-dark-text-secondary'>
            <div className='flex items-center gap-2'>
              <div className='flex h-5 items-center gap-1.5 rounded-full border border-accent-primary/10 bg-light-bg-hover px-2 dark:bg-dark-bg-tertiary'>
                <div className='h-1.5 w-1.5 animate-pulse rounded-full bg-accent-primary dark:bg-accent-light'></div>
                <span>Available for Work</span>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-2'>
                <span className='text-accent-primary/50 dark:text-accent-light/50'>❯</span>
                <span>Kraków, Poland</span>
              </div>

              <div className='flex items-center gap-2'>
                <span className='text-accent-primary/50 dark:text-accent-light/50'>❯</span>
                <span>GMT+1</span>
              </div>
            </div>
          </div>

          <ModeSwitch />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
