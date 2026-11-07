# blog

## Quick start

Click **Use this template** on GitHub, or clone directly:

```sh
git clone https://github.com/anjay-goel/astro-sienna.git my-site
cd my-site
pnpm install
pnpm dev
```

Open http://localhost:4321.

## Commands

| Command        | What it does                                 |
|----------------|----------------------------------------------|
| `pnpm dev`     | Start the dev server with HMR                |
| `pnpm build`   | Type-check, build, and run Pagefind indexing |
| `pnpm preview` | Preview the production build locally         |
| `pnpm format`  | Run Biome and Prettier                       |
| `pnpm lint`    | Lint with Biome                              |

## Configuration

Most personalisation happens in two files.

**`src/site.config.ts`** holds author, profile, comments, analytics, and webmentions. Every field in `profile` is
optional. Leave any of `email`, `github`, `linkedin`, `employer`, `alumni`, or `avatar` undefined and the corresponding
link is hidden site-wide. Same for `comments` and `analytics`: undefined means the script never loads.

**`astro.config.ts`** is where you set `site` to your final domain (used for canonical URLs, sitemap, RSS, and OG image
URLs). The base path is handled automatically — see [Deploying](#deploying); you normally don't touch it.

Replace these assets in `public/`:

- `icon.png` (512×512). Drives the favicon and the auto-generated `apple-touch-icon`, `icon-192`, and `icon-512` PWA
  manifest icons.
- `social-card.png` (1200×630). Fallback OG image, used when a post doesn't have its own. The default is a placeholder
  you can swap.
- `avatar.png` (optional). Referenced from `siteConfig.profile.avatar`, used in the About page's structured data and any
  avatar slot you add.

### Per-post OG images

Every post gets its own 1200×630 OG image generated at build time by [Satori](https://github.com/vercel/satori). The
markup lives in `src/pages/og-image/[...slug].png.ts`. Tweak it once and every post's card updates on the next build. To
skip the generated image and point a post at your own, set `ogImage: "/path/to/image.png"` in the post's frontmatter.

## Writing posts

Posts live in `src/content/post/` as `.md` or `.mdx` files. The filename becomes the slug.

```yaml
---
title: "Your post title"
publishDate: 2026-01-12
description: "One-sentence summary used in cards, social previews, and meta tags."
tags: [ tag-one, tag-two ]
# updatedDate: 2026-02-01     # optional, shown as "Updated …"
# draft: true                  # excludes the post from production builds
# coverImage:
#   src: ./_assets/cover.png
#   alt: "Description for screen readers"
---
```

## Project layout

```
src/
  site.config.ts        # author / profile / integrations
  content.config.ts     # collection schemas (post, page)
  content/
    post/*.md           # blog posts
    page/about.md       # about page
  data/showcase.ts      # showcase entries (or empty for none)
  components/           # blog/, layout/
  layouts/              # Base.astro, BlogPost.astro
  pages/                # routes (incl. /og-image, /posts pagination, /tags, rss)
  plugins/              # remark-admonitions, remark-reading-time, rehype-base-path
  styles/global.css     # design tokens and shared utilities
public/                 # static assets served at site root
```

## Credits
Theme adapted from [astro-sienna](https://github.com/anjay-goel/astro-sienna).

Originally forked from [astro-theme-cactus](https://github.com/chrismwilliams/astro-theme-cactus)
by [Chris Williams](https://github.com/chrismwilliams), then heavily revamped into its current form.

## License

[MIT](./LICENSE).
