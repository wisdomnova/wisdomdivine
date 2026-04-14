'use client';

import { Printer, ArrowLeft } from 'lucide-react';

/* ─── Data ─── */
const contact = {
  name: 'Wisdom Divine',
  title: 'Product Engineer',
  location: 'Abuja, Nigeria',
  email: 'hello@wisdomdivine.xyz',
  website: 'wisdomdivine.xyz',
  github: 'github.com/wisdomnova',
  linkedin: 'linkedin.com/in/wisdomnova',
};

const summary =
  'Product engineer with a strong bias toward execution and real-world application. I identify inefficiencies, design systems around them, and ship solutions that actually get used. Experienced across marketplaces, SaaS platforms, enterprise tooling, and web3 infrastructure, with deep focus on automation, scalable backend systems, and product development.';

const capabilities = [
  { area: 'Frontend', skills: 'React, Next.js, TypeScript, Tailwind CSS, Framer Motion' },
  { area: 'Backend', skills: 'Node.js, Python, PostgreSQL, Redis, MongoDB, REST APIs' },
  { area: 'Infrastructure', skills: 'AWS, Docker, CI/CD, MDM Systems, Linux' },
  { area: 'Web3', skills: 'Solidity, Cross-chain tooling, On-chain systems, Web3.js' },
  { area: 'Product', skills: 'SaaS architecture, Automation, AI-powered tools, System design' },
];

const projects = [
  {
    title: 'BeeSeek',
    role: 'Full-Stack Engineer',
    period: '2024',
    type: 'Service Marketplace',
    description:
      'Designed and built a full lifecycle service marketplace handling discovery, contracting, execution, payments, and completion. Implemented real-time task state management, contract workflows, and wallet infrastructure.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Real-time'],
  },
  {
    title: 'Conneer',
    role: 'Full-Stack Engineer',
    period: '2025',
    type: 'AI / Career Tools',
    description:
      'Built an AI-powered ATS score checker with job tracking and resume optimization. Helps candidates align resumes with job requirements and track applications in one place.',
    tech: ['Next.js', 'AI/ML', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Ikore',
    role: 'Full-Stack Engineer',
    period: '2025',
    type: 'Agric Infrastructure',
    description:
      'Developed an agricultural infrastructure platform streamlining operations across farming value chains. Built for scale, reliability, and the realities of agric in Africa.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'LeadFlow',
    role: 'Full-Stack Engineer',
    period: '2024',
    type: 'Email Automation',
    description:
      'Engineered a campaign platform for managing outreach at scale with structured campaigns, automated flows, and bulk email operations optimized for deliverability.',
    tech: ['React', 'Node.js', 'Redis', 'SMTP'],
  },
  {
    title: 'MDM Agent / TracTrac',
    role: 'Systems Engineer',
    period: '2023',
    type: 'Enterprise Tooling',
    description:
      'Built a fleet management system for farmland tablets. Monitoring, control, and visibility across distributed hardware in agricultural environments.',
    tech: ['React', 'Python', 'MDM', 'IoT'],
  },
  {
    title: 'Versertile',
    role: 'Full-Stack / Web3 Engineer',
    period: '2024',
    type: 'Web3 / Creative Tool',
    description:
      'Created the P.O.E.M engine, a creative on-chain tool exploring the intersection of poetry, blockchain, and digital expression.',
    tech: ['Next.js', 'Solidity', 'Web3.js'],
  },
  {
    title: 'Multipu',
    role: 'Web3 Engineer',
    period: '2024',
    type: 'Web3 / DeFi',
    description:
      'Hackathon project enabling users to launch meme coins across multiple markets simultaneously with multi-chain deployment.',
    tech: ['Next.js', 'Solidity', 'Cross-chain'],
  },
  {
    title: 'Loin Tech Limited',
    role: 'Founder / Lead Engineer',
    period: '2024 - Present',
    type: 'Product Studio',
    description:
      'Founded and run a product studio that builds and ships products including SignSea, LowFi, and BeeSeek. Focused on scalable tools solving real operational problems.',
    tech: ['Next.js', 'Node.js', 'Multi-product'],
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
          <header className="mb-8 print:mb-6">
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
          </header>

          <hr className="border-neutral-200 mb-6 print:mb-4" />

          {/* ── Summary ── */}
          <section className="mb-7 print:mb-5">
            <h2 className="resume-section-title">Summary</h2>
            <p className="text-sm print:text-[11px] text-neutral-600 leading-relaxed">
              {summary}
            </p>
          </section>

          {/* ── Technical Skills ── */}
          <section className="mb-7 print:mb-5">
            <h2 className="resume-section-title">Technical Skills</h2>
            <div className="space-y-1.5">
              {capabilities.map((cap) => (
                <div key={cap.area} className="flex text-sm print:text-[11px]">
                  <span className="font-semibold text-neutral-900 w-28 print:w-24 shrink-0">
                    {cap.area}
                  </span>
                  <span className="text-neutral-600">{cap.skills}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Projects / Experience ── */}
          <section className="mb-7 print:mb-5">
            <h2 className="resume-section-title">Projects & Experience</h2>
            <div className="space-y-5 print:space-y-3">
              {projects.map((project) => (
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

          {/* ── Footer note (screen only, subtle) ── */}
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
