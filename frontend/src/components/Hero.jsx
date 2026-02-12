import React, { useEffect, useState, useCallback } from 'react';
import { Download, ArrowDown, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { motion } from 'framer-motion';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ["ML Engineer", "Data Scientist", "AI Developer", "Python Developer"];

  const typeWriter = useCallback(() => {
    const current = roles[currentRole];
    if (!isDeleting) {
      setDisplayText(current.substring(0, displayText.length + 1));
      if (displayText.length === current.length) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      setDisplayText(current.substring(0, displayText.length - 1));
      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
        return;
      }
    }
  }, [displayText, currentRole, isDeleting, roles]);

  useEffect(() => {
    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(typeWriter, speed);
    return () => clearTimeout(timer);
  }, [typeWriter, isDeleting]);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }
  });

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 pt-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-red-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-red-500/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — Content */}
            <div className="text-left">

              <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 bg-gray-800/60 text-gray-400 px-4 py-1.5 rounded-full text-sm mb-8 border border-gray-700/40">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                Open to opportunities
              </motion.div>

              <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
                Hi, I'm{' '}
                <span className="text-red-500">Avinash</span>
              </motion.h1>

              <motion.div {...fadeUp(0.2)} className="text-xl md:text-2xl text-gray-400 mb-6 h-10 flex items-center font-light">
                <span className="mr-2">A passionate</span>
                <span className="text-red-400 font-medium" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {displayText}
                </span>
                <span className="animate-pulse ml-0.5 text-red-400">|</span>
              </motion.div>

              <motion.p {...fadeUp(0.3)} className="text-gray-500 text-lg mb-10 max-w-xl leading-relaxed">
                {personalInfo.summary.slice(0, 180)}...
              </motion.p>

              <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/Seelam_Avinash_Reddy_Resume.pdf"
                  download="Seelam_Avinash_Reddy_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  <Download size={18} />
                  Download Resume
                </a>
                <button
                  onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  Learn More
                  <ChevronRight size={16} />
                </button>
              </motion.div>

              {/* Stats — clean, understated */}
              <motion.div {...fadeUp(0.5)} className="flex gap-10 mt-12">
                {[
                  { value: "4+", label: "Projects" },
                  { value: "91%", label: "ML Accuracy" },
                  { value: "2025", label: "Graduate" }
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Profile Card */}
                <div className="relative bg-gray-900/60 border border-gray-800/60 rounded-2xl p-8 backdrop-blur-sm">

                  {/* Circular image with clean border */}
                  <div className="relative mx-auto w-64 h-64 md:w-72 md:h-72 mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/10 p-[2px]">
                      <div className="w-full h-full rounded-full bg-gray-900 p-[2px]">
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                          <img
                            src={personalInfo.profileImage}
                            alt={personalInfo.name}
                            className="w-full h-full object-cover object-top"
                            style={{ filter: 'contrast(1.05) brightness(0.92)' }}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-700 items-center justify-center text-6xl font-bold text-white hidden rounded-full" style={{ display: 'none' }}>
                            SAR
                          </div>
                          {/* Subtle overlay to blend with dark theme */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Name & title under image */}
                  <div className="text-center">
                    <h2 className="text-xl font-semibold text-white">{personalInfo.name}</h2>
                    <p className="text-red-400 text-sm mt-1">B.Tech — AI & Machine Learning</p>
                    <p className="text-gray-500 text-sm mt-1">{personalInfo.location}</p>
                  </div>

                  {/* Quick tech tags */}
                  <div className="flex justify-center gap-2 mt-5">
                    {["Python", "ML", "NLP", "CV"].map((tech) => (
                      <span key={tech} className="text-xs text-gray-500 bg-gray-800/60 px-3 py-1 rounded-full border border-gray-700/40">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-gray-600" size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
