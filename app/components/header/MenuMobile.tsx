import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { menuItems, scrollToSection } from './Menu';
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
    <div className='flex items-center sm:hidden'>
      <Hamburger toggled={isOpen} toggle={setIsOpen} color='#a855f7' size={24} />
      <AnimatePresence>
        {isOpen && (
          <motion.div variants={menuVariants} initial='initial' animate='animate' exit='exit' className='fixed inset-0 h-screen'>
            <motion.div className='absolute inset-0 bg-gradient-to-br from-gray-100/95 via-purple-100/90 to-gray-100/95 backdrop-blur-md dark:bg-gradient-to-br dark:from-gray-800/95 dark:to-gray-900/95' />
            <motion.div variants={containerVariants} className='relative flex h-full flex-col items-start justify-start gap-12 p-6 pt-20'>
              <ul className='grid gap-6'>
                {menuItems.map((item) => (
                  <motion.li
                    variants={itemVariants}
                    key={item.label}
                    onClick={() => {
                      setIsOpen(false);
                      scrollToSection(item.id);
                    }}
                    className='group flex cursor-pointer gap-2'
                  >
                    <span className='text-2xl font-light text-gray-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent dark:text-gray-300'>
                      {item.label}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuMobile;
