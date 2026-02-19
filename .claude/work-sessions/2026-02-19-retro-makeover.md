# Work Session — 2026-02-19 — Retro Makeover
Reference plan: `.claude/workplans/phase1.md`

---

## Task Checklist

### 0 · Colour tokens file (extra)
- [x] Create `colours.css` with all colour custom properties (base + accents) as CSS variables in `:root`
- [x] Link `colours.css` in `index.html` before `style.css`
- [x] Remove any colour variables remaining in `style.css` `:root` to avoid duplication

### 1 · Colour palette
- [x] In `colours.css`: replace base variables (`--colour-bg`, `--colour-surface`, `--colour-text`, `--colour-border`) with new palette values
- [x] In `colours.css`: replace old primary/muted variables with the five warm accent variables (`--colour-terracotta`, `--colour-orange`, `--colour-mustard`, `--colour-rose`, `--colour-brick`)
- [x] Verify no old hex values are left hardcoded in `style.css`

### 2 · Font
- [x] Add Google Fonts `<link>` for **Courier Prime** in `<head>` of `index.html`
- [x] Update `--font-family` in `style.css` `:root` to `"Courier Prime", "Courier New", Courier, monospace`

### 3 · Global element styling
- [x] Update `--radius` in `style.css` `:root` to `18px`
- [x] Set default border on `details` and other panel elements to `3px solid var(--colour-border)`
- [x] Add offset `box-shadow: 4px 4px 0 var(--colour-brick)` to panel elements (`details`, `figure`)
- [x] Update `body` to use new `--colour-bg` and `--colour-text`

### 4 · `<details>` / `<summary>` retro buttons
- [x] Style `summary` with solid background, padding, and `border-radius`
- [x] Remove default browser marker on `summary` (`list-style: none` + `::marker` / `::-webkit-details-marker`)
- [x] Add custom open/closed indicator to `summary` (e.g. `+` / `–` via `::before` pseudo-element)
- [x] Add `:active` press effect on `summary`: collapse shadow + `translate(2px, 2px)`
- [x] Assign a distinct accent colour per `<details>` block — use `details:nth-of-type(n) > summary` selectors:
  - [x] Block 1 (Why switch): terracotta
  - [x] Block 2 (Tech Profile): burnt orange
  - [x] Block 3 (Snake): mustard
  - [x] Block 4 (Battleship): warm rose

### 5 · Header
- [x] Give `header` a solid band background (`--colour-surface` with border and shadow)
- [x] Style `h1` colour (`--colour-terracotta`)
- [~] ~~ABORTED: text shadow on h1~~ — removed by design; shadow blended with text colour

### 6 · Images
- [x] Add `3px solid var(--colour-border)` border to `figure` elements
- [x] Add offset `box-shadow` to `figure` matching panel style
- [~] ~~ABORTED: rework `img` max-width~~ — flex-based approach tried and reverted; `max-width: 49%` kept as-is

### 7 · Links and footer
- [x] Update `a` base style: `font-weight: bold` and `text-decoration: underline`
- [x] Update `a:visited`, `a:hover`, `a:active` to use appropriate warm accents
- [x] Replace the `>>>` text in `footer` with `·` separator
- [x] Style footer text and links to match new palette

---

## Notes
- Work on a feature branch (`claude-makeover` already exists — use it)
- Test each section visually in browser after each step before moving on
