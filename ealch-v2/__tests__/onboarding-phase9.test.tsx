/// <reference types="jest" />
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import Onboarding from '../app/onboarding';
import SignIn from '../app/signin';
import { useStore } from '@/store/useStore';
import { emptyWizard } from '@/store/onboarding.logic';
import { auth } from '@/services/auth';
import { track } from '@/services/analytics';

const mockRouter = { back: jest.fn(), push: jest.fn(), replace: jest.fn() };
jest.mock('expo-router', () => ({
  ...jest.requireActual('expo-router'), useRouter: () => mockRouter,
}));
jest.mock('@/services/analytics', () => ({
  ...jest.requireActual('@/services/analytics'), track: jest.fn(),
}));
jest.mock('expo-crypto', () => ({ randomUUID: () => 'wizard-test-uuid' }));

const metrics = {
  frame: { x: 0, y: 0, width: 390, height: 844 },
  insets: { top: 47, left: 0, right: 0, bottom: 34 },
};
const wrap = (child: React.ReactElement) => <SafeAreaProvider initialMetrics={metrics}>{child}</SafeAreaProvider>;

beforeEach(() => {
  useStore.setState({ ...emptyWizard(), hydrated: true, onboarded: false, signedIn: false, accountType: 'guest', lang: 'en', email: '' });
  jest.clearAllMocks();
});
afterEach(() => jest.restoreAllMocks());

test('guest wizard resumes its last unfinished step and Back/edit does not recount a step', async () => {
  const view = await render(wrap(<Onboarding />));
  await waitFor(() => expect(track).toHaveBeenCalledWith('onboarding_started', expect.objectContaining({ wizard_id: expect.any(String) })));
  const wizardId = useStore.getState().wizardId;
  await fireEvent.press(screen.getByRole('button', { name: 'Create an account' }));
  await fireEvent.press(screen.getByText('Continue without an account'));
  expect(useStore.getState().wizardStep).toBe(2);
  expect(useStore.getState().completedWizardSteps).toEqual([1]);
  await fireEvent.press(screen.getByRole('button', { name: 'Back' }));
  await fireEvent.press(screen.getByText('Continue without an account'));
  expect((track as jest.Mock).mock.calls.filter(([event]) => event === 'onboarding_step_completed' && useStore.getState().completedWizardSteps.includes(1))).toHaveLength(1);
  await view.unmount();
  const resumed = await render(wrap(<Onboarding />));
  expect(useStore.getState().wizardId).toBe(wizardId);
  expect(screen.getByText(/What should/)).toBeTruthy();
  await resumed.unmount();
});

test('result exit counts guest completion once', async () => {
  useStore.setState({ wizardId: 'wizard-result', wizardStep: 11, accountType: 'guest' });
  const view = await render(wrap(<Onboarding />));
  await fireEvent.press(screen.getByRole('button', { name: 'Enter Ealch' }));
  await fireEvent.press(screen.getByRole('button', { name: 'Enter Ealch' }));
  expect((track as jest.Mock).mock.calls.filter(([event]) => event === 'onboarding_completed')).toHaveLength(1);
  expect(useStore.getState().wizardCompleted).toBe(true);
  await view.unmount();
});

test('existing-account sign-in does not count wizard completion', async () => {
  jest.spyOn(auth, 'signInWithEmail').mockResolvedValue({ ok: true, email: 'learner@example.test' });
  await render(wrap(<SignIn />));
  await fireEvent.changeText(screen.getByPlaceholderText('Email'), 'learner@example.test');
  await fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password123');
  await fireEvent.press(screen.getByRole('button', { name: 'Sign in' }));
  await waitFor(() => expect(auth.signInWithEmail).toHaveBeenCalledWith('learner@example.test', 'password123'));
  await waitFor(() => expect(mockRouter.replace).toHaveBeenCalledWith('/splash'));
  expect((track as jest.Mock).mock.calls.some(([event]) => event === 'onboarding_completed')).toBe(false);
});
