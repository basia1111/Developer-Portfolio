'use client';

import React, { useContext, useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { LoadingContext } from '@/app/contexts/LoadingContext';
import { motion } from 'framer-motion';

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
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    document.documentElement.classList.toggle('dark', localStorage.mode === 'dark' || (!isSetMode && systemPrefersDark));

    if (!isSetMode) {
      setActiveMode(systemPrefersDark ? 'dark' : 'light');
    } else {
      setActiveMode(localStorage.mode === 'dark' ? 'dark' : 'light');
    }

    setIsLoading(false);
  }, [setIsLoading]);

  const modes = [
    { name: 'light', icon: Sun },
    { name: 'dark', icon: Moon },
    { name: 'system', icon: Monitor },
  ];

  return (
    <div className='relative flex items-center rounded-full border border-gray-300 bg-gray-100 p-1 backdrop-blur-md dark:border-gray-400/30 dark:bg-gray-900/70'>
      {modes.map(({ name, icon: Icon }) => {
        const isActive = activeMode === name;

        return (
          <button
            key={name}
            onClick={() => setMode(name as 'light' | 'dark' | 'system')}
            className={`relative z-10 flex items-center justify-center rounded-full p-2 transition-colors ${
              isActive ? 'text-gray-100 dark:text-gray-100' : 'text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            <Icon className='size-3 sm:size-4' />
            {isActive && (
              <motion.div
                layoutId='activeMode'
                className='absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500'
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ModeSwitch;
