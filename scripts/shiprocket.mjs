#!/usr/bin/env node
// Creates a Shiprocket order from a JSON file, then generates the AWB + a
// print-ready label PDF, once an order is confirmed paid.
//
// Usage:
//   node scripts/shiprocket.mjs create-order --file order-example.json
//
// order-example.json shape (see order-example.json in this folder):
//   order_id, order_date, sku, product title, price, buyer name/address/phone,
//   weight (kg), dimensions (cm) — see Shiprocket's own docs for the full,
//   current field list since this API does change:
//   https://apidocs.shiprocket.in/
//
// This script is a thin wrapper — if Shiprocket changes required fields,
// update the payload built in buildOrderPayload() below to match their docs.

import { readFileSync } from "node:fs";
import { requireEnv } from "./lib/env.mjs";

requireEnv("SHIPROCKET_EMAIL", "SHIPROCKET_PASSWORD", "SHIPROCKET_PICKUP_LOCATION");

const BASE = "https://apiv2.shiprocket.in/v1/external";

async function authenticate() {
  const res = await fetch(`${BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: process.env.SHIPROCKET_EMAIL,
      password: process.env.SHIPROCKET_PASSWORD,
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Shiprocket auth failed: ${JSON.stringify(data)}`);
  return data.token;
}

function buildOrderPayload(order) {
  return {
    order_id: order.order_id,
    order_date: order.order_date,
    pickup_location: process.env.SHIPROCKET_PICKUP_LOCATION,
    billing_customer_name: order.buyer_name,
    billing_last_name: "",
    billing_address: order.buyer_address,
    billing_city: order.buyer_city,
    billing_pincode: order.buyer_pincode,
    billing_state: order.buyer_state,
    billing_country: "India",
    billing_email: order.buyer_email ?? "orders@example.com",
    billing_phone: order.buyer_phone,
    shipping_is_billing: true,
    order_items: [
      {
        name: order.product_title,
        sku: order.sku,
        units: 1,
        selling_price: order.price,
      },
    ],
    payment_method: order.payment_method ?? "Prepaid",
    sub_total: order.price,
    length: order.length_cm ?? 20,
    breadth: order.breadth_cm ?? 15,
    height: order.height_cm ?? 8,
    weight: order.weight_kg ?? 0.5,
  };
}

async function createOrder(token, order) {
  const res = await fetch(`${BASE}/orders/create/adhoc`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(buildOrderPayload(order)),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Order creation failed: ${JSON.stringify(data)}`);
  return data;
}

async function generateLabel(token, shipmentId) {
  const res = await fetch(`${BASE}/courier/generate/label`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shipment_id: [shipmentId] }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Label generation failed: ${JSON.stringify(data)}`);
  return data.label_url;
}

const [cmd, ...rest] = process.argv.slice(2);
const args = Object.fromEntries(
  rest.reduce((acc, cur, i, arr) => {
    if (cur.startsWith("--")) acc.push([cur.slice(2), arr[i + 1]]);
    return acc;
  }, [])
);

if (cmd !== "create-order" || !args.file) {
  console.error("Usage: node scripts/shiprocket.mjs create-order --file <order.json>");
  process.exit(1);
}

const order = JSON.parse(readFileSync(args.file, "utf-8"));
const token = await authenticate();
const created = await createOrder(token, order);
console.log("Order created:", created.order_id, "shipment:", created.shipment_id);

if (created.shipment_id) {
  const labelUrl = await generateLabel(token, created.shipment_id);
  console.log("Label PDF:", labelUrl);
} else {
  console.log(
    "No shipment_id returned yet — assign a courier in the Shiprocket dashboard, then generate the label from there."
  );
}
