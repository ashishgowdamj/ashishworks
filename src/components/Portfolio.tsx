import React from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/projects';

const Portfolio = () => {
  const handleProjectClick = (link?: string) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/ashishgowdamj', '_blank', 'noopener,noreferrer');
  };

  const handleStartProjectClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="portfolio" className="py-16 bg-[#0b0b0b]">
      <div className="container mx-auto px-6">
        {/* Enhanced Header with Staggered Animation */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A concise set of projects across design and front‑end.
          </p>
        </div>

        {/* Enhanced Grid with Staggered Card Animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-800 hover:border-amber-400/60 transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              </div>

              <div className="p-6 relative">
                <div className="mb-3">
                  <span className="inline-block bg-amber-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-3 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-900 text-amber-300 px-2 py-1 rounded text-xs border border-gray-800 hover:border-amber-400/60 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => handleProjectClick(project.link)}
                    disabled={!project.link}
                    className={`flex-1 py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm ${
                      project.link 
                        ? 'bg-amber-400 text-black font-semibold hover:bg-amber-300 cursor-pointer' 
                        : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span className="relative z-10">{project.link ? 'View' : 'Soon'}</span>
                  </button>
                  
                  <button 
                    onClick={handleLinkedInClick}
                    className="bg-gray-800 text-white p-2 rounded-lg hover:border-amber-400 transition-colors border border-gray-800"
                    title="View on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="p-8 rounded-2xl max-w-2xl mx-auto border border-gray-800 bg-gray-800/40">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-3">
                Interested in Working Together?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm open for freelance and collaborations.
              </p>
              
              <button 
                onClick={handleStartProjectClick}
                className="bg-amber-400 text-black font-semibold px-8 py-3 rounded-xl hover:bg-amber-300 transition-colors flex items-center gap-3 mx-auto"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
