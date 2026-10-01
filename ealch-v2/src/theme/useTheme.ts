import { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { useStore } from '@/store/useStore';
import { buildTheme, type Theme } from './palette';
import { resolveAppearance } from './appearance.logic';

/** Live theme derived from the store's accent + mode. Recomputes on change. */
export function useTheme(): Theme {
  const accent = useStore((s) => s.accent);
  const mode = useStore((s) => s.mode);
  // Always the OS value: the app never writes a native color-scheme override
  // (08.1-02, D-21), so this cannot echo the app's own previous choice.
  const systemScheme = useColorScheme();
  return useMemo(() => buildTheme(accent, resolveAppearance(mode, systemScheme)), [accent, mode, systemScheme]);
}
