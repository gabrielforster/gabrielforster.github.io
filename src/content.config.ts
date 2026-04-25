import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  date: z.coerce.date(),
  draft: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
});

const workSchema = z.object({
  company: z.string(),
  role: z.string(),
  dateStart: z.coerce.date().or(z.string()),
  dateEnd: z.union([z.coerce.date(), z.string()]),
  tags: z.array(z.string()),
});

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  draft: z.boolean().optional(),
  demoURL: z.string().optional(),
  repoURL: z.string().optional(),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/index.{md,mdx}", base: "./src/content/blog" }),
  schema: postSchema,
});

const work = defineCollection({
  loader: glob({
    pattern: ["**/*.{md,mdx}", "!**/*.pt.{md,mdx}"],
    base: "./src/content/work",
  }),
  schema: workSchema,
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/index.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: projectSchema,
});

const ptBlog = defineCollection({
  loader: glob({
    pattern: "**/index.pt.{md,mdx}",
    base: "./src/content/blog",
    generateId: ({ entry }) =>
      entry
        .replace(/\/index\.pt\.(md|mdx)$/, "")
        .split("/")
        .map((s) => s.replace(/^\d+-/, ""))
        .join("/"),
  }),
  schema: postSchema,
});

const ptWork = defineCollection({
  loader: glob({
    pattern: "**/*.pt.{md,mdx}",
    base: "./src/content/work",
    generateId: ({ entry }) => entry.replace(/\.pt\.(md|mdx)$/, ""),
  }),
  schema: workSchema,
});

const ptProjects = defineCollection({
  loader: glob({
    pattern: "**/index.pt.{md,mdx}",
    base: "./src/content/projects",
    generateId: ({ entry }) => entry.replace(/\.pt\.(md|mdx)$/, ""),
  }),
  schema: projectSchema,
});

export const collections = {
  "blog": blog,
  "work": work,
  "projects": projects,
  "pt-blog": ptBlog,
  "pt-work": ptWork,
  "pt-projects": ptProjects,
};
