#!/usr/bin/env node
// Creates a Razorpay Payment Link for one product.
//
// Usage:
//   node scripts/create-payment-link.mjs --amount 4200 --title "Rust Cardigan" --sku SIG-2026-001
//
// Prints the resulting payment link URL — paste it into the product's
// `paymentLinkUrl` frontmatter field in src/content/products/<slug>.md.
//
// Razorpay Payment Links API docs: https://razorpay.com/docs/api/payments/payment-links/

import { requireEnv } from "./lib/env.mjs";

requireEnv("RAZORPAY_KEY_ID", "RAZORPAY_KEY_SECRET");

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 2) {
    const key = argv[i]?.replace(/^--/, "");
    out[key] = argv[i + 1];
  }
  return out;
}

const args = parseArgs(process.argv.slice(2));
const { amount, title, sku, phone } = args;

if (!amount || !title || !sku) {
  console.error(
    "Required: --amount <rupees> --title \"<product title>\" --sku <SKU>\nOptional: --phone <customer phone, if known>"
  );
  process.exit(1);
}

const auth = Buffer.from(
  `${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`
).toString("base64");

const payload = {
  amount: Math.round(Number(amount) * 100), // paise
  currency: "INR",
  description: `${title} (${sku}) — Yarnkatha`,
  reference_id: sku,
  notify: { sms: Boolean(phone), email: false },
  reminder_enable: true,
  ...(phone ? { customer: { contact: phone } } : {}),
};

const res = await fetch("https://api.razorpay.com/v1/payment_links", {
  method: "POST",
  headers: {
    Authorization: `Basic ${auth}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});

const data = await res.json();

if (!res.ok) {
  console.error("Razorpay error:", JSON.stringify(data, null, 2));
  process.exit(1);
}

console.log("Payment link created:");
console.log(data.short_url);
