// b1.14.l1 « Le subjonctif présent : la formation » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is the draft type in `_task-section.ts`, not in schema.ts, so `sections` is
// `DraftSection[]` and the validators run on `lessonWithoutTask()`.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading), name (cardDeck, examples,
//   tapTable), build (groupDrill, gated), choose (a drill where the FORM is
//   picked by the person, not by a surface cue), trap (trapDrill stepped or
//   commonErrors), check (gated control pages before the checkpoint).
//
//    1  La porte                     7   que, and the form on the other side
//    2  Ils moins -ent               8   the regular rule, read off ils
//    3  Le sosie                     7   -er verbs: four forms out of six hide
//    4  Le radical se montre         7   -ir and -re, where ils pays for itself
//    5  La botte                     8   eight verbs with two stems
//    6  Nous et vous                 7   the imparfait shape, and the double i
//    7  Les dix, première moitié     7   être, avoir, aller, faire
//    8  Les dix, seconde moitié      7   pouvoir, savoir, vouloir, valoir
//    9  Une seule forme              6   falloir and pleuvoir
//   10  Reconnaître                  7   spotting it cold, in all four families
//   11  Écrire au subjonctif        11   the model, the TASK, the quiz, the end
//
//   TOTAL 82 missions, 11 acts. Corpus: 196 authored rows in eleven blocks
//   plus 38 reused seed rows, 234 item ids in all, released act by act
//   through `deckTranche`.
//   Chapter artwork: `subjonctif-formation-image-prompts.md`, eleven prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (which later lessons import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le subjonctif ne s'invente pas : presque toujours, il sort d'une forme
//     que tu dis déjà. »
//   EN: The subjunctive is not invented: almost always, it comes out of a form
//   you already say.
//
//   ONE METAPHOR, LA FORME EST DÉJÀ LÀ. The subjunctive has almost no shapes
//   of its own: it lifts one the learner already produces (the `ils` of the
//   present, the `nous` of the imparfait) and sets it down behind `que`. It is
//   NOT a metaphor of difficulty, of doubt or of mood. Nothing in this lesson
//   says the subjunctive is emotional, uncertain or subjective, because that
//   is about WHEN it is used and this lesson is about HOW it is built. The
//   « presque » in the reframe is load-bearing: acts 7 to 9 are the ten verbs
//   it does not cover, and the reframe says so before they arrive.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the FORMATION of the present subjunctive, end to end: the regular
//           rule off the `ils` stem, the `-er` lookalike, the eight two-stem
//           verbs, the `nous`/`vous` imparfait shape with its double i, the
//           eight irregulars learned whole, the two impersonals, and the
//           recognition test that finds the form cold.
//   QUOTES  b1.01's reframe (« Pars de nous, coupe -ons, ajoute la fin »),
//           acts 5 and 6, because nous and vous come from that same stem;
//           b1.09's reframe, act 1, because « il faut que » is the carrier
//           b1.09 promised to this lesson.
//   LEAVES  to b1.15: WHICH expressions take the subjunctive. This lesson uses
//           a fixed set of five carriers (il faut que, je veux que, je suis
//           content que, bien que, avant que) and says on the act 1 card, on
//           the act 10 focus and in the roundup that the inventory is the next
//           lesson's. To b1.16: subjunctive against infinitive and the
//           same-subject rule, named ONCE in the roundup as a signpost and
//           never drilled; the task's grader notes forbid marking it. Out of
//           B1 entirely and named nowhere: the past subjunctive and the
//           imperfect subjunctive. To b1.11 to b1.13 (wave 3, in parallel):
//           relative pronouns, so no authored row uses dont, où, lequel,
//           ce qui or ce que.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED (Paul, 2026-09-22)
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction, coach line, drill prompt, break body and
//   milestone; characters use what the situation needs (the pharmacist, the
//   registrar and the notary say « vous »). Every learner surface that
//   explains something carries English: an `en` field, or a final « EN: ».
//   Answers are never behind « EN: ». Every `say` is French, spoken fr-FR.
//   Theme `opinions-et-avis`. A2 citations use the English trail label
//   resolved through `unitRef`; b1.* ones are French from the plan.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. THE THEME CARRIES ZERO SEED ROWS. `opinions-et-avis` is absent from
//      seed.json's `items` entirely, while Postgres holds 295 rows in it.
//      Every one of this lesson's 38 reused rows therefore comes from ANOTHER
//      theme (routines, famille, cuisine, métiers…), which is fine for the
//      learner and odd for the corpus. Should a formation lesson live in the
//      theme of its CARRIER expressions at all, or should b1.14 to b1.16 sit
//      in a grammar theme and leave `opinions-et-avis` to b1.15's triggers?
//   2. ELEVEN DB-ONLY TWINS are recorded in corpus §F2. Every one of them
//      sits behind an opinion trigger that belongs to b1.15 (« je ne pense
//      pas que », « je doute que », « à condition que »), so keeping the
//      published row instead of the authored twin would import a b1.15
//      trigger into b1.14's deck. Keep the twins, keep the published rows, or
//      keep both?
//   3. THE FIVE CARRIERS. Every authored row uses il faut que, je veux que,
//      je suis content que, bien que or avant que and nothing else, so that
//      b1.15 owns the inventory. Three seed imports carry « il faudrait que »
//      (the conditional of falloir, b1.09's tense) and act 6 says on the card
//      that it changes nothing after `que`. Is that aside acceptable, or
//      should those three imports be dropped?
//   4. THREE tapTables (acts 2, 5 and 7), one per act. The pilot brief allowed
//      one per LESSON; b1.02 to b1.11 shipped 2 and 3. Confirm the looser rule
//      (b1.01 q2, b1.03 q4, b1.09 q3 all raise this and none is answered).
//   5. FOUR trapDrills (acts 3, 5, 7, 9), inside the 3 to 5 band but on the
//      high side for a lesson that is mostly paradigm work. Too many?
//   6. ACT 3 TEACHES A NON-EVENT: that four `-er` forms are identical to the
//      present, so there is nothing to produce differently. It is the act with
//      the least to DO and the most to believe. Does it earn seven missions,
//      or should it fold into act 2?
//   7. B1 CITATIONS are French from the plan (« la leçon 1 du B1 ») because
//      b1.* units are not in the seed. Switch to the English trail label once
//      they are?
//   8. Titles, labels, card heads and stat keys carry no « EN: » tail, as in
//      b1.01 to b1.13. Tail them too?
//   9. 'coach-fr-FR' is still a proposed voice id (b1.01's question 5).
//  10. The task is WRITTEN (100 to 140 words, `skill: 'PE'`), because the
//      double i and the four hidden `-er` forms only exist in writing. The
//      unit outcome is spoken too. Should b1.14 also carry a spoken task?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet, SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import type { DraftSection, TaskSection } from './_task-section.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  READING_PORTE, READING_SOSIE, READING_NOUS, READING_POUVOIR, READING_MESSAGE, READING_PLAN,
  B101_REFRAME, B101_REFRAME_EN, B109_REFRAME, B109_REFRAME_EN,
  IMP_FORM_UNIT, POLI_UNIT, ALLER_UNIT, VERBES_IR_UNIT, VERBES_RE_UNIT,
  FAIRE_UNIT, MODAUX_UNIT, SAVOIR_UNIT, PRENDRE_UNIT,
  IMP_FORM_REF, POLI_REF, TRIGGERS_REF, INFINITIF_REF,
  VERBES_IR_REF, VERBES_RE_REF, MODAUX_REF, SAVOIR_REF, PRENDRE_REF, ALLER_REF, FAIRE_REF,
} from './subjonctif-formation-corpus.ts';
import { SUBJONCTIF_TERMS } from './subjonctif-formation-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: DraftSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r]));

/** An item's fr/en, from this corpus or the seed. Throws on a typo, so no
 *  section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.14: no item ${id}`);
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
  sheet('sheet-regle', 'La règle et les fins', ['ils moins -ent', 'les six fins', 'les trois familles régulières'], [
    teach('sheet-regle-teach', 'Trois gestes, dans cet ordre',
      `${REFRAME} Prends la forme « ils » du présent, enlève -ent, ajoute la fin. Le radical se lit dans « ils » et presque jamais dans l'infinitif : connaître ne montre pas connaiss-, écrire ne montre pas écriv-, finir ne montre pas finiss-. Les six fins sont toujours -e, -es, -e, -ions, -iez, -ent, même sur les verbes les plus irréguliers. EN: ${REFRAME_EN} Take the ils form of the present, cut -ent, add the ending; the stem hides in the infinitive and shows in ils.`),
    table('sheet-regle-etapes', 'Le geste, verbe par verbe', ['Infinitif', 'ils (présent)', 'Radical', 'que je…'], [
      ['parler', 'ils parlent', 'parl-', 'que je parle'],
      ['finir', 'ils finissent', 'finiss-', 'que je finisse'],
      ['vendre', 'ils vendent', 'vend-', 'que je vende'],
      ['partir', 'ils partent', 'part-', 'que je parte'],
      ['écrire', 'ils écrivent', 'écriv-', 'que j’écrive'],
      ['connaître', 'ils connaissent', 'connaiss-', 'que je connaisse'],
    ]),
    table('sheet-regle-fins', 'Les six fins', ['Personne', 'Fin', 'parler', 'finir'], [
      ['que je', '-e', 'que je parle', 'que je finisse'],
      ['que tu', '-es', 'que tu parles', 'que tu finisses'],
      ['qu’il, qu’elle', '-e', 'qu’il parle', 'qu’il finisse'],
      ['que nous', '-ions', 'que nous parlions', 'que nous finissions'],
      ['que vous', '-iez', 'que vous parliez', 'que vous finissiez'],
      ['qu’ils, qu’elles', '-ent', 'qu’ils parlent', 'qu’ils finissent'],
    ]),
  ]),

  sheet('sheet-sosie', 'Quand la forme ne se voit pas', ['les quatre formes identiques', 'les deux qui changent', 'comment vérifier'], [
    teach('sheet-sosie-teach', 'Le subjonctif invisible des verbes en -er',
      "Avec un verbe en -er, quatre formes sur six s'écrivent et se disent exactement comme le présent : que je parle, que tu parles, qu'il parle, qu'ils parlent. Seules nous et vous montrent la différence : nous parlons devient que nous parlions, vous parlez devient que vous parliez. La forme est là dans les quatre autres aussi ; elle ne s'entend pas, c'est tout. Pour vérifier qu'une phrase est bien au subjonctif, mets-la à nous : si tu obtiens -ions, c'était un subjonctif. EN: four -er forms are identical to the present; switch the sentence to nous and look for -ions to check."),
    table('sheet-sosie-table', 'Présent contre subjonctif', ['Personne', 'Présent', 'Subjonctif', 'Différent ?'], [
      ['je', 'je parle', 'que je parle', 'non'],
      ['tu', 'tu parles', 'que tu parles', 'non'],
      ['il, elle', 'il parle', 'qu’il parle', 'non'],
      ['nous', 'nous parlons', 'que nous parlions', 'oui'],
      ['vous', 'vous parlez', 'que vous parliez', 'oui'],
      ['ils, elles', 'ils parlent', 'qu’ils parlent', 'non'],
    ]),
    table('sheet-sosie-verbes', 'Six verbes en -er, à la loupe', ['Verbe', 'que tu…', 'que nous…', 'Ce qui se voit'], [
      ['regarder', 'que tu regardes', 'que nous regardions', 'nous seulement'],
      ['travailler', 'que tu travailles', 'que nous travaillions', 'nous seulement, avec deux i'],
      ['aimer', 'que tu aimes', 'que nous aimions', 'nous seulement'],
      ['chercher', 'que tu cherches', 'que nous cherchions', 'nous seulement'],
      ['commencer', 'que tu commences', 'que nous commencions', 'nous seulement'],
      ['payer', 'que tu paies', 'que nous payions', 'nous seulement, avec deux i'],
    ]),
  ]),

  sheet('sheet-botte', 'Les verbes à deux radicaux', ['les huit verbes', 'dans la botte et hors de la botte', "d'où vient nous"], [
    teach('sheet-botte-teach', 'Un radical dedans, un radical dehors',
      `Huit verbes prennent un radical pour je, tu, il et ils, et un autre pour nous et vous. Dessine une botte autour des quatre premiers : que je boive, que tu boives, qu'il boive, qu'ils boivent sont dans la botte ; que nous buvions et que vous buviez sont dehors. Le radical du dehors est celui de l'imparfait, et tu l'as déjà : « ${B101_REFRAME} » EN: eight verbs use the ils stem inside the boot and the imparfait stem for nous and vous. ${B101_REFRAME_EN}`),
    table('sheet-botte-table', 'Les huit verbes', ['Verbe', 'Dans la botte', 'Nous et vous', 'Radical du dehors'], [
      ['boire', 'que je boive', 'que nous buvions', 'buv- (nous buvons)'],
      ['prendre', 'que je prenne', 'que nous prenions', 'pren- (nous prenons)'],
      ['venir', 'que je vienne', 'que nous venions', 'ven- (nous venons)'],
      ['voir', 'que je voie', 'que nous voyions', 'voy- (nous voyons)'],
      ['devoir', 'que je doive', 'que nous devions', 'dev- (nous devons)'],
      ['recevoir', 'que je reçoive', 'que nous recevions', 'recev- (nous recevons)'],
    ]),
    table('sheet-botte-suite', 'Les deux derniers, et les cousins', ['Verbe', 'Dans la botte', 'Nous et vous', 'Même famille'], [
      ['mourir', 'que je meure', 'que nous mourions', 'aucun'],
      ['tenir', 'que je tienne', 'que nous tenions', 'venir'],
      ['apprendre', 'que j’apprenne', 'que nous apprenions', 'prendre'],
      ['comprendre', 'que je comprenne', 'que nous comprenions', 'prendre'],
      ['revenir', 'que je revienne', 'que nous revenions', 'venir'],
      ['vouloir', 'que je veuille', 'que nous voulions', 'les dix, acte 8'],
    ]),
  ]),

  sheet('sheet-dix', 'Les dix verbes à apprendre', ['les huit conjugués', 'les deux impersonnels', 'les fins qui changent'], [
    teach('sheet-dix-teach', 'Dix radicaux que personne ne peut deviner',
      "Être, avoir, aller, faire, pouvoir, savoir, vouloir, valoir, falloir et pleuvoir. Aucune règle ne donne leur radical : ils s'apprennent en entier. Deux choses aident. D'abord, les fins restent normales pour huit d'entre eux : que je fasse, que nous fassions, qu'ils fassent. Seuls être et avoir changent aussi de fins. Ensuite, vouloir et valoir font la botte comme les verbes de l'acte 5 : que je veuille mais que nous voulions. EN: ten stems no rule gives you; the endings stay normal for eight of them, and only être and avoir change those too."),
    table('sheet-dix-etre-avoir', 'Être et avoir, en entier', ['Personne', 'être', 'avoir', 'Remarque'], [
      ['que je', 'que je sois', 'que j’aie', 'les deux seules fins spéciales'],
      ['que tu', 'que tu sois', 'que tu aies', 'aie et aies se disent pareil'],
      ['qu’il', 'qu’il soit', 'qu’il ait', 'ait se dit comme aie'],
      ['que nous', 'que nous soyons', 'que nous ayons', '-ons, pas -ions'],
      ['que vous', 'que vous soyez', 'que vous ayez', '-ez, pas -iez'],
      ['qu’ils', 'qu’ils soient', 'qu’ils aient', 'soient se dit comme sois'],
    ]),
    table('sheet-dix-autres', 'Les six autres', ['Verbe', 'que je…', 'que nous…', 'Botte ?'], [
      ['aller', 'que j’aille', 'que nous allions', 'oui'],
      ['faire', 'que je fasse', 'que nous fassions', 'non'],
      ['pouvoir', 'que je puisse', 'que nous puissions', 'non'],
      ['savoir', 'que je sache', 'que nous sachions', 'non'],
      ['vouloir', 'que je veuille', 'que nous voulions', 'oui'],
      ['valoir', 'qu’il vaille', 'que nous valions', 'oui'],
    ]),
    table('sheet-dix-impersonnels', 'Les deux impersonnels', ['Verbe', 'Présent', 'Subjonctif', 'Autres formes'], [
      ['falloir', 'il faut', 'qu’il faille', 'aucune'],
      ['pleuvoir', 'il pleut', 'qu’il pleuve', 'aucune'],
    ]),
  ]),

  sheet('sheet-porte', 'Repérer un subjonctif', ['les cinq porteurs de cette leçon', 'le test en trois questions', 'la suite, à la leçon suivante'], [
    teach('sheet-porte-teach', 'Trois questions, dans cet ordre',
      `Un : y a-t-il un « que » juste devant le verbe ? Sans que, pas de subjonctif. Deux : la forme sort-elle du radical de « ils » ? Trois : est-ce un des dix verbes à apprendre en entier ? Si les trois répondent non, ce n'est pas un subjonctif. Attention au sosie : « avant que le magasin ferme » en est un, même si la forme ressemble au présent. EN: is there a que, does the form come off the ils stem, is it one of the ten; and remember the -er lookalike.`),
    table('sheet-porte-porteurs', 'Les cinq porteurs de cette leçon', ['Porteur', 'Exemple', 'Ce qu’il annonce'], [
      ['il faut que', 'Il faut que je parte avant six heures.', 'une nécessité'],
      ['je veux que', 'Je veux que tu me dises la vérité.', 'une volonté'],
      ['je suis content que', 'Je suis content que tu sois là.', 'un sentiment'],
      ['bien que', 'Bien que ce soit difficile, elle continue.', 'une concession'],
      ['avant que', 'Avant qu’il pleuve, rentre le linge.', 'un moment à venir'],
      ['il faudrait que', 'Il faudrait que tu révises davantage.', 'il faut que au conditionnel'],
    ]),
    table('sheet-porte-suite', 'Ce que cette leçon ne dit pas', ['Question', 'Réponse ici', 'Où elle est traitée'], [
      ['Quelles expressions prennent le subjonctif ?', 'cinq, choisies comme porteurs', 'la leçon suivante'],
      ['Pourquoi « je pense que » ne le prend pas ?', 'non traité', 'la leçon suivante'],
      ['Quand dire « que je parte » ou « partir » ?', 'non traité', 'la leçon 16 du B1'],
      ['Le subjonctif passé ?', 'hors du B1', 'plus tard'],
      ['Où est la forme, dans la phrase ?', 'juste après que', 'ici, acte 1 et acte 10'],
      ['Comment la construire ?', 'la règle complète', 'ici, actes 2 à 9'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LA PORTE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Nobody is misunderstood. The cost is a sentence abandoned halfway,
 *  which is what not being able to BUILD a form actually costs.
 *  NO SPACED « ? » OR « ! » IN ANY BUBBLE (house rule 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'La phrase laissée en route',
  frSub: 'Un samedi matin, au local',
  setting: { place: "Local de l'association, rue de la Distillerie", city: 'Nantes', time: '9 h 10', ambience: 'des chaises qu’on déplie, une bouilloire, la pluie sur la verrière' },
  beats: [
    {
      kind: 'narration',
      text: "Le local de l'association, rue de la Distillerie, à Nantes. Samedi, neuf heures dix. Le repas de quartier est à midi. Awa tient la liste et fait le tour de la table.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Awa',
      fr: 'Et toi, tu prends quoi.',
      en: 'And you, what are you taking on.',
      respell: '[ay TWA | tü prahⁿ KWA]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'Les tables. Mais il faut que nous... on doit être prêts à onze heures.',
      en: 'The tables. But we have to... we must be ready by eleven.',
      respell: '[lay TABL | meh eel foh kuh NOO | ohⁿ dwa-teh-truh preh a ohⁿ-ZUHR]',
      stage: "Tu as commencé une phrase, tu as buté sur la forme, tu en as dit une autre.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Awa',
      fr: 'D’accord. Onze heures, les tables.',
      en: 'Fine. Eleven, the tables.',
      respell: '[da-KOR | ohⁿ-zuhr lay TABL]',
      stage: "Elle a compris. Ce n'est pas le problème.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Personne n'a rien remarqué. Toi, oui. Tu t'arrêtes devant chaque « que », et la moitié de tes phrases restent dans ta tête. La forme existe pourtant, et elle est courte.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase existe en français ?',
      size: 'lg',
      options: [
        { fr: 'Il faut que nous sommes prêts à onze heures.', respell: '[eel foh kuh noo som preh a ohⁿ-ZUHR]', en: 'We have to be ready by eleven.', outcome: 'breaks', audio: AUDIO },
        { fr: 'Il faut que nous soyons prêts à onze heures.', respell: '[eel foh kuh noo swa-YOHⁿ preh a ohⁿ-ZUHR]', en: 'We have to be ready by eleven.', outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Awa écrit la ligne sans lever les yeux. Tu viens de dire ta phrase en entier, et elle t'a coûté une syllabe de plus.",
        breaks: "Awa écrit la ligne quand même. Elle a entendu une phrase cassée, et toi tu as appris qu'après « que » tu peux rester au présent. Tu ne peux pas.",
      },
    },
    {
      kind: 'break',
      heading: 'Après que, la forme change',
      body: "Nous sommes devient que nous soyons. Ce n'est pas un temps nouveau : c'est une forme courte, qui vit derrière « que ». Presque toujours, elle sort d'une forme que tu dis déjà. EN: after que the verb takes a short form, lifted from one you already say.",
      wrong: {
        fr: 'Il faut que nous sommes prêts à onze heures.',
        ipa: '/il fo kə nu sɔm pʁɛ a ɔ̃.zœʁ/',
        respell: '[eel foh kuh noo som preh a ohⁿ-ZUHR]',
        en: 'We have to be ready by eleven.',
      },
      right: {
        fr: 'Il faut que nous soyons prêts à onze heures.',
        ipa: '/il fo kə nu swa.jɔ̃ pʁɛ a ɔ̃.zœʁ/',
        respell: '[eel foh kuh noo swa-YOHⁿ preh a ohⁿ-ZUHR]',
        en: 'We have to be ready by eleven.',
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Les tables sont montées à onze heures moins le quart. Il reste à savoir d'où vient cette forme courte, et pourquoi elle est déjà dans ta bouche.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['porte', 'fin'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Construire un subjonctif sans y penser', s: 'Actes 2 à 4 : la forme ils, moins -ent, plus la fin' },
    { t: 'Ne plus perdre les formes qui ressemblent au présent', s: 'Acte 3 : le sosie des verbes en -er' },
    { t: 'Tenir les verbes à deux radicaux', s: 'Actes 5 et 6 : la botte, nous, vous et le double i' },
    { t: 'Avoir les dix irréguliers en mémoire', s: 'Actes 7 à 9, puis reconnaître et écrire' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: the form already doing its job, eight times, before any
 *  rule is given. The learner's only task is to notice `que`. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le tableau du samedi',
  frSub: 'Lis, et regarde le mot qui revient',
  text: READING_PORTE,
  glossary: [
    { word: 'local', en: 'premises, room', note: "La salle qu'une association loue ou prête. EN: the room an association uses." },
    { word: 'le repas de quartier', en: 'the neighbourhood meal', note: "Un repas où toute la rue apporte quelque chose." },
    { word: 'quand même', en: 'all the same, anyway', note: "Malgré la phrase qui vient d'être dite. EN: in spite of what was just said." },
  ],
  questions: [
    { q: 'Quel petit mot revient dans presque toutes les phrases d’Awa ?', a: "« que ». Il arrive juste avant chaque verbe qui change de forme." },
    { q: 'Quelles formes de verbe suivent « que » dans le texte ?', a: "réservions, aille, soit, soit, mange, arrivent, parte, viennes. Ce sont toutes des formes de subjonctif." },
    { q: '« que » est-il un verbe, ou un sujet ?', a: "Ni l'un ni l'autre. C'est la porte : le verbe qui vient juste après prend une autre forme." },
    { q: 'Pourquoi Awa note-t-elle la ligne de Karim ?', a: "Parce qu'il part à deux heures. Elle ajoute qu'elle est contente qu'il vienne quand même." },
  ],
  audio: REC('rec-b1-14-tableau'), say: REFRAME, terms: ['porte', 'fin'],
};

/** NAME. The doorway, the five carriers used in this lesson, and the sentence
 *  that says out loud what this lesson does NOT decide. */
const A1_PORTE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-porte',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-porte',
  title: 'La porte, et ce qu’il y a derrière',
  frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Regarde toujours le mot juste avant le verbe.',
  audio: REC('rec-b1-14-porte'), say: REFRAME, terms: ['porte'],
  cards: [
    {
      head: 'Le mot qui annonce', label: 'que',
      fr: 'Il faut que je parte. · Bien que ce soit difficile.',
      sub: '[eel foh kuh zhuh PART] · [byehⁿ kuh suh swa dee-fee-SEEL]',
      body: "Le subjonctif ne se promène pas seul. Il arrive derrière « que », et c'est ce mot qui te prévient. EN: the subjunctive does not travel alone; que announces it.",
    },
    {
      head: 'La forme est courte', label: 'le subjonctif',
      fr: 'nous sommes · que nous soyons',
      sub: '[noo SOM] · [kuh noo swa-YOHⁿ]',
      body: "Ce n'est pas un temps de plus à placer dans le passé ou le futur. C'est une forme du verbe, et elle ne dit ni hier ni demain. EN: it is a form of the verb, not a new place in time.",
    },
    {
      head: 'Cinq porteurs, et pas un de plus', label: 'dans cette leçon',
      fr: 'il faut que · je veux que · bien que · avant que',
      sub: '[eel foh KUH] · [zhuh veu KUH] · [byehⁿ KUH] · [a-vahⁿ KUH]',
      body: `Avec « je suis content que », ce sont les cinq expressions de cette leçon. Elles portent les formes, rien de plus. EN: five carrier expressions, here only so the forms have somewhere to live.`,
    },
    {
      head: 'Ce que cette leçon ne décide pas', label: Cap(TRIGGERS_REF),
      fr: 'Quelles expressions prennent le subjonctif ?',
      sub: '[kehl eks-preh-syohⁿ prenn luh süb-zhohⁿk-TEEF]',
      body: `C'est la question de ${TRIGGERS_REF}, pas celle-ci. Ici tu apprends à construire la forme, et tu la construis toujours juste. EN: which expressions take it is the next lesson; here you learn to build it.`,
    },
  ],
};

/** BUILD. Sort what follows `que` from what does not, on the reading's own
 *  sentences plus four seed rows. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Repère la porte',
  frSub: 'Où se cache la forme courte',
  groups: [
    grp('Le mot que, puis la forme', [
      it(E(1000), 'il faut que, puis parte'),
      it(E(1004), 'bien que, puis soit'),
      it('fr.b1.bureau.002', 'il faut que, puis soit'),
      it('fr.a1.nombres.150', 'avant que, puis soit'),
    ], chk('Dans ces quatre phrases, où se trouve toujours la forme courte ?',
      ['juste après que', 'au début de la phrase', 'à la fin'], 0,
      "Le verbe qui suit « que » est celui qui change. EN: the verb right after que is the one that changes.")),
    grp('La même idée, sans que', [
      free('Je dois partir avant six heures.', 'I have to leave before six.', 'pas de que, pas de subjonctif'),
      free('Elle continue malgré la difficulté.', 'She is carrying on despite the difficulty.', 'malgré prend un nom, pas un verbe'),
      free('Le rapport sera prêt vendredi.', 'The report will be ready on Friday.', 'le futur, et aucun que'),
      free('La table est prête dans vingt minutes.', 'The table is ready in twenty minutes.', 'le présent, et aucun que'),
    ], chk('Ces quatre phrases disent la même chose que les précédentes. Que leur manque-t-il ?',
      ['un sujet', 'un complément', 'le mot que'], 2,
      "Sans « que », le verbe garde sa forme ordinaire. EN: with no que, the verb keeps its ordinary form.")),
    ctl('Le test', 'Tu vois une forme bizarre dans une phrase. Que regardes-tu en premier ?',
      ['le mot juste devant', 'la fin du mot', 'le sujet'], 0,
      "Le mot devant te dit si une porte est ouverte. EN: the word in front tells you whether a door is open."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['porte', 'fin'],
};

const A1_CAS: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-cas',
  layer: 'core',
  title: 'Là où la forme courte te manque',
  cases: [
    { situation: 'Chez le médecin', fr: 'Il faut que je prenne ce médicament combien de fois par jour ?', en: 'How many times a day do I have to take this medicine?' },
    { situation: 'Au travail, en réunion', fr: 'Je veux que nous soyons d’accord avant de sortir d’ici.', en: 'I want us to agree before we leave this room.' },
    { situation: 'À la gare, au guichet', fr: 'Il faut que je sois à Lyon avant midi.', en: 'I have to be in Lyon before noon.' },
    { situation: 'À un ami, par message', fr: 'Je suis content que tu viennes samedi.', en: 'I am glad you are coming on Saturday.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['porte'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La porte', 'Où trouves-tu presque toujours un subjonctif ?',
    ['au début de la phrase', 'juste après que', 'après un nom'], 1,
    "« que » est le signal, et il est juste devant. EN: que is the signal, and it sits right in front."),
  ctl('Ce que la forme dit', 'Le subjonctif situe-t-il l’action hier, aujourd’hui ou demain ?',
    ['demain', 'hier', 'aucun des trois'], 2,
    "Ce n'est pas une place dans le temps, c'est une forme du verbe. EN: it is not a place in time, it is a form."),
  ctl('Ce qui vient après', 'Quelles expressions prennent le subjonctif ?',
    ['c’est la leçon suivante', 'toutes celles avec que', 'seulement il faut que'], 0,
    `L'inventaire appartient à ${TRIGGERS_REF}. Ici, tu construis la forme. EN: the inventory is the next lesson's.`),
], ['porte', 'fin']);

const ACT1: ActDef = {
  act: {
    id: 'act1',
    title: 'La porte',
    opener: {
      line: "Tu t'arrêtes devant « que » parce que tu ne sais pas quelle forme mettre derrière : ici tu apprends à la voir arriver. EN: You stop in front of que because you do not know what shape goes behind it: here you learn to see it coming.",
      imageRef: 'lessons/subjonctif-formation/act01.jpg',
    },
    sections: [],
    milestone: "Tu repères un subjonctif dans une phrase sans hésiter : tu regardes le mot juste devant le verbe. EN: You can spot a subjunctive in a sentence: you look at the word right in front of the verb.",
    estScreens: 32,
    restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_PORTE, A1_REPERER, A1_CAS, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — ILS MOINS -ENT
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The rule arrives from somebody who was taught it at school, in one
 *  line, before the lesson unpacks it. No spaced « ? » or « ! » in a bubble. */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Marc explique son truc',
  frSub: 'Pendant qu’on monte les tables',
  setting: "Onze heures moins le quart, dans le local. Karim déplie les tables, Marc tient les pieds, et la conversation revient sur la phrase de tout à l'heure.",
  bubbles: [
    { from: 'narrator', fr: 'Karim revient sur sa phrase du matin.', en: 'Karim comes back to his sentence from earlier.' },
    { from: 'user', fr: 'Je bloque toujours sur cette forme. Que nous soyons, que nous parlions. Je ne sais pas où la prendre.', en: 'I still get stuck on that form. Que nous soyons, que nous parlions. I do not know where to get it from.' },
    { from: 'coach', fr: 'Mon prof avait un truc. Tu dis le verbe avec ils, tu coupes la fin, et tu recolles.', en: 'My teacher had a trick. You say the verb with ils, you cut the ending off, and you stick another one on.', warn: 'La règle entière, en une phrase' },
    { from: 'user', fr: 'Avec ils. Pas avec l’infinitif.', en: 'With ils. Not with the infinitive.' },
    { from: 'coach', fr: 'Jamais avec l’infinitif. Finir ne montre rien. Ils finissent montre tout.', en: 'Never with the infinitive. Finir shows you nothing. Ils finissent shows you everything.', warn: 'Le radical est caché dans l’infinitif' },
    { from: 'user', fr: 'Donc ils finissent, moins -ent, ça fait finiss. Et j’ajoute quoi.', en: 'So ils finissent, minus -ent, gives finiss. And I add what.' },
    { from: 'coach', fr: 'Un e. Il faut que je finisse. Et pour nous, -ions.', en: 'An e. Il faut que je finisse. And for nous, -ions.' },
    { from: 'narrator', fr: 'Karim essaie à voix basse avec trois autres verbes. Les trois marchent.', en: 'Karim tries it under his breath on three more verbs. All three work.' },
  ],
  closing: { fr: 'Trois gestes, et le verbe est construit.', en: 'Three moves, and the verb is built.' },
  audio: REC('rec-b1-14-tables'), say: REFRAME, terms: ['formeils', 'radical'],
};

/** NAME. The rule, one idea per card. */
const A2_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-regle',
  title: 'Trois gestes, dans cet ordre',
  frSub: 'La règle des verbes réguliers',
  hint: 'Quatre cartes. Le premier geste est le seul qu’on oublie.',
  audio: AUDIO, say: REFRAME, terms: ['formeils', 'radical', 'fin'],
  cards: [
    {
      head: 'Un : dis le verbe avec ils', label: 'le présent',
      fr: 'ils parlent · ils finissent · ils vendent',
      sub: '[eel PARL] · [eel fee-NEESS] · [eel VAHⁿD]',
      body: "Tu connais ces formes depuis le début. Elles sont le point de départ, et tu n'as rien de nouveau à apprendre pour les avoir. EN: you have had these forms since the beginning.",
    },
    {
      head: 'Deux : enlève -ent', label: 'le radical',
      fr: 'parl- · finiss- · vend-',
      sub: '[PARL] · [fee-NEESS] · [VAHⁿD]',
      body: "Ce qui reste est le radical. Il porte le sens du verbe, et c'est lui que tu vas garder dans les six formes. EN: what is left is the stem, and it stays through all six forms.",
    },
    {
      head: 'Trois : ajoute la fin', label: '-e -es -e -ions -iez -ent',
      fr: 'que je parle · que nous parlions',
      sub: '[kuh zhuh PARL] · [kuh noo par-LYOHⁿ]',
      body: `« ${B101_REFRAME} » C'est le même geste qu'à l'imparfait, avec un autre point de départ et d'autres fins. EN: ${B101_REFRAME_EN} Same move, different starting form.`,
    },
    {
      head: 'Pourquoi jamais l’infinitif', label: Cap(VERBES_RE_REF),
      fr: 'connaître · ils connaissent · que je connaisse',
      sub: '[ko-NEHTR] · [eel ko-NESS] · [kuh zhuh ko-NESS]',
      body: "L'infinitif cache le radical : connaître ne montre pas connaiss-, écrire ne montre pas écriv-. La forme ils le montre toujours. EN: the infinitive hides the stem; the ils form always shows it.",
    },
  ],
};

/** BUILD. Two groups of four pairs, gated, then a control page. */
const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Coupe et recolle',
  frSub: 'De ils à que je',
  groups: [
    grp('Pars de ils', [
      it(E(1015), 'le radical est parl-'),
      it(E(1017), 'le radical est finiss-'),
      it(E(1019), 'le radical est vend-'),
      it(E(1023), 'le radical est écriv-'),
    ], chk('Que fais-tu de ces quatre formes pour obtenir un subjonctif ?',
      ['tu ajoutes -ez', 'tu enlèves -ent et tu ajoutes la fin', 'tu reviens à l’infinitif'], 1,
      "Couper -ent laisse le radical entier. EN: cutting -ent leaves the whole stem.")),
    grp('Arrive à que je', [
      it(E(1016), 'parl- plus -e'),
      it(E(1018), 'finiss- plus -e'),
      it(E(1020), 'vend- plus -e'),
      it(E(1024), 'écriv- plus -e'),
    ], chk('Ces quatre formes se terminent toutes par...',
      ['-es', '-ent', '-e'], 2,
      "Avec je, la fin est toujours -e. EN: with je the ending is always -e.")),
    ctl('Le point de départ', 'Tu dois construire « que je serve ». Par quoi commences-tu ?',
      ['ils servent', 'servir', 'je sers'], 0,
      "Ils servent donne serv-. Je sers ne donnerait que ser-. EN: ils servent gives the full stem."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['formeils', 'radical'],
};

/** NAME, in a table the sheet holds in full. Six verbs, three families. */
const A2_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-tableau',
  layer: 'core',
  sheetId: 'sheet-regle',
  title: 'Six verbes, le geste complet',
  cols: ['Infinitif', 'ils', 'que je'],
  rows: [
    { cells: ['parler', 'ils parlent', 'que je parle'], say: 'Il faut que je parle au propriétaire.',
      detail: { title: 'parler', body: "Un verbe en -er : la forme obtenue ressemble au présent, et c'est normal. EN: an -er verb, so the result looks like the present.", say: 'Je veux que nous parlions calmement.' } },
    { cells: ['finir', 'ils finissent', 'que je finisse'], say: 'Il faut que je finisse avant midi.',
      detail: { title: 'finir', body: "Le double s vient de ils finissent, pas de l'infinitif. EN: the double s comes from ils finissent, not from finir.", say: 'Il faut que nous finissions avant midi.' } },
    { cells: ['vendre', 'ils vendent', 'que je vende'], say: 'Il faut que je vende ma voiture avant l’été.',
      detail: { title: 'vendre', body: "Un verbe en -re : le radical est presque l'infinitif moins -re. EN: an -re verb, where the stem is nearly the infinitive minus -re.", say: 'Je veux que tu vendes ton vieux vélo.' } },
    { cells: ['partir', 'ils partent', 'que je parte'], say: 'Il faut que je parte avant six heures.',
      detail: { title: 'partir', body: "Partir perd son i : ils partent, donc part-. L'infinitif t'aurait trompé. EN: partir loses its i, and the infinitive would have misled you.", say: 'Avant que tu partes, ferme la fenêtre.' } },
    { cells: ['écrire', 'ils écrivent', 'que j’écrive'], say: 'Il faut que tu écrives ton nom en haut de la page.',
      detail: { title: 'écrire', body: "Le v n'existe nulle part dans écrire. Il est dans ils écrivent. EN: the v appears nowhere in écrire and everywhere in ils écrivent.", say: 'Je veux que vous écriviez votre nom ici.' } },
    { cells: ['connaître', 'ils connaissent', 'que je connaisse'], say: 'Je suis content que tu connaisses déjà la ville.',
      detail: { title: 'connaître', body: "Le cas le plus clair : connaître et connaiss- n'ont presque rien en commun. EN: the clearest case of all.", say: 'Il faut que tout le monde connaisse la sortie.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['formeils', 'radical'],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  title: 'La règle dans des phrases entières',
  examples: [
    ex(E(1027), 'vendre : ils vendent, donc que je vende'),
    ex(E(1028), 'répondre : ils répondent, donc que tu répondes'),
    ex(E(1030), 'choisir : ils choisissent, donc que vous choisissiez'),
    ex(E(1031), 'sortir : ils sortent, donc que je sorte'),
    ex('fr.b1.bien-etre.005', 'dormir : ils dorment, donc que tu dormes'),
    ex('fr.b1.metiers.049', 'envoyer : ils envoient, donc que tu envoies'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['radical', 'fin'],
};

/** CHOOSE. The person decides the ending, not a cue in the sentence. */
const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Quelle fin, pour qui',
  frSub: 'La personne décide',
  groups: [
    grp('Les quatre fins courtes', [
      it(E(1022), 'je, tu, il et ils se ressemblent beaucoup'),
      it(E(1026), 'même radical, fin courte'),
      it(E(1018), 'même geste, autre verbe'),
      it(E(1020), 'même geste, autre verbe'),
    ], chk('Pour je, tu, il et ils, la fin est...',
      ['longue', 'courte', 'toujours -ions'], 1,
      "-e, -es, -e, -ent : on les entend à peine. EN: four short endings you barely hear.")),
    grp('Les deux fins longues', [
      it(E(1034), 'nous, donc -ions'),
      it(E(1029), 'nous, donc -ions'),
      it(E(1030), 'vous, donc -iez'),
      it('fr.b1.dictee.030', 'vous, donc -iez'),
    ], chk('Nous et vous prennent...',
      ['-ions et -iez', '-ons et -ez'], 0,
      "-ons et -ez sont les fins du présent. EN: -ons and -ez belong to the present.")),
    ctl('La décision', 'Qu’est-ce qui choisit la fin du subjonctif ?',
      ['le mot devant que', 'le sens de la phrase', 'la personne'], 2,
      "Comme partout : je, tu, il, nous, vous, ils. EN: the person, exactly as everywhere else."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['fin'],
};

/** The ear mission. Lines hidden: the questions are about what was heard. */
const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Entends la personne',
  lines: [
    ln(E(1027)), ln(E(1034)), ln(E(1028)), ln(E(1030)),
    ln(E(1029)), ln(E(1031)), ln(E(1033)), ln('fr.b1.bien-etre.005'),
  ],
  questions: [
    { q: 'Première phrase : qui vend la voiture ?', opts: ['toi', 'moi'], correct: 1,
      why: "« que je vende » : la fin courte, avec je. EN: que je vende, the short ending with je." },
    { q: 'Deuxième phrase : combien de personnes finissent ?', opts: ['plusieurs', 'une', 'deux'], correct: 0,
      why: "« que nous finissions » : la fin en -ions se reconnaît tout de suite. EN: -ions is instantly recognisable." },
    { q: 'Quatrième phrase : à qui parle-t-on ?', opts: ['à moi-même', 'à plusieurs personnes', 'à une personne qu’on tutoie'], correct: 1,
      why: "« que vous choisissiez » : la fin en -iez. EN: -iez, so vous." },
    { q: 'Cinquième phrase : la fin longue ou la fin courte ?', opts: ['la fin longue', 'la fin courte'], correct: 0,
      why: "« que nous attendions » se termine par -ions. EN: attendions ends in -ions." },
    { q: 'Sixième phrase : une personne ou plusieurs ?', opts: ['plusieurs', 'une'], correct: 1,
      why: "« que je sorte » : rien ne s'entend après le radical. EN: nothing is heard after the stem." },
    { q: 'Dernière phrase : la forme se termine par...', opts: ['-iez', '-ions', '-es'], correct: 2,
      why: "« que tu dormes » : le s ne s'entend pas, mais la personne est tu. EN: the s is silent, the person is tu." },
  ],
  audio: REC('rec-b1-14-regle-ecoute'), say: REFRAME, terms: ['fin'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le départ', 'Pour construire un subjonctif régulier, tu pars de...',
    ['la forme ils du présent', 'l’infinitif', 'la forme je du présent'], 0,
    "Ils montre le radical entier ; l'infinitif le cache. EN: ils shows the whole stem."),
  ctl('Le geste', 'Après avoir enlevé -ent, tu obtiens...',
    ['le radical', 'un autre infinitif'], 0,
    "Le morceau qui porte le sens, et qui ne bougera plus. EN: the piece that carries the meaning."),
  ctl('Les fins', 'Combien de fins différentes y a-t-il ?',
    ['trois', 'six formes, cinq fins écrites différentes', 'une seule'], 1,
    "-e, -es, -e, -ions, -iez, -ent : la première et la troisième sont identiques. EN: six slots, and two of them share -e."),
], ['formeils', 'radical', 'fin']);

const ACT2: ActDef = {
  act: {
    id: 'act2',
    title: 'Ils moins -ent',
    opener: {
      line: "La forme que tu cherches, tu la dis déjà tous les jours : elle est dans « ils » du présent. EN: The form you are looking for is one you already say every day: it is inside the ils of the present.",
      imageRef: 'lessons/subjonctif-formation/act02.jpg',
    },
    sections: [],
    milestone: "Tu construis n'importe quel subjonctif régulier en trois gestes, sans regarder l'infinitif. EN: You can build any regular subjunctive in three moves, without looking at the infinitive.",
    estScreens: 38,
    restPoints: ['a2-tableau'],
  },
  sections: [A2_HISTOIRE, A2_REGLE, A2_CONSTRUIRE, A2_TABLEAU, A2_EXEMPLES, A2_CHOISIR, A2_ECOUTE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LE SOSIE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. A learner argues, correctly, that she cannot hear it, and is right
 *  about the sound and wrong about the conclusion. */
const A3_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Léa n’est pas d’accord',
  frSub: 'Deux phrases au tableau',
  text: READING_SOSIE,
  glossary: [
    { word: 'prononciation', en: 'pronunciation', note: "La façon de dire les sons d'une langue." },
    { word: 'pareil', en: 'the same', note: "Sans aucune différence. EN: with no difference at all." },
    { word: 'invisible', en: 'invisible', note: "Là, mais impossible à voir. EN: present, but impossible to see." },
  ],
  questions: [
    { q: 'Pourquoi Léa pense-t-elle que ce n’est pas du subjonctif ?', a: "Parce que « tu travailles » au présent et « que tu travailles » au subjonctif s'écrivent et se disent exactement pareil." },
    { q: 'Quelle troisième phrase met fin à la discussion ?', a: "« Il faut que nous travaillions ensemble. » Là, la forme change, et toute la classe l'entend." },
    { q: 'Combien de formes sur six sont identiques au présent ?', a: "Quatre : je, tu, il et ils. Seules nous et vous se voient." },
    { q: 'Le subjonctif est-il absent des quatre autres formes ?', a: "Non. Il est là, mais il ne s'entend pas et il ne se voit pas. C'est le sosie." },
  ],
  audio: REC('rec-b1-14-tableau-lea'), say: REFRAME, terms: ['sosie', 'fin'],
};

/** NAME. The lookalike, and the test that proves the form is there. */
const A3_SOSIE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-sosie',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sosie',
  title: 'Quatre formes sur six ne bougent pas',
  frSub: 'Les verbes en -er',
  hint: 'Quatre cartes. La dernière donne le test.',
  audio: AUDIO, say: REFRAME, terms: ['sosie'],
  cards: [
    {
      head: 'Le sosie', label: 'présent et subjonctif',
      fr: 'tu parles · que tu parles',
      sub: '[tü PARL] · [kuh tü PARL]',
      body: "Même orthographe, même son. Tu ne peux pas entendre la différence, parce qu'il n'y en a aucune à entendre. EN: same spelling, same sound, and nothing to hear.",
    },
    {
      head: 'Les deux qui se voient', label: 'nous et vous',
      fr: 'nous parlons · que nous parlions',
      sub: '[noo par-LOHⁿ] · [kuh noo par-LYOHⁿ]',
      body: "Ce sont les seules formes où le verbe en -er montre son subjonctif. C'est là que tu perds des points si tu n'y penses pas. EN: the only two -er forms that show, and the only two you can get wrong.",
    },
    {
      head: 'Pourquoi c’est un piège', label: 'le raisonnement faux',
      fr: 'Je ne l’entends pas, donc il n’est pas là.',
      sub: '[zhuh nuh lahⁿ-tahⁿ PA | dohⁿk eel neh pa LA]',
      body: "Beaucoup d'apprenants arrêtent de croire à la forme, et ensuite ils la ratent sur les verbes où elle se voit vraiment. EN: people stop believing in the form, then miss it where it does show.",
    },
    {
      head: 'Le test du nous', label: 'la vérification',
      fr: 'Il faut que tu parles. · Il faut que nous parlions.',
      sub: '[eel foh kuh tü PARL] · [eel foh kuh noo par-LYOHⁿ]',
      body: "Mets la phrase à nous. Si tu obtiens -ions, la première était bien un subjonctif. EN: switch the sentence to nous; if you get -ions, it was a subjunctive.",
    },
  ],
};

/** BUILD. Sort by whether the form shows, then run the nous test. */
const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ça se voit, ou pas',
  frSub: 'Le test du nous',
  groups: [
    grp('Rien ne se voit', [
      it(E(1038), 'que tu regardes, comme au présent'),
      it(E(1045), 'que je cherche, comme au présent'),
      it(E(1048), 'qu’elle explique, comme au présent'),
      it(E(1049), 'que tu restes, comme au présent'),
    ], chk('Ces quatre formes se distinguent-elles du présent ?',
      ['oui, à l’oreille', 'non, jamais', 'oui, à l’écrit'], 1,
      "Ni à l'oreille ni à l'écrit. Elles sont pourtant au subjonctif. EN: neither in sound nor in spelling, and they are subjunctives all the same.")),
    grp('Là, ça se voit', [
      it(E(1041), 'nous travaillions, et non nous travaillons'),
      it(E(1046), 'nous parlions, et non nous parlons'),
      it(E(1042), 'vous arriviez, et non vous arrivez'),
      it(E(1047), 'vous habitiez, et non vous habitez'),
    ], chk('Qu’est-ce qui change dans ces quatre formes ?',
      ['le radical', 'le sujet', 'un i devant la fin'], 2,
      "-ons devient -ions, -ez devient -iez. EN: -ons becomes -ions and -ez becomes -iez.")),
    ctl('Le test', 'Tu veux savoir si « qu’il cherche » est un subjonctif. Que fais-tu ?',
      ['tu mets la phrase à nous', 'tu écoutes la fin', 'tu regardes l’infinitif'], 0,
      "Si nous donne cherchions, la réponse est oui. EN: if nous gives cherchions, the answer is yes."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['sosie', 'fin'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Le sosie au travail',
  examples: [
    ex(E(1040), 'aime : rien ne bouge, et pourtant'),
    ex(E(1043), 'commences : rien ne bouge non plus'),
    ex('fr.b1.routines.084', 'vérifie : identique au présent'),
    ex('fr.b1.cuisine.004', 'semble : identique au présent'),
    ex('fr.a2.jardinage.002', 'arrosions : là, ça se voit'),
    ex('fr.b1.ecologie.004', 'consommions : là aussi'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['sosie'],
};

/** The ear mission: the point is that there is nothing to hear, and hearing
 *  that is itself the skill. */
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Ce que l’oreille ne peut pas te dire',
  lines: [
    ln(E(1038)), ln(E(1041)), ln(E(1039)), ln(E(1042)),
    ln(E(1045)), ln(E(1047)), ln(E(1040)), ln(E(1046)),
  ],
  questions: [
    { q: 'Première phrase : entends-tu une différence avec le présent ?', opts: ['oui, nettement', 'non', 'oui, un peu'], correct: 1,
      why: "« que tu regardes » et « tu regardes » sont le même son. EN: the two are the same sound." },
    { q: 'Deuxième phrase : et là ?', opts: ['non', 'oui'], correct: 1,
      why: "« nous travaillions » ajoute un i qu'on entend. EN: travaillions adds an audible i." },
    { q: 'Quatrième phrase : la personne est...', opts: ['nous', 'tu', 'vous'], correct: 2,
      why: "« que vous arriviez » : la fin -iez. EN: the -iez ending." },
    { q: 'Sixième phrase : la forme se distingue-t-elle du présent ?', opts: ['oui', 'non'], correct: 0,
      why: "« que vous habitiez » contre « vous habitez ». EN: habitiez against habitez." },
    { q: 'Septième phrase : subjonctif ou présent ?', opts: ['présent, clairement', 'impossible à dire à l’oreille'], correct: 1,
      why: "« qu'elle aime » ne se distingue pas. Seul « bien que » te le dit. EN: only bien que tells you." },
    { q: 'Sur les huit phrases, combien montrent leur subjonctif ?', opts: ['quatre', 'huit', 'aucune'], correct: 0,
      why: "Les quatre en nous ou en vous. EN: the four with nous or vous." },
  ],
  audio: REC('rec-b1-14-sosie-ecoute'), say: REFRAME, terms: ['sosie', 'fin'],
};

/** TRAP, stepped. Two mirror errors: keeping the present on nous and vous,
 *  and inventing an ending where none is needed. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Deux pièges du sosie',
  rule: {
    title: 'Ni oublier, ni inventer',
    body: "Sur nous et sur vous, un verbe en -er prend -ions et -iez. Partout ailleurs, il ne prend rien de plus. EN: add the i on nous and vous, and nothing anywhere else.",
  },
  cards: [
    { promptLabel: 'nous resté au présent', promptSound: 'Il faut que nous travaillons ensemble sur ce dossier.',
      fr: 'Il faut que nous travaillions ensemble sur ce dossier.', ipa: '/il fo kə nu tʁa.va.jjɔ̃ ɑ̃.sɑ̃bl syʁ sə do.sje/',
      tip: "Nous travaillons est du présent. Le subjonctif ajoute un i. EN: nous travaillons is the present." },
    { promptLabel: 'vous resté au présent', promptSound: 'Je suis content que vous arrivez si tôt.',
      fr: 'Je suis content que vous arriviez si tôt.', ipa: '/ʒə sɥi kɔ̃.tɑ̃ kə vu.za.ʁi.vje si to/',
      tip: "Après que, vous arrivez devient vous arriviez. EN: after que, arrivez becomes arriviez." },
    { promptLabel: 'l’infinitif à la place', promptSound: 'Il faut que je chercher mes clés.',
      fr: 'Il faut que je cherche mes clés.', ipa: '/il fo kə ʒə ʃɛʁʃ me kle/',
      tip: "Après que vient un verbe conjugué, jamais un infinitif. EN: a conjugated verb follows que, never an infinitive." },
    { promptLabel: 'nous resté au présent', promptSound: 'Je veux que nous parlons calmement.',
      fr: 'Je veux que nous parlions calmement.', ipa: '/ʒə vø kə nu paʁ.ljɔ̃ kal.mə.mɑ̃/',
      tip: "Le même oubli, sur le verbe le plus courant de tous. EN: the same slip, on the commonest verb there is." },
    { promptLabel: 'vous resté au présent', promptSound: 'Bien que vous habitez loin, vous arrivez toujours à l’heure.',
      fr: 'Bien que vous habitiez loin, vous arrivez toujours à l’heure.', ipa: '/bjɛ̃ kə vu.za.bi.tje lwɛ̃ vu.za.ʁi.ve tu.ʒuʁ a lœʁ/',
      tip: "Le premier verbe suit que et change ; le second ne suit rien et ne change pas. EN: only the verb after que changes." },
    { promptLabel: 'un i inventé', promptSound: 'Il faut que tu regardies ce film.',
      fr: 'Il faut que tu regardes ce film.', ipa: '/il fo kə ty ʁə.ɡaʁd sə film/',
      tip: "Le piège inverse. Avec tu, il n'y a rien à ajouter. EN: the mirror trap: with tu there is nothing to add." },
  ],
  drill: [
    { promptSay: 'Il faut que nous ... ensemble. (travailler)', opts: ['travaillons', 'travaillions', 'travaillion'], correct: 1 },
    { promptSay: 'Il faut que tu ... ce film. (regarder)', opts: ['regardes', 'regardies'], correct: 0 },
    { promptSay: 'Je suis content que vous ... si tôt. (arriver)', opts: ['arrivez', 'arriviez'], correct: 1 },
    { promptSay: 'Il faut que je ... mes clés. (chercher)', opts: ['chercher', 'cherchie', 'cherche'], correct: 2 },
    { promptSay: 'Je veux que nous ... calmement. (parler)', opts: ['parlions', 'parlons'], correct: 0 },
    { promptSay: 'Bien qu’elle ... son travail, elle cherche autre chose. (aimer)', opts: ['aimie', 'aime'], correct: 1 },
    { promptSay: 'Bien que vous ... loin, vous arrivez à l’heure. (habiter)', opts: ['habitiez', 'habitez', 'habities'], correct: 0 },
    { promptSay: 'Avant que tu ... , lis la consigne. (commencer)', opts: ['commencies', 'commences', 'commencer'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Ni oublier, ni inventer' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-14-piege-sosie'), say: REFRAME, terms: ['sosie', 'fin'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le compte', 'Avec un verbe en -er, combien de formes se distinguent du présent ?',
    ['quatre', 'six', 'deux'], 2,
    "Nous et vous, et personne d'autre. EN: nous and vous, and nobody else."),
  ctl('Le raisonnement', 'Tu n’entends aucune différence. Qu’est-ce que ça prouve ?',
    ['rien du tout', 'que ce n’est pas un subjonctif', 'que tu as mal écouté'], 0,
    "L'oreille ne peut pas trancher sur un verbe en -er. EN: the ear cannot decide on an -er verb."),
  ctl('Le test', 'Comment vérifies-tu qu’une forme est bien au subjonctif ?',
    ['tu cherches un que et tu mets la phrase à nous', 'tu regardes si le verbe est long'], 0,
    "La porte, puis -ions. EN: the doorway, then -ions."),
], ['sosie', 'porte']);

const ACT3: ActDef = {
  act: {
    id: 'act3',
    title: 'Le sosie',
    opener: {
      line: "Sur les verbes en -er, tu ne peux pas entendre le subjonctif : ici tu apprends pourquoi ça ne veut pas dire qu'il n'est pas là. EN: On -er verbs you cannot hear the subjunctive: here you learn why that does not mean it is absent.",
      imageRef: 'lessons/subjonctif-formation/act03.jpg',
    },
    sections: [],
    milestone: "Tu ne laisses plus tomber la forme parce que tu ne l'entends pas : tu vérifies avec nous. EN: You no longer drop the form because you cannot hear it: you check it with nous.",
    estScreens: 40,
    restPoints: ['a3-ecoute'],
  },
  sections: [A3_LECTURE, A3_SOSIE, A3_CONSTRUIRE, A3_EXEMPLES, A3_ECOUTE, A3_PIEGE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LE RADICAL SE MONTRE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. A driving instructor, whose whole job is a list of instructions in
 *  -ir and -re verbs. No spaced « ? » or « ! » in a bubble. */
const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'La leçon de conduite',
  frSub: 'Une heure de consignes',
  setting: "Auto-école, à Liège. Première heure sur route. Le moniteur parle peu et chaque phrase est une consigne.",
  bubbles: [
    { from: 'narrator', fr: 'La voiture démarre. Le moniteur ouvre son carnet.', en: 'The car starts. The instructor opens his notebook.' },
    { from: 'coach', fr: 'Il faut que tu attendes le feu vert, pas la voiture devant.', en: 'You have to wait for the green light, not for the car in front.', warn: 'attendre : ils attendent, donc attend-' },
    { from: 'user', fr: 'D’accord. Il faut que j’attende le feu.', en: 'All right. I have to wait for the light.' },
    { from: 'coach', fr: 'Il faut que tu mettes le clignotant trois secondes avant.', en: 'You have to put the indicator on three seconds before.', warn: 'mettre : ils mettent, donc mett-' },
    { from: 'user', fr: 'Et si quelqu’un klaxonne derrière.', en: 'And if somebody honks behind me.' },
    { from: 'coach', fr: 'Je veux que tu répondes à la route, pas au klaxon.', en: 'I want you to answer the road, not the horn.', warn: 'répondre : ils répondent, donc répond-' },
    { from: 'narrator', fr: 'Six consignes en dix minutes, et six verbes en -ir ou en -re.', en: 'Six instructions in ten minutes, and six -ir or -re verbs.' },
  ],
  closing: { fr: 'Aucun de ces radicaux ne se lit dans l’infinitif.', en: 'None of these stems can be read off the infinitive.' },
  audio: REC('rec-b1-14-conduite'), say: REFRAME, terms: ['radical', 'formeils'],
};

/** NAME. Three families, and the family where the infinitive lies outright. */
const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-regle',
  title: 'Trois familles, un seul geste',
  frSub: 'Les verbes en -ir et en -re',
  hint: 'Quatre cartes. La dernière est celle qui piège tout le monde.',
  audio: AUDIO, say: REFRAME, terms: ['radical', 'formeils'],
  cards: [
    {
      head: 'Les -ir longs', label: Cap(VERBES_IR_REF),
      fr: 'ils finissent · que je finisse',
      sub: '[eel fee-NEESS] · [kuh zhuh fee-NEESS]',
      body: "Finir, choisir, remplir, réussir : le radical garde -iss-, parce que ils finissent le garde. EN: the -iss- stays because ils finissent keeps it.",
    },
    {
      head: 'Les -ir courts', label: 'partir, sortir, dormir',
      fr: 'ils partent · que je parte',
      sub: '[eel PART] · [kuh zhuh PART]',
      body: "Ici le radical perd la lettre de l'infinitif : part-, sort-, dorm-. Ils partent te le donne tout de suite. EN: here the stem drops a letter, and ils partent hands it to you.",
    },
    {
      head: 'Les -re', label: Cap(VERBES_RE_REF),
      fr: 'ils vendent · que je vende',
      sub: '[eel VAHⁿD] · [kuh zhuh VAHⁿD]',
      body: "Vendre, attendre, répondre, mettre : le radical est presque l'infinitif moins -re. Presque, et c'est le mot important. EN: nearly the infinitive minus -re, and nearly is the important word.",
    },
    {
      head: 'Quand l’infinitif ment', label: Cap(FAIRE_REF),
      fr: 'ils connaissent · ils écrivent · ils lisent',
      sub: '[eel ko-NESS] · [eel-zay-KREEV] · [eel LEEZ]',
      body: "Connaître ne contient pas connaiss-, écrire ne contient pas écriv-, lire ne contient pas lis-. Seul ils le contient. EN: only the ils form contains the real stem.",
    },
  ],
};

/** BUILD. From ils to que je, on the three families in turn. */
const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Prends le radical dans ils',
  frSub: 'Trois familles, huit verbes',
  groups: [
    grp('Ce que ils te donne', [
      it(E(1050), 'choisiss-'),
      it(E(1052), 'attend-'),
      it(E(1058), 'connaiss-'),
      it(E(1060), 'mett-'),
    ], chk('Dans ces quatre formes, où s’arrête le radical ?',
      ['après le premier s', 'avant -ent', 'à la première voyelle'], 1,
      "Toujours au même endroit : juste devant -ent. EN: always in the same place, right before -ent.")),
    grp('Ce que tu obtiens', [
      it(E(1051), 'choisiss- plus -e'),
      it(E(1053), 'attend- plus -e'),
      it(E(1059), 'connaiss- plus -e'),
      it(E(1061), 'mett- plus -e'),
    ], chk('Ces quatre subjonctifs se disent-ils comme la forme ils ?',
      ['non, le son change', 'seulement le dernier', 'oui, exactement'], 2,
      "Le radical est le même, donc le son est le même. EN: same stem, same sound.")),
    ctl('Le mensonge de l’infinitif', 'Tu construis le subjonctif de « lire ». Que prends-tu ?',
      ['ils lisent', 'lire', 'je lis'], 0,
      "Ils lisent donne lis-, et lire ne donne rien. EN: ils lisent gives lis-, lire gives nothing."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['radical', 'formeils'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  title: 'Huit verbes dans des phrases',
  examples: [
    ex(E(1062), 'choisir : ils choisissent'),
    ex(E(1063), 'attendre : ils attendent'),
    ex(E(1064), 'lire : ils lisent'),
    ex(E(1066), 'mettre : ils mettent'),
    ex(E(1067), 'connaître : ils connaissent'),
    ex('fr.b1.metiers.057', 'remplir : ils remplissent'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['radical'],
};

/** CHOOSE. Pick the starting form, not the ending. */
const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Par quoi tu commences',
  frSub: 'Le bon point de départ',
  groups: [
    grp('Le radical complet', [
      it(E(1057), 'de ils disent, pas de dire'),
      it(E(1055), 'de ils lisent, pas de lire'),
      it(E(1024), 'de ils écrivent, pas de écrire'),
      it(E(1059), 'de ils connaissent, pas de connaître'),
    ], chk('Qu’ont en commun ces quatre verbes ?',
      ['ils sont tous en -ir', 'leur infinitif ne montre pas le radical', 'ils sont tous courts'], 1,
      "Dire, lire, écrire et connaître cachent tous le leur. EN: all four infinitives hide their stem.")),
    grp('Le radical raccourci', [
      it(E(1022), 'part-, et non parti-'),
      it(E(1026), 'dorm-, et non dormi-'),
      it(E(1031), 'sort-, et non sorti-'),
      it(E(1065), 'la même chose, dans une phrase'),
    ], chk('Que perdent partir, dormir et sortir au subjonctif ?',
      ['le r seulement', 'rien', 'le i et le r de l’infinitif'], 2,
      "Ils partent donne part-. EN: ils partent gives part-.")),
    ctl('Le réflexe', 'Un verbe inconnu arrive. Ton premier geste est de...',
      ['le dire avec ils', 'chercher son infinitif', 'compter ses syllabes'], 0,
      "Toujours ils, et le reste suit. EN: always ils, and the rest follows."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['radical', 'formeils'],
};

const A4_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a4-dictee',
  layer: 'core',
  title: 'Écris les consignes que tu entends',
  frSub: 'Cinq phrases',
  itemIds: dicteeFor(4),
  audio: AUDIO, say: REFRAME, terms: ['radical', 'fin'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le radical', 'Où lis-tu le radical de « connaître » ?',
    ['dans l’infinitif', 'dans ils connaissent', 'dans je connais'], 1,
    "Ils connaissent, et rien d'autre. EN: ils connaissent, and nothing else."),
  ctl('Les -ir', 'Finir et partir ont-ils le même genre de radical ?',
    ['oui, tous les deux en -i', 'non : finiss- contre part-'], 1,
    "Deux familles derrière la même terminaison d'infinitif. EN: two families behind one infinitive ending."),
  ctl('Le son', 'Le subjonctif de ces verbes se dit-il comme la forme ils ?',
    ['non, il est plus long', 'seulement pour nous', 'oui, pour je, tu, il et ils'], 2,
    "Même radical, mêmes sons : que je vende se dit comme ils vendent. EN: same stem, same sound."),
], ['radical', 'formeils']);

const ACT4: ActDef = {
  act: {
    id: 'act4',
    title: 'Le radical se montre',
    opener: {
      line: "Connaître ne contient pas connaiss-, et écrire ne contient pas écriv- : c'est ici que partir de « ils » se paie. EN: Connaître does not contain connaiss- and écrire does not contain écriv-: this is where starting from ils pays off.",
      imageRef: 'lessons/subjonctif-formation/act04.jpg',
    },
    sections: [],
    milestone: "Tu construis le subjonctif d'un verbe en -ir ou en -re même quand son infinitif ne ressemble à rien. EN: You can build the subjunctive of an -ir or -re verb even when its infinitive looks like nothing.",
    estScreens: 36,
    restPoints: ['a4-exemples'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_CONSTRUIRE, A4_EXEMPLES, A4_CHOISIR, A4_DICTEE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LA BOTTE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. One speaker, two stems of the same verb inside four sentences.
 *  No spaced « ? » or « ! » in a bubble. */
const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Avant l’entraînement',
  frSub: 'Le même verbe, deux fois',
  setting: "Club d'athlétisme, à Abidjan, six heures et demie du matin. La coach fait le tour du groupe avec sa bouteille à la main.",
  bubbles: [
    { from: 'narrator', fr: 'La coach passe devant chacun avant de commencer.', en: 'The coach goes past each of them before they start.' },
    { from: 'coach', fr: 'Il faut que tu boives maintenant, pas pendant la course.', en: 'You have to drink now, not during the race.', warn: 'que tu boives' },
    { from: 'coach', fr: 'Il faut que nous buvions tous avant de partir.', en: 'We all have to drink before we set off.', warn: 'que nous buvions, le même verbe' },
    { from: 'user', fr: 'Boives et buvions. C’est le même verbe.', en: 'Boives and buvions. It is the same verb.' },
    { from: 'coach', fr: 'Le même. Je et nous ne prennent pas le même morceau.', en: 'The same one. Je and nous do not take the same piece.' },
    { from: 'coach', fr: 'Je veux que vous preniez la piste extérieure aujourd’hui.', en: 'I want you to take the outside lane today.', warn: 'preniez, pas prenniez' },
    { from: 'narrator', fr: 'Huit verbes font ça, et ce sont huit verbes de tous les jours.', en: 'Eight verbs do this, and all eight are everyday verbs.' },
  ],
  closing: { fr: 'Un radical pour quatre personnes, un autre pour deux.', en: 'One stem for four persons, another for two.' },
  audio: REC('rec-b1-14-athletisme'), say: REFRAME, terms: ['botte', 'radical'],
};

/** NAME. The shape, and where the outside stem comes from. */
const A5_BOTTE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-botte',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-botte',
  title: 'Dedans et dehors',
  frSub: 'Les verbes à deux radicaux',
  hint: 'Quatre cartes. Dessine la botte avec ton doigt.',
  audio: AUDIO, say: REFRAME, terms: ['botte', 'radical'],
  cards: [
    {
      head: 'Dans la botte', label: 'je, tu, il, ils',
      fr: 'que je boive · qu’ils boivent',
      sub: '[kuh zhuh BWAHV] · [keel BWAHV]',
      body: "Quatre personnes sur six prennent le radical de ils : boiv-, prenn-, vienn-. C'est la règle de l'acte 2, sans changement. EN: four persons out of six take the ils stem, exactly as in act 2.",
    },
    {
      head: 'Hors de la botte', label: 'nous et vous',
      fr: 'que nous buvions · que vous buviez',
      sub: '[kuh noo bü-VYOHⁿ] · [kuh voo bü-VYAY]',
      body: "Ces deux-là prennent l'autre radical : buv-, pren-, ven-. C'est celui de nous au présent. EN: those two take the other stem, the one nous uses in the present.",
    },
    {
      head: 'Tu l’as déjà', label: Cap(IMP_FORM_REF),
      fr: 'nous buvions (imparfait) · que nous buvions',
      sub: '[noo bü-VYOHⁿ] · [kuh noo bü-VYOHⁿ]',
      body: `« ${B101_REFRAME} » Les deux formes sont identiques : tu ne fabriques rien. EN: ${B101_REFRAME_EN} The two forms are identical, so you build nothing new.`,
    },
    {
      head: 'Huit verbes, et leur famille', label: Cap(PRENDRE_REF),
      fr: 'boire, prendre, venir, voir, devoir, recevoir, mourir, tenir',
      sub: '[BWAR] · [PRAHⁿDR] · [vuh-NEER] · [VWAR]',
      body: "Apprendre et comprendre suivent prendre ; revenir et devenir suivent venir. Tu en connais donc plus que huit. EN: apprendre follows prendre and revenir follows venir, so you know more than eight.",
    },
  ],
};

const A5_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-tableau',
  layer: 'core',
  sheetId: 'sheet-botte',
  title: 'Six verbes, les deux radicaux',
  cols: ['Verbe', 'que je', 'que nous'],
  rows: [
    { cells: ['boire', 'que je boive', 'que nous buvions'], say: 'Il faut que tu boives plus d’eau.',
      detail: { title: 'boire', body: "ils boivent donne boiv-, nous buvons donne buv-. EN: ils boivent gives boiv-, nous buvons gives buv-.", say: 'Il faut que je boive quelque chose de chaud.' } },
    { cells: ['prendre', 'que je prenne', 'que nous prenions'], say: 'Il faut qu’elle prenne une décision cette semaine.',
      detail: { title: 'prendre', body: "Deux n dedans, un seul dehors : prenne contre prenions. EN: two n inside the boot, one outside.", say: 'Je veux que vous preniez le train de huit heures.' } },
    { cells: ['venir', 'que je vienne', 'que nous venions'], say: 'Bien qu’elle vienne rarement, tout le monde la connaît.',
      detail: { title: 'venir', body: "Vienne dedans, venions dehors. Tenir fait exactement pareil. EN: vienne inside, venions outside, and tenir does the same.", say: 'Il faut que vous veniez avec vos papiers.' } },
    { cells: ['voir', 'que je voie', 'que nous voyions'], say: 'Il faut que vous voyiez ce film.',
      detail: { title: 'voir', body: "Voie dedans, voyions dehors, avec deux i à l'écrit. EN: voie inside, voyions outside, with two written i.", say: 'Je veux que nous voyions le dossier ensemble.' } },
    { cells: ['devoir', 'que je doive', 'que nous devions'], say: 'Bien que je doive partir tôt, je reste pour le dessert.',
      detail: { title: 'devoir', body: "Doive dedans, devions dehors. Recevoir suit la même route. EN: doive inside, devions outside, and recevoir follows.", say: 'Bien que nous devions partir, nous restons un peu.' } },
    { cells: ['mourir', 'que je meure', 'que nous mourions'], say: 'Il faut que la plante ne meure pas cet hiver.',
      detail: { title: 'mourir', body: "Meure dedans, mourions dehors. C'est le seul de la liste sans cousin. EN: meure inside, mourions outside, and it has no cousins.", say: 'Avant que les fleurs meurent, mets-les à l’ombre.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['botte', 'radical'],
};

/** BUILD. The two stems side by side, then the control that names the rule. */
const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Dedans, dehors',
  frSub: 'Le même verbe, deux morceaux',
  groups: [
    grp('Dans la botte', [
      it(E(1070), 'boiv-'),
      it(E(1072), 'prenn-'),
      it(E(1074), 'vienn-'),
      it(E(1080), 'reçoiv-'),
    ], chk('D’où viennent ces quatre radicaux ?',
      ['de la forme ils du présent', 'de l’infinitif', 'de la forme nous'], 0,
      "Ils boivent, ils prennent, ils viennent, ils reçoivent. EN: from ils boivent, prennent, viennent, reçoivent.")),
    grp('Hors de la botte', [
      it(E(1071), 'buv-'),
      it(E(1073), 'pren-'),
      it(E(1075), 'ven-'),
      it(E(1081), 'recev-'),
    ], chk('Et ces quatre-là ?',
      ['de la forme ils', 'de la forme nous du présent', 'de l’infinitif'], 1,
      "Nous buvons, nous prenons, nous venons, nous recevons. EN: from nous buvons, prenons, venons, recevons.")),
    ctl('La frontière', 'Quelles personnes sortent de la botte ?',
      ['je et tu', 'il et ils', 'nous et vous'], 2,
      "Toujours les deux mêmes, sur les huit verbes. EN: always the same two, across all eight verbs."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['botte', 'formeils'],
};

/** The ear mission: the two stems are easy to hear, which is why this act
 *  can be tested by ear and act 3 cannot. */
const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Dedans ou dehors',
  lines: [
    ln(E(1070)), ln(E(1071)), ln(E(1072)), ln(E(1073)),
    ln(E(1074)), ln(E(1075)), ln(E(1078)), ln(E(1079)),
  ],
  questions: [
    { q: 'Première et deuxième : est-ce le même verbe ?', opts: ['oui', 'non'], correct: 0,
      why: "Boive et buvions viennent tous les deux de boire. EN: boive and buvions both come from boire." },
    { q: 'Deuxième forme : quelle personne ?', opts: ['nous', 'je', 'ils'], correct: 0,
      why: "La fin -ions te le dit avant le radical. EN: the -ions ending tells you before the stem does." },
    { q: 'Troisième forme : dedans ou dehors ?', opts: ['dehors', 'dedans', 'impossible à dire'], correct: 1,
      why: "Prenne : deux n, et la personne est je. EN: prenne, with two n, and the person is je." },
    { q: 'Cinquième forme : le radical est...', opts: ['ven-', 'vienn-'], correct: 1,
      why: "Vienne se dit en deux syllabes, venions en trois. EN: vienne has two syllables, venions three." },
    { q: 'Septième forme : quel verbe ?', opts: ['dire', 'donner', 'devoir'], correct: 2,
      why: "Doive vient de ils doivent. EN: doive comes from ils doivent." },
    { q: 'Sur les huit, combien sont hors de la botte ?', opts: ['quatre', 'deux', 'six'], correct: 0,
      why: "Une sur deux : buvions, prenions, venions, devions. EN: every other one." },
  ],
  audio: REC('rec-b1-14-botte-ecoute'), say: REFRAME, terms: ['botte'],
};

/** CHOOSE. The person picks the stem, and nothing else does. */
const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'La personne choisit le morceau',
  frSub: 'Dans des phrases entières',
  groups: [
    grp('Le radical de ils', [
      it(E(1086), 'tu boives'),
      it(E(1088), 'elle vienne'),
      it('fr.b1.famille.060', 'tu prennes'),
      it('fr.b1.cafe.059', 'tu viennes'),
    ], chk('Ces quatre phrases ont toutes...',
      ['une personne de la botte', 'un nous ou un vous'], 0,
      "Tu, elle : deux personnes de la botte. EN: tu and elle are both inside the boot.")),
    grp('Le radical de nous', [
      it(E(1087), 'vous preniez'),
      it(E(1104), 'vous voyiez'),
      it(E(1181), 'nous partions, même logique'),
      it(E(1192), 'vous veniez'),
    ], chk('Pourquoi ces formes sont-elles plus longues ?',
      ['parce qu’elles sont au pluriel', 'parce que la fin est -ions ou -iez'], 1,
      "La fin longue s'ajoute à l'autre radical. EN: the long ending is added to the other stem.")),
    ctl('Le réflexe', 'Tu veux dire « que vous veniez ». Par quoi commences-tu ?',
      ['ils viennent', 'nous venons', 'venir'], 1,
      "Vous est hors de la botte, donc le radical vient de nous. EN: vous is outside the boot, so the stem comes from nous."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['botte', 'fin'],
};

/** TRAP, stepped. The flattened boot in both directions. */
const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Deux pièges de la botte',
  rule: {
    title: 'Un seul radical, et la botte est cassée',
    body: "Le premier piège met le radical de ils partout : que nous boivions. Le second met celui de nous partout : que je buve. Les deux existent dans le même verbe, à des places différentes. EN: one stem everywhere breaks it, in either direction.",
  },
  cards: [
    { promptLabel: 'le radical de ils sur nous', promptSound: 'Il faut que nous boivions plus d’eau.',
      fr: 'Il faut que nous buvions plus d’eau.', ipa: '/il fo kə nu by.vjɔ̃ ply do/',
      tip: "Nous sort de la botte, donc buv-. EN: nous is outside the boot, so buv-." },
    { promptLabel: 'le radical de ils sur vous', promptSound: 'Je veux que vous prenniez le train de huit heures.',
      fr: 'Je veux que vous preniez le train de huit heures.', ipa: '/ʒə vø kə vu pʁə.nje lə tʁɛ̃ də ɥi.tœʁ/',
      tip: "Un seul n hors de la botte. EN: one n only, outside the boot." },
    { promptLabel: 'le radical de nous sur je', promptSound: 'Il faut que je buve quelque chose de chaud.',
      fr: 'Il faut que je boive quelque chose de chaud.', ipa: '/il fo kə ʒə bwav kɛl.kə ʃoz də ʃo/',
      tip: "Je est dans la botte, donc boiv-. EN: je is inside the boot, so boiv-." },
    { promptLabel: 'le radical de nous sur elle', promptSound: 'Il faut qu’elle prene une décision cette semaine.',
      fr: 'Il faut qu’elle prenne une décision cette semaine.', ipa: '/il fo kɛl pʁɛn yn de.si.zjɔ̃ sɛt sə.mɛn/',
      tip: "Elle est dans la botte : deux n. EN: elle is inside the boot, so two n." },
    { promptLabel: 'le radical de ils sur nous', promptSound: 'Avant que nous viennions, préviens-nous.',
      fr: 'Avant que nous venions, préviens-nous.', ipa: '/a.vɑ̃ kə nu və.njɔ̃ pʁe.vjɛ̃ nu/',
      tip: "Le même verbe, l'autre morceau : ven-. EN: same verb, other piece." },
    { promptLabel: 'la botte oubliée sur voir', promptSound: 'Il faut que vous voyez ce film.',
      fr: 'Il faut que vous voyiez ce film.', ipa: '/il fo kə vu vwa.je sə film/',
      tip: "Vous voyez est le présent. Le subjonctif ajoute un i. EN: vous voyez is the present." },
  ],
  drill: [
    { promptSay: 'Il faut que nous ... plus d’eau. (boire)', opts: ['buvions', 'boivions'], correct: 0 },
    { promptSay: 'Il faut que je ... quelque chose de chaud. (boire)', opts: ['buve', 'buive', 'boive'], correct: 2 },
    { promptSay: 'Je veux que vous ... le train de huit heures. (prendre)', opts: ['prenniez', 'preniez'], correct: 1 },
    { promptSay: 'Il faut qu’elle ... une décision. (prendre)', opts: ['prenne', 'prene', 'prenions'], correct: 0 },
    { promptSay: 'Avant que nous ... , préviens-nous. (venir)', opts: ['venions', 'viennions'], correct: 0 },
    { promptSay: 'Bien qu’elle ... rarement, tout le monde la connaît. (venir)', opts: ['venne', 'vienne'], correct: 1 },
    { promptSay: 'Il faut que vous ... ce film. (voir)', opts: ['voyez', 'voyiez', 'voiez'], correct: 1 },
    { promptSay: 'Bien que je ... partir tôt, je reste. (devoir)', opts: ['devions', 'deve', 'doive'], correct: 2 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Un seul radical, et la botte est cassée' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme plate raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-14-piege-botte'), say: REFRAME, terms: ['botte', 'radical'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le compte', 'Combien de radicaux a « prendre » au subjonctif ?',
    ['deux', 'un', 'six'], 0,
    "Prenn- dans la botte, pren- dehors. EN: prenn- inside, pren- outside."),
  ctl('La frontière', 'Où se trouve la frontière de la botte ?',
    ['entre il et nous, et de nouveau entre vous et ils', 'entre je et tu'], 0,
    "Nous et vous sont les deux seules personnes dehors. EN: nous and vous are the only two outside."),
  ctl('D’où vient le dehors', 'Le radical de nous et vous, tu le connais depuis...',
    ['cette leçon', 'la première leçon du B1', 'jamais'], 1,
    `C'est le radical de l'imparfait. « ${B101_REFRAME} » EN: it is the imparfait stem.`),
], ['botte', 'radical']);

const ACT5: ActDef = {
  act: {
    id: 'act5',
    title: 'La botte',
    opener: {
      line: "Huit verbes changent de morceau au milieu du tableau : ici tu apprends à voir la frontière avant de parler. EN: Eight verbs change piece halfway down the table: here you learn to see the border before you speak.",
      imageRef: 'lessons/subjonctif-formation/act05.jpg',
    },
    sections: [],
    milestone: "Tu poses le bon radical pour chaque personne sur les huit verbes à deux bases. EN: You put the right stem on every person, across the eight two-stem verbs.",
    estScreens: 48,
    restPoints: ['a5-construire', 'a5-piege'],
  },
  sections: [A5_HISTOIRE, A5_BOTTE, A5_TABLEAU, A5_CONSTRUIRE, A5_ECOUTE, A5_CHOISIR, A5_PIEGE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — NOUS ET VOUS
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. A class works out for itself that the two middle forms are already
 *  known, then meets the one thing that is genuinely new: the second i. */
const A6_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a6-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Les deux du milieu',
  frSub: 'Un cours du soir à Bruxelles',
  text: READING_NOUS,
  glossary: [
    { word: 'entoure', en: 'circles, draws a ring round', note: "Il dessine un rond autour de deux lignes. EN: he draws a ring round two lines." },
    { word: 'l’orthographe', en: 'spelling', note: "La façon d'écrire un mot, lettre par lettre." },
    { word: 'souligne', en: 'underlines', note: "Il tire un trait sous le mot. EN: he draws a line under the word." },
  ],
  questions: [
    { q: 'Pourquoi le professeur entoure-t-il les deux lignes du milieu ?', a: "Parce que « que nous parlions » et « que vous parliez » sont exactement les formes de l'imparfait, déjà connues." },
    { q: 'Qu’est-ce qui arrive avec le verbe « étudier » ?', a: "Le radical finit déjà par i, donc la fin -ions en ajoute un deuxième : que nous étudiions." },
    { q: 'Entend-on le double i ?', a: "Presque pas. Il faut quand même l'écrire, et c'est la seule difficulté de ces deux formes." },
    { q: 'Quelle phrase le professeur souligne-t-il à la fin ?', a: "Sa propre phrase : « Il faudrait que nous vérifiions l'orthographe de chaque mot difficile. » Elle contient elle-même un double i." },
  ],
  audio: REC('rec-b1-14-cours-du-soir'), say: REFRAME, terms: ['fin', 'doublei'],
};

/** NAME. Where the two middle forms come from, and the second i. */
const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-botte',
  title: 'Nous et vous, et un i de plus',
  frSub: 'Les deux formes longues',
  hint: 'Quatre cartes. La troisième est la seule vraie nouveauté.',
  audio: AUDIO, say: REFRAME, terms: ['fin', 'doublei'],
  cards: [
    {
      head: 'C’est l’imparfait', label: Cap(IMP_FORM_REF),
      fr: 'nous parlions · que nous parlions',
      sub: '[noo par-LYOHⁿ] · [kuh noo par-LYOHⁿ]',
      body: `« ${B101_REFRAME} » Sur tous les verbes sauf être et avoir, les deux formes sont identiques. EN: ${B101_REFRAME_EN} Apart from être and avoir, the two are identical.`,
    },
    {
      head: 'Un i devant la fin', label: '-ions et -iez',
      fr: 'nous finissons · que nous finissions',
      sub: '[noo fee-nee-SOHⁿ] · [kuh noo fee-nee-SYOHⁿ]',
      body: "Le présent donne -ons et -ez. Le subjonctif glisse un i devant : -ions et -iez. C'est tout le changement. EN: the present gives -ons and -ez, and the subjunctive slips an i in front.",
    },
    {
      head: 'Quand le radical finit déjà par i', label: 'le double i',
      fr: 'que nous étudiions · que nous riions',
      sub: '[kuh noo-zay-tü-DYOHⁿ] · [kuh noo ree-YOHⁿ]',
      body: "Étudi- plus -ions fait deux i. Ri- plus -ions aussi. On ne les entend presque pas, et il faut les écrire tous les deux. EN: two i, barely audible, both written.",
    },
    {
      head: 'Et avec un y', label: 'croire, voir, payer',
      fr: 'que nous croyions · que vous croyiez',
      sub: '[kuh noo krwa-YOHⁿ] · [kuh voo krwa-YAY]',
      body: "Le y compte comme un i. Croy- plus -ions donne croyions, avec le y et le i. EN: the y counts as an i, so croy- plus -ions keeps both letters.",
    },
  ],
};

/** BUILD. From the present to the subjunctive, on the two long forms only. */
const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Glisse le i',
  frSub: 'Du présent au subjonctif',
  groups: [
    grp('Les deux formes longues', [
      it(E(1090), '-ons devient -ions'),
      it(E(1091), '-ez devient -iez'),
      it(E(1092), 'même geste, verbe en -ir'),
      it(E(1093), 'même geste, verbe en -ir'),
    ], chk('Qu’ajoutes-tu à la forme du présent ?',
      ['un s', 'rien', 'un i'], 2,
      "Un seul i, glissé devant la fin. EN: one i, slipped in front of the ending.")),
    grp('Quand il y a déjà un i ou un y', [
      it(E(1094), 'étudi- plus -ions'),
      it(E(1096), 'croy- plus -ions'),
      it(E(1098), 'ri- plus -ions'),
      it(E(1097), 'croy- plus -iez'),
    ], chk('Combien de i écris-tu dans « que nous étudiions » ?',
      ['deux', 'un', 'trois'], 0,
      "Celui du radical et celui de la fin. EN: the stem's and the ending's.")),
    ctl('L’oreille', 'Entends-tu la différence entre « nous étudions » et « que nous étudiions » ?',
      ['très clairement', 'presque pas', 'assez bien'], 1,
      "Presque pas, et il faut l'écrire quand même. EN: barely, and you write it anyway."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['doublei', 'fin'],
};

const A6_DOUBLEI: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-doublei',
  layer: 'core',
  title: 'Le double i dans des phrases',
  examples: [
    ex(E(1099), 'travaill- plus -ions'),
    ex(E(1101), 'oubli- plus -ions'),
    ex(E(1100), 'pay- plus -iez'),
    ex(E(1104), 'voy- plus -iez'),
    ex('fr.b1.dictee.045', 'vérifi- plus -ions, et la phrase le dit elle-même'),
    ex('fr.b1.famille.075', 'parl- plus -ions, sans double i'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['doublei'],
};

/** TRAP, flat. Four errors, each one a reasonable thing to have written. */
const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs sur nous et vous',
  errors: [
    { wrong: 'Il faut que nous consommons moins d’énergie.',
      right: 'Il faut que nous consommions moins d’énergie.',
      why: "Normal : nous consommons est juste partout ailleurs. Après que, il lui manque le i. EN: correct everywhere else, and one i short here." },
    { wrong: 'Il faut que nous vérifions l’orthographe.',
      right: 'Il faut que nous vérifiions l’orthographe.',
      why: "Tu as bien mis le i de la fin. C'est celui du radical qui manque : vérifi-. EN: you added the ending's i; the stem's i is the missing one." },
    { wrong: 'Je veux que vous payez avant de partir.',
      right: 'Je veux que vous payiez avant de partir.',
      why: "Vous payez existe et il est au présent. Le y garde sa place et le i s'ajoute. EN: vous payez is the present; the y stays and the i is added." },
    { wrong: 'Il faut que nous soyions prêts à onze heures.',
      right: 'Il faut que nous soyons prêts à onze heures.',
      why: "Le piège inverse : être ne prend pas -ions. C'est un des deux verbes qui changent aussi de fins. EN: the mirror trap, and être is one of the two verbs that change endings too." },
  ],
  audio: AUDIO, say: REFRAME, terms: ['doublei', 'fin'],
};

const A6_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a6-dictee',
  layer: 'core',
  title: 'Écris les formes longues',
  frSub: 'Quatre phrases',
  itemIds: dicteeFor(6),
  audio: AUDIO, say: REFRAME, terms: ['doublei'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('L’origine', 'Les formes nous et vous du subjonctif sont celles...',
    ['du futur', 'du présent', 'de l’imparfait'], 2,
    "Sauf pour être et avoir, elles sont identiques à l'imparfait. EN: identical to the imparfait, apart from être and avoir."),
  ctl('Le geste', 'Pour passer de « nous parlons » à « que nous parlions », tu...',
    ['changes le radical', 'glisses un i devant la fin'], 1,
    "Le radical ne bouge pas : parl- reste parl-. EN: the stem does not move."),
  ctl('Le double i', 'Dans « que vous croyiez », combien de lettres portent le son i ?',
    ['deux, le y et le i', 'une', 'aucune'], 0,
    "Le y du radical et le i de la fin. EN: the stem's y and the ending's i."),
], ['doublei', 'fin']);

const ACT6: ActDef = {
  act: {
    id: 'act6',
    title: 'Nous et vous',
    opener: {
      line: "Les deux formes du milieu, tu les dis déjà à l'imparfait : ici tu apprends le seul détail qui change vraiment. EN: The two middle forms are ones you already say in the imparfait: here you learn the one detail that really changes.",
      imageRef: 'lessons/subjonctif-formation/act06.jpg',
    },
    sections: [],
    milestone: "Tu écris les formes nous et vous sans hésiter, y compris quand deux i se suivent. EN: You write the nous and vous forms without hesitating, double i included.",
    estScreens: 32,
    restPoints: ['a6-construire'],
  },
  sections: [A6_LECTURE, A6_CARTES, A6_CONSTRUIRE, A6_DOUBLEI, A6_ERREURS, A6_DICTEE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LES DIX, PREMIÈRE MOITIÉ
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Four irregular subjunctives inside one phone call, from somebody who
 *  has never thought about any of them. No spaced « ? » or « ! » in a bubble. */
const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Maman organise dimanche',
  frSub: 'Quatre irréguliers en un appel',
  setting: "Jeudi soir. Nadia décroche, sa mère a déjà commencé la liste de dimanche.",
  bubbles: [
    { from: 'narrator', fr: 'Sa mère parle vite et ne s’arrête pas sur les formes.', en: 'Her mother talks fast and does not stop to think about the forms.' },
    { from: 'coach', fr: 'Il faut que tu sois là avant midi, sinon on mange sans toi.', en: 'You have to be here before noon, otherwise we eat without you.', warn: 'être : que tu sois' },
    { from: 'coach', fr: 'Et il faut que ton frère aille chercher ta tante à la gare.', en: 'And your brother has to go and pick up your aunt from the station.', warn: 'aller : qu’il aille' },
    { from: 'user', fr: 'Je veux bien, mais il faut que j’aie une heure exacte.', en: 'Happy to, but I need an exact time.', warn: 'avoir : que j’aie' },
    { from: 'coach', fr: 'Onze heures quarante. Et il faut que quelqu’un fasse la salade.', en: 'Eleven forty. And somebody has to make the salad.', warn: 'faire : qu’il fasse' },
    { from: 'user', fr: 'Sois, aille, aie, fasse. Quatre verbes, quatre surprises.', en: 'Sois, aille, aie, fasse. Four verbs, four surprises.' },
    { from: 'narrator', fr: 'Ce sont aussi les quatre verbes les plus fréquents du français.', en: 'They are also the four commonest verbs in French.' },
  ],
  closing: { fr: 'Aucune règle ne les donne, et tu les entends dix fois par jour.', en: 'No rule gives them, and you hear them ten times a day.' },
  audio: REC('rec-b1-14-dimanche'), say: REFRAME, terms: ['noyau', 'porte'],
};

/** NAME. One card per verb, and the fact that two of them break the endings. */
const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-dix',
  title: 'Être, avoir, aller, faire',
  frSub: 'Les quatre premiers',
  hint: 'Quatre cartes. Les deux premières sont les seules de tout le français à changer aussi de fins.',
  audio: AUDIO, say: REFRAME, terms: ['noyau', 'fin'],
  cards: [
    {
      head: 'être', label: 'fins spéciales',
      fr: 'que je sois · que nous soyons · qu’ils soient',
      sub: '[kuh zhuh SWA] · [kuh noo swa-YOHⁿ] · [keel SWA]',
      body: "Sois, sois, soit, soyons, soyez, soient. Ni -e ni -ions : c'est le premier des deux verbes à changer de fins. EN: neither -e nor -ions, and one of only two verbs that change the endings.",
    },
    {
      head: 'avoir', label: 'fins spéciales',
      fr: 'que j’aie · que nous ayons · qu’ils aient',
      sub: '[kuh ZHEH] · [kuh noo-za-YOHⁿ] · [keel-ZEH]',
      body: "Aie, aies, ait, ayons, ayez, aient. Quatre formes sur six se disent [eh] : seul l'écrit les sépare. EN: four of the six sound identical, and only the spelling separates them.",
    },
    {
      head: 'aller', label: 'fins normales',
      fr: 'que j’aille · que nous allions',
      sub: '[kuh ZHAÏ] · [kuh noo-za-LYOHⁿ]',
      body: "Aille dans la botte, allions dehors. Le radical est bizarre, la forme de la botte est celle de l'acte 5. EN: a strange stem in an ordinary boot shape.",
    },
    {
      head: 'faire', label: 'fins normales',
      fr: 'que je fasse · que nous fassions',
      sub: '[kuh zhuh FASS] · [kuh noo fa-SYOHⁿ]',
      body: "Fass- partout, sans exception, avec les six fins normales. C'est le plus facile des dix. EN: fass- everywhere, with the six ordinary endings: the easiest of the ten.",
    },
  ],
};

const A7_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a7-tableau',
  layer: 'core',
  sheetId: 'sheet-dix',
  title: 'Les six formes d’être et d’avoir',
  cols: ['Personne', 'être', 'avoir'],
  rows: [
    { cells: ['que je', 'que je sois', 'que j’aie'], say: 'Il faut que je sois à la gare à six heures.',
      detail: { title: 'la forme je', body: "Sois se dit [swa], aie se dit [eh]. Deux formes très courtes. EN: two very short forms.", say: 'Bien que je n’aie pas beaucoup de temps, je viendrai.' } },
    { cells: ['que tu', 'que tu sois', 'que tu aies'], say: 'Il faut que tu sois à l’heure demain.',
      detail: { title: 'la forme tu', body: "Identique à la forme je, à l'oreille comme au sens. Seul le s d'aies s'ajoute à l'écrit. EN: identical to the je form by ear.", say: 'Je veux que tu aies une réponse avant ce soir.' } },
    { cells: ['qu’il, qu’elle', 'qu’il soit', 'qu’il ait'], say: 'Il faut que le rapport soit prêt avant vendredi.',
      detail: { title: 'la forme il', body: "Soit et ait : deux formes d'une syllabe, et les plus fréquentes des deux verbes. EN: one syllable each, and the commonest of both.", say: 'Bien que ce soit difficile, elle continue.' } },
    { cells: ['que nous', 'que nous soyons', 'que nous ayons'], say: 'Il faut que nous soyons prêts à huit heures.',
      detail: { title: 'la forme nous', body: "-ons, pas -ions. C'est le seul endroit du français où la règle du i ne marche pas. EN: -ons, not -ions: the one place the i rule fails.", say: 'Bien que nous ayons peu de place, tout le monde tient.' } },
    { cells: ['que vous', 'que vous soyez', 'que vous ayez'], say: 'Je suis content que vous soyez là.',
      detail: { title: 'la forme vous', body: "-ez, pas -iez, exactement comme la forme nous. EN: -ez, not -iez, exactly like the nous form.", say: 'Il faut que vous ayez vos papiers sur vous.' } },
    { cells: ['qu’ils, qu’elles', 'qu’ils soient', 'qu’ils aient'], say: 'Bien que mes parents soient divorcés, ils s’entendent bien.',
      detail: { title: 'la forme ils', body: "Soient se dit comme sois, aient se dit comme aie. Rien ne s'entend à la fin. EN: soient sounds like sois and aient sounds like aie.", say: 'Il faut que les voisins soient prévenus.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['noyau', 'fin'],
};

/** BUILD. Sort the four by whether the endings behave. */
const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Deux comportements',
  frSub: 'Les fins changent, ou pas',
  groups: [
    grp('Les fins changent', [
      it(E(1105), 'ni -e ni -es'),
      it(E(1106), '-ons, pas -ions'),
      it(E(1108), 'la forme la plus courte du français'),
      it(E(1109), '-ons, pas -ions'),
    ], chk('Combien de verbes français changent aussi de fins au subjonctif ?',
      ['huit', 'deux', 'dix'], 1,
      "Être et avoir, et personne d'autre. EN: être and avoir, and nobody else.")),
    grp('Les fins restent normales', [
      it(E(1111), '-e, comme partout'),
      it(E(1112), '-ions, comme partout'),
      it(E(1114), '-e, comme partout'),
      it(E(1115), '-ions, comme partout'),
    ], chk('Qu’est-ce qui est irrégulier chez aller et faire ?',
      ['le radical seulement', 'les fins'], 0,
      "Aill-, all-, fass- : les fins, elles, sont normales. EN: only the stem is irregular.")),
    ctl('Le raccourci', 'Sur les dix verbes à apprendre, combien ont des fins normales ?',
      ['deux', 'cinq', 'huit'], 2,
      "Huit sur dix. Le vrai travail est sur les radicaux. EN: eight out of ten, so the real work is the stems."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['noyau', 'fin'],
};

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Quatre verbes à l’oreille',
  lines: [
    ln(E(1105)), ln(E(1108)), ln(E(1111)), ln(E(1114)),
    ln(E(1106)), ln(E(1109)), ln(E(1112)), ln(E(1115)),
  ],
  questions: [
    { q: 'Première forme : quel verbe ?', opts: ['être', 'savoir', 'avoir'], correct: 0,
      why: "« que je sois », en une syllabe. EN: que je sois, one syllable." },
    { q: 'Deuxième forme : quel verbe ?', opts: ['aller', 'avoir'], correct: 1,
      why: "« que j'aie », et la forme ne dure presque rien. EN: que j'aie, barely a sound." },
    { q: 'Troisième forme : quel verbe ?', opts: ['avoir', 'aller', 'faire'], correct: 1,
      why: "« que j'aille » : deux syllabes, et le son de travail. EN: que j'aille, two syllables." },
    { q: 'Cinquième forme : la personne est...', opts: ['je', 'vous', 'nous'], correct: 2,
      why: "« que nous soyons » : la fin en -ons. EN: soyons ends in -ons." },
    { q: 'Sixième forme : la fin est -ons ou -ions ?', opts: ['-ons', '-ions'], correct: 0,
      why: "« que nous ayons ». Avoir refuse le i, comme être. EN: avoir refuses the i, exactly like être." },
    { q: 'Huitième forme : la fin est -ons ou -ions ?', opts: ['-ons', '-ions'], correct: 1,
      why: "« que nous fassions ». Faire prend les fins normales. EN: faire takes the ordinary endings." },
  ],
  audio: REC('rec-b1-14-dix-ecoute'), say: REFRAME, terms: ['noyau'],
};

/** TRAP, stepped. Regularising the four, in both directions. */
const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Deux pièges des irréguliers',
  rule: {
    title: 'Ne régularise pas, et ne sur-corrige pas',
    body: "Le premier piège applique la règle à être : que je soie. Le second ajoute un i : que nous soyions. Être et avoir ont leurs propres fins. EN: these two verbs have endings of their own, in both directions.",
  },
  cards: [
    { promptLabel: 'la règle appliquée à être', promptSound: 'Il faut que je soie à la gare à six heures.',
      fr: 'Il faut que je sois à la gare à six heures.', ipa: '/il fo kə ʒə swa a la ɡaʁ a si.zœʁ/',
      tip: "Être ne prend pas -e. La forme est sois, et elle ne s'allonge pas. EN: être does not take -e." },
    { promptLabel: 'la règle appliquée à avoir', promptSound: 'Je veux que tu ayes une réponse avant ce soir.',
      fr: 'Je veux que tu aies une réponse avant ce soir.', ipa: '/ʒə vø kə ty ɛ yn ʁe.pɔ̃s a.vɑ̃ sə swaʁ/',
      tip: "Aies s'écrit avec ai, comme j'ai. EN: aies is written with ai, like j'ai." },
    { promptLabel: 'un i en trop', promptSound: 'Il faut que nous soyions prêts à huit heures.',
      fr: 'Il faut que nous soyons prêts à huit heures.', ipa: '/il fo kə nu swa.jɔ̃ pʁɛ a ɥi.tœʁ/',
      tip: "Être prend -ons. C'est le seul endroit sans i. EN: être takes -ons, the only place with no i." },
    { promptLabel: 'un i en trop', promptSound: 'Bien que nous ayions peu de place, tout le monde tient.',
      fr: 'Bien que nous ayons peu de place, tout le monde tient.', ipa: '/bjɛ̃ kə nu.za.jɔ̃ pø də plas tu lə mɔ̃d tjɛ̃/',
      tip: "Avoir fait comme être : -ons et -ez, sans i. EN: avoir behaves like être." },
    { promptLabel: 'aller régularisé', promptSound: 'Il faut qu’elle alle chercher les enfants.',
      fr: 'Il faut qu’elle aille chercher les enfants.', ipa: '/il fo kɛ.laj ʃɛʁ.ʃe le.zɑ̃.fɑ̃/',
      tip: "Ils vont ne donne rien. Aille s'apprend en entier. EN: ils vont gives you nothing here." },
    { promptLabel: 'faire régularisé', promptSound: 'Je veux que nous faisions le point ensemble.',
      fr: 'Je veux que nous fassions le point ensemble.', ipa: '/ʒə vø kə nu fa.sjɔ̃ lə pwɛ̃ ɑ̃.sɑ̃bl/',
      tip: "Nous faisions est l'imparfait. Au subjonctif, le radical est fass-. EN: nous faisions is the imparfait." },
  ],
  drill: [
    { promptSay: 'Il faut que je ... à la gare à six heures. (être)', opts: ['sois', 'soie', 'soye'], correct: 0 },
    { promptSay: 'Il faut que nous ... prêts à huit heures. (être)', opts: ['soyons', 'soyions'], correct: 0 },
    { promptSay: 'Je veux que tu ... une réponse ce soir. (avoir)', opts: ['ayes', 'aies', 'as'], correct: 1 },
    { promptSay: 'Bien que nous ... peu de place, tout le monde tient. (avoir)', opts: ['ayions', 'ayons'], correct: 1 },
    { promptSay: 'Il faut qu’elle ... chercher les enfants. (aller)', opts: ['alle', 'va', 'aille'], correct: 2 },
    { promptSay: 'Avant que nous ... au marché, fais la liste. (aller)', opts: ['allions', 'aillions'], correct: 0 },
    { promptSay: 'Je veux que nous ... le point ensemble. (faire)', opts: ['faisions', 'fassions'], correct: 1 },
    { promptSay: 'Bien qu’il ... froid, les terrasses sont pleines. (faire)', opts: ['fasse', 'fait', 'faise'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Ne régularise pas, et ne sur-corrige pas' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme régulière raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-14-piege-dix'), say: REFRAME, terms: ['noyau', 'fin'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Les fins', 'Quels verbes changent aussi de fins au subjonctif ?',
    ['aller et faire', 'être et avoir', 'aucun'], 1,
    "Sois, soyons ; aie, ayons. Les deux seuls. EN: the only two."),
  ctl('Le i', 'Écris-tu « que nous soyions » ?',
    ['non, que nous soyons', 'oui, comme partout'], 0,
    "Être refuse le i, et avoir aussi. EN: être refuses the i, and so does avoir."),
  ctl('Le radical', 'D’où vient le radical de « que j’aille » ?',
    ['de ils vont', 'de nous allons', 'de nulle part'], 2,
    "Aucune forme du présent ne le donne. Il s'apprend. EN: no present form gives it."),
], ['noyau', 'fin']);

const ACT7: ActDef = {
  act: {
    id: 'act7',
    title: 'Les dix, première moitié',
    opener: {
      line: "Quatre verbes ne suivent aucune règle, et ce sont les quatre que tu dis le plus : ici tu les apprends en entier. EN: Four verbs follow no rule at all, and they are the four you say most: here you learn them whole.",
      imageRef: 'lessons/subjonctif-formation/act07.jpg',
    },
    sections: [],
    milestone: "Tu poses être, avoir, aller et faire au subjonctif sans chercher, y compris leurs fins particulières. EN: You can place être, avoir, aller and faire without hunting, special endings included.",
    estScreens: 44,
    restPoints: ['a7-tableau', 'a7-piege'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_TABLEAU, A7_CONSTRUIRE, A7_ECOUTE, A7_PIEGE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LES DIX, SECONDE MOITIÉ
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. A counter where the same four verbs come round all morning. */
const A8_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le guichet des inscriptions',
  frSub: 'Quatre verbes, toute la matinée',
  text: READING_POUVOIR,
  glossary: [
    { word: 'bureau des inscriptions', en: 'registration office', note: "Le guichet qui reçoit les dossiers des étudiants." },
    { word: 'une file', en: 'a queue', note: "Les gens qui attendent l'un derrière l'autre." },
    { word: 'quelque part', en: 'somewhere', note: "À un endroit, sans savoir lequel. EN: at some place, without knowing which." },
  ],
  questions: [
    { q: 'Quelle phrase l’employée répète-t-elle depuis le matin ?', a: "« Il faut que vous sachiez le numéro de votre dossier. » C'est le subjonctif de savoir." },
    { q: 'Quelle forme utilise-t-elle pour dire qu’elle voudrait aider ?', a: "« Bien que je veuille vous aider ». C'est le subjonctif de vouloir, avec son radical veuill-." },
    { q: 'Que dit l’étudiant en sortant son téléphone ?', a: "« Il faut que je puisse le retrouver quelque part. » C'est le subjonctif de pouvoir." },
    { q: 'Quel quatrième verbe apparaît à la fin ?', a: "Valoir : « Bien qu'il vaille moins qu'avant, gardez-le. »" },
  ],
  audio: REC('rec-b1-14-guichet'), say: REFRAME, terms: ['noyau', 'porte'],
};

/** NAME. One card per verb, and the two that quietly take the boot. */
const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-dix',
  title: 'Pouvoir, savoir, vouloir, valoir',
  frSub: 'Les quatre derniers',
  hint: 'Quatre cartes. Les deux dernières ont une botte.',
  audio: AUDIO, say: REFRAME, terms: ['noyau', 'botte'],
  cards: [
    {
      head: 'pouvoir', label: 'un seul radical',
      fr: 'que je puisse · que nous puissions',
      sub: '[kuh zhuh PWEESS] · [kuh noo pwee-SYOHⁿ]',
      body: `Puiss- partout, avec les six fins normales. Ils peuvent ne te donne rien : ${MODAUX_REF} t'avait déjà prévenu que ce verbe fait ce qu'il veut. EN: puiss- everywhere, and ils peuvent gives you nothing.`,
    },
    {
      head: 'savoir', label: 'un seul radical',
      fr: 'que je sache · que nous sachions',
      sub: '[kuh zhuh SASH] · [kuh noo sa-SHYOHⁿ]',
      body: `Sach- partout. Ils savent ne montre pas le ch, et ${SAVOIR_REF} ne l'avait pas montré non plus. EN: sach- everywhere, and ils savent shows no ch.`,
    },
    {
      head: 'vouloir', label: 'une botte',
      fr: 'que je veuille · que nous voulions',
      sub: '[kuh zhuh VEUÏ] · [kuh noo voo-LYOHⁿ]',
      body: "Veuill- dans la botte, voul- dehors. La forme du dehors, tu la connais : c'est celle de l'imparfait. EN: veuill- inside, voul- outside, and the outside one is the imparfait form.",
    },
    {
      head: 'valoir', label: 'une botte, et surtout il',
      fr: 'qu’il vaille · que ça vaille',
      sub: '[keel VAÏ] · [kuh sa VAÏ]',
      body: "Vaill- dans la botte, val- dehors. En pratique tu l'entendras presque toujours avec il ou ça. EN: in practice you will nearly always meet it with il or ça.",
    },
  ],
};

/** BUILD. Two behaviours again: one stem, or a boot. */
const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Un radical, ou deux',
  frSub: 'Les quatre derniers, triés',
  groups: [
    grp('Un seul radical', [
      it(E(1125), 'puiss-'),
      it(E(1126), 'puiss-, encore'),
      it(E(1128), 'sach-'),
      it(E(1129), 'sach-, encore'),
    ], chk('Pouvoir et savoir changent-ils de radical entre je et nous ?',
      ['oui, comme boire', 'non, jamais'], 1,
      "Puiss- et sach- ne bougent pas. EN: puiss- and sach- do not move.")),
    grp('Deux radicaux', [
      it(E(1131), 'veuill-, dans la botte'),
      it(E(1132), 'voul-, dehors'),
      it(E(1134), 'vaill-, dans la botte'),
      it(E(1135), 'vaill-, avec ça'),
    ], chk('Vouloir se comporte comme...',
      ['boire', 'faire', 'être'], 0,
      "Une botte, exactement comme à l'acte 5. EN: a boot, exactly as in act 5.")),
    ctl('Le compte', 'Sur les dix verbes à apprendre, combien ont une botte ?',
      ['aucun', 'trois : aller, vouloir, valoir', 'les dix'], 1,
      "Les sept autres gardent un seul radical. EN: the other seven keep one stem."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['noyau', 'botte'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  title: 'Les quatre dans des phrases',
  examples: [
    ex(E(1136), 'savoir, avec tu'),
    ex(E(1137), 'pouvoir, avec tu'),
    ex(E(1138), 'vouloir, dans la botte'),
    ex(E(1140), 'savoir, avec vous'),
    ex(E(1141), 'valoir, avec un sujet inanimé'),
    ex('fr.b1.sports-et-loisirs.056', 'être, pour comparer : le porteur est « veut que »'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['noyau'],
};

/** CHOOSE. The person decides, and so does the verb's own behaviour. */
const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Quel morceau, pour quelle personne',
  frSub: 'Les huit verbes des actes 7 et 8',
  groups: [
    grp('Rien ne bouge', [
      it(E(1139), 'puissions : même radical que puisse'),
      it(E(1142), 'puissions, encore'),
      it(E(1115), 'fassions : même radical que fasse'),
      it(E(1130), 'sachent : même radical que sache'),
    ], chk('Pour ces quatre verbes, que fais-tu une fois le radical trouvé ?',
      ['tu ajoutes la fin, et c’est fini', 'tu cherches un deuxième radical'], 0,
      "Un radical, six fins, terminé. EN: one stem, six endings, done.")),
    grp('Le morceau change', [
      it(E(1111), 'aille, dans la botte'),
      it(E(1112), 'allions, dehors'),
      it(E(1131), 'veuille, dans la botte'),
      it(E(1132), 'voulions, dehors'),
    ], chk('Comment sais-tu quel morceau prendre ?',
      ['par le sens de la phrase', 'par la personne'], 1,
      "Nous et vous dehors, les quatre autres dedans. EN: nous and vous outside, the other four inside.")),
    ctl('La question à se poser', 'Tu dois écrire « que vous sachiez ». Le radical change-t-il ?',
      ['oui, savoir a une botte', 'seulement à l’écrit', 'non, sach- partout'], 2,
      "Savoir garde sach- sur les six formes. EN: savoir keeps sach- through all six."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['noyau', 'botte'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs sur les quatre derniers',
  errors: [
    { wrong: 'Je suis content que tu peuves venir samedi.',
      right: 'Je suis content que tu puisses venir samedi.',
      why: "Normal : tu peux existe, et la règle de l'acte 2 marche sur presque tout. Pouvoir est dans les dix. EN: the act 2 rule works on nearly everything, and pouvoir is one of the ten." },
    { wrong: 'Il faut que tu saves la vérité.',
      right: 'Il faut que tu saches la vérité.',
      why: "Ils savent ne montre pas le ch, donc la forme paraît inventée. Elle ne l'est pas. EN: ils savent shows no ch, so the real form looks invented." },
    { wrong: 'Bien qu’il voule partir, il reste encore un peu.',
      right: 'Bien qu’il veuille partir, il reste encore un peu.',
      why: "Le radical du dehors appliqué à il. Il est dans la botte, donc veuill-. EN: the outside stem put on il, which is inside the boot." },
    { wrong: 'Je veux que nous veuillions parler calmement.',
      right: 'Je veux que nous voulions parler calmement.',
      why: "Le piège inverse : nous sort de la botte, donc voul-. EN: the mirror trap, and nous is outside the boot." },
  ],
  audio: AUDIO, say: REFRAME, terms: ['noyau', 'botte'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le radical', 'Le subjonctif de savoir se construit sur...',
    ['sach-', 'sav-', 'su-'], 0,
    "Sach-, sur les six formes. EN: sach-, across all six."),
  ctl('La botte', 'Lequel de ces quatre a deux radicaux ?',
    ['pouvoir', 'vouloir', 'savoir'], 1,
    "Veuille contre voulions. Valoir fait pareil. EN: veuille against voulions, and valoir does the same."),
  ctl('Le total', 'Combien de radicaux irréguliers as-tu appris en deux actes ?',
    ['quatre', 'douze', 'huit'], 2,
    "Être, avoir, aller, faire, pouvoir, savoir, vouloir, valoir. EN: eight."),
], ['noyau', 'botte']);

const ACT8: ActDef = {
  act: {
    id: 'act8',
    title: 'Les dix, seconde moitié',
    opener: {
      line: "Quatre verbes de plus, et deux d'entre eux cachent une botte : ici tu finis la liste des radicaux à apprendre. EN: Four more verbs, and two of them hide a boot: here you finish the list of stems to learn.",
      imageRef: 'lessons/subjonctif-formation/act08.jpg',
    },
    sections: [],
    milestone: "Tu as les huit radicaux irréguliers, et tu sais lesquels changent entre je et nous. EN: You have all eight irregular stems, and you know which ones change between je and nous.",
    estScreens: 32,
    restPoints: ['a8-exemples'],
  },
  sections: [A8_LECTURE, A8_CARTES, A8_CONSTRUIRE, A8_EXEMPLES, A8_CHOISIR, A8_ERREURS, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — UNE SEULE FORME
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Two verbs that only ever have `il` in front of them, in the one
 *  setting where both come up in the same conversation. */
const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'La pluie et la route',
  frSub: 'Deux verbes, deux formes en tout',
  setting: "Un marché de producteurs, près de Toulouse, un samedi de juin. Le ciel est bas depuis trois jours et personne ne s'en plaint.",
  bubbles: [
    { from: 'narrator', fr: 'Sous la bâche, deux maraîchers regardent le ciel.', en: 'Under the tarpaulin, two growers are watching the sky.' },
    { from: 'coach', fr: 'Je suis content qu’il pleuve enfin sur les champs.', en: 'I am glad it is finally raining on the fields.', warn: 'pleuvoir : qu’il pleuve' },
    { from: 'user', fr: 'Bien qu’il faille attendre encore deux semaines pour les tomates.', en: 'Although we still have to wait two more weeks for the tomatoes.', warn: 'falloir : qu’il faille' },
    { from: 'coach', fr: 'Deux semaines, ce n’est rien. L’an dernier, tout avait brûlé.', en: 'Two weeks is nothing. Last year everything had burned.' },
    { from: 'user', fr: 'Avant qu’il pleuve, je rentrais le linge tous les soirs pour rien.', en: 'Before it rained, I brought the washing in every evening for nothing.' },
    { from: 'narrator', fr: 'Ces deux verbes ne se conjuguent qu’avec il. Une forme chacun, et c’est tout.', en: 'These two verbs only ever take il. One form each, and that is all.' },
  ],
  closing: { fr: 'Deux verbes, deux formes : la journée la plus courte de la leçon.', en: 'Two verbs, two forms: the shortest day of the lesson.' },
  audio: REC('rec-b1-14-marche'), say: REFRAME, terms: ['impersonnel', 'noyau'],
};

/** NAME. The two forms, and the confusion the first one causes. */
const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-dix',
  title: 'Falloir et pleuvoir',
  frSub: 'Une forme chacun',
  hint: 'Quatre cartes. La troisième démêle la confusion la plus fréquente.',
  audio: AUDIO, say: REFRAME, terms: ['impersonnel'],
  cards: [
    {
      head: 'falloir', label: 'qu’il faille',
      fr: 'Bien qu’il faille attendre, personne ne se plaint.',
      sub: '[byehⁿ keel FAÏ a-TAHⁿDR pehr-son nuh suh PLEHⁿ]',
      body: "Faille se dit comme vaille et comme la fin de travaille. Une seule forme, et elle a toujours il devant. EN: one form, always with il in front.",
    },
    {
      head: 'pleuvoir', label: 'qu’il pleuve',
      fr: 'Avant qu’il pleuve, rentre le linge.',
      sub: '[a-vahⁿ keel PLEUV rahⁿtr luh LEHⁿZH]',
      body: "Pleuve ressemble à pleut, avec un v qu'on entend. Là aussi, une seule forme existe. EN: pleuve is like pleut with an audible v, and again there is only one form.",
    },
    {
      head: 'Ne confonds pas les deux « il faut »', label: 'le porteur et la forme',
      fr: 'Il faut que tu viennes. · Bien qu’il faille attendre.',
      sub: '[eel foh kuh tü VYENN] · [byehⁿ keel FAÏ a-TAHⁿDR]',
      body: "Dans la première, falloir est le porteur et reste au présent. Dans la seconde, il est le verbe qui suit que. EN: in the first, falloir is the carrier; in the second it is the verb after que.",
    },
    {
      head: 'Ce sont les dixième et neuvième', label: 'les dix',
      fr: 'être, avoir, aller, faire, pouvoir, savoir, vouloir, valoir, falloir, pleuvoir',
      sub: '[ehtr] · [a-VWAR] · [a-LAY] · [FEHR]',
      body: "La liste est finie. Dix radicaux, et les deux derniers ne coûtent qu'une forme chacun. EN: the list is complete, and the last two cost one form each.",
    },
  ],
};

/** BUILD. Which il is which, and what follows each. */
const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Porteur ou forme',
  frSub: 'Les deux emplois de falloir',
  groups: [
    grp('Falloir porteur, au présent', [
      it(E(1147), 'le porteur, suivi de que'),
      it(E(1000), 'il faut, puis la forme courte'),
      it(E(1155), 'il faut, puis fasse'),
      it('fr.b1.routines.061', 'il faut, puis soyons'),
    ], chk('Dans ces phrases, le verbe falloir est...',
      ['au présent', 'au subjonctif'], 0,
      "Il faut ouvre la porte ; c'est le verbe d'après qui change. EN: il faut opens the door and the next verb changes.")),
    grp('Falloir au subjonctif, derrière que', [
      it(E(1145), 'la forme unique'),
      it(E(1152), 'bien qu’il faille'),
      it(E(1157), 'bien qu’il faille, encore'),
      it(E(1146), 'l’autre impersonnel'),
    ], chk('Qu’est-ce qui met falloir au subjonctif ici ?',
      ['le mot bien que devant lui', 'le sens de la phrase', 'le sujet il'], 0,
      "C'est la porte, comme pour tous les autres verbes. EN: the doorway, exactly as for every other verb.")),
    ctl('Le sujet', 'Peut-on dire « que je faille » ou « que nous pleuvions » ?',
      ['oui, avec un effort', 'non : ces verbes n’ont que il'], 1,
      "Une seule personne, donc une seule forme. EN: one person only, so one form only."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['impersonnel', 'porte'],
};

/** The ten, as answers. Front English, back French: the toggle never hides
 *  these, because they are what is being asked for. */
const A9_FLASHCARDS: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a9-flashcards',
  layer: 'core',
  title: 'Les dix, de mémoire',
  frSub: 'Huit cartes',
  cards: [
    { front: 'that I am (être)', back: 'que je sois', say: 'Il faut que je sois à la gare à six heures.' },
    { front: 'that I have (avoir)', back: 'que j’aie', say: 'Bien que je n’aie pas beaucoup de temps, je viendrai.' },
    { front: 'that I go (aller)', back: 'que j’aille', say: 'Il faut que tu ailles chez le médecin.' },
    { front: 'that I do (faire)', back: 'que je fasse', say: 'Il faut que chacun fasse sa part.' },
    { front: 'that I can (pouvoir)', back: 'que je puisse', say: 'Je suis content que tu puisses venir samedi.' },
    { front: 'that I know (savoir)', back: 'que je sache', say: 'Il faut que tu saches la vérité.' },
    { front: 'that I want (vouloir)', back: 'que je veuille', say: 'Bien qu’il veuille partir, il reste encore un peu.' },
    { front: 'that it is necessary (falloir)', back: 'qu’il faille', say: 'Bien qu’il faille attendre, personne ne se plaint.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['noyau', 'impersonnel'],
};

/** TRAP, stepped. The present left in place, and the invented person. */
const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Deux pièges des impersonnels',
  rule: {
    title: 'Derrière que, même eux changent',
    body: "Il faut et il pleut sont du présent. Derrière un que, ils deviennent il faille et il pleuve. Et ils n'ont pas d'autre personne : que je faille n'existe pas. EN: behind a que even these two change, and they have no other person.",
  },
  cards: [
    { promptLabel: 'le présent gardé', promptSound: 'Bien qu’il faut attendre, personne ne se plaint.',
      fr: 'Bien qu’il faille attendre, personne ne se plaint.', ipa: '/bjɛ̃ kil faj a.tɑ̃dʁ pɛʁ.sɔn nə sə plɛ̃/',
      tip: "Bien que ouvre la porte, donc faut devient faille. EN: bien que opens the door, so faut becomes faille." },
    { promptLabel: 'le présent gardé', promptSound: 'Avant qu’il pleut, rentre le linge.',
      fr: 'Avant qu’il pleuve, rentre le linge.', ipa: '/a.vɑ̃ kil plœv ʁɑ̃tʁ lə lɛ̃ʒ/',
      tip: "Un v de plus, et on l'entend. EN: one extra v, and you can hear it." },
    { promptLabel: 'une personne inventée', promptSound: 'Il faut que nous faillions partir.',
      fr: 'Il faut que nous partions.', ipa: '/il fo kə nu paʁ.tjɔ̃/',
      tip: "Falloir n'a que il. Le vrai verbe de la phrase est partir. EN: falloir only has il." },
    { promptLabel: 'le futur à la place', promptSound: 'Bien qu’il faudra attendre, personne ne se plaint.',
      fr: 'Bien qu’il faille attendre, personne ne se plaint.', ipa: '/bjɛ̃ kil faj a.tɑ̃dʁ pɛʁ.sɔn nə sə plɛ̃/',
      tip: "Le subjonctif ne dit ni demain ni hier. Il faudra ne peut pas suivre bien que. EN: the subjunctive says neither tomorrow nor yesterday." },
    { promptLabel: 'le porteur changé', promptSound: 'Il faille que tu viennes dimanche.',
      fr: 'Il faut que tu viennes dimanche.', ipa: '/il fo kə ty vjɛn di.mɑ̃ʃ/',
      tip: "Le porteur reste au présent. C'est le verbe d'après qui bouge. EN: the carrier stays in the present." },
    { promptLabel: 'la forme confondue', promptSound: 'Je suis content qu’il pleut enfin sur les champs.',
      fr: 'Je suis content qu’il pleuve enfin sur les champs.', ipa: '/ʒə sɥi kɔ̃.tɑ̃ kil plœv ɑ̃.fɛ̃ syʁ le ʃɑ̃/',
      tip: "Content que ouvre la porte comme les autres. EN: content que opens the door like the rest." },
  ],
  drill: [
    { promptSay: 'Bien qu’il ... attendre, personne ne se plaint. (falloir)', opts: ['faut', 'faille', 'faudrait'], correct: 1 },
    { promptSay: 'Avant qu’il ... , rentre le linge. (pleuvoir)', opts: ['pleuve', 'pleut'], correct: 0 },
    { promptSay: '... que tu viennes dimanche. (falloir, porteur)', opts: ['Il faille', 'Il faut'], correct: 1 },
    { promptSay: 'Je suis content qu’il ... enfin. (pleuvoir)', opts: ['pleut', 'pleuvra', 'pleuve'], correct: 2 },
    { promptSay: 'Bien qu’il ... deux heures de route, ça vaut le détour. (falloir)', opts: ['faille', 'faudra'], correct: 0 },
    { promptSay: 'Il faut que nous ... avant sept heures. (partir)', opts: ['faillions partir', 'partions'], correct: 1 },
    { promptSay: 'Bien qu’il ... cher, personne ne l’achète. (valoir)', opts: ['vaille', 'vaut'], correct: 0 },
    { promptSay: 'Avant qu’il ... nuit, rentre à la maison. (faire)', opts: ['fasse', 'fait', 'fera'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Derrière que, même eux changent' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme du présent raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-14-piege-impersonnels'), say: REFRAME, terms: ['impersonnel', 'porte'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le compte', 'Combien de formes a falloir au subjonctif ?',
    ['six', 'une', 'deux'], 1,
    "Qu'il faille, et rien d'autre. EN: qu'il faille, and nothing else."),
  ctl('Le porteur', 'Dans « Il faut que tu viennes », falloir est...',
    ['au subjonctif', 'au présent, et c’est lui le porteur'], 1,
    "Le porteur ne change pas : c'est le verbe derrière que qui bouge. EN: the carrier does not move."),
  ctl('La liste', 'Combien de verbes à apprendre en entier as-tu vus en trois actes ?',
    ['huit', 'douze', 'dix'], 2,
    "Les huit des actes 7 et 8, plus falloir et pleuvoir. EN: eight, plus falloir and pleuvoir."),
], ['impersonnel', 'noyau']);

const ACT9: ActDef = {
  act: {
    id: 'act9',
    title: 'Une seule forme',
    opener: {
      line: "Deux verbes n'ont qu'un seul sujet possible, donc une seule forme : la partie la plus courte de la leçon. EN: Two verbs have only one possible subject, so only one form: the shortest part of the lesson.",
      imageRef: 'lessons/subjonctif-formation/act09.jpg',
    },
    sections: [],
    milestone: "Tu écris qu'il faille et qu'il pleuve, et tu ne confonds plus le porteur avec la forme. EN: You can write qu'il faille and qu'il pleuve, and you no longer mix the carrier up with the form.",
    estScreens: 40,
    restPoints: ['a9-flashcards', 'a9-piege'],
  },
  sections: [A9_HISTOIRE, A9_CARTES, A9_CONSTRUIRE, A9_FLASHCARDS, A9_PIEGE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — RECONNAÎTRE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Five doorways and two decoys in one text message, annotated by
 *  somebody who has just finished acts 2 to 9. */
const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message de son frère',
  frSub: 'Cinq portes, deux pièges',
  text: READING_MESSAGE,
  glossary: [
    { word: 'trajet', en: 'journey', note: "La distance entre le départ et l'arrivée. EN: the distance from start to finish." },
    { word: 'ça vaut le coup', en: 'it is worth it', note: "L'effort en vaut la peine. EN: the effort pays off." },
    { word: 'la surprend', en: 'surprises her', note: "Elle ne s'y attendait pas. EN: she was not expecting it." },
  ],
  questions: [
    { q: 'Combien de subjonctifs Nadia trouve-t-elle dans le message ?', a: "Cinq : viennes, soit, soit, réserves et puisses. Chacun suit un « que »." },
    { q: 'Pourquoi « réserves » la surprend-elle ?', a: "Parce que la forme ressemble au présent. C'est un verbe en -er, donc le sosie de l'acte 3." },
    { q: 'Pourquoi « arrives » n’est-il pas un subjonctif ?', a: "Parce qu'il ne suit pas « que ». Il suit « à quelle heure », et il n'y a aucune porte devant lui." },
    { q: 'Que fait Nadia dans sa réponse ?', a: "Elle écrit deux phrases avec deux porteurs différents : « Il faut que je regarde les trains » et « Bien que ce soit loin »." },
  ],
  audio: REC('rec-b1-14-message'), say: REFRAME, terms: ['porte', 'sosie'],
};

/** NAME. The whole test, in four points, pointing at the sheet. */
const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-porte',
  title: 'Le test, en quatre points',
  frSub: 'Avant d’écrire, avant de corriger',
  points: [
    "Cherche le que. Sans lui, le verbe garde sa forme ordinaire. EN: look for the que; without it the verb keeps its ordinary form.",
    "Prends la forme ils du présent et coupe -ent : tu as le radical. EN: take the ils form, cut -ent, and you have the stem.",
    "Si la personne est nous ou vous, demande-toi si le verbe a une botte. EN: for nous and vous, ask whether the verb has a boot.",
    "Si le verbe est un des dix, ne cherche rien : rappelle-toi la forme. EN: if it is one of the ten, remember the form instead of building it.",
  ],
  audio: AUDIO, say: REFRAME, terms: ['porte', 'radical', 'botte'],
};

/** BUILD. All four families in one drill, which is what act 10 is for. */
const A10_MELANGE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-melange',
  layer: 'core',
  size: 'lg',
  title: 'Les quatre familles mélangées',
  frSub: 'Reconnais la source de chaque forme',
  groups: [
    grp('Le radical sort de ils', [
      it(E(1166), 'écriv-, de ils écrivent'),
      it(E(1160), 'sign-, de ils signent'),
      it(E(1165), 'ferm-, de ils ferment'),
      it(E(1169), 'oubli-, de ils oublient'),
    ], chk('Ces quatre radicaux viennent tous...',
      ['de la forme ils du présent', 'des dix verbes'], 0,
      "La règle de l'acte 2, quatre fois. EN: the act 2 rule, four times over.")),
    grp('Le verbe a une botte', [
      it(E(1158), 'prenn-, dans la botte'),
      it(E(1164), 'doiv-, dans la botte'),
      it(E(1168), 'vienn-, dans la botte'),
      it(E(1171), 'boiv-, dans la botte'),
    ], chk('Si ces phrases passaient à nous, que se passerait-il ?',
      ['le radical changerait', 'rien du tout', 'la fin disparaîtrait'], 0,
      "Prenions, devions, venions, buvions. EN: prenions, devions, venions, buvions.")),
    grp('Le verbe est un des dix', [
      it(E(1159), 'être'),
      it(E(1161), 'pouvoir'),
      it(E(1162), 'aller'),
      it(E(1167), 'savoir'),
    ], chk('Que fais-tu devant ces quatre formes ?',
      ['tu appliques la règle', 'tu te rappelles la forme', 'tu remontes à l’infinitif'], 1,
      "Aucune règle ne les donne, et tu les as apprises. EN: no rule gives them, and you have learned them.")),
  ],
  audio: AUDIO, say: REFRAME, terms: ['radical', 'botte', 'noyau'],
};

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Huit phrases, quatre familles',
  lines: [
    ln(E(1158)), ln(E(1165)), ln(E(1162)), ln(E(1164)),
    ln(E(1166)), ln(E(1171)), ln(E(1159)), ln(E(1168)),
  ],
  questions: [
    { q: 'Première phrase : le verbe a-t-il une botte ?', opts: ['non', 'oui, prendre'], correct: 1,
      why: "Prenne dedans, prenions dehors. EN: prenne inside, prenions outside." },
    { q: 'Deuxième phrase : entends-tu le subjonctif ?', opts: ['oui, clairement', 'oui, un peu', 'non, il ressemble au présent'], correct: 2,
      why: "« que le magasin ferme » : un verbe en -er, donc le sosie. EN: an -er verb, so the lookalike." },
    { q: 'Troisième phrase : quel verbe ?', opts: ['aller', 'avoir', 'être'], correct: 0,
      why: "« que nous allions » : le radical all-, hors de la botte. EN: allions, the outside stem." },
    { q: 'Cinquième phrase : d’où vient le radical ?', opts: ['de ils écrivent', 'de l’infinitif écrire'], correct: 0,
      why: "Écrire ne contient pas le v. EN: écrire contains no v." },
    { q: 'Septième phrase : la personne est...', opts: ['je', 'nous', 'vous'], correct: 1,
      why: "« que nous soyons » : la fin -ons, sans i. EN: soyons, ending in -ons with no i." },
    { q: 'Sur les huit, combien viennent des dix verbes à apprendre ?', opts: ['aucune', 'toutes', 'trois'], correct: 2,
      why: "Aller, être, et rien d'autre dans ces huit phrases. Les cinq autres suivent la règle. EN: three, and the rest follow the rule." },
  ],
  audio: REC('rec-b1-14-melange-ecoute'), say: REFRAME, terms: ['radical', 'noyau'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de repérage',
  errors: [
    { wrong: 'Avant que tu réserves ton billet, dis-moi l’heure. Ce n’est pas un subjonctif.',
      right: 'Avant que tu réserves ton billet, dis-moi l’heure. C’est bien un subjonctif.',
      why: "Normal : la forme est identique au présent. Le mot avant que suffit à le prouver. EN: the form is identical to the present, and avant que proves it anyway." },
    { wrong: 'Dis-moi à quelle heure tu arrives. Arrives est un subjonctif.',
      right: 'Dis-moi à quelle heure tu arrives. Arrives est un présent.',
      why: "Le piège inverse : il n'y a aucun que devant ce verbe. EN: the mirror trap, and there is no que in front of this verb." },
    { wrong: 'Il faut que nous prennions le train de sept heures.',
      right: 'Il faut que nous prenions le train de sept heures.',
      why: "Tu as bien reconnu prendre. Il restait à sortir nous de la botte. EN: you recognised prendre; nous still had to leave the boot." },
    { wrong: 'Je veux que vous faissiez attention à la marche.',
      right: 'Je veux que vous fassiez attention à la marche.',
      why: "Faire est dans les dix : le radical est fass-, et il ne double pas son s. EN: faire is one of the ten and its stem is fass-, with one s pair only." },
  ],
  audio: AUDIO, say: REFRAME, terms: ['porte', 'sosie', 'botte'],
};

const A10_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a10-hacks',
  layer: 'core',
  title: 'Trois astuces quand tu bloques',
  hacks: [
    { hack: 'Dis la phrase avec ils, à voix basse, avant de l’écrire.',
      why: "Le radical apparaît tout seul, et tu n'as plus qu'à changer la fin. EN: the stem shows up on its own and only the ending is left to change." },
    { hack: 'Mets la phrase à nous pour savoir si tu as bien un subjonctif.',
      why: "Si tu obtiens -ions, c'en était un, même quand rien ne se voyait. EN: if you get -ions, it was one, even when nothing showed." },
    { hack: 'Apprends les dix par paires : sois et aie, aille et fasse, puisse et sache, veuille et vaille.',
      why: "Les paires se ressemblent par le son, et une carte en rappelle deux. EN: the pairs rhyme, so one card brings back two." },
  ],
  audio: AUDIO, say: REFRAME, terms: ['formeils', 'noyau'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le premier geste', 'Devant une forme que tu ne reconnais pas, tu regardes d’abord...',
    ['le mot juste devant', 'la fin du mot', 'la longueur du mot'], 0,
    "La porte avant la forme, toujours. EN: the doorway before the form, always."),
  ctl('Le sosie', 'Une forme identique au présent après « avant que » est...',
    ['un présent', 'un subjonctif'], 1,
    "Avant que ouvre la porte : la forme est un subjonctif, même invisible. EN: avant que opens the door."),
  ctl('Les trois sources', 'Un radical de subjonctif vient de...',
    ['l’infinitif, toujours', 'de ils, de nous, ou de la mémoire', 'du futur'], 1,
    "Ces trois-là, et rien d'autre. EN: those three, and nothing else."),
], ['porte', 'radical', 'noyau']);

const ACT10: ActDef = {
  act: {
    id: 'act10',
    title: 'Reconnaître',
    opener: {
      line: "Tu sais construire les quatre familles : ici tu apprends à les reconnaître froid, dans un texte que personne n'a préparé pour toi. EN: You can build all four families: here you learn to spot them cold, in a text nobody prepared for you.",
      imageRef: 'lessons/subjonctif-formation/act10.jpg',
    },
    sections: [],
    milestone: "Tu lis un message ordinaire et tu vois chaque subjonctif, y compris ceux qui ressemblent au présent. EN: You can read an ordinary message and see every subjunctive, including the ones that look like the present.",
    estScreens: 32,
    restPoints: ['a10-melange'],
  },
  sections: [A10_LECTURE, A10_FOCUS, A10_MELANGE, A10_ECOUTE, A10_ERREURS, A10_HACKS, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — ÉCRIRE AU SUBJONCTIF
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The model the learner will imitate in the task. */
const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message de Nadia',
  frSub: 'Le modèle que tu vas imiter',
  text: READING_PLAN,
  glossary: [
    { word: 'le gîte', en: 'the holiday cottage', note: "Une maison qu'on loue pour quelques jours à la campagne." },
    { word: 'les pneus', en: 'the tyres', note: "Les roues en caoutchouc de la voiture." },
    { word: 'là-haut', en: 'up there', note: "En montagne, plus haut que là où on est. EN: up in the hills." },
  ],
  questions: [
    { q: 'Quels porteurs Nadia utilise-t-elle ?', a: "Les cinq : il faut que, je veux que, bien que, avant que et je suis content que. Chacun apparaît au moins une fois." },
    { q: 'Quelles formes viennent des dix verbes à apprendre ?', a: "« que la route soit longue », « que tu puisses venir » et « que j'aie le nombre exact ». Être, pouvoir et avoir." },
    { q: 'Où se trouvent les formes nous et vous ?', a: "« que nous réservions le gîte » et « avant que vous partiez ». Les deux formes longues." },
    { q: 'Quelle forme ressemble au présent, et pourquoi ?', a: "« que chacun donne son avis » et « que tout le monde arrive ». Ce sont des verbes en -er, donc le sosie." },
  ],
  audio: REC('rec-b1-14-gite'), say: REFRAME, terms: ['porte', 'noyau'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-porte',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Le plan du message',
  steps: [
    "Écris d’abord ce que tu veux obtenir, en une ligne, sans porteur. EN: write what you want in one line, with no carrier expression.",
    "Choisis un porteur pour chaque phrase : il faut que, je veux que, bien que, avant que. EN: pick a carrier for each sentence.",
    "Dis chaque verbe avec ils, à voix basse, et coupe -ent. EN: say each verb with ils under your breath, then cut -ent.",
    "Vérifie tes nous et tes vous : il y manque souvent le i. EN: check your nous and vous forms, which often lose the i.",
    "Relis en cherchant les dix : être, avoir, aller, faire, pouvoir, savoir, vouloir, valoir. EN: reread looking for the ten.",
  ],
  audio: AUDIO, say: REFRAME, terms: ['porte', 'formeils', 'noyau'],
};

const A11_CAS: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-cas',
  layer: 'core',
  title: 'Quatre messages, quatre familles',
  cases: [
    { situation: 'Un message au groupe', fr: 'Il faut que nous réservions avant la fin du mois.', en: 'We have to book before the end of the month.' },
    { situation: 'Une réponse à une invitation', fr: 'Je suis content que tu puisses venir.', en: 'I am glad you can come.' },
    { situation: 'Une note laissée sur la table', fr: 'Avant que tu partes, ferme la fenêtre.', en: 'Before you go, shut the window.' },
    { situation: 'Un courriel au propriétaire', fr: 'Bien que le trajet soit long, nous arriverons vendredi soir.', en: 'Although the journey is long, we will arrive on Friday evening.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['porte'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Au téléphone avec le gîte',
  frSub: 'Six tours, à voix haute',
  setting: "Tu appelles le gîte des Quatre Chemins, dans les Vosges, pour le week-end de mars. Madame Perrin décroche.",
  turns: [
    {
      ai: 'Gîte des Quatre Chemins, bonjour.', en: 'Quatre Chemins cottage, good morning.',
      user: 'Bonjour madame. Il faut que je réserve pour le week-end du quinze mars.',
      userEn: 'Hello madam. I need to book for the weekend of the fifteenth of March. (An -er verb, so the form looks like the present.)',
      alts: [
        { fr: 'Bonjour madame. Je voudrais réserver pour le week-end du quinze mars.', en: 'Hello madam. I would like to book for the weekend of the fifteenth of March.' },
        { fr: 'Bonjour madame. Il faut que nous réservions pour le quinze mars.', en: 'Hello madam, we need to book for the fifteenth of March. (The nous form, which shows the subjunctive.)' },
      ],
    },
    {
      ai: 'Vous serez combien ?', en: 'How many of you will there be?',
      user: 'Huit, mais il faut que j’aie une confirmation avant de vous donner le chiffre exact.',
      userEn: 'Eight, but I need a confirmation before I give you the exact number. (Avoir, one of the ten.)',
      alts: [
        { fr: 'Huit, sauf changement. Il faut que je vérifie avec deux personnes.', en: 'Eight, unless something changes. I have to check with two people.' },
        { fr: 'Nous serons huit. Il faut que tout le monde soit prévenu avant jeudi.', en: 'There will be eight of us. Everyone has to be told before Thursday. (Être, and a passive-looking form.)' },
      ],
    },
    {
      ai: 'Le chauffage est en réparation cette semaine.', en: 'The heating is being repaired this week.',
      user: 'Bien qu’il fasse froid en mars, nous viendrons quand même.',
      userEn: 'Although it is cold in March, we will come all the same. (Faire, after bien que.)',
      alts: [
        { fr: 'Bien que ce soit une mauvaise période, nous viendrons.', en: 'Although it is a bad time, we will come.' },
        { fr: 'Il faut surtout qu’il y ait des couvertures.', en: 'What matters is that there are blankets. (Avoir again, in the impersonal il y a.)' },
      ],
    },
    {
      ai: 'Il faudra arriver avant dix-huit heures, le portail ferme.', en: 'You will have to arrive before six, the gate closes.',
      user: 'Il faut donc que nous partions avant treize heures.',
      userEn: 'So we have to leave before one o’clock. (Partir, with the nous ending.)',
      alts: [
        { fr: 'Alors il faut que je prévienne tout le monde ce soir.', en: 'Then I have to tell everyone tonight.' },
        { fr: 'Avant que le portail ferme, nous serons là.', en: 'We will be there before the gate closes. (An -er verb after avant que.)' },
      ],
    },
    {
      ai: 'Vous connaissez la route ?', en: 'Do you know the way?',
      user: 'Pas du tout. Il faut que vous me disiez par où passer.',
      userEn: 'Not at all. You will have to tell me which way to go. (Dire, with the vous ending.)',
      alts: [
        { fr: 'Non. Il faut que je regarde une carte avant de partir.', en: 'No. I have to look at a map before I leave.' },
        { fr: 'Bien que nous soyons déjà venus dans la région, non.', en: 'Although we have been to the area before, no. (Être, with nous.)' },
      ],
    },
    {
      ai: 'Je vous envoie tout par courriel ce soir.', en: 'I will send you everything by email this evening.',
      user: 'Merci. Je suis content que ce soit réglé avant le week-end.',
      userEn: 'Thank you. I am glad it is settled before the weekend. (Être, after a feeling.)',
      alts: [
        { fr: 'Merci beaucoup. Il faut juste que je vous confirme le nombre jeudi.', en: 'Thank you. I just have to confirm the number to you on Thursday.' },
        { fr: 'Parfait. Avant que j’oublie, la maison a-t-elle un four ?', en: 'Perfect. Before I forget, does the house have an oven? (Avant que on a verb of the -er family.)' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['porte', 'noyau', 'fin'],
};

/** THE GRADED TASK. Written, 100 to 140 words, `skill: 'PE'`, because the
 *  double i and the four hidden -er forms only exist on paper. */
const A11_MISSION: TaskSection = {
  type: 'task',
  id: 'a11-mission',
  title: 'Organise quelque chose par écrit',
  frSub: 'Mission écrite',
  brief: "Tu organises quelque chose à plusieurs : un week-end, un déménagement, une fête, un projet au travail. Écris le message que tu envoies au groupe. Dis ce qu'il faut faire, ce que tu veux, ce qui te fait plaisir, et ce qui est difficile malgré tout. Adresse-toi à des gens que tu tutoies.",
  briefEn: 'You are organising something with other people: a weekend away, a move, a party, a work project. Write the message you send to the group, saying what has to happen, what you want, what pleases you, and what is difficult all the same.',
  produce: "Écris un message de 100 à 140 mots. Il doit contenir : au moins quatre des cinq porteurs, au moins une forme en nous ou en vous, au moins deux verbes parmi les dix à apprendre, et au moins un verbe à deux radicaux. Souligne les formes de subjonctif si tu peux.",
  responseSpec: { kind: 'text', minWords: 100, maxWords: 140 },
  rubric: {
    criteria: [
      {
        key: 'forme',
        label: 'Des formes justes',
        maxPoints: 4,
        descriptors: [
          "4 : Chaque verbe derrière un que est au subjonctif et il est correct. Les radicaux sortent de la forme ils, les fins sont les bonnes, et rien n'est resté au présent.",
          "3 : Une forme est fausse, ou une seule est restée au présent. Tout le reste tient.",
          "2 : Deux ou trois formes sont fausses, souvent les mêmes : nous et vous, ou un des dix verbes.",
          "1 : La plupart des verbes derrière que sont au présent, ou construits à partir de l'infinitif.",
        ],
      },
      {
        key: 'familles',
        label: 'Les quatre familles',
        maxPoints: 3,
        descriptors: [
          "3 : Le message contient un verbe régulier, une forme en nous ou en vous, un verbe à deux radicaux et deux verbes parmi les dix.",
          "2 : Trois familles sur quatre sont là. Il manque en général la forme longue ou le verbe à deux radicaux.",
          "1 : Le message n'utilise qu'une seule famille, presque toujours des verbes en -er à la troisième personne.",
        ],
      },
      {
        key: 'porte',
        label: 'Les porteurs',
        maxPoints: 3,
        descriptors: [
          "3 : Quatre porteurs différents au moins, chacun suivi de que et d'un verbe conjugué.",
          "2 : Deux ou trois porteurs, ou un porteur répété quatre fois.",
          "1 : Un seul porteur dans tout le message, ou un que suivi d'un infinitif.",
        ],
      },
      {
        key: 'message',
        label: 'Un message utilisable',
        maxPoints: 2,
        descriptors: [
          "2 : Le groupe sait quoi faire en le lisant une fois. La longueur est dans les bornes et le ton est celui d'un message entre gens qui se tutoient.",
          "1 : Le lecteur doit relire pour comprendre ce qu'on lui demande, ou la longueur sort des bornes.",
        ],
      },
    ],
  },
  scaffold: ['Il faut que', 'Je veux que', 'Je suis content que', 'Bien que', 'Avant que', 'Il faut aussi que', 'Et surtout, il faut que', 'Dites-moi vite'],
  modelAnswer: "Salut à tous,\n\nIl faut que nous décidions la date du déménagement cette semaine, sinon le camion sera pris. Je veux que chacun donne ses disponibilités avant jeudi soir, même si ce n'est qu'une heure.\n\nIl faut aussi que quelqu'un aille chercher les cartons chez Malik samedi matin. Bien que ce soit un peu tôt, c'est le seul créneau libre du garage.\n\nAvant que vous arriviez, je vais vider la cave. Il faut juste que j'aie deux personnes pour l'escalier, parce que je ne veux pas que le canapé finisse dehors sous la pluie.\n\nJe suis content que tout le monde puisse venir. On mange sur place, apportez ce qui vous fait plaisir.\n\nÀ samedi,\nSofia",
  modelAnswerEn: "Hi everyone. We have to decide the moving date this week, or the van will be taken. I want everyone to give their availability before Thursday evening, even if it is only an hour. Somebody also has to go and get the boxes from Malik on Saturday morning. Although it is a bit early, it is the only free slot at the garage. Before you arrive I am going to empty the cellar. I just need two people for the stairs, because I do not want the sofa to end up outside in the rain. I am glad everybody can come. We will eat there, bring whatever you like. See you Saturday, Sofia",
  watchFor: [
    { pattern: 'The present indicative left after a carrier (il faut que nous sommes, je veux que tu viens, bien que c’est difficile).', criterion: 'forme', feedback: "Après que, le verbe change de forme. Dis-le avec ils, coupe -ent, et remets la fin.", ref: 'a2-regle' },
    { pattern: 'A stem built from the infinitive rather than from the ils form (que je connaisse written connaîsse, que j’écrive written écrise, que je prene).', criterion: 'forme', feedback: "L'infinitif cache le radical. Ils connaissent, ils écrivent, ils prennent : c'est là qu'il se montre.", ref: 'a4-cartes' },
    { pattern: 'The present -ons or -ez kept on nous and vous (que nous parlons, que vous arrivez).', criterion: 'forme', feedback: "Il manque un i. Nous parlons devient que nous parlions, vous arrivez devient que vous arriviez.", ref: 'a6-construire' },
    { pattern: 'The stem’s own i or y dropped before -ions or -iez (que nous vérifions, que vous croyez, que nous oublions).', criterion: 'forme', feedback: "Deux i, l'un après l'autre : que nous vérifiions. On ne l'entend pas et il faut l'écrire.", ref: 'a6-doublei' },
    { pattern: 'A two-stem verb flattened in either direction (que nous boivions, que nous prennions, que je buve, que je prene).', criterion: 'forme', feedback: "Nous et vous sortent de la botte : buvions, prenions. Les quatre autres personnes restent dedans.", ref: 'a5-piege' },
    { pattern: 'The regular rule applied to être or avoir (que je soie, que tu ayes, que nous soyions, que nous ayions).', criterion: 'forme', feedback: "Ces deux-là ont leurs propres fins : sois, soyons, soyez ; aie, ayons, ayez. Aucun i.", ref: 'a7-tableau' },
    { pattern: 'One of the ten regularised (que je peuve, que je save, que je voule, qu’il alle, que nous faisions for faire).', criterion: 'forme', feedback: "Ces radicaux ne se calculent pas : puiss-, sach-, veuill-, aill-, fass-. Reprends la carte des dix.", ref: 'a9-flashcards' },
    { pattern: 'Only -er verbs in the third person, so no subjunctive form in the message is actually visible.', criterion: 'familles', feedback: "Tout ton message est au sosie : rien ne prouve que tu sais construire la forme. Ajoute un nous ou un vous.", ref: 'a3-sosie' },
    { pattern: 'No verb from the ten anywhere in the message, although être, avoir and faire are hard to avoid in a plan.', criterion: 'familles', feedback: "Un message qui organise quelque chose contient presque toujours soit, ait ou fasse. Cherche-les.", ref: 'a7-cartes' },
    { pattern: 'One carrier repeated for every sentence (il faut que four or five times) with no other expression.', criterion: 'porte', feedback: "Tu en as cinq. Bien que et avant que changent le rythme du message autant que le sens.", ref: 'a1-porte' },
    { pattern: 'An infinitive directly after que (il faut que partir, je veux que venir).', criterion: 'porte', feedback: "Après que vient toujours un sujet et un verbe conjugué. Il faut que nous partions.", ref: 'a1-reperer' },
    { pattern: 'A verb marked or treated as subjunctive although no que stands in front of it (dis-moi quand tu arrives).', criterion: 'porte', feedback: "Sans que devant lui, le verbe garde sa forme ordinaire. Ici, tu arrives est un présent et il est juste.", ref: 'a10-lecture' },
  ],
  graderNotes: [
    'Judge the FORM only. Whether a given expression genuinely takes the subjunctive in French is the next lesson’s subject, so do not mark a carrier choice right or wrong: mark the form that follows it.',
    'The five carriers taught here are il faut que, je veux que, je suis content que, bien que and avant que. Accept any other real subjunctive trigger the learner brings in (pour que, à condition que, je doute que) without comment, and accept « il faudrait que » as a variant of « il faut que ».',
    'Do NOT score subjunctive against infinitive in either direction (Paul, 2026-09-24). « Je veux partir » and « je veux que je parte » are the next-but-one lesson’s topic; if a learner writes the second, note it in the comment and take no point.',
    'Do NOT require or reward the past subjunctive. It is outside B1. If « que j’aie fait » appears and is correct, accept it silently.',
    'Word count EXCLUDES the greeting line and the sign-off (Paul, 2026-09-22). Count the body only, with 10% tolerance before criterion « message » loses its point.',
    'The writer’s gender is unknown: judge past-participle and adjective agreement for internal consistency only. « Je suis content » and « je suis contente » are both right.',
    'A missing i on nous or vous is ONE error, not two, even if it happens twice on the same verb.',
    'Accept regional usage: courriel and e-mail, char in Québec, and the Belgian and Swiss number words.',
    'A message that is entirely correct but uses only third-person -er verbs scores at most 1 on « familles », because nothing in it is observable.',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
};

/** The join between the lesson and the drills. Every authored row carries
 *  `voiceflash`; not one of the 38 imports does, so none is named here. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis les formes à voix haute',
  frSub: 'Les six personnes, sans réfléchir',
  skill: 'speak',
  itemIds: ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
  audio: AUDIO, say: REFRAME, terms: ['radical', 'fin'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-regle',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la porte', v: 'presque toujours après que', say: 'Il faut que je parte avant six heures.',
      detail: { title: 'La porte', body: "Sans que, le verbe garde sa forme ordinaire. EN: with no que, the verb keeps its ordinary form.", say: 'Bien que ce soit difficile, elle continue.' } },
    { k: 'la règle', v: 'ils, moins -ent, plus la fin', say: 'Ils finissent, donc il faut que je finisse.',
      detail: { title: 'La règle', body: "Le radical se lit dans ils et jamais dans l'infinitif. EN: the stem shows in ils and never in the infinitive.", say: 'Ils écrivent, donc il faut que j’écrive.' } },
    { k: 'les fins', v: '-e -es -e -ions -iez -ent', say: 'Que je parle, que nous parlions.',
      detail: { title: 'Les fins', body: "Les mêmes pour tout le monde, sauf être et avoir. EN: the same for everyone except être and avoir.", say: 'Que vous finissiez, qu’ils finissent.' } },
    { k: 'le sosie', v: 'quatre formes en -er ne bougent pas', say: 'Avant que le magasin ferme, passe prendre du pain.',
      detail: { title: 'Le sosie', body: "Mets la phrase à nous : si tu obtiens -ions, c'était bien un subjonctif. EN: switch to nous and look for -ions.", say: 'Il faut que nous travaillions plus tôt.' } },
    { k: 'la botte', v: 'huit verbes, deux radicaux', say: 'Que je boive, que nous buvions.',
      detail: { title: 'La botte', body: "boire, prendre, venir, voir, devoir, recevoir, mourir, tenir. EN: the eight two-stem verbs.", say: 'Que je prenne, que nous prenions.' } },
    { k: 'les dix', v: 'être, avoir, aller, faire, pouvoir, savoir, vouloir, valoir', say: 'Que je sois, que j’aie, que j’aille, que je fasse.',
      detail: { title: 'Les dix', body: "Plus falloir et pleuvoir, qui n'ont qu'une forme chacun. EN: plus falloir and pleuvoir, one form each.", say: 'Que je puisse, que je sache, que je veuille.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['porte', 'botte', 'noyau'],
};

const A11_PROGRES: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progres',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu repères un subjonctif dans un texte, tu construis les réguliers en trois gestes, tu tiens les huit verbes à deux radicaux et tu as les dix en mémoire. Ce qui reste fragile, c'est la vitesse : en parlant, personne n'a le temps de dire le verbe avec ils avant de le placer. La seule façon de gagner ce temps est de faire passer les formes fréquentes en mémoire directe. Avant l'examen, prends tes dix cartes et dis chacune dans une phrase entière, pas isolée. Puis reprends ton message et souligne chaque verbe qui suit un que : ceux que tu as dû construire sont ceux à revoir. EN: Say each of the ten inside a whole sentence rather than on its own, then underline every verb after a que in your own message; the ones you had to build are the ones to work on.",
  stats: [
    { k: 'La règle', v: 'ils, moins -ent, plus la fin' },
    { k: 'Le sosie', v: 'quatre formes en -er sur six' },
    { k: 'La botte', v: 'huit verbes à deux radicaux' },
    { k: 'Les dix', v: 'huit conjugués, deux impersonnels' },
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
 *  here turns on one: every contrast is a letter or a word. Every typeIn and
 *  errorSpot carries `prompt`, every listenChoose carries `say`.
 *  Correct-answer slots are scattered by hand. */

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
      id: 'r1-porte', label: 'La porte', targets: ['forme-oubliee'],
      questions: [
        mc('Où trouves-tu presque toujours un subjonctif ?', ['juste après que', 'au début de la phrase', 'après un nom'], 0,
          "Le mot que est le signal, et il est collé devant. EN: que is the signal and it sits right in front.", 'a1-porte'),
        mc('Le subjonctif situe l’action...', ['demain', 'hier', 'nulle part dans le temps'], 2,
          "Ce n'est pas une place dans le temps, c'est une forme. EN: not a place in time, a form.", 'a1-scene'),
        mc('« Je dois partir avant six heures » contient-il un subjonctif ?', ['oui, à cause de avant', 'non, il n’y a aucun que'], 1,
          "Sans que, rien ne change. EN: with no que, nothing changes.", 'a1-reperer'),
        mc('Quelles expressions prennent le subjonctif ?', ['c’est la leçon suivante', 'toutes celles qui contiennent que'], 0,
          `L'inventaire appartient à ${TRIGGERS_REF}. EN: the inventory belongs to the next lesson.`, 'a1-check'),
        tI('Complète avec le verbe être.', 'Il faut que nous ... prêts à onze heures.', 'Il faut que nous soyons prêts à onze heures.',
          "Nous sommes est du présent ; derrière que, c'est soyons. EN: nous sommes is the present.", 'a1-scene'),
        tI('Complète avec le verbe partir.', 'Il faut que je ... avant six heures.', 'Il faut que je parte avant six heures.',
          "Ils partent donne part-, plus -e. EN: ils partent gives part-, plus -e.", 'a1-lecture'),
        eS('Il faut que tu viens au café avec nous.', 'Il faut que tu viennes au café avec nous.',
          "Tu viens est du présent. Derrière que, la forme change. EN: tu viens is the present.", 'a1-reperer'),
        lC('Écoute. Y a-t-il un subjonctif dans cette phrase ?', 'Dis-moi à quelle heure tu arrives.', ['oui', 'non'], 1,
          "Aucun que devant le verbe, donc aucun subjonctif. EN: no que in front, so no subjunctive.", 'a1-cas'),
      ],
    },
    {
      id: 'r2-regle', label: 'La règle', targets: ['radical-infinitif'],
      questions: [
        mc('Pour construire un subjonctif régulier, tu pars de...', ['l’infinitif', 'la forme ils du présent', 'la forme je'], 1,
          "Ils montre le radical en entier. EN: ils shows the whole stem.", 'a2-regle'),
        mc('Que reste-t-il quand tu enlèves -ent à « ils finissent » ?', ['fini-', 'fin-', 'finiss-'], 2,
          "Le double s fait partie du radical. EN: the double s belongs to the stem.", 'a2-construire'),
        mc('Les six fins du subjonctif régulier sont...', ['-e -es -e -ions -iez -ent', '-e -es -e -ons -ez -ent'], 0,
          "Nous et vous prennent un i. EN: nous and vous take an i.", 'a2-choisir'),
        mc('Quel verbe cache le plus son radical ?', ['vendre', 'parler', 'connaître'], 2,
          "Connaître ne contient pas connaiss-. EN: connaître contains no connaiss-.", 'a2-tableau'),
        tI('Complète avec le verbe vendre.', 'Il faut que je ... ma voiture avant l’été.', 'Il faut que je vende ma voiture avant l’été.',
          "Ils vendent donne vend-, plus -e. EN: ils vendent gives vend-, plus -e.", 'a2-exemples'),
        tI('Complète avec le verbe répondre.', 'Je veux que tu ... à ce message.', 'Je veux que tu répondes à ce message.',
          "Ils répondent donne répond-, plus -es. EN: ils répondent gives répond-, plus -es.", 'a2-exemples'),
        eS('Il faut que nous finissons avant midi.', 'Il faut que nous finissions avant midi.',
          "Nous finissons est du présent ; le subjonctif glisse un i. EN: the subjunctive slips an i in.", 'a2-choisir'),
        lC('Écoute. La personne est je ou nous ?', 'Il faut que nous finissions avant midi.', ['nous', 'je'], 0,
          "La fin -ions se reconnaît avant tout le reste. EN: the -ions ending is the giveaway.", 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-sosie', label: 'Le sosie', targets: ['sosie-abandonne'],
      questions: [
        mc('Avec un verbe en -er, combien de formes se distinguent du présent ?', ['deux', 'quatre', 'six'], 0,
          "Nous et vous, et rien d'autre. EN: nous and vous, and nothing else.", 'a3-sosie'),
        mc('Tu n’entends aucune différence. Qu’est-ce que ça prouve ?', ['que ce n’est pas un subjonctif', 'rien'], 1,
          "L'oreille ne peut pas trancher sur un verbe en -er. EN: the ear cannot decide here.", 'a3-check'),
        mc('Comment vérifies-tu qu’une forme en -er est un subjonctif ?', ['tu regardes la longueur', 'tu comptes les syllabes', 'tu mets la phrase à nous'], 2,
          "Si nous donne -ions, c'en était un. EN: if nous gives -ions, it was one.", 'a3-construire'),
        mc('« Avant que le magasin ferme » : ferme est...', ['un subjonctif', 'un présent'], 0,
          "Avant que ouvre la porte, même si la forme ne bouge pas. EN: avant que opens the door.", 'a3-lecture'),
        tI('Complète avec le verbe travailler.', 'Il faut que nous ... ensemble sur ce dossier.', 'Il faut que nous travaillions ensemble sur ce dossier.',
          "Travaill- plus -ions, avec deux i à l'écrit. EN: travaill- plus -ions, two written i.", 'a3-piege'),
        tI('Complète avec le verbe arriver.', 'Je suis content que vous ... si tôt.', 'Je suis content que vous arriviez si tôt.',
          "Vous arrivez devient vous arriviez. EN: arrivez becomes arriviez.", 'a3-exemples'),
        eS('Il faut que tu regardies ce film.', 'Il faut que tu regardes ce film.',
          "Le piège inverse : avec tu, il n'y a rien à ajouter. EN: with tu there is nothing to add.", 'a3-piege'),
        lC('Écoute. Entends-tu la différence avec le présent ?', 'Il faut que tu regardes ce film.', ['oui', 'non'], 1,
          "Aucune différence à entendre, et pourtant c'est un subjonctif. EN: nothing to hear, and it is one.", 'a3-ecoute'),
      ],
    },
    {
      id: 'r4-radical', label: 'Le radical', targets: ['radical-je'],
      questions: [
        mc('Le subjonctif de « lire » se construit sur...', ['lir-', 'li-', 'lis-'], 2,
          "Ils lisent donne lis-. EN: ils lisent gives lis-.", 'a4-construire'),
        mc('Finir et partir ont-ils le même genre de radical ?', ['oui, tous les deux en -i', 'non : finiss- contre part-'], 1,
          "Deux familles derrière la même terminaison d'infinitif. EN: two families, one infinitive ending.", 'a4-cartes'),
        mc('Quel départ te donne un radical complet ?', ['ils connaissent', 'je connais', 'connaître'], 0,
          "Je connais donnerait connai-, et c'est faux. EN: je connais would give connai-.", 'a4-choisir'),
        mc('Le subjonctif de « mettre » à la première personne est...', ['que je metre', 'que je mette'], 1,
          "Ils mettent donne mett-. EN: ils mettent gives mett-.", 'a4-check'),
        tI('Complète avec le verbe choisir.', 'Il faut que tu ... entre les deux offres.', 'Il faut que tu choisisses entre les deux offres.',
          "Ils choisissent donne choisiss-, plus -es. EN: ils choisissent gives choisiss-.", 'a4-exemples'),
        tI('Complète avec le verbe écrire.', 'Il faut que tu ... ton nom en haut de la page.', 'Il faut que tu écrives ton nom en haut de la page.',
          "Le v vient de ils écrivent. EN: the v comes from ils écrivent.", 'a4-cartes'),
        eS('Je veux que vous attendez dans le couloir.', 'Je veux que vous attendiez dans le couloir.',
          "Vous attendez est du présent. EN: vous attendez is the present.", 'a4-construire'),
        lC('Écoute. Le radical vient de l’infinitif ou de ils ?', 'Je suis content que tu connaisses déjà la ville.', ['de ils', 'de l’infinitif'], 0,
          "Connaître ne contient pas ce son. EN: connaître does not contain that sound.", 'a4-choisir'),
      ],
    },
    {
      id: 'r5-botte', label: 'La botte', targets: ['botte-plate'],
      questions: [
        mc('Combien de radicaux a « prendre » au subjonctif ?', ['un', 'deux', 'six'], 1,
          "Prenn- dedans, pren- dehors. EN: prenn- inside, pren- outside.", 'a5-botte'),
        mc('Quelles personnes sortent de la botte ?', ['je et tu', 'il et ils', 'nous et vous'], 2,
          "Toujours les deux mêmes. EN: always the same two.", 'a5-construire'),
        mc('Le radical de nous et vous, c’est celui...', ['de l’imparfait', 'du futur'], 0,
          `« ${B101_REFRAME} » EN: ${B101_REFRAME_EN}`, 'a5-check'),
        mc('Lequel de ces verbes n’a PAS de botte ?', ['venir', 'finir', 'devoir'], 1,
          "Finir garde finiss- sur les six formes. EN: finir keeps finiss- throughout.", 'a5-choisir'),
        tI('Complète avec le verbe boire.', 'Il faut que nous ... plus d’eau.', 'Il faut que nous buvions plus d’eau.',
          "Nous sort de la botte, donc buv-. EN: nous is outside the boot.", 'a5-piege'),
        tI('Complète avec le verbe prendre.', 'Je veux que vous ... le train de huit heures.', 'Je veux que vous preniez le train de huit heures.',
          "Un seul n hors de la botte. EN: one n only, outside the boot.", 'a5-tableau'),
        eS('Il faut que je buve quelque chose de chaud.', 'Il faut que je boive quelque chose de chaud.',
          "Je est dans la botte, donc boiv-. EN: je is inside the boot.", 'a5-piege'),
        lC('Écoute. Cette forme est-elle dans la botte ?', 'que nous venions', ['non', 'oui'], 0,
          "Venions, en trois syllabes : c'est le radical du dehors. EN: venions is the outside stem.", 'a5-ecoute'),
      ],
    },
    {
      id: 'r6-nous', label: 'Nous et vous', targets: ['i-manquant'],
      questions: [
        mc('Les formes nous et vous du subjonctif sont celles...', ['du présent', 'du futur', 'de l’imparfait'], 2,
          "Sauf pour être et avoir. EN: except for être and avoir.", 'a6-cartes'),
        mc('Pour passer de « nous parlons » à « que nous parlions », tu...', ['glisses un i', 'changes le radical'], 0,
          "Le radical ne bouge pas. EN: the stem does not move.", 'a6-construire'),
        mc('Dans « que vous croyiez », combien de lettres portent le son i ?', ['une', 'deux', 'aucune'], 1,
          "Le y du radical et le i de la fin. EN: the stem's y and the ending's i.", 'a6-check'),
        mc('Entend-on le double i de « que nous étudiions » ?', ['très nettement', 'presque pas'], 1,
          "Et il faut quand même l'écrire. EN: and you write it anyway.", 'a6-doublei'),
        tI('Complète avec le verbe vérifier.', 'Il faudrait que nous ... l’orthographe de chaque mot.', 'Il faudrait que nous vérifiions l’orthographe de chaque mot.',
          "Vérifi- plus -ions fait deux i. EN: vérifi- plus -ions makes two i.", 'a6-lecture'),
        tI('Complète avec le verbe payer.', 'Je veux que vous ... avant de partir.', 'Je veux que vous payiez avant de partir.',
          "Le y reste et le i s'ajoute. EN: the y stays and the i is added.", 'a6-doublei'),
        eS('Il faut que nous consommons moins d’énergie.', 'Il faut que nous consommions moins d’énergie.',
          "Nous consommons est du présent : il manque le i. EN: one i short.", 'a6-erreurs'),
        lC('Écoute. La fin est -ons ou -ions ?', 'Il faut que nous travaillions plus tôt le matin.', ['-ions', '-ons'], 0,
          "Le i s'entend nettement après le l mouillé. EN: the i is clearly audible.", 'a6-construire'),
      ],
    },
    {
      id: 'r7-dix-un', label: 'Être, avoir, aller, faire', targets: ['etre-avoir-regularises'],
      questions: [
        mc('Quels verbes changent aussi de fins au subjonctif ?', ['aller et faire', 'être et avoir', 'aucun'], 1,
          "Sois, soyons ; aie, ayons. EN: sois, soyons; aie, ayons.", 'a7-cartes'),
        mc('Écris-tu « que nous soyions » ?', ['oui', 'non, que nous soyons'], 1,
          "Être refuse le i, et avoir aussi. EN: être refuses the i.", 'a7-piege'),
        mc('D’où vient le radical de « que j’aille » ?', ['de ils vont', 'de nous allons', 'de nulle part'], 2,
          "Aucune forme du présent ne le donne. EN: no present form gives it.", 'a7-check'),
        mc('Le subjonctif de faire à la première personne est...', ['que je fasse', 'que je faise', 'que je faisse'], 0,
          "Fass-, avec les fins normales. EN: fass-, with ordinary endings.", 'a7-tableau'),
        tI('Complète avec le verbe être.', 'Il faut que tu ... à l’heure demain.', 'Il faut que tu sois à l’heure demain.',
          "Sois, sans -e. EN: sois, with no -e.", 'a7-tableau'),
        tI('Complète avec le verbe avoir.', 'Je veux que tu ... une réponse avant ce soir.', 'Je veux que tu aies une réponse avant ce soir.',
          "Aies, écrit avec ai comme j'ai. EN: aies, written with ai.", 'a7-construire'),
        eS('Il faut qu’elle alle chercher les enfants.', 'Il faut qu’elle aille chercher les enfants.',
          "Aller est dans les dix : aill- s'apprend. EN: aller is one of the ten.", 'a7-piege'),
        lC('Écoute. La fin est -ons ou -ions ?', 'que nous ayons', ['-ions', '-ons'], 1,
          "Avoir prend -ons, comme être. EN: avoir takes -ons, like être.", 'a7-ecoute'),
      ],
    },
    {
      id: 'r8-dix-deux', label: 'Pouvoir, savoir, vouloir, valoir', targets: ['dix-regularises'],
      questions: [
        mc('Le subjonctif de savoir se construit sur...', ['sach-', 'sav-', 'su-'], 0,
          "Sach-, sur les six formes. EN: sach-, across all six.", 'a8-cartes'),
        mc('Lequel de ces quatre a deux radicaux ?', ['pouvoir', 'savoir', 'vouloir'], 2,
          "Veuille contre voulions. EN: veuille against voulions.", 'a8-construire'),
        mc('Combien de radicaux irréguliers as-tu appris en deux actes ?', ['quatre', 'huit', 'douze'], 1,
          "Les huit des actes 7 et 8. EN: the eight of acts 7 and 8.", 'a8-check'),
        mc('Le subjonctif de pouvoir à la première personne est...', ['que je puisse', 'que je peuve'], 0,
          "Puiss-, et ils peuvent ne te le donne pas. EN: puiss-, and ils peuvent does not give it.", 'a8-erreurs'),
        tI('Complète avec le verbe savoir.', 'Il faut que tu ... la vérité.', 'Il faut que tu saches la vérité.',
          "Sach- plus -es. EN: sach- plus -es.", 'a8-exemples'),
        tI('Complète avec le verbe vouloir.', 'Je veux que nous ... parler calmement.', 'Je veux que nous voulions parler calmement.',
          "Nous sort de la botte, donc voul-. EN: nous is outside the boot.", 'a8-choisir'),
        eS('Bien qu’il voule partir, il reste encore un peu.', 'Bien qu’il veuille partir, il reste encore un peu.',
          "Il est dans la botte, donc veuill-. EN: il is inside the boot.", 'a8-erreurs'),
        lC('Écoute. Quel verbe entends-tu ?', 'Il faut que vous sachiez où se trouve la sortie.', ['pouvoir', 'valoir', 'savoir'], 2,
          "Sachiez, avec le son ch. EN: sachiez, with the ch sound.", 'a8-lecture'),
      ],
    },
    {
      id: 'r9-impersonnels', label: 'Falloir et pleuvoir', targets: ['impersonnel-present'],
      questions: [
        mc('Combien de formes a falloir au subjonctif ?', ['six', 'une', 'deux'], 1,
          "Qu'il faille, et rien d'autre. EN: qu'il faille, and nothing else.", 'a9-cartes'),
        mc('Dans « Il faut que tu viennes », falloir est...', ['au présent', 'au subjonctif'], 0,
          "Le porteur reste au présent. EN: the carrier stays in the present.", 'a9-construire'),
        mc('Peut-on dire « que nous faillions » ?', ['oui', 'non : falloir n’a que il'], 1,
          "Une seule personne, une seule forme. EN: one person, one form.", 'a9-check'),
        mc('Le subjonctif de pleuvoir est...', ['qu’il pleut', 'qu’il pleuvra', 'qu’il pleuve'], 2,
          "Un v de plus, et on l'entend. EN: one extra v, and you hear it.", 'a9-piege'),
        tI('Complète avec le verbe falloir.', 'Bien qu’il ... attendre, personne ne se plaint.', 'Bien qu’il faille attendre, personne ne se plaint.',
          "Bien que ouvre la porte, donc faille. EN: bien que opens the door.", 'a9-histoire'),
        tI('Complète avec le verbe pleuvoir.', 'Avant qu’il ... , rentre le linge.', 'Avant qu’il pleuve, rentre le linge.',
          "Pleut devient pleuve. EN: pleut becomes pleuve.", 'a9-flashcards'),
        eS('Je suis content qu’il pleut enfin sur les champs.', 'Je suis content qu’il pleuve enfin sur les champs.',
          "Content que ouvre la porte comme les autres. EN: content que opens the door too.", 'a9-piege'),
        lC('Écoute. Le verbe est-il au présent ou au subjonctif ?', 'Bien qu’il faille deux heures de route, ça vaut le détour.', ['au subjonctif', 'au présent'], 0,
          "Faille, pas faut. EN: faille, not faut.", 'a9-construire'),
      ],
    },
    {
      id: 'r10-reperer', label: 'Reconnaître', targets: ['porte-mal-lue'],
      questions: [
        mc('Devant une forme inconnue, tu regardes d’abord...', ['la fin du mot', 'la longueur', 'le mot juste devant'], 2,
          "La porte avant la forme. EN: the doorway before the form.", 'a10-focus'),
        mc('Un radical de subjonctif vient de...', ['l’infinitif', 'de ils, de nous, ou de la mémoire', 'du futur'], 1,
          "Ces trois sources, et rien d'autre. EN: those three sources only.", 'a10-check'),
        mc('« Dis-moi à quelle heure tu arrives » : arrives est...', ['un présent', 'un subjonctif'], 0,
          "Aucun que devant lui. EN: there is no que in front of it.", 'a10-erreurs'),
        mc('Dans le message du frère de Nadia, combien de subjonctifs ?', ['trois', 'huit', 'cinq'], 2,
          "Viennes, soit, soit, réserves, puisses. EN: viennes, soit, soit, réserves, puisses.", 'a10-lecture'),
        tI('Complète avec le verbe aller.', 'Il faut que nous ... plus vite.', 'Il faut que nous allions plus vite.',
          "All- hors de la botte, plus -ions. EN: all- outside the boot, plus -ions.", 'a10-melange'),
        tI('Complète avec le verbe devoir.', 'Bien que je ... partir tôt, je reste pour le dessert.', 'Bien que je doive partir tôt, je reste pour le dessert.',
          "Je est dans la botte, donc doiv-. EN: je is inside the boot.", 'a10-ecoute'),
        eS('Il faut que nous prennions le train de sept heures.', 'Il faut que nous prenions le train de sept heures.',
          "Nous sort de la botte : un seul n. EN: nous is outside the boot, so one n.", 'a10-erreurs'),
        lC('Écoute. Cette forme vient-elle des dix verbes à apprendre ?', 'Avant que le magasin ferme, passe prendre du pain.', ['oui', 'non'], 1,
          "Fermer est un verbe ordinaire en -er. EN: fermer is an ordinary -er verb.", 'a10-melange'),
      ],
    },
    {
      id: 'r11-ecrire', label: 'Écrire', targets: ['ecrit-plat'],
      questions: [
        mc('Dans ton message, combien de porteurs différents vises-tu ?', ['un seul, répété', 'au moins quatre'], 1,
          "Un seul porteur répété rend le message plat. EN: one repeated carrier flattens the message.", 'a11-plan'),
        mc('Quelle famille manque le plus souvent dans un message d’apprenant ?', ['les formes nous et vous', 'les verbes en -er', 'les dix'], 0,
          "Ce sont les seules qui prouvent que tu sais construire. EN: they are the only observable ones.", 'a11-lecture'),
        mc('Après « que », tu peux écrire un infinitif ?', ['oui, si la phrase est courte', 'non, jamais'], 1,
          "Que appelle un sujet et un verbe conjugué. EN: que calls for a subject and a conjugated verb.", 'a11-cas'),
        mc('Quel est le premier geste du plan avant d’écrire ?', ['choisir un porteur', 'compter les mots', 'dire le but en une ligne'], 2,
          "Le sens d'abord, la forme ensuite. EN: meaning first, form second.", 'a11-plan'),
        tI('Complète avec le verbe avoir.', 'Il faut que j’... le nombre exact de personnes avant jeudi.', 'Il faut que j’aie le nombre exact de personnes avant jeudi.',
          "Aie, la forme la plus courte du français. EN: aie, the shortest form in French.", 'a11-lecture'),
        tI('Complète avec le verbe partir.', 'Avant que nous ... , vérifions les passeports.', 'Avant que nous partions, vérifions les passeports.',
          "Part- plus -ions. EN: part- plus -ions.", 'a11-scenario'),
        eS('Il faut que vous venez avec vos papiers.', 'Il faut que vous veniez avec vos papiers.',
          "Vous venez est du présent ; vous sort de la botte. EN: vous venez is the present.", 'a11-cheat'),
        lC('Écoute. Combien de porteurs différents dans cette phrase ?', 'Il faut que nous partions tôt, bien que la route soit longue.', ['deux', 'un'], 0,
          "Il faut que, puis bien que. EN: il faut que, then bien que.", 'a11-cas'),
      ],
    },
  ],
  audio: AUDIO, say: REFRAME,
};

const A11_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a11-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'la porte', back: 'presque toujours après que', say: 'Il faut que je parte avant six heures.' },
    { front: 'la règle', back: 'ils, moins -ent, plus la fin', say: 'Ils finissent, donc il faut que je finisse.' },
    { front: 'les fins', back: '-e, -es, -e, -ions, -iez, -ent', say: 'Que je parle, que nous parlions.' },
    { front: 'le sosie', back: 'quatre formes en -er sur six ne bougent pas', say: 'Avant que le magasin ferme, passe prendre du pain.' },
    { front: 'le test du nous', back: 'si tu obtiens -ions, c’était un subjonctif', say: 'Il faut que nous travaillions plus tôt.' },
    { front: 'la botte', back: 'boire, prendre, venir, voir, devoir, recevoir, mourir, tenir', say: 'Que je boive, que nous buvions.' },
    { front: 'le double i', back: 'étudiions, croyiez, riions, vérifiions', say: 'Avant que nous oubliions, écrivons la date.' },
    { front: 'les dix', back: 'être, avoir, aller, faire, pouvoir, savoir, vouloir, valoir', say: 'Que je sois, que j’aie, que j’aille, que je fasse.' },
    { front: 'les deux impersonnels', back: 'qu’il faille, qu’il pleuve', say: 'Bien qu’il faille attendre, personne ne se plaint.' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_BILAN: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-bilan',
  layer: 'core',
  title: 'La formation, en résumé',
  body: `${REFRAME} Tu pars de « ils », tu coupes, tu ajoutes la fin, et tu sais quand le verbe change de morceau au milieu du tableau. Il reste deux questions que cette leçon n'a pas posées. La première, quelles expressions ouvrent vraiment la porte, est la prochaine. La seconde, quand dire « que je parte » et quand dire simplement « partir », vient juste après. EN: Two questions are left: which expressions really open the door, and when to use que je parte rather than plain partir.`,
  points: [
    "Le radical sort de la forme ils du présent, jamais de l'infinitif. EN: the stem comes from ils, never from the infinitive.",
    "Nous et vous prennent les fins de l'imparfait, -ions et -iez. EN: nous and vous take the imparfait endings.",
    "Huit verbes changent de radical entre la botte et le dehors. EN: eight verbs change stem at the boot's edge.",
    "Dix verbes s'apprennent en entier, et ce sont les dix plus fréquents. EN: ten verbs are learned whole, and they are the ten commonest.",
  ],
  audio: AUDIO,
  say: REFRAME,
};

const ACT11: ActDef = {
  act: {
    id: 'act11',
    title: 'Écrire au subjonctif',
    opener: {
      line: "Un message à un groupe demande les quatre familles en dix lignes : ici tu écris le tien. EN: A message to a group needs all four families in ten lines: here you write yours.",
      imageRef: 'lessons/subjonctif-formation/act11.jpg',
    },
    sections: [],
    milestone: "Tu écris un message entier au subjonctif, avec les quatre familles et quatre porteurs différents. EN: You can write a whole message in the subjunctive, with all four families and four different carriers.",
    estScreens: 138,
    restPoints: ['a11-scenario', 'a11-parler', 'a11-cheat', 'a11-quiz/r3-sosie', 'a11-quiz/r6-nous', 'a11-quiz/r9-impersonnels'],
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
    id: 'd-porte', title: 'Le porteur ou la forme', format: 'sort' as const,
    coach: "Deux piles. Demande-toi si le morceau ouvre la porte, ou s'il la franchit. EN: sort by whether the piece opens the door or goes through it.",
    buckets: ['ça ouvre la porte', 'ça vient derrière'],
    items: [E(1147), E(1148), E(1149), E(1016), E(1022), E(1105)], audio: AUDIO,
  },
  {
    id: 'd-radical', title: 'Coupe -ent', format: 'mcq' as const,
    coach: 'Dis le verbe avec ils, enlève -ent, ajoute la fin. Trois gestes, dans cet ordre. EN: say it with ils, cut -ent, add the ending.',
    q: 'Il faut que je ... ma voiture. (vendre)', opts: ['vendre', 'vends', 'vende'], correct: 2,
    why: "Ils vendent donne vend-, plus -e. EN: ils vendent gives vend-, plus -e.",
    items: [E(1015), E(1016), E(1017), E(1018), E(1019), E(1020)], audio: AUDIO,
  },
  {
    id: 'd-sosie', title: 'Ça se voit, ou pas', format: 'sort' as const,
    coach: "Deux piles : les formes identiques au présent, et les deux qui changent. EN: sort the forms identical to the present from the two that change.",
    buckets: ['identique au présent', 'ça se voit'],
    items: [E(1035), E(1038), E(1049), E(1036), E(1037), E(1041)], audio: AUDIO,
  },
  {
    id: 'd-ils', title: 'Pas l’infinitif', format: 'mcq' as const,
    coach: "Le radical se lit dans ils et jamais dans l'infinitif. EN: the stem shows in ils and never in the infinitive.",
    q: 'Il faut que je ... la ville. (connaître)', opts: ['connaisse', 'connaîsse'], correct: 0,
    why: "Ils connaissent donne connaiss-. EN: ils connaissent gives connaiss-.",
    items: [E(1050), E(1051), E(1058), E(1059), E(1060), E(1061)], audio: AUDIO,
  },
  {
    id: 'd-botte', title: 'Dedans, dehors', format: 'sort' as const,
    coach: 'Deux piles : le radical de ils, et le radical de nous. EN: sort the ils stem from the nous stem.',
    buckets: ['dans la botte', 'hors de la botte'],
    items: [E(1070), E(1072), E(1074), E(1071), E(1073), E(1075)], audio: AUDIO,
  },
  {
    id: 'd-doublei', title: 'Deux i de suite', format: 'flashcard' as const,
    coach: "Pour chaque carte, dis à voix haute combien de i tu écris. EN: for each card, say aloud how many i you write.",
    items: [E(1094), E(1095), E(1096), E(1097), E(1098), E(1099)], audio: AUDIO,
  },
  {
    id: 'd-etre-avoir', title: 'Les deux qui changent de fins', format: 'mcq' as const,
    coach: "Être et avoir prennent -ons et -ez, sans i. Partout ailleurs, le i est là. EN: être and avoir take -ons and -ez, with no i.",
    q: 'Il faut que nous ... prêts à huit heures. (être)', opts: ['soyions', 'soyons'], correct: 1,
    why: "Être refuse le i. EN: être refuses the i.",
    items: [E(1105), E(1106), E(1107), E(1108), E(1109), E(1110)], audio: AUDIO,
  },
  {
    id: 'd-quatre', title: 'Quatre radicaux à retrouver', format: 'mcq' as const,
    coach: 'puiss-, sach-, veuill-, vaill-. Aucun ne se calcule. EN: puiss-, sach-, veuill-, vaill-, and none of them is worked out.',
    q: 'Je suis content que tu ... venir samedi. (pouvoir)', opts: ['puisses', 'peuves', 'pouvoirs'], correct: 0,
    why: "Puiss-, sur les six formes. EN: puiss-, across all six.",
    items: [E(1125), E(1128), E(1131), E(1134), E(1136), E(1140)], audio: AUDIO,
  },
  {
    id: 'd-impersonnel', title: 'Une forme chacun', format: 'flashcard' as const,
    coach: "Pour chaque carte, dis si falloir est le porteur ou le verbe qui suit que. EN: say whether falloir is the carrier or the verb after que.",
    items: [E(1145), E(1146), E(1152), E(1153), E(1154), E(1157)], audio: AUDIO,
  },
  {
    id: 'd-reperage', title: 'Trouve la source', format: 'mcq' as const,
    coach: "Trois sources possibles : la forme ils, la forme nous, ou la mémoire. EN: three possible sources: the ils form, the nous form, or memory.",
    q: '« Avant que le magasin ferme » : ferme est...', opts: ['un subjonctif', 'un présent'], correct: 0,
    why: "Avant que ouvre la porte, même si rien ne se voit. EN: avant que opens the door even when nothing shows.",
    items: [E(1165), E(1166), E(1158), E(1159), E(1162), E(1168)], audio: AUDIO,
  },
  {
    id: 'd-ecrire', title: 'Les quatre familles dans un message', format: 'flashcard' as const,
    coach: "Pour chaque phrase, dis de quelle famille vient sa forme. EN: name the family each form comes from.",
    items: [E(1173), E(1174), E(1175), E(1176), E(1177), E(1188)], audio: AUDIO,
  },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'forme-oubliee', description: 'Leaves the present indicative standing after que, or abandons the sentence halfway and rewords it with a shape that needs no subjunctive.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-porte', retest: 'd-porte' },
  { id: 'radical-infinitif', description: 'Builds the stem from the infinitive instead of the ils form, so the result keeps letters the verb loses and loses letters it keeps.', detectOn: ['a2-construire', 'a2-choisir', 'a2-check', 'a11-mission'], drill: 'd-radical', retest: 'd-radical' },
  { id: 'sosie-abandonne', description: 'Concludes from an -er verb that the subjunctive is not there at all, then drops it on nous and vous where it would have shown.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-sosie', retest: 'd-sosie' },
  { id: 'radical-je', description: 'Reads the stem off the je form or off the infinitive on -ir and -re verbs, so connaître, écrire and lire come out short.', detectOn: ['a4-construire', 'a4-choisir', 'a4-check', 'a11-mission'], drill: 'd-ils', retest: 'd-ils' },
  { id: 'botte-plate', description: 'Uses one stem for all six persons of a two-stem verb, in either direction: que nous boivions, or que je buve.', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-botte', retest: 'd-botte' },
  { id: 'i-manquant', description: 'Keeps the present -ons and -ez on nous and vous, or drops the stem’s own i or y before the ending: que nous vérifions, que vous croyez.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-doublei', retest: 'd-doublei' },
  { id: 'etre-avoir-regularises', description: 'Applies the regular endings to être and avoir, giving que je soie and que tu ayes, or adds the i they refuse: que nous soyions.', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-etre-avoir', retest: 'd-etre-avoir' },
  { id: 'dix-regularises', description: 'Runs the act 2 rule over pouvoir, savoir, vouloir and valoir, producing que je peuve, que je save and que je voule.', detectOn: ['a8-construire', 'a8-erreurs', 'a8-check', 'a11-mission'], drill: 'd-quatre', retest: 'd-quatre' },
  { id: 'impersonnel-present', description: 'Leaves il faut and il pleut in the present behind a que, or invents a second person for verbs that only ever take il.', detectOn: ['a9-construire', 'a9-piege', 'a9-check'], drill: 'd-impersonnel', retest: 'd-impersonnel' },
  { id: 'porte-mal-lue', description: 'Marks a verb with no que in front of it as a subjunctive, or misses one whose form is identical to the present.', detectOn: ['a10-melange', 'a10-erreurs', 'a10-check', 'a11-mission'], drill: 'd-reperage', retest: 'd-reperage' },
  { id: 'ecrit-plat', description: 'Writes a whole message with one carrier repeated and only third-person -er verbs, so nothing in it shows whether the form can be built.', detectOn: ['a11-mission', 'a11-plan', 'a11-scenario'], drill: 'd-ecrire', retest: 'd-ecrire' },
];

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

export const SECTIONS: DraftSection[] = ACTS.flatMap((a) => a.sections);

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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-14-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-14-tableau': "The Saturday board (act 1), ONE female voice reading a narration that quotes three speakers. The quoted subjunctives (réservions, aille, soit, mange, parte, viennes) are spoken at ordinary speed and are NEVER stressed as vocabulary: the learner has to notice that they slide past unremarked. One take.",
  'rec-b1-14-porte': "The doorway deck (act 1), one voice, four cards. « que » is unstressed every time and runs straight into the next word, as it does in speech: [kuh zhuh PART], not [KUH | zhuh PART]. The contrast pair « nous sommes / que nous soyons » is read as one continuous line with a small pause between the two.",
  'rec-b1-14-tables': "Putting up the tables (act 2), two male voices, close and unhurried, with a light room tone. The rule line « tu dis le verbe avec ils, tu coupes la fin, et tu recolles » is delivered as an aside, not as a lesson: no emphasis on any of the three verbs.",
  'rec-b1-14-regle-ecoute': 'REQUIRED FOR THE EAR MISSION (act 2): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed, with only a normal breath between lines. The learner cannot see the text, so a second take or a second voice destroys the exercise. The -ions and -iez endings are NOT over-articulated; they must be recognisable at ordinary speed.',
  'rec-b1-14-tableau-lea': "Léa at the board (act 3), ONE female voice reading a narration that quotes a teacher and a student. The two identical sentences « Tu travailles beaucoup » and « Il faut que tu travailles » must be spoken IDENTICALLY, with the same pitch and length on travailles. If the reader distinguishes them, the whole act collapses.",
  'rec-b1-14-sosie-ecoute': 'REQUIRED FOR THE EAR MISSION (act 3): eight lines, ONE TAKE, ONE VOICE, in authored order. The four -er forms identical to the present must sound exactly like the present, with no hint that anything special is happening. The four nous and vous forms are read at the same speed, with no extra weight on the i.',
  'rec-b1-14-piege-sosie': 'The trap drill (act 3): the six card sentences read in order, ONE VOICE, at normal speed. The wrong versions printed on the cards are NEVER spoken.',
  'rec-b1-14-conduite': "The driving lesson (act 4), a male instructor and a younger learner, inside a car: a little road noise if the studio can give it. The instructor is level and unhurried; the six -ir and -re subjunctives sit inside their sentences and are never stressed as vocabulary.",
  'rec-b1-14-athletisme': "Before training (act 5), one female coach and one athlete, outdoors, early morning, brisk. « que tu boives » and « que nous buvions » come thirty seconds apart and must be audibly the same verb: the contrast is the whole recording.",
  'rec-b1-14-botte-ecoute': 'REQUIRED FOR THE EAR MISSION (act 5): eight bare forms, ONE TAKE, ONE VOICE, in authored order, with a full second between each. These are paradigm slots rather than sentences, so they are read plainly and at equal length, and the boot pairs are not grouped by a change of tone.',
  'rec-b1-14-piege-botte': 'The trap drill (act 5): the six card sentences read in order, ONE VOICE. The wrong versions printed on the cards are NEVER spoken.',
  'rec-b1-14-cours-du-soir': "The evening class (act 6), ONE male voice reading a narration that quotes a teacher and a student. « que nous étudiions » is read at normal speed and the double i is NOT lengthened: the point of the passage is that you cannot hear it.",
  'rec-b1-14-dimanche': "Sunday lunch (act 7), a mother on the phone and her daughter, warm and fast, with the mother overlapping slightly. The four irregular subjunctives are spoken as ordinary speech: nobody in this recording knows they are irregular.",
  'rec-b1-14-dix-ecoute': 'REQUIRED FOR THE EAR MISSION (act 7): eight bare forms, ONE TAKE, ONE VOICE, in authored order, with a full second between each. « que j’aie » is one syllable and must not be stretched; « que nous ayons » and « que nous fassions » must be distinguishable by their endings alone.',
  'rec-b1-14-piege-dix': 'The trap drill (act 7): the six card sentences read in order, ONE VOICE. The wrong versions printed on the cards are NEVER spoken.',
  'rec-b1-14-guichet': "The registration counter (act 8), one female clerk and one male student, in a room with a queue behind them. Both use vous throughout. The four verbs come round several times and are never emphasised.",
  'rec-b1-14-marche': "The farmers’ market (act 9), two growers, unhurried, outdoors under a tarpaulin with rain on it if the studio can give it. « qu’il faille » and « qu’il pleuve » are thrown away inside their sentences.",
  'rec-b1-14-piege-impersonnels': 'The trap drill (act 9): the six card sentences read in order, ONE VOICE. The wrong versions printed on the cards are NEVER spoken.',
  'rec-b1-14-message': "The brother’s message (act 10), ONE voice reading a narration that quotes a text message. The quoted message is read as somebody reading a screen aloud, slightly flat, with a clear pause before « Dis-moi à quelle heure tu arrives » so the decoy stands apart.",
  'rec-b1-14-melange-ecoute': 'REQUIRED FOR THE EAR MISSION (act 10): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. The families are deliberately shuffled, so nothing in the delivery may group them.',
  'rec-b1-14-gite': "The model message (act 11), one voice, read as somebody reading a message aloud rather than performing it. The five carriers must be audible through the pauses: il faut que, je veux que, bien que, avant que, je suis content que.",
};

export const LESSON: Omit<Lesson, 'sections'> & { sections: DraftSection[] } = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 14',
  intro: 'French has a second set of verb forms that live behind the word que, and you have been walking around them for months: que je parte, que tu sois, qu’il fasse. This lesson is about building them, and only about that. The good news is in the rule itself: the stem is almost always one you already say out loud every day, in the ils form of the present. Ten verbs ignore that, and they are the ten you use most, so you will have them quickly.',
  skill: 'PE',
  grammarAssumed: [IMP_FORM_UNIT, POLI_UNIT, ALLER_UNIT, VERBES_IR_UNIT, VERBES_RE_UNIT, FAIRE_UNIT, MODAUX_UNIT, SAVOIR_UNIT, PRENDRE_UNIT],
  grammarIntroduced: [
    'The present subjunctive as a verb form rather than a tense: it locates nothing in time and appears almost only after que',
    'The regular formation rule: the third person plural of the present, minus -ent, plus -e -es -e -ions -iez -ent',
    'The stem read off the ils form rather than the infinitive, including where the infinitive hides it (connaître, écrire, finir)',
    'The -er lookalike: four of six forms identical to the present, and the nous test that proves the subjunctive is there',
    'Two-stem verbs: boire, prendre, venir, voir, devoir, recevoir, mourir, tenir, with nous and vous taken from the imparfait stem',
    'The spelling of -ions and -iez on a stem that already ends in i or y: que nous étudiions, que vous croyiez, que nous riions',
    'The eight irregular stems learned whole: être, avoir, aller, faire, pouvoir, savoir, vouloir, valoir',
    'Être and avoir as the only two verbs whose endings also differ: sois, soyons, soyez; aie, ayons, ayez',
    'The two impersonal subjunctives with a single form each: qu’il faille and qu’il pleuve',
    'A three-step recognition test for an unfamiliar form: a que in front, a stem off ils, or one of the ten',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Il existe en français une deuxième série de formes du verbe, et elle vit derrière le mot « que ». Cette leçon t'apprend à la construire, et rien d'autre. La bonne nouvelle est dans la règle : le radical, tu le dis déjà tous les jours, dans la forme « ils » du présent. Dix verbes n'en font qu'à leur tête, et ce sont les dix que tu utilises le plus.",
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
  terms: SUBJONCTIF_TERMS,
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

/** The lesson as the CURRENT validators accept it: the draft `task` removed
 *  from `sections` and from every act. */
export function lessonWithoutTask(): Lesson {
  const isTask = (s: DraftSection): s is TaskSection => s.type === 'task';
  const taskIds = new Set(LESSON.sections.filter(isTask).map((s) => s.id));
  return {
    ...LESSON,
    sections: LESSON.sections.filter((s): s is LessonSection => !isTask(s)),
    acts: LESSON.acts?.map((a) => ({
      ...a,
      sections: a.sections.filter((id) => !taskIds.has(id)),
      restPoints: a.restPoints?.filter((rp) => !taskIds.has(rp.split('/')[0])),
    })),
  };
}

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, READING_PLAN, dicteeFor };
