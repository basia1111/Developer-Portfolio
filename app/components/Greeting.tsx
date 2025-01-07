import { useEffect, useState } from 'react';

const Greeting = () => {
  const messages = ['Hello', 'Hi there', 'Welcome'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='text-accent-primary dark:text-accent-light flex items-end font-mono'>
      <span>{messages[index]}</span>
      <span className='animate-blink ml-1 inline-block'>_</span>
    </div>
  );
};

export default Greeting;
