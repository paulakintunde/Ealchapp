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
import { audioIndex, hasSlow, pendingRecordings, referencedRecordingIds, resolveByText } from './lessonAudio.logic.ts';
import { checkpointFor, releasedThrough, resumePlan, stoppingPoints, tranche, warmBackQuestions } from './acts.logic.ts';
import { advanceQuiz, answerQuestion, buildQuizConfig, drillForRound, initialQuizState } from './quizRounds.logic.ts';

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

test('the lesson screen has exactly one definition of "the non-quiz sections"', () => {
  // Every index mapping in lesson.tsx (progress writes, deep-link anchors,
  // resume) round-trips between the FULL section list and the quiz-filtered
  // one, and is only correct while the two agree on what "filtered" means.
  // The screen had three inline copies of that filter alongside the shared
  // helper it already imported; changing one and missing another would mark
  // the wrong mission complete, silently.
  const src = readFileSync(resolve(here, '../../app/lesson.tsx'), 'utf8');
  const inline = src.match(/sections\.filter\(\([a-z]+\) => [a-z]+\.type !== 'quiz'\)/g) ?? [];
  strictEqual(inline.length, 0, `lesson.tsx re-filters the quiz inline ${inline.length}x instead of using contentSections()`);
  ok(/contentSections as contentSectionsOf/.test(src), 'it imports the shared helper');
});

test('a section that counts its own contents aloud says the right number', { skip }, () => {
  // The anchors deck was authored with six cards and a coach line that said
  // "Six ideas". Splitting a card to relieve the density ceiling made it seven
  // and the spoken line kept saying six — the kind of drift nothing catches,
  // because the line is AUDIO and the card count is data. The title had the
  // same problem.
  const WORDS: Record<string, number> = {
    four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  };
  const spoken = (text: string): number | null => {
    const m = text.toLowerCase().match(/^(four|five|six|seven|eight|nine|ten)\b/);
    return m ? WORDS[m[1]] : null;
  };

  for (const s of LESSON!.sections) {
    const cards = (s as { cards?: unknown[] }).cards;
    if (!Array.isArray(cards)) continue;
    const say = (s as { say?: { text?: string } }).say?.text;
    const id = (s as { id?: string }).id;
    const n = say ? spoken(say) : null;
    if (n !== null) {
      strictEqual(n, cards.length, `${id} says "${say?.slice(0, 24)}…" but has ${cards.length} cards`);
    }
    const title = (s as { title?: string }).title;
    const tn = title ? spoken(title) : null;
    if (tn !== null) {
      strictEqual(tn, cards.length, `${id} is titled "${title}" but has ${cards.length} cards`);
    }
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

test('finishing an act still releases its SRS tranche', () => {
  // Runs unconditionally: this checks WIRING. acts.logic.ts was fully tested
  // and imported by nothing, so the SRS release was inert — that is the
  // regression this test exists for, and it survives the checkpoint pages.
  //
  // The interstitial "Act N / milestone / continue or stop" PAGES are gone
  // (six of them through a lesson read as interruptions). The act BOUNDARY is
  // not: crossing one is what releases that act's cards, so an hour-long
  // lesson does not dump sixty new items into review at the end. The release
  // now fires on the act's last SECTION instead of on a page that followed it.
  const pager = readFileSync(resolve(here, '../components/LessonPager.tsx'), 'utf8');
  ok(!/kind: 'checkpoint'/.test(pager), 'the pager builds no checkpoint pages');
  ok(!/<ActCheckpointCard/.test(pager), 'and renders no checkpoint card');
  ok(/closesAct/.test(pager), 'it knows which section closes each act');
  ok(/onCheckpointReached\?\.\(actIx\)/.test(pager), 'and reports that to the screen');
  // An act ending on the quiz has no section page of its own, so it would
  // silently never release if only the section path were wired.
  ok(/actEndingOnQuiz/.test(pager), 'an act ending on the quiz releases too');

  const screen = readFileSync(resolve(here, '../../app/lesson.tsx'), 'utf8');
  ok(/tranche\(/.test(screen), 'the screen releases that act SRS tranche');
  // The prop must actually be PASSED, not merely defined. Checking only that
  // the pager accepts it is how "built but unmounted" slips through: the
  // callback existed on both sides and was wired to nothing.
  ok(/onCheckpointReached=\{/.test(screen), 'the release callback is passed to the pager');
  ok(/<WarmBackCard/.test(screen), 'the warm-back is rendered');
  ok(/<ResumeRecapCard/.test(screen), 'the resume recap is rendered');
  ok(/resumePlan/.test(screen), 'the resume plan decides which of them shows');
});

test('every answer option announces itself as a button with its state', () => {
  // Colour alone carried the verdict on every option list in the v2 lesson: a
  // right answer turned accent, a wrong pick turned danger, and a screen
  // reader got a bare string with no role, no selected state and no outcome.
  // These are the five files that render a pick-one list.
  const files = ['LessonDeck', 'SilentCards', 'QuizRoundsView', 'ActCheckpoint'];
  for (const f of files) {
    const src = readFileSync(resolve(here, `../components/${f}.tsx`), 'utf8');
    // Every disabled-after-pick Press is an answer option; each must carry the
    // state, not just a label.
    const options = src.split('onPress={() => pick(i)}').length - 1;
    if (options === 0) continue;
    const stated = src.split(/accessibilityState=\{\{\s*selected:/).length - 1;
    ok(stated >= options, `${f}: ${options} option lists, ${stated} announce selection`);
    ok(/accessibilityHint=\{[\s\S]*?Correct answer/.test(src), `${f}: the verdict is spoken, not only coloured`);
  }
});

test('small header buttons take a 44px touch target', () => {
  // 32px is the visual size the header needs; without hitSlop the TOUCH
  // target is 32 too, which is under the platform minimum.
  const sheet = readFileSync(resolve(here, '../components/ReferenceSheet.tsx'), 'utf8');
  const screen = readFileSync(resolve(here, '../../app/lesson.tsx'), 'utf8');
  for (const [name, src] of [['ReferenceSheet', sheet], ['lesson', screen]] as const) {
    const small = src.split(/width: 32,\s*\n\s*height: 32/).length - 1;
    if (!small) continue;
    ok(/hitSlop=\{8\}/.test(src), `${name}: a 32px control without hitSlop is under the 44px minimum`);
  }
});

test('system back closes a layered surface instead of leaving the lesson', () => {
  // The bug this exists to catch: the sheet, the preface and the key tour are
  // local state that REPLACES the lesson body, not routes. The router's stack
  // still held only /lesson, so Android's back button popped the whole screen
  // — tapping "See all 16 endings" and pressing back ejected the learner from
  // the lesson rather than returning them to the grid they came from.
  const screen = readFileSync(resolve(here, '../../app/lesson.tsx'), 'utf8');
  ok(/BackHandler/.test(screen), 'the screen handles hardware back at all');
  ok(
    /addEventListener\(\s*['"]hardwareBackPress['"]/.test(screen),
    'and subscribes to the hardware back event'
  );
  // Registering without unsubscribing leaks a handler per mount, and this
  // screen survives router.replace between lessons.
  ok(/\.remove\(\)/.test(screen), 'and removes the listener on cleanup');
  // Each layered surface has to be popped, or back still skips past it.
  // Asserted on the handler body rather than the whole file, so a setter
  // called somewhere else in the screen cannot satisfy this by accident.
  const handler = screen.slice(
    screen.indexOf("addEventListener('hardwareBackPress'"),
    screen.indexOf('return () => sub.remove()')
  );
  ok(handler.length > 0, 'expected a hardware back handler body');
  for (const [state, clear] of [
    ['the reference sheet', 'setSheetId(null)'],
    ['the preface', 'setPreface(null)'],
    ['the key tour', 'setShowKeyOverride(false)'],
  ] as const) {
    ok(handler.includes(clear), `back does not close ${state}`);
  }
  // Closing without swallowing the event closes the surface AND pops the
  // screen in one press, which is the same ejection bug wearing a hat.
  strictEqual(
    handler.split('return true').length - 1,
    3,
    'each layered surface must swallow the press it consumed'
  );
  // Swallowing every press would trap the learner ON the lesson instead.
  ok(/return false/.test(screen), 'back still leaves the lesson when nothing is layered');
});

test('the lesson screen calls no hook after an early return', () => {
  // The bug this exists to catch: useMemo/useState sat BELOW the `!L`,
  // `bandLocked` and `showKey` returns, so the hook count changed with those
  // branches. showKeyOverride flips at runtime from the header's "?", which
  // made reopening the tour mid-lesson throw "rendered fewer hooks".
  const screen = readFileSync(resolve(here, '../../app/lesson.tsx'), 'utf8');
  const body = screen.slice(screen.indexOf('export default function LessonScreen'));
  // The first early return inside the component. Everything after it renders
  // conditionally, so no hook may appear there.
  const firstReturn = body.search(/\n  if \([\s\S]{0,200}?\n    return \(/);
  ok(firstReturn > 0, 'expected a conditional early return in the screen');
  const after = body.slice(firstReturn);
  const hooks = after.match(/\buse(State|Memo|Effect|Callback|Ref)\s*\(/g) ?? [];
  deepStrictEqual(
    hooks,
    [],
    `hooks called after a conditional return: ${hooks.join(', ')} — hoist them above it`
  );
});

test('the sheet a learner opened mid-flow offers a way back', () => {
  // A sheet reached from the grid is a detour. The header arrow is a full
  // screen away after sixteen rows, so the foot of the sheet has to say how
  // to get back — but only when back actually EXITS. Opened from the index,
  // back means the index, and a "back to the lesson" footer would be a lie.
  const src = readFileSync(resolve(here, '../components/ReferenceSheet.tsx'), 'utf8');
  ok(/returnLabel/.test(src), 'the sheet view takes a return control');
  ok(
    /returnLabel=\{\s*initialSheetId\s*\?/.test(src),
    'and shows it only for a sheet opened straight from the flow'
  );
});

test('the silent-letter toggle announces what is marked', () => {
  // The task is "which letters are silent". Being marked was a border colour.
  const src = readFileSync(resolve(here, '../components/SilentCards.tsx'), 'utf8');
  ok(/accessibilityRole="checkbox"/.test(src), 'a toggle is a checkbox, not a button');
  ok(/accessibilityState=\{\{\s*checked:/.test(src), 'and it reports what is checked');
});

test('authored audio actually reaches the player', () => {
  // Runs unconditionally: this checks WIRING. lessonAudio.logic.ts resolved
  // recording sets, speeds and play budgets, and the play call site read none
  // of it — 28 authored specs went to a function nobody called.
  const screen = readFileSync(resolve(here, '../../app/lesson.tsx'), 'utf8');
  ok(/resolveByText|resolveAudio/.test(screen), 'the screen resolves what the lesson authored');
  ok(/audioIndex\(/.test(screen), 'and builds the index it resolves against');
  // Resolving and then discarding the result is the failure mode this catches:
  // the call has to feed the thing that makes sound.
  ok(/audioRef:\s*audioRef\s*\?\?\s*r\.audioRef/.test(screen), 'the resolved clip reaches speakItem');
  ok(/rate:\s*r\.rate/.test(screen), 'and so does the resolved rate');
});

test('long-press for the slow reading is reachable, not just supported', () => {
  // FrenchLine accepted an onPlaySlow prop that no caller ever passed, so the
  // 0.65 pass the lesson authored on nine sections could not be triggered.
  const deck = readFileSync(resolve(here, '../components/LessonDeck.tsx'), 'utf8');
  ok(/onLongPress=\{slowFn/.test(deck), 'long-press is bound');
  ok(/onPlay\(i, fr2, null, true\)/.test(deck), 'and it asks for the slow pass');

  const screen = readFileSync(resolve(here, '../../app/lesson.tsx'), 'utf8');
  ok(/slow\s*=\s*false/.test(screen), 'the screen play fn takes a slow flag');
  ok(/\{\s*slow,/.test(screen), 'and passes it into resolution');
});

test('every French string the lesson authored audio for resolves to a spec', { skip }, () => {
  // The index is keyed on text, so a re-authored string silently loses its
  // recording. This is the check that catches that: the count of authored
  // specs and the count of indexed strings must not drift apart.
  const ix = audioIndex(LESSON!);
  ok(ix.size >= 25, `${ix.size} French strings carry an authored spec`);

  // Spot-check one from each act, by recording set rather than by exact text.
  const sets = new Set([...ix.values()].map((s) => s.recordingId).filter(Boolean));
  for (const id of ['rec-scene-break', 'rec-careful-pairs', 'rec-dictation-10', 'rec-reading-passage']) {
    ok(sets.has(id), `${id} is reachable from some card`);
  }
});

test('nothing is silent today: every spec falls back to TTS on the French', { skip }, () => {
  // CLIP_MANIFEST is empty, so this is the guarantee that wiring the resolver
  // in did not turn any card mute. Every one must still produce speakable text.
  const ix = audioIndex(LESSON!);
  for (const [text] of ix) {
    const r = resolveByText(text, ix, { lessonAudio: LESSON!.audio });
    strictEqual(r.audioRef, null, `"${text.slice(0, 20)}" has no clip yet`);
    ok(r.text.trim().length > 0, `"${text.slice(0, 20)}" still speaks`);
  }
});

test('the SRS releases progressively, never all at the end', { skip }, () => {
  const acts = LESSON!.acts ?? [];
  const perAct = acts.map((_, i) => tranche(LESSON!, i).length);
  strictEqual(perAct.reduce((a, b) => a + b, 0), 63, 'every word is released exactly once');

  // The failure this prevents: an hour-long lesson dumping sixty new cards
  // into review the moment it ends.
  const last = perAct[perAct.length - 1];
  ok(last < 32, `the final act releases ${last} of 63, not the bulk`);

  // And a learner who stops midway has a real, smaller deck rather than none.
  const midway = releasedThrough(LESSON!, 2).length;
  ok(midway > 0 && midway < 63, `${midway} cards released by act 3`);
});

test('a checkpoint exists for every act, in the right place', { skip }, () => {
  const acts = LESSON!.acts ?? [];
  strictEqual(acts.length, 6);
  for (const a of acts) {
    const last = a.sections[a.sections.length - 1];
    const cp = checkpointFor(LESSON!, last);
    ok(cp, `act "${a.id}" has a checkpoint after "${last}"`);
    ok(cp!.act.milestone, 'and a milestone line to show on it');
  }
  // Only the last one ends the lesson.
  const finals = acts.filter((a) => checkpointFor(LESSON!, a.sections[a.sections.length - 1])?.isFinal);
  strictEqual(finals.length, 1);
});

test('the warm-back always has enough to ask, from material already taught', { skip }, () => {
  const acts = LESSON!.acts ?? [];
  // Act 1 is excluded: nothing precedes it, and resumePlan never offers a
  // warm-back there.
  for (const [i, a] of acts.entries()) {
    if (i === 0) continue;
    const qs = warmBackQuestions(LESSON!, a, 3);
    strictEqual(qs.length, 3, `act "${a.id}" can ask three questions`);
    const seen = new Set(acts.slice(0, i + 1).flatMap((x) => x.sections));
    for (const q of qs) {
      ok(seen.has(q.ref!), `"${q.q}" refers to something already taught`);
      ok(Array.isArray(q.opts) && typeof q.correct === 'number', 'and is answerable by tapping');
    }
  }
});

test('the XL word card is mounted, and its data reaches it', { skip }, () => {
  // The architecture doc calls the XL card "a third of every lesson": one
  // French word at display size, its IPA and respelling beneath, and the
  // silent letters greyed and faded from the corpus `silent` indices. It was
  // built, tested, and rendered by nothing.
  const mission = readFileSync(resolve(here, '../components/MissionRich.tsx'), 'utf8');
  ok(/<WordCardXL/.test(mission), 'the XL card is rendered');
  ok(/s\.size === 'xl'/.test(mission), 'and only where the content asks for it');

  // The group drill is the teaching engine, and the one XL section whose data
  // is complete enough to feed the card. Verify the card has something real
  // to show rather than trusting the flag.
  const gd = LESSON!.sections.find((s) => (s as { id?: string }).id === 's05-families');
  ok(gd && gd.type === 'groupDrill');
  strictEqual((gd as { size?: string }).size, 'xl');
  const words = gd.groups.flatMap((g) => g.items);
  ok(words.length >= 20, `${words.length} words`);
  for (const w of words) {
    ok(w.ipa, `"${w.fr}" carries IPA for the card's second line`);
    ok(w.respell, `"${w.fr}" carries a respelling`);
  }
  // The silent indices are what the fade animates. Most words have them; the
  // CaReFuL words legitimately have none, because every letter sounds.
  const withSilent = words.filter((w) => w.silent?.length);
  ok(withSilent.length >= 15, `${withSilent.length} words have silent letters to grey`);
  for (const w of withSilent) {
    ok(silentIndicesValid(w.fr, w.silent), `"${w.fr}" indices are in range`);
  }
});

test('EVERY quiz question is reachable, not just the multiple-choice ones', { skip }, () => {
  // The bug: the screen filtered the quiz down to questions with `opts` and a
  // numeric `correct`, because the flat deck renders mcq only. That silently
  // discarded 12 of 32 — every tapSilent, errorSpot, typeIn and speak question
  // was authored, validated, published, and never asked.
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  const all = quizQuestions(q);
  strictEqual(all.length, 32);

  // The round engine must cover every format the content uses.
  const formats = new Set(all.map((x) => x.format ?? 'mcq'));
  const view = readFileSync(resolve(here, '../components/QuizRoundsView.tsx'), 'utf8');
  for (const fmt of formats) {
    ok(new RegExp(`case '${fmt}':`).test(view) || fmt === 'mcq', `the engine renders "${fmt}" questions`);
  }
  // And the six production formats are genuinely present in this lesson, so
  // the coverage above is not vacuous.
  for (const fmt of ['mcq', 'tapSilent', 'listenChoose', 'errorSpot', 'typeIn', 'speak']) {
    ok(formats.has(fmt), `the lesson exercises the "${fmt}" format`);
  }
});

test('a failed round fires its drill, and every round can fire one', { skip }, () => {
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  const cfg = buildQuizConfig(q.rounds!, {
    errorTriggers: LESSON!.errorTriggers,
    drills: LESSON!.drills,
    roundFailThreshold: q.roundFailThreshold,
    passMark: q.passMark,
  });

  // Every round must resolve to a real drill through its declared trigger, or
  // failing it teaches nothing.
  const drillIds = new Set((LESSON!.drills ?? []).map((d) => d.id));
  for (let i = 0; i < cfg.rounds.length; i++) {
    const drill = drillForRound(cfg, i);
    ok(drill, `round ${cfg.rounds[i].id} resolves a drill`);
    ok(drillIds.has(drill!), `round ${cfg.rounds[i].id} names a drill that exists`);
  }

  // Failing round one must land ON the drill, not at the end of the quiz.
  let s = initialQuizState();
  for (let i = 0; i < cfg.rounds[0].questions.length; i++) {
    s = answerQuestion(s, false);
    s = advanceQuiz(cfg, s);
  }
  strictEqual(s.phase.kind, 'drill', 'remediation happens between rounds, not as a post-mortem');
});

test('the quiz engine is mounted, and only for lessons that declare rounds', () => {
  // Runs unconditionally: this checks the WIRING, which is what was missing.
  const pager = readFileSync(resolve(here, '../components/LessonPager.tsx'), 'utf8');
  ok(/<QuizRoundsView/.test(pager), 'the round engine is rendered by the pager');
  ok(/if \(quizCfg\)/.test(pager), 'it is gated on the lesson having a config');
  ok(/<QuizDeckView/.test(pager), 'the flat deck survives for pre-v2 lessons');

  const screen = readFileSync(resolve(here, '../../app/lesson.tsx'), 'utf8');
  ok(/buildQuizConfig/.test(screen), 'the screen builds the config');
  ok(/rounds\?\.length/.test(screen), 'and only when the lesson declares rounds');
  ok(/onJumpToRef/.test(screen), 'the "see this again" jump is wired');
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

test('a short screen gives an illustrated card its image on its own card', async () => {
  // Verified in a browser: at 360x640 the deck box measures ~280px, and a 4:3
  // image plus a heading plus a body does not fit in that — the headline
  // clipped mid-word with the rest unreachable. Splitting the image onto its
  // own card is the same idea as the pager's HERO_SPLIT_TYPES, one level down.
  // (That mechanism cannot do this: it splits on a SECTION's imageRef, and
  // these images are on individual cards inside the deck.)
  const { deckEntries } = await import('./deck.logic.ts');
  const cards = [
    { head: 'plain', body: 'no image' },
    { head: 'illustrated', body: 'has one', imageRef: 'lessons/muettes/careful.jpg' },
  ];

  // Roomy screen: untouched, image and words together.
  const roomy = deckEntries(cards, 440);
  strictEqual(roomy.length, 2, 'no split when the card has room');
  ok(!roomy.some((e) => e.imageOnly || e.textOnly), 'and no half-cards');

  // Short screen: only the ILLUSTRATED card splits.
  const short = deckEntries(cards, 209);
  strictEqual(short.length, 3, 'the illustrated card became two');
  strictEqual(short[0].imageOnly, false, 'the plain card is untouched');
  strictEqual(short[1].imageOnly, true, 'image first');
  strictEqual(short[2].textOnly, true, 'then the words');
  // Both halves point at the same authored card — the split is presentation,
  // never a second copy of the content.
  strictEqual(short[1].c, short[2].c, 'both halves are the same card');

  // Unmeasured (0) must not split: deciding on an unknown makes the deck flash
  // a split layout and then re-flow once the real measurement lands.
  strictEqual(deckEntries(cards, 0).length, 2, 'no split before measuring');
});

test('the swipe deck sizes its cards from the space it measured', () => {
  // The check above is file-level, so it stays green for LessonRich.tsx as long
  // as ANY deck in that file calls the hook. The cardDeck deliberately does not:
  // useCardHeight guesses the surrounding chrome and floors the result at 300,
  // and on a short screen that floor is what pushes the bottom of a card off the
  // page. It measures its own rail instead. That is only safe while the
  // measurement is actually wired up, which is what this asserts.
  const src = readFileSync(resolve(here, '../components/LessonRich.tsx'), 'utf8');
  const deck = src.slice(src.indexOf('export function CardDeckView'));
  ok(/onLayout=\{\(e\) =>/.test(deck), 'the deck measures itself');
  // BOTH the box and the footer are measured. Subtracting a guessed footer
  // constant is what made the card paint over the dots row: a wrapped hint or
  // a large font scale makes any constant wrong.
  ok(/setBoxH\(/.test(deck), 'it measures the box the page gave it');
  ok(/setFootH\(/.test(deck), 'and the dots/hint row the cards must clear');
  ok(/boxH - footH/.test(deck), 'the cards get the difference');
  ok(/railH > 0 \?/.test(deck), 'card height derives from the measurement');
  // A constant creeping back in is the regression this exists to catch.
  ok(!/height: \d{3,}/.test(deck), 'no card height is hard-coded in the deck');
});

test('a deck card never invites the next card while it still has more to read', () => {
  // The arrow and the card's own scrolling are one mechanism. A sideways
  // chevron on a card that can still scroll down tells a learner to leave
  // content they have not seen, which is how half a card goes unread.
  const src = readFileSync(resolve(here, '../components/LessonRich.tsx'), 'utf8');
  const card = src.slice(src.indexOf('function DeckCard'), src.indexOf('export function CardDeckView'));
  ok(/dir="down" show=\{current && over && !atEnd\}/.test(card), 'down while there is more of this card');
  ok(/dir="right" show=\{current && hasNext && \(!over \|\| atEnd\)\}/.test(card), 'sideways only once it is read');
  // The overlay must never take touches: inside a horizontal ScrollView an
  // interactive overlay swallows the very swipe it advertises.
  const arrow = src.slice(src.indexOf('function DeckArrow'), src.indexOf('function DeckHint'));
  ok(/pointerEvents="none"/.test(arrow), 'the arrow never eats the swipe');

  // Verified in a real browser at 360x640: the card overflowed by 111px and the
  // arrow still pointed sideways. Two causes, both guarded here.
  // 1. flexGrow on the card's content box clamps it to the scroller, so
  //    onContentSizeChange reports "fits" for a card that does not.
  ok(!/contentContainerStyle=\{\{ padding: 20, flexGrow: 1 \}\}/.test(card),
    "the card's content box must not stretch, or overflow becomes invisible");
  // 2. onScroll's contentSize is authoritative on both platforms, so it must be
  //    able to promote `over` on its own.
  ok(/contentSize\.height > ne\.layoutMeasurement\.height/.test(card),
    'a scroll that reveals more content marks the card as overflowing');
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

test('the XL group drill owns its page, and only the XL one', () => {
  // The bug: groupDrill was not in ownsLayout, so at size 'xl' — where it
  // renders one word per SWIPED hero card — a horizontal deck sat inside the
  // page's vertical ScrollView. On a Pixel 6 that put the drill's CONTRÔLE
  // question and its "next group" button below the fold, and left the two
  // scrollers fighting for the drag.
  const pager = readFileSync(resolve(here, '../components/LessonPager.tsx'), 'utf8');
  const fn = pager.slice(pager.indexOf('function ownsLayout'), pager.indexOf('function PageScroll'));
  ok(fn.length > 0, 'expected an ownsLayout body');
  ok(/groupDrill/.test(fn), 'ownsLayout knows about the group drill');
  // Conditional on SIZE, not on the type. sons.02 and sons.03 both ship a
  // non-xl groupDrill that is a plain stack of rows with no deck in it; those
  // need the scrolling page, and pinning them to the viewport would clip
  // their lower rows with no way to reach them.
  ok(/groupDrill'\s*&&[\s\S]{0,80}?'xl'/.test(fn), 'and only claims the viewport at size xl');

  // The flex chain has to be unbroken from the section wrapper down to the
  // card, or the deck measures nothing and the card falls back to a guess.
  const sec = readFileSync(resolve(here, '../components/MissionSection.tsx'), 'utf8');
  ok(/s\.size === 'xl' \? \{ flex: 1 \}/.test(sec), 'the section wrapper fills for an xl drill');
  const rich = readFileSync(resolve(here, '../components/MissionRich.tsx'), 'utf8');
  ok(/const xl = s\.size === 'xl'/.test(rich), 'GroupDrillView knows its own size');
  ok(/<SwipeDeck\s+fill/.test(rich), 'the xl deck runs in fill mode');
  ok(/height=\{cardH\}/.test(rich), 'and the measured height reaches the card');

  // The card must PREFER the measurement over the guess.
  ok(
    /height != null && height > 160 \? height : fallback/.test(rich),
    'a measured height wins, with a floor so a mid-layout 0 cannot collapse the card'
  );

  // Every non-xl groupDrill in the shipped content must still be the plain
  // stacked shape this fix deliberately leaves alone.
  const drills = seed.lessons.flatMap((l) =>
    (l.sections ?? []).filter((s) => s.type === 'groupDrill').map((s) => ({ lesson: l.id, size: (s as { size?: string }).size }))
  );
  ok(drills.length > 0, 'the seed ships group drills at all');
  ok(drills.some((d) => d.size === 'xl'), 'at least one is xl (sons.06)');
  ok(drills.some((d) => d.size !== 'xl'), 'and at least one is not, which is why the fix is conditional');
});

test('the XL word deck spends no layout height on chrome it does not need', () => {
  // The hero card is a full viewport with its play button at the BOTTOM, so
  // every row above the deck is subtracted from the one control the card
  // exists to offer. The hint row was the last of those: prose telling the
  // learner that grey letters are silent, sitting directly above an animation
  // that shows exactly that.
  const rich = readFileSync(resolve(here, '../components/MissionRich.tsx'), 'utf8');
  const xlDeck = rich.slice(rich.indexOf('<SwipeDeck'), rich.indexOf('/>', rich.indexOf('<SwipeDeck')));
  ok(/\bfill\b/.test(xlDeck), 'the xl deck still fills the viewport');
  ok(!/(^|\s)hint=/.test(xlDeck), 'and draws no hint row above itself');

  // Removed from the LAYOUT, not from the product: a screen reader user never
  // saw the line, so dropping it outright would take instruction from the
  // people most dependent on it.
  ok(/a11yHint=/.test(xlDeck), 'the instruction survives as a spoken hint');
  const deck = readFileSync(resolve(here, '../components/LessonDeck.tsx'), 'utf8');
  ok(/accessibilityHint=\{a11yHint \?\? hint\}/.test(deck), 'and the deck speaks it whether drawn or not');

  // A deck that DOES draw a hint must keep the row's height for the whole
  // deck. Unmounting it on swipe would grow the measured box that sizes the
  // cards, resizing every card mid-drag.
  ok(/opacity: hintFade/.test(deck), 'a drawn hint fades rather than unmounting');

  // Position is stated once, in the measured footer, and it has to speak:
  // dots alone are invisible to a screen reader.
  ok(/accessibilityRole="progressbar"/.test(deck), 'the affordance row announces itself');
  ok(/accessibilityLabel=\{`Card \$\{index \+ 1\} of \$\{total\}`\}/.test(deck), 'and says where the learner is');
});

test('a swipe deck measures its own width rather than assuming the screen', () => {
  // The page is inset 24px each side. Initialising card width from
  // useWindowDimensions() made every card 48px too wide, so page two started
  // just off-screen and the swipe read as dead.
  const deck = readFileSync(resolve(here, '../components/LessonDeck.tsx'), 'utf8');
  ok(/useState<number \| null>\(null\)/.test(deck), 'width starts unmeasured');
  // Matches the BEHAVIOUR (width is set from a layout event) rather than one
  // exact spelling of the handler. The previous form pinned a single-line
  // arrow, so adding a second statement to the same onLayout — measuring the
  // height for fill mode — failed a test whose subject had not changed.
  ok(/onLayout=\{[\s\S]{0,200}?setW\(/.test(deck), 'width comes from a real layout');
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

test('the mission label counts in the same terms as the missions hub', { skip: !published }, () => {
  // The bug: the pager's numerator was an index over its OWN section list,
  // which has the quiz removed, while the denominator counted every mission.
  // sons.06 puts its quiz at section 20 of 21, so the roundup after it
  // rendered "MISSION 20 / 21" while the hub listed the same section as 21.
  const full = published!.sections;
  const contentIx = full.filter((s) => s.type !== 'quiz');
  const quizAt = full.findIndex((s) => s.type === 'quiz');
  ok(quizAt >= 0 && quizAt < full.length - 1, 'this lesson has a quiz that is NOT last, which is what exposes the bug');

  // The screen's mapping, mirrored: resolve by identity against the full list.
  const missionNumberOf = (ix: number) => full.indexOf(contentIx[ix]) + 1;

  // Every section past the quiz shifts, and the raw index would be wrong.
  const roundupContentIx = contentIx.findIndex((s) => s.type === 'roundup');
  strictEqual(missionNumberOf(roundupContentIx), full.length, 'the roundup is the last mission');
  ok(roundupContentIx + 1 !== full.length, 'and the raw index alone would have got that wrong');

  // Nothing before the quiz moves, and no two missions share a number.
  const seen = new Set<number>();
  contentIx.forEach((_s, ix) => {
    const n = missionNumberOf(ix);
    ok(n >= 1 && n <= full.length, `mission ${n} is inside 1..${full.length}`);
    ok(!seen.has(n), `mission number ${n} is not issued twice`);
    seen.add(n);
    if (ix < quizAt) strictEqual(n, ix + 1, 'sections before the quiz keep their position');
  });
});

test('a reference sheet opened from a mission offers a way FORWARD, not only back', () => {
  // The bug: the sheet's only exit was "Back to the lesson", which returned the
  // learner to the mission they had just finished. The silent-letter grid
  // previews eight of sixteen rows, so someone who reads the full table in the
  // sheet has completed that material and was being sent backwards to the
  // preview of it.
  const sheet = readFileSync(resolve(here, '../components/ReferenceSheet.tsx'), 'utf8');
  const screen = readFileSync(resolve(here, '../../app/lesson.tsx'), 'utf8');

  ok(/forwardLabel/.test(sheet), 'the sheet view takes a forward label');
  ok(/onForward/.test(sheet), 'and a forward action');
  ok(/name="arrowRight"/.test(sheet), 'the forward control carries a forward-pointing arrow');
  // Both exits are offered together, so looking one row up still gets you back.
  ok(/returnLabel \|\| forwardLabel/.test(sheet), 'the footer renders when either exit exists');

  // The same asymmetry the return label already had: a sheet reached from the
  // header index belongs to no mission, so it has no "next" to offer.
  ok(
    /initialSheetId && onContinue \? onContinue : undefined/.test(sheet),
    'forward is offered only for a sheet opened FROM a mission'
  );

  // The screen must navigate by ANCHOR. The sheet is an early return, so while
  // it is open the pager is unmounted — anything imperative would be called on
  // a null ref and silently do nothing.
  ok(/onContinue=\{continueFromSheet\}/.test(screen), 'the screen handles the forward action');
  const fn = screen.slice(screen.indexOf('const continueFromSheet'), screen.indexOf('const missionNumberOf'));
  ok(fn.length > 0, 'expected a continueFromSheet body');
  ok(/router\.setParams\(\{ at:/.test(fn), 'it navigates by deep-link anchor, as jumpToRef does');
  ok(/setSheetId\(null\)/.test(fn), 'and closes the sheet');
  ok(/Math\.min\(from \+ 1/.test(fn), 'it advances one mission, clamped at the last');
});

// ── The trap mission is stepped, not stacked ────────────────────────────────
//
// s06-trap carried three different jobs on one screen: six flip cards, a
// recorded audio set, and the reflex check. Stacked, that was ~900px of
// column, so the check sat permanently below the fold and the declared audio
// never played at all. It is now one section walked in three steps (14.1 the
// traps, 14.2 the audio, 14.3 the check).
//
// It stays ONE section deliberately: act3 claims 's06-trap' by id and the quiz
// questions carry `ref: 's06-trap'`, so splitting it into peer sections would
// have renumbered the spine and broken both.
test('the trap mission walks its three jobs one screen at a time', { skip }, () => {
  const trap = LESSON!.sections.find((s) => (s as { id?: string }).id === 's06-trap') as
    | { steps?: { kind: string; label: string; gate?: boolean }[]; cards?: unknown[]; drill?: unknown[]; audio?: unknown }
    | undefined;
  ok(trap, 's06-trap exists');

  const kinds = (trap!.steps ?? []).map((st) => st.kind);
  deepStrictEqual(kinds, ['cards', 'audio', 'drill'], 'meet the trap, hear it, then prove you beat it');

  // Every slice of the section must be named by a step, or it is authored,
  // validated, and then silently never rendered — which is exactly what
  // happened to this section's audio in the stacked shape.
  ok(trap!.audio, 'the section still declares its recorded set');
  ok(kinds.includes('audio'), 'and a step actually plays it');

  // The reflex is the point of the mission. A check the learner can swipe past
  // is not a check.
  const drillStep = trap!.steps!.find((st) => st.kind === 'drill')!;
  strictEqual(drillStep.gate, true, 'the reflex step holds until it is answered');

  // Gating on a single four-option question is a 1-in-4 guess standing in for
  // a reflex check.
  ok((trap!.drill ?? []).length >= 4, `the gate asks ${(trap!.drill ?? []).length} questions, not one`);
});

// The stepped section owns the viewport, exactly like the XL group drill and
// the card deck. Its cards step is a swipe deck that MEASURES its room, so a
// hug-content wrapper leaves it nothing to measure and the cards render at
// zero height — the bug the cardDeck hit before ownsLayout learned about it.
test('the stepped trap mission owns its page, and only the stepped one', { skip }, () => {
  const pager = readFileSync(resolve(here, '../components/LessonPager.tsx'), 'utf8');
  const section = readFileSync(resolve(here, '../components/MissionSection.tsx'), 'utf8');

  ok(
    /s\.type === 'trapDrill' && \(\(s as \{ steps\?: unknown\[\] \}\)\.steps\?\.length \?\? 0\) > 0/.test(pager),
    'the pager lets a stepped trapDrill own the viewport'
  );
  ok(/s\.steps\?\.length \? \{ flex: 1 \} : undefined/.test(section), 'and the wrapper passes the fill down');

  // Deliberately conditional: without steps the section is a plain column of
  // flip cards that needs the scrolling page, and pinning it to the viewport
  // would clip its lower cards with no way to reach them.
  ok(!/s\.type === 'trapDrill'\) return true/.test(pager), 'an unstepped trapDrill keeps its scrolling page');
});

// Four options in one flex row gave each ~70px on a Pixel 6, so a label like
// "bonjour" wrapped mid-row and picking one added border weight that reflowed
// the already-overflowing line.
test('the trap options wrap instead of being crushed into one row', { skip }, () => {
  const rich = readFileSync(resolve(here, '../components/MissionRich.tsx'), 'utf8');
  const fn = rich.slice(rich.indexOf('function TrapOptions'), rich.indexOf('function TrapCardsStep'));
  ok(fn.length > 0, 'expected a TrapOptions body');
  ok(/flexWrap: 'wrap'/.test(fn), 'the options wrap');
  ok(/q\.opts\.length > 3/.test(fn), 'and go two-per-row only when there are enough to crush');
});
