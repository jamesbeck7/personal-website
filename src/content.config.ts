import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/articles' }),
  schema: z.object({
    tags: z.array(z.string()),
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    featuredImage: z.string().optional(),
  }),
})

export const collections = { articles }
