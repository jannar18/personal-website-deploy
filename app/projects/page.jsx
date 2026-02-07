import Link from 'next/link';
import { projects } from '../../data/projects';

export default function ProjectsPage() {
  return (
    <section style={{ animation: 'fadeIn 0.6s ease' }}>
      <h2 style={{
        fontSize: '32px',
        fontWeight: '300',
        marginBottom: '40px',
        color: '#3d3028',
        fontFamily: '"Cormorant Garamond", serif'
      }}>
        Projects & Artifacts
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '28px'
      }}>
        {projects.map(project => (
          <Link key={project.id} href={`/projects/${project.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div
              style={{
                padding: '32px',
                background: 'rgba(255,255,255,0.4)',
                border: '1px solid rgba(205,180,155,0.3)',
                borderRadius: '2px',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              <div style={{
                fontSize: '11px',
                color: '#bc8f8f',
                marginBottom: '16px',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                {project.type}
              </div>

              <h3 style={{
                fontSize: '21px',
                fontWeight: '400',
                marginBottom: '12px',
                color: '#3d3028',
                fontFamily: '"Cormorant Garamond", serif'
              }}>
                {project.title}
              </h3>

              <p style={{
                fontSize: '15px',
                lineHeight: '1.7',
                color: '#5a4a3a',
                marginBottom: '16px'
              }}>
                {project.description}
              </p>

              <div style={{
                fontSize: '12px',
                color: '#9d8b7a',
                borderTop: '1px solid rgba(205,180,155,0.2)',
                paddingTop: '12px',
                marginTop: 'auto'
              }}>
                {project.date}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{
        marginTop: '48px',
        padding: '24px',
        background: 'rgba(205,180,155,0.15)',
        borderLeft: '3px solid #bc8f8f',
        fontSize: '14px',
        color: '#8b7355',
        fontStyle: 'italic'
      }}>
        More artifacts in development. This collection grows as research continues.
      </div>
    </section>
  );
}
