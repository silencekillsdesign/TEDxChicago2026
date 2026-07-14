# Deploying the TEDxChicago 2026 concept to Squarespace

The site embeds into Squarespace as custom code — Squarespace's native
sections can't reproduce the carousels, modal, hover reveals, or the
duotone/grain treatments.

> ## ⚠️ READ THIS FIRST — use PAGE-LEVEL injection, NOT site-wide
>
> **Do NOT paste `header-injection.html` into the site-wide
> Settings → Advanced → Code Injection → Header.** `styles.css` contains
> intentionally global rules — a `* { margin:0; padding:0 }` reset, a dark
> `body { background; color; font-family }`, and `a { color:inherit;
> text-decoration:none }` — that the standalone page needs. Loaded
> site-wide, these **restyle and break every other page on your site**
> (dark background everywhere, wiped spacing, stripped link styles).
>
> **Instead, put BOTH the header and footer code on the event page only:**
> the page's own **Page Settings → Advanced → Page Header Code Injection**.
> That scopes everything to that single page and leaves the rest of the
> site untouched. See Step 1.

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

Page-level injection scopes the fonts/CSS/JS to this page only, so the
global rules in `styles.css` can't leak into the rest of the site.

**Avoid the site-wide Settings → Advanced → Code Injection Header/Footer
boxes** — see the warning at the top. Only use site-wide injection if
you've refactored `styles.css` to scope its `*`/`body`/`a` resets.

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
