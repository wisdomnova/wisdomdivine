'use client';

import { FadeUp, Stagger, StaggerItem } from '@/components/motion';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  ref: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  year: string;
}

const projects: Project[] = [
  {
    ref: 'WD-01',
    title: 'BeeSeek',
    category: 'Service Marketplace',
    description:
      'Full lifecycle service marketplace: discovery, contracting, execution, payments, and completion. Real-time task states, contracts, and wallet infrastructure.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Real-time'],
    year: '2024',
  },
  {
    ref: 'WD-02',
    title: 'LeadFlow',
    category: 'Email Automation',
    description:
      'Campaign platform for managing outreach at scale. Structured campaigns, automated flows, and bulk email operations designed for performance.',
    tech: ['React', 'Node.js', 'Redis', 'SMTP'],
    year: '2024',
  },
  {
    ref: 'WD-03',
    title: 'MDM Agent, TracTrac',
    category: 'Enterprise Tooling',
    description:
      'Fleet management system for farmland tablets. Monitoring, control, and visibility across distributed hardware in agricultural environments.',
    tech: ['React', 'Python', 'MDM', 'IoT'],
    year: '2023',
  },
  {
    ref: 'WD-04',
    title: 'Landvigo',
    category: 'Real Estate Platform',
    description:
      'Property listing platform focused on distress sales and map-based exploration. Simplified discovery for buyers and agents.',
    tech: ['Next.js', 'Maps API', 'PostgreSQL'],
    year: '2023',
  },
  {
    ref: 'WD-05',
    title: 'LowFi',
    category: 'Business Management',
    description:
      'All-in-one operations tool for SMEs. Consolidates workflows, reduces fragmentation, and gives small businesses operational control.',
    tech: ['React', 'Node.js', 'MongoDB'],
    year: '2023',
  },
  {
    ref: 'WD-06',
    title: 'Versertile',
    category: 'Web3 / Creative Tool',
    description:
      'P.O.E.M engine: a creative on-chain tool exploring the intersection of poetry, blockchain, and digital expression.',
    tech: ['Next.js', 'Solidity', 'Web3.js'],
    year: '2024',
  },
  {
    ref: 'WD-07',
    title: 'Multipu',
    category: 'Web3 / DeFi',
    description:
      'Hackathon project enabling users to launch meme coins across multiple markets simultaneously. Multi-chain deployment.',
    tech: ['Next.js', 'Solidity', 'Cross-chain'],
    year: '2024',
  },
  {
    ref: 'WD-08',
    title: 'SPE UI, University of Ibadan',
    category: 'Organizational',
    description:
      'Official website for the Society of Petroleum Engineers student chapter. Professional interface for a large student body.',
    tech: ['Next.js', 'CMS', 'Tailwind'],
    year: '2022',
  },
  {
    ref: 'WD-09',
    title: 'Conneer',
    category: 'AI / Career Tools',
    description:
      'AI-powered ATS score checker, job tracking, and resume optimizer. Helps candidates align their resumes with job requirements and track applications in one place.',
    tech: ['Next.js', 'AI/ML', 'Node.js', 'PostgreSQL'],
    year: '2025',
  },
  {
    ref: 'WD-10',
    title: 'My Hero VA',
    category: 'Virtual Assistant',
    description:
      'A virtual assistant platform connecting businesses with skilled remote assistants. Clean, professional interface built for trust and conversion.',
    tech: ['Next.js', 'Tailwind', 'CMS'],
    year: '2025',
  },
  {
    ref: 'WD-11',
    title: 'Loin Tech Limited',
    category: 'Company / Product Studio',
    description:
      'My company that builds and ships products like SignSea, LowFi, and BeeSeek. Focused on creating scalable tools that solve real operational problems.',
    tech: ['Next.js', 'Node.js', 'Multi-product'],
    year: '2024',
  },
  {
    ref: 'WD-12',
    title: 'Ikore',
    category: 'Agric Infrastructure',
    description:
      'Agricultural infrastructure platform streamlining operations across farming value chains. Built for scale, reliability, and the realities of agric in Africa.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL'],
    year: '2025',
  },
  {
    ref: 'WD-13',
    title: 'Claude UI',
    category: 'Design System / AI Tooling',
    description:
      'A comprehensive AI UI design training set extracted from 11 award-winning websites. Foundations, patterns, archetypes, and code snippets that teach AI agents to produce professional-grade interfaces.',
    tech: ['Tailwind', 'Framer Motion', 'Markdown', 'Design Tokens'],
    year: '2026',
  },
];

export function Projects() {
  return (
    <section id="index" className="py-24 md:py-40 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl">
        {/* Section header */}
        <FadeUp>
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] tracking-tight">
              Work Index
            </h2>
            <span className="text-[11px] font-mono text-dim tracking-[0.15em]">
              {String(projects.length).padStart(2, '0')} Projects
            </span>
          </div>
        </FadeUp>

        {/* Project list — editorial index style */}
        <Stagger delay={0.1} stagger={0.05}>
          <ul className="divide-y divide-border border-t border-border">
            {projects.map((project) => (
              <StaggerItem key={project.ref}>
                <li className="group cursor-pointer">
                  <div className="py-8 md:py-10 flex flex-col md:grid md:grid-cols-[80px_1fr_1fr_60px] md:items-start gap-4 md:gap-6 transition-opacity duration-300">
                    {/* Ref # */}
                    <span className="text-[11px] font-mono text-dim tracking-[0.15em] pt-1">
                      {project.ref}
                    </span>

                    {/* Title + Category */}
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl tracking-tight group-hover:text-muted transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-dim mt-1 block">
                        {project.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted leading-relaxed max-w-sm">
                      {project.description}
                    </p>

                    {/* Year */}
                    <span className="text-[11px] font-mono text-dim self-start pt-1">
                      {project.year}
                    </span>
                  </div>
                </li>
              </StaggerItem>
            ))}
          </ul>
        </Stagger>
      </div>
    </section>
  );
}
