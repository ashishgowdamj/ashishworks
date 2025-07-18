
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Design Skills",
      skills: [
        { name: "UI/UX Design", level: 90 },
        { name: "Wireframing", level: 85 },
        { name: "Prototyping", level: 88 },
        { name: "Figma", level: 92 },
        { name: "Typography", level: 80 },
        { name: "Color Theory", level: 85 },
      ]
    },
    {
      title: "Development Skills",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Responsive Design", level: 88 },
        { name: "Git/GitHub", level: 75 },
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "Android Development", level: 75 },
        { name: "iOS Development", level: 70 },
        { name: "React Native", level: 72 },
        { name: "Flutter", level: 68 },
        { name: "Mobile UI/UX", level: 80 },
        { name: "App Store Optimization", level: 65 },
      ]
    },
    {
      title: "Additional Skills",
      skills: [
        { name: "Accessibility", level: 78 },
        { name: "User Research", level: 72 },
        { name: "Flask", level: 70 },
        { name: "SQLite", level: 68 },
        { name: "Problem Solving", level: 90 },
        { name: "Cross-Platform Development", level: 73 },
      ]
    }
  ];

  const toolCategories = [
    {
      title: "Design Tools",
      tools: [
        { 
          name: "Figma", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          color: "from-purple-500 to-blue-500" 
        },
        { 
          name: "Adobe XD", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-original.svg",
          color: "from-pink-500 to-purple-500" 
        },
        { 
          name: "Sketch", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
          color: "from-orange-500 to-yellow-500" 
        },
      ]
    },
    {
      title: "Development",
      tools: [
        { 
          name: "HTML5", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "from-orange-500 to-red-500" 
        },
        { 
          name: "CSS3", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "from-blue-500 to-cyan-500" 
        },
        { 
          name: "JavaScript", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "from-yellow-500 to-orange-500" 
        },
        { 
          name: "React", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          color: "from-cyan-500 to-blue-500" 
        },
        { 
          name: "Git", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          color: "from-gray-500 to-gray-700" 
        },
        { 
          name: "VSCode", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          color: "from-blue-600 to-indigo-600" 
        },
      ]
    },
    {
      title: "Backend & Database",
      tools: [
        { 
          name: "Flask", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
          color: "from-green-500 to-teal-500" 
        },
        { 
          name: "SQLite", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
          color: "from-gray-600 to-gray-800" 
        },
        { 
          name: "Node.js", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          color: "from-green-400 to-emerald-500" 
        },
      ]
    },
    {
      title: "Mobile Development",
      tools: [
        { 
          name: "Android Studio", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
          color: "from-green-400 to-teal-500" 
        },
        { 
          name: "Xcode", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg",
          color: "from-blue-400 to-indigo-500" 
        },
        { 
          name: "React Native", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          color: "from-cyan-400 to-blue-500" 
        },
        { 
          name: "Flutter", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
          color: "from-blue-500 to-cyan-400" 
        },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden px-4">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-40 h-40 lg:w-80 lg:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 lg:w-96 lg:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 lg:mb-6">
              Skills & 
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> Expertise</span>
            </h2>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-gray-400 text-base lg:text-xl max-w-4xl mx-auto leading-relaxed">
              A comprehensive toolkit of technical skills and design capabilities, 
              constantly evolving through hands-on projects and continuous learning.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="group animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl p-6 lg:p-8 rounded-3xl border border-gray-700/30 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 lg:mb-8 text-center group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="space-y-4 lg:space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2 lg:space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-semibold text-sm lg:text-lg">{skill.name}</span>
                          <span className="text-blue-400 font-bold text-sm lg:text-lg">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2 lg:h-3 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 h-2 lg:h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Tools & Technologies Section */}
        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-2xl lg:text-4xl font-bold text-white text-center mb-12 lg:mb-16">
            Tools & 
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> Technologies</span>
          </h3>
          
          <div className="space-y-12">
            {toolCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${0.1 * categoryIndex}s` }}>
                <h4 className="text-lg lg:text-xl font-semibold text-gray-300 mb-6 text-center">
                  {category.title}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 max-w-4xl mx-auto">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-4 lg:p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 border border-gray-700/30 hover:border-blue-500/30 cursor-pointer"
                    >
                      {/* Animated Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                      
                      {/* Logo Container */}
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg backdrop-blur-sm">
                        <img 
                          src={tool.logo} 
                          alt={`${tool.name} logo`}
                          className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
                          loading="lazy"
                        />
                      </div>
                      
                      <span className="text-gray-300 font-semibold text-sm lg:text-base group-hover:text-white transition-colors duration-300 block">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Highlight */}
        <div className="mt-16 lg:mt-20 text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-gray-700/30 max-w-4xl mx-auto">
            <h4 className="text-xl lg:text-3xl font-bold text-white mb-4 lg:mb-6">
              Passionate About 
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> Innovation</span>
            </h4>
            <p className="text-gray-300 text-base lg:text-xl leading-relaxed">
              Every project is an opportunity to push boundaries, learn new technologies, 
              and create solutions that make a real difference in users' lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
