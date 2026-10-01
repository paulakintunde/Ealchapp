// c1.21.l1 « Débats et entretiens » — the authored corpus, the imports, the
// anchor recordings and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (the workshop shape, strategy variant,
// amended §1.4) on top of B1-BUILD-PLAYBOOK.md, with the C1 rules of
// C1-BUILD-LOG.md (« What is different at C1 ») and this lesson's section of
// C1-RESEARCH-PLAN.md. The C1 sequel of b2.25 « Écouter à vitesse réelle »
// (../b2/ecoute-vitesse-reelle-*), whose file layout, helpers and act loop it
// copies, and whose rows it reuses in act 1.
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
//   FOLLOWING A C1 DEBATE OR INTERVIEW BY EAR, HEARD ONCE, FOR WHERE THE
//   DISAGREEMENT REALLY LIES. b2.25 taught the frame (plan, positions, tone,
//   turn-taking, concession and irony by ear, the polite no, recovering a
//   missed chunk). At C1 the voices agree on most things and the line that
//   separates them is narrow: this lesson teaches the learner to find it.
//
//     le modérateur    three voices and a moderator: presenting, giving the
//                      floor, relaunching, refocusing, reformulating,
//                      summing up (his synthesis is not his opinion)
//     l'accord         the agreement before the disagreement: sur le
//                      constat, nous sommes d'accord ; jusque-là, je vous
//                      suis ; là où nos chemins se séparent
//     la définition    disagreement about a name or a definition: le mot me
//                      gêne ; si l'on entend par là... ; le mot décide de la
//                      réponse
//     la concession    C1 concession formulas by ear, with their exact
//                      scope: j'accorde la distinction ; je vous suis sur...,
//                      je ne vous suis pas sur... ; je vous concède
//                      volontiers ; admettons
//     la thèse         a speaker narrowing a claim: je soutiens quelque chose
//                      de plus étroit ; je ne dis pas que..., je dis que... ;
//                      ne me faites pas dire...
//     l'objection      answering an objection: on m'objectera que ; à cela je
//                      réponds ; l'objection porte, mais pas là où... ; cela
//                      ne contredit pas...
//     l'image          analogy and allusion decoded from context: c'est un
//                      peu comme ; le tonneau des Danaïdes ; déshabiller
//                      Pierre pour habiller Paul ; comparaison n'est pas
//                      raison
//     une écoute       one play with a 28 to 30 second read window
//     le piège         the TCF Canada C1 format (three recordings, 3 + 2 + 2
//                      items) and its distractors (echo, other camp, too
//                      broad, true but secondary)
//     l'idée centrale  the TEF Canada section F reportage, one main-idea item
//     le compte rendu  the graded task: a written account (250 to 400 words)
//                      of a debate printed in the brief
//
//   NOT OWNED, CITED ONLY:
//     - b2.25 (« la leçon 25 du B2 ») owns the announced plan, positions in a
//       debate, interruptions and turn-taking, concession (certes... mais, je
//       te l'accorde) and irony by ear, the polite no, recovering a missed
//       chunk and notes in columns. Act 1 recaps it in one drill and reuses
//       its rows by id; its reframe is QUOTED, never retyped.
//     - b1.38 (« la leçon 38 du B1 ») owns gist-first listening; its reframe
//       is quoted in act 1 and in the first sheet.
//     - b2.24 and c1.20 (« la leçon 24 du B2 », « la leçon 20 du C1 ») are the
//       reading side of the same moves; cited by trail position only.
//     - c1.09 owns formal oral PRODUCTION in debate, c1.23 meetings and tact,
//       c1.06 politeness in speech (research plan, « Ownership »). Nothing
//       here asks the learner to produce a debate turn; the scenario reports.
//     - Turn-taking and fillers stay comprehension aids: no C1 exam task
//       tests overlap, so no question here does.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED. Postgres read 2026-09-30, read-only, inside
//      BEGIN TRANSACTION READ ONLY ... COMMIT (no plain SET).
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `discours-dexamen` (« Le discours d'examen », education, c1-c2,
//     exam). Content_themes row created in C1 Phase 0; its sub_themes read
//     back as ["faire le point sur sa grammaire", "suivre un débat à
//     l'oral"]. These rows carry the second.
//
//  2. ID BLOCK: `fr.c1.discours-dexamen.1400`-`.1599`, claimed in the C1
//     build log ledger for c1.21. Probed 2026-09-30: 0 rows in 1400-1599 at
//     ANY level of the theme. The legacy Speak rows are .001-.165. Used:
//     `.1400`-`.1545`, 146 rows, no gaps (§G). `.1546`-`.1599` free.
//
//  3. REUSED ROWS, all read from Postgres on 2026-09-30, all `published`:
//     - b2.25's rows (fr.b2.strategies-de-comprehension.16xx, 165 published)
//       and b1.38's (fr.b1.strategies-de-comprehension.12xx-13xx, 185
//       published): in seedPlusPacks() too, `fr` identical in both.
//     - eleven LEGACY c1 rows (rhetorique, discours-dexamen), §F. They are
//       NOT in the seed cut, so their fr/en are copied verbatim into DB_ROWS
//       below and `src()` reads them from there. Each was read before reuse:
//       straight apostrophes (the house style in rows), no spaced « ? »
//       problem, no wrong mood, no real figure. Their drills are
//       {sentence, review} only and they carry no ipa or respell, so they are
//       NOT_DECK_ABLE and NOT_SPEAKABLE: named in groupDrills, never released.
//     - Rejected on reading: rhetorique.007, .015, .029 (no space before
//       « ? »), .043 (a minister), .044 (immigration, heat), discours-dexamen
//       .017 (Québec French at work, sensitive), .145 (a real house price).
//
//  4. THE ANCHOR RECORDINGS ARE AUTHORED, NOT QUOTED (« texte original écrit
//     pour la leçon », every one), and they are NOT all corpus rows. A C1
//     recording is 40 to 150 seconds of connected talk; lines of 15 to 40
//     words make poor flashcards. The lines that carry the act's move ARE
//     corpus rows (`L(n)`), so their French is identical wherever printed;
//     the connecting talk is free text owned by this file (`F()`). Every
//     person, station, programme, company, town and figure is invented:
//     station Radio Lisière; programmes L'Heure partagée, La Table longue,
//     Le Débat du jeudi; towns Port-Aurel, Vernay, Val-Brume; companies
//     Meubles Boréal and Tessère (house inventions). No real politician, no
//     real campaign, no real law. The topics avoid every topic of the six
//     C1 CO exam tasks (reproducibility, statues, platforms, statistics,
//     signed peer review, dead ends, consent, translation, proof, discovery,
//     registers at work, unpublished results, sorting, decline, burden of
//     proof, newcomers to a village) so nothing imitates an exam text.
//
//  5. WRITTEN FOR TTS. Every line is spoken by fr-FR TTS until the studio
//     delivers: figures in words, no line leans on punctuation a voice cannot
//     say. Stance is carried by the WORDS (accord, distinction, objection),
//     never by a tone. Three voices and a moderator cannot be told apart by
//     one TTS voice, so the moderator NAMES each speaker before the turn,
//     every time. TTS cannot overlap voices: where a speaker is cut off, the
//     cut is written as successive turns and the studio brief names the
//     line (lesson file, REC_DESC).
//
//  6. RESPELLINGS. Hyphenated syllables, the last stressed syllable of each
//     group in caps, ü for French u, nasals closed with ⁿ, no U+203F tie.
//     Spelled for the nasal checker rather than the ear (a2.34's trick, the
//     consonant is really pronounced): « sommes » somm, « même » memm,
//     « problème » pro-BLEMM, « personne » pehr-SONN, « semaine » suh-MENN,
//     « gêne » ZHENN, « mienne » MYENN, « sienne » SYENN, « aime » nemm,
//     « sonne » sonn.
//
//  7. FACT CHECK (for the pre-review). Every claim and quotation below is
//     either a fictional figure inside an invented recording or an idiom.
//     Idioms and allusions to verify against R / L / T:
//       - « le tonneau des Danaïdes » (the daughters of Danaos, condemned to
//         fill a leaking vessel: an endless task);
//       - « un travail de Pénélope » (Penelope unpicks at night what she
//         weaves by day: a task never finished);
//       - « déshabiller Pierre pour habiller Paul »; « l'arbre qui cache la
//         forêt »; « mettre la charrue avant les bœufs »; « le remède est
//         pire que le mal »; « comparaison n'est pas raison »; « un coup
//         d'épée dans l'eau »; « prêcher un converti »; « scier la branche
//         sur laquelle on est assis »; « rester lettre morte ».
//     Plausibility claims put in invented speakers' mouths, to check they
//     are presented as the speaker's claim and are not false as stated:
//       - a refillable glass bottle is washed and refilled « une vingtaine
//         de fois » (act 7, Élodie Faucher);
//       - « vingt minutes de sieste en début d'après-midi améliorent la
//         vigilance », « la plupart des études vont dans ce sens » (act 10,
//         Dr Annie Paquette);
//       - a green roof « retient l'eau de pluie et rafraîchit le dernier
//         étage » (act 9);
//       - the Milky Way becomes visible from a garden once street lights go
//         off at night in a small town (act 11).
//     The exam-format descriptions (acts 9 to 12, sheet-epreuve) follow the
//     app's OWN mock papers, read 2026-09-30 from seedPlusPacks().examTasks:
//     exam.tcf_canada.blanc-01..05.co_mcq.005 (three recordings of 91 to 116
//     s, playCount 1, readWindowS 28 to 30, 3 + 2 + 2 items) and
//     exam.tef_canada.blanc-01.co_mcq.006 (one 123 s reportage, playCount 1,
//     readWindowS 25, one main-idea item). They are phrased « dans les
//     épreuves blanches de l'application »; the official FEI / CCI Paris
//     timings are NOT checked (source E in the research plan).
//     Every other figure (attendance, budgets, percentages, Vernay's 40 % and
//     70 %, Val-Brume's one employee in three) is invented and belongs to an
//     invented place. No quotation from any published text.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c1.21',
  seq: 21,
  title: 'Debates and Interviews',
  sub: 'Débats et entretiens',
  canDo: 'Can follow a 90 to 150 second debate or interview between two or three speakers and a moderator, heard once, and say what they agree on, where the real disagreement lies (including a dispute over a word or a definition), exactly what each speaker concedes, how a speaker narrows a claim, how an objection is answered and what an analogy or allusion means in context; can handle the TCF and TEF Canada C1 listening formats and write a 250 to 400 word account of a debate',
  prereqUnitIds: ['b2.25', 'b1.38'],
} as const;

export const LESSON_ID = 'c1.21.l1';
export const THEME = 'discours-dexamen';
export const LEVEL = 'c1' as const;

/** ONE block, claimed in the C1 build log ledger. */
export const ID_RANGES = [[1400, 1599]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/** b2.25's rows (published, in the seed): reused, never authored. */
export const B2S = (n: number) => `fr.b2.strategies-de-comprehension.${n}`;
/** b1.38's rows (published, in the seed): reused, never authored. */
export const B1S = (n: number) => `fr.b1.strategies-de-comprehension.${n}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  By trail position, in French words (« la leçon 25 du B2 »), never a raw
 *  unit id. B1 and B2 positions are the shipped seqs read from each lesson
 *  file's tag (b2.25 « B2 · LEÇON 25 », b2.24 « B2 · LEÇON 24 »); c1.20
 *  publishes in the same wave (C1 build log, wave 1).
 * ══════════════════════════════════════════════════════════════════════════ */

export const ECOUTE_B2_UNIT = 'b2.25';
export const ECOUTE_B1_UNIT = 'b1.38';

/** TODO(import): drop once every c1 unit is a row in `content_units`. */
const SEQ_FROM_PLAN: Record<string, number> = {
  'b1.38': 38, 'b2.24': 24, 'b2.25': 25, 'c1.20': 20,
};
export function refFr(unitId: string): string {
  const n = SEQ_FROM_PLAN[unitId];
  if (!n) throw new Error(`c1.21: no trail position for ${unitId}`);
  return `la leçon ${n} du ${unitId.slice(0, 2).toUpperCase()}`;
}

export const ECOUTE_B2_REF = refFr('b2.25');
export const ECOUTE_B1_REF = refFr('b1.38');
export const LECTURE_B2_REF = refFr('b2.24');
export const LECTURE_C1_REF = refFr('c1.20');

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED, never retyped
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B225_REFRAME, REFRAME_EN as B225_REFRAME_EN } from '../b2/ecoute-vitesse-reelle-corpus.ts';
export { REFRAME as B138_REFRAME, REFRAME_EN as B138_REFRAME_EN } from '../b1/strategies-ecoute-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE DIVIDING LINE (la ligne de partage). Two speakers at C1 share most of
 *  the ground: the finding, often the aim, sometimes even the remedy. What
 *  separates them is a line, and the line is narrow: a word, a scope, who
 *  pays, how a rule is worded. The listener's job is to find exactly where
 *  it runs, and to hear it MOVE (a concession pulls it in, a narrowed claim
 *  shrinks the ground defended, an answered objection closes a gap).
 *
 *  It is NOT « find who wins ». Nothing here asks the learner to judge a
 *  debate; the task reports it. And it does not replace b2.25's frame: the
 *  plan, the positions and the tone are still how the learner hears who
 *  is speaking; the line is what the C1 learner does with them.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Trouve la ligne de partage : ce que chacun accorde, ce qu\'il refuse.';
export const REFRAME_EN = 'Find the dividing line: what each one grants, what each one refuses.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Écoute la charpente : le plan, les positions, le ton.',
    why: "b2.25's reframe, quoted in act 1. At C1 it is not enough: a learner who has the frame knows that one guest is « for » and one « against », and in act 1 both guests are FOR opening the libraries on Sunday. The C1 step is from the camps to the exact line between them.",
  },
  {
    text: 'Cherche le vrai désaccord.',
    why: 'Drops the agreement. Acts 3 and 12 and every TCF item « Sur quoi s’accordent-ils ? » need the shared ground heard first, and a concession (act 5) moves the line by GRANTING something.',
  },
  {
    text: 'Écoute les mots de la concession.',
    why: 'A surface cue. « J’accorde la distinction » is a formula a learner can spot and still misread: the question is always WHAT is granted and what is kept (act 5), and the formula is absent from half the moves (a narrowed thesis, an analogy).',
  },
  {
    text: 'Qui a raison, et pourquoi ?',
    why: 'False to the task and to the exam: a compte rendu reports, it does not judge, and no CO item asks who is right. A learner listening for the winner stops hearing what the loser concedes.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Act 1 reuses b2.25's and b1.38's rows (the recap). From act 2 on, only
 *  legacy c1 rows that carry one of this lesson's NEW moves (concession,
 *  definition, objection). Every id was read from Postgres on 2026-09-30;
 *  the French is in the trailing comment.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    B2S(1601),                               // J'écoute qui parle, et ce que chacun défend.
    B2S(1642),                               // Je comprends le constat, mais je ne partage pas la conclusion.
    B2S(1643),                               // Sur ce point, je vous rejoins.
    B2S(1671),                               // Certes, ce n'est pas parfait, mais c'est un début.
    B2S(1656),                               // Je vous arrête tout de suite.
    B2S(1705),                               // Ça me paraît difficile.
    B2S(1724),                               // J'ai décroché, mais j'attends le prochain panneau.
    B1S(1353),                               // À la radio, écoute qui parle avant ce qu'il dit.
    B1S(1210),                               // Attrape le sens, pas chaque mot.  (b1.38's reframe)
    B2S(1602),                               // Écoute la charpente : le plan, les positions, le ton.  (b2.25's reframe)
  ],
  act2: [] as string[],
  act3: [
    'fr.c1.rhetorique.141',                  // S'il y a un point où je vous rejoins, c'est celui-là.
  ],
  act4: [
    'fr.c1.discours-dexamen.067',            // Clarifions dès maintenant ce que recouvre cette expression.
    'fr.c1.discours-dexamen.098',            // Il me paraît essentiel de distinguer d'emblée deux réalités que l'on confond souvent.
    'fr.c1.rhetorique.133',                  // C'est justement cette nuance qui change tout le débat.
  ],
  act5: [
    'fr.c1.rhetorique.032',                  // La réforme part d'une bonne intention, je le concède, mais l'intention ne suffit pas.
    'fr.c1.rhetorique.016',                  // Je vous l'accorde, il travaille, n'empêche qu'il arrive toujours en retard.
    'fr.c1.discours-dexamen.161',            // Cette statistique, je le concède, ne dit rien des réalités vécues sur le terrain.
  ],
  act6: [
    'fr.c1.rhetorique.139',                  // Ce n'est pas la réforme que je rejette, c'est sa brutalité.
  ],
  act7: [
    'fr.c1.rhetorique.092',                  // En admettant que les chiffres soient exacts, la conclusion ne s'impose pas forcément.
    'fr.c1.rhetorique.020',                  // Votre objection se tient, sauf qu'elle ignore complètement le principal intéressé.
    'fr.c1.discours-dexamen.150',            // On pourrait m'objecter que les jeunes s'adaptent plus vite, et c'est vrai en partie.
  ],
  act8: [] as string[],
  act9: [] as string[],
  act10: [] as string[],
  act11: [] as string[],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** The legacy c1 rows, NOT in the seed cut, read verbatim from Postgres on
 *  2026-09-30 (status published). `src()` in the lesson reads them here. */
export const DB_ROWS: Record<string, { id: string; fr: string; en: string }> = Object.fromEntries(([
  ['fr.c1.rhetorique.141', "S'il y a un point où je vous rejoins, c'est celui-là.", 'If there is one point where I agree with you, it is that one.'],
  ['fr.c1.discours-dexamen.067', 'Clarifions dès maintenant ce que recouvre cette expression.', 'Let us clarify right away what this expression actually covers.'],
  ['fr.c1.discours-dexamen.098', "Il me paraît essentiel de distinguer d'emblée deux réalités que l'on confond souvent.", 'It seems essential to me to distinguish from the outset two realities that are often confused.'],
  ['fr.c1.rhetorique.133', "C'est justement cette nuance qui change tout le débat.", 'It is precisely this nuance that changes the whole debate.'],
  ['fr.c1.rhetorique.032', "La réforme part d'une bonne intention, je le concède, mais l'intention ne suffit pas.", 'The reform comes from a good intention, I concede that, but intention is not enough.'],
  ['fr.c1.rhetorique.016', "Je vous l'accorde, il travaille, n'empêche qu'il arrive toujours en retard.", 'I grant you he works hard, still, he always shows up late.'],
  ['fr.c1.discours-dexamen.161', 'Cette statistique, je le concède, ne dit rien des réalités vécues sur le terrain.', 'This statistic, I concede, says nothing about the realities experienced on the ground.'],
  ['fr.c1.rhetorique.139', "Ce n'est pas la réforme que je rejette, c'est sa brutalité.", 'It is not the reform I reject, it is its harshness.'],
  ['fr.c1.rhetorique.092', "En admettant que les chiffres soient exacts, la conclusion ne s'impose pas forcément.", 'Even granting that the figures are accurate, the conclusion does not necessarily follow.'],
  ['fr.c1.rhetorique.020', "Votre objection se tient, sauf qu'elle ignore complètement le principal intéressé.", 'Your objection holds up, except that it completely ignores the person most affected.'],
  ['fr.c1.discours-dexamen.150', "On pourrait m'objecter que les jeunes s'adaptent plus vite, et c'est vrai en partie.", 'One could object that young people adapt faster, and that is partly true.'],
] as const).map(([id, fr, en]) => [id, { id, fr, en }]));

/** No `flashcard` drill: nameable, never releasable. The legacy c1 rows
 *  carry {sentence, review} only. */
export const NOT_DECK_ABLE: string[] = Object.keys(DB_ROWS);

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  B2S(1602),                                 // flashcard only (a rule card)
  B1S(1210),                                 // flashcard only (a rule card)
  B1S(1353),                                 // flashcard only (a rule card)
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  A WORKSHOP CORPUS HOLDS PHRASES THAT DO A JOB: the formulas a listener
 *  hears (le mot me gêne, j'accorde la distinction, je soutiens quelque chose
 *  de plus étroit), the anchor lines that carry the act's move, the
 *  questions a listener asks, and the account sentences the learner can
 *  reuse in the graded compte rendu.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['debats-entretiens'], ...extra,
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

/* ── ACT 1 · LE DÉBAT À TROIS VOIX ─────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1400, "Elle est pour l'ouverture, il est contre.", 'She is for the opening, he is against it.', '/ɛ.lɛ puʁ lu.vɛʁ.tyʁ i.lɛ kɔ̃tʁ/', 'eh-leh poor loo-vehr-TÜR | ee-leh KOHⁿTR', ['piege', 'position']),
  sent(1401, "Ils veulent ouvrir tous les deux ; ils s'opposent sur les moyens.", 'They both want to open; they disagree about the means.', '/il vœl.tu.vʁiʁ tu le dø il sɔ.poz syʁ le mwa.jɛ̃/', 'eel vuhl-too-VREER too lay DEU | eel so-pohz sür lay mwa-YEHⁿ', ['ligne', 'resume'], FCVDR),
  sent(1402, "Dans un vrai débat, on s'accorde souvent sur l'essentiel.", 'In a real debate, people often agree on the essentials.', '/dɑ̃.zœ̃ vʁɛ de.ba ɔ̃ sa.kɔʁd su.vɑ̃ syʁ le.sɑ̃.sjɛl/', 'dahⁿ-zuhⁿ vreh day-BA | ohⁿ sa-kord soo-vahⁿ sür lay-sahⁿ-SYEL', ['accord', 'strategie']),
  sent(1403, "Le désaccord réel est souvent plus étroit qu'il n'y paraît.", 'The real disagreement is often narrower than it looks.', '/lə de.za.kɔʁ ʁe.ɛl ɛ su.vɑ̃ ply.ze.tʁwa kil ni pa.ʁɛ/', 'luh day-za-kor ray-EL | eh soo-vahⁿ plü-zay-TRWA | keel nee pa-REH', ['ligne', 'strategie'], FCVDR),
  sent(1404, REFRAME, REFRAME_EN, '/tʁuv la liɲ də paʁ.taʒ sə kə ʃa.kœ̃ a.kɔʁd sə kil ʁə.fyz/', 'troov la leeny duh par-TAZH | suh kuh sha-kuhⁿ a-KORD | suh keel ruh-FÜZ', ['rule', 'reframe'], ['flashcard'],
    rule('Trois voix débattent à la radio. Que cherches-tu ?', "La ligne de partage : ce qu'ils accordent tous, puis le point exact où ils se séparent.")),
  sent(1405, 'Où passe la ligne entre eux ?', 'Where does the line run between them?', '/u pas la liɲ ɑ̃.tʁə ø/', 'oo pass la LEENY | ahⁿ-truh EU', ['question', 'ligne']),
  sent(1406, 'Sur le principe, je suis d\'accord avec vous.', 'In principle, I agree with you.', '/syʁ lə pʁɛ̃.sip ʒə sɥi da.kɔʁ a.vɛk vu/', 'sür luh prehⁿ-SEEP | zhuh swee da-kor a-vek VOO', ['accord'], FCVDR),
  phrase(1407, 'à effectifs constants', 'with no increase in staff', '/a e.fɛk.tif kɔ̃s.tɑ̃/', 'a ay-fek-teef kohⁿs-TAHⁿ', ['debat']),
  sent(1408, 'Si je vous suis bien, vous divergez sur les moyens.', 'If I follow you correctly, you differ on the means.', '/si ʒə vu sɥi bjɛ̃ vu di.vɛʁ.ʒe syʁ le mwa.jɛ̃/', 'see zhuh voo swee BYEHⁿ | voo dee-vehr-zhay sür lay mwa-YEHⁿ', ['moderateur', 'ligne']),
  phrase(1409, 'diverger sur', 'to differ on, to part ways on', '/di.vɛʁ.ʒe syʁ/', 'dee-vehr-zhay SÜR', ['ligne']),
];

/* ── ACT 2 · LE MODÉRATEUR ET TROIS VOIX ─────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1410, "Je partage le constat, pas l'enthousiasme.", 'I share the finding, not the enthusiasm.', '/ʒə paʁ.taʒ lə kɔ̃s.ta pa lɑ̃.tu.zjasm/', 'zhuh par-tazh luh kohⁿs-TA | pa lahⁿ-too-ZYASM', ['accord', 'position'], FCVDR),
  sent(1411, 'Restons sur la question de départ.', 'Let us stay on the original question.', '/ʁɛs.tɔ̃ syʁ la kɛs.tjɔ̃ də de.paʁ/', 'res-tohⁿ sür la kes-tyohⁿ duh day-PAR', ['moderateur'], FCVDR),
  sent(1412, 'Si je résume, trois positions se dégagent.', 'If I sum up, three positions emerge.', '/si ʒə ʁe.zym tʁwa po.zi.sjɔ̃ sə de.ɡaʒ/', 'see zhuh ray-ZÜM | trwa po-zee-syohⁿ suh day-GAZH', ['moderateur'], FCVDR),
  sent(1413, 'On ne vous a pas encore entendue.', 'We have not heard from you yet.', '/ɔ̃ nə vu.za pa.zɑ̃.kɔʁ ɑ̃.tɑ̃.dy/', 'ohⁿ nuh voo-za pa-zahⁿ-kor ahⁿ-tahⁿ-DÜ', ['moderateur']),
  sent(1414, 'Vous partagez cet enthousiasme ?', 'Do you share that enthusiasm?', '/vu paʁ.ta.ʒe sɛ.tɑ̃.tu.zjasm/', 'voo par-ta-zhay seh-tahⁿ-too-ZYASM', ['moderateur', 'question']),
  sent(1415, 'Une précision qui compte.', 'A clarification that matters.', '/yn pʁe.si.zjɔ̃ ki kɔ̃t/', 'ün pray-see-ZYOHⁿ | kee KOHⁿT', ['moderateur', 'nuance']),
  sent(1416, "La synthèse du modérateur n'est pas son avis.", "The moderator's summary is not his opinion.", '/la sɛ̃.tɛz dy mɔ.de.ʁa.tœʁ nɛ pa sɔ̃.na.vi/', 'la sehⁿ-tez dü mo-day-ra-TUHR | neh pa sohⁿ-na-VEE', ['rule', 'moderateur'], ['flashcard'],
    rule("« Si je résume... », dit l'animateur. C'est son opinion ?", 'Non. Il reformule les positions pour vérifier où passe la ligne. Note sa synthèse, puis la correction que font les invités.')),
  phrase(1417, 'la semaine de quatre jours', 'the four-day week', '/la sə.mɛn də katʁ ʒuʁ/', 'la suh-MENN | duh katr ZHOOR', ['debat']),
  phrase(1418, 'étendre le modèle', 'to extend the model', '/e.tɑ̃dʁ lə mɔ.dɛl/', 'ay-tahⁿdr luh mo-DEL', ['debat']),
  phrase(1419, 'recentrer le débat', 'to bring the debate back to the point', '/ʁə.sɑ̃.tʁe lə de.ba/', 'ruh-sahⁿ-tray luh day-BA', ['moderateur']),
  sent(1420, "Je note aussi ce que le modérateur reformule : c'est souvent la ligne.", 'I also note what the moderator rephrases: it is often the line.', '/ʒə nɔt o.si sə kə lə mɔ.de.ʁa.tœʁ ʁə.fɔʁ.myl sɛ su.vɑ̃ la liɲ/', 'zhuh not oh-SEE | suh kuh luh mo-day-ra-tuhr ruh-for-MÜL | seh soo-vahⁿ la LEENY', ['strategie', 'moderateur'], FCVDR),
  sent(1421, "La direction veut étendre, l'économiste veut attendre.", 'Management wants to extend it, the economist wants to wait.', '/la di.ʁɛk.sjɔ̃ vø e.tɑ̃dʁ le.kɔ.nɔ.mist vø a.tɑ̃dʁ/', 'la dee-rek-syohⁿ veu ay-TAHⁿDR | lay-ko-no-meest veu a-TAHⁿDR', ['resume', 'position']),
];

/* ── ACT 3 · L'ACCORD AVANT LE DÉSACCORD ─────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1422, "Sur le constat, nous sommes d'accord.", 'On the finding, we agree.', '/syʁ lə kɔ̃s.ta nu sɔm da.kɔʁ/', 'sür luh kohⁿs-TA | noo somm da-KOR', ['accord'], FCVDR),
  sent(1423, 'Jusque-là, je vous suis sans réserve.', 'Up to that point, I follow you without reservation.', '/ʒys.kə.la ʒə vu sɥi sɑ̃ ʁe.zɛʁv/', 'zhüs-kuh-LA | zhuh voo swee sahⁿ ray-ZEHRV', ['accord'], FCVDR),
  sent(1424, "Là où nos chemins se séparent, c'est sur qui paie.", 'Where our paths part is over who pays.', '/la u no ʃə.mɛ̃ sə se.paʁ sɛ syʁ ki pɛ/', 'la oo noh shuh-mehⁿ suh say-PAR | seh sür kee PEH', ['ligne'], FCVDR),
  sent(1425, 'Même diagnostic, deux remèdes.', 'Same diagnosis, two remedies.', '/mɛm djaɡ.nɔs.tik dø ʁə.mɛd/', 'memm dyag-nos-TEEK | deu ruh-MED', ['ligne', 'moderateur']),
  sent(1426, 'Nous partons du même constat et nous arrivons à deux conclusions opposées.', 'We start from the same finding and reach two opposite conclusions.', '/nu paʁ.tɔ̃ dy mɛm kɔ̃s.ta e nu.za.ʁi.vɔ̃ a dø kɔ̃.kly.zjɔ̃ ɔ.po.ze/', 'noo par-tohⁿ dü memm kohⁿs-TA | ay noo-za-ree-vohⁿ a deu kohⁿ-klü-zyohⁿ o-poh-ZAY', ['accord', 'ligne']),
  sent(1427, "Les deux ne s'excluent pas.", 'The two are not mutually exclusive.', '/le dø nə sɛk.skly pa/', 'lay DEU | nuh seks-klü PA', ['accord']),
  sent(1428, "À condition que l'un ne serve pas d'excuse à l'autre.", 'Provided one does not serve as an excuse for the other.', '/a kɔ̃.di.sjɔ̃ kə lœ̃ nə sɛʁv pa dɛks.kyz a lotʁ/', 'a kohⁿ-dee-SYOHⁿ | kuh luhⁿ nuh sehrv pa deks-küz a LOHTR', ['nuance']),
  sent(1429, "L'accord annoncé prépare le désaccord.", 'The announced agreement sets up the disagreement.', '/la.kɔʁ a.nɔ̃.se pʁe.paʁ lə de.za.kɔʁ/', 'la-kor a-nohⁿ-SAY | pray-par luh day-za-KOR', ['rule', 'accord'], ['flashcard'],
    rule("« Sur le constat, nous sommes d'accord. » Que va-t-il venir ?", "Le désaccord, plus étroit. Note les deux : ce qu'ils partagent, et le point exact où ils se séparent.")),
  phrase(1430, 'un café de réparation', 'a repair café', '/œ̃ ka.fe də ʁe.pa.ʁa.sjɔ̃/', 'uhⁿ ka-fay duh ray-pa-ra-SYOHⁿ', ['debat']),
  phrase(1431, 'le contribuable', 'the taxpayer', '/lə kɔ̃.tʁi.bɥabl/', 'luh kohⁿ-tree-BWABL', ['debat']),
  sent(1432, "Ils s'accordent sur le diagnostic, pas sur le remède.", 'They agree on the diagnosis, not on the remedy.', '/il sa.kɔʁd syʁ lə djaɡ.nɔs.tik pa syʁ lə ʁə.mɛd/', 'eel sa-kord sür luh dyag-nos-TEEK | pa sür luh ruh-MED', ['resume', 'ligne'], FCVDR),
  sent(1433, 'Le désaccord porte sur qui paie, pas sur le gaspillage.', 'The disagreement is about who pays, not about waste.', '/lə de.za.kɔʁ pɔʁt syʁ ki pɛ pa syʁ lə ɡas.pi.jaʒ/', 'luh day-za-kor port sür kee PEH | pa sür luh gas-pee-YAZH', ['resume', 'ligne']),
];

/* ── ACT 4 · LE MOT QUI GÊNE ─────────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1434, 'Le mot me gêne.', 'The word bothers me.', '/lə mo mə ʒɛn/', 'luh MOH | muh ZHENN', ['definition'], FCVDR),
  sent(1435, "Je n'appellerais pas ça un échec.", "I wouldn't call that a failure.", '/ʒə na.pɛl.ʁɛ pa sa œ̃.ne.ʃɛk/', 'zhuh na-pel-reh pa SA | uhⁿ-nay-SHEK', ['definition']),
  sent(1436, "Si l'on entend par là que le village sature en août, alors oui.", 'If by that you mean the village is saturated in August, then yes.', '/si lɔ̃.nɑ̃.tɑ̃ paʁ la kə lə vi.laʒ sa.tyʁ ɑ̃.nu a.lɔʁ wi/', 'see lohⁿ-nahⁿ-tahⁿ par LA | kuh luh vee-lazh sa-tür ahⁿ-NOO | a-lor WEE', ['definition', 'concession']),
  sent(1437, "Tout dépend de ce qu'on met derrière le mot.", 'It all depends on what you put behind the word.', '/tu de.pɑ̃ də sə kɔ̃ mɛ dɛ.ʁjɛʁ lə mo/', 'too day-PAHⁿ | duh suh kohⁿ meh deh-ryehr luh MOH', ['definition'], FCVDR),
  sent(1438, "Ce n'est pas une querelle de mots : le mot décide de la réponse.", 'It is not a quibble over words: the word decides the answer.', '/sə nɛ pa.zyn kə.ʁɛl də mo lə mo de.sid də la ʁe.pɔ̃s/', 'suh neh pa-zün kuh-rel duh MOH | luh moh day-seed duh la ray-POHⁿS', ['definition', 'ligne'], FCVDR),
  sent(1439, "Le problème n'est pas le nombre, c'est la concentration.", 'The problem is not the number, it is the concentration.', '/lə pʁɔ.blɛm nɛ pa lə nɔ̃bʁ sɛ la kɔ̃.sɑ̃.tʁa.sjɔ̃/', 'luh pro-BLEMM | neh pa luh NOHⁿBR | seh la kohⁿ-sahⁿ-tra-SYOHⁿ', ['definition', 'position']),
  phrase(1440, 'le surtourisme', 'overtourism', '/lə syʁ.tu.ʁism/', 'luh sür-too-REESM', ['debat']),
  phrase(1441, 'étaler la saison', 'to spread the season out', '/e.ta.le la sɛ.zɔ̃/', 'ay-ta-lay la seh-ZOHⁿ', ['debat']),
  phrase(1442, 'une querelle de mots', 'a quibble over words', '/yn kə.ʁɛl də mo/', 'ün kuh-rel duh MOH', ['definition']),
  sent(1443, 'Un désaccord sur le mot est un désaccord sur le remède.', 'A disagreement about the word is a disagreement about the remedy.', '/œ̃ de.za.kɔʁ syʁ lə mo ɛ.tœ̃ de.za.kɔʁ syʁ lə ʁə.mɛd/', 'uhⁿ day-za-kor sür luh MOH | eh-tuhⁿ day-za-kor sür luh ruh-MED', ['rule', 'definition'], ['flashcard'],
    rule('« Le mot me gêne. » Elle chipote ?', "Non. Si le nom change, la solution change. Note le mot refusé, et celui qu'elle propose à la place.")),
  sent(1444, "Ils s'accordent sur la saturation d'août, pas sur son nom.", 'They agree on the August saturation, not on its name.', '/il sa.kɔʁd syʁ la sa.ty.ʁa.sjɔ̃ du pa syʁ sɔ̃ nɔ̃/', 'eel sa-kord sür la sa-tü-ra-syohⁿ DOO | pa sür sohⁿ NOHⁿ', ['resume', 'definition'], FCVDR),
  sent(1445, 'Elle conteste le mot de surtourisme et parle de concentration.', 'She disputes the word overtourism and speaks of concentration.', '/ɛl kɔ̃.tɛst lə mo də syʁ.tu.ʁism e paʁl də kɔ̃.sɑ̃.tʁa.sjɔ̃/', 'el kohⁿ-test luh moh duh sür-too-REESM | ay parl duh kohⁿ-sahⁿ-tra-SYOHⁿ', ['resume', 'definition']),
  sent(1446, 'Appelons les choses autrement.', 'Let us call things by another name.', '/a.plɔ̃ le ʃoz o.tʁə.mɑ̃/', 'a-plohⁿ lay SHOHZ | oh-truh-MAHⁿ', ['definition']),
];

/* ── ACT 5 · CONCÉDER SANS CÉDER ─────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1447, "J'accorde la distinction, elle est juste.", 'I grant the distinction, it is a fair one.', '/ʒa.kɔʁd la dis.tɛ̃k.sjɔ̃ ɛ.lɛ ʒyst/', 'zha-kord la dees-tehⁿk-SYOHⁿ | eh-leh ZHÜST', ['concession'], FCVDR),
  sent(1448, 'Je vous suis sur la lumière du soir, je ne vous suis pas sur les courses.', 'I follow you on the evening light, I do not follow you on the shopping.', '/ʒə vu sɥi syʁ la ly.mjɛʁ dy swaʁ ʒə nə vu sɥi pa syʁ le kuʁs/', 'zhuh voo swee sür la lü-myehr dü SWAR | zhuh nuh voo swee pa sür lay KOORS', ['concession', 'ligne'], FCVDR),
  sent(1449, "Je vous concède volontiers que ce n'est pas un argument de santé.", 'I readily concede that it is not a health argument.', '/ʒə vu kɔ̃.sɛd vɔ.lɔ̃.tje kə sə nɛ pa.zœ̃.naʁ.ɡy.mɑ̃ də sɑ̃.te/', 'zhuh voo kohⁿ-sed vo-lohⁿ-TYAY | kuh suh neh pa-zuhⁿ-nar-gü-mahⁿ duh sahⁿ-TAY', ['concession']),
  sent(1450, 'Admettons.', 'Let us suppose so, for now.', '/ad.mɛ.tɔ̃/', 'ad-meh-TOHⁿ', ['concession']),
  sent(1451, 'Le point est accordé, il ne règle pas la question.', 'The point is granted; it does not settle the question.', '/lə pwɛ̃ ɛ.ta.kɔʁ.de il nə ʁɛɡl pa la kɛs.tjɔ̃/', 'luh PWEHⁿ | eh-ta-kor-DAY | eel nuh regl pa la kes-TYOHⁿ', ['concession', 'ligne'], FCVDR),
  sent(1452, 'Il faut distinguer deux choses.', 'Two things must be distinguished.', '/il fo dis.tɛ̃.ɡe dø ʃoz/', 'eel foh dees-tehⁿ-GAY | deu SHOHZ', ['definition']),
  sent(1453, 'Une concession a une portée : écoute exactement ce qui est accordé.', 'A concession has a scope: listen for exactly what is granted.', '/yn kɔ̃.se.sjɔ̃ a yn pɔʁ.te e.kut ɛɡ.zak.tə.mɑ̃ sə ki ɛ.ta.kɔʁ.de/', 'ün kohⁿ-say-SYOHⁿ | a ün por-TAY | ay-koot eg-zak-tuh-MAHⁿ | suh kee eh-ta-kor-DAY', ['rule', 'concession'], ['flashcard'],
    rule('« Je vous suis sur la lumière du soir... » Elle est d\'accord sur tout ?', "Non. Elle accorde un point précis et refuse le suivant. Note ce qui est accordé, et ce qui ne l'est pas.")),
  phrase(1454, "le changement d'heure", 'the clock change', '/lə ʃɑ̃ʒ.mɑ̃ dœʁ/', 'luh shahⁿzh-mahⁿ DUHR', ['debat']),
  phrase(1455, 'un décalage durable', 'a lasting mismatch', '/œ̃ de.ka.laʒ dy.ʁabl/', 'uhⁿ day-ka-lazh dü-RABL', ['debat']),
  sent(1456, 'Il accorde la distinction, mais il maintient son argument.', 'He grants the distinction, but he keeps his argument.', '/il a.kɔʁd la dis.tɛ̃k.sjɔ̃ mɛ il mɛ̃.tjɛ̃ sɔ̃.naʁ.ɡy.mɑ̃/', 'eel a-kord la dees-tehⁿk-SYOHⁿ | meh eel mehⁿ-tyehⁿ sohⁿ-nar-gü-MAHⁿ', ['resume', 'concession'], FCVDR),
  sent(1457, "Elle le suit sur un point et pas sur l'autre.", 'She follows him on one point and not on the other.', '/ɛl lə sɥi syʁ œ̃ pwɛ̃ e pa syʁ lotʁ/', 'el luh swee sür uhⁿ PWEHⁿ | ay pa sür LOHTR', ['resume', 'concession']),
  sent(1458, 'Une règle que personne ne comprend ne tiendra pas.', 'A rule nobody understands will not last.', '/yn ʁɛɡl kə pɛʁ.sɔn nə kɔ̃.pʁɑ̃ nə tjɛ̃.dʁa pa/', 'ün REGL | kuh pehr-SONN nuh kohⁿ-PRAHⁿ | nuh tyehⁿ-dra PA', ['debat'], FCVDR),
  phrase(1459, 'faire une concession', 'to make a concession', '/fɛʁ yn kɔ̃.se.sjɔ̃/', 'fehr ün kohⁿ-say-SYOHⁿ', ['concession']),
  sent(1460, "Je l'admets bien volontiers.", 'I readily admit it.', '/ʒə lad.mɛ bjɛ̃ vɔ.lɔ̃.tje/', 'zhuh lad-meh byehⁿ vo-lohⁿ-TYAY', ['concession']),
];

/* ── ACT 6 · RESSERRER LA THÈSE ─────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1461, 'Je soutiens quelque chose de plus étroit.', 'I am arguing for something narrower.', '/ʒə su.tjɛ̃ kɛl.kə ʃoz də ply.ze.tʁwa/', 'zhuh soo-tyehⁿ kel-kuh SHOHZ | duh plü-zay-TRWA', ['these'], FCVDR),
  sent(1462, "Je ne dis pas qu'on crée moins chez soi ; je dis que les idées nouvelles naissent moins en visioconférence.", 'I am not saying people create less at home; I am saying new ideas are born less often on video calls.', '/ʒə nə di pa kɔ̃ kʁe mwɛ̃ ʃe swa ʒə di kə le.zi.de nu.vɛl nɛs mwɛ̃.zɑ̃ vi.zjo.kɔ̃.fe.ʁɑ̃s/', 'zhuh nuh dee pa kohⁿ kray mwehⁿ shay SWA | zhuh dee kuh lay-zee-day noo-vel ness mwehⁿ-zahⁿ vee-zyoh-kohⁿ-fay-RAHⁿS', ['these']),
  sent(1463, 'Ma thèse est plus modeste.', 'My thesis is more modest.', '/ma tɛz ɛ ply mɔ.dɛst/', 'ma TEZ | eh plü mo-DEST', ['these'], FCVDR),
  sent(1464, "La thèse que vous réfutez n'est pas la mienne.", 'The thesis you are refuting is not mine.', '/la tɛz kə vu ʁe.fy.te nɛ pa la mjɛn/', 'la tez kuh voo ray-fü-TAY | neh pa la MYENN', ['these'], FCVDR),
  sent(1465, "Ne me faites pas dire ce que je n'ai pas dit.", 'Do not put words in my mouth.', '/nə mə fɛt pa diʁ sə kə ʒə nɛ pa di/', 'nuh muh fet pa DEER | suh kuh zhuh neh pa DEE', ['these']),
  sent(1466, 'Dans ce cas précis, et dans celui-là seulement.', 'In this precise case, and in that one only.', '/dɑ̃ sə ka pʁe.si e dɑ̃ sə.lɥi.la sœl.mɑ̃/', 'dahⁿ suh ka pray-SEE | ay dahⁿ suh-lwee-LA suhl-MAHⁿ', ['these']),
  sent(1467, "Une thèse resserrée se défend mieux qu'une thèse large.", 'A narrowed thesis is easier to defend than a broad one.', '/yn tɛz ʁə.se.ʁe sə de.fɑ̃ mjø kyn tɛz laʁʒ/', 'ün tez ruh-say-RAY | suh day-fahⁿ MYEU | kün tez LARZH', ['rule', 'these'], ['flashcard'],
    rule('« Je soutiens quelque chose de plus étroit. » Elle recule ?', "Non : elle précise ce qu'elle défend. Note la version étroite, pas celle du titre ou de la question.")),
  phrase(1468, 'la visioconférence', 'video conferencing', '/la vi.zjo.kɔ̃.fe.ʁɑ̃s/', 'la vee-zyoh-kohⁿ-fay-RAHⁿS', ['debat']),
  phrase(1469, 'réfuter une thèse', 'to refute a thesis', '/ʁe.fy.te yn tɛz/', 'ray-fü-tay ün TEZ', ['these']),
  sent(1470, "Elle ne défend pas la thèse qu'on lui prête.", 'She does not hold the thesis attributed to her.', '/ɛl nə de.fɑ̃ pa la tɛz kɔ̃ lɥi pʁɛt/', 'el nuh day-fahⁿ pa la TEZ | kohⁿ lwee PRET', ['resume', 'these'], FCVDR),
  sent(1471, 'Il réfute une version plus large que la sienne.', 'He refutes a broader version than hers.', '/il ʁe.fyt yn vɛʁ.sjɔ̃ ply laʁʒ kə la sjɛn/', 'eel ray-füt ün vehr-syohⁿ plü LARZH | kuh la SYENN', ['resume', 'these']),
  sent(1472, 'Je retire le mot « toujours ».', 'I withdraw the word "always".', '/ʒə ʁə.tiʁ lə mo tu.ʒuʁ/', 'zhuh ruh-teer luh MOH | too-ZHOOR', ['these']),
];

/* ── ACT 7 · RÉPONDRE À L'OBJECTION ─────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1473, "On m'objectera que les gens ne rapporteront pas leurs bouteilles.", 'Someone will object that people will not bring their bottles back.', '/ɔ̃ mɔb.ʒɛk.tə.ʁa kə le ʒɑ̃ nə ʁa.pɔʁ.tə.ʁɔ̃ pa lœʁ bu.tɛj/', 'ohⁿ mob-zhek-tuh-RA | kuh lay zhahⁿ nuh ra-por-tuh-rohⁿ pa luhr boo-TEHY', ['objection'], FCVDR),
  sent(1474, 'À cela, je réponds que personne ne rapporte une bouteille qui ne lui rapporte rien.', 'To that I reply that nobody returns a bottle that brings them nothing.', '/a sə.la ʒə ʁe.pɔ̃ kə pɛʁ.sɔn nə ʁa.pɔʁt yn bu.tɛj ki nə lɥi ʁa.pɔʁt ʁjɛ̃/', 'a suh-LA | zhuh ray-pohⁿ kuh pehr-SONN nuh ra-port ün boo-TEHY | kee nuh lwee ra-port RYEHⁿ', ['objection']),
  sent(1475, "L'objection porte, mais pas là où vous le pensez.", 'The objection lands, but not where you think.', '/lɔb.ʒɛk.sjɔ̃ pɔʁt mɛ pa la u vu lə pɑ̃.se/', 'lob-zhek-syohⁿ PORT | meh pa la oo voo luh pahⁿ-SAY', ['objection'], FCVDR),
  sent(1476, "Là, vous avez raison, et c'est une vraie difficulté.", 'There you are right, and it is a real difficulty.', '/la vu.za.ve ʁɛ.zɔ̃ e sɛ.tyn vʁɛ di.fi.kyl.te/', 'LA | voo-za-vay reh-ZOHⁿ | ay seh-tün vreh dee-fee-kül-TAY', ['objection', 'concession'], FCVDR),
  sent(1477, 'Cela ne contredit pas le principe.', 'That does not contradict the principle.', '/sə.la nə kɔ̃.tʁə.di pa lə pʁɛ̃.sip/', 'suh-la nuh kohⁿ-truh-DEE | pa luh prehⁿ-SEEP', ['objection'], FCVDR),
  sent(1478, "Admettons qu'ils la rapportent.", 'Let us suppose they do bring it back.', '/ad.mɛ.tɔ̃ kil la ʁa.pɔʁt/', 'ad-meh-TOHⁿ | keel la ra-PORT', ['objection', 'concession']),
  sent(1479, 'Une objection appelle une réponse : retourner, reconnaître ou déplacer.', 'An objection calls for an answer: turn it round, acknowledge it, or shift it.', '/yn ɔb.ʒɛk.sjɔ̃ a.pɛl yn ʁe.pɔ̃s ʁə.tuʁ.ne ʁə.kɔ.nɛtʁ u de.pla.se/', 'ün ob-zhek-syohⁿ a-pel ün ray-POHⁿS | ruh-toor-NAY | ruh-ko-NETR | oo day-pla-SAY', ['rule', 'objection'], ['flashcard'],
    rule("« L'objection porte, mais pas là où vous le pensez. » Que fait-elle ?", "Elle retourne l'objection : l'argument de l'autre devient le sien. Note l'objection, puis la manière d'y répondre.")),
  phrase(1480, 'la consigne', 'the deposit (on a bottle)', '/la kɔ̃.siɲ/', 'la kohⁿ-SEENY', ['debat']),
  phrase(1481, 'un point de collecte', 'a collection point', '/œ̃ pwɛ̃ də kɔ.lɛkt/', 'uhⁿ pwehⁿ duh ko-LEKT', ['debat']),
  phrase(1482, 'retourner un argument', 'to turn an argument around', '/ʁə.tuʁ.ne œ̃.naʁ.ɡy.mɑ̃/', 'ruh-toor-nay uhⁿ-nar-gü-MAHⁿ', ['objection']),
  sent(1483, 'Elle retourne la première objection et reconnaît la seconde.', 'She turns the first objection round and acknowledges the second.', '/ɛl ʁə.tuʁn la pʁə.mjɛʁ ɔb.ʒɛk.sjɔ̃ e ʁə.kɔ.nɛ la sə.ɡɔ̃d/', 'el ruh-toorn la pruh-myehr ob-zhek-SYOHⁿ | ay ruh-ko-neh la suh-GOHⁿD', ['resume', 'objection'], FCVDR),
  sent(1484, 'Le principe, je ne le discute plus.', 'The principle I no longer dispute.', '/lə pʁɛ̃.sip ʒə nə lə dis.kyt ply/', 'luh prehⁿ-SEEP | zhuh nuh luh dees-küt PLÜ', ['concession']),
  sent(1485, "C'est précisément mon argument.", 'That is precisely my argument.', '/sɛ pʁe.si.ze.mɑ̃ mɔ̃.naʁ.ɡy.mɑ̃/', 'seh pray-see-zay-MAHⁿ | mohⁿ-nar-gü-MAHⁿ', ['objection']),
  sent(1486, "Il accepte l'incitation ; c'est la logistique qui l'inquiète.", 'He accepts the incentive; it is the logistics that worry him.', '/il ak.sɛpt lɛ̃.si.ta.sjɔ̃ sɛ la lɔ.ʒis.tik ki lɛ̃.kjɛt/', 'eel ak-sept lehⁿ-see-ta-SYOHⁿ | seh la lo-zhees-TEEK | kee lehⁿ-KYET', ['resume', 'ligne']),
];

/* ── ACT 8 · L'ANALOGIE ET L'ALLUSION ────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1487, "C'est un peu comme jeter une voiture parce que les pneus sont usés.", 'It is a bit like throwing out a car because the tyres are worn.', '/sɛ.tœ̃ pø kɔm ʒə.te yn vwa.tyʁ paʁs kə le pnø sɔ̃.ty.ze/', 'seh-tuhⁿ peu kom zhuh-tay ün vwa-TÜR | parss kuh lay PNEU | sohⁿ-tü-ZAY', ['image', 'analogie']),
  sent(1488, "La comparaison est jolie, mais une école n'est pas une voiture.", 'The comparison is pretty, but a school is not a car.', '/la kɔ̃.pa.ʁɛ.zɔ̃ ɛ ʒɔ.li mɛ y.ne.kɔl nɛ pa.zyn vwa.tyʁ/', 'la kohⁿ-pa-reh-zohⁿ eh zho-LEE | meh ü-nay-KOL | neh pa-zün vwa-TÜR', ['image', 'objection'], FCVDR),
  sent(1489, "C'est remplir le tonneau des Danaïdes.", 'It is filling the jar of the Danaids (an endless task).', '/sɛ ʁɑ̃.pliʁ lə tɔ.no de da.na.id/', 'seh rahⁿ-pleer luh to-NOH | day da-na-EED', ['image', 'allusion'], FCVDR),
  phrase(1490, 'déshabiller Pierre pour habiller Paul', 'to rob Peter to pay Paul', '/de.za.bi.je pjɛʁ puʁ a.bi.je pɔl/', 'day-za-bee-yay PYEHR | poor a-bee-yay POL', ['image', 'allusion']),
  sent(1491, 'Le remède serait pire que le mal.', 'The cure would be worse than the disease.', '/lə ʁə.mɛd sə.ʁɛ piʁ kə lə mal/', 'luh ruh-MED | suh-reh PEER kuh luh MAL', ['image', 'allusion'], FCVDR),
  phrase(1492, "l'arbre qui cache la forêt", 'the tree that hides the forest (a detail that hides the bigger picture)', '/laʁbʁ ki kaʃ la fɔ.ʁɛ/', 'larbr kee kash la fo-REH', ['image', 'allusion']),
  phrase(1493, 'mettre la charrue avant les bœufs', 'to put the cart before the horse', '/mɛtʁ la ʃa.ʁy a.vɑ̃ le bø/', 'metr la sha-RÜ | a-vahⁿ lay BEU', ['image', 'allusion']),
  phrase(1494, 'un travail de Pénélope', "a never-ending task (Penelope's weaving)", '/œ̃ tʁa.vaj də pe.ne.lɔp/', 'uhⁿ tra-vahy duh pay-nay-LOP', ['image', 'allusion']),
  sent(1495, 'Une image dit un argument : traduis-la, puis juge-la.', 'An image states an argument: translate it, then judge it.', '/yn i.maʒ di œ̃.naʁ.ɡy.mɑ̃ tʁa.dɥi.la pɥi ʒyʒ.la/', 'ün ee-MAZH | dee uhⁿ-nar-gü-MAHⁿ | tra-dwee-LA | pwee zhüzh-LA', ['rule', 'image'], ['flashcard'],
    rule('« C\'est remplir le tonneau des Danaïdes. » Que dit-il ?', "Que la dépense ne finira jamais. Note l'argument, pas l'image, et demande-toi si la comparaison tient.")),
  sent(1496, "Comparaison n'est pas raison.", 'A comparison is not a proof.', '/kɔ̃.pa.ʁɛ.zɔ̃ nɛ pa ʁɛ.zɔ̃/', 'kohⁿ-pa-reh-ZOHⁿ | neh pa reh-ZOHⁿ', ['image', 'objection'], FCVDR),
  sent(1497, 'Pour lui, les réparations ne finissent jamais.', 'For him, the repairs never end.', '/puʁ lɥi le ʁe.pa.ʁa.sjɔ̃ nə fi.nis ʒa.mɛ/', 'poor LWEE | lay ray-pa-ra-SYOHⁿ | nuh fee-neess zha-MEH', ['resume', 'image']),
  sent(1498, "Il attaque l'analogie avant de proposer la sienne.", 'He attacks the analogy before offering his own.', '/il a.tak la.na.lɔ.ʒi a.vɑ̃ də pʁɔ.po.ze la sjɛn/', 'eel a-tak la-na-lo-ZHEE | a-vahⁿ duh pro-poh-zay la SYENN', ['resume', 'image'], FCVDR),
  sent(1499, 'Si je traduis, vous craignez que les quartiers se vident.', 'If I translate, you fear the neighbourhoods will empty.', '/si ʒə tʁa.dɥi vu kʁɛ.ɲe kə le kaʁ.tje sə vid/', 'see zhuh tra-DWEE | voo kreh-nyay kuh lay kar-tyay suh VEED', ['moderateur', 'image']),
];

/* ── ACT 9 · UNE SEULE ÉCOUTE ───────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1500, 'Trente secondes pour lire les questions, puis une seule écoute.', 'Thirty seconds to read the questions, then a single listening.', '/tʁɑ̃t sə.ɡɔ̃d puʁ liʁ le kɛs.tjɔ̃ pɥi yn sœ.le.kut/', 'trahⁿt suh-GOHⁿD | poor leer lay kes-TYOHⁿ | pwee ün suh-lay-KOOT', ['ecoute', 'epreuve'], FCVDR),
  sent(1501, 'Je lis le mot de la question : accord, désaccord, concession ou réponse.', 'I read the key word of the question: agreement, disagreement, concession or answer.', '/ʒə li lə mo də la kɛs.tjɔ̃ a.kɔʁ de.za.kɔʁ kɔ̃.se.sjɔ̃ u ʁe.pɔ̃s/', 'zhuh lee luh moh duh la kes-TYOHⁿ | a-KOR | day-za-KOR | kohⁿ-say-SYOHⁿ | oo ray-POHⁿS', ['ecoute', 'strategie']),
  sent(1502, "Avant l'écoute, je devine la forme : un accord, puis la ligne.", 'Before listening, I guess the shape: an agreement, then the line.', '/a.vɑ̃ le.kut ʒə də.vin la fɔʁm œ̃.na.kɔʁ pɥi la liɲ/', 'a-vahⁿ lay-KOOT | zhuh duh-veen la FORM | uhⁿ-na-KOR | pwee la LEENY', ['ecoute', 'strategie'], FCVDR),
  sent(1503, 'Une écoute, un mot-clé par question.', 'One listening, one key word per question.', '/yn e.kut œ̃ mo.kle paʁ kɛs.tjɔ̃/', 'ün ay-KOOT | uhⁿ moh-KLAY par kes-TYOHⁿ', ['ecoute', 'strategie'], FCVDR),
  sent(1504, "Après l'écoute, j'élimine les options qui disent trop.", 'After listening, I rule out the options that say too much.', '/a.pʁɛ le.kut ʒe.li.min le.zɔp.sjɔ̃ ki diz tʁo/', 'a-preh lay-KOOT | zhay-lee-meen lay-zop-syohⁿ kee deez TROH', ['ecoute', 'piege'], FCVDR),
  sent(1505, 'Une seule écoute : lis, prévois, écoute, élimine.', 'One listening only: read, predict, listen, eliminate.', '/yn sœ.le.kut li pʁe.vwa e.kut e.li.min/', 'ün suh-lay-KOOT | LEE | pray-VWA | ay-KOOT | ay-lee-MEEN', ['rule', 'ecoute'], ['flashcard'],
    rule("Tu as trente secondes avant l'écoute. Tu fais quoi ?", 'Tu lis les questions, tu repères leur mot-clé, tu prévois où viendra la réponse. Pendant l\'écoute, un mot par question ; après, tu élimines.')),
  phrase(1506, 'un toit végétalisé', 'a green roof', '/œ̃ twa ve.ʒe.ta.li.ze/', 'uhⁿ twa vay-zhay-ta-lee-ZAY', ['debat']),
  phrase(1507, 'une surélévation', 'an added storey (raising a building)', '/yn sy.ʁe.le.va.sjɔ̃/', 'ün sü-ray-lay-va-SYOHⁿ', ['debat']),
  phrase(1508, "un coup d'épée dans l'eau", 'a wasted effort (a sword stroke in water)', '/œ̃ ku de.pe dɑ̃ lo/', 'uhⁿ koo day-PAY | dahⁿ LOH', ['image', 'allusion']),
  phrase(1509, 'prêcher un converti', 'to preach to the converted', '/pʁe.ʃe œ̃ kɔ̃.vɛʁ.ti/', 'pray-shay uhⁿ kohⁿ-vehr-TEE', ['image', 'allusion']),
  sent(1510, 'Le désaccord porte sur la rédaction de la règle, pas sur son but.', 'The disagreement is about how the rule is worded, not about its aim.', '/lə de.za.kɔʁ pɔʁt syʁ la ʁe.dak.sjɔ̃ də la ʁɛɡl pa syʁ sɔ̃ byt/', 'luh day-za-kor port sür la ray-dak-syohⁿ duh la REGL | pa sür sohⁿ BÜT', ['resume', 'ligne'], FCVDR),
];

/* ── ACT 10 · L'ÉPREUVE : TROIS DOCUMENTS ───────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1511, 'Trois documents, une écoute chacun.', 'Three recordings, one listening each.', '/tʁwa dɔ.ky.mɑ̃ yn e.kut ʃa.kœ̃/', 'trwa do-kü-MAHⁿ | ün ay-koot sha-KUHⁿ', ['epreuve']),
  sent(1512, "Sur quoi les deux intervenants s'accordent-ils ?", 'What do the two speakers agree on?', '/syʁ kwa le dø.zɛ̃.tɛʁ.və.nɑ̃ sa.kɔʁd.til/', 'sür KWA | lay deu-zehⁿ-tehr-vuh-NAHⁿ | sa-kord-TEEL', ['epreuve', 'question'], FCVDR),
  sent(1513, 'Quel est le désaccord réel ?', 'What is the real disagreement?', '/kɛ.lɛ lə de.za.kɔʁ ʁe.ɛl/', 'keh-leh luh day-za-kor ray-EL', ['epreuve', 'question'], FCVDR),
  sent(1514, "Comment répond-elle à l'objection ?", 'How does she answer the objection?', '/kɔ.mɑ̃ ʁe.pɔ̃.tɛl a lɔb.ʒɛk.sjɔ̃/', 'ko-mahⁿ ray-pohⁿ-TEL | a lob-zhek-SYOHⁿ', ['epreuve', 'question']),
  sent(1515, "L'option qui dit trop est fausse, même si elle sonne juste.", 'The option that says too much is wrong, even if it sounds right.', '/lɔp.sjɔ̃ ki di tʁo ɛ fos mɛm si ɛl sɔn ʒyst/', 'lop-syohⁿ kee dee TROH | eh FOHSS | memm see el sonn ZHÜST', ['epreuve', 'piege'], FCVDR),
  sent(1516, 'La bonne option reformule ; le piège répète, élargit ou change de camp.', 'The right option rephrases; the trap repeats, widens or switches sides.', '/la bɔ.nɔp.sjɔ̃ ʁə.fɔʁ.myl lə pjɛʒ ʁe.pɛt e.laʁ.ʒi u ʃɑ̃ʒ də kɑ̃/', 'la bo-nop-SYOHⁿ | ruh-for-MÜL | luh PYEZH | ray-PET | ay-lar-ZHEE | oo shahⁿzh duh KAHⁿ', ['rule', 'piege'], ['flashcard'],
    rule('Quatre options, une seule écoute. Comment choisis-tu ?', "Tu écartes l'option qui répète un mot entendu sans son sens, celle qui dit plus que l'intervenant, et celle de l'autre camp. Reste celle qui reformule.")),
  phrase(1517, 'scier la branche sur laquelle on est assis', 'to saw off the branch you are sitting on', '/sje la bʁɑ̃ʃ syʁ la.kɛl ɔ̃.nɛ.ta.si/', 'syay la BRAHⁿSH | sür la-kel ohⁿ-neh-ta-SEE', ['image', 'allusion']),
  sent(1518, 'Tout ce qui vaut quelque chose coûte quelque chose.', 'Everything worth something costs something.', '/tu sə ki vo kɛl.kə ʃoz kut kɛl.kə ʃoz/', 'too suh kee voh kel-kuh SHOHZ | koot kel-kuh SHOHZ', ['debat']),
  sent(1519, "Une règle qu'on n'ose pas utiliser n'est pas une règle.", 'A rule people dare not use is not a rule.', '/yn ʁɛɡl kɔ̃ noz pa.zy.ti.li.ze nɛ pa.zyn ʁɛɡl/', 'ün REGL | kohⁿ nohz pa-zü-tee-lee-ZAY | neh pa-zün REGL', ['debat', 'definition'], FCVDR),
  phrase(1520, 'regrouper trois lycées', 'to group three high schools together', '/ʁə.ɡʁu.pe tʁwa li.se/', 'ruh-groo-pay trwa lee-SAY', ['debat']),
  sent(1521, "Il ne conteste pas les études ; il conteste qu'une salle suffise.", 'He does not dispute the studies; he disputes that a room is enough.', '/il nə kɔ̃.tɛst pa le.ze.tyd il kɔ̃.tɛst kyn sal sy.fiz/', 'eel nuh kohⁿ-test pa lay-zay-TÜD | eel kohⁿ-test kün sal sü-FEEZ', ['resume', 'ligne'], FCVDR),
];

/* ── ACT 11 · LE REPORTAGE ──────────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1522, "L'idée principale n'est pas le premier chiffre.", 'The main idea is not the first figure.', '/li.de pʁɛ̃.si.pal nɛ pa lə pʁə.mje ʃifʁ/', 'lee-day prehⁿ-see-PAL | neh pa luh pruh-myay SHEEFR', ['idee', 'strategie'], FCVDR),
  sent(1523, "L'idée principale arrive souvent avec le « mais » du reportage.", "The main idea often arrives with the report's \"but\".", '/li.de pʁɛ̃.si.pal a.ʁiv su.vɑ̃ a.vɛk lə mɛ dy ʁə.pɔʁ.taʒ/', 'lee-day prehⁿ-see-PAL | a-reev soo-vahⁿ a-vek luh MEH | dü ruh-por-TAZH', ['idee', 'strategie']),
  sent(1524, 'La dernière phrase de la narratrice résume souvent le reportage.', "The narrator's last sentence often sums up the report.", '/la dɛʁ.njɛʁ fʁaz də la na.ʁa.tʁis ʁe.zym su.vɑ̃ lə ʁə.pɔʁ.taʒ/', 'la dehr-nyehr FRAHZ | duh la na-ra-TREESS | ray-züm soo-vahⁿ luh ruh-por-TAZH', ['idee', 'strategie'], FCVDR),
  sent(1525, "L'idée principale explique les détails ; un détail ne l'explique pas.", 'The main idea explains the details; a detail does not explain it.', '/li.de pʁɛ̃.si.pal ɛks.plik le de.taj œ̃ de.taj nə lɛks.plik pa/', 'lee-day prehⁿ-see-PAL | eks-pleek lay day-TAHY | uhⁿ day-TAHY | nuh leks-pleek PA', ['rule', 'idee'], ['flashcard'],
    rule("« Quelle est l'idée principale ? » Comment la reconnais-tu ?", 'C\'est la phrase qui donne un sens à toutes les autres. Un chiffre vrai, mais isolé, est un détail.')),
  sent(1526, "Une mesure d'économie devenue un choix de mode de vie.", 'A cost-cutting measure that became a lifestyle choice.', '/yn mə.zyʁ de.kɔ.nɔ.mi də.və.ny œ̃ ʃwa də mɔd də vi/', 'ün muh-ZÜR | day-ko-no-MEE | duh-vuh-nü uhⁿ SHWA | duh mod duh VEE', ['idee', 'reportage'], FCVDR),
  phrase(1527, "l'éclairage public", 'street lighting', '/le.klɛ.ʁaʒ py.blik/', 'lay-kleh-razh pü-BLEEK', ['reportage']),
  phrase(1528, 'la Voie lactée', 'the Milky Way', '/la vwa lak.te/', 'la vwa lak-TAY', ['reportage']),
  phrase(1529, 'garder la nuit noire', 'to keep the night dark', '/ɡaʁ.de la nɥi nwaʁ/', 'gar-day la nwee NWAR', ['reportage']),
  sent(1530, "Au début, on éteignait pour payer moins ; maintenant, on éteint parce qu'on aime ça.", 'At first we switched off to pay less; now we switch off because we like it.', '/o de.by ɔ̃.ne.tɛ.ɲɛ puʁ pe.je mwɛ̃ mɛ̃t.nɑ̃ ɔ̃.ne.tɛ̃ paʁs kɔ̃.nɛm sa/', 'oh day-BÜ | ohⁿ-nay-teh-nyeh poor pay-yay MWEHⁿ | mehⁿt-NAHⁿ | ohⁿ-nay-TEHⁿ | parss kohⁿ-nemm SA', ['reportage', 'idee']),
  phrase(1531, 'le retournement', 'the turning point (in a report)', '/lə ʁə.tuʁ.nə.mɑ̃/', 'luh ruh-toor-nuh-MAHⁿ', ['idee']),
  sent(1532, "Le reportage montre qu'une mesure prise pour économiser a été gardée pour d'autres raisons.", 'The report shows that a measure taken to save money was kept for other reasons.', '/lə ʁə.pɔʁ.taʒ mɔ̃tʁ kyn mə.zyʁ pʁiz puʁ e.kɔ.nɔ.mi.ze a e.te ɡaʁ.de puʁ do.tʁə ʁɛ.zɔ̃/', 'luh ruh-por-TAZH | mohⁿtr kün muh-zür preez poor ay-ko-no-mee-ZAY | a ay-tay gar-DAY | poor doh-truh reh-ZOHⁿ', ['resume', 'idee'], FCVDR),
];

/* ── ACT 12 · LE DÉBAT DU JEUDI ─────────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1533, 'Les trois invités partent du même constat.', 'The three guests start from the same finding.', '/le tʁwa.zɛ̃.vi.te paʁt dy mɛm kɔ̃s.ta/', 'lay trwa-zehⁿ-vee-TAY | part dü memm kohⁿs-TA', ['resume', 'accord'], FCVDR),
  sent(1534, "Le désaccord porte d'abord sur un mot.", 'The disagreement is first about a word.', '/lə de.za.kɔʁ pɔʁt da.bɔʁ syʁ œ̃ mo/', 'luh day-za-kor port da-BOR | sür uhⁿ MOH', ['resume', 'definition'], FCVDR),
  sent(1535, 'Elle défend une thèse plus étroite que la règle.', 'She holds a narrower thesis than the rule.', '/ɛl de.fɑ̃ yn tɛz ply.ze.tʁwat kə la ʁɛɡl/', 'el day-fahⁿ ün TEZ | plü-zay-TRWAT | kuh la REGL', ['resume', 'these'], FCVDR),
  sent(1536, "La directrice répond à l'objection par une solution technique.", 'The director answers the objection with a technical solution.', '/la di.ʁɛk.tʁis ʁe.pɔ̃ a lɔb.ʒɛk.sjɔ̃ paʁ yn so.ly.sjɔ̃ tɛk.nik/', 'la dee-rek-TREESS | ray-pohⁿ a lob-zhek-SYOHⁿ | par ün so-lü-syohⁿ tek-NEEK', ['resume', 'objection'], FCVDR),
  sent(1537, "Le serveur retient les messages jusqu'au matin.", 'The server holds the messages until morning.', '/lə sɛʁ.vœʁ ʁə.tjɛ̃ le me.saʒ ʒys.ko ma.tɛ̃/', 'luh sehr-VUHR | ruh-tyehⁿ lay may-SAZH | zhüs-koh ma-TEHⁿ', ['debat']),
  phrase(1538, 'fermer la porte et laisser la fenêtre ouverte', 'to close the door and leave the window open', '/fɛʁ.me la pɔʁt e le.se la fə.nɛ.tʁu.vɛʁt/', 'fehr-may la PORT | ay leh-say la fuh-neh-troo-VEHRT', ['image', 'analogie']),
  phrase(1539, 'rester lettre morte', 'to remain a dead letter', '/ʁɛs.te lɛtʁ mɔʁt/', 'res-tay letr MORT', ['image', 'allusion']),
  phrase(1540, 'un compte rendu', 'an account, a report (of a meeting or debate)', '/œ̃ kɔ̃t ʁɑ̃.dy/', 'uhⁿ kohⁿt rahⁿ-DÜ', ['resume']),
  phrase(1541, 'le droit à la déconnexion', 'the right to disconnect', '/lə dʁwa a la de.kɔ.nɛk.sjɔ̃/', 'luh drwa a la day-ko-nek-SYOHⁿ', ['debat']),
  sent(1542, "Selon lui, une interdiction n'est pas un droit.", 'In his view, a ban is not a right.', '/sə.lɔ̃ lɥi yn ɛ̃.tɛʁ.dik.sjɔ̃ nɛ pa.zœ̃ dʁwa/', 'suh-lohⁿ LWEE | ün ehⁿ-tehr-deek-SYOHⁿ | neh pa-zuhⁿ DRWA', ['resume', 'definition'], FCVDR),
  sent(1543, "À la fin, ils se rapprochent sans être tout à fait d'accord.", 'In the end, they move closer without fully agreeing.', '/a la fɛ̃ il sə ʁa.pʁɔʃ sɑ̃.zɛtʁ tu.ta.fɛ da.kɔʁ/', 'a la FEHⁿ | eel suh ra-PROSH | sahⁿ-zetr too-ta-feh da-KOR', ['resume', 'ligne']),
  sent(1544, "Je rapporte qui accorde quoi, sans donner mon avis.", 'I report who grants what, without giving my opinion.', '/ʒə ʁa.pɔʁt ki a.kɔʁd kwa sɑ̃ dɔ.ne mɔ̃.na.vi/', 'zhuh ra-port kee a-kord KWA | sahⁿ do-nay mohⁿ-na-VEE', ['resume', 'strategie'], FCVDR),
  sent(1545, 'Un compte rendu dit où passe la ligne, et comment elle a bougé.', 'An account says where the line runs, and how it moved.', '/œ̃ kɔ̃t ʁɑ̃.dy di u pas la liɲ e kɔ.mɑ̃ ɛ.la bu.ʒe/', 'uhⁿ kohⁿt rahⁿ-DÜ | dee oo pass la LEENY | ay ko-mahⁿ eh-la boo-ZHAY', ['rule', 'resume'], ['flashcard'],
    rule("Tu rends compte d'un débat. Tu commences par quoi ?", "Par le constat partagé, puis la ligne de partage, puis l'objection et sa réponse, et enfin ce qui a bougé.")),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 *  146 authored rows in `.1400`-`.1545`, no gaps. `.1546`-`.1599` free.
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
 *  §I. THE ANCHOR RECORDINGS (« texte original écrit pour la leçon »)
 *
 *  One per act, 40 to 150 seconds. `L(n)` is a line that IS corpus row n
 *  (the move the act teaches); `F()` is connecting talk owned here. The
 *  speaker of each line is named in the parallel `*_VOICES` list, which the
 *  studio briefs and the task transcript use; a listening line carries no
 *  speaker label, so the learner finds the turn by ear and by the
 *  moderator's naming, which is the point.
 * ══════════════════════════════════════════════════════════════════════════ */

export type Line = { fr: string; en: string };
const BY_ID = new Map(ALL_ROWS.map((r) => [r.id, r]));
const L = (n: number): Line => {
  const r = BY_ID.get(E(n));
  if (!r) throw new Error(`c1.21: anchor names a missing row ${n}`);
  return { fr: r.fr, en: r.en };
};
const F = (fr: string, en: string): Line => ({ fr, en });
const voiced = (lines: Line[], voices: string[], tag: string): Line[] => {
  if (voices.length !== lines.length) throw new Error(`c1.21: ${tag} voices out of step with lines`);
  return lines;
};

/** Act 1: « L'Heure partagée », Radio Lisière, Sunday opening of the town
 *  libraries. Host Jonas Leblanc, Odile Ferrand (head of the central
 *  library), Bastien Morel (staff representative). About 60 seconds. */
export const TABLE_VOICES = ['animateur', 'Odile', 'animateur', 'Bastien', 'Bastien', 'Odile', 'Bastien', 'animateur', 'Odile'];
export const TABLE_LINES: Line[] = voiced([
  F("Bonjour, ici L'Heure partagée, sur Radio Lisière. Faut-il ouvrir les bibliothèques municipales le dimanche ? Odile Ferrand dirige la médiathèque centrale, Bastien Morel représente le personnel. Odile Ferrand, d'abord.", "Hello, this is L'Heure partagée on Radio Lisière. Should the town libraries open on Sundays? Odile Ferrand runs the central library, Bastien Morel represents the staff. Odile Ferrand, first."),
  F("Le dimanche, c'est le seul jour où les familles et les étudiants qui travaillent sont libres. Fermer ce jour-là, c'est fermer pour eux.", 'Sunday is the only day when families and students who work are free. Closing that day means closing for them.'),
  F('Bastien Morel, vous êtes contre ?', 'Bastien Morel, are you against it?'),
  F("Pas du tout, et je tiens à le dire : sur le principe, je suis d'accord avec Odile Ferrand. Une bibliothèque fermée quand les gens sont libres, ça n'a pas de sens.", 'Not at all, and I want to say so: in principle, I agree with Odile Ferrand. A library that is closed when people are free makes no sense.'),
  F("Ce que je refuse, c'est la manière : on nous demande d'ouvrir à effectifs constants, donc avec les mêmes personnes, sur sept jours au lieu de six.", 'What I refuse is the way it is done: we are being asked to open with no increase in staff, so with the same people, over seven days instead of six.'),
  F("Personne n'a parlé d'effectifs constants.", 'Nobody has talked about keeping staff levels the same.'),
  F("Le budget, si. Le budget de l'an prochain ne prévoit aucun poste de plus.", "The budget has. Next year's budget does not include a single extra post."),
  L(1408),
  F("Sur les moyens, oui, et peut-être sur le calendrier. Mais c'est là, et seulement là, que nous divergeons.", 'On the means, yes, and perhaps on the timetable. But that is where, and only where, we differ.'),
], TABLE_VOICES, 'TABLE');

/** Act 2: « La Table longue », Radio Lisière, the four-day week at Meubles
 *  Boréal one year on. Host Hugo Tremblay; Claire-Anne Dubé (head of human
 *  resources), Malik Ouédraogo (labour economist), Sophie Lavallée (staff
 *  delegate). About 80 seconds. */
export const BOREAL_VOICES = ['animateur', 'Claire-Anne', 'animateur', 'Malik', 'animateur', 'Sophie', 'Claire-Anne', 'animateur', 'Malik', 'animateur', 'Sophie', 'animateur'];
export const BOREAL_LINES: Line[] = voiced([
  F("Bonsoir. Il y a un an, Meubles Boréal passait à la semaine de quatre jours, sans baisse de salaire. Bilan ce soir avec trois invités. Claire-Anne Dubé, vous dirigez les ressources humaines : ça marche ?", 'Good evening. A year ago, Meubles Boréal moved to a four-day week with no cut in pay. We take stock tonight with three guests. Claire-Anne Dubé, you head human resources: is it working?'),
  F("Les chiffres sont bons : moins d'absences, presque plus de départs, et la production n'a pas baissé.", 'The figures are good: fewer absences, hardly anyone leaving, and output has not fallen.'),
  F('Malik Ouédraogo, vous êtes économiste du travail. Vous partagez cet enthousiasme ?', 'Malik Ouédraogo, you are a labour economist. Do you share that enthusiasm?'),
  F("Je partage le constat, pas l'enthousiasme. Un an, c'est court, et l'entreprise a recruté au même moment : on ne sait pas ce qui produit l'effet.", 'I share the finding, not the enthusiasm. A year is short, and the company was hiring at the same time: we do not know what is producing the effect.'),
  F('Sophie Lavallée, vous représentez le personnel. On ne vous a pas encore entendue.', 'Sophie Lavallée, you represent the staff. We have not heard from you yet.'),
  F("Les gens sont contents, c'est vrai. Mais les journées font maintenant neuf heures et demie, et à l'atelier, ça se sent dans le dos.", 'People are happy, that is true. But the working days are now nine and a half hours long, and in the workshop you feel it in your back.'),
  F("Personne n'est obligé de faire des journées aussi longues, il existe d'autres formules.", 'Nobody is obliged to work such long days, there are other arrangements.'),
  F('Un instant. Restons sur la question de départ : faut-il étendre le modèle à toute la filière du meuble ? Malik Ouédraogo.', 'One moment. Let us stay on the original question: should the model be extended to the whole furniture sector? Malik Ouédraogo.'),
  F("Pas avant d'avoir mesuré l'effet sur deux ou trois ans, et dans des entreprises qui ne recrutent pas en même temps.", 'Not before measuring the effect over two or three years, and in companies that are not hiring at the same time.'),
  F("Donc, si je résume : la direction veut étendre, l'économiste veut attendre, et le personnel demande des journées plus courtes. Sophie Lavallée, c'est juste ?", 'So, if I sum up: management wants to extend it, the economist wants to wait, and the staff are asking for shorter days. Sophie Lavallée, is that right?'),
  F("C'est juste, avec une précision : nous ne demandons pas de revenir à cinq jours.", 'That is right, with one clarification: we are not asking to go back to five days.'),
  L(1415),
], BOREAL_VOICES, 'BOREAL');

/** Act 3: « L'Heure partagée », a city repair bonus. Host Jonas Leblanc;
 *  Agnès Roy (runs a repair café), Thierry Gauvin (economist). About 65
 *  seconds. */
export const REPARER_VOICES = ['animateur', 'Agnès', 'animateur', 'Thierry', 'Thierry', 'Agnès', 'Thierry', 'animateur', 'Agnès', 'Thierry'];
export const REPARER_LINES: Line[] = voiced([
  F('On parle réparation. La Ville propose de rembourser la moitié du prix d\'une réparation, jusqu\'à cinquante dollars. Agnès Roy, vous animez un café de réparation.', 'We are talking about repairs. The City is offering to refund half the cost of a repair, up to fifty dollars. Agnès Roy, you run a repair café.'),
  F("Et je vois chaque samedi des grille-pain jetés pour une pièce à deux dollars. Donc oui, tout ce qui pousse à réparer, je le prends.", 'And every Saturday I see toasters thrown out for a two-dollar part. So yes, anything that pushes people to repair, I will take it.'),
  F('Thierry Gauvin, vous êtes économiste, et plus réservé.', 'Thierry Gauvin, you are an economist, and more reserved.'),
  F("Sur le constat, nous sommes d'accord : on jette beaucoup trop, et souvent pour presque rien. Jusque-là, je suis Agnès Roy sans réserve.", 'On the finding, we agree: we throw away far too much, and often for almost nothing. Up to that point, I follow Agnès Roy without reservation.'),
  L(1424),
  F('Le fabricant, on ne le changera pas d\'ici samedi. Le bonus, lui, marche dès lundi.', 'We will not change the manufacturer by Saturday. The bonus works from Monday.'),
  F("Il marche, mais il paie à la place du fabricant, qui refuse de vendre ses pièces. Je préférerais obliger les marques à les vendre pendant dix ans.", 'It works, but it pays in place of the manufacturer, who refuses to sell his parts. I would rather oblige the brands to sell them for ten years.'),
  F("Donc, même diagnostic, deux remèdes : l'aide tout de suite, ou la contrainte sur les marques.", 'So, same diagnosis, two remedies: help straight away, or pressure on the brands.'),
  L(1427),
  F("Non, à condition que l'un ne serve pas d'excuse pour oublier l'autre.", 'No, provided one does not become an excuse for forgetting the other.'),
], REPARER_VOICES, 'REPARER');

/** Act 3, practice: four short exchanges, each its own line of partition.
 *  One voice per speaker, two speakers per exchange. */
export const ECHANGES_VOICES = ['A', 'B', 'A', 'B', 'A', 'B', 'A', 'B'];
export const ECHANGES_LINES: Line[] = voiced([
  F("Le quartier manque d'arbres, tout le monde le voit. Il faut planter cent arbres rue Sainte-Marthe dès cet automne.", 'The neighbourhood lacks trees, everyone can see it. We must plant a hundred trees on rue Sainte-Marthe this autumn.'),
  F("Les arbres, oui, sans hésiter. Cet automne, non : les conduites d'eau seront refaites au printemps, et on arracherait tout.", 'Trees, yes, without hesitation. This autumn, no: the water mains will be redone in the spring, and we would rip everything out.'),
  F("La cantine doit proposer un repas sans viande par semaine. C'est bon pour la santé et pour la planète.", 'The canteen should offer one meat-free meal a week. It is good for health and for the planet.'),
  F("Pour la planète, je vous suis. Pour la santé, un repas par semaine ne change pas grand-chose ; ne le vendons pas pour ce qu'il n'est pas.", 'For the planet, I follow you. For health, one meal a week does not change much; let us not sell it for what it is not.'),
  F("Le club de lecture devrait se réunir en ligne : on toucherait plus de monde.", 'The book club should meet online: we would reach more people.'),
  F("Plus de monde, c'est certain. Mais un club, c'est aussi le café après ; en ligne, il n'y a plus d'après.", 'More people, certainly. But a club is also the coffee afterwards; online, there is no afterwards any more.'),
  F('Il faut rendre le stationnement payant devant la gare : les places sont prises toute la journée par les mêmes voitures.', 'Parking outside the station must be made paying: the spaces are taken all day by the same cars.'),
  F("Le constat est juste. Payant, d'accord, mais gratuit la première demi-heure, sinon on pénalise ceux qui déposent quelqu'un.", 'The finding is right. Paying, all right, but free for the first half hour, otherwise we penalise people dropping someone off.'),
], ECHANGES_VOICES, 'ECHANGES');

/** Act 4: « L'Heure partagée », Port-Aurel in August. Host Jonas Leblanc;
 *  Delphine Caron (geographer), Yannick Le Goff (hotelier on the harbour).
 *  About 75 seconds. */
export const PORT_VOICES = ['animateur', 'Delphine', 'Delphine', 'animateur', 'Yannick', 'Delphine', 'animateur', 'Delphine', 'Yannick', 'animateur', 'Delphine'];
export const PORT_LINES: Line[] = voiced([
  F("Port-Aurel : mille huit cents habitants l'hiver, vingt mille en août. Faut-il parler de surtourisme ? Delphine Caron, vous êtes géographe.", 'Port-Aurel: eighteen hundred residents in winter, twenty thousand in August. Should we speak of overtourism? Delphine Caron, you are a geographer.'),
  F("Le mot me gêne. Il laisse entendre qu'il y aurait un nombre de touristes au-delà duquel tout va mal, comme un seuil naturel.", 'The word bothers me. It suggests there is a number of tourists beyond which everything goes wrong, like a natural threshold.'),
  F("Or le problème de Port-Aurel n'est pas le nombre, c'est la concentration : tout le monde au même endroit, les trois mêmes semaines.", 'Now the problem in Port-Aurel is not the number, it is the concentration: everyone in the same place, the same three weeks.'),
  F('Yannick Le Goff, vous tenez un hôtel sur le port. Surtourisme, vous le diriez ?', 'Yannick Le Goff, you run a hotel on the harbour. Overtourism, would you say so?'),
  F("Moi, je dis surtourisme, et j'assume. Quand les habitants ne trouvent plus à se garer devant chez eux, ce n'est pas une affaire de répartition, c'est trop de monde.", 'I say overtourism, and I stand by it. When residents can no longer park outside their own homes, it is not a matter of distribution, it is too many people.'),
  L(1436),
  F("C'est une querelle de mots, non ?", 'It is a quibble over words, isn\'t it?'),
  F('Non, parce que le mot décide de la réponse. Si le problème est le nombre, on limite. Si c\'est la concentration, on étale.', 'No, because the word decides the answer. If the problem is the number, you limit. If it is the concentration, you spread out.'),
  F("Étaler, c'est joli. Mais en novembre, il pleut, et personne ne viendra voir le port sous la pluie.", 'Spreading out sounds nice. But in November it rains, and nobody will come to see the harbour in the rain.'),
  F("Vous êtes donc d'accord sur la saturation d'août, et pas sur son nom.", 'So you agree on the August saturation, and not on its name.'),
  F("Ni sur le remède qui en découle. C'est pour ça que le nom compte.", 'Nor on the remedy that follows from it. That is why the name matters.'),
], PORT_VOICES, 'PORT');

/** Act 5: « L'Heure partagée », the clock change. Host Jonas Leblanc; Dr
 *  Nadia Benhamou (sleep researcher), Pierre-Luc Sirois (town-centre
 *  shopkeepers' association). About 70 seconds. */
export const HEURE_VOICES = ['animateur', 'Nadia', 'animateur', 'Pierre-Luc', 'Nadia', 'Pierre-Luc', 'Pierre-Luc', 'Nadia', 'animateur', 'Pierre-Luc'];
export const HEURE_LINES: Line[] = voiced([
  F("Faut-il arrêter de changer d'heure deux fois par an ? Nadia Benhamou, vous étudiez le sommeil.", 'Should we stop changing the clocks twice a year? Nadia Benhamou, you study sleep.'),
  F("Il faut distinguer deux choses : la petite fatigue des jours qui suivent, que tout le monde connaît, et le décalage durable entre l'horloge et la lumière, qui est le vrai sujet.", 'Two things must be distinguished: the slight tiredness of the days that follow, which everyone knows, and the lasting mismatch between the clock and daylight, which is the real subject.'),
  F('Pierre-Luc Sirois, vous représentez les commerçants du centre-ville.', 'Pierre-Luc Sirois, you represent the town-centre shopkeepers.'),
  F("J'accorde la distinction, elle est juste. Mais les gens, eux, ne la font pas : ce qu'ils retiennent, c'est une heure de lumière en plus le soir pour faire leurs courses.", 'I grant the distinction, it is a fair one. But people do not make it: what they remember is an extra hour of daylight in the evening to do their shopping.'),
  F("Je vous suis sur la lumière du soir, je ne vous suis pas sur les courses : on ne règle pas une horloge pour un chiffre d'affaires.", 'I follow you on the evening light, I do not follow you on the shopping: you do not set a clock for the sake of turnover.'),
  L(1449),
  F("Mais une règle que personne ne comprend ne tiendra pas, même si elle est juste.", 'But a rule nobody understands will not last, even if it is right.'),
  F('Admettons. Alors expliquons-la, plutôt que d\'y renoncer.', 'Let us suppose so. Then let us explain it, rather than give it up.'),
  F("Si je vous entends bien, vous vous accordez sur la distinction et vous divergez sur le poids à donner à ce que les gens ressentent.", 'If I hear you correctly, you agree on the distinction and you differ on how much weight to give to what people feel.'),
  F('Voilà. Le point est accordé ; il ne règle pas la question.', 'That is it. The point is granted; it does not settle the question.'),
], HEURE_VOICES, 'HEURE');

/** Act 6: « La Table longue », does remote work kill creativity? Host Hugo
 *  Tremblay; Héloïse Marchand (work psychologist, author), Arnaud Petit
 *  (head of the design agency Tessère). About 65 seconds. */
export const TESSERE_VOICES = ['animateur', 'Héloïse', 'Héloïse', 'animateur', 'Arnaud', 'Héloïse', 'Arnaud', 'Héloïse', 'Arnaud', 'Héloïse'];
export const TESSERE_LINES: Line[] = voiced([
  F('Héloïse Marchand, dans votre dernier livre, vous soutenez que le télétravail tue la créativité.', 'Héloïse Marchand, in your latest book you argue that remote work kills creativity.'),
  F("Je soutiens quelque chose de plus étroit, et j'y tiens. Je ne dis pas qu'on crée moins chez soi ; je dis que les idées nouvelles naissent moins en visioconférence.", 'I am arguing for something narrower, and I insist on it. I am not saying people create less at home; I am saying new ideas are born less often on video calls.'),
  F("Seul devant son écran, on travaille très bien. Ce qui disparaît, c'est la remarque faite en passant, celle qu'on n'aurait jamais mise à l'ordre du jour.", 'Alone at your screen, you work very well. What disappears is the remark made in passing, the one you would never have put on the agenda.'),
  F("Arnaud Petit, vous dirigez l'agence de design Tessère, entièrement à distance depuis trois ans.", 'Arnaud Petit, you run the design agency Tessère, fully remote for three years.'),
  F("Et nous n'avons jamais eu autant d'idées. Donc la thèse est fausse.", 'And we have never had so many ideas. So the thesis is wrong.'),
  F("La thèse que vous réfutez est fausse, sans doute. Ce n'est pas la mienne. Combien de vos idées viennent d'une réunion en ligne ?", 'The thesis you are refuting is wrong, no doubt. It is not mine. How many of your ideas come from an online meeting?'),
  F("Très peu, je l'avoue. Elles viennent de nos deux journées sur place par trimestre.", 'Very few, I admit. They come from our two days on site each quarter.'),
  F('Voilà exactement ce que je soutiens.', 'That is exactly what I am arguing.'),
  F("Alors nous sommes d'accord sur plus de choses que le titre de votre livre ne le laisse croire.", 'Then we agree on more than the title of your book suggests.'),
  F("Le titre est de l'éditeur. Ne me faites pas dire ce que je n'ai pas dit.", "The title is the publisher's. Do not put words in my mouth."),
], TESSERE_VOICES, 'TESSERE');

/** Act 7: « L'Heure partagée », bringing back the deposit on glass bottles.
 *  Host Jonas Leblanc; Élodie Faucher (recycling engineer), Rémi
 *  Castonguay (corner-shop owner). About 75 seconds. */
export const CONSIGNE_VOICES = ['animateur', 'Élodie', 'animateur', 'Rémi', 'Élodie', 'Rémi', 'Élodie', 'Rémi', 'Élodie', 'animateur', 'Rémi'];
export const CONSIGNE_LINES: Line[] = voiced([
  F('La région veut rétablir la consigne sur les bouteilles en verre : vingt-cinq cents par bouteille, rendus au retour. Élodie Faucher, vous avez travaillé sur le projet.', 'The region wants to bring back the deposit on glass bottles: twenty-five cents a bottle, refunded on return. Élodie Faucher, you worked on the project.'),
  F("Une bouteille consignée est lavée et remplie à nouveau une vingtaine de fois. Recyclée, elle est fondue à chaque passage. Le calcul est vite fait.", 'A deposit bottle is washed and refilled about twenty times. Recycled, it is melted down every time. The sum is quickly done.'),
  F('Rémi Castonguay, vous tenez une épicerie de quartier. Votre objection ?', 'Rémi Castonguay, you run a corner shop. Your objection?'),
  F("Elle est simple : les gens ne rapporteront pas leurs bouteilles. Ils les jettent déjà dans le bac de recyclage, c'est plus commode.", 'It is simple: people will not bring their bottles back. They already throw them in the recycling bin, it is easier.'),
  F("L'objection porte, mais pas là où vous le pensez. Les gens ne rapportent pas une bouteille qui ne leur rapporte rien. À vingt-cinq cents, ils la rapportent.", 'The objection lands, but not where you think. People do not return a bottle that brings them nothing. At twenty-five cents, they return it.'),
  F("Admettons qu'ils la rapportent. Où est-ce que je stocke trois cents caisses dans une épicerie de soixante mètres carrés ?", 'Let us suppose they do bring it back. Where do I store three hundred crates in a sixty-square-metre shop?'),
  F("Là, vous avez raison, et c'est une vraie difficulté. C'est même pour cela que le projet prévoit des points de collecte hors des commerces.", 'There you are right, and it is a real difficulty. That is precisely why the project plans collection points outside the shops.'),
  F('Prévus où ? Personne ne nous l\'a dit.', 'Planned where? Nobody has told us.'),
  F("Cela ne contredit pas le principe ; cela dit que l'information n'est pas passée. Je le note.", 'That does not contradict the principle; it says the information has not got through. I will make a note of it.'),
  F("Donc l'incitation, vous l'acceptez, Rémi Castonguay, et c'est le stockage qui vous inquiète ?", 'So you accept the incentive, Rémi Castonguay, and it is the storage that worries you?'),
  F("C'est ça. Le principe, je ne le discute plus.", 'That is it. The principle I no longer dispute.'),
], CONSIGNE_VOICES, 'CONSIGNE');

/** Act 8: « L'Heure partagée », renovate the old schools or build new
 *  ones. Host Jonas Leblanc; Laurence Giroux (architect), Fabien Roy
 *  (finance officer of the school board). About 80 seconds. */
export const ECOLES_VOICES = ['animateur', 'Laurence', 'animateur', 'Fabien', 'Fabien', 'Laurence', 'Fabien', 'Laurence', 'animateur', 'Fabien', 'Laurence'];
export const ECOLES_LINES: Line[] = voiced([
  F('La commission scolaire doit choisir : rénover ses douze écoles anciennes, ou en démolir quatre pour en construire deux neuves. Laurence Giroux, vous êtes architecte.', 'The school board must choose: renovate its twelve old schools, or demolish four to build two new ones. Laurence Giroux, you are an architect.'),
  F("Démolir une école qui tient debout, c'est un peu comme jeter une voiture parce que les pneus sont usés. La structure est saine ; ce qui a vieilli, ce sont les fenêtres et le chauffage.", 'Demolishing a school that is still standing is a bit like throwing out a car because the tyres are worn. The structure is sound; what has aged is the windows and the heating.'),
  F('Fabien Roy, vous gérez les finances de la commission.', 'Fabien Roy, you manage the board\'s finances.'),
  F("La comparaison est jolie, mais une école n'est pas une voiture : on ne change pas l'isolation d'un bâtiment de mille neuf cent cinquante comme on change des pneus.", 'The comparison is pretty, but a school is not a car: you do not change the insulation of a 1950 building the way you change tyres.'),
  F("Rénover ces écoles une à une, c'est remplir le tonneau des Danaïdes : chaque année on répare, et chaque année il faut recommencer ailleurs.", 'Renovating these schools one by one is filling the jar of the Danaids: every year we repair, and every year we have to start again somewhere else.'),
  F("Le tonneau percé, je l'entends. Mais votre plan déshabille Pierre pour habiller Paul : deux écoles neuves, et quatre quartiers qui perdent la leur.", 'The leaking jar, I hear it. But your plan robs Peter to pay Paul: two new schools, and four neighbourhoods that lose theirs.'),
  F('Les élèves seront transportés.', 'The pupils will be bussed.'),
  F('En autobus, quarante minutes matin et soir. Pour les plus petits, le remède serait pire que le mal.', 'By bus, forty minutes morning and evening. For the youngest, the cure would be worse than the disease.'),
  F('Si je traduis : pour vous, les réparations ne finissent jamais ; et pour vous, le plan neuf vide les quartiers ?', 'If I translate: for you, the repairs never end; and for you, the new plan empties the neighbourhoods?'),
  F("C'est cela. Mais que l'arbre ne cache pas la forêt : sur vingt ans, le neuf coûte moins cher.", 'That is it. But let the tree not hide the forest: over twenty years, new buildings cost less.'),
  F('Sur vingt ans, si les chiffres tiennent. On en reparlera quand on les aura vus.', 'Over twenty years, if the figures hold. We will talk about it again once we have seen them.'),
], ECOLES_VOICES, 'ECOLES');

/** Act 9, exam format: green roofs, one play, 30 s to read three items.
 *  A moderator, Sylvie Ménard (urban planner), Karim Lahlou (structural
 *  engineer). About 100 seconds (284 words). */
export const TOITS_VOICES = ['modératrice', 'Sylvie', 'Karim', 'Sylvie', 'Sylvie', 'Karim', 'Karim', 'modératrice', 'Sylvie', 'Karim', 'Sylvie', 'Karim', 'Sylvie', 'modératrice'];
export const TOITS_LINES: Line[] = voiced([
  F('Faut-il rendre obligatoires les toits végétalisés sur les bâtiments neufs ? Sylvie Ménard, urbaniste, et Karim Lahlou, ingénieur en structure.', 'Should green roofs be made compulsory on new buildings? Sylvie Ménard, urban planner, and Karim Lahlou, structural engineer.'),
  F("Je commencerai par ce qui nous réunit : un toit végétalisé retient l'eau de pluie et rafraîchit le dernier étage. Personne ici ne le conteste.", 'I will begin with what brings us together: a green roof holds rainwater and cools the top floor. Nobody here disputes that.'),
  F("Personne, en effet. Mon désaccord est ailleurs : la règle vise tous les toits, y compris ceux qui ne peuvent pas porter une telle charge sans renfort.", 'Nobody, indeed. My disagreement lies elsewhere: the rule targets every roof, including those that cannot bear such a load without reinforcement.'),
  F('Les toits neufs se calculent dès le départ. On ne parle pas de renforcer de vieux immeubles.', 'New roofs are designed for it from the start. We are not talking about reinforcing old buildings.'),
  F("Un toit prévu pour cela dès le plan coûte un peu plus cher à construire, mais rien de comparable avec un renfort ajouté après coup.", 'A roof designed for it from the drawing board costs a little more to build, but nothing like a reinforcement added afterwards.'),
  F("Justement, le texte ne le dit pas. Il dit « tout bâtiment soumis à permis », et une surélévation est soumise à permis.", 'Precisely, the text does not say so. It says "any building requiring a permit", and an added storey requires a permit.'),
  F("Or, dans notre ville, près d'un permis sur deux concerne une surélévation : on ajoute un étage sur un immeuble des années soixante, et ce toit-là n'a jamais été prévu pour porter de la terre mouillée.", 'And in our city, nearly one permit in two concerns an added storey: a floor is added to a building from the sixties, and that roof was never designed to carry wet soil.'),
  F('Donc le désaccord porte sur la rédaction de la règle, pas sur son but ?', 'So the disagreement is about how the rule is worded, not about its aim?'),
  F('Sur la rédaction, je vous suis. Sur le principe d\'une obligation, je ne vous suis pas : sans obligation, personne ne le fait.', 'On the wording, I follow you. On the principle of an obligation, I do not: without an obligation, nobody does it.'),
  F("On m'objectera que les aides n'ont pas marché. C'est vrai, parce qu'elles étaient trop faibles. Doublez-les avant d'obliger.", 'People will object that the subsidies did not work. True, because they were too small. Double them before you compel.'),
  F("Doubler une aide que personne ne demande, ce serait un coup d'épée dans l'eau.", 'Doubling a subsidy that nobody applies for would be a wasted effort.'),
  F('Alors écrivons une obligation qui exclut les surélévations, et je la signe.', 'Then let us write an obligation that excludes added storeys, and I will sign it.'),
  F("Je la signe aussi. Mais alors, pas d'aides doublées : cet argent ira plutôt aux toits des écoles.", 'I will sign it too. But then, no doubled subsidies: that money will go to the school roofs instead.'),
  F("Un désaccord qui se termine par une signature commune, c'est assez rare pour être noté. Merci à tous les deux.", 'A disagreement that ends with a joint signature is rare enough to be noted. Thank you both.'),
], TOITS_VOICES, 'TOITS');

/** Act 9, a second once-only extract: cooking classes at school. Two
 *  items. A moderator, Manon Fortier (dietitian), Julien Ayotte (maths
 *  teacher). About 40 seconds. */
export const CUISINE_VOICES = ['modérateur', 'Manon', 'Julien', 'Manon', 'Julien', 'Manon'];
export const CUISINE_LINES: Line[] = voiced([
  F('Des cours de cuisine obligatoires au collège : bonne idée ? Manon Fortier, diététicienne, et Julien Ayotte, professeur de mathématiques.', 'Compulsory cooking classes in secondary school: a good idea? Manon Fortier, dietitian, and Julien Ayotte, maths teacher.'),
  F("Je ne soutiens pas que l'école doit apprendre à cuisiner. Je soutiens quelque chose de plus étroit : qu'un élève sache lire une étiquette et préparer trois repas simples.", 'I am not arguing that school must teach cooking. I am arguing for something narrower: that a pupil can read a label and prepare three simple meals.'),
  F("Trois repas, j'accorde que c'est modeste. Mais chaque heure ajoutée est prise à une autre matière.", 'Three meals, I grant that it is modest. But every hour added is taken from another subject.'),
  F('Pas forcément : on peut lire une étiquette en cours de mathématiques. Les pourcentages sont dessus.', 'Not necessarily: you can read a label in a maths lesson. The percentages are on it.'),
  F("Vous prêchez un converti : c'est exactement ce que je fais déjà avec mes élèves.", 'You are preaching to the converted: that is exactly what I already do with my pupils.'),
  F('Alors nous ne sommes pas si loin.', 'Then we are not so far apart.'),
], CUISINE_VOICES, 'CUISINE');

/** Act 10, exam format, document A: ancient languages at the lycée. A
 *  moderator, Bérénice Aubry (Latin teacher), Gilles Morin (head teacher).
 *  About 90 seconds (249 words). Two items. */
export const LATIN_VOICES = ['modérateur', 'Bérénice', 'Gilles', 'Bérénice', 'Bérénice', 'Gilles', 'modérateur', 'Bérénice', 'Gilles', 'Bérénice', 'Gilles', 'modérateur', 'Bérénice'];
export const LATIN_LINES: Line[] = voiced([
  F('Le latin et le grec doivent-ils rester proposés dans tous les lycées ? Bérénice Aubry enseigne le latin, Gilles Morin dirige un lycée.', 'Should Latin and Greek remain on offer in every lycée? Bérénice Aubry teaches Latin, Gilles Morin heads a lycée.'),
  F("On défend souvent le latin parce qu'il aiderait à l'orthographe. L'argument me gêne : si c'est l'orthographe qu'on vise, une heure de français de plus ferait mieux et coûterait moins.", 'Latin is often defended because it supposedly helps spelling. The argument bothers me: if spelling is the aim, an extra hour of French would do better and cost less.'),
  F('Vous sciez la branche sur laquelle vous êtes assise.', 'You are sawing off the branch you are sitting on.'),
  F("Pas du tout. Je retire l'argument de l'orthographe parce qu'il est mauvais, pas le latin. Le latin vaut pour lui-même : lire un texte vieux de deux mille ans dans sa langue.", 'Not at all. I withdraw the spelling argument because it is a bad one, not Latin. Latin is worth it for itself: reading a two-thousand-year-old text in its own language.'),
  F("Et ce plaisir-là ne se remplace pas par une heure de français. C'est un autre objet, pas un moyen détourné d'apprendre l'orthographe.", 'And that pleasure cannot be replaced by an hour of French. It is a different object, not a roundabout way of learning to spell.'),
  F("Je vous l'accorde, et je l'ai fait moi-même avec bonheur. Mais dans mon lycée, ils sont quatre élèves. Je ne peux pas ouvrir une classe pour quatre.", 'I grant you that, and I did it myself with pleasure. But in my lycée there are four pupils. I cannot open a class for four.'),
  F("Bérénice Aubry, quatre élèves : l'argument est difficile à contourner.", 'Bérénice Aubry, four pupils: that argument is hard to get round.'),
  F('Alors regroupez trois lycées, et vous aurez douze élèves.', 'Then group three lycées together, and you will have twelve pupils.'),
  F("Douze élèves, trois emplois du temps à accorder, et une heure de transport. Ce n'est pas impossible, c'est coûteux.", 'Twelve pupils, three timetables to match, and an hour of travel. It is not impossible, it is costly.'),
  F('Tout ce qui vaut quelque chose coûte quelque chose.', 'Everything worth something costs something.'),
  F("Je ne dis pas le contraire. Je dis seulement que ce coût, mon lycée ne peut pas le porter seul.", 'I am not saying otherwise. I am only saying that my lycée cannot bear that cost alone.'),
  F("Vous vous accordez donc sur la valeur du latin, et vous divergez sur qui doit en payer le prix ?", 'So you agree on the value of Latin, and you differ on who should pay the price?'),
  F("Sur qui le paie, oui. Et je propose que ce soit la région, pas chaque lycée seul : un enseignement rare se finance comme un enseignement rare.", 'On who pays, yes. And I propose it should be the region, not each lycée alone: a rare subject is funded as a rare subject.'),
], LATIN_VOICES, 'LATIN');

/** Act 10, exam format, document B: a nap room at the office. A moderator,
 *  Dr Annie Paquette (occupational physician), Lucas Bérubé (company
 *  head). About 85 seconds (226 words). Two items. */
export const SIESTE_VOICES = ['modératrice', 'Annie', 'Annie', 'Lucas', 'Lucas', 'modératrice', 'Annie', 'Lucas', 'Annie', 'Lucas', 'Annie', 'Lucas'];
export const SIESTE_LINES: Line[] = voiced([
  F('Une salle de sieste au bureau : gadget ou progrès ? Annie Paquette est médecin du travail, Lucas Bérubé dirige une entreprise de quarante salariés.', 'A nap room at the office: gimmick or progress? Annie Paquette is an occupational physician, Lucas Bérubé runs a company of forty employees.'),
  F('Vingt minutes de sieste en début d\'après-midi améliorent la vigilance : sur ce point, la plupart des études vont dans le même sens.', 'Twenty minutes of napping in the early afternoon improves alertness: on that point, most studies point the same way.'),
  F('Et pas seulement chez les soignants de nuit : chez tous ceux qui commencent tôt ou finissent tard.', 'And not only among night-shift carers: among everyone who starts early or finishes late.'),
  F("Je ne conteste pas les études. Je conteste l'idée qu'une salle suffise : chez nous, la salle existe, et personne n'y va.", 'I do not dispute the studies. I dispute the idea that a room is enough: at our company the room exists, and nobody goes.'),
  F("Nous l'avons ouverte il y a un an, avec un fauteuil, une lampe douce et un rideau. Elle sert aujourd'hui de réserve à cartons.", 'We opened it a year ago, with an armchair, a soft lamp and a curtain. Today it is used as a storeroom for boxes.'),
  F('Annie Paquette, une salle vide, ce n\'est pas un argument contre vous ?', 'Annie Paquette, an empty room, isn\'t that an argument against you?'),
  F("Personne n'y va parce que personne n'ose y aller. Tant que la direction n'y dort pas, la salle restera vide.", 'Nobody goes because nobody dares to. As long as management does not sleep there, the room will stay empty.'),
  F('Vous me demandez de faire la sieste devant mes équipes ?', 'You are asking me to take a nap in front of my teams?'),
  F("Je vous demande de montrer que c'est permis. Une règle qu'on n'ose pas utiliser n'est pas une règle.", 'I am asking you to show that it is allowed. A rule people dare not use is not a rule.'),
  F("Montrer que c'est permis, d'accord. Mais si j'y vais, on dira que le patron dort pendant que les autres travaillent.", 'Show that it is allowed, fine. But if I go, people will say the boss sleeps while the others work.'),
  F("Alors allez-y à l'heure du déjeuner, et dites-le. Ce n'est pas la sieste qu'il faut rendre visible, c'est la permission.", 'Then go at lunchtime, and say so. It is not the nap that needs to be visible, it is the permission.'),
  F("Ça, je peux le faire. Mais je le ferai le lundi, quand toute l'équipe est là.", 'That I can do. But I will do it on Monday, when the whole team is in.'),
], SIESTE_VOICES, 'SIESTE');

/** Act 11, TEF Canada section F format: a reportage in Vernay, heard once,
 *  one main-idea item. A narrator, Mme Delorme (a resident), Marc Fayolle
 *  (a garage owner). About 110 seconds (302 words). */
export const VERNAY_VOICES = ['narratrice', 'narratrice', 'narratrice', 'Mme Delorme', 'Mme Delorme', 'narratrice', 'Marc', 'Marc', 'narratrice', 'narratrice', 'Mme Delorme', 'narratrice', 'Marc', 'narratrice'];
export const VERNAY_LINES: Line[] = voiced([
  F("Vernay, deux mille quatre cents habitants. Depuis deux ans, entre minuit et cinq heures du matin, l'éclairage public s'éteint dans toutes les rues, sauf la grand-rue.", 'Vernay, two thousand four hundred residents. For two years, between midnight and five in the morning, the street lights have gone off in every street except the high street.'),
  F("Au départ, une seule raison : la facture d'électricité de la commune, qui avait doublé en un hiver.", "At the start, one reason only: the town's electricity bill, which had doubled in a single winter."),
  F('La mesure a été votée en une soirée, sans grand débat, et elle a provoqué dès le premier mois une pétition de deux cents signatures.', 'The measure was voted through in one evening, without much debate, and within the first month it prompted a petition with two hundred signatures.'),
  F("J'étais contre. J'ai signé la pétition. Je me disais : on va se faire cambrioler, on va tomber dans le noir.", 'I was against it. I signed the petition. I thought: we will be burgled, we will fall over in the dark.'),
  F('Et puis, au bout de trois mois, je me suis rendu compte que je ne sortais jamais entre minuit et cinq heures.', 'And then, after three months, I realised that I never went out between midnight and five.'),
  F("Les cambriolages, justement : sur deux ans, les gendarmes n'en ont pas compté davantage.", 'Burglaries, precisely: over two years, the police have not counted any more of them.'),
  F("Le chiffre, je le connais. Mais ce qui a changé pour moi, ce n'est pas la facture, c'est le ciel. Mon fils de dix ans a vu la Voie lactée pour la première fois, depuis le jardin.", 'I know the figure. But what changed for me is not the bill, it is the sky. My ten-year-old son saw the Milky Way for the first time, from the garden.'),
  F("Des gens viennent maintenant de la ville voisine, le samedi soir, avec des jumelles. Pour mon garage, ce ne sont pas des clients ; pour le café d'en face, si.", 'People now come from the next town on Saturday nights, with binoculars. For my garage they are not customers; for the café opposite, they are.'),
  F("La commune a économisé environ quarante pour cent sur l'éclairage, une somme qui a servi à refaire le toit de l'école.", 'The town saved about forty per cent on lighting, a sum that went towards redoing the school roof.'),
  F('Mais quand le prix de l\'électricité est redescendu, le conseil municipal a posé la question : faut-il rallumer ?', 'But when the price of electricity came back down, the town council asked the question: should the lights go back on?'),
  F("On nous a demandé notre avis. Je n'aurais jamais cru dire ça, mais j'ai voté pour laisser éteint.", 'They asked for our opinion. I never thought I would say it, but I voted to leave the lights off.'),
  F("Soixante-dix pour cent des votants ont choisi de garder la nuit noire. Parmi les raisons citées, l'économie n'arrive qu'en troisième position, après le ciel étoilé et le sommeil.", 'Seventy per cent of voters chose to keep the night dark. Among the reasons given, saving money comes only third, after the starry sky and sleep.'),
  L(1530),
  F('Une mesure d\'économie, devenue, sans que personne l\'ait prévu, un choix de mode de vie.', 'A cost-cutting measure that became, without anyone foreseeing it, a lifestyle choice.'),
], VERNAY_VOICES, 'VERNAY');

/** Act 12, THE TASK DEBATE: « Le Débat du jeudi », Radio Lisière, about two
 *  and a half minutes. Host Romain Gagné; Isabelle Nadeau (head of human
 *  resources, Ville de Val-Brume), Thomas Lefebvre (employment lawyer),
 *  Aïcha Diallo (staff representative). */
export const DEBAT_LINES: Line[] = [
  F("Bonsoir, et bienvenue au Débat du jeudi. La Ville de Val-Brume veut interdire les courriels professionnels entre dix-neuf heures et sept heures pour ses huit cents employés. Isabelle Nadeau, vous dirigez les ressources humaines de la Ville. Pourquoi cette règle ?", 'Good evening, and welcome to Le Débat du jeudi. The City of Val-Brume wants to ban work e-mails between 7 p.m. and 7 a.m. for its eight hundred employees. Isabelle Nadeau, you head the City\'s human resources. Why this rule?'),
  F("Parce que nos enquêtes internes montrent qu'un employé sur trois lit ses courriels après vingt-deux heures, et que c'est chez ces employés-là que les arrêts maladie ont le plus augmenté.", 'Because our internal surveys show that one employee in three reads their e-mail after 10 p.m., and that sick leave has risen most among those employees.'),
  F('Thomas Lefebvre, vous êtes juriste en droit du travail.', 'Thomas Lefebvre, you are an employment lawyer.'),
  F("Je pars du même constat qu'Isabelle Nadeau : la surcharge du soir est réelle, et elle use. Sur ce point, aucun désaccord.", 'I start from the same finding as Isabelle Nadeau: evening overload is real, and it wears people down. On that point, no disagreement.'),
  F("Ce qui me gêne, c'est le mot. On parle d'un droit à la déconnexion. Un droit, on peut l'exercer ou non. Ici, on interdit. Ce n'est pas un droit, c'est une interdiction.", 'What bothers me is the word. People speak of a right to disconnect. A right is something you may exercise or not. Here, something is banned. It is not a right, it is a ban.'),
  F('Appelez-la comme vous voudrez. Ce qui compte, c\'est que les gens se reposent.', 'Call it what you like. What matters is that people rest.'),
  F("Le nom compte, justement. Un droit protège celui qui veut décrocher ; une interdiction punit aussi celle qui préfère travailler le soir pour partir plus tôt l'après-midi.", 'The name matters, precisely. A right protects the person who wants to switch off; a ban also punishes the person who prefers to work in the evening so as to leave earlier in the afternoon.'),
  F('Aïcha Diallo, vous représentez le personnel. Vous êtes du côté de la règle ?', 'Aïcha Diallo, you represent the staff. Are you on the side of the rule?'),
  F("J'accorde la distinction, elle est juste. Mais je ne défends ni le droit ni l'interdiction en général. Je soutiens quelque chose de plus étroit : que personne ne puisse être sanctionné pour ne pas avoir répondu le soir.", 'I grant the distinction, it is a fair one. But I am defending neither the right nor the ban in general. I am arguing for something narrower: that nobody can be penalised for not answering in the evening.'),
  F('Là, je vous suis entièrement.', 'There, I follow you completely.'),
  F("On m'objectera que les cadres continueront d'écrire le soir et que la règle restera lettre morte.", 'People will object that managers will go on writing in the evening and that the rule will remain a dead letter.'),
  F("À cela, je réponds que le serveur de la Ville retiendra les messages jusqu'à sept heures. On peut écrire ; le message part le lendemain matin.", "To that I reply that the City's server will hold messages until 7 a.m. You can write; the message goes out the next morning."),
  F("Ça, c'est une bonne idée. Ça protège sans interdire.", 'Now that is a good idea. It protects without banning.'),
  F('Et ça répond à mon objection : celle qui veut travailler le soir peut le faire, sans réveiller personne.', 'And it answers my objection: the person who wants to work in the evening can do so, without waking anyone.'),
  F("Donc, si je vous entends bien : vous partez du même constat, vous vous êtes opposés sur le mot, et ce serveur qui retient les messages vous met presque d'accord ?", 'So, if I hear you correctly: you start from the same finding, you clashed over the word, and this server that holds back messages almost brings you into agreement?'),
  F("Presque. Une règle sur le serveur, sans protection contre les sanctions, c'est fermer la porte et laisser la fenêtre ouverte : on passera par le téléphone.", 'Almost. A rule on the server, without protection against penalties, is closing the door and leaving the window open: people will use the phone.'),
  F('Alors écrivons les deux dans le même texte.', 'Then let us write both into the same text.'),
  F('Voilà au moins un point de départ. Merci à tous les trois.', 'There at least is a starting point. Thank you all three.'),
];
export const DEBAT_VOICES = [
  "L'ANIMATEUR", 'ISABELLE NADEAU', "L'ANIMATEUR", 'THOMAS LEFEBVRE', 'THOMAS LEFEBVRE', 'ISABELLE NADEAU',
  'THOMAS LEFEBVRE', "L'ANIMATEUR", 'AÏCHA DIALLO', 'THOMAS LEFEBVRE', 'ISABELLE NADEAU', 'ISABELLE NADEAU',
  'AÏCHA DIALLO', 'THOMAS LEFEBVRE', "L'ANIMATEUR", 'AÏCHA DIALLO', 'ISABELLE NADEAU', "L'ANIMATEUR",
];
if (DEBAT_VOICES.length !== DEBAT_LINES.length) throw new Error('c1.21: DEBAT_VOICES out of step with DEBAT_LINES');

/** The debate as a labelled transcript, for the task brief (TaskView has no
 *  source field and no player; see the lesson header, open questions). */
export const DEBAT_TRANSCRIPT = DEBAT_LINES.map((l, i) => `${DEBAT_VOICES[i]} : ${l.fr}`).join(' ');

/** What an account of the debate must hold. The rubric, the model answer
 *  and the grader notes are written against this. */
export const DEBAT_KEY = {
  accord: 'les trois invités partent du même constat : la surcharge du soir est réelle et elle use (un employé sur trois lit ses courriels après 22 h ; les arrêts maladie ont le plus augmenté chez eux)',
  mot: 'Thomas Lefebvre conteste le MOT : un « droit à la déconnexion » qui interdit n’est pas un droit mais une interdiction ; le nom compte, car une interdiction punit aussi celle qui préfère travailler le soir',
  concession: 'Aïcha Diallo accorde la distinction, puis resserre sa thèse : elle ne défend ni le droit ni l’interdiction en général, seulement que personne ne soit sanctionné pour ne pas avoir répondu le soir ; Thomas Lefebvre la suit entièrement',
  objection: 'Isabelle Nadeau anticipe l’objection (« la règle restera lettre morte », les cadres écriront quand même) et y répond par le serveur qui retient les messages jusqu’à 7 h ; cette réponse règle aussi l’objection de Thomas Lefebvre',
  fin: 'presque d’accord ; Aïcha Diallo : la règle du serveur sans protection contre les sanctions, c’est « fermer la porte et laisser la fenêtre ouverte » (le téléphone) ; Isabelle Nadeau propose d’écrire les deux dans le même texte',
} as const;
