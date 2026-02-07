export default function SessionLog({ session }) {
  return (
    <div style={{
      marginBottom: '24px',
      borderRadius: '6px',
      overflow: 'hidden',
      border: '1px solid rgba(139,115,85,0.25)',
      boxShadow: '0 2px 8px rgba(61,48,40,0.06)'
    }}>
      <div style={{
        background: 'rgba(139,115,85,0.12)',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        borderBottom: '1px solid rgba(139,115,85,0.15)'
      }}>
        <div style={{ display: 'flex', gap: '5px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(188,143,143,0.5)' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(205,180,155,0.5)' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(139,115,85,0.4)' }} />
        </div>
        <span style={{
          color: '#8b7355',
          fontSize: '12px',
          fontFamily: '"SF Mono", "Fira Code", monospace',
          marginLeft: '10px'
        }}>
          {session.title} — {session.date}
        </span>
      </div>
      <div style={{
        padding: '24px 28px',
        background: 'rgba(255,255,255,0.4)',
        fontFamily: '"SF Mono", "Fira Code", monospace',
        color: '#3d3028',
        fontSize: '13px',
        lineHeight: '1.9'
      }}>
        <p style={{ margin: '0 0 6px 0' }}><span style={{ color: '#8b7355' }}>Branch:</span> {session.branch}</p>
        <p style={{ margin: '0 0 14px 0' }}><span style={{ color: '#8b7355' }}>Focus:</span> {session.focus}</p>

        {session.content.map((item, idx) => {
          if (item.type === 'section') {
            return (
              <p key={idx} style={{ margin: '14px 0 10px 0', color: '#8b7355' }}>{item.text}</p>
            );
          }
          if (item.type === 'label') {
            return (
              <p key={idx} style={{ margin: '8px 0 4px 0' }}><span style={{ color: '#8b7355' }}>{item.text}</span></p>
            );
          }
          return (
            <p key={idx} style={{ margin: '0 0 4px 0' }}>{item.text}</p>
          );
        })}
      </div>
    </div>
  );
}
