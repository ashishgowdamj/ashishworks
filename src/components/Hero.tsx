
import React from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <p className="text-red-500 text-lg font-medium animate-fade-in">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in">
              Ashish Gowda M J
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 animate-fade-in">
              UI/UX Designer & 
              <span className="text-red-500"> Front-End Developer</span>
            </h2>
          </div>
          
          <p className="text-gray-400 text-lg max-w-2xl animate-fade-in">
            A passionate designer and developer with a keen eye for detail and user-centered design. 
            Currently pursuing BCA at RNS First Grade College, dedicated to creating wonderful digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-all duration-200 flex items-center justify-center gap-2 hover-scale"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-gray-600 text-white px-8 py-4 rounded-lg hover:border-red-500 hover:text-red-500 transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start animate-fade-in">
            <a
              href="https://github.com/ashishgowdamj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-500 transition-colors duration-200"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://linkedin.com/in/ashishgowdamj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-500 transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-red-500 to-pink-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-6xl lg:text-8xl font-bold text-white">AG</span>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center animate-pulse">
              <span className="text-white font-bold">UI</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center animate-pulse">
              <span className="text-white font-bold">UX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
