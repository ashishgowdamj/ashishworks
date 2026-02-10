import React from 'react';
import { Github, Linkedin, Download, Mail, Phone, MapPin, Search, FileText, Briefcase, Wrench, Link as LinkIcon } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Ashish Gowda MJ Resume.pdf';
    link.download = 'Ashish_Gowda_MJ_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-start justify-center bg-[#0b0b0b] px-6 pt-10 pb-20">
      <div className="container mx-auto max-w-6xl w-full">
        {/* Top Row: Open to work + Download */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-white rounded-full border border-white/10 bg-white/5 backdrop-blur px-3 py-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            <span>Open to work</span>
          </div>
          <button
            onClick={handleDownloadCV}
            className="bg-amber-400 text-black font-semibold px-5 py-2.5 rounded-full hover:bg-amber-300 transition-colors w-full sm:w-auto"
          >
            Download CV
          </button>
        </div>

        {/* Headings */}
        <div>
          <p className="text-amber-400 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-4">
            Full Stack Developer & AI Enthusiast
          </p>
          <h1 className="text-white text-3xl sm:text-5xl lg:text-7xl font-extrabold mb-4 leading-tight">
            Ashish Gowda M J
          </h1>
        </div>

        {/* Contact Rows */}
        <div className="mt-5 space-y-4 mb-10">
          <div className="grid md:grid-cols-2 gap-4">
            <a href="mailto:ashishgowdamj@gmail.com" className="flex items-center gap-3 text-white">
              <span className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-[#2a2a2a]"><Mail className="w-4 h-4 text-amber-400" /></span>
              <span className="truncate">ashishgowdamj@gmail.com</span>
            </a>
            <a href="tel:+916362032496" className="flex items-center gap-3 text-white">
              <span className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-[#2a2a2a]"><Phone className="w-4 h-4 text-amber-400" /></span>
              <span>+91-63620-32496</span>
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="https://linkedin.com/in/ashishgowdamj" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white">
              <span className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-[#2a2a2a]"><Linkedin className="w-4 h-4 text-amber-400" /></span>
              <span className="truncate">linkedin.com/in/ashishgowdamj</span>
            </a>
            <div className="flex items-center gap-3 text-white">
              <span className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-[#2a2a2a]"><MapPin className="w-4 h-4 text-amber-400" /></span>
              <span>Bengaluru, Karnataka, INDIA</span>
            </div>
          </div>
        </div>

        {/* Intro paragraphs below contact details */}
        <div className="max-w-3xl text-gray-300 space-y-4 text-base sm:text-lg leading-relaxed">
          <div className="space-y-4">
            <p>
              I'm Ashish Gowda M J, a passionate Full Stack Developer and AI Enthusiast with a Bachelor of Computer Applications (BCA) degree.
              My journey has been driven by building real-world applications with AI integration, clean code, responsive design, and user-friendly functionality.
            </p>
            <p>
              I enjoy creating web applications using React.js, Next.js, Firebase and Supabase, as well as developing mobile apps with React Native, Flutter and Android Studio
            </p>
          </div>
          <p className="text-white font-bold leading-tight mt-6 sm:mt-8 md:mt-10 pt-[40px] text-[35px] sm:text-[41px] md:text-[53px]">
            Let’s build something great together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
