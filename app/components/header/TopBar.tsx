import React from 'react';
import ModeSwitch from './ModeSwitch';

const TopBar = () => {
  return (
    <div className='dark:border-dark-border-primary/50 hidden w-full border-b sm:block'>
      <div className='flex items-center justify-between px-8 py-2.5 text-xs tracking-wide'>
        <div className='text-light-text-muted dark:text-dark-text-muted flex items-center gap-6'>
          <div className='flex items-center gap-1.5'>
            <div className='h-1.5 w-1.5 rounded-full bg-green-500'></div>
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
