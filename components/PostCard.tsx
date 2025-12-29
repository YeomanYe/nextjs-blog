import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
}

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="post-card">
      <div className="flex flex-wrap mb-3">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-semibold mb-2">
        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
          {post.title}
        </Link>
      </h3>
      <p className="text-gray-500 text-sm mb-3">{post.date}</p>
      <p className="text-gray-700 mb-4">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
        Read more →
      </Link>
    </div>
  );
}