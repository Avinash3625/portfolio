import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-800/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-24 bg-red-500/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-white font-mono">
                <span className="text-red-500">&lt;</span>
                Seelam Avinash Reddy
                <span className="text-red-500">/&gt;</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Aspiring Machine Learning Engineer passionate about building intelligent solutions 
                that make a meaningful impact. Always learning, always growing.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { href: '#about', label: 'About' },
                  { href: '#experience', label: 'Experience' },
                  { href: '#projects', label: 'Projects' },
                  { href: '#skills', label: 'Skills' },
                  { href: '#education', label: 'Education' },
                  { href: '#contact', label: 'Contact' }
                ].map((link) => (
                  <button
                    key={link.href}
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Get In Touch</h4>
              <div className="space-y-3">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm"
                >
                  <Mail size={16} />
                  {personalInfo.email}
                </a>
                
                <div className="flex items-center gap-4 pt-2">
                  <a 
                    href={`https://${personalInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 hover:bg-red-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-400 transition-all duration-200"
                  >
                    <Github size={18} />
                  </a>
                  
                  <a 
                    href={`https://${personalInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 hover:bg-blue-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-200"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-gray-800/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span>&copy; 2025 Seelam Avinash Reddy. Made with</span>
                <Heart className="text-red-500" size={16} fill="currentColor" />
                <span>and lots of coffee</span>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 bg-gray-800/50 hover:bg-red-500/20 text-gray-400 hover:text-red-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              >
                <ArrowUp size={16} />
                Back to Top
              </button>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;