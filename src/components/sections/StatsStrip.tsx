import React from 'react';
import { quickStats } from '@/lib/content';

const StatsStrip = () => (
  <section className="bg-[#0b0b0b] border-y border-gray-800">
    <div className="container mx-auto max-w-6xl px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-800">
        {quickStats.map((stat, i) => (
          <div
            key={stat.label}
            className={`min-w-0 py-8 lg:py-10 px-4 lg:px-6 ${i === 0 ? 'pl-0' : ''}`}
          >
            <p className="text-white text-xl sm:text-2xl lg:text-4xl font-bold leading-tight mb-2 break-words">
              {stat.value}
            </p>
            <p className="text-gray-500 text-xs lg:text-sm break-words">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsStrip;
