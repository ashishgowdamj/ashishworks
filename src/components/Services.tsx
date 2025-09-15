
import React from 'react';
import { Code2, Smartphone, Briefcase } from 'lucide-react';

const Services = () => {
  const handleGetStartedClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-20 bg-[#0b0b0b]">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">Services</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-base lg:text-lg">
            Practical builds with a focus on speed, usability, and real‑world outcomes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[{
            Icon: Code2,
            title: 'Front‑End Web Development',
            blurb: 'Responsive, performant React + Next.js apps with clean UI.',
            bullets: ['Semantic HTML, modern CSS', 'Cross‑browser compatibility', 'Performance optimization'],
            foot: 'APIs: Firebase, Node.js',
          }, {
            Icon: Smartphone,
            title: 'Mobile App Development',
            blurb: 'Cross‑platform apps with smooth UX and real‑time data.',
            bullets: ['React Native', 'Flutter (iOS + Android)', 'Firebase realtime & auth'],
            foot: 'Deploy: Play Store, side‑load',
          }, {
            Icon: Briefcase,
            title: 'Portfolio & Business Sites',
            blurb: 'Professional sites that reflect your brand and goals.',
            bullets: ['Clean UI, responsive layout', 'Custom landing & brand pages', 'Simple CMS & forms'],
            foot: 'Hosting: Vercel / Firebase',
          }].map(({ Icon, title, blurb, bullets, foot }) => (
            <div key={title} className="rounded-2xl border border-gray-800 bg-gray-800/40 p-6 hover:bg-gray-800/60 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-white text-lg font-semibold">{title}</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">{blurb}</p>
              <ul className="space-y-2 mb-4">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-gray-200 text-sm">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="text-xs text-gray-400">{foot}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={handleGetStartedClick}
            className="inline-flex items-center justify-center bg-amber-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-amber-300 transition-colors"
          >
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
