// ActivityStrip.jsx — Musical Activity Gallery
// Full-width horizontal strips, alternating media/text layout

const STRIPS = [
  {
    id: 1,
    label: 'Sala de grabación · Enero 2024',
    title: 'Sesión con Artista A',
    desc: 'Tres días en el estudio grabando las bases del nuevo álbum. Una experiencia intensa y reveladora.',
    bg: 'linear-gradient(135deg, #0e1218 0%, #1a2030 100%)',
    flip: false,
  },
  {
    id: 2,
    label: 'Concierto · Junio 2023',
    title: 'Festival de Verano',
    desc: 'Primera actuación en formato completamente acústico ante más de 500 personas.',
    bg: 'linear-gradient(135deg, #12100e 0%, #281e14 100%)',
    flip: true,
  },
  {
    id: 3,
    label: 'Colaboración · Marzo 2023',
    title: 'Proyecto conjunto con Artista B',
    desc: 'Un trabajo de varios meses que resultó en cinco canciones inéditas de producción conjunta.',
    bg: 'linear-gradient(135deg, #0e1810 0%, #182e1a 100%)',
    flip: false,
  },
  {
    id: 4,
    label: 'Sesión de fotos · Agosto 2023',
    title: 'Reportaje artístico',
    desc: 'Sesión fotográfica para el nuevo material de promoción. Estética industrial y minimalista.',
    bg: 'linear-gradient(135deg, #180e18 0%, #2a1828 100%)',
    flip: true,
  },
];

const MediaThumb = ({ opacity = 1, accent = false }) => (
  <div style={{
    width: 110, height: 110,
    borderRadius: 4,
    background: accent ? 'rgba(200,169,110,0.08)' : 'rgba(255,255,255,0.06)',
    border: `1px solid ${accent ? 'rgba(200,169,110,0.2)' : 'rgba(255,255,255,0.08)'}`,
    opacity,
    flexShrink: 0,
  }} />
);

const ActivityStrip = () => {
  const [visibleStrips, setVisibleStrips] = React.useState(new Set());
  const stripRefs = React.useRef([]);

  React.useEffect(() => {
    const observers = stripRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) setVisibleStrips(prev => new Set([...prev, i]));
      }, { threshold: 0.15 });
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <section style={{ width: '100%' }}>
      <div style={{ padding: '80px 60px 48px', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#b89a30', marginBottom: 12 }}>Galería</div>
        <h2 style={{ fontFamily: "'Raleway',sans-serif", fontSize: 48, fontWeight: 500, letterSpacing: '-0.02em', color: '#F2F2F2', margin: 0 }}>Actividad Musical</h2>
      </div>

      {STRIPS.map((strip, i) => {
        const visible = visibleStrips.has(i);
        return (
          <div key={strip.id} ref={el => stripRefs.current[i] = el} style={{
            position: 'relative', width: '100%', minHeight: 220, overflow: 'hidden',
            display: 'flex', alignItems: 'center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(24px)',
            transition: `opacity 700ms cubic-bezier(0.25,0.46,0.45,0.94) ${i * 80}ms, transform 700ms cubic-bezier(0.25,0.46,0.45,0.94) ${i * 80}ms`,
          }}>
            {/* BG */}
            <div style={{ position: 'absolute', inset: 0, background: strip.bg }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />

            {/* Content */}
            <div style={{
              position: 'relative', zIndex: 1,
              display: 'grid',
              gridTemplateColumns: strip.flip ? '1fr 1fr' : '1fr 1fr',
              width: '100%', maxWidth: 1400, margin: '0 auto',
              padding: '36px 60px', gap: 48, alignItems: 'center',
            }}>
              {strip.flip ? (
                <>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#b89a30', marginBottom: 8 }}>{strip.label}</div>
                    <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 28, fontWeight: 500, color: '#F2F2F2', lineHeight: 1.2, marginBottom: 10 }}>{strip.title}</div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 500, color: '#8A8A8A', lineHeight: 1.6 }}>{strip.desc}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-start' }}>
                    <MediaThumb accent />
                    <MediaThumb opacity={0.65} />
                    <MediaThumb opacity={0.35} />
                  </div>
                </>
              ) : (
                <>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <MediaThumb />
                    <MediaThumb opacity={0.6} />
                    <MediaThumb opacity={0.35} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#b89a30', marginBottom: 8 }}>{strip.label}</div>
                    <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 28, fontWeight: 500, color: '#F2F2F2', lineHeight: 1.2, marginBottom: 10 }}>{strip.title}</div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 500, color: '#8A8A8A', lineHeight: 1.6 }}>{strip.desc}</div>
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

Object.assign(window, { ActivityStrip });
