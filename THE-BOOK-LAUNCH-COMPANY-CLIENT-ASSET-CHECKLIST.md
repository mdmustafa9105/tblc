# THE BOOK LAUNCH COMPANY — CLIENT ASSET INTAKE CHECKLIST & REPLACEMENT GUIDE
**Target System:** The Book Launch Company Website  
**Framework:** Next.js 14 App Router (`src/app/`, `src/components/`, `public/assets/`)  
**Project Location:** `D:\The-Book-Launch-Company\`  
**Date:** November 8, 2026  
**Document Version:** 1.0 (Production Release)

---

## 1. Overview for the Client

The Book Launch Company website has been completely engineered, tested, and staged on a local Next.js production build. All sections, interactive widgets, animations, and booking workflows are fully operational.

To complete the public launch on your live domain (`thebooklaunchcompany.com`), the placeholders currently on the site must be replaced with your genuine, approved brand assets.

This checklist provides:
1. **The 6 Core Asset Requirements**
2. **Exact File Names, Formats, and Technical Dimensions**
3. **Drop-in Folder Paths on Disk**
4. **Mapped React Components & Replacement Instructions**

---

## 2. Master Asset Intake Checklist

| Asset Ref | Asset Description | Required Quantity | Format & Specs | Priority | Status |
|---|---|---|---|---|---|
| **`ASSET-01`** | **Book Cover Art** | 10 to 40 titles | JPG/WebP, 800×1200 px (2:3 ratio) | **CRITICAL** | ⏳ Pending Client Delivery |
| **`ASSET-02`** | **Campaign Video Clips** | 2 to 4 vertical reels | MP4, 1080×1920 px (9:16 vertical), 15–30s | **HIGH** | ⏳ Pending Client Delivery |
| **`ASSET-03`** | **Founder Photography** | 1 to 2 editorial portraits | JPG/WebP, 1200×1500 px (4:5 portrait) | **CRITICAL** | ⏳ Pending Client Delivery |
| **`ASSET-04`** | **Author Testimonials & Headshots** | 3 to 6 verified quotes & photos | Headshots: 400×400 px, Quotes: 40–80 words | **HIGH** | ⏳ Pending Client Delivery |
| **`ASSET-05`** | **Signed-Off Case Studies** | 2 to 3 real author campaigns | Approved sales/views metrics & comps | **CRITICAL** | ⏳ Pending Client Delivery |
| **`ASSET-06`** | **Vector Brand Logo Lockups** | Primary ink, white, and mark | SVG (scalable vector graphic) | **HIGH** | ⏳ Pending Client Delivery |

---

## 3. Detailed Asset Specifications & Replacement Instructions

### `ASSET-01`: Book Cover Artwork
* **Destination Folder:** `public/assets/covers/`
* **Used by Component:** [`src/components/CoverMarquee.tsx`](file:///d:/TheBookLaunchCompany/src/components/CoverMarquee.tsx)
* **Filename Convention:** `cover-01.jpg`, `cover-02.jpg`, `cover-03.jpg`, ... up to `cover-40.jpg`
* **Optimal Resolution:** 800 × 1200 px (minimum 600 × 900 px)
* **File Format:** High-quality JPG or WebP (max 350 KB per cover)
* **Art Direction Notes:** Front covers only. Diverse genre representation (Thriller, Fantasy/Romantasy, Dark Academia, Contemporary, Literary, Memoir) recommended to show broad industry reach. Ensure author clearance is secured for promotional display.

---

### `ASSET-02`: Vertical Campaign Video Reels
* **Destination Folder:** `public/assets/video/`
* **Used by Components:**
  * [`src/components/Hero.tsx`](file:///d:/TheBookLaunchCompany/src/components/Hero.tsx) (Primary hero phone mockup)
  * [`src/components/ServicesBento.tsx`](file:///d:/TheBookLaunchCompany/src/components/ServicesBento.tsx) (Launch timeline reel)
* **Filename Convention:**
  * `hero-reel.mp4` (Primary hero campaign clip)
  * `launch-hook.mp4` (Bento widget reel)
* **Optimal Resolution:** 1080 × 1920 px (Full HD 9:16 vertical)
* **File Format:** MP4 (H.264 codec, AAC audio, web-optimized, max 8 MB per file)
* **Art Direction Notes:** Dynamic BookTok/Reels format showcasing aesthetic book clips, quote reveals, or unboxing with captions. Ensure videos start cleanly on frame 1.

---

### `ASSET-03`: Founder Photography (Ariba)
* **Destination Folder:** `public/assets/founder/`
* **Used by Component:** [`src/components/FounderSection.tsx`](file:///d:/TheBookLaunchCompany/src/components/FounderSection.tsx)
* **Filename Convention:** `ariba-founder.jpg` (primary), `ariba-candid.jpg` (secondary)
* **Optimal Resolution:** 1200 × 1500 px (4:5 aspect ratio)
* **File Format:** High-resolution JPG or WebP (under 500 KB)
* **Art Direction Notes:** Editorial styling. Warm natural lighting, thoughtful neutral backdrop (bookshelf, studio desk, or neutral textured wall). Avoid corporate headshot poses; convey the creative director and literary partner persona.

---

### `ASSET-04`: Author Testimonials & Headshots
* **Destination Folder:** `public/assets/authors/`
* **Used by Component:** [`src/components/TestimonialsAndFAQ.tsx`](file:///d:/TheBookLaunchCompany/src/components/TestimonialsAndFAQ.tsx)
* **Data Configuration File:** [`src/data/content.ts`](file:///d:/TheBookLaunchCompany/src/data/content.ts) (`TESTIMONIALS` array)
* **Filename Convention:** `author-01.jpg`, `author-02.jpg`, `author-03.jpg`
* **Optimal Resolution:** 400 × 400 px (1:1 square crop)
* **File Format:** JPG or WebP
* **Content Requirement:**
  * Author Name
  * Book Title & Genre
  * Tangible Campaign Result (e.g. *"Pre-orders rose 340% during launch week"*)
  * Approved 2–3 sentence testimonial quote

---

### `ASSET-05`: Signed-Off Client Case Studies
* **Destination Folder:** `public/assets/case-studies/`
* **Used by Component:** [`src/components/CaseStudies.tsx`](file:///d:/TheBookLaunchCompany/src/components/CaseStudies.tsx)
* **Data Configuration File:** [`src/data/content.ts`](file:///d:/TheBookLaunchCompany/src/data/content.ts) (`CASE_STUDIES` array)
* **Filename Convention:** `case-study-01.jpg`, `case-study-02.jpg`
* **Required Case Study Fields:**
  1. Author & Title
  2. Campaign Timeline (e.g. 6-week pre-launch window)
  3. Strategic Challenge / Brief (What was the release goal?)
  4. Creative Hook & Solution (What creative angle unlocked the audience?)
  5. 4 Quantitative Metrics (e.g. Total Views, Category Peak, Pre-order Lift, Follower Growth)
  6. Direct Author Endorsement Quote

---

### `ASSET-06`: Production Vector Logo Lockups
* **Destination Folder:** `public/assets/branding/`
* **Used by Components:**
  * [`src/components/Navbar.tsx`](file:///d:/TheBookLaunchCompany/src/components/Navbar.tsx)
  * [`src/components/Footer.tsx`](file:///d:/TheBookLaunchCompany/src/components/Footer.tsx)
  * [`public/favicon.svg`](file:///d:/TheBookLaunchCompany/public/favicon.svg)
* **Filename Convention:**
  * `logo-dark.svg` (Dark ink `#121115` on paper background for navbar)
  * `logo-white.svg` (Monochrome white `#FFFFFF` for dark footer)
  * `logo-mark.svg` (Square monogram icon for browser favicon)
* **File Format:** Vector SVG (clean paths, no raster embeds)

---

## 4. How to Apply New Assets (Step-by-Step)

1. **Step 1: Save the Files**  
   Copy your image and video files into their designated subdirectories under `public/assets/` using the exact filenames listed above.
2. **Step 2: Update Text & Quotes**  
   Open [`src/data/content.ts`](file:///d:/TheBookLaunchCompany/src/data/content.ts) in any text editor to update author names, quotes, and case study metrics.
3. **Step 3: Test Locally**  
   Run `npm run build` and `npm run start` to preview the updated assets immediately on `http://localhost:3000/`.
4. **Step 4: Deploy**  
   Push changes to your Git repository or deploy to Vercel/Netlify. The live website updates automatically.

---

**Delivered By:** Senior Frontend Architect & Quality Engineering Team  
**Handover Date:** November 8, 2026

