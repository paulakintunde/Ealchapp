/// <reference types="jest" />
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import ExamSection from '../app/exam-section';
import { useStore } from '@/store/useStore';
import { useProgress } from '@/store/useProgress';
import { track } from '@/services/analytics';
import { draftKey } from '@/services/examDraft.logic';

const paperId = 'paper.delf_b2.blanc-01.1';
const mockRouter = { back: jest.fn(), push: jest.fn(), replace: jest.fn() };
jest.mock('expo-router', () => ({
  ...jest.requireActual('expo-router'),
  useRouter: () => mockRouter,
  useLocalSearchParams: () => ({ paperId, skill: 'PE', mode: 'practice' }),
}));
jest.mock('@/services/analytics', () => ({ track: jest.fn() }));
jest.mock('@/services', () => ({
  ...jest.requireActual('@/services'),
  startExamAttempt: jest.fn(async () => ({ ok: true })),
  examGrader: { grade: jest.fn() },
}));
jest.mock('expo-crypto', () => ({ randomUUID: jest.fn(() => 'new-sitting-id') }));

const metrics = {
  frame: { x: 0, y: 0, width: 390, height: 844 },
  insets: { top: 47, left: 0, right: 0, bottom: 34 },
};

beforeEach(async () => {
  jest.clearAllMocks();
  useStore.setState({ lang: 'en', userId: 'exam-account' });
  useProgress.setState({ examResults: [], sessions: [] });
  await AsyncStorage.setItem(draftKey(paperId, 'PE'), JSON.stringify({
    v: 1, paperId, skill: 'PE', savedAt: Date.now(), sittingId: 'restored-sitting-id',
    answers: {}, texts: {}, spoken: {}, coverage: {}, debate: {}, graded: [], outcomes: {},
  }));
});

test('exam submits an ungraded answer after result persistence with restored sitting ID', async () => {
  await render(<SafeAreaProvider initialMetrics={metrics}><ExamSection /></SafeAreaProvider>);
  await fireEvent.press(screen.getByRole('button', { name: 'Submit' }));
  await fireEvent.press(screen.getByText('Submit'));
  await waitFor(() => expect((track as jest.Mock).mock.calls.some(([event]) => event === 'exam_submitted')).toBe(true));
  expect(useProgress.getState().examResults).toHaveLength(1);
  const event = (track as jest.Mock).mock.calls.find(([name]) => name === 'exam_submitted')![1];
  expect(event).toEqual({ paper_id: paperId, skill: 'PE', sitting_id: 'restored-sitting-id', graded_count: 0, ungraded_count: 1 });
  expect(JSON.stringify(event)).not.toMatch(/answer|transcript|email|prompt/);
  expect(mockRouter.replace).toHaveBeenCalledWith({ pathname: '/exam-report', params: { paperId } });
});
