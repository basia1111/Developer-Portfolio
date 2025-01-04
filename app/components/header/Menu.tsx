import React from 'react';

const Menu = () => {
  const items = ['Home', 'Projects', 'About', 'Contact'];
  return (
    <nav className='hidden items-center gap-12 sm:flex'>
      {items.map((item) => (
        <a href={`/#${item.toLowerCase()}`} className='text-light-text-secondary dark:text-dark-text-secondary text-sm tracking-wide'>
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Menu;
