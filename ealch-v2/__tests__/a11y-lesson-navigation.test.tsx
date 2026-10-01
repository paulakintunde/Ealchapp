/// <reference types="jest" />
import { AccessibilityInfo, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import Lesson from '../app/lesson';
import { LanguageChip, LanguagePanel } from '@/components/LanguagePanel';
import { useStore } from '@/store/useStore';

jest.mock('expo-router', () => ({
  ...jest.requireActual('expo-router'),
  useFocusEffect: jest.fn(),
  useRouter: () => ({ back: jest.fn(), push: jest.fn(), replace: jest.fn() }),
  useLocalSearchParams: () => ({ key: 'sons.01.l1' }),
}));
jest.mock('@/utils/reduceMotion', () => ({ useReduceMotion: () => true }));
jest.mock('@/content/english.logic', () => ({
  ...jest.requireActual('@/content/english.logic'),
  glossToggleApplies: () => true,
}));

const metrics = {
  frame: { x: 0, y: 0, width: 390, height: 844 },
  insets: { top: 47, left: 0, right: 0, bottom: 34 },
};

beforeEach(() => useStore.setState({ lang: 'en', lessonKeySeen: true, lessonEnglishMode: 'both' }));

test('lesson Back and Help are distinct named actions', async () => {
  await render(<SafeAreaProvider initialMetrics={metrics}><Lesson /></SafeAreaProvider>);
  expect(screen.getByRole('button', { name: 'Close' })).toBeTruthy();
  expect(screen.getByRole('button', { name: 'How lessons work' })).toBeTruthy();
  await fireEvent.press(screen.getByRole('button', { name: /Lesson language/ }));
  expect(screen.getByRole('header', { name: 'Lesson language' })).toBeTruthy();
  expect(screen.queryByRole('button', { name: 'How lessons work' })).toBeNull();
});

test('language chip remains a three-choice panel button', async () => {
  await render(<LanguageChip mode="both" expanded onPress={jest.fn()} />);
  const chip = screen.getByRole('button', { name: /Lesson language/ });
  expect(chip.props.accessibilityState.expanded).toBe(true);
});

test('language panel focuses its title and reports the selected choice', async () => {
  const focus = jest.spyOn(AccessibilityInfo, 'sendAccessibilityEvent').mockImplementation(() => {});
  await render(<View><LanguagePanel mode="onDemand" open onClose={jest.fn()} onSelect={jest.fn()} /></View>);
  const title = screen.getByRole('header', { name: 'Lesson language' });
  fireEvent(title, 'layout', { nativeEvent: { layout: { x: 0, y: 0, width: 120, height: 40 } } });
  // D-03: deferred until the open animation settles, sent as a focus event.
  await waitFor(() => expect(focus).toHaveBeenCalledTimes(1));
  expect(focus.mock.calls[0][1]).toBe('focus');
  expect((focus.mock.calls[0][0] as unknown as { props: { accessibilityLabel?: string } }).props.accessibilityLabel).toBe('Lesson language');
  expect(screen.getByRole('button', { name: /English on demand/ }).props.accessibilityState.selected).toBe(true);
  expect(screen.getAllByRole('button').length).toBeGreaterThanOrEqual(4);
  focus.mockRestore();
});
