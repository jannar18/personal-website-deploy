import PrintButton from './PrintButton';

export default function AboutPage() {
  return (
    <section style={{ animation: 'fadeIn 0.6s ease' }}>
      <div className="about-grid" style={{
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
              One year ago I was finishing a 5 year accredited architecture program at Illinois Tech. I was on track to follow the traditional path towards becoming a Licensed Architect through NCARB, but as I was nearing graduation I looked at the rapidly changing world around me, I looked at my field which seemed stuck in time... and I realized I wanted to respond to it. Now I&apos;m taking the time to look into the future and predict the skills I will need to be successful in the future version of my field.
            </p>
            <p style={{ marginBottom: '20px' }}>
              I will be developing valuable skills like: AI, writing, researching, and marketing and publishing those artifacts here to prepare for a future of entrepreneurship that implements both AI and my design practice.
            </p>
            <p style={{
              marginBottom: '20px',
              paddingLeft: '20px',
              borderLeft: '3px solid #cdb49b',
              fontStyle: 'italic',
              fontSize: '16px',
              color: '#8b7355'
            }}>
              &ldquo;When you build a thing you cannot merely build that thing in isolation, but must repair the world around it, and within it, so that the larger world at that one place becomes more coherent, and more whole.&rdquo; — Christopher Alexander, The Timeless Way of Building
            </p>
          </div>
        </div>

        <div className="about-sidebar" style={{
          background: 'rgba(255,255,255,0.4)',
          padding: '32px',
          borderRadius: '2px',
          border: '1px solid rgba(205,180,155,0.3)',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ marginBottom: '28px', textAlign: 'center' }}>
            <img
              src="/profile-pic.jpg"
              alt="Julianna Roberts"
              className="profile-image"
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
        <div className="resume-header" style={{
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
          <PrintButton />
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
            <div className="experience-row" style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '8px',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              <div>
                <p style={{ fontSize: '17px', fontWeight: '400', margin: '0 0 4px 0', color: '#3d3028' }}>
                  Architectural Intern
                </p>
                <p style={{ fontSize: '15px', color: '#bc8f8f', margin: 0 }}>
                  Studio KZ + Scottsdale Design Build
                </p>
              </div>
              <span style={{ fontSize: '14px', color: '#9d8b7a' }}>May 2022 - July 2023</span>
            </div>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#5a4a3a', margin: 0 }}>
              Developed drawing sets through the CD & CA phases for both residential & commercial projects, built 3D SketchUp models for client presentations, participated in on-site field & construction work, assisted with contractual review, collaborated on structural calculations and detail design.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <div className="experience-row" style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '8px',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              <div>
                <p style={{ fontSize: '17px', fontWeight: '400', margin: '0 0 4px 0', color: '#3d3028' }}>
                  Gallery Educator + Greeter
                </p>
                <p style={{ fontSize: '15px', color: '#bc8f8f', margin: 0 }}>
                  Wrightwood 659
                </p>
              </div>
              <span style={{ fontSize: '14px', color: '#9d8b7a' }}>April 2024 - July 2024</span>
            </div>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#5a4a3a', margin: 0 }}>
              Engaged & educated visitors on architecture & artworks, developed research & &ldquo;educator talk&rdquo; on artist.
            </p>
          </div>

          <div>
            <div className="experience-row" style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '8px',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              <div>
                <p style={{ fontSize: '17px', fontWeight: '400', margin: '0 0 4px 0', color: '#3d3028' }}>
                  Gallery Service Assistant
                </p>
                <p style={{ fontSize: '15px', color: '#bc8f8f', margin: 0 }}>
                  Gallery 1957 | Expo Chicago
                </p>
              </div>
              <span style={{ fontSize: '14px', color: '#9d8b7a' }}>April 2023</span>
            </div>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#5a4a3a', margin: 0 }}>
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
            <p style={{ fontSize: '17px', fontWeight: '400', margin: '0 0 8px 0', color: '#3d3028' }}>
              Illinois Institute of Technology
            </p>
            <p style={{ fontSize: '15px', color: '#5a4a3a', margin: '0 0 6px 0' }}>
              Bachelor of Architecture (NAAB Accredited) | GPA: 3.71 | 2020-2025
            </p>
            <p style={{ fontSize: '14px', color: '#9d8b7a', margin: 0 }}>
              Summer Study Abroad: Japan 2023 · U.S. Department of Energy Solar Decathlon
            </p>
          </div>

          <div>
            <p style={{ fontSize: '17px', fontWeight: '400', margin: '0 0 8px 0', color: '#3d3028' }}>
              Westwood High School
            </p>
            <p style={{ fontSize: '15px', color: '#5a4a3a', margin: '0 0 6px 0' }}>
              International Baccalaureate | 2016-2020
            </p>
            <p style={{ fontSize: '14px', color: '#9d8b7a', margin: 0 }}>
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
              <p style={{ fontSize: '15px', margin: '0 0 4px 0', color: '#3d3028' }}>Camras Scholars</p>
              <p style={{ fontSize: '14px', color: '#9d8b7a', margin: 0 }}>2020-2025 | Mentor</p>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '15px', margin: '0 0 4px 0', color: '#3d3028' }}>IIT Art × Architecture (AIAS)</p>
              <p style={{ fontSize: '14px', color: '#9d8b7a', margin: 0 }}>Director | 2021-2024</p>
            </div>
            <div>
              <p style={{ fontSize: '15px', margin: '0 0 4px 0', color: '#3d3028' }}>Kappa Phi Delta Sorority</p>
              <p style={{ fontSize: '14px', color: '#9d8b7a', margin: 0 }}>Assis. Sec. | 2022-2024</p>
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
              <li style={{ marginBottom: '8px' }}><span style={{ color: '#bc8f8f' }}>→</span> Dwight T. Black Memorial Scholarship Nomination (2024)</li>
              <li style={{ marginBottom: '8px' }}><span style={{ color: '#bc8f8f' }}>→</span> U.S. Solar Decathlon Finalist (2024)</li>
              <li style={{ marginBottom: '8px' }}><span style={{ color: '#bc8f8f' }}>→</span> Anderson Presidential Scholarship (2022-present)</li>
              <li style={{ marginBottom: '8px' }}><span style={{ color: '#bc8f8f' }}>→</span> Camras Scholarship (2020-2025)</li>
              <li style={{ marginBottom: '8px' }}><span style={{ color: '#bc8f8f' }}>→</span> Dean&apos;s List (2021-2025)</li>
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
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#5a4a3a', margin: '0 0 16px 0' }}>
              Adobe Creative Cloud, AutoCAD, Rhino + V-Ray, Lumion, SketchUp, Microsoft Office 365
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#5a4a3a', margin: '0 0 16px 0' }}>
              Drafting, sketching, model making, laser cutting, wood shop, excavation
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#5a4a3a', margin: 0 }}>
              Communication, organization, leadership, creativity, attention to detail, conceptualization, critical thinking, problem solving
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
