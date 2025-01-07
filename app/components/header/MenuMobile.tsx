import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { menuItems, scrollToSection } from './Menu';
import ModeSwitch from './ModeSwitch';
import { AnimatePresence, motion } from 'framer-motion';

const menuVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const containerVariants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -20, opacity: 0 },
};

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='block sm:hidden'>
      <Hamburger toggled={isOpen} toggle={setIsOpen} color='#6466f1' size={24} />
      <AnimatePresence>
        {isOpen && (
          <motion.div variants={menuVariants} initial='initial' animate='animate' exit='exit' className='fixed inset-0 h-screen'>
            <motion.div className='dark:from-dark-bg-tertiary from-light-bg-secondary to-light-bg-secondary dark:to-dark-bg-tertiary absolute inset-0 bg-gradient-to-b via-[#eaeffd]/95 dark:via-[#212244]/95' />
            <motion.div variants={containerVariants} className='relative flex h-full flex-col items-start justify-start gap-12 p-6 pt-20'>
              <ul className='grid gap-4'>
                {menuItems.map((item) => (
                  <motion.li
                    variants={itemVariants}
                    key={item.label}
                    onClick={() => {
                      setIsOpen(false);
                      scrollToSection(item.id);
                    }}
                    className='flex gap-2 font-mono'
                  >
                    <span className='text-accent-primary font-mono'>❯</span>
                    <span className='text-light-text-secondary dark:text-dark-text-primary/95 text-xl'>{item.label}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div variants={itemVariants} className='scale-125'>
                <ModeSwitch />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuMobile;
