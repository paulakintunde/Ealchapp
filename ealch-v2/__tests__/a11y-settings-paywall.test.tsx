/// <reference types="jest" />
import { AccessibilityInfo } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { fireEvent, screen } from '@testing-library/react-native';
import Paywall from '../app/paywall';
import { useStore } from '@/store/useStore';
import { T } from '@/i18n/strings';
import { renderInLocale, type Locale } from './helpers/renderInLocale';

jest.mock('expo-router', () => ({
  ...jest.requireActual('expo-router'),
  useRouter: () => ({ back: jest.fn(), push: jest.fn(), replace: jest.fn() }),
  useLocalSearchParams: () => ({ from: 'gate:levels' }),
}));
jest.mock('@/services/purchases', () => ({
  purchasesStatus: () => 'no-key',
  getLiveOffers: () => new Promise(() => {}),
  purchasePremiere: jest.fn(),
  restorePurchases: jest.fn(),
}));

const metrics = {
  frame: { x: 0, y: 0, width: 390, height: 844 },
  insets: { top: 47, left: 0, right: 0, bottom: 34 },
};

describe.each(['fr', 'en'] as Locale[])('paywall a11y (%s)', (lang) => {
  const L = T[lang];
  beforeEach(() => useStore.setState({ planPick: 'yr', mode: 'dark' }));

  test('paywall exposes selected plan, legal links, and free recovery', async () => {
    const focus = jest.spyOn(AccessibilityInfo, 'sendAccessibilityEvent').mockImplementation(() => {});
    await renderInLocale(<SafeAreaProvider initialMetrics={metrics}><Paywall /></SafeAreaProvider>, lang);
    const title = screen.getByRole('header', { name: L.pwTitleLevels });
    await fireEvent(title, 'layout', { nativeEvent: { layout: { x: 0, y: 0, width: 200, height: 40 } } });
    // D-03 (device finding): layout-time focus is overridden by TalkBack's move
    // to the Close button when the slide-up ends, so the title no longer takes
    // focus on layout. The transitionEnd contract is pinned in
    // a11y-entry-focus.test.tsx.
    expect(focus).not.toHaveBeenCalled();
    expect(screen.getByRole('radio', { name: new RegExp(L.annualL) }).props.accessibilityState.selected).toBe(true);
    const monthly = screen.getByRole('radio', { name: new RegExp(L.monthlyL) });
    await fireEvent.press(monthly);
    expect(useStore.getState().planPick).toBe('mo');
    expect(screen.getByRole('radio', { name: new RegExp(L.monthlyL) }).props.accessibilityState.selected).toBe(true);
    expect(screen.getByRole('link', { name: new RegExp(`^${L.legalTerms}$`, 'i') })).toBeTruthy();
    expect(screen.getByRole('link', { name: new RegExp(`^${L.legalPrivacy}$`, 'i') })).toBeTruthy();
    expect(screen.getByRole('button', { name: L.pwReturnFree })).toBeTruthy();
    focus.mockRestore();
  });
});
