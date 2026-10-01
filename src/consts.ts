// Central place for placeholder business details.
// TODO: replace every PLACEHOLDER value below with real details before launch —
// these feed the legally-required disclosures (Consumer Protection E-Commerce Rules, 2020)
// as well as contact links across the site.

export const SITE = {
  name: "Yarnkatha",
  tagline: "Handmade crochet, one piece at a time",
  description:
    "Hand-crocheted blankets, bags, and small pieces made to order in small batches — no factories, no rush.",
  domain: "https://PLACEHOLDER-DOMAIN.in",
};

export const SHIP_TIME = "3-5 days";

export const CONTACT = {
  legalName: "PLACEHOLDER LEGAL NAME (e.g. Jane Doe, proprietor)",
  address: "PLACEHOLDER ADDRESS, City, State, PIN",
  email: "hello@PLACEHOLDER-DOMAIN.in",
  whatsappNumber: "91PLACEHOLDER10DIGIT", // country code + number, no + or spaces, for wa.me links
  grievanceContact: "PLACEHOLDER NAME — hello@PLACEHOLDER-DOMAIN.in",
  instagramHandle: "PLACEHOLDER_INSTAGRAM_HANDLE",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
