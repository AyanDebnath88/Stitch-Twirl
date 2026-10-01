# Ecommerce audit tracker

Checklist: https://tekglide.com/25-point-ecommerce-website-audit-checklist/
Status as of 2026-10-01. Update in place as items move — one file, not one per check.

Legend: ✅ done · 🟡 partial · ⛔ blocked (needs an account/service the user sets up) · ⬜ not started · N/A by design (no-cart, payment-link checkout model per the business plan)

## Technical Performance
1. Page speed — ⬜ not measured. Astro static output, should be fast by default; no Lighthouse run yet.
2. Core website functions (nav, forms, buttons) — 🟡 manually spot-checked (shop grid, product detail, Buy Now/WhatsApp buttons) during the photo-shoot update. No systematic click-through yet.

## Mobile UX
3. Mobile experience — ⬜ not tested. Site is Tailwind-responsive by construction, not verified on real breakpoints.
4. Mobile checkout — ⛔ blocked. No Razorpay account yet — "Buy Now" shows "Payment link coming soon."

## SEO
5. Crawl for SEO issues — 🟡 partial. `seoTitle`/`seoDescription` per product, `site` set in `astro.config.mjs` (yarnkatha.com), `sitemap-index.xml` + `robots.txt` live. Still no canonical tags.
6. Organic search health — N/A — site isn't live on a domain yet, no search traffic to review.

## Product Pages
7. Product information — ✅ title, price, materials, lead time, care instructions, stock status all present per product in `products.yaml`.
8. Product page actions — N/A by design — one-of-one pieces, no variants/quantity selector. Buy Now + WhatsApp buttons present and working (Buy Now disabled until Razorpay key exists).

## Category Pages
9. Category structure — 🟡 partial. Images are now organized into category folders (`potli`, `bag`, `doily`, `scarf`, `shawl`, `accessory`) but the shop page itself only splits Signature vs Quick-Ship — no category filter/nav in the UI yet.

## Search
10. Site search — ⬜ not built. 11 products, not urgent yet; revisit once catalog grows.

## Cart
11. Shopping cart — N/A by design — Razorpay Payment Links model, no cart.

## Checkout
12. Checkout walkthrough — ⛔ blocked on Razorpay account + KYC.

## Payments
13. Payment methods — ⛔ blocked on Razorpay account + KYC.

## Analytics
14. Tracking verified — ⬜ not installed. No GA4/Meta Pixel on the site yet.
15. Conversion data — N/A until analytics exists.

## Security
16. Website security — 🟡 partial. `.env` git-ignored, no secrets in repo, no CMS/plugin attack surface (static Astro, no DB). `npm audit` run 2026-10-01 — 0 vulnerabilities.
17. Forms/customer data handling — 🟡 partial. Site itself stores nothing (no DB, static host) — checkout/payment data goes to Razorpay, shipping data to Shiprocket, order records to the user's own Google Sheet. **Gap: no Privacy Policy page yet disclosing this third-party data flow** — needed before go-live, flagged in CHECKLIST.md.

## Accessibility
18. Basic accessibility — ⬜ not audited. Images have `alt={title}`; contrast/keyboard-nav/focus states not checked.

## Conversion Optimization
19. Conversion friction — ⬜ no live traffic yet to analyze.
20. Customer journey walkthrough — 🟡 informal pass done while building; no structured first-visit-to-purchase test yet.

## Infrastructure
21. Integrations/dependencies — ⛔ blocked on user: Razorpay, Shiprocket, Google Sheet tracker all pending account setup (see README "One-time account setup").
22. Backups/recovery — ✅ git + GitHub remote is the backup; no restore drill done but low-risk (static site, image folder bulk is in git history).

## Holiday Readiness
23. Traffic/capacity prep — N/A — pre-launch.
24. Promotions/campaigns — N/A — none exist yet.
25. Full pre-launch audit — ⬜ pending — run this whole list again right before go-live.

---

## Next concrete actions (highest-leverage first)
- Write a Privacy Policy page (item 17 gap) — discloses Razorpay/Shiprocket/Google Sheet as data processors.
- Decide if category filter UI on `/shop` is worth it now or later (catalog is 11 items — borderline).
- Everything else gated on: Razorpay KYC, Shiprocket signup, Cloudflare Pages connect (all user-side, tracked in CHECKLIST.md).

Done this pass: `site` wired, sitemap + robots.txt live, `npm audit` clean, real domain (yarnkatha.com) in `consts.ts`.
