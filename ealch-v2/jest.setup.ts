/// <reference types="jest" />
// Mock boundary for component tests (D-05): native modules and network-touching
// services only. The zustand stores are deliberately NOT mocked - real store
// logic runs so selector/wiring bugs still fail a test.
//
// The explicit reference above is required, not decorative: in this project's
// tsconfig, TypeScript 6.0.3 does not automatically pull in @types/jest's
// ambient globals (describe/test/expect/jest) the way it does for @types/node's
// (e.g. `process`) - without it, `tsc --noEmit` reports "Cannot find name
// 'describe'" and "Cannot use namespace 'jest' as a value" here and in every
// *.test.tsx file. Add the same reference line to any future Jest test file.

// jest-expo's bundled setup auto-mocks nearly every expo-* native module, but
// NOT AsyncStorage. Without this, the persist middleware in useStore hits an
// undefined NativeModules.RNCAsyncStorage and throws.
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

// supabase() is a lazy factory that already returns null when unconfigured.
// The mock takes the app's own offline path rather than inventing behaviour.
jest.mock('@/services/supabase', () => ({
  supabase: () => null,
}));

jest.mock('react-native-adapty', () => ({
  adapty: {
    activate: jest.fn(() => Promise.resolve()),
    isActivated: jest.fn(() => Promise.resolve(false)),
    addEventListener: jest.fn(),
    restorePurchases: jest.fn(() => Promise.resolve({})),
  },
}));

// Press calls sound.unlock() then sound.play(cue) on every press, so both
// methods must exist as jest.fn() or the first interaction test throws.
jest.mock('@/services/sound', () => ({
  sound: { play: jest.fn(), unlock: jest.fn() },
}));

// useStore's onRehydrateStorage fires resyncNotifs() after rehydration, which
// awaits notifications.pruneUnknown()/scheduleDaily()/scheduleNudge()/
// cancelKind(). Those wrap expo-notifications; jest-expo's generic stubs return
// undefined, which can reject inside pruneUnknown. Mock the whole service.
jest.mock('@/services/notifications', () => ({
  notifications: {
    requestPermissions: jest.fn(() => Promise.resolve(true)),
    scheduleDaily: jest.fn(() => Promise.resolve()),
    scheduleNudge: jest.fn(() => Promise.resolve()),
    scheduleReport: jest.fn(() => Promise.resolve()),
    cancelKind: jest.fn(() => Promise.resolve()),
    pruneUnknown: jest.fn(() => Promise.resolve()),
    cancelAll: jest.fn(() => Promise.resolve()),
  },
}));
