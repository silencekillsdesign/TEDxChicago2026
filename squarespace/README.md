# Deploying the TEDxChicago 2026 concept to Squarespace

The site embeds into Squarespace as custom code — Squarespace's native
sections can't reproduce the carousels, modal, hover reveals, or the
duotone/grain treatments. Three pieces:

| File | Where it goes in Squarespace |
|---|---|
| `header-injection.html` | Settings → Advanced → Code Injection → **Header** |
| `footer-injection.html` | Settings → Advanced → Code Injection → **Footer** |
| `page-code-block.html` | A single **Code Block** on the event page |

Regenerate all three any time `index.html` changes:

```
python squarespace/build.py
```

(CSS/JS changes need no regeneration — they're loaded live from the CDN.)

## Step 0 — Hosting the CSS / JS / images

The bundle points at jsDelivr, which serves files straight from the
GitHub repo — **but only if the repo is public**. This repo is currently
**private**, so pick one:

**Option A (recommended): make the repo public.**
GitHub → repo → Settings → General → Danger Zone → Change visibility.
Then push, and these URLs go live automatically:

```
https://cdn.jsdelivr.net/gh/silencekillsdesign/TEDxChicago2026@main/css/styles.css
https://cdn.jsdelivr.net/gh/silencekillsdesign/TEDxChicago2026@main/js/main.js
```

Note: jsDelivr caches `@main` for ~12 hours. To force-refresh after a
push, pin a commit hash in `build.py`'s `ASSET_BASE`
(`...TEDxChicago2026@<commit>/`) and regenerate, or purge via
`https://purge.jsdelivr.net/gh/...`.

**Option B: host the files on Squarespace itself.**
Squarespace can store arbitrary files (served from `/s/filename`): in
any Link editor choose Link → File → Upload. Upload `styles.css`,
`main.js`, and everything under `assets/` (flattened), then update the
URLs in the three bundle files by hand (or set `ASSET_BASE` in
`build.py` accordingly for the HTML and fix the CSS's relative
`url(../assets/...)` references — Option A avoids all of this).

## Step 1 — Code Injection (needs Business plan or higher)

Paste `header-injection.html` into the Header box and
`footer-injection.html` into the Footer box
(Settings → Advanced → Code Injection).

Site-wide injection loads the fonts/CSS/JS on every page. If the
event page is the only custom page, you can instead paste both into
that page's own **Page Settings → Advanced → Page Header Code
Injection** to keep the rest of the site untouched.

## Step 2 — The page

1. Pages → add a **Blank Page**.
2. Add a single **Code Block**, paste the full contents of
   `page-code-block.html`, set it to HTML mode.
3. In Page Settings, hide Squarespace's own header/footer for this
   page if the template allows (or use a full-width/blank template) —
   the embed brings its own nav and footer, and stacking both looks
   broken.

## Step 3 — Post-publish checklist

- [ ] Fonts load (pixel Handjet headlines, not monospace fallback)
- [ ] Speaker photos load (they come from the CDN via JS — if they
      404, the footer injection didn't run or `TEDX_ASSET_BASE` is wrong)
- [ ] Carousel auto-advances; modal opens/closes; Escape works
- [ ] Sticky header doesn't fight Squarespace's announcement bar or
      cookie banner (z-index) — ours uses 1000/2000
- [ ] Anchor links (`#speakers`, `#event`…) scroll correctly
- [ ] Mobile: hamburger menu, stacked schedule, message section
- [ ] Replace placeholder `#` links (Tickets, Team, Contact, Past
      Talks dropdown) with real URLs
- [ ] Replace CC-licensed placeholder photos (Chicago L, skyline,
      farmers market) with owned photography, or add attribution

## Known seams

- Class names `.container`/`.section` were renamed `.tedx-container`/
  `.tedx-section` to avoid colliding with Squarespace's generated
  markup. If a Squarespace theme style still bleeds in (odd fonts or
  margins inside the embed), the fix is scoping/`!important` in
  `styles.css`, not editing Squarespace's panels.
- Editing content: speakers live in the `SPEAKERS` array in
  `js/main.js`; all other copy is in `index.html` (then re-run the
  build script and re-paste the code block).
