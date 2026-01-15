
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0b0b0b]">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">About</h2>
          <p className="text-gray-400 text-base lg:text-lg max-w-3xl mx-auto">
            Get to know more about my journey, education, and passion for design and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="bg-gray-800 border border-gray-800 p-6 lg:p-8 rounded-2xl">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">My Story</h3>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm lg:text-base">
              I'm Ashish Gowda M J, a passionate Full Stack Developer and AI Enthusiast with a Bachelor of Computer Applications (BCA) degree.
              My journey has been driven by building real-world applications with AI integration, leveraging modern technologies, clean code, responsive design, and user-friendly functionality.
              I enjoy creating web applications using React.js, Next.js, and Firebase, as well as developing mobile apps with Flutter and Android Studio. My projects include live business websites, interactive learning platforms, and Android apps development skills.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                I believe in creating digital experiences that are not only visually appealing but 
                also highly functional and user-centered. Every project is an opportunity to solve 
                real problems and create meaningful impact.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-800 p-6 lg:p-8 rounded-2xl">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Professional Experience</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-amber-500 pl-4 pb-4">
                  <h4 className="text-lg lg:text-xl font-semibold text-white">Full Stack Developer</h4>
                  <p className="text-amber-400 font-medium">Ideafloats Technologies</p>
                  <p className="text-gray-400 text-sm lg:text-base mb-2">2 months</p>
                  <p className="text-gray-300 text-sm lg:text-base">
                    Developed full-stack applications using modern web technologies, implemented responsive designs, 
                    and integrated front-end and back-end systems.
                  </p>
                </div>
                <div className="border-l-4 border-amber-500 pl-4">
                  <h4 className="text-lg lg:text-xl font-semibold text-white">UI/UX Designer</h4>
                  <p className="text-amber-400 font-medium">Ideafloats Technologies</p>
                  <p className="text-gray-400 text-sm lg:text-base mb-2">3 months</p>
                  <p className="text-gray-300 text-sm lg:text-base">
                    Designed user-centered interfaces, created wireframes and prototypes, and collaborated 
                    with developers to deliver intuitive user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-800 p-6 lg:p-8 rounded-2xl">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Education & Growth</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-amber-500 pl-4">
                  <h4 className="text-lg lg:text-xl font-semibold text-white">Bachelor of Computer Applications</h4>
                  <p className="text-amber-400 font-medium">BCA Graduate</p>
                  <p className="text-gray-400 text-sm lg:text-base">Specialized in Computer Applications & Development</p>
                </div>
                <p className="text-gray-300 text-sm lg:text-base">
                  Throughout my academic journey, I've complemented my formal education with extensive 
                  self-learning and practical project development, focusing on modern design principles 
                  and cutting-edge development technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Stats & Highlights */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="bg-gray-800 border border-gray-800 p-4 lg:p-6 rounded-2xl text-center">
                <div className="text-2xl lg:text-3xl font-bold text-amber-400 mb-2">8+</div>
                <div className="text-gray-300 text-sm lg:text-base">Projects</div>
              </div>
              <div className="bg-gray-800 border border-gray-800 p-4 lg:p-6 rounded-2xl text-center">
                <div className="text-2xl lg:text-3xl font-bold text-amber-400 mb-2">5</div>
                <div className="text-gray-300 text-sm lg:text-base">Months Experience</div>
              </div>
              <div className="bg-gray-800 border border-gray-800 p-4 lg:p-6 rounded-2xl text-center">
                <div className="text-2xl lg:text-3xl font-bold text-amber-400 mb-2">2+</div>
                <div className="text-gray-300 text-sm lg:text-base">Years Learning</div>
              </div>
              <div className="bg-gray-800 border border-gray-800 p-4 lg:p-6 rounded-2xl text-center">
                <div className="text-2xl lg:text-3xl font-bold text-amber-400 mb-2">∞</div>
                <div className="text-gray-300 text-sm lg:text-base">Passion</div>
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
