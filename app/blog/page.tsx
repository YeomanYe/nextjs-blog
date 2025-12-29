// Server Component - fetch data on the server
import { getPosts, getAllTags } from '@/lib/posts';
import PostCard from '@/components/PostCard';

const posts = await getPosts();
const tags = await getAllTags();

export default function Blog() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Articles</h1>

      {/* Search and Filter Section - will be converted to client component */}
      <div className="tech-card mb-8 gradient-border">
        <div className="absolute top-0 left-0 w-full h-full grid-background opacity-10"></div>
        <div className="relative z-10">
          {/* Simple search placeholder - will be replaced with client component */}
          <div className="mb-6">
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Search articles..."
                className="flex-grow px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent bg-[var(--card-background)] text-[var(--text-color)]"
                disabled
              />
              <button
                type="button"
                className="btn"
                disabled
              >
                <span className="flex items-center gap-1">
                  <span>🔍</span> Search
                </span>
              </button>
            </div>
          </div>

          {/* Tags and Sort - will be converted to client component */}
          <div className="flex flex-wrap justify-between items-center">
            {/* Tags */}
            <div className="flex flex-wrap items-center mb-4 md:mb-0 gap-2">
              <span className="text-sm font-medium text-[var(--text-color)]/90 whitespace-nowrap">Filter by tags:</span>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    disabled
                    className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--border-color)] text-[var(--text-color)]"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-[var(--text-color)]/90">Sort by:</span>
              <select
                className="px-4 py-1.5 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent bg-[var(--card-background)] text-[var(--text-color)] text-sm"
                disabled
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Section */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <p className="text-[var(--text-color)]/80">
            Showing <span className="font-medium text-[var(--primary-color)]">{posts.length}</span> article(s)
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}