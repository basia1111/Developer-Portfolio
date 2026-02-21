import { motion } from 'framer-motion';
import { Github, Code2, FileCode, Server, Atom, ArrowRight, Wind, Database, CircleDot, GitBranch, Plug, Cloud } from 'lucide-react';
import { useEffect, useState } from 'react';

const tools = [
  { name: 'HTML5/CSS3', icon: Code2 },
  { name: 'TypeScript', icon: FileCode },
  { name: 'Node', icon: Server },
  { name: 'React', icon: Atom },
  { name: 'Next.js', icon: ArrowRight },
  { name: 'Tailwind', icon: Wind },
  { name: 'MongoDB', icon: Database },
  { name: 'MySQL', icon: CircleDot },
  { name: 'Git', icon: GitBranch },
  { name: 'REST APIs', icon: Plug },
  { name: 'AWS', icon: Cloud },
];

export function Toolbox() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  const containerMotionProps = {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: loaded ? 1 : 0, y: loaded ? 0 : 32 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  const tagMotionProps = (i: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: loaded ? 1 : 0, y: loaded ? 0 : 16 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 },
  });

  return (
    <motion.div {...containerMotionProps} className='mb-[clamp(56px,10vh,96px)]' id='skills'>
      <div className='flex w-full items-baseline gap-4 border-b border-rule pb-4'>
        <span className='font-display text-[clamp(24px,3vw,32px)] font-semibold tracking-[-0.02em] text-primary'>Toolbox</span>
        <span className='font-mono text-[12px] tracking-[0.06em] text-accent'>11</span>
      </div>
      <div className='flex flex-wrap gap-2.5'>
        {tools.map((t, i) => (
          <motion.span
            key={t.name}
            {...tagMotionProps(i)}
            className='h-tag group inline-flex items-center gap-2.5 border border-stroke bg-surface px-[22px] py-3 font-mono text-[14px] tracking-[0.08em] text-primary transition-all hover:bg-accent'
          >
            <t.icon size={18} strokeWidth={1.5} className='text-accent transition-colors group-hover:text-primary' />
            {t.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
