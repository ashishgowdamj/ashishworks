import React from 'react';
import { Home, User, Briefcase, MessageCircle, FileText, Github, Linkedin, Mail } from 'lucide-react';

const Sidebar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: MessageCircle },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-gray-900 border-r border-gray-800 z-50">
      <div className="flex flex-col h-full">
        {/* Profile Section */}
        <div className="p-8 text-center border-b border-gray-800">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-2xl font-black text-white">AG</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900"></div>
          </div>
          <h2 className="text-xl font-bold text-white mb-1">Ashish Gowda</h2>
          <p className="text-gray-400 text-sm">UI/UX Designer & Developer</p>
          <p className="text-green-400 text-xs mt-2">● Available for projects</p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-6">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200 group"
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="p-6 border-t border-gray-800">
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/ashishgowdamj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ashishgowdamj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ashishgowdamj@gmail.com"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Schedule a call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;