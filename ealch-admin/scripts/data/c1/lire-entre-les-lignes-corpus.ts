// c1.20.l1 « Lire entre les lignes » — the authored corpus, the imports, the
// anchor texts and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (the workshop shape, strategy variant) on
// top of B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (« What is
// different at C1 ») and the c1.20 section of C1-RESEARCH-PLAN.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (c1.24 « Analyser la presse » may import REFRAME from this
// file and quote it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID,
// THEME, LEVEL, E, ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, PG_ROWS, Cap,
// refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   READING BETWEEN THE LINES AT C1: WHAT AN ESSAY DOES WITHOUT SAYING IT,
//   AND NOT MAKING IT SAY MORE THAN IT DOES. The C1 reading (CE) remediation
//   target (`CE@c1 → c1.20.l1`, prepared in Phase 0).
//
//     act 1   the problem: a summary that inflates a conclusion
//     act 2   concession then restriction as the backbone of essay prose
//             (c’est exact / reste que, certes / encore faut-il, sans doute /
//             il n’en demeure pas moins); granting the fact, refusing the
//             conclusion; « sans doute » is not a certainty
//     act 3   the exact scope of a conclusion: domain, quantity, strength,
//             condition; partial negation; reject the stronger AND the weaker
//             paraphrase
//     act 4   the stated vs the real object of a disagreement (facts, a word,
//             a value, who decides)
//     act 5   what a paragraph is DOING (pose, délimite, illustre, s’objecte,
//             écarte un contresens, élargit)
//     act 6   what an analogy compares and where it breaks; what a final
//             sentence does (résumer, retourner, ouvrir, ironiser)
//     act 7   the writer’s stance toward a source (s’appuyer, corriger un
//             usage, donner raison et tort, accorder en partie, réfuter,
//             retourner un camp)
//     act 8   grammatical presupposition: the definite article, encore,
//             ne… plus, cesser de, factive verbs, the presupposing question;
//             the negation test; présupposé vs sous-entendu
//     act 9   irony at C1: echo, the impossible praise, mock modesty, irony
//             as a topic, and the rule « no textual cue, no irony »
//     act 10  the hidden agent: agentless passive, nominalisation, on,
//             impersonal il, abstract subject, pronominal passive
//     act 11  the exam: TCF Canada / TEF Canada CE C1 items and their four
//             distractor families
//     act 12  the task: a 250 to 400 word analysis of an opinion piece
//
//   NOT OWNED, CITED ONLY (all published, v76 and v84):
//     - thesis vs topic, evidence vs assertion, the unstated assumption,
//       distance markers, tone and antiphrasis, soft words and omissions,
//       fact / opinion / interpretation are b2.24's (« Lire de façon
//       critique », la leçon 24 du B2). Act 1 recaps them in ONE section and
//       reuses six of its rows by id; nothing after act 1 re-teaches them.
//     - reading for the gist is b1.37's (« Lire sans tout comprendre », la
//       leçon 37 du B1); its reframe row is named in act 1.
//     - concession as GRAMMAR (bien que, quoique, avoir beau) is b2.16's (la
//       leçon 16 du B2); act 2 quotes its reframe and reads concession as
//       structure, never as a form to build.
//     - the passive and nominalisation as FORMS are b1.18's and b2.10's;
//       act 10 names them and reads what they hide.
//     - press genres and framing are c1.24's (« Analyser la presse »), written
//       in parallel in wave 1: no headline, chapô or rubrique here.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, Postgres-checked 2026-09-30 (read-only probes inside
//      BEGIN TRANSACTION READ ONLY … COMMIT, no plain SET)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `strategies-de-comprehension` (domain education) is widened to
//     b1-c1 (Phase 0 step 5) and carries the sub-theme « lire entre les
//     lignes ». Postgres holds b1 376 rows (.1000-.1389) and b2 365 rows
//     (.1400-.1764), and ZERO c1 rows (read 2026-09-30).
//
//  2. ID BLOCK: this lesson owns `fr.c1.strategies-de-comprehension.1800` to
//     `.1999` AND NOTHING ELSE. The block was probed free at EVERY level of
//     the theme (0 rows numbered 1800-1999). `.2000`-`.2199` belongs to
//     c1.24, written in parallel: not touched. Used: all 200, in twelve act
//     blocks (§H).
//
//  3. REUSED ROWS. The b1.37 and b2.24 rows in §F, and
//     `fr.b2.opinions-et-avis.1684` (« sans doute », reused because an
//     authored « sans doute » clashed with it), are in Postgres AND in the
//     local seed (`seedPlusPacks()`), published; `src()` reads them from the
//     seed. The nine LEGACY c1 rows in `PG_ROWS` are published in Postgres
//     but ABSENT from the local seed (the seed is a cut: 884 of the 913 c1
//     rows are missing from it), so their fr / en / drills are copied here
//     verbatim from Postgres, read 2026-09-30, and `src()` falls back to
//     them. All nine carry drills {sentence, review} (no flashcard, no
//     voiceflash): they are NAMED, never released, never spoken in
//     `practice`. Read before reuse, as the build log asks:
//       - all nine use the straight apostrophe and two use the spaced « ? »
//         (a known legacy defect; they are never quoted inside the scenario,
//         so the mixed-apostrophe check cannot fire). A fix is a text edit
//         with `--reapply`, no version bump: Paul's call, open question 4.
//       - none carries a wrong mood, a real-world figure or a sensitive
//         topic. `fr.c1.philosophie.008` was considered and REJECTED: its
//         Postgres IPA carries a U+203F tie.
//
//  4. NO AUTHORED ROW REPEATS A PUBLISHED HEADWORD (the flashcard-hub
//     duplicate rule). Every `fr` was folded and compared with all 62 184
//     Postgres rows (not the seed) on 2026-09-30: 0 clashes. Two planned
//     phrases clashed and were changed: « sans doute » (now reused by id,
//     see 3) and « toujours est-il que » (fr.sons.mots-de-liaison.083), so
//     .1823 and .1830 are authored as sentences instead.
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR. A real
//     /n/ or /m/ after a vowel is written double where `hasPlainNasal` could
//     read it as a nasal vowel: filigrane GRANN, supprime PREEMM, gêne
//     ZHENN, jeunes ZHUHNN, consomme SOMM, communes MÜNN, personne(s) SONN,
//     téléphone FONN, vitrine TREENN, cuisine ZEENN, piscine SEENN, semaine
//     MENN, certaines TENN, programmes GRAMM, prennent PRENN, une TÜNN,
//     donnent DONN, Élimine MEENN, événement venn. Every consonant doubled
//     here is really pronounced. No U+203F tie anywhere, in a respelling OR an
//     IPA field.
//
//  6. THE ANCHOR TEXTS IN §I ARE AUTHORED, NOT QUOTED: « texte original écrit
//     pour la leçon », all twelve, and the task tribune. No literary or
//     press extract is quoted anywhere in the lesson. The exam documents of
//     act 11 imitate the shape of the six published CE C1 tasks
//     (`exam.tcf_canada.blanc-01..05.ce_mcq.005`,
//     `exam.tef_canada.blanc-01.ce_mcq.006`) and copy none of their texts,
//     topics or items.
//
//  7. FACT CHECK. Every person, outlet, platform, institute, school, museum,
//     town and figure below is INVENTED. Real places appear only as places.
//       PEOPLE: Mathilde Orsoni, Bastien Lacombe-Rey, Inès Vardier, Claire
//         Moisan, Paul-Émile Garnache, Youssef Benali, Agathe Rouvray, Henri
//         Vautrel (pédopsychiatre), Denis Kaboré, Léonie Fréchette, Gaëlle
//         Lapointe, Romain Desforges, Sophie Andrieux (nutritionniste),
//         Claire (the tutor), Samir (the study partner).
//       ORGANISATIONS: la plateforme Escale, le réseau de Valcourt-sur-Orne,
//         l’Observatoire Hestia, l’Institut Corvelle, le musée de Corvelle,
//         la Régie du Vieux-Pommier, l’école des Érables, les Ateliers
//         Saveur, l’association des embouteilleurs (unnamed).
//       TOWNS: Valcourt-sur-Orne, Saint-Aubert-des-Monts, Corvelle, Vauberge
//         (a one-line example in act 5); « la fédération des commerçants »
//         and « le rapport » in act 7's practice lines are unnamed.
//       REAL PLACES, AS PLACES ONLY: Montréal (the scene).
//       FIGURES, ALL INVENTED, NONE STATED AS A REAL-WORLD FACT: 9 profiles in
//         10 above 4,6 on Escale; Valcourt attendance +30 % in five years;
//         Hestia’s 2 300 pupils, eight pages, no effect on details; the
//         Corvelle museum’s « moins de trente secondes » (stated as that
//         museum’s own survey, not as a general finding); the Corvelle
//         synthesis on homework; 45 000-90 000 dollars; « moins de deux
//         centimes par bouteille »; Hestia’s 41 % of 15-17 year olds.
//       GENERAL CLAIMS A REVIEWER SHOULD READ ONCE: act 3 « on se perd plus
//         vite dans une ville qu’on visite rue par rue » (an analogy, not a
//         finding); act 7’s standing-desk chronicle (no real study named);
//         act 11 document 1 places a pay-range law in « la province
//         voisine » without naming one; document 2 a bottle deposit in « la
//         province ». Neither is presented as current Canadian law.
//       QUOTATIONS: none from a real person or text. Every quoted phrase is a
//         line of an invented document inside the lesson.
//
//  8. LOW-HEAT TOPICS ONLY, none needing French political culture: online
//     ratings, library silence, reading on screens, lawns, museum labels,
//     notifications, homework, the « Why don’t young people read » question,
//     a day waiting for the radiator technician, school trips, pay ranges, bottle
//     deposits, cooking at school. No living politician, no party, no
//     election, no real campaign.
//
//  9. APOSTROPHES: every authored French string uses the typographic ’, so
//     the scenario never mixes ’ and ' (the app check).
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c1.20',
  seq: 20,
  title: 'Reading Between the Lines',
  sub: 'Lire entre les lignes',
  canDo: 'Can read a 300 to 400 word essay or opinion piece and state its thesis at its exact scope, what it concedes and then restricts, the real object of the disagreement, what a paragraph, an analogy or a closing line is doing, the writer’s stance toward a source, what its grammar presupposes, its irony from a textual cue and the agent its passives hide, and answer TCF and TEF C1 reading items without falling for their distractors',
  prereqUnitIds: ['b2.24', 'b1.37'],
} as const;

export const LESSON_ID = 'c1.20.l1';
export const THEME = 'strategies-de-comprehension';
export const LEVEL = 'c1' as const;

/** ONE block, by the brief. c1.24 owns 2000-2199 in the same theme. */
export const ID_RANGES = [[1800, 1999]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/** b1.37's and b2.24's rows, published, named by their full id. */
export const B137 = (n: number) => `fr.b1.${THEME}.${n}`;
export const B224 = (n: number) => `fr.b2.${THEME}.${n}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B1 and B2 units are in the seed (v76, v84); their `seq` is read from it.
 *  No c1 unit exists yet, so a C1 citation comes from the plan. Never a raw
 *  id on screen.
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

/** TODO(import): drop once the c1 units are rows in `content_units`. */
const C1_SEQ_FROM_PLAN: Record<string, number> = { 'c1.20': 20, 'c1.21': 21, 'c1.24': 24 };

export function refFr(unitId: string): string {
  const band = unitId.slice(0, 2);
  if (band === 'b1' || band === 'b2') {
    const n = SEQ.get(unitId);
    if (!n) throw new Error(`c1.20: ${unitId} is not in the seed`);
    return `la leçon ${n} du ${band.toUpperCase()}`;
  }
  const planned = C1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du C1` : unitRef(unitId);
}

export const LECTURE_B1_UNIT = 'b1.37';
export const PASSIF_UNIT = 'b1.18';
export const NOMINALISATION_UNIT = 'b2.10';
export const CONCESSION_B2_UNIT = 'b2.16';
export const ARGUMENTATION_UNIT = 'b2.23';
export const CRITIQUE_UNIT = 'b2.24';
export const DEBATS_UNIT = 'c1.21';

export const LECTURE_B1_REF = refFr(LECTURE_B1_UNIT);
export const PASSIF_REF = refFr(PASSIF_UNIT);
export const NOMINALISATION_REF = refFr(NOMINALISATION_UNIT);
export const CONCESSION_B2_REF = refFr(CONCESSION_B2_UNIT);
export const CRITIQUE_REF = refFr(CRITIQUE_UNIT);
export const DEBATS_REF = refFr(DEBATS_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B224_REFRAME, REFRAME_EN as B224_REFRAME_EN } from '../b2/lecture-critique-corpus.ts';
export { REFRAME as B137_REFRAME } from '../b1/strategies-lecture-corpus.ts';
export { REFRAME as B216_REFRAME } from '../b2/concession-avancee-corpus.ts';
export { REFRAME as B210_REFRAME } from '../b2/nominalisation-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE WATERMARK (« lire en filigrane » is the French for reading between
 *  the lines). b1.37 lit the page with a lamp; b2.24 held a magnifying glass
 *  over it. Here the sheet is held up to the window: what is IN the paper
 *  but not printed on it shows through, and only there, where the paper
 *  really carries it. The watermark is two things at once, and so is the
 *  reframe: there is more in the sheet than the ink (presupposition, irony,
 *  function, stance), and there is nothing in it that the paper does not
 *  hold (scope: no stronger paraphrase, no irony without a cue).
 *
 *  It is NOT « read what is not written ». Acts 3, 9 and 11 punish exactly
 *  that: a reader who finds a hidden meaning everywhere fails a C1 paper as
 *  surely as one who finds none.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Un texte dit plus que ses phrases, et moins qu’on ne lui fait dire.';
export const REFRAME_EN = 'A text says more than its sentences, and less than people make it say.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Lis ce qui n’est pas écrit.',
    why: 'It licenses over-reading, the very fault acts 3, 9 and 11 are built against: the stronger paraphrase, irony without a cue, the exam option that goes further than the text. Half of the lesson is about NOT doing this.',
  },
  {
    text: 'Le sens est entre les lignes.',
    why: 'Same flaw, softer: it places meaning outside the sentences, when presupposition (act 8) and the hidden agent (act 10) are IN the grammar of the sentence, and the scope of a conclusion (act 3) is in its quantifiers.',
  },
  {
    text: 'Ce qu’un texte affirme n’est pas ce qu’il prouve.',
    why: 'b2.24’s reframe, true and already learned: act 1 quotes it. It weighs evidence; it says nothing about what a sentence takes for granted, what a paragraph does, or how far a conclusion goes.',
  },
  {
    text: 'Ni plus, ni moins que le texte.',
    why: 'Right for act 3 and act 11, and wrong for acts 8 to 10, where the text DOES say more than its words: a « plus » that asserts a golden age, an echo that mocks, a passive that hides who decided.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  b1.37 and b2.24 rows: read from Postgres and the seed on 2026-09-30, French
 *  in the trailing comment. Legacy c1 rows: Postgres only, see `PG_ROWS`.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    B137(1005),                              // Le sens d'abord, les mots ensuite.  (flashcard only)
    B224(1426),                              // La thèse arrive souvent après la concession.  (flashcard only)
    B224(1466),                              // Le texte ne le dit pas, mais il le suppose.  (flashcard only)
    B224(1479),                              // Le conditionnel met le journaliste à distance.  (flashcard only)
    B224(1501),                              // L’ironie dit le contraire de ce qu’elle pense.  (flashcard only)
    B224(1525),                              // Un mot doux peut cacher une mauvaise nouvelle.  (flashcard only)
    'fr.c1.nuances-et-registres.094',        // Il faut lire entre les lignes, ils cherchent en réalité à vendre l'entreprise.  (PG only)
    'fr.c1.nuances-et-registres.107',        // On m'a répondu que le dossier suivait son cours, autant dire qu'il dort dans un tiroir.  (PG only)
  ],
  act2: [
    'fr.c1.rhetorique.052',                  // Je veux bien admettre que le streaming a sauvé la musique, reste que les artistes touchent des miettes.  (PG only)
    'fr.c1.rhetorique.022',                  // Mettons que le marché se calme, toujours est-il que les loyers étouffent.  (PG only)
    'fr.c1.rhetorique.027',                  // Certes, l'intelligence artificielle rédige vite, il n'en demeure pas moins qu'elle invente parfois.  (PG only)
    'fr.c1.rhetorique.024',                  // Bien sûr, la critique est facile, cela dit certaines critiques visent juste.  (PG only)
    'fr.b2.opinions-et-avis.1684',           // sans doute  ("probably": the published headword, reused rather than re-authored)
  ],
  act3: [
    'fr.c1.rhetorique.005',                  // Sans doute, mais votre conclusion va trop loin.  (PG only)
  ],
  act4: [] as string[],
  act5: [] as string[],
  act6: [] as string[],
  act7: [] as string[],
  act8: [
    'fr.c1.rhetorique.113',                  // Si la mesure est aussi efficace qu'on le prétend, pourquoi aucun des pays voisins ne l'a-t-il encore adoptée ?  (PG only)
  ],
  act9: [] as string[],
  act10: [] as string[],
  act11: [
    B224(1578),                              // L’auteur est favorable à l’objectif, mais pas au moyen.
  ],
  act12: [
    'fr.c1.discours-dexamen.142',            // Certes, les chiffres semblent encourageants, mais ils masquent de fortes disparités régionales.  (PG only)
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Published in Postgres, absent from the local seed cut. Copied VERBATIM
 *  (fr, en, drills) from Postgres on 2026-09-30. `src()` falls back here. */
export const PG_ROWS: Record<string, { id: string; fr: string; en: string; drills: string[] }> = Object.fromEntries([
  { id: 'fr.c1.nuances-et-registres.094', fr: "Il faut lire entre les lignes, ils cherchent en réalité à vendre l’entreprise.", en: 'You have to read between the lines, they are actually looking to sell the company.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.nuances-et-registres.107', fr: "On m’a répondu que le dossier suivait son cours, autant dire qu’il dort dans un tiroir.", en: "I was told the file was moving along, which is to say it's sleeping in a drawer.", drills: ['sentence', 'review'] },
  { id: 'fr.c1.rhetorique.052', fr: 'Je veux bien admettre que le streaming a sauvé la musique, reste que les artistes touchent des miettes.', en: 'I will admit that streaming saved the music industry, still, artists are paid crumbs.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.rhetorique.022', fr: 'Mettons que le marché se calme, toujours est-il que les loyers étouffent.', en: 'Say the market does cool down, the fact remains that rents are suffocating people.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.rhetorique.027', fr: "Certes, l’intelligence artificielle rédige vite, il n’en demeure pas moins qu’elle invente parfois.", en: 'Granted, artificial intelligence writes quickly, the fact remains that it sometimes makes things up.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.rhetorique.024', fr: 'Bien sûr, la critique est facile, cela dit certaines critiques visent juste.', en: 'Of course criticism is easy, that said, some criticism hits the mark.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.rhetorique.005', fr: 'Sans doute, mais votre conclusion va trop loin.', en: 'Perhaps so, but your conclusion goes too far.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.rhetorique.113', fr: "Si la mesure est aussi efficace qu’on le prétend, pourquoi aucun des pays voisins ne l’a-t-il encore adoptée ?", en: 'If the measure is as effective as claimed, why has none of the neighbouring countries adopted it yet?', drills: ['sentence', 'review'] },
  { id: 'fr.c1.discours-dexamen.142', fr: 'Certes, les chiffres semblent encourageants, mais ils masquent de fortes disparités régionales.', en: 'Granted, the figures look encouraging, but they mask major regional disparities.', drills: ['sentence', 'review'] },
].map((r) => [r.id, r]));

/** No `flashcard` drill in Postgres: nameable, never releasable. */
export const NOT_DECK_ABLE: string[] = Object.keys(PG_ROWS);

/** No `voiceflash` either: never in a `practice` speak section. The six
 *  b1.37 / b2.24 rule cards are flashcard-only, so they stay deck-able. */
export const NOT_SPEAKABLE: string[] = [
  ...NOT_DECK_ABLE,
  B137(1005), B224(1426), B224(1466), B224(1479), B224(1501), B224(1525),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  A WORKSHOP CORPUS HOLDS PHRASES THAT DO A JOB: a line the learner meets in
 *  an anchor text, a question a C1 reader asks, or a line of an analysis the
 *  learner can reuse in the task. Each act also has one flashcard-only rule
 *  card (`rule()`), whose prompt is a situation and whose `fr` is the move.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['lire-entre-les-lignes'], ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, ...extra,
});

/** A rule card: `prompt` is the situation, `fr` the move. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE FILIGRANE ───────────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1800, 'Cinq étoiles, aucune information', 'Five stars, no information', '/sɛ̃k e.twal o.kyn ɛ̃.fɔʁ.ma.sjɔ̃/', 'sehⁿk ay-TWAL oh-kün ehⁿ-for-ma-SYOHⁿ', ['titre', 'avis']),
  sent(1801, 'Une échelle dont on n’utilise que le dernier dixième ne mesure plus grand-chose.', 'A scale of which only the top tenth is used no longer measures much.', '/y.ne.ʃɛl dɔ̃.tɔ̃ ny.ti.liz kə lə dɛʁ.nje di.zjɛm nə mə.zyʁ ply ɡʁɑ̃ ʃoz/', 'ü-nay-SHEL dohⁿ-tohⁿ nü-tee-LEEZ kuh luh dehr-nyay dee-ZYEM nuh muh-ZÜR plü grahⁿ-SHOHZ', ['portee', 'avis']),
  sent(1802, 'C’est exact, et c’est précisément le problème.', 'That is correct, and that is precisely the problem.', '/sɛ.tɛɡ.zakt e sɛ pʁe.si.ze.mɑ̃ lə pʁɔ.blɛm/', 'seh-teg-ZAKT ay seh pray-see-zay-mahⁿ luh pro-BLEM', ['concession', 'avis'], FCVDR),
  sent(1803, 'La note ne se contente pas de décrire : elle dresse.', 'The rating does not merely describe: it trains.', '/la nɔt nə sə kɔ̃.tɑ̃t pa də de.kʁiʁ ɛl dʁɛs/', 'la NOT nuh suh kohⁿ-tahⁿt pa duh day-KREER el DRESS', ['these', 'avis']),
  sent(1804, 'L’auteure veut qu’on supprime les étoiles des plateformes.', 'The writer wants the stars removed from the platforms.', '/lo.tœʁ vø kɔ̃ sy.pʁim le.ze.twal de plat.fɔʁm/', 'loh-TUHR veu kohⁿ sü-PREEMM lay-zay-TWAL day plat-FORM', ['trop-fort', 'avis']),
  sent(1805, 'Elle garde les étoiles, mais refuse qu’on les lise comme une mesure de la qualité.', 'She keeps the stars, but refuses to have them read as a measure of quality.', '/ɛl ɡaʁd le.ze.twal mɛ ʁə.fyz kɔ̃ le liz kɔ.myn mə.zyʁ də la ka.li.te/', 'el GARD lay-zay-TWAL meh ruh-füz kohⁿ lay LEEZ ko-mün muh-zür duh la ka-lee-TAY', ['exact', 'avis']),
  sent(1806, 'Je ne propose pas de supprimer les étoiles.', 'I am not proposing to abolish the stars.', '/ʒə nə pʁɔ.poz pa də sy.pʁi.me le.ze.twal/', 'zhuh nuh pro-pohz pa duh sü-pree-may lay-zay-TWAL', ['portee', 'avis'], FCVDR),
  phrase(1807, 'lire en filigrane', 'to read between the lines (literally, to read in the watermark)', '/liʁ ɑ̃ fi.li.ɡʁan/', 'leer ahⁿ fee-lee-GRANN', ['methode']),
  sent(1808, REFRAME, REFRAME_EN, '/œ̃ tɛkst di plys kə se fʁaz e mwɛ̃ kɔ̃ nə lɥi fɛ diʁ/', 'uhⁿ TEKST dee plüss kuh say FRAHZ ay mwehⁿ kohⁿ nuh lwee feh DEER', ['regle'], FC,
    rule('Ta tutrice te demande ce que conclut exactement un essai. Tu le redis en plus fort. Qu’as-tu oublié ?', 'Qu’un texte dit plus que ses phrases, et moins qu’on ne lui fait dire. Cherche l’implicite, mais ne lui prête pas une conclusion qu’il refuse.')),
  sent(1809, 'Que dit exactement le texte ?', 'What exactly does the text say?', '/kə di ɛɡ.zak.tə.mɑ̃ lə tɛkst/', 'kuh dee eg-zak-tuh-mahⁿ luh TEKST', ['question', 'portee']),
  sent(1810, 'Que tient-il pour acquis sans le dire ?', 'What does it take for granted without saying so?', '/kə tjɛ̃.til pu.ʁa.ki sɑ̃ lə diʁ/', 'kuh tyehⁿ-TEEL poo-ra-KEE sahⁿ luh DEER', ['question', 'presuppose']),
  sent(1811, 'Que fait ce paragraphe dans le raisonnement ?', 'What is this paragraph doing in the argument?', '/kə fɛ sə pa.ʁa.ɡʁaf dɑ̃ lə ʁɛ.zɔn.mɑ̃/', 'kuh feh suh pa-ra-GRAF dahⁿ luh reh-zonn-MAHⁿ', ['question', 'fonction']),
  sent(1812, 'Comment l’auteure traite-t-elle ses sources ?', 'How does the writer treat her sources?', '/kɔ.mɑ̃ lo.tœʁ tʁɛt.tɛl se suʁs/', 'ko-mahⁿ loh-TUHR tret-TEL say SOORSS', ['question', 'posture']),
  sent(1813, 'Elle trie les catastrophes et laisse tout le reste à égalité.', 'It sorts out the disasters and leaves everything else level.', '/ɛl tʁi le ka.ta.stʁɔf e lɛs tu lə ʁɛst a e.ɡa.li.te/', 'el TREE lay ka-ta-STROF ay less too luh REST a ay-ga-lee-TAY', ['analogie', 'avis']),
];

/* ── ACT 2 · CONCÉDER POUR MIEUX RESTREINDRE ───────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1814, 'Rendez-nous une salle silencieuse', 'Give us back a quiet room', '/ʁɑ̃.de nu yn sal si.lɑ̃.sjøz/', 'rahⁿ-day-NOO ün SAL see-lahⁿ-SYEUZ', ['titre', 'bibliotheque']),
  sent(1815, 'Les bibliothèques ont changé, et c’est tant mieux.', 'Libraries have changed, and so much the better.', '/le bi.bli.jɔ.tɛk ɔ̃ ʃɑ̃.ʒe e sɛ tɑ̃ mjø/', 'lay bee-blee-yo-TEK ohⁿ shahⁿ-ZHAY ay seh tahⁿ MYEU', ['concession', 'bibliotheque']),
  sent(1816, 'On objectera que la bibliothèque doit suivre ses publics. C’est exact.', 'It will be objected that the library must follow its users. That is correct.', '/ɔ̃.nɔb.ʒɛk.tə.ʁa kə la bi.bli.jɔ.tɛk dwa sɥivʁ se py.blik sɛ.tɛɡ.zakt/', 'oh-nob-zhek-tuh-RA kuh la bee-blee-yo-TEK dwa sweevr say pü-BLEEK seh-teg-ZAKT', ['concession', 'bibliotheque'], FCVDR),
  sent(1817, 'Reste qu’un lieu qui accueille tout le monde finit par exclure certains.', 'The fact remains that a place that welcomes everyone ends up shutting some people out.', '/ʁɛst kœ̃ ljø ki a.kœj tu lə mɔ̃d fi.ni paʁ ɛks.klyʁ sɛʁ.tɛ̃/', 'rest kuhⁿ LYEU kee a-KUHY too luh MOHⁿD fee-nee par eks-klür sehr-TEHⁿ', ['restriction', 'bibliotheque'], FCVDR),
  sent(1818, 'Il accorde le constat et refuse la conclusion qu’on en tire.', 'He grants the observation and refuses the conclusion drawn from it.', '/i.la.kɔʁd lə kɔ̃s.ta e ʁə.fyz la kɔ̃.kly.zjɔ̃ kɔ̃.nɑ̃ tiʁ/', 'ee-la-KORD luh kohⁿs-TA ay ruh-FÜZ la kohⁿ-klü-ZYOHⁿ kohⁿ-nahⁿ TEER', ['analyse', 'restriction']),
  sent(1819, 'Que laisse debout la concession ?', 'What does the concession leave standing?', '/kə lɛs də.bu la kɔ̃.sɛ.sjɔ̃/', 'kuh less duh-BOO la kohⁿ-seh-SYOHⁿ', ['question', 'concession']),
  sent(1820, 'Ceux-là ne se plaignent pas. Ils cessent de venir.', 'Those people do not complain. They stop coming.', '/sø.la nə sə plɛɲ pa il sɛs də və.niʁ/', 'seu-LA nuh suh PLENY pa eel SESS duh vuh-NEER', ['bibliotheque']),
  sent(1821, 'Encore faudrait-il comparer ce coût à celui d’un public perdu.', 'Still, one would have to compare that cost with the cost of a lost public.', '/ɑ̃.kɔʁ fo.dʁɛ.til kɔ̃.pa.ʁe sə ku a sə.lɥi dœ̃ py.blik pɛʁ.dy/', 'ahⁿ-KOR foh-dreh-TEEL kohⁿ-pa-RAY suh KOO a suh-lwee duhⁿ pü-bleek pehr-DÜ', ['restriction', 'bibliotheque']),
  sent(1822, 'Sans doute la demande est-elle difficile à mesurer.', 'Demand is no doubt hard to measure.', '/sɑ̃ dut la də.mɑ̃d ɛ.tɛl di.fi.sil a mə.zy.ʁe/', 'sahⁿ DOOT la duh-MAHⁿD eh-TEL dee-fee-SEEL a muh-zü-RAY', ['concession', 'bibliotheque']),
  sent(1823, '« Sans doute » ne veut pas dire « sans aucun doute ».', '« Sans doute » does not mean « without any doubt ».', '/sɑ̃ dut nə vø pa diʁ sɑ̃.zo.kœ̃ dut/', 'sahⁿ DOOT nuh veu pa deer sahⁿ-zoh-kuhⁿ DOOT', ['concession', 'faux-ami']),
  phrase(1824, 'sans aucun doute', 'without any doubt, certainly', '/sɑ̃.zo.kœ̃ dut/', 'sahⁿ-zoh-kuhⁿ DOOT', ['certitude', 'faux-ami']),
  sent(1825, 'L’auteur ne rejette pas la nouvelle bibliothèque ; il en limite la portée.', 'The writer does not reject the new library; he limits how far it goes.', '/lo.tœʁ nə ʁə.ʒɛt pa la nu.vɛl bi.bli.jɔ.tɛk i.lɑ̃ li.mit la pɔʁ.te/', 'loh-TUHR nuh ruh-ZHET pa la noo-vel bee-blee-yo-TEK ee-lahⁿ lee-MEET la por-TAY', ['analyse', 'restriction']),
  sent(1826, 'Il concède que les budgets sont serrés, mais il en conteste la conséquence.', 'He concedes that budgets are tight, but disputes the consequence.', '/il kɔ̃.sɛd kə le byd.ʒɛ sɔ̃ se.ʁe mɛ.zi.lɑ̃ kɔ̃.tɛst la kɔ̃.se.kɑ̃s/', 'eel kohⁿ-SED kuh lay büd-ZHEH sohⁿ say-RAY meh-zee-lahⁿ kohⁿ-TEST la kohⁿ-say-KAHⁿSS', ['analyse', 'concession']),
  sent(1827, 'Ce qu’un auteur concède, il ne le retire pas.', 'What a writer concedes, he does not take back.', '/sə kœ̃.no.tœʁ kɔ̃.sɛd il nə lə ʁə.tiʁ pa/', 'suh kuhⁿ-noh-TUHR kohⁿ-SED eel nuh luh ruh-TEER PA', ['regle', 'concession'], FC,
    rule('« C’est exact. Reste que… » L’auteur rejette-t-il ce qu’il vient d’accorder ?', 'Non : il le garde, et il en limite la portée. Ce qu’un auteur concède, il ne le retire pas.')),
  sent(1828, 'Il serait absurde de regretter les salles où l’on n’osait pas chuchoter.', 'It would be absurd to miss the rooms where people did not dare whisper.', '/il sə.ʁɛ ap.syʁd də ʁə.ɡʁɛ.te le sal u lɔ̃ no.zɛ pa ʃy.ʃɔ.te/', 'eel suh-REH ap-SÜRD duh ruh-greh-TAY lay SAL oo lohⁿ noh-zeh pa shü-sho-TAY', ['concession', 'bibliotheque']),
  sent(1829, 'Je ne demande pas le retour de la bibliothèque d’autrefois.', 'I am not asking for the library of the past to come back.', '/ʒə nə də.mɑ̃d pa lə ʁə.tuʁ də la bi.bli.jɔ.tɛk do.tʁə.fwa/', 'zhuh nuh duh-mahⁿd pa luh ruh-TOOR duh la bee-blee-yo-tek doh-truh-FWA', ['portee', 'bibliotheque']),
  sent(1830, 'Toujours est-il que la salle était pleine en avril.', 'The fact remains that the room was full in April.', '/tu.ʒu.ʁɛ.til kə la sal e.tɛ plɛ.nɑ̃.na.vʁil/', 'too-zhoo-reh-TEEL kuh la SAL ay-teh pleh-nahⁿ-na-VREEL', ['restriction', 'bibliotheque']),
];

/* ── ACT 3 · LA PORTÉE EXACTE ───────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1831, 'Ce que l’écran fait à la lecture', 'What the screen does to reading', '/sə kə le.kʁɑ̃ fɛ a la lɛk.tyʁ/', 'suh kuh lay-KRAHⁿ feh a la lek-TÜR', ['titre', 'ecran']),
  sent(1832, 'C’est aller plus loin que l’étude.', 'That goes further than the study.', '/sɛ.ta.le ply lwɛ̃ kə le.tyd/', 'seh-ta-LAY plü LWEHⁿ kuh lay-TÜD', ['portee', 'ecran'], FCVDR),
  sent(1833, 'L’étude ne portait que sur des textes longs.', 'The study only covered long texts.', '/le.tyd nə pɔʁ.tɛ kə syʁ de tɛkst lɔ̃/', 'lay-TÜD nuh por-teh kuh sür day tekst LOHⁿ', ['portee', 'ecran']),
  sent(1834, 'L’écart disparaissait chez ceux qui faisaient un plan.', 'The gap disappeared among those who made an outline.', '/le.kaʁ dis.pa.ʁɛ.sɛ ʃe sø ki fə.zɛ.tœ̃ plɑ̃/', 'lay-KAR dees-pa-reh-SEH shay seu kee fuh-zeh-tuhⁿ PLAHⁿ', ['condition', 'ecran']),
  sent(1835, 'L’écran nous rend moins bons lecteurs.', 'The screen makes us worse readers.', '/le.kʁɑ̃ nu ʁɑ̃ mwɛ̃ bɔ̃ lɛk.tœʁ/', 'lay-KRAHⁿ noo rahⁿ mwehⁿ bohⁿ lek-TUHR', ['trop-fort', 'ecran']),
  sent(1836, 'Sur écran, on saisit moins bien la structure des textes longs.', 'On screen, people grasp the structure of long texts less well.', '/sy.ʁe.kʁɑ̃ ɔ̃ se.zi mwɛ̃ bjɛ̃ la stʁyk.tyʁ de tɛkst lɔ̃/', 'sü-ray-KRAHⁿ ohⁿ say-zee mwehⁿ BYEHⁿ la strük-TÜR day tekst LOHⁿ', ['exact', 'ecran'], FCVDR),
  sent(1837, 'L’écran a parfois un petit effet sur certains élèves.', 'The screen sometimes has a small effect on some pupils.', '/le.kʁɑ̃ a paʁ.fwa œ̃ pə.ti.tɛ.fɛ syʁ sɛʁ.tɛ̃.ze.lɛv/', 'lay-KRAHⁿ a par-FWA uhⁿ puh-tee-teh-FEH sür sehr-tehⁿ-zay-LEV', ['trop-faible', 'ecran']),
  sent(1838, 'Faut-il en conclure que l’écran est innocent ? Pas davantage.', 'Should we conclude that the screen is innocent? Not that either.', '/fo.ti.lɑ̃ kɔ̃.klyʁ kə le.kʁɑ̃ ɛ.ti.nɔ.sɑ̃ pa da.vɑ̃.taʒ/', 'foh-tee-lahⁿ kohⁿ-KLÜR kuh lay-krahⁿ eh-tee-no-SAHⁿ pa da-vahⁿ-TAZH', ['portee', 'ecran']),
  phrase(1839, 'la portée d’une conclusion', 'the scope of a conclusion', '/la pɔʁ.te dyn kɔ̃.kly.zjɔ̃/', 'la por-tay dün kohⁿ-klü-ZYOHⁿ', ['portee']),
  sent(1840, 'Cette reformulation va plus loin que le texte.', 'This rewording goes further than the text.', '/sɛt ʁə.fɔʁ.my.la.sjɔ̃ va ply lwɛ̃ kə lə tɛkst/', 'set ruh-for-mü-la-SYOHⁿ va plü LWEHⁿ kuh luh TEKST', ['analyse', 'portee']),
  sent(1841, 'Cette reformulation reste en deçà du texte.', 'This rewording falls short of the text.', '/sɛt ʁə.fɔʁ.my.la.sjɔ̃ ʁɛs.tɑ̃ də.sa dy tɛkst/', 'set ruh-for-mü-la-SYOHⁿ res-tahⁿ duh-SA dü TEKST', ['analyse', 'portee']),
  sent(1842, 'Une bonne reformulation n’ajoute rien et n’enlève rien.', 'A good rewording adds nothing and takes nothing away.', '/yn bɔn ʁə.fɔʁ.my.la.sjɔ̃ na.ʒut ʁjɛ̃ e nɑ̃.lɛv ʁjɛ̃/', 'ün bonn ruh-for-mü-la-SYOHⁿ na-ZHOOT RYEHⁿ ay nahⁿ-LEV RYEHⁿ', ['regle', 'portee'], FC,
    rule('Deux reformulations te tentent : l’une plus forte, l’autre plus prudente que le texte. Laquelle choisis-tu ?', 'Aucune des deux : la bonne garde la condition, le nombre et la force du texte. Une bonne reformulation n’ajoute rien et n’enlève rien.')),
  sent(1843, 'Tous les élèves n’ont pas réussi.', 'Not all the pupils succeeded.', '/tu le.ze.lɛv nɔ̃ pa ʁe.y.si/', 'too lay-zay-LEV nohⁿ pa ray-ü-SEE', ['negation', 'portee']),
  sent(1844, 'L’écran ne gêne pas toujours.', 'The screen does not always get in the way.', '/le.kʁɑ̃ nə ʒɛn pa tu.ʒuʁ/', 'lay-KRAHⁿ nuh ZHENN pa too-ZHOOR', ['negation', 'portee']),
  sent(1845, 'Le problème n’est pas seulement la longueur.', 'The problem is not only the length.', '/lə pʁɔ.blɛm nɛ pa sœl.mɑ̃ la lɔ̃.ɡœʁ/', 'luh pro-BLEM neh pa suhl-MAHⁿ la lohⁿ-GUHR', ['negation', 'portee']),
  sent(1846, 'Elle critique non pas l’écran, mais la façon de lire.', 'She criticises not the screen, but the way of reading.', '/ɛl kʁi.tik nɔ̃ pa le.kʁɑ̃ mɛ la fa.sɔ̃ də liʁ/', 'el kree-TEEK nohⁿ pa lay-KRAHⁿ meh la fa-sohⁿ duh LEER', ['negation', 'portee']),
  sent(1847, 'L’étude parle moins de la lecture que de la structure.', 'The study is less about reading than about structure.', '/le.tyd paʁl mwɛ̃ də la lɛk.tyʁ kə də la stʁyk.tyʁ/', 'lay-TÜD parl mwehⁿ duh la lek-TÜR kuh duh la strük-TÜR', ['portee']),
  sent(1848, 'La conclusion garde sa condition : sauf si l’on fait un plan.', 'The conclusion keeps its condition: unless one makes an outline.', '/la kɔ̃.kly.zjɔ̃ ɡaʁd sa kɔ̃.di.sjɔ̃ sof si lɔ̃ fɛ œ̃ plɑ̃/', 'la kohⁿ-klü-ZYOHⁿ gard sa kohⁿ-dee-SYOHⁿ sohf see lohⁿ feh uhⁿ PLAHⁿ', ['analyse', 'condition']),
  sent(1849, 'Les utilisateurs réguliers d’une application de méditation se disent moins stressés, du moins les deux premiers mois.', 'Regular users of a meditation app say they are less stressed, at least for the first two months.', '/le.zy.ti.li.za.tœʁ ʁe.ɡy.lje dy.na.pli.ka.sjɔ̃ də me.di.ta.sjɔ̃ sə diz mwɛ̃ stʁɛ.se dy mwɛ̃ le dø pʁə.mje mwa/', 'lay-zü-tee-lee-za-tuhr ray-gü-LYAY dü-na-plee-ka-SYOHⁿ duh may-dee-ta-SYOHⁿ suh deez mwehⁿ streh-SAY dü MWEHⁿ lay deu pruh-myay MWA', ['source', 'portee']),
  sent(1850, 'Les applications de méditation font disparaître le stress.', 'Meditation apps make stress disappear.', '/le.za.pli.ka.sjɔ̃ də me.di.ta.sjɔ̃ fɔ̃ dis.pa.ʁɛtʁ lə stʁɛs/', 'lay-za-plee-ka-SYOHⁿ duh may-dee-ta-SYOHⁿ fohⁿ dees-pa-RETR luh STRESS', ['trop-fort']),
  sent(1851, 'Les utilisateurs réguliers se disent moins stressés, au moins au début.', 'Regular users say they are less stressed, at least at first.', '/le.zy.ti.li.za.tœʁ ʁe.ɡy.lje sə diz mwɛ̃ stʁɛ.se o mwɛ̃ o de.by/', 'lay-zü-tee-lee-za-tuhr ray-gü-LYAY suh deez mwehⁿ streh-SAY oh MWEHⁿ oh day-BÜ', ['exact']),
  sent(1852, 'Certaines personnes aiment méditer avec leur téléphone.', 'Some people like meditating with their phone.', '/sɛʁ.tɛn pɛʁ.sɔn ɛm me.di.te a.vɛk lœʁ te.le.fɔn/', 'sehr-TENN pehr-SONN em may-dee-TAY a-vek luhr tay-lay-FONN', ['trop-faible']),
  sent(1853, 'La plupart des communes qui ont réduit l’éclairage nocturne n’ont pas constaté plus de cambriolages.', 'Most towns that cut their night lighting saw no rise in burglaries.', '/la ply.paʁ de kɔ.myn ki ɔ̃ ʁe.dɥi le.klɛ.ʁaʒ nɔk.tyʁn nɔ̃ pa kɔ̃s.ta.te plys də kɑ̃.bʁi.jɔ.laʒ/', 'la plü-PAR day ko-MÜNN kee ohⁿ ray-DWEE lay-kleh-razh nok-TÜRN nohⁿ pa kohⁿs-ta-TAY plüss duh kahⁿ-bree-yo-LAZH', ['source', 'portee']),
  sent(1854, 'Éteindre les lampadaires fait baisser les cambriolages.', 'Switching off street lights brings burglaries down.', '/e.tɛ̃dʁ le lɑ̃.pa.dɛʁ fɛ be.se le kɑ̃.bʁi.jɔ.laʒ/', 'ay-TEHⁿDR lay lahⁿ-pa-DEHR feh beh-SAY lay kahⁿ-bree-yo-LAZH', ['trop-fort']),
  sent(1855, 'Dans la plupart des communes, éteindre la nuit n’a pas fait monter les cambriolages.', 'In most towns, switching off at night did not push burglaries up.', '/dɑ̃ la ply.paʁ de kɔ.myn e.tɛ̃dʁ la nɥi na pa fɛ mɔ̃.te le kɑ̃.bʁi.jɔ.laʒ/', 'dahⁿ la plü-par day ko-MÜNN ay-tehⁿdr la NWEE na pa feh mohⁿ-tay lay kahⁿ-bree-yo-LAZH', ['exact']),
  sent(1856, 'Quelques communes ont essayé d’éteindre la nuit.', 'A few towns have tried switching off at night.', '/kɛl.kə kɔ.myn ɔ̃.te.se.je de.tɛ̃dʁ la nɥi/', 'kel-kuh ko-MÜNN ohⁿ-tay-seh-YAY day-tehⁿdr la NWEE', ['trop-faible']),
];

/* ── ACT 4 · LE VRAI DÉSACCORD ─────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1857, 'La querelle des pelouses', 'The lawn quarrel', '/la kə.ʁɛl de pə.luz/', 'la kuh-REL day puh-LOOZ', ['titre', 'pelouse']),
  sent(1858, 'On croit savoir à quel sujet on se dispute.', 'People think they know what they are arguing about.', '/ɔ̃ kʁwa sa.vwaʁ a kɛl sy.ʒɛ ɔ̃ sə dis.pyt/', 'ohⁿ krwa sa-VWAR a kel sü-ZHEH ohⁿ suh dees-PÜT', ['objet', 'pelouse']),
  sent(1859, 'Le débat est pourtant mal décrit.', 'Yet the debate is wrongly described.', '/lə de.ba ɛ puʁ.tɑ̃ mal de.kʁi/', 'luh day-BA eh poor-TAHⁿ mal day-KREE', ['objet', 'pelouse']),
  sent(1860, 'Les deux camps s’accordent sur presque tous les faits.', 'The two sides agree on almost all the facts.', '/le dø kɑ̃ sa.kɔʁd syʁ pʁɛsk tu le fɛ/', 'lay deu KAHⁿ sa-KORD sür presk too lay FEH', ['faits', 'pelouse'], FCVDR),
  sent(1861, 'La querelle porte en réalité sur ce qu’un jardin dit de celui qui l’entretient.', 'The quarrel is really about what a garden says about the person who keeps it.', '/la kə.ʁɛl pɔʁ.tɑ̃ ʁe.a.li.te syʁ sə kœ̃ ʒaʁ.dɛ̃ di də sə.lɥi ki lɑ̃.tʁə.tjɛ̃/', 'la kuh-REL por-tahⁿ ray-a-lee-TAY sür suh kuhⁿ zhar-DEHⁿ dee duh suh-LWEE kee lahⁿ-truh-TYEHⁿ', ['objet', 'pelouse']),
  sent(1862, 'Ils ne donnent pas le même sens au mot « soigné ».', 'They do not give the word « tidy » the same meaning.', '/il nə dɔn pa lə mɛm sɑ̃s o mo swa.ɲe/', 'eel nuh DONN pa luh mem SAHⁿSS oh MOH swa-NYAY', ['mot', 'pelouse']),
  sent(1863, 'On répond « abeilles » à quelqu’un qui parle de respect.', 'People answer « bees » to someone who is talking about respect.', '/ɔ̃ ʁe.pɔ̃ a.bɛj a kɛl.kœ̃ ki paʁl də ʁɛs.pɛ/', 'ohⁿ ray-POHⁿ a-BEY a kel-KUHⁿ kee parl duh res-PEH', ['valeur', 'pelouse']),
  sent(1864, 'Chacun gagne sur son terrain et ne met jamais le pied sur celui de l’autre.', 'Each side wins on its own ground and never sets foot on the other’s.', '/ʃa.kœ̃ ɡaɲ syʁ sɔ̃ tɛ.ʁɛ̃ e nə mɛ ʒa.mɛ lə pje syʁ sə.lɥi də lotʁ/', 'sha-KUHⁿ GANY sür sohⁿ teh-REHⁿ ay nuh meh zha-meh luh PYAY sür suh-lwee duh LOHTR', ['analogie', 'pelouse']),
  sent(1865, 'Le vrai débat n’est pas celui qu’on croit.', 'The real debate is not the one people think.', '/lə vʁɛ de.ba nɛ pa sə.lɥi kɔ̃ kʁwa/', 'luh vreh day-BA neh pa suh-lwee kohⁿ KRWA', ['objet', 'analyse']),
  sent(1866, 'Si l’on s’accorde sur les faits, le désaccord est ailleurs.', 'If people agree on the facts, the disagreement lies elsewhere.', '/si lɔ̃ sa.kɔʁd syʁ le fɛ lə de.za.kɔʁ ɛ.ta.jœʁ/', 'see lohⁿ sa-KORD sür lay FEH luh day-za-KOR eh-ta-YUHR', ['regle', 'objet'], FC,
    rule('Deux voisins citent les mêmes chiffres et se disputent encore. Sur quoi ?', 'Pas sur les faits : ils les partagent. Sur une valeur, un mot ou qui décide. Si l’on s’accorde sur les faits, le désaccord est ailleurs.')),
  phrase(1867, 'l’objet réel du désaccord', 'the real object of the disagreement', '/lɔb.ʒɛ ʁe.ɛl dy de.za.kɔʁ/', 'lob-zheh ray-EL dü day-za-KOR', ['objet']),
  sent(1868, 'Ils sont d’accord sur les chiffres, pas sur ce qu’ils valent.', 'They agree on the figures, not on what they are worth.', '/il sɔ̃ da.kɔʁ syʁ le ʃifʁ pa syʁ sə kil val/', 'eel sohⁿ da-KOR sür lay SHEEFR pa sür suh keel VAL', ['valeur', 'analyse']),
  sent(1869, 'Pour lui, « tôt » veut dire avant sept heures ; pour elle, avant neuf.', 'For him « early » means before seven; for her, before nine.', '/puʁ lɥi to vø diʁ a.vɑ̃ sɛ.tœʁ puʁ ɛl a.vɑ̃ nœf/', 'poor LWEE TOH veu deer a-vahⁿ seh-TUHR poor EL a-vahⁿ NUHF', ['mot']),
  sent(1870, 'Tous deux veulent un parc ; ils ne sont pas d’accord sur qui doit le choisir.', 'Both want a park; they disagree about who should choose it.', '/tu dø vœl œ̃ paʁk il nə sɔ̃ pa da.kɔʁ syʁ ki dwa lə ʃwa.ziʁ/', 'too DEU vuhl uhⁿ PARK eel nuh sohⁿ pa da-KOR sür kee dwa luh shwa-ZEER', ['decision']),
  sent(1871, 'Elle dit que le loyer a augmenté de 8 % ; il dit que c’est 3 %.', 'She says the rent went up by 8%; he says it is 3%.', '/ɛl di kə lə lwa.je a oɡ.mɑ̃.te də ɥi puʁ sɑ̃ il di kə sɛ tʁwa puʁ sɑ̃/', 'el dee kuh luh lwa-YAY a og-mahⁿ-TAY duh WEE poor SAHⁿ eel dee kuh seh TRWA poor SAHⁿ', ['faits']),
  sent(1872, 'Ce matin, un débat sur les terrasses chauffées du quartier.', 'This morning, a debate about the neighbourhood’s heated terraces.', '/sə ma.tɛ̃ œ̃ de.ba syʁ le te.ʁas ʃo.fe dy kaʁ.tje/', 'suh ma-TEHⁿ uhⁿ day-BA sür lay teh-RASS shoh-FAY dü kar-TYAY', ['radio', 'terrasse']),
  sent(1873, 'Un chauffage de terrasse consomme beaucoup, on le sait tous.', 'A terrace heater uses a lot of energy, we all know that.', '/œ̃ ʃo.faʒ də te.ʁas kɔ̃.sɔm bo.ku ɔ̃ lə sɛ tus/', 'uhⁿ shoh-FAZH duh teh-RASS kohⁿ-SOMM boh-KOO ohⁿ luh seh TOOSS', ['radio', 'terrasse']),
  sent(1874, 'Je ne le conteste pas, mais sans lui, je ferme en novembre.', 'I do not dispute it, but without it I close in November.', '/ʒə nə lə kɔ̃.tɛst pa mɛ sɑ̃ lɥi ʒə fɛʁ.mɑ̃ nɔ.vɑ̃bʁ/', 'zhuh nuh luh kohⁿ-TEST PA meh sahⁿ LWEE zhuh fehr-mahⁿ no-VAHⁿBR', ['radio', 'terrasse']),
  sent(1875, 'Et pendant ce temps, le trottoir n’est plus à personne.', 'And meanwhile the pavement belongs to nobody any more.', '/e pɑ̃.dɑ̃ sə tɑ̃ lə tʁɔ.twaʁ nɛ ply.za pɛʁ.sɔn/', 'ay pahⁿ-dahⁿ suh TAHⁿ luh tro-TWAR neh plü-za pehr-SONN', ['radio', 'terrasse']),
  sent(1876, 'Le trottoir ? Il est à mes clients jusqu’à vingt-deux heures.', 'The pavement? It belongs to my customers until ten p.m.', '/lə tʁɔ.twaʁ i.lɛ.ta me kli.jɑ̃ ʒys.ka vɛ̃t.dø.zœʁ/', 'luh tro-TWAR ee-leh-ta may klee-YAHⁿ zhüs-ka vehⁿt-deu-ZUHR', ['radio', 'terrasse']),
  sent(1877, 'Vous parlez d’énergie, mais c’est la place qui vous gêne.', 'You talk about energy, but it is the space that bothers you.', '/vu paʁ.le de.nɛʁ.ʒi mɛ sɛ la plas ki vu ʒɛn/', 'voo par-lay day-nehr-ZHEE meh seh la PLASS kee voo ZHENN', ['radio', 'terrasse']),
  sent(1878, 'Peut-être. Mais ma poussette, elle, passe dans la rue.', 'Maybe. But my pushchair has to go in the street.', '/pø.tɛtʁ mɛ ma pu.sɛt ɛl pas dɑ̃ la ʁy/', 'peu-TETR meh ma poo-SET EL pass dahⁿ la RÜ', ['radio', 'terrasse']),
  sent(1879, 'Voilà le vrai sujet : à qui appartient le trottoir l’hiver.', 'There is the real issue: who the pavement belongs to in winter.', '/vwa.la lə vʁɛ sy.ʒɛ a ki a.paʁ.tjɛ̃ lə tʁɔ.twaʁ li.vɛʁ/', 'vwa-LA luh vreh sü-ZHEH a kee a-par-TYEHⁿ luh tro-twar lee-VEHR', ['radio', 'terrasse']),
];

/* ── ACT 5 · CE QUE FAIT UN PARAGRAPHE ─────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1880, 'Que fait l’auteur dans le paragraphe qui commence par « Un mois et une salle » ?', 'What is the writer doing in the paragraph that begins « One month and one room »?', '/kə fɛ lo.tœʁ dɑ̃ lə pa.ʁa.ɡʁaf ki kɔ.mɑ̃s paʁ œ̃ mwa e yn sal/', 'kuh feh loh-TUHR dahⁿ luh pa-ra-GRAF kee ko-MAHⁿSS par uhⁿ MWA ay ün SAL', ['question', 'examen']),
  sent(1881, 'Le cartel ou le regard', 'The label or the gaze', '/lə kaʁ.tɛl u lə ʁə.ɡaʁ/', 'luh kar-TEL oo luh ruh-GAR', ['titre', 'musee']),
  sent(1882, 'Il délimite l’objet : ce qu’on reproche, en réalité, c’est le cartel lu à la place du tableau.', 'He narrows the object: what is really criticised is the label read instead of the painting.', '/il de.li.mit lɔb.ʒɛ sə kɔ̃ ʁə.pʁɔʃ ɑ̃ ʁe.a.li.te sɛ lə kaʁ.tɛl ly a la plas dy ta.blo/', 'eel day-lee-MEET lob-ZHEH suh kohⁿ ruh-PROSH ahⁿ ray-a-lee-TAY seh luh kar-TEL lü a la plass dü ta-BLOH', ['fonction', 'musee']),
  sent(1883, 'Il se fait une objection, puis il en limite la portée.', 'He raises an objection against himself, then limits its scope.', '/il sə fɛ.ty.nɔb.ʒɛk.sjɔ̃ pɥi.zi.lɑ̃ li.mit la pɔʁ.te/', 'eel suh feh-tü-nob-zhek-SYOHⁿ pwee-zee-lahⁿ lee-MEET la por-TAY', ['fonction'], FCVDR),
  sent(1884, 'Il illustre la thèse par une expérience.', 'He illustrates the thesis with a trial.', '/i.li.lystʁ la tɛz paʁ y.nɛks.pe.ʁjɑ̃s/', 'ee-lee-LÜSTR la TEZ par ü-nex-pay-RYAHⁿSS', ['fonction']),
  sent(1885, 'Il écarte un contresens : il ne s’agit pas de supprimer les explications.', 'He rules out a misreading: the point is not to remove the explanations.', '/i.le.kaʁt œ̃ kɔ̃.tʁə.sɑ̃s il nə sa.ʒi pa də sy.pʁi.me le.zɛks.pli.ka.sjɔ̃/', 'ee-lay-KART uhⁿ kohⁿ-truh-SAHⁿSS eel nuh sa-zhee pa duh sü-pree-may lay-zex-plee-ka-SYOHⁿ', ['fonction', 'musee']),
  sent(1886, 'Il élargit la question au-delà des musées.', 'He widens the question beyond museums.', '/i.le.laʁ.ʒi la kɛs.tjɔ̃ o.də.la de my.ze/', 'ee-lay-lar-ZHEE la kes-TYOHⁿ oh-duh-la day mü-ZAY', ['fonction']),
  sent(1887, 'Il pose le constat de départ.', 'He sets out the starting observation.', '/il poz lə kɔ̃s.ta də de.paʁ/', 'eel pohz luh kohⁿs-TA duh day-PAR', ['fonction']),
  sent(1888, 'Le contenu dit de quoi parle le paragraphe ; la fonction dit à quoi il sert.', 'The content says what the paragraph is about; the function says what it is for.', '/lə kɔ̃t.ny di də kwa paʁl lə pa.ʁa.ɡʁaf la fɔ̃k.sjɔ̃ di a kwa il sɛʁ/', 'luh kohⁿt-NÜ dee duh kwa parl luh pa-ra-GRAF la fohⁿk-SYOHⁿ dee a kwa eel SEHR', ['regle', 'fonction'], FC,
    rule('On te demande ce que fait un paragraphe. Tu réponds « il parle des visiteurs ». Qu’est-ce qui manque ?', 'Le rôle : il illustre, il objecte, il limite. Le contenu dit de quoi parle le paragraphe ; la fonction dit à quoi il sert.')),
  sent(1889, 'L’explication qui vient après le regard le prolonge ; celle qui vient avant le remplace.', 'The explanation that comes after looking extends it; the one that comes before replaces it.', '/lɛks.pli.ka.sjɔ̃ ki vjɛ̃ a.pʁɛ lə ʁə.ɡaʁ lə pʁɔ.lɔ̃ʒ sɛl ki vjɛ̃ a.vɑ̃ lə ʁɑ̃.plas/', 'lex-plee-ka-SYOHⁿ kee vyehⁿ a-preh luh ruh-GAR luh pro-LOHⁿZH sel kee vyehⁿ a-VAHⁿ luh rahⁿ-PLASS', ['these', 'musee']),
  sent(1890, 'On nous apprend à reconnaître plutôt qu’à voir.', 'We are taught to recognise rather than to see.', '/ɔ̃ nu.za.pʁɑ̃ a ʁə.kɔ.nɛtʁ ply.to ka vwaʁ/', 'ohⁿ noo-za-PRAHⁿ a ruh-ko-NETR plü-TOH ka VWAR', ['chute', 'musee']),
  sent(1891, 'Prenons un cas : à Corvelle, les cartels ont été déplacés à la sortie.', 'Take one case: in Corvelle, the labels were moved to the exit.', '/pʁə.nɔ̃ œ̃ ka a kɔʁ.vɛl le kaʁ.tɛl ɔ̃.te.te de.pla.se a la sɔʁ.ti/', 'pruh-nohⁿ uhⁿ KA a kor-VEL lay kar-TEL ohⁿ-tay-tay day-pla-SAY a la sor-TEE', ['illustrer', 'musee']),
  sent(1892, 'Qu’on ne s’y trompe pas : je ne défends pas l’ignorance.', 'Make no mistake: I am not defending ignorance.', '/kɔ̃ nə si tʁɔ̃p pa ʒə nə de.fɑ̃ pa li.ɲɔ.ʁɑ̃s/', 'kohⁿ nuh see TROHⁿP PA zhuh nuh day-fahⁿ pa lee-nyo-RAHⁿSS', ['contresens']),
  sent(1893, 'La question dépasse d’ailleurs les musées.', 'The question in fact goes beyond museums.', '/la kɛs.tjɔ̃ de.pas da.jœʁ le my.ze/', 'la kes-TYOHⁿ day-PASS da-YUHR lay mü-ZAY', ['elargir', 'musee']),
  sent(1894, 'Encore faut-il s’entendre sur ce que l’on reproche.', 'Still, we need to agree on what exactly is being criticised.', '/ɑ̃.kɔʁ fo.til sɑ̃.tɑ̃dʁ syʁ sə kə lɔ̃ ʁə.pʁɔʃ/', 'ahⁿ-KOR foh-TEEL sahⁿ-TAHⁿDR sür suh kuh lohⁿ ruh-PROSH', ['delimiter', 'musee']),
  sent(1895, 'Je l’accorde sans peine. L’essentiel n’en sort pas entamé.', 'I readily grant it. The essential point comes out of it intact.', '/ʒə la.kɔʁd sɑ̃ pɛn le.sɑ̃.sjɛl nɑ̃ sɔʁ pa.zɑ̃.ta.me/', 'zhuh la-KORD sahⁿ PENN lay-sahⁿ-SYEL nahⁿ sor pa-zahⁿ-ta-MAY', ['objection', 'musee'], FCVDR),
];

/* ── ACT 6 · L’ANALOGIE ET LA CHUTE ────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1896, 'La sonnette de poche', 'The pocket doorbell', '/la sɔ.nɛt də pɔʃ/', 'la so-NET duh POSH', ['titre', 'notification']),
  sent(1897, 'Une lettre attend qu’on l’ouvre.', 'A letter waits to be opened.', '/yn lɛ.tʁa.tɑ̃ kɔ̃ luvʁ/', 'ün leh-tra-TAHⁿ kohⁿ LOOVR', ['analogie', 'notification']),
  sent(1898, 'Une sonnette ne transmet rien : elle exige qu’on se lève.', 'A doorbell conveys nothing: it demands that you get up.', '/yn sɔ.nɛt nə tʁɑ̃s.mɛ ʁjɛ̃ ɛ.lɛɡ.ziʒ kɔ̃ sə lɛv/', 'ün so-NET nuh trahⁿs-meh RYEHⁿ eh-leg-ZEEZH kohⁿ suh LEV', ['analogie', 'notification'], FCVDR),
  sent(1899, 'Elles interrompent d’abord ; elles informent ensuite, quand elles informent.', 'They interrupt first; they inform afterwards, when they inform at all.', '/ɛl.zɛ̃.tɛ.ʁɔ̃p da.bɔʁ ɛl.zɛ̃.fɔʁm ɑ̃.sɥit kɑ̃.tɛl.zɛ̃.fɔʁm/', 'el-zehⁿ-teh-ROHⁿP da-BOR el-zehⁿ-FORM ahⁿ-SWEET kahⁿ-tel-zehⁿ-FORM', ['these', 'notification']),
  sent(1900, 'L’image a ses limites, et il faut les dire.', 'The image has its limits, and they must be stated.', '/li.ma.ʒa se li.mit e il fo le diʁ/', 'lee-ma-ZHA say lee-MEET ay eel foh lay DEER', ['analogie', 'notification']),
  sent(1901, 'Nous avons surtout obtenu des visiteurs qui ne disent pas leur nom.', 'What we mostly got is visitors who do not give their name.', '/nu.za.vɔ̃ syʁ.tu ɔp.tə.ny de vi.zi.tœʁ ki nə diz pa lœʁ nɔ̃/', 'noo-za-vohⁿ sür-TOO op-tuh-NÜ day vee-zee-TUHR kee nuh deez pa luhr NOHⁿ', ['chute', 'notification']),
  sent(1902, 'Que fait la dernière phrase ?', 'What does the last sentence do?', '/kə fɛ la dɛʁ.njɛʁ fʁaz/', 'kuh feh la dehr-nyehr FRAHZ', ['question', 'chute']),
  sent(1903, 'Un CV ressemble moins à un portrait qu’à une vitrine.', 'A CV is less like a portrait than like a shop window.', '/œ̃ se.ve ʁə.sɑ̃bl mwɛ̃.za œ̃ pɔʁ.tʁɛ ka yn vi.tʁin/', 'uhⁿ say-VAY ruh-SAHⁿBL mwehⁿ-za uhⁿ por-TREH ka ün vee-TREENN', ['analogie']),
  sent(1904, 'Former sans évaluer, c’est cuisiner sans goûter.', 'Training without assessing is cooking without tasting.', '/fɔʁ.me sɑ̃.ze.va.lɥe sɛ kɥi.zi.ne sɑ̃ ɡu.te/', 'for-MAY sahⁿ-zay-va-LWAY seh kwee-zee-NAY sahⁿ goo-TAY', ['analogie']),
  sent(1905, 'Une réunion sans ordre du jour est un voyage sans carte.', 'A meeting without an agenda is a journey without a map.', '/yn ʁe.y.njɔ̃ sɑ̃.zɔʁ.dʁə dy ʒuʁ ɛ.tœ̃ vwa.jaʒ sɑ̃ kaʁt/', 'ün ray-ü-NYOHⁿ sahⁿ-zor-druh dü ZHOOR eh-tuhⁿ vwa-YAZH sahⁿ KART', ['analogie']),
  sent(1906, 'Une analogie compare un trait, jamais tout.', 'An analogy compares one feature, never everything.', '/y.na.na.lɔ.ʒi kɔ̃.paʁ œ̃ tʁɛ ʒa.mɛ tu/', 'ü-na-na-lo-ZHEE kohⁿ-PAR uhⁿ TREH zha-meh TOO', ['regle', 'analogie'], FC,
    rule('« Une notification est une sonnette. » Le téléphone sonne-t-il vraiment à ta porte ?', 'Non : l’image ne garde qu’un trait, interrompre sans rien dire. Une analogie compare un trait, jamais tout.')),
  sent(1907, 'Le point commun, c’est l’interruption, pas le bruit.', 'What they share is the interruption, not the noise.', '/lə pwɛ̃ kɔ.mœ̃ sɛ lɛ̃.tɛ.ʁyp.sjɔ̃ pa lə bʁɥi/', 'luh pwehⁿ ko-MUHⁿ seh lehⁿ-teh-rüp-SYOHⁿ pa luh BRWEE', ['analyse', 'analogie'], FCVDR),
  sent(1908, 'L’auteur retourne la limite de son image en argument.', 'The writer turns the limit of his image into an argument.', '/lo.tœʁ ʁə.tuʁn la li.mit də sɔ̃.ni.maʒ ɑ̃.naʁ.ɡy.mɑ̃/', 'loh-TUHR ruh-toorn la lee-MEET duh sohⁿ-nee-MAZH ahⁿ-nar-gü-MAHⁿ', ['analyse', 'analogie']),
  sent(1909, 'La chute reprend la promesse du début pour la retourner.', 'The closing line takes up the opening promise to turn it around.', '/la ʃyt ʁə.pʁɑ̃ la pʁɔ.mɛs dy de.by puʁ la ʁə.tuʁ.ne/', 'la SHÜT ruh-prahⁿ la pro-MESS dü day-BÜ poor la ruh-toor-NAY', ['analyse', 'chute']),
  sent(1910, 'Bref, tout le monde a été consulté, sauf ceux qui prennent le bus.', 'In short, everyone was consulted, except the people who take the bus.', '/bʁɛf tu lə mɔ̃d a e.te kɔ̃.syl.te sof sø ki pʁɛn lə bys/', 'BREF too luh MOHⁿD a ay-tay kohⁿ-sül-TAY sohf seu kee PRENN luh BÜSS', ['chute']),
  sent(1911, 'Reste à savoir qui, demain, acceptera de le payer.', 'It remains to be seen who, tomorrow, will agree to pay for it.', '/ʁɛst a sa.vwaʁ ki də.mɛ̃ ak.sɛp.tə.ʁa də lə pɛ.je/', 'rest a sa-VWAR KEE duh-MEHⁿ ak-sep-tuh-RA duh luh peh-YAY', ['chute']),
  sent(1912, 'C’est ainsi qu’un service devient une habitude, et une habitude, un besoin.', 'That is how a service becomes a habit, and a habit, a need.', '/sɛ.tɛ̃.si kœ̃ sɛʁ.vis də.vjɛ̃ y.na.bi.tyd e y.na.bi.tyd œ̃ bə.zwɛ̃/', 'seh-tehⁿ-SEE kuhⁿ sehr-VEESS duh-vyehⁿ ü-na-bee-TÜD ay ü-na-bee-TÜD uhⁿ buh-ZWEHⁿ', ['chute']),
];

/* ── ACT 7 · L’AUTEUR FACE À SES SOURCES ───────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1913, 'Les devoirs et ce qu’on leur fait dire', 'Homework and what people make it say', '/le də.vwaʁ e sə kɔ̃ lœʁ fɛ diʁ/', 'lay duh-VWAR ay suh kohⁿ luhr feh DEER', ['titre', 'devoirs']),
  sent(1914, 'La synthèse dit en réalité autre chose.', 'The review actually says something else.', '/la sɛ̃.tɛz di.tɑ̃ ʁe.a.li.te otʁ ʃoz/', 'la sehⁿ-TEZ dee-tahⁿ ray-a-lee-TAY ohtr SHOHZ', ['posture', 'devoirs'], FCVDR),
  sent(1915, 'Ses auteurs ont raison de s’attaquer au mythe de la quantité ; on a tort de leur faire condamner toute pratique.', 'Its authors are right to take on the myth of quantity; people are wrong to make them condemn all practice.', '/se.zo.tœʁ ɔ̃ ʁɛ.zɔ̃ də sa.ta.ke o mit də la kɑ̃.ti.te ɔ̃.na tɔʁ də lœʁ fɛʁ kɔ̃.da.ne tut pʁa.tik/', 'say-zoh-tuhr ohⁿ reh-ZOHⁿ duh sa-ta-KAY oh MEET duh la kahⁿ-tee-TAY oh-na TOR duh luhr fehr kohⁿ-da-NAY toot pra-TEEK', ['posture', 'devoirs']),
  sent(1916, 'L’argument est sérieux, et je le partage en partie.', 'The argument is serious, and I partly share it.', '/laʁ.ɡy.mɑ̃ ɛ se.ʁjø e ʒə lə paʁ.taʒ ɑ̃ paʁ.ti/', 'lar-gü-MAHⁿ eh say-RYEU ay zhuh luh par-TAZH ahⁿ par-TEE', ['posture', 'devoirs']),
  sent(1917, 'Mais il plaide pour des devoirs faits à l’école, plutôt que pour leur disparition.', 'But it argues for homework done at school, rather than for its disappearance.', '/mɛ il plɛd puʁ de də.vwaʁ fɛ a le.kɔl ply.to kə puʁ lœʁ dis.pa.ʁi.sjɔ̃/', 'meh eel PLED poor day duh-VWAR feh a lay-KOL plü-toh kuh poor luhr dees-pa-ree-SYOHⁿ', ['posture', 'devoirs']),
  sent(1918, 'Même les défenseurs les plus fervents des devoirs le reconnaissent.', 'Even the most ardent defenders of homework admit it.', '/mɛm le de.fɑ̃.sœʁ le ply fɛʁ.vɑ̃ de də.vwaʁ lə ʁə.kɔ.nɛs/', 'mem lay day-fahⁿ-SUHR lay plü fehr-VAHⁿ day duh-VWAR luh ruh-ko-NESS', ['posture', 'devoirs']),
  sent(1919, 'C’est aller un peu vite.', 'That is jumping to conclusions.', '/sɛ.ta.le œ̃ pø vit/', 'seh-ta-LAY uhⁿ peu VEET', ['posture']),
  sent(1920, 'Comme le montre la synthèse, la durée ne compte pas.', 'As the review shows, the length of time does not matter.', '/kɔm lə mɔ̃tʁ la sɛ̃.tɛz la dy.ʁe nə kɔ̃t pa/', 'kom luh MOHⁿTR la sehⁿ-TEZ la dü-RAY nuh kohⁿt PA', ['posture', 'devoirs']),
  sent(1921, 'Une synthèse citée de travers ne permet pas d’y répondre.', 'A misquoted review does not allow us to answer it.', '/yn sɛ̃.tɛz si.te də tʁa.vɛʁ nə pɛʁ.mɛ pa di ʁe.pɔ̃dʁ/', 'ün sehⁿ-TEZ see-tay duh tra-VEHR nuh pehr-meh pa dee ray-POHⁿDR', ['chute', 'devoirs']),
  sent(1922, 'Une étude affirme que travailler debout allonge la vie.', 'A study claims that working standing up lengthens life.', '/y.ne.tyd a.fiʁm kə tʁa.va.je də.bu a.lɔ̃ʒ la vi/', 'ü-nay-TÜD a-FEERM kuh tra-va-yay duh-BOO a-LOHⁿZH la VEE', ['radio', 'debout']),
  sent(1923, 'C’est du moins ce qu’on a pu lire un peu partout cette semaine.', 'At least, that is what could be read almost everywhere this week.', '/sɛ dy mwɛ̃ sə kɔ̃.na py liʁ œ̃ pø paʁ.tu sɛt sə.mɛn/', 'seh dü MWEHⁿ suh kohⁿ-na pü LEER uhⁿ peu par-TOO set suh-MENN', ['radio', 'debout']),
  sent(1924, 'Or l’étude ne mesure pas la durée de vie, mais la fatigue en fin de journée.', 'Yet the study does not measure life expectancy, but tiredness at the end of the day.', '/ɔʁ le.tyd nə mə.zyʁ pa la dy.ʁe də vi mɛ la fa.tiɡ ɑ̃ fɛ̃ də ʒuʁ.ne/', 'or lay-TÜD nuh muh-zür pa la dü-ray duh VEE meh la fa-TEEG ahⁿ fehⁿ duh zhoor-NAY', ['radio', 'debout']),
  sent(1925, 'Ses auteurs ont raison de prendre la sédentarité au sérieux.', 'Its authors are right to take sitting still seriously.', '/se.zo.tœʁ ɔ̃ ʁɛ.zɔ̃ də pʁɑ̃dʁ la se.dɑ̃.ta.ʁi.te o se.ʁjø/', 'say-zoh-tuhr ohⁿ reh-ZOHⁿ duh prahⁿdr la say-dahⁿ-ta-ree-TAY oh say-RYEU', ['radio', 'debout']),
  sent(1926, 'Ils ont tort, en revanche, de parler de « révolution » dans leur communiqué.', 'They are wrong, on the other hand, to speak of a « revolution » in their press release.', '/il.zɔ̃ tɔʁ ɑ̃ ʁə.vɑ̃ʃ də paʁ.le də ʁe.vɔ.ly.sjɔ̃ dɑ̃ lœʁ kɔ.my.ni.ke/', 'eel-zohⁿ TOR ahⁿ ruh-VAHⁿSH duh par-lay duh ray-vo-lü-SYOHⁿ dahⁿ luhr ko-mü-nee-KAY', ['radio', 'debout']),
  sent(1927, 'Même le fabricant qui a financé une partie de l’étude reste prudent.', 'Even the manufacturer who paid for part of the study remains cautious.', '/mɛm lə fa.bʁi.kɑ̃ ki a fi.nɑ̃.se yn paʁ.ti də le.tyd ʁɛst pʁy.dɑ̃/', 'mem luh fa-bree-KAHⁿ kee a fee-nahⁿ-SAY ün par-tee duh lay-TÜD rest prü-DAHⁿ', ['radio', 'debout']),
  sent(1928, 'Le kinésithérapeute que nous avons interrogé va plus loin : rester debout huit heures fatigue aussi.', 'The physiotherapist we spoke to goes further: standing for eight hours is tiring too.', '/lə ki.ne.zi.te.ʁa.pøt kə nu.za.vɔ̃.zɛ̃.tɛ.ʁɔ.ʒe va ply lwɛ̃ ʁɛs.te də.bu ɥi.tœʁ fa.tiɡ o.si/', 'luh kee-nay-zee-tay-ra-PEUT kuh noo-za-vohⁿ-zehⁿ-teh-ro-ZHAY va plü LWEHⁿ res-tay duh-BOO wee-TUHR fa-teeg oh-SEE', ['radio', 'debout']),
  sent(1929, 'Bref, levez-vous de temps en temps, mais ne jetez pas votre chaise.', 'In short, get up now and then, but do not throw out your chair.', '/bʁɛf lə.ve vu də tɑ̃.zɑ̃ tɑ̃ mɛ nə ʒə.te pa vɔtʁ ʃɛz/', 'BREF luh-vay-VOO duh tahⁿ-zahⁿ TAHⁿ meh nuh zhuh-tay pa votr SHEZ', ['radio', 'debout']),
  sent(1930, 'Regarde les mots autour de la citation : ils disent la posture.', 'Look at the words around the quotation: they tell you the stance.', '/ʁə.ɡaʁd le mo o.tuʁ də la si.ta.sjɔ̃ il diz la pɔs.tyʁ/', 'ruh-gard lay MOH oh-toor duh la see-ta-SYOHⁿ eel deez la pos-TÜR', ['regle', 'posture'], FC,
    rule('Un essai cite une étude. Comment savoir si l’auteur s’appuie sur elle ou s’en méfie ?', 'Lis ce qui l’entoure : comme le montre, a raison de, c’est aller vite, même… reconnaît. Regarde les mots autour de la citation : ils disent la posture.')),
];

/* ── ACT 8 · LE PRÉSUPPOSÉ ─────────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1931, 'Pourquoi les jeunes ne lisent-ils plus ?', 'Why do young people no longer read?', '/puʁ.kwa le ʒœn nə liz.til ply/', 'poor-KWA lay ZHUHNN nuh leez-teel PLÜ', ['titre', 'question'], FCVDR),
  sent(1932, 'Le petit mot « plus » suppose un âge d’or.', 'The little word « plus » assumes a golden age.', '/lə pə.ti mo plys sy.poz œ̃.na.ʒə dɔʁ/', 'luh puh-tee MOH PLÜSS sü-pohz uhⁿ-na-zhuh DOR', ['presuppose']),
  sent(1933, 'On parle de la crise de la lecture comme d’un fait établi.', 'People speak of the reading crisis as an established fact.', '/ɔ̃ paʁl də la kʁiz də la lɛk.tyʁ kɔm dœ̃ fɛ.te.ta.bli/', 'ohⁿ parl duh la KREEZ duh la lek-TÜR kom duhⁿ feh-tay-ta-BLEE', ['presuppose', 'defini']),
  sent(1934, 'Les jeunes ont cessé de lire.', 'Young people have stopped reading.', '/le ʒœn ɔ̃ se.se də liʁ/', 'lay ZHUHNN ohⁿ seh-say duh LEER', ['presuppose', 'cesser'], FCVDR),
  sent(1935, 'On regrette que les jeunes aient cessé de lire.', 'People regret that young people have stopped reading.', '/ɔ̃ ʁə.ɡʁɛt kə le ʒœn ɛ se.se də liʁ/', 'ohⁿ ruh-GRET kuh lay ZHUHNN eh seh-say duh LEER', ['presuppose', 'factif']),
  sent(1936, 'Pour la discuter, il faut d’abord refuser ce qu’elle tient pour acquis.', 'To discuss it, you must first refuse what it takes for granted.', '/puʁ la dis.ky.te il fo da.bɔʁ ʁə.fy.ze sə kɛl tjɛ̃ pu.ʁa.ki/', 'poor la dees-kü-TAY eel foh da-BOR ruh-fü-ZAY suh kel tyehⁿ poo-ra-KEE', ['presuppose', 'methode']),
  sent(1937, 'La question tient pour acquis qu’ils ne lisent plus.', 'The question takes it for granted that they no longer read.', '/la kɛs.tjɔ̃ tjɛ̃ pu.ʁa.ki kil nə liz ply/', 'la kes-TYOHⁿ tyehⁿ poo-ra-KEE keel nuh leez PLÜ', ['presuppose', 'analyse'], FCVDR),
  sent(1938, 'Le chantier a encore pris du retard.', 'The building work has fallen behind again.', '/lə ʃɑ̃.tje a ɑ̃.kɔʁ pʁi dy ʁə.taʁ/', 'luh shahⁿ-TYAY a ahⁿ-KOR pree dü ruh-TAR', ['presuppose', 'encore'], FCVDR),
  sent(1939, 'La ville a cessé de financer le festival.', 'The town has stopped funding the festival.', '/la vil a se.se də fi.nɑ̃.se lə fɛs.ti.val/', 'la VEEL a seh-say duh fee-nahⁿ-SAY luh fes-tee-VAL', ['presuppose', 'cesser']),
  sent(1940, 'Elle ne sait pas que le musée est fermé.', 'She does not know that the museum is closed.', '/ɛl nə sɛ pa kə lə my.ze ɛ fɛʁ.me/', 'el nuh seh pa kuh luh mü-ZAY eh fehr-MAY', ['presuppose', 'factif']),
  sent(1941, 'Elle aussi a démissionné.', 'She too has resigned.', '/ɛl o.si a de.mi.sjɔ.ne/', 'el oh-SEE a day-mee-syo-NAY', ['presuppose', 'aussi']),
  sent(1942, 'Le présupposé survit à la négation ; le sous-entendu, non.', 'A presupposition survives negation; an implication does not.', '/lə pʁe.sy.po.ze syʁ.vi a la ne.ɡa.sjɔ̃ lə su.zɑ̃.tɑ̃.dy nɔ̃/', 'luh pray-sü-poh-ZAY sür-vee a la nay-ga-SYOHⁿ luh soo-zahⁿ-tahⁿ-DÜ NOHⁿ', ['regle', 'presuppose'], FC,
    rule('« Paul a cessé de fumer. » « Paul n’a pas cessé de fumer. » Qu’est-ce qui reste vrai dans les deux ?', 'Que Paul fumait : c’est le présupposé, posé par « cesser de ». Le présupposé survit à la négation ; le sous-entendu, non.')),
  sent(1943, 'Une question bien posée ne contient pas sa réponse.', 'A well-framed question does not contain its answer.', '/yn kɛs.tjɔ̃ bjɛ̃ po.ze nə kɔ̃.tjɛ̃ pa sa ʁe.pɔ̃s/', 'ün kes-tyohⁿ byehⁿ poh-ZAY nuh kohⁿ-tyehⁿ pa sa ray-POHⁿSS', ['chute', 'question']),
  sent(1944, 'Répondre à la question, c’est déjà accepter ce qu’elle suppose.', 'To answer the question is already to accept what it assumes.', '/ʁe.pɔ̃dʁ a la kɛs.tjɔ̃ sɛ de.ʒa ak.sɛp.te sə kɛl sy.poz/', 'ray-POHⁿDR a la kes-TYOHⁿ seh day-zha ak-sep-TAY suh kel sü-POHZ', ['presuppose', 'methode']),
  sent(1945, 'Le directeur regrette que l’équipe ait manqué l’objectif.', 'The director regrets that the team missed the target.', '/lə di.ʁɛk.tœʁ ʁə.ɡʁɛt kə le.kip ɛ mɑ̃.ke lɔb.ʒɛk.tif/', 'luh dee-rek-TUHR ruh-GRET kuh lay-KEEP eh mahⁿ-kay lob-zhek-TEEF', ['presuppose', 'factif'], FCVDR),
];

/* ── ACT 9 · L’IRONIE AU C1 ────────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1946, 'J’ai donc pris ma journée, en toute tranquillité.', 'So I took the day off, in complete peace and quiet.', '/ʒe dɔ̃k pʁi ma ʒuʁ.ne ɑ̃ tut tʁɑ̃.ki.li.te/', 'zhay dohⁿk pree ma zhoor-NAY ahⁿ toot trahⁿ-kee-lee-TAY', ['ironie', 'echo']),
  sent(1947, 'J’ai eu tout le loisir d’admirer mes radiateurs.', 'I had ample leisure to admire my radiators.', '/ʒe y tu lə lwa.ziʁ dad.mi.ʁe me ʁa.dja.tœʁ/', 'zhay ü too luh lwa-ZEER dad-mee-RAY may ra-dya-TUHR', ['ironie', 'antiphrase']),
  sent(1948, 'Loin de moi l’idée de me plaindre.', 'Far be it from me to complain.', '/lwɛ̃ də mwa li.de də mə plɛ̃dʁ/', 'lwehⁿ duh mwa lee-DAY duh muh PLEHⁿDR', ['ironie', 'modestie']),
  sent(1949, 'Sans indice dans le texte, je lis au premier degré.', 'Without a cue in the text, I read literally.', '/sɑ̃.zɛ̃.dis dɑ̃ lə tɛkst ʒə li o pʁə.mje də.ɡʁe/', 'sahⁿ-zehⁿ-DEESS dahⁿ luh TEKST zhuh lee oh pruh-myay duh-GRAY', ['regle', 'ironie'], FC,
    rule('« Demandez le premier passage du matin. » Le technicien est-il ironique ?', 'Non : rien dans le texte ne contredit sa phrase. Sans indice dans le texte, je lis au premier degré.')),
  sent(1950, 'Ma journée tranquille', 'My peaceful day', '/ma ʒuʁ.ne tʁɑ̃.kil/', 'ma zhoor-nay trahⁿ-KEEL', ['titre', 'echo']),
  sent(1951, 'On m’avait promis la tranquillité : je n’ai pas bougé de la journée.', 'I had been promised peace and quiet: I did not move all day.', '/ɔ̃ ma.vɛ pʁɔ.mi la tʁɑ̃.ki.li.te ʒə ne pa bu.ʒe də la ʒuʁ.ne/', 'ohⁿ ma-veh pro-MEE la trahⁿ-kee-lee-TAY zhuh nay pa boo-ZHAY duh la zhoor-NAY', ['ironie', 'echo']),
  sent(1952, 'Le créneau n’est pas faux : il est simplement aussi large que la journée.', 'The time slot is not wrong: it is simply as wide as the day.', '/lə kʁe.no nɛ pa fo i.lɛ sɛ̃.plə.mɑ̃ o.si laʁʒ kə la ʒuʁ.ne/', 'luh kray-NOH neh pa FOH ee-leh sehⁿ-pluh-MAHⁿ oh-see LARZH kuh la zhoor-NAY', ['ironie', 'modestie']),
  sent(1953, 'L’auteure reprend le mot de la note pour le faire entendre creux.', 'The writer repeats the memo’s word to make it sound hollow.', '/lo.tœʁ ʁə.pʁɑ̃ lə mo də la nɔt puʁ lə fɛʁ ɑ̃.tɑ̃dʁ kʁø/', 'loh-TUHR ruh-prahⁿ luh MOH duh la NOT poor luh fehr ahⁿ-tahⁿdr KREU', ['analyse', 'echo'], FCVDR),
  sent(1954, 'Dix heures d’attente contredisent l’éloge.', 'Ten hours of waiting contradict the praise.', '/di.zœʁ da.tɑ̃t kɔ̃.tʁə.diz le.lɔʒ/', 'dee-ZUHR da-TAHⁿT kohⁿ-truh-DEEZ lay-LOZH', ['analyse', 'indice']),
  sent(1955, 'La phrase du technicien est sincère : rien ne la contredit.', 'The technician’s sentence is sincere: nothing contradicts it.', '/la fʁaz dy tɛk.ni.sjɛ̃ ɛ sɛ̃.sɛʁ ʁjɛ̃ nə la kɔ̃.tʁə.di/', 'la FRAHZ dü tek-nee-SYEHⁿ eh sehⁿ-SEHR ryehⁿ nuh la kohⁿ-truh-DEE', ['analyse', 'premier-degre']),
  phrase(1956, 'au second degré', 'tongue in cheek, not to be taken literally', '/o sə.ɡɔ̃ də.ɡʁe/', 'oh suh-gohⁿ duh-GRAY', ['ironie']),
  sent(1957, 'À l’écrit, l’ironie n’a que les mots, et c’est là qu’elle échoue le plus souvent.', 'In writing, irony has only words, and that is where it most often fails.', '/a le.kʁi li.ʁɔ.ni na kə le mo e sɛ la kɛ.le.ʃu lə ply su.vɑ̃/', 'a lay-KREE lee-ro-NEE na kuh lay MOH ay seh LA keh-lay-SHOO luh plü soo-VAHⁿ', ['radio', 'ironie']),
  sent(1958, 'À l’oral, l’ironie a un complice : la voix.', 'In speech, irony has an accomplice: the voice.', '/a lɔ.ʁal li.ʁɔ.ni a œ̃ kɔ̃.plis la vwa/', 'a lo-RAL lee-ro-NEE a uhⁿ kohⁿ-PLEESS la VWA', ['radio', 'ironie']),
  sent(1959, 'Un « Merci pour ta rapidité » envoyé à un collègue peut le blesser ou le faire rire.', 'A « Thanks for being so quick » sent to a colleague can hurt them or make them laugh.', '/œ̃ mɛʁ.si puʁ ta ʁa.pi.di.te ɑ̃.vwa.je a œ̃ kɔ.lɛɡ pø lə blɛ.se u lə fɛʁ ʁiʁ/', 'uhⁿ mehr-SEE poor ta ra-pee-dee-TAY ahⁿ-vwa-YAY a uhⁿ ko-LEG peu luh bleh-SAY oo luh fehr REER', ['radio', 'ironie']),
  sent(1960, 'Tout dépend de ce qu’il sait déjà de la situation.', 'It all depends on what they already know about the situation.', '/tu de.pɑ̃ də sə kil sɛ de.ʒa də la si.tɥa.sjɔ̃/', 'too day-PAHⁿ duh suh keel seh day-ZHA duh la see-twa-SYOHⁿ', ['radio', 'ironie']),
  sent(1961, 'Certains ajoutent un petit visage qui cligne de l’œil, comme on colle une étiquette.', 'Some add a little winking face, the way you stick on a label.', '/sɛʁ.tɛ̃.za.ʒut œ̃ pə.ti vi.zaʒ ki kliɲ də lœj kɔ.mɔ̃ kɔl y.ne.ti.kɛt/', 'sehr-tehⁿ-za-ZHOOT uhⁿ puh-tee vee-ZAZH kee KLEENY duh LUHY ko-mohⁿ kol ü-nay-tee-KET', ['radio', 'ironie']),
  sent(1962, 'Je ne m’en moque pas : c’est l’aveu que la phrase seule ne suffisait pas.', 'I am not mocking it: it is an admission that the sentence alone was not enough.', '/ʒə nə mɑ̃ mɔk pa sɛ la.vø kə la fʁaz sœl nə sy.fi.zɛ pa/', 'zhuh nuh mahⁿ MOK PA seh la-VEU kuh la frahz SUHL nuh sü-fee-zeh PA', ['radio', 'ironie']),
  sent(1963, 'Les bons ironistes laissent dans le texte un détail qui contredit l’éloge.', 'Good ironists leave in the text a detail that contradicts the praise.', '/le bɔ̃.zi.ʁɔ.nist lɛs dɑ̃ lə tɛkst œ̃ de.taj ki kɔ̃.tʁə.di le.lɔʒ/', 'lay bohⁿ-zee-ro-NEEST less dahⁿ luh TEKST uhⁿ day-TAHY kee kohⁿ-truh-dee lay-LOZH', ['radio', 'ironie'], FCVDR),
  sent(1964, 'Le lecteur le trouve, et il a le plaisir de l’avoir trouvé lui-même.', 'The reader finds it, and has the pleasure of having found it himself.', '/lə lɛk.tœʁ lə tʁuv e i.la lə plɛ.ziʁ də la.vwaʁ tʁu.ve lɥi.mɛm/', 'luh lek-TUHR luh TROOV ay ee-la luh pleh-ZEER duh la-vwar troo-vay lwee-MEM', ['radio', 'ironie']),
  sent(1965, 'Peu de gens peuvent se vanter d’avoir passé une journée aussi tranquille, les yeux sur un téléphone.', 'Few people can boast of having spent such a peaceful day, eyes on a phone.', '/pø də ʒɑ̃ pœv sə vɑ̃.te da.vwaʁ pa.se yn ʒuʁ.ne o.si tʁɑ̃.kil le.zjø syʁ œ̃ te.le.fɔn/', 'peu duh ZHAHⁿ puhv suh vahⁿ-TAY da-vwar pa-say ün zhoor-nay oh-see trahⁿ-KEEL lay-ZYEU sür uhⁿ tay-lay-FONN', ['ironie', 'echo']),
];

/* ── ACT 10 · L’AGENT CACHÉ ────────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1966, 'Qui a annulé les sorties ?', 'Who cancelled the outings?', '/ki a a.ny.le le sɔʁ.ti/', 'kee a a-nü-LAY lay sor-TEE', ['titre', 'sorties']),
  sent(1967, 'Les sorties scolaires sont suspendues jusqu’à nouvel ordre.', 'School outings are suspended until further notice.', '/le sɔʁ.ti skɔ.lɛʁ sɔ̃ sys.pɑ̃.dy ʒys.ka nu.vɛ.lɔʁdʁ/', 'lay sor-tee sko-LEHR sohⁿ süs-pahⁿ-DÜ zhüs-ka noo-veh-LORDR', ['agent', 'passif'], FCVDR),
  sent(1968, 'Une réévaluation des priorités budgétaires a été effectuée.', 'A reassessment of budget priorities has been carried out.', '/yn ʁe.e.va.lɥa.sjɔ̃ de pʁi.jɔ.ʁi.te byd.ʒe.tɛʁ a e.te e.fɛk.tɥe/', 'ün ray-ay-va-lwa-SYOHⁿ day pree-yo-ree-TAY büd-zhay-TEHR a ay-tay ay-fek-TWAY', ['agent', 'nominalisation']),
  sent(1969, 'Il a été jugé préférable de concentrer les ressources.', 'It was judged preferable to concentrate resources.', '/i.la e.te ʒy.ʒe pʁe.fe.ʁabl də kɔ̃.sɑ̃.tʁe le ʁə.suʁs/', 'ee-la ay-tay zhü-ZHAY pray-fay-RABL duh kohⁿ-sahⁿ-TRAY lay ruh-SOORSS', ['agent', 'impersonnel']),
  sent(1970, 'Le conseil d’établissement a décidé de supprimer les sorties.', 'The school’s governing board decided to cut the outings.', '/lə kɔ̃.sɛj de.ta.blis.mɑ̃ a de.si.de də sy.pʁi.me le sɔʁ.ti/', 'luh kohⁿ-SEY day-ta-blees-MAHⁿ a day-see-DAY duh sü-pree-may lay sor-TEE', ['agent', 'actif'], FCVDR),
  sent(1971, 'Un style n’est jamais neutre : celui-ci transforme une décision en événement.', 'A style is never neutral: this one turns a decision into an event.', '/œ̃ stil nɛ ʒa.mɛ nøtʁ sə.lɥi.si tʁɑ̃s.fɔʁm yn de.si.zjɔ̃ ɑ̃.ne.vɛn.mɑ̃/', 'uhⁿ STEEL neh zha-meh NEUTR suh-lwee-SEE trahⁿs-FORM ün day-see-ZYOHⁿ ahⁿ-nay-venn-MAHⁿ', ['these', 'agent']),
  sent(1972, 'On peut contester une décision. Un événement, on le subit.', 'A decision can be challenged. An event, you just put up with.', '/ɔ̃ pø kɔ̃.tɛs.te yn de.si.zjɔ̃ œ̃.ne.vɛn.mɑ̃ ɔ̃ lə sy.bi/', 'ohⁿ peu kohⁿ-tes-TAY ün day-see-ZYOHⁿ uhⁿ-nay-venn-MAHⁿ ohⁿ luh sü-BEE', ['these', 'agent']),
  sent(1973, 'Suspendues par qui ?', 'Suspended by whom?', '/sys.pɑ̃.dy paʁ ki/', 'süs-pahⁿ-dü par KEE', ['question', 'agent']),
  sent(1974, 'Devant un passif sans agent, demande : par qui ?', 'Faced with a passive with no agent, ask: by whom?', '/də.vɑ̃.tœ̃ pa.sif sɑ̃.za.ʒɑ̃ də.mɑ̃d paʁ ki/', 'duh-vahⁿ-tuhⁿ pa-SEEF sahⁿ-za-ZHAHⁿ duh-MAHⁿD par KEE', ['regle', 'agent'], FC,
    rule('« Une réévaluation a été effectuée. » Qui a réévalué ?', 'Le texte ne le dit pas, que ce soit voulu ou non. Devant un passif sans agent, demande : par qui ?')),
  sent(1975, 'La situation impose des choix difficiles.', 'The situation calls for difficult choices.', '/la si.tɥa.sjɔ̃ ɛ̃.poz de ʃwa di.fi.sil/', 'la see-twa-SYOHⁿ ehⁿ-POHZ day SHWA dee-fee-SEEL', ['agent', 'sujet-abstrait']),
  sent(1976, 'On a décidé de fermer la piscine le dimanche.', 'It has been decided to close the pool on Sundays.', '/ɔ̃.na de.si.de də fɛʁ.me la pi.sin lə di.mɑ̃ʃ/', 'oh-na day-see-DAY duh fehr-MAY la pee-SEENN luh dee-MAHⁿSH', ['agent', 'on']),
  sent(1977, 'La fermeture du guichet a été annoncée hier.', 'The closure of the counter was announced yesterday.', '/la fɛʁ.mə.tyʁ dy ɡi.ʃɛ a e.te a.nɔ̃.se jɛʁ/', 'la fehr-muh-TÜR dü gee-SHEH a ay-tay a-nohⁿ-SAY YEHR', ['agent', 'nominalisation']),
  sent(1978, 'La décision s’est prise en quelques minutes.', 'The decision was taken in a few minutes.', '/la de.si.zjɔ̃ sɛ pʁiz ɑ̃ kɛl.kə mi.nyt/', 'la day-see-ZYOHⁿ seh PREEZ ahⁿ kel-kuh mee-NÜT', ['agent', 'pronominal']),
  sent(1979, 'Nous comptons sur votre compréhension.', 'We count on your understanding.', '/nu kɔ̃.tɔ̃ syʁ vɔtʁ kɔ̃.pʁe.ɑ̃.sjɔ̃/', 'noo kohⁿ-TOHⁿ sür votr kohⁿ-pray-ahⁿ-SYOHⁿ', ['agent', 'sorties']),
];

/* ── ACT 11 · À L’ÉPREUVE ──────────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1980, 'Que conclut exactement l’auteur ?', 'What exactly does the writer conclude?', '/kə kɔ̃.kly ɛɡ.zak.tə.mɑ̃ lo.tœʁ/', 'kuh kohⁿ-KLÜ eg-zak-tuh-MAHⁿ loh-TUHR', ['question', 'examen']),
  sent(1981, 'Cette option dit la même chose, en plus fort.', 'This option says the same thing, more strongly.', '/sɛ.tɔp.sjɔ̃ di la mɛm ʃoz ɑ̃ ply fɔʁ/', 'seh-top-SYOHⁿ dee la mem SHOHZ ahⁿ plü FOR', ['distracteur', 'examen']),
  sent(1982, 'Cette option donne le sujet, pas ce qu’en dit l’auteur.', 'This option gives the topic, not what the writer says about it.', '/sɛ.tɔp.sjɔ̃ dɔn lə sy.ʒɛ pa sə kɑ̃ di lo.tœʁ/', 'seh-top-SYOHⁿ DONN luh sü-ZHEH pa suh kahⁿ dee loh-TUHR', ['distracteur', 'examen']),
  sent(1983, 'C’est dans le texte, mais ça ne répond pas à la question.', 'It is in the text, but it does not answer the question.', '/sɛ dɑ̃ lə tɛkst mɛ sa nə ʁe.pɔ̃ pa a la kɛs.tjɔ̃/', 'seh dahⁿ luh TEKST meh sa nuh ray-pohⁿ pa a la kes-TYOHⁿ', ['distracteur', 'examen'], FCVDR),
  sent(1984, 'Cette option donne la position que l’auteur combat.', 'This option gives the position the writer is arguing against.', '/sɛ.tɔp.sjɔ̃ dɔn la po.zi.sjɔ̃ kə lo.tœʁ kɔ̃.ba/', 'seh-top-SYOHⁿ DONN la po-zee-SYOHⁿ kuh loh-TUHR kohⁿ-BA', ['distracteur', 'examen']),
  sent(1985, 'Élimine chaque option par sa famille, puis relis la question.', 'Eliminate each option by its family, then reread the question.', '/e.li.min ʃak ɔp.sjɔ̃ paʁ sa fa.mij pɥi ʁə.li la kɛs.tjɔ̃/', 'ay-lee-MEENN shak op-SYOHⁿ par sa fa-MEEY pwee ruh-lee la kes-TYOHⁿ', ['regle', 'examen'], FC,
    rule('Deux options te semblent justes. Que fais-tu ?', 'Tu cherches celle qui exagère, celle qui est vraie mais hors sujet, celle de l’autre camp. Élimine chaque option par sa famille, puis relis la question.')),
  sent(1986, 'La transparence qui s’arrête à la porte de l’entreprise laisse le plus important à l’intérieur.', 'Transparency that stops at the company door leaves what matters most inside.', '/la tʁɑ̃s.pa.ʁɑ̃s ki sa.ʁɛt a la pɔʁt də lɑ̃.tʁə.pʁiz lɛs lə ply.zɛ̃.pɔʁ.tɑ̃ a lɛ̃.te.ʁjœʁ/', 'la trahⁿs-pa-RAHⁿSS kee sa-ret a la PORT duh lahⁿ-truh-PREEZ less luh plü-zehⁿ-por-TAHⁿ a lehⁿ-tay-RYUHR', ['chute', 'salaire']),
  sent(1987, 'Le chiffre est sans doute exact. Il est calculé pour un supermarché.', 'The figure is no doubt accurate. It is calculated for a supermarket.', '/lə ʃifʁ ɛ sɑ̃ du.tɛɡ.zakt i.lɛ kal.ky.le puʁ œ̃ sy.pɛʁ.maʁ.ʃe/', 'luh SHEEFR eh sahⁿ doo-teg-ZAKT ee-leh kal-kü-LAY poor uhⁿ sü-pehr-mar-SHAY', ['posture', 'consigne']),
  sent(1988, 'On attend avec impatience de savoir dans quelle réserve.', 'One waits impatiently to learn in which storeroom.', '/ɔ̃.na.tɑ̃ a.vɛ.kɛ̃.pa.sjɑ̃s də sa.vwaʁ dɑ̃ kɛl ʁe.zɛʁv/', 'oh-na-TAHⁿ a-veh-kehⁿ-pa-SYAHⁿSS duh sa-VWAR dahⁿ kel ray-ZEHRV', ['ironie', 'consigne']),
];

/* ── ACT 12 · TON ANALYSE ──────────────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1989, 'L’auteur soutient qu’il faut une heure de cuisine par semaine au secondaire.', 'The writer argues for one hour of cooking a week in secondary school.', '/lo.tœʁ su.tjɛ̃ kil fo y.nœʁ də kɥi.zin paʁ sə.mɛn o sə.ɡɔ̃.dɛʁ/', 'loh-TUHR soo-TYEHⁿ keel foh ü-NUHR duh kwee-ZEENN par suh-MENN oh suh-gohⁿ-DEHR', ['analyse', 'these'], FCVDR),
  sent(1990, 'Il concède que les programmes sont chargés, sans dire quelle heure il retirerait.', 'He concedes that the curriculum is full, without saying which hour he would remove.', '/il kɔ̃.sɛd kə le pʁɔ.ɡʁam sɔ̃ ʃaʁ.ʒe sɑ̃ diʁ kɛ.lœʁ il ʁə.ti.ʁə.ʁɛ/', 'eel kohⁿ-SED kuh lay pro-GRAMM sohⁿ shar-ZHAY sahⁿ DEER keh-LUHR eel ruh-tee-ruh-REH', ['analyse', 'concession']),
  sent(1991, 'Sa question de départ tient pour acquis que les adolescents savaient cuisiner.', 'His opening question takes it for granted that teenagers used to know how to cook.', '/sa kɛs.tjɔ̃ də de.paʁ tjɛ̃ pu.ʁa.ki kə le.za.dɔ.le.sɑ̃ sa.vɛ kɥi.zi.ne/', 'sa kes-tyohⁿ duh day-PAR tyehⁿ poo-ra-KEE kuh lay-za-do-lay-SAHⁿ sa-veh kwee-zee-NAY', ['analyse', 'presuppose']),
  sent(1992, 'Il fait dire à l’enquête plus qu’elle ne dit.', 'He makes the survey say more than it says.', '/il fɛ diʁ a lɑ̃.kɛt plys kɛl nə di/', 'eel feh deer a lahⁿ-KET plüss kel nuh DEE', ['analyse', 'posture'], FCVDR),
  sent(1993, 'Quarante et un pour cent, ce n’est pas la moitié.', 'Forty-one per cent is not half.', '/ka.ʁɑ̃.te.œ̃ puʁ sɑ̃ sə nɛ pa la mwa.tje/', 'ka-rahⁿ-tay-UHⁿ poor SAHⁿ suh neh pa la mwa-TYAY', ['analyse', 'portee']),
  sent(1994, 'Dire qu’on ne sait pas, ce n’est pas être incapable.', 'Saying you don’t know how is not the same as being unable.', '/diʁ kɔ̃ nə sɛ pa sə nɛ pa ɛtʁ ɛ̃.ka.pabl/', 'DEER kohⁿ nuh seh PA suh neh pa etr ehⁿ-ka-PABL', ['analyse', 'portee']),
  sent(1995, 'Il résume l’objection en une phrase, puis l’écarte par une comparaison.', 'He sums up the objection in one sentence, then brushes it aside with a comparison.', '/il ʁe.zym lɔb.ʒɛk.sjɔ̃ ɑ̃.ny.nə fʁaz pɥi le.kaʁt paʁ yn kɔ̃.pa.ʁɛ.zɔ̃/', 'eel ray-ZÜM lob-zhek-SYOHⁿ ahⁿ-nü-nuh FRAHZ pwee lay-KART par ün kohⁿ-pa-reh-ZOHⁿ', ['analyse', 'posture']),
  sent(1996, 'Le texte ne dit rien du coût, ni de qui enseignerait.', 'The text says nothing about the cost, nor about who would teach.', '/lə tɛkst nə di ʁjɛ̃ dy ku ni də ki ɑ̃.sɛ.ɲə.ʁɛ/', 'luh TEKST nuh dee RYEHⁿ dü KOO nee duh kee ahⁿ-seh-nyuh-REH', ['analyse', 'omission']),
  sent(1997, 'Ce silence pèse d’autant plus que l’auteur dirige des ateliers de cuisine.', 'This silence weighs all the more as the writer runs cooking workshops.', '/sə si.lɑ̃s pɛz do.tɑ̃ plys kə lo.tœʁ di.ʁiʒ de.za.tə.lje də kɥi.zin/', 'suh see-LAHⁿSS pez doh-tahⁿ plüss kuh loh-TUHR dee-reezh day-za-tuh-LYAY duh kwee-ZEENN', ['analyse', 'omission']),
  sent(1998, 'Une analyse dit la thèse, ce qu’elle concède, ce qu’elle suppose et ce qu’elle tait.', 'An analysis states the thesis, what it concedes, what it assumes and what it keeps quiet.', '/y.na.na.liz di la tɛz sə kɛl kɔ̃.sɛd sə kɛl sy.poz e sə kɛl tɛ/', 'ü-na-na-LEEZ dee la TEZ suh kel kohⁿ-SED suh kel sü-POHZ ay suh kel TEH', ['regle', 'analyse'], FC,
    rule('Ta tutrice te demande une analyse, pas un résumé. Qu’est-ce que tu ajoutes ?', 'L’implicite et la portée. Une analyse dit la thèse, ce qu’elle concède, ce qu’elle suppose et ce qu’elle tait.')),
  sent(1999, 'Au total, l’idée mérite d’être discutée, mais le texte la défend mal.', 'All in all, the idea deserves discussion, but the text defends it badly.', '/o tɔ.tal li.de me.ʁit dɛtʁ dis.ky.te mɛ lə tɛkst la de.fɑ̃ mal/', 'oh to-TAL lee-DAY may-reet detr dees-kü-TAY meh luh TEKST la day-fahⁿ MAL', ['analyse', 'conclusion'], FCVDR),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE ANCHOR TEXTS
 *
 *  « Texte original écrit pour la leçon », all of them. One per act, 280 to
 *  420 words (C1-BUILD-LOG « reading 300 to 500 words »; the exam documents
 *  of act 11 sit at the exam's own length), each an essay, a chronicle, a
 *  tribune or a billet. They live here so the reading, the quiz and the task
 *  cannot drift apart. Word counts are asserted by the scratch check.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: an essay whose conclusion is narrower than a hasty reader says. */
export const AVIS_TEXT =
  'CINQ ÉTOILES, AUCUNE INFORMATION. Essai de Mathilde Orsoni. Il est devenu presque impossible de réserver une table, un plombier ou une chambre d’hôtel sans consulter d’abord la moyenne que lui attribuent ses clients. On a raison de s’en servir : une note de 2,1 sur 5 signale presque toujours un vrai problème, et personne ne regrettera l’époque où l’on choisissait un garage au hasard de l’annuaire. Pour éviter une mauvaise surprise, rien ne vaut l’avis de ceux qui sont passés avant nous. Le système a pourtant une particularité qu’on remarque moins. Presque tout le monde y obtient entre 4,5 et 5. Sur la plateforme Escale, qui recense les artisans de la région, neuf fiches sur dix affichent une moyenne supérieure à 4,6. Une échelle dont on n’utilise que le dernier dixième ne mesure plus grand-chose : elle trie les catastrophes et laisse tout le reste à égalité. On répondra que les clients mécontents écrivent rarement, et que la note reflète donc surtout ceux qui ont été satisfaits. C’est exact, et c’est précisément le problème. Une moyenne calculée sur ceux qui ont envie de parler décrit l’humeur des bavards, non la qualité du service. Il y a plus gênant. Le chauffeur noté 4,7 apprend vite que 4,7 est une menace, et le restaurateur, qu’un seul client fâché peut lui coûter un mois de réservations. La note ne se contente pas de décrire : elle dresse. Elle fabrique des sourires obligatoires et des bouteilles d’eau offertes, ce qui n’est pas tout à fait la même chose qu’un meilleur service. Le client, lui, finit par noter la gentillesse plutôt que le travail. Je ne propose pas de supprimer les étoiles. Elles rendent un service réel, celui d’écarter le pire. Je propose seulement qu’on renonce à les lire comme une mesure de la qualité, et qu’on les prenne pour ce qu’elles sont : une alarme, utile quand elle sonne, muette le reste du temps.';

/** Act 2: a tribune built on concession then restriction, three times. */
export const BIBLIO_TEXT =
  'RENDEZ-NOUS UNE SALLE SILENCIEUSE. Tribune de Bastien Lacombe-Rey, bibliothécaire à Valcourt-sur-Orne. Les bibliothèques ont changé, et c’est tant mieux. On y joue, on y répare des vélos, on y apprend à remplir un formulaire en ligne, on y vient en famille le samedi. Dans notre réseau, la fréquentation, qui baissait depuis vingt ans, a remonté de 30 % en cinq ans. Il serait absurde de regretter les salles où l’on n’osait pas chuchoter, et où un regard noir punissait le moindre bruit de chaise. Ces salles-là faisaient fuir plus de monde qu’elles n’en accueillaient. On objectera que la bibliothèque n’a jamais appartenu aux seuls lecteurs silencieux, et qu’elle doit suivre ses publics. C’est exact. Reste qu’un lieu qui accueille tout le monde finit par exclure certains : l’étudiant qui partage un deux-pièces avec trois personnes, la traductrice qui n’a pas de bureau, le retraité qui ne peut plus lire dès qu’il y a de la musique. Ceux-là ne se plaignent pas. Ils cessent de venir. Certes, aménager une salle fermée coûte cher, et les budgets sont serrés. Encore faudrait-il comparer ce coût à celui d’un public perdu, celui d’un lieu public qui laisse partir, sans bruit, ceux qui en avaient le plus besoin. Sans doute la demande est-elle difficile à mesurer : on ne compte pas les absents. Aucun questionnaire de satisfaction ne sera jamais rempli par quelqu’un qui a cessé de venir. Il n’en demeure pas moins que la petite salle que nous avons rouverte en mars, faute de mieux, au fond de l’annexe des Tilleuls, était pleine en avril, et l’est restée tout l’été. Je ne demande pas le retour de la bibliothèque d’autrefois. Je ne demande pas non plus qu’on chasse les familles, les ateliers ou les jeux. Je demande une porte, et derrière elle une pièce où le silence ne soit pas une faveur qu’on implore, mais une règle qu’on affiche.';

/** Act 3: a chronicle that corrects the headlines in both directions. */
export const ECRAN_TEXT =
  'CE QUE L’ÉCRAN FAIT À LA LECTURE. Chronique d’Inès Vardier. Une étude menée par l’Observatoire Hestia auprès de 2 300 lycéens a fait grand bruit cet automne. Les élèves y lisaient le même texte de huit pages, les uns sur papier, les autres sur tablette, puis répondaient à des questions de compréhension. Ceux qui avaient lu sur papier obtenaient de meilleurs résultats, mais seulement pour les questions qui portaient sur l’organisation d’ensemble du texte. Pour les détails, aucune différence. Les auteurs ont publié leurs données, ce qui est assez rare pour mériter d’être salué. Les titres ont résumé l’affaire en une ligne : l’écran nous rend moins bons lecteurs. C’est aller plus loin que l’étude, et dans deux directions. D’abord, elle ne portait que sur des textes longs : sur un article d’une page, les auteurs n’ont rien observé. Ensuite, l’écart disparaissait chez les élèves à qui l’on avait demandé de faire un plan avant de répondre. Faut-il en conclure que l’écran est innocent ? Pas davantage. Le résultat est modeste, mais il est net, et il concerne précisément les textes qu’on donne à lire au lycée et à l’université. Ce sont aussi ceux qu’on lit de plus en plus souvent sur un écran. Qu’un lecteur se repère mal dans un document dont il ne voit jamais qu’une fenêtre n’a rien de mystérieux : on se perd plus vite dans une ville qu’on visite rue par rue que dans une ville dont on a d’abord regardé le plan. Je ne dis donc pas qu’on lit moins bien sur écran. Je dis qu’on y saisit moins bien la structure des textes longs, et que l’effet disparaît dès qu’on donne au lecteur le moyen de se construire une vue d’ensemble. C’est moins spectaculaire qu’un titre. C’est aussi plus utile, parce qu’on sait quoi faire : un plan, une table des matières, une minute pour feuilleter avant de lire.';

/** Act 4: a chronicle on a quarrel whose real object is not the stated one. */
export const PELOUSE_TEXT =
  'LA QUERELLE DES PELOUSES. Chronique de Claire Moisan. À Saint-Aubert-des-Monts, le conseil municipal a autorisé cet été les jardins « en prairie » : herbes hautes, fleurs sauvages, pas de tonte avant septembre. Depuis, la petite ville se dispute, et l’on croit savoir à quel sujet. Les partisans parlent d’eau, d’abeilles et d’essence économisée. Les opposants répondent tiques, mauvaises herbes et valeur des maisons. Les uns brandissent des études, les autres des photos. Le débat est pourtant mal décrit, parce que les deux camps s’accordent sur presque tous les faits. Personne ne conteste qu’une prairie consomme moins d’eau qu’un gazon. Personne ne nie non plus qu’elle attire des insectes, y compris ceux qu’on préférerait voir ailleurs. Si la querelle portait sur ces faits, une heure de lecture suffirait à la clore. Elle dure pourtant depuis trois mois, et elle s’envenime. Elle porte en réalité sur ce qu’un jardin dit de celui qui l’entretient. Pour une génération, une pelouse rase était une politesse faite aux voisins, la preuve visible qu’on ne laissait rien aller. La prairie, vue de ce trottoir-là, ne ressemble pas à un choix écologique : elle ressemble à un abandon. Ses défenseurs y voient l’inverse, une négligence apparente qui demande, en fait, beaucoup de soin. Les deux camps emploient le même mot, « soigné », et ne lui donnent pas le même sens. On comprend alors pourquoi les arguments ne passent pas. On répond « abeilles » à quelqu’un qui parle de respect, et « respect » à quelqu’un qui parle d’abeilles. Chacun gagne sur son terrain et ne met jamais le pied sur celui de l’autre. La solution ne viendra pas d’une étude de plus. Elle viendra peut-être d’une petite pancarte, que la mairie distribue déjà à qui la demande : « Prairie en cours. » Trois mots qui ne prouvent rien, mais qui disent au voisin ce qu’il avait besoin d’entendre : ici, quelqu’un s’en occupe.';

/** Act 5: an essay in six numbered paragraphs, each with one job. */
export const MUSEE_TEXT =
  'LE CARTEL OU LE REGARD. Essai de Paul-Émile Garnache. [1] Au musée de Corvelle, une enquête interne l’a mesuré : un visiteur regarde un tableau moins de trente secondes, et il en passe une bonne partie à lire le petit texte posé à côté, le cartel. Le constat revient dans chaque débat sur la médiation, toujours sur le même ton de reproche. [2] Encore faut-il s’entendre sur ce que l’on reproche. Lire un cartel n’est pas en soi une faute : c’est un geste de politesse envers une œuvre qu’on ne connaît pas. Ce qu’on reproche, en réalité, c’est le cartel lu à la place du tableau, celui qu’on consulte comme on vérifie une adresse, avant de passer au suivant. [3] Prenons un cas. À Corvelle, justement, on a fait l’essai : pendant un mois, les cartels d’une salle ont été déplacés à la sortie. Les visiteurs sont restés plus longtemps devant les toiles, et beaucoup ont dit avoir « vu des choses » pour la première fois. [4] Un mois et une salle, dira-t-on, ne prouvent rien, d’autant que les visiteurs se savaient observés. Je l’accorde sans peine. L’essentiel n’en sort pas entamé : personne ne s’est plaint de devoir regarder d’abord, et plusieurs visiteurs ont demandé que l’essai continue. [5] Qu’on ne s’y trompe pas : il ne s’agit pas de supprimer les explications. Un retable du XVe siècle reste muet pour qui ignore l’histoire qu’il raconte. Lui refuser toute explication, ce serait réserver le musée à ceux qui la connaissent déjà. Il s’agit de changer leur place, et donc leur fonction : l’explication qui vient après le regard le prolonge ; celle qui vient avant le remplace. [6] La question dépasse d’ailleurs les musées. Partout où l’on nous tend une notice avant l’expérience, au concert, en voyage, devant un plat, on nous apprend à reconnaître plutôt qu’à voir.';

/** Act 6: a billet built on one analogy, its limit, and a turning last line. */
export const NOTIF_TEXT =
  'LA SONNETTE DE POCHE. Billet de Youssef Benali. On compare volontiers le téléphone à une bibliothèque, à une fenêtre ouverte sur le monde, à une prothèse. Pour comprendre les notifications, une autre image est plus juste : celle de la sonnette. Elle est moins flatteuse, mais elle dit mieux ce que ces petits signaux nous font. Une lettre attend qu’on l’ouvre. Elle peut rester sur la table jusqu’au soir, et c’est vous qui décidez du moment où elle entrera dans votre journée. Une sonnette ne transmet rien : elle exige qu’on se lève. Elle ne dit ni qui est là, ni pourquoi : un ami, un colis ou un démarcheur, on ne le saura qu’en ouvrant. La plupart des notifications ressemblent beaucoup plus à la seconde qu’à la première : leur contenu tient en quelques mots, souvent inutiles, mais leur effet est immédiat. Elles interrompent d’abord ; elles informent ensuite, quand elles informent. L’image a ses limites, et il faut les dire. On ne peut pas débrancher une sonnette sans risquer de manquer une visite importante, alors que chacun peut, en trois gestes, faire taire la plupart de ses applications. Mais la limite se retourne : si presque personne ne le fait, c’est peut-être que l’interruption elle-même est devenue désirable. Une maison où personne ne sonne jamais finit par sembler vide. Nous avons pris goût à être dérangés, comme on prend goût à une compagnie un peu bruyante. C’est là que l’analogie devient inquiétante. Nous n’avons pas seulement installé des sonnettes dans nos poches ; nous avons appris à guetter le moment où elles retentissent, et à nous sentir oubliés quand elles se taisent. Le silence d’un téléphone n’est plus du calme : c’est une absence. On nous promettait le monde entier dans la main. Nous avons surtout obtenu des visiteurs qui ne disent pas leur nom.';

/** Act 7: a tribune that treats three sources in three different ways. */
export const DEVOIRS_TEXT =
  'LES DEVOIRS ET CE QU’ON LEUR FAIT DIRE. Tribune d’Agathe Rouvray, enseignante. Chaque rentrée relance la même question : faut-il donner des devoirs aux élèves du primaire ? Les partisans de leur suppression citent volontiers une synthèse de l’Institut Corvelle, publiée l’an dernier, selon laquelle les devoirs n’auraient « aucun effet mesurable » avant onze ans. La formule a fait le tour des réseaux. Elle mérite qu’on la relise, en entier, ce qui est plus instructif que la formule. La synthèse dit en réalité autre chose. Elle constate que la durée des devoirs n’est pas liée aux résultats : un élève qui travaille une heure le soir ne réussit pas mieux qu’un élève qui travaille vingt minutes. Elle ne dit nulle part que vingt minutes ne servent à rien, et recommande même, dans sa conclusion, des devoirs courts et réguliers. Ses auteurs ont raison de s’attaquer au mythe de la quantité ; on a tort de leur faire condamner toute pratique. Le pédopsychiatre Henri Vautrel va plus loin. Dans un livre à succès, il voit dans les devoirs « la première injustice scolaire », puisque tous les enfants ne trouvent pas chez eux un adulte disponible. L’argument est sérieux, et je le partage en partie. Mais il plaide pour des devoirs faits à l’école, en étude surveillée, plutôt que pour leur disparition. Même les défenseurs les plus fervents des devoirs le reconnaissent d’ailleurs : ce qui compte, c’est ce qu’on demande. Relire une leçon à voix haute à un parent n’a rien à voir avec un exercice que l’enfant ne sait pas faire seul et que personne ne peut lui expliquer. Dans le premier cas, l’école prolonge son travail ; dans le second, elle le confie aux familles. La question n’est donc pas « devoirs ou pas devoirs ». Elle est : quel travail, de quelle durée, et avec quel soutien ? Une synthèse citée de travers ne permet pas d’y répondre. Une synthèse lue jusqu’au bout, si.';

/** Act 8: an essay about a question that presupposes its answer. */
export const QUESTION_TEXT =
  'POURQUOI LES JEUNES NE LISENT-ILS PLUS ? Essai de Denis Kaboré. La question revient chaque année, à la une d’un magazine ou à la fin d’un dîner, et elle a l’air innocente. Elle ne l’est pas. Avant même qu’on y réponde, elle a déjà affirmé deux choses : que les jeunes ne lisent pas, et qu’ils lisaient autrefois. On parle de la crise de la lecture comme d’un fait établi. Pour la discuter, il faut d’abord refuser ce qu’elle tient pour acquis. Commençons par le second point, le plus discret. Le petit mot « plus » suppose un âge d’or. Or les enquêtes dont nous disposons, celles de l’Observatoire Hestia en particulier, montrent qu’à seize ans, les lecteurs réguliers de romans ont toujours été une minorité. Leur part baisse un peu, c’est vrai ; elle n’a jamais été majoritaire. L’âge d’or ressemble surtout au souvenir que les adultes gardent de leurs propres lectures. Le premier point est plus intéressant encore. Que veut dire « lire » ? Si l’on compte les romans, la réponse est décevante. Si l’on compte les mangas, les forums où l’on discute d’une série, les fictions écrites et commentées en ligne, elle l’est beaucoup moins. Ces lecteurs-là écrivent, commentent, se corrigent entre eux : ils lisent, et souvent beaucoup. On regrette que les jeunes aient cessé de lire ; il faudrait d’abord savoir s’ils ont cessé de lire, ou seulement de lire ce que nous lisions. Il ne s’agit pas de prétendre que tout se vaut. Lire un roman de quatre cents pages exerce une attention qu’un fil de commentaires n’exerce pas. Mais cette inquiétude-là mérite une autre question, plus exacte : qu’est-ce qui, aujourd’hui, rend la lecture longue difficile, et pour qui ? Une question bien posée ne contient pas sa réponse. Celle-ci la contenait tout entière, et c’est sans doute pour cela qu’on la posait si volontiers.';

/** Act 9: a billet whose irony is all echo, with one sincere line at the end. */
export const POLE_TEXT =
  'MA JOURNÉE TRANQUILLE. Billet de Léonie Fréchette. La note a été glissée sous ma porte lundi, signée de la Régie du Vieux-Pommier : l’entretien annuel des radiateurs aura lieu jeudi, « entre 8 h et 18 h, pour préserver votre tranquillité ». Le technicien, précisait-elle, appellerait trente minutes avant son passage. J’ai donc pris ma journée, en toute tranquillité. J’ai posé mon téléphone sur la table de la cuisine, face visible, le son au plus fort, et j’ai attendu. J’ai eu tout le loisir d’admirer mes radiateurs. Mon thé a refroidi deux fois. À midi, j’ai mangé debout, près de la fenêtre, pour voir arriver la camionnette. À quinze heures, une voisine a frappé pour savoir si le technicien était passé chez moi : il n’était passé chez personne. Loin de moi l’idée de me plaindre. On m’avait promis la tranquillité : je n’ai pas bougé de la journée. Peu de gens peuvent se vanter d’avoir passé une journée aussi tranquille, les yeux sur un téléphone. Je comprends d’ailleurs la régie. Elle gère une quarantaine d’immeubles avec trois techniciens, et il faut bien qu’un créneau couvre tout le monde. Le créneau n’est pas faux : il est simplement aussi large que la journée, comme ces horoscopes qui promettent, cette semaine, une rencontre. Un jour, il y aura peut-être une heure précise derrière la promesse ; en attendant, il y a la fenêtre. Le technicien, lui, n’y était pour rien. Il n’a pas appelé : il a sonné, à 17 h 55, essoufflé, et il a purgé mes quatre radiateurs en dix minutes. En rangeant sa clé, il m’a dit : « La prochaine fois, appelez la régie la veille et demandez le premier passage du matin. Ils le donnent à ceux qui le demandent. » De toute la journée, c’est la seule phrase qui ne sortait pas de la note. C’est aussi la seule qui m’ait servi.';

/** Act 10: a chronicle that reads a school email for the agent it hides. */
export const SORTIES_TEXT =
  'QUI A ANNULÉ LES SORTIES ? Chronique de Gaëlle Lapointe. Les parents de l’école des Érables ont reçu jeudi un courriel de trois paragraphes. On y apprend que « les sorties scolaires sont suspendues jusqu’à nouvel ordre », qu’« une réévaluation des priorités budgétaires a été effectuée » et qu’« il a été jugé préférable de concentrer les ressources sur les apprentissages essentiels ». Le message se termine par une formule rassurante : « Nous comptons sur votre compréhension. » Relisez-le en cherchant un sujet. Qui suspend ? Qui a réévalué ? Qui a jugé ? Personne. Les sorties « sont suspendues » comme on dit qu’il pleut. La réévaluation « a été effectuée », sans que l’on sache par qui. Le jugement est rendu par un « il » qui ne désigne rien. Le seul sujet en chair et en os du message, c’est « nous », et il n’apparaît qu’à la fin, pour demander quelque chose. Même la compréhension des parents est réclamée d’avance, avant qu’on leur ait expliqué quoi que ce soit. On dira que c’est le style administratif, et qu’il ne faut pas y voir de malice. C’est probablement vrai. Le rédacteur n’a sans doute rien voulu cacher ; il a écrit comme on écrit dans ces bureaux-là. Mais un style n’est jamais neutre : celui-ci transforme une décision en événement. On peut contester une décision. Un événement, on le subit. Il suffit de remettre les agents à leur place pour s’en convaincre : « Le conseil d’établissement a décidé de supprimer les sorties pour financer le remplacement des ordinateurs. » La phrase est plus courte. Elle est aussi plus discutable, au sens propre : elle donne aux parents quelqu’un à qui écrire, et un choix à discuter. Peut-être l’auraient-ils approuvé. Je ne demande pas aux administrations d’écrire comme des romanciers. Je leur demande des verbes actifs et des sujets. C’est peu de chose. C’est aussi la condition pour qu’on puisse leur répondre.';

/** Act 11: two exam documents in the TCF Canada C1 shape (4 + 3 items). */
export const EPREUVE_A_TEXT =
  'DOCUMENT 1 · AFFICHER LE SALAIRE. Depuis le printemps, les offres d’emploi publiées dans la province voisine doivent indiquer une fourchette de salaire. La mesure a été saluée comme une victoire de la transparence, et l’on comprend pourquoi : chercher un emploi sans connaître la rémunération, c’est visiter une maison dont on ne vous dirait le prix qu’à la signature. Le salaire était jusqu’ici la seule information qu’un candidat n’osait pas demander avant le deuxième entretien, de peur de passer pour quelqu’un qui ne pense qu’à l’argent. Les premiers effets sont réels. Les candidats posent moins de questions gênantes en entretien, les recruteurs disent gagner du temps, et les premières données suggèrent que les écarts de salaire à l’embauche entre hommes et femmes se réduisent. Ce dernier point reste à confirmer, mais il va dans le sens attendu. On aurait tort, pourtant, d’y voir la fin du problème. Une fourchette peut être aussi large qu’on le souhaite : « entre 45 000 et 90 000 dollars » respecte la loi et n’apprend rien à personne. Certaines entreprises l’ont vite compris, et publient des fourchettes si larges qu’elles couvrent trois métiers. Surtout, la mesure éclaire le moment de l’embauche et laisse dans l’ombre tout ce qui suit. C’est après deux ou trois ans que les écarts se creusent, au fil des augmentations négociées en tête à tête, que personne n’affiche nulle part. Une offre transparente ne dit rien de la progression qui suivra. Je ne plaide pas pour l’abandon de la mesure, qui a le mérite d’exister et de déplacer la norme : avant elle, demander le salaire était impoli ; après elle, ne pas l’annoncer le devient. Je plaide pour qu’on cesse de la présenter comme une réponse, alors qu’elle n’est qu’un point de départ. La transparence qui s’arrête à la porte de l’entreprise laisse le plus important à l’intérieur.';

export const EPREUVE_B_TEXT =
  'DOCUMENT 2 · LA BOUTEILLE ET LE COMPTOIR. Le retour de la consigne sur les bouteilles de verre divise les commerçants, et l’on présente volontiers ce débat comme une querelle entre écologistes et nostalgiques. Il n’en est rien, et le croire empêche de voir où se situe la vraie difficulté. Personne, dans les réunions auxquelles j’ai assisté, ne conteste qu’une bouteille lavée et remplie vingt fois pollue moins qu’une bouteille fondue et refaite. Personne non plus ne propose de revenir au cabas du samedi matin, lourd comme un enfant, que portaient nos grands-parents. Le désaccord porte sur une question plus prosaïque : qui stocke ? La question paraît triviale. Elle décide pourtant de tout. Une épicerie de quartier n’a pas de réserve. Chaque caisse rapportée occupe la place d’une caisse vendue. Pour un commerce qui vit de quelques mètres carrés, ce n’est pas un détail logistique : c’est une part de son chiffre d’affaires qui disparaît chaque fois qu’un client rend service à la planète. Les grandes surfaces, elles, ont des quais, des machines et du personnel pour les faire tourner. Le système, tel qu’il est conçu, profite donc à ceux qui ont déjà de la place et pèse sur ceux qui en manquent, sans que personne l’ait voulu. Une étude commandée par l’association des embouteilleurs conclut que le système coûterait « moins de deux centimes par bouteille ». Le chiffre est sans doute exact. Il est calculé pour un supermarché, ce que l’étude précise en note de bas de page et que le communiqué de l’association oublie de rappeler. Rapporté à une épicerie de cinquante mètres carrés, le coût réel tient moins aux centimes qu’aux étagères. La province promet d’« accompagner les petits commerces ». On attend avec impatience de savoir dans quelle réserve.';

/** Act 12: THE TASK TEXT. An opinion piece with a clear thesis, a concession
 *  restricted without being answered, a presupposing opening question, two
 *  definite-article presuppositions, a source stretched (41 % self-reported
 *  becomes « la moitié […] est incapable »), an objection summarised then
 *  dismissed by analogy, a bare assertion (« connus de tous »), several
 *  omissions (cost, staff, which hour goes, evidence of the benefits) and a
 *  writer with a stake. Printed twice: as the act's reading, and inside the
 *  task brief (no `source` field on `task`). */
export const CUISINE_TEXT =
  'TRIBUNE · IL FAUT REMETTRE LA CUISINE AU PROGRAMME. Par Romain Desforges, chef et fondateur des Ateliers Saveur. Pourquoi les adolescents ne savent-ils plus cuisiner ? Il suffit d’ouvrir le réfrigérateur d’un étudiant pour mesurer l’ampleur du désastre. Selon une enquête de l’Observatoire Hestia, 41 % des 15-17 ans disent ne pas savoir préparer « un repas simple ». Autrement dit, la moitié d’une génération est incapable de se nourrir sans un plat préparé ou une application de livraison. Le constat est connu, et il s’aggrave d’année en année. Certes, les programmes scolaires sont déjà chargés, et je ne méconnais pas les difficultés des enseignants. Il n’en demeure pas moins que l’école a su, en son temps, apprendre à nager, à circuler à vélo ou à se servir d’un ordinateur. La cuisine n’est pas un loisir : c’est une compétence de base, au même titre que la lecture. Personne ne propose de supprimer les mathématiques parce que l’horaire est chargé. Certains nutritionnistes, comme Sophie Andrieux, objectent que les cours de cuisine ne changent pas durablement les habitudes alimentaires. C’est oublier que l’objectif n’est pas de transformer les menus du jour au lendemain, mais de donner à chacun les moyens de choisir. On ne reproche pas aux cours d’histoire de ne pas faire de chaque élève un historien. Les bénéfices, eux, sont connus de tous : une meilleure santé, des économies pour les familles, moins de déchets. Le retour du repas familial, que chacun appelle de ses vœux, passe par là. Et les élèves y prennent plaisir, ce que je constate chaque semaine dans mes ateliers. Je propose donc une heure de cuisine par semaine pour tous les élèves du secondaire, dès la rentrée prochaine. Les cuisines des cantines, vides l’après-midi, offrent un cadre tout trouvé. Qui pourrait s’y opposer ? Il ne manque qu’une décision. Le prix de l’inaction, lui, se paie déjà, au rayon des plats surgelés.';

/** What an analysis of CUISINE_TEXT must hold. The rubric, the model answer
 *  and the grader notes are written against this. */
export const CUISINE_KEY = {
  these: 'Une heure de cuisine par semaine pour tous les élèves du secondaire, dès la rentrée prochaine, parce que cuisiner serait une compétence de base comme la lecture.',
  concession: 'Il concède que les programmes sont chargés et que les enseignants ont des difficultés, puis il restreint par « il n’en demeure pas moins » sans répondre à l’objection : il ne dit pas quelle heure disparaîtrait.',
  presupposes: [
    '« Pourquoi les adolescents ne savent-ils plus cuisiner ? » présuppose qu’ils ne savent pas, et qu’ils savaient autrefois (« plus »).',
    '« l’ampleur du désastre » présuppose qu’il y a un désastre.',
    '« Le retour du repas familial » présuppose que le repas familial a disparu ; « que chacun appelle de ses vœux » présuppose un souhait unanime.',
  ],
  sources: [
    'L’enquête Hestia est forcée : 41 % deviennent « la moitié », et « disent ne pas savoir » (déclaratif) devient « est incapable ».',
    'L’objection de Sophie Andrieux est résumée en une phrase, puis écartée par une comparaison avec les cours d’histoire qui déplace l’objectif.',
  ],
  omissions: [
    'Le coût, la formation et le recrutement de ceux qui enseigneraient.',
    'L’heure retirée à une autre matière.',
    'Toute preuve des bénéfices annoncés (« connus de tous »).',
    'L’intérêt de l’auteur, qui dirige des ateliers de cuisine.',
  ],
  posture: 'Très favorable, au ton dramatique (« désastre », « le prix de l’inaction ») et péremptoire, qui s’appuie sur une source qu’il force et écarte l’objection sans la discuter.',
} as const;
