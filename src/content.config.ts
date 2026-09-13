import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const concerts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/concerts" }),

  schema: z.object({
    title: z.string(),

    date: z.coerce.date(),
    time: z.string(),

    city: z.string(),
    venue: z.string(),

    description_author: z.string().optional(),

    program: z.array(
      z.object({
        composer: z.string(),
        work: z.string(),
      })
    ),

    partners: z.array(
      z.object({
        name: z.string(),
        role: z.string().optional(),
      })
    ),

    url: z.string().url().optional(),
  }),
});

const partitions = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/partitions",
  }),

  schema: z.object({
    composer: z.string(),
    title: z.string(),
    type: z.string(),
    file: z.string(),
  }),
});

export const collections = {
  concerts,
  partitions,
};