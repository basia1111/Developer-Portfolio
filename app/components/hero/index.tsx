import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Cube from './cube';

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
      <div className='flex flex-col items-center justify-between gap-5 md:flex-row'>
        <div>
          <Headline i={1} loaded={loaded} />
          <Description i={2} loaded={loaded} />
          <HeroButtons i={3} loaded={loaded} />
        </div>
        <Cube />
      </div>
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
        <div className='flex h-[48px] w-[48px] shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-accent/20 bg-elevated sm:h-[64px] sm:w-[64px]'>
          <Image src='/my-photo.png' alt='profile picture' width={150} height={150} />
        </div>
        <div className='font-display text-[clamp(22px,3vw,32px)] font-semibold tracking-[-0.02em] text-primary'>Barbara Żygilewicz</div>
      </div>
      <div className='py-[6px] font-mono text-[14px] tracking-[0.08em] text-muted'>KRAKÓW, PL</div>
    </motion.div>
  );
}

function Headline({ i, loaded }: Props) {
  const motionProps = getMotionProps(loaded, i);

  return (
    <motion.h1 {...motionProps} className='m-0 font-display text-[clamp(56px,11vw,150px)] font-bold leading-[0.88] tracking-[-0.06em] text-primary'>
      <span className='text-accent'>Full-stack</span>
      <br />
      developer
    </motion.h1>
  );
}

export function Description({ i, loaded }: Props) {
  const motionProps = getMotionProps(loaded, i);

  return (
    <motion.p {...motionProps} className='mt-[clamp(24px,4vh,40px)] max-w-[460px] font-body text-[14px] leading-[1.7] text-body sm:text-[17px]'>
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
        className='border border-accent bg-accent px-8 py-[13px] font-mono text-[12px] font-bold tracking-[0.08em] text-primary transition-all hover:bg-transparent hover:text-accent sm:w-auto sm:text-[14px]'
      >
        RESUME ↓
      </a>
      {[
        { label: 'GitHub', icon: Github, link: 'https://github.com/basia1111' },
        { label: 'LinkedIn', icon: Linkedin, link: 'https://www.linkedin.com/in/barbara-%C5%BCygilewicz-905635332/' },
        { label: 'Email', icon: Mail, link: 'mailto:basia.zygilewicz@gmail.com' },
      ].map(({ label, icon: Icon, link }) => (
        <a
          key={label}
          href={link}
          className='inline-flex items-center gap-2 border border-stroke bg-surface px-[22px] py-[13px] font-mono text-[12px] font-medium tracking-[0.06em] text-primary transition hover:border-edge sm:w-auto sm:text-[13px]'
        >
          <Icon size={16} strokeWidth={1.5} />
          {label}
        </a>
      ))}
    </motion.div>
  );
}
