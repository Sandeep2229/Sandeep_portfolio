
import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceSectionProps {
  darkMode: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ darkMode }) => {
  const experiences = [
    {
      company: '6th Element Inc',
      role: 'Software Engineer (AI/ML)',
      period: 'Jan 2026 - Present',
      location: 'Austin, TX, USA',
      achievements: [
        'Architected high-performance microservices leveraging Go and Java, resulting in a 75% increase in application performance and a 40% decrease in latency, drastically improving operational efficiency',
        'Spearheaded cross-functional teams in Agile methodologies to design and implement Salesforce applications, enhancing workflows and reducing onboarding time by 50%, while boosting user engagement by 45%',
        'Integrated AI solutions into Salesforce through advanced problem-solving strategies, elevating customer engagement metrics by 35% and empowering data-driven decision-making',
        'Executed rigorous unit and integration testing, achieving 95% code coverage and slashing post-deployment defects by 80%, significantly enhancing application stability and reliability',
      ],
    },
    {
      company: 'RaisingHealth',
      role: 'Data Analyst',
      period: 'Jun 2025',
      location: 'Brooklyn, NY (Hybrid)',
      achievements: [
        'Built structured AppSheet data models to track health services across programs, improving data consistency by 95%',
        'Standardized raw community member data into clean, relational datasets, making information 90% more accessible',
        'Designed user-friendly AppSheet workflows for recording sessions and updating participant details with 93% accuracy',
        'Worked with program leads to turn operational needs into AppSheet features, creating tools 92% aligned with daily use',
      ],
    },
    {
      company: 'ExcelR Solutions',
      role: 'Data Scientist',
      period: 'Aug 2025',
      location: 'Hyderabad, India',
      achievements: [
        'Developed and fine-tuned stock price forecasting models for Reliance Industries using LSTM and ARIMA, reducing forecasting error by 22% and performing detailed EDA to uncover meaningful market trends',
        'Built an NLP-based Fake vs. Real News classifier using n-gram analysis and sentiment methods, achieving 95% classification accuracy on validation data',
        'Deployed the full solution through Streamlit for real-time user interaction and designed intuitive data visualizations to enhance model interpretability and overall user experience',
      ],
    },
    {
      company: 'National University Of Singapore (NUS)',
      role: 'Research Intern',
      period: 'Dec 2022',
      location: 'Singapore',
      achievements: [
        'Developed CNN models (ResNet, VGG) for fracture detection on MURA dataset, improving classification accuracy by 15%',
        'Deployed the model in a user-facing application for X-ray technicians, cutting down manual diagnostic time by 40%',
        'Collaborated with 5+ faculty and medical professionals enhancing diagnostic reliability by 15%, reducing inference time by 30%',
      ],
    },
    {
      company: 'Hewlett Packard Enterprise (HPE)',
      role: 'Software Engineer',
      period: 'Jan 2022',
      location: 'Singapore',
      achievements: [
        'Acquired comprehensive knowledge of data analytics concepts and their real-world applications, successfully deploying deep learning and machine learning models on Microsoft Azure, improving model deployment efficiency by 20%',
        'Led a small-scale project applying Spark Analytics to a complex dataset, enhancing data processing insights by 35%',
      ],
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
                <div className="flex flex-col md:flex-row md:items-center md:gap-2 mb-3">
                  <h4 className="text-lg font-medium opacity-80">{exp.company}</h4>
                  {exp.location && (
                    <span className="text-sm opacity-60">• {exp.location}</span>
                  )}
                </div>
                <ul className="space-y-2 mt-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="opacity-70 leading-relaxed text-sm flex items-start">
                      <span className="mr-2 mt-1.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
