import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  desc: string;
};

const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Node.js Engineer Intern',
    company: 'Cleeng',
    period: 'Oct 2025 — Present',
    desc: 'Working on the integration team building and extending payment and platform integrations — including Apple App Store and third-party payment providers. Working with AWS services and CI/CD pipelines.',
  },
  {
    role: 'IT Intern — Observability Team',
    company: 'Heineken HGSS Kraków',
    period: 'May 2025 — Oct 2025',
    desc: 'Supported the observability team working with New Relic for monitoring, alerting, and infrastructure visibility across the organization.',
  },
  {
    role: 'Junior WordPress Developer',
    company: 'Reulse',
    period: 'Jan 2024 — Oct 2024',
    desc: 'Built 40+ WordPress websites and e-commerces with custom JavaScript and PHP features. Handled full site builds from design implementation to deployment.',
  },
];

export function Experience() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100); // small delay to trigger animation
    return () => clearTimeout(timeout);
  }, []);

  const containerMotionProps = {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: loaded ? 1 : 0, y: loaded ? 0 : 32 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  const rowMotionProps = (i: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: loaded ? 1 : 0, y: loaded ? 0 : 16 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 },
  });

  return (
    <motion.div {...containerMotionProps} className='mb-[clamp(56px,10vh,96px)]' id='experience'>
      <div className='flex w-full items-baseline gap-4 border-b border-rule pb-4'>
        <span className='font-display text-[clamp(24px,3vw,32px)] font-semibold tracking-[-0.02em] text-primary'>Experience</span>
        <span className='font-mono text-[12px] tracking-[0.06em] text-accent'>03</span>
      </div>

      <div className='flex flex-col gap-4'>
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={i}
            {...rowMotionProps(i)}
            className='h-card group grid grid-cols-1 items-start gap-[clamp(20px,4vw,40px)] border-b border-l-[3px] border-raised border-l-surface px-[clamp(12px,2vw,20px)] py-[clamp(24px,3.5vh,36px)] transition-all hover:border-l-accent hover:bg-surface md:grid-cols-2'
          >
            <div>
              <div className='mb-2 font-display text-[clamp(22px,2.5vw,30px)] font-semibold tracking-[-0.02em] text-sub transition-colors group-hover:text-accent'>
                {exp.role}
              </div>
              <div className='font-mono text-[13px] tracking-[0.04em] text-muted'>{exp.company}</div>
            </div>
            <div>
              <div className='mb-2 font-mono text-[13px] tracking-[0.06em] text-accent opacity-70'>{exp.period}</div>
              <div className='font-body text-[16px] leading-[1.65] text-body'>{exp.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
