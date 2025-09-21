import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, Star } from 'lucide-react';
import { education } from '../data/mock';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <GraduationCap size={16} />
              Academic Background
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-red-400">Education</span> Journey
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Building a strong foundation in computer science and artificial intelligence
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-red-500 via-red-500/50 to-transparent hidden md:block"></div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={edu.id} className="relative">
                  
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-black hidden md:block ${
                    index === 0 ? 'bg-red-500' : 'bg-gray-600'
                  }`}></div>
                  
                  {/* Education Card */}
                  <div className={`md:ml-16 bg-gray-900/50 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-8 hover:border-gray-700/50 transition-all duration-300 ${
                    index === 0 ? 'ring-1 ring-red-500/20' : ''
                  }`}>
                    
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                        <div className="flex items-center gap-4 text-gray-400 mb-2">
                          <div className="flex items-center gap-2">
                            <GraduationCap size={16} />
                            <span className="font-medium text-red-400">{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar size={16} />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                      
                      {/* Grade/Score */}
                      <div className="mt-4 lg:mt-0">
                        {edu.cgpa && (
                          <div className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg text-center">
                            <div className="text-lg font-bold">{edu.cgpa}</div>
                            <div className="text-xs">CGPA</div>
                          </div>
                        )}
                        {edu.percentage && (
                          <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg text-center">
                            <div className="text-lg font-bold">{edu.percentage}</div>
                            <div className="text-xs">Percentage</div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Special Badge for Current Education */}
                    {index === 0 && (
                      <div className="mb-6">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-full text-sm font-medium">
                          <Star size={16} />
                          Specialization: AI & Machine Learning
                        </div>
                      </div>
                    )}

                    {/* Key Highlights for Current Education */}
                    {index === 0 && (
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Focus Areas</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-300">Machine Learning Algorithms</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-300">Natural Language Processing</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-300">Computer Vision</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-300">Data Science & Analytics</span>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Achievements Section */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="text-red-400" />
                Academic Highlights
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">2025</div>
                  <div className="text-gray-300 font-medium">Expected Graduation</div>
                  <div className="text-gray-500 text-sm">B.Tech AI & ML</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">7.0</div>
                  <div className="text-gray-300 font-medium">Current CGPA</div>
                  <div className="text-gray-500 text-sm">Out of 10.0</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">VIT</div>
                  <div className="text-gray-300 font-medium">Premier Institute</div>
                  <div className="text-gray-500 text-sm">Vellore, India</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;