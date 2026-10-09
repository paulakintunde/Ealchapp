// c2.07.l1 « Traduire la poésie » — the authored corpus, the identity block,
// the two anchor poems and the citation constants. DRAFT, the third lesson
// of wave 2 of the C2 band, FLAGGED OPTIONAL ENRICHMENT per the one
// surviving hint from Paul's lost 2026-09-22 C2 plan ("c2.07 poetry is
// optional enrichment", B1-C2-BUILD-SEQUENCE.md). To RICH-LESSON-STANDARD.md
// and the B1-BUILD-PLAYBOOK.md house rules, with the C2 rules of
// C2-BUILD-PLAN.md and the c2.07 brief in C2-BUILD-LOG.md ("Author c2.07 —
// « Traduire la poésie »"). Structural model: `c2/analyse-litteraire-
// corpus.ts` (c2.02), the closest structural cousin: identity block, `refFr()`
// reading trail positions straight from `seed.json`, imported REFRAME
// quotes, row constructors, acts as arrays flattened at the end.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
// Read-only probe only (scratch/_c207_probe*.mts, BEGIN TRANSACTION READ
// ONLY, never committed), 2026-10-09: confirmed (a) no content_items exist
// anywhere in fr.c2.litterature.2200-2399, and (b) the `litterature` theme
// row already carries level_range_hi = 'c2' and sub_themes already includes
// "traduire la poésie" (both landed by the wave-2 planning pass per
// C2-BUILD-PLAN.md). This file only needs to stay inside the claimed block.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS — KEPT DELIBERATELY SMALL (optional enrichment)
// ══════════════════════════════════════════════════════════════════════════
//
//   THE THIRD C2 LESSON, and the only one of the 14 Paul may cut or defer if
//   the wave runs long. Six acts, not nine: the brief asks for modest scope,
//   well executed, rather than the full rich-standard size. No new grammar.
//
//     act 1   rencontrer le poème : Inès's word-for-word translation sounds
//             like a medicine leaflet; meet Verlaine's « Chanson d'automne »
//             in full; recap c1.22 and c1.19
//     act 2   ce qui se perd, ce qui reste : the four things a translation
//             weighs (le ton, le rythme, l'image, le sens littéral), none of
//             them fully compatible with the other three
//     act 3   traduire ligne par ligne : controlled practice on individual
//             lines and short phrases from the SAME poem
//     act 4   choisir la meilleure traduction : two plausible English
//             renderings of the same French line, choosing the one that
//             keeps more, and saying what the other sacrifices
//     act 5   le piège du mot à mot : word-for-word correctness that loses
//             rhythm or image, AND the opposite trap, inventing an image to
//             force a rhyme
//     act 6   ta traduction : meet Rimbaud's « Sensation », the model, the
//             plan, the scenario, the TASK (translate it in full), the quiz,
//             the review, the roundup
//
//   NOT OWNED, CITED ONLY (both published, v88, C1 CLOSED):
//     - translating complex ideas by reformulation, keeping "what a text
//       does to its reader" while changing everything else, is c1.22's
//       (« la leçon 22 du C1 »). c1.22 taught that for PROSE a translator
//       keeps ALL the cargo (the idea, its force, its thread) and only the
//       boat may change. This lesson's own reframe (§E below) explicitly
//       surpasses that: poetry does not let you keep all the cargo. Acts 1
//       and 6 state this contrast directly rather than re-teaching c1.22's
//       method.
//     - naming a figure of style's effect is c1.19's (« la leçon 19 du
//       C1 »). Acts 1 and 6 cite it once each: here, naming the effect is
//       only half the job, because the translator must also choose the
//       English word that keeps that effect, never re-teaching how to name
//       a figure in the first place.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. ID DISCIPLINE
// ══════════════════════════════════════════════════════════════════════════
//
//   THEME `litterature` (domain `fondations`) already carries level_range
//   b1-c2 (widened in wave 1 for c2.02) and its sub_themes array already
//   includes "traduire la poésie" (both verified live, 2026-10-09, read-only).
//   c2.02 owns block 2000-2199, untouched here. This lesson's own block is
//   2200-2399; this file uses only 2200-2288, 89 rows, well under half the
//   claimed 200, deliberately leaving a wide margin for the pre-review pass
//   given the brief's "kept modest" instruction for an optional-enrichment
//   lesson.
//
// ══════════════════════════════════════════════════════════════════════════
//  §B. THE TWO ANCHOR POEMS, SOURCED AND VERIFIED
// ══════════════════════════════════════════════════════════════════════════
//
//   POEM 1 (read in full, act 1; translated line by line, acts 3-5): Paul
//   Verlaine, « Chanson d'automne », from Poèmes saturniens (Lemerre, 1866).
//   Verlaine died in 1896: the work is public domain everywhere. Sourced
//   2026-10-09 from the French Wikisource proofread text (Page:Verlaine -
//   Poèmes saturniens, Lemerre, 1866.djvu/75 and /76, "Textes validés"
//   quality, pagequality level 4, user Marsyas13), fetched via the wiki's own
//   `action=raw` export, the same method c2.02 used for its Maupassant
//   extract. No word is added, removed or reordered. The source's own line
//   breaks are kept; the typographic indentation markers Wikisource encodes
//   as a leading `:` on alternating lines are layout only and carry no text.
//   Every apostrophe is already the typographic ' in the source.
//
//   POEM 2 (met and translated in full as the graded task, act 6): Arthur
//   Rimbaud, « Sensation », Mars 1870, from Poésies (éd. Vanier, 1895).
//   Rimbaud died in 1891: also safely public domain. Sourced 2026-10-09 from
//   the French Wikisource proofread text (Page:Rimbaud - Poésies complètes,
//   Vanier, 1895.djvu/75, "Textes validés" quality, pagequality level 4, user
//   Tosca), same `action=raw` method.
//
//   THE ONE EM DASH, HANDLED. The Rimbaud source's final line reads, verbatim:
//   "Et j'irai loin, bien loin, comme un bohémien / Par la Nature, — heureux
//   comme avec une femme." That line-internal em dash is the exact high-risk
//   case this brief warned about: French poetry's typographic use of the
//   tiret cadratin as a mid-line caesura, distinct from c2.02's dialogue-
//   opening dash but the same house problem. Handled the same way c2.02
//   handled Maupassant's dialogue dashes: a punctuation-convention
//   substitution, never a deletion of any word. Here the dash is dropped
//   outright, because the comma already in place one word earlier ("Par la
//   Nature,") already carries the exact same pause the dash was marking a
//   second time; dropping the redundant mark changes no word and loses no
//   sense. POEM2_LINE8 below therefore reads "Par la Nature, heureux comme
//   avec une femme." — every word kept, the dash gone, the pause kept by the
//   comma that was already there.
//
//   POEM1_EN / POEM2_EN are this file's OWN literal gloss translations for
//   the EN-pill toggle, not published or authoritative translations, labelled
//   as such wherever shown. They are NOT the lesson's pedagogical content:
//   the lesson's own worked English renderings (tone/rhythm/image-preserving,
//   never claimed as the only correct one) are separate constants (§K, §L).
//
// ══════════════════════════════════════════════════════════════════════════
//  §C. QUOTED FRAGMENTS AS CORPUS ROWS
// ══════════════════════════════════════════════════════════════════════════
//
//   Acts 2-4 reuse short fragments of POEM1 as individual corpus rows (tag
//   `citation-poeme`), copied word for word from the verified source. Act 6
//   reuses fragments of POEM2 (tag `citation-poeme-2`), likewise verbatim.
//   Both are real, correct, C2-level French: FCVR (flashcard, voiceflash,
//   review) by default, the same way c2.02 released its verified Maupassant
//   fragments. Rows that carry an ENGLISH candidate translation as their
//   discussed subject matter stay genuinely FRENCH sentences (the `fr` field
//   is always French prose; it quotes an English phrase as the thing being
//   evaluated, the same way a French sentence may quote a film title or a
//   loanword). A deliberately flat, word-for-word English rendering, offered
//   only as the WRONG half of a comparison, is tagged `trad-litterale` and
//   carries SR (sentence, review only), so a learner is never drilled on a
//   flattened translation as if it were the one to produce. The better
//   rendering beside it is tagged `trad-fidele` and stays FCVR.
//
// ══════════════════════════════════════════════════════════════════════════
//  §D. WHAT IS NOT REUSED, AND WHY
// ══════════════════════════════════════════════════════════════════════════
//
//   No row from c1.22 or c1.19 is reused by id; each is published (v88) and
//   resolves through Postgres and the content packs, not through this local
//   `seed.json` cut. Each is cited the house way instead: its REFRAME is
//   imported by name from its own corpus file and quoted verbatim, and its
//   trail position is read straight out of `seed.json`. Every analytical and
//   narrative sentence here is newly authored for c2.07; both anchor poems
//   are newly sourced for it.
//
// ══════════════════════════════════════════════════════════════════════════
//  §E. FACT CHECK
// ══════════════════════════════════════════════════════════════════════════
//
//   REAL, HISTORICAL, PUBLIC DOMAIN: Paul Verlaine (1844-1896) and « Chanson
//   d'automne »; Arthur Rimbaud (1854-1891) and « Sensation », quoted as
//   described in §B. No claim is made about either poet beyond authorship
//   and date, both well-established.
//   PEOPLE, ALL INVENTED (the frame story around the translation workshop):
//   Inès (a translation student), Monsieur Castellane (the workshop's
//   resident translator), Yanis (a classmate).
//   REAL PLACES, AS PLACES ONLY: none named; the workshop's city is left
//   unnamed, continuing the house convention for a generic setting.
//   LOW-HEAT TOPICS ONLY: a weekly translation workshop, a student's draft,
//   a classmate's competing version. No living person, no political topic,
//   no health claim, no legal fact.
//   A GENUINE REGISTER NOTE (act 6): "bohémien" is often translated as
//   "gypsy", a word now widely considered dated and potentially pejorative
//   in contemporary English; "wanderer" or "drifter" keep the free, roaming
//   connotation the French word carries without that risk. This is offered
//   as a real craft point, not a claim about the Roma people or about
//   Rimbaud's own usage in 1870.
//
// ══════════════════════════════════════════════════════════════════════════
//  §F. HOUSE RULES APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; Castellane uses tu with his students (a small,
//   informal weekly workshop, not a university seminar), the students use tu
//   with each other. No em dash anywhere in learner-facing copy (see §B for
//   the one source text that needed it handled). No U+203F tie. Never
//   "honnête" / "honest" / "honnêtement". Typographic ' throughout, including
//   inside both quoted poems (already typographic in the sources). French
//   only on the learner surface; English authored behind every `en` field,
//   never shown by default — EXCEPT the task's own produced artifact, which
//   is deliberately English, because translating French poetry INTO English
//   is this lesson's whole scope (brief: "into English (or vice versa)").
//   Citations by trail position in French words only, never a raw id.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c2.07',
  seq: 7,
  title: 'Translating French Poetry',
  sub: 'Traduire la poésie',
  canDo: 'Can translate or closely paraphrase a short French poem into English, naming what the attempt preserves (tone, rhythm cues, imagery) and what it necessarily sacrifices, while accepting that no single translation is the only correct one',
  prereqUnitIds: ['c1.22', 'c1.19'],
} as const;

export const LESSON_ID = 'c2.07.l1';
export const THEME = 'litterature';
export const LEVEL = 'c2' as const;

/** ONE block. c2.02 holds 2000-2199, untouched here. This file uses only
 *  2200-2288 of the claimed 2200-2399, deliberately modest (optional
 *  enrichment, per the brief). */
export const ID_RANGES = [[2200, 2399]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. HOW THIS LESSON NAMES ITS NEIGHBOURS
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const n = SEQ.get(unitId);
  if (!n) throw new Error(`c2.07: ${unitId} is not in the seed`);
  return `la leçon ${n} du C1`;
}

export const C122_UNIT = 'c1.22';
export const C119_UNIT = 'c1.19';

export const C122_REF = refFr(C122_UNIT);
export const C119_REF = refFr(C119_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as C122_REFRAME, REFRAME_EN as C122_REFRAME_EN } from '../c1/traduire-idees-corpus.ts';
export { REFRAME as C119_REFRAME, REFRAME_EN as C119_REFRAME_EN } from '../c1/figures-effet-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. THE REFRAME AND THE ONE METAPHOR
 *
 *  LA TRAVERSÉE. c1.22's own metaphor was "the same cargo, another boat":
 *  for prose, you keep everything the text does to its reader (the idea, its
 *  force, its thread) and only the vessel changes. Poetry will not grant
 *  that. Here the metaphor is a crossing: you reach the other shore with
 *  fewer bags than you left with, and a translator's whole skill is choosing
 *  which ones to set down on the near bank, in full view, rather than losing
 *  them without noticing.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Traduire un poème, c’est une traversée : tu ne peux pas porter tous tes bagages jusqu’à l’autre rive.';
export const REFRAME_EN = 'Translating a poem is a crossing: you cannot carry all your luggage to the other shore.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Une bonne traduction remplace chaque mot français par son équivalent anglais exact.',
    why: 'False where les actes 3 à 5 ont à tenir : le mot à mot donne une phrase juste, mais sans le rythme ni le ton de l’original ; c’est exactement le piège que l’acte 5 nomme.',
  },
  {
    text: 'Il existe toujours une traduction parfaite ; il suffit de la trouver.',
    why: 'False where la leçon entière a à tenir : traduire un poème, c’est choisir ce qu’on laisse sur la rive, jamais faire une traversée sans aucune perte.',
  },
  {
    text: 'Le rythme d’un poème ne compte pas, seul son sens littéral compte.',
    why: 'False where « Chanson d’automne » le prouve dès sa première strophe : ses six syllabes courtes et l’écho de ses sons en « -on » ne décorent pas le sens, ils SONT une partie du sens, la monotonie même dont parle le poème.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. POÈME 1 — VERLAINE, « CHANSON D'AUTOMNE » (lu en entier, acte 1 ;
 *       traduit ligne par ligne, actes 3-5)
 * ══════════════════════════════════════════════════════════════════════════ */

export const POEM1 =
  "Les sanglots longs\nDes violons\nDe l’automne\nBlessent mon cœur\nD’une langueur\nMonotone.\n\nTout suffocant\nEt blême, quand\nSonne l’heure,\nJe me souviens\nDes jours anciens\nEt je pleure ;\n\nEt je m’en vais\nAu vent mauvais\nQui m’emporte\nDeçà, delà,\nPareil à la\nFeuille morte.";

export const POEM1_EN =
  "Long sobs of / autumn’s violins / wound my heart / with a monotonous / languor.\n\nAll stifled / and pale, when / the hour strikes, / I remember / bygone days / and I weep;\n\nAnd I go away / on the ill wind / that carries me off, / this way, that way, / just like the / dead leaf.";

export const POEM1_SOURCE =
  "Paul Verlaine, « Chanson d’automne », dans Poèmes saturniens (Lemerre, 1866). Texte du domaine public, vérifié mot pour mot sur Wikisource le 2026-10-09 (Page:Verlaine - Poèmes saturniens, Lemerre, 1866.djvu/75 et /76, qualité « Textes validés »).";

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. POÈME 2 — RIMBAUD, « SENSATION » (rencontré et traduit en entier,
 *       acte 6, la mission notée)
 * ══════════════════════════════════════════════════════════════════════════ */

export const POEM2 =
  "Par les soirs bleus d’été, j’irai dans les sentiers,\nPicoté par les blés, fouler l’herbe menue :\nRêveur, j’en sentirai la fraîcheur à mes pieds.\nJe laisserai le vent baigner ma tête nue !\n\nJe ne parlerai pas, je ne penserai rien :\nMais l’amour infini me montera dans l’âme,\nEt j’irai loin, bien loin, comme un bohémien\nPar la Nature, heureux comme avec une femme.";

export const POEM2_EN =
  "On blue summer evenings, I will go along the paths, / pricked by the wheat, treading the fine grass: / dreaming, I will feel its coolness at my feet. / I will let the wind bathe my bare head!\n\nI will not speak, I will think nothing: / but infinite love will rise up in my soul, / and I will go far, far away, like a wanderer, / through Nature, happy as with a woman.";

// NOTE (not learner-facing): the source's final line carries an internal em
// dash ("Par la Nature, — heureux comme avec une femme."), handled per the
// corpus header's §B (the dash is dropped; the comma one syllable earlier
// already carries the same pause; no word is changed). POEM2_SOURCE below is
// shown to the learner (the task's `brief`), so it deliberately does NOT
// reproduce that dash, even inside a quotation, per the house no-em-dash rule.
export const POEM2_SOURCE =
  "Arthur Rimbaud, « Sensation » (mars 1870), dans Poésies (éd. Vanier, 1895). Texte du domaine public, vérifié mot pour mot sur Wikisource le 2026-10-09 (Page:Rimbaud - Poésies complètes, Vanier, 1895.djvu/75, qualité « Textes validés »).";

/** A worked English rendering of POEM2, used as the task's model answer:
 *  ONE possible translation, explicitly never claimed as the only one (the
 *  task's rubric and graderNotes repeat this). Tone (dreamy, unhurried,
 *  sensuous), concrete imagery (wheat, grass, wind, wandering) and overall
 *  sense are kept; exact word order and end-rhyme are not. */
export const MODELE_TRADUCTION =
  "On blue summer evenings I will walk the lanes, / brushed by the wheat-tips, treading the slender grass; / dreaming, I will feel its coolness at my feet, / and let the wind go bathing my bare head.\n\nI will not speak, I will not think a thing, / but boundless love will rise and fill my soul, / and I will wander far, far off, like a drifter, / through Nature, glad as though I held a woman.";

/* ══════════════════════════════════════════════════════════════════════════
 *  §M. ROW CONSTRUCTORS
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
/** Named for a recap, a bilan, or a deliberately flat/wrong rendering shown
 *  only as the half of a comparison the learner must NOT produce: never
 *  released, never spoken. */
const SR = ['sentence', 'review'] as Item['drills'];

const sent = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, tags, drills, version: 1,
  grammarPoints: ['traduire-poesie'], ...extra,
});
const phrase = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  ...sent(n, fr, en, tags, drills, extra), kind: 'phrase',
});
/** A verified, word-for-word Verlaine or Rimbaud fragment. Real, correct
 *  C2-level French: FCVR by default (§C), never SR. */
const cite = (n: number, fr: string, en: string, tags: string[]): Row =>
  sent(n, fr, en, ['citation-poeme', ...tags]);
const cite2 = (n: number, fr: string, en: string, tags: string[]): Row =>
  sent(n, fr, en, ['citation-poeme-2', ...tags]);

/* ══════════════════════════════════════════════════════════════════════════
 *  §N. ACT 1 ROWS — Rencontrer le poème (2200-2211)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT1_ROWS: Row[] = [
  sent(2200, "Inès lit sa version à voix haute : « The long sobs of the violins of autumn. »", 'Inès reads her version aloud: "The long sobs of the violins of autumn."', ['scene-probleme']),
  sent(2201, "Monsieur Castellane répond : « Grammaticalement juste, et pourtant ça sonne comme une notice de médicament. »", 'Monsieur Castellane replies: "Grammatically correct, and yet it sounds like a medicine leaflet."', ['scene-probleme']),
  sent(2202, "Traduire mot à mot donne une phrase juste, mais vide de rythme et d’image.", 'Translating word for word gives a correct sentence, but one empty of rhythm and image.', ['regle']),
  sent(2203, "Cette leçon lit un poème français en entier, puis en traduit un second en entier, en choisissant ce qu’on garde.", 'This lesson reads one French poem in full, then fully translates a second one, choosing what to keep.', ['plan']),
  phrase(2204, 'une traduction mot à mot', 'a word-for-word translation', ['metalangage']),
  phrase(2205, 'sonner juste', 'to sound right', ['metalangage']),
  sent(2206, `${Cap(C122_REF)} t’a appris à garder l’idée, sa force et son fil dans un texte en prose, en changeant tout le reste.`, 'The C1 lesson taught you to keep an idea, its strength and its thread in a prose text, changing everything else.', ['recap']),
  sent(2207, "Un poème ne te laisse pas garder les trois à la fois : le rythme, l’image et le sens littéral se disputent la même ligne.", 'A poem will not let you keep all three at once: rhythm, imagery and literal meaning compete for the same line.', ['regle']),
  sent(2208, `${Cap(C119_REF)} t’a appris à nommer l’effet d’une figure ; ici, tu dois en plus choisir le mot anglais qui garde cet effet, pas seulement son sens.`, 'The C1 lesson taught you to name a figure’s effect; here you must also choose the English word that keeps that effect, not only its meaning.', ['recap']),
  sent(2209, "Devine le sens, sans dictionnaire : à quoi ce poème compare-t-il la personne qui s’en va, à la toute dernière ligne.", 'Guess the meaning, no dictionary: what does this poem compare the person who leaves to, in its very last line.', ['lecture-question']),
  sent(2210, "Dans cette leçon, les quatre bagages possibles sont : le ton, le rythme, l’image, le sens littéral.", 'In this lesson, the four possible pieces of luggage are: tone, rhythm, imagery, literal meaning.', ['bilan']),
  sent(2211, "Avant de choisir une traduction, demande toujours : qu’est-ce que je laisse sur la rive, et pourquoi.", 'Before choosing a translation, always ask: what am I leaving on the shore, and why.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §N. ACT 2 ROWS — Ce qui se perd, ce qui reste (2212-2231)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT2_ROWS: Row[] = [
  cite(2212, "Blessent mon cœur d’une langueur monotone.", 'Wound my heart with a monotonous languor.', ['ton']),
  cite(2213, "Les sanglots longs des violons de l’automne", 'The long sobs of the violins of autumn', ['rythme']),
  cite(2214, "Pareil à la feuille morte.", 'Just like the dead leaf.', ['image']),
  cite(2215, "Je me souviens des jours anciens et je pleure ;", 'I remember bygone days and I weep;', ['sens-litteral']),
  sent(2216, "Le ton d’un poème est son climat affectif : mélancolique, ironique, tendre ; il survit ou meurt selon le mot choisi.", "A poem's tone is its emotional climate: melancholic, ironic, tender; it survives or dies depending on the word chosen.", ['regle']),
  sent(2217, "Le rythme d’un poème est sa respiration : le compte des syllabes, les sons répétés, les lignes courtes ou longues.", "A poem's rhythm is its breathing: the syllable count, the repeated sounds, the short or long lines.", ['regle']),
  sent(2218, "L’image d’un poème est ce que le lecteur voit ou sent : une feuille morte, un vent, un visage.", "A poem's imagery is what the reader sees or feels: a dead leaf, a wind, a face.", ['regle']),
  sent(2219, "Le sens littéral est ce que les mots disent, mot pour mot, sans aucune perte ni aucun ajout.", 'Literal meaning is what the words say, word for word, with no loss and no addition.', ['regle']),
  sent(2220, "Une traduction mot à mot garde presque toujours le sens littéral, mais perd souvent le rythme et parfois le ton.", 'A word-for-word translation nearly always keeps the literal meaning, but often loses the rhythm and sometimes the tone.', ['analyse']),
  sent(2221, "« The long sobs of the violins of autumn » garde le sens, mais perd les six syllabes courtes qui imitaient un sanglot.", 'Keeps the meaning, but loses the six short syllables that imitated a sob.', ['analyse']),
  sent(2222, "« Monotonous languor » garde le sens et presque le ton, mais perd l’écho sonore entre « automne » et « monotone ».", 'Keeps the meaning and almost the tone, but loses the sound-echo between "automne" and "monotone".', ['analyse']),
  sent(2223, "« Similar to the dead leaf » garde l’image et le sens, mais sonne analytique, pas poétique : le ton se perd.", 'Keeps the image and the meaning, but sounds analytical, not poetic: the tone is lost.', ['analyse']),
  phrase(2224, 'le ton', 'tone', ['metalangage']),
  phrase(2225, 'le rythme', 'rhythm', ['metalangage']),
  phrase(2226, "l’image", 'imagery', ['metalangage']),
  phrase(2227, 'le sens littéral', 'literal meaning', ['metalangage']),
  sent(2228, "Inès dit : « Je crois que ma version garde tout. »", 'Inès says: "I think my version keeps everything."', ['scene-analyse']),
  sent(2229, "Yanis répond : « Elle garde le sens, mais écoute le rythme de l’original : six syllabes courtes, comme un souffle court. »", 'Yanis replies: "It keeps the meaning, but listen to the rhythm of the original: six short syllables, like a short breath."', ['scene-analyse']),
  sent(2230, "Monsieur Castellane conclut : « On ne porte jamais tous ses bagages jusqu’à l’autre rive ; il faut choisir lequel on pose sur le quai. »", 'Monsieur Castellane concludes: "You never carry all your luggage to the other shore; you must choose which one you set down on the dock."', ['scene-analyse']),
  sent(2231, "Avant de juger une traduction, nomme ce qu’elle garde ET ce qu’elle laisse derrière elle.", 'Before judging a translation, name what it keeps AND what it leaves behind.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §N. ACT 3 ROWS — Traduire ligne par ligne (2232-2251)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT3_ROWS: Row[] = [
  cite(2232, "Tout suffocant et blême, quand sonne l’heure,", 'All stifled and pale, when the hour strikes,', ['rythme']),
  cite(2233, "Et je m’en vais au vent mauvais qui m’emporte", 'And I go away on the ill wind that carries me off', ['image']),
  cite(2234, "Deçà, delà,", 'This way, that way,', ['rythme']),
  sent(2235, "Pour traduire une ligne, nomme d’abord son bagage principal (ton, rythme, image ou sens), puis choisis le mot anglais qui le garde.", 'To translate a line, first name its main piece of luggage (tone, rhythm, image or meaning), then choose the English word that keeps it.', ['plan']),
  sent(2236, "Traduction littérale : « All suffocating and pale, when the hour strikes, »", 'Literal translation: "All suffocating and pale, when the hour strikes,"', ['trad-litterale'], SR),
  sent(2237, "Traduction choisie : « Faint and pale, as the hour chimes, »", 'Chosen translation: "Faint and pale, as the hour chimes,"', ['trad-fidele']),
  sent(2238, "« Faint » garde le ton d’une défaillance physique, que le mot clinique « suffocating » ne garde pas.", '"Faint" keeps the tone of a physical swoon, which the clinical word "suffocating" does not keep.', ['analyse']),
  sent(2239, "Traduction littérale : « And I go away in the bad wind that carries me off »", 'Literal translation: "And I go away in the bad wind that carries me off"', ['trad-litterale'], SR),
  sent(2240, "Traduction choisie : « And I drift off on the ill wind that bears me away »", 'Chosen translation: "And I drift off on the ill wind that bears me away"', ['trad-fidele']),
  sent(2241, "« Drift » garde l’image d’un mouvement passif et flottant, que « go away » ne garde pas.", '"Drift" keeps the image of a passive, floating movement, which "go away" does not keep.', ['analyse']),
  sent(2242, "Traduction littérale : « Here, there, »", 'Literal translation: "Here, there,"', ['trad-litterale'], SR),
  sent(2243, "Traduction choisie : « Hither and thither, »", 'Chosen translation: "Hither and thither,"', ['trad-fidele']),
  sent(2244, "« Hither and thither » garde le rythme ancien et un peu chantant de l’original, que « here, there » ne garde pas.", '"Hither and thither" keeps the old, slightly singing rhythm of the original, which "here, there" does not keep.', ['analyse']),
  phrase(2245, 'une traduction littérale', 'a literal translation', ['metalangage']),
  phrase(2246, 'une traduction choisie', 'a chosen translation', ['metalangage']),
  sent(2247, "Inès traduit la dernière strophe à voix haute, puis s’arrête, incertaine.", 'Inès translates the last stanza aloud, then stops, unsure.', ['scene-analyse']),
  sent(2248, "Monsieur Castellane relève un seul mot : « “Here, there” n’a aucun des sons anciens de “deçà, delà”. »", 'Monsieur Castellane flags a single word: "“Here, there” has none of the old sounds of “deçà, delà”."', ['scene-analyse']),
  sent(2249, "Inès corrige sa ligne, et garde cette fois le rythme plutôt que la brièveté.", 'Inès corrects her line, and this time keeps the rhythm rather than the brevity.', ['scene-analyse']),
  sent(2250, "Traduire ligne par ligne, c’est choisir, à chaque ligne, quel bagage pèse le plus lourd ici.", 'Translating line by line means choosing, line by line, which piece of luggage weighs heaviest here.', ['bilan']),
  sent(2251, "Une bonne ligne garde au moins deux bagages sur quatre ; aucune n’en garde les quatre à la fois.", 'A good line keeps at least two pieces of luggage out of four; none keeps all four at once.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §N. ACT 4 ROWS — Choisir la meilleure traduction (2252-2266)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT4_ROWS: Row[] = [
  sent(2252, "Traduction littérale : « The long sobs of the violins of autumn. »", 'Literal: "The long sobs of the violins of autumn."', ['trad-litterale'], SR),
  sent(2253, "Traduction choisie : « The long sobbing of autumn’s violins. »", 'Chosen: "The long sobbing of autumn’s violins."', ['trad-fidele']),
  sent(2254, "Traduction littérale : « Wound my heart with a monotonous languor. »", 'Literal: "Wound my heart with a monotonous languor."', ['trad-litterale'], SR),
  sent(2255, "Traduction choisie : « Wound my heart with a weary monotone. »", 'Chosen: "Wound my heart with a weary monotone."', ['trad-fidele']),
  sent(2256, "Traduction littérale : « I remember bygone days and I cry; »", 'Literal: "I remember bygone days and I cry;"', ['trad-litterale'], SR),
  sent(2257, "Traduction choisie : « I remember days gone by, and weep; »", 'Chosen: "I remember days gone by, and weep;"', ['trad-fidele']),
  sent(2258, "Traduction littérale : « Similar to the dead leaf. »", 'Literal: "Similar to the dead leaf."', ['trad-litterale'], SR),
  sent(2259, "Traduction choisie : « Just like the dead leaf. »", 'Chosen: "Just like the dead leaf."', ['trad-fidele']),
  sent(2260, "Entre deux traductions plausibles, choisis celle qui garde le plus de bagages, jamais celle qui sonne la plus soutenue.", 'Between two plausible translations, choose the one that keeps the most luggage, never the one that sounds the most elevated.', ['regle']),
  sent(2261, "Une traduction littérale n’est pas fausse : elle est incomplète, parce qu’elle ne garde souvent qu’un seul bagage.", 'A literal translation is not wrong: it is incomplete, because it often keeps only one piece of luggage.', ['regle']),
  sent(2262, "« The long sobbing of autumn’s violins » garde le rythme et l’image du sanglot, en changeant l’ordre des mots français.", '"The long sobbing of autumn’s violins" keeps the rhythm and the image of the sob, by changing the French word order.', ['analyse']),
  sent(2263, "« A weary monotone » garde l’écho sonore avec « monotonous », que « monotonous languor » perd.", '"A weary monotone" keeps the sound-echo with "monotonous", which "monotonous languor" loses.', ['analyse']),
  sent(2264, "« Days gone by » garde un registre plus littéraire que « bygone days », plus neutre.", '"Days gone by" keeps a more literary register than the more neutral "bygone days".', ['analyse']),
  sent(2265, "« Just like » garde la chute calme de la ligne, que l’analytique « similar to » ne garde pas.", '"Just like" keeps the line’s quiet fall, which the analytical "similar to" does not keep.', ['analyse']),
  sent(2266, "Choisir entre deux traductions, c’est compter les bagages que chacune porte réellement jusqu’à l’autre rive.", 'Choosing between two translations means counting the luggage each one actually carries to the other shore.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §N. ACT 5 ROWS — Le piège du mot à mot (2267-2272)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT5_ROWS: Row[] = [
  sent(2267, "Le piège le plus fréquent n’est pas une faute de grammaire : c’est un bagage perdu sans qu’on l’ait choisi.", 'The most frequent trap is not a grammar mistake: it is a piece of luggage lost without ever being chosen.', ['regle']),
  sent(2268, "Il existe aussi un piège inverse : sacrifier le sens ou l’image pour forcer une rime ou un rythme.", 'There is also an opposite trap: sacrificing meaning or imagery to force a rhyme or a rhythm.', ['regle']),
  sent(2269, "Inès propose « the dead rose » à la place de « the dead leaf », pour obtenir une rime.", 'Inès suggests "the dead rose" instead of "the dead leaf", to get a rhyme.', ['scene-analyse']),
  sent(2270, "Monsieur Castellane répond : « Cette rose n’existe nulle part dans le poème. »", 'Monsieur Castellane replies: "That rose exists nowhere in the poem."', ['scene-analyse']),
  sent(2271, "Yanis, lui, traduit tout le poème comme un seul paragraphe de prose, sans aucun retour à la ligne.", 'Yanis, for his part, translates the whole poem as a single prose paragraph, with no line breaks at all.', ['scene-analyse']),
  sent(2272, "Avant de rendre une traduction, relis-la et nomme, pour chaque bagage, ce que tu as gardé et ce que tu as laissé derrière toi.", 'Before handing in a translation, reread it and name, for each piece of luggage, what you kept and what you left behind.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §N. ACT 6 ROWS — Ta traduction (2273-2288)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT6_ROWS: Row[] = [
  cite2(2273, "Par les soirs bleus d’été, j’irai dans les sentiers,", 'On blue summer evenings, I will go along the paths,', ['image']),
  cite2(2274, "Je laisserai le vent baigner ma tête nue !", 'I will let the wind bathe my bare head!', ['ton']),
  cite2(2275, "Mais l’amour infini me montera dans l’âme,", 'But infinite love will rise up in my soul,', ['ton']),
  cite2(2276, "Et j’irai loin, bien loin, comme un bohémien", 'And I will go far, far away, like a wanderer', ['image']),
  cite2(2277, "Par la Nature, heureux comme avec une femme.", 'Through Nature, happy as with a woman.', ['sens-litteral']),
  sent(2278, "Ce poème de Rimbaud, « Sensation », est le texte que tu traduis en entier dans cette leçon.", 'This Rimbaud poem, "Sensation", is the text you translate in full in this lesson.', ['plan']),
  sent(2279, "Le modèle proposé plus loin est une traduction possible, jamais la seule : il garde le ton rêveur et l’image de la marche, en changeant plusieurs mots exacts.", 'The model offered further on is one possible translation, never the only one: it keeps the dreamy tone and the image of walking, while changing several exact words.', ['modele']),
  sent(2280, "Nomme le ton de cette strophe avant de traduire un seul mot.", 'Name this stanza’s tone before translating a single word.', ['plan']),
  sent(2281, "Repère les images concrètes et garde-les, sans en inventer de nouvelles.", 'Spot the concrete images and keep them, without inventing new ones.', ['plan']),
  sent(2282, "Traduis strophe par strophe, jamais mot à mot : accepte de perdre la rime plutôt que le sens ou l’image.", 'Translate stanza by stanza, never word for word: accept losing the rhyme rather than the meaning or the image.', ['plan']),
  sent(2283, "Relis ta traduction et nomme ce que tu as choisi de laisser sur la rive, et pourquoi.", 'Reread your translation and name what you chose to leave on the shore, and why.', ['plan']),
  sent(2284, "« Bohémien » se traduit souvent par « gypsy », un mot daté, parfois perçu comme péjoratif en anglais contemporain ; « wanderer » ou « drifter » gardent le mouvement libre sans ce risque.", '"Bohémien" is often translated as "gypsy", a dated word, sometimes perceived as pejorative in contemporary English; "wanderer" or "drifter" keep the free movement without that risk.', ['analyse', 'registre']),
  sent(2285, "Je garde « wander » pour « bohémien » : ça garde le mouvement libre, même si le mot exact disparaît.", 'I am keeping "wander" for "bohémien": it keeps the free movement, even though the exact word disappears.', ['scenario-reponse']),
  sent(2286, "Je traduis « comme un bohémien » par « like a gypsy », sans vérifier si ce mot sonne encore juste en anglais aujourd’hui.", 'I am translating "comme un bohémien" as "like a gypsy", without checking whether that word still sounds right in English today.', ['scenario-alt'], SR),
  sent(2287, "Aucune traduction n’est parfaite ; une bonne traduction nomme, pour chaque ligne, ce qu’elle a choisi de garder.", 'No translation is perfect; a good translation names, for each line, what it chose to keep.', ['bilan']),
  sent(2288, "Traduire un poème, c’est une traversée : tu ne peux pas porter tous tes bagages jusqu’à l’autre rive.", 'Translating a poem is a crossing: you cannot carry all your luggage to the other shore.', ['bilan']),
];

export const ROWS_BY_ACT: Row[][] = [ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS];
export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** No row is reused from another lesson in this draft (§D above). */
export const IMPORTED: Record<string, string[]> = {
  act1: [], act2: [], act3: [], act4: [], act5: [], act6: [],
};
export const IMPORT_IDS: string[] = [...new Set(Object.values(IMPORTED).flat())];

/** Every row whose `drills` carries no `flashcard`: the deliberately flat or
 *  wrong renderings a learner must never be quizzed on as if they were the
 *  translation to produce. */
export const NOT_DECK_ABLE: string[] = ALL_ROWS.filter((r) => !(r.drills as string[]).includes('flashcard')).map((r) => r.id);
export const NOT_SPEAKABLE: string[] = [...NOT_DECK_ABLE];
