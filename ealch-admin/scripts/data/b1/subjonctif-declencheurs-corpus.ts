// b1.15.l1 « Le subjonctif : les déclencheurs » — the authored corpus, the
// imports and the citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top
// of B1-BUILD-PLAYBOOK.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME and REFRAME_EN from this
// file; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL,
// E, ALL_ROWS, IMPORT_IDS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   WHICH EXPRESSIONS TAKE THE SUBJUNCTIVE, AND WHICH DO NOT. b1.14 built the
//   FORM and deliberately refused the inventory; this is the inventory, and it
//   is organised by WHY the subjunctive appears rather than as a list to learn
//   by heart.
//
//   1. LA VOLONTÉ. vouloir que, souhaiter que, désirer que, exiger que,
//      demander que, préférer que, aimer (j'aimerais) que.
//   2. LA NÉCESSITÉ. il faut que, il est nécessaire / important / essentiel /
//      utile que, il vaut mieux que, il est temps que.
//   3. LE SENTIMENT. être content / heureux / triste / surpris / désolé /
//      fier / ravi que, avoir peur que, regretter que, c'est dommage que,
//      ça m'étonne que.
//   4. LE DOUTE. douter que, il est possible que, il se peut que, il n'est
//      pas sûr / certain que, il semble que, il est peu probable que.
//   5. LA BASCULE, the contrast that defines the whole lesson. « je pense
//      que » takes the INDICATIVE and « je ne pense pas que » takes the
//      subjunctive, and the same swing runs through croire, être sûr, être
//      vrai and trouver. The negation changes the KEY, never the verb.
//   6. LES CONJONCTIONS. pour que, afin que, bien que, quoique, de peur que,
//      avant que, jusqu'à ce que, à condition que, sans que, pourvu que,
//      à moins que.
//   7. WHAT DOES NOT TAKE IT, which is half the skill: espérer que, il me
//      semble que, il est probable que, parce que, après que, peut-être que,
//      il paraît que, pendant que, and every plain statement of fact. The
//      pair « il semble que » (subjunctive) against « il me semble que »
//      (indicative) is authored in full, because it is the finest line in the
//      inventory and the seed carries four published rows of the first.
//
//   NOT OWNED HERE, AND SAID SO ON THE CARDS:
//
//   THE FORMATION IS b1.14's AND IS ASSUMED KNOWN. Its reframe is IMPORTED
//   below and quoted verbatim, never retyped. No act re-teaches the endings,
//   the `ils` stem, the two-stem verbs or the ten irregulars: where a form is
//   hard, the card cites b1.14 and moves on.
//
//   SUBJONCTIF AGAINST THE INFINITIVE (« je veux partir » / « je veux que tu
//   partes », the same-subject rule) IS b1.16's, running in parallel. It is
//   named ONCE, as a signpost in act 11's roundup, and never drilled. The
//   task's grader notes forbid marking it in either direction.
//
//   THE PAST SUBJUNCTIVE AND THE IMPERFECT SUBJUNCTIVE are out of B1 entirely
//   and are named nowhere. No authored row contains « que j'aie fait » or
//   « que je fisse ». Three seed rows in §F do carry a past subjunctive
//   (« aient augmenté », « ait beaucoup changé », « ait augmenté »); each is
//   used as a whole sentence to be READ, never as a form to build, and no
//   card, drill or quiz question asks the learner to produce one.
//
//   PRONOUN ORDER is b1.17's and the passive is b1.18's, both in this wave.
//   No authored row stacks two object pronouns and none is in the passive.
//
// QUOTED, NEVER TAUGHT (imported, never retyped):
//
//   b1.14  REFRAME (the subjunctive is not invented: it comes out of a form
//          you already say). Acts 1, 6 and 11, where the learner has to
//          build a form the moment a key turns.
//
// LEANED ON: b1.14 (the whole formation), b1.09 (« il faudrait que » as the
// conditional of falloir), b1.10 (si clauses, which take NO subjunctive and
// are named once in act 9), a2.13 (pouvoir, vouloir, devoir), a2.14 (savoir).
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME: `opinions-et-avis` (fondations, a2-b2). It already exists, so
//     nothing is created at import. Ids are `fr.b1.opinions-et-avis.NNN`.
//     The theme is exactly right for this lesson: il faut que, je doute que
//     and je suis content que ARE opinion, will and doubt.
//  2. POSTGRES WAS PROBED DIRECTLY, 2026-09-25 (orchestrator). The theme
//     holds 295 rows in all, 115 of them `fr.b1.*` at 001-115, the highest
//     number anywhere in the theme is 132, and there is NOTHING at or above
//     900. **Never author below 1000 in this theme.**
//  3. ID BLOCK: b1.15 owns `.1200`-`.1399` and nothing else. Used here:
//     `.1200`-`.1398`, in eleven act blocks. 1000-1199 is b1.14's and
//     1400-1599 is b1.16's; neither is touched.
//  4. THE THEME HOLDS ZERO SEED ROWS. `opinions-et-avis` is absent from
//     seed.json's `items` entirely, so not one row of this theme can be named
//     by a section today: `src()` resolves against the seed and would throw.
//     Every reused row in §F therefore comes from ANOTHER theme.
//  5. THE 115 PUBLISHED b1 ROWS ARE NOT REUSABLE TODAY, and about a dozen of
//     them are TRIGGER rows, which makes the overlap sharper for this lesson
//     than it was for b1.14: they sit behind « je ne pense pas que », « je
//     doute que », « à condition que », « quoique » and « pourvu que », which
//     are exactly this lesson's inventory. They are listed in §F2 as
//     DB_ONLY_TWINS with the authored row that duplicates each one, so the
//     import step can swap rather than ship both. DECISION NEEDED AT IMPORT.
//  6. SEED READ 2026-09-25. Every reused id in §F was read out of seed.json
//     and carries its French in a trailing comment, so nothing here needs
//     seed.json opened again. Seed-checked only, DB check pending at import.
//  7. NOT ONE of the 54 reused rows carries a `voiceflash` drill (measured),
//     so NOT_SPEAKABLE is the whole import list and the `practice` speak
//     mission names authored rows only. 42 of the 54 carry no `flashcard`
//     drill either and are listed in NOT_DECK_ABLE.
//  8. RESPELLINGS SPELLED FOR THE NASAL CHECKER rather than for the ear:
//     `VYENN` (vienne, viennes), `PRENN` (prenne, prennes), `SAHⁿBL`
//     (semble) and `KOMM` (comme) double or close the consonant so that
//     `nasal-convention` does not read a single vowel plus n or m as an
//     unmarked nasal vowel. In each the French spelling really does carry a
//     doubled or pronounced consonant, so the respelling is also right for
//     the ear. Everything else is spelled for the ear.
//  9. NO U+203F anywhere, in a respelling OR in an IPA field: a liaison
//     consonant simply moves onto the next syllable (« ee-leh-tehⁿ-por-TAHⁿ »
//     for il est important, « noo-za-vohⁿ » for nous avons).
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
  id: 'b1.15',
  seq: 15,
  title: 'The Subjunctive: What Sets It Off',
  sub: 'Le subjonctif : les déclencheurs',
  canDo: 'Can tell which expressions of will, necessity, feeling, doubt and concession take the subjunctive, use the commonest of them accurately in writing and in speech, and keep the indicative after the expressions that do not take it',
  prereqUnitIds: ['b1.14'],
} as const;

export const LESSON_ID = 'b1.15.l1';
export const THEME = 'opinions-et-avis';
export const LEVEL = 'b1' as const;

/** The whole block, claimed in B1-BUILD-LOG.md. Nothing is authored outside
 *  it, and nothing is authored below 1000: Postgres holds 001-132. */
export const ID_RANGES = [[1200, 1399]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A2 citations use the house English trail label, resolved through `unitRef`
 *  from the shipped `unit.seq`, never typed and never the raw id. b1.* units
 *  are not rows in the seed yet, so they are labelled in French from the plan
 *  until they are.
 * ══════════════════════════════════════════════════════════════════════════ */

export const FORMATION_UNIT = 'b1.14';
export const POLI_UNIT = 'b1.09';
export const SI_UNIT = 'b1.10';
export const MODAUX_UNIT = 'a2.13';
export const SAVOIR_UNIT = 'a2.14';

/** TODO(import): drop once the b1.* units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5, 'b1.06': 6,
  'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10, 'b1.11': 11, 'b1.12': 12,
  'b1.13': 13, 'b1.14': 14, 'b1.15': 15, 'b1.16': 16, 'b1.17': 17, 'b1.18': 18,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const FORMATION_REF = refFr(FORMATION_UNIT);
export const POLI_REF = refFr(POLI_UNIT);
export const SI_REF = refFr(SI_UNIT);
export const INFINITIF_REF = refFr('b1.16');
export const MODAUX_REF = unitRef(MODAUX_UNIT);
export const SAVOIR_REF = unitRef(SAVOIR_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATION, IMPORTED
 *
 *  b1.14 is the direct predecessor and its reframe is French, so it is quoted
 *  as it stands and never retyped. Renaming b1.14's export breaks this file
 *  at compile time, which is the point.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B114_REFRAME, REFRAME_EN as B114_REFRAME_EN } from './subjonctif-formation-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LA CLÉ, PAS LA PORTE. b1.14 taught « que » as the doorway. This lesson
 *  says that the doorway is always the same and that what decides is the KEY
 *  standing in front of it. One door, a ring of keys, and only some of them
 *  turn. The image carries every family: will, necessity, feeling and doubt
 *  are four keys that turn; espérer, il me semble and parce que are keys on
 *  the same ring that do not. It also carries the lesson's centrepiece, the
 *  swing from « je pense que » to « je ne pense pas que »: the door did not
 *  move, the key did.
 *
 *  It is NOT a metaphor of difficulty, of locking someone out, or of mood.
 *  Nothing here says the subjunctive is emotional or uncertain, because that
 *  is false of « il faut que », « pour que » and « avant que », and because
 *  b1.14 rejected exactly that sentence for exactly that reason.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Ce n'est pas le verbe qui décide : c'est l'expression devant « que ».";
export const REFRAME_EN = 'It is not the verb that decides: it is the expression in front of que.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Le subjonctif, c’est le mode du doute et du sentiment.',
    why: "False for half of this lesson's own inventory. Il faut que is neither doubt nor feeling, and nor are pour que, avant que and jusqu'à ce que; acts 3, 7 and 8 would each spend themselves contradicting the reframe. b1.14 rejected the same sentence for the same reason, so re-proposing it would also break the pair.",
  },
  {
    text: 'Après que, mets le subjonctif.',
    why: "Act 9 exists precisely because that is untrue: espérer que, il me semble que, il est probable que, parce que, après que and peut-être que all carry que and all keep the indicative. A reframe that turns a whole teaching act into a list of exceptions teaches the learner to distrust the rule.",
  },
  {
    text: "Le subjonctif dit que ce n'est pas sûr.",
    why: "False at « je suis content que tu sois là », where the speaker knows perfectly well that you are there, and at « bien qu'il pleuve », where it is raining. Act 4 opens on exactly that objection and would have to argue with its own lesson's reframe to answer it.",
  },
  {
    text: 'Apprends la liste par cœur.',
    why: 'It is an instruction, not a reframe, and it teaches that nothing here can be understood. The five families exist so that each group has a reason, and a learner who knows the reason can place an expression the lesson never named.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-25 and its `fr` is copied
 *  verbatim wherever a section prints it. `opinions-et-avis` carries ZERO
 *  seed rows, so every one of these comes from another theme.
 *
 *  Act 4 has none. The seed carries no row at all behind a FEELING trigger
 *  (measured: zero hits for « content que », « heureux que », « triste que »,
 *  « surpris que », « désolé que », « regrette que », « dommage que »; the
 *  single « de peur que » row is b2 and carries the expletive ne). Every row
 *  of act 4 is therefore authored, and that absence is itself a finding: the
 *  published corpus teaches the subjunctive of obligation and doubt and not
 *  the subjunctive of feeling.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b1.cuisine.091',             // Je doute que ce régime soit vraiment équilibré.
    'fr.b1.routines.089',            // Bien que je sois pressé, je prends toujours le temps de déjeuner.
    'fr.b1.maison.054',              // Je pense que ce logement est trop cher pour nous.
    'fr.b1.cuisine.047',             // Je ne pense pas que ce plat soit trop épicé.
  ],
  act2: [
    'fr.b1.sports-et-loisirs.056',   // Le coach veut que nous soyons prêts avant le match.
    'fr.b1.cuisine.059',             // Je voudrais que tu choisisses un dessert pour ce soir.
    'fr.b1.dictee.032',              // Le professeur souhaite que les élèves posent plus de questions.
    'fr.b1.metiers.052',             // Le patron souhaite que nous finissions le rapport avant la réunion.
    'fr.b1.metiers.060',             // Le directeur exige que chaque employé signe le règlement intérieur.
    'fr.b1.famille.076',             // Ma grand-mère aimerait que ses petits-enfants viennent la voir plus souvent.
  ],
  act3: [
    'fr.b1.routines.079',            // Il faut que je me couche plus tôt si je veux être productif.
    'fr.b1.sports-et-loisirs.057',   // Il est important que vous ayez une bonne condition physique.
    'fr.b1.dictee.040',              // Il est important que les parents assistent à la rencontre du trimestre.
    'fr.b1.heure-et-date.070',       // Il est essentiel que vous arriviez à l'heure pour l'entretien.
    'fr.b1.cuisine.065',             // Il vaut mieux que nous réservions une table avant huit heures.
    'fr.b1.cuisine.046',             // Il faut que nous mangions des légumes variés chaque jour.
  ],
  act4: [] as string[],
  act5: [
    'fr.b1.cafe.069',                // Je doute que ce serveur se souvienne de notre commande.
    'fr.b1.maison.060',              // Je doute que ce studio soit assez grand pour deux.
    'fr.b1.famille.069',             // Ma belle-sœur doute que son mari puisse arriver à temps pour le dîner.
    'fr.b1.cafe.075',                // Il est possible que le serveur ait oublié notre commande.
    'fr.b1.metiers.056',             // Il est possible que le poste soit déjà pourvu, alors renseigne-toi vite.
    'fr.b1.heure-et-date.080',       // Il se peut que la livraison arrive avec plusieurs jours de retard.
    'fr.b1.famille.080',             // Il se peut que ma nièce parte étudier à l'étranger l'année prochaine.
  ],
  act6: [
    'fr.b1.cafe.080',                // Je pense que ce café sert le meilleur cappuccino du quartier.
    'fr.b1.maison.066',              // Je pense que ce quartier est trop bruyant pour moi.
    'fr.b1.routines.091',            // Je crois que la ponctualité est essentielle pour réussir au travail.
    'fr.b1.famille.073',             // Je ne pense pas que mon oncle vienne à la réunion de famille cette année.
    'fr.b1.sports-et-loisirs.060',   // Je ne pense pas qu'elle sache déjà nager aussi bien que lui.
    'fr.b1.sports-et-loisirs.075',   // Je pense que le sport en équipe développe l'esprit de solidarité.
  ],
  act7: [
    'fr.b1.cuisine.062',             // Les grands chefs insistent pour que les ingrédients soient frais.
    'fr.b1.famille.072',             // Pour que mes enfants grandissent heureux, je passe du temps avec eux chaque jour.
    'fr.b1.communaute.003',          // Bien que le quartier ait beaucoup changé, l'esprit de solidarité reste le même.
    'fr.b1.tourisme.005',            // Bien que la visite guidée soit un peu chère, elle vaut vraiment le détour.
    'fr.b1.argent-quotidien.001',    // Bien que le salaire ait augmenté, les dépenses restent élevées.
    'fr.b1.dictee.055',              // Bien que l'inscription soit gratuite, il faut réserver sa place à l'avance.
  ],
  act8: [
    'fr.b1.heure-et-date.083',       // Il a fallu attendre près d'une heure avant que le médecin nous reçoive.
    'fr.b1.appareils.001',           // J'aurais dû sauvegarder mes fichiers avant que la batterie meure.
    'fr.b1.maison.004',              // Il faut refaire la toiture avant que l'hiver n'arrive.
    'fr.b1.dictee.042',              // Pourvu que le certificat arrive à temps, elle pourra commencer son nouveau poste.
    'fr.b1.courses.002',             // Il faut qu'on fasse les courses avant que les magasins ferment.
  ],
  act9: [
    'fr.sons.voyelles.438',          // J'espère qu'il fera très beau ce week-end.
    'fr.b1.connecteurs-logiques.002', // Le magasin a fermé parce que les propriétaires ont pris leur retraite.
    'fr.b1.connecteurs-logiques.005', // Il n'a pas pu venir parce que sa voiture est tombée en panne.
    'fr.b1.routines.095',            // Après avoir terminé ses études, il a complètement changé son emploi du temps.
    'fr.b1.cafe.072',                // Il semble que les prix aient encore augmenté.
    'fr.b1.routines.087',            // Il semble que les gens dorment moins qu'avant à cause du stress.
  ],
  act10: [
    'fr.b1.cuisine.054',             // Elle doute que ce dessert soit vraiment sans sucre.
    'fr.b1.metiers.063',             // J'aimerais que tu me rendes le dossier avant la fin de la journée.
    'fr.b1.famille.065',             // Il est important que les enfants respectent leurs grands-parents.
    'fr.b1.routines.065',            // Il est important que tu te couches tôt avant un examen.
  ],
  act11: [
    'fr.b1.famille.078',             // Mon beau-frère aimerait que nous passions Noël chez lui cette année.
    'fr.b1.dictee.047',              // Le directeur exige que les élèves rendent leurs formulaires signés.
    'fr.b1.famille.067',             // Mon frère souhaite que sa fille réussisse ses études avant de se marier.
    'fr.b1.voisinage.003',           // Il faut que les voisins soient plus respectueux du calme le soir.
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable through a
 *  deckTranche. The drill list each one DOES carry is in the trailing
 *  comment. Measured against seed.json, 2026-09-25. */
export const NOT_DECK_ABLE = [
  'fr.b1.maison.054',              // dictation
  'fr.b1.cuisine.047',             // dictation
  'fr.b1.sports-et-loisirs.056',   // dictation
  'fr.b1.cuisine.059',             // dictation
  'fr.b1.dictee.032',              // sentence, review
  'fr.b1.metiers.052',             // sentence, review
  'fr.b1.metiers.060',             // dictation
  'fr.b1.famille.076',             // dictation
  'fr.b1.sports-et-loisirs.057',   // dictation
  'fr.b1.dictee.040',              // sentence, review
  'fr.b1.heure-et-date.070',       // dictation
  'fr.b1.cuisine.065',             // dictation
  'fr.b1.cuisine.046',             // dictation
  'fr.b1.cafe.069',                // dictation
  'fr.b1.maison.060',              // dictation
  'fr.b1.famille.069',             // sentence, review
  'fr.b1.cafe.075',                // dictation
  'fr.b1.metiers.056',             // sentence, review
  'fr.b1.heure-et-date.080',       // dictation
  'fr.b1.famille.080',             // dictation
  'fr.b1.famille.073',             // dictation
  'fr.b1.sports-et-loisirs.060',   // dictation
  'fr.b1.cuisine.062',             // dictation
  'fr.b1.famille.072',             // sentence, review
  'fr.b1.argent-quotidien.001',    // dictation
  'fr.b1.dictee.055',              // dictation
  'fr.b1.heure-et-date.083',       // dictation
  'fr.b1.appareils.001',           // dictation
  'fr.b1.dictee.042',              // sentence, review
  'fr.b1.courses.002',             // dictation
  'fr.sons.voyelles.438',          // sentence, review
  'fr.b1.connecteurs-logiques.002', // dictation
  'fr.b1.connecteurs-logiques.005', // dictation
  'fr.b1.cafe.072',                // dictation
  'fr.b1.cuisine.054',             // dictation
  'fr.b1.metiers.063',             // dictation
  'fr.b1.famille.065',             // sentence, review
  'fr.b1.routines.065',            // dictation
  'fr.b1.famille.078',             // dictation
  'fr.b1.dictee.047',              // dictation
  'fr.b1.famille.067',             // sentence, review
  'fr.b1.voisinage.003',           // dictation
];

/** No `voiceflash` either: never in a `practice` speak section. Measured
 *  2026-09-25: not one of the 54 imports carries it, so the speak mission
 *  filters ALL_ROWS and names nothing by hand. */
export const NOT_SPEAKABLE = [...IMPORT_IDS];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F2. DB-ONLY TWINS
 *
 *  Postgres holds 115 published `fr.b1.opinions-et-avis.*` rows that
 *  seed.json does not carry. `src()` resolves against the seed, so naming one
 *  throws at module load and none of them can be reused today. The ones below
 *  are TRIGGER rows and belong to this lesson's inventory rather than to
 *  b1.14's, which is the reverse of b1.14's situation: there they were an
 *  intrusion, here they are exactly on topic and are duplicated only because
 *  the seed cannot reach them.
 *
 *  DECISION NEEDED AT IMPORT: keep the published row and drop the authored
 *  twin, keep both, or dedupe on the French. For this lesson, dropping the
 *  authored twin is the cheap answer, because the published rows carry the
 *  same triggers this lesson teaches.
 * ══════════════════════════════════════════════════════════════════════════ */

export const DB_ONLY_TWINS: readonly { id: string; fr: string; mine: string }[] = [
  { id: 'fr.b1.opinions-et-avis.026', fr: "Je ne pense pas que les réseaux sociaux soient aussi dangereux qu'on le dit.", mine: 'act 6, the bascule (E(1303), E(1311))' },
  { id: 'fr.b1.opinions-et-avis.027', fr: "Je doute que cette méthode d'enseignement convienne à tous les élèves.", mine: 'act 5, douter que (E(1283), E(1288))' },
  { id: 'fr.b1.opinions-et-avis.030', fr: "Tu as sans doute raison, mais je ne crois pas que ce métier disparaisse totalement.", mine: 'act 6, je ne crois pas que (E(1305), E(1314))' },
  { id: 'fr.b1.opinions-et-avis.031', fr: "Je ne pense pas qu'il soit utile de suivre un régime aussi strict.", mine: 'act 6, je ne pense pas que (E(1303))' },
  { id: 'fr.b1.opinions-et-avis.036', fr: "Je ne suis pas d'accord, il n'est pas vrai que les hommes fassent moins de tâches ménagères qu'avant.", mine: "act 6, il n'est pas vrai que (E(1307))" },
  { id: 'fr.b1.opinions-et-avis.037', fr: "Je doute que ce joueur mérite vraiment sa place dans l'équipe.", mine: 'act 5, douter que on an -er verb (E(1290))' },
  { id: 'fr.b1.opinions-et-avis.043', fr: "Tu as raison, pourvu que chacun fasse un effort, la situation peut vraiment s'améliorer.", mine: 'act 8, pourvu que (E(1338), E(1343))' },
  { id: 'fr.b1.opinions-et-avis.047', fr: "Je suis d'accord, à condition que la ville prévoie aussi assez de parkings pour les habitants.", mine: 'act 8, à condition que (E(1336), E(1341), E(1347))' },
  { id: 'fr.b1.opinions-et-avis.048', fr: "Tu n'as pas tort, quoiqu'il faille aussi du temps libre pour faire du bénévolat.", mine: 'act 7, quoique (E(1319), E(1324), E(1329))' },
  { id: 'fr.b1.opinions-et-avis.049', fr: "Je ne pense pas que l'agriculture biologique puisse à elle seule nourrir toute la planète.", mine: 'act 6, je ne pense pas que (E(1297), E(1303))' },
  { id: 'fr.b1.opinions-et-avis.114', fr: 'je doute que', mine: 'act 5, the bare trigger chunk (E(1278))' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, the final stressed syllable of
 *  each group in caps, ü for French u, nasals closed with the superscript ⁿ,
 *  and NO U+203F tie: a liaison consonant moves onto the next syllable.
 *
 *    que                [kə]    kuh, never stressed
 *    qu'il              [kil]   keel
 *    qu'elle            [kɛl]   kehl
 *    -ions              [jɔ̃]    -YOHⁿ
 *    -iez               [je]    -YAY
 *
 *  The trigger expression is the stressed group in almost every sentence,
 *  because it is what the lesson is about: [zhuh DOOT kuh], [eel foh kuh],
 *  [byehⁿ kuh]. Where a sentence ends on its verb, the caps move there.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['declencheur', ...tags], drills, version: 1, grammarPoints: ['subjonctif-declencheurs'], ...extra,
});

/** A bare trigger: the expression on its own, with no sentence around it.
 *  These are what the sort drills move from pile to pile. */
const chunk = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['declencheur', ...tags], drills, version: 1, grammarPoints: ['subjonctif-declencheurs'], ...extra,
});

/** A gapfill card: `prompt` is the front, `fr` the answer (validateItem). */
const gap = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'gapfill', prompt, notes });
/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LA CLÉ ─────────────────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1200, 'Je veux que tu viennes avec nous.', 'I want you to come with us.', '/ʒə vø kə ty vjɛn a.vɛk nu/', 'zhuh veu kuh tü VYENN a-vehk NOO', ['volonte', 'paire'], FCVDR),
  sent(1201, 'Il faut que tu viennes avec nous.', 'You have to come with us.', '/il fo kə ty vjɛn a.vɛk nu/', 'eel foh kuh tü VYENN a-vehk NOO', ['necessite', 'paire']),
  sent(1202, 'Je suis content que tu viennes avec nous.', 'I am glad you are coming with us.', '/ʒə sɥi kɔ̃.tɑ̃ kə ty vjɛn a.vɛk nu/', 'zhuh swee kohⁿ-TAHⁿ kuh tü VYENN a-vehk NOO', ['sentiment', 'paire']),
  sent(1203, 'Je doute que tu viennes avec nous.', 'I doubt you will come with us.', '/ʒə dut kə ty vjɛn a.vɛk nu/', 'zhuh DOOT kuh tü VYENN a-vehk NOO', ['doute', 'paire'], FCVDR),
  sent(1204, 'Bien que tu viennes de loin, tu es toujours à l’heure.', 'Although you come from far away, you are always on time.', '/bjɛ̃ kə ty vjɛn də lwɛ̃ ty ɛ tu.ʒuʁ a lœʁ/', 'byehⁿ kuh tü VYENN duh LWEHⁿ tü eh too-zhoor a LUHR', ['lien', 'paire']),
  sent(1205, 'J’espère que tu viens avec nous.', 'I hope you are coming with us.', '/ʒɛs.pɛʁ kə ty vjɛ̃ a.vɛk nu/', 'zhehs-PEHR kuh tü VYEHⁿ a-vehk NOO', ['indicatif', 'paire'], FCVDR),
  sent(1206, 'Je sais que tu viens avec nous.', 'I know you are coming with us.', '/ʒə sɛ kə ty vjɛ̃ a.vɛk nu/', 'zhuh SEH kuh tü VYEHⁿ a-vehk NOO', ['indicatif', 'paire']),
  sent(1207, 'Je pense que ce film est trop long.', 'I think this film is too long.', '/ʒə pɑ̃s kə sə film ɛ tʁo lɔ̃/', 'zhuh PAHⁿSS kuh suh feelm eh troh LOHⁿ', ['indicatif', 'bascule']),
  sent(1208, 'Je ne pense pas que ce film soit trop long.', 'I do not think this film is too long.', '/ʒə nə pɑ̃s pa kə sə film swa tʁo lɔ̃/', 'zhuh nuh pahⁿss PA kuh suh feelm swa troh LOHⁿ', ['doute', 'bascule'], FCVDR),
  chunk(1209, 'le déclencheur', 'the trigger', '/lə de.klɑ̃.ʃœʁ/', 'luh day-klahⁿ-SHUHR', ['mot']),
  chunk(1210, 'l’expression devant que', 'the expression in front of que', '/lɛks.pʁɛ.sjɔ̃ də.vɑ̃ kə/', 'lehks-preh-syohⁿ duh-vahⁿ KUH', ['mot']),
  sent(1211, 'Ce n’est pas le verbe qui décide, c’est l’expression devant que.', 'It is not the verb that decides, it is the expression in front of que.', '/sə nɛ pa lə vɛʁb ki de.sid sɛ lɛks.pʁɛ.sjɔ̃ də.vɑ̃ kə/', 'suh neh pa luh VEHRB kee day-SEED seh lehks-preh-syohⁿ duh-vahⁿ KUH', ['regle'], ['flashcard'],
    rule('Qu’est-ce qui décide du subjonctif dans une phrase ?', 'Ex : Je veux que tu viennes. / J’espère que tu viens.')),
  sent(1212, 'Le mot que ouvre la porte, et l’expression devant lui tient la clé.', 'The word que opens the door, and the expression in front of it holds the key.', '/lə mo kə uvʁ la pɔʁt e lɛks.pʁɛ.sjɔ̃ də.vɑ̃ lɥi tjɛ̃ la kle/', 'luh moh kuh OOVR la PORT ay lehks-preh-syohⁿ duh-vahⁿ lwee tyehⁿ la KLAY', ['regle'], ['flashcard'],
    rule('Que fait le mot que, et que fait l’expression devant lui ?', 'Ex : Il faut que tu partes. Que ouvre, il faut que décide.')),
  sent(1213, 'Il est important que tout le monde soit là à neuf heures.', 'It is important that everybody is there at nine.', '/i.lɛ.tɛ̃.pɔʁ.tɑ̃ kə tu lə mɔ̃d swa la a nœ.vœʁ/', 'ee-leh-tehⁿ-por-TAHⁿ kuh too luh MOHⁿD swa LA a nuh-VUHR', ['necessite']),
  sent(1214, 'J’ai peur qu’il pleuve samedi.', 'I am afraid it will rain on Saturday.', '/ʒe pœʁ kil plœv sam.di/', 'zhay PUHR keel PLUHV sam-DEE', ['sentiment'], FCVDR),
  sent(1215, 'Pour que tout soit prêt, il faut commencer tôt.', 'For everything to be ready, you have to start early.', '/puʁ kə tu swa pʁɛ il fo kɔ.mɑ̃.se to/', 'poor kuh too swa PREH eel foh ko-mahⁿ-say TOH', ['lien']),
  sent(1216, 'Avant que la pluie arrive, rentre le linge.', 'Before the rain comes, bring the washing in.', '/a.vɑ̃ kə la plɥi a.ʁiv ʁɑ̃tʁ lə lɛ̃ʒ/', 'a-vahⁿ kuh la plwee a-REEV rahⁿtr luh LEHⁿZH', ['lien']),
  sent(1217, 'Je suis sûr que le train part à huit heures.', 'I am sure the train leaves at eight.', '/ʒə sɥi syʁ kə lə tʁɛ̃ paʁ a ɥi.tœʁ/', 'zhuh swee SÜR kuh luh trehⁿ PAR a wee-TUHR', ['indicatif', 'bascule']),
  sent(1218, 'Je ne suis pas sûr que le train parte à huit heures.', 'I am not sure the train leaves at eight.', '/ʒə nə sɥi pa syʁ kə lə tʁɛ̃ paʁt a ɥi.tœʁ/', 'zhuh nuh swee pa SÜR kuh luh trehⁿ PART a wee-TUHR', ['doute', 'bascule'], FCVDR),
  sent(1219, 'Il faut que je parte maintenant.', 'I have to leave now.', '/il fo kə ʒə paʁt mɛ̃t.nɑ̃/', 'eel foh kuh zhuh PART mehⁿt-NAHⁿ', ['necessite'], ['flashcard'],
    gap('Il faut que je ___ (partir) maintenant.', 'Il faut que ouvre la porte : le verbe passe au subjonctif.')),
];

/* ── ACT 2 · LA VOLONTÉ ─────────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  chunk(1220, 'je veux que', 'I want (someone) to', '/ʒə vø kə/', 'zhuh VEU kuh', ['volonte', 'cle']),
  chunk(1221, 'je souhaite que', 'I wish that', '/ʒə swɛt kə/', 'zhuh SWEHT kuh', ['volonte', 'cle']),
  chunk(1222, 'je désire que', 'I wish that', '/ʒə de.ziʁ kə/', 'zhuh day-ZEER kuh', ['volonte', 'cle']),
  chunk(1223, 'j’exige que', 'I insist that', '/ʒɛɡ.ziʒ kə/', 'zheg-ZEEZH kuh', ['volonte', 'cle']),
  chunk(1224, 'je demande que', 'I ask that', '/ʒə də.mɑ̃d kə/', 'zhuh duh-MAHⁿD kuh', ['volonte', 'cle']),
  chunk(1225, 'je préfère que', 'I prefer that', '/ʒə pʁe.fɛʁ kə/', 'zhuh pray-FEHR kuh', ['volonte', 'cle']),
  sent(1226, 'Je veux que tu me rappelles avant midi.', 'I want you to call me back before noon.', '/ʒə vø kə ty mə ʁa.pɛl a.vɑ̃ mi.di/', 'zhuh veu kuh tü muh ra-PEL a-vahⁿ mee-DEE', ['volonte'], FCVDR),
  sent(1227, 'Ma sœur souhaite que nous soyons là pour son anniversaire.', 'My sister wants us to be there for her birthday.', '/ma sœʁ swɛt kə nu swa.jɔ̃ la puʁ sɔ̃.na.ni.vɛʁ.sɛʁ/', 'ma SUHR sweht kuh noo swa-YOHⁿ la poor sohⁿ-na-nee-vehr-SEHR', ['volonte']),
  sent(1228, 'Le propriétaire exige que le loyer soit payé le premier du mois.', 'The landlord insists the rent is paid on the first of the month.', '/lə pʁɔ.pʁje.tɛʁ ɛɡ.ziʒ kə lə lwa.je swa pe.je lə pʁə.mje dy mwa/', 'luh pro-pryay-TEHR eg-zeezh kuh luh lwa-YAY swa pay-YAY luh pruh-myay dü MWA', ['volonte']),
  sent(1229, 'Je préfère que nous prenions le train plutôt que la voiture.', 'I would rather we took the train than the car.', '/ʒə pʁe.fɛʁ kə nu pʁə.njɔ̃ lə tʁɛ̃ ply.to kə la vwa.tyʁ/', 'zhuh pray-FEHR kuh noo pruh-nyohⁿ luh trehⁿ plü-toh kuh la vwa-TÜR', ['volonte'], FCVDR),
  sent(1230, 'Elle demande que tout le monde éteigne son téléphone.', 'She asks everybody to switch their phone off.', '/ɛl də.mɑ̃d kə tu lə mɔ̃d e.tɛɲ sɔ̃ te.le.fɔn/', 'ehl duh-MAHⁿD kuh too luh mohⁿd ay-TEGN sohⁿ tay-lay-FON', ['volonte']),
  sent(1231, 'J’aimerais que tu restes encore un peu.', 'I would like you to stay a little longer.', '/ʒɛm.ʁɛ kə ty ʁɛst ɑ̃.kɔ.ʁœ̃ pø/', 'zhehm-REH kuh tü REST ahⁿ-ko-ruhⁿ PEU', ['volonte']),
  sent(1232, 'Nous voulons que la réunion commence à l’heure.', 'We want the meeting to start on time.', '/nu vu.lɔ̃ kə la ʁe.y.njɔ̃ kɔ.mɑ̃s a lœʁ/', 'noo voo-LOHⁿ kuh la ray-ü-NYOHⁿ ko-mahⁿss a LUHR', ['volonte']),
  sent(1233, 'Le médecin veut que je fasse une prise de sang.', 'The doctor wants me to have a blood test.', '/lə med.sɛ̃ vø kə ʒə fas yn pʁiz də sɑ̃/', 'luh mayd-SEHⁿ veu kuh zhuh FASS ün preez duh SAHⁿ', ['volonte'], FCVDR),
  sent(1234, 'Je souhaite que ce voyage te fasse du bien.', 'I hope this trip does you good.', '/ʒə swɛt kə sə vwa.jaʒ tə fas dy bjɛ̃/', 'zhuh SWEHT kuh suh vwa-yazh tuh fass dü BYEHⁿ', ['volonte']),
  sent(1235, 'Il désire que son fils apprenne un métier.', 'He wants his son to learn a trade.', '/il de.ziʁ kə sɔ̃ fis a.pʁɛn œ̃ me.tje/', 'eel day-ZEER kuh sohⁿ feess a-PRENN uhⁿ may-TYAY', ['volonte']),
  sent(1236, 'Derrière un verbe de volonté, la forme passe toujours au subjonctif.', 'After a verb of wanting, the form always goes to the subjunctive.', '/dɛ.ʁjɛʁ œ̃ vɛʁb də vɔ.lɔ̃.te la fɔʁm pas tu.ʒuʁ o syb.ʒɔ̃k.tif/', 'deh-ryehr uhⁿ vehrb duh vo-lohⁿ-TAY la form pass too-zhoor oh süb-zhohⁿk-TEEF', ['regle'], ['flashcard'],
    rule('Que se passe-t-il après un verbe de volonté ?', 'Ex : Je veux que tu viennes. / Elle exige que tu signes.')),
  sent(1237, 'Vouloir, souhaiter, désirer, exiger, demander, préférer : six clés, une seule porte.', 'Vouloir, souhaiter, désirer, exiger, demander, préférer: six keys, one door.', '/vu.lwaʁ swɛ.te de.zi.ʁe ɛɡ.zi.ʒe də.mɑ̃.de pʁe.fe.ʁe si kle yn sœl pɔʁt/', 'voo-LWAR sweh-TAY day-zee-RAY eg-zee-ZHAY duh-mahⁿ-DAY pray-fay-RAY | see KLAY ün suhl PORT', ['regle'], ['flashcard'],
    rule('Quels verbes de volonté prennent le subjonctif ?', 'Ex : Je demande que tu répondes. / Je préfère que tu restes.')),
  sent(1238, 'Le professeur veut que nous finissions avant midi.', 'The teacher wants us to finish before noon.', '/lə pʁɔ.fɛ.sœʁ vø kə nu fi.ni.sjɔ̃ a.vɑ̃ mi.di/', 'luh pro-feh-SUHR veu kuh noo fee-nee-syohⁿ a-vahⁿ mee-DEE', ['volonte'], ['flashcard'],
    gap('Le professeur veut que nous ___ (finir) avant midi.', 'Vouloir que ouvre la porte : ils finissent, moins -ent, plus -ions.')),
  sent(1239, 'Mes parents préfèrent que je rentre avant minuit.', 'My parents would rather I came home before midnight.', '/me pa.ʁɑ̃ pʁe.fɛʁ kə ʒə ʁɑ̃tʁ a.vɑ̃ mi.nɥi/', 'may pa-RAHⁿ pray-FEHR kuh zhuh rahⁿtr a-vahⁿ mee-NWEE', ['volonte']),
];

/* ── ACT 3 · LA NÉCESSITÉ ───────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  chunk(1240, 'il faut que', 'it is necessary that', '/il fo kə/', 'eel FOH kuh', ['necessite', 'cle']),
  chunk(1241, 'il est nécessaire que', 'it is necessary that', '/i.lɛ ne.se.sɛʁ kə/', 'ee-leh nay-say-SEHR kuh', ['necessite', 'cle']),
  chunk(1242, 'il est important que', 'it is important that', '/i.lɛ.tɛ̃.pɔʁ.tɑ̃ kə/', 'ee-leh-tehⁿ-por-TAHⁿ kuh', ['necessite', 'cle']),
  chunk(1243, 'il est essentiel que', 'it is essential that', '/i.lɛ.te.sɑ̃.sjɛl kə/', 'ee-leh-tay-sahⁿ-SYEL kuh', ['necessite', 'cle']),
  chunk(1244, 'il vaut mieux que', 'it is better that', '/il vo mjø kə/', 'eel voh MYEU kuh', ['necessite', 'cle']),
  chunk(1245, 'il est temps que', 'it is time that', '/i.lɛ tɑ̃ kə/', 'ee-leh TAHⁿ kuh', ['necessite', 'cle']),
  sent(1246, 'Il est nécessaire que chaque parent signe le formulaire.', 'Every parent needs to sign the form.', '/i.lɛ ne.se.sɛʁ kə ʃak pa.ʁɑ̃ siɲ lə fɔʁ.my.lɛʁ/', 'ee-leh nay-say-SEHR kuh shak pa-rahⁿ SEEGN luh for-mü-LEHR', ['necessite'], FCVDR),
  sent(1247, 'Il est temps que nous prenions une décision.', 'It is time we made a decision.', '/i.lɛ tɑ̃ kə nu pʁə.njɔ̃ yn de.si.zjɔ̃/', 'ee-leh TAHⁿ kuh noo pruh-nyohⁿ ün day-see-ZYOHⁿ', ['necessite']),
  sent(1248, 'Il vaut mieux que tu leur téléphones toi-même.', 'You had better phone them yourself.', '/il vo mjø kə ty lœʁ te.le.fɔn twa.mɛm/', 'eel voh MYEU kuh tü luhr tay-lay-FON twa-MEM', ['necessite'], FCVDR),
  sent(1249, 'Il est essentiel que le dossier parte aujourd’hui.', 'It is essential that the file goes out today.', '/i.lɛ.te.sɑ̃.sjɛl kə lə do.sje paʁt o.ʒuʁ.dɥi/', 'ee-leh-tay-sahⁿ-SYEL kuh luh do-syay PART oh-zhoor-DWEE', ['necessite']),
  sent(1250, 'Il faut que j’aille à la banque avant qu’elle ferme.', 'I have to go to the bank before it closes.', '/il fo kə ʒaj a la bɑ̃k a.vɑ̃ kɛl fɛʁm/', 'eel foh kuh ZHAÏ a la BAHⁿK a-vahⁿ kehl FEHRM', ['necessite', 'lien'], FCVDR),
  sent(1251, 'Il est important que tu dormes avant le voyage.', 'It is important that you sleep before the journey.', '/i.lɛ.tɛ̃.pɔʁ.tɑ̃ kə ty dɔʁm a.vɑ̃ lə vwa.jaʒ/', 'ee-leh-tehⁿ-por-TAHⁿ kuh tü DORM a-vahⁿ luh vwa-YAZH', ['necessite']),
  sent(1252, 'Il est utile que tout le monde sache où sont les clés.', 'It is useful for everybody to know where the keys are.', '/i.lɛ.ty.til kə tu lə mɔ̃d saʃ u sɔ̃ le kle/', 'ee-leh-tü-TEEL kuh too luh mohⁿd SASH oo sohⁿ lay KLAY', ['necessite'], FCVDR),
  sent(1253, 'Il ne faut pas que tu oublies ton passeport.', 'You must not forget your passport.', '/il nə fo pa kə ty u.bli tɔ̃ pas.pɔʁ/', 'eel nuh foh PA kuh tü oo-BLEE tohⁿ pass-POR', ['necessite']),
  sent(1254, 'La nécessité se dit avec il : il faut, il est important, il vaut mieux.', 'Necessity is said with il: il faut, il est important, il vaut mieux.', '/la ne.se.si.te sə di a.vɛk il il fo i.lɛ.tɛ̃.pɔʁ.tɑ̃ il vo mjø/', 'la nay-say-see-TAY suh dee a-vehk EEL | eel FOH | ee-leh-tehⁿ-por-TAHⁿ | eel voh MYEU', ['regle'], ['flashcard'],
    rule('Comment reconnaît-on une expression de nécessité ?', 'Ex : Il est essentiel que tu viennes. / Il vaut mieux que tu attendes.')),
  sent(1255, 'Après une expression de nécessité, le verbe passe au subjonctif.', 'After an expression of necessity, the verb goes to the subjunctive.', '/a.pʁɛ.zyn ɛks.pʁɛ.sjɔ̃ də ne.se.si.te lə vɛʁb pas o syb.ʒɔ̃k.tif/', 'a-preh-zün ehks-preh-syohⁿ duh nay-say-see-TAY luh vehrb pass oh süb-zhohⁿk-TEEF', ['regle'], ['flashcard'],
    rule('Que fait une expression de nécessité au verbe qui suit ?', 'Ex : Il faut que tu saches. / Il est temps que nous partions.')),
  sent(1256, 'Il est important que vous arriviez à l’heure.', 'It is important that you arrive on time.', '/i.lɛ.tɛ̃.pɔʁ.tɑ̃ kə vu.za.ʁi.vje a lœʁ/', 'ee-leh-tehⁿ-por-TAHⁿ kuh voo-za-ree-VYAY a LUHR', ['necessite'], ['flashcard'],
    gap('Il est important que vous ___ (arriver) à l’heure.', 'Vous arrivez au présent, que vous arriviez au subjonctif : il manque un i.')),
  sent(1257, 'Il faudrait que nous parlions de tout ça calmement.', 'We ought to talk all this over calmly.', '/il fo.dʁɛ kə nu paʁ.ljɔ̃ də tu sa kal.mə.mɑ̃/', 'eel foh-DREH kuh noo par-lyohⁿ duh too sa kal-muh-MAHⁿ', ['necessite']),
];

/* ── ACT 4 · LE SENTIMENT ───────────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  chunk(1258, 'je suis content que', 'I am glad that', '/ʒə sɥi kɔ̃.tɑ̃ kə/', 'zhuh swee kohⁿ-TAHⁿ kuh', ['sentiment', 'cle']),
  chunk(1259, 'je suis triste que', 'I am sad that', '/ʒə sɥi tʁist kə/', 'zhuh swee TREEST kuh', ['sentiment', 'cle']),
  chunk(1260, 'je suis surpris que', 'I am surprised that', '/ʒə sɥi syʁ.pʁi kə/', 'zhuh swee sür-PREE kuh', ['sentiment', 'cle']),
  chunk(1261, 'je suis désolé que', 'I am sorry that', '/ʒə sɥi de.zɔ.le kə/', 'zhuh swee day-zo-LAY kuh', ['sentiment', 'cle']),
  chunk(1262, 'j’ai peur que', 'I am afraid that', '/ʒe pœʁ kə/', 'zhay PUHR kuh', ['sentiment', 'cle']),
  chunk(1263, 'je regrette que', 'I am sorry that', '/ʒə ʁə.ɡʁɛt kə/', 'zhuh ruh-GRET kuh', ['sentiment', 'cle']),
  chunk(1264, 'c’est dommage que', 'it is a pity that', '/sɛ dɔ.maʒ kə/', 'seh do-MAZH kuh', ['sentiment', 'cle']),
  sent(1265, 'Je suis content que tu aies enfin un logement.', 'I am glad you have somewhere to live at last.', '/ʒə sɥi kɔ̃.tɑ̃ kə ty ɛ ɑ̃.fɛ̃ œ̃ lɔʒ.mɑ̃/', 'zhuh swee kohⁿ-TAHⁿ kuh tü eh ahⁿ-fehⁿ uhⁿ lozh-MAHⁿ', ['sentiment'], FCVDR),
  sent(1266, 'Nous sommes tristes que vous partiez si vite.', 'We are sad that you are leaving so soon.', '/nu sɔm tʁist kə vu paʁ.tje si vit/', 'noo som TREEST kuh voo par-tyay see VEET', ['sentiment']),
  sent(1267, 'Je suis surprise qu’il ne dise rien.', 'I am surprised he is saying nothing.', '/ʒə sɥi syʁ.pʁiz kil nə diz ʁjɛ̃/', 'zhuh swee sür-PREEZ keel nuh deez RYEHⁿ', ['sentiment']),
  sent(1268, 'Je suis désolé que tu doives attendre si longtemps.', 'I am sorry you have to wait so long.', '/ʒə sɥi de.zɔ.le kə ty dwav a.tɑ̃dʁ si lɔ̃.tɑ̃/', 'zhuh swee day-zo-LAY kuh tü dwav a-tahⁿdr see lohⁿ-TAHⁿ', ['sentiment'], FCVDR),
  sent(1269, 'J’ai peur que le train soit en retard.', 'I am afraid the train is late.', '/ʒe pœʁ kə lə tʁɛ̃ swa ɑ̃ ʁə.taʁ/', 'zhay PUHR kuh luh trehⁿ swa ahⁿ ruh-TAR', ['sentiment']),
  sent(1270, 'Je regrette que nous ne puissions pas rester plus longtemps.', 'I am sorry we cannot stay any longer.', '/ʒə ʁə.ɡʁɛt kə nu nə pɥi.sjɔ̃ pa ʁɛs.te ply lɔ̃.tɑ̃/', 'zhuh ruh-GRET kuh noo nuh pwee-syohⁿ pa rehs-tay plü lohⁿ-TAHⁿ', ['sentiment']),
  sent(1271, 'C’est dommage que le musée ferme à cinq heures.', 'It is a pity the museum closes at five.', '/sɛ dɔ.maʒ kə lə my.ze fɛʁm a sɛ̃.kœʁ/', 'seh do-MAZH kuh luh mü-zay FEHRM a sehⁿ-KUHR', ['sentiment'], FCVDR),
  sent(1272, 'Ça m’étonne que personne ne réponde au téléphone.', 'It surprises me that nobody is answering the phone.', '/sa me.tɔn kə pɛʁ.sɔn nə ʁe.pɔ̃d o te.le.fɔn/', 'sa may-TON kuh pehr-son nuh ray-POHⁿD oh tay-lay-FON', ['sentiment']),
  sent(1273, 'Elle est fière que sa fille fasse ses études ici.', 'She is proud that her daughter is studying here.', '/ɛ.lɛ fjɛʁ kə sa fij fas se.ze.tyd i.si/', 'eh-leh FYEHR kuh sa feey FASS say-zay-tüd ee-SEE', ['sentiment']),
  sent(1274, 'Je suis ravi que vous veniez dîner samedi.', 'I am delighted you are coming to dinner on Saturday.', '/ʒə sɥi ʁa.vi kə vu və.nje di.ne sam.di/', 'zhuh swee ra-VEE kuh voo vuh-nyay dee-nay sam-DEE', ['sentiment']),
  sent(1275, 'Le sentiment porte sur un fait sûr, et il demande quand même le subjonctif.', 'A feeling is about something certain, and it still calls for the subjunctive.', '/lə sɑ̃.ti.mɑ̃ pɔʁt syʁ œ̃ fɛ syʁ e il də.mɑ̃d kɑ̃ mɛm lə syb.ʒɔ̃k.tif/', 'luh sahⁿ-tee-MAHⁿ port sür uhⁿ feh SÜR ay eel duh-mahⁿd kahⁿ MEM luh süb-zhohⁿk-TEEF', ['regle'], ['flashcard'],
    rule('Pourquoi le sentiment prend-il le subjonctif, même sur un fait sûr ?', 'Ex : Je suis content que tu sois là. Tu es là, et la forme change quand même.')),
  sent(1276, 'Content, triste, surpris, désolé, fier : après que, la forme change.', 'Content, triste, surpris, désolé, fier: after que, the form changes.', '/kɔ̃.tɑ̃ tʁist syʁ.pʁi de.zɔ.le fjɛʁ a.pʁɛ kə la fɔʁm ʃɑ̃ʒ/', 'kohⁿ-TAHⁿ TREEST sür-PREE day-zo-LAY FYEHR | a-preh kuh la form SHAHⁿZH', ['regle'], ['flashcard'],
    rule('Quels adjectifs de sentiment ouvrent la porte ?', 'Ex : Je suis triste que tu partes. / Elle est fière que tu réussisses.')),
  sent(1277, 'Je suis content que tu prennes des vacances.', 'I am glad you are taking a holiday.', '/ʒə sɥi kɔ̃.tɑ̃ kə ty pʁɛn de va.kɑ̃s/', 'zhuh swee kohⁿ-TAHⁿ kuh tü PRENN day va-KAHⁿSS', ['sentiment'], ['flashcard'],
    gap('Je suis content que tu ___ (prendre) des vacances.', 'Un sentiment ouvre la porte : ils prennent, moins -ent, plus -es.')),
];

/* ── ACT 5 · LE DOUTE ───────────────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  chunk(1278, 'je doute que', 'I doubt that', '/ʒə dut kə/', 'zhuh DOOT kuh', ['doute', 'cle']),
  chunk(1279, 'il est possible que', 'it is possible that', '/i.lɛ pɔ.sibl kə/', 'ee-leh po-SEEBL kuh', ['doute', 'cle']),
  chunk(1280, 'il se peut que', 'it may be that', '/il sə pø kə/', 'eel suh PEU kuh', ['doute', 'cle']),
  chunk(1281, 'il n’est pas sûr que', 'it is not certain that', '/il nɛ pa syʁ kə/', 'eel neh pa SÜR kuh', ['doute', 'cle']),
  chunk(1282, 'il semble que', 'it seems that', '/il sɑ̃bl kə/', 'eel SAHⁿBL kuh', ['doute', 'cle']),
  sent(1283, 'Je doute que cette clé ouvre la bonne porte.', 'I doubt this key opens the right door.', '/ʒə dut kə sɛt kle uvʁ la bɔn pɔʁt/', 'zhuh DOOT kuh seht klay OOVR la bon PORT', ['doute'], FCVDR),
  sent(1284, 'Il est possible que le colis arrive demain.', 'The parcel may arrive tomorrow.', '/i.lɛ pɔ.sibl kə lə kɔ.li a.ʁiv də.mɛ̃/', 'ee-leh po-SEEBL kuh luh ko-lee a-REEV duh-MEHⁿ', ['doute']),
  sent(1285, 'Il se peut que la salle soit déjà réservée.', 'The room may already be booked.', '/il sə pø kə la sal swa de.ʒa ʁe.zɛʁ.ve/', 'eel suh PEU kuh la sal swa day-zha ray-zehr-VAY', ['doute'], FCVDR),
  sent(1286, 'Il n’est pas certain que le vol parte à l’heure.', 'It is not certain that the flight leaves on time.', '/il nɛ pa sɛʁ.tɛ̃ kə lə vɔl paʁt a lœʁ/', 'eel neh pa sehr-TEHⁿ kuh luh vol PART a LUHR', ['doute']),
  sent(1287, 'Il semble que personne ne connaisse cette rue.', 'It seems that nobody knows this street.', '/il sɑ̃bl kə pɛʁ.sɔn nə kɔ.nɛs sɛt ʁy/', 'eel SAHⁿBL kuh pehr-son nuh ko-NESS seht RÜ', ['doute', 'semble']),
  sent(1288, 'Je doute qu’elle veuille déménager encore une fois.', 'I doubt she wants to move house again.', '/ʒə dut kɛl vœj de.me.na.ʒe ɑ̃.kɔ.ʁyn fwa/', 'zhuh DOOT kehl VUHY day-may-na-zhay ahⁿ-ko-rün FWA', ['doute']),
  sent(1289, 'Il est peu probable que nous finissions avant huit heures.', 'We are unlikely to finish before eight.', '/i.lɛ pø pʁɔ.babl kə nu fi.ni.sjɔ̃ a.vɑ̃ ɥi.tœʁ/', 'ee-leh peu pro-BABL kuh noo fee-nee-syohⁿ a-vahⁿ wee-TUHR', ['doute']),
  sent(1290, 'Elle doute que ce médicament fasse vraiment effet.', 'She doubts this medicine really works.', '/ɛl dut kə sə me.di.ka.mɑ̃ fas vʁɛ.mɑ̃.te.fɛ/', 'ehl DOOT kuh suh may-dee-ka-mahⁿ fass vreh-mahⁿ-tay-FEH', ['doute'], FCVDR),
  sent(1291, 'Il se peut qu’il pleuve pendant tout le week-end.', 'It may rain the whole weekend.', '/il sə pø kil plœv pɑ̃.dɑ̃ tu lə wi.kɛnd/', 'eel suh PEU keel PLUHV pahⁿ-dahⁿ too luh week-END', ['doute']),
  sent(1292, 'Le doute ouvre la porte, et la certitude la laisse fermée.', 'Doubt opens the door, and certainty leaves it shut.', '/lə dut uvʁ la pɔʁt e la sɛʁ.ti.tyd la lɛs fɛʁ.me/', 'luh doot OOVR la PORT ay la sehr-tee-TÜD la less fehr-MAY', ['regle'], ['flashcard'],
    rule('Qu’est-ce qui sépare le doute de la certitude, dans la forme ?', 'Ex : Je doute qu’il vienne. / Je suis sûr qu’il vient.')),
  sent(1293, 'Il est possible que prend le subjonctif, il est probable que ne le prend pas.', 'Il est possible que takes the subjunctive, il est probable que does not.', '/i.lɛ pɔ.sibl kə pʁɑ̃ lə syb.ʒɔ̃k.tif i.lɛ pʁɔ.babl kə nə lə pʁɑ̃ pa/', 'ee-leh po-SEEBL kuh prahⁿ luh süb-zhohⁿk-TEEF | ee-leh pro-BABL kuh nuh luh prahⁿ PA', ['regle', 'indicatif'], ['flashcard'],
    rule('Possible ou probable : lequel des deux ouvre la porte ?', 'Ex : Il est possible qu’il soit là. / Il est probable qu’il est là.')),
  sent(1294, 'Je doute que ce train parte à l’heure.', 'I doubt this train leaves on time.', '/ʒə dut kə sə tʁɛ̃ paʁt a lœʁ/', 'zhuh DOOT kuh suh trehⁿ PART a LUHR', ['doute'], ['flashcard'],
    gap('Je doute que ce train ___ (partir) à l’heure.', 'Douter que ouvre la porte : ils partent, moins -ent, plus -e.')),
  sent(1295, 'Nous doutons que la réunion serve à quelque chose.', 'We doubt the meeting is any use.', '/nu du.tɔ̃ kə la ʁe.y.njɔ̃ sɛʁv a kɛl.kə ʃoz/', 'noo doo-TOHⁿ kuh la ray-ü-nyohⁿ SEHRV a kehl-kuh SHOHZ', ['doute']),
];

/* ── ACT 6 · LA BASCULE ─────────────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  chunk(1296, 'je pense que', 'I think that', '/ʒə pɑ̃s kə/', 'zhuh PAHⁿSS kuh', ['indicatif', 'bascule']),
  chunk(1297, 'je ne pense pas que', 'I do not think that', '/ʒə nə pɑ̃s pa kə/', 'zhuh nuh pahⁿss PA kuh', ['doute', 'bascule']),
  chunk(1298, 'je crois que', 'I believe that', '/ʒə kʁwa kə/', 'zhuh KRWA kuh', ['indicatif', 'bascule']),
  chunk(1299, 'je ne crois pas que', 'I do not believe that', '/ʒə nə kʁwa pa kə/', 'zhuh nuh krwa PA kuh', ['doute', 'bascule']),
  chunk(1300, 'je suis sûr que', 'I am sure that', '/ʒə sɥi syʁ kə/', 'zhuh swee SÜR kuh', ['indicatif', 'bascule']),
  chunk(1301, 'je ne suis pas sûr que', 'I am not sure that', '/ʒə nə sɥi pa syʁ kə/', 'zhuh nuh swee pa SÜR kuh', ['doute', 'bascule']),
  sent(1302, 'Je pense que cette route est plus courte.', 'I think this road is shorter.', '/ʒə pɑ̃s kə sɛt ʁut ɛ ply kuʁt/', 'zhuh PAHⁿSS kuh seht root eh plü KOORT', ['indicatif', 'bascule'], FCVDR),
  sent(1303, 'Je ne pense pas que cette route soit plus courte.', 'I do not think this road is shorter.', '/ʒə nə pɑ̃s pa kə sɛt ʁut swa ply kuʁt/', 'zhuh nuh pahⁿss PA kuh seht root swa plü KOORT', ['doute', 'bascule'], FCVDR),
  sent(1304, 'Je crois que le magasin ouvre à neuf heures.', 'I think the shop opens at nine.', '/ʒə kʁwa kə lə ma.ɡa.zɛ̃ uvʁ a nœ.vœʁ/', 'zhuh KRWA kuh luh ma-ga-zehⁿ OOVR a nuh-VUHR', ['indicatif', 'bascule']),
  sent(1305, 'Je ne crois pas que le magasin ouvre le dimanche.', 'I do not think the shop opens on Sundays.', '/ʒə nə kʁwa pa kə lə ma.ɡa.zɛ̃ uvʁ lə di.mɑ̃ʃ/', 'zhuh nuh krwa PA kuh luh ma-ga-zehⁿ oovr luh dee-MAHⁿSH', ['doute', 'bascule', 'invisible']),
  sent(1306, 'Il est vrai que ce quartier a changé.', 'It is true that this neighbourhood has changed.', '/i.lɛ vʁɛ kə sə kaʁ.tje a ʃɑ̃.ʒe/', 'ee-leh VREH kuh suh kar-tyay a shahⁿ-ZHAY', ['indicatif', 'bascule']),
  sent(1307, 'Il n’est pas vrai que ce quartier soit dangereux.', 'It is not true that this neighbourhood is dangerous.', '/il nɛ pa vʁɛ kə sə kaʁ.tje swa dɑ̃.ʒʁø/', 'eel neh pa VREH kuh suh kar-tyay swa dahⁿ-ZHREU', ['doute', 'bascule'], FCVDR),
  sent(1308, 'Je suis sûr que la banque ferme à midi.', 'I am sure the bank closes at noon.', '/ʒə sɥi syʁ kə la bɑ̃k fɛʁm a mi.di/', 'zhuh swee SÜR kuh la bahⁿk FEHRM a mee-DEE', ['indicatif', 'bascule']),
  sent(1309, 'Je ne suis pas sûr que la banque soit ouverte à midi.', 'I am not sure the bank is open at noon.', '/ʒə nə sɥi pa syʁ kə la bɑ̃k swa.tu.vɛʁt a mi.di/', 'zhuh nuh swee pa SÜR kuh la bahⁿk swa-too-vehrt a mee-DEE', ['doute', 'bascule']),
  sent(1310, 'Je trouve que ce plat est trop salé.', 'I find this dish too salty.', '/ʒə tʁuv kə sə pla ɛ tʁo sa.le/', 'zhuh TROOV kuh suh pla eh troh sa-LAY', ['indicatif', 'bascule']),
  sent(1311, 'Je ne trouve pas que ce plat soit trop salé.', 'I do not find this dish too salty.', '/ʒə nə tʁuv pa kə sə pla swa tʁo sa.le/', 'zhuh nuh troov PA kuh suh pla swa troh sa-LAY', ['doute', 'bascule'], FCVDR),
  sent(1312, 'Je pense que dit un fait, donc indicatif. Je ne pense pas que ouvre un doute, donc subjonctif.', 'Je pense que states a fact, so indicative. Je ne pense pas que opens a doubt, so subjunctive.', '/ʒə pɑ̃s kə di œ̃ fɛ dɔ̃.kɛ̃.di.ka.tif ʒə nə pɑ̃s pa kə uvʁ œ̃ dut dɔ̃ syb.ʒɔ̃k.tif/', 'zhuh PAHⁿSS kuh dee uhⁿ FEH | zhuh nuh pahⁿss PA kuh oovr uhⁿ DOOT', ['regle', 'bascule'], ['flashcard'],
    rule('Pourquoi je pense que et je ne pense pas que ne prennent-ils pas la même forme ?', 'Ex : Je pense qu’il vient. / Je ne pense pas qu’il vienne.')),
  sent(1313, 'La négation change la clé, pas le verbe.', 'The negative changes the key, not the verb.', '/la ne.ɡa.sjɔ̃ ʃɑ̃ʒ la kle pa lə vɛʁb/', 'la nay-ga-syohⁿ SHAHⁿZH la KLAY pa luh VEHRB', ['regle', 'bascule'], ['flashcard'],
    rule('Qu’est-ce que la négation change, dans une phrase avec que ?', 'Ex : Je suis sûr qu’il part. / Je ne suis pas sûr qu’il parte.')),
  sent(1314, 'Je ne crois pas que ce film vaille la peine.', 'I do not think this film is worth it.', '/ʒə nə kʁwa pa kə sə film vaj la pɛn/', 'zhuh nuh krwa PA kuh suh feelm VAÏ la PENN', ['doute', 'bascule'], ['flashcard'],
    gap('Je ne crois pas que ce film ___ (valoir) la peine.', 'La négation ouvre la porte : valoir donne vaill- au subjonctif.')),
  sent(1315, 'Je pense que tu as raison, mais je ne suis pas sûr que ce soit la seule raison.', 'I think you are right, but I am not sure it is the only reason.', '/ʒə pɑ̃s kə ty a ʁɛ.zɔ̃ mɛ ʒə nə sɥi pa syʁ kə sə swa la sœl ʁɛ.zɔ̃/', 'zhuh pahⁿss kuh tü a reh-ZOHⁿ meh zhuh nuh swee pa SÜR kuh suh swa la suhl reh-ZOHⁿ', ['bascule']),
];

/* ── ACT 7 · POUR QUE, BIEN QUE ─────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  chunk(1316, 'pour que', 'so that', '/puʁ kə/', 'poor kuh', ['lien', 'but']),
  chunk(1317, 'afin que', 'in order that', '/a.fɛ̃ kə/', 'a-fehⁿ kuh', ['lien', 'but']),
  chunk(1318, 'bien que', 'although', '/bjɛ̃ kə/', 'byehⁿ kuh', ['lien', 'concession']),
  chunk(1319, 'quoique', 'although', '/kwa.kə/', 'KWA-kuh', ['lien', 'concession']),
  chunk(1320, 'de peur que', 'for fear that', '/də pœʁ kə/', 'duh PUHR kuh', ['lien', 'but']),
  sent(1321, 'Je te laisse la clé pour que tu puisses entrer.', 'I am leaving you the key so that you can get in.', '/ʒə tə lɛs la kle puʁ kə ty pɥis ɑ̃.tʁe/', 'zhuh tuh less la KLAY poor kuh tü PWEESS ahⁿ-TRAY', ['lien', 'but'], FCVDR),
  sent(1322, 'Nous partons tôt afin que les enfants dorment dans la voiture.', 'We are leaving early so that the children sleep in the car.', '/nu paʁ.tɔ̃ to a.fɛ̃ kə le.zɑ̃.fɑ̃ dɔʁm dɑ̃ la vwa.tyʁ/', 'noo par-tohⁿ TOH a-fehⁿ kuh lay-zahⁿ-fahⁿ DORM dahⁿ la vwa-TÜR', ['lien', 'but']),
  sent(1323, 'Bien que la salle soit petite, tout le monde tient.', 'Although the room is small, everybody fits.', '/bjɛ̃ kə la sal swa pə.tit tu lə mɔ̃d tjɛ̃/', 'byehⁿ kuh la sal swa puh-TEET too luh mohⁿd TYEHⁿ', ['lien', 'concession'], FCVDR),
  sent(1324, 'Quoique le travail soit dur, il ne se plaint jamais.', 'Although the work is hard, he never complains.', '/kwa.kə lə tʁa.vaj swa dyʁ il nə sə plɛ̃ ʒa.mɛ/', 'KWA-kuh luh tra-vaï swa DÜR eel nuh suh plehⁿ zha-MEH', ['lien', 'concession']),
  sent(1325, 'Elle range les papiers de peur que quelqu’un les perde.', 'She puts the papers away for fear somebody loses them.', '/ɛl ʁɑ̃ʒ le pa.pje də pœʁ kə kɛl.kœ̃ le pɛʁd/', 'ehl rahⁿzh lay pa-pyay duh PUHR kuh kehl-kuhⁿ lay PEHRD', ['lien', 'but']),
  sent(1326, 'Le bureau reste ouvert jusqu’à midi pour que chacun puisse passer.', 'The office stays open until noon so that everybody can come by.', '/lə by.ʁo ʁɛst u.vɛʁ ʒys.ka mi.di puʁ kə ʃa.kœ̃ pɥis pa.se/', 'luh bü-roh rest oo-VEHR zhüs-ka mee-dee poor kuh sha-kuhⁿ PWEESS pa-SAY', ['lien', 'but'], FCVDR),
  sent(1327, 'Bien qu’il ait quatre-vingts ans, il fait encore du vélo.', 'Although he is eighty, he still cycles.', '/bjɛ̃ ki.lɛ ka.tʁə.vɛ̃.zɑ̃ il fɛ ɑ̃.kɔʁ dy ve.lo/', 'byehⁿ kee-LEH ka-truh-vehⁿ-ZAHⁿ eel feh ahⁿ-kor dü vay-LOH', ['lien', 'concession']),
  sent(1328, 'Afin que rien ne se perde, note tout sur le tableau.', 'So that nothing gets lost, write everything on the board.', '/a.fɛ̃ kə ʁjɛ̃ nə sə pɛʁd nɔt tu syʁ lə ta.blo/', 'a-fehⁿ kuh ryehⁿ nuh suh PEHRD not too sür luh ta-BLOH', ['lien', 'but']),
  sent(1329, 'Quoiqu’elle vienne de loin, elle arrive toujours la première.', 'Although she comes from far away, she always arrives first.', '/kwa.kɛl vjɛn də lwɛ̃ ɛ.la.ʁiv tu.ʒuʁ la pʁə.mjɛʁ/', 'kwa-kehl VYENN duh lwehⁿ eh-la-reev too-zhoor la pruh-MYEHR', ['lien', 'concession']),
  sent(1330, 'Bien que et quoique disent le contraire de ce qu’on attend, et prennent le subjonctif.', 'Bien que and quoique say the opposite of what you expect, and take the subjunctive.', '/bjɛ̃ kə e kwa.kə diz lə kɔ̃.tʁɛʁ də sə kɔ̃.na.tɑ̃ e pʁɛn lə syb.ʒɔ̃k.tif/', 'byehⁿ kuh ay KWA-kuh deez luh kohⁿ-TREHR duh suh kohⁿ-na-TAHⁿ', ['regle', 'lien'], ['flashcard'],
    rule('Que font bien que et quoique, et quelle forme demandent-ils ?', 'Ex : Bien qu’il pleuve, nous sortons. / Quoiqu’il soit tard, elle travaille.')),
  sent(1331, 'Pour que et afin que donnent le but, et le but n’est pas encore atteint.', 'Pour que and afin que give the goal, and the goal has not been reached yet.', '/puʁ kə e a.fɛ̃ kə dɔn lə byt e lə byt nɛ pa.zɑ̃.kɔ.ʁa.tɛ̃/', 'poor kuh ay a-fehⁿ kuh don luh BÜT ay luh büt neh pa-zahⁿ-ko-ra-TEHⁿ', ['regle', 'lien'], ['flashcard'],
    rule('Pourquoi pour que et afin que prennent-ils le subjonctif ?', 'Ex : Je t’écris pour que tu saches. Tu ne sais pas encore.')),
  sent(1332, 'Je te prête ma voiture pour que tu ailles à la gare.', 'I am lending you my car so that you can get to the station.', '/ʒə tə pʁɛt ma vwa.tyʁ puʁ kə ty aj a la ɡaʁ/', 'zhuh tuh pret ma vwa-TÜR poor kuh tü AÏ a la GAR', ['lien', 'but'], ['flashcard'],
    gap('Je te prête ma voiture pour que tu ___ (aller) à la gare.', 'Pour que ouvre la porte : aller donne aill- au subjonctif.')),
  sent(1333, 'Bien que ce soit cher, cette machine dure vingt ans.', 'Although it is expensive, this machine lasts twenty years.', '/bjɛ̃ kə sə swa ʃɛʁ sɛt ma.ʃin dyʁ vɛ̃.tɑ̃/', 'byehⁿ kuh suh swa SHEHR seht ma-sheen dür vehⁿ-TAHⁿ', ['lien', 'concession']),
];

/* ── ACT 8 · AVANT QUE, JUSQU’À CE QUE ──────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  chunk(1334, 'avant que', 'before', '/a.vɑ̃ kə/', 'a-vahⁿ kuh', ['lien', 'temps']),
  chunk(1335, 'jusqu’à ce que', 'until', '/ʒys.ka sə kə/', 'zhüs-ka suh kuh', ['lien', 'temps']),
  chunk(1336, 'à condition que', 'provided that', '/a kɔ̃.di.sjɔ̃ kə/', 'a kohⁿ-dee-SYOHⁿ kuh', ['lien', 'condition']),
  chunk(1337, 'sans que', 'without', '/sɑ̃ kə/', 'sahⁿ kuh', ['lien', 'condition']),
  chunk(1338, 'pourvu que', 'as long as', '/puʁ.vy kə/', 'poor-VÜ kuh', ['lien', 'condition']),
  chunk(1339, 'à moins que', 'unless', '/a mwɛ̃ kə/', 'a MWEHⁿ kuh', ['lien', 'condition']),
  sent(1340, 'Attends ici jusqu’à ce que je revienne.', 'Wait here until I come back.', '/a.tɑ̃.zi.si ʒys.ka sə kə ʒə ʁə.vjɛn/', 'a-tahⁿ-zee-see zhüs-ka suh kuh zhuh ruh-VYENN', ['lien', 'temps'], FCVDR),
  sent(1341, 'Je veux bien t’aider, à condition que tu me préviennes la veille.', 'I am happy to help, provided you tell me the day before.', '/ʒə vø bjɛ̃ tɛ.de a kɔ̃.di.sjɔ̃ kə ty mə pʁe.vjɛn la vɛj/', 'zhuh veu byehⁿ teh-DAY a kohⁿ-dee-SYOHⁿ kuh tü muh pray-VYENN la VEY', ['lien', 'condition']),
  sent(1342, 'Il est sorti sans que personne s’en aperçoive.', 'He went out without anybody noticing.', '/i.lɛ sɔʁ.ti sɑ̃ kə pɛʁ.sɔn sɑ̃.na.pɛʁ.swav/', 'ee-leh sor-TEE sahⁿ kuh pehr-son sahⁿ-na-pehr-SWAV', ['lien', 'condition'], FCVDR),
  sent(1343, 'Pourvu que le train soit à l’heure, nous serons à Lille à midi.', 'As long as the train is on time, we will be in Lille at noon.', '/puʁ.vy kə lə tʁɛ̃ swa a lœʁ nu sə.ʁɔ̃.za lil a mi.di/', 'poor-VÜ kuh luh trehⁿ swa a LUHR noo suh-rohⁿ-za leel a mee-DEE', ['lien', 'condition']),
  sent(1344, 'Nous partirons demain, à moins qu’il neige.', 'We will leave tomorrow, unless it snows.', '/nu paʁ.ti.ʁɔ̃ də.mɛ̃ a mwɛ̃ kil nɛʒ/', 'noo par-tee-rohⁿ duh-MEHⁿ a MWEHⁿ keel NEZH', ['lien', 'condition']),
  sent(1345, 'Range la cuisine avant que les invités arrivent.', 'Tidy the kitchen before the guests arrive.', '/ʁɑ̃ʒ la kɥi.zin a.vɑ̃ kə le.zɛ̃.vi.te a.ʁiv/', 'rahⁿzh la kwee-ZEEN a-vahⁿ kuh lay-zehⁿ-vee-tay a-REEV', ['lien', 'temps'], FCVDR),
  sent(1346, 'On continue jusqu’à ce que tout soit clair.', 'We carry on until everything is clear.', '/ɔ̃ kɔ̃.ti.ny ʒys.ka sə kə tu swa klɛʁ/', 'ohⁿ kohⁿ-tee-NÜ zhüs-ka suh kuh too swa KLEHR', ['lien', 'temps']),
  sent(1347, 'Tu peux rester, à condition que tu fasses la vaisselle.', 'You can stay, provided you do the washing up.', '/ty pø ʁɛs.te a kɔ̃.di.sjɔ̃ kə ty fas la vɛ.sɛl/', 'tü peu res-TAY a kohⁿ-dee-SYOHⁿ kuh tü fass la veh-SEL', ['lien', 'condition']),
  sent(1348, 'Avant que prend le subjonctif, après que ne le prend pas.', 'Avant que takes the subjunctive, après que does not.', '/a.vɑ̃ kə pʁɑ̃ lə syb.ʒɔ̃k.tif a.pʁɛ kə nə lə pʁɑ̃ pa/', 'a-vahⁿ kuh prahⁿ luh süb-zhohⁿk-TEEF | a-preh kuh nuh luh prahⁿ PA', ['regle', 'lien'], ['flashcard'],
    rule('Avant que et après que prennent-ils la même forme ?', 'Ex : Avant qu’il parte, dis-lui. / Après qu’il est parti, on a fermé.')),
  sent(1349, 'Jusqu’à ce que, à condition que, sans que, pourvu que, à moins que : la fin est toujours que.', 'Jusqu’à ce que, à condition que, sans que, pourvu que, à moins que: they all end in que.', '/ʒys.ka sə kə a kɔ̃.di.sjɔ̃ kə sɑ̃ kə puʁ.vy kə a mwɛ̃ kə la fɛ̃ ɛ tu.ʒuʁ kə/', 'zhüs-ka suh KUH | a kohⁿ-dee-syohⁿ KUH | sahⁿ KUH | poor-vü KUH | a mwehⁿ KUH', ['regle', 'lien'], ['flashcard'],
    rule('Qu’ont en commun jusqu’à ce que, sans que et pourvu que ?', 'Ex : Sans que tu dises un mot, j’ai compris.')),
  sent(1350, 'Sors le chien avant qu’il fasse nuit.', 'Take the dog out before it gets dark.', '/sɔʁ lə ʃjɛ̃ a.vɑ̃ kil fas nɥi/', 'sor luh shyehⁿ a-vahⁿ keel FASS nwee', ['lien', 'temps'], ['flashcard'],
    gap('Sors le chien avant qu’il ___ (faire) nuit.', 'Avant que ouvre la porte : faire donne fass- au subjonctif.')),
  sent(1351, 'Sans que je dise un mot, elle a compris.', 'Without my saying a word, she understood.', '/sɑ̃ kə ʒə diz œ̃ mo ɛ.la kɔ̃.pʁi/', 'sahⁿ kuh zhuh deez uhⁿ MOH eh-la kohⁿ-PREE', ['lien', 'condition']),
];

/* ── ACT 9 · CE QUI NE LE PREND PAS ─────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  chunk(1352, 'j’espère que', 'I hope that', '/ʒɛs.pɛʁ kə/', 'zhehs-PEHR kuh', ['indicatif', 'cle']),
  chunk(1353, 'il me semble que', 'it seems to me that', '/il mə sɑ̃bl kə/', 'eel muh SAHⁿBL kuh', ['indicatif', 'cle']),
  chunk(1354, 'il est probable que', 'it is likely that', '/i.lɛ pʁɔ.babl kə/', 'ee-leh pro-BABL kuh', ['indicatif', 'cle']),
  chunk(1355, 'parce que', 'because', '/paʁs kə/', 'pars-kuh', ['indicatif', 'cle']),
  chunk(1356, 'après que', 'after', '/a.pʁɛ kə/', 'a-preh kuh', ['indicatif', 'cle']),
  chunk(1357, 'peut-être que', 'maybe', '/pø.tɛ.tʁə kə/', 'peu-TEHTR kuh', ['indicatif', 'cle']),
  sent(1358, 'J’espère que tout se passera bien.', 'I hope everything goes well.', '/ʒɛs.pɛʁ kə tu sə pa.sə.ʁa bjɛ̃/', 'zhehs-PEHR kuh too suh pa-suh-ra BYEHⁿ', ['indicatif'], FCVDR),
  sent(1359, 'Il me semble que cette adresse est fausse.', 'It seems to me that this address is wrong.', '/il mə sɑ̃bl kə sɛ.ta.dʁɛs ɛ fos/', 'eel muh SAHⁿBL kuh seh-ta-dress eh FOHSS', ['indicatif', 'semble'], FCVDR),
  sent(1360, 'Il est probable que le magasin ferme à sept heures.', 'The shop probably closes at seven.', '/i.lɛ pʁɔ.babl kə lə ma.ɡa.zɛ̃ fɛʁm a sɛ.tœʁ/', 'ee-leh pro-BABL kuh luh ma-ga-zehⁿ FEHRM a seh-TUHR', ['indicatif']),
  sent(1361, 'Nous sommes rentrés parce que la pluie tombait.', 'We came home because the rain was falling.', '/nu sɔm ʁɑ̃.tʁe paʁs kə la plɥi tɔ̃.bɛ/', 'noo som rahⁿ-TRAY pars-kuh la plwee tohⁿ-BEH', ['indicatif']),
  sent(1362, 'Après que les invités sont partis, nous avons rangé.', 'After the guests left, we tidied up.', '/a.pʁɛ kə le.zɛ̃.vi.te sɔ̃ paʁ.ti nu.za.vɔ̃ ʁɑ̃.ʒe/', 'a-preh kuh lay-zehⁿ-vee-tay sohⁿ par-TEE noo-za-vohⁿ rahⁿ-ZHAY', ['indicatif'], FCVDR),
  sent(1363, 'Peut-être que Karim connaît la réponse.', 'Maybe Karim knows the answer.', '/pø.tɛ.tʁə kə ka.ʁim kɔ.nɛ la ʁe.pɔ̃s/', 'peu-TEHTR kuh ka-reem ko-neh la ray-POHⁿSS', ['indicatif']),
  sent(1364, 'Il paraît que le loyer va encore augmenter.', 'Apparently the rent is going up again.', '/il pa.ʁɛ kə lə lwa.je va ɑ̃.kɔ.ʁoɡ.mɑ̃.te/', 'eel pa-REH kuh luh lwa-yay va ahⁿ-ko-rog-mahⁿ-TAY', ['indicatif']),
  sent(1365, 'Pendant que tu finis, je prépare le café.', 'While you finish, I will make the coffee.', '/pɑ̃.dɑ̃ kə ty fi.ni ʒə pʁe.paʁ lə ka.fe/', 'pahⁿ-dahⁿ kuh tü fee-NEE zhuh pray-par luh ka-FAY', ['indicatif'], FCVDR),
  sent(1366, 'Espérer, il me semble, il est probable : la chose est donnée pour vraie, donc indicatif.', 'Espérer, il me semble, il est probable: the thing is given as true, so indicative.', '/ɛs.pe.ʁe il mə sɑ̃bl i.lɛ pʁɔ.babl la ʃo.zɛ dɔ.ne puʁ vʁɛ dɔ̃.kɛ̃.di.ka.tif/', 'ehs-pay-RAY | eel muh SAHⁿBL | ee-leh pro-BABL | do-nay poor VREH', ['regle', 'indicatif'], ['flashcard'],
    rule('Pourquoi espérer que ne prend-il pas le subjonctif ?', 'Ex : J’espère qu’il viendra. Tu donnes la chose pour vraie.')),
  sent(1367, 'Il semble que prend le subjonctif, il me semble que ne le prend pas.', 'Il semble que takes the subjunctive, il me semble que does not.', '/il sɑ̃bl kə pʁɑ̃ lə syb.ʒɔ̃k.tif il mə sɑ̃bl kə nə lə pʁɑ̃ pa/', 'eel SAHⁿBL kuh prahⁿ luh süb-zhohⁿk-TEEF | eel muh SAHⁿBL kuh nuh luh prahⁿ PA', ['regle', 'semble'], ['flashcard'],
    rule('Quelle différence entre il semble que et il me semble que ?', 'Ex : Il semble que ce soit vrai. / Il me semble que c’est vrai.')),
  sent(1368, 'J’espère que tu viens samedi.', 'I hope you are coming on Saturday.', '/ʒɛs.pɛʁ kə ty vjɛ̃ sam.di/', 'zhehs-PEHR kuh tü vyehⁿ sam-DEE', ['indicatif'], ['flashcard'],
    gap('J’espère que tu ___ (venir) samedi.', 'Espérer que ne change rien : le verbe reste au présent de l’indicatif.')),
  sent(1369, 'Je sais que tu as raison, mais je voudrais que tu me le prouves.', 'I know you are right, but I would like you to prove it to me.', '/ʒə sɛ kə ty a ʁɛ.zɔ̃ mɛ ʒə vu.dʁɛ kə ty mə lə pʁuv/', 'zhuh seh kuh tü a reh-ZOHⁿ meh zhuh voo-dreh kuh tü muh luh PROOV', ['indicatif', 'volonte']),
];

/* ── ACT 10 · TRIER À FROID ─────────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1370, 'Il faut que nous rentrions avant la nuit.', 'We have to be home before dark.', '/il fo kə nu ʁɑ̃.tʁi.jɔ̃ a.vɑ̃ la nɥi/', 'eel foh kuh noo rahⁿ-tree-YOHⁿ a-vahⁿ la NWEE', ['necessite', 'tri'], FCVDR),
  sent(1371, 'J’espère que nous rentrerons avant la nuit.', 'I hope we get home before dark.', '/ʒɛs.pɛʁ kə nu ʁɑ̃.tʁə.ʁɔ̃ a.vɑ̃ la nɥi/', 'zhehs-PEHR kuh noo rahⁿ-truh-rohⁿ a-vahⁿ la NWEE', ['indicatif', 'tri'], FCVDR),
  sent(1372, 'Je suis heureux que tu aies ce poste.', 'I am happy that you have this job.', '/ʒə sɥi ø.ʁø kə ty ɛ sə pɔst/', 'zhuh swee eu-REU kuh tü eh suh POST', ['sentiment', 'tri'], FCVDR),
  sent(1373, 'Je crois que tu as ce poste.', 'I think you have this job.', '/ʒə kʁwa kə ty a sə pɔst/', 'zhuh KRWA kuh tü a suh POST', ['indicatif', 'tri'], FCVDR),
  sent(1374, 'Bien que la route soit longue, nous partons à midi.', 'Although the road is long, we leave at noon.', '/bjɛ̃ kə la ʁut swa lɔ̃ɡ nu paʁ.tɔ̃.za mi.di/', 'byehⁿ kuh la root swa LOHⁿG noo par-tohⁿ-za mee-DEE', ['lien', 'tri'], FCVDR),
  sent(1375, 'Parce que la route est longue, nous partons à midi.', 'Because the road is long, we leave at noon.', '/paʁs kə la ʁu.tɛ lɔ̃ɡ nu paʁ.tɔ̃.za mi.di/', 'pars-kuh la roo-teh LOHⁿG noo par-tohⁿ-za mee-DEE', ['indicatif', 'tri'], FCVDR),
  sent(1376, 'Il est possible que la salle soit libre jeudi.', 'The room may be free on Thursday.', '/i.lɛ pɔ.sibl kə la sal swa libʁ ʒø.di/', 'ee-leh po-SEEBL kuh la sal swa leebr zheu-DEE', ['doute', 'tri']),
  sent(1377, 'Il est probable que la salle est libre jeudi.', 'The room is probably free on Thursday.', '/i.lɛ pʁɔ.babl kə la sa.lɛ libʁ ʒø.di/', 'ee-leh pro-BABL kuh la sa-leh leebr zheu-DEE', ['indicatif', 'tri']),
  sent(1378, 'Avant que le film commence, éteins ton téléphone.', 'Before the film starts, switch off your phone.', '/a.vɑ̃ kə lə film kɔ.mɑ̃s e.tɛ̃ tɔ̃ te.le.fɔn/', 'a-vahⁿ kuh luh feelm ko-MAHⁿSS ay-tehⁿ tohⁿ tay-lay-FON', ['lien', 'tri']),
  sent(1379, 'Après que le film a commencé, personne ne parle plus.', 'After the film has started, nobody talks any more.', '/a.pʁɛ kə lə film a kɔ.mɑ̃.se pɛʁ.sɔn nə paʁl ply/', 'a-preh kuh luh feelm a ko-mahⁿ-SAY pehr-son nuh parl PLÜ', ['indicatif', 'tri']),
  sent(1380, 'Trois questions : y a-t-il un que, quelle expression est devant, et demande-t-elle le subjonctif ?', 'Three questions: is there a que, which expression is in front, and does it call for the subjunctive?', '/tʁwa kɛs.tjɔ̃ i a til œ̃ kə kɛ.lɛks.pʁɛ.sjɔ̃ ɛ də.vɑ̃ e də.mɑ̃d tɛl lə syb.ʒɔ̃k.tif/', 'trwa kehs-TYOHⁿ | ee a-teel uhⁿ KUH | kehl ehks-preh-syohⁿ eh duh-VAHⁿ', ['regle', 'tri'], ['flashcard'],
    rule('Quel est le test en trois questions devant une forme inconnue ?', 'Ex : Bien que la route soit longue. Un que, bien que devant, donc subjonctif.')),
  sent(1381, 'Une clé qui n’ouvre pas laisse le verbe à l’indicatif.', 'A key that does not open leaves the verb in the indicative.', '/yn kle ki nuvʁ pa lɛs lə vɛʁb a lɛ̃.di.ka.tif/', 'ün KLAY kee noovr PA less luh vehrb a lehⁿ-dee-ka-TEEF', ['regle', 'indicatif'], ['flashcard'],
    rule('Que se passe-t-il quand l’expression devant que n’ouvre pas ?', 'Ex : J’espère que tu viens. / Parce que tu viens, je reste.')),
  sent(1382, 'Il est probable que le bureau est fermé demain.', 'The office is probably closed tomorrow.', '/i.lɛ pʁɔ.babl kə lə by.ʁo ɛ fɛʁ.me də.mɛ̃/', 'ee-leh pro-BABL kuh luh bü-roh eh fehr-MAY duh-MEHⁿ', ['indicatif', 'tri'], ['flashcard'],
    gap('Il est probable que le bureau ___ (être) fermé demain.', 'Probable ne change rien : le verbe reste à l’indicatif, est.')),
];

/* ── ACT 11 · ÉCRIRE AVEC LES DÉCLENCHEURS ──────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1383, 'Je voudrais que nous fixions une date cette semaine.', 'I would like us to fix a date this week.', '/ʒə vu.dʁɛ kə nu fik.sjɔ̃ yn dat sɛt sə.mɛn/', 'zhuh voo-DREH kuh noo feek-syohⁿ ün dat seht suh-MEN', ['volonte', 'message'], FCVDR),
  sent(1384, 'J’aimerais que chacun donne son avis avant vendredi.', 'I would like everybody to give an opinion before Friday.', '/ʒɛm.ʁɛ kə ʃa.kœ̃ dɔn sɔ̃.na.vi a.vɑ̃ vɑ̃.dʁə.di/', 'zhehm-REH kuh sha-kuhⁿ DON sohⁿ-na-vee a-vahⁿ vahⁿ-druh-DEE', ['volonte', 'message']),
  sent(1385, 'Il faut que quelqu’un s’occupe des boissons.', 'Somebody has to take care of the drinks.', '/il fo kə kɛl.kœ̃ sɔ.kyp de bwa.sɔ̃/', 'eel foh kuh kehl-kuhⁿ so-KÜP day bwa-SOHⁿ', ['necessite', 'message'], FCVDR),
  sent(1386, 'Je suis content que vous soyez tous disponibles.', 'I am glad you are all free.', '/ʒə sɥi kɔ̃.tɑ̃ kə vu swa.je tus dis.pɔ.nibl/', 'zhuh swee kohⁿ-TAHⁿ kuh voo swa-yay toos dees-po-NEEBL', ['sentiment', 'message']),
  sent(1387, 'J’ai peur que la salle soit trop petite pour quinze personnes.', 'I am afraid the room is too small for fifteen people.', '/ʒe pœʁ kə la sal swa tʁo pə.tit puʁ kɛ̃z pɛʁ.sɔn/', 'zhay PUHR kuh la sal swa troh puh-TEET poor kehⁿz pehr-SON', ['sentiment', 'message']),
  sent(1388, 'Bien que le budget soit serré, nous pouvons louer des chaises.', 'Although the budget is tight, we can hire chairs.', '/bjɛ̃ kə lə byd.ʒɛ swa sɛ.ʁe nu pu.vɔ̃ lwe de ʃɛz/', 'byehⁿ kuh luh büd-zheh swa seh-RAY noo poo-vohⁿ lway day SHEHZ', ['lien', 'message'], FCVDR),
  sent(1389, 'Pour que tout soit prêt, arrivons une heure avant.', 'So that everything is ready, let us arrive an hour early.', '/puʁ kə tu swa pʁɛ a.ʁi.vɔ̃.zy.nœʁ a.vɑ̃/', 'poor kuh too swa PREH a-ree-vohⁿ-zü-nuhr a-VAHⁿ', ['lien', 'message']),
  sent(1390, 'Je doute que le traiteur puisse livrer un samedi.', 'I doubt the caterer can deliver on a Saturday.', '/ʒə dut kə lə tʁɛ.tœʁ pɥis li.vʁe œ̃ sam.di/', 'zhuh DOOT kuh luh treh-tuhr PWEESS lee-vray uhⁿ sam-DEE', ['doute', 'message'], FCVDR),
  sent(1391, 'J’espère que tout le monde pourra venir.', 'I hope everybody can come.', '/ʒɛs.pɛʁ kə tu lə mɔ̃d pu.ʁa və.niʁ/', 'zhehs-PEHR kuh too luh mohⁿd poo-ra vuh-NEER', ['indicatif', 'message']),
  sent(1392, 'Je pense que la salle du haut est plus pratique.', 'I think the upstairs room is more practical.', '/ʒə pɑ̃s kə la sal dy o ɛ ply pʁa.tik/', 'zhuh PAHⁿSS kuh la sal dü oh eh plü pra-TEEK', ['indicatif', 'message']),
  sent(1393, 'Avant que vous répondiez, lisez bien les dates.', 'Before you answer, read the dates carefully.', '/a.vɑ̃ kə vu ʁe.pɔ̃.dje li.ze bjɛ̃ le dat/', 'a-vahⁿ kuh voo ray-pohⁿ-DYAY lee-zay byehⁿ lay DAT', ['lien', 'message']),
  sent(1394, 'Je ne pense pas que le samedi convienne à tout le monde.', 'I do not think Saturday suits everybody.', '/ʒə nə pɑ̃s pa kə lə sam.di kɔ̃.vjɛn a tu lə mɔ̃d/', 'zhuh nuh pahⁿss PA kuh luh sam-dee kohⁿ-VYENN a too luh MOHⁿD', ['bascule', 'message']),
  sent(1395, 'Dans un message, change de clé : volonté, nécessité, sentiment, doute, et un lien.', 'In a message, change key: will, necessity, feeling, doubt, and one connector.', '/dɑ̃.zœ̃ me.saʒ ʃɑ̃ʒ də kle vɔ.lɔ̃.te ne.se.si.te sɑ̃.ti.mɑ̃ dut e œ̃ ljɛ̃/', 'dahⁿ-zuhⁿ may-SAZH shahⁿzh duh KLAY | vo-lohⁿ-TAY | nay-say-see-TAY | DOOT', ['regle', 'message'], ['flashcard'],
    rule('Combien de clés différentes vises-tu dans un message ?', 'Ex : Il faut que, je voudrais que, je suis content que, bien que.')),
  sent(1396, 'Relis chaque que : l’expression devant lui décide de la forme.', 'Reread every que: the expression in front of it decides the form.', '/ʁə.li ʃak kə lɛks.pʁɛ.sjɔ̃ də.vɑ̃ lɥi de.sid də la fɔʁm/', 'ruh-LEE shak KUH lehks-preh-syohⁿ duh-vahⁿ lwee day-SEED duh la FORM', ['regle', 'message'], ['flashcard'],
    rule('Que fais-tu quand tu relis ton message ?', 'Ex : J’espère que tu viens. Espérer n’ouvre pas, donc viens.')),
  sent(1397, 'Il faut que nous sachions le nombre exact avant jeudi.', 'We have to know the exact number before Thursday.', '/il fo kə nu sa.ʃjɔ̃ lə nɔ̃.bʁɛɡ.zakt a.vɑ̃ ʒø.di/', 'eel foh kuh noo sa-shyohⁿ luh nohⁿ-breg-ZAKT a-vahⁿ zheu-DEE', ['necessite', 'message'], ['flashcard'],
    gap('Il faut que nous ___ (savoir) le nombre exact avant jeudi.', 'Il faut que ouvre la porte : savoir donne sach- au subjonctif.')),
  sent(1398, 'Merci de me répondre avant que je réserve.', 'Please answer me before I book.', '/mɛʁ.si də mə ʁe.pɔ̃dʁ a.vɑ̃ kə ʒə ʁe.zɛʁv/', 'mehr-see duh muh ray-POHⁿDR a-vahⁿ kuh zhuh ray-ZEHRV', ['lien', 'message']),
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
 *  Six readings, one each in acts 1, 3, 6, 8, 9 and 11. They live here so the
 *  reading, the drills and the quiz cannot drift apart. `reading` prose is
 *  exempt from the 45-word density cap (PASSAGE_SECTIONS).
 * ══════════════════════════════════════════════════════════════════════════ */

export const READING_CLE =
  "Vendredi soir, dans la cuisine d'une colocation à Rennes. Quatre personnes, un tableau blanc, et un déménagement dimanche. Inès écrit la première ligne : « Il faut que le camion soit rendu lundi matin. » Puis la deuxième : « Je veux que chacun vide sa chambre samedi soir. » Sami relit et ajoute la sienne : « Je suis content que Laure nous prête sa remorque. » Laure sourit et pose une condition : « Bien que la remorque soit vieille, elle tient. Roulez doucement. » Théo, lui, doute de tout : « Je doute que nous finissions dimanche. » Inès écrit une dernière ligne, et c'est la seule qui change de forme : « J'espère que tout se passe bien. » Cinq phrases, cinq fois le mot « que », et pourtant la dernière ne ressemble pas aux autres. Ce n'est pas le verbe qui a changé. C'est ce qui est écrit devant.";

/** Which line of READING_CLE opens the door, and which does not. */
export const CLE_OUVRE = ['il faut que', 'je veux que', 'je suis content que', 'bien que', 'je doute que'] as const;
export const CLE_N_OUVRE_PAS = ['j’espère que'] as const;

export const READING_NECESSITE =
  "Le règlement affiché à l'entrée de la salle des fêtes de Saint-Malo tient en huit lignes. « Il est nécessaire que chaque association signe le registre à son arrivée. Il est important que les sorties restent libres pendant toute la soirée. Il faut que la cuisine soit rendue propre avant minuit. Il vaut mieux que vous préveniez le gardien si vous dépassez vingt-trois heures. » En bas, quelqu'un a ajouté une phrase au crayon : « Il est temps que la mairie remplace le four. » Karim, qui prépare le repas de son club, lit tout deux fois. Il remarque une chose : chaque ligne commence par « il », et ce « il » ne désigne personne. Ce n'est ni le gardien ni la mairie. C'est la nécessité elle-même, et après elle, chaque verbe change de forme : signe, restent, soit, préveniez, remplace. Cinq verbes, une seule raison.";

export const READING_BASCULE =
  "Deux collègues sortent d'une réunion, à Liège. « Je pense que la nouvelle salle est trop petite », dit Awa. Marc n'est pas d'accord. « Moi, je ne pense pas qu'elle soit trop petite. Nous étions quinze et il restait des chaises. » Awa insiste. « Je suis sûre que nous serons vingt en mars. » Marc hausse les épaules. « Je ne suis pas sûr que nous soyons vingt. Trois personnes partent en formation. » Ils s'arrêtent devant l'ascenseur. Awa relit ses notes et sourit, parce qu'elle vient de voir quelque chose. Les quatre phrases parlent du même sujet et du même verbe. Deux disent « est » et « serons », deux disent « soit » et « soyons ». Entre les deux, rien n'a bougé dans la phrase, sauf deux petits mots : « ne » et « pas ». La négation n'a pas changé le verbe. Elle a changé la clé.";

/** The four lines of READING_BASCULE, as the annotation mission marks them. */
export const BASCULE_INDICATIF = ['est', 'serons'] as const;
export const BASCULE_SUBJONCTIF = ['soit', 'soyons'] as const;

export const READING_CONDITION =
  "Une note laissée sur la table de la cuisine, dans un gîte des Vosges. « Salut, je pars tôt. Fermez bien la porte avant que le vent l'ouvre pendant la nuit. Laissez le chauffage en marche jusqu'à ce que la dernière personne parte : la tuyauterie gèle vite ici. Vous pouvez garder les clés jusqu'à lundi, à condition que vous me préveniez par message. Le voisin passera peut-être ; il entre parfois sans que personne s'en aperçoive, ne vous inquiétez pas. Pourvu que la route soit dégagée, je serai de retour mardi. À moins qu'il neige encore, bien sûr. » En bas de la note, une dernière ligne, écrite plus vite : « Après que vous serez partis, je ferai le ménage moi-même. » Six expressions de temps et de condition, six subjonctifs, et une septième qui n'en est pas un.";

export const READING_INDICATIF =
  "Dans un forum de discussion sur le logement, quelqu'un a posé une question sur les loyers. Les réponses arrivent. « J'espère que les prix vont baisser cette année. » « Il me semble que le marché est déjà plus calme qu'en janvier. » « Il est probable que la nouvelle loi change quelque chose, mais personne ne sait quand. » « Il paraît que les agences refusent des dossiers tous les jours. » Puis une réponse plus prudente : « Il semble que les prix aient encore augmenté dans le centre. » Et une dernière : « Peut-être que la banlieue reste la seule solution. » Six messages, six fois le mot « que », et un seul subjonctif dans le lot. Le piège est au milieu : « il semble que » ouvre la porte, et « il me semble que » ne l'ouvre pas. Un mot de deux lettres fait toute la différence.";

/** The one subjunctive in READING_INDICATIF, and the five decoys around it. */
export const INDICATIF_SUBJONCTIF = ['aient augmenté'] as const;
export const INDICATIF_INDICATIF = ['vont', 'est', 'change', 'refusent', 'reste'] as const;

export const READING_MESSAGE =
  "Salut à tous, je reprends l'organisation du pot de départ de Nadia. Il faut que nous réservions la salle du haut avant vendredi, sinon le service des sports la prend. Je voudrais que chacun me dise s'il vient, même si c'est pour dire non : j'ai besoin d'un chiffre. Je suis content que Malik s'occupe de la musique, ça m'enlève un souci. Bien que le budget soit serré, nous pouvons louer dix chaises de plus, et ça tiendra. Je doute que le traiteur accepte une commande le samedi, donc je vais appeler la boulangerie à la place. J'espère que tout le monde pourra passer, même une demi-heure. Avant que vous répondiez, regardez bien la date : c'est le vendredi vingt et un, pas le vingt-huit. Merci, et dites-moi vite. Inès.";

/** The model message's own key changes, for the task's grader notes and for
 *  the act 11 reading questions. Six triggers, five of them subjunctive. */
export const MESSAGE_CLES: readonly { cle: string; forme: string }[] = [
  { cle: 'il faut que', forme: 'réservions' },
  { cle: 'je voudrais que', forme: 'dise' },
  { cle: 'je suis content que', forme: 's’occupe' },
  { cle: 'bien que', forme: 'soit' },
  { cle: 'je doute que', forme: 'accepte' },
  { cle: 'j’espère que', forme: 'pourra, à l’indicatif' },
];
