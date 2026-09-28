// b2.08.l1 « Reconnaître le passé simple »: the authored corpus, the imports,
// the texts and the citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md
// (grammar shape) under the B2 rules of B2-BUILD-LOG.md, RECOGNITION variant
// (spot → map → understand).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (b2.09, literary subjunctive recognition, may import REFRAME
// from this file; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME,
// LEVEL, E, ALL_ROWS, ROWS_BY_ACT.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: the last lesson of Unit 1 in B2
// ══════════════════════════════════════════════════════════════════════════
//
//   THE PASSÉ SIMPLE, FOR RECOGNITION ONLY (Paul, 2026-09-27). The learner
//   finds the form, maps it to its infinitive and to the passé composé a
//   speaker would use today, and understands the text. NOTHING in this lesson
//   asks for a passé simple form: no conjugation card, no gap to fill with
//   one, no error-spot whose answer is one, no production drill on a row
//   that contains one (see §A.3).
//
//     où il vit          tales, novels, history textbooks, formal press
//                        retrospectives, biographies; NEVER in conversation
//     les finales        -a / -èrent (all -er verbs), -it / -irent (finir,
//                        partir, répondre…), -ut / -urent (pouvoir, lire,
//                        recevoir…), -int / -inrent (venir, tenir)
//     la clé             the passé simple usually sounds like the participle
//                        (pris / prit, lu / lut, fini / finit)
//     les irréguliers    fut, eut, fit, vint, prit, dit, vit, put, dut, mit,
//                        naquit, mourut; the look-alikes (fut / fit, il vit,
//                        vint / vingt, il finit present or past)
//     la personne        3rd person dominant; -rent is ils / elles; je and
//                        nous in memoirs; tu and vous almost never
//     les plans          passé simple = foreground, imparfait = background
//                        (lessons 3 and 4 in B1), plus-que-parfait unchanged
//                        (lesson 1 in B2)
//     aujourd'hui        passé simple → passé composé, imparfait and
//                        plus-que-parfait stay, être verbs, word order
//                        (il ne dit rien → il n'a rien dit), the incise
//                        (répondit-il → a-t-il répondu, lesson 21 in B1)
//     comprendre         a literary page read for global meaning, detail,
//                        inference and point of view (lessons 37 in B1 and
//                        24 in B2)
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `litterature` (« La littérature », culture, b1-b2). Sub-themes to
//     set in Postgres at import: « lire un récit », « le passé simple », « le
//     narrateur et le point de vue ». The seed (read 2026-09-27, 19,308 items)
//     holds 12 rows in the theme: fr.b1.litterature.001-006 and
//     fr.b2.litterature.001-006. Postgres was NOT probed by this author; the
//     block was assigned by the brief.
//
//  2. ID BLOCK: `.1000`-`.1199`, assigned by the brief. Authored rows sit in
//     one sub-block per act (see the act banners and ID_RANGES). Nothing
//     outside the block.
//
//  3. RECOGNITION ONLY, ENFORCED BY THE DRILLS. The app's voiceflash and
//     review screens show the ENGLISH and ask for the French, and a vocab
//     flashcard deck can run EN → FR, so any row whose `fr` holds a passé
//     simple form would make the learner produce it. Therefore:
//       · `ps()` rows (the literary lines) carry ONLY the `sentence` drill
//         (word tiles, every form given, order only). No flashcard, so they
//         are never in a deck tranche; no voiceflash, so never in `practice`.
//       · `map()` rows are the SRS cards: `cardType: 'grammar'`, which the
//         flashcard screen logs as « recognise ». The FRONT (`prompt`) shows
//         the passé simple line; the ANSWER (`fr`) is the passé composé
//         sentence a speaker would say today. Producing the passé composé is
//         the lesson's goal, so voiceflash and review on it are wanted.
//       · No `conjugation` card anywhere (its front asks for the form).
//
//  4. NO VOCAB-TYPE NON-SENTENCE ROW is authored, so the flashcard hub's
//     headword rule (theme + headword) cannot clash with any published row or
//     with b2.05 to b2.07. Every `fr` was checked against the seed for an
//     exact twin: none. The seed holds NO passé simple anywhere (probed
//     2026-09-27 for fut, eut, fit, naquit, mourut, vint, prit, parla, entra,
//     arriva, dirent, répondit…: zero hits).
//
//  5. REUSED ROWS. B1 is live (v76) and b2.22-b2.26 are live (v77), so
//     `src()` resolves them. They are reused BY ID (§F). b2.01 to b2.07 are
//     in the same publish and NOT in the seed, so they are cited in words
//     (« la leçon 1 du B2 ») and never named by id.
//
//  6. TEXTS AND FACTS. Every extract is an invented pastiche (tale, novel
//     page, memoir, biography of an invented painter, Hortense Vallier) EXCEPT
//     three historical passages written by this author about real events,
//     with facts to check before publish: Champlain and Québec (1608, the
//     first winter, 1663 royal province), the fall of the Berlin Wall (9
//     November 1989, the press conference, the crossings opened near
//     midnight, demolition over months), the Tennis Court Oath (20 June 1789,
//     the closed hall, the jeu de paume room), and the Moon landing (July
//     1969). NO real literary quotation is used anywhere.
//     FACT-CHECKED 2026-09-28, all hold: Québec founded 1608 on the cape
//     above the St Lawrence, the Abitation's wooden buildings and palisade,
//     20 of 28 men dead in the first winter mostly of scurvy, alliances with
//     Indigenous nations, royal province 1663 under Louis XIV; the Wall
//     opened 9 Nov 1989 with thousands crossing that night; 20 June 1789 the
//     deputies found their hall shut and met in the jeu de paume; Moon walk
//     July 1969. No text changed.
//
//  7. APOSTROPHES. Corpus rows and texts use the straight ' as the seed does.
//     The one `scenario` uses ’ only and embeds no corpus row.
//
//  8. RESPELLINGS. House style (hyphens, CAPS on the stressed final syllable,
//     ü, nasal ⁿ). « personne » pehr-SONN and « semaine » suh-MENN are doubled
//     for the nasal checker, as b2.01 does. No U+203F anywhere.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item, Register } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b2.08',
  seq: 8,
  title: 'Recognising the Passé Simple',
  sub: 'Reconnaître le passé simple',
  canDo: 'Can recognise the passé simple in tales, novels, history books and formal press retrospectives, map each form to its infinitive, its person and the passé composé a speaker would use today, tell the narrative foreground from the imparfait background, and understand a literary extract for its meaning, its implications and its point of view, without ever needing to produce the form',
  prereqUnitIds: ['b1.03', 'b1.04', 'b1.21', 'b1.37', 'b2.01'],
} as const;

export const LESSON_ID = 'b2.08.l1';
export const THEME = 'litterature';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French, from the plan: a
 *  B1 unit id's number IS its trail position, and the B2 plan in
 *  B2-BUILD-LOG.md numbers b2.01 to b2.34 in trail order. Only occupied
 *  positions are cited (B1 1-39, B2 1-8 and 22-26).
 * ══════════════════════════════════════════════════════════════════════════ */

export const PC_IMP_UNIT = 'b1.03';
export const PAIRES_UNIT = 'b1.04';
export const DISCOURS_UNIT = 'b1.19';
export const INVERSION_UNIT = 'b1.21';
export const LECTURE_B1_UNIT = 'b1.37';
export const PQP_UNIT = 'b2.01';
export const CRITIQUE_UNIT = 'b2.24';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const PC_IMP_REF = refFr(PC_IMP_UNIT);
export const PAIRES_REF = refFr(PAIRES_UNIT);
export const DISCOURS_REF = refFr(DISCOURS_UNIT);
export const INVERSION_REF = refFr(INVERSION_UNIT);
export const LECTURE_B1_REF = refFr(LECTURE_B1_UNIT);
export const PQP_REF = refFr(PQP_UNIT);
export const CRITIQUE_REF = refFr(CRITIQUE_UNIT);
export const PASSE_B1_RANGE_REF = 'les leçons 3 et 4 du B1';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B103_REFRAME, REFRAME_EN as B103_REFRAME_EN } from '../b1/pc-imparfait-corpus.ts';
export { REFRAME as B104_REFRAME, REFRAME_EN as B104_REFRAME_EN } from '../b1/pc-imparfait-paires-corpus.ts';
export { REFRAME as B121_REFRAME, REFRAME_EN as B121_REFRAME_EN } from '../b1/inversion-corpus.ts';
export { REFRAME as B137_REFRAME, REFRAME_EN as B137_REFRAME_EN } from '../b1/strategies-lecture-corpus.ts';
export { REFRAME as B201_REFRAME, REFRAME_EN as B201_REFRAME_EN } from './plus-que-parfait-corpus.ts';
export { REFRAME as B224_REFRAME, REFRAME_EN as B224_REFRAME_EN } from './lecture-critique-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE LIVRE ET LA BOUCHE. The passé simple does, on the page, the job the
 *  passé composé does in your mouth: it moves the story forward. So the
 *  learner never learns to SAY it; they learn to hear, in their head, the
 *  passé composé it stands for. Every map card, every rewrite, every quiz
 *  round is that translation.
 *
 *  It is NOT « an old tense » (every contemporary novel and every press
 *  retrospective uses it), NOT « the imparfait of books » (it is the
 *  foreground, the imparfait keeps its own job beside it), and NOT a tense
 *  the learner has to produce.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Le passé simple, c’est le passé composé des livres : tu le lis, tu ne le dis pas.';
export const REFRAME_EN = 'The passé simple is the passé composé of books: you read it, you do not say it.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Le passé simple, c’est le temps du passé lointain.',
    why: 'False where act 2 has to hold: a novel published this year and a press retrospective of last week use it, and a grandmother telling her own 1950s childhood at the table never does. Distance does not decide; the page does.',
  },
  {
    text: 'Le passé simple, c’est le français d’autrefois.',
    why: 'Makes the learner skip it as archaic, when it is the ordinary narrative tense of written French today. It also suggests French speakers once talked in it, which act 2 shows is not what the learner needs.',
  },
  {
    text: 'Le passé simple, c’est l’imparfait des livres.',
    why: 'Wrong job. Act 9 is built on the opposite: the passé simple is the foreground and the imparfait keeps the background beside it. Mapping it to the imparfait makes every event a setting.',
  },
  {
    text: 'Apprends les terminaisons, et tu sauras le passé simple.',
    why: 'Turns a recognition lesson into a conjugation lesson (Paul, 2026-09-27: recognition only), and the endings alone miss the irregulars that carry most literary text (fut, eut, fit, vint).',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-27, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const RP = (n: number) => `fr.b1.recits-au-passe.${n}`;
const LS = (n: number) => `fr.b1.langue-soignee.${n}`;

export const IMPORTED = {
  act1: [
    RP(233),                                       // Il est entré, il a regardé autour de lui et il s'est assis.  (lesson 3 in B1)
  ],
  act2: [
    RP(1095),                                      // Elle a lu tout le roman en une nuit.  (lesson 3 in B1)
    'fr.b1.litterature.003',                       // C'est le roman dont je t'ai parlé.  (gapfill, flashcard only)
  ],
  act3: [] as string[],
  act4: [] as string[],
  act5: [] as string[],
  act6: [] as string[],
  act7: [] as string[],
  act8: [] as string[],
  act9: [
    RP(203),                                       // Il pleuvait et la terrasse était vide.  (lesson 3 in B1)
    RP(1011),                                      // Il faisait chaud et les fenêtres étaient ouvertes.  (lesson 3 in B1)
    RP(1037),                                      // Quand le professeur est entré, les élèves parlaient encore.  (lesson 3 in B1)
  ],
  act10: [
    LS(1155),                                      // « Nous arrivons », dit-elle.  (lesson 21 in B1, gapfill)
    LS(1152),                                      // « Je ne sais pas », avoue-t-elle.  (lesson 21 in B1)
  ],
  act11: [
    'fr.b2.strategies-de-comprehension.1507',      // Le ton est sérieux : l’auteur ne plaisante pas.  (lesson 24 in B2)
    'fr.b2.litterature.003',                       // L'auteure aborde des thèmes universels à travers une intrigue très personnelle.  (flashcard + review)
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: readonly string[] = [];

/** No `voiceflash` in the seed: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE,
  'fr.b1.litterature.003',                         // flashcard only
  'fr.b2.litterature.003',                         // sentence + flashcard + review
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `ps`   a passé simple line from an extract: drill `sentence` ONLY (§A.3).
 *  `map`  the SRS card: front = the passé simple line, answer = the passé
 *         composé sentence (cardType 'grammar', « recognise »).
 *  `rule` a grammar card whose answer is a rule (flashcard + review).
 *  `sent` a plain sentence with no passé simple (imparfait, passé composé,
 *         a line about the text).
 *  Every row carries fr, en, ipa and respell. Corpus respellings carry no
 *  brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];
/** The ONLY drill a passé simple line carries: every word is given as a tile. */
const PS_DRILLS = ['sentence'] as Item['drills'];

const C: Register = 'courant';
const S: Register = 'soutenu';
const GP = ['passe-simple'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

const ps = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[]): Row =>
  sent(n, fr, en, ipa, respell, ['passe-simple', ...tags], PS_DRILLS, { register: S });

/** The map card: `psFr` is printed on the front, `fr` is the answer. */
const map = (
  n: number, psFr: string, fr: string, en: string, ipa: string, respell: string, notes: string, tags: string[],
  drills: Item['drills'] = FCVR,
): Row => sent(n, fr, en, ipa, respell, ['aujourdhui', ...tags], drills, {
  cardType: 'grammar', prompt: `« ${psFr} » Aujourd'hui, tu dirais…`, notes,
});

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LA PAGE DU CONTE (.1000-.1013) ───────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  ps(1000, "Un soir d'hiver, un voyageur frappa à la porte.", 'One winter evening, a traveller knocked at the door.',
    '/œ̃ swaʁ di.vɛʁ œ̃ vwa.ja.ʒœʁ fʁa.pa a la pɔʁt/', 'uhⁿ swar dee-VEHR | uhⁿ vwa-ya-ZHUHR fra-PA | a la PORT', ['conte', 'er']),
  ps(1001, 'Rose ouvrit la porte et lui offrit une soupe.', 'Rose opened the door and offered him some soup.',
    '/ʁoz u.vʁi la pɔʁt e lɥi ɔ.fʁi yn sup/', 'ROHZ oo-VREE la PORT | ay lwee o-FREE ün SOOP', ['conte', 'ir']),
  ps(1002, "Il entra, regarda autour de lui et s'assit.", 'He came in, looked around and sat down.',
    '/il ɑ̃.tʁa ʁə.ɡaʁ.da o.tuʁ də lɥi e sa.si/', 'eel ahⁿ-TRA | ruh-gar-DA oh-toor duh LWEE | ay sa-SEE', ['conte', 'er']),
  sent(1003, "Il entrait, il regardait autour de lui et il s'asseyait.", 'He would come in, look around and sit down.',
    '/il ɑ̃.tʁɛ il ʁə.ɡaʁ.dɛ o.tuʁ də lɥi e il sa.sɛ.jɛ/', 'eel ahⁿ-TREH | eel ruh-gar-deh oh-toor duh LWEE | ay eel sa-seh-YEH', ['fausse-lecture', 'imparfait'], FC),
  map(1004, "Un soir d'hiver, un voyageur frappa à la porte.", "Un soir d'hiver, un voyageur a frappé à la porte.", 'One winter evening, a traveller knocked at the door.',
    '/œ̃ swaʁ di.vɛʁ œ̃ vwa.ja.ʒœʁ a fʁa.pe a la pɔʁt/', 'uhⁿ swar dee-VEHR | uhⁿ vwa-ya-ZHUHR a fra-PAY | a la PORT',
    'Frappa : frapper, il. Un verbe en -er, finale -a.', ['conte', 'er'], FCVDR),
  map(1005, 'Rose ouvrit la porte et lui offrit une soupe.', 'Rose a ouvert la porte et lui a offert une soupe.', 'Rose opened the door and offered him some soup.',
    '/ʁoz a u.vɛʁ la pɔʁt e lɥi a ɔ.fɛʁ yn sup/', 'ROHZ a oo-VEHR la PORT | ay lwee a o-FEHR ün SOOP',
    'Ouvrit : ouvrir. Offrit : offrir. Deux verbes, la même personne : elle.', ['conte', 'ir']),
  ps(1006, 'Le fleuve déborda et emporta la roue du moulin.', 'The river burst its banks and carried away the mill wheel.',
    '/lə flœv de.bɔʁ.da e ɑ̃.pɔʁ.ta la ʁu dy mu.lɛ̃/', 'luh FLUHV day-bor-DA | ay ahⁿ-por-TA la ROO dü moo-LEHⁿ', ['conte', 'er']),
  map(1007, 'Le fleuve déborda et emporta la roue du moulin.', 'Le fleuve a débordé et il a emporté la roue du moulin.', 'The river burst its banks and carried away the mill wheel.',
    '/lə flœv a de.bɔʁ.de e i.la ɑ̃.pɔʁ.te la ʁu dy mu.lɛ̃/', 'luh FLUHV a day-bor-DAY | ay ee-la ahⁿ-por-TAY la ROO dü moo-LEHⁿ',
    'Déborda : déborder. Emporta : emporter. Deux événements, l’un après l’autre.', ['conte', 'er']),
  ps(1008, "L'année suivante, un arbre immense poussa au bord de l'eau.", 'The following year, a huge tree grew at the water’s edge.',
    '/la.ne sɥi.vɑ̃t œ̃.naʁ.bʁi.mɑ̃s pu.sa o bɔʁ də lo/', 'la-nay swee-VAHⁿT | uhⁿ-nar-bree-MAHⁿS poo-SA | oh bor duh LOH', ['conte', 'er']),
  rule(1009, REFRAME, REFRAME_EN,
    '/lə pa.se sɛ̃pl sɛ lə pa.se kɔ̃.po.ze de livʁ ty lə li ty nə lə di pa/',
    'luh pa-say SEHⁿPL | seh luh pa-say kohⁿ-poh-ZAY day LEEVR | tü luh LEE | tü nuh luh dee PA',
    'À quoi sert le passé simple ?',
    'Il fait avancer un récit écrit, comme le passé composé à l’oral. Tu le reconnais et tu le traduis dans ta tête ; tu ne le dis jamais.',
    ['reframe']),
  ps(1010, 'Le meunier voulut jeter la boîte dans le fleuve.', 'The miller wanted to throw the box into the river.',
    '/lə mø.nje vu.ly ʒə.te la bwat dɑ̃ lə flœv/', 'luh meu-NYAY voo-LÜ | zhuh-TAY la BWAT | dahⁿ luh FLUHV', ['conte', 'u']),
  map(1011, 'Le meunier voulut jeter la boîte dans le fleuve.', 'Le meunier a voulu jeter la boîte dans le fleuve.', 'The miller wanted to throw the box into the river.',
    '/lə mø.nje a vu.ly ʒə.te la bwat dɑ̃ lə flœv/', 'luh meu-NYAY a voo-LÜ | zhuh-TAY la BWAT | dahⁿ luh FLUHV',
    'Voulut : vouloir. Le participe est voulu : le passé simple lui ressemble.', ['conte', 'u']),
  ps(1012, 'Rose cacha la boîte sous son lit.', 'Rose hid the box under her bed.',
    '/ʁoz ka.ʃa la bwat su sɔ̃ li/', 'ROHZ ka-SHA la BWAT | soo sohⁿ LEE', ['conte', 'er']),
  sent(1013, 'Le moulin tournait nuit et jour.', 'The mill turned night and day.',
    '/lə mu.lɛ̃ tuʁ.nɛ nɥi e ʒuʁ/', 'luh moo-LEHⁿ toor-NEH | nwee ay ZHOOR', ['conte', 'imparfait', 'decor']),
];

/* ── ACT 2 · OÙ VIT LE PASSÉ SIMPLE (.1015-.1029) ─────────────────────────── */

export const ACT2_ROWS: Row[] = [
  ps(1015, 'En 1608, Champlain fonda Québec.', 'In 1608, Champlain founded Quebec City.',
    '/ɑ̃ sɛz.sɑ̃.ɥit ʃɑ̃.plɛ̃ fɔ̃.da ke.bɛk/', 'ahⁿ sez-sahⁿ-WEET | shahⁿ-PLEHⁿ fohⁿ-DA kay-BEK', ['histoire', 'er']),
  map(1016, 'En 1608, Champlain fonda Québec.', 'En 1608, Champlain a fondé Québec.', 'In 1608, Champlain founded Quebec City.',
    '/ɑ̃ sɛz.sɑ̃.ɥit ʃɑ̃.plɛ̃ a fɔ̃.de ke.bɛk/', 'ahⁿ sez-sahⁿ-WEET | shahⁿ-PLEHⁿ a fohⁿ-DAY kay-BEK',
    'Fonda : fonder. Le manuel d’histoire raconte au passé simple ; ton professeur, à voix haute, dit a fondé.', ['histoire', 'er'], FCVDR),
  ps(1017, 'Ce soir-là, la foule envahit la place et chanta jusqu’à l’aube.', 'That evening, the crowd filled the square and sang until dawn.',
    '/sə swaʁ.la la ful ɑ̃.va.i la plas e ʃɑ̃.ta ʒys.ka lob/', 'suh swar-LA | la FOOL ahⁿ-va-EE la PLASS | ay shahⁿ-TA zhüs-ka LOHB', ['presse', 'ir']),
  ps(1018, 'La romancière naquit à Liège en 1921 et mourut à Paris en 2004.', 'The novelist was born in Liège in 1921 and died in Paris in 2004.',
    '/la ʁɔ.mɑ̃.sjɛʁ na.ki a ljɛʒ ɑ̃ mil nœf sɑ̃ vɛ̃.te.œ̃ e mu.ʁy a pa.ʁi ɑ̃ dø mil kat/', 'la ro-mahⁿ-SYEHR na-KEE a LYEHZH | ahⁿ meel nuhf sahⁿ vehⁿ-tay-UHⁿ | ay moo-RÜ a pa-REE | ahⁿ deu meel KAT', ['biographie', 'irregulier']),
  map(1019, 'La romancière naquit à Liège en 1921 et mourut à Paris en 2004.', 'La romancière est née à Liège en 1921 et elle est morte à Paris en 2004.', 'The novelist was born in Liège in 1921 and died in Paris in 2004.',
    '/la ʁɔ.mɑ̃.sjɛʁ ɛ ne a ljɛʒ ɑ̃ mil nœf sɑ̃ vɛ̃.te.œ̃ e ɛ.lɛ mɔʁt a pa.ʁi ɑ̃ dø mil kat/', 'la ro-mahⁿ-SYEHR eh NAY a LYEHZH | ahⁿ meel nuhf sahⁿ vehⁿ-tay-UHⁿ | ay eh-leh MORT a pa-REE | ahⁿ deu meel KAT',
    'Naquit : naître. Mourut : mourir. Les deux verbes de toute biographie, avec être aujourd’hui.', ['biographie', 'irregulier']),
  ps(1020, 'Le renard s’approcha du corbeau et lui parla doucement.', 'The fox came up to the crow and spoke to him gently.',
    '/lə ʁə.naʁ sa.pʁɔ.ʃa dy kɔʁ.bo e lɥi paʁ.la dus.mɑ̃/', 'luh ruh-NAR sa-pro-SHA dü kor-BOH | ay lwee par-LA doos-MAHⁿ', ['conte', 'er']),
  sent(1021, 'Hier soir, on a mangé chez Karim.', 'Last night we ate at Karim’s.',
    '/jɛʁ swaʁ ɔ̃.na mɑ̃.ʒe ʃe ka.ʁim/', 'yehr SWAR | ohⁿ-na mahⁿ-ZHAY | shay ka-REEM', ['oral', 'passe-compose'], FCVDR),
  rule(1022, "À l'oral, jamais de passé simple : on dit le passé composé.", 'In speech, never the passé simple: people say the passé composé.',
    '/a lɔ.ʁal ʒa.mɛ də pa.se sɛ̃pl ɔ̃ di lə pa.se kɔ̃.po.ze/', 'a lo-RAL | zha-meh duh pa-say SEHⁿPL | ohⁿ DEE luh pa-say kohⁿ-poh-ZAY',
    'Et dans une conversation ?', 'Même pour un souvenir très ancien, on raconte au passé composé. Le passé simple à l’oral sonne comme un livre qu’on lit à voix haute.', ['oral']),
  rule(1023, "Les contes, les romans, les livres d'histoire et les grands récits de presse.", 'Tales, novels, history books and long press narratives.',
    '/le kɔ̃t le ʁɔ.mɑ̃ le livʁ dis.twaʁ e le ɡʁɑ̃ ʁe.si də pʁɛs/', 'lay KOHⁿT | lay ro-MAHⁿ | lay leevr dees-TWAR | ay lay grahⁿ ray-SEE duh PRESS',
    'Où rencontres-tu le passé simple ?', 'Partout où l’on raconte par écrit, au passé, une histoire finie : le conte, le roman, la biographie, le manuel, la rétrospective.', ['usages']),
  sent(1024, "Il était une fois un roi qui n'avait pas d'enfant.", 'Once upon a time there was a king who had no children.',
    '/i.le.tɛ.ty.nə fwa œ̃ ʁwa ki na.vɛ pa dɑ̃.fɑ̃/', 'ee-lay-teh-tün FWA | uhⁿ RWA | kee na-veh pa dahⁿ-FAHⁿ', ['conte', 'imparfait', 'decor']),
  ps(1025, 'En juillet 1969, un homme marcha pour la première fois sur la Lune.', 'In July 1969, a man walked on the Moon for the first time.',
    '/ɑ̃ ʒɥi.jɛ mil nœf sɑ̃ swa.sɑ̃t.nœf œ̃.nɔm maʁ.ʃa puʁ la pʁə.mjɛʁ fwa syʁ la lyn/', 'ahⁿ zhwee-YEH meel nuhf sahⁿ swa-sahⁿt-NUHF | uhⁿ-NOM mar-SHA | poor la pruh-myehr FWA sür la LÜN', ['presse', 'er']),
  map(1026, 'En juillet 1969, un homme marcha pour la première fois sur la Lune.', 'En juillet 1969, un homme a marché pour la première fois sur la Lune.', 'In July 1969, a man walked on the Moon for the first time.',
    '/ɑ̃ ʒɥi.jɛ mil nœf sɑ̃ swa.sɑ̃t.nœf œ̃.nɔm a maʁ.ʃe puʁ la pʁə.mjɛʁ fwa syʁ la lyn/', 'ahⁿ zhwee-YEH meel nuhf sahⁿ swa-sahⁿt-NUHF | uhⁿ-NOM a mar-SHAY | poor la pruh-myehr FWA sür la LÜN',
    'Marcha : marcher. La presse le dit au passé simple dans une rétrospective ; à la radio, en direct, on dit a marché.', ['presse', 'er']),
  ps(1027, 'Le roman parut en 1950 et connut un succès immédiat.', 'The novel came out in 1950 and was an immediate success.',
    '/lə ʁɔ.mɑ̃ pa.ʁy ɑ̃ mil nœf sɑ̃ sɛ̃.kɑ̃t e kɔ.ny œ̃ syk.sɛ i.me.dja/', 'luh ro-MAHⁿ pa-RÜ | ahⁿ meel nuhf sahⁿ sehⁿ-KAHⁿT | ay ko-NÜ uhⁿ sük-SEH ee-may-DYA', ['biographie', 'u']),
  map(1028, 'Le roman parut en 1950 et connut un succès immédiat.', 'Le roman est paru en 1950 et il a connu un succès immédiat.', 'The novel came out in 1950 and was an immediate success.',
    '/lə ʁɔ.mɑ̃ ɛ pa.ʁy ɑ̃ mil nœf sɑ̃ sɛ̃.kɑ̃t e i.la kɔ.ny œ̃ syk.sɛ i.me.dja/', 'luh ro-MAHⁿ eh pa-RÜ | ahⁿ meel nuhf sahⁿ sehⁿ-KAHⁿT | ay ee-la ko-NÜ uhⁿ sük-SEH ee-may-DYA',
    'Parut : paraître, participe paru. Connut : connaître, participe connu. Pense au participe.', ['biographie', 'u']),
  sent(1029, "Mon grand-père me racontait souvent la guerre, toujours au passé composé.", 'My grandfather often told me about the war, always in the passé composé.',
    '/mɔ̃ ɡʁɑ̃.pɛʁ mə ʁa.kɔ̃.tɛ su.vɑ̃ la ɡɛʁ tu.ʒuʁ o pa.se kɔ̃.po.ze/', 'mohⁿ grahⁿ-PEHR | muh ra-kohⁿ-teh soo-vahⁿ la GEHR | too-zhoor oh pa-say kohⁿ-poh-ZAY', ['oral', 'imparfait']),
];

/* ── ACT 3 · -A, -ÈRENT : LES VERBES EN -ER (.1030-.1048) ─────────────────── */

export const ACT3_ROWS: Row[] = [
  ps(1030, 'Il parla longtemps, puis il ferma les yeux.', 'He spoke for a long time, then he closed his eyes.',
    '/il paʁ.la lɔ̃.tɑ̃ pɥi il fɛʁ.ma le.zjø/', 'eel par-LA lohⁿ-TAHⁿ | pwee eel fehr-MA lay-ZYEU', ['er']),
  map(1031, 'Il parla longtemps, puis il ferma les yeux.', 'Il a parlé longtemps, puis il a fermé les yeux.', 'He spoke for a long time, then he closed his eyes.',
    '/il a paʁ.le lɔ̃.tɑ̃ pɥi i.la fɛʁ.me le.zjø/', 'eel a par-LAY lohⁿ-TAHⁿ | pwee ee-la fehr-MAY lay-ZYEU',
    'Parla : parler. Ferma : fermer. La finale -a, c’est il ou elle, pour tous les verbes en -er.', ['er'], FCVDR),
  ps(1032, 'Les enfants rentrèrent avant la nuit.', 'The children came home before nightfall.',
    '/le.zɑ̃.fɑ̃ ʁɑ̃.tʁɛʁ a.vɑ̃ la nɥi/', 'lay-zahⁿ-FAHⁿ rahⁿ-TREHR | a-vahⁿ la NWEE', ['er', 'pluriel']),
  map(1033, 'Les enfants rentrèrent avant la nuit.', 'Les enfants sont rentrés avant la nuit.', 'The children came home before nightfall.',
    '/le.zɑ̃.fɑ̃ sɔ̃ ʁɑ̃.tʁe a.vɑ̃ la nɥi/', 'lay-zahⁿ-FAHⁿ sohⁿ rahⁿ-TRAY | a-vahⁿ la NWEE',
    'Rentrèrent : rentrer, ils. La finale -èrent, c’est le pluriel. Aujourd’hui, rentrer prend être.', ['er', 'pluriel']),
  ps(1034, 'Elle regarda la mer et pensa à son frère.', 'She looked at the sea and thought of her brother.',
    '/ɛl ʁə.ɡaʁ.da la mɛʁ e pɑ̃.sa a sɔ̃ fʁɛʁ/', 'el ruh-gar-DA la MEHR | ay pahⁿ-SA a sohⁿ FREHR', ['er']),
  map(1035, 'Elle regarda la mer et pensa à son frère.', 'Elle a regardé la mer et elle a pensé à son frère.', 'She looked at the sea and thought of her brother.',
    '/ɛ.la ʁə.ɡaʁ.de la mɛʁ e ɛ.la pɑ̃.se a sɔ̃ fʁɛʁ/', 'eh-la ruh-gar-DAY la MEHR | ay eh-la pahⁿ-SAY a sohⁿ FREHR',
    'Regarda : regarder. Pensa : penser. Deux gestes, un seul sujet.', ['er']),
  ps(1036, "Ils marchèrent jusqu'au village voisin.", 'They walked as far as the next village.',
    '/il maʁ.ʃɛʁ ʒys.ko vi.laʒ vwa.zɛ̃/', 'eel mar-SHEHR | zhüs-koh vee-lazh vwa-ZEHⁿ', ['er', 'pluriel']),
  map(1037, "Ils marchèrent jusqu'au village voisin.", "Ils ont marché jusqu'au village voisin.", 'They walked as far as the next village.',
    '/il.zɔ̃ maʁ.ʃe ʒys.ko vi.laʒ vwa.zɛ̃/', 'eel-zohⁿ mar-SHAY | zhüs-koh vee-lazh vwa-ZEHⁿ',
    'Marchèrent : marcher, ils. À l’oreille, -èrent s’entend : le r final ne se tait pas.', ['er', 'pluriel']),
  ps(1038, 'Je demandai mon chemin à un berger.', 'I asked a shepherd the way.',
    '/ʒə də.mɑ̃.de mɔ̃ ʃə.mɛ̃ a œ̃ bɛʁ.ʒe/', 'zhuh duh-mahⁿ-DAY mohⁿ shuh-MEHⁿ | a uhⁿ behr-ZHAY', ['er', 'je']),
  map(1039, 'Je demandai mon chemin à un berger.', "J'ai demandé mon chemin à un berger.", 'I asked a shepherd the way.',
    '/ʒe də.mɑ̃.de mɔ̃ ʃə.mɛ̃ a œ̃ bɛʁ.ʒe/', 'zhay duh-mahⁿ-DAY mohⁿ shuh-MEHⁿ | a uhⁿ behr-ZHAY',
    'Demandai : demander, je. Avec je, -ai ; ne le confonds pas avec le futur demanderai.', ['er', 'je']),
  ps(1040, 'Nous arrivâmes à Tombouctou au lever du jour.', 'We reached Timbuktu at daybreak.',
    '/nu.za.ʁi.vam a tɔ̃.buk.tu o lə.ve dy ʒuʁ/', 'noo-za-ree-VAM a tohⁿ-book-TOO | oh luh-vay dü ZHOOR', ['er', 'nous']),
  map(1041, 'Nous arrivâmes à Tombouctou au lever du jour.', 'Nous sommes arrivés à Tombouctou au lever du jour.', 'We reached Timbuktu at daybreak.',
    '/nu sɔm.za.ʁi.ve a tɔ̃.buk.tu o lə.ve dy ʒuʁ/', 'noo som-za-ree-VAY a tohⁿ-book-TOO | oh luh-vay dü ZHOOR',
    'Arrivâmes : arriver, nous. Le -âmes n’existe qu’à l’écrit, dans les récits de voyage et les souvenirs.', ['er', 'nous']),
  rule(1042, '-a au singulier, -èrent au pluriel.', '-a in the singular, -èrent in the plural.',
    '/a o sɛ̃.ɡy.lje ɛʁ o ply.ʁjel/', 'A | oh sehⁿ-gü-LYAY | EHR | oh plü-RYEL',
    'Un verbe en -er au passé simple, avec il et avec ils ?', 'Il parla, elle chanta ; ils parlèrent, elles chantèrent. Enlève la finale, ajoute -er : tu as l’infinitif.', ['finale']),
  sent(1043, 'Il parlait souvent de son frère.', 'He often talked about his brother.',
    '/il paʁ.lɛ su.vɑ̃ də sɔ̃ fʁɛʁ/', 'eel par-LEH soo-VAHⁿ | duh sohⁿ FREHR', ['er', 'imparfait']),
  sent(1044, 'Il parlera de son frère demain.', 'He will talk about his brother tomorrow.',
    '/il paʁ.lə.ʁa də sɔ̃ fʁɛʁ də.mɛ̃/', 'eel par-luh-RA | duh sohⁿ FREHR | duh-MEHⁿ', ['er', 'futur']),
  ps(1045, "Le train s'arrêta en pleine campagne.", 'The train stopped in the middle of the countryside.',
    '/lə tʁɛ̃ sa.ʁɛ.ta ɑ̃ plɛn kɑ̃.paɲ/', 'luh TREHⁿ sa-reh-TA | ahⁿ plenn kahⁿ-PANY', ['er', 'pronominal']),
  map(1046, "Le train s'arrêta en pleine campagne.", "Le train s'est arrêté en pleine campagne.", 'The train stopped in the middle of the countryside.',
    '/lə tʁɛ̃ sɛ.ta.ʁɛ.te ɑ̃ plɛn kɑ̃.paɲ/', 'luh TREHⁿ seh-ta-reh-TAY | ahⁿ plenn kahⁿ-PANY',
    'S’arrêta : s’arrêter. Un pronominal : aujourd’hui, être.', ['er', 'pronominal']),
  rule(1047, 'Il parla, passé simple ; il parlait, imparfait ; il parlera, futur.', 'Il parla, passé simple; il parlait, imparfait; il parlera, future.',
    '/il paʁ.la pa.se sɛ̃pl il paʁ.lɛ ɛ̃.paʁ.fɛ il paʁ.lə.ʁa fy.tyʁ/', 'eel par-LA pa-say SEHⁿPL | eel par-LEH ehⁿ-par-FEH | eel par-luh-RA fü-TÜR',
    'Parla, parlait, parlera : trois temps ?', 'Oui. Le passé simple finit par -a tout court ; l’imparfait par -ait ; le futur garde le r de l’infinitif.', ['finale', 'piege']),
  sent(1048, "Il a demandé son chemin et il a continué à pied.", 'He asked the way and carried on on foot.',
    '/il a də.mɑ̃.de sɔ̃ ʃə.mɛ̃ e i.la kɔ̃.ti.nɥe a pje/', 'eel a duh-mahⁿ-DAY sohⁿ shuh-MEHⁿ | ay ee-la kohⁿ-tee-NWAY a PYAY', ['er', 'passe-compose'], FCVDR),
];

/* ── ACT 4 · -IT, -IRENT (.1050-.1066) ────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  ps(1050, "Il partit à l'aube sans dire au revoir.", 'He left at dawn without saying goodbye.',
    '/il paʁ.ti a lob sɑ̃ diʁ o ʁə.vwaʁ/', 'eel par-TEE a LOHB | sahⁿ DEER oh ruh-VWAR', ['ir']),
  map(1051, "Il partit à l'aube sans dire au revoir.", "Il est parti à l'aube sans dire au revoir.", 'He left at dawn without saying goodbye.',
    '/i.lɛ paʁ.ti a lob sɑ̃ diʁ o ʁə.vwaʁ/', 'ee-leh par-TEE a LOHB | sahⁿ DEER oh ruh-VWAR',
    'Partit : partir. Le participe est parti : le passé simple s’entend pareil.', ['ir'], FCVDR),
  ps(1052, "Elle répondit d'une voix calme.", 'She answered in a calm voice.',
    '/ɛl ʁe.pɔ̃.di dyn vwa kalm/', 'el ray-pohⁿ-DEE | dün vwa KALM', ['re']),
  map(1053, "Elle répondit d'une voix calme.", "Elle a répondu d'une voix calme.", 'She answered in a calm voice.',
    '/ɛ.la ʁe.pɔ̃.dy dyn vwa kalm/', 'eh-la ray-pohⁿ-DÜ | dün vwa KALM',
    'Répondit : répondre. Attention, le participe est répondu : ici, la clé du participe ne marche pas.', ['re'], FCVDR),
  ps(1054, 'Les soldats descendirent vers la rivière.', 'The soldiers went down towards the river.',
    '/le sɔl.da de.sɑ̃.diʁ vɛʁ la ʁi.vjɛʁ/', 'lay sol-DA day-sahⁿ-DEER | vehr la ree-VYEHR', ['re', 'pluriel']),
  map(1055, 'Les soldats descendirent vers la rivière.', 'Les soldats sont descendus vers la rivière.', 'The soldiers went down towards the river.',
    '/le sɔl.da sɔ̃ de.sɑ̃.dy vɛʁ la ʁi.vjɛʁ/', 'lay sol-DA sohⁿ day-sahⁿ-DÜ | vehr la ree-VYEHR',
    'Descendirent : descendre, ils. -irent, c’est le pluriel de -it.', ['re', 'pluriel']),
  ps(1056, 'Il attendit la nuit pour sortir.', 'He waited for nightfall to go out.',
    '/il a.tɑ̃.di la nɥi puʁ sɔʁ.tiʁ/', 'eel a-tahⁿ-DEE la NWEE | poor sor-TEER', ['re']),
  map(1057, 'Il attendit la nuit pour sortir.', 'Il a attendu la nuit pour sortir.', 'He waited for nightfall to go out.',
    '/il a.a.tɑ̃.dy la nɥi puʁ sɔʁ.tiʁ/', 'eel a a-tahⁿ-DÜ la NWEE | poor sor-TEER',
    'Attendit : attendre. Les verbes en -re font -it, et leur participe finit en -u.', ['re']),
  ps(1058, 'Elles choisirent la route du nord.', 'They chose the northern road.',
    '/ɛl ʃwa.ziʁ la ʁut dy nɔʁ/', 'el shwa-ZEER | la ROOT dü NOR', ['ir', 'pluriel']),
  map(1059, 'Elles choisirent la route du nord.', 'Elles ont choisi la route du nord.', 'They chose the northern road.',
    '/ɛl.zɔ̃ ʃwa.zi la ʁut dy nɔʁ/', 'el-zohⁿ shwa-ZEE | la ROOT dü NOR',
    'Choisirent : choisir, elles. Participe choisi : même son que choisit.', ['ir', 'pluriel'], FCVDR),
  ps(1060, 'Le vieil homme finit sa lettre et la plia en quatre.', 'The old man finished his letter and folded it in four.',
    '/lə vjɛ.jɔm fi.ni sa lɛtʁ e la pli.ja ɑ̃ katʁ/', 'luh vyeh-YOM fee-NEE sa LETR | ay la plee-YA ahⁿ KATR', ['ir', 'sosie']),
  map(1061, 'Le vieil homme finit sa lettre et la plia en quatre.', "Le vieil homme a fini sa lettre et il l'a pliée en quatre.", 'The old man finished his letter and folded it in four.',
    '/lə vjɛ.jɔm a fi.ni sa lɛtʁ e il la pli.je ɑ̃ katʁ/', 'luh vyeh-YOM a fee-NEE sa LETR | ay eel la plee-YAY ahⁿ KATR',
    'Finit : finir. Plia : plier. Aujourd’hui, la lettre placée avant fait l’accord : pliée.', ['ir', 'sosie']),
  sent(1062, 'Tous les soirs, il finit son travail à six heures.', 'Every evening he finishes work at six.',
    '/tu le swaʁ il fi.ni sɔ̃ tʁa.vaj a si.zœʁ/', 'too lay SWAR | eel fee-NEE sohⁿ tra-VAÏ | a see-ZUHR', ['ir', 'sosie', 'present'], FCVDR),
  rule(1063, 'Il finit, il dit : présent ou passé simple, le contexte décide.', 'Il finit, il dit: present or passé simple, the context decides.',
    '/il fi.ni il di pʁe.zɑ̃ u pa.se sɛ̃pl lə kɔ̃.tɛkst de.sid/', 'eel fee-NEE | eel DEE | pray-ZAHⁿ oo pa-say SEHⁿPL | luh kohⁿ-TEKST day-SEED',
    'Il finit : présent ou passé simple ?', 'La forme est la même. Regarde les autres verbes : au milieu de passés simples, c’est un passé simple ; avec tous les soirs, c’est le présent.', ['sosie']),
  rule(1064, '-it au singulier, -irent au pluriel.', '-it in the singular, -irent in the plural.',
    '/i o sɛ̃.ɡy.lje iʁ o ply.ʁjel/', 'EE | oh sehⁿ-gü-LYAY | EER | oh plü-RYEL',
    'Finir, partir, répondre, attendre : quelle finale ?', 'Il finit, il partit, il répondit, il attendit ; ils finirent, ils partirent. Les verbes en -ir et presque tous les verbes en -re.', ['finale']),
  ps(1065, "Ils perdirent tout dans l'incendie.", 'They lost everything in the fire.',
    '/il pɛʁ.diʁ tu dɑ̃ lɛ̃.sɑ̃.di/', 'eel pehr-DEER TOO | dahⁿ lehⁿ-sahⁿ-DEE', ['re', 'pluriel']),
  map(1066, "Ils perdirent tout dans l'incendie.", "Ils ont tout perdu dans l'incendie.", 'They lost everything in the fire.',
    '/il.zɔ̃ tu pɛʁ.dy dɑ̃ lɛ̃.sɑ̃.di/', 'eel-zohⁿ too pehr-DÜ | dahⁿ lehⁿ-sahⁿ-DEE',
    'Perdirent : perdre, ils. Aujourd’hui, tout se glisse entre ont et perdu.', ['re', 'pluriel'], FCVDR),
];

/* ── ACT 5 · -UT, -URENT (.1070-.1086) ────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  ps(1070, 'Il ne put rien dire.', 'He could not say anything.',
    '/il nə py ʁjɛ̃ diʁ/', 'eel nuh PÜ | ryehⁿ DEER', ['u']),
  map(1071, 'Il ne put rien dire.', "Il n'a rien pu dire.", 'He could not say anything.',
    '/il na ʁjɛ̃ py diʁ/', 'eel na ryehⁿ PÜ | DEER',
    'Put : pouvoir, participe pu. Aujourd’hui, rien se place entre a et pu.', ['u'], FCVDR),
  ps(1072, 'Elle dut quitter la ville en secret.', 'She had to leave the town in secret.',
    '/ɛl dy ki.te la vil ɑ̃ sə.kʁɛ/', 'el DÜ kee-TAY la VEEL | ahⁿ suh-KREH', ['u']),
  map(1073, 'Elle dut quitter la ville en secret.', 'Elle a dû quitter la ville en secret.', 'She had to leave the town in secret.',
    '/ɛ.la dy ki.te la vil ɑ̃ sə.kʁɛ/', 'eh-la DÜ kee-TAY la VEEL | ahⁿ suh-KREH',
    'Dut : devoir, participe dû. Une obligation qui a eu lieu, une fois.', ['u']),
  ps(1074, "Ils voulurent partir, mais la tempête les en empêcha.", 'They wanted to leave, but the storm stopped them.',
    '/il vu.lyʁ paʁ.tiʁ mɛ la tɑ̃.pɛt le.zɑ̃.nɑ̃.pɛ.ʃa/', 'eel voo-LÜR par-TEER | meh la tahⁿ-PET lay-zahⁿ-nahⁿ-peh-SHA', ['u', 'pluriel']),
  map(1075, "Ils voulurent partir, mais la tempête les en empêcha.", "Ils ont voulu partir, mais la tempête les en a empêchés.", 'They wanted to leave, but the storm stopped them.',
    '/il.zɔ̃ vu.ly paʁ.tiʁ mɛ la tɑ̃.pɛt le.zɑ̃.na.nɑ̃.pɛ.ʃe/', 'eel-zohⁿ voo-LÜ par-TEER | meh la tahⁿ-PET lay-zahⁿ-na-nahⁿ-peh-SHAY',
    'Voulurent : vouloir, ils. Empêcha : empêcher. Deux finales, deux groupes.', ['u', 'pluriel']),
  ps(1076, 'Elle lut la lettre deux fois et se tut.', 'She read the letter twice and fell silent.',
    '/ɛl ly la lɛtʁ dø fwa e sə ty/', 'el LÜ la LETR | deu FWA | ay suh TÜ', ['u']),
  map(1077, 'Elle lut la lettre deux fois et se tut.', "Elle a lu la lettre deux fois et elle s'est tue.", 'She read the letter twice and fell silent.',
    '/ɛ.la ly la lɛtʁ dø fwa e ɛl sɛ ty/', 'eh-la LÜ la LETR | deu FWA | ay el seh TÜ',
    'Lut : lire, participe lu. Se tut : se taire, participe tu. Deux verbes courts, la même clé.', ['u']),
  ps(1078, 'Personne ne crut son histoire.', 'Nobody believed his story.',
    '/pɛʁ.sɔn nə kʁy sɔ̃.nis.twaʁ/', 'pehr-SONN nuh KRÜ | sohⁿ-nees-TWAR', ['u']),
  map(1079, 'Personne ne crut son histoire.', "Personne n'a cru son histoire.", 'Nobody believed his story.',
    '/pɛʁ.sɔn na kʁy sɔ̃.nis.twaʁ/', 'pehr-SONN na KRÜ | sohⁿ-nees-TWAR',
    'Crut : croire, participe cru. Rien à voir avec croître.', ['u']),
  ps(1080, 'Il reçut une réponse trois semaines plus tard.', 'He received an answer three weeks later.',
    '/il ʁə.sy yn ʁe.pɔ̃s tʁwa sə.mɛn ply taʁ/', 'eel ruh-SÜ ün ray-POHⁿS | trwa suh-MENN plü TAR', ['u']),
  map(1081, 'Il reçut une réponse trois semaines plus tard.', 'Il a reçu une réponse trois semaines plus tard.', 'He received an answer three weeks later.',
    '/il a ʁə.sy yn ʁe.pɔ̃s tʁwa sə.mɛn ply taʁ/', 'eel a ruh-SÜ ün ray-POHⁿS | trwa suh-MENN plü TAR',
    'Reçut : recevoir, participe reçu. La cédille reste.', ['u']),
  ps(1082, "Elle vécut à Tunis jusqu'à la fin de sa vie.", 'She lived in Tunis until the end of her life.',
    '/ɛl ve.ky a ty.nis ʒys.ka la fɛ̃ də sa vi/', 'el vay-KÜ a tü-NEESS | zhüs-ka la FEHⁿ duh sa VEE', ['u']),
  map(1083, "Elle vécut à Tunis jusqu'à la fin de sa vie.", "Elle a vécu à Tunis jusqu'à la fin de sa vie.", 'She lived in Tunis until the end of her life.',
    '/ɛ.la ve.ky a ty.nis ʒys.ka la fɛ̃ də sa vi/', 'eh-la vay-KÜ a tü-NEESS | zhüs-ka la FEHⁿ duh sa VEE',
    'Vécut : vivre, participe vécu. Une vie entière, fermée : passé simple, puis passé composé.', ['u']),
  rule(1084, 'Le passé simple ressemble souvent au participe : pris, prit ; lu, lut.', 'The passé simple often looks like the participle: pris, prit; lu, lut.',
    '/lə pa.se sɛ̃pl ʁə.sɑ̃bl su.vɑ̃ o paʁ.ti.sip pʁi pʁi ly ly/', 'luh pa-say SEHⁿPL ruh-SAHⁿBL soo-VAHⁿ | oh par-tee-SEEP | PREE PREE | LÜ LÜ',
    'Il put, il lut, il reçut : où chercher le verbe ?', 'Dans le participe que tu connais déjà : pu, lu, reçu. Le passé simple ajoute souvent un t, et le verbe se retrouve.', ['participe']),
  rule(1085, '-ut au singulier, -urent au pluriel.', '-ut in the singular, -urent in the plural.',
    '/y o sɛ̃.ɡy.lje yʁ o ply.ʁjel/', 'Ü | oh sehⁿ-gü-LYAY | ÜR | oh plü-RYEL',
    'Pouvoir, devoir, vouloir, lire, recevoir : quelle finale ?', 'Il put, il dut, il voulut, il lut, il reçut ; ils purent, ils durent, ils voulurent, ils lurent, ils reçurent.', ['finale']),
  sent(1086, "Elle n'a pas pu venir, elle a dû rester au travail.", 'She could not come; she had to stay at work.',
    '/ɛl na pa py və.niʁ ɛ.la dy ʁɛs.te o tʁa.vaj/', 'el na pa PÜ vuh-NEER | eh-la DÜ res-TAY oh tra-VAÏ', ['u', 'passe-compose'], FCVDR),
];

/* ── ACT 6 · -INT, -INRENT (.1090-.1101) ──────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  ps(1090, 'Un soir, un inconnu vint frapper à notre porte.', 'One evening, a stranger came and knocked at our door.',
    '/œ̃ swaʁ œ̃.nɛ̃.kɔ.ny vɛ̃ fʁa.pe a nɔ.tʁə pɔʁt/', 'uhⁿ SWAR | uhⁿ-nehⁿ-ko-NÜ VEHⁿ | fra-PAY a no-truh PORT', ['in']),
  map(1091, 'Un soir, un inconnu vint frapper à notre porte.', 'Un soir, un inconnu est venu frapper à notre porte.', 'One evening, a stranger came and knocked at our door.',
    '/œ̃ swaʁ œ̃.nɛ̃.kɔ.ny ɛ və.ny fʁa.pe a nɔ.tʁə pɔʁt/', 'uhⁿ SWAR | uhⁿ-nehⁿ-ko-NÜ eh vuh-NÜ | fra-PAY a no-truh PORT',
    'Vint : venir. Aujourd’hui, être et le participe venu. Vint se prononce comme vingt.', ['in'], FCVDR),
  ps(1092, 'Ils revinrent au village après la guerre.', 'They came back to the village after the war.',
    '/il ʁə.vɛ̃ʁ o vi.laʒ a.pʁɛ la ɡɛʁ/', 'eel ruh-VEHⁿR | oh vee-LAZH | a-preh la GEHR', ['in', 'pluriel']),
  map(1093, 'Ils revinrent au village après la guerre.', 'Ils sont revenus au village après la guerre.', 'They came back to the village after the war.',
    '/il sɔ̃ ʁə.və.ny o vi.laʒ a.pʁɛ la ɡɛʁ/', 'eel sohⁿ ruh-vuh-NÜ | oh vee-LAZH | a-preh la GEHR',
    'Revinrent : revenir, ils. -inrent, c’est le pluriel de -int.', ['in', 'pluriel']),
  ps(1094, "Elle tint sa promesse jusqu'au bout.", 'She kept her promise to the end.',
    '/ɛl tɛ̃ sa pʁɔ.mɛs ʒys.ko bu/', 'el TEHⁿ sa pro-MESS | zhüs-koh BOO', ['in']),
  map(1095, "Elle tint sa promesse jusqu'au bout.", "Elle a tenu sa promesse jusqu'au bout.", 'She kept her promise to the end.',
    '/ɛ.la tə.ny sa pʁɔ.mɛs ʒys.ko bu/', 'eh-la tuh-NÜ sa pro-MESS | zhüs-koh BOO',
    'Tint : tenir. Tenir prend avoir ; venir prend être.', ['in']),
  ps(1096, 'Il devint le plus grand peintre de sa génération.', 'He became the greatest painter of his generation.',
    '/il də.vɛ̃ lə ply ɡʁɑ̃ pɛ̃tʁ də sa ʒe.ne.ʁa.sjɔ̃/', 'eel duh-VEHⁿ | luh plü grahⁿ PEHⁿTR | duh sa zhay-nay-ra-SYOHⁿ', ['in']),
  map(1097, 'Il devint le plus grand peintre de sa génération.', 'Il est devenu le plus grand peintre de sa génération.', 'He became the greatest painter of his generation.',
    '/i.lɛ də.və.ny lə ply ɡʁɑ̃ pɛ̃tʁ də sa ʒe.ne.ʁa.sjɔ̃/', 'ee-leh duh-vuh-NÜ | luh plü grahⁿ PEHⁿTR | duh sa zhay-nay-ra-SYOHⁿ',
    'Devint : devenir. Ne le confonds pas avec le présent devient.', ['in']),
  ps(1098, 'Je me souvins alors de la boîte.', 'Then I remembered the box.',
    '/ʒə mə su.vɛ̃ a.lɔʁ də la bwat/', 'zhuh muh soo-VEHⁿ | a-LOR duh la BWAT', ['in', 'je']),
  map(1099, 'Je me souvins alors de la boîte.', 'Je me suis alors souvenu de la boîte.', 'Then I remembered the box.',
    '/ʒə mə sɥi a.lɔʁ su.və.ny də la bwat/', 'zhuh muh swee a-LOR soo-vuh-NÜ | duh la BWAT',
    'Souvins : se souvenir, je. La famille de venir garde -in- partout.', ['in', 'je']),
  rule(1100, 'Venir, tenir et leur famille : il vint, il tint, ils vinrent.', 'Venir, tenir and their family: il vint, il tint, ils vinrent.',
    '/və.niʁ tə.niʁ e lœʁ fa.mij il vɛ̃ il tɛ̃ il vɛ̃ʁ/', 'vuh-NEER | tuh-NEER | ay luhr fa-MEEY | eel VEHⁿ | eel TEHⁿ | eel VEHⁿR',
    '-int, -inrent : quels verbes ?', 'Seulement venir, tenir et leurs composés : revenir, devenir, se souvenir, obtenir, retenir. Une petite famille, très fréquente dans les récits.', ['finale']),
  sent(1101, 'Il avait vingt ans quand il est venu à Montréal.', 'He was twenty when he came to Montréal.',
    '/i.la.vɛ vɛ̃.tɑ̃ kɑ̃.til ɛ və.ny a mɔ̃.ʁe.al/', 'ee-la-veh vehⁿ-TAHⁿ | kahⁿ-teel eh vuh-NÜ a mohⁿ-ray-AL', ['in', 'sosie'], FCVDR),
];

/* ── ACT 7 · LES IRRÉGULIERS (.1105-.1128) ────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  ps(1105, 'Ce fut une longue nuit.', 'It was a long night.',
    '/sə fy yn lɔ̃ɡ nɥi/', 'suh FÜ | ün lohⁿg NWEE', ['irregulier', 'etre']),
  map(1106, 'Ce fut une longue nuit.', 'Ça a été une longue nuit.', 'It was a long night.',
    '/sa a e.te yn lɔ̃ɡ nɥi/', 'sa a ay-TAY | ün lohⁿg NWEE',
    'Fut : être. Ce fut devient ça a été : une nuit vue en entier, finie.', ['irregulier', 'etre'], FCVDR),
  ps(1107, 'Il eut peur et recula.', 'He took fright and stepped back.',
    '/il y pœʁ e ʁə.ky.la/', 'eel ü PUHR | ay ruh-kü-LA', ['irregulier', 'avoir']),
  map(1108, 'Il eut peur et recula.', 'Il a eu peur et il a reculé.', 'He took fright and stepped back.',
    '/il a y pœʁ e i.la ʁə.ky.le/', 'eel a ü PUHR | ay ee-la ruh-kü-LAY',
    'Eut : avoir, participe eu. Même son : [y].', ['irregulier', 'avoir']),
  ps(1109, 'Elle fit ses valises en silence.', 'She packed her cases in silence.',
    '/ɛl fi se va.liz ɑ̃ si.lɑ̃s/', 'el FEE say va-LEEZ | ahⁿ see-LAHⁿS', ['irregulier', 'faire']),
  map(1110, 'Elle fit ses valises en silence.', 'Elle a fait ses valises en silence.', 'She packed her cases in silence.',
    '/ɛ.la fɛ se va.liz ɑ̃ si.lɑ̃s/', 'eh-la FEH say va-LEEZ | ahⁿ see-LAHⁿS',
    'Fit : faire. Ne le lis pas fut : fut vient d’être.', ['irregulier', 'faire']),
  ps(1111, 'Il prit le premier train pour Lyon.', 'He took the first train to Lyon.',
    '/il pʁi lə pʁə.mje tʁɛ̃ puʁ ljɔ̃/', 'eel PREE | luh pruh-myay TREHⁿ | poor LYOHⁿ', ['irregulier', 'prendre']),
  map(1112, 'Il prit le premier train pour Lyon.', 'Il a pris le premier train pour Lyon.', 'He took the first train to Lyon.',
    '/il a pʁi lə pʁə.mje tʁɛ̃ puʁ ljɔ̃/', 'eel a PREE | luh pruh-myay TREHⁿ | poor LYOHⁿ',
    'Prit : prendre, participe pris. Même son, un t au lieu du s.', ['irregulier', 'prendre'], FCVDR),
  ps(1113, 'Elle vit la lumière au bout du couloir.', 'She saw the light at the end of the corridor.',
    '/ɛl vi la ly.mjɛʁ o bu dy ku.lwaʁ/', 'el VEE la lü-MYEHR | oh BOO dü koo-LWAR', ['irregulier', 'voir', 'sosie']),
  map(1114, 'Elle vit la lumière au bout du couloir.', 'Elle a vu la lumière au bout du couloir.', 'She saw the light at the end of the corridor.',
    '/ɛ.la vy la ly.mjɛʁ o bu dy ku.lwaʁ/', 'eh-la VÜ la lü-MYEHR | oh BOO dü koo-LWAR',
    'Vit : voir. Mais elle vit à Tunis, c’est vivre au présent : le complément décide.', ['irregulier', 'voir', 'sosie']),
  ps(1115, 'Il mit son manteau et sortit.', 'He put on his coat and went out.',
    '/il mi sɔ̃ mɑ̃.to e sɔʁ.ti/', 'eel MEE sohⁿ mahⁿ-TOH | ay sor-TEE', ['irregulier', 'mettre']),
  map(1116, 'Il mit son manteau et sortit.', 'Il a mis son manteau et il est sorti.', 'He put on his coat and went out.',
    '/il a mi sɔ̃ mɑ̃.to e i.lɛ sɔʁ.ti/', 'eel a MEE sohⁿ mahⁿ-TOH | ay ee-leh sor-TEE',
    'Mit : mettre, participe mis. Sortit : sortir, avec être aujourd’hui.', ['irregulier', 'mettre']),
  ps(1117, 'Elle naquit à Saint-Louis du Sénégal en 1932.', 'She was born in Saint-Louis, Senegal, in 1932.',
    '/ɛl na.ki a sɛ̃.lwi dy se.ne.ɡal ɑ̃ mil nœf sɑ̃ tʁɑ̃t.dø/', 'el na-KEE | a sehⁿ-LWEE dü say-nay-GAL | ahⁿ meel nuhf sahⁿ trahⁿt-DEU', ['irregulier', 'naitre', 'biographie']),
  map(1118, 'Elle naquit à Saint-Louis du Sénégal en 1932.', 'Elle est née à Saint-Louis du Sénégal en 1932.', 'She was born in Saint-Louis, Senegal, in 1932.',
    '/ɛ.lɛ ne a sɛ̃.lwi dy se.ne.ɡal ɑ̃ mil nœf sɑ̃ tʁɑ̃t.dø/', 'eh-leh NAY | a sehⁿ-LWEE dü say-nay-GAL | ahⁿ meel nuhf sahⁿ trahⁿt-DEU',
    'Naquit : naître. La forme ne ressemble à rien : apprends-la par cœur, elle ouvre toutes les biographies.', ['irregulier', 'naitre', 'biographie'], FCVDR),
  ps(1119, 'Il mourut dans son village natal.', 'He died in the village where he was born.',
    '/il mu.ʁy dɑ̃ sɔ̃ vi.laʒ na.tal/', 'eel moo-RÜ | dahⁿ sohⁿ vee-lazh na-TAL', ['irregulier', 'mourir', 'biographie']),
  map(1120, 'Il mourut dans son village natal.', 'Il est mort dans son village natal.', 'He died in the village where he was born.',
    '/i.lɛ mɔʁ dɑ̃ sɔ̃ vi.laʒ na.tal/', 'ee-leh MOR | dahⁿ sohⁿ vee-lazh na-TAL',
    'Mourut : mourir. Aujourd’hui, être et le participe mort.', ['irregulier', 'mourir', 'biographie']),
  ps(1121, '« Je reviendrai », dit-elle.', '“I will come back,” she said.',
    '/ʒə ʁə.vjɛ̃.dʁe di.tɛl/', 'zhuh ruh-vyehⁿ-DRAY | dee-TEL', ['irregulier', 'dire', 'incise']),
  rule(1122, "Fut vient d'être, fit vient de faire.", 'Fut comes from être, fit comes from faire.',
    '/fy vjɛ̃ dɛtʁ fi vjɛ̃ də fɛʁ/', 'FÜ vyehⁿ DEHTR | FEE vyehⁿ duh FEHR',
    'Fut ou fit ?', 'Une seule lettre les sépare. Fut, avec u : être (ce fut une longue nuit). Fit, avec i : faire (elle fit ses valises).', ['irregulier', 'piege']),
  rule(1123, 'Il vit : voir au passé simple, ou vivre au présent.', 'Il vit: voir in the passé simple, or vivre in the present.',
    '/il vi vwaʁ o pa.se sɛ̃pl u vivʁ o pʁe.zɑ̃/', 'eel VEE | VWAR oh pa-say SEHⁿPL | oo VEEVR oh pray-ZAHⁿ',
    'Il vit : quel verbe ?', 'Il vit la lumière : voir. Il vit à Tunis : vivre. Un complément à regarder, un lieu où habiter.', ['sosie']),
  ps(1124, 'Ils furent les premiers à traverser le désert.', 'They were the first to cross the desert.',
    '/il fyʁ le pʁə.mje a tʁa.vɛʁ.se lə de.zɛʁ/', 'eel FÜR | lay pruh-MYAY | a tra-vehr-SAY luh day-ZEHR', ['irregulier', 'etre', 'pluriel']),
  map(1125, 'Ils furent les premiers à traverser le désert.', 'Ils ont été les premiers à traverser le désert.', 'They were the first to cross the desert.',
    '/il.zɔ̃.te.te le pʁə.mje a tʁa.vɛʁ.se lə de.zɛʁ/', 'eel-zohⁿ-tay-TAY | lay pruh-MYAY | a tra-vehr-SAY luh day-ZEHR',
    'Furent : être, ils. Le pluriel de fut.', ['irregulier', 'etre', 'pluriel']),
  ps(1126, 'Quand il eut fini, il se leva.', 'When he had finished, he stood up.',
    '/kɑ̃.ti.ly fi.ni il sə lə.va/', 'kahⁿ-tee-LÜ fee-NEE | eel suh luh-VA', ['irregulier', 'avoir', 'anterieur']),
  map(1127, 'Quand il eut fini, il se leva.', "Quand il a fini, il s'est levé.", 'When he had finished, he stood up.',
    '/kɑ̃.ti.la fi.ni il sɛ lə.ve/', 'kahⁿ-tee-la fee-NEE | eel seh luh-VAY',
    'Eut fini : un passé antérieur, un cran avant le passé simple. Aujourd’hui, quand il a fini suffit.', ['irregulier', 'anterieur']),
  sent(1128, 'Elle vit à Dakar depuis vingt ans.', 'She has been living in Dakar for twenty years.',
    '/ɛl vi a da.kaʁ də.pɥi vɛ̃ tɑ̃/', 'el VEE a da-KAR | duh-pwee vehⁿ TAHⁿ', ['sosie', 'present'], FCVDR),
];

/* ── ACT 8 · LA PERSONNE (.1130-.1142) ────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  ps(1130, 'Ils se regardèrent sans un mot.', 'They looked at each other without a word.',
    '/il sə ʁə.ɡaʁ.dɛʁ sɑ̃.zœ̃ mo/', 'eel suh ruh-gar-DEHR | sahⁿ-zuhⁿ MOH', ['personne', 'pluriel']),
  map(1131, 'Ils se regardèrent sans un mot.', 'Ils se sont regardés sans un mot.', 'They looked at each other without a word.',
    '/il sə sɔ̃ ʁə.ɡaʁ.de sɑ̃.zœ̃ mo/', 'eel suh sohⁿ ruh-gar-DAY | sahⁿ-zuhⁿ MOH',
    'Regardèrent : regarder, ils. -rent, c’est toujours ils ou elles.', ['personne', 'pluriel'], FCVDR),
  ps(1132, 'Elles sortirent ensemble du tribunal.', 'They came out of the courthouse together.',
    '/ɛl sɔʁ.tiʁ ɑ̃.sɑ̃bl dy tʁi.by.nal/', 'el sor-TEER | ahⁿ-SAHⁿBL | dü tree-bü-NAL', ['personne', 'pluriel']),
  map(1133, 'Elles sortirent ensemble du tribunal.', 'Elles sont sorties ensemble du tribunal.', 'They came out of the courthouse together.',
    '/ɛl sɔ̃ sɔʁ.ti ɑ̃.sɑ̃bl dy tʁi.by.nal/', 'el sohⁿ sor-TEE | ahⁿ-SAHⁿBL | dü tree-bü-NAL',
    'Sortirent : sortir, elles. Aujourd’hui, être et l’accord au féminin pluriel.', ['personne', 'pluriel']),
  ps(1134, 'Nous partîmes le lendemain.', 'We left the next day.',
    '/nu paʁ.tim lə lɑ̃d.mɛ̃/', 'noo par-TEEM | luh lahⁿd-MEHⁿ', ['personne', 'nous']),
  map(1135, 'Nous partîmes le lendemain.', 'Nous sommes partis le lendemain.', 'We left the next day.',
    '/nu sɔm paʁ.ti lə lɑ̃d.mɛ̃/', 'noo som par-TEE | luh lahⁿd-MEHⁿ',
    'Partîmes : partir, nous. Le -îmes, -âmes, -ûmes ne vit que dans les souvenirs écrits.', ['personne', 'nous']),
  rule(1136, 'Il, elle, ils, elles : presque tout le passé simple.', 'Il, elle, ils, elles: almost all of the passé simple.',
    '/il ɛl il ɛl pʁɛsk tu lə pa.se sɛ̃pl/', 'EEL | EL | EEL | EL | presk too luh pa-say SEHⁿPL',
    'Quelles personnes rencontres-tu ?', 'La troisième personne, surtout. Je et nous dans les souvenirs et les récits de voyage. Tu et vous presque jamais.', ['personne']),
  ps(1137, 'Il chanta, et elles chantèrent avec lui.', 'He sang, and they sang with him.',
    '/il ʃɑ̃.ta e ɛl ʃɑ̃.tɛʁ a.vɛk lɥi/', 'eel shahⁿ-TA | ay el shahⁿ-TEHR a-vek LWEE', ['personne']),
  map(1138, 'Il chanta, et elles chantèrent avec lui.', 'Il a chanté, et elles ont chanté avec lui.', 'He sang, and they sang with him.',
    '/il a ʃɑ̃.te e ɛl.zɔ̃ ʃɑ̃.te a.vɛk lɥi/', 'eel a shahⁿ-TAY | ay el-zohⁿ shahⁿ-TAY a-vek LWEE',
    'Chanta : il. Chantèrent : elles. À l’oral, la différence s’entend : [ta], [tɛʁ].', ['personne']),
  ps(1139, 'Je compris trop tard mon erreur.', 'I understood my mistake too late.',
    '/ʒə kɔ̃.pʁi tʁo taʁ mɔ̃.nɛ.ʁœʁ/', 'zhuh kohⁿ-PREE | troh TAR | mohⁿ-neh-RUHR', ['personne', 'je']),
  map(1140, 'Je compris trop tard mon erreur.', "J'ai compris trop tard mon erreur.", 'I understood my mistake too late.',
    '/ʒe kɔ̃.pʁi tʁo taʁ mɔ̃.nɛ.ʁœʁ/', 'zhay kohⁿ-PREE | troh TAR | mohⁿ-neh-RUHR',
    'Compris : comprendre, je. Avec je, la forme est pareille au participe : c’est le sujet qui te guide.', ['personne', 'je']),
  rule(1141, '-rent, c’est ils ou elles.', '-rent means ils or elles.',
    '/ʁ sɛ il u ɛl/', 'RUH | seh EEL oo EL',
    'Parlèrent, finirent, furent, vinrent : quelle personne ?', 'Toujours la troisième du pluriel. Et le r se prononce : [paʁ.lɛʁ], [fi.niʁ], [fyʁ], [vɛ̃ʁ].', ['personne', 'finale']),
  sent(1142, 'Nous sommes partis le lendemain, très tôt.', 'We left the next day, very early.',
    '/nu sɔm paʁ.ti lə lɑ̃d.mɛ̃ tʁɛ to/', 'noo som par-TEE | luh lahⁿd-MEHⁿ | treh TOH', ['personne', 'passe-compose'], FCVDR),
];

/* ── ACT 9 · PREMIER PLAN, ARRIÈRE-PLAN (.1145-.1157) ─────────────────────── */

export const ACT9_ROWS: Row[] = [
  ps(1145, 'Il pleuvait depuis trois jours quand la lettre arriva.', 'It had been raining for three days when the letter arrived.',
    '/il plø.vɛ də.pɥi tʁwa ʒuʁ kɑ̃ la lɛtʁ a.ʁi.va/', 'eel pluh-VEH | duh-pwee trwa ZHOOR | kahⁿ la LETR a-ree-VA', ['plan', 'decor']),
  map(1146, 'Il pleuvait depuis trois jours quand la lettre arriva.', 'Il pleuvait depuis trois jours quand la lettre est arrivée.', 'It had been raining for three days when the letter arrived.',
    '/il plø.vɛ də.pɥi tʁwa ʒuʁ kɑ̃ la lɛtʁ ɛ.ta.ʁi.ve/', 'eel pluh-VEH | duh-pwee trwa ZHOOR | kahⁿ la LETR eh-ta-ree-VAY',
    'Pleuvait reste : c’est le décor. Seule arriva change : arriver, être, arrivée.', ['plan', 'decor'], FCVDR),
  sent(1147, 'La maison dormait ; seule une lampe brillait dans la cuisine.', 'The house was asleep; only a lamp was shining in the kitchen.',
    '/la mɛ.zɔ̃ dɔʁ.mɛ sœ.lyn lɑ̃p bʁi.jɛ dɑ̃ la kɥi.zin/', 'la meh-ZOHⁿ dor-MEH | suh-lün LAHⁿP bree-YEH | dahⁿ la kwee-ZEEN', ['plan', 'decor', 'imparfait']),
  ps(1148, 'Soudain, la porte claqua.', 'Suddenly the door slammed.',
    '/su.dɛ̃ la pɔʁt kla.ka/', 'soo-DEHⁿ | la PORT kla-KA', ['plan', 'premier']),
  map(1149, 'Soudain, la porte claqua.', 'Soudain, la porte a claqué.', 'Suddenly the door slammed.',
    '/su.dɛ̃ la pɔʁt a kla.ke/', 'soo-DEHⁿ | la PORT a kla-KAY',
    'Claqua : claquer. Soudain annonce un événement : premier plan.', ['plan', 'premier']),
  ps(1150, 'Elle lisait près de la fenêtre lorsqu’on sonna.', 'She was reading by the window when the bell rang.',
    '/ɛl li.zɛ pʁɛ də la fə.nɛtʁ lɔʁs.kɔ̃ sɔ.na/', 'el lee-ZEH | preh duh la fuh-NEHTR | lors-kohⁿ so-NA', ['plan', 'coupure']),
  map(1151, 'Elle lisait près de la fenêtre lorsqu’on sonna.', "Elle lisait près de la fenêtre lorsqu'on a sonné.", 'She was reading by the window when the bell rang.',
    '/ɛl li.zɛ pʁɛ də la fə.nɛtʁ lɔʁs.kɔ̃.na sɔ.ne/', 'el lee-ZEH | preh duh la fuh-NEHTR | lors-kohⁿ-na so-NAY',
    'Lisait : le décor, qui ne bouge pas. Sonna : sonner, l’événement qui coupe.', ['plan', 'coupure']),
  rule(1152, "Le passé simple prend la place du passé composé ; l'imparfait ne bouge pas.", 'The passé simple takes the place of the passé composé; the imparfait stays put.',
    '/lə pa.se sɛ̃pl pʁɑ̃ la plas dy pa.se kɔ̃.po.ze lɛ̃.paʁ.fɛ nə buʒ pa/', 'luh pa-say SEHⁿPL | prahⁿ la PLASS dü pa-say kohⁿ-poh-ZAY | lehⁿ-par-FEH nuh boozh PA',
    'Dans un roman, qui fait quoi ?', 'Le passé simple fait avancer l’histoire, au premier plan. L’imparfait peint le décor, à l’arrière-plan, comme à l’oral.', ['plan']),
  sent(1153, 'Le village était silencieux et les volets restaient fermés.', 'The village was silent and the shutters stayed closed.',
    '/lə vi.laʒ e.tɛ si.lɑ̃.sjø e le vɔ.lɛ ʁɛs.tɛ fɛʁ.me/', 'luh vee-LAZH ay-teh see-lahⁿ-SYEU | ay lay vo-LEH res-teh fehr-MAY', ['plan', 'decor', 'imparfait']),
  ps(1154, 'Tout le monde se tut quand le maire entra.', 'Everyone fell silent when the mayor came in.',
    '/tu lə mɔ̃d sə ty kɑ̃ lə mɛʁ ɑ̃.tʁa/', 'too luh MOHⁿD suh TÜ | kahⁿ luh MEHR ahⁿ-TRA', ['plan', 'premier']),
  map(1155, 'Tout le monde se tut quand le maire entra.', "Tout le monde s'est tu quand le maire est entré.", 'Everyone fell silent when the mayor came in.',
    '/tu lə mɔ̃d sɛ ty kɑ̃ lə mɛʁ ɛ.tɑ̃.tʁe/', 'too luh MOHⁿD seh TÜ | kahⁿ luh MEHR eh-tahⁿ-TRAY',
    'Deux passés simples : deux événements, l’un après l’autre. Personne ne parlait déjà.', ['plan', 'premier']),
  ps(1156, 'Elle resta longtemps immobile sur le seuil.', 'She stood still on the doorstep for a long time.',
    '/ɛl ʁɛs.ta lɔ̃.tɑ̃ i.mɔ.bil syʁ lə sœj/', 'el res-TA lohⁿ-TAHⁿ | ee-mo-BEEL | sür luh SUHY', ['plan', 'duree']),
  map(1157, 'Elle resta longtemps immobile sur le seuil.', 'Elle est restée longtemps immobile sur le seuil.', 'She stood still on the doorstep for a long time.',
    '/ɛ.lɛ ʁɛs.te lɔ̃.tɑ̃ i.mɔ.bil syʁ lə sœj/', 'eh-leh res-TAY lohⁿ-TAHⁿ | ee-mo-BEEL | sür luh SUHY',
    'Resta : rester. Un moment long, mais fermé : premier plan, comme j’ai habité dix ans à Lyon.', ['plan', 'duree']),
];

/* ── ACT 10 · AUJOURD'HUI, TU DIRAIS (.1160-.1175) ────────────────────────── */

export const ACT10_ROWS: Row[] = [
  ps(1160, 'Le 9 novembre 1989, le mur de Berlin tomba.', 'On 9 November 1989, the Berlin Wall fell.',
    '/lə nœf nɔ.vɑ̃bʁ mil nœf sɑ̃ ka.tʁə.vɛ̃.nœf lə myʁ də bɛʁ.lɛ̃ tɔ̃.ba/', 'luh nuhf no-VAHⁿBR | meel nuhf sahⁿ ka-truh-vehⁿ-NUHF | luh MÜR duh behr-LEHⁿ tohⁿ-BA', ['presse', 'er']),
  map(1161, 'Le 9 novembre 1989, le mur de Berlin tomba.', 'Le 9 novembre 1989, le mur de Berlin est tombé.', 'On 9 November 1989, the Berlin Wall fell.',
    '/lə nœf nɔ.vɑ̃bʁ mil nœf sɑ̃ ka.tʁə.vɛ̃.nœf lə myʁ də bɛʁ.lɛ̃ ɛ tɔ̃.be/', 'luh nuhf no-VAHⁿBR | meel nuhf sahⁿ ka-truh-vehⁿ-NUHF | luh MÜR duh behr-LEHⁿ eh tohⁿ-BAY',
    'Tomba : tomber, avec être aujourd’hui.', ['presse', 'er'], FCVDR),
  ps(1162, 'Des milliers de Berlinois franchirent la frontière cette nuit-là.', 'Thousands of Berliners crossed the border that night.',
    '/de mi.lje də bɛʁ.li.nwa fʁɑ̃.ʃiʁ la fʁɔ̃.tjɛʁ sɛt nɥi.la/', 'day mee-LYAY duh behr-lee-NWA | frahⁿ-SHEER la frohⁿ-TYEHR | set nwee-LA', ['presse', 'ir', 'pluriel']),
  map(1163, 'Des milliers de Berlinois franchirent la frontière cette nuit-là.', 'Des milliers de Berlinois ont franchi la frontière cette nuit-là.', 'Thousands of Berliners crossed the border that night.',
    '/de mi.lje də bɛʁ.li.nwa ɔ̃ fʁɑ̃.ʃi la fʁɔ̃.tjɛʁ sɛt nɥi.la/', 'day mee-LYAY duh behr-lee-NWA | ohⁿ frahⁿ-SHEE la frohⁿ-TYEHR | set nwee-LA',
    'Franchirent : franchir, ils. -irent, pluriel de -it.', ['presse', 'ir', 'pluriel'], FCVDR),
  ps(1164, '« Je ne sais pas », répondit-il.', '“I don’t know,” he replied.',
    '/ʒə nə sɛ pa ʁe.pɔ̃.di.til/', 'zhuh nuh seh PA | ray-pohⁿ-dee-TEEL', ['incise', 're']),
  map(1165, '« Je ne sais pas », répondit-il.', '« Je ne sais pas », a-t-il répondu.', '“I don’t know,” he replied.',
    '/ʒə nə sɛ pa a.til ʁe.pɔ̃.dy/', 'zhuh nuh seh PA | a-teel ray-pohⁿ-DÜ',
    'L’incise garde l’inversion : répondit-il devient a-t-il répondu. Le t sépare les deux voyelles.', ['incise', 're']),
  ps(1166, 'Quand elle arriva, le train était parti.', 'When she arrived, the train had left.',
    '/kɑ̃.tɛ.la.ʁi.va lə tʁɛ̃ e.tɛ paʁ.ti/', 'kahⁿ-teh-la-ree-VA | luh TREHⁿ ay-teh par-TEE', ['plan', 'plus-que-parfait']),
  map(1167, 'Quand elle arriva, le train était parti.', 'Quand elle est arrivée, le train était parti.', 'When she arrived, the train had left.',
    '/kɑ̃.tɛ.lɛ.ta.ʁi.ve lə tʁɛ̃ e.tɛ paʁ.ti/', 'kahⁿ-teh-leh-ta-ree-VAY | luh TREHⁿ ay-teh par-TEE',
    'Arriva change. Était parti, le plus-que-parfait, reste tel quel.', ['plan', 'plus-que-parfait'], FCVDR),
  rule(1168, 'Le passé simple devient passé composé ; l’imparfait et le plus-que-parfait restent.', 'The passé simple becomes passé composé; the imparfait and plus-que-parfait stay.',
    '/lə pa.se sɛ̃pl də.vjɛ̃ pa.se kɔ̃.po.ze lɛ̃.paʁ.fɛ e lə ply kə paʁ.fɛ ʁɛst/', 'luh pa-say SEHⁿPL duh-VYEHⁿ pa-say kohⁿ-poh-ZAY | lehⁿ-par-FEH | ay luh plü kuh par-FEH REST',
    'Pour raconter aujourd’hui, que changes-tu ?', 'Un seul temps : le passé simple. Tout le reste du texte garde ses verbes.', ['aujourdhui']),
  rule(1169, 'Naître, mourir, venir, partir, arriver, tomber : être au passé composé.', 'Naître, mourir, venir, partir, arriver, tomber: être in the passé composé.',
    '/nɛtʁ mu.ʁiʁ və.niʁ paʁ.tiʁ a.ʁi.ve tɔ̃.be ɛtʁ o pa.se kɔ̃.po.ze/', 'NEHTR | moo-REER | vuh-NEER | par-TEER | a-ree-VAY | tohⁿ-BAY | EHTR oh pa-say kohⁿ-poh-ZAY',
    'Il naquit, il vint, elle tomba : quel auxiliaire aujourd’hui ?', 'Être, et l’accord avec le sujet : elle est née, elle est venue, elle est tombée.', ['aujourdhui']),
  ps(1170, 'Il ne dit rien et sortit.', 'He said nothing and went out.',
    '/il nə di ʁjɛ̃ e sɔʁ.ti/', 'eel nuh dee RYEHⁿ | ay sor-TEE', ['dire', 'sosie']),
  map(1171, 'Il ne dit rien et sortit.', "Il n'a rien dit et il est sorti.", 'He said nothing and went out.',
    '/il na ʁjɛ̃ di e i.lɛ sɔʁ.ti/', 'eel na ryehⁿ DEE | ay ee-leh sor-TEE',
    'Dit : dire. Aujourd’hui, rien se glisse entre a et dit, et sortir prend être.', ['dire', 'sosie'], FCVDR),
  ps(1172, 'Elle se leva et quitta la salle.', 'She stood up and left the room.',
    '/ɛl sə lə.va e ki.ta la sal/', 'el suh luh-VA | ay kee-TA la SAL', ['er', 'pronominal']),
  map(1173, 'Elle se leva et quitta la salle.', "Elle s'est levée et elle a quitté la salle.", 'She stood up and left the room.',
    '/ɛl sɛ lə.ve e ɛ.la ki.te la sal/', 'el seh luh-VAY | ay eh-la kee-TAY la SAL',
    'Se leva : pronominal, donc être et l’accord. Quitta : avoir.', ['er', 'pronominal'], FCVDR),
  ps(1174, "Le 20 juin 1789, les députés trouvèrent la porte de leur salle fermée.", 'On 20 June 1789, the deputies found the door of their hall shut.',
    '/lə vɛ̃ ʒɥɛ̃ mil sɛt sɑ̃ ka.tʁə.vɛ̃.nœf le de.py.te tʁu.vɛʁ la pɔʁt də lœʁ sal fɛʁ.me/', 'luh vehⁿ ZHWEHⁿ | meel set sahⁿ ka-truh-vehⁿ-NUHF | lay day-pü-TAY troo-VEHR | la PORT duh luhr SAL fehr-MAY', ['histoire', 'er']),
  map(1175, "Le 20 juin 1789, les députés trouvèrent la porte de leur salle fermée.", "Le 20 juin 1789, les députés ont trouvé la porte de leur salle fermée.", 'On 20 June 1789, the deputies found the door of their hall shut.',
    '/lə vɛ̃ ʒɥɛ̃ mil sɛt sɑ̃ ka.tʁə.vɛ̃.nœf le de.py.te ɔ̃ tʁu.ve la pɔʁt də lœʁ sal fɛʁ.me/', 'luh vehⁿ ZHWEHⁿ | meel set sahⁿ ka-truh-vehⁿ-NUHF | lay day-pü-TAY ohⁿ troo-VAY | la PORT duh luhr SAL fehr-MAY',
    'Trouvèrent : trouver, ils. Fermée n’est pas un verbe conjugué : c’est l’état de la porte.', ['histoire', 'er']),
];

/* ── ACT 11 · COMPRENDRE L'EXTRAIT (.1180-.1188) ──────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1180, "Le narrateur raconte l'histoire à la première personne.", 'The narrator tells the story in the first person.',
    '/lə na.ʁa.tœʁ ʁa.kɔ̃t lis.twaʁ a la pʁə.mjɛʁ pɛʁ.sɔn/', 'luh na-ra-TUHR ra-KOHⁿT lees-TWAR | a la pruh-myehr pehr-SONN', ['narrateur'], FCVDR),
  sent(1181, "L'histoire est racontée à la troisième personne.", 'The story is told in the third person.',
    '/lis.twaʁ ɛ ʁa.kɔ̃.te a la tʁwa.zjɛm pɛʁ.sɔn/', 'lees-TWAR eh ra-kohⁿ-TAY | a la trwa-zyem pehr-SONN', ['narrateur']),
  sent(1182, 'Le ton est ironique : le narrateur se moque de son père.', 'The tone is ironic: the narrator is making fun of his father.',
    '/lə tɔ̃ ɛ.ti.ʁɔ.nik lə na.ʁa.tœʁ sə mɔk də sɔ̃ pɛʁ/', 'luh TOHⁿ eh-tee-ro-NEEK | luh na-ra-TUHR suh MOK duh sohⁿ PEHR', ['ton']),
  sent(1183, "Le texte laisse entendre que le père n'avait jamais vu la mer.", 'The text implies that the father had never seen the sea.',
    '/lə tɛkst lɛs ɑ̃.tɑ̃dʁ kə lə pɛʁ na.vɛ ʒa.mɛ vy la mɛʁ/', 'luh TEKST less ahⁿ-TAHⁿDR | kuh luh PEHR na-veh zha-meh VÜ la MEHR', ['inference'], FCVDR),
  ps(1184, 'Il sourit, mais ses yeux restèrent froids.', 'He smiled, but his eyes stayed cold.',
    '/il su.ʁi mɛ se.zjø ʁɛs.tɛʁ fʁwa/', 'eel soo-REE | meh say-ZYEU res-TEHR FRWA', ['ton', 'ir']),
  map(1185, 'Il sourit, mais ses yeux restèrent froids.', 'Il a souri, mais ses yeux sont restés froids.', 'He smiled, but his eyes stayed cold.',
    '/il a su.ʁi mɛ se.zjø sɔ̃ ʁɛs.te fʁwa/', 'eel a soo-REE | meh say-ZYEU sohⁿ res-TAY FRWA',
    'Sourit : sourire, qui fait aussi il sourit au présent. Ici, restèrent montre qu’on est au passé.', ['ton', 'ir']),
  sent(1186, "Le point de vue est celui de l'enfant.", 'The point of view is the child’s.',
    '/lə pwɛ̃ də vy ɛ sə.lɥi də lɑ̃.fɑ̃/', 'luh pwehⁿ duh VÜ | eh suh-LWEE duh lahⁿ-FAHⁿ', ['narrateur', 'point-de-vue']),
  ps(1187, 'Mon père décida que nous irions voir la mer.', 'My father decided that we would go and see the sea.',
    '/mɔ̃ pɛʁ de.si.da kə nu.zi.ʁjɔ̃ vwaʁ la mɛʁ/', 'mohⁿ PEHR day-see-DA | kuh noo-zee-ryohⁿ VWAR la MEHR', ['narrateur', 'er']),
  map(1188, 'Mon père décida que nous irions voir la mer.', 'Mon père a décidé que nous irions voir la mer.', 'My father decided that we would go and see the sea.',
    '/mɔ̃ pɛʁ a de.si.de kə nu.zi.ʁjɔ̃ vwaʁ la mɛʁ/', 'mohⁿ PEHR a day-see-DAY | kuh noo-zee-ryohⁿ VWAR la MEHR',
    'Décida : décider. Irions, le conditionnel du futur dans le passé, ne bouge pas.', ['narrateur', 'er']),
];

/* ── ACT 12 · RACONTE-LE À UN AMI (.1190-.1198) ───────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1190, "Tu ne devineras jamais ce que j'ai lu hier soir.", 'You will never guess what I read last night.',
    '/ty nə də.vi.nə.ʁa ʒa.mɛ sə kə ʒe ly jɛʁ swaʁ/', 'tü nuh duh-vee-nuh-RA zha-MEH | suh kuh zhay LÜ | yehr SWAR', ['tache'], FCVDR),
  sent(1191, "Au début, un homme arrivait dans un village où personne ne le connaissait.", 'At the start, a man arrives in a village where nobody knows him.',
    '/o de.by œ̃.nɔm a.ʁi.vɛ dɑ̃.zœ̃ vi.laʒ u pɛʁ.sɔn nə lə kɔ.nɛ.sɛ/', 'oh day-BÜ | uhⁿ-NOM a-ree-VEH | dahⁿ-zuhⁿ vee-LAZH | oo pehr-SONN nuh luh ko-neh-SEH', ['tache', 'imparfait']),
  ps(1192, 'Il frappa à toutes les portes, mais personne ne lui ouvrit.', 'He knocked at every door, but nobody opened to him.',
    '/il fʁa.pa a tut le pɔʁt mɛ pɛʁ.sɔn nə lɥi u.vʁi/', 'eel fra-PA a toot lay PORT | meh pehr-SONN nuh lwee oo-VREE', ['tache', 'er']),
  map(1193, 'Il frappa à toutes les portes, mais personne ne lui ouvrit.', "Il a frappé à toutes les portes, mais personne ne lui a ouvert.", 'He knocked at every door, but nobody opened to him.',
    '/il a fʁa.pe a tut le pɔʁt mɛ pɛʁ.sɔn nə lɥi a u.vɛʁ/', 'eel a fra-PAY a toot lay PORT | meh pehr-SONN nuh lwee a oo-VEHR',
    'Frappa, ouvrit : deux événements. Aujourd’hui : a frappé, a ouvert.', ['tache', 'er'], FCVDR),
  ps(1194, "On comprit enfin qu'il était revenu chercher sa fille.", 'At last they understood he had come back for his daughter.',
    '/ɔ̃ kɔ̃.pʁi ɑ̃.fɛ̃ ki.le.tɛ ʁə.və.ny ʃɛʁ.ʃe sa fij/', 'ohⁿ kohⁿ-PREE ahⁿ-FEHⁿ | kee-lay-teh ruh-vuh-NÜ | shehr-SHAY sa FEEY', ['tache', 'plus-que-parfait']),
  map(1195, "On comprit enfin qu'il était revenu chercher sa fille.", "On a enfin compris qu'il était revenu chercher sa fille.", 'At last they understood he had come back for his daughter.',
    '/ɔ̃.na ɑ̃.fɛ̃ kɔ̃.pʁi ki.le.tɛ ʁə.və.ny ʃɛʁ.ʃe sa fij/', 'ohⁿ-na ahⁿ-FEHⁿ kohⁿ-PREE | kee-lay-teh ruh-vuh-NÜ | shehr-SHAY sa FEEY',
    'Comprit : comprendre. Enfin se glisse au milieu ; était revenu ne bouge pas.', ['tache', 'plus-que-parfait']),
  sent(1196, "À la fin, j'ai compris pourquoi il était revenu.", 'At the end I understood why he had come back.',
    '/a la fɛ̃ ʒe kɔ̃.pʁi puʁ.kwa i.le.tɛ ʁə.və.ny/', 'a la FEHⁿ | zhay kohⁿ-PREE | poor-KWA ee-lay-teh ruh-vuh-NÜ', ['tache']),
  sent(1197, 'Je te le prête, si tu veux.', 'I will lend it to you, if you like.',
    '/ʒə tə lə pʁɛt si ty vø/', 'zhuh tuh luh PRET | see tü VEU', ['tache']),
  sent(1198, "Ce qui m'a le plus frappé, c'est la fin.", 'What struck me most was the ending.',
    '/sə ki ma lə ply fʁa.pe sɛ la fɛ̃/', 'suh kee ma luh plü fra-PAY | seh la FEHⁿ', ['tache'], FCVDR),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act (passé composé rows only: a
 *  passé simple row never carries `dictation`). */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE TEXTS
 *
 *  The long readings (B2: 200 to 350 words) and the « dans un texte »
 *  paragraphs (60 to 120 words) that close acts 3 to 11. They live here so
 *  the reading, the quiz and the task cannot drift. ALL INVENTED except the
 *  four historical passages named in §A.6.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: a tale, « Le meunier et la graine » (invented). */
export const LECTURE_CONTE =
  "Il était une fois, au bord d'un fleuve, un meunier qui vivait seul avec sa fille, Rose. Le moulin tournait nuit et jour, et le meunier ne parlait presque à personne. Un soir d'hiver, un voyageur frappa à la porte. Il neigeait, et l'homme tremblait de froid. Rose ouvrit la porte et lui offrit une soupe. Le voyageur entra, regarda autour de lui et s'assit près du feu. Il ne dit presque rien de la soirée. Avant de se coucher, il sortit de sa poche une petite boîte en bois et la posa sur la table. « Gardez-la, dit-il, mais ne l'ouvrez que le jour où vous aurez tout perdu. » Le lendemain matin, il était parti. Le meunier voulut jeter la boîte dans le fleuve, mais Rose la cacha sous son lit. Pendant sept ans, elle n'y toucha pas. Le moulin tournait toujours, mais le meunier vieillissait et les clients se faisaient rares. Un printemps, le fleuve déborda et emporta la roue du moulin. Ce soir-là, Rose ouvrit enfin la boîte. Elle y trouva une graine, une seule. Elle la planta au bord de l'eau. L'année suivante, un arbre immense poussa là où s'était tenu le moulin, et ses fruits nourrirent le village pendant cent ans. On raconte que le voyageur revint une fois, très vieux, qu'il s'assit sous l'arbre et qu'il sourit.";

/** Act 2: a history textbook page (real events; facts to check, §A.6). */
export const LECTURE_MANUEL =
  "Extrait d'un manuel d'histoire. Au début du XVIIe siècle, la France cherchait à s'installer durablement en Amérique du Nord, où ses pêcheurs et ses marchands venaient depuis longtemps. En 1608, Samuel de Champlain fonda Québec, sur un cap qui domine le Saint-Laurent. Il y fit construire une « abitation », un ensemble de bâtiments en bois entouré d'une palissade. Le premier hiver fut terrible : la plupart des hommes qui l'accompagnaient moururent, surtout du scorbut. Champlain ne renonça pas. Il s'appuya sur les alliances que les Français avaient nouées avec plusieurs peuples autochtones, et il explora avec eux l'intérieur du pays. Les Français y trouvèrent des guides, des partenaires commerciaux et parfois des alliés militaires. Pendant des années, pourtant, Québec resta un simple poste de traite, où l'on échangeait des fourrures contre des outils, des tissus et des chaudrons. La population n'augmentait que très lentement, et la colonie dépendait des navires qui arrivaient de France au printemps. Il fallut attendre 1663 pour que le roi Louis XIV fasse de la Nouvelle-France une province royale. Dès lors, les choses changèrent : des centaines de colons traversèrent l'Atlantique, et la colonie commença enfin à grandir. À l'examen, retiens trois dates : 1608, la fondation ; 1663, la province royale ; et l'hiver 1608-1609, qui faillit tout arrêter.";

/** Act 7: the life of an invented painter, Hortense Vallier. */
export const LECTURE_BIOGRAPHIE =
  "Hortense Vallier naquit à Saint-Louis du Sénégal en 1932, d'un père médecin et d'une mère institutrice. Enfant, elle passait des heures à dessiner le fleuve depuis la fenêtre de sa chambre. À dix-huit ans, elle prit le bateau pour Marseille, puis le train pour Paris, où elle entra aux Beaux-Arts. Ce fut une période difficile : elle n'avait presque pas d'argent, et elle dut travailler la nuit dans une imprimerie. En 1958, elle eut enfin sa première exposition. Un critique vit ses toiles et dit qu'il n'avait jamais rien vu de pareil. Le succès vint très vite. Les musées étrangers achetèrent ses tableaux, et les journaux parlèrent d'elle comme de la grande découverte de la décennie. Pourtant, en 1965, Hortense quitta Paris sans prévenir personne et revint à Saint-Louis. Elle fit construire un atelier au bord du fleuve et mit dix ans à peindre une seule série de tableaux, qu'elle refusa longtemps de montrer. On ne put les voir qu'en 1979, à Dakar. Elle ne travailla plus jamais ailleurs. Elle mourut en 2011, dans la maison où elle était née. Ses carnets, publiés après sa mort, racontent qu'elle avait toujours su qu'elle reviendrait. On y lit aussi cette phrase, que ses anciens élèves citent encore : « On ne quitte jamais vraiment le fleuve de son enfance. »";

/** Act 9: a novel page, « La lettre » (invented). */
export const LECTURE_ROMAN =
  "Il pleuvait depuis trois jours quand la lettre arriva. La maison dormait encore ; seule une lampe brillait dans la cuisine, où Madeleine préparait le café. Le facteur, un jeune homme qu'elle ne connaissait pas, frappa deux coups à la porte. Elle essuya ses mains sur son tablier et alla ouvrir. L'enveloppe était mouillée, l'écriture penchée, presque effacée. Madeleine la reconnut aussitôt. Elle resta longtemps immobile sur le seuil, la lettre à la main, pendant que la pluie tombait sur le jardin. Puis elle referma la porte, s'assit à la table et ouvrit l'enveloppe avec un couteau. Il n'y avait qu'une ligne : « Je rentre dimanche. » Madeleine relut la phrase trois fois. Dehors, le vent secouait les volets et le chien aboyait sous l'appentis. Elle se leva, monta dans la chambre de son fils, qui était vide depuis dix ans, et ouvrit les fenêtres en grand. Le lit était fait, les livres étaient rangés sur l'étagère, comme au premier jour. Elle ne pleura pas. Elle prit un chiffon et commença à faire la poussière. Quand l'horloge sonna midi, la chambre sentait la cire et le linge propre. Madeleine s'assit sur le lit, la lettre posée sur ses genoux, et regarda la pluie. Il restait quatre jours avant dimanche.";

/** Act 10: a press retrospective (real events; facts to check, §A.6). */
export const LECTURE_RETRO =
  "Rétrospective. Le soir du 9 novembre 1989, personne à Berlin ne s'attendait à ce qui allait se passer. Lors d'une conférence de presse retransmise à la télévision, un porte-parole du gouvernement est-allemand annonça que les habitants pourraient désormais voyager librement. Un journaliste lui demanda quand la mesure entrait en vigueur. Il consulta ses notes, hésita, puis répondit : « À ma connaissance, immédiatement. » La nouvelle se répandit en quelques minutes. Dans les appartements de Berlin-Est, des familles entières quittèrent la table du dîner et descendirent dans la rue, souvent en pantoufles. Des milliers de Berlinois de l'Est se rendirent aux postes-frontières. Les gardes, qui n'avaient reçu aucun ordre, ne surent pas quoi faire. Vers minuit, sous la pression de la foule, ils ouvrirent les barrières, et des milliers de Berlinois franchirent la frontière cette nuit-là. Des inconnus s'embrassèrent dans les rues, on déboucha des bouteilles, certains montèrent sur le mur et commencèrent à le frapper à coups de marteau. Les télévisions du monde entier diffusèrent ces images jusqu'au matin. La démolition officielle dura des mois. Mais pour ceux qui étaient là, le mur de Berlin tomba cette nuit-là. « Je me suis réveillée dans un autre pays », raconte aujourd'hui une Berlinoise qui avait vingt ans à l'époque.";

/** Act 11: the exam extract, a memoir-style novel page (invented). */
export const LECTURE_EXTRAIT =
  "Extrait d'un roman contemporain. Le narrateur se souvient de l'été de ses douze ans. Cet été-là, mon père décida que nous irions voir la mer. Il l'annonça un dimanche, au milieu du repas, comme on annonce une guerre. Ma mère posa sa fourchette et ne dit rien. Nous n'avions jamais quitté le village ; la mer, pour moi, c'était une photo punaisée au-dessus du lit de ma sœur. Nous partîmes le premier lundi d'août, à quatre heures du matin, dans la vieille voiture de l'oncle Marcel. Mon père conduisait en silence, les deux mains sur le volant, comme s'il avait peur que la route lui échappe. Vers midi, la voiture tomba en panne au milieu de nulle part. Mon père sortit, ouvrit le capot, regarda longtemps le moteur et le referma avec beaucoup de dignité. Nous marchâmes deux heures jusqu'au village le plus proche. Un garagiste accepta de nous dépanner, pour une somme dont ma mère parla pendant des années. Nous arrivâmes enfin à la mer le lendemain soir. Il faisait froid, il pleuvait, et la plage était déserte. Ma sœur pleura. Mon père, lui, resta longtemps debout face aux vagues, sans un mot. Je crus d'abord qu'il était déçu. Bien plus tard, je compris qu'il n'avait jamais vu la mer lui non plus, et qu'il avait organisé tout ce voyage pour ne pas avoir à l'avouer. Je ne le lui ai jamais dit. Je crois qu'il aurait détesté que je le sache.";

/** Act 12: the model retelling, Léa to Hugo, of the act 1 tale. */
export const LECTURE_MODELE =
  "Salut Hugo, j'ai enfin lu le conte que tu m'avais prêté, et je te le raconte, parce que je sais que tu ne t'en souviens plus ! Au début, il y a un meunier qui vit seul avec sa fille, Rose. Un soir d'hiver, un voyageur a frappé à leur porte. Il neigeait et il avait très froid, alors Rose l'a fait entrer et lui a offert une soupe. Il n'a presque rien dit de la soirée. Avant d'aller se coucher, il a posé une petite boîte sur la table et il leur a demandé de ne l'ouvrir que le jour où ils auraient tout perdu. Le lendemain, il était déjà parti. Le meunier a voulu jeter la boîte, mais Rose l'a cachée. Pendant sept ans, elle n'y a pas touché. Un jour, le fleuve a débordé et il a emporté la roue du moulin. Ce soir-là, Rose a enfin ouvert la boîte : il y avait une seule graine. Elle l'a plantée au bord de l'eau, et l'année suivante, un arbre immense a poussé à la place du moulin. Ses fruits ont nourri le village pendant cent ans. Ce qui m'a le plus frappé, c'est la fin : le voyageur est revenu, très vieux, et il s'est assis sous l'arbre en souriant. Je te le rends samedi. Bises, Léa";

/** The task extract (printed in the brief, since `task` has no source field). */
export const EXTRAIT_TACHE =
  "Le lendemain, Mathieu se leva avant l'aube. Il faisait encore nuit et le village dormait. Il prit son sac, ferma la porte sans bruit et descendit vers la gare. Le train de six heures était déjà parti. Il attendit une heure sur le quai, puis il monta dans le suivant. À Lyon, personne ne l'attendait. Il marcha longtemps dans des rues qu'il ne reconnaissait plus. Vers midi, il entra dans un petit café et demanda un verre d'eau. La patronne le regarda longuement. « Tu es le fils Berthier », dit-elle enfin. Mathieu ne répondit pas. Il sortit une photo de sa poche et la posa sur le comptoir. La femme pâlit. C'était la photo de son propre mariage, qu'elle avait perdue trente ans plus tôt.";

/** The « dans un texte » paragraphs (acts 3 to 11). */
export const TEXTE_A3 =
  "Nous arrivâmes à Tombouctou au lever du jour. Le guide nous attendait près du puits. Il nous salua, chargea nos sacs sur un chameau et marcha devant nous sans un mot. Vers midi, le vent se leva. Nous nous abritâmes derrière une dune et nous mangeâmes des dattes. Le soir, les étoiles brillaient comme jamais. Je demandai au guide s'il avait peur de se perdre. Il éclata de rire et me montra le ciel.";

export const TEXTE_A4 =
  "Le prince attendit trois jours devant la porte du château. Le quatrième jour, une vieille femme sortit et lui tendit une clé. Il la prit sans un mot, ouvrit la porte et descendit l'escalier. En bas, il faisait noir. Il entendit une voix qui chantait. Il suivit la voix jusqu'à une petite salle où une jeune fille lisait près d'une bougie. Elle leva les yeux et sourit. « Vous en avez mis, du temps », dit-elle.";

export const TEXTE_A5 =
  "Quand elle reçut la lettre, Claire ne put pas la lire tout de suite. Elle la posa sur la table et attendit le soir. Elle la lut enfin, assise dans le noir. Son frère voulait la revoir. Elle dut s'asseoir. Pendant vingt ans, elle avait cru qu'il la détestait. Elle relut la lettre, but un verre d'eau et courut jusqu'à la gare.";

export const TEXTE_A6 =
  "L'hiver suivant, les loups revinrent. Chaque nuit, ils descendaient de la montagne et tournaient autour des fermes. Un soir, le vieux Joseph prit son fusil et vint s'asseoir devant la bergerie. Il tint jusqu'à l'aube, sans dormir. Au matin, les villageois vinrent le chercher. Ils le trouvèrent endormi, le fusil sur les genoux, et pas un seul mouton ne manquait. Joseph devint, ce jour-là, le héros du village.";

export const TEXTE_A7 =
  "Ce fut Paul qui vit le premier la fumée. Il fit signe aux autres, prit la radio et dit trois mots. Les pompiers vinrent en moins de dix minutes. Ils mirent deux heures à éteindre le feu. Personne ne fut blessé, mais la grange eut le temps de brûler entièrement. Le lendemain, le maire fit un discours et remercia Paul devant tout le village.";

export const TEXTE_A8 =
  "Ils se rencontrèrent un mardi, dans un train pour Genève. Elle lisait ; il faisait semblant de lire. À Lausanne, elle descendit, et il descendit aussi, sans savoir pourquoi. Ils marchèrent jusqu'au lac et ils se revirent le lendemain, puis tous les jours. Je les vis passer sous ma fenêtre, ce jour-là : j'étais leur voisin. Nous devînmes amis quelques mois plus tard, et ils me racontèrent la suite.";

export const TEXTE_A9 =
  "La salle était pleine. Les musiciens accordaient leurs instruments et le public parlait à voix basse. Soudain, les lumières s'éteignirent. Un homme entra seul sur la scène. Il portait un vieux costume et tenait un violon à la main. Il salua, ferma les yeux et commença à jouer. Personne ne bougeait. Quand la dernière note s'éleva, la salle resta silencieuse un long moment, puis tout le monde se leva.";

export const TEXTE_A10 =
  "Le 20 juin 1789, les députés du tiers état trouvèrent la porte de leur salle fermée. Ils ne renoncèrent pas : ils se réunirent dans une salle voisine, où l'on jouait d'ordinaire au jeu de paume. Là, ils jurèrent de ne pas se séparer avant d'avoir donné une constitution à la France. Ce serment resta dans l'histoire sous le nom de serment du Jeu de paume.";

export const TEXTE_A11 =
  "Mme Leroux entra dans la classe avec son éternel sourire. Elle posa son sac, ouvrit la fenêtre et nous annonça, ravie, une interrogation surprise. Nous la remerciâmes d'un silence glacial. Personne n'avait révisé. Elle distribua les feuilles en fredonnant, comme on distribue des bonbons. Au fond de la salle, Karim leva la main et demanda, très poliment, si l'interrogation comptait pour la moyenne. Elle répondit que oui, bien sûr.";
