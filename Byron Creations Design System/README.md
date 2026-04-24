# Byron Creations — Design System

## Overview

Byron Creations is the personal brand of a musician and music producer. The website serves as a single hub to showcase musical productions, concert activity, recording sessions, photo galleries, and collaborative artistic projects. The target audience is music fans, industry contacts, and potential collaborators.

**Sources provided:**
- `Web Personal/SPECS_GENERAL.md` — General website philosophy and design direction
- `Web Personal/SPECS_MODULOS.md` — Module/page structure specifications
- GitHub repo: `LeonMAG/ByronCreations-web` (https://github.com/LeonMAG/ByronCreations-web) — contains only the spec files above; no production code exists yet.

> ⚠️ No existing production codebase or Figma file was provided. This design system is built from the specifications and the stated aesthetic direction (Apple-style clean transparencies, fluid animations).

---

## Products / Surfaces

1. **Landing Page** — The primary, most visually worked surface. Full-screen video/image loop intro, scroll-driven fade-in animations, links to sub-pages.
2. **Music Production Portfolio** — Grid of album covers with hover interactions (play + info), iTunes-style expanding info panel.
3. **Musical Activity Gallery** — Horizontal full-width strips with multimedia (photos/video) on one side and text on the other; each strip has its own darkened background image.

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Language:** Spanish (primary). Content is written in first person ("mis producciones", "yo haya producido", "algún comentario mío"). Intimate, personal, direct.
- **Casing:** Sentence case throughout — not title case. Headlines feel natural, not corporate.
- **Tone:** Artistic, confident, understated. Never boastful — the work speaks for itself. Descriptions are concise and evocative.
- **Emoji:** Not used. The aesthetic is polished and minimal.
- **Numbers/stats:** Used sparingly if at all; the focus is on art, not metrics.
- **CTA language:** Soft and inviting — "Escucha", "Descubre", "Ver más" — not aggressive.
- **Story-first:** Track info panels may include personal anecdotes ("historia detrás de la canción"), lyrics, platform links. Long-form is acceptable there; everywhere else, brevity rules.

### Copy Examples (from specs)
- "Todas mis producciones musicales, actividad como músico, conciertos, sesiones de fotos..."
- "Historia detrás de la canción"
- "Artistas involucrados"

---

## VISUAL FOUNDATIONS

### Color System
| Role | Value | Notes |
|------|-------|-------|
| Background | `#080808` | Near-black, not pure black |
| Surface 1 | `#111111` | Cards, panels |
| Surface 2 | `rgba(255,255,255,0.06)` | Glassmorphism layer |
| Border | `rgba(255,255,255,0.10)` | Subtle dividers |
| Text Primary | `#F0F0F0` | Near-white body + headlines |
| Text Secondary | `#888888` | Captions, metadata |
| Text Tertiary | `#555555` | Placeholders, hints |
| Accent Gold | `#C8A96E` | Primary accent — warm, musical |
| Accent Light | `#E8D5A3` | Hover/lighter accent state |
| Overlay | `rgba(0,0,0,0.55)` | Over background images |

### Typography
- **Display / Headlines:** Cormorant Garamond (Google Fonts) — elegant, editorial serif with high contrast. Used for artist name, section titles, large pull quotes.
- **Body / UI:** DM Sans (Google Fonts) — clean, modern, highly legible. Used for navigation, body copy, labels, buttons.
- **Mono:** DM Mono — for any technical text, timestamps, track numbers.
- **Scale:** Display 72–120px → H1 48px → H2 36px → H3 24px → Body 16px → Caption 13px
- **Line height:** Display 1.05, body 1.6
- **Letter spacing:** Display −0.02em, UI 0.04em (uppercase labels)

### Backgrounds & Imagery
- Full-bleed photography or video loops as page backgrounds, always darkened with `rgba(0,0,0,0.55)` overlay
- Images: high-contrast, cinematic, preferably monochrome or desaturated with warm highlights
- No gradients as primary backgrounds — use photography + overlay instead
- Subtle radial glow (accent gold, very low opacity) occasionally behind hero text

### Glassmorphism
- Cards and panels use `background: rgba(255,255,255,0.06)`, `backdrop-filter: blur(20px) saturate(180%)`, `border: 1px solid rgba(255,255,255,0.10)`
- Used for the iTunes-style expanding info panel, navigation bar, overlaid UI elements
- Not overused — only for floating/overlay contexts

### Animation
- **Philosophy:** Fluid, deliberate, never gratuitous. Every animation has a purpose.
- **Scroll reveals:** `opacity: 0 → 1` + `translateY(30px → 0)`, easing `cubic-bezier(0.25, 0.46, 0.45, 0.94)`, duration ~700ms
- **Hover states:** `opacity` transitions 150–200ms ease, scale `1 → 1.03` on album covers
- **Page transitions:** Fade through black, ~400ms
- **Expanding panel (iTunes-style):** `max-height` + `opacity` reveal, `cubic-bezier(0.4, 0, 0.2, 1)`, ~500ms
- **No bounces** — everything eases out or uses custom bezier. Apple-style = no spring physics.
- **Staggered reveals:** List items and grid items stagger by 80ms increments

### Spacing & Layout
- Base unit: 8px
- Section padding: 120px vertical, 5vw horizontal
- Max content width: 1400px centered
- Grid: CSS Grid, album covers 3–4 columns on desktop, 1–2 on mobile

### Cards
- Album cover cards: square aspect ratio, slight `box-shadow: 0 8px 32px rgba(0,0,0,0.6)`, no border radius (or 4px max)
- Info panels: full-width, glassmorphism, 2px `border-top` in accent gold
- No drop shadows on UI elements over dark backgrounds — use subtle borders instead

### Corner Radii
- Buttons: `6px`
- Cards (non-album): `8px`
- Album covers: `4px` (nearly square)
- Panels/drawers: `0` (full edge to edge)
- Pill badges: `100px`

### Hover & Press States
- Links: color transition to accent gold, `150ms ease`
- Buttons: `opacity: 0.85` on hover, `scale(0.97)` on press
- Album covers: overlay fades in, play button appears, `scale(1.03)` on the image

### Navigation
- Fixed top bar, glassmorphism, transitions from transparent to blurred on scroll
- Navigation items: DM Sans, 13px, `letter-spacing: 0.1em`, uppercase
- Active: accent gold color

---

## ICONOGRAPHY

- No icon font bundled in existing codebase (none provided)
- **Recommended system:** Lucide Icons (CDN) — clean, minimal, 24px stroke-based SVGs; matches the minimal Apple-like aesthetic perfectly
- Play/pause controls: custom SVG circles with centered play triangle, matching the album cover hover state
- Info button: circular, stroke-only "i" glyph
- Platform icons (Spotify, Apple Music, etc.): use official SVG logos from brand kits
- No emoji used as icons
- Unicode characters NOT used as icons
- See `assets/` for any copied visual assets

---

## FILE INDEX

```
README.md                          ← This file
SKILL.md                           ← Agent skill definition
colors_and_type.css                ← CSS custom properties for colors + typography
assets/                            ← Logos, images, and visual assets
  logo.svg                         ← Byron Creations wordmark (placeholder)
fonts/                             ← Web font files (Google Fonts substitutes)
preview/                           ← Design system card previews (registered in DS tab)
  colors-base.html
  colors-semantic.html
  type-display.html
  type-body.html
  type-scale.html
  spacing.html
  radii-shadows.html
  animation.html
  components-buttons.html
  components-cards.html
  components-nav.html
  components-album-grid.html
  components-info-panel.html
  components-strip.html
  brand-logo.html
ui_kits/
  website/
    index.html                     ← Landing page prototype
    Header.jsx
    HeroSection.jsx
    AlbumGrid.jsx
    InfoPanel.jsx
    ActivityStrip.jsx
    Footer.jsx
```
