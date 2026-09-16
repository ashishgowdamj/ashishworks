import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/content';
import { Section, SectionHeading } from './SectionHeading';

const ServicesGrid = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="services">
      <SectionHeading
        index="06"
        label="Services"
        title="What I can build for you"
        description="Whether that's as a hire or on a project. If it isn't listed, ask — the answer is usually yes or a straight no."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <div
            key={service.title}
            className="border border-gray-800 rounded-xl p-6 bg-[#101010] hover:border-amber-400/40 transition-colors group"
          >
            <h3 className="text-white font-bold text-lg mb-3 group-hover:text-amber-400 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{service.detail}</p>
          </div>
        ))}

        <button
          onClick={scrollToContact}
          className="border border-amber-400/40 rounded-xl p-6 bg-amber-400/5 text-left hover:bg-amber-400/10 transition-colors group"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-amber-400 font-bold text-lg">Something else</h3>
            <ArrowUpRight className="w-5 h-5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Tell me what you're trying to build and I'll tell you whether I'm the right person for it.
          </p>
        </button>
      </div>
    </Section>
  );
};

export default ServicesGrid;
