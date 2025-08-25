import { ProjectType } from '@/types';
import { Github, ExternalLink } from 'lucide-react';

const Project = ({ project, index }: { project: ProjectType; index: number }) => {
  return (
    <div key={index} className='group relative h-full'>
      <div className='relative flex h-full flex-col rounded-xl border border-gray-200 bg-white/80 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-700/50 dark:bg-gray-800/70'>
        <a href={project.liveLink} className='relative z-10 block overflow-hidden rounded-lg'>
          <div className='relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700'>
            <img src={project.image} alt={project.title} className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105' />
          </div>
        </a>
        <div className='relative z-10 mt-5 flex flex-grow flex-col'>
          <a href={project.liveLink} className='block'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{project.title}</h3>
          </a>
          <p className='mt-3 text-sm text-gray-700 dark:text-gray-300'>{project.description}</p>
          <div className='mt-auto pt-6'>
            <div className='mb-5 flex flex-wrap gap-2'>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className='inline-flex rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300'
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className='flex items-center gap-5 border-t border-gray-200 pt-4 dark:border-gray-700/50'>
              <a
                href={project.githubLink}
                className='inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                target='_blank'
              >
                <Github className='h-5 w-5' />
                <span>Code</span>
              </a>
              <a
                href={project.liveLink}
                className='inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1.5 text-sm text-white transition-transform hover:scale-105'
                target='_blank'
              >
                <ExternalLink className='h-4 w-4' />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
