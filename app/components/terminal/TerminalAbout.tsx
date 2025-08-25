'use client';

import React, { useState } from 'react';
import { Terminal } from 'lucide-react';
import { terminalLines } from './terminalLines';
import TerminalBlock from './TerminalBlock';
import SectionTitle from '../layout /SectionTitle';

const TerminalAbout = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id='about' className='relative mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-24'>
      <div className='delay-2000 absolute top-0 z-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-purple-200/20 via-pink-200/25 to-blue-200/20 blur-3xl duration-[5000ms] dark:from-purple-300/30 dark:via-pink-300/35 dark:to-blue-300/30' />

      <SectionTitle title='About' titleGradient='Me' />

      <div className='mx-auto max-w-6xl'>
        <div className='h rounded-2xl border border-gray-300 shadow-md backdrop-blur-md transition-all duration-500 hover:shadow-2xl dark:border-gray-700/50'>
          <div className='flex items-center justify-between rounded-t-2xl border-b border-gray-300 bg-white px-6 py-4 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800'>
            <div className='flex items-center gap-3'>
              <Terminal className='h-4 w-4 text-white' />
              <div className='flex flex-col'>
                <span className='text-sm font-semibold text-gray-900 dark:text-white'>basia@portfolio</span>
                <span className='text-xs font-medium text-purple-600 dark:text-purple-400'>~/about-me</span>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <div className='h-3 w-3 rounded-full bg-red-500 shadow-sm' />
              <div className='h-3 w-3 rounded-full bg-yellow-500 shadow-sm' />
              <div className='h-3 w-3 rounded-full bg-green-500 shadow-sm' />
            </div>
          </div>

          <div className='relative overflow-hidden rounded-b-2xl bg-gray-50 dark:bg-[#191f28]'>
            <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-500 hover:opacity-100 dark:from-purple-500/10 dark:to-pink-500/10'></div>
            <div className='relative space-y-6 p-6 py-12 font-mono text-sm leading-relaxed md:p-8'>
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
    </section>
  );
};

export default TerminalAbout;
