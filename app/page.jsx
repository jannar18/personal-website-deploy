import Link from 'next/link';
import { blogPosts } from '../data/blog-posts';
import { projects } from '../data/projects';
import TodaysLog from './TodaysLog';

export default function HomePage() {
  const latestPost = blogPosts[blogPosts.length - 1];

  return (
    <section style={{ animation: 'fadeIn 0.6s ease' }}>
      {/* Intro */}
      <div style={{ marginBottom: '60px', maxWidth: '700px' }}>
        <p style={{
          fontSize: '19px',
          lineHeight: '1.7',
          color: '#3d3028',
          marginBottom: '24px'
        }}>
          Recent B. Arch graduate and architectural designer becoming an AI expert by implementing it into my daily practice with nothing but novice coding experience and Claude.
        </p>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.7',
          color: '#5a4a3a',
          margin: 0
        }}>
          This site collects my ongoing work, experiments, research notes and observations.
        </p>
      </div>

      {/* Current Focus */}
      <div style={{
        marginBottom: '60px',
        paddingBottom: '40px',
        borderBottom: '1px solid rgba(205,180,155,0.3)'
      }}>
        <h3 style={{
          fontSize: '14px',
          letterSpacing: '0.5px',
          color: '#8b7355',
          marginBottom: '16px',
          fontWeight: '600',
          textTransform: 'uppercase'
        }}>
          Current Focus
        </h3>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.7',
          color: '#5a4a3a',
          margin: 0
        }}>
          Integrating Claude into my daily motions, developing weekly reading and research practice, and publishing daily
        </p>
      </div>

      {/* Today's Log */}
      <TodaysLog />

      {/* Latest Writing */}
      <div style={{ marginBottom: '60px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '32px'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '400',
            color: '#3d3028',
            fontFamily: '"Cormorant Garamond", serif',
            margin: 0
          }}>
            Latest Writing
          </h3>
          <Link
            href="/writing"
            style={{
              background: 'none',
              border: 'none',
              color: '#bc8f8f',
              fontSize: '14px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              textDecoration: 'underline',
              padding: 0
            }}
          >
            View all →
          </Link>
        </div>

        <Link href={`/writing/${latestPost.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <article
            style={{
              padding: '40px',
              background: 'rgba(255,255,255,0.6)',
              border: '1px solid rgba(205,180,155,0.3)',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}
          >
            <div style={{
              fontSize: '12px',
              color: '#bc8f8f',
              marginBottom: '16px',
              letterSpacing: '1px'
            }}>
              {latestPost.date}
            </div>

            <h4 style={{
              fontSize: '32px',
              fontWeight: '400',
              marginBottom: '20px',
              color: '#3d3028',
              fontFamily: '"Cormorant Garamond", serif',
              lineHeight: '1.3'
            }}>
              {latestPost.title}
            </h4>

            <p style={{
              fontSize: '17px',
              lineHeight: '1.8',
              color: '#5a4a3a',
              marginBottom: '20px'
            }}>
              {latestPost.excerpt.length > 200
                ? `${latestPost.excerpt.substring(0, 200)}...`
                : latestPost.excerpt}
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {latestPost.tags.map(tag => (
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
              width: '50px',
              height: '50px',
              borderTop: '2px solid rgba(188,143,143,0.3)',
              borderRight: '2px solid rgba(188,143,143,0.3)'
            }} />
          </article>
        </Link>
      </div>

      {/* Recent Projects */}
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '32px'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '400',
            color: '#3d3028',
            fontFamily: '"Cormorant Garamond", serif',
            margin: 0
          }}>
            Recent Projects
          </h3>
          <Link
            href="/projects"
            style={{
              background: 'none',
              border: 'none',
              color: '#bc8f8f',
              fontSize: '14px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              textDecoration: 'underline',
              padding: 0
            }}
          >
            View all →
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {projects.map(project => (
            <Link key={project.id} href={`/projects/${project.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                style={{
                  padding: '28px',
                  background: 'rgba(255,255,255,0.4)',
                  border: '1px solid rgba(205,180,155,0.3)',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  fontSize: '11px',
                  color: '#bc8f8f',
                  marginBottom: '12px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  {project.type}
                </div>
                <h4 style={{
                  fontSize: '19px',
                  fontWeight: '400',
                  marginBottom: '10px',
                  color: '#3d3028',
                  fontFamily: '"Cormorant Garamond", serif'
                }}>
                  {project.title}
                </h4>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: '#5a4a3a',
                  marginBottom: '12px'
                }}>
                  {project.description}
                </p>
                <div style={{
                  fontSize: '12px',
                  color: '#9d8b7a',
                  borderTop: '1px solid rgba(205,180,155,0.2)',
                  paddingTop: '10px'
                }}>
                  PDF · 2025
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
