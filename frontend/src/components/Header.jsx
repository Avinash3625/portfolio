import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Check which section is currently in view
      const sections = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
      
      // If we're at the very top, no section is active
      if (window.scrollY < 50) {
        setActiveSection('');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="text-2xl font-bold text-white font-mono">
            <span className="text-red-500">&lt;</span>
            SAR
            <span className="text-red-500">/&gt;</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const sectionName = item.href.replace('#', '');
              const isActive = activeSection === sectionName;
              
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-red-400' 
                      : 'text-gray-300 hover:text-red-400'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-400 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/Avinash3625" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/avinash-reddy-139380273" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:avinashreddy112295@gmail.com"
              className="text-gray-400 hover:text-red-400 transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-red-400 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="bg-gray-900/90 backdrop-blur-md rounded-lg border border-gray-800/50 p-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-medium text-left py-2"
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile Social Links */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
                  <a 
                    href="https://github.com/Avinash3625" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/avinash-reddy-139380273" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="mailto:avinashreddy112295@gmail.com"
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                  >
                    <Mail size={20} />
                  </a>
                  <a 
                    href="tel:+918919689676"
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                  >
                    <Phone size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;