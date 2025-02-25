'use client';
import React, { useState } from 'react';
import { Code2, Server, Database } from 'lucide-react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPhp,
  SiNodedotjs,
  SiExpress,
  SiSymfony,
  SiWordpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiLinux,
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const tabs = [
    {
      id: 'frontend',
      label: 'Frontend',
      icon: <Code2 className='h-4 w-4' />,
      skills: [
        { icon: <SiHtml5 size={34} />, name: 'HTML5', color: 'group-hover:text-[#E34F26]' },
        { icon: <SiCss3 size={34} />, name: 'CSS3', color: 'group-hover:text-[#1572B6]' },
        { icon: <SiJavascript size={34} />, name: 'JavaScript', color: 'group-hover:text-[#F7DF1E]' },
        { icon: <SiTypescript size={34} />, name: 'TypeScript', color: 'group-hover:text-[#3178C6]' },
        { icon: <SiReact size={34} />, name: 'React', color: 'group-hover:text-[#61DAFB]' },
        { icon: <SiNextdotjs size={34} />, name: 'Next.js', color: 'group-hover:text-[#FFFFFF]' },
        { icon: <SiTailwindcss size={34} />, name: 'Tailwind', color: 'group-hover:text-[#06B6D4]' },
      ],
    },
    {
      id: 'backend',
      label: 'Backend',
      icon: <Server className='h-4 w-4' />,
      skills: [
        { icon: <SiPhp size={34} />, name: 'PHP', color: 'group-hover:text-[#777BB4]' },
        { icon: <SiNodedotjs size={34} />, name: 'Node.js', color: 'group-hover:text-[#339933]' },
        { icon: <SiExpress size={34} />, name: 'Express', color: 'group-hover:text-white' },
        { icon: <SiSymfony size={34} />, name: 'Symfony', color: 'group-hover:text-[#000000]' },
        { icon: <SiWordpress size={34} />, name: 'WordPress', color: 'group-hover:text-[#21759B]' },
      ],
    },
    {
      id: 'tools',
      label: 'Database & Tools',
      icon: <Database className='h-4 w-4' />,
      skills: [
        { icon: <SiMongodb size={34} />, name: 'MongoDB', color: 'group-hover:text-[#47A248]' },
        { icon: <SiMysql size={34} />, name: 'MySQL', color: 'group-hover:text-[#4479A1]' },
        { icon: <DiVisualstudio size={34} />, name: 'VS Code', color: 'group-hover:text-[#007ACC]' },
        { icon: <SiGit size={34} />, name: 'Git', color: 'group-hover:text-[#F05032]' },
        { icon: <SiLinux size={34} />, name: 'Linux', color: 'group-hover:text-[#FCC624]' },
      ],
    },
  ];

  return (
    <section id='skills' className='mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-24'>
      <div className='text-center'>
        <span className='inline-flex items-center justify-center gap-2 font-mono text-sm text-accent-primary dark:text-accent-light'>
          <span className='h-px w-8 bg-accent-primary/20 dark:bg-accent-light/20'></span>❯ My Tech Stack
          <span className='h-px w-8 bg-accent-primary/20 dark:bg-accent-light/20'></span>
        </span>
        <h2 className='mt-4 text-2xl font-bold text-light-text-primary md:text-4xl dark:text-dark-text-primary'>Technical Skills</h2>
      </div>

      <div className='mx-auto mt-12 max-w-3xl rounded-xl p-2'>
        <div className='flex justify-center gap-1'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-accent-primary/10 text-accent-primary dark:bg-accent-light/10 dark:text-accent-light'
                  : 'text-light-text-muted hover:bg-accent-primary/5 hover:text-accent-primary dark:text-dark-text-secondary dark:hover:bg-accent-light/5 dark:hover:text-accent-light'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className='mt-12'>
        {tabs.map((tab) => (
          <div key={tab.id} className={`${activeTab === tab.id ? 'block' : 'hidden'}`}>
            <div className='mx-auto max-w-6xl'>
              <div className='grid grid-cols-3 justify-items-center gap-6 md:grid-cols-4 lg:grid-cols-7'>
                {tab.skills.map((skill, index) => (
                  <div key={index} className='group w-24 sm:w-32'>
                    <div className='flex w-full flex-col items-center justify-center gap-3 rounded-xl border border-accent-primary/20 bg-white p-4 transition-all hover:border-accent-primary/30 sm:h-28 dark:bg-dark-bg-secondary dark:hover:border-accent-light/30'>
                      <div className={`text-light-text-muted transition-all duration-300 dark:text-dark-text-secondary ${skill.color}`}>{skill.icon}</div>
                      <span className='text-center text-sm font-medium text-light-text-primary dark:text-dark-text-primary'>{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
