
import React from 'react';
import { ArrowRight, Github, Linkedin, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full text-sm text-gray-300 animate-fade-in">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Available for work
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-red-500 text-lg font-medium tracking-wide animate-fade-in">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Ashish Gowda M J
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold animate-fade-in">
                <span className="text-gray-300">UI/UX Designer &</span>
                <br />
                <span className="bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                  Front-End Developer
                </span>
              </h2>
            </div>
          </div>
          
          <p className="text-gray-400 text-lg lg:text-xl max-w-2xl leading-relaxed animate-fade-in">
            Crafting exceptional digital experiences with a passion for user-centered design and modern development practices. 
            Currently pursuing BCA at RNS First Grade College.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-xl hover:from-red-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 shadow-lg hover:shadow-red-500/25"
            >
              <span className="font-semibold">View My Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <div className="flex gap-3">
              <button
                onClick={() => scrollToSection('contact')}
                className="flex-1 sm:flex-none border border-gray-600/50 text-white px-6 py-4 rounded-xl hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </button>
              
              <button className="border border-gray-600/50 text-white px-4 py-4 rounded-xl hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start animate-fade-in">
            <a
              href="https://github.com/ashishgowdamj"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl flex items-center justify-center hover:bg-red-500/90 hover:border-red-500/50 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/ashishgowdamj"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl flex items-center justify-center hover:bg-red-500/90 hover:border-red-500/50 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Right Content - Enhanced Profile Section */}
        <div className="flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            {/* Main Profile Container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 blur-sm opacity-75 animate-pulse"></div>
              
              {/* Main Profile Ring */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-red-500 via-pink-600 to-purple-700 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden border-4 border-gray-900/50">
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-full flex items-center justify-center relative">
                    <span className="text-6xl lg:text-8xl font-bold bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">AG</span>
                    
                    {/* Inner decorative elements */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/10 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-300 shadow-lg">
              <span className="text-white font-bold text-sm">UI/UX</span>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center -rotate-12 hover:rotate-0 transition-transform duration-300 shadow-lg">
              <span className="text-white font-bold text-sm">DEV</span>
            </div>

            <div className="absolute top-1/2 -right-12 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center rotate-45 hover:rotate-12 transition-transform duration-300 shadow-lg opacity-80">
              <span className="text-white font-bold text-xs -rotate-45">JS</span>
            </div>

            <div className="absolute top-1/4 -left-10 w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg opacity-80">
              <span className="text-white font-bold text-xs">CSS</span>
            </div>

            {/* Orbital rings */}
            <div className="absolute inset-[-20px] border border-gray-700/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute inset-[-40px] border border-gray-600/20 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
