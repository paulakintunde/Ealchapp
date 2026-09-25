// b1.16.l1 « Subjonctif ou infinitif » — the authored corpus, the imports and
// the citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top of
// B1-BUILD-PLAYBOOK.md.
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
//   THE SAME-SUBJECT RULE, AND NOTHING ELSE.
//
//   1. THE GESTURE. Before choosing a form, count the subjects. Two subjects
//      open « que » and take the subjunctive; one subject closes the door and
//      runs straight on to an infinitive.
//        Je veux partir.            one subject
//        Je veux que tu partes.     two subjects
//
//   2. THE THREE ROUTES INTO AN INFINITIVE. A bare one after vouloir,
//      préférer, souhaiter, espérer and aimer; `de` after être content de,
//      avoir peur de, regretter de, oublier de, éviter de and il est
//      important de; `à` after réussir à, arriver à, hésiter à, apprendre à
//      and continuer à. The preposition is not decoration: leaving it out is
//      the second commonest error in the lesson after keeping « que ».
//
//   3. THE CONJUNCTION PAIRS, which is where the marks are lost:
//        pour que + subj        / pour + inf
//        avant que + subj       / avant de + inf
//        sans que + subj        / sans + inf
//        afin que + subj        / afin de + inf
//        à condition que + subj / à condition de + inf
//
//   4. THE FOUR WITH NO INFINITIVE FORM AT ALL: bien que, quoique, jusqu'à ce
//      que and pourvu que. « que » is compulsory whatever the subject, and
//      that is what the « presque » in the reframe is holding open.
//
//   5. `IL FAUT` BOTH WAYS. « Il faut partir » names nobody; « il faut que tu
//      partes » names somebody. Same for il vaut mieux and il est important.
//
//   6. THE ANGLOPHONE TRAP THIS LESSON EXISTS TO KILL. English says « I want
//      you to go », so a learner writes « je veux toi partir », « je veux que
//      je parte » or « je veux toi de partir ». English also says « before
//      leaving » with no subject at all, which is why « avant de » feels like
//      a translation and « avant que » feels like an extra.
//
//   NOT OWNED HERE, AND SAID SO ON THE CARDS:
//
//   HOW THE SUBJUNCTIVE IS BUILT IS b1.14's. This lesson assumes every form
//   and never teaches one. b1.14's reframe is IMPORTED, not retyped, and is
//   quoted on the act 1 deck and in act 9's hacks.
//
//   WHICH EXPRESSIONS TAKE THE SUBJUNCTIVE IS b1.15's. Triggers are used
//   freely as carriers, and the lesson never presents an inventory of them.
//   Wherever a learner could read a list into a card, the card says so.
//
//   THE PAST SUBJUNCTIVE AND THE IMPERFECT SUBJUNCTIVE are out of B1 entirely
//   and appear in no authored row.
//
//   THE PAST INFINITIVE (« avant d'avoir signé », « regretter d'avoir dit »)
//   is out of this lesson: one reused seed row carries it (fr.b2.maison.024,
//   « regrettent de ne pas avoir fait ») and it is never named, never drilled
//   and never in a deck tranche.
//
//   « ESPÉRER QUE » TAKES THE INDICATIVE, not the subjunctive, so espérer
//   appears in this lesson ON THE INFINITIVE SIDE ONLY. It is the one verb in
//   the act 2 set whose two-subject shape is not a subjunctive, and putting
//   it on that side would teach a false form. See open question 3.
//
// QUOTED, NEVER TAUGHT (imported, never retyped):
//
//   b1.14  REFRAME (the subjunctive comes out of a form you already say).
//          Act 1's deck and act 9's hacks, where the learner is told the form
//          itself is not this lesson's problem.
//
// LEANED ON: b1.14 (every subjunctive form used here), b1.15 (the trigger
// inventory, assumed known), a2.13 (pouvoir, vouloir, devoir), a2.02 (aller,
// venir), a2.15 (prendre, mettre), b1.09 (polite requests, where « il
// faudrait » comes from).
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME: `opinions-et-avis` (fondations, a2-b2). It already exists, so
//     nothing is created at import. Ids are `fr.b1.opinions-et-avis.NNN`.
//  2. POSTGRES WAS PROBED 2026-09-25 (orchestrator). The theme holds 295 rows
//     in all, 115 of them `fr.b1.*` at 001-115, the highest number anywhere in
//     the theme is 132, and there is NOTHING at or above 900. **Never author
//     below 1000 in this theme.**
//  3. ID BLOCK: b1.16 owns `.1400`-`.1599` and nothing else. Used here:
//     `.1400`-`.1591`, in eleven act blocks, 192 rows. 1000-1199 is b1.14's
//     and 1200-1399 is b1.15's; neither is touched, and 1592-1599 is left
//     free inside this block.
//  4. THE THEME HOLDS ZERO SEED ROWS. `opinions-et-avis` is absent from
//     seed.json's `items` entirely, so not one row of this theme can be named
//     by a section today: `src()` resolves against the seed and would throw.
//     Every reused row in §F therefore comes from ANOTHER theme.
//  5. SEED READ 2026-09-25. Every reused id in §F was read out of seed.json
//     and carries its French in a trailing comment, so nothing here needs
//     seed.json opened again. Seed-checked only, DB check pending at import.
//  6. RESPELLINGS SPELLED FOR THE NASAL CHECKER rather than for the ear:
//     `ZHEMM` (j'aime), `MEMM` (même), `TRAMM` (tram), `PROBLEMM` (problème)
//     and `SEMM` (sème) double the consonant so that `nasal-convention` does
//     not read a single vowel plus m as an unmarked nasal vowel. In every one
//     of them the consonant really is pronounced, so the respelling is also
//     right for the ear. `PRENN`, `VYENN` and `DONN` follow b1.14's precedent
//     for the same reason. Everything else is spelled for the ear.
//  7. NO U+203F anywhere: a liaison consonant moves onto the next syllable
//     (« lay-zahⁿ-FAHⁿ » for les enfants, « sohⁿ-nay-KEEP » for son équipe).
//  8. NO ROW DUPLICATES A b1.14 AUTHORED ROW. b1.14's carrier set is il faut
//     que, je veux que, je suis content que, bien que and avant que; where
//     this lesson needs one of those it pairs it with its infinitive twin,
//     which b1.14 never wrote.
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
  id: 'b1.16',
  seq: 16,
  title: 'Subjunctive or Infinitive',
  sub: 'Subjonctif ou infinitif',
  canDo: 'Can choose between que plus the subjunctive and a plain infinitive by counting the subjects, use the right preposition on the infinitive route, and handle the conjunction pairs and the four conjunctions that have no infinitive form',
  prereqUnitIds: ['b1.14', 'b1.15'],
} as const;

export const LESSON_ID = 'b1.16.l1';
export const THEME = 'opinions-et-avis';
export const LEVEL = 'b1' as const;

/** The whole block, claimed in B1-BUILD-LOG.md. Nothing is authored outside
 *  it, and nothing is authored below 1000: Postgres holds 001-132. */
export const ID_RANGES = [[1400, 1599]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A2 citations use the house English trail label, resolved through `unitRef`
 *  from the shipped `unit.seq`, never typed and never the raw id. b1.* units
 *  are not rows in the seed yet, so they are labelled in French from the plan
 *  until they are.
 * ══════════════════════════════════════════════════════════════════════════ */

export const FORM_UNIT = 'b1.14';
export const TRIGGERS_UNIT = 'b1.15';
export const POLI_UNIT = 'b1.09';
export const ALLER_UNIT = 'a2.02';
export const MODAUX_UNIT = 'a2.13';
export const PRENDRE_UNIT = 'a2.15';

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

export const FORM_REF = refFr(FORM_UNIT);
export const TRIGGERS_REF = refFr(TRIGGERS_UNIT);
export const POLI_REF = refFr(POLI_UNIT);
export const ALLER_REF = unitRef(ALLER_UNIT);
export const MODAUX_REF = unitRef(MODAUX_UNIT);
export const PRENDRE_REF = unitRef(PRENDRE_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATION, IMPORTED
 *
 *  b1.14 named this lesson as the owner of the infinitive contrast and left
 *  it a reframe to quote. It is French, so it is quoted as it stands and
 *  never retyped.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B114_REFRAME, REFRAME_EN as B114_REFRAME_EN } from './subjonctif-formation-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  COMPTER LES SUJETS. The whole lesson is one gesture done before any form
 *  is chosen: look at who acts on the left of the sentence and who acts on
 *  the right, and count. Two people, two clauses, and « que » is the hinge
 *  between them. One person, one clause, and the second verb never gets a
 *  subject of its own, so it stays in the infinitive.
 *
 *  The image across the eleven chapter pictures is TWO SHAPES OR ONE: a pair
 *  of things facing each other across a small gap, against a single unbroken
 *  thing running straight through. It is NOT a metaphor of difficulty, of
 *  formality or of length: the infinitive is not the easy road and the
 *  subjunctive is not the polite one. It is a count.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Compte les sujets : deux sujets demandent que, un seul se passe presque toujours de que.';
export const REFRAME_EN = 'Count the subjects: two subjects call for que, and one subject almost always does without it.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Même sujet, infinitif. Sujets différents, subjonctif.',
    why: 'It is the rule stated as an absolute, and act 8 is built on the four conjunctions where it is false: bien que, quoique, jusqu’à ce que and pourvu que keep « que » with one subject and have no infinitive form at all. A learner holding it as an absolute writes « bien qu’être fatigué ». The « presque » in the chosen line is exactly the room act 8 needs.',
  },
  {
    text: 'Le français n’aime pas répéter le sujet.',
    why: 'Elegant, memorable and untestable, and it predicts the wrong thing twice over: « bien que je sois fatigué, je continue » repeats the subject and keeps « que », and « j’espère que je vais y arriver » is ordinary French. A reframe a learner cannot apply to a sentence in front of them is a slogan.',
  },
  {
    text: 'Après que, toujours le subjonctif.',
    why: 'It belongs to b1.15 and it is false as stated (« je pense que tu as raison », « j’espère que tu viendras »). It also answers the wrong question: this lesson’s branch happens BEFORE any que is written, and a learner who starts from « que » has already skipped the only decision there is.',
  },
  {
    text: 'L’infinitif est plus simple, prends-le quand tu peux.',
    why: 'It turns a required choice into a shortcut, and the infinitive route carries its own cost: « de » after être content, avoir peur, regretter and il est important, « à » after réussir, arriver and hésiter. Acts 3 and 4 exist because the learner who takes the shortcut drops the preposition and writes « je suis content partir ».',
  },
  {
    text: 'I want you to go, c’est je veux que tu partes.',
    why: 'A translation pair, not a rule. It covers one verb, gives nothing for avant de against avant que, nothing for il faut, and nothing for the four conjunctions. It is kept where it belongs, as the act 2 trap card and as the act 10 interference table.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-25 and its `fr` is copied
 *  verbatim wherever a section prints it. `opinions-et-avis` carries ZERO
 *  seed rows, so every one of these comes from another theme.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.a2.verbes.162',              // J'espère arriver avant midi.
    'fr.b1.sports-et-loisirs.056',   // Le coach veut que nous soyons prêts avant le match.
    'fr.a1.routines.127',            // Je bois un café avant de partir.
    'fr.a1.nombres.150',             // Encore vingt minutes avant que la table soit prête.
  ],
  act2: [
    'fr.b1.dictee.032',              // Le professeur souhaite que les élèves posent plus de questions.
    'fr.b1.metiers.052',             // Le patron souhaite que nous finissions le rapport avant la réunion.
    'fr.b1.famille.081',             // Ma mère souhaite que je m'occupe davantage de mes grands-parents.
    'fr.a2.heure-et-date.092',       // J'espère te revoir bientôt.
  ],
  act3: [
    'fr.b1.routines.076',            // Je pense qu'il est important de bien dormir avant une journée chargée.
    'fr.b1.dictee.040',              // Il est important que les parents assistent à la rencontre du trimestre.
    'fr.b1.famille.065',             // Il est important que les enfants respectent leurs grands-parents.
    'fr.a1.salutations.198',         // Bonjour, madame Dubois, je suis contente de vous voir.
  ],
  act4: [
    'fr.b1.bureau.005',              // Le stagiaire a dû apprendre à gérer plusieurs dossiers en même temps.
    'fr.b1.sports-et-loisirs.081',   // Bien que je sois fatigué, je continue à courir chaque semaine.
    'fr.b2.rp-quotidien.006',        // J'arrive à déconnecter, sauf quand il y a une urgence au bureau.
    'fr.b2.argent-quotidien.003',    // Bien qu'elle dispose d'une épargne confortable, elle hésite à placer son argent en bourse.
  ],
  act5: [
    'fr.b1.heure-et-date.006',       // Il faut arriver une demi-heure à l'avance.
    'fr.a1.cafe.173',                // Il faut réserver.
    'fr.a2.deplacements.003',        // Il faut composter le billet avant de monter.
    'fr.b1.routines.061',            // Il faut que nous soyons prêts avant que le bus arrive.
    'fr.b1.cuisine.065',             // Il vaut mieux que nous réservions une table avant huit heures.
    'fr.a2.deplacements.001',        // Il vaut mieux prendre le métro pour éviter les embouteillages.
  ],
  act6: [
    'fr.b1.famille.072',             // Pour que mes enfants grandissent heureux, je passe du temps avec eux chaque jour.
    'fr.b2.maison.082',              // Pour que la maison reste chaleureuse, il suffit de bien choisir les couleurs.
    'fr.b1.maison.004',              // Il faut refaire la toiture avant que l'hiver n'arrive.
    'fr.b1.cuisine.012',             // Nous laissons refroidir le gâteau avant de le démouler.
    'fr.b1.routines.012',            // Le soir, je lis quelques pages avant de m'endormir.
  ],
  act7: [
    'fr.a2.verbes.690',              // Il est entré sans frapper.
    'fr.sons.masterclass.055',       // Elle est partie sans rien dire.
    'fr.b2.questions-sociales.005',  // Le gouvernement a lancé un plan afin de réduire la pauvreté.
  ],
  act8: [
    'fr.b1.routines.089',            // Bien que je sois pressé, je prends toujours le temps de déjeuner.
    'fr.b1.cuisine.018',             // Il faut fouetter la crème jusqu'à ce qu'elle épaississe.
    'fr.b1.dictee.042',              // Pourvu que le certificat arrive à temps, elle pourra commencer son nouveau poste.
    'fr.b2.recherche.004',           // Quoique les résultats préliminaires soient prometteurs, l'équipe se garde de tirer des conclusions hâtives.
    'fr.b1.dictee.055',              // Bien que l'inscription soit gratuite, il faut réserver sa place à l'avance.
  ],
  act9: [
    'fr.b1.cafe.004',                // Il vaut mieux boire son café avant qu'il ne refroidisse.
    'fr.b1.collegues.004',           // Il faut tenir compte de l'avis de chaque collègue avant de décider.
  ],
  act10: [
    'fr.b1.journalisme.005',         // Avant de partager un article, il faut vérifier ses sources.
    'fr.b1.metiers.002',             // Beaucoup de jeunes hésitent avant de choisir une carrière stable.
    'fr.b2.maison.024',              // Ils regrettent de ne pas avoir fait inspecter la charpente avant de signer l'acte de vente.
  ],
  act11: [
    'fr.b1.cuisine.017',             // Nous goûtons toujours avant de servir le plat.
    'fr.b1.maison.011',              // Elle a demandé un devis à trois entreprises avant de choisir un artisan.
    'fr.b1.sports-et-loisirs.058',   // Le professeur souhaite que tu ailles t'entraîner au stade.
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable through a
 *  deckTranche. The drill list each one DOES carry is in the trailing
 *  comment. */
export const NOT_DECK_ABLE = [
  'fr.b1.sports-et-loisirs.056',   // dictation
  'fr.a1.routines.127',            // dictation
  'fr.a1.nombres.150',             // dictation
  'fr.b1.dictee.032',              // sentence, review
  'fr.b1.metiers.052',             // sentence, review
  'fr.b1.famille.081',             // dictation
  'fr.b1.dictee.040',              // sentence, review
  'fr.b1.famille.065',             // sentence, review
  'fr.a1.salutations.198',         // sentence, review
  'fr.b2.rp-quotidien.006',        // dictation, sentence
  'fr.b2.argent-quotidien.003',    // sentence, dictation
  'fr.a2.deplacements.003',        // dictation
  'fr.b1.routines.061',            // dictation
  'fr.b1.cuisine.065',             // dictation
  'fr.b1.famille.072',             // sentence, review
  'fr.b1.cuisine.012',             // sentence, dictation
  'fr.b1.routines.012',            // sentence, dictation
  'fr.b1.cuisine.018',             // sentence, dictation
  'fr.b1.dictee.042',              // sentence, review
  'fr.b2.recherche.004',           // sentence, dictation
  'fr.b1.dictee.055',              // dictation
  'fr.b1.cuisine.017',             // sentence, dictation
  'fr.b1.maison.011',              // sentence, dictation
  'fr.b1.sports-et-loisirs.058',   // dictation
  'fr.b2.maison.024',              // sentence, dictation. ALSO never in a deck on purpose:
                                   // it carries a past infinitive, which is outside this lesson.
];

/** No `voiceflash` either: never in a `practice` speak section. Measured
 *  2026-09-25: only four of the 43 imports carry it, and the speak mission
 *  filters ALL_ROWS rather than naming any import by hand, so this list is
 *  recorded for the import step rather than read by a section. */
export const NOT_SPEAKABLE = IMPORT_IDS.filter((id) => ![
  'fr.a2.verbes.162', 'fr.a2.verbes.690', 'fr.sons.masterclass.055', 'fr.a1.cafe.173',
].includes(id));

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, the final stressed syllable of
 *  each group in caps, ü for French u, nasals closed with the superscript ⁿ,
 *  and NO U+203F tie: a liaison consonant moves onto the next syllable.
 *
 *    que          [kə]    kuh, never stressed
 *    de           [də]    duh, never stressed
 *    à            [a]     a, never stressed
 *    -er          [e]     -AY at the end of a group
 *    -ions        [jɔ̃]    -YOHⁿ
 *
 *  The infinitive ending carries the stress of its group (par-TEER,
 *  mahⁿ-ZHAY), the subjunctive ending does not: that difference is audible
 *  and it is one of the two ways a listener hears which shape was chosen.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['subjonctif-infinitif', ...tags], drills, version: 1,
  grammarPoints: ['subjonctif-ou-infinitif'], ...extra,
});

/** A bare pairing or a fixed opener: the hinge itself, with no sentence
 *  around it. These are what the sort and flashcard drills move. */
const chunk = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['subjonctif-infinitif', ...tags], drills, version: 1,
  grammarPoints: ['subjonctif-ou-infinitif'], ...extra,
});

/** A gapfill card: `prompt` is the front, `fr` the answer (validateItem). */
const gap = (prompt: string, notes: string) => ({ cardType: 'gapfill' as const, prompt, notes });
/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string) => ({ cardType: 'grammar' as const, prompt, notes });

/* ── ACT 1 · COMPTER LES SUJETS ─────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1400, 'Je veux partir avant six heures.', 'I want to leave before six.', '/ʒə vø paʁ.tiʁ a.vɑ̃ si.zœʁ/', 'zhuh veu par-TEER a-vahⁿ see-ZUHR', ['compter', 'paire-nu'], FCVDR),
  sent(1401, 'Je veux que tu partes avant six heures.', 'I want you to leave before six.', '/ʒə vø kə ty paʁt a.vɑ̃ si.zœʁ/', 'zhuh veu kuh tü PART a-vahⁿ see-ZUHR', ['compter', 'paire-que'], FCVDR),
  sent(1402, 'Nous préférons manger à la maison ce soir.', 'We would rather eat at home tonight.', '/nu pʁe.fe.ʁɔ̃ mɑ̃.ʒe a la mɛ.zɔ̃ sə swaʁ/', 'noo pray-fay-rohⁿ mahⁿ-zhay a la meh-zohⁿ suh SWAR', ['compter', 'paire-nu']),
  sent(1403, 'Nous préférons que les enfants mangent à la maison ce soir.', 'We would rather the children ate at home tonight.', '/nu pʁe.fe.ʁɔ̃ kə le.zɑ̃.fɑ̃ mɑ̃ʒ a la mɛ.zɔ̃ sə swaʁ/', 'noo pray-fay-rohⁿ kuh lay-zahⁿ-fahⁿ MAHⁿZH a la meh-zohⁿ suh SWAR', ['compter', 'paire-que']),
  sent(1404, 'Elle souhaite changer de poste cette année.', 'She would like to change job this year.', '/ɛl swɛt ʃɑ̃.ʒe də pɔst sɛ.ta.ne/', 'ehl sweht shahⁿ-zhay duh post seh-ta-NAY', ['compter', 'paire-nu']),
  sent(1405, 'Elle souhaite que son équipe change de méthode.', 'She would like her team to change its method.', '/ɛl swɛt kə sɔ̃.ne.kip ʃɑ̃ʒ də me.tɔd/', 'ehl sweht kuh sohⁿ-nay-keep SHAHⁿZH duh may-TOD', ['compter', 'paire-que']),
  sent(1406, 'J’aime travailler tôt le matin.', 'I like working early in the morning.', '/ʒɛm tʁa.va.je to lə ma.tɛ̃/', 'ZHEMM tra-va-yay toh luh ma-TEHⁿ', ['compter', 'paire-nu'], FCVDR),
  sent(1407, 'J’aime que le bureau soit calme le matin.', 'I like the office to be quiet in the morning.', '/ʒɛm kə lə by.ʁo swa kalm lə ma.tɛ̃/', 'ZHEMM kuh luh bü-roh swa KALM luh ma-TEHⁿ', ['compter', 'paire-que']),
  sent(1408, 'Il espère trouver un logement près du tram.', 'He hopes to find a flat near the tram.', '/i.lɛs.pɛʁ tʁu.ve œ̃ lɔʒ.mɑ̃ pʁɛ dy tʁam/', 'ee-lehs-pehr troo-vay uhⁿ lozh-mahⁿ preh dü TRAMM', ['compter', 'paire-nu']),
  sent(1409, 'Ils préfèrent rester à la maison ce soir.', 'They would rather stay at home tonight.', '/il pʁe.fɛʁ ʁɛs.te a la mɛ.zɔ̃ sə swaʁ/', 'eel pray-fehr rehs-tay a la meh-zohⁿ suh SWAR', ['compter', 'paire-nu']),
  sent(1410, 'Ils préfèrent que nous restions à la maison ce soir.', 'They would rather we stayed at home tonight.', '/il pʁe.fɛʁ kə nu ʁɛs.tjɔ̃ a la mɛ.zɔ̃ sə swaʁ/', 'eel pray-fehr kuh noo rehs-TYOHⁿ a la meh-zohⁿ suh SWAR', ['compter', 'paire-que']),
  sent(1411, 'Elle veut que son fils apprenne à nager cet été.', 'She wants her son to learn to swim this summer.', '/ɛl vø kə sɔ̃ fis a.pʁɛn a na.ʒe sɛ.te.te/', 'ehl veu kuh sohⁿ feess a-PRENN a na-zhay seh-tay-TAY', ['compter', 'paire-que'], FCVDR),
  sent(1412, 'Tu veux partir : c’est toi qui pars.', 'You want to leave: you are the one leaving.', '/ty vø paʁ.tiʁ sɛ twa ki paʁ/', 'tü veu par-TEER | seh twa kee PAR', ['compter', 'test']),
  sent(1413, 'Tu veux que je parte : c’est moi qui pars.', 'You want me to leave: I am the one leaving.', '/ty vø kə ʒə paʁt sɛ mwa ki paʁ/', 'tü veu kuh zhuh PART | seh mwa kee PAR', ['compter', 'test']),
  chunk(1414, 'je veux partir', 'I want to leave', '/ʒə vø paʁ.tiʁ/', 'zhuh veu par-TEER', ['compter', 'bloc']),
  chunk(1415, 'je veux que tu partes', 'I want you to leave', '/ʒə vø kə ty paʁt/', 'zhuh veu kuh tü PART', ['compter', 'bloc']),
  chunk(1416, 'un seul sujet', 'a single subject', '/œ̃ sœl sy.ʒɛ/', 'uhⁿ suhl sü-ZHEH', ['compter', 'bloc']),
  chunk(1417, 'deux sujets différents', 'two different subjects', '/dø sy.ʒɛ di.fe.ʁɑ̃/', 'deu sü-zheh dee-fay-RAHⁿ', ['compter', 'bloc']),
  sent(1418, 'Compte les sujets avant de choisir la forme.', 'Count the subjects before choosing the form.', '/kɔ̃t le sy.ʒɛ a.vɑ̃ də ʃwa.ziʁ la fɔʁm/', 'kohⁿt lay sü-zheh a-vahⁿ duh shwa-zeer la FORM', ['compter', 'regle'], ['flashcard'],
    rule('Que fais-tu avant de choisir entre que et l’infinitif ?', 'Ex : Je veux ... partir. Un sujet, donc pas de que.')),
  sent(1419, 'Personne de nouveau n’arrive, donc pas de que.', 'Nobody new turns up, so there is no que.', '/pɛʁ.sɔn də nu.vo na.ʁiv dɔ̃k pa də kə/', 'pehr-sonn duh noo-voh na-REEV | dohⁿk pa duh KUH', ['compter', 'regle'], ['flashcard'],
    rule('Comment sais-tu qu’une phrase n’a pas besoin de que ?', 'Ex : Elle souhaite changer de poste. Elle, et elle seule.')),
];

/* ── ACT 2 · L’INFINITIF NU ─────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1420, 'Je voudrais réserver une table pour samedi.', 'I would like to book a table for Saturday.', '/ʒə vu.dʁɛ ʁe.zɛʁ.ve yn tabl puʁ sam.di/', 'zhuh voo-dreh ray-zehr-vay ün tabl poor sam-DEE', ['nu', 'vouloir'], FCVDR),
  sent(1421, 'Je voudrais que tu réserves une table pour samedi.', 'I would like you to book a table for Saturday.', '/ʒə vu.dʁɛ kə ty ʁe.zɛʁv yn tabl puʁ sam.di/', 'zhuh voo-dreh kuh tü ray-ZEHRV ün tabl poor sam-DEE', ['nu', 'vouloir']),
  sent(1422, 'Il préfère prendre le train de sept heures.', 'He would rather take the seven o’clock train.', '/il pʁe.fɛʁ pʁɑ̃dʁ lə tʁɛ̃ də sɛ.tœʁ/', 'eel pray-fehr prahⁿdr luh trehⁿ duh seh-TUHR', ['nu', 'preferer']),
  sent(1423, 'Il préfère que nous prenions le train de sept heures.', 'He would rather we took the seven o’clock train.', '/il pʁe.fɛʁ kə nu pʁə.njɔ̃ lə tʁɛ̃ də sɛ.tœʁ/', 'eel pray-fehr kuh noo pruh-NYOHⁿ luh trehⁿ duh seh-TUHR', ['nu', 'preferer']),
  sent(1424, 'Nous souhaitons rester une nuit de plus.', 'We would like to stay one more night.', '/nu swɛ.tɔ̃ ʁɛs.te yn nɥi də plys/', 'noo sweh-tohⁿ rehs-tay ün nwee duh PLÜSS', ['nu', 'souhaiter']),
  sent(1425, 'Nous souhaitons que le chauffage soit réparé avant lundi.', 'We would like the heating to be fixed before Monday.', '/nu swɛ.tɔ̃ kə lə ʃo.faʒ swa ʁe.pa.ʁe a.vɑ̃ lœ̃.di/', 'noo sweh-tohⁿ kuh luh shoh-fazh swa ray-pa-RAY a-vahⁿ luhⁿ-DEE', ['nu', 'souhaiter']),
  sent(1426, 'Elle aime recevoir du monde le dimanche.', 'She likes having people over on Sundays.', '/ɛl ɛm ʁə.sə.vwaʁ dy mɔ̃d lə di.mɑ̃ʃ/', 'ehl EMM ruh-suh-vwar dü mohⁿd luh dee-MAHⁿSH', ['nu', 'aimer']),
  sent(1427, 'Elle aime que ses amis viennent sans prévenir.', 'She likes her friends turning up unannounced.', '/ɛl ɛm kə se.za.mi vjɛn sɑ̃ pʁev.niʁ/', 'ehl EMM kuh say-za-mee VYENN sahⁿ prayv-NEER', ['nu', 'aimer']),
  sent(1428, 'J’espère finir le dossier avant vendredi.', 'I hope to finish the file before Friday.', '/ʒɛs.pɛʁ fi.niʁ lə do.sje a.vɑ̃ vɑ̃.dʁə.di/', 'zhehs-pehr fee-neer luh do-syay a-vahⁿ vahⁿ-druh-DEE', ['nu', 'esperer'], FCVDR),
  sent(1429, 'Le patron veut nous voir tous les trois.', 'The boss wants to see all three of us.', '/lə pa.tʁɔ̃ vø nu vwaʁ tu le tʁwa/', 'luh pa-trohⁿ veu noo vwar too lay TRWA', ['nu', 'vouloir', 'piege']),
  sent(1430, 'Le patron veut que nous venions tous les trois.', 'The boss wants all three of us to come.', '/lə pa.tʁɔ̃ vø kə nu və.njɔ̃ tu le tʁwa/', 'luh pa-trohⁿ veu kuh noo vuh-NYOHⁿ too lay TRWA', ['nu', 'vouloir', 'piege']),
  chunk(1431, 'vouloir, préférer, souhaiter, aimer, espérer', 'to want, to prefer, to wish, to like, to hope', '/vu.lwaʁ pʁe.fe.ʁe swɛ.te ɛ.me ɛs.pe.ʁe/', 'voo-lwar pray-fay-ray sweh-tay eh-may ehs-pay-RAY', ['nu', 'bloc']),
  chunk(1432, 'rien entre les deux verbes', 'nothing between the two verbs', '/ʁjɛ̃.nɑ̃.tʁə le dø vɛʁb/', 'ryehⁿ-nahⁿ-truh lay deu VEHRB', ['nu', 'bloc']),
  sent(1433, 'Après ces cinq verbes, l’infinitif arrive tout seul.', 'After these five verbs the infinitive arrives on its own.', '/a.pʁɛ se sɛ̃k vɛʁb lɛ̃.fi.ni.tif a.ʁiv tu sœl/', 'a-preh say sehⁿk vehrb lehⁿ-fee-nee-teef a-reev too SUHL', ['nu', 'regle'], ['flashcard'],
    rule('Que mets-tu entre veux et partir ?', 'Ex : Je veux partir. Rien du tout, pas même de.')),
  sent(1434, 'Je veux que tu me dises la vérité.', 'I want you to tell me the truth.', '/ʒə vø kə ty mə diz la ve.ʁi.te/', 'zhuh veu kuh tü muh DEEZ la vay-ree-TAY', ['nu', 'vouloir'], FCVDR),
  sent(1435, 'Ma sœur veut apprendre à conduire cet hiver.', 'My sister wants to learn to drive this winter.', '/ma sœʁ vø a.pʁɑ̃dʁ a kɔ̃.dɥiʁ sɛ.ti.vɛʁ/', 'ma suhr veu a-prahⁿdr a kohⁿ-dweer seh-tee-VEHR', ['nu', 'vouloir']),
  sent(1436, 'Ma sœur veut que je lui apprenne à conduire.', 'My sister wants me to teach her to drive.', '/ma sœʁ vø kə ʒə lɥi a.pʁɛn a kɔ̃.dɥiʁ/', 'ma suhr veu kuh zhuh lwee a-PRENN a kohⁿ-DWEER', ['nu', 'vouloir']),
  sent(1437, 'Nous aimerions vous remercier avant votre départ.', 'We would like to thank you before you go.', '/nu.zɛ.mə.ʁjɔ̃ vu ʁə.mɛʁ.sje a.vɑ̃ vɔtʁ de.paʁ/', 'noo-zeh-muh-ryohⁿ voo ruh-mehr-syay a-vahⁿ votr day-PAR', ['nu', 'aimer']),
  sent(1438, 'Ils espèrent déménager avant la rentrée.', 'They hope to move before term starts.', '/il.zɛs.pɛʁ de.me.na.ʒe a.vɑ̃ la ʁɑ̃.tʁe/', 'eel-zehs-pehr day-may-na-zhay a-vahⁿ la rahⁿ-TRAY', ['nu', 'esperer']),
  sent(1439, 'Le même verbe, deux phrases, deux formes.', 'The same verb, two sentences, two shapes.', '/lə mɛm vɛʁb dø fʁaz dø fɔʁm/', 'luh MEMM vehrb | deu fraz deu FORM', ['nu', 'regle'], ['flashcard'],
    rule('Qu’est-ce qui change entre je veux partir et je veux que tu partes ?', 'Ex : Le sujet du deuxième verbe, et rien d’autre.')),
];

/* ── ACT 3 · LA PRÉPOSITION DE ──────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1440, 'Je suis content de travailler avec vous.', 'I am glad to be working with you.', '/ʒə sɥi kɔ̃.tɑ̃ də tʁa.va.je a.vɛk vu/', 'zhuh swee kohⁿ-tahⁿ duh tra-va-yay a-vehk VOO', ['de', 'content'], FCVDR),
  sent(1441, 'Je suis content que tu travailles avec nous.', 'I am glad you are working with us.', '/ʒə sɥi kɔ̃.tɑ̃ kə ty tʁa.vaj a.vɛk nu/', 'zhuh swee kohⁿ-tahⁿ kuh tü tra-VAHY a-vehk NOO', ['de', 'content']),
  sent(1442, 'Elle a peur de rater son train.', 'She is afraid of missing her train.', '/ɛl a pœʁ də ʁa.te sɔ̃ tʁɛ̃/', 'ehl a puhr duh ra-tay sohⁿ TREHⁿ', ['de', 'peur'], FCVDR),
  sent(1443, 'Elle a peur que son fils rate son train.', 'She is afraid her son will miss his train.', '/ɛl a pœʁ kə sɔ̃ fis ʁat sɔ̃ tʁɛ̃/', 'ehl a puhr kuh sohⁿ feess RAT sohⁿ TREHⁿ', ['de', 'peur']),
  sent(1444, 'Je regrette de partir si tôt.', 'I am sorry to be leaving so early.', '/ʒə ʁə.ɡʁɛt də paʁ.tiʁ si to/', 'zhuh ruh-greht duh par-teer see TOH', ['de', 'regretter']),
  sent(1445, 'Je regrette que tu partes si tôt.', 'I am sorry you are leaving so early.', '/ʒə ʁə.ɡʁɛt kə ty paʁt si to/', 'zhuh ruh-greht kuh tü PART see TOH', ['de', 'regretter']),
  sent(1446, 'Nous évitons de rouler la nuit sur cette route.', 'We avoid driving at night on that road.', '/nu.ze.vi.tɔ̃ də ʁu.le la nɥi syʁ sɛt ʁut/', 'noo-zay-vee-tohⁿ duh roo-lay la nwee sür seht ROOT', ['de', 'eviter']),
  sent(1447, 'Nous évitons que les enfants rentrent trop tard.', 'We keep the children from getting home too late.', '/nu.ze.vi.tɔ̃ kə le.zɑ̃.fɑ̃ ʁɑ̃tʁ tʁo taʁ/', 'noo-zay-vee-tohⁿ kuh lay-zahⁿ-fahⁿ RAHⁿTR troh TAR', ['de', 'eviter']),
  sent(1448, 'Il est important de lire le contrat en entier.', 'It is important to read the whole contract.', '/i.lɛ.tɛ̃.pɔʁ.tɑ̃ də liʁ lə kɔ̃.tʁa ɑ̃.nɑ̃.tje/', 'ee-leh-tehⁿ-por-tahⁿ duh leer luh kohⁿ-tra ahⁿ-nahⁿ-TYAY', ['de', 'important'], FCVDR),
  sent(1449, 'Il est important que tu lises le contrat en entier.', 'It is important that you read the whole contract.', '/i.lɛ.tɛ̃.pɔʁ.tɑ̃ kə ty liz lə kɔ̃.tʁa ɑ̃.nɑ̃.tje/', 'ee-leh-tehⁿ-por-tahⁿ kuh tü LEEZ luh kohⁿ-tra ahⁿ-nahⁿ-TYAY', ['de', 'important']),
  sent(1450, 'N’oublie pas de fermer la fenêtre du salon.', 'Do not forget to shut the living-room window.', '/nu.bli pa də fɛʁ.me la fə.nɛtʁ dy sa.lɔ̃/', 'noo-blee pa duh fehr-may la fuh-nehtr dü sa-LOHⁿ', ['de', 'oublier']),
  sent(1451, 'J’ai oublié que la fenêtre était ouverte.', 'I forgot the window was open.', '/ʒe u.bli.e kə la fə.nɛtʁ e.tɛ.tu.vɛʁt/', 'zhay oo-blee-ay kuh la fuh-nehtr ay-teh-too-VEHRT', ['de', 'oublier', 'piege']),
  chunk(1452, 'être content de', 'to be glad to', '/ɛtʁ kɔ̃.tɑ̃ də/', 'ehtr kohⁿ-tahⁿ DUH', ['de', 'bloc']),
  chunk(1453, 'avoir peur de', 'to be afraid of', '/a.vwaʁ pœʁ də/', 'a-vwar puhr DUH', ['de', 'bloc']),
  chunk(1454, 'il est important de', 'it is important to', '/i.lɛ.tɛ̃.pɔʁ.tɑ̃ də/', 'ee-leh-tehⁿ-por-tahⁿ DUH', ['de', 'bloc']),
  chunk(1455, 'éviter de', 'to avoid', '/e.vi.te də/', 'ay-vee-tay DUH', ['de', 'bloc']),
  sent(1456, 'Le de ne se voit pas dans la phrase avec que.', 'The de disappears in the sentence with que.', '/lə də nə sə vwa pa dɑ̃ la fʁaz a.vɛk kə/', 'luh duh nuh suh vwa PA dahⁿ la fraz a-vehk KUH', ['de', 'regle'], ['flashcard'],
    rule('Où passe le de quand tu ouvres avec que ?', 'Ex : content de partir devient content que tu partes.')),
  sent(1457, 'Je suis contente de vous revoir si vite.', 'I am glad to see you again so soon.', '/ʒə sɥi kɔ̃.tɑ̃t də vu ʁə.vwaʁ si vit/', 'zhuh swee kohⁿ-tahⁿt duh voo ruh-vwar see VEET', ['de', 'content']),
  sent(1458, 'Ils ont peur de se tromper de quai.', 'They are afraid of getting the wrong platform.', '/il.zɔ̃ pœʁ də sə tʁɔ̃.pe də ke/', 'eel-zohⁿ puhr duh suh trohⁿ-pay duh KAY', ['de', 'peur']),
  sent(1459, 'Il est important de dire non quand il le faut.', 'It is important to say no when you have to.', '/i.lɛ.tɛ̃.pɔʁ.tɑ̃ də diʁ nɔ̃ kɑ̃.til lə fo/', 'ee-leh-tehⁿ-por-tahⁿ duh deer nohⁿ kahⁿ-teel luh FOH', ['de', 'important'], FCVDR),
];

/* ── ACT 4 · LA PRÉPOSITION À, ET LES TROIS ROUTES ──────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1460, 'Nous avons réussi à réserver le gîte.', 'We managed to book the cottage.', '/nu.za.vɔ̃ ʁe.y.si a ʁe.zɛʁ.ve lə ʒit/', 'noo-za-vohⁿ ray-ü-see a ray-zehr-vay luh ZHEET', ['a', 'reussir'], FCVDR),
  sent(1461, 'Nous avons réussi à ce que tout le monde vienne.', 'We managed to get everybody to come.', '/nu.za.vɔ̃ ʁe.y.si a sə kə tu lə mɔ̃d vjɛn/', 'noo-za-vohⁿ ray-ü-see a suh kuh too luh mohⁿd VYENN', ['a', 'reussir', 'rare']),
  sent(1462, 'Je n’arrive pas à ouvrir cette porte.', 'I cannot manage to open this door.', '/ʒə na.ʁiv pa a u.vʁiʁ sɛt pɔʁt/', 'zhuh na-reev pa a oo-vreer seht PORT', ['a', 'arriver'], FCVDR),
  sent(1463, 'Elle hésite à demander une augmentation.', 'She is hesitating about asking for a rise.', '/ɛl e.zit a də.mɑ̃.de y.no.ɡmɑ̃.ta.sjɔ̃/', 'ehl ay-zeet a duh-mahⁿ-day ü-nog-mahⁿ-ta-SYOHⁿ', ['a', 'hesiter']),
  sent(1464, 'Il continue à courir malgré la pluie.', 'He keeps running in spite of the rain.', '/il kɔ̃.ti.nɥ a ku.ʁiʁ mal.ɡʁe la plɥi/', 'eel kohⁿ-tee-nü a koo-reer mal-gray la PLWEE', ['a', 'continuer']),
  sent(1465, 'Les enfants apprennent à faire du vélo au parc.', 'The children are learning to ride a bike in the park.', '/le.zɑ̃.fɑ̃ a.pʁɛn a fɛʁ dy ve.lo o paʁk/', 'lay-zahⁿ-fahⁿ a-PRENN a fehr dü vay-loh oh PARK', ['a', 'apprendre']),
  chunk(1466, 'réussir à', 'to manage to', '/ʁe.y.siʁ a/', 'ray-ü-seer A', ['a', 'bloc']),
  chunk(1467, 'arriver à', 'to manage to', '/a.ʁi.ve a/', 'a-ree-vay A', ['a', 'bloc']),
  chunk(1468, 'hésiter à', 'to hesitate to', '/e.zi.te a/', 'ay-zee-tay A', ['a', 'bloc']),
  chunk(1469, 'rien, de, ou à', 'nothing, de, or à', '/ʁjɛ̃ də u a/', 'ryehⁿ | duh | oo A', ['a', 'bloc', 'routes']),
  sent(1470, 'Trois routes mènent à l’infinitif : rien, de et à.', 'Three roads lead to the infinitive: nothing, de and à.', '/tʁwa ʁut mɛn a lɛ̃.fi.ni.tif ʁjɛ̃ də e a/', 'trwa root menn a lehⁿ-fee-nee-TEEF | ryehⁿ duh ay A', ['a', 'regle', 'routes'], ['flashcard'],
    rule('Combien de façons d’arriver à un infinitif ?', 'Ex : je veux partir, content de partir, réussir à partir.')),
  sent(1471, 'La route se choisit avec le premier verbe, pas avec le second.', 'The road is chosen by the first verb, not by the second.', '/la ʁut sə ʃwa.zi a.vɛk lə pʁə.mje vɛʁb pa a.vɛk lə sə.ɡɔ̃/', 'la root suh shwa-zee a-vehk luh pruh-myay VEHRB | pa a-vehk luh suh-GOHⁿ', ['a', 'regle', 'routes'], ['flashcard'],
    rule('Qui décide si tu écris de ou à ?', 'Ex : content DE partir, réussir À partir. Le premier verbe.')),
  sent(1472, 'J’ai enfin réussi à joindre le service client.', 'I finally got through to customer services.', '/ʒe ɑ̃.fɛ̃ ʁe.y.si a ʒwɛ̃dʁ lə sɛʁ.vis kli.ɑ̃/', 'zhay ahⁿ-fehⁿ ray-ü-see a zhwehⁿdr luh sehr-vees klee-AHⁿ', ['a', 'reussir']),
  sent(1473, 'Tu hésites à répondre, et je comprends pourquoi.', 'You are hesitating about answering, and I understand why.', '/ty e.zit a ʁe.pɔ̃dʁ e ʒə kɔ̃.pʁɑ̃ puʁ.kwa/', 'tü ay-zeet a ray-POHⁿDR | ay zhuh kohⁿ-prahⁿ poor-KWA', ['a', 'hesiter']),
  sent(1474, 'Elle veut que nous arrivions à finir ce soir.', 'She wants us to manage to finish tonight.', '/ɛl vø kə nu.za.ʁi.vjɔ̃ a fi.niʁ sə swaʁ/', 'ehl veu kuh noo-za-ree-VYOHⁿ a fee-neer suh SWAR', ['a', 'melange']),
  sent(1475, 'Je suis content d’avoir une place près de la fenêtre.', 'I am glad to have a seat by the window.', '/ʒə sɥi kɔ̃.tɑ̃ da.vwaʁ yn plas pʁɛ də la fə.nɛtʁ/', 'zhuh swee kohⁿ-tahⁿ da-vwar ün plass preh duh la fuh-NEHTR', ['a', 'melange', 'de']),
  sent(1476, 'Il faut choisir la bonne petite lettre avant le verbe.', 'You have to pick the right little letter before the verb.', '/il fo ʃwa.ziʁ la bɔn pə.tit lɛtʁ a.vɑ̃ lə vɛʁb/', 'eel foh shwa-zeer la bonn puh-teet lehtr a-vahⁿ luh VEHRB', ['a', 'regle']),
  sent(1477, 'Sans sa petite lettre, la phrase tombe.', 'Without its little letter, the sentence falls over.', '/sɑ̃ sa pə.tit lɛtʁ la fʁaz tɔ̃b/', 'sahⁿ sa puh-teet LEHTR | la fraz TOHⁿB', ['a', 'regle'], ['flashcard'],
    gap('Je suis content ... te voir.', 'Ex : content DE te voir. La préposition n’est pas décorative.')),
];

/* ── ACT 5 · IL FAUT, DANS LES DEUX SENS ────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1478, 'Il faut partir maintenant si on veut être à l’heure.', 'We have to leave now if we want to be on time.', '/il fo paʁ.tiʁ mɛ̃t.nɑ̃ si ɔ̃ vø ɛtʁ a lœʁ/', 'eel foh par-teer mehⁿt-nahⁿ see ohⁿ veu ehtr a LUHR', ['ilfaut', 'nu'], FCVDR),
  sent(1479, 'Il faut que tu partes maintenant si tu veux être à l’heure.', 'You have to leave now if you want to be on time.', '/il fo kə ty paʁt mɛ̃t.nɑ̃ si ty vø ɛtʁ a lœʁ/', 'eel foh kuh tü PART mehⁿt-nahⁿ see tü veu ehtr a LUHR', ['ilfaut', 'que'], FCVDR),
  sent(1480, 'Il faut remplir ce formulaire avant l’entretien.', 'The form has to be filled in before the interview.', '/il fo ʁɑ̃.pliʁ sə fɔʁ.my.lɛʁ a.vɑ̃ lɑ̃.tʁə.tjɛ̃/', 'eel foh rahⁿ-pleer suh for-mü-lehr a-vahⁿ lahⁿ-truh-TYEHⁿ', ['ilfaut', 'nu']),
  sent(1481, 'Il faut que chacun remplisse ce formulaire avant l’entretien.', 'Everyone has to fill in this form before the interview.', '/il fo kə ʃa.kœ̃ ʁɑ̃.plis sə fɔʁ.my.lɛʁ a.vɑ̃ lɑ̃.tʁə.tjɛ̃/', 'eel foh kuh sha-kuhⁿ rahⁿ-PLEESS suh for-mü-lehr a-vahⁿ lahⁿ-truh-TYEHⁿ', ['ilfaut', 'que']),
  sent(1482, 'Il vaut mieux réserver à l’avance le week-end.', 'It is better to book ahead at the weekend.', '/il vo mjø ʁe.zɛʁ.ve a la.vɑ̃s lə wi.kɛnd/', 'eel voh myeu ray-zehr-vay a la-vahⁿss luh wee-KEND', ['ilfaut', 'nu']),
  sent(1483, 'Il vaut mieux que tu réserves à l’avance ce week-end.', 'You had better book ahead this weekend.', '/il vo mjø kə ty ʁe.zɛʁv a la.vɑ̃s sə wi.kɛnd/', 'eel voh myeu kuh tü ray-ZEHRV a la-vahⁿss suh wee-KEND', ['ilfaut', 'que']),
  sent(1484, 'Il faudrait ranger le garage avant l’hiver.', 'The garage ought to be tidied before winter.', '/il fo.dʁɛ ʁɑ̃.ʒe lə ɡa.ʁaʒ a.vɑ̃ li.vɛʁ/', 'eel foh-dreh rahⁿ-zhay luh ga-razh a-vahⁿ lee-VEHR', ['ilfaut', 'nu', 'conditionnel']),
  sent(1485, 'Il faudrait que nous rangions le garage avant l’hiver.', 'We ought to tidy the garage before winter.', '/il fo.dʁɛ kə nu ʁɑ̃.ʒjɔ̃ lə ɡa.ʁaʒ a.vɑ̃ li.vɛʁ/', 'eel foh-dreh kuh noo rahⁿ-ZHYOHⁿ luh ga-razh a-vahⁿ lee-VEHR', ['ilfaut', 'que', 'conditionnel']),
  chunk(1486, 'il faut partir', 'we have to leave', '/il fo paʁ.tiʁ/', 'eel foh par-TEER', ['ilfaut', 'bloc']),
  chunk(1487, 'il faut que tu partes', 'you have to leave', '/il fo kə ty paʁt/', 'eel foh kuh tü PART', ['ilfaut', 'bloc']),
  sent(1488, 'Sans nom, l’ordre est pour tout le monde.', 'With nobody named, the instruction is for everyone.', '/sɑ̃ nɔ̃ lɔʁdʁ ɛ puʁ tu lə mɔ̃d/', 'sahⁿ NOHⁿ | lordr eh poor too luh MOHⁿD', ['ilfaut', 'regle'], ['flashcard'],
    rule('Que veut dire il faut partir, sans que ?', 'Ex : Sur une affiche de gare, ça s’adresse à tous.')),
  sent(1489, 'Avec un nom, l’ordre est pour cette personne.', 'With somebody named, the instruction is for that person.', '/a.vɛk œ̃ nɔ̃ lɔʁdʁ ɛ puʁ sɛt pɛʁ.sɔn/', 'a-vehk uhⁿ NOHⁿ | lordr eh poor seht pehr-SONN', ['ilfaut', 'regle'], ['flashcard'],
    rule('Pourquoi dire il faut que tu partes plutôt que il faut partir ?', 'Ex : Parce que tu nommes quelqu’un, et lui seul.')),
  sent(1490, 'Il ne faut pas fumer dans la cour de l’école.', 'There is no smoking in the school yard.', '/il nə fo pa fy.me dɑ̃ la kuʁ də le.kɔl/', 'eel nuh foh pa fü-may dahⁿ la koor duh lay-KOL', ['ilfaut', 'nu', 'negation']),
  sent(1491, 'Il ne faut pas que les enfants jouent près de la route.', 'The children must not play near the road.', '/il nə fo pa kə le.zɑ̃.fɑ̃ ʒu pʁɛ də la ʁut/', 'eel nuh foh pa kuh lay-zahⁿ-fahⁿ ZHOO preh duh la ROOT', ['ilfaut', 'que', 'negation']),
  sent(1492, 'Il est possible de payer en plusieurs fois.', 'It is possible to pay in instalments.', '/i.lɛ pɔ.sibl də pe.je ɑ̃ ply.zjœʁ fwa/', 'ee-leh po-seebl duh pay-yay ahⁿ plü-zyuhr FWA', ['ilfaut', 'de']),
  sent(1493, 'Il est possible que le colis arrive demain.', 'The parcel may well arrive tomorrow.', '/i.lɛ pɔ.sibl kə lə kɔ.li a.ʁiv də.mɛ̃/', 'ee-leh po-seebl kuh luh ko-lee a-REEV duh-MEHⁿ', ['ilfaut', 'que']),
  sent(1494, 'Le il de il faut ne désigne personne.', 'The il in il faut points at nobody.', '/lə il də il fo nə de.ziɲ pɛʁ.sɔn/', 'luh EEL duh eel FOH | nuh day-zeeñ pehr-SONN', ['ilfaut', 'regle']),
  sent(1495, 'Il faut boire de l’eau quand il fait cette chaleur.', 'You have to drink water in heat like this.', '/il fo bwaʁ də lo kɑ̃.til fɛ sɛt ʃa.lœʁ/', 'eel foh bwar duh LOH kahⁿ-teel feh seht sha-LUHR', ['ilfaut', 'nu'], FCVDR),
];

/* ── ACT 6 · POUR ET AVANT ──────────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1496, 'Je pars tôt pour éviter les embouteillages.', 'I leave early to avoid the traffic.', '/ʒə paʁ to puʁ e.vi.te le.zɑ̃.bu.tɛ.jaʒ/', 'zhuh par TOH poor ay-vee-tay lay-zahⁿ-boo-teh-YAZH', ['paire', 'pour'], FCVDR),
  sent(1497, 'Je pars tôt pour que tu aies la voiture cet après-midi.', 'I leave early so that you have the car this afternoon.', '/ʒə paʁ to puʁ kə ty ɛ la vwa.tyʁ sɛ.ta.pʁɛ.mi.di/', 'zhuh par TOH poor kuh tü EH la vwa-tür seh-ta-preh-mee-DEE', ['paire', 'pour']),
  sent(1498, 'Elle range la cuisine avant de se coucher.', 'She tidies the kitchen before going to bed.', '/ɛl ʁɑ̃ʒ la kɥi.zin a.vɑ̃ də sə ku.ʃe/', 'ehl rahⁿzh la kwee-zeen a-vahⁿ duh suh koo-SHAY', ['paire', 'avant'], FCVDR),
  sent(1499, 'Elle range la cuisine avant que les invités arrivent.', 'She tidies the kitchen before the guests arrive.', '/ɛl ʁɑ̃ʒ la kɥi.zin a.vɑ̃ kə le.zɛ̃.vi.te a.ʁiv/', 'ehl rahⁿzh la kwee-zeen a-vahⁿ kuh lay-zehⁿ-vee-tay a-REEV', ['paire', 'avant']),
  sent(1500, 'Nous avons appelé pour prévenir de notre retard.', 'We rang to warn them we would be late.', '/nu.za.vɔ̃.za.pə.le puʁ pʁev.niʁ də nɔtʁ ʁə.taʁ/', 'noo-za-vohⁿ-za-puh-lay poor prayv-neer duh notr ruh-TAR', ['paire', 'pour']),
  sent(1501, 'Nous avons appelé pour que personne ne s’inquiète.', 'We rang so that nobody would worry.', '/nu.za.vɔ̃.za.pə.le puʁ kə pɛʁ.sɔn nə sɛ̃.kjɛt/', 'noo-za-vohⁿ-za-puh-lay poor kuh pehr-sonn nuh sehⁿ-KYEHT', ['paire', 'pour']),
  sent(1502, 'Relis ta lettre avant de l’envoyer.', 'Read your letter again before sending it.', '/ʁə.li ta lɛtʁ a.vɑ̃ də lɑ̃.vwa.je/', 'ruh-lee ta LEHTR a-vahⁿ duh lahⁿ-vwa-YAY', ['paire', 'avant']),
  sent(1503, 'Relis ta lettre avant que le facteur passe.', 'Read your letter again before the postman comes.', '/ʁə.li ta lɛtʁ a.vɑ̃ kə lə fak.tœʁ pas/', 'ruh-lee ta LEHTR a-vahⁿ kuh luh fak-tuhr PASS', ['paire', 'avant']),
  chunk(1504, 'pour partir', 'in order to leave', '/puʁ paʁ.tiʁ/', 'poor par-TEER', ['paire', 'bloc']),
  chunk(1505, 'pour que tu partes', 'so that you leave', '/puʁ kə ty paʁt/', 'poor kuh tü PART', ['paire', 'bloc']),
  chunk(1506, 'avant de partir', 'before leaving', '/a.vɑ̃ də paʁ.tiʁ/', 'a-vahⁿ duh par-TEER', ['paire', 'bloc']),
  chunk(1507, 'avant que tu partes', 'before you leave', '/a.vɑ̃ kə ty paʁt/', 'a-vahⁿ kuh tü PART', ['paire', 'bloc']),
  sent(1508, 'Chaque paire a la même idée et deux formes.', 'Each pair carries one idea and two shapes.', '/ʃak pɛʁ a la mɛm i.de e dø fɔʁm/', 'shak pehr a la MEMM ee-day ay deu FORM', ['paire', 'regle'], ['flashcard'],
    rule('Pourquoi pour et pour que existent-ils tous les deux ?', 'Ex : un sujet donne pour, deux sujets donnent pour que.')),
  sent(1509, 'Avant de devient avant que dès qu’un deuxième sujet arrive.', 'Avant de becomes avant que as soon as a second subject turns up.', '/a.vɑ̃ də də.vjɛ̃.ta.vɑ̃ kə dɛ kœ̃ dø.zjɛm sy.ʒɛ a.ʁiv/', 'a-vahⁿ duh duh-vyehⁿ-ta-vahⁿ KUH | deh kuhⁿ deu-zyemm sü-zheh a-REEV', ['paire', 'regle'], ['flashcard'],
    gap('Ferme la porte avant ... sortir.', 'Ex : avant DE sortir. Un seul sujet, donc de.')),
  sent(1510, 'Il est venu pour nous aider à déménager.', 'He came to help us move.', '/i.lɛ və.ny puʁ nu.ze.de a de.me.na.ʒe/', 'ee-leh vuh-nü poor noo-zay-day a day-may-na-ZHAY', ['paire', 'pour']),
  sent(1511, 'Il est venu pour que nous ne soyons pas seuls.', 'He came so that we would not be on our own.', '/i.lɛ və.ny puʁ kə nu nə swa.jɔ̃ pa sœl/', 'ee-leh vuh-nü poor kuh noo nuh swa-yohⁿ pa SUHL', ['paire', 'pour']),
  sent(1512, 'Prends une photo du compteur avant de rendre les clés.', 'Take a photo of the meter before handing back the keys.', '/pʁɑ̃.zyn fɔ.to dy kɔ̃.tœʁ a.vɑ̃ də ʁɑ̃dʁ le kle/', 'prahⁿ-zün fo-toh dü kohⁿ-tuhr a-vahⁿ duh rahⁿdr lay KLAY', ['paire', 'avant'], FCVDR),
  sent(1513, 'Préviens-moi avant que les travaux commencent.', 'Let me know before the work starts.', '/pʁe.vjɛ̃ mwa a.vɑ̃ kə le tʁa.vo kɔ.mɑ̃s/', 'pray-vyehⁿ MWA a-vahⁿ kuh lay tra-voh ko-MAHⁿSS', ['paire', 'avant']),
];

/* ── ACT 7 · SANS, AFIN, À CONDITION ────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1514, 'Il est sorti sans dire au revoir.', 'He went out without saying goodbye.', '/i.lɛ sɔʁ.ti sɑ̃ diʁ o ʁə.vwaʁ/', 'ee-leh sor-tee sahⁿ deer oh ruh-VWAR', ['paire', 'sans'], FCVDR),
  sent(1515, 'Il est sorti sans que personne l’entende.', 'He went out without anybody hearing him.', '/i.lɛ sɔʁ.ti sɑ̃ kə pɛʁ.sɔn lɑ̃.tɑ̃d/', 'ee-leh sor-tee sahⁿ kuh pehr-sonn lahⁿ-TAHⁿD', ['paire', 'sans']),
  sent(1516, 'Elle a signé sans relire le contrat.', 'She signed without reading the contract again.', '/ɛl a si.ɲe sɑ̃ ʁə.liʁ lə kɔ̃.tʁa/', 'ehl a see-ñay sahⁿ ruh-leer luh kohⁿ-TRA', ['paire', 'sans'], FCVDR),
  sent(1517, 'Elle a signé sans que son avocat voie le contrat.', 'She signed without her lawyer seeing the contract.', '/ɛl a si.ɲe sɑ̃ kə sɔ̃.na.vɔ.ka vwa lə kɔ̃.tʁa/', 'ehl a see-ñay sahⁿ kuh sohⁿ-na-vo-ka VWA luh kohⁿ-TRA', ['paire', 'sans']),
  sent(1518, 'Nous partons tôt afin d’arriver avant la nuit.', 'We are leaving early in order to get there before dark.', '/nu paʁ.tɔ̃ to a.fɛ̃ da.ʁi.ve a.vɑ̃ la nɥi/', 'noo par-tohⁿ TOH a-fehⁿ da-ree-vay a-vahⁿ la NWEE', ['paire', 'afin']),
  sent(1519, 'Nous partons tôt afin que les enfants dorment un peu.', 'We are leaving early so that the children get some sleep.', '/nu paʁ.tɔ̃ to a.fɛ̃ kə le.zɑ̃.fɑ̃ dɔʁm œ̃ pø/', 'noo par-tohⁿ TOH a-fehⁿ kuh lay-zahⁿ-fahⁿ DORM uhⁿ PEU', ['paire', 'afin'], FCVDR),
  sent(1520, 'J’accepte, à condition de finir avant dix-huit heures.', 'I accept, provided I finish before six.', '/ʒak.sɛpt a kɔ̃.di.sjɔ̃ də fi.niʁ a.vɑ̃ di.zɥi.tœʁ/', 'zhak-sehpt a kohⁿ-dee-syohⁿ duh fee-neer a-vahⁿ dee-zwee-TUHR', ['paire', 'condition']),
  sent(1521, 'J’accepte, à condition que tu viennes avec moi.', 'I accept, provided you come with me.', '/ʒak.sɛpt a kɔ̃.di.sjɔ̃ kə ty vjɛn a.vɛk mwa/', 'zhak-sehpt a kohⁿ-dee-syohⁿ kuh tü VYENN a-vehk MWA', ['paire', 'condition']),
  chunk(1522, 'sans rien dire', 'without saying anything', '/sɑ̃ ʁjɛ̃ diʁ/', 'sahⁿ ryehⁿ DEER', ['paire', 'bloc']),
  chunk(1523, 'sans que personne le sache', 'without anybody knowing', '/sɑ̃ kə pɛʁ.sɔn lə saʃ/', 'sahⁿ kuh pehr-sonn luh SASH', ['paire', 'bloc']),
  chunk(1524, 'afin de comprendre', 'in order to understand', '/a.fɛ̃ də kɔ̃.pʁɑ̃dʁ/', 'a-fehⁿ duh kohⁿ-PRAHⁿDR', ['paire', 'bloc']),
  chunk(1525, 'à condition de payer', 'provided you pay', '/a kɔ̃.di.sjɔ̃ də pe.je/', 'a kohⁿ-dee-syohⁿ duh pay-YAY', ['paire', 'bloc']),
  sent(1526, 'Afin de est plus écrit que pour, et dit la même chose.', 'Afin de is more written than pour and says the same thing.', '/a.fɛ̃ də ɛ ply.ze.kʁi kə puʁ e di la mɛm ʃoz/', 'a-fehⁿ duh eh plü-zay-kree kuh POOR | ay dee la MEMM shohz', ['paire', 'regle']),
  sent(1527, 'Sans perd son que dès que le sujet ne change pas.', 'Sans drops its que as soon as the subject does not change.', '/sɑ̃ pɛʁ sɔ̃ kə dɛ kə lə sy.ʒɛ nə ʃɑ̃ʒ pa/', 'sahⁿ pehr sohⁿ KUH | deh kuh luh sü-zheh nuh shahⁿzh PA', ['paire', 'regle'], ['flashcard'],
    gap('Il est parti sans ... prévenir personne.', 'Ex : sans prévenir. Un seul sujet, donc pas de que.')),
  sent(1528, 'Tu peux venir, à condition de me prévenir la veille.', 'You can come, provided you tell me the day before.', '/ty pø və.niʁ a kɔ̃.di.sjɔ̃ də mə pʁev.niʁ la vɛj/', 'tü peu vuh-NEER | a kohⁿ-dee-syohⁿ duh muh prayv-neer la VEHY', ['paire', 'condition'], FCVDR),
  sent(1529, 'Tu peux venir, à condition que ton frère conduise.', 'You can come, provided your brother drives.', '/ty pø və.niʁ a kɔ̃.di.sjɔ̃ kə tɔ̃ fʁɛʁ kɔ̃.dɥiz/', 'tü peu vuh-NEER | a kohⁿ-dee-syohⁿ kuh tohⁿ frehr kohⁿ-DWEEZ', ['paire', 'condition']),
  sent(1530, 'Le technicien est passé sans que nous le voyions.', 'The engineer came round without us seeing him.', '/lə tɛk.ni.sjɛ̃ ɛ pa.se sɑ̃ kə nu lə vwa.jɔ̃/', 'luh tehk-nee-syehⁿ eh pa-say sahⁿ kuh noo luh vwa-YOHⁿ', ['paire', 'sans']),
  sent(1531, 'Cinq paires, cinq fois la même question.', 'Five pairs, the same question five times.', '/sɛ̃k pɛʁ sɛ̃k fwa la mɛm kɛs.tjɔ̃/', 'sehⁿk PEHR | sehⁿk fwa la MEMM kehs-TYOHⁿ', ['paire', 'regle'], ['flashcard'],
    rule('Quelle question poses-tu devant chaque paire ?', 'Ex : Combien de sujets. Pour, avant, sans, afin, à condition.')),
];

/* ── ACT 8 · LES QUATRE SANS PAIRE ──────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1532, 'Bien que je sois fatigué, je finis le chapitre.', 'Although I am tired, I am finishing the chapter.', '/bjɛ̃ kə ʒə swa fa.ti.ɡe ʒə fi.ni lə ʃa.pitʁ/', 'byehⁿ kuh zhuh swa fa-tee-GAY | zhuh fee-nee luh sha-PEETR', ['sanspaire', 'bienque'], FCVDR),
  sent(1533, 'Bien que le train soit à l’heure, je cours quand même.', 'Although the train is on time, I am running anyway.', '/bjɛ̃ kə lə tʁɛ̃ swa a lœʁ ʒə kuʁ kɑ̃ mɛm/', 'byehⁿ kuh luh trehⁿ swa a LUHR | zhuh koor kahⁿ MEMM', ['sanspaire', 'bienque']),
  sent(1534, 'Quoique la salle soit petite, tout le monde tient.', 'Although the room is small, everybody fits.', '/kwak la sal swa pə.tit tu lə mɔ̃d tjɛ̃/', 'kwak la sal swa puh-TEET | too luh mohⁿd TYEHⁿ', ['sanspaire', 'quoique']),
  sent(1535, 'Attends ici jusqu’à ce que le médecin t’appelle.', 'Wait here until the doctor calls you.', '/a.tɑ̃.zi.si ʒys.ka sə kə lə med.sɛ̃ ta.pɛl/', 'a-tahⁿ-zee-see zhüs-ka suh kuh luh mayd-sehⁿ ta-PEHL', ['sanspaire', 'jusqua'], FCVDR),
  sent(1536, 'Reste au chaud jusqu’à ce que la fièvre tombe.', 'Stay warm until the fever goes down.', '/ʁɛs.to ʃo ʒys.ka sə kə la fjɛvʁ tɔ̃b/', 'rehs-toh SHOH zhüs-ka suh kuh la fyehvr TOHⁿB', ['sanspaire', 'jusqua']),
  sent(1537, 'Pourvu que le colis arrive avant jeudi, tout ira bien.', 'As long as the parcel arrives before Thursday, all will be well.', '/puʁ.vy kə lə kɔ.li a.ʁiv a.vɑ̃ ʒø.di tu.ti.ʁa bjɛ̃/', 'poor-vü kuh luh ko-lee a-REEV a-vahⁿ zheu-DEE | too-tee-ra byehⁿ', ['sanspaire', 'pourvu']),
  chunk(1538, 'bien que', 'although', '/bjɛ̃ kə/', 'byehⁿ KUH', ['sanspaire', 'bloc']),
  chunk(1539, 'quoique', 'although', '/kwak/', 'KWAK', ['sanspaire', 'bloc']),
  chunk(1540, 'jusqu’à ce que', 'until', '/ʒys.ka sə kə/', 'zhüs-ka suh KUH', ['sanspaire', 'bloc']),
  chunk(1541, 'pourvu que', 'as long as', '/puʁ.vy kə/', 'poor-vü KUH', ['sanspaire', 'bloc']),
  sent(1542, 'Ces quatre-là n’ont pas de version courte.', 'These four have no short version.', '/se katʁ.la nɔ̃ pa də vɛʁ.sjɔ̃ kuʁt/', 'say katr-LA nohⁿ pa duh vehr-syohⁿ KOORT', ['sanspaire', 'regle'], ['flashcard'],
    rule('Que fais-tu avec bien que quand le sujet ne change pas ?', 'Ex : Bien que je sois fatigué. Tu gardes que.')),
  sent(1543, 'Avec eux, compter les sujets ne sert à rien.', 'With these four, counting the subjects gets you nowhere.', '/a.vɛk ø kɔ̃.te le sy.ʒɛ nə sɛʁ a ʁjɛ̃/', 'a-vehk EU | kohⁿ-tay lay sü-zheh nuh sehr a RYEHⁿ', ['sanspaire', 'regle'], ['flashcard'],
    rule('Pourquoi ces quatre expressions sortent-elles de la règle ?', 'Ex : Elles n’ont pas d’infinitif, donc que reste.')),
  sent(1544, 'Bien que nous soyons en retard, nous prenons le temps de saluer.', 'Although we are late, we take the time to say hello.', '/bjɛ̃ kə nu swa.jɔ̃.zɑ̃ ʁə.taʁ nu pʁə.nɔ̃ lə tɑ̃ də sa.lɥe/', 'byehⁿ kuh noo swa-yohⁿ-zahⁿ ruh-TAR | noo pruh-nohⁿ luh tahⁿ duh sal-WAY', ['sanspaire', 'bienque']),
  sent(1545, 'Quoique ce soit cher, le service en vaut la peine.', 'Although it is expensive, the service is worth it.', '/kwak sə swa ʃɛʁ lə sɛʁ.vis ɑ̃ vo la pɛn/', 'kwak suh swa SHEHR | luh sehr-vees ahⁿ voh la PENN', ['sanspaire', 'quoique']),
  sent(1546, 'Je patiente jusqu’à ce qu’on m’appelle au guichet.', 'I am waiting until they call me to the counter.', '/ʒə pa.sjɑ̃t ʒys.ka sə kɔ̃ ma.pɛl o ɡi.ʃɛ/', 'zhuh pa-syahⁿt zhüs-ka suh kohⁿ ma-pehl oh gee-SHEH', ['sanspaire', 'jusqua']),
  sent(1547, 'Pourvu qu’il fasse beau samedi, la fête sera dehors.', 'As long as it is fine on Saturday, the party will be outside.', '/puʁ.vy kil fas bo sam.di la fɛt sə.ʁa də.ɔʁ/', 'poor-vü keel FASS boh sam-DEE | la feht suh-ra duh-OR', ['sanspaire', 'pourvu']),
  sent(1548, 'Malgré prend un nom, jamais un verbe.', 'Malgré takes a noun, never a verb.', '/mal.ɡʁe pʁɑ̃.tœ̃ nɔ̃ ʒa.mɛ.zœ̃ vɛʁb/', 'mal-gray prahⁿ-tuhⁿ NOHⁿ | zha-meh-zuhⁿ VEHRB', ['sanspaire', 'malgre']),
  sent(1549, 'Malgré la fatigue, je finis le chapitre.', 'In spite of the tiredness, I am finishing the chapter.', '/mal.ɡʁe la fa.tiɡ ʒə fi.ni lə ʃa.pitʁ/', 'mal-gray la fa-TEEG | zhuh fee-nee luh sha-PEETR', ['sanspaire', 'malgre'], FCVDR),
];

/* ── ACT 9 · CHOISIR VITE ───────────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1550, 'Je passe à la banque avant de rentrer.', 'I am stopping at the bank before going home.', '/ʒə pas a la bɑ̃k a.vɑ̃ də ʁɑ̃.tʁe/', 'zhuh pass a la bahⁿk a-vahⁿ duh rahⁿ-TRAY', ['tri', 'avant'], FCVDR),
  sent(1551, 'Je passe à la banque avant qu’elle ferme.', 'I am stopping at the bank before it shuts.', '/ʒə pas a la bɑ̃k a.vɑ̃ kɛl fɛʁm/', 'zhuh pass a la bahⁿk a-vahⁿ kehl FEHRM', ['tri', 'avant']),
  sent(1552, 'Ils ont accepté de repousser la réunion.', 'They agreed to put the meeting back.', '/il.zɔ̃.tak.sɛp.te də ʁə.pu.se la ʁe.y.njɔ̃/', 'eel-zohⁿ-tak-sehp-tay duh ruh-poo-say la ray-ü-NYOHⁿ', ['tri', 'de']),
  sent(1553, 'Ils ont accepté que la réunion soit repoussée.', 'They agreed to the meeting being put back.', '/il.zɔ̃.tak.sɛp.te kə la ʁe.y.njɔ̃ swa ʁə.pu.se/', 'eel-zohⁿ-tak-sehp-tay kuh la ray-ü-nyohⁿ swa ruh-poo-SAY', ['tri', 'que']),
  sent(1554, 'Nous restons jusqu’à ce que le dernier client sorte.', 'We stay until the last customer leaves.', '/nu ʁɛs.tɔ̃ ʒys.ka sə kə lə dɛʁ.nje kli.ɑ̃ sɔʁt/', 'noo rehs-tohⁿ zhüs-ka suh kuh luh dehr-nyay klee-ahⁿ SORT', ['tri', 'sanspaire']),
  sent(1555, 'Il a fermé la porte sans faire de bruit.', 'He shut the door without making a noise.', '/i.la fɛʁ.me la pɔʁt sɑ̃ fɛʁ də bʁɥi/', 'ee-la fehr-may la PORT sahⁿ fehr duh BRWEE', ['tri', 'sans']),
  sent(1556, 'Il a fermé la porte sans que le chien bouge.', 'He shut the door without the dog moving.', '/i.la fɛʁ.me la pɔʁt sɑ̃ kə lə ʃjɛ̃ buʒ/', 'ee-la fehr-may la PORT sahⁿ kuh luh shyehⁿ BOOZH', ['tri', 'sans']),
  sent(1557, 'Elle a peur de conduire sous la neige.', 'She is afraid of driving in the snow.', '/ɛl a pœʁ də kɔ̃.dɥiʁ su la nɛʒ/', 'ehl a puhr duh kohⁿ-dweer soo la NEHZH', ['tri', 'de']),
  sent(1558, 'Elle a peur que la route soit glissante.', 'She is afraid the road will be slippery.', '/ɛl a pœʁ kə la ʁut swa ɡli.sɑ̃t/', 'ehl a puhr kuh la root swa glee-SAHⁿT', ['tri', 'que']),
  chunk(1559, 'un sujet ou deux', 'one subject or two', '/œ̃ sy.ʒɛ u dø/', 'uhⁿ sü-ZHEH oo DEU', ['tri', 'bloc']),
  chunk(1560, 'la petite lettre', 'the little letter', '/la pə.tit lɛtʁ/', 'la puh-teet LEHTR', ['tri', 'bloc']),
  sent(1561, 'Deux questions, dans cet ordre, et la phrase est faite.', 'Two questions, in that order, and the sentence is built.', '/dø kɛs.tjɔ̃ dɑ̃ sɛ.tɔʁdʁ e la fʁaz ɛ fɛt/', 'deu kehs-TYOHⁿ dahⁿ seh-TORDR | ay la fraz eh FEHT', ['tri', 'regle'], ['flashcard'],
    rule('Quelles deux questions poses-tu, et dans quel ordre ?', 'Ex : Combien de sujets, puis quelle petite lettre.')),
  sent(1562, 'Nous avons réussi à tout ranger avant leur arrivée.', 'We managed to tidy everything before they arrived.', '/nu.za.vɔ̃ ʁe.y.si a tu ʁɑ̃.ʒe a.vɑ̃ lœʁ a.ʁi.ve/', 'noo-za-vohⁿ ray-ü-see a too rahⁿ-zhay a-vahⁿ luhr a-ree-VAY', ['tri', 'a'], FCVDR),
  sent(1563, 'Il vaut mieux demander que de se tromper.', 'It is better to ask than to get it wrong.', '/il vo mjø də.mɑ̃.de kə də sə tʁɔ̃.pe/', 'eel voh myeu duh-mahⁿ-DAY kuh duh suh trohⁿ-PAY', ['tri', 'ilfaut']),
];

/* ── ACT 10 · CE QUE L’ANGLAIS TE FAIT ÉCRIRE ───────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1564, 'Je veux que tu viennes, pas je veux toi venir.', 'It is je veux que tu viennes, not je veux toi venir.', '/ʒə vø kə ty vjɛn pa ʒə vø twa və.niʁ/', 'zhuh veu kuh tü VYENN | pa zhuh veu twa vuh-NEER', ['anglais', 'objet'], FCVDR),
  sent(1565, 'L’anglais met une personne, le français ouvre une phrase.', 'English puts in a person, French opens a clause.', '/lɑ̃.ɡlɛ mɛ.tyn pɛʁ.sɔn lə fʁɑ̃.sɛ uvʁ yn fʁaz/', 'lahⁿ-gleh meh-tün pehr-SONN | luh frahⁿ-seh oovr ün FRAZ', ['anglais', 'regle']),
  sent(1566, 'Avant de sortir, ferme la fenêtre.', 'Before going out, shut the window.', '/a.vɑ̃ də sɔʁ.tiʁ fɛʁm la fə.nɛtʁ/', 'a-vahⁿ duh sor-TEER | fehrm la fuh-NEHTR', ['anglais', 'avant']),
  sent(1567, 'Avant que tu sortes, ferme la fenêtre.', 'Before you go out, shut the window.', '/a.vɑ̃ kə ty sɔʁt fɛʁm la fə.nɛtʁ/', 'a-vahⁿ kuh tü SORT | fehrm la fuh-NEHTR', ['anglais', 'avant']),
  sent(1568, 'En anglais, before leaving ne dit pas qui part.', 'In English, before leaving does not say who is leaving.', '/ɑ̃.nɑ̃.ɡlɛ bi.fɔʁ li.viŋ nə di pa ki paʁ/', 'ahⁿ-nahⁿ-GLEH | bee-for lee-veeng nuh dee pa kee PAR', ['anglais', 'avant']),
  sent(1569, 'Je suis content de te voir, pas content te voir.', 'It is content de te voir, not content te voir.', '/ʒə sɥi kɔ̃.tɑ̃ də tə vwaʁ pa kɔ̃.tɑ̃ tə vwaʁ/', 'zhuh swee kohⁿ-tahⁿ duh tuh VWAR | pa kohⁿ-tahⁿ tuh VWAR', ['anglais', 'de']),
  sent(1570, 'Elle m’a demandé de rappeler ce soir.', 'She asked me to call back tonight.', '/ɛl ma də.mɑ̃.de də ʁa.pə.le sə swaʁ/', 'ehl ma duh-mahⁿ-day duh ra-puh-lay suh SWAR', ['anglais', 'demander'], FCVDR),
  sent(1571, 'Elle a demandé que nous rappelions ce soir.', 'She asked that we call back tonight.', '/ɛl a də.mɑ̃.de kə nu ʁa.pə.ljɔ̃ sə swaʁ/', 'ehl a duh-mahⁿ-day kuh noo ra-puh-LYOHⁿ suh SWAR', ['anglais', 'demander']),
  chunk(1572, 'jamais que plus infinitif', 'never que plus an infinitive', '/ʒa.mɛ kə plys ɛ̃.fi.ni.tif/', 'zha-meh kuh plüss ehⁿ-fee-nee-TEEF', ['anglais', 'bloc']),
  chunk(1573, 'jamais toi plus infinitif', 'never toi plus an infinitive', '/ʒa.mɛ twa plys ɛ̃.fi.ni.tif/', 'zha-meh twa plüss ehⁿ-fee-nee-TEEF', ['anglais', 'bloc']),
  sent(1574, 'Après que, il faut un sujet et un verbe conjugué.', 'After que you need a subject and a finished verb.', '/a.pʁɛ kə il fo.tœ̃ sy.ʒɛ e œ̃ vɛʁb kɔ̃.ʒy.ɡe/', 'a-preh KUH | eel foh-tuhⁿ sü-zheh ay uhⁿ vehrb kohⁿ-zhü-GAY', ['anglais', 'regle'], ['flashcard'],
    rule('Qu’est-ce qui ne vient jamais juste après que ?', 'Ex : Un infinitif. Il faut un sujet, puis un verbe.')),
  sent(1575, 'Traduis l’idée, jamais les mots un par un.', 'Translate the idea, never the words one by one.', '/tʁa.dɥi li.de ʒa.mɛ le mo œ̃ paʁ œ̃/', 'tra-dwee lee-DAY | zha-meh lay moh uhⁿ par UHⁿ', ['anglais', 'regle'], ['flashcard'],
    rule('Pourquoi I want you to go ne se traduit-il pas mot à mot ?', 'Ex : Parce que le français ouvre une phrase avec que.')),
];

/* ── ACT 11 · ÉCRIRE LES DEUX FORMES ────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1576, 'Je voudrais poser une question avant la fin de la réunion.', 'I would like to ask a question before the meeting ends.', '/ʒə vu.dʁɛ po.ze yn kɛs.tjɔ̃ a.vɑ̃ la fɛ̃ də la ʁe.y.njɔ̃/', 'zhuh voo-dreh poh-zay ün kehs-TYOHⁿ a-vahⁿ la fehⁿ duh la ray-ü-NYOHⁿ', ['ecrire', 'nu'], FCVDR),
  sent(1577, 'Je voudrais que chacun donne son avis avant la fin.', 'I would like everyone to give their view before the end.', '/ʒə vu.dʁɛ kə ʃa.kœ̃ dɔn sɔ̃.na.vi a.vɑ̃ la fɛ̃/', 'zhuh voo-dreh kuh sha-kuhⁿ DONN sohⁿ-na-vee a-vahⁿ la FEHⁿ', ['ecrire', 'que']),
  sent(1578, 'Il est important de prévenir la gardienne avant le déménagement.', 'It is important to tell the caretaker before the move.', '/i.lɛ.tɛ̃.pɔʁ.tɑ̃ də pʁev.niʁ la ɡaʁ.djɛn a.vɑ̃ lə de.me.naʒ.mɑ̃/', 'ee-leh-tehⁿ-por-tahⁿ duh prayv-neer la gar-dyenn a-vahⁿ luh day-may-nazh-MAHⁿ', ['ecrire', 'de']),
  sent(1579, 'Il est important que la gardienne soit prévenue avant le déménagement.', 'It is important that the caretaker is told before the move.', '/i.lɛ.tɛ̃.pɔʁ.tɑ̃ kə la ɡaʁ.djɛn swa pʁe.və.ny a.vɑ̃ lə de.me.naʒ.mɑ̃/', 'ee-leh-tehⁿ-por-tahⁿ kuh la gar-dyenn swa pray-vuh-NÜ a-vahⁿ luh day-may-nazh-MAHⁿ', ['ecrire', 'que']),
  sent(1580, 'Nous louons la camionnette pour transporter les cartons.', 'We are renting the van to move the boxes.', '/nu lwɔ̃ la ka.mjɔ.nɛt puʁ tʁɑ̃s.pɔʁ.te le kaʁ.tɔ̃/', 'noo lwohⁿ la ka-myo-neht poor trahⁿs-por-tay lay kar-TOHⁿ', ['ecrire', 'paire']),
  sent(1581, 'Nous louons la camionnette pour que personne ne porte les cartons seul.', 'We are renting the van so that nobody carries the boxes alone.', '/nu lwɔ̃ la ka.mjɔ.nɛt puʁ kə pɛʁ.sɔn nə pɔʁt le kaʁ.tɔ̃ sœl/', 'noo lwohⁿ la ka-myo-neht poor kuh pehr-sonn nuh port lay kar-tohⁿ SUHL', ['ecrire', 'paire']),
  sent(1582, 'Bien que le camion soit petit, tout entre.', 'Although the van is small, everything fits.', '/bjɛ̃ kə lə ka.mjɔ̃ swa pə.ti tu.tɑ̃tʁ/', 'byehⁿ kuh luh ka-myohⁿ swa puh-TEE | too-TAHⁿTR', ['ecrire', 'sanspaire']),
  sent(1583, 'J’espère avoir fini avant la nuit.', 'I hope to have finished before dark.', '/ʒɛs.pɛʁ a.vwaʁ fi.ni a.vɑ̃ la nɥi/', 'zhehs-pehr a-vwar fee-nee a-vahⁿ la NWEE', ['ecrire', 'nu']),
  sent(1584, 'Merci d’avoir accepté de venir un samedi.', 'Thank you for agreeing to come on a Saturday.', '/mɛʁ.si da.vwaʁ ak.sɛp.te də və.niʁ œ̃ sam.di/', 'mehr-see da-vwar ak-sehp-tay duh vuh-neer uhⁿ sam-DEE', ['ecrire', 'de']),
  sent(1585, 'Je suis content que vous soyez tous libres ce jour-là.', 'I am glad you are all free that day.', '/ʒə sɥi kɔ̃.tɑ̃ kə vu swa.je tus libʁ sə ʒuʁ la/', 'zhuh swee kohⁿ-tahⁿ kuh voo swa-yay tooss leebr suh zhoor-LA', ['ecrire', 'que']),
  sent(1586, 'Préviens-moi avant de partir, pour que je descende ouvrir.', 'Let me know before you set off, so that I can come down and open up.', '/pʁe.vjɛ̃ mwa a.vɑ̃ də paʁ.tiʁ puʁ kə ʒə de.sɑ̃d u.vʁiʁ/', 'pray-vyehⁿ MWA a-vahⁿ duh par-TEER | poor kuh zhuh day-sahⁿd oo-VREER', ['ecrire', 'paire'], FCVDR),
  chunk(1587, 'avant de partir', 'before setting off', '/a.vɑ̃ də paʁ.tiʁ/', 'a-vahⁿ duh par-TEER', ['ecrire', 'bloc']),
  chunk(1588, 'pour que je descende', 'so that I can come down', '/puʁ kə ʒə de.sɑ̃d/', 'poor kuh zhuh day-SAHⁿD', ['ecrire', 'bloc']),
  sent(1589, 'Relis ton message et souligne chaque que.', 'Read your message again and underline every que.', '/ʁə.li tɔ̃ mɛ.saʒ e su.liɲ ʃak kə/', 'ruh-lee tohⁿ may-SAZH | ay soo-leeñ shak KUH', ['ecrire', 'regle'], ['flashcard'],
    rule('Comment relis-tu un message écrit ce soir ?', 'Ex : Chaque que doit avoir un sujet nouveau derrière lui.')),
  sent(1590, 'Un que sans nouveau sujet est un que de trop.', 'A que with no new subject is one que too many.', '/œ̃ kə sɑ̃ nu.vo sy.ʒɛ ɛ.tœ̃ kə də tʁo/', 'uhⁿ kuh sahⁿ noo-voh sü-ZHEH | eh-tuhⁿ kuh duh TROH', ['ecrire', 'regle'], ['flashcard'],
    gap('Je veux ... partir tôt demain.', 'Ex : Je veux partir. Un seul sujet, donc pas de que.')),
  sent(1591, 'Deux formes, une seule question posée à temps.', 'Two shapes, and one question asked in time.', '/dø fɔʁm yn sœl kɛs.tjɔ̃ po.ze a tɑ̃/', 'deu FORM | ün suhl kehs-tyohⁿ poh-zay a TAHⁿ', ['ecrire', 'regle'], FCVDR),
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
 *  Six readings, one each in acts 1, 3, 5, 7, 10 and 11. They live here so
 *  the reading, the drills and the quiz cannot drift apart. `reading` prose is
 *  exempt from the 45-word density cap (PASSAGE_SECTIONS).
 * ══════════════════════════════════════════════════════════════════════════ */

export const READING_COMPTER =
  "Jeudi soir, dans la cuisine d'un appartement à Rennes. Sur la table, une feuille et deux stylos. Yann et Awa organisent le départ de samedi. « Je veux partir à six heures », dit Yann. Awa lève les yeux. « Moi je veux que nous partions à cinq heures, sinon nous serons dans les bouchons. » Yann écrit les deux lignes l'une sous l'autre et les regarde. Les deux phrases disent presque la même chose, et pourtant la deuxième a un petit mot de plus, et le verbe n'a pas la même forme. Il compte : dans la première, c'est lui qui veut et c'est lui qui part. Une seule personne. Dans la deuxième, c'est Awa qui veut et c'est tout le monde qui part. Deux personnes. « D'accord, dit-il. Tu veux que je conduise, alors. » Awa sourit. « Je veux surtout dormir dans la voiture. » Elle vient de repasser à l'autre forme, sans y penser, parce que la personne qui veut et la personne qui dort sont redevenues la même.";

export const READING_DE =
  "Au comptoir d'un cabinet d'assurances, à Liège, une femme relit son contrat avant de signer. L'employé attend. « Je suis contente de trouver enfin quelqu'un qui m'explique les lignes en petit », dit-elle. L'employé sourit. « Et moi je suis content que vous les lisiez. Beaucoup de gens signent sans regarder. » Elle s'arrête sur un paragraphe. « J'ai peur de me tromper sur la date. » Il se penche. « Vous avez peur que la garantie commence trop tard, c'est ça. » Elle fait oui de la tête. Ils vérifient ensemble. Sur cette page, les mêmes idées reviennent deux fois : une fois avec « de » et un verbe qui ne bouge pas, une fois avec « que » et un verbe conjugué. La différence n'est jamais le sentiment. Elle est toujours dans la personne : quand c'est la même des deux côtés, le petit mot « de » suffit ; quand elle change, il faut ouvrir avec « que ».";

export const READING_IL_FAUT =
  "Dans le hall d'une mairie de banlieue, à Montréal, deux affiches sont collées côte à côte. La première dit : « Il faut prendre un numéro avant de se présenter au guichet. » La seconde, écrite à la main, dit : « Il faut que M. Traoré passe au bureau 12 avant midi. » La première s'adresse à tout le monde et ne nomme personne. Le « il » de « il faut » ne désigne aucune personne : c'est un il vide, comme dans « il pleut ». La seconde nomme quelqu'un, et dès qu'un nom apparaît, la phrase a besoin de « que ». Un agent passe et ajoute une troisième feuille : « Il vaut mieux revenir demain matin, le système est en panne. » Personne n'est nommé, donc pas de « que ». Trois affiches, deux formes, et une seule question derrière : est-ce que quelqu'un est nommé, oui ou non.";

export const READING_SANS =
  "Une résidence étudiante à Lausanne, un lundi matin. Le gardien a laissé une note sur la porte de la buanderie. « Merci de ne pas lancer de machine après vingt-deux heures, afin de ne pas réveiller le premier étage. Vous pouvez utiliser la salle le dimanche, à condition de ranger votre linge avant midi. » En dessous, quelqu'un a ajouté au crayon : « Quelqu'un a pris mon linge sans que je le sache, et l'a posé par terre. » Le gardien répond deux lignes plus bas : « Je passerai sans prévenir cette semaine, afin que tout le monde retrouve ses affaires. » Quatre expressions, quatre décisions. À chaque fois, la même question : est-ce que la personne qui agit dans la première partie est encore celle qui agit dans la seconde. Quand oui, la phrase reste courte. Quand non, « que » ouvre une deuxième partie avec son propre sujet.";

export const READING_ANGLAIS =
  "Dans une salle de cours du soir à Bruxelles, la professeure a écrit six phrases au tableau, toutes écrites par des étudiants anglophones la semaine précédente. « Je veux toi venir. » « Je veux que venir. » « Je suis content te voir. » « Avant tu pars, ferme la porte. » « Il veut que je partir. » « Je veux que je parte. » Elle ne les efface pas. Elle demande d'abord ce que chacune voulait dire, et les six intentions sont parfaitement claires. Puis elle écrit à côté la version française, et les six corrections se ressemblent. Dans quatre cas, il manquait un sujet et un verbe conjugué derrière « que ». Dans un cas, il manquait la petite préposition « de ». Dans le dernier, il y avait un « que » de trop, parce que la personne qui veut et la personne qui part étaient la même. « L'anglais vous a donné le sens, dit-elle. Il ne vous a pas donné la forme. »";

export const READING_MODELE =
  "Salut Inès, je t'écris pour samedi. Il faut que nous soyons à l'entrepôt à neuf heures, parce que la camionnette est réservée jusqu'à midi seulement. Je voudrais partir de chez moi à huit heures et quart pour éviter le pont. Bien que le camion soit petit, tout devrait entrer en deux voyages. Je suis content que tu puisses venir, franchement, parce que je n'arrive pas à porter le canapé tout seul. Avant de monter quoi que ce soit, prends une photo du compteur d'eau : il faut que le propriétaire l'ait avant lundi. J'ai demandé à Karim de passer vers onze heures pour qu'il nous aide dans l'escalier. Une dernière chose : préviens-moi avant que tu partes, pour que je descende ouvrir la porte du bas. À samedi, et merci d'avoir accepté de venir un samedi. Rémi.";

/** The annotation key for READING_MODELE: what the learner marks, in order.
 *  The counting test is done on the SUBJECTS, not on the words, so both
 *  lists are given. */
export const MODELE_DEUX_SUJETS = [
  'il faut que nous soyons',
  'je suis content que tu puisses',
  'il faut que le propriétaire l’ait',
  'pour qu’il nous aide',
  'avant que tu partes',
  'pour que je descende',
] as const;

export const MODELE_UN_SUJET = [
  'je voudrais partir',
  'pour éviter le pont',
  'je n’arrive pas à porter',
  'avant de monter',
  'j’ai demandé à Karim de passer',
  'merci d’avoir accepté de venir',
] as const;

/** The one shape in READING_MODELE that the counting test does NOT settle:
 *  « bien que le camion soit petit » keeps que because bien que has no
 *  infinitive form, not because a second subject arrived. */
export const MODELE_SANS_PAIRE = ['bien que le camion soit petit'] as const;
