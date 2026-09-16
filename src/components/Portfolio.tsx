import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projects, type Project } from '@/lib/projects';

/**
 * Shown instead of a photo when there is no truthful screenshot to display.
 * Deliberately not a stock image — a generic photo of a highway tells a visitor
 * nothing about the system behind it.
 */
const ProjectPlaceholder = ({ project }: { project: Project }) => (
  <div className="relative w-full h-full min-h-[240px] bg-[#111] border border-gray-800 rounded-xl overflow-hidden flex items-center justify-center">
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          'linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    />
    <div className="relative text-center px-6">
      <p className="text-amber-400/90 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
        {project.category}
      </p>
      <p className="text-gray-500 text-sm">Internal product — no public screenshot</p>
    </div>
  </div>
);

const ProjectRow = ({ project, index }: { project: Project; index: number }) => {
  const flipped = index % 2 === 1;

  return (
    <article className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Visual */}
      <div className={flipped ? 'lg:order-2' : ''}>
        {project.image ? (
          <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#111]">
            <img
              src={project.image}
              alt={`${project.title} interface`}
              loading="lazy"
              className="w-full h-auto object-cover object-top"
            />
          </div>
        ) : (
          <ProjectPlaceholder project={project} />
        )}
      </div>

      {/* Story */}
      <div className={flipped ? 'lg:order-1' : ''}>
        <div className="flex items-center gap-3 mb-3 text-xs">
          <span className="text-amber-400 font-semibold tracking-[0.18em] uppercase">
            {project.category}
          </span>
          <span className="text-gray-600">·</span>
          <span className="text-gray-500">{project.year}</span>
        </div>

        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-300 text-base lg:text-lg mb-6 leading-relaxed">{project.tagline}</p>

        {project.metrics && (
          <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-gray-800">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="text-white font-bold text-lg lg:text-xl leading-tight">{m.value}</p>
                <p className="text-gray-500 text-xs mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-4 mb-6">
          <div>
            <p className="text-gray-500 text-xs font-semibold tracking-[0.18em] uppercase mb-2">
              The problem
            </p>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">{project.problem}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-semibold tracking-[0.18em] uppercase mb-2">
              What I built
            </p>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              {project.contribution}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-[#111] text-gray-400 px-3 py-1 rounded-md text-xs border border-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors"
          >
            Visit site
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </article>
  );
};

const Portfolio = () => (
  <section id="portfolio" className="py-20 bg-[#0b0b0b]">
    <div className="container mx-auto max-w-6xl px-6">
      <div className="mb-14 lg:mb-20 max-w-2xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Selected work
        </h2>
        <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
          Production systems I've designed and shipped — real-time tracking, mobile products,
          internal tooling and the platforms underneath them.
        </p>
      </div>

      <div className="space-y-20 lg:space-y-28">
        {projects.map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
