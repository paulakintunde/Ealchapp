// Phase 5 / D-14 + ROADMAP criterion 5: one shared banner slot, extended not
// replaced. These assertions exist so Phase 10's rating prompt has a stable
// contract to add a fourth kind to, and so nobody reintroduces a parallel
// visibility boolean.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const read = (p: string) => readFileSync(resolve(root, p), 'utf8');
const count = (s: string, needle: string) => s.split(needle).length - 1;

test('the banner is one nullable tagged union, not a set of booleans', () => {
  const src = read('src/store/useUI.ts');
  ok(src.includes('export type BannerState'), 'the union must be exported for other stores to construct');
  ok(src.includes('banner: BannerState | null;'), 'one nullable slot is what guarantees one banner at a time');
  for (const k of ["kind: 'speakReminder'", "kind: 'upgradeNudge'", "kind: 'reconciliation'"]) {
    ok(src.includes(k), `${k} must be a member`);
  }
  ok(src.includes('hideBanner: () => set({ banner: null })'), 'hide must clear the slot, not flip a flag');
});

test('no reader or writer still uses the old boolean API', () => {
  for (const f of ['src/store/useUI.ts', 'src/components/PushBanner.tsx', 'src/hooks/useAlarmWatcher.ts', 'app/settings.tsx']) {
    const src = read(f);
    ok(!src.includes('bannerVisible'), `${f} still references bannerVisible`);
    ok(!src.includes('bannerAt'), `${f} still references bannerAt`);
  }
});

test('both existing writers raise the reminder kind unchanged', () => {
  strictEqual(count(read('src/hooks/useAlarmWatcher.ts'), "showBanner({ kind: 'speakReminder', at: alarmTime })"), 1);
  strictEqual(count(read('app/settings.tsx'), "showBanner({ kind: 'speakReminder', at: alarmTime })"), 1);
  ok(read('src/hooks/useAlarmWatcher.ts').includes('setTimeout(() => hideBanner(), 12000)'), 'the reminder keeps its own 12s caller-side timer');
});

test('PushBanner varies only presentation by kind, and each kind has its own press target', () => {
  const src = read('src/components/PushBanner.tsx');
  ok(src.includes('banner !== null'), 'visibility is derived from the slot');
  ok(src.includes("banner?.kind === 'upgradeNudge'") && src.includes("banner?.kind === 'reconciliation'"), 'both new kinds must be handled');
  ok(src.includes("router.push({ pathname: '/paywall', params: { from: 'gate:roleplay' } })"), 'the nudge lands on the matching contextual paywall, not the generic screen');
  ok(src.includes("router.push('/settings')"), 'reconciliation routes to the existing Restore flow');
  ok(src.includes("router.push('/speak')"), 'the reminder still opens Speak Mode');
  ok(src.includes('T.reconcileBody') && src.includes('T.acctTag'), 'reconciliation copy comes from the i18n table');
  ok(src.includes('setTimeout(() => useUI.getState().hideBanner(), 10000)'), 'the two new kinds auto-hide at 10s');
  ok(src.includes('duration: 500') && src.includes('-140'), 'the shared slide animation is unchanged');
});

test('exactly one component renders the shared banner slot', () => {
  // ROADMAP criterion 5: Phase 10 extends this, it does not add a rival toast.
  const layout = read('app/_layout.tsx');
  strictEqual(count(layout, '<PushBanner'), 1, 'PushBanner is mounted once, globally');
});
