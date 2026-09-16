import React from 'react';
import { stack } from '@/lib/content';
import { Section, SectionHeading } from './SectionHeading';

const Stack = () => (
  <Section id="stack">
    <SectionHeading
      index="04"
      label="Stack"
      title="What I build with, and why"
      description="A list of logos tells you nothing. These are the tools I actually reach for, with the reason attached."
    />

    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
      {stack.map((group) => (
        <div key={group.title} className="border border-gray-800 rounded-xl p-6 lg:p-8 bg-[#101010]">
          <h3 className="text-white font-bold text-xl mb-1">{group.title}</h3>
          <p className="text-gray-500 text-sm mb-6">{group.note}</p>

          <ul className="space-y-4">
            {group.items.map((item) => (
              <li key={item.name} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="text-amber-400 font-medium text-sm sm:w-40 shrink-0">
                  {item.name}
                </span>
                <span className="text-gray-400 text-sm leading-relaxed">{item.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export default Stack;
