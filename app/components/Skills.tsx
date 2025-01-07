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
      icon: <Server className='h-4 w-4' />,
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
      icon: <Database className='h-4 w-4' />,
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
    <section className='mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-24'>
      <div className='text-center'>
        <span className='text-accent-primary dark:text-accent-light font-mono text-sm'>❯ My Tech Stack</span>
        <h2 className='text-light-text-primary dark:text-dark-text-primary mt-4 text-2xl font-bold md:text-4xl'>Technical Skills</h2>
      </div>

      <div className='border-light-border-primary dark:border-dark-border-accent mx-auto mt-6 max-w-3xl border-b md:mt-12'>
        <div className='flex justify-center gap-4'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-accent-primary dark:text-accent-light border-accent-primary dark:border-accent-light -mb-px border-b-2'
                  : 'text-light-text-muted dark:text-dark-text-secondary hover:text-accent-primary dark:hover:text-accent-light'
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
                    <div className={`text-light-text-muted dark:text-dark-text-secondary transition-all duration-300 ${skill.color} group-hover:scale-110`}>
                      {skill.icon}
                    </div>
                    <span className='text-light-text-primary dark:text-dark-text-primary text-sm font-medium'>{skill.name}</span>
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
