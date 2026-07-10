// Color helpers — replace the prototype's CSS color-mix() with runtime blends.

export type RGB = { r: number; g: number; b: number };

export function hexToRgb(hex: string): RGB {
  let h = hex.replace('#', '').trim();
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  const n = parseInt(h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

/** color at a given opacity over transparent → rgba(). pct is 0..100. */
export function alpha(hex: string, pct: number): string {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${(pct / 100).toFixed(3)})`;
}

/** blend `pct`% of `top` into `base` (opaque result), mirrors color-mix(in srgb, top pct%, base). */
export function blend(top: string, base: string, pct: number): string {
  const a = hexToRgb(top);
  const b = hexToRgb(base);
  const t = pct / 100;
  const mix = (x: number, y: number) => Math.round(x * t + y * (1 - t));
  return `rgb(${mix(a.r, b.r)}, ${mix(a.g, b.g)}, ${mix(a.b, b.b)})`;
}
