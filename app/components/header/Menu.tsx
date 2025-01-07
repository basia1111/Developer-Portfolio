import React, { useEffect, useState } from 'react';

export const menuItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
export const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth',
  });
};

const Menu = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px -30% 0px -10%',
      threshold: 0.4,
    };
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    menuItems.forEach((item) => {
      const foundItem = document.getElementById(item.id);
      if (foundItem) observer.observe(foundItem);
    });

    return () => observer.disconnect();
  });
  return (
    <nav className='hidden sm:flex'>
      <ul className='flex items-center gap-12 sm:flex'>
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`rounded-md px-2 py-1 text-sm tracking-wide transition-all ${item.id == activeSection ? 'bg-accent-primary dark:text-dark-bg-hover text-white dark:bg-white' : 'text-light-text-secondary dark:text-dark-text-secondary'} ${item.id !== activeSection ? 'hover:text-accent-primary' : null}`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
