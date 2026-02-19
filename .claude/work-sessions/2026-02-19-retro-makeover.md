# Work Session — 2026-02-19 — Retro Makeover
Reference plan: `.claude/workplans/phase1.md`

---

## Task Checklist

### 0 · Colour tokens file (extra)
- [ ] Create `colours.css` with all colour custom properties (base + accents) as CSS variables in `:root`
- [ ] Link `colours.css` in `index.html` before `style.css`
- [ ] Remove any colour variables remaining in `style.css` `:root` to avoid duplication

### 1 · Colour palette
- [ ] In `colours.css`: replace base variables (`--colour-bg`, `--colour-surface`, `--colour-text`, `--colour-border`) with new palette values
- [ ] In `colours.css`: replace old primary/muted variables with the five warm accent variables (`--colour-terracotta`, `--colour-orange`, `--colour-mustard`, `--colour-rose`, `--colour-brick`)
- [ ] Verify no old hex values are left hardcoded in `style.css`

### 2 · Font
- [ ] Add Google Fonts `<link>` for **Courier Prime** in `<head>` of `index.html`
- [ ] Update `--font-family` in `style.css` `:root` to `"Courier Prime", "Courier New", Courier, monospace`

### 3 · Global element styling
- [ ] Update `--radius` in `style.css` `:root` to `18px`
- [ ] Set default border on `details` and other panel elements to `3px solid var(--colour-border)`
- [ ] Add offset `box-shadow: 4px 4px 0 var(--colour-brick)` to panel elements (`details`, `figure`)
- [ ] Update `body` to use new `--colour-bg` and `--colour-text`

### 4 · `<details>` / `<summary>` retro buttons
- [ ] Style `summary` with solid background, padding, and `border-radius`
- [ ] Remove default browser marker on `summary` (`list-style: none` + `::marker` / `::-webkit-details-marker`)
- [ ] Add custom open/closed indicator to `summary` (e.g. `+` / `–` via `::before` pseudo-element)
- [ ] Add `:active` press effect on `summary`: collapse shadow + `translate(2px, 2px)`
- [ ] Assign a distinct accent colour per `<details>` block — use `details:nth-of-type(n) > summary` selectors:
  - [ ] Block 1 (Why switch): terracotta
  - [ ] Block 2 (Tech Profile): burnt orange
  - [ ] Block 3 (Snake): mustard
  - [ ] Block 4 (Battleship): warm rose

### 5 · Header
- [ ] Give `header` a thick bottom border in `--colour-mustard` (or solid band background)
- [ ] Style `h1` colour and consider a text outline or shadow for retro punch

### 6 · Images
- [ ] Add `3px solid var(--colour-border)` border to `figure` elements
- [ ] Add offset `box-shadow` to `figure` matching panel style
- [ ] Confirm `img` max-width and display still works correctly within the new figure style

### 7 · Links and footer
- [ ] Update `a` base style: use `--colour-rose`, add `font-weight: bold` and `text-decoration: underline`
- [ ] Update `a:visited`, `a:hover`, `a:active` to use appropriate warm accents
- [ ] Replace the `>>>` text in `footer` with a styled `<hr>` or CSS border element
- [ ] Style footer text and links to match new palette

---

## Notes
- Work on a feature branch (`claude-makeover` already exists — use it)
- Test each section visually in browser after each step before moving on
