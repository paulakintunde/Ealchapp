// Phase 07.1 / D-36: "ANSWERS ARE NOT GLOSSES" (english.logic.ts L15-17,
// Type.tsx's `gloss` prop doc at :83-86) has been the rule since the toggle
// shipped, and has NEVER had a test — it existed as a comment and a prop doc,
// nothing else. One careless `gloss` on an answer site breaks it silently,
// and this phase makes that MORE likely, not less: 'onDemand' adds a reveal
// affordance that did not exist before, and a reveal is exactly the kind of
// surface someone reaches for when a translation feels "hidden".
//
// All thirteen existing <TX gloss> call sites were checked by hand before
// this phase (07.1-07-PLAN.md's own <the_whole_surface> table) and none is
// an answer. This file is what keeps that true, not a comment.
//
// The real flashcard-back D-16 surface is `app/flashcards.tsx` — 07.1-
// VALIDATION.md's D-17 row found it UNCOVERED on hardware (b1.01 has no
// English-answer flashcard), and it is NOT one of the thirteen `<TX gloss>`
// sites (it renders `card.en` as the back's answer via a bare `<TX>`, quite
// correctly never marked `gloss`). LessonDeck.tsx's and WordCardXL.tsx's own
// `gloss` sites are supplementary translations on a display card, not a
// scored "back" — they are two of the known 13, already vetted. Anchoring
// this guard's flashcard-back check on `app/flashcards.tsx` instead of
// LessonDeck.tsx/WordCardXL.tsx (which the plan's own read_first list named)
// is a deliberate correction: those two files have no flip/answer mechanic at
// all, and asserting "no gloss in WordCardXL's meaning block" would either be
// vacuous or would delete one of the 13 known-safe sites. See the SUMMARY.
//
// Anchored on structural landmarks (a JSX comment marker, a specific `.map(`
// call), never on the first occurrence of a variable name —
// sons-07-elision.test.ts records that the wrong anchor let a real bug pass
// once already.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
// Normalize CRLF -> LF: this checkout's files carry Windows line endings, and
// every literal/structural match below would false-negative without it
// (bandFallback.test.ts, drillGateWiring.test.ts).
const readSrc = (rel: string) => readFileSync(resolve(root, rel), 'utf8').replace(/\r\n/g, '\n');

function walkTsx(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (name === 'node_modules' || name.startsWith('.')) continue;
      walkTsx(full, out);
    } else if (name.endsWith('.tsx') && !name.includes('.test.')) {
      out.push(full);
    }
  }
  return out;
}

const GLOSS_TX = /<TX[^>]*\bgloss\b/g;

/** A real JSX `gloss` prop on a `<TX>` call, never a bare occurrence of the
 *  word "gloss" — a plain `.includes('gloss')` false-positives on ordinary
 *  English prose in a comment (flashcards.tsx:544 says "The gloss and the
 *  teaching note live with the answer" right beside the very block this file
 *  checks), the exact literal-grep collision 07.1-04-SUMMARY.md and
 *  07.1-06-SUMMARY.md both already documented for other guards. */
function hasGlossProp(block: string): boolean {
  return /<TX[^>]*\bgloss\b/.test(block);
}

// The known 13, by file, relative to `ealch-v2/`. A count that drifts from
// this — up OR down, in ANY file — is a decision this test forces someone to
// make on purpose, not an accident that ships quiet.
const KNOWN_GLOSS_SITES: Record<string, number> = {
  'src/components/LessonDeck.tsx': 1,
  'src/components/LessonRich.tsx': 1,
  'src/components/LessonSection.tsx': 2,
  'src/components/MissionRich.tsx': 5,
  'src/components/ScenePlayer.tsx': 3,
  'src/components/WordCardXL.tsx': 1,
};

test('exactly 13 <TX gloss> call sites exist, all in the known files, at the known counts', () => {
  let total = 0;
  for (const [file, expected] of Object.entries(KNOWN_GLOSS_SITES)) {
    const src = readSrc(file);
    const matches = src.match(GLOSS_TX) ?? [];
    strictEqual(matches.length, expected, `${file} must carry exactly ${expected} gloss site(s), found ${matches.length}`);
    total += matches.length;
  }
  strictEqual(total, 13, 'the total across every known file must stay 13');
});

test('no file outside the known list carries a <TX gloss> call site — a 14th is a decision, not an accident', () => {
  const known = new Set(Object.keys(KNOWN_GLOSS_SITES).map((f) => resolve(root, f)));
  const allTsx = [...walkTsx(resolve(root, 'src')), ...walkTsx(resolve(root, 'app'))];
  const unexpected: string[] = [];
  for (const file of allTsx) {
    if (known.has(file)) continue;
    const src = readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
    const matches = src.match(GLOSS_TX) ?? [];
    if (matches.length > 0) unexpected.push(`${file} (${matches.length})`);
  }
  strictEqual(unexpected.length, 0, `unexpected gloss site(s): ${unexpected.join(', ')}`);
});

test('Type.tsx is the only file under src/components that returns null guarded by gloss', () => {
  const files = walkTsx(resolve(root, 'src/components'));
  const hidingFiles: string[] = [];
  for (const file of files) {
    const src = readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
    if (/gloss[^;]*return null/.test(src) || /if \(gloss[\s\S]{0,40}return null/.test(src)) {
      hidingFiles.push(file);
    }
  }
  deepEqualBasenames(hidingFiles, ['Type.tsx']);
});

function deepEqualBasenames(files: string[], expected: string[]) {
  const basenames = files.map((f) => f.split(/[\\/]/).pop());
  strictEqual(basenames.length, expected.length, `expected exactly ${expected.join(', ')}, found ${basenames.join(', ') || 'none'}`);
  for (const e of expected) ok(basenames.includes(e), `${e} must be among the files that hide on gloss`);
}

// ── D-16: the three real answer surfaces the toggle must never touch ──────

test('the flashcard BACK (app/flashcards.tsx) never carries a gloss prop on its answer', () => {
  const src = readSrc('app/flashcards.tsx');
  const backStart = src.indexOf('{/* Back */}');
  ok(backStart !== -1, 'flashcards.tsx must still carry its Back-face marker comment');
  const backEnd = src.indexOf('</Animated.View>', backStart);
  ok(backEnd !== -1, 'flashcards.tsx must still close the Back face with </Animated.View>');
  const backBlock = src.slice(backStart, backEnd);
  ok(!hasGlossProp(backBlock), 'the flashcard back (the answer) must never carry a gloss prop — D-16');
  // Sanity: the anchor is the right block — it really is where the English
  // answer prints, so a future refactor that moves `card.en` out from under
  // this comment fails loudly here instead of the guard going quietly inert.
  ok(backBlock.includes('card.en'), 'the Back-face block must still render the English answer (card.en) directly');
});

test('the quiz option that IS the answer never carries a gloss prop (LessonDeck.tsx QuestionModal)', () => {
  const src = readSrc('src/components/LessonDeck.tsx');
  const start = src.indexOf('{(question.opts ?? []).map((o, i) => {');
  ok(start !== -1, 'QuestionModal must still map question.opts by this exact shape');
  const end = src.indexOf('{picked !== null && question.why', start);
  ok(end !== -1, 'QuestionModal must still follow the options with the why-explanation branch');
  const block = src.slice(start, end);
  ok(!hasGlossProp(block), 'a quiz option must never carry a gloss prop — it IS the answer, D-16');
  ok(block.includes('<TX role="body">{o}</TX>'), 'sanity: the option text must still render as plain, unmarked TX');
});

test('the exam-roundup MCQ option that IS the answer never carries a gloss prop (QuizRoundsView.tsx)', () => {
  const src = readSrc('src/components/QuizRoundsView.tsx');
  const start = src.indexOf('{opts.map((o, i) => {');
  ok(start !== -1, 'McqCard must still map opts by this exact shape');
  const end = src.indexOf('{picked !== null && question.why', start);
  ok(end !== -1, 'McqCard must still follow its options with the why-explanation branch');
  const block = src.slice(start, end);
  ok(!hasGlossProp(block), 'an MCQ option must never carry a gloss prop — it IS the answer, D-16');
});

test('the inline drill-check option that IS the answer never carries a gloss prop (QuizRoundsView.tsx)', () => {
  const src = readSrc('src/components/QuizRoundsView.tsx');
  const start = src.indexOf('{drill.opts!.map((o, i) => {');
  ok(start !== -1, 'the inline drill check must still map drill.opts by this exact shape');
  const end = src.indexOf('{answered !== null && drill.why', start);
  ok(end !== -1, 'the inline drill check must still follow its options with the why-explanation branch');
  const block = src.slice(start, end);
  ok(!hasGlossProp(block), 'a drill-check option must never carry a gloss prop — it IS the answer, D-16');
});
