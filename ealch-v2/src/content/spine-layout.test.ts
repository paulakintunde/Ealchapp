// Phase 07.1 plan 08: the D-43/D-44 source guard, extended past the two
// files plan 06 already reaches (PanelRow.tsx, LevelPanel.tsx,
// LanguagePanel.tsx, level-panel.test.ts) to cover every component and
// screen THIS phase writes that puts a title beside a glyph in a row —
// which is exactly the shape sons-07-elision.test.ts measured clipping on
// ScenePlayer.tsx, but ScenePlayer.tsx is the ONLY file that guard reads.
//
// Split with the two existing guards (so nothing here asserts the same
// thing twice on the same file for the same reason):
//   - spine-routes.test.ts (plan 05) already runs the D-43/D-44 flex/height
//     scan on app/act.tsx and app/fiche.tsx.
//   - level-panel.test.ts (plan 06) already runs it on PanelRow.tsx,
//     LevelPanel.tsx and LanguagePanel.tsx, plus its own row-anchor test
//     scoped to PanelRow's title.
// This file is the ONE list that reaches ALL SEVEN files at once (including
// TrailRow.tsx/TrailHeading.tsx, which neither of those two files reads),
// so a future reviewer has one place to check "is every row-shaped surface
// in this phase covered" rather than three. The two rules that name a
// SPECIFIC render site ("the act title", "the unit heading label" — the
// plan's own words) are scoped to TrailRow.tsx/TrailHeading.tsx, the two
// files that actually render those two labels; act.tsx/fiche.tsx's mission-
// and sibling-row titles are different UI elements already covered by
// spine-routes.test.ts's own D-43/D-44 pass, and PanelRow/LevelPanel/
// LanguagePanel's title render site is level-panel.test.ts's own anchor
// test — applying a second, differently-anchored copy of that check here
// would fail on legitimate, already-shipped markup (e.g. act.tsx's mission
// row title correctly uses numberOfLines, which is not "the act title").
//
// A FIFTH rule, new to this phase: no improvised copy. Every user-facing
// string in these files must come from `T`; a hardcoded accented-Latin
// string literal is exactly how a pre-roll sheet or a trail card could ship
// hardcoded French. Suppressible per line with `// i18n-exempt: <reason>`
// for a genuine non-copy case (a regex, a unicode constant).
//
// Every read lives inside a test() body (the idiom spine-routes.test.ts and
// level-panel.test.ts both already use for the identical reason): this file
// guards two components (TrailRow.tsx, TrailHeading.tsx) this SAME plan's
// own earlier task just wrote.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

const componentsDir = resolve(dirname(fileURLToPath(import.meta.url)), '../components');
const appDir = resolve(dirname(fileURLToPath(import.meta.url)), '../../app');

// One named array, per this plan's own instruction — a future component is
// one line to add here.
const FILES: { name: string; dir: 'components' | 'app' }[] = [
  { name: 'TrailRow', dir: 'components' },
  { name: 'TrailHeading', dir: 'components' },
  { name: 'fiche', dir: 'app' },
  { name: 'act', dir: 'app' },
  { name: 'PanelRow', dir: 'components' },
  { name: 'LevelPanel', dir: 'components' },
  { name: 'LanguagePanel', dir: 'components' },
  // 07.1-09: the two extracted lock/paywall components and the pre-roll
  // sheet — the three files this plan adds to the row-shaped-surface family.
  { name: 'PremiereLockTag', dir: 'components' },
  { name: 'TrailGateRow', dir: 'components' },
  { name: 'preroll', dir: 'app' },
];

// Normalize CRLF -> LF: this checkout's *.tsx files carry Windows line
// endings (drillGateWiring.test.ts:13-17 states the same reason).
const readFile = (f: { name: string; dir: 'components' | 'app' }) =>
  readFileSync(resolve(f.dir === 'components' ? componentsDir : appDir, `${f.name}.tsx`), 'utf8').replace(
    /\r\n/g,
    '\n',
  );

test('spine-layout.test.ts covers at least 7 files', () => {
  ok(FILES.length >= 7, `expected at least 7 files, found ${FILES.length}`);
});

test('none of the seven puts flex or flexShrink inline on a <TX> tag (D-43)', () => {
  // The idiom sons-07-elision.test.ts:766-774 uses against ScenePlayer.tsx —
  // the one file that guard reads, and the reason this one exists.
  for (const f of FILES) {
    const src = readFile(f);
    const offenders = (src.match(/<TX[^>]*>/g) ?? [])
      .filter((tag) => /style=\{\{[^}]*flex(?:Shrink)?\s*:/.test(tag))
      .map((tag) => tag.replace(/\s+/g, ' ').slice(0, 90));
    strictEqual(
      offenders.length,
      0,
      `${f.name}.tsx puts flex on a <TX> directly, which clips the tail of a long line: ${offenders.join(' | ')}`,
    );
  }
});

test('none of the seven fixes a non-square height on anything text-bearing (D-44)', () => {
  for (const f of FILES) {
    const src = readFile(f);
    const styleBlocks = src.match(/style=\{\{[^}]*\}\}/g) ?? [];
    for (const block of styleBlocks) {
      const height = block.match(/(?<!min)height:\s*(\d+)/);
      if (!height) continue;
      // A hairline decorative bar (the sheet grabber, width 40 / height 4)
      // is not text either — no type role in ROLE (type.logic.ts) renders
      // anything under 11px, so a box this short never holds a glyph to clip.
      if (Number(height[1]) <= 6) continue;
      const width = block.match(/width:\s*(\d+)/);
      ok(
        width && width[1] === height[1],
        `${f.name}.tsx: a non-square height: (must be minHeight: for text) — ${block.slice(0, 100)}`,
      );
    }
  }
});

test('no accented-Latin string literal ships without a T. lookup or an i18n-exempt comment (new, D-43/D-44 sibling rule)', () => {
  // Any character in the accented-Latin range inside a plain string literal
  // is an improvised French string. `npm run test:i18n` only checks that the
  // fr/en key sets match each other — it is blind to a hardcoded literal,
  // which is exactly how a hardcoded French string would ship undetected.
  const ACCENTED = /[À-ſ]/;
  for (const f of FILES) {
    const src = readFile(f);
    const lines = src.split('\n');
    lines.forEach((line, ix) => {
      if (!ACCENTED.test(line)) return;
      if (line.includes('i18n-exempt:')) return;
      // A plain string literal: quotes containing the accented character.
      const literal = line.match(/'[^']*[À-ſ][^']*'|"[^"]*[À-ſ][^"]*"/);
      ok(
        !literal,
        `${f.name}.tsx:${ix + 1} has an improvised accented string literal (use T. or add // i18n-exempt:): ${line.trim().slice(0, 100)}`,
      );
    });
  }
});

test('nothing reopens a row between the flex wrapper and the act title (TrailRow.tsx)', () => {
  // The anchored half of sons-07-elision.test.ts's rule: "the row that clips
  // is the one the text SHARES with an unwrapped sibling," pinned at the
  // exact render site of the act title (`row.title`), not the first
  // occurrence of the identifier. Not a blind 400-character scan (PanelRow's
  // own outer row necessarily opens `flexDirection: 'row'` before its own
  // wrapper comment, by construction, every time — see level-panel.test.ts's
  // identical note).
  const src = readFile({ name: 'TrailRow', dir: 'components' });
  const wrapperAt = src.lastIndexOf('{/* flex lives on the wrapper', src.indexOf('{row.title}'));
  ok(wrapperAt > 0, "TrailRow.tsx dropped the 'flex lives on the wrapper' comment before the act title");
  const titleAt = src.indexOf('{row.title}', wrapperAt);
  ok(titleAt > wrapperAt, 'the act title is not rendered after its own wrapper comment');
  const window = src.slice(wrapperAt, titleAt);
  ok(
    !/flexDirection:\s*'row'/.test(window),
    "a second row opened between TrailRow's flex wrapper and the act title — the exact shape that clipped ScenePlayer's French line",
  );
});

test('nothing reopens a row between the flex wrapper and the unit heading label (TrailHeading.tsx)', () => {
  const src = readFile({ name: 'TrailHeading', dir: 'components' });
  const wrapperAt = src.indexOf('{/* flex lives on the wrapper');
  ok(wrapperAt > 0, "TrailHeading.tsx dropped the 'flex lives on the wrapper' comment");
  const titleAt = src.indexOf('{row.label}', wrapperAt);
  ok(titleAt > wrapperAt, 'the unit heading label is not rendered after its own wrapper comment');
  const window = src.slice(wrapperAt, titleAt);
  ok(
    !/flexDirection:\s*'row'/.test(window),
    "a second row opened between TrailHeading's flex wrapper and the unit heading label",
  );
});

test('neither the act title nor the unit heading label uses numberOfLines', () => {
  const trailRow = readFile({ name: 'TrailRow', dir: 'components' });
  const titleAt = trailRow.indexOf('{row.title}');
  ok(titleAt > 0, 'TrailRow.tsx no longer renders {row.title}');
  ok(
    !/numberOfLines/.test(trailRow.slice(Math.max(0, titleAt - 120), titleAt)),
    'TrailRow.tsx must not truncate the act title with numberOfLines',
  );

  const trailHeading = readFile({ name: 'TrailHeading', dir: 'components' });
  const labelAt = trailHeading.indexOf('{row.label}');
  ok(labelAt > 0, 'TrailHeading.tsx no longer renders {row.label}');
  ok(
    !/numberOfLines/.test(trailHeading.slice(Math.max(0, labelAt - 120), labelAt)),
    'TrailHeading.tsx must not truncate the unit heading label with numberOfLines',
  );
});

test('TrailRow and TrailHeading take their row as a prop and read no store', () => {
  for (const name of ['TrailRow', 'TrailHeading'] as const) {
    const src = readFile({ name, dir: 'components' });
    ok(!/useStore|useProgress|useEntitlement|useUI\b/.test(src), `${name}.tsx must not read a store — den.tsx supplies every value as a prop`);
    ok(/row\s*[,:]/.test(src), `${name}.tsx must take its TrailRow as a prop named row`);
  }
});

test('every pressable in TrailRow and TrailHeading carries accessibilityRole, and locked stays disabled-but-mounted (D-22)', () => {
  for (const name of ['TrailRow', 'TrailHeading'] as const) {
    const src = readFile({ name, dir: 'components' });
    const pressCount = (src.match(/<Press\b/g) ?? []).length;
    ok(pressCount > 0, `${name}.tsx: expected at least one Press`);
    const roleCount = (src.match(/accessibilityRole=/g) ?? []).length;
    ok(roleCount >= pressCount, `${name}.tsx: ${pressCount} Press elements, only ${roleCount} accessibilityRole`);
  }
  const trailRow = readFile({ name: 'TrailRow', dir: 'components' });
  ok(/accessibilityState=\{\{\s*disabled:\s*row\.locked/.test(trailRow), 'TrailRow.tsx must announce a locked row as disabled while staying mounted (D-22)');
});
