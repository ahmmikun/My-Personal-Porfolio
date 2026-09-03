// RFC RateLimit and sliding window rate limiter

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const WINDOW_MS = 60 * 1000; // 60 seconds
const MAX_REQUESTS = 60; // 60 requests per minute

// In-memory token bucket / sliding window
const ipCache = new Map<string, RateLimitEntry>();

// Clean up stale entries periodically
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, entry] of ipCache.entries()) {
      if (now > entry.resetTime) {
        ipCache.delete(ip);
      }
    }
  }, 120000);
}

export interface RateLimitResult {
  isLimited: boolean;
  limit: number;
  remaining: number;
  resetSeconds: number;
  headers: Record<string, string>;
}

export function checkRateLimit(identifier: string = "global"): RateLimitResult {
  const now = Date.now();
  let entry = ipCache.get(identifier);

  if (!entry || now > entry.resetTime) {
    entry = {
      count: 1,
      resetTime: now + WINDOW_MS,
    };
    ipCache.set(identifier, entry);
  } else {
    entry.count += 1;
  }

  const remaining = Math.max(0, MAX_REQUESTS - entry.count);
  const resetSeconds = Math.max(1, Math.ceil((entry.resetTime - now) / 1000));
  const isLimited = entry.count > MAX_REQUESTS;

  const headers: Record<string, string> = {
    "RateLimit-Limit": MAX_REQUESTS.toString(),
    "RateLimit-Remaining": remaining.toString(),
    "RateLimit-Reset": resetSeconds.toString(),
    "RateLimit-Policy": `${MAX_REQUESTS};w=60`,
    "X-RateLimit-Limit": MAX_REQUESTS.toString(),
    "X-RateLimit-Remaining": remaining.toString(),
    "X-RateLimit-Reset": Math.ceil(entry.resetTime / 1000).toString(),
  };

  if (isLimited) {
    headers["Retry-After"] = resetSeconds.toString();
  }

  return {
    isLimited,
    limit: MAX_REQUESTS,
    remaining,
    resetSeconds,
    headers,
  };
}
