import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Briefcase size={16} />
              My Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work <span className="text-red-400">Experience</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Building real-world solutions with machine learning and AI
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-red-500 to-transparent hidden md:block"></div>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-red-500 rounded-full border-4 border-black hidden md:block"></div>
                  
                  {/* Experience Card */}
                  <div className="md:ml-16 bg-gray-900/50 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-8 hover:border-gray-700/50 transition-all duration-300">
                    
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <div className="flex items-center gap-4 text-gray-400 mb-2">
                          <div className="flex items-center gap-2">
                            <Briefcase size={16} />
                            <span className="font-medium text-red-400">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                          {exp.type}
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start gap-3">
                            <CheckCircle className="text-red-400 mt-1 flex-shrink-0" size={16} />
                            <p className="text-gray-300 leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-6 pt-6 border-t border-gray-800/50">
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'NLP', 'Scikit-learn', 'TF-IDF', 'SVM', 'Streamlit'].map((tech) => (
                          <span 
                            key={tech}
                            className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-red-500/20 hover:text-red-400 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Seeking */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-red-500/20 to-transparent border border-red-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 font-medium">Currently Seeking</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Entry-Level Opportunities</h3>
              <p className="text-gray-300">
                Looking for ML/NLP/Data Science roles in product-focused teams where I can contribute to meaningful AI solutions
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;