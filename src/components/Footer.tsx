
import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0b0b] border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left Section */}
          <div>
            <div className="text-2xl font-bold text-white mb-1">
              Ashish Gowda M J
            </div>
            <p className="text-gray-400 max-w-md">
              Front–End Developer & UX/UI Designer
            </p>
            <div className="mt-2 space-y-1">
              <a href="mailto:ashishgowdamj@gmail.com" className="block text-gray-300 hover:text-amber-400 text-sm">
                ashishgowdamj@gmail.com
              </a>
              <a href="tel:+916362032496" className="block text-gray-300 hover:text-amber-400 text-sm">
                +91 63620 32496
              </a>
            </div>
          </div>

          {/* Center Section */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">Let's connect and create something amazing together!</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/ashishgowdamj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 border border-gray-800 rounded-lg flex items-center justify-center hover:border-amber-400 transition-colors"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://linkedin.com/in/ashishgowdamj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 border border-gray-800 rounded-lg flex items-center justify-center hover:border-amber-400 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-4"
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
