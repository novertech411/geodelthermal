# Handoff: Geodel Homepage Redesign

## Overview
A full visual redesign of the geodelthermal.com homepage. The original hero concept is retained (new copy + a project card); everything below it is replaced with a light editorial layout: bento metric cards, a tabbed building-type card, a numbered process accordion, a dark horizontal project rail, numbered impact rows, insight cards, a testimonial carousel, an owner-focused two-column section, and a photo-CTA footer with a giant wordmark.

Brand accent moved from orange to **purple**.

## About the Design Files
`Geodel Homepage Redesign.dc.html` in this bundle is a **design reference created in HTML** — a prototype showing intended look and behavior, not production code to copy directly. It is authored with inline styles and a small runtime helper, so it will not drop into a Next.js app as-is.

The task is to **recreate this design in the existing geodelthermal.com codebase** (Next.js + React, with whatever styling layer it already uses — Tailwind, CSS modules, styled-components) using its established patterns, components, and image pipeline (`next/image`). Read the HTML for exact values; write idiomatic components.

To open the reference: put both `Geodel Homepage Redesign.dc.html` and `support.js` in the same folder and open the HTML in a browser.

## Fidelity
**High-fidelity.** Final colors, typography, spacing and interactions. Recreate pixel-accurately using the codebase's existing libraries. All values below are exact.

## Design Tokens

### Colors
| Role | Hex |
|---|---|
| Accent (primary purple) | `#6D3BD4` |
| Accent hover / pressed | `#5628B8` |
| Accent deep (headings on tint, footer bg) | `#2E1065` |
| Accent deep alt (labels) | `#4C1D95` |
| Accent light (footer CTA button, footer link hover) | `#A78BFA` |
| Accent light hover | `#C4B5FD` |
| Page background | `#F7F6F3` |
| Ink / primary text | `#0B1211` |
| Body text | `#6B7280` |
| Muted label text | `#9A968E` |
| Faint text (footnotes) | `#ABA7A0` |
| Hairline border | `#E4E1DB` |
| Border (buttons) | `#DAD6CF` |
| Card fill neutral | `#EDEBE6` |
| Image placeholder fill | `#DDD9D2` |
| Bento card teal-grey | `#DCE5E2` (text `#4E6963`) |
| Purple section tint | `#F4F0FC` |
| Purple card fill | `#FBF9FF` (border `#E6DDF9`) |
| Purple card body text | `#5B5470` |
| Purple pill border | `#C9B8EE` |
| Dark section bg | `#0B1211` (cards `#1A2220`) |
| Wordmark / footer light text | `#F4F0FC` |
| Success green (status text) | `#1F9D6B` |

Overlay gradients:
- Hero: `linear-gradient(180deg, rgba(11,18,17,.72) 0%, rgba(11,18,17,.28) 45%, rgba(11,18,17,.82) 100%)`
- Project cards: `linear-gradient(180deg, rgba(11,18,17,0) 40%, rgba(11,18,17,.85) 100%)`
- Closing CTA: `linear-gradient(180deg, rgba(46,16,101,.62) 0%, rgba(46,16,101,.78) 55%, #2E1065 100%)`

### Typography
Two families, both Google Fonts, weights 400/500/600/700:
- **Poppins** — all headings, metrics, wordmark, tab titles, testimonial quote.
- **Inter** — all body copy, labels, buttons, nav.

| Use | Font | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Hero H1 | Poppins | 64px | 600 | 1.04 | -0.035em |
| Section H2 | Poppins | 34px | 600 | 1.15 | -0.03em |
| "For owners" H2 | Poppins | 40px | 600 | 1.14 | -0.035em |
| Closing CTA H2 | Poppins | 46px | 600 | 1.12 | -0.035em |
| Card H3 | Poppins | 25–27px | 600 | 1.28 | -0.025em |
| Project card title | Poppins | 17px | 600 | 1.25 | -0.02em |
| Impact row title | Poppins | 19px | 600 | — | -0.02em |
| Big number (4,000+) | Poppins | 62px | 600 | 1 | -0.04em |
| Bento metric | Poppins | 26–46px | 600 | 1 | -0.02 / -0.035em |
| Footer wordmark | Poppins | 200px | 600 | 1 | -0.05em |
| Testimonial quote | Poppins | 25px | 500 | 1.42 | -0.02em |
| Lead paragraph (intro right col) | Inter | 21px | 400 | 1.5 | — |
| Body | Inter | 13.5px | 400 | 1.6–1.65 | — |
| Small body / captions | Inter | 11.5–12.5px | 400 | 1.5–1.6 | — |
| Buttons | Inter | 12.5–14px | 600 | — | — |
| Eyebrow labels | Inter | 10–12px | 500/600 | — | .05–.12em, uppercase |

### Spacing & shape
- Page container: `max-width: 1200px`, horizontal padding `34px`.
- Standard section top padding: `104–110px`.
- Radii: `999px` pills · `16px` cards/bento · `14px` insight images · `10–12px` small tiles/buttons · `8–9px` compact buttons · `18–22px` large panels.
- Shadow (solutions panel only): `0 24px 60px rgba(11,18,17,.06)`.
- `text-wrap: balance` on hero/CTA/owner headings; `text-wrap: pretty` on the lead paragraph and testimonial.

## Screens / Views
Single page, top to bottom.

### 1. Hero — full-bleed
Full-bleed (no margin, no radius), `min-height: 100vh`, bg `#0B1211`, `overflow: hidden`, flex column.
- Background `<img>` absolutely positioned, `inset: 0`, `object-fit: cover`, `object-position: center`, full opacity, plus the hero gradient overlay above it.
- **Header** (relative, flex, space-between, padding `26px 34px`):
  - Logo: 26px square mark + "Geodel", Poppins 600 19px, white, gap 10px.
  - Nav: pill container, `padding: 5px`, `border-radius: 999px`, `background: rgba(255,255,255,.10)`, `backdrop-filter: blur(14px)`, `border: 1px solid rgba(255,255,255,.14)`. Items `padding: 9px 16px`, 13.5px/500. Active item ("Technology") = `#F7F6F3` fill, `#0B1211` text. Inactive = `rgba(255,255,255,.82)`; hover `#fff` on `rgba(255,255,255,.12)`.
  - CTA "Book a Demo": pill, `#6D3BD4`, white, `padding: 12px 22px`, hover `#5628B8`.
- **Bottom row** (`margin-top: auto`, grid `minmax(0,1fr) 340px`, gap 48px, padding `0 34px 34px`, align end):
  - Left: H1 "Power your buildings with the ground beneath them." (max-width 640px), paragraph (max-width 460px, `rgba(255,255,255,.74)`), two buttons gap 12px, radius 10px, `padding: 15px 26px` — primary `#6D3BD4`, secondary `rgba(255,255,255,.12)` + `1px solid rgba(255,255,255,.22)`.
  - Right: project card — `rgba(247,246,243,.94)` + `blur(10px)`, radius 14px, padding 12px, 74px square thumbnail (radius 10px) + title/blurb/"See project" + `NN / NN` index. Beside it a vertical stack of two 38px square buttons (radius 10px, `rgba(255,255,255,.12)`, `1px solid rgba(255,255,255,.24)`, hover fills `#6D3BD4`) for next (→) and prev (←).

### 2. Who we are (`#technology`)
Eyebrow "Who we are" (12px, `#9A968E`, margin-bottom 34px). Grid `.9fr / 1.1fr`, gap 60px: H2 left; right a 21px lead paragraph where the first sentence is `#0B1211` and the rest `#9A968E`.

**Bento row** — `grid-template-columns: repeat(4, 1fr)`, gap 14px, margin-top 56px, each `min-height: 250px`, radius 16px, padding 18px:
1. `#EDEBE6`. Top row: 26px white rounded square with `◇`, and uppercase label "Borehole design". Image 118px tall, radius 10px, `margin: 14px 0 auto`. Metric "600 ft" (Poppins 26px), caption "typical loop depth*".
2. `#6D3BD4`, white text. Title "System efficiency" (15px, max-width 90px) + 26px circular `✳` badge on `rgba(255,255,255,.22)`. Bottom: caption, metric "4.1 COP*" (46px), then a pill `rgba(255,255,255,.18)` "＋ Live loop telemetry".
3. Image only, `object-fit: cover`, fills the card.
4. `#DCE5E2`. Uppercase label `#4E6963`, headline "Up to 68% / lower heating energy*" (27px). Bottom inner tile: `rgba(255,255,255,.66)`, radius 12px, padding 14px — "Loop field / Active" (`#1F9D6B`) left, "54.3°F" (22px) right.

Footnote below, 11.5px `#ABA7A0`: metrics are design targets, confirm before publishing.

### 3. Solutions (tabbed)
Eyebrow "Solutions". Grid `1fr / .85fr`: H2 left, 13.5px note right (max-width 340px, justify-self end).

Panel: margin-top 44px, grid `1fr / 1fr`, gap 34px, padding 20px, radius 22px, `#fff`, the soft shadow. Left = tab image (`min-height: 380px`, radius 16px, cover). Right column: H3 tab title (27px), blurb (13.5px, max-width 380px), purple pill button "Get a feasibility study", then `margin-top: auto` a stacked tab list. Each tab is a full-width borderless button, `padding: 17px 4px`, `border-top: 1px solid #EDEBE6`, 13.5px, label left + `›` (15px, `#ABA7A0`) right. Active tab label is the accent color; hover `#6D3BD4`.

**Tabs** (label / title / image): Universities & campuses · Multifamily housing · Municipal & institutional · Commercial & mixed-use. Blurb copy is in the HTML `tabs` array.

### 4. Process accordion
Eyebrow "Seamless journey". Grid `1fr / 1fr`, gap 70px. Left: H2 (max-width 420px), 13.5px intro, then 5 accordion rows. Right: 520px-tall image, radius 18px, cover.

Each row: `border-top: 1px solid #E4E1DB`; header button `padding: 20px 2px`, gap 18px — index `(01)` (12px `#ABA7A0`, min-width 30px), label (15px/500; open `#0B1211`, closed `#4B5563`), sign `+` / `–` (17px `#6B7280`). Body wrapper `overflow: hidden`, `max-height` animates `0px → 200px` over `.32s ease`; paragraph `margin: 0 0 20px 48px`, 13px, max-width 400px. One row open at a time; clicking the open row closes it. Default open = row 1. A trailing `border-top` divider closes the list.

Steps: Subsurface survey & site characterisation · Borefield & loop design · Drilling & borehole construction · Heat pump integration & commissioning · Network operations & optimisation.

### 5. Projects rail (`#projects`) — dark
`background: #0B1211`, white text, `padding: 96px 0`. Inside the 1200px container: eyebrow "Our work" (`rgba(255,255,255,.44)`), then H2 "Real ground. / Measurable heat." left and a 300px 12.5px paragraph right, aligned to the bottom.

Rail: flex, gap 14px, `padding: 0 34px 18px`, `overflow-x: auto`, custom thin scrollbar (6px, thumb `rgba(255,255,255,.25)`, track `rgba(255,255,255,.06)`). Cards `flex: none`, 300px wide × 330px tall, radius 16px, cover image + bottom gradient; top-left pill badge on `rgba(247,246,243,.9)` with `#0B1211` text; bottom kicker (10.5px, `rgba(255,255,255,.6)`) + title (Poppins 17px).

The **second card is featured**: 340px wide, no gradient, a 30px circular `#6D3BD4` `↗` badge top-right, and a purple inner block (`inset 14px`, radius 12px, padding 16px) holding badge + title + 11px blurb.

Cards: Philadelphia Urban Campus Thermal Grid (Campus) · Subsurface Drilling Intelligence Trial (Field testing, featured) · Seasonal Underground Thermal Storage (STES) · Multifamily Residential Loop Retrofit (Retrofit) · Philadelphia Drilling & HVAC Field Lab (Workforce).

Controls, centered, margin-top 22px: 40px circular prev/next (transparent, `1px solid rgba(255,255,255,.22)`, hover `rgba(255,255,255,.14)`) flanking a purple pill "View all projects". Arrows scroll the rail by ±340px, `behavior: smooth`.

### 6. Impact (`#impact`)
Grid `1fr / .7fr` align end: H2 (max-width 420px) + 12.5px note right.

Four rows, each `border-top: 1px solid #E4E1DB`:
- Rows 1, 2, 4 — grid `60px / minmax(0,220px) / 1fr / auto`, gap 24px, padding `28px 0`: index `(01)`, category (12.5px `#9A968E`), title (Poppins 19px), button. Row 2's button is filled purple; the others are outlined (`1px solid #DAD6CF`, hover border `#0B1211`). Rows: Cost efficiency → "Lower operating expenses"; Decarbonisation → "Cut building carbon at the source"; Asset value → "Increase property value".
- Row 3 (between 2 and 4) is the feature row — grid `60px / minmax(0,220px) / 1fr`, padding `34px 0`: a 60px rounded photo, the number **4,000+** (62px), and a 12.5px paragraph (max-width 460px) about CO₂ tons targeted annually.
- Final row also carries `border-bottom`.

### 7. Insights (`#networks`)
H2 (max-width 380px) left, outlined "View all insights" button right. Two-column grid, gap 20px: each card is a link with a 260px cover image (radius 14px), then "Draft · N minute read" (11.5px `#9A968E`) and an H3 (19px). Footnote below notes these are placeholders.

### 8. For building owners — purple tint
`background: #F4F0FC`, `margin-top: 104px`, `padding: 96px 0 74px`.
- Container grid `.85fr / 1.15fr`, gap 70px, align start.
- Left: outlined pill "FOR BUILDING OWNERS" (`padding: 7px 14px`, `1px solid #C9B8EE`, 10.5px/600, `.1em`, uppercase, `#4C1D95`), then H2 40px `#2E1065`, margin-top 22px.
- Right: two stacked cards, gap 22px — `padding: 34px`, radius 16px, `#FBF9FF`, `1px solid #E6DDF9`. Each: H3 25px `#2E1065` (max-width 460px), 13.5px `#5B5470` paragraph (max-width 480px), then an outlined purple pill (`1px solid #6D3BD4`, `#4C1D95` text, hover fills `#6D3BD4` with white text): "Explore the platform" and "View field deployments".
- Centered closing line, margin-top 72px, Poppins 17px/500 `#2E1065`: "Built with utilities, universities and developers across Philadelphia."

### 9. Testimonial
Centered, `max-width: 800px`, padding `110px 34px`. 44px circular avatar, quote (Poppins 25px/500), name (12.5px/600), role (11.5px `#9A968E`), then two 38px circular outlined arrows (`1px solid #DAD6CF`, hover border `#0B1211`) cycling the quote array.

### 10. Closing CTA — full-bleed photo
`min-height: 560px`, centered flex, `overflow: hidden`, bg `#2E1065`. Cover image + the purple gradient that resolves to solid `#2E1065` at the bottom so it fuses into the footer. Content max-width 620px, padding `90px 34px`: H2 46px white, 13.5px paragraph (max-width 420px, `rgba(255,255,255,.78)`), then a pill `#A78BFA` with `#2E1065` text (`padding: 15px 30px`, hover `#C4B5FD`) — "Get a Free Consultation".

### 11. Footer
`background: #2E1065`, `padding: 78px 0 0`, `overflow: hidden`.
- Link grid `minmax(0,1.5fr) repeat(3, minmax(0,.8fr))`, gap 48px. First cell: 30px mark + "Geodel" (Poppins 24px) and a 12.5px description (max-width 300px, `rgba(255,255,255,.55)`). Three link columns headed by 10px uppercase `.12em` labels (`rgba(255,255,255,.42)`) — **Main pages**, **Platform**, **Company** — links 12.5px `rgba(255,255,255,.78)` prefixed with `›`, hover `#A78BFA`, gap 12px.
- Social row: right-aligned, gap 10px, 30px circles on `rgba(255,255,255,.12)`, 10.5px/600 labels (in, X, ig, yt), hover `#A78BFA` bg with `#2E1065` text. Margin-top 48px. *(Swap these text labels for the codebase's real icon set.)*
- Legal row: margin-top 26px, `border-top: 1px solid rgba(255,255,255,.14)`, padding-top 22px, 11.5px `rgba(255,255,255,.55)` — Privacy policy / Terms and conditions left (gap 26px), copyright right.
- Wordmark row: flex, centered, gap 30px, margin-top 36px, padding-bottom 22px — a 168px logo mark (opacity .9) beside "Geodel" in Poppins 600 200px, `line-height: 1`, `letter-spacing: -0.05em`, color `#F4F0FC`. Do **not** give it a negative bottom margin; the glyph descenders get clipped by the footer's `overflow: hidden`.

## Interactions & Behavior
| Interaction | Behavior |
|---|---|
| Hero card arrows | Cycle 3 projects; swaps thumbnail, title, blurb, `NN / NN` index. Wraps both directions. |
| Solutions tabs | Click sets active tab; swaps image, H3, blurb; active label turns accent. |
| Process accordion | Single-open; clicking the open row collapses it. `max-height` transition `.32s ease`. |
| Projects rail | Prev/next scroll the container by ∓340px with `behavior: smooth`; the rail is also free-scrollable/swipeable. |
| Testimonial arrows | Cycle the quote array, wrapping. |
| All links/buttons | Hover states as specified per component; no focus rings are authored — **add visible focus styles in the real build.** |

No animations beyond the accordion transition and smooth scroll. No loading or error states. Forms: none — CTAs link to `/contact` and the Calendly booking URL.

### Responsive behavior
The reference is authored desktop-only (fixed multi-column grids). For the real build:
- Hero: H1 down to ~40px, stack the bottom row, project card full-width or hidden on mobile.
- Bento: 4 → 2 → 1 column.
- Solutions panel, process section, owners section, insights: 2 → 1 column.
- Impact rows: collapse the 4-column grid to a stacked block; keep the index and category as a single meta line.
- Footer: 4 → 2 → 1 column; wordmark scales with viewport (`clamp()`), and the mark can drop out below ~700px.

## State Management
Four pieces of local UI state on the page component — no data fetching, all content is static:

| State | Type | Initial | Trigger |
|---|---|---|---|
| `hero` | int index into a 3-item array | `0` | hero prev/next |
| `tab` | int index into a 4-item array | `0` | solutions tab click |
| `open` | int index, `-1` = all closed | `0` | accordion header click |
| `quote` | int index into a 2-item array | `0` | testimonial prev/next |

Plus a DOM ref to the projects rail for the scroll buttons.

## Assets
All images are pulled live from the current site via its `next/image` endpoint — in the real codebase reference the local files directly:
- `/images/newhero.png` — hero background
- `/images/newlogo.png` — logo mark (header, footer, wordmark row)
- `/images/logo.png` — alternate mark
- `/images/site_drilling.jpeg` — bento card 3, featured project card, closing CTA
- `/images/groundwater_aquifer.png` — bento card 1, STES project card
- `/images/predictive_resource.png` — process image, municipal tab, insight card 2
- `/images/insights_banner.png` — multifamily tab, retrofit project card
- `/images/geothermal/philly_network.png` — campus project card, commercial tab, insight card 1
- `/images/geothermal/workforce.png` — universities tab, workforce project card, impact feature row
- `/images/avatar.jpg` — testimonial avatar

Fonts: Poppins + Inter from Google Fonts (`400;500;600;700`).

## ⚠️ Content that must be replaced before launch
- **All metrics are plausible placeholders**, marked with `*` in the design: `600 ft`, `4.1 COP`, `Up to 68%`, `54.3°F`, `4,000+` tons CO₂. Confirm or replace with real figures.
- **Insight cards** are placeholder posts ("Draft · N minute read") — wire to the real CMS or remove the section.
- **Second testimonial** is a placeholder attribution.
- Social icons are text labels standing in for the real icon set.

## Files
- `Geodel Homepage Redesign.dc.html` — the full design (markup + interaction logic; the logic class is in the `<script>` at the bottom of the file).
- `support.js` — runtime needed only to open the reference in a browser. Not part of the implementation.
