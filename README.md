# Stitch & Twirl

Handmade crochet boutique — Astro site, Razorpay checkout, Shiprocket fulfillment.
See the full business plan at `C:\Users\ajitd\.claude\plans\ultra-hi-so-my-peaceful-adleman.md`
for market research, pricing, legal notes, and the GTM playbook. This README covers
the operational how-to.

## Windows dev note

This project folder's name contains `&`, which breaks Windows's `npm run <script>`
(it shells through `cmd.exe`, which treats a bare `&` as a command separator even
inside a quoted path). **Use the direct commands below instead of `npm run dev/build/preview`
when working locally on Windows:**

```sh
node node_modules/astro/bin/astro.mjs dev
node node_modules/astro/bin/astro.mjs build
node node_modules/astro/bin/astro.mjs preview
node node_modules/astro/bin/astro.mjs add <integration>
```

This is a local-Windows-only quirk — Cloudflare Pages builds on Linux, where
`npm run build` works normally, so the deploy pipeline is unaffected.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `node node_modules/astro/bin/astro.mjs dev` | Local dev server at localhost:4321 |
| `node node_modules/astro/bin/astro.mjs build` | Build to `./dist/` |

## Project structure

- `src/content/products/products.yaml` — every live product, one file (see `content.config.ts` for the schema each entry must match)
- `src/pages/` — Home, Shop, Product detail (`shop/[slug].astro`), About, FAQ (legal disclosures live here)
- `public/products/<category>/<slug>/` — processed product images, grouped by category folder (`potli`, `bag`, `doily`, `scarf`, `shawl`, `accessory`, ...), referenced by plain URL path in each product's frontmatter
- `scripts/` — Node scripts for Razorpay payment links, Shiprocket orders/labels, and the Google Sheet tracker
- `apps-script/OrderTracker.gs` — paste into the Google Sheet's Apps Script editor (see comment header in that file)
- `new-products/` — flat drop folder (git-ignored). Drop any image files loose here, any filenames, no subfolders needed — Claude identifies each by looking at it and sorts them out, same as the first WhatsApp photo batch. `new-products/_published/` is where originals get archived after a product goes live (also flat).
- `ready-to-post/` — drafted Instagram/WhatsApp content per product, for manual posting (git-ignored)

## The listing pipeline (new product → live on site)

Run this whenever the user says "process new products" or similar:

1. Read every loose file in `new-products/`, open each one, and identify which product (and which angle — hero/source-faithful/detail/alt) it is by looking at it — filenames carry no information, don't rely on them.
2. Group the identified images by product. From the photo content itself, determine the product title, category, and tier (`signature` or `quick-ship`) for any product not already in `src/content/products/`.
3. If the photos are raw phone shots, run `python scripts/cleanup-photos.py` (crop/orient/autocontrast — local Pillow only). If they're AI-generated photoshoot exports from the user's own "Flow" tool, run `python scripts/remove-watermark.py` instead (local OpenCV seamless-clone, strips the fixed-position corner watermark — no external service, no API dependency/cost either way).
4. Price it: `(yarn cost + fair hourly rate × hours) × 1.4–1.6`, sanity-checked against the pricing benchmark table in the plan (Section 1).
5. Write SEO title/description.
6. Generate the SKU: `SIG-YYYY-NNN` or `QS-YYYY-NNN` (sequential — check existing files in `src/content/products/` for the next number).
7. Save processed images to `public/products/<category>/<slug>/`.
8. Run `node scripts/create-payment-link.mjs --amount <price> --title "<title>" --sku <SKU>` once Razorpay is set up, and put the resulting URL in `paymentLinkUrl`.
9. Append an entry to `src/content/products/products.yaml` (`id: <slug>` + every field from `content.config.ts`).
10. Log the listing: `node scripts/log-to-sheet.mjs --type listing --sku <SKU> --title "<title>" --price <price> --tier <tier>`.
11. Commit + push — Cloudflare Pages auto-deploys.
12. Move the source file(s) into `new-products/_published/` (flat, just for archive).
13. Draft an Instagram caption + hashtags + WhatsApp catalog text into `ready-to-post/<slug>/`.

## The fulfillment flow (order comes in → shipped)

1. Razorpay webhook (once configured — see `apps-script/OrderTracker.gs`) logs the paid order into the Sheet's "Orders" tab automatically. If the webhook isn't set up yet, log it manually: `node scripts/log-to-sheet.mjs --type order --sku <SKU> --buyer "<name>" --price <price> --paymentStatus paid`.
2. Create the Shiprocket order: fill in a copy of `scripts/order-example.json` with the buyer's real details, then `node scripts/shiprocket.mjs create-order --file <that-file>.json`.
3. Assign a courier in the Shiprocket dashboard if it wasn't auto-assigned, then the script (or the dashboard) gives you the AWB + a print-ready label PDF.
4. Print the label (regular printer + A4 adhesive sheets at this volume), pack using the Section 7 packaging guide from the plan, attach the label, hand off to the courier.
5. Update the Sheet's shipping status/AWB column.

## One-time account setup (user does these — Claude can't create accounts or enter payment/KYC details)

- **Domain** — buy via Namecheap/GoDaddy, point it at Cloudflare Pages.
- **GitHub repo** — create it, then `git remote add origin <url> && git push -u origin main`.
- **Cloudflare Pages** — connect the GitHub repo, build command `npm run build`, output directory `dist`.
- **Razorpay** — sign up, complete KYC, then Settings > API Keys → paste into `.env`.
- **Shiprocket** — sign up (Lite plan, free), add a pickup address, note its exact name for `.env`.
- **Google Sheet** — create it with "Orders"/"Listings" tabs, paste in `apps-script/OrderTracker.gs`, deploy as Web App, paste the URL into `.env`.

Copy `.env.example` to `.env` and fill in each value as its account is approved.
