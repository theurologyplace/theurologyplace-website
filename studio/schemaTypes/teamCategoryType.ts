import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'teamCategory',
  title: 'Team category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category name',
      type: 'string',
      description:
        'Section heading on the About Us page (e.g. “Providers”, “Front Desk”, “Office Manager”).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Section order',
      type: 'number',
      description:
        'Lower numbers appear first on the page. Members within a category use their own Display order.',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Section order',
      name: 'sortOrderAsc',
      by: [{field: 'sortOrder', direction: 'asc'}],
    },
    {
      title: 'Name',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'title', sortOrder: 'sortOrder'},
    prepare({title, sortOrder}) {
      return {
        title: title ?? 'Untitled category',
        subtitle:
          typeof sortOrder === 'number' ? `Section order: ${sortOrder}` : undefined,
      }
    },
  },
})
