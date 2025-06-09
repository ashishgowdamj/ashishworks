
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Stories = () => {
  const [expandedStory, setExpandedStory] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const stories = [
    {
      id: 1,
      title: "How I Designed My First Real-World UI Project",
      date: "June 2025",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      preview: "Building my first real-world UI project was a mix of excitement and chaos. I used Figma and React.js, learned about layout consistency, responsiveness, and simplifying user journeys.",
      readTime: "5 min read",
      fullContent: `Building my first real-world UI project was both thrilling and overwhelming. When I started, I had theoretical knowledge but no practical experience with real-world constraints and user needs.

**The Challenge**
My first project was designing a dashboard for a local business. They needed something clean, functional, and easy to use. I quickly realized that designing for real users is completely different from following tutorials.

**Tools I Used**
- **Figma**: For wireframing and prototyping
- **React.js**: For building the actual interface
- **Tailwind CSS**: For styling and responsiveness

**Key Lessons Learned**
1. **Layout Consistency**: Every element needs to follow a grid system
2. **Responsive Design**: Mobile-first approach is crucial
3. **User Journey**: Simplicity beats complexity every time
4. **Feedback Loops**: Regular user testing prevents major redesigns

**The Result**
After three iterations and countless hours of refinement, we launched a dashboard that users actually enjoyed using. The key was listening to feedback and staying focused on solving real problems rather than adding flashy features.

This project taught me that good design isn't about making things look pretty—it's about making them work beautifully for the people who use them.`
    },
    {
      id: 2,
      title: "My Favorite UI Design Tools (as a Beginner)",
      date: "June 2025",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=400&fit=crop",
      preview: "As a beginner, I found Figma, Coolors.co, Feather Icons, and Type Scale extremely useful. Tools don't make the designer, but they definitely help the process.",
      readTime: "3 min read",
      fullContent: `When I started my UI design journey, I was overwhelmed by the number of tools available. After trying dozens of apps and services, here are the ones that became essential to my workflow.

**Design & Prototyping**
- **Figma**: The gold standard for UI design. Free, collaborative, and runs in the browser
- **Adobe XD**: Great alternative with excellent prototyping features
- **Sketch**: Mac-only but powerful for detailed design work

**Color & Typography**
- **Coolors.co**: Perfect for generating harmonious color palettes
- **Type Scale**: Helps create consistent typography hierarchies
- **Google Fonts**: Endless selection of web-safe fonts

**Icons & Assets**
- **Feather Icons**: Clean, consistent icon set
- **Unsplash**: High-quality stock photos
- **Lucide React**: Perfect for React projects

**Development Tools**
- **VS Code**: Best code editor with great extensions
- **Chrome DevTools**: Essential for debugging and testing
- **Tailwind CSS**: Utility-first CSS framework

**Why These Work for Beginners**
These tools have gentle learning curves, excellent documentation, and active communities. Most importantly, they're either free or very affordable, which is crucial when you're just starting out.

Remember: tools don't make you a better designer, but the right tools can remove friction from your creative process and help you focus on what matters most—solving user problems.`
    },
    {
      id: 3,
      title: "What I Learned from Cloning Facebook, Netflix & LinkedIn",
      date: "June 2025",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      preview: "Cloning these UIs using HTML, CSS, and JS helped me understand layout complexity, alignment, and what makes frontend design feel natural.",
      readTime: "7 min read",
      fullContent: `Cloning popular websites was one of the best learning exercises I did as a beginner. Here's what each platform taught me about design and development.

**Facebook Clone: Social Media Complexity**
Building a Facebook clone taught me about:
- **Information Architecture**: How to organize complex, nested information
- **Real-time Updates**: Managing dynamic content and notifications
- **Mobile Responsiveness**: Adapting complex layouts for smaller screens
- **User Interactions**: Likes, comments, and sharing mechanisms

**Netflix Clone: Media-Rich Interfaces**
The Netflix project was all about:
- **Visual Hierarchy**: Making content the star while keeping navigation subtle
- **Performance**: Optimizing image loading and carousel interactions
- **Dark UI Patterns**: Working with dark themes and contrast
- **Grid Systems**: Creating flexible, responsive content grids

**LinkedIn Clone: Professional Design**
LinkedIn taught me about:
- **Professional Aesthetics**: Clean, trustworthy design patterns
- **Content Organization**: Balancing personal and professional information
- **Forms & Data**: Complex form layouts and validation
- **Network Visualization**: Showing connections and relationships

**Key Takeaways**
1. **Start with Structure**: Good HTML structure makes everything else easier
2. **CSS Grid & Flexbox**: Master these for any layout challenge
3. **Component Thinking**: Break complex interfaces into reusable pieces
4. **User Experience**: Every interaction should feel intentional and smooth

**The Technical Skills I Gained**
- Advanced CSS techniques (Grid, Flexbox, animations)
- JavaScript DOM manipulation
- Responsive design principles
- Performance optimization basics

**Beyond the Code**
These projects taught me to think like a product designer. I started asking questions like: "Why is this button here?" and "How does this serve the user's goal?"

The most valuable lesson? Don't just copy what you see—understand why it works. Each design decision has a reason, and understanding those reasons will make you a better designer and developer.`
    }
  ];

  const toggleStory = (storyId: number) => {
    if (expandedStory === storyId) {
      setExpandedStory(null);
    } else {
      setExpandedStory(storyId);
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubscribing(true);
    
    try {
      // Simulate subscription process (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to my newsletter. You'll receive updates about new stories and insights.",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "There was an error subscribing to the newsletter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

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
                {/* Article Image */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
                    {expandedStory === story.id ? story.fullContent.substring(0, 200) + '...' : story.preview}
                  </p>

                  <button 
                    onClick={() => toggleStory(story.id)}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group"
                  >
                    {expandedStory === story.id ? 'Show less' : 'Read more'}
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${expandedStory === story.id ? 'rotate-90' : 'group-hover:translate-x-1'}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Expanded Content */}
                {expandedStory === story.id && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-6">
                      <div className="prose prose-gray max-w-none">
                        {story.fullContent.split('\n\n').map((paragraph, idx) => {
                          if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                            return (
                              <h3 key={idx} className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                                {paragraph.slice(2, -2)}
                              </h3>
                            );
                          }
                          if (paragraph.startsWith('- **')) {
                            return (
                              <div key={idx} className="mb-2">
                                <strong className="text-gray-900">{paragraph.match(/\*\*(.*?)\*\*/)?.[1]}:</strong>
                                <span className="text-gray-600"> {paragraph.split('**: ')[1]}</span>
                              </div>
                            );
                          }
                          if (paragraph.match(/^\d+\./)) {
                            return (
                              <div key={idx} className="mb-2">
                                <span className="text-gray-600">{paragraph}</span>
                              </div>
                            );
                          }
                          return (
                            <p key={idx} className="text-gray-600 mb-4 leading-relaxed">
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
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
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isSubscribing}
              />
              <button 
                type="submit"
                disabled={isSubscribing}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Stories;
