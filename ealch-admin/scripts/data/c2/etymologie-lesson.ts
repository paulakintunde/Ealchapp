// c2.05.l1 « Étymologie et formation des mots » — the lesson. DRAFT, the
// first lesson of wave 2 of the C2 band, the V (vocab) shape per
// C2-BUILD-PLAN.md. To B1-WORKSHOP-AND-VOCAB-SHAPES.md §2 on top of
// B1-BUILD-PLAYBOOK.md, with the C2 rules of C2-BUILD-PLAN.md and the c2.05
// brief in C2-BUILD-LOG.md ("Wave 2 author briefs").
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself (`lessonWithoutTask()` returns it unchanged).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE VOCAB SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   EIGHT FAMILIES, each its own act (2-9), each the same six-beat loop:
//   MEET (useCases, the family's words in a real situation), NAME (a
//   cardDeck of 5, then a tapTable of 5 — the act's ten words split across
//   two renders), BUILD (a gated groupDrill classifying by shared root or
//   affix), TRAP (a stepped trapDrill against a plausible wrong reasoning
//   or a confusable near-miss), CHECK (the gated act check). Act 1 sets the
//   problem; act 10 is the task.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (famille · missions · mots)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le problème                   5   a word nobody can look up in the
//                                          moment, guessed wrong then right
//    2  Les racines grecques du savoir 6   tele-, phon-, graph-, bio-,
//                                          logie, scope (11 words)
//    3  Préfixes de position/mouvement 6   trans-, inter-, sur-, sous-
//    4  Préfixes de négation           6   in-/im-/il-/ir-, dis-/dé-, anti-
//    5  Une racine, une famille de     6   ducere -> conduire, déduire...;
//       verbes                             portare -> apporter, supporter...
//    6  Suffixes qui fabriquent un nom 6   -tion, -ment, -age, -ure, -ance
//    7  Suffixes qui fabriquent un     6   -able, -eux, -if, -al
//       adjectif
//    8  Le mot populaire et le mot     6   sept doublets, un seul ancêtre
//       savant                             latin chacun
//    9  Racines voisines, histoires    6   diskos vs dis-, phobos vs phone,
//       séparées                           choucroute et contredanse corrigés
//   10  Ta pierre                     11   model, plan, scenario, TASK,
//                                          practice, quiz, review, roundup
//
//   TOTAL 64 missions, 10 acts. Corpus: 113 authored rows (.1000-.1112,
//   inside the claimed .1000-.1199 block, .1113-.1199 left free). Quiz: 8
//   rounds of 8 (one per family act, 2-9). Eight error triggers, eight
//   drills, six reference sheets, six terms. Chapter artwork:
//   `c2-etymologie-image-prompts.md`, 10 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Derrière chaque mot savant dort une pierre ancienne : la reconnaître,
//   c’est deviner le mot avant de le connaître. » EN: Behind every learned
//   word sleeps an ancient stone: recognising it lets you guess the word
//   before you know it.
//
//   ONE METAPHOR, THE STONE. Recognising a root or an affix is spotting a
//   stone (acts 2-7); knowing where a stone REALLY came from, rather than
//   where it looks like it came from, is the other half (acts 8-9); laying
//   a stone correctly yourself is the task (act 10).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    deriving a word's probable meaning from Greek/Latin roots,
//           prefixes and suffixes; the in-/im-/il-/ir- assimilation rule;
//           one Latin word giving French two descendants (a doublet);
//           telling a real root from a look-alike one; naming and
//           correcting a folk etymology against a real, sourced history.
//   QUOTES  c1.18's reframe (act 1), imported from its own corpus file,
//           never retyped.
//   LEAVES  learned semantic anglicisms (initier, opportunité, impacter...)
//           to c1.18, never re-taught, never re-used by example: this
//           lesson is about word ROOTS and HISTORY, never a modern meaning
//           error a word already carries.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use vous where the situation calls for
//   it (an admissions interview). French only on the learner surface;
//   English authored on every `en` field and every trailing « EN: », never
//   shown by default. No em dash, no U+203F tie, never "honnête"/"honest".
//   Typographic ’ throughout. No spaced « ? » or « ! » in a scene or story
//   bubble. Citations by trail position in French words (« la leçon 18 du
//   C1 »), never a raw id. Mission answer slots are spread by
//   `balanceSlots()`; the quiz is left with its authored slots scattered by
//   hand.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. 64 missions, leaner than cent-idiomes' 76 and above precision-
//      nuance's 45. This lesson's scope (8 families of 10-11 words, each
//      needing a careful etymological grounding) felt complete at this
//      size without padding — extend any family before the phone review,
//      or ship at this size?
//   2. Act 8's seven doublets (hôtel/hôpital, poison/potion, chétif/captif,
//      loyal/légal, droit/direct, frêle/fragile, écouter/ausculter) and
//      act 9's two corrected folk etymologies (choucroute, contredanse)
//      were each checked against this author's own knowledge of TLFi/Le
//      Robert historique/Bloch-Wartburg, the standard references named in
//      the brief, but not against a live fetch of any one of them (this
//      draft author has no web access). Every example was chosen for
//      being a textbook-standard, frequently cited case specifically
//      because of that: flag for an explicit TLFi/Robert historique
//      look-up in the pre-review pass, per the brief's own "budget more
//      fact-check time" instruction.
//   3. No row is reused from c1.18 by id (corpus, same rule every C2
//      lesson has followed): only its REFRAME is quoted, and its trail
//      position is read from the local `seed.json`.
//   4. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap, ALL_ROWS, ROWS_BY_ACT,
  IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor, MESSAGE_GIRARD, MESSAGE_GIRARD_EN,
  C118_REF, C118_REFRAME, C118_REFRAME_EN,
} from './etymologie-corpus.ts';
import { ETYMOLOGIE_TERMS } from './etymologie-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };
type TrapCard = NonNullable<Sec<'trapDrill'>['cards']>[number];
type TrapStep = NonNullable<Sec<'trapDrill'>['steps']>[number];
type Card = NonNullable<Sec<'cardDeck'>['cards']>[number];

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string };
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as unknown as SrcItem]));

/** An item's fr/en. Throws on a typo, so no section can name an id that
 *  does not exist in this lesson's own corpus. */
function src(id: string): SrcItem {
  const r = ROW.get(id);
  if (!r) throw new Error(`c2.05: no item ${id}`);
  return r;
}

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
const uc = (situation: string, id: string) => ({ situation, fr: src(id).fr, en: src(id).en });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** One word card for the NAME beat: head = the word, label = a short tag
 *  (the root/affix it carries), fr = the authored sentence using it, body =
 *  the decomposition and meaning, with the English. */
const card = (id: string, head: string, label: string, body: string): Card =>
  ({ head, label, fr: src(id).fr, body });

/** A tapTable row for the NAME beat's second half. */
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
 *  `promptSound` is a plausible WRONG reasoning or a confusable near-miss,
 *  inline, never backed by a row (it must never be quizzable as if it were
 *  the actual explanation). */
const trap = (id: string, ipa: string, promptLabel: string, promptSound: string, tip: string): TrapCard =>
  ({ promptLabel, promptSound, fr: src(id).fr, ipa, tip });

const STEPS_STD = (cardsTitle: string): TrapStep[] => [
  { label: 'La règle', kind: 'rule', title: 'La règle' },
  { label: 'Six cartes', kind: 'cards', title: cardsTitle },
  { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
  { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE PROBLÈME
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Un mot qu’on ne peut pas chercher', frSub: 'Un entretien d’admission, à Montréal',
  setting: { place: "Un bureau d’entretien", city: 'Montréal', time: '14 h', ambience: 'une table, deux chaises, aucun dictionnaire en vue' },
  beats: [
    { kind: 'narration', text: "Montréal, en début d’après-midi. Léo passe un entretien d’admission à la maîtrise. Mme Girard pose une question sans prévenir.", size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Mme Girard', fr: "On m’a dit que cette réunion était chronophage. Que comprenez-vous.", en: 'I was told that meeting was chronophage. What do you make of it.', respell: '[ohⁿ ma dee kuh set ray-nyohⁿ ay-teh kroh-noh-FAZH]', size: 'md', audio: AUDIO },
    { kind: 'narration', text: "Pas de dictionnaire sur la table. Léo a une seconde pour répondre.", size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Léo hésite entre deux réponses. Laquelle choisis-tu.', size: 'lg',
      options: [
        { fr: src(E(1004)).fr, respell: '[sa dwa vuh-NEER duh krom la koo-LUHR ar-zhahⁿ-TAY]', en: src(E(1004)).en, outcome: 'breaks', audio: AUDIO },
        { fr: src(E(1005)).fr, respell: '[kroh-noh-fazh veh deer kee mahⁿzh luh tahⁿ]', en: src(E(1005)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Mme Girard hoche la tête : « Vous avez décomposé le mot au lieu de le deviner au son. »",
        breaks: "Mme Girard reste silencieuse un instant : « Chrome n’a aucun rapport. Vous avez répondu au son, pas au sens. »",
      },
    },
    {
      kind: 'break', heading: 'Deux pierres, un sens',
      body: `${src(E(1001)).fr} ${src(E(1002)).fr} ${src(E(1003)).fr} EN: ${src(E(1001)).en}`,
      wrong: { fr: src(E(1004)).fr, ipa: '/sa dwa vniʁ də kʁom la ku.lœʁ aʁ.ʒɑ̃.te/', respell: '[sa dwa vuh-NEER duh krom]', en: src(E(1004)).en },
      right: { fr: src(E(1005)).fr, ipa: '/kʁɔ.no.faʒ vø diʁ ki mɑ̃ʒ lə tɑ̃/', respell: '[kroh-noh-fazh veh deer kee mahⁿzh luh tahⁿ]', en: src(E(1005)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: "Léo a deviné juste en repérant deux pierres anciennes, pas en cherchant un mot qui sonnait pareil. Cette leçon t’apprend à lire ces pierres, et à vérifier d’où elles viennent vraiment.", size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['racine', 'affixe'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Deviner un mot savant par ses pierres', s: 'Actes 2 à 7 : racines grecques, préfixes et suffixes latins' },
    { t: 'Repérer une racine voisine qui trompe', s: 'Acte 9 : mêmes lettres, deux histoires séparées' },
    { t: 'Expliquer d’où vient vraiment un mot', s: 'Acte 8 : un mot savant, un mot populaire, un seul ancêtre' },
    { t: 'Toujours citer une source, jamais deviner', s: 'Acte 9 et 10 : une histoire vraie contre une histoire plausible' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_ACQUIS: Sec<'examples'> = {
  type: 'examples', id: 'a1-acquis', layer: 'core',
  title: 'Ce que tu sais déjà',
  examples: [
    { fr: C118_REFRAME, en: C118_REFRAME_EN, note: `${Cap(C118_REF)} : les anglicismes savants, une erreur de sens actuelle` },
  ],
  audio: AUDIO, say: REFRAME, terms: ['racine'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où cette lecture compte vraiment',
  cases: [
    uc('Un entretien, sans dictionnaire sous la main', E(1000)),
    uc('Un rapport de laboratoire plein de mots savants', E(1012)),
    uc('Un contrat qui emploie un mot rare', E(1022)),
    uc('Une discussion sur l’origine d’un mot courant', E(1092)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['racine', 'affixe'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le réflexe du son', 'Léo a d’abord pensé à « chrome » parce que...', ['le mot ressemblait par le son', 'il avait déjà lu ce mot'], 0,
    'Une ressemblance de son n’est jamais une preuve de parenté. EN: a sound resemblance is never proof of kinship.'),
  ctl('La bonne méthode', 'Pour deviner un mot savant inconnu, il faut...', ['chercher un mot qui sonne pareil', 'repérer ses racines et ses affixes'], 1,
    'Les pierres anciennes du mot portent son sens, pas son son. EN: the word’s ancient stones carry its meaning, not its sound.'),
  ctl('La mission de cette leçon', 'Cette leçon t’apprend à...', ['deviner un mot par ses pierres, et vérifier d’où elles viennent', 'traduire chaque mot savant en anglais', 'éviter tous les mots rares'], 0,
    'Deviner, puis vérifier avec une source réelle : les deux gestes de toute la leçon. EN: guess, then verify with a real source: the lesson’s two moves throughout.'),
], ['racine']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le problème',
    opener: {
      line: "Léo n’a pas de dictionnaire, et pourtant il devine juste : ici tu apprends la méthode qui lui a permis ça. EN: Léo has no dictionary, and still guesses right: here you learn the method that let him do that.",
      imageRef: 'lessons/c2-05-etymologie/act01.jpg',
    },
    sections: [],
    milestone: 'Tu devines le sens probable d’un mot savant inconnu en repérant ses racines et ses affixes, plutôt qu’en cherchant un mot qui sonne pareil. EN: You can guess the probable meaning of an unknown learned word by spotting its roots and affixes, rather than reaching for a word that merely sounds similar.',
    estScreens: 20, restPoints: ['a1-usages'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_ACQUIS, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LES RACINES GRECQUES DU SAVOIR
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a2-usages', layer: 'core', title: 'Des pierres grecques, partout',
  cases: [
    uc('Un objet du quotidien, nommé par le son qu’il transporte', E(1010)),
    uc('Un métier qui écrit avec la lumière', E(1011)),
    uc('Une discipline qui étudie la vie', E(1012)),
    uc('Un instrument pour regarder le très petit', E(1013)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['racine'],
};

const A2_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-racines-grecques',
  title: 'Cinq mots, cinq racines grecques', frSub: 'Tele, phon, phot, bio, logos, micro',
  hint: 'Cinq cartes. Chaque mot porte deux pierres grecques.',
  audio: REC('rec-c2-05-grec-cinq'), say: REFRAME, terms: ['racine'],
  cards: [
    card(E(1010), 'téléphone', 'tele + phone', "tele (loin) + phone (le son) : le son transporté de loin. EN: tele (far) + phone (sound): sound carried from afar."),
    card(E(1011), 'photographe', 'phot + graphein', "phot- (la lumière) + graphein (écrire) : qui écrit avec la lumière. EN: phot- (light) + graphein (to write): one who writes with light."),
    card(E(1012), 'biologie', 'bios + logos', "bios (la vie) + logos (l’étude) : l’étude de la vie. EN: bios (life) + logos (study): the study of life."),
    card(E(1013), 'microscope', 'mikros + skopein', "mikros (petit) + skopein (regarder) : pour regarder le petit. EN: mikros (small) + skopein (to look at): for looking at the small."),
    card(E(1014), 'chronologie', 'khronos + logos', "khronos (le temps) + logos (l’étude) : l’étude de l’ordre des temps. EN: khronos (time) + logos (study): the study of the order of time."),
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a2-table', layer: 'core', sheetId: 'sheet-racines-grecques',
  title: 'Cinq pierres de plus',
  cols: ['Mot', 'Racines grecques'],
  rows: [
    tapRow(['télégraphe', 'tele + graphein'], E(1015), 'Écrire de loin', 'Tele (loin) + graphein (écrire) : écrire un message à distance. EN: tele (far) + graphein (to write): to write a message at a distance.'),
    tapRow(['phonétique', 'phone + -ique'], E(1016), 'Relatif au son', 'Phone (le son) donne tout ce qui concerne la prononciation. EN: phone (sound) gives everything about pronunciation.'),
    tapRow(['graphologie', 'graphein + logos'], E(1017), 'L’étude de l’écriture', 'Graphein (écrire) + logos (l’étude) : l’étude de l’écriture d’une personne. EN: graphein (to write) + logos (study): the study of a person’s handwriting.'),
    tapRow(['macroscopique', 'makros + skopein'], E(1018), 'Visible à grande échelle', 'Makros (grand) + skopein (regarder) : visible sans instrument, à grande échelle. EN: makros (large) + skopein (to look at): visible without an instrument, at a large scale.'),
    tapRow(['biographie', 'bios + graphein'], E(1019), 'Écrire une vie', 'Bios (la vie) + graphein (écrire) : le récit écrit d’une vie. EN: bios (life) + graphein (to write): the written account of a life.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['racine'],
};

const A2_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-groupe', layer: 'core', size: 'lg',
  title: 'Classe-les par racine partagée', frSub: 'Dix mots, quatre racines grecques',
  groups: [
    grp('La famille de phone (le son)', [
      it(E(1010), 'téléphone : tele + phone'),
      it(E(1016), 'phonétique : phone + -ique'),
    ], chk('Phone, en grec, veut dire...', ['le son', 'la lumière'], 0,
      'Phone désigne le son, jamais la lumière. EN: phone names sound, never light.')),
    grp('La famille de graphein (écrire)', [
      it(E(1011), 'photographe : phot + graphein'),
      it(E(1015), 'télégraphe : tele + graphein'),
      it(E(1017), 'graphologie : graphein + logos'),
    ], chk('Graphein, en grec, veut dire...', ['regarder', 'écrire'], 1,
      'Graphein veut dire écrire, dans les trois mots. EN: graphein means to write, in all three words.')),
    ctl('La famille de skopein (regarder)', 'Microscope et macroscopique partagent la racine skopein. Elle veut dire...', ['regarder', 'mesurer'], 0,
      'Skopein veut dire regarder ; micro et macro disent seulement la taille regardée. EN: skopein means to look at; micro and macro only name the size being looked at.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['racine'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a2-piege', layer: 'core', swipe: true,
  title: 'Six mots, un seul raisonnement qui dérape',
  rule: {
    title: 'Une racine ne vient jamais d’un mot français qui lui ressemble',
    body: "Un mot grec ou latin garde un sens fixe, prouvé par un dictionnaire, jamais deviné depuis un mot français qui sonne pareil. EN: a Greek or Latin root keeps a fixed meaning, proved by a dictionary, never guessed from a similar-sounding French word.",
  },
  cards: [
    trap(E(1010), '/leo a ʃɑ̃.ʒe də te.le.fɔn la sə.mɛn dɛʁ.nje/', 'téléphone, comme télé', 'Téléphone vient de télé, comme la télévision.', 'Tele veut dire loin, pas « télévision » : la télévision est elle-même construite sur tele. EN: tele means far, not "television": television is itself built on tele.'),
    trap(E(1011), '/lə fɔ.to.ɡʁaf a a.tɑ̃.dy la tɔ̃.be dy ʒuʁ puʁ sa dɛʁ.njɛʁ pʁiz/', 'photographe, comme photo', "Photographe vient de photo, une image qu’on prend.", 'Photo vient lui-même de phot- (la lumière) ; graphein veut dire écrire, jamais « prendre ». EN: photo itself comes from phot- (light); graphein means to write, never "to take".'),
    trap(E(1012), '/ɛl tɛʁ.min œ̃ dɔk.to.ʁa ɑ̃ bjɔ.lɔ.ʒi ma.ʁin/', 'biologie, comme bio au marché', 'Biologie vient de bio, comme un produit bio, naturel.', 'Bios veut dire la vie, jamais « naturel » ou « sans produit chimique ». EN: bios means life, never "natural" or "chemical-free".'),
    trap(E(1013), '/sɑ̃ mi.kʁɔs.kɔp sɛt bak.te.ʁi ʁɛst ɛ.vi.zi.bl/', 'microscope, comme micro', 'Microscope vient de micro, le micro qu’on tient pour chanter.', 'Mikros veut dire petit ; le micro qu’on tient vient lui-même de ce même mikros. EN: mikros means small; the microphone you hold itself comes from that same mikros.'),
    trap(E(1014), '/la kʁɔ.no.lɔ.ʒi dez e.ve.nə.mɑ̃ ʁɛst kɔ̃.fyz dɑ̃ sə ʁa.pɔʁ/', 'chronologie, comme chrono sportif', 'Chronologie vient de chrono, le chronomètre qu’on utilise en sport.', 'Le chronomètre sportif est lui-même construit sur khronos ; l’un n’explique pas l’autre, les deux viennent de la même racine. EN: the sports stopwatch is itself built on khronos; neither explains the other, both come from the same root.'),
    trap(E(1020), '/lə te.le.fe.ʁik ʁə.lji la va.le o sɔ.mɛ ɑ̃ duz mi.nyt/', 'téléphérique, comme téléphone', 'Téléphérique vient de téléphone, parce que ça commence pareil.', 'Tele est bien partagé, mais la seconde moitié vient de pherein (porter), pas de phone : ce n’est pas la même racine. EN: tele is shared, but the second half comes from pherein (to carry), not phone: not the same root.'),
  ],
  drill: [
    { promptSay: 'Tele, en grec, veut dire... .', opts: ['proche', 'loin'], correct: 1 },
    { promptSay: 'Graphein, en grec, veut dire... .', opts: ['écrire', 'regarder'], correct: 0 },
    { promptSay: 'Bios, en grec, veut dire... .', opts: ['la vie', 'la nature'], correct: 0 },
    { promptSay: 'Mikros, en grec, veut dire... .', opts: ['petit', 'un instrument'], correct: 0 },
    { promptSay: 'Khronos, en grec, veut dire... .', opts: ['le temps', 'la vitesse'], correct: 0 },
    { promptSay: 'Dans téléphérique, la deuxième moitié vient de ... , pas de phone.', opts: ['pherein, porter', 'phonos, le cri'], correct: 0 },
    { promptSay: 'Une racine grecque se prouve par ... , jamais par un mot français qui sonne pareil.', opts: ['un dictionnaire étymologique', 'une impression'], correct: 0 },
    { promptSay: 'Microscope et macroscopique partagent la racine ... .', opts: ['skopein, regarder', 'metron, mesurer'], correct: 0 },
  ],
  steps: STEPS_STD('Six mots grecs'),
  audio: REC('rec-c2-05-piege-grec'), say: REFRAME, terms: ['racineVoisine'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Phone et graphein', 'Téléphone et téléphérique partagent la racine tele, mais pas...', ['la deuxième moitié du mot', 'la première moitié du mot'], 0,
    'La deuxième moitié vient de pherein dans l’un, de phone dans l’autre. EN: the second half comes from pherein in one, phone in the other.'),
  ctl('Le vrai test', 'Une racine grecque se prouve...', ['par une impression de ressemblance', 'par un dictionnaire étymologique'], 1,
    'Jamais une impression seule. EN: never an impression alone.'),
  ctl('Bio et logie', 'Biologie veut dire...', ['l’étude de la vie', 'un produit naturel'], 0,
    'Bios (la vie) + logos (l’étude), jamais « naturel ». EN: bios (life) + logos (study), never "natural".'),
], ['racine', 'racineVoisine']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Les racines grecques du savoir',
    opener: {
      line: "Téléphone, photographe, biologie : onze mots, quatre racines grecques, un seul geste pour les tenir toutes. EN: Téléphone, photographe, biologie: eleven words, four Greek roots, one single move to hold them all.",
      imageRef: 'lessons/c2-05-etymologie/act02.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais tele, phone, graphein, bios, logos et skopein dans onze mots savants, et tu distingues une racine partagée d’une simple ressemblance de son. EN: You can recognise tele, phone, graphein, bios, logos and skopein across eleven learned words, and tell a shared root from a mere sound resemblance.',
    estScreens: 30, restPoints: ['a2-table', 'a2-groupe'],
  },
  sections: [A2_USAGES, A2_DECK, A2_TABLE, A2_GROUPE, A2_PIEGE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — PRÉFIXES DE POSITION ET DE MOUVEMENT
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a3-usages', layer: 'core', title: 'Où le préfixe décide de la position',
  cases: [
    uc('Déplacer un objet lourd d’un lieu à un autre', E(1021)),
    uc('Un contrat qui ne cache aucun frais', E(1022)),
    uc('Un garage construit sous le niveau de la rue', E(1030)),
    uc('Un rôle de contrôle, placé au-dessus des autres', E(1027)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['affixe'],
};

const A3_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a3-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-prefixes-latins',
  title: 'Cinq mots, cinq préfixes de position', frSub: 'Trans, inter, sur',
  hint: 'Cinq cartes. À travers, entre, ou au-dessus.',
  audio: REC('rec-c2-05-prefixe-cinq'), say: REFRAME, terms: ['affixe'],
  cards: [
    card(E(1021), 'transporter', 'trans + portare', "trans (à travers) + portare (porter) : porter d’un lieu à un autre, à travers l’espace. EN: trans (across) + portare (to carry): to carry from one place to another."),
    card(E(1022), 'transparent', 'trans + parere', "trans (à travers) + parere (paraître) : qui laisse voir à travers. EN: trans (across) + parere (to appear): something that lets you see through."),
    card(E(1023), 'international', 'inter + national', "inter (entre) + national : entre plusieurs nations. EN: inter (between) + national: between several nations."),
    card(E(1024), 'intervenir', 'inter + venire', "inter (entre) + venire (venir) : venir se placer entre deux parties. EN: inter (between) + venire (to come): to come in between two parties."),
    card(E(1025), 'survoler', 'sur + voler', "sur- (au-dessus) + voler : voler au-dessus d’un lieu. EN: sur- (above) + voler (to fly): to fly above a place."),
  ],
};

const A3_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-table', layer: 'core', sheetId: 'sheet-prefixes-latins',
  title: 'Cinq préfixes de plus',
  cols: ['Mot', 'Préfixe + sens'],
  rows: [
    tapRow(['interrompre', 'inter + rompre'], E(1026), 'Rompre au milieu', 'Inter (entre, au milieu) + rompre : casser une action en plein milieu. EN: inter (between) + rompre (to break): to break an action right in the middle.'),
    tapRow(['superviser', 'super + visare'], E(1027), 'Regarder au-dessus', 'Super (au-dessus) + visare (regarder) : contrôler en se plaçant au-dessus. EN: super (above) + visare (to look): to control by standing above.'),
    tapRow(['surnaturel', 'sur + naturel'], E(1028), 'Au-dessus du naturel', 'Sur- (au-dessus) + naturel : ce qui dépasse les lois naturelles. EN: sur- (above) + naturel: what goes beyond natural laws.'),
    tapRow(['soumettre', 'sub + mettre'], E(1029), 'Mettre dessous', 'Sub- devenu sou- (dessous) + mettre : mettre sous l’autorité d’un autre. EN: sub- turned sou- (under) + mettre (to put): to put under another’s authority.'),
    tapRow(['souterrain', 'sub + terrain'], E(1030), 'Sous la terre', 'Sub- devenu sou- (dessous) + terrain : construit sous le niveau du sol. EN: sub- turned sou- (under) + terrain: built below ground level.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['affixe'],
};

const A3_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-groupe', layer: 'core', size: 'lg',
  title: 'Classe-les par préfixe de position', frSub: 'À travers, entre, au-dessus, dessous',
  groups: [
    grp('Trans-, à travers', [
      it(E(1021), 'transporter : à travers l’espace'),
      it(E(1022), 'transparent : à travers la matière'),
    ], chk('Trans- veut dire...', ['au-dessus', 'à travers'], 1,
      'Trans- veut toujours dire à travers, jamais au-dessus. EN: trans- always means across, never above.')),
    grp('Inter-, entre', [
      it(E(1023), 'international : entre les nations'),
      it(E(1024), 'intervenir : venir entre deux parties'),
      it(E(1026), 'interrompre : casser au milieu'),
    ], chk('Inter- veut dire...', ['entre, au milieu', 'dessous'], 0,
      'Inter- place toujours la chose entre deux autres. EN: inter- always places the thing between two others.')),
    ctl('Sur- et sous-', 'Survoler et souterrain sont des préfixes...', ['opposés : au-dessus contre dessous', 'identiques'], 0,
      'Sur- dit au-dessus, sous- dit dessous : deux directions opposées. EN: sur- says above, sous- says below: two opposite directions.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['affixe'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a3-piege', layer: 'core', swipe: true,
  title: 'Six mots, un seul raisonnement qui dérape',
  rule: {
    title: 'Le préfixe garde sa direction dans tous ses mots',
    body: "Trans-, inter-, sur- et sous- gardent la même direction spatiale partout où ils apparaissent, même dans un mot au sens devenu abstrait. EN: trans-, inter-, sur- and sous- keep the same spatial direction everywhere they appear, even in a word whose meaning has become abstract.",
  },
  cards: [
    trap(E(1021), '/il zɔ dy tʁɑ̃s.pɔʁ.te lə pja.no a bʁa/', 'transporter, comme transport en commun', 'Transporter vient du transport en commun, le bus, le métro.', 'C’est l’inverse : le transport en commun est lui-même construit sur trans- (à travers) + portare (porter). EN: it is the other way round: public transport is itself built on trans- (across) + portare (to carry).'),
    trap(E(1022), '/lə kɔ̃.tʁa ʁɛst tʁɑ̃s.pa.ʁɑ̃ syʁ ʃak fʁɛ/', 'transparent, comme transporter', 'Transparent vient de transporter, donc qui se déplace facilement.', 'Transparent vient de parere (paraître), pas de portare (porter) : deux racines différentes après le même trans-. EN: transparent comes from parere (to appear), not portare (to carry): two different roots after the same trans-.'),
    trap(E(1023), '/lə fɛs.ti.val a.tiʁ œ̃ py.blik ɛ̃.tɛʁ.na.sjɔ.nal/', 'international, inter veut dire intérieur', 'Inter, dans international, veut dire intérieur, donc dans un seul pays.', 'Inter- veut dire entre, jamais intérieur : international veut dire entre les nations. EN: inter- means between, never inside: international means between nations.'),
    trap(E(1025), '/la.vjɔ̃ a dy syʁ.vɔ.le la tɑ̃.pɛt/', 'survoler, sur veut dire sûr', 'Sur, dans survoler, veut dire sûr, certain, sans risque.', 'Sur-, ici, veut dire au-dessus, jamais sûr : survoler, c’est voler au-dessus. EN: sur-, here, means above, never certain: survoler means to fly above.'),
    trap(E(1029), '/il a fa.ly su.mɛtʁ lə pʁɔ.ʒɛ o kɔ.mi.te a.vɑ̃ vɑ̃.dʁə.di/', 'soumettre, sou comme un sou, une pièce', 'Sou, dans soumettre, vient d’un sou, une petite pièce de monnaie.', 'Sou- vient ici de sub- (dessous) : soumettre, c’est mettre dessous, sous une autorité. EN: sou- here comes from sub- (under): soumettre means to put underneath, under an authority.'),
    trap(E(1026), '/lə ʒyʒ a ɛ.tɛ.ʁɔ̃.py lə te.mwɛ̃ a dø ʁə.pʁiz/', 'interrompre, inter comme Internet', 'Interrompre vient d’Internet, une rupture de connexion en ligne.', 'Interrompre existe depuis le latin, bien avant Internet : inter- (au milieu) + rompre. EN: interrompre has existed since Latin, long before the Internet: inter- (in the middle) + rompre (to break).'),
  ],
  drill: [
    { promptSay: 'Trans- veut dire... .', opts: ['à travers', 'au-dessus'], correct: 0 },
    { promptSay: 'Inter- veut dire... .', opts: ['entre', 'intérieur'], correct: 0 },
    { promptSay: 'Dans survoler, sur- veut dire... .', opts: ['au-dessus', 'sûr, certain'], correct: 0 },
    { promptSay: 'Dans soumettre, sou- vient de sub-, qui veut dire... .', opts: ['dessous', 'une pièce de monnaie'], correct: 0 },
    { promptSay: 'Transparent vient de trans- + ... , pas de portare.', opts: ['parere, paraître', 'portare, porter'], correct: 0 },
    { promptSay: 'International veut dire entre les ... .', opts: ['nations', 'intérieurs'], correct: 0 },
    { promptSay: 'Interrompre existe depuis... .', opts: ['le latin', 'Internet'], correct: 0 },
    { promptSay: 'Un préfixe de position garde sa direction... .', opts: ['partout où il apparaît', 'seulement dans un mot concret'], correct: 0 },
  ],
  steps: STEPS_STD('Six préfixes de position'),
  audio: REC('rec-c2-05-piege-prefixe'), say: REFRAME, terms: ['racineVoisine'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Trans-', 'Trans- veut toujours dire...', ['à travers', 'au-dessus'], 0, 'Jamais au-dessus. EN: never above.'),
  ctl('Sur- et sous-', 'Sur- et sous- sont deux directions...', ['identiques', 'opposées'], 1, 'Au-dessus contre dessous. EN: above versus below.'),
  ctl('La preuve', 'Un préfixe de position se vérifie...', ['par son histoire latine, jamais par un mot français qui sonne pareil', 'par intuition'], 0,
    'Jamais une intuition seule. EN: never intuition alone.'),
], ['affixe', 'racineVoisine']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Préfixes de position et de mouvement',
    opener: {
      line: "Trans-, inter-, sur-, sous- : quatre directions latines qui gardent leur sens dans dix mots très différents. EN: Trans-, inter-, sur-, sous-: four Latin directions that keep their meaning across ten very different words.",
      imageRef: 'lessons/c2-05-etymologie/act03.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais trans-, inter-, sur- et sous- dans dix mots savants, chacun gardant sa direction spatiale d’origine. EN: You can recognise trans-, inter-, sur- and sous- across ten learned words, each keeping its original spatial direction.',
    estScreens: 30, restPoints: ['a3-table', 'a3-groupe'],
  },
  sections: [A3_USAGES, A3_DECK, A3_TABLE, A3_GROUPE, A3_PIEGE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — PRÉFIXES DE NÉGATION
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a4-usages', layer: 'core', title: 'Où la négation se lit dans le préfixe',
  cases: [
    uc('Un dossier qui manque une signature', E(1031)),
    uc('Une écriture qu’on ne peut plus lire', E(1033)),
    uc('Un médicament qui agit contre un organisme vivant', E(1038)),
    uc('Un réseau qu’il faut couper entièrement', E(1036)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['affixe'],
};

const A4_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-prefixes-latins',
  title: 'Cinq mots, la négation in-', frSub: 'In-, im-, il-, ir- : une seule règle',
  hint: 'Cinq cartes. Le même in- change de costume selon la lettre qui suit.',
  audio: REC('rec-c2-05-negation-cinq'), say: REFRAME, terms: ['assimilation'],
  cards: [
    card(E(1031), 'incomplet', 'in- devant une consonne ordinaire', "in- (négation) + complet : qui n’est pas complet. EN: in- (negation) + complet: not complete."),
    card(E(1032), 'impossible', 'in- devient im- devant p', "in- devient im- devant p, b ou m : im- + possible, qui n’est pas possible. EN: in- becomes im- before p, b or m: im- + possible, not possible."),
    card(E(1033), 'illisible', 'in- devient il- devant l', "in- devient il- devant l : il- + lisible, qu’on ne peut pas lire. EN: in- becomes il- before l: il- + lisible, that cannot be read."),
    card(E(1034), 'irrégulier', 'in- devient ir- devant r', "in- devient ir- devant r : ir- + régulier, qui n’est pas régulier. EN: in- becomes ir- before r: ir- + régulier, not regular."),
    card(E(1035), 'disparaître', 'dis- (séparation)', "dis- (séparation, négation) + paraître : cesser d’être visible. EN: dis- (separation, negation) + paraître (to appear): to stop being visible."),
  ],
};

const A4_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a4-table', layer: 'core', sheetId: 'sheet-prefixes-latins',
  title: 'Cinq préfixes de plus',
  cols: ['Mot', 'Préfixe + sens'],
  rows: [
    tapRow(['déconnecter', 'dé + connecter'], E(1036), 'Couper une connexion', 'Dé- (séparation, cessation) + connecter : couper la connexion. EN: dé- (separation, cessation) + connecter (to connect): to cut the connection.'),
    tapRow(['défaire', 'dé + faire'], E(1037), 'L’inverse de faire', 'Dé- (cessation) + faire : annuler ce qui a été fait. EN: dé- (cessation) + faire (to do): to undo what was done.'),
    tapRow(['antibiotique', 'anti (grec) + biotique'], E(1038), 'Contre les organismes vivants', 'Anti- (contre, du grec anti) + biotique (relatif à la vie) : qui agit contre les organismes vivants. EN: anti- (against, from Greek anti) + biotique (relating to life): acting against living organisms.'),
    tapRow(['antigel', 'anti + gel'], E(1039), 'Contre le gel', 'Anti- (contre) + gel : qui empêche le gel. EN: anti- (against) + gel (frost): something that prevents freezing.'),
    tapRow(['anticorps', 'anti + corps'], E(1040), 'Qui agit contre un corps étranger', 'Anti- (contre) + corps : une protéine qui agit contre un corps étranger. EN: anti- (against) + corps (body): a protein acting against a foreign body.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['affixe'],
};

const A4_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-groupe', layer: 'core', size: 'lg',
  title: 'Classe-les par préfixe de négation', frSub: 'In- (et ses costumes), dis-, dé-, anti-',
  groups: [
    grp('In- et ses costumes', [
      it(E(1032), 'im- devant p'),
      it(E(1033), 'il- devant l'),
      it(E(1034), 'ir- devant r'),
    ], chk('In- change de costume pour rester...', ['facile à prononcer', 'plus savant'], 0,
      'La règle d’assimilation existe pour la prononciation, jamais pour la richesse du mot. EN: the assimilation rule exists for pronunciation, never to sound fancier.')),
    grp('Dis- et dé-', [
      it(E(1035), 'disparaître : cesser d’être visible'),
      it(E(1036), 'déconnecter : couper'),
      it(E(1037), 'défaire : annuler'),
    ], chk('Dis- et dé- marquent tous les deux...', ['une séparation ou une cessation', 'une répétition'], 0,
      'Les deux préfixes séparent ou arrêtent, jamais ne répètent. EN: both prefixes separate or stop, never repeat.')),
    ctl('Anti-', 'Antibiotique, antigel et anticorps partagent tous le préfixe...', ['anti-, contre', 'ante-, avant'], 0,
      'Anti- (contre) est grec ; ante- (avant) est un préfixe latin séparé, souvent confondu avec lui. EN: anti- (against) is Greek; ante- (before) is a separate Latin prefix, often confused with it.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['assimilation'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a4-piege', layer: 'core', swipe: true,
  title: 'Six mots, un seul raisonnement qui dérape',
  rule: {
    title: 'In- change de costume ; anti- n’est pas ante-',
    body: "In- devient im- devant b/m/p, il- devant l, ir- devant r. Anti- (contre, grec) et ante- (avant, latin) sont deux préfixes séparés, souvent confondus. EN: in- becomes im-/il-/ir- before certain letters; anti- and ante- are two separate prefixes, often confused.",
  },
  cards: [
    trap(E(1032), '/kɔ.ʁi.ʒe sə bʁu.jɔ̃ a.vɑ̃ mi.nɥi sɑ̃bl ɛ̃.pɔ.sibl/', 'inpossible', 'Corriger ce brouillon avant minuit semble inpossible.', 'In- devient im- devant p : impossible, jamais inpossible. EN: in- becomes im- before p: impossible, never inpossible.'),
    trap(E(1033), '/sɔ.nekʁi.tyʁ dəvjɛ̃ ɛ̃.li.zibl su lə stʁɛs/', 'inlisible', 'Son écriture devient inlisible sous le stress.', 'In- devient il- devant l : illisible, jamais inlisible. EN: in- becomes il- before l: illisible, never inlisible.'),
    trap(E(1034), '/lə ʁi.tm kaʁ.djak dy pa.sjɑ̃ ʁɛs.tɛ ɛ̃.ʁe.gy.lje/', 'inrégulier', 'Le rythme cardiaque du patient restait inrégulier.', 'In- devient ir- devant r : irrégulier, jamais inrégulier. EN: in- becomes ir- before r: irrégulier, never inrégulier.'),
    trap(E(1035), '/lə dɔ.sje a fi.ni paʁ di.spa.ʁɛtʁ dy sis.tɛm/', 'dis-, comme un disque à deux faces', 'Dis-, dans disparaître, veut dire deux, comme un disque à deux faces.', 'Dis- (séparation, négation) n’a aucun lien avec disque, qui vient du grec diskos, un objet rond. EN: dis- (separation, negation) has no link to disque, which comes from Greek diskos, a round object.'),
    trap(E(1038), '/lə me.dsɛ̃ a pʁɛs.kʁi œ̃.nɑ̃.ti.bjɔ.tik puʁ di ʒuʁ/', 'anti- veut dire avant', 'Un antibiotique agit avant la vie des microbes, pour les empêcher de se développer.', 'Anti- veut dire contre, jamais avant : c’est ante- (un préfixe séparé) qui veut dire avant. EN: anti- means against, never before: it is ante- (a separate prefix) that means before.'),
    trap(E(1036), '/lə tɛk.ni.sjɛ̃ a dy de.kɔ.nɛk.te tu lə ʁe.zo/', 'dé- veut dire deux', 'Déconnecter vient de dé-, qui veut dire deux, comme débrancher deux câbles.', 'Dé- marque ici une séparation ou une cessation, jamais le chiffre deux. EN: dé- here marks a separation or cessation, never the number two.'),
  ],
  drill: [
    { promptSay: 'In- devient ... devant p, b ou m.', opts: ['im-', 'in-'], correct: 0 },
    { promptSay: 'In- devient ... devant l.', opts: ['il-', 'in-'], correct: 0 },
    { promptSay: 'In- devient ... devant r.', opts: ['ir-', 'in-'], correct: 0 },
    { promptSay: 'Dis-, dans disparaître, marque une séparation, sans aucun lien avec le mot ... .', opts: ['disque', 'discours'], correct: 0 },
    { promptSay: 'Anti- veut dire... .', opts: ['contre', 'avant'], correct: 0 },
    { promptSay: 'Avant, en latin, se dit plutôt ... , un préfixe séparé d’anti-.', opts: ['ante-', 'anti-'], correct: 0 },
    { promptSay: 'Dé-, dans déconnecter, marque... .', opts: ['une cessation', 'le chiffre deux'], correct: 0 },
    { promptSay: 'La règle d’assimilation de in- existe pour... .', opts: ['la prononciation', 'rendre le mot plus savant'], correct: 0 },
  ],
  steps: STEPS_STD('Six préfixes de négation'),
  audio: REC('rec-c2-05-piege-negation'), say: REFRAME, terms: ['assimilation'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('L’assimilation', 'In- devient il- devant...', ['la lettre l', 'la lettre r'], 0, 'Illisible, jamais inlisible. EN: illisible, never inlisible.'),
  ctl('Dis- et disque', 'Dis- (négation) et disque (grec diskos) sont...', ['la même racine', 'deux histoires séparées'], 1,
    'Même lettres, deux histoires séparées. EN: same letters, two separate histories.'),
  ctl('Anti- et ante-', 'Anti- veut dire contre ; le préfixe qui veut dire avant est...', ['ante-', 'anti- aussi'], 0,
    'Deux préfixes séparés, souvent confondus. EN: two separate prefixes, often confused.'),
], ['assimilation', 'racineVoisine']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Préfixes de négation',
    opener: {
      line: "In- change de costume selon la lettre qui suit, et anti- n’est pas ante- : ici tu apprends à ne jamais les confondre. EN: In- changes costume depending on the letter that follows, and anti- is not ante-: here you learn never to confuse them.",
      imageRef: 'lessons/c2-05-etymologie/act04.jpg',
    },
    sections: [],
    milestone: 'Tu appliques la règle d’assimilation de in- (im-/il-/ir-) et tu distingues anti- de ante-, et dis- (négation) de disque (grec diskos). EN: You can apply the in- assimilation rule (im-/il-/ir-) and tell anti- apart from ante-, and dis- (negation) from disque (Greek diskos).',
    estScreens: 30, restPoints: ['a4-table', 'a4-groupe'],
  },
  sections: [A4_USAGES, A4_DECK, A4_TABLE, A4_GROUPE, A4_PIEGE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — UNE RACINE, UNE FAMILLE DE VERBES
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a5-usages', layer: 'core', title: 'Une seule racine, dix verbes différents',
  cases: [
    uc('Diriger une équipe sur la durée', E(1041)),
    uc('Tirer une conclusion d’un indice', E(1042)),
    uc('Présenter quelqu’un sans le nommer', E(1043)),
    uc('Reporter une décision d’une semaine', E(1050)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['racine'],
};

const A5_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a5-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-familles-verbes',
  title: 'Cinq verbes, une seule racine latine', frSub: 'Ducere, mener',
  hint: 'Cinq cartes. Chaque verbe mène quelque chose, différemment.',
  audio: REC('rec-c2-05-ducere-cinq'), say: REFRAME, terms: ['racine'],
  cards: [
    card(E(1041), 'conduire', 'con- + ducere', "con- (avec, ensemble) + ducere (mener) : mener une équipe ensemble. EN: con- (with, together) + ducere (to lead): to lead a team together."),
    card(E(1042), 'déduire', 'de- + ducere', "de- (hors de) + ducere (mener) : mener hors d’un fait, vers une conclusion. EN: de- (out of) + ducere (to lead): to lead out of a fact, toward a conclusion."),
    card(E(1043), 'introduire', 'intro- + ducere', "intro- (dedans) + ducere (mener) : mener quelqu’un ou quelque chose à l’intérieur. EN: intro- (inside) + ducere (to lead): to lead someone or something inside."),
    card(E(1044), 'reproduire', 're- + pro- + ducere', "re- (de nouveau) + pro- (en avant) + ducere (mener) : mener de nouveau vers le même résultat. EN: re- (again) + pro- (forward) + ducere (to lead): to lead again toward the same result."),
    card(E(1045), 'séduire', 'se- + ducere', "se- (à l’écart) + ducere (mener) : mener quelqu’un à l’écart de son jugement habituel. EN: se- (aside) + ducere (to lead): to lead someone aside from their usual judgement."),
  ],
};

const A5_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a5-table', layer: 'core', sheetId: 'sheet-familles-verbes',
  title: 'Cinq verbes de plus, une seule racine',
  cols: ['Mot', 'Préfixe + sens'],
  rows: [
    tapRow(['apporter', 'ad + portare'], E(1046), 'Porter vers', 'Ad- devenu a- (vers) + portare (porter) : porter quelque chose vers quelqu’un. EN: ad- turned a- (toward) + portare (to carry): to carry something toward someone.'),
    tapRow(['supporter', 'sub + portare'], E(1047), 'Porter dessous', 'Sub- devenu sup- (dessous) + portare (porter) : porter un poids par en dessous, endurer. EN: sub- turned sup- (under) + portare (to carry): to carry a weight from underneath, to endure.'),
    tapRow(['rapporter', 're + ad + portare'], E(1048), 'Porter en retour', 'Re- (en retour) + ad- (vers) + portare (porter) : porter un fait en retour, le relater. EN: re- (back) + ad- (toward) + portare (to carry): to carry a fact back, to relate it.'),
    tapRow(['comporter', 'cum + portare'], E(1049), 'Porter ensemble', 'Cum- devenu com- (ensemble) + portare (porter) : porter plusieurs éléments ensemble, inclure. EN: cum- turned com- (together) + portare (to carry): to carry several elements together, to include.'),
    tapRow(['reporter', 're + portare'], E(1050), 'Porter plus tard', 'Re- (de nouveau, plus tard) + portare (porter) : porter une décision plus tard dans le temps. EN: re- (again, later) + portare (to carry): to carry a decision later in time.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['racine'],
};

const A5_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-groupe', layer: 'core', size: 'lg',
  title: 'Même racine, préfixe différent', frSub: 'Ducere et portare, dix verbes',
  groups: [
    grp('La famille de ducere (mener)', [
      it(E(1041), 'conduire : mener ensemble'),
      it(E(1042), 'déduire : mener hors d’un fait'),
      it(E(1043), 'introduire : mener à l’intérieur'),
    ], chk('Ducere, en latin, veut dire...', ['mener', 'porter'], 0,
      'Ducere veut dire mener, dans les trois verbes. EN: ducere means to lead, in all three verbs.')),
    grp('La famille de portare (porter)', [
      it(E(1046), 'apporter : porter vers'),
      it(E(1047), 'supporter : porter dessous'),
      it(E(1049), 'comporter : porter ensemble'),
    ], chk('Portare, en latin, veut dire...', ['porter', 'mener'], 0,
      'Portare veut dire porter, dans les trois verbes. EN: portare means to carry, in all three verbs.')),
    ctl('Déduire et réduire', 'Déduire (de- + ducere) et réduire (re- + ducere) partagent la racine ducere, mais pas...', ['le préfixe, donc pas le sens', 'la racine'], 0,
      'Même racine, préfixe différent, sens différent : tirer une conclusion contre diminuer. EN: same root, different prefix, different meaning: drawing a conclusion versus diminishing.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['racine'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a5-piege', layer: 'core', swipe: true,
  title: 'Six verbes, un seul préfixe qui dérape',
  rule: {
    title: 'Même racine, préfixe différent, sens différent',
    body: "Deux verbes qui partagent une racine latine ne sont pas interchangeables : le préfixe change le sens, parfois beaucoup. EN: two verbs that share a Latin root are not interchangeable: the prefix changes the meaning, sometimes a great deal.",
  },
  cards: [
    trap(E(1042), '/ɔ̃ pø de.dɥiʁ sɔ̃ me.tje də se sœl mɛ̃/', 'réduire son métier', 'On peut réduire son métier de ses seules mains, en l’observant.', 'On déduit une conclusion ; réduire (re- + ducere) veut dire diminuer, un verbe différent. EN: you deduce a conclusion; réduire (re- + ducere) means to diminish, a different verb.'),
    trap(E(1043), '/lə pʁe.zi.dɑ̃ a pʁɔ.dɥi lə nu.vɛl ɛ̃.vi.te sɑ̃ lə nɔ.me/', 'produit le nouvel invité', 'Le président a produit le nouvel invité sans le nommer.', 'Introduire (intro- + ducere) mène quelqu’un à l’intérieur ; produire (pro- + ducere) mène quelque chose en avant, pour le créer. EN: introduire (intro- + ducere) leads someone inside; produire (pro- + ducere) leads something forward, to create it.'),
    trap(E(1045), '/sɔ̃ pʁɔ.ʒɛ a fi.ni paʁ ʁə.pʁɔ.dɥiʁ tu lə kɔ.mi.te/', 'reproduire tout le comité', 'Son projet a fini par reproduire tout le comité.', 'Séduire (se- + ducere) mène quelqu’un à l’écart de son jugement ; reproduire (re- + pro- + ducere) mène vers une copie du même résultat. EN: séduire (se- + ducere) leads someone aside from their judgement; reproduire (re- + pro- + ducere) leads toward a copy of the same result.'),
    trap(E(1046), '/ʃak sta.ʒjɛʁ sy.pɔʁt œ̃ ʁə.ɡaʁ di.fe.ʁɑ̃/', 'chaque stagiaire supporte un regard', 'Chaque stagiaire supporte un regard différent.', 'Apporter (ad- + portare) porte quelque chose vers quelqu’un ; supporter (sub- + portare) porte un poids par en dessous, endurer. EN: apporter (ad- + portare) carries something toward someone; supporter (sub- + portare) carries a weight from underneath, to endure.'),
    trap(E(1049), '/lə te.mwɛ̃ a kɔ̃.pɔʁ.te la sɛn sɑ̃z ɑ̃ ʃɑ̃.ʒe œ̃ mo/', 'le témoin a comporté la scène', 'Le témoin a comporté la scène sans en changer un mot.', 'Rapporter (re- + ad- + portare) porte un fait en retour, le relate ; comporter (cum- + portare) porte plusieurs éléments ensemble, inclure. EN: rapporter (re- + ad- + portare) carries a fact back, relating it; comporter (cum- + portare) carries several elements together, to include.'),
    trap(E(1050), '/lə kɔ.mi.te a dy kɔ̃.dɥiʁ sa de.si.zjɔ̃ dyn sə.mɛn/', 'conduire sa décision', 'Le comité a dû conduire sa décision d’une semaine.', 'Reporter (re- + portare) porte une décision plus tard dans le temps ; conduire (con- + ducere) mène un groupe ou une action, pas une date. EN: reporter (re- + portare) carries a decision later in time; conduire (con- + ducere) leads a group or an action, not a date.'),
  ],
  drill: [
    { promptSay: 'Ducere, en latin, veut dire... .', opts: ['mener', 'porter'], correct: 0 },
    { promptSay: 'Portare, en latin, veut dire... .', opts: ['porter', 'mener'], correct: 0 },
    { promptSay: 'Tirer une conclusion d’un fait, c’est le verbe... .', opts: ['déduire', 'réduire'], correct: 0 },
    { promptSay: 'Mener quelqu’un à l’intérieur, c’est le verbe... .', opts: ['introduire', 'produire'], correct: 0 },
    { promptSay: 'Porter un poids par en dessous, endurer, c’est le verbe... .', opts: ['supporter', 'apporter'], correct: 0 },
    { promptSay: 'Porter un fait en retour, le relater, c’est le verbe... .', opts: ['rapporter', 'comporter'], correct: 0 },
    { promptSay: 'Porter une décision plus tard dans le temps, c’est le verbe... .', opts: ['reporter', 'conduire'], correct: 0 },
    { promptSay: 'Deux verbes qui partagent une racine latine sont... .', opts: ['rarement interchangeables', 'toujours synonymes'], correct: 0 },
  ],
  steps: STEPS_STD('Six verbes, une racine commune'),
  audio: REC('rec-c2-05-piege-verbes'), say: REFRAME, terms: ['racine'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Ducere', 'Conduire, déduire et introduire partagent la racine...', ['ducere, mener', 'portare, porter'], 0, 'Ducere veut dire mener. EN: ducere means to lead.'),
  ctl('Même racine, sens différent', 'Déduire et réduire partagent ducere, mais...', ['pas le préfixe, donc pas le sens', 'exactement le même sens'], 0,
    'Le préfixe change tout. EN: the prefix changes everything.'),
  ctl('Portare', 'Apporter, supporter et comporter partagent la racine...', ['portare, porter', 'ducere, mener'], 0, 'Portare veut dire porter. EN: portare means to carry.'),
], ['racine']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Une racine, une famille de verbes',
    opener: {
      line: "Ducere mène, portare porte : dix verbes, deux racines latines, et un préfixe différent chaque fois pour changer le sens. EN: Ducere leads, portare carries: ten verbs, two Latin roots, a different prefix each time to change the meaning.",
      imageRef: 'lessons/c2-05-etymologie/act05.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais ducere et portare dans dix verbes, et tu distingues deux verbes de la même famille par leur préfixe, jamais par leur air de famille seul. EN: You can recognise ducere and portare across ten verbs, and tell two verbs of the same family apart by their prefix, never by family resemblance alone.',
    estScreens: 30, restPoints: ['a5-table', 'a5-groupe'],
  },
  sections: [A5_USAGES, A5_DECK, A5_TABLE, A5_GROUPE, A5_PIEGE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — SUFFIXES QUI FABRIQUENT UN NOM
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a6-usages', layer: 'core', title: 'Un verbe, un nom, un suffixe',
  cases: [
    uc('Un verbe devenu un fait unique', E(1051)),
    uc('Un verdict rendu par un tribunal', E(1054)),
    uc('Un local rendu propre à nouveau', E(1055)),
    uc('Un dossier enfin clos', E(1057)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['affixe'],
};

const A6_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a6-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-suffixes',
  title: 'Cinq noms, cinq suffixes', frSub: '-tion, -sion, -ment, -age',
  hint: 'Cinq cartes. Chaque suffixe transforme un verbe en nom.',
  audio: REC('rec-c2-05-suffixe-nom-cinq'), say: REFRAME, terms: ['affixe'],
  cards: [
    card(E(1051), 'une action', 'agir + -tion', "le suffixe -tion (du latin -tio) transforme agir en un nom, l’action. EN: the suffix -tion (from Latin -tio) turns agir (to act) into a noun, l’action."),
    card(E(1052), 'une décision', 'décider + -sion', "le suffixe -sion (variante de -tion) transforme décider en un nom, la décision. EN: the suffix -sion (a variant of -tion) turns décider (to decide) into a noun, la décision."),
    card(E(1053), 'un changement', 'changer + -ment', "le suffixe -ment (du latin -mentum) transforme changer en un nom, le changement. EN: the suffix -ment (from Latin -mentum) turns changer (to change) into a noun, le changement."),
    card(E(1054), 'un jugement', 'juger + -ment', "juger + -ment donne jugement, jamais jugeage : chaque verbe a son suffixe réel, jamais prévisible à l’avance. EN: juger + -ment gives jugement, never jugeage: each verb has its real suffix, never predictable in advance."),
    card(E(1055), 'un nettoyage', 'nettoyer + -age', "le suffixe -age (du latin -aticum) transforme nettoyer en un nom, le nettoyage. EN: the suffix -age (from Latin -aticum) turns nettoyer (to clean) into a noun, le nettoyage."),
  ],
};

const A6_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a6-table', layer: 'core', sheetId: 'sheet-suffixes',
  title: 'Cinq suffixes de plus',
  cols: ['Mot', 'Verbe + suffixe'],
  rows: [
    tapRow(['lavage', 'laver + -age'], E(1056), 'Laver, devenu un nom', '-age (du latin -aticum) transforme laver en lavage. EN: -age (from Latin -aticum) turns laver into lavage.'),
    tapRow(['fermeture', 'fermer + -ure'], E(1057), 'Fermer, devenu un nom', '-ure (du latin -tura) transforme fermer en fermeture, jamais fermage (qui veut déjà dire autre chose : la location d’une terre agricole). EN: -ure (from Latin -tura) turns fermer into fermeture, never fermage (which already means something else: renting farmland).'),
    tapRow(['ouverture', 'ouvrir + -ure'], E(1058), 'Ouvrir, devenu un nom', '-ure transforme ouvrir en ouverture, jamais ouvrage (qui veut déjà dire autre chose : une œuvre). EN: -ure turns ouvrir into ouverture, never ouvrage (which already means something else: a work).'),
    tapRow(['naissance', 'naître + -ance'], E(1059), 'Naître, devenu un nom', '-ance (du latin -antia) transforme naître en naissance. EN: -ance (from Latin -antia) turns naître into naissance.'),
    tapRow(['patience', 'directement du latin'], E(1060), 'Un nom venu tel quel du latin', 'Patience vient directement du latin patientia, jamais d’un verbe français suffixé : tous les noms ne sont pas construits en français. EN: patience comes directly from Latin patientia, never from a French suffixed verb: not every noun is built in French.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['affixe'],
};

const A6_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-groupe', layer: 'core', size: 'lg',
  title: 'Classe-les par suffixe', frSub: '-tion/-sion, -ment, -age, -ure, -ance',
  groups: [
    grp('La famille de -tion/-sion', [
      it(E(1051), 'action : agir + -tion'),
      it(E(1052), 'décision : décider + -sion'),
    ], chk('-tion et -sion viennent du même suffixe latin...', ['-tio', '-mentum'], 0, '-tio donne -tion ou -sion selon le mot. EN: -tio gives -tion or -sion depending on the word.')),
    grp('La famille de -ment', [
      it(E(1053), 'changement : changer + -ment'),
      it(E(1054), 'jugement : juger + -ment'),
    ], chk('-ment vient du latin...', ['-mentum', '-tura'], 0, '-mentum donne -ment. EN: -mentum gives -ment.')),
    ctl('Fermeture et fermage', 'Fermage existe déjà, et ne veut pas dire « l’action de fermer » : il veut dire...', ['la location d’une terre agricole', 'exactement la même chose que fermeture'], 0,
      'Un mot peut déjà exister avec un tout autre sens : il faut le vérifier, jamais le supposer. EN: a word can already exist with a completely different meaning: you must check, never assume.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['affixe'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a6-piege', layer: 'core', swipe: true,
  title: 'Six noms, un seul suffixe qui dérape',
  rule: {
    title: 'Un suffixe productif n’est pas automatique',
    body: "On ne peut pas prédire quel suffixe un verbe prend ; parfois, le mot inventé par analogie existe déjà, avec un sens différent. EN: you cannot predict a verb's suffix; sometimes the word invented by analogy already exists, with a different meaning.",
  },
  cards: [
    trap(E(1054), '/lə ʒy.ʒə.mɑ̃ dy tʁi.by.nal tɔ̃b la sə.mɛn pʁɔ.ʃɛn/', 'jugeage', 'Le jugeage du tribunal tombe la semaine prochaine.', 'Juger prend -ment, jamais -age : jugement, jamais jugeage, qui n’existe pas. EN: juger takes -ment, never -age: jugement, never jugeage, which does not exist.'),
    trap(E(1057), '/la fɛʁ.maʒ dy dɔ.sje a.tɑ̃ ynə dɛʁ.njɛʁ si.ɲa.tyʁ/', 'le fermage du dossier', 'Le fermage du dossier attend une dernière signature.', 'Fermage existe déjà et veut dire la location d’une terre agricole ; fermer + -ure donne fermeture pour l’action de fermer. EN: fermage already exists and means renting farmland; fermer + -ure gives fermeture for the act of closing.'),
    trap(E(1058), '/lu.vʁaʒ dy nu.vo maʁ.ʃe a syʁ.pʁi lez a.na.list/', 'l’ouvrage du nouveau marché', 'L’ouvrage du nouveau marché a surpris les analystes.', 'Ouvrage existe déjà et veut dire une œuvre ; ouvrir + -ure donne ouverture pour l’action d’ouvrir. EN: ouvrage already exists and means a work; ouvrir + -ure gives ouverture for the act of opening.'),
    trap(E(1055), '/lə nɛ.twa.ty.ʁ dy sit pʁɑ̃.dʁa tu la.pʁɛ.mi.di/', 'le nettoiture', 'Le nettoiture du site prendra tout l’après-midi.', 'Nettoyer prend -age, jamais -ure : nettoyage, jamais nettoiture, qui n’existe pas. EN: nettoyer takes -age, never -ure: nettoyage, never nettoiture, which does not exist.'),
    trap(E(1059), '/sɔ̃ nɛ.sə.mɑ̃ a ʃɑ̃.ʒe tut lɔʁ.ga.ni.za.sjɔ̃ fa.mi.ljal/', 'son naissement', 'Son naissement a changé toute l’organisation familiale.', 'Naître prend -ance, jamais -ment : naissance, jamais naissement, qui n’existe pas. EN: naître takes -ance, never -ment: naissance, never naissement, which does not exist.'),
    trap(E(1052), '/sa de.si.de.mɑ̃ a syʁ.pʁi tu lə kɔ̃.sɛj/', 'son décidément', 'Son décidément a surpris tout le conseil.', 'Décidément existe déjà, comme adverbe (« décidément, il pleut encore ») ; le nom cherché est décision. EN: décidément already exists, as an adverb ("decidedly, it is raining again"); the noun wanted is décision.'),
  ],
  drill: [
    { promptSay: 'Juger prend le suffixe... .', opts: ['-ment', '-age'], correct: 0 },
    { promptSay: 'Nettoyer prend le suffixe... .', opts: ['-age', '-ure'], correct: 0 },
    { promptSay: 'Naître prend le suffixe... .', opts: ['-ance', '-ment'], correct: 0 },
    { promptSay: 'Fermage existe déjà et veut dire... .', opts: ['la location d’une terre agricole', 'l’action de fermer'], correct: 0 },
    { promptSay: 'Ouvrage existe déjà et veut dire... .', opts: ['une œuvre', 'l’action d’ouvrir'], correct: 0 },
    { promptSay: 'Décidément est déjà un... .', opts: ['adverbe', 'nom'], correct: 0 },
    { promptSay: 'Patience vient directement du... , sans suffixe français.', opts: ['latin patientia', 'verbe patienter'], correct: 0 },
    { promptSay: 'Avant de créer un nom par analogie, il faut toujours... .', opts: ['vérifier si ce mot existe déjà, avec un autre sens', 'foncer, l’analogie suffit'], correct: 0 },
  ],
  steps: STEPS_STD('Six noms, un suffixe à vérifier'),
  audio: REC('rec-c2-05-piege-suffixe-nom'), say: REFRAME, terms: ['affixe'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Fermage', 'Fermage existe déjà et veut dire...', ['la location d’une terre agricole', 'l’action de fermer'], 0, 'Un faux calque de sens, pas un mot qui n’existe pas. EN: a false calque of meaning, not a nonexistent word.'),
  ctl('Le suffixe imprévisible', 'Juger prend -ment ; nettoyer prend...', ['-age', '-ment aussi'], 0, 'Chaque verbe a son propre suffixe réel. EN: each verb has its own real suffix.'),
  ctl('Patience', 'Patience vient...', ['directement du latin, sans suffixe français', 'de patienter + -ence'], 0, 'Tous les noms ne sont pas construits en français. EN: not every noun is built in French.'),
], ['affixe']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Suffixes qui fabriquent un nom',
    opener: {
      line: "Juger donne jugement, pas jugeage ; fermer donne fermeture, et fermage veut déjà dire autre chose : ici tu apprends à vérifier, jamais à deviner. EN: Juger gives jugement, not jugeage; fermer gives fermeture, and fermage already means something else: here you learn to check, never to guess.",
      imageRef: 'lessons/c2-05-etymologie/act06.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais -tion/-sion, -ment, -age, -ure et -ance comme des suffixes qui fabriquent un nom depuis un verbe, et tu vérifies qu’un mot inventé par analogie n’existe pas déjà avec un autre sens. EN: You can recognise -tion/-sion, -ment, -age, -ure and -ance as suffixes that build a noun from a verb, and check that a word invented by analogy does not already exist with another meaning.',
    estScreens: 30, restPoints: ['a6-table', 'a6-groupe'],
  },
  sections: [A6_USAGES, A6_DECK, A6_TABLE, A6_GROUPE, A6_PIEGE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — SUFFIXES QUI FABRIQUENT UN ADJECTIF
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a7-usages', layer: 'core', title: 'Un nom ou un verbe, un adjectif',
  cases: [
    uc('Un plat qu’on peut à peine manger', E(1061)),
    uc('Un texte qu’on peut enfin lire', E(1062)),
    uc('Un enjeu qui dépasse une seule ville', E(1067)),
    uc('Une eau qu’on peut boire sans risque', E(1069)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['affixe'],
};

const A7_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a7-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-suffixes',
  title: 'Cinq adjectifs, cinq suffixes', frSub: '-able, -ible, -eux, -if',
  hint: 'Cinq cartes. Chaque suffixe transforme un verbe ou un nom en adjectif.',
  audio: REC('rec-c2-05-suffixe-adj-cinq'), say: REFRAME, terms: ['affixe'],
  cards: [
    card(E(1061), 'mangeable', 'manger + -able', "le suffixe -able (du latin -abilis) transforme manger en un adjectif, mangeable. EN: the suffix -able (from Latin -abilis) turns manger (to eat) into an adjective, mangeable."),
    card(E(1062), 'lisible', 'lire (radical lis-) + -ible', "-ible (variante de -able, latin -ibilis) transforme lire en lisible, jamais lisable. EN: -ible (a variant of -able, from Latin -ibilis) turns lire into lisible, never lisable."),
    card(E(1063), 'joyeux', 'joie + -eux', "le suffixe -eux (du latin -osus) transforme joie en un adjectif, joyeux. EN: the suffix -eux (from Latin -osus) turns joie (joy) into an adjective, joyeux."),
    card(E(1064), 'peureux', 'peur + -eux', "le suffixe -eux transforme peur en un adjectif, peureux. EN: the suffix -eux turns peur (fear) into an adjective, peureux."),
    card(E(1065), 'actif', 'agir (radical act-) + -if', "le suffixe -if (du latin -ivus) transforme agir en un adjectif, actif. EN: the suffix -if (from Latin -ivus) turns agir (to act) into an adjective, actif."),
  ],
};

const A7_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a7-table', layer: 'core', sheetId: 'sheet-suffixes',
  title: 'Cinq suffixes de plus',
  cols: ['Mot', 'Nom ou verbe + suffixe'],
  rows: [
    tapRow(['créatif', 'créer (radical créat-) + -if'], E(1066), 'Créer, devenu un adjectif', '-if (du latin -ivus) transforme créer en créatif. EN: -if (from Latin -ivus) turns créer into créatif.'),
    tapRow(['national', 'nation + -al'], E(1067), 'Nation, devenu un adjectif', '-al (du latin -alis) transforme nation en national, jamais nationeux. EN: -al (from Latin -alis) turns nation into national, never nationeux.'),
    tapRow(['culturel', 'culture + -el'], E(1068), 'Culture, devenu un adjectif', '-el (variante de -al) transforme culture en culturel, jamais « cultural » comme en anglais : c’est un suffixe différent de l’anglais. EN: -el (a variant of -al) turns culture into culturel, never "cultural" as in English: it is a different suffix from English.'),
    tapRow(['buvable', 'boire (radical buv-) + -able'], E(1069), 'Boire, devenu un adjectif', '-able transforme boire en buvable, jamais boisable : le radical irrégulier buv- doit être connu, pas deviné. EN: -able turns boire into buvable, never boisable: the irregular stem buv- must be known, not guessed.'),
    tapRow(['visible', 'voir (radical vis-) + -ible'], E(1070), 'Voir, devenu un adjectif', '-ible transforme voir en visible, jamais voyable : le radical irrégulier vis- vient du participe latin visus. EN: -ible turns voir into visible, never voyable: the irregular stem vis- comes from the Latin participle visus.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['affixe'],
};

const A7_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-groupe', layer: 'core', size: 'lg',
  title: 'Classe-les par suffixe', frSub: '-able/-ible, -eux, -if, -al/-el',
  groups: [
    grp('La famille de -able/-ible', [
      it(E(1061), 'mangeable : manger + -able'),
      it(E(1062), 'lisible : lire + -ible'),
      it(E(1069), 'buvable : boire + -able'),
    ], chk('-able et -ible viennent du même suffixe latin...', ['-abilis/-ibilis', '-osus'], 0, 'Les deux formes viennent de la même famille latine. EN: both forms come from the same Latin family.')),
    grp('La famille de -eux', [
      it(E(1063), 'joyeux : joie + -eux'),
      it(E(1064), 'peureux : peur + -eux'),
    ], chk('-eux vient du latin...', ['-osus', '-ivus'], 0, '-osus donne -eux. EN: -osus gives -eux.')),
    ctl('-al et -el', 'National et culturel partagent le suffixe...', ['-al/-el, du latin -alis', '-eux, du latin -osus'], 0,
      '-al/-el vient de -alis, jamais de -osus. EN: -al/-el comes from -alis, never -osus.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['affixe'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a7-piege', layer: 'core', swipe: true,
  title: 'Six adjectifs, un seul radical qui dérape',
  rule: {
    title: 'Le radical irrégulier doit être connu, jamais deviné',
    body: "Lire donne lisible, boire donne buvable, voir donne visible : le radical qui reçoit le suffixe vient souvent du participe latin, pas de l’infinitif. EN: the stem that takes the suffix often comes from the Latin participle, not the French infinitive.",
  },
  cards: [
    trap(E(1062), '/sɔ̃ ʁa.pɔʁ ʁɛst ɑ̃.fɛ̃ li.zabl a.pʁɛ la kɔ.ʁɛk.sjɔ̃/', 'lisable', 'Son rapport reste enfin lisable après la correction.', 'Lire donne lisible, jamais lisable : le radical lis- prend -ible, pas -able. EN: lire gives lisible, never lisable: the stem lis- takes -ible, not -able.'),
    trap(E(1069), '/lo dy ʁɔ.bi.nɛ ʁɛst bwa.zabl dɑ̃ sə kaʁ.tje/', 'boisable', 'L’eau du robinet reste boisable dans ce quartier.', 'Boire donne buvable, jamais boisable : le radical irrégulier buv- doit être connu. EN: boire gives buvable, never boisable: the irregular stem buv- must be known.'),
    trap(E(1070), '/la fi.syʁ dəvjɛ̃ vwa.jabl sœl.mɑ̃ də pʁɛ/', 'voyable', 'La fissure devient voyable seulement de près.', 'Voir donne visible, jamais voyable : le radical vis- vient du participe latin visus. EN: voir gives visible, never voyable: the stem vis- comes from the Latin participle visus.'),
    trap(E(1063), '/la.nɔ̃s a ʁɑ̃dy tu lə by.ʁo ʒwa.jø/', 'joieux', 'L’annonce a rendu tout le bureau joieux.', 'Joie devant -eux perd son e final : joyeux, jamais joieux. EN: joie before -eux drops its final e: joyeux, never joieux.'),
    trap(E(1067), '/lə de.ba ɛ de.vny œ̃.nɑ̃.ʒø na.sjɔ.nal/', 'un enjeu nationeux', 'Le débat est devenu un enjeu nationeux.', 'Nation prend -al, jamais -eux : national, jamais nationeux, qui n’existe pas. EN: nation takes -al, never -eux: national, never nationeux, which does not exist.'),
    trap(E(1068), '/lə sɑ̃tʁ kyl.ty.ʁal ʁu.vʁ ɑ̃.fɛ̃ sɛ pɔʁt/', 'culturale', 'Le centre culturale rouvre enfin ses portes.', 'Culture prend -el en français, culturel, jamais culturale, qui copie l’orthographe anglaise « cultural ». EN: culture takes -el in French, culturel, never culturale, which copies the English spelling "cultural".'),
  ],
  drill: [
    { promptSay: 'Lire donne... .', opts: ['lisible', 'lisable'], correct: 0 },
    { promptSay: 'Boire donne... .', opts: ['buvable', 'boisable'], correct: 0 },
    { promptSay: 'Voir donne... .', opts: ['visible', 'voyable'], correct: 0 },
    { promptSay: 'Joie, devant -eux, perd... .', opts: ['son e final', 'rien du tout'], correct: 0 },
    { promptSay: 'Nation prend le suffixe... .', opts: ['-al', '-eux'], correct: 0 },
    { promptSay: 'Culture prend le suffixe français... , jamais une orthographe copiée sur l’anglais.', opts: ['-el', '-al anglais'], correct: 0 },
    { promptSay: '-able et -ible viennent tous les deux du latin... .', opts: ['-abilis/-ibilis', '-osus'], correct: 0 },
    { promptSay: 'Le radical qui reçoit le suffixe vient parfois... , pas de l’infinitif français.', opts: ['du participe latin', 'd’un dictionnaire bilingue'], correct: 0 },
  ],
  steps: STEPS_STD('Six adjectifs, un radical à vérifier'),
  audio: REC('rec-c2-05-piege-suffixe-adj'), say: REFRAME, terms: ['affixe'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le radical irrégulier', 'Lire, boire et voir donnent lisible, buvable, visible, et jamais...', ['lisable, boisable, voyable', 'un adjectif du tout'], 0,
    'Le radical qui reçoit le suffixe n’est pas toujours l’infinitif. EN: the stem that takes the suffix is not always the infinitive.'),
  ctl('-al et l’anglais', 'Culturel, en français, ne copie jamais...', ["l’orthographe anglaise « cultural »", 'le latin culture'], 0,
    'Culturel vient du latin -alis, pas de l’anglais. EN: culturel comes from Latin -alis, not from English.'),
  ctl('-eux après une voyelle', 'Joie devant -eux devient...', ['joyeux, sans le e final', 'joieux, avec le e'], 0,
    'Le e final de joie tombe devant -eux. EN: joie’s final e drops before -eux.'),
], ['affixe']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Suffixes qui fabriquent un adjectif',
    opener: {
      line: "Lire donne lisible, pas lisable ; voir donne visible, pas voyable : ici tu apprends à connaître le radical irrégulier, jamais à le deviner. EN: Lire gives lisible, not lisable; voir gives visible, not voyable: here you learn to know the irregular stem, never to guess it.",
      imageRef: 'lessons/c2-05-etymologie/act07.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais -able/-ible, -eux, -if et -al/-el comme des suffixes qui fabriquent un adjectif, et tu connais le radical irrégulier d’un verbe plutôt que de le deviner depuis son infinitif. EN: You can recognise -able/-ible, -eux, -if and -al/-el as suffixes that build an adjective, and know a verb’s irregular stem rather than guessing it from the infinitive.',
    estScreens: 30, restPoints: ['a7-table', 'a7-groupe'],
  },
  sections: [A7_USAGES, A7_DECK, A7_TABLE, A7_GROUPE, A7_PIEGE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LE MOT POPULAIRE ET LE MOT SAVANT
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a8-usages', layer: 'core', title: 'Un seul mot latin, deux héritiers français',
  cases: [
    uc('Un séjour forcé dans un établissement de soins', E(1071)),
    uc('Un séjour choisi dans un petit établissement', E(1076)),
    uc('Un remède préparé pour soigner', E(1072)),
    uc('Une substance préparée pour nuire', E(1077)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['doublet'],
};

const A8_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a8-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-doublets',
  title: 'Cinq mots savants, cinq doublets', frSub: 'Une seule origine latine, deux mots français',
  hint: 'Cinq cartes. Chacune a un jumeau populaire dans la table suivante.',
  audio: REC('rec-c2-05-doublet-savant-cinq'), say: REFRAME, terms: ['doublet'],
  cards: [
    card(E(1071), 'hôpital', 'du latin hospitale', "repris plus tard, directement sur le latin hospitale ; son jumeau populaire est hôtel, né par évolution naturelle du même mot. EN: borrowed later, straight from Latin hospitale; its popular twin is hôtel, born through natural evolution of the same word."),
    card(E(1072), 'potion', 'du latin potionem', "repris plus tard sur potionem, gardant le sens d’un remède à boire ; son jumeau populaire, poison, a glissé vers un sens dangereux. EN: borrowed later from potionem, keeping the drink-remedy sense; its popular twin, poison, drifted toward a dangerous sense."),
    card(E(1073), 'captif', 'du latin captivus', "repris plus tard sur captivus, gardant le sens de prisonnier ; son jumeau populaire, chétif, a glissé vers maigre, faible. EN: borrowed later from captivus, keeping the prisoner sense; its popular twin, chétif, drifted toward puny, weak."),
    card(E(1074), 'légal', 'du latin legalis', "repris plus tard, directement sur legalis ; son jumeau populaire est loyal, né par évolution naturelle en vieux français. EN: borrowed later, straight from legalis; its popular twin is loyal, born through natural evolution in Old French."),
    card(E(1075), 'direct', 'du latin directum', "repris plus tard sur directum ; son jumeau populaire est droit, né par évolution naturelle du même mot. EN: borrowed later from directum; its popular twin is droit, born through natural evolution of the same word."),
  ],
};

const A8_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a8-table', layer: 'core', sheetId: 'sheet-doublets',
  title: 'Cinq jumeaux populaires',
  cols: ['Mot populaire', 'Jumeau savant', 'Origine latine'],
  rows: [
    tapRow(['hôtel', 'hôpital', 'hospitale'], E(1076), 'Le jumeau populaire d’hôpital', 'Hôtel a évolué naturellement du latin hospitale, par le son, sans passer par un emprunt tardif. EN: hôtel evolved naturally from Latin hospitale, through sound change, without a later borrowing.'),
    tapRow(['poison', 'potion', 'potionem'], E(1077), 'Le jumeau populaire de potion', 'Poison vient du même mot latin que potion, mais son sens a glissé vers un breuvage dangereux. EN: poison comes from the same Latin word as potion, but its sense drifted toward a dangerous drink.'),
    tapRow(['chétif', 'captif', 'captivus'], E(1078), 'Le jumeau populaire de captif', 'Chétif vient du même mot latin que captif, mais son sens a glissé de prisonnier vers faible, maigre. EN: chétif comes from the same Latin word as captif, but its sense drifted from prisoner to weak, puny.'),
    tapRow(['loyal', 'légal', 'legalis'], E(1079), 'Le jumeau populaire de légal', 'Loyal vient du même mot latin que légal, par le vieux français leial : respecter une règle, devenu fidélité. EN: loyal comes from the same Latin word as légal, through Old French leial: respecting a rule, which became faithfulness.'),
    tapRow(['droit', 'direct', 'directum'], E(1080), 'Le jumeau populaire de direct', 'Droit vient du même mot latin que direct, par évolution naturelle du son depuis directum. EN: droit comes from the same Latin word as direct, through natural sound evolution from directum.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['doublet'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a8-exemples', layer: 'core', sheetId: 'sheet-doublets',
  title: 'Deux doublets de plus',
  examples: [
    ex(E(1081), 'frêle (populaire) et fragile (savant), du latin fragilis'),
    ex(E(1082), 'fragile, le jumeau savant de frêle, resté proche du latin'),
    ex(E(1083), 'écouter (populaire) et ausculter (savant), du latin auscultare'),
    ex(E(1084), 'ausculter, le jumeau savant d’écouter, réservé au sens médical'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['doublet'],
};

const A8_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-groupe', layer: 'core', size: 'lg',
  title: 'Même ancêtre latin, deux mots français', frSub: 'Sept doublets',
  groups: [
    grp('Un sens resté proche du latin', [
      it(E(1071), 'hôpital : proche d’hospitale'),
      it(E(1072), 'potion : proche de potionem'),
      it(E(1074), 'légal : proche de legalis'),
    ], chk('Le mot savant, dans un doublet, est en général...', ['resté plus proche de la forme et du sens latins', 'plus éloigné du latin'], 0,
      'Le mot savant est un emprunt plus tardif, plus proche de l’original. EN: the learned word is a later borrowing, closer to the original.')),
    grp('Un sens qui a glissé', [
      it(E(1077), 'poison : glissé vers un sens dangereux'),
      it(E(1078), 'chétif : glissé vers faible, maigre'),
    ], chk('Le mot populaire, dans un doublet, a souvent...', ['glissé vers un sens différent du latin d’origine', 'gardé exactement le même sens'], 0,
      'L’évolution naturelle laisse parfois le sens dériver loin de l’origine. EN: natural evolution sometimes lets the meaning drift far from the origin.')),
    ctl('Loyal et légal', 'Loyal et légal viennent tous les deux de...', ['legalis, un seul mot latin', 'deux mots latins différents'], 0,
      'Un seul ancêtre, deux héritiers français. EN: one ancestor, two French heirs.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['doublet'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le doublet', 'Un doublet, c’est...', ['deux mots français venus d’un seul mot latin', 'deux synonymes inventés par hasard'], 0,
    'Une vraie parenté historique, jamais un hasard. EN: a real historical kinship, never a coincidence.'),
  ctl('Poison et potion', 'Poison et potion viennent du même mot latin, mais...', ['leurs sens ont fini par diverger', 'ils veulent dire exactement la même chose aujourd’hui'], 0,
    'Même origine ne veut pas dire même sens aujourd’hui. EN: same origin does not mean the same meaning today.'),
  ctl('Le mot savant', 'Dans un doublet, le mot savant est généralement...', ['un emprunt plus tardif, plus proche du latin', 'le plus ancien des deux'], 0,
    'Le mot populaire évolue depuis plus longtemps ; le mot savant arrive plus tard. EN: the popular word has been evolving for longer; the learned word arrives later.'),
], ['doublet']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Le mot populaire et le mot savant',
    opener: {
      line: "Hôtel et hôpital, poison et potion : sept paires de mots français nées d’un seul mot latin, chacune avec sa propre histoire. EN: Hôtel and hôpital, poison and potion: seven pairs of French words born from a single Latin word, each with its own story.",
      imageRef: 'lessons/c2-05-etymologie/act08.jpg',
    },
    sections: [],
    milestone: 'Tu expliques, pour sept doublets, comment un seul mot latin a donné un mot populaire et un mot savant, parfois avec des sens aujourd’hui très éloignés. EN: You can explain, for seven doublets, how a single Latin word gave both a popular and a learned word, sometimes with very different meanings today.',
    estScreens: 32, restPoints: ['a8-table', 'a8-groupe'],
  },
  sections: [A8_USAGES, A8_DECK, A8_TABLE, A8_EXEMPLES, A8_GROUPE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — RACINES VOISINES, HISTOIRES SÉPARÉES
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a9-histoire', layer: 'core',
  title: 'Deux histoires qui se ressemblent, et une seule vraie', frSub: 'Mme Girard pose une dernière question',
  setting: "Mme Girard termine l’entretien par une question sur l’origine des mots, pas sur leur sens.",
  bubbles: [
    { from: 'coach', fr: 'La choucroute, ça vient de chou et de croûte, non.', en: 'Choucroute, that comes from chou and croûte, right.' },
    { from: 'user', fr: src(E(1091)).fr, en: src(E(1091)).en },
    { from: 'coach', fr: 'Et forcené, ça doit venir d’une légende, alors.', en: 'And forcené, that must come from some legend, then.' },
    { from: 'user', fr: "Pas forcément : selon le TLFi, forcené vient vraiment de fors, hors, et sen, le sens, en vieux français.", en: 'Not necessarily: according to the TLFi, forcené really does come from fors, outside, and sen, the mind, in Old French.', warn: 'Une histoire surprenante n’est pas automatiquement fausse.' },
  ],
  closing: { fr: 'Mme Girard sourit enfin : « Vous ne devinez plus, vous vérifiez. »', en: 'Mme Girard finally smiles: "You are no longer guessing, you are checking."' },
  audio: REC('rec-c2-05-deux-histoires'), say: REFRAME, terms: ['sourceNommee'],
};

const A9_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a9-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-racines-voisines',
  title: 'Trois pièges de ressemblance', frSub: 'Même lettres, histoires séparées ou corrigées',
  hint: 'Trois cartes. La ressemblance ne prouve jamais rien seule.',
  audio: REC('rec-c2-05-voisines-trois'), say: REFRAME, terms: ['racineVoisine'],
  cards: [
    card(E(1085), 'disque', 'grec diskos', "disque vient du grec diskos, un objet rond et plat, sans aucun lien avec le préfixe de négation dis- (comme dans disparaître). EN: disque comes from Greek diskos, a round flat object, with no link to the negation prefix dis- (as in disparaître)."),
    card(E(1086), 'phobie', 'grec phobos', "phobie vient du grec phobos, la crainte, une racine différente de phone (le son), malgré la ressemblance avec la famille de téléphone. EN: phobie comes from Greek phobos, fear, a different root from phone (sound), despite the resemblance to the téléphone family."),
    card(E(1088), 'choucroute', 'alsacien sürkrut, remodelé', "selon le TLFi, choucroute vient de l’alsacien sürkrut (« chou aigre »), remodelé sous l’influence de chou : jamais chou + croûte. EN: per the TLFi, choucroute comes from Alsatian sürkrut, reshaped under the influence of chou: never chou + croûte."),
  ],
};

const A9_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a9-table', layer: 'core', sheetId: 'sheet-racines-voisines',
  title: 'Trois histoires de plus',
  cols: ['Mot', 'Vraie origine'],
  rows: [
    tapRow(['téléphonie', 'tele + phone, la même racine que téléphone'], E(1087), 'Un rappel, pas un piège', 'Téléphonie partage bien tele + phone, contrairement à phobie, qui n’a aucun lien avec cette famille malgré l’air de famille. EN: téléphonie does share tele + phone, unlike phobie, which has no link to that family despite the family resemblance.'),
    tapRow(['contredanse', 'anglais country dance, remodelé'], E(1089), 'Une autre étymologie populaire corrigée', 'Selon le TLFi, contredanse vient de l’anglais country dance, remodelé sous l’influence de contre et danse : jamais contre + danse à l’origine. EN: per the TLFi, contredanse comes from English country dance, reshaped under the influence of contre and danse: never originally contre + danse.'),
    tapRow(['forcené', 'fors + sen, vieux français'], E(1090), 'Une histoire surprenante, et vraie', 'Forcené vient vraiment de fors et sen, vieux français pour hors de son bon sens : l’explication surprenante EST la vraie. EN: forcené really comes from fors and sen, Old French for outside one’s mind: the surprising explanation IS the true one.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['sourceNommee'],
};

const A9_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-groupe', layer: 'core', size: 'lg',
  title: 'Vraie parenté, ou ressemblance seule', frSub: 'Classe chaque histoire',
  groups: [
    grp('Une vraie parenté', [
      it(E(1087), 'téléphonie : vraiment tele + phone'),
      it(E(1090), 'forcené : vraiment fors + sen'),
    ], chk('Une vraie parenté se prouve par...', ['une source étymologique réelle', 'une impression de logique'], 0,
      'Jamais la logique apparente seule. EN: never apparent logic alone.')),
    grp('Une ressemblance seule, ou une histoire corrigée', [
      it(E(1086), 'phobie : pas liée à phone, malgré l’air de famille'),
      it(E(1088), 'choucroute : pas chou + croûte, malgré l’apparence'),
      it(E(1089), 'contredanse : pas contre + danse à l’origine'),
    ], chk('Ces trois mots partagent quoi...', ['une explication plausible, mais fausse ou sans lien réel', 'la même racine grecque'], 0,
      'La plausibilité ne remplace jamais la source. EN: plausibility never replaces the source.')),
    ctl('Disque et disparaître', 'Disque (grec diskos) et disparaître (latin dis-) sont...', ['deux histoires séparées malgré les mêmes trois lettres', 'la même racine'], 0,
      'Mêmes lettres, deux histoires séparées. EN: same letters, two separate histories.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['sourceNommee'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Disque', 'Disque vient du grec...', ['diskos, un objet rond', 'dis-, la négation'], 0, 'Diskos, jamais le préfixe de négation. EN: diskos, never the negation prefix.'),
  ctl('Choucroute', 'Choucroute vient réellement...', ["de l’alsacien sürkrut, remodelé", 'de chou et croûte'], 0, 'Selon le TLFi, pas une invention de cette leçon. EN: according to the TLFi, not invented for this lesson.'),
  ctl('Forcené', 'Forcené vient réellement...', ['de fors et sen, en vieux français', "d’une légende sans source"], 0, 'Une histoire surprenante peut être la vraie. EN: a surprising story can be the true one.'),
], ['sourceNommee', 'racineVoisine']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Racines voisines, histoires séparées',
    opener: {
      line: "Disque n’est pas la négation dis-, et choucroute n’est pas chou plus croûte : ici tu apprends que seule une source tranche, jamais une ressemblance. EN: Disque is not the negation dis-, and choucroute is not chou plus croûte: here you learn that only a source decides, never a resemblance.",
      imageRef: 'lessons/c2-05-etymologie/act09.jpg',
    },
    sections: [],
    milestone: 'Tu distingues une vraie racine partagée d’une simple ressemblance de lettres, et tu reconnais une étymologie populaire corrigée contre une histoire surprenante mais vraie, toujours avec une source nommée. EN: You can tell a real shared root from a mere letter resemblance, and recognise a corrected folk etymology against a surprising but true story, always with a named source.',
    estScreens: 30, restPoints: ['a9-table', 'a9-groupe'],
  },
  sections: [A9_HISTOIRE, A9_DECK, A9_TABLE, A9_GROUPE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — TA PIERRE
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_MODELE: Sec<'examples'> = {
  type: 'examples', id: 'a10-modele', layer: 'core', sheetId: 'sheet-bilan-pierres',
  title: 'Deux mots inconnus, décomposés', frSub: 'Le modèle de Mme Girard',
  examples: [
    ex(E(1093), 'photophobe, le mot à décomposer'),
    ex(E(1095), 'phot- (la lumière) + -phobe (qui craint) : qui craint la lumière'),
    ex(E(1094), 'insupportable, le mot à décomposer'),
    ex(E(1096), 'in- (négation) + supportable (qu’on peut supporter) : qu’on ne peut pas supporter'),
    ex(E(1097), 'un doublet modèle, pour la deuxième partie de la mission'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['racine', 'affixe'],
};

const A10_PLAN: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-plan', layer: 'core', size: 'lg',
  title: 'Le plan en trois étapes', frSub: 'Décomposer, déduire, citer',
  groups: [
    ctl('Étape 1', 'Devant un mot savant inconnu, la première étape est...', ['repérer la racine ou l’affixe, et nommer sa langue d’origine', 'chercher un synonyme en anglais'], 0,
      'Repérer, puis nommer la langue d’origine. EN: spot it, then name its language of origin.'),
    ctl('Étape 2', 'La deuxième étape est...', ['déduire le sens probable du mot entier', 'inventer une histoire plausible'], 0,
      'Déduire à partir des pierres repérées, jamais inventer. EN: deduce from the stones spotted, never invent.'),
    ctl('Étape 3', 'Pour expliquer l’histoire d’un doublet, la troisième étape est...', ['citer une source réelle', 'se fier à la plausibilité de l’explication'], 0,
      'Toujours une source réelle, jamais la plausibilité seule. EN: always a real source, never plausibility alone.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['sourceNommee'],
};

const A10_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a10-usages', layer: 'core', title: 'Deux bonnes réponses possibles',
  cases: [
    uc('Nommer ce que craint quelqu’un de photophobe', E(1093)),
    uc('Nommer ce que ne peut plus endurer un lieu bruyant', E(1094)),
    uc('Citer le TLFi pour un doublet', E(1098)),
    uc('Reconnaître sa propre erreur sans la cacher', E(1112)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['sourceNommee'],
};

const A10_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a10-scenario', layer: 'core', title: 'Léo répond, à voix haute',
  setting: "Avant d’écrire sa réponse officielle, Léo s’entraîne à voix haute, en répondant à Mme Girard comme s’il préparait sa note.",
  turns: [
    {
      ai: 'Expliquez-moi photophobe, sans dictionnaire.', en: 'Explain photophobe to me, without a dictionary.',
      user: src(E(1095)).fr, userEn: 'Photophobe reads as phot-, light, and -phobe, which fears: something that fears the light. (The decomposition before the meaning.)',
      alts: [
        { fr: src(E(1101)).fr, en: 'I thought it looked like a word I already knew, so I answered fast. (The wrong reflex, never the right move.)' },
      ],
    },
    {
      ai: "Maintenant, le couple légal et loyal : pourquoi deux mots.", en: 'Now, the pair légal and loyal: why two words.',
      user: src(E(1098)).fr, userEn: 'According to the TLFi, loyal descends from legalis through Old French leial, while légal was borrowed later, directly from the Latin. (A named source, not a guess.)',
      alts: [
        { fr: src(E(1103)).fr, en: 'I explained that the two words probably meant the same thing, without checking. (No source, a real fault.)' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['doublet', 'sourceNommee'],
};

/** THE GRADED TASK. A written explanation deriving two unseen compounds
 *  from roots taught in acts 2-7, and explaining one doublet pair's shared
 *  history with a named source (both halves of the lesson's scope,
 *  C2-BUILD-LOG's brief). */
const A10_MISSION: Sec<'task'> = {
  type: 'task', id: 'a10-mission', title: 'La note de Mme Girard', frSub: 'Mission écrite',
  brief: `Mme Girard, qui a reçu Léo en entretien, lui a envoyé cet exercice écrit avant leur dernière rencontre. Lis-le, puis écris la réponse que Léo doit lui envoyer. ${MESSAGE_GIRARD}`,
  briefEn: "Mme Girard, who interviewed Léo, sent him this written exercise before their last meeting. Read it, then write the answer Léo should send her. Her message is printed above so you can write with it in front of you.",
  produce: "Écris une réponse de 150 à 250 mots : décompose « photophobe » et « insupportable » en leurs racines ou affixes, nomme la langue d’origine de chaque pierre, déduis le sens probable de chaque mot entier, puis choisis un doublet vu dans cette leçon (par exemple légal et loyal) et explique, avec une source nommée (TLFi, Bloch et Wartburg ou Le Robert historique), comment le français a fini par en garder deux plutôt qu’un seul.",
  responseSpec: { kind: 'text', minWords: 150, maxWords: 250 },
  rubric: {
    criteria: [
      { key: 'decomposition', label: 'Les deux mots inconnus, décomposés', maxPoints: 4, descriptors: [
        "4 : Photophobe (phot-, la lumière, grec ; -phobe, qui craint, grec) et insupportable (in-, négation, latin ; supportable, qu’on peut supporter) sont tous deux décomposés, chaque pierre nommée avec sa langue d’origine.",
        "3 : Les deux sont décomposés, mais une langue d’origine manque ou est inexacte.",
        '2 : Un seul des deux mots est vraiment décomposé en ses pierres.',
        "1 : Les deux mots sont donnés sans décomposition, ou devinés au son.",
      ] },
      { key: 'sens', label: 'Le sens déduit des pierres', maxPoints: 4, descriptors: [
        "4 : Le sens de chaque mot entier découle clairement des pierres nommées (qui craint la lumière ; qu’on ne peut pas supporter).",
        "3 : Le sens est juste pour les deux, mais le lien avec les pierres reste implicite.",
        '2 : Le sens est juste pour un seul des deux mots.',
        "1 : Le sens est deviné, sans lien visible avec la décomposition.",
      ] },
      { key: 'doublet', label: 'Le doublet choisi, et son histoire', maxPoints: 4, descriptors: [
        "4 : Un doublet réel de la leçon (légal/loyal ou un autre) est nommé avec son ancêtre latin commun, et la différence entre le mot savant et le mot populaire est expliquée.",
        "3 : Le doublet est bien nommé, mais la différence entre les deux mots reste vague.",
        '2 : Les deux mots sont présentés comme de simples synonymes, sans ancêtre commun nommé.',
        "1 : Aucun doublet réel n’est utilisé, ou le couple choisi n’en est pas un.",
      ] },
      { key: 'source', label: 'Une source réellement citée', maxPoints: 4, descriptors: [
        "4 : Une source nommée (TLFi, Bloch et Wartburg, Le Robert historique) est citée explicitement pour l’histoire du doublet.",
        "3 : Une source est citée, mais de façon vague (« les dictionnaires disent »).",
        '2 : Aucune source n’est nommée, mais l’explication reste plausible.',
        "1 : L’explication s’appuie sur une ressemblance de surface, présentée comme une preuve.",
      ] },
      { key: 'clarte', label: 'Une organisation claire, un mot à la fois', maxPoints: 2, descriptors: [
        "2 : Chaque mot est traité séparément, dans un ordre clair (photophobe, puis insupportable, puis le doublet).",
        "1 : Les trois éléments se mélangent, rendant la réponse difficile à suivre.",
      ] },
      { key: 'langue', label: 'Une langue soignée', maxPoints: 2, descriptors: [
        '2 : Peu ou pas d’erreurs, des phrases qui s’enchaînent.',
        "1 : Des erreurs fréquentes qui gênent la lecture.",
      ] },
    ],
  },
  scaffold: [
    'Ce mot se lit... et ... .',
    'Cela vient du grec/latin..., qui veut dire... .',
    'Le sens probable est donc... .',
    'Selon le TLFi (ou Bloch et Wartburg, ou Le Robert historique)...',
    'Les deux mots viennent du même mot latin, mais... .',
  ],
  modelAnswer: "Madame Girard,\n\nPhotophobe se lit phot-, la lumière, du grec, et -phobe, qui craint, du grec également : le mot désigne donc quelqu’un qui craint ou supporte mal la lumière, ce qui correspond bien à un patient après une opération des yeux.\n\nInsupportable se lit in-, la négation, du latin, et supportable, formé sur supporter (qu’on peut supporter, du latin sub- et portare) : le mot désigne donc ce qu’on ne peut plus endurer, comme un bruit de chantier qui dépasse une certaine heure.\n\nPour le doublet, je choisis légal et loyal. Les deux viennent d’un seul mot latin, legalis. Selon le TLFi, loyal est le descendant populaire, passé par le vieux français leial, en gardant l’idée de respecter une règle, devenue avec le temps la fidélité envers une personne. Légal, au contraire, a été repris plus tard, directement sur le latin écrit, en gardant le sens juridique d’origine. Le français a donc gardé deux mots parce qu’ils sont arrivés par deux chemins différents, à deux moments différents, et non parce que quelqu’un les aurait inventés comme synonymes.\n\nLéo",
  modelAnswerEn: "Mme Girard,\n\nPhotophobe reads as phot-, light, from Greek, and -phobe, which fears, also from Greek: the word therefore names someone who fears or poorly tolerates light, which fits a patient after eye surgery.\n\nInsupportable reads as in-, negation, from Latin, and supportable, built on supporter (which can be borne, from Latin sub- and portare): the word therefore names what can no longer be endured, like construction noise past a certain hour.\n\nFor the doublet, I choose légal and loyal. Both come from a single Latin word, legalis. According to the TLFi, loyal is the popular descendant, passed through Old French leial, keeping the idea of respecting a rule, which over time became faithfulness to a person. Légal, by contrast, was borrowed later, straight from the written Latin, keeping the original legal sense. French kept two words because they arrived by two different paths, at two different times, not because someone invented them as synonyms.\n\nLéo",
  watchFor: [
    { pattern: 'The word is guessed from a sound-alike French word, with no decomposition into root/affix.', criterion: 'decomposition', feedback: 'Repère la pierre, puis nomme sa langue d’origine, comme à l’acte 1.', ref: 'a1-check' },
    { pattern: 'The meaning is stated without being derived from the named pieces.', criterion: 'sens', feedback: 'Le sens doit découler des pierres nommées, jamais être deviné à côté.', ref: 'a10-modele' },
    { pattern: 'The chosen pair is not a real doublet (two unrelated words, or a simple synonym pair with no shared Latin ancestor named).', criterion: 'doublet', feedback: 'Choisis un vrai doublet de la leçon, avec son ancêtre latin nommé.', ref: 'a8-table' },
    { pattern: 'No named source given for the doublet’s history, or the explanation relies only on how plausible it sounds.', criterion: 'source', feedback: 'Cite une source réelle : TLFi, Bloch et Wartburg, ou Le Robert historique.', ref: 'a9-histoire' },
    { pattern: 'The three parts of the answer are mixed together with no clear order.', criterion: 'clarte', feedback: 'Traite chaque mot séparément, dans l’ordre du plan.', ref: 'a10-plan' },
  ],
  graderNotes: [
    'Word count: 150 to 250, with 10% tolerance (135 to 275) before length costs points. A greeting line does not count.',
    'Accept any of the lesson’s seven doublets (hôtel/hôpital, poison/potion, chétif/captif, loyal/légal, droit/direct, frêle/fragile, écouter/ausculter), not only légal/loyal.',
    'Accept any correctly named source (TLFi, Bloch et Wartburg, Le Robert historique) for the doublet’s history; do not require a specific one.',
    "Do not mark grammar beyond what interferes with comprehension; this task marks decomposition, deduced meaning and sourced history, not a grammar point (C2 has none, per C2-BUILD-PLAN.md).",
    'Feedback language: unsimplified C2 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['racine', 'doublet'],
};

const A10_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a10-parler', layer: 'core', title: 'Dis ta décomposition à voix haute', skill: 'speak',
  itemIds: ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
  audio: AUDIO, say: REFRAME, terms: ['racine'],
};

const A10_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a10-cheat', layer: 'core', sheetId: 'sheet-bilan-pierres',
  title: 'Toutes les pierres sur un écran',
  rows: [
    { k: 'les racines grecques', v: 'tele, phon, graph, bio, logos, scope', say: src(E(1010)).fr,
      detail: { title: 'Une racine, dix mots', body: 'Le sens reste stable, même dressé dans dix mots différents. EN: the meaning stays stable, even dressed in ten different words.', say: src(E(1014)).fr } },
    { k: 'les préfixes latins', v: 'trans-, inter-, sur-, sous-, in-, dis-, anti-', say: src(E(1021)).fr,
      detail: { title: 'Une direction, un préfixe', body: 'Chaque préfixe garde sa direction d’origine. EN: each prefix keeps its original direction.', say: src(E(1031)).fr } },
    { k: 'une racine, des verbes', v: 'ducere (mener), portare (porter)', say: src(E(1041)).fr,
      detail: { title: 'Même racine, préfixe différent', body: 'Le préfixe change le sens, parfois beaucoup. EN: the prefix changes the meaning, sometimes a great deal.', say: src(E(1046)).fr } },
    { k: 'les suffixes', v: '-tion, -ment, -age, -able, -eux, -if, -al', say: src(E(1051)).fr,
      detail: { title: 'Le radical doit être connu', body: 'Un suffixe productif n’est jamais automatique. EN: a productive suffix is never automatic.', say: src(E(1062)).fr } },
    { k: 'le doublet', v: 'un mot latin, un mot populaire, un mot savant', say: src(E(1074)).fr,
      detail: { title: 'Deux héritiers, une origine', body: 'Le mot savant reste souvent plus proche du latin. EN: the learned word often stays closer to Latin.', say: src(E(1079)).fr } },
    { k: 'la source nommée', v: 'jamais une ressemblance, toujours une preuve', say: src(E(1091)).fr,
      detail: { title: 'La plausibilité ne prouve rien', body: 'Seule une source réelle tranche. EN: only a real source decides.', say: src(E(1090)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['racine', 'sourceNommee'],
};

const A10_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a10-progress', layer: 'core', title: 'Où tu en es',
  body: "Tu devines maintenant le sens probable d’un mot savant inconnu en repérant ses racines grecques, ses préfixes et ses suffixes latins, plutôt qu’en cherchant un mot français qui sonne pareil. Tu sais que deux mots qui se ressemblent peuvent avoir deux histoires séparées, et que la seule chose qui tranche entre une vraie et une fausse étymologie est une source réelle, jamais la plausibilité d’une explication. Tu peux aussi expliquer comment un seul mot latin a parfois donné deux mots français, un populaire et un savant, avec des sens qui ont pu diverger depuis. Avant l’examen, prends un mot savant que tu ne connais pas encore et essaie de le décomposer avant de le chercher. EN: Before any exam, take a learned word you do not yet know and try to decompose it before looking it up.",
  stats: [
    { k: 'Le mot deviné', v: 'racine, préfixe, suffixe, jamais le son' },
    { k: 'La racine voisine évitée', v: 'une ressemblance n’est jamais une preuve' },
    { k: 'Le doublet expliqué', v: 'un ancêtre latin, deux héritiers français' },
    { k: 'La source citée', v: 'TLFi, Bloch et Wartburg, Le Robert historique' },
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
  ({ format: 'errorSpot', q: 'Un mot ou une racine est mal identifié. Écris la phrase avec la bonne pierre. EN: A word or root is misidentified; write the sentence with the right stone.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A10_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a10-quiz', layer: 'core', title: 'Le bilan', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-grec', label: 'Les racines grecques du savoir', targets: ['racine-devinee-au-son'],
      questions: [
        mc('Tele, en grec, veut dire...', ['loin', 'proche', 'le son'], 0, 'Tele veut dire loin, jamais proche. EN: tele means far, never near.', 'a2-deck'),
        mc('Graphein, en grec, veut dire...', ['écrire', 'regarder', 'parler'], 0, 'Graphein veut dire écrire. EN: graphein means to write.', 'a2-table'),
        mc('Bios, en grec, veut dire...', ['la vie', 'la nature', 'le corps'], 0, 'Bios veut dire la vie, jamais naturel. EN: bios means life, never natural.', 'a2-groupe'),
        mc('Dans téléphérique, la deuxième moitié vient de...', ['pherein, porter', 'phonos, le cri', 'bios, la vie'], 0, 'Pherein veut dire porter, une racine différente de phone. EN: pherein means to carry, a different root from phone.', 'a2-piege'),
        tI('Complète. Un mot grec.', 'Khronos, en grec, veut dire ... .', 'le temps', 'C’est le sens de khronos dans chronophage et chronologie. EN: that is khronos’s meaning in chronophage and chronologie.', 'a2-deck', ['temps']),
        tI('Complète. Un mot.', 'Mikros, en grec, veut dire ... .', 'petit', 'Mikros donne micro-, petit. EN: mikros gives micro-, small.', 'a2-deck'),
        eS('Téléphone vient de télé, comme la télévision.', 'Téléphone vient de tele, loin, et phone, le son.', 'La télévision est elle-même construite sur tele ; l’un n’explique pas l’autre. EN: television is itself built on tele; neither explains the other.', 'a2-piege'),
        lC('Écoute. Cette phrase utilise-t-elle la racine phone (le son) ou graphein (écrire).', src(E(1016)).fr, ['phone, le son', 'graphein, écrire'], 0, 'Phonétique vient de phone, le son. EN: phonétique comes from phone, sound.', 'a2-table'),
      ],
    },
    {
      id: 'r2-prefixe-position', label: 'Préfixes de position et de mouvement', targets: ['prefixe-position-confondu'],
      questions: [
        mc('Trans- veut dire...', ['à travers', 'au-dessus', 'entre'], 0, 'Trans- veut toujours dire à travers. EN: trans- always means across.', 'a3-deck'),
        mc('Inter- veut dire...', ['entre', 'intérieur', 'dessous'], 0, 'Inter- veut dire entre, jamais intérieur. EN: inter- means between, never inside.', 'a3-deck'),
        mc('Dans survoler, sur- veut dire...', ['au-dessus', 'sûr, certain', 'entre'], 0, 'Sur- veut dire au-dessus, jamais sûr. EN: sur- means above, never certain.', 'a3-piege'),
        mc('Dans soumettre, sou- vient de sub-, qui veut dire...', ['dessous', 'une pièce de monnaie', 'au-dessus'], 0, 'Sub- veut dire dessous. EN: sub- means under.', 'a3-piege'),
        tI('Complète. Un mot.', 'Transparent vient de trans- et de ... (paraître), pas de portare.', 'parere', 'Parere donne le deuxième morceau de transparent. EN: parere gives transparent’s second piece.', 'a3-deck', ['parere, paraître']),
        tI('Complète. Un mot.', 'International veut dire entre les ... .', 'nations', 'Inter- place le mot entre plusieurs nations. EN: inter- places the word between several nations.', 'a3-deck'),
        eS('International, inter veut dire intérieur, donc dans un seul pays.', 'International, inter veut dire entre, donc entre plusieurs nations.', 'Inter- veut dire entre, jamais intérieur. EN: inter- means between, never inside.', 'a3-piege'),
        lC('Écoute. Cette phrase utilise-t-elle un préfixe de direction au-dessus ou dessous.', src(E(1030)).fr, ['dessous', 'au-dessus'], 0, 'Souterrain, sous- veut dire dessous. EN: souterrain, sous- means under.', 'a3-table'),
      ],
    },
    {
      id: 'r3-negation', label: 'Préfixes de négation', targets: ['assimilation-ratee'],
      questions: [
        mc('In- devient... devant p, b ou m.', ['im-', 'in-', 'il-'], 0, 'Impossible, jamais inpossible. EN: impossible, never inpossible.', 'a4-deck'),
        mc('In- devient... devant l.', ['il-', 'in-', 'ir-'], 0, 'Illisible, jamais inlisible. EN: illisible, never inlisible.', 'a4-deck'),
        mc('In- devient... devant r.', ['ir-', 'in-', 'il-'], 0, 'Irrégulier, jamais inrégulier. EN: irrégulier, never inrégulier.', 'a4-deck'),
        mc('Anti- veut dire...', ['contre', 'avant', 'deux'], 0, 'Anti- veut dire contre ; avant se dit ante-. EN: anti- means against; before is ante-.', 'a4-table'),
        tI('Complète. Un mot.', 'Dis-, dans disparaître, marque une séparation, sans lien avec le mot ... .', 'disque', 'Disque vient du grec diskos, une histoire séparée. EN: disque comes from Greek diskos, a separate history.', 'a4-piege'),
        tI('Complète. Un mot.', 'Dé-, dans déconnecter, marque une ... , jamais le chiffre deux.', 'cessation', 'Dé- marque une séparation ou une cessation. EN: dé- marks a separation or cessation.', 'a4-table', ['séparation']),
        eS('Un antibiotique agit avant la vie des microbes, pour les empêcher de se développer.', 'Un antibiotique agit contre les organismes vivants.', 'Anti- veut dire contre, jamais avant. EN: anti- means against, never before.', 'a4-piege'),
        lC('Écoute. Le préfixe de cette phrase marque-t-il contre, ou avant.', src(E(1038)).fr, ['contre', 'avant'], 0, 'Antibiotique, anti- veut dire contre. EN: antibiotique, anti- means against.', 'a4-table'),
      ],
    },
    {
      id: 'r4-verbes', label: 'Une racine, une famille de verbes', targets: ['racine-verbale-confondue'],
      questions: [
        mc('Ducere, en latin, veut dire...', ['mener', 'porter', 'parler'], 0, 'Ducere veut dire mener. EN: ducere means to lead.', 'a5-deck'),
        mc('Portare, en latin, veut dire...', ['porter', 'mener', 'voir'], 0, 'Portare veut dire porter. EN: portare means to carry.', 'a5-table'),
        mc('Tirer une conclusion d’un fait, c’est le verbe...', ['déduire', 'réduire', 'produire'], 0, 'Déduire, pas réduire (diminuer) ni produire (créer). EN: déduire, not réduire (to diminish) nor produire (to create).', 'a5-piege'),
        mc('Porter un poids par en dessous, endurer, c’est le verbe...', ['supporter', 'apporter', 'rapporter'], 0, 'Supporter, pas apporter (porter vers) ni rapporter (relater). EN: supporter, not apporter (to bring toward) nor rapporter (to report).', 'a5-piege'),
        tI('Complète. Un mot.', 'Mener quelqu’un à l’intérieur, c’est le verbe ... .', 'introduire', 'Intro- (dedans) + ducere (mener). EN: intro- (inside) + ducere (to lead).', 'a5-deck'),
        tI('Complète. Un mot.', 'Porter un fait en retour, le relater, c’est le verbe ... .', 'rapporter', 'Re- + ad- + portare. EN: re- + ad- + portare.', 'a5-table'),
        eS('Le président a produit le nouvel invité sans le nommer.', 'Le président a introduit le nouvel invité sans le nommer.', 'Introduire mène quelqu’un à l’intérieur ; produire crée quelque chose. EN: introduire leads someone inside; produire creates something.', 'a5-piege'),
        lC('Écoute. Cette phrase utilise-t-elle ducere (mener) ou portare (porter).', src(E(1049)).fr, ['portare, porter', 'ducere, mener'], 0, 'Comporter vient de cum- + portare. EN: comporter comes from cum- + portare.', 'a5-table'),
      ],
    },
    {
      id: 'r5-suffixe-nom', label: 'Suffixes qui fabriquent un nom', targets: ['suffixe-nom-invente'],
      questions: [
        mc('Juger prend le suffixe...', ['-ment', '-age', '-ure'], 0, 'Jugement, jamais jugeage ni jugeure. EN: jugement, never jugeage nor jugeure.', 'a6-deck'),
        mc('Nettoyer prend le suffixe...', ['-age', '-ure', '-ment'], 0, 'Nettoyage, jamais nettoiture ni nettoiement. EN: nettoyage, never nettoiture nor nettoiement.', 'a6-piege'),
        mc('Fermage existe déjà et veut dire...', ['la location d’une terre agricole', 'l’action de fermer', 'un synonyme de fermeture'], 0, 'Un faux calque de sens, pas un mot inventé. EN: a false calque of meaning, not an invented word.', 'a6-table'),
        mc('Patience vient...', ['directement du latin, sans suffixe français', 'de patienter + -ence', 'du grec patientos'], 0, 'Tous les noms ne sont pas construits en français. EN: not every noun is built in French.', 'a6-table'),
        tI('Complète. Un mot.', 'Décidément est déjà un ... , pas un nom.', 'adverbe', 'Décidément est un adverbe existant. EN: décidément is an existing adverb.', 'a6-piege'),
        tI('Complète. Un mot.', 'Ouvrage existe déjà et veut dire une ... .', 'œuvre', 'Ouverture, formé sur -ure, dit l’action d’ouvrir. EN: ouverture, built with -ure, names the act of opening.', 'a6-table'),
        eS('Le fermage du dossier attend une dernière signature.', 'La fermeture du dossier attend une dernière signature.', 'Fermage veut déjà dire autre chose. EN: fermage already means something else.', 'a6-piege'),
        lC('Écoute. Ce nom vient-il de -tion/-sion ou de -ment.', src(E(1052)).fr, ['-sion', '-ment'], 0, 'Décision vient de décider + -sion. EN: décision comes from décider + -sion.', 'a6-deck'),
      ],
    },
    {
      id: 'r6-suffixe-adj', label: 'Suffixes qui fabriquent un adjectif', targets: ['radical-irregulier-devine'],
      questions: [
        mc('Lire donne...', ['lisible', 'lisable', 'lisant'], 0, 'Lisible, jamais lisable. EN: lisible, never lisable.', 'a7-deck'),
        mc('Boire donne...', ['buvable', 'boisable', 'buvant'], 0, 'Buvable, jamais boisable. EN: buvable, never boisable.', 'a7-table'),
        mc('Voir donne...', ['visible', 'voyable', 'voyant'], 0, 'Visible, jamais voyable. EN: visible, never voyable.', 'a7-table'),
        mc('Culture prend le suffixe français... , jamais l’orthographe anglaise.', ['-el', '-al anglais', '-eux'], 0, 'Culturel, pas culturale ni cultureux. EN: culturel, not culturale nor cultureux.', 'a7-piege'),
        tI('Complète. Un mot.', 'Joie devant -eux devient joy..., sans le e final.', 'eux', 'Joyeux, jamais joieux. EN: joyeux, never joieux.', 'a7-piege', ['joyeux']),
        tI('Complète. Un mot.', 'Nation prend le suffixe ... .', 'al', 'National, jamais nationeux. EN: national, never nationeux.', 'a7-table', ['-al']),
        eS('La fissure devient voyable seulement de près.', 'La fissure devient visible seulement de près.', 'Voir donne visible, jamais voyable. EN: voir gives visible, never voyable.', 'a7-piege'),
        lC('Écoute. Ce mot prend-il -able ou -ible.', src(E(1062)).fr, ['-ible', '-able'], 0, 'Lisible, jamais lisable. EN: lisible, never lisable.', 'a7-deck'),
      ],
    },
    {
      id: 'r7-doublet', label: 'Le mot populaire et le mot savant', targets: ['doublet-confondu'],
      questions: [
        mc('Hôtel et hôpital viennent...', ['du même mot latin, hospitale', 'de deux mots latins différents', 'de deux racines grecques différentes'], 0, 'Un seul ancêtre, deux héritiers. EN: one ancestor, two heirs.', 'a8-deck'),
        mc('Poison et potion viennent du même mot latin, mais...', ['leurs sens ont fini par diverger', 'ils veulent dire exactement la même chose', 'ils n’ont en réalité aucun lien historique'], 0, 'Même origine ne veut pas dire même sens. EN: same origin does not mean the same meaning.', 'a8-table'),
        mc('Dans un doublet, le mot savant est généralement...', ['un emprunt plus tardif, plus proche du latin', 'le plus ancien des deux', 'le plus répandu à l’oral'], 0, 'Le mot populaire évolue depuis plus longtemps. EN: the popular word has been evolving longer.', 'a8-groupe'),
        mc('Légal et loyal viennent tous les deux de...', ['legalis', 'deux mots latins séparés', 'un seul mot grec'], 0, 'Un seul ancêtre latin, legalis. EN: one single Latin ancestor, legalis.', 'a8-table'),
        tI('Complète. Un mot.', 'Frêle est le jumeau populaire de ... , tous deux venus de fragilis.', 'fragile', 'Fragile est le mot savant, frêle le mot populaire. EN: fragile is the learned word, frêle the popular one.', 'a8-exemples'),
        tI('Complète. Un mot.', 'Écouter est le jumeau populaire de ... , tous deux venus d’auscultare.', 'ausculter', 'Ausculter est resté réservé au sens médical. EN: ausculter stayed reserved for the medical sense.', 'a8-exemples'),
        eS('Un doublet, c’est deux synonymes inventés par hasard.', 'Un doublet, c’est deux mots français venus d’un seul mot latin.', 'Une vraie parenté historique, jamais un hasard. EN: a real historical kinship, never a coincidence.', 'a8-check'),
        lC('Écoute. Ce mot est-il le jumeau savant ou le jumeau populaire d’un doublet.', src(E(1078)).fr, ['le jumeau populaire', 'le jumeau savant'], 0, 'Chétif est le jumeau populaire de captif. EN: chétif is captif’s popular twin.', 'a8-table'),
      ],
    },
    {
      id: 'r8-voisines', label: 'Racines voisines et sources nommées', targets: ['source-manquante'],
      questions: [
        mc('Disque vient du grec...', ['diskos, un objet rond', 'dis-, la négation', 'phone, le son'], 0, 'Diskos, jamais le préfixe de négation ni la racine du son. EN: diskos, never the negation prefix nor the sound root.', 'a9-deck'),
        mc('Choucroute vient réellement...', ["de l’alsacien sürkrut, remodelé", 'de chou et croûte'], 0, 'Selon le TLFi, pas une invention de cette leçon. EN: per the TLFi, not invented for this lesson.', 'a9-deck'),
        mc('Forcené vient réellement...', ['de fors et sen, en vieux français', "d’une légende sans source"], 0, 'Une histoire surprenante peut être la vraie. EN: a surprising story can be the true one.', 'a9-table'),
        mc('Pour expliquer l’histoire d’un mot, la seule chose qui tranche est...', ['une source réelle et nommée', 'la plausibilité de l’explication', 'une intuition bien formulée'], 0, 'Jamais la plausibilité seule, ni une intuition, même bien formulée. EN: never plausibility alone, nor a well-phrased intuition.', 'a9-groupe'),
        tI('Complète. Un mot.', 'Phobie vient du grec phobos, ... , une racine différente de phone.', 'la crainte', 'Phobos veut dire la crainte. EN: phobos means fear.', 'a9-deck', ['crainte']),
        tI('Complète. Un mot.', 'Contredanse vient réellement de l’anglais ... , remodelé.', 'country dance', 'Pas de contre + danse à l’origine. EN: not originally contre + danse.', 'a9-table', ['country-dance']),
        eS('Ces deux mots se ressemblent, donc ils viennent forcément de la même racine.', 'Ces deux mots se ressemblent, mais seule une source réelle prouve une vraie parenté.', 'La ressemblance ne prouve jamais rien seule. EN: resemblance alone proves nothing.', 'a9-groupe'),
        lC('Écoute. Cette explication vient-elle d’une vraie source, ou d’une ressemblance seule.', src(E(1111)).fr, ['une vraie source', 'une ressemblance seule'], 0, 'La règle que cette phrase énonce elle-même. EN: the rule this very sentence states.', 'a10-plan'),
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
spreadSlots(A10_QUIZ);

const A10_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck', id: 'a10-review', layer: 'core', title: 'Une dernière fois',
  cards: [
    { front: 'time (Greek)', back: 'khronos, chrono-', say: src(E(1014)).fr },
    { front: 'to write (Greek)', back: 'graphein, -graph-', say: src(E(1011)).fr },
    { front: 'across (Latin)', back: 'trans-', say: src(E(1022)).fr },
    { front: 'in- before l', back: 'il-', say: src(E(1033)).fr },
    { front: 'to lead (Latin)', back: 'ducere', say: src(E(1042)).fr },
    { front: 'a real word, wrong meaning', back: 'fermage, ouvrage', say: src(E(1057)).fr },
    { front: 'one Latin word, two French heirs', back: 'le doublet', say: src(E(1074)).fr },
    { front: 'same letters, separate histories', back: 'la racine voisine', say: src(E(1085)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A10_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a10-roundup', layer: 'core', title: 'Étymologie et formation des mots, en résumé',
  body: `${REFRAME} Tu devines maintenant un mot savant inconnu par ses pierres anciennes, et tu sais que la ressemblance ne prouve jamais rien seule : seule une source réelle décide d’où un mot vient vraiment. EN: You can now guess an unknown learned word by its ancient stones, and you know that resemblance alone proves nothing: only a real source decides where a word truly comes from.`,
  points: [
    'Une racine grecque ou latine garde un sens stable dans dix mots différents.',
    'In- change de costume (im-/il-/ir-) pour rester prononçable ; anti- n’est pas ante-.',
    'Même racine, préfixe différent, sens différent : déduire n’est pas réduire.',
    'Un doublet, c’est un mot latin, deux héritiers français, parfois deux sens aujourd’hui éloignés.',
    'Une ressemblance de lettres ne prouve jamais une parenté ; seule une source nommée tranche.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['racine', 'sourceNommee'],
};

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Ta pierre',
    opener: {
      line: "Mme Girard envoie un dernier exercice, deux mots que Léo n’a jamais vus : ici tu écris la réponse qu’il doit lui envoyer. EN: Mme Girard sends one last exercise, two words Léo has never seen: here you write the answer he must send her.",
      imageRef: 'lessons/c2-05-etymologie/act10.jpg',
    },
    sections: [],
    milestone: 'Tu décomposes un mot savant inconnu en ses pierres, tu déduis son sens, et tu expliques l’histoire d’un doublet avec une source réellement nommée. EN: You can decompose an unknown learned word into its stones, deduce its meaning, and explain a doublet’s history with a truly named source.',
    estScreens: 44, restPoints: ['a10-scenario', 'a10-mission', 'a10-cheat', 'a10-quiz'],
  },
  sections: [A10_MODELE, A10_PLAN, A10_USAGES, A10_SCENARIO, A10_MISSION, A10_PARLER, A10_CHEAT, A10_PROGRESS, A10_QUIZ, A10_REVIEW, A10_ROUNDUP],
  imports: IMPORTED.act10,
};

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10];

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

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-grec', title: 'Les racines grecques', format: 'mcq' as const, coach: 'Repère la racine grecque avant de deviner au son. EN: spot the Greek root before guessing by sound.', q: 'Tele, en grec, veut dire...', opts: ['loin', 'proche'], correct: 0, why: 'Tele veut dire loin. EN: tele means far.', items: [E(1010), E(1011), E(1012), E(1013), E(1014)], audio: AUDIO },
  { id: 'd-prefixe-position', title: 'Les préfixes de position', format: 'sort' as const, coach: 'Classe chaque mot par direction : à travers, entre, au-dessus, dessous. EN: sort each word by direction.', buckets: ['à travers', 'entre', 'au-dessus', 'dessous'], items: [E(1021), E(1023), E(1025), E(1029)], audio: AUDIO },
  { id: 'd-assimilation', title: 'In-, im-, il-, ir-', format: 'mcq' as const, coach: 'In- change de costume selon la lettre qui suit. EN: in- changes costume depending on the following letter.', q: 'In- devient... devant l.', opts: ['il-', 'in-'], correct: 0, why: 'Illisible, jamais inlisible. EN: illisible, never inlisible.', items: [E(1031), E(1032), E(1033), E(1034)], audio: AUDIO },
  { id: 'd-verbe-racine', title: 'Ducere et portare', format: 'mcq' as const, coach: 'Vérifie le préfixe avant de confondre deux verbes de la même famille. EN: check the prefix before mixing up two verbs of the same family.', q: 'Tirer une conclusion d’un fait, c’est le verbe...', opts: ['déduire', 'réduire'], correct: 0, why: 'Déduire, pas réduire. EN: déduire, not réduire.', items: [E(1041), E(1042), E(1046), E(1047)], audio: AUDIO },
  { id: 'd-suffixe-nom', title: 'Le suffixe à vérifier', format: 'flashcard' as const, coach: 'Dis chaque mot à voix haute, avec son suffixe réel, jamais inventé par analogie. EN: say each word aloud, with its real suffix, never one invented by analogy.', items: [E(1054), E(1055), E(1057), E(1058)], audio: AUDIO },
  { id: 'd-suffixe-adj', title: 'Le radical irrégulier', format: 'mcq' as const, coach: 'Connais le radical avant de le deviner depuis l’infinitif. EN: know the stem before guessing it from the infinitive.', q: 'Lire donne...', opts: ['lisible', 'lisable'], correct: 0, why: 'Lisible, jamais lisable. EN: lisible, never lisable.', items: [E(1062), E(1069), E(1070)], audio: AUDIO },
  { id: 'd-doublet', title: 'Un ancêtre, deux héritiers', format: 'flashcard' as const, coach: 'Dis chaque doublet à voix haute : le mot populaire, puis le mot savant. EN: say each doublet aloud: the popular word, then the learned one.', items: [E(1071), E(1076), E(1074), E(1079)], audio: AUDIO },
  { id: 'd-racine-voisine', title: 'Ressemblance ou vraie parenté', format: 'sort' as const, coach: 'Classe : une vraie parenté prouvée, ou une ressemblance seule. EN: sort: a real, proved kinship, or a mere resemblance.', buckets: ['vraie parenté', 'ressemblance seule'], items: [E(1085), E(1087), E(1088), E(1090)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'racine-devinee-au-son', description: 'Guesses a Greek or Latin root from a French word that merely sounds similar, instead of its real documented meaning.', detectOn: ['a1-check', 'a2-piege', 'a2-check', 'a10-mission'], drill: 'd-grec', retest: 'd-grec' },
  { id: 'prefixe-position-confondu', description: 'Confuses a Latin position/movement prefix with another (trans- for sur-, or the reverse), missing its fixed spatial direction.', detectOn: ['a3-groupe', 'a3-piege', 'a3-check'], drill: 'd-prefixe-position', retest: 'd-prefixe-position' },
  { id: 'assimilation-ratee', description: 'Fails the in-/im-/il-/ir- assimilation rule, or confuses anti- (against) with ante- (before).', detectOn: ['a4-groupe', 'a4-piege', 'a4-check', 'a10-mission'], drill: 'd-assimilation', retest: 'd-assimilation' },
  { id: 'racine-verbale-confondue', description: 'Confuses two verbs sharing the same Latin root (ducere, portare) because of their family resemblance, missing what the different prefix actually changes.', detectOn: ['a5-groupe', 'a5-piege', 'a5-check'], drill: 'd-verbe-racine', retest: 'd-verbe-racine' },
  { id: 'suffixe-nom-invente', description: 'Invents a noun by analogy with a productive suffix (-age, -ment) without checking whether the resulting word already exists with a different meaning, or does not exist at all.', detectOn: ['a6-groupe', 'a6-piege', 'a6-check'], drill: 'd-suffixe-nom', retest: 'd-suffixe-nom' },
  { id: 'radical-irregulier-devine', description: "Guesses an adjective's stem from the infinitive (lisable, voyable, boisable) instead of knowing the real, often irregular stem.", detectOn: ['a7-groupe', 'a7-piege', 'a7-check'], drill: 'd-suffixe-adj', retest: 'd-suffixe-adj' },
  { id: 'doublet-confondu', description: 'Treats a doublet pair as simple synonyms, missing that one Latin ancestor gave two separate French descendants, sometimes with diverged meanings.', detectOn: ['a8-groupe', 'a8-check', 'a10-mission'], drill: 'd-doublet', retest: 'd-doublet' },
  { id: 'source-manquante', description: "Accepts or states a word's history based on how plausible it sounds (a letter resemblance, a folk etymology) instead of a named, real source.", detectOn: ['a9-groupe', 'a9-check', 'a10-mission'], drill: 'd-racine-voisine', retest: 'd-racine-voisine' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-racines-grecques', 'Les racines grecques du savoir', ['six racines', 'onze mots'], [
    teach('sheet-racines-grecques-teach', 'Une pierre, dix costumes',
      "Tele (loin), phone (le son), phot- (la lumière), graphein (écrire), bios (la vie), logos (l’étude), skopein (regarder), mikros (petit), makros (grand), pherein (porter) : chaque racine garde un sens stable, quel que soit le mot où elle apparaît. EN: each root keeps a stable meaning, whatever word it appears in."),
    table('sheet-racines-grecques-table', 'Six racines, onze mots', ['Racine', 'Sens', 'Mots construits'], [
      ['tele-', 'loin', 'téléphone, télégraphe, téléphérique'],
      ['phone', 'le son', 'téléphone, phonétique, téléphonie'],
      ['phot-, graphein', 'la lumière, écrire', 'photographe, télégraphe, graphologie, biographie'],
      ['bios, logos', 'la vie, l’étude', 'biologie, biographie, chronologie, graphologie'],
      ['skopein', 'regarder', 'microscope, macroscopique'],
      ['pherein', 'porter', 'téléphérique (pas phone)'],
    ]),
  ]),
  sheet('sheet-prefixes-latins', 'Les préfixes latins', ['position et mouvement', 'négation'], [
    teach('sheet-prefixes-latins-teach', 'Une direction, un costume selon la lettre',
      "Trans- (à travers), inter- (entre), sur-/super- (au-dessus), sous-/sub- (dessous) gardent leur direction partout. In- (négation) devient im- devant b/m/p, il- devant l, ir- devant r. Dis- (séparation) et anti- (contre, grec, à distinguer d’ante-, avant, latin) complètent la liste. EN: in- changes form before certain letters; anti- and ante- are two separate prefixes, often confused.",
    ),
    table('sheet-prefixes-latins-table', 'Dix préfixes', ['Préfixe', 'Sens', 'Exemple'], [
      ['trans-', 'à travers', 'transporter, transparent'],
      ['inter-', 'entre', 'international, intervenir, interrompre'],
      ['sur-/super-', 'au-dessus', 'survoler, surnaturel, superviser'],
      ['sous-/sub-', 'dessous', 'soumettre, souterrain'],
      ['in-/im-/il-/ir-', 'négation', 'incomplet, impossible, illisible, irrégulier'],
      ['dis-', 'séparation, négation', 'disparaître (jamais lié à disque, grec diskos)'],
      ['dé-', 'séparation, cessation', 'déconnecter, défaire'],
      ['anti-', 'contre (grec, pas ante-, avant)', 'antibiotique, antigel, anticorps'],
    ]),
  ]),
  sheet('sheet-familles-verbes', 'Une racine, une famille de verbes', ['ducere', 'portare'], [
    teach('sheet-familles-verbes-teach', 'Même racine, préfixe différent, sens différent',
      "Ducere (mener) et portare (porter) sont deux des racines verbales latines les plus productives du français. Chaque préfixe donne un verbe réel, jamais interchangeable avec son voisin de même racine. EN: ducere (to lead) and portare (to carry) are two of French's most productive Latin verb roots; each prefix gives a real, non-interchangeable verb.",
    ),
    table('sheet-familles-verbes-table', 'Dix verbes, deux racines', ['Racine', 'Verbes', 'Attention à ne pas confondre'], [
      ['ducere, mener', 'conduire, déduire, introduire, reproduire, séduire', 'déduire (conclure) contre réduire (diminuer)'],
      ['portare, porter', 'apporter, supporter, rapporter, comporter, reporter', 'supporter (endurer) contre apporter (porter vers)'],
    ]),
  ]),
  sheet('sheet-suffixes', 'Les suffixes', ['suffixes de nom', 'suffixes d’adjectif'], [
    teach('sheet-suffixes-teach', 'Un suffixe productif n’est jamais automatique',
      "-tion/-sion, -ment, -age, -ure, -ance/-ence fabriquent un nom depuis un verbe ; -able/-ible, -eux, -if, -al/-el fabriquent un adjectif. Dans les deux cas, le radical ou le suffixe exact doit être connu : un mot inventé par analogie peut déjà exister, avec un tout autre sens (fermage, ouvrage), ou ne pas exister du tout. EN: in both cases, the exact stem or suffix must be known: a word invented by analogy can already exist with a completely different meaning, or not exist at all."),
    table('sheet-suffixes-noms', 'Suffixes de nom', ['Suffixe', 'Origine latine', 'Exemple'], [
      ['-tion/-sion', '-tio', 'action, décision'],
      ['-ment', '-mentum', 'changement, jugement'],
      ['-age', '-aticum', 'nettoyage, lavage'],
      ['-ure', '-tura', 'fermeture, ouverture'],
      ['-ance/-ence', '-antia/-entia', 'naissance, patience (emprunt direct)'],
    ]),
    table('sheet-suffixes-adjectifs', 'Suffixes d’adjectif', ['Suffixe', 'Origine latine', 'Exemple'], [
      ['-able/-ible', '-abilis/-ibilis', 'mangeable, lisible, buvable, visible'],
      ['-eux', '-osus', 'joyeux, peureux'],
      ['-if/-ive', '-ivus', 'actif, créatif'],
      ['-al/-el', '-alis', 'national, culturel (jamais culturale, copié sur l’anglais)'],
    ]),
  ]),
  sheet('sheet-doublets', 'Le mot populaire et le mot savant', ['sept doublets'], [
    teach('sheet-doublets-teach', 'Un ancêtre latin, deux héritiers français',
      "Un doublet, c’est deux mots français nés d’un seul mot latin : un mot populaire, évolu naturellement par le son, et un mot savant, emprunté plus tard, resté proche du latin écrit. Les deux sens peuvent avoir divergé depuis. EN: a doublet is two French words born from one Latin word: a popular one, naturally evolved, and a learned one, borrowed later, closer to written Latin; the two meanings can have diverged since.",
    ),
    table('sheet-doublets-table', 'Sept doublets', ['Origine latine', 'Mot populaire', 'Mot savant'], [
      ['hospitale', 'hôtel', 'hôpital'],
      ['potionem', 'poison', 'potion'],
      ['captivus', 'chétif', 'captif'],
      ['legalis', 'loyal', 'légal'],
      ['directum', 'droit', 'direct'],
      ['fragilis', 'frêle', 'fragile'],
      ['auscultare', 'écouter', 'ausculter'],
    ]),
  ]),
  sheet('sheet-racines-voisines', 'Racines voisines et sources nommées', ['look-alike roots', 'folk etymology'], [
    teach('sheet-racines-voisines-teach', 'La ressemblance ne prouve jamais rien seule',
      "Disque (grec diskos) et dis- (latin, négation) partagent trois lettres et aucune parenté réelle. Choucroute et contredanse semblent construites sur des mots français courants, et ne le sont pas : leur vraie origine, selon le TLFi, est une reprise remodelée d’un mot étranger. Forcené, à l’inverse, vient réellement de fors et sen. Seule une source réelle et nommée tranche. EN: only a real, named source decides, never a resemblance, however plausible it looks."),
    table('sheet-racines-voisines-table', 'Quatre cas', ['Mot', 'Ressemblance', 'Vraie origine, selon le TLFi'], [
      ['disque', 'ressemble à dis- (négation)', 'grec diskos, un objet rond'],
      ['phobie', 'ressemble à phone (le son)', 'grec phobos, la crainte'],
      ['choucroute', 'ressemble à chou + croûte', 'alsacien sürkrut, remodelé'],
      ['forcené', 'semble venir d’une légende', 'vieux français fors + sen, réellement'],
    ]),
  ]),
  sheet('sheet-bilan-pierres', 'Le bilan de la leçon', ['le plan en trois étapes', 'toutes les pierres'], [
    teach('sheet-bilan-pierres-teach', 'Repérer, déduire, citer',
      'Devant un mot savant inconnu : repère sa racine ou son affixe, nomme sa langue d’origine, déduis le sens probable du mot entier. Devant une histoire de mot : cite toujours une source réelle, jamais une ressemblance, même plausible. EN: facing an unknown learned word: spot its root or affix, name its language of origin, deduce the whole word’s probable meaning; facing a word’s history: always cite a real source, never a resemblance, however plausible.'),
    table('sheet-bilan-pierres-table', 'Huit familles, un exemple chacune', ['Famille', 'Un exemple'], [
      ['racines grecques', 'chronologie, khronos + logos'],
      ['préfixes de position', 'transparent, trans- + parere'],
      ['préfixes de négation', 'irrégulier, in- devenu ir-'],
      ['une racine, des verbes', 'déduire, de- + ducere'],
      ['suffixes de nom', 'fermeture, fermer + -ure'],
      ['suffixes d’adjectif', 'lisible, lire (radical lis-) + -ible'],
      ['le doublet', 'légal et loyal, de legalis'],
      ['racines voisines', 'disque, grec diskos, pas dis-'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c2-05-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-c2-05-grec-cinq': 'The five Greek-root cards (act 2), ONE VOICE, one take, read plainly, no stress on the roots themselves.',
  'rec-c2-05-piege-grec': "The six trap cards (act 2): the audio step plays each card's CORRECT sentence, not the trap `promptSound`. Read the six plainly, even pace.",
  'rec-c2-05-prefixe-cinq': 'The five position-prefix cards (act 3), ONE VOICE, one take, read plainly.',
  'rec-c2-05-piege-prefixe': "The six trap cards (act 3): the audio step plays each card's CORRECT sentence, not the trap `promptSound`.",
  'rec-c2-05-negation-cinq': 'The five negation-prefix cards (act 4), ONE VOICE, one take, read plainly, with a very slightly heavier stress on the prefix itself so the assimilation is audible.',
  'rec-c2-05-piege-negation': "The six trap cards (act 4): the audio step plays each card's CORRECT sentence, not the trap `promptSound`.",
  'rec-c2-05-ducere-cinq': 'The five ducere-family cards (act 5), ONE VOICE, one take, read plainly, even pace across all five verbs.',
  'rec-c2-05-piege-verbes': "The six trap cards (act 5): the audio step plays each card's CORRECT sentence, not the trap `promptSound`.",
  'rec-c2-05-suffixe-nom-cinq': 'The five noun-suffix cards (act 6), ONE VOICE, one take, read plainly.',
  'rec-c2-05-piege-suffixe-nom': "The six trap cards (act 6): the audio step plays each card's CORRECT sentence, not the trap `promptSound`.",
  'rec-c2-05-suffixe-adj-cinq': 'The five adjective-suffix cards (act 7), ONE VOICE, one take, read plainly.',
  'rec-c2-05-piege-suffixe-adj': "The six trap cards (act 7): the audio step plays each card's CORRECT sentence, not the trap `promptSound`.",
  'rec-c2-05-doublet-savant-cinq': 'The five learned-twin cards (act 8), ONE VOICE, one take, read in a measured, slightly formal register, fitting the savant half of each doublet.',
  'rec-c2-05-deux-histoires': "Léo and Mme Girard's closing exchange (act 9 story), TWO VOICES: Mme Girard's lines measured and testing, Léo's lines careful, citing his source rather than guessing.",
  'rec-c2-05-voisines-trois': 'The three look-alike/folk-etymology cards (act 9), ONE VOICE, one take, read plainly, with no ironic or knowing tone on the corrected folk etymologies.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C2 · LEÇON 05',
  intro: "La leçon 18 du C1 t’a appris à repérer les anglicismes savants modernes, un mot dont le SENS actuel trompe. Cette leçon va plus loin, vers l’HISTOIRE d’un mot : deviner le sens probable d’un mot savant inconnu à partir de ses racines grecques ou latines, de ses préfixes et de ses suffixes, distinguer une vraie racine partagée d’une simple ressemblance de lettres, et expliquer, avec une source réelle, comment le français a parfois gardé deux mots différents issus d’un seul mot latin. Dix actes, de chronophage à un entretien d’admission où plus rien ne peut être deviné sans preuve.",
  skill: 'CE',
  grammarAssumed: ['c1.18'],
  grammarIntroduced: [
    'Deriving a word\'s probable meaning from Greek roots (tele, phone, phot-, graphein, bios, logos, skopein, mikros, makros, pherein) across eleven compound words',
    'Latin position/movement prefixes (trans-, inter-, sur-/super-, sous-/sub-), each keeping a fixed spatial direction across every word it appears in',
    'The in-/im-/il-/ir- assimilation rule, and anti- (against, Greek) correctly distinguished from the separate prefix ante- (before, Latin)',
    'One Latin verb root (ducere, portare) generating a family of verbs by prefix, each real and distinct, never interchangeable with its same-root neighbour',
    'French noun suffixes (-tion/-sion, -ment, -age, -ure, -ance/-ence) and adjective suffixes (-able/-ible, -eux, -if, -al/-el), including irregular stems and real words with an unrelated meaning (fermage, ouvrage) that a naive analogy would wrongly invent',
    'The doublet: one Latin word giving French two descendants, a popular one (natural sound evolution) and a learned one (a later, separate borrowing), sometimes with meanings that have since diverged (hôtel/hôpital, poison/potion, chétif/captif, loyal/légal, droit/direct, frêle/fragile, écouter/ausculter)',
    'Telling a real shared root from a mere letter resemblance (disque/dis-, phobie/phone), and naming and correcting a folk etymology (choucroute, contredanse) against a genuinely surprising but true word history (forcené), always by citing a real, named source rather than trusting plausibility',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "La leçon 18 du C1 t’a appris à repérer les anglicismes savants modernes, une erreur de sens actuelle. Cette leçon va plus loin, vers l’histoire d’un mot : deviner le sens probable d’un mot savant inconnu à partir de ses racines, de ses préfixes et de ses suffixes, distinguer une vraie racine partagée d’une simple ressemblance de lettres, et expliquer, avec une source réelle, comment le français a parfois gardé deux mots différents issus d’un seul mot latin. Dix actes, d’un mot qu’on ne peut pas chercher à un entretien où plus rien ne peut être deviné sans preuve.",
    minutes: 160,
    difficulty: 5,
    glyph: 'pierre',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: ETYMOLOGIE_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, MESSAGE_GIRARD, MESSAGE_GIRARD_EN, dicteeFor };
export const lessonWithoutTask = (): Lesson => LESSON;
