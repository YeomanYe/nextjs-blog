interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
  icon: string;
}

export default function Projects() {
  // Mock data for projects with icons
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform built with Next.js and TypeScript, featuring a responsive design, user authentication, and payment integration.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'MongoDB'],
      link: '#',
      github: '#',
      icon: '🛒'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, built using React, Node.js, and Socket.io.',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis'],
      link: '#',
      github: '#',
      icon: '📋'
    },
    {
      id: '3',
      title: 'Blogging Platform',
      description: 'A full-featured blogging platform with markdown support, category management, and user commenting system.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
      link: '#',
      github: '#',
      icon: '📝'
    },
    {
      id: '4',
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects and skills, built with Next.js and Tailwind CSS.',
      technologies: ['Next.js', 'Tailwind CSS', 'React', 'TypeScript'],
      link: '#',
      github: '#',
      icon: '💼'
    },
    {
      id: '5',
      title: 'AI Chatbot',
      description: 'An intelligent chatbot powered by machine learning, capable of understanding and responding to natural language queries.',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'MongoDB'],
      link: '#',
      github: '#',
      icon: '🤖'
    },
    {
      id: '6',
      title: 'Weather App',
      description: 'A real-time weather application that provides accurate weather forecasts and historical data visualization.',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
      link: '#',
      github: '#',
      icon: '🌤️'
    }
  ];
  
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="tech-card group">
            <div className="absolute top-0 left-0 w-full h-full grid-background opacity-10 transition-opacity duration-300 group-hover:opacity-20"></div>
            <div className="relative z-10">
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 flex items-center justify-center text-2xl">
                    {project.icon}
                  </div>
                  <h2 className="text-xl font-semibold bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
                    {project.title}
                  </h2>
                </div>
                <div className="flex space-x-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors flex items-center gap-1"
                    aria-label="GitHub"
                  >
                    <span className="text-[var(--primary-color)]">✦</span> GitHub
                  </a>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors flex items-center gap-1"
                    aria-label="Live Demo"
                  >
                    <span className="text-[var(--primary-color)]">✦</span> Demo
                  </a>
                </div>
              </div>
              
              {/* Project Description */}
              <p className="text-[var(--text-color)]/80 mb-5 line-clamp-3">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}