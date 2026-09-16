import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Download, Globe, ChevronDown } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import Telemetry from './Telemetry';
import { EASE, fadeUp, stagger, Reveal } from './motion';
import { profile } from '@/lib/content';
import { Mono, SectionBar } from './primitives';

const TopBar = () => (
  <div
    className="flex items-center justify-between px-5 py-3 sticky top-0 z-30 backdrop-blur"
    style={{
      borderBottom: '1px solid var(--v2-line)',
      backgroundColor: 'rgba(12, 12, 15, 0.85)',
    }}
  >
    <div className="flex items-center gap-2.5">
      <span
        className="w-7 h-7 rounded-md flex items-center justify-center text-[11px] font-bold"
        style={{ backgroundColor: 'var(--v2-accent)', color: '#08080A' }}
      >
        AG
      </span>
      <Mono dim>ashishworks</Mono>
    </div>

    <div className="flex items-center gap-3">
      {profile.available && (
        <span className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-70"
              style={{ backgroundColor: 'var(--v2-accent)' }}
            />
            <span
              className="relative inline-flex rounded-full h-1.5 w-1.5"
              style={{ backgroundColor: 'var(--v2-accent)' }}
            />
          </span>
          <Mono>open to work</Mono>
        </span>
      )}
      <a
        href={profile.resumePath}
        download
        className="v2-mono text-[11px] px-2 py-1 rounded transition-colors flex items-center gap-1.5"
        style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'var(--v2-text)' }}
      >
        <Download className="w-3 h-3" />
        CV
      </a>
    </div>
  </div>
);

const HERO_LINES = [
  'I build real-time systems',
  'and the interfaces people',
  'actually run them from.',
];

const Hero = () => {
  const reduced = useReducedMotion();

  return (
    <div className="px-5 pt-10 pb-8 min-h-[78vh] flex flex-col justify-center" id="home">
      <motion.div variants={stagger(0.1, 0.09)} initial="hidden" animate="show">
        <motion.p
          variants={fadeUp}
          className="text-[13px] mb-5"
          style={{ color: 'var(--v2-muted)' }}
        >
          Hi, I'm Ashish Gowda M J
        </motion.p>

        {/* Each line clips up from behind its own mask on load. */}
        <h1
          className="text-[23px] xs:text-[26px] sm:text-[42px] font-bold leading-[1.18] tracking-tight mb-6"
          style={{ color: 'var(--v2-text)' }}
        >
          {HERO_LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduced ? undefined : { y: '110%' }}
                animate={reduced ? undefined : { y: '0%' }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.15 + i * 0.09 }}
              >
                {i === 0 ? (
                  <>
                    I build{' '}
                    <span
                      className="underline decoration-2 underline-offset-[6px]"
                      style={{ textDecorationColor: 'var(--v2-accent)' }}
                    >
                      real-time systems
                    </span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          variants={fadeUp}
          className="text-[13.5px] leading-relaxed mb-6 max-w-[54ch]"
          style={{ color: 'var(--v2-muted)' }}
        >
          A console tracking thousands of vehicles as they move. A mobile app and the admin portal
          that feeds it. Tooling that lets a QA team reproduce a GPS bug at a desk instead of on a
          road. Most of it lives behind a login.
        </motion.p>

        <motion.div variants={fadeUp} className="mb-6">
          <Telemetry />
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
          <span
            className="flex items-center gap-1.5 px-2 py-1 rounded"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
          >
            <MapPin className="w-3 h-3" style={{ color: 'var(--v2-dim)' }} />
            <Mono>{profile.location}</Mono>
          </span>
          <a
            href={profile.agency}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2 py-1 rounded transition-colors hover:bg-white/[0.07]"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
          >
            <Globe className="w-3 h-3" style={{ color: 'var(--v2-accent)' }} />
            <Mono>vortex lane</Mono>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="mt-10 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <motion.span
          animate={reduced ? undefined : { y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex"
        >
          <ChevronDown className="w-3.5 h-3.5" style={{ color: 'var(--v2-dim)' }} />
        </motion.span>
        <Mono dim>scroll for the work</Mono>
      </motion.div>
    </div>
  );
};

const LINKS = [
  { Icon: Github, name: 'GitHub', handle: '@ashishgowdamj', href: profile.github },
  { Icon: Linkedin, name: 'LinkedIn', handle: '/in/ashishgowdamj', href: profile.linkedin },
  { Icon: Mail, name: 'Email', handle: profile.email, href: `mailto:${profile.email}` },
  { Icon: Phone, name: 'Phone', handle: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
];

const Links = () => (
  <>
    <SectionBar title="Links" id="links" />
    <div className="grid sm:grid-cols-2">
      {LINKS.map(({ Icon, name, handle, href }, i) => (
        <Reveal key={name} delay={i * 0.05}>
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-5 py-3 transition-colors hover:bg-white/[0.025]"
          style={{
            borderBottom: '1px solid var(--v2-line-soft)',
            borderRight: i % 2 === 0 ? '1px solid var(--v2-line-soft)' : undefined,
          }}
        >
          <Icon className="w-4 h-4 shrink-0" style={{ color: 'var(--v2-muted)' }} />
          <span className="min-w-0 flex-1">
            <span className="block text-[13px] font-medium" style={{ color: 'var(--v2-text)' }}>
              {name}
            </span>
            <Mono dim className="block truncate">
              {handle}
            </Mono>
          </span>
          <ArrowUpRight
            className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: 'var(--v2-accent)' }}
          />
        </a>
        </Reveal>
      ))}
    </div>
  </>
);

export { TopBar, Hero, Links };
