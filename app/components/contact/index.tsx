import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

export function Contact() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const containerMotionProps = {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: loaded ? 1 : 0, y: loaded ? 0 : 32 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <motion.div {...containerMotionProps} className='mt-[clamp(64px,10vh,96px)]'>
      <div className='border-rule mb-[28px] flex items-baseline gap-4 border-b pb-4'>
        <span className='font-display text-primary text-[clamp(24px,3vw,32px)] font-semibold tracking-[-0.02em]'>Contact</span>
      </div>
      <div className='max-w-[560px]'>
        <p className='font-body text-body mb-[clamp(24px,4vh,40px)] text-[17px] leading-[1.7]'>
          I'm looking for my first full-time role as a full-stack developer. If you're hiring or just want to chat about code, I'd love to hear from you.
        </p>
        <a
          href='mailto:basia.zygilewicz@gmail.com'
          className='font-display text-accent border-accent/20 hover:border-accent inline-block border-b-2 pb-1 text-[clamp(22px,3vw,34px)] font-semibold transition-colors'
        >
          basia.zygilewicz@gmail.com
        </a>
        <div className='mt-[clamp(24px,4vh,36px)] flex gap-6'>
          {[
            { label: 'GitHub', icon: Github, link: 'https://github.com/basia1111' },
            { label: 'LinkedIn', icon: Linkedin, link: 'https://www.linkedin.com/in/barbara-%C5%BCygilewicz-905635332/' },
          ].map(({ label, icon: Icon, link }) => (
            <a
              key={label}
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted hover:text-accent group flex items-center gap-2 font-mono text-[13px] transition-colors'
            >
              <Icon size={16} strokeWidth={1.5} className='group-hover:text-accent transition-colors' />
              {label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
