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
  SiFigma,
  SiNewrelic,
  SiPython,
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import { TabType } from '@/types';

export const tabs: TabType[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: <Code2 className='h-3 w-3 sm:h-4 sm:w-4' />,
    skills: [
      { icon: <SiHtml5 size={34} />, name: 'HTML5', color: 'group-hover:text-[#E34F26]' },
      { icon: <SiCss3 size={34} />, name: 'CSS3', color: 'group-hover:text-[#1572B6]' },
      { icon: <SiJavascript size={34} />, name: 'JavaScript', color: 'group-hover:text-[#F7DF1E]' },
      { icon: <SiTypescript size={34} />, name: 'TypeScript', color: 'group-hover:text-[#3178C6]' },
      { icon: <SiReact size={34} />, name: 'React', color: 'group-hover:text-[#61DAFB]' },
      { icon: <SiNextdotjs size={34} />, name: 'Next.js', color: 'group-hover:text-gray-800 dark:group-hover:text-[#FFFFFF]' },
      { icon: <SiTailwindcss size={34} />, name: 'Tailwind', color: 'group-hover:text-[#06B6D4]' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: <Server className='h-3 w-3 sm:h-4 sm:w-4' />,
    skills: [
      { icon: <SiNodedotjs size={34} />, name: 'Node.js', color: 'group-hover:text-[#339933]' },
      { icon: <SiExpress size={34} />, name: 'Express', color: 'group-hover:text-gray-800 dark:group-hover:text-white' },
      { icon: <SiPython size={34} />, name: 'Python', color: 'group-hover:text-[#FCC624]' },
      { icon: <SiPhp size={34} />, name: 'PHP', color: 'group-hover:text-[#777BB4]' },
      { icon: <SiSymfony size={34} />, name: 'Symfony', color: 'group-hover:text-gray-800 dark:group-hover:text-[#000000]' },
      { icon: <SiWordpress size={34} />, name: 'WordPress', color: 'group-hover:text-[#21759B]' },
    ],
  },
  {
    id: 'tools',
    label: 'Database & Tools',
    icon: <Database className='h-3 w-3 sm:h-4 sm:w-4' />,
    skills: [
      { icon: <SiMongodb size={34} />, name: 'MongoDB', color: 'group-hover:text-[#47A248]' },
      { icon: <SiMysql size={34} />, name: 'MySQL', color: 'group-hover:text-[#4479A1]' },
      { icon: <SiGit size={34} />, name: 'Git', color: 'group-hover:text-[#F05032]' },
      { icon: <SiLinux size={34} />, name: 'Linux', color: 'group-hover:text-[#FCC624]' },
      { icon: <SiNewrelic size={34} />, name: 'NewRelic', color: 'group-hover:text-[#1ae783]' },
      { icon: <SiFigma size={34} />, name: 'Figma', color: 'group-hover:text-[#f86e5f]' },
      { icon: <DiVisualstudio size={34} />, name: 'VS Code', color: 'group-hover:text-[#007ACC]' },
    ],
  },
];
