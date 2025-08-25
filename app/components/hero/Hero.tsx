'use client';

import React, { useEffect, useState } from 'react';
import ProfilePicture from './ProfilePicture';
import Text from './Text';
import Buttons from './Buttons';
import SocialLinks from './SocialLinks';
import { AnimationDefaultsType } from '@/types';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const animationDefaults: AnimationDefaultsType = (duration: number, delay: number) => ({
    variants: fadeInUp,
    initial: 'initial',
    animate: isVisible ? 'animate' : 'initial',
    transition: {
      duration,
      delay,
    },
  });

  return (
    <div id='home' className='relative flex items-center justify-center pb-10 pt-20'>
      <div className='relative z-10 mx-auto flex max-w-7xl flex-col justify-center gap-5 px-4 pb-4 pt-20 text-center md:px-6 md:py-20'>
        <ProfilePicture animationDefaults={animationDefaults} isVisible={isVisible} />
        <Text animationDefaults={animationDefaults} isVisible={isVisible} />
        <SocialLinks animationDefaults={animationDefaults} isVisible={isVisible} />
        <Buttons animationDefaults={animationDefaults} isVisible={isVisible} />
      </div>
    </div>
  );
};

export default Hero;
