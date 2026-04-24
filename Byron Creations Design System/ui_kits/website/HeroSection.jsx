// HeroSection.jsx — Full-screen landing hero
// Video/canvas loop placeholder with scroll-reveal text

const HeroSection = ({ onNavigate }) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(36px)',
    transition: `opacity 900ms cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms, transform 900ms cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`,
  });

  return (
    <section style={{
      position: 'relative', width: '100%', height: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Background — gradient cinematic placeholder for video */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 60% 50%, #1a1208 0%, #070d09 70%)',
      }} />
      {/* Subtle radial glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 55% 55%, rgba(200,169,110,0.07) 0%, transparent 70%)',
      }} />
      {/* Noise texture overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 900, padding: '0 40px' }}>
        <div style={{ ...fadeUp(0), fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b89a30', marginBottom: 20 }}>
          Músico · Productor · Artista
        </div>
        <h1 style={{ ...fadeUp(150), fontFamily: "'Raleway', sans-serif", fontSize: 'clamp(56px, 9vw, 100px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.0, color: '#F2F2F2', margin: '0 0 8px' }}>
          Byron
        </h1>
        <h1 style={{ ...fadeUp(200), fontFamily: "'Raleway', sans-serif", fontSize: 'clamp(56px, 9vw, 100px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.0, color: '#b89a30', margin: '0 0 32px' }}>
          Creations
        </h1>
        <p style={{ ...fadeUp(350), fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 300, color: '#8A8A8A', lineHeight: 1.6, maxWidth: 560, margin: '0 auto 48px' }}>
          Un espacio donde confluyen la música, la producción y el arte. Todas mis creaciones en un solo lugar.
        </p>
        <div style={{ ...fadeUp(500), display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => onNavigate('portfolio')} style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 500,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            background: '#b89a30', color: '#0a0a0a',
            padding: '14px 32px', borderRadius: 6, border: 'none', cursor: 'pointer',
            transition: 'opacity 150ms',
          }}
            onMouseEnter={e => e.target.style.opacity='0.85'}
            onMouseLeave={e => e.target.style.opacity='1'}
          >
            Ver Portfolio
          </button>
          <button onClick={() => onNavigate('actividad')} style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 500,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            background: 'transparent', color: '#F2F2F2',
            padding: '14px 32px', borderRadius: 6,
            border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer',
            transition: 'border-color 150ms, background 150ms',
          }}
            onMouseEnter={e => { e.target.style.borderColor='rgba(255,255,255,0.3)'; e.target.style.background='rgba(255,255,255,0.06)'; }}
            onMouseLeave={e => { e.target.style.borderColor='rgba(255,255,255,0.15)'; e.target.style.background='transparent'; }}
          >
            Actividad
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ ...fadeUp(800), position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#555' }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(200,169,110,0.5), transparent)' }} />
      </div>
    </section>
  );
};

Object.assign(window, { HeroSection });
