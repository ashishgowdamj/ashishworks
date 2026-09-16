import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { faqs } from '@/lib/content';
import { Section, SectionHeading } from './SectionHeading';

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionHeading
        index="07"
        label="Questions"
        title="The things people ask"
        description="Answered the way I'd answer them in a call."
      />

      <div className="border-t border-gray-800">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.q} className="border-b border-gray-800">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-start justify-between gap-6 py-6 text-left group"
              >
                <span
                  className={`font-semibold text-base lg:text-lg transition-colors ${
                    isOpen ? 'text-amber-400' : 'text-white group-hover:text-amber-400'
                  }`}
                >
                  {faq.q}
                </span>
                <Plus
                  className={`w-5 h-5 shrink-0 mt-0.5 transition-transform duration-200 ${
                    isOpen ? 'rotate-45 text-amber-400' : 'text-gray-500'
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-200 ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-400 leading-relaxed pb-6 max-w-3xl">{faq.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default FAQ;
