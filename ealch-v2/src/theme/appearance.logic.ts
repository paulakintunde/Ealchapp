import type { Mode } from './palette';

/** Saved user choice; the rendered palette always receives a binary Mode. */
export type AppearancePreference = 'automatic' | Mode;
export const DEFAULT_APPEARANCE: AppearancePreference = 'automatic';

export function normalizeAppearancePreference(value: unknown): AppearancePreference {
  return value === 'dark' || value === 'light' || value === 'automatic'
    ? value
    : DEFAULT_APPEARANCE;
}

/** Unknown device schemes use dark until the OS provides a light/dark value. */
export function resolveAppearance(preference: unknown, systemScheme: Mode | 'unspecified' | null | undefined): Mode {
  const saved = normalizeAppearancePreference(preference);
  if (saved !== 'automatic') return saved;
  return systemScheme === 'light' ? 'light' : 'dark';
}
