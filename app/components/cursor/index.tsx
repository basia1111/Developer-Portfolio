import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = e.clientX + 'px';
      cursorRef.current.style.top = e.clientY + 'px';
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    const addHover = () => setHover(true);
    const removeHover = () => setHover(false);

    const hoverEls = document.querySelectorAll('a, button, .h-card, .h-tag');
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  });

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed z-50 flex items-center justify-center rounded-full border-[1px] transition-[width,height,border-color,background] duration-200 ${hover ? 'h-10 w-10 border-accent bg-accent/10' : 'h-5 w-5 border-primary bg-accent/0'}`}
    >
      <div className='pointer-events-none fixed h-1 w-1 rounded-full bg-primary'></div>
    </div>
  );
}
