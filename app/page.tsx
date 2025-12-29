import Link from 'next/link';
import { getPosts } from '../lib/posts';
import PostCard from '../components/PostCard';

export default async function Home() {
  const posts = await getPosts();
  
  return (
    <div>
      {/* Hero Section */}
      <section className="mb-16 relative overflow-hidden rounded-xl p-8 md:p-12 gradient-border">
        <div className="absolute inset-0 grid-background opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Welcome to TechBlog
          </h1>
          <p className="text-xl text-[var(--text-color)]/80 mb-8 max-w-2xl">
            Exploring the frontiers of technology, programming, and innovation. Stay updated with the latest trends and insights.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/blog" className="btn">
              Explore Articles
            </Link>
            <Link href="/projects" className="btn-secondary">
              View Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* Latest Posts Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Latest Articles</h2>
          <Link 
            href="/blog" 
            className="text-[var(--primary-color)] hover:text-[var(--accent-color)] transition-all duration-300 flex items-center gap-1"
          >
            View All <span className="text-[var(--accent-color)]">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="tech-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center text-white font-bold">
                01
              </div>
              <h3 className="text-xl font-medium">AI-Powered Analytics</h3>
            </div>
            <p className="text-[var(--text-color)]/80 mb-4">
              A modern analytics platform that leverages AI to provide actionable insights from complex data sets.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="tag">AI/ML</span>
              <span className="tag">Next.js</span>
              <span className="tag">Python</span>
            </div>
            <Link href="/projects" className="text-[var(--primary-color)] hover:text-[var(--accent-color)] transition-all duration-300 flex items-center gap-1">
              Learn more <span className="text-[var(--accent-color)]">→</span>
            </Link>
          </div>
          <div className="tech-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center text-white font-bold">
                02
              </div>
              <h3 className="text-xl font-medium">Decentralized App</h3>
            </div>
            <p className="text-[var(--text-color)]/80 mb-4">
              A decentralized application built on blockchain technology, enabling secure and transparent transactions.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="tag">Blockchain</span>
              <span className="tag">Solidity</span>
              <span className="tag">React</span>
            </div>
            <Link href="/projects" className="text-[var(--primary-color)] hover:text-[var(--accent-color)] transition-all duration-300 flex items-center gap-1">
              Learn more <span className="text-[var(--accent-color)]">→</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'].map((tech, index) => (
            <div 
              key={tech} 
              className="tech-card flex flex-col items-center justify-center py-6 text-center transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 flex items-center justify-center mb-3">
                <span className="text-[var(--primary-color)] text-2xl">{['⚛️', '🔷', '📘', '🎨', '🟢', '🍃'][index]}</span>
              </div>
              <h3 className="font-medium">{tech}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}