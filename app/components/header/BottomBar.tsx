import { Terminal } from 'lucide-react';
import React from 'react';
import Menu from './Menu';
import MenuMobile from './MenuMobile';

const BottomBar = () => {
  return (
    <div className='flex items-center justify-between pl-4 pr-2 pt-3 text-xs tracking-wide md:px-8'>
      <Terminal size={20} className='text-accent-primary' />
      <Menu />
      <MenuMobile />
    </div>
  );
};

export default BottomBar;
