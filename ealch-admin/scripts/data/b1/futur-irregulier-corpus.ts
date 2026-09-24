// b1.06.l1 « Le futur simple : les radicaux irréguliers » — the authored
// corpus, the imports and the citation constants. DRAFT, to
// RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (later lessons import these by name; do not rename):
// REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT, IMPORT_IDS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE IRREGULAR FUTURE STEMS, GROUPED SO THEY ARE LEARNABLE. b1.05 gives
//   the recipe (infinitive + the six endings). This lesson gives the twenty
//   stems that refuse the infinitive, and it insists that NOTHING ELSE
//   CHANGES: the six endings are the same six on every verb in French.
//
//     être > ser-   avoir > aur-   aller > ir-   faire > fer-             act 2
//     venir > viendr-   vouloir > voudr-                                  act 2
//     pouvoir > pourr-  voir > verr-  envoyer > enverr-                   act 3
//     mourir > mourr-   courir > courr-                                   act 3
//     venir / tenir / valoir / falloir / vouloir: a d from nowhere        act 4
//     savoir > saur-  devoir > devr-  recevoir > recevr-  pleuvoir > pleuvr-  act 5
//     il faudra · il y aura · il fera · il pleuvra · il vaudra mieux · ça ira  act 6
//     revenir, devenir, obtenir, retenir, refaire, revoir (and prévoir)   act 7
//     -ai -as -a -ons -ez -ont, unchanged on every stem                   act 8
//     je serai / j'étais · j'aurai / j'avais · je ferai / je faisais       act 9
//
//   Usage is NOT owned here. b1.07 owns quand, dès que and the conditions;
//   b1.10 owns si. No section in this lesson teaches a rule about « si » or
//   « quand », and the imports were filtered to keep those sentences out.
//
// QUOTED, NEVER TAUGHT (imported, never retyped):
//
//   b1.05  REFRAME, the regular recipe.  act 1 (the single recall mission)
//          and the closing roundup.
//   b1.01  REFRAME « Pars de nous, coupe -ons, ajoute la fin. »  act 9, where
//          the imparfait stem is put beside the future stem.
//
// LEAVES: the conditionnel présent (b1.08) takes THESE SAME STEMS with the
//   imparfait endings. Act 4 shows « je voudrais » once, as a preview, and
//   says so. Nothing here teaches the conditional.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `projets-et-futur` exists in seed `themes` (title « Les projets
//     et le futur », domain fondations, levelRange a2-b2) and holds ZERO
//     items, so it is NOT created at import. Ids are
//     `fr.b1.projets-et-futur.NNN`.
//  2. ID BLOCK: b1.06 owns `.200`-`.399`. b1.05 owns 001-199, b1.07 owns
//     400-599, b1.08 owns 600-799, b1.10 owns 800-999. Used here:
//     `.200`-`.397`, no gaps. Nothing outside the block.
//  3. THE SEED IS ABOUT A QUARTER OF POSTGRES. It publishes 75 sentences
//     carrying an irregular future stem; 22 of them are imported below. The
//     rest were rejected because they teach « si » or « dès que » (b1.07 and
//     b1.10 ground) or because the stem is buried in a subordinate clause.
//     Re-probe the DB at import: more may exist that the seed cut does not
//     hold.
//  4. THE IMPARFAIT CONTRAST ROWS (act 9, .356-.375) are authored fresh here
//     rather than imported from b1.01's draft corpus, because b1.01 is a
//     draft too and `src()` can only resolve the seed or this file. At import
//     they should be checked against b1.01's `.401`-`.550` block for a
//     duplicate French string before either is published.
//
// ══════════════════════════════════════════════════════════════════════════
//  §B. RESPELLINGS SPELLED FOR THE NASAL CHECKER, NOT FOR THE EAR
// ══════════════════════════════════════════════════════════════════════════
//
//   `validateDensity`'s `nasal-convention` false-positives on a real
//   consonant after a single vowel. Where a respelling in a SECTION ends in a
//   genuinely pronounced n or m, the consonant is doubled, exactly as a2.34
//   does: `SENN` for `scène`, `PRENN` for `prenne`, `SEMENN` for `semaine`.
//   Every nasal VOWEL closes with the superscript ⁿ and never a plain n or m.
//   No U+203F tie anywhere: a liaison consonant simply moves onto the next
//   syllable (`ee-loh-RAH` for « il aura »).

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b1.06',
  seq: 6,
  title: 'The Simple Future: Irregular Stems',
  sub: 'Le futur simple : les radicaux irréguliers',
  canDo: 'Can retrieve the high-frequency irregular future stems by family and use them to make real predictions, promises and plans, keeping the six endings unchanged',
  prereqUnitIds: ['b1.05'],
} as const;

export const LESSON_ID = 'b1.06.l1';
export const LESSON_TITLE = UNIT.sub;
export const THEME = 'projets-et-futur';
export const LEVEL = 'b1' as const;

/** The only block this lesson may author in. b1.05 owns 001-199, b1.07 owns
 *  400-599, b1.08 owns 600-799. */
export const ID_RANGES = [[200, 399]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A2 units are labelled from their real `seq` through `unitRef`, never by
 *  raw id. B1 units have no `seq` in seed.json yet, so they are cited by
 *  French title, exactly as b1.04 does.
 * ══════════════════════════════════════════════════════════════════════════ */

export const B105_REF = 'la leçon « Le futur simple : la formation »';
export const B101_REF = 'la leçon « L\'imparfait : la formation »';
export const B108_REF = 'la leçon sur le conditionnel présent';

function refFr(unitId: string): string {
  const m = /^lesson (\d+) in (\w+)$/.exec(unitRef(unitId));
  return m ? `la leçon ${m[1]} de l'${m[2]}` : unitId;
}

export const ALLER_UNIT = 'a2.02';
export const MODAUX_UNIT = 'a2.13';
export const SAVOIR_UNIT = 'a2.14';
export const FAIRE_UNIT = 'a2.12';
export const METEO_UNIT = 'a2.09';
export const ALLER_REF = refFr(ALLER_UNIT);
export const MODAUX_REF = refFr(MODAUX_UNIT);
export const SAVOIR_REF = refFr(SAVOIR_UNIT);
export const FAIRE_REF = refFr(FAIRE_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE QUOTATIONS
 *
 *  b1.01's reframe is a real import. b1.05's is a PLACEHOLDER: that lesson is
 *  being authored in parallel and its corpus file does not exist yet.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B101_REFRAME, REFRAME_EN as B101_REFRAME_EN } from './imparfait-formation-corpus.ts';

/** b1.05 landed while this lesson was being written, so the placeholder that
 *  stood here was replaced by the real import. Quoted verbatim on two learner
 *  surfaces (`a1-rappel` and `a11-fin`), never retyped. */
export { REFRAME as B105_REFRAME, REFRAME_EN as B105_REFRAME_EN } from './futur-simple-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE REFRAME
 *
 *  The lesson's whole argument in one line: a learner who has just been given
 *  twenty new stems believes twenty new conjugations are coming. They are
 *  not. One half of the word moves and the other half never does.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Le radical change, la fin ne change jamais.';
export const REFRAME_EN = 'The stem changes; the ending never does.';

/** The second constant the lesson leans on: every future stem, regular or
 *  irregular, ends in r. It is a test the learner can run on a form they have
 *  just built, which is why it is quoted rather than retyped. */
export const THE_R = 'Chaque radical du futur finit par un r.';
export const THE_R_EN = 'Every future stem ends in an r.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Apprends le radical, pas le verbe.',
    why: 'True as advice and empty as a rule: it says what to memorise and nothing about what the memorised thing then does. Act 8 exists to say the endings are untouched, and this line cannot carry that.',
  },
  {
    text: 'Tous les radicaux du futur finissent par r.',
    why: "True, useful, and it is THE_R, quoted in acts 3, 8 and 11. It fails as the reframe because it is also true of b1.05's regular stems, so it says nothing about what makes this lesson different.",
  },
  {
    text: "Il n'y a qu'une vingtaine de radicaux à apprendre.",
    why: 'A count, not a method. The count also drifts the moment the compounds of act 7 are included, and a reframe that stops being true in act 7 is worse than none.',
  },
  {
    text: 'Le futur ne regarde jamais en arrière.',
    why: "Memorable and about USAGE, which belongs to b1.07. It would also make act 9 (je serai against j'étais) look like a meaning lesson when it is an ear lesson.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE IMPORTS
 *
 *  Twenty-two published rows, each with its French in a trailing comment so
 *  a reader never has to open seed.json. Sentences teaching « si », « quand »
 *  or « dès que » were deliberately excluded: they are b1.07 and b1.10.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  /** Act 1: the future already doing its job, before any stem is named. */
  act1: [
    'fr.a2.heure-et-date.112',        // Le repas sera prêt dans vingt minutes.
    'fr.a2.hebergement.114',          // Votre chambre sera prête à quatorze heures.
  ],
  /** Act 2: the big six, in published sentences. */
  act2: [
    'fr.a2.heure-et-date.082',        // Cet après-midi sera très chargé.
    'fr.b1.heure-et-date.038',        // L'année prochaine sera pleine de projets.
    'fr.b1.heure-et-date.052',        // Demain, il sera trop tard pour changer d'avis.
    'fr.a2.nombres.034',              // J'aurai vingt ans l'année prochaine.
    'fr.a2.nombres.036',              // Il aura bientôt quarante ans.
    'fr.a2.heure-et-date.142',        // L'année prochaine, j'aurai trente ans.
    'fr.a1.jours-et-mois.205',        // Dimanche prochain, nous irons à la campagne.
    'fr.sons.voyelles.225',           // Demain matin, j'irai chercher du pain frais.  (named only)
    'fr.a2.sports-et-loisirs.047',    // Il ira au gymnase à sept heures ce soir.  (named only)
    'fr.b1.bien-etre.004',            // je ferai
    'fr.a2.courses.183',              // Ça fera huit euros dix, s'il vous plaît.
  ],
  /** Act 3: the -rr- family. */
  act3: [
    'fr.sons.liaisons.014',           // Tu verras, c'est un endroit magnifique.  (named only)
    'fr.b1.heure-et-date.053',        // On verra bien ce que l'avenir nous réserve.
  ],
  /** Act 4: the -dr- family, plus the conditional preview. */
  act4: [
    'fr.b1.heure-et-date.059',        // Ces dates ne conviennent à personne, il faudra les changer.  (named only)
    'fr.a1.cafe.003',                 // Je voudrais…
  ],
  act5: [] as string[],
  /** Act 6: the impersonals, in the wild. */
  act6: [
    'fr.sons.voyelles.438',           // J'espère qu'il fera très beau ce week-end.  (named only)
    'fr.b1.rp-famille.005',           // Le mariage aura lieu en juin.  (named only)
    'fr.a2.transports-quotidiens.204',// Le train aura un retard d'environ vingt minutes.
  ],
  act7: [] as string[],
  /** Act 8: the endings on a stem the learner has not been drilled on. */
  act8: [
    'fr.a2.transports-quotidiens.149',// Ça sera sur votre gauche.
  ],
  act9: [] as string[],
  /** Act 10: the service-counter futures, where a prediction is a promise. */
  act10: [
    'fr.a2.au-restaurant.179',        // Ce sera le menu du jour.
    'fr.a2.au-restaurant.144',        // Une carafe d'eau, ça ira ?
    'fr.a2.courses.176',              // Ce sera quoi pour vous ?
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Imports with NO `flashcard` drill in the seed: nameable in a section,
 *  never releasable through a tranche. */
export const NOT_DECK_ABLE = [
  'fr.sons.voyelles.225',            // sentence, review
  'fr.a2.sports-et-loisirs.047',     // dictation only
  'fr.sons.liaisons.014',            // sentence, review
  'fr.b1.heure-et-date.059',         // dictation only
  'fr.sons.voyelles.438',            // sentence, review
  'fr.b1.rp-famille.005',            // dictation, sentence
];

/** Imports with NO `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.a2.heure-et-date.082',
  'fr.a2.heure-et-date.112',
  'fr.b1.heure-et-date.038',
  'fr.b1.heure-et-date.052',
  'fr.b1.heure-et-date.053',
  'fr.a2.nombres.034',
  'fr.a2.nombres.036',
  'fr.a2.heure-et-date.142',
  'fr.a1.jours-et-mois.205',
  'fr.b1.bien-etre.004',
];

/** The imports a `practice` speak section may name. */
export const SPEAKABLE_IMPORTS = IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id));

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, the final stressed syllable of
 *  each group in caps, ü for French u, nasals closed with the superscript ⁿ.
 *
 *    -ai  [e]    RAY        -ons  [ɔ̃]  ROHⁿ
 *    -as  [a]    RAH        -ez   [e]  RAY
 *    -a   [a]    RAH        -ont  [ɔ̃]  ROHⁿ
 *
 *  Four of the six endings carry an audible r straight from the stem, which
 *  is why THE_R is a test a learner can actually run by ear.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
type VC = NonNullable<Item['verbCheck']>;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

type Pers = 'je' | 'tu' | 'il' | 'elle' | 'on' | 'nous' | 'vous' | 'ils' | 'elles';
const PN: Record<Pers, [VC['person'], VC['number']]> = {
  je: ['1', 's'], tu: ['2', 's'], il: ['3', 's'], elle: ['3', 's'], on: ['3', 's'],
  nous: ['1', 'p'], vous: ['2', 'p'], ils: ['3', 'p'], elles: ['3', 'p'],
};

/** A conjugation card. `prompt` is the card front, house shape of
 *  fr.a1.cuisine.005 (« manger · présent · nous »). */
const conj = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  inf: string, p: Pers, tags: string[], drills: Item['drills'] = FCVR,
  tense: 'futur' | 'imparfait' = 'futur',
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: [tense === 'futur' ? 'futur' : 'imparfait', ...tags], drills, version: 1,
  cardType: 'conjugation', prompt: `${inf} · ${tense} · ${p}`,
  verbCheck: { infinitive: inf, tense, person: PN[p][0], number: PN[p][1] },
  grammarPoints: [tense === 'futur' ? 'futur-simple' : 'imparfait'],
});

/** A fixed phrase: an impersonal or a set expression with no single subject
 *  the learner picks. */
const chunk = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['futur', ...tags], drills, version: 1, grammarPoints: ['futur-simple'],
});

const sent = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR, tense: 'futur' | 'imparfait' = 'futur'): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: [tense === 'futur' ? 'futur' : 'imparfait', ...tags], drills, version: 1,
  grammarPoints: [tense === 'futur' ? 'futur-simple' : 'imparfait'],
});

/** A rule card: `prompt` is the question, `fr` the rule. Never speakable. */
const rule = (n: number, prompt: string, fr: string, en: string, tags: string[]): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en,
  tags: ['futur', 'regle', ...tags], drills: ['flashcard', 'review'] as Item['drills'],
  version: 1, cardType: 'grammar', prompt, grammarPoints: ['futur-simple'],
});

/* ── ACT 1 · LE DÉMÉNAGEMENT ───────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  conj(200, 'je serai', 'I will be', '/ʒə sə.ʁe/', 'zhuh suh-RAY', 'être', 'je', ['grands', 'ser']),
  conj(201, "j'aurai", 'I will have', '/ʒo.ʁe/', 'zhoh-RAY', 'avoir', 'je', ['grands', 'aur']),
  sent(202, 'Je serai là à huit heures.', 'I will be there at eight.', '/ʒə sə.ʁe la a ɥi.tœʁ/', 'zhuh suh-ray LAH ah üee-TUHR', ['scene', 'promesse'], FCVDR),
  sent(203, "J'aurai les clés sur moi.", 'I will have the keys on me.', '/ʒo.ʁe le kle syʁ mwa/', 'zhoh-ray lay KLAY sür MWAH', ['scene', 'promesse'], FCVDR),
  sent(204, "J'étais là à huit heures.", 'I was there at eight.', '/ʒe.tɛ la a ɥi.tœʁ/', 'zhay-teh LAH ah üee-TUHR', ['scene', 'contraste'], FCVR, 'imparfait'),
  sent(205, "J'avais les clés sur moi.", 'I had the keys on me.', '/ʒa.vɛ le kle syʁ mwa/', 'zhah-veh lay KLAY sür MWAH', ['scene', 'contraste'], FCVR, 'imparfait'),
  conj(206, 'je ferai', 'I will do, I will make', '/ʒə fə.ʁe/', 'zhuh fuh-RAY', 'faire', 'je', ['grands', 'fer']),
  conj(207, "j'irai", 'I will go', '/ʒi.ʁe/', 'zhee-RAY', 'aller', 'je', ['grands', 'ir']),
  conj(208, 'je viendrai', 'I will come', '/ʒə vjɛ̃.dʁe/', 'zhuh vyehⁿ-DRAY', 'venir', 'je', ['grands', 'viendr']),
  conj(209, 'je pourrai', 'I will be able to', '/ʒə pu.ʁe/', 'zhuh poo-RAY', 'pouvoir', 'je', ['double-r', 'pourr']),
  conj(210, 'je saurai', 'I will know', '/ʒə so.ʁe/', 'zhuh soh-RAY', 'savoir', 'je', ['oir', 'saur']),
  chunk(211, 'il faudra', 'it will be necessary', '/il fo.dʁa/', 'eel foh-DRAH', ['impersonnel', 'faudr']),
  sent(212, 'Le camion arrivera à neuf heures.', 'The truck will arrive at nine.', '/lə ka.mjɔ̃ a.ʁi.vʁa a nœ.vœʁ/', 'luh kah-myohⁿ ah-ree-VRAH ah nuh-VUHR', ['regulier', 'rappel'], FCVDR),
  sent(213, 'Nous partirons vendredi matin.', 'We will leave on Friday morning.', '/nu paʁ.ti.ʁɔ̃ vɑ̃.dʁə.di ma.tɛ̃/', 'noo par-tee-ROHⁿ vahⁿ-druh-dee mah-TEHⁿ', ['regulier', 'rappel'], FCVDR),
];

/* ── ACT 2 · LES SIX GRANDS ────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  conj(214, 'tu seras', 'you will be', '/ty sə.ʁa/', 'tü suh-RAH', 'être', 'tu', ['grands', 'ser']),
  conj(215, 'il sera', 'he will be', '/il sə.ʁa/', 'eel suh-RAH', 'être', 'il', ['grands', 'ser']),
  conj(216, 'nous serons', 'we will be', '/nu sə.ʁɔ̃/', 'noo suh-ROHⁿ', 'être', 'nous', ['grands', 'ser']),
  conj(217, 'vous serez', 'you will be', '/vu sə.ʁe/', 'voo suh-RAY', 'être', 'vous', ['grands', 'ser']),
  conj(218, 'ils seront', 'they will be', '/il sə.ʁɔ̃/', 'eel suh-ROHⁿ', 'être', 'ils', ['grands', 'ser']),
  sent(219, 'Nous serons six à table samedi soir.', 'There will be six of us at the table on Saturday evening.', '/nu sə.ʁɔ̃ si.sa tabl sam.di swaʁ/', 'noo suh-rohⁿ see sah TABL sam-dee SWAR', ['grands', 'ser'], FCVDR),
  conj(220, 'tu auras', 'you will have', '/ty o.ʁa/', 'tü oh-RAH', 'avoir', 'tu', ['grands', 'aur']),
  conj(221, 'il aura', 'he will have', '/i.lo.ʁa/', 'ee-loh-RAH', 'avoir', 'il', ['grands', 'aur']),
  conj(222, 'nous aurons', 'we will have', '/nu.zo.ʁɔ̃/', 'noo zoh-ROHⁿ', 'avoir', 'nous', ['grands', 'aur']),
  conj(223, 'ils auront', 'they will have', '/il.zo.ʁɔ̃/', 'eel zoh-ROHⁿ', 'avoir', 'ils', ['grands', 'aur']),
  sent(224, 'Tu auras une réponse avant vendredi.', 'You will have an answer before Friday.', '/ty o.ʁa yn ʁe.pɔ̃s a.vɑ̃ vɑ̃.dʁə.di/', 'tü oh-rah ün ray-POHⁿSS ah-vahⁿ vahⁿ-druh-DEE', ['grands', 'aur'], FCVDR),
  conj(225, 'tu iras', 'you will go', '/ty i.ʁa/', 'tü ee-RAH', 'aller', 'tu', ['grands', 'ir']),
  conj(226, 'on ira', 'we will go (spoken)', '/ɔ̃.ni.ʁa/', 'ohⁿ-nee-RAH', 'aller', 'on', ['grands', 'ir']),
  conj(227, 'nous irons', 'we will go', '/nu.zi.ʁɔ̃/', 'noo zee-ROHⁿ', 'aller', 'nous', ['grands', 'ir']),
  conj(228, 'ils iront', 'they will go', '/il.zi.ʁɔ̃/', 'eel zee-ROHⁿ', 'aller', 'ils', ['grands', 'ir']),
  sent(229, 'On ira voir ma sœur à Québec.', 'We will go and see my sister in Quebec City.', '/ɔ̃.ni.ʁa vwaʁ ma sœʁ a ke.bɛk/', 'ohⁿ-nee-rah VWAR mah SUHR ah kay-BEK', ['grands', 'ir'], FCVDR),
  conj(230, 'tu feras', 'you will do', '/ty fə.ʁa/', 'tü fuh-RAH', 'faire', 'tu', ['grands', 'fer']),
  conj(231, 'il fera', 'he will do', '/il fə.ʁa/', 'eel fuh-RAH', 'faire', 'il', ['grands', 'fer']),
  conj(232, 'nous ferons', 'we will do', '/nu fə.ʁɔ̃/', 'noo fuh-ROHⁿ', 'faire', 'nous', ['grands', 'fer']),
  conj(233, 'ils feront', 'they will do', '/il fə.ʁɔ̃/', 'eel fuh-ROHⁿ', 'faire', 'ils', ['grands', 'fer']),
  sent(234, 'Après mes études, je ferai une formation en ligne.', 'After my studies, I will do an online course.', '/a.pʁɛ me.ze.tyd ʒə fə.ʁe yn fɔʁ.ma.sjɔ̃ ɑ̃ liɲ/', 'ah-preh may-zay-TÜD zhuh fuh-ray ün for-mah-syohⁿ ahⁿ LEENY', ['grands', 'fer'], FCVDR),
  conj(235, 'tu viendras', 'you will come', '/ty vjɛ̃.dʁa/', 'tü vyehⁿ-DRAH', 'venir', 'tu', ['grands', 'viendr']),
  conj(236, 'il viendra', 'he will come', '/il vjɛ̃.dʁa/', 'eel vyehⁿ-DRAH', 'venir', 'il', ['grands', 'viendr']),
  conj(237, 'nous viendrons', 'we will come', '/nu vjɛ̃.dʁɔ̃/', 'noo vyehⁿ-DROHⁿ', 'venir', 'nous', ['grands', 'viendr']),
  conj(238, 'ils viendront', 'they will come', '/il vjɛ̃.dʁɔ̃/', 'eel vyehⁿ-DROHⁿ', 'venir', 'ils', ['grands', 'viendr']),
  sent(239, 'Ils viendront tous les deux dimanche.', 'They will both come on Sunday.', '/il vjɛ̃.dʁɔ̃ tu le dø di.mɑ̃ʃ/', 'eel vyehⁿ-drohⁿ too lay DUH dee-MAHⁿSH', ['grands', 'viendr'], FCVDR),
  conj(240, 'je voudrai', 'I will want', '/ʒə vu.dʁe/', 'zhuh voo-DRAY', 'vouloir', 'je', ['grands', 'voudr']),
  conj(241, 'ils voudront', 'they will want', '/il vu.dʁɔ̃/', 'eel voo-DROHⁿ', 'vouloir', 'ils', ['grands', 'voudr']),
];

/* ── ACT 3 · LA FAMILLE EN -RR- ────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  conj(242, 'tu pourras', 'you will be able to', '/ty pu.ʁa/', 'tü poo-RAH', 'pouvoir', 'tu', ['double-r', 'pourr']),
  conj(243, 'il pourra', 'he will be able to', '/il pu.ʁa/', 'eel poo-RAH', 'pouvoir', 'il', ['double-r', 'pourr']),
  conj(244, 'nous pourrons', 'we will be able to', '/nu pu.ʁɔ̃/', 'noo poo-ROHⁿ', 'pouvoir', 'nous', ['double-r', 'pourr']),
  conj(245, 'ils pourront', 'they will be able to', '/il pu.ʁɔ̃/', 'eel poo-ROHⁿ', 'pouvoir', 'ils', ['double-r', 'pourr']),
  sent(246, 'Tu pourras rentrer tard demain soir.', 'You will be able to come home late tomorrow evening.', '/ty pu.ʁa ʁɑ̃.tʁe taʁ də.mɛ̃ swaʁ/', 'tü poo-rah rahⁿ-tray TAR duh-mehⁿ SWAR', ['double-r', 'pourr'], FCVDR),
  conj(247, 'je verrai', 'I will see', '/ʒə vɛ.ʁe/', 'zhuh veh-RAY', 'voir', 'je', ['double-r', 'verr']),
  conj(248, 'tu verras', 'you will see', '/ty vɛ.ʁa/', 'tü veh-RAH', 'voir', 'tu', ['double-r', 'verr']),
  conj(249, 'nous verrons', 'we will see', '/nu vɛ.ʁɔ̃/', 'noo veh-ROHⁿ', 'voir', 'nous', ['double-r', 'verr']),
  conj(250, 'ils verront', 'they will see', '/il vɛ.ʁɔ̃/', 'eel veh-ROHⁿ', 'voir', 'ils', ['double-r', 'verr']),
  sent(251, 'On verra ça la semaine prochaine.', 'We will look at that next week.', '/ɔ̃ vɛ.ʁa sa la sə.mɛn pʁɔ.ʃɛn/', 'ohⁿ veh-RAH sah lah suh-MENN pro-SHENN', ['double-r', 'verr'], FCVDR),
  conj(252, "j'enverrai", 'I will send', '/ʒɑ̃.vɛ.ʁe/', 'zhahⁿ-veh-RAY', 'envoyer', 'je', ['double-r', 'enverr']),
  conj(253, 'il enverra', 'he will send', '/i.lɑ̃.vɛ.ʁa/', 'ee-lahⁿ-veh-RAH', 'envoyer', 'il', ['double-r', 'enverr']),
  sent(254, "Je t'enverrai le contrat ce soir.", 'I will send you the contract this evening.', '/ʒə tɑ̃.vɛ.ʁe lə kɔ̃.tʁa sə swaʁ/', 'zhuh tahⁿ-veh-ray luh kohⁿ-TRAH suh SWAR', ['double-r', 'enverr'], FCVDR),
  conj(255, 'je courrai', 'I will run', '/ʒə ku.ʁe/', 'zhuh koo-RAY', 'courir', 'je', ['double-r', 'courr']),
  conj(256, 'il courra', 'he will run', '/il ku.ʁa/', 'eel koo-RAH', 'courir', 'il', ['double-r', 'courr']),
  sent(257, 'Elle courra son premier marathon en mai.', 'She will run her first marathon in May.', '/ɛl ku.ʁa sɔ̃ pʁə.mje ma.ʁa.tɔ̃ ɑ̃ mɛ/', 'el koo-rah sohⁿ pruh-myay mah-rah-TOHⁿ ahⁿ MEH', ['double-r', 'courr'], FCVDR),
  conj(258, 'il mourra', 'he will die', '/il mu.ʁa/', 'eel moo-RAH', 'mourir', 'il', ['double-r', 'mourr']),
  sent(259, 'Cette plante mourra sans lumière.', 'This plant will die without light.', '/sɛt plɑ̃t mu.ʁa sɑ̃ ly.mjɛʁ/', 'set PLAHⁿT moo-rah sahⁿ lü-MYEHR', ['double-r', 'mourr'], FCVDR),
  rule(260, 'pouvoir, voir, envoyer, courir, mourir : combien de r au futur ?', 'Deux r : pourr-, verr-, enverr-, courr-, mourr-.', 'Two r: pourr-, verr-, enverr-, courr-, mourr-.', ['double-r']),
  sent(261, 'Nous pourrons répondre demain matin.', 'We will be able to answer tomorrow morning.', '/nu pu.ʁɔ̃ ʁe.pɔ̃dʁ də.mɛ̃ ma.tɛ̃/', 'noo poo-rohⁿ ray-POHⁿDR duh-mehⁿ mah-TEHⁿ', ['double-r', 'pourr'], FCVDR),
];

/* ── ACT 4 · LA FAMILLE EN -DR- ────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  conj(262, 'je tiendrai', 'I will hold, I will keep', '/ʒə tjɛ̃.dʁe/', 'zhuh tyehⁿ-DRAY', 'tenir', 'je', ['le-d', 'tiendr']),
  conj(263, 'tu tiendras', 'you will hold', '/ty tjɛ̃.dʁa/', 'tü tyehⁿ-DRAH', 'tenir', 'tu', ['le-d', 'tiendr']),
  conj(264, 'il tiendra', 'he will hold', '/il tjɛ̃.dʁa/', 'eel tyehⁿ-DRAH', 'tenir', 'il', ['le-d', 'tiendr']),
  conj(265, 'ils tiendront', 'they will hold', '/il tjɛ̃.dʁɔ̃/', 'eel tyehⁿ-DROHⁿ', 'tenir', 'ils', ['le-d', 'tiendr']),
  sent(266, 'Je tiendrai ma promesse.', 'I will keep my promise.', '/ʒə tjɛ̃.dʁe ma pʁɔ.mɛs/', 'zhuh tyehⁿ-dray mah pro-MESS', ['le-d', 'promesse'], FCVDR),
  conj(267, 'il vaudra', 'it will be worth', '/il vo.dʁa/', 'eel voh-DRAH', 'valoir', 'il', ['le-d', 'vaudr']),
  chunk(268, 'il vaudra mieux', 'it will be better', '/il vo.dʁa mjø/', 'eel voh-drah MYUH', ['le-d', 'vaudr', 'impersonnel']),
  sent(269, 'Il vaudra mieux partir tôt.', 'It will be better to leave early.', '/il vo.dʁa mjø paʁ.tiʁ to/', 'eel voh-drah myuh par-teer TOH', ['le-d', 'vaudr'], FCVDR),
  sent(270, "Il faudra deux voitures pour tout emporter.", 'Two cars will be needed to take everything.', '/il fo.dʁa dø vwa.tyʁ puʁ tu.tɑ̃.pɔʁ.te/', 'eel foh-drah duh vwah-TÜR poor too-tahⁿ-por-TAY', ['le-d', 'faudr'], FCVDR),
  sent(271, 'Il faudra prévenir le propriétaire.', 'The landlord will have to be told.', '/il fo.dʁa pʁe.və.niʁ lə pʁɔ.pʁi.e.tɛʁ/', 'eel foh-drah pray-vuh-NEER luh pro-pree-ay-TEHR', ['le-d', 'faudr'], FCVDR),
  conj(272, 'tu voudras', 'you will want', '/ty vu.dʁa/', 'tü voo-DRAH', 'vouloir', 'tu', ['le-d', 'voudr']),
  sent(273, 'Tu voudras peut-être te reposer avant.', 'You may well want to rest first.', '/ty vu.dʁa pø.tɛtʁ tə ʁə.po.ze a.vɑ̃/', 'tü voo-drah puh-TETR tuh ruh-poh-ZAY ah-VAHⁿ', ['le-d', 'voudr'], FCVDR),
  conj(274, 'nous tiendrons', 'we will hold', '/nu tjɛ̃.dʁɔ̃/', 'noo tyehⁿ-DROHⁿ', 'tenir', 'nous', ['le-d', 'tiendr']),
  sent(275, 'Cette voiture vaudra moins cher dans deux ans.', 'This car will be worth less in two years.', '/sɛt vwa.tyʁ vo.dʁa mwɛ̃ ʃɛʁ dɑ̃ dø.zɑ̃/', 'set vwah-TÜR voh-drah mwehⁿ SHEHR dahⁿ duh-ZAHⁿ', ['le-d', 'vaudr'], FCVDR),
  rule(276, 'venir, tenir, valoir, falloir, vouloir : ce d vient d’où ?', "De nulle part. Il n'est pas dans l'infinitif : viendr-, tiendr-, vaudr-, faudr-, voudr-.", 'From nowhere. It is not in the infinitive: viendr-, tiendr-, vaudr-, faudr-, voudr-.', ['le-d']),
  sent(277, 'Personne ne voudra conduire la nuit.', 'Nobody will want to drive at night.', '/pɛʁ.sɔn nə vu.dʁa kɔ̃.dɥiʁ la nɥi/', 'pehr-SONN nuh voo-drah kohⁿ-DÜEER lah NÜEE', ['le-d', 'voudr'], FCVDR),
  sent(278, 'Ça ne vaudra pas la peine.', 'It will not be worth the trouble.', '/sa nə vo.dʁa pa la pɛn/', 'sah nuh voh-drah pah lah PENN', ['le-d', 'vaudr'], FCVDR),
  conj(279, 'vous tiendrez', 'you will hold', '/vu tjɛ̃.dʁe/', 'voo tyehⁿ-DRAY', 'tenir', 'vous', ['le-d', 'tiendr']),
  sent(280, 'Tu tiendras le coup, j’en suis sûr.', 'You will hold out, I am sure of it.', '/ty tjɛ̃.dʁa lə ku ʒɑ̃ sɥi syʁ/', 'tü tyehⁿ-drah luh KOO zhahⁿ süee SÜR', ['le-d', 'tiendr'], FCVDR),
  sent(281, 'Il faudra deux jours de plus.', 'Two more days will be needed.', '/il fo.dʁa dø ʒuʁ də plys/', 'eel foh-drah duh ZHOOR duh PLÜSS', ['le-d', 'faudr'], FCVDR),
];

/* ── ACT 5 · LES VERBES EN -OIR ────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  conj(282, 'tu sauras', 'you will know', '/ty so.ʁa/', 'tü soh-RAH', 'savoir', 'tu', ['oir', 'saur']),
  conj(283, 'il saura', 'he will know', '/il so.ʁa/', 'eel soh-RAH', 'savoir', 'il', ['oir', 'saur']),
  conj(284, 'nous saurons', 'we will know', '/nu so.ʁɔ̃/', 'noo soh-ROHⁿ', 'savoir', 'nous', ['oir', 'saur']),
  conj(285, 'ils sauront', 'they will know', '/il so.ʁɔ̃/', 'eel soh-ROHⁿ', 'savoir', 'ils', ['oir', 'saur']),
  sent(286, 'Tu sauras le résultat mardi.', 'You will know the result on Tuesday.', '/ty so.ʁa lə ʁe.zyl.ta maʁ.di/', 'tü soh-rah luh ray-zül-TAH mar-DEE', ['oir', 'saur'], FCVDR),
  conj(287, 'je devrai', 'I will have to', '/ʒə də.vʁe/', 'zhuh duh-VRAY', 'devoir', 'je', ['oir', 'devr']),
  conj(288, 'tu devras', 'you will have to', '/ty də.vʁa/', 'tü duh-VRAH', 'devoir', 'tu', ['oir', 'devr']),
  conj(289, 'il devra', 'he will have to', '/il də.vʁa/', 'eel duh-VRAH', 'devoir', 'il', ['oir', 'devr']),
  conj(290, 'nous devrons', 'we will have to', '/nu də.vʁɔ̃/', 'noo duh-VROHⁿ', 'devoir', 'nous', ['oir', 'devr']),
  sent(291, 'Je devrai passer à la banque avant midi.', 'I will have to stop at the bank before noon.', '/ʒə də.vʁe pa.se a la bɑ̃k a.vɑ̃ mi.di/', 'zhuh duh-vray pah-SAY ah lah BAHⁿK ah-vahⁿ mee-DEE', ['oir', 'devr'], FCVDR),
  conj(292, 'je recevrai', 'I will receive', '/ʒə ʁə.sə.vʁe/', 'zhuh ruh-suh-VRAY', 'recevoir', 'je', ['oir', 'recevr']),
  conj(293, 'tu recevras', 'you will receive', '/ty ʁə.sə.vʁa/', 'tü ruh-suh-VRAH', 'recevoir', 'tu', ['oir', 'recevr']),
  conj(294, 'nous recevrons', 'we will receive', '/nu ʁə.sə.vʁɔ̃/', 'noo ruh-suh-VROHⁿ', 'recevoir', 'nous', ['oir', 'recevr']),
  sent(295, 'Vous recevrez une confirmation par courriel.', 'You will receive a confirmation by email.', '/vu ʁə.sə.vʁe yn kɔ̃.fiʁ.ma.sjɔ̃ paʁ ku.ʁjɛl/', 'voo ruh-suh-VRAY ün kohⁿ-feer-mah-syohⁿ par koo-RYEL', ['oir', 'recevr'], FCVDR),
  conj(296, 'ils recevront', 'they will receive', '/il ʁə.sə.vʁɔ̃/', 'eel ruh-suh-VROHⁿ', 'recevoir', 'ils', ['oir', 'recevr']),
  chunk(297, 'il pleuvra', 'it will rain', '/il plø.vʁa/', 'eel pluh-VRAH', ['oir', 'pleuvr', 'impersonnel']),
  sent(298, 'Il pleuvra toute la semaine, d’après la météo.', 'It will rain all week, according to the forecast.', '/il plø.vʁa tut la sə.mɛn da.pʁɛ la me.te.o/', 'eel pluh-vrah toot lah suh-MENN dah-preh lah may-tay-OH', ['oir', 'pleuvr'], FCVDR),
  rule(299, 'savoir, devoir, recevoir, pleuvoir : où part le -oi- ?', 'Il disparaît : saur-, devr-, recevr-, pleuvr-.', 'It vanishes: saur-, devr-, recevr-, pleuvr-.', ['oir']),
  sent(300, 'Nous saurons bientôt qui remplace Malik.', 'We will soon know who is replacing Malik.', '/nu so.ʁɔ̃ bjɛ̃.to ki ʁɑ̃.plas ma.lik/', 'noo soh-rohⁿ byehⁿ-TOH kee rahⁿ-PLASS mah-LEEK', ['oir', 'saur'], FCVDR),
  sent(301, 'Elle devra choisir entre les deux postes.', 'She will have to choose between the two jobs.', '/ɛl də.vʁa ʃwa.ziʁ ɑ̃.tʁə le dø pɔst/', 'el duh-vrah shwah-ZEER ahⁿ-truh lay duh POST', ['oir', 'devr'], FCVDR),
];

/* ── ACT 6 · LES IMPERSONNELS ──────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  chunk(302, 'il y aura', 'there will be', '/i.lja.ʁa/', 'eel yah-RAH', ['impersonnel', 'aur']),
  sent(303, 'Il y aura du monde au marché samedi.', 'There will be a crowd at the market on Saturday.', '/i.lja.ʁa dy mɔ̃d o maʁ.ʃe sam.di/', 'eel yah-rah dü MOHⁿD oh mar-SHAY sam-DEE', ['impersonnel', 'aur'], FCVDR),
  sent(304, 'Il y aura une réunion mardi à dix heures.', 'There will be a meeting on Tuesday at ten.', '/i.lja.ʁa yn ʁe.y.njɔ̃ maʁ.di a di.zœʁ/', 'eel yah-rah ün ray-ü-NYOHⁿ mar-dee ah dee-ZUHR', ['impersonnel', 'aur'], FCVDR),
  chunk(305, 'il fera beau', 'the weather will be fine', '/il fə.ʁa bo/', 'eel fuh-rah BOH', ['impersonnel', 'fer', 'meteo']),
  sent(306, 'Il fera froid demain matin.', 'It will be cold tomorrow morning.', '/il fə.ʁa fʁwa də.mɛ̃ ma.tɛ̃/', 'eel fuh-rah FRWAH duh-mehⁿ mah-TEHⁿ', ['impersonnel', 'fer', 'meteo'], FCVDR),
  sent(307, 'Il fera nuit avant six heures.', 'It will be dark before six.', '/il fə.ʁa nɥi a.vɑ̃ si.zœʁ/', 'eel fuh-rah NÜEE ah-vahⁿ see-ZUHR', ['impersonnel', 'fer', 'meteo'], FCVDR),
  sent(308, 'Il ne fera pas beau ce week-end.', 'The weather will not be good this weekend.', '/il nə fə.ʁa pa bo sə wi.kɛnd/', 'eel nuh fuh-rah pah BOH suh week-END', ['impersonnel', 'fer', 'negation'], FCVDR),
  chunk(309, 'ça ira', 'it will be all right', '/sa i.ʁa/', 'sah ee-RAH', ['impersonnel', 'ir']),
  sent(310, 'Ça ira mieux demain.', 'Things will be better tomorrow.', '/sa i.ʁa mjø də.mɛ̃/', 'sah ee-rah myuh duh-MEHⁿ', ['impersonnel', 'ir'], FCVDR),
  sent(311, 'Il faudra du temps.', 'It will take time.', '/il fo.dʁa dy tɑ̃/', 'eel foh-drah dü TAHⁿ', ['impersonnel', 'faudr'], FCVDR),
  sent(312, 'Il pleuvra sur toute la région.', 'It will rain across the whole region.', '/il plø.vʁa syʁ tut la ʁe.ʒjɔ̃/', 'eel pluh-vrah sür toot lah ray-ZHYOHⁿ', ['impersonnel', 'pleuvr'], FCVDR),
  sent(313, 'Il neigera dans les Laurentides.', 'It will snow in the Laurentians.', '/il nɛ.ʒə.ʁa dɑ̃ le lo.ʁɑ̃.tid/', 'eel neh-zhuh-rah dahⁿ lay loh-rahⁿ-TEED', ['impersonnel', 'regulier', 'meteo'], FCVDR),
  chunk(314, "il n'y aura personne", 'there will be nobody', '/il ni.ja.ʁa pɛʁ.sɔn/', 'eel nee yah-rah pehr-SONN', ['impersonnel', 'negation', 'aur']),
  sent(315, "Il n'y aura personne au bureau lundi.", 'There will be nobody at the office on Monday.', '/il ni.ja.ʁa pɛʁ.sɔn o by.ʁo lœ̃.di/', 'eel nee yah-rah pehr-SONN oh bü-roh luhⁿ-DEE', ['impersonnel', 'negation'], FCVDR),
  sent(316, 'Il vaudra mieux réserver.', 'It will be better to book.', '/il vo.dʁa mjø ʁe.zɛʁ.ve/', 'eel voh-drah myuh ray-zehr-VAY', ['impersonnel', 'vaudr'], FCVDR),
  rule(317, 'Quel sujet prennent faudra, pleuvra, y aura ?', "Toujours il. Ces verbes n'ont qu'une seule personne.", 'Always il. These verbs have one person and no other.', ['impersonnel']),
  sent(318, 'Il y aura sûrement du retard.', 'There will surely be a delay.', '/i.lja.ʁa syʁ.mɑ̃ dy ʁə.taʁ/', 'eel yah-rah sür-MAHⁿ dü ruh-TAR', ['impersonnel', 'aur'], FCVDR),
  sent(319, 'On se demande s’il fera assez chaud pour manger dehors.', 'We wonder whether it will be warm enough to eat outside.', '/ɔ̃ sə də.mɑ̃d sil fə.ʁa a.se ʃo puʁ mɑ̃.ʒe də.ɔʁ/', 'ohⁿ suh duh-MAHⁿD seel fuh-rah ah-say SHOH poor mahⁿ-zhay duh-OR', ['impersonnel', 'fer'], FCVDR),
];

/* ── ACT 7 · LES COMPOSÉS ──────────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  conj(320, 'je reviendrai', 'I will come back', '/ʒə ʁə.vjɛ̃.dʁe/', 'zhuh ruh-vyehⁿ-DRAY', 'revenir', 'je', ['compose', 'viendr']),
  conj(321, 'il reviendra', 'he will come back', '/il ʁə.vjɛ̃.dʁa/', 'eel ruh-vyehⁿ-DRAH', 'revenir', 'il', ['compose', 'viendr']),
  sent(322, 'Je reviendrai te voir en août.', 'I will come back to see you in August.', '/ʒə ʁə.vjɛ̃.dʁe tə vwaʁ ɑ̃.nut/', 'zhuh ruh-vyehⁿ-dray tuh VWAR ahⁿ-NOOT', ['compose', 'viendr'], FCVDR),
  conj(323, 'je deviendrai', 'I will become', '/ʒə də.vjɛ̃.dʁe/', 'zhuh duh-vyehⁿ-DRAY', 'devenir', 'je', ['compose', 'viendr']),
  conj(324, 'elle deviendra', 'she will become', '/ɛl də.vjɛ̃.dʁa/', 'el duh-vyehⁿ-DRAH', 'devenir', 'elle', ['compose', 'viendr']),
  sent(325, 'Elle deviendra directrice en janvier.', 'She will become director in January.', '/ɛl də.vjɛ̃.dʁa di.ʁɛk.tʁis ɑ̃ ʒɑ̃.vje/', 'el duh-vyehⁿ-drah dee-rek-TREESS ahⁿ zhahⁿ-VYAY', ['compose', 'viendr'], FCVDR),
  conj(326, "j'obtiendrai", 'I will obtain', '/ʒɔp.tjɛ̃.dʁe/', 'zhob-tyehⁿ-DRAY', 'obtenir', 'je', ['compose', 'tiendr']),
  conj(327, 'il obtiendra', 'he will obtain', '/i.lɔp.tjɛ̃.dʁa/', 'ee-lob-tyehⁿ-DRAH', 'obtenir', 'il', ['compose', 'tiendr']),
  sent(328, "J'obtiendrai mon permis avant l'été.", 'I will get my licence before the summer.', '/ʒɔp.tjɛ̃.dʁe mɔ̃ pɛʁ.mi a.vɑ̃ le.te/', 'zhob-tyehⁿ-dray mohⁿ pehr-MEE ah-vahⁿ lay-TAY', ['compose', 'tiendr'], FCVDR),
  conj(329, 'je retiendrai', 'I will reserve, I will remember', '/ʒə ʁə.tjɛ̃.dʁe/', 'zhuh ruh-tyehⁿ-DRAY', 'retenir', 'je', ['compose', 'tiendr']),
  sent(330, 'Je retiendrai une table pour quatre.', 'I will book a table for four.', '/ʒə ʁə.tjɛ̃.dʁe yn tabl puʁ katʁ/', 'zhuh ruh-tyehⁿ-dray ün TABL poor KATR', ['compose', 'tiendr'], FCVDR),
  conj(331, 'je referai', 'I will do again', '/ʒə ʁə.fə.ʁe/', 'zhuh ruh-fuh-RAY', 'refaire', 'je', ['compose', 'fer']),
  sent(332, 'Nous referons la cuisine l’année prochaine.', 'We will redo the kitchen next year.', '/nu ʁə.fə.ʁɔ̃ la kɥi.zin la.ne pʁɔ.ʃɛn/', 'noo ruh-fuh-rohⁿ lah küee-ZEENN lah-NAY pro-SHENN', ['compose', 'fer'], FCVDR),
  conj(333, 'je reverrai', 'I will see again', '/ʒə ʁə.vɛ.ʁe/', 'zhuh ruh-veh-RAY', 'revoir', 'je', ['compose', 'verr']),
  sent(334, 'On se reverra à la rentrée.', 'We will see each other again in September.', '/ɔ̃ sə ʁə.vɛ.ʁa a la ʁɑ̃.tʁe/', 'ohⁿ suh ruh-veh-RAH ah lah rahⁿ-TRAY', ['compose', 'verr'], FCVDR),
  conj(335, 'je prévoirai', 'I will plan for', '/ʒə pʁe.vwa.ʁe/', 'zhuh pray-vwah-RAY', 'prévoir', 'je', ['compose', 'exception']),
  sent(336, 'Nous prévoirons un budget pour les travaux.', 'We will plan a budget for the work.', '/nu pʁe.vwa.ʁɔ̃ œ̃ byd.ʒɛ puʁ le tʁa.vo/', 'noo pray-vwah-ROHⁿ uhⁿ büd-ZHEH poor lay trah-VOH', ['compose', 'exception'], FCVDR),
  rule(337, 'Le préfixe change-t-il le radical ?', 'Non. revenir, devenir, obtenir, refaire, revoir gardent le radical du verbe simple. Sauf prévoir.', 'No. The compounds keep the simple verb stem. Except prévoir.', ['compose']),
];

/* ── ACT 8 · LES TERMINAISONS NE CHANGENT PAS ──────────────────────────── */

export const ACT8_ROWS: Row[] = [
  rule(338, 'Quelles sont les six terminaisons du futur ?', '-ai, -as, -a, -ons, -ez, -ont. Sur tous les verbes, sans exception.', '-ai, -as, -a, -ons, -ez, -ont. On every verb, with no exception.', ['fin']),
  conj(339, 'vous aurez', 'you will have', '/vu.zo.ʁe/', 'voo zoh-RAY', 'avoir', 'vous', ['fin', 'aur']),
  conj(340, 'vous irez', 'you will go', '/vu.zi.ʁe/', 'voo zee-RAY', 'aller', 'vous', ['fin', 'ir']),
  conj(341, 'vous ferez', 'you will do', '/vu fə.ʁe/', 'voo fuh-RAY', 'faire', 'vous', ['fin', 'fer']),
  conj(342, 'vous viendrez', 'you will come', '/vu vjɛ̃.dʁe/', 'voo vyehⁿ-DRAY', 'venir', 'vous', ['fin', 'viendr']),
  conj(343, 'vous pourrez', 'you will be able to', '/vu pu.ʁe/', 'voo poo-RAY', 'pouvoir', 'vous', ['fin', 'pourr']),
  conj(344, 'vous saurez', 'you will know', '/vu so.ʁe/', 'voo soh-RAY', 'savoir', 'vous', ['fin', 'saur']),
  conj(345, 'vous devrez', 'you will have to', '/vu də.vʁe/', 'voo duh-VRAY', 'devoir', 'vous', ['fin', 'devr']),
  sent(346, "Vous aurez besoin d'une pièce d'identité.", 'You will need a piece of identification.', '/vu.zo.ʁe bə.zwɛ̃ dyn pjɛs di.dɑ̃.ti.te/', 'voo zoh-ray buh-ZWEHⁿ dün PYESS dee-dahⁿ-tee-TAY', ['fin', 'aur'], FCVDR),
  sent(347, 'Vous pourrez payer sur place.', 'You will be able to pay on site.', '/vu pu.ʁe pɛ.je syʁ plas/', 'voo poo-ray peh-YAY sür PLASS', ['fin', 'pourr'], FCVDR),
  conj(348, 'on sera', 'we will be (spoken)', '/ɔ̃ sə.ʁa/', 'ohⁿ suh-RAH', 'être', 'on', ['fin', 'ser']),
  conj(349, 'on aura', 'we will have (spoken)', '/ɔ̃.no.ʁa/', 'ohⁿ-noh-RAH', 'avoir', 'on', ['fin', 'aur']),
  conj(350, 'on fera', 'we will do (spoken)', '/ɔ̃ fə.ʁa/', 'ohⁿ fuh-RAH', 'faire', 'on', ['fin', 'fer']),
  sent(351, 'On fera le tour du lac dimanche.', 'We will walk around the lake on Sunday.', '/ɔ̃ fə.ʁa lə tuʁ dy lak di.mɑ̃ʃ/', 'ohⁿ fuh-rah luh TOOR dü LAK dee-MAHⁿSH', ['fin', 'fer'], FCVDR),
  sent(352, 'On sera de retour avant la nuit.', 'We will be back before dark.', '/ɔ̃ sə.ʁa də ʁə.tuʁ a.vɑ̃ la nɥi/', 'ohⁿ suh-rah duh ruh-TOOR ah-vahⁿ lah NÜEE', ['fin', 'ser'], FCVDR),
  rule(353, 'Par quelle lettre finit un radical du futur ?', 'Par un r. Toujours, régulier ou irrégulier.', 'With an r. Always, regular or irregular.', ['fin']),
  sent(354, 'Nous aurons besoin de deux jours de plus.', 'We will need two more days.', '/nu.zo.ʁɔ̃ bə.zwɛ̃ də dø ʒuʁ də plys/', 'noo zoh-rohⁿ buh-ZWEHⁿ duh duh ZHOOR duh PLÜSS', ['fin', 'aur'], FCVDR),
  sent(355, 'Tu seras fier de toi.', 'You will be proud of yourself.', '/ty sə.ʁa fjɛʁ də twa/', 'tü suh-rah FYEHR duh TWAH', ['fin', 'ser'], FCVDR),
];

/* ── ACT 9 · FUTUR OU IMPARFAIT, À L'OREILLE ───────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(356, 'Je serai à Lyon en mars.', 'I will be in Lyon in March.', '/ʒə sə.ʁe a ljɔ̃ ɑ̃ maʁs/', 'zhuh suh-ray ah lyohⁿ ahⁿ MARSS', ['oreille', 'futur-cote'], FCVDR),
  sent(357, "J'étais à Lyon en mars.", 'I was in Lyon in March.', '/ʒe.tɛ a ljɔ̃ ɑ̃ maʁs/', 'zhay-teh ah lyohⁿ ahⁿ MARSS', ['oreille', 'imparfait-cote'], FCVDR, 'imparfait'),
  sent(358, "J'aurai le temps ce soir.", 'I will have time this evening.', '/ʒo.ʁe lə tɑ̃ sə swaʁ/', 'zhoh-ray luh TAHⁿ suh SWAR', ['oreille', 'futur-cote'], FCVDR),
  sent(359, "J'avais le temps ce soir-là.", 'I had time that evening.', '/ʒa.vɛ lə tɑ̃ sə swaʁ la/', 'zhah-veh luh TAHⁿ suh swar LAH', ['oreille', 'imparfait-cote'], FCVDR, 'imparfait'),
  sent(360, 'Je ferai les courses après le travail.', 'I will do the shopping after work.', '/ʒə fə.ʁe le kuʁs a.pʁɛ lə tʁa.vaj/', 'zhuh fuh-ray lay KOORSS ah-preh luh trah-VAHY', ['oreille', 'futur-cote'], FCVDR),
  sent(361, 'Je faisais les courses après le travail.', 'I used to do the shopping after work.', '/ʒə fə.zɛ le kuʁs a.pʁɛ lə tʁa.vaj/', 'zhuh fuh-zeh lay KOORSS ah-preh luh trah-VAHY', ['oreille', 'imparfait-cote'], FCVDR, 'imparfait'),
  sent(362, 'Je saurai quoi dire.', 'I will know what to say.', '/ʒə so.ʁe kwa diʁ/', 'zhuh soh-ray kwah DEER', ['oreille', 'futur-cote'], FCVDR),
  sent(363, 'Je savais quoi dire.', 'I knew what to say.', '/ʒə sa.vɛ kwa diʁ/', 'zhuh sah-veh kwah DEER', ['oreille', 'imparfait-cote'], FCVDR, 'imparfait'),
  sent(364, 'Je devrai partir tôt.', 'I will have to leave early.', '/ʒə də.vʁe paʁ.tiʁ to/', 'zhuh duh-vray par-teer TOH', ['oreille', 'futur-cote'], FCVDR),
  sent(365, 'Je devais partir tôt.', 'I was supposed to leave early.', '/ʒə də.vɛ paʁ.tiʁ to/', 'zhuh duh-veh par-teer TOH', ['oreille', 'imparfait-cote'], FCVDR, 'imparfait'),
  sent(366, 'Nous verrons le lac depuis la cuisine.', 'We will see the lake from the kitchen.', '/nu vɛ.ʁɔ̃ lə lak də.pɥi la kɥi.zin/', 'noo veh-rohⁿ luh LAK duh-püee lah küee-ZEENN', ['oreille', 'futur-cote'], FCVDR),
  sent(367, 'Nous voyions le lac depuis la cuisine.', 'We used to see the lake from the kitchen.', '/nu vwa.jɔ̃ lə lak də.pɥi la kɥi.zin/', 'noo vwah-yohⁿ luh LAK duh-püee lah küee-ZEENN', ['oreille', 'imparfait-cote'], FCVDR, 'imparfait'),
  sent(368, 'Tu pourras venir avec nous.', 'You will be able to come with us.', '/ty pu.ʁa və.niʁ a.vɛk nu/', 'tü poo-rah vuh-NEER ah-vek NOO', ['oreille', 'futur-cote'], FCVDR),
  sent(369, 'Tu pouvais venir avec nous.', 'You could have come with us.', '/ty pu.vɛ və.niʁ a.vɛk nu/', 'tü poo-veh vuh-NEER ah-vek NOO', ['oreille', 'imparfait-cote'], FCVDR, 'imparfait'),
  sent(370, 'Ils viendront en train.', 'They will come by train.', '/il vjɛ̃.dʁɔ̃ ɑ̃ tʁɛ̃/', 'eel vyehⁿ-drohⁿ ahⁿ TREHⁿ', ['oreille', 'futur-cote'], FCVDR),
  sent(371, 'Ils venaient en train.', 'They used to come by train.', '/il və.nɛ ɑ̃ tʁɛ̃/', 'eel vuh-neh ahⁿ TREHⁿ', ['oreille', 'imparfait-cote'], FCVDR, 'imparfait'),
  rule(372, 'ser-, aur-, fer- : quel temps ?', "Le futur. ét-, av-, fais- : l'imparfait. Deux radicaux, deux temps.", "The future. ét-, av-, fais- are the imparfait. Two stems, two tenses.", ['oreille']),
  rule(373, "Qu'est-ce qui sépare je serai de j'étais ?", "Tout le mot. Ce ne sont pas deux formes voisines : les radicaux n'ont rien en commun.", 'The whole word. These are not near neighbours: the stems share nothing.', ['oreille']),
  sent(374, 'Demain, il fera beau. Hier, il faisait gris.', 'Tomorrow the weather will be fine. Yesterday it was grey.', '/də.mɛ̃ il fə.ʁa bo jɛʁ il fə.zɛ ɡʁi/', 'duh-mehⁿ eel fuh-rah BOH · yehr eel fuh-zeh GREE', ['oreille', 'paire'], FCVDR),
  sent(375, "L'an prochain, j'aurai une voiture. L'an dernier, j'avais un vélo.", 'Next year I will have a car. Last year I had a bike.', '/lɑ̃ pʁɔ.ʃɛ̃ ʒo.ʁe yn vwa.tyʁ lɑ̃ dɛʁ.nje ʒa.vɛ œ̃ ve.lo/', 'lahⁿ pro-SHEHⁿ zhoh-ray ün vwah-TÜR · lahⁿ dehr-nyay zhah-veh uhⁿ vay-LOH', ['oreille', 'paire'], FCVDR),
];

/* ── ACT 10 · DE VRAIES PRÉDICTIONS ────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(376, 'Je te promets que je serai là.', 'I promise you I will be there.', '/ʒə tə pʁɔ.mɛ kə ʒə sə.ʁe la/', 'zhuh tuh pro-MEH kuh zhuh suh-ray LAH', ['promesse', 'ser'], FCVDR),
  sent(377, 'Le colis arrivera jeudi au plus tard.', 'The parcel will arrive on Thursday at the latest.', '/lə kɔ.li a.ʁi.vʁa ʒø.di o ply taʁ/', 'luh koh-LEE ah-ree-vrah zhuh-DEE oh plü TAR', ['prediction', 'regulier'], FCVDR),
  sent(378, 'Dans dix ans, ce quartier aura beaucoup changé.', 'In ten years, this neighbourhood will have changed a lot.', '/dɑ̃ di.zɑ̃ sə kaʁ.tje o.ʁa bo.ku ʃɑ̃.ʒe/', 'dahⁿ dee-ZAHⁿ suh kar-TYAY oh-rah boh-koo shahⁿ-ZHAY', ['prediction', 'aur'], FCVDR),
  sent(379, 'Les prix augmenteront encore cet automne.', 'Prices will rise again this autumn.', '/le pʁi oɡ.mɑ̃.tə.ʁɔ̃ ɑ̃.kɔʁ sɛ.tɔ.tɔn/', 'lay PREE ohg-mahⁿ-tuh-ROHⁿ ahⁿ-kor seh-toh-TONN', ['prediction', 'regulier'], FCVDR),
  sent(380, 'Tu verras, tu t’habitueras vite.', 'You will see, you will get used to it quickly.', '/ty vɛ.ʁa ty ta.bi.tɥə.ʁa vit/', 'tü veh-RAH tü tah-bee-tüuh-rah VEET', ['promesse', 'verr'], FCVDR),
  sent(381, 'Je ne pourrai pas venir jeudi soir.', 'I will not be able to come on Thursday evening.', '/ʒə nə pu.ʁe pa və.niʁ ʒø.di swaʁ/', 'zhuh nuh poo-ray pah vuh-neer zhuh-dee SWAR', ['negation', 'pourr'], FCVDR),
  sent(382, 'Nous ne saurons rien avant lundi.', 'We will not know anything before Monday.', '/nu nə so.ʁɔ̃ ʁjɛ̃ a.vɑ̃ lœ̃.di/', 'noo nuh soh-rohⁿ RYEHⁿ ah-vahⁿ luhⁿ-DEE', ['negation', 'saur'], FCVDR),
  sent(383, 'Ils ne viendront pas sans prévenir.', 'They will not come without letting us know.', '/il nə vjɛ̃.dʁɔ̃ pa sɑ̃ pʁe.və.niʁ/', 'eel nuh vyehⁿ-drohⁿ pah sahⁿ pray-vuh-NEER', ['negation', 'viendr'], FCVDR),
  chunk(384, 'je te tiendrai au courant', 'I will keep you posted', '/ʒə tə tjɛ̃.dʁe o ku.ʁɑ̃/', 'zhuh tuh tyehⁿ-dray oh koo-RAHⁿ', ['promesse', 'tiendr']),
  sent(385, 'Je te tiendrai au courant de la suite.', 'I will keep you posted on what happens next.', '/ʒə tə tjɛ̃.dʁe o ku.ʁɑ̃ də la sɥit/', 'zhuh tuh tyehⁿ-dray oh koo-RAHⁿ duh lah SÜEET', ['promesse', 'tiendr'], FCVDR),
  sent(386, 'Ça ira, ne t’inquiète pas.', 'It will be fine, do not worry.', '/sa i.ʁa nə tɛ̃.kjɛt pa/', 'sah ee-RAH nuh tehⁿ-KYET pah', ['promesse', 'ir'], FCVDR),
  sent(387, 'Il faudra choisir avant la fin du mois.', 'A choice will have to be made before the end of the month.', '/il fo.dʁa ʃwa.ziʁ a.vɑ̃ la fɛ̃ dy mwa/', 'eel foh-drah shwah-ZEER ah-vahⁿ lah fehⁿ dü MWAH', ['prediction', 'faudr'], FCVDR),
  chunk(388, 'on verra bien', 'we shall see', '/ɔ̃ vɛ.ʁa bjɛ̃/', 'ohⁿ veh-rah BYEHⁿ', ['prediction', 'verr']),
  sent(389, 'Tout sera prêt pour ton arrivée.', 'Everything will be ready for your arrival.', '/tu sə.ʁa pʁɛ puʁ tɔ̃.na.ʁi.ve/', 'too suh-rah PREH poor tohⁿ-nah-ree-VAY', ['promesse', 'ser'], FCVDR),
  sent(390, 'Je ferai de mon mieux.', 'I will do my best.', '/ʒə fə.ʁe də mɔ̃ mjø/', 'zhuh fuh-ray duh mohⁿ MYUH', ['promesse', 'fer'], FCVDR),
  sent(391, 'Dans un an, je parlerai français sans y penser.', 'In a year, I will speak French without thinking about it.', '/dɑ̃.zœ̃.nɑ̃ ʒə paʁ.lə.ʁe fʁɑ̃.sɛ sɑ̃.zi pɑ̃.se/', 'dahⁿ-zuhⁿ-NAHⁿ zhuh par-luh-ray frahⁿ-SEH sahⁿ-zee pahⁿ-SAY', ['prediction', 'regulier'], FCVDR),
];

/* ── ACT 11 · TOUT ENSEMBLE ────────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(392, "Dans cinq ans, j'aurai mon propre atelier.", 'In five years, I will have my own workshop.', '/dɑ̃ sɛ̃.kɑ̃ ʒo.ʁe mɔ̃ pʁɔpʁ a.tə.lje/', 'dahⁿ sehⁿ-KAHⁿ zhoh-ray mohⁿ PROPR ah-tuh-LYAY', ['tache', 'aur'], FCVDR),
  sent(393, 'Je ne sais pas encore où je serai.', 'I do not know yet where I will be.', '/ʒə nə sɛ pa.zɑ̃.kɔʁ u ʒə sə.ʁe/', 'zhuh nuh seh pah-zahⁿ-KOR oo zhuh suh-RAY', ['tache', 'ser'], FCVDR),
  sent(394, 'Mes enfants seront grands.', 'My children will be grown up.', '/me.zɑ̃.fɑ̃ sə.ʁɔ̃ ɡʁɑ̃/', 'may-zahⁿ-fahⁿ suh-rohⁿ GRAHⁿ', ['tache', 'ser'], FCVDR),
  sent(395, 'Nous reviendrons souvent à Dakar.', 'We will come back to Dakar often.', '/nu ʁə.vjɛ̃.dʁɔ̃ su.vɑ̃ a da.kaʁ/', 'noo ruh-vyehⁿ-drohⁿ soo-vahⁿ ah dah-KAR', ['tache', 'compose'], FCVDR),
  sent(396, 'Il y aura des choses que je ne prévoirai pas.', 'There will be things I will not plan for.', '/i.lja.ʁa de ʃoz kə ʒə nə pʁe.vwa.ʁe pa/', 'eel yah-rah day SHOHZ kuh zhuh nuh pray-vwah-ray PAH', ['tache', 'exception'], FCVDR),
  sent(397, 'Tout ne se passera pas comme prévu, et ça ira.', 'Not everything will go as planned, and it will be fine.', '/tu nə sə pa.sə.ʁa pa kɔm pʁe.vy e sa i.ʁa/', 'too nuh suh pah-suh-rah pah kom pray-VÜ ay sah ee-RAH', ['tache', 'ir'], FCVDR),
];

/* ── ALL ───────────────────────────────────────────────────────────────── */

/** Per act, index-aligned with the lesson's eleven acts. */
export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Per act, so each act's dictation names only what that act taught. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

export const DICTEE_IDS = ALL_ROWS.filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** Every authored id a `practice` speak section may name. */
export const SPEAKABLE_IDS = ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. WHAT THE APP CAN AND CANNOT TEST HERE
 *
 *  fold() = NFD, strip combining marks, lowercase, strip . , ! ? ; : « » ( )
 *  [ ] and apostrophes/hyphens, strip whitespace.
 *
 *    je serai / je serais      different letters, TYPEABLE   (the ear barely)
 *    pourrai / pourai          different letters, TYPEABLE   (the double r)
 *    verrai / voirai           different letters, TYPEABLE
 *    j'aurai / jaurai          ONE STRING (the apostrophe folds). Harmless.
 *    il fera / il ferra        different letters, TYPEABLE
 * ══════════════════════════════════════════════════════════════════════════ */

export const WANTED_AND_IMPOSSIBLE: readonly { want: string; why: string }[] = [
  {
    want: 'a listenChoose between « je serai » and « je serais »',
    why: 'The future [e] against the conditional [ɛ] is neutralised by most speakers at the end of a word. The conditional is b1.08 anyway, so the pair is never asked by ear here.',
  },
  {
    want: 'a typeIn testing the doubled r of pourrai by sound',
    why: '/puʁe/ has one r. The doubled r is spelling only, so it is tested by typing and by dictation, never by listenChoose.',
  },
  {
    want: 'a listenChoose between « nous verrons » and « nous voyions »',
    why: 'That one IS audible and is used, in act 9. Listed here so the next author does not remove it as a lookalike of the two above.',
  },
];

/** Error forms the lesson prints on purpose, only where it marks them wrong. */
export const WRONG_FORMS = [
  'je êtrai', 'j’avoirai', 'j’allerai', 'je fairai', 'je venirai', 'je pouvoirai',
  'je pourai', 'je verai', 'j’envoyerai', 'je savoirai', 'je devoirai',
  'je voulerai', 'je prévoirrai', 'il pleuvoira', 'nous serions',
] as const;
