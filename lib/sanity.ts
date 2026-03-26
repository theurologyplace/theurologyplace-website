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

export const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    author->{
      _id,
      name
    }
  }
`