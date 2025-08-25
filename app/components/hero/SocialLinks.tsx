import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimationDefaultsType } from '@/types';

const SocialLinks = ({ animationDefaults, isVisible }: { animationDefaults: AnimationDefaultsType; isVisible: boolean }) => {
  const socialIcons = [
    {
      href: 'https://github.com/basia1111',
      icon: <Github className='h-5 w-5' />,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/barbara-%C5%BCygilewicz-905635332/',
      icon: <Linkedin className='h-5 w-5' />,
      label: 'LinkedIn',
    },
    {
      href: 'mailto:basia.zygilewicz@gmail.com',
      icon: <Mail className='h-5 w-5' />,
      label: 'Email',
    },
  ];

  return (
    <motion.div {...animationDefaults(0.8, 2)} className='flex items-center justify-center gap-4'>
      {socialIcons.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={link.label}
          className='rounded-full p-3 text-gray-600 backdrop-blur-sm transition-all duration-200 hover:text-purple-600 hover:shadow-md dark:text-gray-400 dark:hover:text-purple-400'
        >
          {link.icon}
        </a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
