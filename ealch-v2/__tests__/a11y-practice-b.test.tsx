/// <reference types="jest" />
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { fireEvent, render, screen } from '@testing-library/react-native';
import Dictation from '../app/dictation';
import Themes from '../app/themes';
import Chat from '../app/chat';
import { content } from '@/services/content';
import { useStore } from '@/store/useStore';
import type { Item } from '@/content/schema';

let mockParams: Record<string, string> = {};
const mockRouter = { back: jest.fn(), push: jest.fn(), replace: jest.fn() };
jest.mock('expo-router', () => ({
  ...jest.requireActual('expo-router'),
  useFocusEffect: jest.fn(),
  useRouter: () => mockRouter,
  useLocalSearchParams: () => mockParams,
}));

const metrics = {
  frame: { x: 0, y: 0, width: 390, height: 844 },
  insets: { top: 47, left: 0, right: 0, bottom: 34 },
};
const wrap = (child: React.ReactElement) => <SafeAreaProvider initialMetrics={metrics}>{child}</SafeAreaProvider>;

beforeEach(() => {
  useStore.setState({ lang: 'en', level: 'a1' });
  mockParams = {};
  jest.clearAllMocks();
});
afterEach(() => jest.restoreAllMocks());

test('dictation audio icon has a named play action', async () => {
  const item: Item = { id: 'a11y-dictation', kind: 'sentence', level: 'a1', theme: 'test', fr: 'Bonjour.', en: 'Hello.', tags: [], drills: ['dictation'], version: 1 };
  jest.spyOn(content, 'itemsFor').mockReturnValue([item]);
  await render(wrap(<Dictation />));
  expect(screen.getByRole('button', { name: 'Play the sentence' })).toBeTruthy();
});

test('theme level filter exposes selected radio state', async () => {
  await render(wrap(<Themes />));
  const all = screen.getByRole('radio', { name: 'All' });
  expect(all.props.accessibilityState.selected).toBe(true);
  await fireEvent.press(screen.getByRole('radio', { name: 'A1' }));
  expect(screen.getByRole('radio', { name: 'A1' }).props.accessibilityState.selected).toBe(true);
  expect(screen.getByRole('radio', { name: 'All' }).props.accessibilityState.selected).toBe(false);
});

test('chat microphone and send controls announce their actual actions', async () => {
  await render(wrap(<Chat />));
  expect(screen.getByRole('button', { name: 'Start recording' })).toBeTruthy();
  const send = screen.getByRole('button', { name: 'Send message' });
  expect(send.props.accessibilityState.disabled).toBe(true);
  await fireEvent.changeText(screen.getByPlaceholderText('Ask your question…'), 'Bonjour');
  expect(screen.getByRole('button', { name: 'Send message' }).props.accessibilityState.disabled).toBe(false);
});
