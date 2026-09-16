import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Download, Globe } from 'lucide-react';
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

const Hero = () => (
  <div className="px-5 py-8" id="home">
    <p className="text-[13px] mb-4" style={{ color: 'var(--v2-muted)' }}>
      Hi, I'm Ashish Gowda M J
    </p>

    <h1
      className="text-[26px] sm:text-[30px] font-bold leading-[1.25] tracking-tight mb-4"
      style={{ color: 'var(--v2-text)' }}
    >
      I build{' '}
      <span
        className="underline decoration-2 underline-offset-4"
        style={{ textDecorationColor: 'var(--v2-accent)' }}
      >
        real-time systems
      </span>{' '}
      and the interfaces people actually run them from.
    </h1>

    <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: 'var(--v2-muted)' }}>
      A console tracking thousands of vehicles as they move. A mobile app and the admin portal
      that feeds it. Tooling that lets a QA team reproduce a GPS bug at a desk instead of on a
      road. Most of it lives behind a login.
    </p>

    <div className="flex flex-wrap items-center gap-2">
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
    </div>
  </div>
);

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
        <a
          key={name}
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
      ))}
    </div>
  </>
);

export { TopBar, Hero, Links };
