// Guards the sons.08.l1 "Rythme & intonation" lesson, and the curation of the
// 189 `theme: 'rythme'` corpus rows it teaches from.
//
// lesson-contract.test.ts already runs over every lesson in the seed and checks
// what is true of ALL lessons: ids resolve, acts claim their sections, quiz refs
// point somewhere, nothing renders empty. This file holds what is only true of
// THIS one, and in particular the four things the generic contract cannot know:
//
//   1. Every item tagged `syll-N` really has N syllables in its IPA. The tags
//      were derived mechanically; this pins that they still agree, so a later
//      hand-edit cannot silently mislabel the ramp the whole lesson is built on.
//   2. The stress convention is applied to ALL 189 rows, not some. A
//      half-converted corpus is worse than an unconverted one, because the
//      lesson would teach prominence on the items that carry it and nothing at
//      all on the ones that do not.
//   3. No tranche releases a phrase longer than its act has taught. The value
//      of the syllable ramp is that it is monotonic.
//   4. The quiz is not majority mcq. Rhythm is inaudible in text, so an
//      assessment that a learner can pass by reading is a failed design.
import { strictEqual, ok, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { RYTHME, BY_ID, EXISTING_IDS, NEW_IDS, MINIMAL_PAIRS, TAPPABLE, MAX_BEATS_PER_GROUP, syllablesOf, groupsOf } from '../../../ealch-admin/scripts/data/rythme-corpus.ts';
import { RYTHME_LESSON, REFRAME } from '../../../ealch-admin/scripts/data/rythme-lesson.ts';
import { RYTHME_QUIZ_ROUNDS } from '../../../ealch-admin/scripts/data/rythme-quiz.ts';
import { quizQuestions, validateLesson, validateItem, type Item } from './schema.ts';
import { validateDensity } from './density.logic.ts';

const L = RYTHME_LESSON;

/* ─── The corpus curation ─────────────────────────────────────────────────── */

test('the corpus is CURATED, not re-authored: 165 existing rows plus 24 authored', () => {
  strictEqual(RYTHME.length, 189);
  strictEqual(EXISTING_IDS.length, 165, 'the 165 shipped rows must all still be here');
  strictEqual(NEW_IDS.length, 24, 'exactly the additions the gap audit justified');
  // The existing ids must be the first 165 and must be the original range.
  strictEqual(EXISTING_IDS[0], 'fr.sons.rythme.001');
  strictEqual(EXISTING_IDS[164], 'fr.sons.rythme.165');
  strictEqual(NEW_IDS[0], 'fr.sons.rythme.166');
  // No id appears twice: a duplicate would make the lesson drill a random half.
  strictEqual(new Set(RYTHME.map((r) => r.id)).size, 189);
});

test('GUARD 1: every syll-N tag agrees with the syllable count derived from the IPA', () => {
  const wrong: string[] = [];
  for (const r of RYTHME) {
    const tag = r.tags.find((t) => t.startsWith('syll-'));
    ok(tag, `${r.id} carries no syll- tag`);
    const claimed = Number(tag!.slice('syll-'.length));
    const actual = syllablesOf(r.ipa).length;
    if (claimed !== actual) wrong.push(`${r.id}: tagged ${claimed}, IPA has ${actual}`);
    // `syll` the FIELD must agree too, since sections read it for their notes.
    if (r.syll !== actual) wrong.push(`${r.id}: syll field ${r.syll}, IPA has ${actual}`);
  }
  deepStrictEqual(wrong, [], `syllable tags disagree with the IPA:\n  ${wrong.join('\n  ')}`);
});

test('GUARD 1b: the band tag agrees with the syllable count', () => {
  for (const r of RYTHME) {
    const n = syllablesOf(r.ipa).length;
    const band = n <= 5 ? 'short' : n <= 10 ? 'medium' : 'long';
    ok(r.tags.includes(band), `${r.id} has ${n} syllables so should be tagged ${band}, tags: ${r.tags.join(',')}`);
  }
});

test('GUARD 2: the stress convention is applied to ALL 189 rows, not some', () => {
  const bare: string[] = [];
  const malformed: string[] = [];
  for (const r of RYTHME) {
    if (!r.respell) { bare.push(r.id); continue; }
    // Bracketed, per the house respell convention and isDelimitedRespell.
    if (!/^\[.*\]$/u.test(r.respell)) { malformed.push(`${r.id}: not bracketed`); continue; }
    // EVERY rhythm group must capitalise its final syllable. That is the
    // notation, and a group that does not carry it teaches nothing.
    const inner = r.respell.replace(/^\[|\]$/gu, '');
    for (const g of inner.split('|')) {
      const words = g.trim().split(/\s+/u).filter(Boolean);
      if (!words.length) { malformed.push(`${r.id}: empty group`); continue; }
      const sylls = words[words.length - 1].split('-');
      const last = sylls[sylls.length - 1].replace(/ⁿ/gu, '');
      if (!/[A-ZÜ]{2,}/u.test(last)) {
        malformed.push(`${r.id}: group "${g.trim()}" does not capitalise its final syllable`);
      }
    }
  }
  deepStrictEqual(bare, [], `rows with no respelling at all (a half-converted corpus):\n  ${bare.join('\n  ')}`);
  deepStrictEqual(malformed, [], `rows whose respelling breaks the convention:\n  ${malformed.join('\n  ')}`);
});

test('GUARD 2b: the phrase-break mark matches the commas in the French', () => {
  for (const r of RYTHME) {
    const commas = (r.fr.match(/,/gu) ?? []).length;
    const breaks = (r.ipa.match(/\|/gu) ?? []).length;
    strictEqual(breaks, commas, `${r.id} "${r.fr}" has ${commas} comma(s) but ${breaks} break mark(s) in "${r.ipa}"`);
    // groups is breaks + 1, by definition.
    strictEqual(r.groups, breaks + 1, `${r.id} claims ${r.groups} groups with ${breaks} breaks`);
    // The respelling must carry the same number of breaks as the IPA.
    strictEqual(
      (r.respell.match(/\|/gu) ?? []).length,
      breaks,
      `${r.id}: IPA and respelling disagree about how many groups there are`
    );
  }
});

test('GUARD 2c: no item carries a stress mark this lesson did not choose', () => {
  // ˈ and ˌ were considered and rejected: the respell caps already carry
  // prominence. If one appears later, the corpus has two notations for one idea
  // and the lesson teaches its own notation twice.
  for (const r of RYTHME) {
    ok(!r.ipa.includes('ˈ'), `${r.id} carries a primary stress mark; the convention is CAPS in the respelling`);
    ok(!r.ipa.includes('ˌ'), `${r.id} carries a secondary stress mark, which this lesson does not use`);
  }
});

test('the tappable tag agrees with what BeatRow can actually draw', () => {
  for (const r of RYTHME) {
    const longest = Math.max(...groupsOf(r.ipa).map((g) => g.length));
    const fits = longest <= MAX_BEATS_PER_GROUP;
    strictEqual(
      r.tags.includes('tappable'),
      fits,
      `${r.id} longest group is ${longest} syllables (cap ${MAX_BEATS_PER_GROUP}) but tappable=${r.tags.includes('tappable')}`
    );
  }
  // The cap was measured on a Pixel 6, not chosen: at 9 the chip is 35dp and
  // legible, at 10 the labels overflow. If someone raises it, this number and
  // the device evidence in BeatRow.tsx have to move together.
  strictEqual(MAX_BEATS_PER_GROUP, 9);
  ok(TAPPABLE.length >= 120, `only ${TAPPABLE.length} tappable items, expected most of the corpus`);
});

test('BeatRow is actually RENDERED by the app, not just authored', () => {
  // This lesson shipped once with BeatRow imported by nothing but its own test
  // and a throwaway probe route: the component was correct, proven on a device
  // in isolation, and dead code in the app. Mission 7 is titled "Tap the beat"
  // and drew a monogram. That is the failure class this repo has hit before
  // (a field authored, schema-valid, and rendered by nothing), and a passing
  // suite is exactly what it looks like.
  const rich = readFileSync(new URL('../components/LessonRich.tsx', import.meta.url), 'utf8');
  ok(
    /import \{[^}]*BeatRow[^}]*\} from '@\/components\/BeatRow'/u.test(rich),
    'LessonRich no longer imports BeatRow, so the beat row renders nowhere'
  );
  ok(rich.includes('<BeatRow'), 'BeatRow is imported but never rendered');
  // And it must be reachable for the FIRST item of the tap-the-beat mission,
  // which is the three-word phrase whose IPA carries no dots at all.
  const first = BY_ID['fr.sons.rythme.001'];
  ok(first.tags.includes('tappable'), 'the first tap-the-beat item is not tappable');
  ok(
    /item\.tags\?\.includes\('tappable'\)/u.test(rich),
    'the render gate no longer keys on the tappable tag; an item whose syllables are separate WORDS carries no dot and would draw nothing'
  );
});

test('BeatRow and the corpus agree on the cap', () => {
  // The component cannot import the authoring corpus (it would pull authoring
  // data into the shipped bundle) and this runner cannot import a .tsx, so the
  // two declare the number separately and it is checked here. A cap raised in
  // one place and not the other silently mislabels which items are tappable.
  const src = readFileSync(new URL('../components/BeatRow.tsx', import.meta.url), 'utf8');
  const m = src.match(/export const MAX_BEATS_PER_GROUP = (\d+);/u);
  ok(m, 'BeatRow.tsx no longer declares MAX_BEATS_PER_GROUP');
  strictEqual(
    Number(m![1]),
    MAX_BEATS_PER_GROUP,
    'BeatRow.tsx and rythme-corpus.ts disagree about how many chips fit a row'
  );
});

test('the minimal pairs are genuinely minimal: same words, different grouping', () => {
  strictEqual(MINIMAL_PAIRS.length, 8, 'the gap audit found ZERO minimal pairs in the shipped 165');
  for (const [a, b] of MINIMAL_PAIRS) {
    const words = (s: string) => s.toLowerCase().replace(/[.,!?]/gu, '').split(/\s+/u).filter(Boolean);
    // The pair must differ in grouping...
    ok(a.groups !== b.groups, `${a.id}/${b.id} have the same number of groups, so they are not a contrast`);
    // ...and each must explain what its grouping MEANS, or the card cannot
    // make the argument the lesson exists to make.
    ok(a.gloss && a.gloss.length > 10, `${a.id} has no gloss`);
    ok(b.gloss && b.gloss.length > 10, `${b.id} has no gloss`);
    // The word sequences are near-identical: at most one function word differs
    // (a preposition the grouping forces, e.g. "parle, mon voisin" vs
    // "parle à mon voisin").
    const wa = words(a.fr), wb = words(b.fr);
    ok(Math.abs(wa.length - wb.length) <= 1, `${a.id}/${b.id} are not the same words: "${a.fr}" vs "${b.fr}"`);
  }
});

test('every corpus row is a valid Item and can be reached by a dictation drill', () => {
  for (const r of RYTHME) {
    const it: Item = {
      id: r.id, kind: 'sentence', level: 'sons', theme: 'rythme',
      fr: r.fr, en: r.en, ipa: r.ipa, respell: r.respell,
      tags: r.tags, drills: ['sentence', 'review', 'dictation', 'voiceflash'],
      audioRef: null, version: 2, register: 'courant',
    };
    const issues = validateItem(it, it.id);
    strictEqual(issues.length, 0, `${r.id} invalid: ${issues.map((i) => i.msg).join('; ')}`);
  }
});

/* ─── The lesson ──────────────────────────────────────────────────────────── */

test('the lesson passes the schema and density validators', () => {
  strictEqual(validateLesson(L, L.id).length, 0);
  strictEqual(validateDensity(L, new Set(RYTHME.map((r) => r.id))).length, 0);
});

test('the spine is the authored order, and every act claims its sections', () => {
  deepStrictEqual(
    L.sections.map((s) => s.id),
    [
      's01-scene', 's02-goals', 's03-anchors',
      's04-even', 's04-check', 's05-english', 's06-tap',
      's07-push', 's07-check', 's08-rising', 's09-contrast',
      's10-break', 's11-pairs', 's12-pairs-check', 's13-three',
      's14-examples', 's15-dictation', 's16-listening', 's17-speak',
      's18-layered', 's19-review', 's20-errors', 's21-progress', 's22-quiz', 's23-roundup',
    ]
  );
  strictEqual(L.acts?.length, 6);
  deepStrictEqual(
    L.acts?.map((a) => a.title),
    ['Why this matters', 'Even, all the way', 'The push at the end',
     'Where the phrase breaks', 'Put it together', 'Prove it']
  );
  // Every section claimed exactly once.
  const claimed = L.acts!.flatMap((a) => a.sections);
  strictEqual(claimed.length, L.sections.length);
  strictEqual(new Set(claimed).size, claimed.length, 'a section is claimed by two acts');
  for (const id of claimed) ok(L.sections.some((s) => s.id === id), `act names unknown section ${id}`);
});

test('mission 1 is a scene that opens on a failure, not a teach', () => {
  const first = L.sections[0];
  strictEqual(first.type, 'scene');
  // A choice the learner commits to, and the break that explains it. Without
  // the break the scene leaves them wrong and never says why.
  const kinds = (first as { beats: { kind: string }[] }).beats.map((b) => b.kind);
  ok(kinds.includes('choice'), 'the scene has no choice beat');
  ok(kinds.includes('break'), 'the scene has no break beat, so the failure is never explained');
});

test('the reframe appears verbatim, and is never reworded', () => {
  const strings: string[] = [];
  const walk = (v: unknown) => {
    if (typeof v === 'string') strings.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') Object.values(v).forEach(walk);
  };
  walk(L);
  const hits = strings.filter((s) => s.includes(REFRAME)).length;
  ok(hits >= 6, `the reframe appears ${hits} times, expected at least 6`);
  strictEqual(REFRAME, 'Even syllables, then one push at the end.');
  // A near-miss REWORDING of the rule itself is the silent regression this
  // catches: "Even syllables, then a push at the end", "Even syllables and one
  // push at the end". Prose that happens to discuss even syllables is fine and
  // expected (the notation key explains the beat row; Camille's intro names the
  // topic), so the pattern is deliberately anchored on the rule's own shape:
  // "even syllable(s)" followed closely by "push at the end".
  const near = strings.filter(
    (s) => !s.includes(REFRAME) && /even syllables?,?\s+(then|and)\s+\w*\s*push at the end/iu.test(s)
  );
  deepStrictEqual(near, [], `the reframe appears reworded rather than verbatim:\n  ${near.join('\n  ')}`);
});

test('GUARD 3: no tranche releases a phrase longer than its act has taught', () => {
  const tranches = L.deckTranche!;
  strictEqual(tranches.length, L.acts!.length, 'one tranche per act');
  let ceiling = 0;
  const maxOf = (slice: string[]) => Math.max(...slice.map((id) => BY_ID[id].syll));
  tranches.forEach((slice, i) => {
    ok(slice.length > 0, `tranche ${i} is empty`);
    for (const id of slice) {
      ok(BY_ID[id], `tranche ${i} releases unknown item ${id}`);
      ok(L.itemIds.includes(id), `tranche ${i} releases ${id}, which the lesson never teaches`);
    }
    const top = maxOf(slice);
    // Monotonic: each act may go as long as, or longer than, the last. It may
    // never go BACKWARDS past what has already been released, and act N+1 must
    // not leap beyond what act N established by more than one band.
    ok(
      top >= ceiling - 2,
      `tranche ${i} tops out at ${top} syllables after a ceiling of ${ceiling}: the ramp is not monotonic`
    );
    ceiling = Math.max(ceiling, top);
  });
  // The ramp must actually ramp: the last act reaches materially longer
  // phrases than the first, or there was no ramp to speak of.
  ok(maxOf(tranches[tranches.length - 1]) > maxOf(tranches[0]) + 3,
    'the last tranche is no longer than the first, so the syllable ramp does nothing');
});

test('the early acts stay inside what BeatRow can draw', () => {
  // Acts 1 to 3 teach with the beat row on screen, so everything they release
  // must be tappable. If a long phrase leaks in there, the mission shows a
  // sentence with no beat row under it and the card teaches nothing.
  for (const i of [0, 1, 2]) {
    for (const id of L.deckTranche![i]) {
      ok(
        BY_ID[id].tags.includes('tappable'),
        `act ${i + 1} releases ${id} (${BY_ID[id].syll} syllables), which BeatRow cannot draw`
      );
    }
  }
});

/* ─── The quiz ────────────────────────────────────────────────────────────── */

test('GUARD 4: the quiz tests the audible skill, and is not majority mcq', () => {
  const quiz = L.sections.find((s) => s.type === 'quiz')!;
  const qs = quizQuestions(quiz as { rounds?: typeof RYTHME_QUIZ_ROUNDS });
  strictEqual(qs.length, 40);
  strictEqual(RYTHME_QUIZ_ROUNDS.length, 5);

  const mix: Record<string, number> = {};
  for (const q of qs) mix[q.format ?? 'mcq'] = (mix[q.format ?? 'mcq'] ?? 0) + 1;

  // THE point of this guard. Rhythm is inaudible in text: a quiz a learner can
  // pass by reading does not measure whether they can do the thing.
  const audible = (mix.speak ?? 0) + (mix.listenChoose ?? 0);
  ok(
    audible / qs.length > 0.5,
    `only ${audible}/${qs.length} questions test the audible skill (speak + listenChoose); it must be the majority`
  );
  ok(
    (mix.mcq ?? 0) / qs.length < 0.4,
    `mcq is ${mix.mcq}/${qs.length}; a majority-mcq rhythm quiz is a failed design`
  );
  ok((mix.speak ?? 0) >= 8, `only ${mix.speak} speak questions; production is the actual can-do`);
  ok((mix.listenChoose ?? 0) >= 12, `only ${mix.listenChoose} listenChoose questions`);
  // tapSilent marks silent letters and means nothing for rhythm. Its presence
  // would be padding to hit a format count.
  strictEqual(mix.tapSilent ?? 0, 0, 'tapSilent has no meaning in a rhythm lesson');
});

test('every quiz question teaches, and points back at the mission that taught it', () => {
  const quiz = L.sections.find((s) => s.type === 'quiz')!;
  const qs = quizQuestions(quiz as { rounds?: typeof RYTHME_QUIZ_ROUNDS });
  const sectionIds = new Set(L.sections.map((s) => s.id));
  for (const q of qs) {
    ok(q.why && q.why.trim().length > 20, `question "${q.q.slice(0, 40)}" has no real why`);
    // The why must teach the RULE, not restate the answer.
    ok(!/^(correct|that is right|yes)\b/iu.test(q.why!), `"${q.q.slice(0, 40)}" restates the answer instead of teaching`);
    ok(q.ref, `question "${q.q.slice(0, 40)}" has no ref`);
    ok(sectionIds.has(q.ref!), `question refs "${q.ref}", which is not a section of this lesson`);
  }
});

test('the open formats carry what they need to be answerable', () => {
  const quiz = L.sections.find((s) => s.type === 'quiz')!;
  for (const q of quizQuestions(quiz as { rounds?: typeof RYTHME_QUIZ_ROUNDS })) {
    if (q.format === 'speak') {
      ok(q.target, `a speak question with no target cannot be scored: "${q.q.slice(0, 40)}"`);
    }
    if (q.format === 'errorSpot' || q.format === 'typeIn') {
      ok(q.accept?.length, `a ${q.format} question with no accept list cannot be marked: "${q.q.slice(0, 40)}"`);
    }
  }
});

/* ─── Audio ───────────────────────────────────────────────────────────────── */

test('every recordingId a section names is declared in lesson.audio.recorded', () => {
  const declared = new Set((L.audio?.recorded ?? []).map((r) => r.id));
  const used: string[] = [];
  const walk = (v: unknown) => {
    if (Array.isArray(v)) return v.forEach(walk);
    if (!v || typeof v !== 'object') return;
    for (const [k, val] of Object.entries(v as Record<string, unknown>)) {
      if (k === 'recordingId' && typeof val === 'string') used.push(val);
      else walk(val);
    }
  };
  walk(L.sections);
  for (const id of used) ok(declared.has(id), `section asks for recording "${id}", which the lesson never declares`);
  ok(declared.size >= 8, `only ${declared.size} recordings briefed for the lesson with the heaviest audio dependency in the track`);
});

test('the minimal-pair brief says the two readings must be recorded together', () => {
  // If the halves of a contrast are recorded separately the comparison is
  // worthless, and this lesson's central argument rests on it.
  const brief = (L.audio?.recorded ?? []).find((r) => r.id === 'rec-minimal-pairs');
  ok(brief, 'no minimal-pair recording brief');
  ok(/one take|back to back/iu.test(brief!.desc), 'the minimal-pair brief does not require the pair be recorded together');
});

test('the narration stages are in the fixed order and never repeat', () => {
  const ORDER = ['warm', 'focus', 'input', 'practice', 'produce', 'check', 'cheat'];
  const stages = L.narration!.stages.map((s) => s.stage);
  strictEqual(new Set(stages).size, stages.length, 'a narration stage is repeated');
  const positions = stages.map((s) => ORDER.indexOf(s));
  deepStrictEqual(positions, [...positions].sort((a, b) => a - b), 'narration stages are out of order');
  strictEqual(L.narration!.camilleVoiceId, 'camille-fr-ca-01');
  strictEqual(L.narration!.ratioEnFr, 0.7, 'sons level targets 0.7');
  // Every itemId a narration interaction names must be one this lesson teaches.
  for (const st of L.narration!.stages) {
    for (const seg of st.segments) {
      const itemId = (seg as { itemId?: string }).itemId;
      if (itemId) ok(L.itemIds.includes(itemId), `narration names ${itemId}, which the lesson never teaches`);
    }
  }
});

/* ─── House style ─────────────────────────────────────────────────────────── */

test('the authored copy carries no em dash and no honest/honesty', () => {
  const strings: string[] = [];
  const walk = (v: unknown) => {
    if (typeof v === 'string') strings.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') Object.values(v).forEach(walk);
  };
  walk(L);
  walk(RYTHME);
  const emDash = strings.filter((s) => s.includes('—'));
  deepStrictEqual(emDash.slice(0, 3), [], 'em dash found in authored copy');
  const honest = strings.filter((s) => /honest/iu.test(s));
  deepStrictEqual(honest.slice(0, 3), [], 'honest/honesty found in authored copy');
});

test('the UI chrome is English, and French appears only as content', () => {
  // A French UI label is untranslatable and lands beside English on the same
  // card. The component guard only reads component source, so an authored
  // French label passes CI and reaches the screen: this is the only check.
  // `frSub` is the one field DESIGNED to hold French, so it is exempt.
  const FRENCH = /\b(le|la|les|un|une|des|vous|votre|nous|est|sont|avec|pour|dans)\b/iu;
  const bad: string[] = [];
  for (const s of L.sections) {
    if (FRENCH.test(s.title)) bad.push(`${s.id}.title = "${s.title}"`);
  }
  for (const a of L.acts ?? []) {
    if (FRENCH.test(a.title)) bad.push(`act ${a.id}.title = "${a.title}"`);
    if (FRENCH.test(a.milestone)) bad.push(`act ${a.id}.milestone = "${a.milestone}"`);
  }
  deepStrictEqual(bad, [], `French in UI chrome (frSub is the field for that):\n  ${bad.join('\n  ')}`);
});

test('no mission declares more than three term chips', () => {
  // House style, not an enforced cap: the renderer shows 3 and collapses the
  // rest behind "+N". sons.06 exceeds it on seven sections and that is recorded
  // as debt, so this lesson does not inherit it.
  for (const s of L.sections) {
    const terms = (s as { terms?: string[] }).terms;
    if (terms) {
      ok(terms.length <= 3, `${s.id} declares ${terms.length} term chips; the row shows 3`);
      for (const t of terms) ok(L.terms?.[t], `${s.id} names term "${t}", which the lesson never defines`);
    }
  }
});
