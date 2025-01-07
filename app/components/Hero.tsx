'use client';

import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Code2, Sparkles, Brain } from 'lucide-react';
import Greeting from './Greeting';
import MorphingBlobs from './MorphingBolbs';
import { motion } from 'framer-motion';

interface Star {
  id: number;
  top: string;
  left: string;
  animationDelay: string;
  size: number;
}

const Hero = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const blockVariants = {
    initial: {
      left: 0,
    },
    animate: {
      left: '100%',
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 0.45,
      },
    },
  };
  useEffect(() => {
    const generateStars = (): Star[] => {
      return Array.from({ length: 50 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        size: Math.random() * 2 + 1,
      }));
    };

    setStars(generateStars());
  }, []);

  return (
    <div
      id='home'
      className='from-dark-bg-tertiary via-dark-bg-tertiary relative flex min-h-screen items-center justify-center to-transparent dark:bg-gradient-to-b'
    >
      <div className='hidden dark:block'>
        {stars.map((star) => (
          <div
            key={star.id}
            className='animate-twinkle-1 absolute inline-flex rounded-full bg-white/90'
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>
      <div className='mx-auto max-w-7xl px-4 pb-4 pt-20 md:px-6 md:py-20'>
        <div className='grid items-center md:grid-cols-[6fr,4fr]'>
          <div className='space-y-10'>
            <div className='space-y-6'>
              <div className='flex flex-col items-start gap-2'>
                <div className='hover:border-accent-primary/30 hover:shadow-accent-primary/5 border-accent-primary/20 bg-light-bg-secondary inline-flex items-center justify-start gap-2 rounded-xl border px-4 py-2 text-sm backdrop-blur-sm dark:bg-gray-950/40'>
                  <span className='text-accent-light font-mono'>❯</span>
                  <Greeting />
                </div>
                <h1 className='text-light-text-primary dark:text-dark-text-primary relative overflow-hidden text-3xl font-bold tracking-tight md:text-6xl lg:text-7xl'>
                  <motion.span
                    initial='initial'
                    animate='animate'
                    variants={blockVariants}
                    className='dark:bg-accent-primary bg-accent-light absolute z-10 h-full w-full'
                  />{' '}
                  I'm Basia
                </h1>
                <p className='text-light-text-secondary dark:text-dark-text-secondary relative overflow-hidden text-lg md:text-2xl'>
                  <motion.span
                    initial='initial'
                    animate='animate'
                    variants={blockVariants}
                    className='dark:bg-accent-primary bg-accent-light absolute z-10 h-full w-full'
                  />
                  Full Stack Developer
                </p>
              </div>

              <p className='text-light-text-secondary dark:text-dark-text-secondary relative max-w-xl overflow-hidden text-sm md:text-lg'>
                <motion.span
                  initial='initial'
                  animate='animate'
                  variants={blockVariants}
                  className='dark:bg-accent-primary bg-accent-light absolute h-full w-full'
                />
                Passionate about crafting efficient web solutions and eager to grow as a developer. Currently expanding my React skills while seeking
                opportunities to contribute to meaningful projects in a professional environment.
              </p>
            </div>

            <div className='space-y-3'>
              <div className='text-accent-light font-mono text-sm'>❯ current-status</div>
              <div className='flex flex-wrap gap-3'>
                {[
                  { icon: <Code2 className='h-4 w-4' />, text: 'Frontend Focus' },
                  { icon: <Sparkles className='h-4 w-4' />, text: 'Full Stack Ready' },
                  { icon: <Brain className='h-4 w-4' />, text: 'Problem Solver' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className='hover:border-accent-primary/30 hover:shadow-accent-primary/5 border-accent-primary/20 bg-light-bg-secondary inline-flex items-center gap-2 rounded-xl border px-4 py-2 backdrop-blur-sm transition-all hover:scale-105 dark:bg-gray-950/40'
                  >
                    <div className='text-accent-primary dark:text-accent-light'>{item.icon}</div>
                    <span className='text-light-text-primary dark:text-dark-text-primary text-sm'>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex items-center gap-6'>
              <a
                href='#projects'
                className='bg-accent-primary/90 text-dark-text-primary hover:bg-accent-dark rounded-xl px-8 py-3 text-sm font-medium backdrop-blur-sm transition-all hover:scale-105'
              >
                See My Projects
              </a>
              <div className='flex items-center gap-6'>
                <a
                  href='https://github.com/basia1111'
                  className='dark:text-dark-text-secondary text-light-text-secondary hover:text-accent-primary transition-all hover:scale-110'
                >
                  <Github className='h-6 w-6' />
                </a>
                <a
                  href='https://linkedin.com'
                  className='dark:text-dark-text-secondary text-light-text-secondary hover:text-accent-primary transition-all hover:scale-110'
                >
                  <Linkedin className='h-6 w-6' />
                </a>
                <a
                  href='mailto:email'
                  className='dark:text-dark-text-secondary text-light-text-secondary hover:text-accent-primary transition-all hover:scale-110'
                >
                  <Mail className='h-6 w-6' />
                </a>
              </div>
            </div>
          </div>

          <div className='relative mx-auto mt-10 h-[300px] w-full max-w-md md:h-[450px]'>
            <MorphingBlobs />
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
