/**
 * Shared hero system — typography and window sizing for full-bleed image heroes.
 * Canonical reference: Home (`app/page.tsx`). See PROJECT_RULES.md § Standardized hero system.
 *
 * Do not use these tokens for non-hero sections. Do not change overlay/gradient classes here;
 * only typography and the section “window” dimensions (min-height, padding).
 */

// --- Typography (dark image hero — white/cream text) ---

/** Shared title scale (matches Home h1). Pair with `text-white` or another color. */
export const HERO_TITLE_SIZE =
  "text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl";

/** Main title on photo + dark overlay (matches Home h1). */
export const HERO_TITLE_ON_IMAGE = `${HERO_TITLE_SIZE} text-white`;

/** BPH clinical trials hero — same scale, `text-sky-100` for contrast on this art. */
export const HERO_TITLE_BPH_TRIALS = `${HERO_TITLE_SIZE} text-sky-100`;

/** Supporting line under the title. */
export const HERO_SUBTITLE_ON_IMAGE =
  "text-lg text-white/95 md:text-xl";

/** Optional kicker above the title. */
export const HERO_EYEBROW_ON_IMAGE =
  "text-xs font-medium uppercase tracking-[0.35em] text-white/70";

// --- Typography (light background — slate text, no image hero) ---

export const HERO_TITLE_ON_LIGHT = `${HERO_TITLE_SIZE} text-slate-900`;

export const HERO_SUBTITLE_ON_LIGHT =
  "text-lg text-slate-600 md:text-xl";

/** Contact form embedded heading (h2 in form sections). */
export const HERO_FORM_SECTION_HEADING =
  "text-3xl font-bold tracking-tight text-slate-900 md:text-4xl";

/** UroLift first content band — same title scale; keep uppercase in markup. */
export const HERO_TITLE_UROLIFT_BAND = `${HERO_TITLE_SIZE} uppercase text-slate-900`;

// --- Window: first full-bleed image hero `<section>` (matches Home) ---

const HERO_WINDOW_BASE =
  "relative min-h-[48vh] flex flex-col items-center justify-center px-6 py-14";

/**
 * Fixed-position layer for `backgroundImage` + `backgroundAttachment: fixed` below the sticky
 * header (does not paint over the navbar). Use `top-16` to match header row + `py-3` (~64px).
 */
export const HERO_FIXED_BACKDROP =
  "pointer-events-none fixed inset-x-0 bottom-0 top-16 z-0";

/**
 * First content section after a full-bleed image hero: flat top (no `rounded-t-*`, no upward
 * shadow). Append background classes (e.g. `bg-white`, `bg-[#e8edf5]`). Matches Home
 * (`app/page.tsx`).
 */
export const HERO_AFTER_SLIDE_BASE = "relative border-t border-slate-200/80";

/** Default: centered hero block (most pages). */
export const HERO_IMAGE_SECTION = `${HERO_WINDOW_BASE} text-center`;

/** Same window height; no `text-center` when inner layout is not globally centered. */
export const HERO_IMAGE_SECTION_NEUTRAL = HERO_WINDOW_BASE;

/**
 * Same vertical window as other image heroes; `justify-center` only (no `items-center`)
 * so inner wrappers can align content (e.g. right-aligned title on iTind).
 */
export const HERO_IMAGE_SECTION_ALIGN_CONTENT =
  "relative min-h-[48vh] flex flex-col justify-center px-6 py-14";

/** Empty spacer over fixed background (e.g. UroLift) — only enforces window height. */
export const HERO_IMAGE_SPACER = "relative min-h-[48vh]";
