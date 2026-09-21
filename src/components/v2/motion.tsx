import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion';

/** Standard easing for the whole site, so nothing feels out of family. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export const stagger = (delay = 0, gap = 0.06): Variants => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren: gap } },
});

/**
 * Reveals children once when scrolled into view. Motion is the polish, never the
 * gate: with reduced motion (or no JS animation) the content is simply visible.
 */
export const Reveal = ({
  children,
  delay = 0,
  className,
  as = 'div',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section';
}) => {
  const reduced = useReducedMotion();
  const Comp = as === 'section' ? motion.section : motion.div;

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </Comp>
  );
};

/**
 * Counts up to a number when it scrolls into view. Accepts the display string
 * (e.g. "2,000+", "<200ms") and animates only the numeric part, so prefixes,
 * separators and suffixes survive untouched.
 */
export const CountUp = ({ value, className }: { value: string; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : value.replace(/[\d,]+/, '0'));

  const match = value.match(/[\d,]+/);

  useEffect(() => {
    if (reduced || !inView || !match) {
      setDisplay(value);
      return;
    }
    const target = Number(match[0].replace(/,/g, ''));
    if (!Number.isFinite(target) || target === 0) {
      setDisplay(value);
      return;
    }

    const duration = 900;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out so it decelerates into the final number
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(target * eased);
      setDisplay(value.replace(/[\d,]+/, current.toLocaleString('en-IN')));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, value, match]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};
