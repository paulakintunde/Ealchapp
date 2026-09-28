/// <reference types="jest" />
import * as RN from 'react-native';
import { AccessibilityInfo } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { fireEvent, render, screen } from '@testing-library/react-native';
import Paywall from '../app/paywall';
import { useStore } from '@/store/useStore';

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

beforeEach(() => useStore.setState({ lang: 'en', planPick: 'yr', mode: 'dark' }));

test('paywall focuses its title and exposes selected plan, legal links, and free recovery', async () => {
  const node = jest.spyOn(RN, 'findNodeHandle').mockReturnValue(57);
  const focus = jest.spyOn(AccessibilityInfo, 'setAccessibilityFocus').mockImplementation(() => {});
  await render(<SafeAreaProvider initialMetrics={metrics}><Paywall /></SafeAreaProvider>);
  const title = screen.getByRole('header', { name: 'Unlock A2 and beyond' });
  fireEvent(title, 'layout', { nativeEvent: { layout: { x: 0, y: 0, width: 200, height: 40 } } });
  expect(focus).toHaveBeenCalledWith(57);
  expect(screen.getByRole('radio', { name: /Annual/ }).props.accessibilityState.selected).toBe(true);
  const monthly = screen.getByRole('radio', { name: /Monthly/ });
  await fireEvent.press(monthly);
  expect(useStore.getState().planPick).toBe('mo');
  expect(screen.getByRole('radio', { name: /Monthly/ }).props.accessibilityState.selected).toBe(true);
  expect(screen.getByRole('link', { name: 'Terms of Use' })).toBeTruthy();
  expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeTruthy();
  expect(screen.getByRole('button', { name: 'Return to the free path' })).toBeTruthy();
  node.mockRestore();
  focus.mockRestore();
});
