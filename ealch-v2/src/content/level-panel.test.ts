// Phase 07.1 plan 06: a source-text guard on PanelRow.tsx, LevelPanel.tsx and
// LanguagePanel.tsx — the 44px floor (D-07/D-44) and the flex-on-a-TX trap
// (D-43) sons-07-elision.test.ts:735-796 discovered on ScenePlayer.tsx, but
// only on ScenePlayer.tsx. Every one of these three new files puts a title
// beside a glyph (a leading disc, a trailing progress/lock read) in a row,
// which is exactly the shape that clipped. Plan 08 extends the FILES array
// below to cover TrailRow.tsx and TrailHeading.tsx — one line, per this
// file's own instruction.
//
// Every read lives inside a test() body, not at module scope: this file
// guards components two tasks of THIS SAME plan just wrote (the idiom
// spine-routes.test.ts:11-20 documents for the identical reason).
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

const componentsDir = resolve(dirname(fileURLToPath(import.meta.url)), '../components');
const appDir = resolve(dirname(fileURLToPath(import.meta.url)), '../../app');
const storeDir = resolve(dirname(fileURLToPath(import.meta.url)), '../store');

// Named array, per this plan's own instruction, so plan 08 extends coverage
// to TrailRow.tsx/TrailHeading.tsx in one line rather than restating the test
// bodies below.
const FILES = ['PanelRow', 'LevelPanel', 'LanguagePanel'] as const;

// Normalize CRLF -> LF: this checkout's src/components/*.tsx files carry
// Windows line endings (drillGateWiring.test.ts:13-17 states the same reason).
const readComponent = (name: string) =>
  readFileSync(resolve(componentsDir, `${name}.tsx`), 'utf8').replace(/\r\n/g, '\n');

test('none of the three puts flex or flexShrink inline on a <TX> tag (D-43)', () => {
  // The exact idiom sons-07-elision.test.ts:766-774 and
  // spine-routes.test.ts:106-116 use, applied to three files neither guard
  // reads.
  for (const name of FILES) {
    const src = readComponent(name);
    const offenders = (src.match(/<TX[^>]*>/g) ?? [])
      .filter((tag) => /style=\{\{[^}]*flex(?:Shrink)?\s*:/.test(tag))
      .map((tag) => tag.replace(/\s+/g, ' ').slice(0, 90));
    strictEqual(
      offenders.length,
      0,
      `${name}.tsx puts flex on a <TX> directly, which clips the tail of a long line: ${offenders.join(' | ')}`,
    );
  }
});

test('none of the three fixes a non-square height on anything text-bearing (D-44)', () => {
  // Same idiom as spine-routes.test.ts:118-139. A square width===height pair
  // is an icon/badge container sized to a glyph, not text flowing to an
  // edge, and is exempt. subMission.logic.test.ts:432-437's `height: 44`
  // allowance is scoped to ReadingPages.tsx's own fixed chip strip and is
  // NOT cross-applied here — every text-bearing row in these three files
  // must use minHeight so it grows with the OS font scale.
  for (const name of FILES) {
    const src = readComponent(name);
    const styleBlocks = src.match(/style=\{\{[^}]*\}\}/g) ?? [];
    for (const block of styleBlocks) {
      const height = block.match(/(?<!min)height:\s*(\d+)/);
      if (!height) continue;
      // A hairline decorative bar (the sheet grabber both panels copy
      // verbatim from BottomSheet.tsx:78, width 40 / height 4) is not text
      // either — no type role in ROLE (type.logic.ts) renders anything
      // under 11px, so a box this short never holds a glyph to clip.
      if (Number(height[1]) <= 6) continue;
      const width = block.match(/width:\s*(\d+)/);
      ok(
        width && width[1] === height[1],
        `${name}.tsx: a non-square height: (must be minHeight: for text) — ${block.slice(0, 100)}`,
      );
    }
  }
});

test('nothing reopens a row between PanelRow\'s flex wrapper and the title it renders', () => {
  // The anchored half of sons-07-elision.test.ts's rule, extended to the one
  // <TX> that ever renders a band name or a language-mode label: PanelRow.tsx's
  // title, the shared row both LevelPanel and LanguagePanel render through.
  //
  // NOT a blind "no flexDirection: 'row' in the 400 characters before the
  // TX" scan: PanelRow's own outer Press IS a row (it has to be — that row is
  // what lays the leading disc, the title column and the trailing read out
  // side by side), and that row's own `flexDirection: 'row'` sits well inside
  // 400 characters of the title in this file, by construction, every time.
  // A blind distance check would flag the exact shape the plan's own
  // interfaces block names as "the row analog to copy" — BottomSheet.tsx's
  // vocab-primer row, already shipped at minHeight 56. The measured finding
  // was never "a row exists nearby"; it was "the TEXT shares a row with a
  // sibling WITHOUT a dedicated flex:1 wrapper of its own" (ScenePlayer.tsx's
  // bubble put the icon beside the French with no wrapper at all). D-43's own
  // fix is precisely a dedicated flex:1 wrapper — so the structural invariant
  // this test pins is the boundary of THAT wrapper: nothing opens a SECOND
  // row between the wrapper comment and the title itself.
  const src = readComponent('PanelRow');
  const wrapperAt = src.indexOf('{/* flex lives on the wrapper');
  ok(wrapperAt > 0, "PanelRow.tsx dropped the 'flex lives on the wrapper' comment the next reader needs");
  const titleAt = src.indexOf('{title}', wrapperAt);
  ok(titleAt > wrapperAt, 'the title is not rendered after its own wrapper comment');
  const window = src.slice(wrapperAt, titleAt);
  ok(
    !/flexDirection:\s*'row'/.test(window),
    'a second row opened between the flex wrapper and the title — that is the exact shape that clipped ScenePlayer\'s French line',
  );
});

test('LevelPanel maps LEVELS and never restates the band list', () => {
  const src = readComponent('LevelPanel');
  ok(/LEVELS\.map\(/.test(src), 'LevelPanel.tsx must map LEVELS, not a literal band list');
  ok(
    !/\[\s*'sons'\s*,\s*'a1'\s*,\s*'a2'\s*,\s*'b1'/.test(src),
    'LevelPanel.tsx restates the seven-band list literally — it must derive from LEVELS instead',
  );
});

test('every pressable row in all three carries an a11y role and state', () => {
  // Scoped to the ui-kit `Press` primitive (PanelRow's own row, and each
  // panel's header chip) — the same primitive every tappable in this app
  // goes through (ui.tsx:25-42). The backdrop Pressable both panels copy from
  // BottomSheet.tsx:59 is a scrim, not a row, and BottomSheet.tsx's own
  // backdrop carries no accessibilityRole either — that precedent is why it
  // is not counted here.
  for (const name of FILES) {
    const src = readComponent(name);
    const pressCount = (src.match(/<Press\b/g) ?? []).length;
    ok(pressCount > 0, `${name}.tsx: expected at least one Press`);
    const roleCount = (src.match(/accessibilityRole=/g) ?? []).length;
    const stateCount = (src.match(/accessibilityState=/g) ?? []).length;
    ok(roleCount >= pressCount, `${name}.tsx: ${pressCount} Press elements, only ${roleCount} accessibilityRole`);
    ok(stateCount >= pressCount, `${name}.tsx: ${pressCount} Press elements, only ${stateCount} accessibilityState`);
  }
});

test('LanguagePanel imports PanelRow and declares exactly three mode rows (D-13)', () => {
  const src = readComponent('LanguagePanel');
  ok(/import\s*\{[^}]*PanelRow[^}]*\}\s*from\s*'\.\/PanelRow'/.test(src), 'LanguagePanel.tsx must build on PanelRow');
  const modeKeys = new Set((src.match(/key:\s*'(fr|both|onDemand)'/g) ?? []).map((m) => m.slice(5)));
  strictEqual(modeKeys.size, 3, `LanguagePanel.tsx must declare exactly the three D-13 modes, found: ${[...modeKeys].join(', ')}`);
});

test('the third mode row never implies answers hide (D-16)', () => {
  // english.logic.ts:15-17's own rule: a flashcard back, a quiz meaning and a
  // glossary tap stay visible in ALL three language-control states. Checked
  // against the real authored copy (plan 04's strings.ts, unmodified by this
  // plan) rather than against LanguagePanel.tsx, which only references the
  // key — the copy itself is what could accidentally promise the wrong thing.
  const i18nDir = resolve(dirname(fileURLToPath(import.meta.url)), '../i18n');
  const src = readFileSync(resolve(i18nDir, 'strings.ts'), 'utf8').replace(/\r\n/g, '\n');
  const subs = [...src.matchAll(/langModeOnDemandSub:\s*'([^']*)'/g)].map((m) => m[1]);
  strictEqual(subs.length, 2, 'expected langModeOnDemandSub authored in both language tables');
  for (const sub of subs) {
    ok(
      !/réponses?\s+(?:restent|reste)\s+cachée?s?/i.test(sub) && !/answers?\s+(?:stay|are)\s+hidden/i.test(sub),
      `langModeOnDemandSub must not imply answers hide: "${sub}"`,
    );
  }
});

test('LanguagePanel reads no store and imports nothing from english.logic (prop-driven)', () => {
  const src = readComponent('LanguagePanel');
  ok(!/useStore|useShowEnglish/.test(src), 'LanguagePanel.tsx must not read a store — plan 07 wires it without editing this file');
  ok(!/english\.logic/.test(src), 'LanguagePanel.tsx must not import from english.logic.ts');
  ok(!/accessibilityRole="switch"/.test(src), 'LanguageChip has three states, not two — it must not read as a switch');
  ok(/langModeOnDemand\b/.test(src), 'LanguagePanel.tsx must reference the third mode');
});

test("app/paywall.tsx's PAYWALL_COPY is unchanged (D-23)", () => {
  // Not a literal count (spine-routes.test.ts:96-104's own version asserts
  // exactly 3, and by the time this test runs the file already carries a
  // fourth, 'gate:examiner', added by work outside this plan) — this plan's
  // own obligation is narrower: it must not add a `from` value or a
  // PAYWALL_COPY key of its own, and 'gate:levels' (what a locked level-panel
  // row routes to) must still resolve.
  const src = readFileSync(resolve(appDir, 'paywall.tsx'), 'utf8').replace(/\r\n/g, '\n');
  const block = src.slice(src.indexOf('PAYWALL_COPY'), src.indexOf('PAYWALL_COPY') + 2000);
  const keys = [...block.matchAll(/'gate:[a-z]+'/g)].map((m) => m[0]);
  const unique = new Set(keys);
  ok(unique.size >= 3, `PAYWALL_COPY lost a gate key, found only: ${[...unique].join(', ')}`);
  ok(unique.has("'gate:levels'"), 'PAYWALL_COPY must still carry gate:levels');
  ok(!unique.has("'gate:panel'") && !unique.has("'gate:language'"), 'this plan must not add a PAYWALL_COPY key of its own');
});

test('src/store/entitlement.logic.ts is unchanged (D-24): the gating rule stays FREE_BANDS alone', () => {
  const src = readFileSync(resolve(storeDir, 'entitlement.logic.ts'), 'utf8').replace(/\r\n/g, '\n');
  ok(/export const FREE_BANDS = \['sons', 'a1'\] as const;/.test(src), 'FREE_BANDS must stay exactly sons+a1 — this plan defines no second gating authority');
});
