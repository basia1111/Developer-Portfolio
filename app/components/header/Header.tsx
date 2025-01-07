import React from 'react';
import TopBar from './TopBar';
import BottomBar from './BottomBar';

const Header = () => {
  return (
    <nav className='dark:bg-primary/80 fixed left-0 right-0 top-0 z-50 bg-gradient-to-b from-light-bg-secondary to-transparent backdrop-blur-sm dark:from-dark-bg-secondary'>
      <div className='mx-auto'>
        <TopBar />
        <BottomBar />
      </div>
    </nav>
  );
};

export default Header;
