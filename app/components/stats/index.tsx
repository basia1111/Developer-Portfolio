import { motion } from 'framer-motion';

export function Stats() {
  const stats = [
    { num: '1.5+', label: 'YEARS OF IT EXPERIENCE' },
    { num: '300+', label: 'GITHUB COMMITS' },
  ];

  const getMotionProps = (i: number) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  });

  return (
    <div className='border-stroke mb-[clamp(56px,10vh,96px)] grid grid-cols-2 border-b border-t'>
      {stats.map((stat, i) => {
        const motionProps = getMotionProps(i);

        return (
          <motion.div
            key={i}
            {...motionProps}
            className={`${i < stats.length - 1 ? 'border-rule border-r' : ''} py-[clamp(24px,4vh,40px)] ${i > 0 ? 'pl-[clamp(14px,2.5vw,28px)]' : ''}`}
          >
            <div className='font-display text-primary text-[clamp(36px,5vw,56px)] font-bold leading-[1]'>{stat.num}</div>
            <div className='text-muted mt-3 font-mono text-[12px] tracking-[0.1em]'>{stat.label}</div>
          </motion.div>
        );
      })}
    </div>
  );
}
