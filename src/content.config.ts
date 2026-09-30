import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    title: z.string(),
    sku: z.string(),
    tier: z.enum(["signature", "quick-ship"]),
    price: z.number(),
    status: z.enum(["available", "sold"]).default("available"),
    leadTime: z.string().optional(),
    materials: z.string().optional(),
    hoursToMake: z.number().optional(),
    heroImage: z.string(),
    images: z.array(z.string()).default([]),
    description: z.string(),
    cardBlurb: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    sizeGuide: z.string().optional(),
    careInstructions: z
      .string()
      .default("Hand wash cold, lay flat to dry, do not wring or bleach."),
    paymentLinkUrl: z.string().url().optional(),
    whatsappMessage: z.string().optional(),
    publishedAt: z.coerce.date(),
  }),
});

export const collections = { products };
