// b2.06.l1 « Subjonctif ou indicatif ? »: the authored corpus, the imports
// and the citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape,
// as b2.01), under the B2 rules of B2-BUILD-LOG.md (form, meaning, choice,
// text).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 6 of the B2 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   THE CHOICE BETWEEN THE TWO MOODS, where B1 gave a list.
//
//     affirmer ou non   the one question: does the sentence ASSERT the fact?
//                       (the reframe, act 1)
//     penser, croire    affirmative, negative, inverted question (« crois-tu
//                       qu'il vienne » doubts, « crois-tu qu'il viendra »
//                       asks), est-ce que and intonation questions, the
//                       NEGATIVE question that asserts (« ne crois-tu pas
//                       qu'il a raison »), « je ne doute pas que » (act 3)
//     l'échelle         certain, clair, vrai, probable (indicative) against
//                       possible, se peut, peu probable, exclu, pas certain
//                       (subjunctive); il paraît que, sans doute que,
//                       peut-être que (indicative) (act 4)
//     la recherche      a relative whose antecedent is sought, wished for or
//                       denied (subjunctive) against one that exists
//                       (indicative); personne qui, rien qui, aucun… qui,
//                       y a-t-il quelqu'un qui (act 5)
//     le superlatif     le seul, le premier, le meilleur, l'unique: the
//                       subjunctive judges, the indicative states a
//                       checkable fact; « le premier à + infinitif » avoids
//                       the choice (act 6)
//     but ou résultat   pour que, afin que, sans que, trop… pour que
//                       (subjunctive) against si bien que, tellement… que
//                       (indicative); de sorte que and de façon que BOTH
//                       ways (act 7)
//     la concession     bien que, quoique, quoi que, quel que, si… que
//                       (subjunctive) against même si (indicative, and
//                       imparfait or plus-que-parfait for a hypothesis);
//                       bien que + adjective; avoir beau (act 8)
//     le temps          après que + indicative (THE trap) against avant que,
//                       jusqu'à ce que, en attendant que (subjunctive); the
//                       expletive ne; depuis que, dès que, maintenant que;
//                       the ways out (après + nom, après avoir) (act 9)
//     les deux possibles « je ne crois pas qu'il est venu / qu'il soit
//                       venu » (register and certainty), comprendre que,
//                       dire que, supposer que, que + subjonctif en tête,
//                       le fait que (act 10)
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 14 in B1   the formation (reframe quoted)
//     lesson 15 in B1   the trigger inventory and « la bascule » (reframe
//                       quoted; rows 1201 to 1401 reused)
//     lesson 16 in B1   subjunctive against infinitive (reframe quoted)
//     lesson 31 in B1   de sorte que both ways, si bien que (rows reused)
//     lesson 32 in B1   bien que against même si (rows reused)
//     lesson 23 in B2   opinion verbs in argument (rows 1637 to 1651 reused;
//                       cited, never duplicated: that lesson owns the
//                       thesis, this one owns the mood)
//     lesson 5 in B2    the subjonctif passé FORM (« qu'il soit venu », « que
//                       j'aie vu »): read here, never built
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `opinions-et-avis` (fondations, a2-b2), sub-theme to set in
//     Postgres at import: « croire, douter, affirmer ». The seed (read
//     2026-09-27, 19,308 items) holds 768 rows in the theme: b1 575, a2 2,
//     b2 191 (the b2 ones at 039 to 1789, b2.23's block 1600-1789 included).
//     Nothing at or above 1790 in the seed.
//
//  2. ID BLOCK: `.1800`-`.1999`, assigned by the brief. Authored:
//     `.1800`-`.1981` with gaps between act blocks (see the act banners).
//     Nothing outside the block.
//
//  3. NO VOCAB-TYPE NON-SENTENCE ROW is authored: every row is a sentence,
//     a gapfill card or a rule card. So the flashcard hub's headword rule
//     (theme + headword) cannot clash with b2.23's phrase rows (« il est
//     peu probable que », « je suis convaincu que »…) or b1.15's. Every
//     `fr` was checked against the seed for an exact twin: none.
//
//  4. REUSED ROWS. B1 is live (v76) and b2.23 is live (v77), so `src()`
//     resolves lessons 15, 16, 31, 32 in B1 and lesson 23 in B2. Every
//     reused row carries flashcard AND voiceflash (measured), so
//     NOT_DECK_ABLE and NOT_SPEAKABLE are empty.
//
//  5. EVERY CONTRAST ROW USES A VERB WHOSE TWO MOODS SOUND OR LOOK
//     DIFFERENT (soit/est, puisse/peut, sache/sait, ait/a, fasse/fait,
//     vienne/vient, prenne/prend, réponde/répond, connaisse/connaît). A
//     regular -er verb in the singular (« qu'il transforme ») is the same in
//     both moods and teaches nothing; where one appears it is in a clause
//     whose mood is not the point.
//
//  6. RESPELLINGS SPELLED FOR THE NASAL CHECKER. « personne » pehr-SONN,
//     « peine » PENN, « pleine » PLENN, « vienne » VYENN, « prenne » PRENN,
//     « comprenne » kohⁿ-PRENN, « tienne » TYENN, « piétonne » pyay-TONN,
//     « gêne » ZHENN: the doubled consonant is for the checker, and the
//     French really does pronounce it. No U+203F anywhere, IPA included.
//
//  7. APOSTROPHES. Corpus rows and texts use the straight ' as b2.01 does.
//     The one `scenario` uses ’ only and embeds no corpus row.
//
//  8. REGISTER. Rows are `courant` except 1956 (« je ne crois pas qu'il est
//     venu », `familier`, the spoken variant) and 1933, 1941 (« si cher que
//     soit », the expletive ne: `soutenu`).
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
  id: 'b2.06',
  seq: 6,
  title: 'Subjunctive or Indicative?',
  sub: 'Subjonctif ou indicatif ?',
  canDo: 'Can choose between the subjunctive and the indicative by what the sentence does with the fact: assert it, doubt it, want it, look for it, judge it, concede it or place it in time; and can use the choice in a written reply that mixes certainty, doubt, wish and fact',
  prereqUnitIds: ['b1.14', 'b1.15', 'b1.16', 'b1.31', 'b1.32'],
} as const;

export const LESSON_ID = 'b2.06.l1';
export const THEME = 'opinions-et-avis';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[1800, 1999]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French, from the plan: a
 *  B1 unit id's number IS its trail position, and the B2 plan numbers b2.01
 *  to b2.34 in trail order. Only occupied positions are cited: B1 1-39,
 *  B2 1-8 (this publish) and 22-26.
 * ══════════════════════════════════════════════════════════════════════════ */

export const FORMATION_UNIT = 'b1.14';
export const DECL_UNIT = 'b1.15';
export const INF_UNIT = 'b1.16';
export const SUBORD_UNIT = 'b1.31';
export const CONCESSION_UNIT = 'b1.32';
export const ARG_UNIT = 'b2.23';
export const SUBJ_PASSE_UNIT = 'b2.05';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const FORMATION_REF = refFr(FORMATION_UNIT);
export const DECL_REF = refFr(DECL_UNIT);
export const INF_REF = refFr(INF_UNIT);
export const SUBORD_REF = refFr(SUBORD_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);
export const ARG_REF = refFr(ARG_UNIT);
export const SUBJ_PASSE_REF = refFr(SUBJ_PASSE_UNIT);
export const SUBJ_B1_RANGE_REF = 'les leçons 14 à 16 du B1';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B114_REFRAME, REFRAME_EN as B114_REFRAME_EN } from '../b1/subjonctif-formation-corpus.ts';
export { REFRAME as B115_REFRAME, REFRAME_EN as B115_REFRAME_EN } from '../b1/subjonctif-declencheurs-corpus.ts';
export { REFRAME as B116_REFRAME, REFRAME_EN as B116_REFRAME_EN } from '../b1/subjonctif-infinitif-corpus.ts';
export { REFRAME as B131_REFRAME, REFRAME_EN as B131_REFRAME_EN } from '../b1/subordination-corpus.ts';
export { REFRAME as B132_REFRAME, REFRAME_EN as B132_REFRAME_EN } from '../b1/concession-corpus.ts';
export { REFRAME as B223_REFRAME, REFRAME_EN as B223_REFRAME_EN } from './argumentation-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LA PIERRE POSÉE, LA PIERRE TENUE. The indicative puts the fact down on
 *  the table: « it is so ». The subjunctive holds the same fact up and
 *  looks at it: wants it, fears it, doubts it, looks for it, judges it,
 *  concedes it, waits for it. The fact can be perfectly real (« je suis
 *  content que tu sois là », « bien qu'il pleuve »): what the subjunctive
 *  says is that the sentence is not ASSERTING it, it is doing something
 *  else with it.
 *
 *  It is NOT « the subjunctive is for what is uncertain » (act 4: « il est
 *  probable que » is uncertain and takes the indicative, because the
 *  speaker commits; act 8: bien que concedes a certain fact), and it does
 *  NOT replace b1.15's reframe: the expression in front of que still
 *  decides wherever it decides alone. This reframe is for the places where
 *  the choice is open.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "L'indicatif affirme un fait ; le subjonctif le regarde sans l'affirmer.";
export const REFRAME_EN = 'The indicative asserts a fact; the subjunctive looks at it without asserting it.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Le subjonctif, c’est le mode de l’incertain.',
    why: 'False where acts 4 and 8 have to hold: « il est probable que le parc sera prêt » is uncertain and takes the indicative (the speaker commits), and « bien que la rue soit plus calme » is certain and takes the subjunctive (the speaker concedes). b1.15 rejected the same sentence for the same reason.',
  },
  {
    text: 'Négation ou question : subjonctif.',
    why: 'Act 3 contradicts it twice: « ne crois-tu pas qu’il a raison » is negative AND interrogative and takes the indicative, and « est-ce que tu crois qu’il viendra » is the ordinary question. A surface rule is exactly what B2 replaces.',
  },
  {
    text: 'Quand on hésite, le subjonctif est plus élégant.',
    why: 'It sends the learner straight into the famous trap of act 9 (« après qu’il soit parti ») and into « même si + subjonctif » (act 8). Elegance is not the criterion; what the sentence does with the fact is.',
  },
  {
    text: 'L’indicatif pour la réalité, le subjonctif pour l’imaginaire.',
    why: 'Nearly right, but false at « je comprends que tu sois déçu » (act 10: the disappointment is real) and at « c’est le seul architecte qui puisse sauver ce bâtiment » (act 6: a judgement about a real architect). « Sans l’affirmer » covers both; « imaginaire » does not.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-27, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const OA = (n: number) => `fr.b1.opinions-et-avis.${n}`;
const OA2 = (n: number) => `fr.b2.opinions-et-avis.${n}`;
const CL = (n: number) => `fr.b1.connecteurs-logiques.${n}`;

export const IMPORTED = {
  act1: [
    CL(1404),                        // Bien que le projet soit cher, je vote pour.  (lesson 32 in B1)
  ],
  act2: [
    OA(1201),                        // Il faut que tu viennes avec nous.  (lesson 15)
    OA(1205),                        // J’espère que tu viens avec nous.  (lesson 15)
    OA(1208),                        // Je ne pense pas que ce film soit trop long.  (lesson 15)
    OA(1213),                        // Il est important que tout le monde soit là à neuf heures.  (lesson 15)
    OA(1359),                        // Il me semble que cette adresse est fausse.  (lesson 15)
    OA(1400),                        // Je veux partir avant six heures.  (lesson 16)
    OA(1401),                        // Je veux que tu partes avant six heures.  (lesson 16)
    OA2(1637),                       // Je ne pense pas que les trottinettes soient dangereuses en elles-mêmes.  (lesson 23 in B2)
  ],
  act3: [
    OA(1302),                        // Je pense que cette route est plus courte.
    OA(1303),                        // Je ne pense pas que cette route soit plus courte.
    OA(1305),                        // Je ne crois pas que le magasin ouvre le dimanche.
    OA2(1651),                       // Croyez-vous que la direction puisse revenir en arrière ?  (lesson 23 in B2)
    OA2(1640),                       // Pensez-vous vraiment qu'interdire soit la seule solution ?  (lesson 23 in B2)
  ],
  act4: [
    OA(1376),                        // Il est possible que la salle soit libre jeudi.
    OA(1377),                        // Il est probable que la salle est libre jeudi.
    OA2(1649),                       // Il est certain que les longs trajets fatiguent.  (lesson 23 in B2)
    OA2(1639),                       // Il est peu probable que nous fassions de même.  (lesson 23 in B2)
    OA(1287),                        // Il semble que personne ne connaisse cette rue.
  ],
  act5: [
    'fr.b1.pronoms-essentiels.1191', // Je cherche une valise noire que je ne retrouve plus.  (lesson 11: a KNOWN object, indicative)
  ],
  act6: [] as string[],
  act7: [
    CL(1330),                        // Parle plus fort, de sorte que tout le monde t’entende.  (lesson 31: a goal)
    CL(1331),                        // Elle a parlé fort, de sorte que tout le monde l'a entendue.  (lesson 31: a result)
    CL(1268),                        // Le train était complet, si bien que nous avons pris le bus.
    CL(1321),                        // Je parle lentement pour que tout le monde comprenne.
  ],
  act8: [
    CL(1417),                        // Même si le loyer est cher, je reste dans ce quartier.  (lesson 32)
    CL(1435),                        // Bien que la salle soit petite, tout le monde est venu.  (lesson 32)
    CL(1422),                        // Même si j'étais riche, je resterais à Sherbrooke.  (lesson 32)
  ],
  act9: [
    CL(1339),                        // Après qu'il est parti, nous avons fermé le bureau.  (lesson 31)
    CL(1355),                        // Avant que le client arrive, range la salle.
    OA(1340),                        // Attends ici jusqu’à ce que je revienne.  (lesson 15)
  ],
  act10: [
    'fr.b1.emotions.1170',           // Je comprends que tu sois déçue.  (lesson 35: comprendre = accepter)
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. Measured: none. */
export const NOT_DECK_ABLE: readonly string[] = [];

/** No `voiceflash` in the seed: never in a `practice` speak section. Measured: none. */
export const NOT_SPEAKABLE: readonly string[] = [...NOT_DECK_ABLE];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `sent` a sentence; `gap` a gapfill card whose front gaps the verb and
 *  names the MEANING cue; `rule` a grammar card. Every row carries fr, en,
 *  ipa and respell. Corpus respellings carry no brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const GP = ['subjonctif-indicatif'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

const gap = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
  drills: Item['drills'] = FCVR,
): Row => sent(n, fr, en, ipa, respell, tags, drills, { cardType: 'gapfill', prompt, notes });

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LA PIERRE POSÉE (.1800-.1812) ─────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1800, 'Je cherche un appartement qui soit calme.', 'I am looking for a flat that is quiet.',
    '/ʒə ʃɛʁʃ œ̃.na.paʁ.tə.mɑ̃ ki swa kalm/', 'zhuh SHEHRSH | uhⁿ-na-par-tuh-MAHⁿ | kee swa KALM', ['scene', 'recherche'], FCVDR),
  sent(1801, 'Je cherche un appartement qui est calme.', 'I am looking for a flat, one that is quiet.',
    '/ʒə ʃɛʁʃ œ̃.na.paʁ.tə.mɑ̃ ki ɛ kalm/', 'zhuh SHEHRSH | uhⁿ-na-par-tuh-MAHⁿ | kee eh KALM', ['scene', 'existe']),
  sent(1802, 'Il est probable que le parc sera prêt au printemps.', 'The park will probably be ready in the spring.',
    '/i.lɛ pʁɔ.babl kə lə paʁk sə.ʁa pʁɛ o pʁɛ̃.tɑ̃/', 'ee-leh pro-BABL | kuh luh PARK suh-ra PREH | oh prehⁿ-TAHⁿ', ['lecture', 'affirme']),
  sent(1803, 'Il est possible que le parc soit prêt au printemps.', 'The park may be ready in the spring.',
    '/i.lɛ pɔ.sibl kə lə paʁk swa pʁɛ o pʁɛ̃.tɑ̃/', 'ee-leh po-SEEBL | kuh luh PARK swa PREH | oh prehⁿ-TAHⁿ', ['lecture', 'regarde'], FCVDR),
  sent(1804, "Je doute que les commerçants soient d'accord.", 'I doubt the shopkeepers agree.',
    '/ʒə dut kə le kɔ.mɛʁ.sɑ̃ swa da.kɔʁ/', 'zhuh DOOT | kuh lay ko-mehr-SAHⁿ | swa da-KOR', ['lecture', 'regarde']),
  sent(1805, 'Je sais que les commerçants sont inquiets.', 'I know the shopkeepers are worried.',
    '/ʒə sɛ kə le kɔ.mɛʁ.sɑ̃ sɔ̃.tɛ̃.kjɛ/', 'zhuh SEH | kuh lay ko-mehr-SAHⁿ | sohⁿ-tehⁿ-KYEH', ['lecture', 'affirme']),
  sent(1806, 'Même si le parc coûte cher, il en vaut la peine.', 'Even if the park costs a lot, it is worth it.',
    '/mɛm si lə paʁk kut ʃɛʁ il ɑ̃ vo la pɛn/', 'mem see luh PARK koot SHEHR | eel ahⁿ voh la PENN', ['lecture', 'affirme']),
  sent(1807, 'Il faut que la Ville fasse une vraie consultation.', 'The City has to hold a real consultation.',
    '/il fo kə la vil fas yn vʁɛ kɔ̃.syl.ta.sjɔ̃/', 'eel FOH | kuh la VEEL fass ün VREH | kohⁿ-sül-ta-SYOHⁿ', ['lecture', 'regarde']),
  rule(1808, REFRAME, REFRAME_EN,
    '/lɛ̃.di.ka.tif a.fiʁ.mœ̃ fɛ lə syb.ʒɔ̃k.tif lə ʁə.ɡaʁd sɑ̃ la.fiʁ.me/',
    'lehⁿ-dee-ka-TEEF | a-feer-muhⁿ FEH | luh süb-zhohⁿk-TEEF | luh ruh-GARD sahⁿ la-feer-MAY',
    'Indicatif ou subjonctif : quelle question te poses-tu ?',
    "Est-ce que la phrase affirme ce fait ? Si oui, l'indicatif. Si elle le veut, le craint, le doute, le cherche ou le concède, le subjonctif.",
    ['reframe']),
  sent(1809, 'Après que la consultation a eu lieu, la Ville a publié le plan.', 'After the consultation had taken place, the City published the plan.',
    '/a.pʁɛ kə la kɔ̃.syl.ta.sjɔ̃ a y ljø la vil a py.bli.je lə plɑ̃/', 'a-preh kuh la kohⁿ-sül-ta-SYOHⁿ | a ü LYEU | la VEEL a pü-blee-YAY luh PLAHⁿ', ['lecture', 'affirme']),
  sent(1810, "Je cherche quelqu'un qui puisse traduire l'avis de la Ville.", 'I am looking for someone who can translate the City’s notice.',
    '/ʒə ʃɛʁʃ kɛl.kœ̃ ki pɥis tʁa.dɥiʁ la.vi də la vil/', 'zhuh SHEHRSH kel-KUHⁿ | kee pwees tra-DWEER | la-VEE duh la VEEL', ['lecture', 'regarde']),
  sent(1811, 'C\'est le seul projet qui puisse sauver la rue.', 'It is the only project that could save the street.',
    '/sɛ lə sœl pʁɔ.ʒɛ ki pɥis so.ve la ʁy/', 'seh luh suhl pro-ZHEH | kee pwees soh-VAY la RÜ', ['lecture', 'regarde']),
  sent(1812, 'Je ne crois pas que la Ville puisse tout financer seule.', 'I do not think the City can pay for it all on its own.',
    '/ʒə nə kʁwa pa kə la vil pɥis tu fi.nɑ̃.se sœl/', 'zhuh nuh krwa PA | kuh la VEEL pwees too fee-nahⁿ-SAY | SUHL', ['lecture', 'regarde'], FCVDR),
];

/* ── ACT 2 · CE QUE LE B1 T'A DONNÉ (.1815-.1822) ─────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1815, 'J\'espère que la mairie tiendra parole.', 'I hope the council will keep its word.',
    '/ʒɛs.pɛʁ kə la mɛ.ʁi tjɛ̃.dʁa pa.ʁɔl/', 'zhehs-PEHR | kuh la meh-REE | tyehⁿ-dra pa-ROL', ['rappel', 'affirme']),
  sent(1816, "Il me semble que le quartier a besoin d'un parc.", 'It seems to me that the neighbourhood needs a park.',
    '/il mə sɑ̃bl kə lə kaʁ.tje a bə.zwɛ̃ dœ̃ paʁk/', 'eel muh SAHⁿBL | kuh luh kar-TYAY | a buh-zwehⁿ duhⁿ PARK', ['rappel', 'affirme'], FCVDR),
  sent(1817, "Il semble que le quartier ait besoin d'un parc.", 'It seems that the neighbourhood needs a park.',
    '/il sɑ̃bl kə lə kaʁ.tje ɛ bə.zwɛ̃ dœ̃ paʁk/', 'eel SAHⁿBL | kuh luh kar-TYAY | eh buh-zwehⁿ duhⁿ PARK', ['rappel', 'regarde']),
  sent(1818, 'Je suis ravie que le projet soit enfin lancé.', 'I am delighted the project has finally been launched.',
    '/ʒə sɥi ʁa.vi kə lə pʁɔ.ʒɛ swa.tɑ̃.fɛ̃ lɑ̃.se/', 'zhuh swee ra-VEE | kuh luh pro-ZHEH | swa-tahⁿ-fehⁿ lahⁿ-SAY', ['rappel', 'sentiment']),
  sent(1819, 'Les habitants veulent que la rue devienne piétonne.', 'The residents want the street to become pedestrian.',
    '/le.za.bi.tɑ̃ vœl kə la ʁy də.vjɛn pje.tɔn/', 'lay-za-bee-TAHⁿ VUHL | kuh la RÜ | duh-vyenn pyay-TONN', ['rappel', 'volonte']),
  sent(1820, 'Les habitants veulent rendre la rue aux piétons.', 'The residents want to give the street back to pedestrians.',
    '/le.za.bi.tɑ̃ vœl ʁɑ̃dʁ la ʁy o pje.tɔ̃/', 'lay-za-bee-TAHⁿ VUHL | rahⁿdr la RÜ | oh pyay-TOHⁿ', ['rappel', 'infinitif']),
  sent(1821, "Parce que la rue est dangereuse, les parents s'inquiètent.", 'Because the street is dangerous, parents worry.',
    '/paʁs kə la ʁy ɛ dɑ̃ʒ.ʁøz le pa.ʁɑ̃ sɛ̃.kjɛt/', 'pars kuh la RÜ eh dahⁿzh-REUZ | lay pa-RAHⁿ sehⁿ-KYET', ['rappel', 'affirme']),
  rule(1822, 'Avant de choisir, demande-toi si la phrase affirme le fait.', 'Before choosing, ask yourself whether the sentence asserts the fact.',
    '/a.vɑ̃ də ʃwa.ziʁ də.mɑ̃d.twa si la fʁaz a.fiʁm lə fɛ/', 'a-vahⁿ duh shwa-ZEER | duh-mahⁿd-TWA | see la FRAHZ | a-feerm luh FEH',
    'Au B2, quelle question poses-tu en premier ?',
    "La liste du B1 reste vraie. Là où elle laisse le choix, c'est le sens qui tranche : affirmer le fait, ou non.",
    ['rappel']),
];

/* ── ACT 3 · PENSER, CROIRE, ÊTRE SÛR (.1825-.1843) ───────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1825, "Je crois qu'il viendra à la réunion.", 'I think he will come to the meeting.',
    '/ʒə kʁwa kil vjɛ̃.dʁa a la ʁe.y.njɔ̃/', 'zhuh KRWA | keel vyehⁿ-DRA | a la ray-ü-NYOHⁿ', ['opinion', 'affirmative']),
  sent(1826, "Je ne crois pas qu'il vienne à la réunion.", 'I do not think he will come to the meeting.',
    '/ʒə nə kʁwa pa kil vjɛn a la ʁe.y.njɔ̃/', 'zhuh nuh krwa PA | keel VYENN | a la ray-ü-NYOHⁿ', ['opinion', 'negative'], FCVDR),
  sent(1827, "Crois-tu qu'il vienne à la réunion ?", 'Do you really think he will come to the meeting?',
    '/kʁwa.ty kil vjɛn a la ʁe.y.njɔ̃/', 'krwa-TÜ | keel VYENN | a la ray-ü-NYOHⁿ', ['opinion', 'inversion', 'doute']),
  sent(1828, "Crois-tu qu'il viendra à la réunion ?", 'Do you think he will come to the meeting?',
    '/kʁwa.ty kil vjɛ̃.dʁa a la ʁe.y.njɔ̃/', 'krwa-TÜ | keel vyehⁿ-DRA | a la ray-ü-NYOHⁿ', ['opinion', 'inversion', 'avis']),
  sent(1829, "Tu crois qu'il viendra ?", 'Do you think he will come?',
    '/ty kʁwa kil vjɛ̃.dʁa/', 'tü KRWA | keel vyehⁿ-DRA', ['opinion', 'intonation']),
  sent(1830, "Est-ce que tu crois qu'il viendra ?", 'Do you think he will come?',
    '/ɛs.kə ty kʁwa kil vjɛ̃.dʁa/', 'ehs-kuh tü KRWA | keel vyehⁿ-DRA', ['opinion', 'est-ce-que']),
  sent(1831, "Ne crois-tu pas qu'il a raison ?", 'Do you not think he is right?',
    '/nə kʁwa.ty pa ki.la ʁɛ.zɔ̃/', 'nuh krwa-tü PA | kee-la reh-ZOHⁿ', ['opinion', 'question-negative'], FCVDR),
  sent(1832, 'Es-tu sûr que le bureau soit fermé ?', 'Are you sure the office is closed?',
    '/ɛ.ty syʁ kə lə by.ʁo swa fɛʁ.me/', 'eh-tü SÜR | kuh luh bü-ROH | swa fehr-MAY', ['opinion', 'inversion', 'doute']),
  sent(1833, 'Je suis sûre que le bureau est fermé.', 'I am sure the office is closed.',
    '/ʒə sɥi syʁ kə lə by.ʁo ɛ fɛʁ.me/', 'zhuh swee SÜR | kuh luh bü-ROH | eh fehr-MAY', ['opinion', 'affirmative']),
  sent(1834, 'Pensez-vous que ce plan soit réaliste ?', 'Do you think this plan is realistic?',
    '/pɑ̃.se.vu kə sə plɑ̃ swa ʁe.a.list/', 'pahⁿ-say-VOO | kuh suh PLAHⁿ | swa ray-a-LEEST', ['opinion', 'inversion']),
  sent(1835, "Je ne doute pas qu'elle réussira.", 'I have no doubt she will succeed.',
    '/ʒə nə dut pa kɛl ʁe.y.si.ʁa/', 'zhuh nuh doot PA | kel ray-ü-see-RA', ['opinion', 'certitude']),
  sent(1836, "Je doute qu'elle réussisse.", 'I doubt she will succeed.',
    '/ʒə dut kɛl ʁe.y.sis/', 'zhuh DOOT | kel ray-ü-SEESS', ['opinion', 'doute'], FCVDR),
  sent(1837, "Je ne suis pas sûr qu'elle ait le temps.", 'I am not sure she has the time.',
    '/ʒə nə sɥi pa syʁ kɛ.lɛ lə tɑ̃/', 'zhuh nuh swee pa SÜR | keh-leh luh TAHⁿ', ['opinion', 'negative']),
  rule(1838, "Avec l'inversion, le subjonctif doute ; l'indicatif demande un avis.", 'With inversion, the subjunctive doubts; the indicative asks for an opinion.',
    '/a.vɛk lɛ̃.vɛʁ.sjɔ̃ lə syb.ʒɔ̃k.tif dut lɛ̃.di.ka.tif də.mɑ̃d œ̃.na.vi/', 'a-vek lehⁿ-vehr-SYOHⁿ | luh süb-zhohⁿk-TEEF DOOT | lehⁿ-dee-ka-TEEF | duh-mahⁿd uhⁿ-na-VEE',
    "Crois-tu qu'il vienne, crois-tu qu'il viendra : quelle différence ?",
    "Qu'il vienne : tu en doutes toi-même. Qu'il viendra : tu demandes simplement ce que l'autre pense.",
    ['inversion']),
  rule(1839, "Une question négative affirme : ne crois-tu pas qu'il a raison ?", 'A negative question asserts: do you not think he is right?',
    '/yn kɛs.tjɔ̃ ne.ɡa.tiv a.fiʁm nə kʁwa.ty pa ki.la ʁɛ.zɔ̃/', 'ün kes-tyohⁿ nay-ga-TEEV a-FEERM | nuh krwa-tü PA | kee-la reh-ZOHⁿ',
    'Ne crois-tu pas que… : quel mode ?',
    "L'indicatif. Tu ne doutes pas : tu invites l'autre à te donner raison.",
    ['question-negative']),
  gap(1840, 'Je ne pense pas que ce soit une bonne idée.', 'I do not think it is a good idea.',
    '/ʒə nə pɑ̃s pa kə sə swa.tyn bɔ.ni.de/', 'zhuh nuh pahⁿs PA | kuh suh swa-tün bo-nee-DAY',
    'Je ne pense pas que ce ___ une bonne idée. (être · une opinion niée)',
    "Nier son opinion, c'est ne pas affirmer : subjonctif. EN: a denied opinion takes the subjunctive.",
    ['opinion', 'negative'], FCVDR),
  gap(1841, 'Ne trouves-tu pas que ce quartier est plus agréable ?', 'Do you not find this neighbourhood nicer?',
    '/nə tʁuv.ty pa kə sə kaʁ.tje ɛ ply.za.ɡʁe.abl/', 'nuh troov-tü PA | kuh suh kar-TYAY | eh plü-za-gray-ABL',
    'Ne trouves-tu pas que ce quartier ___ plus agréable ? (être · une question négative)',
    "La question négative cherche ton accord : indicatif. EN: a negative question invites agreement.",
    ['opinion', 'question-negative']),
  sent(1842, 'Je reconnais que tu as raison, mais je doute que ce soit si simple.', 'I grant that you are right, but I doubt it is that simple.',
    '/ʒə ʁə.kɔ.nɛ kə ty a ʁɛ.zɔ̃ mɛ ʒə dut kə sə swa si sɛ̃pl/', 'zhuh ruh-ko-NEH | kuh tü a reh-ZOHⁿ | meh zhuh DOOT | kuh suh swa see SEHⁿPL', ['opinion', 'deux-modes']),
  sent(1843, "Penses-tu vraiment qu'ils puissent accepter ?", 'Do you really think they could accept?',
    '/pɑ̃s.ty vʁɛ.mɑ̃ kil pɥis.tak.sɛp.te/', 'pahⁿs-TÜ vreh-MAHⁿ | keel pwees-tak-sehp-TAY', ['opinion', 'inversion', 'doute']),
];

/* ── ACT 4 · CERTAIN, PROBABLE, POSSIBLE (.1846-.1861) ────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1846, 'Il est clair que la circulation va baisser.', 'It is clear that traffic is going to fall.',
    '/i.lɛ klɛʁ kə la siʁ.ky.la.sjɔ̃ va bɛ.se/', 'ee-leh KLEHR | kuh la seer-kü-la-SYOHⁿ | va beh-SAY', ['echelle', 'certain']),
  sent(1847, "Il n'est pas clair que la circulation puisse baisser.", 'It is not clear that traffic can fall.',
    '/il nɛ pa klɛʁ kə la siʁ.ky.la.sjɔ̃ pɥis bɛ.se/', 'eel neh pa KLEHR | kuh la seer-kü-la-SYOHⁿ | pwees beh-SAY', ['echelle', 'nie']),
  sent(1848, 'Il est probable que les loyers vont augmenter.', 'Rents are probably going to go up.',
    '/i.lɛ pʁɔ.babl kə le lwa.je vɔ̃.tɔɡ.mɑ̃.te/', 'ee-leh pro-BABL | kuh lay lwa-YAY | vohⁿ-tog-mahⁿ-TAY', ['echelle', 'probable'], FCVDR),
  sent(1849, 'Il est peu probable que les loyers soient gelés.', 'Rents are unlikely to be frozen.',
    '/i.lɛ pø pʁɔ.babl kə le lwa.je swa ʒə.le/', 'ee-leh peu pro-BABL | kuh lay lwa-YAY | swa zhuh-LAY', ['echelle', 'peu-probable']),
  sent(1850, 'Il se peut que la mairie revienne sur sa décision.', 'The council may go back on its decision.',
    '/il sə pø kə la mɛ.ʁi ʁə.vjɛn syʁ sa de.si.zjɔ̃/', 'eel suh PEU | kuh la meh-REE ruh-VYENN | sür sa day-see-ZYOHⁿ', ['echelle', 'possible'], FCVDR),
  sent(1851, "Il paraît que la mairie a changé d'avis.", 'Apparently the council has changed its mind.',
    '/il pa.ʁɛ kə la mɛ.ʁi a ʃɑ̃.ʒe da.vi/', 'eel pa-REH | kuh la meh-REE | a shahⁿ-zhay da-VEE', ['echelle', 'rumeur']),
  sent(1852, 'Sans doute que la mairie attendra les élections.', 'The council will no doubt wait for the elections.',
    '/sɑ̃ dut kə la mɛ.ʁi a.tɑ̃.dʁa le.ze.lɛk.sjɔ̃/', 'sahⁿ DOOT | kuh la meh-REE | a-tahⁿ-DRA lay-zay-lek-SYOHⁿ', ['echelle', 'sans-doute']),
  sent(1853, 'Peut-être que le chantier prendra du retard.', 'Perhaps the building work will fall behind.',
    '/pø.tɛtʁ kə lə ʃɑ̃.tje pʁɑ̃.dʁa dy ʁə.taʁ/', 'peu-TEHTR | kuh luh shahⁿ-TYAY | prahⁿ-DRA dü ruh-TAR', ['echelle', 'peut-etre']),
  sent(1854, "Il est exclu que les travaux soient finis avant l'été.", 'There is no way the work will be finished before the summer.',
    '/i.lɛ.tɛks.kly kə le tʁa.vo swa fi.ni a.vɑ̃ le.te/', 'ee-leh-teks-KLÜ | kuh lay tra-VOH | swa fee-NEE a-vahⁿ lay-TAY', ['echelle', 'exclu']),
  sent(1855, 'Il est vrai que la place est brûlante en été.', 'It is true that the square is scorching in summer.',
    '/i.lɛ vʁɛ kə la plas ɛ bʁy.lɑ̃.tɑ̃.ne.te/', 'ee-leh VREH | kuh la PLASS | eh brü-lahⁿ-tahⁿ-nay-TAY', ['echelle', 'vrai']),
  sent(1856, 'Il semble que les habitants soient partagés.', 'It seems the residents are divided.',
    '/il sɑ̃bl kə le.za.bi.tɑ̃ swa paʁ.ta.ʒe/', 'eel SAHⁿBL | kuh lay-za-bee-TAHⁿ | swa par-ta-ZHAY', ['echelle', 'il-semble'], FCVDR),
  sent(1857, 'Il me semble que les habitants sont partagés.', 'It seems to me the residents are divided.',
    '/il mə sɑ̃bl kə le.za.bi.tɑ̃ sɔ̃ paʁ.ta.ʒe/', 'eel muh SAHⁿBL | kuh lay-za-bee-TAHⁿ | sohⁿ par-ta-ZHAY', ['echelle', 'il-me-semble']),
  sent(1858, "Il n'est pas certain que le budget suffise.", 'It is not certain the budget will be enough.',
    '/il nɛ pa sɛʁ.tɛ̃ kə lə byd.ʒɛ sy.fiz/', 'eel neh pa sehr-TEHⁿ | kuh luh büd-ZHEH sü-FEEZ', ['echelle', 'nie']),
  rule(1859, "Certain et probable affirment ; possible et peu probable n'affirment pas.", 'Certain and probable assert; possible and unlikely do not.',
    '/sɛʁ.tɛ̃ e pʁɔ.babl a.fiʁm pɔ.sibl e pø pʁɔ.babl na.fiʁm pa/', 'sehr-TEHⁿ ay pro-BABL a-FEERM | po-SEEBL ay peu pro-BABL | na-feerm PA',
    'Il est probable que, il est possible que : pourquoi deux modes ?',
    "Avec probable, tu t'engages sur le fait : indicatif. Avec possible, tu l'envisages seulement : subjonctif.",
    ['echelle']),
  gap(1860, 'Il est probable que la réunion aura lieu jeudi.', 'The meeting will probably take place on Thursday.',
    '/i.lɛ pʁɔ.babl kə la ʁe.y.njɔ̃ o.ʁa ljø ʒø.di/', 'ee-leh pro-BABL | kuh la ray-ü-NYOHⁿ | oh-ra LYEU zheu-DEE',
    'Il est probable que la réunion ___ lieu jeudi. (avoir · tu t\'engages)',
    "Probable : tu affirmes, au futur si c'est à venir. EN: probable asserts, so indicative.",
    ['echelle', 'probable'], FCVDR),
  gap(1861, 'Il est possible que la réunion ait lieu jeudi.', 'The meeting may take place on Thursday.',
    '/i.lɛ pɔ.sibl kə la ʁe.y.njɔ̃ ɛ ljø ʒø.di/', 'ee-leh po-SEEBL | kuh la ray-ü-NYOHⁿ | eh LYEU zheu-DEE',
    'Il est possible que la réunion ___ lieu jeudi. (avoir · tu envisages)',
    "Possible : tu n'affirmes pas. EN: possible takes the subjunctive.",
    ['echelle', 'possible']),
];

/* ── ACT 5 · CHERCHER OU AVOIR TROUVÉ (.1864-.1880) ───────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1864, 'Je cherche une colocataire qui sache cuisiner.', 'I am looking for a flatmate who can cook.',
    '/ʒə ʃɛʁʃ yn kɔ.lɔ.ka.tɛʁ ki saʃ kɥi.zi.ne/', 'zhuh SHEHRSH | ün ko-lo-ka-TEHR | kee SASH kwee-zee-NAY', ['recherche', 'cherche'], FCVDR),
  sent(1865, "J'ai trouvé une colocataire qui sait cuisiner.", 'I have found a flatmate who can cook.',
    '/ʒe tʁu.ve yn kɔ.lɔ.ka.tɛʁ ki sɛ kɥi.zi.ne/', 'zhay troo-VAY | ün ko-lo-ka-TEHR | kee SEH kwee-zee-NAY', ['recherche', 'existe']),
  sent(1866, 'Connais-tu un restaurant qui soit ouvert le lundi ?', 'Do you know of a restaurant that is open on Mondays?',
    '/kɔ.nɛ.ty œ̃ ʁɛs.to.ʁɑ̃ ki swa.tu.vɛʁ lə lœ̃.di/', 'ko-neh-TÜ uhⁿ res-toh-RAHⁿ | kee swa-too-VEHR | luh luhⁿ-DEE', ['recherche', 'question']),
  sent(1867, 'Je connais un restaurant qui est ouvert le lundi.', 'I know a restaurant that is open on Mondays.',
    '/ʒə kɔ.nɛ œ̃ ʁɛs.to.ʁɑ̃ ki ɛ.tu.vɛʁ lə lœ̃.di/', 'zhuh ko-NEH uhⁿ res-toh-RAHⁿ | kee eh-too-VEHR | luh luhⁿ-DEE', ['recherche', 'existe']),
  sent(1868, "Il n'y a personne ici qui puisse m'aider.", 'There is nobody here who can help me.',
    '/il nja pɛʁ.sɔn i.si ki pɥis mɛ.de/', 'eel nya pehr-SONN ee-SEE | kee pwees meh-DAY', ['recherche', 'nie'], FCVDR),
  sent(1869, "Il y a quelqu'un ici qui peut m'aider.", 'There is someone here who can help me.',
    '/il i.ja kɛl.kœ̃ i.si ki pø mɛ.de/', 'eel ee-YA kel-KUHⁿ ee-SEE | kee peu meh-DAY', ['recherche', 'existe']),
  sent(1870, 'Nous cherchons une salle qui puisse accueillir cent personnes.', 'We are looking for a hall that can hold a hundred people.',
    '/nu ʃɛʁ.ʃɔ̃ yn sal ki pɥis.a.kœ.jiʁ sɑ̃ pɛʁ.sɔn/', 'noo shehr-SHOHⁿ ün SAL | kee pwees-a-kuh-YEER | sahⁿ pehr-SONN', ['recherche', 'cherche']),
  sent(1871, 'Je ne connais aucun médecin qui fasse des visites à domicile.', 'I do not know a single doctor who does home visits.',
    '/ʒə nə kɔ.nɛ.zo.kœ̃ med.sɛ̃ ki fas de vi.zit a dɔ.mi.sil/', 'zhuh nuh ko-neh-zoh-KUHⁿ med-SEHⁿ | kee FASS | day vee-ZEET a do-mee-SEEL', ['recherche', 'nie']),
  sent(1872, "Y a-t-il quelqu'un qui sache où sont les clés ?", 'Is there anyone who knows where the keys are?',
    '/i.ja.til kɛl.kœ̃ ki saʃ u sɔ̃ le kle/', 'ee-ya-TEEL kel-KUHⁿ | kee SASH | oo sohⁿ lay KLAY', ['recherche', 'question']),
  sent(1873, 'Elle veut un travail qui lui permette de voyager.', 'She wants a job that lets her travel.',
    '/ɛl vø œ̃ tʁa.vaj ki lɥi pɛʁ.mɛt də vwa.ja.ʒe/', 'el veu uhⁿ tra-VAY | kee lwee pehr-MET | duh vwa-ya-ZHAY', ['recherche', 'souhait']),
  sent(1874, 'Elle a un travail qui lui permet de voyager.', 'She has a job that lets her travel.',
    '/ɛ.la œ̃ tʁa.vaj ki lɥi pɛʁ.mɛ də vwa.ja.ʒe/', 'eh-la uhⁿ tra-VAY | kee lwee pehr-MEH | duh vwa-ya-ZHAY', ['recherche', 'existe']),
  rule(1875, "Si la chose existe, l'indicatif ; si tu la cherches ou la nies, le subjonctif.", 'If the thing exists, the indicative; if you are looking for it or denying it, the subjunctive.',
    '/si la ʃoz ɛɡ.zist lɛ̃.di.ka.tif si ty la ʃɛʁʃ u la ni lə syb.ʒɔ̃k.tif/', 'see la SHOHZ eg-ZEEST | lehⁿ-dee-ka-TEEF | see tü la SHEHRSH oo la NEE | luh süb-zhohⁿk-TEEF',
    'Dans une relative, qu’est-ce qui décide du mode ?',
    "Si tu affirmes que la chose existe, l'indicatif. Si tu la cherches, la souhaites ou dis qu'elle n'existe pas, le subjonctif.",
    ['recherche']),
  gap(1876, "Nous cherchons un logement qui soit proche de l'école.", 'We are looking for a place to live that is near the school.',
    '/nu ʃɛʁ.ʃɔ̃ œ̃ lɔʒ.mɑ̃ ki swa pʁɔʃ də le.kɔl/', 'noo shehr-SHOHⁿ uhⁿ lozh-MAHⁿ | kee swa PROSH | duh lay-KOL',
    "Nous cherchons un logement qui ___ proche de l'école. (être · pas encore trouvé)",
    "Le logement n'existe pas encore pour toi : subjonctif. EN: not yet found, so subjunctive.",
    ['recherche', 'cherche'], FCVDR),
  gap(1877, "Nous avons trouvé un logement qui est proche de l'école.", 'We have found a place to live that is near the school.',
    '/nu.za.vɔ̃ tʁu.ve œ̃ lɔʒ.mɑ̃ ki ɛ pʁɔʃ də le.kɔl/', 'noo-za-vohⁿ troo-VAY uhⁿ lozh-MAHⁿ | kee eh PROSH | duh lay-KOL',
    "Nous avons trouvé un logement qui ___ proche de l'école. (être · trouvé)",
    "Il existe, tu l'affirmes : indicatif. EN: it exists, so indicative.",
    ['recherche', 'existe']),
  sent(1878, "Il n'y a rien qui puisse la faire changer d'avis.", 'There is nothing that could make her change her mind.',
    '/il nja ʁjɛ̃ ki pɥis la fɛʁ ʃɑ̃.ʒe da.vi/', 'eel nya RYEHⁿ | kee pwees la fehr shahⁿ-ZHAY da-VEE', ['recherche', 'nie']),
  sent(1879, "Je cherche le dossier que tu m'as envoyé hier.", 'I am looking for the file you sent me yesterday.',
    '/ʒə ʃɛʁʃ lə do.sje kə ty ma.zɑ̃.vwa.je jɛʁ/', 'zhuh SHEHRSH luh do-SYAY | kuh tü ma-zahⁿ-vwa-YAY | YEHR', ['recherche', 'connu']),
  sent(1880, "Trouve-moi quelqu'un qui connaisse bien le quartier.", 'Find me someone who knows the neighbourhood well.',
    '/tʁuv.mwa kɛl.kœ̃ ki kɔ.nɛs bjɛ̃ lə kaʁ.tje/', 'troov-MWA kel-KUHⁿ | kee ko-NESS | byehⁿ luh kar-TYAY', ['recherche', 'cherche']),
];

/* ── ACT 6 · LE SEUL, LE PREMIER, LE MEILLEUR (.1883-.1898) ──────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1883, "C'est le seul architecte qui puisse sauver ce bâtiment.", 'He is the only architect who could save this building.',
    '/sɛ lə sœl aʁ.ʃi.tɛkt ki pɥis so.ve sə ba.ti.mɑ̃/', 'seh luh suhl ar-shee-TEKT | kee pwees soh-VAY | suh ba-tee-MAHⁿ', ['superlatif', 'juge'], FCVDR),
  sent(1884, "C'est le seul architecte qui a répondu à l'appel d'offres.", 'He is the only architect who answered the call for tenders.',
    '/sɛ lə sœl aʁ.ʃi.tɛkt ki a ʁe.pɔ̃.dy a la.pɛl dɔfʁ/', 'seh luh suhl ar-shee-TEKT | kee a ray-pohⁿ-DÜ | a la-pel DOFR', ['superlatif', 'constate']),
  sent(1885, "C'est le meilleur film que j'aie vu cette année.", 'It is the best film I have seen this year.',
    '/sɛ lə mɛ.jœʁ film kə ʒɛ vy sɛ.ta.ne/', 'seh luh meh-yuhr FEELM | kuh zheh VÜ | seh-ta-NAY', ['superlatif', 'juge']),
  sent(1886, "C'est le meilleur film que j'ai vu cette année.", 'It is the best film I saw this year.',
    '/sɛ lə mɛ.jœʁ film kə ʒe vy sɛ.ta.ne/', 'seh luh meh-yuhr FEELM | kuh zhay VÜ | seh-ta-NAY', ['superlatif', 'constate']),
  sent(1887, 'Marc a été le premier à arriver.', 'Marc was the first to arrive.',
    '/maʁk a e.te lə pʁə.mje a a.ʁi.ve/', 'MARK a ay-TAY | luh pruh-MYAY | a a-ree-VAY', ['superlatif', 'infinitif']),
  sent(1888, "C'est la seule boulangerie du quartier qui est ouverte le dimanche.", 'It is the only bakery in the neighbourhood that is open on Sundays.',
    '/sɛ la sœl bu.lɑ̃ʒ.ʁi dy kaʁ.tje ki ɛ.tu.vɛʁt lə di.mɑ̃ʃ/', 'seh la suhl boo-lahⁿzh-REE dü kar-TYAY | kee eh-too-VEHRT | luh dee-MAHⁿSH', ['superlatif', 'constate']),
  sent(1889, "C'est la seule personne qui me comprenne vraiment.", 'She is the only person who really understands me.',
    '/sɛ la sœl pɛʁ.sɔn ki mə kɔ̃.pʁɛn vʁɛ.mɑ̃/', 'seh la suhl pehr-SONN | kee muh kohⁿ-PRENN | vreh-MAHⁿ', ['superlatif', 'juge'], FCVDR),
  sent(1890, "C'est le plus beau quartier que je connaisse.", 'It is the most beautiful neighbourhood I know.',
    '/sɛ lə ply bo kaʁ.tje kə ʒə kɔ.nɛs/', 'seh luh plü boh kar-TYAY | kuh zhuh ko-NESS', ['superlatif', 'juge']),
  sent(1891, "C'est le dernier cinéma qui est encore ouvert dans le centre.", 'It is the last cinema still open in the centre.',
    '/sɛ lə dɛʁ.nje si.ne.ma ki ɛ.tɑ̃.kɔʁ u.vɛʁ dɑ̃ lə sɑ̃tʁ/', 'seh luh dehr-NYAY see-nay-MA | kee eh-tahⁿ-KOR oo-VEHR | dahⁿ luh SAHⁿTR', ['superlatif', 'constate']),
  sent(1892, "C'est l'unique solution qui soit à la fois simple et juste.", 'It is the one solution that is both simple and fair.',
    '/sɛ ly.nik sɔ.ly.sjɔ̃ ki swa.ta la fwa sɛ̃pl e ʒyst/', 'seh lü-NEEK so-lü-SYOHⁿ | kee swa-ta la FWA | sehⁿpl ay ZHÜST', ['superlatif', 'juge']),
  rule(1893, "Après le seul, le premier, le meilleur : le subjonctif juge, l'indicatif constate.", 'After le seul, le premier, le meilleur: the subjunctive judges, the indicative states.',
    '/a.pʁɛ lə sœl lə pʁə.mje lə mɛ.jœʁ lə syb.ʒɔ̃k.tif ʒyʒ lɛ̃.di.ka.tif kɔ̃s.tat/', 'a-preh luh SUHL | luh pruh-MYAY | luh meh-YUHR | luh süb-zhohⁿk-TEEF ZHÜZH | lehⁿ-dee-ka-TEEF kohⁿs-TAT',
    'Le seul qui puisse, le seul qui peut : quelle différence ?',
    "Qui puisse : c'est ton jugement. Qui peut : c'est un fait vérifiable, comme un horaire ou un classement.",
    ['superlatif']),
  gap(1894, "C'est le seul élu qui connaisse vraiment le dossier.", 'He is the only councillor who really knows the file.',
    '/sɛ lə sœl e.ly ki kɔ.nɛs vʁɛ.mɑ̃ lə do.sje/', 'seh luh suhl ay-LÜ | kee ko-NESS | vreh-MAHⁿ luh do-SYAY',
    "C'est le seul élu qui ___ vraiment le dossier. (connaître · ton jugement)",
    "Tu juges : subjonctif. EN: a judgement, so subjunctive.",
    ['superlatif', 'juge']),
  gap(1895, "C'est le seul bus qui va jusqu'au lac.", 'It is the only bus that goes as far as the lake.',
    '/sɛ lə sœl bys ki va ʒys.ko lak/', 'seh luh suhl BÜSS | kee va zhüs-koh LAK',
    "C'est le seul bus qui ___ jusqu'au lac. (aller · un fait d'horaire)",
    "Un fait qu'on vérifie sur le plan : indicatif. EN: a checkable fact, so indicative.",
    ['superlatif', 'constate'], FCVDR),
  sent(1896, 'Elle a été la dernière à quitter la salle.', 'She was the last to leave the room.',
    '/ɛ.la e.te la dɛʁ.njɛʁ a ki.te la sal/', 'eh-la ay-TAY | la dehr-NYEHR | a kee-TAY la SAL', ['superlatif', 'infinitif']),
  sent(1897, 'Ce parc est le seul endroit où les enfants puissent jouer sans danger.', 'This park is the only place where children can play safely.',
    '/sə paʁk ɛ lə sœl ɑ̃.dʁwa u le.zɑ̃.fɑ̃ pɥis ʒu.e sɑ̃ dɑ̃.ʒe/', 'suh PARK eh luh suhl ahⁿ-DRWA | oo lay-zahⁿ-FAHⁿ pwees zhoo-AY | sahⁿ dahⁿ-ZHAY', ['superlatif', 'juge']),
  sent(1898, "C'est le seul endroit du quartier où il y a de l'ombre.", 'It is the only place in the neighbourhood where there is shade.',
    '/sɛ lə sœl ɑ̃.dʁwa dy kaʁ.tje u il i.ja də lɔ̃bʁ/', 'seh luh suhl ahⁿ-DRWA dü kar-TYAY | oo eel ee-YA duh LOHⁿBR', ['superlatif', 'constate']),
];

/* ── ACT 7 · LE BUT OU LE RÉSULTAT (.1901-.1916) ──────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1901, 'La ville ferme la rue pour que les enfants puissent jouer.', 'The town is closing the street so that the children can play.',
    '/la vil fɛʁm la ʁy puʁ kə le.zɑ̃.fɑ̃ pɥis ʒu.e/', 'la VEEL fehrm la RÜ | poor kuh lay-zahⁿ-FAHⁿ | pwees zhoo-AY', ['but'], FCVDR),
  sent(1902, 'La ville a fermé la rue, si bien que les enfants peuvent jouer.', 'The town has closed the street, so the children can play.',
    '/la vil a fɛʁ.me la ʁy si bjɛ̃ kə le.zɑ̃.fɑ̃ pœv ʒu.e/', 'la VEEL a fehr-MAY la RÜ | see byehⁿ kuh lay-zahⁿ-FAHⁿ | puhv zhoo-AY', ['resultat']),
  sent(1903, 'Installez des bancs de sorte que les personnes âgées puissent se reposer.', 'Put benches in so that older people can rest.',
    '/ɛ̃s.ta.le de bɑ̃ də sɔʁt kə le pɛʁ.sɔ.na.ʒe pɥis sə ʁə.po.ze/', 'ehⁿs-ta-LAY day BAHⁿ | duh sort kuh lay pehr-so-na-ZHAY | pwees suh ruh-poh-ZAY', ['but', 'de-sorte-que']),
  sent(1904, 'On a installé des bancs, de sorte que les personnes âgées peuvent se reposer.', 'Benches have been put in, so older people can rest.',
    '/ɔ̃.na ɛ̃s.ta.le de bɑ̃ də sɔʁt kə le pɛʁ.sɔ.na.ʒe pœv sə ʁə.po.ze/', 'ohⁿ-na ehⁿs-ta-LAY day BAHⁿ | duh sort kuh lay pehr-so-na-ZHAY | puhv suh ruh-poh-ZAY', ['resultat', 'de-sorte-que']),
  sent(1905, 'Parle lentement, de façon que tout le monde te comprenne.', 'Speak slowly, so that everyone understands you.',
    '/paʁl lɑ̃t.mɑ̃ də fa.sɔ̃ kə tu lə mɔ̃d tə kɔ̃.pʁɛn/', 'parl lahⁿt-MAHⁿ | duh fa-sohⁿ kuh too luh MOHⁿD | tuh kohⁿ-PRENN', ['but', 'de-facon-que']),
  sent(1906, "Elle a parlé lentement, de façon que tout le monde l'a comprise.", 'She spoke slowly, so everyone understood her.',
    '/ɛ.la paʁ.le lɑ̃t.mɑ̃ də fa.sɔ̃ kə tu lə mɔ̃d la kɔ̃.pʁiz/', 'eh-la par-lay lahⁿt-MAHⁿ | duh fa-sohⁿ kuh too luh MOHⁿD | la kohⁿ-PREEZ', ['resultat', 'de-facon-que']),
  sent(1907, 'Le projet a été voté sans que les habitants soient consultés.', 'The project was voted through without the residents being consulted.',
    '/lə pʁɔ.ʒɛ a e.te vɔ.te sɑ̃ kə le.za.bi.tɑ̃ swa kɔ̃.syl.te/', 'luh pro-ZHEH a ay-tay vo-TAY | sahⁿ kuh lay-za-bee-TAHⁿ | swa kohⁿ-sül-TAY', ['but', 'sans-que'], FCVDR),
  sent(1908, 'Afin que chacun puisse donner son avis, la réunion aura lieu le soir.', 'So that everyone can have their say, the meeting will be held in the evening.',
    '/a.fɛ̃ kə ʃa.kœ̃ pɥis dɔ.ne sɔ̃.na.vi la ʁe.y.njɔ̃ o.ʁa ljø lə swaʁ/', 'a-fehⁿ kuh sha-KUHⁿ | pwees do-nay sohⁿ-na-VEE | la ray-ü-NYOHⁿ | oh-ra LYEU luh SWAR', ['but', 'afin-que']),
  sent(1909, 'La réunion a eu lieu le soir, si bien que beaucoup de parents sont venus.', 'The meeting was held in the evening, so a lot of parents came.',
    '/la ʁe.y.njɔ̃ a y ljø lə swaʁ si bjɛ̃ kə bo.ku də pa.ʁɑ̃ sɔ̃ və.ny/', 'la ray-ü-NYOHⁿ a ü LYEU luh SWAR | see byehⁿ kuh boh-koo duh pa-RAHⁿ | sohⁿ vuh-NÜ', ['resultat']),
  sent(1910, 'Il fait tellement chaud que les enfants ne peuvent pas sortir.', 'It is so hot that the children cannot go out.',
    '/il fɛ tɛl.mɑ̃ ʃo kə le.zɑ̃.fɑ̃ nə pœv pa sɔʁ.tiʁ/', 'eel feh tel-mahⁿ SHOH | kuh lay-zahⁿ-FAHⁿ | nuh puhv pa sor-TEER', ['resultat', 'tellement']),
  sent(1911, 'Il fait trop chaud pour que les enfants puissent sortir.', 'It is too hot for the children to go out.',
    '/il fɛ tʁo ʃo puʁ kə le.zɑ̃.fɑ̃ pɥis sɔʁ.tiʁ/', 'eel feh troh SHOH | poor kuh lay-zahⁿ-FAHⁿ | pwees sor-TEER', ['but', 'trop-pour-que']),
  rule(1912, "Le but n'est pas encore atteint : subjonctif. Le résultat est là : indicatif.", 'The goal has not been reached yet: subjunctive. The result is there: indicative.',
    '/lə byt nɛ pa.zɑ̃.kɔʁ a.tɛ̃ syb.ʒɔ̃k.tif lə ʁe.zyl.ta ɛ la ɛ̃.di.ka.tif/', 'luh BÜT neh pa-zahⁿ-kor a-TEHⁿ | süb-zhohⁿk-TEEF | luh ray-zül-TA eh LA | ehⁿ-dee-ka-TEEF',
    'De sorte que, de façon que : quel mode ?',
    "Les deux. Si c'est un but, le subjonctif ; si c'est une conséquence réelle, l'indicatif. Si bien que, lui, ne dit jamais qu'un résultat.",
    ['but', 'resultat']),
  gap(1913, "Mets ton badge de sorte qu'on te reconnaisse.", 'Wear your badge so that people recognise you.',
    '/mɛ tɔ̃ badʒ də sɔʁt kɔ̃ tə ʁə.kɔ.nɛs/', 'meh tohⁿ BADZH | duh sort kohⁿ tuh ruh-ko-NESS',
    "Mets ton badge de sorte qu'on te ___ . (reconnaître · un but)",
    "Tu vises un effet : subjonctif. EN: a goal, so subjunctive.",
    ['but', 'de-sorte-que']),
  gap(1914, "Il a mis son badge, de sorte qu'on l'a reconnu.", 'He wore his badge, so people recognised him.',
    '/i.la mi sɔ̃ badʒ də sɔʁt kɔ̃ la ʁə.kɔ.ny/', 'ee-la mee sohⁿ BADZH | duh sort kohⁿ la ruh-ko-NÜ',
    "Il a mis son badge, de sorte qu'on l'___ . (reconnaître · un résultat)",
    "C'est arrivé : indicatif. EN: it happened, so indicative.",
    ['resultat', 'de-sorte-que'], FCVDR),
  sent(1915, "Je t'écris maintenant pour que tu aies le temps de répondre.", 'I am writing to you now so that you have time to reply.',
    '/ʒə te.kʁi mɛ̃t.nɑ̃ puʁ kə ty ɛ lə tɑ̃ də ʁe.pɔ̃dʁ/', 'zhuh tay-KREE mehⁿt-NAHⁿ | poor kuh tü EH | luh tahⁿ duh ray-POHⁿDR', ['but']),
  sent(1916, "Je t'ai écrit tôt, si bien que tu as eu le temps de répondre.", 'I wrote to you early, so you had time to reply.',
    '/ʒə te.e.kʁi to si bjɛ̃ kə ty a y lə tɑ̃ də ʁe.pɔ̃dʁ/', 'zhuh tay-ay-KREE TOH | see byehⁿ kuh tü a Ü | luh tahⁿ duh ray-POHⁿDR', ['resultat']),
];

/* ── ACT 8 · BIEN QUE OU MÊME SI (.1919-.1934) ────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1919, 'Bien que la rue soit plus calme, les commerçants se plaignent.', 'Although the street is quieter, the shopkeepers complain.',
    '/bjɛ̃ kə la ʁy swa ply kalm le kɔ.mɛʁ.sɑ̃ sə plɛɲ/', 'byehⁿ kuh la RÜ swa plü KALM | lay ko-mehr-SAHⁿ suh PLENY', ['concession', 'bien-que'], FCVDR),
  sent(1920, 'Même si la rue est plus calme, les commerçants se plaignent.', 'Even if the street is quieter, the shopkeepers complain.',
    '/mɛm si la ʁy ɛ ply kalm le kɔ.mɛʁ.sɑ̃ sə plɛɲ/', 'mem see la RÜ eh plü KALM | lay ko-mehr-SAHⁿ suh PLENY', ['concession', 'meme-si']),
  sent(1921, 'Même si la ville payait tout, je serais contre.', 'Even if the town paid for everything, I would be against it.',
    '/mɛm si la vil pɛ.jɛ tu ʒə sə.ʁɛ kɔ̃tʁ/', 'mem see la VEEL peh-yeh TOO | zhuh suh-reh KOHⁿTR', ['concession', 'meme-si', 'hypothese']),
  sent(1922, "Même si on m'avait prévenu, je n'aurais rien changé.", 'Even if I had been warned, I would not have changed anything.',
    '/mɛm si ɔ̃ ma.vɛ pʁe.və.ny ʒə no.ʁɛ ʁjɛ̃ ʃɑ̃.ʒe/', 'mem see ohⁿ ma-veh pray-vuh-NÜ | zhuh noh-reh ryehⁿ shahⁿ-ZHAY', ['concession', 'meme-si', 'hypothese']),
  sent(1923, "Quoiqu'il fasse froid, le marché reste ouvert.", 'Although it is cold, the market stays open.',
    '/kwa.kil fas fʁwa lə maʁ.ʃe ʁɛs.tu.vɛʁ/', 'kwa-keel fass FRWA | luh mar-SHAY | res-too-VEHR', ['concession', 'quoique']),
  sent(1924, 'Quoi que tu dises, je garderai mon avis.', 'Whatever you say, I will keep my opinion.',
    '/kwa kə ty diz ʒə ɡaʁ.də.ʁe mɔ̃.na.vi/', 'KWA kuh tü DEEZ | zhuh gar-duh-RAY mohⁿ-na-VEE', ['concession', 'quoi-que'], FCVDR),
  sent(1925, 'Quel que soit le prix, le quartier a besoin de ce parc.', 'Whatever the price, the neighbourhood needs this park.',
    '/kɛl kə swa lə pʁi lə kaʁ.tje a bə.zwɛ̃ də sə paʁk/', 'KEL kuh swa luh PREE | luh kar-TYAY a buh-ZWEHⁿ | duh suh PARK', ['concession', 'quel-que']),
  sent(1926, "Bien qu'elle soit fatiguée, elle vient à toutes les réunions.", 'Although she is tired, she comes to every meeting.',
    '/bjɛ̃ kɛl swa fa.ti.ɡe ɛl vjɛ̃ a tut le ʁe.y.njɔ̃/', 'byehⁿ kel swa fa-tee-GAY | el vyehⁿ a toot lay ray-ü-NYOHⁿ', ['concession', 'bien-que']),
  sent(1927, 'Bien que fatiguée, elle vient à toutes les réunions.', 'Though tired, she comes to every meeting.',
    '/bjɛ̃ kə fa.ti.ɡe ɛl vjɛ̃ a tut le ʁe.y.njɔ̃/', 'byehⁿ kuh fa-tee-GAY | el vyehⁿ a toot lay ray-ü-NYOHⁿ', ['concession', 'bien-que', 'ellipse']),
  sent(1928, "J'ai beau insister, la mairie ne répond pas.", 'However much I insist, the council does not answer.',
    '/ʒe bo ɛ̃.sis.te la mɛ.ʁi nə ʁe.pɔ̃ pa/', 'zhay BOH ehⁿ-sees-TAY | la meh-REE | nuh ray-pohⁿ PA', ['concession', 'avoir-beau']),
  rule(1929, "Bien que prend le subjonctif ; même si garde l'indicatif.", 'Bien que takes the subjunctive; même si keeps the indicative.',
    '/bjɛ̃ kə pʁɑ̃ lə syb.ʒɔ̃k.tif mɛm si ɡaʁd lɛ̃.di.ka.tif/', 'byehⁿ kuh PRAHⁿ | luh süb-zhohⁿk-TEEF | mem SEE | gard lehⁿ-dee-ka-TEEF',
    'Bien que et même si disent presque la même chose : et le mode ?',
    "Bien que concède un fait sans l'affirmer : subjonctif. Même si est un si : jamais de subjonctif après lui.",
    ['concession']),
  gap(1930, 'Bien que le loyer soit élevé, nous restons.', 'Although the rent is high, we are staying.',
    '/bjɛ̃ kə lə lwa.je swa.tel.ve nu ʁɛs.tɔ̃/', 'byehⁿ kuh luh lwa-YAY | swa-tayl-VAY | noo res-TOHⁿ',
    'Bien que le loyer ___ élevé, nous restons. (être)',
    "Bien que : subjonctif. EN: bien que takes the subjunctive.",
    ['concession', 'bien-que'], FCVDR),
  gap(1931, 'Même si le loyer est élevé, nous restons.', 'Even if the rent is high, we are staying.',
    '/mɛm si lə lwa.je ɛ.tel.ve nu ʁɛs.tɔ̃/', 'mem see luh lwa-YAY | eh-tayl-VAY | noo res-TOHⁿ',
    'Même si le loyer ___ élevé, nous restons. (être)',
    "Même si : indicatif, comme tout si. EN: même si keeps the indicative.",
    ['concession', 'meme-si']),
  sent(1932, 'Même si tu avais raison, il faudrait convaincre le conseil.', 'Even if you were right, the council would have to be convinced.',
    '/mɛm si ty a.vɛ ʁɛ.zɔ̃ il fo.dʁɛ kɔ̃.vɛ̃kʁ lə kɔ̃.sɛj/', 'mem see tü a-veh reh-ZOHⁿ | eel foh-DREH | kohⁿ-vehⁿkr luh kohⁿ-SEY', ['concession', 'meme-si', 'hypothese']),
  sent(1933, 'Si cher que soit le projet, il reste nécessaire.', 'However expensive the project may be, it is still necessary.',
    '/si ʃɛʁ kə swa lə pʁɔ.ʒɛ il ʁɛst ne.se.sɛʁ/', 'see SHEHR kuh swa luh pro-ZHEH | eel rest nay-say-SEHR', ['concession', 'si-que'], FCVR, { register: 'soutenu' }),
  sent(1934, 'Quoique la salle soit pleine, on trouvera une place.', 'Although the hall is full, we will find a seat.',
    '/kwa.kə la sal swa plɛn ɔ̃ tʁu.və.ʁa yn plas/', 'kwa-kuh la SAL swa PLENN | ohⁿ troo-vuh-RA ün PLASS', ['concession', 'quoique']),
];

/* ── ACT 9 · AVANT QUE, APRÈS QUE (.1937-.1952) ───────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1937, 'Après que le conseil a voté, les travaux ont commencé.', 'After the council voted, the work began.',
    '/a.pʁɛ kə lə kɔ̃.sɛj a vɔ.te le tʁa.vo ɔ̃ kɔ.mɑ̃.se/', 'a-preh kuh luh kohⁿ-SEY a vo-TAY | lay tra-VOH ohⁿ ko-mahⁿ-SAY', ['temps', 'apres-que'], FCVDR),
  sent(1938, 'Avant que le conseil prenne sa décision, les habitants ont manifesté.', 'Before the council made its decision, the residents demonstrated.',
    '/a.vɑ̃ kə lə kɔ̃.sɛj pʁɛn sa de.si.zjɔ̃ le.za.bi.tɑ̃ ɔ̃ ma.ni.fɛs.te/', 'a-vahⁿ kuh luh kohⁿ-SEY | prenn sa day-see-ZYOHⁿ | lay-za-bee-TAHⁿ ohⁿ ma-nee-fes-TAY', ['temps', 'avant-que']),
  sent(1939, "Après qu'elle est partie, la réunion a continué.", 'After she left, the meeting went on.',
    '/a.pʁɛ kɛ.lɛ paʁ.ti la ʁe.y.njɔ̃ a kɔ̃.ti.nɥe/', 'a-preh keh-leh par-TEE | la ray-ü-NYOHⁿ a kohⁿ-tee-NWAY', ['temps', 'apres-que'], FCVDR),
  sent(1940, 'Finissons avant que le gardien parte.', 'Let us finish before the caretaker leaves.',
    '/fi.ni.sɔ̃ a.vɑ̃ kə lə ɡaʁ.djɛ̃ paʁt/', 'fee-nee-SOHⁿ | a-vahⁿ kuh luh gar-DYEHⁿ PART', ['temps', 'avant-que']),
  sent(1941, 'Finissons avant que le gardien ne parte.', 'Let us finish before the caretaker leaves.',
    '/fi.ni.sɔ̃ a.vɑ̃ kə lə ɡaʁ.djɛ̃ nə paʁt/', 'fee-nee-SOHⁿ | a-vahⁿ kuh luh gar-DYEHⁿ nuh PART', ['temps', 'avant-que', 'ne-expletif'], FCVR, { register: 'soutenu' }),
  sent(1942, 'En attendant que la mairie réponde, on continue la pétition.', 'Until the council replies, we are carrying on with the petition.',
    '/ɑ̃.na.tɑ̃.dɑ̃ kə la mɛ.ʁi ʁe.pɔ̃d ɔ̃ kɔ̃.ti.ny la pe.ti.sjɔ̃/', 'ahⁿ-na-tahⁿ-DAHⁿ kuh la meh-REE ray-POHⁿD | ohⁿ kohⁿ-tee-NÜ la pay-tee-SYOHⁿ', ['temps', 'en-attendant-que']),
  sent(1943, 'Depuis que la rue est fermée, on entend les oiseaux.', 'Since the street was closed, you can hear the birds.',
    '/də.pɥi kə la ʁy ɛ fɛʁ.me ɔ̃.nɑ̃.tɑ̃ le.zwa.zo/', 'duh-pwee kuh la RÜ eh fehr-MAY | ohⁿ-nahⁿ-TAHⁿ lay-zwa-ZOH', ['temps', 'depuis-que']),
  sent(1944, 'Maintenant que le parc est ouvert, les familles reviennent.', 'Now that the park is open, families are coming back.',
    '/mɛ̃t.nɑ̃ kə lə paʁk ɛ.tu.vɛʁ le fa.mij ʁə.vjɛn/', 'mehⁿt-NAHⁿ kuh luh PARK eh-too-VEHR | lay fa-MEEY ruh-VYENN', ['temps', 'maintenant-que']),
  sent(1945, 'Après avoir voté, le conseil a levé la séance.', 'After voting, the council closed the meeting.',
    '/a.pʁɛ.za.vwaʁ vɔ.te lə kɔ̃.sɛj a lə.ve la se.ɑ̃s/', 'a-preh-za-vwar vo-TAY | luh kohⁿ-SEY a luh-VAY la say-AHⁿS', ['temps', 'infinitif']),
  sent(1946, 'Après le vote, le conseil a levé la séance.', 'After the vote, the council closed the meeting.',
    '/a.pʁɛ lə vɔt lə kɔ̃.sɛj a lə.ve la se.ɑ̃s/', 'a-preh luh VOT | luh kohⁿ-SEY a luh-VAY la say-AHⁿS', ['temps', 'nom']),
  rule(1947, 'Après que regarde un fait accompli : indicatif. Avant que regarde un fait à venir : subjonctif.', 'Après que looks at a completed fact: indicative. Avant que looks at something still to come: subjunctive.',
    '/a.pʁɛ kə ʁə.ɡaʁd œ̃ fɛ.ta.kɔ̃.pli ɛ̃.di.ka.tif a.vɑ̃ kə ʁə.ɡaʁd œ̃ fɛ a və.niʁ syb.ʒɔ̃k.tif/', 'a-preh kuh ruh-GARD | uhⁿ feh-ta-kohⁿ-PLEE | ehⁿ-dee-ka-TEEF | a-vahⁿ kuh ruh-GARD | uhⁿ feh a vuh-NEER | süb-zhohⁿk-TEEF',
    'Pourquoi après que et avant que n’ont-ils pas le même mode ?',
    "Après que : le fait a eu lieu, tu l'affirmes. Avant que : il n'a pas encore eu lieu. Après qu'il soit parti s'entend partout, mais l'examen attend l'indicatif.",
    ['temps']),
  gap(1948, 'Après que le maire est arrivé, la séance a commencé.', 'After the mayor arrived, the meeting began.',
    '/a.pʁɛ kə lə mɛʁ ɛ.ta.ʁi.ve la se.ɑ̃s a kɔ.mɑ̃.se/', 'a-preh kuh luh MEHR eh-ta-ree-VAY | la say-AHⁿS a ko-mahⁿ-SAY',
    'Après que le maire ___ arrivé, la séance a commencé. (être · un fait accompli)',
    "Après que : indicatif, est arrivé. À l'examen, jamais soit arrivé. EN: après que takes the indicative.",
    ['temps', 'apres-que'], FCVDR),
  gap(1949, 'Avant que le maire vienne, relisons nos questions.', 'Before the mayor comes, let us go over our questions.',
    '/a.vɑ̃ kə lə mɛʁ vjɛn ʁə.li.zɔ̃ no kɛs.tjɔ̃/', 'a-vahⁿ kuh luh MEHR VYENN | ruh-lee-ZOHⁿ noh kes-TYOHⁿ',
    'Avant que le maire ___ , relisons nos questions. (venir · pas encore là)',
    "Avant que : subjonctif. EN: avant que takes the subjunctive.",
    ['temps', 'avant-que']),
  sent(1950, "On attendra jusqu'à ce que tout le monde soit assis.", 'We will wait until everyone is seated.',
    '/ɔ̃.na.tɑ̃.dʁa ʒys.ka sə kə tu lə mɔ̃d swa.ta.si/', 'ohⁿ-na-tahⁿ-DRA | zhüs-ka suh kuh too luh MOHⁿD | swa-ta-SEE', ['temps', 'jusqu-a-ce-que']),
  sent(1951, 'Dès que la décision sera prise, nous vous écrirons.', 'As soon as the decision is made, we will write to you.',
    '/dɛ kə la de.si.zjɔ̃ sə.ʁa pʁiz nu vu.ze.kʁi.ʁɔ̃/', 'deh kuh la day-see-ZYOHⁿ suh-ra PREEZ | noo voo-zay-kree-ROHⁿ', ['temps', 'des-que']),
  sent(1952, 'Après que tu auras lu le rapport, appelle-moi.', 'Once you have read the report, call me.',
    '/a.pʁɛ kə ty o.ʁa ly lə ʁa.pɔʁ a.pɛl.mwa/', 'a-preh kuh tü oh-ra LÜ luh ra-POR | a-pel-MWA', ['temps', 'apres-que', 'futur']),
];

/* ── ACT 10 · QUAND LES DEUX SONT POSSIBLES (.1955-.1969) ─────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1955, "Je ne crois pas qu'il soit venu hier.", 'I do not think he came yesterday.',
    '/ʒə nə kʁwa pa kil swa və.ny jɛʁ/', 'zhuh nuh krwa PA | keel swa vuh-NÜ | YEHR', ['nuance', 'ecrit'], FCVDR),
  sent(1956, "Je ne crois pas qu'il est venu hier.", 'I do not think he came yesterday (spoken, the fact kept in view).',
    '/ʒə nə kʁwa pa ki.lɛ və.ny jɛʁ/', 'zhuh nuh krwa PA | kee-leh vuh-NÜ | YEHR', ['nuance', 'oral'], FCVR, { register: 'familier' }),
  sent(1957, "J'ai compris que tu étais déçu.", 'I realised you were disappointed.',
    '/ʒe kɔ̃.pʁi kə ty e.tɛ de.sy/', 'zhay kohⁿ-PREE | kuh tü ay-teh day-SÜ', ['nuance', 'comprendre']),
  sent(1958, "Dis-lui qu'il vienne demain.", 'Tell him to come tomorrow.',
    '/di.lɥi kil vjɛn də.mɛ̃/', 'dee-LWEE | keel VYENN duh-MEHⁿ', ['nuance', 'dire', 'ordre']),
  sent(1959, "Dis-lui qu'il vient demain.", 'Tell him he is coming tomorrow.',
    '/di.lɥi kil vjɛ̃ də.mɛ̃/', 'dee-LWEE | keel vyehⁿ duh-MEHⁿ', ['nuance', 'dire', 'information']),
  sent(1960, 'Je suppose que la réunion aura lieu.', 'I suppose the meeting will take place.',
    '/ʒə sy.poz kə la ʁe.y.njɔ̃ o.ʁa ljø/', 'zhuh sü-POHZ | kuh la ray-ü-NYOHⁿ oh-ra LYEU', ['nuance', 'supposer']),
  sent(1961, 'Supposons que la réunion ait lieu.', 'Let us suppose the meeting takes place.',
    '/sy.po.zɔ̃ kə la ʁe.y.njɔ̃ ɛ ljø/', 'sü-poh-ZOHⁿ | kuh la ray-ü-NYOHⁿ eh LYEU', ['nuance', 'supposer', 'hypothese'], FCVDR),
  sent(1962, "Qu'il soit compétent, personne ne le conteste.", 'That he is competent, nobody disputes.',
    '/kil swa kɔ̃.pe.tɑ̃ pɛʁ.sɔn nə lə kɔ̃.tɛst/', 'keel swa kohⁿ-pay-TAHⁿ | pehr-SONN nuh luh kohⁿ-TEST', ['nuance', 'en-tete']),
  sent(1963, 'Il est compétent, personne ne le conteste.', 'He is competent, nobody disputes it.',
    '/i.lɛ kɔ̃.pe.tɑ̃ pɛʁ.sɔn nə lə kɔ̃.tɛst/', 'ee-leh kohⁿ-pay-TAHⁿ | pehr-SONN nuh luh kohⁿ-TEST', ['nuance', 'affirme']),
  sent(1964, 'Le fait que la rue soit fermée gêne les livreurs.', 'The fact that the street is closed is a nuisance for delivery drivers.',
    '/lə fɛ kə la ʁy swa fɛʁ.me ʒɛn le li.vʁœʁ/', 'luh FEH kuh la RÜ swa fehr-MAY | zhenn lay lee-VRUHR', ['nuance', 'le-fait-que']),
  rule(1965, "Quand les deux modes sont possibles, l'indicatif affirme davantage le fait.", 'When both moods are possible, the indicative asserts the fact more.',
    '/kɑ̃ le dø mɔd sɔ̃ pɔ.sibl lɛ̃.di.ka.tif a.fiʁm da.vɑ̃.taʒ lə fɛ/', 'kahⁿ lay deu MOD sohⁿ po-SEEBL | lehⁿ-dee-ka-TEEF | a-feerm da-vahⁿ-TAZH luh FEH',
    "Je ne crois pas qu'il est venu : faute ou nuance ?",
    "À l'oral, une nuance : le fait reste plus présent. À l'écrit soigné et à l'examen, le subjonctif.",
    ['nuance']),
  gap(1966, "Je comprends qu'elle soit inquiète.", 'I understand why she is worried.',
    '/ʒə kɔ̃.pʁɑ̃ kɛl swa.tɛ̃.kjɛt/', 'zhuh kohⁿ-PRAHⁿ | kel swa-tehⁿ-KYET',
    "Je comprends qu'elle ___ inquiète. (être · tu acceptes ce qu'elle ressent)",
    "Comprendre au sens d'accepter : subjonctif. EN: understanding as accepting takes the subjunctive.",
    ['nuance', 'comprendre']),
  gap(1967, "J'ai compris qu'elle était inquiète.", 'I realised she was worried.',
    '/ʒe kɔ̃.pʁi kɛ.le.tɛ.tɛ̃.kjɛt/', 'zhay kohⁿ-PREE | keh-lay-teh-tehⁿ-KYET',
    "J'ai compris qu'elle ___ inquiète. (être · tu t'en es rendu compte)",
    "Comprendre au sens de découvrir : indicatif. EN: understanding as realising takes the indicative.",
    ['nuance', 'comprendre'], FCVDR),
  sent(1968, 'Écris-leur que la réunion est annulée.', 'Write and tell them the meeting is cancelled.',
    '/e.kʁi.lœʁ kə la ʁe.y.njɔ̃ ɛ.ta.ny.le/', 'ay-kree-LUHR | kuh la ray-ü-NYOHⁿ eh-ta-nü-LAY', ['nuance', 'dire', 'information']),
  sent(1969, "Écris-leur qu'ils soient à l'heure.", 'Write and tell them to be on time.',
    '/e.kʁi.lœʁ kil swa.ta lœʁ/', 'ay-kree-LUHR | keel swa-ta LUHR', ['nuance', 'dire', 'ordre']),
];

/* ── ACT 11 · TA RÉPONSE SUR LE FORUM (.1972-.1981) ───────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1972, 'Je suis convaincue que ce projet est une chance pour le quartier.', 'I am convinced this project is an opportunity for the neighbourhood.',
    '/ʒə sɥi kɔ̃.vɛ̃.ky kə sə pʁɔ.ʒɛ ɛ.tyn ʃɑ̃s puʁ lə kaʁ.tje/', 'zhuh swee kohⁿ-vehⁿ-KÜ | kuh suh pro-ZHEH eh-tün SHAHⁿS | poor luh kar-TYAY', ['tache', 'certitude'], FCVDR),
  sent(1973, 'Je ne suis pas sûre que le calendrier soit tenable.', 'I am not sure the timetable is realistic.',
    '/ʒə nə sɥi pa syʁ kə lə ka.lɑ̃.dʁi.je swa tə.nabl/', 'zhuh nuh swee pa SÜR | kuh luh ka-lahⁿ-dree-YAY | swa tuh-NABL', ['tache', 'doute']),
  sent(1974, 'Je souhaite que la mairie tienne compte de nos remarques.', 'I would like the council to take our comments into account.',
    '/ʒə swɛt kə la mɛ.ʁi tjɛn kɔ̃t də no ʁə.maʁk/', 'zhuh SWET | kuh la meh-REE tyenn KOHⁿT | duh noh ruh-MARK', ['tache', 'souhait']),
  sent(1975, 'Il est probable que le marché restera à sa place.', 'The market will probably stay where it is.',
    '/i.lɛ pʁɔ.babl kə lə maʁ.ʃe ʁɛs.tə.ʁa a sa plas/', 'ee-leh pro-BABL | kuh luh mar-SHAY | res-tuh-RA a sa PLASS', ['tache', 'probable']),
  sent(1976, 'Nous cherchons des bénévoles qui puissent tenir un stand samedi.', 'We are looking for volunteers who could run a stall on Saturday.',
    '/nu ʃɛʁ.ʃɔ̃ de be.ne.vɔl ki pɥis tə.niʁ œ̃ stɑ̃d sam.di/', 'noo shehr-SHOHⁿ day bay-nay-VOL | kee pwees tuh-NEER uhⁿ STAHⁿD | sam-DEE', ['tache', 'recherche']),
  sent(1977, 'Bien que je comprenne vos craintes, je reste favorable au projet.', 'Although I understand your fears, I remain in favour of the project.',
    '/bjɛ̃ kə ʒə kɔ̃.pʁɛn vo kʁɛ̃t ʒə ʁɛst fa.vɔ.ʁabl o pʁɔ.ʒɛ/', 'byehⁿ kuh zhuh kohⁿ-PRENN voh KREHⁿT | zhuh rest fa-vo-RABL oh pro-ZHEH', ['tache', 'concession'], FCVDR),
  sent(1978, 'Après que la rue a été fermée, les ventes ont augmenté.', 'After the street was closed, sales went up.',
    '/a.pʁɛ kə la ʁy a e.te fɛʁ.me le vɑ̃t ɔ̃.tɔɡ.mɑ̃.te/', 'a-preh kuh la RÜ a ay-tay fehr-MAY | lay VAHⁿT ohⁿ-tog-mahⁿ-TAY', ['tache', 'apres-que']),
  sent(1979, 'C\'est la seule solution qui satisfasse tout le monde.', 'It is the only solution that would satisfy everyone.',
    '/sɛ la sœl sɔ.ly.sjɔ̃ ki sa.tis.fas tu lə mɔ̃d/', 'seh la suhl so-lü-SYOHⁿ | kee sa-tees-FASS too luh MOHⁿD', ['tache', 'superlatif']),
  sent(1980, 'Il faut que chacun puisse encore se garer près de chez lui.', 'Everyone must still be able to park near home.',
    '/il fo kə ʃa.kœ̃ pɥis ɑ̃.kɔʁ sə ɡa.ʁe pʁɛ də ʃe lɥi/', 'eel FOH | kuh sha-KUHⁿ pwees ahⁿ-KOR | suh ga-RAY preh duh shay LWEE', ['tache', 'necessite']),
  sent(1981, 'Même si le chantier dure un an, le jeu en vaut la chandelle.', 'Even if the building work lasts a year, it is worth it.',
    '/mɛm si lə ʃɑ̃.tje dyʁ œ̃.nɑ̃ lə ʒø ɑ̃ vo la ʃɑ̃.dɛl/', 'mem see luh shahⁿ-TYAY dür uhⁿ-NAHⁿ | luh ZHEU ahⁿ voh la shahⁿ-DEL', ['tache', 'concession']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE TEXTS
 *
 *  Three long readings (B2: 200 to 350 words) and the eight short « dans un
 *  texte » paragraphs (60 to 120 words) that close acts 3 to 10. They live
 *  here so the reading, the quiz and the task cannot drift.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the Saint-Roch forum, Québec. */
export const LECTURE_FORUM =
  "Forum des voisins de Saint-Roch, à Québec. Sujet du jour : la Ville veut transformer le stationnement de la rue du Roi en parc. Vos avis ?\n\nJulie, 14 h 02 : Enfin ! D'après le conseiller du quartier, il est probable que le parc sera prêt au printemps. Je cherche d'ailleurs quelqu'un qui puisse traduire l'avis de la Ville pour nos voisins qui ne lisent pas le français.\n\nMarc, 14 h 20 : Je sais que les commerçants sont inquiets, et je les comprends. Sans stationnement, qui viendra acheter chez eux ? Franchement, je doute que les commerçants soient d'accord.\n\nNadia, 14 h 45 : Attention, rien n'est signé. Il est possible que le parc soit prêt au printemps, mais seulement si le budget suit. Surtout, il faut que la Ville fasse une vraie consultation, pas une réunion de quinze minutes un mardi midi.\n\nJulie, 15 h 10 : Nadia, tu as raison pour la consultation. Mais bien que le projet soit cher, je vote pour. Même si le parc coûte cher, il en vaut la peine : de l'ombre, de l'air, des enfants dehors.\n\nPaul, 15 h 30 : Je ne crois pas que la Ville puisse tout financer seule. À Limoilou, après que la consultation a eu lieu, la Ville a publié le plan en deux semaines. Ici, on attend depuis un an.\n\nMarc, 16 h 05 : C'est le seul projet qui puisse sauver la rue, je vous l'accorde. Mais moi, je cherche un appartement qui soit calme, pas un chantier sous ma fenêtre !";

/** Act 10: a language column from a Lausanne daily. */
export const LECTURE_CHRONIQUE =
  "Chronique « Parlons français », parue dans un quotidien lausannois. Le subjonctif est-il en train de mourir ? Chaque semaine, un lecteur me pose la question, exemples à l'appui. Cette semaine, une mère m'écrit : « Mon fils dit je ne crois pas qu'il est venu. N'est-ce pas une faute ? » Rassurons-la : le subjonctif se porte bien. Il reste obligatoire après il faut que, bien que ou avant que, et personne ne dit il faut que tu viens sans faire sourire. Ce qui bouge, ce sont les zones de choix. Après une opinion niée, l'oral glisse volontiers vers l'indicatif. La phrase de son fils n'est pas fautive pour autant : elle garde simplement le fait plus présent, comme si l'on en était presque sûr. À l'écrit soigné, et à l'examen, le subjonctif reste pourtant la norme. Le mouvement inverse existe aussi. Après que, qui devrait être suivi de l'indicatif puisque le fait a eu lieu, attire le subjonctif par analogie avec avant que : après qu'il soit parti s'entend partout, jusque dans les journaux. Les grammairiens protestent, les correcteurs d'examen aussi, et ils ont raison de le faire. Mon conseil ? Demandez-vous toujours si vous affirmez le fait ou si vous le regardez de loin. Le mode suivra. Et si vous hésitez encore, rappelez-vous que la langue offre souvent une sortie de secours : après son départ, après être parti, et la question disparaît.";

/** Act 11: the model reply, Awa on the Saint-Roch forum. */
export const LECTURE_MODELE =
  "Awa, 18 h 12 : Bonsoir à tous. J'habite rue du Roi depuis six ans, et je voudrais apporter quelques faits avant de donner mon avis. Il est certain que le stationnement est plein le matin et presque vide le soir : je le vois de ma fenêtre. Il est probable que la majorité des clients du marché vient à pied, puisque la plupart habitent le quartier. En revanche, je ne suis pas sûre que les livraisons puissent se faire sans un accès pour les camions, et je doute que la Ville ait pensé à tout. Bien que je comprenne l'inquiétude de Marc, je suis convaincue que ce parc est une chance. Après que la rue Saint-Joseph a été rendue aux piétons, les commerces ont repris des couleurs ; personne ne le conteste aujourd'hui. Ce que je souhaite, c'est que la Ville fasse une vraie consultation, un samedi, et qu'elle rende ses chiffres publics. Nous cherchons d'ailleurs des voisins qui puissent présenter nos questions au conseil de quartier : écrivez-moi. Même si le chantier dure un an, le jeu en vaut la chandelle. C'est le seul projet qui puisse rendre la rue aux familles.";

/** The eight « dans un texte » paragraphs (acts 3 to 10). */
export const TEXTE_A3 =
  "Message de Léo à sa collègue Inès, la veille de la réunion. « Salut Inès. Tu crois que la directrice (venir) jeudi ? Moi, je ne pense pas qu'elle (avoir) le temps : elle est à Bruxelles toute la semaine. Crois-tu vraiment qu'elle (pouvoir) rentrer pour une réunion d'une heure ? Karim, lui, est sûr qu'elle (faire) l'aller-retour. Ne trouves-tu pas qu'il (être) un peu trop optimiste ? Une chose est certaine : elle (lire) notre rapport avant de décider. Bref, je doute qu'on (savoir) quoi que ce soit avant vendredi. »";

export const TEXTE_A4 =
  "Bulletin de la mairie, février. Il est certain que les travaux de la place (commencer) le 3 mars. Il est probable qu'ils (durer) six mois. Il est possible qu'une partie du marché (devoir) déménager rue Lamartine pendant l'été. Il semble que les commerçants (être) prêts à s'adapter, et il nous semble que cette solution (être) la plus simple. En revanche, il est peu probable que le parking (rouvrir) avant l'automne. Il paraît enfin que plusieurs habitants (vouloir) une réunion publique : elle aura lieu le 20 février, à la salle des fêtes.";

export const TEXTE_A5 =
  "Annonce de l'association Les Jardins du Plateau. Nous cherchons des bénévoles qui (avoir) un peu de temps le samedi et qui (savoir) jardiner. Nous avons déjà trouvé une voisine qui (vouloir) bien prêter ses outils, mais il n'y a encore personne qui (pouvoir) s'occuper de l'arrosage en juillet. Connaissez-vous quelqu'un qui (être) disponible ? Nous cherchons aussi un local qui (faire) au moins vingt mètres carrés. Le local que la mairie nous (proposer) l'an dernier était beaucoup trop petit.";

export const TEXTE_A6 =
  "Critique parue sur un site de Liège. Le Petit Zinc est le meilleur restaurant que je (connaître) dans le quartier, et sans doute le seul qui (servir) encore une vraie cuisine de marché. C'est aussi le seul restaurant de la rue qui (être) ouvert le lundi : c'est écrit sur la porte. Le chef a été le premier (proposer) un menu végétarien ici. Le seul reproche qu'on (pouvoir) lui faire, c'est le bruit du samedi soir. Pour le reste, c'est l'adresse la plus sûre que je (pouvoir) vous recommander.";

export const TEXTE_A7 =
  "Bilan d'un an de travaux, rue Centrale. L'an dernier, la commune a élargi les trottoirs pour que les poussettes (pouvoir) passer. Elle a aussi planté des arbres, si bien que la rue (être) plus fraîche aujourd'hui. Les travaux ont été faits la nuit, de sorte que la circulation ne (être) presque pas gênée. Pour la suite, les habitants demandent des fontaines, de sorte que les enfants (avoir) de l'eau en été, et ils veulent être consultés afin que rien ne (se faire) sans eux.";

export const TEXTE_A8 =
  "Courrier des lecteurs. Bien que je (vivre) dans ce quartier depuis vingt ans, je n'avais jamais vu une telle colère. Même si la mairie (avoir) raison sur le fond, elle s'y prend mal. Quoi que les élus (dire), le marché fait partie de notre vie. Quel que (être) le coût du déménagement, on ne déplace pas un marché sans en parler à ceux qui le font vivre. Et même si la décision (être) déjà prise, je continuerai à signer les pétitions.";

export const TEXTE_A9 =
  "Compte rendu du conseil de quartier. Après que la présidente (ouvrir) la séance, le trésorier a présenté le budget. Avant que la salle (pouvoir) poser ses questions, il a rappelé les règles du débat. Après que chacun (s'exprimer), le vote a eu lieu. Il faudra maintenant attendre jusqu'à ce que la mairie (répondre) par écrit. En attendant qu'elle le (faire), le comité continue la collecte de signatures. Depuis que la pétition (être) en ligne, plus de six cents personnes l'ont signée.";

export const TEXTE_A10 =
  "Dans ce message, Hugo hésite entre deux formes à chaque verbe. « Salut Léa. Je ne crois pas que Marc (être) venu hier : personne ne l'a vu. Dis-lui qu'il (venir) samedi, c'est important. J'ai compris qu'il (être) fâché contre moi, et franchement, je comprends qu'il (être) fâché. Supposons qu'il (dire) non : on fera sans lui. Qu'il (avoir) raison sur le fond, je ne le conteste pas. »";
