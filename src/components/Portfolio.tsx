import React from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: "Dhanvith Ventures",
      description: "Professional business website built with Wix, featuring modern design, business services showcase, and client engagement features.",
      tech: ["Wix", "Web Design", "Business Website", "Responsive Design"],
      category: "Web Development",
      image: "🏢",
      features: ["Business Showcase", "Professional Design", "Client Engagement"],
      link: "https://www.dhanvith-ventures.com"
    },
    {
      title: "Interactive Learning Platform",
      description: "A comprehensive React.js web application featuring interactive quizzes, progress tracking, and personalized learning paths.",
      tech: ["React.js", "JavaScript", "CSS3", "Local Storage"],
      category: "Web Development",
      image: "🎓",
      features: ["Interactive Quizzes", "Progress Tracking", "Responsive Design"],
      link: "https://interactive-learning-platform-nu.vercel.app/"
    },
    {
      title: "Travel App Design",
      description: "Modern travel application UI/UX design created in Figma, featuring intuitive navigation and beautiful visuals.",
      tech: ["Figma", "UI/UX Design", "Prototyping", "Mobile Design"],
      category: "UI/UX Design",
      image: "✈️",
      features: ["Modern UI", "Travel Planning", "Mobile-First Design"],
      link: "https://www.figma.com/design/ObzfpjbvxVphl9vPVGiO1O/Travel-App?node-id=0-1&t=1rXRhTZP9NvcYyTq-1"
    },
    {
      title: "GPS Simulator App",
      description: "Native Android application with advanced GPS functionality, location spoofing capabilities, and real-time location sharing.",
      tech: ["Android Studio", "Java", "GPS API", "SQLite"],
      category: "Mobile Development",
      image: "📍",
      features: ["Real-time Tracking", "Location Sharing", "GPS Spoofing"]
    },
    {
      title: "Netflix Static Clone",
      description: "Pixel-perfect recreation of Netflix's landing page with responsive design and modern CSS techniques.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      category: "UI Development",
      image: "🎬",
      features: ["Responsive Layout", "Modern CSS", "Interactive Elements"],
      link: "https://netflix-clone-beta-snowy-67.vercel.app"
    },
    {
      title: "Facebook Clone",
      description: "Social media platform clone with modern design, user interactions, and responsive layout.",
      tech: ["React.js", "CSS3", "JavaScript", "Responsive Design"],
      category: "Web Development",
      image: "📘",
      features: ["Social Interface", "Modern Design", "User Interactions"],
      link: "https://face-book-clone-zzpx.vercel.app"
    },
    {
      title: "Rock Paper Scissors Game",
      description: "Enhanced user interface for the classic game with smooth animations and intuitive user experience.",
      tech: ["JavaScript", "CSS3", "HTML5", "Animations"],
      category: "UI/UX Design",
      image: "🎮",
      features: ["Smooth Animations", "Enhanced UX", "Score Tracking"],
      link: "https://rock-paper-scissors-iota-green.vercel.app"
    }
  ];

  const handleProjectClick = (link?: string) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/ashishgowdamj', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header with Staggered Animation */}
        <div className="text-center mb-12 space-y-4">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              My Portfolio
            </h2>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A showcase of my recent projects demonstrating skills in UI/UX design, 
              front-end development, and full-stack applications.
            </p>
          </div>
        </div>

        {/* Enhanced Grid with Staggered Card Animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 hover:border-blue-500/30 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Project Image/Icon with Enhanced Animation */}
              <div className="relative bg-gradient-to-br from-blue-500 to-cyan-600 h-28 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <span className="text-4xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">{project.image}</span>
              </div>

              {/* Project Content with Enhanced Spacing */}
              <div className="p-5 relative">
                {/* Category Badge with Animation */}
                <div className="mb-3">
                  <span className="inline-block bg-blue-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium transform group-hover:scale-105 transition-transform duration-200">
                    {project.category}
                  </span>
                </div>

                {/* Title with Hover Effect */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Description with Line Clamp */}
                <p className="text-gray-300 mb-3 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Technologies with Enhanced Styling */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-900/50 backdrop-blur-sm text-blue-400 px-2 py-1 rounded text-xs border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1 opacity-70">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleProjectClick(project.link)}
                    disabled={!project.link}
                    className={`group/btn flex-1 py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm relative overflow-hidden ${
                      project.link 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer' 
                        : 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {project.link && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>
                    )}
                    <ExternalLink className={`w-3 h-3 ${project.link ? 'group-hover/btn:rotate-12' : ''} transition-transform duration-200`} />
                    <span className="relative z-10">{project.link ? 'View' : 'Soon'}</span>
                  </button>
                  
                  <button 
                    onClick={handleLinkedInClick}
                    className="group/github bg-gray-700/50 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-blue-500/80 hover:scale-110 transition-all duration-300 relative overflow-hidden border border-gray-600/30 hover:border-blue-500/50"
                    title="View on GitHub"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover/github:opacity-100 transition-opacity duration-300"></div>
                    <Github className="w-4 h-4 relative z-10 group-hover/github:rotate-12 transition-transform duration-200" />
                  </button>
                </div>
              </div>

              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto border border-gray-700/30 group hover:border-blue-500/30 transition-all duration-500">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                Interested in Working Together?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                I'm always excited to take on new challenges and create amazing digital experiences.
              </p>
              
              <Link 
                to="/contact"
                className="group/cta bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center gap-3 mx-auto hover:scale-105 transform shadow-lg hover:shadow-blue-500/25 relative overflow-hidden w-fit"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover/cta:translate-x-[200%] transition-transform duration-700"></div>
                <span className="font-semibold relative z-10">Start a Project</span>
                <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 group-hover/cta:scale-110 transition-all duration-300 relative z-10" />
              </Link>
            </div>

            {/* Floating Particles Effect */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-blue-500/50 rounded-full animate-pulse"></div>
            <div className="absolute top-8 right-8 w-1 h-1 bg-cyan-500/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-teal-500/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
