
import React, { useRef, useState } from 'react';
import { Github, Linkedin, ArrowRight, Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";
import {
  FIELD_LIMITS,
  checkRateLimit,
  isSubmittedTooFast,
  recordSubmission,
  validateContactForm,
} from '@/lib/contactSecurity';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Message via Portfolio',
    message: '',
    website: '', // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const formOpenedAt = useRef(Date.now());
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot / timing: silent success for bots
    if (formData.website || isSubmittedTooFast(formOpenedAt.current)) {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: 'Message via Portfolio', message: '', website: '' });
      formOpenedAt.current = Date.now();
      return;
    }

    const rate = checkRateLimit();
    if (!rate.allowed) {
      toast({
        title: "Too many messages",
        description: `Please wait about ${rate.retryAfterMinutes} minute(s) before sending again.`,
        variant: "destructive",
      });
      return;
    }

    const validation = validateContactForm(formData);
    if (!validation.success) {
      setErrors(validation.errors);
      toast({
        title: "Please fix the highlighted fields",
        description: "Some details look missing or invalid.",
        variant: "destructive",
      });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      emailjs.init('d0agYK3ZKBPM89hYY');

      const templateParams = {
        from_name: validation.data.name,
        from_email: validation.data.email,
        subject: validation.data.subject,
        message: validation.data.message,
        to_name: 'Ashish',
        reply_to: validation.data.email,
      };

      const result = await emailjs.send(
        'service_96qciat',
        'template_bjeq1dx',
        templateParams,
        'd0agYK3ZKBPM89hYY'
      );

      if (result.status === 200) {
        recordSubmission();
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });

        setFormData({ name: '', email: '', subject: 'Message via Portfolio', message: '', website: '' });
        formOpenedAt.current = Date.now();
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
        <div className="mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">Let's Connect!</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form - left */}
          <div className="order-1">
            <div className="p-2">
              <h3 className="text-white font-semibold mb-4">Message Me</h3>
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot field — hidden from users */}
                <div
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', top: '-9999px', height: 0, width: 0, overflow: 'hidden' }}
                >
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={FIELD_LIMITS.name}
                      disabled={isSubmitting}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      autoComplete="name"
                      className={`w-full bg-[#1a1a1a] border rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400/60 transition disabled:opacity-50 ${errors.name ? 'border-red-500' : 'border-[#2a2a2a]'}`}
                      placeholder="Name"
                    />
                    {errors.name && <p id="name-error" className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={FIELD_LIMITS.email}
                      disabled={isSubmitting}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : 'email-help'}
                      autoComplete="email"
                      className={`w-full bg-[#1a1a1a] border rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400/60 transition disabled:opacity-50 ${errors.email ? 'border-red-500' : 'border-[#2a2a2a]'}`}
                      placeholder="Email"
                    />
                    <div className="mt-1 text-xs text-gray-500" id="email-help">I'll never share your email.</div>
                    {errors.email && <p id="email-error" className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    maxLength={FIELD_LIMITS.message}
                    disabled={isSubmitting}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full bg-[#1a1a1a] border rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400/60 transition resize-y disabled:opacity-50 ${errors.message ? 'border-red-500' : 'border-[#2a2a2a]'}`}
                    placeholder="Message"
                  />
                  {errors.message && <p id="message-error" className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information - right */}
          <div className="order-2">
            <div className="p-2">
              <h4 className="text-gray-300 font-semibold mb-3">Contact</h4>
              <div className="space-y-3 text-gray-300 text-sm mb-8">
                <a href="mailto:ashishgowdamj@gmail.com" className="flex items-center gap-3 hover:text-amber-400">
                  <Mail className="w-4 h-4" />
                  ashishgowdamj@gmail.com
                </a>
                <a href="tel:+916362032496" className="flex items-center gap-3 hover:text-amber-400">
                  <Phone className="w-4 h-4" />
                  +91 63620 32496
                </a>
              </div>

              {/* Schedule Call Button */}
              <div className="mt-6">
                <a
                  href="https://calendly.com/ashishgowdamj/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full
                             bg-[#062c23] text-emerald-300 font-medium shadow-md border border-[#0b4236]
                             transition-colors duration-200 hover:bg-[#0a3a2f]"
                >
                  Schedule a call
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <h4 className="text-gray-300 font-semibold mb-3">Social Media</h4>
                <div className="space-y-2 text-gray-300 text-sm">
                  <a href="https://x.com/ashishgowdamj" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-amber-400">
                    <img src="https://cdn.simpleicons.org/x/FFFFFF" alt="X" className="w-4 h-4" />
                    X
                  </a>
                  <a href="https://linkedin.com/in/ashishgowdamj" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-amber-400"><Linkedin className="w-4 h-4" />LinkedIn</a>
                  <a href="https://github.com/ashishgowdamj" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-amber-400"><Github className="w-4 h-4" />GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
