/// <reference types="jest" />
import { auth, AUTH_UNAVAILABLE } from '@/services/auth';
import { track } from '@/services/analytics';

jest.mock('@/services/supabase', () => ({ supabase: () => null }));
jest.mock('@/services/analytics', () => ({
  track: jest.fn(),
  prepareEmailSignup: jest.fn(),
  recordAcceptedEmailSignup: jest.fn(),
  handleAuthTransition: jest.fn(),
}));

test('an unavailable email signup still records its start without personal fields or completion', async () => {
  const result = await auth.signUpWithEmail('learner@example.test', 'private-password');
  expect(result).toEqual({ ok: false, error: AUTH_UNAVAILABLE });
  expect(track).toHaveBeenCalledTimes(1);
  expect(track).toHaveBeenCalledWith('signup_started', { method: 'email' });
  expect(JSON.stringify((track as jest.Mock).mock.calls)).not.toMatch(/learner@example|private-password/);
});
