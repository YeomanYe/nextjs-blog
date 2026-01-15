import { PersonalInfo, Skill, Experience, Education } from './types';

// Personal information
export const personalInfo: PersonalInfo = {
  name: 'John Doe',
  initials: 'JD',
  title: 'Full Stack Developer',
  bio: [
    'Hello! I\'m John Doe, a passionate full stack developer with over 5 years of experience building modern web applications. I specialize in React, Next.js, and TypeScript, and I love creating beautiful, responsive user interfaces that provide great user experiences.',
    'Throughout my career, I\'ve worked on a variety of projects, from small personal blogs to large-scale enterprise applications. I\'m always eager to learn new technologies and improve my skills, and I believe in writing clean, maintainable code that solves real problems.',
    'When I\'m not coding, I enjoy hiking, reading, and spending time with my family. I also love sharing my knowledge with others through this blog, where I write about technology, programming, and other topics that interest me.'
  ],
  socialLinks: [
    { name: 'Twitter', url: '#' },
    { name: 'GitHub', url: '#' }
  ]
};

// Skills
export const skills: Skill[] = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Tailwind CSS', level: 70 },
  { name: 'Node.js', level: 75 },
  { name: 'Python', level: 65 },
  { name: 'MongoDB', level: 70 }
];

// Work experience
export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'Tech Company Inc.',
    period: '2020 - Present',
    responsibilities: [
      'Lead the development of a modern e-commerce platform using Next.js and TypeScript',
      'Implemented responsive UI designs using Tailwind CSS',
      'Optimized application performance, resulting in 50% faster load times',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'Startup Co.',
    period: '2018 - 2020',
    responsibilities: [
      'Built and maintained a SaaS application using React and Node.js',
      'Implemented user authentication and authorization systems',
      'Worked with PostgreSQL and MongoDB databases',
      'Deployed applications to AWS and Heroku'
    ]
  },
  {
    id: '3',
    title: 'Junior Web Developer',
    company: 'Web Solutions Ltd.',
    period: '2016 - 2018',
    responsibilities: [
      'Developed responsive websites using HTML, CSS, and JavaScript',
      'Worked with WordPress and other CMS platforms',
      'Assisted in the development of custom web applications'
    ]
  }
];

// Education
export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    period: '2012 - 2016'
  }
];
