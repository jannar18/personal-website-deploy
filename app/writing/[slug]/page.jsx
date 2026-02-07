import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '../../../data/blog-posts';
import BlogContentRenderer from '../../../components/BlogContentRenderer';
import FeedbackForm from './FeedbackForm';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Learning to See`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section style={{ animation: 'fadeIn 0.6s ease' }}>
      <Link
        href="/writing"
        style={{
          background: 'none',
          border: 'none',
          color: '#bc8f8f',
          fontSize: '14px',
          cursor: 'pointer',
          fontFamily: 'inherit',
          marginBottom: '40px',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none'
        }}
      >
        ← Back to Writing
      </Link>

      <article style={{ maxWidth: '700px' }}>
        <div style={{
          fontSize: '12px',
          color: '#bc8f8f',
          marginBottom: '16px',
          letterSpacing: '1px'
        }}>
          {post.date}
        </div>

        <h1 style={{
          fontSize: '36px',
          fontWeight: '400',
          marginBottom: '24px',
          color: '#3d3028',
          fontFamily: '"Cormorant Garamond", serif',
          lineHeight: '1.3'
        }}>
          {post.title}
        </h1>

        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '40px',
          paddingBottom: '40px',
          borderBottom: '1px solid rgba(205,180,155,0.3)'
        }}>
          {post.tags.map(tag => (
            <span
              key={tag}
              style={{
                fontSize: '12px',
                padding: '4px 12px',
                background: 'rgba(205,180,155,0.2)',
                color: '#8b7355',
                borderRadius: '2px',
                letterSpacing: '0.5px'
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div style={{
          fontSize: '17px',
          lineHeight: '1.9',
          color: '#3d3028'
        }}>
          <BlogContentRenderer content={post.content} />
        </div>
      </article>

      {/* Feedback Section */}
      <FeedbackForm postTitle={post.title} />
    </section>
  );
}
