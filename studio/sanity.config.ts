import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'urology-place-web',

  basePath: '/studio',

  projectId: '5zd6me01',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title("What's New (Home)")
              .id('homeAnnouncement')
              .child(
                S.documentTypeList('homeAnnouncement').title(
                  "What's New (Home)",
                ),
              ),
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== 'homeAnnouncement',
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
