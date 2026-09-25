// Phase 07.1 plan 05: a source-text guard on how app/act.tsx and app/fiche.tsx
// handle the two params that arrive from OUTSIDE the app — a deep link naming
// any lesson id and any act index, including a malformed or out-of-range one.
//
// Why a source-text assertion and not a render test: these are routed screens
// with no RNTL infra to mount them (lockVisibilityWiring.test.ts:1-12 states
// the same for the drill screens), so the guard reads the files as text and
// asserts on the shapes that matter — the same idiom drillGateWiring.test.ts
// and lockVisibilityWiring.test.ts already use for JSX behaviours nothing
// else here can reach.
//
// Every read below lives INSIDE a test() body, deliberately the opposite of
// lesson-siblings.test.ts:39, which reads app/lessonoverview.tsx at module
// scope. That file can do that because it is the one screen no other plan in
// this phase touches concurrently; this file guards two screens two tasks of
// THIS SAME plan just wrote, so a module-scope read would freeze the content
// at import time and could silently pass against stale bytes if a later edit
// in this same run changed the file after node cached the module graph.
// Plan 08 repairs lesson-siblings.test.ts's own module-scope read when it
// deletes lessonoverview.tsx — this file is why that fix is needed, not an
// example that the old pattern was fine.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

const appDir = resolve(dirname(fileURLToPath(import.meta.url)), '../../app');
const srcDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// Every .ts/.tsx file under app/ and src/, recursively, excluding this file's
// own directory noise (node_modules never lives under either).
function walkSourceFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...walkSourceFiles(p));
    else if (/\.tsx?$/.test(entry)) out.push(p);
  }
  return out;
}
// This checkout's app/*.tsx files carry Windows line endings; a literal
// multiline/source match false-negatives on every file here without
// normalizing first (the same note drillGateWiring.test.ts:13-17 states).
const readScreen = (name: string) => readFileSync(resolve(appDir, `${name}.tsx`), 'utf8').replace(/\r\n/g, '\n');

test('both routes normalise ?key= from an array before it touches content.lesson', () => {
  for (const name of ['act', 'fiche']) {
    const src = readScreen(name);
    ok(src.includes('Array.isArray(params.key)'), `${name}.tsx must normalise params.key`);
    // The normalised local (rawKey in act.tsx, raw in fiche.tsx) is what
    // reaches content.lesson — never params.key itself.
    ok(!/content\.lesson\(params\.key\)/.test(src), `${name}.tsx must not pass params.key straight into content.lesson`);
    ok(/content\.lesson\(/.test(src), `${name}.tsx must resolve the key through content.lesson`);
  }
});

test('act.tsx also normalises ?act= from an array', () => {
  const src = readScreen('act');
  ok(src.includes('Array.isArray(params.act)'), 'act.tsx must normalise params.act the same way as params.key');
});

test('act.tsx bounds-checks ?act= against acts.length before indexing L.acts', () => {
  const src = readScreen('act');
  ok(/Math\.min\(Math\.max\(0, Number\(rawAct/.test(src), 'act.tsx must clamp the act index with Math.min(Math.max(...))');
  // The clamp must be computed (actIx) BEFORE the first read of L.acts[...],
  // or a link naming act 99 indexes out of bounds before the guard runs.
  const clampAt = src.indexOf('const actIx =');
  const firstActsIndexAt = src.indexOf('acts[actIx]');
  ok(clampAt > 0, 'expected an actIx clamp assignment');
  ok(firstActsIndexAt > clampAt, 'L.acts must never be indexed before actIx is clamped');
});

test('both routes carry a dead-link guard for a null lesson', () => {
  for (const name of ['act', 'fiche']) {
    const src = readScreen(name);
    ok(/if\s*\(!L\)/.test(src), `${name}.tsx must guard a null lesson`);
  }
});

test('_layout.tsx registers both new routes, and the two screens they replaced are gone', () => {
  const src = readFileSync(resolve(appDir, '_layout.tsx'), 'utf8').replace(/\r\n/g, '\n');
  ok(/<Stack\.Screen\s+name="act"/.test(src), '_layout.tsx must register the act screen');
  ok(/name="fiche"/.test(src), '_layout.tsx must register the fiche sheet');
  // Flipped by plan 08, in the same commit that deletes the two screens
  // below and retargets lesson-siblings.test.ts — see that file's own
  // header for why the retarget and the deletion must land together.
  ok(!src.includes('name="lessonoverview"'), '_layout.tsx must no longer register the deleted lessonoverview screen');
  ok(!src.includes('name="missions"'), '_layout.tsx must no longer register the deleted missions screen');
});

test('no file under app/ or src/ still pushes a route string to the two deleted screens (D-33)', () => {
  // Route STRINGS only, not prose: this plan's own spine-layout.test.ts
  // header names lessonoverview.tsx:160 as the source of the flex fix it
  // carries forward, and content.ts's own DEV-PREVIEW-B101 comment names the
  // deleted route too — a bare word-level scan would fail this plan on its
  // own required historical comments. Scoped to the two literal shapes a
  // real route reference takes: a quoted path ('/lessonoverview') or a
  // Stack.Screen name attribute ("lessonoverview").
  // Excludes this guard's own file (its regex source necessarily spells out
  // the forbidden shape in order to name it) and useProgress.ts's v5
  // migration, which legitimately RECOGNISES the dead prefix in order to
  // drop it (`route.startsWith('/lessonoverview')`) — a different shape from
  // a PUSH (`pathname: '/lessonoverview'`), which is what this test guards.
  const self = fileURLToPath(import.meta.url);
  const migration = resolve(dirname(fileURLToPath(import.meta.url)), '../store/useProgress.ts');
  const files = [...walkSourceFiles(appDir), ...walkSourceFiles(srcDir)].filter((f) => f !== self && f !== migration);
  for (const f of files) {
    const src = readFileSync(f, 'utf8');
    ok(!/pathname:\s*'\/lessonoverview'|name="lessonoverview"/.test(src), `${f} still references the deleted /lessonoverview route`);
    ok(!/pathname:\s*'\/missions'|name="missions"/.test(src), `${f} still pushes to the deleted /missions route`);
  }
});

test('the formSheet registration for fiche stays inside Android\'s 3-detent ceiling', () => {
  const src = readFileSync(resolve(appDir, '_layout.tsx'), 'utf8').replace(/\r\n/g, '\n');
  const at = src.indexOf('name="fiche"');
  ok(at > 0, 'expected a fiche Stack.Screen registration to inspect');
  const block = src.slice(at, src.indexOf('/>', at));
  ok(/presentation:\s*'formSheet'/.test(block), 'fiche must use presentation: formSheet (D-38 verdict: a real Android bottom sheet)');
  const detents = block.match(/sheetAllowedDetents:\s*\[([^\]]*)\]/);
  ok(detents, 'expected sheetAllowedDetents on the fiche registration');
  const n = detents![1].split(',').filter((s) => s.trim().length > 0).length;
  ok(n <= 3, `Android allows at most 3 detents, found ${n}`);
  ok(!block.includes('1.0') && !/sheetAllowedDetents:\s*\[[^\]]*\b1\b/.test(block), 'the top detent must stay below 1.0 (D-38 defect 2: the grabber lands on the status bar clock)');
});

test('paywall.tsx\'s PAYWALL_COPY is unchanged and carries no key beyond the existing set (D-23)', () => {
  const src = readScreen('paywall');
  const at = src.indexOf('const PAYWALL_COPY');
  ok(at > 0, 'expected a PAYWALL_COPY declaration');
  const block = src.slice(at, src.indexOf('};', at));
  const keys = [...block.matchAll(/'gate:[a-z]+'/g)].map((m) => m[0]);
  const unique = new Set(keys);
  strictEqual(unique.size, 3, `PAYWALL_COPY must carry exactly its existing 3 gate keys, found: ${[...unique].join(', ')}`);
  ok(unique.has("'gate:levels'") && unique.has("'gate:coach'") && unique.has("'gate:roleplay'"), 'PAYWALL_COPY must not have lost or gained a gate key');
});

test('neither new screen puts flex or flexShrink inline on a <TX> tag (D-43)', () => {
  // The exact idiom sons-07-elision.test.ts:766-774 uses against ScenePlayer.tsx,
  // applied here to two files that guard has never read.
  for (const name of ['act', 'fiche']) {
    const src = readScreen(name);
    const offenders = (src.match(/<TX[^>]*>/g) ?? [])
      .filter((tag) => /style=\{\{[^}]*flex(?:Shrink)?\s*:/.test(tag))
      .map((tag) => tag.replace(/\s+/g, ' ').slice(0, 90));
    strictEqual(offenders.length, 0, `${name}.tsx puts flex on a <TX> directly, which clips the tail of a long line: ${offenders.join(' | ')}`);
  }
});

// 07.1-09: app/preroll.tsx is the same untrusted-input surface act.tsx and
// fiche.tsx already are (a deep link naming any lesson id) — same guard idiom.
test('preroll.tsx normalises ?key= from an array before it touches content.lesson, and carries a dead-link guard', () => {
  const src = readScreen('preroll');
  ok(src.includes('Array.isArray(params.key)'), 'preroll.tsx must normalise params.key');
  ok(!/content\.lesson\(params\.key\)/.test(src), 'preroll.tsx must not pass params.key straight into content.lesson');
  ok(/content\.lesson\(/.test(src), 'preroll.tsx must resolve the key through content.lesson');
  ok(/if\s*\(!L/.test(src), 'preroll.tsx must guard a null lesson');
});

test('preroll.tsx derives its stated shape from flattenNarration/stageRanges, never a hardcoded count (D-12)', () => {
  const src = readScreen('preroll');
  ok(src.includes('flattenNarration('), 'preroll.tsx must call flattenNarration');
  ok(src.includes('stageRanges('), 'preroll.tsx must call stageRanges');
  ok(!/\b(7|24)\s+(stages|passages)/.test(src), 'preroll.tsx must not hardcode sons.01.l1\'s own numbers');
  // D-12 names the mic moments AND how many stages hold them ("7 across 3").
  // The 2026-09-24 device pass found the sheet stating only the first half.
  ok(src.includes("replace('{ms}'"), 'preroll.tsx must fill {ms}, the count of stages holding a mic moment');
  ok(src.indexOf("replace('{ms}'") < src.indexOf("replace('{m}'"), '{ms} must be replaced before {m}, or "{m}" eats the front of "{ms}"');
});

test('prerollShape carries {ms} in both languages (D-12 "across N stages")', () => {
  const src = readFileSync(resolve(appDir, '../src/i18n/strings.ts'), 'utf8');
  const lines = src.split('\n').filter((l) => /prerollShape: '/.test(l));
  ok(lines.length === 2, `expected fr and en prerollShape, found ${lines.length}`);
  for (const l of lines) ok(l.includes('{ms}'), `prerollShape must state the mic stages: ${l.trim()}`);
});

test('_layout.tsx registers preroll with the same formSheet shape as fiche (one sheet mechanism, D-38)', () => {
  const src = readFileSync(resolve(appDir, '_layout.tsx'), 'utf8').replace(/\r\n/g, '\n');
  const at = src.indexOf('name="preroll"');
  ok(at > 0, 'expected a preroll Stack.Screen registration');
  const block = src.slice(at, src.indexOf('/>', at));
  ok(/presentation:\s*'formSheet'/.test(block), 'preroll must use presentation: formSheet, not a second sheet mechanism');
  ok(!block.includes('1.0') && !/sheetAllowedDetents:\s*\[[^\]]*\b1\b/.test(block), 'the top detent must stay below 1.0 (D-38 defect 2)');
});

test('neither new screen fixes a non-square height on anything text-bearing (D-44)', () => {
  // A square width===height pair is an icon/badge/dot container sized to a
  // glyph, not text flowing to an edge — the repo-wide header-button shape
  // (width:44,height:44 etc). Anything else with a bare `height:` (not
  // `minHeight:`) is the D-44 shape: it can clip a line's tail at font scale
  // 1.3 the same way a flex-on-TX does. subMission.logic.test.ts:432-437's
  // `height: 44` allowance is scoped to ReadingPages.tsx's own fixed chip
  // strip and is NOT cross-applied here.
  for (const name of ['act', 'fiche']) {
    const src = readScreen(name);
    const styleBlocks = src.match(/style=\{\{[^}]*\}\}/g) ?? [];
    for (const block of styleBlocks) {
      const height = block.match(/(?<!min)height:\s*(\d+)/);
      if (!height) continue;
      const width = block.match(/width:\s*(\d+)/);
      ok(
        width && width[1] === height[1],
        `${name}.tsx: a non-square height: (must be minHeight: for text) — ${block.slice(0, 100)}`,
      );
    }
  }
});

/* ─── Gap closure after the 07.1-11 device pass (2026-09-24) ─────────────── */

const readSrc = (rel: string) => readFileSync(resolve(srcDir, rel), 'utf8').replace(/\r\n/g, '\n');

test('LevelPanel selects a locked band instead of pushing the paywall (D-21/D-22)', () => {
  // Pushing /paywall from the panel row made a locked band's trail, and the
  // gate row pinned above it, unreachable for anyone without Première.
  const src = readSrc('components/LevelPanel.tsx');
  ok(!src.includes("pathname: '/paywall'"), 'LevelPanel.tsx must not route to /paywall; the gate row on the trail is the touchpoint');
  ok(/const onRowPress = \(l: Level\) => \{\s*onSelect\(l\);/.test(src), 'every panel row, locked or not, must call onSelect');
});

test('den.tsx honours ?band= only for a value in LEVELS', () => {
  const src = readScreen('den');
  ok(src.includes('useLocalSearchParams'), 'den.tsx must read its params for ealch://den?band=');
  ok(/\(LEVELS as readonly string\[\]\)\.includes\(wanted\)/.test(src), 'the band param must be checked against LEVELS before it is set');
});

test('den.tsx shows the B1 dev-preview banner on the B1 trail only', () => {
  const src = readScreen('den');
  ok(
    /__DEV__ && band === 'b1' && draftCount > 0/.test(src),
    'the DEV-PREVIEW-B1 banner must be gated on __DEV__ AND the b1 band',
  );
  // It used to open one hard-coded lesson. The whole draft band is merged into
  // the corpus now, so the trail renders all fourteen units itself and the
  // banner only says why they are there. A door to a single id would go stale
  // the moment the band grew, which is exactly what happened at fourteen.
  ok(
    !/content\.lesson\('b1\.01\.l1'\)/.test(src),
    'the banner must not hard-code a single draft lesson id',
  );
  ok(src.includes('DRAFT_LESSON_IDS'), 'the draft count must come from the overlay, not a literal');
});

test("LessonPager labels an act chapter card with the mission it opens, not mission 1", () => {
  const src = readSrc('components/LessonPager.tsx');
  ok(src.includes("currentEntry?.kind === 'act'") && src.includes('at(page + 1)'), 'an act opener must take the next section\'s mission number');
  ok(!src.includes("currentEntry.sectionIx : 0)"), 'the old fallback to section 0 must be gone from the header label');
});

test('lesson.tsx declares no hook after its early returns (first-lesson crash, 2026-09-24)', () => {
  // The LessonKeyIntro early return (`if (showKey) return ...`) ran before
  // `useRef` at the old line 524, so closing the intro rendered one more hook
  // than the render before and React threw on every new learner's first lesson.
  const src = readScreen('lesson');
  const body = src.slice(src.indexOf('function LessonScreenBody'));
  const firstEarly = body.search(/\n  if \(!L\) \{\n    return/);
  ok(firstEarly > 0, 'expected the `if (!L)` early return in LessonScreenBody');
  const after = body.slice(firstEarly);
  const end = after.search(/\n}\n/);
  const tail = end > 0 ? after.slice(0, end) : after;
  const hook = tail.match(/\n  (?:const|let) [^=\n]+= use[A-Z]\w*(?:<[^>\n]*>)?\(|\n  use[A-Z]\w*(?:<[^>\n]*>)?\(/);
  ok(!hook, `a hook is declared after LessonScreenBody's early returns: ${hook?.[0]?.trim()}`);
});

/* ─── UI audit, 2026-09-24 ────────────────────────────────────────────────── */

test('act.tsx counts done missions within the act, not the whole lesson', () => {
  // b1.01 act 03 read "13 / 7": the lesson-wide done set against the act's rows.
  const src = readScreen('act');
  ok(src.includes('const actDone = rows.filter((r) => done.has(r.ix)).length'), 'the act counter must intersect done with this act\'s rows');
  ok(!src.includes('`${done.size} / ${rows.length}`'), 'the lesson-wide done.size must not be shown over the act\'s row count');
});

test('act.tsx draws the act\'s chapter art when one is authored', () => {
  const src = readScreen('act');
  ok(/act\?\.opener\?\.imageRef \?/.test(src) && src.includes('<RichImage refKey={act.opener.imageRef}'), 'the act screen must render act.opener.imageRef');
});

test('an explicit mission tap opens the lesson with pick=1, and the recap offers Ignore', () => {
  ok(readScreen('act').includes("pick: '1'"), 'act.tsx mission rows must pass pick=1');
  const lesson = readScreen('lesson');
  ok(lesson.includes('if (!resume || picked) return setPreface(null);'), 'a picked mission must skip the warm-back/recap preface');
  ok(lesson.includes('onIgnore={'), 'the recap must be given an Ignore handler');
});

test('the Fiche and pre-roll sheets open at their single full detent (no drag, no half-height)', () => {
  const src = readFileSync(resolve(appDir, '_layout.tsx'), 'utf8').replace(/\r\n/g, '\n');
  for (const name of ['fiche', 'preroll']) {
    const at = src.indexOf(`name="${name}"`);
    const block = src.slice(at, src.indexOf('/>', at));
    ok(/sheetAllowedDetents:\s*\[0\.92\]/.test(block), `${name} must open at one 0.92 detent`);
  }
});

test('the den chip opens the Levels page; levels.tsx is registered', () => {
  ok(readScreen('den').includes("router.push('/levels')"), 'the level chip must open /levels');
  const layout = readFileSync(resolve(appDir, '_layout.tsx'), 'utf8');
  ok(layout.includes('name="levels"'), 'levels must be a registered Stack.Screen');
});
