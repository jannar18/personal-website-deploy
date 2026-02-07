'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'home', href: '/' },
  { label: 'about', href: '/about' },
  { label: 'writing', href: '/writing' },
  { label: 'projects', href: '/projects' },
  { label: 'archive', href: '/archive' },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header style={{
      marginBottom: '80px',
      borderBottom: '1px solid rgba(61,48,40,0.15)',
      paddingBottom: '40px',
      position: 'relative'
    }}>
      <div className="header-flex" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          <h1 className="site-title" style={{
            fontSize: '48px',
            fontWeight: '300',
            margin: '0 0 8px 0',
            letterSpacing: '-0.5px',
            fontFamily: '"Cormorant Garamond", "Noto Serif JP", serif'
          }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Learning to See
            </Link>
          </h1>
          <p style={{
            margin: 0,
            fontSize: '15px',
            color: '#8b7355',
            letterSpacing: '1px',
            fontWeight: '400'
          }}>
            Architecture × AI × Writing
          </p>
        </div>

        <nav className="nav-links" style={{
          display: 'flex',
          gap: '32px',
          fontSize: '14px',
          letterSpacing: '0.5px'
        }}>
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: isActive(href) ? '#3d3028' : '#9d8b7a',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                letterSpacing: 'inherit',
                padding: '8px 0',
                borderBottom: isActive(href) ? '2px solid #bc8f8f' : '2px solid transparent',
                transition: 'all 0.3s ease',
                textTransform: 'lowercase',
                textDecoration: 'none'
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <div style={{
        position: 'absolute',
        right: '0',
        top: '-20px',
        fontSize: '11px',
        color: '#bc8f8f',
        fontStyle: 'italic',
        opacity: 0.6
      }}>
        ※ in progress
      </div>
    </header>
  );
}
