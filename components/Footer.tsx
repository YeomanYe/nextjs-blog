export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[var(--card-background)] border-t border-[var(--border-color)] py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-[var(--text-color)]/70">© {currentYear} TechBlog. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
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
            <a 
              href="#" 
              className="text-[var(--text-color)]/70 hover:text-[var(--primary-color)] transition-all duration-300 flex items-center gap-1"
            >
              <span className="text-[var(--primary-color)]">✦</span> LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-[var(--text-color)]/50 text-sm">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}