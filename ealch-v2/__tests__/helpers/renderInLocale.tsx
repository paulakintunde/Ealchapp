import type { ReactElement } from 'react';
import { render } from '@testing-library/react-native';
import { useStore } from '@/store/useStore';

export type Locale = 'fr' | 'en';

/** Sets the interface language in the store, then renders. Use with describe.each(['fr','en']). */
export async function renderInLocale(ui: ReactElement, lang: Locale) {
  useStore.setState({ lang });
  return render(ui);
}
