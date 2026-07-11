// Shared display formatters — plain functions, usable from server or client
// components (no 'server-only'). Money is integer cents everywhere (CONTRACT).

const eurFmt = new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR' });
const eurFmtWhole = new Intl.NumberFormat('en-IE', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});
const compactFmt = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 });

/** Format integer cents as EUR: eur(86410_00) → "€86,410.00", eur(599) → "€5.99". */
export function eur(cents: number): string {
  return eurFmt.format(cents / 100);
}

/** Like eur() but without decimals — for big KPI numbers: eurWhole(8641000) → "€86,410". */
export function eurWhole(cents: number): string {
  return eurFmtWhole.format(cents / 100);
}

/** Compact number: compact(48200) → "48.2K", compact(1_200_000) → "1.2M". */
export function compact(n: number): string {
  return compactFmt.format(n);
}

/**
 * Relative time: "just now", "2 min ago", "3 h ago", "yesterday", "5 d ago",
 * older dates fall back to "12 Jun". Future dates render as "in N min" etc.
 */
export function relTime(d: Date): string {
  const diffMs = Date.now() - d.getTime();
  const future = diffMs < 0;
  const s = Math.abs(diffMs) / 1000;
  const wrap = (txt: string) => (future ? `in ${txt}` : `${txt} ago`);
  if (s < 45) return future ? 'soon' : 'just now';
  if (s < 60 * 60) return wrap(`${Math.round(s / 60)} min`);
  if (s < 24 * 60 * 60) return wrap(`${Math.round(s / 3600)} h`);
  const days = Math.round(s / 86400);
  if (days === 1) return future ? 'tomorrow' : 'yesterday';
  if (days < 30) return wrap(`${days} d`);
  return d.toLocaleDateString('en-IE', { day: 'numeric', month: 'short' });
}

/**
 * Percentage from a RATIO (0–1): pct(0.41) → "41%", pct(0.023, 1) → "2.3%".
 * Trailing zeros are trimmed ("41.0" → "41"). Pass digits for fixed precision.
 */
export function pct(n: number, digits = 1): string {
  const v = (n * 100).toFixed(digits);
  const trimmed = v.includes('.') ? v.replace(/\.?0+$/, '') : v;
  return `${trimmed}%`;
}
