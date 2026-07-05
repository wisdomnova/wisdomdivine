'use client';

import { FadeUp, Stagger, StaggerItem } from '@/components/motion';

interface Project {
  ref: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  year: string;
}

const heroProjects: Project[] = [
  {
    ref: 'WD-01',
    title: 'BeeSeek',
    category: 'Service Marketplace Infrastructure',
    description:
      'Designed PostgreSQL database schemas supporting marketplace transactions, escrow workflows, and real time state synchronization. Built escrow workflows, RBAC authorization, and a double entry ledger for wallet accounting. Architected backend services for contracts, wallets, notifications, messaging, and service lifecycle management.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'WebSockets'],
    year: '2024',
  },
  {
    ref: 'WD-02',
    title: 'LeadFlow',
    category: 'Email Automation Pipeline',
    description:
      'Built a high throughput email marketing engine utilizing Redis message queues and Node.js workers. Designed contact segmentation algorithms and SMTP rate limiting to optimize deliverability.',
    tech: ['React', 'Node.js', 'Redis', 'SMTP'],
    year: '2024',
  },
  {
    ref: 'WD-03',
    title: 'MDM Agent / TracTrac',
    category: 'Enterprise Fleet Tooling',
    description:
      'Developed a hardware fleet management server and agent monitoring distributed agricultural tablets. Implemented remote configuration payloads, telemetry aggregation, and offline SQLite data synchronization.',
    tech: ['React', 'Python', 'SQLite', 'MDM Protocol'],
    year: '2023',
  },
  {
    ref: 'WD-04',
    title: 'Conneer',
    category: 'AI Pipeline Integration',
    description:
      'Integrated LLM inference engines to parse documents and generate structured JSON outputs. Designed candidate ranking algorithms matching resume profiles against extracted corporate job schemas.',
    tech: ['Next.js', 'AI APIs', 'Node.js', 'PostgreSQL'],
    year: '2025',
  },
  {
    ref: 'WD-05',
    title: 'Loin Tech Limited',
    category: 'Product Studio Architecture',
    description:
      'Founded and lead a product studio building SaaS platforms across marketplaces, AI, and business automation. Designed shared authentication services, reusable backend architecture, and multi tenant database foundations.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker'],
    year: '2024',
  },
];

const selectedProjects: Project[] = [
  {
    ref: 'WD-06',
    title: 'LowFi',
    category: 'Business Operating System',
    description: 'Consolidated distributed enterprise workflows into a centralized relational database and API layer for SMEs.',
    tech: ['React', 'Node.js', 'MongoDB'],
    year: '2023',
  },
  {
    ref: 'WD-07',
    title: 'AGDIL',
    category: 'Agribusiness Platform',
    description: 'Developed automated credit worthiness assessments and agribusiness marketplace endpoints.',
    tech: ['Next.js', 'PostgreSQL', 'REST API'],
    year: '2024',
  },
  {
    ref: 'WD-08',
    title: 'Landvigo',
    category: 'Property Discovery',
    description: 'Designed geospatial indexing pipelines and map based query performance systems.',
    tech: ['Next.js', 'Maps API', 'PostgreSQL'],
    year: '2023',
  },
  {
    ref: 'WD-09',
    title: 'TMF Nigeria',
    category: 'Event Coordination',
    description: 'Implemented event check in systems utilizing real time QR verification and local database state synchronization.',
    tech: ['Next.js', 'Framer Motion', 'Real-time Sync'],
    year: '2026',
  },
  {
    ref: 'WD-10',
    title: 'Ikore',
    category: 'Agric Infrastructure',
    description: 'Engineered backend distribution logic and tracking systems for agricultural value chains.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL'],
    year: '2025',
  },
  {
    ref: 'WD-11',
    title: 'Multipu',
    category: 'DeFi Deployer',
    description: 'Created smart contracts and frontends enabling programmatic token deployment across multiple EVM networks.',
    tech: ['Next.js', 'Solidity', 'EVM Chains'],
    year: '2024',
  },
  {
    ref: 'WD-12',
    title: 'Versertile',
    category: 'Creative Engine',
    description: 'Built an on chain publishing engine mapping structured text metadata to blockchain storage layers.',
    tech: ['Next.js', 'Solidity', 'Web3.js'],
    year: '2024',
  },
  {
    ref: 'WD-13',
    title: 'UI Intelligence Dataset',
    category: 'Design Systems & Machine Learning',
    description: 'Compiled design tokens, interactive components, and structural patterns for model training environments.',
    tech: ['Tailwind', 'Framer Motion', 'JSON'],
    year: '2026',
  },
  {
    ref: 'WD-14',
    title: 'My Hero VA',
    category: 'Assistant Platform',
    description: 'Designed registration pipelines and booking schedules for remote support services.',
    tech: ['Next.js', 'Tailwind CSS', 'CMS'],
    year: '2025',
  },
  {
    ref: 'WD-15',
    title: 'SPE UI',
    category: 'Organizational Site',
    description: 'Built structural templates, membership directories, and event landing pages for petroleum engineers.',
    tech: ['Next.js', 'CMS', 'Tailwind CSS'],
    year: '2022',
  },
];

export function Projects() {
  return (
    <section id="index" className="py-24 md:py-40 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl">
        {/* Hero Projects Section */}
        <FadeUp>
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] tracking-tight">
              Featured Systems & Architectures
            </h2>
            <span className="text-[11px] font-mono text-dim tracking-[0.15em]">
              {String(heroProjects.length).padStart(2, '0')} Hero Projects
            </span>
          </div>
        </FadeUp>

        <Stagger delay={0.1} stagger={0.05}>
          <ul className="divide-y divide-border border-t border-border mb-28">
            {heroProjects.map((project) => (
              <StaggerItem key={project.ref}>
                <li className="group">
                  <div className="py-8 md:py-10 flex flex-col md:grid md:grid-cols-[80px_1.2fr_1.8fr_80px] md:items-start gap-4 md:gap-6 transition-opacity duration-300">
                    <span className="text-[11px] font-mono text-dim tracking-[0.15em] pt-1">
                      {project.ref}
                    </span>

                    <div>
                      <h3 className="font-serif text-xl md:text-2xl tracking-tight group-hover:text-muted transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-dim mt-1 block">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-sm text-muted leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-col gap-1 text-[11px] font-mono text-dim self-start pt-1 md:text-right w-full">
                      <span>{project.year}</span>
                      <span className="text-[10px] text-neutral-500 overflow-hidden text-ellipsis whitespace-nowrap block">
                        {project.tech.slice(0, 2).join(', ')}
                      </span>
                    </div>
                  </div>
                </li>
              </StaggerItem>
            ))}
          </ul>
        </Stagger>

        {/* Selected Projects Section */}
        <FadeUp>
          <div className="flex items-baseline justify-between mb-16 pt-12 border-t border-border">
            <h2 className="font-serif text-[clamp(1.5rem,2.8vw,2.4rem)] tracking-tight">
              Selected Software Projects
            </h2>
            <span className="text-[11px] font-mono text-dim tracking-[0.15em]">
              {String(selectedProjects.length).padStart(2, '0')} Index Items
            </span>
          </div>
        </FadeUp>

        <Stagger delay={0.1} stagger={0.05}>
          <ul className="divide-y divide-border border-t border-border">
            {selectedProjects.map((project) => (
              <StaggerItem key={project.ref}>
                <li className="group">
                  <div className="py-6 flex flex-col md:grid md:grid-cols-[80px_1fr_2fr_80px] md:items-center gap-2 md:gap-6 transition-opacity duration-300">
                    <span className="text-[11px] font-mono text-dim tracking-[0.15em]">
                      {project.ref}
                    </span>

                    <div>
                      <h4 className="font-serif text-lg tracking-tight group-hover:text-muted transition-colors duration-300">
                        {project.title}
                      </h4>
                      <span className="text-[9px] font-mono uppercase tracking-[0.1em] text-dim mt-0.5 block">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-xs text-muted leading-relaxed">
                      {project.description}
                    </p>

                    <span className="text-[11px] font-mono text-dim md:text-right">
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
