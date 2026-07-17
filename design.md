# TEDxChicago 2026 — "We The People"
### Design Documentation · Figma rebuild reference · Case-study source

> Source of truth: this repo's `css/styles.css` + `index.html`. Every value
> below is extracted from the shipped code, converted to px (1rem = 16px).
> Live site: https://tedxchicago.com · Preview: https://silencekillsdesign.github.io/TEDxChicago2026/

---

## 1 · Project brief

A single-page event site for TEDxChicago 2026 (Sat, Oct 3 2026, Harris
Theater, Millennium Park). Theme: **We The People** — "three simple words,
one united mission." The direction is *modern but gritty*: broadcast/analog
texture (film grain, TV static), pixel display type, duotone street
photography, and the brand's quotation-mark motif, delivered as a
Squarespace-embeddable vanilla HTML/CSS/JS build.

**Design principles**
1. **Gritty, not grungy** — noise and static are overlays at low opacity; the
   layout beneath is disciplined and grid-driven.
2. **Pixel voice** — Handjet (a pixel display face) carries every headline;
   body copy stays neutral Helvetica.
3. **One red** — TED red is the only accent; everything else is a
   navy/slate/sky cold ramp.
4. **Sharp edges** — zero border-radius anywhere. Cards, buttons, pills are
   hard rectangles.
5. **Photography as material** — duotone-tinted on cards; full-color only
   where the human matters (bio modal, message section).

---

## 2 · Design tokens

### 2.1 Color

| Token | Hex | Usage |
|---|---|---|
| `--red` | `#E62B1E` | TED red — CTAs, eyebrow ticks, pills, tier labels, marquee |
| `--red-deep` | `#B81F14` | Red hover state |
| `--ink` | `#070B14` | Primary background (dark sections) |
| `--navy` | `#243345` | Secondary background (navy sections, cards, modal) |
| `--slate` | `#718294` | Muted text, placeholder text, footnotes |
| `--sky` | `#ABBCCF` | Body text on dark; light section background |
| `--paper` | `#F4F2EC` | Reserved light neutral (rarely used) |

**Derived / supporting values**
| Value | Usage |
|---|---|
| `#05070D` | Near-black — marquee band, footer, hero skyline fill |
| `#182742` | Featured tier card background |
| `#C3CFDF` | Light tier card background |
| `#FFFFFF` | Headings on dark, button text |
| `rgba(171,188,207, .12 / .15 / .3)` | Hairline borders on dark (solid / dashed) |
| `rgba(7,11,20, .45–.85)` | Scrims and darkening layers over media |

### 2.2 Typography

**Families**
- Display: **Handjet** (Google Fonts), weights 300–700 — all headlines,
  uppercase almost everywhere, tight line-height (0.95–1.1).
- Body: **Helvetica Neue / Helvetica / Arial**, line-height 1.6.

**Scale** (min–max = fluid clamp between mobile and 1440px desktop)

| Style | Family/Weight | Size | Tracking | Case | Notes |
|---|---|---|---|---|---|
| Hero brand kicker | Body 700 | 15–19px | 0.42em | UPPER | "TEDxChicago 2026" |
| Section title | Handjet 500 | 42–72px | — | UPPER | lh 0.95 |
| Quote (carousel) | Handjet 400 | 29–51px | 0.02em | — | lh 1.1 |
| Tier name | Handjet 500 | 32px | — | UPPER | |
| Sub-title | Handjet 500 | 29–38px | — | UPPER | venue/experience heads |
| Speaker name (card) | Handjet 600 | 24.8px | 0.01em | — | lh 0.95, white |
| Speaker name (modal) | Handjet 600 | 27–37px | — | — | white |
| Marquee | Handjet 400 | 22.4px | 0.18em | UPPER | red |
| Message closing line | Handjet ~500 | enlarged, red | — | — | 2-line kicker |
| Eyebrow | Body 700 | 12.5px | 0.28em | UPPER | + 40×2px red tick |
| Sub-kicker | Body 700 | 13.6px | 0.18em | UPPER | |
| Button label | Body 700 | 12.8px | 0.22em | UPPER | |
| Body copy | Body 400 | 16–18.4px | — | — | sky on dark |
| Modal role line | Body 700 | ~13px | wide | UPPER | red |
| Tag pill | Body 700 | 9.3–9.9px | wide | UPPER | white on red |
| Footnote (vendors) | Body 400 italic | 13.6px | — | — | slate |

### 2.3 Layout, spacing, grid

| Token | Value |
|---|---|
| Container max-width | **1200px** |
| Container side padding | 20–48px (`clamp(1.25rem, 4vw, 3rem)`) |
| Section vertical padding | 64–120px (`clamp(4rem, 9vw, 7.5rem)`) |
| Message section (condensed) | 48–72px |
| Header height (standalone) | 72px fixed |
| Section head bottom margin | 32–56px |
| Card grid gaps | 17.6–24px |

**Breakpoints** (max-width, px): `1024` involved-visual hides · `1000`
performer grid 2-col · `920` nav → hamburger · `900` vendor gallery 3-col ·
`860` partner grids collapse · `700` message section stacks · `680` bio modal
stacks · `560` vendor 2-col · `540` performer 1-col · `480` partner 2-col.

**Figma frames:** design desktop at 1440 (content 1200) and mobile at 390.

### 2.4 Shape, borders, elevation

- **Border-radius: 0 everywhere.**
- Hairlines on dark: 1px `rgba(171,188,207,.12)` solid (cards, filled logo
  slots) · `.3` dashed (open partner slots) · `.15` (marquee band edges).
- Accent bars: 3px red top border (modal) · 10px color band (tier cards) ·
  2px red underline (`btn-line`, poster card baseline).
- Shadow (modal only): `0 30px 80px rgba(0,0,0,0.55)`.

### 2.5 Motion

| Pattern | Spec |
|---|---|
| Scroll reveal (`data-reveal`) | opacity 0 → 1 + translateY 14px → 0, ~0.5s ease, staggered by section |
| Hover transitions | 0.18–0.35s ease (buttons lift −2px; speaker card lifts −6px) |
| Speaker carousel auto-advance | 1 card / 3s; pauses on hover/touch/focus & off-screen |
| Quote carousel | scroll-snap slides, auto-advance 5.5s |
| Marquee | 28s linear infinite loop |
| Film grain | 0.9s steps(4) jitter |
| TV static | 0.55s steps(1) jitter + opacity flicker 0.3–0.4 |
| Reduced motion | all loops/autoplay disabled; hero video hidden (gradient fallback) |

---

## 3 · Signature effects (recipes)

1. **Film grain (site-wide)** — SVG `feTurbulence` fractalNoise
   (baseFrequency .85, 3 octaves) tile, 10% opacity, `mix-blend: overlay`,
   oversized layer jittering via steps(4). Figma: noise-texture PNG fill at
   10% overlay on a top-level frame layer.
2. **TV static (hero + membership)** — same noise tile at 30–40% opacity,
   faster steps(1) flicker.
3. **Duotone photo treatment (speaker cards)** — photo → grayscale(1),
   contrast 1.08, brightness .95, `mix-blend: luminosity` over navy, plus a
   sky→navy gradient at `mix-blend: color`, plus grain. Figma: B&W image +
   navy/sky gradient overlay set to Color, grain layer above.
4. **Hero video treatment** — full-bleed muted loop under: gradient scrim
   `180°: rgba(7,11,20) .72 → .45 (45%) → .85` + TV static + pixel skyline
   silhouette along the bottom edge.
5. **Fade-out masks (message photo)** — desktop: photo layer masked
   `to right, solid 40% → transparent 100%`; mobile: `to bottom, solid 45% →
   transparent`. Figma: linear-gradient mask on the image group.
6. **Message photo stack** — photo → 50% ink darken layer → centered white
   WTP lockup → grain, all inside the mask.

---

## 4 · Component inventory (→ Figma components)

### Buttons (`Button` with variants: kind × state)
All: uppercase 12.8px/700, 0.22em tracking, padding 15×32, radius 0,
hover lifts −2px.
- **Red** — red bg / white; hover red-deep. (Primary CTA)
- **Ghost** — 2px sky border / sky text; hover white. (Secondary on dark)
- **Dark** — ink bg / sky text; hover navy/white. (On light cards)
- **Line** — text-only + 2px red bottom border; hover red text. (Tertiary)
- **Nav** — compact red (10×24, 15px, no tracking).

### Pills & labels
- **Tag pill** — red bg, white 9.3px/700 upper, padding ~5×10. Modal
  variant rides in a single-line horizontally scrollable strip.
- **Eyebrow** — 40×2 red tick + 12.5px/700 slate upper, 0.28em.
- **Tier label (partners)** — centered red 13.6px/700 upper, 0.28em.

### Speaker poster card (`SpeakerCard`: default / hover)
- 200–240px wide; poster area with duotone photo (or silhouette
  placeholder), tiled quote-mark pattern bg, "TEDxChicago" brand top-right
  (red/white, 9px), name block pinned bottom-left.
- Hover: card lifts −6px; bottom gradient scrim fades in
  (`to top, ink .85 → .55 (28%) → transparent 58%`); red "READ BIO"
  underline link slides up under the white name.
- Below poster: red role line (upper) + 2-line talk excerpt.

### Speaker bio modal (`Modal`: desktop / mobile)
- **Desktop:** 85vw × 85vh, max ~1088×680 at 1440; 3px red top bar; grid
  38% media / 62% body; full-color body shot; body column scrolls.
  Watermark quote-mark ghost at 6% sky, top-right.
- **Mobile (≤680):** portrait+head share a top row (portrait col 42%,
  min-height 34vh); tag strip (h-scroll) below; quote + bio full-width;
  whole card scrolls; close button pinned to dialog corner (36×36).
- Content order: name (Handjet) → red role → formal title → tag strip →
  red-barred blockquote (Handjet) → bio paragraphs → brand mark.

### Tier card (`TierCard`: light / featured)
- Light: `#C3CFDF` bg, navy 10px top band, ink Handjet name.
- Featured: `#182742` bg, red band + red border, white name, red button.
- Both: TEDxChicago wordmark top-right (12px under band), body copy,
  Learn More button bottom.

### Partner slot (`PartnerSlot`: open / filled × 5 tier sizes)
- 5:3 aspect box. Open: 1px dashed sky-30 border, slate "OPEN PARTNERSHIP"
  label, links to /contact; hover: sky border/text. Filled: 1px solid
  sky-12 border, logo centered with 12–22px inset.
- Tier sizing via grid: Lead 1-up (460px) · Beacon 2-up (680 max) ·
  Campfire 3-up (860) · Torchlight 4-up (1000) · Flame 6-up (full).

### Other components
- **Carousel controls** — 48×48 outlined square arrow buttons (← →), top-right of section head.
- **Quote slide** — centered Handjet quote (max 800px) + slate cite; dot pager (active = red dash).
- **Marquee band** — `#05070D` band, 1px hairlines, red Handjet repeating "WE THE PEOPLE • TEDXCHICAGO 2026 •".
- **Timeline row** — red time (Handjet) + white label, hairline separators.
- **Vendor tile** — square crop photo, 8–14px gap grid (4/3/2 cols), hover brightness 1.05 + scale 1.015.
- **Coming-soon card** — navy card, diagonal stripe pattern, red quotes mark, red "COMING SOON" (Handjet) + slate note. Centered 280px when alone.
- **Chicago stars** — `chi-stars.svg`, 4 pixel six-point stars in red, 200–320px wide (hero divider).
- **Footer/nav (standalone build only)** — fixed 72px ink bar; live site uses Squarespace chrome.

---

## 5 · Page anatomy (wireframe order)

1. **Hero** — full-viewport video bg (dark scrim + static + pixel skyline) ·
   centered: brand kicker → WTP quote lockup (SVG) → chi-stars → red +
   ghost CTAs → date/venue meta line.
2. **Marquee** — red pixel ticker band.
3. **The Message** — full-height photo layer left 40vw (L-train sunset,
   darkened 50%, white WTP lockup centered, fades right); copy right with
   lockup heading and enlarged red closing line. Mobile: photo full-bleed
   from section top, fades at bottom, copy below.
4. **Speakers ("The Voices")** — poster-card carousel (15), arrows + auto-advance.
5. **Event Details** — sky section: date title + session times + red Get
   Tickets (→ Universe) · WTP lockup card right on duotone L photo.
6. **Quote carousel** — navy, giant ghost quote-mark bg, 4 swipeable quotes.
7. **Performers ("The Stage")** — Coming Soon card only (grid returns when
   lineup lands; component in `snippets/performer-card.html`).
8. **Membership ("Join Us")** — sky section over parallax skyline + TV
   static: 3 tier cards (Patrons / **Young & Amazing** featured / XChange).
9. **Partners ("Our 2026 Partners")** — 5 tiers, descending slot size;
   filled: Expo Pass (Beacon), Wintrust + Microsoft (Campfire), Fabrik
   (Flame); open slots are Open Partnership CTAs.
10. **Venue & Schedule ("The Day")** — address line; Experience list +
    7-row timeline (10:00 doors → 6:30 close).
11. **Food & Beverage ("The Taste")** — 6-photo square gallery + footnote.
12. **Get Involved** — volunteer pitch + red CTA (→ /volunteer) + big WTP mark.

---

## 6 · Design iteration log (case-study material)

1. **Concept** — distilled 4 brand PDFs into: pixel type + quote-mark motif +
   duotone photography + analog noise. Built as portable vanilla HTML for
   Squarespace from day one.
2. **Speaker card explorations** — tag pills on posters → text-on-path
   marquee inside card frame (killed: "looks awful") → top marquee with
   slide-up bar (killed) → final minimal poster: logo top-right, name
   bottom-left, Read Bio slides in under name on hover. Later: white names
   universally + hover scrim for legibility over photos.
3. **Photography policy evolved** — everything duotone → full-color where
   the person is the point (modal body shots), duotone kept on cards; the
   message-photo went from 1/3-column duotone → full-bleed color background
   with fade masks + lockup overlay.
4. **Hero evolution** — gradient "street photo" stand-in + skyline →
   background video (35MB master compressed to 4.8MB for CDN) → darker
   scrim + grain/static → subtitle line replaced by Chicago-flag stars →
   copy stripped to essentials.
5. **Modal redesign** — 760px two-column → 85vw/85vh with full-body shots →
   mobile overlap bug (fixed-height grid clamping) → final mobile pattern:
   photo+identity row, horizontally scrolling tag strip, whole-card scroll.
6. **Partners** — flat 8-logo grid → 4 named tiers with descending sizes →
   5th premier tier (Lead) → placeholders became "Open Partnership"
   conversion links → first real logos placed.
7. **Content honesty states** — performers replaced by a designed Coming
   Soon card; vendors replaced by an event-photo gallery + "check back"
   footnote. Empty states are designed, not hidden.
8. **Platform constraints as design input** — CSS fully scoped to
   `#tedx-root` (`:where()` to keep specificity flat) so the embed
   coexists with Squarespace chrome; assets on jsDelivr; 20MB CDN cap and
   case-sensitivity shaped the asset pipeline.

---

## 7 · Figma build plan

**Pages:** `🏠 Cover` · `📖 Case Study` · `🔲 Wireframes` (lo-fi grays of
§5) · `🎨 Hi-Fi Desktop 1440` · `📱 Hi-Fi Mobile 390` · `🧩 Design System`.

**Variables (map §2 tokens):** color collection (7 core + derived),
number collection (spacing/breakpoints). Modes optional (dark-only design).

**Text styles:** one per row of the §2.2 table (create at max size; note
min for responsive).

**Components:** Button (5 kinds × 2 states) · Eyebrow · TagPill ·
SpeakerCard (2 states) · Modal (2 sizes) · TierCard (2 kinds) ·
PartnerSlot (2 states × 5 sizes) · QuoteSlide + DotPager · TimelineRow ·
VendorTile · ComingSoonCard · CarouselControls · MarqueeBand.

**Assets to import** (all in repo):
- `assets/brand/SVG/` — wtp lockups (incl. `wtp-lock-h2-mono-white.svg`),
  `chi-stars.svg`, quote marks (`quotes.svg`), wordmarks
- `assets/speakers/*.png` — 15 headshots + 15 body shots
- `assets/images/chicago-l-sunset.jpg`, `assets/vendors/vendor-1..6.jpg`,
  `assets/chicago-l.jpg`, `assets/chicago-skyline.jpg` *(CC placeholders —
  flag in case study)*, `assets/video/hero-video.mp4` (grab a still for
  hi-fi frames)
- Grain/static: export the SVG noise tile from §3 or screenshot a patch.

**Hi-fi shortcut:** the live site at 1440/390 *is* the hi-fi comp —
full-page screenshots make faithful reference underlays while you rebuild
with components.
