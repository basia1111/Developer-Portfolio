'use client';

import React from 'react';

import { projects } from './ProjectsInfo';
import Project from './Project';
import SectionTitle from '../layout /SectionTitle';

const ProjectsSection = () => {
  return (
    <section id='projects' className='relative md:py-24'>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <SectionTitle title='Featured' titleGradient='Projects' additionalText='Building digital experiences with modern web technologies' />

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <Project project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
