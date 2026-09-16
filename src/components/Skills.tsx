import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Responsive Design',
        'UI/UX Principles'
      ]
    },
    {
      title: "Backend & Mobile Development",
      skills: [
        'Node.js',
        'Python',
        'REST APIs',
        'React Native',
        'Android Studio',
        'Firebase'
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        'AWS',
        'Docker',
        'FastAPI',
        'CI/CD',
        'Serverless Architecture',
        'Cloud Deployment'
      ]
    },
    {
      title: "AI & Data Tools",
      skills: [
        'LangChain',
        'Claude AI',
        'OpenAI API',
        'Data Visualization',
        'Analytics Dashboards',
        'Machine Learning Basics'
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
            The core technologies and tools I use to ship quality work.
          </p>
        </div>

        {/* Skills from Resume */}
        <div className="max-w-4xl mx-auto space-y-10">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-amber-400 inline-block"></span>
                {category.title}
              </h3>
              <ul className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3 text-white">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-400 flex-shrink-0"></span>
                    <span className="text-sm md:text-base">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stack logos */}
        <div className="mb-16 max-w-4xl mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 justify-center gap-y-3 md:gap-y-4 gap-x-12">
            {[
              'User Research',
              'Interaction Design',
              'Web Development',
              'AI Integration',
              'Cloud Architecture',
              'REST API Design',
              'Mobile Development',
              'UI/UX Design',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white">
                <span className="mt-2 w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Icon-only grid */}
        <div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-y-8 gap-x-6 place-items-center">
              {[
                { name: 'React / Native', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
                { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF' },
                { name: 'Python', logo: 'https://cdn.simpleicons.org/python/3776AB' },
                { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
                { name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonaws/232F3E' },
                { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
                { name: 'FastAPI', logo: 'https://cdn.simpleicons.org/fastapi/009688' },
                { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
                { name: 'LangChain', logo: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
                { name: 'Firebase', logo: 'https://cdn.simpleicons.org/firebase/FFCA28' },
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

      </div>
    </section>
  );
};

export default Skills;
