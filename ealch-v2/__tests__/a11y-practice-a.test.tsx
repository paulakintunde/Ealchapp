/// <reference types="jest" />
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { fireEvent, render, screen } from '@testing-library/react-native';
import FlashTypes from '../app/flashtypes';
import VoiceFlash from '../app/voiceflash';
import Review from '../app/review';
import { content } from '@/services/content';
import { stt } from '@/services';
import { useStore } from '@/store/useStore';
import { useProgress } from '@/store/useProgress';
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
  mockRouter.replace.mockClear();
  mockParams = {};
});
afterEach(() => jest.restoreAllMocks());

test('flash type difficulty is a named, selected radio choice', async () => {
  mockParams = { domain: 'fondations' };
  await render(wrap(<FlashTypes />));
  const all = screen.getByRole('radio', { name: 'All' });
  expect(all.props.accessibilityState.selected).toBe(false);
  await fireEvent.press(all);
  expect(screen.getByRole('radio', { name: 'All' }).props.accessibilityState.selected).toBe(true);
});

test('voice microphone announces the action it will take as recording state changes', async () => {
  const card: Item = { id: 'a11y-voice', kind: 'word', level: 'a1', theme: 'test', fr: 'bonjour', en: 'hello', tags: [], drills: ['voiceflash'], version: 1 };
  jest.spyOn(content, 'itemsFor').mockReturnValue([card]);
  const listen = jest.spyOn(stt, 'listen').mockImplementation(() => new Promise(() => {}));
  const stop = jest.spyOn(stt, 'stop').mockImplementation(() => {});
  await render(wrap(<VoiceFlash />));
  await fireEvent.press(screen.getByRole('button', { name: 'Start recording' }));
  expect(listen).toHaveBeenCalled();
  await fireEvent.press(screen.getByRole('button', { name: 'Stop recording' }));
  expect(stop).toHaveBeenCalled();
});

test('review empty-state navigation remains a named action', async () => {
  useProgress.setState({ attempts: [] });
  await render(wrap(<Review />));
  await fireEvent.press(screen.getByRole('button', { name: 'Back to feed' }));
  expect(mockRouter.replace).toHaveBeenCalledWith('/home');
});
