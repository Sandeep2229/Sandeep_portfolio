import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface ProjectsSectionProps {
  darkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  const { toast } = useToast();
  const projects = [
    {
      title: 'Care Companion',
      description: 'AI-powered webapp for medical teams to streamline patient care workflows and improve communication.',
      tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'AWS'],
      github: 'https://github.com/Sandeep2229/care-companion',
      demo: '#',
    },
    {
      title: 'DICOM Viewer Web App',
      description: 'A web application that allows users to upload and view DICOM medical images directly in the browser. Built with React and the Cornerstone.js suite, it displays both the image and important metadata from the uploaded DICOM file.',
      tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'AWS'],
      github: 'https://github.com/Sandeep2229/dicom-viewer-app',
      demo: '#',
    },
    {
      title: 'Graph-Aware Task Manager',
      description: 'Collaborative development workflow tool with intelligent task dependency mapping and team coordination.',
      tech: ['Node.js', 'GraphQL', 'MongoDB', 'React', 'Docker'],
      github: 'https://github.com/Sandeep2229/tiny-archives-task-manager',
      demo: '#',
    },
    {
      title: 'BoneFractureDetection',
      description: 'This project focuses on building a robust deep learning model to detect bone fractures from X-ray images and explores classification techniques using convolutional neural networks (CNNs) and evaluates model performance across various metrics.',
      tech: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'PostgreSQL'],
      github: 'https://github.com/Sandeep2229/BoneFractureDetection',
      demo: '#',
    },
    {
      title: 'Public Health Data Analysis',
      description: 'Comprehensive Python dashboards for analyzing public health trends and generating actionable insights. (Currently in progress)',
      tech: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'PostgreSQL'],
      github: '#',
      demo: '#',
    },
  ];

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
            Featured <span className="font-bold">Projects</span>
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30 mb-8 max-w-md mx-auto" />
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            A showcase of innovative solutions that blend cutting-edge technology with practical applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card 
                className={`h-full transition-all duration-300 hover:shadow-2xl cursor-pointer ${
                  darkMode
                    ? 'bg-white/5 border-white/10 hover:border-white/20 hover:shadow-blue-500/10 text-white'
                    : 'bg-white/90 border-gray-200/50 hover:border-gray-300/50 hover:shadow-blue-500/10 text-gray-900'
                }`}
                onClick={() => {
                  if (project.github && project.github !== '#') {
                    window.open(project.github, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                <CardHeader>
                  <CardTitle className={`text-xl font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </CardTitle>
                  <p className={`opacity-80 text-sm leading-relaxed ${
                    darkMode ? 'text-white/80' : 'text-gray-700'
                  }`}>
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode
                            ? 'bg-blue-500/20 text-blue-300'
                            : 'bg-blue-500/10 text-blue-700'
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full transition-all duration-300 group"
                        asChild
                      >
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (project.github === '#') {
                              e.preventDefault();
                            }
                          }}
                        >
                          <Github className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                          Code
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group relative overflow-hidden"
                        asChild={project.demo !== '#'}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (project.demo === '#') {
                            e.preventDefault();
                            toast({
                              title: "Demo not available",
                              description: `${project.title} demo is currently in development. Check back soon!`,
                            });
                          }
                        }}
                        disabled={project.demo === '#'}
                      >
                        {project.demo !== '#' ? (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                            Demo
                          </a>
                        ) : (
                          <span>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </span>
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
