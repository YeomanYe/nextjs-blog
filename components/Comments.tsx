'use client';

import { useEffect } from 'react';

interface CommentsProps {
  postId: string;
}

export default function Comments({ postId }: CommentsProps) {
  useEffect(() => {
    // Load Giscus script with dark theme
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    
    // Note: Replace these with your actual Giscus configuration
    // You can get these values by visiting https://giscus.app/ and configuring your repository
    script.setAttribute('data-repo', 'yourusername/your-repo');
    script.setAttribute('data-repo-id', 'YOUR_REPO_ID');
    script.setAttribute('data-category', 'Comments');
    script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'dark'); // Set to dark theme to match our design
    script.setAttribute('data-lang', 'en');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;
    
    const container = document.getElementById(`giscus-${postId}`);
    if (container) {
      container.innerHTML = '';
      container.appendChild(script);
    }
    
    // Cleanup script when component unmounts
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [postId]);
  
  return (
    <div className="mt-8">
      <div 
        id={`giscus-${postId}`} 
        className="bg-[var(--card-background)] rounded-lg shadow-lg p-6 border border-[var(--border-color)]"
      ></div>
      <div className="mt-4 text-center">
        <p className="text-sm text-[var(--text-color)]/60">
          Comments powered by <a 
            href="https://giscus.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[var(--primary-color)] hover:text-[var(--accent-color)] transition-all duration-300"
          >
            Giscus
          </a>
        </p>
        <div className="mt-2 text-xs text-[var(--text-color)]/50">
          <p>Note: To enable comments, you need to:</p>
          <ol className="list-decimal list-inside mt-1 space-y-0.5">
            <li>Create a public GitHub repository</li>
            <li>Enable Discussions in repository settings</li>
            <li>Install the Giscus app from <a href="https://giscus.app/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)]">giscus.app</a></li>
            <li>Configure Giscus and replace the placeholder values in the Comments component</li>
          </ol>
        </div>
      </div>
    </div>
  );
}