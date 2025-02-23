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
      title: 'Task Management App',
      description:
        'Rocket Tasks is a MERN (MongoDB, Express, React, Node.js) application designed to help users manage tasks with ease and efficiency. The app features an intuitive dashboard that enables users to create, update, and delete tasks, while also organizing them with customizable tags.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'FramerMotion'],
      liveLink: 'https://rockettasks.vercel.app/',
      githubLink: 'https://github.com/basia1111/Rocket-Tasks',
      image: '/project-3.png',
    },
    {
      title: 'Habit Tracker with Google Calendar',
      description:
        'Habit Tracker is a web application built with PHP Symfony, Google Calendar Integration, and real-time features using JavaScript. It allows users to create, manage, and track their habits, syncing them with Google Calendar.',
      techStack: ['PHP', 'Symfony', 'Javascript', 'Bootstrap', 'SCSS', 'MySQL', 'Docker'],
      liveLink: 'https://habittracker-production-2001.up.railway.app/login',
      githubLink: 'https://github.com/basia1111/HabitTracker',
      image: '/project-1.png',
    },
  ];

  return (
    <section id='projects' className='relative py-12 md:py-24'>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <div className='mb-12 text-center md:mb-16'>
          <span className='inline-flex items-center justify-center gap-2 font-mono text-sm text-accent-primary dark:text-accent-light'>
            <span className='h-px w-8 bg-accent-primary/20 dark:bg-accent-light/20'></span>❯ Recent work
            <span className='h-px w-8 bg-accent-primary/20 dark:bg-accent-light/20'></span>
          </span>
          <h2 className='mt-4 text-2xl font-bold text-light-text-primary md:text-4xl dark:text-dark-text-primary'>Featured Projects</h2>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <div key={index} className='group relative h-full'>
              <div className='relative flex h-full flex-col rounded-2xl border border-accent-primary/20 bg-white p-4 transition-colors hover:border-accent-primary/30 dark:bg-dark-bg-secondary'>
                <a href={project.liveLink} className='block overflow-hidden rounded-lg'>
                  <div className='relative aspect-[16/10] overflow-hidden rounded-lg bg-gradient-to-br from-accent-primary/5 to-accent-light/5'>
                    <img
                      src={project.image}
                      alt={project.title}
                      className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                  </div>
                </a>

                <div className='relative mt-6 flex flex-grow flex-col'>
                  <a href={project.liveLink} className='block'>
                    <h3 className='text-xl font-semibold text-light-text-primary group-hover:text-accent-primary dark:text-dark-text-primary dark:group-hover:text-accent-light'>
                      {project.title}
                    </h3>
                  </a>

                  <p className='mt-3 text-sm leading-relaxed text-light-text-muted dark:text-dark-text-secondary'>{project.description}</p>

                  <div className='mt-auto pt-6'>
                    <div className='mb-4 flex flex-wrap gap-2'>
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className='inline-flex rounded-full bg-gradient-to-r from-accent-primary/5 to-accent-light/5 px-3 py-1 text-xs font-medium text-accent-primary dark:text-accent-light'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className='flex items-center gap-4 border-t border-accent-primary/10 pt-4'>
                      <a
                        href={project.githubLink}
                        className='inline-flex items-center gap-2 text-sm text-light-text-muted transition-colors hover:text-accent-primary dark:text-dark-text-secondary dark:hover:text-accent-light'
                      >
                        <Github className='h-5 w-5' />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.liveLink}
                        className='inline-flex items-center gap-2 text-sm text-light-text-muted transition-colors hover:text-accent-primary dark:text-dark-text-secondary dark:hover:text-accent-light'
                      >
                        <ExternalLink className='h-5 w-5' />
                        <span>Demo</span>
                      </a>
                    </div>
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
