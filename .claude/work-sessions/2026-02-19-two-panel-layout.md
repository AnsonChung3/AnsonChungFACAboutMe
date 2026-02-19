# Work Session — 2026-02-19 — Two-Panel Navigation Layout

Reference plan: `.claude/workplans/phase2.md`

---

## Task Checklist

### HTML restructure

#### Commit 1 Layout wrapper

- [ ] Wrap `<main>` and new `<nav>` together in a `<div class="layout">` (inside `<body>`, between `<header>` and `<footer>`)
- [ ] Leave `<header>` and `<footer>` outside `.layout` — they remain full-width

#### Commit 2 Sidebar nav

- [ ] Add `<nav class="sidebar">` as first child of `.layout`
- [ ] Add top-level `<button data-target="about">About Me</button>`
- [ ] Add top-level `<button data-target="why-switch">Why do I want a switch</button>`
- [ ] Add top-level `<button data-target="tech-profile">Tech Profile</button>`
- [ ] Add `<div class="nav-group">` for Portfolio:
  - [ ] `<button class="nav-parent" data-target="portfolio">Portfolio</button>` with `▸` indicator
  - [ ] `<div class="sub-nav hidden">` containing:
    - [ ] `<button data-target="snake">Snake mini game</button>`
    - [ ] `<button data-target="battleship">My favourite project!</button>`

#### Commit 3 Content sections

- [ ] Rename `<main>` to keep it as the content panel (add class `content`) or replace with `<div class="content">`
- [ ] Wrap existing "About Anson" `<h2>` + `<div>` in `<section id="about">`
- [ ] Create `<section id="why-switch">` — move body content out of `<details>` #1 (keep the paragraphs, drop `<details>`/`<summary>` wrappers)
- [ ] Create `<section id="tech-profile">` — move `<ul id="tech-profile">` and any surrounding content out of `<details>` #2
- [ ] Create `<section id="portfolio">` — add placeholder paragraph: "Portfolio overview coming soon."
- [ ] Create `<section id="snake">` — move body content out of `<details>` #3
- [ ] Create `<section id="battleship">` — move body content out of `<details>` #4
- [ ] Add a heading (`<h2>`) to each section matching its nav label, for context when displayed

### CSS — layout

#### Commit 4 CSS layout

- [ ] Add `.layout` rule: `display: grid; grid-template-columns: 2fr 8fr;`
- [ ] Set `.layout` height: `calc(100vh - <measured header height> - <measured footer height>)` — adjust values after visual check
- [ ] Set `.sidebar` to `overflow-y: auto`
- [ ] Set `.content` to `overflow-y: auto`
- [ ] Remove or override `body { width: 75vw; margin: 0 auto }` — layout now fills viewport width
- [ ] Remove or override `main { max-width: 80vw; margin: 0 auto; display: grid }` — grid on `main` no longer needed
- [ ] Add `padding` to `.content` to maintain readability (match existing `main` padding)

### CSS — sidebar button styling

#### Commit 5 Button base

- [ ] `.sidebar button`: `display: block; width: 100%; text-align: left` — full-width flush blocks
- [ ] `.sidebar button`: apply retro font, padding (`0.6rem 1rem`), and `font-weight: 700`
- [ ] `.sidebar button`: set `border: none` and `border-radius: 0` — no visible dividing lines between adjacent buttons; buttons are flush with no gaps
- [ ] `.sidebar button`: `background: var(--colour-surface); color: var(--colour-text)` — neutral default
- [ ] `.sidebar button`: `cursor: pointer`

#### Commit 6 Sidebar panel outer border

- [ ] `.sidebar`: `border-right: 3px solid var(--colour-border)` — single retro border separating panels
- [ ] `.sidebar`: `background: var(--colour-surface)`

#### Commit 7 Hover and active nav states

- [ ] `.sidebar button:hover`: `background: var(--colour-bg)` — subtle highlight
- [ ] `.sidebar button.active`: accent background colour (e.g. `var(--colour-terracotta)`), `color: var(--colour-surface)`
- [ ] `.sidebar button:active` (press): slight `translate(1px, 1px)` effect

#### Commit 8 Sub-nav

- [ ] `.sub-nav button`: `padding-left: 2rem` — indented relative to parent
- [ ] `.sub-nav button`: slightly smaller font size or lighter weight to visually distinguish from top-level items
- [ ] `.sub-nav.hidden`: `display: none`
- [ ] `.nav-parent .indicator`: content `▸` default, `▾` when sub-nav open — use a `<span class="indicator">` inside the button

### JS — navigation logic

#### Commit 9 Nav logic

- [ ] Query all `[data-target]` buttons and all `.content section` elements on `DOMContentLoaded`
- [ ] Write `showSection(id)` function: hides all sections, shows `section#<id>`, updates active class on nav buttons
- [ ] Call `showSection('about')` on load — "About Me" is the default view
- [ ] Add click listener to each non-parent nav button: call `showSection(button.dataset.target)`
- [ ] Add click listener to `.nav-parent` (Portfolio button):
  - [ ] Toggle `hidden` class on `.sub-nav`
  - [ ] Toggle indicator between `▸` and `▾`
  - [ ] Also call `showSection('portfolio')` so the placeholder content loads
- [ ] Ensure the tech profile list (`script.js` `forEach`) still targets `#tech-profile` — verify it works after restructure

### Cleanup

#### Commit 10 Clean up

- [ ] Remove `details`, `summary`, `summary::before`, `details[open] > summary::before`, `summary:active`, and `details:nth-of-type` rules from `style.css` — no longer used
- [ ] Visual check: header and footer still full-width
- [ ] Visual check: both panels scroll independently without affecting each other
- [ ] Visual check: "About Me" loads by default
- [ ] Visual check: Portfolio sub-nav expands/collapses; sub-section content loads correctly
- [ ] Visual check: active nav button styling is clear and consistent

---

## Notes

- Work on the `claude-makeover` branch
- Test each section visually in browser after each step before moving on
- Portfolio section content (overview text) is intentionally deferred — placeholder is sufficient for now
- Nav button "button" appearance comes from size, colour change on interaction, and cursor — NOT from individual borders around each button. The outer sidebar border provides the panel boundary.
