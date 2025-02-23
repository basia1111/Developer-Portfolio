'use client';

import React, { useState } from 'react';
import { Terminal } from 'lucide-react';
import { terminalLines } from '../../terminalLines';
import TerminalBlock from './TerminalBlock';

const TerminalAbout = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div id='about' className='mx-auto max-w-7xl px-4 md:px-6'>
      <div className='group relative'>
        <div className='rounded-xl border border-accent-primary/20 bg-white shadow-lg transition-all duration-300 dark:bg-dark-bg-secondary'>
          <div className='flex items-center justify-between rounded-t-xl border-b border-accent-primary/20 bg-light-bg-tertiary px-4 py-3 dark:bg-dark-bg-tertiary'>
            <div className='flex items-center gap-2'>
              <Terminal className='h-5 w-5 text-accent-light' />
              <span className='text-sm font-medium text-light-text-primary dark:text-dark-text-primary'>basia@portfolio: ~/about-me</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='h-3 w-3 rounded-full bg-accent-primary' />
              <div className='h-3 w-3 rounded-full bg-accent-light' />
              <div className='h-3 w-3 rounded-full bg-accent-primary' />
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
