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
      <div className='font-mono text-xs font-light tracking-[0.15em] text-primary'>BŻ</div>
      <div className='flex items-center gap-4 md:gap-7'>
        {['Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
          <NavItem key={item} name={item} id={item.toLowerCase()} />
        ))}
      </div>
    </motion.div>
  );
}

function NavItem({ name, id }: { name: string; id: string }) {
  return (
    <a href={`#${id}`} className='font-mono text-xs font-normal text-muted hover:text-primary'>
      {name}
    </a>
  );
}
