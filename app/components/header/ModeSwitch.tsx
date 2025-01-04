'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

const ModeSwitch = () => {
  const [activeMode, setActiveMode] = useState<'light' | 'dark' | 'system'>();
  const setMode = (mode: 'light' | 'dark' | 'system') => {
    setActiveMode(mode);
    if (mode !== 'system') {
      localStorage.setItem('mode', mode);
      document.documentElement.classList.toggle('dark', mode === 'dark');
    } else {
      localStorage.removeItem('mode');
      document.documentElement.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
  };

  useEffect(() => {
    const isSetMode = 'mode' in localStorage;
    document.documentElement.classList.toggle(
      'dark',
      localStorage.mode === 'dark' || (!isSetMode && window.matchMedia('(prefers-color-scheme: dark)').matches),
    );
    if (!isSetMode) {
      setActiveMode('system');
    } else {
      localStorage.mode === 'dark' ? setActiveMode('dark') : setActiveMode('light');
    }
  }, []);

  const modes = [
    { name: 'light', icon: Sun },
    { name: 'dark', icon: Moon },
    { name: 'system', icon: Monitor },
  ];

  return (
    <div className='dark:bg-dark-bg-tertiary/50 bg-light-bg-tertiary gap-0.5 rounded-full p-0.5 file:flex'>
      {modes.map(({ name, icon: Icon }) => (
        <button
          key={name}
          className={`rounded-full p-1.5 transition-colors ${activeMode === name ? 'text-accent-primary' : 'text-light-text-muted dark:hover:text-dark-text-secondary/70 dark:text-dark-text-secondary hover:text-light-text-muted/70'}`}
          onClick={() => setMode(name as 'light' | 'dark' | 'system')}
        >
          <Icon size={14} />
        </button>
      ))}
    </div>
  );
};

export default ModeSwitch;
