import React from 'react';
import ModeSwitch from './ModeSwitch';
import Menu from './Menu';
import MenuMobile from './MenuMobile';

const Header = () => {
  return (
    <nav className='fixed left-0 right-0 top-0 z-50 mx-auto -mb-16 flex w-full items-center justify-between border-b border-gray-200 bg-white/70 px-4 py-2 backdrop-blur-md sm:px-12 sm:py-6 dark:border-gray-700/30 dark:bg-gray-900/50'>
      <ModeSwitch />
      <MenuMobile />
      <Menu />
    </nav>
  );
};

export default Header;
