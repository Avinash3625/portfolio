import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { experience } from '../data/mock';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-red-500 text-sm font-medium tracking-wider uppercase mb-3">Experience</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Work Experience
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gray-800 hidden md:block" />

            <div className="space-y-10">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative md:pl-14"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-3 top-2 w-3.5 h-3.5 bg-red-500 rounded-full border-[3px] border-gray-950 hidden md:block" />

                  <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-8 hover:border-gray-700/60 transition-colors duration-200">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-gray-400 mt-1">
                          <Briefcase size={14} />
                          <span className="text-red-400 font-medium text-sm">{exp.company}</span>
                          <span className="text-gray-600">·</span>
                          <span className="text-sm text-gray-500">{exp.type}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500 text-sm whitespace-nowrap">
                        <Calendar size={13} />
                        {exp.duration}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="text-green-500/70 flex-shrink-0 mt-0.5" size={15} />
                          <span className="text-gray-400 text-sm leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="text-xs text-gray-500 bg-gray-800/50 px-2.5 py-1 rounded-md border border-gray-700/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;