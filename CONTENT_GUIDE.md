# Content Management Guide

This website uses Astro's Content Collections as a file-based CMS. All product content is stored in Markdown files.

## Managing Products

### Location
All products are stored in: `src/content/products/`

### File Structure
Each product is a `.md` (Markdown) file with two parts:
1. **Frontmatter** (YAML between `---` marks) - Product metadata
2. **Content** (Markdown below frontmatter) - Detailed product description

### Example Product File

```markdown
---
title: "Adventure Pro Backpack"
description: "Premium hiking backpack for multi-day adventures"
price: 189.99
image: "/images/adventure-pro.jpg"
category: "hiking"
features:
  - "60L capacity"
  - "Waterproof rain cover"
  - "Adjustable torso length"
colors:
  - "Forest Green"
  - "Mountain Blue"
capacity: "60L"
featured: true
---

## Product Details

Write your detailed product description here using Markdown.

### Key Features

- Bullet points
- Work great
- For listing features

### Specifications

You can use headings, **bold text**, *italic text*, and more.
```

## Field Reference

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `title` | String | Yes | Product name | "Adventure Pro Backpack" |
| `description` | String | Yes | Short description for product cards | "Premium hiking backpack..." |
| `price` | Number | Yes | Price in USD (no $ sign) | 189.99 |
| `image` | String | Yes | Image path (placeholder for now) | "/images/product.jpg" |
| `category` | String | Yes | Must be one of: hiking, travel, everyday, laptop | "hiking" |
| `features` | Array | Yes | List of key features | See example above |
| `colors` | Array | Yes | Available colors | ["Black", "Blue"] |
| `capacity` | String | Yes | Bag capacity | "60L" |
| `featured` | Boolean | Yes | Show on homepage? | true or false |

## Common Tasks

### Add a New Product

1. Create a new file: `src/content/products/my-new-product.md`
2. Copy the template from an existing product
3. Fill in all required fields
4. Write your product description in Markdown
5. Save the file
6. The product automatically appears on the website!

**Filename becomes the URL:**
- File: `my-new-product.md`
- URL: `/products/my-new-product`

### Edit an Existing Product

1. Open the product file: `src/content/products/[product-name].md`
2. Edit the frontmatter values or Markdown content
3. Save the file
4. Changes appear immediately in dev mode

### Change Product Price

Open the product file and change the `price` value:
```yaml
price: 99.99  # Change this number
```

### Mark Product as Featured (Homepage)

Set `featured: true` to show on homepage:
```yaml
featured: true   # Shows on homepage
featured: false  # Only on products page
```

### Delete a Product

Simply delete the `.md` file from `src/content/products/`

### Change Product Category

The category must be one of these four options:
- `hiking` - For hiking/outdoor backpacks
- `travel` - For travel bags
- `everyday` - For daily use backpacks
- `laptop` - For laptop/tech backpacks

```yaml
category: "hiking"  # Change to: travel, everyday, or laptop
```

## Adding New Categories

If you need additional categories beyond the four defaults:

1. Edit `src/content/config.ts`
2. Add your category to the enum:
```typescript
category: z.enum(['hiking', 'travel', 'everyday', 'laptop', 'yourcategory']),
```
3. Use the new category in your product files

## Markdown Formatting Guide

In the content section (below the frontmatter), you can use:

```markdown
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point
- Another bullet

1. Numbered list
2. Another item

[Link text](https://example.com)
```

## Development Workflow

1. **Start dev server:** `npm run dev`
2. **Edit content:** Modify `.md` files in `src/content/products/`
3. **View changes:** Browser auto-refreshes at http://localhost:4321
4. **Build site:** `npm run build` when ready to publish
5. **Commit changes:** `git add . && git commit -m "Update products"`

## TypeScript Validation

Astro validates all your content against the schema. If you make a mistake:
- Missing required field → Build error with helpful message
- Wrong category → Error showing valid options
- Wrong data type → Error explaining what's expected

This prevents content errors before they reach production!

## Tips

- Keep filenames lowercase with hyphens: `my-product.md` ✅ not `My Product.md` ❌
- Don't forget the closing `---` after frontmatter
- Featured products appear first on the homepage
- Price should be a number without $ sign: `99.99` not `"$99.99"`
- The `image` field is currently a placeholder (all products use SVG icons)

## Future Enhancements

Want to add more features? You can extend the schema in `src/content/config.ts`:

```typescript
schema: z.object({
  // ... existing fields ...
  inStock: z.boolean().default(true),
  weight: z.string().optional(),
  dimensions: z.string().optional(),
  // Add any fields you need!
})
```

## Need Help?

- Astro Content Collections: https://docs.astro.build/en/guides/content-collections/
- Markdown Guide: https://www.markdownguide.org/basic-syntax/
- YAML Syntax: https://yaml.org/spec/1.2.2/
