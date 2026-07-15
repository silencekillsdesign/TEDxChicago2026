# Deploying the TEDxChicago 2026 concept to Squarespace

The site embeds into Squarespace as custom code — Squarespace's native
sections can't reproduce the carousels, modal, hover reveals, or the
duotone/grain treatments.

> ## Uses Squarespace's own nav + footer
>
> The code block ships **without** the embed's header/footer — the page
> keeps the Squarespace site's normal navigation and footer, styled in
> Squarespace as usual. (To ship the embed's own chrome instead, set
> `KEEP_CHROME = True` in `build.py` and regenerate.)
>
> All CSS is scoped to the `#tedx-root` wrapper, so the embed can't
> restyle the Squarespace nav/footer around it. Page-level injection
> (Step 1) is still recommended — it keeps the fonts/CSS/JS off pages
> that don't need them.

Three pieces:

| File | Where it goes in Squarespace |
|---|---|
| `header-injection.html` | Event page → **Page Settings → Advanced → Page Header Code Injection** (top) |
| `footer-injection.html` | Same box, **below** the header code (page-level has no separate footer box) |
| `page-code-block.html` | A single **Code Block** on the event page |

Regenerate all three any time `index.html` changes:

```
python squarespace/build.py
```

(CSS/JS changes need no regeneration — they're loaded live from the CDN.)

## Step 0 — Hosting the CSS / JS / images

The bundle points at jsDelivr, which serves files straight from the
GitHub repo — **but only if the repo is public**.

**Status: the repo is now PUBLIC and pushed, so these URLs are live:**

```
https://cdn.jsdelivr.net/gh/silencekillsdesign/TEDxChicago2026@main/css/styles.css
https://cdn.jsdelivr.net/gh/silencekillsdesign/TEDxChicago2026@main/js/main.js
```

Nothing more to do here for Option A — just re-run `build.py` and push
whenever `index.html`/`css`/`js`/`assets` change.

Note: jsDelivr caches `@main` for ~12 hours. To force-refresh after a
push, pin a commit hash in `build.py`'s `ASSET_BASE`
(`...TEDxChicago2026@<commit>/`) and regenerate, or purge per file via
`https://purge.jsdelivr.net/gh/silencekillsdesign/TEDxChicago2026@main/css/styles.css`.

**Option B (alternative): host the files on Squarespace itself.**
Squarespace can store arbitrary files (served from `/s/filename`): in
any Link editor choose Link → File → Upload. Upload `styles.css`,
`main.js`, and everything under `assets/` (flattened), then update the
URLs in the three bundle files by hand (or set `ASSET_BASE` in
`build.py` accordingly for the HTML and fix the CSS's relative
`url(../assets/...)` references — Option A avoids all of this).

## Step 1 — Page-level Code Injection (needs Business plan or higher)

On the event page, open **Page Settings → Advanced → Page Header Code
Injection** and paste, in this order, into that single box:

1. the contents of `header-injection.html` (fonts + CSS), then
2. the contents of `footer-injection.html` (the JS + `TEDX_ASSET_BASE`).

Page-level injection keeps the fonts/CSS/JS off pages that don't use
them. (The CSS itself is scoped to `#tedx-root`, so even site-wide
injection won't restyle other pages — page-level is just tidier.)

## Step 2 — The page

1. Pages → add a **Blank Page**.
2. Add a single **Code Block**, paste the full contents of
   `page-code-block.html`, set it to HTML mode.
3. Keep Squarespace's own header/footer visible — the embed no longer
   ships its own nav/footer and expects the site's chrome around it.
   Style the Squarespace nav for this page however you like; the hero
   sits flush against whatever sits above it.

## Step 3 — Post-publish checklist

- [ ] Fonts load (pixel Handjet headlines, not monospace fallback)
- [ ] Speaker photos load (they come from the CDN via JS — if they
      404, the footer injection didn't run or `TEDX_ASSET_BASE` is wrong)
- [ ] Carousel auto-advances; modal opens/closes; Escape works
- [ ] The bio modal overlays Squarespace's nav when open (it should —
      it uses z-index 2000; raise it if the SS nav sits higher)
- [ ] Anchor links (`#speakers`, `#event`…) scroll correctly
- [ ] Mobile: stacked schedule, message section, modal 2-col head row
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
