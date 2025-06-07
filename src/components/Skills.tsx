
import React from 'react';
import { Code, Palette, Globe, Smartphone, Database, GitBranch, Figma, Zap } from 'lucide-react';

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
      title: "Additional Skills",
      skills: [
        { name: "Accessibility", level: 78 },
        { name: "User Research", level: 72 },
        { name: "Flask", level: 70 },
        { name: "SQLite", level: 68 },
        { name: "Android Development", level: 65 },
        { name: "Problem Solving", level: 90 },
      ]
    }
  ];

  const tools = [
    { name: "Figma", icon: <Figma className="w-8 h-8" />, color: "from-purple-500 to-blue-500" },
    { name: "HTML5", icon: <Code className="w-8 h-8" />, color: "from-orange-500 to-red-500" },
    { name: "CSS3", icon: <Palette className="w-8 h-8" />, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", icon: <Zap className="w-8 h-8" />, color: "from-yellow-500 to-orange-500" },
    { name: "React", icon: <Globe className="w-8 h-8" />, color: "from-cyan-500 to-blue-500" },
    { name: "Git", icon: <GitBranch className="w-8 h-8" />, color: "from-gray-500 to-gray-700" },
    { name: "VSCode", icon: <Code className="w-8 h-8" />, color: "from-blue-600 to-indigo-600" },
    { name: "Flask", icon: <Database className="w-8 h-8" />, color: "from-green-500 to-teal-500" },
    { name: "SQLite", icon: <Database className="w-8 h-8" />, color: "from-gray-600 to-gray-800" },
    { name: "Android Studio", icon: <Smartphone className="w-8 h-8" />, color: "from-green-400 to-teal-500" },
    { name: "Chrome DevTools", icon: <Globe className="w-8 h-8" />, color: "from-red-500 to-yellow-500" },
    { name: "Responsive Design", icon: <Smartphone className="w-8 h-8" />, color: "from-indigo-500 to-purple-500" }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Skills & 
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> Expertise</span>
            </h2>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
              A comprehensive toolkit of technical skills and design capabilities, 
              constantly evolving through hands-on projects and continuous learning.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="group animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/30 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-8 text-center group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-semibold text-lg">{skill.name}</span>
                          <span className="text-blue-400 font-bold text-lg">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
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

        {/* Enhanced Tools & Technologies */}
        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-4xl font-bold text-white text-center mb-16">
            Tools & 
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> Technologies</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-2xl text-center hover:scale-110 transition-all duration-500 border border-gray-700/30 hover:border-blue-500/30 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Icon Container */}
                <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                </div>
                
                <span className="text-gray-300 font-semibold text-sm group-hover:text-white transition-colors duration-300">
                  {tool.name}
                </span>
                
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl -z-10`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Highlight */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 backdrop-blur-xl rounded-3xl p-12 border border-gray-700/30 max-w-4xl mx-auto">
            <h4 className="text-3xl font-bold text-white mb-6">
              Passionate About 
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> Innovation</span>
            </h4>
            <p className="text-gray-300 text-xl leading-relaxed">
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
