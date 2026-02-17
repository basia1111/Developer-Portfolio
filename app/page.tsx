'use client';

import { useState } from 'react';
import Nav from './components/nav';
import Hero from './components/hero';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className='relative min-h-screen'>
      <Nav />
      <Hero />
    </div>
  );
}
