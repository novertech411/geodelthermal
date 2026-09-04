# Geodel — Homepage Design Spec

Single source of truth for the homepage redesign. Colors, type and layout values here are exact — implement against these, not against eyeballed screenshots.

Reference prototype: `Geodel Homepage Redesign.dc.html` (design reference in HTML — recreate it in the Next.js app with existing components and `next/image`; do not ship the HTML).

---

## 1. Foundations

### Color

**Brand**
| Token | Hex | Use |
|---|---|---|
| `accent` | `#6D3BD4` | Primary buttons, active tab labels, featured bento card, badges |
| `accent-hover` | `#5628B8` | Pressed / hover on filled accent |
| `accent-deep` | `#2E1065` | Headings on the purple-tint section |
| `accent-deep-alt` | `#4C1D95` | Eyebrow labels and outlined-button text on tint |
| `accent-light` | `#A78BFA` | Closing-CTA button fill, footer link hover |
| `accent-light-hover` | `#C4B5FD` | Closing-CTA button hover |

**Surfaces**
| Token | Hex | Use |
|---|---|---|
| `bg` | `#F7F6F3` | Page background |
| `bg-dark` | `#0B1211` | Projects section, closing CTA, footer |
| `bg-dark-card` | `#1A2220` | Project card fallback fill |
| `bg-tint` | `#F4F0FC` | "For building owners" section |
| `surface` | `#FFFFFF` | Solutions panel |
| `surface-tint` | `#FBF9FF` | Owner cards |
| `fill-neutral` | `#EDEBE6` | Bento card 1, tab dividers |
| `fill-teal` | `#DCE5E2` | Bento card 4 (text `#4E6963`) |
| `img-placeholder` | `#DDD9D2` | Image loading fill |
| `wordmark` | `#F4F0FC` | Footer wordmark |

**Text**
| Token | Hex | Use |
|---|---|---|
| `fg` | `#0B1211` | Headings, primary text |
| `fg-body` | `#6B7280` | Body copy |
| `fg-body-tint` | `#5B5470` | Body copy on purple tint |
| `fg-muted` | `#9A968E` | Eyebrows, captions, secondary paragraphs |
| `fg-faint` | `#ABA7A0` | Footnotes, row indices, chevrons |
| `success` | `#1F9D6B` | "Active" status text |

**Lines**
`border-hairline` `#E4E1DB` (section row dividers) · `border-button` `#DAD6CF` (outlined buttons) · `border-tab` `#EDEBE6` (tab list) · `border-tint` `#E6DDF9` (owner cards) · `border-pill-tint` `#C9B8EE` (tint eyebrow pill)

**On-dark alphas** — text `rgba(255,255,255,.78)` / `.55` / `.42`; fills `rgba(255,255,255,.12)`; borders `rgba(255,255,255,.14)` / `.22`.

**Gradients**
```
hero:        linear-gradient(180deg, rgba(11,18,17,.72) 0%, rgba(11,18,17,.28) 45%, rgba(11,18,17,.82) 100%)
projectCard: linear-gradient(180deg, rgba(11,18,17,0) 40%, rgba(11,18,17,.85) 100%)
closingCTA:  linear-gradient(180deg, rgba(11,18,17,.62) 0%, rgba(11,18,17,.80) 55%, #0B1211 100%)
```

### Type

**Poppins** (600, some 500) — every heading, metric, wordmark, tab title, testimonial quote.
**Inter** (400/500/600) — body, labels, buttons, nav.
Load both from Google Fonts at weights `400;500;600;700`.

| Style | Family | Size | Weight | LH | LS |
|---|---|---|---|---|---|
| `display/hero` | Poppins | 64 | 600 | 1.04 | -0.035em |
| `display/cta` | Poppins | 46 | 600 | 1.12 | -0.035em |
| `display/owners` | Poppins | 40 | 600 | 1.14 | -0.035em |
| `h2` | Poppins | 34 | 600 | 1.15 | -0.03em |
| `h3/card` | Poppins | 25–27 | 600 | 1.28 | -0.025em |
| `h4/row` | Poppins | 19 | 600 | — | -0.02em |
| `h4/project` | Poppins | 17 | 600 | 1.25 | -0.02em |
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

Wrapping: `text-wrap: balance` on hero / CTA / owners headings; `text-wrap: pretty` on the lead paragraph and testimonial quote.

### Layout & shape
- Container `max-width: 1200px`, padding-inline `34px`.
- Section rhythm: `104–110px` top padding. Hero and closing CTA are full-bleed.
- Grid gaps: `14px` bento · `20–22px` cards · `34px` panel · `48px` footer · `60–70px` two-column sections.
- Radii: `999px` pills · `22px` large panel · `18px` process image · `16px` cards/bento · `14px` insight image / hero card · `10–12px` tiles + small buttons · `8–9px` compact buttons.
- Shadow: `0 24px 60px rgba(11,18,17,.06)` — solutions panel only.
- Buttons: pill `padding: 12–15px 22–30px`; rect `padding: 10–15px 18–26px`.

---

## 2. Sections (top to bottom)

| # | Section | Background | Anchor |
|---|---|---|---|
| 1 | Hero — full-bleed photo, 100vh | `#0B1211` + photo | — |
| 2 | Who we are — intro + 4-card bento | `#F7F6F3` | `#technology` |
| 3 | Solutions — tabbed panel | `#F7F6F3` / panel `#fff` | — |
| 4 | Process — accordion + image | `#F7F6F3` | — |
| 5 | Projects — horizontal rail | `#0B1211` | `#projects` |
| 6 | Impact — numbered rows + big number | `#F7F6F3` | `#impact` |
| 7 | Insights — 2 cards | `#F7F6F3` | `#networks` |
| 8 | For building owners — heading + 2 cards | `#F4F0FC` | — |
| 9 | Testimonial — centered carousel | `#F7F6F3` | — |
| 10 | Closing CTA — full-bleed photo | photo → `#0B1211` | — |
| 11 | Footer — links + giant wordmark | `#0B1211` | — |

### 1. Hero
Full-bleed, no radius, `min-height: 100vh`, `overflow: hidden`, flex column. Cover image at `inset: 0` + hero gradient.

*Header* (`padding: 26px 34px`, space-between): 26px mark + "Geodel" (Poppins 600/19) · nav pill (`padding: 5px`, `rgba(255,255,255,.10)`, `backdrop-filter: blur(14px)`, `1px solid rgba(255,255,255,.14)`) with items `padding: 9px 16px` at 13.5/500 — active = `#F7F6F3` fill / `#0B1211` text, inactive `rgba(255,255,255,.82)` hovering to `#fff` on `rgba(255,255,255,.12)` · accent pill "Book a Demo".

*Bottom row* (`margin-top: auto`, grid `1fr 340px`, gap 48, `padding: 0 34px 34px`, align end):
- Left — H1 (max 640), paragraph (max 460, `rgba(255,255,255,.74)`), two radius-10 buttons: accent fill + `rgba(255,255,255,.12)` w/ `.22` border.
- Right — project card `rgba(247,246,243,.94)` + `blur(10px)`, radius 14, padding 12: 74px thumb (radius 10) + title/blurb/"See project" + `NN / NN`. Beside it two stacked 38px buttons (radius 10, hover fills accent) → next / prev.

### 2. Who we are
Eyebrow → grid `.9fr / 1.1fr` gap 60: H2 left; right a 21px lead whose first sentence is `#0B1211`, remainder `#9A968E`.

Bento: `repeat(4, 1fr)`, gap 14, `min-height: 250px`, radius 16, padding 18.
1. `#EDEBE6` — 26px white `◇` tile + uppercase label; 118px image (radius 10, `margin: 14px 0 auto`); "600 ft" + caption.
2. `#6D3BD4` white — title (max 90px) + 26px `✳` circle on `rgba(255,255,255,.22)`; bottom caption, "4.1 COP*" at 46px, pill `rgba(255,255,255,.18)`.
3. Cover image only.
4. `#DCE5E2` — label `#4E6963`, 27px two-line headline; inner tile `rgba(255,255,255,.66)` radius 12 padding 14: "Loop field / Active" (`#1F9D6B`) + "54.3°F" (22px).

Footnote 11.5 `#ABA7A0` on placeholder metrics.

### 3. Solutions
Eyebrow → grid `1fr / .85fr`: H2 left, 13.5 note right (max 340, justify-self end).

Panel: grid `1fr / 1fr` gap 34, padding 20, radius 22, `#fff`, panel shadow. Left = tab image (`min-height: 380`, radius 16, cover). Right = H3 27 → blurb 13.5 (max 380) → accent pill "Get a feasibility study" → `margin-top: auto` tab list.

Tab row: full-width button, `padding: 17px 4px`, `border-top: 1px solid #EDEBE6`, 13.5, label + `›` (15, `#ABA7A0`); active label = accent, hover = accent.

Tabs: Universities & campuses · Multifamily housing · Municipal & institutional · Commercial & mixed-use.

### 4. Process
Eyebrow → grid `1fr / 1fr` gap 70. Left: H2 (max 420) + 13.5 intro + 5 accordion rows. Right: 520px image, radius 18, cover.

Row: `border-top: 1px solid #E4E1DB`; header `padding: 20px 2px` gap 18 — `(01)` (12, `#ABA7A0`, min-width 30) · label 15/500 (open `#0B1211`, closed `#4B5563`) · `+`/`–` (17, `#6B7280`). Body: `overflow: hidden`, `max-height 0 → 200px`, `transition .32s ease`; paragraph `margin: 0 0 20px 48px`, 13, max 400. Trailing divider closes the list.

Steps: Subsurface survey & site characterisation · Borefield & loop design · Drilling & borehole construction · Heat pump integration & commissioning · Network operations & optimisation.

### 5. Projects
`#0B1211`, `padding: 96px 0`. Eyebrow `rgba(255,255,255,.44)` → H2 left ("Real ground. / Measurable heat.") + 300px 12.5 paragraph right, bottom-aligned.

Rail: flex gap 14, `padding: 0 34px 18px`, `overflow-x: auto`; scrollbar 6px, thumb `rgba(255,255,255,.25)` on track `rgba(255,255,255,.06)`. Card 300×330, radius 16, cover + card gradient; top-left pill on `rgba(247,246,243,.9)` w/ `#0B1211`; bottom kicker 10.5 `rgba(255,255,255,.6)` + title Poppins 17.

Featured (2nd) card: 340 wide, no gradient, 30px accent `↗` circle top-right, accent block `inset 14px` radius 12 padding 16 with badge + title + 11px blurb.

Cards: Philadelphia Urban Campus Thermal Grid · Subsurface Drilling Intelligence Trial *(featured)* · Seasonal Underground Thermal Storage · Multifamily Residential Loop Retrofit · Philadelphia Drilling & HVAC Field Lab.

Controls centered, margin-top 22: 40px circular prev/next (transparent, `.22` border, hover `rgba(255,255,255,.14)`) around an accent pill "View all projects". Arrows scroll ±340px smooth.

### 6. Impact
Grid `1fr / .7fr` align end: H2 (max 420) + 12.5 note.

Standard row — `border-top` hairline, `padding: 28px 0`, grid `60px / minmax(0,220px) / 1fr / auto` gap 24: `(0N)` · category 12.5 `#9A968E` · title Poppins 19 · button. Row 2's button is accent-filled; others outlined (`1px solid #DAD6CF`, hover border `#0B1211`).

Rows: (01) Cost efficiency → Lower operating expenses · (02) Decarbonisation → Cut building carbon at the source · **feature row** · (03) Asset value → Increase property value *(also `border-bottom`)*.

Feature row — `padding: 34px 0`, grid `60px / minmax(0,220px) / 1fr`: 60px rounded photo · **4,000+** at 62px · 12.5 paragraph (max 460) on CO₂ tons targeted annually.

### 7. Insights
H2 (max 380) + outlined "View all insights". Two-column grid gap 20; each card: 260px cover (radius 14) → "Draft · N minute read" (11.5 `#9A968E`) → H3 19. Footnote flags placeholders.

### 8. For building owners
`#F4F0FC`, `margin-top: 104px`, `padding: 96px 0 74px`. Grid `.85fr / 1.15fr` gap 70, align start.
- Left: outlined pill (`padding: 7px 14px`, `1px solid #C9B8EE`, 10.5/600, `.1em`, uppercase, `#4C1D95`) → H2 40 `#2E1065`, margin-top 22.
- Right: two cards gap 22 — `padding: 34px`, radius 16, `#FBF9FF`, `1px solid #E6DDF9`; H3 25 `#2E1065` (max 460) → 13.5 `#5B5470` (max 480) → outlined accent pill (`1px solid #6D3BD4`, text `#4C1D95`, hover fills accent w/ white).
- Centered line, margin-top 72, Poppins 17/500 `#2E1065`.

### 9. Testimonial
Centered, max 800, `padding: 110px 34px`: 44px avatar → quote → name 12.5/600 → role 11.5 `#9A968E` → two 38px outlined circular arrows (`1px solid #DAD6CF`, hover border `#0B1211`).

### 10. Closing CTA
`min-height: 560px`, centered, `overflow: hidden`, bg `#0B1211`. Cover image + closingCTA gradient (resolves to solid so it fuses into the footer). Content max 620, `padding: 90px 34px`: H2 46 white → 13.5 paragraph (max 420, `rgba(255,255,255,.78)`) → pill `#A78BFA` with `#0B1211` text (`padding: 15px 30px`, hover `#C4B5FD`).

### 11. Footer
`#0B1211`, `padding: 78px 0 0`, `overflow: hidden`.
- Grid `minmax(0,1.5fr) repeat(3, minmax(0,.8fr))` gap 48. Cell 1: 30px mark + "Geodel" (Poppins 24) + 12.5 description (max 300, `rgba(255,255,255,.55)`). Columns **Main pages / Platform / Company** under 10px uppercase `.12em` labels (`rgba(255,255,255,.42)`); links 12.5 `rgba(255,255,255,.78)` prefixed `›`, gap 12, hover `#A78BFA`.
- Social: right-aligned gap 10, margin-top 48; 30px circles on `rgba(255,255,255,.12)`, hover `#A78BFA` fill with `#0B1211` text. *(Text labels stand in — use the real icon set.)*
- Legal: margin-top 26, `border-top: 1px solid rgba(255,255,255,.14)`, padding-top 22, 11.5 `rgba(255,255,255,.55)` — policy links left (gap 26), copyright right.
- Wordmark: flex centered, gap 30, margin-top 36, padding-bottom 22 — 168px mark (opacity .9) + "Geodel" at Poppins 600/200px, `line-height: 1`, `-0.05em`, `#F4F0FC`. **No negative bottom margin** — descenders clip against the footer's `overflow: hidden`.

---

## 3. Interaction

| Element | Behavior |
|---|---|
| Hero card arrows | Cycle 3 projects (thumb, title, blurb, index); wraps both ways |
| Solutions tabs | Click sets active; swaps image + H3 + blurb; active label = accent |
| Process accordion | Single-open; clicking the open row closes it; `max-height` `.32s ease` |
| Projects rail | Prev/next scroll ∓340px `behavior: smooth`; rail is also free-scroll / swipe |
| Testimonial arrows | Cycle quotes, wrapping |

Hover states are specified per component. **No focus styles are authored in the prototype — add visible focus rings in the real build.** No loading/error states; no forms — CTAs link to `/contact` and the Calendly URL.

### State
| State | Type | Initial | Trigger |
|---|---|---|---|
| `hero` | index of 3 | `0` | hero arrows |
| `tab` | index of 4 | `0` | tab click |
| `open` | index, `-1` = closed | `0` | accordion header |
| `quote` | index of 2 | `0` | testimonial arrows |

Plus a DOM ref on the projects rail for scroll buttons. All content is static — no fetching.

### Responsive
Prototype is desktop-only. For the build:
- Hero: H1 → ~40px, stack the bottom row, project card full-width or hidden on mobile.
- Bento: 4 → 2 → 1.
- Solutions / process / owners / insights: 2 → 1.
- Impact: stack rows; index + category collapse to one meta line.
- Footer: 4 → 2 → 1; wordmark via `clamp()`, mark drops below ~700px.

---

## 4. Assets
Local paths in the app (the prototype loads them through the live site's image endpoint):

| File | Used by |
|---|---|
| `/images/newhero.png` | Hero background |
| `/images/newlogo.png` | Header mark, footer mark, wordmark row |
| `/images/logo.png` | Alternate mark |
| `/images/site_drilling.jpeg` | Bento 3, featured project card, closing CTA |
| `/images/groundwater_aquifer.png` | Bento 1, STES card |
| `/images/predictive_resource.png` | Process image, municipal tab, insight 2 |
| `/images/insights_banner.png` | Multifamily tab, retrofit card |
| `/images/geothermal/philly_network.png` | Campus card, commercial tab, insight 1 |
| `/images/geothermal/workforce.png` | Universities tab, workforce card, impact feature |
| `/images/avatar.jpg` | Testimonial avatar |

---

## 5. Open items — resolve before launch
- **All metrics are placeholders**, asterisked in the design: `600 ft`, `4.1 COP`, `Up to 68%`, `54.3°F`, `4,000+` tons CO₂.
- **Insight cards** are placeholder posts — wire to the CMS or drop the section.
- **Second testimonial** is a placeholder attribution.
- **Social icons** are text labels standing in for the real icon set.
- **Focus states** are unspecified — define them with the accent color.
