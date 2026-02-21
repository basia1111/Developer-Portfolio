import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    img: '/project-2.png',
    name: 'ProjectShowcase',
    type: 'Project Sharing Platform',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'NextAuth', 'MongoDB'],
    desc: 'A dynamic Next.js app where users create, explore, and engage with community projects. Integrates OAuth for secure login and credential management.',
    github: 'https://github.com/basia1111/ProjectShowcase-v2',
    live: 'https://project-showcase-pied.vercel.app/',
  },
  {
    img: '/project-1.png',
    name: 'Habit Tracker',
    type: 'Habit Tracker with Google Calendar',
    tech: ['PHP', 'Symfony', 'JavaScript', 'MySQL', 'Docker'],
    desc: 'A web app built with Symfony and Google Calendar integration. Users create, manage, and track habits with real-time syncing to their calendar.',
    github: 'https://github.com/basia1111/HabitTracker',
  },
  {
    img: '/project-3.png',
    name: 'Rocket Tasks',
    type: 'Task Management App',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    desc: 'A MERN application for managing tasks with an intuitive dashboard. Users can create, update, and delete tasks while organizing them with customizable tags.',
    github: 'https://github.com/basia1111/Rocket-Tasks',
    live: 'https://rockettasks.vercel.app/',
  },
];

export function Projects() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const containerMotionProps = {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: loaded ? 1 : 0, y: loaded ? 0 : 32 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  const cardMotionProps = (i: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: loaded ? 1 : 0, y: loaded ? 0 : 16 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 },
  });

  return (
    <motion.div {...containerMotionProps} className='mb-[clamp(56px,10vh,96px)]' id='projects'>
      <div className='flex w-full items-baseline gap-4 border-b border-rule pb-4'>
        <span className='font-display text-[clamp(24px,3vw,32px)] font-semibold tracking-[-0.02em] text-primary'>Selected Projects</span>
        <span className='font-mono text-[12px] tracking-[0.06em] text-accent'>03</span>
      </div>
      <div className='mt-4 grid grid-cols-1 gap-3 md:grid-cols-3'>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            {...cardMotionProps(i)}
            className='h-card group relative flex flex-col border-t-2 border-transparent bg-surface transition-shadow hover:border-accent hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]'
          >
            <div className='flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-raised transition-colors group-hover:bg-raised/80'>
              <Image src={p.img} height={500} width={500} alt='project img' className='h-full w-full object-cover' />
            </div>
            <div className='flex flex-1 flex-col p-[clamp(18px,2.5vw,28px)]'>
              <div className='mb-3'>
                <div className='mb-1 font-display text-[clamp(20px,2.5vw,26px)] font-semibold tracking-[-0.02em]'>{p.name}</div>
                <div className='font-body text-[14px] text-muted transition-colors group-hover:text-accent'>{p.type}</div>
              </div>

              <p className='mb-4 flex-1 font-body text-[14px] leading-[1.6] text-body'>{p.desc}</p>

              <div className='mb-4 flex flex-wrap gap-1.5'>
                {p.tech.map((t) => (
                  <span key={t} className='border border-accent/20 bg-accent/5 px-3 py-[2px] font-mono text-[12px] tracking-[0.03em] text-accent'>
                    {t}
                  </span>
                ))}
              </div>
              <div className='flex flex-wrap items-center gap-4 border-t border-rule pt-3'>
                <a href={p.github} target='_blank' rel='noopener noreferrer' className='font-mono text-[12px] text-accent transition-colors hover:text-primary'>
                  GitHub →
                </a>
                {p.live && (
                  <a href={p.live} target='_blank' rel='noopener noreferrer' className='font-mono text-[12px] text-accent transition-colors hover:text-primary'>
                    Live Demo →
                  </a>
                )}
              </div>
            </div>

            <div className='absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-[width] group-hover:w-full' />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
