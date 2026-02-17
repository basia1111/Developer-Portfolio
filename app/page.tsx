'use client';

import { useState } from 'react';
import Nav from './components/nav';
import Hero from './components/hero';
import { Stats } from './components/stats';
import { Toolbox } from './components/tools';
import { Experience } from './components/experience';
import { Projects } from './components/projects';
import { Contact } from './components/contact';
import { Footer } from './components/footer';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className='relative min-h-screen w-max max-w-[1320px]'>
      <div className='fixed bottom-0 left-[clamp(20px,5vw,72px)] top-0 z-0 w-[1px] bg-[rgba(255,255,255,0.05)]' />
      <div className='fixed bottom-0 right-[clamp(20px,5vw,72px)] top-0 z-0 w-[1px] bg-[rgba(255,255,255,0.05)]' />
      <Nav />
      <Hero />
      <Stats />
      <Toolbox />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
