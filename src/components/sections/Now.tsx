import React from 'react';
import { now } from '@/lib/content';
import { Section, SectionHeading } from './SectionHeading';

const Now = () => (
  <Section id="now">
    <SectionHeading
      index="01"
      label="Currently"
      title="What I'm working on now"
      description="Updated when it changes, so you know this page isn't three years stale."
    />

    <div className="grid md:grid-cols-3 gap-6">
      {now.items.map((item) => (
        <div
          key={item.title}
          className="border border-gray-800 rounded-xl p-6 bg-[#101010] hover:border-amber-400/40 transition-colors"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
            </span>
            <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
              Active
            </span>
          </div>
          <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
        </div>
      ))}
    </div>

    <p className="text-gray-600 text-xs mt-8">Last updated {now.updated}</p>
  </Section>
);

export default Now;
