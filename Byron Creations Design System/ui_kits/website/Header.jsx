// Header.jsx — Byron Creations Navigation
// Glassmorphism fixed nav with scroll-aware state

const Header = ({ activePage, onNavigate }) => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const el = document.querySelector('.bc-scroll-container') || window;
    const onScroll = () => setScrolled((el.scrollTop || window.scrollY) > 60);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'actividad', label: 'Actividad' },
    { id: 'galeria', label: 'Galería' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 64,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px',
      background: scrolled ? 'rgba(8,8,8,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      transition: 'background 400ms ease, border-color 400ms ease, backdrop-filter 400ms ease',
    }}>
      <button onClick={() => onNavigate('home')} style={{
        background: 'none', border: 'none', cursor: 'pointer', padding: 0,
        fontFamily: "'Raleway', sans-serif", fontSize: 22,
        fontWeight: 500, letterSpacing: '-0.01em', color: '#F2F2F2',
      }}>
        Byron <span style={{ color: '#b89a30' }}>Creations</span>
      </button>

      <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {links.map(l => (
          <button key={l.id} onClick={() => onNavigate(l.id)} style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            fontFamily: "'DM Sans', sans-serif", fontSize: 11,
            fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: activePage === l.id ? '#b89a30' : '#888',
            transition: 'color 150ms ease',
          }}>
            {l.label}
          </button>
        ))}
        <button style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 11,
          fontWeight: 500, letterSpacing: '0.10em', textTransform: 'uppercase',
          color: '#080808', background: '#b89a30',
          padding: '9px 20px', borderRadius: 6, border: 'none', cursor: 'pointer',
          transition: 'opacity 150ms ease',
        }}
          onMouseEnter={e => e.target.style.opacity = '0.85'}
          onMouseLeave={e => e.target.style.opacity = '1'}
        >
          Escucha
        </button>
      </nav>
    </header>
  );
};

Object.assign(window, { Header });
