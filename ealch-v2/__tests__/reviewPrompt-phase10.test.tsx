/// <reference types="jest" />
// Behaviour tests for the review I/O layer (D-03, D-04, D-34, D-38, D-39).

const MIN = 60_000;
const DAY = 24 * 60 * MIN;
const KEY = 'ealch-review-state';

// One shared backing map so a simulated app kill (resetModules) keeps storage.
const mockStore = new Map<string, string>();
const mockStorage = {
  getItem: async (k: string) => (mockStore.has(k) ? mockStore.get(k)! : null),
  setItem: jest.fn(async (k: string, v: string) => { mockStore.set(k, v); }),
  clear: async () => { mockStore.clear(); },
};
jest.mock('@react-native-async-storage/async-storage', () => ({ __esModule: true, default: mockStorage }));
const AsyncStorage = mockStorage;

let mockCalls: string[] = [];
let clock = 0;
let mockEnv: {
  reachable: boolean; guest: boolean; errors: unknown[]; available: boolean; rejects: boolean;
  hydrated: boolean; contentReady: boolean; installAt: number | null; missions: Record<string, { done: number[] }>;
};

function resetEnv() {
  mockEnv = { reachable: true, guest: false, errors: [], available: true, rejects: false, hydrated: true, contentReady: true, installAt: 0, missions: {} };
}

jest.mock('expo-store-review', () => ({
  isAvailableAsync: jest.fn(async () => mockEnv.available),
  requestReview: jest.fn(async () => { mockCalls.push('request'); if (mockEnv.rejects) throw new Error('nope'); }),
}));
jest.mock('@/services/config', () => ({
  getConfig: () => ({ reviewPromptOn: true }),
  refreshConfigWithin: jest.fn(async () => mockEnv.reachable),
}));
jest.mock('@/services/analytics', () => ({ track: (n: string) => { mockCalls.push(n === 'review_requested' ? 'track' : n); } }));
jest.mock('@/services/errors', () => ({ recentErrors: () => mockEnv.errors }));
jest.mock('@/services/acquisition', () => ({ firstOpenAt: async () => mockEnv.installAt }));
jest.mock('@/services/content', () => ({ useContent: { getState: () => ({ hydrated: mockEnv.contentReady }) } }));
jest.mock('@/services/packs', () => ({ usePackSync: { getState: () => ({ status: 'idle' }) } }));
jest.mock('@/store/useProgress', () => ({
  useProgress: { persist: { hasHydrated: () => mockEnv.hydrated }, getState: () => ({ lessonMissions: mockEnv.missions }) },
}));
jest.mock('@/store/useStore', () => ({ useStore: { getState: () => ({ accountType: mockEnv.guest ? 'guest' : 'email' }) } }));

type Mod = typeof import('@/services/reviewPrompt');
type UIMod = typeof import('@/store/useUI');
let rp: Mod;
let ui: UIMod;

function load() {
  jest.resetModules();
  rp = require('@/services/reviewPrompt');
  ui = require('@/store/useUI');
}

const FIVE = ['a1.01.l1', 'a1.02.l1', 'a1.03.l1', 'a1.04.l1', 'a1.05.l1'];
async function eligible() {
  for (const id of FIVE) await rp.noteLessonCompleted(id);
}
async function stored() {
  return JSON.parse((await AsyncStorage.getItem(KEY)) ?? 'null');
}
async function armAndFire(id = 'a1.06.l1') {
  await rp.armReviewPrompt(id);
  await rp.maybeRequestReview();
}

let failSpend = false;

beforeEach(async () => {
  await AsyncStorage.clear();
  mockCalls = [];
  failSpend = false;
  resetEnv();
  clock = 100 * DAY;
  jest.spyOn(Date, 'now').mockImplementation(() => clock);
  load();
  mockStorage.setItem.mockImplementation(async (k: string, v: string) => {
    if (k === KEY) {
      if (failSpend) throw new Error('disk full');
      mockCalls.push('write');
    }
    mockStore.set(k, v);
  });
});
afterEach(() => { jest.restoreAllMocks(); });

test('concurrency: note, arm and note lose no write', async () => {
  await Promise.all([rp.noteLessonCompleted('a1.01.l1'), rp.armReviewPrompt('a1.02.l1'), rp.noteLessonCompleted('a1.03.l1')]);
  const s = await stored();
  expect(s.completed).toEqual(expect.arrayContaining(['a1.01.l1', 'a1.03.l1']));
  expect(s.armed).toContain('a1.02.l1');
});

test('order: spend written, then tracked, then requested', async () => {
  await eligible();
  await rp.armReviewPrompt('a1.06.l1');
  mockCalls = [];
  await rp.maybeRequestReview();
  expect(mockCalls).toEqual(['write', 'track', 'request']);
  expect((await stored()).requests).toHaveLength(1);
});

test('spend write failure: no track and no request', async () => {
  await eligible();
  await rp.armReviewPrompt('a1.06.l1');
  mockCalls = [];
  failSpend = true;
  await rp.maybeRequestReview();
  expect(mockCalls).not.toContain('track');
  expect(mockCalls).not.toContain('request');
});

describe('skips do not spend', () => {
  const cases: [string, () => void][] = [
    ['offline', () => { mockEnv.reachable = false; }],
    ['guest', () => { mockEnv.guest = true; }],
    ['error in the ring', () => { mockEnv.errors = [{}]; }],
    ['banner showing', () => { ui.useUI.getState().showBanner({ kind: 'reconciliation' } as never); clock += 11 * MIN; }],
    ['banner shown 9 minutes before', () => { ui.useUI.getState().showBanner({ kind: 'reconciliation' } as never); ui.useUI.getState().hideBanner(); clock += 9 * MIN; }],
    ['paywall noted 9 minutes before', () => { rp.notePaywallShown(); clock += 9 * MIN; }],
    ['store review unavailable', () => { mockEnv.available = false; }],
  ];
  test.each(cases)('%s', async (_n, setup) => {
    await eligible();
    await rp.armReviewPrompt('a1.06.l1');
    mockCalls = [];
    setup();
    await rp.maybeRequestReview();
    expect(mockCalls).toEqual([]);
    expect((await stored()).requests).toEqual([]);
  });

  test('banner 11 minutes before asks', async () => {
    await eligible();
    await rp.armReviewPrompt('a1.06.l1');
    ui.useUI.getState().showBanner({ kind: 'reconciliation' } as never);
    ui.useUI.getState().hideBanner();
    clock += 11 * MIN;
    await rp.maybeRequestReview();
    expect(mockCalls).toContain('request');
  });
});

test('rejection is not refunded and nothing reaches the error ring', async () => {
  await eligible();
  mockEnv.rejects = true;
  await armAndFire();
  expect(mockCalls).toContain('request');
  expect((await stored()).requests).toHaveLength(1);
  expect(mockEnv.errors).toEqual([]);
});

test('D-39: a second perfect completion of the same lesson never arms', async () => {
  await eligible();
  await armAndFire('a1.06.l1');
  mockCalls = [];
  clock += 200 * DAY;
  await armAndFire('a1.06.l1');
  expect(mockCalls).toEqual([]);
});

test('Sons lessons never arm', async () => {
  await eligible();
  await armAndFire('sons.01.l1');
  expect(mockCalls).not.toContain('request');
});

test('arm survives 29 minutes', async () => {
  await eligible();
  await rp.armReviewPrompt('a1.06.l1');
  clock += 29 * MIN;
  await rp.maybeRequestReview();
  expect(mockCalls).toContain('request');
});

test('arm expires after 30 minutes', async () => {
  await eligible();
  await rp.armReviewPrompt('a1.06.l1');
  clock += 31 * MIN;
  await rp.maybeRequestReview();
  expect(mockCalls).not.toContain('request');
});

test('replace chain: latest arm fires once', async () => {
  await eligible();
  await rp.armReviewPrompt('a1.06.l1');
  await rp.armReviewPrompt('a1.07.l1');
  await rp.maybeRequestReview();
  await rp.maybeRequestReview();
  expect(mockCalls.filter((c) => c === 'request')).toHaveLength(1);
  expect((await stored()).requests).toHaveLength(1);
});

test('cleared on app kill', async () => {
  await eligible();
  await rp.armReviewPrompt('a1.06.l1');
  load(); // simulated kill: module state is gone, storage stays
  await rp.maybeRequestReview();
  expect(mockCalls).not.toContain('request');
});

test('seed not hydrated: no seed, seeded stays false; seeds once after hydration', async () => {
  mockEnv.hydrated = false;
  mockEnv.missions = Object.fromEntries(FIVE.map((id) => [id, { done: [0] }]));
  await rp.noteLessonCompleted('a2.01.l1');
  let s = await stored();
  expect(s.seeded).toBe(false);
  expect(s.completed).toEqual(['a2.01.l1']);
  mockEnv.hydrated = true;
  await rp.noteLessonCompleted('a2.02.l1');
  s = await stored();
  expect(s.seeded).toBe(true);
  expect(s.completed).toEqual(expect.arrayContaining([...FIVE, 'a2.01.l1', 'a2.02.l1']));
  await rp.noteLessonCompleted('a2.03.l1');
  expect((await stored()).completed.filter((c: string) => c === FIVE[0])).toHaveLength(1);
});

test('content not ready also defers the seed', async () => {
  mockEnv.contentReady = false;
  mockEnv.missions = { 'a1.01.l1': { done: [0] } };
  await rp.noteLessonCompleted('a2.01.l1');
  expect((await stored()).seeded).toBe(false);
});
