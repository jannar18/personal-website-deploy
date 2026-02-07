'use client';

import { useState } from 'react';

export default function Footer() {
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      setSubscribeStatus('Thanks for subscribing!');
      form.reset();
      setTimeout(() => setSubscribeStatus(''), 3000);
    } catch (error) {
      setSubscribeStatus('Something went wrong. Please try again.');
      setTimeout(() => setSubscribeStatus(''), 3000);
    }
  };

  return (
    <footer className="footer-container" style={{
      marginTop: '60px',
      paddingTop: '40px',
      borderTop: '1px solid rgba(61,48,40,0.15)',
      fontSize: '13px',
      color: '#9d8b7a'
    }}>
      <div style={{
        marginBottom: '32px',
        paddingBottom: '24px',
        borderBottom: '1px solid rgba(205,180,155,0.2)',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '13px',
          color: '#9d8b7a',
          marginBottom: '12px'
        }}>
          Get notified of new posts
        </p>
        <form
          name="subscribe"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubscribe}
          style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            maxWidth: '320px',
            margin: '0 auto',
            justifyContent: 'center'
          }}
        >
          <input type="hidden" name="form-name" value="subscribe" />
          <input type="hidden" name="bot-field" />
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            style={{
              flex: '1',
              minWidth: '180px',
              padding: '8px 12px',
              border: '1px solid rgba(205,180,155,0.4)',
              borderRadius: '2px',
              background: 'rgba(255,255,255,0.6)',
              fontSize: '13px',
              fontFamily: 'inherit',
              color: '#3d3028',
              outline: 'none'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '8px 16px',
              background: 'transparent',
              color: '#8b7355',
              border: '1px solid rgba(205,180,155,0.4)',
              borderRadius: '2px',
              fontSize: '13px',
              fontFamily: 'inherit',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#bc8f8f';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.borderColor = '#bc8f8f';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#8b7355';
              e.currentTarget.style.borderColor = 'rgba(205,180,155,0.4)';
            }}
          >
            Subscribe
          </button>
        </form>
        {subscribeStatus && (
          <p style={{ fontSize: '13px', color: '#8b7355', marginTop: '12px' }}>
            {subscribeStatus}
          </p>
        )}
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          © 2026 — Built with intention
        </div>
        <div style={{
          display: 'flex',
          gap: '24px'
        }}>
          <a href="https://linkedin.com/in/julianna-roberts-1118m/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>
            LinkedIn
          </a>
          <a href="https://github.com/jannar18" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>
            GitHub
          </a>
          <a href="mailto:juliannaroberts18@gmail.com" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
