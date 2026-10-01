// c1.03.l1 « La concordance littéraire »: the authored corpus, the imports,
// the texts and the citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md (the
// grammar shape, RECOGNITION variant) with the C1 rules of C1-BUILD-LOG.md
// (« What is different at C1 »). Structural model: b2.09
// (`../b2/subjonctif-litteraire-*`), whose file layout, helpers and exports
// this file copies.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (later lessons may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 3 of the C1 trail (Unit 1)
// ══════════════════════════════════════════════════════════════════════════
//
//   THE CONCORDANCE OF A LITERARY TEXT AND ITS INVERSIONS, FOR RECOGNITION
//   ONLY (the C1 brief: « recognition stays recognition »). b2.09 (« la leçon
//   9 du B2 ») already gave the learner the forms and the core map (past main
//   verb → imparfait du subjonctif in books, présent today; eût fini → ait
//   fini; fût-ce, dût-il). Act 1 says that in ONE recap card and goes past it.
//   What is NEW here (Paul's refocus, C1-BUILD-LOG decision 1):
//
//     la grille         simultaneity, posteriority and anteriority in full,
//                       under a present and under a past main verb (act 2);
//                       what the choice of tense says about the MOMENT of
//                       the action (fût partie / partît; act 3)
//     le conditionnel   a conditional main clause (je voudrais qu'il vînt,
//                       il aurait fallu qu'on le prévînt, il eût été juste
//                       qu'on la consultât; act 4)
//     l'hypothèse       hypothetical inversion: eût-il su = s'il avait su;
//                       n'eût été = sans (act 5)
//     la concession     concessive inversion: fût-il roi = même s'il était
//                       roi; dussé-je; si riche fût-il; serait-il ministre
//                       (act 6); dût-il and aussi… soit-il are RECAPPED from
//                       lessons 9 and 16 in B2, never re-taught
//     la discordance    the deliberate break: an imparfait du subjonctif
//                       after a present that means a conditional (je ne
//                       crois pas qu'il le fît), a présent after a past for
//                       what still holds or comes after now (act 7)
//     aujourd'hui       modern prose and press: the norm (OQLF admits the
//                       présent), partial concordance (fût and eût kept),
//                       a solemn fût in a news story (act 8)
//     l'effet           solemnity, irony, pastiche (act 9)
//     la page           one whole page read for all of it (act 10)
//
//   OWNERSHIP (research plan): the passé antérieur belongs to c1.02 (« À
//   peine eut-il… »), written in parallel. This lesson names « eut, sans
//   chapeau » once (act 5, rule 1882) to keep it apart from « eût-il », and
//   points to lesson 8 in B2 for it, never to c1.02 (not yet published).
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED (Postgres read 2026-10-01 inside BEGIN TRANSACTION READ ONLY
//      … COMMIT, no SET; seedPlusPacks read the same day)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `litterature`: range b1-c1 (widened at wave 2 setup), sub-themes
//     include « la concordance littéraire ». Rows: b1 144, b2 697, c1 0.
//
//  2. ID BLOCK: `fr.c1.litterature.1800` to `.1999` AND NOTHING ELSE (ledger,
//     C1-BUILD-LOG.md). Re-probed 2026-10-01: 0 rows at any level in
//     1800-1999. c1.02 owns 1600-1799 in the same theme, written in
//     parallel: not touched. Used: see the act banners in §G and the total
//     in the lesson header.
//
//  3. REUSED ROWS (§F), all PUBLISHED in Postgres and all present in
//     seedPlusPacks(), so no Postgres-only copy is needed. The three rows the
//     brief names (fr.b2.litterature.1326, .1327, .1345) were read in
//     Postgres: status published, drills {flashcard,review}, card_type
//     grammar, fr identical to the seed. No legacy c1 row is reused (the
//     theme has none).
//
//  4. DUPLICATES. Every authored `fr` (and every map card's front) was folded
//     and compared with every Postgres row on 2026-10-01 (scratch check
//     `dupes.mts`): 0 twins. Where a modern sentence already existed it is
//     reused instead (b2.09's 1316, 1321, 1325, 1351, 1353, 1359;
//     b2.16's connecteurs-logiques.2072).
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR. A real
//     /n/ or /m/ after a vowel is written double: personne pehr-SONN,
//     prévienne pray-VYENN, vienne VYENN, revienne ruh-VYENN, apprenne
//     a-PRENN, Rome ROMM, reine RENN. Every doubled consonant is really
//     pronounced. No U+203F tie anywhere, in a respelling or an IPA field.
//
//  6. TEXTS. One verified public-domain extract (Corneille, §A.7 a); every
//     other text is « texte original écrit pour la leçon »: invented people
//     (Madame Ferrand, Léon, Claire, Bastien, tante Hortense, Madame Royer,
//     Lisette, Madame Lenoir, Malik, Odile, Inès, Tom, Sacha, Nadia), places
//     (le col, l'auberge, la copropriété des Tilleuls, Montclaret, Vercelin)
//     and one invented paper (L'Écho de Vercelin). No living politician; the
//     « ministre », « préfet », « maire » of the examples are generic roles.
//
//  7. FACT CHECK LIST (for the pre-review). Every claim about the real world
//     and every quotation:
//       a. QUOTATION. Pierre Corneille, « Horace », acte III, scène 6, vers
//          1021-1026, text as established by Ch. Marty-Laveaux (Œuvres,
//          Hachette, 1862, tome 3, p. 327), read on Wikisource 2026-10-01
//          (« Corneille, Pierre - Œuvres, Marty-Laveaux, 1862, tome 3/Horace/
//          Acte III »; scene VI header and verse numbers 1020 / 1025 checked
//          on the page). Copied word for word, original spelling « c’étoit »
//          kept, speaker names as on the page (JULIE, LE VIEIL HORACE). The
//          speaker layout « NAME : line » is ours. Used in LECTURE_HORACE and
//          rows 1815 and 1817 (« Que vouliez-vous qu’il fît contre trois ? »,
//          « Qu’il mourût »), verbatim.
//       b. « Horace » is dated 1640 (first performance; printed 1641).
//          Pre-review 2026-10-01: confirmed (Universalis); the reading's
//          source line now gives both years. Verse numbers 1021-1026 and
//          the text checked word for word on the Wikisource page (v. 1020
//          « Et l’opprobre éternel… », v. 1025 « Il eût avec honneur… »).
//       c. OQLF, Banque de dépannage linguistique, « Principes de la
//          correspondance des temps » (read 2026-10-01): « Si le verbe de la
//          principale est au passé de l’indicatif ou du conditionnel, le verbe
//          de la subordonnée se met alors, en principe, à l’imparfait du
//          subjonctif. Dans ce cas, il est toutefois admis d’employer le
//          présent du subjonctif ou le passé du subjonctif. » Paraphrased
//          (never quoted) in rule 1931, sheet-norme and act 8.
//       d. Grevisse, « Le Bon Usage »: (i) the imparfait du subjonctif has
//          left the spoken language and is kept in writing mainly for être
//          and avoir and the 3rd person singular; (ii) a deliberate
//          « discordance » can express nuances (an imparfait du subjonctif
//          with a conditional sense after a present main verb; a présent
//          after a past main verb for what holds at the moment of speaking).
//          Content checked against secondary summaries only; the PARAGRAPH
//          NUMBERS ARE NOT CITED because no edition was at hand. The lesson
//          names Grevisse without a paragraph (rule 1930, sheet-norme, act 8
//          cards). Pre-review 2026-10-01: no reliable online paragraph
//          reference found; the name only is kept (reviewer's call).
//       e. The conditional is built on the imparfait endings (voudr-ais), which
//          is why classical grammar treats it with the past for concordance
//          (rule 1865 notes). Standard description (OQLF c above puts the
//          conditional with the past).
//       f. Concessive inversion with the conditional (« Serait-il ministre, la
//          règle vaudrait pour lui ») is a formal construction (soutenu),
//          taught for recognition only (row 1898). Pre-review 2026-10-01:
//          attested in descriptive grammars (« Le voudrait-il, il ne
//          pourrait mieux réussir », « M’offririez-vous un empire, je le
//          refuserais »); the label « soutenu, encore vivant à l’écrit » holds.
//       g. « N’eût été » = « sans », « si ce n’avait été » (row 1875): fixed
//          literary phrase. Pre-review 2026-10-01: confirmed (Juriterm
//          « n’était, n’eût été » = si ce n’avait été, s’il n’y avait pas eu;
//          literary, past facts, with a conditionnel passé).
//     All other figures, dates and events are invented and internal to the
//     lesson (the plaque « en 1902 » of act 7 is invented).
//
//  8. APOSTROPHES. Every authored French string uses the typographic ’. The
//     reused b2 rows carry the straight ' as published; none of them is
//     printed inside the `scenario`, so the scenario never mixes the two.
//
//  9. RECOGNITION ONLY, ENFORCED BY THE DRILLS (as b2.09 §A.3):
//       · `sl()` rows (literary lines) carry ONLY the `sentence` drill:
//         never in a deck tranche, never in `practice`.
//       · `map()` rows are the SRS cards: front (`prompt`) = the literary
//         line, answer (`fr`) = the sentence a writer would use today.
//       · `rule()` rows whose `fr` names a literary form carry `flashcard`
//         ONLY, so no voiceflash or review screen asks for them.
//       · No conjugation card anywhere.
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
  id: 'c1.03',
  seq: 3,
  title: 'Literary Sequence of Tenses',
  sub: 'La concordance littéraire',
  canDo: 'Can follow the classical sequence of tenses in an unsimplified literary text, under a present, past or conditional main verb, tell simultaneity, posteriority and anteriority apart, read hypothetical and concessive inversion (eût-il su, fût-il roi), recognise a deliberate break in the sequence and say what it means, and explain the register effect (solemnity, irony, pastiche) while mapping each form to today’s usage',
  prereqUnitIds: ['b2.05', 'b2.06', 'b2.08', 'b2.09'],
} as const;

export const LESSON_ID = 'c1.03.l1';
export const THEME = 'litterature';
export const LEVEL = 'c1' as const;

/** ONE block, by the brief. c1.02 owns 1600-1799 in the same theme. */
export const ID_RANGES = [[1800, 1999]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B1 and B2 units are in the seed with their `seq`. A C1 surface is French:
 *  never a raw id on screen, always « la leçon N du B1 / B2 ». Only published
 *  positions are cited; no C1 lesson is cited (none of 1, 20, 21, 24 is
 *  needed here, and c1.02 is not published).
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const band = unitId.slice(0, 2);
  if (band === 'b1' || band === 'b2') {
    const n = SEQ.get(unitId);
    if (!n) throw new Error(`c1.03: ${unitId} is not in the seed`);
    return `la leçon ${n} du ${band.toUpperCase()}`;
  }
  return unitRef(unitId);
}

export const INVERSION_UNIT = 'b1.21';
export const SI_UNIT = 'b2.03';
export const SUBJPASSE_UNIT = 'b2.05';
export const SUBJIND_UNIT = 'b2.06';
export const PS_UNIT = 'b2.08';
export const SL_UNIT = 'b2.09';
export const CONCESSION_UNIT = 'b2.16';

export const INVERSION_REF = refFr(INVERSION_UNIT);
export const SI_REF = refFr(SI_UNIT);
export const SUBJPASSE_REF = refFr(SUBJPASSE_UNIT);
export const SUBJIND_REF = refFr(SUBJIND_UNIT);
export const PS_REF = refFr(PS_UNIT);
export const SL_REF = refFr(SL_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B209_REFRAME, REFRAME_EN as B209_REFRAME_EN } from '../b2/subjonctif-litteraire-corpus.ts';
export { REFRAME as B205_REFRAME, REFRAME_EN as B205_REFRAME_EN } from '../b2/subjonctif-passe-corpus.ts';
export { REFRAME as B203_REFRAME, REFRAME_EN as B203_REFRAME_EN } from '../b2/si-irreel-passe-corpus.ts';
export { REFRAME as B216_REFRAME, REFRAME_EN as B216_REFRAME_EN } from '../b2/concession-avancee-corpus.ts';
export { REFRAME as B121_REFRAME, REFRAME_EN as B121_REFRAME_EN } from '../b1/inversion-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE DIAPASON. The main verb strikes the note; the subordinate subjunctive
 *  tunes itself to it (a past note, a past subjunctive). A classic text keeps
 *  every string in tune. When a writer leaves a string off the note (a
 *  présent after a past, an imparfait after a present, a single solemn fût
 *  in a modern story), the gap is heard, and it means something: another
 *  moment, a conditional sense, a register. Today's plain French is a
 *  different tuning, not a wrong note.
 *
 *  It is NOT « la concordance est obligatoire » (OQLF admits the présent),
 *  NOT « le présent est une faute dans un livre », and NOT a production rule:
 *  the learner reads and explains, never writes the forms.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Le verbe principal donne la note, le subjonctif la suit : quand il s’en écarte, l’écart a un sens.';
export const REFRAME_EN = 'The main verb gives the note and the subjunctive follows it: when it strays, the gap means something.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Un verbe au passé exige l’imparfait du subjonctif.',
    why: 'False today: OQLF admits the présent after a past main verb, and every modern novelist writes « il fallait qu’elle vienne ». It would make act 8 teach the modern norm as an error.',
  },
  {
    text: 'Le présent du subjonctif dans un livre ancien, c’est une faute.',
    why: 'Act 7 is built on the opposite: a présent after a past can say that the fact still holds (« voulut que vous soyez libres, et vous l’êtes »).',
  },
  {
    text: 'Les livres reculent le subjonctif ; toi, tu ne recules pas.',
    why: 'True, but it is b2.09’s lesson (act 7 there) and says nothing about the conditional, inversion or the deliberate break, which are this lesson’s NEW list.',
  },
  {
    text: 'Eût-il, fût-il : l’inversion remplace si.',
    why: 'True for eût-il su (act 5) but false for fût-il roi, which replaces même si (act 6). One reframe cannot carry both.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (Postgres and seedPlusPacks, read 2026-10-01,
 *      French in the comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const LIT = (n: number) => `fr.b2.litterature.${n}`;

export const IMPORTED = {
  act1: [
    LIT(1326),   // Verbe principal au passé : imparfait du subjonctif dans les livres, présent aujourd'hui.  (lesson 9 in B2, rule, flashcard + review)
    LIT(1327),   // Déjà fait : plus-que-parfait du subjonctif dans les livres, subjonctif passé aujourd'hui.  (lesson 9 in B2, rule)
    LIT(1345),   // Imparfait du subjonctif : présent. Plus-que-parfait : passé. Deuxième forme : conditionnel passé.  (lesson 9 in B2, rule)
    LIT(1315),   // Je voulais qu'il partît.  (lesson 9 in B2, sentence only)
    LIT(1316),   // Je voulais qu'il parte.  (lesson 9 in B2, map card)
    LIT(1324),   // Nous doutions qu'elle eût reçu notre lettre.  (lesson 9 in B2, sentence only)
    LIT(1325),   // Nous doutions qu'elle ait reçu notre lettre.  (lesson 9 in B2, map card)
  ],
  act2: [] as string[],
  act3: [] as string[],
  act4: [
    LIT(1320),   // Il faudrait qu'il vînt demain.  (lesson 9 in B2, sentence only)
    LIT(1321),   // Il faudrait qu'il vienne demain.  (lesson 9 in B2, map card)
  ],
  act5: [
    LIT(1301),   // S'il l'eût su, il fût venu.  (lesson 9 in B2, sentence only)
    LIT(1302),   // S'il l'avait su, il serait venu.  (lesson 9 in B2, map card)
  ],
  act6: [
    LIT(1358),   // Je finirai ce livre, dût-il me prendre dix ans.  (lesson 9 in B2, sentence only)
    LIT(1359),   // Je finirai ce livre, même si ça devait me prendre dix ans.  (lesson 9 in B2, map card)
    LIT(1352),   // Il faut le lire, fût-ce en traduction.  (lesson 9 in B2, sentence only)
    LIT(1353),   // Il faut le lire, même en traduction.  (lesson 9 in B2, map card)
    'fr.b2.connecteurs-logiques.2072',   // Aussi pratique soit-il, ce quartier manque d'écoles.  (lesson 16 in B2)
  ],
  act7: [] as string[],
  act8: [] as string[],
  act9: [] as string[],
  act10: [] as string[],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: readonly string[] = [
  LIT(1315), LIT(1324), LIT(1320), LIT(1301), LIT(1358), LIT(1352),   // b2.09 literary lines: sentence only
];

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE,
  LIT(1326), LIT(1327), LIT(1345),                                   // flashcard + review only
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `sl`   a literary line: drill `sentence` ONLY (§A.9).
 *  `map`  the SRS card: front = the literary line, answer = today's sentence
 *         (cardType 'grammar', « recognise »).
 *  `rule` a grammar card whose answer is a rule (flashcard + review, or
 *         flashcard ONLY when the rule names a literary form).
 *  `sent` a plain modern sentence.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];
/** A rule card that NAMES a literary form: recognised, never asked for. */
const F = ['flashcard'] as Item['drills'];
const SL_DRILLS = ['sentence'] as Item['drills'];

const C: Register = 'courant';
const S: Register = 'soutenu';
const GP = ['concordance-litteraire'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

const sl = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[]): Row =>
  sent(n, fr, en, ipa, respell, ['litteraire', ...tags], SL_DRILLS, { register: S });

/** The map card: `slFr` is printed on the front, `fr` is the answer. */
const map = (
  n: number, slFr: string, fr: string, en: string, ipa: string, respell: string, notes: string, tags: string[],
  drills: Item['drills'] = FCVR,
): Row => sent(n, fr, en, ipa, respell, ['aujourdhui', ...tags], drills, {
  cardType: 'grammar', prompt: `« ${slFr} » Aujourd’hui, tu dirais…`, notes,
});

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
  drills: Item['drills'] = FC,
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], drills, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LA NOTE ET L’ÉCART (.1800-.1814) ─────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sl(1800, 'Elle souhaitait qu’il revînt avant l’hiver.', 'She wished he would come back before winter.',
    '/ɛl swɛ.tɛ kil ʁə.vɛ̃ a.vɑ̃ li.vɛʁ/', 'el sweh-TEH | keel ruh-VEHⁿ | a-vahⁿ lee-VEHR', ['imparfait', 'simultane']),
  map(1801, 'Elle souhaitait qu’il revînt avant l’hiver.', 'Elle souhaitait qu’il revienne avant l’hiver.', 'She wished he would come back before winter.',
    '/ɛl swɛ.tɛ kil ʁə.vjɛn a.vɑ̃ li.vɛʁ/', 'el sweh-TEH | keel ruh-VYENN | a-vahⁿ lee-VEHR',
    'Revînt : revenir. Le livre suit la note du passé ; aujourd’hui, le présent suffit.', ['imparfait', 'simultane'], FCVDR),
  sent(1802, 'Le romancier d’aujourd’hui a fait une faute.', 'Today’s novelist has made a mistake.',
    '/lə ʁɔ.mɑ̃.sje do.ʒuʁ.dɥi a fɛ yn fot/', 'luh ro-mahⁿ-SYAY doh-zhoor-DWEE | a feh ün FOHT', ['fausse-lecture'], FC),
  sent(1803, 'Le romancier d’aujourd’hui suit l’usage moderne.', 'Today’s novelist follows modern usage.',
    '/lə ʁɔ.mɑ̃.sje do.ʒuʁ.dɥi sɥi ly.zaʒ mɔ.dɛʁn/', 'luh ro-mahⁿ-SYAY doh-zhoor-DWEE | swee lü-zazh mo-DEHRN', ['usage']),
  rule(1804, REFRAME, REFRAME_EN,
    '/lə vɛʁb pʁɛ̃.si.pal dɔn la nɔt lə syb.ʒɔ̃k.tif la sɥi kɑ̃ til sɑ̃.ne.kaʁt le.kaʁ a œ̃ sɑ̃s/',
    'luh VEHRB prehⁿ-see-PAL | donn la NOT | luh süb-zhohⁿk-TEEF la SWEE | kahⁿ-teel sahⁿ-nay-KART | lay-KAR a uhⁿ SAHⁿS',
    'Que fait le subjonctif dans un texte littéraire ?',
    'Il suit le temps du verbe principal. Quand il ne le suit pas, demande-toi pourquoi : un autre moment, un autre sens, un autre registre.',
    ['reframe']),
  rule(1805, 'La concordance stricte est une règle de l’écrit classique ; l’usage moderne l’assouplit.', 'Strict sequence of tenses is a rule of classical writing; modern usage relaxes it.',
    '/la kɔ̃.kɔʁ.dɑ̃s stʁikt ɛ.tyn ʁɛɡl də le.kʁi kla.sik ly.zaʒ mɔ.dɛʁn la.su.pli/', 'la kohⁿ-kor-DAHⁿS STREEKT | eh-tün REGL | duh lay-kree kla-SEEK | lü-zazh mo-DEHRN la-soo-PLEE',
    'La concordance des temps est-elle obligatoire ?',
    'Non. L’OQLF admet le présent du subjonctif après un verbe principal au passé ; la concordance stricte reste la marque d’un style soutenu ou ancien.', ['norme']),
  sl(1806, 'Je ne croyais pas qu’il pût revenir.', 'I did not believe he could come back.',
    '/ʒə nə kʁwa.jɛ pa kil py ʁə.və.niʁ/', 'zhuh nuh krwa-YEH PA | keel PÜ ruh-vuh-NEER', ['imparfait', 'simultane']),
  map(1807, 'Je ne croyais pas qu’il pût revenir.', 'Je ne croyais pas qu’il puisse revenir.', 'I did not believe he could come back.',
    '/ʒə nə kʁwa.jɛ pa kil pɥis ʁə.və.niʁ/', 'zhuh nuh krwa-YEH PA | keel PWEESS ruh-vuh-NEER',
    'Pût : pouvoir. Ne pas croire que appelle le subjonctif ; aujourd’hui, puisse.', ['imparfait', 'simultane']),
  sl(1808, 'Fût-il ministre, je ne lui céderais pas.', 'Even if he were a minister, I would not give in to him.',
    '/fy.til mi.nistʁ ʒə nə lɥi se.də.ʁɛ pa/', 'fü-TEEL mee-NEESTR | zhuh nuh lwee say-duh-REH PA', ['inversion', 'concession']),
  map(1809, 'Fût-il ministre, je ne lui céderais pas.', 'Même s’il était ministre, je ne lui céderais pas.', 'Even if he were a minister, I would not give in to him.',
    '/mɛm si.le.tɛ mi.nistʁ ʒə nə lɥi se.də.ʁɛ pa/', 'mem see-lay-TEH mee-NEESTR | zhuh nuh lwee say-duh-REH PA',
    'Fût-il : le verbe passe devant, et la phrase dit même si. Une concession.', ['inversion', 'concession']),
  sl(1810, 'Eût-il parlé plus tôt, tout eût changé.', 'Had he spoken sooner, everything would have changed.',
    '/y.til paʁ.le ply to tu.ty ʃɑ̃.ʒe/', 'ü-TEEL par-LAY plü TOH | too-tü shahⁿ-ZHAY', ['inversion', 'hypothese']),
  map(1811, 'Eût-il parlé plus tôt, tout eût changé.', 'S’il avait parlé plus tôt, tout aurait changé.', 'Had he spoken sooner, everything would have changed.',
    '/si.la.vɛ paʁ.le ply to tu.to.ʁɛ ʃɑ̃.ʒe/', 'see-la-VEH par-LAY plü TOH | too-toh-REH shahⁿ-ZHAY',
    'Eût-il parlé : s’il avait parlé. Tout eût changé, sans « que » devant : un conditionnel passé, tout aurait changé.', ['inversion', 'hypothese'], FCVDR),
  sent(1812, 'Dans un roman classique, le subjonctif suit le temps du verbe principal.', 'In a classic novel, the subjunctive follows the tense of the main verb.',
    '/dɑ̃.zœ̃ ʁɔ.mɑ̃ kla.sik lə syb.ʒɔ̃k.tif sɥi lə tɑ̃ dy vɛʁb pʁɛ̃.si.pal/', 'dahⁿ-zuhⁿ ro-mahⁿ kla-SEEK | luh süb-zhohⁿk-TEEF | swee luh TAHⁿ | dü vehrb prehⁿ-see-PAL', ['usage']),
  sent(1813, 'Dans un article, une forme rare donne de la solennité.', 'In an article, a rare form adds solemnity.',
    '/dɑ̃.zœ̃.naʁ.tikl yn fɔʁm ʁaʁ dɔn də la sɔ.la.ni.te/', 'dahⁿ-zuhⁿ-nar-TEEKL | ün form RAR | donn duh la so-la-nee-TAY', ['usage', 'effet']),
  sent(1814, 'Un pastiche imite la concordance pour faire sourire.', 'A pastiche imitates the sequence of tenses to raise a smile.',
    '/œ̃ pas.tiʃ i.mit la kɔ̃.kɔʁ.dɑ̃s puʁ fɛʁ su.ʁiʁ/', 'uhⁿ pass-TEESH | ee-meet la kohⁿ-kor-DAHⁿS | poor fehr soo-REER', ['usage', 'effet']),
];

/* ── ACT 2 · LA GRILLE (.1815-.1834) ──────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sl(1815, 'Que vouliez-vous qu’il fît contre trois ?', 'What would you have had him do against three?',
    '/kə vu.lje vu kil fi kɔ̃.tʁə tʁwa/', 'kuh voo-lyay VOO | keel FEE | kohⁿ-truh TRWA', ['corneille', 'imparfait', 'simultane']),
  map(1816, 'Que vouliez-vous qu’il fît contre trois ?', 'Que vouliez-vous qu’il fasse contre trois ?', 'What would you have had him do against three?',
    '/kə vu.lje vu kil fas kɔ̃.tʁə tʁwa/', 'kuh voo-lyay VOO | keel FASS | kohⁿ-truh TRWA',
    'Fît : faire. Vouliez, au passé, donne la note ; Corneille la suit. Aujourd’hui : qu’il fasse.', ['corneille', 'imparfait', 'simultane']),
  sl(1817, 'Qu’il mourût.', 'That he should die.',
    '/kil mu.ʁy/', 'keel moo-RÜ', ['corneille', 'imparfait', 'posterieur']),
  map(1818, 'Qu’il mourût.', 'Qu’il meure.', 'That he should die.',
    '/kil mœʁ/', 'keel MUHR',
    'Mourût : mourir. Une réponse sans verbe principal : la note vient de la question d’avant.', ['corneille', 'imparfait', 'posterieur']),
  sent(1819, 'Je doute qu’il vienne ce soir.', 'I doubt he will come tonight.',
    '/ʒə dut kil vjɛn sə swaʁ/', 'zhuh DOOT | keel VYENN | suh SWAR', ['present', 'simultane'], FCVDR),
  sent(1820, 'Je doute qu’il soit venu hier.', 'I doubt he came yesterday.',
    '/ʒə dut kil swa və.ny jɛʁ/', 'zhuh DOOT | keel swa vuh-NÜ | YEHR', ['present', 'anterieur']),
  sl(1821, 'Je doutais qu’il vînt ce soir-là.', 'I doubted he would come that evening.',
    '/ʒə du.tɛ kil vɛ̃ sə swaʁ.la/', 'zhuh doo-TEH | keel VEHⁿ | suh swar-LA', ['imparfait', 'simultane']),
  map(1822, 'Je doutais qu’il vînt ce soir-là.', 'Je doutais qu’il vienne ce soir-là.', 'I doubted he would come that evening.',
    '/ʒə du.tɛ kil vjɛn sə swaʁ.la/', 'zhuh doo-TEH | keel VYENN | suh swar-LA',
    'Le même moment que le doute : imparfait du subjonctif dans le livre, présent aujourd’hui.', ['imparfait', 'simultane']),
  sl(1823, 'Je doutais qu’il fût venu la veille.', 'I doubted he had come the day before.',
    '/ʒə du.tɛ kil fy və.ny la vɛj/', 'zhuh doo-TEH | keel fü vuh-NÜ | la VEY', ['pqp', 'anterieur']),
  map(1824, 'Je doutais qu’il fût venu la veille.', 'Je doutais qu’il soit venu la veille.', 'I doubted he had come the day before.',
    '/ʒə du.tɛ kil swa və.ny la vɛj/', 'zhuh doo-TEH | keel swa vuh-NÜ | la VEY',
    'Avant le doute : plus-que-parfait du subjonctif dans le livre, subjonctif passé aujourd’hui.', ['pqp', 'anterieur'], FCVDR),
  sl(1825, 'Elle attendait qu’il revînt le lendemain.', 'She was waiting for him to come back the next day.',
    '/ɛ.la.tɑ̃.dɛ kil ʁə.vɛ̃ lə lɑ̃d.mɛ̃/', 'eh-la-tahⁿ-DEH | keel ruh-VEHⁿ | luh lahⁿd-MEHⁿ', ['imparfait', 'posterieur']),
  map(1826, 'Elle attendait qu’il revînt le lendemain.', 'Elle attendait qu’il revienne le lendemain.', 'She was waiting for him to come back the next day.',
    '/ɛ.la.tɑ̃.dɛ kil ʁə.vjɛn lə lɑ̃d.mɛ̃/', 'eh-la-tahⁿ-DEH | keel ruh-VYENN | luh lahⁿd-MEHⁿ',
    'Après l’attente, plus tard : le livre garde l’imparfait du subjonctif, comme pour le même moment.', ['imparfait', 'posterieur']),
  rule(1827, 'Même moment ou plus tard : imparfait du subjonctif. Avant : plus-que-parfait.', 'Same moment or later: imperfect subjunctive. Before: pluperfect.',
    '/mɛm mɔ.mɑ̃ u ply taʁ ɛ̃.paʁ.fɛ dy syb.ʒɔ̃k.tif a.vɑ̃ ply kə paʁ.fɛ/', 'mem mo-MAHⁿ | oo plü TAR | ehⁿ-par-FEH dü süb-zhohⁿk-TEEF | a-VAHⁿ | plü kuh par-FEH',
    'Après un verbe principal au passé, comment le livre choisit-il le temps du subjonctif ?',
    'Il regarde le moment de l’action par rapport au verbe principal : en même temps ou après, l’imparfait ; avant, le plus-que-parfait.', ['grille']),
  rule(1828, 'Avec un verbe principal au présent : présent du subjonctif, ou passé pour ce qui est déjà fait.', 'With a present main verb: present subjunctive, or the past for what is already done.',
    '/a.vɛk œ̃ vɛʁb pʁɛ̃.si.pal o pʁe.zɑ̃ pʁe.zɑ̃ dy syb.ʒɔ̃k.tif u pa.se puʁ sə ki ɛ de.ʒa fɛ/', 'a-vek uhⁿ VEHRB prehⁿ-see-PAL oh pray-ZAHⁿ | pray-ZAHⁿ dü süb-zhohⁿk-TEEF | oo pa-SAY | poor suh kee eh day-zha FEH',
    'Et sous un verbe principal au présent ?',
    'Rien ne change entre le livre et aujourd’hui : je doute qu’il vienne, je doute qu’il soit venu.', ['grille']),
  sl(1829, 'Il fallait qu’elle partît avant qu’on l’eût reconnue.', 'She had to leave before anyone had recognised her.',
    '/il fa.lɛ kɛl paʁ.ti a.vɑ̃ kɔ̃ ly ʁə.kɔ.ny/', 'eel fa-LEH | kel par-TEE | a-vahⁿ kohⁿ lü ruh-ko-NÜ', ['imparfait', 'pqp']),
  map(1830, 'Il fallait qu’elle partît avant qu’on l’eût reconnue.', 'Il fallait qu’elle parte avant qu’on l’ait reconnue.', 'She had to leave before anyone had recognised her.',
    '/il fa.lɛ kɛl paʁt a.vɑ̃ kɔ̃ lɛ ʁə.kɔ.ny/', 'eel fa-LEH | kel PART | a-vahⁿ kohⁿ leh ruh-ko-NÜ',
    'Deux moments dans une phrase : partît (en même temps), eût reconnue (déjà fait). Aujourd’hui : parte, ait reconnue.', ['imparfait', 'pqp']),
  sl(1831, 'On craignait que la lettre ne fût déjà partie.', 'They feared the letter had already gone.',
    '/ɔ̃ kʁɛ.ɲɛ kə la lɛtʁ nə fy de.ʒa paʁ.ti/', 'ohⁿ kreh-NYEH | kuh la LETR | nuh fü day-zha par-TEE', ['pqp', 'anterieur']),
  map(1832, 'On craignait que la lettre ne fût déjà partie.', 'On craignait que la lettre soit déjà partie.', 'They feared the letter had already gone.',
    '/ɔ̃ kʁɛ.ɲɛ kə la lɛtʁ swa de.ʒa paʁ.ti/', 'ohⁿ kreh-NYEH | kuh la LETR | swa day-zha par-TEE',
    'Fût partie : déjà partie au moment de la crainte. Le ne n’est pas une négation ; aujourd’hui on peut le garder ou non.', ['pqp', 'anterieur']),
  sl(1833, 'On craignait que la lettre ne partît trop tard.', 'They feared the letter would leave too late.',
    '/ɔ̃ kʁɛ.ɲɛ kə la lɛtʁ nə paʁ.ti tʁo taʁ/', 'ohⁿ kreh-NYEH | kuh la LETR | nuh par-TEE | troh TAR', ['imparfait', 'posterieur']),
  map(1834, 'On craignait que la lettre ne partît trop tard.', 'On craignait que la lettre parte trop tard.', 'They feared the letter would leave too late.',
    '/ɔ̃ kʁɛ.ɲɛ kə la lɛtʁ paʁt tʁo taʁ/', 'ohⁿ kreh-NYEH | kuh la LETR | PART | troh TAR',
    'Partît : plus tard que la crainte. Fût partie disait l’inverse : c’était déjà fait.', ['imparfait', 'posterieur']),
];

/* ── ACT 3 · LE MOMENT DE L’ACTION (.1835-.1852) ──────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sl(1835, 'Il s’étonna qu’elle fût partie sans un mot.', 'He was surprised she had left without a word.',
    '/il se.tɔ.na kɛl fy paʁ.ti sɑ̃.zœ̃ mo/', 'eel say-to-NA | kel fü par-TEE | sahⁿ-zuhⁿ MOH', ['pqp', 'anterieur']),
  map(1836, 'Il s’étonna qu’elle fût partie sans un mot.', 'Il s’est étonné qu’elle soit partie sans un mot.', 'He was surprised she had left without a word.',
    '/il sɛ.te.tɔ.ne kɛl swa paʁ.ti sɑ̃.zœ̃ mo/', 'eel seh-tay-to-NAY | kel swa par-TEE | sahⁿ-zuhⁿ MOH',
    'Fût partie : quand il s’étonne, elle est déjà loin. Aujourd’hui : soit partie.', ['pqp', 'anterieur'], FCVDR),
  sl(1837, 'Il s’étonnait qu’elle partît chaque soir sans un mot.', 'He was surprised that she left every evening without a word.',
    '/il se.tɔ.nɛ kɛl paʁ.ti ʃak swaʁ sɑ̃.zœ̃ mo/', 'eel say-to-NEH | kel par-TEE | shak SWAR | sahⁿ-zuhⁿ MOH', ['imparfait', 'simultane']),
  map(1838, 'Il s’étonnait qu’elle partît chaque soir sans un mot.', 'Il s’étonnait qu’elle parte chaque soir sans un mot.', 'He was surprised that she left every evening without a word.',
    '/il se.tɔ.nɛ kɛl paʁt ʃak swaʁ sɑ̃.zœ̃ mo/', 'eel say-to-NEH | kel PART | shak SWAR | sahⁿ-zuhⁿ MOH',
    'Partît : une habitude, en même temps que l’étonnement. Aujourd’hui : parte.', ['imparfait', 'simultane']),
  sl(1839, 'Nous voulions qu’il eût terminé avant midi.', 'We wanted him to have finished by noon.',
    '/nu vu.ljɔ̃ ki.ly tɛʁ.mi.ne a.vɑ̃ mi.di/', 'noo voo-LYOHⁿ | kee-lü tehr-mee-NAY | a-vahⁿ mee-DEE', ['pqp', 'anterieur']),
  map(1840, 'Nous voulions qu’il eût terminé avant midi.', 'Nous voulions qu’il ait terminé avant midi.', 'We wanted him to have finished by noon.',
    '/nu vu.ljɔ̃ ki.lɛ tɛʁ.mi.ne a.vɑ̃ mi.di/', 'noo voo-LYOHⁿ | kee-leh tehr-mee-NAY | a-vahⁿ mee-DEE',
    'Eût terminé : le travail doit être fini à midi, un résultat. Aujourd’hui : ait terminé.', ['pqp', 'anterieur']),
  sl(1841, 'Nous voulions qu’il terminât avant midi.', 'We wanted him to finish before noon.',
    '/nu vu.ljɔ̃ kil tɛʁ.mi.na a.vɑ̃ mi.di/', 'noo voo-LYOHⁿ | keel tehr-mee-NA | a-vahⁿ mee-DEE', ['imparfait', 'posterieur']),
  map(1842, 'Nous voulions qu’il terminât avant midi.', 'Nous voulions qu’il termine avant midi.', 'We wanted him to finish before noon.',
    '/nu vu.ljɔ̃ kil tɛʁ.min a.vɑ̃ mi.di/', 'noo voo-LYOHⁿ | keel tehr-MEEN | a-vahⁿ mee-DEE',
    'Terminât : terminer, une action à venir. Eût terminé regardait le résultat ; terminât regarde l’action.', ['imparfait', 'posterieur'], FCVDR),
  rule(1843, 'Fût partie : c’était déjà fait. Partît : en même temps, ou après.', 'Fût partie: it was already done. Partît: at the same time, or later.',
    '/fy paʁ.ti sɛ.tɛ de.ʒa fɛ paʁ.ti ɑ̃ mɛm tɑ̃ u a.pʁɛ/', 'fü par-TEE | seh-teh day-zha FEH | par-TEE | ahⁿ mem TAHⁿ | oo a-PREH',
    'Qu’elle fût partie ou qu’elle partît : quelle différence ?',
    'Le temps du subjonctif dit le moment : le plus-que-parfait regarde avant le verbe principal, l’imparfait regarde le même moment ou la suite.', ['grille'], F),
  rule(1844, 'Après avant que, le livre met l’imparfait : l’action vient après.', 'After avant que, the book uses the imperfect: the action comes later.',
    '/a.pʁɛ a.vɑ̃ kə lə livʁ mɛ lɛ̃.paʁ.fɛ lak.sjɔ̃ vjɛ̃ a.pʁɛ/', 'a-preh a-vahⁿ KUH | luh LEEVR meh lehⁿ-par-FEH | lak-SYOHⁿ vyehⁿ a-PREH',
    'Avant que la nouvelle fût connue : la nouvelle est-elle déjà connue ?',
    'Non : avant que regarde la suite. Le plus-que-parfait, avant qu’on l’eût reconnue, insiste sur le résultat qui n’est pas encore atteint.', ['grille']),
  sl(1845, 'Elle quitta la ville avant que la nouvelle fût connue.', 'She left town before the news was known.',
    '/ɛl ki.ta la vil a.vɑ̃ kə la nu.vɛl fy kɔ.ny/', 'el kee-TA la VEEL | a-vahⁿ kuh la noo-VEL | fü ko-NÜ', ['imparfait', 'posterieur']),
  map(1846, 'Elle quitta la ville avant que la nouvelle fût connue.', 'Elle a quitté la ville avant que la nouvelle soit connue.', 'She left town before the news was known.',
    '/ɛl a ki.te la vil a.vɑ̃ kə la nu.vɛl swa kɔ.ny/', 'el a kee-TAY la VEEL | a-vahⁿ kuh la noo-VEL | swa ko-NÜ',
    'Fût connue : plus tard que le départ. Quitta, un passé simple, devient a quitté.', ['imparfait', 'posterieur']),
  sl(1847, 'Il ne doutait pas qu’elle l’eût aimé jadis.', 'He did not doubt she had loved him once.',
    '/il nə du.tɛ pa kɛl ly e.me ʒa.dis/', 'eel nuh doo-teh PA | kel lü ay-MAY | zha-DEESS', ['pqp', 'anterieur']),
  map(1848, 'Il ne doutait pas qu’elle l’eût aimé jadis.', 'Il ne doutait pas qu’elle l’ait aimé jadis.', 'He did not doubt she had loved him once.',
    '/il nə du.tɛ pa kɛl lɛ e.me ʒa.dis/', 'eel nuh doo-teh PA | kel leh ay-MAY | zha-DEESS',
    'Eût aimé : un amour fini avant le moment du récit. Aujourd’hui : l’ait aimé.', ['pqp', 'anterieur']),
  sl(1849, 'On attendit que la pluie eût cessé pour sortir.', 'They waited for the rain to have stopped before going out.',
    '/ɔ̃.na.tɑ̃.di kə la plɥi y se.se puʁ sɔʁ.tiʁ/', 'ohⁿ-na-tahⁿ-DEE | kuh la PLWEE | ü say-SAY | poor sor-TEER', ['pqp', 'anterieur']),
  map(1850, 'On attendit que la pluie eût cessé pour sortir.', 'On a attendu que la pluie ait cessé pour sortir.', 'They waited for the rain to have stopped before going out.',
    '/ɔ̃.na a.tɑ̃.dy kə la plɥi ɛ se.se puʁ sɔʁ.tiʁ/', 'ohⁿ-na a-tahⁿ-DÜ | kuh la PLWEE | eh say-SAY | poor sor-TEER',
    'Eût cessé : la pluie doit être finie avant la sortie. Aujourd’hui : ait cessé.', ['pqp', 'anterieur']),
  sl(1851, 'On attendit que la pluie cessât.', 'They waited for the rain to stop.',
    '/ɔ̃.na.tɑ̃.di kə la plɥi se.sa/', 'ohⁿ-na-tahⁿ-DEE | kuh la PLWEE | say-SA', ['imparfait', 'posterieur']),
  map(1852, 'On attendit que la pluie cessât.', 'On a attendu que la pluie cesse.', 'They waited for the rain to stop.',
    '/ɔ̃.na a.tɑ̃.dy kə la plɥi sɛs/', 'ohⁿ-na a-tahⁿ-DÜ | kuh la PLWEE | SESS',
    'Cessât : cesser, l’arrêt lui-même, plus tard. Eût cessé regardait la pluie déjà finie.', ['imparfait', 'posterieur'], FCVDR),
];

/* ── ACT 4 · JE VOUDRAIS QU’IL VÎNT (.1853-.1870) ─────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sl(1853, 'Je voudrais qu’il vînt dès demain.', 'I would like him to come as soon as tomorrow.',
    '/ʒə vu.dʁɛ kil vɛ̃ dɛ də.mɛ̃/', 'zhuh voo-DREH | keel VEHⁿ | deh duh-MEHⁿ', ['conditionnel', 'imparfait']),
  map(1854, 'Je voudrais qu’il vînt dès demain.', 'Je voudrais qu’il vienne dès demain.', 'I would like him to come as soon as tomorrow.',
    '/ʒə vu.dʁɛ kil vjɛn dɛ də.mɛ̃/', 'zhuh voo-DREH | keel VYENN | deh duh-MEHⁿ',
    'Voudrais, un conditionnel, donne une note passée au livre : vînt. Aujourd’hui : vienne.', ['conditionnel', 'imparfait'], FCVDR),
  sl(1855, 'Il serait bon que chacun le sût.', 'It would be good for everyone to know it.',
    '/il sə.ʁɛ bɔ̃ kə ʃa.kœ̃ lə sy/', 'eel suh-REH BOHⁿ | kuh sha-KUHⁿ luh SÜ', ['conditionnel', 'imparfait']),
  map(1856, 'Il serait bon que chacun le sût.', 'Il serait bon que chacun le sache.', 'It would be good for everyone to know it.',
    '/il sə.ʁɛ bɔ̃ kə ʃa.kœ̃ lə saʃ/', 'eel suh-REH BOHⁿ | kuh sha-KUHⁿ luh SASH',
    'Sût : savoir. Après il serait bon que, le livre met l’imparfait du subjonctif.', ['conditionnel', 'imparfait']),
  sl(1857, 'J’aimerais qu’elle me répondît.', 'I would like her to answer me.',
    '/ʒɛm.ʁɛ kɛl mə ʁe.pɔ̃.di/', 'zhem-REH | kel muh ray-pohⁿ-DEE', ['conditionnel', 'imparfait']),
  map(1858, 'J’aimerais qu’elle me répondît.', 'J’aimerais qu’elle me réponde.', 'I would like her to answer me.',
    '/ʒɛm.ʁɛ kɛl mə ʁe.pɔ̃d/', 'zhem-REH | kel muh ray-POHⁿD',
    'Répondît : répondre. Aujourd’hui, après un conditionnel aussi, le présent.', ['conditionnel', 'imparfait']),
  sl(1859, 'Il aurait fallu qu’on le prévînt.', 'Someone should have warned him.',
    '/i.lo.ʁɛ fa.ly kɔ̃ lə pʁe.vɛ̃/', 'ee-loh-reh fa-LÜ | kohⁿ luh pray-VEHⁿ', ['conditionnel', 'imparfait']),
  map(1860, 'Il aurait fallu qu’on le prévînt.', 'Il aurait fallu qu’on le prévienne.', 'Someone should have warned him.',
    '/i.lo.ʁɛ fa.ly kɔ̃ lə pʁe.vjɛn/', 'ee-loh-reh fa-LÜ | kohⁿ luh pray-VYENN',
    'Un conditionnel passé principal : le livre met l’imparfait du subjonctif, prévînt. Aujourd’hui : prévienne.', ['conditionnel', 'imparfait'], FCVDR),
  sl(1861, 'Il aurait voulu qu’elle fût restée.', 'He would have liked her to have stayed.',
    '/i.lo.ʁɛ vu.ly kɛl fy ʁɛs.te/', 'ee-loh-reh voo-LÜ | kel fü res-TAY', ['conditionnel', 'pqp']),
  map(1862, 'Il aurait voulu qu’elle fût restée.', 'Il aurait voulu qu’elle soit restée.', 'He would have liked her to have stayed.',
    '/i.lo.ʁɛ vu.ly kɛl swa ʁɛs.te/', 'ee-loh-reh voo-LÜ | kel swa res-TAY',
    'Fût restée : un regret sur ce qui aurait dû être déjà fait. Aujourd’hui : soit restée.', ['conditionnel', 'pqp']),
  sl(1863, 'Il eût été juste qu’on la consultât.', 'It would have been fair to consult her.',
    '/i.ly.te.te ʒyst kɔ̃ la kɔ̃.syl.ta/', 'ee-lü-tay-TAY ZHÜST | kohⁿ la kohⁿ-sül-TA', ['conditionnel', 'deuxieme-forme']),
  map(1864, 'Il eût été juste qu’on la consultât.', 'Il aurait été juste qu’on la consulte.', 'It would have been fair to consult her.',
    '/i.lo.ʁɛ.te.te ʒyst kɔ̃ la kɔ̃.sylt/', 'ee-loh-reh-tay-TAY ZHÜST | kohⁿ la kohⁿ-SÜLT',
    'Deux formes du livre : eût été (un conditionnel passé à l’ancienne) et consultât. Aujourd’hui : aurait été, consulte.', ['conditionnel', 'deuxieme-forme']),
  rule(1865, 'Un conditionnel principal compte comme un passé : le livre met l’imparfait du subjonctif.', 'A conditional main verb counts as a past: the book uses the imperfect subjunctive.',
    '/œ̃ kɔ̃.di.sjɔ.nɛl pʁɛ̃.si.pal kɔ̃t kɔ.mœ̃ pa.se lə livʁ mɛ lɛ̃.paʁ.fɛ dy syb.ʒɔ̃k.tif/', 'uhⁿ kohⁿ-dee-syo-NEL prehⁿ-see-PAL | KOHⁿT ko-muhⁿ pa-SAY | luh LEEVR meh lehⁿ-par-FEH dü süb-zhohⁿk-TEEF',
    'Pourquoi un livre écrit-il je voudrais qu’il vînt, et non qu’il vienne ?',
    'Le conditionnel est formé sur les terminaisons de l’imparfait (voudr-ais) : la grammaire classique le range avec le passé. Aujourd’hui : je voudrais qu’il vienne.', ['conditionnel']),
  rule(1866, 'Même après un conditionnel, le français d’aujourd’hui garde le présent du subjonctif.', 'Even after a conditional, today’s French keeps the present subjunctive.',
    '/mɛm a.pʁɛ.zœ̃ kɔ̃.di.sjɔ.nɛl lə fʁɑ̃.sɛ do.ʒuʁ.dɥi ɡaʁd lə pʁe.zɑ̃ dy syb.ʒɔ̃k.tif/', 'mem a-preh-zuhⁿ kohⁿ-dee-syo-NEL | luh frahⁿ-SEH doh-zhoor-DWEE | gard luh pray-ZAHⁿ dü süb-zhohⁿk-TEEF',
    'Et dans ta bouche, après je voudrais que ?',
    'Le présent : je voudrais que tu viennes. L’imparfait du subjonctif, ici, n’est plus qu’une marque de style.', ['conditionnel']),
  sent(1867, 'Je voudrais que tu viennes ce soir.', 'I would like you to come tonight.',
    '/ʒə vu.dʁɛ kə ty vjɛn sə swaʁ/', 'zhuh voo-DREH | kuh tü VYENN | suh SWAR', ['conditionnel', 'present'], FCVDR),
  sent(1868, 'Il faudrait qu’on en parle avant lundi.', 'We would need to talk about it before Monday.',
    '/il fo.dʁɛ kɔ̃.nɑ̃ paʁl a.vɑ̃ lœ̃.di/', 'eel foh-DREH | kohⁿ-nahⁿ PARL | a-vahⁿ luhⁿ-DEE', ['conditionnel', 'present']),
  sl(1869, 'Je souhaiterais qu’on me laissât seul.', 'I would wish to be left alone.',
    '/ʒə swɛ.tʁɛ kɔ̃ mə lɛ.sa sœl/', 'zhuh sweh-TREH | kohⁿ muh leh-SA SUHL', ['conditionnel', 'imparfait']),
  map(1870, 'Je souhaiterais qu’on me laissât seul.', 'Je souhaiterais qu’on me laisse seul.', 'I would wish to be left alone.',
    '/ʒə swɛ.tʁɛ kɔ̃ mə lɛs sœl/', 'zhuh sweh-TREH | kohⁿ muh LESS SUHL',
    'Laissât : laisser. Le conditionnel de politesse, et l’imparfait du subjonctif du livre. Aujourd’hui : laisse.', ['conditionnel', 'imparfait']),
];

/* ── ACT 5 · EÛT-IL SU (.1871-.1884) ──────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sl(1871, 'Eût-il su la vérité, il fût resté.', 'Had he known the truth, he would have stayed.',
    '/y.til sy la ve.ʁi.te il fy ʁɛs.te/', 'ü-TEEL SÜ | la vay-ree-TAY | eel fü res-TAY', ['inversion', 'hypothese']),
  map(1872, 'Eût-il su la vérité, il fût resté.', 'S’il avait su la vérité, il serait resté.', 'Had he known the truth, he would have stayed.',
    '/si.la.vɛ sy la ve.ʁi.te il sə.ʁɛ ʁɛs.te/', 'see-la-veh SÜ | la vay-ree-TAY | eel suh-REH res-TAY',
    'Eût-il su : s’il avait su. Il fût resté, sans « que » devant : un conditionnel passé, il serait resté.', ['inversion', 'hypothese'], FCVDR),
  sl(1873, 'Eût-elle insisté, on l’eût écoutée.', 'Had she insisted, they would have listened to her.',
    '/y.tɛ.lɛ̃.sis.te ɔ̃ ly.te.ku.te/', 'ü-teh-lehⁿ-sees-TAY | ohⁿ lü-tay-koo-TAY', ['inversion', 'hypothese']),
  map(1874, 'Eût-elle insisté, on l’eût écoutée.', 'Si elle avait insisté, on l’aurait écoutée.', 'Had she insisted, they would have listened to her.',
    '/si ɛ.la.vɛ.tɛ̃.sis.te ɔ̃ lo.ʁɛ.te.ku.te/', 'see eh-la-veh-tehⁿ-sees-TAY | ohⁿ loh-reh-tay-koo-TAY',
    'Eût-elle insisté : si elle avait insisté. Elle n’a pas insisté : c’est un irréel du passé.', ['inversion', 'hypothese']),
  sl(1875, 'N’eût été sa fatigue, il eût continué.', 'Had it not been for his tiredness, he would have carried on.',
    '/ny.te.te sa fa.tiɡ i.ly kɔ̃.ti.nɥe/', 'nü-tay-TAY sa fa-TEEG | ee-lü kohⁿ-tee-NWAY', ['inversion', 'hypothese', 'figee']),
  map(1876, 'N’eût été sa fatigue, il eût continué.', 'Sans sa fatigue, il aurait continué.', 'Had it not been for his tiredness, he would have carried on.',
    '/sɑ̃ sa fa.tiɡ i.lo.ʁɛ kɔ̃.ti.nɥe/', 'sahⁿ sa fa-TEEG | ee-loh-REH kohⁿ-tee-NWAY',
    'N’eût été : si ce n’avait été, donc sans. Une locution figée du style soutenu.', ['inversion', 'hypothese', 'figee'], FCVDR),
  sl(1877, 'Fût-il arrivé une heure plus tôt, il l’eût trouvée.', 'Had he arrived an hour earlier, he would have found her.',
    '/fy.ti.la.ʁi.ve y.nœʁ ply to il ly tʁu.ve/', 'fü-tee-la-ree-VAY | ü-nuhr plü TOH | eel lü troo-VAY', ['inversion', 'hypothese']),
  map(1878, 'Fût-il arrivé une heure plus tôt, il l’eût trouvée.', 'S’il était arrivé une heure plus tôt, il l’aurait trouvée.', 'Had he arrived an hour earlier, he would have found her.',
    '/si.le.tɛ.ta.ʁi.ve y.nœʁ ply to il lo.ʁɛ tʁu.ve/', 'see-lay-teh-ta-ree-VAY | ü-nuhr plü TOH | eel loh-reh troo-VAY',
    'Fût-il arrivé, avec être : s’il était arrivé. Ici fût-il ouvre une hypothèse, pas une concession.', ['inversion', 'hypothese']),
  rule(1879, 'Eût-il su : s’il avait su. L’inversion remplace si.', 'Eût-il su: if he had known. The inversion replaces si.',
    '/y.til sy si.la.vɛ sy lɛ̃.vɛʁ.sjɔ̃ ʁɑ̃.plas si/', 'ü-teel SÜ | see-la-veh SÜ | lehⁿ-vehr-SYOHⁿ rahⁿ-PLASS SEE',
    'Eût-il su, en tête de phrase : que veut dire la forme ?',
    'Une hypothèse sur le passé, qui ne s’est pas réalisée. Le verbe passe devant le sujet et si disparaît.', ['hypothese'], F),
  rule(1880, 'Après l’inversion, la suite peut garder la forme du livre ou passer au conditionnel passé.', 'After the inversion, the rest may keep the book form or switch to the past conditional.',
    '/a.pʁɛ lɛ̃.vɛʁ.sjɔ̃ la sɥit pø ɡaʁ.de la fɔʁm dy livʁ u pa.se o kɔ̃.di.sjɔ.nɛl pa.se/', 'a-preh lehⁿ-vehr-SYOHⁿ | la SWEET peu gar-DAY | la form dü LEEVR | oo pa-SAY oh kohⁿ-dee-syo-nel pa-SAY',
    'Eût-il su, il fût resté, ou eût-il su, il serait resté ?',
    'Les deux se lisent. Le sens ne change pas : il n’a pas su, il n’est pas resté.', ['hypothese']),
  sent(1881, 'Si elle avait parlé plus tôt, on l’aurait crue.', 'If she had spoken sooner, she would have been believed.',
    '/si ɛ.la.vɛ paʁ.le ply to ɔ̃ lo.ʁɛ kʁy/', 'see eh-la-veh par-LAY plü TOH | ohⁿ loh-reh KRÜ', ['si', 'present'], FCVDR),
  rule(1882, 'Eut-il, sans chapeau, est un passé simple ; eût-il, avec chapeau, ouvre une hypothèse.', 'Eut-il, without the circumflex, is a passé simple; eût-il, with it, opens a hypothesis.',
    '/y.til sɑ̃ ʃa.po ɛ.tœ̃ pa.se sɛ̃pl y.til a.vɛk ʃa.po uvʁ yn i.pɔ.tɛz/', 'ü-TEEL | sahⁿ sha-POH | eh-tuhⁿ pa-say SEHⁿPL | ü-TEEL | a-vek sha-POH | oovr ün ee-po-TEZ',
    'Eut-il ou eût-il : comment les distinguer ?',
    'Eut-il, sans accent, raconte un fait : une question, ou une inversion après à peine (la leçon 8 du B2). Eût-il, suivi d’une virgule et d’une autre proposition, dit si, ou même si.', ['hypothese'], F),
  sl(1883, 'Eût-on écouté les anciens, le village n’eût pas été noyé.', 'Had the elders been listened to, the village would not have been flooded.',
    '/y.tɔ̃.ne.ku.te le.zɑ̃.sjɛ̃ lə vi.laʒ ny pa.ze.te nwa.je/', 'ü-tohⁿ-nay-koo-TAY | lay-zahⁿ-SYEHⁿ | luh vee-LAZH | nü pa-zay-TAY nwa-YAY', ['inversion', 'hypothese']),
  map(1884, 'Eût-on écouté les anciens, le village n’eût pas été noyé.', 'Si on avait écouté les anciens, le village n’aurait pas été noyé.', 'Had the elders been listened to, the village would not have been flooded.',
    '/si ɔ̃.na.vɛ.te.ku.te le.zɑ̃.sjɛ̃ lə vi.laʒ no.ʁɛ pa.ze.te nwa.je/', 'see ohⁿ-na-veh-tay-koo-TAY | lay-zahⁿ-SYEHⁿ | luh vee-LAZH | noh-reh pa-zay-TAY nwa-YAY',
    'Eût-on écouté : si on avait écouté. On ne les a pas écoutés, et le village a été noyé.', ['inversion', 'hypothese']),
];

/* ── ACT 6 · FÛT-IL ROI (.1889-.1902) ─────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sl(1889, 'Fût-il roi, il devrait attendre son tour.', 'Even if he were king, he would have to wait his turn.',
    '/fy.til ʁwa il də.vʁɛ a.tɑ̃dʁ sɔ̃ tuʁ/', 'fü-teel RWA | eel duh-VREH | a-tahⁿdr sohⁿ TOOR', ['inversion', 'concession']),
  map(1890, 'Fût-il roi, il devrait attendre son tour.', 'Même s’il était roi, il devrait attendre son tour.', 'Even if he were king, he would have to wait his turn.',
    '/mɛm si.le.tɛ ʁwa il də.vʁɛ a.tɑ̃dʁ sɔ̃ tuʁ/', 'mem see-lay-teh RWA | eel duh-VREH | a-tahⁿdr sohⁿ TOOR',
    'Fût-il roi : même s’il était roi. La suite dit le contraire de ce qu’on attend : une concession.', ['inversion', 'concession'], FCVDR),
  sl(1891, 'Fût-elle excellente, l’offre ne me tenterait pas.', 'Even if it were excellent, the offer would not tempt me.',
    '/fy.tɛ.lɛk.sɛ.lɑ̃t lɔfʁ nə mə tɑ̃t.ʁɛ pa/', 'fü-teh-lek-seh-LAHⁿT | LOFR | nuh muh tahⁿt-REH PA', ['inversion', 'concession']),
  map(1892, 'Fût-elle excellente, l’offre ne me tenterait pas.', 'Même si elle était excellente, l’offre ne me tenterait pas.', 'Even if it were excellent, the offer would not tempt me.',
    '/mɛm si ɛ.le.tɛ.tɛk.sɛ.lɑ̃t lɔfʁ nə mə tɑ̃t.ʁɛ pa/', 'mem see eh-lay-teh-tek-seh-LAHⁿT | LOFR | nuh muh tahⁿt-REH PA',
    'Fût-elle : elle renvoie à l’offre, annoncée après. Même si elle était excellente.', ['inversion', 'concession']),
  sl(1893, 'L’eût-il voulu, il n’aurait pas pu partir.', 'Even if he had wanted to, he could not have left.',
    '/ly.til vu.ly il no.ʁɛ pa py paʁ.tiʁ/', 'lü-teel voo-LÜ | eel noh-reh pa PÜ | par-TEER', ['inversion', 'concession']),
  map(1894, 'L’eût-il voulu, il n’aurait pas pu partir.', 'Même s’il l’avait voulu, il n’aurait pas pu partir.', 'Even if he had wanted to, he could not have left.',
    '/mɛm sil la.vɛ vu.ly il no.ʁɛ pa py paʁ.tiʁ/', 'mem seel la-veh voo-LÜ | eel noh-reh pa PÜ | par-TEER',
    'L’eût-il voulu : même forme qu’une hypothèse, mais la suite dit qu’il n’aurait pas pu. Donc même si.', ['inversion', 'concession']),
  rule(1895, 'Fût-il roi : même s’il était roi. Le sens vient de la suite de la phrase.', 'Fût-il roi: even if he were king. The meaning comes from the rest of the sentence.',
    '/fy.til ʁwa mɛm si.le.tɛ ʁwa lə sɑ̃s vjɛ̃ d la sɥit də la fʁaz/', 'fü-teel RWA | mem see-lay-teh RWA | luh SAHⁿS vyehⁿ duh la SWEET | duh la FRAZ',
    'Hypothèse ou concession : comment décider ?',
    'Si la suite tire la conséquence (il serait resté), c’est si. Si elle dit le contraire de ce qu’on attendrait (il devrait attendre quand même), c’est même si.', ['concession'], F),
  sl(1896, 'Dussé-je attendre dix ans, je ne renoncerai pas.', 'Even if I had to wait ten years, I will not give up.',
    '/dy.sɛʒ a.tɑ̃dʁ di.zɑ̃ ʒə nə ʁə.nɔ̃s.ʁe pa/', 'dü-SEZH | a-tahⁿdr dee-ZAHⁿ | zhuh nuh ruh-nohⁿs-RAY PA', ['inversion', 'concession', 'je']),
  map(1897, 'Dussé-je attendre dix ans, je ne renoncerai pas.', 'Même si je devais attendre dix ans, je ne renoncerai pas.', 'Even if I had to wait ten years, I will not give up.',
    '/mɛm si ʒə də.vɛ a.tɑ̃dʁ di.zɑ̃ ʒə nə ʁə.nɔ̃s.ʁe pa/', 'mem see zhuh duh-VEH | a-tahⁿdr dee-ZAHⁿ | zhuh nuh ruh-nohⁿs-RAY PA',
    'Dussé-je : devoir, je, avec un é pour la prononciation. C’est le dût-il de la leçon 9 du B2, à la première personne.', ['inversion', 'concession', 'je']),
  sl(1898, 'Serait-il ministre, la règle vaudrait pour lui.', 'Even if he were a minister, the rule would apply to him.',
    '/sə.ʁɛ.til mi.nistʁ la ʁɛɡl vo.dʁɛ puʁ lɥi/', 'suh-reh-TEEL mee-NEESTR | la REGL | voh-DREH poor LWEE', ['inversion', 'concession', 'conditionnel']),
  map(1899, 'Serait-il ministre, la règle vaudrait pour lui.', 'Même s’il était ministre, la règle vaudrait pour lui.', 'Even if he were a minister, the rule would apply to him.',
    '/mɛm si.le.tɛ mi.nistʁ la ʁɛɡl vo.dʁɛ puʁ lɥi/', 'mem see-lay-teh mee-NEESTR | la REGL | voh-DREH poor LWEE',
    'Serait-il : la même concession avec un conditionnel, au lieu du subjonctif. Style soutenu, encore vivant à l’écrit.', ['inversion', 'concession', 'conditionnel']),
  rule(1900, 'Fût-il, dût-il, eût-il : le verbe passe devant, et si ou même si disparaît.', 'Fût-il, dût-il, eût-il: the verb moves to the front, and si or même si disappears.',
    '/fy.til dy.til y.til lə vɛʁb pas də.vɑ̃ e si u mɛm si di.spa.ʁɛ/', 'fü-TEEL | dü-TEEL | ü-TEEL | luh VEHRB pass duh-VAHⁿ | ay SEE oo mem SEE | dees-pa-REH',
    'Que remplace l’inversion en tête de phrase ?',
    'Une conjonction : si pour une hypothèse, même si pour une concession. La virgule après le sujet t’avertit.', ['concession', 'hypothese'], F),
  sl(1901, 'Si riche fût-il, il vivait simplement.', 'However rich he was, he lived simply.',
    '/si ʁiʃ fy.til il vi.vɛ sɛ̃.plə.mɑ̃/', 'see REESH fü-TEEL | eel vee-VEH | sehⁿ-pluh-MAHⁿ', ['inversion', 'concession']),
  map(1902, 'Si riche fût-il, il vivait simplement.', 'Aussi riche qu’il soit, il vivait simplement.', 'However rich he was, he lived simply.',
    '/o.si ʁiʃ kil swa il vi.vɛ sɛ̃.plə.mɑ̃/', 'oh-see REESH | keel SWA | eel vee-VEH | sehⁿ-pluh-MAHⁿ',
    'Si riche fût-il : le aussi pratique soit-il de la leçon 16 du B2, au passé du livre. Aujourd’hui : aussi riche qu’il soit.', ['inversion', 'concession']),
];

/* ── ACT 7 · LA DISCORDANCE QUI PARLE (.1907-.1916) ───────────────────────── */

export const ACT7_ROWS: Row[] = [
  sl(1907, 'Je ne crois pas qu’il le fît sans y être forcé.', 'I do not think he would do it unless he were forced.',
    '/ʒə nə kʁwa pa kil lə fi sɑ̃.zi ɛtʁ fɔʁ.se/', 'zhuh nuh krwa PA | keel luh FEE | sahⁿ-zee etr for-SAY', ['discordance', 'conditionnel']),
  map(1908, 'Je ne crois pas qu’il le fît sans y être forcé.', 'Je ne crois pas qu’il le ferait sans y être forcé.', 'I do not think he would do it unless he were forced.',
    '/ʒə nə kʁwa pa kil lə fə.ʁɛ sɑ̃.zi ɛtʁ fɔʁ.se/', 'zhuh nuh krwa PA | keel luh fuh-REH | sahⁿ-zee etr for-SAY',
    'Crois, au présent, et pourtant fît : l’écart a un sens. Fît vaut ici un conditionnel, il le ferait.', ['discordance', 'conditionnel'], FCVDR),
  sl(1909, 'Il n’est pas sûr qu’elle acceptât, si on le lui proposait.', 'It is not certain she would accept, if it were offered to her.',
    '/il nɛ pa syʁ kɛ.lak.sɛp.ta si ɔ̃ lə lɥi pʁɔ.po.zɛ/', 'eel neh pa SÜR | keh-lak-sep-TA | see ohⁿ luh lwee pro-po-ZEH', ['discordance', 'conditionnel']),
  map(1910, 'Il n’est pas sûr qu’elle acceptât, si on le lui proposait.', 'Il n’est pas sûr qu’elle accepterait, si on le lui proposait.', 'It is not certain she would accept, if it were offered to her.',
    '/il nɛ pa syʁ kɛ.lak.sɛp.tə.ʁɛ si ɔ̃ lə lɥi pʁɔ.po.zɛ/', 'eel neh pa SÜR | keh-lak-sep-tuh-REH | see ohⁿ luh lwee pro-po-ZEH',
    'Acceptât, après un présent : un conditionnel déguisé. La condition, si on le lui proposait, le confirme.', ['discordance', 'conditionnel']),
  rule(1911, 'Après un présent, qu’il le fît peut valoir qu’il le ferait.', 'After a present, qu’il le fît can mean qu’il le ferait.',
    '/a.pʁɛ.zœ̃ pʁe.zɑ̃ kil lə fi pø va.lwaʁ kil lə fə.ʁɛ/', 'a-preh-zuhⁿ pray-ZAHⁿ | keel luh FEE | peu va-LWAR | keel luh fuh-REH',
    'Un imparfait du subjonctif après un verbe au présent : une faute ?',
    'Pas forcément : dans la langue soignée, il peut porter le sens d’un conditionnel. Cherche la condition, dite ou sous-entendue.', ['discordance'], F),
  sent(1912, 'Le directeur a exigé que vous soyez là demain.', 'The director has insisted that you be there tomorrow.',
    '/lə di.ʁɛk.tœʁ a ɛɡ.zi.ʒe kə vu swa.je la də.mɛ̃/', 'luh dee-rek-TUHR a eg-zee-ZHAY | kuh voo swa-YAY LA | duh-MEHⁿ', ['discordance', 'present'], FCVDR),
  rule(1913, 'Ce qui reste vrai, ou vient après aujourd’hui, peut garder le présent même après un passé.', 'What still holds, or comes after today, may keep the present even after a past.',
    '/sə ki ʁɛst vʁɛ u vjɛ̃ a.pʁɛ o.ʒuʁ.dɥi pø ɡaʁ.de lə pʁe.zɑ̃ mɛm a.pʁɛ.zœ̃ pa.se/', 'suh kee rest VREH | oo vyehⁿ a-preh oh-zhoor-DWEE | peu gar-DAY luh pray-ZAHⁿ | mem a-preh-zuhⁿ pa-SAY',
    'Un présent du subjonctif après un passé, dans un texte soigné : pourquoi ?',
    'Le moment n’est plus celui du récit mais celui où l’on écrit : vous êtes libres aujourd’hui, vous serez là demain.', ['discordance']),
  sl(1914, 'Il voulut que ses enfants fussent libres.', 'He wanted his children to be free.',
    '/il vu.ly kə se.zɑ̃.fɑ̃ fys libʁ/', 'eel voo-LÜ | kuh say-zahⁿ-FAHⁿ | füss LEEBR', ['imparfait', 'simultane']),
  sent(1915, 'Il voulut que ses enfants soient libres, et ils le sont.', 'He wanted his children to be free, and they are.',
    '/il vu.ly kə se.zɑ̃.fɑ̃ swa libʁ e il lə sɔ̃/', 'eel voo-LÜ | kuh say-zahⁿ-FAHⁿ swa LEEBR | ay eel luh SOHⁿ', ['discordance', 'present'], FCVR, { register: S }),
  rule(1916, 'La discordance n’est pas forcément une faute : elle peut dire un autre moment.', 'A break in the sequence is not necessarily a mistake: it can express another moment.',
    '/la di.skɔʁ.dɑ̃s nɛ pa fɔʁ.se.mɑ̃ yn fot ɛl pø diʁ œ̃.no.tʁə mɔ.mɑ̃/', 'la dees-kor-DAHⁿS | neh pa for-say-MAHⁿ ün FOHT | el peu DEER | uhⁿ-noh-truh mo-MAHⁿ',
    'Un auteur qui connaît la règle et ne la suit pas : que fait-il ?',
    'Il choisit : un autre moment (le présent de celui qui écrit) ou un autre sens (le conditionnel). Regarde ce que l’écart ajoute.', ['discordance']),
];

/* ── ACT 8 · AUJOURD’HUI, DANS LA PROSE ET LA PRESSE (.1925-.1937) ────────── */

export const ACT8_ROWS: Row[] = [
  sl(1925, 'Il fallait qu’elle vienne, bien que ce fût risqué.', 'She had to come, although it was risky.',
    '/il fa.lɛ kɛl vjɛn bjɛ̃ kə sə fy ʁis.ke/', 'eel fa-LEH | kel VYENN | byehⁿ kuh suh FÜ ris-KAY', ['partielle', 'imparfait']),
  map(1926, 'Il fallait qu’elle vienne, bien que ce fût risqué.', 'Il fallait qu’elle vienne, bien que ce soit risqué.', 'She had to come, although it was risky.',
    '/il fa.lɛ kɛl vjɛn bjɛ̃ kə sə swa ʁis.ke/', 'eel fa-LEH | kel VYENN | byehⁿ kuh suh SWA ris-KAY',
    'Une concordance partielle : l’auteur garde fût, la forme la plus courante, et met vienne ailleurs. Aujourd’hui : soit.', ['partielle', 'imparfait'], FCVDR),
  sl(1927, 'La mairie déplora que l’accord ne fût pas signé à temps.', 'The town hall deplored that the agreement was not signed in time.',
    '/la mɛ.ʁi de.plɔ.ʁa kə la.kɔʁ nə fy pa si.ɲe a tɑ̃/', 'la meh-REE day-plo-RA | kuh la-KOR | nuh fü pa see-NYAY | a TAHⁿ', ['presse', 'imparfait']),
  map(1928, 'La mairie déplora que l’accord ne fût pas signé à temps.', 'La mairie a déploré que l’accord ne soit pas signé à temps.', 'The town hall deplored that the agreement was not signed in time.',
    '/la mɛ.ʁi a de.plɔ.ʁe kə la.kɔʁ nə swa pa si.ɲe a tɑ̃/', 'la meh-REE a day-plo-RAY | kuh la-KOR | nuh swa pa see-NYAY | a TAHⁿ',
    'Un journaliste peut écrire fût pour la solennité. Ici, ne pas est une vraie négation : garde-la.', ['presse', 'imparfait'], FCVDR),
  sent(1929, 'Elle voulait qu’il parte avant l’aube.', 'She wanted him to leave before dawn.',
    '/ɛl vu.lɛ kil paʁt a.vɑ̃ lob/', 'el voo-LEH | keel PART | a-vahⁿ LOHB', ['moderne', 'present'], FCVDR),
  rule(1930, 'Beaucoup d’auteurs d’aujourd’hui gardent surtout qu’il fût et qu’il eût.', 'Many writers today keep mainly qu’il fût and qu’il eût.',
    '/bo.ku do.tœʁ do.ʒuʁ.dɥi ɡaʁd syʁ.tu kil fy e ki.ly/', 'boh-koo doh-TUHR doh-zhoor-DWEE | gard sür-TOO | keel FÜ | ay kee-LÜ',
    'Que fait souvent un romancier d’aujourd’hui qui aime la concordance ?',
    'Il la garde surtout pour être et avoir, et à la troisième personne du singulier, et met le présent ailleurs. Grevisse décrit cet usage de l’écrit.', ['partielle'], F),
  rule(1931, 'L’OQLF admet le présent du subjonctif après un verbe principal au passé.', 'OQLF accepts the present subjunctive after a past main verb.',
    '/lo.ky.ɛ.lɛf ad.mɛ lə pʁe.zɑ̃ dy syb.ʒɔ̃k.tif a.pʁɛ.zœ̃ vɛʁb pʁɛ̃.si.pal o pa.se/', 'loh-kü-eh-LEF | ad-MEH luh pray-ZAHⁿ dü süb-zhohⁿk-TEEF | a-preh-zuhⁿ VEHRB prehⁿ-see-PAL | oh pa-SAY',
    'Je voulais qu’il parte : est-ce correct à l’écrit ?',
    'Oui. L’imparfait du subjonctif reste la règle de principe, mais l’OQLF admet le présent, et la plupart des auteurs l’écrivent. Certains correcteurs tiennent encore à la règle stricte dans l’écrit très soutenu.', ['norme']),
  rule(1932, 'À l’oral, l’imparfait du subjonctif ne s’entend plus guère, sinon par jeu.', 'In speech, the imperfect subjunctive is hardly heard any more, except in jest.',
    '/a lɔ.ʁal lɛ̃.paʁ.fɛ dy syb.ʒɔ̃k.tif nə sɑ̃.tɑ̃ ply ɡɛʁ si.nɔ̃ paʁ ʒø/', 'a lo-RAL | lehⁿ-par-FEH dü süb-zhohⁿk-TEEF | nuh sahⁿ-TAHⁿ plü GEHR | see-nohⁿ par ZHEU',
    'Et dans une conversation ?',
    'Presque personne ne le dit sérieusement : qui dit qu’il vînt imite le plus souvent les livres pour faire sourire, ou vise une solennité appuyée.', ['norme']),
  sl(1933, 'Bien qu’il eût raison, personne ne l’écouta.', 'Although he was right, nobody listened to him.',
    '/bjɛ̃ ki.ly ʁɛ.zɔ̃ pɛʁ.sɔn nə le.ku.ta/', 'byehⁿ kee-lü reh-ZOHⁿ | pehr-SONN nuh lay-koo-TA', ['partielle', 'imparfait']),
  map(1934, 'Bien qu’il eût raison, personne ne l’écouta.', 'Bien qu’il ait raison, personne ne l’a écouté.', 'Although he was right, nobody listened to him.',
    '/bjɛ̃ ki.lɛ ʁɛ.zɔ̃ pɛʁ.sɔn nə la e.ku.te/', 'byehⁿ kee-leh reh-ZOHⁿ | pehr-SONN nuh la ay-koo-TAY',
    'Eût, sans participe : l’imparfait du subjonctif d’avoir. Aujourd’hui : ait ; écouta devient l’a écouté.', ['partielle', 'imparfait']),
  sl(1935, 'On eût dit que la ville entière attendait qu’il parle.', 'It was as if the whole town were waiting for him to speak.',
    '/ɔ̃.ny di kə la vil ɑ̃.tjɛʁ a.tɑ̃.dɛ kil paʁl/', 'ohⁿ-nü DEE | kuh la veel ahⁿ-TYEHR | a-tahⁿ-DEH | keel PARL', ['partielle', 'deuxieme-forme']),
  map(1936, 'On eût dit que la ville entière attendait qu’il parle.', 'On aurait dit que la ville entière attendait qu’il parle.', 'It was as if the whole town were waiting for him to speak.',
    '/ɔ̃.no.ʁɛ di kə la vil ɑ̃.tjɛʁ a.tɑ̃.dɛ kil paʁl/', 'ohⁿ-noh-reh DEE | kuh la veel ahⁿ-TYEHR | a-tahⁿ-DEH | keel PARL',
    'L’auteur garde le solennel on eût dit, mais écrit qu’il parle et non qu’il parlât : un mélange courant.', ['partielle', 'deuxieme-forme']),
  sent(1937, 'Le comité a souhaité que la salle reste ouverte.', 'The committee wished the hall to stay open.',
    '/lə kɔ.mi.te a swɛ.te kə la sal ʁɛst u.vɛʁt/', 'luh ko-mee-TAY a sweh-TAY | kuh la SAL | rest oo-VEHRT', ['moderne', 'present'], FCVDR),
];

/* ── ACT 9 · L’EFFET (.1943-.1954) ────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sl(1943, 'Il convenait que le dessert fût servi avec la plus grande dignité.', 'It was fitting that the dessert be served with the greatest dignity.',
    '/il kɔ̃v.nɛ kə lə de.sɛʁ fy sɛʁ.vi a.vɛk la ply ɡʁɑ̃d di.ɲi.te/', 'eel kohⁿv-NEH | kuh luh day-SEHR | fü sehr-VEE | a-vek la plü GRAHⁿD | dee-nyee-TAY', ['effet', 'ironie']),
  map(1944, 'Il convenait que le dessert fût servi avec la plus grande dignité.', 'Il convenait que le dessert soit servi avec la plus grande dignité.', 'It was fitting that the dessert be served with the greatest dignity.',
    '/il kɔ̃v.nɛ kə lə de.sɛʁ swa sɛʁ.vi a.vɛk la ply ɡʁɑ̃d di.ɲi.te/', 'eel kohⁿv-NEH | kuh luh day-SEHR | swa sehr-VEE | a-vek la plü GRAHⁿD | dee-nyee-TAY',
    'Un dessert servi comme un sacre : la forme rare grossit la scène, et l’on sourit. Aujourd’hui : soit servi.', ['effet', 'ironie']),
  sl(1945, 'Le conseil exigea que le chien du voisin cessât d’aboyer après vingt-deux heures.', 'The council demanded that the neighbour’s dog stop barking after ten p.m.',
    '/lə kɔ̃.sɛj ɛɡ.zi.ʒa kə lə ʃjɛ̃ dy vwa.zɛ̃ se.sa da.bwa.je a.pʁɛ vɛ̃t.dø.zœʁ/', 'luh kohⁿ-SEY eg-zee-ZHA | kuh luh SHYEHⁿ dü vwa-ZEHⁿ | say-SA da-bwa-YAY | a-preh vehⁿt-deu-ZUHR', ['effet', 'ironie']),
  map(1946, 'Le conseil exigea que le chien du voisin cessât d’aboyer après vingt-deux heures.', 'Le conseil a exigé que le chien du voisin cesse d’aboyer après vingt-deux heures.', 'The council demanded that the neighbour’s dog stop barking after ten p.m.',
    '/lə kɔ̃.sɛj a ɛɡ.zi.ʒe kə lə ʃjɛ̃ dy vwa.zɛ̃ sɛs da.bwa.je a.pʁɛ vɛ̃t.dø.zœʁ/', 'luh kohⁿ-SEY a eg-zee-ZHAY | kuh luh SHYEHⁿ dü vwa-ZEHⁿ | SESS da-bwa-YAY | a-preh vehⁿt-deu-ZUHR',
    'Cessât : cesser. Un sujet minuscule dans l’habit d’un décret : c’est le comique du pastiche.', ['effet', 'ironie'], FCVDR),
  sl(1947, 'Il fallut que l’on se rendît à l’évidence : la photocopieuse était en panne.', 'One had to face the facts: the photocopier was broken.',
    '/il fa.ly kə lɔ̃ sə ʁɑ̃.di a le.vi.dɑ̃s la fɔ.to.kɔ.pjøz e.tɛ.tɑ̃ pan/', 'eel fa-LÜ | kuh lohⁿ suh rahⁿ-DEE | a lay-vee-DAHⁿS | la fo-to-ko-PYEUZ | ay-teh-tahⁿ PANN', ['effet', 'ironie']),
  map(1948, 'Il fallut que l’on se rendît à l’évidence : la photocopieuse était en panne.', 'Il a fallu qu’on se rende à l’évidence : la photocopieuse était en panne.', 'One had to face the facts: the photocopier was broken.',
    '/i.la fa.ly kɔ̃ sə ʁɑ̃d a le.vi.dɑ̃s la fɔ.to.kɔ.pjøz e.tɛ.tɑ̃ pan/', 'ee-la fa-LÜ | kohⁿ suh RAHⁿD | a lay-vee-DAHⁿS | la fo-to-ko-PYEUZ | ay-teh-tahⁿ PANN',
    'Rendît : rendre. La première moitié est tragique, la seconde banale : la chute fait rire.', ['effet', 'ironie']),
  sent(1949, 'Le style est trop grand pour la situation : c’est de l’ironie.', 'The style is too grand for the situation: that is irony.',
    '/lə stil ɛ tʁo ɡʁɑ̃ puʁ la si.tɥa.sjɔ̃ sɛ d li.ʁɔ.ni/', 'luh STEEL eh troh GRAHⁿ | poor la see-twa-SYOHⁿ | seh duh lee-ro-NEE', ['effet', 'ironie']),
  sent(1950, 'La forme rare donne du poids à la phrase.', 'The rare form gives weight to the sentence.',
    '/la fɔʁm ʁaʁ dɔn dy pwa a la fʁaz/', 'la form RAR | donn dü PWA | a la FRAZ', ['effet', 'solennite']),
  sent(1951, 'Ce pastiche imite la concordance d’un roman classique.', 'This pastiche imitates the sequence of tenses of a classic novel.',
    '/sə pas.tiʃ i.mit la kɔ̃.kɔʁ.dɑ̃s dœ̃ ʁɔ.mɑ̃ kla.sik/', 'suh pass-TEESH | ee-meet la kohⁿ-kor-DAHⁿS | duhⁿ ro-mahⁿ kla-SEEK', ['effet', 'pastiche']),
  rule(1952, 'Solennité, ironie, pastiche : la forme rare dit toujours quelque chose.', 'Solemnity, irony, pastiche: the rare form always says something.',
    '/sɔ.la.ni.te i.ʁɔ.ni pas.tiʃ la fɔʁm ʁaʁ di tu.ʒuʁ kɛl.kə ʃoz/', 'so-la-nee-TAY | ee-ro-NEE | pass-TEESH | la form RAR | dee too-zhoor kel-kuh SHOHZ',
    'Pourquoi un auteur d’aujourd’hui écrit-il qu’il fût ?',
    'Pour élever le ton (solennité), pour grossir une petite chose (ironie) ou pour imiter un style ancien (pastiche). Le contexte dit lequel.', ['effet']),
  sl(1953, 'Que la paix fût rendue à ce pays, voilà ce que tous espéraient.', 'That peace be restored to this country: that was what everyone hoped.',
    '/kə la pɛ fy ʁɑ̃.dy a sə pe.i vwa.la sə kə tu.zɛs.pe.ʁɛ/', 'kuh la PEH | fü rahⁿ-DÜ | a suh pay-EE | vwa-LA suh kuh too-zes-pay-REH', ['effet', 'solennite']),
  map(1954, 'Que la paix fût rendue à ce pays, voilà ce que tous espéraient.', 'Que la paix soit rendue à ce pays, voilà ce que tous espéraient.', 'That peace be restored to this country: that was what everyone hoped.',
    '/kə la pɛ swa ʁɑ̃.dy a sə pe.i vwa.la sə kə tu.zɛs.pe.ʁɛ/', 'kuh la PEH | swa rahⁿ-DÜ | a suh pay-EE | vwa-LA suh kuh too-zes-pay-REH',
    'Le subjonctif en tête de phrase, puis voilà : une phrase de discours, et la forme rare la rend grave.', ['effet', 'solennite']),
];

/* ── ACT 10 · LIRE UNE PAGE ENTIÈRE (.1961-.1969) ─────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sl(1961, 'Elle eût voulu que l’été ne finît jamais.', 'She would have liked the summer never to end.',
    '/ɛ.ly vu.ly kə le.te nə fi.ni ʒa.mɛ/', 'eh-lü voo-LÜ | kuh lay-TAY | nuh fee-NEE zha-MEH', ['page', 'deuxieme-forme']),
  map(1962, 'Elle eût voulu que l’été ne finît jamais.', 'Elle aurait voulu que l’été ne finisse jamais.', 'She would have liked the summer never to end.',
    '/ɛ.lo.ʁɛ vu.ly kə le.te nə fi.nis ʒa.mɛ/', 'eh-loh-reh voo-LÜ | kuh lay-TAY | nuh fee-NEESS zha-MEH',
    'Eût voulu, une deuxième forme, donne la note ; finît la suit. Aujourd’hui : aurait voulu, finisse.', ['page', 'deuxieme-forme'], FCVDR),
  sl(1963, 'Fût-il resté une heure de plus, elle lui eût parlé.', 'Had he stayed one more hour, she would have spoken to him.',
    '/fy.til ʁɛs.te yn œʁ də plys ɛl lɥi y paʁ.le/', 'fü-teel res-TAY | ün UHR duh PLÜSS | el lwee ü par-LAY', ['page', 'hypothese']),
  map(1964, 'Fût-il resté une heure de plus, elle lui eût parlé.', 'S’il était resté une heure de plus, elle lui aurait parlé.', 'Had he stayed one more hour, she would have spoken to him.',
    '/si.le.tɛ ʁɛs.te yn œʁ də plys ɛl lɥi o.ʁɛ paʁ.le/', 'see-lay-teh res-TAY | ün UHR duh PLÜSS | el lwee oh-reh par-LAY',
    'Fût-il resté : une hypothèse, car la suite en tire la conséquence. Il n’est pas resté.', ['page', 'hypothese']),
  sl(1965, 'Il fallait qu’on lui racontât les nouvelles de la vallée.', 'Someone had to tell her the news from the valley.',
    '/il fa.lɛ kɔ̃ lɥi ʁa.kɔ̃.ta le nu.vɛl də la va.le/', 'eel fa-LEH | kohⁿ lwee ra-kohⁿ-TA | lay noo-VEL | duh la va-LAY', ['page', 'imparfait']),
  map(1966, 'Il fallait qu’on lui racontât les nouvelles de la vallée.', 'Il fallait qu’on lui raconte les nouvelles de la vallée.', 'Someone had to tell her the news from the valley.',
    '/il fa.lɛ kɔ̃ lɥi ʁa.kɔ̃t le nu.vɛl də la va.le/', 'eel fa-LEH | kohⁿ lwee ra-KOHⁿT | lay noo-VEL | duh la va-LAY',
    'Racontât : raconter, en même temps que il fallait. Aujourd’hui : raconte.', ['page', 'imparfait']),
  sent(1967, 'Le narrateur garde la concordance pour donner du poids au récit.', 'The narrator keeps the sequence of tenses to give weight to the story.',
    '/lə na.ʁa.tœʁ ɡaʁd la kɔ̃.kɔʁ.dɑ̃s puʁ dɔ.ne dy pwa o ʁe.si/', 'luh na-ra-TUHR GARD | la kohⁿ-kor-DAHⁿS | poor do-nay dü PWA | oh ray-SEE', ['page', 'lecture']),
  sent(1968, 'La seule réplique au présent du subjonctif est celle de la tante.', 'The only line of dialogue in the present subjunctive is the aunt’s.',
    '/la sœl ʁe.plik o pʁe.zɑ̃ dy syb.ʒɔ̃k.tif ɛ sɛl də la tɑ̃t/', 'la suhl ray-PLEEK | oh pray-ZAHⁿ dü süb-zhohⁿk-TEEF | eh sel duh la TAHⁿT', ['page', 'lecture']),
  sent(1969, 'L’inversion rend l’hypothèse plus solennelle.', 'The inversion makes the hypothesis more solemn.',
    '/lɛ̃.vɛʁ.sjɔ̃ ʁɑ̃ li.pɔ.tɛz ply sɔ.la.nɛl/', 'lehⁿ-vehr-SYOHⁿ | RAHⁿ lee-po-TEZ | plü so-la-NEL', ['page', 'lecture']),
];

/* ── ACT 11 · PRÉSENTE LA PAGE (.1976-.1982) ──────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1976, 'Je vous présente une page qui m’a frappée.', 'I am presenting a page that struck me.',
    '/ʒə vu pʁe.zɑ̃t yn paʒ ki ma fʁa.pe/', 'zhuh voo pray-ZAHⁿT | ün PAZH | kee ma fra-PAY', ['tache'], FCVDR),
  sent(1977, 'L’autrice garde la concordance classique dans tout le récit.', 'The author keeps the classical sequence of tenses throughout the story.',
    '/lo.tʁis ɡaʁd la kɔ̃.kɔʁ.dɑ̃s kla.sik dɑ̃ tu lə ʁe.si/', 'loh-TREESS GARD | la kohⁿ-kor-dahⁿs kla-SEEK | dahⁿ too luh ray-SEE', ['tache']),
  sent(1978, 'Une seule phrase s’en écarte, et ce n’est pas un hasard.', 'Only one sentence departs from it, and that is no accident.',
    '/yn sœl fʁaz sɑ̃.ne.kaʁt e sə nɛ pa.zœ̃ a.zaʁ/', 'ün suhl FRAZ | sahⁿ-nay-KART | ay suh neh pa-zuhⁿ a-ZAR', ['tache']),
  sl(1979, 'Eût-il plu ce jour-là, la fête n’eût pas eu lieu.', 'Had it rained that day, the party would not have taken place.',
    '/y.til ply sə ʒuʁ.la la fɛt ny pa.zy ljø/', 'ü-teel PLÜ | suh zhoor-LA | la FET | nü pa-zü LYEU', ['tache', 'hypothese']),
  map(1980, 'Eût-il plu ce jour-là, la fête n’eût pas eu lieu.', 'S’il avait plu ce jour-là, la fête n’aurait pas eu lieu.', 'Had it rained that day, the party would not have taken place.',
    '/si.la.vɛ ply sə ʒuʁ.la la fɛt no.ʁɛ pa.zy ljø/', 'see-la-veh PLÜ | suh zhoor-LA | la FET | noh-reh pa-zü LYEU',
    'Eût-il plu : pleuvoir, et si. Il n’a pas plu, la fête a eu lieu.', ['tache', 'hypothese'], FCVDR),
  sent(1981, 'Cette inversion donne au récit un ton solennel.', 'This inversion gives the story a solemn tone.',
    '/sɛ.tɛ̃.vɛʁ.sjɔ̃ dɔn o ʁe.si œ̃ tɔ̃ sɔ.la.nɛl/', 'seh-tehⁿ-vehr-SYOHⁿ | donn oh ray-SEE | uhⁿ TOHⁿ so-la-NEL', ['tache']),
  sent(1982, 'Selon moi, ce choix rapproche le texte d’un conte.', 'In my view, this choice brings the text close to a tale.',
    '/sə.lɔ̃ mwa sə ʃwa ʁa.pʁɔʃ lə tɛkst dœ̃ kɔ̃t/', 'suh-lohⁿ MWA | suh SHWA ra-PROSH | luh TEKST | duhⁿ KOHⁿT', ['tache']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act (modern rows only). */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE TEXTS
 *
 *  C1 readings, unsimplified. One verified public-domain extract
 *  (Corneille, §A.7 a); every other text is « texte original écrit pour la
 *  leçon ».
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the same page twice, a classic version and a modern one. Original. */
export const LECTURE_DEUX_PAGES =
  'Première version, écrite à la manière d’un roman de 1890. « Madame Ferrand souhaitait que son fils revînt avant l’hiver. Elle craignait qu’il ne tombât malade dans cette ville humide, et il eût fallu, pensait-elle, qu’on la prévînt plus tôt de son départ. Bien qu’il lui écrivît chaque semaine, elle relisait ses lettres comme si elles eussent caché quelque chose. » Seconde version, écrite par une romancière d’aujourd’hui. « Madame Ferrand souhaitait que son fils revienne avant l’hiver. Elle craignait qu’il tombe malade dans cette ville humide, et il aurait fallu, pensait-elle, qu’on la prévienne plus tôt de son départ. Bien qu’il lui écrive chaque semaine, elle relisait ses lettres comme si elles avaient caché quelque chose. » Les deux pages racontent la même inquiétude, dans le même ordre, avec les mêmes mots. La première suit la concordance classique : chaque subjonctif reprend la note passée du verbe principal. La seconde suit l’usage d’aujourd’hui. Aucune des deux n’est fautive ; elles ne sonnent simplement pas dans le même siècle.';

/** Act 2: Corneille, « Horace », III, 6, vv. 1021-1026 (Marty-Laveaux 1862,
 *  Wikisource), word for word. Verse kept on separate lines. */
export const LECTURE_HORACE =
  'Pierre Corneille, « Horace » (créée en 1640, imprimée en 1641), acte III, scène 6, vers 1021 à 1026. Le vieil Horace croit que son fils a fui le combat contre les trois Curiaces.\n\nJULIE : Que vouliez-vous qu’il fît contre trois ?\nLE VIEIL HORACE : Qu’il mourût,\nOu qu’un beau désespoir alors le secourût.\nN’eût-il que d’un moment reculé sa défaite,\nRome eût été du moins un peu plus tard sujette ;\nIl eût avec honneur laissé mes cheveux gris,\nEt c’étoit de sa vie un assez digne prix.\n\nTexte établi par Ch. Marty-Laveaux, Œuvres de Corneille, Hachette, 1862, tome 3 (Wikisource). Orthographe d’origine : « c’étoit ».';

/** Act 5: the ferryman (original). */
export const LECTURE_PASSEUR =
  'Mon grand-oncle était passeur sur la rivière, avant le pont. Eût-il su ce que le pont allait faire à son métier, disait ma mère, il fût parti vingt ans plus tôt. Il ne partit pas. Il vit les premières piles sortir de l’eau, puis les voitures passer au-dessus de sa barque. N’eût été son entêtement, il aurait accepté le poste qu’on lui offrait au péage ; il refusa par fierté. Fût-il arrivé une heure plus tôt le jour de l’inauguration, il eût serré la main du préfet ; il arriva trop tard, exprès, je crois. Ma mère racontait tout cela sans amertume. Eût-on écouté les anciens, ajoutait-elle en souriant, on eût gardé la barque pour les dimanches. On ne les écouta pas, et la barque pourrit sous le pont, à l’endroit même où il l’avait amarrée le dernier soir.';

/** Act 7: tante Hortense's letters (original). */
export const LECTURE_HORTENSE =
  'Ma tante Hortense écrivait comme on écrivait dans sa jeunesse, avec un imparfait du subjonctif à chaque détour de phrase. Pourtant, elle ne l’employait pas au hasard. « Je ne crois pas que ton frère le fît sans y être forcé », m’écrivit-elle un jour : le verbe ne regardait ni le passé ni le présent ; il voulait dire que mon frère ne le ferait pas. Dans la même lettre, elle ajoutait : « Ton père voulut toujours que vous soyez libres, et vous l’êtes. » Là, au contraire, elle quittait la concordance : la liberté dont elle parlait durait encore au moment où elle écrivait. J’ai mis des années à comprendre que ces écarts n’étaient pas des distractions. Elle savait la règle ; elle la pliait quand le sens le demandait. Il n’est pas sûr que je l’eusse compris sans ses lettres.';

/** Act 9: the « nuit des Tilleuls », a pastiche (original). */
export const LECTURE_TILLEULS =
  'Chronique de la copropriété des Tilleuls, écrite à la manière d’un roman de 1880. Il convenait, aux yeux de Madame Royer, que les poubelles fussent sorties le mardi soir, et non le mercredi matin comme le voulait l’usage barbare des locataires du troisième. Elle exigea donc que l’on réunît l’assemblée. Il fallut que chacun descendît, en pantoufles, dans le hall glacé. Fût-il deux heures du matin, Madame Royer eût tenu séance. On vota. Le syndic, qui eût préféré que l’affaire se réglât par courriel, prit des notes avec une gravité de notaire. Personne n’osa rire avant que la porte de l’ascenseur se fût refermée sur elle. Depuis, les poubelles sortent le mardi, et l’immeuble parle de « la nuit des Tilleuls » comme d’une bataille.';

/** Act 10: Lisette's summer, the whole-page reading (original). */
export const LECTURE_LISETTE =
  'Cet été-là, Lisette eût voulu que l’été ne finît jamais. Sa tante, qui tenait l’auberge du col, exigeait qu’elle fût levée à six heures et que les tables fussent dressées avant l’arrivée des marcheurs ; Lisette obéissait sans se plaindre, bien qu’elle détestât le froid du matin. Le soir, il fallait qu’on lui racontât les nouvelles de la vallée, qu’elle écoutait comme si elles fussent venues d’un autre monde. Un jour d’août, un garçon de son âge s’arrêta à l’auberge. Fût-il resté une heure de plus, elle lui eût parlé ; il repartit avant qu’elle eût trouvé le courage de lui dire bonjour. Elle attendit qu’il revînt. Il ne revint pas. Le dernier soir, sa tante lui dit simplement : « Je voudrais que tu reviennes l’an prochain. » Lisette promit. Eût-elle su que l’auberge serait vendue l’hiver suivant, elle eût regardé plus longtemps le col dans la lumière du soir. Elle ne l’apprit que bien plus tard, par une lettre. Quand elle raconte cet été aujourd’hui, elle dit seulement qu’il aurait fallu qu’elle parle à ce garçon, et elle rit.';

/** Act 11: the model presentation of Lisette's page to a reading club, in
 *  today's French. */
export const LECTURE_MODELE =
  'Bonsoir à tous. Je vous présente une page qui m’a frappée : l’été de Lisette, dans une auberge de montagne. L’autrice garde la concordance classique dans tout le récit. Quand la tante exige que les tables soient dressées avant l’arrivée des marcheurs, le texte écrit « fussent dressées » ; quand Lisette attend que le garçon revienne, il écrit « revînt ». Deux inversions portent l’émotion : « Fût-il resté une heure de plus, elle lui eût parlé », c’est-à-dire : s’il était resté, elle lui aurait parlé. Il n’est pas resté. « Eût-elle su que l’auberge serait vendue », c’est-à-dire : si elle avait su. Elle ne savait pas. Une seule réplique s’en écarte, et ce n’est pas un hasard : la tante dit « Je voudrais que tu reviennes ». C’est une parole, au présent de celle qui parle, et elle sonne plus proche que tout le reste. À la fin, Lisette adulte dit « il aurait fallu qu’elle parle » : le français d’aujourd’hui revient avec elle. Selon moi, ce choix rapproche le texte d’un conte : le passé est loin, solennel, et seule la voix de la tante traverse le temps. Qu’en pensez-vous ?';

/** The task extract (printed in the brief, since `task` has no source field).
 *  Original. */
export const EXTRAIT_TACHE =
  'Le jour où l’on ferma la gare de Montclaret, il eût fallu que quelqu’un prît la parole. Le chef de gare, qui craignait qu’on ne l’accusât d’avoir laissé faire, se tut. Bien que la salle fût pleine, personne ne voulut que son nom figurât au procès-verbal. Eût-on écouté les cheminots, la ligne eût été sauvée ; on ne les écouta pas. Fût-elle la dernière voix du village, la vieille Madame Lenoir parla pourtant. Elle exigea que l’on notât une phrase, une seule : « Je voudrais que mes petits-enfants puissent encore prendre le train. » On la nota. La gare ferma au printemps, et la phrase est restée, encadrée, dans la salle d’attente devenue bibliothèque.';

/** The « dans un texte » paragraphs (acts 3 to 10), all original. */
export const TEXTE_A3 =
  'Quand Léon revint au domaine, il s’étonna que la grille fût ouverte et que personne ne vînt à sa rencontre. Il attendit qu’on l’eût reconnu pour parler. Le vieux jardinier doutait que ce fût vraiment le fils du maître : il fallait, disait-il, que l’on vérifiât. On attendit que la pluie eût cessé pour descendre au village, où le notaire voulait que tout fût signé avant la nuit.';

export const TEXTE_A4 =
  'Le maire écrivit au préfet qu’il serait bon que l’on consultât les habitants avant de fermer l’école. Il eût été juste, ajoutait-il, qu’on les prévînt plus tôt. Il aurait voulu que la décision fût prise au printemps, et non en plein mois de juillet. Le préfet répondit qu’il souhaiterait que le maire vînt le voir. Le maire y alla, et l’école resta ouverte un an de plus.';

export const TEXTE_A5 =
  'Eût-elle répondu à la lettre, tout eût été différent. Mais Claire ne répondit pas. N’eût été la fierté de son père, elle serait sans doute revenue au village. Eût-on su, à l’époque, combien elle regretterait ce silence, on l’eût poussée à écrire. Personne ne la poussa, et la lettre resta dans un tiroir.';

export const TEXTE_A6 =
  'Le vieux Bastien ne cédait jamais. Fût-il fatigué, il finissait sa journée. Le médecin lui ordonna du repos ; il répondit qu’il continuerait, dût-il en mourir. Si riche fût-il devenu, il portait toujours la même veste. L’eût-on supplié à genoux, il n’eût pas vendu son champ. Il le légua à l’école, qui en fit un jardin.';

export const TEXTE_A7 =
  'Sur la plaque de l’école, on lit encore : « Le fondateur voulut que ses élèves fussent instruits, et il exigea que l’entrée soit gratuite. » Le rédacteur de la plaque, en 1902, ne s’est pas trompé : l’entrée l’est toujours. Quant au professeur qui commente la plaque aujourd’hui, il ne croit pas que le fondateur acceptât les écrans en classe, s’il revenait.';

export const TEXTE_A8 =
  'La présidente de l’association a regretté que le projet ne soit pas retenu. « Il eût fallu qu’on nous écoutât », a-t-elle lancé, non sans solennité. Le maire, lui, souhaite que le dossier revienne au conseil avant l’été. Bien que la décision fût attendue, la salle a accueilli l’annonce en silence.';

export const TEXTE_A9 =
  'Que la paix fût rendue à la vallée, voilà ce que tous espéraient. Il fallait que les deux villages se parlassent de nouveau, et que le pont, détruit par la crue, fût reconstruit avant l’hiver. Le jour où la première charrette le traversa, le vieux maire voulut qu’on sonnât les cloches.';

export const TEXTE_A10 =
  'Le peintre exigeait que l’atelier fût silencieux. Eût-on fait tomber un pinceau, il eût posé sa palette pour la journée. Ses élèves l’adoraient pourtant, bien qu’il ne les complimentât jamais. Le dernier jour, il demanda qu’on ouvrît les volets, et dit à voix basse : « Je voudrais que vous gardiez cette lumière. »';
