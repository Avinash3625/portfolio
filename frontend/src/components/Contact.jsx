import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Send size={16} />
              Let's Connect
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-red-400">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to collaborate on exciting ML projects or discuss opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Cards */}
              <div className="space-y-6">
                
                {/* Email */}
                <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-200 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/30 transition-colors duration-200">
                      <Mail className="text-red-400" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-200 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/30 transition-colors duration-200">
                      <Phone className="text-red-400" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <a 
                        href={`tel:${personalInfo.phone}`}
                        className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="text-red-400" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">Location</h3>
                      <p className="text-gray-400">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Links */}
              <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Connect with me</h3>
                
                <div className="space-y-4">
                  {/* GitHub */}
                  <a 
                    href={`https://${personalInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-200 group"
                  >
                    <Github className="text-gray-400 group-hover:text-white" size={24} />
                    <div>
                      <div className="text-white font-medium">GitHub</div>
                      <div className="text-gray-400 text-sm">{personalInfo.github}</div>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href={`https://${personalInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-200 group"
                  >
                    <Linkedin className="text-gray-400 group-hover:text-blue-400" size={24} />
                    <div>
                      <div className="text-white font-medium">LinkedIn</div>
                      <div className="text-gray-400 text-sm">{personalInfo.linkedin}</div>
                    </div>
                  </a>
                </div>

              </div>

            </div>

            {/* Call to Action */}
            <div className="space-y-8">
              
              {/* Availability Status */}
              <div className="bg-gradient-to-r from-green-500/20 to-transparent border border-green-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Available for Opportunities</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing Together!</h3>
                <p className="text-gray-300 mb-6">
                  I'm actively seeking entry-level positions in Machine Learning, NLP, and Data Science. 
                  Whether it's a full-time role, internship, or exciting project collaboration, I'd love to hear from you!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`mailto:${personalInfo.email}?subject=Opportunity Discussion&body=Hi Avinash, I'd like to discuss a potential opportunity with you.`}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </a>
                  
                  <button className="border border-gray-600 hover:border-red-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                    <Download size={18} />
                    Download Resume
                  </button>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Quick Facts</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Graduation</span>
                    <span className="text-white font-medium">June 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Specialization</span>
                    <span className="text-white font-medium">AI & ML</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Experience</span>
                    <span className="text-white font-medium">ML Projects + Internship</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Preferred Role</span>
                    <span className="text-white font-medium">ML Engineer</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Location</span>
                    <span className="text-white font-medium">Open to relocate</span>
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

export default Contact;