import { Terminal } from 'lucide-react';
import React from 'react';
import Menu from './Menu';
import MenuMobile from './MenuMobile';

const BottomBar = () => {
  return (
    <div className='flex items-center justify-between pb-2 pl-4 pr-2 pt-3 text-xs tracking-wide md:px-8'>
      <a href='/#home'>
        <Terminal size={20} className='text-accent-primary hover:scale-105' />
      </a>
      <Menu />
      <MenuMobile />
    </div>
  );
};

export default BottomBar;
