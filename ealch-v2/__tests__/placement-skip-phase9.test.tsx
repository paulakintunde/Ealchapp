/// <reference types="jest" />
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { fireEvent, render, screen } from '@testing-library/react-native';
import Den from '../app/den';
import { useStore } from '@/store/useStore';
import { track } from '@/services/analytics';

jest.mock('expo-router', () => ({
  ...jest.requireActual('expo-router'),
  useRouter: () => ({ back: jest.fn(), push: jest.fn(), replace: jest.fn() }),
  useFocusEffect: jest.fn(),
}));
jest.mock('@/services/analytics', () => ({ ...jest.requireActual('@/services/analytics'), track: jest.fn() }));
jest.mock('@shopify/flash-list', () => ({
  FlashList: ({ data, renderItem }: { data: unknown[]; renderItem: (value: { item: unknown; index: number }) => React.ReactNode }) => {
    const React = require('react');
    const { View } = require('react-native');
    return React.createElement(View, {}, data.map((item, index) => React.createElement(React.Fragment, { key: index }, renderItem({ item, index }))));
  },
}));

const metrics = {
  frame: { x: 0, y: 0, width: 390, height: 844 },
  insets: { top: 47, left: 0, right: 0, bottom: 34 },
};

test('dismissing the optional Den offer emits one voluntary placement skip', async () => {
  useStore.setState({ lang: 'en', level: 'sons', denOrientationSeen: true, denPlacementSeen: false,
    firstPlacementOutcome: null, firstPlacementResult: null });
  jest.clearAllMocks();
  await render(<SafeAreaProvider initialMetrics={metrics}><Den /></SafeAreaProvider>);
  await fireEvent.press(screen.getByRole('button', { name: 'Skip quick check' }));
  expect(useStore.getState().firstPlacementOutcome?.kind).toBe('skipped');
  expect((track as jest.Mock).mock.calls.filter(([event]) => event === 'placement_skipped')).toEqual([
    ['placement_skipped', { source: 'offer' }],
  ]);
});
