import React, { useState } from 'react';
import { ArrowUpRight, ChevronRight, Folder } from 'lucide-react';
import { projects, type Project, type ProjectStatus } from '@/lib/projects';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Mono, SectionBar, Tag } from './primitives';
import { CountUp, EASE, Reveal } from './motion';

const STATUS_TAG: Record<ProjectStatus, { label: string; tone: 'accent' | 'info' | 'neutral' }> = {
  live: { label: 'live', tone: 'accent' },
  internal: { label: 'internal', tone: 'info' },
  personal: { label: 'personal', tone: 'neutral' },
};

/** Expanded detail: the full case study, revealed only when asked for. */
const Detail = ({ project }: { project: Project }) => (
  <div className="px-5 pb-5 pt-1" style={{ backgroundColor: 'rgba(255,255,255,0.015)' }}>
    {project.image && (
      <div
        className="rounded-md overflow-hidden mb-4"
        style={{ border: '1px solid var(--v2-line)' }}
      >
        <img
          src={project.image}
          alt={`${project.title} interface`}
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    )}

    {project.metrics && (
      <div
        className="flex flex-wrap gap-x-6 gap-y-3 mb-4 py-3"
        style={{ borderTop: '1px solid var(--v2-line-soft)', borderBottom: '1px solid var(--v2-line-soft)' }}
      >
        {project.metrics.map((m) => (
          <div key={m.label}>
            <p className="text-[15px] font-semibold" style={{ color: 'var(--v2-text)' }}>
              <CountUp value={m.value} />
            </p>
            <Mono dim>{m.label}</Mono>
          </div>
        ))}
      </div>
    )}

    <div className="space-y-3">
      <div>
        <Mono dim className="block mb-1">
          // the problem
        </Mono>
        <p className="text-[13px] leading-relaxed" style={{ color: 'var(--v2-muted)' }}>
          {project.problem}
        </p>
      </div>
      <div>
        <Mono dim className="block mb-1">
          // what I built
        </Mono>
        <p className="text-[13px] leading-relaxed" style={{ color: 'var(--v2-text)' }}>
          {project.contribution}
        </p>
      </div>
    </div>

    <div className="flex flex-wrap gap-1.5 mt-4">
      {project.tech.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>

    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 mt-4 text-[12px] font-medium transition-opacity hover:opacity-80"
        style={{ color: 'var(--v2-accent)' }}
      >
        Visit site
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    )}
  </div>
);

const WorkRow = ({ project }: { project: Project }) => {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const status = STATUS_TAG[project.status];

  return (
    <div style={{ borderBottom: '1px solid var(--v2-line-soft)' }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center gap-3 px-5 py-2.5 text-left transition-colors hover:bg-white/[0.025]"
      >
        <ChevronRight
          className={`w-3.5 h-3.5 shrink-0 transition-transform ${open ? 'rotate-90' : ''}`}
          style={{ color: 'var(--v2-dim)' }}
        />
        <span className="flex items-baseline gap-2.5 min-w-0 flex-1">
          <span className="text-[13px] font-semibold shrink-0" style={{ color: 'var(--v2-text)' }}>
            {project.title}
          </span>
          <span
            className="text-[12.5px] truncate min-w-0 hidden xs:inline"
            style={{ color: 'var(--v2-muted)' }}
          >
            {project.short}
          </span>
        </span>
        <span className="flex items-center gap-2 shrink-0">
          <Tag tone={status.tone}>{status.label}</Tag>
          <Mono dim className="hidden sm:inline">
            // {project.domain}
          </Mono>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="detail"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={reduced ? undefined : { height: 'auto', opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: EASE }}
            style={{ overflow: 'hidden' }}
          >
            <Detail project={project} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const WorkList = () => {
  const years = Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b.localeCompare(a));

  return (
    <>
      <SectionBar
        title="Work"
        id="portfolio"
        action={<Mono dim>{projects.length} projects</Mono>}
      />

      {years.map((year) => (
        <div key={year}>
          <div
            className="flex items-center gap-2 px-5 py-2"
            style={{ borderBottom: '1px solid var(--v2-line-soft)' }}
          >
            <Folder className="w-3.5 h-3.5" style={{ color: 'var(--v2-accent)' }} />
            <Mono>{year}</Mono>
          </div>

          {projects
            .filter((p) => p.year === year)
            .map((project, i) => (
              <Reveal key={project.title} delay={i * 0.04}>
                <WorkRow project={project} />
              </Reveal>
            ))}
        </div>
      ))}
    </>
  );
};

export default WorkList;
