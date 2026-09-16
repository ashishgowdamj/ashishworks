import React from 'react';

/**
 * The page is one narrow column on a dotted field. Everything below composes
 * inside it — no full-bleed sections, no cards floating in space.
 */
export const Column = ({ children }: { children: React.ReactNode }) => (
  <div className="v2-field min-h-screen w-full flex justify-center">
    <div className="v2-column w-full max-w-[720px]">{children}</div>
  </div>
);

/** A labelled strip that opens each section, flush to the column edges. */
export const SectionBar = ({
  title,
  action,
  id,
}: {
  title: string;
  action?: React.ReactNode;
  id?: string;
}) => (
  <div
    id={id}
    className="flex items-center justify-between px-5 py-2.5 scroll-mt-16"
    style={{
      backgroundColor: 'var(--v2-panel-raised)',
      borderTop: '1px solid var(--v2-line)',
      borderBottom: '1px solid var(--v2-line)',
    }}
  >
    <h2 className="text-[13px] font-semibold tracking-tight" style={{ color: 'var(--v2-text)' }}>
      {title}
    </h2>
    {action}
  </div>
);

/** Small monospace metadata. Used for handles, years, categories, counts. */
export const Mono = ({
  children,
  className = '',
  dim,
}: {
  children: React.ReactNode;
  className?: string;
  dim?: boolean;
}) => (
  <span
    className={`v2-mono text-[11px] ${className}`}
    style={{ color: dim ? 'var(--v2-dim)' : 'var(--v2-muted)' }}
  >
    {children}
  </span>
);

type TagTone = 'accent' | 'neutral' | 'warn' | 'info';

const TAG_TONES: Record<TagTone, { bg: string; fg: string }> = {
  accent: { bg: 'rgba(74, 222, 128, 0.12)', fg: '#4ADE80' },
  info: { bg: 'rgba(96, 165, 250, 0.12)', fg: '#60A5FA' },
  warn: { bg: 'rgba(251, 191, 36, 0.12)', fg: '#FBBF24' },
  neutral: { bg: 'rgba(255, 255, 255, 0.06)', fg: '#8C8C97' },
};

export const Tag = ({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: TagTone }) => {
  const { bg, fg } = TAG_TONES[tone];
  return (
    <span
      className="v2-mono text-[10px] px-1.5 py-0.5 rounded shrink-0"
      style={{ backgroundColor: bg, color: fg }}
    >
      {children}
    </span>
  );
};

/** A dense list row — the main unit of this layout. */
export const Row = ({
  children,
  onClick,
  href,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}) => {
  const className =
    'w-full text-left px-5 py-3 transition-colors hover:bg-white/[0.025] focus:outline-none focus-visible:bg-white/[0.04]';

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`block ${className}`}>
        {children}
      </a>
    );
  }
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {children}
      </button>
    );
  }
  return <div className={className}>{children}</div>;
};

/** Body copy inside the column. */
export const Prose = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[13.5px] leading-relaxed" style={{ color: 'var(--v2-muted)' }}>
    {children}
  </p>
);
