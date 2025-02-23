'use client';

import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Code2, Sparkles, Brain } from 'lucide-react';
import Greeting from './Greeting';
import MorphingBlobs from './MorphingBolbs';
import { motion } from 'framer-motion';

const Hero = () => {
  const blockVariants = {
    initial: { left: 0 },
    animate: {
      left: '100%',
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 0.45,
      },
    },
  };

  return (
    <div id='home' className='relative flex min-h-screen items-center justify-center'>
      <div className='mx-auto max-w-7xl px-4 pb-4 pt-20 md:px-6 md:py-20'>
        <div className='grid items-center md:grid-cols-[6fr,4fr]'>
          <div className='space-y-10'>
            <div className='space-y-6'>
              <div className='flex flex-col items-start gap-2'>
                <div className='inline-flex items-center justify-start gap-2 rounded-xl border border-accent-primary/20 bg-white px-4 py-2 text-sm backdrop-blur-sm dark:bg-dark-bg-primary'>
                  <span className='font-mono text-accent-primary dark:text-accent-light'>❯</span>
                  <Greeting />
                </div>
                <h1 className='relative overflow-hidden text-3xl font-bold tracking-tight text-light-text-primary md:text-6xl lg:text-7xl dark:text-dark-text-primary'>
                  <motion.span
                    initial='initial'
                    animate='animate'
                    variants={blockVariants}
                    className='absolute z-10 h-full w-full bg-white dark:bg-accent-primary'
                  />
                  I'm Basia
                </h1>
                <p className='relative overflow-hidden text-lg text-light-text-secondary md:text-2xl dark:text-dark-text-secondary'>
                  <motion.span
                    initial='initial'
                    animate='animate'
                    variants={blockVariants}
                    className='absolute z-10 h-full w-full bg-white dark:bg-accent-primary'
                  />
                  Full Stack Developer
                </p>
              </div>

              <p className='relative max-w-xl overflow-hidden text-sm text-light-text-secondary md:text-lg dark:text-dark-text-secondary'>
                <motion.span initial='initial' animate='animate' variants={blockVariants} className='absolute h-full w-full bg-white dark:bg-accent-primary' />
                Passionate about crafting efficient web solutions and eager to grow as a developer. Currently expanding my React skills while seeking
                opportunities to contribute to meaningful projects in a professional environment.
              </p>
            </div>

            <div className='space-y-3'>
              <div className='font-mono text-sm text-accent-primary dark:text-accent-light'>❯ current-status</div>
              <div className='flex flex-wrap gap-3'>
                {[
                  { icon: <Code2 className='h-4 w-4' />, text: 'Frontend Focus' },
                  { icon: <Sparkles className='h-4 w-4' />, text: 'Full Stack Ready' },
                  { icon: <Brain className='h-4 w-4' />, text: 'Problem Solver' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className='inline-flex items-center gap-2 rounded-xl border border-accent-primary/20 bg-white px-4 py-2 backdrop-blur-sm dark:bg-dark-bg-secondary'
                  >
                    <div className='text-accent-primary dark:text-accent-light'>{item.icon}</div>
                    <span className='text-sm text-light-text-primary dark:text-dark-text-primary'>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex items-center gap-6'>
              <a
                href='#projects'
                className='rounded-xl bg-accent-primary/90 px-8 py-3 text-sm font-medium text-light-bg-primary backdrop-blur-sm transition-all hover:bg-accent-dark dark:text-dark-text-primary'
              >
                See My Projects
              </a>
              <div className='flex items-center gap-6'>
                {[
                  { href: 'https://github.com/basia1111', icon: <Github className='h-6 w-6' /> },
                  { href: 'https://www.linkedin.com/in/barbara-%C5%BCygilewicz-905635332/', icon: <Linkedin className='h-6 w-6' /> },
                  { href: 'mailto:basia.zygilewicz@gmail.com', icon: <Mail className='h-6 w-6' /> },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className='text-light-text-secondary transition-all hover:text-accent-primary dark:text-dark-text-secondary dark:hover:text-accent-light'
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className='relative mx-auto mt-10 h-[300px] w-full max-w-md md:h-[450px]'>
            <MorphingBlobs />
            <div className='absolute left-1/2 top-1/2 z-10 mt-[30px] h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/50 blur-xl md:h-[260px] md:w-[260px]' />
            <img
              src='/my-photo.png'
              alt='Basia'
              className='absolute left-1/2 top-1/2 z-20 w-[200px] -translate-x-1/2 -translate-y-1/2 transform object-cover transition-transform duration-500 hover:scale-[105%] md:mt-4 md:w-[340px]'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
