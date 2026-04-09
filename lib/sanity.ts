import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = '5zd6me01'
export const dataset = 'production'
export const apiVersion = '2025-03-25'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

/** About Us — team / staff for /about-us (featured, profile, grid layouts). */
export const teamMembersQuery = `
  *[_type == "teamMember"] {
    _id,
    name,
    role,
    shortSummary,
    bio,
    profileImage,
    credentialImages,
    layoutVariant,
    sortOrder
  }
`

export const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    featured,
    category,
    readTime,
    author->{
      _id,
      name,
      image
    }
  }
`

/** Display labels for post category values (see studio/schemaTypes/postType.ts). */
export const BLOG_CATEGORY_LABELS: Record<string, string> = {
  'mens-health': "Men's Health",
  'womens-health': "Women's Health",
  general: 'General',
}

export function blogCategoryLabel(
  value: string | null | undefined,
): string | null {
  if (!value || typeof value !== 'string') return null
  return BLOG_CATEGORY_LABELS[value] ?? value
}
