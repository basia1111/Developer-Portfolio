import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Nav() {
  const [loaded, setLoaded] = useState(false);
  const i = 0;

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <motion.div
      className='mb-[clamp(48px,8vh,72px)] flex items-center justify-between border-b-2 border-b-[#E8735A44] py-4'
      animate={{
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(16px)',
      }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 100 }}
    >
      <div className='text-primary font-mono text-xs font-light tracking-[0.15em]'>BŻ</div>
      <div className='flex items-center gap-7'>
        {['Projects', 'Experience', 'Contact'].map((item) => (
          <NavItem key={item} name={item} />
        ))}
      </div>
    </motion.div>
  );
}

function NavItem({ name }: { name: string }) {
  return <span className='text-muted font-mono text-xs font-normal'>{name}</span>;
}
