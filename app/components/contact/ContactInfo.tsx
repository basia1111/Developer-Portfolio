import { Mail, Github, Linkedin } from 'lucide-react';

export const contactLinks = [
  {
    href: 'mailto:basia.zygilewicz@gmail.com',
    icon: <Mail className='h-5 w-5' />,
    text: 'basia.zygilewicz@gmail.com',
    color: 'hover:text-blue-600 dark:hover:text-blue-400',
  },
  {
    href: 'https://github.com/basia1111',
    icon: <Github className='h-5 w-5' />,
    text: 'github.com/basia1111',
    color: 'hover:text-gray-900 dark:hover:text-white',
  },
  {
    href: 'https://www.linkedin.com/in/barbara-%C5%BCygilewicz-905635332/',
    icon: <Linkedin className='h-5 w-5' />,
    text: 'Connect with me',
    color: 'hover:text-blue-600 dark:hover:text-blue-500',
  },
];
