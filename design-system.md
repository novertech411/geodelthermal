# Geodel — Design System

Site-wide foundations. Applies to **every page**, not just the homepage.
Homepage-specific section layouts live in `design.md` §2.

---

## Color

**Brand**
| Token | Hex | Use |
|---|---|---|
| `accent` | `#6D3BD4` | Primary buttons, active states, badges |
| `accent-hover` | `#5628B8` | Hover/pressed on filled accent |
| `accent-deep` | `#2E1065` | Headings on the purple tint surface |
| `accent-deep-alt` | `#4C1D95` | Eyebrow labels, outlined-button text on tint |
| `accent-light` | `#A78BFA` | Buttons and link hovers on dark surfaces |
| `accent-light-hover` | `#C4B5FD` | Hover on `accent-light` |

**Surfaces**
| Token | Hex | Use |
|---|---|---|
| `bg` | `#F7F6F3` | Page background |
| `bg-dark` | `#0B1211` | Dark sections, closing CTAs, footer |
| `bg-dark-card` | `#1A2220` | Card fill on dark |
| `bg-tint` | `#F4F0FC` | Purple-tint section |
| `surface` | `#FFFFFF` | Raised panels |
| `surface-tint` | `#FBF9FF` | Cards on tint |
| `fill-neutral` | `#EDEBE6` | Neutral cards, dividers |
| `fill-teal` | `#DCE5E2` | Secondary data card (text `#4E6963`) |
| `img-placeholder` | `#DDD9D2` | Image loading fill |

**Text**
| Token | Hex | Use |
|---|---|---|
| `fg` | `#0B1211` | Headings, primary text |
| `fg-body` | `#6B7280` | Body copy |
| `fg-body-tint` | `#5B5470` | Body copy on tint |
| `fg-muted` | `#9A968E` | Eyebrows, captions, secondary paragraphs |
| `fg-faint` | `#ABA7A0` | Footnotes, indices, chevrons |
| `fg-light` | `#F4F0FC` | Large type on dark |
| `success` | `#1F9D6B` | Positive status text |

**Lines** — `#E4E1DB` row dividers · `#DAD6CF` outlined buttons · `#EDEBE6` tab lists · `#E6DDF9` cards on tint · `#C9B8EE` pills on tint.

**On dark** — text `rgba(255,255,255,.78)` primary, `.55` secondary, `.42` labels; fills `rgba(255,255,255,.12)`; borders `rgba(255,255,255,.14)` and `.22`.

**Photo overlays**
```
hero:      linear-gradient(180deg, rgba(11,18,17,.72) 0%, rgba(11,18,17,.28) 45%, rgba(11,18,17,.82) 100%)
card:      linear-gradient(180deg, rgba(11,18,17,0) 40%, rgba(11,18,17,.85) 100%)
fadeToBg:  linear-gradient(180deg, rgba(11,18,17,.62) 0%, rgba(11,18,17,.80) 55%, #0B1211 100%)
```
`fadeToBg` is the pattern for any photo section that must fuse into a dark section below it.

**Rules**
- One accent only. `accent` for interactive fills on light, `accent-light` on dark.
- Max two background tones per page beyond `bg`: one dark (`bg-dark`), one tint (`bg-tint`).
- Never place `accent` text on `bg-dark` — use `accent-light`.

---

## Type

**Poppins** — all headings, metrics, wordmarks, quotes. Weight 600 (500 for quotes).
**Inter** — all body, labels, buttons, nav. Weights 400/500/600.
Google Fonts, `400;500;600;700`. No third family.

| Style | Family | Size | Weight | LH | LS |
|---|---|---|---|---|---|
| `display/xl` | Poppins | 64 | 600 | 1.04 | -0.035em |
| `display/lg` | Poppins | 46 | 600 | 1.12 | -0.035em |
| `display/md` | Poppins | 40 | 600 | 1.14 | -0.035em |
| `h2` | Poppins | 34 | 600 | 1.15 | -0.03em |
| `h3` | Poppins | 25–27 | 600 | 1.28 | -0.025em |
| `h4` | Poppins | 19 | 600 | — | -0.02em |
| `h5` | Poppins | 17 | 600 | 1.25 | -0.02em |
| `metric/xl` | Poppins | 62 | 600 | 1 | -0.04em |
| `metric/lg` | Poppins | 46 | 600 | 1 | -0.035em |
| `metric/md` | Poppins | 22–27 | 600 | 1–1.15 | -0.02em |
| `wordmark` | Poppins | 200 | 600 | 1 | -0.05em |
| `quote` | Poppins | 25 | 500 | 1.42 | -0.02em |
| `lead` | Inter | 21 | 400 | 1.5 | — |
| `body` | Inter | 13.5 | 400 | 1.6–1.65 | — |
| `body/sm` | Inter | 12.5 | 400 | 1.6 | — |
| `caption` | Inter | 11–11.5 | 400 | 1.5 | — |
| `button` | Inter | 12.5–14 | 600 | — | — |
| `eyebrow` | Inter | 10–12 | 500/600 | — | .05–.12em, uppercase |

Every heading carries negative letter-spacing — never set a Poppins heading at `0`.
`text-wrap: balance` on display sizes; `text-wrap: pretty` on leads and quotes.
Max measure: body `~480px`, lead `~640px`, headings `~420–640px`.

---

## Layout

- Container `max-width: 1200px`, padding-inline `34px`.
- Section rhythm `104–110px` top padding. Hero and closing CTA are full-bleed (no radius, no margin).
- Two-column sections: `.85fr/1.15fr`, `.9fr/1.1fr`, `1fr/1fr` or `1fr/.7fr`, gap `60–70px`. Heading left, body or cards right.
- Gaps: `14px` tight card grids · `20–22px` stacked cards · `34px` panel interiors · `48px` footer columns.
- Radii: `999px` pills · `22px` large panels · `16px` cards · `14px` media · `10–12px` tiles and buttons · `8–9px` compact buttons.
- Shadow: `0 24px 60px rgba(11,18,17,.06)` — raised white panels only. Everything else uses borders.

---

## Components

**Eyebrow** — section opener. `Inter 12/500`, `fg-muted`, `margin-bottom: 34px`. Uppercase `.1em` variant only inside pills.

**Buttons**
| Variant | Style |
|---|---|
| Primary | `accent` fill, white, radius `9–10px` or pill, `padding: 12–15px 22–26px`, hover `accent-hover` |
| Secondary (light) | `1px solid #DAD6CF`, `fg` text, hover border `fg` |
| Secondary (dark) | `rgba(255,255,255,.12)` fill, `1px solid rgba(255,255,255,.22)`, hover `.2` |
| Outlined accent | `1px solid accent`, `accent-deep-alt` text, hover fills `accent` with white |
| On dark, primary | `accent-light` fill with `bg-dark` text, hover `accent-light-hover` |

**Icon button** — 38px (square, radius 10) or 40px (circle) for carousels; transparent or `rgba(255,255,255,.12)` with `.22` border; hover fills `accent`.

**Pill badge** — `padding: 6–7px 11–14px`, radius 999. On photos: `rgba(247,246,243,.9)` with `fg` text. On tint: `1px solid #C9B8EE`, `accent-deep-alt`.

**Card** — radius 16, padding `18–34px`. On light: `surface` + shadow, or a flat fill with no border. On tint: `surface-tint` + `1px solid #E6DDF9`. On dark: photo + `card` gradient, `min-height: 250–330px`.

**Nav pill** (over photos) — container `padding: 5px`, radius 999, `rgba(255,255,255,.10)`, `backdrop-filter: blur(14px)`, `1px solid rgba(255,255,255,.14)`. Items `padding: 9px 16px`, `13.5/500`. Active = `bg` fill with `fg` text; inactive `rgba(255,255,255,.82)` → `#fff` on `rgba(255,255,255,.12)`.

**Row list** (numbered/data rows) — `border-top: 1px solid #E4E1DB`, `padding: 28px 0`, grid `60px / minmax(0,220px) / 1fr / auto`, gap 24: `(0N)` in `fg-faint` · category `body/sm` `fg-muted` · title `h4` · button. Last row also `border-bottom`.

**Accordion** — `border-top` hairline per row; header `padding: 20px 2px`, gap 18, index + label + `+`/`–`; body `overflow: hidden`, `max-height 0 → 200px`, `transition: max-height .32s ease`, text indented `48px`. Single-open; clicking the open row closes it. Trailing divider closes the list.

**Horizontal rail** — flex, gap 14, `overflow-x: auto`, `padding-inline: 34px`; scrollbar 6px with `rgba(255,255,255,.25)` thumb on `rgba(255,255,255,.06)` track. Arrow buttons scroll ±340px `behavior: smooth`. Cards `flex: none`. Feature one card by widening it (340 vs 300) and filling its lower block with `accent`.

**Footnote** — `caption` in `fg-faint`, directly under the block it qualifies. Required wherever a number is provisional; asterisk the number itself.

---

## Interaction

- Carousels wrap in both directions and show `NN / NN`.
- Tabs swap media + heading + body together; active label turns `accent`.
- Only two motions site-wide: the accordion's `.32s ease` height and rails' smooth scroll. No scroll-triggered reveals, no parallax.
- Every interactive element needs a hover state. **Focus rings are unspecified in the prototypes — define them once with `accent` and apply globally.**
- Hit targets ≥44px on touch.

---

## Voice

Plain, technical, specific. Physical nouns — ground, loop, borehole, building — over abstractions like "solutions" or "innovation". Sentences state what happens, not how transformative it is. Never claim a number that isn't measured; where a figure is a design target, say so and asterisk it.

---

## Responsive

- Grid columns collapse `4 → 2 → 1`; two-column sections `2 → 1`.
- Display sizes scale down roughly 40% at mobile (`display/xl` 64 → ~40). Use `clamp()`.
- Row-list grids stack; index and category merge into one meta line.
- Container padding stays `34px` down to tablet, then `20px`.
- Decorative elements (oversized wordmarks, secondary photo cards) drop out below ~700px.

---

## Non-negotiables

1. Two fonts. Poppins headings, Inter body.
2. One accent — purple. No second hue.
3. Negative letter-spacing on every Poppins heading.
4. Borders before shadows.
5. Asterisk and footnote every provisional number.
6. No emoji, no gradient backgrounds (photo overlays only), no icon-and-left-border callout boxes.
