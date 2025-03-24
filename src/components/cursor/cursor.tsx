'use client';

import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const root = document.documentElement;
      root.style.setProperty('--cursor-x', `${e.clientX - 8}px`);
      root.style.setProperty('--cursor-y', `${e.clientY - 8}px`);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-4 h-4 bg-blue-500/80 rounded-full pointer-events-none z-[99999] transition-transform duration-75 ease-out translate-cursor" />
  );
}
