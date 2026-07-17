# Figma kit — TEDxChicago 2026

Goal: get the site into Figma **without rebuilding anything**. The strategy
is import-first: pull the live page in as editable layers, apply the token
system on top, and only componentize the handful of pieces the design-system
page needs. Budget: ~1–2 hours total, most of it optional polish.

Full design reference: [`../design.md`](../design.md).

---

## Step 1 — Import the live page as editable layers (~10 min)

Use the **html.to.design** plugin (by ‹div›RIOTS — free tier is enough):

1. In Figma: Resources → Plugins → search **html.to.design** → run.
2. Import URL: `https://silencekillsdesign.github.io/TEDxChicago2026/`
   - Use the GitHub Pages URL, **not** tedxchicago.com — the standalone
     build includes the designed nav/footer and none of the Squarespace
     wrapper markup, so the import is much cleaner.
3. Import twice: once at **1440** (desktop) and once at **390** (mobile).
4. You now have the full hi-fi page as native, editable Figma layers —
   real text layers, real fills, correct fonts (Handjet is on Google
   Fonts, so Figma has it natively).

What the import won't capture (by design — fix in Step 3):
- The animated grain/static overlays (they're SVG-filter + animation)
- The hero **video** (you'll get whatever frame loaded; swap in `hero-still.jpg`)
- Hover states (Read Bio slide-in, scrims) and the open bio modal —
  open the modal in the browser first if you want it captured, or rebuild
  that one component from `design.md §4`

## Step 2 — Import the design tokens (~5 min)

Use the **Tokens Studio for Figma** plugin (free):

1. Run Tokens Studio → Settings → **Import** → load `tokens.json` from
   this folder (or sync via GitHub: repo `silencekillsdesign/TEDxChicago2026`,
   path `figma/tokens.json`, branch `main`).
2. Two token sets are included:
   - `core` — colors (incl. scrims + hairlines), spacing, sizing,
     border widths, radius (0), opacities, the modal shadow
   - `type-desktop` — 14 composite text styles (family/weight/size/
     tracking/case), desktop sizes with mobile minimums noted in
     descriptions
3. In the plugin: **Styles & Variables → Create variables** (colors/
   numbers) and **Create styles** (typography). Done — your Local
   variables and Text styles panels are populated.

## Step 3 — Drop in the source assets (~10 min)

Figma-native files, drag straight from the repo:

| Asset | Where | Use |
|---|---|---|
| `grain-tile.png` (this folder) | Rect fill → **tile**, layer blend **Overlay**, opacity **10%** (grain) or **35%** (TV static) | The grit. SVG noise filters don't survive Figma import, so use this raster tile |
| `hero-still.jpg` (this folder) | Hero frame background | Stand-in for the video |
| `../assets/brand/SVG/*.svg` | Drag into canvas | Crisp vector lockups, `chi-stars.svg`, quote marks — replace any rasterized versions from the import |
| `../assets/speakers/*.png` | Fills | 15 headshots + 15 body shots |
| `../assets/partners/*` | Partner slots | 4 real logos |
| `../assets/images/chicago-l-sunset.jpg`, `../assets/vendors/vendor-1..6.jpg` | Message section / gallery | |

Duotone recipe for speaker cards (see `design.md §3`): image → grayscale +
a sky→navy gradient rectangle set to blend mode **Color**, grain tile above.

## Step 4 — Componentize only what the system page needs (~30–45 min)

Don't componentize the whole import. From the imported layers, select and
`Create component` for just the design-system exhibits (specs in
`design.md §4`):

- Button (Red / Ghost / Dark / Line / Nav — add a hover variant each)
- Eyebrow, TagPill, TierLabel
- SpeakerCard (default + hover — hover needs the scrim + Read Bio added)
- PartnerSlot (open / filled)
- TierCard (light / featured)
- QuoteSlide + dots, TimelineRow, VendorTile, ComingSoonCard,
  CarouselControls, MarqueeBand
- Modal (rebuild desktop + mobile from §4 — 20 min, it's one layout)

## Suggested file structure

`🏠 Cover` · `📖 Case Study` (narrative from `design.md §6`) ·
`🔲 Wireframes` (gray-box the §5 anatomy) · `🎨 Hi-Fi 1440` (Step 1 import)
· `📱 Hi-Fi 390` (Step 1 import) · `🧩 Design System` (Steps 2–4).

For wireframes: duplicate the hi-fi import, select-all → fill gray /
remove images. Faster than drawing boxes, and perfectly accurate.
