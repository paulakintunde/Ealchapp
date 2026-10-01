/// <reference types="jest" />
import { AccessibilityInfo } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { act, fireEvent, screen } from '@testing-library/react-native';
import Paywall from '../app/paywall';
import { TrailGateRow } from '@/components/TrailGateRow';
import { useFocusReturn, clearFocusReturn, peekFocusReturn } from '@/a11y/focusReturn';
import { useStore } from '@/store/useStore';
import { T } from '@/i18n/strings';
import { renderInLocale } from './helpers/renderInLocale';

// 08.1 D-03 (device finding, Pixel 9 preview build): focus sent from onLayout
// during a route transition is overridden by TalkBack's own move to the
// Back/Close button, and nothing returned focus to the opener on Back. These
// tests pin the contract: focus is sent AFTER the navigator's transitionEnd,
// never on layout alone, never on a closing transition, and a control that
// opened the paywall gets focus back when its route regains focus.

// @types/node is not installed for the component suite; jest provides these.
declare const require: (id: string) => { readFileSync: (p: string, enc: string) => string; join: (...a: string[]) => string };
declare const __dirname: string;
const { readFileSync } = require('fs');
const { join } = require('path');

type Handler = (e: { data?: { closing?: boolean } }) => void;
const mockListeners: Record<string, Handler[]> = {};
const mockNav = {
  addListener: (type: string, cb: Handler) => {
    (mockListeners[type] ||= []).push(cb);
    return () => {
      mockListeners[type] = (mockListeners[type] || []).filter((x) => x !== cb);
    };
  },
  isFocused: () => true,
};
const mockPush = jest.fn();
jest.mock('expo-router', () => ({
  ...jest.requireActual('expo-router'),
  useRouter: () => ({ back: jest.fn(), push: mockPush, replace: jest.fn(), canGoBack: () => true }),
  useLocalSearchParams: () => ({ from: 'gate:levels' }),
  useNavigation: () => mockNav,
  useRoute: () => ({ key: 'den-1' }),
}));
jest.mock('@/services/purchases', () => ({
  purchasesStatus: () => 'no-key',
  getLiveOffers: () => new Promise(() => {}),
  purchasePremiere: jest.fn(),
  restorePurchases: jest.fn(),
}));

const emit = async (type: string, data?: { closing: boolean }) => {
  await act(async () => {
    (mockListeners[type] || []).forEach((cb) => cb({ data }));
  });
};

const metrics = {
  frame: { x: 0, y: 0, width: 390, height: 844 },
  insets: { top: 47, left: 0, right: 0, bottom: 34 },
};
const layout = { nativeEvent: { layout: { x: 0, y: 0, width: 200, height: 40 } } };

let send: jest.SpyInstance;
beforeEach(() => {
  for (const k of Object.keys(mockListeners)) delete mockListeners[k];
  mockPush.mockClear();
  clearFocusReturn('den-1');
  useStore.setState({ lang: 'en', planPick: 'yr', mode: 'dark' });
  send = jest.spyOn(AccessibilityInfo, 'sendAccessibilityEvent').mockImplementation(() => {});
});
afterEach(() => send.mockRestore());

const L = T.en;

// The ref'd node is a mocked host View instance (not the RNTL element), so the
// right node is identified by its own accessibility props. A wrong target (the
// Close button, a sibling row) carries a different label. A boolean compare:
// toHaveBeenCalledWith(node) would pretty-print a circular fiber on failure
// and hang the run.
function expectFocusOn(label: string, role?: string) {
  expect(send.mock.calls).toHaveLength(1);
  const [arg, kind] = send.mock.calls[0] as [{ props: { accessibilityLabel?: string; accessibilityRole?: string } }, string];
  expect(kind).toBe('focus');
  expect(arg.props.accessibilityLabel).toBe(label);
  if (role) expect(arg.props.accessibilityRole).toBe(role);
}

describe('paywall entry focus (D-03)', () => {
  test('layout alone sends no focus; transitionEnd focuses the title node exactly once', async () => {
    await renderInLocale(<SafeAreaProvider initialMetrics={metrics}><Paywall /></SafeAreaProvider>, 'en');
    const title = screen.getByRole('header', { name: L.pwTitleLevels });
    await fireEvent(title, 'layout', layout);
    expect(send).not.toHaveBeenCalled();
    await emit('transitionEnd', { closing: false });
    expect(send).toHaveBeenCalledTimes(1);
    expectFocusOn(L.pwTitleLevels, 'header');
    // A second transitionEnd (the screen re-appearing) must not re-send.
    await emit('transitionEnd', { closing: false });
    expect(send).toHaveBeenCalledTimes(1);
  });

  test('a closing transition never focuses', async () => {
    await renderInLocale(<SafeAreaProvider initialMetrics={metrics}><Paywall /></SafeAreaProvider>, 'en');
    await emit('transitionEnd', { closing: true });
    expect(send).not.toHaveBeenCalled();
  });
});

describe('focus return to the opener (D-03)', () => {
  function DenLike() {
    useFocusReturn();
    return <TrailGateRow variant="gate" />;
  }

  test('pressing a locked gate row registers it; the route regaining focus sends focus to that row', async () => {
    await renderInLocale(<DenLike />, 'en');
    const row = screen.getByRole('button', { name: new RegExp(L.trailGateLead) });
    expect(peekFocusReturn('den-1')).toBeUndefined();
    await fireEvent.press(row);
    expect(mockPush).toHaveBeenCalledWith({ pathname: '/paywall', params: { from: 'gate:levels' } });
    expect(peekFocusReturn('den-1')?.current).toBeTruthy();
    expect(send).not.toHaveBeenCalled();
    // The den regains focus after the paywall pops.
    await emit('focus');
    await emit('transitionEnd', { closing: false });
    expect(send).toHaveBeenCalledTimes(1);
    expectFocusOn(row.props.accessibilityLabel);
  });

  test('a route that never opened anything sends no focus on regaining focus', async () => {
    await renderInLocale(<DenLike />, 'en');
    await emit('focus');
    await emit('transitionEnd', { closing: false });
    expect(send).not.toHaveBeenCalled();
  });

  test('the screens that host locked openers actually call useFocusReturn', () => {
    // "Authored but unrendered": a hook proven in a harness can be imported by nothing.
    for (const f of ['app/den.tsx', 'app/home.tsx', 'app/settings.tsx']) {
      expect(readFileSync(join(__dirname, '..', f), 'utf8')).toMatch(/useFocusReturn\(\)/);
    }
    for (const f of ['app/paywall.tsx', 'app/levels.tsx', 'app/fiche.tsx', 'app/preroll.tsx', 'app/den.tsx']) {
      expect(readFileSync(join(__dirname, '..', f), 'utf8')).toMatch(/useEntryFocus\(titleRef\)/);
    }
  });
});
