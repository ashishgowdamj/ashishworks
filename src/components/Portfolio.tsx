
import React from 'react';
import { ArrowRight, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Interactive Learning Platform",
      description: "A comprehensive React.js web application featuring interactive quizzes, progress tracking, and personalized learning paths for enhanced educational experiences.",
      tech: ["React.js", "JavaScript", "CSS3", "Local Storage"],
      category: "Web Development",
      image: "🎓",
      features: ["Interactive Quizzes", "Progress Tracking", "Responsive Design"],
      link: "https://interactive-learning-platform-nu.vercel.app"
    },
    {
      title: "Book Reading Tracker",
      description: "Full-stack web application built with Flask and SQLite for managing personal reading habits, tracking progress, and organizing book collections.",
      tech: ["Flask", "SQLite", "Python", "HTML/CSS"],
      category: "Full Stack",
      image: "📚",
      features: ["Reading Progress", "Book Management", "Statistics Dashboard"]
    },
    {
      title: "GPS Tracker App",
      description: "Native Android application with advanced GPS functionality, location spoofing capabilities, and real-time location sharing features.",
      tech: ["Android Studio", "Java", "GPS API", "SQLite"],
      category: "Mobile Development",
      image: "📍",
      features: ["Real-time Tracking", "Location Sharing", "GPS Spoofing"]
    },
    {
      title: "Netflix Static Clone",
      description: "Pixel-perfect recreation of Netflix's landing page with responsive design, focusing on modern CSS techniques and user interface replication.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      category: "UI Development",
      image: "🎬",
      features: ["Responsive Layout", "Modern CSS", "Interactive Elements"],
      link: "https://netflix-clone-beta-snowy-67.vercel.app"
    },
    {
      title: "Rock Paper Scissors Game",
      description: "Enhanced user interface for the classic game with improved engagement, smooth animations, and intuitive user experience design.",
      tech: ["JavaScript", "CSS3", "HTML5", "Animations"],
      category: "UI/UX Design",
      image: "🎮",
      features: ["Smooth Animations", "Enhanced UX", "Score Tracking"],
      link: "https://rock-paper-scissors-iota-green.vercel.app"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My Portfolio</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of my recent projects demonstrating my skills in UI/UX design, 
            front-end development, and full-stack applications. Each project represents 
            a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              {/* Project Image/Icon */}
              <div className="bg-gradient-to-br from-red-500 to-pink-600 h-48 flex items-center justify-center">
                <span className="text-8xl">{project.image}</span>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="mb-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-900 text-red-400 px-3 py-1 rounded-lg text-sm border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center justify-center gap-2">
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-600 transition-colors duration-200">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in Working Together?</h3>
            <p className="text-gray-300 mb-6">
              I'm always excited to take on new challenges and create amazing digital experiences.
            </p>
            <button className="bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center gap-2 mx-auto">
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
