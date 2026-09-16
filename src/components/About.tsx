import React from 'react';
import { MapPin } from 'lucide-react';

interface Role {
  title: string;
  period: string;
}

interface Experience {
  company: string;
  type: string;
  location: string;
  hybrid: string;
  logoBg: string;
  logoText: string;
  roles: Role[];
  skills: string[];
}

const About = () => {
  const experiences: Experience[] = [
    {
      company: 'Dhanvit Ventures LLP',
      type: 'Full-time',
      location: 'Bengaluru, India',
      hybrid: 'On-site',
      logoBg: 'bg-green-600',
      logoText: 'DV',
      roles: [
        { title: 'Software Developer', period: 'Nov 2025 – Present' },
      ],
      skills: ['Software Development'],
    },
    {
      company: 'Ideafloats Technologies',
      type: 'Internship',
      location: 'Bengaluru, India',
      hybrid: 'On-site',
      logoBg: 'bg-purple-600',
      logoText: 'IF',
      roles: [
        { title: 'Full Stack Developer Intern', period: 'Sep 2025 – Nov 2025' },
        { title: 'UI/UX Design Intern', period: 'Jun 2025 – Sep 2025' },
      ],
      skills: ['Full-Stack Development'],
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#0b0b0b]">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">About</h2>
          <p className="text-gray-400 text-base lg:text-lg max-w-3xl mx-auto">
            Get to know more about my journey, education, and passion for design and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            {/* My Story */}
            <div className="bg-gray-800 border border-gray-800 p-6 lg:p-8 rounded-2xl">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">My Story</h3>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm lg:text-base">
                I'm Ashish Gowda M J, a Software Developer with experience building real-time monitoring systems, analytics dashboards, mobile applications, and data management platforms.
                Skilled in front-end and product development, responsive UI design, and workflow optimization.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                Experienced in AI-assisted development, focused on delivering solutions quickly that improve monitoring, management, and decision-making — from healthcare platforms to fleet tracking systems.
              </p>
            </div>

            {/* Professional Experience - LinkedIn Style */}
            <div className="bg-gray-800 border border-gray-800 p-6 lg:p-8 rounded-2xl">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-6">Professional Experience</h3>
              <div className="space-y-8">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="pb-8 border-b border-gray-700/50 last:border-b-0">
                    <div className="flex items-start gap-4 mb-3">
                      <div className={`w-12 h-12 ${exp.logoBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white font-bold text-sm">{exp.logoText}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-sm">
                          <span className="text-white font-semibold text-base">{exp.company}</span>
                          <span className="text-gray-400">·</span>
                          <span className="text-gray-300">{exp.type}</span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5 text-sm text-gray-400">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location} · {exp.hybrid}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bullet role entries */}
                    <div className="ml-16 space-y-3">
                      {exp.roles.map((role, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                          <div>
                            <p className="text-white font-medium">{role.title}</p>
                            {role.period && (
                              <p className="text-gray-400 text-xs mt-0.5">{role.period}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Skill tags */}
                    <div className="ml-16 mt-3 flex flex-wrap gap-2">
                      {exp.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700/80 text-gray-300 border border-gray-600">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-800 border border-gray-800 p-6 lg:p-8 rounded-2xl">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Education</h3>
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="text-lg lg:text-xl font-semibold text-white">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-amber-400 font-medium">RNS First Grade College, Bengaluru</p>
                <p className="text-gray-400 text-sm lg:text-base mt-1">Aug 2022 – June 2025 · CGPA: 8.35 / 10</p>
              </div>
            </div>

            {/* Continuous Learning */}
            <div className="bg-gray-800 border border-gray-800 p-6 lg:p-8 rounded-2xl">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Continuous Learning</h3>
              <div className="space-y-3 text-sm">
                {[
                  { course: 'Python for Everybody', org: 'University of Michigan (Coursera)' },
                  { course: 'React.js Bootcamp', org: 'DevTown' },
                  { course: 'Microsoft Power BI', org: 'Skill Nation' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">{item.course}</p>
                      <p className="text-gray-400 text-xs">{item.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Stats & Highlights */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="bg-gray-800 border border-gray-800 p-4 lg:p-6 rounded-2xl text-center">
                <div className="text-2xl lg:text-3xl font-bold text-amber-400 mb-2">5</div>
                <div className="text-gray-300 text-sm lg:text-base">Projects Shipped</div>
              </div>
              <div className="bg-gray-800 border border-gray-800 p-4 lg:p-6 rounded-2xl text-center">
                <div className="text-2xl lg:text-3xl font-bold text-amber-400 mb-2">9</div>
                <div className="text-gray-300 text-sm lg:text-base">Months Experience</div>
              </div>
              <div className="bg-gray-800 border border-gray-800 p-4 lg:p-6 rounded-2xl text-center">
                <div className="text-2xl lg:text-3xl font-bold text-amber-400 mb-2">2</div>
                <div className="text-gray-300 text-sm lg:text-base">Companies</div>
              </div>
              <div className="bg-gray-800 border border-gray-800 p-4 lg:p-6 rounded-2xl text-center">
                <div className="text-2xl lg:text-3xl font-bold text-amber-400 mb-2">∞</div>
                <div className="text-gray-300 text-sm lg:text-base">Passion</div>
              </div>
            </div>

            {/* Skills from Resume */}
            <div className="bg-gray-800 border border-gray-800 p-6 lg:p-8 rounded-2xl">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Core Competencies</h3>
              <div className="space-y-5">
                <div>
                  <h4 className="text-white font-semibold text-sm mb-2">Product Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Monitoring Systems', 'Analytics Dashboards', 'Mobile Applications', 'Data Management Platforms'].map((s, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700/80 text-gray-300 border border-gray-600">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-2">AI-Assisted Engineering</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Claude Code CLI', 'OpenAI Codex', 'Rapid Prototyping', 'Workflow Automation'].map((s, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700/80 text-gray-300 border border-gray-600">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-2">Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {['GitHub', 'VS Code', 'Cursor', 'Antigravity', 'Android Studio', 'Expo Go'].map((s, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700/80 text-gray-300 border border-gray-600">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-800 p-6 lg:p-8 rounded-2xl">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">My Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold text-sm lg:text-base">User-Centered Design</h4>
                    <p className="text-gray-300 text-xs lg:text-sm">Always putting the user's needs and experience first</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold text-sm lg:text-base">Detail-Oriented</h4>
                    <p className="text-gray-300 text-xs lg:text-sm">Meticulous attention to every design and code detail</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold text-sm lg:text-base">Continuous Learning</h4>
                    <p className="text-gray-300 text-xs lg:text-sm">Always exploring new technologies and design trends</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
