
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Stories = () => {
  const stories = [
    {
      id: 1,
      title: "How I Designed My First Real-World UI Project",
      date: "June 2025",
      preview: "Building my first real-world UI project was a mix of excitement and chaos. I used Figma and React.js, learned about layout consistency, responsiveness, and simplifying user journeys.",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "My Favorite UI Design Tools (as a Beginner)",
      date: "June 2025",
      preview: "As a beginner, I found Figma, Coolors.co, Feather Icons, and Type Scale extremely useful. Tools don't make the designer, but they definitely help the process.",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "What I Learned from Cloning Facebook, Netflix & LinkedIn",
      date: "June 2025",
      preview: "Cloning these UIs using HTML, CSS, and JS helped me understand layout complexity, alignment, and what makes frontend design feel natural.",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Insights & Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Thoughts, learnings, and experiences from my journey in design and development. 
              Here's what I've discovered along the way.
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <article 
                key={story.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Article Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-700 rounded-full">
                      {story.readTime}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <time className="text-sm font-medium text-gray-500">
                      {story.date}
                    </time>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                    {story.title}
                  </h2>

                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {story.preview}
                  </p>

                  <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group">
                    Read more
                    <svg 
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get notified when I publish new stories about design, development, and creative processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Stories;
