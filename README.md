# The Urology Place — Marketing Website

Public marketing site for **The Urology Place** (San Antonio). The app lives under `app/` (Next.js App Router). Content-heavy areas (e.g. blog) use **Sanity**; most pages are static React + **Tailwind CSS**.

**Conventions and layout rules** (heroes, buttons, nav patterns): see **[`PROJECT_RULES.md`](./PROJECT_RULES.md)** in the repo root.

## Prerequisites

- **Node.js** — Use a current LTS (e.g. **20.x** or newer) compatible with Next.js 16.
- **npm** — Install dependencies from the **repository root** only (see Sanity section below).

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Edit files under `app/`; the dev server hot-reloads.

### npm scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Dev server (`next dev --webpack`) |
| `npm run build` | Production build |
| `npm run start` | Run production server (after `build`) |
| `npm run lint` | ESLint |

## Sanity Studio (embedded)

Embedded [Sanity Studio](https://www.sanity.io/) is available at **`/studio`** (e.g. [http://localhost:3000/studio](http://localhost:3000/studio)).

**Dependency tree:** Use a **single** install from the **repository root** only. The Next.js app and embedded Studio share config under `studio/` (`sanity.config.ts`, schemas), but **the root `package.json` and root `node_modules` are the source of truth** for packages.

**Do not** run `npm install` (or `yarn` / `pnpm`) **inside `studio/`**. If `studio/node_modules` exists, the bundler can load duplicate `styled-components` or `@sanity/ui` copies and the embedded `/studio` route may crash with theme errors (e.g. `theme.sanity is undefined` or “The structure tool crashed”).

**Recovery if `/studio` fails with a Sanity theme or styled-components error:**

1. Delete `studio/node_modules`
2. Delete `studio/package-lock.json` (if present)
3. Delete `.next`
4. Run `npm install` from the **project root**
5. Run `npm run dev` again

The standalone Studio in `studio/` uses the same config as the embedded Studio; keep all package installs at the root so dependencies stay unified.

## Project documentation (developer guide)

This section describes how the site, CMS, and blog fit together. In production, replace `<your-domain>` with your live hostname (for example `https://your-domain.com/studio` and `https://your-domain.com/patient-resources/blog`). Locally, use `http://localhost:3000` with the same paths.

### Tech stack

| Layer | Technology |
| --- | --- |
| **Framework** | [Next.js](https://nextjs.org) 16 (App Router), [React](https://react.dev) 19 |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) v4, PostCSS (`app/globals.css`) |
| **Linting** | ESLint (`eslint-config-next`) |
| **CMS** | [Sanity](https://www.sanity.io) — `sanity`, `next-sanity`, `@sanity/client`, Portable Text (`@portabletext/react`), image URLs (`@sanity/image-url`), Vision (`@sanity/vision`) |
| **Studio UI** | `styled-components` (pinned; shared with embedded Studio — install only at repo root) |
| **Forms / spam** | Google reCAPTCHA v3 (invisible; `app/lib/recaptcha-v3-client.ts` + `app/lib/contact-recaptcha.ts`) |
| **Video** | `hls.js` (HLS playback where used) |
| **Hosting** | [Vercel](https://vercel.com) — typical deploy target; connect the repo and set the production domain in the dashboard |
| **Project management** | **[Trello](https://trello.com)** — task tracking and team coordination (workflow tool; not a runtime dependency) |

**Source layout**

- **`app/`** — Routes, layouts, and UI components for the public site.
- **`studio/`** — Sanity schema and Studio config (`sanity.config.ts`); **do not** run `npm install` inside `studio/` (see below).
- **`lib/sanity.ts`** — Sanity client, project/dataset IDs, and GROQ queries for the blog.
- **`public/`** — Static assets (images, etc.).

- **Sanity Studio (embedded)** — Editors manage content at **`/studio`** (e.g. `https://<your-domain>/studio`). The Studio is embedded in this Next.js app, not deployed as a separate Sanity-hosted URL by default.
- **Blog** — Public listing at **`/patient-resources/blog`** and posts at **`/patient-resources/blog/[slug]`**; data is loaded from Sanity at request/build time, not from static files in the repo.

### How the blog works

1. **Authoring** — Blog posts are created and updated in **Sanity Studio** as documents of type **Blog Post** (`post` in the schema).
2. **Data flow** — The website uses the Sanity client (`lib/sanity.ts`) and GROQ queries to fetch posts for the listing page and for each slug page.
3. **Rendering** — `app/patient-resources/blog/page.tsx` renders the blog index; `app/patient-resources/blog/[slug]/page.tsx` renders individual posts from Sanity data.
4. **Config location** — Schema and Studio configuration live under **`studio/`**, but **npm dependencies must be installed only from the repository root** so the embedded `/studio` route and the Next app share one `node_modules` tree (see [Sanity Studio (embedded)](#sanity-studio-embedded)).

### Create and publish a new blog post

1. Open **`https://<your-domain>/studio`** (or **`http://localhost:3000/studio`** locally) and sign in when prompted.
2. In the **Structure** tool, open **Blog Post** (or the equivalent list for `post` documents).
3. Click **Create** → **Blog Post** (wording may vary slightly by Studio version).
4. Complete the fields your editorial workflow requires (see [Blog field reference](#blog-field-reference) below). **Title** and **Slug** are required by the schema.
5. For **Slug**, use **Generate from title** or type a URL-safe value (this becomes `/patient-resources/blog/<slug>`).
6. Set **Published at** so the post sorts and displays as intended.
7. Add **Excerpt**, **Author** (pick or create an **Author** document under Content), **Category**, **Tags**, **Main image**, and **SEO title / SEO description** as needed.
8. In **Body**, write the article. Use the editor toolbar for headings, lists, and links. Insert **Image** blocks for inline images; add **Alternative text** on images for accessibility.
9. Under **Related & CTA**, optionally set **Related posts**, **CTA label**, and **CTA link** (use both CTA fields together if you add a call-to-action).
10. Click **Publish** so the document is live in the public API (drafts do not appear on the public blog until published).
11. Verify: visit **`/patient-resources/blog`** and open the new post; confirm content, images, and metadata look correct.

### Blog field reference

Concise guidance for the main `post` fields (see `studio/schemaTypes/postType.ts` for the full schema).

| Field | Role | Optional? |
| --- | --- | --- |
| **Title** | Page headline and default SEO title | Required |
| **Slug** | Last segment of the public URL | Required |
| **Published at** | Listing order and “published” time | Strongly recommended |
| **Author** | Reference to an **Author** document | Yes |
| **Excerpt** | Short summary for cards/previews (max 200 characters) | Yes |
| **Main image** | Hero and card image (hotspot supported) | Yes |
| **Body** | Portable text: paragraphs, headings, inline **Image** blocks | Required for a full article |
| **Category** | Men’s Health / Women’s Health / General | Yes |
| **Tags** | Free-form labels for grouping | Yes |
| **Featured** | Marks the post as featured when the site uses it | Optional (default off) |
| **Read time (minutes)** | Estimated read length shown on the site | Yes |
| **Updated at** | Last revised date if you edit after publication | Yes |
| **SEO title** | Overrides browser/search title | Yes |
| **SEO description** | Meta description for search and social | Yes |
| **Related posts** | References to other `post` documents | Yes |
| **CTA label** / **CTA link** | End-of-article button text and URL or path | Yes; use both for a working CTA |

### Developer maintenance notes

- **Do not run `npm install` inside `studio/`** — Use the root `package.json` and root `node_modules` only; see [Sanity Studio (embedded)](#sanity-studio-embedded).
- **Embedded Studio** — Always served at **`/studio`** on the same origin as the marketing site.
- **If `/studio` breaks** with Sanity UI or styled-components theme errors, follow the **Recovery** steps in [Sanity Studio (embedded)](#sanity-studio-embedded) (remove `studio/node_modules`, clear `.next`, reinstall at root).
- **UI / layout** — Follow [`PROJECT_RULES.md`](./PROJECT_RULES.md) for full-page heroes (fixed background + sliding content), shared hero tokens (`app/lib/hero.ts`), button styles aligned with the navbar Contact button, and related patterns.
- **After dependency upgrades or CMS schema changes**, manually verify:
  - `/patient-resources/blog`
  - At least one `/patient-resources/blog/<slug>`
  - `/studio`

### Local vs production URLs

| Environment | Studio | Public blog |
| --- | --- | --- |
| **Production** | `https://<your-domain>/studio` | `https://<your-domain>/patient-resources/blog` |
| **Local** | `http://localhost:3000/studio` | `http://localhost:3000/patient-resources/blog` |

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)

## Adding New Patient Reviews (Home Page)

The homepage includes a rotating carousel of patient reviews that advance every 8 seconds. To add or edit reviews:

1. **Open the data file:** `app/data/patient-reviews.ts`
2. **Add a new review:** Append a new object to the `PATIENT_REVIEWS` array:
   ```ts
   {
     quote: "The full review text in quotation marks. This is what the patient said.",
     name: "First Name Last Initial.",
   },
   ```
3. **Order:** Reviews are shown in the order they appear in the array. The carousel loops through all entries.
4. **Formatting:** Keep the `quote` as a single string. Use proper punctuation and spacing. The `name` is displayed below the quote (e.g. "Jane D." or "John Smith").
5. **Save:** The home page will show the new review in the rotation after the next refresh. No other code changes are required.

To remove a review, delete its object from the `PATIENT_REVIEWS` array in the same file.

## Deploy on Vercel

Connect this repository to [Vercel](https://vercel.com) and deploy the Next.js app. Configure environment variables in the Vercel project if your deployment uses any (e.g. reCAPTCHA or Sanity tokens not committed to the repo). See [Next.js deployment](https://nextjs.org/docs/app/building-your-application/deploying) for general guidance.
