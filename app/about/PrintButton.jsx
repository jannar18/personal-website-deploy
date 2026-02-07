'use client';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      style={{
        fontSize: '14px',
        color: '#bc8f8f',
        textDecoration: 'none',
        paddingBottom: '2px',
        background: 'none',
        border: 'none',
        borderBottom: '1px solid #bc8f8f',
        cursor: 'pointer',
        fontFamily: 'inherit'
      }}
    >
      Download PDF →
    </button>
  );
}
