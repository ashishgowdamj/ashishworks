
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces with a focus on user experience. From wireframes to high-fidelity prototypes, I design digital experiences that users love.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "High-Fidelity Design",
        "Design System Creation",
        "Usability Testing"
      ],
      icon: "🎨"
    },
    {
      title: "Front-End Development",
      description: "Building responsive, performant web applications using modern technologies. Clean code, semantic HTML, and pixel-perfect implementation of designs.",
      features: [
        "React.js Development",
        "Responsive Web Design",
        "Modern CSS & JavaScript",
        "Performance Optimization",
        "Cross-Browser Compatibility"
      ],
      icon: "💻"
    },
    {
      title: "Web Design",
      description: "Complete web design solutions from concept to launch. Creating visually stunning websites that effectively communicate your brand and engage your audience.",
      features: [
        "Landing Page Design",
        "Website Redesign",
        "Brand Integration",
        "Mobile-First Design",
        "SEO-Friendly Structure"
      ],
      icon: "🌐"
    }
  ];

  const handleGetStartedClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My Services</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive design and development services to bring your digital vision to life. 
            From initial concept to final implementation, I'm here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-red-500 mb-4">What's Included:</h4>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <button 
                  onClick={handleGetStartedClick}
                  className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-all duration-200 font-semibold hover:scale-105 transform shadow-lg hover:shadow-xl"
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">My Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs and goals" },
              { step: "02", title: "Design", desc: "Creating wireframes and visual designs" },
              { step: "03", title: "Develop", desc: "Building with clean, efficient code" },
              { step: "04", title: "Deliver", desc: "Testing, refining, and launching" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{process.step}</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{process.title}</h4>
                <p className="text-gray-400">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
