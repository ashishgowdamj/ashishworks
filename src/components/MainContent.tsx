import React from 'react';
import { Play } from 'lucide-react';

const MainContent = () => {
  return (
    <div className="ml-80 min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section id="home" className="px-12 py-16">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold text-white mb-6">
            Hello! I'm <span className="text-blue-500">Ashish</span>.
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Creative Web & Mobile Consultant | I Transform Bold Business Visions Into Code
            Developer | Customize About Helping Startups Succeed 🚀
          </p>
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full text-green-400 text-sm mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Available now
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors duration-200 font-medium text-lg"
            >
              Schedule a call with me to get started your design project.
            </button>
          </div>

          {/* Video Preview */}
          <div className="bg-gray-800 rounded-2xl p-8 relative">
            <div className="aspect-video bg-gray-700 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-200 cursor-pointer">
                  <Play className="w-6 h-6 text-gray-900 ml-1" />
                </div>
                <p className="text-gray-400">Hey, I'm Ashish</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section id="portfolio" className="px-12 py-16">
        <h2 className="text-3xl font-bold text-white mb-12">Featured works</h2>
        
        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* Project Cards */}
          <div className="bg-gradient-to-br from-orange-100 to-red-200 rounded-2xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Meal Kit Delivery</h3>
              <p className="text-gray-700 mb-4">Minimal Web App Design</p>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="w-full h-32 bg-orange-300 rounded-lg mb-4"></div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 text-xs bg-white px-2 py-1 rounded text-gray-600">
              View all
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Food Delivery App</h3>
              <p className="text-gray-700 mb-4">Mobile App Design</p>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="w-full h-32 bg-green-300 rounded-lg mb-4"></div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 text-xs bg-white px-2 py-1 rounded text-gray-600">
              View all
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-cyan-200 rounded-2xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ed-Tech Platform</h3>
              <p className="text-gray-700 mb-4">Ed-Tech Platform UI Design</p>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="w-full h-32 bg-blue-300 rounded-lg mb-4"></div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 text-xs bg-white px-2 py-1 rounded text-gray-600">
              View all
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-100 to-rose-200 rounded-2xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">E-Commerce App</h3>
              <p className="text-gray-700 mb-4">Mobile App Design</p>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="w-full h-32 bg-pink-300 rounded-lg mb-4"></div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 text-xs bg-white px-2 py-1 rounded text-gray-600">
              View all
            </div>
          </div>
        </div>

        {/* Portfolio Links */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Check out my stuff on Behance & Dribbble</h3>
          <div className="flex justify-center gap-8">
            <div className="bg-blue-600 rounded-2xl p-8 w-48 text-center">
              <div className="text-4xl font-bold text-white mb-2">Be</div>
              <p className="text-blue-100 mb-4">Behance Portfolio</p>
              <p className="text-blue-200 text-sm mb-4">Check out my behance design works here.</p>
              <button className="text-white text-sm hover:underline">View all</button>
            </div>
            <div className="bg-pink-500 rounded-2xl p-8 w-48 text-center">
              <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4"></div>
              <p className="text-pink-100 mb-4">Dribbble Portfolio</p>
              <p className="text-pink-200 text-sm mb-4">Check out my Dribbble design shots here.</p>
              <button className="text-white text-sm hover:underline">View all</button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Kind Words from Clients & Colleague</h3>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-blue-500 rounded-full mr-1"></div>
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "Working with Ashish has been such a amazing experience. Brand of creativity and professionalism has enhanced our brand's design perfectly. He successfully delivered beyond our expectations! Highly recommend"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
                <div>
                  <p className="text-white font-medium">Jagadesh Kembhavi</p>
                  <p className="text-gray-400 text-sm">CEO</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-blue-500 rounded-full mr-1"></div>
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "Collaborated is with Ashish on has project and the level of creativity and attention to detail they brought to the project was outstanding. The result far exceeded what we had imagined."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
                <div>
                  <p className="text-white font-medium">TechnoLabs</p>
                  <p className="text-gray-400 text-sm">Organization</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Stack</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-800 rounded-xl p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">F</span>
              </div>
              <span className="text-white">Figma</span>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">W</span>
              </div>
              <span className="text-white">Wix</span>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">F</span>
              </div>
              <span className="text-white">Framer</span>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">N</span>
              </div>
              <span className="text-white">Notion</span>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">W</span>
              </div>
              <span className="text-white">Wordpress</span>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">A</span>
              </div>
              <span className="text-white">Adobe After Effect</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div id="contact" className="text-center bg-gray-800 rounded-2xl p-16">
          <h2 className="text-6xl font-bold text-white mb-8">Let's Connect!</h2>
          <p className="text-gray-400 text-center">© Ashish 2024. All rights Reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default MainContent;