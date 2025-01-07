import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface TerminalBlockProps {
  index: number;
  line: {
    command: {
      text: string;
    };
    section: {
      title: string;
      content: string;
    };
  };
  onComplete: () => void;
}
const TerminalBlock = ({ index, line, onComplete }: TerminalBlockProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '100px' });
  const [isCommandComplete, setIsCommandComplete] = useState(false);

  const lineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    },
  };
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const typingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.05,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(
        () => {
          setIsCommandComplete(true);
        },
        line.command.text.length * 100 + 1000,
      );
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  useEffect(() => {
    if (isCommandComplete) {
      const timer = setTimeout(() => {
        onComplete();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isCommandComplete]);

  return (
    <>
      <motion.div ref={ref} key={index} initial='hidden' animate={isInView ? 'visible' : 'hidden'}>
        <motion.div className='mb-3 flex items-center overflow-hidden text-xs md:text-sm' variants={lineVariants}>
          <span className='mr-2 flex-shrink-0 text-pink-500'>❯</span>
          {line.command.text.split('').map((letter, i) => (
            <motion.span key={i} className='relative whitespace-nowrap text-emerald-400' variants={typingVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
        {isCommandComplete && (
          <motion.div className='rounded pl-4' variants={sectionVariants}>
            <motion.span variants={typingVariants} className='text-accent-primary block text-xs font-semibold md:text-sm'>
              {line.section.title}
            </motion.span>
            {line.section.content &&
              line.section.content.split('\n').map((l) => (
                <motion.span
                  variants={typingVariants}
                  className='text-light-text-secondary dark:text-dark-text-secondary whitespace-pre-line text-xs md:text-sm'
                >
                  {`\n ${l}`}
                </motion.span>
              ))}
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default TerminalBlock;
