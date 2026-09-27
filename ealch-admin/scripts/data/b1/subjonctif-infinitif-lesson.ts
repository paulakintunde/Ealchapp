// b1.16.l1 « Subjonctif ou infinitif » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// IS in schema.ts as of 2026-09-25, so `sections` is a plain `LessonSection[]`
// and the validators run on `LESSON` itself. There is no `lessonWithoutTask()`
// here and the draft `_task-section.ts` type is not imported.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading), name (cardDeck, examples,
//   tapTable), build (groupDrill, gated), choose (a drill where the branch is
//   picked by WHO ACTS, not by a surface cue), trap (trapDrill stepped or
//   commonErrors), check (gated control pages before the checkpoint).
//
//    1  Compter les sujets           7   the gesture, and the two shapes
//    2  L'infinitif nu               8   vouloir, préférer, souhaiter, aimer, espérer
//    3  La petite préposition de     8   content de, peur de, important de, éviter de
//    4  Et la préposition à          7   réussir à, arriver à, hésiter à, the three routes
//    5  Il faut, dans les deux sens  7   nobody named against somebody named
//    6  Pour et avant                8   pour / pour que, avant de / avant que
//    7  Sans, afin, à condition      8   the other three pairs
//    8  Les quatre sans paire        7   bien que, quoique, jusqu'à ce que, pourvu que
//    9  Choisir vite                 7   the mixed sort, in two questions
//   10  Ce que l'anglais te souffle  7   the interference, named and corrected
//   11  Écrire les deux formes      11   the model, the TASK, the quiz, the end
//
//   TOTAL 85 missions, 11 acts. Corpus: 192 authored rows in eleven blocks
//   (.1400 to .1591) plus 43 reused seed rows, 235 item ids in all, released
//   act by act through `deckTranche`.
//   Chapter artwork: `subjonctif-infinitif-image-prompts.md`, eleven prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (which later lessons may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Compte les sujets : deux sujets demandent que, un seul se passe
//     presque toujours de que. »
//   EN: Count the subjects: two subjects call for que, and one subject almost
//   always does without it.
//
//   ONE METAPHOR, COMPTER. The lesson is a single gesture performed before
//   any form is chosen: look at who acts on the left, look at who acts on the
//   right, and count. Two people need two halves and « que » is the hinge
//   between them; one person gets one half and the second verb never receives
//   a subject of its own, so it stays in the infinitive. It is NOT a metaphor
//   of difficulty, of register or of length: the infinitive is not the easy
//   road and the subjunctive is not the formal one. The « presque » is
//   load-bearing and act 8 is what it holds open: bien que, quoique, jusqu'à
//   ce que and pourvu que keep « que » whatever the count, because they have
//   no infinitive form to fall back on.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the same-subject rule, end to end: the counting gesture; the
//           three routes into an infinitive (bare, de, à); the five
//           conjunction pairs; the four conjunctions with no infinitive form;
//           `il faut` both ways; and the anglophone interference that makes a
//           learner write « je veux toi partir » or « je veux que je parte ».
//   QUOTES  b1.14's reframe, on the act 1 deck and in act 9's hacks, because
//           this lesson never teaches a subjunctive form and has to say so.
//   LEAVES  to b1.14: how every form used here is built. Not one card
//           conjugates anything. To b1.15: WHICH expressions take the
//           subjunctive. Triggers are used freely as carriers and no card
//           presents an inventory of them; where a learner could read a list
//           into a card, the card says the list is elsewhere. Out of B1
//           entirely and named nowhere: the past and imperfect subjunctive.
//           Out of this lesson: the past infinitive, which one reused seed
//           row carries and which nothing names or drills.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED (Paul, 2026-09-22)
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction, coach line, drill prompt, break body and
//   milestone; characters use what the situation needs (the hire-desk clerk,
//   the insurance clerk and the caretaker say « vous »). Every learner
//   surface that explains something carries English: an `en` field, or a
//   final « EN: ». Answers are never behind « EN: ». Every `say` is French,
//   spoken fr-FR. Theme `opinions-et-avis`. A2 citations use the English
//   trail label resolved through `unitRef`; b1.* ones are French from the
//   plan.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. THE THEME CARRIES ZERO SEED ROWS, as b1.14 reported. All 43 reused
//      rows come from other themes. Same question as b1.14's open question 1,
//      repeated because three consecutive lessons now sit in a theme none of
//      them can draw a single row from.
//   2. THREE tapTables (acts 3, 6 and 9), one per act, and FOUR trapDrills
//      (acts 3, 5, 7, 9). Both are inside the working band and both are the
//      unresolved question b1.01 q2, b1.03 q4, b1.09 q3 and b1.14 q4 all
//      raise. Confirm the looser rule.
//   3. « ESPÉRER QUE » TAKES THE INDICATIVE. Espérer is in act 2's set of
//      five bare-infinitive verbs, and its two-subject shape (« j'espère que
//      tu viendras ») is NOT a subjunctive. The lesson therefore uses espérer
//      on the infinitive side only, and act 2's deck says in one line that
//      the que side of espérer belongs to the next lesson's question rather
//      than to this one. Is that silence right, or should act 2 name it
//      outright as the one member of its set whose que side is different?
//   4. « RÉUSSIR À CE QUE » (E(1461)) is the real two-subject form of réussir
//      à, and it is heavy. It is authored, shown ONCE on the act 4 deck as a
//      curiosity, and never drilled or quizzed. Keep it, or cut it and let
//      réussir à be a one-way verb in this lesson?
//   5. ACT 8 CONTRADICTS THE REFRAME on purpose, and the reframe's « presque »
//      is the only warning a learner gets before it. Is one word enough, or
//      should act 1 name the four exceptions in advance?
//   6. THE TASK IS WRITTEN (110 to 150 words, `skill: 'PE'`). The branch is
//      audible (par-TEER against PART) and the unit outcome is spoken too.
//      Should b1.16 carry a spoken task instead, or as well?
//   7. B1 CITATIONS are French from the plan (« la leçon 14 du B1 ») because
//      b1.* units are not in the seed. Switch to the English trail label once
//      they are?
//   8. Titles, labels, card heads and stat keys carry no « EN: » tail, as in
//      b1.01 to b1.15. Tail them too?
//   9. 'coach-fr-FR' is still a proposed voice id (b1.01's question 5).
//  10. THE PREVIEW GENERATOR IS NOT TOUCHED. `_preview-b1.ts` needs one line
//      added to its `SLUGS` list, and three sibling agents were authoring
//      into the same file during this wave, so the line is deliberately left
//      for the wave merge rather than written here.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet, SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  READING_COMPTER, READING_DE, READING_IL_FAUT, READING_SANS, READING_ANGLAIS, READING_MODELE,
  B114_REFRAME, B114_REFRAME_EN,
  FORM_UNIT, TRIGGERS_UNIT, POLI_UNIT, ALLER_UNIT, MODAUX_UNIT, PRENDRE_UNIT,
  FORM_REF, TRIGGERS_REF, POLI_REF, MODAUX_REF, PRENDRE_REF,
} from './subjonctif-infinitif-corpus.ts';
import { SUBJONCTIF_INFINITIF_TERMS } from './subjonctif-infinitif-terms.ts';
import { ALL_ROWS as B114_ROWS } from './subjonctif-formation-corpus.ts';
import { ALL_ROWS as B115_ROWS } from './subjonctif-declencheurs-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r]));
/** b1.14's and b1.15's rows, named by id where they own the headword (bien
 *  que, quoique, jusqu’à ce que, pourvu que): the flashcard hub deals one card
 *  per headword per theme, so this lesson never re-authors them. Kept out of
 *  ROW so FLASHABLE still treats them as imports. */
const SIBLING = new Map<string, SrcItem>([...B114_ROWS, ...B115_ROWS].map((r) => [r.id, r]));

/** An item's fr/en, from this corpus, b1.14's, b1.15's or the seed. Throws on
 *  a typo, so no section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SIBLING.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.16: no item ${id}`);
  return r;
}

/** A groupDrill item copied VERBATIM from its row (production-surface rule). */
const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
/** A free groupDrill item: a quotation of a passage, with no corpus row. */
const free = (fr: string, en: string, note?: string): GItem => ({ fr, en, ...(note ? { note } : {}) });
/** A listening line copied from its row. */
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
/** An examples row copied from its row. */
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
/** A control page: a label and a gating question, no words. */
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS
 *
 *  `layer: 'deep'`, `render: 'sheet'`, and only `teach` and `table` inside
 *  (ReferenceSheet.tsx draws nothing else, and a `table` at layer core is
 *  refused by validateDensity). Every sheet is reachable from at least one
 *  mission through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-compter', 'Compter les sujets', ['le geste', 'les deux formes', 'ce que le compte ne décide pas'], [
    teach('sheet-compter-teach', 'Un geste, deux questions',
      `${REFRAME} Regarde qui agit dans la première moitié de la phrase, puis qui agit dans la seconde. Si c'est la même personne, tu n'ouvres pas de deuxième moitié : le verbe reste à l'infinitif, précédé de rien, de « de » ou de « à » selon l'expression. Si la personne change, « que » ouvre la deuxième moitié, elle reçoit son propre sujet, et le verbe qui suit est au subjonctif. EN: ${REFRAME_EN} Same person, one half and an infinitive; new person, que opens a second half with its own subject and a subjunctive.`),
    table('sheet-compter-table', 'Le compte, phrase par phrase', ['Phrase', 'Qui agit à gauche', 'Qui agit à droite', 'Forme'], [
      ['Je veux partir.', 'je', 'je', 'infinitif'],
      ['Je veux que tu partes.', 'je', 'tu', 'que + subjonctif'],
      ['Elle a peur de rater son train.', 'elle', 'elle', 'de + infinitif'],
      ['Elle a peur que son fils rate son train.', 'elle', 'son fils', 'que + subjonctif'],
      ['Je pars tôt pour éviter les bouchons.', 'je', 'je', 'pour + infinitif'],
      ['Je pars tôt pour que tu aies la voiture.', 'je', 'tu', 'pour que + subjonctif'],
    ]),
    table('sheet-compter-limites', 'Ce que le compte ne décide pas', ['Cas', 'Ce que le compte dirait', 'Ce qui se passe', 'Où c’est traité'], [
      ['bien que je sois fatigué', 'un sujet, donc infinitif', 'que reste, il n’y a pas d’infinitif', 'acte 8'],
      ['quoique ce soit cher', 'un sujet, donc infinitif', 'que reste', 'acte 8'],
      ['jusqu’à ce que le médecin t’appelle', 'deux sujets, donc que', 'que reste aussi avec un seul sujet', 'acte 8'],
      ['pourvu que le colis arrive', 'deux sujets, donc que', 'que reste toujours', 'acte 8'],
      ['il faut partir', 'aucun sujet nommé', 'infinitif, l’ordre est pour tous', 'acte 5'],
      ['il faut que tu partes', 'un nom apparaît', 'que, et le nom prend la deuxième moitié', 'acte 5'],
    ]),
  ]),

  sheet('sheet-verbes', 'Rien, de ou à', ['les cinq verbes nus', 'les expressions en de', 'les verbes en à'], [
    teach('sheet-verbes-teach', 'Trois routes vers le même infinitif',
      "Quand la personne ne change pas, le verbe passe à l'infinitif, mais il n'y arrive pas toujours par le même chemin. Après vouloir, préférer, souhaiter, aimer et espérer, il n'y a rien du tout entre les deux verbes. Après être content, avoir peur, regretter, oublier, éviter et il est important, il y a « de ». Après réussir, arriver, hésiter, apprendre et continuer, il y a « à ». La route est choisie par le PREMIER verbe et jamais par le second, donc elle ne change pas quand tu changes d'infinitif. EN: the road into the infinitive is chosen by the first verb, never by the second."),
    table('sheet-verbes-table', 'Les trois routes', ['Route', 'Expressions', 'Exemple', 'Avec deux sujets'], [
      ['rien', 'vouloir, préférer, souhaiter, aimer', 'Je veux partir.', 'Je veux que tu partes.'],
      ['rien', 'espérer', 'J’espère finir ce soir.', 'J’espère que tu finiras (pas de subjonctif)'],
      ['de', 'être content, avoir peur, regretter', 'Je suis content de te voir.', 'Je suis content que tu viennes.'],
      ['de', 'oublier, éviter, il est important', 'N’oublie pas de fermer.', 'Il est important que tu fermes.'],
      ['à', 'réussir, arriver, hésiter', 'Je n’arrive pas à ouvrir.', 'Elle hésite à demander.'],
      ['à', 'apprendre, continuer', 'Il apprend à nager.', 'Il continue à courir.'],
    ]),
    table('sheet-verbes-pieges', 'Ce que la route fait perdre', ['Écrit', 'Juste', 'Ce qui manquait'], [
      ['Je veux de partir.', 'Je veux partir.', 'rien : vouloir ne prend pas de'],
      ['Je suis content te voir.', 'Je suis content de te voir.', 'la préposition de'],
      ['J’ai peur à conduire.', 'J’ai peur de conduire.', 'la bonne préposition'],
      ['Je réussis de finir.', 'Je réussis à finir.', 'la bonne préposition'],
      ['Je veux que partir.', 'Je veux partir.', 'un sujet après que, ou pas de que'],
      ['Il est important que fermer.', 'Il est important de fermer.', 'de, parce que personne n’est nommé'],
    ]),
  ]),

  sheet('sheet-paires', 'Les cinq paires', ['pour et pour que', 'avant de et avant que', 'les quatre sans paire'], [
    teach('sheet-paires-teach', 'La même idée, deux longueurs',
      "Cinq expressions existent en deux versions, et c'est le même mot qui porte les deux idées. La version courte prend un infinitif et sert quand la personne ne change pas ; la version longue prend « que » et sert quand elle change. Choisir la mauvaise version n'est pas une faute de style : « je pars tôt pour que tu aies la voiture » et « je pars tôt pour avoir la voiture » disent deux choses différentes, et la personne en face agit sur ce qu'elle a compris. EN: the short form is for one person, the long form for two, and picking the wrong one changes who does what."),
    table('sheet-paires-table', 'Les cinq lignes', ['Un seul sujet', 'Deux sujets', 'Exemple court', 'Exemple long'], [
      ['pour + infinitif', 'pour que + subjonctif', 'Je pars tôt pour éviter les bouchons.', 'Je pars tôt pour que tu aies la voiture.'],
      ['avant de + infinitif', 'avant que + subjonctif', 'Relis ta lettre avant de l’envoyer.', 'Relis ta lettre avant que le facteur passe.'],
      ['sans + infinitif', 'sans que + subjonctif', 'Il est sorti sans dire au revoir.', 'Il est sorti sans que personne l’entende.'],
      ['afin de + infinitif', 'afin que + subjonctif', 'Nous partons tôt afin d’arriver avant la nuit.', 'Nous partons tôt afin que les enfants dorment.'],
      ['à condition de + infinitif', 'à condition que + subjonctif', 'J’accepte, à condition de finir avant six heures.', 'J’accepte, à condition que tu viennes.'],
      ['(pas de version courte)', 'bien que, quoique, jusqu’à ce que, pourvu que', 'Bien qu’être fatigué : impossible.', 'Bien que je sois fatigué, je continue.'],
    ]),
    table('sheet-paires-quatre', 'Les quatre sans paire', ['Expression', 'Sens', 'Avec un seul sujet', 'La solution courte, si tu en veux une'], [
      ['bien que', 'although', 'que reste : bien que je sois fatigué', 'malgré + nom : malgré la fatigue'],
      ['quoique', 'although', 'que reste : quoique ce soit cher', 'malgré + nom : malgré le prix'],
      ['jusqu’à ce que', 'until', 'que reste : jusqu’à ce que je finisse', 'jusqu’à + nom : jusqu’à la fin'],
      ['pourvu que', 'as long as', 'que reste : pourvu que j’arrive à temps', 'si + verbe : si j’arrive à temps'],
      ['après que', 'after', 'hors de cette leçon', 'après + nom : après le repas'],
      ['malgré', 'in spite of', 'prend un nom, jamais un verbe', 'malgré la pluie, jamais malgré il pleut'],
    ]),
  ]),

  sheet('sheet-ilfaut', 'Il faut, dans les deux sens', ['sans nom', 'avec un nom', 'les autres impersonnels'], [
    teach('sheet-ilfaut-teach', 'Le il qui ne désigne personne',
      "Dans « il faut », le « il » ne remplace aucune personne : c'est le même « il » vide que dans « il pleut ». Tant que personne n'est nommé, la phrase reste courte et l'ordre vaut pour tout le monde : « il faut composter le billet » sur une affiche de gare. Dès qu'un nom ou un pronom apparaît, il lui faut une place, donc « que » ouvre une deuxième moitié : « il faut que tu compostes ton billet ». Il vaut mieux, il est important et il est possible se comportent exactement pareil, sauf que les deux derniers prennent « de » devant l'infinitif. EN: nobody named keeps the sentence short; naming somebody forces que, and il est important takes de on the short side."),
    table('sheet-ilfaut-table', 'Les quatre impersonnels', ['Expression', 'Personne nommée', 'Quelqu’un est nommé'], [
      ['il faut', 'Il faut partir.', 'Il faut que tu partes.'],
      ['il faudrait', 'Il faudrait ranger le garage.', 'Il faudrait que nous rangions le garage.'],
      ['il vaut mieux', 'Il vaut mieux réserver.', 'Il vaut mieux que tu réserves.'],
      ['il est important', 'Il est important de lire le contrat.', 'Il est important que tu lises le contrat.'],
      ['il est possible', 'Il est possible de payer en plusieurs fois.', 'Il est possible que le colis arrive demain.'],
      ['il ne faut pas', 'Il ne faut pas fumer ici.', 'Il ne faut pas que les enfants jouent là.'],
    ]),
  ]),

  sheet('sheet-anglais', 'L’anglais et le français', ['ce que l’anglais souffle', 'la correction', 'la liste de relecture'], [
    teach('sheet-anglais-teach', 'Le sens vient de l’anglais, la forme non',
      "L'anglais construit « I want you to go » avec une personne puis un infinitif, et cette suite n'existe pas en français. Le français doit ouvrir une deuxième moitié de phrase : « que », puis le sujet, puis un verbe conjugué. Trois erreurs sortent de là et ce sont les trois que tu écriras : « je veux toi partir » (la personne mise comme en anglais), « je veux que partir » (le que sans sujet) et « je veux que je parte » (le que en trop quand la personne ne change pas). EN: English gives you the meaning and not the shape, and three errors come out of that one difference."),
    table('sheet-anglais-table', 'Six phrases anglaises, six formes françaises', ['Anglais', 'Français', 'Pourquoi'], [
      ['I want to leave', 'Je veux partir.', 'une seule personne'],
      ['I want you to leave', 'Je veux que tu partes.', 'deux personnes'],
      ['before leaving', 'avant de partir', 'l’anglais ne dit pas qui part'],
      ['before you leave', 'avant que tu partes', 'la personne change'],
      ['I am glad to see you', 'Je suis content de te voir.', 'la préposition de est obligatoire'],
      ['I am glad you are here', 'Je suis content que tu sois là.', 'deux personnes'],
    ]),
    table('sheet-anglais-relecture', 'La liste de relecture', ['Cherche', 'Demande-toi', 'Corrige en'], [
      ['chaque que', 'y a-t-il un sujet nouveau derrière', 'enlève le que et mets l’infinitif'],
      ['chaque infinitif', 'la personne est-elle vraiment la même', 'ouvre avec que et conjugue'],
      ['content, peur, important', 'la petite préposition de est-elle là', 'ajoute de'],
      ['réussir, arriver, hésiter', 'la petite préposition à est-elle là', 'ajoute à'],
      ['bien que, quoique', 'as-tu essayé de raccourcir', 'garde que, ou passe à malgré + nom'],
      ['toi, moi, lui après un verbe', 'est-ce de l’anglais traduit mot à mot', 'remplace par que plus un sujet'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — COMPTER LES SUJETS
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The failure in life, before any rule: the learner says the shape
 *  that names the wrong person and is understood perfectly wrongly. */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Au comptoir de location',
  frSub: 'Une phrase pour deux personnes',
  setting: { place: 'Agence de location de voitures, quai de Paludate', city: 'Bordeaux', time: '18 h 20', ambience: 'un comptoir, une imprimante, la pluie sur la verrière' },
  beats: [
    {
      kind: 'narration',
      text: "Une agence de location, un vendredi soir, vingt minutes avant la fermeture. Tu prends la voiture pour trois jours. En sortant, tu as vu que les pneus avaient l'air bas.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'L’employé',
      fr: 'Vous partez ce soir, c’est bien ça.',
      en: 'You are leaving this evening, is that right.',
      respell: '[voo par-tay suh SWAR | seh byehⁿ SA]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'Oui. Je veux regarder les pneus avant de partir.',
      en: 'Yes. I want to look at the tyres before leaving.',
      respell: '[wee | zhuh veu ruh-gar-day lay PNEU a-vahⁿ duh par-TEER]',
      stage: "Tu voulais dire que c'était à lui de les regarder. Tu as dit que c'était à toi.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'L’employé',
      fr: 'Bien sûr. Le manomètre est au fond, à côté de la borne.',
      en: 'Of course. The pressure gauge is at the back, next to the charging point.',
      respell: '[byehⁿ SÜR | luh ma-no-metr eh oh FOHⁿ | a koh-tay duh la BORN]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Il te tend un manomètre et retourne à son écran. Tu voulais un contrôle par l'agence, avant la route. Tu vas le faire toi-même, sous la pluie, avec un appareil que tu ne connais pas.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'coach', speaker: 'Le coach',
      fr: 'Ta phrase était juste. Elle parlait simplement de toi, et pas de lui.',
      en: 'Your sentence was correct. It was simply about you and not about him.',
      respell: '[ta fraz ay-teh ZHÜST | ehl par-leh sehⁿ-pluh-mahⁿ duh TWA | ay pa duh LWEE]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase demande à l’employé de le faire ?',
      size: 'lg',
      options: [
        { fr: 'Je veux regarder les pneus.', respell: '[zhuh veu ruh-gar-day lay PNEU]', en: 'I want to look at the tyres.', outcome: 'breaks', audio: AUDIO },
        { fr: 'Je veux que vous regardiez les pneus.', respell: '[zhuh veu kuh voo ruh-gar-DYAY lay PNEU]', en: 'I want you to look at the tyres.', outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Il pose son stylo et sort avec toi. Deux minutes, et le pneu avant droit est regonflé. Ta phrase nommait quelqu'un d'autre, et il a compris que c'était son travail.",
        breaks: "Il te tend le manomètre une deuxième fois. Ta phrase ne parle que de toi, donc il n'a aucune raison de se lever, et il a raison.",
      },
    },
    {
      kind: 'break',
      heading: 'Une personne, ou deux',
      body: "« Je veux regarder » dit que je regarde. « Je veux que vous regardiez » dit que vous regardez. « que » fait entrer une deuxième personne. EN: que is what lets a second person into the sentence.",
      wrong: {
        fr: 'Je veux regarder les pneus.',
        ipa: '/ʒə vø ʁə.ɡaʁ.de le pnø/',
        respell: '[zhuh veu ruh-gar-day lay PNEU]',
        en: 'I want to look at the tyres.',
      },
      right: {
        fr: 'Je veux que vous regardiez les pneus.',
        ipa: '/ʒə vø kə vu ʁə.ɡaʁ.dje le pnø/',
        respell: '[zhuh veu kuh voo ruh-gar-DYAY lay PNEU]',
        en: 'I want you to look at the tyres.',
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Tu pars avec quatre pneus corrects et une question : comment savoir, avant d'ouvrir la bouche, laquelle des deux formes ta phrase demande. C'est le sujet de cette leçon, et ça se compte.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['compter', 'deuxsujets'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Savoir en une seconde s’il faut que ou un infinitif', s: 'Actes 1 et 2 : compter les sujets' },
    { t: 'Ne plus perdre la petite préposition', s: 'Actes 3 et 4 : de, à, ou rien du tout' },
    { t: 'Tenir les paires pour, avant, sans, afin, à condition', s: 'Actes 5 à 7, avec il faut dans les deux sens' },
    { t: 'Écrire un message sans traduire l’anglais mot à mot', s: 'Actes 8 à 11 : les exceptions, le tri, la mission' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: the two shapes doing their job in a real conversation,
 *  before any rule is given. The learner's only task is to count people. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Deux lignes sur une feuille',
  frSub: 'Lis, et compte les personnes',
  text: READING_COMPTER,
  glossary: [
    { word: 'les bouchons', en: 'the traffic jams', note: "Les files de voitures arrêtées sur la route. EN: the queues of stopped cars." },
    { word: 'lève les yeux', en: 'looks up', note: "Elle arrête de regarder la feuille et regarde Yann." },
    { word: 'sans y penser', en: 'without thinking about it', note: "Elle ne l'a pas décidé : c'est venu tout seul. EN: it came out on its own." },
  ],
  questions: [
    { q: 'Dans la première phrase de Yann, combien de personnes agissent ?', a: "Une seule. C'est lui qui veut et c'est lui qui part, donc pas de « que »." },
    { q: 'Et dans la phrase d’Awa ?', a: "Deux. C'est elle qui veut et c'est tout le monde qui part, donc « que nous partions »." },
    { q: 'Pourquoi Yann dit-il ensuite « tu veux que je conduise » ?', a: "Parce que c'est Awa qui veut et lui qui conduit. Deux personnes, donc « que »." },
    { q: 'Pourquoi Awa revient-elle à l’infinitif à la fin ?', a: "Parce que c'est elle qui veut et elle qui dort. La personne est redevenue la même." },
  ],
  audio: REC('rec-b1-16-cuisine'), say: REFRAME, terms: ['compter', 'memesujet'],
};

/** NAME. The gesture, one idea per card, plus the two things this lesson
 *  refuses to decide. */
const A1_DEUX: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-deux',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-compter',
  title: 'Compter, puis choisir',
  frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Regarde toujours qui agit des deux côtés.',
  audio: REC('rec-b1-16-compter'), say: REFRAME, terms: ['compter', 'memesujet', 'deuxsujets'],
  cards: [
    {
      head: 'Un seul sujet', label: 'l’infinitif',
      fr: 'Je veux partir avant six heures.',
      sub: '[zhuh veu par-TEER a-vahⁿ see-ZUHR]',
      body: "C'est moi qui veux et c'est moi qui pars. Il n'y a personne de nouveau, donc rien à ouvrir : le deuxième verbe reste tel qu'il est dans le dictionnaire. EN: nobody new, so nothing opens and the second verb stays as it is.",
    },
    {
      head: 'Deux sujets', label: 'que et le subjonctif',
      fr: 'Je veux que tu partes avant six heures.',
      sub: '[zhuh veu kuh tü PART a-vahⁿ see-ZUHR]',
      body: "C'est moi qui veux et c'est toi qui pars. La deuxième personne a besoin d'une place à elle, et « que » la lui donne. EN: the second person needs a place of their own, and que gives it to them.",
    },
    {
      head: 'La forme n’est pas le problème ici', label: Cap(FORM_REF),
      fr: 'que tu partes · que vous regardiez',
      sub: '[kuh tü PART] · [kuh voo ruh-gar-DYAY]',
      body: `« ${B114_REFRAME} » Cette leçon décide seulement s'il en faut une. EN: you can already build these forms; this lesson only decides whether one is needed.`,
    },
    {
      head: 'Ce que cette leçon ne décide pas', label: Cap(TRIGGERS_REF),
      fr: 'Quelles expressions prennent le subjonctif',
      sub: '[kehl eks-preh-syohⁿ prenn luh süb-zhohⁿk-TEEF]',
      body: `L'inventaire appartient à ${TRIGGERS_REF}. Ici, tu décides entre deux formes pour une expression que tu connais déjà. EN: the inventory belongs to the previous lesson; here you choose between two shapes.`,
    },
  ],
};

/** BUILD. Sort the sentences by how many people act in them. */
const A1_COMPTER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-compter',
  layer: 'core',
  size: 'lg',
  title: 'Compte les personnes',
  frSub: 'Une, ou deux',
  groups: [
    grp('Une seule personne agit', [
      it(E(1400), 'je veux, je pars'),
      it(E(1402), 'nous préférons, nous mangeons'),
      it(E(1404), 'elle souhaite, elle change'),
      it('fr.a2.verbes.162', 'j’espère, j’arrive'),
    ], chk('Dans ces quatre phrases, combien de personnes agissent ?',
      ['une seule à chaque fois', 'ça dépend de la phrase', 'deux à chaque fois'], 0,
      "La même personne veut et fait. EN: the same person wants and does.")),
    grp('Deux personnes différentes', [
      it(E(1401), 'je veux, tu pars'),
      it(E(1403), 'nous préférons, les enfants mangent'),
      it(E(1411), 'elle veut, son fils apprend'),
      it('fr.b1.sports-et-loisirs.056', 'le coach veut, nous sommes prêts'),
    ], chk('Qu’est-ce que ces quatre phrases ont en plus que les précédentes ?',
      ['un verbe de plus', 'le mot que et un deuxième sujet', 'un temps différent'], 1,
      "« que » fait entrer la deuxième personne. EN: que lets the second person in.")),
    ctl('Le geste', 'Tu hésites devant une phrase. Que regardes-tu en premier ?',
      ['la fin du verbe', 'le temps de la phrase', 'qui agit des deux côtés'], 2,
      "Le compte vient avant la forme, jamais après. EN: the count comes before the form, never after."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['compter', 'memesujet', 'deuxsujets'],
};

const A1_CAS: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-cas',
  layer: 'core',
  title: 'Quand le compte change tout',
  cases: [
    { situation: 'Au garage', fr: 'Je veux que vous regardiez les pneus avant la route.', en: 'I want you to look at the tyres before the trip.' },
    { situation: 'Au travail, par message', fr: 'Je veux relire le contrat avant la réunion.', en: 'I want to read the contract again before the meeting.' },
    { situation: 'À la crèche', fr: 'Je préfère que ma fille mange à midi et demi.', en: 'I would rather my daughter ate at half past twelve.' },
    { situation: 'Chez le médecin', fr: 'Je préfère revenir demain matin.', en: 'I would rather come back tomorrow morning.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['compter'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le compte', 'Deux personnes différentes agissent dans ta phrase. Que fais-tu ?',
    ['tu ouvres avec que', 'tu changes de verbe', 'tu gardes l’infinitif'], 0,
    "Chaque personne a besoin de sa moitié de phrase. EN: each person needs a half of the sentence."),
  ctl('Une seule personne', '« Je veux ... ce soir. » C’est toi qui pars. Tu écris...',
    ['que je parte', 'partir', 'que partir'], 1,
    "Personne de nouveau, donc rien à ouvrir. EN: nobody new, so nothing to open."),
  ctl('Ce qui vient après', 'Quelles expressions prennent le subjonctif ?',
    ['seulement vouloir', 'toutes celles avec que', 'c’est la leçon précédente'], 2,
    `L'inventaire appartient à ${TRIGGERS_REF}. Ici, tu comptes. EN: the inventory is the previous lesson's.`),
], ['compter', 'deuxsujets']);

const ACT1: ActDef = {
  act: {
    id: 'act1',
    title: 'Compter les sujets',
    opener: {
      line: "Tu dis une phrase juste et la mauvaise personne se lève : ici tu apprends à compter avant de parler. EN: You say a correct sentence and the wrong person gets up: here you learn to count before you speak.",
      imageRef: 'lessons/subjonctif-infinitif/act01.jpg',
    },
    sections: [],
    milestone: "Tu regardes qui agit des deux côtés d’une phrase et tu sais laquelle des deux formes elle demande. EN: You look at who acts on each side of a sentence and you know which of the two shapes it needs.",
    estScreens: 32,
    restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_DEUX, A1_COMPTER, A1_CAS, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — L’INFINITIF NU
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The trap arrives from the learner's own mouth, in a conversation
 *  where the English sentence is right there underneath. */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Deux phrases qui se ressemblent',
  frSub: 'Dans le couloir, avant la réunion',
  setting: "Onze heures moins dix, dans le couloir d'une petite agence à Nantes. Sofia prépare la réunion avec Karim, qui apprend le français depuis deux ans.",
  bubbles: [
    { from: 'narrator', fr: 'Karim relit ses notes à voix basse.', en: 'Karim reads his notes again under his breath.' },
    { from: 'user', fr: 'Je veux toi présenter le budget. Non. Je veux que toi présenter le budget.', en: 'I want you present the budget. No. I want that you present the budget.', warn: 'Les deux phrases sont impossibles' },
    { from: 'coach', fr: 'Arrête-toi là. En anglais tu dis I want you to present. Une personne, puis un infinitif.', en: 'Stop there. In English you say I want you to present. A person, then an infinitive.' },
    { from: 'user', fr: 'Oui, et en français je bloque exactement à cet endroit.', en: 'Yes, and in French I get stuck at exactly that point.' },
    { from: 'coach', fr: 'Le français ne met pas la personne là. Il ouvre une deuxième phrase avec que, et il lui donne un sujet.', en: 'French does not put the person there. It opens a second clause with que and gives it a subject.', warn: 'que, puis un sujet, puis un verbe conjugué' },
    { from: 'user', fr: 'Je veux que tu présentes le budget.', en: 'I want you to present the budget.' },
    { from: 'coach', fr: 'Voilà. Et si c’est toi qui présentes, tu enlèves tout ça et tu dis je veux présenter le budget.', en: 'There you go. And if you are the one presenting, you take all that away and say je veux présenter le budget.' },
    { from: 'narrator', fr: 'Karim écrit les deux lignes en haut de sa feuille et entoure le que.', en: 'Karim writes the two lines at the top of his sheet and circles the que.' },
  ],
  closing: { fr: 'Rien entre les deux verbes, ou que et un sujet. Il n’y a pas de troisième possibilité.', en: 'Nothing between the two verbs, or que and a subject. There is no third option.' },
  audio: REC('rec-b1-16-couloir'), say: REFRAME, terms: ['nu', 'anglais'],
};

/** NAME. The five verbs, and what sits between them and the infinitive. */
const A2_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-verbes',
  title: 'Cinq verbes, et rien au milieu',
  frSub: 'La route la plus courte',
  hint: 'Quatre cartes. Regarde ce qu’il y a entre les deux verbes.',
  audio: AUDIO, say: REFRAME, terms: ['nu', 'memesujet'],
  cards: [
    {
      head: 'Les cinq', label: 'l’infinitif tout seul',
      fr: 'vouloir · préférer · souhaiter · aimer · espérer',
      sub: '[voo-LWAR] · [pray-fay-RAY] · [sweh-TAY] · [eh-MAY] · [ehs-pay-RAY]',
      body: "Derrière ces cinq verbes, l'infinitif arrive sans rien devant lui. Pas de « de », pas de « à », rien du tout. EN: after these five the infinitive arrives with nothing in front of it.",
    },
    {
      head: 'Ce qu’il y a au milieu', label: 'rien',
      fr: 'Je veux partir. · Elle préfère rester.',
      sub: '[zhuh veu par-TEER] · [ehl pray-fehr rehs-TAY]',
      body: "Ajouter un petit mot entre les deux verbes casse la phrase. « Je veux de partir » n'existe pas, et « je veux à partir » non plus. EN: adding a little word between the two verbs breaks the sentence.",
    },
    {
      head: 'Quand la personne change', label: 'que et le subjonctif',
      fr: 'Je veux que tu partes. · Elle préfère que nous restions.',
      sub: '[zhuh veu kuh tü PART] · [ehl pray-fehr kuh noo rehs-TYOHⁿ]',
      body: "La même famille de verbes prend « que » dès qu'une deuxième personne arrive. Le verbe de la deuxième moitié est alors conjugué. EN: the same verbs take que as soon as a second person turns up.",
    },
    {
      head: 'Espérer, à part', label: 'un cas de la leçon précédente',
      fr: 'J’espère finir ce soir. · J’espère que tu finiras ce soir.',
      sub: '[zhehs-pehr fee-neer suh SWAR] · [zhehs-pehr kuh tü fee-nee-ra suh SWAR]',
      body: `Espérer suit la même règle de compte, mais sa deuxième moitié n'est pas un subjonctif. Pourquoi, c'est la question de ${TRIGGERS_REF}. EN: espérer follows the same count; what its que side takes belongs to the previous lesson.`,
    },
  ],
};

/** BUILD. The two halves of the same family, sorted. */
const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'La même famille, deux formes',
  frSub: 'Rien, ou que',
  groups: [
    grp('Rien entre les deux verbes', [
      it(E(1420), 'je voudrais, je réserve'),
      it(E(1422), 'il préfère, il prend'),
      it(E(1424), 'nous souhaitons, nous restons'),
      it(E(1428), 'j’espère, je finis'),
    ], chk('Qu’est-ce qui sépare les deux verbes dans ces quatre phrases ?',
      ['rien', 'à', 'de'], 0,
      "La route la plus courte : les deux verbes se touchent. EN: the shortest road, with the two verbs touching.")),
    grp('que, puis un sujet', [
      it(E(1421), 'je voudrais, tu réserves'),
      it(E(1423), 'il préfère, nous prenons'),
      it(E(1425), 'nous souhaitons, le chauffage est réparé'),
      it('fr.b1.dictee.032', 'le professeur souhaite, les élèves posent'),
    ], chk('Après que, qu’est-ce qui arrive toujours en premier ?',
      ['le verbe', 'un sujet', 'une préposition'], 1,
      "Un sujet, puis son verbe conjugué. Jamais un infinitif. EN: a subject, then its finished verb, never an infinitive.")),
    ctl('Le milieu', '« Je veux ... partir. » Que mets-tu à la place des points ?',
      ['de', 'à', 'rien'], 2,
      "Vouloir ne prend aucune préposition. EN: vouloir takes no preposition at all."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['nu', 'deuxsujets'],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  title: 'Les cinq verbes au travail',
  examples: [
    ex(E(1426), 'aimer, une seule personne'),
    ex(E(1427), 'aimer, deux personnes'),
    ex(E(1435), 'vouloir, une seule personne'),
    ex(E(1436), 'vouloir, deux personnes'),
    ex(E(1438), 'espérer, une seule personne'),
    ex('fr.b1.metiers.052', 'souhaiter, deux personnes, dans un contexte de travail'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['nu', 'memesujet'],
};

/** CHOOSE. The branch is decided by who acts, not by the verb in front. */
const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le même début, deux suites',
  frSub: 'C’est la personne qui décide',
  groups: [
    grp('Le patron, deux phrases', [
      it(E(1429), 'le patron veut, le patron voit'),
      it(E(1430), 'le patron veut, nous venons'),
      free('Le patron veut partir tôt.', 'The boss wants to leave early.', 'lui qui veut, lui qui part'),
      free('Le patron veut que nous partions tôt.', 'The boss wants us to leave early.', 'lui qui veut, nous qui partons'),
    ], chk('Qu’est-ce qui change entre les deux phrases du patron ?',
      ['la personne qui fait la deuxième action', 'le temps', 'le verbe vouloir'], 0,
      "Vouloir ne bouge pas. C'est la deuxième personne qui apparaît. EN: vouloir does not move; the second person appears.")),
    grp('Ma sœur et la conduite', [
      it(E(1435), 'elle veut, elle apprend'),
      it(E(1436), 'elle veut, je lui apprends'),
      it(E(1434), 'je veux, tu dis'),
      it('fr.b1.famille.081', 'ma mère souhaite, je m’occupe'),
    ], chk('Dans « ma sœur veut que je lui apprenne », qui apprend à conduire ?',
      ['les deux', 'ma sœur', 'moi'], 1,
      "Je fais la leçon, et c'est elle qui apprend. Le sujet après que est celui qui enseigne. EN: the subject after que is the one teaching.")),
    ctl('Le test', 'Tu ne sais pas s’il faut que. Quelle question te poses-tu ?',
      ['quelle préposition mettre', 'quel temps employer', 'qui fait la deuxième action'], 2,
      "Le compte, toujours avant la forme. EN: the count, always before the form."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['compter', 'nu'],
};

/** The ear mission: the two shapes are audible, and this is where the
 *  learner finds that out. */
const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Une personne, ou deux',
  frSub: 'Huit phrases, sans le texte',
  lines: [
    ln(E(1420)), ln(E(1421)), ln(E(1424)), ln(E(1423)),
    ln(E(1428)), ln(E(1427)), ln(E(1435)), ln(E(1430)),
  ],
  questions: [
    { q: 'Première phrase : combien de personnes agissent ?', opts: ['une', 'deux'], correct: 0,
      why: "« je voudrais réserver » : c'est moi qui réserve. EN: I am the one booking." },
    { q: 'Deuxième phrase : as-tu entendu le mot que ?', opts: ['non', 'oui'], correct: 1,
      why: "« je voudrais que tu réserves » : la personne change. EN: the person changes." },
    { q: 'Quatrième phrase : qui prend le train ?', opts: ['nous', 'personne', 'lui'], correct: 0,
      why: "« qu'il préfère que nous prenions » : nous. EN: us." },
    { q: 'Cinquième phrase : la forme après espère est...', opts: ['un infinitif', 'un subjonctif'], correct: 0,
      why: "« j'espère finir » : une seule personne, donc l'infinitif. EN: one person, so the infinitive." },
    { q: 'Septième phrase : qui apprend à conduire ?', opts: ['moi', 'ma sœur'], correct: 1,
      why: "« ma sœur veut apprendre » : elle veut et elle apprend. EN: she wants and she learns." },
    { q: 'Sur les huit, combien ouvrent avec que ?', opts: ['deux', 'quatre', 'six'], correct: 1,
      why: "Une phrase sur deux, en alternance. EN: every other one, in alternation." },
  ],
  audio: REC('rec-b1-16-nu-ecoute'), say: REFRAME, terms: ['compter', 'nu'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de traduire I want you to go',
  errors: [
    {
      wrong: 'Je veux toi partir.',
      right: 'Je veux que tu partes.',
      why: "Normal : l'anglais met la personne juste là, entre les deux verbes. Le français lui ouvre une moitié de phrase. EN: English puts the person between the two verbs; French opens a clause for them.",
    },
    {
      wrong: 'Je veux que partir.',
      right: 'Je veux que tu partes.',
      why: "Tu as trouvé le que, et c'était le plus dur. Il lui manque seulement un sujet : après que, personne ne reste sous-entendu. EN: after que, nobody stays implied.",
    },
    {
      wrong: 'Je veux que je parte tôt.',
      right: 'Je veux partir tôt.',
      why: "Ce n'est pas faux au sens strict, et personne ne le dit. Quand la personne ne change pas, le que et le sujet répété n'apportent rien. EN: when the person does not change, the que adds nothing.",
    },
    {
      wrong: 'Je veux de partir tôt.',
      right: 'Je veux partir tôt.',
      why: "Le « de » vient d'ailleurs : il est juste après content, peur ou important. Vouloir n'en prend pas. EN: the de belongs after content, peur or important, not after vouloir.",
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['anglais', 'nu'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le milieu', 'Entre veux et partir, tu écris...',
    ['à', 'de', 'rien'], 2,
    "Vouloir, préférer, souhaiter, aimer et espérer ne prennent rien. EN: these five take nothing at all."),
  ctl('Après que', 'Juste après que, tu écris...',
    ['un sujet', 'un infinitif', 'une préposition'], 0,
    "Un sujet, puis son verbe conjugué. EN: a subject, then its finished verb."),
  ctl('La personne', 'C’est toi qui veux et toi qui pars. Tu écris...',
    ['je veux que je parte', 'je veux partir', 'je veux de partir'], 1,
    "Une seule personne, donc rien à ouvrir. EN: one person, so nothing to open."),
], ['nu', 'anglais']);

const ACT2: ActDef = {
  act: {
    id: 'act2',
    title: 'L’infinitif nu',
    opener: {
      line: "Cinq verbes te laissent coller l’infinitif juste derrière eux : ici tu apprends lesquels et ce que ça coûte. EN: Five verbs let you stick the infinitive straight on behind them: here you learn which, and what it costs.",
      imageRef: 'lessons/subjonctif-infinitif/act02.jpg',
    },
    sections: [],
    milestone: "Tu dis « je veux partir » et « je veux que tu partes » sans hésiter, et tu ne mets plus rien entre les deux verbes. EN: You can say je veux partir and je veux que tu partes without hesitating, and you put nothing between the two verbs.",
    estScreens: 38,
    restPoints: ['a2-exemples'],
  },
  sections: [A2_HISTOIRE, A2_REGLE, A2_CONSTRUIRE, A2_EXEMPLES, A2_CHOISIR, A2_ECOUTE, A2_ERREURS, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LA PETITE PRÉPOSITION DE
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Au comptoir des assurances',
  frSub: 'Les mêmes idées, deux fois',
  text: READING_DE,
  glossary: [
    { word: 'les lignes en petit', en: 'the small print', note: "Le texte écrit très petit en bas d'un contrat. EN: the text printed very small." },
    { word: 'la garantie', en: 'the cover', note: "Ce que l'assurance accepte de payer, et à partir de quand." },
    { word: 'se penche', en: 'leans over', note: "Il avance la tête pour lire la même ligne qu'elle. EN: he leans in to read her line." },
  ],
  questions: [
    { q: 'Que dit la cliente avec « de » ?', a: "« Je suis contente de trouver quelqu'un » et « j'ai peur de me tromper ». Dans les deux, c'est elle qui trouve et elle qui se trompe." },
    { q: 'Que dit l’employé avec « que » ?', a: "« Je suis content que vous les lisiez » et « vous avez peur que la garantie commence trop tard ». La personne change à chaque fois." },
    { q: 'Le choix dépend-il du sentiment exprimé ?', a: "Non. Content et peur apparaissent des deux côtés. Ce qui change, c'est seulement la personne." },
    { q: 'Quel petit mot revient du côté court ?', a: "« de ». Il est obligatoire devant l'infinitif après content, peur, regretter et important." },
  ],
  audio: REC('rec-b1-16-assurances'), say: REFRAME, terms: ['petiteLettre', 'compter'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-verbes',
  title: 'La petite lettre qui manque toujours',
  frSub: 'de, devant l’infinitif',
  hint: 'Quatre cartes. La petite lettre n’est pas décorative.',
  audio: REC('rec-b1-16-de'), say: REFRAME, terms: ['petiteLettre', 'memesujet'],
  cards: [
    {
      head: 'Les expressions en de', label: 'de plus l’infinitif',
      fr: 'être content de · avoir peur de · regretter de',
      sub: '[ehtr kohⁿ-tahⁿ DUH] · [a-vwar puhr DUH] · [ruh-gray-tay DUH]',
      body: "Quand la personne ne change pas, ces expressions gardent « de » devant l'infinitif. Sans lui, la phrase ne tient pas debout. EN: these keep de in front of the infinitive, and the sentence falls over without it.",
    },
    {
      head: 'La même idée, deux personnes', label: 'que et le subjonctif',
      fr: 'Je suis content de te voir. · Je suis content que tu viennes.',
      sub: '[zhuh swee kohⁿ-tahⁿ duh tuh VWAR] · [zhuh swee kohⁿ-tahⁿ kuh tü VYENN]',
      body: "Quand la personne change, « de » disparaît et « que » prend sa place. Les deux ne cohabitent jamais. EN: when the person changes, de goes and que takes its place; the two never sit together.",
    },
    {
      head: 'Les impersonnelles aussi', label: 'il est important de',
      fr: 'Il est important de lire le contrat en entier.',
      sub: '[ee-leh-tehⁿ-por-tahⁿ duh leer luh kohⁿ-tra ahⁿ-nahⁿ-TYAY]',
      body: "Quand personne n'est nommé, « il est important » prend « de ». Dès qu'un nom apparaît, il prend « que ». EN: with nobody named it takes de; as soon as somebody is named it takes que.",
    },
    {
      head: 'Ce que de ne dit pas', label: 'le sentiment',
      fr: 'content de partir · content que tu partes',
      sub: '[kohⁿ-tahⁿ duh par-TEER] · [kohⁿ-tahⁿ kuh tü PART]',
      body: "La joie, la peur et le regret sont des deux côtés. Le petit mot ne dit rien du sentiment : il dit seulement si la personne a changé. EN: the little word says nothing about the feeling, only whether the person changed.",
    },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'de, ou que',
  frSub: 'Quatre et quatre',
  groups: [
    grp('La même personne, donc de', [
      it(E(1440), 'je suis content, je travaille'),
      it(E(1442), 'elle a peur, elle rate'),
      it(E(1444), 'je regrette, je pars'),
      it(E(1448), 'personne n’est nommé'),
    ], chk('Qu’est-ce qui vient juste avant l’infinitif dans ces quatre phrases ?',
      ['à', 'que', 'de'], 2,
      "« de » est obligatoire, et c'est lui qu'on oublie. EN: de is compulsory and it is the one that gets dropped.")),
    grp('La personne change, donc que', [
      it(E(1441), 'je suis content, tu travailles'),
      it(E(1443), 'elle a peur, son fils rate'),
      it(E(1445), 'je regrette, tu pars'),
      it('fr.b1.dictee.040', 'il est important, les parents assistent'),
    ], chk('Où est passé le « de » dans ces quatre phrases ?',
      ['il a disparu avec l’infinitif', 'il est après le verbe', 'il est resté, caché'], 0,
      "Plus d'infinitif, plus de « de ». EN: no infinitive left, so no de.")),
    ctl('Le duo interdit', 'Peux-tu écrire « content de que tu viennes » ?',
      ['non, jamais les deux', 'oui, c’est plus clair'], 0,
      "« de » et « que » ne cohabitent pas. EN: de and que never sit together."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['petiteLettre', 'deuxsujets'],
};

const A3_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-table',
  layer: 'core',
  sheetId: 'sheet-verbes',
  title: 'Six expressions qui prennent de',
  cols: ['Expression', 'Un seul sujet', 'Deux sujets'],
  rows: [
    {
      cells: ['être content', 'content de partir', 'content que tu partes'],
      say: 'Je suis content de travailler avec vous.',
      detail: { title: 'être content de', body: "La joie est la même des deux côtés : seule la personne change. EN: the feeling is the same on both sides.", say: 'Je suis content que tu travailles avec nous.' },
    },
    {
      cells: ['avoir peur', 'peur de rater', 'peur que tu rates'],
      say: 'Elle a peur de rater son train.',
      detail: { title: 'avoir peur de', body: "Avec « que », la peur porte sur quelqu'un d'autre. EN: with que, the fear is about somebody else.", say: 'Elle a peur que son fils rate son train.' },
    },
    {
      cells: ['regretter', 'regretter de partir', 'regretter que tu partes'],
      say: 'Je regrette de partir si tôt.',
      detail: { title: 'regretter de', body: "Le regret d'un départ à soi, ou du départ d'un autre. EN: regretting your own leaving, or somebody else's.", say: 'Je regrette que tu partes si tôt.' },
    },
    {
      cells: ['éviter', 'éviter de rouler', 'éviter que les enfants rentrent'],
      say: 'Nous évitons de rouler la nuit sur cette route.',
      detail: { title: 'éviter de', body: "Éviter de faire, ou éviter que quelqu'un fasse. EN: avoiding doing, or keeping somebody from doing.", say: 'Nous évitons que les enfants rentrent trop tard.' },
    },
    {
      cells: ['oublier', 'oublier de fermer', 'oublier que la fenêtre est ouverte'],
      say: 'N’oublie pas de fermer la fenêtre du salon.',
      detail: { title: 'oublier de', body: "Attention : « oublier que » raconte un fait et ne prend pas de subjonctif. EN: oublier que reports a fact and takes no subjunctive.", say: 'J’ai oublié que la fenêtre était ouverte.' },
    },
    {
      cells: ['il est important', 'important de lire', 'important que tu lises'],
      say: 'Il est important de lire le contrat en entier.',
      detail: { title: 'il est important de', body: "Personne n'est nommé, donc « de ». Un nom apparaît, donc « que ». EN: nobody named, de; somebody named, que.", say: 'Il est important que tu lises le contrat en entier.' },
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['petiteLettre'],
};

const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Choisis la route',
  frSub: 'La personne décide, pas le sentiment',
  groups: [
    grp('Les phrases du contrat', [
      it(E(1449), 'il est important, tu lis'),
      it(E(1450), 'personne n’est nommé'),
      it(E(1457), 'je suis contente, je vous revois'),
      it('fr.a1.salutations.198', 'elle est contente, elle vous voit'),
    ], chk('Dans « il est important de lire », qui doit lire ?',
      ['personne', 'tout le monde', 'une personne précise'], 1,
      "Aucun nom, donc l'idée vaut pour qui la lit. EN: no name, so it holds for whoever reads it.")),
    grp('La peur, des deux côtés', [
      it(E(1458), 'ils ont peur, ils se trompent'),
      it(E(1443), 'elle a peur, son fils rate'),
      it(E(1446), 'nous évitons, nous roulons'),
      it(E(1447), 'nous évitons, les enfants rentrent'),
    ], chk('Le choix entre de et que dépend de...',
      ['la longueur de la phrase', 'la force du sentiment', 'la personne qui agit ensuite'], 2,
      "Content, peur et regret sont des deux côtés. EN: content, peur and regret appear on both sides.")),
    ctl('Le piège d’oublier', '« J’ai oublié que la fenêtre était ouverte. » Est-ce un subjonctif ?',
      ['oui', 'non, c’est un fait raconté'], 1,
      "Oublier que raconte ce qui était vrai. EN: oublier que reports what was true."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['petiteLettre', 'compter'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  sheetId: 'sheet-verbes',
  title: 'La petite lettre perdue',
  frSub: 'Six cartes, puis huit phrases',
  rule: {
    title: 'de ou rien, jamais au hasard',
    body: "Le « de » appartient à l'expression, comme une lettre de plus. Content, peur, regret et important le prennent ; vouloir, préférer et souhaiter, non. EN: de belongs to the expression itself, and the act 2 verbs do not take it.",
  },
  cards: [
    { promptLabel: 'de oublié', promptSound: 'Je suis content te voir.', fr: 'Je suis content de te voir.', ipa: '/ʒə sɥi kɔ̃.tɑ̃ də tə vwaʁ/', tip: "Content ne se sépare jamais de son de. EN: content never loses its de." },
    { promptLabel: 'de en trop', promptSound: 'Je veux de partir tôt.', fr: 'Je veux partir tôt.', ipa: '/ʒə vø paʁ.tiʁ to/', tip: "Vouloir n'en prend pas. EN: vouloir does not take one." },
    { promptLabel: 'de et que ensemble', promptSound: 'J’ai peur de que tu rates ton train.', fr: 'J’ai peur que tu rates ton train.', ipa: '/ʒe pœʁ kə ty ʁat sɔ̃ tʁɛ̃/', tip: "L'un chasse l'autre. EN: one drives the other out." },
    { promptLabel: 'que sans sujet', promptSound: 'Il est important que lire le contrat.', fr: 'Il est important de lire le contrat.', ipa: '/i.lɛ.tɛ̃.pɔʁ.tɑ̃ də liʁ lə kɔ̃.tʁa/', tip: "Personne n'est nommé, donc de. EN: nobody named, so de." },
    { promptLabel: 'la mauvaise lettre', promptSound: 'J’ai peur à conduire sous la neige.', fr: 'J’ai peur de conduire sous la neige.', ipa: '/ʒe pœʁ də kɔ̃.dɥiʁ su la nɛʒ/', tip: "Peur prend de, jamais à. EN: peur takes de, never à." },
    { promptLabel: 'que de trop', promptSound: 'Je regrette que je parte si tôt.', fr: 'Je regrette de partir si tôt.', ipa: '/ʒə ʁə.ɡʁɛt də paʁ.tiʁ si to/', tip: "Même personne des deux côtés. EN: the same person on both sides." },
  ],
  drill: [
    { promptSay: 'Je suis content ... te voir.', opts: ['de', 'que', 'rien'], correct: 0 },
    { promptSay: 'Je veux ... partir tôt.', opts: ['de', 'rien', 'à'], correct: 1 },
    { promptSay: 'Elle a peur ... son fils rate son train.', opts: ['que', 'de'], correct: 0 },
    { promptSay: 'Il est important ... lire le contrat.', opts: ['que', 'de'], correct: 1 },
    { promptSay: 'Nous évitons ... rouler la nuit.', opts: ['que', 'à', 'de'], correct: 2 },
    { promptSay: 'Je regrette ... tu partes si tôt.', opts: ['que', 'de'], correct: 0 },
    { promptSay: 'N’oublie pas ... fermer la fenêtre.', opts: ['que', 'de'], correct: 1 },
    { promptSay: 'Nous souhaitons ... rester une nuit de plus.', opts: ['rien', 'que', 'de'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'de ou rien, jamais au hasard' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la petite lettre fait perdre' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-16-piege-de'), say: REFRAME, terms: ['petiteLettre', 'nu'],
};

const A3_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a3-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'La petite lettre s’écrit et ne s’entend presque pas',
  itemIds: dicteeFor(3),
  audio: AUDIO, say: REFRAME, terms: ['petiteLettre'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Avant l’infinitif', 'Après « je suis content », devant un infinitif, tu écris...',
    ['à', 'de', 'que'], 1,
    "Content de partir. La petite lettre appartient à l'expression. EN: the little word belongs to the expression."),
  ctl('Les deux ensemble', 'Peut-on écrire « peur de que tu rates » ?',
    ['non', 'oui'], 0,
    "« de » sert le côté court, « que » le côté long. EN: de serves the short side, que the long one."),
  ctl('Ce qui décide', 'Entre de et que, qu’est-ce qui tranche ?',
    ['le sentiment', 'la longueur', 'la personne qui agit'], 2,
    "Toujours le compte. EN: always the count."),
], ['petiteLettre', 'compter']);

const ACT3: ActDef = {
  act: {
    id: 'act3',
    title: 'La petite préposition de',
    opener: {
      line: "Une lettre de deux signes manque dans la moitié de tes phrases : ici tu apprends où elle vit. EN: A two-letter word is missing from half your sentences: here you learn where it lives.",
      imageRef: 'lessons/subjonctif-infinitif/act03.jpg',
    },
    sections: [],
    milestone: "Tu écris « content de partir » et « content que tu partes » sans jamais mélanger les deux. EN: You can write content de partir and content que tu partes without ever mixing the two.",
    estScreens: 42,
    restPoints: ['a3-construire', 'a3-piege'],
  },
  sections: [A3_LECTURE, A3_CARTES, A3_CONSTRUIRE, A3_TABLE, A3_CHOISIR, A3_PIEGE, A3_DICTEE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — ET LA PRÉPOSITION À
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'Trois routes sur un tableau',
  frSub: 'Au cours du soir, dix minutes avant la fin',
  setting: "Un cours du soir à Bruxelles. La professeure a écrit trois colonnes au tableau et attend qu'on lui demande pourquoi.",
  bubbles: [
    { from: 'narrator', fr: 'Trois colonnes au tableau, et un mot en haut de chacune.', en: 'Three columns on the board, with one word at the top of each.' },
    { from: 'user', fr: 'Rien, de, à. Pourquoi trois colonnes pour la même chose.', en: 'Nothing, de, à. Why three columns for the same thing.' },
    { from: 'coach', fr: 'Parce que le chemin vers l’infinitif dépend du premier verbe, jamais du second.', en: 'Because the road to the infinitive depends on the first verb, never on the second.', warn: 'C’est le premier verbe qui choisit' },
    { from: 'user', fr: 'Donc je veux partir, content de partir, réussir à partir. Le même partir trois fois.', en: 'So je veux partir, content de partir, réussir à partir. The same partir three times.' },
    { from: 'coach', fr: 'Exactement. Partir ne change pas. C’est ce qu’il y a devant qui change.', en: 'Exactly. Partir does not change. What changes is what comes in front of it.' },
    { from: 'user', fr: 'Et il n’y a pas de règle pour savoir quelle colonne.', en: 'And there is no rule for knowing which column.' },
    { from: 'coach', fr: 'Pas de règle. Une liste courte, et tu la connais déjà à moitié.', en: 'No rule. A short list, and you already know half of it.', warn: 'Quinze expressions en tout' },
    { from: 'narrator', fr: 'Il recopie les trois colonnes au dos de son cahier.', en: 'He copies the three columns onto the back of his notebook.' },
  ],
  closing: { fr: 'Le compte décide s’il y a un infinitif. La liste décide de ce qu’il y a devant.', en: 'The count decides whether there is an infinitive. The list decides what goes in front of it.' },
  audio: REC('rec-b1-16-tableau'), say: REFRAME, terms: ['petiteLettre', 'nu'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-verbes',
  title: 'La troisième route',
  frSub: 'à, devant l’infinitif',
  hint: 'Quatre cartes. Le premier verbe choisit la route.',
  audio: AUDIO, say: REFRAME, terms: ['petiteLettre', 'memesujet'],
  cards: [
    {
      head: 'Les verbes en à', label: 'à plus l’infinitif',
      fr: 'réussir à · arriver à · hésiter à · apprendre à · continuer à',
      sub: '[ray-ü-seer A] · [a-ree-vay A] · [ay-zee-tay A] · [a-prahⁿdr A] · [kohⁿ-tee-nü-ay A]',
      body: "Ces cinq-là prennent « à », et jamais « de ». L'oreille n'aide pas : il faut les tenir comme un bloc. EN: these five take à and never de, and the ear gives you no help.",
    },
    {
      head: 'Les trois routes côte à côte', label: 'rien, de, à',
      fr: 'je veux partir · content de partir · réussir à partir',
      sub: '[zhuh veu par-TEER] · [kohⁿ-tahⁿ duh par-TEER] · [ray-ü-seer a par-TEER]',
      body: "Le même infinitif trois fois. Ce qui change est devant lui, et c'est le premier verbe qui l'impose. EN: the same infinitive three times; the first verb imposes what goes in front.",
    },
    {
      head: 'Arriver à, deux sens', label: 'un faux ami',
      fr: 'Je n’arrive pas à ouvrir cette porte.',
      sub: '[zhuh na-reev pa a oo-vreer seht PORT]',
      body: "Ici « arriver à » ne parle pas d'un lieu : il veut dire y parvenir. C'est le sens le plus fréquent devant un infinitif. EN: arriver à before an infinitive means to manage, not to reach a place.",
    },
    {
      head: 'Et avec deux sujets', label: 'rare, et lourd',
      fr: 'Nous avons réussi à ce que tout le monde vienne.',
      sub: '[noo-za-vohⁿ ray-ü-see a suh kuh too luh mohⁿd VYENN]',
      body: "La forme existe et elle est pesante. À l'oral, on tourne la phrase autrement. Tu la reconnais, tu ne la produis pas. EN: the form exists and is heavy; recognise it, do not produce it.",
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trois colonnes, huit phrases',
  frSub: 'Range chaque phrase',
  groups: [
    grp('La colonne à', [
      it(E(1460), 'réussir à'),
      it(E(1462), 'arriver à'),
      it(E(1463), 'hésiter à'),
      it(E(1465), 'apprendre à'),
    ], chk('Qu’est-ce que ces quatre premiers verbes ont en commun ?',
      ['ils prennent tous à', 'ils sont tous au présent', 'ils parlent tous d’effort'], 0,
      "La route est la même, et le sens n'y est pour rien. EN: the road is the same and the meaning has nothing to do with it.")),
    grp('Les deux autres colonnes', [
      it(E(1420), 'rien : vouloir'),
      it(E(1440), 'de : être content'),
      it(E(1448), 'de : il est important'),
      it('fr.b1.bureau.005', 'à : apprendre'),
    ], chk('Qui choisit la petite lettre ?',
      ['le deuxième verbe', 'le premier verbe', 'la longueur de la phrase'], 1,
      "Partir ne change jamais. Ce qui est devant lui, si. EN: partir never changes; what sits in front of it does.")),
    ctl('Le test', 'Tu ne sais plus si c’est de ou à. Que regardes-tu ?',
      ['le sujet', 'l’infinitif', 'l’expression du début'], 2,
      "La liste porte sur le début de la phrase. EN: the list is about the start of the sentence."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['petiteLettre'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  title: 'Les trois routes dans la vraie vie',
  examples: [
    ex(E(1472), 'réussir à, après plusieurs essais'),
    ex(E(1473), 'hésiter à, avec une raison'),
    ex('fr.b2.rp-quotidien.006', 'arriver à, au sens de y parvenir'),
    ex('fr.b1.sports-et-loisirs.081', 'continuer à, derrière un bien que'),
    ex(E(1475), 'de, avec être content'),
    ex(E(1474), 'que, parce que la personne change'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['petiteLettre', 'deuxsujets'],
};

const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Deux décisions, dans l’ordre',
  frSub: 'D’abord le compte, ensuite la lettre',
  groups: [
    grp('D’abord : une personne ou deux', [
      it(E(1474), 'elle veut, nous arrivons : deux'),
      it(E(1462), 'je n’arrive pas, j’ouvre : une'),
      it(E(1475), 'je suis content, j’ai une place : une'),
      it('fr.b2.argent-quotidien.003', 'elle dispose, elle hésite : une'),
    ], chk('Dans laquelle de ces quatre phrases y a-t-il deux personnes ?',
      ['la première', 'la deuxième', 'aucune'], 0,
      "« elle veut que nous arrivions » : elle veut, nous arrivons. EN: she wants, we manage.")),
    grp('Ensuite : quelle petite lettre', [
      it(E(1466), 'réussir à, le bloc entier'),
      it(E(1467), 'arriver à, le bloc entier'),
      it(E(1468), 'hésiter à, le bloc entier'),
      it(E(1469), 'les trois routes, côte à côte'),
    ], chk('La petite lettre se décide...',
      ['avant le compte', 'après le compte', 'en même temps'], 1,
      "S'il n'y a pas d'infinitif, il n'y a pas de petite lettre à choisir. EN: no infinitive means no little word to choose.")),
    ctl('L’ordre', 'Dans quel ordre poses-tu les deux questions ?',
      ['la lettre, puis le compte', 'le compte, puis la lettre'], 1,
      "Le compte décide s'il y a un infinitif. EN: the count decides whether there is an infinitive at all."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['compter', 'petiteLettre'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de route',
  errors: [
    {
      wrong: 'Je réussis de finir avant midi.',
      right: 'Je réussis à finir avant midi.',
      why: "Normal : « de » est la route la plus fréquente, donc la main la met partout. Réussir est dans l'autre colonne. EN: de is the commonest road, so the hand writes it everywhere.",
    },
    {
      wrong: 'J’ai peur à conduire sous la neige.',
      right: 'J’ai peur de conduire sous la neige.',
      why: "« à » va bien avec beaucoup de verbes d'effort, et avoir peur n'en est pas un. EN: à suits verbs of effort, and avoir peur is not one.",
    },
    {
      wrong: 'Elle hésite de demander une augmentation.',
      right: 'Elle hésite à demander une augmentation.',
      why: "Hésiter ressemble à regretter et à craindre, qui prennent tous deux « de ». Lui non. EN: hésiter looks like two verbs that take de, and it does not.",
    },
    {
      wrong: 'Nous avons réussi que tout le monde vienne.',
      right: 'Nous avons réussi à ce que tout le monde vienne.',
      why: "Le verbe garde son « à » même quand une deuxième personne arrive, et « ce » vient le rattraper. EN: the verb keeps its à even with a second person, and ce catches it.",
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['petiteLettre', 'anglais'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La route', 'Après « je n’arrive pas », devant un infinitif, tu écris...',
    ['rien', 'de', 'à'], 2,
    "Arriver à ouvrir, arriver à finir. EN: arriver à ouvrir, arriver à finir."),
  ctl('Qui choisit', 'La petite lettre est imposée par...',
    ['le premier verbe', 'le deuxième verbe', 'le sujet'], 0,
    "L'infinitif ne change jamais. EN: the infinitive never changes."),
  ctl('L’ordre', 'Première question devant une phrase à écrire...',
    ['quelle petite lettre', 'combien de personnes', 'quel temps'], 1,
    "Le compte vient toujours en premier. EN: the count always comes first."),
], ['petiteLettre', 'compter']);

const ACT4: ActDef = {
  act: {
    id: 'act4',
    title: 'Et la préposition à',
    opener: {
      line: "Cinq verbes refusent le de et exigent le à : ici tu apprends à les reconnaître avant d’écrire. EN: Five verbs refuse de and demand à: here you learn to spot them before you write.",
      imageRef: 'lessons/subjonctif-infinitif/act04.jpg',
    },
    sections: [],
    milestone: "Tu poses les deux questions dans le bon ordre : combien de personnes, puis quelle petite lettre. EN: You ask the two questions in the right order: how many people, then which little word.",
    estScreens: 34,
    restPoints: ['a4-exemples'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_CONSTRUIRE, A4_EXEMPLES, A4_CHOISIR, A4_ERREURS, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — IL FAUT, DANS LES DEUX SENS
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Trois affiches dans un hall',
  frSub: 'Qui est nommé, et qui ne l’est pas',
  text: READING_IL_FAUT,
  glossary: [
    { word: 'guichet', en: 'counter', note: "La fenêtre derrière laquelle un agent reçoit le public. EN: the window where a clerk serves you." },
    { word: 'un il vide', en: 'an empty il', note: "Un « il » qui ne remplace personne, comme dans « il pleut »." },
    { word: 'en panne', en: 'down, out of order', note: "Il ne marche plus pour le moment. EN: it is not working for now." },
  ],
  questions: [
    { q: 'Pourquoi la première affiche n’a-t-elle pas de « que » ?', a: "Parce qu'elle ne nomme personne. L'ordre vaut pour tous ceux qui entrent." },
    { q: 'Pourquoi la deuxième en a-t-elle un ?', a: "Parce qu'elle nomme M. Traoré. Dès qu'un nom apparaît, il lui faut sa moitié de phrase." },
    { q: 'Que désigne le « il » de « il faut » ?', a: "Rien du tout. C'est un « il » vide, comme celui de « il pleut »." },
    { q: 'Et la troisième affiche ?', a: "« Il vaut mieux revenir demain matin. » Personne n'est nommé, donc pas de « que »." },
  ],
  audio: REC('rec-b1-16-mairie'), say: REFRAME, terms: ['ilfaut', 'compter'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ilfaut',
  title: 'Le il qui ne désigne personne',
  frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Cherche s’il y a un nom quelque part.',
  audio: REC('rec-b1-16-ilfaut'), say: REFRAME, terms: ['ilfaut', 'memesujet'],
  cards: [
    {
      head: 'Personne n’est nommé', label: 'il faut plus l’infinitif',
      fr: 'Il faut partir maintenant.',
      sub: '[eel foh par-teer mehⁿt-NAHⁿ]',
      body: "Sur une affiche, dans une consigne, dans une phrase qui vaut pour tout le monde. Le « il » de « il faut » ne remplace aucune personne. EN: the il of il faut stands for nobody at all.",
    },
    {
      head: 'Quelqu’un est nommé', label: 'il faut que plus le subjonctif',
      fr: 'Il faut que tu partes maintenant.',
      sub: '[eel foh kuh tü PART mehⁿt-NAHⁿ]',
      body: "Dès qu'une personne apparaît, elle a besoin d'une place. « que » la lui donne, et le verbe qui suit est conjugué. EN: as soon as a person appears they need a place, and que gives it to them.",
    },
    {
      head: 'Les autres impersonnels', label: 'même comportement',
      fr: 'il faudrait · il vaut mieux · il est possible',
      sub: '[eel foh-DREH] · [eel voh MYEU] · [eel eh po-SEEBL]',
      body: "Tous suivent la même règle. « Il faudrait » est le conditionnel de « il faut » et ne change rien après « que ». EN: all follow the same rule, and il faudrait changes nothing after que.",
    },
    {
      head: 'Celui qui prend de', label: 'il est important',
      fr: 'Il est important de lire. · Il est important que tu lises.',
      sub: '[ee-leh-tehⁿ-por-tahⁿ duh LEER] · [ee-leh-tehⁿ-por-tahⁿ kuh tü LEEZ]',
      body: "Il faut et il vaut mieux collent l'infinitif directement. Il est important et il est possible prennent « de ». EN: two of them take the infinitive directly and two take de.",
    },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Cherche le nom',
  frSub: 'S’il y en a un, que arrive',
  groups: [
    grp('Aucun nom, aucune personne', [
      it(E(1478), 'l’ordre vaut pour tous'),
      it(E(1480), 'une consigne écrite'),
      it('fr.b1.heure-et-date.006', 'une règle d’aéroport'),
      it('fr.a2.deplacements.003', 'une affiche de gare'),
    ], chk('À qui s’adressent ces quatre phrases ?',
      ['à personne', 'à une personne précise', 'à tout le monde'], 2,
      "Rien ne nomme quelqu'un, donc la consigne est générale. EN: nothing names anybody, so the instruction is general.")),
    grp('Un nom apparaît', [
      it(E(1479), 'tu'),
      it(E(1481), 'chacun'),
      it('fr.b1.routines.061', 'nous'),
      it('fr.b1.cuisine.065', 'nous, avec il vaut mieux'),
    ], chk('Qu’est-ce qui a forcé le « que » dans ces quatre phrases ?',
      ['un nom ou un pronom', 'le temps du verbe', 'la longueur'], 0,
      "Une personne nommée a besoin de sa moitié de phrase. EN: a named person needs a half of the sentence.")),
    ctl('Le il vide', 'Dans « il faut partir », qui est « il » ?',
      ['la personne qui parle', 'personne', 'celui qui écoute'], 1,
      "C'est le même « il » que dans « il pleut ». EN: the same il as in il pleut."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['ilfaut', 'deuxsujets'],
};

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Consigne générale, ou ordre à quelqu’un',
  frSub: 'Huit phrases, sans le texte',
  lines: [
    ln(E(1478)), ln(E(1479)), ln(E(1482)), ln(E(1483)),
    ln(E(1490)), ln(E(1491)), ln(E(1484)), ln(E(1485)),
  ],
  questions: [
    { q: 'Première phrase : quelqu’un est-il nommé ?', opts: ['non', 'oui'], correct: 0,
      why: "« il faut partir » : aucune personne. EN: nobody at all." },
    { q: 'Deuxième phrase : qui doit partir ?', opts: ['tout le monde', 'toi'], correct: 1,
      why: "« il faut que tu partes » : toi, et personne d'autre. EN: you, and nobody else." },
    { q: 'Troisième phrase : l’expression est...', opts: ['il faut', 'il est possible', 'il vaut mieux'], correct: 2,
      why: "« il vaut mieux réserver » : la version courte. EN: il vaut mieux, the short version." },
    { q: 'Cinquième phrase : est-ce une interdiction générale ?', opts: ['oui', 'non, elle vise quelqu’un'], correct: 0,
      why: "« il ne faut pas fumer » : aucune personne nommée. EN: nobody named." },
    { q: 'Sixième phrase : qui ne doit pas jouer près de la route ?', opts: ['les enfants', 'toi', 'tout le monde'], correct: 0,
      why: "« que les enfants jouent » : eux, et c'est pour ça qu'il y a un que. EN: the children, which is why there is a que." },
    { q: 'Sur les huit, combien ouvrent avec que ?', opts: ['deux', 'quatre', 'huit'], correct: 1,
      why: "Une sur deux, en alternance. EN: every other one." },
  ],
  audio: REC('rec-b1-16-ilfaut-ecoute'), say: REFRAME, terms: ['ilfaut', 'compter'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  sheetId: 'sheet-ilfaut',
  title: 'Les quatre impersonnels au travail',
  examples: [
    ex(E(1484), 'il faudrait, sans personne nommée'),
    ex(E(1485), 'il faudrait, avec nous'),
    ex(E(1492), 'il est possible de, la version courte'),
    ex(E(1493), 'il est possible que, la version longue'),
    ex('fr.a2.deplacements.001', 'il vaut mieux, sans personne nommée'),
    ex(E(1495), 'il faut, pour une consigne de santé'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['ilfaut', 'petiteLettre'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  sheetId: 'sheet-ilfaut',
  title: 'Le nom qu’on n’a pas vu',
  frSub: 'Six cartes, puis huit phrases',
  rule: {
    title: 'Un nom quelque part, et que arrive',
    body: "La phrase reste courte tant que personne n'est nommé. Un pronom compte comme un nom : dès que tu écris tu, nous, chacun ou les enfants, il faut « que ». EN: a pronoun counts as a name, so tu, nous or chacun all force que.",
  },
  cards: [
    { promptLabel: 'le nom sans que', promptSound: 'Il faut tu partir maintenant.', fr: 'Il faut que tu partes maintenant.', ipa: '/il fo kə ty paʁt mɛ̃t.nɑ̃/', tip: "Un pronom a besoin d'une moitié de phrase. EN: a pronoun needs a half sentence." },
    { promptLabel: 'que sans nom', promptSound: 'Il faut que partir maintenant.', fr: 'Il faut partir maintenant.', ipa: '/il fo paʁ.tiʁ mɛ̃t.nɑ̃/', tip: "Pas de nom, pas de que. EN: no name, no que." },
    { promptLabel: 'le présent laissé en place', promptSound: 'Il faut que tu pars maintenant.', fr: 'Il faut que tu partes maintenant.', ipa: '/il fo kə ty paʁt mɛ̃t.nɑ̃/', tip: "Le verbe change après que. EN: the verb changes after que." },
    { promptLabel: 'de en trop', promptSound: 'Il faut de partir maintenant.', fr: 'Il faut partir maintenant.', ipa: '/il fo paʁ.tiʁ mɛ̃t.nɑ̃/', tip: "Il faut colle l'infinitif directement. EN: il faut takes the infinitive directly." },
    { promptLabel: 'de manquant', promptSound: 'Il est important lire le contrat.', fr: 'Il est important de lire le contrat.', ipa: '/i.lɛ.tɛ̃.pɔʁ.tɑ̃ də liʁ lə kɔ̃.tʁa/', tip: "Celui-là prend de. EN: that one takes de." },
    { promptLabel: 'le il rempli', promptSound: 'Lui faut que tu partes.', fr: 'Il faut que tu partes.', ipa: '/il fo kə ty paʁt/', tip: "Le il de il faut ne se remplace pas. EN: the il of il faut cannot be swapped." },
  ],
  drill: [
    { promptSay: 'Il faut ... composter le billet avant de monter.', opts: ['que', 'de', 'rien'], correct: 2 },
    { promptSay: 'Il faut ... tu compostes ton billet.', opts: ['rien', 'que'], correct: 1 },
    { promptSay: 'Il est important ... prévenir la gardienne.', opts: ['de', 'que'], correct: 0 },
    { promptSay: 'Il est important ... la gardienne soit prévenue.', opts: ['de', 'que'], correct: 1 },
    { promptSay: 'Il vaut mieux ... réserver à l’avance.', opts: ['rien', 'que', 'de'], correct: 0 },
    { promptSay: 'Il ne faut pas ... les enfants jouent près de la route.', opts: ['que', 'rien'], correct: 0 },
    { promptSay: 'Il faudrait ... nous rangions le garage.', opts: ['de', 'que'], correct: 1 },
    { promptSay: 'Il est possible ... payer en plusieurs fois.', opts: ['rien', 'de', 'que'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Un nom quelque part, et que arrive' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le nom oublié fait perdre' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-16-piege-ilfaut'), say: REFRAME, terms: ['ilfaut', 'compter'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Sans nom', '« Il faut composter le billet. » Cette phrase s’adresse à...',
    ['tout le monde', 'une personne précise'], 0,
    "Aucun nom, donc l'ordre est général. EN: no name, so the instruction is general."),
  ctl('Avec un nom', 'Tu veux nommer quelqu’un après il faut. Tu écris...',
    ['il faut tu partir', 'il faut de partir', 'il faut que tu partes'], 2,
    "Un pronom a besoin de sa moitié de phrase. EN: a pronoun needs a half sentence."),
  ctl('La petite lettre', 'Devant un infinitif, il est important prend...',
    ['de', 'rien', 'à'], 0,
    "Il est important de lire, il faut lire. Les deux ne se comportent pas pareil. EN: those two do not behave the same way."),
], ['ilfaut', 'petiteLettre']);

const ACT5: ActDef = {
  act: {
    id: 'act5',
    title: 'Il faut, dans les deux sens',
    opener: {
      line: "Une affiche ne nomme personne et une note nomme quelqu’un : ici tu apprends ce que ça change après il faut. EN: A notice names nobody and a note names somebody: here you learn what that changes after il faut.",
      imageRef: 'lessons/subjonctif-infinitif/act05.jpg',
    },
    sections: [],
    milestone: "Tu écris « il faut partir » quand la consigne est générale et « il faut que tu partes » dès que tu nommes quelqu’un. EN: You write il faut partir for a general instruction and il faut que tu partes as soon as you name somebody.",
    estScreens: 40,
    restPoints: ['a5-ecoute'],
  },
  sections: [A5_LECTURE, A5_CARTES, A5_CONSTRUIRE, A5_ECOUTE, A5_EXEMPLES, A5_PIEGE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — POUR ET AVANT
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Deux phrases, deux plans différents',
  frSub: 'La veille du déménagement',
  setting: "Un vendredi soir, au téléphone. Rémi organise le déménagement de samedi et Inès note tout sur son téléphone.",
  bubbles: [
    { from: 'narrator', fr: 'Rémi propose de partir tôt, et Inès comprend autre chose.', en: 'Rémi suggests leaving early, and Inès understands something else.' },
    { from: 'user', fr: 'Je pars tôt pour avoir la voiture toute la matinée.', en: 'I am leaving early to have the car all morning.' },
    { from: 'coach', fr: 'Donc tu gardes la voiture. Je prends le bus, alors.', en: 'So you are keeping the car. I will take the bus then.', warn: 'Elle a entendu pour, sans que' },
    { from: 'user', fr: 'Non. Je pars tôt pour que tu aies la voiture.', en: 'No. I am leaving early so that you have the car.' },
    { from: 'coach', fr: 'Ah. Ce n’est pas du tout le même message.', en: 'Ah. That is not the same message at all.' },
    { from: 'user', fr: 'Un mot de plus, et c’est toi qui as la voiture.', en: 'One more word, and you are the one with the car.' },
    { from: 'coach', fr: 'Et c’est pareil avec avant. Avant de partir, c’est toi. Avant que tu partes, c’est moi qui attends.', en: 'And it is the same with avant. Avant de partir is you. Avant que tu partes is me waiting.', warn: 'Cinq expressions marchent comme ça' },
    { from: 'narrator', fr: 'Inès efface sa ligne sur le bus et note l’heure de la voiture.', en: 'Inès deletes her line about the bus and notes down the car time.' },
  ],
  closing: { fr: 'La version courte parle de toi. La version longue parle de quelqu’un d’autre.', en: 'The short version is about you. The long version is about somebody else.' },
  audio: REC('rec-b1-16-demenagement'), say: REFRAME, terms: ['paire', 'compter'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-paires',
  title: 'Deux longueurs, une idée',
  frSub: 'pour et pour que, avant de et avant que',
  hint: 'Quatre cartes. Le mot long et le mot court disent la même idée.',
  audio: AUDIO, say: REFRAME, terms: ['paire', 'memesujet'],
  cards: [
    {
      head: 'pour, version courte', label: 'un seul sujet',
      fr: 'Je pars tôt pour éviter les bouchons.',
      sub: '[zhuh par TOH poor ay-vee-tay lay boo-SHOHⁿ]',
      body: "Je pars et j'évite : la même personne. « pour » suffit, et l'infinitif suit directement. EN: the same person leaves and avoids, so pour is enough.",
    },
    {
      head: 'pour que, version longue', label: 'deux sujets',
      fr: 'Je pars tôt pour que tu aies la voiture.',
      sub: '[zhuh par TOH poor kuh tü EH la vwa-TÜR]',
      body: "Je pars et tu as la voiture : deux personnes. Choisir la mauvaise version change qui garde la voiture. EN: picking the wrong version changes who keeps the car.",
    },
    {
      head: 'avant de, avant que', label: 'la même paire',
      fr: 'avant de partir · avant que tu partes',
      sub: '[a-vahⁿ duh par-TEER] · [a-vahⁿ kuh tü PART]',
      body: "La version courte prend « de », la longue prend « que ». L'anglais dit « before leaving » sans dire qui part. EN: English says before leaving without saying who leaves.",
    },
    {
      head: 'Un détail d’écrit', label: 'le ne explétif',
      fr: 'avant que l’hiver n’arrive',
      sub: '[a-vahⁿ kuh lee-vehr na-REEV]',
      body: "À l'écrit, « avant que » traîne parfois un « ne » qui ne veut dire aucune négation. Tu le lis, tu n'es pas obligé de l'écrire. EN: in writing avant que sometimes carries a ne that negates nothing.",
    },
  ],
};

const A6_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-table',
  layer: 'core',
  sheetId: 'sheet-paires',
  title: 'Six lignes à tenir',
  cols: ['Un seul sujet', 'Deux sujets', 'Ce qui change'],
  rows: [
    {
      cells: ['pour', 'pour que', 'qui profite du départ'],
      say: 'Je pars tôt pour éviter les bouchons.',
      detail: { title: 'pour et pour que', body: "La version courte parle de celui qui part. La longue parle d'un autre. EN: the short one is about the one leaving.", say: 'Je pars tôt pour que tu aies la voiture cet après-midi.' },
    },
    {
      cells: ['avant de', 'avant que', 'qui fait la deuxième action'],
      say: 'Elle range la cuisine avant de se coucher.',
      detail: { title: 'avant de et avant que', body: "Court : elle range et elle se couche. Long : elle range et les invités arrivent. EN: short, she does both; long, somebody else acts.", say: 'Elle range la cuisine avant que les invités arrivent.' },
    },
    {
      cells: ['sans', 'sans que', 'qui n’a rien fait'],
      say: 'Il est entré sans frapper.',
      detail: { title: 'sans et sans que', body: "Court : il n'a pas frappé. Long : personne d'autre n'a entendu. EN: short, he did not knock; long, nobody else heard.", say: 'Il est sorti sans que personne l’entende.' },
    },
    {
      cells: ['afin de', 'afin que', 'le registre, un peu plus écrit'],
      say: 'Nous partons tôt afin d’arriver avant la nuit.',
      detail: { title: 'afin de et afin que', body: "Même sens que pour, un ton plus écrit. EN: the same meaning as pour, a more written tone.", say: 'Nous partons tôt afin que les enfants dorment un peu.' },
    },
    {
      cells: ['à condition de', 'à condition que', 'qui doit tenir la promesse'],
      say: 'J’accepte, à condition de finir avant dix-huit heures.',
      detail: { title: 'à condition de et à condition que', body: "Court : la condition porte sur moi. Long : elle porte sur quelqu'un d'autre. EN: short, the condition is on me; long, on somebody else.", say: 'J’accepte, à condition que tu viennes avec moi.' },
    },
    {
      cells: ['(aucune version courte)', 'bien que, quoique', 'rien : que reste toujours'],
      say: 'Bien que je sois fatigué, je finis le chapitre.',
      detail: { title: 'les quatre sans paire', body: "Bien que, quoique, jusqu'à ce que et pourvu que gardent « que » même avec un seul sujet. EN: these four keep que even with one subject.", say: 'Quoique la salle soit petite, tout le monde tient.' },
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['paire', 'sanspaire'],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Court ou long',
  frSub: 'Range les huit phrases',
  groups: [
    grp('La version courte', [
      it(E(1496), 'je pars, j’évite'),
      it(E(1498), 'elle range, elle se couche'),
      it(E(1500), 'nous avons appelé, nous prévenons'),
      it('fr.b1.routines.012', 'je lis, je m’endors'),
    ], chk('Pourquoi ces quatre phrases n’ont-elles pas de « que » ?',
      ['elles sont plus courtes', 'la personne ne change pas', 'elles sont au présent'], 1,
      "Un seul sujet des deux côtés. EN: one subject on both sides.")),
    grp('La version longue', [
      it(E(1497), 'je pars, tu as la voiture'),
      it(E(1499), 'elle range, les invités arrivent'),
      it(E(1501), 'nous avons appelé, personne ne s’inquiète'),
      it('fr.b1.famille.072', 'je passe du temps, mes enfants grandissent'),
    ], chk('Dans « je pars tôt pour que tu aies la voiture », qui a la voiture ?',
      ['moi', 'les deux', 'toi'], 2,
      "Le sujet après que est celui qui en profite. EN: the subject after que is the one who benefits.")),
    ctl('Le coût de l’erreur', 'Tu écris « pour » au lieu de « pour que ». Que comprend ton lecteur ?',
      ['la même chose', 'que c’est toi qui en profites'], 1,
      "Ce n'est pas une faute de style : le message change. EN: it is not a style slip, the message changes."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['paire', 'deuxsujets'],
};

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  title: 'Les deux paires dans la vraie vie',
  examples: [
    ex(E(1502), 'avant de, avec la même personne'),
    ex(E(1503), 'avant que, le facteur arrive'),
    ex(E(1510), 'pour, il vient et il aide'),
    ex(E(1511), 'pour que, il vient et nous ne sommes pas seuls'),
    ex('fr.b1.maison.004', 'avant que, avec le ne de l’écrit'),
    ex('fr.b2.maison.082', 'pour que, en tête de phrase'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['paire'],
};

const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le message change avec le mot',
  frSub: 'Choisis, et vois ce que ça dit',
  groups: [
    grp('Relire la lettre', [
      it(E(1502), 'je relis, je l’envoie'),
      it(E(1503), 'je relis, le facteur passe'),
      it(E(1512), 'tu prends la photo, tu rends les clés'),
      it(E(1513), 'tu préviens, les travaux commencent'),
    ], chk('Dans « relis ta lettre avant que le facteur passe », qui relit ?',
      ['toi', 'les deux', 'le facteur'], 0,
      "Le sujet de la première moitié n'a pas bougé. EN: the subject of the first half has not moved.")),
    grp('Venir, et pourquoi', [
      it(E(1510), 'il vient, il nous aide'),
      it(E(1511), 'il vient, nous ne sommes pas seuls'),
      free('Il est venu pour se reposer.', 'He came to get some rest.', 'lui qui vient, lui qui se repose'),
      free('Il est venu pour que nous nous reposions.', 'He came so that we could get some rest.', 'lui qui vient, nous qui nous reposons'),
    ], chk('Qu’est-ce qui décide entre pour et pour que ?',
      ['la politesse', 'la personne qui fait la deuxième action', 'la longueur de la phrase'], 1,
      "Toujours le même compte. EN: always the same count.")),
    ctl('En anglais', '« Before leaving, shut the window. » Qui part, d’après l’anglais ?',
      ['toi', 'moi', 'on ne sait pas'], 2,
      "L'anglais ne le dit pas, donc il ne t'aide pas à choisir. EN: English does not say, so it cannot help you choose."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['paire', 'anglais'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de paire',
  errors: [
    {
      wrong: 'Je pars tôt pour que éviter les bouchons.',
      right: 'Je pars tôt pour éviter les bouchons.',
      why: "Normal : « pour que » est la forme qu'on entend le plus en classe. Sans deuxième personne, elle n'a rien à ouvrir. EN: with no second person there is nothing for que to open.",
    },
    {
      wrong: 'Relis ta lettre avant que l’envoyer.',
      right: 'Relis ta lettre avant de l’envoyer.',
      why: "« avant que » garde son que, et un infinitif ne vient jamais juste derrière. La version courte est « avant de ». EN: an infinitive never comes straight after que.",
    },
    {
      wrong: 'Je pars tôt avant de tu partes.',
      right: 'Je pars tôt avant que tu partes.',
      why: "Tu as senti qu'il fallait la version courte, et la deuxième personne était déjà là. Dès qu'elle arrive, « de » cède la place. EN: as soon as the second person arrives, de gives way.",
    },
    {
      wrong: 'Préviens-moi avant que les travaux commenceront.',
      right: 'Préviens-moi avant que les travaux commencent.',
      why: "L'idée est bien dans l'avenir, et « avant que » ne prend jamais le futur. Ce qui suit est une forme de subjonctif. EN: avant que never takes the future.",
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['paire', 'anglais'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La version courte', 'Je pars tôt et j’évite les bouchons. Tu écris...',
    ['pour éviter', 'pour que j’évite', 'pour que éviter'], 0,
    "Une personne, donc la version courte. EN: one person, so the short version."),
  ctl('La version longue', 'Je pars tôt et tu as la voiture. Tu écris...',
    ['pour que tu aies', 'pour avoir'], 0,
    "Deux personnes, donc que et un sujet. EN: two people, so que and a subject."),
  ctl('Avant', 'Devant un infinitif, avant s’écrit...',
    ['avant que', 'avant de', 'avant'], 1,
    "Avant de partir, avant que tu partes. EN: avant de partir, avant que tu partes."),
], ['paire', 'compter']);

const ACT6: ActDef = {
  act: {
    id: 'act6',
    title: 'Pour et avant',
    opener: {
      line: "Un mot de plus, et c’est quelqu’un d’autre qui garde la voiture : ici tu apprends les deux longueurs de pour et d’avant. EN: One word more, and somebody else keeps the car: here you learn the two lengths of pour and avant.",
      imageRef: 'lessons/subjonctif-infinitif/act06.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre pour et pour que, entre avant de et avant que, en sachant ce que chaque version dit à ton lecteur. EN: You choose between pour and pour que, avant de and avant que, knowing what each version tells your reader.",
    estScreens: 42,
    restPoints: ['a6-table', 'a6-choisir'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_TABLE, A6_CONSTRUIRE, A6_EXEMPLES, A6_CHOISIR, A6_ERREURS, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — SANS, AFIN, À CONDITION
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La porte de la buanderie',
  frSub: 'Quatre expressions, quatre décisions',
  text: READING_SANS,
  glossary: [
    { word: 'la buanderie', en: 'the laundry room', note: "La pièce où sont les machines à laver. EN: the room with the washing machines." },
    { word: 'lancer de machine', en: 'put a wash on', note: "Faire démarrer une machine à laver. EN: to start a washing machine." },
    { word: 'linge', en: 'washing', note: "Les vêtements qu'on lave. EN: the clothes you wash." },
  ],
  questions: [
    { q: 'Pourquoi « afin de ne pas réveiller » et non « afin que » ?', a: "Parce que c'est la même personne qui lance la machine et qui réveillerait le premier étage." },
    { q: 'Pourquoi « sans que je le sache » a-t-il un « que » ?', a: "Parce que c'est quelqu'un d'autre qui a pris le linge, et moi qui ne savais rien." },
    { q: 'Et « je passerai sans prévenir » ?', a: "C'est le gardien qui passe et le gardien qui ne prévient pas. Une seule personne." },
    { q: 'Que fait « à condition de ranger votre linge » ?', a: "La condition porte sur celui qui utilise la salle, donc la version courte suffit." },
  ],
  audio: REC('rec-b1-16-buanderie'), say: REFRAME, terms: ['paire', 'compter'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-paires',
  title: 'Les trois paires qui restent',
  frSub: 'sans, afin, à condition',
  hint: 'Quatre cartes. La question ne change jamais.',
  audio: AUDIO, say: REFRAME, terms: ['paire', 'deuxsujets'],
  cards: [
    {
      head: 'sans, version courte', label: 'un seul sujet',
      fr: 'Il est entré sans frapper.',
      sub: '[ee-leh ahⁿ-tray sahⁿ fra-PAY]',
      body: "Il est entré et il n'a pas frappé. « sans » suffit, et l'infinitif suit directement. EN: he came in and he did not knock, so sans is enough.",
    },
    {
      head: 'sans que, version longue', label: 'deux sujets',
      fr: 'Il est sorti sans que personne l’entende.',
      sub: '[ee-leh sor-tee sahⁿ kuh pehr-sonn lahⁿ-TAHⁿD]',
      body: "Il est sorti et personne n'a entendu. Les deux actions ont des sujets différents, donc « que ». EN: two different subjects, so que.",
    },
    {
      head: 'afin de, afin que', label: 'le ton de l’écrit',
      fr: 'afin d’arriver à temps · afin que les enfants dorment',
      sub: '[a-fehⁿ da-ree-vay a TAHⁿ] · [a-fehⁿ kuh lay-zahⁿ-fahⁿ DORM]',
      body: "Même sens que « pour » et « pour que », avec un ton plus écrit. La règle du compte est identique. EN: the same meaning as pour, in a more written tone, with the same rule.",
    },
    {
      head: 'à condition de, à condition que', label: 'sur qui porte la condition',
      fr: 'à condition de finir · à condition que tu viennes',
      sub: '[a kohⁿ-dee-syohⁿ duh fee-NEER] · [a kohⁿ-dee-syohⁿ kuh tü VYENN]',
      body: "La version courte met la condition sur celui qui parle. La longue la met sur quelqu'un d'autre. EN: short puts the condition on the speaker, long on somebody else.",
    },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trois paires, huit phrases',
  frSub: 'Court à gauche, long à droite',
  groups: [
    grp('Une seule personne', [
      it(E(1514), 'il entre, il ne frappe pas'),
      it(E(1516), 'elle signe, elle ne relit pas'),
      it(E(1518), 'nous partons, nous arrivons'),
      it('fr.a2.verbes.690', 'il entre, il ne frappe pas'),
    ], chk('Qu’est-ce qui manque dans ces quatre phrases ?',
      ['un sujet', 'un verbe', 'le mot que'], 2,
      "Il n'y a rien à ouvrir : la personne ne change pas. EN: nothing to open, because the person does not change.")),
    grp('Deux personnes', [
      it(E(1515), 'il sort, personne n’entend'),
      it(E(1517), 'elle signe, son avocat ne voit rien'),
      it(E(1519), 'nous partons, les enfants dorment'),
      it(E(1521), 'j’accepte, tu viens'),
    ], chk('Dans « elle a signé sans que son avocat voie le contrat », qui a signé ?',
      ['l’avocat', 'elle'], 1,
      "Le sujet de la première moitié ne bouge pas. EN: the subject of the first half does not move.")),
    ctl('La question', 'Devant sans, afin et à condition, tu te demandes...',
      ['si la personne change', 'quel temps employer', 'si la phrase est polie'], 0,
      "Les cinq paires posent la même question. EN: all five pairs ask the same question."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['paire', 'compter'],
};

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Court, ou long',
  frSub: 'Huit phrases, sans le texte',
  lines: [
    ln(E(1514)), ln(E(1515)), ln(E(1518)), ln(E(1519)),
    ln(E(1520)), ln(E(1521)), ln(E(1516)), ln(E(1530)),
  ],
  questions: [
    { q: 'Première phrase : as-tu entendu le mot que ?', opts: ['non', 'oui'], correct: 0,
      why: "« sans frapper » : une seule personne. EN: sans frapper, one person only." },
    { q: 'Deuxième phrase : qui n’a pas entendu ?', opts: ['lui', 'personne d’autre'], correct: 1,
      why: "« sans que personne l'entende » : les autres. EN: the others." },
    { q: 'Troisième phrase : l’expression est...', opts: ['sans', 'afin de', 'afin que'], correct: 1,
      why: "« afin d'arriver avant la nuit » : version courte. EN: afin de, the short version." },
    { q: 'Cinquième phrase : sur qui porte la condition ?', opts: ['sur moi', 'sur toi'], correct: 0,
      why: "« à condition de finir » : celui qui parle. EN: on the speaker." },
    { q: 'Sixième phrase : sur qui porte la condition ?', opts: ['sur moi', 'sur toi'], correct: 1,
      why: "« à condition que tu viennes » : l'autre personne. EN: on the other person." },
    { q: 'Sur les huit, combien sont des versions courtes ?', opts: ['cinq', 'trois', 'quatre'], correct: 2,
      why: "Une sur deux, sauf la dernière qui est longue. EN: every other one, apart from the last." },
  ],
  audio: REC('rec-b1-16-sans-ecoute'), say: REFRAME, terms: ['paire'],
};

const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: 'La note de la buanderie',
  frSub: 'Chaque ligne a été choisie',
  groups: [
    grp('Ce que le gardien a écrit', [
      free('afin de ne pas réveiller le premier étage', 'in order not to wake the first floor', 'lui qui lance, lui qui réveillerait'),
      free('à condition de ranger votre linge avant midi', 'provided you put your washing away before noon', 'vous qui utilisez, vous qui rangez'),
      it(E(1530), 'le technicien passe, nous ne voyons rien'),
      it(E(1529), 'tu viens, ton frère conduit'),
    ], chk('Pourquoi « afin de » et non « afin que » sur la note ?',
      ['la même personne fait les deux actions', 'c’est plus court'], 0,
      "Celui qui lance la machine est celui qui réveillerait l'étage. EN: the person putting the wash on is the one who would wake the floor.")),
    grp('Les deux conditions', [
      it(E(1520), 'j’accepte, je finis'),
      it(E(1521), 'j’accepte, tu viens'),
      it(E(1528), 'tu viens, tu préviens'),
      it('fr.b2.questions-sociales.005', 'le gouvernement lance, le gouvernement réduit'),
    ], chk('Dans « tu peux venir, à condition que ton frère conduise », qui conduit ?',
      ['ton frère', 'toi', 'moi'], 0,
      "Le sujet après que porte la condition. EN: the subject after que carries the condition.")),
    ctl('Le compte', 'Combien de paires fonctionnent exactement pareil ?',
      ['deux', 'cinq', 'toutes les conjonctions'], 1,
      "Pour, avant, sans, afin, à condition. EN: pour, avant, sans, afin, à condition."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['paire', 'deuxsujets'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  sheetId: 'sheet-paires',
  title: 'Le que qui ne sert à rien',
  frSub: 'Six cartes, puis huit phrases',
  rule: {
    title: 'Un que sans nouveau sujet est un que de trop',
    body: "Chaque « que » doit être suivi d'un sujet que la première moitié ne contenait pas. S'il n'y en a pas, passe à la version courte et remets l'infinitif. EN: every que needs a subject the first half did not have.",
  },
  cards: [
    { promptLabel: 'que sans sujet', promptSound: 'Il est sorti sans que dire au revoir.', fr: 'Il est sorti sans dire au revoir.', ipa: '/i.lɛ sɔʁ.ti sɑ̃ diʁ o ʁə.vwaʁ/', tip: "Rien de nouveau derrière que. EN: nothing new behind que." },
    { promptLabel: 'le sujet répété', promptSound: 'Il est sorti sans qu’il dise au revoir.', fr: 'Il est sorti sans dire au revoir.', ipa: '/i.lɛ sɔʁ.ti sɑ̃ diʁ o ʁə.vwaʁ/', tip: "Le même sujet des deux côtés. EN: the same subject on both sides." },
    { promptLabel: 'la version courte de trop', promptSound: 'Il est sorti sans personne l’entendre.', fr: 'Il est sorti sans que personne l’entende.', ipa: '/i.lɛ sɔʁ.ti sɑ̃ kə pɛʁ.sɔn lɑ̃.tɑ̃d/', tip: "Une deuxième personne a besoin de que. EN: a second person needs que." },
    { promptLabel: 'de manquant', promptSound: 'Nous partons tôt afin arriver avant la nuit.', fr: 'Nous partons tôt afin d’arriver avant la nuit.', ipa: '/nu paʁ.tɔ̃ to a.fɛ̃ da.ʁi.ve a.vɑ̃ la nɥi/', tip: "Afin prend de devant l'infinitif. EN: afin takes de before an infinitive." },
    { promptLabel: 'de au lieu de que', promptSound: 'J’accepte, à condition de tu viennes.', fr: 'J’accepte, à condition que tu viennes.', ipa: '/ʒak.sɛpt a kɔ̃.di.sjɔ̃ kə ty vjɛn/', tip: "Une deuxième personne chasse le de. EN: a second person drives out the de." },
    { promptLabel: 'le futur après que', promptSound: 'Afin que les enfants dormiront un peu.', fr: 'Afin que les enfants dorment un peu.', ipa: '/a.fɛ̃ kə le.zɑ̃.fɑ̃ dɔʁm œ̃ pø/', tip: "Ces conjonctions ne prennent pas le futur. EN: these conjunctions do not take the future." },
  ],
  drill: [
    { promptSay: 'Il est entré sans ... frapper.', opts: ['que', 'de', 'rien'], correct: 2 },
    { promptSay: 'Il est sorti sans ... personne l’entende.', opts: ['rien', 'que'], correct: 1 },
    { promptSay: 'Nous partons tôt afin ... arriver avant la nuit.', opts: ['d’', 'que'], correct: 0 },
    { promptSay: 'Nous partons tôt afin ... les enfants dorment.', opts: ['de', 'que'], correct: 1 },
    { promptSay: 'J’accepte, à condition ... finir avant six heures.', opts: ['de', 'que', 'rien'], correct: 0 },
    { promptSay: 'J’accepte, à condition ... tu viennes avec moi.', opts: ['que', 'de'], correct: 0 },
    { promptSay: 'Elle a signé sans ... relire le contrat.', opts: ['de', 'rien', 'que'], correct: 1 },
    { promptSay: 'Le technicien est passé sans ... nous le voyions.', opts: ['rien', 'que'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Un que sans nouveau sujet est un que de trop' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le que en trop fait perdre' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-16-piege-sans'), say: REFRAME, terms: ['paire', 'compter'],
};

const A7_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a7-dictee',
  layer: 'core',
  title: 'Écris les paires que tu entends',
  frSub: 'La version courte et la version longue',
  itemIds: dicteeFor(7),
  audio: AUDIO, say: REFRAME, terms: ['paire'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('sans', 'Il est entré et il n’a pas frappé. Tu écris...',
    ['sans qu’il frappe', 'sans que frapper', 'sans frapper'], 2,
    "Une seule personne, donc la version courte. EN: one person, so the short version."),
  ctl('afin', 'Devant un infinitif, afin s’écrit...',
    ['afin de', 'afin que'], 0,
    "Afin d'arriver, afin que les enfants dorment. EN: afin d'arriver, afin que les enfants dorment."),
  ctl('Le que de trop', 'Derrière chaque que, il te faut...',
    ['un sujet nouveau', 'un infinitif', 'une préposition'], 0,
    "Sinon, la version courte était la bonne. EN: otherwise the short version was the right one."),
], ['paire', 'compter']);

const ACT7: ActDef = {
  act: {
    id: 'act7',
    title: 'Sans, afin, à condition',
    opener: {
      line: "Trois paires de plus, et la question reste la même à chaque fois : ici tu finis la série des cinq. EN: Three more pairs, and the question is the same every time: here you finish the set of five.",
      imageRef: 'lessons/subjonctif-infinitif/act07.jpg',
    },
    sections: [],
    milestone: "Tu tiens les cinq paires, et tu sais qu’un que sans nouveau sujet est un que de trop. EN: You can hold all five pairs, and you know a que with no new subject is one que too many.",
    estScreens: 44,
    restPoints: ['a7-ecoute', 'a7-piege'],
  },
  sections: [A7_LECTURE, A7_CARTES, A7_CONSTRUIRE, A7_ECOUTE, A7_CHOISIR, A7_PIEGE, A7_DICTEE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LES QUATRE SANS PAIRE
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'La règle qui ne marche pas',
  frSub: 'Au cours du soir, la semaine suivante',
  setting: "Le même cours du soir à Bruxelles. Karim est arrivé avec une phrase qu'il a essayé de raccourcir toute la journée.",
  bubbles: [
    { from: 'narrator', fr: 'Karim pose sa feuille sur la table, contrarié.', en: 'Karim puts his sheet on the table, annoyed.' },
    { from: 'user', fr: 'Bien que je sois fatigué, je finis le chapitre. Une seule personne, donc je raccourcis. Bien qu’être fatigué.', en: 'Bien que je sois fatigué, je finis le chapitre. One person, so I shorten it. Bien qu’être fatigué.', warn: 'Cette phrase n’existe pas' },
    { from: 'coach', fr: 'Ça ne se dit pas, et ce n’est pas ta faute. Bien que n’a pas de version courte.', en: 'That is not said, and it is not your fault. Bien que has no short version.' },
    { from: 'user', fr: 'Donc le compte ne marche pas ici.', en: 'So the count does not work here.' },
    { from: 'coach', fr: 'Il marche pour cinq expressions. Quatre autres gardent que quoi qu’il arrive.', en: 'It works for five expressions. Four others keep que whatever happens.', warn: 'bien que, quoique, jusqu’à ce que, pourvu que' },
    { from: 'user', fr: 'Et si je veux vraiment une phrase courte.', en: 'And if I really want a short sentence.' },
    { from: 'coach', fr: 'Tu changes de mot. Malgré la fatigue, je finis le chapitre. Malgré prend un nom, jamais un verbe.', en: 'You change the word. Malgré la fatigue, je finis le chapitre. Malgré takes a noun, never a verb.' },
    { from: 'narrator', fr: 'Karim écrit les quatre expressions dans un cadre, à part du reste.', en: 'Karim writes the four expressions in a box, away from the rest.' },
  ],
  closing: { fr: 'Quatre expressions, un cadre à part, et le compte ne les touche pas.', en: 'Four expressions, in a box of their own, and the count does not reach them.' },
  audio: REC('rec-b1-16-quatre'), say: REFRAME, terms: ['sanspaire', 'compter'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-paires',
  title: 'Quatre expressions à part',
  frSub: 'Elles n’ont pas de version courte',
  hint: 'Quatre cartes. Ici, ne compte pas : garde que.',
  audio: AUDIO, say: REFRAME, terms: ['sanspaire'],
  cards: [
    {
      head: 'bien que et quoique', label: 'although',
      fr: 'Bien que je sois fatigué, je finis le chapitre.',
      sub: '[byehⁿ kuh zhuh swa fa-tee-GAY | zhuh fee-nee luh sha-PEETR]',
      body: "Une seule personne, et « que » reste. Il n'existe aucune forme courte : « bien qu'être fatigué » ne se dit pas. EN: one person, and que stays; there is no short form at all.",
    },
    {
      head: 'jusqu’à ce que', label: 'until',
      fr: 'Attends ici jusqu’à ce que le médecin t’appelle.',
      sub: '[a-tahⁿ-zee-see zhüs-ka suh kuh luh mayd-sehⁿ ta-PEHL]',
      body: "Même avec une seule personne, « que » reste : jusqu'à ce que je finisse. La version courte existe seulement devant un nom. EN: que stays even with one person, and the short form only works before a noun.",
    },
    {
      head: 'pourvu que', label: 'as long as',
      fr: 'Pourvu que le colis arrive avant jeudi, tout ira bien.',
      sub: '[poor-vü kuh luh ko-lee a-REEV a-vahⁿ zheu-DEE]',
      body: "Elle exprime un espoir et elle garde toujours « que ». Pour raccourcir, on change de mot et on dit « si ». EN: it always keeps que, and to shorten it you switch to si.",
    },
    {
      head: 'La sortie de secours', label: 'malgré plus un nom',
      fr: 'Malgré la fatigue, je finis le chapitre.',
      sub: '[mal-gray la fa-TEEG | zhuh fee-nee luh sha-PEETR]',
      body: "Quand tu veux vraiment une phrase courte, change d'expression. « Malgré » prend un nom et jamais un verbe. EN: when you really want a short sentence, switch expression; malgré takes a noun.",
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le cadre à part',
  frSub: 'Ce qui garde que, et ce qui se raccourcit',
  groups: [
    grp('que reste, quel que soit le compte', [
      it(E(1532), 'je suis fatigué, je finis : une personne'),
      it(E(1534), 'la salle est petite, tout le monde tient'),
      it(E(1536), 'reste au chaud, la fièvre tombe'),
      it('fr.b1.routines.089', 'je suis pressé, je prends le temps'),
    ], chk('Combien de personnes agissent dans la première phrase ?',
      ['deux', 'une seule'], 1,
      "Et « que » reste quand même : bien que n'a pas de version courte. EN: and que stays anyway.")),
    grp('Les cinq paires, pour comparer', [
      it(E(1504), 'pour, version courte'),
      it(E(1506), 'avant de, version courte'),
      it(E(1148), 'bien que, sans version courte'),
      it(E(1338), 'pourvu que, sans version courte'),
    ], chk('Qu’est-ce qui sépare les deux premières des deux dernières ?',
      ['le sens', 'l’existence d’une forme sans que', 'le registre'], 1,
      "Pour et avant ont une version courte, bien que et pourvu que n'en ont pas. EN: the first two have a short version and the last two do not.")),
    ctl('La sortie', 'Tu veux vraiment raccourcir « bien que je sois fatigué ». Tu écris...',
      ['bien que fatiguer', 'bien qu’être fatigué', 'malgré la fatigue'], 2,
      "Tu changes d'expression et tu passes à un nom. EN: you change expression and move to a noun."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['sanspaire', 'paire'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  title: 'Les quatre dans des phrases entières',
  examples: [
    ex(E(1544), 'bien que, avec nous des deux côtés'),
    ex(E(1545), 'quoique, avec ce'),
    ex(E(1546), 'jusqu’à ce que, avec on'),
    ex(E(1547), 'pourvu que, avec il impersonnel'),
    ex('fr.b1.cuisine.018', 'jusqu’à ce que, dans une recette'),
    ex('fr.b1.dictee.042', 'pourvu que, en tête de phrase'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['sanspaire'],
};

const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Compter, ou ne pas compter',
  frSub: 'Deux cadres, huit phrases',
  groups: [
    grp('Ici, compte', [
      it(E(1496), 'pour : une personne'),
      it(E(1497), 'pour que : deux personnes'),
      it(E(1514), 'sans : une personne'),
      it(E(1515), 'sans que : deux personnes'),
    ], chk('Ces quatre phrases suivent-elles la règle du compte ?',
      ['oui, toutes les quatre', 'non, aucune'], 0,
      "Pour et sans ont chacun leurs deux versions. EN: pour and sans each have their two versions.")),
    grp('Ici, ne compte pas', [
      it(E(1532), 'bien que, une personne'),
      it(E(1533), 'bien que, deux personnes'),
      it(E(1554), 'jusqu’à ce que, deux personnes'),
      it('fr.b1.dictee.055', 'bien que, puis il faut plus infinitif'),
    ], chk('Dans la dernière phrase, pourquoi « il faut réserver » n’a-t-il pas de que ?',
      ['personne n’est nommé', 'bien que l’a déjà pris', 'c’est une erreur'], 0,
      "Les deux moitiés se décident séparément. EN: the two halves are decided separately.")),
    ctl('Le réflexe', 'Tu vois bien que, quoique, jusqu’à ce que ou pourvu que. Tu...',
      ['comptes les sujets', 'gardes que et passes au verbe', 'cherches la version courte'], 1,
      "Ces quatre-là sont réglées d'avance. EN: these four are settled in advance."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['sanspaire', 'compter'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de raccourci',
  errors: [
    {
      wrong: 'Bien qu’être fatigué, je finis le chapitre.',
      right: 'Bien que je sois fatigué, je finis le chapitre.',
      why: "Normal : la règle du compte marche pour cinq expressions et tu viens de l'appliquer à la sixième. Celle-ci n'a pas de forme courte. EN: the count rule works for five expressions and this is not one of them.",
    },
    {
      wrong: 'Malgré je sois fatigué, je finis le chapitre.',
      right: 'Malgré la fatigue, je finis le chapitre.',
      why: "« Malgré » est bien la sortie de secours, et elle prend un nom. Devant un verbe, il faut revenir à « bien que ». EN: malgré is the way out and it takes a noun.",
    },
    {
      wrong: 'Attends jusqu’à ce que d’être appelé.',
      right: 'Attends jusqu’à ce que le médecin t’appelle.',
      why: "Tu as senti qu'une version courte devait exister. Elle existe seulement devant un nom : jusqu'à l'appel. EN: the short version only works in front of a noun.",
    },
    {
      wrong: 'Pourvu que le colis arrivera avant jeudi.',
      right: 'Pourvu que le colis arrive avant jeudi.',
      why: "L'idée est dans l'avenir et le futur ne passe pas derrière ces conjonctions. Ce qui suit est une forme de subjonctif. EN: the future never goes behind these conjunctions.",
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['sanspaire', 'paire'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('bien que', 'Une seule personne agit après bien que. Tu écris...',
    ['bien qu’être', 'bien que je sois'], 1,
    "Aucune version courte n'existe. EN: no short version exists."),
  ctl('La sortie', 'Pour raccourcir, tu passes à...',
    ['sans plus un verbe', 'avant de plus un verbe', 'malgré plus un nom'], 2,
    "Malgré la fatigue, malgré la pluie. EN: malgré la fatigue, malgré la pluie."),
  ctl('Combien', 'Combien d’expressions gardent toujours que ?',
    ['quatre', 'toutes', 'deux'], 0,
    "Bien que, quoique, jusqu'à ce que, pourvu que. EN: bien que, quoique, jusqu'à ce que, pourvu que."),
], ['sanspaire', 'compter']);

const ACT8: ActDef = {
  act: {
    id: 'act8',
    title: 'Les quatre sans paire',
    opener: {
      line: "Quatre expressions refusent de se raccourcir, et la règle ne les touche pas : ici tu apprends lesquelles. EN: Four expressions refuse to be shortened and the rule does not reach them: here you learn which.",
      imageRef: 'lessons/subjonctif-infinitif/act08.jpg',
    },
    sections: [],
    milestone: "Tu reconnais les quatre expressions qui gardent toujours que, et tu sais par quoi les remplacer si tu veux une phrase courte. EN: You recognise the four expressions that always keep que, and you know what to swap in for a short sentence.",
    estScreens: 36,
    restPoints: ['a8-exemples'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_CONSTRUIRE, A8_EXEMPLES, A8_CHOISIR, A8_ERREURS, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — CHOISIR VITE
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'Deux questions, pas trois',
  frSub: 'Dans la voiture, entre deux rendez-vous',
  setting: "Un mardi après-midi, dans une voiture arrêtée devant une banque. Sofia dicte un message à Karim, qui écrit sur son téléphone.",
  bubbles: [
    { from: 'narrator', fr: 'Sofia dicte, Karim écrit, et il s’arrête à chaque verbe.', en: 'Sofia dictates, Karim writes, and he stops at every verb.' },
    { from: 'coach', fr: 'Je passe à la banque avant... qu’elle ferme.', en: 'I am stopping at the bank before... it shuts.' },
    { from: 'user', fr: 'J’ai mis avant de. Je recommence.', en: 'I put avant de. I will start again.', warn: 'Il a choisi avant de compter' },
    { from: 'coach', fr: 'Pose-toi deux questions, et une seule fois. Qui ferme. Pas moi, donc que.', en: 'Ask yourself two questions, and only once. Who shuts. Not me, so que.' },
    { from: 'user', fr: 'Et la deuxième question.', en: 'And the second question.' },
    { from: 'coach', fr: 'Elle ne sert que s’il n’y a pas de que. Quelle petite lettre devant l’infinitif.', en: 'It only serves if there is no que. Which little word goes before the infinitive.' },
    { from: 'user', fr: 'Deux questions, dans cet ordre, et je n’ai plus à réfléchir au milieu de la phrase.', en: 'Two questions, in that order, and I no longer have to think in the middle of the sentence.' },
    { from: 'narrator', fr: 'Il finit le message en une minute, sans revenir en arrière.', en: 'He finishes the message in a minute without going back.' },
  ],
  closing: { fr: 'Qui agit des deux côtés. Puis, seulement si besoin, quelle petite lettre.', en: 'Who acts on each side. Then, only if needed, which little word.' },
  audio: REC('rec-b1-16-voiture'), say: REFRAME, terms: ['compter', 'petiteLettre'],
};

const A9_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-table',
  layer: 'core',
  sheetId: 'sheet-compter',
  title: 'Six phrases, six décisions',
  cols: ['Début de phrase', 'Qui agit ensuite', 'Ce que tu écris'],
  rows: [
    {
      cells: ['Je passe à la banque avant...', 'moi', 'avant de rentrer'],
      say: 'Je passe à la banque avant de rentrer.',
      detail: { title: 'avant de', body: "Je passe et je rentre : rien de nouveau, donc rien à ouvrir. EN: nothing new, so nothing to open.", say: 'Je passe à la banque avant qu’elle ferme.' },
    },
    {
      cells: ['Ils ont accepté...', 'eux', 'de repousser la réunion'],
      say: 'Ils ont accepté de repousser la réunion.',
      detail: { title: 'accepter de', body: "Ils acceptent et ils repoussent : une seule personne, et accepter prend de. EN: one person, and accepter takes de.", say: 'Ils ont accepté que la réunion soit repoussée.' },
    },
    {
      cells: ['Nous restons...', 'le dernier client', 'jusqu’à ce qu’il sorte'],
      say: 'Nous restons jusqu’à ce que le dernier client sorte.',
      detail: { title: 'jusqu’à ce que', body: "Ici, même avec une seule personne, « que » resterait. EN: here que would stay even with one person.", say: 'Nous restons jusqu’à ce que le dernier client sorte.' },
    },
    {
      cells: ['Il a fermé la porte...', 'lui', 'sans faire de bruit'],
      say: 'Il a fermé la porte sans faire de bruit.',
      detail: { title: 'sans', body: "Il ferme et il ne fait pas de bruit : une personne. EN: he shuts and he makes no noise.", say: 'Il a fermé la porte sans que le chien bouge.' },
    },
    {
      cells: ['Elle a peur...', 'la route', 'que la route soit glissante'],
      say: 'Elle a peur que la route soit glissante.',
      detail: { title: 'avoir peur que', body: "La peur porte sur autre chose qu'elle, donc « que » et pas « de ». EN: the fear is about something else, so que and not de.", say: 'Elle a peur de conduire sous la neige.' },
    },
    {
      cells: ['Nous avons réussi...', 'nous', 'à tout ranger'],
      say: 'Nous avons réussi à tout ranger avant leur arrivée.',
      detail: { title: 'réussir à', body: "Une personne, et la petite lettre est « à » parce que le verbe l'impose. EN: one person, and the little word is à because the verb imposes it.", say: 'Nous avons réussi à ce que tout le monde vienne.' },
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['compter', 'petiteLettre'],
};

const A9_MELANGE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-melange',
  layer: 'core',
  size: 'lg',
  title: 'Tout mélangé',
  frSub: 'Huit phrases, toutes les familles',
  groups: [
    grp('Les versions courtes', [
      it(E(1550), 'avant de, une personne'),
      it(E(1552), 'accepter de, une personne'),
      it(E(1555), 'sans, une personne'),
      it(E(1557), 'peur de, une personne'),
    ], chk('Qu’ont en commun ces quatre phrases ?',
      ['elles sont toutes courtes par hasard', 'elles parlent toutes de la même personne des deux côtés', 'elles sont toutes au passé'], 1,
      "Le compte donne un, donc aucune n'ouvre de deuxième moitié. EN: the count gives one, so none opens a second half.")),
    grp('Les versions longues', [
      it(E(1551), 'avant que, la banque ferme'),
      it(E(1553), 'accepter que, la réunion est repoussée'),
      it(E(1556), 'sans que, le chien bouge'),
      it(E(1558), 'peur que, la route est glissante'),
    ], chk('Dans « il a fermé la porte sans que le chien bouge », qui bouge ?',
      ['lui', 'personne', 'le chien'], 2,
      "Le sujet après que est la deuxième personne. EN: the subject after que is the second person.")),
    ctl('L’intrus', 'Une des huit garde « que » même avec un seul sujet. Laquelle ?',
      ['celle avec jusqu’à ce que', 'celle avec avant', 'celle avec sans'], 0,
      "Jusqu'à ce que n'a pas de version courte. EN: jusqu'à ce que has no short version."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['compter', 'sanspaire'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Huit phrases, deux secondes chacune',
  frSub: 'Décide en écoutant',
  lines: [
    ln(E(1550)), ln(E(1551)), ln(E(1552)), ln(E(1553)),
    ln(E(1555)), ln(E(1556)), ln(E(1562)), ln(E(1554)),
  ],
  questions: [
    { q: 'Première phrase : combien de personnes agissent ?', opts: ['une', 'deux'], correct: 0,
      why: "« avant de rentrer » : je passe et je rentre. EN: I stop and I go home." },
    { q: 'Deuxième phrase : qui ferme ?', opts: ['moi', 'la banque'], correct: 1,
      why: "« avant qu'elle ferme » : la banque. EN: the bank." },
    { q: 'Quatrième phrase : la forme après accepté est...', opts: ['que plus subjonctif', 'de plus infinitif'], correct: 0,
      why: "« accepté que la réunion soit repoussée ». EN: accepté que la réunion soit repoussée." },
    { q: 'Sixième phrase : qui bouge ?', opts: ['lui', 'le chien'], correct: 1,
      why: "« sans que le chien bouge ». EN: sans que le chien bouge." },
    { q: 'Septième phrase : la petite lettre est...', opts: ['rien', 'à', 'de'], correct: 1,
      why: "« réussi à tout ranger ». EN: réussi à tout ranger." },
    { q: 'Huitième phrase : pourquoi y a-t-il un que ?', opts: ['deux personnes', 'l’expression garde toujours que', 'les deux à la fois'], correct: 2,
      why: "« jusqu'à ce que le dernier client sorte » : deux personnes, et l'expression garde que de toute façon. EN: two people, and the expression keeps que anyway." },
  ],
  audio: REC('rec-b1-16-tri-ecoute'), say: REFRAME, terms: ['compter', 'paire'],
};

const A9_FLASHCARDS: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a9-flashcards',
  layer: 'core',
  title: 'Les blocs, de mémoire',
  frSub: 'Huit cartes',
  cards: [
    { front: 'I want to leave', back: 'je veux partir', say: 'Je veux partir avant six heures.' },
    { front: 'I want you to leave', back: 'je veux que tu partes', say: 'Je veux que tu partes avant six heures.' },
    { front: 'glad to see you', back: 'content de te voir', say: 'Je suis content de te voir.' },
    { front: 'glad you are coming', back: 'content que tu viennes', say: 'Je suis content que tu viennes samedi.' },
    { front: 'before leaving', back: 'avant de partir', say: 'Je bois un café avant de partir.' },
    { front: 'before you leave', back: 'avant que tu partes', say: 'Préviens-moi avant que tu partes.' },
    { front: 'so that you have the car', back: 'pour que tu aies la voiture', say: 'Je pars tôt pour que tu aies la voiture.' },
    { front: 'although I am tired', back: 'bien que je sois fatigué', say: 'Bien que je sois fatigué, je finis le chapitre.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['memesujet', 'deuxsujets'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  sheetId: 'sheet-compter',
  title: 'Choisir sans regarder la forme',
  frSub: 'Six cartes, puis huit phrases',
  rule: {
    title: 'La forme vient en dernier',
    body: "Un apprenant hésite parce qu'il cherche la forme du verbe avant d'avoir décidé s'il en faut une. Décide d'abord la structure, puis écris. EN: decide the structure first, then write the verb.",
  },
  cards: [
    { promptLabel: 'la forme d’abord', promptSound: 'Je passe à la banque avant de qu’elle ferme.', fr: 'Je passe à la banque avant qu’elle ferme.', ipa: '/ʒə pas a la bɑ̃k a.vɑ̃ kɛl fɛʁm/', tip: "Une seule version à la fois. EN: one version at a time." },
    { promptLabel: 'le compte sauté', promptSound: 'Ils ont accepté que repousser la réunion.', fr: 'Ils ont accepté de repousser la réunion.', ipa: '/il.zɔ̃.tak.sɛp.te də ʁə.pu.se la ʁe.y.njɔ̃/', tip: "Eux, et eux seuls. EN: them, and only them." },
    { promptLabel: 'la lettre oubliée', promptSound: 'Nous avons réussi tout ranger.', fr: 'Nous avons réussi à tout ranger.', ipa: '/nu.za.vɔ̃ ʁe.y.si a tu ʁɑ̃.ʒe/', tip: "Réussir garde son à. EN: réussir keeps its à." },
    { promptLabel: 'la règle appliquée trop loin', promptSound: 'Nous restons jusqu’à sortir le dernier client.', fr: 'Nous restons jusqu’à ce que le dernier client sorte.', ipa: '/nu ʁɛs.tɔ̃ ʒys.ka sə kə lə dɛʁ.nje kli.ɑ̃ sɔʁt/', tip: "Celle-là n'a pas de version courte. EN: that one has no short version." },
    { promptLabel: 'que sans sujet', promptSound: 'Elle a peur que être en retard.', fr: 'Elle a peur d’être en retard.', ipa: '/ɛl a pœʁ dɛtʁ ɑ̃ ʁə.taʁ/', tip: "Rien de nouveau derrière que. EN: nothing new behind que." },
    { promptLabel: 'le de en trop', promptSound: 'Il vaut mieux de demander.', fr: 'Il vaut mieux demander.', ipa: '/il vo mjø də.mɑ̃.de/', tip: "Il vaut mieux colle l'infinitif. EN: il vaut mieux takes the infinitive directly." },
  ],
  drill: [
    { promptSay: 'Je passe à la banque avant ... elle ferme.', opts: ['qu’', 'de'], correct: 0 },
    { promptSay: 'Ils ont accepté ... repousser la réunion.', opts: ['que', 'de'], correct: 1 },
    { promptSay: 'Nous avons réussi ... tout ranger.', opts: ['à', 'de', 'que'], correct: 0 },
    { promptSay: 'Nous restons ... le dernier client sorte.', opts: ['jusqu’à ce que', 'jusqu’à'], correct: 0 },
    { promptSay: 'Elle a peur ... conduire sous la neige.', opts: ['que', 'de'], correct: 1 },
    { promptSay: 'Il a fermé la porte sans ... le chien bouge.', opts: ['que', 'rien'], correct: 0 },
    { promptSay: 'Il vaut mieux ... demander.', opts: ['de', 'rien', 'que'], correct: 1 },
    { promptSay: 'Elle a peur ... la route soit glissante.', opts: ['de', 'que'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'La forme vient en dernier' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que l’hésitation fait écrire' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-16-piege-tri'), say: REFRAME, terms: ['compter', 'petiteLettre'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Première question', 'Devant une phrase à écrire, tu te demandes d’abord...',
    ['quelle petite lettre', 'quel temps', 'qui agit des deux côtés'], 2,
    "Le compte, toujours en premier. EN: the count, always first."),
  ctl('Deuxième question', 'La deuxième question ne sert que si...',
    ['il n’y a pas de que', 'le verbe est irrégulier', 'la phrase est longue'], 0,
    "S'il n'y a pas d'infinitif, il n'y a pas de petite lettre. EN: no infinitive, no little word."),
  ctl('L’exception', 'Tu vois « jusqu’à ce que ». Tu comptes les sujets ?',
    ['non, que reste de toute façon', 'oui, comme d’habitude'], 0,
    "Les quatre de l'acte 8 sont réglées d'avance. EN: the four from act 8 are settled in advance."),
], ['compter', 'sanspaire']);

const ACT9: ActDef = {
  act: {
    id: 'act9',
    title: 'Choisir vite',
    opener: {
      line: "Deux questions posées dans le bon ordre suffisent à écrire n’importe laquelle de ces phrases : ici tu les enchaînes. EN: Two questions in the right order are enough to write any of these sentences: here you chain them.",
      imageRef: 'lessons/subjonctif-infinitif/act09.jpg',
    },
    sections: [],
    milestone: "Tu décides la structure avant d’écrire le verbe, et tu ne reviens plus en arrière au milieu d’une phrase. EN: You decide the structure before writing the verb, and you no longer go back mid-sentence.",
    estScreens: 40,
    restPoints: ['a9-ecoute'],
  },
  sections: [A9_HISTOIRE, A9_TABLE, A9_MELANGE, A9_ECOUTE, A9_FLASHCARDS, A9_PIEGE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — CE QUE L’ANGLAIS TE SOUFFLE
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Six phrases au tableau',
  frSub: 'Toutes écrites par des anglophones',
  text: READING_ANGLAIS,
  glossary: [
    { word: 'ne les efface pas', en: 'does not rub them out', note: "Elle les laisse au tableau pour qu'on les regarde. EN: she leaves them up to be looked at." },
    { word: 'intentions', en: 'intentions', note: "Ce que chaque personne voulait dire. EN: what each person meant to say." },
    { word: 'de trop', en: 'one too many', note: "Un « que » qui n'ouvre rien, parce que la personne n'a pas changé. EN: a que that opens nothing." },
  ],
  questions: [
    { q: 'Que manquait-il dans quatre des six phrases ?', a: "Un sujet et un verbe conjugué derrière « que »." },
    { q: 'Que manquait-il dans la cinquième ?', a: "La petite préposition « de » : « je suis content de te voir »." },
    { q: 'Qu’y avait-il en trop dans la dernière ?', a: "Un « que ». La personne qui veut et la personne qui part étaient la même, donc « je veux partir »." },
    { q: 'Pourquoi la professeure dit-elle que les intentions étaient claires ?', a: "Parce que l'anglais a donné le sens. Ce qu'il n'a pas donné, c'est la forme française." },
  ],
  audio: REC('rec-b1-16-tableau-six'), say: REFRAME, terms: ['anglais', 'compter'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-anglais',
  title: 'Trois erreurs sorties de l’anglais',
  frSub: 'La même différence, trois fois',
  hint: 'Quatre cartes. Chaque erreur vient du même endroit.',
  audio: AUDIO, say: REFRAME, terms: ['anglais', 'deuxsujets'],
  cards: [
    {
      head: 'La personne posée là', label: 'I want you to go',
      fr: 'Je veux que tu partes.',
      sub: '[zhuh veu kuh tü PART]',
      body: "L'anglais met la personne entre les deux verbes. Le français n'a pas cette place : il ouvre avec « que » et lui donne un sujet. EN: French has no slot there, so it opens with que instead.",
    },
    {
      head: 'Le que sans sujet', label: 'I want to go',
      fr: 'Je veux partir.',
      sub: '[zhuh veu par-TEER]',
      body: "Après « que », personne ne reste sous-entendu. S'il n'y a pas de sujet à mettre, c'est qu'il ne fallait pas de « que ». EN: after que nobody stays implied, so with no subject there was no que to write.",
    },
    {
      head: 'Le que en trop', label: 'before leaving',
      fr: 'avant de partir · avant que tu partes',
      sub: '[a-vahⁿ duh par-TEER] · [a-vahⁿ kuh tü PART]',
      body: "L'anglais dit « before leaving » sans dire qui part, donc il ne t'aide pas à choisir. C'est toi qui décides, en comptant. EN: English does not say who leaves, so it cannot choose for you.",
    },
    {
      head: 'La petite lettre absente', label: 'I am glad to see you',
      fr: 'Je suis content de te voir.',
      sub: '[zhuh swee kohⁿ-tahⁿ duh tuh VWAR]',
      body: "L'anglais colle « to » et le français demande « de ». Les deux ne sont pas au même endroit et ne servent pas à la même chose. EN: English has to and French wants de, and they are not the same thing.",
    },
  ],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Les quatre phrases du tableau',
  errors: [
    {
      wrong: 'Je veux toi venir samedi.',
      right: 'Je veux que tu viennes samedi.',
      why: "Normal : c'est exactement l'ordre de l'anglais, et il est clair. Le français ne place pas une personne entre deux verbes. EN: it is exactly the English order, and French has no slot for a person there.",
    },
    {
      wrong: 'Il veut que je partir tôt.',
      right: 'Il veut que je parte tôt.',
      why: "Tu as trouvé le que et le sujet. Il reste à conjuguer : après un sujet, jamais d'infinitif. EN: after a subject, never an infinitive.",
    },
    {
      wrong: 'Avant tu pars, ferme la porte.',
      right: 'Avant que tu partes, ferme la porte.',
      why: "En anglais « before you leave » n'a besoin de rien. En français, « avant » devant une phrase entière prend « que ». EN: before a whole clause, avant takes que.",
    },
    {
      wrong: 'Je suis content te voir.',
      right: 'Je suis content de te voir.',
      why: "L'anglais met « to » devant le verbe et tu l'as traduit par rien. Content demande « de ». EN: English puts to in front of the verb and content wants de.",
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['anglais', 'petiteLettre'],
};

const A10_MELANGE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-melange',
  layer: 'core',
  size: 'lg',
  title: 'Traduire l’idée, pas les mots',
  frSub: 'Six phrases anglaises',
  groups: [
    grp('Ce que l’anglais ne dit pas', [
      it(E(1566), 'avant de sortir : l’anglais ne dit pas qui'),
      it(E(1567), 'avant que tu sortes : le français doit le dire'),
      it(E(1568), 'la raison, en une ligne'),
      it('fr.b1.journalisme.005', 'avant de partager : la même personne'),
    ], chk('Pourquoi « before leaving » ne t’aide-t-il pas à choisir ?',
      ['parce qu’il est trop court', 'parce qu’il ne nomme personne', 'parce qu’il est au participe'], 1,
      "Sans personne nommée, il n'y a rien à compter. EN: with nobody named, there is nothing to count.")),
    grp('La personne mise comme en anglais', [
      it(E(1564), 'la phrase juste, et l’erreur à côté'),
      it(E(1565), 'la différence, en une ligne'),
      it(E(1570), 'demander de, une personne'),
      it(E(1571), 'demander que, deux personnes'),
    ], chk('Après « que », qu’est-ce qui ne vient jamais ?',
      ['un adverbe', 'un sujet', 'un infinitif'], 2,
      "Il faut un sujet, puis un verbe conjugué. EN: a subject, then a finished verb.")),
    ctl('Le réflexe', 'Tu traduis une phrase anglaise. Tu commences par...',
      ['compter les personnes', 'chercher le temps', 'chercher chaque mot'], 0,
      "L'anglais donne le sens, pas la forme. EN: English gives you the meaning, not the shape."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['anglais', 'compter'],
};

const A10_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a10-hacks',
  layer: 'core',
  title: 'Trois astuces quand tu hésites',
  hacks: [
    {
      hack: 'Dis la phrase en anglais et cherche le mot to. S’il y a une personne juste devant, il te faut que.',
      why: "I want TO go n'a personne devant to ; I want YOU to go en a une. EN: a person in front of to means you need que.",
    },
    {
      hack: 'Écris le que, puis demande-toi qui tu vas mettre derrière. Si tu ne trouves personne, efface-le.',
      why: `Un que sans nouveau sujet est un que de trop. EN: ${B114_REFRAME_EN}`,
    },
    {
      hack: 'Devant content, peur, important, réussir et hésiter, écris la petite lettre avant le verbe.',
      why: "Elle appartient à l'expression et se perd toujours en dernier. EN: it belongs to the expression and is the last thing to be dropped.",
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['anglais', 'petiteLettre'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-anglais',
  title: 'Ce qu’il faut vérifier avant d’envoyer',
  points: [
    "Chaque que doit avoir un sujet nouveau derrière lui. EN: every que needs a new subject behind it.",
    "Chaque infinitif doit avoir la même personne des deux côtés. EN: every infinitive needs the same person on both sides.",
    "Content, peur et important gardent leur de ; réussir et hésiter gardent leur à. EN: those expressions keep their little word.",
    "Bien que, quoique, jusqu'à ce que et pourvu que gardent que quoi qu'il arrive. EN: those four keep que whatever happens.",
  ],
  audio: AUDIO, say: REFRAME, terms: ['anglais', 'sanspaire'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('I want you to go', 'En français, tu écris...',
    ['je veux toi partir', 'je veux que tu partes', 'je veux te partir'], 1,
    "Le français ouvre une moitié de phrase. EN: French opens a half sentence."),
  ctl('Après que', 'Derrière que, tu ne mets jamais...',
    ['un sujet', 'un infinitif'], 1,
    "Un sujet, puis un verbe conjugué. EN: a subject, then a finished verb."),
  ctl('Before leaving', 'L’anglais te dit-il qui part ?',
    ['non', 'oui'], 0,
    "C'est à toi de décider, en comptant. EN: it is for you to decide, by counting."),
], ['anglais', 'compter']);

const ACT10: ActDef = {
  act: {
    id: 'act10',
    title: 'Ce que l’anglais te souffle',
    opener: {
      line: "Trois erreurs sortent toutes du même endroit, et ce sont les trois que tu écris : ici tu les prends une par une. EN: Three errors all come from one place, and they are the three you write: here you take them one by one.",
      imageRef: 'lessons/subjonctif-infinitif/act10.jpg',
    },
    sections: [],
    milestone: "Tu traduis l’idée d’une phrase anglaise et non ses mots, et tu vois arriver le que de trop avant de l’écrire. EN: You translate the idea of an English sentence rather than its words, and you see the extra que coming before you write it.",
    estScreens: 34,
    restPoints: ['a10-melange'],
  },
  sections: [A10_LECTURE, A10_CARTES, A10_ERREURS, A10_MELANGE, A10_HACKS, A10_FOCUS, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — ÉCRIRE LES DEUX FORMES
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The model the learner will imitate in the task. */
const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message de Rémi',
  frSub: 'Le modèle que tu vas imiter',
  text: READING_MODELE,
  glossary: [
    { word: 'entrepôt', en: 'warehouse', note: "Le grand bâtiment où on garde les marchandises. EN: the big building where goods are stored." },
    { word: 'compteur', en: 'meter', note: "L'appareil qui compte l'eau consommée dans un logement. EN: the device that counts the water used." },
    { word: 'quoi que ce soit', en: 'anything at all', note: "N'importe quoi, même une petite chose. EN: anything at all, however small." },
  ],
  questions: [
    { q: 'Combien de fois Rémi ouvre-t-il avec « que » ?', a: "Six fois : il faut que nous soyons, content que tu puisses, il faut que le propriétaire l'ait, pour qu'il nous aide, avant que tu partes, pour que je descende." },
    { q: 'Où garde-t-il la version courte ?', a: "Je voudrais partir, pour éviter le pont, je n'arrive pas à porter, avant de monter, demandé à Karim de passer, merci d'avoir accepté de venir." },
    { q: 'Pourquoi « bien que le camion soit petit » garde-t-il son « que » ?', a: "Parce que bien que n'a pas de version courte. Ce n'est pas le compte qui décide ici." },
    { q: 'Quelles petites lettres apparaissent devant un infinitif ?', a: "« à » après arriver, « de » après demander et après merci. Pour et avant de portent les leurs." },
  ],
  audio: REC('rec-b1-16-message'), say: REFRAME, terms: ['compter', 'paire'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-compter',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Le plan du message',
  steps: [
    "Écris d’abord ce qui doit arriver, en une ligne par point, sans expression autour. EN: write what has to happen, one line per point, with no expression around it.",
    "Pour chaque ligne, note qui fait l’action : toi, ou quelqu’un d’autre. EN: for each line, note who does the action: you, or somebody else.",
    "Quand c’est quelqu’un d’autre, ouvre avec que et donne-lui un sujet. EN: when it is somebody else, open with que and give them a subject.",
    "Quand c’est toi, garde l’infinitif et vérifie la petite lettre devant. EN: when it is you, keep the infinitive and check the little word in front of it.",
    "Relis en cherchant les que : chacun doit avoir un sujet nouveau derrière lui. EN: reread looking for the que; each one needs a new subject behind it.",
  ],
  audio: AUDIO, say: REFRAME, terms: ['compter', 'petiteLettre', 'deuxsujets'],
};

const A11_CAS: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-cas',
  layer: 'core',
  title: 'Quatre messages, quatre décisions',
  cases: [
    { situation: 'Un message au groupe', fr: 'Il faut que nous soyons à l’entrepôt à neuf heures.', en: 'We have to be at the warehouse at nine.' },
    { situation: 'Une réponse à une invitation', fr: 'Je suis content que tu puisses venir samedi.', en: 'I am glad you can come on Saturday.' },
    { situation: 'Une note laissée sur la table', fr: 'Préviens-moi avant de partir, pour que je descende ouvrir.', en: 'Let me know before you set off, so that I can come down and open up.' },
    { situation: 'Un courriel au propriétaire', fr: 'Bien que le camion soit petit, tout devrait entrer en deux voyages.', en: 'Although the van is small, everything should fit in two trips.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['paire', 'sanspaire'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Au téléphone avec le loueur',
  frSub: 'Six tours, à voix haute',
  setting: "Tu appelles le loueur de camionnettes de la zone industrielle pour samedi matin. Madame Roy décroche.",
  turns: [
    {
      ai: 'Location Roy, bonjour.', en: 'Roy hire, good morning.',
      user: 'Bonjour madame. Je voudrais réserver une camionnette pour samedi matin.',
      userEn: 'Hello madam. I would like to book a van for Saturday morning. (One subject, so a bare infinitive after vouloir.)',
      alts: [
        { fr: 'Bonjour madame. J’espère réserver une camionnette pour samedi.', en: 'Hello madam. I am hoping to book a van for Saturday.' },
        { fr: 'Bonjour madame. Il faudrait que je réserve une camionnette pour samedi.', en: 'Hello madam, I ought to book a van for Saturday. (A named person, so que.)' },
      ],
    },
    {
      ai: 'Elle doit être rendue à midi, c’est possible pour vous ?', en: 'It has to be back by noon, does that work for you?',
      user: 'Oui. Il faut que nous soyons à l’entrepôt à neuf heures, alors.',
      userEn: 'Yes. So we have to be at the warehouse by nine. (Two people named, so que.)',
      alts: [
        { fr: 'Oui. Il faut partir tôt, dans ce cas.', en: 'Yes. We will have to leave early in that case.' },
        { fr: 'Oui. Je vais demander à mes amis d’arriver à neuf heures.', en: 'Yes. I will ask my friends to arrive at nine. (Demander à quelqu’un de, with its de.)' },
      ],
    },
    {
      ai: 'Il faut un permis de plus de trois ans pour ce modèle.', en: 'You need a licence held for more than three years for this model.',
      user: 'Le mien date de dix ans. Bien que je conduise peu, je suis à l’aise avec un camion.',
      userEn: 'Mine is ten years old. Although I do not drive much, I am comfortable with a van. (Bien que keeps que with one subject.)',
      alts: [
        { fr: 'Le mien date de dix ans. Malgré le manque de pratique, ça ira.', en: 'Mine is ten years old. In spite of the lack of practice, it will be fine.' },
        { fr: 'Le mien date de dix ans, donc il n’y a pas de problème.', en: 'Mine is ten years old, so there is no problem.' },
      ],
    },
    {
      ai: 'Pensez à faire le plein avant de la ramener.', en: 'Remember to fill the tank before bringing it back.',
      user: 'D’accord. Je passerai à la station avant de rendre les clés.',
      userEn: 'All right. I will stop at the petrol station before handing back the keys. (One subject, so avant de.)',
      alts: [
        { fr: 'D’accord. Je ferai le plein avant que vous fermiez.', en: 'All right. I will fill up before you close. (Two subjects, so avant que.)' },
        { fr: 'D’accord. Il faut que je fasse le plein samedi matin, alors.', en: 'All right, so I have to fill up on Saturday morning.' },
      ],
    },
    {
      ai: 'Le portail de la cour ferme à midi pile.', en: 'The yard gate shuts at twelve exactly.',
      user: 'Alors je préviendrai mes amis pour qu’ils arrivent avant onze heures et demie.',
      userEn: 'Then I will tell my friends so that they arrive before half past eleven. (Two subjects, so pour que.)',
      alts: [
        { fr: 'Alors je partirai plus tôt pour éviter de vous faire attendre.', en: 'Then I will leave earlier to avoid keeping you waiting. (One subject, so pour plus an infinitive.)' },
        { fr: 'Alors il faut que tout le monde soit là à onze heures.', en: 'Then everybody has to be there at eleven.' },
      ],
    },
    {
      ai: 'Je vous envoie la confirmation par courriel ce soir.', en: 'I will send you the confirmation by email this evening.',
      user: 'Merci. Je suis content que ce soit réglé avant le week-end.',
      userEn: 'Thank you. I am glad it is settled before the weekend. (Two subjects, so content que.)',
      alts: [
        { fr: 'Merci. Je suis content d’avoir trouvé une camionnette si vite.', en: 'Thank you. I am glad to have found a van so quickly. (One subject, so content de.)' },
        { fr: 'Merci beaucoup. Il faut juste que je vous confirme l’heure jeudi.', en: 'Thank you very much. I just have to confirm the time to you on Thursday.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['compter', 'paire', 'sanspaire'],
};

/** THE GRADED TASK. Written, 110 to 150 words, `skill: 'PE'`, because the
 *  branch is a decision taken before the sentence exists and writing is where
 *  a learner can be caught taking it. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Organise quelque chose à plusieurs',
  frSub: 'Mission écrite',
  brief: "Tu organises quelque chose avec d'autres personnes : un déménagement, un week-end, une fête, un chantier chez toi. Écris le message que tu envoies au groupe. Dis ce que TU vas faire, ce que les AUTRES doivent faire, pourquoi, et ce qui est difficile malgré tout. Adresse-toi à des gens que tu tutoies.",
  briefEn: 'You are organising something with other people: a move, a weekend away, a party, work on your home. Write the message you send to the group, saying what YOU will do, what the OTHERS have to do, why, and what is difficult all the same.',
  produce: "Écris un message de 110 à 150 mots. Il doit contenir : au moins trois phrases où la personne change (avec que), au moins trois où elle ne change pas (avec un infinitif), au moins une paire complète (pour et pour que, ou avant de et avant que), et au moins une expression qui garde toujours que.",
  responseSpec: { kind: 'text', minWords: 110, maxWords: 150 },
  rubric: {
    criteria: [
      {
        key: 'branche',
        label: 'La bonne branche à chaque fois',
        maxPoints: 4,
        descriptors: [
          "4 : Chaque phrase prend la forme que son compte demande. Aucun que sans sujet nouveau derrière lui, aucun infinitif là où la personne change.",
          "3 : Une phrase prend la mauvaise branche, et le reste tient.",
          "2 : Deux ou trois phrases prennent la mauvaise branche, souvent du même côté : soit des que en trop, soit des infinitifs à la place de que.",
          "1 : La branche est choisie au hasard, ou toutes les phrases ouvrent avec que.",
        ],
      },
      {
        key: 'lettre',
        label: 'La petite lettre',
        maxPoints: 3,
        descriptors: [
          "3 : de et à sont là où l'expression les demande, et absents après vouloir, préférer, souhaiter, aimer et espérer.",
          "2 : Une ou deux petites lettres manquent ou sont fausses, et le sens reste clair.",
          "1 : Les prépositions sont mises au hasard, ou toutes absentes.",
        ],
      },
      {
        key: 'variete',
        label: 'Les quatre familles',
        maxPoints: 3,
        descriptors: [
          "3 : Le message contient trois phrases avec que, trois sans, une paire complète et une expression qui garde toujours que.",
          "2 : Trois familles sur quatre sont là. Il manque en général la paire complète.",
          "1 : Le message n'utilise qu'une seule structure, répétée.",
        ],
      },
      {
        key: 'message',
        label: 'Un message utilisable',
        maxPoints: 2,
        descriptors: [
          "2 : Le groupe sait quoi faire en le lisant une fois. La longueur est dans les bornes et le ton est celui d'un message entre gens qui se tutoient.",
          "1 : Le lecteur doit relire pour savoir qui fait quoi, ou la longueur sort des bornes.",
        ],
      },
    ],
  },
  scaffold: ['Il faut que', 'Il faut', 'Je voudrais', 'avant de', 'avant que', 'pour que', 'Je suis content que', 'Bien que'],
  modelAnswer: "Salut à tous,\n\nPour samedi, il faut que nous soyons à l’entrepôt à neuf heures, parce que la camionnette doit être rendue à midi. Je voudrais partir de chez moi vers huit heures et quart pour éviter le pont.\n\nIl faut que chacun apporte des gants, et il faut prévoir de l’eau : la cave n’est pas chauffée. Avant de monter quoi que ce soit, prenez une photo du compteur. Je passerai à la station avant de rendre les clés.\n\nBien que le camion soit petit, tout devrait entrer en deux voyages. Je suis content que vous puissiez venir un samedi, franchement, parce que je n’arrive pas à porter le canapé tout seul.\n\nPréviens-moi avant que tu partes, pour que je descende ouvrir.\n\nÀ samedi, Rémi",
  modelAnswerEn: "Hi everyone. For Saturday, we have to be at the warehouse at nine, because the van has to be back by noon. I would like to leave home around a quarter past eight to avoid the bridge. Everyone has to bring gloves, and we need to plan for water: the cellar is not heated. Before taking anything up, take a photo of the meter. I will stop at the petrol station before handing back the keys. Although the van is small, everything should fit in two trips. I am glad you can come on a Saturday, because I cannot carry the sofa on my own. Let me know before you set off, so that I can come down and open up. See you Saturday, Rémi",
  watchFor: [
    { pattern: 'A que with no new subject behind it (je veux que partir, il faut que finir avant midi, sans que dire au revoir).', criterion: 'branche', feedback: "Derrière chaque que, il te faut quelqu'un de nouveau. S'il n'y a personne, enlève le que et remets l'infinitif.", ref: 'a2-construire' },
    { pattern: 'An infinitive where the person changes (je veux venir tôt, meaning you want THEM to come early).', criterion: 'branche', feedback: "Ici ce n'est pas toi qui fais la deuxième action. Ouvre avec que et donne un sujet à l'autre personne.", ref: 'a1-compter' },
    { pattern: 'A person placed between the two verbs on the English model (je veux toi venir, il faut vous partir).', criterion: 'branche', feedback: "L'anglais met la personne là, le français ne peut pas. Écris que, puis le sujet, puis le verbe conjugué.", ref: 'a10-cartes' },
    { pattern: 'The same subject repeated behind que where the short form was natural (je veux que je parte, je suis content que je vienne).', criterion: 'branche', feedback: "La personne ne change pas, donc le que n'ouvre rien. Je veux partir, je suis content de venir.", ref: 'a2-erreurs' },
    { pattern: 'The short member of a pair used where the long one was meant (pour arriver, meaning so that THEY arrive).', criterion: 'branche', feedback: "Avec pour, c'est toi qui arrives. Si c'est quelqu'un d'autre, écris pour que et nomme-le.", ref: 'a6-construire' },
    { pattern: 'The de dropped from an expression that owns it (content te voir, important lire, peur rater).', criterion: 'lettre', feedback: "La petite lettre appartient à l'expression : content DE te voir, important DE lire, peur DE rater.", ref: 'a3-cartes' },
    { pattern: 'A preposition added after the five bare-infinitive verbs (je veux de partir, elle préfère à rester).', criterion: 'lettre', feedback: "Vouloir, préférer, souhaiter, aimer et espérer ne prennent rien. Les deux verbes se touchent.", ref: 'a2-regle' },
    { pattern: 'de written where the verb takes à, or the other way round (réussir de finir, peur à conduire, hésiter de demander).', criterion: 'lettre', feedback: "Réussir, arriver et hésiter prennent à. Content, peur et regretter prennent de. C'est le premier verbe qui décide.", ref: 'a4-cartes' },
    { pattern: 'de and que written together (peur de que tu rates, content de que tu viennes).', criterion: 'lettre', feedback: "L'un chasse l'autre. Avec une deuxième personne, garde que tout seul.", ref: 'a3-construire' },
    { pattern: 'A short form invented for bien que, quoique, jusqu’à ce que or pourvu que (bien qu’être fatigué, jusqu’à finir).', criterion: 'variete', feedback: "Ces quatre-là gardent toujours que. Pour raccourcir, passe à malgré plus un nom.", ref: 'a8-cartes' },
    { pattern: 'Only one structure used across the whole message, usually il faut que repeated five or six times.', criterion: 'variete', feedback: "Tu as toutes les autres. Une paire complète et un infinitif changent le rythme du message autant que le sens.", ref: 'a11-plan' },
    { pattern: 'A future or a present indicative left after avant que, pour que, sans que or bien que (avant que tu partiras).', criterion: 'branche', feedback: "Ces expressions ne prennent jamais le futur. Ce qui suit que est une forme de subjonctif.", ref: 'a6-erreurs' },
  ],
  graderNotes: [
    'Judge the BRANCH, not the conjugation. Whether a given subjunctive form is spelled right belongs to b1.14; if the branch is correct and the form is misspelled, say so in the comment and take no point under « branche ».',
    'Do NOT mark which expressions take the subjunctive. That inventory is b1.15’s. If a learner puts a subjunctive behind an expression that does not take one (« j’espère que tu viennes »), note it and take no point here.',
    '« Espérer que » takes the indicative and is therefore never an error of this lesson in either direction.',
    'Accept « avant que » with or without the ne explétif, and accept « après que » however the learner writes it: it is outside this lesson.',
    'Word count EXCLUDES the greeting line and the sign-off (Paul, 2026-09-22). Count the body only, with 10% tolerance before criterion « message » loses its point.',
    'The writer’s gender is unknown: judge past-participle and adjective agreement for internal consistency only. « Je suis content » and « je suis contente » are both right.',
    'A missing preposition is ONE error under « lettre » even if the same expression appears twice with the same gap.',
    'Accept regional usage: courriel and e-mail, char in Québec, and the Belgian and Swiss number words.',
    'A message that is entirely correct but uses il faut que for every sentence scores at most 1 on « variete », because nothing in it shows the branch was ever chosen.',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
};

/** The join between the lesson and the drills. Every authored row carries
 *  `voiceflash`; only four of the 43 imports do, so none is named here. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis les deux formes à voix haute',
  frSub: 'La paire, puis la paire suivante',
  skill: 'speak',
  itemIds: ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
  audio: AUDIO, say: REFRAME, terms: ['memesujet', 'deuxsujets'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-anglais',
  title: 'Toute la leçon sur un écran',
  rows: [
    {
      k: 'le compte', v: 'deux sujets, que ; un seul, l’infinitif', say: 'Je veux partir. Je veux que tu partes.',
      detail: { title: 'Le compte', body: "Regarde qui agit des deux côtés, avant de choisir la forme. EN: look at who acts on each side before choosing the form.", say: 'Elle préfère rester. Elle préfère que nous restions.' },
    },
    {
      k: 'rien au milieu', v: 'vouloir, préférer, souhaiter, aimer, espérer', say: 'Je voudrais réserver une table pour samedi.',
      detail: { title: 'L’infinitif nu', body: "Les deux verbes se touchent : ni de, ni à. EN: the two verbs touch, with no de and no à.", say: 'J’espère finir le dossier avant vendredi.' },
    },
    {
      k: 'de', v: 'content, peur, regretter, oublier, important', say: 'Je suis content de travailler avec vous.',
      detail: { title: 'La route de', body: "La petite lettre appartient à l'expression et se perd en dernier. EN: the little word belongs to the expression.", say: 'Il est important de lire le contrat en entier.' },
    },
    {
      k: 'à', v: 'réussir, arriver, hésiter, apprendre, continuer', say: 'Je n’arrive pas à ouvrir cette porte.',
      detail: { title: 'La route à', body: "C'est le premier verbe qui impose la lettre, jamais l'infinitif. EN: the first verb imposes the word, never the infinitive.", say: 'Elle hésite à demander une augmentation.' },
    },
    {
      k: 'les cinq paires', v: 'pour, avant, sans, afin, à condition', say: 'Je pars tôt pour que tu aies la voiture.',
      detail: { title: 'Les paires', body: "Version courte pour une personne, version longue pour deux. EN: short version for one person, long for two.", say: 'Relis ta lettre avant que le facteur passe.' },
    },
    {
      k: 'les quatre à part', v: 'bien que, quoique, jusqu’à ce que, pourvu que', say: 'Bien que je sois fatigué, je finis le chapitre.',
      detail: { title: 'Sans paire', body: "Aucune version courte : pour raccourcir, passe à malgré plus un nom. EN: no short version, so switch to malgré plus a noun.", say: 'Malgré la fatigue, je finis le chapitre.' },
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['compter', 'paire', 'sanspaire'],
};

const A11_PROGRES: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progres',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu comptes les sujets avant d'écrire, tu tiens les trois routes vers l'infinitif, tu choisis la bonne moitié de chaque paire et tu sais que quatre expressions ne se comptent pas. Ce qui reste fragile, c'est la vitesse : en parlant, personne n'a le temps de poser deux questions au milieu d'une phrase. La seule façon de gagner ce temps est de faire passer les blocs en mémoire directe, entiers. Avant l'examen, reprends les huit cartes de l'acte 9 et dis chacune dans une phrase complète, pas isolée. Puis relis un message que tu as vraiment envoyé et souligne chaque « que » : ceux qui n'ont pas de sujet nouveau derrière eux sont ceux à revoir. EN: Say each of the eight blocks inside a whole sentence, then underline every que in a message you actually sent; the ones with no new subject behind them are the ones to work on.",
  stats: [
    { k: 'Le compte', v: 'deux sujets, ou un seul' },
    { k: 'Les trois routes', v: 'rien, de, à' },
    { k: 'Les cinq paires', v: 'pour, avant, sans, afin, à condition' },
    { k: 'Les quatre à part', v: 'que reste toujours' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz (the renderer shows only one), ELEVEN rounds of eight, one per
 *  act. Each round's target is a distinct errorTrigger, so a failed round
 *  fires that round's own drill.
 *
 *  `fold()` strips commas, accents, apostrophes and hyphens, so no answer
 *  here turns on one: every contrast is a word or a whole structure. Every
 *  typeIn and errorSpot carries `prompt`, every listenChoose carries `say`.
 *  Correct-answer slots are scattered by hand; LessonRich reshuffles the
 *  options at runtime, so what matters here is validateDensity's spread. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-compter', label: 'Compter les sujets', targets: ['compte-saute'],
      questions: [
        mc('Avant de choisir la forme, tu regardes...', ['le temps du verbe', 'la longueur de la phrase', 'qui agit des deux côtés'], 2,
          "Le compte vient avant la forme. EN: the count comes before the form.", 'a1-compter'),
        mc('Deux personnes différentes agissent. Tu écris...', ['que et un sujet', 'une préposition', 'un infinitif'], 0,
          "Chaque personne a besoin de sa moitié de phrase. EN: each person needs a half of the sentence.", 'a1-deux'),
        mc('« Je veux que vous regardiez les pneus » veut dire...', ['c’est vous qui regardez', 'c’est moi qui regarde'], 0,
          "Le sujet après que fait l'action. EN: the subject after que does the action.", 'a1-scene'),
        mc('Dans « je veux partir », combien de personnes agissent ?', ['aucune', 'deux', 'une'], 2,
          "Moi qui veux et moi qui pars. EN: I want and I leave.", 'a1-lecture'),
        tI('C’est toi qui veux et toi qui pars. Écris la phrase.', 'Je veux (partir) avant six heures.', 'Je veux partir avant six heures.',
          "Une seule personne, donc rien à ouvrir. EN: one person, so nothing to open.", 'a1-deux'),
        tI('C’est toi qui veux et c’est lui qui part. Écris la phrase.', 'Je veux qu’il (partir) avant six heures.', 'Je veux qu’il parte avant six heures.',
          "La personne change, donc que et un verbe conjugué. EN: the person changes, so que and a finished verb.", 'a1-compter'),
        eS('Je veux que vous regarder les pneus.', 'Je veux que vous regardiez les pneus.',
          "Après un sujet, jamais d'infinitif. EN: after a subject, never an infinitive.", 'a1-scene'),
        lC('Écoute. Combien de personnes agissent dans cette phrase ?', 'Nous préférons manger à la maison ce soir.', ['deux', 'une'], 1,
          "Nous préférons et nous mangeons. EN: we prefer and we eat.", 'a1-lecture'),
      ],
    },
    {
      id: 'r2-nu', label: 'L’infinitif nu', targets: ['que-en-trop'],
      questions: [
        mc('Entre « je veux » et « partir », tu écris...', ['à', 'rien', 'de'], 1,
          "Vouloir ne prend aucune préposition. EN: vouloir takes no preposition.", 'a2-regle'),
        mc('Quels verbes collent l’infinitif directement ?', ['content, peur, important', 'réussir, arriver, hésiter', 'vouloir, préférer, souhaiter, aimer, espérer'], 2,
          "Les cinq de l'acte 2. EN: the five from act 2.", 'a2-construire'),
        mc('Juste après « que », tu écris toujours...', ['un sujet', 'une préposition', 'un infinitif'], 0,
          "Un sujet, puis son verbe conjugué. EN: a subject, then its finished verb.", 'a2-construire'),
        tI('C’est toi qui veux et c’est elle qui réserve. Écris la phrase.', 'Je voudrais qu’elle (réserver) une table.', 'Je voudrais qu’elle réserve une table.',
          "La personne change, donc que. EN: the person changes, so que.", 'a2-choisir'),
        tI('C’est elle qui préfère et elle qui prend le train. Écris la phrase.', 'Elle préfère (prendre) le train de sept heures.', 'Elle préfère prendre le train de sept heures.',
          "Une seule personne, donc l'infinitif nu. EN: one person, so the bare infinitive.", 'a2-exemples'),
        tI('Écris la phrase qui dit que c’est LUI qui présente.', 'Je veux qu’il (présenter) le budget.', 'Je veux qu’il présente le budget.',
          "Deux personnes : je veux, il présente. EN: two people.", 'a2-histoire'),
        eS('Je veux toi venir samedi.', 'Je veux que tu viennes samedi.',
          "Le français n'a pas de place pour une personne entre deux verbes. EN: French has no slot for a person between two verbs.", 'a2-erreurs'),
        lC('Écoute. Cette phrase ouvre-t-elle avec que ?', 'J’espère finir le dossier avant vendredi.', ['non', 'oui'], 0,
          "Une seule personne, donc l'infinitif. EN: one person, so the infinitive.", 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-de', label: 'La préposition de', targets: ['de-perdu'],
      questions: [
        mc('Devant un infinitif, « je suis content » prend...', ['à', 'rien', 'de'], 2,
          "Content de te voir, toujours. EN: content de te voir, always.", 'a3-cartes'),
        mc('Peut-on écrire « peur de que tu rates » ?', ['oui', 'non'], 1,
          "L'un chasse l'autre. EN: one drives the other out.", 'a3-construire'),
        mc('Le choix entre de et que dépend de...', ['la force du sentiment', 'la personne qui agit ensuite', 'la longueur'], 1,
          "Content, peur et regret sont des deux côtés. EN: content, peur and regret are on both sides.", 'a3-lecture'),
        mc('« Il est important » devant un infinitif prend...', ['à', 'que', 'de'], 2,
          "Personne n'est nommé, donc de. EN: nobody named, so de.", 'a3-table'),
        tI('C’est elle qui a peur et elle qui rate le train. Écris la phrase.', 'Elle a peur ... (rater) son train.', 'Elle a peur de rater son train.',
          "Une personne, donc de plus l'infinitif. EN: one person, so de plus the infinitive.", 'a3-cartes'),
        tI('C’est elle qui a peur et c’est son fils qui rate le train. Écris la phrase.', 'Elle a peur que son fils ... (rater) son train.', 'Elle a peur que son fils rate son train.',
          "Deux personnes, donc que. EN: two people, so que.", 'a3-choisir'),
        eS('Je suis contente vous revoir si vite.', 'Je suis contente de vous revoir si vite.',
          "La petite lettre appartient à content. EN: the little word belongs to content.", 'a3-piege'),
        lC('Écoute. Quel petit mot entends-tu devant l’infinitif ?', 'Nous évitons de rouler la nuit sur cette route.', ['de', 'à', 'rien'], 0,
          "Éviter de rouler. EN: éviter de rouler.", 'a3-table'),
      ],
    },
    {
      id: 'r4-a', label: 'La préposition à', targets: ['mauvaise-lettre'],
      questions: [
        mc('Devant un infinitif, « je n’arrive pas » prend...', ['rien', 'de', 'à'], 2,
          "Arriver à ouvrir, arriver à finir. EN: arriver à ouvrir, arriver à finir.", 'a4-cartes'),
        mc('Qui impose la petite lettre ?', ['le deuxième verbe', 'le premier verbe', 'le sujet'], 1,
          "L'infinitif ne change jamais. EN: the infinitive never changes.", 'a4-construire'),
        mc('Dans quel ordre poses-tu les deux questions ?', ['le compte, puis la lettre', 'la lettre, puis le compte'], 0,
          "S'il n'y a pas d'infinitif, il n'y a pas de lettre à choisir. EN: no infinitive, no word to choose.", 'a4-choisir'),
        tI('Complète avec la bonne petite lettre.', 'Elle hésite ... demander une augmentation.', 'Elle hésite à demander une augmentation.',
          "Hésiter prend à, jamais de. EN: hésiter takes à, never de.", 'a4-erreurs'),
        tI('Complète avec la bonne petite lettre.', 'Nous avons réussi ... réserver le gîte.', 'Nous avons réussi à réserver le gîte.',
          "Réussir prend à. EN: réussir takes à.", 'a4-construire'),
        tI('Complète avec la bonne petite lettre.', 'Je suis content ... avoir une place près de la fenêtre.', 'Je suis content d’avoir une place près de la fenêtre.',
          "Content prend de, et de devient d' devant une voyelle. EN: content takes de.", 'a4-exemples'),
        eS('Le stagiaire a dû apprendre de gérer plusieurs dossiers.', 'Le stagiaire a dû apprendre à gérer plusieurs dossiers.',
          "Apprendre est dans la colonne à. EN: apprendre is in the à column.", 'a4-cartes'),
        lC('Écoute. Quelle petite lettre entends-tu ?', 'Les enfants apprennent à faire du vélo au parc.', ['de', 'à'], 1,
          "Apprendre à faire. EN: apprendre à faire.", 'a4-exemples'),
      ],
    },
    {
      id: 'r5-ilfaut', label: 'Il faut', targets: ['ilfaut-plat'],
      questions: [
        mc('« Il faut composter le billet » s’adresse à...', ['tout le monde', 'une personne précise'], 0,
          "Aucun nom, donc la consigne est générale. EN: no name, so the instruction is general.", 'a5-lecture'),
        mc('Le « il » de « il faut » désigne...', ['celui qui écoute', 'celui qui parle', 'personne'], 2,
          "Le même il que dans il pleut. EN: the same il as in il pleut.", 'a5-construire'),
        mc('Dès qu’un nom apparaît après il faut, tu écris...', ['que', 'de', 'à'], 0,
          "Une personne nommée a besoin de sa moitié de phrase. EN: a named person needs a half sentence.", 'a5-cartes'),
        mc('Devant un infinitif, « il est important » prend...', ['rien', 'de'], 1,
          "Il faut lire, il est important de lire. EN: il faut lire, il est important de lire.", 'a5-exemples'),
        tI('C’est toi qui dois partir. Écris la phrase.', 'Il faut que tu (partir) maintenant.', 'Il faut que tu partes maintenant.',
          "Un pronom est un nom : il faut que. EN: a pronoun counts as a name.", 'a5-piege'),
        tI('La consigne ne nomme personne. Écris la phrase.', 'Il faut (partir) maintenant.', 'Il faut partir maintenant.',
          "Personne n'est nommé, donc l'infinitif. EN: nobody named, so the infinitive.", 'a5-cartes'),
        eS('Il faut que ranger le garage avant l’hiver.', 'Il faut ranger le garage avant l’hiver.',
          "Aucun nom derrière que, donc pas de que. EN: no name behind que, so no que.", 'a5-piege'),
        lC('Écoute. Quelqu’un est-il nommé dans cette phrase ?', 'Il vaut mieux réserver à l’avance le week-end.', ['non', 'oui'], 0,
          "Personne, donc la version courte. EN: nobody, so the short version.", 'a5-ecoute'),
      ],
    },
    {
      id: 'r6-pour', label: 'Pour et avant', targets: ['paire-melangee'],
      questions: [
        mc('Je pars tôt et j’évite les bouchons. Tu écris...', ['pour que éviter', 'pour que j’évite', 'pour éviter'], 2,
          "Une personne, donc la version courte. EN: one person, so the short version.", 'a6-construire'),
        mc('Je pars tôt et tu as la voiture. Tu écris...', ['pour avoir', 'pour que tu aies'], 1,
          "Deux personnes, donc que et un sujet. EN: two people, so que and a subject.", 'a6-cartes'),
        mc('Devant un infinitif, « avant » s’écrit...', ['avant', 'avant de', 'avant que'], 1,
          "Avant de partir, avant que tu partes. EN: avant de partir, avant que tu partes.", 'a6-table'),
        tI('C’est elle qui range et elle qui se couche. Écris la phrase.', 'Elle range la cuisine avant ... (se coucher).', 'Elle range la cuisine avant de se coucher.',
          "Une personne, donc avant de. EN: one person, so avant de.", 'a6-exemples'),
        tI('C’est elle qui range et ce sont les invités qui arrivent. Écris la phrase.', 'Elle range la cuisine avant que les invités ... (arriver).', 'Elle range la cuisine avant que les invités arrivent.',
          "Deux personnes, donc avant que. EN: two people, so avant que.", 'a6-choisir'),
        tI('Écris la phrase qui dit que c’est TOI qui auras la voiture.', 'Je pars tôt ... (avoir) la voiture.', 'Je pars tôt pour avoir la voiture.',
          "Une personne, donc pour plus l'infinitif. EN: one person, so pour plus the infinitive.", 'a6-histoire'),
        eS('Relis ta lettre avant que l’envoyer.', 'Relis ta lettre avant de l’envoyer.',
          "Un infinitif ne vient jamais juste derrière que. EN: an infinitive never comes straight after que.", 'a6-erreurs'),
        lC('Écoute. Qui a la voiture cet après-midi ?', 'Je pars tôt pour que tu aies la voiture cet après-midi.', ['toi', 'moi'], 0,
          "Le sujet après que en profite. EN: the subject after que is the one who benefits.", 'a6-cartes'),
      ],
    },
    {
      id: 'r7-sans', label: 'Sans, afin, à condition', targets: ['que-vide'],
      questions: [
        mc('Il est entré et il n’a pas frappé. Tu écris...', ['sans qu’il frappe', 'sans que frapper', 'sans frapper'], 2,
          "Une personne, donc la version courte. EN: one person, so the short version.", 'a7-construire'),
        mc('Devant un infinitif, « afin » s’écrit...', ['afin que', 'afin de'], 1,
          "Afin d'arriver, afin que les enfants dorment. EN: afin d'arriver, afin que les enfants dorment.", 'a7-cartes'),
        mc('Derrière chaque que, il te faut...', ['un sujet nouveau', 'une préposition', 'un infinitif'], 0,
          "Sinon, la version courte était la bonne. EN: otherwise the short version was right.", 'a7-piege'),
        mc('Combien de paires fonctionnent de la même façon ?', ['neuf', 'deux', 'cinq'], 2,
          "Pour, avant, sans, afin, à condition. EN: pour, avant, sans, afin, à condition.", 'a7-choisir'),
        tI('C’est elle qui signe et son avocat qui ne voit rien. Écris la phrase.', 'Elle a signé sans que son avocat ... (voir) le contrat.', 'Elle a signé sans que son avocat voie le contrat.',
          "Deux personnes, donc sans que. EN: two people, so sans que.", 'a7-construire'),
        tI('La condition porte sur toi seul. Écris la phrase.', 'J’accepte, à condition ... (finir) avant six heures.', 'J’accepte, à condition de finir avant six heures.',
          "Une personne, donc à condition de. EN: one person, so à condition de.", 'a7-choisir'),
        eS('Nous partons tôt afin arriver avant la nuit.', 'Nous partons tôt afin d’arriver avant la nuit.',
          "Afin prend de devant un infinitif. EN: afin takes de before an infinitive.", 'a7-piege'),
        lC('Écoute. Sur qui porte la condition ?', 'J’accepte, à condition que tu viennes avec moi.', ['sur toi', 'sur moi'], 0,
          "Le sujet après que porte la condition. EN: the subject after que carries the condition.", 'a7-ecoute'),
      ],
    },
    {
      id: 'r8-quatre', label: 'Les quatre sans paire', targets: ['raccourci-impossible'],
      questions: [
        mc('Une seule personne agit après « bien que ». Tu écris...', ['bien qu’être fatigué', 'bien que je sois fatigué'], 1,
          "Aucune version courte n'existe. EN: no short version exists.", 'a8-cartes'),
        mc('Combien d’expressions gardent toujours que ?', ['deux', 'quatre', 'cinq'], 1,
          "Bien que, quoique, jusqu'à ce que, pourvu que. EN: bien que, quoique, jusqu'à ce que, pourvu que.", 'a8-construire'),
        mc('Pour raccourcir « bien que je sois fatigué », tu passes à...', ['avant la fatigue', 'sans fatigue', 'malgré la fatigue'], 2,
          "Malgré prend un nom, jamais un verbe. EN: malgré takes a noun, never a verb.", 'a8-choisir'),
        tI('Écris la phrase sans inventer de forme courte.', 'Bien que la salle (être) petite, tout le monde tient.', 'Bien que la salle soit petite, tout le monde tient.',
          "Que reste, et le verbe est au subjonctif. EN: que stays and the verb is subjunctive.", 'a8-exemples'),
        tI('Écris la phrase au présent, sans futur.', 'Pourvu que le colis (arriver) avant jeudi, tout ira bien.', 'Pourvu que le colis arrive avant jeudi, tout ira bien.',
          "Ces conjonctions ne prennent pas le futur. EN: these conjunctions do not take the future.", 'a8-erreurs'),
        tI('Écris la phrase avec jusqu’à ce que.', 'Attends ici jusqu’à ce que le médecin t’(appeler).', 'Attends ici jusqu’à ce que le médecin t’appelle.',
          "Pas de version courte devant un verbe. EN: no short version in front of a verb.", 'a8-cartes'),
        eS('Bien qu’être fatigué, je finis le chapitre.', 'Bien que je sois fatigué, je finis le chapitre.',
          "Bien que n'a pas de forme courte. EN: bien que has no short form.", 'a8-erreurs'),
        lC('Écoute. Combien de personnes agissent dans cette phrase ?', 'Bien que je sois fatigué, je finis le chapitre.', ['une', 'deux'], 0,
          "Une seule, et que reste quand même. EN: one only, and que stays anyway.", 'a8-histoire'),
      ],
    },
    {
      id: 'r9-tri', label: 'Choisir vite', targets: ['tri-lent'],
      questions: [
        mc('Première question devant une phrase à écrire...', ['qui agit des deux côtés', 'quel temps employer', 'quelle petite lettre'], 0,
          "Le compte, toujours en premier. EN: the count, always first.", 'a9-melange'),
        mc('La deuxième question ne sert que si...', ['la phrase est longue', 'il n’y a pas de que'], 1,
          "Pas d'infinitif, pas de petite lettre. EN: no infinitive, no little word.", 'a9-check'),
        mc('Tu vois « jusqu’à ce que ». Tu comptes les sujets ?', ['non, que reste de toute façon', 'oui, comme d’habitude'], 0,
          "Les quatre de l'acte 8 sont réglées d'avance. EN: the four from act 8 are settled in advance.", 'a9-table'),
        mc('Dans « il a fermé la porte sans que le chien bouge », qui bouge ?', ['personne', 'lui', 'le chien'], 2,
          "Le sujet après que. EN: the subject after que.", 'a9-melange'),
        tI('C’est toi qui passes et la banque qui ferme. Écris la phrase.', 'Je passe à la banque avant qu’elle (fermer).', 'Je passe à la banque avant qu’elle ferme.',
          "Deux sujets, donc avant que. EN: two subjects, so avant que.", 'a9-table'),
        tI('C’est toi qui passes et toi qui rentres. Écris la phrase.', 'Je passe à la banque avant ... (rentrer).', 'Je passe à la banque avant de rentrer.',
          "Un seul sujet, donc avant de. EN: one subject, so avant de.", 'a9-piege'),
        eS('Nous avons réussi tout ranger avant leur arrivée.', 'Nous avons réussi à tout ranger avant leur arrivée.',
          "Réussir garde son à. EN: réussir keeps its à.", 'a9-piege'),
        lC('Écoute. Cette phrase ouvre-t-elle avec que ?', 'Ils ont accepté de repousser la réunion.', ['oui', 'non'], 1,
          "Une seule personne, donc accepter de. EN: one person, so accepter de.", 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-anglais', label: 'Ce que l’anglais souffle', targets: ['anglais-mot-a-mot'],
      questions: [
        mc('« I want you to go » se traduit par...', ['je veux te partir', 'je veux que tu partes', 'je veux toi partir'], 1,
          "Le français ouvre une moitié de phrase. EN: French opens a half sentence.", 'a10-cartes'),
        mc('« Before leaving » te dit-il qui part ?', ['non', 'oui'], 0,
          "C'est à toi de décider, en comptant. EN: it is for you to decide, by counting.", 'a10-melange'),
        mc('Derrière que, tu ne mets jamais...', ['un adverbe', 'un sujet', 'un infinitif'], 2,
          "Un sujet, puis un verbe conjugué. EN: a subject, then a finished verb.", 'a10-check'),
        tI('Traduis l’idée, pas les mots.', 'I am glad to see you. (content)', 'Je suis content de te voir.',
          "L'anglais dit to, le français demande de. EN: English says to, French wants de.", 'a10-erreurs'),
        tI('Traduis l’idée, pas les mots.', 'Before you go out, shut the window. (avant)', 'Avant que tu sortes, ferme la fenêtre.',
          "La personne change, donc avant que. EN: the person changes, so avant que.", 'a10-lecture'),
        tI('Traduis l’idée, pas les mots.', 'She asked me to call back tonight. (demander)', 'Elle m’a demandé de rappeler ce soir.',
          "Demander à quelqu'un de faire : une seule action pour moi. EN: demander à quelqu'un de faire.", 'a10-melange'),
        eS('Il veut que je partir tôt.', 'Il veut que je parte tôt.',
          "Après un sujet, jamais d'infinitif. EN: after a subject, never an infinitive.", 'a10-erreurs'),
        lC('Écoute. Cette phrase dit-elle qui sort ?', 'Avant de sortir, ferme la fenêtre.', ['non', 'oui'], 1,
          "Celui à qui on parle : il sort et il ferme. EN: the person addressed does both.", 'a10-lecture'),
      ],
    },
    {
      id: 'r11-ecrire', label: 'Écrire les deux formes', targets: ['ecrit-plat'],
      questions: [
        mc('Tu relis ton message. Un que sans sujet nouveau derrière lui, c’est...', ['un que de trop', 'une faute de temps', 'une bonne phrase longue'], 0,
          "Passe à la version courte et remets l'infinitif. EN: switch to the short version and put the infinitive back.", 'a11-plan'),
        mc('Dans le message de Rémi, pourquoi « bien que le camion soit petit » garde-t-il son que ?', ['bien que n’a pas de version courte', 'deux personnes agissent'], 0,
          "Ce n'est pas le compte qui décide ici. EN: it is not the count that decides here.", 'a11-lecture'),
        mc('Un message où chaque phrase commence par « il faut que » montre...', ['un registre soutenu', 'une bonne maîtrise', 'qu’aucune branche n’a été choisie'], 2,
          "La variété est la preuve que tu as compté. EN: variety is the proof that you counted.", 'a11-cas'),
        tI('C’est toi qui préviens et toi qui pars. Écris la phrase.', 'Préviens-moi avant ... (partir).', 'Préviens-moi avant de partir.',
          "Un seul sujet, donc avant de. EN: one subject, so avant de.", 'a11-lecture'),
        tI('C’est toi qui préviens et moi qui descends. Écris la phrase.', 'Préviens-moi ... que je (descendre) ouvrir.', 'Préviens-moi pour que je descende ouvrir.',
          "Deux sujets, donc pour que. EN: two subjects, so pour que.", 'a11-plan'),
        tI('C’est toi qui es content et lui qui vient. Écris la phrase.', 'Je suis content que tu (pouvoir) venir samedi.', 'Je suis content que tu puisses venir samedi.',
          "Deux personnes, donc content que. EN: two people, so content que.", 'a11-cheat'),
        eS('Je suis content que je puisse venir samedi.', 'Je suis content de pouvoir venir samedi.',
          "La personne ne change pas, donc la version courte. EN: the person does not change, so the short version.", 'a11-cheat'),
        lC('Écoute. Qui descend ouvrir la porte ?', 'Préviens-moi avant que tu partes, pour que je descende ouvrir.', ['toi', 'moi'], 1,
          "« pour que je descende » : celui qui parle. EN: the speaker.", 'a11-scenario'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a11-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'le compte', back: 'deux sujets, que ; un seul, l’infinitif', say: 'Je veux partir. Je veux que tu partes.' },
    { front: 'l’infinitif nu', back: 'vouloir, préférer, souhaiter, aimer, espérer', say: 'Nous souhaitons rester une nuit de plus.' },
    { front: 'la route de', back: 'content, peur, regretter, oublier, éviter, important', say: 'Je suis content de travailler avec vous.' },
    { front: 'la route à', back: 'réussir, arriver, hésiter, apprendre, continuer', say: 'Je n’arrive pas à ouvrir cette porte.' },
    { front: 'il faut', back: 'personne nommée, infinitif ; un nom, que', say: 'Il faut que tu partes maintenant.' },
    { front: 'pour et avant', back: 'pour, avant de, contre pour que, avant que', say: 'Je pars tôt pour que tu aies la voiture.' },
    { front: 'sans, afin, à condition', back: 'les trois dernières paires', say: 'Il est sorti sans que personne l’entende.' },
    { front: 'les quatre sans paire', back: 'bien que, quoique, jusqu’à ce que, pourvu que', say: 'Bien que je sois fatigué, je finis le chapitre.' },
    { front: 'la sortie de secours', back: 'malgré plus un nom', say: 'Malgré la fatigue, je finis le chapitre.' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_BILAN: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-bilan',
  layer: 'core',
  title: 'Le choix, en résumé',
  body: `${REFRAME} Tu regardes qui agit des deux côtés, tu ouvres avec « que » ou tu gardes l'infinitif, et tu mets devant lui la petite lettre que l'expression demande. Quatre conjonctions ne se comptent pas et gardent « que » quoi qu'il arrive. Ce qui vient ensuite n'est plus une question de forme verbale : c'est l'ordre des petits mots dans la phrase, et en particulier celui des pronoms. EN: What comes next is no longer about verb forms: it is the order of the small words in the sentence, and of the pronouns in particular.`,
  points: [
    "Compte les sujets avant d'écrire, jamais après. EN: count the subjects before writing, never after.",
    "Trois routes mènent à l'infinitif : rien, de et à, et c'est le premier verbe qui choisit. EN: three roads lead to the infinitive, and the first verb chooses.",
    "Cinq paires existent en version courte et en version longue. EN: five pairs exist in a short and a long version.",
    "Quatre conjonctions gardent que quel que soit le compte. EN: four conjunctions keep que whatever the count.",
  ],
  audio: AUDIO,
  say: REFRAME,
};

const ACT11: ActDef = {
  act: {
    id: 'act11',
    title: 'Écrire les deux formes',
    opener: {
      line: "Toi, tu fais ta part, et les autres font la leur : ici tu écris le message qui dit qui fait quoi, et pourquoi. EN: You do your part and the others do theirs: here you write the message that says who does what, and why.",
      imageRef: 'lessons/subjonctif-infinitif/act11.jpg',
    },
    sections: [],
    milestone: "Tu écris un message entier où chaque phrase a pris la branche que son compte demandait. EN: You can write a whole message in which every sentence took the branch its count called for.",
    estScreens: 140,
    restPoints: ['a11-scenario', 'a11-parler', 'a11-cheat', 'a11-quiz/r3-de', 'a11-quiz/r6-pour', 'a11-quiz/r9-tri'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_CAS, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRES, A11_QUIZ, A11_REVIEW, A11_BILAN,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

/* ── REMEDIATION DRILLS and ERROR TRIGGERS ────────────────────────────────
 *  One drill per trigger, each the resolving target of exactly one quiz
 *  round. Deliberately NOT in `sections`: a learner who never trips one never
 *  sees it. Six items is the house size. */

const DRILL_LIST: LessonDrill[] = [
  {
    id: 'd-compter', title: 'Une personne, ou deux', format: 'sort' as const,
    coach: "Deux piles. Demande-toi si la personne qui agit change entre le début et la fin. EN: sort by whether the person doing the acting changes.",
    buckets: ['une seule personne', 'deux personnes'],
    items: [E(1400), E(1402), E(1404), E(1401), E(1403), E(1411)], audio: AUDIO,
  },
  {
    id: 'd-nu', title: 'Rien au milieu', format: 'mcq' as const,
    coach: 'Vouloir, préférer, souhaiter, aimer et espérer collent l’infinitif juste derrière eux. EN: these five stick the infinitive straight on behind them.',
    q: 'Je veux ... partir tôt demain.', opts: ['à', 'de', 'rien'], correct: 2,
    why: "Aucune préposition après vouloir. EN: no preposition after vouloir.",
    items: [E(1420), E(1422), E(1424), E(1428), E(1431), E(1432)], audio: AUDIO,
  },
  {
    id: 'd-de', title: 'La petite lettre de', format: 'mcq' as const,
    coach: "Content, peur, regret, important et éviter gardent leur de devant l’infinitif. EN: these five keep their de in front of the infinitive.",
    q: 'Je suis content ... te voir.', opts: ['de', 'que', 'à'], correct: 0,
    why: "Content de te voir, toujours. EN: content de te voir, always.",
    items: [E(1440), E(1442), E(1444), E(1448), E(1452), E(1454)], audio: AUDIO,
  },
  {
    id: 'd-a', title: 'La petite lettre à', format: 'sort' as const,
    coach: 'Deux piles : ce qui prend de, et ce qui prend à. EN: sort what takes de from what takes à.',
    buckets: ['de', 'à'],
    items: [E(1452), E(1453), E(1454), E(1466), E(1467), E(1468)], audio: AUDIO,
  },
  {
    id: 'd-ilfaut', title: 'Cherche le nom', format: 'sort' as const,
    coach: "Deux piles : la consigne qui ne nomme personne, et celle qui nomme quelqu’un. EN: sort the instruction that names nobody from the one that names somebody.",
    buckets: ['personne n’est nommé', 'quelqu’un est nommé'],
    items: [E(1478), E(1480), E(1486), E(1479), E(1481), E(1487)], audio: AUDIO,
  },
  {
    id: 'd-pour-avant', title: 'Court ou long', format: 'mcq' as const,
    coach: 'Une personne prend la version courte, deux personnes prennent la version longue. EN: one person takes the short version, two take the long one.',
    q: 'Je pars tôt ... tu aies la voiture.', opts: ['pour de', 'pour que', 'pour'], correct: 1,
    why: "Tu as la voiture, donc deuxième personne. EN: you have the car, so a second person.",
    items: [E(1504), E(1505), E(1506), E(1507), E(1496), E(1499)], audio: AUDIO,
  },
  {
    id: 'd-sans-afin', title: 'Un que de trop', format: 'mcq' as const,
    coach: "Derrière chaque que, cherche un sujet que la première moitié n’avait pas. EN: behind every que, look for a subject the first half did not have.",
    q: 'Il est entré ... frapper.', opts: ['sans de', 'sans que', 'sans'], correct: 2,
    why: "Il entre et il ne frappe pas : une seule personne. EN: he comes in and he does not knock.",
    items: [E(1522), E(1523), E(1524), E(1525), E(1514), E(1517)], audio: AUDIO,
  },
  {
    id: 'd-sanspaire', title: 'Les quatre à part', format: 'flashcard' as const,
    coach: "Pour chaque carte, dis si l’expression peut se raccourcir, et par quoi sinon. EN: for each card, say whether the expression can be shortened, and what replaces it if not.",
    items: [E(1148), E(1319), E(1335), E(1338), E(1542), E(1548)], audio: AUDIO,
  },
  {
    id: 'd-tri', title: 'Deux questions, dans l’ordre', format: 'sort' as const,
    coach: "Deux piles : ce qui se décide au compte, et ce qui est réglé d’avance. EN: sort what the count decides from what is settled in advance.",
    buckets: ['le compte décide', 'réglé d’avance'],
    items: [E(1550), E(1555), E(1557), E(1554), E(1148), E(1335)], audio: AUDIO,
  },
  {
    id: 'd-anglais', title: 'Traduire l’idée', format: 'mcq' as const,
    coach: "L’anglais te donne le sens et pas la forme. Cherche la personne avant le mot to. EN: English gives you the meaning, not the shape; look for the person before to.",
    q: 'I want you to come. En français, tu écris...', opts: ['je veux que tu viennes', 'je veux te venir', 'je veux toi venir'], correct: 0,
    why: "Le français ouvre une moitié de phrase avec que. EN: French opens a half sentence with que.",
    items: [E(1564), E(1565), E(1572), E(1573), E(1574), E(1575)], audio: AUDIO,
  },
  {
    id: 'd-ecrire', title: 'Relire ses que', format: 'flashcard' as const,
    coach: "Pour chaque phrase, dis quelle branche elle a prise et pourquoi. EN: for each sentence, say which branch it took and why.",
    items: [E(1576), E(1577), E(1580), E(1581), E(1586), E(1582)], audio: AUDIO,
  },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'compte-saute', description: 'Chooses the form from the verb in front rather than from who acts, so the same carrier always comes out the same way whatever the sentence means.', detectOn: ['a1-compter', 'a1-check', 'a11-mission'], drill: 'd-compter', retest: 'd-compter' },
  { id: 'que-en-trop', description: 'Opens with que although the same person does both things, producing je veux que je parte, or puts an infinitive straight after que with no subject.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-nu', retest: 'd-nu' },
  { id: 'de-perdu', description: 'Drops the de that belongs to the expression, writing content te voir or important lire, or keeps it alongside que.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-de', retest: 'd-de' },
  { id: 'mauvaise-lettre', description: 'Writes de where the verb takes à or the other way round, because the meaning of the two verbs suggests a road the list does not give.', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a11-mission'], drill: 'd-a', retest: 'd-a' },
  { id: 'ilfaut-plat', description: 'Names somebody after il faut without opening with que, or opens with que although the instruction names nobody at all.', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-ilfaut', retest: 'd-ilfaut' },
  { id: 'paire-melangee', description: 'Picks the short or the long member of a pair by habit rather than by who acts, so pour que arrives where pour was meant and the reader understands the opposite plan.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-pour-avant', retest: 'd-pour-avant' },
  { id: 'que-vide', description: 'Writes a que with no new subject behind it, or drops the de that the short member of a pair needs: sans que dire, afin arriver.', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-sans-afin', retest: 'd-sans-afin' },
  { id: 'raccourci-impossible', description: 'Applies the counting rule to bien que, quoique, jusqu’à ce que or pourvu que and invents a short form that does not exist.', detectOn: ['a8-construire', 'a8-erreurs', 'a8-check', 'a11-mission'], drill: 'd-sanspaire', retest: 'd-sanspaire' },
  { id: 'tri-lent', description: 'Reaches for the verb form before deciding whether a second clause is needed, so the sentence is rewritten halfway through or abandoned for a simpler one.', detectOn: ['a9-melange', 'a9-piege', 'a9-check', 'a11-mission'], drill: 'd-tri', retest: 'd-tri' },
  { id: 'anglais-mot-a-mot', description: 'Translates an English sentence word by word, so the person lands between the two verbs, the que arrives with no subject, or the to becomes nothing at all.', detectOn: ['a10-erreurs', 'a10-melange', 'a10-check', 'a11-mission'], drill: 'd-anglais', retest: 'd-anglais' },
  { id: 'ecrit-plat', description: 'Writes a whole message with one structure repeated, usually il faut que, so nothing in it shows whether the branch was ever chosen.', detectOn: ['a11-mission', 'a11-plan', 'a11-scenario'], drill: 'd-ecrire', retest: 'd-ecrire' },
];

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

/** Every id the lesson can put in front of a learner. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ROW.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

/** One slice per act: that act's authored rows plus its imports, each id
 *  released ONCE, and only ids a flashcard drill can reach. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

/** Every recordingId the sections name, each with its studio brief. */
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-16-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-16-cuisine': "The kitchen table (act 1), ONE female voice reading a narration that quotes two speakers. Yann's « je veux partir à six heures » and Awa's « je veux que nous partions à cinq heures » come thirty seconds apart and must be read at the SAME pace and pitch: the learner has to notice the extra word, not a change of delivery. One take.",
  'rec-b1-16-compter': "The counting deck (act 1), one voice, four cards. « que » is unstressed every time and runs into the next word: [kuh tü PART], never [KUH | tü PART]. The contrast pair on cards one and two is read as one continuous line with a small pause between the halves.",
  'rec-b1-16-couloir': "The corridor before the meeting (act 2), two voices, close and quick, with a little corridor reverb. Karim's two impossible sentences are spoken exactly as a learner speaks them, with the hesitation left in. The coach never sounds corrective.",
  'rec-b1-16-nu-ecoute': 'REQUIRED FOR THE EAR MISSION (act 2): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed, with only a normal breath between lines. The learner cannot see the text, so a second take or a second voice destroys the exercise. « que » must be audible but unstressed: it is a short unstressed syllable and must not be planted.',
  'rec-b1-16-assurances': "The insurance counter (act 3), ONE female voice reading a narration that quotes a customer and a clerk. Both use vous. « contente de trouver » and « content que vous les lisiez » must be read with the same warmth: the act's whole point is that the feeling is identical and only the person changes.",
  'rec-b1-16-de': "The de deck (act 3), one voice, four cards. « de » is a short unstressed [də] leaning onto the next word, never a full syllable of its own. On card two the pair is read as one line with a small pause.",
  'rec-b1-16-piege-de': 'The trap drill (act 3): the six card sentences read in order, ONE VOICE, at normal speed. The wrong versions printed on the cards are NEVER spoken.',
  'rec-b1-16-tableau': "The evening class (act 4), one female teacher and one student, a quiet room with chairs moving at the end. The three-column line « je veux partir, content de partir, réussir à partir » is read with equal weight on all three: no pause is allowed to group two of them together.",
  'rec-b1-16-mairie': "The town-hall hall (act 5), ONE voice reading a narration that quotes three notices. The three notices are read as printed text rather than as speech, evenly and without emphasis, so that nothing in the delivery marks which one carries a name.",
  'rec-b1-16-ilfaut': "The il faut deck (act 5), one voice, four cards. « il faut » runs as a single unstressed group [eel foh] with no break inside it, and the pair on cards one and two is read as one continuous line with a small pause between the halves.",
  'rec-b1-16-ilfaut-ecoute': 'REQUIRED FOR THE EAR MISSION (act 5): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. The learner cannot see the text. The alternation between the short and the long version must not be marked by any change of pace: the only clue is the word « que » and the pronoun after it.',
  'rec-b1-16-piege-ilfaut': 'The trap drill (act 5): the six card sentences read in order, ONE VOICE. The wrong versions printed on the cards are NEVER spoken.',
  'rec-b1-16-demenagement': "The phone call the night before (act 6), two voices, one of them slightly compressed as on a phone. « pour avoir la voiture » and « pour que tu aies la voiture » come forty seconds apart and must be read at the same speed: the misunderstanding has to be believable.",
  'rec-b1-16-buanderie': "The laundry-room note (act 7), ONE voice reading a narration that quotes three handwritten notes. The caretaker's lines are read as a notice; the pencilled complaint underneath is read slightly faster and closer, as somebody reading a scrawl.",
  'rec-b1-16-sans-ecoute': 'REQUIRED FOR THE EAR MISSION (act 7): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. « sans », « afin » and « à condition » must be audible, and the « de » and the « que » that follow them must NOT be stressed: they are short unstressed syllables and planting them voids the exercise.',
  'rec-b1-16-piege-sans': 'The trap drill (act 7): the six card sentences read in order, ONE VOICE. The wrong versions printed on the cards are NEVER spoken.',
  'rec-b1-16-quatre': "The evening class, a week later (act 8), the same two voices as rec-b1-16-tableau. Karim's impossible sentence « bien qu'être fatigué » is spoken once, flatly, as a learner trying something out, and is never repeated.",
  'rec-b1-16-voiture': "Dictating a message in a parked car (act 9), two voices, close, with a little engine noise if the studio can give it. Sofia dictates at dictation pace and Karim answers at ordinary speed: the difference in tempo is what makes the scene read.",
  'rec-b1-16-tri-ecoute': 'REQUIRED FOR THE EAR MISSION (act 9): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. The families are deliberately shuffled, so nothing in the delivery may group them, and the short and long versions must be paced identically.',
  'rec-b1-16-piege-tri': 'The trap drill (act 9): the six card sentences read in order, ONE VOICE. The wrong versions printed on the cards are NEVER spoken.',
  'rec-b1-16-tableau-six': "The six sentences on the board (act 10), ONE female voice. The six learner sentences are read NEUTRALLY, without irony and without correction in the delivery: the teacher of this passage does not mock them. The French corrections that follow are read at the same pace.",
  'rec-b1-16-message': "The model message (act 11), one voice, read as somebody reading a message aloud rather than performing it. The six « que » clauses must be audible through the pauses, and « avant de monter » and « avant que tu partes » must be distinguishable by their words alone, not by emphasis.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 16',
  intro: 'You can build the subjunctive and you know which expressions take it. This lesson is about the decision that comes before either: whether the sentence needs a second clause at all. English says "I want you to go" and hands you a person followed by an infinitive, which is a shape French does not have. French counts instead. Two people, and que opens a clause with its own subject; one person, and the second verb stays in the infinitive, with nothing, with de, or with à in front of it.',
  skill: 'PE',
  grammarAssumed: [FORM_UNIT, TRIGGERS_UNIT, POLI_UNIT, ALLER_UNIT, MODAUX_UNIT, PRENDRE_UNIT],
  grammarIntroduced: [
    'The same-subject rule: one subject takes an infinitive and two subjects take que plus the subjunctive',
    'The bare infinitive after vouloir, préférer, souhaiter, aimer and espérer, with nothing between the two verbs',
    'The de route: être content de, avoir peur de, regretter de, oublier de, éviter de and il est important de',
    'The à route: réussir à, arriver à, hésiter à, apprendre à and continuer à, chosen by the first verb and never by the infinitive',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu sais construire le subjonctif et tu sais quelles expressions le demandent. Cette leçon porte sur la décision qui vient avant : est-ce que ta phrase a besoin d'une deuxième moitié. L'anglais dit « I want you to go » et te donne une personne suivie d'un infinitif, une forme qui n'existe pas en français. Le français, lui, compte.",
    minutes: 130,
    difficulty: 3,
    glyph: 'que',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: SUBJONCTIF_INFINITIF_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 2,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Paul, 2026-09-22: every `say` is French and spoken by a fr-FR voice.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, READING_MODELE, dicteeFor };
