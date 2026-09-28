import { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { useStore } from '@/store/useStore';
import { buildTheme, type Theme } from './palette';
import { resolveAppearance } from './appearance.logic';

/** Live theme derived from the store's accent + mode. Recomputes on change. */
export function useTheme(): Theme {
  const accent = useStore((s) => s.accent);
  const mode = useStore((s) => s.mode);
  const systemScheme = useColorScheme();
  return useMemo(() => buildTheme(accent, resolveAppearance(mode, systemScheme)), [accent, mode, systemScheme]);
}
