'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 transition-all duration-500',
        scrolled && 'bg-[#fafaf8]/90 backdrop-blur-md'
      )}
    >
      <a href="/" className="font-serif text-lg tracking-tight">
        Wisdom Divine
      </a>
      <div className="flex items-center gap-8">
        <a href="#index" className="text-[11px] uppercase tracking-[0.15em] text-muted hover:text-foreground transition-colors duration-300">
          Index
        </a>
        <a href="#about" className="text-[11px] uppercase tracking-[0.15em] text-muted hover:text-foreground transition-colors duration-300">
          About
        </a>
        <a href="#contact" className="text-[11px] uppercase tracking-[0.15em] text-muted hover:text-foreground transition-colors duration-300">
          Contact
        </a>
        <a href="/resume" className="text-[11px] uppercase tracking-[0.15em] text-muted hover:text-foreground transition-colors duration-300">
          Resume
        </a>
      </div>
    </nav>
  );
}
