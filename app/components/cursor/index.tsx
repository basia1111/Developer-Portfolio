import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const [hover, setHover] = useState(false);

  window.addEventListener('mousemove', (e) => {
    cursorRef.current.style.left = e.clientX + 'px';
    cursorRef.current.style.top = e.clientY + 'px';
  });
  useEffect(() => {
    const hoverEls = document.querySelectorAll('a, button, .h-card, .h-tag');
    const addHover = () => setHover(true);
    const removehover = () => setHover(false);
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removehover);
    });
  });

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed z-50 flex h-4 w-4 items-center justify-center rounded-full border-[1px] transition-[width,height,border-color,background] ${hover ? 'h-10 w-10 border-accent bg-accent/10' : 'h-5 w-5 border-primary bg-accent/0'} `}
    >
      <div className='pointer-events-none fixed h-1 w-1 rounded-full border-[1px] border-primary bg-primary'></div>
    </div>
  );
}
