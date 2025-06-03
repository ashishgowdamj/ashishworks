
import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left Section */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-red-500">AG</span>Portfolio
            </div>
            <p className="text-gray-400 max-w-md">
              Passionate UI/UX Designer & Front-End Developer creating exceptional digital experiences.
            </p>
          </div>

          {/* Center Section */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">Let's connect and create something amazing together!</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/ashishgowdamj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-500 transition-colors duration-200"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://linkedin.com/in/ashishgowdamj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-500 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors duration-200 mb-4"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
            <p className="text-gray-500 text-sm">
              © {currentYear} Ashish Gowda M J. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
