// Phase 5 / D-05 + D-06: the lock-VISIBILITY wirings, asserted against the
// screen sources. These are JSX behaviours with no RNTL infra to render them
// (TEST-02 builds that in a later phase), so the guard is the same source-text
// assertion entitlementDowngrade.test.ts uses for the store write path.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok } from 'node:assert';
import { test } from 'node:test';

const appDir = resolve(dirname(fileURLToPath(import.meta.url)), '../../app');
const read = (f: string) => readFileSync(resolve(appDir, f), 'utf8');

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
