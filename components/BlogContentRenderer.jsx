'use client';

import { useState } from 'react';

export default function BlogContentRenderer({ content }) {
  const [expandedHeaders, setExpandedHeaders] = useState({});

  const toggleHeader = (headerKey) => {
    setExpandedHeaders(prev => ({
      ...prev,
      [headerKey]: !prev[headerKey]
    }));
  };

  const lines = content.split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === '') {
      i++;
      continue;
    }

    // Handle TIMESTAMP (collapsible)
    if (line.startsWith('TIMESTAMP:')) {
      const time = line.replace('TIMESTAMP:', '');
      const timestampKey = `timestamp-${i}`;
      const isExpanded = expandedHeaders[timestampKey];

      const timestampContent = [];
      let j = i + 1;
      while (j < lines.length &&
             !lines[j].startsWith('TIMESTAMP:') &&
             !lines[j].startsWith('HEADER:') &&
             !lines[j].startsWith('SECTION:') &&
             !lines[j].startsWith('CLOSING:')) {
        const itemLine = lines[j];
        if (itemLine.trim() !== '') {
          if (itemLine.startsWith('LISTITEM:')) {
            timestampContent.push({ type: 'main', text: itemLine.replace('LISTITEM:', '') });
          } else if (itemLine.startsWith('SUBITEM:')) {
            timestampContent.push({ type: 'sub', text: itemLine.replace('SUBITEM:', '') });
          } else if (itemLine.startsWith('NUMBERED:')) {
            timestampContent.push({ type: 'numbered', text: itemLine.replace('NUMBERED:', '') });
          } else if (itemLine.startsWith('DIALOGUE:')) {
            timestampContent.push({ type: 'dialogue', text: itemLine.replace('DIALOGUE:', '') });
          } else if (itemLine.startsWith('TERMINAL:')) {
            timestampContent.push({ type: 'terminal', text: itemLine.replace('TERMINAL:', '') });
          } else if (itemLine.startsWith('CODEBLOCK:')) {
            const codeLines = [itemLine.replace('CODEBLOCK:', '')];
            j++;
            while (j < lines.length && (lines[j].startsWith('├') || lines[j].startsWith('│') || lines[j].startsWith('└') || lines[j].trim().startsWith('├') || lines[j].trim().startsWith('│') || lines[j].trim().startsWith('└'))) {
              codeLines.push(lines[j]);
              j++;
            }
            timestampContent.push({ type: 'codeblock', text: codeLines.join('\n') });
            continue;
          } else if (itemLine.startsWith('Goal:')) {
            timestampContent.push({ type: 'goal', text: itemLine });
          } else {
            timestampContent.push({ type: 'paragraph', text: itemLine });
          }
        }
        j++;
      }

      elements.push(
        <div key={timestampKey} style={{ marginTop: '48px' }}>
          <h3
            onClick={() => toggleHeader(timestampKey)}
            style={{
              marginBottom: isExpanded ? '16px' : '0',
              fontWeight: '600',
              color: '#8b7355',
              fontSize: '18px',
              letterSpacing: '0.5px',
              borderBottom: '1px solid rgba(205,180,155,0.3)',
              paddingBottom: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              userSelect: 'none'
            }}
          >
            <span style={{
              fontSize: '12px',
              transition: 'transform 0.2s ease',
              transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
              display: 'inline-block'
            }}>
              ▶
            </span>
            {time}
          </h3>
          {isExpanded && timestampContent.length > 0 && (
            <div style={{ marginBottom: '24px', paddingLeft: '20px' }}>
              {timestampContent.map((item, idx) => {
                if (item.type === 'dialogue') {
                  return (
                    <p key={idx} style={{
                      marginBottom: '16px',
                      fontStyle: 'italic',
                      paddingLeft: '20px',
                      borderLeft: '2px solid rgba(188,143,143,0.4)',
                      color: '#5a4a3a'
                    }}>
                      {item.text}
                    </p>
                  );
                } else if (item.type === 'terminal') {
                  const isError = item.text.toLowerCase().includes('error') || item.text.toLowerCase().includes('not found');
                  return (
                    <code key={idx} style={{
                      display: 'block',
                      marginBottom: '12px',
                      fontFamily: 'monospace',
                      fontSize: '14px',
                      background: 'rgba(205,180,155,0.2)',
                      color: isError ? '#dc3545' : '#28a745',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      fontWeight: '600'
                    }}>
                      {item.text}
                    </code>
                  );
                } else if (item.type === 'codeblock') {
                  return (
                    <pre key={idx} style={{
                      marginBottom: '24px',
                      fontFamily: 'monospace',
                      fontSize: '14px',
                      background: 'rgba(205,180,155,0.15)',
                      padding: '16px',
                      borderRadius: '4px',
                      whiteSpace: 'pre',
                      lineHeight: '1.6',
                      overflowX: 'auto'
                    }}>
                      {item.text}
                    </pre>
                  );
                } else if (item.type === 'goal') {
                  return (
                    <p key={idx} style={{
                      marginBottom: '16px',
                      fontSize: '17px',
                      fontWeight: '600',
                      color: '#3d3028'
                    }}>
                      {item.text}
                    </p>
                  );
                } else if (item.type === 'paragraph') {
                  return (
                    <p key={idx} style={{
                      marginBottom: '16px',
                      fontSize: '17px',
                      lineHeight: '1.8',
                      color: '#5a4a3a'
                    }}>
                      {item.text}
                    </p>
                  );
                } else {
                  return (
                    <div key={idx} style={{
                      marginBottom: '8px',
                      paddingLeft: item.type === 'sub' ? '28px' : item.type === 'numbered' ? '20px' : '0',
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start'
                    }}>
                      {item.type !== 'numbered' && (
                        <span style={{ color: '#bc8f8f', flexShrink: 0 }}>–</span>
                      )}
                      <span style={{ color: '#6a5a4a', fontSize: '0.95em' }}>{item.text}</span>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      );
      i = j;
      continue;
    }

    // Handle SECTION
    if (line.startsWith('SECTION:')) {
      const title = line.replace('SECTION:', '');
      elements.push(
        <h2 key={i} style={{
          marginTop: '56px',
          marginBottom: '24px',
          fontSize: '28px',
          fontWeight: '400',
          color: '#3d3028',
          fontFamily: '"Cormorant Garamond", serif',
          borderBottom: '2px solid rgba(188,143,143,0.3)',
          paddingBottom: '12px'
        }}>
          {title}
        </h2>
      );
      i++;
      continue;
    }

    // Handle NOTE
    if (line.startsWith('NOTE:')) {
      const text = line.replace('NOTE:', '');
      elements.push(
        <aside key={i} style={{
          marginTop: '24px',
          marginBottom: '32px',
          padding: '20px 24px',
          background: 'rgba(205,180,155,0.12)',
          borderRadius: '4px',
          fontSize: '14px',
          fontStyle: 'italic',
          color: '#8b7355',
          lineHeight: '1.7',
          borderLeft: '3px solid rgba(188,143,143,0.4)'
        }}>
          {text}
        </aside>
      );
      i++;
      continue;
    }

    // Handle HEADER (collapsible)
    if (line.startsWith('HEADER:')) {
      const title = line.replace('HEADER:', '');
      const headerKey = `header-${i}`;
      const isExpanded = expandedHeaders[headerKey];

      const headerListItems = [];
      let j = i + 1;
      while (j < lines.length &&
             (lines[j].startsWith('LISTITEM:') ||
              lines[j].startsWith('SUBITEM:') ||
              lines[j].startsWith('NUMBERED:') ||
              lines[j].startsWith('DIALOGUE:') ||
              lines[j].startsWith('TERMINAL:') ||
              lines[j].trim() === '')) {
        if (lines[j].trim() !== '') {
          const itemLine = lines[j];
          if (itemLine.startsWith('LISTITEM:')) {
            headerListItems.push({ type: 'main', text: itemLine.replace('LISTITEM:', '') });
          } else if (itemLine.startsWith('SUBITEM:')) {
            headerListItems.push({ type: 'sub', text: itemLine.replace('SUBITEM:', '') });
          } else if (itemLine.startsWith('NUMBERED:')) {
            headerListItems.push({ type: 'numbered', text: itemLine.replace('NUMBERED:', '') });
          } else if (itemLine.startsWith('DIALOGUE:')) {
            headerListItems.push({ type: 'dialogue', text: itemLine.replace('DIALOGUE:', '') });
          } else if (itemLine.startsWith('TERMINAL:')) {
            headerListItems.push({ type: 'terminal', text: itemLine.replace('TERMINAL:', '') });
          }
        }
        j++;
      }

      elements.push(
        <div key={headerKey} style={{ marginTop: '24px' }}>
          <h3
            onClick={() => toggleHeader(headerKey)}
            style={{
              marginBottom: isExpanded ? '16px' : '0',
              fontSize: '18px',
              fontWeight: '600',
              color: '#8b7355',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              userSelect: 'none'
            }}
          >
            <span style={{
              fontSize: '12px',
              transition: 'transform 0.2s ease',
              transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
              display: 'inline-block'
            }}>
              ▶
            </span>
            {title}
          </h3>
          {isExpanded && headerListItems.length > 0 && (
            <div style={{ marginBottom: '24px', paddingLeft: '20px' }}>
              {headerListItems.map((item, idx) => (
                item.type === 'dialogue' ? (
                  <p key={idx} style={{
                    marginBottom: '16px',
                    fontStyle: 'italic',
                    paddingLeft: '20px',
                    borderLeft: '2px solid rgba(188,143,143,0.4)',
                    color: '#5a4a3a'
                  }}>
                    {item.text}
                  </p>
                ) : item.type === 'terminal' ? (
                  <div key={idx} style={{
                    marginBottom: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    color: item.text.toLowerCase().includes('error') || item.text.toLowerCase().includes('not found') ? '#dc3545' : '#28a745',
                    fontWeight: '600'
                  }}>
                    {item.text}
                  </div>
                ) : (
                  <div key={idx} style={{
                    marginBottom: '8px',
                    paddingLeft: item.type === 'sub' ? '28px' : item.type === 'numbered' ? '20px' : '0',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start'
                  }}>
                    {item.type !== 'numbered' && (
                      <span style={{ color: '#bc8f8f', flexShrink: 0 }}>–</span>
                    )}
                    <span style={{ color: '#6a5a4a', fontSize: '0.95em' }}>{item.text}</span>
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      );
      i = j;
      continue;
    }

    // Handle PHOTO
    if (line.startsWith('PHOTO:')) {
      const photoData = line.replace('PHOTO:', '');
      const [src, caption] = photoData.includes('|') ? photoData.split('|') : [photoData, ''];
      elements.push(
        <figure key={`photo-${i}`} style={{
          margin: '40px 0',
          padding: 0,
          width: '100%'
        }}>
          <div style={{
            width: '100%',
            borderRadius: '4px',
            overflow: 'hidden',
            border: '1px solid rgba(205,180,155,0.3)',
            background: 'rgba(205,180,155,0.08)'
          }}>
            <img
              src={src.trim()}
              alt={caption ? caption.trim() : 'Blog photo'}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
          {caption && caption.trim() && (
            <figcaption style={{
              marginTop: '12px',
              fontSize: '14px',
              color: '#8b7355',
              fontStyle: 'italic',
              textAlign: 'center',
              lineHeight: '1.5'
            }}>
              {caption.trim()}
            </figcaption>
          )}
        </figure>
      );
      i++;
      continue;
    }

    // Handle SEPARATOR
    if (line.startsWith('SEPARATOR:')) {
      elements.push(
        <hr key={i} style={{
          marginTop: '48px',
          marginBottom: '48px',
          border: 'none',
          borderTop: '1px solid rgba(205,180,155,0.4)',
          width: '60%',
          marginLeft: 'auto',
          marginRight: 'auto'
        }} />
      );
      i++;
      continue;
    }

    // Handle QUOTE
    if (line.startsWith('QUOTE:')) {
      const text = line.replace('QUOTE:', '');
      elements.push(
        <blockquote key={i} style={{
          marginTop: '24px',
          marginBottom: '24px',
          paddingLeft: '24px',
          paddingTop: '16px',
          paddingBottom: '16px',
          borderLeft: '3px solid #bc8f8f',
          background: 'rgba(205,180,155,0.1)',
          fontStyle: 'italic',
          color: '#5a4a3a',
          fontSize: '16px',
          lineHeight: '1.8'
        }}>
          &ldquo;{text}&rdquo;
        </blockquote>
      );
      i++;
      continue;
    }

    // Handle LISTITEM, SUBITEM, NUMBERED
    if (line.startsWith('LISTITEM:') || line.startsWith('SUBITEM:') || line.startsWith('NUMBERED:')) {
      const listItems = [];
      while (i < lines.length && (lines[i].startsWith('LISTITEM:') || lines[i].startsWith('SUBITEM:') || lines[i].startsWith('NUMBERED:'))) {
        const currentLine = lines[i];
        if (currentLine.startsWith('LISTITEM:')) {
          listItems.push({ type: 'main', text: currentLine.replace('LISTITEM:', '') });
        } else if (currentLine.startsWith('SUBITEM:')) {
          listItems.push({ type: 'sub', text: currentLine.replace('SUBITEM:', '') });
        } else if (currentLine.startsWith('NUMBERED:')) {
          listItems.push({ type: 'numbered', text: currentLine.replace('NUMBERED:', '') });
        }
        i++;
      }
      elements.push(
        <div key={`list-${i}`} style={{ marginBottom: '24px' }}>
          {listItems.map((item, idx) => (
            <div key={idx} style={{
              marginBottom: '8px',
              paddingLeft: item.type === 'sub' ? '28px' : item.type === 'numbered' ? '20px' : '0',
              display: 'flex',
              gap: '12px',
              alignItems: 'flex-start'
            }}>
              {item.type !== 'numbered' && (
                <span style={{ color: '#bc8f8f', flexShrink: 0 }}>–</span>
              )}
              <span style={{ color: '#6a5a4a', fontSize: '0.95em' }}>{item.text}</span>
            </div>
          ))}
        </div>
      );
      continue;
    }

    // Handle DIALOGUE
    if (line.startsWith('DIALOGUE:')) {
      const text = line.replace('DIALOGUE:', '');
      elements.push(
        <p key={i} style={{
          marginBottom: '16px',
          fontStyle: 'italic',
          paddingLeft: '20px',
          borderLeft: '2px solid rgba(188,143,143,0.4)',
          color: '#5a4a3a'
        }}>
          {text}
        </p>
      );
      i++;
      continue;
    }

    // Handle CODEBLOCK
    if (line.startsWith('CODEBLOCK:')) {
      const codeLines = [line.replace('CODEBLOCK:', '')];
      i++;
      while (i < lines.length && (lines[i].startsWith('├') || lines[i].startsWith('│') || lines[i].startsWith('└') || lines[i].trim().startsWith('├') || lines[i].trim().startsWith('│') || lines[i].trim().startsWith('└') || lines[i].trim() === '')) {
        if (lines[i].trim() !== '') {
          codeLines.push(lines[i]);
        }
        i++;
      }
      elements.push(
        <pre key={`code-${i}`} style={{
          marginBottom: '24px',
          fontFamily: 'monospace',
          fontSize: '14px',
          background: 'rgba(205,180,155,0.15)',
          padding: '16px',
          borderRadius: '4px',
          whiteSpace: 'pre',
          lineHeight: '1.6',
          overflowX: 'auto'
        }}>
          {codeLines.join('\n')}
        </pre>
      );
      continue;
    }

    // Handle Me: and Claude: dialogue
    if (line.startsWith('Me:') || line.startsWith('Claude:')) {
      elements.push(
        <p key={i} style={{
          marginBottom: '16px',
          fontStyle: 'italic',
          paddingLeft: '20px',
          borderLeft: '2px solid rgba(188,143,143,0.4)',
          color: '#5a4a3a'
        }}>
          {line}
        </p>
      );
      i++;
      continue;
    }

    // Handle TERMINAL
    if (line.startsWith('TERMINAL:')) {
      const text = line.replace('TERMINAL:', '');
      const isError = text.toLowerCase().includes('error') || text.toLowerCase().includes('not found');
      elements.push(
        <code key={i} style={{
          display: 'block',
          marginBottom: '16px',
          fontFamily: 'monospace',
          fontSize: '14px',
          background: 'rgba(205,180,155,0.2)',
          color: isError ? '#dc3545' : '#28a745',
          padding: '8px 12px',
          borderRadius: '4px',
          fontWeight: '600'
        }}>
          {text}
        </code>
      );
      i++;
      continue;
    }

    // Handle CLOSING
    if (line.startsWith('CLOSING:')) {
      const text = line.replace('CLOSING:', '');
      elements.push(
        <p key={i} style={{
          marginTop: '32px',
          marginBottom: '24px',
          fontSize: '17px',
          lineHeight: '1.8',
          color: '#5a4a3a',
          fontStyle: 'italic'
        }}>
          {text}
        </p>
      );
      i++;
      continue;
    }

    // Handle Goal: lines
    if (line.startsWith('Goal:')) {
      elements.push(
        <p key={i} style={{
          marginBottom: '16px',
          fontWeight: '600',
          color: '#3d3028'
        }}>
          {line}
        </p>
      );
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={i} style={{
        marginBottom: '24px'
      }}>
        {line}
      </p>
    );
    i++;
  }

  return <>{elements}</>;
}
