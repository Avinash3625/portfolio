import React, { useEffect, useState } from 'react';
import { Download, ArrowDown, Code, Database, Brain } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ["ML Engineer", "Data Scientist", "AI Developer", "Python Developer"];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-10 opacity-20 animate-bounce">
        <Code className="text-red-500" size={24} />
      </div>
      <div className="absolute top-32 right-16 opacity-20 animate-bounce" style={{animationDelay: '1s'}}>
        <Database className="text-red-500" size={24} />
      </div>
      <div className="absolute bottom-32 left-16 opacity-20 animate-bounce" style={{animationDelay: '2s'}}>
        <Brain className="text-red-500" size={24} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className={`text-left transform transition-all duration-1000 ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              
              <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-red-500/30">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                Available for opportunities
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-mono">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                  Avinash
                </span>
              </h1>

              <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-12 flex items-center">
                <span className="mr-3">A passionate</span>
                <span className="text-red-400 font-semibold min-w-fit">
                  {roles[currentRole]}
                </span>
                <span className="animate-pulse ml-1">|</span>
              </div>

              <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                {personalInfo.summary.slice(0, 200)}...
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download Resume
                </button>
                
                <button 
                  onClick={scrollToAbout}
                  className="border border-gray-600 hover:border-red-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  View My Work
                  <ArrowDown size={20} />
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">3+</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">90%</div>
                  <div className="text-sm text-gray-500">ML Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">2025</div>
                  <div className="text-sm text-gray-500">Graduate</div>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className={`relative transform transition-all duration-1000 delay-300 ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="relative">
                {/* Reflective Glass Container */}
                <div className="relative bg-gradient-to-br from-gray-900/30 via-gray-800/20 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-8 shadow-2xl shadow-black/50 
                     before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-white/5 before:pointer-events-none
                     after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-t after:from-black/20 after:via-transparent after:to-white/10 after:pointer-events-none">
                  
                  {/* Profile Image */}
                  <div className="relative mx-auto w-80 h-80 rounded-2xl overflow-hidden border-2 border-gray-800/50">
                    <img 
                      src={personalInfo.profileImage} 
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    B.Tech AI & ML
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                    <div className="bg-gray-800/80 backdrop-blur-sm text-gray-300 px-3 py-1 rounded-full text-xs">
                      Python
                    </div>
                    <div className="bg-gray-800/80 backdrop-blur-sm text-gray-300 px-3 py-1 rounded-full text-xs">
                      ML
                    </div>
                    <div className="bg-gray-800/80 backdrop-blur-sm text-gray-300 px-3 py-1 rounded-full text-xs">
                      NLP
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-4 left-4 w-full h-full bg-red-500/10 rounded-3xl"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400" size={24} />
      </div>
    </section>
  );
};

export default Hero;