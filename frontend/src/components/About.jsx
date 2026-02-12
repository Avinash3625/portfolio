import React from 'react';
import { Mail, Phone, MapPin, Award } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-red-500 text-sm font-medium tracking-wider uppercase mb-3">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Background & Expertise
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
              {personalInfo.summary}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Contact Info */}
            <motion.div {...fadeUp} className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                  { icon: MapPin, label: "Location", value: personalInfo.location }
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-800/60 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-gray-400" size={18} />
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

              {/* Languages */}
              <div className="mt-8 pt-6 border-t border-gray-800/50">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Languages</div>
                <div className="flex gap-2">
                  {["English", "Telugu"].map((lang) => (
                    <span key={lang} className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-md">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Key Highlights */}
            <motion.div {...fadeUp} className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Award className="text-red-500" size={18} />
                Key Highlights
              </h3>
              <div className="space-y-5">
                {[
                  { title: "91% ML Model Accuracy", desc: "Production classifiers with 0.93 AUC on medical diagnostics" },
                  { title: "End-to-End ML Pipelines", desc: "From preprocessing to deployment using Streamlit and Flask" },
                  { title: "Cross-Domain Projects", desc: "Medical, agriculture, music recommendation, and water quality" },
                  { title: "Two Production Internships", desc: "SmartInternz and Edunet with real-world ML solutions" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="text-gray-200 font-medium text-sm">{item.title}</div>
                      <div className="text-gray-500 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interests */}
              <div className="mt-8 pt-6 border-t border-gray-800/50">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Interests</div>
                <div className="flex flex-wrap gap-2">
                  {["Web Technologies", "Android Updates", "Coding Challenges"].map((interest) => (
                    <span key={interest} className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-md">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;