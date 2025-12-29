import { notFound } from 'next/navigation';
import { getPostBySlug } from '../../../lib/posts';
import Comments from '../../../components/Comments';

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  tags: string[];
  slug: string;
}

interface Params {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Not Found',
    };
  }
  
  return {
    title: post.title,
    description: post.content.substring(0, 160),
  };
}

export default async function Post({ params }: { params: Params }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div>
      <article className="tech-card mb-8 gradient-border">
        <div className="absolute top-0 left-0 w-full h-full grid-background opacity-5"></div>
        <div className="relative z-10">
          <div className="flex flex-wrap mb-6">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mb-8 text-[var(--text-color)]/70">
            <span className="flex items-center gap-1">
              <span className="text-[var(--primary-color)]">📅</span> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <span className="text-[var(--primary-color)]">📝</span> {post.content.split(' ').length} words
            </span>
          </div>
          <div 
            className="prose prose-invert max-w-none text-[var(--text-color)]" 
            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
          />
        </div>
      </article>
      
      {/* Comments Section */}
      <div className="tech-card">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span className="text-[var(--primary-color)]">💬</span> Comments
        </h2>
        <Comments postId={post.id} />
      </div>
    </div>
  );
}