import React from 'react';
import { Code, Database, Brain, Zap, BarChart3, Award } from 'lucide-react';
import { skills, certifications } from '../data/mock';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    { icon: <Code size={20} />, title: "Programming", items: skills.programming, color: "text-blue-400" },
    { icon: <Database size={20} />, title: "Libraries & Frameworks", items: skills.libraries, color: "text-green-400" },
    { icon: <Brain size={20} />, title: "Machine Learning", items: skills.ml, color: "text-purple-400" },
    { icon: <BarChart3 size={20} />, title: "Visualization", items: skills.visualization, color: "text-orange-400" },
    { icon: <Zap size={20} />, title: "Tools", items: skills.tools, color: "text-yellow-400" }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-red-500 text-sm font-medium tracking-wider uppercase mb-3">Skills</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technical Expertise
            </h2>
            <p className="text-gray-500 max-w-2xl">
              Tools and technologies I use to build machine learning solutions.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 hover:border-gray-700/60 transition-colors duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={category.color}>{category.icon}</span>
                  <h3 className="text-white font-medium">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span key={skill} className="text-xs text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded-md border border-gray-700/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Award className="text-red-500" size={18} />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-5 hover:border-gray-700/60 transition-colors duration-200"
                >
                  <h4 className="text-white font-medium text-sm mb-1">{cert.name}</h4>
                  <p className="text-gray-500 text-xs">{cert.issuer} · {cert.year}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;