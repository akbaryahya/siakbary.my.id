import React, { useState } from 'react';
import projects from '../data/projectData';
import { ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Projects: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`transition-all duration-1000 transform ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-52 md:h-64 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredProject === project.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-500 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-70'
                  }`}></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-blue-600/80 text-white px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Visit Project <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;