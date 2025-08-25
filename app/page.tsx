'use client';

import ContactSection from './components/contact/Contact';
import Gradients from './components/layout /Gradients';
import Hero from './components/hero/Hero';
import ProjectsSection from './components/projects/Projects';
import SkillsSection from './components/skills/Skills';
import TerminalAbout from './components/terminal/TerminalAbout';

export default function Home() {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div className='relative'>
        <div className='relative min-h-screen backdrop-blur-[1px]'>
          <Gradients />
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
