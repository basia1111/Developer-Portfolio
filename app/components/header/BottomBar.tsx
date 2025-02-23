import { Terminal } from 'lucide-react';
import React from 'react';
import Menu from './Menu';
import MenuMobile from './MenuMobile';

const BottomBar = () => {
  return (
    <div className='border-b border-accent-primary/10 bg-light-bg-secondary backdrop-blur-sm dark:bg-dark-bg-secondary'>
      <div className='mx-auto'>
        <div className='flex items-center justify-between px-4 py-2 md:px-6'>
          <a href='/#home' className='group'>
            <Terminal size={22} className='text-accent-primary transition-colors dark:text-accent-light' />
          </a>
          <Menu />
          <MenuMobile />
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
