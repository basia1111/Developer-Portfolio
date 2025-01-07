'use client';

import ContactSection from './components/Contact';
import Hero from './components/Hero';
import ProjectsSection from './components/Projects';
import SkillsSection from './components/Skills';
import TerminalAbout from './components/TerminalAbout';
import { useEffect, useState } from 'react';

interface Star {
  id: number;
  top: string;
  left: string;
  animationDelay: string;
  size: number;
}
export default function Home() {
  const [stars, setStars] = useState<Star[]>([]);

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
    <div className='dark:bg-dark-bg-secondary bg-light-bg-secondary relative min-h-screen overflow-hidden'>
      <div className='fixed inset-0'>
        <div className='dark:from-dark-bg-tertiary dark:to-dark-bg-secondary dark:via-accent-primary/20 absolute inset-0 bg-gradient-to-r from-blue-50 to-violet-50 dark:bg-gradient-to-b' />
        <div className='animate-glow absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-200 opacity-30 blur-[100px] dark:bg-[#2C1B7E]' />
        <div className='animate-glow-slow absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-200 opacity-30 blur-[100px] dark:bg-[#4425A7]' />
        <div className='animate-glow-delayed absolute bottom-1/4 left-1/3 h-[600px] w-[600px] rounded-full bg-indigo-200 opacity-30 blur-[100px] dark:bg-[#1C1157]' />

        <div className='hidden dark:block'>
          {stars.map((star) => (
            <div
              key={star.id}
              className='animate-twinkle-1 absolute z-50 inline-flex rounded-full bg-white/90'
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

        <div className='dark:hidden'>
          <div className='absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl' />
          <div className='absolute right-0 top-1/3 h-48 w-48 rounded-full bg-violet-100/50 blur-3xl' />
          <div className='absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-indigo-100/50 blur-3xl' />
        </div>
      </div>

      <div className='relative'>
        <div className='relative min-h-screen backdrop-blur-[1px]'>
          <Hero />
          <TerminalAbout />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
