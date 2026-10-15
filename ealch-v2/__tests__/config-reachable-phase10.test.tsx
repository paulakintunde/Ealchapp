/// <reference types="jest" />
let mockClient: unknown = null;
jest.mock('@/services/supabase', () => ({ supabase: () => mockClient }));

import { configReachable, getConfig, refreshConfigWithin } from '@/services/config';

function clientWith(single: () => Promise<unknown>) {
  return { from: () => ({ select: () => ({ eq: () => ({ single }) }) }) };
}

describe('refreshConfigWithin reachability (D-06)', () => {
  test('a successful select is reachable and reflects reviewPromptOn', async () => {
    mockClient = clientWith(async () => ({ data: { config: { reviewPromptOn: false } }, error: null }));
    await expect(refreshConfigWithin(500)).resolves.toBe(true);
    expect(configReachable()).toBe(true);
    expect(getConfig().reviewPromptOn).toBe(false);
  });

  test('a paused project (error response) is not reachable', async () => {
    mockClient = clientWith(async () => ({ data: null, error: { message: 'Project paused' } }));
    await expect(refreshConfigWithin(500)).resolves.toBe(false);
    expect(configReachable()).toBe(false);
  });

  test('a rejecting select is not reachable', async () => {
    mockClient = clientWith(async () => { throw new Error('network'); });
    await expect(refreshConfigWithin(500)).resolves.toBe(false);
    expect(configReachable()).toBe(false);
  });

  test('no client is not reachable', async () => {
    mockClient = null;
    await expect(refreshConfigWithin(500)).resolves.toBe(false);
    expect(configReachable()).toBe(false);
  });

  test('a select that never resolves times out as not reachable', async () => {
    mockClient = clientWith(() => new Promise(() => {}));
    await expect(refreshConfigWithin(50)).resolves.toBe(false);
    expect(configReachable()).toBe(false);
  });
});
