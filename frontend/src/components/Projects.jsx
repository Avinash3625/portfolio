import React, { useState } from 'react';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { projects } from '../data/mock';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Machine Learning', 'Recommendation System', 'Computer Vision'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-gray-900/50">
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
            <p className="text-red-500 text-sm font-medium tracking-wider uppercase mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-500 max-w-2xl">
              A selection of projects spanning machine learning, computer vision, and data science.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors duration-150 ${activeCategory === cat
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-7 hover:border-gray-700/60 transition-colors duration-200 group"
                >
                  {/* Title & Links */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <div className="flex gap-1.5 ml-4 flex-shrink-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-gray-800/60 rounded-md flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-700/60 transition-colors duration-150"
                        >
                          <Github size={15} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-gray-800/60 rounded-md flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-700/60 transition-colors duration-150"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-4">
                    <Calendar size={12} />
                    {project.duration}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs text-gray-500 bg-gray-800/50 px-2.5 py-1 rounded-md border border-gray-700/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* GitHub link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center mt-10"
          >
            <a
              href="https://github.com/Avinash3625?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-red-400 text-sm font-medium transition-colors duration-200"
            >
              <Github size={16} />
              View all projects on GitHub →
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;