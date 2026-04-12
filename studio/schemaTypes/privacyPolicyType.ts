import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'privacyPolicy',
  title: 'Privacy Policy (HIPAA page)',
  type: 'document',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal title',
      type: 'string',
      description: 'Label in the desk only (e.g. “Main privacy policy”).',
      initialValue: 'Privacy Policy page',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'leadImage',
      title: 'Lead image',
      type: 'image',
      description:
        'Large image below the page titles (e.g. HIPAA consent / communication screenshot).',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description: 'Describe the image for accessibility.',
        }),
      ],
    }),
    defineField({
      name: 'effectiveDate',
      title: 'Effective date section',
      type: 'array',
      description:
        'Intro text for the Effective Date block. Use bold for “Effective Date:” if you want it to stand out.',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'body',
      title: 'Policy sections',
      type: 'array',
      description:
        'Headings, paragraphs, bullet lists, and inline images for the rest of the policy.',
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
  ],
  preview: {
    select: {
      title: 'internalTitle',
      media: 'leadImage',
    },
  },
})
