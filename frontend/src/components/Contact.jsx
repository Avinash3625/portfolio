import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
        setFormStatus('idle');
      }
    } catch {
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      setFormStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-red-500 text-sm font-medium tracking-wider uppercase mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-500 max-w-2xl">
              Interested in working together? Feel free to reach out.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">

            {/* Left — Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-7">
                <div className="space-y-5">
                  {[
                    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                    { icon: MapPin, label: "Location", value: personalInfo.location }
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-gray-800/60 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-gray-400" size={16} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-gray-300 hover:text-red-400 transition-colors text-sm">{item.value}</a>
                        ) : (
                          <div className="text-gray-300 text-sm">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Connect</div>
                <div className="flex gap-2">
                  {[
                    { icon: Github, href: `https://${personalInfo.github}`, label: "GitHub" },
                    { icon: Linkedin, href: `https://${personalInfo.linkedin}`, label: "LinkedIn" }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-gray-800/60 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-700/60 transition-colors duration-150"
                      aria-label={social.label}
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-7">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Name</label>
                      <input
                        type="text" id="name" name="name"
                        value={formData.name} onChange={handleChange} required
                        className="w-full px-4 py-2.5 bg-gray-800/40 border border-gray-700/40 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors duration-150"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Email</label>
                      <input
                        type="email" id="email" name="email"
                        value={formData.email} onChange={handleChange} required
                        className="w-full px-4 py-2.5 bg-gray-800/40 border border-gray-700/40 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors duration-150"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Subject</label>
                    <input
                      type="text" id="subject" name="subject"
                      value={formData.subject} onChange={handleChange} required
                      className="w-full px-4 py-2.5 bg-gray-800/40 border border-gray-700/40 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors duration-150"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      id="message" name="message"
                      value={formData.message} onChange={handleChange} required rows="4"
                      className="w-full px-4 py-2.5 bg-gray-800/40 border border-gray-700/40 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors duration-150 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="inline-flex items-center justify-center gap-2 w-full bg-red-500 hover:bg-red-600 disabled:opacity-60 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors duration-150"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>

                  {formStatus === 'success' && (
                    <div className="flex items-center gap-2 text-green-400 bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-sm">
                      <CheckCircle size={16} />
                      Message sent successfully!
                    </div>
                  )}
                  {formStatus === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-sm">
                      <AlertCircle size={16} />
                      Something went wrong. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
