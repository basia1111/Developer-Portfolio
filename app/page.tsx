'use client';

import ContactSection from './components/Contact';
import Hero from './components/Hero';
import ProjectsSection from './components/Projects';
import SkillsSection from './components/Skills';
import TerminalAbout from './components/TerminalAbout';

export default function Home() {
  return (
    <div className='relative min-h-screen overflow-hidden bg-[#f4f5fb] dark:bg-dark-bg-primary'>
      <div className='fixed inset-0'>
        <div className='absolute left-0 top-0 hidden h-[600px] w-[600px] rounded-full bg-[#4338ca] opacity-[0.35] mix-blend-multiply blur-[128px] dark:block dark:opacity-35' />
        <div className='absolute bottom-0 right-0 hidden h-[500px] w-[500px] rounded-full bg-[#8b5cf6] opacity-[0.40] mix-blend-multiply blur-[128px] dark:block dark:opacity-25' />
        <div className='absolute right-1/4 top-1/2 hidden h-[800px] w-[800px] rounded-full bg-[#6366f1] opacity-[0.15] mix-blend-multiply blur-[128px] dark:block dark:opacity-35' />

        <div className='absolute left-0 top-0 block h-[400px] w-[400px] rounded-full bg-[#4338ca] opacity-[0.55] mix-blend-multiply blur-[128px] dark:hidden dark:opacity-35' />
        <div className='absolute bottom-0 right-0 block h-[400px] w-[400px] rounded-full bg-[#8b5cf6] opacity-[0.60] mix-blend-multiply blur-[128px] dark:hidden dark:opacity-25' />
        <div className='absolute right-1/4 top-1/2 block h-[500px] w-[450px] rounded-full bg-[#665cf6] opacity-[0.65] mix-blend-multiply blur-[128px] dark:hidden dark:opacity-35' />

        <div className='absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.07)_1px,transparent_1px),linear-gradient(to_right,rgba(79,70,229,0.07)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)]' />
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
