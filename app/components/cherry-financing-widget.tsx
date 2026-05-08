"use client";

/**
 * Cherry registers a singleton `window._hw` in the host page. Loading their script again on each
 * Next.js client navigation causes "Widget with name [_hw] was already loaded" errors.
 *
 * The embed runs inside a same-origin iframe (`/cherry-financing-embed.html`) so each visit gets a
 * fresh document and a clean Cherry bootstrap, without touching the app shell's globals.
 */
export function CherryFinancingWidget() {
  return (
    <iframe
      title="Cherry patient financing — payment options and calculator"
      src="/cherry-financing-embed.html"
      className="block w-full min-h-[1400px] rounded-xl border border-slate-200 bg-white shadow-sm"
      loading="lazy"
    />
  );
}
