'use client';

import { Printer, ArrowLeft } from 'lucide-react';

/* ─── Data ─── */
const contact = {
  name: 'Wisdom Divine',
  title: 'Product Engineer (Backend Focus)',
  location: 'Abuja, Nigeria',
  email: 'hello@wisdomdivine.xyz',
  website: 'wisdomdivine.xyz',
  github: 'github.com/wisdomnova',
  linkedin: 'linkedin.com/in/wisdomnova',
};

const coreStack = 'Node.js | NestJS | Fastify | PostgreSQL | Redis | Docker | AWS | React | Next.js | TypeScript';

const summary =
  'Software engineer focused on backend systems, automation, and scalable SaaS infrastructure. Experienced designing transactional workflows, asynchronous processing pipelines, telemetry systems, and multi tenant architectures. Specialized in Node.js, NestJS, and Fastify with database and system design expertise.';

const capabilities = [
  { area: 'Backend Systems', skills: 'Node.js, NestJS, Fastify, PostgreSQL, Redis, GraphQL, REST APIs, SQLite, system design' },
  { area: 'Frontend Systems', skills: 'React, Next.js, TypeScript, Tailwind CSS, Framer Motion' },
  { area: 'Infrastructure & Tools', skills: 'Docker, AWS, Git, GitHub, Linux, CI/CD, IoT telemetry protocols' },
  { area: 'Security & Auth', skills: 'JWT authentication, OAuth, role based access control (RBAC)' },
  { area: 'Testing Frameworks', skills: 'Jest, Vitest, Playwright, integration testing' },
  { area: 'AI Integration', skills: 'Structured LLM Outputs, Vector Search Pipelines, Prompt Optimization' },
];

const competencies = [
  'API Design',
  'Database Design',
  'Authentication & Authorization',
  'Workflow Automation',
  'Background Job Processing',
  'Real-time Systems',
  'AI Integration',
  'System Architecture',
  'Performance Optimization',
  'Technical Product Design',
];

const highlights = [
  'Designed PostgreSQL database schemas supporting marketplace transactions, escrow workflows, and real time state synchronization',
  'Built an email delivery platform using Redis backed job queues, contact segmentation, and SMTP rate limiting to support reliable high volume campaign execution',
  'Developed hardware device fleet management telemetry systems with offline SQLite synchronization protocols',
  'Integrated AI LLM inference pipelines to parse unstructured documents into typed database schemas',
  'Engineered multi tenant authentication, sharing, and API key management layers for product studios',
  'Optimized PostgreSQL queries, connection pools, and relational index distributions for search queries',
];

const heroProjects = [
  {
    title: 'BeeSeek',
    role: 'Lead Backend Engineer',
    period: '2024',
    type: 'Service Marketplace Infrastructure',
    description:
      'Designed PostgreSQL database schemas supporting marketplace transactions, escrow workflows, and real time state synchronization. Built escrow workflows, RBAC authorization, and a double entry ledger for wallet accounting. Architected backend services for contracts, wallets, notifications, messaging, and service lifecycle management.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'WebSockets'],
  },
  {
    title: 'LeadFlow',
    role: 'Backend Engineer',
    period: '2024',
    type: 'Email Automation Pipeline',
    description:
      'Built a high throughput email marketing engine utilizing Redis message queues and Node.js workers. Designed contact segmentation algorithms and SMTP rate limiting to optimize deliverability.',
    tech: ['React', 'Node.js', 'Redis', 'SMTP'],
  },
  {
    title: 'MDM Agent / TracTrac',
    role: 'Systems Engineer',
    period: '2023',
    type: 'Enterprise Fleet Tooling',
    description:
      'Developed a hardware fleet management server and agent monitoring distributed agricultural tablets. Implemented remote configuration payloads, telemetry aggregation, and offline SQLite data synchronization.',
    tech: ['React', 'Python', 'SQLite', 'MDM Protocol'],
  },
  {
    title: 'Conneer',
    role: 'Full Stack Engineer',
    period: '2025',
    type: 'AI Pipeline Integration',
    description:
      'Integrated LLM inference engines to parse documents and generate structured JSON outputs. Designed candidate ranking algorithms matching resume profiles against extracted corporate job schemas.',
    tech: ['Next.js', 'AI APIs', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Loin Tech Limited',
    role: 'Founder / Lead Engineer',
    period: '2024 - Present',
    type: 'Product Studio Architecture',
    description:
      'Founded and lead a product studio building SaaS platforms across marketplaces, AI, and business automation. Designed shared authentication services, reusable backend architecture, and multi tenant database foundations.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker'],
  },
];

const selectedProjects = [
  {
    title: 'LowFi',
    type: 'Business Operating System',
    description: 'Consolidated distributed enterprise workflows into a centralized relational database and API layer for SMEs.',
  },
  {
    title: 'AGDIL',
    type: 'Agribusiness Platform',
    description: 'Developed automated credit worthiness assessments and agribusiness marketplace endpoints.',
  },
  {
    title: 'Landvigo',
    type: 'Property Discovery',
    description: 'Designed geospatial indexing pipelines and map based query performance systems.',
  },
  {
    title: 'TMF Nigeria',
    type: 'Event Coordination',
    description: 'Implemented event check in systems utilizing real time QR verification and local database state synchronization.',
  },
  {
    title: 'Ikore',
    type: 'Agric Infrastructure',
    description: 'Engineered backend distribution logic and tracking systems for agricultural value chains.',
  },
  {
    title: 'UI Intelligence Dataset',
    type: 'Design Systems & Machine Learning',
    description: 'Compiled design tokens, interactive components, and structural patterns for model training environments.',
  },
];

const education = [
  {
    degree: 'University of Ibadan',
    detail: 'Petroleum Engineering',
    note: 'Built the official SPE UI chapter website during studies',
  },
];

/* ─── Component ─── */

export function ResumeClient() {
  const handlePrint = () => window.print();

  return (
    <>
      {/* Screen-only toolbar */}
      <div className="no-print fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-[850px] mx-auto px-6 py-3 flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </a>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            Print / Save PDF
          </button>
        </div>
      </div>

      {/* Resume Document */}
      <div className="resume-page bg-white text-neutral-900 font-sans print:bg-white">
        <div className="max-w-[850px] mx-auto px-8 py-12 print:px-0 print:py-0 mt-16 print:mt-0">

          {/* ── Header ── */}
          <header className="mb-6 print:mb-4">
            <h1 className="text-3xl print:text-[26px] font-bold tracking-tight leading-tight">
              {contact.name}
            </h1>
            <p className="text-lg print:text-[14px] text-neutral-500 font-medium mt-1">
              {contact.title}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-sm print:text-[11px] text-neutral-500">
              <span>{contact.location}</span>
              <span className="text-neutral-300">|</span>
              <a href={`mailto:${contact.email}`} className="hover:text-neutral-900 print:text-neutral-600 transition-colors">
                {contact.email}
              </a>
              <span className="text-neutral-300">|</span>
              <a href={`https://${contact.website}`} className="hover:text-neutral-900 print:text-neutral-600 transition-colors">
                {contact.website}
              </a>
              <span className="text-neutral-300">|</span>
              <a href={`https://${contact.github}`} className="hover:text-neutral-900 print:text-neutral-600 transition-colors">
                {contact.github}
              </a>
              <span className="text-neutral-300">|</span>
              <a href={`https://${contact.linkedin}`} className="hover:text-neutral-900 print:text-neutral-600 transition-colors">
                {contact.linkedin}
              </a>
            </div>
            
            {/* Core Stack Block */}
            <div className="mt-4 pt-3 border-t border-neutral-100 text-xs print:text-[10px] font-mono text-neutral-600 tracking-tight">
              <span className="font-semibold text-neutral-900 mr-2">Core Stack:</span>
              {coreStack}
            </div>
          </header>

          <hr className="border-neutral-200 mb-6 print:mb-4" />

          {/* ── Summary ── */}
          <section className="mb-7 print:mb-5">
            <h2 className="resume-section-title">Summary</h2>
            <p className="text-sm print:text-[11px] text-neutral-600 leading-relaxed">
              {summary}
            </p>
          </section>

          {/* ── Engineering Highlights ── */}
          <section className="mb-7 print:mb-5">
            <h2 className="resume-section-title">Engineering Highlights</h2>
            <ul className="list-disc list-inside space-y-1 text-sm print:text-[11px] text-neutral-600">
              {highlights.map((highlight, idx) => (
                <li key={idx} className="leading-relaxed">
                  {highlight}
                </li>
              ))}
            </ul>
          </section>

          {/* ── Technical Skills ── */}
          <section className="mb-7 print:mb-5">
            <h2 className="resume-section-title">Technical Skills</h2>
            <div className="space-y-1.5 mb-4">
              {capabilities.map((cap) => (
                <div key={cap.area} className="flex text-sm print:text-[11px]">
                  <span className="font-semibold text-neutral-900 w-36 print:w-32 shrink-0">
                    {cap.area}
                  </span>
                  <span className="text-neutral-600">{cap.skills}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Selected Engineering Competencies ── */}
          <section className="mb-7 print:mb-5">
            <h2 className="resume-section-title">Selected Engineering Competencies</h2>
            <div className="flex flex-wrap gap-2">
              {competencies.map((comp) => (
                <span
                  key={comp}
                  className="text-[10px] print:text-[9.5px] font-mono px-2.5 py-1 bg-neutral-100 text-neutral-600 rounded print:bg-neutral-50 print:border print:border-neutral-200"
                >
                  {comp}
                </span>
              ))}
            </div>
          </section>

          {/* ── Hero Projects ── */}
          <section className="mb-7 print:mb-5">
            <h2 className="resume-section-title">Featured Projects & Experience</h2>
            <div className="space-y-5 print:space-y-3">
              {heroProjects.map((project) => (
                <div key={project.title} className="project-entry">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <div className="flex items-baseline gap-2">
                      <h3 className="font-semibold text-sm print:text-[11.5px] text-neutral-900">
                        {project.title}
                      </h3>
                      <span className="text-xs print:text-[10px] text-neutral-400 font-medium">
                        {project.type}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs print:text-[10px] text-neutral-500 italic">
                        {project.role}
                      </span>
                      <span className="text-xs print:text-[10px] text-neutral-400 font-mono">
                        {project.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm print:text-[10.5px] text-neutral-600 leading-relaxed mb-1.5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] print:text-[9px] font-mono px-2 py-0.5 bg-neutral-100 text-neutral-500 rounded print:bg-neutral-50 print:border print:border-neutral-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Selected Projects ── */}
          <section className="mb-7 print:mb-5">
            <h2 className="resume-section-title">Selected Projects</h2>
            <div className="space-y-2.5 print:space-y-1.5">
              {selectedProjects.map((project) => (
                <div key={project.title} className="flex flex-col md:flex-row md:items-baseline justify-between text-sm print:text-[11px] gap-1">
                  <div className="flex items-baseline gap-2 shrink-0">
                    <h3 className="font-semibold text-neutral-900">
                      {project.title}
                    </h3>
                    <span className="text-xs print:text-[10px] text-neutral-400">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-neutral-600 md:text-right text-xs print:text-[10px]">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Education ── */}
          <section className="mb-7 print:mb-5">
            <h2 className="resume-section-title">Education</h2>
            {education.map((edu) => (
              <div key={edu.degree}>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-sm print:text-[11.5px] text-neutral-900">
                    {edu.degree}
                  </h3>
                </div>
                <p className="text-sm print:text-[11px] text-neutral-600">{edu.detail}</p>
                {edu.note && (
                  <p className="text-xs print:text-[10px] text-neutral-400 mt-0.5 italic">
                    {edu.note}
                  </p>
                )}
              </div>
            ))}
          </section>

          {/* ── Footer note (screen only) ── */}
          <div className="no-print mt-12 pt-6 border-t border-neutral-100 text-center">
            <p className="text-xs text-neutral-400">
              Press <kbd className="px-1.5 py-0.5 bg-neutral-100 rounded text-neutral-500 text-[10px] font-mono">⌘P</kbd> or click the button above to save as PDF
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
