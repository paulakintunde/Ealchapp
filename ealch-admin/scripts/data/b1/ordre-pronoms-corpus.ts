// b1.17.l1 « L'ordre des pronoms » — the authored corpus, the imports and the
// citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top of
// B1-BUILD-PLAYBOOK.md.
//
// Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (do not rename; a later lesson may import them): REFRAME,
// REFRAME_EN, THE_FILE, THE_FILE_IMP, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS — B1 Unit 3, sentence expansion, lesson 4 of 4
// ══════════════════════════════════════════════════════════════════════════
//
//   WHERE THE LITTLE WORDS GO WHEN THERE IS MORE THAN ONE. A2 taught each
//   pronoun on its own and never two together. This lesson owns the ORDER
//   and the POSITION, and nothing else:
//
//     the file           me te se nous vous · le la les · lui leur · y · en
//     the combinations   je le lui donne · tu me les montres · il y en a
//                        je t'en parle · on nous l'a dit
//     the order flip     donne-le-moi · dis-le-nous     (affirmative only)
//     the negative       ne me le donne pas             (ordinary file)
//     the passé composé  je le lui ai donné · je les ai vues
//     the infinitive     je vais le lui donner · tu peux m'en parler
//     the sound          je t'en · il m'y · on l'y · il y en a
//
//   and the six things an anglophone gets wrong with them:
//
//     1  the person written before the thing (je lui le donne)     act 3
//     2  the thing written before me/te (tu les me montres)        act 4
//     3  en placed anywhere but last (je en te parle)              act 5
//     4  the affirmative order kept in front (le me donne)         act 6
//     5  the negative order flipped too (ne donne-le-moi pas)      act 7
//     6  the file parked on the participle or the first verb       acts 8, 9
//        (j'ai le lui donné · je le vais donner)
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS LESSON LEAVES ALONE
// ══════════════════════════════════════════════════════════════════════════
//
//   RELATIVE PRONOUNS (qui, que, dont, où, lequel, ce qui, ce que) belong to
//   b1.11, b1.12 and b1.13 and are already taught. They are a DIFFERENT
//   FAMILY: a relative joins two sentences, an object pronoun replaces a
//   noun in one. Nothing in this lesson builds a relative clause, and act 2
//   says the difference once, on a card, so the two families cannot blur.
//
//   WHAT EACH PRONOUN MEANS is A2's: a2.06 (le, la, les), a2.24 (lui, leur)
//   and a2.25 (y, en). This lesson assumes all three and never redefines
//   them. Stressed pronouns (moi, toi) appear only where the affirmative
//   imperative forces them.
//
//   NO UNGRAMMATICAL SENTENCE IS EVER A ROW. Every wrong order this lesson
//   shows lives in a `commonErrors.wrong`, a `trapDrill.promptSound` or a
//   quiz `errorSpot.prompt`, never in the corpus: a row is releasable to the
//   SRS and would be drilled as if it were French.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `pronoms-essentiels` exists (domain fondations, levelRange
//     a1-b2), so nothing is created at import.
//  2. POSTGRES PROBED 2026-09-25 by the wave orchestrator (not the seed):
//        693 rows across all levels, 138 of them `fr.b1.*` at .001-.138,
//        the highest number anywhere in the theme is .395.
//     AUTHORED IDS THEREFORE START AT 1600.
//  3. ID BLOCK: b1.17 owns `.1600`-`.1799` and nothing else. b1.11 owns
//     1000-1199, b1.12 owns 1200-1399 and b1.13 owns 1400-1592; none of
//     them is written into here. Authored range actually used: 1600-1797.
//  4. THE SEED IS ALMOST EMPTY ON THIS TOPIC, measured 2026-09-25 over all
//     11,209 seed rows: FOUR sentences carry two pre-verbal pronouns
//     (`Je te l'envoie par mail.`, `Je vous le remplace tout de suite.`,
//     `Ça me le fait aussi depuis hier.`, `Vous pouvez me l'écrire, s'il
//     vous plaît ?`), ZERO carry an imperative with two pronouns, and the
//     only `le/la/les + lui/leur` hits are possessive `le leur`. That is
//     why this lesson authors 198 rows: the combination it teaches is not
//     in the corpus at all.
//  5. POSTGRES HOLDS ~115 published `fr.b1.pronoms-essentiels.*` rows the
//     seed does not carry, and some will be on this topic. They cannot be
//     named by a section today because `src()` resolves against seed.json
//     and a DB-only id throws at module load. Re-probe at import and
//     dedupe: this corpus may hold twins. Open question 1 for Paul.
//  6. Every imported id below was read out of `ealch-v2/src/content/seed.json`
//     on 2026-09-25 and its French is quoted verbatim in a trailing comment.
//     Seed-checked only, DB check pending at import.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A2. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN FOR THE EAR
// ══════════════════════════════════════════════════════════════════════════
//
//   `validateDensity`'s nasal rule cannot always tell a real consonant from
//   a nasal vowel. Where it would fire on a correct respelling the consonant
//   is doubled, as a2.34 and b1.12 do. Every doubled consonant here:
//       donne/donnes   DONN      (double n in the source, doubled here too)
//       donne-         donn-     (the imperative, same word)
//       personne       pehr-SONN (double n in the source)
//       téléphone      tay-lay-FONN (a real /n/ after a single n)
//       une            ÜNN       (a real /n/ after a single n)
//       semaine        suh-MENN
//   Nasal vowels always close with the superscript: ahⁿ, ohⁿ, uhⁿ, ehⁿ.
//   No U+203F tie anywhere, in respell or in IPA: a liaison consonant simply
//   moves onto the next syllable (« noo-zee-VOHⁿ », not a tied « nous y »).
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that opens a sentence needs a capital, and the label is built
 *  at interpolation time rather than typed. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b1.17',
  seq: 17,
  /** English: `content_units` matches it against overview.titleEn. */
  title: 'The Order of Pronouns',
  sub: "L'ordre des pronoms",
  canDo: 'Can put two object pronouns in the right order in front of a verb, move them behind an affirmative command with hyphens, keep the ordinary order in a negative command, and place the whole group in front of the auxiliary in the passé composé or on the infinitive that governs it',
  prereqUnitIds: ['a2.25'],
} as const;

export const LESSON_ID = 'b1.17.l1';
export const LESSON_TITLE = "L'ordre des pronoms";
export const THEME = 'pronoms-essentiels';
export const LEVEL = 'b1' as const;

/** b1.17's block. Nothing outside it. b1.11 owns 1000-1199, b1.12 1200-1399,
 *  b1.13 1400-1599. */
export const ID_RANGES = [[1600, 1799]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. QUOTATIONS AND CITATIONS
 * ══════════════════════════════════════════════════════════════════════════ */

/** The three A2 pronoun lessons this one sits on. Imported, never retyped,
 *  so a reword there cannot silently diverge here. A2 is taught in English,
 *  so every screen that shows one follows it with a French rendering. */
export { REFRAME as A206_REFRAME } from '../pronoms-direct-corpus.ts';
export { REFRAME as A224_REFRAME } from '../pronoms-indirect-corpus.ts';
export { REFRAME as A225_REFRAME } from '../y-en-corpus.ts';

export const A206_REFRAME_FR = 'Le pronom passe devant le verbe, jamais derrière.';
export const A224_REFRAME_FR = "Si la personne est derrière à, le pronom est lui ou leur.";
export const A225_REFRAME_FR = "La préposition entre dans le pronom, pour ne pas être dite deux fois.";

/** b1.11's ground: the other family of little words, named once so the two
 *  cannot blur. */
export { REFRAME as B111_REFRAME, REFRAME_EN as B111_REFRAME_EN } from './qui-que-corpus.ts';

/** B1 units have no `seq` in seed.json, so `unitRef` cannot label them. They
 *  are cited by their planned trail position. A2 units use their real seq. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5, 'b1.06': 6,
  'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10, 'b1.11': 11, 'b1.12': 12,
  'b1.13': 13, 'b1.14': 14, 'b1.15': 15, 'b1.16': 16, 'b1.17': 17, 'b1.18': 18,
};
function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  if (planned) return `la leçon ${planned} du B1`;
  const m = /^lesson (\d+) in (\w+)$/.exec(unitRef(unitId));
  return m ? `la leçon ${m[1]} de l'${m[2]}` : unitId;
}

export const COD_UNIT = 'a2.06';
export const COI_UNIT = 'a2.24';
export const YEN_UNIT = 'a2.25';
export const PC_AVOIR_UNIT = 'a2.05';
export const PARTICIPES_UNIT = 'a2.20';
export const PC_ETRE_UNIT = 'a2.21';
export const PRONOMINAL_UNIT = 'a2.22';
export const FUTUR_PROCHE_UNIT = 'a2.19';
export const MODAUX_UNIT = 'a2.13';
export const QUI_QUE_UNIT = 'b1.11';

export const COD_REF = refFr(COD_UNIT);
export const COI_REF = refFr(COI_UNIT);
export const YEN_REF = refFr(YEN_UNIT);
export const PC_AVOIR_REF = refFr(PC_AVOIR_UNIT);
export const PARTICIPES_REF = refFr(PARTICIPES_UNIT);
export const PRONOMINAL_REF = refFr(PRONOMINAL_UNIT);
export const FUTUR_PROCHE_REF = refFr(FUTUR_PROCHE_UNIT);
export const MODAUX_REF = refFr(MODAUX_UNIT);
export const QUI_QUE_REF = refFr(QUI_QUE_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE REFRAME
 *
 *  The lesson's whole claim, said as a picture rather than as a table. It is
 *  true in one hundred per cent of the sentences this lesson prints,
 *  INCLUDING the affirmative imperative, where the file changes its internal
 *  order but is still one file and still glued to its verb, and including
 *  the infinitive, where the file is glued to the SECOND verb rather than
 *  the conjugated one.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Les petits mots font une seule file, toujours collée au verbe.';
export const REFRAME_EN = 'The little words form one single queue, always glued to its verb.';

/** The five places, in order. Printed as a string wherever the flow shows the
 *  file, so the order exists in exactly one place in the source. */
export const THE_FILE = 'me te se nous vous · le la les · lui leur · y · en';
/** The same file after an affirmative order: the thing moves to the front and
 *  me / te become moi / toi. */
export const THE_FILE_IMP = 'le la les · moi toi lui nous vous leur · y · en';

/** The one-line test the drills use as a coach line. */
export const THE_TEST = 'Compte les places : la chose avant la personne, et en tout à la fin.';
export const THE_TEST_EN = 'Count the places: the thing before the person, and en right at the end.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: "Le complément d'objet direct passe avant le complément d'objet indirect.",
    why: "Flatly false, and it is the rule most grammar books give: « tu me les montres » puts the indirect me in front of the direct les. It only holds for the lui / leur row, which is act 3 alone, and act 4 exists to contradict it.",
  },
  {
    text: 'Le pronom passe devant le verbe.',
    why: `Already owned by ${COD_UNIT} and quoted here as A2's reframe, not reused as this lesson's. It is also false for the affirmative imperative, which acts 6 and 7 are built on.`,
  },
  {
    text: 'Apprends le tableau à cinq colonnes.',
    why: 'A table is what the learner cannot recall at speed. The lesson teaches a queue you can hear and count on your fingers, and the table lives in a reference sheet for the moment someone wants to look it up.',
  },
  {
    text: 'En français, les pronoms sont dans l’ordre inverse de l’anglais.',
    why: "False in both directions: « I give it to him » and « je le lui donne » keep the thing first; « show them to me » and « tu me les montres » do not. The inversion story would have to be unlearned in act 4.",
  },
  {
    text: 'Un pronom, une place.',
    why: 'True and too thin: it says the order is fixed and never says what the order is, so nothing in acts 3 to 5 can be derived from it.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE IMPORTS, BY ACT (seed-checked 2026-09-25)
 *
 *  Every id below was read from seed.json and its French is quoted in the
 *  trailing comment, so no reader has to open the seed. `named only` rows
 *  carry no `flashcard` drill, so no deckTranche can release them.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.a2.internet.215',             // Je te l'envoie par mail.
    'fr.a2.au-restaurant.174',        // Je vous le remplace tout de suite.
  ],
  act2: [
    'fr.a2.pronoms-essentiels.207',   // Je l'aime.
    'fr.a2.pronoms-essentiels.311',   // Elle en parle.
    'fr.a2.pronoms-essentiels.236',   // Je le prends.  (named only)
  ],
  act3: [
    'fr.a2.pronoms-essentiels.269',   // Je leur ai parlé.
    'fr.a2.pronoms-essentiels.270',   // Je lui ai écrit.
  ],
  act4: [
    'fr.a2.internet.217',             // Ça me le fait aussi depuis hier.
    'fr.a2.au-restaurant.137',        // Vous pouvez me l'écrire, s'il vous plaît ?
  ],
  act5: [
    'fr.a2.pronoms-essentiels.315',   // Il y en a trois.
    'fr.a2.pronoms-essentiels.314',   // Il y en a.
    'fr.a2.au-restaurant.168',        // Je suis désolé, il n'y en a plus.
    'fr.a2.pronoms-essentiels.308',   // Nous y allons ensemble.
    'fr.a2.rp-voyage.007',            // Il y en a un à quatorze heures, quai trois.  (named only)
  ],
  act6: [
    'fr.a2.symptomes.202',            // Montrez-moi où ça fait mal.
    'fr.a2.metiers.036',              // Parlez-moi de votre parcours.
    'fr.a2.heure-et-date.099',        // Fais-le tout de suite, sinon tu vas oublier.
    'fr.a2.nombres.050',              // Laissez-moi votre numéro de téléphone.
    'fr.sons.liaisons.023',           // Dis-moi quand est-ce que ça commence.  (named only)
  ],
  act7: [
    'fr.a2.heure-et-date.133',        // Dépêche-toi un peu, on va être en retard.
  ],
  act8: [
    'fr.a2.pronoms-essentiels.225',   // Je l'ai vue.
    'fr.a2.pronoms-essentiels.227',   // Je les ai achetés.
    'fr.a2.pronoms-essentiels.234',   // Je ne les ai pas vues.  (named only)
    'fr.a2.pronoms-essentiels.229',   // Je les ai regardées.  (named only)
    'fr.a2.objets.123',               // Nous avons cherché la télécommande sous le canapé, puis nous l'avons trouvée.
    'fr.a2.objets.116',               // Mon frère a emprunté mes ciseaux et il ne les a pas rendus.
    'fr.sons.liaisons.061',           // Je les ai vus avant-hier au marché.  (named only)
  ],
  act9: [
    'fr.a2.pronoms-essentiels.278',   // Je vais lui téléphoner.  (named only)
    'fr.a2.internet.218',             // Tu peux m'envoyer une capture d'écran ?
    'fr.a2.verbes.366',               // Tu peux m'aider ?
    'fr.a2.appareils.004',            // Mon téléphone n'a plus de batterie, je dois le recharger.
    'fr.b1.cuisine.012',              // Nous laissons refroidir le gâteau avant de le démouler.  (named only)
  ],
  act10: [
    'fr.a2.pronoms-essentiels.320',   // Tu y vas souvent ?
    'fr.a2.pronoms-essentiels.321',   // Elle y va tous les jours.
    'fr.a2.pronoms-essentiels.324',   // Ils y pensent.
    'fr.a2.pronoms-essentiels.331',   // Elle y répond.
  ],
  act11: [
    'fr.a2.heure-et-date.088',        // On en parlera tout à l'heure.
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.a2.pronoms-essentiels.236',   // sentence, roleplay, review
  'fr.a2.rp-voyage.007',            // dictation, sentence
  'fr.sons.liaisons.023',           // sentence, review
  'fr.a2.pronoms-essentiels.234',   // sentence, roleplay, review
  'fr.a2.pronoms-essentiels.229',   // sentence, review
  'fr.sons.liaisons.061',           // sentence, review
  'fr.a2.pronoms-essentiels.278',   // sentence, roleplay, review
  'fr.b1.cuisine.012',              // sentence, dictation
];

/** No `voiceflash` either: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.a2.heure-et-date.099',        // flashcard, sentence
  'fr.a2.nombres.050',              // flashcard, sentence, roleplay
  'fr.a2.heure-et-date.133',        // flashcard, sentence, roleplay
  'fr.a2.objets.123',               // sentence, flashcard, review
  'fr.a2.objets.116',               // sentence, flashcard, review
  'fr.a2.appareils.004',            // flashcard
  'fr.a2.heure-et-date.088',        // flashcard, sentence
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, the last stressed syllable of
 *  each group in caps, ü for French u, nasals closed with ⁿ, and NO U+203F
 *  tie: a liaison consonant moves onto the next syllable.
 *
 *  THE FILE IS NEVER STRESSED. The caps sit on the group's final syllable,
 *  so « je le lui donne » is `zhuh luh lwee DONN`: the little words are
 *  unstressed and run together, which is exactly what makes them hard to
 *  hear and is the subject of act 10.
 *
 *  AGREEMENT: the act 8 rows carry both genders on purpose, because
 *  participle agreement with a preceding direct object is a task criterion.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['ordre-des-pronoms'], ...extra,
});

/** A gapfill card: `prompt` is the front, `fr` the answer (validateItem). */
const gap = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'gapfill', prompt, notes });
/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LA FILE MAL RANGÉE ─────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1600, 'Je la lui donne à midi.', 'I am giving it to him at noon.', '/ʒə la lɥi dɔn a mi.di/', 'zhuh la lwee DONN a mee-DEE', ['scene', 'file', 'cod-coi'], FCVDR),
  sent(1601, "Tu lui donnes l'enveloppe avant de partir.", 'You give him the envelope before you leave.', '/ty lɥi dɔn lɑ̃.vlɔp a.vɑ̃ də paʁ.tiʁ/', 'tü lwee DONN lahⁿ-VLOP a-vahⁿ duh par-TEER', ['scene', 'un-seul']),
  sent(1602, 'Le propriétaire passe à midi.', 'The landlord is coming at noon.', '/lə pʁɔ.pʁi.e.tɛʁ pas a mi.di/', 'luh pro-pree-ay-TEHR pass a mee-DEE', ['scene']),
  sent(1603, 'Je te les donne tout de suite.', 'I am giving them to you right away.', '/ʒə tə le dɔn tu də sɥit/', 'zhuh tuh lay DONN too duh SWEET', ['scene', 'file', 'me-cod'], FCVDR),
  sent(1604, "Awa me l'a expliqué hier soir.", 'Awa explained it to me last night.', '/a.wa mə la ɛks.pli.ke jɛʁ swaʁ/', 'a-WA muh la ehks-plee-KAY yehr SWAR', ['scene', 'passe-compose']),
  sent(1605, 'Il y en a deux dans le tiroir.', 'There are two of them in the drawer.', '/i ljɑ̃ na dø dɑ̃ lə ti.ʁwaʁ/', 'ee-lyahⁿ-na DEU dahⁿ luh tee-RWAR', ['scene', 'y-en']),
  sent(1606, 'Ne me le demande pas maintenant.', 'Do not ask me for it now.', '/nə mə lə də.mɑ̃d pa mɛ̃t.nɑ̃/', 'nuh muh luh duh-MAHⁿD pa mehⁿt-NAHⁿ', ['scene', 'imperatif-negatif']),
  sent(1607, 'Donne-les-lui avant midi.', 'Give them to him before noon.', '/dɔn le lɥi a.vɑ̃ mi.di/', 'donn-lay-LWEE a-vahⁿ mee-DEE', ['scene', 'imperatif-affirmatif']),
  sent(1608, 'Je vais le lui expliquer ce soir.', 'I am going to explain it to him this evening.', '/ʒə vɛ lə lɥi ɛks.pli.ke sə swaʁ/', 'zhuh veh luh lwee ehks-plee-KAY suh SWAR', ['scene', 'infinitif']),
  sent(1609, "Nous te l'avons dit hier.", 'We told you so yesterday.', '/nu tə la.vɔ̃ di jɛʁ/', 'noo tuh la-VOHⁿ dee YEHR', ['scene', 'passe-compose']),
  sent(1610, REFRAME, REFRAME_EN, '/le pə.ti mo fɔ̃.tyn sœl fil tu.ʒuʁ kɔ.le o vɛʁb/', 'lay puh-tee MOH fohⁿ-tün suhl FEEL too-zhoor ko-LAY oh VEHRB', ['rule', 'reframe'], ['flashcard'],
    rule('Deux petits mots devant le verbe : est-ce que leur ordre est libre ?', 'Non. Une seule file, un seul ordre, et elle ne quitte pas son verbe.')),
  sent(1611, THE_FILE, 'me te se nous vous, then le la les, then lui leur, then y, then en.', '/mə tə sə nu vu lə la le lɥi lœʁ i ɑ̃/', 'muh tuh suh noo VOO luh la LAY lwee LUHR EE AHⁿ', ['rule', 'file'], ['flashcard'],
    rule('Quelles sont les cinq places de la file, dans l’ordre ?', 'La personne proche, la chose, l’autre personne, le lieu, la quantité.')),
  sent(1612, 'Je le lui rends demain matin.', 'I am giving it back to him tomorrow morning.', '/ʒə lə lɥi ʁɑ̃ də.mɛ̃ ma.tɛ̃/', 'zhuh luh lwee RAHⁿ duh-mehⁿ ma-TEHⁿ', ['cod-coi'], FCVDR),
  sent(1613, 'Tu me le prêtes une minute.', 'You lend it to me for a minute.', '/ty mə lə pʁɛt yn mi.nyt/', 'tü muh luh PREHT ünn mee-NÜT', ['me-cod']),
  sent(1614, "On nous l'a répété trois fois.", 'They repeated it to us three times.', '/ɔ̃ nu la ʁe.pe.te tʁwa fwa/', 'ohⁿ noo la ray-pay-TAY trwa FWA', ['passe-compose', 'me-cod']),
  sent(1615, 'Elle leur en parle souvent.', 'She often talks to them about it.', '/ɛl lœ.ʁɑ̃ paʁl su.vɑ̃/', 'ehl luh-rahⁿ PARL soo-VAHⁿ', ['y-en', 'coi-en']),
  sent(1616, 'Je ne te le dis pas.', 'I am not telling you.', '/ʒə nə tə lə di pa/', 'zhuh nuh tuh luh dee PA', ['negation', 'me-cod'], FCVDR),
];

/* ── ACT 2 · UNE SEULE FILE ─────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1617, 'La chose passe avant la personne.', 'The thing comes before the person.', '/la ʃoz pas a.vɑ̃ la pɛʁ.sɔn/', 'la SHOZ pass a-vahⁿ la pehr-SONN', ['rule', 'file'], ['flashcard'],
    rule('Entre la chose et l’autre personne, qui passe devant ?', 'le la les avant lui leur : je le lui donne.')),
  sent(1618, 'Il me le rend ce soir.', 'He is giving it back to me this evening.', '/il mə lə ʁɑ̃ sə swaʁ/', 'eel muh luh RAHⁿ suh SWAR', ['me-cod'], FCVDR),
  sent(1619, 'Elle nous les montre demain.', 'She is showing them to us tomorrow.', '/ɛl nu le mɔ̃tʁ də.mɛ̃/', 'ehl noo lay MOHⁿTR duh-MEHⁿ', ['me-cod']),
  sent(1620, "Le serveur vous l'apporte.", 'The waiter is bringing it to you.', '/lə sɛʁ.vœʁ vu la.pɔʁt/', 'luh sehr-VUHR voo la-PORT', ['me-cod', 'elision']),
  sent(1621, 'Je le leur envoie par courriel.', 'I am sending it to them by email.', '/ʒə lə lœ.ʁɑ̃.vwa paʁ ku.ʁjɛl/', 'zhuh luh luh-rahⁿ-VWA par koo-RYEHL', ['cod-coi', 'quebec'], FCVDR),
  sent(1622, 'Tu la lui laisses sur la table.', 'You leave it for him on the table.', '/ty la lɥi lɛs syʁ la tabl/', 'tü la lwee LEHS sür la TABL', ['cod-coi']),
  sent(1623, 'On les y attend.', 'We are waiting for them there.', '/ɔ̃ le zi a.tɑ̃/', 'ohⁿ lay zee a-TAHⁿ', ['y-en', 'cod-y']),
  sent(1624, 'Il nous en reste trois.', 'We have three of them left.', '/il nu zɑ̃ ʁɛst tʁwa/', 'eel noo zahⁿ rehst TRWA', ['y-en', 'me-en']),
  sent(1625, "Je t'en apporte demain.", 'I am bringing you some tomorrow.', '/ʒə tɑ̃ na.pɔʁt də.mɛ̃/', 'zhuh tahⁿ na-PORT duh-MEHⁿ', ['y-en', 'elision'], FCVDR),
  sent(1626, "Elle s'en occupe elle-même.", 'She is dealing with it herself.', '/ɛl sɑ̃ nɔ.kyp ɛl mɛm/', 'ehl sahⁿ no-KÜP ehl-MEHM', ['y-en', 'pronominal']),
  sent(1627, 'Le facteur me les apporte chaque matin.', 'The postman brings them to me every morning.', '/lə fak.tœʁ mə le za.pɔʁt ʃak ma.tɛ̃/', 'luh fak-TUHR muh lay za-PORT shak ma-TEHⁿ', ['me-cod']),
  sent(1628, 'Nous vous le confirmons par écrit.', 'We are confirming it to you in writing.', '/nu vu lə kɔ̃.fiʁ.mɔ̃ paʁ e.kʁi/', 'noo voo luh kohⁿ-feer-MOHⁿ pa-ray-KREE', ['me-cod']),
  sent(1629, 'Le garagiste me le répare aujourd’hui.', 'The mechanic is repairing it for me today.', '/lə ɡa.ʁa.ʒist mə lə ʁe.paʁ o.ʒuʁ.dɥi/', 'luh ga-ra-ZHEEST muh luh ray-PAR oh-zhoor-DWEE', ['me-cod']),
  sent(1630, 'Je vous les prépare pour ce soir.', 'I am getting them ready for you for this evening.', '/ʒə vu le pʁe.paʁ puʁ sə swaʁ/', 'zhuh voo lay pray-PAR poor suh SWAR', ['me-cod']),
  sent(1631, 'Elle le lui explique lentement.', 'She explains it to him slowly.', '/ɛl lə lɥi ɛks.plik lɑ̃t.mɑ̃/', 'ehl luh lwee ehks-PLEEK lahⁿt-MAHⁿ', ['cod-coi']),
  sent(1632, 'Tu nous en gardes une part.', 'You keep a slice of it for us.', '/ty nu zɑ̃ ɡaʁd yn paʁ/', 'tü noo zahⁿ GARD ünn PAR', ['y-en', 'me-en']),
  sent(1633, 'Il y en a encore au frigo.', 'There is still some in the fridge.', '/i ljɑ̃ na ɑ̃.kɔʁ o fʁi.ɡo/', 'ee-lyahⁿ-na ahⁿ-KOR oh free-GOH', ['y-en', 'quebec']),
  sent(1634, 'en ferme toujours la file.', 'en always closes the queue.', '/ɑ̃ fɛʁm tu.ʒuʁ la fil/', 'ahⁿ FEHRM too-zhoor la FEEL', ['rule', 'y-en'], ['flashcard'],
    rule('Où se met en quand il y a deux petits mots ?', 'Toujours à la dernière place : je t’en parle, il y en a.')),
  sent(1635, 'Le vendeur nous y conduit.', 'The salesman takes us there.', '/lə vɑ̃.dœʁ nu zi kɔ̃.dɥi/', 'luh vahⁿ-DUHR noo zee kohⁿ-DWEE', ['y-en', 'me-y']),
  sent(1636, 'Un pronom objet remplace un nom. Un relatif colle deux phrases.', 'An object pronoun replaces a noun. A relative glues two sentences together.', '/œ̃ pʁɔ.nɔ̃ ɔb.ʒɛ ʁɑ̃.plas œ̃ nɔ̃ œ̃ ʁə.la.tif kɔl dø fʁaz/', 'uhⁿ pro-nohⁿ ob-ZHEH rahⁿ-PLASS uhⁿ NOHⁿ uhⁿ ruh-la-TEEF kol deu FRAZ', ['rule', 'relatif'], ['flashcard'],
    rule('Quelle est la différence entre le et que ?', 'le remplace un nom dans une phrase. que en colle deux.')),
];

/* ── ACT 3 · LA CHOSE, PUIS L'AUTRE PERSONNE ───────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1637, 'Je le lui donne.', 'I give it to him.', '/ʒə lə lɥi dɔn/', 'zhuh luh lwee DONN', ['cod-coi'], FCVDR),
  sent(1638, 'Tu la lui rends.', 'You give it back to her.', '/ty la lɥi ʁɑ̃/', 'tü la lwee RAHⁿ', ['cod-coi'], FCVDR),
  sent(1639, 'Elle les leur montre.', 'She shows them to them.', '/ɛl le lœʁ mɔ̃tʁ/', 'ehl lay luhr MOHⁿTR', ['cod-coi'], FCVDR),
  sent(1640, 'Nous le leur expliquons.', 'We explain it to them.', '/nu lə lœ.ʁɛks.pli.kɔ̃/', 'noo luh luh-rehks-plee-KOHⁿ', ['cod-coi']),
  sent(1641, 'Le professeur la leur relit.', 'The teacher reads it back to them.', '/lə pʁɔ.fɛ.sœʁ la lœʁ ʁə.li/', 'luh pro-feh-SUHR la luhr ruh-LEE', ['cod-coi']),
  sent(1642, 'Mon frère les lui prête souvent.', 'My brother often lends them to him.', '/mɔ̃ fʁɛʁ le lɥi pʁɛt su.vɑ̃/', 'mohⁿ FREHR lay lwee preht soo-VAHⁿ', ['cod-coi']),
  sent(1643, 'Le médecin le lui conseille.', 'The doctor advises it for her.', '/lə med.sɛ̃ lə lɥi kɔ̃.sɛj/', 'luh mayd-SEHⁿ luh lwee kohⁿ-SEHY', ['cod-coi']),
  sent(1644, 'La banque la lui refuse.', 'The bank refuses it to him.', '/la bɑ̃k la lɥi ʁə.fyz/', 'la BAHⁿK la lwee ruh-FÜZ', ['cod-coi']),
  sent(1645, 'Je les lui laisse à la réception.', 'I leave them for him at the desk.', '/ʒə le lɥi lɛs a la ʁe.sɛp.sjɔ̃/', 'zhuh lay lwee LEHS a la ray-sehp-SYOHⁿ', ['cod-coi']),
  sent(1646, 'Elle le leur répète chaque fois.', 'She repeats it to them every time.', '/ɛl lə lœʁ ʁe.pɛt ʃak fwa/', 'ehl luh luhr ray-PEHT shak FWA', ['cod-coi']),
  sent(1647, 'Il la lui achète pour son anniversaire.', 'He is buying it for her for her birthday.', '/il la lɥi a.ʃɛt puʁ sɔ̃ na.ni.vɛʁ.sɛʁ/', 'eel la lwee a-SHEHT poor sohⁿ na-nee-vehr-SEHR', ['cod-coi']),
  sent(1648, "Tu les leur envoies aujourd'hui.", 'You are sending them to them today.', '/ty le lœ.ʁɑ̃.vwa o.ʒuʁ.dɥi/', 'tü lay luh-rahⁿ-VWA oh-zhoor-DWEE', ['cod-coi']),
  sent(1649, 'Avec lui et leur, la chose passe devant.', 'With lui and leur, the thing goes in front.', '/a.vɛk lɥi e lœʁ la ʃoz pas də.vɑ̃/', 'a-VEHK lwee ay LUHR la SHOZ pass duh-VAHⁿ', ['rule', 'cod-coi'], ['flashcard'],
    rule('Avec lui ou leur, quel petit mot vient en premier ?', 'le, la ou les : je le lui donne, tu les leur envoies.')),
  sent(1650, 'Le garagiste le lui rend vendredi.', 'The mechanic gives it back to him on Friday.', '/lə ɡa.ʁa.ʒist lə lɥi ʁɑ̃ vɑ̃.dʁə.di/', 'luh ga-ra-ZHEEST luh lwee rahⁿ vahⁿ-druh-DEE', ['cod-coi']),
  sent(1651, 'Nous la leur proposons demain.', 'We are offering it to them tomorrow.', '/nu la lœʁ pʁɔ.po.zɔ̃ də.mɛ̃/', 'noo la luhr pro-poh-ZOHⁿ duh-MEHⁿ', ['cod-coi']),
  sent(1652, 'On le lui demande poliment.', 'We ask him for it politely.', '/ɔ̃ lə lɥi də.mɑ̃d pɔ.li.mɑ̃/', 'ohⁿ luh lwee duh-MAHⁿD po-lee-MAHⁿ', ['cod-coi']),
  sent(1653, 'Elle les lui décrit au téléphone.', 'She describes them to him on the phone.', '/ɛl le lɥi de.kʁi o te.le.fɔn/', 'ehl lay lwee day-KREE oh tay-lay-FONN', ['cod-coi']),
  sent(1654, 'Je la lui écris ce soir.', 'I am writing it to him this evening.', '/ʒə la lɥi e.kʁi sə swaʁ/', 'zhuh la lwee ay-KREE suh SWAR', ['cod-coi'], FCVDR),
  sent(1655, 'Le syndic les leur envoie chaque année.', 'The building manager sends them to them every year.', '/lə sɛ̃.dik le lœ.ʁɑ̃.vwa ʃa.ka.ne/', 'luh sehⁿ-DEEK lay luh-rahⁿ-VWA sha-ka-NAY', ['cod-coi']),
];

/* ── ACT 4 · MOI D'ABORD, LA CHOSE ENSUITE ─────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1656, 'Tu me les montres.', 'You show them to me.', '/ty mə le mɔ̃tʁ/', 'tü muh lay MOHⁿTR', ['me-cod'], FCVDR),
  sent(1657, 'Il te le donne demain.', 'He gives it to you tomorrow.', '/il tə lə dɔn də.mɛ̃/', 'eel tuh luh donn duh-MEHⁿ', ['me-cod'], FCVDR),
  sent(1658, 'Elle nous la prête volontiers.', 'She is happy to lend it to us.', '/ɛl nu la pʁɛt vɔ.lɔ̃.tje/', 'ehl noo la PREHT vo-lohⁿ-TYAY', ['me-cod']),
  sent(1659, 'Le libraire vous les commande.', 'The bookseller orders them for you.', '/lə li.bʁɛʁ vu le kɔ.mɑ̃d/', 'luh lee-BREHR voo lay ko-MAHⁿD', ['me-cod']),
  sent(1660, 'Je te la laisse.', 'I am leaving it to you.', '/ʒə tə la lɛs/', 'zhuh tuh la LEHS', ['me-cod'], FCVDR),
  sent(1661, "Ma mère me l'envoie chaque mois.", 'My mother sends it to me every month.', '/ma mɛʁ mə lɑ̃.vwa ʃak mwa/', 'ma MEHR muh lahⁿ-VWA shak MWA', ['me-cod', 'elision']),
  sent(1662, 'On te le promet.', 'We promise it to you.', '/ɔ̃ tə lə pʁɔ.mɛ/', 'ohⁿ tuh luh pro-MEH', ['me-cod']),
  sent(1663, 'Il nous le répète sans arrêt.', 'He repeats it to us non-stop.', '/il nu lə ʁe.pɛt sɑ̃ za.ʁɛ/', 'eel noo luh ray-PEHT sahⁿ za-REH', ['me-cod']),
  sent(1664, "Le professeur vous la corrige aujourd'hui.", 'The teacher corrects it for you today.', '/lə pʁɔ.fɛ.sœʁ vu la kɔ.ʁiʒ o.ʒuʁ.dɥi/', 'luh pro-feh-SUHR voo la ko-REEZH oh-zhoor-DWEE', ['me-cod']),
  sent(1665, "Tu me le prêtes jusqu'à lundi.", 'You lend it to me until Monday.', '/ty mə lə pʁɛt ʒys.ka lœ̃.di/', 'tü muh luh PREHT zhüs-ka luhⁿ-DEE', ['me-cod']),
  sent(1666, "Moi d'abord, la chose ensuite.", 'Me first, the thing next.', '/mwa da.bɔʁ la ʃoz ɑ̃.sɥit/', 'mwa da-BOR la shoz ahⁿ-SWEET', ['rule', 'me-cod'], ['flashcard'],
    rule('Avec me, te, nous ou vous, quel petit mot vient en premier ?', 'La personne proche : tu me les montres, il te le donne.')),
  sent(1667, 'Je vous les apporte à quatorze heures.', 'I am bringing them to you at two o’clock.', '/ʒə vu le za.pɔʁt a ka.tɔʁ.zœʁ/', 'zhuh voo lay za-PORT a ka-tor-ZUHR', ['me-cod']),
  sent(1668, "Elle te l'explique mieux que moi.", 'She explains it to you better than I do.', '/ɛl tə lɛks.plik mjø kə mwa/', 'ehl tuh lehks-PLEEK myeu kuh MWA', ['me-cod', 'elision']),
  sent(1669, 'Le voisin nous les garde pendant les vacances.', 'The neighbour keeps them for us during the holidays.', '/lə vwa.zɛ̃ nu le ɡaʁd pɑ̃.dɑ̃ le va.kɑ̃s/', 'luh vwa-ZEHⁿ noo lay GARD pahⁿ-dahⁿ lay va-KAHⁿSS', ['me-cod']),
  sent(1670, 'Tu nous la racontes encore une fois.', 'You tell it to us one more time.', '/ty nu la ʁa.kɔ̃t ɑ̃.kɔʁ yn fwa/', 'tü noo la ra-KOHⁿT ahⁿ-kor ünn FWA', ['me-cod']),
  sent(1671, 'Je me le demande souvent.', 'I often wonder about it.', '/ʒə mə lə də.mɑ̃d su.vɑ̃/', 'zhuh muh luh duh-MAHⁿD soo-VAHⁿ', ['me-cod', 'pronominal']),
  sent(1672, 'Le facteur me la remet en main propre.', 'The postman hands it to me in person.', '/lə fak.tœʁ mə la ʁə.mɛ ɑ̃ mɛ̃ pʁɔpʁ/', 'luh fak-TUHR muh la ruh-MEH ahⁿ mehⁿ PROPR', ['me-cod']),
  sent(1673, 'On vous le confirme par téléphone.', 'We confirm it to you by phone.', '/ɔ̃ vu lə kɔ̃.fiʁm paʁ te.le.fɔn/', 'ohⁿ voo luh kohⁿ-FEERM par tay-lay-FONN', ['me-cod']),
  sent(1674, 'Elle se les achète chaque hiver.', 'She buys them for herself every winter.', '/ɛl sə le za.ʃɛt ʃa.ki.vɛʁ/', 'ehl suh lay za-SHEHT sha-kee-VEHR', ['me-cod', 'pronominal']),
];

/* ── ACT 5 · Y ET EN, LES DEUX DERNIÈRES PLACES ────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1675, 'Il y en a trois au frigo.', 'There are three of them in the fridge.', '/i ljɑ̃ na tʁwa o fʁi.ɡo/', 'ee-lyahⁿ-na TRWA oh free-GOH', ['y-en'], FCVDR),
  sent(1676, "Je t'en parle demain.", 'I will talk to you about it tomorrow.', '/ʒə tɑ̃ paʁl də.mɛ̃/', 'zhuh tahⁿ PARL duh-MEHⁿ', ['y-en', 'me-en'], FCVDR),
  sent(1677, 'Elle nous y emmène samedi.', 'She is taking us there on Saturday.', '/ɛl nu zi ɑ̃.mɛn sam.di/', 'ehl noo zee ahⁿ-MEHN sam-DEE', ['y-en', 'me-y']),
  sent(1678, 'On leur en parle souvent.', 'We often talk to them about it.', '/ɔ̃ lœ.ʁɑ̃ paʁl su.vɑ̃/', 'ohⁿ luh-rahⁿ PARL soo-VAHⁿ', ['y-en', 'coi-en']),
  sent(1679, "Tu m'en donnes un peu.", 'You give me a little of it.', '/ty mɑ̃ dɔn œ̃ pø/', 'tü mahⁿ DONN uhⁿ PEU', ['y-en', 'me-en', 'elision']),
  sent(1680, 'Il nous en reste assez.', 'We have enough of it left.', '/il nu zɑ̃ ʁɛst a.se/', 'eel noo zahⁿ rehst a-SAY', ['y-en', 'me-en']),
  sent(1681, 'Je vous y retrouve à midi.', 'I will meet you there at noon.', '/ʒə vu zi ʁə.tʁuv a mi.di/', 'zhuh voo zee ruh-TROOV a mee-DEE', ['y-en', 'me-y']),
  sent(1682, 'Le guide les y conduit chaque matin.', 'The guide takes them there every morning.', '/lə ɡid le zi kɔ̃.dɥi ʃak ma.tɛ̃/', 'luh GEED lay zee kohⁿ-DWEE shak ma-TEHⁿ', ['y-en', 'cod-y']),
  sent(1683, 'y avant en, et en tout à la fin.', 'y before en, and en right at the end.', '/i a.vɑ̃ ɑ̃ e ɑ̃ tu ta la fɛ̃/', 'EE a-vahⁿ AHⁿ ay ahⁿ too ta la FEHⁿ', ['rule', 'y-en'], ['flashcard'],
    rule('Entre y et en, lequel passe devant ?', 'y prend la quatrième place, en la cinquième : il y en a.')),
  sent(1684, "Ma voisine m'y accompagne.", 'My neighbour comes there with me.', '/ma vwa.zin mi a.kɔ̃.paɲ/', 'ma vwa-ZEENN mee a-kohⁿ-PANY', ['y-en', 'me-y', 'elision']),
  sent(1685, "Elle s'en souvient très bien.", 'She remembers it very well.', '/ɛl sɑ̃ su.vjɛ̃ tʁɛ bjɛ̃/', 'ehl sahⁿ soo-VYEHⁿ treh BYEHⁿ', ['y-en', 'pronominal']),
  sent(1686, "Nous t'en gardons une part.", 'We are keeping a slice of it for you.', '/nu tɑ̃ ɡaʁ.dɔ̃ yn paʁ/', 'noo tahⁿ gar-DOHⁿ ünn PAR', ['y-en', 'me-en']),
  sent(1687, 'Il y en a encore deux au congélateur.', 'There are still two of them in the freezer.', '/i ljɑ̃ na ɑ̃.kɔʁ dø o kɔ̃.ʒe.la.tœʁ/', 'ee-lyahⁿ-na ahⁿ-kor DEU oh kohⁿ-zhay-la-TUHR', ['y-en']),
  sent(1688, 'On vous en envoie un exemplaire.', 'We are sending you a copy of it.', '/ɔ̃ vu zɑ̃ nɑ̃.vwa œ̃ nɛɡ.zɑ̃.plɛʁ/', 'ohⁿ voo zahⁿ nahⁿ-VWA uhⁿ nehg-zahⁿ-PLEHR', ['y-en', 'me-en']),
  sent(1689, 'Je lui en parle ce soir.', 'I am talking to him about it this evening.', '/ʒə lɥi ɑ̃ paʁl sə swaʁ/', 'zhuh lwee ahⁿ PARL suh SWAR', ['y-en', 'coi-en'], FCVDR),
  sent(1690, 'Le pharmacien nous en propose un autre.', 'The pharmacist offers us another one.', '/lə faʁ.ma.sjɛ̃ nu zɑ̃ pʁɔ.poz œ̃ notʁ/', 'luh far-ma-SYEHⁿ noo zahⁿ pro-POZ uhⁿ NOTR', ['y-en', 'me-en']),
  sent(1691, 'Tu les y attends à la sortie.', 'You wait for them there at the exit.', '/ty le zi a.tɑ̃ a la sɔʁ.ti/', 'tü lay zee a-TAHⁿ a la sor-TEE', ['y-en', 'cod-y']),
  sent(1692, 'Elle leur en apporte chaque dimanche.', 'She brings them some every Sunday.', '/ɛl lœ.ʁɑ̃ na.pɔʁt ʃak di.mɑ̃ʃ/', 'ehl luh-rahⁿ na-PORT shak dee-MAHⁿSH', ['y-en', 'coi-en']),
  sent(1693, "On m'en promet dix.", 'They promise me ten of them.', '/ɔ̃ mɑ̃ pʁɔ.mɛ dis/', 'ohⁿ mahⁿ pro-MEH DEESS', ['y-en', 'me-en']),
];

/* ── ACT 6 · L'ORDRE AFFIRMATIF : TOUT BASCULE ─────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1694, 'Donne-le-moi.', 'Give it to me.', '/dɔn lə mwa/', 'donn-luh-MWA', ['imperatif-affirmatif'], FCVDR),
  sent(1695, 'Dis-le-nous.', 'Tell it to us.', '/di lə nu/', 'dee-luh-NOO', ['imperatif-affirmatif'], FCVDR),
  sent(1696, 'Montre-les-lui.', 'Show them to him.', '/mɔ̃tʁ le lɥi/', 'mohⁿtr-lay-LWEE', ['imperatif-affirmatif'], FCVDR),
  sent(1697, 'Rends-la-leur.', 'Give it back to them.', '/ʁɑ̃ la lœʁ/', 'rahⁿ-la-LUHR', ['imperatif-affirmatif'], FCVDR),
  sent(1698, 'Passe-le-moi, s’il te plaît.', 'Pass it to me, please.', '/pas lə mwa sil tə plɛ/', 'pass-luh-MWA seel tuh PLEH', ['imperatif-affirmatif']),
  sent(1699, 'Explique-le-nous lentement.', 'Explain it to us slowly.', '/ɛks.plik lə nu lɑ̃t.mɑ̃/', 'ehks-pleek-luh-NOO lahⁿt-MAHⁿ', ['imperatif-affirmatif']),
  sent(1700, 'Apporte-les-moi demain.', 'Bring them to me tomorrow.', '/a.pɔʁt le mwa də.mɛ̃/', 'a-port-lay-MWA duh-MEHⁿ', ['imperatif-affirmatif']),
  sent(1701, 'Envoie-la-lui ce soir.', 'Send it to him this evening.', '/ɑ̃.vwa la lɥi sə swaʁ/', 'ahⁿ-vwa-la-LWEE suh SWAR', ['imperatif-affirmatif']),
  sent(1702, 'Laisse-les-nous jusqu’à lundi.', 'Leave them with us until Monday.', '/lɛs le nu ʒys.ka lœ̃.di/', 'lehss-lay-NOO zhüs-ka luhⁿ-DEE', ['imperatif-affirmatif']),
  sent(1703, 'À l’ordre affirmatif, la chose passe devant et me devient moi.', 'In an affirmative command the thing goes first and me becomes moi.', '/a lɔʁ.dʁa.fiʁ.ma.tif la ʃoz pas də.vɑ̃ e mə də.vjɛ̃ mwa/', 'a lor-dra-feer-ma-TEEF la shoz pass duh-VAHⁿ ay muh duh-vyehⁿ MWA', ['rule', 'imperatif-affirmatif'], ['flashcard'],
    rule('Dans un ordre affirmatif, où vont les petits mots ?', 'Derrière le verbe, avec des traits d’union : donne-le-moi.')),
  sent(1704, 'Donne-m’en un peu.', 'Give me a little of it.', '/dɔn mɑ̃ œ̃ pø/', 'donn-mahⁿ uhⁿ PEU', ['imperatif-affirmatif', 'y-en']),
  sent(1705, 'Parle-lui-en demain.', 'Talk to him about it tomorrow.', '/paʁl lɥi ɑ̃ də.mɛ̃/', 'parl-lwee-ahⁿ duh-MEHⁿ', ['imperatif-affirmatif', 'y-en']),
  sent(1706, 'Emmène-nous-y dimanche.', 'Take us there on Sunday.', '/ɑ̃.mɛn nu zi di.mɑ̃ʃ/', 'ahⁿ-mehn-noo-ZEE dee-MAHⁿSH', ['imperatif-affirmatif', 'y-en']),
  sent(1707, 'Achète-m’en deux, s’il te plaît.', 'Buy me two of them, please.', '/a.ʃɛt mɑ̃ dø sil tə plɛ/', 'a-sheht-mahⁿ DEU seel tuh PLEH', ['imperatif-affirmatif', 'y-en']),
  sent(1708, 'Prête-le-moi cinq minutes.', 'Lend it to me for five minutes.', '/pʁɛt lə mwa sɛ̃k mi.nyt/', 'preht-luh-MWA sehⁿk mee-NÜT', ['imperatif-affirmatif']),
  sent(1709, 'Raconte-la-nous encore.', 'Tell it to us again.', '/ʁa.kɔ̃t la nu ɑ̃.kɔʁ/', 'ra-kohⁿt-la-NOO ahⁿ-KOR', ['imperatif-affirmatif']),
  sent(1710, 'Garde-les-lui au chaud.', 'Keep them warm for him.', '/ɡaʁd le lɥi o ʃo/', 'gard-lay-LWEE oh SHOH', ['imperatif-affirmatif']),
  sent(1711, 'Rends-le-moi avant ce soir.', 'Give it back to me before this evening.', '/ʁɑ̃ lə mwa a.vɑ̃ sə swaʁ/', 'rahⁿ-luh-MWA a-vahⁿ suh SWAR', ['imperatif-affirmatif'], FCVDR),
  sent(1712, 'Va-t’en, on ferme dans cinq minutes.', 'Off you go, we are closing in five minutes.', '/va tɑ̃ ɔ̃ fɛʁm dɑ̃ sɛ̃k mi.nyt/', 'va-TAHⁿ ohⁿ fehrm dahⁿ sehⁿk mee-NÜT', ['imperatif-affirmatif', 'pronominal']),
  sent(1713, 'Sers-toi, il y en a assez.', 'Help yourself, there is plenty.', '/sɛʁ twa i ljɑ̃ na a.se/', 'sehr-TWA ee-lyahⁿ-na a-SAY', ['imperatif-affirmatif', 'pronominal']),
];

/* ── ACT 7 · L'ORDRE NÉGATIF : RIEN NE BOUGE ───────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1714, 'Ne me le donne pas.', 'Do not give it to me.', '/nə mə lə dɔn pa/', 'nuh muh luh DONN pa', ['imperatif-negatif'], FCVDR),
  sent(1715, 'Ne le lui dis pas.', 'Do not tell him.', '/nə lə lɥi di pa/', 'nuh luh lwee DEE pa', ['imperatif-negatif'], FCVDR),
  sent(1716, 'Ne les leur rends pas tout de suite.', 'Do not give them back to them right away.', '/nə le lœʁ ʁɑ̃ pa tu də sɥit/', 'nuh lay luhr RAHⁿ pa too duh SWEET', ['imperatif-negatif']),
  sent(1717, 'Ne nous en parle plus.', 'Do not talk to us about it any more.', '/nə nu zɑ̃ paʁl ply/', 'nuh noo zahⁿ PARL PLÜ', ['imperatif-negatif', 'y-en']),
  sent(1718, 'Ne t’en fais pas.', 'Do not worry about it.', '/nə tɑ̃ fɛ pa/', 'nuh tahⁿ FEH pa', ['imperatif-negatif', 'y-en'], FCVDR),
  sent(1719, 'Ne la lui montre pas encore.', 'Do not show it to him yet.', '/nə la lɥi mɔ̃tʁ pa ɑ̃.kɔʁ/', 'nuh la lwee MOHⁿTR pa ahⁿ-KOR', ['imperatif-negatif']),
  sent(1720, 'À la forme négative, la file revient devant le verbe.', 'In the negative the queue comes back in front of the verb.', '/a la fɔʁm ne.ɡa.tiv la fil ʁə.vjɛ̃ də.vɑ̃ lə vɛʁb/', 'a la FORM nay-ga-TEEV la feel ruh-vyehⁿ duh-vahⁿ luh VEHRB', ['rule', 'imperatif-negatif'], ['flashcard'],
    rule('Et dans un ordre négatif, où vont les petits mots ?', 'Devant le verbe, dans l’ordre habituel : ne me le donne pas.')),
  sent(1721, 'Ne me les envoie pas avant lundi.', 'Do not send them to me before Monday.', '/nə mə le zɑ̃.vwa pa a.vɑ̃ lœ̃.di/', 'nuh muh lay zahⁿ-VWA pa a-vahⁿ luhⁿ-DEE', ['imperatif-negatif']),
  sent(1722, 'Ne le leur explique pas comme ça.', 'Do not explain it to them like that.', '/nə lə lœ.ʁɛks.plik pa kɔm sa/', 'nuh luh luh-rehks-PLEEK pa kom SA', ['imperatif-negatif']),
  sent(1723, 'Ne m’y attends pas ce soir.', 'Do not wait for me there this evening.', '/nə mi a.tɑ̃ pa sə swaʁ/', 'nuh mee a-TAHⁿ pa suh SWAR', ['imperatif-negatif', 'y-en', 'elision']),
  sent(1724, 'Ne lui en parle pas ce soir.', 'Do not talk to him about it this evening.', '/nə lɥi ɑ̃ paʁl pa sə swaʁ/', 'nuh lwee ahⁿ PARL pa suh SWAR', ['imperatif-negatif', 'y-en']),
  sent(1725, 'Ne nous le répète pas dix fois.', 'Do not repeat it to us ten times.', '/nə nu lə ʁe.pɛt pa di fwa/', 'nuh noo luh ray-PEHT pa dee FWA', ['imperatif-negatif']),
  sent(1726, 'Ne les y laisse pas seuls.', 'Do not leave them there on their own.', '/nə le zi lɛs pa sœl/', 'nuh lay zee LEHS pa SUHL', ['imperatif-negatif', 'y-en']),
  sent(1727, 'Ne m’en veux pas.', 'Do not hold it against me.', '/nə mɑ̃ vø pa/', 'nuh mahⁿ VEU pa', ['imperatif-negatif', 'y-en'], FCVDR),
  sent(1728, 'Ne le lui achète pas maintenant.', 'Do not buy it for him now.', '/nə lə lɥi a.ʃɛt pa mɛ̃t.nɑ̃/', 'nuh luh lwee a-SHEHT pa mehⁿt-NAHⁿ', ['imperatif-negatif']),
  sent(1729, 'Ne vous en occupez pas.', 'Do not bother with it.', '/nə vu zɑ̃ nɔ.ky.pe pa/', 'nuh voo zahⁿ no-kü-PAY pa', ['imperatif-negatif', 'y-en']),
];

/* ── ACT 8 · AU PASSÉ COMPOSÉ ──────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1730, 'Je le lui ai donné.', 'I gave it to him.', '/ʒə lə lɥi e dɔ.ne/', 'zhuh luh lwee ay do-NAY', ['passe-compose', 'cod-coi'], FCVDR),
  sent(1731, "On nous l'a dit hier.", 'They told us yesterday.', '/ɔ̃ nu la di jɛʁ/', 'ohⁿ noo la dee YEHR', ['passe-compose', 'me-cod']),
  sent(1732, 'Elle me les a montrées.', 'She showed them to me.', '/ɛl mə le za mɔ̃.tʁe/', 'ehl muh lay za mohⁿ-TRAY', ['passe-compose', 'accord'], FCVDR),
  sent(1733, 'Tu la lui as rendue.', 'You gave it back to her.', '/ty la lɥi a ʁɑ̃.dy/', 'tü la lwee a rahⁿ-DÜ', ['passe-compose', 'accord']),
  sent(1734, 'Je les ai vues au marché.', 'I saw them at the market.', '/ʒə le ze vy o maʁ.ʃe/', 'zhuh lay zay VÜ oh mar-SHAY', ['passe-compose', 'accord'], FCVDR),
  sent(1735, "Il nous l'a expliqué deux fois.", 'He explained it to us twice.', '/il nu la ɛks.pli.ke dø fwa/', 'eel noo la ehks-plee-KAY deu FWA', ['passe-compose', 'me-cod']),
  sent(1736, "Les petits mots passent devant l'auxiliaire, jamais devant le participe.", 'The little words go in front of the auxiliary, never in front of the participle.', '/le pə.ti mo pas də.vɑ̃ lɔk.si.ljɛʁ ʒa.mɛ də.vɑ̃ lə paʁ.ti.sip/', 'lay puh-tee MOH pass duh-vahⁿ lok-see-LYEHR zha-meh duh-vahⁿ luh par-tee-SEEP', ['rule', 'passe-compose'], ['flashcard'],
    rule('Au passé composé, devant quel mot se met la file ?', 'Devant avoir ou être : je le lui ai donné.')),
  sent(1737, 'Nous le leur avons envoyé lundi.', 'We sent it to them on Monday.', '/nu lə lœʁ a.vɔ̃ zɑ̃.vwa.je lœ̃.di/', 'noo luh luhr a-vohⁿ zahⁿ-vwa-YAY luhⁿ-DEE', ['passe-compose', 'cod-coi']),
  sent(1738, "Elle ne me l'a pas dit.", 'She did not tell me.', '/ɛl nə mə la pa di/', 'ehl nuh muh la pa DEE', ['passe-compose', 'negation'], FCVDR),
  sent(1739, 'On leur en a parlé longuement.', 'We talked to them about it at length.', '/ɔ̃ lœ.ʁɑ̃ na paʁ.le lɔ̃ɡ.mɑ̃/', 'ohⁿ luh-rahⁿ na par-LAY lohⁿg-MAHⁿ', ['passe-compose', 'y-en']),
  sent(1740, 'Je vous les ai apportés ce matin.', 'I brought them to you this morning.', '/ʒə vu le ze za.pɔʁ.te sə ma.tɛ̃/', 'zhuh voo lay zay za-por-TAY suh ma-TEHⁿ', ['passe-compose', 'accord']),
  sent(1741, 'Le notaire la lui a lue à voix haute.', 'The notary read it to him out loud.', '/lə nɔ.tɛʁ la lɥi a ly a vwa ot/', 'luh no-TEHR la lwee a LÜ a vwa OTT', ['passe-compose', 'accord']),
  sent(1742, "Tu m'en as promis deux.", 'You promised me two of them.', '/ty mɑ̃ na pʁɔ.mi dø/', 'tü mahⁿ na pro-mee DEU', ['passe-compose', 'y-en']),
  sent(1743, "Devant le verbe, le participe s'accorde avec la chose.", 'In front of the verb, the participle agrees with the thing.', '/də.vɑ̃ lə vɛʁb lə paʁ.ti.sip sa.kɔʁd a.vɛk la ʃoz/', 'duh-vahⁿ luh VEHRB luh par-tee-SEEP sa-KORD a-vehk la SHOZ', ['rule', 'accord'], ['flashcard'],
    rule('Pourquoi écrit-on « je les ai vues » avec un e et un s ?', 'les est devant le verbe, donc le participe s’accorde avec lui.')),
  sent(1744, 'Elle nous y a emmenés en voiture.', 'She took us there by car.', '/ɛl nu zi a ɑ̃m.ne ɑ̃ vwa.tyʁ/', 'ehl noo zee a ahⁿm-NAY ahⁿ vwa-TÜR', ['passe-compose', 'y-en']),
  sent(1745, 'Je ne le lui ai jamais demandé.', 'I have never asked him for it.', '/ʒə nə lə lɥi e ʒa.mɛ də.mɑ̃.de/', 'zhuh nuh luh lwee ay zha-meh duh-mahⁿ-DAY', ['passe-compose', 'negation']),
  sent(1746, "Mes parents me l'ont offerte pour Noël.", 'My parents gave it to me for Christmas.', '/me pa.ʁɑ̃ mə lɔ̃.tɔ.fɛʁt puʁ nɔ.ɛl/', 'may pa-RAHⁿ muh lohⁿ-to-FEHRT poor no-EHL', ['passe-compose', 'accord']),
  sent(1747, 'On te les a rendus hier soir.', 'They gave them back to you last night.', '/ɔ̃ tə le za ʁɑ̃.dy jɛʁ swaʁ/', 'ohⁿ tuh lay za rahⁿ-DÜ yehr SWAR', ['passe-compose', 'accord']),
  sent(1748, 'Le médecin le lui a interdit.', 'The doctor forbade him from it.', '/lə med.sɛ̃ lə lɥi a ɛ̃.tɛʁ.di/', 'luh mayd-SEHⁿ luh lwee a ehⁿ-tehr-DEE', ['passe-compose', 'cod-coi']),
  sent(1749, "Nous vous l'avons confirmé par écrit.", 'We confirmed it to you in writing.', '/nu vu la.vɔ̃ kɔ̃.fiʁ.me paʁ e.kʁi/', 'noo voo la-VOHⁿ kohⁿ-feer-MAY pa-ray-KREE', ['passe-compose', 'me-cod']),
];

/* ── ACT 9 · AVEC UN INFINITIF ─────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1750, 'Je vais le lui donner.', 'I am going to give it to him.', '/ʒə vɛ lə lɥi dɔ.ne/', 'zhuh veh luh lwee do-NAY', ['infinitif', 'cod-coi'], FCVDR),
  sent(1751, "Tu peux m'en parler.", 'You can talk to me about it.', '/ty pø mɑ̃ paʁ.le/', 'tü peu mahⁿ par-LAY', ['infinitif', 'y-en'], FCVDR),
  sent(1752, 'Il faut le leur dire.', 'They have to be told.', '/il fo lə lœʁ diʁ/', 'eel foh luh luhr DEER', ['infinitif', 'cod-coi']),
  sent(1753, 'Elle veut nous les montrer.', 'She wants to show them to us.', '/ɛl vø nu le mɔ̃.tʁe/', 'ehl veu noo lay mohⁿ-TRAY', ['infinitif', 'me-cod']),
  sent(1754, 'Nous allons vous y conduire.', 'We are going to take you there.', '/nu za.lɔ̃ vu zi kɔ̃.dɥiʁ/', 'noo za-LOHⁿ voo zee kohⁿ-DWEER', ['infinitif', 'y-en']),
  sent(1755, 'Je dois la lui rendre avant vendredi.', 'I have to give it back to her before Friday.', '/ʒə dwa la lɥi ʁɑ̃dʁ a.vɑ̃ vɑ̃.dʁə.di/', 'zhuh dwa la lwee RAHⁿDR a-vahⁿ vahⁿ-druh-DEE', ['infinitif', 'cod-coi']),
  sent(1756, 'Les petits mots se collent au verbe qui les commande.', 'The little words stick to the verb that governs them.', '/le pə.ti mo sə kɔl o vɛʁb ki le kɔ.mɑ̃d/', 'lay puh-tee MOH suh KOL oh vehrb kee lay ko-MAHⁿD', ['rule', 'infinitif'], ['flashcard'],
    rule('Avec aller, pouvoir ou vouloir, où se mettent les petits mots ?', 'Sur l’infinitif, pas sur le premier verbe : je vais le lui donner.')),
  sent(1757, 'Tu vas me le prêter, j’espère.', 'You are going to lend it to me, I hope.', '/ty va mə lə pʁɛ.te ʒɛs.pɛʁ/', 'tü va muh luh preh-TAY zhehs-PEHR', ['infinitif', 'me-cod']),
  sent(1758, 'On ne peut pas leur en vouloir.', 'You cannot blame them.', '/ɔ̃ nə pø pa lœ.ʁɑ̃ vu.lwaʁ/', 'ohⁿ nuh peu pa luh-rahⁿ voo-LWAR', ['infinitif', 'y-en']),
  sent(1759, 'Il préfère nous l’expliquer demain.', 'He would rather explain it to us tomorrow.', '/il pʁe.fɛʁ nu lɛks.pli.ke də.mɛ̃/', 'eel pray-FEHR noo lehks-plee-KAY duh-MEHⁿ', ['infinitif', 'me-cod', 'elision']),
  sent(1760, 'Je vais t’en apporter deux.', 'I am going to bring you two of them.', '/ʒə vɛ tɑ̃ na.pɔʁ.te dø/', 'zhuh veh tahⁿ na-por-TAY DEU', ['infinitif', 'y-en']),
  sent(1761, 'Elle a oublié de me le dire.', 'She forgot to tell me.', '/ɛl a u.bli.e də mə lə diʁ/', 'ehl a oo-blee-AY duh muh luh DEER', ['infinitif', 'me-cod']),
  sent(1762, 'Nous espérons le lui remettre lundi.', 'We hope to hand it to him on Monday.', '/nu zɛs.pe.ʁɔ̃ lə lɥi ʁə.mɛtʁ lœ̃.di/', 'noo zehs-pay-ROHⁿ luh lwee ruh-MEHTR luhⁿ-DEE', ['infinitif', 'cod-coi']),
  sent(1763, 'Tu devrais les y emmener.', 'You should take them there.', '/ty də.vʁɛ le zi ɑ̃m.ne/', 'tü duh-vreh lay zee ahⁿm-NAY', ['infinitif', 'y-en']),
  sent(1764, 'Il vient de me la rendre.', 'He has just given it back to me.', '/il vjɛ̃ də mə la ʁɑ̃dʁ/', 'eel vyehⁿ duh muh la RAHⁿDR', ['infinitif', 'me-cod']),
  sent(1765, 'Je n’arrive pas à le leur expliquer.', 'I cannot manage to explain it to them.', '/ʒə na.ʁiv pa a lə lœ.ʁɛks.pli.ke/', 'zhuh na-REEV pa a luh luh-rehks-plee-KAY', ['infinitif', 'cod-coi']),
];

/* ── ACT 10 · CE QU'ON ENTEND ──────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1766, 'Je t’en reparle ce soir.', 'I will get back to you about it this evening.', '/ʒə tɑ̃ ʁə.paʁl sə swaʁ/', 'zhuh tahⁿ ruh-PARL suh SWAR', ['elision', 'y-en'], FCVDR),
  sent(1767, 'Il m’y a vu.', 'He saw me there.', '/il mi a vy/', 'eel mee a VÜ', ['elision', 'y-en'], FCVDR),
  sent(1768, 'On l’y retrouve chaque été.', 'We meet him there every summer.', '/ɔ̃ li ʁə.tʁuv ʃa.ke.te/', 'ohⁿ lee ruh-TROOV sha-kay-TAY', ['elision', 'y-en']),
  sent(1769, 'Elle s’y est habituée.', 'She has got used to it.', '/ɛl si ɛ a.bi.tɥe/', 'ehl see eh a-bee-TWAY', ['elision', 'pronominal']),
  sent(1770, 'Je m’en occupe tout de suite.', 'I will see to it right away.', '/ʒə mɑ̃ nɔ.kyp tu də sɥit/', 'zhuh mahⁿ no-KÜP too duh SWEET', ['elision', 'y-en'], FCVDR),
  sent(1771, 'Tu t’en souviens encore.', 'You still remember it.', '/ty tɑ̃ su.vjɛ̃ ɑ̃.kɔʁ/', 'tü tahⁿ soo-VYEHⁿ ahⁿ-KOR', ['elision', 'y-en']),
  sent(1772, 'Il nous l’a dit à l’oreille.', 'He whispered it to us.', '/il nu la di a lɔ.ʁɛj/', 'eel noo la DEE a lo-REHY', ['elision', 'me-cod']),
  sent(1773, 'Devant une voyelle, me te se le la deviennent m’ t’ s’ l’.', 'Before a vowel, me te se le la become m’ t’ s’ l’.', '/də.vɑ̃ tyn vwa.jɛl mə tə sə lə la də.vjɛn/', 'duh-vahⁿ tünn vwa-YEHL muh tuh suh luh LA duh-VYEHN', ['rule', 'elision'], ['flashcard'],
    rule('Que deviennent me, te, se, le et la devant une voyelle ?', "Ils perdent leur voyelle : je t'en parle, il m'y a vu.")),
  sent(1774, 'On vous en a envoyé un.', 'We sent you one of them.', '/ɔ̃ vu zɑ̃ na ɑ̃.vwa.je œ̃/', 'ohⁿ voo zahⁿ na ahⁿ-vwa-yay UHⁿ', ['liaison', 'y-en']),
  sent(1775, 'Elle les y a laissés.', 'She left them there.', '/ɛl le zi a lɛ.se/', 'ehl lay zee a leh-SAY', ['liaison', 'y-en', 'accord']),
  sent(1776, 'Je le lui ai rappelé deux fois.', 'I reminded him of it twice.', '/ʒə lə lɥi e ʁa.pə.le dø fwa/', 'zhuh luh lwee ay ra-puh-LAY deu FWA', ['passe-compose', 'cod-coi']),
  sent(1777, 'Il y en avait encore hier.', 'There were still some yesterday.', '/i ljɑ̃ na.vɛ ɑ̃.kɔʁ jɛʁ/', 'ee-lyahⁿ-na-VEH ahⁿ-kor YEHR', ['liaison', 'y-en']),
  sent(1778, 'Tu me l’as dit à voix basse.', 'You said it to me quietly.', '/ty mə la di a vwa bas/', 'tü muh la DEE a vwa BASS', ['elision', 'me-cod']),
  sent(1779, 'On s’en est bien sorti.', 'We came out of it all right.', '/ɔ̃ sɑ̃ nɛ bjɛ̃ sɔʁ.ti/', 'ohⁿ sahⁿ neh byehⁿ sor-TEE', ['elision', 'y-en']),
  sent(1780, 'Je vous y attends à dix heures.', 'I will be waiting for you there at ten.', '/ʒə vu zi a.tɑ̃ a di.zœʁ/', 'zhuh voo zee a-TAHⁿ a dee-ZUHR', ['liaison', 'y-en']),
  sent(1781, 'Après nous, vous, les et en, la liaison se fait.', 'After nous, vous, les and en, the liaison is made.', '/a.pʁɛ nu vu le e ɑ̃ la ljɛ.zɔ̃ sə fɛ/', 'a-PREH noo VOO lay ay AHⁿ la lyeh-zohⁿ suh FEH', ['rule', 'liaison'], ['flashcard'],
    rule('Qu’entend-on entre nous et y dans « elle nous y emmène » ?', 'Un z : le s de nous se prononce et passe sur la syllabe suivante.')),
];

/* ── ACT 11 · TOUT ENSEMBLE ────────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1782, 'Je te le promets.', 'I promise you.', '/ʒə tə lə pʁɔ.mɛ/', 'zhuh tuh luh pro-MEH', ['me-cod'], FCVDR),
  sent(1783, "Il me l'a confirmé ce matin.", 'He confirmed it to me this morning.', '/il mə la kɔ̃.fiʁ.me sə ma.tɛ̃/', 'eel muh la kohⁿ-feer-MAY suh ma-TEHⁿ', ['passe-compose', 'me-cod']),
  sent(1784, 'Passe-la-moi, je m’en occupe.', 'Pass it to me, I will take care of it.', '/pas la mwa ʒə mɑ̃ nɔ.kyp/', 'pass-la-MWA zhuh mahⁿ no-KÜP', ['imperatif-affirmatif', 'y-en']),
  sent(1785, 'Ne le lui répète pas.', 'Do not repeat it to him.', '/nə lə lɥi ʁe.pɛt pa/', 'nuh luh lwee ray-PEHT pa', ['imperatif-negatif']),
  sent(1786, 'Nous allons les leur rendre lundi.', 'We are going to give them back to them on Monday.', '/nu za.lɔ̃ le lœʁ ʁɑ̃dʁ lœ̃.di/', 'noo za-LOHⁿ lay luhr RAHⁿDR luhⁿ-DEE', ['infinitif', 'cod-coi']),
  sent(1787, 'Elle nous en a apporté trois.', 'She brought us three of them.', '/ɛl nu zɑ̃ na a.pɔʁ.te tʁwa/', 'ehl noo zahⁿ na a-por-TAY TRWA', ['passe-compose', 'y-en']),
  sent(1788, 'Tu la leur montreras demain.', 'You will show it to them tomorrow.', '/ty la lœʁ mɔ̃.tʁə.ʁa də.mɛ̃/', 'tü la luhr mohⁿ-truh-RA duh-MEHⁿ', ['cod-coi', 'futur']),
  sent(1789, 'Dis-le-lui ce soir.', 'Tell him this evening.', '/di lə lɥi sə swaʁ/', 'dee-luh-LWEE suh SWAR', ['imperatif-affirmatif'], FCVDR),
  sent(1790, "On me l'a demandé deux fois.", 'I have been asked for it twice.', '/ɔ̃ mə la də.mɑ̃.de dø fwa/', 'ohⁿ muh la duh-mahⁿ-DAY deu FWA', ['passe-compose', 'me-cod']),
  sent(1791, 'Je ne vous en veux pas.', 'I am not holding it against you.', '/ʒə nə vu zɑ̃ vø pa/', 'zhuh nuh voo zahⁿ VEU pa', ['negation', 'y-en']),
  sent(1792, 'Rends-les-moi quand tu peux.', 'Give them back to me when you can.', '/ʁɑ̃ le mwa kɑ̃ ty pø/', 'rahⁿ-lay-MWA kahⁿ tü PEU', ['imperatif-affirmatif']),
  sent(1793, 'Elle leur en a gardé une part.', 'She kept a slice of it for them.', '/ɛl lœ.ʁɑ̃ na ɡaʁ.de yn paʁ/', 'ehl luh-rahⁿ na gar-DAY ünn PAR', ['passe-compose', 'y-en']),
  sent(1794, 'Une seule file, cinq places, et elle ne quitte pas son verbe.', 'One queue, five places, and it never leaves its verb.', '/yn sœl fil sɛ̃k plas e ɛl nə kit pa sɔ̃ vɛʁb/', 'ünn suhl FEEL sehⁿk PLASS ay ehl nuh keet pa sohⁿ VEHRB', ['rule', 'file'], ['flashcard'],
    rule('Résume toute la leçon en une phrase.', 'Une file, cinq places, collée au verbe, et l’ordre affirmatif la fait passer derrière.')),
  sent(1795, 'Je vais le leur envoyer ce soir.', 'I am going to send it to them this evening.', '/ʒə vɛ lə lœ.ʁɑ̃.vwa.je sə swaʁ/', 'zhuh veh luh luh-rahⁿ-vwa-YAY suh SWAR', ['infinitif', 'cod-coi']),
  sent(1796, 'Ne m’en parle plus.', 'Do not talk to me about it any more.', '/nə mɑ̃ paʁl ply/', 'nuh mahⁿ PARL PLÜ', ['imperatif-negatif', 'y-en']),
  sent(1797, 'On vous les remettra à l’accueil.', 'They will be handed to you at reception.', '/ɔ̃ vu le ʁə.mɛ.tʁa a la.kœj/', 'ohⁿ voo lay ruh-meh-TRA a la-KUHY', ['me-cod', 'futur']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE LONG TEXTS AND THEIR ANSWER KEYS
 *
 *  Held here so the reading and the quiz cannot drift apart.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1's reading: two pronouns everywhere, in a real exchange. 131 words. */
export const READING_TEXT =
  "Awa laisse un mot sur la table de la cuisine. « Salut ! Le propriétaire passe à midi pour l’état des lieux. L’enveloppe est sur le frigo : donne-la-lui et demande-lui un reçu. Il te le signera tout de suite, c’est rapide. Les doubles des clés sont dans le tiroir : il y en a deux, mais ne les lui donne pas aujourd’hui. Je préfère les lui remettre moi-même vendredi. Si le plombier appelle, dis-le-moi par message, je m’en occupe. J’ai déjà tout expliqué à la propriétaire du deuxième, et elle me l’a confirmé hier soir. Merci ! Awa. » Tu relis le mot deux fois. Il y a huit petits mots collés à des verbes, et chacun est à sa place.";

/** Act 11's model: the shape the learner will imitate in the task. 118 words. */
export const MODEL_TEXT =
  "Salut Karim, merci pour hier. J’ai retrouvé ton chargeur dans le salon : je te le rapporte lundi, promis. Le livre de Sonia, je le lui ai déjà rendu samedi, donc ne t’en fais pas. Par contre, les photos du week-end, je ne les ai pas encore envoyées : je vais les lui envoyer ce soir, et je t’en mets une copie. Le propriétaire demande les doubles des clés. Ne les lui donne pas avant vendredi, on en reparle avant. Si tu passes à la maison, apporte-les-moi et je m’en occupe. Dis-le-moi la veille, parce que je travaille tard. À lundi, et raconte-nous ta semaine.";

/** The eight verbs the act 1 reading hangs its pronouns on, in order. */
export const READING_VERBS = [
  'donne-la-lui', 'demande-lui', 'il te le signera', 'il y en a deux',
  'ne les lui donne pas', 'les lui remettre', 'dis-le-moi', 'elle me l’a confirmé',
] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** The ids of one act's rows that carry a `dictation` drill. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);
