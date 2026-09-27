// b2.23.l1 « Argumenter »: the authored corpus, the imports and the citation
// constants. DRAFT, to B1-BUILD-PLAYBOOK.md with the WORKSHOP SHAPE of
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (and §1.4), and the B2 rules of
// B2-BUILD-LOG.md on top.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later B2 lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE REMEDIATION TARGET FOR B2 WRITING (PE@b2: DELF B2 production écrite,
//   TEF Canada Section B, TCF Canada Tâche 3). It owns the argumentative text
//   as a whole:
//
//     la thèse            a position that answers the question and can be
//                         contested (not a fact, not the topic, not a question)
//     l'opinion           opinion verbs and their moods, beyond B1: certainty
//                         + indicative (il est évident, force est de constater,
//                         je reconnais), doubt, possibility, denial and the
//                         inverted question + subjunctive
//     la preuve           argument, explanation, example; the example
//                         introducers
//     la nuance           the certainty scale, hedging, frequency words in
//                         place of tous / toujours / jamais
//     l'objection         concession then rebuttal: certes… mais, il est vrai
//                         que… cependant, on pourrait objecter que, admettons
//                         que… il n'en reste pas moins que
//     l'introduction      amorce, problématique, thèse or annonce du plan
//     la conclusion       bilan, a direct answer, an ouverture; no new argument
//     les plans           dialectique and thématique, and which question
//                         calls for which
//     comparer            two points of view related, not summarised in turn
//                         (TCF Tâche 3)
//     les sophismes       six reasoning traps and their fair versions
//
//   NOT OWNED, CITED BY TRAIL POSITION (never re-taught):
//     lesson 15 in B1   the subjunctive after opinion and doubt (reframe quoted)
//     lesson 30 in B1   connectors in general (reframe quoted)
//     lesson 31 in B1   cause and consequence
//     lesson 32 in B1   concession, and the balanced opinion (reframe quoted;
//                       its act 11 « avis équilibré » is where this starts)
//     lesson 39 in B1   the email and letter as a whole (reframe quoted)
//     lesson 22 in B2   academic style, cautious claims, cohesion (written in
//                       parallel: cited in words only, no import)
//     lessons 2, 6, 10, 12 and 16 in B2 are named once, in the recycling
//                       round of the quiz (conditionnel passé, mood choice,
//                       nominalisation, gérondif, concession). Not imported.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `opinions-et-avis` exists (fondations, a2-b2). Sub-themes for B2
//     (« donner son avis », « argumenter et réfuter », « nuancer son point de
//     vue ») are the orchestrator's to set in Postgres. Seed read 2026-09-27:
//     577 rows in the theme (b1 575, a2 2), highest number 1591, NOTHING at
//     or above 1600 at any level, and no `fr.b2.opinions-et-avis.*` row.
//
//  2. ID BLOCK: `fr.b2.opinions-et-avis.1600`-`.1799`, claimed by the
//     orchestrator's brief (everything below 1600 at any level is taken).
//     Authored: see the count printed by the validator run; nothing outside
//     the block. Compare full ids, never numbers: the level is part of the id.
//     The ledger line in B2-BUILD-LOG.md is the orchestrator's to write.
//
//  3. HEADWORDS. Every phrase row below was checked against the whole seed
//     (any theme, any level, article stripped): none exists. The four that
//     did (l'argent liquide, le paiement sans contact, and the opinion
//     phrases of lesson 15 in B1: je doute que, il me semble que, il semble
//     que, il est possible que, il est probable que, je ne pense pas que) are
//     REUSED by id below, not twinned.
//
//  4. RESPELLINGS SPELLED FOR THE NASAL CHECKER. `hasPlainNasal` flags any
//     AH / OH / EH / UH / EU / AI / OU closed by a plain n or m. So « semaine »
//     is suh-MENN, « problème » pro-BLEM, « même » MEM, « certaine » sehr-TENN,
//     « jeunes » ZHUNN, « autonomes » oh-to-NOMM, « personne » pehr-SONN: the
//     doubled or bare consonant is for the checker, not the ear. No U+203F tie.
//
//  5. APOSTROPHES. Corpus rows and texts use the straight ' as the seed does.
//     Every `scenario` in the lesson is written with ’ only and embeds no
//     corpus row, so no scenario mixes the two (scenario.logic).
//
//  6. NO UNGRAMMATICAL SENTENCE IS A ROW. The counter-examples (tagged
//     `contre-exemple`, drills ['review'] only) are grammatical French that
//     argues badly: a generalisation, a straw man, a thesis that is a fact.
//     A wrong MOOD lives only in a trapDrill promptSound, a commonErrors
//     `wrong` or a quiz errorSpot prompt.
//
//  7. DATED FACTS, for a fact check before publish: Paris ended shared
//     e-scooters after a residents' vote (2023); Québec bans advertising aimed
//     at under-13s (Loi sur la protection du consommateur, since 1980);
//     Australia has had compulsory voting for about a century; the Louvre had
//     nearly ten million visitors in 2019; Stockholm's congestion charge cut
//     traffic and was kept after a local vote. Nothing else is presented as
//     fact; the rest is the opinion of invented writers.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item, Register } from '../../../../ealch-v2/src/content/schema.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b2.23',
  seq: 23,
  title: 'Argumentation and Opinion',
  sub: 'Argumenter',
  canDo: 'Can write a clear, well-structured argumentative text of about 250 words for the DELF B2, TEF or TCF: a thesis that answers the question, arguments explained and supported by examples, an opposing view conceded and rebutted, opinion verbs in the right mood, nuance instead of over-generalisation, a plan chosen for the question, and a conclusion that answers it',
  prereqUnitIds: ['b1.15', 'b1.30', 'b1.31', 'b1.32', 'b1.39', 'b2.22'],
} as const;

export const LESSON_ID = 'b2.23.l1';
export const THEME = 'opinions-et-avis';
export const LEVEL = 'b2' as const;

/** ONE block, claimed by the brief (§A.2). */
export const ID_RANGES = [[1600, 1799]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  By trail position, in words. The B1 units are live; the B2 units are not
 *  in the seed yet, so both are spelled from the plan here. The metadata
 *  arrays (grammarAssumed, prereqUnitIds) keep raw ids, as the house does.
 * ══════════════════════════════════════════════════════════════════════════ */

export const SUBJ_DECL_UNIT = 'b1.15';
export const COORD_UNIT = 'b1.30';
export const SUBORD_UNIT = 'b1.31';
export const CONCESSION_UNIT = 'b1.32';
export const COURRIELS_UNIT = 'b1.39';
export const STYLE_UNIT = 'b2.22';

/** `b1.NN` or `b2.NN` → « la leçon N du B1 / B2 ». Never a raw id on screen. */
export function refFr(unitId: string): string {
  const [band, nn] = unitId.split('.');
  return `la leçon ${Number(nn)} du ${band.toUpperCase()}`;
}

export const SUBJ_DECL_REF = refFr(SUBJ_DECL_UNIT);   // la leçon 15 du B1
export const COORD_REF = refFr(COORD_UNIT);           // la leçon 30 du B1
export const SUBORD_REF = refFr(SUBORD_UNIT);         // la leçon 31 du B1
export const CONCESSION_REF = refFr(CONCESSION_UNIT); // la leçon 32 du B1
export const COURRIELS_REF = refFr(COURRIELS_UNIT);   // la leçon 39 du B1
export const STYLE_REF = refFr(STYLE_UNIT);           // la leçon 22 du B2
export const CONNECTEURS_RANGE_REF = 'les leçons 30 à 32 du B1';
/** Earlier B2 lessons recycled in the quiz's last round (B2-BUILD-LOG.md). */
export const COND_PASSE_REF = refFr('b2.02');
export const MODES_REF = refFr('b2.06');
export const NOMINAL_REF = refFr('b2.10');
export const GERONDIF_REF = refFr('b2.12');
export const CONCESSION_B2_REF = refFr('b2.16');

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B115_REFRAME, REFRAME_EN as B115_REFRAME_EN } from '../b1/subjonctif-declencheurs-corpus.ts';
export { REFRAME as B130_REFRAME, REFRAME_EN as B130_REFRAME_EN } from '../b1/coordination-corpus.ts';
export { REFRAME as B132_REFRAME, REFRAME_EN as B132_REFRAME_EN } from '../b1/concession-corpus.ts';
export { REFRAME as B139_REFRAME, REFRAME_EN as B139_REFRAME_EN } from '../b1/courriels-lettres-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THREE GESTURES. A text that argues does three things, and the B2 grids
 *  (DELF « capacité à argumenter », TEF « position » and « prise en compte de
 *  l'objection », TCF « prise de position ») score exactly those three: it
 *  takes a position, it proves it, and it answers the other side. Every act
 *  hands the learner one tool for one of the three gestures.
 *
 *  It is NOT « be as sure as possible »: act 5 shows that the nuanced
 *  paragraph convinces and the shouted one does not. And it is NOT « always
 *  three parts »: act 8 has a thematic plan where nobody is for or against.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Prends position, prouve-la, et réponds à ceux qui pensent le contraire.';
export const REFRAME_EN = 'Take a position, prove it, and answer those who think the opposite.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Un bon texte argumentatif a toujours trois parties : pour, contre, synthèse.',
    why: 'False where act 8 has to hold: « quels sont les effets du tourisme ? » asks nobody to be for or against, and a thematic plan is the right answer. The dialectic plan is one plan, chosen by the question.',
  },
  {
    text: 'Plus tu es sûr de toi, plus tu convaincs.',
    why: "False and costly: act 5's shouted paragraph (« tous les adolescents », « c'est prouvé ») convinces less than the nuanced one. The DELF grid rewards reasons, not certainty, and « la leçon 22 du B2 » teaches the cautious claim.",
  },
  {
    text: "Ne parle jamais des arguments adverses : ils affaiblissent ta thèse.",
    why: 'The opposite of every B2 grid: TEF scores « prise en compte de l’objection » out of five, and the DELF blanc papers demand an argument conceded. Act 6 is built to contradict it.',
  },
  {
    text: "Donne ton avis dès la première ligne.",
    why: "Half true, and act 7 is built on the other half: the introduction first poses the question (amorce, problématique), then gives the thesis. A first line that is only « je suis pour » skips the problem the reader needs.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-27, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

export const OA = (n: number) => `fr.b1.opinions-et-avis.${n}`;
export const CL = (n: number) => `fr.b1.connecteurs-logiques.${n}`;

export const IMPORTED = {
  act1: [
    'fr.b1.ecologie.1172',          // à mon avis, selon moi
  ],
  act2: [
    CL(1580),                       // Un avis équilibré pèse le pour et le contre, puis il tranche.  (flashcard only)
    CL(1583),                       // À mon avis, les avantages l'emportent sur les inconvénients.
  ],
  act3: [
    OA(1297),                       // je ne pense pas que
    'fr.b1.opinions-et-avis.114',   // je doute que  (flashcard, voiceflash)
    'fr.b1.opinions-et-avis.107',   // il me semble que  (flashcard, voiceflash)
    OA(1282),                       // il semble que
    OA(1208),                       // Je ne pense pas que ce film soit trop long.
    OA(1367),                       // Il semble que prend le subjonctif, il me semble que ne le prend pas.  (flashcard only)
  ],
  act4: [] as string[],
  act5: [
    OA(1279),                       // il est possible que
    OA(1354),                       // il est probable que
    OA(1280),                       // il se peut que
  ],
  act6: [
    CL(1581),                       // certes
    CL(1573),                       // Certes, le projet coûte cher, mais il profite à tout le monde.
    OA(1306),                       // Il est vrai que ce quartier a changé.
    CL(1484),                       // Tu as raison. Pourtant, je ne suis pas convaincu.
  ],
  act7: [] as string[],
  act8: [
    'fr.b1.strategies-de-comprehension.1370', // d'une part, d'autre part
    CL(1571),                       // D'un côté, la rue piétonne rend le quartier plus agréable.
    CL(1572),                       // De l'autre, elle complique la vie des commerçants.
  ],
  act9: [
    CL(1531),                       // Certains veulent fermer la rue, alors que d'autres veulent l'élargir.
    CL(107),                        // tandis que  (flashcard, voiceflash)
  ],
  act10: [
    CL(1562),                       // Même si c'est vrai, ce n'est pas une raison.
  ],
  act11: [
    'fr.a2.argent-quotidien.060',   // l'argent liquide
    'fr.a2.courses.193',            // le paiement sans contact
    CL(1585),                       // Même si le projet n'est pas parfait, il mérite un essai.
    CL(1584),                       // Je reste toutefois prudent.
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. (None: every
 *  import above carries flashcard.) */
export const NOT_DECK_ABLE: string[] = [];

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  CL(1580),                         // flashcard only (a rule card)
  OA(1367),                         // flashcard only (a rule card)
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
/** Counter-examples: recognised, never produced, never spoken. */
const RECO = ['review'] as Item['drills'];

const F: Register = 'familier';
const C: Register = 'courant';
const S: Register = 'soutenu';

const sent = (
  n: number, register: Register, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register, grammarPoints: ['argumentation'], ...extra,
});

const phrase = (
  n: number, register: Register, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register, ...extra,
});

/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · UN AVIS N'EST PAS ENCORE UN ARGUMENT ─────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1600, F, "C'est n'importe quoi, tout le monde est contre.", "It's nonsense, everybody is against it.", '/sɛ nɛ̃.pɔʁt kwa tu lə mɔ̃d ɛ kɔ̃tʁ/', 'seh nehⁿ-port KWA | too luh mohⁿd eh KOHⁿTR', ['scene', 'avis-seul', 'contre-exemple'], RECO),
  sent(1601, C, 'Je suis totalement contre cette décision absurde.', 'I am completely against this absurd decision.', '/ʒə sɥi tɔ.tal.mɑ̃ kɔ̃tʁ sɛt de.si.zjɔ̃ ap.syʁd/', 'zhuh swee to-tal-mahⁿ KOHⁿTR | seht day-see-zyohⁿ ap-SÜRD', ['scene', 'avis-seul', 'contre-exemple'], RECO),
  sent(1602, C, 'Je suis contre, car le dimanche est le seul jour où beaucoup de familles peuvent venir.', 'I am against it, because Sunday is the only day when many families can come.', '/ʒə sɥi kɔ̃tʁ kaʁ lə di.mɑ̃ʃ ɛ lə sœl ʒuʁ u bo.ku də fa.mij pœv və.niʁ/', 'zhuh swee KOHⁿTR | kar luh dee-MAHⁿSH | eh luh suhl ZHOOR | oo boh-koo duh fa-MEEY | puhv vuh-NEER', ['scene', 'raison'], FCVDR),
  sent(1603, C, 'Pourriez-vous préciser vos raisons ?', 'Could you spell out your reasons?', '/pu.ʁje.vu pʁe.si.ze vo ʁɛ.zɔ̃/', 'poo-ryay-voo pray-see-ZAY | voh reh-ZOHⁿ', ['scene', 'moderatrice']),
  sent(1604, C, "Le dimanche dernier, j'ai compté plus de soixante enfants à l'heure du conte.", 'Last Sunday, I counted more than sixty children at story time.', '/lə di.mɑ̃ʃ dɛʁ.nje ʒe kɔ̃.te ply də swa.sɑ̃t ɑ̃.fɑ̃ a lœʁ dy kɔ̃t/', 'luh dee-mahⁿsh dehr-NYAY | zhay kohⁿ-TAY | plü duh swa-sahⁿt ahⁿ-FAHⁿ | a luhr dü KOHⁿT', ['exemple']),
  sent(1605, C, "Fermer ce jour-là, c'est fermer la bibliothèque à ceux qui en ont le plus besoin.", 'Closing that day means closing the library to those who need it most.', '/fɛʁ.me sə ʒuʁ.la sɛ fɛʁ.me la bi.bli.jɔ.tɛk a sø ki ɑ̃.nɔ̃ lə ply bə.zwɛ̃/', 'fehr-may suh zhoor-LA | seh fehr-MAY la bee-blee-yo-TEHK | a seu kee ahⁿ-nohⁿ luh plü buh-ZWEHⁿ', ['raison', 'conclusion']),
  sent(1606, F, "Les bibliothèques, c'est dépassé : tout est sur Internet.", 'Libraries are outdated: everything is on the internet.', '/le bi.bli.jɔ.tɛk sɛ de.pa.se tu.tɛ syʁ ɛ̃.tɛʁ.nɛt/', 'lay bee-blee-yo-TEHK | seh day-pa-SAY | too-teh sür ehⁿ-tehr-NEHT', ['avis-seul', 'contre-exemple'], RECO),
  sent(1607, C, 'Les élus ne mettent jamais les pieds dans une bibliothèque.', 'The councillors never set foot in a library.', '/le.ze.ly nə mɛt ʒa.mɛ le pje dɑ̃.zyn bi.bli.jɔ.tɛk/', 'lay-zay-LÜ | nuh meht zha-meh lay PYAY | dahⁿ-zün bee-blee-yo-TEHK', ['generalisation', 'contre-exemple'], RECO),
  sent(1608, C, 'Seuls les avis argumentés seront transmis au conseil.', 'Only reasoned opinions will be passed on to the council.', '/sœl le.za.vi aʁ.ɡy.mɑ̃.te sə.ʁɔ̃ tʁɑ̃s.mi o kɔ̃.sɛj/', 'suhl lay-za-VEE | ar-gü-mahⁿ-TAY | suh-rohⁿ trahⁿs-MEE | oh kohⁿ-SEHY', ['moderatrice']),
  phrase(1609, C, 'un argument', 'an argument (a reason given to convince)', '/œ̃.naʁ.ɡy.mɑ̃/', 'uhⁿ-nar-gü-MAHⁿ', ['mot']),
  phrase(1610, C, 'un avis argumenté', 'a reasoned opinion', '/œ̃.na.vi aʁ.ɡy.mɑ̃.te/', 'uhⁿ-na-VEE ar-gü-mahⁿ-TAY', ['mot']),
  sent(1611, C, "Une opinion dit ce que tu penses ; un argument dit pourquoi.", 'An opinion says what you think; an argument says why.', '/yn ɔ.pi.njɔ̃ di sə kə ty pɑ̃s œ̃.naʁ.ɡy.mɑ̃ di puʁ.kwa/', 'ün o-pee-NYOHⁿ | dee suh kuh tü PAHⁿS | uhⁿ-nar-gü-MAHⁿ | dee poor-KWA', ['rule'], ['flashcard'],
    rule('Qu’est-ce qui transforme une opinion en argument ?', 'Une raison, et souvent un exemple : un argument dit pourquoi.')),
  sent(1612, C, REFRAME, REFRAME_EN, '/pʁɑ̃ pɔ.zi.sjɔ̃ pʁu.ve.la e ʁe.pɔ̃ a sø ki pɑ̃s lə kɔ̃.tʁɛʁ/', 'prahⁿ po-zee-SYOHⁿ | proo-vay-LA | ay ray-POHⁿ | a seu kee pahⁿs luh kohⁿ-TREHR', ['rule', 'reframe'], ['flashcard'],
    rule('Les trois gestes d’un texte argumentatif ?', 'Prendre position, prouver, et répondre à ceux qui pensent le contraire.')),
  sent(1613, C, "Je propose donc un essai de six mois, suivi d'un bilan public.", 'So I propose a six-month trial, followed by a public review.', '/ʒə pʁɔ.pɔz dɔ̃k œ̃.nɛ.sɛ də si mwa sɥi.vi dœ̃ bi.lɑ̃ py.blik/', 'zhuh pro-POZ DOHⁿK | uhⁿ-neh-SEH duh see MWA | swee-VEE duhⁿ bee-lahⁿ pü-BLEEK', ['proposition'], FCVDR),
  phrase(1614, C, 'donner son avis', "to give one's opinion", '/dɔ.ne sɔ̃.na.vi/', 'do-nay sohⁿ-na-VEE', ['mot']),
  sent(1615, C, "Plus fort, ce n'est pas plus convaincant.", 'Louder is not more convincing.', '/ply fɔʁ sə nɛ pa ply kɔ̃.vɛ̃.kɑ̃/', 'plü FOR | suh neh pa plü kohⁿ-vehⁿ-KAHⁿ', ['rule']),
];

/* ── ACT 2 · LA THÈSE ─────────────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1616, C, "Je crois pourtant qu'elle mérite mieux que ce procès.", 'And yet I believe it deserves better than this trial.', '/ʒə kʁwa puʁ.tɑ̃ kɛl me.ʁit mjø kə sə pʁɔ.sɛ/', 'zhuh krwa poor-TAHⁿ | kehl may-reet MYEU | kuh suh pro-SEH', ['these']),
  sent(1617, C, "Bien préparée, la semaine de quatre jours peut profiter autant aux entreprises qu'aux salariés.", 'Properly prepared, the four-day week can benefit companies as much as employees.', '/bjɛ̃ pʁe.pa.ʁe la sə.mɛn də katʁ ʒuʁ pø pʁɔ.fi.te o.tɑ̃ o.zɑ̃.tʁə.pʁiz ko sa.la.ʁje/', 'byehⁿ pray-pa-RAY | la suh-menn duh katr ZHOOR | peu pro-fee-TAY | oh-tahⁿ oh-zahⁿ-truh-PREEZ | koh sa-la-RYAY', ['these'], FCVDR),
  sent(1618, C, 'La semaine de quatre jours existe depuis quelques années.', 'The four-day week has existed for a few years.', '/la sə.mɛn də katʁ ʒuʁ ɛɡ.zist də.pɥi kɛl.kə.za.ne/', 'la suh-menn duh katr ZHOOR | ehg-ZEEST | duh-pwee kehl-kuh-za-NAY', ['these', 'constat', 'contre-exemple'], RECO),
  sent(1619, C, 'Le télétravail est un sujet important.', 'Remote work is an important subject.', '/lə te.le.tʁa.vaj ɛ.tœ̃ sy.ʒɛ ɛ̃.pɔʁ.tɑ̃/', 'luh tay-lay-tra-VAHY | eh-tuhⁿ sü-ZHEH | ehⁿ-por-TAHⁿ', ['these', 'sujet', 'contre-exemple'], RECO),
  sent(1620, C, 'Il y a des avantages et des inconvénients.', 'There are advantages and disadvantages.', '/i.lja de.za.vɑ̃.taʒ e de.zɛ̃.kɔ̃.ve.njɑ̃/', 'eel-ya day-za-vahⁿ-TAZH | ay day-zehⁿ-kohⁿ-vay-NYAHⁿ', ['these', 'vague', 'contre-exemple'], RECO),
  sent(1621, C, 'Le télétravail est-il une bonne chose ?', 'Is remote work a good thing?', '/lə te.le.tʁa.vaj ɛ.til yn bɔn ʃoz/', 'luh tay-lay-tra-VAHY | eh-teel ün bonn SHOHZ', ['these', 'question', 'contre-exemple'], RECO),
  sent(1622, S, "À mon sens, la semaine de quatre jours mérite d'être essayée.", 'In my view, the four-day week deserves to be tried.', '/a mɔ̃ sɑ̃s la sə.mɛn də katʁ ʒuʁ me.ʁit dɛ.tʁe.se.je/', 'a mohⁿ SAHⁿS | la suh-menn duh katr ZHOOR | may-reet deh-tray-say-YAY', ['these'], FCVDR),
  sent(1623, C, "Deux jours de télétravail par semaine améliorent la vie des salariés sans nuire à l'équipe.", "Two days of remote work a week improve employees' lives without harming the team.", '/dø ʒuʁ də te.le.tʁa.vaj paʁ sə.mɛn a.me.ljɔʁ la vi de sa.la.ʁje sɑ̃ nɥiʁ a le.kip/', 'deu zhoor duh tay-lay-tra-VAHY | par suh-MENN | a-may-LYOR la vee day sa-la-RYAY | sahⁿ nweer a lay-KEEP', ['these'], FCVDR),
  sent(1624, C, 'Cette limite plaide pour une adaptation par secteur, non pour un refus général.', 'This limitation argues for adapting by sector, not for a general refusal.', '/sɛt li.mit plɛd puʁ y.na.dap.ta.sjɔ̃ paʁ sɛk.tœʁ nɔ̃ puʁ œ̃ ʁə.fy ʒe.ne.ʁal/', 'seht lee-MEET | plehd poor ü-na-dap-ta-SYOHⁿ par sehk-TUHR | nohⁿ poor uhⁿ ruh-FÜ zhay-nay-RAL', ['nuance']),
  sent(1625, C, "La question n'est pas de savoir si elle est bonne en soi, mais pour qui.", 'The question is not whether it is good in itself, but for whom.', '/la kɛs.tjɔ̃ nɛ pa də sa.vwaʁ si ɛl ɛ bɔn ɑ̃ swa mɛ puʁ ki/', 'la kehs-TYOHⁿ | neh pa duh sa-VWAR | see ehl eh bonn ahⁿ SWA | meh poor KEE', ['conclusion']),
  sent(1626, C, "Je suis favorable à la semaine de quatre jours, à condition qu'elle soit adaptée à chaque métier.", 'I am in favour of the four-day week, provided it is adapted to each job.', '/ʒə sɥi fa.vɔ.ʁabl a la sə.mɛn də katʁ ʒuʁ a kɔ̃.di.sjɔ̃ kɛl swa.ta.dap.te a ʃak me.tje/', 'zhuh swee fa-vo-RABL | a la suh-menn duh katr ZHOOR | a kohⁿ-dee-syohⁿ kehl swa-ta-dap-TAY | a shak may-TYAY', ['these', 'nuance'], FCVDR),
  phrase(1627, C, 'la thèse', 'the thesis, the position you defend', '/la tɛz/', 'la TEHZ', ['mot']),
  phrase(1628, C, 'prendre position', 'to take a stand', '/pʁɑ̃.dʁə pɔ.zi.sjɔ̃/', 'prahⁿ-druh po-zee-SYOHⁿ', ['mot']),
  phrase(1629, S, 'à mon sens', 'in my view', '/a mɔ̃ sɑ̃s/', 'a mohⁿ SAHⁿS', ['opinion']),
  phrase(1630, C, 'être favorable à', 'to be in favour of', '/ɛtʁ fa.vɔ.ʁabl a/', 'ehtr fa-vo-RABL a', ['opinion']),
  phrase(1631, C, 'être opposé à', 'to be opposed to', '/ɛ.tʁɔ.pɔ.ze a/', 'eh-tro-po-ZAY a', ['opinion']),
  sent(1632, C, 'Une thèse répond à la question, prend parti et peut être contestée.', 'A thesis answers the question, takes a side and can be challenged.', '/yn tɛz ʁe.pɔ̃ a la kɛs.tjɔ̃ pʁɑ̃ paʁ.ti e pø ɛtʁ kɔ̃.tɛs.te/', 'ün TEHZ | ray-pohⁿ a la kehs-TYOHⁿ | prahⁿ par-TEE | ay peu ehtr kohⁿ-tehs-TAY', ['rule'], ['flashcard'],
    rule('Trois choses qu’une thèse doit faire ?', 'Répondre à la question, prendre parti, et pouvoir être contestée.')),
  sent(1633, C, "L'argent liquide doit rester un moyen de paiement parmi d'autres.", 'Cash must remain one means of payment among others.', '/laʁ.ʒɑ̃ li.kid dwa ʁɛs.te œ̃ mwa.jɛ̃ də pɛ.mɑ̃ paʁ.mi do.tʁə/', 'lar-zhahⁿ lee-KEED | dwa rehs-TAY | uhⁿ mwa-yehⁿ duh peh-MAHⁿ | par-mee DOHTR', ['these', 'mission'], FCVDR),
];

/* ── ACT 3 · PENSER, CROIRE, DOUTER ───────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1634, C, 'Il est évident que les trottoirs sont encombrés.', 'It is obvious that the pavements are cluttered.', '/i.lɛ.te.vi.dɑ̃ kə le tʁɔ.twaʁ sɔ̃.tɑ̃.kɔ̃.bʁe/', 'ee-leh-tay-vee-DAHⁿ | kuh lay tro-TWAR | sohⁿ-tahⁿ-kohⁿ-BRAY', ['mode', 'indicatif'], FCVDR),
  sent(1635, C, 'Je doute que les usagers fassent attention sans contrôle.', 'I doubt the users will take care without checks.', '/ʒə dut kə le.zy.za.ʒe fa.sa.tɑ̃.sjɔ̃ sɑ̃ kɔ̃.tʁol/', 'zhuh DOOT | kuh lay-zü-za-ZHAY | fa-sa-tahⁿ-SYOHⁿ | sahⁿ kohⁿ-TROL', ['mode', 'subjonctif'], FCVDR),
  sent(1636, C, 'Je reconnais que le système a des défauts.', 'I acknowledge that the system has flaws.', '/ʒə ʁə.kɔ.nɛ kə lə sis.tɛm a de de.fo/', 'zhuh ruh-ko-NEH | kuh luh sees-TEM | a day day-FOH', ['mode', 'indicatif']),
  sent(1637, C, 'Je ne pense pas que les trottinettes soient dangereuses en elles-mêmes.', 'I do not think scooters are dangerous in themselves.', '/ʒə nə pɑ̃s pa kə le tʁɔ.ti.nɛt swa dɑ̃ʒ.ʁøz ɑ̃.nɛl.mɛm/', 'zhuh nuh pahⁿs pa kuh lay tro-tee-NEHT | swa dahⁿzh-REUZ | ahⁿ-nehl-MEM', ['mode', 'subjonctif'], FCVDR),
  sent(1638, C, "Il me semble que le problème, c'est le stationnement.", 'It seems to me that the problem is the parking.', '/il mə sɑ̃bl kə lə pʁɔ.blɛm sɛ lə sta.sjɔn.mɑ̃/', 'eel muh SAHⁿBL | kuh luh pro-BLEM | seh luh sta-syonn-MAHⁿ', ['mode', 'indicatif']),
  sent(1639, C, 'Il est peu probable que nous fassions de même.', 'It is unlikely that we will do the same.', '/i.lɛ pø pʁɔ.babl kə nu fa.sjɔ̃ də mɛm/', 'ee-leh peu pro-BABL | kuh noo fa-SYOHⁿ duh MEM', ['mode', 'subjonctif']),
  sent(1640, C, "Pensez-vous vraiment qu'interdire soit la seule solution ?", 'Do you really think banning is the only solution?', '/pɑ̃.se.vu vʁɛ.mɑ̃ kɛ̃.tɛʁ.diʁ swa la sœl sɔ.ly.sjɔ̃/', 'pahⁿ-say-voo vreh-MAHⁿ | kehⁿ-tehr-DEER | swa la suhl so-lü-SYOHⁿ', ['mode', 'question']),
  sent(1641, C, 'Il semble que les accidents soient moins nombreux cette année.', 'It seems there are fewer accidents this year.', '/il sɑ̃bl kə le.zak.si.dɑ̃ swa mwɛ̃ nɔ̃.bʁø sɛ.ta.ne/', 'eel SAHⁿBL | kuh lay-zak-see-DAHⁿ | swa mwehⁿ nohⁿ-BREU | seh-ta-NAY', ['mode', 'subjonctif'], FCVDR),
  sent(1642, C, 'Il est possible que les chiffres soient trompeurs.', 'It is possible that the figures are misleading.', '/i.lɛ pɔ.sibl kə le ʃifʁ swa tʁɔ̃.pœʁ/', 'ee-leh po-SEEBL | kuh lay SHEEFR | swa trohⁿ-PUHR', ['mode', 'subjonctif']),
  sent(1643, C, "Je reste convaincu que la rue doit d'abord appartenir aux piétons.", 'I remain convinced that the street must belong first to pedestrians.', '/ʒə ʁɛst kɔ̃.vɛ̃.ky kə la ʁy dwa da.bɔʁ a.paʁ.tə.niʁ o pje.tɔ̃/', 'zhuh rehst kohⁿ-vehⁿ-KÜ | kuh la RÜ | dwa da-BOR | a-par-tuh-NEER oh pyay-TOHⁿ', ['mode', 'indicatif']),
  sent(1644, S, 'Force est de constater que Paris les a interdites.', 'One has to admit that Paris has banned them.', '/fɔʁs ɛ də kɔ̃s.ta.te kə pa.ʁi le.za.ɛ̃.tɛʁ.dit/', 'fors eh duh kohⁿs-ta-TAY | kuh pa-REE | lay-za-ehⁿ-tehr-DEET', ['mode', 'indicatif', 'constat'], FCVDR),
  sent(1645, C, 'Je crois que le télétravail rend les équipes plus autonomes.', 'I believe remote work makes teams more independent.', '/ʒə kʁwa kə lə te.le.tʁa.vaj ʁɑ̃ le.ze.kip ply.zo.to.nɔm/', 'zhuh KRWA | kuh luh tay-lay-tra-VAHY | rahⁿ lay-zay-KEEP | plü-zoh-to-NOMM', ['ecoute', 'indicatif']),
  sent(1646, C, 'Je ne crois pas que le bureau soit devenu inutile.', 'I do not believe the office has become useless.', '/ʒə nə kʁwa pa kə lə by.ʁo swa dəv.ny i.ny.til/', 'zhuh nuh krwa PA | kuh luh bü-ROH | swa duhv-NÜ | ee-nü-TEEL', ['ecoute', 'subjonctif'], FCVDR),
  sent(1647, C, 'Il est probable que la plupart des entreprises garderont deux jours.', 'Most companies will probably keep two days.', '/i.lɛ pʁɔ.babl kə la ply.paʁ de.zɑ̃.tʁə.pʁiz ɡaʁ.də.ʁɔ̃ dø ʒuʁ/', 'ee-leh pro-BABL | kuh la plü-PAR day-zahⁿ-truh-PREEZ | gar-duh-rohⁿ deu ZHOOR', ['ecoute', 'indicatif']),
  sent(1648, C, "Il n'est pas certain que les jeunes salariés y gagnent.", 'It is not certain that young employees gain from it.', '/il nɛ pa sɛʁ.tɛ̃ kə le ʒœn sa.la.ʁje i ɡaɲ/', 'eel neh pa sehr-TEHⁿ | kuh lay ZHUNN sa-la-RYAY | ee GANY', ['ecoute', 'subjonctif']),
  sent(1649, C, 'Il est certain que les longs trajets fatiguent.', 'Long commutes are certainly tiring.', '/i.lɛ sɛʁ.tɛ̃ kə le lɔ̃ tʁa.ʒɛ fa.tiɡ/', 'ee-leh sehr-TEHⁿ | kuh lay lohⁿ tra-ZHEH | fa-TEEG', ['ecoute', 'indicatif']),
  sent(1650, C, 'Je ne nie pas que certains soient isolés.', 'I do not deny that some people are isolated.', '/ʒə nə ni pa kə sɛʁ.tɛ̃ swa.ti.zɔ.le/', 'zhuh nuh nee PA | kuh sehr-TEHⁿ | swa-tee-zo-LAY', ['ecoute', 'subjonctif'], FCVDR),
  sent(1651, C, 'Croyez-vous que la direction puisse revenir en arrière ?', 'Do you think management could go back on it?', '/kʁwa.je.vu kə la di.ʁɛk.sjɔ̃ pɥis ʁə.və.niʁ ɑ̃.na.ʁjɛʁ/', 'krwa-yay-VOO | kuh la dee-rehk-SYOHⁿ | pwees ruh-vuh-NEER | ahⁿ-na-RYEHR', ['ecoute', 'subjonctif', 'question']),
  sent(1652, C, "J'estime que deux jours sur place suffisent.", 'I consider that two days on site are enough.', '/ʒɛs.tim kə dø ʒuʁ syʁ plas sy.fiz/', 'zhehs-TEEM | kuh deu zhoor sür PLASS | sü-FEEZ', ['ecoute', 'indicatif']),
  phrase(1653, S, 'force est de constater que', 'one has to admit that, the facts show that', '/fɔʁs ɛ də kɔ̃s.ta.te kə/', 'fors eh duh kohⁿs-ta-TAY kuh', ['opinion', 'certitude']),
  phrase(1654, C, 'il est évident que', 'it is obvious that', '/i.lɛ.te.vi.dɑ̃ kə/', 'ee-leh-tay-vee-DAHⁿ kuh', ['opinion', 'certitude']),
  phrase(1655, C, 'il est peu probable que', 'it is unlikely that', '/i.lɛ pø pʁɔ.babl kə/', 'ee-leh peu pro-BABL kuh', ['opinion', 'doute']),
  phrase(1656, C, 'je suis convaincu que', 'I am convinced that', '/ʒə sɥi kɔ̃.vɛ̃.ky kə/', 'zhuh swee kohⁿ-vehⁿ-KÜ kuh', ['opinion', 'certitude']),
  phrase(1657, C, 'je ne nie pas que', 'I do not deny that', '/ʒə nə ni pa kə/', 'zhuh nuh nee PA kuh', ['opinion', 'concession']),
  phrase(1658, S, "j'estime que", 'I consider that, I judge that', '/ʒɛs.tim kə/', 'zhehs-TEEM kuh', ['opinion']),
  sent(1659, C, "La certitude appelle l'indicatif ; le doute, la possibilité et le refus appellent le subjonctif.", 'Certainty takes the indicative; doubt, possibility and denial take the subjunctive.', '/la sɛʁ.ti.tyd a.pɛl lɛ̃.di.ka.tif lə dut la pɔ.si.bi.li.te e lə ʁə.fy a.pɛl lə syb.ʒɔ̃k.tif/', 'la sehr-tee-TÜD | a-pehl lehⁿ-dee-ka-TEEF | luh DOOT | la po-see-bee-lee-TAY | ay luh ruh-FÜ | a-pehl luh süb-zhohⁿk-TEEF', ['rule'], ['flashcard'],
    rule('Il est évident que, il est possible que : quel mode après chacun ?', "Il est évident que, l'indicatif : c'est une certitude. Il est possible que, le subjonctif : c'est une possibilité.")),
];

/* ── ACT 4 · PROUVER : L'ARGUMENT, L'EXPLICATION, L'EXEMPLE ───────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1660, S, "Le premier argument en faveur de l'interdiction tient à la vulnérabilité des enfants.", 'The first argument for the ban has to do with how vulnerable children are.', '/lə pʁə.mje aʁ.ɡy.mɑ̃ ɑ̃ fa.vœʁ də lɛ̃.tɛʁ.dik.sjɔ̃ tjɛ̃ a la vyl.ne.ʁa.bi.li.te de.zɑ̃.fɑ̃/', 'luh pruh-myay ar-gü-MAHⁿ | ahⁿ fa-vuhr duh lehⁿ-tehr-deek-SYOHⁿ | tyehⁿ a la vül-nay-ra-bee-lee-TAY | day-zahⁿ-FAHⁿ', ['argument'], FCVDR),
  sent(1661, C, "Avant huit ans, un enfant distingue mal une publicité d'un programme ordinaire.", 'Before the age of eight, a child can hardly tell an advert from an ordinary programme.', '/a.vɑ̃ ɥi.tɑ̃ œ̃.nɑ̃.fɑ̃ dis.tɛ̃ɡ mal yn py.bli.si.te dœ̃ pʁɔ.ɡʁam ɔʁ.di.nɛʁ/', 'a-vahⁿ wee-TAHⁿ | uhⁿ-nahⁿ-FAHⁿ | dees-tehⁿg MAL | ün pü-blee-see-TAY | duhⁿ pro-gramm or-dee-NEHR', ['explication']),
  sent(1662, C, "Ainsi, une marque de céréales peut faire d'un produit très sucré le héros d'une aventure.", 'So a cereal brand can turn a very sugary product into the hero of an adventure.', '/ɛ̃.si yn maʁk də se.ʁe.al pø fɛʁ dœ̃ pʁɔ.dɥi tʁɛ sy.kʁe lə e.ʁo dy.na.vɑ̃.tyʁ/', 'ehⁿ-SEE | ün mark duh say-ray-AL | peu fehr duhⁿ pro-DWEE treh sü-KRAY | luh ay-ROH dü-na-vahⁿ-TÜR', ['exemple']),
  sent(1663, C, "Le Québec, par exemple, interdit la publicité destinée aux moins de treize ans.", 'Québec, for example, bans advertising aimed at under-thirteens.', '/lə ke.bɛk paʁ.ɛɡ.zɑ̃pl ɛ̃.tɛʁ.di la py.bli.si.te dɛs.ti.ne o mwɛ̃ də tʁɛz ɑ̃/', 'luh kay-BEHK | par-ehg-ZAHⁿPL | ehⁿ-tehr-DEE | la pü-blee-see-TAY | dehs-tee-NAY oh mwehⁿ duh trehz AHⁿ', ['exemple'], FCVDR),
  sent(1664, C, 'Tout le monde sait que les enfants sont influençables.', 'Everybody knows children are easily influenced.', '/tu lə mɔ̃d sɛ kə le.zɑ̃.fɑ̃ sɔ̃.tɛ̃.fly.ɑ̃.sabl/', 'too luh mohⁿd SEH | kuh lay-zahⁿ-FAHⁿ | sohⁿ-tehⁿ-flü-ahⁿ-SABL', ['generalisation', 'contre-exemple'], RECO),
  sent(1665, F, 'Mon petit frère veut toujours des céréales au chocolat.', 'My little brother always wants chocolate cereal.', '/mɔ̃ pə.ti fʁɛʁ vø tu.ʒuʁ de se.ʁe.al o ʃɔ.kɔ.la/', 'mohⁿ puh-tee FREHR | veu too-ZHOOR | day say-ray-AL oh sho-ko-LA', ['anecdote', 'contre-exemple'], RECO),
  sent(1666, C, "Protéger les enfants de ces messages ne revient pas à les priver de télévision.", 'Protecting children from these messages does not mean depriving them of television.', '/pʁɔ.te.ʒe le.zɑ̃.fɑ̃ də se me.saʒ nə ʁə.vjɛ̃ pa a le pʁi.ve də te.le.vi.zjɔ̃/', 'pro-tay-ZHAY lay-zahⁿ-FAHⁿ | duh say may-SAZH | nuh ruh-vyehⁿ PA | a lay pree-VAY duh tay-lay-vee-ZYOHⁿ', ['conclusion']),
  phrase(1667, C, "prenons l'exemple de", 'take the example of', '/pʁə.nɔ̃ lɛɡ.zɑ̃pl də/', 'pruh-nohⁿ lehg-ZAHⁿPL duh', ['exemple']),
  phrase(1668, C, "c'est le cas de", 'this is the case with', '/sɛ lə ka də/', 'seh luh KA duh', ['exemple']),
  phrase(1669, C, 'comme le montre', 'as shown by', '/kɔm lə mɔ̃tʁ/', 'komm luh MOHⁿTR', ['exemple']),
  sent(1670, C, "Prenons l'exemple de la Suède, où la publicité pour enfants est interdite à la télévision.", 'Take the example of Sweden, where advertising for children is banned on television.', '/pʁə.nɔ̃ lɛɡ.zɑ̃pl də la sɥɛd u la py.bli.si.te puʁ ɑ̃.fɑ̃ ɛ.tɛ̃.tɛʁ.dit a la te.le.vi.zjɔ̃/', 'pruh-nohⁿ lehg-ZAHⁿPL | duh la SWEHD | oo la pü-blee-see-TAY poor ahⁿ-FAHⁿ | eh-tehⁿ-tehr-DEET | a la tay-lay-vee-ZYOHⁿ', ['exemple'], FCVDR),
  sent(1671, C, "C'est le cas de nombreuses écoles qui ont supprimé les distributeurs de sodas.", 'This is the case with many schools that have removed fizzy-drink machines.', '/sɛ lə ka də nɔ̃.bʁøz.ze.kɔl ki ɔ̃ sy.pʁi.me le dis.tʁi.by.tœʁ də so.da/', 'seh luh KA | duh nohⁿ-breu-zay-KOL | kee ohⁿ sü-pree-MAY | lay dees-tree-bü-TUHR duh so-DA', ['exemple']),
  sent(1672, C, "Comme le montre l'exemple du Québec, une telle interdiction peut durer des décennies.", "As Québec's example shows, such a ban can last for decades.", '/kɔm lə mɔ̃tʁ lɛɡ.zɑ̃pl dy ke.bɛk yn tɛ.lɛ̃.tɛʁ.dik.sjɔ̃ pø dy.ʁe de de.se.ni/', 'komm luh mohⁿtr lehg-ZAHⁿPL dü kay-BEHK | ün teh-lehⁿ-tehr-deek-SYOHⁿ | peu dü-RAY day day-say-NEE', ['exemple'], FCVDR),
  sent(1673, C, "Un argument, une explication, un exemple : l'exemple illustre, il ne remplace pas.", 'An argument, an explanation, an example: the example illustrates, it does not replace.', '/œ̃.naʁ.ɡy.mɑ̃ y.nɛk.spli.ka.sjɔ̃ œ̃.nɛɡ.zɑ̃pl lɛɡ.zɑ̃pl i.lystʁ il nə ʁɑ̃.plas pa/', 'uhⁿ-nar-gü-MAHⁿ | ü-nehk-splee-ka-SYOHⁿ | uhⁿ-nehg-ZAHⁿPL | lehg-zahⁿpl ee-LÜSTR | eel nuh rahⁿ-plass PA', ['rule'], ['flashcard'],
    rule('Les trois temps d’un paragraphe qui prouve ?', "L'argument, son explication, puis un exemple qui l'illustre, relié à la thèse.")),
  sent(1674, C, 'Plusieurs pays ont déjà tiré les conséquences de cette fragilité.', 'Several countries have already drawn the consequences of this fragility.', '/ply.zjœʁ pe.i ɔ̃ de.ʒa ti.ʁe le kɔ̃.se.kɑ̃s də sɛt fʁa.ʒi.li.te/', 'plü-zyuhr pay-EE | ohⁿ day-ZHA tee-RAY | lay kohⁿ-say-KAHⁿS | duh seht fra-zhee-lee-TAY', ['exemple']),
];

/* ── ACT 5 · NUANCER : NI TOUT, NI RIEN ───────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1675, C, "Les réseaux sociaux semblent peser sur le moral d'une partie des adolescents.", 'Social media seem to weigh on the morale of some teenagers.', '/le ʁe.zo so.sjo sɑ̃bl pə.ze syʁ lə mɔ.ʁal dyn paʁ.ti de.za.dɔ.le.sɑ̃/', 'lay ray-ZOH so-SYOH | sahⁿbl puh-ZAY | sür luh mo-RAL | dün par-TEE day-za-do-lay-SAHⁿ', ['nuance'], FCVDR),
  sent(1676, C, "Beaucoup d'entre eux s'endorment tard à cause de leur téléphone.", 'Many of them fall asleep late because of their phone.', '/bo.ku dɑ̃.tʁø sɑ̃.dɔʁm taʁ a koz də lœʁ te.le.fɔn/', 'boh-koo dahⁿ-TREU | sahⁿ-dorm TAR | a kohz duh luhr tay-lay-FONN', ['nuance']),
  sent(1677, C, 'Le manque de sommeil joue sans doute un rôle dans leur anxiété.', 'Lack of sleep probably plays a part in their anxiety.', '/lə mɑ̃k də sɔ.mɛj ʒu sɑ̃ dut œ̃ ʁol dɑ̃ lœʁ ɑ̃k.sje.te/', 'luh mahⁿk duh so-MEHY | zhoo sahⁿ DOOT | uhⁿ ROHL | dahⁿ luhr ahⁿk-syay-TAY', ['nuance'], FCVDR),
  sent(1678, C, 'Ces études ne prouvent pas que les réseaux soient la seule cause.', 'These studies do not prove that social media are the only cause.', '/se.ze.tyd nə pʁuv pa kə le ʁe.zo swa la sœl koz/', 'say-zay-TÜD | nuh proov PA | kuh lay ray-ZOH | swa la suhl KOHZ', ['nuance', 'subjonctif']),
  sent(1679, C, 'Dans une certaine mesure, ces outils aident aussi les jeunes isolés.', 'To some extent, these tools also help isolated young people.', '/dɑ̃.zyn sɛʁ.tɛn mə.zyʁ se.zu.ti ɛd o.si le ʒœn i.zɔ.le/', 'dahⁿ-zün sehr-tenn muh-ZÜR | say-zoo-TEE | ehd oh-SEE | lay zhunn ee-zo-LAY', ['nuance'], FCVDR),
  sent(1680, C, "Il serait plus juste de parler d'un risque que d'une fatalité.", 'It would be fairer to speak of a risk than of an inevitability.', '/il sə.ʁɛ ply ʒyst də paʁ.le dœ̃ ʁisk kə dyn fa.ta.li.te/', 'eel suh-reh plü ZHÜST | duh par-LAY duhⁿ REESK | kuh dün fa-ta-lee-TAY', ['nuance', 'conclusion']),
  sent(1681, C, 'Tous les adolescents passent leurs nuits sur leur téléphone.', 'All teenagers spend their nights on their phone.', '/tu le.za.dɔ.le.sɑ̃ pas lœʁ nɥi syʁ lœʁ te.le.fɔn/', 'too lay-za-do-lay-SAHⁿ | pass luhr NWEE | sür luhr tay-lay-FONN', ['generalisation', 'contre-exemple'], RECO),
  sent(1682, C, 'Les réseaux sociaux détruisent notre jeunesse.', 'Social media are destroying our youth.', '/le ʁe.zo so.sjo de.tʁɥiz nɔ.tʁə ʒœ.nɛs/', 'lay ray-ZOH so-SYOH | day-trweez | no-truh zhuh-NEHS', ['exageration', 'contre-exemple'], RECO),
  phrase(1683, C, "jusqu'à un certain point", 'up to a point, to some extent', '/ʒys.ka œ̃ sɛʁ.tɛ̃ pwɛ̃/', 'zhüs-ka uhⁿ sehr-tehⁿ PWEHⁿ', ['nuance']),
  phrase(1684, C, 'sans doute', 'probably', '/sɑ̃ dut/', 'sahⁿ DOOT', ['nuance']),
  phrase(1685, C, 'en partie', 'partly, in part', '/ɑ̃ paʁ.ti/', 'ahⁿ par-TEE', ['nuance']),
  sent(1686, C, 'Ne dis que ce que tu peux défendre.', 'Only say what you can defend.', '/nə di kə sə kə ty pø de.fɑ̃dʁ/', 'nuh DEE | kuh suh kuh tü peu day-FAHⁿDR', ['rule'], ['flashcard'],
    rule('Tous, toujours, jamais, c’est prouvé : que fais-tu de ces mots ?', 'Tu les remplaces par ce que tu peux défendre : beaucoup, souvent, rarement, plusieurs études suggèrent.')),
  sent(1687, C, 'La plupart des habitants approuvent le projet.', 'Most residents approve of the project.', '/la ply.paʁ de.za.bi.tɑ̃ a.pʁuv lə pʁɔ.ʒɛ/', 'la plü-PAR day-za-bee-TAHⁿ | a-proov luh pro-ZHEH', ['ecoute', 'nuance']),
  sent(1688, C, 'Tout le monde déteste ce projet.', 'Everybody hates this project.', '/tu lə mɔ̃d de.tɛst sə pʁɔ.ʒɛ/', 'too luh MOHⁿD | day-tehst suh pro-ZHEH', ['ecoute', 'generalisation', 'contre-exemple'], RECO),
  sent(1689, C, 'Ce type de mesure réduit souvent la circulation.', 'This kind of measure often reduces traffic.', '/sə tip də mə.zyʁ ʁe.dɥi su.vɑ̃ la siʁ.ky.la.sjɔ̃/', 'suh teep duh muh-ZÜR | ray-dwee soo-VAHⁿ | la seer-kü-la-SYOHⁿ', ['ecoute', 'nuance']),
  sent(1690, C, 'Cette mesure ne marche jamais.', 'This measure never works.', '/sɛt mə.zyʁ nə maʁʃ ʒa.mɛ/', 'seht muh-ZÜR | nuh marsh zha-MEH', ['ecoute', 'generalisation', 'contre-exemple'], RECO),
  sent(1691, C, 'Il se pourrait que les commerçants y perdent au début.', 'Shopkeepers might lose out at first.', '/il sə pu.ʁɛ kə le kɔ.mɛʁ.sɑ̃ i pɛʁd o de.by/', 'eel suh poo-REH | kuh lay ko-mehr-SAHⁿ | ee pehrd oh day-BÜ', ['ecoute', 'nuance', 'subjonctif']),
  sent(1692, C, "Les jeunes ne s'intéressent à rien.", 'Young people are not interested in anything.', '/le ʒœn nə sɛ̃.te.ʁɛs a ʁjɛ̃/', 'lay ZHUNN | nuh sehⁿ-tay-REHS a RYEHⁿ', ['ecoute', 'generalisation', 'contre-exemple'], RECO),
  sent(1693, C, 'Dans certains quartiers, les loyers ont doublé en dix ans.', 'In some neighbourhoods, rents have doubled in ten years.', '/dɑ̃ sɛʁ.tɛ̃ kaʁ.tje le lwa.je ɔ̃ du.ble ɑ̃ di.zɑ̃/', 'dahⁿ sehr-tehⁿ kar-TYAY | lay lwa-YAY | ohⁿ doo-BLAY | ahⁿ dee-ZAHⁿ', ['ecoute', 'nuance'], FCVDR),
  sent(1694, C, "C'est prouvé : le vélo rend heureux.", 'It is proven: cycling makes you happy.', '/sɛ pʁu.ve lə ve.lo ʁɑ̃ œ.ʁø/', 'seh proo-VAY | luh vay-LOH | rahⁿ uh-REU', ['ecoute', 'exageration', 'contre-exemple'], RECO),
  sent(1695, C, 'Il est indéniable que les écrans ont changé nos soirées.', 'There is no denying that screens have changed our evenings.', '/i.lɛ.tɛ̃.de.njabl kə le.ze.kʁɑ̃ ɔ̃ ʃɑ̃.ʒe no swa.ʁe/', 'ee-leh-tehⁿ-day-NYABL | kuh lay-zay-KRAHⁿ | ohⁿ shahⁿ-ZHAY | noh swa-RAY', ['nuance', 'certitude']),
  phrase(1696, S, 'il est indéniable que', 'there is no denying that', '/i.lɛ.tɛ̃.de.njabl kə/', 'ee-leh-tehⁿ-day-NYABL kuh', ['opinion', 'certitude']),
];

/* ── ACT 6 · L'OBJECTION ET LA RÉPONSE ────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1697, C, "On pourrait objecter qu'on ne force pas quelqu'un à s'intéresser à la politique.", 'One could object that you cannot force someone to take an interest in politics.', '/ɔ̃ pu.ʁɛ ɔb.ʒɛk.te kɔ̃ nə fɔʁs pa kɛl.kœ̃ a sɛ̃.te.ʁe.se a la pɔ.li.tik/', 'ohⁿ poo-REH ob-zhehk-TAY | kohⁿ nuh fors PA | kehl-KUHⁿ | a sehⁿ-tay-ray-SAY a la po-lee-TEEK', ['objection'], FCVDR),
  sent(1698, C, "C'est vrai, mais l'obligation ne porte que sur le déplacement.", 'That is true, but the obligation only covers turning up.', '/sɛ vʁɛ mɛ lɔ.bli.ɡa.sjɔ̃ nə pɔʁt kə syʁ lə de.plas.mɑ̃/', 'seh VREH | meh lo-blee-ga-SYOHⁿ | nuh port kuh sür luh day-plass-MAHⁿ', ['refutation']),
  sent(1699, C, 'Il est vrai que la participation baisse.', 'It is true that turnout is falling.', '/i.lɛ vʁɛ kə la paʁ.ti.si.pa.sjɔ̃ bɛs/', 'ee-leh VREH | kuh la par-tee-see-pa-SYOHⁿ | BEHS', ['concession'], FCVDR),
  sent(1700, C, 'Cependant, obliger les gens à voter ne soigne que le symptôme.', 'However, forcing people to vote only treats the symptom.', '/sə.pɑ̃.dɑ̃ ɔ.bli.ʒe le ʒɑ̃ a vɔ.te nə swaɲ kə lə sɛ̃p.tom/', 'suh-pahⁿ-DAHⁿ | o-blee-ZHAY lay zhahⁿ a vo-TAY | nuh swany kuh luh sehⁿp-TOM', ['refutation'], FCVDR),
  sent(1701, C, "Certes, l'Australie affiche une participation très élevée, mais une urne pleine ne garantit pas un débat vivant.", 'Admittedly, Australia has very high turnout, but a full ballot box does not guarantee a lively debate.', '/sɛʁt lɔs.tʁa.li a.fiʃ yn paʁ.ti.si.pa.sjɔ̃ tʁɛ.ze.lə.ve mɛ.zy.nyʁn plɛn nə ɡa.ʁɑ̃.ti pa œ̃ de.ba vi.vɑ̃/', 'SEHRT | los-tra-LEE a-FEESH | ün par-tee-see-pa-SYOHⁿ | treh-zay-luh-VAY | meh-zü-NÜRN PLENN | nuh ga-rahⁿ-tee PA | uhⁿ day-BA vee-VAHⁿ', ['concession', 'refutation'], FCVDR),
  sent(1702, C, "Je partage l'inquiétude de Mme Gagnon.", "I share Ms Gagnon's concern.", '/ʒə paʁ.taʒ lɛ̃.kje.tyd də ma.dam ɡa.ɲɔ̃/', 'zhuh par-TAZH | lehⁿ-kyay-TÜD | duh ma-dam ga-NYOHⁿ', ['concession']),
  phrase(1703, C, 'on pourrait objecter que', 'one could object that', '/ɔ̃ pu.ʁɛ ɔb.ʒɛk.te kə/', 'ohⁿ poo-REH ob-zhehk-TAY kuh', ['objection']),
  phrase(1704, C, 'il est vrai que', 'it is true that', '/i.lɛ vʁɛ kə/', 'ee-leh VREH kuh', ['concession']),
  phrase(1705, S, "il n'en reste pas moins que", 'the fact remains that', '/il nɑ̃ ʁɛst pa mwɛ̃ kə/', 'eel nahⁿ rehst pa MWEHⁿ kuh', ['refutation']),
  phrase(1706, C, 'admettons que', "let's assume that", '/ad.mɛ.tɔ̃ kə/', 'ad-meh-TOHⁿ kuh', ['concession', 'subjonctif']),
  sent(1707, S, "Admettons que le vote obligatoire fasse monter la participation ; il n'en reste pas moins qu'il ne rend pas le débat plus riche.", "Let's assume compulsory voting raises turnout; the fact remains that it does not make the debate richer.", '/ad.mɛ.tɔ̃ kə lə vɔt ɔ.bli.ɡa.twaʁ fas mɔ̃.te la paʁ.ti.si.pa.sjɔ̃ il nɑ̃ ʁɛst pa mwɛ̃ kil nə ʁɑ̃ pa lə de.ba ply ʁiʃ/', 'ad-meh-TOHⁿ | kuh luh vot o-blee-ga-TWAR | fass mohⁿ-TAY | la par-tee-see-pa-SYOHⁿ | eel nahⁿ rehst pa MWEHⁿ | keel nuh rahⁿ PA | luh day-BA plü REESH', ['concession', 'refutation', 'subjonctif']),
  sent(1708, C, 'Concède ce qui est vrai, puis montre pourquoi ta position tient quand même.', 'Concede what is true, then show why your position still stands.', '/kɔ̃.sɛd sə ki ɛ vʁɛ pɥi mɔ̃tʁ puʁ.kwa ta pɔ.zi.sjɔ̃ tjɛ̃ kɑ̃ mɛm/', 'kohⁿ-SEHD | suh kee eh VREH | pwee mohⁿtr poor-KWA | ta po-zee-SYOHⁿ | tyehⁿ kahⁿ MEM', ['rule'], ['flashcard'],
    rule('Certes, il est vrai que, on pourrait objecter que : et ensuite ?', 'Une réponse : cependant, mais, il n’en reste pas moins que. Une concession sans réponse donne raison à l’autre.')),
  sent(1709, C, 'Mes adversaires veulent envoyer les abstentionnistes en prison.', 'My opponents want to send non-voters to prison.', '/me.zad.vɛʁ.sɛʁ vœl ɑ̃.vwa.je le.zap.stɑ̃.sjɔ.nist ɑ̃ pʁi.zɔ̃/', 'may-zad-vehr-SEHR | vuhl ahⁿ-vwa-YAY | lay-zap-stahⁿ-syo-NEEST | ahⁿ pree-ZOHⁿ', ['homme-de-paille', 'contre-exemple'], RECO),
  sent(1710, C, "Certes, la participation baisse, mais ça n'a aucune importance.", 'Admittedly, turnout is falling, but that does not matter at all.', '/sɛʁt la paʁ.ti.si.pa.sjɔ̃ bɛs mɛ sa na o.kyn ɛ̃.pɔʁ.tɑ̃s/', 'SEHRT | la par-tee-see-pa-SYOHⁿ BEHS | meh sa na oh-KÜN | ehⁿ-por-TAHⁿS', ['concession-annulee', 'contre-exemple'], RECO),
  sent(1711, C, 'Je comprends cette crainte ; elle ne suffit pourtant pas à justifier une amende.', 'I understand this fear; yet it is not enough to justify a fine.', '/ʒə kɔ̃.pʁɑ̃ sɛt kʁɛ̃t ɛl nə sy.fi puʁ.tɑ̃ pa a ʒys.ti.fje y.na.mɑ̃d/', 'zhuh kohⁿ-PRAHⁿ | seht KREHⁿT | ehl nuh sü-FEE poor-tahⁿ PA | a zhüs-tee-FYAY ü-na-MAHⁿD', ['concession', 'refutation'], FCVDR),
  phrase(1712, C, 'une objection', 'an objection', '/y.nɔb.ʒɛk.sjɔ̃/', 'ü-nob-zhehk-SYOHⁿ', ['mot']),
  phrase(1713, C, "l'argument adverse", "the other side's argument", '/laʁ.ɡy.mɑ̃ ad.vɛʁs/', 'lar-gü-mahⁿ ad-VEHRS', ['mot']),
];

/* ── ACT 7 · OUVRIR ET FERMER ─────────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1714, C, "Depuis la nuit des temps, l'homme aime l'art.", 'Since the dawn of time, mankind has loved art.', '/də.pɥi la nɥi de tɑ̃ lɔm ɛm laʁ/', 'duh-pwee la nwee day TAHⁿ | lomm EM | LAR', ['introduction', 'contre-exemple'], RECO),
  sent(1715, C, 'Dans ce texte, je vais parler des musées.', 'In this text, I am going to talk about museums.', '/dɑ̃ sə tɛkst ʒə vɛ paʁ.le de my.ze/', 'dahⁿ suh TEHKST | zhuh veh par-LAY day mü-ZAY', ['introduction', 'contre-exemple'], RECO),
  sent(1716, C, "La gratuité des musées est souvent présentée comme la clé de l'accès à la culture.", 'Free museum entry is often presented as the key to access to culture.', '/la ɡʁa.tɥi.te de my.ze ɛ su.vɑ̃ pʁe.zɑ̃.te kɔm la kle də lak.sɛ a la kyl.tyʁ/', 'la grat-wee-TAY day mü-ZAY | eh soo-vahⁿ pray-zahⁿ-TAY | komm la KLAY | duh lak-SEH a la kül-TÜR', ['introduction', 'amorce'], FCVDR),
  sent(1717, C, 'Faut-il pour autant la généraliser ?', 'Should it therefore be made universal?', '/fo.til puʁ.o.tɑ̃ la ʒe.ne.ʁa.li.ze/', 'foh-TEEL | poor-oh-TAHⁿ | la zhay-nay-ra-lee-ZAY', ['introduction', 'problematique'], FCVDR),
  sent(1718, C, "Nous verrons d'abord ce que la gratuité permet, puis ce qu'elle coûte.", 'We will first see what free entry makes possible, then what it costs.', '/nu vɛ.ʁɔ̃ da.bɔʁ sə kə la ɡʁa.tɥi.te pɛʁ.mɛ pɥi sə kɛl kut/', 'noo veh-ROHⁿ da-BOR | suh kuh la grat-wee-TAY pehr-MEH | pwee suh kehl KOOT', ['introduction', 'annonce'], FCVDR),
  sent(1719, C, 'Je suis donc favorable à une gratuité ciblée.', 'I am therefore in favour of targeted free entry.', '/ʒə sɥi dɔ̃k fa.vɔ.ʁabl a yn ɡʁa.tɥi.te si.ble/', 'zhuh swee DOHⁿK | fa-vo-RABL | a ün grat-wee-TAY see-BLAY', ['conclusion', 'reponse']),
  sent(1720, C, 'Un musée gratuit mais vide aurait-il vraiment gagné quelque chose ?', 'Would a free but empty museum really have gained anything?', '/œ̃ my.ze ɡʁa.tɥi mɛ vid o.ʁɛ.til vʁɛ.mɑ̃ ɡa.ɲe kɛl.kə ʃoz/', 'uhⁿ mü-ZAY gra-TWEE meh VEED | oh-reh-TEEL vreh-MAHⁿ | ga-NYAY kehl-kuh SHOHZ', ['conclusion', 'ouverture']),
  sent(1721, C, 'En conclusion, il y a des pour et des contre, et chacun a son opinion.', 'In conclusion, there are pros and cons, and everyone has their opinion.', '/ɑ̃ kɔ̃.kly.zjɔ̃ i.lja de puʁ e de kɔ̃tʁ e ʃa.kœ̃ a sɔ̃.nɔ.pi.njɔ̃/', 'ahⁿ kohⁿ-klü-ZYOHⁿ | eel-ya day POOR ay day KOHⁿTR | ay sha-KUHⁿ | a soh-no-pee-NYOHⁿ', ['conclusion', 'contre-exemple'], RECO),
  phrase(1722, C, 'une amorce', 'a hook, an opening line that draws the reader in', '/y.na.mɔʁs/', 'ü-na-MORS', ['mot', 'introduction']),
  phrase(1723, C, 'la problématique', 'the central question the text answers', '/la pʁɔ.ble.ma.tik/', 'la pro-blay-ma-TEEK', ['mot', 'introduction']),
  phrase(1724, C, 'annoncer son plan', 'to announce your plan, in the introduction', '/a.nɔ̃.se sɔ̃ plɑ̃/', 'a-nohⁿ-say sohⁿ PLAHⁿ', ['mot', 'introduction']),
  phrase(1725, C, 'une ouverture', 'an opening onto a wider question, at the very end', '/y.nu.vɛʁ.tyʁ/', 'ü-noo-vehr-TÜR', ['mot', 'conclusion']),
  sent(1726, C, 'Amorcer, poser la question, puis donner sa thèse ou annoncer le plan.', 'Hook the reader, ask the question, then give your thesis or announce the plan.', '/a.mɔʁ.se po.ze la kɛs.tjɔ̃ pɥi dɔ.ne sa tɛz u a.nɔ̃.se lə plɑ̃/', 'a-mor-SAY | poh-zay la kehs-TYOHⁿ | pwee do-nay sa TEHZ | oo a-nohⁿ-say luh PLAHⁿ', ['rule', 'introduction'], ['flashcard'],
    rule('Les trois temps d’une introduction ?', "L'amorce, la problématique, puis la thèse ou l'annonce du plan.")),
  sent(1727, C, 'La conclusion répond à la question posée, sans nouvel argument.', 'The conclusion answers the question asked, with no new argument.', '/la kɔ̃.kly.zjɔ̃ ʁe.pɔ̃ a la kɛs.tjɔ̃ po.ze sɑ̃ nu.vɛ.laʁ.ɡy.mɑ̃/', 'la kohⁿ-klü-ZYOHⁿ | ray-pohⁿ a la kehs-tyohⁿ poh-ZAY | sahⁿ noo-veh-lar-gü-MAHⁿ', ['rule', 'conclusion'], ['flashcard'],
    rule('Qu’est-ce qu’une conclusion ne fait jamais ?', 'Elle n’ajoute pas de nouvel argument : elle fait le bilan, répond à la question, puis ouvre.')),
  sent(1728, S, 'En définitive, la gratuité est un moyen, pas une fin.', 'Ultimately, free entry is a means, not an end.', '/ɑ̃ de.fi.ni.tiv la ɡʁa.tɥi.te ɛ.tœ̃ mwa.jɛ̃ pa.zyn fɛ̃/', 'ahⁿ day-fee-nee-TEEV | la grat-wee-TAY | eh-tuhⁿ mwa-YEHⁿ | pa-zün FEHⁿ', ['conclusion'], FCVDR),
  phrase(1729, S, 'en définitive', 'ultimately, when all is said and done', '/ɑ̃ de.fi.ni.tiv/', 'ahⁿ day-fee-nee-TEEV', ['conclusion']),
];

/* ── ACT 8 · DEUX PLANS ───────────────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  phrase(1730, C, 'le plan dialectique', 'the dialectical plan: for, against, then a position', '/lə plɑ̃ dja.lɛk.tik/', 'luh plahⁿ dya-lehk-TEEK', ['plan']),
  phrase(1731, C, 'le plan thématique', 'the thematic plan: one theme per part', '/lə plɑ̃ te.ma.tik/', 'luh plahⁿ tay-ma-TEEK', ['plan']),
  sent(1732, C, "La question appelle un oui ou un non : le plan dialectique s'impose.", 'The question calls for a yes or a no: the dialectical plan is the obvious choice.', '/la kɛs.tjɔ̃ a.pɛl œ̃ wi u œ̃ nɔ̃ lə plɑ̃ dja.lɛk.tik sɛ̃.poz/', 'la kehs-TYOHⁿ a-PEHL | uhⁿ WEE oo uhⁿ NOHⁿ | luh plahⁿ dya-lehk-TEEK | sehⁿ-POHZ', ['plan']),
  sent(1733, C, "Ici, personne ne demande d'être pour ou contre.", 'Here, nobody is asking you to be for or against.', '/i.si pɛʁ.sɔn nə də.mɑ̃d dɛtʁ puʁ u kɔ̃tʁ/', 'ee-SEE | pehr-sonn nuh duh-MAHⁿD | dehtr poor oo KOHⁿTR', ['plan']),
  sent(1734, C, 'Chaque partie commence par une phrase qui annonce son idée.', 'Each part begins with a sentence that announces its idea.', '/ʃak paʁ.ti kɔ.mɑ̃s paʁ yn fʁaz ki a.nɔ̃s sɔ̃.ni.de/', 'shak par-TEE ko-MAHⁿS | par ün FRAZ | kee a-nohⁿs soh-nee-DAY', ['plan']),
  sent(1735, C, 'Après avoir vu les avantages, examinons maintenant les limites.', 'Having seen the advantages, let us now examine the limits.', '/a.pʁɛ.za.vwaʁ vy le.za.vɑ̃.taʒ ɛɡ.za.mi.nɔ̃ mɛ̃t.nɑ̃ le li.mit/', 'a-preh-za-vwar VÜ | lay-za-vahⁿ-TAZH | ehg-za-mee-NOHⁿ | mehⁿt-NAHⁿ | lay lee-MEET', ['transition'], FCVDR),
  sent(1736, C, 'Dans un premier temps, nous verrons les effets économiques.', 'First, we will look at the economic effects.', '/dɑ̃.zœ̃ pʁə.mje tɑ̃ nu vɛ.ʁɔ̃ le.ze.fɛ e.kɔ.nɔ.mik/', 'dahⁿ-zuhⁿ pruh-myay TAHⁿ | noo veh-ROHⁿ | lay-zay-FEH ay-ko-no-MEEK', ['annonce'], FCVDR),
  sent(1737, C, 'Dans un second temps, nous examinerons la vie des habitants.', 'Second, we will examine the residents\' lives.', '/dɑ̃.zœ̃ sə.ɡɔ̃ tɑ̃ nu.zɛɡ.za.mi.nə.ʁɔ̃ la vi de.za.bi.tɑ̃/', 'dahⁿ-zuhⁿ suh-gohⁿ TAHⁿ | noo-zehg-za-mee-nuh-ROHⁿ | la VEE day-za-bee-TAHⁿ', ['annonce'], FCVDR),
  sent(1738, C, 'Enfin, nous nous demanderons ce que devient le patrimoine.', 'Finally, we will ask what becomes of the heritage.', '/ɑ̃.fɛ̃ nu nu də.mɑ̃.də.ʁɔ̃ sə kə də.vjɛ̃ lə pa.tʁi.mwan/', 'ahⁿ-FEHⁿ | noo noo duh-mahⁿ-duh-ROHⁿ | suh kuh duh-VYEHⁿ | luh pa-tree-MWANN', ['annonce']),
  phrase(1739, C, 'une transition', 'a link sentence between two parts', '/yn tʁɑ̃.zi.sjɔ̃/', 'ün trahⁿ-zee-SYOHⁿ', ['mot', 'plan']),
  phrase(1740, S, 'de surcroît', 'moreover, on top of that', '/də syʁ.kʁwa/', 'duh sür-KRWA', ['connecteur']),
  sent(1741, S, 'En outre, les loyers ont fortement augmenté dans le centre.', 'Furthermore, rents have risen sharply in the centre.', '/ɑ̃.nu.tʁə le lwa.je ɔ̃ fɔʁ.tə.mɑ̃ oɡ.mɑ̃.te dɑ̃ lə sɑ̃tʁ/', 'ahⁿ-noo-TRUH | lay lwa-YAY | ohⁿ for-tuh-MAHⁿ | ohg-mahⁿ-TAY | dahⁿ luh SAHⁿTR', ['connecteur'], FCVDR),
  sent(1742, C, 'Pour ou contre : un plan dialectique. Quels effets, quelles causes : un plan thématique.', 'For or against: a dialectical plan. Which effects, which causes: a thematic plan.', '/puʁ u kɔ̃tʁ œ̃ plɑ̃ dja.lɛk.tik kɛl.ze.fɛ kɛl koz œ̃ plɑ̃ te.ma.tik/', 'poor oo KOHⁿTR | uhⁿ plahⁿ dya-lehk-TEEK | kehl-zay-FEH kehl KOHZ | uhⁿ plahⁿ tay-ma-TEEK', ['rule', 'plan'], ['flashcard'],
    rule('La question demande « pour ou contre ». Quel plan ?', 'Le plan dialectique : les raisons de chaque côté, puis ta position. Un sujet « quels effets » appelle un plan thématique.')),
  phrase(1743, C, 'une idée directrice', 'a guiding idea, the idea a part is built on', '/y.ni.de di.ʁɛk.tʁis/', 'ü-nee-DAY dee-rehk-TREES', ['mot', 'plan']),
];

/* ── ACT 9 · COMPARER DEUX POINTS DE VUE ──────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1744, C, "Les deux auteurs s'accordent sur un point : la circulation pose problème.", 'Both writers agree on one point: traffic is a problem.', '/le dø.zo.tœʁ sa.kɔʁd syʁ œ̃ pwɛ̃ la siʁ.ky.la.sjɔ̃ poz pʁɔ.blɛm/', 'lay deu-zoh-TUHR | sa-kord sür uhⁿ PWEHⁿ | la seer-kü-la-SYOHⁿ | pohz pro-BLEM', ['comparer'], FCVDR),
  sent(1745, C, 'Là où le premier voit un prix, le second voit un impôt.', 'Where the first sees a price, the second sees a tax.', '/la u lə pʁə.mje vwa œ̃ pʁi lə sə.ɡɔ̃ vwa œ̃.nɛ̃.po/', 'la oo luh pruh-MYAY | vwa uhⁿ PREE | luh suh-GOHⁿ | vwa uhⁿ-nehⁿ-POH', ['comparer'], FCVDR),
  sent(1746, C, 'Selon le texte A, le péage fait payer au conducteur ce que sa voiture coûte à la ville.', 'According to text A, the toll makes the driver pay what their car costs the city.', '/sə.lɔ̃ lə tɛkst a lə pe.aʒ fɛ pɛ.je o kɔ̃.dyk.tœʁ sə kə sa vwa.tyʁ kut a la vil/', 'suh-LOHⁿ luh tehkst A | luh pay-AZH | feh peh-YAY oh kohⁿ-dük-TUHR | suh kuh sa vwa-TÜR | koot a la VEEL', ['comparer', 'restituer']),
  sent(1747, C, "Pour l'auteur du texte B, en revanche, le péage frappe d'abord les plus modestes.", 'For the writer of text B, on the other hand, the toll hits the least well-off first.', '/puʁ lo.tœʁ dy tɛkst be ɑ̃ ʁə.vɑ̃ʃ lə pe.aʒ fʁap da.bɔʁ le ply mɔ.dɛst/', 'poor loh-TUHR dü tehkst BAY | ahⁿ ruh-VAHⁿSH | luh pay-AZH | frap da-BOR | lay plü mo-DEHST', ['comparer', 'restituer'], FCVDR),
  sent(1748, C, "Leur désaccord ne porte pas sur le constat, mais sur l'ordre des mesures.", 'Their disagreement is not about the diagnosis but about the order of the measures.', '/lœʁ de.za.kɔʁ nə pɔʁt pa syʁ lə kɔ̃s.ta mɛ syʁ lɔʁ.dʁə de mə.zyʁ/', 'luhr day-za-KOR | nuh port PA | sür luh kohⁿs-TA | meh sür lor-druh day muh-ZÜR', ['comparer', 'situer'], FCVDR),
  sent(1749, C, 'Contrairement au texte A, le texte B part de ceux qui n\'ont pas le choix.', 'Unlike text A, text B starts from those who have no choice.', '/kɔ̃.tʁɛʁ.mɑ̃ o tɛkst a lə tɛkst be paʁ də sø ki nɔ̃ pa lə ʃwa/', 'kohⁿ-trehr-MAHⁿ | oh tehkst A | luh tehkst BAY | par duh SEU | kee nohⁿ pa luh SHWA', ['comparer']),
  sent(1750, C, 'Pour ma part, je rejoins plutôt le second auteur.', 'For my part, I side rather with the second writer.', '/puʁ ma paʁ ʒə ʁə.ʒwɛ̃ ply.to lə sə.ɡɔ̃.to.tœʁ/', 'poor ma PAR | zhuh ruh-ZHWEHⁿ | plü-TOH | luh suh-gohⁿ-toh-TUHR', ['position'], FCVDR),
  phrase(1751, C, 'contrairement à', 'unlike, contrary to', '/kɔ̃.tʁɛʁ.mɑ̃ a/', 'kohⁿ-trehr-mahⁿ A', ['comparer']),
  phrase(1752, C, "s'accorder sur", 'to agree on', '/sa.kɔʁ.de syʁ/', 'sa-kor-DAY sür', ['comparer']),
  phrase(1753, C, 'là où', 'where, whereas', '/la u/', 'la OO', ['comparer']),
  phrase(1754, C, 'pour ma part', 'for my part, as for me', '/puʁ ma paʁ/', 'poor ma PAR', ['position']),
  sent(1755, C, "Comparer, c'est relier les deux textes, pas les résumer l'un après l'autre.", 'Comparing means linking the two texts, not summarising them one after the other.', '/kɔ̃.pa.ʁe sɛ ʁə.lje le dø tɛkst pa le ʁe.zy.me lœ̃.na.pʁɛ lotʁ/', 'kohⁿ-pa-RAY | seh ruh-LYAY lay deu TEHKST | pa lay ray-zü-MAY | luhⁿ-na-preh LOHTR', ['rule'], ['flashcard'],
    rule('Deux textes, deux avis : comment les compares-tu ?', "Tu les relies : sur quoi ils s'accordent, où ils divergent, et pourquoi. Puis tu prends position.")),
  sent(1756, C, 'Le texte A parle du péage. Le texte B parle aussi du péage.', 'Text A talks about the toll. Text B also talks about the toll.', '/lə tɛkst a paʁl dy pe.aʒ lə tɛkst be paʁl o.si dy pe.aʒ/', 'luh tehkst A | parl dü pay-AZH | luh tehkst BAY | parl oh-SEE dü pay-AZH', ['resume-plat', 'contre-exemple'], RECO),
  sent(1757, C, 'Le texte B refuse tout changement.', 'Text B rejects any change.', '/lə tɛkst be ʁə.fyz tu ʃɑ̃ʒ.mɑ̃/', 'luh tehkst BAY | ruh-FÜZ | too shahⁿzh-MAHⁿ', ['deformation', 'contre-exemple'], RECO),
];

/* ── ACT 10 · LES PIÈGES DU RAISONNEMENT ──────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1758, C, 'Tous les cyclistes grillent les feux rouges.', 'All cyclists run red lights.', '/tu le si.klist ɡʁij le fø ʁuʒ/', 'too lay see-KLEEST | greey lay feu ROOZH', ['sophisme', 'generalisation', 'contre-exemple'], RECO),
  sent(1759, C, 'Depuis que la piste existe, trois commerces ont fermé : la preuve.', 'Since the lane has existed, three shops have closed: there is the proof.', '/də.pɥi kə la pist ɛɡ.zist tʁwa kɔ.mɛʁs ɔ̃ fɛʁ.me la pʁœv/', 'duh-pwee kuh la PEEST ehg-ZEEST | trwa ko-MEHRS | ohⁿ fehr-MAY | la PRUHV', ['sophisme', 'fausse-cause', 'contre-exemple'], RECO),
  sent(1760, C, "Ce sont des militants qui n'ont jamais travaillé.", 'They are activists who have never worked.', '/sə sɔ̃ de mi.li.tɑ̃ ki nɔ̃ ʒa.mɛ tʁa.va.je/', 'suh sohⁿ day mee-lee-TAHⁿ | kee nohⁿ zha-MEH | tra-va-YAY', ['sophisme', 'attaque', 'contre-exemple'], RECO),
  sent(1761, C, 'Soit on déneige les pistes, soit on déneige les rues.', 'Either we clear the snow from the bike lanes or from the streets.', '/swa ɔ̃ de.nɛʒ le pist swa ɔ̃ de.nɛʒ le ʁy/', 'swa ohⁿ day-nehzh lay PEEST | swa ohⁿ day-nehzh lay RÜ', ['sophisme', 'dilemme', 'contre-exemple'], RECO),
  sent(1762, C, 'Les partisans du vélo veulent interdire la voiture.', 'Cycling supporters want to ban the car.', '/le paʁ.ti.zɑ̃ dy ve.lo vœl ɛ̃.tɛʁ.diʁ la vwa.tyʁ/', 'lay par-tee-ZAHⁿ dü vay-LOH | vuhl ehⁿ-tehr-DEER | la vwa-TÜR', ['sophisme', 'homme-de-paille', 'contre-exemple'], RECO),
  sent(1763, C, 'Aujourd\'hui une piste, demain plus aucune voiture.', 'Today a bike lane, tomorrow no cars at all.', '/o.ʒuʁ.dɥi yn pist də.mɛ̃ ply.zo.kyn vwa.tyʁ/', 'oh-zhoor-DWEE | ün PEEST | duh-MEHⁿ | plü-zoh-kün vwa-TÜR', ['sophisme', 'pente', 'contre-exemple'], RECO),
  sent(1764, C, 'Certains cyclistes ne respectent pas les feux, comme certains automobilistes.', 'Some cyclists ignore traffic lights, as do some drivers.', '/sɛʁ.tɛ̃ si.klist nə ʁɛs.pɛkt pa le fø kɔm sɛʁ.tɛ̃.zo.to.mɔ.bi.list/', 'sehr-tehⁿ see-KLEEST | nuh rehs-pehkt pa lay FEU | komm sehr-tehⁿ-zoh-toh-mo-bee-LEEST', ['juste'], FCVDR),
  sent(1765, C, "Trois commerces ont fermé, mais rien ne montre que la piste en soit la cause.", 'Three shops have closed, but nothing shows that the lane is the cause.', '/tʁwa kɔ.mɛʁs ɔ̃ fɛʁ.me mɛ ʁjɛ̃ nə mɔ̃tʁ kə la pist ɑ̃ swa la koz/', 'trwa ko-MEHRS | ohⁿ fehr-MAY | meh RYEHⁿ | nuh mohⁿtr kuh la PEEST | ahⁿ swa la KOHZ', ['juste', 'subjonctif'], FCVDR),
  sent(1766, C, 'Les partisans du vélo d\'hiver demandent des pistes déneigées, pas la fin de la voiture.', 'Winter-cycling supporters are asking for cleared lanes, not the end of the car.', '/le paʁ.ti.zɑ̃ dy ve.lo di.vɛʁ də.mɑ̃d de pist de.ne.ʒe pa la fɛ̃ də la vwa.tyʁ/', 'lay par-tee-ZAHⁿ | dü vay-loh dee-VEHR | duh-mahⁿd day PEEST day-nay-ZHAY | pa la FEHⁿ | duh la vwa-TÜR', ['juste']),
  sent(1767, C, 'On peut critiquer une proposition sans juger ceux qui la défendent.', 'You can criticise a proposal without judging those who defend it.', '/ɔ̃ pø kʁi.ti.ke yn pʁɔ.pɔ.zi.sjɔ̃ sɑ̃ ʒy.ʒe sø ki la de.fɑ̃d/', 'ohⁿ peu kree-tee-KAY | ün pro-po-zee-SYOHⁿ | sahⁿ zhü-ZHAY | seu kee la day-FAHⁿD', ['juste'], FCVDR),
  sent(1768, C, 'La ville peut déneiger les rues et une partie des pistes.', 'The city can clear the streets and some of the lanes.', '/la vil pø de.ne.ʒe le ʁy e yn paʁ.ti de pist/', 'la VEEL | peu day-nay-ZHAY lay RÜ | ay ün par-TEE day PEEST', ['juste']),
  sent(1769, C, 'Une piste déneigée n\'entraîne pas forcément la fermeture des rues.', 'A cleared bike lane does not necessarily lead to streets being closed.', '/yn pist de.ne.ʒe nɑ̃.tʁɛn pa fɔʁ.se.mɑ̃ la fɛʁ.mə.tyʁ de ʁy/', 'ün PEEST day-nay-ZHAY | nahⁿ-TRENN pa for-say-MAHⁿ | la fehr-muh-TÜR day RÜ', ['juste']),
  phrase(1770, C, 'un sophisme', 'a fallacy, reasoning that only looks sound', '/œ̃ sɔ.fism/', 'uhⁿ so-FEESM', ['mot', 'sophisme']),
  phrase(1771, C, 'une généralisation abusive', 'a sweeping generalisation', '/yn ʒe.ne.ʁa.li.za.sjɔ̃ a.by.ziv/', 'ün zhay-nay-ra-lee-za-SYOHⁿ | a-bü-ZEEV', ['mot', 'sophisme']),
  phrase(1772, C, "l'homme de paille", 'the straw man', '/lɔm də paj/', 'lomm duh PAHY', ['mot', 'sophisme']),
  phrase(1773, C, 'le faux dilemme', 'the false dilemma', '/lə fo di.lɛm/', 'luh foh dee-LEM', ['mot', 'sophisme']),
  sent(1774, C, "Critique l'idée, jamais la personne.", 'Criticise the idea, never the person.', '/kʁi.tik li.de ʒa.mɛ la pɛʁ.sɔn/', 'kree-TEEK lee-DAY | zha-meh la pehr-SONN', ['rule', 'sophisme'], ['flashcard'],
    rule('Un adversaire a tort. Que critiques-tu ?', "Son idée, avec des raisons. Jamais sa personne : ce qu'il est ne dit rien de ce qu'il pense.")),
  sent(1775, C, "Deux faits qui se suivent ne sont pas forcément une cause et son effet.", 'Two facts that follow each other are not necessarily a cause and its effect.', '/dø fɛ ki sə sɥiv nə sɔ̃ pa fɔʁ.se.mɑ̃ yn koz e sɔ̃.ne.fɛ/', 'deu FEH | kee suh SWEEV | nuh sohⁿ pa for-say-MAHⁿ | ün KOHZ | ay soh-nay-FEH', ['rule', 'sophisme'], ['flashcard'],
    rule('Depuis la piste, trois commerces ont fermé. Est-ce une preuve ?', "Non : deux faits qui se suivent ne sont pas forcément une cause et son effet. Il faut montrer le lien.")),
];

/* ── ACT 11 · TA MISSION ──────────────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1776, C, "Une interdiction totale me semble moins efficace qu'un usage encadré.", 'A total ban seems to me less effective than supervised use.', '/y.nɛ̃.tɛʁ.dik.sjɔ̃ tɔ.tal mə sɑ̃bl mwɛ̃.ze.fi.kas kœ̃.ny.zaʒ ɑ̃.ka.dʁe/', 'ü-nehⁿ-tehr-deek-SYOHⁿ to-TAL | muh sahⁿbl mwehⁿ-zay-fee-KASS | kuhⁿ-nü-zazh ahⁿ-ka-DRAY', ['modele', 'these'], FCVDR),
  sent(1777, C, "Il est vrai que le téléphone disperse l'attention.", 'It is true that the phone scatters attention.', '/i.lɛ vʁɛ kə lə te.le.fɔn dis.pɛʁs la.tɑ̃.sjɔ̃/', 'ee-leh VREH | kuh luh tay-lay-FONN | dees-pehrs la-tahⁿ-SYOHⁿ', ['modele', 'concession']),
  sent(1778, C, 'Tout interdire reviendrait à se priver de ces usages.', 'Banning everything would mean doing without these uses.', '/tu.tɛ̃.tɛʁ.diʁ ʁə.vjɛ̃.dʁɛ a sə pʁi.ve də se.zy.zaʒ/', 'too-tehⁿ-tehr-DEER | ruh-vyehⁿ-DREH | a suh pree-VAY | duh say-zü-ZAZH', ['modele', 'argument']),
  sent(1779, C, 'En somme, plutôt que de cacher le problème, apprenons aux élèves à le résoudre.', 'In short, rather than hiding the problem, let us teach pupils to solve it.', '/ɑ̃ sɔm ply.to kə də ka.ʃe lə pʁɔ.blɛm a.pʁə.nɔ̃ o.ze.lɛv a lə ʁe.zudʁ/', 'ahⁿ SOMM | plü-TOH kuh duh ka-SHAY luh pro-BLEM | a-pruh-NOHⁿ oh-zay-LEHV | a luh ray-ZOODR', ['modele', 'conclusion'], FCVDR),
  phrase(1780, C, 'en somme', 'in short, all in all', '/ɑ̃ sɔm/', 'ahⁿ SOMM', ['conclusion']),
  sent(1781, C, 'Si la ville avait consulté les habitants, elle aurait évité ce conflit.', 'If the city had consulted the residents, it would have avoided this conflict.', '/si la vil a.vɛ kɔ̃.syl.te le.za.bi.tɑ̃ ɛ.lo.ʁɛ.te.vi.te sə kɔ̃.fli/', 'see la VEEL | a-veh kohⁿ-sül-TAY lay-za-bee-TAHⁿ | eh-loh-reh-tay-vee-TAY | suh kohⁿ-FLEE', ['rappel-b2', 'conditionnel-passe'], FCVDR),
  sent(1782, C, 'Bien que la mesure soit populaire, elle mérite d\'être évaluée.', 'Although the measure is popular, it deserves to be assessed.', '/bjɛ̃ kə la mə.zyʁ swa pɔ.py.lɛʁ ɛl me.ʁit dɛ.tʁe.va.lɥe/', 'byehⁿ kuh la muh-ZÜR | swa po-pü-LEHR | ehl may-REET | deh-tray-va-LWAY', ['rappel-b2', 'concession']),
  sent(1783, C, "En encadrant l'usage, on responsabilise les élèves.", 'By supervising use, you make pupils responsible.', '/ɑ̃.nɑ̃.ka.dʁɑ̃ ly.zaʒ ɔ̃ ʁɛs.pɔ̃.sa.bi.liz le.ze.lɛv/', 'ahⁿ-nahⁿ-ka-DRAHⁿ lü-ZAZH | ohⁿ rehs-pohⁿ-sa-bee-LEEZ | lay-zay-LEHV', ['rappel-b2', 'gerondif']),
  sent(1784, C, "La disparition des espèces priverait certaines personnes de leur autonomie.", 'The disappearance of cash would deprive some people of their independence.', '/la dis.pa.ʁi.sjɔ̃ de.zɛs.pɛs pʁi.və.ʁɛ sɛʁ.tɛn pɛʁ.sɔn də lœʁ o.to.nɔ.mi/', 'la dees-pa-ree-SYOHⁿ | day-zehs-PEHS | pree-vuh-REH | sehr-tenn pehr-SONN | duh luhr oh-to-no-MEE', ['rappel-b2', 'nominalisation', 'mission'], FCVDR),
  sent(1785, C, "Même si le paiement par carte est pratique, il laisse une trace de chaque achat.", 'Even if paying by card is convenient, it leaves a trace of every purchase.', '/mɛm si lə pɛ.mɑ̃ paʁ kaʁt ɛ pʁa.tik il lɛs yn tʁas də ʃa.ka.ʃa/', 'mem see luh peh-mahⁿ par KART | eh pra-TEEK | eel lehs ün TRASS | duh sha-ka-SHA', ['mission', 'concession']),
  sent(1786, C, "L'argent liquide reste le seul moyen de paiement qui ne dépend d'aucune banque.", 'Cash remains the only means of payment that depends on no bank.', '/laʁ.ʒɑ̃ li.kid ʁɛst lə sœl mwa.jɛ̃ də pɛ.mɑ̃ ki nə de.pɑ̃ do.kyn bɑ̃k/', 'lar-zhahⁿ lee-KEED | rehst luh suhl mwa-yehⁿ duh peh-MAHⁿ | kee nuh day-PAHⁿ | doh-kün BAHⁿK', ['mission', 'argument'], FCVDR),
  sent(1787, C, 'Il est indéniable que le paiement sans contact fait gagner du temps.', 'There is no denying that contactless payment saves time.', '/i.lɛ.tɛ̃.de.njabl kə lə pɛ.mɑ̃ sɑ̃ kɔ̃.takt fɛ ɡa.ɲe dy tɑ̃/', 'ee-leh-tehⁿ-day-NYABL | kuh luh peh-mahⁿ sahⁿ kohⁿ-TAKT | feh ga-nyay dü TAHⁿ', ['mission', 'concession']),
  sent(1788, C, 'Thèse, arguments, objection, réponse, conclusion : ta copie en cinq temps.', 'Thesis, arguments, objection, answer, conclusion: your paper in five beats.', '/tɛz aʁ.ɡy.mɑ̃ ɔb.ʒɛk.sjɔ̃ ʁe.pɔ̃s kɔ̃.kly.zjɔ̃ ta kɔ.pi ɑ̃ sɛ̃k tɑ̃/', 'TEHZ | ar-gü-MAHⁿ | ob-zhehk-SYOHⁿ | ray-POHⁿS | kohⁿ-klü-ZYOHⁿ | ta ko-PEE | ahⁿ sehⁿk TAHⁿ', ['rule', 'modele'], ['flashcard'],
    rule('Les cinq temps d’une copie argumentative ?', 'La thèse, les arguments avec leurs exemples, l’objection, ta réponse, et une conclusion qui répond à la question.')),
  sent(1789, C, 'Je ne pense pas que la disparition des espèces soit une bonne nouvelle.', 'I do not think the disappearance of cash is good news.', '/ʒə nə pɑ̃s pa kə la dis.pa.ʁi.sjɔ̃ de.zɛs.pɛs swa yn bɔn nu.vɛl/', 'zhuh nuh pahⁿs PA | kuh la dees-pa-ree-SYOHⁿ day-zehs-PEHS | swa ün bonn noo-VEHL', ['mission', 'these', 'subjonctif'], FCVDR),
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
 *  §I. THE ANCHOR TEXTS
 *
 *  Workshop shape: every act meets ONE text first. B2 length: 200 to 350
 *  words (B2-BUILD-LOG.md, « Reading at B2 »). They live here so the reading,
 *  the quiz and the task cannot drift.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: a public consultation forum. Four posts and a moderator. */
export const FORUM_TEXT =
  "Consultation en ligne de l'arrondissement de Rosemont, à Montréal. La question posée aux citoyens : pour économiser 80 000 dollars par an, faut-il fermer la bibliothèque du quartier le dimanche ?\n\nJulien R. : « Fermer le dimanche, c'est n'importe quoi. Tout le monde est contre, et de toute façon, les élus ne mettent jamais les pieds dans une bibliothèque. »\n\nAïcha M. : « Je suis contre, car le dimanche est le seul jour où beaucoup de familles peuvent venir. Mes voisins travaillent tous les deux en semaine, et souvent le samedi. Le dimanche dernier, j'ai compté plus de soixante enfants à l'heure du conte. Fermer ce jour-là, c'est fermer la bibliothèque à ceux qui en ont le plus besoin. »\n\nMarc-André L. : « Il est vrai que l'arrondissement doit faire des économies, et je ne nie pas que 80 000 dollars soient une somme importante. Cependant, on pourrait réduire les heures du mardi matin, où la salle est presque vide. On économiserait une partie de la somme sans toucher au jour le plus fréquenté. Je propose donc un essai de six mois, suivi d'un bilan public. »\n\nSophie T. : « Moi, je suis pour. Les bibliothèques, c'est dépassé : tout est sur Internet. »\n\nKarine, modératrice : « Merci pour vos contributions. Julien et Sophie, pourriez-vous préciser vos raisons ? Seuls les avis argumentés seront transmis au conseil d'arrondissement. »";

/** Act 2: an opinion column with its thesis at the end of the introduction. */
export const CHRONIQUE_TEXT =
  "La semaine de quatre jours, une fausse bonne idée ? Une chronique de Claire Dumas.\n\nDepuis quelques années, des entreprises de Lyon à Bruxelles testent la semaine de quatre jours. Les salariés travaillent autant d'heures, ou un peu moins, mais sur quatre jours au lieu de cinq. Pour ses adversaires, c'est un caprice de cadres : les journées seraient trop longues, les clients mal servis, la productivité en baisse. Je crois pourtant qu'elle mérite mieux que ce procès : bien préparée, la semaine de quatre jours peut profiter autant aux entreprises qu'aux salariés.\n\nD'abord, un jour de repos de plus réduit la fatigue. Les entreprises qui l'ont essayée signalent moins d'arrêts maladie et moins de démissions. Or, remplacer un salarié qui part coûte cher, en temps comme en argent.\n\nEnsuite, l'argument du client mal servi ne tient que si toute l'équipe s'arrête le même jour. Une boulangerie ou un cabinet médical peut organiser des roulements : chacun prend son jour, et la porte reste ouverte cinq jours sur sept.\n\nCertes, la formule ne convient pas à tous les métiers. Un chauffeur de bus ou une infirmière ne peut pas simplement condenser sa semaine. Mais cette limite plaide pour une adaptation par secteur, non pour un refus général.\n\nLa question n'est donc pas de savoir si la semaine de quatre jours est bonne en soi, mais pour qui et à quelles conditions. Posée ainsi, elle mérite d'être essayée.";

/** Act 3: a radio debate, transcribed. Every opinion verb in its mood. */
export const DEBAT_TEXT =
  "Le débat du matin, sur Radio Rhône. Le sujet : faut-il interdire les trottinettes électriques en libre-service à Lyon ?\n\nL'animatrice : Monsieur Haddad, vous représentez une association de piétons. Vous êtes pour l'interdiction ?\n\nKarim Haddad : Oui. Il est évident que les trottoirs sont encombrés : des trottinettes couchées partout, devant les écoles, devant les arrêts de bus. Je doute que les usagers fassent attention sans contrôle. Et je ne crois pas qu'une campagne d'affiches y change quoi que ce soit.\n\nL'animatrice : Madame Perrin, vous êtes adjointe aux mobilités. Que lui répondez-vous ?\n\nÉlise Perrin : Je reconnais que le système a des défauts. Mais je ne pense pas que les trottinettes soient dangereuses en elles-mêmes. Il me semble que le problème, c'est le stationnement, pas le véhicule. Nous créons des emplacements réservés, et les trottinettes mal garées seront enlevées.\n\nKarim Haddad : Force est de constater que Paris les a interdites, après un vote des habitants.\n\nÉlise Perrin : C'est exact. Mais Paris n'est pas Lyon, et il est peu probable que nous fassions de même sans avoir essayé autre chose. Pensez-vous vraiment qu'interdire soit la seule solution ?\n\nL'animatrice : Il semble que les accidents soient moins nombreux cette année. Est-ce un argument pour vous, Monsieur Haddad ?\n\nKarim Haddad : Il est possible que les chiffres soient trompeurs. Je reste convaincu que la rue doit d'abord appartenir aux piétons.";

/** Act 4: one paragraph, before and after. Argument, explanation, example. */
export const PARAGRAPHE_TEXT =
  "Deux versions d'un même paragraphe. Le sujet : faut-il interdire la publicité pour la malbouffe aux heures où les enfants regardent la télévision ?\n\nLe brouillon de Fatou : « La publicité pour la malbouffe est mauvaise pour les enfants. Elle est vraiment très mauvaise, et c'est pour cela qu'il faut l'interdire. Tout le monde sait que les enfants sont influençables. Mon petit frère, par exemple, veut toujours des céréales au chocolat. »\n\nLa version relue : « Le premier argument en faveur de l'interdiction tient à la vulnérabilité des enfants. Avant huit ans environ, un enfant distingue mal une publicité d'un programme ordinaire : il prend le message pour une information. Les annonceurs le savent, et c'est pourquoi ils choisissent des personnages de dessins animés et des couleurs vives. Ainsi, une marque de céréales peut faire d'un produit très sucré le héros d'une aventure. Plusieurs pays ont déjà tiré les conséquences de cette fragilité : le Québec, par exemple, interdit la publicité destinée aux moins de treize ans depuis 1980. Protéger les enfants de ces messages ne revient donc pas à les priver de télévision, mais à leur laisser le temps d'apprendre à les lire. »\n\nCe qui a changé : l'argument est annoncé, puis expliqué, puis illustré par un exemple qu'on peut vérifier. La dernière phrase le relie à la thèse. Le petit frère a disparu : une anecdote amuse, elle ne prouve rien.";

/** Act 5: the same paragraph, shouted and then nuanced. */
export const NUANCE_TEXT =
  "Deux façons d'écrire le même paragraphe. Le sujet : les réseaux sociaux rendent-ils les adolescents malheureux ?\n\nVersion A : « Les réseaux sociaux détruisent notre jeunesse. Tous les adolescents passent leurs nuits sur leur téléphone, et c'est prouvé : ils sont toujours plus anxieux que leurs parents au même âge. Aucun jeune ne lit plus de livres. Il faut donc interdire les réseaux sociaux avant dix-huit ans, c'est évident. »\n\nVersion B : « Les réseaux sociaux semblent peser sur le moral d'une partie des adolescents. Beaucoup d'entre eux, surtout les plus jeunes, s'endorment tard à cause de leur téléphone, et le manque de sommeil joue sans doute un rôle dans leur anxiété. Plusieurs études établissent un lien entre un usage intensif et un mal-être plus fréquent ; elles ne prouvent pas pour autant que les réseaux en soient la seule cause. Dans une certaine mesure, ces outils aident aussi des jeunes isolés à trouver des amis qui leur ressemblent. Il serait donc plus juste de parler d'un risque que d'une fatalité, et d'encadrer l'usage plutôt que de l'interdire en bloc. »\n\nLa version A crie plus fort. La version B convainc davantage, parce qu'elle ne dit que ce qu'elle peut défendre : elle mesure, elle cite ses sources en termes prudents, et elle reconnaît ce qui va contre elle.";

/** Act 6: two opposed letters to the editor. */
export const LETTRES_TEXT =
  "Courrier des lecteurs. Faut-il rendre le vote obligatoire au Québec ?\n\nHélène Gagnon, Sherbrooke : « Aux dernières élections municipales, moins d'un électeur sur deux s'est déplacé dans ma ville. Je suis donc favorable au vote obligatoire, comme en Australie depuis un siècle. On pourrait objecter qu'on ne force pas quelqu'un à s'intéresser à la politique. C'est vrai, mais l'obligation ne porte que sur le déplacement : on peut toujours voter blanc. Surtout, force est de constater que ceux qui ne votent plus sont souvent les plus jeunes et les moins aisés. Leur absence fausse le résultat, et les élus finissent par gouverner pour ceux qui votent. »\n\nYves Lambert, Rimouski : « Il est vrai que la participation baisse, et je partage l'inquiétude de Mme Gagnon. Cependant, obliger les gens à voter ne soigne que le symptôme. Si les citoyens restent chez eux, c'est souvent qu'ils ne voient pas ce que leur vote change. Certes, l'Australie affiche une participation très élevée, mais une urne pleine ne garantit pas un débat vivant. Je préfère qu'on rende le vote plus facile : un vote par anticipation plus long, des bureaux près des lieux de travail, un cours d'éducation civique digne de ce nom. Un droit qu'on exerce parce qu'on y croit vaut mieux qu'un devoir qu'on remplit par crainte d'une amende. »";

/** Act 7: a student's introduction and conclusion, before and after. */
export const COPIE_TEXT =
  "La copie de Tomás. Le sujet : les musées devraient-ils être gratuits pour tous ?\n\nL'introduction, avant : « Depuis la nuit des temps, l'homme aime l'art. Dans ce texte, je vais parler des musées. Il y a des avantages et des inconvénients. »\n\nLa conclusion, avant : « En conclusion, il y a des pour et des contre, et chacun a son opinion. De plus, les musées devraient aussi ouvrir le soir. »\n\nLe commentaire de sa professeure : « Ton introduction ne pose pas la question, et ta conclusion n'y répond pas. Tu ajoutes même un nouvel argument à la fin. »\n\nL'introduction, après : « En 2019, le Louvre a accueilli près de dix millions de visiteurs. Combien d'habitants de sa propre ville n'y ont pourtant jamais mis les pieds ? La gratuité des musées est souvent présentée comme la clé de l'accès à la culture. Faut-il pour autant la généraliser ? Nous verrons d'abord ce que la gratuité permet, puis ce qu'elle coûte, avant de proposer une solution intermédiaire. »\n\nLa conclusion, après : « La gratuité ouvre des portes, mais elle ne suffit pas à faire entrer ceux qui ne se sentent pas invités, et elle prive les musées d'une partie de leurs ressources. Je suis donc favorable à une gratuité ciblée : pour les jeunes, pour les habitants, et un dimanche par mois pour tous. Reste une question : un musée gratuit mais vide aurait-il vraiment gagné quelque chose ? »";

/** Act 8: one subject, two plans, and a second subject for contrast. */
export const PLANS_TEXT =
  "Un sujet, deux plans. Le sujet : faut-il limiter le nombre de touristes dans les villes historiques ?\n\nLa question appelle un oui ou un non : le plan dialectique s'impose. Première partie, les raisons de limiter : à Venise ou à Dubrovnik, les habitants quittent le centre, chassés par les loyers et par la foule. Deuxième partie, les raisons de ne pas limiter : le tourisme fait vivre des milliers de commerces, et un quota risque de réserver la ville à ceux qui peuvent payer. Troisième partie, la position de l'auteur, qui tranche : limiter, oui, mais par la réservation et par des taxes ciblées, pas par l'interdiction.\n\nImaginons maintenant un autre sujet : quels sont les effets du tourisme de masse sur une ville historique ? Ici, personne ne demande d'être pour ou contre. Un plan thématique convient mieux : les effets économiques d'abord, puis les effets sur la vie des habitants, enfin les effets sur le patrimoine lui-même. Chaque partie a sa propre idée directrice, et la conclusion fait le bilan avant de répondre.\n\nDans les deux cas, chaque partie commence par une phrase qui annonce son idée, et chaque passage d'une partie à l'autre est signalé par une transition : « Après avoir vu les avantages, examinons maintenant les limites. » Le lecteur sait toujours où il en est, et il ne se demande jamais pourquoi il lit ce paragraphe-là à cet endroit-là.";

/** Act 9: a TCF Tâche 3, two opposed texts on an urban toll. */
export const DEUX_TEXTES_TEXT =
  "TÂCHE 3 · La mairie envisage de faire payer chaque voiture qui entre dans le centre-ville aux heures de pointe. Deux textes ont paru dans le journal de la ville au sujet de ce péage urbain.\n\nTEXTE A · « Un péage urbain n'est pas une punition, c'est un prix. Aujourd'hui, l'automobiliste qui entre dans le centre ne paie ni le bruit, ni la pollution, ni les heures perdues par les bus coincés derrière lui. À Stockholm, le trafic a nettement baissé après l'introduction du péage, et les habitants, d'abord hostiles, ont fini par voter pour le garder. L'argent récolté peut financer les transports en commun : ceux qui renoncent à la voiture y gagnent deux fois. »\n\nTEXTE B · « Un péage est un impôt sur ceux qui n'ont pas le choix. Le cadre qui habite le centre marche jusqu'à son bureau ; l'aide-soignante qui vit à vingt kilomètres et commence à six heures, quand aucun bus ne circule, paiera chaque matin. On promet des transports en commun meilleurs pour demain, mais le péage, lui, sera payé dès aujourd'hui. Qu'on améliore d'abord les bus, et l'on verra ensuite si un péage est encore nécessaire. »\n\nComparez les deux points de vue, puis prenez position. (120 à 180 mots)";

/** Act 10: an opinion column made of reasoning traps. */
export const SOPHISMES_TEXT =
  "Billet d'humeur. Des pistes cyclables en hiver ? Non merci. Par Gilles Bouchard.\n\nTous les cyclistes grillent les feux rouges : il suffit de sortir dans la rue pour le constater. Et voilà qu'on veut déneiger leurs pistes en plein mois de janvier. Depuis que la ville a ouvert la piste de la rue Saint-Denis, trois commerces ont fermé : la preuve que ces aménagements tuent le commerce. Les partisans du vélo d'hiver veulent, au fond, interdire la voiture en ville. Ce sont d'ailleurs des militants qui n'ont jamais travaillé de leur vie. Soyons clairs : soit on déneige les pistes, soit on déneige les rues des familles. Aujourd'hui, on déneige une piste ; demain, on fermera les rues aux voitures ; après-demain, on nous interdira de sortir de chez nous. Nos parents se sont toujours déplacés en voiture l'hiver, et ils ne s'en portaient pas plus mal. D'ailleurs, un sondage sur ma page montre que neuf lecteurs sur dix sont d'accord avec moi.\n\nCe billet a du style, et presque aucun argument. Il contient en revanche au moins six pièges de raisonnement : une généralisation, une fausse cause, un homme de paille, une attaque personnelle, un faux dilemme et une pente glissante. Tu vas apprendre à les reconnaître, puis à les éviter dans ta propre copie.";

/** Act 11: the model DELF B2 paper. Annotated in the reading's questions and
 *  in the sheet `sheet-grille`. A DIFFERENT subject from the task, so the
 *  learner imitates the moves, not the sentences. */
export const MODELE_TEXT =
  "Téléphones au lycée : interdire, ou apprendre à s'en passer ?\n\nDepuis la rentrée, plusieurs lycées de ma région interdisent le téléphone portable dans l'enceinte de l'établissement. Faut-il généraliser cette mesure ? Je ne le pense pas : une interdiction totale me semble moins efficace qu'un usage encadré.\n\nIl est vrai que le téléphone disperse l'attention. Chacun a vu des élèves consulter leurs messages en plein cours, et les enseignants ont raison de s'en plaindre. Certes, une interdiction règle ce problème en classe. Mais elle ne dit rien de ce qui se passe à la sortie, où l'élève retrouve son téléphone sans avoir appris à le poser.\n\nD'abord, le lycée est le dernier lieu où l'on peut apprendre à maîtriser cet outil avant l'âge adulte. Un élève de seize ans qui range son téléphone parce qu'on le lui ordonne apprend une règle ; celui qui en discute avec ses professeurs prend une habitude.\n\nEnsuite, le téléphone sert aussi à apprendre. Dans le lycée de ma fille, les élèves photographient le tableau, vérifient une date, enregistrent un exposé. Tout interdire reviendrait à se priver de ces usages.\n\nEnfin, une interdiction est difficile à faire respecter. Si chaque surveillant devait fouiller les sacs, le lycée deviendrait un lieu de contrôle plutôt que d'éducation.\n\nJe propose donc une règle simple : des téléphones éteints et rangés en cours, autorisés à la pause, et une heure par trimestre consacrée à leur bon usage. En somme, plutôt que de cacher le problème, apprenons aux élèves à le résoudre.";

/** The model answer of the TASK (a different subject from MODELE_TEXT), and
 *  its annotation, paragraph by paragraph, keyed to the rubric. */
export const TASK_MODEL =
  "L'argent liquide : un droit à défendre\n\nDans votre dernier numéro, plusieurs économistes souhaitent la disparition de l'argent liquide, au nom de la sécurité et de la lutte contre la fraude. Faut-il vraiment s'en réjouir ? Je ne pense pas que la fin des espèces soit une bonne nouvelle : le paiement par carte doit rester un choix, pas une obligation.\n\nIl est indéniable que le paiement sans contact fait gagner du temps, et je comprends les commerçants qui préfèrent ne plus garder de billets dans leur caisse. On pourrait aussi objecter que les espèces facilitent la fraude. C'est vrai en partie ; il n'en reste pas moins que la fraude en ligne, elle, ne cesse d'augmenter.\n\nD'abord, la disparition des espèces priverait certaines personnes de leur autonomie. Ma voisine, qui a quatre-vingt-cinq ans, paie tout en billets parce qu'elle ne se sent pas à l'aise avec une application. Pour elle, un magasin qui refuse le liquide est un magasin fermé.\n\nEnsuite, l'argent liquide reste le seul moyen de paiement qui ne dépend d'aucune banque. L'été dernier, une panne informatique a bloqué les terminaux de mon supermarché pendant toute une matinée : seuls les clients qui avaient de la monnaie sont repartis avec leurs courses.\n\nEnfin, même si le paiement par carte est pratique, il laisse une trace de chaque achat. Bien que je n'aie rien à cacher, je ne vois pas pourquoi ma banque devrait savoir où j'achète mon pain.\n\nEn somme, supprimer les espèces reviendrait à imposer à tous un outil qui ne convient pas à tous. Je souhaite donc que la loi oblige les commerces à accepter l'argent liquide, à côté de la carte.";

/** The annotation of TASK_MODEL: each paragraph, what it does, the criterion. */
export const TASK_MODEL_NOTES: readonly [string, string, string][] = [
  ['le titre', 'annonce la thèse, sur le ton de la presse', 'respect de la consigne'],
  ["l'introduction", 'reprend le dossier, pose la question, donne la thèse avec je ne pense pas que + subjonctif', 'respect de la consigne, argumentation'],
  ['la concession', 'reconnaît deux arguments adverses (le temps, la fraude), puis y répond : il n’en reste pas moins que', 'argumentation'],
  ['argument 1', "l'autonomie, prouvée par un exemple (la voisine) ; nominalisation : la disparition des espèces", 'argumentation, étendue lexicale et grammaticale'],
  ['argument 2', "l'indépendance face aux banques, prouvée par un fait (la panne)", 'argumentation, cohérence'],
  ['argument 3', 'la vie privée, avec même si + indicatif et bien que + subjonctif', 'étendue grammaticale'],
  ['la conclusion', 'répond à la question (en somme) et fait une demande précise, sans nouvel argument', 'respect de la consigne, cohérence'],
  ['les connecteurs', "d'abord, ensuite, enfin, en somme ; on pourrait objecter que, il n'en reste pas moins que", 'cohérence et cohésion'],
];
