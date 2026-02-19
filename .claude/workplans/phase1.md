# Phase 1 — Retro Makeover Plan

## Constraints
- Stack: vanilla HTML, CSS, JS — no frameworks, no build tools
- Content: existing text kept as-is for templating purposes

---

## Design Decisions

### Font
- **Courier Prime** (Google Font) — the cleanest web-ready Courier variant
- Load via `<link>` in `<head>`
- Fallback stack: `"Courier New", Courier, monospace`

### Colour Palette

#### Base
| Role         | Hex       | Notes                          |
|--------------|-----------|--------------------------------|
| Page bg      | `#FFEAB0` | Butter yellow — the anchor     |
| Surface      | `#FFF5D6` | Lighter cream for panels       |
| Text         | `#2D1A00` | Warm near-black brown          |
| Border       | `#5C3A1E` | Dark warm brown, chunky lines  |

#### Warm Accent Colours (multi-colour intent)
| Name         | Hex       | Intended use                                 |
|--------------|-----------|----------------------------------------------|
| Terracotta   | `#C8553D` | Primary buttons / summary backgrounds        |
| Burnt orange | `#E07B39` | Secondary buttons / hover states             |
| Mustard      | `#C9860C` | Header accent / decorative borders           |
| Warm rose    | `#B5566A` | Link colours / visited states                |
| Brick        | `#8B3A2A` | Dark anchor — box-shadow offset colour       |

---

## Step-by-Step Makeover Plan

1. **Colour palette** — swap CSS custom properties in `:root`
2. **Font** — add Google Fonts link; update `--font-family`
3. **Global element styling**
   - Borders: 2–3px solid `--colour-border`
   - `border-radius`: 16–20px
   - Offset `box-shadow` on panels: `4px 4px 0 #8B3A2A`
4. **`<details>`/`<summary>` as retro buttons**
   - Solid accent background on `summary`
   - Visible `:active` press effect (shadow collapses, slight translate)
   - Vary accent colour across different `<details>` blocks for multi-colour effect
5. **Header** — solid mustard band or thick bottom border
6. **Images** — chunky border + offset shadow on `<figure>`
7. **Links and footer** — bold underlines; replace `>>>` with a styled separator
