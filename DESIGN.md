---
version: alpha
name: Atomik Growth
description: "Dark monochrome interface measured from atomikgrowth.com: switzer type with inter, tonal surfaces and 16px corners."
colors:
  background: "#010405"
  surface: "#010405"
  on-surface: "#FFFFFF"
  on-background: "#FFFFFF"
  on-surface-variant: "#CCCDCD"
  on-surface-muted: "#7D7D7D"
  on-surface-subtle: "#666666"
  surface-container-low: "#010202"
  surface-container: "#06101A"
  surface-container-high: "#171717"
  overlay: "#FFFFFF33"
  overlay-strong: "#FFFFFF14"
  outline: "#0000001A"
  primary: "#E6E6E6"
  on-primary: "#000000"
  secondary: "#0072F5"
typography:
  headline-display:
    fontFamily: switzer
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: 0.01em
  headline-lg:
    fontFamily: inter
    fontSize: 20px
    fontWeight: 600
  body-md:
    fontFamily: inter
    fontSize: 15px
    fontWeight: 450
    lineHeight: 1.5
  body-sm:
    fontFamily: inter
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: inter
    fontSize: 12px
    fontWeight: 450
    lineHeight: 1
  label-lg:
    fontFamily: inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: inter
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.5
  label-sm:
    fontFamily: inter
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.5
  headline-display-mobile:
    fontFamily: switzer
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: 0.01em
  headline-lg-mobile:
    fontFamily: inter
    fontSize: 22px
    fontWeight: 600
rounded:
  xs: 6px
  sm: 12px
  md: 16px
  lg: 32px
  xl: 40px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 48px
  gutter: 8px
  container: 588px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    padding: 8px 16px
    height: 40px
  button-secondary:
    backgroundColor: "#F2F2F2"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    padding: 0px 14px
    height: 32px
  button-ghost:
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: 0px
    padding: 16px 18px 16px 16px
  card:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: 0px
  link:
    textColor: "#FFFFFF66"
---

# Atomik Growth Design System

## Overview

Atomik Growth describes itself as: “We help tech companies create scalable content strategies designed to drive deal flow and revenue with minimal time investment.” The interface is dark, built on **Near Black (#010405)** with **White (#FFFFFF)** text and almost no color: actions are carried by contrast, not hue.

Type is set in **switzer** and **inter**. Headlines run large; body text is 15px. Depth comes from soft drop shadows. Corners are mostly 16px.

Measured from [atomikgrowth.com](https://www.atomikgrowth.com/) on November 8, 2026 at 1440×900 and 390×844 from 334 rendered elements. Values are computed styles from the live page, not the original source files.

## Colors

The palette has 14 roles.

- **Near Black (#010405):** Page background, seen 1 time. Token `background`.
- **White (#FFFFFF):** Primary text and headings, seen 18 times. Token `on-surface`, CSS `--tw-ring-offset-color`.
- **Silver (#CCCDCD):** Secondary text, seen 4 times. Token `on-surface-variant`.
- **Slate (#7D7D7D):** Muted text and metadata, seen 9 times. Token `on-surface-muted`.
- **Slate (#666666):** Subtle text and placeholders, seen 4 times. Token `on-surface-subtle`.
- **Near Black (#010202):** Raised areas one step from the page, seen 4 times. Token `surface-container-low`.
- **Deep Blue (#06101A):** Cards and panels, seen 1 time. Token `surface-container`.
- **Charcoal (#171717):** Hover and pressed fills, seen 1 time. Token `surface-container-high`.
- **White 20% (#FFFFFF33):** Translucent fill for cards and controls, seen 5 times. Token `overlay`.
- **White 8% (#FFFFFF14):** Stronger translucent fill, seen 3 times. Token `overlay-strong`.
- **Near Black 10% (#0000001A):** Borders and dividers, seen 3 times. Token `outline`.
- **Mist (#E6E6E6):** Primary buttons and calls to action, seen 1 time. Token `primary`.
- **Near Black (#000000):** Text and icons on primary. Token `on-primary`.
- **Vivid Blue (#0072F5):** Accent in text, fills and borders, seen 2 times. Token `secondary`.

## Typography

**switzer** and **inter** share the interface. Fallback stack: `switzer, switzer Fallback, system-ui, sans-serif`.

- **headline-display:** switzer 36px at weight 600, line height 1.1, tracking 0.01em (32px on mobile). Page title (h1).
- **headline-lg:** inter 20px at weight 600 (22px on mobile). Section headings (h2).
- **body-md:** inter 15px at weight 450, line height 1.5. Body text.
- **body-sm:** inter 13px at weight 400, line height 1.5. Secondary and small text.
- **caption:** inter 12px at weight 450, line height 1. Captions and fine print.
- **label-lg:** inter 16px at weight 400, line height 1.5. Large buttons and tabs.
- **label-md:** inter 14px at weight 600, line height 1.5. Buttons, navigation and labels.
- **label-sm:** inter 13px at weight 500, line height 1.5. Small labels and badges.

## Layout

Spacing is mostly on a 4px grid (78% of measured values), with some off-grid steps. Match the measured scale rather than rounding everything.

- **Scale:** xs 4px, sm 8px, md 16px, lg 32px, xl 48px.
- **Gaps:** 8px is the most common gap in flex and grid layouts.
- **Container:** content is capped at 588px.
- **Breakpoints:** 639px, 640px, 767px.

## Elevation & Depth

Raised elements use soft drop shadows. The most used recipes:

- `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.35) 0px 16px 50px -24px`
- `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 0px 16px 4px`

Hairline rings and inset highlights also appear: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.4) 2px 2px 5px 0px inset, rgba(0, 0, 0, 0.15) -2px -2px 4px 0px inset`.

## Shapes

Most elements use 16px corners. Measured radii, most used first:

- **md (16px):** 20 elements.
- **xl (40px):** 16 elements.
- **xs (6px):** 8 elements.
- **sm (12px):** 8 elements.
- **lg (32px):** 8 elements.

## Components

Measured from the rendered page. Token values reference the tokens above.

- **button-primary (“Book a call”):** #FFFFFFE6 fill, #000000 text, 13px/600, 3.35544e+07px radius, padding 8px 16px, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`.
- **button-secondary (“Book a call”):** #F2F2F2 fill, #000000 text, 13px/500, 3.35544e+07px radius, padding 0px 14px, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`.
- **button-ghost (“What’s the typical turnaround ti”):** transparent fill, #000000 text, 16px/400, padding 16px 18px 16px 16px.
- **card:** #06101A fill, #FFFFFF text, 16px/400, 16px radius, padding 0px.
- **link:** transparent fill, #FFFFFF66 text, padding 0px.

## Card Color System

Refined coordinated card tokens for harmonious contrast across light and dark page environments:

- **Light Sections (`#FAFAFA`):**
  - **card.light:** `#FFFFFF` (Pure crisp white surface, avoiding muddy or yellowish tints)
  - **card.light-border:** `rgba(0, 0, 0, 0.08)` (Delicate hairline border)
  - **card.light-border-hover:** `rgba(0, 0, 0, 0.20)` (Engaged interactive state)
  - **card.light-inset:** `#F8F9FA` (Cool neutral surface for inner detail modules)
  - **card.light-text:** `#111827` (High-contrast deep charcoal headings > 14:1)
  - **card.light-muted:** `#52525B` (Slate body copy > 5.5:1)
  - **card.light-shadow:** `0 4px 24px -4px rgba(0, 0, 0, 0.05)` (Soft diffuse elevation)

- **Dark Sections (`#010405` / `#010202`):**
  - **card.dark:** `#0A0E14` (Obsidian elevated tone)
  - **card.dark-border:** `rgba(255, 255, 255, 0.08)` (Subtle metallic boundary)
  - **card.dark-border-hover:** `rgba(255, 255, 255, 0.20)`
  - **card.dark-text:** `#FFFFFF`
  - **card.dark-muted:** `#CCCDCD`

## Do's and Don'ts

- Do use #010405 for the page and lift surfaces in small steps: #010202, #06101A, #171717.
- Do keep text in 4 levels: #FFFFFF, #CCCDCD, #7D7D7D, #666666.
- Do let contrast carry emphasis; primary actions use #E6E6E6 on #010405.
- Do reuse the measured spacing steps (8px, 16px, 32px).
- Do use 16px corners on most elements; larger surfaces also use 40px, 6px and 12px.
- Don't use #666666 for body text; it reaches 3.58:1 on #010405. Keep it for large text or metadata.
- Don't introduce new font families beyond switzer and inter.
- Don't add saturated accent colors; the measured palette is almost entirely neutral.
- Don't make interface transitions slower than 0.5s.

## Motion

Interface transitions are quick: 0.15s, 0.3s, 0.5s. Longer ambient animations run 0.8s, 8s.

- **Easing:** `linear`, `cubic-bezier(0.4, 0, 0.2, 1)`, `cubic-bezier(0.25, 0.46, 0.45, 0.94)`.
- **Reduced motion:** the page responds to `prefers-reduced-motion`.

Generated by [Sitepeel](https://sitepeel.dev/design-md/atomikgrowth.com/), the free DESIGN.md generator (engine 2026.10.29+b828a475ee10).

