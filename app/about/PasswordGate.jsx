'use client';

import { useState, useEffect } from 'react';

const SITE_PASSWORD = 'julianna2025';

export default function PasswordGate({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = sessionStorage.getItem('about_authenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === SITE_PASSWORD) {
      sessionStorage.setItem('about_authenticated', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (isLoading) {
    return null;
  }

  if (isAuthenticated) {
    return children;
  }

  return (
    <section style={{ animation: 'fadeIn 0.6s ease' }}>
      <div className="password-gate" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '300',
          marginBottom: '16px',
          color: '#3d3028',
          fontFamily: '"Cormorant Garamond", serif'
        }}>
          This page is protected
        </h2>
        <p style={{
          fontSize: '15px',
          color: '#9d8b7a',
          marginBottom: '32px',
          maxWidth: '400px',
          lineHeight: '1.6'
        }}>
          Enter the password to view this page.
        </p>
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          width: '100%',
          maxWidth: '320px'
        }}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '15px',
              border: '1px solid rgba(205,180,155,0.4)',
              borderRadius: '2px',
              background: 'rgba(255,255,255,0.6)',
              color: '#3d3028',
              fontFamily: '"Crimson Pro", serif',
              outline: 'none',
              transition: 'border-color 0.2s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#bc8f8f'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(205,180,155,0.4)'}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px 24px',
              fontSize: '14px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontWeight: '600',
              color: '#fff',
              background: '#8b7355',
              border: 'none',
              borderRadius: '2px',
              cursor: 'pointer',
              fontFamily: '"Crimson Pro", serif',
              transition: 'background 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.background = '#6b5740'}
            onMouseOut={(e) => e.target.style.background = '#8b7355'}
          >
            Enter
          </button>
          {error && (
            <p style={{
              fontSize: '14px',
              color: '#bc8f8f',
              margin: 0
            }}>
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
