/// <reference types="jest" />
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { fireEvent, render, screen } from '@testing-library/react-native';
import ExamPaperScreen from '../app/exam-paper';
import Onboarding from '../app/onboarding';
import Player from '../app/player';
import { ExamClock } from '@/components/ExamClock';
import { startClock, type ClockState } from '@/utils/examClock.logic';
import { content } from '@/services/content';
import { tts } from '@/services';
import { useStore } from '@/store/useStore';
import type { ExamPaper, Item } from '@/content/schema';

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
  useStore.setState({ lang: 'en', level: 'a1', mode: 'automatic' });
  mockParams = {};
  jest.clearAllMocks();
});
afterEach(() => jest.restoreAllMocks());

test('exam mode choices expose the selected radio state', async () => {
  const paper: ExamPaper = { id: 'a11y-paper', format: 'tcf_canada', variant: 'test', paperNo: 1, sections: [] };
  mockParams = { paperId: paper.id };
  jest.spyOn(content, 'examPaper').mockReturnValue(paper);
  await render(wrap(<ExamPaperScreen />));
  const choices = screen.getAllByRole('radio');
  expect(choices).toHaveLength(2);
  expect(choices[0].props.accessibilityState.selected).toBe(true);
  await fireEvent.press(choices[1]);
  expect(screen.getAllByRole('radio')[1].props.accessibilityState.selected).toBe(true);
});

test('practice exam clock names its pause and resume actions', async () => {
  const onChange = jest.fn<void, [ClockState]>();
  const clock = startClock(600, Date.now());
  const view = await render(wrap(<ExamClock clock={clock} onChange={onChange} onExpire={jest.fn()} mode="practice" lang="en" />));
  await fireEvent.press(screen.getByRole('button', { name: 'Pause the clock' }));
  expect(onChange).toHaveBeenCalledTimes(1);
  await view.rerender(wrap(<ExamClock clock={onChange.mock.calls[0][0]} onChange={onChange} onExpire={jest.fn()} mode="practice" lang="en" />));
  expect(screen.getByRole('button', { name: 'Resume the clock' })).toBeTruthy();
});

test('onboarding retains Automatic, Dark, Light ordering and selected state', async () => {
  await render(wrap(<Onboarding />));
  await fireEvent.press(screen.getByRole('button', { name: 'Create an account' }));
  await fireEvent.press(screen.getByText('Continue without an account'));
  await fireEvent.press(screen.getByText('Skip'));
  const choices = screen.getAllByRole('radio').filter((c) => ['AUTOMATIC', 'DARK', 'LIGHT'].includes(c.props.accessibilityLabel));
  expect(choices.map((c) => c.props.accessibilityLabel)).toEqual(['AUTOMATIC', 'DARK', 'LIGHT']);
  expect(choices[0].props.accessibilityState.selected).toBe(true);
  await fireEvent.press(choices[1]);
  expect(screen.getByRole('radio', { name: 'DARK' }).props.accessibilityState.selected).toBe(true);
});

test('player announces Play and Pause as playback changes', async () => {
  const item: Item = { id: 'a11y-player', kind: 'sentence', level: 'a1', theme: 'test', fr: 'Bonjour.', en: 'Hello.', tags: [], drills: ['flashcard'], version: 1 };
  jest.spyOn(content, 'itemsFor').mockReturnValue([item]);
  jest.spyOn(tts, 'speak').mockResolvedValue();
  await render(wrap(<Player />));
  await fireEvent.press(screen.getByRole('button', { name: 'Play' }));
  expect(screen.getByRole('button', { name: 'Pause' })).toBeTruthy();
});
