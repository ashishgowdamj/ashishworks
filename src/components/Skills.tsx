
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

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Expertise</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and design capabilities, 
            constantly evolving through continuous learning and practical application.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-750 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-red-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Figma", "HTML5", "CSS3", "JavaScript", "React", "Git",
              "VSCode", "Flask", "SQLite", "Android Studio", "Chrome DevTools", "Responsive Design"
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-xl text-center hover:bg-gray-700 hover:scale-105 transition-all duration-200"
              >
                <span className="text-gray-300 font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
