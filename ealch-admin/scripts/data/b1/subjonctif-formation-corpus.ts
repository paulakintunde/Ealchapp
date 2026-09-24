// b1.14.l1 « Le subjonctif présent : la formation » — the authored corpus, the
// imports and the citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top
// of B1-BUILD-PLAYBOOK.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (b1.15 and b1.16 will import REFRAME and REFRAME_EN from this
// file; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL,
// E, ALL_ROWS, IMPORT_IDS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   HOW THE PRESENT SUBJUNCTIVE IS BUILT, AND NOTHING ELSE.
//
//   1. THE REGULAR RULE. Take the `ils` form of the present, cut `-ent`, add
//      `-e -es -e -ions -iez -ent`.  ils parlent → que je parle.
//      ils finissent → que je finisse.  ils vendent → que je vende.
//      The stem is visible in `ils` and invisible in the infinitive, which is
//      why the rule starts there and not at the dictionary form.
//
//   2. THE SOSIE, the lookalike. For an `-er` verb four forms out of six are
//      spelled and said exactly like the present: que je parle, que tu parles,
//      qu'il parle, qu'ils parlent. Only `nous` and `vous` show. That is a
//      trap, not a gift: a learner who cannot hear the subjunctive concludes
//      it is not there and stops producing it on the verbs where it shows.
//
//   3. LA BOTTE, the two-stem verbs. `nous` and `vous` come from the imparfait
//      stem, the other four from the `ils` stem: que je boive / que nous
//      buvions, que je prenne / que nous prenions, que je vienne / que nous
//      venions, and the same for voir, devoir, recevoir, mourir, tenir.
//
//   4. LE NOYAU DUR, the ten learned whole: être, avoir, aller, faire,
//      pouvoir, savoir, vouloir, valoir, plus the two impersonals falloir
//      (qu'il faille) and pleuvoir (qu'il pleuve). Être and avoir break even
//      the endings, which is why they open act 7 rather than closing it.
//
//   5. RECOGNISING IT. The subjunctive almost never stands alone: it arrives
//      after `que`, and the lesson teaches `que` as the doorway.
//
//   NOT OWNED HERE, AND SAID SO ON THE CARDS:
//
//   WHICH EXPRESSIONS TAKE THE SUBJUNCTIVE IS b1.15's LESSON. This lesson
//   uses a SMALL FIXED SET of five carriers and never inventories more:
//     il faut que · je veux que · je suis content que · bien que · avant que
//   Every authored row uses one of those five and nothing else. Three seed
//   imports carry « il faudrait que », which is « il faut que » at the
//   conditional (b1.09's tense, not a new trigger) and changes nothing after
//   `que`; act 6 says so on the card. One import carries « le coach veut
//   que », which is « je veux que » with another subject.
//
//   SUBJONCTIF AGAINST THE INFINITIVE (« je veux partir » / « je veux que tu
//   partes », the same-subject rule) IS b1.16's. It is named ONCE, as a
//   signpost in act 11's roundup, and never drilled.
//
//   THE PAST SUBJUNCTIVE AND THE IMPERFECT SUBJUNCTIVE are out of B1 entirely
//   and are named nowhere. No authored row contains « que j'aie fait » or
//   « que je fisse ».
//
//   RELATIVE PRONOUNS are b1.11 to b1.13's, running in parallel in wave 3.
//   No authored row uses `dont`, `où`, `lequel`, `ce qui` or `ce que`.
//
// QUOTED, NEVER TAUGHT (imported, never retyped):
//
//   b1.01  REFRAME (the imparfait: start from nous, cut -ons, add the ending).
//          Acts 5 and 6, where `nous` and `vous` come from that same stem.
//   b1.09  REFRAME (politeness measures the favour, not your niceness).
//          Act 1, because « il faut que » is the carrier b1.09 promised to
//          this lesson and deliberately left in front of an infinitive.
//
// LEANED ON: a2.10 and a2.11 (the present of -ir and -re verbs, where the
// `ils` form comes from), a2.13 (pouvoir, vouloir, devoir), a2.14 (savoir),
// a2.15 (prendre, mettre), a2.02 (aller, venir), a2.12 (faire, dire, lire),
// b1.01 (the imparfait stem).
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME: `opinions-et-avis` (fondations, a2-b2). It already exists, so
//     nothing is created at import. Ids are `fr.b1.opinions-et-avis.NNN`.
//  2. POSTGRES WAS PROBED DIRECTLY, 2026-09-24 (orchestrator, then re-read by
//     this author). The theme holds 295 rows in all, 115 of them `fr.b1.*` at
//     001-115, the highest number anywhere in the theme is 132, and there is
//     NOTHING at or above 900.  **Never author below 1000 in this theme.**
//  3. ID BLOCK: b1.14 owns `.1000`-`.1199` and nothing else. Used here:
//     `.1000`-`.1195`, in eleven act blocks. 1200-1399 is b1.15's and
//     1400-1599 is b1.16's; neither is touched.
//  4. THE THEME HOLDS ZERO SEED ROWS. `opinions-et-avis` is absent from
//     seed.json's `items` entirely, so not one row of this theme can be named
//     by a section today: `src()` resolves against the seed and would throw.
//     Every reused row in §F therefore comes from ANOTHER theme.
//  5. THE 115 PUBLISHED b1 ROWS ARE NOT REUSABLE TODAY, and about a dozen of
//     them carry exactly the forms this lesson authors (soient, fassent,
//     puisse, faille, convienne, prévoie, mérite, disparaisse). They are
//     listed in §F2 as DB_ONLY_TWINS so the import step can swap the authored
//     twin for the published row instead of shipping both. They sit behind
//     opinion triggers (« je ne pense pas que », « je doute que », « à
//     condition que ») that belong to b1.15, so they could not have been used
//     as carriers here even if the seed had carried them.
//  6. SEED READ 2026-09-24. Every reused id in §F was read out of seed.json
//     and carries its French in a trailing comment, so nothing here needs
//     seed.json opened again. Seed-checked only, DB check pending at import.
//  7. RESPELLINGS SPELLED FOR THE NASAL CHECKER rather than for the ear:
//     `PRENN` (prenne, prennes), `VYENN` (vienne, viennes), `TYENN` (tienne)
//     and `ko-NESS` (connaissent) all double or close the consonant so that
//     `nasal-convention` does not read a single vowel plus n or m as an
//     unmarked nasal vowel. In all four the French spelling really does carry
//     a doubled or pronounced consonant, so the respelling is also right for
//     the ear. Everything else is spelled for the ear.
//  8. NO U+203F anywhere: a liaison consonant moves onto the next syllable
//     (« keel-ZEH » for qu'ils aient, « kuh noo-za-LYOHⁿ » for que nous
//     allions).
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b1.14',
  seq: 14,
  title: 'The Present Subjunctive: Building It',
  sub: 'Le subjonctif présent : la formation',
  canDo: 'Can build the present subjunctive of regular, two-stem and irregular verbs, recognise it after que in speech and in writing, and use it correctly inside a small fixed set of carrier expressions',
  prereqUnitIds: ['b1.01', 'b1.09'],
} as const;

export const LESSON_ID = 'b1.14.l1';
export const THEME = 'opinions-et-avis';
export const LEVEL = 'b1' as const;

/** The whole block, claimed in B1-BUILD-LOG.md. Nothing is authored outside
 *  it, and nothing is authored below 1000: Postgres holds 001-132. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A2 citations use the house English trail label, resolved through `unitRef`
 *  from the shipped `unit.seq`, never typed and never the raw id. b1.* units
 *  are not rows in the seed yet, so they are labelled in French from the plan
 *  until they are.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMP_FORM_UNIT = 'b1.01';
export const POLI_UNIT = 'b1.09';
export const ALLER_UNIT = 'a2.02';
export const VERBES_IR_UNIT = 'a2.10';
export const VERBES_RE_UNIT = 'a2.11';
export const FAIRE_UNIT = 'a2.12';
export const MODAUX_UNIT = 'a2.13';
export const SAVOIR_UNIT = 'a2.14';
export const PRENDRE_UNIT = 'a2.15';

/** TODO(import): drop once the b1.* units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5, 'b1.06': 6,
  'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10, 'b1.11': 11, 'b1.12': 12,
  'b1.13': 13, 'b1.14': 14, 'b1.15': 15, 'b1.16': 16,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const IMP_FORM_REF = refFr(IMP_FORM_UNIT);
export const POLI_REF = refFr(POLI_UNIT);
export const TRIGGERS_REF = refFr('b1.15');
export const INFINITIF_REF = refFr('b1.16');
export const ALLER_REF = unitRef(ALLER_UNIT);
export const VERBES_IR_REF = unitRef(VERBES_IR_UNIT);
export const VERBES_RE_REF = unitRef(VERBES_RE_UNIT);
export const FAIRE_REF = unitRef(FAIRE_UNIT);
export const MODAUX_REF = unitRef(MODAUX_UNIT);
export const SAVOIR_REF = unitRef(SAVOIR_UNIT);
export const PRENDRE_REF = unitRef(PRENDRE_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED
 *
 *  Both neighbours are B1 and both reframes are French, so they are quoted as
 *  they stand and never retyped.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B101_REFRAME, REFRAME_EN as B101_REFRAME_EN } from './imparfait-formation-corpus.ts';
export { REFRAME as B109_REFRAME, REFRAME_EN as B109_REFRAME_EN } from './politesse-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LA FORME EST DÉJÀ LÀ. The subjunctive has almost no shapes of its own: it
 *  takes a form the learner already says (the `ils` of the present, the `nous`
 *  of the imparfait) and re-uses it behind `que`. The image across the eleven
 *  chapter pictures is a shape LIFTED FROM SOMEWHERE ELSE IN THE FRAME and
 *  set down where it is needed: a cut-out that fits an existing hole, a
 *  stencil, a key already on the ring. It is NOT a metaphor of difficulty or
 *  of mood: nothing here says the subjunctive is emotional, uncertain or
 *  subjective, because that is about WHEN it is used and this lesson is about
 *  HOW it is built.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Le subjonctif ne s'invente pas : presque toujours, il sort d'une forme que tu dis déjà.";
export const REFRAME_EN = 'The subjunctive is not invented: almost always, it comes out of a form you already say.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Le subjonctif, c’est ils moins -ent.',
    why: 'True for act 2 and false for three later acts. The two-stem verbs of act 5 take nous and vous from the imparfait, not from ils, and the ten verbs of acts 7 to 9 take their stem from nowhere at all. Acts 5, 7, 8 and 9 would each spend themselves contradicting the reframe.',
  },
  {
    text: 'Les terminaisons ne changent jamais ; seul le radical change.',
    why: 'Être and avoir break the endings themselves (que je sois, que nous soyons; que j’aie, que nous ayons), and act 7 is built on exactly that pair. A reframe that the lesson’s hardest act contradicts in its first two minutes teaches the learner not to trust it.',
  },
  {
    text: 'Le subjonctif, c’est ce qui vient après que.',
    why: 'It is the recognition half only, and it promises a rule this lesson deliberately does not give: WHICH expressions take the subjunctive is b1.15’s whole lesson. Kept as the doorway image (« la porte que ») and as a spotting test, never as the reframe.',
  },
  {
    text: 'Le subjonctif, c’est le mode du doute et du sentiment.',
    why: 'It is about WHEN, not HOW, so it answers a question this lesson never asks; and it is false as often as it is true (il faut que is neither doubt nor feeling). It is also the sentence that makes a learner think the form is chosen by mood rather than built by rule.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-24 and its `fr` is copied
 *  verbatim wherever a section prints it. `opinions-et-avis` carries ZERO
 *  seed rows, so every one of these comes from another theme.
 *
 *  NONE of the 38 carries a `voiceflash` drill, so NOT_SPEAKABLE is the whole
 *  import list and the `practice` speak mission names authored rows only.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b1.routines.071',          // Bien que je sois fatigué le matin, je fais toujours du sport avant le travail.
    'fr.b1.cafe.059',              // Il faut que tu viennes au café avec nous.
    'fr.b1.bureau.002',            // Il faut que le rapport soit prêt avant vendredi.
    'fr.a1.nombres.150',           // Encore vingt minutes avant que la table soit prête.
  ],
  act2: [
    'fr.b1.bien-etre.005',         // Il faut que tu dormes plus.
    'fr.b1.metiers.049',           // Il faut que tu envoies ton CV avant vendredi si tu veux ce poste.
    'fr.b1.dictee.030',            // Il faut que vous inscriviez votre enfant avant la fin du mois.
    'fr.b1.voisinage.003',         // Il faut que les voisins soient plus respectueux du calme le soir.
  ],
  act3: [
    'fr.b1.routines.084',          // Avant de partir travailler, il faut que je vérifie mes messages.
    'fr.b1.maison.075',            // Il faut que je répare la poignée de la porte.
    'fr.b1.cuisine.004',           // Bien que la recette semble simple, elle demande beaucoup de patience.
    'fr.b1.courses.002',           // Il faut qu'on fasse les courses avant que les magasins ferment.
    'fr.a2.jardinage.002',         // Il faut que nous arrosions les tomates avant midi.
    'fr.b1.dictee.036',            // Il faudrait que tu révises davantage avant la dictée de vendredi.
  ],
  act4: [
    'fr.b1.metiers.057',           // Il faudrait que tu remplisses ce formulaire avant qu'il ne soit trop tard.
    'fr.b1.heure-et-date.074',     // Il faudrait que nous partions avant l'aube pour éviter les embouteillages.
  ],
  act5: [
    'fr.b1.famille.060',           // Il faut que tu prennes soin de ta grand-mère pendant qu'elle est malade.
  ],
  act6: [
    'fr.b1.soins.003',             // Il faut que vous preniez ce médicament deux fois par jour.
    'fr.b1.dictee.045',            // Il faudrait que nous vérifiions l'orthographe de chaque mot difficile.
    'fr.b1.famille.075',           // Il faudrait que nous parlions à nos parents avant de prendre une décision.
    'fr.b1.ecologie.004',          // Il faut que nous consommions moins d'énergie.
    'fr.b1.famille.085',           // Il faut que vous respectiez les choix de vos enfants adultes.
    'fr.b1.sports-et-loisirs.084', // Il faut que nous réservions le terrain avant samedi.
  ],
  act7: [
    'fr.b1.maison.052',            // Il faut que tu fasses le ménage ce week-end.
    'fr.b1.sports-et-loisirs.054', // Il faut que tu fasses du sport régulièrement pour rester en forme.
    'fr.b1.routines.061',          // Il faut que nous soyons prêts avant que le bus arrive.
    'fr.b1.heure-et-date.055',     // Il faut que nous soyons à l'aéroport avant sept heures du matin.
    'fr.b1.famille.077',           // Bien que mes parents soient divorcés, ils s'entendent bien pour les enfants.
    'fr.b1.tourisme.005',          // Bien que la visite guidée soit un peu chère, elle vaut vraiment le détour.
  ],
  act8: [
    'fr.b1.sports-et-loisirs.056', // Le coach veut que nous soyons prêts avant le match.
  ],
  act9: [] as string[],
  act10: [
    'fr.b1.routines.089',          // Bien que je sois pressé, je prends toujours le temps de déjeuner.
    'fr.b1.famille.063',           // Bien que mon frère soit occupé, il vient toujours aux réunions de famille.
    'fr.b1.cafe.076',              // Bien que ce café soit cher, il reste toujours plein.
    'fr.b1.cuisine.068',           // Bien que ce gâteau soit simple, il plaît à tout le monde.
  ],
  act11: [
    'fr.b1.tourisme.002',          // Il faut que nous réservions l'hôtel avant le week-end.
    'fr.b1.heure-et-date.063',     // D'ici la fin du mois, il faut que le projet soit terminé.
    'fr.b1.heure-et-date.091',     // Bien que l'horaire soit serré, tout le monde est arrivé à temps.
    'fr.b1.maison.004',            // Il faut refaire la toiture avant que l'hiver n'arrive.
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable through a
 *  deckTranche. The drill list each one DOES carry is in the trailing
 *  comment. */
export const NOT_DECK_ABLE = [
  'fr.b1.routines.071',          // dictation
  'fr.b1.cafe.059',              // dictation
  'fr.b1.bureau.002',            // dictation
  'fr.a1.nombres.150',           // dictation
  'fr.b1.metiers.049',           // sentence, review
  'fr.b1.dictee.030',            // sentence, review
  'fr.b1.voisinage.003',         // dictation
  'fr.b1.courses.002',           // dictation
  'fr.a2.jardinage.002',         // dictation
  'fr.b1.dictee.036',            // sentence, review
  'fr.b1.metiers.057',           // dictation
  'fr.b1.heure-et-date.074',     // dictation
  'fr.b1.famille.060',           // sentence, review
  'fr.b1.dictee.045',            // dictation
  'fr.b1.famille.075',           // dictation
  'fr.b1.famille.085',           // dictation
  'fr.b1.maison.052',            // dictation
  'fr.b1.sports-et-loisirs.054', // dictation
  'fr.b1.routines.061',          // dictation
  'fr.b1.heure-et-date.055',     // dictation
  'fr.b1.famille.077',           // dictation
  'fr.b1.sports-et-loisirs.056', // dictation
  'fr.b1.famille.063',           // sentence, review
  'fr.b1.cafe.076',              // dictation
  'fr.b1.cuisine.068',           // dictation
  'fr.b1.tourisme.002',          // dictation
  'fr.b1.heure-et-date.063',     // dictation
  'fr.b1.heure-et-date.091',     // dictation
];

/** No `voiceflash` either: never in a `practice` speak section. Measured
 *  2026-09-24: not one of the 38 imports carries it, so the speak mission
 *  filters ALL_ROWS and names nothing by hand. */
export const NOT_SPEAKABLE = [...IMPORT_IDS];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F2. DB-ONLY TWINS
 *
 *  Postgres holds 115 published `fr.b1.opinions-et-avis.*` rows that
 *  seed.json does not carry. `src()` resolves against the seed, so naming one
 *  throws at module load and none of them can be reused today. A dozen carry
 *  exactly the forms this lesson authors. They are listed here with the
 *  authored row that duplicates them so the import step can dedupe instead of
 *  shipping both.
 *
 *  Note for the import decision: every one of them sits behind an OPINION
 *  trigger (« je ne pense pas que », « je doute que », « à condition que »,
 *  « quoique », « pourvu que ») that belongs to b1.15. Keeping the published
 *  row and dropping the authored twin would put a b1.15 trigger inside b1.14's
 *  deck, which is the reason the twins were authored rather than the rows
 *  simply waited for.  DECISION NEEDED AT IMPORT.
 * ══════════════════════════════════════════════════════════════════════════ */

export const DB_ONLY_TWINS: readonly { id: string; fr: string; mine: string }[] = [
  { id: 'fr.b1.opinions-et-avis.026', fr: "Je ne pense pas que les réseaux sociaux soient aussi dangereux qu'on le dit.", mine: 'act 7, qu’ils soient (E(1107), E(1188))' },
  { id: 'fr.b1.opinions-et-avis.027', fr: "Je doute que cette méthode d'enseignement convienne à tous les élèves.", mine: 'act 5, the boot stem of venir/convenir (E(1074), E(1088))' },
  { id: 'fr.b1.opinions-et-avis.030', fr: "Tu as sans doute raison, mais je ne crois pas que ce métier disparaisse totalement.", mine: 'act 4, the -re stem from ils (E(1059), E(1067))' },
  { id: 'fr.b1.opinions-et-avis.031', fr: "Je ne pense pas qu'il soit utile de suivre un régime aussi strict.", mine: 'act 7, qu’il soit (E(1105), E(1117))' },
  { id: 'fr.b1.opinions-et-avis.036', fr: "Je ne suis pas d'accord, il n'est pas vrai que les hommes fassent moins de tâches ménagères qu'avant.", mine: 'act 7, qu’ils fassent (E(1116), E(1123))' },
  { id: 'fr.b1.opinions-et-avis.037', fr: "Je doute que ce joueur mérite vraiment sa place dans l'équipe.", mine: 'act 3, the -er sosie (E(1044), E(1048))' },
  { id: 'fr.b1.opinions-et-avis.043', fr: "Tu as raison, pourvu que chacun fasse un effort, la situation peut vraiment s'améliorer.", mine: 'act 11, « Il faut que chacun fasse sa part. » (E(1173))' },
  { id: 'fr.b1.opinions-et-avis.047', fr: "Je suis d'accord, à condition que la ville prévoie aussi assez de parkings pour les habitants.", mine: 'act 5, the -oir boot stem (E(1076), E(1080))' },
  { id: 'fr.b1.opinions-et-avis.048', fr: "Tu n'as pas tort, quoiqu'il faille aussi du temps libre pour faire du bénévolat.", mine: 'act 9, qu’il faille (E(1145), E(1152), E(1157))' },
  { id: 'fr.b1.opinions-et-avis.049', fr: "Je ne pense pas que l'agriculture biologique puisse à elle seule nourrir toute la planète.", mine: 'act 8, que je puisse (E(1125), E(1137))' },
  { id: 'fr.b1.opinions-et-avis.114', fr: 'je doute que', mine: 'no authored twin: the trigger itself is b1.15’s' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, the final stressed syllable of
 *  each group in caps, ü for French u, nasals closed with the superscript ⁿ,
 *  and NO U+203F tie: a liaison consonant moves onto the next syllable.
 *
 *    -e -es -e -ent     [ə]/silent   the four short forms, stress on the stem
 *    -ions              [jɔ̃]         -YOHⁿ
 *    -iez               [je]         -YAY
 *    que                [kə]         kuh, never stressed
 *    qu'ils             [kil]        keel, liaison onto the next syllable
 *
 *  The subjunctive endings are never stressed inside a sentence: the caps sit
 *  on the last syllable of the group, which is b1.01's pattern for the same
 *  shape of ending.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['subjonctif', ...tags], drills, version: 1, grammarPoints: ['subjonctif-present'], ...extra,
});

/** A bare form or a fixed opener: the paradigm slot itself, with no sentence
 *  around it. These are what the sort and flashcard drills move. */
const chunk = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['subjonctif', ...tags], drills, version: 1, grammarPoints: ['subjonctif-present'], ...extra,
});

/** A gapfill card: `prompt` is the front, `fr` the answer (validateItem). */
const gap = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'gapfill', prompt, notes });
/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LA PORTE ───────────────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, 'Il faut que je parte avant six heures.', 'I have to leave before six.', '/il fo kə ʒə paʁt a.vɑ̃ si.zœʁ/', 'eel foh kuh zhuh PART a-vahⁿ see-ZUHR', ['porte', 'il-faut-que'], FCVDR),
  sent(1001, "Il faut que tu finisses ce dossier aujourd'hui.", 'You have to finish this file today.', '/il fo kə ty fi.nis sə do.sje o.ʒuʁ.dɥi/', 'eel foh kuh tü fee-NEESS suh doh-SYAY oh-zhoor-DWEE', ['porte', 'il-faut-que']),
  sent(1002, 'Je veux que tu me dises la vérité.', 'I want you to tell me the truth.', '/ʒə vø kə ty mə diz la ve.ʁi.te/', 'zhuh veu kuh tü muh DEEZ la vay-ree-TAY', ['porte', 'je-veux-que'], FCVDR),
  sent(1003, 'Je suis content que tu sois là.', 'I am glad you are here.', '/ʒə sɥi kɔ̃.tɑ̃ kə ty swa la/', 'zhuh swee kohⁿ-TAHⁿ kuh tü swa LA', ['porte', 'content-que']),
  sent(1004, 'Bien que ce soit difficile, elle continue.', 'Although it is difficult, she is carrying on.', '/bjɛ̃ kə sə swa di.fi.sil ɛl kɔ̃.ti.ny/', 'byehⁿ kuh suh swa dee-fee-SEEL ehl kohⁿ-tee-NÜ', ['porte', 'bien-que']),
  sent(1005, "Avant que le train parte, nous avons le temps d'un café.", 'Before the train leaves, we have time for a coffee.', '/a.vɑ̃ kə lə tʁɛ̃ paʁt nu.za.vɔ̃ lə tɑ̃ dœ̃ ka.fe/', 'a-vahⁿ kuh luh trehⁿ PART noo-za-vohⁿ luh tahⁿ duhⁿ ka-FAY', ['porte', 'avant-que']),
  sent(1006, 'Il faut que nous parlions de ce projet.', 'We need to talk about this project.', '/il fo kə nu paʁ.ljɔ̃ də sə pʁɔ.ʒɛ/', 'eel foh kuh noo par-LYOHⁿ duh suh pro-ZHEH', ['porte', 'nous']),
  sent(1007, 'Je veux que vous écriviez votre nom ici.', 'I want you to write your name here.', '/ʒə vø kə vu.ze.kʁi.vje vɔtʁ nɔ̃ i.si/', 'zhuh veu kuh voo-zay-kree-VYAY votr nohⁿ ee-SEE', ['porte', 'vous']),
  sent(1008, 'Il faut qu’elle prenne une décision cette semaine.', 'She has to make a decision this week.', '/il fo kɛl pʁɛn yn de.si.zjɔ̃ sɛt sə.mɛn/', 'eel foh kehl PRENN ün day-see-ZYOHⁿ seht suh-MEN', ['porte', 'botte'], FCVDR),
  sent(1009, 'Je suis contente que vous puissiez venir.', 'I am glad you can come.', '/ʒə sɥi kɔ̃.tɑ̃t kə vu pɥi.sje və.niʁ/', 'zhuh swee kohⁿ-TAHⁿT kuh voo pwee-SYAY vuh-NEER', ['porte', 'content-que']),
  sent(1010, 'Avant qu’il fasse nuit, rentre à la maison.', 'Before it gets dark, come home.', '/a.vɑ̃ kil fas nɥi ʁɑ̃tʁ a la mɛ.zɔ̃/', 'a-vahⁿ keel FASS nwee rahⁿtr a la meh-ZOHⁿ', ['porte', 'avant-que', 'noyau']),
  sent(1011, 'Il faut que tu ailles chez le médecin.', 'You have to go to the doctor.', '/il fo kə ty aj ʃe lə med.sɛ̃/', 'eel foh kuh tü AÏ shay luh mayd-SEHⁿ', ['porte', 'noyau'], FCVDR),
  sent(1012, 'Je veux que nous soyons prêts à huit heures.', 'I want us to be ready at eight.', '/ʒə vø kə nu swa.jɔ̃ pʁɛ a ɥi.tœʁ/', 'zhuh veu kuh noo swa-YOHⁿ preh a wee-TUHR', ['porte', 'noyau', 'nous']),
  sent(1013, 'Après que, le verbe prend une autre forme : le subjonctif.', 'After que, the verb takes another shape: the subjunctive.', '/a.pʁɛ kə lə vɛʁb pʁɑ̃ y.no.tʁə fɔʁm lə syb.ʒɔ̃k.tif/', 'a-preh KUH luh vehrb prahⁿ ü-noh-truh FORM luh süb-zhohⁿk-TEEF', ['rule', 'porte'], ['flashcard'],
    rule('Qu’est-ce qui annonce un subjonctif dans une phrase ?', 'Ex : Il faut que je parte. Le mot que ouvre la porte.')),
  sent(1014, 'Le subjonctif arrive presque toujours après que.', 'The subjunctive almost always arrives after que.', '/lə syb.ʒɔ̃k.tif a.ʁiv pʁɛs.kə tu.ʒuʁ a.pʁɛ kə/', 'luh süb-zhohⁿk-TEEF a-reev prehs-kuh too-ZHOOR a-preh KUH', ['rule', 'porte'], ['flashcard'],
    rule('Où trouves-tu un subjonctif dans une phrase française ?', 'Ex : Bien que ce soit difficile, elle continue.')),
];

/* ── ACT 2 · ILS MOINS -ENT ─────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  chunk(1015, 'ils parlent', 'they speak', '/il paʁl/', 'eel PARL', ['ils', 'er']),
  chunk(1016, 'que je parle', 'that I speak', '/kə ʒə paʁl/', 'kuh zhuh PARL', ['subj', 'er']),
  chunk(1017, 'ils finissent', 'they finish', '/il fi.nis/', 'eel fee-NEESS', ['ils', 'ir']),
  chunk(1018, 'que je finisse', 'that I finish', '/kə ʒə fi.nis/', 'kuh zhuh fee-NEESS', ['subj', 'ir']),
  chunk(1019, 'ils vendent', 'they sell', '/il vɑ̃d/', 'eel VAHⁿD', ['ils', 're']),
  chunk(1020, 'que je vende', 'that I sell', '/kə ʒə vɑ̃d/', 'kuh zhuh VAHⁿD', ['subj', 're']),
  chunk(1021, 'ils partent', 'they leave', '/il paʁt/', 'eel PART', ['ils', 'ir']),
  chunk(1022, 'que je parte', 'that I leave', '/kə ʒə paʁt/', 'kuh zhuh PART', ['subj', 'ir']),
  chunk(1023, 'ils écrivent', 'they write', '/il.ze.kʁiv/', 'eel-zay-KREEV', ['ils', 're']),
  chunk(1024, 'que j’écrive', 'that I write', '/kə ʒe.kʁiv/', 'kuh zhay-KREEV', ['subj', 're']),
  chunk(1025, 'ils dorment', 'they sleep', '/il dɔʁm/', 'eel DORM', ['ils', 'ir']),
  chunk(1026, 'que je dorme', 'that I sleep', '/kə ʒə dɔʁm/', 'kuh zhuh DORM', ['subj', 'ir']),
  sent(1027, "Il faut que je vende ma voiture avant l'été.", 'I have to sell my car before the summer.', '/il fo kə ʒə vɑ̃d ma vwa.tyʁ a.vɑ̃ le.te/', 'eel foh kuh zhuh VAHⁿD ma vwa-TÜR a-vahⁿ lay-TAY', ['regle', 're'], FCVDR,
    gap('Il faut que je ___ (vendre) ma voiture avant l’été.', 'ils vendent, moins -ent, plus -e : que je vende.')),
  sent(1028, 'Je veux que tu répondes à ce message.', 'I want you to answer this message.', '/ʒə vø kə ty ʁe.pɔ̃d a sə me.saʒ/', 'zhuh veu kuh tü ray-POHⁿD a suh may-SAZH', ['regle', 're']),
  sent(1029, 'Bien que nous attendions depuis une heure, personne ne se plaint.', 'Although we have been waiting for an hour, nobody is complaining.', '/bjɛ̃ kə nu.za.tɑ̃.djɔ̃ də.pɥi y.nœʁ pɛʁ.sɔn nə sə plɛ̃/', 'byehⁿ kuh noo-za-tahⁿ-DYOHⁿ duh-pwee ü-NUHR pehr-son nuh suh PLEHⁿ', ['regle', 'nous']),
  sent(1030, 'Il faut que vous choisissiez une date.', 'You have to choose a date.', '/il fo kə vu ʃwa.zi.sje yn dat/', 'eel foh kuh voo shwa-zee-SYAY ün DAT', ['regle', 'vous', 'ir']),
  sent(1031, 'Avant que je sorte, je vérifie toujours les fenêtres.', 'Before I go out, I always check the windows.', '/a.vɑ̃ kə ʒə sɔʁt ʒə ve.ʁi.fi tu.ʒuʁ le fə.nɛtʁ/', 'a-vahⁿ kuh zhuh SORT zhuh vay-ree-FEE too-zhoor lay fuh-NEHTR', ['regle', 'ir']),
  sent(1032, 'Prends la forme de ils, enlève -ent, ajoute -e, -es, -e, -ions, -iez, -ent.', 'Take the ils form, cut -ent, add -e, -es, -e, -ions, -iez, -ent.', '/pʁɑ̃ la fɔʁm də il ɑ̃.lɛv ɑ̃ a.ʒut ə ə ə jɔ̃ je ɑ̃/', 'prahⁿ la form duh EEL ahⁿ-LEHV ahⁿ a-ZHOOT', ['rule', 'regle'], ['flashcard'],
    rule('Comment construis-tu un subjonctif régulier ?', 'Ex : ils finissent, moins -ent, plus -e : que je finisse.')),
  sent(1033, 'Je suis content qu’elle réponde si vite.', 'I am glad she is answering so fast.', '/ʒə sɥi kɔ̃.tɑ̃ kɛl ʁe.pɔ̃d si vit/', 'zhuh swee kohⁿ-TAHⁿ kehl ray-POHⁿD see VEET', ['regle', 're']),
  sent(1034, 'Il faut que nous finissions avant midi.', 'We have to finish before noon.', '/il fo kə nu fi.ni.sjɔ̃ a.vɑ̃ mi.di/', 'eel foh kuh noo fee-nee-SYOHⁿ a-vahⁿ mee-DEE', ['regle', 'nous', 'ir'], FCVDR),
];

/* ── ACT 3 · LE SOSIE ───────────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  chunk(1035, 'que tu regardes', 'that you watch', '/kə ty ʁə.ɡaʁd/', 'kuh tü ruh-GARD', ['sosie', 'er']),
  chunk(1036, 'que nous regardions', 'that we watch', '/kə nu ʁə.ɡaʁ.djɔ̃/', 'kuh noo ruh-gar-DYOHⁿ', ['sosie', 'nous']),
  chunk(1037, 'que vous regardiez', 'that you watch', '/kə vu ʁə.ɡaʁ.dje/', 'kuh voo ruh-gar-DYAY', ['sosie', 'vous']),
  sent(1038, 'Il faut que tu regardes ce film.', 'You have to watch this film.', '/il fo kə ty ʁə.ɡaʁd sə film/', 'eel foh kuh tü ruh-GARD suh FEELM', ['sosie', 'er'], FCVDR),
  sent(1039, 'Je veux que tu travailles moins le week-end.', 'I want you to work less at the weekend.', '/ʒə vø kə ty tʁa.vaj mwɛ̃ lə wi.kɛnd/', 'zhuh veu kuh tü tra-VAÏ mwehⁿ luh wee-KEND', ['sosie', 'er']),
  sent(1040, 'Bien qu’elle aime son travail, elle cherche autre chose.', 'Although she likes her job, she is looking for something else.', '/bjɛ̃ kɛ.lɛm sɔ̃ tʁa.vaj ɛl ʃɛʁʃ o.tʁə ʃoz/', 'byehⁿ keh-LEHM sohⁿ tra-VAÏ ehl shehrsh oh-truh SHOHZ', ['sosie', 'er']),
  sent(1041, 'Il faut que nous travaillions ensemble sur ce dossier.', 'We have to work together on this file.', '/il fo kə nu tʁa.va.jjɔ̃ ɑ̃.sɑ̃bl syʁ sə do.sje/', 'eel foh kuh noo tra-va-YOHⁿ ahⁿ-sahⁿbl sür suh doh-SYAY', ['sosie', 'nous']),
  sent(1042, 'Je suis content que vous arriviez si tôt.', 'I am glad you are arriving so early.', '/ʒə sɥi kɔ̃.tɑ̃ kə vu.za.ʁi.vje si to/', 'zhuh swee kohⁿ-TAHⁿ kuh voo-za-ree-VYAY see TOH', ['sosie', 'vous']),
  sent(1043, 'Avant que tu commences, lis bien la consigne.', 'Before you start, read the instructions properly.', '/a.vɑ̃ kə ty kɔ.mɑ̃s li bjɛ̃ la kɔ̃.siɲ/', 'a-vahⁿ kuh tü ko-MAHⁿSS lee byehⁿ la kohⁿ-SEEÑ', ['sosie', 'er']),
  sent(1044, 'Avec les verbes en -er, quatre formes sur six ne changent pas.', 'With -er verbs, four forms out of six do not change.', '/a.vɛk le vɛʁb ɑ̃ ø.ɛʁ katʁ fɔʁm syʁ sis nə ʃɑ̃ʒ pa/', 'a-vehk lay VEHRB ahⁿ euh-EHR katr form sür SEESS nuh shahⁿzh PA', ['rule', 'sosie'], ['flashcard'],
    rule('Pourquoi n’entends-tu pas le subjonctif des verbes en -er ?', 'Ex : tu parles et que tu parles se disent pareil.')),
  sent(1045, 'Il faut que je cherche mes clés.', 'I have to look for my keys.', '/il fo kə ʒə ʃɛʁʃ me kle/', 'eel foh kuh zhuh SHEHRSH may KLAY', ['sosie', 'er'], FCVDR),
  sent(1046, 'Je veux que nous parlions calmement.', 'I want us to talk calmly.', '/ʒə vø kə nu paʁ.ljɔ̃ kal.mə.mɑ̃/', 'zhuh veu kuh noo par-LYOHⁿ kal-muh-MAHⁿ', ['sosie', 'nous']),
  sent(1047, 'Bien que vous habitiez loin, vous arrivez toujours à l’heure.', 'Although you live far away, you always arrive on time.', '/bjɛ̃ kə vu.za.bi.tje lwɛ̃ vu.za.ʁi.ve tu.ʒuʁ a lœʁ/', 'byehⁿ kuh voo-za-bee-TYAY lwehⁿ voo-za-ree-vay too-zhoor a LUHR', ['sosie', 'vous']),
  sent(1048, 'Il faut qu’elle explique sa décision à l’équipe.', 'She has to explain her decision to the team.', '/il fo kɛ.lɛks.plik sa de.si.zjɔ̃ a le.kip/', 'eel foh keh-leks-PLEEK sa day-see-zyohⁿ a lay-KEEP', ['sosie', 'er']),
  sent(1049, 'Je suis contente que tu restes dîner.', 'I am glad you are staying for dinner.', '/ʒə sɥi kɔ̃.tɑ̃t kə ty ʁɛst di.ne/', 'zhuh swee kohⁿ-TAHⁿT kuh tü rehst dee-NAY', ['sosie', 'er']),
];

/* ── ACT 4 · -IR ET -RE : LE RADICAL SE MONTRE ──────────────────────────── */

export const ACT4_ROWS: Row[] = [
  chunk(1050, 'ils choisissent', 'they choose', '/il ʃwa.zis/', 'eel shwa-ZEESS', ['ils', 'ir']),
  chunk(1051, 'que je choisisse', 'that I choose', '/kə ʒə ʃwa.zis/', 'kuh zhuh shwa-ZEESS', ['subj', 'ir']),
  chunk(1052, 'ils attendent', 'they wait', '/il.za.tɑ̃d/', 'eel-za-TAHⁿD', ['ils', 're']),
  chunk(1053, 'que j’attende', 'that I wait', '/kə ʒa.tɑ̃d/', 'kuh zha-TAHⁿD', ['subj', 're']),
  chunk(1054, 'ils lisent', 'they read', '/il liz/', 'eel LEEZ', ['ils', 're']),
  chunk(1055, 'que je lise', 'that I read', '/kə ʒə liz/', 'kuh zhuh LEEZ', ['subj', 're']),
  chunk(1056, 'ils disent', 'they say', '/il diz/', 'eel DEEZ', ['ils', 're']),
  chunk(1057, 'que je dise', 'that I say', '/kə ʒə diz/', 'kuh zhuh DEEZ', ['subj', 're']),
  chunk(1058, 'ils connaissent', 'they know', '/il kɔ.nɛs/', 'eel ko-NESS', ['ils', 're']),
  chunk(1059, 'que je connaisse', 'that I know', '/kə ʒə kɔ.nɛs/', 'kuh zhuh ko-NESS', ['subj', 're']),
  chunk(1060, 'ils mettent', 'they put', '/il mɛt/', 'eel MET', ['ils', 're']),
  chunk(1061, 'que je mette', 'that I put', '/kə ʒə mɛt/', 'kuh zhuh MET', ['subj', 're']),
  sent(1062, 'Il faut que tu choisisses entre les deux offres.', 'You have to choose between the two offers.', '/il fo kə ty ʃwa.zis ɑ̃tʁə le dø.zɔfʁ/', 'eel foh kuh tü shwa-ZEESS ahⁿ-truh lay deu-ZOFR', ['radical', 'ir'], FCVDR),
  sent(1063, 'Je veux que vous attendiez dans le couloir.', 'I want you to wait in the corridor.', '/ʒə vø kə vu.za.tɑ̃.dje dɑ̃ lə ku.lwaʁ/', 'zhuh veu kuh voo-za-tahⁿ-DYAY dahⁿ luh koo-LWAR', ['radical', 'vous', 're'], FCVDR),
  sent(1064, 'Bien qu’il lise beaucoup, il écrit peu.', 'Although he reads a lot, he writes little.', '/bjɛ̃ kil liz bo.ku i.le.kʁi pø/', 'byehⁿ keel LEEZ boh-KOO ee-lay-kree PEU', ['radical', 're']),
  sent(1065, 'Avant que tu partes, ferme la fenêtre.', 'Before you go, shut the window.', '/a.vɑ̃ kə ty paʁt fɛʁm la fə.nɛtʁ/', 'a-vahⁿ kuh tü PART fehrm la fuh-NEHTR', ['radical', 'ir'], FCVDR),
  sent(1066, 'Il faut que je mette mon manteau.', 'I have to put my coat on.', '/il fo kə ʒə mɛt mɔ̃ mɑ̃.to/', 'eel foh kuh zhuh MET mohⁿ mahⁿ-TOH', ['radical', 're'], FCVDR),
  sent(1067, 'Je suis content que tu connaisses déjà la ville.', 'I am glad you already know the town.', '/ʒə sɥi kɔ̃.tɑ̃ kə ty kɔ.nɛs de.ʒa la vil/', 'zhuh swee kohⁿ-TAHⁿ kuh tü ko-NESS day-zha la VEEL', ['radical', 're']),
  sent(1068, 'Il faut que nous répondions avant vendredi.', 'We have to answer before Friday.', '/il fo kə nu ʁe.pɔ̃.djɔ̃ a.vɑ̃ vɑ̃.dʁə.di/', 'eel foh kuh noo ray-pohⁿ-DYOHⁿ a-vahⁿ vahⁿ-druh-DEE', ['radical', 'nous', 're'], FCVDR),
  sent(1069, 'Le radical du subjonctif se voit dans la forme ils, pas dans l’infinitif.', 'The subjunctive stem shows in the ils form, not in the infinitive.', '/lə ʁa.di.kal dy syb.ʒɔ̃k.tif sə vwa dɑ̃ la fɔʁm il pa dɑ̃ lɛ̃.fi.ni.tif/', 'luh ra-dee-KAL dü süb-zhohⁿk-TEEF suh vwa dahⁿ la form EEL pa dahⁿ lehⁿ-fee-nee-TEEF', ['rule', 'radical'], ['flashcard'],
    rule('Où regardes-tu pour trouver le radical du subjonctif ?', 'Ex : ils connaissent donne que je connaisse, pas connaître.')),
];

/* ── ACT 5 · LA BOTTE ───────────────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  chunk(1070, 'que je boive', 'that I drink', '/kə ʒə bwav/', 'kuh zhuh BWAHV', ['botte', 'boire']),
  chunk(1071, 'que nous buvions', 'that we drink', '/kə nu by.vjɔ̃/', 'kuh noo bü-VYOHⁿ', ['botte', 'boire', 'nous']),
  chunk(1072, 'que je prenne', 'that I take', '/kə ʒə pʁɛn/', 'kuh zhuh PRENN', ['botte', 'prendre']),
  chunk(1073, 'que nous prenions', 'that we take', '/kə nu pʁə.njɔ̃/', 'kuh noo pruh-NYOHⁿ', ['botte', 'prendre', 'nous']),
  chunk(1074, 'que je vienne', 'that I come', '/kə ʒə vjɛn/', 'kuh zhuh VYENN', ['botte', 'venir']),
  chunk(1075, 'que nous venions', 'that we come', '/kə nu və.njɔ̃/', 'kuh noo vuh-NYOHⁿ', ['botte', 'venir', 'nous']),
  chunk(1076, 'que je voie', 'that I see', '/kə ʒə vwa/', 'kuh zhuh VWA', ['botte', 'voir']),
  chunk(1077, 'que nous voyions', 'that we see', '/kə nu vwa.jjɔ̃/', 'kuh noo vwa-YOHⁿ', ['botte', 'voir', 'nous']),
  chunk(1078, 'que je doive', 'that I must', '/kə ʒə dwav/', 'kuh zhuh DWAHV', ['botte', 'devoir']),
  chunk(1079, 'que nous devions', 'that we must', '/kə nu də.vjɔ̃/', 'kuh noo duh-VYOHⁿ', ['botte', 'devoir', 'nous']),
  chunk(1080, 'que je reçoive', 'that I receive', '/kə ʒə ʁə.swav/', 'kuh zhuh ruh-SWAHV', ['botte', 'recevoir']),
  chunk(1081, 'que nous recevions', 'that we receive', '/kə nu ʁə.sə.vjɔ̃/', 'kuh noo ruh-suh-VYOHⁿ', ['botte', 'recevoir', 'nous']),
  chunk(1082, 'que je meure', 'that I die', '/kə ʒə mœʁ/', 'kuh zhuh MUHR', ['botte', 'mourir']),
  chunk(1083, 'que nous mourions', 'that we die', '/kə nu mu.ʁjɔ̃/', 'kuh noo moo-RYOHⁿ', ['botte', 'mourir', 'nous']),
  chunk(1084, 'que je tienne', 'that I hold', '/kə ʒə tjɛn/', 'kuh zhuh TYENN', ['botte', 'tenir']),
  chunk(1085, 'que nous tenions', 'that we hold', '/kə nu tə.njɔ̃/', 'kuh noo tuh-NYOHⁿ', ['botte', 'tenir', 'nous']),
  sent(1086, 'Il faut que tu boives plus d’eau.', 'You have to drink more water.', '/il fo kə ty bwav ply do/', 'eel foh kuh tü BWAHV plü DOH', ['botte', 'boire'], FCVDR),
  sent(1087, 'Je veux que vous preniez le train de huit heures.', 'I want you to take the eight o’clock train.', '/ʒə vø kə vu pʁə.nje lə tʁɛ̃ də ɥi.tœʁ/', 'zhuh veu kuh voo pruh-NYAY luh trehⁿ duh wee-TUHR', ['botte', 'prendre', 'vous']),
  sent(1088, 'Bien qu’elle vienne rarement, tout le monde la connaît.', 'Although she rarely comes, everyone knows her.', '/bjɛ̃ kɛl vjɛn ʁaʁ.mɑ̃ tu lə mɔ̃d la kɔ.nɛ/', 'byehⁿ kehl VYENN rar-mahⁿ too luh mohⁿd la ko-NEH', ['botte', 'venir'], FCVDR),
  sent(1089, 'Huit verbes changent de radical entre je et nous : c’est la botte.', 'Eight verbs change stem between je and nous: that is the boot.', '/ɥi vɛʁb ʃɑ̃ʒ də ʁa.di.kal ɑ̃tʁə ʒə e nu sɛ la bɔt/', 'wee VEHRB shahⁿzh duh ra-dee-KAL ahⁿ-truh zhuh ay NOO seh la BOT', ['rule', 'botte'], ['flashcard'],
    rule('Quels verbes ont deux radicaux au subjonctif ?', 'Ex : que je boive mais que nous buvions.')),
];

/* ── ACT 6 · NOUS ET VOUS ───────────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  chunk(1090, 'que nous parlions', 'that we speak', '/kə nu paʁ.ljɔ̃/', 'kuh noo par-LYOHⁿ', ['nous', 'er']),
  chunk(1091, 'que vous parliez', 'that you speak', '/kə vu paʁ.lje/', 'kuh voo par-LYAY', ['vous', 'er']),
  chunk(1092, 'que nous finissions', 'that we finish', '/kə nu fi.ni.sjɔ̃/', 'kuh noo fee-nee-SYOHⁿ', ['nous', 'ir']),
  chunk(1093, 'que vous finissiez', 'that you finish', '/kə vu fi.ni.sje/', 'kuh voo fee-nee-SYAY', ['vous', 'ir']),
  chunk(1094, 'que nous étudiions', 'that we study', '/kə nu.ze.ty.djjɔ̃/', 'kuh noo-zay-tü-DYOHⁿ', ['nous', 'double-i']),
  chunk(1095, 'que vous étudiiez', 'that you study', '/kə vu.ze.ty.dje/', 'kuh voo-zay-tü-DYAY', ['vous', 'double-i']),
  chunk(1096, 'que nous croyions', 'that we believe', '/kə nu kʁwa.jjɔ̃/', 'kuh noo krwa-YOHⁿ', ['nous', 'double-i']),
  chunk(1097, 'que vous croyiez', 'that you believe', '/kə vu kʁwa.je/', 'kuh voo krwa-YAY', ['vous', 'double-i']),
  chunk(1098, 'que nous riions', 'that we laugh', '/kə nu ʁi.jɔ̃/', 'kuh noo ree-YOHⁿ', ['nous', 'double-i']),
  sent(1099, 'Il faut que nous travaillions plus tôt le matin.', 'We have to work earlier in the morning.', '/il fo kə nu tʁa.va.jjɔ̃ ply to lə ma.tɛ̃/', 'eel foh kuh noo tra-va-YOHⁿ plü toh luh ma-TEHⁿ', ['nous', 'double-i'], FCVDR),
  sent(1100, 'Je veux que vous payiez avant de partir.', 'I want you to pay before leaving.', '/ʒə vø kə vu pɛ.je a.vɑ̃ də paʁ.tiʁ/', 'zhuh veu kuh voo peh-YAY a-vahⁿ duh par-TEER', ['vous', 'double-i'], FCVDR),
  sent(1101, 'Bien que nous oubliions souvent son nom, il ne se fâche jamais.', 'Although we often forget his name, he never gets cross.', '/bjɛ̃ kə nu.zu.bli.jɔ̃ su.vɑ̃ sɔ̃ nɔ̃ il nə sə faʃ ʒa.mɛ/', 'byehⁿ kuh noo-zoo-blee-YOHⁿ soo-vahⁿ sohⁿ NOHⁿ eel nuh suh fash zha-MEH', ['nous', 'double-i']),
  sent(1102, 'Avant que vous partiez, signez le registre.', 'Before you go, sign the register.', '/a.vɑ̃ kə vu paʁ.tje si.ɲe lə ʁə.ʒistʁ/', 'a-vahⁿ kuh voo par-TYAY see-ñay luh ruh-ZHEESTR', ['vous', 'ir'], FCVDR),
  sent(1103, 'Nous et vous prennent la forme de l’imparfait : -ions et -iez.', 'Nous and vous take the imparfait shape: -ions and -iez.', '/nu e vu pʁɛn la fɔʁm də lɛ̃.paʁ.fɛ jɔ̃ e je/', 'noo ay VOO prenn la form duh lehⁿ-par-FEH', ['rule', 'nous'], ['flashcard'],
    rule('D’où viennent les formes nous et vous du subjonctif ?', 'Ex : que nous parlions, exactement comme à l’imparfait.')),
  sent(1104, 'Il faut que vous voyiez ce film.', 'You have to see this film.', '/il fo kə vu vwa.je sə film/', 'eel foh kuh voo vwa-YAY suh FEELM', ['vous', 'double-i', 'botte'], FCVDR),
];

/* ── ACT 7 · LE NOYAU DUR : ÊTRE, AVOIR, ALLER, FAIRE ───────────────────── */

export const ACT7_ROWS: Row[] = [
  chunk(1105, 'que je sois', 'that I am', '/kə ʒə swa/', 'kuh zhuh SWA', ['noyau', 'etre']),
  chunk(1106, 'que nous soyons', 'that we are', '/kə nu swa.jɔ̃/', 'kuh noo swa-YOHⁿ', ['noyau', 'etre', 'nous']),
  chunk(1107, 'qu’ils soient', 'that they are', '/kil swa/', 'keel SWA', ['noyau', 'etre']),
  chunk(1108, 'que j’aie', 'that I have', '/kə ʒɛ/', 'kuh ZHEH', ['noyau', 'avoir']),
  chunk(1109, 'que nous ayons', 'that we have', '/kə nu.za.jɔ̃/', 'kuh noo-za-YOHⁿ', ['noyau', 'avoir', 'nous']),
  chunk(1110, 'qu’ils aient', 'that they have', '/kil.zɛ/', 'keel-ZEH', ['noyau', 'avoir']),
  chunk(1111, 'que j’aille', 'that I go', '/kə ʒaj/', 'kuh ZHAÏ', ['noyau', 'aller']),
  chunk(1112, 'que nous allions', 'that we go', '/kə nu.za.ljɔ̃/', 'kuh noo-za-LYOHⁿ', ['noyau', 'aller', 'nous']),
  chunk(1113, 'qu’ils aillent', 'that they go', '/kil.zaj/', 'keel-ZAÏ', ['noyau', 'aller']),
  chunk(1114, 'que je fasse', 'that I do', '/kə ʒə fas/', 'kuh zhuh FASS', ['noyau', 'faire']),
  chunk(1115, 'que nous fassions', 'that we do', '/kə nu fa.sjɔ̃/', 'kuh noo fa-SYOHⁿ', ['noyau', 'faire', 'nous']),
  chunk(1116, 'qu’ils fassent', 'that they do', '/kil fas/', 'keel FASS', ['noyau', 'faire']),
  sent(1117, 'Il faut que tu sois à l’heure demain.', 'You have to be on time tomorrow.', '/il fo kə ty swa a lœʁ də.mɛ̃/', 'eel foh kuh tü SWA a luhr duh-MEHⁿ', ['noyau', 'etre'], FCVDR),
  sent(1118, 'Je veux que tu aies une réponse avant ce soir.', 'I want you to have an answer before this evening.', '/ʒə vø kə ty ɛ yn ʁe.pɔ̃s a.vɑ̃ sə swaʁ/', 'zhuh veu kuh tü EH ün ray-POHⁿSS a-vahⁿ suh SWAR', ['noyau', 'avoir']),
  sent(1119, 'Bien qu’il fasse froid, les terrasses sont pleines.', 'Although it is cold, the terraces are full.', '/bjɛ̃ kil fas fʁwa le tɛ.ʁas sɔ̃ plɛn/', 'byehⁿ keel FASS FRWA lay teh-rass sohⁿ PLENN', ['noyau', 'faire'], FCVDR),
  sent(1120, 'Avant que nous allions au marché, fais la liste.', 'Before we go to the market, make the list.', '/a.vɑ̃ kə nu.za.ljɔ̃ o maʁ.ʃe fɛ la list/', 'a-vahⁿ kuh noo-za-LYOHⁿ oh mar-SHAY feh la LEEST', ['noyau', 'aller', 'nous']),
  sent(1121, 'Je suis content que vous soyez là.', 'I am glad you are here.', '/ʒə sɥi kɔ̃.tɑ̃ kə vu swa.je la/', 'zhuh swee kohⁿ-TAHⁿ kuh voo swa-YAY LA', ['noyau', 'etre', 'vous']),
  sent(1122, 'Il faut qu’elle aille chercher les enfants.', 'She has to go and pick up the children.', '/il fo kɛ.laj ʃɛʁ.ʃe le.zɑ̃.fɑ̃/', 'eel foh keh-LAÏ shehr-shay lay-zahⁿ-FAHⁿ', ['noyau', 'aller']),
  sent(1123, 'Je veux que nous fassions le point ensemble.', 'I want us to take stock together.', '/ʒə vø kə nu fa.sjɔ̃ lə pwɛ̃ ɑ̃.sɑ̃bl/', 'zhuh veu kuh noo fa-SYOHⁿ luh pwehⁿ ahⁿ-SAHⁿBL', ['noyau', 'faire', 'nous']),
  sent(1124, 'Être, avoir, aller et faire s’apprennent en entier.', 'Être, avoir, aller and faire are learned whole.', '/ɛtʁ a.vwaʁ a.le e fɛʁ sa.pʁɛn ɑ̃.nɑ̃.tje/', 'ehtr a-VWAR a-LAY ay FEHR sa-PRENN ahⁿ-nahⁿ-TYAY', ['rule', 'noyau'], ['flashcard'],
    rule('Quels quatre verbes ne suivent aucune règle au subjonctif ?', 'Ex : que je sois, que j’aie, que j’aille, que je fasse.')),
];

/* ── ACT 8 · LE NOYAU DUR : POUVOIR, SAVOIR, VOULOIR, VALOIR ────────────── */

export const ACT8_ROWS: Row[] = [
  chunk(1125, 'que je puisse', 'that I can', '/kə ʒə pɥis/', 'kuh zhuh PWEESS', ['noyau', 'pouvoir']),
  chunk(1126, 'que nous puissions', 'that we can', '/kə nu pɥi.sjɔ̃/', 'kuh noo pwee-SYOHⁿ', ['noyau', 'pouvoir', 'nous']),
  chunk(1127, 'qu’ils puissent', 'that they can', '/kil pɥis/', 'keel PWEESS', ['noyau', 'pouvoir']),
  chunk(1128, 'que je sache', 'that I know', '/kə ʒə saʃ/', 'kuh zhuh SASH', ['noyau', 'savoir']),
  chunk(1129, 'que nous sachions', 'that we know', '/kə nu sa.ʃjɔ̃/', 'kuh noo sa-SHYOHⁿ', ['noyau', 'savoir', 'nous']),
  chunk(1130, 'qu’ils sachent', 'that they know', '/kil saʃ/', 'keel SASH', ['noyau', 'savoir']),
  chunk(1131, 'que je veuille', 'that I want', '/kə ʒə vœj/', 'kuh zhuh VEUÏ', ['noyau', 'vouloir']),
  chunk(1132, 'que nous voulions', 'that we want', '/kə nu vu.ljɔ̃/', 'kuh noo voo-LYOHⁿ', ['noyau', 'vouloir', 'nous']),
  chunk(1133, 'qu’ils veuillent', 'that they want', '/kil vœj/', 'keel VEUÏ', ['noyau', 'vouloir']),
  chunk(1134, 'qu’il vaille', 'that it is worth', '/kil vaj/', 'keel VAÏ', ['noyau', 'valoir']),
  chunk(1135, 'que ça vaille', 'that it is worth it', '/kə sa vaj/', 'kuh sa VAÏ', ['noyau', 'valoir']),
  sent(1136, 'Il faut que tu saches la vérité.', 'You have to know the truth.', '/il fo kə ty saʃ la ve.ʁi.te/', 'eel foh kuh tü SASH la vay-ree-TAY', ['noyau', 'savoir'], FCVDR),
  sent(1137, 'Je suis content que tu puisses venir samedi.', 'I am glad you can come on Saturday.', '/ʒə sɥi kɔ̃.tɑ̃ kə ty pɥis və.niʁ sam.di/', 'zhuh swee kohⁿ-TAHⁿ kuh tü PWEESS vuh-neer sam-DEE', ['noyau', 'pouvoir'], FCVDR),
  sent(1138, 'Bien qu’il veuille partir, il reste encore un peu.', 'Although he wants to leave, he is staying a little longer.', '/bjɛ̃ kil vœj paʁ.tiʁ il ʁɛst ɑ̃.kɔ.ʁœ̃ pø/', 'byehⁿ keel VEUÏ par-TEER eel rehst ahⁿ-ko-ruhⁿ PEU', ['noyau', 'vouloir']),
  sent(1139, 'Avant que nous puissions répondre, il faut lire le dossier.', 'Before we can answer, we have to read the file.', '/a.vɑ̃ kə nu pɥi.sjɔ̃ ʁe.pɔ̃dʁ il fo liʁ lə do.sje/', 'a-vahⁿ kuh noo pwee-SYOHⁿ ray-POHⁿDR eel foh leer luh doh-SYAY', ['noyau', 'pouvoir', 'nous']),
  sent(1140, 'Il faut que vous sachiez où se trouve la sortie.', 'You have to know where the exit is.', '/il fo kə vu sa.ʃje u sə tʁuv la sɔʁ.ti/', 'eel foh kuh voo sa-SHYAY oo suh troov la sor-TEE', ['noyau', 'savoir', 'vous']),
  sent(1141, 'Bien que ce tableau vaille cher, personne ne l’achète.', 'Although this painting is worth a lot, nobody is buying it.', '/bjɛ̃ kə sə ta.blo vaj ʃɛʁ pɛʁ.sɔn nə la.ʃɛt/', 'byehⁿ kuh suh ta-BLOH vaï SHEHR pehr-son nuh la-SHEHT', ['noyau', 'valoir']),
  sent(1142, 'Je veux que nous puissions parler calmement.', 'I want us to be able to talk calmly.', '/ʒə vø kə nu pɥi.sjɔ̃ paʁ.le kal.mə.mɑ̃/', 'zhuh veu kuh noo pwee-SYOHⁿ par-lay kal-muh-MAHⁿ', ['noyau', 'pouvoir', 'nous']),
  sent(1143, 'Pouvoir, savoir, vouloir et valoir : quatre radicaux à apprendre.', 'Pouvoir, savoir, vouloir and valoir: four stems to learn.', '/pu.vwaʁ sa.vwaʁ vu.lwaʁ e va.lwaʁ katʁ ʁa.di.ko a a.pʁɑ̃dʁ/', 'poo-VWAR sa-VWAR voo-LWAR ay va-LWAR katr ra-dee-KOH a a-PRAHⁿDR', ['rule', 'noyau'], ['flashcard'],
    rule('Quels sont les quatre derniers radicaux irréguliers ?', 'Ex : que je puisse, que je sache, que je veuille, qu’il vaille.')),
  sent(1144, 'Il faut qu’elle veuille bien nous aider.', 'She has to be willing to help us.', '/il fo kɛl vœj bjɛ̃ nu.ze.de/', 'eel foh kehl VEUÏ byehⁿ noo-zay-DAY', ['noyau', 'vouloir']),
];

/* ── ACT 9 · LES IMPERSONNELS ───────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  chunk(1145, 'qu’il faille', 'that it is necessary', '/kil faj/', 'keel FAÏ', ['impersonnel', 'falloir']),
  chunk(1146, 'qu’il pleuve', 'that it rains', '/kil plœv/', 'keel PLEUV', ['impersonnel', 'pleuvoir']),
  chunk(1147, 'il faut que', 'you have to, it is necessary that', '/il fo kə/', 'eel foh KUH', ['porteur']),
  chunk(1148, 'bien que', 'although', '/bjɛ̃ kə/', 'byehⁿ KUH', ['porteur']),
  chunk(1149, 'avant que', 'before', '/a.vɑ̃ kə/', 'a-vahⁿ KUH', ['porteur']),
  chunk(1150, 'je veux que', 'I want that', '/ʒə vø kə/', 'zhuh veu KUH', ['porteur']),
  chunk(1151, 'je suis content que', 'I am glad that', '/ʒə sɥi kɔ̃.tɑ̃ kə/', 'zhuh swee kohⁿ-tahⁿ KUH', ['porteur']),
  sent(1152, 'Bien qu’il faille attendre, personne ne se plaint.', 'Although you have to wait, nobody is complaining.', '/bjɛ̃ kil faj a.tɑ̃dʁ pɛʁ.sɔn nə sə plɛ̃/', 'byehⁿ keel FAÏ a-TAHⁿDR pehr-son nuh suh PLEHⁿ', ['impersonnel', 'falloir'], FCVDR),
  sent(1153, 'Je suis content qu’il pleuve enfin sur les champs.', 'I am glad it is finally raining on the fields.', '/ʒə sɥi kɔ̃.tɑ̃ kil plœv ɑ̃.fɛ̃ syʁ le ʃɑ̃/', 'zhuh swee kohⁿ-TAHⁿ keel PLEUV ahⁿ-fehⁿ sür lay SHAHⁿ', ['impersonnel', 'pleuvoir']),
  sent(1154, 'Avant qu’il pleuve, rentre le linge.', 'Before it rains, bring the washing in.', '/a.vɑ̃ kil plœv ʁɑ̃tʁ lə lɛ̃ʒ/', 'a-vahⁿ keel PLEUV rahⁿtr luh LEHⁿZH', ['impersonnel', 'pleuvoir'], FCVDR),
  sent(1155, 'Il faut qu’il fasse beau demain pour la fête.', 'The weather has to be good tomorrow for the party.', '/il fo kil fas bo də.mɛ̃ puʁ la fɛt/', 'eel foh keel FASS BOH duh-mehⁿ poor la FEHT', ['impersonnel', 'faire']),
  sent(1156, 'Falloir et pleuvoir n’ont qu’une forme : qu’il faille, qu’il pleuve.', 'Falloir and pleuvoir have one form only: qu’il faille, qu’il pleuve.', '/fa.lwaʁ e plø.vwaʁ nɔ̃ kyn fɔʁm kil faj kil plœv/', 'fa-LWAR ay pleu-VWAR nohⁿ kün FORM keel FAÏ keel PLEUV', ['rule', 'impersonnel'], ['flashcard'],
    rule('Combien de formes ont falloir et pleuvoir au subjonctif ?', 'Ex : Bien qu’il faille attendre. Avant qu’il pleuve.')),
  sent(1157, 'Bien qu’il faille deux heures de route, ça vaut le détour.', 'Although it takes two hours of driving, it is worth the trip.', '/bjɛ̃ kil faj dø.zœʁ də ʁut sa vo lə de.tuʁ/', 'byehⁿ keel FAÏ deu-ZUHR duh ROOT sa voh luh day-TOOR', ['impersonnel', 'falloir']),
];

/* ── ACT 10 · RECONNAÎTRE ───────────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1158, 'Il faut que tu prennes une décision avant lundi.', 'You have to make a decision before Monday.', '/il fo kə ty pʁɛn yn de.si.zjɔ̃ a.vɑ̃ lœ̃.di/', 'eel foh kuh tü PRENN ün day-see-zyohⁿ a-vahⁿ luhⁿ-DEE', ['melange', 'botte'], FCVDR),
  sent(1159, 'Bien que nous soyons en retard, nous prenons le temps d’un café.', 'Although we are late, we are taking time for a coffee.', '/bjɛ̃ kə nu swa.jɔ̃.zɑ̃ ʁə.taʁ nu pʁə.nɔ̃ lə tɑ̃ dœ̃ ka.fe/', 'byehⁿ kuh noo swa-yohⁿ-zahⁿ ruh-TAR noo pruh-nohⁿ luh tahⁿ duhⁿ ka-FAY', ['melange', 'noyau']),
  sent(1160, 'Avant que vous signiez, relisez la dernière page.', 'Before you sign, read the last page again.', '/a.vɑ̃ kə vu si.ɲje ʁə.li.ze la dɛʁ.njɛʁ paʒ/', 'a-vahⁿ kuh voo see-ÑYAY ruh-lee-zay la dehr-nyehr PAZH', ['melange', 'vous']),
  sent(1161, 'Je suis content que tout le monde puisse venir.', 'I am glad everybody can come.', '/ʒə sɥi kɔ̃.tɑ̃ kə tu lə mɔ̃d pɥis və.niʁ/', 'zhuh swee kohⁿ-TAHⁿ kuh too luh mohⁿd PWEESS vuh-NEER', ['melange', 'noyau']),
  sent(1162, 'Il faut que nous allions plus vite.', 'We have to go faster.', '/il fo kə nu.za.ljɔ̃ ply vit/', 'eel foh kuh noo-za-LYOHⁿ plü VEET', ['melange', 'noyau', 'nous']),
  sent(1163, 'Je veux que vous fassiez attention à la marche.', 'I want you to mind the step.', '/ʒə vø kə vu fa.sje a.tɑ̃.sjɔ̃ a la maʁʃ/', 'zhuh veu kuh voo fa-SYAY a-tahⁿ-syohⁿ a la MARSH', ['melange', 'noyau', 'vous']),
  sent(1164, 'Bien que je doive partir tôt, je reste pour le dessert.', 'Although I have to leave early, I am staying for dessert.', '/bjɛ̃ kə ʒə dwav paʁ.tiʁ to ʒə ʁɛst puʁ lə de.sɛʁ/', 'byehⁿ kuh zhuh DWAHV par-teer TOH zhuh rehst poor luh day-SEHR', ['melange', 'botte']),
  sent(1165, 'Avant que le magasin ferme, passe prendre du pain.', 'Before the shop shuts, go and get some bread.', '/a.vɑ̃ kə lə ma.ɡa.zɛ̃ fɛʁm pas pʁɑ̃dʁ dy pɛ̃/', 'a-vahⁿ kuh luh ma-ga-zehⁿ FEHRM pass prahⁿdr dü PEHⁿ', ['melange', 'sosie'], FCVDR),
  sent(1166, 'Il faut que tu écrives ton nom en haut de la page.', 'You have to write your name at the top of the page.', '/il fo kə ty e.kʁiv tɔ̃ nɔ̃ ɑ̃ o də la paʒ/', 'eel foh kuh tü ay-KREEV tohⁿ nohⁿ ahⁿ oh duh la PAZH', ['melange', 'radical']),
  sent(1167, 'Je suis contente que vous sachiez déjà conduire.', 'I am glad you already know how to drive.', '/ʒə sɥi kɔ̃.tɑ̃t kə vu sa.ʃje de.ʒa kɔ̃.dɥiʁ/', 'zhuh swee kohⁿ-TAHⁿT kuh voo sa-SHYAY day-zha kohⁿ-DWEER', ['melange', 'noyau', 'vous']),
  sent(1168, 'Bien qu’ils viennent de loin, ils arrivent toujours les premiers.', 'Although they come from far away, they always arrive first.', '/bjɛ̃ kil vjɛn də lwɛ̃ il.za.ʁiv tu.ʒuʁ le pʁə.mje/', 'byehⁿ keel VYENN duh LWEHⁿ eel-za-reev too-zhoor lay pruh-MYAY', ['melange', 'botte']),
  sent(1169, 'Avant que nous oubliions, écrivons la date.', 'Before we forget, let us write the date down.', '/a.vɑ̃ kə nu.zu.bli.jɔ̃ e.kʁi.vɔ̃ la dat/', 'a-vahⁿ kuh noo-zoo-blee-YOHⁿ ay-kree-vohⁿ la DAT', ['melange', 'double-i']),
  sent(1170, 'Trois questions : un que, un radical de ils, ou un des dix.', 'Three questions: a que, a stem from ils, or one of the ten.', '/tʁwa kɛs.tjɔ̃ œ̃ kə œ̃ ʁa.di.kal də il u œ̃ de dis/', 'trwa kehs-TYOHⁿ uhⁿ KUH uhⁿ ra-dee-kal duh EEL oo uhⁿ day DEESS', ['rule', 'melange'], ['flashcard'],
    rule('Comment reconnais-tu un subjonctif que tu n’as jamais vu ?', 'Ex : Avant que le magasin ferme : que, radical de ils, forme courte.')),
  sent(1171, 'Il faut que je boive quelque chose de chaud.', 'I need to drink something hot.', '/il fo kə ʒə bwav kɛl.kə ʃoz də ʃo/', 'eel foh kuh zhuh BWAHV kehl-kuh shohz duh SHOH', ['melange', 'botte']),
  sent(1172, 'Je veux que nous soyons d’accord avant la réunion.', 'I want us to agree before the meeting.', '/ʒə vø kə nu swa.jɔ̃ da.kɔʁ a.vɑ̃ la ʁe.y.njɔ̃/', 'zhuh veu kuh noo swa-YOHⁿ da-kor a-vahⁿ la ray-ü-NYOHⁿ', ['melange', 'noyau', 'nous'], FCVDR),
];

/* ── ACT 11 · ÉCRIRE ────────────────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1173, 'Il faut que chacun fasse sa part.', 'Everyone has to do their bit.', '/il fo kə ʃa.kœ̃ fas sa paʁ/', 'eel foh kuh sha-kuhⁿ FASS sa PAR', ['ecrire', 'noyau'], FCVDR),
  sent(1174, 'Je veux que nous partions avant sept heures.', 'I want us to leave before seven.', '/ʒə vø kə nu paʁ.tjɔ̃ a.vɑ̃ sɛ.tœʁ/', 'zhuh veu kuh noo par-TYOHⁿ a-vahⁿ seh-TUHR', ['ecrire', 'nous']),
  sent(1175, 'Bien que le trajet soit long, le paysage vaut le voyage.', 'Although the journey is long, the scenery is worth the trip.', '/bjɛ̃ kə lə tʁa.ʒɛ swa lɔ̃ lə pe.i.zaʒ vo lə vwa.jaʒ/', 'byehⁿ kuh luh tra-zheh swa LOHⁿ luh pay-ee-zazh voh luh vwa-YAZH', ['ecrire', 'noyau']),
  sent(1176, 'Avant que les billets augmentent, réservons maintenant.', 'Before the tickets go up, let us book now.', '/a.vɑ̃ kə le bi.jɛ oɡ.mɑ̃t ʁe.zɛʁ.vɔ̃ mɛ̃t.nɑ̃/', 'a-vahⁿ kuh lay bee-yeh og-MAHⁿT ray-zehr-vohⁿ mehⁿt-NAHⁿ', ['ecrire', 'sosie']),
  sent(1177, 'Je suis content que tu prennes des vacances.', 'I am glad you are taking a holiday.', '/ʒə sɥi kɔ̃.tɑ̃ kə ty pʁɛn de va.kɑ̃s/', 'zhuh swee kohⁿ-TAHⁿ kuh tü PRENN day va-KAHⁿSS', ['ecrire', 'botte']),
  sent(1178, 'Il faut que tu remplisses ce formulaire en ligne.', 'You have to fill in this form online.', '/il fo kə ty ʁɑ̃.plis sə fɔʁ.my.lɛʁ ɑ̃ liɲ/', 'eel foh kuh tü rahⁿ-PLEESS suh for-mü-lehr ahⁿ LEEÑ', ['ecrire', 'ir'], FCVDR),
  sent(1179, 'Je veux que vous sachiez que la porte reste ouverte.', 'I want you to know that the door stays open.', '/ʒə vø kə vu sa.ʃje kə la pɔʁt ʁɛst u.vɛʁt/', 'zhuh veu kuh voo sa-SHYAY kuh la port rehst oo-VEHRT', ['ecrire', 'noyau', 'vous']),
  sent(1180, 'Bien que je n’aie pas beaucoup de temps, je viendrai.', 'Although I do not have much time, I will come.', '/bjɛ̃ kə ʒə nɛ pa bo.ku də tɑ̃ ʒə vjɛ̃.dʁe/', 'byehⁿ kuh zhuh NEH pa boh-koo duh TAHⁿ zhuh vyehⁿ-DRAY', ['ecrire', 'noyau']),
  sent(1181, 'Avant que nous partions, vérifions les passeports.', 'Before we go, let us check the passports.', '/a.vɑ̃ kə nu paʁ.tjɔ̃ ve.ʁi.fjɔ̃ le pas.pɔʁ/', 'a-vahⁿ kuh noo par-TYOHⁿ vay-ree-fyohⁿ lay pass-POR', ['ecrire', 'nous']),
  sent(1182, 'Il faut que nous choisissions une date cette semaine.', 'We have to choose a date this week.', '/il fo kə nu ʃwa.zi.sjɔ̃ yn dat sɛt sə.mɛn/', 'eel foh kuh noo shwa-zee-SYOHⁿ ün dat seht suh-MEN', ['ecrire', 'nous', 'ir']),
  sent(1183, 'Je suis contente qu’il vienne enfin nous voir.', 'I am glad he is finally coming to see us.', '/ʒə sɥi kɔ̃.tɑ̃t kil vjɛn ɑ̃.fɛ̃ nu vwaʁ/', 'zhuh swee kohⁿ-TAHⁿT keel VYENN ahⁿ-fehⁿ noo VWAR', ['ecrire', 'botte']),
  chunk(1184, 'il faut que je', 'I have to', '/il fo kə ʒə/', 'eel foh kuh ZHUH', ['porteur']),
  chunk(1185, 'je veux que tu', 'I want you to', '/ʒə vø kə ty/', 'zhuh veu kuh TÜ', ['porteur']),
  chunk(1186, 'bien que tu', 'although you', '/bjɛ̃ kə ty/', 'byehⁿ kuh TÜ', ['porteur']),
  chunk(1187, 'avant que nous', 'before we', '/a.vɑ̃ kə nu/', 'a-vahⁿ kuh NOO', ['porteur']),
  sent(1188, 'Il faut que je sois à la gare à six heures.', 'I have to be at the station at six.', '/il fo kə ʒə swa a la ɡaʁ a si.zœʁ/', 'eel foh kuh zhuh SWA a la gar a see-ZUHR', ['ecrire', 'noyau'], FCVDR),
  sent(1189, 'Je veux que tu me donnes ton avis.', 'I want you to give me your opinion.', '/ʒə vø kə ty mə dɔn tɔ̃.na.vi/', 'zhuh veu kuh tü DONN tohⁿ-na-VEE', ['ecrire', 'sosie']),
  sent(1190, 'Bien que nous ayons peu de place, tout le monde tient.', 'Although we have little room, everybody fits.', '/bjɛ̃ kə nu.za.jɔ̃ pø də plas tu lə mɔ̃d tjɛ̃/', 'byehⁿ kuh noo-za-YOHⁿ peu duh PLASS too luh mohⁿd TYEHⁿ', ['ecrire', 'noyau', 'nous']),
  sent(1191, 'Avant que tu répondes, relis la question.', 'Before you answer, read the question again.', '/a.vɑ̃ kə ty ʁe.pɔ̃d ʁə.li la kɛs.tjɔ̃/', 'a-vahⁿ kuh tü ray-POHⁿD ruh-lee la kehs-TYOHⁿ', ['ecrire', 're']),
  sent(1192, 'Il faut que vous veniez avec vos papiers.', 'You have to come with your documents.', '/il fo kə vu və.nje a.vɛk vo pa.pje/', 'eel foh kuh voo vuh-NYAY a-vehk voh pa-PYAY', ['ecrire', 'botte', 'vous'], FCVDR),
  sent(1193, 'Je suis content que le projet avance.', 'I am glad the project is moving forward.', '/ʒə sɥi kɔ̃.tɑ̃ kə lə pʁɔ.ʒɛ a.vɑ̃s/', 'zhuh swee kohⁿ-TAHⁿ kuh luh pro-zheh a-VAHⁿSS', ['ecrire', 'sosie']),
  sent(1194, 'Écris d’abord ta phrase avec ils. Le subjonctif est déjà dedans.', 'Write your sentence with ils first. The subjunctive is already inside it.', '/e.kʁi da.bɔʁ ta fʁaz a.vɛk il lə syb.ʒɔ̃k.ti.fɛ de.ʒa də.dɑ̃/', 'ay-KREE da-bor ta FRAZ a-vehk EEL luh süb-zhohⁿk-tee-feh day-zha duh-DAHⁿ', ['rule', 'ecrire'], ['flashcard'],
    rule('Que fais-tu quand tu bloques sur une forme de subjonctif ?', 'Ex : ils choisissent donne que nous choisissions.')),
  sent(1195, 'Il faut que tout le monde soit prévenu avant jeudi.', 'Everyone has to be told before Thursday.', '/il fo kə tu lə mɔ̃d swa pʁe.və.ny a.vɑ̃ ʒø.di/', 'eel foh kuh too luh mohⁿd SWA pray-vuh-NÜ a-vahⁿ zheu-DEE', ['ecrire', 'noyau']),
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

export const DICTEE_IDS = ALL_ROWS.filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG TEXTS AND THEIR ANSWER KEYS
 *
 *  Six readings, one each in acts 1, 3, 6, 8, 10 and 11. They live here so
 *  the reading, the drills and the quiz cannot drift apart. Word counts are
 *  from `wordCount` in the scratch check; `reading` prose is exempt from the
 *  45-word density cap (PASSAGE_SECTIONS).
 * ══════════════════════════════════════════════════════════════════════════ */

export const READING_PORTE =
  "Samedi matin, au local de l'association, à Nantes. Sur le tableau, Awa a écrit la liste des choses à faire avant le repas de quartier. « Il faut que nous réservions la salle, il faut que quelqu'un aille chercher les tables, et il faut que tout soit prêt à onze heures. » Marc regarde la liste et sourit. Bien que la journée soit longue, personne n'a l'air inquiet. « Je veux que tout le monde mange à midi, dit Awa. Avant que les invités arrivent, je veux que la cuisine soit propre. » Karim lève la main. « Il faut que je parte à deux heures, je suis désolé. » Awa note la ligne sur le tableau. « Je suis contente que tu viennes quand même. » Sur ce tableau, un petit mot revient dans chaque phrase, et ce n'est ni un verbe ni un sujet. C'est « que ».";

export const READING_SOSIE =
  "Léa apprend le français depuis deux ans. Hier, sa professeure lui a dit : « Il faut que tu travailles ta prononciation. » Léa a répondu : « D'accord, mais ce n'est pas du subjonctif, ça. Tu travailles, je travaille : c'est le présent. » La professeure a souri et elle a écrit deux phrases au tableau. « Tu travailles beaucoup. » et « Il faut que tu travailles. » Les deux phrases se lisent pareil et se disent pareil. Puis elle a écrit la troisième : « Il faut que nous travaillions ensemble. » Là, la forme change, et toute la classe l'entend. Avec les verbes en -er, quatre formes sur six ressemblent au présent. Deux seulement se voient : nous et vous. Dans les quatre autres, le subjonctif est bien là, mais il est invisible. Bien que la recette semble simple, elle demande beaucoup de patience.";

export const READING_NOUS =
  "Dans un cours du soir à Bruxelles, le professeur écrit six lignes au tableau : que je parle, que tu parles, qu'il parle, que nous parlions, que vous parliez, qu'ils parlent. Puis il entoure les deux du milieu. « Ces deux-là, vous les connaissez déjà. Ce sont les formes de l'imparfait. » Un étudiant lève la main. « Alors il suffit de se souvenir de l'imparfait. » Le professeur écrit un autre verbe : étudier. À l'imparfait, nous étudiions. Au subjonctif, que nous étudiions. Deux i, l'un après l'autre. « On ne l'entend presque pas, dit-il, mais il faut l'écrire. » Il ajoute croire : que nous croyions, que vous croyiez. Et rire : que nous riions. « Il faudrait que nous vérifiions l'orthographe de chaque mot difficile », conclut-il, et il souligne le double i dans sa propre phrase.";

export const READING_POUVOIR =
  "Au bureau des inscriptions de l'université, une file de six personnes. L'employée répète la même phrase depuis ce matin : « Il faut que vous sachiez le numéro de votre dossier. » Un étudiant arrive sans numéro. « Je suis désolé, je ne l'ai pas. » L'employée regarde son écran. « Bien que je veuille vous aider, je ne peux rien faire sans ce numéro. » L'étudiant sort son téléphone. « Il faut que je puisse le retrouver quelque part. » Deux minutes plus tard, il le trouve dans un vieux message. L'employée sourit. « Vous voyez, il faut que tout le monde sache où chercher. » Derrière lui, une dame demande si le dossier papier vaut encore quelque chose. « Bien qu'il vaille moins qu'avant, gardez-le. » Quatre verbes, quatre radicaux, et ils reviennent tous les jours.";

export const READING_MESSAGE =
  "Mardi soir, Nadia relit le message de son frère. « Il faut que tu viennes dimanche. Maman veut que toute la famille soit là. Bien que ce soit un long trajet, ça vaut le coup. Avant que tu réserves ton billet, dis-moi à quelle heure tu arrives. Je suis content que tu puisses venir. » Nadia s'arrête sur chaque verbe qui suit « que » : viennes, soit, soit, réserves, puisses. Cinq portes, cinq subjonctifs. « Réserves » la surprend, parce que la forme ressemble au présent : c'est un verbe en -er, et le sosie fait son travail. « Arrives », à la fin, n'est pas un subjonctif : il ne suit pas « que », il suit « à quelle heure ». Nadia répond en deux lignes : « Il faut que je regarde les trains. Bien que ce soit loin, je serai là. »";

/** The annotation key for READING_MESSAGE: every form the learner marks. */
export const MESSAGE_SUBJONCTIFS = ['viennes', 'soit', 'soit', 'réserves', 'puisses', 'regarde', 'soit'] as const;
/** Verbs in the same text that are NOT subjunctive, and the reason each one
 *  fools a learner: no `que` in front of it, or a different mood entirely. */
export const MESSAGE_INTRUS = ['arrives', 'vaut', 'relit', 'surprend', 'ressemble', 'répond', 'serai'] as const;

export const READING_PLAN =
  "Salut Théo, je t'écris pour le week-end de mars. Il faut que nous réservions le gîte avant la fin du mois, sinon tout sera pris. Il faut aussi que chacun donne son avis sur les repas, parce que je ne veux pas décider tout seul. Je veux que tout le monde arrive vendredi soir. Bien que la route soit longue pour Sarah, elle préfère venir en voiture avec Karim. Avant que vous partiez, vérifiez les pneus : il a neigé toute la semaine là-haut. Je suis content que tu puisses venir, franchement. L'an dernier, tu as travaillé tout le week-end et tout le monde l'a remarqué. Une dernière chose : il faut que j'aie le nombre exact de personnes avant jeudi. Réponds-moi vite. À samedi, Nadia.";
