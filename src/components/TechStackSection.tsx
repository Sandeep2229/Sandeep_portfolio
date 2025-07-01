
import React from 'react';
import { motion } from 'framer-motion';

interface TechStackSectionProps {
  darkMode: boolean;
}

const TechStackSection: React.FC<TechStackSectionProps> = ({ darkMode }) => {
  const techStacks = {
    'Languages': ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
    'Backend': ['FastAPI', 'Node.js', 'Django', 'Express', 'GraphQL'],
    'Databases': ['PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch'],
    'Cloud & DevOps': ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform'],
    'AI/ML': ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
    'Frontend': ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Framer Motion'],
  };

  return (
    <section className="min-h-screen py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Tech <span className="font-bold">Stack</span>
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30 mb-8 max-w-md mx-auto" />
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStacks).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-white/5 border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10' 
                  : 'bg-black/5 border border-black/10 hover:border-black/20 hover:shadow-2xl hover:shadow-blue-500/10'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-center">{category}</h3>
              <div className="space-y-3">
                {techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    className={`px-4 py-2 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
                      darkMode 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30' 
                        : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      boxShadow: darkMode 
                        ? '0 0 20px rgba(59, 130, 246, 0.3)' 
                        : '0 0 20px rgba(59, 130, 246, 0.2)' 
                    }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStackSection;
