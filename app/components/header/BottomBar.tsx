import { Terminal } from 'lucide-react';
import React from 'react';
import Menu from './Menu';

const BottomBar = () => {
  return (
    <div className='flex items-center justify-between px-8 py-2.5 text-xs tracking-wide'>
      <Terminal size={20} className='text-accent-primary' />
      <Menu />
    </div>
  );
};

export default BottomBar;
