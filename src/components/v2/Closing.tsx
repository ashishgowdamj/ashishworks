import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { profile } from '@/lib/content';
import { Mono, SectionBar } from './primitives';

export const ContactPanel = () => (
  <>
    <SectionBar title="Contact" id="contact" />
    <div className="px-5 py-6">
      <h3 className="text-[18px] font-bold mb-2 tracking-tight" style={{ color: 'var(--v2-text)' }}>
        Got something that needs building?
      </h3>
      <p className="text-[13px] leading-relaxed mb-5" style={{ color: 'var(--v2-muted)' }}>
        Full-time roles, contract work, or a second opinion on something you're stuck on — all
        fine. I'll give you a straight answer on whether I'm the right person for it.
      </p>

      <div className="flex flex-wrap gap-2">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 px-3 py-2 rounded text-[12.5px] font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: 'var(--v2-accent)', color: '#08080A' }}
        >
          <Mail className="w-3.5 h-3.5" />
          {profile.email}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 rounded text-[12.5px] font-medium transition-colors hover:bg-white/[0.08]"
          style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--v2-text)' }}
        >
          LinkedIn
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  </>
);

export const FooterBar = () => (
  <div
    id="footer"
    className="px-5 py-4 flex flex-wrap items-center justify-between gap-2"
    style={{ borderTop: '1px solid var(--v2-line)' }}
  >
    <Mono dim>© {new Date().getFullYear()} Ashish Gowda M J</Mono>
    <Mono dim>Bengaluru, India</Mono>
  </div>
);
