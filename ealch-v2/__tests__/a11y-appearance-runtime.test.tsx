/// <reference types="jest" />
// 08.1 stage 2, E1 / D-21. Drives the REAL root layout and the REAL useTheme
// against a fake of Android's AppearanceModule that keeps the two behaviours the
// audit blamed: setColorScheme is applied later on the UI thread (so the JS
// read that follows it is stale), and the change event is de-duplicated against
// the last emitted value. The assertion is on every render, not only the
// settled one: Automatic must never resolve Dark while the OS is Light.
import { act, render } from '@testing-library/react-native';
import { View } from 'react-native';
import { useStore } from '@/store/useStore';
import { useTheme } from '@/theme/useTheme';
import { buildTheme } from '@/theme/palette';

type Scheme = 'light' | 'dark';
type Override = Scheme | null;

const fake: {
  os: Scheme;
  override: Override;
  pending: Override[];
  lastEmitted: Scheme;
  calls: string[];
} = { os: 'dark', override: null, pending: [], lastEmitted: 'dark', calls: [] };

const effective = (): Scheme => fake.override ?? fake.os;

function emitIfChanged() {
  const now = effective();
  if (now === fake.lastEmitted) return;
  fake.lastEmitted = now;
  const { default: emitter } = require('react-native/Libraries/EventEmitter/RCTDeviceEventEmitter');
  emitter.emit('appearanceChanged', { colorScheme: now });
}

jest.mock('react-native/Libraries/Utilities/NativeAppearance', () => ({
  __esModule: true,
  default: {
    getColorScheme: () => effective(),
    // Kotlin: UiThreadUtil.runOnUiThread { AppCompatDelegate.setDefaultNightMode(..) }
    setColorScheme: (style: string) => {
      fake.calls.push(style);
      fake.pending.push(style === 'dark' ? 'dark' : style === 'light' ? 'light' : null);
    },
    addListener: () => {},
    removeListeners: () => {},
  },
}));

// The RN jest preset replaces useColorScheme with a constant 'light'; the real
// hook (useSyncExternalStore over Appearance) is the thing under test.
jest.mock('react-native/Libraries/Utilities/useColorScheme', () =>
  jest.requireActual('react-native/Libraries/Utilities/useColorScheme'),
);
jest.mock('../global.css', () => ({}), { virtual: true });
jest.mock('@/theme/fonts', () => ({ ...jest.requireActual('@/theme/fonts'), useAppFonts: () => false }));
jest.mock('@/hooks/useAlarmWatcher', () => ({ useAlarmWatcher: () => {} }));
jest.mock('@/services/session', () => ({ useAuthSession: () => {} }));
jest.mock('@/services/sync', () => ({ useForegroundSync: () => {} }));
jest.mock('@/services/purchases', () => ({ useEntitlementSync: () => {} }));
jest.mock('@/services/acquisition', () => ({
  recordAppForeground: jest.fn(() => Promise.resolve()),
  recordAppLaunch: jest.fn(() => Promise.resolve()),
  recordInstallAttribution: jest.fn(() => Promise.resolve()),
}));
jest.mock('@/services/analytics', () => ({ flushAnalyticsOutbox: jest.fn(() => Promise.resolve()) }));
jest.mock('@/services/errors', () => ({ installErrorHandlers: () => {}, logError: () => {} }));
jest.mock('@/services/serverClock', () => ({ loadTimeFloor: jest.fn(() => Promise.resolve()) }));
jest.mock('@/services', () => ({ refreshConfig: jest.fn(), tts: { prime: jest.fn(() => Promise.resolve()) } }));
jest.mock('@/services/content', () => {
  const actual = jest.requireActual('@/services/content');
  return { ...actual, initContent: jest.fn(() => Promise.resolve()) };
});
jest.mock('expo-router', () => ({
  Stack: Object.assign(() => null, { Screen: () => null }),
}));
jest.mock('expo-navigation-bar', () => ({ NavigationBar: () => null }));
jest.mock('expo-system-ui', () => ({ setBackgroundColorAsync: jest.fn(() => Promise.resolve()) }));

import RootLayout from '../app/_layout';

const seen: { os: Scheme; dark: boolean }[] = [];
function Probe() {
  const t = useTheme();
  seen.push({ os: fake.os, dark: t.isDark });
  return <View />;
}

/** Apply whatever the UI thread has queued, then run onConfigurationChanged. */
async function flushUiThread() {
  await act(async () => {
    while (fake.pending.length) fake.override = fake.pending.shift() as Override;
    emitIfChanged();
  });
}

async function setOs(os: Scheme) {
  await act(async () => {
    fake.os = os;
    emitIfChanged();
  });
}

async function tap(mode: 'automatic' | 'dark' | 'light', flush: boolean) {
  await act(async () => {
    useStore.getState().setMode(mode);
  });
  if (flush) await flushUiThread();
}

function rootBg(view: { toJSON: () => unknown }) {
  const root = view.toJSON() as { props: { style: { backgroundColor?: string } } };
  return root.props.style.backgroundColor;
}

/**
 * Fresh device state with the given OS scheme. RN's Appearance.js caches the
 * scheme at module level, so resync it, or one test's last value leaks into the next.
 */
function resetOs(os: Scheme) {
  fake.os = os;
  fake.override = null;
  fake.pending = [];
  fake.lastEmitted = os;
  fake.calls = [];
  const { default: emitter } = require('react-native/Libraries/EventEmitter/RCTDeviceEventEmitter');
  emitter.emit('appearanceChanged', { colorScheme: os });
}

beforeEach(() => {
  seen.length = 0;
  useStore.setState({ mode: 'automatic', hydrated: true });
  resetOs('dark');
});

const darkBg = buildTheme(useStore.getState().accent, 'dark').bg;
const lightBg = buildTheme(useStore.getState().accent, 'light').bg;

describe('Automatic resolves from the OS, never from a stale app override', () => {
  test.each([true, false])('explicit Dark, then Automatic under OS Light (flush=%s)', async (flush) => {
    await render(
      <>
        <RootLayout />
        <Probe />
      </>,
    );
    await tap('dark', flush);
    await setOs('light');
    const before = seen.length;
    await tap('automatic', flush);
    const during = seen.slice(before);
    await flushUiThread();
    // Every render caused by choosing Automatic under OS Light is Light.
    expect(during.filter((s) => s.dark)).toEqual([]);
    expect(seen[seen.length - 1].dark).toBe(false);
  });
});

describe('rapid preference sequence', () => {
  test.each([
    ['dark', 'light'],
    ['light', 'dark'],
  ] as const)('OS %s then %s, 8 transitions, Automatic always matches the OS', async (first, second) => {
    resetOs(first);
    const view = await render(<RootLayout />);
    const probe = await render(<Probe />);
    expect(probe).toBeTruthy();
    const steps: ('dark' | 'automatic' | 'light')[] = [
      'dark', 'automatic', 'light', 'automatic', 'dark', 'automatic', 'light', 'automatic',
    ];
    for (let i = 0; i < steps.length; i++) {
      if (i === 3) await setOs(second);
      const before = seen.length;
      await tap(steps[i], i % 2 === 0);
      if (steps[i] === 'automatic') {
        const os = fake.os;
        const renders = seen.slice(before);
        // Every render caused by choosing Automatic, flushed or not.
        for (const r of renders) expect({ step: i, os, dark: r.dark }).toEqual({ step: i, os, dark: os === 'dark' });
        await flushUiThread();
        expect(rootBg(view)).toBe(os === 'dark' ? darkBg : lightBg);
        expect(seen[seen.length - 1].dark).toBe(os === 'dark');
      }
    }
  });
});

describe('explicit choices still win', () => {
  test('Dark under OS Light and Light under OS Dark', async () => {
    resetOs('light');
    const view = await render(<RootLayout />);
    await tap('dark', true);
    expect(rootBg(view)).toBe(darkBg);
    await setOs('dark');
    await tap('light', true);
    expect(rootBg(view)).toBe(lightBg);
  });
});

describe('D-21 branch', () => {
  test('the app no longer writes a native color-scheme override', async () => {
    await render(<RootLayout />);
    await tap('dark', true);
    await tap('automatic', true);
    expect(fake.calls).toEqual([]);
  });
});
