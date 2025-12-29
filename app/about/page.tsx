export default function About() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          {/* Profile Card */}
          <div className="tech-card mb-6 gradient-border">
            <div className="absolute top-0 left-0 w-full h-full grid-background opacity-10"></div>
            <div className="relative z-10">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center border-2 border-[var(--card-background)] shadow-lg">
                <span className="text-4xl font-bold text-white">JD</span>
              </div>
              <h2 className="text-xl font-semibold text-center mb-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">John Doe</h2>
              <p className="text-[var(--primary-color)] text-center mb-4 font-medium">Full Stack Developer</p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="#" 
                  className="text-[var(--text-color)]/70 hover:text-[var(--primary-color)] transition-all duration-300 flex items-center gap-1"
                >
                  <span className="text-[var(--primary-color)]">✦</span> Twitter
                </a>
                <a 
                  href="#" 
                  className="text-[var(--text-color)]/70 hover:text-[var(--primary-color)] transition-all duration-300 flex items-center gap-1"
                >
                  <span className="text-[var(--primary-color)]">✦</span> GitHub
                </a>
              </div>
            </div>
          </div>
          
          {/* Skills Card */}
          <div className="tech-card">
            <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
              <span className="text-[var(--primary-color)] text-xl">⚡</span> 
              Technical Skills
            </h3>
            <div className="space-y-4">
              {[
                { name: 'JavaScript', level: 90 },
                { name: 'React', level: 85 },
                { name: 'Next.js', level: 80 },
                { name: 'TypeScript', level: 75 },
                { name: 'Tailwind CSS', level: 70 },
                { name: 'Node.js', level: 75 },
                { name: 'Python', level: 65 },
                { name: 'MongoDB', level: 70 }
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-[var(--text-color)]">{skill.name}</span>
                    <span className="text-sm text-[var(--primary-color)]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[var(--border-color)] rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] h-2.5 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          {/* Biography */}
          <div className="tech-card mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-[var(--primary-color)]">📖</span> 
              Biography
            </h2>
            <div className="space-y-4 text-[var(--text-color)]/90">
              <p>
                Hello! I'm John Doe, a passionate full stack developer with over 5 years of experience building
                modern web applications. I specialize in React, Next.js, and TypeScript, and I love creating
                beautiful, responsive user interfaces that provide great user experiences.
              </p>
              <p>
                Throughout my career, I've worked on a variety of projects, from small personal blogs to large-scale
                enterprise applications. I'm always eager to learn new technologies and improve my skills, and I
                believe in writing clean, maintainable code that solves real problems.
              </p>
              <p>
                When I'm not coding, I enjoy hiking, reading, and spending time with my family. I also love sharing
                my knowledge with others through this blog, where I write about technology, programming, and other
                topics that interest me.
              </p>
            </div>
          </div>
          
          {/* Experience */}
          <div className="tech-card mb-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-[var(--primary-color)]">💼</span> 
              Work Experience
            </h2>
            <div className="space-y-8">
              {/* Experience Item 1 */}
              <div className="relative pl-8 border-l-2 border-[var(--border-color)] before:absolute before:top-0 before:left-[-9px] before:w-4 before:h-4 before:rounded-full before:bg-gradient-to-br before:from-[var(--primary-color)] before:to-[var(--secondary-color)] before:border-2 before:border-[var(--card-background)]">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">Senior Full Stack Developer</h3>
                  <span className="text-[var(--primary-color)] text-sm font-medium">2020 - Present</span>
                </div>
                <p className="text-[var(--primary-color)] mb-3 font-medium">Tech Company Inc.</p>
                <ul className="space-y-2 text-[var(--text-color)]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary-color)] mt-1">▹</span>
                    <span>Lead the development of a modern e-commerce platform using Next.js and TypeScript</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary-color)] mt-1">▹</span>
                    <span>Implemented responsive UI designs using Tailwind CSS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary-color)] mt-1">▹</span>
                    <span>Optimized application performance, resulting in 50% faster load times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary-color)] mt-1">▹</span>
                    <span>Mentored junior developers and conducted code reviews</span>
                  </li>
                </ul>
              </div>
              
              {/* Experience Item 2 */}
              <div className="relative pl-8 border-l-2 border-[var(--border-color)] before:absolute before:top-0 before:left-[-9px] before:w-4 before:h-4 before:rounded-full before:bg-gradient-to-br before:from-[var(--primary-color)] before:to-[var(--secondary-color)] before:border-2 before:border-[var(--card-background)]">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">Full Stack Developer</h3>
                  <span className="text-[var(--primary-color)] text-sm font-medium">2018 - 2020</span>
                </div>
                <p className="text-[var(--primary-color)] mb-3 font-medium">Startup Co.</p>
                <ul className="space-y-2 text-[var(--text-color)]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary-color)] mt-1">▹</span>
                    <span>Built and maintained a SaaS application using React and Node.js</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary-color)] mt-1">▹</span>
                    <span>Implemented user authentication and authorization systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary-color)] mt-1">▹</span>
                    <span>Worked with PostgreSQL and MongoDB databases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary-color)] mt-1">▹</span>
                    <span>Deployed applications to AWS and Heroku</span>
                  </li>
                </ul>
              </div>
              
              {/* Experience Item 3 */}
              <div className="relative pl-8 border-l-2 border-[var(--border-color)] before:absolute before:top-0 before:left-[-9px] before:w-4 before:h-4 before:rounded-full before:bg-gradient-to-br before:from-[var(--primary-color)] before:to-[var(--secondary-color)] before:border-2 before:border-[var(--card-background)]">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">Junior Web Developer</h3>
                  <span className="text-[var(--primary-color)] text-sm font-medium">2016 - 2018</span>
                </div>
                <p className="text-[var(--primary-color)] mb-3 font-medium">Web Solutions Ltd.</p>
                <ul className="space-y-2 text-[var(--text-color)]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary-color)] mt-1">▹</span>
                    <span>Developed responsive websites using HTML, CSS, and JavaScript</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary-color)] mt-1">▹</span>
                    <span>Worked with WordPress and other CMS platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary-color)] mt-1">▹</span>
                    <span>Assisted in the development of custom web applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Education */}
          <div className="tech-card">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-[var(--primary-color)]">🎓</span> 
              Education
            </h2>
            <div className="relative pl-8 border-l-2 border-[var(--border-color)] before:absolute before:top-0 before:left-[-9px] before:w-4 before:h-4 before:rounded-full before:bg-gradient-to-br before:from-[var(--primary-color)] before:to-[var(--secondary-color)] before:border-2 before:border-[var(--card-background)]">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">Bachelor of Science in Computer Science</h3>
                <span className="text-[var(--primary-color)] text-sm font-medium">2012 - 2016</span>
              </div>
              <p className="text-[var(--primary-color)] font-medium">University of Technology</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}