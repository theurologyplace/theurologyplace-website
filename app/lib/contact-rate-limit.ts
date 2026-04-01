/**
 * Lightweight in-memory rate limit for POST /api/contact (v1).
 * Resets per deployment instance; for multi-region scale consider Redis/edge limits.
 */

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 10;

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

function pruneIfNeeded(now: number) {
  if (buckets.size <= 2000) return;
  for (const [ip, b] of buckets) {
    if (now > b.resetAt) buckets.delete(ip);
  }
}

/**
 * Returns whether the request is allowed. Uses the first IP from X-Forwarded-For when present.
 */
export function checkContactRateLimit(clientIp: string): boolean {
  const now = Date.now();
  pruneIfNeeded(now);
  const key = clientIp || "unknown";
  const b = buckets.get(key);
  if (!b || now > b.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (b.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }
  b.count += 1;
  return true;
}

export function getClientIp(request: Request): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first;
  }
  const real = request.headers.get("x-real-ip");
  if (real?.trim()) return real.trim();
  return "unknown";
}
