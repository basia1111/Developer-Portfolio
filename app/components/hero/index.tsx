import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

const getMotionProps = (loaded: boolean, i: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: loaded ? 1 : 0, y: loaded ? 0 : 16 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
});

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <div className='relative mb-[clamp(64px,12vh,100px)]'>
      <PersonalDetails i={0} loaded={loaded} />
      <Headline i={1} loaded={loaded} />
      <Description i={2} loaded={loaded} />
      <HeroButtons i={3} loaded={loaded} />
    </div>
  );
}

type Props = {
  i: number;
  loaded: boolean;
};

function PersonalDetails({ i, loaded }: Props) {
  const motionProps = getMotionProps(loaded, i);

  return (
    <motion.div {...motionProps} className='mb-[clamp(20px,3vh,32px)] flex flex-wrap items-center justify-between gap-3'>
      <div className='flex items-center gap-4'>
        <div className='border-accent/20 bg-elevated flex h-[64px] w-[64px] shrink-0 items-center justify-center overflow-hidden rounded-full border-2'>
          <Image src='/profile.png' alt='profile picture' width={150} height={150} />
        </div>
        <div className='font-display text-primary text-[clamp(22px,3vw,32px)] font-semibold tracking-[-0.02em]'>Barbara Żygilewicz</div>
      </div>
      <div className='text-muted py-[6px] font-mono text-[14px] tracking-[0.08em]'>KRAKÓW, PL</div>
    </motion.div>
  );
}

function Headline({ i, loaded }: Props) {
  const motionProps = getMotionProps(loaded, i);

  return (
    <motion.h1 {...motionProps} className='font-display text-primary m-0 text-[clamp(56px,11vw,150px)] font-bold leading-[0.88] tracking-[-0.06em]'>
      <span className='text-accent'>Full-stack</span>
      <br />
      developer
    </motion.h1>
  );
}

export function Description({ i, loaded }: Props) {
  const motionProps = getMotionProps(loaded, i);

  return (
    <motion.p {...motionProps} className='font-body text-body mt-[clamp(24px,4vh,40px)] max-w-[460px] text-[17px] leading-[1.7]'>
      I build web applications across the full stack — from React and Next.js on the frontend to Node.js, AWS, and CI/CD on the backend. Currently working as a
      Node.js engineer intern at Cleeng, extending integration systems at scale.
    </motion.p>
  );
}

export function HeroButtons({ i, loaded }: Props) {
  const motionProps = getMotionProps(loaded, i);

  return (
    <motion.div {...motionProps} className='mt-[clamp(24px,4vh,36px)] flex flex-wrap items-center gap-3'>
      <a
        href='/resume.pdf'
        target='_blank'
        className='border-accent bg-accent text-primary hover:text-accent border px-8 py-[14px] font-mono text-[14px] font-bold tracking-[0.08em] transition-all hover:bg-transparent'
      >
        RESUME ↓
      </a>
      {[
        { label: 'GitHub', icon: Github },
        { label: 'LinkedIn', icon: Linkedin },
        { label: 'Email', icon: Mail },
      ].map(({ label, icon: Icon }) => (
        <a
          key={label}
          href='#'
          className='border-stroke bg-surface text-primary hover:border-edge inline-flex items-center gap-2 border px-[22px] py-[13px] font-mono text-[13px] font-medium tracking-[0.06em] transition'
        >
          <Icon size={16} strokeWidth={1.5} />
          {label}
        </a>
      ))}
    </motion.div>
  );
}
