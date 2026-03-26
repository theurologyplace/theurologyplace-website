import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'details', title: 'Tags & display'},
    {name: 'seo', title: 'SEO'},
    {name: 'related', title: 'Related & CTA'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      description: 'The headline shown on the website and in search results.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      description: 'URL segment for this post (e.g. /blog/your-slug). Generate from the title or edit carefully.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'content',
      description: 'When the post should appear as published. You can schedule a future time.',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      group: 'content',
      description: 'Who wrote this post. Create authors under Content → Author if needed.',
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      group: 'content',
      description: 'Short summary for listings and previews. Max 200 characters.',
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      group: 'content',
      description: 'Hero image at the top of the post and in blog cards. Drag to adjust focal point.',
      options: {hotspot: true},
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      group: 'content',
      description:
        'Main article text. Use the toolbar to add headings, lists, and links. Click + or insert an Image block to add pictures anywhere in the story.',
      of: [
        defineArrayMember({type: 'block'}),
        defineArrayMember({
          type: 'image',
          title: 'Image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
              description: 'Describe the image for accessibility',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'details',
      description: 'Topic area for filtering and future site features.',
      options: {
        list: [
          {title: "Men's Health", value: 'mens-health'},
          {title: "Women's Health", value: 'womens-health'},
          {title: 'General', value: 'general'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'details',
      description: 'Keywords for search and grouping. Type a tag and press Enter to add another.',
      of: [defineArrayMember({type: 'string'})],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      group: 'details',
      description: 'Turn on to highlight this post in featured areas (when the site uses it).',
      initialValue: false,
    }),
    defineField({
      name: 'readTime',
      title: 'Read time (minutes)',
      type: 'number',
      group: 'details',
      description: 'Estimated reading length. Optional; leave blank if unsure.',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (value === undefined || value === null) return true
          if (Number.isInteger(value) && value > 0) return true
          return 'Must be a positive whole number'
        }),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated at',
      type: 'datetime',
      group: 'details',
      description: 'Last substantive edit. Optional; use if the post was revised after publication.',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      group: 'seo',
      description:
        'Optional. Overrides the default title in browser tabs and search snippets. Keep it concise.',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO description',
      type: 'text',
      group: 'seo',
      description:
        'Optional. Meta description for Google and social previews. Aim for a clear summary in ~1–2 sentences.',
      rows: 3,
    }),
    defineField({
      name: 'relatedPosts',
      title: 'Related posts',
      type: 'array',
      group: 'related',
      description: 'Link to other posts readers might want next. Avoid linking to the same post.',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'post'}],
        }),
      ],
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA label',
      type: 'string',
      group: 'related',
      description: 'Short button or link text at the end of the article (e.g. “Book a visit”).',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA link',
      type: 'string',
      group: 'related',
      description: 'Where the CTA goes: full URL (https://…) or site path (e.g. /patient-resources/contact-us).',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      publishedAt: 'publishedAt',
      authorName: 'author.name',
    },
    prepare({title, media, publishedAt, authorName}) {
      const datePart = publishedAt
        ? new Date(publishedAt).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
        : 'No date'
      const authorPart = authorName ? ` · ${authorName}` : ''
      return {
        title: title ?? 'Untitled',
        media,
        subtitle: `${datePart}${authorPart}`,
      }
    },
  },
})
