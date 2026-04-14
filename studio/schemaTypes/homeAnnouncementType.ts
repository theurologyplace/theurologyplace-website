import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homeAnnouncement',
  title: "What's New (Home)",
  type: 'document',
  description:
    'Cards shown in the “What’s New at The Urology Place?” slider on the home page.',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 5,
      description: 'Short summary shown on the card (plain text).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description: 'Describe the image for accessibility.',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkUrl',
      title: 'Link URL',
      type: 'string',
      description:
        'Internal path (e.g. /in-office-anesthesia) or full URL (https://…).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkLabel',
      title: 'Link label',
      type: 'string',
      description: 'Button text (e.g. Learn more).',
      initialValue: 'Learn more',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort order',
      type: 'number',
      description: 'Lower numbers appear first in the slider.',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Sort order',
      name: 'sortOrderAsc',
      by: [{field: 'sortOrder', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      order: 'sortOrder',
    },
    prepare({title, media, order}) {
      return {
        title: title ?? 'Untitled',
        subtitle:
          typeof order === 'number' ? `Order: ${order}` : 'Home announcement',
        media,
      }
    },
  },
})
