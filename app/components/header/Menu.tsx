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
  }, []);

  return (
    <nav className='hidden sm:block'>
      <ul className='flex items-center gap-8'>
        {menuItems.map((item) => (
          <li key={item.id} onClick={() => scrollToSection(item.id)} className='relative cursor-pointer font-mono text-sm'>
            <div
              className={`flex items-center gap-2 px-2 py-1 transition-colors ${
                item.id === activeSection
                  ? 'text-accent-primary dark:text-accent-light'
                  : 'text-light-text-secondary hover:text-accent-primary dark:text-dark-text-secondary dark:hover:text-accent-light'
              }`}
            >
              <span className={`${item.id === activeSection ? 'opacity-100' : 'opacity-0'}`}>❯</span>
              {item.label}
            </div>
            {item.id === activeSection && <div className='absolute bottom-0 left-0 h-px w-full bg-accent-primary dark:bg-accent-light' />}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
