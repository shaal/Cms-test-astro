import { defineCollection, z } from 'astro:content';

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    image: z.string(),
    category: z.enum(['hiking', 'travel', 'everyday', 'laptop']),
    features: z.array(z.string()),
    colors: z.array(z.string()),
    capacity: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'products': productsCollection,
};
