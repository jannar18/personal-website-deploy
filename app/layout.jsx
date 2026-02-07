import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Learning to See',
  description: 'Learning to See - Architecture × AI × Writing',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#f5f1eb" />
      </head>
      <body style={{ margin: 0 }}>
        <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #f5f1eb 0%, #ebe3d5 100%)',
          fontFamily: '"Crimson Pro", "Noto Serif JP", serif',
          color: '#3d3028',
          position: 'relative',
          overflowX: 'hidden'
        }}>
          {/* Subtle texture overlay */}
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
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
          <div className="main-container" style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '60px 40px',
            position: 'relative',
            zIndex: 1
          }}>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </div>

        {/* Hidden forms for Netlify to detect during build */}
        <form name="subscribe" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="email" name="email" />
        </form>
        <form name="feedback" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="post-title" />
          <input type="text" name="name" />
          <textarea name="message"></textarea>
        </form>
      </body>
    </html>
  );
}
