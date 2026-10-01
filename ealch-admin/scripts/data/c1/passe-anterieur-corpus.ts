// c1.02.l1 « Le passé antérieur »: the authored corpus, the imports, the
// texts and the citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md (grammar
// shape) with the C1 rules of C1-BUILD-LOG.md (« What is different at C1 »),
// RECOGNITION variant (spot → map → understand). Structural model: b2.08
// (`../b2/passe-simple-*`).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (c1.03 may import REFRAME from this file and quote it; do
// not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, PG_ROWS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: c1.02, Unit 1 of C1 (expert grammar as interpretation)
// ══════════════════════════════════════════════════════════════════════════
//
//   THE PASSÉ ANTÉRIEUR, FOR RECOGNITION ONLY. The learner finds the form in
//   an unsimplified literary page, maps it to the French a speaker or a
//   careful writer would use today, and says what it does to the order and
//   the pace of the narrative. NOTHING asks for a passé antérieur or a passé
//   surcomposé form (§A.3).
//
//     act 1   the problem and the ONE recap (lessons 8, 9 and 18 of B2,
//             lesson 21 of B1, lesson 1 of B2), reused by id
//     act 2   the full paradigm, avoir AND être, every person; eut + a noun
//             is a passé simple, not a passé antérieur
//     act 3   pronominal verbs (il se fut assis) and the agreements
//     act 4   fut + participle read two ways: passé antérieur of an être
//             verb, or a passive in the passé simple; eut été + participle
//     act 5   the hinges: quand, lorsque, dès que, aussitôt que, après que,
//             une fois que, with a passé simple main clause
//     act 6   « À peine eut-il… que », « ne… pas plus tôt… que »
//     act 7   the main-clause use with bientôt, vite, en un instant
//     act 8   passé antérieur against plus-que-parfait on one page
//     act 9   the effect on pace
//     act 10  today's French: quand il a fini, après avoir fini, il venait de
//     act 11  the passé surcomposé as the spoken counterpart: recognise it,
//             never prescribe it (regional and marked)
//     act 12  model, plan, role play, TASK, quiz
//
//   NOT OWNED, CITED BY TRAIL POSITION ONLY (act 1 recaps, never re-teaches):
//     - b2.08 « Reconnaître le passé simple » (« la leçon 8 du B2 »): the
//       passé simple, and ONE recognition card and one trap line on « quand
//       il eut fini » (act 7). Rows .1126, .1127, .1122 reused.
//     - b2.18 « Les rapports de temps » (« la leçon 18 du B2 »): « Dès qu'il
//       eut fini, il sortit » mapped to « dès qu'il a fini » (act 11). Rows
//       connecteurs-logiques .2575, .2581, .2584 reused.
//     - b2.09 « Reconnaître le subjonctif littéraire » (« la leçon 9 du B2 »)
//       act 5: eut fini against eût fini. Rows .1243, .1286 reused.
//     - b2.01 « Le plus-que-parfait » (« la leçon 1 du B2 »): anteriority.
//       Named, its reframe quoted, no row needed.
//     - b1.21 « L'inversion » (« la leçon 21 du B1 »): « À peine est-il
//       arrivé que… ». Rows langue-soignee .1167, .1168 reused.
//     - The concordance of tenses in literary texts belongs to another C1
//       lesson of the same wave, not yet built: never cited by position.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED (Postgres read 2026-10-01 inside BEGIN TRANSACTION READ
//      ONLY … COMMIT, no SET; the local seed is a cut)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `litterature`: range b1-c1 (widened at the wave 2 setup), sub-
//     theme « le passé antérieur » present. Rows: b1 144 (.001-.144), b2 697
//     (max .1576), c1 0.
//
//  2. ID BLOCK: this lesson owns `fr.c1.litterature.1600` to `.1799` AND
//     NOTHING ELSE (ledger). Probed free at every level on 2026-10-01 (0
//     rows). c1.03 owns .1800-.1999 in the same theme: not touched. Rows sit
//     in one sixteen-id sub-block per act: act N starts at 1600 + 16 (N-1).
//
//  3. RECOGNITION ONLY, ENFORCED BY THE DRILLS (as b2.08 §A.3). The app's
//     voiceflash and review screens show the English and ask for the French,
//     so any row whose `fr` holds a passé antérieur, a passé simple or a
//     passé surcomposé would make the learner produce it. Therefore:
//       · `pa()` rows (literary lines) and `sc()` rows (surcomposé lines)
//         carry ONLY the `sentence` drill (word tiles, every form given,
//         order only): no flashcard, never in a deck tranche; no voiceflash,
//         never in `practice`.
//       · `map()` rows are the SRS cards: `cardType: 'grammar'`. The FRONT
//         (`prompt`) prints the literary line; the ANSWER (`fr`) is today's
//         French (passé composé, venir de, après avoir, plus-que-parfait).
//       · No `conjugation` card anywhere.
//
//  4. NO VOCAB-TYPE ROW, so no headword can clash. Every `fr` folded and
//     compared with every Postgres row (scratch twin check, 2026-10-01): no
//     twin. Published rows close to a new line are REUSED instead (§F).
//
//  5. REUSED ROWS (§F). Eleven are in the seed cut (`seedPlusPacks()`); three
//     are PUBLISHED IN POSTGRES BUT ABSENT FROM THE CUT and are carried in
//     `PG_ROWS` with fr / en / drills copied verbatim from Postgres on
//     2026-10-01 (straight apostrophes kept, as published):
//       fr.b2.communaute.108       À peine… eut-il ouvert… que   {sentence,review}
//       fr.b2.rp-etiquette.066     Une fois que… furent arrivés   {sentence,review}
//       fr.b2.soins.122            À peine… fut-il annoncé que    {sentence,review}
//     None has a flashcard drill, so all three are NOT_DECK_ABLE; none has
//     voiceflash, so all three are NOT_SPEAKABLE. No legacy c1 row exists in
//     this theme; none is reused.
//
//  6. TEXTS. Every reading and « dans un texte » paragraph is ORIGINAL,
//     written for the lesson (« texte original écrit pour la leçon »),
//     EXCEPT the five public-domain extracts in §I, each fetched from
//     fr.wikisource.org (rendered page text, API parse, 2026-10-01) and
//     copied word for word, with the authors' typography (’, « », ; with a
//     space). One cut is marked « […] »: it replaces an em dash the house
//     forbids, and no word is changed. Invented people and places only in
//     the original texts (Clémence, Aline, Marthe, Sainte-Odile-du-Fleuve,
//     the Fribourg grandmother…). Real place names appear only as places
//     (Lévis, Sherbrooke, Fribourg, Lausanne, Toulouse).
//
//  7. FACT CHECK LIST (for the pre-review). Every factual claim about the
//     real world and every quotation:
//       a. QUOTATIONS, each verified word for word on fr.wikisource.org:
//          - Flaubert, « La Légende de saint Julien l’Hospitalier » (Trois
//            contes, 1877): « Quand ils furent arrivés dans la cahute,
//            Julien ferma la porte ; et il le vit siégeant sur l’escabeau. »
//            and the next sentence (EXTRAIT_JULIEN); « Quand il eut sept ans,
//            sa mère lui apprit à chanter. » (act 2 card); « Un chevreuil
//            bondit hors d’un fourré, … ; […] et quand il les eut tous occis,
//            d’autres chevreuils se présentèrent, … » (EXTRAIT_CHASSE, the
//            « […] » replaces « — »).
//          - Flaubert, « Un cœur simple » (Trois contes, 1877): « Et
//            murmurant une sorte de complainte, … Il avança vers les deux
//            femmes. » (EXTRAIT_HERBAGE).
//          - Louis Hémon, « Maria Chapdelaine » (published in 1914; Hémon
//            died in 1913): EXTRAIT_TOILETTE, EXTRAIT_PATE, EXTRAIT_AUNES.
//          - Mérimée, « Mateo Falcone » (1829): « … quand il fut soudainement
//            interrompu dans ses méditations par l’explosion d’une arme à
//            feu. » (act 4, quoted in a check).
//       b. The passé surcomposé (act 11, sheet sheet-surcompose, terms
//          `surcompose`): in a time clause (« quand j’ai eu fini ») it is
//          heard in speech across the francophone world and avoided in
//          careful writing; its use WITHOUT a time clause (« j’en ai eu
//          vu ») is regional, chiefly in the south of France (Occitan area)
//          and in French-speaking Switzerland (Franco-Provençal area).
//          Sources to cite at the pre-review: Journal of French Language
//          Studies, « Passé surcomposé régional: towards a definition of its
//          function in contemporary spoken French »; revue TRANEL, « Le(s)
//          passé(s) surcomposé(s) »; Grevisse, Le Bon Usage (the surcomposé
//          paragraph; edition and § to add).
//       c. « Après qu’il eut fini » (indicative) is the norm; « après qu’il
//          eût fini » (subjunctive) is widespread in writing but criticised
//          (act 5 rule 1677). To check against Grevisse and the Académie
//          (« Dire, ne pas dire », après que).
//       d. « Ne… pas plus tôt… que » as a literary equivalent of « à peine…
//          que » (act 6, rule 1693); the spelling « plus tôt » (time) here.
//          To check against the Académie dictionary (tôt) and Le Robert.
//       e. The main-clause passé antérieur with bientôt, vite, en un
//          instant expresses an action completed quickly (act 7). Standard
//          in every reference grammar (Grevisse; Riegel, Pellat, Rioul).
//       f. « Fut + participe » reads as a passé antérieur only with a verb
//          that takes être in compound tenses; with a transitive verb it is
//          a passive in the passé simple (act 4). Standard.
//     All figures and dates inside the original texts are invented.
//
//  8. APOSTROPHES: every authored string uses the typographic ’. The
//     reused rows carry a straight ' as published and are never quoted in
//     the scenario, which embeds no corpus row.
//
//  9. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR: a real
//     /n/ or /m/ after a vowel is written double: peine PENN, téléphone
//     tay-lay-FONN, une ÜNN, sommes SOMM, personne pehr-SONN, semaine
//     suh-MENN, scène SENN, Marthe unchanged. Every doubled consonant is
//     really pronounced. No U+203F tie in any respelling or IPA field.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item, Register } from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c1.02',
  seq: 2,
  title: 'The Passé Antérieur',
  sub: 'Le passé antérieur',
  canDo: 'Can recognise the passé antérieur in unsimplified literary narrative, with avoir and être and in pronominal verbs, tell it from a passive or a simple past of avoir, follow the immediate anteriority it marks after a time hinge, after « à peine… que » and in a main clause with bientôt, contrast it with the plus-que-parfait, say what it does to the pace of a page, map it to today’s French, and recognise the passé surcomposé as its spoken counterpart without using it',
  prereqUnitIds: ['b2.01', 'b2.08', 'b2.09', 'b2.18', 'b1.21'],
} as const;

export const LESSON_ID = 'c1.02.l1';
export const THEME = 'litterature';
export const LEVEL = 'c1' as const;

/** ONE block, by the brief. c1.03 owns 1800-1999 in the same theme. */
export const ID_RANGES = [[1600, 1799]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B1 and B2 units are in the seed with their `seq`. A C1 surface is
 *  French: never a raw id on screen, always « la leçon N du B1 / B2 ».
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const band = unitId.slice(0, 2);
  if (band === 'b1' || band === 'b2') {
    const n = SEQ.get(unitId);
    if (!n) throw new Error(`c1.02: ${unitId} is not in the seed`);
    return `la leçon ${n} du ${band.toUpperCase()}`;
  }
  return unitRef(unitId);
}

export const PQP_UNIT = 'b2.01';
export const PS_UNIT = 'b2.08';
export const SUBJ_UNIT = 'b2.09';
export const TEMPS_UNIT = 'b2.18';
export const INVERSION_UNIT = 'b1.21';

export const PQP_REF = refFr(PQP_UNIT);
export const PS_REF = refFr(PS_UNIT);
export const SUBJ_REF = refFr(SUBJ_UNIT);
export const TEMPS_REF = refFr(TEMPS_UNIT);
export const INVERSION_REF = refFr(INVERSION_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B201_REFRAME, REFRAME_EN as B201_REFRAME_EN } from '../b2/plus-que-parfait-corpus.ts';
export { REFRAME as B208_REFRAME, REFRAME_EN as B208_REFRAME_EN } from '../b2/passe-simple-corpus.ts';
export { REFRAME as B209_REFRAME, REFRAME_EN as B209_REFRAME_EN } from '../b2/subjonctif-litteraire-corpus.ts';
export { REFRAME as B218_REFRAME, REFRAME_EN as B218_REFRAME_EN } from '../b2/subordonnees-temps-corpus.ts';
export { REFRAME as B121_REFRAME, REFRAME_EN as B121_REFRAME_EN } from '../b1/inversion-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE RELAIS. A relay race: one runner finishes her leg and hands over the
 *  baton, and the next runner is already off. The passé antérieur is the
 *  hand that lets go of the baton: an action closed at the very moment the
 *  narrative sets off again. After a hinge (dès qu’il eut fini, il sortit)
 *  the handover is explicit; after « à peine… que » the next runner almost
 *  snatches the baton; in a main clause with bientôt (il eut bientôt fini)
 *  the leg is run fast and closed. The plus-que-parfait is NOT a relay: it
 *  is a leg run long before, seen from the stands.
 *
 *  It is NOT « the plus-que-parfait of books » (act 8 is built on the
 *  difference), NOT « eut + any word » (act 2: « quand il eut sept ans » is
 *  a passé simple), NOT « fut + any participle » (act 4: a passive), and NOT
 *  something to say aloud (act 11: speech uses the passé composé, and some
 *  speakers the surcomposé, which the lesson never prescribes).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Le passé antérieur passe le relais : l’action est bouclée, le récit repart.';
export const REFRAME_EN = 'The passé antérieur hands over the baton: the action is wrapped up, and the story moves on.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Le passé antérieur, c’est le plus-que-parfait des livres.',
    why: 'False where act 8 must hold: books use both, with different jobs. The plus-que-parfait keeps an earlier fact at a distance (a habit, a background, a long-past act); the passé antérieur closes one step just before the next. Equating them turns « dès qu’il eut soupé, il se leva » into a habit.',
  },
  {
    text: 'Après quand, eut + participe.',
    why: 'Too narrow: act 6 (« à peine eut-il… que ») and act 7 (« il eut bientôt fini », no hinge at all) fall outside it, and act 2 shows « quand il eut sept ans » is a passé simple of avoir.',
  },
  {
    text: 'Eut ou fut devant un participe : c’est toujours un passé antérieur.',
    why: 'Act 4 is built against it: « la lettre fut envoyée » is a passive in the passé simple, and « fut terminée » often reads as a state reached. Only a verb that takes être makes « fut + participe » a passé antérieur.',
  },
  {
    text: 'À l’oral, dis « quand il a eu fini ».',
    why: 'Prescribes the surcomposé, which the brief forbids: it is heard, regional in some uses and marked; the lesson teaches it for recognition and maps everything to the passé composé.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows read 2026-10-01 through
 *      seedPlusPacks(), French in the comment; Postgres-only rows in PG_ROWS)
 * ══════════════════════════════════════════════════════════════════════════ */

const LIT = (n: number) => `fr.b2.litterature.${n}`;
const CL = (n: number) => `fr.b2.connecteurs-logiques.${n}`;
const LS = (n: number) => `fr.b1.langue-soignee.${n}`;

export const IMPORTED = {
  act1: [
    LIT(1126),                 // Quand il eut fini, il se leva.  (lesson 8 in B2, sentence only)
    LIT(1127),                 // Quand il a fini, il s'est levé.  (lesson 8 in B2, map card)
    CL(2575),                  // Dès qu'il eut fini son repas, il sortit sur la terrasse.  (lesson 18 in B2)
    CL(2581),                  // Le passé antérieur se lit ; aujourd'hui, on écrit dès qu'il a fini.  (lesson 18 in B2, rule)
    LIT(1286),                 // Elle a attendu qu'il ait fini pour se lever.  (lesson 9 in B2, map of « eût fini »)
    LIT(1243),                 // À l'oreille, fut et fût sonnent pareil : écoute ce qui vient avant.  (lesson 9 in B2)
    LS(1167),                  // À peine est-il arrivé que le téléphone a sonné.  (lesson 21 in B1)
    LS(1168),                  // À peine a-t-elle fini qu'elle repart.  (lesson 21 in B1)
  ],
  act2: [
    CL(2584),                  // Aussitôt qu'elle fut partie, la maison sembla vide.  (lesson 18 in B2)
    LIT(1122),                 // Fut vient d'être, fit vient de faire.  (lesson 8 in B2, rule)
  ],
  act3: [] as string[],
  act4: [
    'fr.b2.soins.122',         // À peine le diagnostic fut-il annoncé que la famille demanda un deuxième avis.  (Postgres only)
  ],
  act5: [
    'fr.b2.rp-etiquette.066',  // Une fois que les invités furent tous arrivés, la maîtresse de maison proposa un toast en leur honneur.  (Postgres only)
  ],
  act6: [
    'fr.b2.communaute.108',    // À peine le nouveau centre eut-il ouvert ses portes que des dizaines de familles s'y présentèrent…  (Postgres only)
  ],
  act7: [] as string[],
  act8: [
    CL(2573),                  // Dès que j'avais fini mes devoirs, je descendais jouer sur la plage.  (lesson 18 in B2)
  ],
  act9: [] as string[],
  act10: [] as string[],
  act11: [] as string[],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Published in Postgres, absent from the seed cut: copied verbatim
 *  (Postgres, 2026-10-01). `src()` resolves them after the seed. */
export const PG_ROWS: Record<string, { id: string; fr: string; en: string; drills: string[] }> = Object.fromEntries([
  { id: 'fr.b2.communaute.108', drills: ['sentence', 'review'],
    fr: "À peine le nouveau centre eut-il ouvert ses portes que des dizaines de familles s'y présentèrent pour s'inscrire aux activités.",
    en: 'The new center had barely opened its doors when dozens of families showed up to register for activities.' },
  { id: 'fr.b2.rp-etiquette.066', drills: ['sentence', 'review'],
    fr: 'Une fois que les invités furent tous arrivés, la maîtresse de maison proposa un toast en leur honneur.',
    en: 'Once all the guests had arrived, the hostess proposed a toast in their honor.' },
  { id: 'fr.b2.soins.122', drills: ['sentence', 'review'],
    fr: 'À peine le diagnostic fut-il annoncé que la famille demanda un deuxième avis.',
    en: 'No sooner was the diagnosis announced than the family requested a second opinion.' },
].map((r) => [r.id, r]));

/** No `flashcard` drill: nameable, never releasable. */
export const NOT_DECK_ABLE: readonly string[] = [
  ...Object.keys(PG_ROWS),
  LIT(1126),                   // sentence only
];

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE,
  CL(2575), CL(2581), CL(2584), LIT(1122), LIT(1243),   // flashcard (+ review) only
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE SIXTEEN-ID BLOCK PER ACT
 *
 *  `pa`   a literary line (passé antérieur and/or passé simple): `sentence`
 *         drill ONLY (§A.3).
 *  `sc`   a passé surcomposé line: `sentence` drill ONLY, register familier.
 *  `map`  the SRS card: front = the literary line, answer = today's French.
 *  `rule` a grammar card whose answer is a rule (flashcard + review).
 *  `sent` a plain sentence in today's French.
 *  Corpus respellings carry no brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];
const PA_DRILLS = ['sentence'] as Item['drills'];

const C: Register = 'courant';
const S: Register = 'soutenu';
const F: Register = 'familier';
const GP = ['passe-anterieur'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

const pa = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[]): Row =>
  sent(n, fr, en, ipa, respell, ['passe-anterieur', ...tags], PA_DRILLS, { register: S });

const sc = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[]): Row =>
  sent(n, fr, en, ipa, respell, ['surcompose', ...tags], PA_DRILLS, { register: F });

/** The map card: `litFr` is printed on the front, `fr` is the answer. */
const map = (
  n: number, litFr: string, fr: string, en: string, ipa: string, respell: string, notes: string, tags: string[],
  drills: Item['drills'] = FCVR, lead = 'Aujourd’hui, tu dirais…',
): Row => sent(n, fr, en, ipa, respell, ['aujourdhui', ...tags], drills, {
  cardType: 'grammar', prompt: `« ${litFr} » ${lead}`, notes,
});

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · UN CRAN AVANT (.1600-.1615) ─────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  pa(1600, 'À peine eut-elle refermé la porte que le téléphone sonna.', 'She had barely closed the door when the phone rang.',
    '/a pɛn y.tɛl ʁə.fɛʁ.me la pɔʁt kə lə te.le.fɔn sɔ.na/', 'a PENN ü-tehl ruh-fehr-MAY la PORT | kuh luh tay-lay-FONN so-NA', ['a-peine', 'scene']),
  sent(1601, 'Elle avait refermé la porte depuis un moment quand le téléphone a sonné.', 'She had closed the door a while before the phone rang.',
    '/ɛ.la.vɛ ʁə.fɛʁ.me la pɔʁt də.pɥi.zœ̃ mɔ.mɑ̃ kɑ̃ lə te.le.fɔn a sɔ.ne/', 'eh-la-VEH ruh-fehr-MAY la PORT | duh-pwee-zuhⁿ mo-MAHⁿ | kahⁿ luh tay-lay-FONN a so-NAY', ['fausse-lecture', 'plus-que-parfait'], FC),
  map(1602, 'À peine eut-elle refermé la porte que le téléphone sonna.', 'Elle venait de refermer la porte quand le téléphone a sonné.', 'She had just closed the door when the phone rang.',
    '/ɛl və.nɛ də ʁə.fɛʁ.me la pɔʁt kɑ̃ lə te.le.fɔn a sɔ.ne/', 'ehl vuh-NEH duh ruh-fehr-MAY la PORT | kahⁿ luh tay-lay-FONN a so-NAY',
    'À peine eut-elle refermé… que : la porte à peine fermée, le téléphone sonne. Aujourd’hui : elle venait de refermer… quand.', ['a-peine', 'scene'], FCVDR),
  pa(1603, 'Quand elle eut retiré son manteau, elle alluma la lampe du salon.', 'When she had taken off her coat, she switched on the living-room lamp.',
    '/kɑ̃.tɛ.ly ʁə.ti.ʁe sɔ̃ mɑ̃.to ɛ.la.ly.ma la lɑ̃p dy sa.lɔ̃/', 'kahⁿ-teh-LÜ ruh-tee-RAY sohⁿ mahⁿ-TOH | eh-la-lü-MA la LAHⁿP dü sa-LOHⁿ', ['charniere', 'lecture']),
  map(1604, 'Quand elle eut retiré son manteau, elle alluma la lampe du salon.', 'Quand elle a retiré son manteau, elle a allumé la lampe du salon.', 'When she had taken off her coat, she switched on the living-room lamp.',
    '/kɑ̃.tɛ.la ʁə.ti.ʁe sɔ̃ mɑ̃.to ɛ.la a.ly.me la lɑ̃p dy sa.lɔ̃/', 'kahⁿ-teh-la ruh-tee-RAY sohⁿ mahⁿ-TOH | eh-la a-lü-MAY la LAHⁿP dü sa-LOHⁿ',
    'Eut retiré : bouclé juste avant alluma. Aujourd’hui, deux passés composés suffisent : l’ordre est dans quand.', ['charniere', 'lecture']),
  pa(1605, 'Dès qu’elle eut lu la première ligne, elle reconnut l’écriture de son frère.', 'As soon as she had read the first line, she recognised her brother’s handwriting.',
    '/dɛ kɛ.ly ly la pʁə.mjɛʁ liɲ ɛl ʁə.kɔ.ny le.kʁi.tyʁ də sɔ̃ fʁɛʁ/', 'deh keh-LÜ LÜ la pruh-MYEHR LEENY | ehl ruh-ko-NÜ lay-kree-TÜR duh sohⁿ FREHR', ['charniere', 'lecture']),
  map(1606, 'Dès qu’elle eut lu la première ligne, elle reconnut l’écriture de son frère.', 'Dès qu’elle a lu la première ligne, elle a reconnu l’écriture de son frère.', 'As soon as she had read the first line, she recognised her brother’s handwriting.',
    '/dɛ kɛ.la ly la pʁə.mjɛʁ liɲ ɛ.la ʁə.kɔ.ny le.kʁi.tyʁ də sɔ̃ fʁɛʁ/', 'deh keh-la LÜ la pruh-MYEHR LEENY | eh-la ruh-ko-NÜ lay-kree-TÜR duh sohⁿ FREHR',
    'Eut lu, reconnut : une ligne, et tout de suite l’écriture. Aujourd’hui : dès qu’elle a lu, elle a reconnu.', ['charniere', 'lecture']),
  pa(1607, 'Elle eut bientôt compris que c’était lui.', 'She soon understood that it was him.',
    '/ɛ.ly bjɛ̃.to kɔ̃.pʁi kə se.tɛ lɥi/', 'eh-LÜ byehⁿ-TOH kohⁿ-PREE | kuh say-teh LWEE', ['bientot', 'lecture']),
  map(1608, 'Elle eut bientôt compris que c’était lui.', 'Elle a vite compris que c’était lui.', 'She quickly understood that it was him.',
    '/ɛ.la vit kɔ̃.pʁi kə se.tɛ lɥi/', 'eh-la VEET kohⁿ-PREE | kuh say-teh LWEE',
    'Une phrase seule, avec bientôt : compris très vite, c’est fait. Aujourd’hui : elle a vite compris.', ['bientot', 'lecture'], FCVDR),
  rule(1609, 'Le passé antérieur, c’est eut ou fut et un participe : l’action est bouclée juste avant la suivante.', 'The passé antérieur is eut or fut plus a participle: the action is wrapped up just before the next one.',
    '/lə pa.se ɑ̃.te.ʁjœʁ sɛ.ty u fy e œ̃ paʁ.ti.sip la.ksjɔ̃ ɛ bu.kle ʒyst a.vɑ̃ la sɥi.vɑ̃t/', 'luh pa-SAY ahⁿ-tay-RYUHR | seh-TÜ oo FÜ | ay uhⁿ par-tee-SEEP | lak-SYOHⁿ eh boo-KLAY | zhüst a-VAHⁿ la swee-VAHⁿT',
    'Eut refermé, fut parti : que dit ce temps ?', 'Un auxiliaire au passé simple, un participe : une étape fermée, et le récit repart. EN: a simple-past auxiliary plus a participle.', ['forme']),
  sent(1610, 'Pour le club de lecture, je résume le chapitre au passé composé.', 'For the book club, I summarise the chapter in the passé composé.',
    '/puʁ lə klœb də lɛk.tyʁ ʒə ʁe.zym lə ʃa.pitʁ o pa.se kɔ̃.po.ze/', 'poor luh KLUHB duh lek-TÜR | zhuh ray-ZÜM luh sha-PEETR | oh pa-SAY kohⁿ-poh-ZAY', ['usage']),
  sent(1611, 'La traductrice doit rendre le rythme de la phrase, pas seulement son sens.', 'The translator has to render the rhythm of the sentence, not only its meaning.',
    '/la tʁa.dyk.tʁis dwa ʁɑ̃dʁ lə ʁitm də la fʁaz pa sœl.mɑ̃ sɔ̃ sɑ̃s/', 'la tra-dük-TREESS dwa RAHⁿDR | luh REETM duh la FRAZ | pa suhl-mahⁿ sohⁿ SAHⁿS', ['usage']),
  sent(1612, 'À l’examen, on te demande souvent ce qui s’est passé d’abord.', 'In the exam, you are often asked what happened first.',
    '/a lɛɡ.za.mɛ̃ ɔ̃ tə də.mɑ̃d su.vɑ̃ sə ki sɛ pa.se da.bɔʁ/', 'a leg-za-MEHⁿ | ohⁿ tuh duh-MAHⁿD soo-VAHⁿ | suh kee seh pa-SAY da-BOR', ['usage']),
  sent(1613, 'Dans un livre audio, la voix doit faire entendre l’enchaînement des gestes.', 'In an audiobook, the voice has to make the sequence of actions heard.',
    '/dɑ̃.zœ̃ livʁ o.djo la vwa dwa fɛʁ ɑ̃.tɑ̃dʁ lɑ̃.ʃɛn.mɑ̃ de ʒɛst/', 'dahⁿ-zuhⁿ LEEVR oh-DYOH | la VWA dwa fehr ahⁿ-TAHⁿDR | lahⁿ-shenn-MAHⁿ day ZHEST', ['usage']),
];

/* ── ACT 2 · EUT FINI, FUT PARTI (.1616-.1631) ───────────────────────────── */

export const ACT2_ROWS: Row[] = [
  pa(1616, 'Nous eûmes à peine posé nos valises que l’orage éclata.', 'We had barely put our suitcases down when the storm broke.',
    '/nu.zym a pɛn po.ze no va.liz kə lɔ.ʁaʒ e.kla.ta/', 'noo-ZÜM a PENN po-ZAY noh va-LEEZ | kuh lo-RAZH ay-kla-TA', ['nous', 'avoir']),
  map(1617, 'Nous eûmes à peine posé nos valises que l’orage éclata.', 'Nous venions à peine de poser nos valises quand l’orage a éclaté.', 'We had barely put our suitcases down when the storm broke.',
    '/nu və.njɔ̃.za pɛn də po.ze no va.liz kɑ̃ lɔ.ʁa.ʒa e.kla.te/', 'noo vuh-nyohⁿ-za PENN duh po-ZAY noh va-LEEZ | kahⁿ lo-ra-zha ay-kla-TAY',
    'Eûmes posé : nous, avoir. Aujourd’hui, venir de dit la même proximité.', ['nous', 'avoir']),
  pa(1618, 'Quand j’eus compris mon erreur, je revins sur mes pas.', 'When I had understood my mistake, I retraced my steps.',
    '/kɑ̃ ʒy kɔ̃.pʁi mɔ̃.ne.ʁœʁ ʒə ʁə.vɛ̃ syʁ me pa/', 'kahⁿ ZHÜ kohⁿ-PREE | moh-nay-RUHR | zhuh ruh-VEHⁿ sür may PA', ['je', 'avoir']),
  map(1619, 'Quand j’eus compris mon erreur, je revins sur mes pas.', 'Quand j’ai compris mon erreur, je suis revenu sur mes pas.', 'When I had understood my mistake, I retraced my steps.',
    '/kɑ̃ ʒe kɔ̃.pʁi mɔ̃.ne.ʁœʁ ʒə sɥi ʁə.və.ny syʁ me pa/', 'kahⁿ zhay kohⁿ-PREE | moh-nay-RUHR | zhuh swee ruh-vuh-NÜ sür may PA',
    'J’eus compris : je, avoir ; revins : revenir. Aujourd’hui : j’ai compris, je suis revenu.', ['je', 'avoir'], FCVDR),
  pa(1620, 'Lorsqu’ils eurent traversé le pont, la nuit tomba.', 'When they had crossed the bridge, night fell.',
    '/lɔʁs.kil.zyʁ tʁa.vɛʁ.se lə pɔ̃ la nɥi tɔ̃.ba/', 'lors-keel-ZÜR tra-vehr-SAY luh POHⁿ | la nwee tohⁿ-BA', ['ils', 'avoir']),
  map(1621, 'Lorsqu’ils eurent traversé le pont, la nuit tomba.', 'Lorsqu’ils ont traversé le pont, la nuit est tombée.', 'When they had crossed the bridge, night fell.',
    '/lɔʁs.kil.zɔ̃ tʁa.vɛʁ.se lə pɔ̃ la nɥi ɛ tɔ̃.be/', 'lors-keel-ZOHⁿ tra-vehr-SAY luh POHⁿ | la NWEE eh tohⁿ-BAY',
    'Eurent : ils, avoir. Le pont franchi, la nuit tombe aussitôt.', ['ils', 'avoir']),
  pa(1622, 'Dès qu’elle fut sortie, il ouvrit la lettre.', 'As soon as she had gone out, he opened the letter.',
    '/dɛ kɛl fy sɔʁ.ti i.lu.vʁi la lɛtʁ/', 'deh kehl fü sor-TEE | ee-loo-VREE la LETR', ['elle', 'etre']),
  map(1623, 'Dès qu’elle fut sortie, il ouvrit la lettre.', 'Dès qu’elle est sortie, il a ouvert la lettre.', 'As soon as she had gone out, he opened the letter.',
    '/dɛ kɛ.lɛ sɔʁ.ti i.la u.vɛʁ la lɛtʁ/', 'deh keh-leh sor-TEE | ee-la oo-VEHR la LETR',
    'Fut sortie : sortir prend être, et le participe s’accorde avec elle.', ['elle', 'etre'], FCVDR),
  pa(1624, 'Quand nous fûmes arrivés au village, on nous conduisit chez le maire.', 'When we had arrived in the village, we were taken to the mayor’s house.',
    '/kɑ̃ nu fym.za.ʁi.ve o vi.laʒ ɔ̃ nu kɔ̃.dɥi.zi ʃe lə mɛʁ/', 'kahⁿ noo füm-za-ree-VAY oh vee-LAZH | ohⁿ noo kohⁿ-dwee-ZEE shay luh MEHR', ['nous', 'etre']),
  map(1625, 'Quand nous fûmes arrivés au village, on nous conduisit chez le maire.', 'Quand nous sommes arrivés au village, on nous a conduits chez le maire.', 'When we had arrived in the village, we were taken to the mayor’s house.',
    '/kɑ̃ nu sɔm.za.ʁi.ve o vi.laʒ ɔ̃ nu.za kɔ̃.dɥi ʃe lə mɛʁ/', 'kahⁿ noo somm-za-ree-VAY oh vee-LAZH | ohⁿ noo-za kohⁿ-DWEE shay luh MEHR',
    'Fûmes arrivés : nous, être, accord au pluriel. Aujourd’hui : nous sommes arrivés.', ['nous', 'etre']),
  pa(1626, 'Lorsque les invités furent partis, elle éteignit les lampes une à une.', 'When the guests had left, she turned the lamps off one by one.',
    '/lɔʁs.kə le.zɛ̃.vi.te fyʁ paʁ.ti ɛ.le.tɛ.ɲi le lɑ̃p y.na.yn/', 'lors-kuh lay-zehⁿ-vee-TAY für par-TEE | eh-lay-teh-NYEE lay LAHⁿP | ü-na-ÜNN', ['ils', 'etre']),
  map(1627, 'Lorsque les invités furent partis, elle éteignit les lampes une à une.', 'Lorsque les invités sont partis, elle a éteint les lampes une à une.', 'When the guests had left, she turned the lamps off one by one.',
    '/lɔʁs.kə le.zɛ̃.vi.te sɔ̃ paʁ.ti ɛ.la e.tɛ̃ le lɑ̃p y.na.yn/', 'lors-kuh lay-zehⁿ-vee-TAY sohⁿ par-TEE | eh-la ay-TEHⁿ lay LAHⁿP | ü-na-ÜNN',
    'Furent partis : ils, être. Éteignit : éteindre, aujourd’hui a éteint.', ['ils', 'etre']),
  pa(1628, 'Quand il eut sept ans, on l’envoya chez son oncle.', 'When he turned seven, he was sent to his uncle’s.',
    '/kɑ̃.ti.ly sɛ.tɑ̃ ɔ̃ lɑ̃.vwa.ja ʃe sɔ̃.nɔ̃kl/', 'kahⁿ-tee-LÜ seh-TAHⁿ | ohⁿ lahⁿ-vwa-YA shay soh-NOHⁿKL', ['piege', 'passe-simple']),
  map(1629, 'Quand il eut sept ans, on l’envoya chez son oncle.', 'Quand il a eu sept ans, on l’a envoyé chez son oncle.', 'When he turned seven, he was sent to his uncle’s.',
    '/kɑ̃.ti.la y sɛ.tɑ̃ ɔ̃ la ɑ̃.vwa.je ʃe sɔ̃.nɔ̃kl/', 'kahⁿ-tee-la Ü seh-TAHⁿ | ohⁿ la ahⁿ-vwa-YAY shay soh-NOHⁿKL',
    'Eut sept ans : avoir au passé simple, suivi d’un nom, pas d’un participe. Ce n’est pas un passé antérieur.', ['piege', 'passe-simple']),
  rule(1630, 'Eus, eut, eûmes, eurent : avoir au passé simple. Suivi d’un participe, c’est un passé antérieur ; suivi d’un nom, non.', 'Eus, eut, eûmes, eurent: avoir in the passé simple. Followed by a participle, it is a passé antérieur; followed by a noun, it is not.',
    '/y y ym yʁ a.vwaʁ o pa.se sɛ̃pl sɥi.vi dœ̃ paʁ.ti.sip sɛ.tœ̃ pa.se ɑ̃.te.ʁjœʁ sɥi.vi dœ̃ nɔ̃ nɔ̃/', 'Ü Ü ÜM ÜR | a-VWAR oh pa-SAY SEHⁿPL | swee-VEE duhⁿ par-tee-SEEP | seh-tuhⁿ pa-SAY ahⁿ-tay-RYUHR | swee-VEE duhⁿ NOHⁿ | NOHⁿ',
    'Nous eûmes posé, il eut sept ans : lequel est un passé antérieur ?', 'Eûmes posé : un participe suit. Eut sept ans : un nom suit, c’est avoir tout seul. EN: look at what follows the auxiliary.', ['forme', 'avoir']),
  rule(1631, 'Fus, fut, fûmes, furent et un participe : les verbes qui prennent être ; le participe s’accorde avec le sujet.', 'Fus, fut, fûmes, furent plus a participle: the verbs that take être; the participle agrees with the subject.',
    '/fy fy fym fyʁ e œ̃ paʁ.ti.sip le vɛʁb ki pʁɛn ɛtʁ lə paʁ.ti.sip sa.kɔʁd a.vɛk lə syʒɛ/', 'FÜ FÜ FÜM FÜR | ay uhⁿ par-tee-SEEP | lay VEHRB kee prenn EHTR | luh par-tee-SEEP sa-KORD a-vek luh sü-ZHEH',
    'Elles furent parties : pourquoi fut, pourquoi -es ?', 'Partir prend être ; elles, féminin pluriel : parties. EN: être verbs, agreement with the subject.', ['forme', 'etre']),
];

/* ── ACT 3 · IL SE FUT ASSIS (.1632-.1647) ───────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  pa(1632, 'Quand il se fut assis, le notaire ouvrit le dossier.', 'When he had sat down, the notary opened the file.',
    '/kɑ̃.til sə fy.ta.si lə nɔ.tɛʁ u.vʁi lə do.sje/', 'kahⁿ-teel suh fü-ta-SEE | luh no-TEHR oo-VREE luh do-SYAY', ['pronominal']),
  map(1633, 'Quand il se fut assis, le notaire ouvrit le dossier.', 'Quand il s’est assis, le notaire a ouvert le dossier.', 'When he had sat down, the notary opened the file.',
    '/kɑ̃.til sɛ.ta.si lə nɔ.tɛ.ʁa u.vɛʁ lə do.sje/', 'kahⁿ-teel seh-ta-SEE | luh no-teh-ra oo-VEHR luh do-SYAY',
    'Se fut assis : un pronominal, donc être. Aujourd’hui : il s’est assis.', ['pronominal'], FCVDR),
  pa(1634, 'Dès qu’elles se furent installées, la conférence commença.', 'As soon as they had settled in, the lecture began.',
    '/dɛ kɛl sə fyʁ.tɛ̃s.ta.le la kɔ̃.fe.ʁɑ̃s kɔ.mɑ̃.sa/', 'deh kehl suh für-tehⁿs-ta-LAY | la kohⁿ-fay-RAHⁿS ko-mahⁿ-SA', ['pronominal', 'accord']),
  map(1635, 'Dès qu’elles se furent installées, la conférence commença.', 'Dès qu’elles se sont installées, la conférence a commencé.', 'As soon as they had settled in, the lecture began.',
    '/dɛ kɛl sə sɔ̃.tɛ̃s.ta.le la kɔ̃.fe.ʁɑ̃s a kɔ.mɑ̃.se/', 'deh kehl suh sohⁿ-tehⁿs-ta-LAY | la kohⁿ-fay-RAHⁿS a ko-mahⁿ-SAY',
    'Furent installées : elles, être, accord au féminin pluriel.', ['pronominal', 'accord']),
  pa(1636, 'Lorsqu’ils se furent dit adieu, chacun partit de son côté.', 'When they had said goodbye to each other, each went his own way.',
    '/lɔʁs.kil sə fyʁ di a.djø ʃa.kœ̃ paʁ.ti də sɔ̃ ko.te/', 'lors-keel suh für DEE a-DYEU | sha-KUHⁿ par-TEE duh sohⁿ ko-TAY', ['pronominal', 'accord']),
  map(1637, 'Lorsqu’ils se furent dit adieu, chacun partit de son côté.', 'Lorsqu’ils se sont dit adieu, chacun est parti de son côté.', 'When they had said goodbye to each other, each went his own way.',
    '/lɔʁs.kil sə sɔ̃ di a.djø ʃa.kœ̃ ɛ paʁ.ti də sɔ̃ ko.te/', 'lors-keel suh sohⁿ DEE a-DYEU | sha-KUHⁿ eh par-TEE duh sohⁿ ko-TAY',
    'Se furent dit : ils se disent adieu L’UN À L’AUTRE (à qui ?), donc pas d’accord : dit.', ['pronominal', 'accord']),
  pa(1638, 'Quand il les eut relues, il signa les deux lettres.', 'When he had read them over, he signed the two letters.',
    '/kɑ̃.til le.zy ʁə.ly il si.ɲa le dø lɛtʁ/', 'kahⁿ-teel lay-ZÜ ruh-LÜ | eel see-NYA lay deu LETR', ['accord', 'avoir']),
  map(1639, 'Quand il les eut relues, il signa les deux lettres.', 'Quand il les a relues, il a signé les deux lettres.', 'When he had read them over, he signed the two letters.',
    '/kɑ̃.til le.za ʁə.ly i.la si.ɲe le dø lɛtʁ/', 'kahⁿ-teel lay-za ruh-LÜ | ee-la see-NYAY lay deu LETR',
    'Les eut relues : les (les lettres) est placé avant, le participe s’accorde.', ['accord', 'avoir'], FCVDR),
  pa(1640, 'Après qu’elle se fut levée, la salle se tut.', 'After she had stood up, the room fell silent.',
    '/a.pʁɛ kɛl sə fy lə.ve la sal sə ty/', 'a-preh kehl suh fü luh-VAY | la SAL suh TÜ', ['pronominal']),
  map(1641, 'Après qu’elle se fut levée, la salle se tut.', 'Après qu’elle s’est levée, la salle s’est tue.', 'After she had stood up, the room fell silent.',
    '/a.pʁɛ kɛl sɛ lə.ve la sal sɛ ty/', 'a-preh kehl seh luh-VAY | la SAL seh TÜ',
    'Se fut levée, puis se tut (se taire) : deux pronominaux, être et l’accord aujourd’hui.', ['pronominal']),
  pa(1642, 'Quand nous nous fûmes reposés, nous reprîmes la route.', 'When we had rested, we set off again.',
    '/kɑ̃ nu nu fym ʁə.po.ze nu ʁə.pʁim la ʁut/', 'kahⁿ noo noo füm ruh-po-ZAY | noo ruh-PREEM la ROOT', ['pronominal', 'nous']),
  map(1643, 'Quand nous nous fûmes reposés, nous reprîmes la route.', 'Quand nous nous sommes reposés, nous avons repris la route.', 'When we had rested, we set off again.',
    '/kɑ̃ nu nu sɔm ʁə.po.ze nu.za.vɔ̃ ʁə.pʁi la ʁut/', 'kahⁿ noo noo somm ruh-po-ZAY | noo-za-vohⁿ ruh-PREE la ROOT',
    'Nous nous fûmes reposés : nous, être. Reprîmes : reprendre, aujourd’hui avons repris.', ['pronominal', 'nous']),
  rule(1644, 'Il se fut assis, elles se furent installées : le pronominal prend être, et le participe s’accorde le plus souvent avec le sujet.', 'Il se fut assis, elles se furent installées: pronominal verbs take être, and the participle usually agrees with the subject.',
    '/il sə fy.ta.si ɛl sə fyʁ.tɛ̃s.ta.le lə pʁɔ.nɔ.mi.nal pʁɑ̃.tɛtʁ e lə paʁ.ti.sip sa.kɔʁd lə ply su.vɑ̃ a.vɛk lə sy.ʒɛ/', 'eel suh fü-ta-SEE | ehl suh für-tehⁿs-ta-LAY | luh pro-no-mee-NAL prahⁿ-TEHTR | ay luh par-tee-SEEP sa-KORD | luh plü soo-VAHⁿ a-vek luh sü-ZHEH',
    'Elles se furent installées : pourquoi -ées ?', 'Pronominal, donc être ; installées s’accorde avec elles. Exception : se dire adieu, se parler (à quelqu’un) : pas d’accord. EN: usually agrees with the subject.', ['forme', 'pronominal']),
  rule(1645, 'Il les eut relues : avec avoir, le participe s’accorde avec le complément placé avant.', 'Il les eut relues: with avoir, the participle agrees with the object placed before it.',
    '/il le.zy ʁə.ly a.vɛ.ka.vwaʁ lə paʁ.ti.sip sa.kɔʁ.da.vɛk lə kɔ̃.ple.mɑ̃ pla.se a.vɑ̃/', 'eel lay-ZÜ ruh-LÜ | a-vek-a-VWAR | luh par-tee-SEEP sa-kor-da-VEK | luh kohⁿ-play-MAHⁿ pla-SAY a-VAHⁿ',
    'Quand il les eut relues : pourquoi -ues ?', 'Les reprend les lettres, placé avant : relues. La règle du passé composé, rien de neuf. EN: the passé composé rule.', ['forme', 'accord']),
];

/* ── ACT 4 · FUT + PARTICIPE : DEUX LECTURES (.1648-.1663) ───────────────── */

export const ACT4_ROWS: Row[] = [
  pa(1648, 'Quand le courrier fut parti, elle ferma le bureau.', 'When the post had gone, she closed the office.',
    '/kɑ̃ lə ku.ʁje fy paʁ.ti ɛl fɛʁ.ma lə by.ʁo/', 'kahⁿ luh koo-RYAY fü par-TEE | ehl fehr-MA luh bü-ROH', ['passif', 'etre']),
  map(1649, 'Quand le courrier fut parti, elle ferma le bureau.', 'Quand le courrier est parti, elle a fermé le bureau.', 'When the post had gone, she closed the office.',
    '/kɑ̃ lə ku.ʁje ɛ paʁ.ti ɛl a fɛʁ.me lə by.ʁo/', 'kahⁿ luh koo-RYAY eh par-TEE | ehl a fehr-MAY luh bü-ROH',
    'Partir prend être : fut parti est un passé antérieur. Aujourd’hui : est parti.', ['passif', 'etre'], FCVDR),
  pa(1650, 'Quand la lettre fut envoyée, elle ferma le bureau.', 'When the letter had been sent, she closed the office.',
    '/kɑ̃ la lɛtʁ fy.tɑ̃.vwa.je ɛl fɛʁ.ma lə by.ʁo/', 'kahⁿ la LETR fü-tahⁿ-vwa-YAY | ehl fehr-MA luh bü-ROH', ['passif']),
  map(1651, 'Quand la lettre fut envoyée, elle ferma le bureau.', 'Quand la lettre a été envoyée, elle a fermé le bureau.', 'When the letter had been sent, she closed the office.',
    '/kɑ̃ la lɛtʁ a e.te ɑ̃.vwa.je ɛl a fɛʁ.me lə by.ʁo/', 'kahⁿ la LETR a ay-TAY ahⁿ-vwa-YAY | ehl a fehr-MAY luh bü-ROH',
    'Envoyer est transitif : fut envoyée est un passif au passé simple (on envoya la lettre). Aujourd’hui : a été envoyée.', ['passif']),
  pa(1652, 'Le pont fut fermé par la police dès le matin.', 'The bridge was closed by the police from the morning on.',
    '/lə pɔ̃ fy fɛʁ.me paʁ la pɔ.lis dɛ lə ma.tɛ̃/', 'luh POHⁿ fü fehr-MAY | par la po-LEESS | deh luh ma-TEHⁿ', ['passif']),
  map(1653, 'Le pont fut fermé par la police dès le matin.', 'Le pont a été fermé par la police dès le matin.', 'The bridge was closed by the police from the morning on.',
    '/lə pɔ̃ a e.te fɛʁ.me paʁ la pɔ.lis dɛ lə ma.tɛ̃/', 'luh POHⁿ a ay-TAY fehr-MAY | par la po-LEESS | deh luh ma-TEHⁿ',
    'Par la police : l’agent du passif. Fut fermé, un passé simple passif.', ['passif']),
  pa(1654, 'Quand les travaux eurent été terminés, on rouvrit le pont.', 'When the work had been completed, the bridge was reopened.',
    '/kɑ̃ le tʁa.vo yʁ.te.te tɛʁ.mi.ne ɔ̃ ʁu.vʁi lə pɔ̃/', 'kahⁿ lay tra-VOH | ür-tay-TAY tehr-mee-NAY | ohⁿ roo-VREE luh POHⁿ', ['passif', 'avoir']),
  map(1655, 'Quand les travaux eurent été terminés, on rouvrit le pont.', 'Une fois les travaux terminés, on a rouvert le pont.', 'Once the work was done, the bridge was reopened.',
    '/yn fwa le tʁa.vo tɛʁ.mi.ne ɔ̃.na ʁu.vɛʁ lə pɔ̃/', 'ünn FWA lay tra-VOH tehr-mee-NAY | ohⁿ-na roo-VEHR luh POHⁿ',
    'Eurent été terminés : le passif au passé antérieur. Aujourd’hui, une fois + participe le dit en trois mots.', ['passif', 'avoir'], FCVDR),
  pa(1656, 'Lorsque la nuit fut tombée, on alluma les feux.', 'When night had fallen, the fires were lit.',
    '/lɔʁs.kə la nɥi fy tɔ̃.be ɔ̃.na.ly.ma le fø/', 'lors-kuh la NWEE fü tohⁿ-BAY | ohⁿ-na-lü-MA lay FEU', ['etre']),
  map(1657, 'Lorsque la nuit fut tombée, on alluma les feux.', 'Lorsque la nuit est tombée, on a allumé les feux.', 'When night had fallen, the fires were lit.',
    '/lɔʁs.kə la nɥi ɛ tɔ̃.be ɔ̃.na a.ly.me le fø/', 'lors-kuh la NWEE eh tohⁿ-BAY | ohⁿ-na a-lü-MAY lay FEU',
    'Tomber prend être : fut tombée, un passé antérieur.', ['etre']),
  pa(1658, 'Quand la séance fut terminée, chacun rentra chez soi.', 'When the session was over, everyone went home.',
    '/kɑ̃ la se.ɑ̃s fy tɛʁ.mi.ne ʃa.kœ̃ ʁɑ̃.tʁa ʃe swa/', 'kahⁿ la say-AHⁿS fü tehr-mee-NAY | sha-KUHⁿ rahⁿ-TRA shay SWA', ['passif', 'etat']),
  map(1659, 'Quand la séance fut terminée, chacun rentra chez soi.', 'Quand la séance s’est terminée, chacun est rentré chez soi.', 'When the session was over, everyone went home.',
    '/kɑ̃ la se.ɑ̃s sɛ tɛʁ.mi.ne ʃa.kœ̃ ɛ ʁɑ̃.tʁe ʃe swa/', 'kahⁿ la say-AHⁿS seh tehr-mee-NAY | sha-KUHⁿ eh rahⁿ-TRAY shay SWA',
    'Fut terminée : un état atteint, au passé simple. Le passé antérieur de terminer serait eut terminé, avec avoir.', ['passif', 'etat']),
  rule(1660, 'Fut et un participe : passé antérieur si le verbe prend être (partir, tomber, arriver) ; passif au passé simple si le verbe est transitif (envoyer, fermer).', 'Fut plus a participle: a passé antérieur if the verb takes être (partir, tomber, arriver); a passive in the passé simple if the verb is transitive (envoyer, fermer).',
    '/fy e œ̃ paʁ.ti.sip pa.se ɑ̃.te.ʁjœʁ si lə vɛʁb pʁɑ̃.tɛtʁ pa.sif o pa.se sɛ̃pl si lə vɛʁb ɛ tʁɑ̃.zi.tif/', 'FÜ ay uhⁿ par-tee-SEEP | pa-SAY ahⁿ-tay-RYUHR | see luh VEHRB prahⁿ-TEHTR | pa-SEEF oh pa-SAY SEHⁿPL | see luh VEHRB eh trahⁿ-zee-TEEF',
    'Fut parti, fut envoyée : lequel est un passé antérieur ?', 'Fut parti : partir prend être. Fut envoyée : on envoie quelque chose, c’est un passif. EN: être verb or transitive verb?', ['forme', 'passif']),
  rule(1661, 'Eut été et un participe : le passif au passé antérieur.', 'Eut été plus a participle: the passive in the passé antérieur.',
    '/y.te.te e œ̃ paʁ.ti.sip lə pa.sif o pa.se ɑ̃.te.ʁjœʁ/', 'ü-tay-TAY | ay uhⁿ par-tee-SEEP | luh pa-SEEF oh pa-SAY ahⁿ-tay-RYUHR',
    'Eurent été terminés : quel temps, quelle voix ?', 'Avoir au passé simple, été, puis le participe : bouclé avant, et subi. EN: done before, and undergone.', ['forme', 'passif']),
  rule(1662, 'Le test : aujourd’hui, dirais-tu est parti ou a été envoyée ? Est : passé antérieur. A été : passif.', 'The test: today, would you say est parti or a été envoyée? Est: passé antérieur. A été: passive.',
    '/lə tɛst o.ʒuʁ.dɥi di.ʁɛ ty ɛ paʁ.ti u a e.te ɑ̃.vwa.je ɛ pa.se ɑ̃.te.ʁjœʁ a e.te pa.sif/', 'luh TEST | oh-zhoor-DWEE dee-REH-TÜ | eh par-TEE | oo a ay-TAY ahⁿ-vwa-YAY | EH pa-SAY ahⁿ-tay-RYUHR | a ay-TAY pa-SEEF',
    'Comment trancher entre passé antérieur et passif ?', 'Transpose au passé composé : est + participe, c’était un passé antérieur ; a été + participe, un passif. EN: transpose and listen.', ['forme', 'passif']),
];

/* ── ACT 5 · DÈS QU’IL EUT FINI : LA CHARNIÈRE (.1664-.1679) ─────────────── */

export const ACT5_ROWS: Row[] = [
  pa(1664, 'Aussitôt qu’il eut reçu la réponse, il réserva sa place.', 'As soon as he had received the answer, he booked his seat.',
    '/o.si.to ki.ly ʁə.sy la ʁe.pɔ̃s il ʁe.zɛʁ.va sa plas/', 'oh-see-toh kee-LÜ ruh-SÜ la ray-POHⁿS | eel ray-zehr-VA sa PLASS', ['charniere']),
  map(1665, 'Aussitôt qu’il eut reçu la réponse, il réserva sa place.', 'Aussitôt qu’il a reçu la réponse, il a réservé sa place.', 'As soon as he had received the answer, he booked his seat.',
    '/o.si.to ki.la ʁə.sy la ʁe.pɔ̃s i.la ʁe.zɛʁ.ve sa plas/', 'oh-see-toh kee-la ruh-SÜ la ray-POHⁿS | ee-la ray-zehr-VAY sa PLASS',
    'Aussitôt que + passé antérieur, puis un passé simple : la réponse, et tout de suite la réservation.', ['charniere']),
  pa(1666, 'Une fois qu’elle eut payé la traversée, elle monta sur le pont du traversier.', 'Once she had paid for the crossing, she went up on the ferry’s deck.',
    '/yn fwa kɛ.ly pe.je la tʁa.vɛʁ.se ɛl mɔ̃.ta syʁ lə pɔ̃ dy tʁa.vɛʁ.sje/', 'ünn FWA keh-LÜ pay-YAY la tra-vehr-SAY | ehl mohⁿ-TA sür luh POHⁿ dü tra-vehr-SYAY', ['charniere', 'lecture']),
  map(1667, 'Une fois qu’elle eut payé la traversée, elle monta sur le pont du traversier.', 'Une fois qu’elle a payé la traversée, elle est montée sur le pont du traversier.', 'Once she had paid for the crossing, she went up on the ferry’s deck.',
    '/yn fwa kɛ.la pe.je la tʁa.vɛʁ.se ɛ.lɛ mɔ̃.te syʁ lə pɔ̃ dy tʁa.vɛʁ.sje/', 'ünn FWA keh-la pay-YAY la tra-vehr-SAY | eh-leh mohⁿ-TAY sür luh POHⁿ dü tra-vehr-SYAY',
    'Une fois que : l’étape franchie, la suite. Monter sans complément : être aujourd’hui.', ['charniere', 'lecture'], FCVDR),
  pa(1668, 'Après que le capitaine eut donné le signal, le bateau quitta le quai.', 'After the captain had given the signal, the boat left the quay.',
    '/a.pʁɛ kə lə ka.pi.tɛn y dɔ.ne lə si.ɲal lə ba.to ki.ta lə ke/', 'a-preh kuh luh ka-pee-TENN | ü do-NAY luh see-NYAL | luh ba-TOH kee-TA luh KAY', ['charniere', 'lecture']),
  map(1669, 'Après que le capitaine eut donné le signal, le bateau quitta le quai.', 'Après que le capitaine a donné le signal, le bateau a quitté le quai.', 'After the captain had given the signal, the boat left the quay.',
    '/a.pʁɛ kə lə ka.pi.tɛn a dɔ.ne lə si.ɲal lə ba.to a ki.te lə ke/', 'a-preh kuh luh ka-pee-TENN | a do-NAY luh see-NYAL | luh ba-TOH a kee-TAY luh KAY',
    'Après que + passé antérieur : l’indicatif, un fait accompli. Aujourd’hui : après que… a donné.', ['charniere', 'lecture']),
  pa(1670, 'Lorsque le brouillard se fut levé, on aperçut l’île.', 'When the fog had lifted, the island came into view.',
    '/lɔʁs.kə lə bʁu.jaʁ sə fy lə.ve ɔ̃.na.pɛʁ.sy lil/', 'lors-kuh luh broo-YAR suh fü luh-VAY | ohⁿ-na-pehr-SÜ LEEL', ['charniere', 'lecture']),
  map(1671, 'Lorsque le brouillard se fut levé, on aperçut l’île.', 'Lorsque le brouillard s’est levé, on a aperçu l’île.', 'When the fog had lifted, the island came into view.',
    '/lɔʁs.kə lə bʁu.jaʁ sɛ lə.ve ɔ̃.na a.pɛʁ.sy lil/', 'lors-kuh luh broo-YAR seh luh-VAY | ohⁿ-na a-pehr-SÜ LEEL',
    'Se fut levé : un pronominal. Aperçut : apercevoir, aujourd’hui a aperçu.', ['charniere', 'lecture']),
  pa(1672, 'Dès que nous eûmes accosté, les enfants sautèrent sur le quai.', 'As soon as we had docked, the children jumped onto the quay.',
    '/dɛ kə nu.zym a.kɔs.te le.zɑ̃.fɑ̃ so.tɛʁ syʁ lə ke/', 'deh kuh noo-ZÜM a-kos-TAY | lay-zahⁿ-FAHⁿ soh-TEHR sür luh KAY', ['charniere', 'nous']),
  map(1673, 'Dès que nous eûmes accosté, les enfants sautèrent sur le quai.', 'Dès que nous avons accosté, les enfants ont sauté sur le quai.', 'As soon as we had docked, the children jumped onto the quay.',
    '/dɛ kə nu.za.vɔ̃ a.kɔs.te le.zɑ̃.fɑ̃ ɔ̃ so.te syʁ lə ke/', 'deh kuh noo-za-VOHⁿ a-kos-TAY | lay-zahⁿ-FAHⁿ ohⁿ soh-TAY sür luh KAY',
    'Eûmes accosté : nous, avoir. Sautèrent : sauter, aujourd’hui ont sauté.', ['charniere', 'nous'], FCVDR),
  pa(1674, 'Quand il eut fini de parler, personne ne répondit.', 'When he had finished speaking, nobody answered.',
    '/kɑ̃.ti.ly fi.ni də paʁ.le pɛʁ.sɔn nə ʁe.pɔ̃.di/', 'kahⁿ-tee-LÜ fee-NEE duh par-LAY | pehr-SONN nuh ray-pohⁿ-DEE', ['charniere']),
  map(1675, 'Quand il eut fini de parler, personne ne répondit.', 'Quand il a fini de parler, personne n’a répondu.', 'When he had finished speaking, nobody answered.',
    '/kɑ̃.ti.la fi.ni də paʁ.le pɛʁ.sɔn na ʁe.pɔ̃.dy/', 'kahⁿ-tee-la fee-NEE duh par-LAY | pehr-SONN na ray-pohⁿ-DÜ',
    'Eut fini, puis le silence. Aujourd’hui : quand il a fini, personne n’a répondu.', ['charniere']),
  rule(1676, 'Quand, lorsque, dès que, aussitôt que, après que, une fois que : la subordonnée au passé antérieur, la principale au passé simple.', 'Quand, lorsque, dès que, aussitôt que, après que, une fois que: the subordinate clause in the passé antérieur, the main clause in the passé simple.',
    '/kɑ̃ lɔʁs.kə dɛ kə o.si.to kə a.pʁɛ kə yn fwa kə la syb.ɔʁ.dɔ.ne o pa.se ɑ̃.te.ʁjœʁ la pʁɛ̃.si.pal o pa.se sɛ̃pl/', 'KAHⁿ | LORS-kuh | DEH kuh | oh-see-TOH kuh | a-PREH kuh | ünn FWA kuh | la süb-or-do-NAY oh pa-SAY ahⁿ-tay-RYUHR | la prehⁿ-see-PAL oh pa-SAY SEHⁿPL',
    'Dès qu’il eut fini, … : quel temps attend la principale ?', 'Le passé simple : la charnière ferme une étape, la principale lance la suivante. EN: the hinge closes a step, the main clause starts the next.', ['forme', 'charniere']),
  rule(1677, 'Après qu’il eut fini : un passé antérieur, à l’indicatif. Tu liras aussi après qu’il eût fini, au subjonctif : un usage répandu, mais critiqué.', 'Après qu’il eut fini: a passé antérieur, in the indicative. You will also read après qu’il eût fini, in the subjunctive: a widespread but criticised usage.',
    '/a.pʁɛ ki.ly fi.ni œ̃ pa.se ɑ̃.te.ʁjœʁ a lɛ̃.di.ka.tif ty li.ʁa o.si a.pʁɛ ki.ly fi.ni o syb.ʒɔ̃k.tif/', 'a-preh kee-LÜ fee-NEE | uhⁿ pa-SAY ahⁿ-tay-RYUHR | a lehⁿ-dee-ka-TEEF | tü lee-RA oh-SEE | a-preh kee-LÜ fee-NEE | oh süb-zhohⁿk-TEEF',
    'Après qu’il eut fini ou après qu’il eût fini ?', 'Sans accent, l’indicatif attendu après que ; avec l’accent, le subjonctif que beaucoup écrivent et que les grammaires critiquent. EN: eut, the norm; eût, common but criticised.', ['forme', 'charniere']),
];

/* ── ACT 6 · À PEINE EUT-IL… QUE (.1680-.1695) ───────────────────────────── */

export const ACT6_ROWS: Row[] = [
  pa(1680, 'À peine eut-il ouvert la porte que le chien se jeta sur lui.', 'He had barely opened the door when the dog leapt at him.',
    '/a pɛn y.til u.vɛʁ la pɔʁt kə lə ʃjɛ̃ sə ʒə.ta syʁ lɥi/', 'a PENN ü-teel oo-VEHR la PORT | kuh luh SHYEHⁿ suh zhuh-TA sür LWEE', ['a-peine']),
  map(1681, 'À peine eut-il ouvert la porte que le chien se jeta sur lui.', 'Il venait à peine d’ouvrir la porte quand le chien s’est jeté sur lui.', 'He had barely opened the door when the dog leapt at him.',
    '/il və.nɛ.ta pɛn du.vʁiʁ la pɔʁt kɑ̃ lə ʃjɛ̃ sɛ ʒə.te syʁ lɥi/', 'eel vuh-neh-ta PENN doo-VREER la PORT | kahⁿ luh SHYEHⁿ seh zhuh-TAY sür LWEE',
    'À peine + inversion, puis que : la porte s’ouvre, et le chien bondit. Aujourd’hui : il venait à peine de… quand.', ['a-peine'], FCVDR),
  pa(1682, 'À peine le train fut-il parti que la pluie se mit à tomber.', 'The train had barely left when it began to rain.',
    '/a pɛn lə tʁɛ̃ fy.til paʁ.ti kə la plɥi sə mi.ta tɔ̃.be/', 'a PENN luh TREHⁿ fü-teel par-TEE | kuh la PLWEE suh mee-ta tohⁿ-BAY', ['a-peine', 'etre']),
  map(1683, 'À peine le train fut-il parti que la pluie se mit à tomber.', 'Le train venait à peine de partir quand il s’est mis à pleuvoir.', 'The train had barely left when it began to rain.',
    '/lə tʁɛ̃ və.nɛ.ta pɛn də paʁ.tiʁ kɑ̃.til sɛ mi.za plø.vwaʁ/', 'luh TREHⁿ vuh-neh-ta PENN duh par-TEER | kahⁿ-teel seh mee-za pluh-VWAR',
    'Un nom sujet : le train… fut-il parti, l’inversion reprend le nom par il.', ['a-peine', 'etre']),
  pa(1684, 'À peine l’oratrice eut-elle commencé que la salle se mit à murmurer.', 'The speaker had barely begun when the room started murmuring.',
    '/a pɛn lɔ.ʁa.tʁis y.tɛl kɔ.mɑ̃.se kə la sal sə mi.ta myʁ.my.ʁe/', 'a PENN lo-ra-TREESS ü-tehl ko-mahⁿ-SAY | kuh la SAL suh mee-ta mür-mü-RAY', ['a-peine']),
  map(1685, 'À peine l’oratrice eut-elle commencé que la salle se mit à murmurer.', 'L’oratrice venait à peine de commencer quand la salle s’est mise à murmurer.', 'The speaker had barely begun when the room started murmuring.',
    '/lɔ.ʁa.tʁis və.nɛ.ta pɛn də kɔ.mɑ̃.se kɑ̃ la sal sɛ miz a myʁ.my.ʁe/', 'lo-ra-TREESS vuh-neh-ta PENN duh ko-mahⁿ-SAY | kahⁿ la SAL seh MEEZ a mür-mü-RAY',
    'Eut-elle commencé : le nom, puis elle inversé. La salle réagit aussitôt.', ['a-peine']),
  pa(1686, 'Il eut à peine fini sa phrase qu’on l’interrompit.', 'He had barely finished his sentence when someone interrupted him.',
    '/i.ly a pɛn fi.ni sa fʁaz kɔ̃ lɛ̃.te.ʁɔ̃.pi/', 'ee-LÜ a PENN fee-NEE sa FRAZ | kohⁿ lehⁿ-tay-rohⁿ-PEE', ['a-peine']),
  map(1687, 'Il eut à peine fini sa phrase qu’on l’interrompit.', 'Il venait à peine de finir sa phrase quand on l’a interrompu.', 'He had barely finished his sentence when someone interrupted him.',
    '/il və.nɛ.ta pɛn də fi.niʁ sa fʁaz kɑ̃.tɔ̃ la ɛ̃.te.ʁɔ̃.py/', 'eel vuh-neh-ta PENN duh fee-NEER sa FRAZ | kahⁿ-tohⁿ la ehⁿ-tay-rohⁿ-PÜ',
    'À peine après l’auxiliaire : pas d’inversion, même sens.', ['a-peine']),
  pa(1688, 'Elle n’eut pas plus tôt signé qu’elle regretta sa décision.', 'No sooner had she signed than she regretted her decision.',
    '/ɛl ny pa ply to si.ɲe kɛl ʁə.ɡʁɛ.ta sa de.si.zjɔ̃/', 'ehl NÜ pa plü TOH see-NYAY | kehl ruh-greh-TA sa day-see-ZYOHⁿ', ['a-peine', 'plus-tot']),
  map(1689, 'Elle n’eut pas plus tôt signé qu’elle regretta sa décision.', 'Elle a regretté sa décision juste après avoir signé.', 'She regretted her decision right after signing.',
    '/ɛ.la ʁə.ɡʁɛ.te sa de.si.zjɔ̃ ʒys.ta.pʁɛ a.vwaʁ si.ɲe/', 'eh-la ruh-greh-TAY sa day-see-ZYOHⁿ | zhüs-ta-PREH a-vwar see-NYAY',
    'Ne… pas plus tôt… que : le sens d’à peine… que, sans inversion.', ['a-peine', 'plus-tot']),
  pa(1690, 'À peine fûmes-nous sortis que l’alarme retentit.', 'We had barely gone out when the alarm went off.',
    '/a pɛn fym nu sɔʁ.ti kə la.laʁm ʁə.tɑ̃.ti/', 'a PENN FÜM-noo sor-TEE | kuh la-LARM ruh-tahⁿ-TEE', ['a-peine', 'etre', 'nous']),
  map(1691, 'À peine fûmes-nous sortis que l’alarme retentit.', 'Nous venions à peine de sortir quand l’alarme a retenti.', 'We had barely gone out when the alarm went off.',
    '/nu və.njɔ̃.za pɛn də sɔʁ.tiʁ kɑ̃ la.laʁ.ma ʁə.tɑ̃.ti/', 'noo vuh-nyohⁿ-za PENN duh sor-TEER | kahⁿ la-lar-ma ruh-tahⁿ-TEE',
    'Fûmes-nous sortis : nous, être, inversé. Retentit : retentir.', ['a-peine', 'etre', 'nous'], FCVDR),
  rule(1692, 'À peine et le passé antérieur inversé, puis que et le passé simple : la deuxième action tombe sur la première.', 'À peine plus the inverted passé antérieur, then que plus the passé simple: the second action lands on the first.',
    '/a pɛn e lə pa.se ɑ̃.te.ʁjœʁ ɛ̃.vɛʁ.se pɥi kə e lə pa.se sɛ̃pl la dø.zjɛm a.ksjɔ̃ tɔ̃b syʁ la pʁə.mjɛʁ/', 'a PENN | ay luh pa-SAY ahⁿ-tay-RYUHR ehⁿ-vehr-SAY | pwee KUH | ay luh pa-SAY SEHⁿPL | la deu-ZYEMM ak-SYOHⁿ | TOHⁿB sür la pruh-MYEHR',
    'À peine eut-il ouvert la porte que… : combien de temps entre les deux ?', 'Presque rien : que n’est pas un relatif, il ouvre la deuxième action, qui suit aussitôt. EN: almost no time at all.', ['forme', 'a-peine']),
  rule(1693, 'Ne… pas plus tôt… que : le sens d’à peine… que, sans inversion, dans une langue très écrite.', 'Ne… pas plus tôt… que: the meaning of à peine… que, without inversion, in very written French.',
    '/nə pa ply to kə lə sɑ̃s da pɛn kə sɑ̃.zɛ̃.vɛʁ.sjɔ̃ dɑ̃.zyn lɑ̃ɡ tʁɛ.ze.kʁit/', 'nuh pa plü TOH KUH | luh SAHⁿS da PENN KUH | sahⁿ-zehⁿ-vehr-SYOHⁿ | dahⁿ-zünn LAHⁿG treh-zay-KREET',
    'Elle n’eut pas plus tôt signé que… : que veut dire pas plus tôt ?', 'Pas plus tôt signé : elle vient juste de signer quand la suite arrive. Plus tôt, en deux mots : le temps. EN: no sooner… than.', ['forme', 'a-peine']),
];

/* ── ACT 7 · IL EUT BIENTÔT FINI (.1696-.1711) ───────────────────────────── */

export const ACT7_ROWS: Row[] = [
  pa(1696, 'Il eut bientôt rangé la cuisine.', 'He soon had the kitchen tidied.',
    '/i.ly bjɛ̃.to ʁɑ̃.ʒe la kɥi.zin/', 'ee-LÜ byehⁿ-TOH rahⁿ-ZHAY la kwee-ZEENN', ['bientot']),
  map(1697, 'Il eut bientôt rangé la cuisine.', 'Il a vite rangé la cuisine.', 'He quickly tidied the kitchen.',
    '/i.la vit ʁɑ̃.ʒe la kɥi.zin/', 'ee-la VEET rahⁿ-ZHAY la kwee-ZEENN',
    'Eut bientôt rangé : le rangement est bouclé, et vite. Aujourd’hui : il a vite rangé.', ['bientot'], FCVDR),
  pa(1698, 'En un instant, les pompiers eurent maîtrisé le feu.', 'In an instant, the firefighters had the fire under control.',
    '/ɑ̃.nœ̃.nɛ̃s.tɑ̃ le pɔ̃.pje yʁ me.tʁi.ze lə fø/', 'ahⁿ-nuhⁿ-nehⁿs-TAHⁿ | lay pohⁿ-PYAY ür meh-tree-ZAY luh FEU', ['bientot']),
  map(1699, 'En un instant, les pompiers eurent maîtrisé le feu.', 'En un instant, les pompiers ont maîtrisé le feu.', 'In an instant, the firefighters brought the fire under control.',
    '/ɑ̃.nœ̃.nɛ̃s.tɑ̃ le pɔ̃.pje ɔ̃ me.tʁi.ze lə fø/', 'ahⁿ-nuhⁿ-nehⁿs-TAHⁿ | lay pohⁿ-PYAY ohⁿ meh-tree-ZAY luh FEU',
    'En un instant + passé antérieur : le résultat est atteint d’un coup.', ['bientot']),
  pa(1700, 'Elle eut vite compris qu’on lui mentait.', 'She was quick to realise she was being lied to.',
    '/ɛ.ly vit kɔ̃.pʁi kɔ̃ lɥi mɑ̃.tɛ/', 'eh-LÜ VEET kohⁿ-PREE | kohⁿ lwee mahⁿ-TEH', ['bientot']),
  map(1701, 'Elle eut vite compris qu’on lui mentait.', 'Elle a vite compris qu’on lui mentait.', 'She quickly realised she was being lied to.',
    '/ɛ.la vit kɔ̃.pʁi kɔ̃ lɥi mɑ̃.tɛ/', 'eh-la VEET kohⁿ-PREE | kohⁿ lwee mahⁿ-TEH',
    'Eut vite compris : comprendre, bouclé très tôt. Mentait reste à l’imparfait.', ['bientot']),
  pa(1702, 'En quelques minutes, la neige eut recouvert les traces.', 'Within a few minutes, the snow had covered the tracks.',
    '/ɑ̃ kɛl.kə mi.nyt la nɛʒ y ʁə.ku.vɛʁ le tʁas/', 'ahⁿ kehl-kuh mee-NÜT | la NEZH ü ruh-koo-VEHR lay TRASS', ['bientot']),
  map(1703, 'En quelques minutes, la neige eut recouvert les traces.', 'En quelques minutes, la neige a recouvert les traces.', 'Within a few minutes, the snow covered the tracks.',
    '/ɑ̃ kɛl.kə mi.nyt la nɛʒ a ʁə.ku.vɛʁ le tʁas/', 'ahⁿ kehl-kuh mee-NÜT | la NEZH a ruh-koo-VEHR lay TRASS',
    'Le délai est court, le résultat est là : les traces ont disparu.', ['bientot'], FCVDR),
  pa(1704, 'Les invités furent bientôt partis.', 'The guests were soon gone.',
    '/le.zɛ̃.vi.te fyʁ bjɛ̃.to paʁ.ti/', 'lay-zehⁿ-vee-TAY für byehⁿ-TOH par-TEE', ['bientot', 'etre']),
  map(1705, 'Les invités furent bientôt partis.', 'Les invités sont partis peu après.', 'The guests left shortly afterwards.',
    '/le.zɛ̃.vi.te sɔ̃ paʁ.ti pø a.pʁɛ/', 'lay-zehⁿ-vee-TAY sohⁿ par-TEE | peu a-PREH',
    'Furent bientôt partis : partir prend être, et la maison se vide vite.', ['bientot', 'etre']),
  pa(1706, 'En moins d’une heure, ils eurent vidé la grange.', 'In less than an hour, they had emptied the barn.',
    '/ɑ̃ mwɛ̃ dy.nœʁ il.zyʁ vi.de la ɡʁɑ̃ʒ/', 'ahⁿ mwehⁿ dü-NUHR | eel-ZÜR vee-DAY la GRAHⁿZH', ['bientot']),
  map(1707, 'En moins d’une heure, ils eurent vidé la grange.', 'En moins d’une heure, ils ont vidé la grange.', 'In less than an hour, they emptied the barn.',
    '/ɑ̃ mwɛ̃ dy.nœʁ il.zɔ̃ vi.de la ɡʁɑ̃ʒ/', 'ahⁿ mwehⁿ dü-NUHR | eel-zohⁿ vee-DAY la GRAHⁿZH',
    'En moins de + passé antérieur : la vitesse, puis la grange vide.', ['bientot']),
  rule(1708, 'Dans une phrase seule, le passé antérieur suit souvent bientôt, vite ou en un instant : l’action est bouclée très vite.', 'In a single clause, the passé antérieur often follows bientôt, vite or en un instant: the action is wrapped up very quickly.',
    '/dɑ̃.zyn fʁaz sœl lə pa.se ɑ̃.te.ʁjœʁ sɥi su.vɑ̃ bjɛ̃.to vit u ɑ̃.nœ̃.nɛ̃s.tɑ̃ la.ksjɔ̃ ɛ bu.kle tʁɛ vit/', 'dahⁿ-zünn FRAZ SUHL | luh pa-SAY ahⁿ-tay-RYUHR swee soo-VAHⁿ | byehⁿ-TOH | VEET | oo ahⁿ-nuhⁿ-nehⁿs-TAHⁿ | lak-SYOHⁿ eh boo-KLAY treh VEET',
    'Il eut bientôt rangé la cuisine : que dit eut rangé ?', 'Pas d’avant ni d’après dans la phrase : le passé antérieur dit seulement que c’est fait, et vite. EN: done, and quickly.', ['forme', 'bientot']),
  rule(1709, 'Il eut bientôt fini, il finit bientôt : le premier dit le résultat déjà atteint, le second l’action qui se fait.', 'Il eut bientôt fini, il finit bientôt: the first says the result already reached, the second the action as it happens.',
    '/i.ly bjɛ̃.to fi.ni il fi.ni bjɛ̃.to lə pʁə.mje di lə ʁe.zyl.ta de.ʒa.ta.tɛ̃ lə zɡɔ̃ la.ksjɔ̃ ki sə fɛ/', 'ee-LÜ byehⁿ-TOH fee-NEE | eel fee-NEE byehⁿ-TOH | luh pruh-MYAY dee luh ray-zül-TA day-zha-ta-TEHⁿ | luh zuh-GOHⁿ lak-SYOHⁿ kee suh FEH',
    'Il eut bientôt fini ou il finit bientôt : lequel dit que c’est déjà fait ?', 'Eut fini : le résultat. Finit : l’action. EN: the result versus the action.', ['forme', 'bientot']),
];

/* ── ACT 8 · AVAIT FINI OU EUT FINI (.1712-.1727) ────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1712, 'Chaque soir, dès qu’il avait soupé, il sortait fumer sur la galerie.', 'Every evening, as soon as he had had supper, he went out to smoke on the porch.',
    '/ʃak swaʁ dɛ ki.la.vɛ su.pe il sɔʁ.tɛ fy.me syʁ la ɡal.ʁi/', 'shak SWAR | deh kee-la-veh soo-PAY | eel sor-teh fü-MAY sür la gal-REE', ['plus-que-parfait', 'habitude', 'lecture'], FCVDR),
  pa(1713, 'Ce soir-là, dès qu’il eut soupé, il sortit sur la galerie.', 'That evening, as soon as he had had supper, he went out onto the porch.',
    '/sə swaʁ la dɛ ki.ly su.pe il sɔʁ.ti syʁ la ɡal.ʁi/', 'suh swar-LA | deh kee-LÜ soo-PAY | eel sor-TEE sür la gal-REE', ['une-fois', 'lecture']),
  map(1714, 'Ce soir-là, dès qu’il eut soupé, il sortit sur la galerie.', 'Ce soir-là, dès qu’il a soupé, il est sorti sur la galerie.', 'That evening, as soon as he had had supper, he went out onto the porch.',
    '/sə swaʁ la dɛ ki.la su.pe i.lɛ sɔʁ.ti syʁ la ɡal.ʁi/', 'suh swar-LA | deh kee-la soo-PAY | ee-leh sor-TEE sür la gal-REE',
    'Ce soir-là, une seule fois : passé antérieur, puis passé simple. Aujourd’hui : il a soupé, il est sorti.', ['une-fois', 'lecture']),
  pa(1715, 'Quand il eut fini sa journée, il passa au café.', 'When he had finished his day’s work, he dropped in at the café.',
    '/kɑ̃.ti.ly fi.ni sa ʒuʁ.ne il pa.sa o ka.fe/', 'kahⁿ-tee-LÜ fee-NEE sa zhoor-NAY | eel pa-SA oh ka-FAY', ['une-fois']),
  sent(1716, 'Quand il avait fini sa journée, il passait au café.', 'When he had finished his day’s work, he would drop in at the café.',
    '/kɑ̃.ti.la.vɛ fi.ni sa ʒuʁ.ne il pa.sɛ o ka.fe/', 'kahⁿ-tee-la-VEH fee-NEE sa zhoor-NAY | eel pa-SEH oh ka-FAY', ['plus-que-parfait', 'habitude']),
  map(1717, 'Quand il eut fini sa journée, il passa au café.', 'Quand il a fini sa journée, il est passé au café.', 'When he had finished his day’s work, he dropped in at the café.',
    '/kɑ̃.ti.la fi.ni sa ʒuʁ.ne i.lɛ pa.se o ka.fe/', 'kahⁿ-tee-la fee-NEE sa zhoor-NAY | ee-leh pa-SAY oh ka-FAY',
    'Eut fini, passa : un soir précis. Avait fini, passait : tous les soirs.', ['une-fois'], FCVDR),
  pa(1718, 'Quand la lettre arriva, elle avait quitté la ville depuis un mois.', 'When the letter arrived, she had left town a month before.',
    '/kɑ̃ la lɛtʁ a.ʁi.va ɛ.la.vɛ ki.te la vil də.pɥi.zœ̃ mwa/', 'kahⁿ la LETR a-ree-VA | eh-la-VEH kee-TAY la VEEL | duh-pwee-zuhⁿ MWA', ['plus-que-parfait', 'loin']),
  map(1719, 'Quand la lettre arriva, elle avait quitté la ville depuis un mois.', 'Quand la lettre est arrivée, elle avait quitté la ville depuis un mois.', 'When the letter arrived, she had left town a month before.',
    '/kɑ̃ la lɛtʁ ɛ.ta.ʁi.ve ɛ.la.vɛ ki.te la vil də.pɥi.zœ̃ mwa/', 'kahⁿ la LETR eh-ta-ree-VAY | eh-la-VEH kee-TAY la VEEL | duh-pwee-zuhⁿ MWA',
    'Avait quitté : loin en arrière, un mois avant. Le plus-que-parfait ne bouge pas aujourd’hui.', ['plus-que-parfait', 'loin']),
  pa(1720, 'Elle eut à peine quitté la ville que la lettre arriva.', 'She had barely left town when the letter arrived.',
    '/ɛ.ly a pɛn ki.te la vil kə la lɛtʁ a.ʁi.va/', 'eh-LÜ a PENN kee-TAY la VEEL | kuh la LETR a-ree-VA', ['une-fois', 'a-peine']),
  map(1721, 'Elle eut à peine quitté la ville que la lettre arriva.', 'Elle venait à peine de quitter la ville quand la lettre est arrivée.', 'She had barely left town when the letter arrived.',
    '/ɛl və.nɛ.ta pɛn də ki.te la vil kɑ̃ la lɛtʁ ɛ.ta.ʁi.ve/', 'ehl vuh-neh-ta PENN duh kee-TAY la VEEL | kahⁿ la LETR eh-ta-ree-VAY',
    'Eut à peine quitté : juste avant, collé à l’arrivée. Avait quitté : un mois avant.', ['une-fois', 'a-peine']),
  pa(1722, 'Quand les ouvriers eurent abattu les arbres, il restait les branches à brûler.', 'When the workers had felled the trees, there were still the branches to burn.',
    '/kɑ̃ le.zu.vʁi.je yʁ.ta.ba.ty le.zaʁbʁ il ʁɛs.tɛ le bʁɑ̃ʃ a bʁy.le/', 'kahⁿ lay-zoo-vree-YAY | ür-ta-ba-TÜ lay-ZARBR | eel res-TEH lay BRAHⁿSH a brü-LAY', ['resultat']),
  map(1723, 'Quand les ouvriers eurent abattu les arbres, il restait les branches à brûler.', 'Une fois les arbres abattus, il restait les branches à brûler.', 'Once the trees were felled, there were still the branches to burn.',
    '/yn fwa le.zaʁbʁ a.ba.ty il ʁɛs.tɛ le bʁɑ̃ʃ a bʁy.le/', 'ünn FWA lay-ZARBR a-ba-TÜ | eel res-TEH lay BRAHⁿSH a brü-LAY',
    'Passé antérieur, puis un imparfait : l’étape bouclée laisse une situation. Aujourd’hui : une fois les arbres abattus.', ['resultat']),
  rule(1724, 'Plus-que-parfait : un fait accompli vu de loin, souvent un décor ou une habitude. Passé antérieur : une étape bouclée juste avant la suivante, une seule fois.', 'Plus-que-parfait: a completed fact seen from a distance, often a background or a habit. Passé antérieur: a step wrapped up just before the next one, once.',
    '/plys.kə.paʁ.fɛ œ̃ fɛ.ta.kɔ̃.pli vy də lwɛ̃ pa.se ɑ̃.te.ʁjœʁ yn e.tap bu.kle ʒyst a.vɑ̃ la sɥi.vɑ̃t yn sœl fwa/', 'plüs-kuh-par-FEH | uhⁿ feh-ta-kohⁿ-PLEE vü duh LWEHⁿ | pa-SAY ahⁿ-tay-RYUHR | ünn ay-TAP boo-KLAY | zhüst a-VAHⁿ la swee-VAHⁿT | ünn suhl FWA',
    'Avait fini ou eut fini : lequel peut dire une habitude ?', 'Avait fini, avec un imparfait : tous les soirs. Eut fini, avec un passé simple : ce soir-là. EN: habit versus one occasion.', ['forme', 'plus-que-parfait']),
  rule(1725, 'Quand et le plus-que-parfait, puis l’imparfait : une habitude. Quand et le passé antérieur, puis le passé simple : une fois.', 'Quand plus the plus-que-parfait, then the imparfait: a habit. Quand plus the passé antérieur, then the passé simple: once.',
    '/kɑ̃ e lə plys.kə.paʁ.fɛ pɥi lɛ̃.paʁ.fɛ yn a.bi.tyd kɑ̃ e lə pa.se ɑ̃.te.ʁjœʁ pɥi lə pa.se sɛ̃pl yn fwa/', 'KAHⁿ | ay luh plüs-kuh-par-FEH | pwee lehⁿ-par-FEH | ünn a-bee-TÜD | KAHⁿ | ay luh pa-SAY ahⁿ-tay-RYUHR | pwee luh pa-SAY SEHⁿPL | ünn FWA',
    'Quand il avait soupé, il sortait : combien de fois ?', 'Tous les soirs : la paire plus-que-parfait et imparfait répète la scène. EN: every evening.', ['forme', 'plus-que-parfait']),
];

/* ── ACT 9 · LE RYTHME DU RÉCIT (.1728-.1743) ────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  pa(1728, 'Quand elle eut fermé les volets, elle alluma la lampe.', 'When she had closed the shutters, she lit the lamp.',
    '/kɑ̃.tɛ.ly fɛʁ.me le vɔ.lɛ ɛ.la.ly.ma la lɑ̃p/', 'kahⁿ-teh-LÜ fehr-MAY lay vo-LEH | eh-la-lü-MA la LAHⁿP', ['rythme', 'lecture']),
  pa(1729, 'Elle ferma les volets et alluma la lampe.', 'She closed the shutters and lit the lamp.',
    '/ɛl fɛʁ.ma le vɔ.lɛ e a.ly.ma la lɑ̃p/', 'ehl fehr-MA lay vo-LEH | ay a-lü-MA la LAHⁿP', ['rythme', 'passe-simple', 'lecture']),
  map(1730, 'Quand elle eut fermé les volets, elle alluma la lampe.', 'Quand elle a fermé les volets, elle a allumé la lampe.', 'When she had closed the shutters, she lit the lamp.',
    '/kɑ̃.tɛ.la fɛʁ.me le vɔ.lɛ ɛ.la a.ly.me la lɑ̃p/', 'kahⁿ-teh-la fehr-MAY lay vo-LEH | eh-la a-lü-MAY la LAHⁿP',
    'Le passé antérieur détache la première étape et l’attache à la seconde : un palier, puis la suite.', ['rythme', 'lecture'], FCVDR),
  pa(1731, 'Il eut bientôt vidé son bol.', 'He soon emptied his bowl.',
    '/i.ly bjɛ̃.to vi.de sɔ̃ bɔl/', 'ee-LÜ byehⁿ-TOH vee-DAY sohⁿ BOL', ['rythme', 'bientot', 'lecture']),
  map(1732, 'Il eut bientôt vidé son bol.', 'Il a vite vidé son bol.', 'He quickly emptied his bowl.',
    '/i.la vit vi.de sɔ̃ bɔl/', 'ee-la VEET vee-DAY sohⁿ BOL',
    'Bientôt : le repas passe en une ligne. L’auteure accélère.', ['rythme', 'bientot', 'lecture']),
  pa(1733, 'Quand ils eurent mangé, bu et chanté, ils s’endormirent sur la paille.', 'When they had eaten, drunk and sung, they fell asleep on the straw.',
    '/kɑ̃.til.zyʁ mɑ̃.ʒe by e ʃɑ̃.te il sɑ̃.dɔʁ.miʁ syʁ la paj/', 'kahⁿ-teel-ZÜR mahⁿ-ZHAY | BÜ | ay shahⁿ-TAY | eel sahⁿ-dor-MEER sür la PAHY', ['rythme']),
  map(1734, 'Quand ils eurent mangé, bu et chanté, ils s’endormirent sur la paille.', 'Après avoir mangé, bu et chanté, ils se sont endormis sur la paille.', 'After eating, drinking and singing, they fell asleep on the straw.',
    '/a.pʁɛ a.vwaʁ mɑ̃.ʒe by e ʃɑ̃.te il sə sɔ̃.tɑ̃.dɔʁ.mi syʁ la paj/', 'a-PREH a-vwar mahⁿ-ZHAY | BÜ | ay shahⁿ-TAY | eel suh sohⁿ-tahⁿ-dor-MEE sür la PAHY',
    'Trois participes sous un seul eurent : toute une soirée bouclée en une subordonnée.', ['rythme']),
  pa(1735, 'Dès qu’il eut posé le pied sur le quai, il chercha sa sœur des yeux.', 'As soon as he had set foot on the quay, he looked around for his sister.',
    '/dɛ ki.ly po.ze lə pje syʁ lə ke il ʃɛʁ.ʃa sa sœʁ de.zjø/', 'deh kee-LÜ po-ZAY luh PYAY sür luh KAY | eel shehr-SHA sa SUHR day-ZYEU', ['rythme']),
  map(1736, 'Dès qu’il eut posé le pied sur le quai, il chercha sa sœur des yeux.', 'Dès qu’il a posé le pied sur le quai, il a cherché sa sœur des yeux.', 'As soon as he had set foot on the quay, he looked around for his sister.',
    '/dɛ ki.la po.ze lə pje syʁ lə ke i.la ʃɛʁ.ʃe sa sœʁ de.zjø/', 'deh kee-la po-ZAY luh PYAY sür luh KAY | ee-la shehr-SHAY sa SUHR day-ZYEU',
    'Un pied posé, et déjà le regard : pas un temps mort.', ['rythme'], FCVDR),
  rule(1737, 'Le passé antérieur ferme une étape et ouvre la suivante : le récit avance par paliers, sans temps mort.', 'The passé antérieur closes one step and opens the next: the story moves on in stages, with no dead time.',
    '/lə pa.se ɑ̃.te.ʁjœʁ fɛʁm yn e.tap e uvʁ la sɥi.vɑ̃t lə ʁe.si a.vɑ̃s paʁ pa.lje sɑ̃ tɑ̃ mɔʁ/', 'luh pa-SAY ahⁿ-tay-RYUHR FEHRM ünn ay-TAP | ay OOVR la swee-VAHⁿT | luh ray-SEE a-VAHⁿS par pa-LYAY | sahⁿ tahⁿ MOR',
    'Que fait le passé antérieur au rythme d’une page ?', 'Il serre l’enchaînement : chaque geste est fini avant le suivant, et la page avance sans pause. EN: tight sequencing, no pause.', ['forme', 'rythme']),
  rule(1738, 'Deux passés simples à la suite : plus abrupt. Avec un passé antérieur : l’ordre est souligné, l’enchaînement serré.', 'Two passés simples in a row: more abrupt. With a passé antérieur: the order is underlined, the sequence tight.',
    '/dø pa.se sɛ̃pl a la sɥit ply.za.bʁypt a.vɛk œ̃ pa.se ɑ̃.te.ʁjœʁ lɔʁdʁ ɛ su.li.ɲe lɑ̃.ʃɛn.mɑ̃ se.ʁe/', 'deu pa-SAY SEHⁿPL a la SWEET | plü-za-BRÜPT | a-vek uhⁿ pa-SAY ahⁿ-tay-RYUHR | LORDR eh soo-lee-NYAY | lahⁿ-shenn-MAHⁿ say-RAY',
    'Elle ferma les volets et alluma la lampe : qu’est-ce qui change avec quand elle eut fermé ?', 'Sans passé antérieur, deux gestes juxtaposés ; avec lui, le premier est posé comme la condition du second. EN: juxtaposed, or staged.', ['forme', 'rythme']),
  sent(1739, 'Ici, la narratrice accélère : chaque geste est bouclé avant le suivant.', 'Here the narrator speeds up: each action is wrapped up before the next.',
    '/i.si la na.ʁa.tʁis ak.se.lɛʁ ʃak ʒɛst ɛ bu.kle a.vɑ̃ lə sɥi.vɑ̃/', 'ee-SEE | la na-ra-TREESS ak-say-LEHR | shak ZHEST eh boo-KLAY | a-vahⁿ luh swee-VAHⁿ', ['rythme', 'analyse']),
  sent(1740, 'Plus loin, l’auteur ralentit et s’attarde sur le décor.', 'Further on, the author slows down and lingers over the setting.',
    '/ply lwɛ̃ lo.tœʁ ʁa.lɑ̃.ti e sa.taʁd syʁ lə de.kɔʁ/', 'plü LWEHⁿ | loh-TUHR ra-lahⁿ-TEE | ay sa-TARD sür luh day-KOR', ['rythme', 'analyse']),
];

/* ── ACT 10 · AUJOURD’HUI, TU DIRAIS (.1744-.1759) ───────────────────────── */

export const ACT10_ROWS: Row[] = [
  pa(1744, 'Quand elle eut terminé son rapport, elle l’envoya à la direction.', 'When she had finished her report, she sent it to management.',
    '/kɑ̃.tɛ.ly tɛʁ.mi.ne sɔ̃ ʁa.pɔʁ ɛl lɑ̃.vwa.ja a la di.ʁɛk.sjɔ̃/', 'kahⁿ-teh-LÜ tehr-mee-NAY sohⁿ ra-POR | ehl lahⁿ-vwa-YA a la dee-rek-SYOHⁿ', ['aujourdhui']),
  map(1745, 'Quand elle eut terminé son rapport, elle l’envoya à la direction.', 'Quand elle a terminé son rapport, elle l’a envoyé à la direction.', 'When she had finished her report, she sent it to management.',
    '/kɑ̃.tɛ.la tɛʁ.mi.ne sɔ̃ ʁa.pɔʁ ɛl la ɑ̃.vwa.je a la di.ʁɛk.sjɔ̃/', 'kahⁿ-teh-la tehr-mee-NAY sohⁿ ra-POR | ehl la ahⁿ-vwa-YAY a la dee-rek-SYOHⁿ',
    'La version la plus simple : deux passés composés, l’ordre est dans quand.', ['aujourdhui'], FCVDR),
  map(1746, 'Quand elle eut terminé son rapport, elle l’envoya à la direction.', 'Après avoir terminé son rapport, elle l’a envoyé à la direction.', 'After finishing her report, she sent it to management.',
    '/a.pʁɛ a.vwaʁ tɛʁ.mi.ne sɔ̃ ʁa.pɔʁ ɛl la ɑ̃.vwa.je a la di.ʁɛk.sjɔ̃/', 'a-PREH a-vwar tehr-mee-NAY sohⁿ ra-POR | ehl la ahⁿ-vwa-YAY a la dee-rek-SYOHⁿ',
    'Un seul sujet : après avoir + participe garde l’ordre sans conjonction.', ['aujourdhui', 'apres-avoir']),
  pa(1747, 'À peine fut-il arrivé qu’on l’appela au téléphone.', 'He had barely arrived when he was called to the phone.',
    '/a pɛn fy.ti.la.ʁi.ve kɔ̃ la.pə.la o te.le.fɔn/', 'a PENN fü-tee-la-ree-VAY | kohⁿ la-puh-LA oh tay-lay-FONN', ['aujourdhui', 'a-peine']),
  map(1748, 'À peine fut-il arrivé qu’on l’appela au téléphone.', 'Il venait à peine d’arriver quand on l’a appelé au téléphone.', 'He had barely arrived when he was called to the phone.',
    '/il və.nɛ.ta pɛn da.ʁi.ve kɑ̃.tɔ̃ la a.pə.le o te.le.fɔn/', 'eel vuh-neh-ta PENN da-ree-VAY | kahⁿ-tohⁿ la a-puh-LAY oh tay-lay-FONN',
    'À peine… que, aujourd’hui : venir à peine de… quand, ou à peine était-il arrivé que, à l’écrit soigné.', ['aujourdhui', 'a-peine'], FCVDR),
  pa(1749, 'Ils eurent vite oublié l’incident.', 'They were quick to forget the incident.',
    '/il.zyʁ vit u.bli.je lɛ̃.si.dɑ̃/', 'eel-ZÜR VEET oo-blee-YAY | lehⁿ-see-DAHⁿ', ['aujourdhui', 'bientot']),
  map(1750, 'Ils eurent vite oublié l’incident.', 'Ils ont vite oublié l’incident.', 'They quickly forgot the incident.',
    '/il.zɔ̃ vit u.bli.je lɛ̃.si.dɑ̃/', 'eel-zohⁿ VEET oo-blee-YAY | lehⁿ-see-DAHⁿ',
    'Phrase seule avec vite : un passé composé et le même vite.', ['aujourdhui', 'bientot']),
  pa(1751, 'Une fois que le jury eut délibéré, la présidente lut les résultats.', 'Once the jury had deliberated, the chair read out the results.',
    '/yn fwa kə lə ʒy.ʁi y de.li.be.ʁe la pʁe.zi.dɑ̃t ly le ʁe.zyl.ta/', 'ünn FWA kuh luh zhü-REE ü day-lee-bay-RAY | la pray-zee-DAHⁿT LÜ lay ray-zül-TA', ['aujourdhui']),
  map(1752, 'Une fois que le jury eut délibéré, la présidente lut les résultats.', 'Une fois que le jury a délibéré, la présidente a lu les résultats.', 'Once the jury had deliberated, the chair read out the results.',
    '/yn fwa kə lə ʒy.ʁi a de.li.be.ʁe la pʁe.zi.dɑ̃t a ly le ʁe.zyl.ta/', 'ünn FWA kuh luh zhü-REE a day-lee-bay-RAY | la pray-zee-DAHⁿT a LÜ lay ray-zül-TA',
    'Lut : lire. Aujourd’hui : a lu.', ['aujourdhui']),
  rule(1753, 'Pour dire un passé antérieur aujourd’hui : quand il a fini, après avoir fini, une fois qu’il a fini, il venait de finir.', 'To say a passé antérieur today: quand il a fini, après avoir fini, une fois qu’il a fini, il venait de finir.',
    '/puʁ diʁ œ̃ pa.se ɑ̃.te.ʁjœʁ o.ʒuʁ.dɥi kɑ̃.ti.la fi.ni a.pʁɛ a.vwaʁ fi.ni yn fwa ki.la fi.ni il və.nɛ də fi.niʁ/', 'poor DEER uhⁿ pa-SAY ahⁿ-tay-RYUHR oh-zhoor-DWEE | kahⁿ-tee-la fee-NEE | a-PREH a-vwar fee-NEE | ünn FWA kee-la fee-NEE | eel vuh-NEH duh fee-NEER',
    'Quand il eut fini, il sortit : quatre façons de le dire aujourd’hui ?', 'Quand il a fini ; après avoir fini ; une fois qu’il a fini ; il venait de finir quand… Choisis selon la proximité. EN: four modern routes.', ['forme', 'aujourdhui']),
  rule(1754, 'Dans un récit au passé composé, quand il a fini suffit : l’ordre se lit dans la conjonction.', 'In a story told in the passé composé, quand il a fini is enough: the order is read in the conjunction.',
    '/dɑ̃.zœ̃ ʁe.si o pa.se kɔ̃.po.ze kɑ̃.ti.la fi.ni sy.fi lɔʁdʁ sə li dɑ̃ la kɔ̃.ʒɔ̃k.sjɔ̃/', 'dahⁿ-zuhⁿ ray-SEE oh pa-SAY kohⁿ-poh-ZAY | kahⁿ-tee-la fee-NEE sü-FEE | LORDR suh LEE | dahⁿ la kohⁿ-zhohⁿk-SYOHⁿ',
    'Faut-il un temps spécial pour l’antériorité en racontant aujourd’hui ?', 'Non : quand, dès que, une fois que portent déjà l’ordre. Deux passés composés suffisent. EN: the conjunction carries the order.', ['forme', 'aujourdhui']),
];

/* ── ACT 11 · LE SURCOMPOSÉ, À L’OREILLE (.1760-.1775) ───────────────────── */

export const ACT11_ROWS: Row[] = [
  sc(1760, 'Quand j’ai eu fini mon service, je suis rentré me coucher.', 'When I had finished my shift, I went home to bed.',
    '/kɑ̃ ʒe y fi.ni mɔ̃ sɛʁ.vis ʒə sɥi ʁɑ̃.tʁe mə ku.ʃe/', 'kahⁿ zhay Ü fee-NEE mohⁿ sehr-VEESS | zhuh swee rahⁿ-TRAY muh koo-SHAY', ['oral']),
  map(1761, 'Quand j’ai eu fini mon service, je suis rentré me coucher.', 'Quand j’ai fini mon service, je suis rentré me coucher.', 'When I had finished my shift, I went home to bed.',
    '/kɑ̃ ʒe fi.ni mɔ̃ sɛʁ.vis ʒə sɥi ʁɑ̃.tʁe mə ku.ʃe/', 'kahⁿ zhay fee-NEE mohⁿ sehr-VEESS | zhuh swee rahⁿ-TRAY muh koo-SHAY',
    'J’ai eu fini : un surcomposé, entendu à l’oral. À l’écrit soigné : quand j’ai fini.', ['oral'], FCVDR, 'À l’écrit soigné, tu écrirais…'),
  sc(1762, 'Dès qu’elle a eu payé, elle est partie.', 'As soon as she had paid, she left.',
    '/dɛ kɛ.la y pe.je ɛ.lɛ paʁ.ti/', 'deh keh-la Ü pay-YAY | eh-leh par-TEE', ['oral']),
  map(1763, 'Dès qu’elle a eu payé, elle est partie.', 'Dès qu’elle a payé, elle est partie.', 'As soon as she had paid, she left.',
    '/dɛ kɛ.la pe.je ɛ.lɛ paʁ.ti/', 'deh keh-la pay-YAY | eh-leh par-TEE',
    'A eu payé : l’action bouclée juste avant, comme un passé antérieur, mais à l’oral.', ['oral'], FCVR, 'À l’écrit soigné, tu écrirais…'),
  sc(1764, 'Une fois qu’on a eu mangé, on est allés marcher au bord du lac.', 'Once we had eaten, we went for a walk by the lake.',
    '/yn fwa kɔ̃.na y mɑ̃.ʒe ɔ̃.nɛ.ta.le maʁ.ʃe o bɔʁ dy lak/', 'ünn FWA kohⁿ-na Ü mahⁿ-ZHAY | ohⁿ-neh-ta-LAY mar-SHAY oh bor dü LAK', ['oral']),
  map(1765, 'Une fois qu’on a eu mangé, on est allés marcher au bord du lac.', 'Après le repas, on est allés marcher au bord du lac.', 'After the meal, we went for a walk by the lake.',
    '/a.pʁɛ lə ʁə.pa ɔ̃.nɛ.ta.le maʁ.ʃe o bɔʁ dy lak/', 'a-preh luh ruh-PA | ohⁿ-neh-ta-LAY mar-SHAY oh bor dü LAK',
    'À l’écrit, un nom (après le repas) ou une fois qu’on a mangé.', ['oral'], FCVR, 'À l’écrit soigné, tu écrirais…'),
  sc(1766, 'Moi, des hivers comme celui-là, j’en ai eu vu.', 'Me, I have seen winters like that one in my time.',
    '/mwa de.zi.vɛʁ kɔm sə.lɥi la ʒɑ̃.ne y vy/', 'MWA | day-zee-VEHR kom suh-lwee-LA | zhahⁿ-nay Ü VÜ', ['regional']),
  map(1767, 'Moi, des hivers comme celui-là, j’en ai eu vu.', 'Moi, des hivers comme celui-là, j’en ai déjà vu.', 'Me, I have seen winters like that one before.',
    '/mwa de.zi.vɛʁ kɔm sə.lɥi la ʒɑ̃.ne de.ʒa vy/', 'MWA | day-zee-VEHR kom suh-lwee-LA | zhahⁿ-nay day-ZHA VÜ',
    'J’en ai eu vu, sans subordonnée : un usage régional, le vécu d’autrefois. Partout ailleurs : j’en ai déjà vu.', ['regional'], FCVR, 'Dans le français de partout, tu dirais…'),
  rule(1768, 'Quand j’ai eu fini : le passé surcomposé, entendu surtout à l’oral ; à l’écrit soigné, on écrit quand j’ai fini.', 'Quand j’ai eu fini: the passé surcomposé, heard mostly in speech; in careful writing, people write quand j’ai fini.',
    '/kɑ̃ ʒe y fi.ni lə pa.se syʁ.kɔ̃.po.ze ɑ̃.tɑ̃.dy syʁ.tu.ta lɔ.ʁal a le.kʁi swa.ɲe ɔ̃.ne.kʁi kɑ̃ ʒe fi.ni/', 'kahⁿ zhay Ü fee-NEE | luh pa-SAY sür-kohⁿ-poh-ZAY | ahⁿ-tahⁿ-DÜ sür-too-ta lo-RAL | a lay-KREE swa-NYAY | ohⁿ-nay-KREE kahⁿ zhay fee-NEE',
    'Quand j’ai eu fini : où l’entends-tu ?', 'Dans la conversation, après quand, dès que, une fois que. À l’écrit soigné, tu ne le liras presque pas. EN: in speech, after a time hinge.', ['forme', 'oral']),
  rule(1769, 'J’en ai eu vu : un surcomposé sans subordonnée, régional, surtout dans le sud de la France et en Suisse romande.', 'J’en ai eu vu: a surcomposé with no time clause, regional, chiefly in the south of France and French-speaking Switzerland.',
    '/ʒɑ̃.ne y vy œ̃ syʁ.kɔ̃.po.ze sɑ̃ syb.ɔʁ.dɔ.ne ʁe.ʒjɔ.nal syʁ.tu dɑ̃ lə syd də la fʁɑ̃s e ɑ̃ sɥis ʁɔ.mɑ̃d/', 'zhahⁿ-nay Ü VÜ | uhⁿ sür-kohⁿ-poh-ZAY | sahⁿ süb-or-do-NAY | ray-zhyo-NAL | sür-TOO dahⁿ luh SÜD duh la FRAHⁿS | ay ahⁿ SWEESS ro-MAHⁿD',
    'J’en ai eu vu : de quelle région vient ce français ?', 'Surtout du sud de la France et de la Suisse romande : il dit une expérience passée. Reconnais-le, ne le prescris pas. EN: regional; recognise it.', ['forme', 'regional']),
  rule(1770, 'Le surcomposé répond au passé antérieur : la même action bouclée juste avant, mais dans la langue parlée.', 'The surcomposé answers the passé antérieur: the same action wrapped up just before, but in spoken French.',
    '/lə syʁ.kɔ̃.po.ze ʁe.pɔ̃ o pa.se ɑ̃.te.ʁjœʁ la mɛm a.ksjɔ̃ bu.kle ʒyst a.vɑ̃ mɛ dɑ̃ la lɑ̃ɡ paʁ.le/', 'luh sür-kohⁿ-poh-ZAY ray-POHⁿ oh pa-SAY ahⁿ-tay-RYUHR | la MEMM ak-SYOHⁿ boo-KLAY zhüst a-VAHⁿ | meh dahⁿ la LAHⁿG par-LAY',
    'Quand il eut fini, quand il a eu fini : quel rapport ?', 'Le même sens. Le premier est écrit et littéraire, le second parlé : deux registres, une seule idée. EN: one idea, two registers.', ['forme', 'oral']),
  sent(1771, 'Je le reconnais à l’oreille, mais je ne l’écris pas.', 'I recognise it by ear, but I do not write it.',
    '/ʒə lə ʁə.kɔ.nɛ.za lɔ.ʁɛj mɛ ʒə nə le.kʁi pa/', 'zhuh luh ruh-ko-neh-za lo-REY | meh zhuh nuh lay-KREE PA', ['oral'], FCVDR),
];

/* ── ACT 12 · RACONTE-LE AU CLUB (.1776-.1791) ───────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1776, 'Dans ce chapitre, tout s’enchaîne très vite.', 'In this chapter, everything follows on very quickly.',
    '/dɑ̃ sə ʃa.pitʁ tu sɑ̃.ʃɛn tʁɛ vit/', 'dahⁿ suh sha-PEETR | too sahⁿ-SHENN treh VEET', ['tache'], FCVDR),
  sent(1777, 'L’auteure emploie le passé antérieur pour serrer les étapes.', 'The author uses the passé antérieur to tighten the steps.',
    '/lo.tœʁ ɑ̃.plwa lə pa.se ɑ̃.te.ʁjœʁ puʁ se.ʁe le.ze.tap/', 'loh-TUHR ahⁿ-PLWA | luh pa-SAY ahⁿ-tay-RYUHR | poor say-RAY lay-zay-TAP', ['tache', 'analyse']),
  sent(1778, 'Ce qui m’a frappé, c’est la vitesse de la fin.', 'What struck me was how fast the ending is.',
    '/sə ki ma fʁa.pe sɛ la vi.tɛs də la fɛ̃/', 'suh kee ma fra-PAY | seh la vee-TESS duh la FEHⁿ', ['tache'], FCVDR),
  sent(1779, 'Je vous résume le chapitre en quelques phrases.', 'I will sum up the chapter for you in a few sentences.',
    '/ʒə vu ʁe.zym lə ʃa.pitʁ ɑ̃ kɛl.kə fʁaz/', 'zhuh voo ray-ZÜM luh sha-PEETR | ahⁿ kehl-kuh FRAZ', ['tache']),
  sent(1780, 'Au début, le rythme est lent ; ensuite, il s’accélère.', 'At first the pace is slow; then it speeds up.',
    '/o de.by lə ʁitm ɛ lɑ̃ ɑ̃.sɥit il sak.se.lɛʁ/', 'oh day-BÜ | luh REETM eh LAHⁿ | ahⁿ-SWEET | eel sak-say-LEHR', ['tache', 'analyse']),
  pa(1781, 'À peine eut-il franchi le seuil qu’il reconnut l’odeur de la maison.', 'He had barely crossed the threshold when he recognised the smell of the house.',
    '/a pɛn y.til fʁɑ̃.ʃi lə sœj kil ʁə.kɔ.ny lɔ.dœʁ də la mɛ.zɔ̃/', 'a PENN ü-teel frahⁿ-SHEE luh SUHY | keel ruh-ko-NÜ lo-DUHR duh la meh-ZOHⁿ', ['tache', 'a-peine']),
  map(1782, 'À peine eut-il franchi le seuil qu’il reconnut l’odeur de la maison.', 'Il venait à peine de franchir le seuil quand il a reconnu l’odeur de la maison.', 'He had barely crossed the threshold when he recognised the smell of the house.',
    '/il və.nɛ.ta pɛn də fʁɑ̃.ʃiʁ lə sœj kɑ̃.ti.la ʁə.kɔ.ny lɔ.dœʁ də la mɛ.zɔ̃/', 'eel vuh-neh-ta PENN duh frahⁿ-SHEER luh SUHY | kahⁿ-tee-la ruh-ko-NÜ lo-DUHR duh la meh-ZOHⁿ',
    'À peine + passé antérieur : l’odeur saute au visage dès le seuil.', ['tache', 'a-peine']),
  sent(1783, 'Une fois la valise posée, il a fait le tour des pièces.', 'With the suitcase put down, he went round the rooms.',
    '/yn fwa la va.liz po.ze i.la fɛ lə tuʁ de pjɛs/', 'ünn FWA la va-LEEZ po-ZAY | ee-la FEH luh TOOR day PYESS', ['tache']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act (today's French only). */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE TEXTS
 *
 *  Original texts are marked « texte original écrit pour la leçon » in the
 *  lesson. The five public-domain extracts are copied word for word from
 *  fr.wikisource.org (§A.6, §A.7a).
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1, the opening page (original). */
export const LECTURE_LETTRE =
  'Ce soir-là, Clémence rentra plus tard que d’habitude. À peine eut-elle refermé la porte que le téléphone sonna. Elle laissa sonner. Quand elle eut retiré son manteau et allumé la lampe du salon, elle aperçut, posée sur la table, une enveloppe qu’elle n’avait jamais vue. Personne n’avait la clé, sauf son frère, parti depuis trois ans pour la Gaspésie. Elle s’assit, tourna longtemps l’enveloppe entre ses doigts, puis l’ouvrit. Dès qu’elle eut lu la première ligne, elle reconnut l’écriture penchée de son frère. La lettre était courte. Il revenait, il serait là dimanche, il demandait pardon. Elle la relut deux fois. Lorsqu’elle fut parvenue à la dernière phrase, elle se leva, ouvrit la fenêtre et resta un moment immobile dans l’air froid. Le téléphone sonna de nouveau. Cette fois, elle décrocha. Elle eut bientôt compris : c’était lui, depuis la gare de Lévis, et il n’avait pas eu la patience d’attendre dimanche. Elle ne dit presque rien. Quand il eut raccroché, elle mit de l’eau à chauffer et sortit deux tasses du placard, comme autrefois.';

/** Act 2, PD: Flaubert, « La Légende de saint Julien l’Hospitalier », Trois contes (1877), Wikisource. */
export const EXTRAIT_JULIEN =
  'Et cela dura longtemps, très longtemps ! Quand ils furent arrivés dans la cahute, Julien ferma la porte ; et il le vit siégeant sur l’escabeau. L’espèce de linceul qui le recouvrait était tombé jusqu’à ses hanches ; et ses épaules, sa poitrine, ses bras maigres disparaissaient sous des plaques de pustules écailleuses.';

/** Act 2 card, PD: same tale, same edition. */
export const PHRASE_SEPT_ANS = 'Quand il eut sept ans, sa mère lui apprit à chanter.';

/** Act 3, PD: Louis Hémon, « Maria Chapdelaine » (1914), Wikisource. */
export const EXTRAIT_TOILETTE =
  'François Paradis redescendit l’échelle au matin, métamorphosé, en des vêtements propres empruntés à Da’Bé et à Esdras, et quand il eut fait sa toilette et se fut rasé, la mère Chapdelaine le complimenta sur sa bonne mine. Une fois le déjeuner du matin pris, tous récitèrent ensemble un chapelet à l’heure de la messe, et après cela le long loisir merveilleux du dimanche s’étendit devant eux.';

/** Act 4, PD: Flaubert, « Un cœur simple », Trois contes (1877), Wikisource. */
export const EXTRAIT_HERBAGE =
  'Et murmurant une sorte de complainte, elle flatta sur l’échine celui qui se trouvait le plus près ; il fit volte-face, les autres l’imitèrent. Mais, quand l’herbage suivant fut traversé, un beuglement formidable s’éleva. C’était un taureau, que cachait le brouillard. Il avança vers les deux femmes.';

/** Act 4 check, PD: Mérimée, « Mateo Falcone » (1829), Wikisource (the end of one sentence). */
export const PHRASE_MATEO = '… quand il fut soudainement interrompu dans ses méditations par l’explosion d’une arme à feu.';

/** Act 5, the crossing (original). */
export const LECTURE_TRAVERSEE =
  'Le traversier de six heures attendait au quai de Sainte-Odile-du-Fleuve, moteur au ralenti. Une fois qu’Aline eut payé la traversée, elle monta sur le pont supérieur et chercha un banc à l’abri du vent. Le fleuve était gris, presque immobile. Après que le capitaine eut donné le signal, le bateau quitta lentement le quai, et les goélands se mirent à tourner autour de la cheminée. Aline sortit de son sac la lettre de sa tante, qu’elle avait déjà lue dix fois. Quand elle l’eut repliée, elle la garda dans sa main, sans savoir pourquoi. Au milieu du fleuve, un brouillard épais enveloppa le navire ; on n’entendait plus que la corne de brume. Lorsque le brouillard se fut levé, on aperçut enfin la rive nord, les clochers, les toits rouges. Dès que le bateau eut accosté, les passagers se pressèrent vers la passerelle. Aline, elle, attendit. Aussitôt qu’elle eut posé le pied sur le quai, elle reconnut, au bout de la jetée, la silhouette de sa tante, qui agitait un foulard bleu.';

/** Act 5, PD: Hémon, « Maria Chapdelaine » (1914), Wikisource. */
export const EXTRAIT_PATE =
  'Le lendemain, en effet, elle se leva à son heure ordinaire ; mais quand elle eut préparé la pâte pour les crêpes, la peine la terrassa et elle dut s’allonger de nouveau. Près du lit elle s’arrêta un instant, se tenant les reins des deux mains et s’assura que la besogne du jour serait faite.';

/** Act 6, à peine (original). */
export const TEXTE_A6 =
  'Le concert devait commencer à vingt heures. À peine le chef fut-il monté sur l’estrade que la lumière s’éteignit. Il y eut un murmure, puis un rire. À peine les techniciens eurent-ils rétabli le courant que l’orage coupa tout une seconde fois. Le chef n’eut pas plus tôt levé sa baguette dans le noir que la salle se mit à applaudir : on jouerait sans lumière. Il eut à peine donné le premier signe que les violons attaquèrent.';

/** Act 7, bientôt (original). */
export const TEXTE_A7 =
  'La tempête se leva vers minuit. En un instant, le vent eut arraché la moitié des bardeaux du toit. Les voisins accoururent avec des échelles et des bâches. Ils eurent bientôt couvert le trou, et la pluie cessa d’entrer dans la chambre des enfants. En moins d’une heure, la maison fut de nouveau au sec. Au matin, il ne restait de la nuit qu’une odeur de bois mouillé et des tasses de café vides sur la table.';

/** Act 8, two evenings (original). */
export const LECTURE_DEUX_SOIRS =
  'Pendant trente ans, mon grand-père avait suivi le même rituel. Chaque soir, dès qu’il avait soupé, il sortait fumer sur la galerie et regardait la route jusqu’à la nuit. Quand il avait fini sa pipe, il rentrait sans un mot et remontait l’horloge du salon. Personne ne l’interrompait : c’était son heure. Le soir de ses quatre-vingts ans, pourtant, rien ne se passa comme d’habitude. Dès qu’il eut soupé, il se leva, prit son manteau et annonça qu’il allait au village. Ma grand-mère, qui avait déjà sorti sa pipe et son tabac, resta la bouche ouverte. Il partit à pied, sous la neige. Quand il eut disparu au tournant, elle s’assit près de la fenêtre et attendit. Il revint deux heures plus tard, les épaules blanches, avec un paquet sous le bras. Lorsqu’il l’eut posé sur la table, elle reconnut le papier de la bijouterie. Il avait commandé la bague trente ans plus tôt, l’année de leur mariage, et n’était jamais allé la chercher.';

/** Act 8, PD: Hémon, « Maria Chapdelaine » (1914), Wikisource. */
export const EXTRAIT_AUNES =
  'L’espace sur lequel ils avaient travaillé le matin restait encore semé de souches et embarrassé de buissons d’aunes. Ils se mirent à couper et à arracher les aunes, prenant les branches par faisceaux dans leurs mains et les tranchant à coups de hache, ou bien creusant le sol autour des racines et arrachant l’arbuste entier d’une seule tirée. Quand les aunes eurent disparu, il restait les souches.';

/** Act 9, two versions of one scene (original). */
export const LECTURE_ATELIER =
  'Dans un atelier d’écriture, à Sherbrooke, deux participantes ont récrit la même scène. Version de Lucie : Quand Marthe eut fermé les volets, elle alluma la lampe. Dès qu’elle eut posé la soupe sur la table, on frappa. À peine eut-elle ouvert qu’un homme trempé entra sans un mot. Il eut bientôt vidé son bol. Quand il l’eut reposé, il leva enfin les yeux vers elle. Version de Nadia : Marthe ferma les volets et alluma la lampe. Elle posa la soupe sur la table. On frappa. Elle ouvrit ; un homme trempé entra sans un mot. Il vida son bol, le reposa et leva enfin les yeux vers elle. L’animatrice a demandé au groupe laquelle des deux versions était la plus rapide. Personne n’a répondu la même chose.';

/** Act 9, PD: Flaubert, « La Légende de saint Julien l’Hospitalier » (1877), Wikisource. « […] » replaces an em dash. */
export const EXTRAIT_CHASSE =
  'Un chevreuil bondit hors d’un fourré, un daim parut dans un carrefour, un blaireau sortit d’un trou, un paon sur le gazon déploya sa queue ; […] et quand il les eut tous occis, d’autres chevreuils se présentèrent, d’autres daims, d’autres blaireaux, d’autres paons, et des merles, des geais, des putois, des renards, des hérissons, des lynx, une infinité de bêtes, à chaque pas plus nombreuses.';

/** Act 10, the club podcast (original, today's French). */
export const LECTURE_BALADO =
  'Bonjour à toutes et à tous. Ce mois-ci, au club, on a lu la nouvelle de Clémence et de son frère. Je vous la résume. Un soir, Clémence est rentrée tard. Elle venait à peine de refermer la porte quand le téléphone a sonné, mais elle n’a pas répondu. Après avoir retiré son manteau, elle a vu une enveloppe sur la table. Dès qu’elle a lu la première ligne, elle a reconnu l’écriture de son frère, parti depuis trois ans. Une fois la lettre terminée, elle s’est levée et elle a ouvert la fenêtre. Le téléphone a sonné de nouveau, et cette fois elle a décroché. Elle a vite compris que c’était lui, déjà à la gare. Quand il a raccroché, elle a sorti deux tasses, comme autrefois. Ce qui m’a frappée, c’est le rythme : dans le livre, tout s’enchaîne, et le passé antérieur y est pour beaucoup.';

/** Act 10, a jury (original). */
export const TEXTE_A10 =
  'Lorsque le jury eut délibéré, la présidente se leva. Elle eut vite fait de lire les trois noms. À peine eut-elle prononcé le dernier qu’un cri partit du fond de la salle. Quand le calme fut revenu, elle remit les prix un à un. Une fois que tous les lauréats furent redescendus de l’estrade, on ouvrit les portes du buffet.';

/** Act 11, a spoken testimony (original). */
export const TEXTE_A11 =
  'Enregistrement d’une grand-mère, à Fribourg, en Suisse. Quand j’étais petite, on se levait à cinq heures, été comme hiver. Le dimanche de mes douze ans, une fois qu’on a eu fini la messe, on est allés manger chez ma tante, à pied, dans la neige. Quand j’ai eu fini l’école, je suis partie travailler à Lausanne. Des hivers comme celui-là, moi, j’en ai eu vu, vous savez. Quand mon mari a eu pris sa retraite, on a vendu la ferme.';

/** Act 12, the model: a club member retells act 8 in today's French (original). */
export const LECTURE_MODELE =
  'Bonsoir à tous. Je vous résume la nouvelle de ce mois-ci, « Les deux soirs ». Pendant trente ans, le grand-père du narrateur avait suivi le même rituel : chaque soir, dès qu’il avait soupé, il sortait fumer sur la galerie, puis il rentrait remonter l’horloge. Le soir de ses quatre-vingts ans, il a tout bouleversé. Juste après le souper, il s’est levé, il a pris son manteau et il a annoncé qu’il allait au village. Sa femme n’a rien compris. Il est parti à pied, sous la neige, et dès qu’il a disparu au tournant, elle s’est assise près de la fenêtre pour l’attendre. Il est revenu deux heures plus tard avec un paquet. Quand il l’a posé sur la table, elle a reconnu le papier de la bijouterie : c’était la bague qu’il avait commandée trente ans plus tôt, l’année de leur mariage, et qu’il n’était jamais allé chercher. Ce qui m’a frappé, c’est la façon dont l’auteur oppose deux temps. Pour l’habitude, il emploie le plus-que-parfait et l’imparfait : le rituel se répète, rien ne bouge. Pour le soir de l’anniversaire, il passe au passé antérieur et au passé simple, « dès qu’il eut soupé, il se leva » : chaque geste est bouclé avant le suivant, et la page s’accélère d’un coup. En vous la racontant, j’ai tout mis au passé composé, mais j’ai gardé l’ordre des gestes. Bonne lecture !';

/** The task extract, printed in the brief (original, eight passés antérieurs). */
export const EXTRAIT_TACHE =
  'Le car le déposa à l’entrée du village vers quatre heures. À peine eut-il franchi le seuil de la maison qu’il reconnut l’odeur de cire et de pommes. Quand il eut posé sa valise dans l’entrée, il fit lentement le tour des pièces. Rien n’avait changé : la nappe à carreaux, l’horloge arrêtée, le fauteuil de son père tourné vers la fenêtre. Dès qu’il eut ouvert les volets, la lumière envahit la cuisine. Il trouva sur la table un mot de sa sœur. Lorsqu’il l’eut lu, il sortit dans le jardin. Les pommiers avaient été taillés. Il eut bientôt compris qu’on l’attendait. Quand sa sœur fut arrivée, ils restèrent un long moment sans parler. Puis elle mit la table, comme si de rien n’était. Une fois qu’elle eut allumé la lampe, ils dînèrent face au jardin qui s’assombrissait. Quand ils eurent fini, elle lui tendit une enveloppe.';
