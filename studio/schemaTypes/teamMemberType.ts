import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Full name as shown on the site (include credentials if desired, e.g. “Naveen Kella, MD”).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'layoutVariant',
      title: 'Layout',
      type: 'string',
      description:
        'Featured = large doctor section with optional award images. Profile = image beside full bio. Team card = “Our Team” grid (photo, name, title).',
      options: {
        list: [
          {
            title: 'Featured doctor (large profile + credential images)',
            value: 'featured',
          },
          {title: 'Profile (image beside full bio)', value: 'profile'},
          {title: 'Team card (Our Team grid)', value: 'grid'},
        ],
        layout: 'radio',
      },
      initialValue: 'grid',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first within the same layout group.',
      initialValue: 0,
    }),
    defineField({
      name: 'role',
      title: 'Job title / role',
      type: 'string',
      description: 'e.g. “Founder of The Urology Place”, “Medical Assistant”. Shown under the name.',
    }),
    defineField({
      name: 'shortSummary',
      title: 'Short summary',
      type: 'text',
      rows: 3,
      description:
        'Optional. Extra line for team cards or short blurbs; not required for featured/profile if you use Bio instead.',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
      description:
        'Full biography for Featured and Profile layouts. Not shown on Team card layout (use Short summary for cards if needed).',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description: 'Describe the photo for accessibility.',
        }),
      ],
    }),
    defineField({
      name: 'credentialImages',
      title: 'Credential / award images',
      type: 'array',
      description:
        'Optional. Shown in a row below the profile image on the Featured doctor layout only.',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
              description: 'Describe the badge or award for screen readers.',
            }),
          ],
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'sortOrderAsc',
      by: [{field: 'sortOrder', direction: 'asc'}],
    },
    {
      title: 'Name',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'layoutVariant',
      media: 'profileImage',
    },
    prepare({title, subtitle, media}) {
      const layoutLabel =
        subtitle === 'featured'
          ? 'Featured'
          : subtitle === 'profile'
            ? 'Profile'
            : 'Team card'
      return {
        title: title ?? 'Untitled',
        subtitle: layoutLabel,
        media,
      }
    },
  },
})
