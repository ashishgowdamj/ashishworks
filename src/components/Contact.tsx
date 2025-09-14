
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
    <section id="contact" className="py-20 bg-[#0b0b0b]">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            Get In <span className="text-amber-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-base lg:text-lg max-w-3xl mx-auto">
            Ready to start your next project? Let's bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800 border border-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-6 lg:mb-8 leading-relaxed">
                I'm open to new opportunities, collaborations, or a quick chat about design and development.
              </p>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-gray-800">
                  <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base">Email</h4>
                    <a 
                      href="mailto:ashishgowdamj@gmail.com"
                      className="text-gray-300 hover:text-amber-400 transition-colors"
                    >
                      ashishgowdamj@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-gray-800">
                  <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base">Phone</h4>
                    <a 
                      href="tel:+916362032496"
                      className="text-gray-300 hover:text-amber-400 transition-colors"
                    >
                      +91 6362032496
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-gray-800">
                  <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base">Location</h4>
                    <p className="text-gray-300">Karnataka, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/ashishgowdamj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-gray-800 bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-6 h-6 text-gray-300" />
                  </a>
                  <a
                    href="https://linkedin.com/in/ashishgowdamj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-gray-800 bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-800 border border-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
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
                      className="w-full bg-gray-800 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors disabled:opacity-50"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
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
                      className="w-full bg-gray-800 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 font-semibold mb-2">
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
                    className="w-full bg-gray-800 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
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
                    className="w-full bg-gray-800 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors resize-none disabled:opacity-50"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-400 text-black font-semibold py-3 rounded-lg hover:bg-amber-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
