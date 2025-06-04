
import React from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
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
    <section id="portfolio" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent projects demonstrating skills in UI/UX design, 
            front-end development, and full-stack applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              {/* Project Image/Icon */}
              <div className="bg-gradient-to-br from-red-500 to-pink-600 h-32 flex items-center justify-center">
                <span className="text-5xl">{project.image}</span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">{project.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-900 text-red-400 px-2 py-1 rounded text-xs border border-gray-700"
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

                {/* Project Links */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleProjectClick(project.link)}
                    disabled={!project.link}
                    className={`flex-1 py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm ${
                      project.link 
                        ? 'bg-red-500 text-white hover:bg-red-600 cursor-pointer' 
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>{project.link ? 'View' : 'Soon'}</span>
                  </button>
                  <button 
                    onClick={handleLinkedInClick}
                    className="bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                    title="View on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gray-800 p-6 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">Interested in Working Together?</h3>
            <p className="text-gray-300 mb-4 text-sm">
              I'm always excited to take on new challenges and create amazing digital experiences.
            </p>
            <button 
              onClick={handleStartProjectClick}
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all duration-200 flex items-center gap-2 mx-auto hover:scale-105 transform shadow-lg hover:shadow-xl"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
