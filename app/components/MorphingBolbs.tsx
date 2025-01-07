'use client';
import React from 'react';
import { motion } from 'framer-motion';

const SmoothMorphingBlobs = () => {
  const blobVariants = {
    one: {
      d: 'M57.7,-41.8C70.3,-30.1,73.1,-6.4,66.5,12.2C59.9,30.9,43.9,44.5,24.9,55C5.8,65.5,-16.4,72.9,-34,66.1C-51.6,59.4,-64.6,38.6,-70.7,15.2C-76.8,-8.2,-76.1,-34.2,-63.2,-45.9C-50.3,-57.6,-25.1,-55.1,-1.3,-54.1C22.5,-53,45,-53.4,57.7,-41.8Z',
    },
    two: {
      d: 'M56.5,-44C70.2,-28,76,-4.6,69.5,12.7C63,30.1,44.2,41.4,24.8,50.4C5.3,59.4,-14.8,66,-35.1,60.8C-55.4,55.7,-76,38.9,-77.1,21.2C-78.3,3.6,-60,-14.9,-43.9,-31.4C-27.9,-48,-13.9,-62.6,3.8,-65.6C21.4,-68.6,42.9,-59.9,56.5,-44Z',
    },
    three: {
      d: 'M53.4,-41.8C67.1,-25.5,74.5,-3.4,69.7,15.1C64.9,33.7,47.7,48.6,28.2,57.6C8.7,66.6,-13.2,69.7,-27.8,61.3C-42.4,52.9,-49.8,33,-53.4,13.3C-56.9,-6.3,-56.7,-25.7,-47.2,-41.1C-37.6,-56.5,-18.8,-68,0.5,-68.5C19.9,-68.9,39.7,-58.2,53.4,-41.8Z',
    },
    five: {
      d: 'M32.8,-29.8C45,-10.9,59.1,2.9,60.7,21.1C62.3,39.3,51.6,62,33.7,71C15.9,80,-9.1,75.2,-29.2,64.2C-49.3,53.1,-64.7,35.7,-69.8,15.3C-74.9,-5,-69.7,-28.3,-56.4,-47.4C-43.1,-66.5,-21.5,-81.6,-5.6,-77.1C10.3,-72.6,20.7,-48.7,32.8,-29.8Z',
    },
  };

  return (
    <div className='relative z-10 flex w-full items-center justify-center'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='-100 -100 200 200' width='100%' className='h-[300px] md:h-[500px]'>
        <defs>
          <linearGradient id='blob-gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#6366f1' />
            <stop offset='50%' stopColor='#4338ca' />
            <stop offset='100%' stopColor='#312e81' />
          </linearGradient>
        </defs>
        <motion.path
          fill='url(#blob-gradient)'
          variants={blobVariants}
          animate={{
            d: [blobVariants.one.d, blobVariants.two.d, blobVariants.three.d, blobVariants.five.d, blobVariants.one.d],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.7, 0.8, 1],
          }}
          style={{ transform: 'scale(1.25)' }}
        />
      </svg>
    </div>
  );
};

export default SmoothMorphingBlobs;
