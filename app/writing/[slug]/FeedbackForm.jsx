'use client';

import { useState } from 'react';

export default function FeedbackForm({ postTitle }) {
  const [feedbackStatus, setFeedbackStatus] = useState('');

  const handleFeedback = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      setFeedbackStatus('Thanks for your feedback!');
      form.reset();
      setTimeout(() => setFeedbackStatus(''), 3000);
    } catch (error) {
      setFeedbackStatus('Something went wrong. Please try again.');
      setTimeout(() => setFeedbackStatus(''), 3000);
    }
  };

  return (
    <div style={{
      marginTop: '64px',
      paddingTop: '32px',
      borderTop: '1px solid rgba(205,180,155,0.3)'
    }}>
      <h4 style={{
        fontSize: '18px',
        fontWeight: '400',
        color: '#3d3028',
        fontFamily: '"Cormorant Garamond", serif',
        marginBottom: '8px'
      }}>
        What did you think?
      </h4>
      <p style={{
        fontSize: '14px',
        color: '#8b7355',
        marginBottom: '20px'
      }}>
        I&apos;d love to hear your thoughts on this post
      </p>
      <form
        name="feedback"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleFeedback}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          maxWidth: '500px'
        }}
      >
        <input type="hidden" name="form-name" value="feedback" />
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="post-title" value={postTitle} />
        <input
          type="text"
          name="name"
          placeholder="Your name (optional)"
          style={{
            padding: '10px 14px',
            border: '1px solid rgba(205,180,155,0.4)',
            borderRadius: '2px',
            background: 'rgba(255,255,255,0.6)',
            fontSize: '14px',
            fontFamily: 'inherit',
            color: '#3d3028',
            outline: 'none'
          }}
        />
        <textarea
          name="message"
          placeholder="Share your thoughts..."
          required
          rows={4}
          style={{
            padding: '10px 14px',
            border: '1px solid rgba(205,180,155,0.4)',
            borderRadius: '2px',
            background: 'rgba(255,255,255,0.6)',
            fontSize: '14px',
            fontFamily: 'inherit',
            color: '#3d3028',
            outline: 'none',
            resize: 'vertical'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            background: 'transparent',
            color: '#8b7355',
            border: '1px solid rgba(205,180,155,0.4)',
            borderRadius: '2px',
            fontSize: '14px',
            fontFamily: 'inherit',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            alignSelf: 'flex-start'
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
          Send Feedback
        </button>
      </form>
      {feedbackStatus && (
        <p style={{ fontSize: '14px', color: '#8b7355', marginTop: '12px' }}>
          {feedbackStatus}
        </p>
      )}
    </div>
  );
}
