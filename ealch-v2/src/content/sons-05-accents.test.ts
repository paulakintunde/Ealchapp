// Guards sons.05.l1 "Les accents" — the lesson-specific assertions the generic
// contract cannot make.
//
// lesson-contract.test.ts runs over EVERY lesson in the seed and enforces the
// rules that are true of any lesson: ids resolve, checks explain themselves,
// acts claim real sections, nothing renders empty. This file is the other half:
// the claims that are true of THIS lesson and would be meaningless asked of
// another one. Its spine, in its order. Its reframe, in the places that carry
// it. Its tranches releasing only the words it has actually taught.
//
// The lesson body lives in the admin repo (ealch-admin/scripts/data/), because
// that is where content is authored before it is published into seed.json.
// This test runs against it directly so the lesson is checked at AUTHORING
// time, not only once it has shipped. When the batch has been applied and the
// lesson exists in seed.json, the seed copy is checked too.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { formatIssues, quizQuestions, validateItem, validateLesson, type Lesson } from './schema.ts';
import { formatDensity, validateDensity } from './density.logic.ts';
import { hasSlow, pendingRecordings, referencedRecordingIds, resolveByText, audioIndex } from './lessonAudio.logic.ts';
import { checkpointFor, releasedThrough, stoppingPoints, tranche } from './acts.logic.ts';
import { advanceQuiz, answerQuestion, buildQuizConfig, drillForRound, initialQuizState } from './quizRounds.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));

// The admin repo is a sibling checkout. Skip cleanly when it is absent (the
// app can be built on its own) rather than failing the suite.
let LESSON: Lesson | null = null;
let REFRAME = '';
let ITEM_IDS = new Set<string>();
let CORPUS: { id: string; fr: string; markAt: number[]; respell?: string; mark: string; role: string; tags: string[] }[] = [];

try {
  const corpus = await import('../../../ealch-admin/scripts/data/accents-corpus.ts');
  const lesson = await import('../../../ealch-admin/scripts/data/accents-lesson.ts');
  CORPUS = corpus.ACCENTS;
  ITEM_IDS = new Set(corpus.ACCENTS_IDS);
  LESSON = lesson.ACCENTS_LESSON;
  REFRAME = lesson.REFRAME;
} catch {
  // Not available; every test below no-ops.
}

const skip = !LESSON;

/** Every authored string in a value. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

const sectionIds = () => (LESSON!.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[]);

/* ─── The corpus ──────────────────────────────────────────────────────────── */

test('the lexeme corpus is valid and complete', { skip }, () => {
  strictEqual(CORPUS.length, 62, 'all 62 words present');
  const asItems = CORPUS.map((w) => {
    const { markAt: _m, mark: _k, role: _r, ...rest } = w as Record<string, unknown>;
    return rest;
  });
  const issues = asItems.flatMap((i) => validateItem(i, String((i as { id: string }).id)));
  strictEqual(issues.length, 0, formatIssues(issues));
});

test('every markAt index points at a letter that really carries a mark', { skip }, () => {
  // The off-by-one class of bug, and it bit seven entries during authoring: an
  // index one short lights the letter BEFORE the accent, teaching the learner
  // that the wrong glyph is the one doing the work. Checked in both directions
  // so an unlisted mark fails too.
  const MARKED = /[éèêëçàâîôûùïÉÈÊËÇ]/;
  for (const wd of CORPUS) {
    const chars = [...wd.fr];
    for (const i of wd.markAt) {
      ok(i >= 0 && i < chars.length, `${wd.id} "${wd.fr}" index ${i} is out of range`);
      ok(MARKED.test(chars[i]), `${wd.id} "${wd.fr}" index ${i} is "${chars[i]}", which carries no mark`);
    }
    chars.forEach((c, i) => {
      if (MARKED.test(c)) ok(wd.markAt.includes(i), `${wd.id} "${wd.fr}" has an unlisted mark at ${i} ("${c}")`);
    });
  }
});

test('every mark the unit promises is actually taught', { skip }, () => {
  // The unit's canDo names é, è, ê, ë and ç. A lesson that quietly dropped one
  // would still pass every generic check while failing its own brief.
  const byMark = new Map<string, number>();
  for (const wd of CORPUS) byMark.set(wd.mark, (byMark.get(wd.mark) ?? 0) + 1);
  for (const mark of ['aigu', 'grave-e', 'circonflexe', 'trema', 'cedille']) {
    ok((byMark.get(mark) ?? 0) >= 5, `${mark} has ${byMark.get(mark) ?? 0} words, expected at least 5`);
  }
  // Weighted toward what a learner meets most, not spread evenly. é is on the
  // past participle of every regular verb, so it must lead.
  ok((byMark.get('aigu') ?? 0) >= (byMark.get('trema') ?? 0) * 2, 'é is weighted above the rarer marks');

  // And the unmarked contrast words exist: a minimal pair needs both halves.
  ok((byMark.get('none') ?? 0) >= 5, 'the unmarked halves of the pairs are in the corpus');
});

test('every minimal pair has both halves, and they differ by one mark', { skip }, () => {
  // These are the lesson's best drill material and the reason the corpus is
  // authored rather than borrowed. A pair with one half missing is a drill that
  // cannot be run.
  const pairTags = [...new Set(CORPUS.flatMap((w) => w.tags.filter((t) => t.startsWith('pair-'))))];
  ok(pairTags.length >= 5, `${pairTags.length} minimal pairs, expected at least 5`);
  const strip = (s: string) =>
    s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ç/gi, 'c').toLowerCase();
  for (const tag of pairTags) {
    const members = CORPUS.filter((w) => w.tags.includes(tag));
    strictEqual(members.length, 2, `pair "${tag}" has ${members.length} members, expected 2`);
    const [a, b] = members;
    // Identical once the marks are removed: that is what makes it minimal.
    strictEqual(strip(a.fr), strip(b.fr), `pair "${tag}": ${a.fr}/${b.fr} differ by more than a mark`);
    // And genuinely different words, or the pair teaches nothing.
    ok(a.en !== b.en, `pair "${tag}": both halves gloss as "${a.en}"`);
  }
});

/* ─── The lesson ──────────────────────────────────────────────────────────── */

test('the lesson passes the app schema', { skip }, () => {
  const issues = validateLesson(LESSON!);
  strictEqual(issues.length, 0, formatIssues(issues));
  strictEqual(LESSON!.id, 'sons.05.l1');
  strictEqual(LESSON!.unitId, 'sons.05');
  strictEqual(LESSON!.level, 'sons');
  strictEqual(LESSON!.tag, 'SONS · LEÇON 05');
});

test('the lesson passes every density rule', { skip }, () => {
  // The content was checked against these rules before it was handed over, so
  // a failure here means the VALIDATOR is wrong.
  const issues = validateDensity(LESSON!, ITEM_IDS);
  strictEqual(issues.length, 0, formatDensity(issues));
});

test('the mission spine is present and correctly ordered', { skip }, () => {
  // The spine is a required BACKBONE, not a fixed length. What must hold is
  // that every backbone mission is present and the teaching ORDER is intact:
  // each mark is drilled before it is checked, the silent marks come after the
  // sounding ones that make them surprising, and everything is proved last.
  const ids = sectionIds();

  const backbone = [
    's01-scene', 's02-goals', 's03-anchors', 's04-grid',
    's05-aigu', 's06-grave', 's07-circonflexe', 's08-pairs',
    's09-silent-marks', 's09-silent-practice', 's10-trema', 's11-cedille', 's12-errors',
    's13-flashcards', 's14-examples', 's15-dictation', 's16-listening',
    's17-speak', 's18-scenario', 's19-reading', 's20-review', 's21-progress',
    's22-quiz', 's23-roundup',
  ];
  for (const id of backbone) ok(ids.includes(id), `backbone mission ${id} is present`);

  const positions = backbone.map((id) => ids.indexOf(id));
  for (let i = 1; i < positions.length; i++) {
    ok(positions[i] > positions[i - 1], `${backbone[i]} comes after ${backbone[i - 1]}`);
  }

  // The quiz is second to last and the roundup closes, whatever else is added.
  strictEqual(ids[ids.length - 1], 's23-roundup');
  strictEqual(ids[ids.length - 2], 's22-quiz');
});

test('every family drill is followed by its own control page', { skip }, () => {
  // The alternating shape: a word deck, then a four-option check on the rule
  // that deck just taught. A drill with no check lets the learner swipe past
  // material they have not understood.
  const ids = sectionIds();
  for (const [drill, check] of [
    ['s05-aigu', 's05-check-aigu'],
    ['s06-grave', 's06-check-grave'],
    ['s07-circonflexe', 's07-check-circonflexe'],
    ['s08-pairs', 's08-check-pairs'],
    ['s10-trema', 's10-check-trema'],
    ['s11-cedille', 's11-cedille-rule'],
  ] as const) {
    strictEqual(ids.indexOf(check), ids.indexOf(drill) + 1, `${check} follows ${drill} immediately`);
  }
  // Act 3 is the one exception, and deliberately: its trapDrill cannot join
  // the corpus (a TrapCard carries no itemId), so a reading practice sits
  // between the drill and its check to make that join. The check still comes
  // after both.
  ok(
    ids.indexOf('s09-check-silent') > ids.indexOf('s09-silent-practice'),
    's09-check-silent comes after the practice that feeds it'
  );
  ok(
    ids.indexOf('s09-silent-practice') > ids.indexOf('s09-silent-marks'),
    's09-silent-practice comes after the rule it drills'
  );
});

test('every control page explains its answer', { skip }, () => {
  // A control that only recolours two rows tells someone they were wrong
  // without telling them why, at the exact moment the rule was most likely to
  // land. lesson-contract enforces this seed-wide; pinned here because this
  // lesson's teaching lives in these seven pages.
  let controls = 0;
  for (const s of LESSON!.sections) {
    if (s.type !== 'groupDrill') continue;
    const groups = (s as { groups?: { items?: unknown[]; check?: { why?: string } }[] }).groups ?? [];
    if (groups.length !== 1) continue;
    const g = groups[0];
    if (!g.check || (g.items?.length ?? 0) > 0) continue;
    controls++;
    ok(g.check.why?.trim(), `${(s as { id?: string }).id}: control page has no why`);
  }
  strictEqual(controls, 7, 'the seven groupDrill control pages are all present');
});

test('no two missions are the same type doing the same job', { skip }, () => {
  // sons.06 shipped missions 20 and 23 as two `practice` sections with
  // near-identical framing, and that is recorded as debt rather than
  // precedent. Here each repeated type has a distinct skill or shape.
  const practice = LESSON!.sections.filter((s) => s.type === 'practice');
  const skills = practice.map((s) => (s as { skill?: string }).skill);
  strictEqual(new Set(skills).size, skills.length, `two practice sections share a skill: ${skills.join(', ')}`);
});

test('the reframe appears verbatim across the lesson, never reworded', { skip }, () => {
  strictEqual(REFRAME, 'The mark is part of the letter, not decoration on it.');
  // The density validator's floor is three sections. Carrying it in more is
  // what makes it a spine rather than a sentence that happened once, and
  // pinning the real number means a reworded copy fails rather than quietly
  // dropping to the minimum.
  const carrying = LESSON!.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME)));
  ok(carrying.length >= 5, `the reframe carries ${carrying.length} sections, expected at least 5`);

  // And it lands at the moments that matter: where the problem is named, where
  // the exception to it is taught, and where it is summarised.
  const ids = carrying.map((s) => (s as { id: string }).id);
  for (const id of ['s01-scene', 's03-anchors', 's09-silent-marks', 's23-roundup']) {
    ok(ids.includes(id), `the reframe is stated on ${id}`);
  }
});

test('the organising idea holds: the lesson teaches what each mark CHANGES', { skip }, () => {
  // The frame is "what does this mark change", not "which mark is this". That
  // shows up structurally: four of the seven acts are named for a kind of
  // change, and every one of them exists.
  const actTitles = (LESSON!.acts ?? []).map((a) => a.title.toLowerCase());
  for (const kind of ['vowel', 'nothing', 'splits', 'consonant']) {
    ok(actTitles.some((t) => t.includes(kind)), `an act is named for the "${kind}" case`);
  }
  // The silent-marks act is load-bearing, not a footnote: having taught twice
  // that a mark changes a sound, the lesson has to say that some do not, or
  // the learner over-applies the rule.
  const silent = LESSON!.sections.find((s) => (s as { id?: string }).id === 's09-silent-marks');
  ok(silent, 'the silent-marks mission exists');
  ok((silent as { rule?: { body?: string } }).rule?.body, 'and it carries a rule of its own');
});

/* ─── The quiz ────────────────────────────────────────────────────────────── */

test('the quiz is 4 rounds of 8, every question answerable and explained', { skip }, () => {
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  strictEqual(q.rounds?.length, 4);
  for (const r of q.rounds!) strictEqual(r.questions.length, 8, `round ${r.id} has 8 questions`);

  const all = quizQuestions(q);
  strictEqual(all.length, 32);
  for (const item of all) {
    // sons.02, sons.03, a2.01 and a1.04 are on a documented waiver list for
    // exactly this gap. This lesson does not join them.
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

test('the quiz title says how many questions there are', { skip }, () => {
  // The anchors deck in sons.06 was authored with six cards and a spoken line
  // that said "Six ideas", then grew to seven and kept saying six. A count in
  // chrome is data that drifts silently, because the words are copy and the
  // number is structure.
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  const WORDS: Record<string, number> = {
    'twenty-four': 24, 'twenty-eight': 28, 'thirty': 30, 'thirty-two': 32, 'forty': 40,
  };
  const m = q.title.toLowerCase().match(/^([a-z-]+)/);
  const claimed = m ? WORDS[m[1]] : undefined;
  if (claimed !== undefined) strictEqual(claimed, quizQuestions(q).length, `the quiz is titled "${q.title}"`);
});

test('a section that counts its own contents aloud says the right number', { skip }, () => {
  const WORDS: Record<string, number> = { four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, twelve: 12 };
  const spoken = (text: string): number | null => {
    const m = text.toLowerCase().match(/^(four|five|six|seven|eight|nine|ten|twelve)\b/);
    return m ? WORDS[m[1]] : null;
  };
  for (const s of LESSON!.sections) {
    const cards = (s as { cards?: unknown[] }).cards;
    if (!Array.isArray(cards)) continue;
    const say = (s as { say?: { text?: string } }).say?.text;
    const id = (s as { id?: string }).id;
    const n = say ? spoken(say) : null;
    if (n !== null) strictEqual(n, cards.length, `${id} says "${say?.slice(0, 24)}" but has ${cards.length} cards`);
    const title = (s as { title?: string }).title;
    const tn = title ? spoken(title) : null;
    if (tn !== null) strictEqual(tn, cards.length, `${id} is titled "${title}" but has ${cards.length} cards`);
  }
});

test('correct answers do not cluster in one position', { skip }, () => {
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  const slots = quizQuestions(q).filter((x) => typeof x.correct === 'number').map((x) => x.correct as number);
  const tally = new Map<number, number>();
  for (const s of slots) tally.set(s, (tally.get(s) ?? 0) + 1);
  for (const [slot, n] of tally) {
    const pct = (n / slots.length) * 100;
    ok(pct <= 40, `${pct.toFixed(0)}% of answers sit in position ${slot}`);
  }
});

test('every quiz ref names a real section', { skip }, () => {
  const ids = new Set(sectionIds());
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  for (const item of quizQuestions(q)) {
    ok(ids.has(item.ref!), `ref "${item.ref}" for "${item.q}" names a section`);
  }
});

test('the quiz exercises more than one answer format', { skip }, () => {
  // The round engine renders six formats. A quiz that only ever asks mcq is
  // testing recognition and calling it mastery.
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  const formats = new Set(quizQuestions(q).map((x) => x.format ?? 'mcq'));
  for (const fmt of ['mcq', 'typeIn', 'speak', 'errorSpot', 'listenChoose', 'tapSilent']) {
    ok(formats.has(fmt), `the lesson exercises the "${fmt}" format`);
  }
  // And every format used is one the engine can actually draw.
  const view = readFileSync(resolve(here, '../components/QuizRoundsView.tsx'), 'utf8');
  for (const fmt of formats) {
    ok(new RegExp(`case '${fmt}':`).test(view) || fmt === 'mcq', `the engine renders "${fmt}" questions`);
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

/* ─── Acts, tranches, structure ───────────────────────────────────────────── */

test('all 62 itemIds resolve, and the tranches release only taught words', { skip }, () => {
  strictEqual(LESSON!.itemIds.length, 62);
  for (const id of LESSON!.itemIds) ok(ITEM_IDS.has(id), `${id} resolves`);

  strictEqual(LESSON!.deckTranche?.length, LESSON!.acts?.length, 'one tranche per act');
  const released = LESSON!.deckTranche!.flat();
  strictEqual(new Set(released).size, released.length, 'no word is released twice');
  strictEqual(released.length, 62, 'every word reaches the SRS exactly once');
  for (const id of released) ok(LESSON!.itemIds.includes(id), `${id} is taught before it is released`);
});

test('a tranche releases only words its own act has met', { skip }, () => {
  // The failure this catches: an act boundary handing the SRS a word the
  // learner has not seen yet, which turns review into a cold quiz.
  const acts = LESSON!.acts ?? [];
  for (const [i, act] of acts.entries()) {
    const seenSoFar = new Set(
      acts.slice(0, i + 1)
        .flatMap((a) => a.sections)
        .flatMap((sid) => {
          const sec = LESSON!.sections.find((s) => (s as { id?: string }).id === sid);
          return sec ? strings(sec).filter((x) => ITEM_IDS.has(x)) : [];
        })
    );
    for (const id of LESSON!.deckTranche![i] ?? []) {
      ok(seenSoFar.has(id), `act ${act.id} releases ${id}, which no section up to that point teaches`);
    }
  }
});

test('every act claims its sections, and no section is orphaned', { skip }, () => {
  const claimed = LESSON!.acts!.flatMap((a) => a.sections);
  for (const id of sectionIds()) ok(claimed.includes(id), `section ${id} belongs to an act`);
  strictEqual(new Set(claimed).size, claimed.length, 'no section is claimed twice');
});

test('no act runs past the checkpoint spacing limit', { skip }, () => {
  for (const a of LESSON!.acts!) {
    const stops = 1 + (a.restPoints?.length ?? 0);
    const longest = Math.ceil(a.estScreens / stops);
    ok(longest <= 22, `act "${a.id}" leaves a ${longest}-screen stretch`);
  }
});

test('a checkpoint exists for every act, and only the last one ends the lesson', { skip }, () => {
  const acts = LESSON!.acts ?? [];
  strictEqual(acts.length, 7);
  for (const a of acts) {
    const last = a.sections[a.sections.length - 1];
    const cp = checkpointFor(LESSON!, last);
    ok(cp, `act "${a.id}" has a checkpoint after "${last}"`);
    ok(cp!.act.milestone, 'and a milestone line to show on it');
  }
  const finals = acts.filter((a) => checkpointFor(LESSON!, a.sections[a.sections.length - 1])?.isFinal);
  strictEqual(finals.length, 1);
});

test('the SRS releases progressively, never all at the end', { skip }, () => {
  const acts = LESSON!.acts ?? [];
  const perAct = acts.map((_, i) => tranche(LESSON!, i).length);
  strictEqual(perAct.reduce((a, b) => a + b, 0), 62, 'every word is released exactly once');
  const last = perAct[perAct.length - 1];
  ok(last < 31, `the final act releases ${last} of 62, not the bulk`);
  const midway = releasedThrough(LESSON!, 3).length;
  ok(midway > 0 && midway < 62, `${midway} cards released by act 4`);
});

test('the lesson gives a learner somewhere to stop every few screens', { skip }, () => {
  const stops = stoppingPoints(LESSON!);
  strictEqual(stops.filter((s) => s.kind === 'checkpoint').length, 7);
  ok(stops.filter((s) => s.kind === 'rest').length >= 3, 'at least three rest points');
});

test('the error-trigger system is fully wired', { skip }, () => {
  const drillIds = new Set(LESSON!.drills!.map((d) => d.id));
  const ids = new Set(sectionIds());
  for (const t of LESSON!.errorTriggers!) {
    ok(drillIds.has(t.drill), `trigger ${t.id} names a real drill`);
    if (t.retest) ok(drillIds.has(t.retest), `trigger ${t.id} names a real retest`);
    // A trigger watching a section that does not exist detects nothing.
    for (const sid of t.detectOn) ok(ids.has(sid), `trigger ${t.id} watches "${sid}", which is not a section`);
  }
  const triggerIds = new Set(LESSON!.errorTriggers!.map((t) => t.id));
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  for (const r of q.rounds!) {
    ok(r.targets?.length, `round ${r.id} declares a target`);
    for (const target of r.targets!) ok(triggerIds.has(target), `round ${r.id} target "${target}" exists`);
  }
});

test('every drill works over words the lesson actually taught', { skip }, () => {
  for (const d of LESSON!.drills ?? []) {
    for (const id of d.items ?? []) {
      ok(ITEM_IDS.has(id), `drill ${d.id} names ${id}, which is not in the corpus`);
    }
    // A remediation drill with neither items nor pairs nor a question is a
    // detour that shows the learner nothing.
    ok(d.items?.length || d.pairs?.length || d.q, `drill ${d.id} has something to show`);
    if (d.q) ok(d.why, `retest ${d.id} explains its answer`);
  }
});

/* ─── Reference sheets and the glossary ───────────────────────────────────── */

test('the four reference sheets exist and are reachable', { skip }, () => {
  strictEqual(LESSON!.sheets?.length, 4);
  const sheetIds = new Set(LESSON!.sheets!.map((s) => s.id));
  for (const s of LESSON!.sections) {
    const ref = (s as { sheetId?: string }).sheetId;
    if (ref) ok(sheetIds.has(ref), `sheetId "${ref}" resolves`);
  }
  for (const sh of LESSON!.sheets!) {
    ok(sh.sections?.length, `sheet ${sh.id} has content, not just a title`);
    // Sheets are the one place density is fine, so they must say so.
    for (const sec of sh.sections!) {
      strictEqual((sec as { layer?: string }).layer, 'deep', `${sh.id} sections are layer deep`);
    }
  }
  // A table belongs in a sheet and nowhere else. The density validator bans
  // one in a core section; this checks the sheets are where they went.
  const inSheets = LESSON!.sheets!.flatMap((s) => s.sections ?? []).filter((s) => s.type === 'table');
  ok(inSheets.length >= 4, `${inSheets.length} tables live in the sheets`);
});

test('every glossary term is defined once and resolves its examples', { skip }, () => {
  const terms = LESSON!.terms ?? {};
  ok(Object.keys(terms).length >= 6, 'the lesson has a real glossary');
  for (const [key, def] of Object.entries(terms)) {
    ok(def.term && def.title && def.body, `${key} is complete`);
    ok(def.body.length > 150, `${key} is a real explanation, not a gloss`);
    for (const ex of def.examples ?? []) {
      ok(ITEM_IDS.has(ex.itemId), `${key} example ${ex.itemId} resolves against the corpus`);
    }
  }
  const known = new Set(Object.keys(terms));
  for (const s of LESSON!.sections) {
    for (const key of (s as { terms?: string[] }).terms ?? []) {
      ok(known.has(key), `section ${(s as { id?: string }).id} names defined term "${key}"`);
    }
  }
});

test('no mission carries more than three term chips', { skip }, () => {
  // The renderer shows 3 and collapses the rest behind "+N". sons.06 has seven
  // sections over that cap and it is recorded as debt, not precedent, so this
  // lesson holds the line rather than inheriting the problem.
  for (const s of LESSON!.sections) {
    const t = (s as { terms?: string[] }).terms ?? [];
    ok(t.length <= 3, `${(s as { id?: string }).id} declares ${t.length} term chips (cap 3)`);
  }
});

/* ─── Audio ───────────────────────────────────────────────────────────────── */

test('the studio brief is complete: every recording is described', { skip }, () => {
  const recorded = LESSON!.audio?.recorded ?? [];
  strictEqual(recorded.length, 13);
  for (const r of recorded) ok(r.desc && r.desc.length > 20, `${r.id} carries a real brief`);

  // A card pointing at a set the lesson never declared falls back to TTS
  // forever with nobody noticing, which is the silent-failure case.
  const declared = new Set(recorded.map((r) => r.id));
  for (const id of referencedRecordingIds(LESSON)) {
    ok(declared.has(id), `recordingId "${id}" is declared in audio.recorded`);
  }
});

test('the lesson runs on TTS today and improves when the studio delivers', { skip }, () => {
  // Every declared recording is still pending, so every card falls back to
  // synthesis. That is the correct shipping state: CLIP_MANIFEST is empty by
  // design and a recordingId resolving to nothing is not a bug. What matters
  // is that nothing in the lesson is BLOCKED on audio that does not exist.
  const owed = pendingRecordings(LESSON!.audio);
  strictEqual(owed.length, 13, 'all thirteen sets are still owed');
  for (const r of owed) ok(r.desc.length > 20, `${r.id} carries a brief the studio can act on`);
});

test('nothing is silent today: every spec falls back to TTS on the French', { skip }, () => {
  const ix = audioIndex(LESSON!);
  ok(ix.size >= 20, `${ix.size} French strings carry an authored spec`);
  for (const [text] of ix) {
    const r = resolveByText(text, ix, { lessonAudio: LESSON!.audio });
    strictEqual(r.audioRef, null, `"${text.slice(0, 20)}" has no clip yet`);
    ok(r.text.trim().length > 0, `"${text.slice(0, 20)}" still speaks`);
  }
});

test('the two speeds are offered, and slow is the 0.65 pass', { skip }, () => {
  deepStrictEqual(LESSON!.audio?.speeds, [1.0, 0.65]);
  ok(hasSlow(undefined, LESSON!.audio), 'long-press for slow is available lesson-wide');
});

test('contrast screens play audio before the text resolves', { skip }, () => {
  // Reversing that order lets the eye answer the question the ear was supposed
  // to. On this lesson it matters most on the pairs that sound IDENTICAL: the
  // whole teaching point is that listening cannot separate them.
  const scene = LESSON!.sections.find((s) => s.type === 'scene');
  ok(scene && scene.type === 'scene');
  const brk = scene.beats.find((b) => b.kind === 'break');
  ok(brk && brk.kind === 'break');
  ok(brk.audio?.audioFirst, 'the break plays its model before the reading resolves');

  // s08-pairs is the mission where the ear CAN separate the two words, so the
  // model must play before the spelling resolves.
  const pairs = LESSON!.sections.find((s) => (s as { id?: string }).id === 's08-pairs');
  ok((pairs as { audio?: { audioFirst?: boolean } })?.audio?.audioFirst, 's08-pairs leads with the ear');

  // s09-silent-marks deliberately carries NO section audio: its trapDrill has
  // no audio step (TrapAudioStep hardcodes a French line about the letter R,
  // which is false on this lesson), and the schema ties a section audio spec to
  // that step. The recording is still requested and still played, by the
  // practice section that follows. A missing spec here is a decision, not an
  // oversight, so it is pinned rather than left to drift back.
  const trap = LESSON!.sections.find((s) => (s as { id?: string }).id === 's09-silent-marks');
  ok(!(trap as { audio?: unknown }).audio, 's09-silent-marks carries no section audio');
  const practice = LESSON!.sections.find((s) => (s as { id?: string }).id === 's09-silent-practice');
  strictEqual(
    (practice as { audio?: { recordingId?: string } })?.audio?.recordingId,
    'rec-silent-pairs',
    'the silent-pair recording is played by the practice that needs it'
  );
});

test('the header does not move between a page with a Listen chip and one without', () => {
  // Runs unconditionally: this checks SOURCE, and it is the renderer half of
  // the fix. The chip is conditionally mounted on `say`, and its row had no
  // height of its own, so the row collapsed on any section without one and the
  // whole header jumped 37px in and back out. A lesson that alternates a drill
  // with a control page fires that on every other swipe.
  const pager = readFileSync(resolve(here, '../components/LessonPager.tsx'), 'utf8');
  ok(/const LISTEN_CHIP_H = \d+/.test(pager), 'the chip height is a named constant');
  ok(/height: LISTEN_CHIP_H/.test(pager), 'the chip is sized from it');
  // The row must reserve that same height, or the chip's space is not held
  // open and the jump comes back.
  ok(/minHeight: LISTEN_CHIP_H/.test(pager), 'and the row reserves it whether or not the chip is drawn');
});

test('a stepped mission changes step with motion, and without moving', () => {
  // Runs unconditionally: this checks SOURCE. Mission 13 is the one
  // sub-dividing mission in this lesson that is NOT a SwipeDeck. Every other
  // one (the anchors deck, the errors deck) slides its cards on a paging
  // ScrollView; this one swapped its body on a setState, so a learner who had
  // just swiped smoothly into the mission tapped Continue and the content
  // changed with no motion at all.
  //
  // Three separate things moved on that swap, and all three are pinned here.
  const rich = readFileSync(resolve(here, '../components/MissionRich.tsx'), 'utf8');

  // 1. The body fades instead of cutting.
  ok(/const STEP_FADE_MS = \d+/.test(rich), 'the step fade has a named duration');
  ok(/opacity: stepFade/.test(rich), 'and the step body is driven by it');
  // The driver must sit ABOVE the unstepped early return, or a trapDrill with
  // no steps changes the hook count and throws "rendered fewer hooks".
  const view = rich.slice(rich.indexOf('export function TrapDrillView'));
  const fadeAt = view.indexOf('const stepFade');
  const earlyReturn = view.indexOf('if (!steps?.length)');
  ok(fadeAt > 0 && earlyReturn > 0, 'expected both the fade driver and the unstepped return');
  ok(fadeAt < earlyReturn, 'the fade hook is declared above the early return');

  // 2. The title row is reserved, because steps carry titles individually.
  ok(/const STEP_TITLE_H = \d+/.test(rich), 'the title row has a reserved height');
  ok(/minHeight: STEP_TITLE_H/.test(rich), 'and the row holds it open when the step has no title');

  // 3. The footer is one slot, whichever control is in it. The last step swaps
  //    a 48px button for a one-line hint, and that used to resize the body.
  ok(/const STEP_FOOTER_H = \d+/.test(rich), 'the footer slot has a fixed height');
  ok(/height: STEP_FOOTER_H, marginTop/.test(rich), 'and both controls sit inside it');
});

test('the stepped mission really is stepped, and its steps differ', { skip }, () => {
  // The guard above is only meaningful while a lesson actually uses steps.
  const trap = LESSON!.sections.find((s) => s.type === 'trapDrill');
  ok(trap && trap.type === 'trapDrill');
  const steps = (trap as { steps?: { kind: string; label: string }[] }).steps ?? [];
  ok(steps.length >= 3, `${steps.length} steps`);
  // Each step does a different job, or they are pages of the same thing.
  strictEqual(new Set(steps.map((x) => x.kind)).size, steps.length, 'every step is a distinct kind');
  for (const st of steps) ok(st.label?.trim(), 'every step is labelled');
});

test('every mission can be heard, including the control pages', { skip }, () => {
  // The content half. A check is the moment a learner most wants the question
  // read to them, and a section with no `say` also draws no Listen chip. The
  // renderer no longer moves when one is missing, but a silent control page is
  // still a worse page than an audible one.
  const silent = LESSON!.sections.filter((s) => !(s as { say?: unknown }).say);
  strictEqual(
    silent.length,
    0,
    `${silent.length} section(s) carry no \`say\`: ${silent.map((s) => (s as { id?: string }).id).join(', ')}`,
  );
});

test('the reading mission highlights its words and asks about them', { skip }, () => {
  // MissionSection mounts ReadingMission ONLY when the section sets
  // `questionsInModal` AND carries questions. Without both it falls back to
  // ReadingView, which renders the passage as one block of text and ignores
  // `glossary` entirely: twelve tappable words authored, schema-valid, and
  // drawn by nothing. This pins the predicate rather than the rendering.
  const r = LESSON!.sections.find((s) => (s as { id?: string }).id === 's19-reading');
  ok(r && r.type === 'reading');
  ok((r as { questionsInModal?: boolean }).questionsInModal, 's19-reading opens its questions in a modal');
  ok((r.questions?.length ?? 0) >= 3, 'and carries the questions that mount the rich view');
  for (const q of r.questions ?? []) ok(q.a?.trim(), `"${q.q.slice(0, 40)}" has an answer`);

  // A glossed word the passage does not contain highlights nothing, so the
  // learner taps a word that was never marked.
  const gloss = (r as { glossary?: { word: string }[] }).glossary ?? [];
  ok(gloss.length >= 8, `${gloss.length} glossed words`);
  for (const g of gloss) {
    ok(r.text.includes(g.word), `glossed word "${g.word}" does not appear in the passage`);
  }
});

test('the sentences mission can be played, not just read', { skip }, () => {
  // `examples` renders every ex.fr as a French sentence the learner is meant to
  // say. The row is now a play control (LessonSection's examples branch), so a
  // section declaring audio here gets something to trigger it. sons.06 authored
  // no audio on its examples because there was no affordance; this asserts the
  // spec exists so a later edit does not quietly drop it again.
  const ex = LESSON!.sections.find((s) => (s as { id?: string }).id === 's14-examples');
  ok(ex && ex.type === 'examples');
  const audio = (ex as { audio?: { recordingId?: string } }).audio;
  strictEqual(audio?.recordingId, 'rec-examples-ten', 'the sentences declare their recording');
  for (const e of ex.examples) ok(e.fr?.trim() && e.en?.trim(), 'every example has both halves');
});

test('the dictation caps its replays', { skip }, () => {
  // Unlimited replays turn a spelling test into a transcription exercise.
  const d = LESSON!.sections.find((s) => (s as { id?: string }).id === 's15-dictation');
  ok(d && d.type === 'dictation');
  const audio = (d as { audio?: { maxPlays?: number } }).audio;
  ok(audio?.maxPlays && audio.maxPlays <= 3, 'the dictation caps replays at three or fewer');
});

/* ─── Narration ───────────────────────────────────────────────────────────── */

test('the narration is a complete, ordered spoken lesson', { skip }, () => {
  const n = LESSON!.narration;
  ok(n, 'the lesson carries a narration script');
  strictEqual(n!.camilleVoiceId, 'camille-fr-ca-01');
  strictEqual(n!.ratioEnFr, 0.7, 'the sons-band target');

  const ORDER = ['warm', 'focus', 'input', 'practice', 'produce', 'check', 'cheat'];
  const got = n!.stages.map((s) => s.stage);
  deepStrictEqual(got, ORDER, 'every stage present, in the fixed order');
  for (const st of n!.stages) ok(st.segments.length > 0, `stage ${st.stage} has segments`);
});

test('every narration interaction drills a word this lesson teaches', { skip }, () => {
  // A narration stage that drills a dangling item is the same silent
  // blank-drill failure the practice-section rule exists to prevent.
  for (const st of LESSON!.narration!.stages) {
    for (const seg of st.segments) {
      if (!('kind' in seg)) continue;
      const i = seg as { kind: string; itemId?: string; expected?: string; gradeAs?: string };
      if (!i.itemId) continue;
      ok(ITEM_IDS.has(i.itemId), `narration ${st.stage} drills ${i.itemId}, which is not in the corpus`);
      if (i.kind !== 'repeat') {
        ok(i.expected, `a ${i.kind} interaction needs an expected answer`);
        ok(i.gradeAs, `a ${i.kind} interaction needs a modality to log against`);
      }
    }
  }
});

test('the narration opens by naming the lesson and closes in French', { skip }, () => {
  const stages = LESSON!.narration!.stages;
  const warm = stages.find((s) => s.stage === 'warm')!;
  const first = warm.segments[0] as { voice?: string; text?: string };
  strictEqual(first.voice, 'en', 'the warm stage opens in English scaffolding');
  ok(/accent/i.test(first.text ?? ''), 'and says what the lesson covers');
  ok(warm.segments.length <= 6, 'the warm stage does not run long');

  const cheat = stages.find((s) => s.stage === 'cheat')!;
  const last = cheat.segments[cheat.segments.length - 1] as { voice?: string };
  strictEqual(last.voice, 'fr', 'the recap ends on a French sign-off');
});

/* ─── House style ─────────────────────────────────────────────────────────── */

test('the authored copy obeys the house style', { skip }, () => {
  const blob = JSON.stringify({ CORPUS, LESSON });
  ok(!blob.includes('—'), 'no em dash anywhere in the authored copy');
  ok(!/honest/i.test(blob), 'the word "honest" is banned from authored content');
});

test('every interface label is English, and French is only ever content', { skip }, () => {
  // The French-literal guard only reads COMPONENT source, so a French label in
  // authored content passes CI and lands on the card beside English chrome.
  // Section titles and goal headings are chrome; `frSub` is the one field that
  // is deliberately French, and it is displayed as a subtitle.
  const FRENCH = /\b(les?|la|des?|du|une?|vos|votre|à|est|sont|pour|avec|dans)\b/i;
  for (const s of LESSON!.sections) {
    const title = (s as { title?: string }).title ?? '';
    const id = (s as { id?: string }).id;
    // "Contrôle" is the one accepted French title: it is the control-page
    // convention the reference lesson established and the learner reads it as
    // a section marker rather than as instruction.
    if (title === 'Contrôle') continue;
    ok(!FRENCH.test(title), `${id}: title "${title}" reads as French UI chrome`);
  }
  for (const g of (LESSON!.sections.find((s) => s.type === 'goals') as { goals?: { t: string }[] })?.goals ?? []) {
    ok(!FRENCH.test(g.t), `goal heading "${g.t}" reads as French`);
  }
});

/* ─── The published copy ──────────────────────────────────────────────────── */

test('the seed copy matches what was authored, once the batch has run', () => {
  // Runs unconditionally. Until content:accents has been applied and published,
  // the lesson is simply absent from the seed and there is nothing to compare;
  // once it is there, it must not have drifted from the authored source.
  const seed = JSON.parse(readFileSync(join(here, 'seed.json'), 'utf8')) as { lessons: Lesson[] };
  const published = seed.lessons.find((l) => l.id === 'sons.05.l1');
  if (!published) return;

  strictEqual(published.unitId, 'sons.05');
  strictEqual(published.sections.length, 31, 'the published lesson has all its missions');
  const issues = validateLesson(published);
  strictEqual(issues.length, 0, formatIssues(issues));
  if (LESSON) {
    strictEqual(published.sections.length, LESSON.sections.length, 'the seed has not drifted from the source');
    strictEqual(published.itemIds.length, LESSON.itemIds.length);
  }
});

test('the unit points at the lesson once it has been published', () => {
  const seed = JSON.parse(readFileSync(join(here, 'seed.json'), 'utf8')) as {
    units: { id: string; lessonIds?: string[] }[];
    lessons: { id: string }[];
  };
  const unit = seed.units.find((u) => u.id === 'sons.05');
  ok(unit, 'sons.05 is in the seed');
  const published = seed.lessons.some((l) => l.id === 'sons.05.l1');
  // A unit whose lessonIds names a lesson that is not in the seed renders a
  // dead entry; a published lesson no unit points at is unreachable. Either
  // both are true or neither is.
  strictEqual(
    (unit!.lessonIds ?? []).includes('sons.05.l1'),
    published,
    'the unit link and the published lesson agree with each other'
  );
});
