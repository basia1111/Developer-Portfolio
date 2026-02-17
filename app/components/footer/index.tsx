import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Footer() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const containerMotionProps = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: loaded ? 1 : 0, y: loaded ? 0 : 16 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
  };

  return (
    <motion.div
      {...containerMotionProps}
      className='border-accent/25 mt-[clamp(48px,8vh,80px)] flex flex-wrap items-baseline justify-between gap-3 border-t-2 pt-5'
    >
      <span className='text-muted font-mono text-[12px] tracking-[0.06em]'>©{new Date().getFullYear()} Barbara Żygilewicz</span>
      <span className='text-accent/60 font-mono text-[12px] tracking-[0.06em]'>Built with React + Next.js</span>
    </motion.div>
  );
}
