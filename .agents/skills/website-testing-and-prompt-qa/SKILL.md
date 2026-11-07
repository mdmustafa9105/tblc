---
name: website-testing-and-prompt-qa
description: "Rigorous quality assurance and prompt compliance auditing for web projects. Use this skill whenever testing, auditing, validating, or reviewing web implementations against user prompts, briefs, and visual benchmarks. Enforces thorough functional testing (responsiveness across desktop/mobile/tablet, link integrity, CTA actions, forms, booking flows, WCAG accessibility, SEO metadata, performance, and browser console errors) as well as AI design compliance (verifying adherence to website briefs and visual references such as Atomik Growth without copying, detecting fabricated or generic copy/metrics, enforcing typography and spacing systems, and identifying visual regressions). Generates structured, repeatable QA test reports with clear pass/fail status and actionable remediation steps."
---

# Website Testing and Prompt QA

This skill defines the mandatory testing protocols, inspection methods, and reporting standards for auditing web pages, components, and user journeys. Every test cycle evaluates two distinct dimensions:

1. **Website Functionality and Technical Quality (Part A)**
2. **AI Design and Prompt Compliance (Part B)**

Audit results must be documented in the standardized **Repeatable QA Report** format defined in Section 3.

---

## 1. Operating Rules & Project Principles

When conducting QA on **The Book Launch Company** project:

1. **Reference Adaptation, Never Plagiarism:**
   - The primary design reference is [Atomik Growth](https://atomikgrowth.com/).
   - Study and adapt its design excellence: visual hierarchy, pacing, spacing density, typographic scale, component polish, interaction curves, and conversion structure.
   - **Never copy** exact copy, branding, illustrations, graphics, or proprietary assets. All patterns must be translated into The Book Launch Company's distinct literary identity.
2. **Zero Fabricated Facts or Claims:**
   - Detect and flag any invented client results, fake testimonials, hallucinated statistics, or unverified publisher guarantees.
   - Any missing data must use explicit placeholders (e.g., `{{client_count}}`, `{{author_name}}`) rather than AI-generated fictional assertions.
3. **No Unreviewed Discrepancies:**
   - Any deviation from the user brief, prompt instructions, or approved design system must be explicitly caught, classified by severity, and assigned an actionable fix.

---

## 2. Test Protocols

### PART A: Website Functionality and Quality

Execute rigorous checks across the following functional areas:

#### A1. Responsiveness and Viewport Adaptation
- **Test Matrix:** Audit at four mandatory widths:
  - Mobile Small/Standard: `390px` (iPhone 12/13/14/15 standard)
  - Mobile Large: `428px` / `480px`
  - Tablet: `768px` / `834px` (iPad Portrait)
  - Desktop Standard: `1280px` / `1440px`
  - Ultra-wide: `1920px`
- **Criteria:**
  - Zero horizontal scroll or unexpected overflow (`overflow-x: hidden` must not merely mask broken layouts).
  - No text truncation, overlapping blocks, or unreadable line wraps.
  - Touch target sizes meet minimum `44 × 44px` on mobile/tablet viewports.
  - Media queries and flexible grids re-stack cleanly without orphaned whitespace or misaligned columns.

#### A2. Navigation and Link Integrity
- **Criteria:**
  - All navigation links point to valid targets, sections, or external URLs.
  - Zero dead links (`href="#"` or broken anchors). Every link must be functional or explicitly marked disabled during development.
  - Smooth scrolling for on-page hash links with proper scroll offsets accounting for fixed/floating headers.
  - Active states clearly communicate current page or section position.
  - Back navigation, breadcrumbs, and logo return links operate as expected.

#### A3. Buttons and CTA Functionality
- **Criteria:**
  - All interactive elements exhibit all required states: `Default`, `Hover`, `Active/Pressed`, `Focus`, and `Disabled`.
  - Primary CTA stands out visually with unequivocal prominence above secondary buttons.
  - Action labels are action-oriented verbs stating the exact outcome (e.g., "Schedule Strategy Session", "Download Launch Blueprint"), avoiding vague labels like "Submit" or "Click Here".
  - Click and keyboard triggers fire the intended action (modal launch, scroll, form submission, route change).

#### A4. Forms and Booking Integrations
- **Criteria:**
  - Client-side validation active on all inputs (required fields, valid email syntax, phone formatting).
  - Inline error messages appear immediately upon invalid blur/submission, with clear remediation instructions.
  - Submission triggers clear loading state (skeleton, disabled submit button with spinner) to prevent duplicate submissions.
  - Successful submission displays a verified confirmation message or redirect.
  - Embedded third-party booking widgets (e.g., Calendly, Cal.com) load cleanly, adapt to iframe container width, and operate seamlessly on mobile.

#### A5. Accessibility (WCAG 2.1 AA Compliance)
- **Criteria:**
  - **Color Contrast:** Minimum `4.5:1` for regular text (<18pt/24px) against background; minimum `3:1` for large text (≥18pt bold or ≥24px regular) and essential UI controls/borders.
  - **Keyboard Navigation:** Full tab navigation throughout all interactive elements in logical DOM sequence with high-visibility focus indicators (minimum 2px ring at ≥3:1 contrast).
  - **Semantic HTML:** Proper landmark elements used (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
  - **Screen Reader Support:** Valid `aria-expanded`, `aria-controls`, `aria-label` on menus and toggles. Non-text content has descriptive `alt` attributes. Decorative icons use `aria-hidden="true"`.

#### A6. SEO Metadata and Page Structure
- **Criteria:**
  - Exactly one `<h1>` tag per page containing primary outcome and core audience keywords.
  - Logical, non-skipping heading hierarchy (`h1` → `h2` → `h3`).
  - Comprehensive `<head>` tags: `<title>`, `<meta name="description">`, canonical tag, favicon, and OpenGraph/Twitter card tags (`og:title`, `og:description`, `og:image`).
  - Semantic markup for structured data (e.g., Organization, Book, FAQSchema) where applicable.

#### A7. Loading Performance & Core Web Vitals
- **Criteria:**
  - **LCP (Largest Contentful Paint):** Hero content visible within 2.5s.
  - **CLS (Cumulative Layout Shift):** < 0.1; explicit `width` and `height` attributes on images and media containers to eliminate layout jumping.
  - **Asset Delivery:** Next-gen image formats (WebP, AVIF) with responsive `srcset` or `next/image` equivalent; SVGs optimized.
  - **Animation Efficiency:** Smooth 60fps motion using hardware-accelerated properties (`transform`, `opacity`) only; zero scroll jank from unthrottled listeners.

#### A8. Browser Errors and Runtime Stability
- **Criteria:**
  - Zero browser console errors (unhandled exceptions, missing resource 404s, CORS failures).
  - Zero runtime warnings (e.g., React hydration mismatch, duplicate keys, deprecated API warnings).
  - Graceful fallbacks for network drops or third-party script loading timeouts.

---

### PART B: AI Design and Prompt Compliance

Audit the fidelity of the implemented solution against requirements, briefs, and aesthetic benchmarks:

#### B1. Design Direction and Brief Adherence
- **Criteria:**
  - The implementation directly addresses every requirement, goal, and constraint set in the website brief.
  - Tone of voice aligns with The Book Launch Company's positioning: authoritative, literary, high-converting, and refined.
  - Value proposition is immediately crystal-clear above the fold within 5 seconds of scanning.

#### B2. Visual Reference Analysis (Atomik Growth Benchmarking)
- **Reference URL:** [https://atomikgrowth.com/](https://atomikgrowth.com/)
- **Criteria:**
  - **Visual Pacing:** Does the page exhibit intentional whitespace, elegant section transitions, and strong breathing room?
  - **Typographic Craft:** Crisp typographic contrast between high-impact headlines, well-tracked subheadings, and readable body blocks.
  - **Card & Bento Composition:** Clean containment, subtle borders, high-contrast badges, and balanced layouts without visual clutter.
  - **Conversion Mechanics:** Sticky/floating navigation, floating action cues, unobtrusive social proof ribbons, and high-contrast CTA blocks.
  - **Originality Check:** Confirmed that zero copyrighted text, icons, images, or distinct brand motifs were copied. The execution must be an original design for The Book Launch Company.

#### B3. Section Hierarchy and Completeness
- **Criteria:**
  - Verify every required section is present in persuasive narrative order:
    1. Navigation (compact, floating or sticky with clear primary CTA)
    2. Hero (compelling hook, subhead, primary CTA, proof badge/signal)
    3. Proof / Author Credibility Ribbon (verified media, publishers, or partner badges)
    4. Problem Statement (the friction authors face launching books alone)
    5. Solution / Methodology (The Book Launch Company system)
    6. Services / Core Packages (distinct offer breakdown with clear outcomes)
    7. Results / Case Studies / Book Showcases (authentic books launched or formatted placeholders)
    8. Tagline Reveal / Core Manifesto (dynamic text reveal matching design system)
    9. Objection-Handling FAQ (clear, high-intent author questions answered)
    10. Final Call to Action & Risk Mitigation
    11. Comprehensive Footer (legal, sitemap, contact)
  - Flag any omitted, truncated, or misplaced sections.

#### B4. Factual Integrity & Anti-Hallucination Audit
- **Criteria:**
  - Every metric (e.g., "#1 Bestsellers", "Copies Sold", "ROI") is corroborated by project source materials.
  - All testimonials feature real author identities and verifiable books, or are explicitly formatted with `{{Author Testimonial Placeholder}}`.
  - Zero fabricated logos (e.g., claiming unverified features on Forbes, NYT, or BBC).
  - No empty promises or legally risky guarantees unless explicitly authorized in the brief.

#### B5. Design System and Styling Discipline
- **Criteria:**
  - **Type Scale:** Every font size maps cleanly to Tailwind/Design System steps (12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72, 96, 128px); no arbitrary values (`text-[21px]`).
  - **Spacing Discipline:** Margins, padding, and gaps strictly use defined spacing tokens (0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96px).
  - **Corner Radius:** Radii follow system tokens; nested elements comply with the formula: `inner radius = outer radius − gap`.
  - **Color Tokens & Dark/Light Modes:** Colors adhere strictly to semantic role tokens (`Surface/`, `Text/`, `Action/`, `Border/`). No raw arbitrary hex codes scattered in components.
  - **Background Integrity:** Flat surfaces; no unapproved background gradients.

#### B6. Deviation & Defect Classification
Classify every detected deviation:
- **Critical (P0):** Broken flow, non-responsive viewport, broken booking/form, hallucinated statistics or fake testimonials, crash/console exception.
- **Major (P1):** Missing required section, failed contrast ratio, missing interactive state, design system scale violation, broken secondary link.
- **Minor (P2):** Minor spacing misalignment, sub-optimal line break/orphan, unoptimized image size, missing secondary meta tag.

---

## 3. Repeatable QA Report Template

When delivering an audit, output the findings in this exact markdown structure:

```markdown
# QA Audit Report: [Page / Flow Name]

**Date:** [YYYY-MM-DD]  
**Auditor:** website-testing-and-prompt-qa  
**Scope:** [URL, Component, or Milestone]  
**Overall Status:** [PASSED / FAILED / BLOCKED]  

---

## Executive Summary
- **Total Checks Conducted:** [Count]
- **Passed:** [Count]
- **Failed:** [Count] (Critical: [Count], Major: [Count], Minor: [Count])
- **Compliance Score:** [Percentage]%
- **Key Recommendation:** [1-2 sentence high-level finding]

---

## Detailed Test Matrix

| ID | Category | Test Objective | Requirement / Prompt Source | Expected Result | Actual Result | Status | Severity | Recommended Correction |
|:---|:---|:---|:---|:---|:---|:---:|:---:|:---|
| QA-01 | Responsive | Viewport 390px mobile layout | Brief Section 4: Mobile First | No horizontal overflow; CTAs fully visible | Content extends 18px offscreen on 390px | FAIL | Critical | Set max-width: 100% on card container; wrap button stack |
| QA-02 | Functional | Consultation booking CTA | Brief Section 2: Conversion Goal | Opens booking modal upon click | Fires blank anchor '#' | FAIL | Major | Bind onClick handler to booking modal trigger |
| QA-03 | Compliance | Factual verification of statistics | Project Rule: Zero Invented Facts | Real data or `{{placeholder}}` | Page claims "500+ NYT Bestsellers" without source | FAIL | Critical | Replace with approved figure or `{{total_bestsellers}}` |
| QA-04 | Design | Atomik Growth pattern adaptation | Visual Reference Rule | High-contrast bento card layout adapted to literary style | Uses generic default 3-column table | FAIL | Major | Refactor to asymmetrical bento cards with subtle border tokens |
| QA-05 | A11y | Body copy contrast | WCAG 2.1 AA | Contrast ≥ 4.5:1 | Text color `#737373` on `#181818` yields 3.2:1 | FAIL | Major | Change text token to `Text/Secondary` (`#A3A3A3`) |

---

## Remediation & Action Plan
1. **Immediate P0 Fixes (Must resolve before any release):**
   - [Item 1]
   - [Item 2]
2. **P1 Improvements (Resolve within current sprint):**
   - [Item 1]
3. **P2 Refinements:**
   - [Item 1]

---

## Final Quality Sign-off
- [ ] Website Functionality & Technical Quality Verified
- [ ] AI Design & Prompt Compliance Verified
- [ ] No Hallucinated Claims or Stolen Assets
- [ ] Ready for User Review
```

---

## 4. Audit Execution Checklist

Run through this sequence during every QA session:

1. [ ] **Viewport Sweep:** Inspect at 390px, 768px, 1280px, and 1440px.
2. [ ] **Click-Through Sweep:** Test every button, menu item, footer link, and form input.
3. [ ] **A11y Audit:** Verify keyboard focus ring, tab order, and color contrast.
4. [ ] **Console Inspection:** Check browser console for errors or unhandled promises.
5. [ ] **Brief Comparison:** Cross-check implemented sections against the project brief line by line.
6. [ ] **Reference Check:** Verify that Atomik Growth patterns (visual hierarchy, bento structure, typography density) are adapted thoughtfully without copying assets.
7. [ ] **Fact Check:** Confirm zero fabricated statistics, client logos, or testimonials.
8. [ ] **Report Generation:** Publish the completed QA Audit Report using the template in Section 3.

