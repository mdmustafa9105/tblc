# THE BOOK LAUNCH COMPANY — PRODUCTION DEPLOYMENT & HOSTING GUIDE
**Target System:** The Book Launch Company Web Platform  
**Framework:** Next.js 14.2 (App Router), React 18, TypeScript, Tailwind CSS  
**Target Domain:** `thebooklaunchcompany.com` / `www.thebooklaunchcompany.com`  
**Contact Email:** `hello@thebooklaunchcompany.com`  
**Date:** November 8, 2026  
**Document Version:** 1.0 (Production Release)

---

## 1. Hosting Architecture & Recommendation

The Book Launch Company website is built on **Next.js 14 (App Router)** with server-rendered dynamic API routes (`/api/inquiry`) and pre-rendered static editorial pages.

### Recommended Platform: Vercel
* **Why Vercel:** Vercel is the primary engineering platform behind Next.js. It delivers zero-configuration edge caching, automatic image optimization, global CDN distribution, free SSL certification, and native handling of Next.js serverless API routes without managing server infrastructure.
* **Alternative Platforms:** Netlify, Cloudflare Pages (with Next-on-Pages), or a self-hosted Docker/Node.js instance on your own cloud VPS.

---

## 2. Environment Variables Configuration

Copy `.env.example` to `.env.production` or enter these variables in your hosting dashboard:

```bash
# ==============================================================================
# THE BOOK LAUNCH COMPANY — ENVIRONMENT CONFIGURATION TEMPLATE
# ==============================================================================

# 1. Base URL Configuration
NEXT_PUBLIC_SITE_URL=https://thebooklaunchcompany.com
NODE_ENV=production

# 2. Discovery Call Scheduling (Optional Embed)
# When provided, enables the direct calendar button in the booking modal:
NEXT_PUBLIC_CALENDAR_URL=https://calendly.com/thebooklaunchcompany/discovery-call

# 3. Inquiry Submission Webhook
# Inquiries submitted to /api/inquiry are securely dispatched to this endpoint
# Connect to your Notion, Airtable, Zapier, or CRM webhook:
INQUIRY_WEBHOOK_URL=https://hooks.airtable.com/workflows/v1/genericWebhook/XXXXXXXXXXXX

# 4. Analytics & Tracking (Optional)
# Google Analytics 4 Measurement ID
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
# Plausible Analytics Domain
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=thebooklaunchcompany.com
# Meta / TikTok Pixel ID
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_TIKTOK_PIXEL_ID=
```

---

## 3. Step-by-Step Vercel Deployment

1. **Step 1: Push Code to Git**  
   Commit the latest repository files to GitHub, GitLab, or Bitbucket:
   ```bash
   git add .
   git commit -m "feat: production build ready for The Book Launch Company"
   git push origin main
   ```
2. **Step 2: Connect Vercel Project**  
   * Log into [vercel.com](https://vercel.com/) and click **Add New Project**.
   * Import your Git repository.
   * Vercel will automatically detect **Next.js**.
3. **Step 3: Configure Build & Environment Settings**  
   * **Framework Preset:** Next.js
   * **Root Directory:** `./`
   * **Build Command:** `next build`
   * **Output Directory:** `.next`
   * **Install Command:** `npm install`
   * Add the Environment Variables from Section 2.
4. **Step 4: Deploy**  
   * Click **Deploy**. Vercel compiles the static pages, bundles the `/api/inquiry` route, and issues an active preview domain (e.g. `the-book-launch-company.vercel.app`).

---

## 4. Custom Domain & DNS Setup

To connect `thebooklaunchcompany.com` from your domain registrar (GoDaddy, Namecheap, Cloudflare, Google Domains):

### Web Traffic Records (Pointing to Vercel)
| Record Type | Host / Name | Value / Destination | TTL |
|---|---|---|---|
| **A Record** | `@` (apex) | `76.76.21.21` | Automatic / 300 |
| **CNAME** | `www` | `cname.vercel-dns.com.` | Automatic / 300 |

*Note: Vercel automatically provisions and renews a Let’s Encrypt TLS/SSL certificate within 5–15 minutes after DNS propagation.*

---

## 5. Google Workspace Email Authentication

To ensure professional emails sent from `hello@thebooklaunchcompany.com` reach client inboxes without being flagged as spam:

### MX Records
| Record Type | Host | Points To | Priority |
|---|---|---|---|
| **MX** | `@` | `ASPMX.L.GOOGLE.COM.` | 1 |
| **MX** | `@` | `ALT1.ASPMX.L.GOOGLE.COM.` | 5 |
| **MX** | `@` | `ALT2.ASPMX.L.GOOGLE.COM.` | 5 |
| **MX** | `@` | `ALT3.ASPMX.L.GOOGLE.COM.` | 10 |
| **MX** | `@` | `ALT4.ASPMX.L.GOOGLE.COM.` | 10 |

### Email Security Records (SPF, DKIM, DMARC)
1. **SPF Record (TXT):**
   * **Host:** `@`
   * **Value:** `v=spf1 include:_spf.google.com ~all`
2. **DKIM Record (TXT):**
   * Generated from **Google Workspace Admin Console** > Apps > Google Workspace > Gmail > Authenticate email.
   * **Host:** `google._domainkey`
   * **Value:** `v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8...`
3. **DMARC Record (TXT):**
   * **Host:** `_dmarc`
   * **Value:** `v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@thebooklaunchcompany.com; pct=100; sp=quarantine`

---

## 6. Self-Hosted Server / VPS Deployment (D: Drive)

If hosting on a dedicated Windows/Linux VPS or testing locally:
```bash
# 1. Navigate to the project root:
cd D:\The-Book-Launch-Company

# 2. Build production assets:
npm run build

# 3. Launch production server (Daemon mode):
npm run start -- -p 3000
```
To run as a permanent system service on Windows, configure **PM2** or **NSSM** (Non-Sucking Service Manager):
```bash
pm2 start npm --name "tblc-web" -- run start -- -p 3000
pm2 save
pm2 startup
```

---

## 7. Post-Launch Verification Checklist

Once DNS propagation is complete:
- [ ] Visit `https://thebooklaunchcompany.com/` and confirm SSL padlock is green.
- [ ] Verify `https://www.thebooklaunchcompany.com/` redirects seamlessly to apex or canonical URL.
- [ ] Submit a test inquiry via the discovery modal; verify confirmation view and check webhook delivery.
- [ ] Inspect mobile layout on iOS Safari and Android Chrome.
- [ ] Test marquee pause/resume button and hero video sound preview.
- [ ] Run Google Rich Results Test on `https://thebooklaunchcompany.com/` to verify Organization and FAQ Schema.org data.

---

**Prepared By:** Senior Full-Stack Engineering & Deployment Team  
**Handover Date:** November 8, 2026

