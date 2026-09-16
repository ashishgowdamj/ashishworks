import React from 'react';

/** Shared section header so every section on the page announces itself the same way. */
export const SectionHeading = ({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) => (
  <div className="mb-12 lg:mb-16 max-w-2xl">
    <div className="flex items-center gap-3 mb-4">
      <span className="text-amber-400 font-mono text-xs">{index}</span>
      <span className="h-px w-8 bg-gray-700" />
      <span className="text-gray-500 text-xs font-semibold tracking-[0.2em] uppercase">
        {label}
      </span>
    </div>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
      {title}
    </h2>
    {description && (
      <p className="text-gray-400 text-base lg:text-lg leading-relaxed">{description}</p>
    )}
  </div>
);

export const Section = ({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`py-20 lg:py-28 bg-[#0b0b0b] ${className}`}>
    <div className="container mx-auto max-w-6xl px-6">{children}</div>
  </section>
);
