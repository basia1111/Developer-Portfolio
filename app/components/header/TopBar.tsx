import React from 'react';
import ModeSwitch from './ModeSwitch';

const TopBar = () => {
  return (
    <div className='hidden w-full border-b sm:block dark:border-dark-border-primary/50'>
      <div className='flex items-center justify-between px-8 py-2 text-[13px] tracking-wide'>
        <div className='flex items-center gap-6 text-light-text-secondary dark:text-dark-text-secondary'>
          <div className='flex items-center gap-1.5'>
            <div className='h-1.5 w-1.5 animate-pulse rounded-full bg-green-500'></div>
            <span>Available for Work</span>
          </div>
          <span>Kraków, Poland</span>
          <span>GMT+1</span>
        </div>
        <ModeSwitch />
      </div>
    </div>
  );
};

export default TopBar;
