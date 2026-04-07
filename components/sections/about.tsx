'use client';

import { FadeUp, Stagger, StaggerItem } from '@/components/motion';
import Image from 'next/image';

const capabilities = [
  { label: 'Frontend', detail: 'React, Next.js, TypeScript, Tailwind CSS' },
  { label: 'Backend', detail: 'Node.js, Python, PostgreSQL, Redis, MongoDB' },
  { label: 'Infrastructure', detail: 'AWS, Docker, CI/CD, MDM Systems' },
  { label: 'Web3', detail: 'Solidity, Cross-chain tooling, On-chain systems' },
  { label: 'Product', detail: 'SaaS architecture, Automation, AI-powered tools' },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-5xl">
        {/* Section header */}
        <FadeUp>
          <div className="flex items-baseline justify-between mb-20">
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] tracking-tight">
              About
            </h2>
          </div>
        </FadeUp>

        {/* Portrait */}
        <FadeUp delay={0.1}>
          <div className="mb-16 md:mb-20 flex justify-start">
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border border-border">
              <Image
                src="/pilot.png"
                alt="Wisdom Divine"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">
          {/* Left column */}
          <div className="md:col-span-7">
            <FadeUp delay={0.15}>
              <blockquote className="font-serif text-[clamp(1.4rem,2.5vw,2.2rem)] leading-snug tracking-tight mb-12 italic">
                &ldquo;Identify inefficiencies, design systems around them, and ship
                solutions that actually get used.&rdquo;
              </blockquote>
            </FadeUp>

            <FadeUp delay={0.25}>
              <p className="text-muted leading-[1.8] mb-6 max-w-lg">
                I&apos;ve worked across multiple domains including marketplaces,
                internal tools, SaaS platforms, and web3 infrastructure. My work
                sits at the intersection of product engineering, automation, and
                scalable backend systems.
              </p>
            </FadeUp>

            <FadeUp delay={0.35}>
              <p className="text-muted leading-[1.8] max-w-lg">
                Currently focused on building and scaling products, while
                leveraging automation, SaaS development, and AI-powered systems
                to create tools that drive efficiency and generate real value.
              </p>
            </FadeUp>
          </div>

          {/* Right column — Capabilities */}
          <div className="md:col-span-5">
            <FadeUp delay={0.2}>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-dim block mb-8">
                Capabilities
              </span>
            </FadeUp>

            <Stagger delay={0.3} stagger={0.08}>
              {capabilities.map((cap) => (
                <StaggerItem key={cap.label}>
                  <div className="py-4 border-b border-border">
                    <span className="text-xs font-medium uppercase tracking-[0.1em] block mb-1.5">
                      {cap.label}
                    </span>
                    <p className="text-sm text-muted leading-relaxed">
                      {cap.detail}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
