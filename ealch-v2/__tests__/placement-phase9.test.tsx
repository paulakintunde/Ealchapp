/// <reference types="jest" />
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import Placement from '../app/placement';
import { useStore } from '@/store/useStore';
import { useContent } from '@/services/content';
import { answerAttempt, createAttempt } from '@/store/placement.logic';
import { track } from '@/services/analytics';

const mockRouter = { back: jest.fn(), canGoBack: jest.fn(() => true), push: jest.fn(), replace: jest.fn() };
jest.mock('expo-router', () => ({
  ...jest.requireActual('expo-router'),
  useRouter: () => mockRouter,
  useFocusEffect: (callback: () => () => void) => require('react').useEffect(callback, [callback]),
}));
jest.mock('@/services/analytics', () => ({
  ...jest.requireActual('@/services/analytics'), track: jest.fn(),
}));
jest.mock('expo-crypto', () => ({ randomUUID: () => 'placement-new-uuid' }));

const metrics = { frame: { x: 0, y: 0, width: 390, height: 844 }, insets: { top: 47, left: 0, right: 0, bottom: 34 } };
const wrap = (child: React.ReactElement) => <SafeAreaProvider initialMetrics={metrics}>{child}</SafeAreaProvider>;
const sample = () => useContent.getState().corpus.items.filter((item) => item.kind !== 'sentence' && item.fr && item.en).slice(0, 2);

beforeEach(() => {
  useStore.setState({ hydrated: true, placementAttempt: null, firstPlacementOutcome: null, firstPlacementResult: null });
  jest.clearAllMocks();
});

test('restored attempt keeps its ID, answer and next question order', async () => {
  const [a, b] = sample();
  const attempt = answerAttempt(createAttempt('saved-placement', [
    { itemId: a.id, optionIds: [b.id, a.id] },
    { itemId: b.id, optionIds: [a.id, b.id] },
  ]), 1);
  useStore.setState({ placementAttempt: attempt });
  const view = await render(wrap(<Placement />));
  expect(screen.getByText('Quick check resumed')).toBeTruthy();
  expect(screen.getByText(b.fr)).toBeTruthy();
  expect(useStore.getState().placementAttempt).toEqual(attempt);
  expect((track as jest.Mock).mock.calls.some(([event]) => event === 'placement_started')).toBe(false);
  await view.unmount();
});

test('failed question load offers Retry and Continue without recording a voluntary skip', async () => {
  useStore.setState({ placementAttempt: createAttempt('failed-placement', []) });
  const view = await render(wrap(<Placement />));
  expect(screen.getByText('Quick check unavailable')).toBeTruthy();
  expect(screen.getByRole('button', { name: 'Retry quick check' })).toBeTruthy();
  await fireEvent.press(screen.getByRole('button', { name: 'Continue without quick check' }));
  expect(useStore.getState().firstPlacementOutcome?.kind).toBe('load_failed');
  expect(mockRouter.replace).toHaveBeenCalledWith('/den');
  expect((track as jest.Mock).mock.calls.some(([event]) => event === 'placement_skipped')).toBe(false);
  await view.unmount();
});

test('Retry after a failed load starts an initial attempt while keeping the initial outcome open', async () => {
  useStore.setState({ placementAttempt: createAttempt('failed-placement', []) });
  const view = await render(wrap(<Placement />));
  await fireEvent.press(screen.getByRole('button', { name: 'Retry quick check' }));
  expect(useStore.getState().placementAttempt?.status).toBe('in_progress');
  expect(useStore.getState().firstPlacementOutcome).toBeNull();
  expect(track).toHaveBeenCalledWith('placement_started', { attempt_id: 'placement-new-uuid', source: 'initial' });
  await view.unmount();
});

test('Close leaves an attempt running until End quick check is confirmed', async () => {
  const [a, b] = sample();
  useStore.setState({ placementAttempt: createAttempt('unfinished-placement', [{ itemId: a.id, optionIds: [a.id, b.id] }]) });
  const view = await render(wrap(<Placement />));
  await fireEvent.press(screen.getByRole('button', { name: 'Close' }));
  expect(useStore.getState().placementAttempt?.status).toBe('in_progress');
  await fireEvent.press(screen.getByRole('button', { name: 'Keep checking' }));
  expect(useStore.getState().placementAttempt?.status).toBe('in_progress');
  await fireEvent.press(screen.getByRole('button', { name: 'Close' }));
  await fireEvent.press(screen.getByRole('button', { name: 'End quick check' }));
  expect(useStore.getState().placementAttempt?.status).toBe('abandoned');
  expect((track as jest.Mock).mock.calls.filter(([event]) => event === 'placement_abandoned')).toHaveLength(1);
  expect(mockRouter.replace).toHaveBeenCalledWith('/den');
  await view.unmount();
});

test('recorded result is emitted once and retake gets a new attempt ID', async () => {
  const [a, b] = sample();
  const attempt = answerAttempt(createAttempt('result-placement', [{ itemId: a.id, optionIds: [b.id, a.id] }]), 1);
  useStore.setState({ placementAttempt: attempt });
  const view = await render(wrap(<Placement />));
  await fireEvent.press(screen.getByRole('button', { name: /Continue/ }));
  await waitFor(() => expect(useStore.getState().placementAttempt?.status).toBe('completed'));
  expect((track as jest.Mock).mock.calls.filter(([event]) => event === 'placement_result')).toHaveLength(1);
  expect(useStore.getState().firstPlacementResult?.attemptId).toBe('result-placement');
  await fireEvent.press(screen.getByRole('button', { name: 'Retake the check' }));
  expect(useStore.getState().placementAttempt?.attemptId).toBe('placement-new-uuid');
  expect(useStore.getState().firstPlacementResult?.attemptId).toBe('result-placement');
  await view.unmount();
});
