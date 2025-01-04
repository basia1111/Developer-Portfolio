import React from 'react';
import TopBar from './TopBar';
import BottomBar from './BottomBar';

const Header = () => {
  return (
    <nav className='dark:bg-primary/80 fixed left-0 right-0 top-0 z-50 backdrop-blur-sm'>
      <div className='mx-auto'>
        <TopBar />
        <BottomBar />
      </div>
    </nav>
  );
};

export default Header;
