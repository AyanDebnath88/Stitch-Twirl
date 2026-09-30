/**
 * Stitch & Twirl — lightweight order/listing tracker.
 *
 * SETUP (one-time, ~5 minutes):
 * 1. Create a new Google Sheet. Add two tabs named exactly: "Orders" and "Listings".
 *    Orders header row (A1:H1):   Date | SKU | Product | Price | Buyer | Payment Status | Shipping Status | AWB
 *    Listings header row (A1:E1): Date | SKU | Product | Price | Tier
 * 2. Extensions > Apps Script. Delete any starter code, paste this whole file in, save.
 * 3. Deploy > New deployment > type "Web app". Execute as "Me", access "Anyone".
 * 4. Copy the deployment URL into .env as SHEET_WEBHOOK_URL.
 * 5. (Optional) Razorpay Settings > Webhooks > add this same URL, event
 *    "payment_link.paid", so orders log automatically without Claude having
 *    to call log-to-sheet.mjs manually.
 */

function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet();

  // Razorpay webhook payloads look different from our own log-to-sheet.mjs
  // calls — handle both shapes.
  if (body.event === "payment_link.paid") {
    const link = body.payload.payment_link.entity;
    appendOrderRow(sheet, {
      sku: link.reference_id,
      title: link.description,
      price: (link.amount_paid / 100).toString(),
      buyer: link.customer?.contact ?? "",
      paymentStatus: "paid",
      shippingStatus: "pending",
      awb: "",
    });
    return respond("Razorpay order logged");
  }

  if (body.type === "listing") {
    appendListingRow(sheet, body);
    return respond("Listing logged");
  }

  if (body.type === "order") {
    appendOrderRow(sheet, body);
    return respond("Order logged");
  }

  return respond("Unrecognized payload, ignored");
}

function appendOrderRow(sheet, data) {
  const tab = sheet.getSheetByName("Orders");
  tab.appendRow([
    new Date(),
    data.sku ?? "",
    data.title ?? data.product ?? "",
    data.price ?? "",
    data.buyer ?? "",
    data.paymentStatus ?? "",
    data.shippingStatus ?? "",
    data.awb ?? "",
  ]);
}

function appendListingRow(sheet, data) {
  const tab = sheet.getSheetByName("Listings");
  tab.appendRow([new Date(), data.sku ?? "", data.title ?? "", data.price ?? "", data.tier ?? ""]);
}

function respond(message) {
  return ContentService.createTextOutput(message).setMimeType(ContentService.MimeType.TEXT);
}
