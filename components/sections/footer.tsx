'use client';

import { FadeUp } from '@/components/motion';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact">
      {/* CTA — still on paper background */}
      <div className="py-32 md:py-44 px-6 md:px-12 lg:px-20 border-t border-border">
        <div className="max-w-5xl">
          <FadeUp>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-dim block mb-8">
              Get in touch
            </span>
            <a
              href="mailto:hello@wisdomdivine.xyz"
              className="group inline-flex items-baseline gap-4"
            >
              <span className="font-serif text-[clamp(2.2rem,5vw,4.5rem)] tracking-tight italic hover:text-muted transition-colors duration-500">
                Let&apos;s build together
              </span>
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-dim group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </a>
          </FadeUp>
        </div>
      </div>

      {/* Colophon — dark inverted band */}
      <div className="bg-dark text-on-dark px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-5xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left: Credits */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono tracking-[0.15em] uppercase opacity-50">
              © 2026 Wisdom Divine
            </span>
            <span className="text-[10px] font-mono tracking-[0.1em] opacity-30">
              Set in Playfair Display &amp; Inter. Built with Next.js.
            </span>
          </div>

          {/* Right: Links */}
          <div className="flex gap-8">
            <a
              href="https://github.com/wisdomnova"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono uppercase tracking-[0.15em] opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/wisdomnova"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono uppercase tracking-[0.15em] opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/in/wisdomnova"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono uppercase tracking-[0.15em] opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
