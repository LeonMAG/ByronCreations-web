// Footer.jsx — Byron Creations site footer

const Footer = ({ onNavigate }) => (
  <footer style={{
    borderTop: '1px solid rgba(255,255,255,0.07)',
    padding: '56px 60px 40px',
    background: '#080808',
  }}>
    <div style={{ maxWidth: 1400, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
        {/* Brand */}
        <div>
          <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 28, fontWeight: 500, color: '#F2F2F2', marginBottom: 12 }}>
            Byron <span style={{ color: '#b89a30' }}>Creations</span>
          </div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 500, color: '#555', lineHeight: 1.7, maxWidth: 320 }}>
            Músico, productor y artista. Todas mis creaciones musicales en un solo lugar.
          </div>
        </div>
        {/* Nav */}
        <div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>Páginas</div>
          {['Portfolio', 'Actividad', 'Galería', 'Contacto'].map(l => (
            <div key={l} style={{ marginBottom: 10 }}>
              <button onClick={() => onNavigate(l.toLowerCase())} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: '#8A8A8A', padding: 0, transition: 'color 150ms' }}
                onMouseEnter={e => e.target.style.color = '#b89a30'}
                onMouseLeave={e => e.target.style.color = '#888'}
              >{l}</button>
            </div>
          ))}
        </div>
        {/* Contact */}
        <div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>Contacto</div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: '#8A8A8A', marginBottom: 8 }}>hola@byroncreations.com</div>
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            {['Spotify', 'IG', 'YT'].map(s => (
              <div key={s} style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: '#8A8A8A' }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: '#444' }}>© 2024 Byron Creations. Todos los derechos reservados.</div>
        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: '#333', letterSpacing: '0.06em' }}>bc · v1.0</div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Footer });
