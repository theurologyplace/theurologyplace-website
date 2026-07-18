/**
 * Read-only "Pages" inventory pane for Sanity Studio.
 *
 * Phase 1 of the page migration: this lists every public route (and the
 * redirects) so editors can see the full site map inside Studio. It is
 * intentionally NON-EDITABLE — there is no document form and no Sanity writes.
 * It also adds no Sanity fetches to public pages; the data comes from a
 * build-time generated manifest.
 *
 * Built with plain React + inline styles (using Sanity's theme CSS variables)
 * so it resolves cleanly in both the embedded Next.js Studio and a standalone
 * Studio build without depending on @sanity/ui module hoisting.
 */
'use client'

import {useMemo, useState, type CSSProperties} from 'react'

import {
  redirects,
  routeGroups,
  routeInventory,
  type RouteInventoryEntry,
  type SanityStatus,
} from '../routeInventory.generated'

const STATUS_META: Record<SanityStatus, {label: string; color: string; description: string}> = {
  hardcoded: {
    label: 'Hardcoded',
    color: '#8a8f99',
    description: 'Content lives in the codebase. Not yet editable in Sanity.',
  },
  partial: {
    label: 'Partially in Sanity',
    color: '#2276fc',
    description: 'Some sections are Sanity-driven; the rest is hardcoded.',
  },
  managed: {
    label: 'Sanity managed',
    color: '#3ab667',
    description: 'This route is driven by Sanity content.',
  },
}

const styles = {
  root: {
    padding: '20px 24px 48px',
    height: '100%',
    overflowY: 'auto',
    background: 'var(--card-bg-color, #fff)',
    color: 'var(--card-fg-color, #101112)',
    fontFamily:
      'var(--card-font-family, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif)',
    boxSizing: 'border-box',
  },
  intro: {
    fontSize: 13,
    lineHeight: 1.5,
    color: 'var(--card-muted-fg-color, #6b7079)',
    margin: '0 0 16px',
    maxWidth: 720,
  },
  search: {
    width: '100%',
    maxWidth: 420,
    padding: '8px 12px',
    fontSize: 14,
    borderRadius: 6,
    border: '1px solid var(--card-border-color, #e1e3e7)',
    background: 'var(--card-bg-color, #fff)',
    color: 'var(--card-fg-color, #101112)',
    boxSizing: 'border-box',
    marginBottom: 12,
  },
  legend: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    margin: '0 0 20px',
    fontSize: 12,
    color: 'var(--card-muted-fg-color, #6b7079)',
  },
  legendItem: {display: 'flex', alignItems: 'center', gap: 6},
  groupTitle: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 8,
    fontSize: 15,
    fontWeight: 600,
    margin: '24px 0 10px',
  },
  groupCount: {fontSize: 12, fontWeight: 400, color: 'var(--card-muted-fg-color, #6b7079)'},
  row: {
    border: '1px solid var(--card-border-color, #e1e3e7)',
    borderRadius: 8,
    padding: '12px 14px',
    marginBottom: 8,
    background: 'var(--card-bg-color, #fff)',
  },
  rowHead: {display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'},
  title: {fontSize: 14, fontWeight: 600},
  path: {
    fontSize: 12.5,
    fontFamily: 'var(--card-code-font-family, ui-monospace, SFMono-Regular, Menlo, monospace)',
    color: 'var(--card-muted-fg-color, #6b7079)',
  },
  badge: {
    fontSize: 11,
    fontWeight: 600,
    padding: '2px 8px',
    borderRadius: 999,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5,
    whiteSpace: 'nowrap',
  },
  kindBadge: {
    fontSize: 11,
    fontWeight: 500,
    padding: '2px 8px',
    borderRadius: 999,
    border: '1px solid var(--card-border-color, #e1e3e7)',
    color: 'var(--card-muted-fg-color, #6b7079)',
    whiteSpace: 'nowrap',
  },
  meta: {
    marginTop: 8,
    fontSize: 12,
    lineHeight: 1.5,
    color: 'var(--card-muted-fg-color, #6b7079)',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  code: {
    fontFamily: 'var(--card-code-font-family, ui-monospace, SFMono-Regular, Menlo, monospace)',
  },
  link: {
    color: 'var(--card-link-color, #2276fc)',
    textDecoration: 'none',
    fontWeight: 500,
  },
  redirectRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
    padding: '8px 0',
    borderBottom: '1px solid var(--card-border-color, #eceef1)',
    fontSize: 12.5,
  },
  empty: {
    fontSize: 13,
    color: 'var(--card-muted-fg-color, #6b7079)',
    padding: '12px 0',
  },
} as const

function Dot({color}: {color: string}) {
  return (
    <span
      aria-hidden
      style={{width: 8, height: 8, borderRadius: 999, background: color, display: 'inline-block'}}
    />
  )
}

function StatusBadge({status}: {status: SanityStatus}) {
  const meta = STATUS_META[status]
  return (
    <span style={{...styles.badge, background: `${meta.color}1f`, color: meta.color}}>
      <Dot color={meta.color} />
      {meta.label}
    </span>
  )
}

function RouteRow({entry}: {entry: RouteInventoryEntry}) {
  const isDynamic = entry.kind === 'dynamic'
  return (
    <div style={styles.row}>
      <div style={styles.rowHead}>
        <span style={styles.title}>{entry.title}</span>
        <span style={styles.path}>{entry.path}</span>
        <span style={{flex: 1}} />
        <StatusBadge status={entry.sanityStatus} />
        {isDynamic ? <span style={styles.kindBadge}>dynamic</span> : null}
      </div>
      <div style={styles.meta}>
        {entry.sanityNote ? <span>{entry.sanityNote}</span> : null}
        <span>
          Source: <span style={styles.code}>{entry.sourceFile}</span>
        </span>
        {isDynamic ? (
          <span>Dynamic route — open a specific item from its listing page.</span>
        ) : (
          <a
            style={styles.link}
            href={entry.path}
            target="_blank"
            rel="noreferrer noopener"
          >
            Open page ↗
          </a>
        )}
      </div>
    </div>
  )
}

export default function PagesPane() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return routeInventory
    return routeInventory.filter(
      (entry) =>
        entry.title.toLowerCase().includes(q) ||
        entry.path.toLowerCase().includes(q) ||
        entry.sourceFile.toLowerCase().includes(q),
    )
  }, [query])

  const grouped = useMemo(() => {
    const map = new Map<string, RouteInventoryEntry[]>()
    for (const group of routeGroups) map.set(group, [])
    for (const entry of filtered) {
      const bucket = map.get(entry.group) ?? map.get('Other')!
      bucket.push(entry)
    }
    return map
  }, [filtered])

  return (
    <div style={styles.root as CSSProperties}>
      <p style={styles.intro}>
        Every public page on the website, generated automatically from the codebase. This is a
        read-only site map for reference — pages are not editable here yet. As routes are migrated
        to Sanity, their status below will change from “Hardcoded” to “Partially in Sanity” or
        “Sanity managed”.
      </p>

      <input
        style={styles.search as CSSProperties}
        type="search"
        placeholder="Filter by title, path, or file…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div style={styles.legend as CSSProperties}>
        {(Object.keys(STATUS_META) as SanityStatus[]).map((status) => (
          <span key={status} style={styles.legendItem}>
            <Dot color={STATUS_META[status].color} />
            {STATUS_META[status].label} — {STATUS_META[status].description}
          </span>
        ))}
      </div>

      {routeGroups.map((group) => {
        const entries = grouped.get(group) ?? []
        if (entries.length === 0) return null
        return (
          <div key={group}>
            <div style={styles.groupTitle as React.CSSProperties}>
              {group}
              <span style={styles.groupCount}>
                {entries.length} {entries.length === 1 ? 'page' : 'pages'}
              </span>
            </div>
            {entries.map((entry) => (
              <RouteRow key={entry.path} entry={entry} />
            ))}
          </div>
        )
      })}

      {filtered.length === 0 ? (
        <div style={styles.empty}>No pages match “{query}”.</div>
      ) : null}

      <div style={styles.groupTitle as React.CSSProperties}>
        Redirects
        <span style={styles.groupCount}>
          {redirects.length} {redirects.length === 1 ? 'rule' : 'rules'}
        </span>
      </div>
      {redirects.length === 0 ? (
        <div style={styles.empty}>No redirects configured.</div>
      ) : (
        redirects.map((redirect) => (
          <div key={redirect.source} style={styles.redirectRow as React.CSSProperties}>
            <span style={styles.code}>{redirect.source}</span>
            <span aria-hidden>→</span>
            <span style={styles.code}>{redirect.destination}</span>
            <span style={styles.kindBadge}>{redirect.permanent ? '308 permanent' : '307 temporary'}</span>
          </div>
        ))
      )}
    </div>
  )
}
