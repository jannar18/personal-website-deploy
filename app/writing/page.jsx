import Link from 'next/link';
import { blogPosts } from '../../data/blog-posts';

export default function WritingPage() {
  return (
    <section style={{ animation: 'fadeIn 0.6s ease' }}>
      <h2 style={{
        fontSize: '32px',
        fontWeight: '300',
        marginBottom: '40px',
        color: '#3d3028',
        fontFamily: '"Cormorant Garamond", serif'
      }}>
        Writing
      </h2>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}>
        {[...blogPosts].reverse().map(post => (
          <Link key={post.id} href={`/writing/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <article
              style={{
                padding: '32px',
                background: 'rgba(255,255,255,0.5)',
                border: '1px solid rgba(205,180,155,0.25)',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              <div style={{
                fontSize: '12px',
                color: '#bc8f8f',
                marginBottom: '12px',
                letterSpacing: '1px'
              }}>
                {post.date}
              </div>

              <h3 style={{
                fontSize: '24px',
                fontWeight: '400',
                marginBottom: '16px',
                color: '#3d3028',
                fontFamily: '"Cormorant Garamond", serif'
              }}>
                {post.title}
              </h3>

              <p style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#5a4a3a',
                marginBottom: '16px'
              }}>
                {post.excerpt.length > 200 ? `${post.excerpt.substring(0, 200)}...` : post.excerpt}
              </p>

              <div style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap'
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
                position: 'absolute',
                top: '0',
                right: '0',
                width: '40px',
                height: '40px',
                borderTop: '2px solid rgba(188,143,143,0.3)',
                borderRight: '2px solid rgba(188,143,143,0.3)',
                opacity: 0.5
              }} />
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
