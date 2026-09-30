#!/usr/bin/env node
// Posts one row to the Google Sheet order/listing tracker, via the Apps
// Script Web App deployed from apps-script/OrderTracker.gs.
//
// Usage:
//   node scripts/log-to-sheet.mjs --type listing --sku SIG-2026-001 --title "..." --price 4200 --tier signature
//   node scripts/log-to-sheet.mjs --type order --sku SIG-2026-001 --buyer "Name" --price 4200 --paymentStatus paid

import { requireEnv } from "./lib/env.mjs";

requireEnv("SHEET_WEBHOOK_URL");

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 2) {
    out[argv[i]?.replace(/^--/, "")] = argv[i + 1];
  }
  return out;
}

const args = parseArgs(process.argv.slice(2));

if (!args.type || !args.sku) {
  console.error("Required: --type <listing|order> --sku <SKU> (plus other fields as needed)");
  process.exit(1);
}

const res = await fetch(process.env.SHEET_WEBHOOK_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(args),
});

const text = await res.text();
if (!res.ok) {
  console.error("Sheet webhook error:", text);
  process.exit(1);
}
console.log("Logged to sheet:", text);
