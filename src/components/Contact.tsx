
import React, { useState } from 'react';
import { Github, Linkedin, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields before sending.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    console.log('Starting email send process...');
    console.log('Form data:', formData);

    try {
      // Initialize EmailJS with updated public key
      emailjs.init('d0agYK3ZKBPM89hYY');
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Ashish',
        reply_to: formData.email,
      };

      console.log('Sending email with params:', templateParams);

      const result = await emailjs.send(
        'service_96qciat', // Updated Service ID
        'template_bjeq1dx', // Updated Template ID
        templateParams,
        'd0agYK3ZKBPM89hYY' // Updated Public Key
      );

      console.log('EmailJS result:', result);

      if (result.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });

        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
    } catch (error) {
      console.error('EmailJS error details:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Get In 
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> Touch</span>
            </h2>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
              Ready to start your next project? I'd love to hear from you. 
              Let's discuss how we can bring your ideas to life.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/30">
              <h3 className="text-3xl font-bold text-white mb-8">Let's Connect</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a friendly chat about design and development.
              </p>

              {/* Enhanced Contact Details */}
              <div className="space-y-6">
                <div className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-gray-700/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Email</h4>
                    <a 
                      href="mailto:ashishgowdamj@gmail.com"
                      className="text-gray-300 hover:text-blue-400 transition-colors text-lg"
                    >
                      ashishgowdamj@gmail.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-gray-700/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Phone</h4>
                    <a 
                      href="tel:+916362032496"
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-lg"
                    >
                      +91 6362032496
                    </a>
                  </div>
                </div>

                <div className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-gray-700/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Location</h4>
                    <p className="text-gray-300 text-lg">Karnataka, India</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-700/30">
                <h4 className="text-white font-bold text-lg mb-6">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/ashishgowdamj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-14 h-14 bg-gradient-to-br from-gray-700/80 to-gray-800/80 backdrop-blur-xl border border-gray-600/30 rounded-2xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500/90 hover:to-cyan-500/90 hover:border-blue-500/50 transition-all duration-500 hover:scale-110 shadow-lg"
                  >
                    <Github className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a
                    href="https://linkedin.com/in/ashishgowdamj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-14 h-14 bg-gradient-to-br from-gray-700/80 to-gray-800/80 backdrop-blur-xl border border-gray-600/30 rounded-2xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500/90 hover:to-cyan-500/90 hover:border-blue-500/50 transition-all duration-500 hover:scale-110 shadow-lg"
                  >
                    <Linkedin className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/30 relative overflow-hidden">
              {/* Form Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-teal-500/5 opacity-50"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-8">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-gray-300 font-semibold mb-3 text-lg">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-gray-700/70 transition-all duration-300 disabled:opacity-50 text-lg group-hover:border-gray-500/70"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="block text-gray-300 font-semibold mb-3 text-lg">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-gray-700/70 transition-all duration-300 disabled:opacity-50 text-lg group-hover:border-gray-500/70"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="subject" className="block text-gray-300 font-semibold mb-3 text-lg">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-gray-700/70 transition-all duration-300 disabled:opacity-50 text-lg group-hover:border-gray-500/70"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-gray-300 font-semibold mb-3 text-lg">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      disabled={isSubmitting}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-gray-700/70 transition-all duration-300 resize-none disabled:opacity-50 text-lg group-hover:border-gray-500/70"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 text-white py-5 rounded-xl hover:from-blue-600 hover:via-cyan-600 hover:to-blue-700 transition-all duration-500 flex items-center justify-center gap-3 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 shadow-2xl hover:shadow-blue-500/30 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
