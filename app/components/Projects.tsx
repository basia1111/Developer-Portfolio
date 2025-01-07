'use client';

import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Project Sharing Platform',
      description:
        'ProjectShowcase is a dynamic Next.js application designed to empower users to create, explore, and engage with projects shared by the community. It integrates user authentication via Google, allowing for secure login and management of user credentials.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Next Auth V5', 'MongoDB'],
      liveLink: 'https://project-showcase-pied.vercel.app',
      githubLink: 'https://github.com/basia1111/ProjectShowcase-v2',
      image: '/project-2.png',
    },
    {
      title: 'Task Managment App',
      description:
        'Rocket Tasks is a MERN (MongoDB, Express, React, Node.js) application designed to help users manage tasks with ease and efficiency. The app features an intuitive dashboard that enables users to create, update, and delete tasks, while also organizing them with customizable tags.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'FramerMotion'],
      liveLink: 'https://rockettasks.vercel.app/',
      githubLink: 'https://github.com/basia1111/Rocket-Tasks',
      image: '/task-2.png',
    },
    {
      title: 'TimeZone Clock',
      description:
        "Interactive clock app built with React that displays both analog and digital clocks. The app dynamically adjusts to the user's time zone using the TimeZoneDB API and includes a customizable dark mode toggle.",
      techStack: ['React', 'TimeZoneDB API', 'Tailwind CSS'],
      liveLink: 'https://timezoneclock-app.vercel.app/',
      githubLink: 'https://github.com/basia1111/Clock-App',
      image: '/clock.png',
    },
  ];
  return (
    <section className='relative py-6 md:py-16'>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <h2 className='mb-8 text-center md:mb-16'>
          <span className='text-accent-primary dark:text-accent-light font-mono text-sm'>❯ Recent work </span>
          <span className='text-light-text-primary dark:text-dark-text-primary mt-2 block text-2xl font-bold md:mt-4 md:text-4xl'>Featured Projects</span>
        </h2>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <div key={index} className='group h-full'>
              <div className='hover:border-accent-primary/30 hover:shadow-accent-primary/5 border-accent-primary/20 bg-light-bg-secondary dark:hover:shadow-accent-light/5 flex h-full flex-col rounded-xl border p-5 shadow-sm transition-all hover:shadow-lg dark:bg-gray-950/40'>
                <div className='relative mb-4 overflow-hidden rounded-lg'>
                  <img src={project.image} alt={project.title} className='aspect-[16/9] w-full object-cover' />
                </div>
                <h3 className='text-light-text-primary dark:text-dark-text-primary mb-3 text-xl font-semibold'>{project.title}</h3>
                <p className='text-light-text-muted dark:text-dark-text-secondary mb-5 text-sm'>{project.description}</p>
                <div className='mt-auto'>
                  <div className='mb-4 flex flex-wrap gap-2'>
                    {project.techStack.map((tech) => (
                      <span key={tech} className='bg-light-bg-hover/70 text-accent-primary rounded-md px-2.5 py-1 text-xs font-medium dark:bg-gray-950/40'>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className='border-accent-primary/20 flex gap-4 border-t pt-4'>
                    <a href={project.githubLink} target='blank' className='hover:text-accent-primary text-gray-400 transition-colors'>
                      <Github className='h-5 w-5' />
                    </a>
                    <a href={project.liveLink} target='blank' className='hover:text-accent-primary text-gray-400 transition-colors'>
                      <ExternalLink className='h-5 w-5' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
