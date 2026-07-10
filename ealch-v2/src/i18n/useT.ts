import { useStore } from '@/store/useStore';
import { T, type Strings } from './strings';

/** Returns the active interface string table (FR/EN toggle). */
export function useT(): Strings {
  const lang = useStore((s) => s.lang);
  return T[lang];
}
