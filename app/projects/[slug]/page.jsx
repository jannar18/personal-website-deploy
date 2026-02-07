import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '../../../data/projects';
import PortfolioViewer from '../../../components/PortfolioViewer';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Learning to See`,
    description: project.description,
  };
}

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section style={{ animation: 'fadeIn 0.6s ease' }}>
      <Link
        href="/projects"
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
        ← Back to Projects
      </Link>

      <article>
        <div style={{
          fontSize: '12px',
          color: '#bc8f8f',
          marginBottom: '16px',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}>
          {project.type} · {project.date}
        </div>

        <h1 style={{
          fontSize: '36px',
          fontWeight: '400',
          marginBottom: '24px',
          color: '#3d3028',
          fontFamily: '"Cormorant Garamond", serif',
          lineHeight: '1.3'
        }}>
          {project.title}
        </h1>

        <p style={{
          fontSize: '17px',
          lineHeight: '1.8',
          color: '#5a4a3a',
          marginBottom: '32px',
          maxWidth: '700px'
        }}>
          {project.description}
        </p>

        <PortfolioViewer pdfUrl={project.pdfUrl} title={project.title} />
      </article>
    </section>
  );
}
