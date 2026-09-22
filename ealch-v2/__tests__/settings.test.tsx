/// <reference types="jest" />
// First screen-level component test in this repo (Jest + React Native Testing
// Library, run with `npm run test:component`; `npm test` remains the separate
// node --test suite). Scope is deliberately smoke + one interaction: it proves
// the screen renders, that key controls are reachable by accessibility role,
// and that a real tap flows through the real zustand store. It does NOT cover
// the paywall, restore, language, avatar, alarm-wheel or legal sections.
//
// The reference line above is required: see jest.setup.ts for why (TS 6.0.3
// in this project does not auto-include @types/jest's ambient globals). Every
// future *.test.tsx file needs the same line.
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { render, screen, fireEvent } from '@testing-library/react-native';
import Settings from '../app/settings';
import { useStore } from '@/store/useStore';

// initialWindowMetrics is null outside a real app launch (the native module
// populates it), so the provider is fed explicit metrics instead.
const metrics = {
  frame: { x: 0, y: 0, width: 390, height: 844 },
  insets: { top: 47, left: 0, right: 0, bottom: 34 },
};

function renderSettings() {
  return render(
    <SafeAreaProvider initialMetrics={metrics}>
      <Settings />
    </SafeAreaProvider>,
  );
}

beforeEach(() => {
  // The real store runs, not a mock (D-05). Pin the two fields this file
  // asserts on so the test cannot inherit the device locale or a previous
  // test's flipped toggle.
  useStore.setState({ lang: 'en', sound: true });
});

describe('Settings screen', () => {
  test('renders its key controls with accessible roles', async () => {
    await renderSettings();

    expect(screen.getByRole('button', { name: 'Close' })).toBeTruthy();
    expect(screen.getByRole('switch', { name: 'Sound effects' })).toBeTruthy();
    expect(screen.getByRole('switch', { name: 'Boost brightness while reading' })).toBeTruthy();
    // Several switches share this screen, which is exactly why each one needs a
    // name: an unnamed getByRole('switch') would be ambiguous here.
    expect(screen.getAllByRole('switch').length).toBeGreaterThan(1);
  });

  test('tapping the sound toggle flips the real store value and the rendered state', async () => {
    await renderSettings();

    const toggle = screen.getByRole('switch', { name: 'Sound effects' });
    expect(toggle.props.accessibilityState?.checked).toBe(true);
    expect(useStore.getState().sound).toBe(true);

    await fireEvent.press(toggle);

    expect(useStore.getState().sound).toBe(false);
    expect(
      screen.getByRole('switch', { name: 'Sound effects' }).props.accessibilityState?.checked,
    ).toBe(false);
  });
});
