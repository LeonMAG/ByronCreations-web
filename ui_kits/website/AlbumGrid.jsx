// AlbumGrid.jsx — Music Production Portfolio
// Grid of album covers with hover play/info + iTunes-style expanding panel

const ALBUMS = [
  { id: 1, title: 'Noche Eterna', artist: 'Byron', year: '2024', duration: '3:42', color: 'linear-gradient(135deg,#1a1a14,#2e2510)', story: 'Nació de una sesión nocturna explorando nuevas texturas sonoras. Una mezcla entre lo electrónico y lo orgánico.' },
  { id: 2, title: 'Ecos del Sur', artist: 'Byron feat. Artista A', year: '2023', duration: '4:18', color: 'linear-gradient(135deg,#14141e,#1e1428)', story: 'Colaboración grabada en tres días. Letra escrita en una sola noche de inspiración.' },
  { id: 3, title: 'Marea', artist: 'Byron', year: '2023', duration: '3:55', color: 'linear-gradient(135deg,#0e1a14,#1a2e1e)', story: 'Producida íntegramente con sintetizadores analógicos. Sonido cálido y envolvente.' },
  { id: 4, title: 'Ceniza', artist: 'Byron feat. Artista B', year: '2023', duration: '5:01', color: 'linear-gradient(135deg,#1a1014,#2e1418)', story: 'El tema más personal del catálogo. Grabado en el estudio casero durante el invierno.' },
  { id: 5, title: 'Luz Fría', artist: 'Byron', year: '2022', duration: '3:28', color: 'linear-gradient(135deg,#181418,#2a1e2a)', story: 'Primer sencillo lanzado de forma independiente. Más de 50.000 escuchas en streaming.' },
  { id: 6, title: 'Deriva', artist: 'Byron', year: '2022', duration: '4:44', color: 'linear-gradient(135deg,#101820,#182030)', story: 'Inspirada en largas noches de composición. Estructura libre, casi improvisada.' },
  { id: 7, title: 'Raíz', artist: 'Byron feat. Artista C', year: '2022', duration: '3:37', color: 'linear-gradient(135deg,#181a10,#28301a)', story: 'Fusión de sonidos folklóricos con producción contemporánea.' },
  { id: 8, title: 'Umbral', artist: 'Byron', year: '2021', duration: '4:12', color: 'linear-gradient(135deg,#1a1018,#2a1828)', story: 'El primer tema en el que experimenté con voces procesadas como instrumento.' },
];

const PLATFORMS = ['Spotify', 'Apple Music', 'YouTube'];

const AlbumCard = ({ album, isOpen, onPlay, onInfo }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', aspectRatio: '1', cursor: 'pointer', borderRadius: 4, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.6)' }}
    >
      {/* Art */}
      <div style={{
        width: '100%', height: '100%',
        background: album.color,
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 400ms cubic-bezier(0.25,0.46,0.45,0.94)',
      }} />
      {/* Hover overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.6)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 200ms ease',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      }}>
        <button onClick={() => onPlay(album)} style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'rgba(200,169,110,0.95)', border: 'none',
          color: '#080808', fontSize: 12, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'transform 150ms',
        }}>▶</button>
        <button onClick={() => onInfo(album)} style={{
          width: 26, height: 26, borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.3)',
          color: '#fff', fontSize: 11, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>i</button>
      </div>
      {/* Active border */}
      {isOpen && (
        <div style={{ position: 'absolute', inset: 0, border: '2px solid rgba(200,169,110,0.7)', borderRadius: 4, pointerEvents: 'none' }} />
      )}
    </div>
  );
};

const InfoPanel = ({ album, onClose }) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { const t = setTimeout(() => setMounted(true), 20); return () => clearTimeout(t); }, []);

  return (
    <div style={{
      gridColumn: '1 / -1',
      background: 'rgba(10,10,10,0.97)',
      backdropFilter: 'blur(24px) saturate(180%)',
      borderTop: '2px solid rgba(200,169,110,0.5)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 0,
      padding: '24px 32px',
      opacity: mounted ? 1 : 0,
      transform: mounted ? 'translateY(0)' : 'translateY(-12px)',
      transition: 'opacity 500ms cubic-bezier(0.4,0,0.2,1), transform 500ms cubic-bezier(0.4,0,0.2,1)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div>
          <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 28, fontWeight: 500, color: '#F2F2F2', marginBottom: 4 }}>{album.title}</div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: '#8A8A8A' }}>{album.artist} · {album.year} · {album.duration}</div>
        </div>
        <button onClick={onClose} style={{
          width: 30, height: 30, borderRadius: '50%',
          background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)',
          color: '#8A8A8A', cursor: 'pointer', fontSize: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>✕</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 24 }}>
        <div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555', marginBottom: 6 }}>Historia</div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: '#8A8A8A', lineHeight: 1.6 }}>{album.story}</div>
        </div>
        <div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555', marginBottom: 6 }}>Artistas</div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: '#8A8A8A' }}>{album.artist}</div>
        </div>
        <div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555', marginBottom: 8 }}>Plataformas</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {PLATFORMS.map(p => (
              <span key={p} style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 100, fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.06)', color: '#8A8A8A', border: '1px solid rgba(255,255,255,0.10)', width: 'fit-content' }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AlbumGrid = () => {
  const [openAlbum, setOpenAlbum] = React.useState(null);
  const [playingAlbum, setPlayingAlbum] = React.useState(null);
  const [sectionVisible, setSectionVisible] = React.useState(false);
  const sectionRef = React.useRef(null);
  const COLS = 4;

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSectionVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleInfo = (album) => setOpenAlbum(openAlbum?.id === album.id ? null : album);
  const handlePlay = (album) => setPlayingAlbum(playingAlbum?.id === album.id ? null : album);

  // Build grid rows, inserting panel after the row containing the open album
  const rows = [];
  for (let i = 0; i < ALBUMS.length; i += COLS) {
    const rowAlbums = ALBUMS.slice(i, i + COLS);
    rows.push({ albums: rowAlbums, startIdx: i });
  }

  return (
    <section ref={sectionRef} style={{ padding: '100px 60px', maxWidth: 1400, margin: '0 auto' }}>
      <div style={{ marginBottom: 48, opacity: sectionVisible ? 1 : 0, transform: sectionVisible ? 'none' : 'translateY(24px)', transition: 'opacity 700ms ease, transform 700ms ease' }}>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#b89a30', marginBottom: 12 }}>Portfolio</div>
        <h2 style={{ fontFamily: "'Raleway',sans-serif", fontSize: 48, fontWeight: 500, letterSpacing: '-0.02em', color: '#F2F2F2', margin: 0 }}>Producción Musical</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${COLS}, 1fr)`, gap: 12 }}>
        {ALBUMS.map((album, idx) => {
          const rowIdx = Math.floor(idx / COLS);
          const rowContainsOpen = openAlbum && Math.floor((ALBUMS.findIndex(a => a.id === openAlbum.id)) / COLS) === rowIdx;
          const isLastInRow = (idx + 1) % COLS === 0 || idx === ALBUMS.length - 1;

          return (
            <React.Fragment key={album.id}>
              <AlbumCard
                album={album}
                isOpen={openAlbum?.id === album.id}
                onPlay={handlePlay}
                onInfo={handleInfo}
              />
              {isLastInRow && rowContainsOpen && openAlbum && (
                <InfoPanel album={openAlbum} onClose={() => setOpenAlbum(null)} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {playingAlbum && (
        <div style={{
          position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
          background: 'rgba(10,10,10,0.96)', backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.10)',
          borderRadius: 8, padding: '12px 24px',
          display: 'flex', alignItems: 'center', gap: 16,
          boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
          zIndex: 200,
        }}>
          <div style={{ width: 36, height: 36, borderRadius: 3, background: playingAlbum.color, flexShrink: 0 }} />
          <div>
            <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 16, fontWeight: 500, color: '#F2F2F2' }}>{playingAlbum.title}</div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: '#8A8A8A' }}>{playingAlbum.artist}</div>
          </div>
          <div style={{ display: 'flex', gap: 12, marginLeft: 16 }}>
            <button style={{ width: 32, height: 32, borderRadius: '50%', background: '#b89a30', border: 'none', color: '#080808', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>▐▐</button>
            <button onClick={() => setPlayingAlbum(null)} style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: '#8A8A8A', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>✕</button>
          </div>
        </div>
      )}
    </section>
  );
};

Object.assign(window, { AlbumGrid });
