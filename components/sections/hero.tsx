'use client';

import { FadeUp } from '@/components/motion';
import { PuzzleMat } from '@/components/puzzle-mat';

export function Hero() {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-end pb-16 md:pb-24 pt-24 relative overflow-hidden">
      {/* Puzzle mat filling the upper space, full bleed */}
      <div className="flex-1 flex items-stretch mb-12 md:mb-20">
        <FadeUp duration={1.2} className="w-full flex items-center">
          <PuzzleMat />
        </FadeUp>
      </div>

      <div className="max-w-5xl w-full px-6 md:px-12 lg:px-20">
        {/* Ref number */}
        <FadeUp delay={0.1}>
          <span className="text-[11px] font-mono tracking-[0.2em] text-dim uppercase block mb-8">
            Est. 2026, Abuja, Nigeria
          </span>
        </FadeUp>

        {/* Main headline */}
        <FadeUp delay={0.2} duration={1}>
          <h1 className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] font-normal leading-[1.05] tracking-tight mb-10">
            Product engineer building
            <br className="hidden md:block" />
            <em className="font-normal"> systems that work.</em>
          </h1>
        </FadeUp>

        {/* Subtitle */}
        <FadeUp delay={0.4}>
          <p className="max-w-lg text-muted leading-relaxed text-[clamp(0.9rem,1.1vw,1.05rem)]">
            Product engineering, automation, and scalable backend systems. 
            with a strong bias toward execution and real-world application.
          </p>
        </FadeUp>

        {/* Horizontal rule */}
        <FadeUp delay={0.5}>
          <hr className="mt-16" />
        </FadeUp>
      </div>
    </section>
  );
}
