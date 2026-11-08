# Client Asset Replacement Directory Guide

This folder contains the production asset slots for **The Book Launch Company** website. Replacing the placeholder files here with client-approved assets will instantly update the running website.

---

### 1. Book Covers (`public/assets/covers/`)
* **Used by Component:** `src/components/CoverMarquee.tsx`
* **Count Required:** 10 to 40 covers
* **Filenames:** `cover-01.jpg`, `cover-02.jpg`, ... `cover-10.jpg` (up to `cover-40.jpg`)
* **Format:** WebP or JPG (progressive)
* **Dimensions:** 800 × 1200 px (2:3 aspect ratio)
* **Notes:** Front cover only; ensure high contrast and clear typography.

---

### 2. Campaign Videos (`public/assets/video/`)
* **Used by Component:** `src/components/Hero.tsx` & `src/components/ServicesBento.tsx`
* **Count Required:** 2 to 4 vertical reels
* **Filenames:** `hero-reel.mp4`, `launch-hook.mp4`, `waterfall-demo.mp4`
* **Format:** MP4 (H.264, web-optimized, muted by default)
* **Dimensions:** 1080 × 1920 px (9:16 vertical ratio)
* **Max Size:** < 5 MB per clip (compressed)

---

### 3. Founder Photography (`public/assets/founder/`)
* **Used by Component:** `src/components/FounderSection.tsx`
* **Count Required:** 1 to 2 editorial portraits
* **Filenames:** `ariba-founder.jpg` (primary), `ariba-candids.jpg`
* **Format:** JPG or WebP
* **Dimensions:** 1200 × 1500 px (4:5 portrait ratio)
* **Art Direction:** Warm natural lighting, neutral/editorial tones, authentic creative director posture.

---

### 4. Author Headshots (`public/assets/authors/`)
* **Used by Component:** `src/components/TestimonialsAndFAQ.tsx`
* **Count Required:** 3 to 6 portraits
* **Filenames:** `author-01.jpg`, `author-02.jpg`, `author-03.jpg`
* **Format:** JPG or WebP
* **Dimensions:** 400 × 400 px (1:1 square ratio)

---

### 5. Vector Branding (`public/assets/branding/`)
* **Used by Component:** `src/components/Navbar.tsx` & `src/components/Footer.tsx`
* **Count Required:** 3 SVG files
* **Filenames:** `logo-dark.svg` (for paper backgrounds), `logo-white.svg` (for dark sections), `logo-mark.svg` (favicon/icon)
* **Format:** Clean vector SVG (no embedded raster)

---

### 6. Case Study Graphics (`public/assets/case-studies/`)
* **Used by Component:** `src/components/CaseStudies.tsx`
* **Count Required:** 2 to 4 campaign composites
* **Filenames:** `case-study-01.jpg`, `case-study-02.jpg`
* **Format:** JPG or WebP
* **Dimensions:** 1200 × 800 px (3:2 landscape ratio)

