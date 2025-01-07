'use client';

import React, { useContext, useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { LoadingContext } from '@/app/contexts/LoadingContext';

const ModeSwitch = () => {
  const { setIsLoading } = useContext(LoadingContext);
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
  };

  useEffect(() => {
    setIsLoading(true);
    const isSetMode = 'mode' in localStorage;
    document.documentElement.classList.toggle(
      'dark',
      localStorage.mode === 'dark' || (!isSetMode && window.matchMedia('(prefers-color-scheme: dark)').matches),
    );
    if (!isSetMode) {
      setActiveMode('dark');
    } else {
      localStorage.mode === 'dark' ? setActiveMode('dark') : setActiveMode('light');
    }
    setIsLoading(false);
  }, []);

  const modes = [
    { name: 'light', icon: Sun },
    { name: 'dark', icon: Moon },
    { name: 'system', icon: Monitor },
  ];

  return (
    <div className='gap-0.5 rounded-full bg-light-bg-primary p-0.5 file:flex dark:bg-dark-bg-tertiary/50'>
      {modes.map(({ name, icon: Icon }) => (
        <button
          key={name}
          className={`rounded-full p-1.5 transition-colors ${activeMode === name ? 'text-accent-primary' : 'text-light-text-muted hover:text-light-text-muted/70 dark:text-dark-text-secondary dark:hover:text-dark-text-secondary/70'}`}
          onClick={() => setMode(name as 'light' | 'dark' | 'system')}
        >
          <Icon className='size-4' />
        </button>
      ))}
    </div>
  );
};

export default ModeSwitch;
