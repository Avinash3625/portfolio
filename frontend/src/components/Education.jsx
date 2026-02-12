import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { education } from '../data/mock';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gray-900/50">
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
            <p className="text-red-500 text-sm font-medium tracking-wider uppercase mb-3">Education</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Academic Background
            </h2>
          </motion.div>

          {/* Education Cards */}
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-8 mb-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="text-red-500" size={22} />
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  </div>
                  <p className="text-red-400 font-medium mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {edu.duration}
                    </span>
                    {edu.location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        {edu.location}
                      </span>
                    )}
                  </div>
                </div>

                <div className="bg-gray-800/50 border border-gray-700/30 rounded-lg px-5 py-3 text-center">
                  <div className="text-2xl font-bold text-white">{edu.cgpa}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">CGPA</div>
                </div>
              </div>

              {/* Focus Areas */}
              {edu.degree.includes("AI") && (
                <div className="mt-6 pt-6 border-t border-gray-800/50">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Key Focus Areas</div>
                  <div className="flex flex-wrap gap-2">
                    {["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Data Structures", "Algorithms"].map((area) => (
                      <span key={area} className="text-xs text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded-md border border-gray-700/30">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Education;