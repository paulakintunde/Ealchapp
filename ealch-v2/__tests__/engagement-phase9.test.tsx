/// <reference types="jest" />
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import Lesson from '../app/lesson';
import Paywall from '../app/paywall';
import { useStore } from '@/store/useStore';
import { useProgress } from '@/store/useProgress';
import { useEntitlement } from '@/store/useEntitlement';
import { track } from '@/services/analytics';
import { purchasePremiere } from '@/services/purchases';

let mockParams: Record<string, string> = { key: 'sons.01.l1' };
let mockPagerProps: Record<string, (...args: any[]) => void> | null = null;
jest.mock('expo-router', () => ({
  ...jest.requireActual('expo-router'),
  useFocusEffect: jest.fn(),
  useRouter: () => ({ back: jest.fn(), push: jest.fn(), replace: jest.fn(), setParams: jest.fn() }),
  useLocalSearchParams: () => mockParams,
}));
jest.mock('@/components/LessonPager', () => ({
  LessonPager: (props: Record<string, (...args: any[]) => void>) => { mockPagerProps = props; return null; },
}));
jest.mock('@/services/analytics', () => ({ track: jest.fn() }));
jest.mock('expo-crypto', () => ({ randomUUID: jest.fn(() => 'test-visit-or-attempt-id') }));
jest.mock('@/services/purchases', () => ({
  purchasesStatus: () => 'ready',
  getLiveOffers: async () => [],
  purchasePremiere: jest.fn(),
  restorePurchases: jest.fn(),
}));

const metrics = {
  frame: { x: 0, y: 0, width: 390, height: 844 },
  insets: { top: 47, left: 0, right: 0, bottom: 34 },
};
const events = () => (track as jest.Mock).mock.calls;

beforeEach(() => {
  jest.clearAllMocks();
  mockParams = { key: 'sons.01.l1' };
  mockPagerProps = null;
  useStore.setState({ lang: 'en', lessonKeySeen: false, userId: 'test-account', planPick: 'yr', currency: 'USD', currencyChosen: true });
  useEntitlement.setState({ entitlement: { userId: 'test-account', plan: 'free', features: [], source: 'iap' } });
  useProgress.setState({ sessions: [], lessonMissions: {}, resumeByMode: {} });
});
afterEach(async () => { await cleanup(); });

test('first lesson waits for actual pager; locked A2 opens no lesson content', async () => {
  const view = await render(<SafeAreaProvider initialMetrics={metrics}><Lesson /></SafeAreaProvider>);
  expect(events().filter(([name]) => name === 'first_lesson_started')).toHaveLength(0);
  await act(async () => { useStore.getState().setLessonKeySeen(true); });
  await waitFor(() => expect(events().filter(([name]) => name === 'first_lesson_started')).toHaveLength(1));
  expect(mockPagerProps).not.toBeNull();
  await view.unmount();
  jest.clearAllMocks();
  mockParams = { key: 'a2.01.l1' };
  const locked = await render(<SafeAreaProvider initialMetrics={metrics}><Lesson /></SafeAreaProvider>);
  expect(events().filter(([name]) => name === 'first_lesson_started')).toHaveLength(0);
  await locked.unmount();
});

test('quiz completion follows progress write and cannot duplicate on retry', async () => {
  useStore.getState().setLessonKeySeen(true);
  await render(<SafeAreaProvider initialMetrics={metrics}><Lesson /></SafeAreaProvider>);
  await waitFor(() => expect(mockPagerProps).not.toBeNull());
  await act(async () => { mockPagerProps!.onQuizComplete(); mockPagerProps!.onQuizComplete(); });
  expect(useProgress.getState().sessions.filter((s) => s.activity === 'lesson')).toHaveLength(1);
  const completed = events().filter(([name]) => name === 'lesson_completed');
  expect(completed).toHaveLength(1);
  expect(completed[0][1]).toMatchObject({ lesson_id: 'sons.01.l1', completion_kind: 'quiz' });
  expect(JSON.stringify(completed)).not.toMatch(/answer|transcript|email/);
});

test('purchase outcomes carry one attempt ID and no service error text', async () => {
  mockParams = { from: 'gate:levels' };
  (purchasePremiere as jest.Mock).mockResolvedValue({ ok: false, cancelled: false, message: 'private store error', failureCategory: 'other' });
  await render(<SafeAreaProvider initialMetrics={metrics}><Paywall /></SafeAreaProvider>);
  await fireEvent.press(screen.getByText('Continue'));
  await waitFor(() => expect(events().some(([name]) => name === 'purchase_failed')).toBe(true));
  const started = events().find(([name]) => name === 'purchase_started')![1];
  const failed = events().find(([name]) => name === 'purchase_failed')![1];
  expect(failed).toMatchObject({ plan: 'yr', currency: 'USD', attempt_id: started.attempt_id, failure_category: 'other' });
  expect(JSON.stringify(events())).not.toContain('private store error');
});
