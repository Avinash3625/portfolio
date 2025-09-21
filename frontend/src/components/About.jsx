import React from 'react';
import { MapPin, Mail, Phone, Calendar, Award, Target } from 'lucide-react';
import { personalInfo } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Get to know me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-red-400">Me</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate about transforming data into intelligent solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Personal Info */}
            <div className="space-y-8">
              
              {/* About Description */}
              <div className="bg-gradient-to-br from-gray-900/20 via-gray-800/10 to-gray-900/20 backdrop-blur-sm border border-gray-600/20 rounded-2xl p-8 
                   shadow-lg shadow-black/30 relative
                   before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/5 before:via-transparent before:to-white/2 before:pointer-events-none">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="text-red-400" size={24} />
                  My Story
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {personalInfo.summary}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I'm passionate about leveraging machine learning and artificial intelligence 
                  to solve real-world problems. My journey in tech has been driven by curiosity 
                  and a desire to make meaningful contributions to the field of AI.
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-gray-900/20 via-gray-800/10 to-gray-900/20 backdrop-blur-sm border border-gray-600/20 rounded-2xl p-8 
                   shadow-lg shadow-black/30 relative
                   before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/5 before:via-transparent before:to-white/2 before:pointer-events-none">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="text-red-400" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-medium">Location</div>
                      <div className="text-gray-400">{personalInfo.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="text-red-400" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-gray-400 hover:text-red-400 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="text-red-400" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-medium">Phone</div>
                      <a 
                        href={`tel:${personalInfo.phone}`}
                        className="text-gray-400 hover:text-red-400 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - Skills & Achievements */}
            <div className="space-y-8">
              
              {/* Key Achievements */}
              <div className="bg-gradient-to-br from-gray-900/20 via-gray-800/10 to-gray-900/20 backdrop-blur-sm border border-gray-600/20 rounded-2xl p-8 
                   shadow-lg shadow-black/30 relative
                   before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/5 before:via-transparent before:to-white/2 before:pointer-events-none">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Award className="text-red-400" size={24} />
                  Key Achievements
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium">90% ML Model Accuracy</div>
                      <div className="text-gray-400 text-sm">Achieved high accuracy in SMS spam detection using NLP and ML techniques</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium">Deployed ML Prototypes</div>
                      <div className="text-gray-400 text-sm">Built and deployed multiple machine learning applications using Streamlit</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium">Cross-domain Projects</div>
                      <div className="text-gray-400 text-sm">Experience in water quality analysis, music recommendation, and agricultural tech</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium">Industry Collaboration</div>
                      <div className="text-gray-400 text-sm">Worked with mentors and stakeholders on real-world ML solutions</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Highlight */}
              <div className="bg-gradient-to-br from-gray-900/20 via-gray-800/10 to-gray-900/20 backdrop-blur-sm border border-gray-600/20 rounded-2xl p-8 
                   shadow-lg shadow-black/30 relative
                   before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/5 before:via-transparent before:to-white/2 before:pointer-events-none">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Calendar className="text-red-400" size={24} />
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-white font-semibold">B.Tech in Computer Science & Engineering</div>
                    <div className="text-red-400 font-medium">Specialization: AI & ML</div>
                    <div className="text-gray-400 text-sm">Vellore Institute of Technology</div>
                    <div className="text-gray-500 text-sm">2021 - 2025 | CGPA: 7.0/10</div>
                  </div>
                </div>
              </div>

              {/* Languages & Interests */}
              <div className="bg-gradient-to-br from-gray-900/20 via-gray-800/10 to-gray-900/20 backdrop-blur-sm border border-gray-600/20 rounded-2xl p-8 
                   shadow-lg shadow-black/30 relative
                   before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/5 before:via-transparent before:to-white/2 before:pointer-events-none">
                <h3 className="text-2xl font-bold text-white mb-6">Languages & Interests</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-white font-medium mb-2">Languages</div>
                    <div className="flex gap-2">
                      <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">English</span>
                      <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">Telugu</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-white font-medium mb-2">Interests</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">Web Technologies</span>
                      <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">Android Updates</span>
                      <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">Coding Challenges</span>
                    </div>
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

export default About;