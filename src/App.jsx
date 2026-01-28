import React, { useState } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f1eb 0%, #ebe3d5 100%)',
      fontFamily: '"Crimson Pro", "Noto Serif JP", serif',
      color: '#3d3028',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle texture overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.03"/%3E%3C/svg%3E")',
        pointerEvents: 'none',
        opacity: 0.4
      }} />

      {/* Decorative elements */}
      <div style={{
        position: 'fixed',
        top: '10%',
        right: '-5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(205,180,155,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />
      
      <div style={{
        position: 'fixed',
        bottom: '20%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(188,143,143,0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      {/* Main container */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '60px 40px',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Header */}
        <header style={{
          marginBottom: '80px',
          borderBottom: '1px solid rgba(61,48,40,0.15)',
          paddingBottom: '40px',
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <h1 style={{
                fontSize: '48px',
                fontWeight: '300',
                margin: '0 0 8px 0',
                letterSpacing: '-0.5px',
                fontFamily: '"Cormorant Garamond", "Noto Serif JP", serif'
              }}>
                Julianna Roberts
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
            
            {/* Navigation */}
            <nav style={{
              display: 'flex',
              gap: '32px',
              fontSize: '14px',
              letterSpacing: '0.5px'
            }}>
              {['home', 'about', 'writing', 'projects'].map(section => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: activeSection === section ? '#3d3028' : '#9d8b7a',
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    letterSpacing: 'inherit',
                    padding: '8px 0',
                    borderBottom: activeSection === section ? '2px solid #bc8f8f' : '2px solid transparent',
                    transition: 'all 0.3s ease',
                    textTransform: 'lowercase'
                  }}
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>
          
          {/* Margin note style annotation */}
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

        {/* Content sections */}
        <main>
          {/* Home section */}
          {activeSection === 'home' && (
            <section style={{
              animation: 'fadeIn 0.6s ease'
            }}>
              {/* Intro */}
              <div style={{
                marginBottom: '60px',
                maxWidth: '700px'
              }}>
                <p style={{
                  fontSize: '19px',
                  lineHeight: '1.7',
                  color: '#3d3028',
                  marginBottom: '24px'
                }}>
                  Recent B. Arch graduate and architectural designer becoming an AI expert by implementing it into my daily practice with nothing but novice coding experience and Claude.
                </p>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.7',
                  color: '#5a4a3a',
                  margin: 0
                }}>
                  This site collects my ongoing work, experiments, research notes and observations.
                </p>
              </div>

              {/* Currently Working On */}
              <div style={{
                marginBottom: '60px',
                paddingBottom: '40px',
                borderBottom: '1px solid rgba(205,180,155,0.3)'
              }}>
                <h3 style={{
                  fontSize: '14px',
                  letterSpacing: '0.5px',
                  color: '#8b7355',
                  marginBottom: '16px',
                  fontWeight: '600',
                  textTransform: 'uppercase'
                }}>
                  Current Focus
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.7',
                  color: '#5a4a3a',
                  margin: 0
                }}>
                  Integrating Claude into my daily motions, developing weekly reading and research practice, and publishing daily
                </p>
              </div>

              {/* Featured Blog Post */}
              <div style={{
                marginBottom: '60px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '32px'
                }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '400',
                    color: '#3d3028',
                    fontFamily: '"Cormorant Garamond", serif',
                    margin: 0
                  }}>
                    Latest Writing
                  </h3>
                  <button
                    onClick={() => setActiveSection('writing')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#bc8f8f',
                      fontSize: '14px',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      textDecoration: 'underline',
                      padding: 0
                    }}
                  >
                    View all →
                  </button>
                </div>
                
                <article
                  style={{
                    padding: '40px',
                    background: 'rgba(255,255,255,0.6)',
                    border: '1px solid rgba(205,180,155,0.3)',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(61,48,40,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    fontSize: '12px',
                    color: '#bc8f8f',
                    marginBottom: '16px',
                    letterSpacing: '1px'
                  }}>
                    Date
                  </div>
                  
                  <h4 style={{
                    fontSize: '32px',
                    fontWeight: '400',
                    marginBottom: '20px',
                    color: '#3d3028',
                    fontFamily: '"Cormorant Garamond", serif',
                    lineHeight: '1.3'
                  }}>
                    Title
                  </h4>
                  
                  <p style={{
                    fontSize: '17px',
                    lineHeight: '1.8',
                    color: '#5a4a3a',
                    marginBottom: '20px'
                  }}>
                    Excerpt
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    flexWrap: 'wrap'
                  }}>
                    <span
                      style={{
                        fontSize: '12px',
                        padding: '4px 12px',
                        background: 'rgba(205,180,155,0.2)',
                        color: '#8b7355',
                        borderRadius: '2px',
                        letterSpacing: '0.5px'
                      }}
                    >
                      Tag
                    </span>
                  </div>

                  {/* Corner accent */}
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    width: '50px',
                    height: '50px',
                    borderTop: '2px solid rgba(188,143,143,0.3)',
                    borderRight: '2px solid rgba(188,143,143,0.3)'
                  }} />
                </article>
              </div>

              {/* Recent Projects */}
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '32px'
                }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '400',
                    color: '#3d3028',
                    fontFamily: '"Cormorant Garamond", serif',
                    margin: 0
                  }}>
                    Recent Projects
                  </h3>
                  <button
                    onClick={() => setActiveSection('projects')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#bc8f8f',
                      fontSize: '14px',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      textDecoration: 'underline',
                      padding: 0
                    }}
                  >
                    View all →
                  </button>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '24px'
                }}>
                  <div
                    style={{
                      padding: '28px',
                      background: 'rgba(255,255,255,0.4)',
                      border: '1px solid rgba(205,180,155,0.3)',
                      borderRadius: '2px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(61,48,40,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{
                      fontSize: '11px',
                      color: '#bc8f8f',
                      marginBottom: '12px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}>
                      Artifact Type
                    </div>
                    
                    <h4 style={{
                      fontSize: '19px',
                      fontWeight: '400',
                      marginBottom: '10px',
                      color: '#3d3028',
                      fontFamily: '"Cormorant Garamond", serif'
                    }}>
                      Title
                    </h4>
                    
                    <p style={{
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: '#5a4a3a',
                      marginBottom: '12px'
                    }}>
                      Summary
                    </p>
                    
                    <div style={{
                      fontSize: '12px',
                      color: '#9d8b7a',
                      borderTop: '1px solid rgba(205,180,155,0.2)',
                      paddingTop: '10px'
                    }}>
                      Date
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* About section */}
          {activeSection === 'about' && (
            <section style={{
              animation: 'fadeIn 0.6s ease'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr',
                gap: '60px',
                alignItems: 'start',
                marginBottom: '80px'
              }}>
                <div>
                  <h2 style={{
                    fontSize: '32px',
                    fontWeight: '300',
                    marginBottom: '24px',
                    color: '#3d3028',
                    fontFamily: '"Cormorant Garamond", serif'
                  }}>
                    About
                  </h2>
                  <div style={{
                    fontSize: '17px',
                    lineHeight: '1.8',
                    color: '#5a4a3a'
                  }}>
                    <p style={{ marginBottom: '20px' }}>
                      One year ago I was finishing a 5 year accredited architecture program at Illinois Tech. I was on track to follow the traditional path towards becoming a Licensed Architect through NCARB, but as I was nearing graduation I looked at the rapidly changing world around me, I looked at my field which seemed stuck in time... and I realized I wanted to respond to it. Now I'm taking the time to look into the future and predict the skills I will need to be successful in the future version of my field.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                      I will be developing valuable skills like: AI, writing, researching, and marketing and publishing artifacts here to prepare for a future of entrepreneurship that implements both AI and my design practice.
                    </p>
                    <p style={{ 
                      marginBottom: '20px',
                      paddingLeft: '20px',
                      borderLeft: '3px solid #cdb49b',
                      fontStyle: 'italic',
                      fontSize: '16px',
                      color: '#8b7355'
                    }}>
                      "When you build a thing you cannot merely build that thing in isolation, but must repair the world around it, and within it, so that the larger world at that one place becomes more coherent, and more whole." — Christopher Alexander
                    </p>
                  </div>
                </div>
                
                <div style={{
                  background: 'rgba(255,255,255,0.4)',
                  padding: '32px',
                  borderRadius: '2px',
                  border: '1px solid rgba(205,180,155,0.3)',
                  backdropFilter: 'blur(10px)'
                }}>
                  {/* Profile Photo */}
                  <div style={{
                    marginBottom: '28px',
                    textAlign: 'center'
                  }}>
                    <img 
                      src="/profile-pic.jpg" 
                      alt="Julianna Roberts"
                      style={{
                        width: '180px',
                        height: '180px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '3px solid rgba(205,180,155,0.4)',
                        boxShadow: '0 4px 12px rgba(61,48,40,0.1)'
                      }}
                    />
                  </div>

                  <h3 style={{
                    fontSize: '14px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                    color: '#8b7355',
                    fontWeight: '600'
                  }}>
                    Current Focus
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '15px',
                    lineHeight: '2'
                  }}>
                    <li style={{ marginBottom: '12px' }}>
                      <span style={{ color: '#bc8f8f' }}>→</span> Integrating Claude into my daily motions
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                      <span style={{ color: '#bc8f8f' }}>→</span> Developing weekly reading and research practice
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                      <span style={{ color: '#bc8f8f' }}>→</span> Publishing daily
                    </li>
                  </ul>
                  
                  <div style={{
                    marginTop: '28px',
                    paddingTop: '24px',
                    borderTop: '1px solid rgba(205,180,155,0.3)'
                  }}>
                    <p style={{
                      fontSize: '13px',
                      color: '#9d8b7a',
                      margin: 0
                    }}>
                      Contact: juliannaroberts18@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Resume Section */}
              <div style={{
                paddingTop: '60px',
                borderTop: '1px solid rgba(205,180,155,0.3)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '40px'
                }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '400',
                    color: '#3d3028',
                    fontFamily: '"Cormorant Garamond", serif',
                    margin: 0
                  }}>
                    Resume
                  </h3>
                  <a
                    href="#"
                    style={{
                      fontSize: '14px',
                      color: '#bc8f8f',
                      textDecoration: 'none',
                      borderBottom: '1px solid #bc8f8f',
                      paddingBottom: '2px'
                    }}
                  >
                    Download PDF →
                  </a>
                </div>

                {/* Experience */}
                <div style={{ marginBottom: '40px' }}>
                  <h4 style={{
                    fontSize: '14px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#8b7355',
                    marginBottom: '24px',
                    fontWeight: '600'
                  }}>
                    Experience
                  </h4>

                  <div style={{ marginBottom: '24px' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      <div>
                        <p style={{
                          fontSize: '17px',
                          fontWeight: '400',
                          margin: '0 0 4px 0',
                          color: '#3d3028'
                        }}>
                          Architectural Intern
                        </p>
                        <p style={{
                          fontSize: '15px',
                          color: '#bc8f8f',
                          margin: 0
                        }}>
                          Studio KZ + Scottsdale Design Build
                        </p>
                      </div>
                      <span style={{
                        fontSize: '14px',
                        color: '#9d8b7a'
                      }}>
                        May 2022 - July 2023
                      </span>
                    </div>
                    <p style={{
                      fontSize: '15px',
                      lineHeight: '1.7',
                      color: '#5a4a3a',
                      margin: 0
                    }}>
                      Developed drawing sets through the CD & CA phases for both residential & commercial projects, built 3D SketchUp models for client presentations, participated in on-site field & construction work, assisted with contractual review, collaborated on structural calculations and detail design.
                    </p>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      <div>
                        <p style={{
                          fontSize: '17px',
                          fontWeight: '400',
                          margin: '0 0 4px 0',
                          color: '#3d3028'
                        }}>
                          Gallery Educator + Greeter
                        </p>
                        <p style={{
                          fontSize: '15px',
                          color: '#bc8f8f',
                          margin: 0
                        }}>
                          Wrightwood 659
                        </p>
                      </div>
                      <span style={{
                        fontSize: '14px',
                        color: '#9d8b7a'
                      }}>
                        April 2024 - July 2024
                      </span>
                    </div>
                    <p style={{
                      fontSize: '15px',
                      lineHeight: '1.7',
                      color: '#5a4a3a',
                      margin: 0
                    }}>
                      Engaged & educated visitors on architecture & artworks, developed research & "educator talk" on artist.
                    </p>
                  </div>

                  <div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      <div>
                        <p style={{
                          fontSize: '17px',
                          fontWeight: '400',
                          margin: '0 0 4px 0',
                          color: '#3d3028'
                        }}>
                          Gallery Service Assistant
                        </p>
                        <p style={{
                          fontSize: '15px',
                          color: '#bc8f8f',
                          margin: 0
                        }}>
                          Gallery 1957 | Expo Chicago
                        </p>
                      </div>
                      <span style={{
                        fontSize: '14px',
                        color: '#9d8b7a'
                      }}>
                        April 2023
                      </span>
                    </div>
                    <p style={{
                      fontSize: '15px',
                      lineHeight: '1.7',
                      color: '#5a4a3a',
                      margin: 0
                    }}>
                      Engaged with potential clients, learned artists & their works quickly, promoted & represented artists to the public.
                    </p>
                  </div>
                </div>

                {/* Education */}
                <div style={{ marginBottom: '40px' }}>
                  <h4 style={{
                    fontSize: '14px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#8b7355',
                    marginBottom: '24px',
                    fontWeight: '600'
                  }}>
                    Education
                  </h4>

                  <div style={{ marginBottom: '20px' }}>
                    <p style={{
                      fontSize: '17px',
                      fontWeight: '400',
                      margin: '0 0 8px 0',
                      color: '#3d3028'
                    }}>
                      Illinois Institute of Technology
                    </p>
                    <p style={{
                      fontSize: '15px',
                      color: '#5a4a3a',
                      margin: '0 0 6px 0'
                    }}>
                      Bachelor of Architecture (NAAB Accredited) | GPA: 3.71 | 2020-2025
                    </p>
                    <p style={{
                      fontSize: '14px',
                      color: '#9d8b7a',
                      margin: 0
                    }}>
                      Summer Study Abroad: Japan 2023 · U.S. Department of Energy Solar Decathlon
                    </p>
                  </div>

                  <div>
                    <p style={{
                      fontSize: '17px',
                      fontWeight: '400',
                      margin: '0 0 8px 0',
                      color: '#3d3028'
                    }}>
                      Westwood High School
                    </p>
                    <p style={{
                      fontSize: '15px',
                      color: '#5a4a3a',
                      margin: '0 0 6px 0'
                    }}>
                      International Baccalaureate | 2016-2020
                    </p>
                    <p style={{
                      fontSize: '14px',
                      color: '#9d8b7a',
                      margin: 0
                    }}>
                      Seal of Biliteracy & NHS Seal | Class Rank: 1 out of 638 | GPA: 5.0
                    </p>
                  </div>
                </div>

                {/* Three column section */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '40px'
                }}>
                  {/* Organizations */}
                  <div>
                    <h4 style={{
                      fontSize: '14px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: '#8b7355',
                      marginBottom: '16px',
                      fontWeight: '600'
                    }}>
                      Organizations
                    </h4>
                    <div style={{ marginBottom: '16px' }}>
                      <p style={{
                        fontSize: '15px',
                        margin: '0 0 4px 0',
                        color: '#3d3028'
                      }}>
                        Camras Scholars
                      </p>
                      <p style={{
                        fontSize: '14px',
                        color: '#9d8b7a',
                        margin: 0
                      }}>
                        2020-2025 | Mentor
                      </p>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                      <p style={{
                        fontSize: '15px',
                        margin: '0 0 4px 0',
                        color: '#3d3028'
                      }}>
                        IIT Art × Architecture (AIAS)
                      </p>
                      <p style={{
                        fontSize: '14px',
                        color: '#9d8b7a',
                        margin: 0
                      }}>
                        Director | 2021-2024
                      </p>
                    </div>
                    <div>
                      <p style={{
                        fontSize: '15px',
                        margin: '0 0 4px 0',
                        color: '#3d3028'
                      }}>
                        Kappa Phi Delta Sorority
                      </p>
                      <p style={{
                        fontSize: '14px',
                        color: '#9d8b7a',
                        margin: 0
                      }}>
                        Assis. Sec. | 2022-2024
                      </p>
                    </div>
                  </div>

                  {/* Awards */}
                  <div>
                    <h4 style={{
                      fontSize: '14px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: '#8b7355',
                      marginBottom: '16px',
                      fontWeight: '600'
                    }}>
                      Awards
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      fontSize: '14px',
                      lineHeight: '1.8',
                      color: '#5a4a3a'
                    }}>
                      <li style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#bc8f8f' }}>→</span> Dwight T. Black Memorial Scholarship Nomination (2024)
                      </li>
                      <li style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#bc8f8f' }}>→</span> U.S. Solar Decathlon Finalist (2024)
                      </li>
                      <li style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#bc8f8f' }}>→</span> Anderson Presidential Scholarship (2022-present)
                      </li>
                      <li style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#bc8f8f' }}>→</span> Camras Scholarship (2020-2025)
                      </li>
                      <li style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#bc8f8f' }}>→</span> Dean's List (2021-2025)
                      </li>
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 style={{
                      fontSize: '14px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: '#8b7355',
                      marginBottom: '16px',
                      fontWeight: '600'
                    }}>
                      Skills
                    </h4>
                    <p style={{
                      fontSize: '14px',
                      lineHeight: '1.8',
                      color: '#5a4a3a',
                      margin: '0 0 16px 0'
                    }}>
                      Adobe Creative Cloud, AutoCAD, Rhino + V-Ray, Lumion, SketchUp, Microsoft Office 365
                    </p>
                    <p style={{
                      fontSize: '14px',
                      lineHeight: '1.8',
                      color: '#5a4a3a',
                      margin: '0 0 16px 0'
                    }}>
                      Drafting, sketching, model making, laser cutting, wood shop, excavation
                    </p>
                    <p style={{
                      fontSize: '14px',
                      lineHeight: '1.8',
                      color: '#5a4a3a',
                      margin: 0
                    }}>
                      Communication, organization, leadership, creativity, attention to detail, conceptualization, critical thinking, problem solving
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Writing/Blog section */}
          {activeSection === 'writing' && (
            <section style={{
              animation: 'fadeIn 0.6s ease'
            }}>
              <h2 style={{
                fontSize: '32px',
                fontWeight: '300',
                marginBottom: '40px',
                color: '#3d3028',
                fontFamily: '"Cormorant Garamond", serif'
              }}>
                Writing
              </h2>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '32px'
              }}>
                <article
                  style={{
                    padding: '32px',
                    background: 'rgba(255,255,255,0.5)',
                    border: '1px solid rgba(205,180,155,0.25)',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.borderColor = 'rgba(188,143,143,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.borderColor = 'rgba(205,180,155,0.25)';
                  }}
                >
                  <div style={{
                    fontSize: '12px',
                    color: '#bc8f8f',
                    marginBottom: '12px',
                    letterSpacing: '1px'
                  }}>
                    Date
                  </div>
                  
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '400',
                    marginBottom: '16px',
                    color: '#3d3028',
                    fontFamily: '"Cormorant Garamond", serif'
                  }}>
                    Title
                  </h3>
                  
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.7',
                    color: '#5a4a3a',
                    marginBottom: '16px'
                  }}>
                    Excerpt
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    flexWrap: 'wrap'
                  }}>
                    <span
                      style={{
                        fontSize: '12px',
                        padding: '4px 12px',
                        background: 'rgba(205,180,155,0.2)',
                        color: '#8b7355',
                        borderRadius: '2px',
                        letterSpacing: '0.5px'
                      }}
                    >
                      Tag
                    </span>
                  </div>
                  
                  {/* Sketch-like corner accent */}
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    width: '40px',
                    height: '40px',
                    borderTop: '2px solid rgba(188,143,143,0.3)',
                    borderRight: '2px solid rgba(188,143,143,0.3)',
                    opacity: 0.5
                  }} />
                </article>
              </div>
            </section>
          )}

          {/* Projects section */}
          {activeSection === 'projects' && (
            <section style={{
              animation: 'fadeIn 0.6s ease'
            }}>
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(61,48,40,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    fontSize: '11px',
                    color: '#bc8f8f',
                    marginBottom: '16px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    Artifact Type
                  </div>
                  
                  <h3 style={{
                    fontSize: '21px',
                    fontWeight: '400',
                    marginBottom: '12px',
                    color: '#3d3028',
                    fontFamily: '"Cormorant Garamond", serif'
                  }}>
                    Title
                  </h3>
                  
                  <p style={{
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: '#5a4a3a',
                    marginBottom: '16px'
                  }}>
                    Summary
                  </p>
                  
                  <div style={{
                    fontSize: '12px',
                    color: '#9d8b7a',
                    borderTop: '1px solid rgba(205,180,155,0.2)',
                    paddingTop: '12px',
                    marginTop: 'auto'
                  }}>
                    Date
                  </div>
                </div>
              </div>
              
              {/* Work in progress note */}
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
          )}
        </main>

        {/* Footer */}
        <footer style={{
          marginTop: '120px',
          paddingTop: '40px',
          borderTop: '1px solid rgba(61,48,40,0.15)',
          fontSize: '13px',
          color: '#9d8b7a',
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
            <a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>
              GitHub
            </a>
            <a href="mailto:juliannaroberts18@gmail.com" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>
              Email
            </a>
          </div>
        </footer>
      </div>

      {/* Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Crimson+Pro:wght@300;400;600&family=Noto+Serif+JP:wght@300;400;600&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        a:hover {
          color: #bc8f8f !important;
        }
      `}</style>
    </div>
  );
};

export default App;