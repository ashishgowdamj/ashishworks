
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
    <section id="skills" className="py-20 bg-[#0b0b0b]">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            Skills & <span className="text-amber-400">Expertise</span>
          </h2>
          <p className="text-gray-400 text-base lg:text-lg max-w-3xl mx-auto">
            The core design and development skills I use to ship quality work.
          </p>
        </div>
        {/* Simple Skills list (clean and compact) */}
        <div className="mb-16 max-w-4xl mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 justify-center gap-y-3 md:gap-y-4 gap-x-12">
            {[
              'User Research',
              'Interaction Design',
              'Web Design',
              'Web Development',
              'Wireframing/Prototyping',
              'Responsive Web Design',
              'App Development',
              'Visual Design',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white">
                <span className="mt-2 w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stack: icon-only, minimal, centered (referenced, not copied) */}
        <div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-y-8 gap-x-6 place-items-center">
              {[
                { name: 'HTML5', logo: 'https://cdn.simpleicons.org/html5/E34F26' },
                { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
                { name: 'React / Native', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
                { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF' },
                { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
                { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
                { name: 'Framer', logo: 'https://cdn.simpleicons.org/framer/0055FF' },
                { name: 'Flutter', logo: 'https://cdn.simpleicons.org/flutter/02569B' },
                { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/FFFFFF' },
              ].map((tool) => (
                <div key={tool.name} className="flex flex-col items-center">
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    title={tool.name}
                    className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                    loading="lazy"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.onerror = null;
                      img.src = '/placeholder.svg';
                    }}
                  />
                  <span className="mt-2 text-gray-300 text-xs sm:text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Highlight */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="rounded-2xl p-8 lg:p-12 border border-gray-800 bg-gray-800/40 max-w-4xl mx-auto">
            <h4 className="text-xl lg:text-3xl font-bold text-white mb-4 lg:mb-6">
              Passionate About <span className="text-amber-400">Innovation</span>
            </h4>
            <p className="text-gray-300 text-base lg:text-xl leading-relaxed">
              Every project is a chance to push boundaries and ship better experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
