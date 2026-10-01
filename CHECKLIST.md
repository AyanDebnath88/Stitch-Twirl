# Build checklist — split by who does it

One file, updated in place. Pairs with `AUDIT.md` (health check) and
the plan at `C:\Users\ajitd\.claude\plans\ultra-hi-so-my-peaceful-adleman.md`.
Status as of 2026-10-01.

## Claude's queue (no account needed, can build now)

- [ ] `sitemap.xml` + `robots.txt` + `site` in `astro.config.mjs`
- [ ] `npm audit`, fix flagged deps
- [ ] Basic accessibility pass — alt text, contrast, focus states, keyboard nav
- [ ] Lighthouse/page-speed pass on home, shop, product, checkout-stub
- [ ] Decide w/ you: category filter UI on `/shop` (potli/bag/doily/scarf/shawl) — have 11 products, borderline worth it yet
- [ ] Decide w/ you: site search — same, borderline at this catalog size
- [ ] Draft Instagram caption + hashtags + WhatsApp catalog text per live product (`ready-to-post/<slug>/`) — not started
- [ ] Wire GA4/Meta Pixel into `Layout.astro` — blocked on you creating the accounts, give me the IDs

## Your queue (needs an account only you can create)

- [ ] Buy domain, point to Cloudflare Pages
- [ ] Cloudflare Pages — connect GitHub repo (`AyanDebnath88/Stitch-Twirl`), build cmd `npm run build`, output `dist`
- [ ] Razorpay — signup + KYC, paste API key into `.env` (unblocks `scripts/create-payment-link.mjs`, Buy Now button, item 12/13 on AUDIT.md)
- [ ] Shiprocket — signup (Lite plan), add pickup address, name into `.env` (unblocks `scripts/shiprocket.mjs`)
- [ ] Google Sheet — create w/ Orders + Listings tabs, paste `apps-script/OrderTracker.gs`, deploy as Web App, URL into `.env` (unblocks `scripts/log-to-sheet.mjs`)
- [ ] GA4 property + Meta Business/Pixel — create, hand me the IDs
- [ ] Instagram Shop (Commerce Manager) + WhatsApp Business Catalog setup
- [ ] Google Business Profile — service-area listing, verification
- [ ] Optional: Udyam/MSME registration (free, helps banking/credibility — see plan Section 3)
- [ ] sunflower-kids-dress — still waiting on details from you before I list it
- [ ] Poncho photo found in the batch (`Image_generation_prompt_instruct…`) — new item or test output? Still unanswered
- [ ] UGC shots — you take them, then we bake into Flow per your earlier note

## Blocked-by-you → unblocks-me chain
Razorpay key → Buy Now live → real checkout testable (AUDIT items 12/13)
Shiprocket creds → fulfillment flow testable (AUDIT item 21)
GA4/Pixel IDs → tracking installed → AUDIT items 14/15 unblock
