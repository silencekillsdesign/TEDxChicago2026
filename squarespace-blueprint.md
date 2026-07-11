# Squarespace handoff blueprint

This document translates the current TEDxChicago 2026 landing page into a Squarespace-friendly structure.

## 1. Recommended Squarespace page approach

Use a single homepage with anchored sections. This will preserve the current single-page feel while staying simple to edit in Squarespace.

### Best setup
- Homepage: one long page with section anchors
- Navigation links: Home, Speakers, Event, Tickets, Get Involved, Contact
- Keep the layout visually close to the current design, but simplify any advanced interactions

## 2. Section-by-section mapping

### A. Header / navigation
- Use Squarespace header navigation
- Keep the logo text style close to the current brand
- Add a prominent Tickets button

### B. Hero section
- Use a full-width banner or a first section with a large image background
- Keep the headline style: large, bold, uppercase, with the We The People lockup
- Use the current palette:
  - Red: #E62B1E
  - Ink: #070B14
  - Navy: #243345
  - Slate: #718294
  - Sky: #ABBCCF

### C. Marquee / announcement bar
- Use a simple text marquee or scrolling banner
- Keep it as a thin band under the hero

### D. Speakers section
- Use a gallery, collection, or a simple grid of cards
- Each speaker card should include:
  - name
  - title/role
  - short topic or theme
  - link to full bio
- If Squarespace blocks are too limited, use a simple custom grid with cards

### E. Event details section
- Use a two-column layout with:
  - left: event info and ticket CTA
  - right: visual lockup or image block
- Add date, time, venue, and ticket CTA clearly

### F. Quote carousel
- Use a simple rotating quote block or a section with one quote at a time
- If animation is too complex, use a static quote block for launch and add rotation later

### G. Performers / artists section
- Use a card grid with 3–4 items
- Include a “Coming Soon” card if needed

### H. Membership tiers section
- Use a three-card layout with one featured card
- Keep the structure simple: Patron, Sponsor, Community or similar

### I. Get involved / pre-footer section
- Use a strong CTA area with one clear action button
- Good for Tickets, Volunteer, Partner, or Contact

### J. Footer
- Keep it minimal with:
  - logo or brand name
  - social links
  - copyright/legal text

## 3. Content to prepare before building

Replace all current placeholders with actual content:
- event date and time
- venue name
- speaker names and bios
- performer names and roles
- ticket link
- contact email
- social links

## 4. Visual styling to carry over

### Typography
- Display font: Handjet for headlines and short uppercase labels
- Body font: Helvetica Neue / Arial / sans-serif

### Buttons
- Use red primary buttons
- Use ghost buttons with a border for secondary actions

### Layout spacing
- Keep generous section padding
- Use strong contrast between dark and light sections

### Effects to keep
- gritty texture overlay
- bold headline treatment
- strong red accents
- dark navy and ink contrast

## 5. What to simplify for Squarespace

These features are possible but often not worth the effort on launch:
- animated dropdown nav
- complex reveal-on-scroll transitions
- custom carousels with custom JS
- full-screen parallax effects
- speaker modal popups

A simpler version will still look polished and be much easier to maintain.

## 6. Suggested Squarespace block plan

### Homepage structure
1. Header
2. Hero banner
3. Marquee/announcement bar
4. Speakers section
5. Event section
6. Quotes section
7. Performers section
8. Membership tiers section
9. Get involved CTA
10. Footer

### Recommended block types
- Hero: banner or image section
- Speakers: gallery, summary block, or custom grid
- Event: text + image section
- Quotes: simple text section with rotating content
- Performers: gallery or cards
- Tiers: text blocks or cards
- Footer: simple text + social links

## 7. Custom CSS to add in Squarespace

Use the site-wide custom CSS area for these basics:

```css
:root {
  --red: #E62B1E;
  --ink: #070B14;
  --navy: #243345;
  --slate: #718294;
  --sky: #ABBCCF;
}

body {
  font-family: Helvetica Neue, Arial, sans-serif;
  background: var(--ink);
  color: var(--sky);
}

h1, h2, h3, .sqs-block-button-element, .page-section-title {
  font-family: "Handjet", "Courier New", monospace;
  text-transform: uppercase;
}

.sqs-block-button-element {
  background: var(--red) !important;
  border-color: var(--red) !important;
}
```

## 8. Recommended implementation order

1. Create the page structure in Squarespace
2. Add the hero and navigation
3. Add the event, speakers, and artists sections
4. Add the quote and membership sections
5. Add the CTA and footer
6. Apply custom CSS
7. Test mobile and desktop
8. Connect forms and links

## 9. Launch checklist

- all buttons work
- all links point to real destinations
- mobile layout looks good
- typography is readable
- event info is correct
- ticket link is live
- social links are correct
- SEO title and description are filled in
