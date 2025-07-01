
import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceSectionProps {
  darkMode: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ darkMode }) => {
  const experiences = [
    {
      company: 'RaisingHealth',
      role: 'Data Analyst Intern',
      period: '2025 - Present',
      description: 'Developed data pipelines and analytics dashboards for healthcare insights, improving decision-making processes by 40%.',
    },
    {
      company: 'Excelr Solutions',
      role: 'Data Scientist',
      period: '2024',
      description: 'Developed and deployed predictive models for stock price forecasting (LSTM, ARIMA) and fake news classification (NLP with n-gram and sentiment analysis), achieving a 22% reduction in forecasting error and 95% classification accuracy. Leveraged EDA and interactive Streamlit dashboards to uncover market trends, enhance model interpretability, and deliver a user-friendly experience.',
    },
    {
      company: 'National University of Singapore',
      role: 'Research Intern',
      period: '2023',
      description: 'Conducted research on AI applications in healthcare, published findings in peer-reviewed conferences.',
    },
    {
      company: 'Hewlett Packard Enterprise',
      role: 'Academic Intern',
      period: '2023',
      description: 'Built scalable cloud solutions using Kubernetes and Docker, optimized system performance by 35%.',
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Professional <span className="font-bold">Experience</span>
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30 mb-8 max-w-md mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-4 top-0 bottom-0 w-px ${
            darkMode ? 'bg-gradient-to-b from-blue-400 to-purple-500' : 'bg-gradient-to-b from-blue-600 to-purple-600'
          }`} />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="relative pl-12 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <motion.div
                className={`absolute left-2 top-2 w-4 h-4 rounded-full border-4 ${
                  darkMode 
                    ? 'bg-blue-400 border-black shadow-lg shadow-blue-400/50' 
                    : 'bg-blue-600 border-white shadow-lg shadow-blue-600/50'
                }`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              />

              <div className={`p-6 rounded-lg transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-white/5 border border-white/10 hover:border-white/20' 
                  : 'bg-black/5 border border-black/10 hover:border-black/20'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <span className="text-sm opacity-60 font-medium">{exp.period}</span>
                </div>
                <h4 className="text-lg font-medium mb-3 opacity-80">{exp.company}</h4>
                <p className="opacity-70 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
