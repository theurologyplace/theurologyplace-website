import {DocumentsIcon} from '@sanity/icons'
import type {StructureResolver} from 'sanity/structure'

import PagesPane from '../components/pagesPane'

/**
 * Studio content structure.
 *
 * Phase 1 of the page migration adds a top-level, read-only "Pages" inventory
 * (a custom component pane) above the existing content types. It does not create
 * any documents or change how public pages fetch content.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .id('pages-inventory')
        .icon(DocumentsIcon)
        .child(S.component(PagesPane).title('Pages').id('pages-inventory-pane')),

      S.divider(),

      S.listItem()
        .title("What's New (Home)")
        .id('homeAnnouncement')
        .child(S.documentTypeList('homeAnnouncement').title("What's New (Home)")),

      ...S.documentTypeListItems().filter((item) => item.getId() !== 'homeAnnouncement'),
    ])
