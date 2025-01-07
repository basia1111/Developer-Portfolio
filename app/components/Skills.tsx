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
      icon: <Code2 className='h-3 w-3 md:h-4 md:w-4' />,
      skills: [
        { icon: <SiHtml5 size={34} />, name: 'HTML5', color: 'hover:text-[#E34F26]' },
        { icon: <SiCss3 size={34} />, name: 'CSS3', color: 'hover:text-[#1572B6]' },
        { icon: <SiJavascript size={34} />, name: 'JavaScript', color: 'hover:text-[#F7DF1E]' },
        { icon: <SiTypescript size={34} />, name: 'TypeScript', color: 'hover:text-[#3178C6]' },
        { icon: <SiReact size={34} />, name: 'React', color: 'hover:text-[#61DAFB]' },
        { icon: <SiNextdotjs size={34} />, name: 'Next.js', color: 'hover:text-white' },
        { icon: <SiTailwindcss size={34} />, name: 'Tailwind', color: 'hover:text-[#06B6D4]' },
      ],
    },
    {
      id: 'backend',
      label: 'Backend',
      icon: <Server className='h-3 w-3 md:h-4 md:w-4' />,
      skills: [
        { icon: <SiPhp size={34} />, name: 'PHP', color: 'hover:text-[#777BB4]' },
        { icon: <SiNodedotjs size={34} />, name: 'Node.js', color: 'hover:text-[#339933]' },
        { icon: <SiExpress size={34} />, name: 'Express', color: 'hover:text-white' },
        { icon: <SiSymfony size={34} />, name: 'Symfony', color: 'hover:text-[#000000]' },
        { icon: <SiWordpress size={34} />, name: 'WordPress', color: 'hover:text-[#21759B]' },
      ],
    },
    {
      id: 'tools',
      label: 'Database & Tools',
      icon: <Database className='h-3 w-3 md:h-4 md:w-4' />,
      skills: [
        { icon: <SiMongodb size={34} />, name: 'MongoDB', color: 'hover:text-[#47A248]' },
        { icon: <SiMysql size={34} />, name: 'MySQL', color: 'hover:text-[#4479A1]' },
        { icon: <DiVisualstudio size={34} />, name: 'VS Code', color: 'hover:text-[#007ACC]' },
        { icon: <SiGit size={34} />, name: 'Git', color: 'hover:text-[#F05032]' },
        { icon: <SiLinux size={34} />, name: 'Linux', color: 'hover:text-[#FCC624]' },
      ],
    },
  ];

  return (
    <section id='skills' className='mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-24'>
      <div className='text-center'>
        <span className='font-mono text-sm text-accent-primary dark:text-accent-light'>❯ My Tech Stack</span>
        <h2 className='mt-4 text-2xl font-bold text-light-text-primary md:text-4xl dark:text-dark-text-primary'>Technical Skills</h2>
      </div>

      <div className='mx-auto mt-6 max-w-3xl border-b border-light-border-primary md:mt-12 dark:border-dark-border-accent'>
        <div className='flex justify-center md:gap-4'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-1 px-2 py-3 text-[14px] font-medium transition-colors md:gap-2 md:px-4 md:text-sm ${
                activeTab === tab.id
                  ? '-mb-px border-b-2 border-accent-primary text-accent-primary dark:border-accent-light dark:text-accent-light'
                  : 'text-light-text-muted hover:text-accent-primary dark:text-dark-text-secondary dark:hover:text-accent-light'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className='mt-16'>
        {tabs.map((tab) => (
          <div key={tab.id} className={`${activeTab === tab.id ? 'block' : 'hidden'}`}>
            <div className='mx-auto max-w-4xl'>
              <div className='grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-7'>
                {tab.skills.map((skill, index) => (
                  <div key={index} className='group flex flex-col items-center gap-3'>
                    <div className={`text-light-text-muted transition-all duration-300 dark:text-dark-text-secondary ${skill.color} group-hover:scale-110`}>
                      {skill.icon}
                    </div>
                    <span className='text-sm font-medium text-light-text-primary dark:text-dark-text-primary'>{skill.name}</span>
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
