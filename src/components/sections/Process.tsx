import React from 'react';
import { process } from '@/lib/content';
import { Section, SectionHeading } from './SectionHeading';

const Process = () => (
  <Section id="process">
    <SectionHeading
      index="05"
      label="How I work"
      title="Ship small, ship often, watch what happens"
      description="The same five steps whether it's a client build or an internal tool. Most of the value is in steps one and two."
    />

    <div className="relative">
      {/* Spine that the steps hang from on desktop. */}
      <div className="hidden lg:block absolute left-[7.5rem] top-2 bottom-2 w-px bg-gray-800" />

      <div className="space-y-8 lg:space-y-10">
        {process.map((item) => (
          <div key={item.step} className="lg:grid lg:grid-cols-[7.5rem_1fr] lg:gap-10">
            <div className="flex items-center gap-3 mb-3 lg:mb-0 lg:justify-end lg:pr-8 relative">
              <span className="text-amber-400 font-mono text-sm">{item.step}</span>
              <span className="hidden lg:block absolute right-0 translate-x-1/2 w-2 h-2 rounded-full bg-amber-400 ring-4 ring-[#0b0b0b]" />
            </div>
            <div className="lg:pt-0">
              <h3 className="text-white font-bold text-lg lg:text-xl mb-2">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-2xl">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Process;
