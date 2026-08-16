// a2.27.l1 « Les transports » — the guard. Trail seq 26, the third unit of the
// A2 situations band.
//
// These assertions are the ones that would have caught this build's own
// mistakes, plus the ones the collation and the prompt asked for BY NAME rather
// than by intention. A sentence in a report cannot fail; a list can.
//
// Everything is read from `seed.json` rather than from the authoring scripts,
// because the seed is what ships. A test that imports the corpus file proves
// the corpus file is self-consistent and proves nothing about the learner.
import { test } from 'node:test';
import { strictEqual, ok } from 'node:assert';
import seed from './seed.json' with { type: 'json' };

type Item = { id: string; kind: string; level: string; theme: string; fr: string; en: string; respell?: string; drills?: string[]; tags?: string[] };
type Section = Record<string, unknown> & { id: string; type: string };
type Lesson = Record<string, unknown> & {
  id: string; sections: Section[];
  acts?: Array<{ id: string; sections: string[] }>;
  itemIds?: string[]; deckTranche?: string[][];
};

const S = seed as unknown as {
  version: number; items: Item[]; lessons: Lesson[];
  units: Array<{ id: string; themes?: string[]; lessonIds?: string[]; canDo?: string; seq?: number }>;
};

const LESSON = S.lessons.find((l) => l.id === 'a2.27.l1')!;
const UNIT = S.units.find((u) => u.id === 'a2.27')!;
const ITEMS = new Map(S.items.map((i) => [i.id, i]));
const sec = (id: string) => LESSON.sections.find((s) => s.id === id);

const THEME = 'transports-quotidiens';
const QC_THEME = 'quebec-et-francophonie';
/** The id BLOCK, never the theme prefix: a prefix filter picks up 281 rows from
 *  a1 and b1 that nobody in this band authored. */
const ID_FIRST = 135;
const ID_LAST = 238;

const MINE = S.items.filter((i) => {
  if (i.theme !== THEME) return false;
  const m = /^fr\.a2\.transports-quotidiens\.(\d+)$/.exec(i.id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= ID_FIRST && n <= ID_LAST;
});
const MY_QC = S.items.filter((i) => i.theme === QC_THEME && ['fr.a2.quebec-et-francophonie.201', 'fr.a2.quebec-et-francophonie.202'].includes(i.id));
const ALL_MINE = [...MINE, ...MY_QC];

const REPAIR_IDS = [
  'fr.a2.au-restaurant.132', 'fr.a2.au-restaurant.133', 'fr.a2.au-restaurant.134',
  'fr.a2.au-restaurant.135', 'fr.a2.au-restaurant.136', 'fr.a2.au-restaurant.137',
];

/** THE REAL FOLD, copied from `answer.logic.ts:32`. It strips accents, case,
 *  punctuation, hyphens, the middle dot, BOTH apostrophes and ALL whitespace. */
const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/[/[\]()«».,!?;:]/g, '').replace(/[-·’']/g, '').replace(/\s+/g, '').trim();

/** Every authored string the learner can see, as one blob. */
const ALL_TEXT = JSON.stringify(LESSON) + JSON.stringify(ALL_MINE);

function quizQs(): Array<Record<string, unknown>> {
  const q = sec('s22-quiz') as { rounds?: Array<{ questions?: Array<Record<string, unknown>> }> } | undefined;
  return (q?.rounds ?? []).flatMap((r) => r.questions ?? []);
}

/** Every scored option anywhere in the lesson. */
function scoredOptions(): Array<{ where: string; text: string }> {
  const out: Array<{ where: string; text: string }> = [];
  for (const s of LESSON.sections) {
    for (const r of ((s as { rounds?: Array<{ questions?: Array<Record<string, unknown>> }> }).rounds ?? [])) {
      for (const q of (r.questions ?? [])) {
        for (const o of ((q.opts as string[]) ?? [])) out.push({ where: `${s.id} quiz`, text: o });
        for (const a of ((q.accept as string[]) ?? [])) out.push({ where: `${s.id} accept`, text: a });
        if (q.target) out.push({ where: `${s.id} speak`, text: q.target as string });
      }
    }
    for (const d of ((s as { drill?: Array<{ opts?: string[] }> }).drill ?? [])) {
      for (const o of (d.opts ?? [])) out.push({ where: `${s.id} drill`, text: o });
    }
    for (const g of ((s as { groups?: Array<{ check?: { opts?: string[] } }> }).groups ?? [])) {
      for (const o of (g.check?.opts ?? [])) out.push({ where: `${s.id} check`, text: o });
    }
    for (const q of ((s as { questions?: Array<{ opts?: string[] }> }).questions ?? [])) {
      for (const o of (q.opts ?? [])) out.push({ where: `${s.id} listening`, text: o });
    }
  }
  return out;
}

/* ═══ Identity, and the theme re-map that was already done ═══════════════ */

test('the unit row is what the spine says, and the phantom theme is gone', () => {
  strictEqual(UNIT.seq, 26);
  strictEqual(UNIT.canDo, 'Can buy a ticket, ask for directions and follow the answer');
  ok(UNIT.lessonIds?.includes('a2.27.l1'), 'the unit must name its lesson');
  // BAND BLOCKING STEP 2 LANDED BEFORE THIS BUILD STARTED. The prompt handed
  // the spine amendment to this unit as its own work; it was already applied in
  // `author-full-curriculum-spine.ts`, in Postgres and in the seed. Nothing was
  // edited here and `spine-drift.test.ts` needed no re-run on this account.
  ok(UNIT.themes?.includes(THEME), `the unit must author into ${THEME}`);
  ok(!UNIT.themes?.includes('transport'),
    "'transport' is a phantom: zero rows, no content_themes row, no themeMeta entry");
  // `SEED_CUT.themes` still lists the dead 'transport'. That is a single
  // band-level diff somebody makes once, after the re-map and after at least
  // one unit is authored. It is deliberately NOT this build's, and this
  // assertion records that it was left rather than missed.
});

test('the lesson header is a formatted label and not a slug', () => {
  // `missions.ts` draws the label at render time and `tag` is the stored
  // fallback. a2.07 and a2.26 both shipped a bare slug here and drew a
  // lowercase word where every other lesson draws a formatted label.
  strictEqual(LESSON.tag, 'A2 · LEÇON 26');
  strictEqual(LESSON.seq, 1, 'Lesson.seq is the index WITHIN the unit, not the trail position');
});

/* ═══ The shape ══════════════════════════════════════════════════════════ */

test('23 sections, six acts, exactly one quiz', () => {
  strictEqual(LESSON.sections.length, 23);
  strictEqual((LESSON.acts ?? []).length, 6);
  // A SECOND QUIZ SECTION IS SILENTLY NEVER RENDERED.
  strictEqual(LESSON.sections.filter((s) => s.type === 'quiz').length, 1);
  // den.tsx:169 pushes lessonIds[0] and reads nothing else, so a second lesson
  // in this unit would be unreachable.
  strictEqual(UNIT.lessonIds?.length, 1, 'one lesson per unit, band-wide (collation C6)');
});

test('act 3 is the heaviest act', () => {
  const acts = LESSON.acts ?? [];
  const sizes = acts.map((a) => a.sections.length);
  const third = sizes[2];
  ok(sizes.every((n) => n <= third), `act 3 has ${third} sections and is not the largest: ${sizes.join(', ')}`);
});

test('THE FRAME IS ON SCREEN BEFORE ANY CHAIN IS HEARD', () => {
  // This is the design's whole argument and it is what stops act 3 from being a
  // memory test: give the learner the slots before the audio arrives, or the
  // audio has nowhere to land. Asserted rather than trusted to section order.
  const acts = LESSON.acts ?? [];
  const actOf = (sid: string) => acts.findIndex((a) => a.sections.includes(sid));
  const moves = actOf('s04-moves');
  const joints = actOf('s05-joints');
  ok(moves >= 0 && joints >= 0, 'the four move types and the five joints must both exist');
  strictEqual(moves, joints, 'the move types and the joints belong in the same act');
  for (const rung of ['s08-one', 's09-two', 's10-three', 's11-four']) {
    ok(actOf(rung) > moves, `${rung} must sit in a later act than the frame`);
  }
});

test('the chain ladder climbs one, two, three, four', () => {
  const ids = LESSON.sections.map((s) => s.id);
  const order = ['s08-one', 's09-two', 's10-three', 's11-four'].map((s) => ids.indexOf(s));
  ok(order.every((n) => n >= 0), 'all four rungs must exist');
  ok(order.every((n, i) => i === 0 || n > order[i - 1]), `the rungs are out of order: ${order.join(', ')}`);
});

/* ═══ The two funded gates ═══════════════════════════════════════════════ */

test('s10-three carries hideLines, or it is a reading exercise with a play button', () => {
  const s = sec('s10-three') as { hideLines?: boolean; questionsInModal?: boolean; lines?: Array<{ fr: string }>; questions?: Array<{ q: string }> } | undefined;
  ok(s, 's10-three is missing');
  strictEqual(s!.hideLines, true,
    'without hideLines the French AND the English print beside the play dot, and the gloss hands over the whole route');
  strictEqual(s!.questionsInModal, true);
  // THE MASKED-QUESTION TRAP, INHERITED FROM a2.07. It found on device that the
  // question rail renders UNDER the masked cards, so a question that opens by
  // quoting its line hands the words straight back and hideLines buys nothing.
  for (const q of (s!.questions ?? [])) {
    for (const l of (s!.lines ?? [])) {
      ok(!fold(q.q).includes(fold(l.fr)), `s10-three « ${q.q} » reprints its line, so hideLines buys nothing`);
    }
  }
});

test('a2.07 owns the repair move and this unit authored none of it', () => {
  // Collation §1.6. Phrased as a FOLD test rather than a string test, so a
  // later author cannot slip « pardon ? » in under different punctuation.
  const repairFolds = new Set(REPAIR_IDS.map((id) => fold(ITEMS.get(id)!.fr)));
  for (const r of ALL_MINE) {
    ok(!repairFolds.has(fold(r.fr)), `${r.id} « ${r.fr} » duplicates one of a2.07's six frozen repair rows`);
  }
  // And all six reached the seed, or s16-repair renders six empty cards.
  for (const id of REPAIR_IDS) {
    ok(ITEMS.has(id), `${id} is not in the seed: the merge did not carry a2.07's block`);
  }
  const tranche = new Set((LESSON.deckTranche ?? []).flat());
  for (const id of REPAIR_IDS) {
    ok(tranche.has(id), `${id} is not released by any deckTranche. NO RENDERER READS itemIds ON A cardDeck, so a tranche is the only mechanism that works.`);
  }
  ok(/a2\.07/.test(ALL_TEXT), 'a2.07 must be named by unit id in the copy');
});

test('NO renderer-dead itemIds on a cardDeck', () => {
  // `04-REPAIR-MOVE-IDS.md`, corrected 2026-08-15: only `practice` reads
  // `itemIds`. a2.07 and a2.26 both shipped the dead field on a cardDeck.
  for (const s of LESSON.sections) {
    if (s.type !== 'cardDeck') continue;
    ok(!(s as { itemIds?: string[] }).itemIds,
      `${s.id} carries itemIds on a cardDeck, which validates, publishes and draws nothing`);
  }
});

/* ═══ The corpus ═════════════════════════════════════════════════════════ */

test('104 transport rows and 2 Quebec rows, all inside their blocks', () => {
  strictEqual(MINE.length, 104);
  strictEqual(MY_QC.length, 2);
  for (const r of ALL_MINE) {
    strictEqual(r.level, 'a2', `${r.id} is not a2`);
  }
});

test('NOT ONE ROW WAS AUTHORED INTO deplacements, la-ville OR rp-voyage', () => {
  // Nine A1 grammar lessons draw their example nouns from `deplacements`, and
  // a1.03's gender statistic and a1.11's indefinite-article statistic are both
  // measured over its noun population. `rp-voyage` is the role-play namespace
  // and its ids are consumed by scenarios. This unit's scenario section is
  // INLINE and needs no corpus ids at all.
  const tags = new Set(['transports', 'situation']);
  for (const t of ['deplacements', 'la-ville', 'rp-voyage']) {
    const mine = S.items.filter((i) => i.theme === t && (i.tags ?? []).some((x) => tags.has(x)));
    strictEqual(mine.length, 0, `${mine.length} row(s) tagged by this build landed in ${t}`);
  }
});

test('THE BAND VOICE FLOOR: at least 40% of authored rows are the other party', () => {
  // Collation §1.5, the band's mandate. The other party here is the passer-by,
  // the station announcer and the counter agent. The Quebec rows are
  // recognition vocabulary with no speaker and are excluded from both halves.
  const other = MINE.filter((r) => (r.tags ?? []).some((t) => ['passerby', 'announcer', 'agent'].includes(t))).length;
  const pct = other / MINE.length;
  ok(pct >= 0.4, `only ${(pct * 100).toFixed(1)}% of authored rows are in the other party's voice`);
});

test('no intra-theme fold collision, inside this build or against the corpus', () => {
  // `flashhub-coverage.test.ts` treats two rows sharing an `fr` in one theme as
  // one card served twice, so a duplicate would be SILENT. This is the guard
  // against the highest-cost failure available to this unit: Postgres holds 519
  // rows in this theme and the seed showed 5 before the merge, so anybody
  // measuring on the seed would have re-authored four hundred of them.
  const byFold = new Map<string, string>();
  for (const i of S.items) {
    if (i.theme !== THEME && i.theme !== QC_THEME) continue;
    const k = `${i.theme}::${fold(i.fr)}`;
    const hit = byFold.get(k);
    ok(!hit, `${i.id} « ${i.fr} » folds onto ${hit} inside ${i.theme}`);
    byFold.set(k, i.id);
  }
});

test('every respelling uses the superscript n for a nasal, and no U+203F tie', () => {
  for (const r of ALL_MINE) {
    ok(r.respell, `${r.id} has no respelling`);
    ok(!/‿/.test(r.respell!), `${r.id} carries a U+203F tie, which draws as a low underscore on a Pixel 6`);
  }
});

/* ═══ The two bans ═══════════════════════════════════════════════════════ */

test('NOTHING uses y or en as a PRONOUN, in any surface', () => {
  // Collation C8: a2.24 has one lesson and a2.25 has ZERO, so no unit in this
  // band may build a teaching move on either.
  //
  // Written against the PRONOUN'S SHAPES rather than the bare letters, because
  // the PREPOSITION `en` is legal here and is a whole card: en bus, en face, en
  // provenance de, en gare, en raison de. A guard on `\ben\b` would fire on
  // legitimate content forty times over.
  //
  // NOTE FOR THE RECORD, and it corrects the collation's stated rationale
  // rather than its decision: `y` for a place is NOT absent from this unit's
  // own theme. `fr.a2.transports-quotidiens.121` is published and seeded
  // (« Puisqu'il faisait beau, j'ai décidé d'y aller à vélo »), and a wider
  // sweep finds 40 such rows. The ban is a teaching decision, not an absence.
  const shapes = [
    /\bj'y\b/i, /\bon y\b/i, /\bvous y\b/i, /\bnous y\b/i, /\btu y\b/i, /\bil y va\b/i,
    /\bd'y aller\b/i, /\ballons-y\b/i, /\by aller\b/i,
    /\bil y en a\b/i, /\bj'en ai\b/i, /\bon en prend\b/i, /\bj'en veux\b/i,
  ];
  for (const shape of shapes) {
    const hit = shape.exec(ALL_TEXT);
    ok(!hit, `the pronoun y or en reached an authored string as « ${hit?.[0]} »`);
  }
});

test('the direction verbs are USED and the mood is NEVER NAMED', () => {
  // Paul settled it 2026-08-15, option B: NOBODY in this band owns the mood.
  // a2.32 does exactly the same thing in the same terms and neither unit cites
  // the other for it. Banned in every surface including card bodies, `why`
  // strings and the roundup, along with the shape that teaches the paradigm
  // with the label filed off.
  for (const shape of [/imperative/i, /impératif/i, /drop the pronoun from the vous form/i, /\btu form\b/i]) {
    ok(!shape.test(ALL_TEXT), `a naming of the mood reached an authored string: ${shape}`);
  }
  // And the forms ARE used, or the lesson would be teaching a French nobody
  // speaks.
  for (const v of ['Tournez', 'Prenez', 'Continuez', 'Traversez', 'Allez', 'Longez', 'Passez', 'Remontez']) {
    ok(ALL_TEXT.includes(v), `${v} is not used anywhere, and a direction needs it`);
  }
});

/* ═══ Ownership boundaries ═══════════════════════════════════════════════ */

test('the register ladder is a2.29\'s and pourriez-vous appears nowhere', () => {
  ok(!/pourriez-vous/i.test(ALL_TEXT),
    'pourriez-vous is the top rung of a2.29\'s ladder, settled by Paul 2026-08-15 option A');
  // Two openings as two SHAPES is this unit's. A politeness gradient is not.
  // The REPAIR ladder is a2.07's and the word is allowed there.
  const withoutRepair = JSON.stringify(LESSON).replace(/repair ladder/gi, '');
  ok(!/\bladder\b/i.test(withoutRepair),
    'the word "ladder" appears outside "repair ladder": the politeness ladder is a2.29\'s, once, for all eight');
  // `je voudrais` is available as unanalysed lexis and is used exactly that way.
  ok(/je voudrais/i.test(ALL_TEXT), 'je voudrais is permitted and should appear as a whole form');
});

test('the money is a2.26\'s: this unit teaches nothing about paying', () => {
  for (const shape of [/\bcombien ça coûte\b/i, /\bça fait combien\b/i, /\bla monnaie\b/i, /\bje vous rends\b/i]) {
    ok(!shape.test(ALL_TEXT), `a money move reached an authored string: ${shape}`);
  }
});

test('this unit does not reteach the preposition system', () => {
  // a2.04 owns the four-kind sort and chez; a1.21 owns à + place-by-name and
  // the contraction; a1.22 owns en/au/aux with countries. What is genuinely
  // unowned is en against à with transport MODES, which is one card, and the
  // rule is quoted from a published corpus row rather than restated.
  ok(/a2\.04/.test(ALL_TEXT) && /a1\.21/.test(ALL_TEXT),
    'a2.04 and a1.21 must be named as where the preposition system was taught');
  const mode = sec('s07-mode') as { cards?: Array<{ label?: string }> } | undefined;
  ok(mode, 's07-mode is missing');
  ok((mode!.cards ?? []).some((c) => c.label === 'fr.a1.deplacements.014'),
    'the en/à rule must be quoted from the published corpus row, not restated');
  ok(ITEMS.has('fr.a1.deplacements.014'), 'the rule row must have reached the seed');
});

/* ═══ Quebec ═════════════════════════════════════════════════════════════ */

test('NO QUEBEC FORM IS A CORRECT ANSWER AND NONE IS A DISTRACTOR', () => {
  // Collation C3 rule 2, confirmed by Paul 2026-08-15. This walks every OPTION
  // of every scored surface rather than only the correct ones: a form that is
  // right in Montreal and marked red is a defect a TEF Canada candidate will
  // notice and be right about.
  const forms = ['embarquer', 'débarquer', 'la passe', 'char'];
  for (const { where, text } of scoredOptions()) {
    for (const f of forms) {
      ok(!new RegExp(`(?<![\\p{L}\\p{N}-])${f}(?![\\p{L}\\p{N}-])`, 'iu').test(text),
        `${where} carries the Quebec form « ${f} » in a scored option: « ${text} »`);
    }
  }
});

test('the Quebec rows are recognition only and there is at most one card', () => {
  for (const r of MY_QC) {
    ok(!(r.drills ?? []).includes('voiceflash'),
      `${r.id} carries voiceflash and is therefore producible; the policy is recognition only`);
  }
  ok(MY_QC.length <= 2, 'the band convention a2.07 set is at most two authored Quebec rows');
  // And they are reachable, or they are two rows nobody ever meets.
  const tranche = new Set((LESSON.deckTranche ?? []).flat());
  for (const r of MY_QC) ok(tranche.has(r.id), `${r.id} is released by no deckTranche`);
});

/* ═══ The quiz ═══════════════════════════════════════════════════════════ */

test('30 questions, five rounds of six, and the mix inverts the band', () => {
  const qs = quizQs();
  strictEqual(qs.length, 30);
  const rounds = (sec('s22-quiz') as { rounds?: unknown[] }).rounds ?? [];
  strictEqual(rounds.length, 5);
  const by = (f: string) => qs.filter((q) => q.format === f).length;
  // The band's shipped maximum for listenChoose is 3 of 30 across four
  // consecutive lessons. This unit inverts it, and there are two independent
  // reasons: the weight has to sit on reception because the learner's turn is
  // trivial and the reply is the exam, and `listenChoose` is the only genuinely
  // audio-only surface in the product.
  strictEqual(by('listenChoose'), 10);
  strictEqual(by('mcq'), 8);
  strictEqual(by('typeIn'), 7);
  strictEqual(by('errorSpot'), 4);
  strictEqual(by('speak'), 1);
});

test('every listenChoose carries say, and every option is short', () => {
  for (const q of quizQs()) {
    if (q.format !== 'listenChoose') continue;
    // `ListenChooseCard` plays the question clip, then `say`, then the correct
    // option. That third case speaks the answer aloud, and where the options
    // are English it speaks English at a listening exercise. a1.25 shipped it.
    ok(q.say || (q.audio as { clip?: string })?.clip, `listenChoose « ${q.q} » would speak its own answer`);
    // It is the tallest card in the quiz and ten of them has never been
    // rendered on a Pixel 6.
    for (const o of ((q.opts as string[]) ?? [])) {
      ok(o.split(/\s+/).length <= 5, `listenChoose option « ${o} » is too long and the last row will clip`);
    }
  }
});

test('THE BAND FOLD RULE: every typeIn and errorSpot discriminates', () => {
  // Collation §0.3 scoped the hyphen exposure to `normalizeFr` and the dictée
  // and concluded no band-wide rule was needed. That is right about
  // `normalizeFr` and WRONG about the quiz: `matchesAccept` grades typeIn and
  // errorSpot through `fold()`, which strips hyphens, both apostrophes and ALL
  // whitespace. In a transport lesson that hits aller-retour, rond-point,
  // jusqu'au, l'arrêt, l'abonnement and d'environ. The overrule is withdrawn
  // and this is the assertion that replaces it.
  for (const q of quizQs()) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    const answer = (q.answer as string) ?? '';
    ok(answer, `${q.format} « ${q.q} » has no answer`);
    const accept = (q.accept as string[]) ?? [];
    ok(accept.some((a) => fold(a) === fold(answer)),
      `${q.format} « ${q.q} » has an answer no accept entry folds onto`);
    if (q.format === 'errorSpot') {
      const prompt = q.prompt as string;
      ok(prompt, `errorSpot « ${q.q} » has no prompt, so the learner fixes a phrase that never appears`);
      ok(fold(prompt) !== fold(answer),
        `errorSpot « ${q.q} » folds its prompt onto its answer: the item tests nothing`);
    }
  }
});

test('every quiz question carries a why and a ref that resolves', () => {
  const ids = new Set(LESSON.sections.map((s) => s.id));
  for (const q of quizQs()) {
    ok(q.why, `« ${q.q} » has no why`);
    ok(q.ref, `« ${q.q} » has no ref`);
    ok(ids.has(q.ref as string), `« ${q.q} » refs ${q.ref}, which is not a section of this lesson`);
  }
});

test('round 5 is the repair round and it uses a2.07\'s rows', () => {
  const rounds = (sec('s22-quiz') as { rounds?: Array<{ id: string; questions?: Array<Record<string, unknown>> }> }).rounds ?? [];
  const r5 = rounds[4];
  strictEqual(r5.id, 'r5-wrong');
  // It deliberately echoes a1.30.l2's `x12-repair` round, which has been
  // ASSESSING the repair move since the A1 capstone shipped, with no lesson
  // teaching it until a2.07 did.
  const text = JSON.stringify(r5);
  ok(/Pardon/.test(text) && /Plus lentement/.test(text), 'round 5 must use a2.07\'s rungs');
  // And the two items that are THIS unit's addition: the partial-understanding
  // state, which a2.07's six general rungs do not cover.
  ok(/deuxième ou la troisième/.test(text), 'the targeted repair must be tested');
});

/* ═══ Production surfaces ════════════════════════════════════════════════ */

test('PRACTICE IS MANDATORY and every item it names can be spoken', () => {
  // `lesson-contract.test.ts:505` mirrors the publish gate and fails any
  // non-assessment lesson with no practice section, an empty `practice.itemIds`
  // or an empty `Lesson.itemIds`. No prompt in this band said so until the
  // consistency pass found it.
  const p = LESSON.sections.filter((s) => s.type === 'practice');
  strictEqual(p.length, 1);
  const ids = (p[0] as { itemIds?: string[] }).itemIds ?? [];
  ok(ids.length > 0, 'an empty practice.itemIds fails the publish gate');
  // `skill` is DECORATIVE: LessonSection.tsx's case 'practice' renders
  // PracticeVFView and never passes it. It is authored as 'speak' because that
  // is what actually draws, and the design's 'listen' would have named a
  // speaking drill something it is not.
  strictEqual((p[0] as { skill?: string }).skill, 'speak');
  for (const id of ids) {
    const it = ITEMS.get(id);
    ok(it, `practice names ${id}, which is not in the seed`);
    ok((it!.drills ?? []).includes('voiceflash'), `${id} cannot reach a speak drill: it has no voiceflash`);
  }
  ok((LESSON.itemIds ?? []).length > 0, 'an empty Lesson.itemIds releases no SRS cards');
});

test('the dictée tests letters, never an accent, an apostrophe or a hyphen', () => {
  // The dictée tile check is the one render-side caller of `normalizeFr`, which
  // strips accents, BOTH apostrophes, hyphens and all punctuation. That rules
  // out aller-retour, rond-point, jusqu'au and l'arrêt, all of which are
  // everywhere in this unit's material and none of which is in this section.
  const d = sec('s17-dictee') as { itemIds?: string[] } | undefined;
  ok(d?.itemIds?.length, 's17-dictee names no items');
  for (const id of d!.itemIds!) {
    const it = ITEMS.get(id);
    ok(it, `s17-dictee names ${id}, which is not in the seed`);
    ok((it!.drills ?? []).includes('dictation'), `${id} carries no dictation drill`);
    ok(!/['’-]/.test(it!.fr), `${id} « ${it!.fr} » carries an apostrophe or a hyphen, which normalizeFr strips`);
    // WORD mode needs more than 16 letters AND more than one word.
    const letters = it!.fr.replace(/[^A-Za-zÀ-ÿ]/gu, '').length;
    ok(letters > 16, `${id} « ${it!.fr} » has ${letters} letters and would run in LETTER mode`);
    ok(it!.fr.trim().split(/\s+/).length > 1, `${id} is one word and would run in LETTER mode`);
  }
});

test('every trapDrill is stepped, gated, and swipes', () => {
  // A2 traps have ONE shape. The stacked render hides the gate, the audio and
  // the sub-mission number, which is exactly the three things the rung-4 drill
  // is for.
  const traps = LESSON.sections.filter((s) => s.type === 'trapDrill');
  strictEqual(traps.length, 2, 'two trapDrills, both pre-approved: the type already repeats in ten shipped lessons');
  for (const t of traps) {
    const steps = ((t as { steps?: Array<{ kind: string; gate?: boolean }> }).steps ?? []);
    strictEqual(steps.map((s) => s.kind).join(','), 'rule,cards,audio,drill', `${t.id} is not the house trap shape`);
    strictEqual(steps.at(-1)?.gate, true, `${t.id}'s drill step is not gated`);
    strictEqual((t as { swipe?: boolean }).swipe, true, `${t.id} has no swipe`);
  }
});

test('the rung-4 drill scores ORDER, which is what the Owns is', () => {
  // `chainDrill` was declined (collation §3.2, C2) and this is what replaces
  // it. What is lost is that `trapDrill` prints `promptSay` on screen, so the
  // learner SEES the chain while answering and the pure working-memory element
  // is not recovered. What SURVIVES is the Owns, which is chunking and
  // ORDERING: every option in a question contains the same moves and only the
  // sequence differs, so knowing the vocabulary gets a learner nothing.
  const d = (sec('s11-four') as { drill?: Array<{ opts: string[]; correct: number }> }).drill ?? [];
  ok(d.length >= 6, 'the holding drill needs at least six questions');
  for (const q of d) {
    const words = q.opts.map((o) => o.toLowerCase().split(/[\s,]+/).filter(Boolean).sort().join(' '));
    ok(new Set(words).size < q.opts.length,
      `« ${q.opts[0]} » has no option sharing its words: this question tests vocabulary rather than order`);
  }
});

test('commonErrors carries swipe, or it draws a blank screen', () => {
  for (const s of LESSON.sections) {
    if (s.type !== 'commonErrors') continue;
    strictEqual((s as { swipe?: boolean }).swipe, true, `${s.id} without swipe renders nothing`);
  }
});

/* ═══ The reception bank, and what a2.35 inherits ════════════════════════ */

test('the announcement tranche exists, and it was 0 rows in 48,325 before', () => {
  // DELF A2's CO syllabus names "annonces dans un lieu public" as a genre and
  // the corpus held zero of them. Re-measured directly: `à destination de` 0,
  // `en provenance de` 0, `attention au départ` 0, `voie numéro` 0.
  const annonces = MINE.filter((r) => (r.tags ?? []).includes('announcement'));
  ok(annonces.length >= 16, `only ${annonces.length} announcement rows`);
  for (const shape of [/à destination de/, /en provenance de/]) {
    ok(annonces.some((r) => shape.test(r.fr)), `no announcement uses ${shape}`);
  }
  // Nothing else in the corpus should have beaten this build to it, which is
  // the claim that justified authoring the tranche.
  const others = S.items.filter((i) => /à destination de|en provenance de/.test(i.fr) && !MINE.some((m) => m.id === i.id));
  strictEqual(others.length, 0, `${others.length} announcement row(s) already existed: ${others.map((o) => o.id).join(', ')}`);
});

test('ordinals in a direction exist here and existed nowhere before', () => {
  // The unit's second Owns. Measured: `la première à droite` 0,
  // `la deuxième à droite` 0, `la troisième rue` 0, `prenez la deuxième` 0.
  const ordinals = MINE.filter((r) => (r.tags ?? []).includes('ordinal'));
  ok(ordinals.length >= 10, `only ${ordinals.length} ordinal rows`);
  const others = S.items.filter((i) =>
    /\b(première|deuxième|troisième)\b/i.test(i.fr) && /\b(à droite|à gauche)\b/i.test(i.fr)
    && !ALL_MINE.some((m) => m.id === i.id));
  strictEqual(others.length, 0, `${others.length} row(s) already put an ordinal in a direction: ${others.map((o) => o.id).join(', ')}`);
});

test('every listening line and every scenario turn stands alone', () => {
  // Collation §7.2 and §1.4: this band leaves a2.35 a reception bank, and it
  // does so for free if the lines are authored to be liftable. No line may
  // reference this lesson's framing.
  const framing = /\bthe card before\b|\bthe scene\b|\bmove type\b|\bthis lesson\b|\bearlier\b/i;
  for (const s of LESSON.sections) {
    for (const l of ((s as { lines?: Array<{ fr: string; en: string }> }).lines ?? [])) {
      ok(!framing.test(l.en), `${s.id} listening line « ${l.en} » depends on this lesson's framing`);
    }
    for (const t of ((s as { turns?: Array<{ en: string; userEn?: string }> }).turns ?? [])) {
      ok(!framing.test(t.en), `${s.id} turn « ${t.en} » depends on this lesson's framing`);
    }
  }
});

test('the scenario carries alts and userEn on every turn', () => {
  const sc = sec('s18-guichet') as { turns?: Array<{ ai: string; en: string; user: string; userEn?: string; alts?: unknown[] }> } | undefined;
  ok(sc, 's18-guichet is missing');
  const turns = sc!.turns ?? [];
  ok(turns.length >= 6, `only ${turns.length} turns`);
  for (const t of turns) {
    ok(t.userEn, `a turn has no userEn: « ${t.ai} »`);
    ok((t.alts ?? []).length >= 2, `a turn has fewer than two alts: « ${t.ai} ». TCF EO caps a candidate who produces one question form.`);
  }
  // ONE TURN'S CORRECT USER MOVE IS A REPAIR, and it is the design's signature.
  // Nothing else in the product does this.
  ok(turns.some((t) => /Pardon/i.test(t.user)), 'no turn\'s correct move is a repair');
  // No Scenario.exam, per collation §1.12: it is read by no code anywhere.
  ok(!(sc as { exam?: unknown }).exam, 'Scenario.exam is read by no code and must not be authored');
});

test('no ExamTask claim, no Scenario.exam, and no dead audio field', () => {
  // Five audio fields validate, publish and do nothing: modelPlayback,
  // wrongThenRight, perSentenceReplay, scoreOn, autoplay. `maxPlays` is
  // resolved by lessonAudio.logic.ts and consumed by no component. None is
  // authored here believing it does something.
  const text = JSON.stringify(LESSON);
  for (const f of ['modelPlayback', 'perSentenceReplay', 'scoreOn', 'autoplay', 'maxPlays']) {
    ok(!text.includes(`"${f}"`), `${f} is authored and no renderer reads it`);
  }
});

/* ═══ House copy rules ═══════════════════════════════════════════════════ */

test('no em dash and no "honest" anywhere', () => {
  ok(!/—/.test(ALL_TEXT), 'an em dash reached an authored string');
  ok(!/honest/i.test(ALL_TEXT), '"honest" reached an authored string');
});

test('the reframe is carried verbatim, and there is only one of it', () => {
  const REFRAME = 'Find the joints, then take one move at a time.';
  strictEqual(LESSON.reframe, REFRAME);
  const hits = LESSON.sections.filter((s) => JSON.stringify(s).includes(REFRAME));
  ok(hits.length >= 3, `the reframe appears in ${hits.length} section(s), and the validator wants at least 3`);
  ok(JSON.stringify(LESSON.sections.find((s) => s.id === 's23-roundup')).includes(REFRAME),
    'the roundup must carry the reframe verbatim');
  // And no SECOND version of it anywhere.
  ok(!/count the joints first/i.test(ALL_TEXT), 'a second phrasing of the reframe exists');
});

test('every itemId the lesson names resolves in this same file', () => {
  // THE ASSERTION THE COLLATION ASKED FOR. The seed is a CUT: this theme held
  // 519 published rows in Postgres and 5 in the seed before the merge, and
  // `la-ville` held 347 and 0. Without the merge pulling every referenced row
  // out of Postgres, the imported cards render EMPTY ON DEVICE while every test
  // passes against a corpus that has them.
  for (const id of (LESSON.itemIds ?? [])) {
    ok(ITEMS.has(id), `${id} is named by the lesson and is not in the seed: its card renders blank offline`);
  }
  for (const s of LESSON.sections) {
    for (const id of ((s as { itemIds?: string[] }).itemIds ?? [])) {
      ok(ITEMS.has(id), `${s.id} names ${id}, which is not in the seed`);
    }
    for (const g of ((s as { groups?: Array<{ items?: Array<{ itemId?: string }> }> }).groups ?? [])) {
      for (const it of (g.items ?? [])) {
        if (it.itemId) ok(ITEMS.has(it.itemId), `${s.id} names ${it.itemId}, which is not in the seed`);
      }
    }
  }
  for (const id of (LESSON.deckTranche ?? []).flat()) {
    ok(ITEMS.has(id), `deckTranche releases ${id}, which is not in the seed`);
    ok((ITEMS.get(id)!.drills ?? []).includes('flashcard'),
      `${id} is released by a tranche and carries no flashcard drill, so it produces no card`);
  }
});
