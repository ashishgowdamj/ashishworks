
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Get to know more about my journey, education, and passion for design and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm Ashish Gowda M J, a passionate UI/UX Designer and Front-End Developer currently pursuing 
                my Bachelor of Computer Applications (BCA) degree at RNS First Grade College. Expected to 
                graduate in June 2025, I've been dedicated to honing my skills through self-initiated projects 
                and hands-on practice.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in design and development has been driven by a fascination with the intersection 
                of art and technology. I believe in creating digital experiences that are not only visually 
                appealing but also highly functional and user-centered.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Education & Growth</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="text-xl font-semibold text-white">Bachelor of Computer Applications</h4>
                  <p className="text-red-500 font-medium">RNS First Grade College</p>
                  <p className="text-gray-400">Expected Graduation: June 2025</p>
                </div>
                <p className="text-gray-300">
                  Throughout my academic journey, I've complemented my formal education with extensive 
                  self-learning and practical project development, focusing on modern design principles 
                  and cutting-edge development technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Stats & Highlights */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">5+</div>
                <div className="text-gray-300">Projects</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">2+</div>
                <div className="text-gray-300">Years Learning</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">10+</div>
                <div className="text-gray-300">Technologies</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">∞</div>
                <div className="text-gray-300">Passion</div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">My Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">User-Centered Design</h4>
                    <p className="text-gray-300 text-sm">Always putting the user's needs and experience first</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Detail-Oriented</h4>
                    <p className="text-gray-300 text-sm">Meticulous attention to every design and code detail</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Continuous Learning</h4>
                    <p className="text-gray-300 text-sm">Always exploring new technologies and design trends</p>
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
