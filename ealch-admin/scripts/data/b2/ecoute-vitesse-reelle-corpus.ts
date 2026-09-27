// b2.25.l1 « Écouter à vitesse réelle » — the authored corpus, the imports,
// the anchor listenings and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (the workshop shape, strategy variant,
// amended §1.4) on top of B1-BUILD-PLAYBOOK.md, with the B2 rules of
// B2-BUILD-LOG.md (« Listening at B2 », « What is different at B2 »). The B2
// sequel of b1.38 « Écouter sans tout comprendre » (../b1/strategies-ecoute-*),
// whose act loop it mirrors and whose rows it reuses.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (do not rename; a later lesson may quote the reframe):
// REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   LISTENING AT NATURAL SPEED FOR STRUCTURE AND STANCE, NOT TRANSCRIPTION.
//   b1.38 taught a learner to survive a fast announcement (catch the gist,
//   the numbers, the small word). b2.25 teaches them to FOLLOW 1 to 3
//   minutes of natural talk: where the discourse is going, who holds which
//   position, and how each voice stands towards what it says.
//
//     le plan oral     announced structure: je vais procéder en trois temps,
//                      premièrement, j'en viens à, petite parenthèse, pour
//                      conclure
//     les notes        notes as a frame: key words, arrows, figures, columns,
//                      a « ? » for what was missed
//     la position      who holds which position in a debate: names as turn
//                      cues, agreement, disagreement, partial agreement
//     la parole        turn-taking: taking, keeping, cutting and handing
//                      back the floor; an interrupted idea comes back
//     la concession    certes... mais, je te l'accorde, il est vrai que...
//                      cela dit
//     la distance      doubt and distance: soi-disant, prétendument, on
//                      verra, comme par hasard; the journalist's conditional
//     l'ironie         words that praise while the situation contradicts:
//                      bravo, belle réussite; rien que ça; c'est ça, oui
//     la source        fact, attributed claim, unconfirmed lead, witness
//                      opinion, in a news report
//     l'implicite      the polite no: c'est une piste, ça me paraît
//                      difficile, sur le principe, pourquoi pas
//     le fil perdu     recovering after a missed chunk: the next signpost,
//                      the reformulation (autrement dit), the final recap
//     l'épreuve        DELF B2, TEF and TCF listening formats
//     le résumé        the graded task: notes on a two-minute debate, then
//                      a 120 to 160 word summary of both positions and one
//                      speaker's stance
//
//   NOT OWNED, CITED ONLY:
//     - b1.38 owns gist-first, key words, numbers, reduced spoken forms,
//       asking for repetition and fact / opinion on the radio. Its reframe is
//       QUOTED (act 1, roundup) and its rows are reused by id.
//     - b1.37 owns reading strategy; b2.24 (written in parallel) owns
//       critical reading of stance on the page. This lesson is the EAR's side
//       of the same moves and cites b2.24 by trail position only.
//     - connectors as grammar are b1.30 to b1.32's; certes is b1.32's row
//       (connecteurs-logiques .1573 and .1581, reused, never re-authored).
//     - regional French as a system is b2.31's. Here regional features are
//       only MARKED where a speaker uses them (septante, savoir for pouvoir,
//       présentement, pis, balado, cellulaire), receptive only.
//     - the B2 structures heard in the anchors (conditionnel passé, mixed si
//       clause, futur antérieur, plus-que-parfait, bien que, the subjunctive
//       after je ne suis pas sûr que) belong to lessons 1 to 16 of B2; they
//       are only RECOGNISED here, in one recycling quiz round.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `strategies-de-comprehension` (« Les stratégies de
//     compréhension », education, b1-b2), sub-theme for these rows:
//     « écouter à vitesse réelle » (to be ADDED to the theme's sub_themes
//     at import; the seed's catalogue row lists « lire un texte », « écouter »,
//     « deviner le sens »). Seed read 2026-09-27: 376 fr.b1 rows, NO fr.b2 row
//     in the theme.
//
//  2. ID BLOCK: `fr.b2.strategies-de-comprehension.1600`-`.1799`, assigned
//     by the orchestrator. `.1400`-`.1599` belongs to b2.24 (written in
//     parallel) and is NOT touched. The level is part of the id, so these
//     cannot collide with b1.37 (.1000-.1199) or b1.38 (.1200-.1399), which
//     are `fr.b1.*`. Used: `.1600`-`.1764`, 165 rows, no gaps (§G).
//
//  3. Every reused id in §F was read out of seed.json on 2026-09-27 and its
//     `fr` is copied verbatim wherever a section prints it, through `src()`.
//     Headwords were probed against the seed AND the parallel B2 drafts
//     (2026-09-27): « autrement dit » (b2.26) and « s'accorder sur » (b2.23)
//     are theirs, « c'est-à-dire » is b1.30's (imported). « le pouvoir d'achat »,
//     « un porte-parole », « le témoin », « l'animateur », « certes »,
//     « prendre des notes », « un mot-clé » and « Je vais voir ce que je peux
//     faire. » exist, so they are IMPORTED, never re-authored.
//
//  4. THE ANCHOR LISTENINGS ARE AUTHORED, NOT QUOTED, and they are NOT all
//     corpus rows. At B2 a recording is 1 to 3 minutes of natural speech;
//     its lines are 15 to 35 words of connected talk, which make poor
//     flashcards. So each anchor is a list of LINES (§I) in which the lines
//     that carry the act's move ARE corpus rows (so the French is identical
//     everywhere it is printed), and the connecting talk is free text owned
//     by this file. Every event, figure, person, company, station and
//     programme is invented. Real places are used only as places (Lausanne,
//     Namur, Dakar, Trois-Rivières, Saint-Roch, rue Masson).
//
//  5. WRITTEN FOR TTS. Every line is spoken by fr-FR TTS: figures in words
//     where a voice must say them (« quatre-vingt-dix dollars »), no line
//     leans on punctuation the voice cannot say, and irony is carried by the
//     WORDS and the situation, never by a tone TTS cannot produce. Studio
//     briefs name the lines that need real voices (lesson file, REC_DESC).
//
//  6. RESPELLINGS. Hyphenated syllables, the last stressed syllable of each
//     group in caps, ü for French u, nasals closed with ⁿ, no U+203F tie.
//     Spelled for the nasal checker rather than the ear (a2.34's trick, the
//     consonant is really pronounced): « colonnes » ko-LONN, « personne »
//     pehr-SONN, « Hélène » ay-LENN.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b2.25',
  seq: 25,
  title: 'Native-Speed Listening',
  sub: 'Écouter à vitesse réelle',
  canDo: 'Can follow one to three minutes of natural-speed French (a debate, an interview, a lecture, a podcast, a report, a phone negotiation) for its structure and stance: the announced plan, who holds which position, turn-taking and interruptions, concession, doubt and irony, fact against attributed claim, implicit disagreement, and can recover after a missed chunk, take notes as a frame and summarise both positions and a speaker\'s stance in writing',
  prereqUnitIds: ['b1.38', 'b1.37'],
} as const;

export const LESSON_ID = 'b2.25.l1';
export const THEME = 'strategies-de-comprehension';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the orchestrator. */
export const ID_RANGES = [[1600, 1799]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/** b1.37 and b1.38's rows, published and carried by the seed: reused, never authored. */
export const B1S = (n: number) => `fr.b1.${THEME}.${n}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  By trail position, in French words (« la leçon 38 du B1 »), never a raw
 *  unit id. B1 positions are the shipped seqs; B2 positions are Paul's plan
 *  (B2-BUILD-LOG.md), which the trail will follow.
 * ══════════════════════════════════════════════════════════════════════════ */

export const ECOUTE_B1_UNIT = 'b1.38';
export const LECTURE_B1_UNIT = 'b1.37';
export const DISCOURS_B1_UNIT = 'b1.19';
export const CONCESSION_B1_UNIT = 'b1.32';

/** TODO(import): drop once every b2 unit is a row in `content_units`. */
const SEQ_FROM_PLAN: Record<string, number> = {
  'b1.19': 19, 'b1.30': 30, 'b1.32': 32, 'b1.37': 37, 'b1.38': 38,
  'b2.01': 1, 'b2.02': 2, 'b2.04': 4, 'b2.06': 6, 'b2.07': 7, 'b2.16': 16,
  'b2.24': 24, 'b2.26': 26, 'b2.31': 31,
};
export function refFr(unitId: string): string {
  const n = SEQ_FROM_PLAN[unitId];
  if (!n) throw new Error(`b2.25: no trail position for ${unitId}`);
  return `la leçon ${n} du ${unitId.slice(0, 2).toUpperCase()}`;
}

export const ECOUTE_B1_REF = refFr('b1.38');
export const LECTURE_B1_REF = refFr('b1.37');
export const DISCOURS_B1_REF = refFr('b1.19');
export const CONCESSION_B1_REF = refFr('b1.32');
export const CONNECTEURS_REF = 'les leçons 30 à 32 du B1';
export const LECTURE_B2_REF = refFr('b2.24');
export const REGIONS_REF = refFr('b2.31');
export const NEXT_REF = refFr('b2.26');
/** The B2 structures recycled in the quiz, by trail position. */
export const PQP_REF = refFr('b2.01');
export const COND_PASSE_REF = refFr('b2.02');
export const SI_MIXTE_REF = refFr('b2.04');
export const SUBJ_REF = refFr('b2.06');
export const FUT_ANT_REF = refFr('b2.07');
export const CONCESSION_B2_REF = refFr('b2.16');

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED, never retyped
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B138_REFRAME, REFRAME_EN as B138_REFRAME_EN } from '../b1/strategies-ecoute-corpus.ts';
export { REFRAME as B137_REFRAME, REFRAME_EN as B137_REFRAME_EN } from '../b1/strategies-lecture-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE FRAME (la charpente). A house is its frame: the beams hold it up and
 *  everything else hangs on them. A long stretch of natural speech is the
 *  same: the plan (where it is going), the positions (who holds what) and
 *  the tone (how each voice stands) are the beams. A learner who writes down
 *  sentences collects plaster and loses the house. The frame is also the
 *  shape of the notes the task asks for.
 *
 *  It is NOT « ignore the words ». b1.38's net still catches the numbers
 *  and the small word; the frame is where they hang. Act 11's summary is
 *  graded on figures as well as positions.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Écoute la charpente : le plan, les positions, le ton.';
export const REFRAME_EN = 'Listen for the frame: the plan, the positions, the tone.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Attrape le sens, pas chaque mot.',
    why: "b1.38's reframe, quoted here. At B2 it is not enough: a learner can catch the gist of a debate (« ils parlent de l'autobus gratuit ») and still not know who is for, who concedes what, or that one guest is being ironic. The B2 step is from WHAT is said to HOW the talk is built and WHO stands WHERE.",
  },
  {
    text: 'Qui dit quoi, et comment.',
    why: 'Covers positions and tone, drops the plan: acts 2, 3 and 9 (the announced structure, the notes, finding the thread again) would have no line to stand on.',
  },
  {
    text: 'Écoute le ton, pas les mots.',
    why: 'False where act 7 and act 11 must hold: a stance is carried by WORDS (certes, soi-disant, serait) far more than by a voice, and TTS speaks every line of this lesson in one even voice. Irony here is readable from the words and the situation.',
  },
  {
    text: 'Prends des notes en charpente.',
    why: 'The best line for act 3, and the task. As a lesson rule it makes listening a note-taking exercise, and acts 5, 6 and 8 (turn-taking, irony, the polite no) are about hearing, not writing.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-27 and its French is in the
 *  trailing comment. `NOT_SPEAKABLE` lists the rows with no `voiceflash`,
 *  which a `practice` speak section may never name. Every import carries a
 *  `flashcard` drill, so none is NOT_DECK_ABLE.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    B1S(1210),                               // Attrape le sens, pas chaque mot.  (b1.38's reframe)
    B1S(1353),                               // À la radio, écoute qui parle avant ce qu'il dit.
    B1S(1358),                               // l'animateur
  ],
  act2: [
    B1S(1370),                               // d'une part, d'autre part
    'fr.b1.expressions-imagees.1351',        // Bon, revenons à nos moutons.
  ],
  act3: [
    'fr.a1.ecole.105',                       // prendre des notes
    B1S(1267),                               // un mot-clé
    B1S(1258),                               // J'écoute les mots forts : les noms, les verbes, les chiffres.
  ],
  act4: [
    'fr.b1.ecologie.1172',                   // à mon avis, selon moi
    B1S(1349),                               // Moi, je trouve ça ridicule : les commerçants vont tous fermer.
  ],
  act5: [
    'fr.b1.affaires.1141',                   // Permettez-moi de vous interrompre une seconde.
  ],
  act6: [
    'fr.b1.connecteurs-logiques.1581',       // certes
    'fr.b1.connecteurs-logiques.1573',       // Certes, le projet coûte cher, mais il profite à tout le monde.
  ],
  act7: [
    'fr.b1.droit.023',                       // le témoin
    'fr.b1.journalisme.1075',                // un porte-parole
    B1S(1350),                               // Il paraît que la Ville veut fermer tout le quartier l'an prochain.
  ],
  act8: [
    'fr.a2.hebergement.119',                 // Je vais voir ce que je peux faire.
    B1S(1334),                               // Si je comprends bien, le technicien vient mercredi après-midi, et je dois être là.
  ],
  act9: [
    B1S(1244),                               // L'idée d'abord, les détails à la deuxième écoute.
    B1S(1367),                               // Si je rate un détail, je passe à la question suivante.
    'fr.b1.connecteurs-logiques.1135',       // c'est-à-dire
  ],
  act10: [
    B1S(1366),                               // Je lis les questions et les réponses avant l'écoute.
    B1S(1368),                               // À l'épreuve d'écoute, la question te dit quoi écouter.
  ],
  act11: [
    'fr.b2.questions-sociales.003',          // le pouvoir d'achat
    B1S(1381),                               // Une bonne note garde qui, quoi, quand et quoi faire.
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. None here. */
export const NOT_DECK_ABLE: string[] = [];

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  B1S(1210),                                 // flashcard only (a rule card)
  B1S(1353),                                 // flashcard only (a rule card)
  B1S(1244),                                 // flashcard only (a rule card)
  B1S(1368),                                 // flashcard only (a rule card)
  B1S(1381),                                 // flashcard only (a rule card)
  'fr.b2.questions-sociales.003',            // flashcard only
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  A WORKSHOP CORPUS HOLDS PHRASES THAT DO A JOB: the markers a listener
 *  hears (j'en viens à, je vous arrête, soi-disant, c'est une piste), the
 *  lines of an anchor that carry the act's move, the questions a listener
 *  asks, and the sentences the learner can reuse in the graded summary.
 *  Six rows carry a B2 structure from lessons 1 to 16 of B2, tagged
 *  `b2-structure`, for the recycling round.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['ecoute-vitesse-reelle'], ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, ...extra,
});

/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE DÉBAT QUI FILE ─────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1600, 'Je note chaque phrase, et je perds le fil.', 'I write down every sentence, and I lose the thread.', '/ʒə nɔt ʃak fʁaz e ʒə pɛʁ lə fil/', 'zhuh not shak FRAHZ | ay zhuh pehr luh FEEL', ['strategie', 'piege']),
  sent(1601, "J'écoute qui parle, et ce que chacun défend.", 'I listen for who is speaking, and what each one argues for.', '/ʒe.kut ki paʁl e sə kə ʃa.kœ̃ de.fɑ̃/', 'zhay-koot kee PARL | ay suh kuh sha-kuhⁿ day-FAHⁿ', ['strategie', 'position'], FCVDR),
  sent(1602, REFRAME, REFRAME_EN, '/e.kut la ʃaʁ.pɑ̃t lə plɑ̃ le po.zi.sjɔ̃ lə tɔ̃/', 'ay-koot la shar-PAHⁿT | luh PLAHⁿ | lay po-zee-SYOHⁿ | luh TOHⁿ', ['rule', 'reframe'], ['flashcard'],
    rule('Un débat passe à vitesse réelle. Que cherches-tu ?', 'La charpente : où va le discours, qui défend quoi, et sur quel ton. Les phrases peuvent passer.')),
  sent(1603, 'Qui est pour, qui est contre, et pourquoi ?', 'Who is for, who is against, and why?', '/ki ɛ puʁ ki ɛ kɔ̃tʁ e puʁ.kwa/', 'kee eh POOR | kee eh KOHⁿTR | ay poor-KWA', ['question', 'position']),
  sent(1604, "Ce que je conteste, c'est la méthode.", 'What I dispute is the method.', '/sə kə ʒə kɔ̃.tɛst sɛ la me.tɔd/', 'suh kuh zhuh kohⁿ-TEST | seh la may-TOD', ['position', 'debat'], FCVDR),
  sent(1605, 'Je ne suis pas contre la sécurité, évidemment.', 'I am not against safety, obviously.', '/ʒə nə sɥi pa kɔ̃tʁ la se.ky.ʁi.te e.vi.da.mɑ̃/', 'zhuh nuh swee pa kohⁿtr la say-kü-ree-TAY | ay-vee-da-MAHⁿ', ['position', 'concession']),
  sent(1606, 'Samuel Ouellet est pour : il parle de la sécurité des enfants.', "Samuel Ouellet is for it: he talks about the children's safety.", '/sa.my.ɛl wɛ.lɛ ɛ puʁ il paʁl də la se.ky.ʁi.te de.zɑ̃.fɑ̃/', 'sa-mü-EL weh-LEH eh POOR | eel parl duh la say-kü-ree-TAY day-zahⁿ-FAHⁿ', ['resume', 'position']),
  sent(1607, 'Hélène Brassard ne conteste pas la sécurité, mais la méthode.', 'Hélène Brassard does not dispute safety, but the method.', '/e.lɛn bʁa.saʁ nə kɔ̃.tɛst pa la se.ky.ʁi.te mɛ la me.tɔd/', 'ay-LENN bra-SAR | nuh kohⁿ-test pa la say-kü-ree-TAY | meh la may-TOD', ['resume', 'position'], FCVDR),
  sent(1608, "L'animatrice ne donne pas son avis : elle distribue la parole.", 'The host gives no opinion: she gives each guest the floor in turn.', '/la.ni.ma.tʁis nə dɔn pa sɔ̃.na.vi ɛl dis.tʁi.by la pa.ʁɔl/', 'la-nee-ma-TREESS nuh don pa sohⁿ-na-VEE | el dees-tree-bü la pa-ROL', ['parole', 'position']),
  sent(1609, "À vitesse réelle, je n'entends pas tous les mots.", 'At real speed, I do not hear every word.', '/a vi.tɛs ʁe.ɛl ʒə nɑ̃.tɑ̃ pa tu le mo/', 'a vee-tess ray-EL | zhuh nahⁿ-tahⁿ pa too lay MOH', ['strategie'], FCVDR),
  sent(1610, 'Je ne cherche pas les phrases : je cherche la charpente.', 'I am not looking for the sentences: I am looking for the frame.', '/ʒə nə ʃɛʁʃ pa le fʁaz ʒə ʃɛʁʃ la ʃaʁ.pɑ̃t/', 'zhuh nuh shehrsh pa lay FRAHZ | zhuh shehrsh la shar-PAHⁿT', ['strategie']),
  phrase(1611, 'une rue scolaire', 'a school street (closed to cars at school times)', '/yn ʁy skɔ.lɛʁ/', 'ün rü sko-LEHR', ['debat']),
  phrase(1612, 'distribuer la parole', 'to give each speaker the floor in turn', '/dis.tʁi.bɥe la pa.ʁɔl/', 'dees-tree-bway la pa-ROL', ['parole']),
  phrase(1613, 'un accrochage', 'a minor collision, a fender bender', '/œ̃.na.kʁɔ.ʃaʒ/', 'uhⁿ-na-kro-SHAZH', ['debat']),
];

/* ── ACT 2 · LE PLAN ANNONCÉ ─────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1614, 'Je vais procéder en trois temps.', 'I will proceed in three stages.', '/ʒə vɛ pʁɔ.se.de ɑ̃ tʁwa tɑ̃/', 'zhuh veh pro-say-DAY | ahⁿ trwa TAHⁿ', ['plan', 'expose'], FCVDR),
  sent(1615, 'Premièrement, la santé.', 'Firstly, health.', '/pʁə.mjɛʁ.mɑ̃ la sɑ̃.te/', 'pruh-myehr-MAHⁿ | la sahⁿ-TAY', ['plan', 'expose']),
  phrase(1616, 'petite parenthèse', 'a quick aside', '/pə.tit pa.ʁɑ̃.tɛz/', 'puh-teet pa-rahⁿ-TEZ', ['plan', 'digression']),
  sent(1617, 'Je referme la parenthèse.', 'I close the aside.', '/ʒə ʁə.fɛʁm la pa.ʁɑ̃.tɛz/', 'zhuh ruh-fehrm la pa-rahⁿ-TEZ', ['plan', 'digression'], FCVDR),
  sent(1618, "J'en viens maintenant à mon deuxième point.", 'I now come to my second point.', '/ʒɑ̃ vjɛ̃ mɛ̃t.nɑ̃ a mɔ̃ dø.zjɛm pwɛ̃/', 'zhahⁿ vyehⁿ mehⁿt-NAHⁿ | a mohⁿ deu-zyem PWEHⁿ', ['plan', 'expose'], FCVDR),
  sent(1619, 'Troisième et dernier point : les solutions.', 'Third and last point: the solutions.', '/tʁwa.zjɛm e dɛʁ.nje pwɛ̃ le so.ly.sjɔ̃/', 'trwa-zyem ay dehr-nyay PWEHⁿ | lay so-lü-SYOHⁿ', ['plan', 'expose']),
  sent(1620, "Pour conclure, je dirais que le bruit n'est pas une fatalité.", 'To conclude, I would say that noise is not inevitable.', '/puʁ kɔ̃.klyʁ ʒə di.ʁɛ kə lə bʁɥi nɛ pa.zyn fa.ta.li.te/', 'poor kohⁿ-KLÜR | zhuh dee-reh kuh luh BRWEE | neh pa-zün fa-ta-lee-TAY', ['plan', 'conclusion'], FCVDR),
  sent(1621, 'Le plan annoncé, c\'est la charpente de tes notes.', 'The announced plan is the frame of your notes.', '/lə plɑ̃ a.nɔ̃.se sɛ la ʃaʁ.pɑ̃t də te nɔt/', 'luh PLAHⁿ a-nohⁿ-SAY | seh la shar-PAHⁿT duh tay NOT', ['rule', 'plan'], ['flashcard'],
    rule("L'orateur dit : « en trois temps ». Que fais-tu ?", 'Tu prépares trois lignes dans tes notes, et tu attends les trois panneaux qui les ouvrent.')),
  phrase(1622, 'dans un premier temps', 'first of all, initially', '/dɑ̃.zœ̃ pʁə.mje tɑ̃/', 'dahⁿ-zuhⁿ pruh-myay TAHⁿ', ['plan']),
  phrase(1623, 'dans un second temps', 'secondly, in a second stage', '/dɑ̃.zœ̃ sə.ɡɔ̃ tɑ̃/', 'dahⁿ-zuhⁿ suh-gohⁿ TAHⁿ', ['plan']),
  phrase(1624, 'pour conclure', 'to conclude', '/puʁ kɔ̃.klyʁ/', 'poor kohⁿ-KLÜR', ['plan', 'conclusion']),
  sent(1625, 'Revenons-en à notre sujet.', "Let's get back to our subject.", '/ʁə.və.nɔ̃.zɑ̃ a nɔtʁ sy.ʒɛ/', 'ruh-vuh-nohⁿ-ZAHⁿ | a notr sü-ZHEH', ['plan', 'digression']),
  sent(1626, 'Je note trois titres, puis je remplis les cases.', 'I write three headings, then I fill in the boxes.', '/ʒə nɔt tʁwa titʁ pɥi ʒə ʁɑ̃.pli le kaz/', 'zhuh not trwa TEETR | pwee zhuh rahⁿ-plee lay KAHZ', ['strategie', 'notes'], FCVDR),
  sent(1627, "Une parenthèse, c'est un détail : je ne la note pas toujours.", 'An aside is a detail: I do not always note it.', '/yn pa.ʁɑ̃.tɛz sɛ.tœ̃ de.taj ʒə nə la nɔt pa tu.ʒuʁ/', 'ün pa-rahⁿ-TEZ | seh-tuhⁿ day-TAHY | zhuh nuh la not pa too-ZHOOR', ['strategie', 'digression']),
];

/* ── ACT 3 · DES NOTES EN CHARPENTE ──────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1628, 'Je note des mots-clés, pas des phrases.', 'I note key words, not sentences.', '/ʒə nɔt de mo.kle pa de fʁaz/', 'zhuh not day moh-KLAY | pa day FRAHZ', ['notes'], FCVDR),
  sent(1629, 'Une flèche pour une cause, une flèche pour une conséquence.', 'An arrow for a cause, an arrow for a consequence.', '/yn flɛʃ puʁ yn koz yn flɛʃ puʁ yn kɔ̃.se.kɑ̃s/', 'ün FLESH poor ün KOHZ | ün FLESH poor ün kohⁿ-say-KAHⁿS', ['notes']),
  sent(1630, 'Les chiffres, je les note en chiffres.', 'Numbers, I write them down as figures.', '/le ʃifʁ ʒə le nɔt ɑ̃ ʃifʁ/', 'lay SHEEFR | zhuh lay not ahⁿ SHEEFR', ['notes', 'chiffre'], FCVDR),
  sent(1631, "Un point d'interrogation quand j'ai raté quelque chose.", 'A question mark when I have missed something.', '/œ̃ pwɛ̃ dɛ̃.te.ʁɔ.ɡa.sjɔ̃ kɑ̃ ʒe ʁa.te kɛl.kə ʃoz/', 'uhⁿ pwehⁿ dehⁿ-tay-ro-ga-SYOHⁿ | kahⁿ zhay ra-tay kel-kuh SHOHZ', ['notes', 'fil']),
  sent(1632, 'Je laisse de la place pour compléter après.', 'I leave room to fill in afterwards.', '/ʒə lɛs də la plas puʁ kɔ̃.ple.te a.pʁɛ/', 'zhuh less duh la PLASS | poor kohⁿ-play-tay a-PREH', ['notes'], FCVDR),
  sent(1633, 'Des notes en charpente : peu de mots, beaucoup de liens.', 'Frame notes: few words, many links.', '/de nɔt ɑ̃ ʃaʁ.pɑ̃t pø də mo bo.ku də ljɛ̃/', 'day not ahⁿ shar-PAHⁿT | peu duh MOH | boh-koo duh LYEHⁿ', ['rule', 'notes'], ['flashcard'],
    rule('Tu écoutes une chronique rapide. Tu écris quoi ?', 'Des mots-clés, des chiffres, des flèches et des colonnes. Les phrases viendront au moment du résumé.')),
  sent(1634, "Dans les écoles de la région, un repas sur trois n'est pas terminé.", "In the region's schools, one meal in three is not finished.", '/dɑ̃ le.ze.kɔl də la ʁe.ʒjɔ̃ œ̃ ʁə.pa syʁ tʁwa nɛ pa tɛʁ.mi.ne/', 'dahⁿ lay-zay-KOL duh la ray-ZHYOHⁿ | uhⁿ ruh-PA sür TRWA | neh pa tehr-mee-NAY', ['chronique', 'chiffre']),
  sent(1635, 'En six mois, le gaspillage a baissé de quarante pour cent.', 'In six months, waste fell by forty per cent.', '/ɑ̃ si mwa lə ɡas.pi.jaʒ a be.se də ka.ʁɑ̃t puʁ sɑ̃/', 'ahⁿ see MWA | luh gas-pee-YAZH a beh-SAY | duh ka-rahⁿt poor SAHⁿ', ['chronique', 'chiffre'], FCVDR),
  sent(1636, 'Pas si vite.', 'Not so fast.', '/pa si vit/', 'pa see VEET', ['ton', 'nuance']),
  sent(1637, 'Reste à savoir qui va payer.', 'It remains to be seen who will pay.', '/ʁɛst a sa.vwaʁ ki va pe.je/', 'rest a sa-VWAR | kee va pay-YAY', ['ton', 'nuance'], FCVDR),
  phrase(1638, 'le gaspillage alimentaire', 'food waste', '/lə ɡas.pi.jaʒ a.li.mɑ̃.tɛʁ/', 'luh gas-pee-yazh a-lee-mahⁿ-TEHR', ['chronique']),
  phrase(1639, 'une flèche', 'an arrow', '/yn flɛʃ/', 'ün FLESH', ['notes']),
  phrase(1640, 'une abréviation', 'an abbreviation', '/yn a.bʁe.vja.sjɔ̃/', 'ün a-bray-vya-SYOHⁿ', ['notes']),
  sent(1641, 'Mêmes portions pour tous, vingt minutes pour manger : on jette.', 'The same portions for everyone, twenty minutes to eat: food gets thrown away.', '/mɛm pɔʁ.sjɔ̃ puʁ tus vɛ̃ mi.nyt puʁ mɑ̃.ʒe ɔ̃ ʒɛt/', 'mem por-SYOHⁿ poor TOOSS | vehⁿ mee-nüt poor mahⁿ-ZHAY | ohⁿ ZHET', ['notes', 'chronique']),
];

/* ── ACT 4 · QUI PENSE QUOI ──────────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1642, 'Je comprends le constat, mais je ne partage pas la conclusion.', 'I understand the finding, but I do not share the conclusion.', '/ʒə kɔ̃.pʁɑ̃ lə kɔ̃s.ta mɛ ʒə nə paʁ.taʒ pa la kɔ̃.kly.zjɔ̃/', 'zhuh kohⁿ-prahⁿ luh kohⁿs-TA | meh zhuh nuh par-tazh pa la kohⁿ-klü-ZYOHⁿ', ['position', 'desaccord'], FCVDR),
  sent(1643, 'Sur ce point, je vous rejoins.', 'On that point, I agree with you.', '/syʁ sə pwɛ̃ ʒə vu ʁə.ʒwɛ̃/', 'sür suh PWEHⁿ | zhuh voo ruh-ZHWEHⁿ', ['position', 'accord']),
  sent(1644, 'Je ne partage pas du tout cette analyse.', 'I do not share that analysis at all.', '/ʒə nə paʁ.taʒ pa dy tu sɛ.ta.na.liz/', 'zhuh nuh par-tazh pa dü TOO | seh-ta-na-LEEZ', ['position', 'desaccord']),
  sent(1645, 'Moi, je vois les choses autrement.', 'I see things differently.', '/mwa ʒə vwa le ʃoz o.tʁə.mɑ̃/', 'MWA | zhuh vwa lay shohz oh-truh-MAHⁿ', ['position', 'desaccord'], FCVDR),
  sent(1646, "Comme vous le disiez tout à l'heure, le vrai problème, c'est le contrôle.", 'As you were saying earlier, the real problem is enforcement.', '/kɔm vu lə di.zje tu.ta.lœʁ lə vʁɛ pʁɔ.blɛm sɛ lə kɔ̃.tʁol/', 'kom voo luh dee-ZYAY too-ta-LUHR | luh vreh pro-BLEM | seh luh kohⁿ-TROHL', ['position', 'accord']),
  sent(1647, 'Le nom annonce la voix ; la voix annonce la position.', 'The name announces the voice; the voice announces the position.', '/lə nɔ̃ a.nɔ̃s la vwa la vwa a.nɔ̃s la po.zi.sjɔ̃/', 'luh NOHⁿ a-nohⁿs la VWA | la VWA a-nohⁿs la po-zee-SYOHⁿ', ['rule', 'position'], ['flashcard'],
    rule('Trois voix à la radio. Comment sais-tu qui parle ?', "L'animateur nomme la personne avant sa réponse. Note le nom, puis sa position en deux mots.")),
  sent(1648, 'Je fais deux colonnes : une par invité.', 'I make two columns: one per guest.', '/ʒə fɛ dø kɔ.lɔn yn paʁ ɛ̃.vi.te/', 'zhuh feh deu ko-LONN | ün par ehⁿ-vee-TAY', ['notes', 'position'], FCVDR),
  sent(1649, 'Sandrine Kaboré veut limiter les locations de courte durée.', 'Sandrine Kaboré wants to limit short-term rentals.', '/sɑ̃.dʁin ka.bɔ.ʁe vø li.mi.te le lɔ.ka.sjɔ̃ də kuʁt dy.ʁe/', 'sahⁿ-DREEN ka-bo-RAY | veu lee-mee-TAY lay lo-ka-syohⁿ duh koort dü-RAY', ['resume', 'position']),
  sent(1650, 'Olivier Gendron préfère un permis à une interdiction.', 'Olivier Gendron prefers a permit to a ban.', '/ɔ.li.vje ʒɑ̃.dʁɔ̃ pʁe.fɛʁ œ̃ pɛʁ.mi a yn ɛ̃.tɛʁ.dik.sjɔ̃/', 'o-lee-VYAY zhahⁿ-DROHⁿ | pray-FEHR uhⁿ pehr-MEE | a ün ehⁿ-tehr-deek-SYOHⁿ', ['resume', 'position']),
  sent(1651, "Ils s'accordent sur un point : il faut des contrôles.", 'They agree on one point: there must be checks.', '/il sa.kɔʁd syʁ œ̃ pwɛ̃ il fo de kɔ̃.tʁol/', 'eel sa-KORD sür uhⁿ PWEHⁿ | eel foh day kohⁿ-TROHL', ['resume', 'accord'], FCVDR),
  phrase(1652, 'une location de courte durée', 'a short-term rental', '/yn lɔ.ka.sjɔ̃ də kuʁt dy.ʁe/', 'ün lo-ka-syohⁿ duh koort dü-RAY', ['debat']),
  phrase(1653, "un point d'accord", 'a point of agreement', '/œ̃ pwɛ̃ da.kɔʁ/', 'uhⁿ pwehⁿ da-KOR', ['accord']),
  phrase(1654, 'le constat', 'the finding, the observation', '/lə kɔ̃s.ta/', 'luh kohⁿs-TA', ['position']),
  sent(1655, 'Qui répond à qui ?', 'Who is answering whom?', '/ki ʁe.pɔ̃ a ki/', 'kee ray-POHⁿ a KEE', ['question', 'parole']),
];

/* ── ACT 5 · COUPER, REPRENDRE LA PAROLE ─────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1656, 'Je vous arrête tout de suite.', 'Let me stop you right there.', '/ʒə vu.za.ʁɛt tu.də.sɥit/', 'zhuh voo-za-RET | tood-SWEET', ['parole', 'interruption'], FCVDR),
  sent(1657, "Laissez-moi finir, j'y viens.", 'Let me finish, I am coming to that.', '/lɛ.se.mwa fi.niʁ ʒi vjɛ̃/', 'leh-say-mwa fee-NEER | zhee VYEHⁿ', ['parole'], FCVDR),
  sent(1658, 'Si vous me permettez de terminer...', 'If you will allow me to finish...', '/si vu mə pɛʁ.me.te də tɛʁ.mi.ne/', 'see voo muh pehr-meh-TAY | duh tehr-mee-NAY', ['parole']),
  sent(1659, 'Vous ne répondez pas à ma question.', 'You are not answering my question.', '/vu nə ʁe.pɔ̃.de pa a ma kɛs.tjɔ̃/', 'voo nuh ray-pohⁿ-DAY pa | a ma kes-TYOHⁿ', ['parole', 'interruption'], FCVDR),
  sent(1660, 'Juste un mot, si je peux me permettre.', 'Just one word, if I may.', '/ʒys.tœ̃ mo si ʒə pø mə pɛʁ.mɛtʁ/', 'zhüs-tuhⁿ MOH | see zhuh peu muh pehr-METR', ['parole', 'interruption']),
  sent(1661, 'Je termine, et je vous laisse la parole.', 'I will finish, and then the floor is yours.', '/ʒə tɛʁ.min e ʒə vu lɛs la pa.ʁɔl/', 'zhuh tehr-MEEN | ay zhuh voo less la pa-ROL', ['parole']),
  sent(1662, 'Comme je le disais, le problème est ailleurs.', 'As I was saying, the problem lies elsewhere.', '/kɔm ʒə lə di.zɛ lə pʁɔ.blɛm ɛ.ta.jœʁ/', 'kom zhuh luh dee-ZEH | luh pro-BLEM eh-ta-YUHR', ['parole'], FCVDR),
  phrase(1663, 'couper la parole', 'to interrupt, to cut someone off', '/ku.pe la pa.ʁɔl/', 'koo-pay la pa-ROL', ['parole']),
  phrase(1664, 'reprendre la parole', 'to take the floor again', '/ʁə.pʁɑ̃dʁ la pa.ʁɔl/', 'ruh-prahⁿdr la pa-ROL', ['parole']),
  phrase(1665, 'avoir la parole', 'to have the floor', '/a.vwaʁ la pa.ʁɔl/', 'a-vwar la pa-ROL', ['parole']),
  sent(1666, "Une interruption coupe la phrase, pas l'idée.", 'An interruption cuts the sentence, not the idea.', '/yn ɛ̃.te.ʁyp.sjɔ̃ kup la fʁaz pa li.de/', 'ün ehⁿ-tay-rüp-SYOHⁿ | koop la FRAHZ | pa lee-DAY', ['rule', 'parole'], ['flashcard'],
    rule("Le directeur est coupé au milieu d'une idée. Elle est perdue ?", "Non. Il la reprend souvent plus loin : j'y viens, comme je le disais. Laisse une case ouverte dans tes notes.")),
  sent(1667, 'Il aurait fallu consulter les usagers avant.', 'The users should have been consulted beforehand.', '/i.lo.ʁɛ fa.ly kɔ̃.syl.te le.zy.za.ʒe a.vɑ̃/', 'ee-loh-reh fa-LÜ | kohⁿ-sül-TAY lay-zü-za-ZHAY a-VAHⁿ', ['b2-structure', 'conditionnel-passe', 'reproche'], FCVDR),
  sent(1668, 'Le directeur reconnaît une demande aux heures de pointe.', 'The director acknowledges demand at rush hour.', '/lə di.ʁɛk.tœʁ ʁə.kɔ.nɛ yn də.mɑ̃d o.zœʁ də pwɛ̃t/', 'luh dee-rek-TUHR ruh-ko-NEH | ün duh-MAHⁿD oh-zuhr duh PWEHⁿT', ['resume', 'concession']),
  sent(1669, 'On retiendra la nuance.', 'We will note the distinction. (ironic: nobody is fooled)', '/ɔ̃ ʁə.tjɛ̃.dʁa la nɥɑ̃s/', 'ohⁿ ruh-tyehⁿ-DRA la NWAHⁿS', ['ton', 'ironie']),
  phrase(1670, 'un taxi collectif', 'a shared taxi service, booked in advance', '/œ̃ tak.si kɔ.lɛk.tif/', 'uhⁿ tak-SEE ko-lek-TEEF', ['interview']),
];

/* ── ACT 6 · LE TON : CONCÉDER, DOUTER, IRONISER ──────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1671, "Certes, ce n'est pas parfait, mais c'est un début.", 'Admittedly it is not perfect, but it is a start.', '/sɛʁt sə nɛ pa paʁ.fɛ mɛ sɛ.tœ̃ de.by/', 'SEHRT | suh neh pa par-FEH | meh seh-tuhⁿ day-BÜ', ['concession'], FCVDR),
  sent(1672, "Ça, je te l'accorde.", 'That, I grant you.', '/sa ʒə tə la.kɔʁd/', 'SA | zhuh tuh la-KORD', ['concession']),
  sent(1673, "Il est vrai que les délais sont longs ; cela dit, c'est plus simple.", 'It is true that the waits are long; that said, it is simpler.', '/i.lɛ vʁɛ kə le de.lɛ sɔ̃ lɔ̃ sə.la di sɛ ply sɛ̃pl/', 'ee-leh VREH | kuh lay day-leh sohⁿ LOHⁿ | suh-la DEE | seh plü SEHⁿPL', ['concession']),
  phrase(1674, 'soi-disant', 'so-called, supposedly (doubt)', '/swa.di.zɑ̃/', 'swa-dee-ZAHⁿ', ['doute', 'distance']),
  phrase(1675, 'prétendument', 'allegedly', '/pʁe.tɑ̃.dy.mɑ̃/', 'pray-tahⁿ-dü-MAHⁿ', ['doute', 'distance']),
  sent(1676, "Les soi-disant économies n'ont jamais été chiffrées.", 'The so-called savings have never been costed.', '/le swa.di.zɑ̃.ze.kɔ.nɔ.mi nɔ̃ ʒa.mɛ e.te ʃi.fʁe/', 'lay swa-dee-zahⁿ-zay-ko-no-MEE | nohⁿ zha-meh ay-tay shee-FRAY', ['doute', 'distance'], FCVDR),
  sent(1677, 'Bravo, belle réussite.', 'Well done, a great success. (ironic: it failed)', '/bʁa.vo bɛl ʁe.y.sit/', 'bra-VOH | bel ray-ü-SEET', ['ironie']),
  sent(1678, 'Rien que ça.', 'Nothing less. (ironic, about an exaggeration)', '/ʁjɛ̃ kə sa/', 'ryehⁿ kuh SA', ['ironie']),
  sent(1679, 'Comme par hasard, le rapport sort après les élections.', 'Funnily enough, the report comes out after the election.', '/kɔm paʁ a.zaʁ lə ʁa.pɔʁ sɔʁ a.pʁɛ le.ze.lɛk.sjɔ̃/', 'kom par a-ZAR | luh ra-POR sor a-preh lay-zay-lek-SYOHⁿ', ['ironie', 'doute'], FCVDR),
  sent(1680, "C'est ça, oui.", 'Yeah, right. (ironic disbelief)', '/sɛ sa wi/', 'seh SA | WEE', ['ironie']),
  sent(1681, 'Certes ouvre une porte pour mieux la refermer.', 'Certes opens a door the better to close it again.', '/sɛʁt uvʁ yn pɔʁt puʁ mjø la ʁə.fɛʁ.me/', 'SEHRT | oovr ün PORT | poor myeu la ruh-fehr-MAY', ['rule', 'concession'], ['flashcard'],
    rule('« Certes, le chiffre est bon... » Que va-t-il venir ?', 'Un mais. La personne concède un point, puis défend sa position. Dans tes notes, garde le mais.')),
  sent(1682, "L'ironie dit le contraire de ses mots.", 'Irony says the opposite of its words.', '/li.ʁɔ.ni di lə kɔ̃.tʁɛʁ də se mo/', 'lee-ro-NEE | dee luh kohⁿ-TREHR duh say MOH', ['rule', 'ironie'], ['flashcard'],
    rule('« Bravo, belle réussite », devant un trou toujours là. Il félicite ?', 'Non. Les mots louent, la situation contredit : c\'est une critique. Note-la comme une critique.')),
  sent(1683, 'Il dit bravo, mais il critique.', 'He says well done, but he is criticising.', '/il di bʁa.vo mɛ il kʁi.tik/', 'eel dee bra-VOH | meh eel kree-TEEK', ['ironie'], FCVDR),
  sent(1684, 'Elle concède un point, puis elle maintient sa position.', 'She concedes a point, then keeps her position.', '/ɛl kɔ̃.sɛd œ̃ pwɛ̃ pɥi ɛl mɛ̃.tjɛ̃ sa po.zi.sjɔ̃/', 'el kohⁿ-SED uhⁿ PWEHⁿ | pwee el mehⁿ-tyehⁿ sa po-zee-SYOHⁿ', ['concession', 'resume'], FCVDR),
  sent(1685, "Bien que l'appli soit utile, elle ne remplace pas les équipes de voirie.", 'Although the app is useful, it does not replace the road crews.', '/bjɛ̃ kə la.pli swa y.til ɛl nə ʁɑ̃.plas pa le.ze.kip də vwa.ʁi/', 'byehⁿ kuh la-PLEE swa ü-TEEL | el nuh rahⁿ-plass pa lay-zay-keep duh vwa-REE', ['b2-structure', 'concession', 'subjonctif']),
  phrase(1686, 'un nid-de-poule', 'a pothole', '/œ̃ ni.də.pul/', 'uhⁿ nee-duh-POOL', ['balado']),
  sent(1687, 'On verra.', 'We shall see. (doubt)', '/ɔ̃ vɛ.ʁa/', 'ohⁿ veh-RA', ['doute']),
];

/* ── ACT 7 · LE FAIT, LA SOURCE, LE TÉMOIN ───────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1688, "Le feu serait parti d'un camion.", 'The fire reportedly started from a lorry.', '/lə fø sə.ʁɛ paʁ.ti dœ̃ ka.mjɔ̃/', 'luh FEU suh-reh par-TEE | duhⁿ ka-MYOHⁿ', ['source', 'conditionnel'], FCVDR),
  sent(1689, "Selon les pompiers, il n'y a aucun blessé.", 'According to the fire service, nobody is hurt.', '/sə.lɔ̃ le pɔ̃.pje il nja o.kœ̃ ble.se/', 'suh-lohⁿ lay pohⁿ-PYAY | eel nya oh-kuhⁿ bleh-SAY', ['source']),
  phrase(1690, "d'après les premiers éléments", 'according to early information', '/da.pʁɛ le pʁə.mje.ze.le.mɑ̃/', 'da-preh lay pruh-myay-zay-lay-MAHⁿ', ['source']),
  sent(1691, "Il est trop tôt pour parler d'incendie volontaire.", 'It is too early to talk about arson.', '/i.lɛ tʁo to puʁ paʁ.le dɛ̃.sɑ̃.di vɔ.lɔ̃.tɛʁ/', 'ee-leh troh TOH | poor par-lay dehⁿ-sahⁿ-dee vo-lohⁿ-TEHR', ['source', 'prudence'], FCVDR),
  sent(1692, "La piste criminelle n'est pas exclue.", 'Foul play has not been ruled out.', '/la pist kʁi.mi.nɛl nɛ pa.zɛks.kly/', 'la peest kree-mee-NEL | neh pa-zeks-KLÜ', ['source', 'prudence']),
  phrase(1693, 'à ce stade', 'at this stage', '/a sə stad/', 'a suh STAD', ['source', 'prudence']),
  sent(1694, "Le témoin est sûr de lui, mais c'est son avis.", 'The witness is sure of himself, but that is his opinion.', '/lə te.mwɛ̃ ɛ syʁ də lɥi mɛ sɛ sɔ̃.na.vi/', 'luh tay-MWEHⁿ eh SÜR duh LWEE | meh seh sohⁿ-na-VEE', ['source'], FCVDR),
  sent(1695, "Le conditionnel du journaliste : on le dit, ce n'est pas prouvé.", "The journalist's conditional: it is being said, it is not proven.", '/lə kɔ̃.di.sjɔ.nɛl dy ʒuʁ.na.list ɔ̃ lə di sə nɛ pa pʁu.ve/', 'luh kohⁿ-dee-syo-NEL dü zhoor-na-LEEST | ohⁿ luh DEE | suh neh pa proo-VAY', ['rule', 'source'], ['flashcard'],
    rule('« Le feu serait parti d\'un camion. » C\'est sûr ?', 'Non. Le journaliste rapporte une piste sans la confirmer. Dans tes notes : serait, ou selon qui.')),
  sent(1696, 'Les pompiers affirment, la commune reste prudente, le témoin accuse.', 'The fire service states, the town stays cautious, the witness accuses.', '/le pɔ̃.pje a.fiʁm la kɔ.myn ʁɛst pʁy.dɑ̃t lə te.mwɛ̃ a.kyz/', 'lay pohⁿ-PYAY a-FEERM | la ko-MÜN rest prü-DAHⁿT | luh tay-MWEHⁿ a-KÜZ', ['resume', 'source'], FCVDR),
  phrase(1697, 'un riverain', 'a local resident', '/œ̃ ʁi.və.ʁɛ̃/', 'uhⁿ ree-vuh-REHⁿ', ['reportage']),
  phrase(1698, "l'incendie est maîtrisé", 'the fire is under control', '/lɛ̃.sɑ̃.di ɛ mɛ.tʁi.ze/', 'lehⁿ-sahⁿ-DEE eh meh-tree-ZAY', ['reportage']),
  sent(1699, "Rien n'est confirmé pour le moment.", 'Nothing is confirmed for now.', '/ʁjɛ̃ nɛ kɔ̃.fiʁ.me puʁ lə mɔ.mɑ̃/', 'ryehⁿ neh kohⁿ-feer-MAY | poor luh mo-MAHⁿ', ['source', 'prudence']),
  sent(1700, 'On ne savait plus se garer.', "(Belgian French, savoir for pouvoir) We couldn't park any more.", '/ɔ̃ nə sa.vɛ ply sə ɡa.ʁe/', 'ohⁿ nuh sa-veh plü suh ga-RAY', ['belgique', 'regional']),
  sent(1701, "Si le camion avait été déplacé, on n'en serait pas là.", 'If the lorry had been moved, we would not be where we are.', '/si lə ka.mjɔ̃ a.vɛ.te.te de.pla.se ɔ̃ nɑ̃ sə.ʁɛ pa la/', 'see luh ka-MYOHⁿ a-veh-tay-TAY day-pla-SAY | ohⁿ nahⁿ suh-reh pa LA', ['b2-structure', 'si-mixte', 'reproche']),
  sent(1702, 'Qui le dit, et est-ce confirmé ?', 'Who says so, and is it confirmed?', '/ki lə di e ɛs kɔ̃.fiʁ.me/', 'kee luh DEE | ay ess kohⁿ-feer-MAY', ['question', 'source']),
];

/* ── ACT 8 · LE NON QUI NE DIT PAS SON NOM ───────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1703, 'Je comprends tout à fait votre position.', 'I completely understand your position.', '/ʒə kɔ̃.pʁɑ̃ tu.ta.fɛ vɔtʁ po.zi.sjɔ̃/', 'zhuh kohⁿ-prahⁿ too-ta-FEH | votr po-zee-SYOHⁿ', ['implicite']),
  sent(1704, "C'est une piste.", 'That is one avenue. (often: not a yes)', '/sɛ.tyn pist/', 'seh-tün PEEST', ['implicite']),
  sent(1705, 'Ça me paraît difficile.', 'That seems difficult to me.', '/sa mə pa.ʁɛ di.fi.sil/', 'sa muh pa-REH | dee-fee-SEEL', ['implicite', 'refus'], FCVDR),
  sent(1706, 'Je ne vous promets rien.', 'I am not promising you anything.', '/ʒə nə vu pʁɔ.mɛ ʁjɛ̃/', 'zhuh nuh voo pro-meh RYEHⁿ', ['implicite']),
  sent(1707, 'Sur le principe, pourquoi pas.', 'In principle, why not.', '/syʁ lə pʁɛ̃.sip puʁ.kwa pa/', 'sür luh prehⁿ-SEEP | poor-kwa PA', ['implicite']),
  sent(1708, 'Là, on peut en parler.', 'Now that, we can discuss. (a real opening)', '/la ɔ̃ pø ɑ̃ paʁ.le/', 'LA | ohⁿ peu ahⁿ par-LAY', ['implicite', 'ouverture'], FCVDR),
  sent(1709, 'Je ne suis pas sûr que ce soit la meilleure solution.', 'I am not sure that is the best solution.', '/ʒə nə sɥi pa syʁ kə sə swa la mɛ.jœʁ so.ly.sjɔ̃/', 'zhuh nuh swee pa SÜR | kuh suh swa la meh-yuhr so-lü-SYOHⁿ', ['implicite', 'b2-structure', 'subjonctif'], FCVDR),
  sent(1710, 'Admettons.', "Let's say so. (grudging, not agreement)", '/ad.mɛ.tɔ̃/', 'ad-meh-TOHⁿ', ['implicite']),
  sent(1711, "C'est une façon de voir les choses.", 'That is one way of looking at it. (polite disagreement)', '/sɛ.tyn fa.sɔ̃ də vwaʁ le ʃoz/', 'seh-tün fa-SOHⁿ | duh vwar lay SHOHZ', ['implicite', 'desaccord']),
  sent(1712, 'Un non poli garde la porte ouverte.', 'A polite no keeps the door open.', '/œ̃ nɔ̃ pɔ.li ɡaʁd la pɔʁt u.vɛʁt/', 'uhⁿ nohⁿ po-LEE | gard la port oo-VEHRT', ['rule', 'implicite'], ['flashcard'],
    rule('« Ça me paraît difficile. » Il a dit oui ?', "Non. Il refuse sans le dire, pour ne pas fermer la négociation. Note : refus poli, et ce qu'il laisse ouvert.")),
  sent(1713, 'Il ne dit pas non, mais il ne dit pas oui.', 'He does not say no, but he does not say yes.', '/il nə di pa nɔ̃ mɛ il nə di pa wi/', 'eel nuh dee pa NOHⁿ | meh eel nuh dee pa WEE', ['implicite'], FCVDR),
  phrase(1714, 'présentement', '(Québec, West Africa) at the moment', '/pʁe.zɑ̃t.mɑ̃/', 'pray-zahⁿt-MAHⁿ', ['quebec', 'afrique', 'regional']),
  sent(1715, 'Sans réponse avant vendredi, nous regarderons ailleurs.', 'With no answer by Friday, we will look elsewhere.', '/sɑ̃ ʁe.pɔ̃s a.vɑ̃ vɑ̃.dʁə.di nu ʁə.ɡaʁ.də.ʁɔ̃ a.jœʁ/', 'sahⁿ ray-POHⁿS a-vahⁿ vahⁿ-druh-DEE | noo ruh-gar-duh-rohⁿ a-YUHR', ['negociation']),
  sent(1716, "D'ici jeudi, j'aurai parlé à ma direction.", 'By Thursday, I will have spoken to my management.', '/di.si ʒø.di ʒo.ʁe paʁ.le a ma di.ʁɛk.sjɔ̃/', 'dee-see zheu-DEE | zhoh-ray par-LAY a ma dee-rek-SYOHⁿ', ['b2-structure', 'futur-anterieur'], FCVDR),
  phrase(1717, 'un refus poli', 'a polite refusal', '/œ̃ ʁə.fy pɔ.li/', 'uhⁿ ruh-fü po-LEE', ['implicite']),
  sent(1718, "Qu'est-ce qu'il n'a pas dit ?", 'What did he not say?', '/kɛs kil na pa di/', 'kess keel na pa DEE', ['question', 'implicite']),
];

/* ── ACT 9 · RATTRAPER LE FIL ────────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  phrase(1719, 'une reformulation', 'a rephrasing, a restatement', '/yn ʁə.fɔʁ.my.la.sjɔ̃/', 'ün ruh-for-mü-la-SYOHⁿ', ['reformulation']),
  phrase(1720, "en d'autres termes", 'in other terms', '/ɑ̃ do.tʁə tɛʁm/', 'ahⁿ doh-truh TEHRM', ['reformulation']),
  phrase(1721, 'si je résume', 'to sum up', '/si ʒə ʁe.zym/', 'see zhuh ray-ZÜM', ['reformulation', 'plan']),
  sent(1722, 'Reprenons.', "Let's pick up where we left off.", '/ʁə.pʁə.nɔ̃/', 'ruh-pruh-NOHⁿ', ['plan', 'cours']),
  sent(1723, 'Je vais aller un peu vite.', 'I am going to go a bit fast.', '/ʒə vɛ a.le œ̃ pø vit/', 'zhuh veh a-LAY | uhⁿ peu VEET', ['plan', 'cours']),
  sent(1724, "J'ai décroché, mais j'attends le prochain panneau.", 'I lost the thread, but I am waiting for the next signpost.', '/ʒe de.kʁɔ.ʃe mɛ ʒa.tɑ̃ lə pʁɔ.ʃɛ̃ pa.no/', 'zhay day-kro-SHAY | meh zha-tahⁿ luh pro-shehⁿ pa-NOH', ['fil', 'strategie'], FCVDR),
  sent(1725, 'Je laisse un blanc dans mes notes, et je continue.', 'I leave a gap in my notes, and I keep going.', '/ʒə lɛs œ̃ blɑ̃ dɑ̃ me nɔt e ʒə kɔ̃.ti.ny/', 'zhuh less uhⁿ BLAHⁿ dahⁿ may NOT | ay zhuh kohⁿ-tee-NÜ', ['fil', 'notes'], FCVDR),
  sent(1726, "La reformulation me rend l'idée que j'ai ratée.", 'The rephrasing gives me back the idea I missed.', '/la ʁə.fɔʁ.my.la.sjɔ̃ mə ʁɑ̃ li.de kə ʒe ʁa.te/', 'la ruh-for-mü-la-SYOHⁿ | muh rahⁿ lee-DAY | kuh zhay ra-TAY', ['fil', 'reformulation']),
  sent(1727, 'Je ne reviens pas en arrière : je reprends au point suivant.', 'I do not go back: I pick up at the next point.', '/ʒə nə ʁə.vjɛ̃ pa.zɑ̃.na.ʁjɛʁ ʒə ʁə.pʁɑ̃ o pwɛ̃ sɥi.vɑ̃/', 'zhuh nuh ruh-vyehⁿ pa-zahⁿ-na-RYEHR | zhuh ruh-prahⁿ oh pwehⁿ swee-VAHⁿ', ['fil', 'strategie'], FCVDR),
  sent(1728, 'Un passage raté se rattrape plus loin.', 'A missed passage can be caught up further on.', '/œ̃ pa.saʒ ʁa.te sə ʁa.tʁap ply lwɛ̃/', 'uhⁿ pa-sazh ra-TAY | suh ra-trap plü LWEHⁿ', ['rule', 'fil'], ['flashcard'],
    rule('Tu as décroché pendant trente secondes. Tu abandonnes ?', 'Non. Attends le prochain panneau ou la reformulation : autrement dit, bref, si je résume. Le résumé final comble souvent le trou.')),
  phrase(1729, 'décrocher', 'to lose the thread, to switch off (listening)', '/de.kʁɔ.ʃe/', 'day-kro-SHAY', ['fil']),
  phrase(1730, 'reprendre le fil', 'to pick up the thread', '/ʁə.pʁɑ̃dʁ lə fil/', 'ruh-prahⁿdr luh FEEL', ['fil']),
  sent(1731, "Quand les entreprises ont réagi, les bureaux s'étaient déjà vidés.", 'By the time companies reacted, the offices had already emptied.', '/kɑ̃ le.zɑ̃.tʁə.pʁiz ɔ̃ ʁe.a.ʒi le by.ʁo se.tɛ de.ʒa vi.de/', 'kahⁿ lay-zahⁿ-truh-PREEZ ohⁿ ray-a-ZHEE | lay bü-ROH say-teh day-zha vee-DAY', ['b2-structure', 'plus-que-parfait', 'cours']),
  sent(1732, 'Le télétravail ne vide pas seulement des bureaux, il vide des rues.', 'Remote work does not only empty offices, it empties streets.', '/lə te.le.tʁa.vaj nə vid pa sœl.mɑ̃ de by.ʁo il vid de ʁy/', 'luh tay-lay-tra-VAHY | nuh veed pa suhl-MAHⁿ day bü-ROH | eel veed day RÜ', ['cours', 'reformulation'], FCVDR),
  sent(1733, 'Le résumé final remplit le trou de mes notes.', 'The final summary fills the gap in my notes.', '/lə ʁe.zy.me fi.nal ʁɑ̃.pli lə tʁu də me nɔt/', 'luh ray-zü-may fee-NAL | rahⁿ-plee luh TROO duh may NOT', ['fil', 'notes'], FCVDR),
];

/* ── ACT 10 · L'ÉPREUVE À VITESSE RÉELLE ─────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1734, 'À la première écoute, je repère les positions ; à la deuxième, je vérifie.', 'On the first listening I spot the positions; on the second, I check.', '/a la pʁə.mjɛ.ʁe.kut ʒə ʁə.pɛʁ le po.zi.sjɔ̃ a la dø.zjɛm ʒə ve.ʁi.fi/', 'a la pruh-myeh-ray-KOOT | zhuh ruh-pehr lay po-zee-SYOHⁿ | a la deu-ZYEM | zhuh vay-ree-FEE', ['epreuve', 'strategie'], FCVDR),
  sent(1735, 'Pour chaque personne, je note oui, non, ou oui mais.', 'For each person, I note yes, no, or yes but.', '/puʁ ʃak pɛʁ.sɔn ʒə nɔt wi nɔ̃ u wi mɛ/', 'poor shak pehr-SONN | zhuh not WEE | NOHⁿ | oo wee MEH', ['epreuve', 'notes'], FCVDR),
  sent(1736, "La bonne réponse dit la même chose avec d'autres mots.", 'The right answer says the same thing in other words.', '/la bɔn ʁe.pɔ̃s di la mɛm ʃoz a.vɛk do.tʁə mo/', 'la bon ray-POHⁿS | dee la mem SHOHZ | a-vek doh-truh MOH', ['epreuve']),
  sent(1737, "Une réponse piège reprend un mot entendu, mais pas l'idée.", 'A trap answer reuses a word you heard, but not the idea.', '/yn ʁe.pɔ̃s pjɛʒ ʁə.pʁɑ̃ œ̃ mo ɑ̃.tɑ̃.dy mɛ pa li.de/', 'ün ray-pohⁿs PYEZH | ruh-prahⁿ uhⁿ moh ahⁿ-tahⁿ-DÜ | meh pa lee-DAY', ['epreuve', 'piege'], FCVDR),
  sent(1738, "Oui, à condition d'avoir des profs formés.", 'Yes, provided there are trained teachers.', '/wi a kɔ̃.di.sjɔ̃ da.vwaʁ de pʁɔf fɔʁ.me/', 'WEE | a kohⁿ-dee-syohⁿ da-VWAR | day prof for-MAY', ['position', 'condition']),
  phrase(1739, 'au détriment de', 'at the expense of', '/o de.tʁi.mɑ̃ də/', 'oh day-tree-mahⁿ DUH', ['position']),
  sent(1740, "La question, c'est plutôt : laquelle on ajoute ?", 'The question is rather: which one do we add?', '/la kɛs.tjɔ̃ sɛ ply.to la.kɛl ɔ̃.na.ʒut/', 'la kes-TYOHⁿ | seh plü-TOH | la-KEL ohⁿ-na-ZHOOT', ['position', 'reformulation']),
  sent(1741, "À l'épreuve B2, on te demande qui pense quoi, et pourquoi.", 'In the B2 paper, you are asked who thinks what, and why.', '/a le.pʁœv be.dø ɔ̃ tə də.mɑ̃d ki pɑ̃s kwa e puʁ.kwa/', 'a lay-PRUHV bay-DEU | ohⁿ tuh duh-mahⁿd kee pahⁿs KWA | ay poor-KWA', ['rule', 'epreuve'], ['flashcard'],
    rule("Une question commence par « Quelle est l'attitude de... ». Tu écoutes quoi ?", "Le ton et les marqueurs : certes, soi-disant, à condition de, j'exagère. Pas seulement les faits.")),
  sent(1742, 'La consigne dit si le document passe une fois ou deux.', 'The instructions say whether the recording plays once or twice.', '/la kɔ̃.siɲ di si lə dɔ.ky.mɑ̃ pas yn fwa u dø/', 'la kohⁿ-SEEÑ | dee see luh do-kü-MAHⁿ pass ün FWA | oo DEU', ['epreuve'], FCVDR),
  phrase(1743, 'à condition de', 'provided that, on condition of', '/a kɔ̃.di.sjɔ̃ də/', 'a kohⁿ-dee-syohⁿ DUH', ['position', 'condition']),
  sent(1744, "Enfin, j'exagère un peu.", 'Well, I am exaggerating a little.', '/ɑ̃.fɛ̃ ʒɛɡ.za.ʒɛʁ œ̃ pø/', 'ahⁿ-FEHⁿ | zheg-za-zhehr uhⁿ PEU', ['nuance', 'ton']),
  phrase(1745, 'pis', '(Québec, spoken) and then, and', '/pi/', 'PEE', ['quebec', 'regional', 'oral'], FCVR, { register: 'familier' }),
  sent(1746, "Je dirais oui, mais pas à n'importe quel prix.", 'I would say yes, but not at any price.', '/ʒə di.ʁɛ wi mɛ pa a nɛ̃.pɔʁt kɛl pʁi/', 'zhuh dee-reh WEE | meh pa a nehⁿ-port kel PREE', ['position', 'condition']),
  sent(1747, 'Qui est pour sans condition, et qui pose une condition ?', 'Who is for it unconditionally, and who sets a condition?', '/ki ɛ puʁ sɑ̃ kɔ̃.di.sjɔ̃ e ki poz yn kɔ̃.di.sjɔ̃/', 'kee eh poor sahⁿ kohⁿ-dee-SYOHⁿ | ay kee pohz ün kohⁿ-dee-SYOHⁿ', ['question', 'epreuve']),
];

/* ── ACT 11 · LE DÉBAT DE MIDI ───────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1748, "Karim Benali défend la gratuité pour deux raisons : le pouvoir d'achat et le climat.", 'Karim Benali argues for free transit for two reasons: purchasing power and the climate.', '/ka.ʁim bə.na.li de.fɑ̃ la ɡʁa.tɥi.te puʁ dø ʁɛ.zɔ̃ lə pu.vwaʁ da.ʃa e lə kli.ma/', 'ka-REEM buh-na-LEE | day-fahⁿ la gra-twee-TAY | poor deu reh-ZOHⁿ | luh poo-vwar da-SHA | ay luh klee-MA', ['resume', 'position'], FCVDR),
  sent(1749, 'Claire Fortin reconnaît que la fréquentation augmente.', 'Claire Fortin acknowledges that ridership is rising.', '/klɛʁ fɔʁ.tɛ̃ ʁə.kɔ.nɛ kə la fʁe.kɑ̃.ta.sjɔ̃ oɡ.mɑ̃t/', 'klehr for-TEHⁿ | ruh-ko-NEH kuh la fray-kahⁿ-ta-SYOHⁿ | og-MAHⁿT', ['resume', 'concession'], FCVDR),
  sent(1750, "Selon elle, le vrai problème, c'est la fréquence, pas le prix.", 'In her view, the real problem is frequency, not price.', '/sə.lɔ̃.nɛl lə vʁɛ pʁɔ.blɛm sɛ la fʁe.kɑ̃s pa lə pʁi/', 'suh-lohⁿ-NEL | luh vreh pro-BLEM | seh la fray-KAHⁿS | pa luh PREE', ['resume', 'position'], FCVDR),
  sent(1751, 'Elle met en doute le financement du projet.', "She questions the project's funding.", '/ɛl mɛ.tɑ̃ dut lə fi.nɑ̃s.mɑ̃ dy pʁɔ.ʒɛ/', 'el meh-tahⁿ DOOT | luh fee-nahⁿs-mahⁿ dü pro-ZHEH', ['resume', 'distance'], FCVDR),
  sent(1752, "Elle ironise : pour elle, rien n'est gratuit, sauf les promesses.", 'She is ironic: for her, nothing is free except promises.', '/ɛ.li.ʁɔ.niz puʁ ɛl ʁjɛ̃ nɛ ɡʁa.tɥi sof le pʁɔ.mɛs/', 'eh-lee-ro-NEEZ | poor EL | ryehⁿ neh gra-TWEE | sohf lay pro-MESS', ['resume', 'ironie']),
  sent(1753, "Ils s'accordent sur un point : les familles modestes doivent payer moins.", 'They agree on one point: low-income families should pay less.', '/il sa.kɔʁd syʁ œ̃ pwɛ̃ le fa.mij mɔ.dɛst dwav pe.je mwɛ̃/', 'eel sa-KORD sür uhⁿ PWEHⁿ | lay fa-MEEY mo-DEST | dwav pay-yay MWEHⁿ', ['resume', 'accord']),
  sent(1754, 'Elle propose un tarif selon le revenu.', 'She proposes an income-based fare.', '/ɛl pʁɔ.poz œ̃ ta.ʁif sə.lɔ̃ lə ʁə.və.ny/', 'el pro-POHZ | uhⁿ ta-REEF suh-lohⁿ luh ruh-vuh-NÜ', ['resume', 'position'], FCVDR),
  sent(1755, "Il répond qu'un tarif selon le revenu, c'est un formulaire de plus.", 'He replies that an income-based fare means one more form.', '/il ʁe.pɔ̃ kœ̃ ta.ʁif sə.lɔ̃ lə ʁə.və.ny sɛ.tœ̃ fɔʁ.my.lɛʁ də plys/', 'eel ray-POHⁿ | kuhⁿ ta-REEF suh-lohⁿ luh ruh-vuh-NÜ | seh-tuhⁿ for-mü-lehr duh PLÜSS', ['resume', 'position']),
  sent(1756, "Dans ce débat, deux positions s'opposent.", 'In this debate, two positions are opposed.', '/dɑ̃ sə de.ba dø po.zi.sjɔ̃ sɔ.pɔz/', 'dahⁿ suh day-BA | deu po-zee-SYOHⁿ so-POHZ', ['resume'], FCVDR),
  sent(1757, "Je relis mes notes avant d'écrire une seule phrase.", 'I reread my notes before writing a single sentence.', '/ʒə ʁə.li me nɔt a.vɑ̃ de.kʁiʁ yn sœl fʁaz/', 'zhuh ruh-lee may NOT | a-vahⁿ day-kreer ün suhl FRAHZ', ['notes', 'resume'], FCVDR),
  sent(1758, 'Un résumé rapporte, il ne juge pas.', 'A summary reports; it does not judge.', '/œ̃ ʁe.zy.me ʁa.pɔʁt il nə ʒyʒ pa/', 'uhⁿ ray-zü-MAY ra-PORT | eel nuh zhüzh PA', ['rule', 'resume'], ['flashcard'],
    rule('Tu résumes le débat. Tu dis qui a raison ?', 'Non. Tu rapportes les deux positions avec des verbes neutres : défendre, reconnaître, contester, proposer.')),
  phrase(1759, 'la gratuité', 'being free of charge', '/la ɡʁa.tɥi.te/', 'la gra-twee-TAY', ['debat']),
  phrase(1760, 'la fréquentation', 'ridership, number of users', '/la fʁe.kɑ̃.ta.sjɔ̃/', 'la fray-kahⁿ-ta-SYOHⁿ', ['debat']),
  phrase(1761, 'mettre en doute', 'to call into question', '/mɛ.tʁɑ̃ dut/', 'meh-trahⁿ DOOT', ['resume', 'distance']),
  phrase(1762, 'ironiser sur', 'to be ironic about', '/i.ʁɔ.ni.ze syʁ/', 'ee-ro-nee-ZAY SÜR', ['resume', 'ironie']),
  phrase(1763, 'faire une concession', 'to make a concession', '/fɛʁ yn kɔ̃.sɛ.sjɔ̃/', 'fehr ün kohⁿ-seh-SYOHⁿ', ['resume', 'concession']),
  phrase(1764, 'reconnaître que', 'to acknowledge that', '/ʁə.kɔ.nɛtʁ kə/', 'ruh-ko-netr KUH', ['resume', 'concession']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 *  165 authored rows in `.1600`-`.1764`, no gaps. `.1765`-`.1799` free.
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
 *  §I. THE ANCHOR LISTENINGS
 *
 *  One per act, 1 to 3 minutes of natural speech at B2. `L(n)` is a line
 *  that IS corpus row n (the move the act teaches); `F()` is connecting
 *  talk owned here. The speaker of each line is named in the parallel
 *  `*_VOICES` list, which the studio briefs and the task transcript use; a
 *  listening line itself carries no speaker label, so the learner finds the
 *  turn by ear, which is the point.
 * ══════════════════════════════════════════════════════════════════════════ */

export type Line = { fr: string; en: string };
const BY_ID = new Map(ALL_ROWS.map((r) => [r.id, r]));
const L = (n: number): Line => {
  const r = BY_ID.get(E(n));
  if (!r) throw new Error(`b2.25: anchor names a missing row ${n}`);
  return { fr: r.fr, en: r.en };
};
const F = (fr: string, en: string): Line => ({ fr, en });

/** Act 1: « La Tribune du midi », a short radio debate on school streets.
 *  Host Karine Lepage (1-3, 7, 11), Samuel Ouellet (4, 6, 10), Hélène
 *  Brassard (5, 8, 9). About 50 seconds. */
export const TRIBUNE_LINES: Line[] = [
  F("Bonjour et bienvenue à La Tribune du midi. Aujourd'hui : faut-il fermer aux voitures les rues devant les écoles, le matin et en fin d'après-midi ?", "Hello and welcome to La Tribune du midi. Today: should the streets outside schools be closed to cars in the morning and late afternoon?"),
  F('Avec nous, Samuel Ouellet, père de deux enfants et membre du comité Rues sûres, et Hélène Brassard, qui représente les commerçants du quartier.', "With us, Samuel Ouellet, father of two and a member of the Safe Streets committee, and Hélène Brassard, who represents the neighbourhood's shopkeepers."),
  F('Samuel Ouellet, vous êtes pour. Pourquoi ?', 'Samuel Ouellet, you are for it. Why?'),
  F("Parce que chaque matin, on voit des voitures qui reculent au milieu des enfants. Ce n'est pas une impression : l'an dernier, il y a eu onze accrochages devant nos trois écoles.", "Because every morning we see cars reversing among the children. It is not just a feeling: last year there were eleven minor collisions outside our three schools."),
  F('Onze accrochages, certes, mais aucun blessé, il faut le dire aussi.', 'Eleven minor collisions, admittedly, but nobody hurt, and that should be said too.'),
  F('Pardon, mais faut-il attendre un blessé pour agir ?', 'Sorry, but do we have to wait for someone to be hurt before we act?'),
  F('Hélène Brassard, votre position, justement ?', 'Hélène Brassard, what is your position, then?'),
  L(1605),
  F("Ce que je conteste, c'est la méthode : fermer la rue deux heures par jour, c'est couper l'accès aux livraisons.", 'What I dispute is the method: closing the street two hours a day cuts off access for deliveries.'),
  F("Alors parlons-en, des livraisons : on peut très bien les faire à dix heures.", "Then let's talk about deliveries: they can perfectly well be made at ten o'clock."),
  F('On y reviendra. Une pause, et on revient avec vos appels.', 'We will come back to that. A break, and we will be back with your calls.'),
];
export const TRIBUNE_VOICES = ['animatrice', 'animatrice', 'animatrice', 'Samuel', 'Hélène', 'Samuel', 'animatrice', 'Hélène', 'Hélène', 'Samuel', 'animatrice'];

/** Act 2: a public lecture on urban noise, Lausanne municipal library.
 *  One voice, Dr Mireille Sow, acoustician. About 90 seconds. */
export const EXPOSE_LINES: Line[] = [
  F("Bonsoir à toutes et à tous, et merci d'être venus si nombreux malgré la pluie.", 'Good evening, everyone, and thank you for coming in such numbers despite the rain.'),
  F("Ce soir, on va parler du bruit en ville, un sujet qu'on croit bien connaître.", 'Tonight we are going to talk about noise in the city, a subject we think we know well.'),
  L(1614),
  F("D'abord, ce que le bruit fait à notre santé ; ensuite, d'où il vient ; enfin, ce que les villes peuvent faire.", 'First, what noise does to our health; then, where it comes from; finally, what cities can do.'),
  L(1615),
  F("Le bruit ne fait pas que réveiller : il fatigue le cœur, même quand on dort et qu'on croit ne rien entendre.", 'Noise does not only wake you up: it tires the heart, even when you are asleep and think you hear nothing.'),
  F('Selon nos mesures, un habitant sur quatre vit au-dessus du seuil recommandé la nuit.', 'According to our measurements, one resident in four lives above the recommended night-time threshold.'),
  F("Petite parenthèse : ce seuil, c'est quarante décibels, à peu près le bruit d'une bibliothèque.", 'A quick aside: that threshold is forty decibels, roughly the noise of a library.'),
  L(1617),
  L(1618),
  F("D'où vient ce bruit ? Pas des bars, comme on le croit souvent, mais surtout de la circulation.", 'Where does this noise come from? Not from bars, as people often think, but mainly from traffic.'),
  F('Et une seule moto mal réglée suffit à réveiller une rue entière.', 'And one badly tuned motorbike is enough to wake a whole street.'),
  L(1619),
  F("Les villes qui ont baissé la vitesse à trente kilomètres-heure ont gagné jusqu'à trois décibels : pour l'oreille, c'est comme deux fois moins de voitures.", 'Cities that lowered the speed limit to thirty kilometres an hour gained up to three decibels: to the ear, that is like half as many cars.'),
  L(1620),
  F("C'est un choix d'aménagement, donc, au fond, un choix politique.", 'It is a planning choice, and so, at bottom, a political choice.'),
];

/** Act 3: a radio chronicle on canteen waste. Chronicler, one voice, with
 *  the host greeted at the start. About 75 seconds. */
export const CHRONIQUE_LINES: Line[] = [
  F("Bonjour Chantal, bonjour à tous. Ce matin, on parle de ce qui finit à la poubelle dans les cantines scolaires.", 'Hello Chantal, hello everyone. This morning we are talking about what ends up in the bin in school canteens.'),
  L(1634),
  F("En tout, c'est environ cent vingt grammes de nourriture jetés par enfant et par jour.", 'In all, that is about one hundred and twenty grams of food thrown away per child per day.'),
  F("Pourquoi ? D'abord parce que les portions sont les mêmes pour un enfant de six ans et pour un enfant de onze ans.", 'Why? First because the portions are the same for a six-year-old and for an eleven-year-old.'),
  F("Ensuite parce que les élèves ont vingt minutes pour manger, file d'attente comprise.", 'Then because pupils have twenty minutes to eat, queue included.'),
  F('Résultat : ils mangent le plat principal, et le reste repart en cuisine.', 'Result: they eat the main course, and the rest goes back to the kitchen.'),
  F("Une école de Trois-Rivières a testé deux changements : des portions à la demande, et la récréation avant le repas plutôt qu'après.", 'A school in Trois-Rivières tested two changes: portions on request, and break time before the meal rather than after.'),
  L(1635),
  F('Et, détail intéressant, les enfants ont mangé plus de légumes, pas moins.', 'And, an interesting detail, the children ate more vegetables, not fewer.'),
  F('Alors, faut-il étendre ça à toutes les écoles ?', 'So should this be extended to every school?'),
  L(1636),
  F('Servir à la demande, ça demande plus de personnel, et le personnel, ça coûte.', 'Serving on request takes more staff, and staff cost money.'),
  F('Bref, la bonne idée existe.', 'In short, the good idea exists.'),
  L(1637),
];

/** Act 4: a radio debate on short-term rentals. Host Laurent Dufresne
 *  (1-3, 7, 10, 15), Sandrine Kaboré (4, 8, 9, 12, 14), Olivier Gendron
 *  (5, 6, 11, 13). About 80 seconds. */
export const LOGEMENT_LINES: Line[] = [
  F('Les locations de courte durée : faut-il les limiter dans les quartiers centraux ? Deux invités ce matin.', 'Short-term rentals: should they be limited in central neighbourhoods? Two guests this morning.'),
  F('Sandrine Kaboré, du comité de citoyens de Saint-Roch, et Olivier Gendron, qui loue deux appartements aux touristes.', "Sandrine Kaboré, from the Saint-Roch residents' committee, and Olivier Gendron, who rents two flats to tourists."),
  F('Madame Kaboré, on commence avec vous.', "Ms Kaboré, let's start with you."),
  F("Dans ma rue, sur vingt logements, six sont loués aux touristes toute l'année. Ce sont six familles qui ne peuvent plus habiter là.", 'In my street, out of twenty homes, six are rented to tourists all year round. That is six families who can no longer live there.'),
  L(1642),
  F('Ces appartements, avant, personne ne voulait les louer : ils étaient trop chers à rénover.', 'Before, nobody wanted to rent those flats: they were too expensive to renovate.'),
  F('Madame Kaboré, votre réaction ?', 'Ms Kaboré, your response?'),
  F('Sur ce point, je rejoins monsieur Gendron : certains logements étaient vides.', 'On that point, I agree with Mr Gendron: some homes were empty.'),
  F("Mais aujourd'hui, ce ne sont plus des logements vides, ce sont des logements retirés du marché.", 'But today they are no longer empty homes, they are homes taken off the market.'),
  F("Monsieur Gendron, qu'est-ce que vous proposez, vous ?", 'Mr Gendron, what do you propose?'),
  F('Un permis, oui ; une interdiction, non. Moi, je déclare tout et je paie mes taxes.', 'A permit, yes; a ban, no. I declare everything and I pay my taxes.'),
  F("Un permis, la Ville en a déjà créé un, et ça n'a rien changé.", 'A permit: the City has already created one, and it changed nothing.'),
  F("Parce qu'il n'y a aucun contrôle, pas parce que le permis est une mauvaise idée.", 'Because there are no checks at all, not because the permit is a bad idea.'),
  F("Des contrôles, là-dessus, on est d'accord.", 'Checks: on that, we agree.'),
  F("Voilà au moins un point d'accord. On continue après la pause.", 'There is at least one point of agreement. We carry on after the break.'),
];

/** Act 4, second listening: a Montréal street poll, TEF section C style.
 *  Reporter (1), three passers-by (2, 3, 4). About 30 seconds. */
export const TROTTOIR_LINES: Line[] = [
  F("Question du jour : faut-il interdire le cellulaire à l'école secondaire ?", 'Question of the day: should mobile phones be banned at secondary school?'),
  F('Oui, et même pendant les pauses. Ma fille ne parle plus à personne à midi : elle regarde son écran.', 'Yes, and even during breaks. My daughter no longer talks to anyone at lunchtime: she looks at her screen.'),
  F("Interdire, non. Apprendre à s'en servir, oui. On n'apprend pas à nager en fermant la piscine.", 'Ban it, no. Learn to use it, yes. You do not learn to swim by closing the pool.'),
  F("Bof, ça dépend de l'âge. À douze ans, d'accord ; à seize ans, c'est un peu tard pour interdire.", 'Meh, it depends on the age. At twelve, fine; at sixteen, it is a bit late to ban it.'),
];

/** Act 5: a radio interview with interruptions. Journalist Maude Lavoie
 *  (1, 3, 6, 8, 10, 11, 13, 15), transit director Serge Roussel (2, 4, 5,
 *  7, 9, 12, 14). About 85 seconds. */
export const INTERVIEW_LINES: Line[] = [
  F("Serge Roussel, votre société supprime quatre lignes d'autobus en septembre. Pourquoi ?", 'Serge Roussel, your company is cutting four bus routes in September. Why?'),
  F('Écoutez, il faut replacer les choses dans leur contexte. Depuis trois ans, le nombre de passagers...', 'Look, you have to put things in context. For three years, the number of passengers...'),
  F("Pardon, je vous arrête : ma question, c'est pourquoi ces quatre lignes-là.", 'Sorry, let me stop you: my question is why those four routes.'),
  L(1657),
  F('Ces quatre lignes transportent moins de dix personnes par heure. On ne peut pas faire rouler des autobus vides.', 'Those four routes carry fewer than ten people an hour. We cannot run empty buses.'),
  F("Vides, c'est vous qui le dites. Les usagers, eux, parlent d'autobus pleins le matin.", 'Empty is your word. The users talk about full buses in the morning.'),
  F('Le matin, oui. Mais le reste de la journée...', 'In the morning, yes. But the rest of the day...'),
  F("Donc vous reconnaissez qu'il y a une demande le matin.", 'So you acknowledge there is demand in the morning.'),
  F("Je reconnais une demande aux heures de pointe, et c'est pour ça que nous gardons un taxi collectif.", 'I acknowledge demand at rush hour, and that is why we are keeping a shared taxi service.'),
  F("Un taxi collectif sur réservation, la veille. Pour aller travailler, ce n'est pas la même chose.", 'A shared taxi booked the day before. For getting to work, it is not the same thing.'),
  L(1667),
  F("Si vous me permettez de terminer : dès janvier, on pourra réserver deux heures à l'avance.", 'If you will allow me to finish: from January, people will be able to book two hours ahead.'),
  F('Dernière question, rapidement : les tarifs vont-ils augmenter ?', 'Last question, quickly: will fares go up?'),
  F('Pas cette année.', 'Not this year.'),
  F('Pas cette année. On retiendra la nuance. Merci, Serge Roussel.', 'Not this year. We will note the distinction. Thank you, Serge Roussel.'),
];

/** Act 6: « Deux pour un », a Montréal podcast (« balado » in Québec) with
 *  two hosts, Inès (1, 3, 5, 6, 8, 10, 11, 13) and Raphaël (2, 4, 7, 9, 12).
 *  About 70 seconds. */
export const BALADO_LINES: Line[] = [
  F("Bienvenue dans Deux pour un, le balado qui lit l'actualité à deux voix. Raphaël, tu as testé la fameuse appli de la Ville ?", "Welcome to Deux pour un, the podcast that reads the news in two voices. Raphaël, have you tried the City's famous app?"),
  F("Testée, oui. J'ai signalé un nid-de-poule rue Masson le premier mars.", 'Tried it, yes. I reported a pothole on rue Masson on the first of March.'),
  F('Et alors ?', 'And?'),
  F('Alors il est toujours là. Bravo, belle réussite.', 'And it is still there. Well done, a great success.'),
  F("Bon, certes, l'appli ne répare pas les trous toute seule.", 'Well, admittedly, the app does not fix the holes by itself.'),
  F("Mais la Ville dit avoir reçu douze mille signalements en un mois. C'est énorme, quand même.", 'But the City says it received twelve thousand reports in one month. That is huge, all the same.'),
  F('Les soi-disant douze mille signalements, oui. Combien de doublons là-dedans ?', 'The so-called twelve thousand reports, yes. How many duplicates in there?'),
  F('Ça, je te l\'accorde : si dix personnes signalent le même trou, ça fait dix signalements.', 'That, I grant you: if ten people report the same hole, that makes ten reports.'),
  F('Voilà. Et le maire qui parle de révolution numérique... Rien que ça.', 'Exactly. And the mayor talking about a digital revolution... Nothing less.'),
  L(1685),
  F("Il est vrai que les délais sont longs ; cela dit, avant, on ne savait même pas à qui écrire.", 'It is true the waits are long; that said, before, we did not even know whom to write to.'),
  F("D'accord, c'est plus simple pour signaler. Pour réparer, on verra.", 'All right, it is simpler for reporting. For repairing, we shall see.'),
  F('Moi, je leur laisse un an. Si dans un an rien n\'a bougé, je serai la première à le dire.', 'I am giving them a year. If nothing has moved in a year, I will be the first to say so.'),
];

/** Act 6, second listening: six short lines, each carrying one stance. */
export const TON_LINES: Line[] = [
  F('Le train a encore deux heures de retard. Bravo, belle réussite.', 'The train is two hours late again. Well done, a great success.'),
  L(1671),
  L(1676),
  F("Une réunion de plus pour fixer la date de la prochaine réunion ? C'est ça, oui.", 'One more meeting to set the date of the next meeting? Yeah, right.'),
  L(1673),
  L(1679),
];

/** Act 7: a radio news report from Floriville (invented), near Namur.
 *  Reporter (1-5, 9, 12, 13), Monsieur Lambert, a Belgian witness (6, 7,
 *  8), the town's spokesperson (10, 11). About 80 seconds. */
export const REPORTAGE_LINES: Line[] = [
  F("Nous sommes à Floriville, près de Namur, où un entrepôt de meubles a pris feu cette nuit, vers deux heures.", 'We are in Floriville, near Namur, where a furniture warehouse caught fire last night, at around two.'),
  F("Selon les pompiers, l'incendie est maîtrisé depuis six heures ce matin, et il n'y a aucun blessé.", 'According to the fire service, the fire has been under control since six this morning, and nobody is hurt.'),
  F("D'après les premiers éléments, le feu serait parti d'un camion garé contre le bâtiment.", 'According to early information, the fire reportedly started from a lorry parked against the building.'),
  F("Une enquête est ouverte, et la piste criminelle n'est pas exclue.", 'An investigation has been opened, and foul play has not been ruled out.'),
  F('Monsieur Lambert habite juste en face.', 'Monsieur Lambert lives right opposite.'),
  F("Ça fait septante ans que j'habite ici, je n'ai jamais vu ça. Des flammes plus hautes que le clocher.", 'I have lived here for seventy years, I have never seen anything like it. Flames higher than the church tower.'),
  F("Et moi, je vous le dis : c'est pas un accident. Ce camion était là depuis trois jours, on savait plus se garer.", 'And I am telling you: it is no accident. That lorry had been there for three days, we could not park any more.'),
  L(1701),
  F('Du côté de la commune, on reste prudent.', 'On the town council side, they remain cautious.'),
  L(1691),
  F('Nous attendons les conclusions des enquêteurs. Les riverains ont pu rentrer chez eux en fin de matinée.', 'We are waiting for the investigators\' findings. Local residents were able to go home late in the morning.'),
  F("L'entreprise, elle, estime les dégâts à deux millions d'euros, à ce stade.", 'The company, for its part, puts the damage at two million euros, at this stage.'),
  F('Retour au studio.', 'Back to the studio.'),
];

/** Act 8: a phone negotiation. Thomas Girard, group sales at an invented
 *  Lyon hotel (1, 3, 5, 6, 8, 9, 11, 13, 16), Awa Diop, organiser of an
 *  invented forum, calling from Dakar (2, 4, 7, 10, 12, 14, 15).
 *  About 75 seconds. */
export const APPEL_LINES: Line[] = [
  F('Hôtel Belvédère, service des groupes, Thomas Girard, bonjour.', 'Hôtel Belvédère, group bookings, Thomas Girard speaking, hello.'),
  F("Bonjour, Awa Diop, du Forum de l'eau. Je suis présentement à Dakar, et je vous appelle pour notre groupe de quarante personnes, en mai.", 'Hello, Awa Diop, from the Water Forum. I am in Dakar at the moment, and I am calling about our group of forty, in May.'),
  F("Ah oui, madame Diop, j'ai votre dossier sous les yeux.", 'Ah yes, Ms Diop, I have your file in front of me.'),
  F("Nous aurions besoin d'un tarif à cent dix euros la nuit, petit-déjeuner compris.", 'We would need a rate of one hundred and ten euros a night, breakfast included.'),
  L(1703),
  F("Cent dix euros, c'est une piste. Mais en mai, ça me paraît difficile.", 'One hundred and ten euros is one avenue. But in May, that seems difficult to me.'),
  F('Et si nous réservions aussi la salle de réunion pour les trois jours ?', 'And what if we also booked the meeting room for the three days?'),
  L(1708),
  F('Je ne vous promets rien, mais je vais voir avec ma direction.', 'I am not promising you anything, but I will check with my management.'),
  F('Très bien. Et le petit-déjeuner, vous pourriez l\'inclure ?', 'Very good. And breakfast, could you include it?'),
  F('Sur le principe, pourquoi pas. Il faudrait voir le nombre exact de personnes.', 'In principle, why not. We would need to see the exact number of people.'),
  F('Donc je peux compter sur cent dix euros ?', 'So I can count on one hundred and ten euros?'),
  L(1716),
  F("Jeudi, d'accord. Mais sans réponse avant vendredi, nous regarderons ailleurs.", 'Thursday, fine. But with no answer by Friday, we will look elsewhere.'),
  F('Je vous le dis franchement : il nous faut une réponse ferme.', 'I will be frank with you: we need a firm answer.'),
  F('Je comprends. Je fais le maximum.', 'I understand. I will do my utmost.'),
];

/** Act 9: a university lecture on remote work and the city. One voice,
 *  Professor Aminata Konaté, Montréal. About 100 seconds. */
export const COURS_LINES: Line[] = [
  L(1722),
  F("La semaine dernière, nous avons vu que le télétravail s'est généralisé très vite, en quelques semaines.", 'Last week we saw that remote work spread very fast, in a few weeks.'),
  L(1731),
  F("Aujourd'hui, une seule question : qu'est-ce que ça change pour la ville ?", 'Today, one question only: what does it change for the city?'),
  F("Premier effet, le plus visible : dans certains centres-villes, un bureau sur cinq est aujourd'hui inoccupé.", 'First effect, the most visible: in some city centres, one office in five is now empty.'),
  F('Autrement dit, des immeubles entiers attendent une nouvelle vie.', 'In other words, whole buildings are waiting for a new life.'),
  F("Et les villes hésitent entre deux voies : transformer ces bureaux en logements, ou attendre que les entreprises reviennent, ce qui, à mon avis, n'arrivera pas.", 'And cities hesitate between two paths: turning these offices into homes, or waiting for companies to come back, which, in my view, will not happen.'),
  F("Transformer coûte cher : il faut des fenêtres qui s'ouvrent, des salles de bains, des cuisines, des normes de sécurité qui ne sont pas celles d'un bureau.", 'Converting is expensive: you need windows that open, bathrooms, kitchens, safety standards that are not those of an office.'),
  F("En d'autres termes, ce n'est pas une simple question de peinture.", 'In other terms, it is not simply a matter of paint.'),
  F('Deuxième effet, moins visible : les commerces du midi. Un restaurant qui vivait des employés de bureau peut perdre la moitié de sa clientèle.', 'Second effect, less visible: lunchtime businesses. A restaurant that lived off office workers can lose half its customers.'),
  L(1732),
  F('Troisième effet, et je vais aller un peu vite : les quartiers résidentiels, eux, se réveillent en semaine.', 'Third effect, and I am going to go a little fast: residential neighbourhoods, for their part, wake up on weekdays.'),
  F('Les cafés de quartier ouvrent à midi, les boulangeries vendent des sandwichs.', 'Local cafés open at lunchtime, bakeries sell sandwiches.'),
  F('Si je résume : le centre perd, les quartiers gagnent, et la ville doit repenser ses usages.', 'To sum up: the centre loses, the neighbourhoods win, and the city has to rethink how it is used.'),
];

/** Act 9, second listening: statement, then its reformulation. */
export const RELANCE_LINES: Line[] = [
  F('Le projet a été reporté à une date indéterminée.', 'The project has been postponed indefinitely.'),
  F('Autrement dit, il est enterré.', 'In other words, it is buried.'),
  F('Les loyers ont augmenté deux fois plus vite que les salaires.', 'Rents have risen twice as fast as wages.'),
  F("En d'autres termes, se loger coûte de plus en plus cher.", 'In other terms, housing is getting more and more expensive.'),
  F('La réforme touche surtout les contrats courts.', 'The reform mainly affects short contracts.'),
  F("C'est-à-dire les intérimaires et les saisonniers.", 'That is to say, temps and seasonal workers.'),
  F("Bref, tout le monde n'y gagne pas.", 'In short, not everybody gains from it.'),
];

/** Act 10: an international street poll, « Tour du monde francophone ».
 *  Reporter (1, 3, 6, 9), Lausanne (2), Liège (4, 5), Dakar (7, 8),
 *  Québec (10). About 60 seconds. */
export const MONDE_LINES: Line[] = [
  F('Tour du monde francophone. La question du jour : faut-il apprendre une deuxième langue dès la maternelle ? On commence à Lausanne.', 'A tour of the French-speaking world. The question of the day: should children learn a second language from nursery school? We start in Lausanne.'),
  F("Évidemment. Chez nous, les enfants entendent l'allemand à la radio et l'italien chez les grands-parents. Plus on commence tôt, moins on a peur.", 'Of course. Here, children hear German on the radio and Italian at their grandparents\'. The earlier you start, the less afraid you are.'),
  F('À Liège, on est plus nuancé.', 'In Liège, people are more nuanced.'),
  F("Une deuxième langue, oui, mais pas au détriment du français. Mon fils connaît septante mots d'anglais et il fait trois fautes par phrase en français.", 'A second language, yes, but not at the expense of French. My son knows seventy words of English and makes three mistakes per sentence in French.'),
  L(1744),
  F('Direction Dakar.', 'Off to Dakar.'),
  F("Mais nos enfants parlent déjà deux langues, parfois trois, avant d'entrer à l'école. Le wolof à la maison, le français en classe.", 'But our children already speak two languages, sometimes three, before they start school. Wolof at home, French in class.'),
  L(1740),
  F('Et pour finir, Québec.', 'And to finish, Québec.'),
  F("Moi, je dirais oui, à condition d'avoir des profs formés. Sinon on fait semblant, pis ça, ça sert à rien.", 'Me, I would say yes, provided we have trained teachers. Otherwise we are pretending, and that is no use.'),
];

/** Act 11, THE TASK DEBATE: « Le Débat de midi », about two and a quarter
 *  minutes. Host Nathalie Côté (1, 2, 5, 10, 15, 18), Karim Benali (3, 4,
 *  8, 12, 14, 17), Claire Fortin (6, 7, 9, 11, 13, 16). */
export const DEBAT_LINES: Line[] = [
  F("Bonjour et bienvenue au Débat de midi. Val-des-Pins veut rendre l'autobus gratuit pour tout le monde dès janvier. Bonne idée, ou fausse bonne idée ?", 'Hello and welcome to the Midday Debate. Val-des-Pins wants to make the bus free for everyone from January. A good idea, or a false good idea?'),
  F('Avec nous, Karim Benali, conseiller municipal, qui porte le projet, et Claire Fortin, économiste des transports. Monsieur Benali, pourquoi la gratuité ?', 'With us, Karim Benali, the city councillor behind the project, and Claire Fortin, a transport economist. Mr Benali, why make it free?'),
  F("Pour deux raisons. Premièrement, le pouvoir d'achat : un abonnement coûte quatre-vingt-dix dollars par mois, c'est énorme pour une famille.", 'For two reasons. First, purchasing power: a monthly pass costs ninety dollars, which is a lot for a family.'),
  F("Deuxièmement, le climat : si l'autobus est gratuit, on laisse la voiture au garage. Les villes qui l'ont fait ont vu la fréquentation monter de trente pour cent.", 'Second, the climate: if the bus is free, people leave the car at home. Cities that have done it saw ridership rise by thirty per cent.'),
  F("Claire Fortin, trente pour cent, c'est convaincant, non ?", "Claire Fortin, thirty per cent, that's convincing, isn't it?"),
  F('Certes, la fréquentation augmente, je ne le conteste pas. Mais qui sont ces nouveaux passagers ?', 'Admittedly, ridership goes up, I do not dispute that. But who are these new passengers?'),
  F("Dans la plupart des cas, ce sont d'anciens piétons et d'anciens cyclistes, pas des automobilistes.", 'In most cases, they are former pedestrians and former cyclists, not drivers.'),
  F('Ça dépend des villes. Chez nous, six déplacements sur dix se font en voiture : on a de la marge.', 'It depends on the city. Here, six journeys in ten are by car: we have room to grow.'),
  F("Justement. Et ces automobilistes ne prennent pas l'autobus parce qu'il passe toutes les quarante minutes, pas parce qu'il est trop cher.", 'Exactly. And those drivers do not take the bus because it comes every forty minutes, not because it is too expensive.'),
  F('Donc, pour vous, le problème, ce n\'est pas le prix ?', 'So for you, the problem is not the price?'),
  F("C'est la fréquence. La gratuité coûterait à la Ville douze millions par an. Avec cet argent, on pourrait doubler le nombre d'autobus.", 'It is the frequency. Making it free would cost the City twelve million a year. With that money, we could double the number of buses.'),
  F('Je vous arrête : on peut faire les deux. Le budget est prévu.', 'Let me stop you: we can do both. The budget is planned.'),
  F("Le soi-disant budget prévu repose sur une hausse de taxes que personne n'a encore votée. Mais bon, rien n'est gratuit, sauf les promesses.", 'The so-called planned budget rests on a tax increase that nobody has voted for yet. But then, nothing is free, except promises.'),
  F("C'est une formule, ce n'est pas un argument.", 'That is a slogan, not an argument.'),
  F('Est-ce que vous vous rejoignez au moins sur un point ?', 'Do you at least agree on one point?'),
  F('Oui : les familles modestes doivent payer moins. Je proposerais plutôt un tarif selon le revenu.', 'Yes: low-income families should pay less. I would rather propose an income-based fare.'),
  F("C'est une piste. Mais un tarif selon le revenu, c'est un formulaire de plus, et ceux qui en ont le plus besoin ne le remplissent pas.", 'That is one avenue. But an income-based fare is one more form, and those who need it most do not fill it in.'),
  F("On s'arrête là. Merci à vous deux.", "We'll stop there. Thank you both."),
];
export const DEBAT_VOICES = [
  "L'ANIMATRICE", "L'ANIMATRICE", 'KARIM BENALI', 'KARIM BENALI', "L'ANIMATRICE", 'CLAIRE FORTIN',
  'CLAIRE FORTIN', 'KARIM BENALI', 'CLAIRE FORTIN', "L'ANIMATRICE", 'CLAIRE FORTIN', 'KARIM BENALI',
  'CLAIRE FORTIN', 'KARIM BENALI', "L'ANIMATRICE", 'CLAIRE FORTIN', 'KARIM BENALI', "L'ANIMATRICE",
];
if (DEBAT_VOICES.length !== DEBAT_LINES.length) throw new Error('b2.25: DEBAT_VOICES out of step with DEBAT_LINES');

/** The debate as a labelled transcript, for the task brief (TaskView has no
 *  source field and no player; see the lesson header, open questions). */
export const DEBAT_TRANSCRIPT = DEBAT_LINES.map((l, i) => `${DEBAT_VOICES[i]} : ${l.fr}`).join(' ');

/** What a summary of the debate must hold. The rubric, the model answer
 *  and the grader notes are written against this. */
export const DEBAT_KEY = {
  pour: 'Karim Benali, conseiller municipal : pour la gratuité ; pouvoir d’achat (abonnement à 90 $ par mois) et climat (fréquentation + 30 % ailleurs) ; « on peut faire les deux », budget prévu',
  contre: 'Claire Fortin, économiste : sceptique ; les nouveaux passagers sont d’anciens piétons et cyclistes ; le vrai problème est la fréquence (un autobus toutes les 40 minutes) ; 12 millions par an = doubler les autobus',
  attitude: 'Claire Fortin concède (certes, la fréquentation augmente), met en doute le budget (soi-disant, hausse de taxes pas votée), ironise (rien n’est gratuit, sauf les promesses)',
  accord: 'les familles modestes doivent payer moins ; elle propose un tarif selon le revenu ; il y voit « une piste » mais objecte le formulaire de plus (non-recours)',
} as const;
