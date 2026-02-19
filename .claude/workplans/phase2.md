# Phase 2 — Two-Panel Navigation Layout

## Constraints
- Stack: vanilla HTML, CSS, JS — no frameworks, no build tools
- Phase 1 styles (colours, font, retro aesthetic) are preserved and built upon
- Content text is unchanged

---

## Goal
Replace the single-column scroll with a two-panel split-screen layout:
- **Left (2fr):** sticky navigation sidebar — menu buttons to jump between sections
- **Right (8fr):** content panel — renders one section at a time based on nav selection
- Both panels scroll independently

---

## Nav Structure

| Label | Type | Content source |
|---|---|---|
| About Me | top-level | Existing `<h2>About Anson</h2>` + div (bio + figure) |
| Why do I want a switch | top-level | Existing `<details>` #1 content |
| Tech Profile | top-level | Existing `<details>` #2 content |
| Portfolio | parent (expandable) | New placeholder text |
| → Snake mini game | sub-option | Existing `<details>` #3 content |
| → My favourite project! | sub-option | Existing `<details>` #4 content (Battleship) |

---

## Design Decisions

### Layout
- `.layout` wrapper: `display: grid; grid-template-columns: 2fr 8fr`
- Height: `calc(100vh - header height - footer height)` — both panels fill the viewport
- Both `.sidebar` and `.content` get `overflow-y: auto`
- Header and footer remain full-width, outside `.layout`

### Sidebar Nav Buttons
- Each nav item is a `<button>` element — full width of the sidebar
- Buttons are flush with each other — no gap, no visible border between adjacent buttons
- The sidebar panel has a single outer border (retro style, matching phase 1)
- Button appearance: background changes on hover and when active/selected
- Active button uses an accent colour from the phase 1 palette
- Portfolio parent button has a `▸` / `▾` indicator to show sub-nav state
- Sub-options are indented and styled slightly smaller; hidden by default

### Content Panel
- Only one `<section>` visible at a time
- "About Me" section shown by default on load
- Sections contain the same content as the current `<details>` blocks (extracted)
- Portfolio section shows placeholder text until content is written

---

## Step-by-Step Plan

1. **HTML restructure** — wrap layout, create nav, convert `<details>` → `<section>` elements
2. **CSS — layout** — grid wrapper, panel heights, overflow
3. **CSS — sidebar buttons** — full-width flush buttons, hover/active states, sub-nav indent
4. **JS — navigation logic** — show/hide sections, active state tracking, portfolio sub-nav toggle
5. **Cleanup** — remove now-unused `<details>`/`<summary>` CSS rules; verify no regressions
