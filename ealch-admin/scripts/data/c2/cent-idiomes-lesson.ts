// c2.03.l1 « Cent expressions idiomatiques avancées » — the lesson. DRAFT,
// the third lesson of the C2 band, the V (vocab) shape per C2-BUILD-PLAN.md.
// To B1-WORKSHOP-AND-VOCAB-SHAPES.md §2 on top of B1-BUILD-PLAYBOOK.md, with
// the C2 rules of C2-BUILD-PLAN.md and the c2.03 brief in C2-BUILD-LOG.md.
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself (`lessonWithoutTask()` returns it unchanged).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE VOCAB SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   TEN FAMILIES, BY DOMAIN, each its own act (2-11), each the same six-beat
//   loop: MEET (reading/story/listening, rotated), NAME (a cardDeck of 5,
//   then a tapTable of 5 — the act's ten idioms split across two renders),
//   BUILD (a gated groupDrill classifying meaning across both halves), TRAP
//   (a stepped trapDrill on acts 2/4/6/8/10, a groupDrill of confusable
//   near-idiom pairs on acts 3/5/7/9/11 — the mechanic itself rotates), CHECK
//   (the gated act check). Act 1 sets the problem; act 12 is the task.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (family · missions · idioms)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le registre de l’image        5   the problem: a correct b1/b2
//                                          idiom at the wrong register
//    2  Le pouvoir et l’autorité       6   10 idioms, trapDrill
//    3  La ruse et la rhétorique       6   10 idioms, groupDrill-trap
//    4  Le jugement et la mesure       6   10 idioms, trapDrill
//    5  L’excès et la démesure         6   10 idioms, groupDrill-trap
//    6  La réputation et la disgrâce   6   10 idioms, trapDrill
//    7  Le destin et l’inéluctable     6   10 idioms, groupDrill-trap
//    8  Le temps, la mémoire, l’oubli  6   10 idioms, trapDrill
//    9  La parole soutenue             6   10 idioms, groupDrill-trap
//   10  L’ambition et l’échec          6   10 idioms, trapDrill
//   11  La solitude et le repli        6   10 idioms, groupDrill-trap
//   12  Ton portrait                  11   model, plan, scenario, TASK,
//                                          practice, quiz, review, roundup
//
//   TOTAL 76 missions, 12 acts. 100 idioms taught (10 families x 10, each as
//   a full sentence, never a bare word). Corpus: 139 authored rows
//   (.1800-.1979, inside the claimed .1800-.1999 block, .1980-.1999 left
//   free). Quiz: 10 rounds of 8 (one per family act). Ten error triggers,
//   ten drills, five reference sheets, six terms. Chapter artwork:
//   `c2-idiomes-image-prompts.md`, 12 prompts.
//
//   DEVIATION FLAGGED FOR PAUL (also in C2-RESEARCH-PLAN.md's own risk
//   note): ten idioms per family act exceeds B1-WORKSHOP-AND-VOCAB-SHAPES.md
//   §2.2's "no idiom list longer than 8 per act" ceiling, written for B1's
//   idiom lessons. The brief's own "100 items" scope and "8-12 families"
//   shape only divide evenly at 8-10 per family; splitting the NAME beat
//   across a cardDeck of 5 and a tapTable of 5 keeps any SINGLE section
//   inside the old 8-card ceiling, but the family as a whole still teaches
//   ten. Keep 10/family (as built), or cut to 8 and carry the other 20 into
//   an extra act (13 total)?
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Une expression porte un registre autant qu’une image : choisis celle
//   qui tient dans ta phrase, pas la plus belle. »
//
//   ONE METAPHOR, THE PICTURE AND THE REGISTER (built past b1.27's "the
//   picture comes from the body, the meaning from the whole phrase"): a C2
//   learner already reads the picture; the new skill is reading whether the
//   idiom's REGISTER fits the text it is about to sit in.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    100 idioms in ten domains (pouvoir, ruse, jugement, excès,
//           réputation, destin, temps, parole, ambition, solitude), each
//           used in a full sentence, each marked soutenu register, each
//           drilled against a plausible near-miss that does not exist or
//           sits at the wrong register.
//   QUOTES  b1.27/b1.28/b1.29's reframes (act 1), b2.34's reframe (act 1 and
//           the sheets), c1.17's reframe (act 1), each imported from its own
//           corpus file, never retyped.
//   LEAVES  the body, the animals and the food, the colours, and the
//           proverbs/La Fontaine to b1.27/b1.28/b1.29/b2.34, never
//           re-taught, never re-used by example; connotation and register as
//           a general single-word method to c1.17.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use vous where the situation calls for
//   it. French only on the learner surface; English authored on every `en`
//   field and every trailing « EN: », never shown by default. No em dash, no
//   U+203F tie, never "honnête"/"honest". Typographic ’ throughout. No
//   spaced « ? » or « ! » in a scene or story bubble. Citations by trail
//   position in French words (« la leçon 27 du B1 »), never a raw id.
//   Mission answer slots are spread by `balanceSlots()`; the quiz is left
//   with its authored slots scattered by hand.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. The 10-per-family deviation above (also C2-RESEARCH-PLAN.md's own
//      flagged risk) — confirm 10/family stands, or split to 13 acts at 8.
//   2. IPA on the trapDrill cards (acts 2, 4, 6, 8, 10 — 30 sentences) is
//      hand-written for this draft, at the same informal precision every
//      other B1+/C1/C2 lesson uses, not run through a phonemic checker.
//      Flag for the pre-review pass, as every lesson's IPA is.
//   3. No row is reused from b1.27/b1.28/b1.29/b2.34/c1.17 by id (corpus,
//      same rule c2.01 followed): this draft opened no Postgres session, so
//      a cross-lesson id could not be verified against the real published
//      rows. Reuse specific rows once the pre-review pass has Postgres
//      access, or keep every example freshly authored as this draft does?
//   4. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap, ALL_ROWS, ROWS_BY_ACT,
  IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor, PORTRAIT_BERTHIER, PORTRAIT_BERTHIER_EN,
  B127_REF, B128_REF, B129_REF, B234_REF, C117_REF,
  B127_REFRAME, B127_REFRAME_EN, B128_REFRAME, B128_REFRAME_EN, B129_REFRAME, B129_REFRAME_EN,
  B234_REFRAME, B234_REFRAME_EN, C117_REFRAME, C117_REFRAME_EN,
} from './cent-idiomes-corpus.ts';
import { CENT_IDIOMES_TERMS } from './cent-idiomes-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };
type TrapCard = NonNullable<Sec<'trapDrill'>['cards']>[number];
type TrapStep = NonNullable<Sec<'trapDrill'>['steps']>[number];

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string };
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as unknown as SrcItem]));

/** An item’s fr/en. Throws on a typo, so no section can name an id that
 *  does not exist in this lesson’s own corpus. */
function src(id: string): SrcItem {
  const r = ROW.get(id);
  if (!r) throw new Error(`c2.03: no item ${id}`);
  return r;
}

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
const free = (fr: string, en: string, note?: string): GItem => ({ fr, en, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
const uc = (situation: string, id: string) => ({ situation, fr: src(id).fr, en: src(id).en });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** One idiom card for the NAME beat: head = the domain cue, label = a short
 *  gloss, fr = the authored sentence (the idiom used, never isolated),
 *  body = the meaning plus the English. No respell authored (optional in
 *  the schema; this draft follows c2.01's precedent of skipping it where
 *  the row is a full sentence, not a bare headword). */
type Card = NonNullable<Sec<'cardDeck'>['cards']>[number];
const card = (id: string, head: string, label: string, body: string): Card =>
  ({ head, label, fr: src(id).fr, body });

/** A tapTable row for the NAME beat’s second half: no IPA/respell required
 *  by the schema for a tapTable row (`say` is TTS-read directly). */
const tapRow = (cells: string[], id: string, title: string, body: string): NonNullable<Sec<'tapTable'>['rows']>[number] =>
  ({ cells, say: src(id).fr, detail: { title, body, say: src(id).fr } });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** A trapDrill card: `fr`/`ipa` are the CORRECT, authored sentence;
 *  `promptSound` is the plausible near-miss, inline, never backed by a row
 *  (it must never be quizzable as if it were correct French). */
const trap = (id: string, ipa: string, promptLabel: string, promptSound: string, tip: string): TrapCard =>
  ({ promptLabel, promptSound, fr: src(id).fr, ipa, tip });

const STEPS_STD = (cardsTitle: string): TrapStep[] => [
  { label: 'La règle', kind: 'rule', title: 'La règle' },
  { label: 'Six cartes', kind: 'cards', title: cardsTitle },
  { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
  { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE REGISTRE DE L’IMAGE
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Un portrait, deux registres', frSub: 'La rédaction du Courrier des Lettres',
  setting: { place: 'La rédaction du Courrier des Lettres', city: 'Montréal', time: '16 h', ambience: 'un bureau encombré de dossiers, une tasse de café froid, un article à boucler' },
  beats: [
    { kind: 'narration', text: "Montréal, en fin d’après-midi. Inès relit le brouillon que Julien vient de lui envoyer : un portrait du juge Antoine Berthier, à peine sorti d’un scandale.", size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Julien', fr: "Alors, mon portrait de Berthier, ça te plaît.", en: 'So, my portrait of Berthier, do you like it.', respell: '[a-lor mohⁿ por-TRAY duh ber-tee-AY sa tuh play]', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Inès', fr: "Le fond est bon. Mais relis ta deuxième phrase.", en: 'The substance is good. But reread your second sentence.', respell: '[luh fohⁿ eh bohⁿ meh ruh-LEE ta duh-zyem fraz]', stage: 'Elle pointe un passage sur son écran.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Le brouillon de Julien décrit le scandale de Berthier. Lequel des deux passages tient dans un portrait soigné.', size: 'lg',
      options: [
        { fr: src(E(1800)).fr, en: src(E(1800)).en, outcome: 'breaks', audio: AUDIO },
        { fr: src(E(1801)).fr, en: src(E(1801)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Inès approuve : « Voilà. Même fait, le bon registre. »",
        breaks: "Inès secoue la tête : « Correct, mais trop familier pour ce portrait. Ce n’est pas une faute de grammaire, c’est une faute de registre. »",
      },
    },
    {
      kind: 'break', heading: 'Une expression peut être juste et ratée',
      body: `${src(E(1802)).fr} EN: ${src(E(1802)).en}`,
      wrong: { fr: src(E(1800)).fr, ipa: '/lə ʒyʒ a mi le pje dɑ̃ lə pla də.vɑ̃ le ʒuʁ.na.list/', en: src(E(1800)).en },
      right: { fr: src(E(1801)).fr, ipa: '/lə ʒyʒ sɛ ku.vɛʁ də ʁi.di.kyl də.vɑ̃ le ʒuʁ.na.list/', en: src(E(1801)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: "Julien corrige sa phrase. Cette leçon t’apprend cent expressions de ce registre soutenu, rangées en dix familles, chacune avec son image et son piège.", size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['image', 'registreFige'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Reconnaître cent expressions avancées', s: 'Dix familles, dix idiomes chacune, toutes au registre soutenu' },
    { t: 'Choisir la bonne, pas la plus belle', s: 'Le pouvoir, la ruse, le jugement, l’excès, la réputation' },
    { t: 'Repérer l’expression qui n’existe pas', s: 'Le destin, le temps, la parole, l’ambition, la solitude' },
    { t: 'Écrire un texte qui en porte plusieurs', s: 'Acte 12 : un portrait, une expression par idée' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_ACQUIS: Sec<'examples'> = {
  type: 'examples', id: 'a1-acquis', layer: 'core',
  title: 'Ce que tu sais déjà',
  examples: [
    { fr: B127_REFRAME, en: B127_REFRAME_EN, note: `${Cap(B127_REF)} : les expressions du corps` },
    { fr: B128_REFRAME, en: B128_REFRAME_EN, note: `${Cap(B128_REF)} : les animaux et la nourriture` },
    { fr: B129_REFRAME, en: B129_REFRAME_EN, note: `${Cap(B129_REF)} : les couleurs` },
    { fr: B234_REFRAME, en: B234_REFRAME_EN, note: `${Cap(B234_REF)} : les proverbes et les expressions figées` },
    { fr: C117_REFRAME, en: C117_REFRAME_EN, note: `${Cap(C117_REF)} : la connotation et le registre, pour un mot` },
  ],
  audio: AUDIO, say: REFRAME, terms: ['image', 'motsFixes'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où le registre compte vraiment',
  cases: [
    uc('Un portrait publié dans un magazine', E(1801)),
    uc('Un éditorial qui juge un projet public', E(1847)),
    uc('Un discours de remerciement officiel', E(1920)),
    uc('Une biographie qui raconte toute une carrière', E(1902)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['registreFige'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le registre, pas la grammaire', '« Il a mis les pieds dans le plat » et « il s’est couvert de ridicule » disent...', ['deux faits différents', 'le même fait, à deux registres différents'], 1,
    'Le fait est identique ; seul le registre change. EN: the fact is identical; only the register changes.'),
  ctl('Ce que cette leçon ajoute', 'Après le corps, les animaux, les couleurs et les proverbes, cette leçon enseigne...', ['les mêmes images, au même registre', 'cent images nouvelles, au registre soutenu ou littéraire'], 1,
    'Dix familles neuves, jamais une image déjà publiée. EN: ten new families, never an already-published image.'),
  ctl('La mission de cette leçon', 'Cette leçon t’apprend à...', ['choisir l’expression dont l’image ET le registre tiennent', 'traduire mot à mot depuis l’anglais', 'éviter toute expression imagée'], 0,
    'L’image seule ne suffit pas : le registre doit tenir aussi. EN: the picture alone is not enough; the register has to hold too.'),
], ['registreFige']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le registre de l’image',
    opener: {
      line: "Julien choisit une expression correcte, et pourtant ratée : ici tu apprends pourquoi le registre compte autant que l’image. EN: Julien picks a correct idiom, and still the wrong one: here you learn why register matters as much as the picture.",
      imageRef: 'lessons/c2-03-cent-idiomes/act01.jpg',
    },
    sections: [],
    milestone: 'Tu distingues une expression juste d’une expression juste mais mal réglée pour son texte. EN: You can tell a correct idiom from one that is correct but mis-tuned for its text.',
    estScreens: 20, restPoints: ['a1-usages'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_ACQUIS, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LE POUVOIR ET L’AUTORITÉ
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a2-lecture', layer: 'core', questionsInModal: true,
  title: 'Le juge Berthier', frSub: 'Dix ans à la tête du tribunal civil',
  text: "Au tribunal civil, le juge Antoine Berthier tenait les rênes depuis dix ans. On disait qu’il avait la haute main sur tout le dossier des successions, et qu’il régnait sans partage sur son administration. Quand un confrère a contesté une décision, Berthier n’a pas rendu les armes : il a préféré faire acte d’autorité devant la chambre entière. Le barreau, qui a barre sur une partie des nominations, s’est posé en arbitre, sans trancher. Cette année-là, personne n’a réussi à le mettre genou à terre, et il n’a jamais eu à baisser pavillon.",
  glossary: [
    { word: 'le barreau', en: 'the bar association', note: 'L’ensemble des avocats d’une ville ou d’un pays. EN: the body of lawyers of a city or country.' },
  ],
  questions: [
    { q: "Devine le sens, sans dictionnaire : « il avait la haute main sur tout le dossier ». Que dit cette expression sur son rôle.", a: 'Qu’il avait l’autorité complète sur ce dossier, la seule décision possible venant de lui.' },
    { q: "Pourquoi Berthier choisit-il de « faire acte d’autorité » plutôt que de céder tout de suite.", a: 'Parce qu’il veut montrer, devant la chambre entière, qu’il garde le contrôle de la situation.' },
    { q: "Le barreau « se pose en arbitre, sans trancher ». Qu’est-ce que cela signifie.", a: 'Qu’il prend un rôle de juge impartial, mais sans aller jusqu’à rendre une vraie décision.' },
  ],
  audio: REC('rec-c2-03-berthier-renes'), say: REFRAME, terms: ['image'],
};

const A2_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-pouvoir-ruse',
  title: 'Commander, céder, dominer', frSub: 'Cinq expressions du pouvoir',
  hint: 'Cinq cartes. Qui commande, qui cède, qui domine.',
  audio: REC('rec-c2-03-pouvoir-cinq'), say: REFRAME, terms: ['registreFige'],
  cards: [
    card(E(1810), 'avoir la haute main sur', 'commander', "Avoir l’autorité complète sur quelque chose, sans partage. EN: to have complete authority over something, undivided."),
    card(E(1811), 'tenir les rênes de', 'commander', "Diriger, comme on dirige un cheval par ses rênes. EN: to be in charge, as one steers a horse by its reins."),
    card(E(1812), 'régner sans partage', 'commander', "Exercer un pouvoir total, sans personne pour le partager. EN: to rule with total power, with no one to share it."),
    card(E(1813), 'rendre les armes', 'céder', "Abandonner la lutte, reconnaître sa défaite. EN: to lay down one’s arms, to admit defeat."),
    card(E(1814), 'mettre quelqu’un genou à terre', 'céder', "Forcer quelqu’un à céder, à se soumettre entièrement. EN: to bring someone to their knees, to force total submission."),
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a2-table', layer: 'core', sheetId: 'sheet-pouvoir-ruse',
  title: 'Cinq expressions de plus',
  cols: ['Expression', 'Sens figuré'],
  rows: [
    tapRow(['battre en retraite', 'reculer, abandonner une position'], E(1815), 'Reculer sans combattre jusqu’au bout', 'Devant l’ampleur du scandale, le conseil a battu en retraite. EN: faced with the scale of the scandal, the board retreated.'),
    tapRow(['baisser pavillon', 'céder, reconnaître sa défaite'], E(1816), 'Un geste nautique devenu figuré', 'Le ministre a fini par baisser pavillon devant les députés. EN: the minister finally backed down before the members of parliament.'),
    tapRow(['avoir barre sur quelqu’un', 'avoir l’avantage, dominer'], E(1817), 'Un avantage, pas une autorité légale', 'Le propriétaire a barre sur tout le quartier. EN: the owner has the upper hand over the whole neighbourhood.'),
    tapRow(['faire acte d’autorité', 'affirmer son pouvoir par un geste'], E(1818), 'Un geste, pas un mot', 'La directrice a dû faire acte d’autorité pour calmer la salle. EN: the director had to assert her authority to calm the room.'),
    tapRow(['se poser en arbitre', 'se présenter comme juge impartial'], E(1819), 'Juger sans décider', 'Le journal se pose en arbitre du débat, sans y participer. EN: the newspaper sets itself up as arbiter of the debate, without taking part.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['registreFige'],
};

const A2_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-groupe', layer: 'core', size: 'lg',
  title: 'Commander, céder ou juger', frSub: 'Classe les dix expressions',
  groups: [
    grp('Qui commande', [
      it(E(1810), 'la haute main : une autorité complète'),
      it(E(1811), 'les rênes : diriger'),
      it(E(1817), 'avoir barre sur : l’avantage'),
    ], chk('Laquelle de ces trois expressions dit un POUVOIR LÉGAL, pas seulement un avantage.', ['avoir la haute main sur', 'avoir barre sur quelqu’un'], 0,
      'Avoir la haute main sur dit une autorité reconnue ; avoir barre sur dit seulement un avantage de fait. EN: avoir la haute main sur names a recognised authority; avoir barre sur names only a factual advantage.')),
    grp('Qui cède', [
      it(E(1813), 'rendre les armes : abandonner'),
      it(E(1815), 'battre en retraite : reculer'),
      it(E(1816), 'baisser pavillon : céder'),
    ], chk('Ces trois expressions disent toutes...', ['la victoire', 'céder, chacune avec sa propre image'], 1,
      'Rendre les armes, battre en retraite et baisser pavillon partagent le même sens, trois images différentes. EN: all three share the same meaning, three different pictures.')),
    ctl('Qui juge', 'Entre « se poser en arbitre » et « faire acte d’autorité », lequel décrit un geste de pouvoir DIRECT.', ['se poser en arbitre', 'faire acte d’autorité'], 1,
      'Faire acte d’autorité est un geste direct ; se poser en arbitre reste un rôle de juge, sans trancher. EN: faire acte d’autorité is a direct act; se poser en arbitre stays a judging role, without deciding.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['registreFige'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a2-piege', layer: 'core', swipe: true,
  title: 'Six expressions, un seul mot qui dérape',
  rule: {
    title: 'Une expression figée garde ses mots',
    body: `${B234_REF} te l’a appris : une expression figée garde ses mots. Change un mot, et elle n’existe plus. EN: a fixed expression keeps its words. Change one word and it no longer exists.`,
  },
  cards: [
    trap(E(1810), '/lə pʁe.fɛ a la ot mɛ̃ syʁ lɑ̃.sɑ̃bl dy do.sje/', 'avoir la haute MANCHE sur', 'Le préfet a la haute manche sur l’ensemble du dossier.', 'L’expression est « la haute main », jamais « la haute manche ». EN: the idiom is la haute main, never la haute manche.'),
    trap(E(1811), '/də.pɥi di.zɑ̃ ɛl tjɛ̃ le ʁɛn də lɑ̃.tʁə.pʁiz fa.mi.ljal/', 'tenir les CORDES de', 'Depuis dix ans, elle tient les cordes de l’entreprise familiale.', 'On tient les « rênes », pas les « cordes ». EN: you hold the rênes, never the cordes.'),
    trap(E(1812), '/lə vjø mi.nistʁ ʁe.ɲɛ sɑ̃ paʁ.taʒ syʁ sɔ.nad.mi.nis.tʁa.sjɔ̃/', 'régner sans PARTIR', 'Le vieux ministre régnait sans partir sur son administration.', 'C’est « sans partage », jamais « sans partir ». EN: it is sans partage, never sans partir.'),
    trap(E(1813), '/a.pʁɛ tʁwa ʁə.kuʁ ʁə.ʒə.te la.vɔ.ka a fi.ni paʁ ʁɑ̃dʁ le.zaʁm/', 'LÂCHER les armes', 'Après trois recours rejetés, l’avocat a fini par lâcher les armes.', 'On « rend » les armes, on ne les « lâche » pas. EN: you rendre les armes, you do not lâcher them.'),
    trap(E(1816), '/lə mi.nistʁ a fi.ni paʁ bɛ.se pa.vi.jɔ̃ də.vɑ̃ le de.py.te/', 'baisser LE pavillon', 'Le ministre a fini par baisser le pavillon devant les députés.', 'L’expression ne prend pas d’article : « baisser pavillon », jamais « baisser le pavillon ». EN: the idiom takes no article: baisser pavillon, never baisser le pavillon.'),
    trap(E(1817), '/lə pʁɔ.pʁi.je.tɛʁ də li.mœbl a baʁ syʁ tu lə kaʁ.tje/', 'avoir barre CONTRE', 'Le propriétaire de l’immeuble a barre contre tout le quartier.', 'C’est « avoir barre SUR quelqu’un », jamais « contre ». EN: it is avoir barre SUR someone, never contre.'),
  ],
  drill: [
    { promptSay: 'Avoir une autorité complète et sans partage sur un dossier, c’est avoir la haute ... sur lui.', opts: ['manche', 'main'], correct: 1 },
    { promptSay: 'Diriger une entreprise comme on dirige un cheval, c’est en tenir les ... .', opts: ['cordes', 'rênes'], correct: 1 },
    { promptSay: 'Exercer un pouvoir total, sans personne pour le partager, c’est régner sans ... .', opts: ['partir', 'partage'], correct: 1 },
    { promptSay: 'Abandonner la lutte et reconnaître sa défaite, c’est ... les armes.', opts: ['lâcher', 'rendre'], correct: 1 },
    { promptSay: 'Céder devant plus fort que soi, un geste nautique devenu figuré, c’est baisser ... .', opts: ['le pavillon', 'pavillon'], correct: 1 },
    { promptSay: 'Avoir l’avantage sur quelqu’un, sans autorité légale, c’est avoir barre ... lui.', opts: ['contre', 'sur'], correct: 1 },
    { promptSay: 'Une expression figée garde ses mots : seul le ... se conjugue.', opts: ['verbe', 'nom'], correct: 0 },
    { promptSay: 'Changer un seul mot d’une expression figée la rend ... .', opts: ['plus forte', 'inexistante'], correct: 1 },
  ],
  steps: STEPS_STD('Six expressions du pouvoir'),
  audio: REC('rec-c2-03-piege-pouvoir'), say: REFRAME, terms: ['motsFixes'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Commander', '« Avoir la haute main sur » et « tenir les rênes de » disent toutes les deux...', ['une faiblesse', 'une autorité ou une direction complète'], 1,
    'Les deux expressions disent un pouvoir complet, sans partage. EN: both idioms name a complete, undivided power.'),
  ctl('Céder', '« Rendre les armes », « battre en retraite » et « baisser pavillon » partagent...', ['le même sens, trois images différentes', 'trois sens opposés'], 0,
    'Trois images pour une seule idée : céder. EN: three pictures for one idea: giving up.'),
  ctl('Le mot qui dérape', 'Une expression figée garde ses mots. « Baisser le pavillon », avec un article, est...', ['une variante acceptée', 'une forme qui n’existe pas'], 1,
    'L’article change l’expression figée en une forme inexistante. EN: the article turns the fixed expression into one that does not exist.'),
], ['registreFige', 'motsFixes']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Le pouvoir et l’autorité',
    opener: {
      line: "Berthier tient les rênes depuis dix ans : ici tu apprends dix façons soutenues de dire qui commande, et qui cède. EN: Berthier has held the reins for ten years: here you learn ten elevated ways to say who commands, and who yields.",
      imageRef: 'lessons/c2-03-cent-idiomes/act02.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais et emploies dix expressions soutenues du pouvoir, et tu repères celle qui n’existe pas. EN: You can recognise and use ten elevated idioms of power, and spot the one that does not exist.',
    estScreens: 32, restPoints: ['a2-table', 'a2-groupe'],
  },
  sections: [A2_LECTURE, A2_DECK, A2_TABLE, A2_GROUPE, A2_PIEGE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LA RUSE, LE DOUBLE JEU ET LA RHÉTORIQUE
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a3-histoire', layer: 'core',
  title: 'Un brouillon trop prudent', frSub: 'Inès relit la chronique politique de Julien',
  setting: 'À la rédaction, Inès relit la chronique politique de Julien avant publication.',
  bubbles: [
    { from: 'narrator', fr: 'Julien décrit un candidat qui refuse de choisir son camp.', en: 'Julien describes a candidate who refuses to pick a side.' },
    { from: 'user', fr: src(E(1828)).fr, en: src(E(1828)).en },
    { from: 'narrator', fr: 'Inès note en marge : trop vague. Qui, au juste, décide pour lui.', en: 'Inès notes in the margin: too vague. Who, exactly, decides for him.' },
    { from: 'user', fr: src(E(1829)).fr, en: src(E(1829)).en, warn: 'Une accusation précise, pas une insinuation.' },
  ],
  closing: { fr: 'Le brouillon devient un article, phrase par phrase.', en: 'The draft becomes an article, sentence by sentence.' },
  audio: REC('rec-c2-03-brouillon-prudent'), say: REFRAME, terms: ['image'],
};

const A3_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a3-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-pouvoir-ruse',
  title: 'Cacher, tromper, retourner', frSub: 'Cinq expressions de la ruse',
  hint: 'Cinq cartes. Tromper par le geste, par le mot, par le camp.',
  audio: REC('rec-c2-03-ruse-cinq'), say: REFRAME, terms: ['image'],
  cards: [
    card(E(1825), 'jeter de la poudre aux yeux', 'éblouir', "Impressionner par l’apparence, pour cacher le fond. EN: to dazzle with appearances, to hide the substance."),
    card(E(1826), 'faire des gorges chaudes de', 'moquer', "Se moquer ouvertement, avec plaisir, d’une maladresse. EN: to mock something openly, with relish."),
    card(E(1827), 'se faire l’avocat du diable', 'contester', "Défendre un point de vue qu’on ne partage pas, pour tester un argument. EN: to argue a position one does not hold, to stress-test it."),
    card(E(1828), 'nager entre deux eaux', 'hésiter', "Refuser de choisir un camp, pour garder les deux portes ouvertes. EN: to have a foot in both camps, keeping every door open."),
    card(E(1829), 'tirer les ficelles', 'manipuler', "Contrôler une situation en secret, sans y paraître. EN: to pull the strings, secretly controlling a situation."),
  ],
};

const A3_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-table', layer: 'core', sheetId: 'sheet-pouvoir-ruse',
  title: 'Cinq expressions de plus',
  cols: ['Expression', 'Sens figuré'],
  rows: [
    tapRow(['retourner sa veste', 'changer de camp par intérêt'], E(1830), 'Un changement d’opinion, pas de vêtement', 'L’élu a retourné sa veste dès que le vote a changé. EN: the elected official switched sides as soon as the vote shifted.'),
    tapRow(['jouer sur les mots', 'utiliser l’ambiguïté pour éviter de répondre'], E(1831), 'Une esquive, pas un mensonge direct', 'L’accusé joue sur les mots pour éviter de répondre franchement. EN: the defendant plays on words to avoid answering plainly.'),
    tapRow(['prêcher le faux pour savoir le vrai', 'affirmer une chose fausse pour faire parler'], E(1832), 'Une ruse d’enquête', 'L’enquêteur a prêché le faux pour savoir le vrai. EN: the investigator claimed something false to learn the truth.'),
    tapRow(['ménager ses arrières', 'se protéger avant d’agir'], E(1833), 'Une prudence, pas une lâcheté', 'Avant de démissionner, elle a pris soin de ménager ses arrières. EN: before resigning, she took care to cover herself.'),
    tapRow(['brouiller les pistes', 'rendre la vérité difficile à suivre'], E(1834), 'Une image de chasse, devenue générale', 'Le communiqué brouille les pistes plus qu’il n’éclaircit l’affaire. EN: the statement muddies the trail more than it clarifies the matter.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['image'],
};

const A3_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-groupe', layer: 'core', size: 'lg',
  title: 'Éblouir, cacher ou manipuler', frSub: 'Classe les dix expressions',
  groups: [
    grp('Éblouir par l’apparence', [
      it(E(1825), 'la poudre aux yeux : éblouir'),
      it(E(1826), 'les gorges chaudes : moquer'),
    ], chk('« Jeter de la poudre aux yeux » cherche surtout à...', ['renseigner avec précision', 'impressionner, pour cacher le fond'], 1,
      'La poudre aux yeux éblouit pour mieux cacher. EN: the "eye powder" dazzles in order to hide.')),
    grp('Cacher ses vraies intentions', [
      it(E(1829), 'tirer les ficelles : manipuler en secret'),
      it(E(1833), 'ménager ses arrières : se protéger'),
      it(E(1834), 'brouiller les pistes : rendre la vérité difficile'),
    ], chk('Ces trois expressions ont en commun...', ['une action publique et franche', 'une action discrète, jamais déclarée'], 1,
      'Tirer les ficelles, ménager ses arrières et brouiller les pistes se font toutes en secret. EN: all three happen out of sight.')),
    ctl('Changer de camp', 'Entre « nager entre deux eaux » et « retourner sa veste », laquelle dit un choix déjà FAIT, pas une hésitation.', ['nager entre deux eaux', 'retourner sa veste'], 1,
      'Retourner sa veste dit un changement de camp déjà accompli ; nager entre deux eaux dit qu’on n’a encore rien choisi. EN: retourner sa veste names an accomplished switch; nager entre deux eaux names an unresolved hesitation.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['image'],
};

const A3_PIEGE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-piege', layer: 'core', size: 'lg',
  title: 'Quatre pièges, un seul mot faux', frSub: 'Laquelle des deux formes existe',
  groups: [
    ctl('Entre deux eaux', 'Laquelle de ces deux formes est la bonne préposition.', ['nager dans deux eaux', 'nager entre deux eaux'], 1,
      'L’expression figée est « entre deux eaux », jamais « dans deux eaux ». EN: the fixed form is entre deux eaux, never dans deux eaux.'),
    ctl('Les ficelles', 'Laquelle de ces deux formes est la bonne.', ['tirer sur les ficelles', 'tirer les ficelles'], 1,
      'On « tire les ficelles » directement, sans « sur ». EN: you tirer les ficelles directly, with no sur.'),
    ctl('Changer de camp', 'Laquelle de ces deux formes existe vraiment, au sens figuré.', ['retourner sa chemise', 'retourner sa veste'], 1,
      'C’est « retourner sa veste » ; « retourner sa chemise » ne se dit pas en français. EN: it is retourner sa veste; retourner sa chemise is not said in French.'),
    ctl('Jouer avec les mots', 'Laquelle de ces deux formes est la bonne préposition.', ['jouer avec les mots', 'jouer sur les mots'], 1,
      'On « joue SUR les mots », jamais « avec les mots » pour ce sens précis. EN: you jouer SUR les mots, never avec les mots for this exact meaning.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['motsFixes'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Éblouir ou cacher', '« Jeter de la poudre aux yeux » et « brouiller les pistes » ont en commun...', ['une franchise totale', 'une volonté de cacher la vérité'], 1,
    'Les deux expressions servent à empêcher de voir clair. EN: both idioms serve to keep things from being seen clearly.'),
  ctl('Le mot qui dérape', 'Entre « retourner sa veste » et « retourner sa chemise », l’expression qui existe réellement est...', ['retourner sa chemise', 'retourner sa veste'], 1,
    'Seule « sa veste » est l’expression figée. EN: only sa veste is the fixed expression.'),
  ctl('La prudence', '« Ménager ses arrières », avant une décision risquée, c’est...', ['se protéger par avance', 'abandonner tout de suite'], 0,
    'Ménager ses arrières est une prudence, pas un abandon. EN: ménager ses arrières is caution, not surrender.'),
], ['image', 'motsFixes']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'La ruse, le double jeu et la rhétorique',
    opener: {
      line: "Le candidat de Julien nage entre deux eaux : ici tu apprends dix façons soutenues de dire la ruse, et le mot qui la trahit s’il dérape. EN: Julien’s candidate is playing both sides: here you learn ten elevated ways to name cunning, and the one word that gives the idiom away if it slips.",
      imageRef: 'lessons/c2-03-cent-idiomes/act03.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais et emploies dix expressions soutenues de la ruse et du double jeu. EN: You can recognise and use ten elevated idioms of cunning and double-dealing.',
    estScreens: 32, restPoints: ['a3-table', 'a3-groupe'],
  },
  sections: [A3_HISTOIRE, A3_DECK, A3_TABLE, A3_GROUPE, A3_PIEGE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LE JUGEMENT ET LA MESURE
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a4-ecoute', layer: 'core', hideLines: true,
  title: 'Quel jugement entends-tu', frSub: 'Huit phrases sur le jugement et la mesure',
  lines: [ln(E(1840)), ln(E(1841)), ln(E(1842)), ln(E(1843)), ln(E(1844)), ln(E(1846)), ln(E(1847)), ln(E(1849))],
  questions: [
    { q: 'Première phrase : « faire la part des choses » dit...', opts: ['juger sans nuance', 'garder une juste perspective, même sous pression'], correct: 1,
      why: 'Faire la part des choses, c’est distinguer ce qui compte de ce qui n’est qu’un détail. EN: faire la part des choses means telling what matters from what is only a detail.' },
    { q: 'Deuxième phrase : le comité « n’est pas dupe » des chiffres. Cela veut dire qu’il...', opts: ['les croit aveuglément', 'voit au-delà de ce qu’ils montrent'], correct: 1,
      why: 'Ne pas être dupe, c’est refuser d’être trompé par une apparence. EN: ne pas être dupe means refusing to be fooled by an appearance.' },
    { q: 'Troisième phrase : « trancher dans le vif » décrit une décision...', opts: ['douce et progressive', 'rapide et difficile, prise dans l’urgence'], correct: 1,
      why: 'Trancher dans le vif, c’est couper sans hésiter, même si cela fait mal. EN: trancher dans le vif means cutting decisively, even when it hurts.' },
    { q: 'Septième phrase : « faire bon marché de » les inquiétudes des riverains, c’est...', opts: ['les prendre très au sérieux', 'les traiter comme si elles ne comptaient pas'], correct: 1,
      why: 'Faire bon marché de quelque chose, c’est en minimiser la valeur. EN: faire bon marché de something means treating it as worthless.' },
  ],
  audio: REC('rec-c2-03-jugement-ecoute'), say: REFRAME, terms: ['image'],
};

const A4_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-jugement-exces',
  title: 'Peser avant de trancher', frSub: 'Cinq expressions du jugement',
  hint: 'Cinq cartes. Peser, douter, mesurer, avant toute décision.',
  audio: REC('rec-c2-03-jugement-cinq'), say: REFRAME, terms: ['image'],
  cards: [
    card(E(1840), 'faire la part des choses', 'nuancer', "Distinguer ce qui compte vraiment de ce qui n’est qu’un détail. EN: to keep things in perspective, separating what matters from what does not."),
    card(E(1841), 'ne pas être dupe de', 'douter', "Ne pas se laisser tromper par une apparence. EN: to not be fooled by an appearance."),
    card(E(1842), 'trancher dans le vif', 'décider', "Prendre une décision rapide et difficile, sans plus attendre. EN: to cut to the quick, making a hard, swift decision."),
    card(E(1843), 'juger à l’aune de', 'mesurer', "Évaluer quelque chose selon un critère précis. EN: to judge something by a specific standard."),
    card(E(1844), 'avoir voix au chapitre', 'participer', "Avoir le droit de donner son avis dans une décision. EN: to have a say in a decision."),
  ],
};

const A4_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a4-table', layer: 'core', sheetId: 'sheet-jugement-exces',
  title: 'Cinq expressions de plus',
  cols: ['Expression', 'Sens figuré'],
  rows: [
    tapRow(['s’en tenir à', 'se limiter strictement à quelque chose'], E(1845), 'Une rigueur, pas une paresse', 'Le rapporteur s’en tient strictement aux faits établis. EN: the rapporteur sticks strictly to the established facts.'),
    tapRow(['prendre la mesure de', 'évaluer l’ampleur réelle de quelque chose'], E(1846), 'Comprendre avant d’agir', 'Il a fallu une semaine pour prendre la mesure du désastre. EN: it took a week to gauge the full scale of the disaster.'),
    tapRow(['faire bon marché de', 'traiter quelque chose comme sans valeur'], E(1847), 'Un mépris poli, mais réel', 'Le discours fait bon marché des inquiétudes des riverains. EN: the speech treats the residents’ worries as worthless.'),
    tapRow(['ne pas être en reste', 'ne pas se laisser dépasser'], E(1848), 'Une égalité, pas une rivalité ouverte', 'Sur ce point, l’opposition n’est pas en reste non plus. EN: on this point, the opposition is not to be outdone either.'),
    tapRow(['avoir le sens de la mesure', 'savoir rester dans de justes proportions'], E(1849), 'Une qualité rare, ce soir-là', 'Peu d’orateurs ont vraiment le sens de la mesure. EN: few speakers truly had a sense of proportion.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['image'],
};

const A4_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-groupe', layer: 'core', size: 'lg',
  title: 'Peser, décider ou participer', frSub: 'Classe les dix expressions',
  groups: [
    grp('Peser avant de juger', [
      it(E(1840), 'faire la part des choses'),
      it(E(1841), 'ne pas être dupe de'),
      it(E(1846), 'prendre la mesure de'),
    ], chk('Ces trois expressions précèdent toutes...', ['une décision déjà prise', 'une décision encore à prendre'], 1,
      'Peser vient AVANT de décider. EN: weighing comes BEFORE deciding.')),
    grp('Décider, vite ou avec mesure', [
      it(E(1842), 'trancher dans le vif : vite'),
      it(E(1849), 'le sens de la mesure : avec retenue'),
    ], chk('« Trancher dans le vif » et « avoir le sens de la mesure » sont...', ['la même qualité', 'presque des contraires : la rapidité contre la retenue'], 1,
      'L’une dit la vitesse, l’autre la retenue : deux qualités différentes d’un bon juge. EN: one names speed, the other restraint: two different qualities of a good judge.')),
    ctl('Participer ou mépriser', 'Entre « avoir voix au chapitre » et « faire bon marché de », laquelle dit un RESPECT de l’avis d’autrui.', ['faire bon marché de', 'avoir voix au chapitre'], 1,
      'Avoir voix au chapitre, c’est que l’avis compte ; faire bon marché de, c’est qu’il ne compte pas. EN: avoir voix au chapitre means the opinion counts; faire bon marché de means it does not.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['image'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a4-piege', layer: 'core', swipe: true,
  title: 'Six expressions, un seul mot qui dérape',
  rule: {
    title: 'Un mot, une préposition ou un article suffit à tout changer',
    body: `${B234_REF} te l’a déjà appris : une expression figée garde ses mots. Ici, la préposition ou l’article trahit souvent la forme fausse. EN: a fixed expression keeps its words; here the preposition or article often gives away the wrong form.`,
  },
  cards: [
    trap(E(1841), '/lə kɔ.mi.te nɛ pa dyp de ʃifʁ pʁe.zɑ̃.te paʁ la di.ʁɛk.sjɔ̃/', 'ne pas être DUPÉ de', 'Le comité n’est pas dupé des chiffres présentés par la direction.', 'C’est « ne pas être DUPE de », jamais « dupé de » pour cette expression figée. EN: it is ne pas être DUPE de, never dupé de for this fixed idiom.'),
    trap(E(1844), '/le.zɑ̃.plwa.je ʁe.klam ɑ̃.fɛ̃ da.vwaʁ vwa o ʃa.pitʁ/', 'avoir voix DU chapitre', 'Les employés réclament enfin d’avoir voix du chapitre.', 'C’est « avoir voix AU chapitre », jamais « du chapitre ». EN: it is avoir voix AU chapitre, never du chapitre.'),
    trap(E(1845), '/lə ʁa.pɔʁ.tœʁ sɑ̃ tjɛ̃ stʁik.tə.mɑ̃ o fɛ e.ta.bli/', 'S’Y tenir à', 'Le rapporteur s’y tient à strictement aux faits établis.', 'C’est « s’en tenir à », jamais « s’y tenir à ». EN: it is s’en tenir à, never s’y tenir à.'),
    trap(E(1847), '/lə dis.kuʁ fɛ bɔ̃ maʁ.ʃe de.zɛ̃.kje.tyd de ʁiv.ʁɛ̃/', 'faire LE bon marché de', 'Le discours fait le bon marché des inquiétudes des riverains.', 'L’expression ne prend pas d’article : « faire bon marché de », jamais « faire le bon marché de ». EN: the idiom takes no article: faire bon marché de, never faire le bon marché de.'),
    trap(E(1848), '/syʁ sə pwɛ̃ lɔ.po.zi.sjɔ̃ nɛ pa.zɑ̃ ʁɛst nɔ̃ ply/', 'ne pas être AU reste', 'Sur ce point, l’opposition n’est pas au reste non plus.', 'C’est « ne pas être EN reste », jamais « au reste ». EN: it is ne pas être EN reste, never au reste.'),
    trap(E(1849), '/pø dɔ.ʁa.tœʁ ɔ̃ vʁɛ.mɑ̃ lə sɑ̃s də la mə.zyʁ sə swaʁ la/', 'le sens DE MESURE', 'Peu d’orateurs ont vraiment le sens de mesure, ce soir-là.', 'C’est « le sens DE LA mesure », avec l’article, jamais « de mesure ». EN: it is le sens DE LA mesure, with the article, never de mesure.'),
  ],
  drill: [
    { promptSay: 'Ne pas se laisser tromper par une apparence, c’est ne pas être ... de quelque chose.', opts: ['dupé', 'dupe'], correct: 1 },
    { promptSay: 'Avoir le droit de donner son avis, c’est avoir voix ... chapitre.', opts: ['du', 'au'], correct: 1 },
    { promptSay: 'Se limiter strictement aux faits, c’est s’... tenir à eux.', opts: ['y', 'en'], correct: 1 },
    { promptSay: 'Traiter quelque chose comme sans valeur, c’est faire ... marché de lui.', opts: ['le bon', 'bon'], correct: 1 },
    { promptSay: 'Ne pas se laisser dépasser, c’est ne pas être ... reste.', opts: ['au', 'en'], correct: 1 },
    { promptSay: 'Savoir rester dans de justes proportions, c’est avoir le sens de ... mesure.', opts: ['mesure', 'la mesure'], correct: 1 },
    { promptSay: 'Une expression figée garde exactement...', opts: ['ses mots', 'son idée générale'], correct: 0 },
    { promptSay: 'Le détail qui trahit souvent une expression fausse est...', opts: ['la longueur de la phrase', 'une préposition ou un article changé'], correct: 1 },
  ],
  steps: STEPS_STD('Six expressions du jugement'),
  audio: REC('rec-c2-03-piege-jugement'), say: REFRAME, terms: ['motsFixes'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Peser avant de juger', '« Faire la part des choses » et « ne pas être dupe de » servent toutes deux à...', ['décider plus vite', 'juger avec justesse, sans se laisser tromper'], 1,
    'Les deux expressions précèdent une décision juste. EN: both idioms precede a fair decision.'),
  ctl('Le mot qui dérape', 'Entre « s’en tenir à » et « s’y tenir à », la forme figée correcte est...', ['s’y tenir à', 's’en tenir à'], 1,
    'Seule « s’en tenir à » est l’expression figée. EN: only s’en tenir à is the fixed expression.'),
  ctl('Participer', '« Avoir voix au chapitre », pour un employé, signifie...', ['n’avoir aucun droit de parole', 'pouvoir donner son avis sur une décision'], 1,
    'Avoir voix au chapitre, c’est que l’avis compte réellement. EN: avoir voix au chapitre means the opinion genuinely counts.'),
], ['image', 'motsFixes']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Le jugement et la mesure',
    opener: {
      line: "Un bon juge pèse avant de trancher : ici tu apprends dix façons soutenues de dire le jugement, et le petit mot qui, changé, le fait disparaître. EN: A good judge weighs before deciding: here you learn ten elevated ways to name judgement, and the small word that, changed, makes the idiom vanish.",
      imageRef: 'lessons/c2-03-cent-idiomes/act04.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais et emploies dix expressions soutenues du jugement et de la mesure. EN: You can recognise and use ten elevated idioms of judgement and restraint.',
    estScreens: 32, restPoints: ['a4-table', 'a4-groupe'],
  },
  sections: [A4_ECOUTE, A4_DECK, A4_TABLE, A4_GROUPE, A4_PIEGE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — L’EXCÈS ET LA DÉMESURE
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a5-lecture', layer: 'core', questionsInModal: true,
  title: 'Le discours du maire', frSub: 'Un conseil municipal qui s’éternise',
  text: "Au conseil municipal, le maire a voulu marquer les esprits. Il ne fait pas dans la demi-mesure quand il s’agit de vanter son propre bilan. Son éloge personnel frisait le ridicule, et plusieurs élus ont jugé que le discours versait dans l’excès dès ses premières minutes. Certains ont même estimé que le projet, modeste au départ, était tombé dans la démesure. Un conseiller, agacé, a rappelé qu’un bon orateur sait s’arrêter à temps.",
  glossary: [
    { word: 'vanter', en: 'to boast about', note: 'Présenter quelque chose en l’exagérant. EN: to present something while exaggerating it.' },
  ],
  questions: [
    { q: "Devine le sens, sans dictionnaire : « il ne fait pas dans la demi-mesure ». Que dit cette expression sur sa manière de parler.", a: 'Qu’il ne fait jamais les choses à moitié : quand il vante son bilan, il le fait pleinement, sans retenue.' },
    { q: "Pourquoi l’éloge du maire « frise le ridicule » plutôt que d’être simplement « trop long ».", a: 'Parce qu’il va si loin dans l’exagération qu’il devient presque comique, sans que le maire s’en rende compte.' },
    { q: "Qu’est-ce que le conseiller reproche implicitement au maire, en rappelant qu’un bon orateur « sait s’arrêter à temps ».", a: 'Qu’il a dépassé la mesure et n’a pas su reconnaître le moment où il aurait fallu se taire.' },
  ],
  audio: REC('rec-c2-03-discours-maire'), say: REFRAME, terms: ['image'],
};

const A5_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a5-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-jugement-exces',
  title: 'Trop, et encore trop', frSub: 'Cinq expressions de l’excès',
  hint: 'Cinq cartes. Un pas de trop, puis un autre.',
  audio: REC('rec-c2-03-exces-cinq'), say: REFRAME, terms: ['image'],
  cards: [
    card(E(1855), 'ne pas faire dans la demi-mesure', 'excès', "Agir pleinement, sans jamais se limiter à moitié. EN: to not do things by halves."),
    card(E(1856), 'friser le ridicule', 'excès', "Être si proche du ridicule qu’on le touche presque. EN: to border on the ridiculous."),
    card(E(1857), 'verser dans l’excès', 'excès', "Glisser, peu à peu, vers un comportement excessif. EN: to tip, little by little, into excess."),
    card(E(1858), 'tomber dans la démesure', 'excès', "Perdre toute proportion, dépasser ce qui est raisonnable. EN: to fall into excess, losing all sense of proportion."),
    card(E(1859), 'outrepasser les bornes', 'excès', "Aller plus loin que ce qu’une limite autorisait. EN: to overstep the bounds that a limit allowed."),
  ],
};

const A5_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a5-table', layer: 'core', sheetId: 'sheet-jugement-exces',
  title: 'Cinq expressions de plus',
  cols: ['Expression', 'Sens figuré'],
  rows: [
    tapRow(['confiner à l’absurde', 'être si extrême que cela devient absurde'], E(1860), 'Une frontière avec l’absurde', 'Certaines clauses du contrat confinent à l’absurde. EN: some clauses of the contract border on the absurd.'),
    tapRow(['ne connaître aucune limite', 'être totalement démesuré'], E(1861), 'Une ambition, ou un défaut, sans borne', 'Son ambition, dit-on, ne connaît aucune limite. EN: his ambition, people say, knows no limit.'),
    tapRow(['jouer les équilibristes', 'tenter de contenter deux camps opposés'], E(1862), 'Un équilibre fragile, pas un cirque', 'Entre les deux camps, le médiateur joue les équilibristes. EN: between the two camps, the mediator is walking a tightrope.'),
    tapRow(['flirter avec l’excès', 'approcher l’excès sans tout à fait y tomber'], E(1863), 'Une approche, pas encore une chute', 'Le ton du discours flirtait ouvertement avec l’excès. EN: the speech’s tone openly flirted with excess.'),
    tapRow(['savoir s’arrêter à temps', 'reconnaître le bon moment pour cesser'], E(1864), 'Le contrepoint des neuf autres', 'Un bon négociateur sait s’arrêter à temps. EN: a good negotiator knows when to stop.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['image'],
};

const A5_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-groupe', layer: 'core', size: 'lg',
  title: 'Trop loin, ou presque trop loin', frSub: 'Classe les dix expressions',
  groups: [
    grp('Déjà trop loin', [
      it(E(1857), 'verser dans l’excès'),
      it(E(1858), 'tomber dans la démesure'),
      it(E(1859), 'outrepasser les bornes'),
    ], chk('Ces trois expressions décrivent...', ['une limite déjà dépassée', 'une limite qu’on approche seulement'], 0,
      'Verser, tomber, outrepasser : trois verbes d’un excès déjà accompli. EN: verser, tomber, outrepasser: three verbs of an excess already reached.')),
    grp('Presque comique', [
      it(E(1856), 'friser le ridicule'),
      it(E(1860), 'confiner à l’absurde'),
    ], chk('« Friser » et « confiner à » disent tous les deux...', ['une distance encore grande', 'une proximité extrême, presque atteinte'], 1,
      'Friser et confiner à disent qu’on touche presque la chose nommée. EN: friser and confiner à both say one is almost touching the thing named.')),
    ctl('L’exception', 'Parmi ces dix expressions, laquelle est la SEULE à décrire une qualité, pas un défaut.', ['ne connaître aucune limite', 'savoir s’arrêter à temps'], 1,
      'Savoir s’arrêter à temps est le contrepoint positif des neuf autres. EN: savoir s’arrêter à temps is the one positive counterpoint to the other nine.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['image'],
};

const A5_PIEGE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-piege', layer: 'core', size: 'lg',
  title: 'Quatre pièges, un seul mot faux', frSub: 'Laquelle des deux formes existe',
  groups: [
    ctl('Les bornes', 'Laquelle de ces deux formes est la bonne.', ['outrepasser ses bornes', 'outrepasser les bornes'], 1,
      'C’est « outrepasser LES bornes », jamais « ses bornes ». EN: it is outrepasser LES bornes, never ses bornes.'),
    ctl('Aucune limite', 'Laquelle de ces deux formes respecte l’accord figé.', ['ne connaître aucune limites', 'ne connaître aucune limite'], 1,
      '« Aucune » impose le singulier : « aucune limite », jamais « aucune limites ». EN: aucune forces the singular: aucune limite, never aucune limites.'),
    ctl('Les équilibristes', 'Laquelle de ces deux formes est la bonne.', ['faire les équilibristes', 'jouer les équilibristes'], 1,
      'On « joue » les équilibristes, comme on joue un rôle ; on ne les « fait » pas. EN: you jouer les équilibristes, as one plays a role; you do not faire them.'),
    ctl('Presque ridicule', 'Laquelle de ces deux formes est l’expression figée pour cette image précise.', ['frôler le ridicule', 'friser le ridicule'], 1,
      'L’expression figée est « friser le ridicule » ; « frôler » existe, mais pas dans cette expression exacte. EN: the fixed idiom is friser le ridicule; frôler exists, but not in this exact phrase.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['motsFixes'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Déjà trop loin', '« Verser dans l’excès » et « tomber dans la démesure » décrivent...', ['une limite qu’on approche', 'une limite déjà dépassée'], 1,
    'Les deux verbes disent un excès déjà accompli. EN: both verbs name an excess already reached.'),
  ctl('Le contrepoint', 'Sur dix expressions de cette famille, la seule à décrire une qualité est...', ['savoir s’arrêter à temps', 'ne connaître aucune limite'], 0,
    'C’est le contrepoint positif de toute la famille. EN: it is the one positive counterpoint in the whole family.'),
  ctl('Le mot qui dérape', 'Entre « outrepasser les bornes » et « outrepasser ses bornes », la forme figée est...', ['outrepasser ses bornes', 'outrepasser les bornes'], 1,
    'Seule « les bornes » est l’expression figée. EN: only les bornes is the fixed expression.'),
], ['image', 'motsFixes']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'L’excès et la démesure',
    opener: {
      line: "Le maire ne fait pas dans la demi-mesure : ici tu apprends dix façons soutenues de dire qu’on est allé trop loin, et une seule de dire qu’on a su s’arrêter. EN: The mayor does not do things by halves: here you learn ten elevated ways to say someone went too far, and a single one to say someone knew when to stop.",
      imageRef: 'lessons/c2-03-cent-idiomes/act05.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais et emploies dix expressions soutenues de l’excès et de la démesure. EN: You can recognise and use ten elevated idioms of excess.',
    estScreens: 32, restPoints: ['a5-table', 'a5-groupe'],
  },
  sections: [A5_LECTURE, A5_DECK, A5_TABLE, A5_GROUPE, A5_PIEGE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — LA RÉPUTATION ET LA DISGRÂCE
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a6-histoire', layer: 'core',
  title: 'Le lendemain de l’article', frSub: 'Berthier répond, enfin',
  setting: 'Le lendemain de la publication, Berthier relit l’article qui le met en cause.',
  bubbles: [
    { from: 'narrator', fr: 'Son porte-parole a d’abord nié l’évidence, devant les caméras.', en: 'His spokesman first denied the obvious, in front of the cameras.' },
    { from: 'user', fr: src(E(1872)).fr, en: src(E(1872)).en },
    { from: 'narrator', fr: 'Son avocat lui conseille de répondre vite, avant que l’affaire n’empire.', en: 'His lawyer advises him to respond quickly, before the matter gets worse.' },
    { from: 'user', fr: src(E(1874)).fr, en: src(E(1874)).en, warn: 'Une décision rapide, pas une fuite.' },
  ],
  closing: { fr: 'Pour la première fois depuis longtemps, Berthier choisit ses mots avec soin.', en: 'For the first time in a long while, Berthier chooses his words with care.' },
  audio: REC('rec-c2-03-lendemain-article'), say: REFRAME, terms: ['image'],
};

const A6_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a6-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-reputation-destin',
  title: 'Monter, puis tomber', frSub: 'Cinq expressions de la réputation',
  hint: 'Cinq cartes. Une réputation se gagne lentement, se perd d’un coup.',
  audio: REC('rec-c2-03-reputation-cinq'), say: REFRAME, terms: ['image'],
  cards: [
    card(E(1870), 'jouir d’une réputation sans tache', 'intact', "Être respecté, sans aucun scandale attaché à son nom. EN: to be respected, with no scandal attached to one’s name."),
    card(E(1871), 'ternir sa réputation', 'abîmer', "Salir une bonne image, parfois pour longtemps. EN: to tarnish a good image, sometimes for a long time."),
    card(E(1872), 'se couvrir de ridicule', 'tomber', "S’exposer soi-même au ridicule par une parole ou un geste maladroit. EN: to cover oneself in ridicule through a clumsy word or act."),
    card(E(1873), 'tomber en disgrâce', 'tomber', "Perdre brusquement la faveur dont on bénéficiait. EN: to suddenly lose the favour one used to enjoy."),
    card(E(1874), 'perdre la face', 'tomber', "Perdre sa dignité publique devant les autres. EN: to lose one’s public dignity in front of others."),
  ],
};

const A6_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a6-table', layer: 'core', sheetId: 'sheet-reputation-destin',
  title: 'Cinq expressions de plus',
  cols: ['Expression', 'Sens figuré'],
  rows: [
    tapRow(['sauver la face', 'préserver sa dignité au dernier moment'], E(1875), 'Le contraire de perdre la face', 'Un simple communiqué a suffi à sauver la face du cabinet. EN: a simple press release was enough to save the firm’s face.'),
    tapRow(['se targuer de', 'se vanter d’un mérite, parfois sans le posséder'], E(1876), 'Une fierté, pas toujours justifiée', 'Le candidat se targue d’une expérience qu’il n’a jamais eue. EN: the candidate boasts of an experience he never had.'),
    tapRow(['être la coqueluche de', 'être l’objet d’un engouement général'], E(1877), 'Une popularité, souvent passagère', 'Cette autrice est devenue la coqueluche des salons littéraires. EN: this author has become the darling of the literary salons.'),
    tapRow(['essuyer un affront', 'subir une insulte publique'], E(1878), 'Un coup reçu, pas donné', 'Le ministre a essuyé un affront public devant les caméras. EN: the minister suffered a public affront in front of the cameras.'),
    tapRow(['laver un affront', 'effacer une insulte par une réponse ou un geste'], E(1879), 'Une réparation, pas une vengeance', 'Il n’a trouvé qu’un moyen pour laver cet affront : démissionner. EN: he found only one way to wipe out that affront: resign.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['image'],
};

const A6_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-groupe', layer: 'core', size: 'lg',
  title: 'Monter, tomber ou se relever', frSub: 'Classe les dix expressions',
  groups: [
    grp('La chute', [
      it(E(1872), 'se couvrir de ridicule : par sa propre faute'),
      it(E(1873), 'tomber en disgrâce : par la faute des autres'),
      it(E(1874), 'perdre la face : devant témoins'),
    ], chk('Laquelle de ces trois expressions dit une chute causée par SOI-MÊME, pas par les autres.', ['se couvrir de ridicule', 'tomber en disgrâce'], 0,
      'Se couvrir de ridicule, c’est causer soi-même sa propre chute. EN: se couvrir de ridicule means causing one’s own fall.')),
    grp('Recevoir, puis répondre', [
      it(E(1878), 'essuyer un affront : recevoir'),
      it(E(1879), 'laver un affront : répondre'),
    ], chk('« Essuyer » et « laver » un affront sont...', ['le même geste', 'deux moments opposés : recevoir, puis répondre'], 1,
      'On essuie l’affront d’abord ; on le lave ensuite, si on le peut. EN: you essuyer the affront first; you laver it afterwards, if you can.')),
    ctl('Une popularité fragile', '« Être la coqueluche de » décrit une popularité...', ['durable et stable', 'souvent passagère, liée à un moment'], 1,
      'La coqueluche d’un salon peut cesser de l’être très vite. EN: the darling of a salon can stop being one very quickly.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['image'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a6-piege', layer: 'core', swipe: true,
  title: 'Six expressions, un seul mot qui dérape',
  rule: {
    title: 'Un article, une préposition, un genre : la faute discrète',
    body: 'Ces six phrases sont correctes dans toute autre situation ; un seul détail fait qu’elles ratent l’expression figée exacte. EN: these six sentences would be fine elsewhere; one single detail makes them miss the exact fixed idiom.',
  },
  cards: [
    trap(E(1872), '/ɑ̃ njɑ̃ le.vi.dɑ̃s lə pɔʁt.pa.ʁɔl sɛ ku.vɛʁ də ʁi.di.kyl/', 'se couvrir de RISÉE', 'En niant l’évidence, le porte-parole s’est couvert de risée.', 'C’est « se couvrir de ridicule », jamais « de risée ». EN: it is se couvrir de ridicule, never de risée.'),
    trap(E(1873), '/lɑ̃.sjɛ̃ fa.vɔ.ʁi dy kɔ̃.sɛj ɛ tɔ̃.be ɑ̃ diz.gʁas ɑ̃.nœ̃ mwa/', 'tomber DANS disgrâce', 'L’ancien favori du conseil est tombé dans disgrâce en un mois.', 'C’est « tomber EN disgrâce », jamais « dans disgrâce ». EN: it is tomber EN disgrâce, never dans disgrâce.'),
    trap(E(1874), '/lə pʁe.zi.dɑ̃ a pʁe.fe.ʁe tʁɑ̃.zi.ʒe ply.to kə də pɛʁdʁ la fas/', 'perdre SA face', 'Le président a préféré transiger plutôt que de perdre sa face.', 'C’est « perdre LA face », jamais « sa face ». EN: it is perdre LA face, never sa face.'),
    trap(E(1875), '/œ̃ sɛ̃pl kɔ.my.ni.ke a sy.fi a so.ve la fas dy ka.bi.nɛ/', 'sauver SA face', 'Un simple communiqué a suffi à sauver sa face du cabinet.', 'C’est « sauver LA face », jamais « sa face ». EN: it is sauver LA face, never sa face.'),
    trap(E(1876), '/lə kɑ̃.di.da sə taʁg dyn ɛks.pe.ʁjɑ̃s kil na ʒa.mɛ y/', 'se targuer À', 'Le candidat se targue à une expérience qu’il n’a jamais eue.', 'C’est « se targuer DE », jamais « à ». EN: it is se targuer DE, never à.'),
    trap(E(1878), '/lə mi.nistʁ a e.sɥi.je œ̃.na.fʁɔ̃ py.blik də.vɑ̃ le ka.me.ʁa/', 'essuyer UNE affront', 'Le ministre a essuyé une affront public devant les caméras.', '« Affront » est masculin : « un affront », jamais « une affront ». EN: affront is masculine: un affront, never une affront.'),
  ],
  drill: [
    { promptSay: 'S’exposer au ridicule par sa propre maladresse, c’est se couvrir de ... .', opts: ['risée', 'ridicule'], correct: 1 },
    { promptSay: 'Perdre brusquement une faveur, c’est tomber ... disgrâce.', opts: ['dans', 'en'], correct: 1 },
    { promptSay: 'Perdre sa dignité publique devant les autres, c’est perdre ... face.', opts: ['sa', 'la'], correct: 1 },
    { promptSay: 'Préserver sa dignité au dernier moment, c’est sauver ... face.', opts: ['sa', 'la'], correct: 1 },
    { promptSay: 'Se vanter d’un mérite qu’on n’a pas forcément, c’est se targuer ... une expérience.', opts: ['à', 'de'], correct: 1 },
    { promptSay: 'Subir une insulte publique, c’est essuyer un ... .', opts: ['affront', 'affronte'], correct: 0 },
    { promptSay: 'Dans ces six expressions, ce qui change tout est le plus souvent...', opts: ['un article ou une préposition', 'le sens général de la phrase'], correct: 0 },
    { promptSay: 'Une réputation se gagne lentement et...', opts: ['tombe en une phrase', 'ne change jamais'], correct: 0 },
  ],
  steps: STEPS_STD('Six expressions de la réputation'),
  audio: REC('rec-c2-03-piege-reputation'), say: REFRAME, terms: ['motsFixes'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La chute', '« Se couvrir de ridicule » dit une chute causée par...', ['les autres', 'soi-même'], 1,
    'On se couvre soi-même de ridicule, par sa propre maladresse. EN: you cover yourself in ridicule, through your own clumsiness.'),
  ctl('Recevoir puis répondre', '« Essuyer un affront » et « laver un affront » sont...', ['le même geste', 'deux moments différents : recevoir, puis répondre'], 1,
    'On essuie l’affront, puis on le lave si on le peut. EN: you suffer the affront, then wipe it out if you can.'),
  ctl('Le mot qui dérape', 'Entre « perdre la face » et « perdre sa face », la forme figée correcte est...', ['perdre sa face', 'perdre la face'], 1,
    'Seule « la face » est l’expression figée, jamais « sa face ». EN: only la face is the fixed expression, never sa face.'),
], ['image', 'motsFixes']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'La réputation et la disgrâce',
    opener: {
      line: "Berthier choisit enfin ses mots avec soin : ici tu apprends dix façons soutenues de dire qu’une réputation monte, tombe ou se répare. EN: Berthier finally chooses his words with care: here you learn ten elevated ways to say a reputation rises, falls or is repaired.",
      imageRef: 'lessons/c2-03-cent-idiomes/act06.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais et emploies dix expressions soutenues de la réputation et de la disgrâce. EN: You can recognise and use ten elevated idioms of reputation and disgrace.',
    estScreens: 32, restPoints: ['a6-table', 'a6-groupe'],
  },
  sections: [A6_HISTOIRE, A6_DECK, A6_TABLE, A6_GROUPE, A6_PIEGE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LE DESTIN ET L’INÉLUCTABLE
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a7-ecoute', layer: 'core', hideLines: true,
  title: 'Quel destin entends-tu', frSub: 'Huit phrases sur le destin et l’inéluctable',
  lines: [ln(E(1885)), ln(E(1886)), ln(E(1887)), ln(E(1888)), ln(E(1890)), ln(E(1891)), ln(E(1892)), ln(E(1893))],
  questions: [
    { q: 'Première phrase : « être voué à l’échec » dit un échec...', opts: ['encore évitable, par un effort', 'déjà écrit, presque certain'], correct: 1,
      why: 'Être voué à quelque chose, c’est y être comme destiné d’avance. EN: être voué à something means being destined to it in advance.' },
    { q: 'Troisième phrase : « le sort en est jeté » signifie que...', opts: ['on peut encore tout changer', 'la décision est prise, sans retour possible'], correct: 1,
      why: 'Le sort en est jeté marque un point sans retour. EN: le sort en est jeté marks a point of no return.' },
    { q: 'Cinquième phrase : « avoir maille à partir avec quelqu’un » décrit...', opts: ['une amitié solide', 'un conflit ou un différend qui dure'], correct: 1,
      why: 'Avoir maille à partir avec quelqu’un, c’est être en désaccord durable avec lui. EN: avoir maille à partir avec someone means being in a lasting dispute with them.' },
    { q: 'Septième phrase : « être à la merci de » dit une situation...', opts: ['de plein contrôle', 'de dépendance totale envers un risque'], correct: 1,
      why: 'Être à la merci de quelque chose, c’est dépendre entièrement de lui, sans protection. EN: être à la merci de something means depending entirely on it, with no protection.' },
  ],
  audio: REC('rec-c2-03-destin-ecoute'), say: REFRAME, terms: ['image'],
};

const A7_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a7-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-reputation-destin',
  title: 'Ce qui semble écrit d’avance', frSub: 'Cinq expressions du destin',
  hint: 'Cinq cartes. Le sort, la perte, la marque qui reste.',
  audio: REC('rec-c2-03-destin-cinq'), say: REFRAME, terms: ['image'],
  cards: [
    card(E(1885), 'être voué à', 'inéluctable', "Sembler destiné d’avance à un résultat, bon ou mauvais. EN: to seem destined in advance to an outcome, good or bad."),
    card(E(1886), 'courir à sa perte', 'inéluctable', "Aller droit vers son propre échec, sans le voir venir. EN: to head straight for one’s own downfall, without seeing it coming."),
    card(E(1887), 'le sort en est jeté', 'inéluctable', "La décision est prise, sans retour possible désormais. EN: the decision is made, with no turning back now."),
    card(E(1888), 'tirer un trait sur', 'accepter', "Accepter de laisser définitivement quelque chose derrière soi. EN: to definitively leave something behind, accepting it is over."),
    card(E(1889), 'être marqué du sceau de', 'marqué', "Porter la marque durable d’un événement précis. EN: to bear the lasting mark of a specific event."),
  ],
};

const A7_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a7-table', layer: 'core', sheetId: 'sheet-reputation-destin',
  title: 'Cinq expressions de plus',
  cols: ['Expression', 'Sens figuré'],
  rows: [
    tapRow(['avoir maille à partir avec', 'être en conflit durable avec quelqu’un'], E(1890), 'Un différend, pas une rupture', 'Le promoteur a maille à partir avec la mairie depuis deux ans. EN: the developer has had a running dispute with the town hall for two years.'),
    tapRow(['forcer le destin', 'tenter d’imposer un résultat au hasard'], E(1891), 'Une tentative, pas une garantie', 'En republiant ce texte, l’éditeur a voulu forcer le destin. EN: by republishing this text, the publisher tried to force fate’s hand.'),
    tapRow(['être à la merci de', 'dépendre entièrement d’un risque'], E(1892), 'Une fragilité totale', 'Sans ce contrat, l’atelier est à la merci du moindre retard. EN: without this contract, the workshop is at the mercy of the smallest delay.'),
    tapRow(['jouer son destin sur un coup de dés', 'risquer tout sur une seule chance'], E(1893), 'Un hasard total, assumé', 'Le fondateur a joué son destin sur un coup de dés. EN: the founder staked his fate on a single roll of the dice.'),
    tapRow(['sceller son destin', 'rendre un sort définitif par un seul acte'], E(1894), 'Un seul geste, une issue fixée', 'Ce discours malheureux a scellé le destin du candidat. EN: that unfortunate speech sealed the candidate’s fate.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['image'],
};

const A7_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-groupe', layer: 'core', size: 'lg',
  title: 'Écrit d’avance, ou forcé', frSub: 'Classe les dix expressions',
  groups: [
    grp('Le sort semble déjà écrit', [
      it(E(1885), 'être voué à'),
      it(E(1886), 'courir à sa perte'),
      it(E(1887), 'le sort en est jeté'),
    ], chk('Ces trois expressions décrivent...', ['un résultat qu’on tente d’éviter activement', 'un résultat qui semble déjà fixé'], 1,
      'Les trois disent un destin déjà tracé, pas une lutte en cours. EN: all three name a fate already set, not an ongoing fight.')),
    grp('Agir sur son propre destin', [
      it(E(1891), 'forcer le destin : tenter d’agir'),
      it(E(1893), 'jouer son destin sur un coup de dés : tout risquer'),
      it(E(1894), 'sceller son destin : fixer le résultat'),
    ], chk('Ces trois expressions, contrairement au premier groupe, montrent quelqu’un qui...', ['subit son destin sans agir', 'agit, volontairement, sur son propre destin'], 1,
      'Forcer, jouer, sceller : trois verbes d’une action VOLONTAIRE sur le destin. EN: forcer, jouer, sceller: three verbs of a voluntary act upon fate.')),
    ctl('La marque qui reste', 'Entre « être marqué du sceau de » et « tirer un trait sur », laquelle dit qu’on laisse le passé DERRIÈRE soi.', ['être marqué du sceau de', 'tirer un trait sur'], 1,
      'Tirer un trait sur, c’est accepter de passer à autre chose ; être marqué du sceau de, c’est porter la trace pour toujours. EN: tirer un trait sur means moving on; être marqué du sceau de means carrying the mark forever.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['image'],
};

const A7_PIEGE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-piege', layer: 'core', size: 'lg',
  title: 'Quatre pièges, un seul mot faux', frSub: 'Laquelle des deux formes existe',
  groups: [
    ctl('Vers sa perte', 'Laquelle de ces deux formes est la bonne préposition.', ['courir vers sa perte', 'courir à sa perte'], 1,
      'C’est « courir À sa perte », jamais « vers sa perte ». EN: it is courir À sa perte, never vers sa perte.'),
    ctl('Un trait sur le passé', 'Laquelle de ces deux formes est l’expression figée.', ['tirer une ligne sur', 'tirer un trait sur'], 1,
      'C’est « tirer un TRAIT sur », jamais « une ligne sur ». EN: it is tirer un TRAIT sur, never une ligne sur.'),
    ctl('À la merci', 'Laquelle de ces deux formes est correcte.', ['être à la merci à quelque chose', 'être à la merci de quelque chose'], 1,
      'C’est « être à la merci DE », jamais une double préposition « à... à ». EN: it is être à la merci DE, never a double preposition.'),
    ctl('Sceller le destin', 'Laquelle de ces deux formes est l’expression figée.', ['sceller le destin', 'sceller son destin'], 1,
      'C’est « sceller SON destin » (le destin de quelqu’un en particulier), jamais « le destin » seul dans cette expression. EN: it is sceller SON destin (a particular person’s fate), never le destin alone in this idiom.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['motsFixes'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Déjà écrit', '« Être voué à » et « le sort en est jeté » décrivent...', ['un résultat encore ouvert', 'un résultat qui semble déjà fixé'], 1,
    'Les deux expressions disent un destin déjà tracé. EN: both idioms name a fate already set.'),
  ctl('Agir sur son destin', '« Forcer le destin » et « sceller son destin » montrent une personne qui...', ['subit, sans agir', 'agit volontairement sur son propre sort'], 1,
    'Les deux verbes disent une action volontaire. EN: both verbs name a voluntary act.'),
  ctl('Le mot qui dérape', 'Entre « courir à sa perte » et « courir vers sa perte », la forme figée est...', ['courir vers sa perte', 'courir à sa perte'], 1,
    'Seule « à sa perte » est l’expression figée. EN: only à sa perte is the fixed expression.'),
], ['image', 'motsFixes']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Le destin et l’inéluctable',
    opener: {
      line: "Le vote est clos, le sort en est jeté : ici tu apprends dix façons soutenues de dire ce qui semble écrit d’avance, et ce qu’on tente encore de forcer. EN: The vote is closed, the die is cast: here you learn ten elevated ways to name what seems already written, and what one still tries to force.",
      imageRef: 'lessons/c2-03-cent-idiomes/act07.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais et emploies dix expressions soutenues du destin et de l’inéluctable. EN: You can recognise and use ten elevated idioms of fate and inevitability.',
    estScreens: 32, restPoints: ['a7-table', 'a7-groupe'],
  },
  sections: [A7_ECOUTE, A7_DECK, A7_TABLE, A7_GROUPE, A7_PIEGE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LE TEMPS, LA MÉMOIRE ET L’OUBLI
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a8-lecture', layer: 'core', questionsInModal: true,
  title: 'Le bilan de Berthier', frSub: 'À l’aube de la retraite',
  text: "À l’aube de sa retraite, le juge Berthier regarde son parcours avec un œil différent. Peu de ses décisions ont résisté à l’épreuve du temps, reconnaît-il enfin. Certaines, pourtant, restent gravées dans le marbre du droit local. D’autres sont tombées dans l’oubli dès l’année suivante. On n’avait pas vu, de mémoire d’homme, un juge revenir ainsi sur son propre bilan.",
  glossary: [
    { word: 'parcours', en: 'career path', note: 'L’ensemble du chemin professionnel suivi. EN: the whole professional path followed.' },
  ],
  questions: [
    { q: "Devine le sens, sans dictionnaire : « peu de ses décisions ont résisté à l’épreuve du temps ». Que dit cette phrase sur son héritage.", a: 'Que la plupart de ses décisions ont fini par paraître dépassées ou fausses, avec le temps.' },
    { q: "Pourquoi certaines décisions sont-elles dites « gravées dans le marbre » plutôt que « tombées dans l’oubli ».", a: 'Parce que ces décisions-là ont marqué durablement le droit local, au contraire des autres, vite oubliées.' },
    { q: "Qu’est-ce que « de mémoire d’homme » ajoute à la dernière phrase.", a: 'Que la situation est exceptionnelle, inédite dans toute la période dont on garde le souvenir.' },
  ],
  audio: REC('rec-c2-03-bilan-berthier'), say: REFRAME, terms: ['image'],
};

const A8_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a8-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-temps-parole',
  title: 'L’aube, le crépuscule, le marbre', frSub: 'Cinq expressions du temps',
  hint: 'Cinq cartes. Dater un propos, sans dire une date.',
  audio: REC('rec-c2-03-temps-cinq'), say: REFRAME, terms: ['image'],
  cards: [
    card(E(1900), 'de mémoire d’homme', 'rare', "Dans toute la période dont on garde le souvenir ; du jamais-vu. EN: within the whole period anyone remembers; unprecedented."),
    card(E(1901), 'à l’aube de', 'début', "Au tout début d’une période ou d’un changement. EN: at the very beginning of a period or a change."),
    card(E(1902), 'au crépuscule de', 'fin', "Vers la fin d’une période, souvent une carrière. EN: toward the end of a period, often a career."),
    card(E(1903), 'résister à l’épreuve du temps', 'durer', "Rester valable malgré les années qui passent. EN: to remain valid despite the years going by."),
    card(E(1904), 'graver dans le marbre', 'fixer', "Fixer quelque chose de façon définitive, comme pour toujours. EN: to fix something permanently, as if forever."),
  ],
};

const A8_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a8-table', layer: 'core', sheetId: 'sheet-temps-parole',
  title: 'Cinq expressions de plus',
  cols: ['Expression', 'Sens figuré'],
  rows: [
    tapRow(['passer à la postérité', 'être retenu par l’histoire'], E(1905), 'Parfois pour une seule phrase', 'Le discours est passé à la postérité pour une seule phrase. EN: the speech went down in history for a single sentence.'),
    tapRow(['tomber dans l’oubli', 'être complètement oublié'], E(1906), 'Le contraire de passer à la postérité', 'Le projet, pourtant ambitieux, est vite tombé dans l’oubli. EN: the project, ambitious as it was, soon fell into oblivion.'),
    tapRow(['s’inscrire dans la durée', 'rester valable sur le long terme'], E(1907), 'Une condition, pas une certitude', 'La réforme ne s’inscrira dans la durée que sous deux conditions. EN: the reform will only last if two conditions are met.'),
    tapRow(['avoir fait son temps', 'être désormais dépassé'], E(1908), 'Une fin naturelle, pas une faute', 'Selon elle, ce modèle économique a fait son temps. EN: according to her, this economic model has had its day.'),
    tapRow(['être d’un autre temps', 'paraître appartenir à une autre époque'], E(1909), 'Un décalage, pas forcément un défaut', 'Ce discours martial paraît d’un autre temps. EN: that martial speech seems to belong to another era.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['image'],
};

const A8_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-groupe', layer: 'core', size: 'lg',
  title: 'Dater un propos', frSub: 'Classe les dix expressions',
  groups: [
    grp('Le début et la fin', [
      it(E(1901), 'à l’aube de : le début'),
      it(E(1902), 'au crépuscule de : la fin'),
    ], chk('« À l’aube de » et « au crépuscule de » forment...', ['la même idée répétée', 'une paire opposée : début, puis fin'], 1,
      'L’aube ouvre une période ; le crépuscule la ferme. EN: dawn opens a period; twilight closes it.')),
    grp('Durer, ou disparaître', [
      it(E(1903), 'résister à l’épreuve du temps : durer'),
      it(E(1906), 'tomber dans l’oubli : disparaître'),
      it(E(1908), 'avoir fait son temps : s’éteindre naturellement'),
    ], chk('Laquelle de ces trois expressions dit une fin SANS faute, juste naturelle.', ['tomber dans l’oubli', 'avoir fait son temps'], 1,
      'Avoir fait son temps décrit une fin naturelle, pas un échec soudain. EN: avoir fait son temps names a natural end, not a sudden failure.')),
    ctl('Retenu par l’histoire', 'Entre « passer à la postérité » et « s’inscrire dans la durée », laquelle implique un jugement de l’HISTOIRE, pas seulement du présent.', ['s’inscrire dans la durée', 'passer à la postérité'], 1,
      'Passer à la postérité, c’est être retenu par les générations suivantes. EN: passer à la postérité means being remembered by later generations.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['image'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a8-piege', layer: 'core', swipe: true,
  title: 'Six expressions, un seul mot qui dérape',
  rule: {
    title: 'Un article ou une préposition en trop, et l’image se brise',
    body: 'Ces six phrases sonnent presque juste ; un seul mot ajouté ou changé les rend fausses. EN: these six sentences sound almost right; one word added or changed makes them wrong.',
  },
  cards: [
    trap(E(1900), '/ɔ̃ na.vɛ pa vy pa.ʁɛj se.ʃə.ʁɛs də me.mwaʁ dɔm/', 'de mémoire DE L’homme', 'On n’avait pas vu pareille sécheresse de mémoire de l’homme.', 'C’est « de mémoire D’homme », sans article, jamais « de l’homme ». EN: it is de mémoire D’homme, with no article, never de l’homme.'),
    trap(E(1901), '/lə pɛ.i sə tʁu.vɛ a lob dœ̃ nu.vo sikl pɔ.li.tik/', 'DANS l’aube de', 'Le pays se trouvait dans l’aube d’un nouveau cycle politique.', 'C’est « À l’aube de », jamais « dans l’aube de ». EN: it is À l’aube de, never dans l’aube de.'),
    trap(E(1903), '/pø də se de.si.zjɔ̃ ɔ̃ ʁe.zis.te a le.pʁœv dy tɑ̃/', 'l’épreuve DE temps', 'Peu de ses décisions ont résisté à l’épreuve de temps.', 'C’est « l’épreuve DU temps », avec l’article, jamais « de temps ». EN: it is l’épreuve DU temps, with the article, never de temps.'),
    trap(E(1904), '/ʁjɛ̃ dɑ̃ sə dɔ.mɛn nɛ ʒa.mɛ gʁa.ve dɑ̃ lə maʁbʁ/', 'graver SUR le marbre', 'Rien, dans ce domaine, n’est jamais gravé sur le marbre.', 'C’est « graver DANS le marbre », jamais « sur le marbre ». EN: it is graver DANS le marbre, never sur le marbre.'),
    trap(E(1906), '/lə pʁɔ.ʒɛ puʁ.tɑ̃ ɑ̃.bi.sjø ɛ vit tɔ̃.be dɑ̃ lu.bli/', 'tomber EN l’oubli', 'Le projet, pourtant ambitieux, est vite tombé en l’oubli.', 'C’est « tomber DANS l’oubli », jamais « en l’oubli ». EN: it is tomber DANS l’oubli, never en l’oubli.'),
    trap(E(1908), '/sə.lɔ̃.nɛl sə mɔ.dɛl e.kɔ.nɔ.mik a fɛ sɔ̃ tɑ̃/', 'avoir fait LE temps', 'Selon elle, ce modèle économique a fait le temps.', 'C’est « avoir fait SON temps », jamais « le temps ». EN: it is avoir fait SON temps, never le temps.'),
  ],
  drill: [
    { promptSay: 'Dans toute la période dont on garde le souvenir, c’est de mémoire ... homme.', opts: ['de l’', 'd’'], correct: 1 },
    { promptSay: 'Au tout début d’un changement, c’est ... l’aube de ce changement.', opts: ['dans', 'à'], correct: 1 },
    { promptSay: 'Rester valable malgré les années, c’est résister à l’épreuve ... temps.', opts: ['de', 'du'], correct: 1 },
    { promptSay: 'Fixer quelque chose pour toujours, c’est le graver ... le marbre.', opts: ['sur', 'dans'], correct: 1 },
    { promptSay: 'Être complètement oublié, c’est tomber ... l’oubli.', opts: ['en', 'dans'], correct: 1 },
    { promptSay: 'Être désormais dépassé, naturellement, c’est avoir fait ... temps.', opts: ['le', 'son'], correct: 1 },
    { promptSay: 'Dans ces six expressions, le détail qui change tout est le plus souvent...', opts: ['un article ou une préposition', 'le nombre de mots de la phrase'], correct: 0 },
    { promptSay: 'Une expression figée garde ses mots : un article ajouté la rend...', opts: ['plus soutenue', 'inexistante'], correct: 1 },
  ],
  steps: STEPS_STD('Six expressions du temps'),
  audio: REC('rec-c2-03-piege-temps'), say: REFRAME, terms: ['motsFixes'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Début et fin', '« À l’aube de » et « au crépuscule de » forment...', ['la même idée', 'une paire opposée : début, puis fin'], 1,
    'L’une ouvre une période, l’autre la ferme. EN: one opens a period, the other closes it.'),
  ctl('Durer ou disparaître', '« Résister à l’épreuve du temps » et « tomber dans l’oubli » sont...', ['la même idée', 'presque des contraires'], 1,
    'L’une dit la permanence, l’autre l’effacement. EN: one names permanence, the other erasure.'),
  ctl('Le mot qui dérape', 'Entre « de mémoire d’homme » et « de mémoire de l’homme », la forme figée est...', ['de mémoire de l’homme', 'de mémoire d’homme'], 1,
    'Seule la forme sans article est l’expression figée. EN: only the article-free form is the fixed expression.'),
], ['image', 'motsFixes']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Le temps, la mémoire et l’oubli',
    opener: {
      line: "À l’aube de sa retraite, Berthier revoit tout son parcours : ici tu apprends dix façons soutenues de dater un propos, sans jamais dire une date. EN: At the dawn of his retirement, Berthier looks back on his whole career: here you learn ten elevated ways to date a statement, without ever naming a date.",
      imageRef: 'lessons/c2-03-cent-idiomes/act08.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais et emploies dix expressions soutenues du temps, de la mémoire et de l’oubli. EN: You can recognise and use ten elevated idioms of time, memory and oblivion.',
    estScreens: 32, restPoints: ['a8-table', 'a8-groupe'],
  },
  sections: [A8_LECTURE, A8_DECK, A8_TABLE, A8_GROUPE, A8_PIEGE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — LA PAROLE SOUTENUE
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a9-histoire', layer: 'core',
  title: 'Deux styles, un même débat', frSub: 'Inès couvre le débat des deux candidats',
  setting: 'Inès couvre le débat entre les deux candidats à la mairie, pour sa chronique du lendemain.',
  bubbles: [
    { from: 'narrator', fr: 'Les deux candidats rivalisent de formules, pendant deux heures.', en: 'The two candidates compete in fine phrases, for two hours.' },
    { from: 'user', fr: src(E(1920)).fr, en: src(E(1920)).en },
    { from: 'narrator', fr: 'L’un des deux, pourtant, évite toujours les questions précises.', en: 'One of the two, however, always dodges the precise questions.' },
    { from: 'user', fr: src(E(1917)).fr, en: src(E(1917)).en, warn: 'Une observation, pas une accusation gratuite.' },
  ],
  closing: { fr: 'Inès referme son carnet : l’autre candidat, lui, ne mâche pas ses mots.', en: 'Inès closes her notebook: the other candidate, by contrast, does not mince his words.' },
  audio: REC('rec-c2-03-deux-styles'), say: REFRAME, terms: ['image'],
};

const A9_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a9-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-temps-parole',
  title: 'Peser, voiler, convenir', frSub: 'Cinq expressions de la parole',
  hint: 'Cinq cartes. Parler peut cacher autant que révéler.',
  audio: REC('rec-c2-03-parole-cinq'), say: REFRAME, terms: ['image'],
  cards: [
    card(E(1915), 'peser ses mots', 'soin', "Choisir chaque mot avec une attention particulière. EN: to choose every word with particular care."),
    card(E(1916), 'avoir le verbe haut', 'assurance', "Parler fort et avec assurance, parfois jusqu’à dominer la conversation. EN: to speak loudly and assertively, sometimes to the point of dominating the conversation."),
    card(E(1917), 'manier la langue de bois', 'esquive', "Parler en formules vagues, pour ne rien dire de précis. EN: to speak in vague, evasive political formulas."),
    card(E(1918), 'se payer de mots', 'illusion', "Se contenter de belles paroles, sans rien de concret derrière. EN: to be satisfied with fine words, with nothing concrete behind them."),
    card(E(1919), 'tenir un discours convenu', 'banalité', "Parler de façon prévisible, sans rien dire de nouveau. EN: to speak in a predictable way, saying nothing new."),
  ],
};

const A9_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a9-table', layer: 'core', sheetId: 'sheet-temps-parole',
  title: 'Cinq expressions de plus',
  cols: ['Expression', 'Sens figuré'],
  rows: [
    tapRow(['faire assaut d’éloquence', 'rivaliser d’habileté dans un discours'], E(1920), 'Une compétition de style', 'Les deux candidats ont fait assaut d’éloquence pendant deux heures. EN: the two candidates vied in eloquence for two hours.'),
    tapRow(['s’exprimer à mots couverts', 'parler sans tout dire ouvertement'], E(1921), 'Une prudence, pas un mensonge', 'Le rapport s’exprime à mots couverts sur les vraies causes. EN: the report speaks in veiled terms about the real causes.'),
    tapRow(['ne pas mâcher ses mots', 'parler avec une franchise directe'], E(1922), 'L’opposé de la langue de bois', 'La nouvelle directrice ne mâche pas ses mots devant le conseil. EN: the new director does not mince her words before the board.'),
    tapRow(['tourner une phrase', 'construire une phrase avec art'], E(1923), 'Un talent d’écriture', 'Peu d’auteurs savent tourner une phrase avec autant de soin. EN: few authors know how to turn a phrase with such care.'),
    tapRow(['avoir le don de la parole', 'parler avec un talent naturel'], E(1924), 'Un talent, pas un apprentissage', 'Son grand-père avait le don de la parole, disait-on. EN: his grandfather had the gift of speech, people used to say.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['image'],
};

const A9_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-groupe', layer: 'core', size: 'lg',
  title: 'Révéler, cacher ou briller', frSub: 'Classe les dix expressions',
  groups: [
    grp('Cacher sous les mots', [
      it(E(1917), 'la langue de bois : vague à dessein'),
      it(E(1918), 'se payer de mots : des mots sans substance'),
      it(E(1921), 'à mots couverts : sans tout dire'),
    ], chk('Ces trois expressions ont en commun...', ['une clarté totale', 'une parole qui cache plus qu’elle ne révèle'], 1,
      'Les trois décrivent une parole qui esquive, sans mentir ouvertement. EN: all three describe speech that dodges, without lying outright.')),
    grp('Un vrai talent', [
      it(E(1923), 'tourner une phrase : un art d’écriture'),
      it(E(1924), 'le don de la parole : un talent naturel'),
    ], chk('Ces deux expressions désignent toutes deux...', ['un défaut à corriger', 'un vrai talent, admiré'], 1,
      'Les deux expressions complimentent, elles ne critiquent pas. EN: both idioms compliment, they do not criticise.')),
    ctl('Franc, ou prévisible', 'Entre « ne pas mâcher ses mots » et « tenir un discours convenu », laquelle complimente la FRANCHISE.', ['tenir un discours convenu', 'ne pas mâcher ses mots'], 1,
      'Ne pas mâcher ses mots complimente la franchise ; tenir un discours convenu critique la banalité. EN: ne pas mâcher ses mots praises frankness; tenir un discours convenu criticises predictability.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['image'],
};

const A9_PIEGE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-piege', layer: 'core', size: 'lg',
  title: 'Quatre pièges, un seul mot faux', frSub: 'Laquelle des deux formes existe',
  groups: [
    ctl('Mâcher ses mots', 'Laquelle de ces deux formes est l’expression figée.', ['ne pas mâcher ses paroles', 'ne pas mâcher ses mots'], 1,
      'C’est « ne pas mâcher ses MOTS », jamais « ses paroles » dans cette expression précise. EN: it is ne pas mâcher ses MOTS, never ses paroles in this exact idiom.'),
    ctl('Le verbe haut', 'Laquelle de ces deux formes est l’expression figée pour « parler fort et avec assurance ».', ['avoir la voix haute', 'avoir le verbe haut'], 1,
      'C’est « avoir le VERBE haut » ; « avoir la voix haute » n’est pas l’expression figée, même si elle semble proche. EN: it is avoir le VERBE haut; avoir la voix haute is not the fixed idiom, even though it sounds close.'),
    ctl('Se payer de mots', 'Laquelle de ces deux formes est la bonne préposition.', ['se payer en mots', 'se payer de mots'], 1,
      'C’est « se payer DE mots », jamais « en mots ». EN: it is se payer DE mots, never en mots.'),
    ctl('Peser ses mots', 'Laquelle de ces deux formes est l’expression figée.', ['peser ses paroles', 'peser ses mots'], 1,
      'C’est « peser ses MOTS », le même piège mots/paroles que pour « ne pas mâcher ses mots ». EN: it is peser ses MOTS, the same mots/paroles trap as ne pas mâcher ses mots.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['motsFixes'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Cacher sous les mots', '« La langue de bois » et « se payer de mots » décrivent une parole qui...', ['révèle tout clairement', 'cache plus qu’elle ne révèle'], 1,
    'Les deux expressions décrivent une parole évasive. EN: both idioms describe evasive speech.'),
  ctl('Un vrai talent', '« Tourner une phrase » et « avoir le don de la parole » sont...', ['des critiques', 'des compliments'], 1,
    'Les deux expressions admirent un vrai talent. EN: both idioms admire a genuine talent.'),
  ctl('Le mot qui dérape', 'Entre « ne pas mâcher ses mots » et « ne pas mâcher ses paroles », la forme figée est...', ['ne pas mâcher ses paroles', 'ne pas mâcher ses mots'], 1,
    'Seule « ses mots » est l’expression figée. EN: only ses mots is the fixed expression.'),
], ['image', 'motsFixes']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'La parole soutenue',
    opener: {
      line: "Les deux candidats font assaut d’éloquence : ici tu apprends dix façons soutenues de dire ce qu’une parole révèle, et ce qu’elle cache. EN: The two candidates vie in eloquence: here you learn ten elevated ways to name what speech reveals, and what it hides.",
      imageRef: 'lessons/c2-03-cent-idiomes/act09.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais et emploies dix expressions soutenues de la parole. EN: You can recognise and use ten elevated idioms of elevated speech.',
    estScreens: 32, restPoints: ['a9-table', 'a9-groupe'],
  },
  sections: [A9_HISTOIRE, A9_DECK, A9_TABLE, A9_GROUPE, A9_PIEGE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — L’AMBITION, L’EFFORT ET L’ÉCHEC
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a10-ecoute', layer: 'core', hideLines: true,
  title: 'Quelle ambition entends-tu', frSub: 'Huit phrases sur l’ambition et l’échec',
  lines: [ln(E(1930)), ln(E(1931)), ln(E(1932)), ln(E(1933)), ln(E(1935)), ln(E(1936)), ln(E(1937)), ln(E(1939))],
  questions: [
    { q: 'Troisième phrase : « brûler ses vaisseaux » décrit une décision...', opts: ['réversible, qu’on peut annuler', 'sans retour possible, tous les ponts coupés'], correct: 1,
      why: 'Brûler ses vaisseaux, c’est se couper soi-même toute possibilité de reculer. EN: brûler ses vaisseaux means cutting off one’s own possibility of retreat.' },
    { q: 'Quatrième phrase : « jouer son va-tout » dit qu’on...', opts: ['garde une solution de secours', 'mise absolument tout sur un seul coup'], correct: 1,
      why: 'Jouer son va-tout, c’est risquer tout ce qu’on a, sans rien garder en réserve. EN: jouer son va-tout means risking everything one has, with nothing held back.' },
    { q: 'Sixième phrase : « essuyer un échec cuisant » décrit un échec...', opts: ['léger, vite oublié', 'douloureux, difficile à encaisser'], correct: 1,
      why: 'Cuisant renforce échec : la défaite fait vraiment mal. EN: cuisant intensifies échec: the defeat genuinely stings.' },
    { q: 'Huitième phrase : « toucher au but » signifie qu’on est...', opts: ['encore loin de réussir', 'tout près d’atteindre son objectif'], correct: 1,
      why: 'Toucher au but, c’est être presque arrivé, très proche du résultat visé. EN: toucher au but means being almost there, very close to the aimed-for result.' },
  ],
  audio: REC('rec-c2-03-ambition-ecoute'), say: REFRAME, terms: ['image'],
};

const A10_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a10-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-ambition-solitude',
  title: 'Viser, risquer, espérer', frSub: 'Cinq expressions de l’ambition',
  hint: 'Cinq cartes. Avant même le résultat.',
  audio: REC('rec-c2-03-ambition-cinq'), say: REFRAME, terms: ['image'],
  cards: [
    card(E(1930), 'viser haut', 'ambition', "Se fixer un objectif ambitieux, exigeant. EN: to set oneself an ambitious, demanding goal."),
    card(E(1931), 'voir grand', 'ambition', "Imaginer un projet à grande échelle, sans se limiter. EN: to imagine a project on a grand scale, without limiting oneself."),
    card(E(1932), 'brûler ses vaisseaux', 'risque', "S’engager sans retour possible, toute solution de recul détruite. EN: to commit with no way back, every escape route destroyed."),
    card(E(1933), 'jouer son va-tout', 'risque', "Risquer tout ce qu’on a sur une seule tentative. EN: to risk everything one has on a single attempt."),
    card(E(1934), 'caresser une ambition', 'espoir', "Nourrir un projet ambitieux depuis longtemps, sans encore agir. EN: to have long nurtured an ambitious plan, without yet acting on it."),
  ],
};

const A10_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a10-table', layer: 'core', sheetId: 'sheet-ambition-solitude',
  title: 'Cinq expressions de plus',
  cols: ['Expression', 'Sens figuré'],
  rows: [
    tapRow(['nourrir un espoir', 'garder un espoir vivant, sur la durée'], E(1935), 'Plus discret que « caresser »', 'Le village nourrit encore l’espoir de rouvrir son école. EN: the village still nurtures the hope of reopening its school.'),
    tapRow(['essuyer un échec cuisant', 'subir une défaite douloureuse'], E(1936), 'Une douleur réelle, pas seulement un revers', 'Le candidat a essuyé un échec cuisant au premier tour. EN: the candidate suffered a stinging defeat in the first round.'),
    tapRow(['sortir grandi de', 'devenir plus fort après une épreuve'], E(1937), 'Un échec qui renforce, malgré tout', 'Contre toute attente, l’équipe sort grandie de cet échec. EN: against all expectation, the team comes out of this failure stronger.'),
    tapRow(['renaître de ses cendres', 'se reconstruire après une destruction totale'], E(1938), 'être + rené/renée, jamais avoir', 'L’atelier est rené de ses cendres après l’incendie. EN: the workshop rose from its ashes after the fire.'),
    tapRow(['toucher au but', 'être tout près de réussir'], E(1939), 'Presque arrivé, pas encore arrivé', 'Après dix ans de travaux, la fondation touche enfin au but. EN: after ten years of work, the foundation is finally within reach of its goal.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['image'],
};

const A10_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-groupe', layer: 'core', size: 'lg',
  title: 'Viser, risquer ou se relever', frSub: 'Classe les dix expressions',
  groups: [
    grp('Tout risquer', [
      it(E(1932), 'brûler ses vaisseaux : pas de retour'),
      it(E(1933), 'jouer son va-tout : tout sur un coup'),
    ], chk('Ces deux expressions décrivent...', ['une prudence extrême', 'un engagement total, sans filet'], 1,
      'Les deux disent qu’on ne garde plus aucune solution de secours. EN: both say no backup option is kept at all.')),
    grp('Se relever après l’échec', [
      it(E(1936), 'un échec cuisant : la douleur'),
      it(E(1937), 'sortir grandi de : la force retrouvée'),
      it(E(1938), 'renaître de ses cendres : la reconstruction totale'),
    ], chk('Ces trois expressions, prises ensemble, racontent...', ['un échec final, sans suite', 'un échec, puis un retour, de plus en plus fort'], 1,
      'La douleur, puis la force, puis la reconstruction : un seul arc en trois temps. EN: the pain, then the strength, then the rebuilding: one arc in three stages.')),
    ctl('Viser, ou déjà y être', 'Entre « viser haut » et « toucher au but », laquelle décrit un objectif presque ATTEINT, pas seulement visé.', ['viser haut', 'toucher au but'], 1,
      'Toucher au but dit qu’on est presque arrivé ; viser haut ne dit rien sur la distance qui reste. EN: toucher au but says one is almost there; viser haut says nothing about the distance left.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['image'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a10-piege', layer: 'core', swipe: true,
  title: 'Six expressions, un seul mot qui dérape',
  rule: {
    title: 'L’accord, le déterminant, la préposition : trois fautes discrètes',
    body: 'Ces six phrases sonnent presque juste ; un accord, un déterminant ou une préposition suffit à les rendre fausses. EN: these six sentences sound almost right; an agreement, a determiner or a preposition is enough to make them wrong.',
  },
  cards: [
    trap(E(1930), '/dɛ se de.by lɛ̃.ʒe.njœʁ a vi.ze o/', 'a visé HAUTE', 'Dès ses débuts, l’ingénieure a visé haute.', '« Haut » reste invariable ici : « viser haut », jamais « viser haute ». EN: haut stays invariable here: viser haut, never viser haute.'),
    trap(E(1931), '/lə nu.vo mɛʁ vwa gʁɑ̃ puʁ sə kaʁ.tje u.bli.je/', 'voit GRANDE', 'Le nouveau maire voit grande pour ce quartier oublié.', '« Grand » reste invariable ici : « voir grand », jamais « voir grande ». EN: grand stays invariable here: voir grand, never voir grande.'),
    trap(E(1932), '/ɑ̃ ki.tɑ̃ sɔ̃ pɔst i.la bʁy.le se vɛ.so/', 'brûlé CES vaisseaux', 'En quittant son poste, il a brûlé ces vaisseaux.', 'C’est « brûler SES vaisseaux », jamais « ces vaisseaux ». EN: it is brûler SES vaisseaux, never ces vaisseaux.'),
    trap(E(1934), '/ɛl ka.ʁɛs də.pɥi lɔ̃.tɑ̃ lɑ̃.bi.sjɔ̃ də di.ʁi.ʒe la.tə.lje/', 'caresse SON ambition', 'Elle caresse depuis longtemps son ambition de diriger l’atelier.', 'C’est « caresser UNE ambition », jamais « son ambition » dans cette expression figée. EN: it is caresser UNE ambition, never son ambition in this fixed idiom.'),
    trap(E(1937), '/kɔ̃tʁ tut a.tɑ̃t le.kip sɔʁ gʁɑ̃.di də sɛ.te.ʃɛk/', 'sort GRAND de', 'Contre toute attente, l’équipe sort grand de cet échec.', 'C’est « sortir GRANDI de », avec l’accord du participe, jamais « grand » seul. EN: it is sortir GRANDI de, with the agreed participle, never grand alone.'),
    trap(E(1939), '/a.pʁɛ di.zɑ̃ də tʁa.vo la fɔ̃.da.sjɔ̃ tuʃ ɑ̃.fɛ̃ o by/', 'touche LE but', 'Après dix ans de travaux, la fondation touche enfin le but.', 'C’est « toucher AU but », jamais « le but » directement. EN: it is toucher AU but, never le but directly.'),
  ],
  drill: [
    { promptSay: 'Se fixer un objectif exigeant, c’est viser ... .', opts: ['haute', 'haut'], correct: 1 },
    { promptSay: 'Imaginer un projet à grande échelle, c’est voir ... .', opts: ['grande', 'grand'], correct: 1 },
    { promptSay: 'S’engager sans retour possible, c’est brûler ... vaisseaux.', opts: ['ces', 'ses'], correct: 1 },
    { promptSay: 'Nourrir un projet ambitieux depuis longtemps, c’est caresser ... ambition.', opts: ['son', 'une'], correct: 1 },
    { promptSay: 'Devenir plus fort après une épreuve, c’est en sortir ... .', opts: ['grand', 'grandi'], correct: 1 },
    { promptSay: 'Être tout près de réussir, c’est toucher ... but.', opts: ['le', 'au'], correct: 1 },
    { promptSay: 'Dans ces six expressions, la faute la plus fréquente touche...', opts: ['l’accord, le déterminant ou la préposition', 'le sens général de la phrase'], correct: 0 },
    { promptSay: 'Une expression figée mal réglée reste...', opts: ['compréhensible et correcte', 'une forme qui n’existe pas'], correct: 1 },
  ],
  steps: STEPS_STD('Six expressions de l’ambition'),
  audio: REC('rec-c2-03-piege-ambition'), say: REFRAME, terms: ['motsFixes'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Tout risquer', '« Brûler ses vaisseaux » et « jouer son va-tout » décrivent...', ['une prudence extrême', 'un engagement total, sans filet'], 1,
    'Les deux disent qu’aucune solution de secours n’est gardée. EN: both say no backup is kept.'),
  ctl('Se relever', '« Essuyer un échec cuisant », puis « sortir grandi de », puis « renaître de ses cendres » racontent...', ['un échec final, sans suite', 'un même arc, de la douleur à la reconstruction'], 1,
    'Les trois expressions suivent le même arc, en trois temps. EN: all three idioms follow the same arc, in three stages.'),
  ctl('Le mot qui dérape', 'Entre « viser haut » et « viser haute », la forme figée est...', ['viser haute', 'viser haut'], 1,
    '« Haut » reste invariable dans cette expression. EN: haut stays invariable in this idiom.'),
], ['image', 'motsFixes']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'L’ambition, l’effort et l’échec',
    opener: {
      line: "L’ingénieure vise haut dès ses débuts : ici tu apprends dix façons soutenues de dire l’ambition, le risque, l’échec et le retour. EN: The engineer aims high from her very first days: here you learn ten elevated ways to name ambition, risk, failure and the comeback.",
      imageRef: 'lessons/c2-03-cent-idiomes/act10.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais et emploies dix expressions soutenues de l’ambition, de l’effort et de l’échec. EN: You can recognise and use ten elevated idioms of ambition, effort and failure.',
    estScreens: 32, restPoints: ['a10-table', 'a10-groupe'],
  },
  sections: [A10_ECOUTE, A10_DECK, A10_TABLE, A10_GROUPE, A10_PIEGE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — LA SOLITUDE, LE REPLI ET LA DISTANCE
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a11-lecture', layer: 'core', questionsInModal: true,
  title: 'Berthier, loin de tous', frSub: 'Depuis l’article',
  text: "Depuis l’article, Berthier s’est retiré dans sa tour d’ivoire. Il garde ses distances avec ses anciens collègues, et préfère rester à l’abri des regards. Face aux questions d’un confrère, il s’est enfermé dans le mutisme pendant des semaines. Plutôt que de répondre à ses détracteurs, il se drape dans sa dignité, et vit désormais en marge du monde judiciaire qu’il dominait autrefois.",
  glossary: [
    { word: 'un confrère', en: 'a fellow professional', note: 'Un collègue du même métier, surtout chez les avocats, juges ou médecins. EN: a colleague in the same profession, especially among lawyers, judges or doctors.' },
  ],
  questions: [
    { q: "Devine le sens, sans dictionnaire : « il s’est retiré dans sa tour d’ivoire ». Que dit cette expression sur son mode de vie actuel.", a: 'Qu’il s’est isolé volontairement, loin du monde et des critiques, comme protégé derrière un mur imaginaire.' },
    { q: "Pourquoi Berthier « se drape dans sa dignité » plutôt que de répondre à ses détracteurs.", a: 'Parce qu’il choisit le silence orgueilleux plutôt que la justification, une façon de garder une forme de fierté.' },
    { q: "Qu’est-ce que « vivre en marge de » ajoute à la dernière phrase.", a: 'Que Berthier reste physiquement proche du monde judiciaire, mais n’en fait plus vraiment partie.' },
  ],
  audio: REC('rec-c2-03-berthier-loin'), say: REFRAME, terms: ['image'],
};

const A11_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a11-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-ambition-solitude',
  title: 'Se retirer, se taire', frSub: 'Cinq expressions de la solitude',
  hint: 'Cinq cartes. S’isoler, par choix ou par blessure.',
  audio: REC('rec-c2-03-solitude-cinq'), say: REFRAME, terms: ['image'],
  cards: [
    card(E(1945), 'se retirer dans sa tour d’ivoire', 'isolement', "S’isoler volontairement du monde, loin des critiques. EN: to withdraw deliberately from the world, away from criticism."),
    card(E(1946), 's’enfermer dans le mutisme', 'silence', "Refuser absolument de parler, parfois pendant longtemps. EN: to refuse absolutely to speak, sometimes for a long time."),
    card(E(1947), 'garder ses distances', 'distance', "Éviter la proximité avec certaines personnes, par prudence ou par choix. EN: to avoid closeness with certain people, out of caution or choice."),
    card(E(1948), 'faire bande à part', 'isolement', "Rester en groupe séparé, à l’écart des autres. EN: to form a separate group, apart from the others."),
    card(E(1949), 'se murer dans le silence', 'silence', "S’entourer d’un silence complet, comme derrière un mur. EN: to wall oneself in complete silence, as behind a wall."),
  ],
};

const A11_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a11-table', layer: 'core', sheetId: 'sheet-ambition-solitude',
  title: 'Cinq expressions de plus',
  cols: ['Expression', 'Sens figuré'],
  rows: [
    tapRow(['vivre en marge de', 'vivre à la limite d’un groupe, sans en faire vraiment partie'], E(1950), 'Proche, mais pas dedans', 'L’artiste a choisi de vivre en marge de son époque. EN: the artist chose to live on the margins of his era.'),
    tapRow(['se tenir à l’écart', 'rester volontairement en dehors d’un débat'], E(1951), 'Un choix, pas une exclusion', 'Elle préfère se tenir à l’écart des débats publics. EN: she prefers to keep apart from public debates.'),
    tapRow(['se replier sur soi-même', 'se refermer après un échec collectif'], E(1952), 'Une réaction à une blessure', 'Après l’échec, le groupe s’est replié sur lui-même. EN: after the failure, the group withdrew into itself.'),
    tapRow(['rester à l’abri des regards', 'éviter l’exposition publique'], E(1953), 'Une discrétion, pendant une période précise', 'Le promoteur préfère rester à l’abri des regards pendant l’enquête. EN: the developer prefers to stay out of the public eye during the inquiry.'),
    tapRow(['se draper dans sa dignité', 'refuser de répondre, par fierté silencieuse'], E(1954), 'Le silence choisi, pas subi', 'Plutôt que de répondre, l’accusé se drape dans sa dignité. EN: rather than answer, the defendant wraps himself in his dignity.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['image'],
};

const A11_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a11-groupe', layer: 'core', size: 'lg',
  title: 'S’isoler, se taire ou refuser', frSub: 'Classe les dix expressions',
  groups: [
    grp('Le silence, comme un mur', [
      it(E(1946), 's’enfermer dans le mutisme'),
      it(E(1949), 'se murer dans le silence'),
    ], chk('Ces deux expressions décrivent...', ['un silence léger, temporaire', 'un silence total, presque une forteresse'], 1,
      'Les deux images disent un silence complet, fermé comme un mur. EN: both pictures name a complete silence, closed off like a wall.')),
    grp('Un choix, pas une exclusion', [
      it(E(1947), 'garder ses distances'),
      it(E(1951), 'se tenir à l’écart'),
      it(E(1953), 'rester à l’abri des regards'),
    ], chk('Ces trois expressions décrivent toutes...', ['un isolement imposé par les autres', 'un isolement choisi par la personne elle-même'], 1,
      'Les trois décrivent un choix personnel, jamais une exclusion subie. EN: all three describe a personal choice, never an imposed exclusion.')),
    ctl('Fierté, ou retraite', 'Entre « se draper dans sa dignité » et « se retirer dans sa tour d’ivoire », laquelle est une RÉPONSE immédiate à une question, pas un mode de vie durable.', ['se retirer dans sa tour d’ivoire', 'se draper dans sa dignité'], 1,
      'Se draper dans sa dignité est un refus de répondre, sur l’instant ; la tour d’ivoire est un isolement installé, sur la durée. EN: se draper dans sa dignité is an instant refusal to answer; the ivory tower is a settled, lasting isolation.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['image'],
};

const A11_PIEGE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a11-piege', layer: 'core', size: 'lg',
  title: 'Quatre pièges, un seul mot faux', frSub: 'Laquelle des deux formes existe',
  groups: [
    ctl('À l’écart', 'Laquelle de ces deux formes est l’expression figée pour « rester volontairement en dehors ».', ['se tenir à part', 'se tenir à l’écart'], 1,
      'C’est « se tenir à L’ÉCART », jamais « à part » pour ce sens précis (« à part » existe, mais dans « faire bande à part »). EN: it is se tenir à L’ÉCART, never à part for this exact sense (à part exists, but in faire bande à part).'),
    ctl('Les distances', 'Laquelle de ces deux formes est la bonne, au pluriel figé.', ['garder sa distance', 'garder ses distances'], 1,
      'C’est « garder SES DISTANCES », toujours au pluriel. EN: it is garder SES DISTANCES, always plural.'),
    ctl('Le silence', 'Laquelle de ces deux formes est l’expression figée.', ['se murer dans son silence', 'se murer dans le silence'], 1,
      'C’est « se murer dans LE silence », jamais « son silence ». EN: it is se murer dans LE silence, never son silence.'),
    ctl('La dignité', 'Laquelle de ces deux formes est la bonne préposition.', ['se draper de sa dignité', 'se draper dans sa dignité'], 1,
      'C’est « se draper DANS sa dignité », jamais « de sa dignité ». EN: it is se draper DANS sa dignité, never de sa dignité.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['motsFixes'],
};

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Le silence, comme un mur', '« S’enfermer dans le mutisme » et « se murer dans le silence » décrivent...', ['un silence léger', 'un silence total et fermé'], 1,
    'Les deux images disent un silence complet. EN: both pictures name a complete silence.'),
  ctl('Un choix', '« Garder ses distances » et « se tenir à l’écart » sont...', ['des exclusions subies', 'des choix personnels'], 1,
    'Les trois décrivent un isolement choisi. EN: all three describe a chosen isolation.'),
  ctl('Le mot qui dérape', 'Entre « se murer dans le silence » et « se murer dans son silence », la forme figée est...', ['se murer dans son silence', 'se murer dans le silence'], 1,
    'Seule « le silence » est l’expression figée. EN: only le silence is the fixed expression.'),
], ['image', 'motsFixes']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'La solitude, le repli et la distance',
    opener: {
      line: "Berthier s’est retiré dans sa tour d’ivoire : ici tu apprends dix façons soutenues de dire l’isolement, choisi ou subi. EN: Berthier has withdrawn into his ivory tower: here you learn ten elevated ways to name isolation, chosen or endured.",
      imageRef: 'lessons/c2-03-cent-idiomes/act11.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais et emploies dix expressions soutenues de la solitude et du repli. EN: You can recognise and use ten elevated idioms of solitude and withdrawal.',
    estScreens: 32, restPoints: ['a11-table', 'a11-groupe'],
  },
  sections: [A11_LECTURE, A11_DECK, A11_TABLE, A11_GROUPE, A11_PIEGE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — TON PORTRAIT
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_MODELE: Sec<'reading'> = {
  type: 'reading', id: 'a12-modele', layer: 'core', questionsInModal: true,
  title: 'Le portrait final', frSub: 'Le juge Berthier, en cinq familles',
  text: PORTRAIT_BERTHIER,
  questions: [
    { q: "Combien de familles d’expressions ce portrait traverse-t-il, et lesquelles.", a: 'Cinq : le pouvoir (tenir les rênes), le temps (de mémoire d’homme, à l’aube de), la réputation (terni, baisser pavillon, perdre la face, essuyer un affront), la solitude (se retirer dans sa tour d’ivoire) et le temps encore (passer à la postérité, tomber dans l’oubli).' },
    { q: "Le portrait respecte une règle simple sur le nombre d’expressions par phrase. Laquelle.", a: 'Une seule expression par phrase, jamais deux dans la même, pour que chaque image reste nette.' },
    { q: "Pourquoi le texte se termine-t-il sur une question ouverte, plutôt que sur une affirmation.", a: 'Parce que le destin de Berthier n’est pas encore fixé : le texte respecte l’incertitude réelle de la situation, sans trancher à sa place.' },
  ],
  audio: REC('rec-c2-03-portrait-final'), say: REFRAME, terms: ['portrait'],
};

const A12_PLAN: Sec<'examples'> = {
  type: 'examples', id: 'a12-plan', layer: 'core', sheetId: 'sheet-bilan-cent',
  title: 'Le plan, en trois étapes',
  examples: [
    ex(E(1961), 'étape 1 : une expression par idée, jamais deux dans la même phrase'),
    ex(E(1962), 'étape 2 : nommer la famille avant de choisir l’expression'),
    ex(E(1971), 'étape 3 : nommer juste, avant d’écrire, pas après'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['portrait'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a12-usages', layer: 'core', title: 'Quelle famille, pour quel texte',
  cases: [
    { situation: 'Un portrait qui raconte une chute publique', fr: src(E(1873)).fr, en: src(E(1873)).en },
    { situation: 'Un éditorial qui juge une décision collective', fr: src(E(1842)).fr, en: src(E(1842)).en },
    { situation: 'Une biographie qui couvre toute une carrière', fr: src(E(1902)).fr, en: src(E(1902)).en },
    { situation: 'Un récit qui montre un retour après l’échec', fr: src(E(1938)).fr, en: src(E(1938)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['portrait'],
};

const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a12-scenario', layer: 'core', title: 'Tu discutes le portrait avec Inès, à voix haute',
  setting: "Avant d’écrire ton propre portrait, tu t’entraînes à voix haute avec Inès sur celui de Berthier.",
  turns: [
    {
      ai: 'Pourquoi dire qu’il s’est retiré dans sa tour d’ivoire, plutôt que simplement qu’il est devenu discret.', en: 'Why say he withdrew into his ivory tower, rather than simply that he became discreet.',
      user: src(E(1956)).fr, userEn: 'The picture speaks; the register decides. Ten families, the same rule a hundred times over. (A general answer, naming the method.)',
      alts: [
        { fr: 'Parce que « discret » ne dit rien du choix volontaire, ni de la distance qu’il a mise avec tout le monde.', en: 'Because "discreet" says nothing of the deliberate choice, nor of the distance he put between himself and everyone.' },
        { fr: 'Le choix littéraire crée une image mémorable, alors que « discret » reste un mot neutre et vite oublié.', en: 'The literary choice creates a memorable image, whereas "discreet" stays a neutral, easily forgotten word.' },
      ],
    },
    {
      ai: 'Et pour sa carrière, pourquoi choisir « passer à la postérité » plutôt que « rester connu ».', en: 'And for his career, why choose "go down in history" rather than "stay known".',
      user: 'Parce que « passer à la postérité » dit un jugement des générations suivantes, pas seulement du présent.', userEn: 'Because "passer à la postérité" names a judgement by later generations, not only the present.',
      alts: [
        { fr: 'Parce que « rester connu » reste trop faible pour un texte de ce registre.', en: 'Because "rester connu" stays too weak for a text at this register.' },
        { fr: 'L’expression ajoute aussi une dimension presque solennelle, absente du verbe « rester ».', en: 'The expression also adds an almost solemn dimension, absent from the verb "rester".' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['portrait'],
};

/** THE GRADED TASK. A written portrait of an invented public figure, using
 *  idioms from at least four of the ten families, graded on the image AND
 *  the register of each choice, never on the number of idioms alone. */
const A12_MISSION: Sec<'task'> = {
  type: 'task', id: 'a12-mission', title: 'Écris ton portrait', frSub: 'Mission écrite',
  brief: "Choisis un personnage inventé (un responsable, un artiste, un fondateur d’entreprise) et écris son portrait, comme le fait Le Courrier des Lettres pour Berthier. Le texte doit traverser au moins quatre des dix familles de cette leçon, une seule expression par phrase.",
  briefEn: "Choose an invented public figure (an official, an artist, a company founder) and write their portrait, the way Le Courrier des Lettres does for Berthier. The text must cross at least four of this lesson's ten families, one idiom per sentence.",
  produce: "Écris un portrait de 150 à 250 mots : nomme le personnage et sa situation, utilise au moins six expressions de cette leçon (venant d’au moins quatre familles différentes), une seule par phrase, et choisis chaque fois celle dont l’image ET le registre tiennent dans ton texte.",
  responseSpec: { kind: 'text', minWords: 150, maxWords: 250 },
  rubric: {
    criteria: [
      { key: 'couverture', label: 'Au moins six expressions, quatre familles', maxPoints: 4, descriptors: [
        "4 : Six expressions ou plus, prises dans au moins quatre familles différentes, chacune utilisée correctement.",
        "3 : Six expressions sont là, mais prises dans seulement trois familles.",
        '2 : Quatre ou cinq expressions seulement, ou une famille sur-représentée.',
        "1 : Moins de quatre expressions, ou la plupart viennent d’une seule famille.",
      ] },
      { key: 'justesse', label: 'L’image ET le registre tiennent', maxPoints: 4, descriptors: [
        "4 : Chaque expression est juste par son image ET par son registre, dans le contexte où elle est placée.",
        "3 : Toutes les images sont justes, mais une expression sonne un peu trop familière ou trop soutenue pour le passage.",
        '2 : Une ou deux expressions ont une image fausse (une forme qui n’existe pas, ou un mot changé).',
        "1 : Plusieurs expressions n’existent pas, ou sont utilisées à contresens.",
      ] },
      { key: 'dosage', label: 'Une expression par idée', maxPoints: 3, descriptors: [
        "3 : Jamais deux expressions dans la même phrase ; chaque image a la place de se faire sentir.",
        '2 : Une seule phrase cumule deux expressions.',
        "1 : Plusieurs phrases cumulent deux expressions ou plus, le texte devient une liste.",
      ] },
      { key: 'coherence', label: 'Un portrait, pas une liste', maxPoints: 3, descriptors: [
        "3 : Le texte raconte une vraie situation, cohérente du début à la fin ; les expressions servent le récit.",
        '2 : Le récit est présent, mais une ou deux phrases semblent ajoutées pour placer une expression.',
        "1 : Le texte est surtout une suite de phrases séparées, sans vrai fil.",
      ] },
      { key: 'ton', label: 'Un registre soutenu, de bout en bout', maxPoints: 3, descriptors: [
        "3 : Le registre reste soutenu partout, sans retomber dans le familier.",
        '2 : Le registre varie une fois, sans casser le sens général.',
        "1 : Le registre change nettement en cours de texte.",
      ] },
      { key: 'langue', label: 'Une langue soignée', maxPoints: 2, descriptors: [
        '2 : Peu ou pas d’erreurs, des phrases qui s’enchaînent.',
        "1 : Des erreurs fréquentes qui gênent la lecture.",
      ] },
    ],
  },
  scaffold: [
    'Dès ses débuts, [il/elle]...',
    'On disait qu’[il/elle]...',
    'Tout a changé le jour où...',
    'Plutôt que de..., [il/elle] a préféré...',
    'Aujourd’hui, à l’aube de..., reste à savoir si...',
  ],
  modelAnswer: PORTRAIT_BERTHIER,
  modelAnswerEn: PORTRAIT_BERTHIER_EN,
  watchFor: [
    { pattern: 'Two idioms used in the same sentence, cramming the images together.', criterion: 'dosage', feedback: 'Une seule expression par phrase : sépare-les pour que chaque image se voie. EN: one idiom per sentence; separate them so each picture is seen.', ref: 'a12-plan' },
    { pattern: 'An idiom with one word changed (wrong article, preposition or determiner) from its fixed form.', criterion: 'justesse', feedback: 'Vérifie chaque expression contre sa forme figée exacte, mot pour mot. EN: check each idiom against its exact fixed form, word for word.', ref: 'a12-cheat' },
    { pattern: 'Six or more idioms, but five of them from the same one or two families.', criterion: 'couverture', feedback: 'Fais traverser ton texte par au moins quatre familles différentes, pas seulement une ou deux. EN: have your text cross at least four different families, not just one or two.', ref: 'a12-usages' },
    { pattern: 'The text reads as a list of idioms with thin connecting sentences, no real situation.', criterion: 'coherence', feedback: 'Raconte d’abord une vraie situation ; les expressions doivent la servir, pas l’inverse. EN: tell a real situation first; the idioms should serve it, not the other way round.', ref: 'a12-modele' },
    { pattern: 'The register drops into familiar French partway through (slang, casual contractions).', criterion: 'ton', feedback: 'Garde le même registre soutenu du début à la fin du portrait. EN: keep the same elevated register from the start to the end of the portrait.', ref: 'a1-check' },
  ],
  graderNotes: [
    'Word count: 150 to 250, with 10% tolerance (135 to 275) before length costs points.',
    'This task marks the CHOICE of idiom (image and register) and its DOSAGE, not whether the invented story is realistic.',
    'Accept any invented figure and situation, as long as it gives the idioms a real context to sit in.',
    'Accept a correct idiom even if it differs from the model, as long as its family and register fit the sentence.',
    'Do not mark grammar beyond what interferes with comprehension; this task marks idiom choice, not a grammar point (C2 has none, per C2-BUILD-PLAN.md).',
    'Feedback language: unsimplified C2 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['portrait', 'distanceRegistre'],
};

const A12_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a12-parler', layer: 'core', title: 'Dis dix expressions à voix haute', skill: 'speak',
  itemIds: ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id).slice(0, 40),
  audio: AUDIO, say: REFRAME, terms: ['image'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a12-cheat', layer: 'core', sheetId: 'sheet-bilan-cent',
  title: 'Dix familles sur un écran',
  rows: [
    { k: 'le pouvoir', v: 'tenir les rênes · rendre les armes · baisser pavillon', say: src(E(1811)).fr,
      detail: { title: 'Commander, ou céder', body: 'Trois images pour céder, une pour commander. EN: three pictures for yielding, one for commanding.', say: src(E(1813)).fr } },
    { k: 'la ruse', v: 'la poudre aux yeux · tirer les ficelles · nager entre deux eaux', say: src(E(1829)).fr,
      detail: { title: 'Éblouir, cacher, hésiter', body: 'Trois façons de ne pas montrer ses vraies intentions. EN: three ways to hide one’s true intentions.', say: src(E(1828)).fr } },
    { k: 'le jugement', v: 'faire la part des choses · trancher dans le vif', say: src(E(1842)).fr,
      detail: { title: 'Peser, puis décider', body: 'Peser avant, trancher ensuite, sans se laisser duper. EN: weigh first, then decide, without being fooled.', say: src(E(1841)).fr } },
    { k: 'l’excès', v: 'friser le ridicule · outrepasser les bornes', say: src(E(1859)).fr,
      detail: { title: 'Trop loin, presque trop loin', body: 'Neuf images de l’excès, une seule de la retenue. EN: nine pictures of excess, one of restraint.', say: src(E(1864)).fr } },
    { k: 'la réputation', v: 'tomber en disgrâce · perdre la face · sauver la face', say: src(E(1875)).fr,
      detail: { title: 'Monter lentement, tomber d’un coup', body: 'Une réputation se construit lentement et se perd en une phrase. EN: a reputation is built slowly and lost in a single sentence.', say: src(E(1874)).fr } },
    { k: 'le destin', v: 'le sort en est jeté · sceller son destin', say: src(E(1887)).fr,
      detail: { title: 'Écrit d’avance, ou forcé', body: 'Un destin qui semble fixé, et un destin qu’on tente de forcer. EN: a fate that seems fixed, and a fate one tries to force.', say: src(E(1891)).fr } },
    { k: 'le temps', v: 'à l’aube de · au crépuscule de · tomber dans l’oubli', say: src(E(1902)).fr,
      detail: { title: 'Dater, sans dire une date', body: 'Le début, la fin, et ce qui reste ou s’efface. EN: the beginning, the end, and what stays or fades.', say: src(E(1906)).fr } },
    { k: 'la parole', v: 'la langue de bois · ne pas mâcher ses mots', say: src(E(1922)).fr,
      detail: { title: 'Cacher, ou tout dire', body: 'La parole qui voile, et celle qui ne voile rien. EN: speech that veils, and speech that veils nothing.', say: src(E(1917)).fr } },
    { k: 'l’ambition', v: 'brûler ses vaisseaux · renaître de ses cendres', say: src(E(1932)).fr,
      detail: { title: 'Risquer, échouer, renaître', body: 'Le même arc, de l’engagement total à la reconstruction. EN: the same arc, from total commitment to rebuilding.', say: src(E(1938)).fr } },
    { k: 'la solitude', v: 'la tour d’ivoire · se draper dans sa dignité', say: src(E(1945)).fr,
      detail: { title: 'S’isoler, par choix', body: 'Un isolement choisi, jamais une exclusion subie. EN: a chosen isolation, never an imposed exclusion.', say: src(E(1954)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['portrait'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a12-progress', layer: 'core', title: 'Où tu en es',
  body: "Tu reconnais maintenant cent expressions soutenues, rangées en dix familles, et tu sais lire l’image qu’elles portent AUTANT que le registre qu’elles demandent. Tu repères aussi l’expression qui ressemble à la bonne et qui n’existe pourtant pas : un article de trop, une préposition changée, un accord oublié. Avant l’examen, relis un article de presse soutenu et compte combien de ces cent expressions tu y reconnais sans l’aide du dictionnaire. EN: Before any exam, reread a serious press article and count how many of these hundred idioms you recognise without a dictionary.",
  stats: [
    { k: 'Cent expressions', v: 'dix familles, dix expressions chacune' },
    { k: 'Le critère', v: 'l’image ET le registre, jamais l’un sans l’autre' },
    { k: 'Le piège', v: 'un mot changé rend l’expression inexistante' },
    { k: 'Ton texte', v: 'une expression par idée, quatre familles au minimum' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ────────────────────────────────────────────────────────────── */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Un mot trahit l’expression figée. Écris la phrase avec le bon mot. EN: One word betrays the fixed idiom; write the sentence with the right word.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a12-quiz', layer: 'core', title: 'Le bilan', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-pouvoir', label: 'Le pouvoir et l’autorité', targets: ['expression-inexistante'],
      questions: [
        mc('Avoir la haute main sur quelque chose, c’est en avoir...', ['une autorité complète, sans partage', 'une vague influence', 'aucune autorité'], 0, 'La haute main dit une autorité complète. EN: la haute main names complete authority.', 'a2-deck'),
        mc('« Rendre les armes », « battre en retraite » et « baisser pavillon » disent tous...', ['commander', 'céder, chacune avec sa propre image', 'juger impartialement'], 1, 'Trois images pour une seule idée : céder. EN: three pictures for one idea: giving up.', 'a2-groupe'),
        mc('« Avoir barre sur quelqu’un » dit...', ['un avantage de fait, pas une autorité légale', 'une autorité légale reconnue par la loi', 'une absence totale d’influence'], 0, 'Avoir barre sur dit seulement un avantage. EN: avoir barre sur names only an advantage.', 'a2-table'),
        tI('Complète. Un mot.', 'Diriger une entreprise comme on dirige un cheval, c’est en tenir les ... .', 'rênes', 'C’est l’image du cheval tenu par ses rênes. EN: it is the picture of a horse held by its reins.', 'a2-deck'),
        tI('Complète. Un mot.', 'Céder devant plus fort que soi, un geste nautique devenu figuré, c’est baisser ... .', 'pavillon', 'Sans article : baisser pavillon. EN: with no article: baisser pavillon.', 'a2-table'),
        eS('Le ministre a fini par baisser le pavillon devant les députés.', 'Le ministre a fini par baisser pavillon devant les députés.', 'L’expression ne prend pas d’article. EN: the idiom takes no article.', 'a2-piege', []),
        lC('Écoute. Ce mot ressemble-t-il à l’expression figée, ou la trahit-il.', 'Le préfet a la haute manche sur l’ensemble du dossier.', ['il la trahit', 'il la respecte'], 0, 'C’est « la haute main », jamais « la haute manche ». EN: it is la haute main, never la haute manche.', 'a2-piege'),
        lC('Écoute. Cette expression dit-elle commander, ou céder.', src(E(1812)).fr, ['commander', 'céder'], 0, 'Régner sans partage dit un pouvoir total. EN: régner sans partage names total power.', 'a2-deck'),
      ],
    },
    {
      id: 'r2-ruse', label: 'La ruse et la rhétorique', targets: ['expression-inexistante'],
      questions: [
        mc('« Jeter de la poudre aux yeux » cherche surtout à...', ['renseigner avec précision', 'impressionner, pour cacher le fond', 'convaincre par des preuves solides'], 1, 'La poudre aux yeux éblouit pour mieux cacher. EN: eye powder dazzles in order to hide.', 'a3-deck'),
        mc('« Tirer les ficelles » et « brouiller les pistes » ont en commun...', ['une action publique et franche', 'une action secrète'], 1, 'Les deux se font à l’abri des regards. EN: both happen out of sight.', 'a3-groupe'),
        mc('Entre « nager entre deux eaux » et « retourner sa veste », laquelle dit un choix déjà fait.', ['nager entre deux eaux', 'retourner sa veste'], 1, 'Retourner sa veste dit un changement déjà accompli. EN: retourner sa veste names an already-accomplished switch.', 'a3-groupe'),
        tI('Complète. Un mot.', 'Changer de camp par intérêt, sans scrupule, c’est retourner sa ... .', 'veste', 'C’est « sa veste », jamais « sa chemise » en français. EN: it is sa veste, never sa chemise in French.', 'a3-table'),
        tI('Complète. Un mot.', 'Utiliser l’ambiguïté pour éviter de répondre franchement, c’est jouer ... les mots.', 'sur', 'La préposition fixe est « sur », jamais « avec ». EN: the fixed preposition is sur, never avec.', 'a3-table'),
        eS('On soupçonne l’ancien associé de tirer encore sur les ficelles.', 'On soupçonne l’ancien associé de tirer encore les ficelles.', 'On tire les ficelles directement, sans « sur ». EN: you pull the strings directly, with no sur.', 'a3-piege', []),
        lC('Écoute. Cette forme respecte-t-elle l’expression figée, ou la trahit-elle.', 'L’élu a retourné sa chemise dès que le vote a changé.', ['elle la trahit', 'elle la respecte'], 0, 'C’est « sa veste », jamais « sa chemise ». EN: it is sa veste, never sa chemise.', 'a3-piege'),
        lC('Écoute. Cette expression dit-elle éblouir, ou manipuler en secret.', src(E(1829)).fr, ['éblouir', 'manipuler en secret'], 1, 'Tirer les ficelles, c’est contrôler sans y paraître. EN: tirer les ficelles means controlling without showing it.', 'a3-deck'),
      ],
    },
    {
      id: 'r3-jugement', label: 'Le jugement et la mesure', targets: ['expression-inexistante'],
      questions: [
        mc('« Ne pas être dupe de » veut dire...', ['croire aveuglément', 'ne pas se laisser tromper par une apparence', 'ignorer complètement un sujet'], 1, 'Ne pas être dupe, c’est refuser d’être trompé. EN: ne pas être dupe means refusing to be fooled.', 'a4-deck'),
        mc('« Trancher dans le vif » décrit une décision...', ['douce et progressive', 'rapide et difficile, prise dans l’urgence'], 1, 'Trancher dans le vif, c’est couper sans hésiter. EN: trancher dans le vif means cutting decisively.', 'a4-ecoute'),
        mc('« Faire bon marché de » les inquiétudes des riverains, c’est...', ['les prendre très au sérieux', 'les traiter comme si elles ne comptaient pas'], 1, 'Faire bon marché de, c’est minimiser la valeur de quelque chose. EN: faire bon marché de means treating something as worthless.', 'a4-table'),
        tI('Complète. Un mot.', 'Avoir le droit de donner son avis dans une décision, c’est avoir voix ... chapitre.', 'au', 'C’est « au chapitre », jamais « du chapitre ». EN: it is au chapitre, never du chapitre.', 'a4-deck'),
        tI('Complète. Deux mots.', 'Se limiter strictement à quelque chose, c’est ... ... à cela.', 's’en tenir', 'C’est « s’en tenir à », jamais « s’y tenir à ». EN: it is s’en tenir à, never s’y tenir à.', 'a4-table', ['s’en tenir']),
        eS('Les employés réclament enfin d’avoir voix du chapitre.', 'Les employés réclament enfin d’avoir voix au chapitre.', 'C’est « voix au chapitre », jamais « du chapitre ». EN: it is voix au chapitre, never du chapitre.', 'a4-piege', []),
        lC('Écoute. Cette forme respecte-t-elle l’expression figée, ou la trahit-elle.', 'Le rapporteur s’y tient à strictement aux faits établis.', ['elle la trahit', 'elle la respecte'], 0, 'C’est « s’en tenir à », jamais « s’y tenir à ». EN: it is s’en tenir à, never s’y tenir à.', 'a4-piege'),
        lC('Écoute. Cette expression dit-elle un respect de l’avis d’autrui, ou un mépris.', src(E(1844)).fr, ['un respect', 'un mépris'], 0, 'Avoir voix au chapitre, c’est que l’avis compte. EN: avoir voix au chapitre means the opinion counts.', 'a4-deck'),
      ],
    },
    {
      id: 'r4-exces', label: 'L’excès et la démesure', targets: ['expression-inexistante'],
      questions: [
        mc('« Verser dans l’excès » et « tomber dans la démesure » décrivent...', ['une limite qu’on approche seulement', 'une limite déjà dépassée', 'une limite qui n’existe pas'], 1, 'Les deux verbes disent un excès déjà accompli. EN: both verbs name an excess already reached.', 'a5-groupe'),
        mc('Sur dix expressions de cette famille, la seule à décrire une qualité est...', ['savoir s’arrêter à temps', 'ne connaître aucune limite'], 0, 'C’est le contrepoint positif de toute la famille. EN: it is the one positive counterpoint in the family.', 'a5-groupe'),
        mc('« Friser le ridicule » dit qu’on est...', ['très loin du ridicule', 'presque au ridicule, sans y être encore tout à fait'], 1, 'Friser, c’est toucher presque. EN: friser means almost touching.', 'a5-deck'),
        tI('Complète. Un mot.', 'Aller plus loin que ce qu’une limite autorisait, c’est outrepasser ... bornes.', 'les', 'C’est « les bornes », jamais « ses bornes ». EN: it is les bornes, never ses bornes.', 'a5-deck'),
        tI('Complète. Un mot.', 'Être totalement démesuré, sans aucune retenue, c’est ne connaître aucune ... .', 'limite', 'Au singulier, après « aucune ». EN: singular, after aucune.', 'a5-table'),
        eS('Son ambition, dit-on, ne connaît aucune limites.', 'Son ambition, dit-on, ne connaît aucune limite.', '« Aucune » impose le singulier. EN: aucune forces the singular.', 'a5-piege', []),
        lC('Écoute. Cette forme respecte-t-elle l’expression figée, ou la trahit-elle.', 'Entre les deux camps, le médiateur fait les équilibristes.', ['elle la trahit', 'elle la respecte'], 0, 'On « joue » les équilibristes, on ne les « fait » pas. EN: you jouer les équilibristes, you do not faire them.', 'a5-piege'),
        lC('Écoute. Cette expression dit-elle un excès déjà accompli, ou une qualité.', src(E(1864)).fr, ['une qualité', 'un excès déjà accompli'], 0, 'Savoir s’arrêter à temps est le contrepoint positif. EN: it is the positive counterpoint.', 'a5-table'),
      ],
    },
    {
      id: 'r5-reputation', label: 'La réputation et la disgrâce', targets: ['expression-inexistante'],
      questions: [
        mc('« Se couvrir de ridicule » dit une chute causée par...', ['les autres', 'soi-même', 'le hasard, sans aucune cause'], 1, 'On se couvre soi-même de ridicule. EN: you cover yourself in ridicule.', 'a6-groupe'),
        mc('« Essuyer un affront » et « laver un affront » sont...', ['le même geste', 'deux moments différents : recevoir, puis répondre'], 1, 'On essuie l’affront, puis on le lave si on le peut. EN: you suffer the affront, then wipe it out if you can.', 'a6-groupe'),
        mc('« Être la coqueluche de » décrit une popularité...', ['durable et stable', 'souvent passagère, liée à un moment'], 1, 'La coqueluche d’un salon peut cesser de l’être très vite. EN: the darling of a salon can stop being one quickly.', 'a6-table'),
        tI('Complète. Un mot.', 'Perdre sa dignité publique devant les autres, c’est perdre ... face.', 'la', 'C’est « la face », jamais « sa face ». EN: it is la face, never sa face.', 'a6-deck'),
        tI('Complète. Une lettre.', 'Subir une insulte publique, c’est essuyer ... affront.', 'un', '« Affront » est masculin. EN: affront is masculine.', 'a6-table'),
        eS('Le président a préféré transiger plutôt que de perdre sa face.', 'Le président a préféré transiger plutôt que de perdre la face.', 'C’est « la face », jamais « sa face ». EN: it is la face, never sa face.', 'a6-piege', []),
        lC('Écoute. Cette forme respecte-t-elle l’expression figée, ou la trahit-elle.', 'L’ancien favori du conseil est tombé dans disgrâce en un mois.', ['elle la trahit', 'elle la respecte'], 0, 'C’est « tomber EN disgrâce », jamais « dans disgrâce ». EN: it is tomber EN disgrâce, never dans disgrâce.', 'a6-piege'),
        lC('Écoute. Cette expression dit-elle une chute causée par soi, ou par les autres.', src(E(1873)).fr, ['par les autres', 'par soi-même'], 0, 'Tomber en disgrâce vient souvent d’une décision des autres. EN: tomber en disgrâce often comes from others’ decision.', 'a6-deck'),
      ],
    },
    {
      id: 'r6-destin', label: 'Le destin et l’inéluctable', targets: ['expression-inexistante'],
      questions: [
        mc('« Être voué à » et « le sort en est jeté » décrivent...', ['un résultat encore ouvert', 'un résultat qui semble déjà fixé', 'un résultat déjà annoncé publiquement'], 1, 'Les deux expressions disent un destin déjà tracé. EN: both idioms name a fate already set.', 'a7-groupe'),
        mc('« Forcer le destin » et « sceller son destin » montrent une personne qui...', ['subit, sans agir', 'agit volontairement sur son propre sort'], 1, 'Les deux verbes disent une action volontaire. EN: both verbs name a voluntary act.', 'a7-groupe'),
        mc('« Avoir maille à partir avec quelqu’un » décrit...', ['une amitié solide', 'un conflit ou un différend qui dure'], 1, 'Un désaccord durable, pas une rupture nette. EN: a lasting disagreement, not a clean break.', 'a7-table'),
        tI('Complète. Un mot.', 'Aller droit vers son propre échec, c’est courir ... sa perte.', 'à', 'C’est « courir À sa perte », jamais « vers ». EN: it is courir À sa perte, never vers.', 'a7-deck'),
        tI('Complète. Un mot.', 'Accepter de laisser définitivement quelque chose derrière soi, c’est tirer un ... sur cela.', 'trait', 'C’est « un trait », jamais « une ligne ». EN: it is un trait, never une ligne.', 'a7-deck'),
        eS('Après ce procès, la famille a tiré une ligne sur l’héritage.', 'Après ce procès, la famille a tiré un trait sur l’héritage.', 'C’est « un trait », jamais « une ligne ». EN: it is un trait, never une ligne.', 'a7-piege', []),
        lC('Écoute. Cette forme respecte-t-elle l’expression figée, ou la trahit-elle.', 'Sans ce contrat, l’atelier est à la merci à du moindre retard.', ['elle la trahit', 'elle la respecte'], 0, 'C’est « à la merci DE », jamais une double préposition. EN: it is à la merci DE, never a double preposition.', 'a7-piege'),
        lC('Écoute. Cette expression dit-elle une action volontaire, ou un destin subi.', src(E(1887)).fr, ['un destin subi', 'une action volontaire'], 0, 'Le sort en est jeté : la décision échappe maintenant à tout contrôle. EN: the die is cast: the decision is now beyond control.', 'a7-deck'),
      ],
    },
    {
      id: 'r7-temps', label: 'Le temps, la mémoire et l’oubli', targets: ['expression-inexistante'],
      questions: [
        mc('« À l’aube de » et « au crépuscule de » forment...', ['la même idée', 'une paire opposée : début, puis fin', 'deux images sans aucun lien'], 1, 'L’aube ouvre une période ; le crépuscule la ferme. EN: dawn opens a period; twilight closes it.', 'a8-groupe'),
        mc('« Résister à l’épreuve du temps » et « tomber dans l’oubli » sont...', ['la même idée', 'presque des contraires'], 1, 'L’une dit la permanence, l’autre l’effacement. EN: one names permanence, the other erasure.', 'a8-groupe'),
        mc('« Avoir fait son temps » décrit une fin...', ['soudaine, par une faute', 'naturelle, par usure'], 1, 'Une fin naturelle, pas un échec soudain. EN: a natural end, not a sudden failure.', 'a8-table'),
        tI('Complète. Un mot.', 'Dans toute la période dont on garde le souvenir, c’est de mémoire ... homme.', 'd’', 'Sans article : de mémoire d’homme. EN: with no article: de mémoire d’homme.', 'a8-deck'),
        tI('Complète. Un mot.', 'Rester valable malgré les années qui passent, c’est résister à l’épreuve ... temps.', 'du', 'Avec l’article : l’épreuve DU temps. EN: with the article: l’épreuve DU temps.', 'a8-deck'),
        eS('Rien, dans ce domaine, n’est jamais gravé sur le marbre.', 'Rien, dans ce domaine, n’est jamais gravé dans le marbre.', 'C’est « dans le marbre », jamais « sur le marbre ». EN: it is dans le marbre, never sur le marbre.', 'a8-piege', []),
        lC('Écoute. Cette forme respecte-t-elle l’expression figée, ou la trahit-elle.', 'Le projet, pourtant ambitieux, est vite tombé en l’oubli.', ['elle la trahit', 'elle la respecte'], 0, 'C’est « tomber DANS l’oubli », jamais « en l’oubli ». EN: it is tomber DANS l’oubli, never en l’oubli.', 'a8-piege'),
        lC('Écoute. Cette expression dit-elle le début, ou la fin d’une période.', src(E(1902)).fr, ['la fin', 'le début'], 0, 'Au crépuscule de marque la fin d’une période. EN: au crépuscule de marks the end of a period.', 'a8-deck'),
      ],
    },
    {
      id: 'r8-parole', label: 'La parole soutenue', targets: ['expression-inexistante'],
      questions: [
        mc('« La langue de bois » et « se payer de mots » décrivent une parole qui...', ['révèle tout clairement', 'cache plus qu’elle ne révèle', 'ne contient aucune image'], 1, 'Les deux décrivent une parole évasive. EN: both describe evasive speech.', 'a9-groupe'),
        mc('« Tourner une phrase » et « avoir le don de la parole » sont...', ['des critiques', 'des compliments'], 1, 'Les deux expressions admirent un vrai talent. EN: both idioms admire a genuine talent.', 'a9-groupe'),
        mc('Entre « ne pas mâcher ses mots » et « tenir un discours convenu », laquelle complimente la franchise.', ['tenir un discours convenu', 'ne pas mâcher ses mots'], 1, 'Ne pas mâcher ses mots complimente la franchise. EN: ne pas mâcher ses mots praises frankness.', 'a9-table'),
        tI('Complète. Un mot.', 'Parler avec une franchise directe, sans adoucir, c’est ne pas ... ses mots.', 'mâcher', 'C’est « ne pas mâcher ses mots », jamais « ses paroles ». EN: it is ne pas mâcher ses mots, never ses paroles.', 'a9-table'),
        tI('Complète. Un mot.', 'Choisir chaque mot avec une attention particulière, c’est ... ses mots.', 'peser', 'Le même piège mots/paroles qu’ailleurs dans cette famille. EN: the same mots/paroles trap as elsewhere in this family.', 'a9-deck'),
        eS('La nouvelle directrice ne mâche pas ses paroles devant le conseil.', 'La nouvelle directrice ne mâche pas ses mots devant le conseil.', 'C’est « ses mots », jamais « ses paroles » dans cette expression précise. EN: it is ses mots, never ses paroles in this exact idiom.', 'a9-piege', []),
        lC('Écoute. Cette forme respecte-t-elle l’expression figée, ou la trahit-elle.', 'Le nouvel associé a la voix haute, dès la première réunion.', ['elle la trahit', 'elle la respecte'], 0, 'C’est « avoir le VERBE haut », jamais « la voix haute » pour cette expression. EN: it is avoir le VERBE haut, never la voix haute for this idiom.', 'a9-piege'),
        lC('Écoute. Cette expression dit-elle un vrai talent, ou un défaut.', src(E(1924)).fr, ['un vrai talent', 'un défaut'], 0, 'Avoir le don de la parole est un compliment. EN: avoir le don de la parole is a compliment.', 'a9-deck'),
      ],
    },
    {
      id: 'r9-ambition', label: 'L’ambition, l’effort et l’échec', targets: ['expression-inexistante'],
      questions: [
        mc('« Brûler ses vaisseaux » et « jouer son va-tout » décrivent...', ['une prudence extrême', 'un engagement total, sans filet', 'une hésitation permanente'], 1, 'Les deux disent qu’aucune solution de secours n’est gardée. EN: both say no backup is kept.', 'a10-groupe'),
        mc('« Un échec cuisant », puis « sortir grandi de », puis « renaître de ses cendres » racontent...', ['un échec final, sans suite', 'un même arc, de la douleur à la reconstruction'], 1, 'Les trois expressions suivent le même arc, en trois temps. EN: all three idioms follow the same arc, in three stages.', 'a10-groupe'),
        mc('Entre « viser haut » et « toucher au but », laquelle dit un objectif presque atteint.', ['viser haut', 'toucher au but'], 1, 'Toucher au but dit qu’on est presque arrivé. EN: toucher au but says one is almost there.', 'a10-table'),
        tI('Complète. Un mot.', 'S’engager sans retour possible, c’est brûler ... vaisseaux.', 'ses', 'C’est « ses vaisseaux », jamais « ces vaisseaux ». EN: it is ses vaisseaux, never ces vaisseaux.', 'a10-deck'),
        tI('Complète. Un mot.', 'Être tout près de réussir, c’est toucher ... but.', 'au', 'C’est « toucher AU but », jamais « le but ». EN: it is toucher AU but, never le but.', 'a10-table'),
        eS('Contre toute attente, l’équipe sort grand de cet échec.', 'Contre toute attente, l’équipe sort grandie de cet échec.', 'Le participe s’accorde : « grandie », jamais « grand » seul. EN: the participle agrees: grandie, never grand alone.', 'a10-piege', []),
        lC('Écoute. Cette forme respecte-t-elle l’expression figée, ou la trahit-elle.', 'Dès ses débuts, l’ingénieure a visé haute.', ['elle la trahit', 'elle la respecte'], 0, '« Haut » reste invariable dans cette expression. EN: haut stays invariable in this idiom.', 'a10-piege'),
        lC('Écoute. Cette expression dit-elle un engagement total, ou une prudence.', src(E(1933)).fr, ['un engagement total', 'une prudence'], 0, 'Jouer son va-tout, c’est risquer tout ce qu’on a. EN: jouer son va-tout means risking everything one has.', 'a10-deck'),
      ],
    },
    {
      id: 'r10-solitude', label: 'La solitude et le repli', targets: ['expression-inexistante'],
      questions: [
        mc('« S’enfermer dans le mutisme » et « se murer dans le silence » décrivent...', ['un silence léger', 'un silence total et fermé', 'un silence imposé par la loi'], 1, 'Les deux images disent un silence complet. EN: both pictures name a complete silence.', 'a11-groupe'),
        mc('« Garder ses distances » et « se tenir à l’écart » sont...', ['des exclusions subies', 'des choix personnels'], 1, 'Les trois décrivent un isolement choisi. EN: all three describe a chosen isolation.', 'a11-groupe'),
        mc('Entre « se draper dans sa dignité » et « se retirer dans sa tour d’ivoire », laquelle est une réponse immédiate, pas un mode de vie durable.', ['se retirer dans sa tour d’ivoire', 'se draper dans sa dignité'], 1, 'Se draper dans sa dignité est un refus de répondre, sur l’instant. EN: se draper dans sa dignité is an instant refusal to answer.', 'a11-groupe'),
        tI('Complète. Un mot.', 'Rester volontairement en dehors d’un débat, c’est se tenir à l’... .', 'écart', 'C’est « à l’écart », jamais « à part » pour ce sens précis. EN: it is à l’écart, never à part for this exact sense.', 'a11-table'),
        tI('Complète. Un mot.', 'Éviter la proximité avec certaines personnes, c’est garder ses ... .', 'distances', 'Toujours au pluriel : ses distances. EN: always plural: ses distances.', 'a11-deck'),
        eS('Elle préfère se tenir à part des débats publics.', 'Elle préfère se tenir à l’écart des débats publics.', 'C’est « à l’écart », jamais « à part » pour ce sens. EN: it is à l’écart, never à part for this sense.', 'a11-piege', []),
        lC('Écoute. Cette forme respecte-t-elle l’expression figée, ou la trahit-elle.', 'Depuis l’annonce, la direction se mure dans son silence.', ['elle la trahit', 'elle la respecte'], 0, 'C’est « se murer dans LE silence », jamais « son silence ». EN: it is se murer dans LE silence, never son silence.', 'a11-piege'),
        lC('Écoute. Cette expression dit-elle un isolement choisi, ou une exclusion subie.', src(E(1951)).fr, ['un isolement choisi', 'une exclusion subie'], 0, 'Se tenir à l’écart est un choix personnel. EN: se tenir à l’écart is a personal choice.', 'a11-deck'),
      ],
    },
  ],
};

/** Rotate each quiz question's options together with its `correct` index so
 *  no slot takes more than its share. Changes no text. */
function spreadSlots(quiz: Sec<'quiz'>): void {
  const used = [0, 0, 0, 0];
  for (const r of quiz.rounds ?? []) {
    for (const q of r.questions as (QQ & { opts?: string[]; correct?: number })[]) {
      if (!Array.isArray(q.opts) || typeof q.correct !== 'number') continue;
      const n = q.opts.length;
      let target = 0;
      for (let k = 1; k < n; k++) if (used[k] < used[target]) target = k;
      const shift = (target - q.correct + n) % n;
      q.opts = q.opts.map((_, i) => q.opts![(i - shift + n) % n]);
      q.correct = target;
      used[target]++;
    }
  }
}
spreadSlots(A12_QUIZ);

const A12_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck', id: 'a12-review', layer: 'core', title: 'Une dernière fois',
  cards: [
    { front: 'complete, undivided authority', back: 'avoir la haute main sur', say: src(E(1810)).fr },
    { front: 'to dazzle, to hide the substance', back: 'jeter de la poudre aux yeux', say: src(E(1825)).fr },
    { front: 'to not be fooled by appearances', back: 'ne pas être dupe de', say: src(E(1841)).fr },
    { front: 'to overstep the bounds', back: 'outrepasser les bornes', say: src(E(1859)).fr },
    { front: 'to lose face', back: 'perdre la face', say: src(E(1874)).fr },
    { front: 'the die is cast', back: 'le sort en est jeté', say: src(E(1887)).fr },
    { front: 'to stand the test of time', back: 'résister à l’épreuve du temps', say: src(E(1903)).fr },
    { front: 'to not mince one’s words', back: 'ne pas mâcher ses mots', say: src(E(1922)).fr },
    { front: 'to burn one’s boats', back: 'brûler ses vaisseaux', say: src(E(1932)).fr },
    { front: 'to retreat into one’s ivory tower', back: 'se retirer dans sa tour d’ivoire', say: src(E(1945)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a12-roundup', layer: 'core', title: 'Cent expressions idiomatiques avancées, en résumé',
  body: `${REFRAME} Tu reconnais maintenant cent expressions soutenues à travers dix familles, et tu sais que l’image ne suffit jamais seule : le registre doit tenir dans le texte où tu la poses. EN: You now recognise a hundred elevated idioms across ten families, and you know the picture is never enough on its own: the register has to hold up in the text where you place it.`,
  points: [
    'Le corps, les animaux, les couleurs et les proverbes restent à B1/B2 ; cette leçon ouvre dix familles neuves au registre soutenu.',
    'Une expression correcte peut rester fausse pour son texte : l’image seule ne suffit pas, le registre doit tenir aussi.',
    'Un mot changé (un article, une préposition, un accord) rend une expression figée inexistante, même si elle sonne presque juste.',
    'Un bon texte croise plusieurs familles, une seule expression par phrase, jamais une liste.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['portrait', 'motsFixes'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-pouvoir', title: 'Commander, ou céder', format: 'sort' as const, coach: 'Classe chaque expression : commander, ou céder. EN: sort each idiom: to command, or to yield.', buckets: ['commander', 'céder'], items: [E(1810), E(1811), E(1812), E(1813), E(1815), E(1816)], audio: AUDIO },
  { id: 'd-ruse', title: 'Le mot bien réglé', format: 'mcq' as const, coach: 'Vérifie chaque expression contre sa forme exacte. EN: check each idiom against its exact form.', q: 'Changer de camp par intérêt, c’est retourner sa...', opts: ['chemise', 'veste'], correct: 1, why: 'C’est « sa veste », jamais « sa chemise ». EN: it is sa veste, never sa chemise.', items: [E(1828), E(1829), E(1830), E(1831)], audio: AUDIO },
  { id: 'd-jugement', title: 'Peser avant de juger', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute, en pesant chaque mot. EN: say each line aloud, weighing every word.', items: [E(1840), E(1841), E(1844), E(1845), E(1847)], audio: AUDIO },
  { id: 'd-exces', title: 'Trop loin, ou presque', format: 'sort' as const, coach: 'Classe chaque expression : un excès déjà accompli, ou une qualité. EN: sort each idiom: an excess already reached, or a quality.', buckets: ['un excès déjà accompli', 'une qualité'], items: [E(1857), E(1858), E(1859), E(1864)], audio: AUDIO },
  { id: 'd-reputation', title: 'Monter, puis tomber', format: 'mcq' as const, coach: 'Compare chaque expression à sa forme figée exacte. EN: compare each idiom to its exact fixed form.', q: 'Perdre sa dignité publique devant les autres, c’est perdre...', opts: ['sa face', 'la face'], correct: 1, why: 'C’est « la face », jamais « sa face ». EN: it is la face, never sa face.', items: [E(1872), E(1873), E(1874), E(1875)], audio: AUDIO },
  { id: 'd-destin', title: 'Écrit d’avance, ou forcé', format: 'sort' as const, coach: 'Classe chaque expression : un destin subi, ou une action volontaire. EN: sort each idiom: a fate endured, or a voluntary act.', buckets: ['un destin subi', 'une action volontaire'], items: [E(1885), E(1886), E(1887), E(1891), E(1893), E(1894)], audio: AUDIO },
  { id: 'd-temps', title: 'Dater un propos', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute, en situant la période qu’elle nomme. EN: say each line aloud, placing the period it names.', items: [E(1900), E(1901), E(1902), E(1904), E(1906)], audio: AUDIO },
  { id: 'd-parole', title: 'Mots, pas paroles', format: 'mcq' as const, coach: 'Vérifie le nom exact : mots, ou paroles. EN: check the exact noun: mots, or paroles.', q: 'Parler avec une franchise directe, c’est ne pas mâcher ses...', opts: ['paroles', 'mots'], correct: 1, why: 'C’est « ses mots », jamais « ses paroles » dans cette expression. EN: it is ses mots, never ses paroles in this idiom.', items: [E(1915), E(1917), E(1918), E(1922)], audio: AUDIO },
  { id: 'd-ambition', title: 'Risquer, échouer, renaître', format: 'sort' as const, coach: 'Classe chaque expression selon le moment de l’arc : viser, risquer, ou se relever. EN: sort each idiom by its moment in the arc: aiming, risking, or recovering.', buckets: ['viser ou risquer', 'se relever'], items: [E(1930), E(1932), E(1933), E(1936), E(1937), E(1938)], audio: AUDIO },
  { id: 'd-solitude', title: 'Un choix, pas une exclusion', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute, en sentant si l’isolement est choisi. EN: say each line aloud, feeling whether the isolation is chosen.', items: [E(1945), E(1947), E(1949), E(1951), E(1954)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'expression-inexistante', description: 'Uses a plausible-sounding near-miss (wrong article, preposition, determiner or agreement) instead of the real fixed idiom.', detectOn: ['a2-piege', 'a3-piege', 'a4-piege', 'a5-piege', 'a6-piege', 'a7-piege', 'a8-piege', 'a9-piege', 'a10-piege', 'a11-piege', 'a12-mission'], drill: 'd-pouvoir', retest: 'd-pouvoir' },
  { id: 'registre-mal-adapte', description: 'Picks an idiom whose image is correct but whose register does not fit a formal or literary text (too familiar, or too literary for a casual one).', detectOn: ['a1-check', 'a2-check', 'a12-mission'], drill: 'd-ruse', retest: 'd-ruse' },
  { id: 'jugement-confondu', description: 'Confuses the ten judgement/restraint idioms with each other, missing which ones precede a decision and which one is the lone positive counterpoint.', detectOn: ['a4-groupe', 'a4-check'], drill: 'd-jugement', retest: 'd-jugement' },
  { id: 'exces-confondu', description: 'Mistakes the one restraint idiom (savoir s’arrêter à temps) for one more excess idiom, missing the family’s deliberate counterpoint.', detectOn: ['a5-groupe', 'a5-check'], drill: 'd-exces', retest: 'd-exces' },
  { id: 'reputation-confondue', description: 'Confuses essuyer/laver un affront (receiving vs answering) or mixes up perdre/sauver la face.', detectOn: ['a6-groupe', 'a6-check'], drill: 'd-reputation', retest: 'd-reputation' },
  { id: 'destin-confondu', description: 'Confuses a fate already set (être voué à, le sort en est jeté) with a voluntary act on one’s own fate (forcer le destin, sceller son destin).', detectOn: ['a7-groupe', 'a7-check'], drill: 'd-destin', retest: 'd-destin' },
  { id: 'temps-confondu', description: 'Confuses à l’aube de with au crépuscule de, or résister à l’épreuve du temps with tomber dans l’oubli.', detectOn: ['a8-groupe', 'a8-check'], drill: 'd-temps', retest: 'd-temps' },
  { id: 'mots-paroles', description: 'Substitutes « paroles » for the fixed « mots » (or the reverse) in ne pas mâcher ses mots / peser ses mots.', detectOn: ['a9-piege', 'a9-check'], drill: 'd-parole', retest: 'd-parole' },
  { id: 'arc-ambition-confondu', description: 'Misreads the ambition/failure/comeback arc, treating a recovery idiom (renaître de ses cendres) as if it still named the failure.', detectOn: ['a10-groupe', 'a10-check'], drill: 'd-ambition', retest: 'd-ambition' },
  { id: 'isolement-subi', description: 'Reads a chosen isolation idiom (garder ses distances, se tenir à l’écart) as if it described an exclusion imposed by others.', detectOn: ['a11-groupe', 'a11-check'], drill: 'd-solitude', retest: 'd-solitude' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-pouvoir-ruse', 'Le pouvoir et la ruse', ['dix expressions du pouvoir', 'dix expressions de la ruse'], [
    teach('sheet-pouvoir-ruse-teach', 'Commander, céder, tromper',
      'Le pouvoir se dit par qui commande (la haute main, les rênes) et qui cède (rendre les armes, battre en retraite, baisser pavillon). La ruse se dit par ce qu’on cache (la poudre aux yeux, les ficelles tirées en secret) et ce qu’on hésite à choisir (nager entre deux eaux). EN: power is named by who commands and who yields; cunning is named by what is hidden and what is left undecided.'),
    table('sheet-pouvoir-table', 'Dix expressions du pouvoir', ['Expression', 'Sens'], [
      ['avoir la haute main sur', 'une autorité complète, sans partage'],
      ['tenir les rênes de', 'diriger'],
      ['régner sans partage', 'un pouvoir total'],
      ['rendre les armes', 'abandonner la lutte'],
      ['mettre genou à terre', 'forcer à se soumettre'],
      ['battre en retraite', 'reculer'],
      ['baisser pavillon', 'céder'],
      ['avoir barre sur', 'avoir l’avantage'],
      ['faire acte d’autorité', 'affirmer son pouvoir par un geste'],
      ['se poser en arbitre', 'juger sans trancher'],
    ]),
    table('sheet-ruse-table', 'Dix expressions de la ruse', ['Expression', 'Sens'], [
      ['jeter de la poudre aux yeux', 'éblouir pour cacher'],
      ['faire des gorges chaudes de', 'moquer ouvertement'],
      ['se faire l’avocat du diable', 'défendre l’opposé, pour tester'],
      ['nager entre deux eaux', 'refuser de choisir un camp'],
      ['tirer les ficelles', 'manipuler en secret'],
      ['retourner sa veste', 'changer de camp par intérêt'],
      ['jouer sur les mots', 'esquiver par l’ambiguïté'],
      ['prêcher le faux pour savoir le vrai', 'mentir pour faire parler'],
      ['ménager ses arrières', 'se protéger avant d’agir'],
      ['brouiller les pistes', 'rendre la vérité difficile à suivre'],
    ]),
  ]),
  sheet('sheet-jugement-exces', 'Le jugement et l’excès', ['dix expressions du jugement', 'dix expressions de l’excès'], [
    teach('sheet-jugement-exces-teach', 'Peser, puis parfois dépasser',
      'Juger juste, c’est peser avant de trancher (faire la part des choses, ne pas être dupe), participer sans mépriser (avoir voix au chapitre, jamais faire bon marché de). L’excès, lui, est presque toujours un défaut (verser dans l’excès, outrepasser les bornes), sauf son unique contrepoint : savoir s’arrêter à temps. EN: fair judgement means weighing before deciding and taking others seriously; excess is almost always a fault, except for its one counterpoint, knowing when to stop.'),
    table('sheet-jugement-table', 'Dix expressions du jugement', ['Expression', 'Sens'], [
      ['faire la part des choses', 'garder une juste perspective'],
      ['ne pas être dupe de', 'ne pas se laisser tromper'],
      ['trancher dans le vif', 'décider vite et fermement'],
      ['juger à l’aune de', 'évaluer selon un critère'],
      ['avoir voix au chapitre', 'avoir le droit de donner son avis'],
      ['s’en tenir à', 'se limiter strictement à'],
      ['prendre la mesure de', 'évaluer l’ampleur réelle'],
      ['faire bon marché de', 'traiter comme sans valeur'],
      ['ne pas être en reste', 'ne pas se laisser dépasser'],
      ['avoir le sens de la mesure', 'rester dans de justes proportions'],
    ]),
    table('sheet-exces-table', 'Dix expressions de l’excès', ['Expression', 'Sens'], [
      ['ne pas faire dans la demi-mesure', 'agir pleinement, sans se limiter'],
      ['friser le ridicule', 'presque toucher le ridicule'],
      ['verser dans l’excès', 'glisser vers l’excès'],
      ['tomber dans la démesure', 'perdre toute proportion'],
      ['outrepasser les bornes', 'aller au-delà d’une limite'],
      ['confiner à l’absurde', 'être si extrême que cela devient absurde'],
      ['ne connaître aucune limite', 'être totalement démesuré'],
      ['jouer les équilibristes', 'contenter deux camps opposés'],
      ['flirter avec l’excès', 'approcher l’excès sans y tomber'],
      ['savoir s’arrêter à temps', 'le seul contrepoint positif'],
    ]),
  ]),
  sheet('sheet-reputation-destin', 'La réputation et le destin', ['dix expressions de la réputation', 'dix expressions du destin'], [
    teach('sheet-reputation-destin-teach', 'Ce qui monte, tombe ; ce qui semble écrit',
      'Une réputation se construit lentement (jouir d’une réputation sans tache) et tombe en une phrase (ternir, se couvrir de ridicule, tomber en disgrâce, perdre la face), parfois réparée (sauver la face, laver un affront). Le destin, lui, semble parfois déjà écrit (être voué à, le sort en est jeté), et parfois forcé volontairement (forcer le destin, sceller son destin). EN: a reputation builds slowly and falls in a sentence, sometimes repaired; fate sometimes seems already written, and sometimes forced on purpose.'),
    table('sheet-reputation-table', 'Dix expressions de la réputation', ['Expression', 'Sens'], [
      ['jouir d’une réputation sans tache', 'être respecté, sans scandale'],
      ['ternir sa réputation', 'salir une bonne image'],
      ['se couvrir de ridicule', 'tomber par sa propre faute'],
      ['tomber en disgrâce', 'perdre brusquement une faveur'],
      ['perdre la face', 'perdre sa dignité publique'],
      ['sauver la face', 'préserver sa dignité au dernier moment'],
      ['se targuer de', 'se vanter d’un mérite'],
      ['être la coqueluche de', 'être adulé, souvent pour un temps'],
      ['essuyer un affront', 'subir une insulte publique'],
      ['laver un affront', 'effacer une insulte par une réponse'],
    ]),
    table('sheet-destin-table', 'Dix expressions du destin', ['Expression', 'Sens'], [
      ['être voué à', 'sembler destiné d’avance'],
      ['courir à sa perte', 'aller vers son propre échec'],
      ['le sort en est jeté', 'une décision sans retour'],
      ['tirer un trait sur', 'laisser définitivement derrière soi'],
      ['être marqué du sceau de', 'porter une marque durable'],
      ['avoir maille à partir avec', 'être en conflit durable avec'],
      ['forcer le destin', 'tenter d’imposer un résultat'],
      ['être à la merci de', 'dépendre entièrement d’un risque'],
      ['jouer son destin sur un coup de dés', 'risquer tout sur une chance'],
      ['sceller son destin', 'rendre un sort définitif'],
    ]),
  ]),
  sheet('sheet-temps-parole', 'Le temps et la parole', ['dix expressions du temps', 'dix expressions de la parole'], [
    teach('sheet-temps-parole-teach', 'Dater sans dater, parler sans tout dire',
      'Le temps se dit par des images, jamais par une date (à l’aube de, au crépuscule de, de mémoire d’homme), et par ce qui dure ou s’efface (résister à l’épreuve du temps, tomber dans l’oubli). La parole, elle, peut révéler (ne pas mâcher ses mots, avoir le don de la parole) ou cacher (la langue de bois, se payer de mots). EN: time is named by pictures, never a date; speech can reveal, or hide.'),
    table('sheet-temps-table', 'Dix expressions du temps', ['Expression', 'Sens'], [
      ['de mémoire d’homme', 'dans toute la période dont on se souvient'],
      ['à l’aube de', 'au tout début de'],
      ['au crépuscule de', 'vers la fin de'],
      ['résister à l’épreuve du temps', 'rester valable malgré les années'],
      ['graver dans le marbre', 'fixer pour toujours'],
      ['passer à la postérité', 'être retenu par l’histoire'],
      ['tomber dans l’oubli', 'être complètement oublié'],
      ['s’inscrire dans la durée', 'rester valable sur le long terme'],
      ['avoir fait son temps', 'être désormais dépassé'],
      ['être d’un autre temps', 'paraître appartenir à une autre époque'],
    ]),
    table('sheet-parole-table', 'Dix expressions de la parole', ['Expression', 'Sens'], [
      ['peser ses mots', 'choisir chaque mot avec soin'],
      ['avoir le verbe haut', 'parler fort et avec assurance'],
      ['manier la langue de bois', 'parler en formules vagues'],
      ['se payer de mots', 'se contenter de belles paroles'],
      ['tenir un discours convenu', 'parler de façon prévisible'],
      ['faire assaut d’éloquence', 'rivaliser d’habileté'],
      ['s’exprimer à mots couverts', 'parler sans tout dire'],
      ['ne pas mâcher ses mots', 'parler avec franchise directe'],
      ['tourner une phrase', 'construire une phrase avec art'],
      ['avoir le don de la parole', 'parler avec un talent naturel'],
    ]),
  ]),
  sheet('sheet-ambition-solitude', 'L’ambition et la solitude', ['dix expressions de l’ambition', 'dix expressions de la solitude'], [
    teach('sheet-ambition-solitude-teach', 'Risquer tout, puis se retirer',
      'L’ambition va du projet (viser haut, voir grand) au risque total (brûler ses vaisseaux, jouer son va-tout), puis à l’échec et au retour (un échec cuisant, sortir grandi, renaître de ses cendres). La solitude, elle, est presque toujours un choix (garder ses distances, se tenir à l’écart), jamais une exclusion subie. EN: ambition runs from the project to total risk, then to failure and the comeback; solitude is almost always a choice, never an imposed exclusion.'),
    table('sheet-ambition-table', 'Dix expressions de l’ambition', ['Expression', 'Sens'], [
      ['viser haut', 'se fixer un objectif ambitieux'],
      ['voir grand', 'imaginer à grande échelle'],
      ['brûler ses vaisseaux', 's’engager sans retour possible'],
      ['jouer son va-tout', 'risquer tout sur une tentative'],
      ['caresser une ambition', 'nourrir un projet depuis longtemps'],
      ['nourrir un espoir', 'garder un espoir vivant'],
      ['essuyer un échec cuisant', 'subir une défaite douloureuse'],
      ['sortir grandi de', 'devenir plus fort après une épreuve'],
      ['renaître de ses cendres', 'se reconstruire entièrement'],
      ['toucher au but', 'être tout près de réussir'],
    ]),
    table('sheet-solitude-table', 'Dix expressions de la solitude', ['Expression', 'Sens'], [
      ['se retirer dans sa tour d’ivoire', 's’isoler du monde, par choix'],
      ['s’enfermer dans le mutisme', 'refuser de parler'],
      ['garder ses distances', 'éviter la proximité'],
      ['faire bande à part', 'rester en groupe séparé'],
      ['se murer dans le silence', 's’entourer d’un silence complet'],
      ['vivre en marge de', 'vivre à la limite d’un groupe'],
      ['se tenir à l’écart', 'rester volontairement en dehors'],
      ['se replier sur soi-même', 'se refermer après un échec'],
      ['rester à l’abri des regards', 'éviter l’exposition publique'],
      ['se draper dans sa dignité', 'refuser de répondre, par fierté'],
    ]),
  ]),
  sheet('sheet-bilan-cent', 'Le bilan des cent expressions', ['le plan du portrait', 'les dix familles en un coup d’œil'], [
    teach('sheet-bilan-cent-teach', 'Une expression par idée',
      'Pour écrire un texte qui tient : nomme d’abord la famille dont tu as besoin, choisis l’expression dont l’image ET le registre tiennent dans ta phrase, et n’en mets jamais deux dans la même phrase. EN: to write a text that holds together: name the family you need first, choose the idiom whose image AND register fit your sentence, and never place two in the same sentence.'),
    table('sheet-bilan-cent-table', 'Dix familles, un exemple chacune', ['Famille', 'Un exemple'], [
      ['le pouvoir', 'tenir les rênes de'],
      ['la ruse', 'tirer les ficelles'],
      ['le jugement', 'trancher dans le vif'],
      ['l’excès', 'outrepasser les bornes'],
      ['la réputation', 'tomber en disgrâce'],
      ['le destin', 'le sort en est jeté'],
      ['le temps', 'tomber dans l’oubli'],
      ['la parole', 'ne pas mâcher ses mots'],
      ['l’ambition', 'brûler ses vaisseaux'],
      ['la solitude', 'se retirer dans sa tour d’ivoire'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ton portrait',
    opener: {
      line: "Le portrait de Berthier traverse cinq familles sans jamais en mélanger deux dans une phrase : ici tu écris le tien. EN: Berthier’s portrait crosses five families without ever mixing two in one sentence: here you write your own.",
      imageRef: 'lessons/c2-03-cent-idiomes/act12.jpg',
    },
    sections: [],
    milestone: 'Tu écris un texte qui croise plusieurs familles d’expressions soutenues, une par phrase, chacune juste par son image et son registre. EN: You can write a text that crosses several families of elevated idioms, one per sentence, each right in its picture and its register.',
    estScreens: 48, restPoints: ['a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz'],
  },
  sections: [A12_MODELE, A12_PLAN, A12_USAGES, A12_SCENARIO, A12_MISSION, A12_PARLER, A12_CHEAT, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP],
  imports: IMPORTED.act12,
};

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11, ACT12];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

/** MissionRich renders options in authored order, so every closed MISSION
 *  item is rotated here, options and `correct` together, so each
 *  option-count class spreads evenly and no slot repeats more than twice in
 *  a row. No text is changed and no `why` names a position. The quiz keeps
 *  its authored slots, scattered by hand above. */
function balanceSlots(sections: LessonSection[], drills: LessonDrill[]): void {
  const used: Record<number, number[]> = {};
  const recent: number[] = [];
  const visit = (node: unknown): void => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) { node.forEach(visit); return; }
    const o = node as { opts?: unknown; correct?: unknown };
    if (Array.isArray(o.opts) && typeof o.correct === 'number') {
      const opts = o.opts as string[];
      const n = opts.length;
      const u = (used[n] ??= new Array(n).fill(0));
      const order = [...Array(n).keys()].sort((a, b) => u[a] - u[b] || a - b);
      const blocked = recent.length >= 2 && recent[recent.length - 1] === recent[recent.length - 2] ? recent[recent.length - 1] : -1;
      const target = order.find((k) => k !== blocked) ?? order[0];
      const shift = (target - (o.correct as number) + n) % n;
      o.opts = opts.map((_, i) => opts[(i - shift + n) % n]);
      o.correct = target;
      u[target]++;
      recent.push(target);
    }
    for (const v of Object.values(node as Record<string, unknown>)) visit(v);
  };
  for (const s of sections) if (s.type !== 'quiz' && s.type !== 'task') visit(s);
  for (const d of drills) visit(d);
}
balanceSlots(SECTIONS, DRILL_LIST);

export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ROW.has(id)),
]);

export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c2-03-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-c2-03-berthier-renes': 'Berthier’s rise (act 2 reading), ONE VOICE, one take, a measured narrator describing a career of authority, even pace, no drama.',
  'rec-c2-03-pouvoir-cinq': 'The five power cards (act 2), ONE VOICE, one take, read firmly, at the register of each card.',
  'rec-c2-03-piege-pouvoir': 'The six trap cards (act 2): the audio step plays each card’s CORRECT (fixed) sentence, not the trap `promptSound`. Read the six plainly, even pace.',
  'rec-c2-03-brouillon-prudent': 'Inès and Julien’s exchange (act 3 story), TWO VOICES: Julien’s lines read as a draft being proposed, Inès’s narration measured and editorial.',
  'rec-c2-03-ruse-cinq': 'The five cunning cards (act 3), ONE VOICE, one take, read with a slightly knowing, wry tone where the image calls for it.',
  'rec-c2-03-jugement-ecoute': 'REQUIRED FOR THE EAR MISSION (act 4): eight lines, ONE TAKE, ONE VOICE, in authored order, read plainly, no vocal cue beyond the words.',
  'rec-c2-03-jugement-cinq': 'The five judgement cards (act 4), ONE VOICE, one take, read in a measured, deliberate tone.',
  'rec-c2-03-piege-jugement': 'The six trap cards (act 4): the audio step plays each card’s CORRECT sentence, not the trap `promptSound`.',
  'rec-c2-03-discours-maire': 'The mayor’s speech (act 5 reading), ONE VOICE, a narrator describing excess with a faintly amused, editorial distance.',
  'rec-c2-03-exces-cinq': 'The five excess cards (act 5), ONE VOICE, one take, read with mounting emphasis across the deck.',
  'rec-c2-03-lendemain-article': 'Berthier’s reckoning (act 6 story), TWO VOICES: the narrator measured, Berthier’s own lines read with careful restraint.',
  'rec-c2-03-reputation-cinq': 'The five reputation cards (act 6), ONE VOICE, one take, read evenly, no hint of judgement in the voice itself.',
  'rec-c2-03-piege-reputation': 'The six trap cards (act 6): the audio step plays each card’s CORRECT sentence, not the trap `promptSound`.',
  'rec-c2-03-destin-ecoute': 'REQUIRED FOR THE EAR MISSION (act 7): eight lines, ONE TAKE, ONE VOICE, in authored order, read plainly.',
  'rec-c2-03-destin-cinq': 'The five fate cards (act 7), ONE VOICE, one take, read with a slightly graver, more deliberate pace than the other decks.',
  'rec-c2-03-bilan-berthier': 'Berthier’s retrospective (act 8 reading), ONE VOICE, a reflective, slower pace, a man looking back.',
  'rec-c2-03-temps-cinq': 'The five time cards (act 8), ONE VOICE, one take, read evenly, letting the images (dawn, twilight, marble) carry the weight.',
  'rec-c2-03-piege-temps': 'The six trap cards (act 8): the audio step plays each card’s CORRECT sentence, not the trap `promptSound`.',
  'rec-c2-03-deux-styles': 'Inès at the debate (act 9 story), TWO VOICES: the narrator observational, the quoted lines read as overheard speech.',
  'rec-c2-03-parole-cinq': 'The five speech cards (act 9), ONE VOICE, one take, read with the register each card names (assured, evasive, plain).',
  'rec-c2-03-ambition-ecoute': 'REQUIRED FOR THE EAR MISSION (act 10): eight lines, ONE TAKE, ONE VOICE, in authored order, read plainly.',
  'rec-c2-03-ambition-cinq': 'The five ambition cards (act 10), ONE VOICE, one take, read with rising then resolving energy across the deck.',
  'rec-c2-03-piege-ambition': 'The six trap cards (act 10): the audio step plays each card’s CORRECT sentence, not the trap `promptSound`.',
  'rec-c2-03-berthier-loin': 'Berthier in withdrawal (act 11 reading), ONE VOICE, a slow, distant, quiet narration.',
  'rec-c2-03-solitude-cinq': 'The five solitude cards (act 11), ONE VOICE, one take, read quietly, with real stillness between cards.',
  'rec-c2-03-portrait-final': 'The full Berthier portrait (act 12), ONE VOICE, one take, the complete literary register sustained start to finish, no ironic undertone.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C2 · LEÇON 03',
  intro: "B1 and B2 taught you idioms built on the body, animals, food, colours and proverbs. This lesson opens ten new families at a literary or formal register: power, cunning, judgement, excess, reputation, fate, time, speech, ambition and solitude, a hundred idioms in all. The new skill is not just recognising the picture each idiom draws, but reading whether its REGISTER fits the formal or literary text you want to drop it into, and catching the plausible near-miss (a changed article, preposition or agreement) that does not actually exist. The lesson follows one invented figure, the judge Antoine Berthier, across several families, and ends with a portrait you write yourself.",
  skill: 'CE',
  grammarAssumed: ['c1.17', 'b1.27', 'b1.28', 'b1.29', 'b2.34'],
  grammarIntroduced: [
    'One hundred advanced idiomatic expressions across ten domains (power, cunning, judgement, excess, reputation, fate, time, speech, ambition, solitude), each at a literary or formal register, each authored in a full sentence rather than an isolated definition',
    'Choosing an idiom by BOTH its image and its register, since a correct idiom can still be the wrong choice for a text whose register it does not fit',
    'Recognising a plausible-sounding idiom that does not exist: a near-miss created by a changed article, preposition, determiner or agreement, against the exact fixed form',
    'Writing a short text (a portrait) that crosses several idiom families, one idiom per sentence, never a list',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Le B1 et le B2 t’ont appris des expressions sur le corps, les animaux, la nourriture, les couleurs et les proverbes. Cette leçon ouvre dix familles neuves, au registre soutenu ou littéraire : le pouvoir, la ruse, le jugement, l’excès, la réputation, le destin, le temps, la parole, l’ambition et la solitude, cent expressions en tout. La nouveauté n’est pas seulement de reconnaître l’image de chaque expression, mais de lire si son registre tient dans le texte où tu veux la poser, et de repérer l’expression qui sonne juste et qui pourtant n’existe pas. La leçon suit un personnage inventé, le juge Antoine Berthier, à travers plusieurs familles, et se termine par un portrait que tu écris toi-même.",
    minutes: 180,
    difficulty: 5,
    glyph: 'expression',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: CENT_IDIOMES_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (B1 build log, 2026-09-25). Kept, as every lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not
 *  released: every row whose `drills` carries no `flashcard`. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE };
export const lessonWithoutTask = (): Lesson => LESSON;
