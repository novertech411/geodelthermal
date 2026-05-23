# Geodel — Design System & Direction

> A working design brief for the Geodel website (V3 — "editorial / pill nav" direction).
> Hand this to an AI or a developer alongside the existing HTML/CSS in `/geodel`.
> Everything here describes the intent — read `styles.css` for the exact tokens.

---

## 1. Design philosophy

Geodel is a serious technical platform for geoscientists. The site should feel:

- **Quiet, not loud.** Confidence comes from restraint. No glitter, no neon, no aggressive gradients.
- **Editorial, not "tech bro".** Big display typography, generous whitespace, mono annotations, photographic backgrounds. Closer to a National Geographic feature than a SaaS landing page.
- **Earthy + brand-tinted.** Real landscape photography forms the visual spine. Brand purple is used as a *wash* over images and as accent type — never as the dominant fill.
- **Slow + breathable.** Lots of vertical room. Large type. Big sections. The viewer should feel like they're walking through chapters, not scrolling a feed.

**One-line guidance for every decision:** *would a senior geoscientist trust this?*

### What this direction is NOT
- Not a dashboard. Don't pile up cards, charts, badges or stats just because you can.
- Not "dark mode tech." The base is dark, but it's a warm purple-black with photography, not a flat gray panel UI.
- Not playful. No emoji, no rounded illustration, no AI-generated diagrams. Photography or restrained iconography only.
- Not glassy. We use blur very sparingly — only the pill navbar and the small floating media-caption chip.

---

## 2. Color tokens

All tokens live as CSS custom properties on `:root` in `styles.css`.

### Base / surfaces
| Token | Value | Use |
|---|---|---|
| `--bg` | `#14101f` | Page background. Warm purple-black. |
| `--bg-2` | `#1c1730` | Slightly raised surface (rare). |
| `--panel` | `rgba(255,255,255,0.04)` | Card / quiet container fill. |
| `--panel-2` | `rgba(255,255,255,0.06)` | Card hover fill. |
| `--line` | `rgba(255,255,255,0.10)` | Hairline dividers, default borders. |
| `--line-strong` | `rgba(255,255,255,0.18)` | Stronger borders on hero/CTAs. |

### Ink (text)
| Token | Value | Use |
|---|---|---|
| `--ink` | `#fff` | Primary text. |
| `--ink-soft` | `rgba(255,255,255,0.78)` | Body copy. |
| `--ink-mute` | `rgba(255,255,255,0.55)` | Mono labels, secondary. |
| `--ink-faint` | `rgba(255,255,255,0.35)` | Refs, codes, ultra-tertiary. |

### Brand accent
| Token | Value | Use |
|---|---|---|
| `--accent` | `#8B6CFF` | Brand purple — used in gradients, glows. |
| `--accent-soft` | `#D6CCFF` | **Display italics, mono eyebrows, links.** This is the one you see most. |
| `--accent-deep` | `#5B3FE0` | Used inside radial washes only. |
| `--accent-wash` | `rgba(139,108,255,0.18)` | Icon backgrounds, tints. |

### Status colors (use sparingly)
- Live / OK: `#4ADE80` (soft green, only with a 4px outer glow)
- Don't introduce red. If something fails, write it in mono uppercase, no color.

### Color rules
1. **Never fill a large area with `--accent`.** Brand purple is for italics, glows, washes — never panels.
2. **Backgrounds carry the photo, not the color.** Hero panels live on top of a photographic background with a multi-stop wash, not a solid purple fill.
3. **Hover lifts via opacity, not hue.** `--panel` → `--panel-2`, never a new color.
4. **Status uses one color (green) + mono type.** Don't introduce yellow/red/blue statuses.

---

## 3. Typography

Three faces, in this priority:

| Role | Family | Notes |
|---|---|---|
| UI / body | `Inter` | 400, 500, 600, 700. Default. |
| Display italics | `Instrument Serif` (italic) | Used ONLY inside `<em>` inside display/h2/h3. This is the brand voice. |
| Mono annotations | `JetBrains Mono` | 400/500. Labels, refs, coords, status. ALWAYS uppercase with `letter-spacing: 1.4–2.4px`. |

### Scale
| Token / class | Size (clamp) | Weight | Tracking |
|---|---|---|---|
| `.display` | `clamp(54px, 8vw, 124px)` | 500 (italics 400) | `-0.04em` |
| `.h2` | `clamp(40px, 5vw, 72px)` | 500 (italics 400) | `-0.035em` |
| `.h3` | `clamp(28px, 3vw, 40px)` | 500 | `-0.025em` |
| `.lede` | `clamp(17px, 1.4vw, 20px)` | 400 | normal |
| body | `15px` | 400 | normal |
| `.mono` | `12px` UPPERCASE | 400 | `2px` |
| `.eyebrow` | `12px` UPPERCASE | 400 | `2.4px`, `var(--accent-soft)` |

### The signature move
Every display headline pairs **Inter regular** with **one italic Instrument Serif phrase** colored `--accent-soft`.

Example:
```html
<h1 class="display">
  See the earth<br />
  <em>before you drill it.</em>
</h1>
```

Rules for the italic phrase:
- It's the *emotional* fragment — never a noun phrase alone.
- 2–5 words. If you can't say it in 5, don't italicize it.
- Only one italic per headline. Never two.
- Always lowercase unless the first word.

### Type rules
1. `text-wrap: balance` on all headlines. Always.
2. Never use Inter italic. Italic = Instrument Serif, always.
3. Body copy max-width `~56ch`. Lede `~520px`. Don't let lines run to the page edge.
4. Numbers in metrics use the same display weight (500, tracking `-0.04em`); units in italic (`em`).
5. Mono text is always uppercase. Never use mono in mixed case.

---

## 4. Spacing & layout

- **Container**: `max-width: 1360px`, horizontal padding `32px`.
- **Section vertical rhythm**: `140px` top/bottom for full sections; `96px` for tighter sections (metrics, dividers).
- **Hero**: `min-height: 100vh` for the homepage; `70vh` for inner pages (`.hero-short`).
- **Card padding**: `28px`. **Showcase padding**: `56px`. **CTA padding**: `80px 56px`.
- **Grid**: 4 / 3 / 2 column responsive grids with `gap: 24px`.
- **Border radii**:
  - Small inputs / specs: `10px`
  - Cards / buttons: `12–16px` (`--radius`)
  - Showcase / hero media / CTA: `24px` (`--radius-lg`)
  - Navbar / tag pills / status: `999px`

### The "coords strip"
At the bottom of every hero, a horizontal mono strip with three groups: an index (`01 — …`), a list of meta facts (survey, depth, classification), and a scroll cue. This is a signature element — keep it on every hero.

---

## 5. Components

### Navbar — floating pill
- Fixed, `top: 20px`, centered.
- Width: `calc(100% - 32px)`, max `1320px`.
- Background: `rgba(14,11,31,0.85)` + `backdrop-filter: blur(18px) saturate(180%)`.
- 1px border at 8% white. Pill radius 999px. Height 60px.
- "Get Started" button on the right uses a **solid white** fill with dark text — the only white-fill button on the page outside of buttons in the hero.

### Buttons
| Class | Use |
|---|---|
| `.btn.btn-primary` | White fill, dark text. Hero primary action. |
| `.btn.btn-accent` | Purple gradient with glow. Used on CTAs and "Start project" actions. |
| `.btn.btn-ghost` | Transparent w/ blur and 22% white border. Secondary action. |

All buttons include `→` icon when forward-going. Use `<span class="btn-arrow">→</span>`.

### Tag pill
The little badge that says "System Status — Active v2.4". Uses `.tag-pill`. A glowing dot + mono text. Use ONE per hero, above the headline.

### Eyebrow
Sectional label: `.eyebrow`. Mono caps + a 18px accent dash before the text. Examples:
- `02 — High-resolution interpretation`
- `Module 01 — Data engine`
- `Sector 03 — Infrastructure`

Format is **always** either `## — Title-cased phrase` (homepage flow) or `Module ## — Phrase` (platform), or `Service v2.0 · ID XXXX-##` (solutions).

### Cards
- Base `.card`: 28px padding, 1px line border, `--panel` fill, `--radius` corners.
- Always have a `card-head` with an icon (40×40 purple-tinted square) on the left and a mono ref code on the right (e.g. `ETL-ENGINE`, `VIS-01`).
- Title: 19px, weight 500, `-0.015em`.
- Body: 14.5px, `--ink-mute`, line-height 1.5.

### Photo cards (`.photo-card`)
For sectors / case studies / report tiles.
- Aspect ratio 4:5 (or 5:6 for the reports library).
- Background image with `filter: saturate(0.85)` (calmer, slightly desaturated).
- Bottom-to-top dark gradient fade (`.photo-card-fade`).
- Body sits in the bottom 40% with: mono label → 24px title → 14.5px description → mono CTA in accent.
- Hover: lift 4px + scale image to 1.04 (slow 0.4s ease).

### Showcase
The big "spec card" with media on the left and feature copy + 4 spec tiles on the right. Use this once per page max, for the centerpiece capability.

### Feature list
Numbered (`01`/`02`/`03`) horizontal-rule-divided list. Each row: mono number → bold title (17px) → body. Use INSIDE split content blocks, never standalone.

### CTA panel
The final call-to-action box. Has:
- Brand radial wash background (purple, top-right + deep-purple bottom-left).
- A faint 40×40 grid pattern overlay at 4% opacity.
- Tag-pill above, large headline with italic, lede, primary button, optional bottom meta row with 2–3 mono columns.

---

## 6. Imagery

### Sourcing
- Real photography only. **No SVG illustrations** of the earth, no isometric 3D scenes, no AI-generated landscapes.
- Subjects: landscapes (mountains, geothermal vents, drill sites), field operations (workers in vests, drill rigs), abstract earth textures (basalt, stratified rock).
- Calm color palette: low-saturation, atmospheric. Avoid heavily processed sunsets.

### Treatment in heroes
The hero image is always darkened + tinted with the `.hero-wash` overlay:
```css
background:
  radial-gradient(ellipse at 85% 15%, rgba(167,139,250,0.30), transparent 55%),
  radial-gradient(ellipse at 0% 100%, rgba(91,63,224,0.28), transparent 55%),
  linear-gradient(180deg,
    rgba(20,16,31,0.50) 0%,
    rgba(20,16,31,0.30) 35%,
    rgba(20,16,31,0.80) 100%);
```
Two brand-purple radial highlights + a vertical readability fade.

### Treatment in cards
Photo cards desaturate to `0.85` and add a bottom gradient. Never apply purple wash to photo cards — keep them photographic.

### Grain
A global subtle film grain SVG overlay at `0.045` opacity, `mix-blend-mode: overlay`, fixed across the whole site. This is what stops the brand purple from going synthetic. Never remove it.

---

## 7. Voice & copy

- **Quietly confident.** Short sentences. Active voice. Domain-fluent but not jargon-stuffed.
- **No marketing fluff.** No "unlock", no "revolutionize", no "industry-leading".
- Speak to working geoscientists who've drilled wells and read reports.
- **Embrace small humor when it earns its place.** ("Quiet. Precise. Built for teams who'd rather see clearly than guess loudly.")

### Voice rules
1. Headlines pair a literal phrase with an emotional italic phrase: *"See the earth, before you drill it."*
2. Use mono caps for **technical** info (versions, IDs, coordinates, statuses). Use sentence case for human language.
3. Lede paragraphs are 1–2 sentences. Maximum.
4. Status labels are uppercase, single-word ideal: `AVAILABLE`, `ONLINE`, `READY-TO-SEND`, `DEPLOYED`.

### Naming conventions
- **Sections** are numbered with mono prefixes (`01`, `02`, …) shown in the eyebrow + hero strip.
- **Capabilities** get short codes (`GTH-024`, `EXP-018`, `SIT-012`).
- **Modules** get a kebab name (`ETL-ENGINE`, `ML-KERNEL`, `RTX-VIEW`).

---

## 8. Page structures

Every page follows the same skeleton:

```
[ Floating pill nav ]            (fixed)
[ Hero ]                         (full or short)
  └─ Tag pill
  └─ Display headline (with italic)
  └─ Lede + action
  └─ Mono coords strip
[ Body sections ]                (split rows / cards / showcase)
[ CTA ]                          (the one block with brand wash + grid pattern)
[ Footer ]
```

### Home
hero → metrics → split feature ×2 → 4-card overview → showcase → 3 photo cards → CTA

### Platform
hero → split module ×3 (with spec grids) → 4-card outputs → 6-card "built to expand" → CTA

### Solutions
hero → 3 deep solution sections (alternating split) → 6-card "why Geodel" → CTA

### Reports
hero → featured 3 photo cards → 4-item compact list → newsletter CTA

### Contact
hero → split: contact-method cards + operational-status card | form (sticky) → CTA optional

---

## 9. Anti-patterns (never do this)

1. **Don't add stats / metrics walls for no reason.** Use the metrics row once, on the home page.
2. **Don't generate SVG illustrations of the earth, charts, or drilling rigs.** Use real photos or a placeholder card.
3. **Don't add testimonials.** This direction earns trust through tone, not quotes.
4. **Don't introduce a second accent color.** One purple, one green for status. That's it.
5. **Don't use Inter italic.** Always Instrument Serif for italic.
6. **Don't put icons in headlines or paragraphs.** Icons live only inside card heads.
7. **Don't let any container have only a left-border accent + rounded corners.** This is the cheap SaaS card and we don't use it.
8. **Don't use emoji.** Replace any with a mono code or icon.
9. **Don't use gradients on text outside the accent-soft italic phrase.** No multi-color rainbows.
10. **Don't auto-animate on scroll.** A subtle `transform` on hover for cards/photos is the entire motion vocabulary.

---

## 10. File map

```
/geodel
  ├─ index.html         (home)
  ├─ platform.html
  ├─ solutions.html
  ├─ reports.html
  ├─ contact.html
  ├─ partials.js        (injects shared nav + footer)
  └─ styles.css         (entire design system)
```

The `data-page` attribute on `<body>` drives which nav link is `.active`.

---

## 11. Quick handoff checklist for an AI

When asked to build a new page or section in this direction:

- [ ] Use `<body data-page="...">` and `<div data-mount="nav"></div>` / `<div data-mount="footer"></div>`.
- [ ] Include `<script src="partials.js"></script>` at the bottom.
- [ ] Hero gets a full-bleed background image + `.hero-wash` overlay + mono coords strip.
- [ ] Every headline uses the `.display` / `.h2` / `.h3` classes with **one** `<em>` italic phrase in accent-soft.
- [ ] Every section block opens with an `.eyebrow` (mono).
- [ ] Reach for `.split`, `.cards`, `.showcase`, `.cta` — don't invent new layout primitives.
- [ ] One `.tag-pill` per hero. One `.cta` per page. One metrics row per site (homepage).
- [ ] Photos only — never SVG illustration.
- [ ] Test text-wrap balance on the headline; nudge the italic phrase to a new line via `<br />` if it reads better.

If something doesn't fit the system, ask the human before inventing new tokens.
