import { useMemo } from 'react';
import { useStore } from '@/store/useStore';
import { buildTheme, type Theme } from './palette';

/** Live theme derived from the store's accent + mode. Recomputes on change. */
export function useTheme(): Theme {
  const accent = useStore((s) => s.accent);
  const mode = useStore((s) => s.mode);
  return useMemo(() => buildTheme(accent, mode), [accent, mode]);
}
