'use client';

import { todaysLog } from '../data/sessions';

export default function TodaysLog() {
  const log = todaysLog;

  return (
    <div style={{
      marginBottom: '60px',
      borderRadius: '6px',
      overflow: 'hidden',
      border: '1px solid rgba(139,115,85,0.25)',
      boxShadow: '0 2px 8px rgba(61,48,40,0.06)'
    }}>
      {/* Window Title Bar */}
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
          CHANGELOG.md
        </span>
      </div>
      {/* Window Content */}
      <div style={{
        padding: '24px 28px',
        background: 'rgba(255,255,255,0.4)',
        fontFamily: '"SF Mono", "Fira Code", monospace',
        color: '#3d3028',
        fontSize: '13px',
        lineHeight: '1.9'
      }}>
        <p style={{ margin: '0 0 6px 0' }}><span style={{ color: '#8b7355' }}>Session {log.sessionNumber}:</span> {log.date}</p>
        <p style={{ margin: '0 0 6px 0' }}><span style={{ color: '#8b7355' }}>Branch:</span> {log.branch}</p>
        <p style={{ margin: '0 0 14px 0' }}><span style={{ color: '#8b7355' }}>Focus:</span> {log.focus}</p>

        <p style={{ margin: '14px 0 10px 0', color: '#8b7355' }}>### Goals</p>
        {log.goals.map((group, gi) => (
          <div key={gi}>
            <p style={{ margin: '8px 0 4px 0' }}><span style={{ color: '#8b7355' }}>{group.label}</span></p>
            {group.items.map((item, ii) => (
              <p key={ii} style={{ margin: '0 0 4px 0' }}>- [{item.done ? 'x' : ' '}] {item.text}</p>
            ))}
          </div>
        ))}

        <p style={{ margin: '14px 0 10px 0', color: '#8b7355' }}>### Changes</p>
        {log.changes.map((change, ci) => (
          <p key={ci} style={{ margin: '0 0 4px 0' }}>- {change}</p>
        ))}

        <p style={{ margin: '14px 0 10px 0', color: '#8b7355' }}>### Workflow Analysis</p>
        {log.workflowAnalysis.map((line, wi) => (
          <p key={wi} style={{ margin: '0 0 4px 0' }}>{line}</p>
        ))}

        <p style={{ margin: '14px 0 10px 0', color: '#8b7355' }}>### New Workflow Established</p>
        {log.newWorkflow.map((step, si) => (
          <p key={si} style={{ margin: '0 0 4px 0' }}>{step}</p>
        ))}

        <p style={{ margin: '14px 0 10px 0', color: '#8b7355' }}>### Risk Assessment</p>
        <p style={{ margin: '0 0 4px 0' }}><span style={{ color: '#8b7355' }}>What Claude can access:</span></p>
        {log.riskAssessment.access.map((item, ai) => (
          <p key={ai} style={{ margin: '0 0 4px 0' }}>- {item}</p>
        ))}
        <p style={{ margin: '8px 0 4px 0' }}><span style={{ color: '#8b7355' }}>Current safeguards:</span></p>
        {log.riskAssessment.safeguards.map((item, si) => (
          <p key={si} style={{ margin: '0 0 4px 0' }}>- {item}</p>
        ))}

        <p style={{ margin: '14px 0 10px 0', color: '#8b7355' }}>### Concepts Explained This Session</p>
        <p style={{ margin: '0 0 4px 0' }}>{log.conceptsExplained}</p>

        <p style={{ margin: '14px 0 10px 0', color: '#8b7355' }}>### Site Vision</p>
        <p style={{ margin: '0 0 4px 0' }}>{log.siteVision}</p>

        <p style={{ margin: '14px 0 10px 0', color: '#8b7355' }}>### Next Session</p>
        {log.nextSession.map((item, ni) => (
          <p key={ni} style={{ margin: '0 0 4px 0' }}>- {item}
            {ni === log.nextSession.length - 1 && (
              <span style={{
                display: 'inline-block',
                width: '7px',
                height: '14px',
                background: '#8b7355',
                marginLeft: '4px',
                verticalAlign: 'middle',
                animation: 'blink 1s infinite'
              }} />
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
