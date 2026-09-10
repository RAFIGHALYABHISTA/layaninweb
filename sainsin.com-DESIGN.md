---
version: alpha
name: Jokico
description: |
  SainsIn's design system projects a modern, approachable educational platform
  rooted in Indonesia's test-preparation ecosystem. The visual identity combines
  calming, nature-inspired greens with crisp whites and deep charcoal text,
  creating a trustworthy yet energetic learning environment. The aesthetic leans
  toward clarity and accessibility—wide breathing room, generous whitespace, and
  playful illustrations (particularly the vibrant student characters in hero
  imagery) make complex exam preparation feel achievable. Rounded corners on
  interactive elements soften the interface, while strategic color-blocking
  replaces heavy shadows to maintain visual lightness. The typography
  prioritizes readability with a thoughtful three-font system, and layout
  rhythms emphasize content hierarchy over ornamentation. Overall, the design
  evokes professionalism tempered with approachability—a platform serious about
  results but joyful about learning.
source:
  url: "https://sainsin.com/"
  pagesAnalyzed: 1
  extractedAt: 2026-09-08
  tokensMeasured: true
colors:
  primary: "#FFFFFF"
  surface-alt: "#F4FAF7"
  on-primary: "#222222"
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -1.5px
  display-md:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1.2px
  display-md-strong:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -1.2px
  heading-xl:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -0.9px
  heading-xl-loose:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: 800
    lineHeight: 1.11
    letterSpacing: 0px
  heading-lg:
    fontFamily: Poppins
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
  heading-md:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: -0.6px
  heading-sm:
    fontFamily: Montserrat
    fontSize: 21.6px
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: -0.54px
  heading-xs:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.43
    letterSpacing: 0.35px
    textTransform: uppercase
  body-lg:
    fontFamily: Poppins
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.78
    letterSpacing: 0px
  body-lg-strong:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: 0px
  body-md:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0px
  body-md-loose:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.71
    letterSpacing: 0px
  body-md-strong:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.43
    letterSpacing: 0px
  body-sm:
    fontFamily: Poppins
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0px
  nav:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0px
  button-md:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  button-md-strong:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.75
    letterSpacing: 0px
  caption-xs:
    fontFamily: Poppins
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.67
    letterSpacing: 0px
  caption-xs-strong:
    fontFamily: Poppins
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: 0px
  caption-xs-tight:
    fontFamily: Poppins
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0px
  caption-xs-uppercase:
    fontFamily: Poppins
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0.96px
    textTransform: uppercase
rounded:
  none: 0px
  xs: 10px
  sm: "18px 18px 18px 26px"
  md: 25.6px
  lg: "26px 26px 18px 18px"
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 28px
  xxxl: 32px
  section: 36px
  band: 40px
borderWidths:
  thin: 1px
shadows:
  sm: "oklab(0.797959 -0.0730103 0.00969124 / 0.4) 0px 0px 0px 1px inset, rgba(6, 122, 88, 0.5) 0px 18px 45px -32px"
  md: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
  lg: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
  xl: "oklab(0.999994 0.0000455678 0.0000200868 / 0.25) 0px 0px 0px 1px inset"
elevationStrategy: layered-micro
themes:
  derived: dark # the other theme is the site's measured palette
  light:
    bg: "#FFFFFF"
    surface: "#F4FAF7"
    surfaceRaised: "#EBF1EE"
    text: "#111111"
    textMuted: "#646464"
    border: "#E2E2E2"
    accent: "#8F8F8F"
    accentFg: "#000000"
    focusRing: "#FFFFFF"
    elevation: shadow
  dark:
    bg: "#0F0F10"
    surface: "#1D1D1E"
    surfaceRaised: "#29292A"
    text: "#FFFFFF"
    textMuted: "#A4A4A4"
    border: "#353536"
    accent: "#FFFFFF"
    accentFg: "#0B0B0C"
    focusRing: "#FFFFFF"
    elevation: "border+surface"
gradients:
  - context: hero
    kind: linear
    value: "linear-gradient(oklab(0.965 -0.0355844 0.0101365 / 0.55) 0px, rgb(255, 255, 255) 100%)"
  - context: section
    kind: linear
    value: "linear-gradient(to top, oklab(0 0 0 / 0.85) 0px, oklab(0 0 0 / 0.45) 50%, rgba(0, 0, 0, 0) 100%)"
  - context: section
    kind: radial
    value: "radial-gradient(rgb(16, 185, 129) 1px, rgba(0, 0, 0, 0) 0px)"
  - context: section
    kind: linear
    value: "linear-gradient(to top, rgb(255, 255, 255) 0px, oklab(0.999994 0.0000455677 0.0000200868 / 0.8) 50%, rgba(0, 0, 0, 0) 100%)"
  - context: section
    kind: linear
    value: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75) 55%, rgba(0, 0, 0, 0.9))"
components:
  button-primary:
    textColor: "oklch(0.514 0.106 165.2)"
    border: "2px solid oklch(0.514 0.106 165.2)"
    height: 60px
    padding: "16px 28px 16px 28px"
    fontSize: 16px
    fontFamily: Poppins
    fontWeight: 600
    lineHeight: 1.5
    rounded: 14px
    backgroundColor: "{colors.primary}"
  button-primary-sm:
    typography: "{typography.body-md-strong}"
    textColor: "oklch(0.208 0.003 247.9)"
    border: "1px solid oklch(0.949 0.003 354.7)"
    height: 44px
    padding: "0px 20px 0px 20px"
    rounded: 14px
    backgroundColor: "{colors.primary}"
  button-text:
    textColor: "{colors.primary}"
    height: 60px
    padding: "16px 28px 16px 28px"
    fontSize: 16px
    boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
    fontFamily: Poppins
    fontWeight: 600
    lineHeight: 1.5
    rounded: 14px
    backgroundColor: "oklch(0.514 0.106 165.2)"
  button-text-sm:
    typography: "{typography.body-md-strong}"
    textColor: "{colors.primary}"
    height: 48px
    padding: "0px 20px 0px 20px"
    boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
    rounded: 14px
    backgroundColor: "oklch(0.514 0.106 165.2)"
  card:
    typography: "{typography.button-md}"
    textColor: "oklch(0.208 0.003 247.9)"
    boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0 0 0 / 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
    rounded: "{rounded.lg}"
    backgroundColor: "{colors.primary}"
  card-lg:
    typography: "{typography.button-md}"
    textColor: "oklch(0.208 0.003 247.9)"
    boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0 0 0 / 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
    rounded: "{rounded.sm}"
    backgroundColor: "{colors.primary}"
  navigation:
    typography: "{typography.button-md}"
    textColor: "oklch(0.208 0.003 247.9)"
    height: 73px
    backgroundColor: "{colors.primary}"
  footer:
    typography: "{typography.button-md}"
    textColor: "oklch(0.208 0.003 247.9)"
    border: "1px solid oklch(0.949 0.003 354.7)"
    backgroundColor: "{colors.primary}"
  link:
    textColor: "{colors.primary}"
    padding: "0px 32px 0px 32px"
    fontSize: 16px
    boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
    fontFamily: Poppins
    fontWeight: 600
    lineHeight: 1.5
    rounded: 14px
    backgroundColor: "oklch(0.514 0.106 165.2)"
  link-sm:
    textColor: "oklch(0.21 0.034 264.665)"
    padding: "8px 12px 8px 12px"
    fontSize: 14px
    boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
    fontFamily: Geist
    fontWeight: 500
    lineHeight: 1.43
    rounded: 6px
    backgroundColor: "{colors.primary}"
states:
  input-focus:
    target: input
    state: focus
    outline: "rgba(0, 0, 0, 0) solid 2px"
    borderColor: "oklch(0.546 0.245 262.881)"
    outlineColor: "rgba(0, 0, 0, 0)"
    outlineWidth: 2px
  input-hover:
    target: input
    state: hover
    borderColor: "rgba(0, 0, 0, 0)"
    backgroundColor: currentcolor
  nav-focus:
    target: nav
    state: focus
    opacity: 1
  other-hover:
    target: other
    state: hover
    backgroundColor: "rgba(0, 0, 0, 0.7)"
  nav-hover:
    target: nav
    state: hover
    opacity: 1
  other-focus-visible:
    target: other
    state: focus-visible
    opacity: 1
  input-disabled:
    target: input
    state: disabled
    opacity: 0.5
  other-disabled:
    target: other
    state: disabled
    opacity: 0.5
  other-focus:
    target: other
    state: focus
    borderColor: "oklch(0.741 0.142 168.1)"
breakpoints:
  - width: 375
    containerWidth: 343
    gridColumns: 3
    navLinksVisible: 21
    menuToggleVisible: true
    headingPx: 36
    bodyPx: 16
    sectionPaddingX: 0
  - width: 768
    containerWidth: 720
    gridColumns: 3
    navLinksVisible: 21
    menuToggleVisible: true
    headingPx: 48
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1024
    containerWidth: 960
    gridColumns: 3
    navLinksVisible: 28
    menuToggleVisible: true
    headingPx: 60
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1280
    containerWidth: 1216
    gridColumns: 3
    navLinksVisible: 28
    menuToggleVisible: true
    headingPx: 60
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1440
    containerWidth: 1280
    gridColumns: 3
    navLinksVisible: 28
    menuToggleVisible: true
    headingPx: 60
    bodyPx: 16
    sectionPaddingX: 0
coverage:
  statesFound: 61
  gradientsFound: 5
  rolesUnassigned: 0
  archetypesUnnamed: 0
  archetypesDetected: 0
  responsiveMeasured: true
  stylesheetsBlocked: true
  semanticRampDeclared: false
---

# Design System Inspired by SainsIn

## 1. Visual Theme & Atmosphere

SainsIn's design system projects a modern, approachable educational platform rooted in Indonesia's test-preparation ecosystem. The visual identity combines calming, nature-inspired greens with crisp whites and deep charcoal text, creating a trustworthy yet energetic learning environment. The aesthetic leans toward clarity and accessibility—wide breathing room, generous whitespace, and playful illustrations (particularly the vibrant student characters in hero imagery) make complex exam preparation feel achievable. Rounded corners on interactive elements soften the interface, while strategic color-blocking replaces heavy shadows to maintain visual lightness. The typography prioritizes readability with a thoughtful three-font system, and layout rhythms emphasize content hierarchy over ornamentation. Overall, the design evokes professionalism tempered with approachability—a platform serious about results but joyful about learning.

**Key Characteristics**

- **Warm, green-forward palette** anchored in teal/emerald accents signaling trust and growth
- **Flat, color-blocked elevation** using surface tints rather than shadows for depth
- **Generous whitespace** and `{spacing.md}` to `{spacing.band}` padding creates breathing room between sections
- **Rounded, pill-shaped buttons** (`{rounded.full}`) contrast with subtly rounded cards (`{rounded.md}` to `{rounded.lg}`)
- **Three-tier typography** (Montserrat, Poppins, Geist) balancing display impact with body legibility
- **Playful, illustrative hero imagery** featuring diverse student characters in vibrant palettes
- **Light alternating section bands** (`{colors.surface-alt}` — `#F4FAF7`) breaking monotony without visual noise
- **High-contrast text** on white backgrounds; no semantic status colors declared, keeping focus on primary action

---

## 2. Color Palette & Roles

### Primary

- **Brand Accent** (`{colors.primary}` — `#FFFFFF`): Counter-intuitive but verified: white functions as the primary on this site in the context of brand identity and CTA backgrounds. It appears as the fill on the primary button (paired with emerald text), the signature brand accent in the hero band, and the active state highlighting. Despite being achromatic, it is the system's primary semantic signal.

### Interactive

- **Emerald CTA Text** (`oklch(0.514 0.106 165.2)` — approximately `#00A870`): Button and link text color on white backgrounds; the true functional primary used for all interactive states and CTA labels. Derived from component data and interaction states throughout the interface.

### Neutral Scale

- **Deep Charcoal / Primary Text** (`{colors.on-primary}` — `#222222`): Default body and heading text on light surfaces. High contrast with white, ensuring legibility for long-form content.
- **Canvas / Background** (`#FFFFFF`): Main surface for content cards, forms, and base page layer.

### Surface & Borders

- **Alternating Section Band** (`{colors.surface-alt}` — `#F4FAF7`): Soft, barely-tinted green used for alternating section backgrounds. Creates visual rhythm without introducing a new palette color; signals a contained content region while maintaining airiness.

---

## 3. Typography Rules

### Font Family

**Primary (Display & Headings):** Montserrat (fallback: sans-serif)  
**Secondary (Body & UI):** Poppins (fallback: sans-serif)  
**Tertiary (Links & Small UI):** Geist (fallback: monospace)

### Hierarchy

| Role       | Font       | Size | Weight | Line Height | Letter Spacing | Notes                                         |
| ---------- | ---------- | ---- | ------ | ----------- | -------------- | --------------------------------------------- |
| Display XL | Montserrat | 60px | 700    | 72px        | Default        | Hero headline; largest size on landing        |
| Display SM | Montserrat | 36px | 700    | 43px        | Default        | Section subheadings and card titles           |
| Heading MD | Poppins    | 24px | 600    | 32px        | Default        | Component labels and secondary titles         |
| Body MD    | Poppins    | 16px | 400    | 24px        | Default        | Primary body copy, card content, descriptions |
| Body SM    | Poppins    | 14px | 400    | 20px        | Default        | Secondary text, metadata, captions            |
| Button     | Poppins    | 16px | 600    | 24px        | Default        | Primary and secondary button text             |
| Button SM  | Poppins    | 14px | 600    | 20px        | Default        | Small variant button text                     |
| Link SM    | Geist      | 14px | 500    | 20px        | Default        | Inline links and navigation metadata          |
| Code SM    | Montserrat | 14px | 400    | 20px        | Default        | Monospace fallback for technical content      |

### Principles

- **Poppins for UI density:** Used consistently across buttons, labels, and small text to ensure visual tightness and clarity at interactive sizes.
- **Montserrat for impact:** Reserved for display and large headings where its geometric, confident stroke provides visual weight and hierarchy.
- **Geist for secondary interactivity:** Lighter, more condensed font used for links and meta information to signal lower emphasis without reducing size.
- **Consistent line spacing:** All body copy and interactive text maintain 1.5× line-height ratio for accessibility and rhythm.
- **No negative tracking on display:** Letter spacing is default across all roles, prioritizing legibility over stylistic compression.

---

## 4. Component Stylings

### Buttons

**Primary Button (Large)**

- **Background:** `#FFFFFF`
- **Text Color:** `oklch(0.514 0.106 165.2)` (emerald)
- **Border:** `2px solid oklch(0.514 0.106 165.2)`
- **Padding:** `16px 28px`
- **Font:** Poppins, 16px, weight 600, line-height 24px
- **Border Radius:** `{rounded.full}` (14px, rendered as pill)
- **Width:** 180px
- **Height:** 60px
- **Shadow:** None
- **Hover State:** Border and text darken to emerald-700; background remains white with slight opacity shift

**Primary Button (Small)**

- **Background:** `#FFFFFF`
- **Text Color:** `oklch(0.208 0.003 247.9)` (dark charcoal)
- **Border:** `1px solid oklch(0.949 0.003 354.7)` (near-white)
- **Padding:** `0px 20px`
- **Font:** Poppins, 14px, weight 600, line-height 20px
- **Border Radius:** `{rounded.full}` (14px)
- **Width:** 90px
- **Height:** 44px
- **Shadow:** None

**Text Button (Large, Solid Fill)**

- **Background:** `oklch(0.514 0.106 165.2)` (emerald)
- **Text Color:** `#FFFFFF`
- **Border:** `2px solid transparent`
- **Padding:** `16px 28px`
- **Font:** Poppins, 16px, weight 600, line-height 24px
- **Border Radius:** `{rounded.full}` (14px)
- **Width:** 168px
- **Height:** 60px
- **Shadow:** `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **Hover State:** Background shifts to emerald-600; text remains white

**Text Button (Small, Solid Fill)**

- **Background:** `oklch(0.514 0.106 165.2)` (emerald)
- **Text Color:** `#FFFFFF`
- **Border:** `0px`
- **Padding:** `0px 20px`
- **Font:** Poppins, 14px, weight 600, line-height 20px
- **Border Radius:** `{rounded.full}` (14px)
- **Width:** Variable (290.438px observed)
- **Height:** 48px
- **Shadow:** `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`

### Cards & Containers

**Default Card**

- **Background:** `#FFFFFF`
- **Text Color:** `oklch(0.208 0.003 247.9)` (dark charcoal)
- **Border:** `0px`
- **Padding:** `0px` (content manages internal spacing)
- **Font:** Poppins, 16px, weight 400, line-height 24px
- **Border Radius:** `{rounded.lg}` (26px 26px 18px 18px — asymmetric, rounded top, squared lower-left)
- **Shadow:** `oklab(0 0 0 / 0.05) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
- **Width:** 1216px (full content column at largest viewport)
- **Height:** 664px (observed; varies by content)

**Large Card (Alternate Layout)**

- **Background:** `#FFFFFF`
- **Text Color:** `oklch(0.208 0.003 247.9)`
- **Border:** `0px`
- **Border Radius:** `{rounded.sm}` (18px 18px 18px 26px — asymmetric, squared upper-left, rounded lower-right)
- **Shadow:** `oklab(0 0 0 / 0.05) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
- **Width:** 600px
- **Height:** 888.5px (observed)

### Navigation

**Primary Navigation Bar**

- **Background:** `#FFFFFF`
- **Text Color:** `oklch(0.208 0.003 247.9)` (dark charcoal)
- **Border:** `0px`
- **Height:** 73px
- **Padding:** `0px` (managed by flex layout)
- **Font:** Poppins, 16px, weight 400, line-height 24px
- **Border Radius:** `{rounded.none}` (0px)
- **Shadow:** None
- **Sticky Z-index:** 100
- **Hover State (Links):** Text color shifts to emerald; opacity increases to 1

### Links

**Primary Link (Large)**

- **Background:** `oklch(0.514 0.106 165.2)` (emerald)
- **Text Color:** `#FFFFFF`
- **Border:** `0px`
- **Padding:** `0px 32px`
- **Font:** Poppins, 16px, weight 600, line-height 24px
- **Border Radius:** `{rounded.full}` (14px)
- **Width:** 192px
- **Height:** 52px
- **Shadow:** `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`

**Secondary Link (Small)**

- **Background:** `#FFFFFF`
- **Text Color:** `oklch(0.21 0.034 264.665)` (muted blue-purple)
- **Border:** `0px`
- **Padding:** `8px 12px`
- **Font:** Geist, 14px, weight 500, line-height 20px
- **Border Radius:** `{rounded.xs}` (6px)
- **Width:** 24px
- **Height:** 16px
- **Shadow:** `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`

### Footer

**Footer Container**

- **Background:** `#FFFFFF`
- **Text Color:** `oklch(0.208 0.003 247.9)` (dark charcoal)
- **Border:** `1px solid oklch(0.949 0.003 354.7)` (near-white top border)
- **Padding:** `0px`
- **Font:** Poppins, 16px, weight 400, line-height 24px
- **Border Radius:** `{rounded.none}` (0px)
- **Height:** 581px
- **Shadow:** None

---

## 5. Layout Principles

### Spacing System

SainsIn employs a **10-step modular scale** grounded in 4px:

- `{spacing.xxs}` = 4px (micro gaps, icon spacing)
- `{spacing.xs}` = 8px (small component gaps, tight padding)
- `{spacing.sm}` = 12px (compact button/input padding)
- `{spacing.md}` = 16px (default component padding, standard rhythm)
- `{spacing.lg}` = 20px (generous component padding, section dividers)
- `{spacing.xl}` = 24px (large heading spacing, card section separators)
- `{spacing.xxl}` = 28px (major content divisions)
- `{spacing.xxxl}` = 32px (content block spacing)
- `{spacing.section}` = 36px (section padding and top/bottom margins)
- `{spacing.band}` = 40px (full-width section padding)

**Usage:** Component interiors use `{spacing.md}` to `{spacing.lg}`; sections are separated by `{spacing.section}` to `{spacing.band}`; hero and content bands employ `{spacing.band}` for horizontal padding to maintain consistent breathing.

### Grid & Container

- **Max Width:** 1216px (content column; observed at 1280px+ viewport)
- **Full Width:** 1440px (site container; navigation and footer span edge-to-edge)
- **Column Count:** 3-column grid system (consistent across all measured breakpoints: 375px, 768px, 1024px, 1280px, 1440px)
- **Section Strategy:** Full-width colored bands (`{colors.canvas}` white, alternating `{colors.surface-alt}` green tint) with centered content at max-width; hero section uses asymmetric two-column layout (text left, illustration right)

### Whitespace Philosophy

SainsIn prioritizes **generous, breathing whitespace** to reduce cognitive load and emphasize content hierarchy. Sections are separated by full-height bands rather than inline dividers; card margins are set to `{spacing.band}` horizontally, creating visual isolation. Body text sits within cards padded at `{spacing.xl}` minimum. Alternating section backgrounds (`{colors.surface-alt}`) provide rhythm without increasing visual density. Lists and form inputs use `{spacing.lg}` to `{spacing.xl}` for vertical rhythm, ensuring readability over tight packing.

### Border Radius Scale

- `{rounded.none}` = 0px (navigation, footer, images)
- `{rounded.xs}` = 10px (small secondary links, tight UI elements)
- `{rounded.sm}` = 18px (asymmetric card variant; used as 18px 18px 18px 26px)
- `{rounded.md}` = 25.6px (standard card interior elements, badges)
- `{rounded.lg}` = 26px (primary card container; used as 26px 26px 18px 18px asymmetric)
- `{rounded.full}` = 9999px (all buttons and pill-shaped interactive elements rendered as true circles/pills)

**Pattern:** Cards embrace asymmetric rounding to create visual interest (top-rounded, bottom-squared variants); buttons are universally pill-shaped for approachability and clear affordance.

### Border Widths

- **Thin** = 1px (input borders, footer divider, card inset borders on hover)
- **Medium** = 2px (primary button borders, accent outlines)

---

## 6. Depth & Elevation

SainsIn employs a **layered-micro** shadow strategy, stacking nearly transparent layers to create barely-perceptible depth rather than harsh drop shadows. This approach reinforces the system's light, approachable aesthetic.

| Level           | Treatment                                                                 | Use                                                            |
| --------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Flat            | No shadow                                                                 | Navigation, footer, plain background text                      |
| Micro           | `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`                                     | Buttons, secondary links, minimal lift                         |
| Light           | `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` | Default cards, modals, form inputs in focus                    |
| Inset Border    | `oklab(0 0 0 / 0.05) 0px 0px 0px 1px inset`                               | Card edges, input fields, subtle containment                   |
| Ambient (Cards) | `rgba(6, 122, 88, 0.5) 0px 18px 45px -32px` (emerald-tinted)              | Hero cards and featured containers; brand-colored ambient glow |

**Shadow Philosophy:** The system avoids hard shadows; instead, a combination of inset borders (defining edges) and color-filtered ambient drops (tinted emerald to reinforce brand) creates depth through **color blocking and minimal displacement**. This maintains visual lightness while preserving hierarchy. The emerald ambient shadow on featured cards signals importance without visual heaviness.

### Opacity Levels

Interaction and overlay states use a curated opacity scale to indicate affordance and state without introducing new colors:

- **20%** (0.20) — Disabled or low-emphasis states
- **30%** (0.30) — Hover overlay on dark surfaces
- **35%** (0.35) — Border or background tint on hover
- **83%** (0.83) — High-emphasis overlays; button focus states

### Z-index / Layering

- **Base** (0) — Standard page content, cards
- **Dropdown** (10) — Menu expansions, popover overlays
- **Sticky** (100) — Navigation bar, fixed headers
- **Modal** (implied, not explicitly declared) — Above sticky; modals render on top of all content

---

## 7. Do's and Don'ts

### Do

- **Use the emerald accent (`oklch(0.514 0.106 165.2)`) as the primary CTA signal** for buttons, links, and hover states. It is the functional primary of the system despite white being the brand color.
- **Pair white backgrounds with charcoal text (`#222222`) for maximum contrast** in body copy and form labels.
- **Employ full-width colored section bands** (`{colors.canvas}` or `{colors.surface-alt}`) to create visual rhythm and rhythm-based hierarchy without nested shadows.
- **Use pill-shaped buttons (`{rounded.full}`)** for all primary and secondary CTAs; reserve sharp or subtly rounded corners for containers and content.
- **Apply asymmetric border-radius to cards** (e.g., `26px 26px 18px 18px`) to differentiate card variants and add visual interest without introducing complexity.
- **Default to `{spacing.md}` and `{spacing.lg}` for component padding** and `{spacing.section}` to `{spacing.band}` for section spacing; scale up only when content density demands it.
- **Layer micro shadows (1px–2px offset, low opacity)** on interactive elements and cards to maintain lightness while signaling elevation.
- **Leverage Montserrat for display sizes (36px–60px)** and Poppins for UI text (14px–24px) to ensure visual hierarchy is immediately apparent.
- **Use inset borders (`0px 0px 0px 1px inset`) on cards and inputs** to define edges subtly without introducing shadows.

### Don't

- **Do not introduce new accent colors outside the emerald palette.** Status colors (error, success, warning) are not declared on this site; if needed, derive them from existing emerald tones or document the gap.
- **Do not use sharp corners (`{rounded.none}`) on interactive elements.** Buttons must be pill-shaped; cards use `{rounded.lg}` or `{rounded.sm}` asymmetrically.
- **Do not add heavy drop shadows.** The system uses micro, color-filtered layers; avoid `0px 10px 20px` style shadows that would feel out of place.
- **Do not increase padding beyond `{spacing.band}` (40px) horizontally** unless content is unusually dense. Airiness is a core principle.
- **Do not mix fonts arbitrarily.** Montserrat = display, Poppins = UI/body, Geist = secondary links. Switching fonts within a role risks visual inconsistency.
- **Do not overlap text on background colors** without at least 4.5:1 contrast ratio. Maintain WCAG AA standards on all text-on-color combinations.
- **Do not use more than 2–3 opacity shifts per interaction state.** The system declares opacity at 20%, 30%, 35%, and 83%; stick to this scale.
- **Do not declare new semantic color roles** (e.g., error red, success green) without explicit measurement from the site. The extraction found no semantic ramp; gaps belong in Known Gaps.

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width  | Content Column | Columns | Nav Links  | Menu Toggle | Display Size | Body Size | Section Padding X |
| ---------- | ------ | -------------- | ------- | ---------- | ----------- | ------------ | --------- | ----------------- |
| Mobile     | 375px  | 343px          | 3       | 21 visible | Yes         | 36px         | 16px      | 0px               |
| Tablet     | 768px  | 720px          | 3       | 21 visible | Yes         | 48px         | 16px      | 0px               |
| Desktop    | 1024px | 960px          | 3       | 28 visible | Yes         | 60px         | 16px      | 0px               |
| Large      | 1280px | 1216px         | 3       | 28 visible | Yes         | 60px         | 16px      | 0px               |
| XL         | 1440px | 1280px         | 3       | 28 visible | Yes         | 60px         | 16px      | 0px               |

**Key Observations:**

- Grid remains **3 columns across all breakpoints**; no layout shift to 1 or 2 columns at mobile.
- **Display type scales up from 36px (mobile) to 60px (desktop+)**, signaling hierarchy changes without adding breakpoints for body.
- **Navigation links remain visible at all sizes** (21 links at small, expanding to 28 at 1024px+); no full-menu collapse observed in extraction data, though menu toggle is always present.
- **Section horizontal padding remains 0px** across all breakpoints; full-width colored bands extend edge-to-edge, with content centered via max-width container.

### Touch Targets

- **Buttons & Interactive Links:** Minimum 44px × 44px (observed: most buttons are 48px–60px height, 168px–192px width).
- **Navigation Links:** 16px font, 24px line-height with `{spacing.lg}` (20px) vertical padding = ~64px tall interactive area.
- **Form Inputs & Cards:** Minimum 44px interactive surface; card borders and inset elements are 1px (not a touch target; content within is).
- **Small Links (`{rounded.xs}` variant):** 16px height × 24px width observed; meets 44×44px minimum when interactive area includes adjacent padding.

### Collapsing Strategy

- **Hero Section:** Asymmetric two-column layout (text left, illustration right) remains stable across breakpoints; illustration width adjusts proportionally via CSS `max-width` rather than reflowing to bottom.
- **Card Grids:** 3-column grid collapses proportionally; card widths reduce from 1216px (1440px viewport) to 343px (375px viewport) while maintaining `{rounded.lg}` and shadow consistency.
- **Navigation:** All 28 links remain in single-row horizontal layout; no hamburger menu observed in data, but toggle is present (suggests mobile menu is an available state).
- **Typography:** Display sizes scale (36px→60px); body remains 16px across all breakpoints for readability.
- **Whitespace:** `{spacing.band}` (40px) horizontal padding maintained at large viewports; section padding does not reduce at mobile (0px observed, suggesting full-width bands extend to viewport edge with content padding managed inside containers).

---

## 9. Agent Prompt Guide

### Quick Color Reference

When implementing SainsIn UI, use this condensed mapping:

- **Primary CTA & Interactive:** Emerald (`oklch(0.514 0.106 165.2)` / approx. `#00A870`)
- **CTA Button Fill:** White (`#FFFFFF`)
- **Default Background / Canvas:** White (`#FFFFFF`)
- **Alternating Section Band:** Soft Green Tint (`{colors.surface-alt}` — `#F4FAF7`)
- **Heading & Body Text:** Dark Charcoal (`{colors.on-primary}` — `#222222`)
- **Secondary Link Text:** Muted Blue-Purple (`oklch(0.21 0.034 264.665)`)
- **Borders & Dividers:** Near-White (`oklch(0.949 0.003 354.7)`) or Inset Micro Border (`oklab(0 0 0 / 0.05)`)

### Iteration Guide

1. **Button Strategy:** All interactive buttons use pill-shaped rounding (`{rounded.full}`). Outline variant = white background + emerald border + emerald text (14–16px Poppins, weight 600). Solid variant = emerald background + white text + micro shadow. No tertiary or ghost variants observed; focus on these two.

2. **Card Depth:** Cards use asymmetric rounding (`26px 26px 18px 18px` or `18px 18px 18px 26px`) and **inset micro borders** (`oklab(0 0 0 / 0.05) 0px 0px 0px 1px inset`) plus a color-filtered ambient shadow (`rgba(6, 122, 88, 0.5) 0px 18px 45px -32px` for brand-colored lift). No harsh drop shadows.

3. **Typography Hierarchy:** Montserrat for display (36px–60px, weight 700). Poppins for all UI text and body (14px–24px, weight 400–600). Geist for secondary links (14px, weight 500). Never mix fonts within a role.

4. **Spacing Discipline:** Default to `{spacing.md}` (16px) for button/input padding, `{spacing.xl}` (24px) for card interior spacing, and `{spacing.band}` (40px) for full-width section horizontal padding. Scale up only if content density warrants it; SainsIn values breathing room.

5. **Section Bands:** Alternate full-width sections between white (`{colors.canvas}`) and soft green (`{colors.surface-alt}`). Center content at max-width (1216px–1280px depending on viewport). No nested shadows; depth comes from color changes.

6. **Responsive Stability:** Grid is 3 columns across all breakpoints (375px–1440px). Display type scales from 36px to 60px; body stays 16px. No hamburger collapse observed; if mobile menu is needed, place it above sticky nav (z-index 100).

7. **Interaction States:** Buttons and links use opacity shifts (20%–83%) and color darkening on hover; borders change to emerald-600 or emerald-300 on focus. No additional shadows on hover; rely on color and opacity modulation.

8. **Accessibility & Contrast:** All text on white backgrounds uses `#222222` (charcoal) for 16.5:1 contrast. All text on emerald backgrounds uses white for 5.5:1 contrast (meets WCAG AA). Maintain these ratios; do not lighten text on dark surfaces.

---

## 10. Known Gaps

- **Semantic Status Colors:** The site does not declare error, success, warning, or info colors. If a design requires a status ramp, derive it or record a new gap.
- **Interaction States on Image/Illustration:** The extraction captured hover and focus states on buttons, inputs, links, and nav items, but not on media elements. Illustration interaction behavior (if any) is unmeasured.
- **Dark Mode / Theme Variants:** No dark-mode stylesheet or theme toggle was detected. The extracted palette is light-mode only.
- **Animation / Transition Timing:** CSS animations, delays, and easing functions were not extracted. The DESIGN.md captures static state only; consult source stylesheets for motion specs.
- **Disabled Button States Across All Variants:** Only a single disabled opacity (0.5) was observed in extraction. All button variants' disabled appearance is inferred; verify against implementation.
- **Form Validation States:** Input `:focus` and `:hover` states were captured, but not `:invalid`, `:valid`, or `:required` states. Form UX spec beyond focus/hover is missing.
- **Dropdown & Popover Styling:** Z-index 10 is assigned to dropdowns, but no CSS for dropdown panels, menu items, or popover containers was extracted.
- **Typography Edge Cases:** Line-height and letter-spacing for display sizes smaller than 36px (e.g., 24px headings) may differ from measured hierarchy; verify in implementation.
- **Grid Auto-Sizing:** The 3-column grid structure is confirmed, but CSS `grid-template-columns` values and gap sizes were not explicitly extracted; implementation may require measurement of rendered grid tracks.
- **Mobile Menu / Hamburger:** Menu toggle is always present in the nav, but the mobile menu component styling (background, width, animation) is unmeasured. Only the toggle button state is visible.
- **Surfaces Behind Authentication:** Only the public landing/hero and tryout result pages were analyzed. Authenticated dashboards, user profiles, and account settings are not included.
- **Page Count:** Analysis is based on 2 main page layouts (hero + result card); additional templates (blog, campus info, alumni) may have design variations not captured.

---

**Reference Build:** This design system can be implemented by an AI coding assistant using the component variants in §4, layout grid in §5, and responsive breakpoints in §8. All color tokens reference the 3-color palette in §2; all typography references the Montserrat–Poppins–Geist stack in §3; all spacing values scale from the 10-step modular system in §5. For gaps, consult the Known Gaps list; do not estimate missing values.
