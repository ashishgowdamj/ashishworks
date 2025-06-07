
import React from 'react';
import { ArrowRight, Github, Linkedin, Download, Mail, Code, Palette, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const resumeContent = `
ASHISH GOWDA M J
UI/UX Designer & Front-End Developer

Contact:
Email: ashishgowdamj@gmail.com
Phone: +91 6362032496
Location: Karnataka, India
LinkedIn: https://linkedin.com/in/ashishgowdamj
GitHub: https://github.com/ashishgowdamj

Education:
BCA Graduate

Skills:
- UI/UX Design
- React.js Development
- Front-End Development
- Modern CSS & JavaScript
- Responsive Web Design
- Figma & Design Tools

Experience:
Passionate about creating exceptional digital experiences with user-centered design and modern development practices.
    `.trim();

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ashish_Gowda_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden px-4 py-8">
      {/* Enhanced Background with Mesh Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-teal-500/5"></div>
        <div className="absolute top-20 left-20 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-20 items-center relative z-10 max-w-7xl">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-6 lg:space-y-10">
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-xl border border-gray-600/30 rounded-full text-xs lg:text-sm text-gray-200 animate-fade-in shadow-lg">
            <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 bg-green-400 rounded-full mr-2 lg:mr-3 animate-pulse shadow-green-400/50 shadow-lg"></div>
            Available for exciting projects
          </div>

          <div className="space-y-4 lg:space-y-8">
            <div className="space-y-3 lg:space-y-6">
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <p className="text-blue-400 text-lg lg:text-xl font-semibold tracking-wider uppercase">Hello, I'm</p>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black leading-none">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent block">
                    Ashish
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent block">
                    Gowda
                  </span>
                </h1>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold text-gray-300 leading-relaxed">
                  Creative UI/UX Designer &<br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                    Front-End Developer
                  </span>
                </h2>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-gray-400 text-base lg:text-xl leading-relaxed max-w-2xl">
              Transforming ideas into exceptional digital experiences through innovative design 
              and cutting-edge development. BCA Graduate with passion for creating 
              <span className="text-blue-400 font-semibold"> user-centered solutions</span>.
            </p>
          </div>

          {/* Enhanced Stats */}
          <div className="flex gap-4 lg:gap-8 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white">8+</div>
              <div className="text-xs lg:text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white">2+</div>
              <div className="text-xs lg:text-sm text-gray-400">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white">100%</div>
              <div className="text-xs lg:text-sm text-gray-400">Passion</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 text-white px-6 py-3 lg:px-10 lg:py-5 rounded-2xl hover:from-blue-600 hover:via-cyan-600 hover:to-blue-700 transition-all duration-500 flex items-center justify-center gap-2 lg:gap-3 hover:scale-105 shadow-2xl hover:shadow-blue-500/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <span className="font-bold text-sm lg:text-lg relative z-10">View My Work</span>
              <ArrowRight className="w-4 h-4 lg:w-6 lg:h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </button>
            
            <div className="flex gap-3 lg:gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="flex-1 sm:flex-none border-2 border-gray-600/50 text-white px-4 py-3 lg:px-8 lg:py-5 rounded-2xl hover:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 transition-all duration-500 flex items-center justify-center gap-2 lg:gap-3 backdrop-blur-xl group"
              >
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold text-sm lg:text-base">Get In Touch</span>
              </button>
              
              <button 
                onClick={handleDownloadCV}
                className="border-2 border-gray-600/50 text-white px-4 py-3 lg:px-6 lg:py-5 rounded-2xl hover:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 transition-all duration-500 flex items-center justify-center backdrop-blur-xl hover:scale-110 group"
                title="Download Resume"
              >
                <Download className="w-4 h-4 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex gap-4 lg:gap-6 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <a
              href="https://github.com/ashishgowdamj"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-xl border border-gray-600/30 rounded-2xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500/90 hover:to-cyan-500/90 hover:border-blue-500/50 transition-all duration-500 hover:scale-110 shadow-lg"
            >
              <Github className="w-5 h-5 lg:w-7 lg:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/ashishgowdamj"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-xl border border-gray-600/30 rounded-2xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500/90 hover:to-cyan-500/90 hover:border-blue-500/50 transition-all duration-500 hover:scale-110 shadow-lg"
            >
              <Linkedin className="w-5 h-5 lg:w-7 lg:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Right Content - Enhanced Profile Section */}
        <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="relative">
            {/* Main Profile Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px]">
              {/* Outer Animated Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-600 blur-xl opacity-60 animate-spin" style={{ animationDuration: '8s' }}></div>
              
              {/* Main Profile Ring */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-cyan-600 to-teal-700 p-1 lg:p-2 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden border-2 lg:border-4 border-gray-700/50 relative">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-full flex items-center justify-center relative">
                    <span className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">AG</span>
                    
                    {/* Inner glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Floating Tech Icons */}
            <div className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl lg:rounded-3xl flex items-center justify-center rotate-12 hover:rotate-0 transition-all duration-500 shadow-2xl hover:shadow-blue-500/50 group">
              <Palette className="w-6 h-6 lg:w-10 lg:h-10 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 lg:-bottom-8 lg:-left-8 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl lg:rounded-3xl flex items-center justify-center -rotate-12 hover:rotate-0 transition-all duration-500 shadow-2xl hover:shadow-teal-500/50 group">
              <Code className="w-6 h-6 lg:w-10 lg:h-10 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>

            <div className="absolute top-1/2 -right-8 lg:-right-16 w-14 h-14 lg:w-20 lg:h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl lg:rounded-2xl flex items-center justify-center rotate-45 hover:rotate-12 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/50 group">
              <Zap className="w-5 h-5 lg:w-8 lg:h-8 text-white -rotate-45 group-hover:scale-110 transition-transform duration-300" />
            </div>

            <div className="absolute top-1/4 -left-6 lg:-left-12 w-12 h-12 lg:w-18 lg:h-18 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center hover:scale-125 transition-all duration-500 shadow-2xl hover:shadow-emerald-500/50 group p-2 lg:p-4">
              <span className="text-white font-bold text-xs lg:text-sm group-hover:scale-110 transition-transform duration-300">JS</span>
            </div>

            {/* Orbital rings with different speeds */}
            <div className="absolute inset-[-15px] lg:inset-[-30px] border border-gray-600/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute inset-[-25px] lg:inset-[-50px] border border-gray-500/10 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
            <div className="absolute inset-[-35px] lg:inset-[-70px] border border-gray-400/5 rounded-full animate-spin" style={{ animationDuration: '40s' }}></div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 lg:w-8 lg:h-12 border-2 border-gray-500 rounded-full flex justify-center relative">
          <div className="w-1 h-3 lg:w-1.5 lg:h-4 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full mt-1 lg:mt-2 animate-pulse shadow-lg"></div>
        </div>
        <p className="text-gray-500 text-xs mt-1 lg:mt-2 text-center">Scroll down</p>
      </div>
    </section>
  );
};

export default Hero;
