import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const WIDTH = 360;
const HEIGHT = 56;

/** Deterministic pseudo-random so the trace is identical on every render. */
const seeded = (i: number) => {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

/**
 * A live signal trace — the site's one continuously moving element.
 * It's not decoration for its own sake: real-time telemetry is what Ashish
 * actually builds, so the hero shows the thing rather than describing it.
 */
const Telemetry = () => {
  const reduced = useReducedMotion();

  const path = useMemo(() => {
    const points: string[] = [];
    const steps = 48;
    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * WIDTH;
      const base = Math.sin(i * 0.45) * 9;
      const jitter = (seeded(i) - 0.5) * 12;
      const spike = i % 17 === 0 ? -14 : 0;
      const y = HEIGHT / 2 + base + jitter + spike;
      points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return points.join(' ');
  }, []);

  return (
    <div
      className="relative overflow-hidden rounded-md"
      style={{
        border: '1px solid var(--v2-line)',
        backgroundColor: 'rgba(255,255,255,0.015)',
      }}
      aria-hidden
    >
      <div className="flex items-center justify-between px-3 pt-2">
        <span className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            {!reduced && (
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-70"
                style={{ backgroundColor: 'var(--v2-accent)' }}
              />
            )}
            <span
              className="relative inline-flex rounded-full h-1.5 w-1.5"
              style={{ backgroundColor: 'var(--v2-accent)' }}
            />
          </span>
          <span className="v2-mono text-[9px]" style={{ color: 'var(--v2-accent)' }}>
            LIVE FEED
          </span>
        </span>
        <span className="v2-mono text-[9px]" style={{ color: 'var(--v2-dim)' }}>
          2,000+ assets · &lt;200ms
        </span>
      </div>

      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full"
        style={{ height: HEIGHT }}
        preserveAspectRatio="none"
      >
        {/* Two copies side by side, translated continuously, so the trace never ends. */}
        <motion.g
          animate={reduced ? undefined : { x: [0, -WIDTH] }}
          transition={{ duration: 7, ease: 'linear', repeat: Infinity }}
        >
          <polyline
            points={path}
            fill="none"
            stroke="var(--v2-accent)"
            strokeOpacity="0.9"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <polyline
            points={path}
            fill="none"
            stroke="var(--v2-accent)"
            strokeOpacity="0.9"
            strokeWidth="1.5"
            strokeLinejoin="round"
            transform={`translate(${WIDTH - 0.001}, 0)`}
          />
        </motion.g>
      </svg>

      {/* Static edge fades so the trace appears to emerge and disappear. */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16"
        style={{ background: 'linear-gradient(to right, var(--v2-panel), transparent)' }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-10"
        style={{ background: 'linear-gradient(to left, var(--v2-panel), transparent)' }}
      />
    </div>
  );
};

export default Telemetry;
