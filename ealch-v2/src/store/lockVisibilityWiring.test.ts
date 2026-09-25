// Phase 5 / D-05 + D-06: the lock-VISIBILITY wirings, asserted against the
// screen sources. These are JSX behaviours with no RNTL infra to render them
// (TEST-02 builds that in a later phase), so the guard is the same source-text
// assertion entitlementDowngrade.test.ts uses for the store write path.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

const appDir = resolve(dirname(fileURLToPath(import.meta.url)), '../../app');
const componentsDir = resolve(dirname(fileURLToPath(import.meta.url)), '../components');
const read = (f: string) => readFileSync(resolve(appDir, f), 'utf8');
const readComponent = (f: string) => readFileSync(resolve(componentsDir, f), 'utf8');

test('a gated lesson is never written into the resume pointer', () => {
  ok(read('lesson.tsx').includes("if (L && !bandLocked) setResume('lesson'"));
  ok(read('narrated.tsx').includes("if (L && !bandLocked) setResume('narrated'"));
  ok(!read('lesson.tsx').includes("if (L) setResume("), 'the unguarded form must be gone');
  ok(!read('narrated.tsx').includes("if (L) setResume("), 'the unguarded form must be gone');
});

test('theme.tsx carries an entitlement lock independent of the progression lock', () => {
  const src = read('theme.tsx');
  ok(src.includes("useFeature('levels.all')"), 'must read the entitlement');
  ok(src.includes('T.premLockTag'), 'must render den.tsx\'s lock tag string');
  ok(src.includes('stepRoute(s.drill, slug, band)'), 'a locked step must still route, not go inert');
});

test('every drill browse screen locks a theme with no free band', () => {
  for (const f of ['flashthemes.tsx', 'dictationthemes.tsx', 'voicethemes.tsx', 'sentencethemes.tsx']) {
    const src = read(f);
    ok(src.includes("useFeature('levels.all')"), `${f} must read the entitlement`);
    ok(src.includes('FREE_BANDS'), `${f} must key the lock on FREE_BANDS, not a literal`);
    ok(src.includes('includes(r.lo)'), `${f} must key on the theme's LOWEST band`);
    ok(src.includes('T.premLockTag'), `${f} must render the shared lock tag`);
  }
});

// 07.1-09 / D-34: PremiereLockTag is the trail's use of the shared lock tag —
// it must derive nothing (no useFeature/FREE_BANDS/useStore of its own) and
// must render T.premLockTag exactly once. The five drill-browse screens above
// and theme.tsx are DELIBERATELY untouched (their own copies stay as-is,
// recorded as a follow-up in PremiereLockTag.tsx's own header).
test('PremiereLockTag.tsx derives nothing and renders the shared lock tag exactly once', () => {
  const src = readComponent('PremiereLockTag.tsx');
  ok(!/useFeature|FREE_BANDS|useStore|useProgress/.test(src), 'PremiereLockTag.tsx must derive nothing — locked arrives as a prop');
  ok(src.includes('locked: boolean'), 'PremiereLockTag.tsx must take locked as a boolean prop');
  const occurrences = (src.match(/T\.premLockTag/g) ?? []).length;
  strictEqual(occurrences, 1, 'PremiereLockTag.tsx must render T.premLockTag exactly once');
});

// 07.1-09 / D-21/D-22/D-23: TrailGateRow is the paywall's two trail
// positions — one component, two variants, both routing to the same place.
test("TrailGateRow.tsx is one component with a 'gate' and a 'boundary' variant, both routing to /paywall?from=gate:levels", () => {
  const src = readComponent('TrailGateRow.tsx');
  ok(src.includes("variant: 'gate' | 'boundary'") || src.includes("'gate' | 'boundary'"), 'TrailGateRow.tsx must expose exactly the two named variants');
  ok(src.includes("pathname: '/paywall'") && src.includes("from: 'gate:levels'"), 'both variants must route to /paywall?from=gate:levels');
  ok(src.includes("trackEvent('gate_blocked'"), 'both variants must fire gate_blocked before navigating');
  const fromOccurrences = (src.match(/from:\s*'gate:levels'/g) ?? []).length;
  strictEqual(fromOccurrences, 1, "one component, two positions: exactly one 'gate:levels' push, shared by both variants");
});

// 07.1-09 / D-22: on a locked band, act/acte0/heading rows stay in the tree
// and stay pressable (accessibilityState disabled), never removed — the
// opposite of den.tsx's old `!tabLocked` hide.
test('a locked trail row stays rendered and pressable: accessibilityState disabled, not removed from the tree', () => {
  const trailRow = readComponent('TrailRow.tsx');
  ok(/accessibilityState=\{\{[^}]*disabled:\s*row\.locked/.test(trailRow), 'TrailRow.tsx must announce row.locked as accessibilityState.disabled, not conditionally render null');
  ok(!/if\s*\(row\.locked\)\s*return\s*null/.test(trailRow), 'TrailRow.tsx must not remove a locked row from the tree');
});

// 07.1-09 / D-23: paywall.tsx's PAYWALL_COPY carries no new key introduced by
// this plan's trail work.
test('app/paywall.tsx gained no new PAYWALL_COPY key from the trail work', () => {
  const src = read('paywall.tsx');
  const at = src.indexOf('const PAYWALL_COPY');
  ok(at > 0, 'expected a PAYWALL_COPY declaration');
  const block = src.slice(at, src.indexOf('};', at));
  const keys = [...block.matchAll(/'gate:[a-z]+'/g)].map((m) => m[0]);
  const unique = new Set(keys);
  strictEqual(unique.size, 3, `PAYWALL_COPY must still carry exactly 3 gate keys, found: ${[...unique].join(', ')}`);
});
