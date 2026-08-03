// sons.10 "La liaison" — the lesson-specific guards.
//
// lesson-contract.test.ts already runs over every lesson and checks the generic
// things: ids resolve, acts claim real sections, quiz questions explain
// themselves, nothing renders empty. This file holds only what is true of THIS
// lesson and could not be asserted generically.
//
// Two of these exist because of how the corpus was built. The tags were DERIVED
// from the tie character in the IPA rather than typed by hand, and that
// derivation is only trustworthy while the two still agree, so it is pinned.
// And the interdite set is the half of the canDo the original 165 could not
// teach, so its completeness is pinned too: teaching a forbidden liaison as a
// compulsory one is the worst failure this lesson can ship, and it is exactly
// the kind of thing that survives code review.

import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { formatIssues, quizQuestions, validateItem, validateLesson, type Lesson } from './schema.ts';
import { formatDensity, validateDensity } from './density.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));

// The admin repo is a sibling checkout. Skip cleanly when it is absent (the app
// can be built on its own) rather than failing the suite.
let LESSON: Lesson | null = null;
let REFRAME = '';
let ITEM_IDS = new Set<string>();
let UPDATES: { id: string; tags: string[]; family: string; obligation: string; respell?: string; drills: string[] }[] = [];
let NEW: { id: string; fr: string; ipa?: string; tags?: string[]; family: string; obligation: string; respell?: string; drills: string[] }[] = [];
let textOf: ((id: string) => { fr: string; en: string; ipa: string; respell: string }) | null = null;
let tiesOf: ((ipa: string) => string[]) | null = null;
let obligationIds: ((o: string) => string[]) | null = null;

try {
  const corpus = await import('../../../ealch-admin/scripts/data/liaison-corpus.ts');
  const lesson = await import('../../../ealch-admin/scripts/data/liaison-lesson.ts');
  UPDATES = corpus.UPDATES;
  NEW = corpus.NEW;
  ITEM_IDS = new Set(corpus.LIAISON_IDS);
  textOf = corpus.text;
  tiesOf = corpus.tiesOf;
  obligationIds = corpus.obligationIds;
  LESSON = lesson.LIAISON_LESSON;
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

const sectionIds = (): string[] =>
  LESSON!.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];

// ── The corpus ─────────────────────────────────────────────────────────────

test('the corpus is 165 curated plus the authored gap, every id unique', { skip }, () => {
  strictEqual(UPDATES.length, 165, 'the 165 pre-existing items are all curated');
  ok(NEW.length >= 30, `the authored gap is at least 30 items, found ${NEW.length}`);
  strictEqual(ITEM_IDS.size, UPDATES.length + NEW.length, 'no id is claimed twice');
  for (const n of NEW) {
    const issues = validateItem({ ...n, family: undefined, obligation: undefined } as never, n.id);
    strictEqual(issues.length, 0, `${n.id} passes the item schema: ${formatIssues(issues)}`);
  }
});

test('the curation never restates a sentence it does not own', { skip }, () => {
  // The 165 keep their fr/en/ipa in the seed. If this file ever grows an `fr`
  // for one of them, the two copies can drift and the batch can clobber the
  // real one, which is the whole reason the curation is keyed by id.
  for (const u of UPDATES) {
    ok(!('fr' in u), `${u.id} carries no fr in the curation`);
    ok(!('ipa' in u), `${u.id} carries no ipa in the curation`);
    ok(!('en' in u), `${u.id} carries no en in the curation`);
  }
});

test('every liaison-<consonant> tag is backed by a real tie in the IPA', { skip }, () => {
  // The tags were computed from the tie character, not judged by hand. This
  // pins the agreement so a later hand-edit cannot mislabel a family and send
  // a /t/ sentence into the /z/ drill.
  let checked = 0;
  for (const id of ITEM_IDS) {
    const t = textOf!(id);
    const ties = tiesOf!(t.ipa);
    const tags =
      UPDATES.find((u) => u.id === id)?.tags ?? NEW.find((n) => n.id === id)?.tags ?? [];
    for (const tag of tags) {
      const m = /^liaison-([ztnlv])$/.exec(tag);
      if (!m) continue;
      checked++;
      ok(ties.includes(m[1]!), `${id} tagged "${tag}" and its IPA "${t.ipa}" carries a ${m[1]} tie`);
    }
  }
  ok(checked > 200, `the guard actually ran over the corpus, ${checked} tags checked`);
});

test('every item carrying a tie is tagged for the consonant that tie names', { skip }, () => {
  // The converse of the test above: a tie with no matching tag is a family a
  // section will never find, so the item is authored and silently undrillable.
  for (const id of ITEM_IDS) {
    const t = textOf!(id);
    const tags =
      UPDATES.find((u) => u.id === id)?.tags ?? NEW.find((n) => n.id === id)?.tags ?? [];
    for (const c of new Set(tiesOf!(t.ipa))) {
      ok(tags.includes(`liaison-${c}`), `${id} has a ${c} tie and is tagged liaison-${c}`);
    }
  }
});

test('the liaison interdite set is complete, and none of it is drilled as obligatoire', { skip }, () => {
  // This lesson's worst available failure. The canDo says the learner must
  // "leave it silent when French forbids it", the original 165 were 100%
  // obligatoire, and every interdite item is one this build authored. If the
  // set empties out, the lesson quietly teaches half its own promise.
  const interdite = obligationIds!('interdite');
  const obligatoire = obligationIds!('obligatoire');
  ok(interdite.length >= 15, `the forbidden set is substantial, found ${interdite.length}`);

  const both = obligatoire.filter((id) => interdite.includes(id));
  deepStrictEqual(both, [], 'nothing is marked both forbidden and required');

  // The five patterns the lesson claims to teach must each be present.
  const tagsFor = (id: string) =>
    UPDATES.find((u) => u.id === id)?.tags ?? NEW.find((n) => n.id === id)?.tags ?? [];
  const allInterditeTags = new Set(interdite.flatMap(tagsFor));
  for (const pattern of ['interdite-et', 'h-aspire', 'interdite-singular-noun', 'interdite-proper-noun', 'interdite-number']) {
    ok(allInterditeTags.has(pattern), `the forbidden set covers ${pattern}`);
  }

  // And no forbidden item may sit in a pool a mission drills as a link.
  const linkDrills = ['drill-no-link', 'drill-wrong-sound'];
  for (const d of LESSON!.drills ?? []) {
    if (!linkDrills.includes(d.id)) continue;
    for (const id of (d as { items?: string[] }).items ?? []) {
      ok(!interdite.includes(id), `${d.id} does not drill ${id}, which is a forbidden liaison`);
    }
  }
});

test('the three states are all represented, and facultative is named not drilled', { skip }, () => {
  // The deliberate decision: sons.10 teaches the binary and NAMES the third
  // state with a safe default. Facultative exists in the corpus so sons.08 can
  // teach register from it, but it must not become a drilled family here.
  ok(obligationIds!('facultative').length > 0, 'facultative items exist in the corpus');
  const ids = sectionIds();
  ok(ids.includes('s13-optional'), 'the optional state has its own mission');
  const optional = LESSON!.sections.find((s) => (s as { id?: string }).id === 's13-optional');
  strictEqual((optional as { type?: string })?.type, 'teach', 'it teaches rather than drills');

  const fac = new Set(obligationIds!('facultative'));
  for (const d of LESSON!.drills ?? []) {
    for (const id of (d as { items?: string[] }).items ?? []) {
      ok(!fac.has(id), `${d.id} does not drill the optional item ${id}`);
    }
  }
});

test('the items a section drills can actually be drilled that way', { skip }, () => {
  // All 165 shipped as ['sentence','review'], which excludes them from
  // dictation. selectItems SILENTLY skips an item whose drills do not name the
  // drill asking for it, so a dictée built on one renders empty.
  const drillsFor = (id: string): string[] =>
    UPDATES.find((u) => u.id === id)?.drills ?? NEW.find((n) => n.id === id)?.drills ?? [];

  const dictation = LESSON!.sections.find((s) => s.type === 'dictation');
  ok(dictation && dictation.type === 'dictation');
  for (const id of dictation.itemIds) {
    ok(drillsFor(id).includes('dictation'), `${id} is dictatable, so the dictée can speak it`);
  }

  for (const s of LESSON!.sections) {
    if (s.type !== 'practice') continue;
    for (const id of s.itemIds) {
      ok(drillsFor(id).length > 0, `${id} has a drill pool for ${(s as { id?: string }).id}`);
    }
  }
});

// ── The lesson ─────────────────────────────────────────────────────────────

test('the lesson passes the app schema and every density rule', { skip }, () => {
  const issues = validateLesson(LESSON!, LESSON!.id);
  strictEqual(issues.length, 0, formatIssues(issues));
  const d = validateDensity(LESSON!, ITEM_IDS);
  strictEqual(d.length, 0, formatDensity(d));
  strictEqual(LESSON!.id, 'sons.10.l1');
  strictEqual(LESSON!.unitId, 'sons.10');
  strictEqual(LESSON!.level, 'sons');
  strictEqual(LESSON!.tag, 'SONS · LEÇON 10');
});

test('the mission spine is present and correctly ordered', { skip }, () => {
  // A required backbone, not a fixed length. What must hold is that the
  // teaching ORDER is intact: the families before the sound change that
  // complicates them, the sound change before the forbidden set, and
  // everything proved last.
  const ids = sectionIds();
  const backbone = [
    's01-scene', 's02-goals', 's03-anchors',
    's04-rule', 's05-z', 's05-check-z', 's06-t', 's06-check-t', 's07-n', 's07-check-n',
    's08-trap-sound', 's09-flashcards',
    's10-trap-interdite', 's11-inhibition', 's12-examples', 's13-optional',
    's14-dictation', 's15-listening',
    's16-speak', 's17-scenario', 's18-errors', 's19-listen',
    's20-reading', 's21-review', 's22-progress', 's23-quiz', 's24-roundup',
  ];
  for (const id of backbone) ok(ids.includes(id), `backbone mission ${id} is present`);

  const positions = backbone.map((id) => ids.indexOf(id));
  for (let i = 1; i < positions.length; i++) {
    ok(positions[i]! > positions[i - 1]!, `${backbone[i]} comes after ${backbone[i - 1]}`);
  }

  strictEqual(ids[ids.length - 1], 's24-roundup');
  strictEqual(ids[ids.length - 2], 's23-quiz');
});

test('a words mission and its control are separate missions', { skip }, () => {
  // An XL groupDrill is handed the whole viewport by ownsLayout, and a swipe
  // deck and a four-option check cannot both have it. Merged, the check takes
  // the height it wants and the word card is squeezed from the ~500dp it needs
  // to about 370: the gloss drops below the fold and the play button needs a
  // scroll to reach. Both halves still render and neither errors, so the whole
  // suite passes over it. This build shipped all three families merged and it
  // took a phone to see. sons.06 split its four for the same reason.
  const merged: string[] = [];
  for (const s of LESSON!.sections) {
    if (s.type !== 'groupDrill' || (s as { size?: string }).size !== 'xl') continue;
    for (const g of (s as { groups?: { items?: unknown[]; check?: unknown }[] }).groups ?? []) {
      if ((g.items ?? []).length > 0 && g.check) merged.push((s as { id?: string }).id ?? '?');
    }
  }
  deepStrictEqual(merged, [], 'no XL group carries both words and a check');

  // And the split has to be real: every family's words mission is followed by
  // a control that actually asks something.
  for (const [words, control] of [
    ['s05-z', 's05-check-z'],
    ['s06-t', 's06-check-t'],
    ['s07-n', 's07-check-n'],
  ] as const) {
    const w = LESSON!.sections.find((s) => (s as { id?: string }).id === words);
    const c = LESSON!.sections.find((s) => (s as { id?: string }).id === control);
    ok(w && c, `${words} and ${control} both exist`);
    const wg = (w as { groups?: { items?: unknown[] }[] }).groups ?? [];
    const cg = (c as { groups?: { items?: unknown[]; check?: { why?: string } }[] }).groups ?? [];
    ok((wg[0]?.items ?? []).length >= 4, `${words} carries its words`);
    strictEqual((cg[0]?.items ?? []).length, 0, `${control} carries no words`);
    ok(cg[0]?.check?.why, `${control} explains its answer`);
  }
});

test('mission 1 is the contradiction, not a definition', { skip }, () => {
  // The strongest opening available to this lesson: the learner has just spent
  // 27 missions learning final consonants are silent, and one just came back.
  // If mission 1 ever becomes a `teach`, that tension has been thrown away.
  const first = LESSON!.sections[0]!;
  strictEqual(first.type, 'scene');
  strictEqual((first as { id?: string }).id, 's01-scene');
  const beats = (first as { beats?: { kind: string }[] }).beats ?? [];
  ok(beats.some((b) => b.kind === 'choice'), 'the scene makes the learner choose');
  ok(beats.some((b) => b.kind === 'break'), 'and shows the English instinct failing');
  const brk = beats.find((b) => b.kind === 'break') as { audio?: { audioFirst?: boolean } } | undefined;
  ok(brk?.audio?.audioFirst, 'the break plays before the text resolves it');
});

test('the reframe appears verbatim eight times, never reworded', { skip }, () => {
  strictEqual(REFRAME, 'The letter was never gone. It was waiting for a vowel.');
  const hits = strings(LESSON).filter((s) => s.includes(REFRAME));
  strictEqual(hits.length, 8, `expected 8 verbatim appearances, found ${hits.length}`);
});

test('the reframe reconciles this lesson with the one before it', { skip }, () => {
  // The reframe has a job beyond being memorable: sons.06 taught that final
  // consonants are silent, and a learner arriving here thinks that rule is
  // absolute. The lesson must say so out loud rather than leaving the
  // contradiction for the learner to notice and distrust.
  const all = strings(LESSON).join(' ');
  ok(/silent/i.test(all), 'the lesson names the silence it is overriding');
  ok(/waiting for a vowel/i.test(all), 'and what ends it');
});

test('the acts are the six-act v2 spine, and no stretch runs past a rest', { skip }, () => {
  strictEqual(LESSON!.acts?.length, 6);
  const ids = sectionIds();
  const claimed = new Map<string, string>();
  for (const a of LESSON!.acts!) {
    ok(a.milestone.endsWith('.'), `${a.id} milestone is a sentence`);
    for (const s of a.sections) {
      ok(ids.includes(s), `${a.id} names a real section: ${s}`);
      ok(!claimed.has(s), `${s} is claimed once, not by both ${claimed.get(s)} and ${a.id}`);
      claimed.set(s, a.id);
    }
    const longest = Math.ceil(a.estScreens / (1 + (a.restPoints?.length ?? 0)));
    ok(longest <= 22, `${a.id} runs ${longest} screens between rests, at most 22`);
  }
  for (const s of ids) ok(claimed.has(s), `${s} belongs to an act`);
});

test('the SRS releases only what has been taught, and all of it by the end', { skip }, () => {
  strictEqual(LESSON!.deckTranche?.length, LESSON!.acts?.length, 'one tranche per act');
  const flat = LESSON!.deckTranche!.flat();
  strictEqual(new Set(flat).size, flat.length, 'no card is released twice');
  strictEqual(new Set(flat).size, ITEM_IDS.size, 'every item is released by the end');
  for (const id of flat) ok(ITEM_IDS.has(id), `${id} is an item this lesson owns`);

  // act2 teaches z and t, act3 n/l/v, act4 the forbidden set. Nothing forbidden
  // may be released before the mission that teaches it exists.
  const interdite = new Set(obligationIds!('interdite'));
  const releasedByAct3 = new Set([...LESSON!.deckTranche![0]!, ...LESSON!.deckTranche![1]!, ...LESSON!.deckTranche![2]!]);
  for (const id of releasedByAct3) {
    ok(!interdite.has(id), `${id} is forbidden and is not released before act4 teaches it`);
  }
});

test('the quiz is five rounds of eight, answerable, explained and spread', { skip }, () => {
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  strictEqual(q.rounds?.length, 5);
  for (const r of q.rounds!) strictEqual(r.questions.length, 8, `round ${r.id} has 8 questions`);

  const all = quizQuestions(q);
  strictEqual(all.length, 40);
  const ids = new Set(sectionIds());
  for (const item of all) {
    ok(item.why, `"${item.q}" has a why`);
    ok(item.ref, `"${item.q}" has a ref`);
    ok(ids.has(item.ref as string), `"${item.q}" refs a real section: ${item.ref}`);
    if (Array.isArray(item.opts)) {
      strictEqual(new Set(item.opts).size, item.opts.length, `options distinct for "${item.q}"`);
      if (typeof item.correct === 'number') {
        ok(item.correct >= 0 && item.correct < item.opts.length, `correct in range for "${item.q}"`);
      }
    }
  }
});

test('the quiz can be failed by a learner who never listens or speaks', { skip }, () => {
  // Liaison is audible. A learner can pass a purely written quiz on it while
  // linking nothing aloud, so the audible formats have to carry real weight.
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  const all = quizQuestions(q);
  const fmt = (f: string) => all.filter((x) => (x as { format?: string }).format === f).length;

  for (const f of ['mcq', 'tapSilent', 'listenChoose', 'typeIn', 'speak', 'errorSpot']) {
    ok(fmt(f) > 0, `format ${f} is used`);
  }
  ok(fmt('listenChoose') >= 8, `the quiz listens: ${fmt('listenChoose')} listenChoose questions`);
  ok(fmt('speak') >= 4, `the quiz speaks: ${fmt('speak')} speak questions`);
  ok(fmt('errorSpot') >= 3, `errorSpot carries the forbidden set: ${fmt('errorSpot')} questions`);
});

test('every error trigger fires a drill that exists, and every round targets one', { skip }, () => {
  const drillIds = new Set((LESSON!.drills ?? []).map((d) => d.id));
  const triggerIds = new Set((LESSON!.errorTriggers ?? []).map((t) => t.id));
  ok(triggerIds.size >= 4, `the lesson models its errors, ${triggerIds.size} triggers`);
  for (const t of LESSON!.errorTriggers ?? []) {
    ok(drillIds.has(t.drill), `${t.id} fires a real drill: ${t.drill}`);
    ok(drillIds.has(t.retest), `${t.id} retests with a real drill: ${t.retest}`);
    for (const d of t.detectOn) ok(sectionIds().includes(d), `${t.id} detects on a real section: ${d}`);
  }
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  for (const r of q.rounds ?? []) {
    for (const t of r.targets ?? []) ok(triggerIds.has(t), `round ${r.id} targets a real trigger: ${t}`);
  }
});

test('the studio brief describes every recording the lesson asks for', { skip }, () => {
  const recorded = LESSON!.audio?.recorded ?? [];
  ok(recorded.length >= 10, `the brief is complete, ${recorded.length} recordings`);
  for (const r of recorded) {
    ok((r.desc?.length ?? 0) > 20, `${r.id} carries a real studio direction`);
  }
  // Every recordingId used anywhere in the tree must be declared.
  const declared = new Set(recorded.map((r) => r.id));
  const used = new Set<string>();
  (function walk(v: unknown): void {
    if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') {
      const rec = (v as { recordingId?: string }).recordingId;
      if (typeof rec === 'string') used.add(rec);
      Object.values(v).forEach(walk);
    }
  })(LESSON);
  for (const u of used) ok(declared.has(u), `recordingId "${u}" is declared in the brief`);
});

test('the pairs that must be comparable are briefed as one session', { skip }, () => {
  // This lesson's biggest audio risk. On every contrast set below, device TTS
  // may produce the OPPOSITE of what the card teaches: it commonly links
  // les héros and et, which is the exact error the mission warns against. A
  // pair split across two voices or two sessions is not a pair, so the brief
  // has to say so and this pins that it still does.
  const recorded = LESSON!.audio?.recorded ?? [];
  const byId = new Map(recorded.map((r) => [r.id, r.desc ?? '']));
  for (const id of ['rec-h-pairs', 'rec-interdite-pairs', 'rec-minimal-pairs', 'rec-devoicing-pairs', 'rec-facultative-pairs']) {
    const desc = byId.get(id);
    ok(desc, `${id} is briefed`);
    ok(/one voice one session|one voice, one session|both members mandatory/i.test(desc!),
      `${id} tells the studio the pair must be one voice in one session`);
  }
});

test('the lesson runs on TTS today and says where that is dangerous', { skip }, () => {
  // CLIP_MANIFEST is empty by design: every recordingId resolves to nothing and
  // every card falls back to device TTS. That is the correct shipping state,
  // and it is safe everywhere EXCEPT the contrast pairs, where the fallback can
  // teach the error. The risk has to be written down where the next person
  // authoring audio will find it.
  const src = readFileSync(resolve(here, '../../../ealch-admin/scripts/data/liaison-lesson.ts'), 'utf8');
  ok(/AUDIO RISK/.test(src), 'the file carries an audio risk block');
  ok(/rec-h-pairs/.test(src) && /HIGHEST RISK|HIGHEST PRIORITY/i.test(src),
    'and names the highest-risk set explicitly');
});

test('the glossary is defined once and every chip resolves', { skip }, () => {
  const terms = LESSON!.terms ?? {};
  ok(Object.keys(terms).length >= 6, `the lesson defines its jargon, ${Object.keys(terms).length} terms`);
  for (const [k, v] of Object.entries(terms)) {
    ok(v.term && v.title && v.body, `${k} is fully defined`);
    for (const ex of v.examples ?? []) {
      ok(ITEM_IDS.has(ex.itemId), `${k} example ${ex.itemId} resolves`);
    }
  }
  const known = new Set(Object.keys(terms));
  for (const s of LESSON!.sections) {
    for (const k of ((s as { terms?: string[] }).terms ?? [])) {
      ok(known.has(k), `${(s as { id?: string }).id} names a defined term: ${k}`);
    }
  }
});

test('no mission carries more than three term chips', { skip }, () => {
  // House style, and the reason it matters: the renderer shows 3 and collapses
  // the rest behind "+N". sons.06 exceeds this on seven sections and that is
  // documented debt, not precedent.
  for (const s of LESSON!.sections) {
    const t = (s as { terms?: string[] }).terms ?? [];
    ok(t.length <= 3, `${(s as { id?: string }).id} has ${t.length} chips, at most 3`);
  }
});

test('the two stepped missions walk their three jobs one screen at a time', { skip }, () => {
  for (const id of ['s08-trap-sound', 's10-trap-interdite']) {
    const s = LESSON!.sections.find((x) => (x as { id?: string }).id === id);
    ok(s && s.type === 'trapDrill', `${id} is a trapDrill`);
    const steps = (s as { steps?: { kind: string; gate?: boolean }[] }).steps ?? [];
    deepStrictEqual(steps.map((x) => x.kind), ['cards', 'audio', 'drill'], `${id} walks cards, audio, drill`);
    ok(steps[2]!.gate, `${id} gates on its drill`);
    ok(((s as { drill?: unknown[] }).drill ?? []).length >= 4, `${id} has at least 4 drill questions`);
  }
});

test('dense missions are broken up rather than trimmed', { skip }, () => {
  const byId = (id: string) => LESSON!.sections.find((s) => (s as { id?: string }).id === id);
  ok((byId('s11-inhibition') as { swipe?: boolean })?.swipe, 'the inhibition drill is swipeable');
  ok((byId('s18-errors') as { swipe?: boolean })?.swipe, 'the error list is swipeable');
  for (const id of ['s14-dictation', 's15-listening', 's16-speak', 's19-listen', 's20-reading']) {
    ok((byId(id) as { questionsInModal?: boolean })?.questionsInModal,
      `${id} puts its questions in a modal rather than below the fold`);
  }
});

test('the roundup teases the next lesson and calls back to the scene', { skip }, () => {
  const r = LESSON!.sections.find((s) => (s as { id?: string }).id === 's24-roundup');
  ok(r && r.type === 'roundup');
  const points = (r as { points?: string[] }).points ?? [];
  ok(points.length >= 5, 'the roundup keeps the system, not the phrases');
  ok(/élision|elision/i.test(points[points.length - 1]!), 'the last point points at the next lesson');
  ok(/platform|woman/i.test((r as { body?: string }).body ?? ''), 'the body closes the loop on the opening scene');
});

test('the authored copy carries no em dash and no honest/honesty', { skip }, () => {
  const all = strings(LESSON).join('\n');
  ok(!all.includes('—'), 'no em dash');
  ok(!/honest/i.test(all), 'no honest/honesty');
});

test('the UI chrome is English and only the content is French', { skip }, () => {
  // The French-literal guard only reads COMPONENT source, so a French label in
  // authored content passes CI and lands on the card next to English. Titles
  // and goal text are chrome; frSub and the step labels are the documented
  // exceptions, being deliberate French sub-headings.
  const FRENCH = /\b(le|la|les|une?|des|vous|nous|est|sont|avec|pour|dans|votre|cette)\b/i;
  for (const s of LESSON!.sections) {
    const title = (s as { title?: string }).title ?? '';
    ok(!FRENCH.test(title), `${(s as { id?: string }).id} has an English title: "${title}"`);
  }
  const goals = LESSON!.sections.find((s) => s.type === 'goals');
  for (const g of (goals as { goals?: { t: string; s: string }[] }).goals ?? []) {
    ok(!FRENCH.test(g.t), `goal heading is English: "${g.t}"`);
  }

  // Step labels are chrome too, and they are drawn in accent red at the top of
  // a stepped trap drill where they read as a section heading. This lesson
  // first shipped them as "Les changements" / "Écoutez" / "Réflexe" on the
  // strength of a stale description of sons.06; the lesson that actually
  // ships uses "The rule" / "The traps" / "Hear it" / "Reflex". One of the
  // French ones was "Les gaps", which is neither language.
  for (const s of LESSON!.sections) {
    if (s.type !== 'trapDrill') continue;
    for (const st of (s as { steps?: { label?: string }[] }).steps ?? []) {
      const label = st.label ?? '';
      ok(!FRENCH.test(label) && !/[àâçéèêëîïôûùü]/i.test(label),
        `${(s as { id?: string }).id} step label is English: "${label}"`);
    }
  }
});

// ── Once published ─────────────────────────────────────────────────────────

const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; lessonIds: string[]; seq?: number }[];
  lessons: Lesson[];
  items: { id: string; theme?: string }[];
};
const published = seed.lessons.find((l) => l.id === 'sons.10.l1');

test('once published, the seed copy validates and is reachable from the Den', { skip: !published }, () => {
  const issues = validateLesson(published!, published!.id);
  strictEqual(issues.length, 0, formatIssues(issues));
  const unit = seed.units.find((u) => u.id === 'sons.10');
  ok(unit, 'sons.10 exists');
  ok(unit!.lessonIds.includes('sons.10.l1'), 'and lists its lesson');
});

test('liaison is still taught before elision, or the lesson was rewritten', { skip: !published }, () => {
  // sons.10 was slotted in by seq rather than renumbered, so liaison (seq 7)
  // is taught BEFORE elision (seq 8) even though its id is higher. The lesson
  // is authored to stand alone on h aspiré for exactly that reason. If someone
  // reorders these, the h aspiré teaching needs revisiting, not just the seq.
  const liaison = seed.units.find((u) => u.id === 'sons.10');
  const elision = seed.units.find((u) => u.id === 'sons.07');
  if (!liaison?.seq || !elision?.seq) return;
  ok(
    liaison.seq < elision.seq,
    `liaison (seq ${liaison.seq}) still precedes elision (seq ${elision.seq}). ` +
      'If this has changed, sons.10 should call back to elision on h aspiré rather than introducing it.'
  );
});
