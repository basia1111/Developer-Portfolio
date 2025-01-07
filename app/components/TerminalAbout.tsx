'use client';

import React, { useState } from 'react';
import { ArchiveRestore, Terminal } from 'lucide-react';
import { terminalLines } from '../../terminalLines';
import TerminalBlock from './TerminalBlock';

const TerminalAbout = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div id='about' className='mx-auto max-w-7xl px-4 md:px-6'>
      <div className='group relative'>
        <div className='border-accent-primary/20 bg-light-bg-secondary dark:hover:shadow-accent-light/5 rounded-xl border shadow-lg transition-all duration-300 dark:bg-gray-950/50'>
          <div className='border-accent-primary/20 bg-light-bg-secondary flex items-center justify-between rounded-t-xl border-b px-4 py-3 dark:bg-gray-950/80'>
            <div className='flex items-center gap-2'>
              <Terminal className='h-5 w-5 text-emerald-400' />
              <span className='text-light-text-primary dark:text-dark-text-primary text-sm font-medium'>basia@portfolio: ~/about-me</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='h-3 w-3 rounded-full bg-pink-500' />
              <div className='h-3 w-3 rounded-full bg-yellow-500' />
              <div className='h-3 w-3 rounded-full bg-emerald-400' />
            </div>
          </div>
          <div className='space-y-6 p-3 font-mono text-base leading-relaxed md:p-6'>
            {terminalLines.slice(0, activeIndex + 1).map((line, index) => (
              <TerminalBlock
                key={index}
                index={index}
                line={line}
                onComplete={() => {
                  if (index === activeIndex && activeIndex < terminalLines.length - 1) {
                    setActiveIndex((prev) => prev + 1);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalAbout;
