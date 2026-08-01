// Guards sons.06.l1 "Les lettres muettes" — the first Lesson Architecture v2
// lesson, and the proof that the v2 model works end to end.
//
// The lesson body lives in the admin repo (ealch-admin/scripts/data/), because
// that is where content is authored before it is published into seed.json.
// This test runs against it directly so the lesson is checked at AUTHORING
// time, not only once it has shipped. When the batch has been applied and the
// lesson exists in seed.json, the seed copy is checked too.
//
// Every assertion here is one line of the brief's self-check list.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { formatIssues, quizQuestions, validateItem, validateLesson, type Lesson } from './schema.ts';
import { formatDensity, validateDensity } from './density.logic.ts';
import { silentIndicesValid } from './silent.logic.ts';
import { hasSlow, pendingRecordings, referencedRecordingIds } from './lessonAudio.logic.ts';
import { checkpointFor, releasedThrough, resumePlan, stoppingPoints } from './acts.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));

// The admin repo is a sibling checkout. Skip cleanly when it is absent (the
// app can be built on its own) rather than failing the suite.
let LESSON: Lesson | null = null;
let REFRAME = '';
let ITEM_IDS = new Set<string>();
let CORPUS: { id: string; fr: string; silent: number[]; respell?: string }[] = [];

try {
  const corpus = await import('../../../ealch-admin/scripts/data/muettes-corpus.ts');
  const lesson = await import('../../../ealch-admin/scripts/data/muettes-lesson.ts');
  CORPUS = corpus.MUETTES;
  ITEM_IDS = new Set(corpus.MUETTES_IDS);
  LESSON = lesson.MUETTES_LESSON;
  REFRAME = lesson.REFRAME;
} catch {
  // Not available; every test below no-ops.
}

const skip = !LESSON;

/** Every authored string in the lesson. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

test('the lexeme corpus is valid and complete', { skip }, () => {
  strictEqual(CORPUS.length, 63, 'all 63 words present');
  const asItems = CORPUS.map((w) => {
    const { silent: _s, family: _f, ...rest } = w as Record<string, unknown>;
    return rest;
  });
  const issues = asItems.flatMap((i) => validateItem(i, String((i as { id: string }).id)));
  strictEqual(issues.length, 0, formatIssues(issues));
});

test('every silent index points at a real letter in its own word', { skip }, () => {
  // The off-by-one class of bug: an index past the end greys nothing, and an
  // index one short greys the WRONG letter, teaching the opposite of the rule.
  for (const w of CORPUS) {
    ok(silentIndicesValid(w.fr, w.silent), `${w.id} "${w.fr}" has bad silent indices ${JSON.stringify(w.silent)}`);
  }
});

test('the lesson passes the app schema', { skip }, () => {
  const issues = validateLesson(LESSON!);
  strictEqual(issues.length, 0, formatIssues(issues));
  strictEqual(LESSON!.id, 'sons.06.l1');
  strictEqual(LESSON!.unitId, 'sons.06');
  strictEqual(LESSON!.level, 'sons');
  strictEqual(LESSON!.tag, 'SONS · LEÇON 06');
});

test('the lesson passes every density rule', { skip }, () => {
  // The brief's claim: the content was checked against these rules before it
  // was handed over, so a failure here means the VALIDATOR is wrong.
  const issues = validateDensity(LESSON!, ITEM_IDS);
  strictEqual(issues.length, 0, formatDensity(issues));
});

test('the mission spine is present and correctly ordered', { skip }, () => {
  // The spine is a required BACKBONE, not a fixed length. A lesson may carry
  // more missions than the canonical twenty when its material genuinely needs
  // them: some content has its own shape, and forcing it into a fixed slot
  // count is the same mistake as forcing it into a fixed screen count. What
  // must hold is that every backbone mission is present and that the teaching
  // ORDER is intact — the trap is taught after the families that create it,
  // and everything is proved last.
  const ids = LESSON!.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];

  const backbone = [
    's01-scene', 's02-goals', 's03-anchors', 's04-grid', 's05-families',
    's06-trap', 's07-inhibition', 's08-flashcards', 's09-examples',
    's10-dictation', 's11-listening', 's12-speak', 's13-scenario',
    's14-errors', 's15-listen', 's16-reading', 's17-review', 's18-progress',
    's19-quiz', 's20-roundup',
  ];
  for (const id of backbone) ok(ids.includes(id), `backbone mission ${id} is present`);

  // Relative order of the backbone, ignoring anything inserted between.
  const positions = backbone.map((id) => ids.indexOf(id));
  for (let i = 1; i < positions.length; i++) {
    ok(positions[i] > positions[i - 1], `${backbone[i]} comes after ${backbone[i - 1]}`);
  }

  // The quiz is second to last and the roundup closes, whatever else is added.
  strictEqual(ids[ids.length - 1], 's20-roundup');
  strictEqual(ids[ids.length - 2], 's19-quiz');
});

test('the quiz is 4 rounds of 8, every question answerable and explained', { skip }, () => {
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  strictEqual(q.rounds?.length, 4);
  for (const r of q.rounds!) strictEqual(r.questions.length, 8, `round ${r.id} has 8 questions`);

  const all = quizQuestions(q);
  strictEqual(all.length, 32);
  for (const item of all) {
    ok(item.why, `"${item.q}" has a why`);
    ok(item.ref, `"${item.q}" has a ref`);
    if (Array.isArray(item.opts)) {
      strictEqual(new Set(item.opts).size, item.opts.length, `options distinct for "${item.q}"`);
      if (typeof item.correct === 'number') {
        ok(item.correct >= 0 && item.correct < item.opts.length, `correct in range for "${item.q}"`);
      }
    }
  }
});

test('correct answers do not cluster in one position', { skip }, () => {
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  const slots = quizQuestions(q)
    .filter((x) => typeof x.correct === 'number')
    .map((x) => x.correct as number);
  const tally = new Map<number, number>();
  for (const s of slots) tally.set(s, (tally.get(s) ?? 0) + 1);
  for (const [slot, n] of tally) {
    const pct = (n / slots.length) * 100;
    ok(pct <= 40, `${pct.toFixed(0)}% of answers sit in position ${slot}`);
  }
});

test('every quiz ref names a real section', { skip }, () => {
  const ids = new Set(LESSON!.sections.map((s) => (s as { id?: string }).id).filter(Boolean));
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  for (const item of quizQuestions(q)) {
    // A ref that resolves to nothing makes "see this again" a dead button.
    ok(ids.has(item.ref!), `ref "${item.ref}" for "${item.q}" names a section`);
  }
});

test('the reframe appears verbatim seven times, never reworded', { skip }, () => {
  strictEqual(REFRAME, "Silent unless there's a reason.");
  const hits = strings(LESSON).filter((s) => s.includes(REFRAME));
  strictEqual(hits.length, 7, `expected 7 verbatim appearances, found ${hits.length}`);
});

test('all 63 itemIds resolve, and the tranches release only taught words', { skip }, () => {
  strictEqual(LESSON!.itemIds.length, 63);
  for (const id of LESSON!.itemIds) ok(ITEM_IDS.has(id), `${id} resolves`);

  // One tranche per act, released at that act's checkpoint rather than all at
  // once on completion.
  strictEqual(LESSON!.deckTranche?.length, LESSON!.acts?.length);
  const released = LESSON!.deckTranche!.flat();
  strictEqual(new Set(released).size, released.length, 'no word is released twice');
  strictEqual(released.length, 63, 'every word reaches the SRS exactly once');
  for (const id of released) ok(LESSON!.itemIds.includes(id), `${id} is taught before it is released`);
});

test('every act claims its sections, and no section is orphaned', { skip }, () => {
  const claimed = LESSON!.acts!.flatMap((a) => a.sections);
  const ids = LESSON!.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
  for (const id of ids) ok(claimed.includes(id), `section ${id} belongs to an act`);
  strictEqual(new Set(claimed).size, claimed.length, 'no section is claimed twice');
});

test('no act runs past the checkpoint spacing limit', { skip }, () => {
  // Each act ends in a checkpoint; rest points break up the long ones. The
  // longest stretch a learner can face without a save must stay under 22.
  for (const a of LESSON!.acts!) {
    const stops = 1 + (a.restPoints?.length ?? 0);
    const longest = Math.ceil(a.estScreens / stops);
    ok(longest <= 22, `act "${a.id}" leaves a ${longest}-screen stretch`);
  }
});

test('the lesson has nine stopping places, one roughly every 27 screens', { skip }, () => {
  // Six act checkpoints plus three mid-act rest points, per the build notes.
  // What matters is that a learner is never more than one stretch from a save.
  const stops = stoppingPoints(LESSON!);
  strictEqual(stops.filter((s) => s.kind === 'checkpoint').length, 6);
  ok(stops.filter((s) => s.kind === 'rest').length >= 3, 'at least three rest points');
});

test('the SRS releases at checkpoints, never all at the end', { skip }, () => {
  const acts = LESSON!.acts!;
  // The final act must not be carrying the bulk: that would be the
  // release-everything-at-the-end failure this exists to prevent.
  const last = checkpointFor(LESSON!, acts[acts.length - 1].sections.at(-1)!);
  ok(last);
  ok(last!.releases.length < 32, `the final checkpoint releases ${last!.releases.length} of 63`);
  // And everything is released by the end.
  strictEqual(releasedThrough(LESSON!, acts.length - 1).length, 63);
});

test('a returning learner lands two screens back on a recap', { skip }, () => {
  const plan = resumePlan(LESSON!, 10, 0);
  strictEqual(plan.sectionIx, 8);
  ok(plan.showRecap);
  // After a long gap, a warm-back over the act just completed.
  const away = resumePlan(LESSON!, 10, 5 * 24 * 60 * 60 * 1000);
  ok(away.warmBack, 'five days away triggers a warm-back');
  strictEqual(away.warmBack!.questions, 3);
});

test('the error-trigger system is fully wired', { skip }, () => {
  const drillIds = new Set(LESSON!.drills!.map((d) => d.id));
  for (const t of LESSON!.errorTriggers!) {
    // A trigger whose drill does not exist detects a mistake and then does
    // nothing about it.
    ok(drillIds.has(t.drill), `trigger ${t.id} names a real drill`);
    if (t.retest) ok(drillIds.has(t.retest), `trigger ${t.id} names a real retest`);
  }
  // Every quiz round declares a target that resolves to a drill, or a failed
  // round fires nothing.
  const triggerIds = new Set(LESSON!.errorTriggers!.map((t) => t.id));
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  for (const r of q.rounds!) {
    ok(r.targets?.length, `round ${r.id} declares a target`);
    for (const target of r.targets!) ok(triggerIds.has(target), `round ${r.id} target "${target}" exists`);
  }
});

test('the four reference sheets exist and are reachable', { skip }, () => {
  strictEqual(LESSON!.sheets?.length, 4);
  const sheetIds = new Set(LESSON!.sheets!.map((s) => s.id));
  // A section previewing a sheet that was never written is a dead link from a
  // persistent header button.
  for (const s of LESSON!.sections) {
    const ref = (s as { sheetId?: string }).sheetId;
    if (ref) ok(sheetIds.has(ref), `sheetId "${ref}" resolves`);
  }
  for (const sh of LESSON!.sheets!) {
    ok(sh.sections?.length, `sheet ${sh.id} has content, not just a title`);
    // Sheets are the one place density is fine, so they must say so.
    for (const sec of sh.sections!) strictEqual((sec as { layer?: string }).layer, 'deep', `${sh.id} sections are layer deep`);
  }
});

test('the studio brief is complete: every recording is described', { skip }, () => {
  const recorded = LESSON!.audio?.recorded ?? [];
  strictEqual(recorded.length, 11);
  for (const r of recorded) ok(r.desc && r.desc.length > 20, `${r.id} carries a real brief`);

  // Every recordingId referenced by a card must exist in the registry, or the
  // card silently falls back to TTS forever and nobody notices.
  const known = new Set(recorded.map((r) => r.id));
  const seen = new Set<string>();
  const walk = (v: unknown) => {
    if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') {
      const rec = (v as { recordingId?: unknown }).recordingId;
      if (typeof rec === 'string') seen.add(rec);
      Object.values(v).forEach(walk);
    }
  };
  walk(LESSON);
  for (const id of seen) ok(known.has(id), `recordingId "${id}" is declared in audio.recorded`);
});

test('the lesson runs on TTS today and improves when the studio delivers', { skip }, () => {
  // Every declared recording is still pending, so every card falls back to
  // synthesis. That is the shipping state, and it must be a deliberate one:
  // nothing in the lesson is BLOCKED on audio that does not exist.
  const owed = pendingRecordings(LESSON!.audio);
  strictEqual(owed.length, 11, 'all eleven sets are still owed');
  for (const r of owed) ok(r.desc.length > 20, `${r.id} carries a brief the studio can act on`);

  // A card pointing at a set the lesson never declared would fall back to TTS
  // forever with nobody noticing, which is the silent-failure case.
  const declared = new Set((LESSON!.audio?.recorded ?? []).map((r) => r.id));
  for (const id of referencedRecordingIds(LESSON)) {
    ok(declared.has(id), `recordingId "${id}" is declared in audio.recorded`);
  }
});

test('the two speeds are offered, and slow is the 0.65 pass', { skip }, () => {
  deepStrictEqual(LESSON!.audio?.speeds, [1.0, 0.65]);
  ok(hasSlow(undefined, LESSON!.audio), 'long-press for slow is available lesson-wide');
});

test('contrast and trap screens play audio before the text resolves', { skip }, () => {
  // Reversing that order lets the eye answer the question the ear was
  // supposed to. The scene's break beat is the one that matters most.
  const scene = LESSON!.sections.find((s) => s.type === 'scene');
  ok(scene && scene.type === 'scene');
  const brk = scene.beats.find((b) => b.kind === 'break');
  ok(brk && brk.kind === 'break');
  ok(brk.audio?.audioFirst, 'the break plays its model before the reading resolves');
});

test('CaReFuL is explained again and again, from one definition', { skip }, () => {
  // Paul's rule: terms are explained repeatedly. Repeating the WORDING by hand
  // would give nine versions that drift and crowd nine cards; defining it once
  // and surfacing it everywhere gives the same clear answer at every point of
  // use, for free.
  const careful = LESSON!.terms?.careful;
  ok(careful, 'CaReFuL is defined');
  ok(careful!.body.length > 200, 'the definition is a real explanation, not a gloss');
  ok(/memory hook|not a French word/i.test(careful!.body), 'it says what CaReFuL actually is');

  const surfaced = LESSON!.sections.filter((s) => (s as { terms?: string[] }).terms?.includes('careful'));
  ok(surfaced.length >= 8, `CaReFuL is reachable from ${surfaced.length} missions`);
  // And it is present at the moments that matter: where it is introduced,
  // where it is trapped, and where it is summarised.
  const ids = surfaced.map((s) => (s as { id: string }).id);
  for (const id of ['s03-anchors', 's06-trap', 's20-roundup']) {
    ok(ids.includes(id), `CaReFuL is explained on ${id}`);
  }
});

test('every glossary term is defined once and resolves its examples', { skip }, () => {
  const terms = LESSON!.terms ?? {};
  ok(Object.keys(terms).length >= 6, 'the lesson has a real glossary');
  for (const [key, def] of Object.entries(terms)) {
    ok(def.term && def.title && def.body, `${key} is complete`);
    for (const ex of def.examples ?? []) {
      ok(ITEM_IDS.has(ex.itemId), `${key} example ${ex.itemId} resolves against the corpus`);
    }
  }
  // Every term a section names must exist, or the chip opens on nothing.
  const known = new Set(Object.keys(terms));
  for (const s of LESSON!.sections) {
    for (const key of (s as { terms?: string[] }).terms ?? []) {
      ok(known.has(key), `section ${(s as { id?: string }).id} names defined term "${key}"`);
    }
  }
});

test('dense missions are broken up rather than trimmed', { skip }, () => {
  // The restyling: missions whose content is a SEQUENCE of equal things show
  // one at a time instead of stacking. The material is unchanged; only the
  // pacing is.
  const swiped = LESSON!.sections.filter((s) => (s as { swipe?: boolean }).swipe);
  const ids = swiped.map((s) => (s as { id: string }).id);
  // Only sections whose renderer would otherwise STACK everything carry the
  // flag: three physical routines, and eight common errors.
  for (const id of ['s07-inhibition', 's14-errors']) {
    ok(ids.includes(id), `${id} is swipeable`);
  }
  // These are deliberately NOT flagged. Their renderers already show one thing
  // at a time (reviewDeck advances on a Leitner rating, dictation on a solved
  // word, practice on a graded prompt), so claiming a swipe would promise a
  // gesture the section does not have and would fight the one that records
  // the answer. They were made spacious by size instead. A missing flag here
  // is a decision, not an oversight.
  for (const id of ['s17-review', 's10-dictation', 's15-listen']) {
    ok(!ids.includes(id), `${id} paces itself and must not claim a swipe`);
  }
  // Questions that ask about something heard open one at a time, after it.
  const modal = LESSON!.sections
    .filter((s) => (s as { questionsInModal?: boolean }).questionsInModal)
    .map((s) => (s as { id: string }).id);
  for (const id of ['s11-listening', 's12-speak']) {
    ok(modal.includes(id), `${id} opens its questions in a modal`);
  }
});

// ── Layout regressions ────────────────────────────────────────────────────
//
// These four guard a class of bug that typecheck cannot see and that has now
// recurred: a card sized without regard for the chrome around it, a deck that
// assumes the screen width, a horizontal pager nested in a vertical scroller.
// Each one shipped, was reported by a learner, was fixed, and was then lost.
// They run unconditionally (no `skip`) because they check SOURCE, not content,
// and must fail even if the lesson data is absent.

test('no lesson card is sized by a fixed height or a raw viewport fraction', () => {
  // `minHeight: 420` and `height * 0.58` both ignore the chrome around the
  // card — header, eyebrow, deck hint, dots, and the ACTION ROW BELOW IT. On a
  // shorter phone or at a large font scale, Again / I knew it ended up under
  // the fold and the learner had to scroll past a card to dismiss it.
  const files = ['LessonRich.tsx', 'MissionRich.tsx', 'MissionSection.tsx', 'SilentCards.tsx', 'ReadingPages.tsx', 'LessonDeck.tsx'];
  for (const f of files) {
    const src = readFileSync(resolve(here, '../components', f), 'utf8');
    const fraction = src.match(/Math\.round\(height \* 0\.\d+\)/g) ?? [];
    strictEqual(fraction.length, 0, `${f} sizes a card by a raw viewport fraction: ${fraction.join(', ')}`);
    // Small fixed minHeights (rows, chips, buttons) are fine; card-sized ones
    // are the mistake.
    const fixed = (src.match(/minHeight: (\d{3,})/g) ?? []).filter((m) => Number(m.split(': ')[1]) >= 300);
    strictEqual(fixed.length, 0, `${f} pins a card to a fixed height: ${fixed.join(', ')}`);
  }
});

test('the responsive card-height rule exists and is used', () => {
  const hook = readFileSync(resolve(here, '../hooks/useCardHeight.ts'), 'utf8');
  ok(/export function useCardHeight/.test(hook), 'the hook exists');
  // Deleting it and inlining a number is how this regressed once already.
  for (const f of ['LessonRich.tsx', 'MissionRich.tsx', 'MissionSection.tsx', 'SilentCards.tsx', 'ReadingPages.tsx']) {
    const src = readFileSync(resolve(here, '../components', f), 'utf8');
    ok(/useCardHeight\(/.test(src), `${f} sizes its cards through the shared rule`);
  }
});

test('a swipe deck never sits inside a scrolling page', () => {
  // A horizontal pager inside a vertical ScrollView fights for the gesture on
  // Android, and the page scrolls AROUND the fixed card rather than the card
  // scrolling inside itself.
  const pager = readFileSync(resolve(here, '../components/LessonPager.tsx'), 'utf8');
  ok(/function ownsLayout/.test(pager), 'the pager decides which sections own their layout');
  ok(/fixed=\{selfLaid\}|fixed=\{ownsLayout\(s\)\}/.test(pager), 'the section page passes that decision to PageScroll');
  ok(/if \(fixed\)/.test(pager), 'PageScroll honours it by not wrapping in a ScrollView');

  // Every horizontal scroller must release the vertical gesture to its parent.
  for (const f of ['LessonDeck.tsx', 'LessonRich.tsx', 'ReadingPages.tsx', 'ReferenceSheet.tsx', 'LessonPager.tsx']) {
    const src = readFileSync(resolve(here, '../components', f), 'utf8');
    for (const block of src.match(/<ScrollView[\s\S]{0,400}?>/g) ?? []) {
      if (!/\bhorizontal\b/.test(block)) continue;
      ok(/nestedScrollEnabled/.test(block), `${f}: a horizontal ScrollView without nestedScrollEnabled`);
      ok(/directionalLockEnabled/.test(block), `${f}: a horizontal ScrollView without directionalLockEnabled`);
    }
  }
});

test('a swipe deck measures its own width rather than assuming the screen', () => {
  // The page is inset 24px each side. Initialising card width from
  // useWindowDimensions() made every card 48px too wide, so page two started
  // just off-screen and the swipe read as dead.
  const deck = readFileSync(resolve(here, '../components/LessonDeck.tsx'), 'utf8');
  ok(/useState<number \| null>\(null\)/.test(deck), 'width starts unmeasured');
  ok(/onLayout=\{\(e\) => setW\(/.test(deck), 'width comes from a real layout');
  ok(/\{w \?/.test(deck), 'nothing renders until the width is known');
});

test('every display flag the content sets is actually read by a renderer', { skip }, () => {
  // The bug this exists to catch: a flag authored, validated, published and
  // INERT, because nothing consumes it. `swipe: true` shipped on five sections
  // for a full release while every one of them still rendered as a stack.
  // Schema validation cannot catch that — the data was perfectly valid — so
  // the check has to be that the renderer names the field.
  const src = [
    readFileSync(resolve(here, '../components/MissionSection.tsx'), 'utf8'),
    readFileSync(resolve(here, '../components/SilentCards.tsx'), 'utf8'),
    readFileSync(resolve(here, '../components/MissionRich.tsx'), 'utf8'),
    readFileSync(resolve(here, '../components/LessonPager.tsx'), 'utf8'),
  ].join('\n');

  const used = new Set<string>();
  for (const s of LESSON!.sections) {
    const o = s as Record<string, unknown>;
    for (const flag of ['swipe', 'questionsInModal', 'terms', 'sheetId']) {
      if (o[flag] !== undefined) used.add(flag);
    }
  }
  for (const flag of used) {
    // Must be a real PROPERTY ACCESS (`s.swipe`, `section.terms`), not the
    // word appearing in a comment or a prop name. The first version of this
    // test used a word-boundary match and passed on the word "swipe" inside a
    // doc comment, which is the same class of false confidence it exists to
    // prevent.
    ok(
      new RegExp(`\\w+\\.${flag}\\b`).test(src),
      `the content sets "${flag}" but no renderer reads it as a property — the flag is inert`
    );
  }

  // `swipe` is stronger than the others: it promises a specific interaction,
  // so the section type that declares it must reach a SwipeDeck. A section
  // whose renderer already paces itself (dictation, reviewDeck, practice)
  // must NOT claim the flag, because content that lies about its behaviour is
  // how the stacked-but-flagged bug happened in the first place.
  const swipeTypes = new Set(
    LESSON!.sections.filter((s) => (s as { swipe?: boolean }).swipe).map((s) => s.type)
  );
  for (const type of swipeTypes) {
    // Either the dispatcher routes it to a deck, or its own view owns one
    // (inhibitionDrill builds its deck inside SilentCards).
    const routed = new RegExp(`case '${type}':[\\s\\S]{0,900}?SwipeDeck`).test(src);
    const ownsDeck = type === 'inhibitionDrill' && /<SwipeDeck/.test(src);
    ok(routed || ownsDeck, `section type "${type}" sets swipe but never reaches a SwipeDeck`);
  }
});

test('the lesson is illustrated, and every image resolves', { skip }, () => {
  const refs = new Set<string>();
  const walk = (v: unknown) => {
    if (Array.isArray(v)) return v.forEach(walk);
    if (!v || typeof v !== 'object') return;
    const o = v as Record<string, unknown>;
    for (const k of ['imageRef', 'image']) if (typeof o[k] === 'string') refs.add(o[k] as string);
    Object.values(o).forEach(walk);
  };
  walk(LESSON);
  ok(refs.size >= 6, `${refs.size} illustrations`);

  // Every ref must be registered in lessonImages.ts AND have a real file, or
  // it silently renders nothing.
  const reg = readFileSync(resolve(here, 'lessonImages.ts'), 'utf8');
  for (const ref of refs) {
    ok(reg.includes(`'${ref}'`), `${ref} is registered in lessonImages.ts`);
    ok(existsSync(resolve(here, '../../assets', ref)), `${ref} has a bundled file`);
  }
});

test('the roundup teases the next lesson', { skip }, () => {
  const roundup = LESSON!.sections.find((s) => s.type === 'roundup');
  ok(roundup && roundup.type === 'roundup');
  const last = roundup.points[roundup.points.length - 1];
  ok(/liaison/i.test(last), 'the last point names liaison, which is sons.07');
});

test('the authored copy carries no em dash and no honest/honesty', { skip }, () => {
  const all = strings(LESSON);
  strictEqual(all.filter((s) => s.includes('—')).length, 0, 'no em dash');
  strictEqual(all.filter((s) => /honest/i.test(s)).length, 0, 'no honest/honesty');
});

test('no transcription is restated: the lesson reads them from the corpus', { skip }, () => {
  // The rule the whole corpus exists to enforce. Every IPA string that names a
  // corpus word must be that word's corpus IPA, character for character. A
  // hand-typed copy is how five versions of the same word start to drift.
  const byIpa = new Map(CORPUS.map((w) => [w.id, (w as { ipa?: string }).ipa]));
  const grid = LESSON!.sections.find((s) => s.type === 'letterGrid');
  ok(grid && grid.type === 'letterGrid');
  for (const l of grid.letters) {
    if (!l.ipa) continue;
    // Each grid example that matches a corpus word must carry its IPA.
    const match = CORPUS.find((w) => w.fr === l.ex);
    if (match) strictEqual(l.ipa, byIpa.get(match.id), `grid row "${l.ch}" uses the corpus IPA for ${match.fr}`);
  }
});

// ── The published copy, once the batch has been applied ────────────────────

const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; lessonIds: string[] }[];
  lessons: Lesson[];
  items: { id: string }[];
};
const published = seed.lessons.find((l) => l.id === 'sons.06.l1');

test('once published, the seed copy validates and is reachable from the Den', { skip: !published }, () => {
  strictEqual(validateLesson(published!).length, 0);
  const known = new Set(seed.items.map((i) => i.id));
  strictEqual(validateDensity(published!, known).length, 0);
  for (const id of published!.itemIds) ok(known.has(id), `published item ${id} exists in the seed`);
  const unit = seed.units.find((u) => u.id === 'sons.06');
  ok(unit?.lessonIds.includes('sons.06.l1'), 'the unit links the lesson');
});
