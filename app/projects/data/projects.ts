import { Project } from './types';

export const allProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description:
      'A modern e-commerce platform built with Next.js and TypeScript, featuring a responsive design, user authentication, and payment integration.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Stripe',
      'MongoDB',
    ],
    link: '#',
    github: '#',
    icon: '🛒',
  },
  {
    id: '2',
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, built using React, Node.js, and Socket.io.',
    technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis'],
    link: '#',
    github: '#',
    icon: '📋',
  },
  {
    id: '3',
    title: 'Blogging Platform',
    description:
      'A full-featured blogging platform with markdown support, category management, and user commenting system.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'MongoDB',
    ],
    link: '#',
    github: '#',
    icon: '📝',
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing projects and skills, built with Next.js and Tailwind CSS.',
    technologies: ['Next.js', 'Tailwind CSS', 'React', 'TypeScript'],
    link: '#',
    github: '#',
    icon: '💼',
  },
  {
    id: '5',
    title: 'AI Chatbot',
    description:
      'An intelligent chatbot powered by machine learning, capable of understanding and responding to natural language queries.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'MongoDB'],
    link: '#',
    github: '#',
    icon: '🤖',
  },
  {
    id: '6',
    title: 'Weather App',
    description:
      'A real-time weather application that provides accurate weather forecasts and historical data visualization.',
    technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    link: '#',
    github: '#',
    icon: '🌤️',
  },
];
