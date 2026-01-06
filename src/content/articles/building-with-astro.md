---
title: Building a Personal Website with Astro
subtitle: A modern approach to static sites
description: Why I chose Astro for my personal website and how you can build one too.
tags: [astro, web development, tutorial]
date: 2026-01-05
---

When I decided to build my personal website, I wanted something fast, simple, and developer-friendly. After looking at various options, I landed on [Astro](https://astro.build/).

## Why Astro?

Astro has several features that make it perfect for content-focused websites:

1. **Zero JavaScript by default** - Pages ship with no JavaScript unless you need it
2. **Markdown support** - Write blog posts in Markdown with frontmatter
3. **Component islands** - Add interactivity only where needed
4. **Great DX** - Fast builds, hot reloading, and TypeScript support

## Getting started

Creating a new Astro project is straightforward:

```bash
npm create astro@latest
```

Then you can start the development server:

```bash
npm run dev
```

## Content collections

Astro's content collections make managing blog posts a breeze. You define a schema for your content, and Astro handles validation and type safety.

```typescript
const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
  }),
})
```

## Deployment

Astro builds to static HTML, so you can deploy anywhere. I'm using GitHub Pages, which is free and integrates well with my workflow.

---

If you're looking to build a personal site or blog, I highly recommend giving Astro a try. It's a joy to work with.
