import React from 'react';
import { Code, Database, Brain, Zap, TrendingUp, Award } from 'lucide-react';
import { skills, certifications } from '../data/mock';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-red-400" size={24} />,
      title: "Programming Languages",
      items: skills.programming,
      color: "red"
    },
    {
      icon: <Database className="text-blue-400" size={24} />,
      title: "Libraries & Frameworks", 
      items: skills.libraries,
      color: "blue"
    },
    {
      icon: <Brain className="text-purple-400" size={24} />,
      title: "Machine Learning",
      items: skills.ml,
      color: "purple"
    },
    {
      icon: <Zap className="text-yellow-400" size={24} />,
      title: "Tools & Technologies",
      items: skills.tools,
      color: "yellow"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <TrendingUp size={16} />
              Technical Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & <span className="text-red-400">Technologies</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive toolkit for building intelligent solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900/20 via-gray-800/10 to-gray-900/20 backdrop-blur-sm border border-gray-600/20 rounded-2xl p-8 
                   shadow-lg shadow-black/30 relative hover:shadow-xl hover:shadow-black/40 transition-all duration-300
                   before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/8 before:via-transparent before:to-white/3 before:pointer-events-none"
              >
                
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-${category.color}-500/20 rounded-lg flex items-center justify-center`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className={`group bg-gray-800/50 hover:bg-${category.color}-500/20 text-gray-300 hover:text-${category.color}-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent hover:border-${category.color}-500/30`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="bg-gray-900/30 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-8">
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Award className="text-green-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <div 
                  key={cert.id}
                  className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/30 transition-all duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-2">{cert.name}</h4>
                      <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                      <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {cert.year}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Skill Proficiency Highlights */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            
            <div className="text-center">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-400">90%</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Python & ML</h4>
              <p className="text-gray-400 text-sm">Advanced proficiency in Python programming and machine learning frameworks</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">85%</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">NLP & CV</h4>
              <p className="text-gray-400 text-sm">Strong experience in natural language processing and computer vision</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">80%</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Data Science</h4>
              <p className="text-gray-400 text-sm">Solid foundation in data analysis, visualization, and statistical modeling</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;