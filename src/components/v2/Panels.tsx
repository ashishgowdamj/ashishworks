import React, { useState } from 'react';
import { Plus, GraduationCap } from 'lucide-react';
import {
  experience,
  stack,
  process,
  services,
  faqs,
  education,
  courses,
  now,
} from '@/lib/content';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Mono, SectionBar, Tag } from './primitives';
import { EASE, Reveal } from './motion';

const rowBorder = { borderBottom: '1px solid var(--v2-line-soft)' };

export const NowPanel = () => (
  <>
    <SectionBar title="Now" id="now" action={<Mono dim>{now.updated}</Mono>} />
    {now.items.map((item, i) => (
      <Reveal key={item.title} delay={i * 0.05}>
      <div className="px-5 py-3" style={rowBorder}>
        <div className="flex items-center gap-2 mb-1">
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ backgroundColor: 'var(--v2-accent)' }}
          />
          <span className="text-[13px] font-semibold" style={{ color: 'var(--v2-text)' }}>
            {item.title}
          </span>
        </div>
        <p className="text-[12.5px] leading-relaxed pl-3.5" style={{ color: 'var(--v2-muted)' }}>
          {item.detail}
        </p>
      </div>
      </Reveal>
    ))}
  </>
);

export const ExperiencePanel = () => (
  <>
    <SectionBar title="Experience" id="about" />
    {experience.map((role, i) => (
      <Reveal key={`${role.company}-${role.title}`} delay={i * 0.06}>
      <div className="px-5 py-3.5" style={rowBorder}>
        <div className="flex items-baseline justify-between gap-3 mb-1">
          <span className="text-[13px] font-semibold" style={{ color: 'var(--v2-text)' }}>
            {role.title}
          </span>
          <Mono dim className="shrink-0">
            {role.period}
          </Mono>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[12.5px]" style={{ color: 'var(--v2-accent)' }}>
            {role.company}
          </span>
          <Tag>{role.type}</Tag>
        </div>
        <p className="text-[12.5px] leading-relaxed" style={{ color: 'var(--v2-muted)' }}>
          {role.detail}
        </p>
      </div>
      </Reveal>
    ))}
  </>
);

export const StackPanel = () => (
  <>
    <SectionBar title="Stack" id="stack" action={<Mono dim>what I reach for</Mono>} />
    {stack.map((group) => (
      <div key={group.title}>
        <div className="px-5 py-2" style={{ ...rowBorder, backgroundColor: 'rgba(255,255,255,0.015)' }}>
          <Mono>{group.title.toLowerCase()}</Mono>
        </div>
        {group.items.map((item) => (
          <div
            key={item.name}
            className="px-5 py-2 flex flex-col sm:flex-row sm:items-baseline sm:gap-4"
            style={rowBorder}
          >
            <span
              className="text-[12.5px] font-medium sm:w-32 shrink-0"
              style={{ color: 'var(--v2-text)' }}
            >
              {item.name}
            </span>
            <span className="text-[12.5px] leading-relaxed" style={{ color: 'var(--v2-muted)' }}>
              {item.detail}
            </span>
          </div>
        ))}
      </div>
    ))}
  </>
);

export const ProcessPanel = () => (
  <>
    <SectionBar title="How I work" id="process" />
    {process.map((item, i) => (
      <Reveal key={item.step} delay={i * 0.05}>
      <div className="px-5 py-3 flex gap-4" style={rowBorder}>
        <Mono dim className="shrink-0 pt-0.5">
          {item.step}
        </Mono>
        <div className="min-w-0">
          <p className="text-[13px] font-semibold mb-1" style={{ color: 'var(--v2-text)' }}>
            {item.title}
          </p>
          <p className="text-[12.5px] leading-relaxed" style={{ color: 'var(--v2-muted)' }}>
            {item.detail}
          </p>
        </div>
      </div>
      </Reveal>
    ))}
  </>
);

export const ServicesPanel = () => (
  <>
    <SectionBar title="Services" id="services" action={<Mono dim>hire or contract</Mono>} />
    <div className="grid sm:grid-cols-2">
      {services.map((service, i) => (
        <div
          key={service.title}
          className="px-5 py-3"
          style={{
            ...rowBorder,
            borderRight: i % 2 === 0 ? '1px solid var(--v2-line-soft)' : undefined,
          }}
        >
          <p className="text-[12.5px] font-semibold mb-1" style={{ color: 'var(--v2-text)' }}>
            {service.title}
          </p>
          <p className="text-[12px] leading-relaxed" style={{ color: 'var(--v2-muted)' }}>
            {service.detail}
          </p>
        </div>
      ))}
    </div>
  </>
);

export const FaqPanel = () => {
  const [open, setOpen] = useState<number | null>(null);
  const reduced = useReducedMotion();
  return (
    <>
      <SectionBar title="Questions" id="faq" />
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q} style={rowBorder}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center gap-3 px-5 py-2.5 text-left transition-colors hover:bg-white/[0.025]"
            >
              <Plus
                className={`w-3.5 h-3.5 shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}
                style={{ color: isOpen ? 'var(--v2-accent)' : 'var(--v2-dim)' }}
              />
              <span
                className="text-[12.5px] font-medium"
                style={{ color: isOpen ? 'var(--v2-accent)' : 'var(--v2-text)' }}
              >
                {faq.q}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="answer"
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={reduced ? undefined : { height: 'auto', opacity: 1 }}
                  exit={reduced ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  style={{ overflow: 'hidden' }}
                >
                  <p
                    className="text-[12.5px] leading-relaxed px-5 pb-3 pl-[2.9rem]"
                    style={{ color: 'var(--v2-muted)' }}
                  >
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </>
  );
};

export const EducationPanel = () => (
  <>
    <SectionBar title="Education" id="education" />
    <div className="px-5 py-3.5" style={rowBorder}>
      <div className="flex items-baseline justify-between gap-3 mb-1">
        <span className="text-[13px] font-semibold" style={{ color: 'var(--v2-text)' }}>
          {education.degree}
        </span>
        <Mono dim className="shrink-0">
          {education.period}
        </Mono>
      </div>
      <div className="flex items-center gap-2">
        <GraduationCap className="w-3.5 h-3.5" style={{ color: 'var(--v2-dim)' }} />
        <span className="text-[12.5px]" style={{ color: 'var(--v2-muted)' }}>
          {education.institution}
        </span>
        <Tag tone="accent">{education.score}</Tag>
      </div>
    </div>

    {courses.map((course) => (
      <div
        key={course.name}
        className="px-5 py-2 flex items-baseline justify-between gap-3"
        style={rowBorder}
      >
        <span className="text-[12.5px]" style={{ color: 'var(--v2-text)' }}>
          {course.name}
        </span>
        <Mono dim className="shrink-0 truncate">
          {course.issuer}
        </Mono>
      </div>
    ))}
  </>
);
