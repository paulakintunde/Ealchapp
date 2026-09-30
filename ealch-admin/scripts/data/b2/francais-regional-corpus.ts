// b2.31.l1 « Les accents et le français régional »: the authored corpus, the
// imports, the texts and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (the workshop shape: a TEXT and a MOVE
// per act) on top of B1-BUILD-PLAYBOOK.md, with the B2 rules of
// B2-BUILD-LOG.md (« Reading at B2 », « Listening at B2 », « What is
// different at B2 »).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file and quote
// it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 31 of the B2 trail, the second of Unit 6
// ══════════════════════════════════════════════════════════════════════════
//
//   REGIONAL FRENCH AND ACCENTS, RECEPTIVE. The learner UNDERSTANDS a
//   variety; he or she is never asked to imitate an accent, and no variety
//   is ever called wrong.
//
//     act 1   the problem: a Montréal cashier, a learner who blames the
//             accent (or switches to English)
//     act 2   French as a pluricentric language: several centres, one shared
//             written standard, the « français de référence » and its limits
//     act 3   Québec, the ear: affrication (tu, dis), relâchement, diphthongs,
//             « moé, toé » in familiar speech, patte / pâte; joual named
//     act 4   Québec, the words: déjeuner / dîner / souper, dépanneur,
//             magasiner, blonde / chum, char (familier), présentement, c’est
//             plate, tuque, breuvage, bienvenue; the sacres as a CATEGORY only
//     act 5   Belgium and Switzerland: septante, nonante, huitante (Vaud,
//             Valais), à tantôt, s’il vous plaît when handing, dîner / souper,
//             GSM, natel, drache, kot, savoir for pouvoir, « une fois »
//     act 6   France has accents too: the Midi (final e, nasal with a
//             consonant tail), chocolatine; insécurité linguistique,
//             glottophobie
//     act 7   French in Africa, country by country: maquis, gbaka, tantie,
//             gâter (Côte d’Ivoire), on dit quoi (Cameroun, Côte d’Ivoire),
//             essencerie, dibiterie (Sénégal), deuxième bureau, enceinter,
//             présentement
//     act 8   languages in contact: the Creoles are languages (Antilles,
//             Réunion, Haïti), Acadia (je parlons, chiac), borrowings from
//             Maghrebi Arabic (kif-kif, toubib, souk)
//     act 9   strategies: context, key words, asking politely, repeating back,
//             asking for the word, staying in French
//     act 10  attitudes and institutions: insécurité linguistique, respect;
//             OQLF, DGLFLF, Académie française, OIF, loi Toubon
//     act 11  the task: a 200 to 250 word letter about a conversation you did
//             not understand at first (DELF B2 PE)
//
//   NOT OWNED, CITED ONLY:
//     - register (familier / courant / soutenu) is lesson 25 in B1's. Its
//       Québec rows (char, blonde, chum, c’est plate, pantoute) are REUSED
//       by id, never re-authored; its reframe is quoted in act 4.
//     - tu against vous, with its francophone variation (Québec, Dakar), is
//       lesson 26 in B1's; its rows are reused in acts 4 and 7.
//     - asking for repetition on the phone is lesson 38 in B1's; its rows
//       (« Pardon, vous pouvez répéter plus lentement ? », « si je comprends
//       bien », « c’est bien ça ? ») are reused in act 9, which goes past it:
//       an UNFAMILIAR ACCENT, a regional WORD, and not switching to English.
//     - listening at natural speed is lesson 25 in B2's; it MARKED regional
//       words only (présentement, septante), and names this lesson as the
//       owner of regional French. Its reframe is quoted in act 9.
//     - septante and nonante as NUMBERS are lesson 3 in A1's (recognition);
//       act 5 adds huitante, where each is said, and the listening.
//     - slang and verlan are lesson 32 in B2's (written in parallel): the
//       Arabic borrowings here are FAMILIAR FRENCH words, not slang, and
//       nothing from the argot des jeunes is taught.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked (seedPlusPacks, read 2026-09-30), DB check
//      pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `quebec-et-francophonie` (« Québec et francophonie », culture,
//     levelRange a1-b2). Sub-theme « les accents et le français régional »
//     set in Postgres by the orchestrator (the seed's copy still shows
//     `subThemes: []`). The seed holds 21 rows in the theme: fr.a1 .088,
//     fr.a2 .031 .121 .197-.202, fr.b1 .006-.015, fr.b2 .003-.010. ZERO rows
//     at .1000-.1199 at any level (scratch/_b231-probe.mts).
//
//  2. ID BLOCK: `fr.b2.quebec-et-francophonie.1000` to `.1199` ONLY,
//     assigned by the brief. Rows run in one sequence, act by act (see the
//     act banners). Nothing outside the block.
//
//  3. RECEPTIVE. A row that holds a REGIONAL ITEM (a word, a turn of phrase,
//     a Creole greeting) carries `flashcard` and `review` only: the learner
//     recognises it and knows where it is said; no voiceflash asks him to
//     say it, and it never enters the `practice` speak list. The rows the
//     learner may SAY are the strategies (« Pardon, je n’ai pas bien
//     saisi »), the commentary lines for the letter, and plain facts.
//     Accent features are taught through notation and description (card
//     bodies, the tapTable of act 3); the TTS voice is fr-FR and the lesson
//     says so on screen; no row's `respell` pretends to be a regional one.
//
//  4. NO TWIN, NO HEADWORD CLASH. Every authored `fr` was folded and
//     compared with the whole seed and with every other corpus in data/b1
//     and data/b2 (scratch/_b231-twins.mts). The items the seed already
//     holds are IMPORTED (§F): un dépanneur, magasiner, une tuque, un char,
//     ma blonde, mon chum, c’est plate, présentement, la fin de semaine, the
//     souper / dîner line, the tantôt line, the septante and nonante lines,
//     the Québec and Dakar tu / vous lines, and lesson 38 in B1's repetition
//     lines. Two first drafts twinned a seed row (« une tuque », « Vous
//     pouvez me l’écrire, s’il vous plaît ? ») and were replaced by imports.
//
//  5. RESPELLINGS spelled for the nasal checker rather than the ear: a real
//     /n/ or /m/ after a vowel is doubled where the checker would read a
//     nasal vowel: personne pehr-SONN, téléphone tay-lay-FONN, Moncton
//     mohⁿk-TONN, Lausanne loh-ZANN, GSM zhay-ess-EMM. No U+203F tie.
//
//  6. APOSTROPHES. Every authored French string, text and scenario uses the
//     typographic ’. Reused seed rows keep their own straight ' and are
//     never quoted inside a scenario.
//
//  7. REGIONAL ITEMS AND FACTUAL CLAIMS, FOR THE FACT CHECK. Region named on
//     screen, and my confidence (H high, M medium). Checked against what I
//     know of Usito, the OQLF Banque de dépannage linguistique, the
//     Dictionnaire des belgicismes, the BDLP and the Dictionnaire suisse
//     romand. Anything I was not sure of was LEFT OUT (see the end of this
//     list).
//
//     QUÉBEC (acts 1, 3, 4, 9)
//       tu / di affriqués « tsu, dzi » before i, u (tu, dis, petit, lundi,
//         midi), in every register incl. Radio-Canada news ............ H
//       relâchement of i, u, ou in closed syllables (vite, jupe, route) . H
//       diphthongs of long stressed vowels, mostly relaxed speech
//         (père « paère », fête « faète ») ............................ H
//       « moé, toé » for moi, toi: familiar, SOME speakers .............. H
//       patte / pâte still distinguished ............................... H
//       joual: a popular Montréal variety, not all of Québec French ..... H
//       Usito: a dictionary of standard Québec French .................. H
//       « Tu veux-tu un sac ? »: -tu as a familiar question marker ...... H
//       déjeuner (morning) / dîner (noon) / souper (evening) ............ H
//       dépanneur, magasiner, blonde, chum, char (familier), c’est plate
//         (familier), présentement, fin de semaine, courriel: REUSED rows H
//       tuque (knitted hat), breuvage (a drink), jaser (to chat),
//         barrer (to lock), « si ça te tente », « bienvenue » as the
//         answer to merci, mitaines, rôties (toast), casse-croûte,
//         pâté chinois, cellulaire, stationnement ....................... H
//       sacres: Québec swear words, largely from religious vocabulary:
//         NAMED AS A CATEGORY, NONE LISTED ............................. H
//     BELGIUM AND SWITZERLAND (act 5)
//       septante, nonante: Belgium and Switzerland; Belgium keeps
//         quatre-vingts ................................................ H
//       huitante: Swiss, « notamment dans le canton de Vaud et en
//         Valais » (also Fribourg, not claimed) ........................ H
//       Geneva « plutôt quatre-vingts » ................................. M
//       à tantôt (Belgium: see you later today) ......................... H
//       « s’il vous plaît » said when handing something (Belgium) ....... H
//       dîner at noon / souper in the evening, « beaucoup de gens »
//         (Belgium, Switzerland) ....................................... H
//       GSM (Belgium), natel (Switzerland), drache (Belgium: downpour),
//         kot (Belgium: student room), savoir for pouvoir (Belgium:
//         « je ne sais pas venir ») ..................................... H
//       « une fois » after an imperative (« viens une fois »): Brussels
//         popular speech, from Brussels Dutch; often caricatured ........ H
//     FRANCE (act 6)
//       Midi: the final e pronounced (petite, table), nasal vowels with a
//         consonant tail (« pèng » for pain), Occitan historically spoken
//         around Toulouse ............................................... H
//       chocolatine: south-west (Toulouse, Bordeaux) .................... H
//       insécurité linguistique; « glottophobie » (a term used by some
//         linguists for discrimination by way of speaking) .............. H
//     AFRICA (act 7). Country always named, never « l’Afrique »
//       maquis (small open-air restaurant), gbaka (Abidjan minibus),
//         attiéké: Côte d’Ivoire ....................................... H
//       tantie (respectful address): Côte d’Ivoire ....................... H
//       gâter / « est gâté » (broken): Côte d’Ivoire, Cameroun ........... H
//       enceinter: Côte d’Ivoire, Cameroun (named in a card body only) .. H
//       « On dit quoi ? » (how are you): Cameroun, Côte d’Ivoire ......... H
//       essencerie (petrol station), dibiterie (grilled meat): Sénégal .. H
//       deuxième bureau (a second, hidden partner): « en Afrique
//         centrale et de l’Ouest, au Cameroun par exemple » ............. H
//       présentement also in West Africa (REUSED row) ................... H
//       French the only official language of Côte d’Ivoire; dioula and
//         baoulé also spoken; wolof / French code-switching in Dakar .... H
//       « la majorité des personnes qui parlent français tous les jours
//         vivent en Afrique », attributed to the OIF .................... H
//     CONTACT (act 8)
//       Creoles born in the colonial period and slavery; French-based
//         vocabulary, their own grammar; written, taught, a literature .. H
//       « Sa ou fè ? » (Martinique, Guadeloupe), « Koman i lé ? »
//         (La Réunion): Creole, labelled NOT French ..................... H
//       Haïti: Creole and French both official ........................... H
//       cari: La Réunion ................................................. H
//       Acadia: « je parlons » for nous parlons, SOME older speakers ...... H
//       chiac: French-English contact variety, Moncton region (south-east
//         New Brunswick), long mocked, now claimed by artists ............ H
//       toubib, kif-kif, souk (« c’est le souk »): familiar French words
//         borrowed from Arabic .......................................... H
//       Maghreb: French beside Arabic and Tamazight ...................... H
//     INSTITUTIONS (act 10)
//       OQLF: sees to the application of the Charte de la langue
//         française; proposed courriel (1990s) and clavardage ........... H
//       DGLFLF: part of the French ministère de la Culture, coordinates
//         language policy and new French terms .......................... H
//       Académie française: founded 1635, writes a dictionary and gives
//         opinions, does not rule usage ................................. H
//       loi Toubon (1994): French required in advertising and at work,
//         among other fields ............................................ H
//       a terminology recommendation does not bind private individuals .. H
//       OIF: « des États et des gouvernements qui ont le français en
//         partage » ...................................................... H
//       Fédération Wallonie-Bruxelles: its own service de la langue
//         française (sheet only) ........................................ M
//       Suisse romande: a Délégation à la langue française, attached to
//         the CIIP (sheet only) ......................................... M
//
//     LEFT OUT, NOT SURE ENOUGH OR NOT WANTED: piastre, icitte, frette (b1.25
//     owns it), « Service ! » (Swiss), cadeauter, doigter, « ça va un peu »,
//     tata, toubab, zoreil, grains (Réunion), bled, any real chiac sentence,
//     « putain » and every swear word, any real sacre, any real person.
//
//     ALL PEOPLE, SHOPS AND EXCHANGES ARE INVENTED. Real places appear only
//     as places (Montréal, Québec, Lévis, Trois-Rivières, Sherbrooke,
//     Bruxelles, Liège, Lausanne, Genève, Toulouse, Bordeaux, Abidjan,
//     Dakar, Fort-de-France, Moncton), with nothing claimed about them
//     beyond plain facts. Real institutions are described, never quoted.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item, Register } from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b2.31',
  seq: 31,
  title: 'Accents and Regional French',
  sub: 'Les accents et le français régional',
  canDo: 'Can understand speakers of French from Québec, Belgium, Switzerland, the south of France, West and Central Africa, the Antilles, La Réunion, Acadia and the Maghreb, recognise the main features of their accents and the everyday words of their regions, tell a French word from a Creole one, handle an unfamiliar accent with polite strategies without switching to English, and write about a misunderstanding with respect for every variety',
  prereqUnitIds: ['b1.25', 'b1.26', 'b1.38', 'b2.25'],
} as const;

export const LESSON_ID = 'b2.31.l1';
export const THEME = 'quebec-et-francophonie';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so every citation is French and built from the
 *  trail position, read from the seed's units (A1, A2) or from the plan
 *  (B1, B2: a unit id's number IS its position there). Only occupied
 *  positions are cited: A1, A2 1-36, B1 1-39, B2 1-34. Never a raw id.
 * ══════════════════════════════════════════════════════════════════════════ */

const SEQ = new Map<string, number>(
  ((seedPlusPacks() as unknown as { units: { id: string; seq: number | string }[] }).units)
    .map((u) => [u.id, Number(u.seq)]),
);

export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  if (m) return `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}`;
  const a = /^(a1|a2)\.\d{2}$/.exec(unitId);
  const n = SEQ.get(unitId);
  if (a && n) return `la leçon ${n} du ${a[1].toUpperCase()}`;
  throw new Error(`b2.31: no trail position for ${unitId}`);
}

export const NOMBRES_UNIT = 'a1.27';          // Numbers 21 to 100 (septante, nonante)
export const NEGATION_UNIT = 'b1.20';
export const REGISTRES_UNIT = 'b1.25';
export const TU_VOUS_UNIT = 'b1.26';
export const ECOUTE_B1_UNIT = 'b1.38';
export const SI_PASSE_UNIT = 'b2.03';
export const CRITIQUE_UNIT = 'b2.24';
export const ECOUTE_B2_UNIT = 'b2.25';
export const LITTERATURE_UNIT = 'b2.30';
export const ARGOT_UNIT = 'b2.32';

export const NOMBRES_REF = refFr(NOMBRES_UNIT);
export const NEGATION_REF = refFr(NEGATION_UNIT);
export const REGISTRES_REF = refFr(REGISTRES_UNIT);
export const TU_VOUS_REF = refFr(TU_VOUS_UNIT);
export const ECOUTE_B1_REF = refFr(ECOUTE_B1_UNIT);
export const SI_PASSE_REF = refFr(SI_PASSE_UNIT);
export const CRITIQUE_REF = refFr(CRITIQUE_UNIT);
export const ECOUTE_B2_REF = refFr(ECOUTE_B2_UNIT);
export const LITTERATURE_REF = refFr(LITTERATURE_UNIT);
export const ARGOT_REF = refFr(ARGOT_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE NEIGHBOURS' REFRAMES, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B125_REFRAME, REFRAME_EN as B125_REFRAME_EN } from '../b1/registres-corpus.ts';
export { REFRAME as B126_REFRAME, REFRAME_EN as B126_REFRAME_EN } from '../b1/tu-ou-vous-corpus.ts';
export { REFRAME as B138_REFRAME, REFRAME_EN as B138_REFRAME_EN } from '../b1/strategies-ecoute-corpus.ts';
export { REFRAME as B224_REFRAME, REFRAME_EN as B224_REFRAME_EN } from './lecture-critique-corpus.ts';
export { REFRAME as B225_REFRAME, REFRAME_EN as B225_REFRAME_EN } from './ecoute-vitesse-reelle-corpus.ts';
export { REFRAME as B230_REFRAME, REFRAME_EN as B230_REFRAME_EN } from './lire-litterature-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  UN ACCENT EST UNE ADRESSE. It says where someone comes from (a country,
 *  a region, a family, a history), and nothing about what that person is
 *  worth: not their intelligence, not their French. Every act either reads
 *  an address (acts 3 to 8: Québec, Belgium, Switzerland, the Midi, Africa,
 *  the Creoles, Acadia, the Maghreb), or refuses to read it as a grade
 *  (acts 1, 2, 6, 10), or finds the way to the meaning when the address is
 *  unfamiliar (act 9).
 *
 *  It is NOT « there is no good French » (act 2 keeps a shared written
 *  standard and a français de référence), and NOT « speak like them » (the
 *  lesson is receptive: recognise, never imitate).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Tout le monde a un accent : il dit d’où l’on vient, jamais ce qu’on vaut.';
export const REFRAME_EN = 'Everyone has an accent: it says where you come from, never what you are worth.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Il n’y a pas de bon accent.',
    why: 'True, but it gives the ear no move: it does not say what an accent IS (an address), and it is silent on the regional words of acts 4, 5 and 7 and on the strategies of act 9.',
  },
  {
    text: 'Le français de référence, c’est celui de Paris.',
    why: 'The very idea act 2 corrects: the reference is a shared tool, not a place, and Paris has an accent of its own.',
  },
  {
    text: 'Quand tu ne comprends pas, passe à l’anglais.',
    why: 'The failing instinct of the act 1 scene. Act 9 is built against it: stay in French, ask for the word, repeat back.',
  },
  {
    text: 'Imite l’accent pour te faire accepter.',
    why: 'The lesson is receptive. An imitated accent is heard as mockery; the letter of act 11 describes accents, it never reproduces them.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-30, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const QF = (lvl: string, n: number) => `fr.${lvl}.quebec-et-francophonie.${String(n).padStart(3, '0')}`;
const LS = (n: number) => `fr.b1.langue-soignee.${n}`;
const SC1 = (n: number) => `fr.b1.strategies-de-comprehension.${n}`;
const RPE = (n: number) => `fr.b1.rp-etiquette.${n}`;

export const DEPANNEUR = QF('a2', 31);                       // un dépanneur  (flashcard, review)
export const MAGASINER = QF('a2', 199);                      // magasiner  (flashcard, review)
export const SOUPE = QF('a2', 197);                          // On soupe à quelle heure ?
export const CHARTE = QF('b2', 3);                           // la Charte de la langue française  (flashcard, review)
export const CHAR_S = LS(1360);                              // Mon char est encore au garage.  (lesson 25 in B1)
export const BLONDE_S = LS(1361);                            // Samedi, je vais magasiner avec ma blonde.
export const PLATE_S = LS(1362);                             // C'est plate, il pleut toute la fin de semaine.
export const CHUM_S = LS(1363);                              // Mon chum travaille de soir cette semaine.
export const QC_RULE = LS(1374);                             // Au Québec, le familier va plus loin. Courriel et fin de semaine, c’est du courant.  (flashcard only)
export const CHAR = LS(1375);                                // un char
export const BLONDE = LS(1376);                              // ma blonde
export const CHUM = LS(1377);                                // mon chum
export const PANTOUTE = LS(1378);                            // pantoute
export const PLATE = LS(1379);                               // c'est plate
export const PRESENTEMENT = 'fr.b2.strategies-de-comprehension.1714'; // présentement  (lesson 25 in B2)
export const FIN_SEMAINE = SC1(1246);                        // la fin de semaine  (lesson 38 in B1)
export const SEPTANTE_S = SC1(1086);                         // Septante pour cent des habitants lisent un journal en ligne.  (lesson 37 in B1)
export const NONANTE_S = SC1(1087);                          // Le billet coûtera nonante euros.
export const TANTOT_S = 'fr.b1.expressions-de-quantite.1158'; // Au Québec, on dit souvent tantôt pour tout à l'heure.  (lesson 23 in B1)
export const SOUPER_S = 'fr.b1.connecteurs-logiques.1534';    // Au Québec, on dit souper, alors qu'en France, on dit dîner.  (lesson 32 in B1)
export const TU_QC = RPE(1134);                              // Au Québec, on se tutoie beaucoup plus qu'en France.  (lesson 26 in B1)
export const TU_CHALEUREUX = RPE(1137);                      // Le tu du Québec n'est pas impoli : il est chaleureux.
export const VOUS_DAKAR = RPE(1139);                         // À Dakar, on vouvoie les aînés par respect.
export const TONTON = RPE(1143);                             // Tonton, vous avez bien dormi ?
export const PAYS_RULE = RPE(1144);                          // La règle change d'un pays à l'autre, la distance reste.  (flashcard only)
export const CREOLE_S = 'fr.b1.recits-au-passe.426';          // Vous parliez créole à la maison.  (lesson 2 in B1)
export const REPETER = SC1(1330);                            // Pardon, vous pouvez répéter plus lentement ?  (lesson 38 in B1)
export const DIT_OU = SC1(1337);                             // Vous avez dit quinze ou cinquante ?
export const SI_COMPRENDS = SC1(1336);                       // si je comprends bien
export const BIEN_CA = SC1(1342);                            // c'est bien ça ?
export const REPETER_RULE = SC1(1341);                       // Au téléphone, faire répéter, c'est normal.  (flashcard only)
export const EPELER = SC1(1339);                             // Vous pouvez l'épeler, s'il vous plaît ?
export const ECRIRE = 'fr.a2.au-restaurant.137';              // Vous pouvez me l'écrire, s'il vous plaît ?  (A2)
export const TUQUE = SC1(1248);                              // une tuque  (lesson 38 in B1)

export const IMPORTED = {
  act1: [
    DEPANNEUR,                       // un dépanneur
    TU_QC,                           // Au Québec, on se tutoie beaucoup plus qu'en France.
  ],
  act2: [] as string[],
  act3: [
    TU_CHALEUREUX,                   // Le tu du Québec n'est pas impoli : il est chaleureux.
  ],
  act4: [
    SOUPER_S,                        // Au Québec, on dit souper, alors qu'en France, on dit dîner.
    SOUPE,                           // On soupe à quelle heure ?
    MAGASINER,                       // magasiner
    BLONDE, CHUM, CHAR, PLATE,       // ma blonde · mon chum · un char · c'est plate
    BLONDE_S, CHAR_S, PLATE_S, CHUM_S, // four lesson 25 in B1 sentences
    PRESENTEMENT,                    // présentement
    FIN_SEMAINE,                     // la fin de semaine
    QC_RULE,                         // Au Québec, le familier va plus loin…  (flashcard only)
    TANTOT_S,                        // Au Québec, on dit souvent tantôt pour tout à l'heure.
    TUQUE,                           // une tuque
  ],
  act5: [
    SEPTANTE_S,                      // Septante pour cent des habitants lisent un journal en ligne.
    NONANTE_S,                       // Le billet coûtera nonante euros.
  ],
  act6: [] as string[],
  act7: [
    VOUS_DAKAR,                      // À Dakar, on vouvoie les aînés par respect.
    TONTON,                          // Tonton, vous avez bien dormi ?
    PAYS_RULE,                       // La règle change d'un pays à l'autre, la distance reste.  (flashcard only)
  ],
  act8: [
    CREOLE_S,                        // Vous parliez créole à la maison.
  ],
  act9: [
    REPETER,                         // Pardon, vous pouvez répéter plus lentement ?
    DIT_OU,                          // Vous avez dit quinze ou cinquante ?
    SI_COMPRENDS,                    // si je comprends bien
    BIEN_CA,                         // c'est bien ça ?
    EPELER,                          // Vous pouvez l'épeler, s'il vous plaît ?
    ECRIRE,                          // Vous pouvez me l'écrire, s'il vous plaît ?
    REPETER_RULE,                    // Au téléphone, faire répéter, c'est normal.  (flashcard only)
  ],
  act10: [
    CHARTE,                          // la Charte de la langue française
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. None. */
export const NOT_DECK_ABLE: readonly string[] = [];

/** No `voiceflash` in the seed, or a REGIONAL item this receptive lesson
 *  never asks the learner to say: never in the `practice` speak list. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE,
  DEPANNEUR, MAGASINER, CHARTE,      // flashcard + review only
  QC_RULE, PAYS_RULE, REPETER_RULE,  // flashcard only
  CHAR, BLONDE, CHUM, PANTOUTE, PLATE, CHAR_S, BLONDE_S, PLATE_S, CHUM_S, PRESENTEMENT, TUQUE, FIN_SEMAINE,  // regional: recognised, not produced
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS
 *
 *  A WORKSHOP CORPUS HOLDS PHRASES THAT DO A JOB: a line of one of the
 *  lesson's texts, a regional item with its region in `en` (`reg()`:
 *  flashcard and review ONLY, §A.3), a strategy the learner may say, or a
 *  line for the letter. Each act has one flashcard-only rule card
 *  (`rule()`), whose prompt is a situation and whose `fr` is the act's move.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const RV = ['flashcard', 'review'] as Item['drills'];
const FC = ['flashcard'] as Item['drills'];
const GP = ['francais-regional'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: GP, ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, ...extra,
});

/** A REGIONAL item: recognised, never produced (§A.3). */
const reg = (
  n: number, kind: 'phrase' | 'sentence', fr: string, en: string, ipa: string, respell: string,
  tags: string[], register: Register = 'courant',
): Row => (kind === 'phrase'
  ? phrase(n, fr, en, ipa, respell, ['regional', ...tags], RV, { register })
  : sent(n, fr, en, ipa, respell, ['regional', ...tags], RV, { register }));

/** A rule card: `prompt` is the situation, `fr` the move. */
const rule = (n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[]): Row =>
  sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · « PARDON, JE N’AI PAS BIEN SAISI » (.1000-.1012) ───────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, 'Désolé, je ne comprends pas votre accent.', 'Sorry, I don’t understand your accent.',
    '/de.zɔ.le ʒə nə kɔ̃.pʁɑ̃ pa vɔ.tʁak.sɑ̃/', 'day-zo-LAY | zhuh nuh kohⁿ-prahⁿ pa vo-trak-SAHⁿ', ['contexte', 'scene'], RV),
  sent(1001, 'Pardon, je n’ai pas bien saisi.', 'Sorry, I didn’t quite catch that.',
    '/paʁ.dɔ̃ ʒə ne pa bjɛ̃ se.zi/', 'par-DOHⁿ | zhuh nay pa byehⁿ say-ZEE', ['strategie', 'scene'], FCVDR),
  sent(1002, 'Je vous demandais si vous vouliez un sac.', 'I was asking whether you wanted a bag.',
    '/ʒə vu də.mɑ̃.dɛ si vu vu.lje œ̃ sak/', 'zhuh voo duh-mahⁿ-DEH | see voo voo-lyay uhⁿ SAK', ['scene']),
  reg(1003, 'sentence', 'Tu veux-tu un sac ?', 'Do you want a bag? (Québec, familiar: the second tu only marks the question)',
    '/ty vø ty œ̃ sak/', 'tü veu-tü uhⁿ SAK', ['quebec', 'scene'], 'familier'),
  rule(1004, REFRAME, REFRAME_EN,
    '/tu lə mɔ̃d a œ̃.nak.sɑ̃ il di du lɔ̃ vjɛ̃ ʒa.mɛ sə kɔ̃ vo/', 'tool MOHⁿD a uhⁿ-nak-SAHⁿ | eel dee doo lohⁿ VYEHⁿ | zha-meh suh kohⁿ VOH',
    'Quelqu’un se moque de l’accent d’une collègue. Que lui rappelles-tu ?',
    'Un accent dit une région, un pays, une histoire. Il ne dit rien de l’intelligence de la personne, ni de la qualité de son français.', ['reframe']),
  sent(1005, 'Tout le monde a un accent, y compris à Paris.', 'Everyone has an accent, including in Paris.',
    '/tu lə mɔ̃d a œ̃.nak.sɑ̃ i kɔ̃.pʁi a pa.ʁi/', 'tool mohⁿd a uhⁿ-nak-SAHⁿ | ee kohⁿ-pree a pa-REE', ['attitude'], FCVDR),
  sent(1006, 'Passer à l’anglais, c’est souvent refermer la porte.', 'Switching to English often closes the door.',
    '/pa.se a lɑ̃.ɡlɛ sɛ su.vɑ̃ ʁə.fɛʁ.me la pɔʁt/', 'pa-say a lahⁿ-GLEH | seh soo-vahⁿ ruh-fehr-may la PORT', ['strategie', 'texte']),
  sent(1007, 'Je n’ai pas tout compris, mais j’ai saisi l’essentiel.', 'I didn’t understand everything, but I caught the main point.',
    '/ʒə ne pa tu kɔ̃.pʁi mɛ ʒe se.zi le.sɑ̃.sjɛl/', 'zhuh nay pa too kohⁿ-PREE | meh zhay say-zee lay-sahⁿ-SYEL', ['strategie']),
  sent(1008, 'Au début, je croyais que je ne parlais pas français.', 'At first, I thought I didn’t speak French.',
    '/o de.by ʒə kʁwa.jɛ kə ʒə nə paʁ.lɛ pa fʁɑ̃.sɛ/', 'oh day-BÜ | zhuh krwa-YEH | kuh zhuh nuh par-leh pa frahⁿ-SEH', ['texte', 'lettre']),
  sent(1009, 'Elle a répété plus lentement, en souriant.', 'She repeated it more slowly, with a smile.',
    '/ɛ.la ʁe.pe.te ply lɑ̃t.mɑ̃ ɑ̃ su.ʁi.jɑ̃/', 'eh-la ray-pay-TAY | plü lahⁿt-MAHⁿ | ahⁿ soo-ree-YAHⁿ', ['scene', 'lettre']),
  sent(1010, 'Son accent ne m’empêche pas de la comprendre.', 'Her accent doesn’t stop me understanding her.',
    '/sɔ̃.nak.sɑ̃ nə mɑ̃.pɛʃ pa də la kɔ̃.pʁɑ̃dʁ/', 'sohⁿ-nak-SAHⁿ | nuh mahⁿ-pesh pa duh la kohⁿ-PRAHⁿDR', ['attitude']),
  sent(1011, 'Je ne commente pas l’accent des gens.', 'I don’t comment on people’s accents.',
    '/ʒə nə kɔ.mɑ̃t pa lak.sɑ̃ de ʒɑ̃/', 'zhuh nuh ko-mahⁿt pa lak-sahⁿ day ZHAHⁿ', ['attitude']),
  sent(1012, 'Je reste en français, et je demande de l’aide.', 'I stay in French, and I ask for help.',
    '/ʒə ʁɛst ɑ̃ fʁɑ̃.sɛ e ʒə də.mɑ̃d də lɛd/', 'zhuh rest ahⁿ frahⁿ-SEH | ay zhuh duh-mahⁿd duh LED', ['strategie']),
];

/* ── ACT 2 · UNE LANGUE, PLUSIEURS CENTRES (.1013-.1029) ──────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1013, 'Le français n’a pas un seul centre, il en a plusieurs.', 'French does not have one centre: it has several.',
    '/lə fʁɑ̃.sɛ na pa œ̃ sœl sɑ̃tʁ il ɑ̃.na ply.zjœʁ/', 'luh frahⁿ-SEH | na pa uhⁿ suhl SAHⁿTR | eel ahⁿ-na plü-ZYUHR', ['centres']),
  sent(1014, 'Un journal de Dakar se lit sans peine à Genève.', 'A Dakar newspaper can be read without difficulty in Geneva.',
    '/œ̃ ʒuʁ.nal də da.kaʁ sə li sɑ̃ pɛn a ʒə.nɛv/', 'uhⁿ zhoor-NAL duh da-KAR | suh lee sahⁿ PENN | a zhuh-NEV', ['centres', 'texte']),
  sent(1015, 'À l’écrit, les francophones partagent presque tout.', 'In writing, French speakers share almost everything.',
    '/a le.kʁi le fʁɑ̃.kɔ.fɔn paʁ.taʒ pʁɛsk tu/', 'a lay-KREE | lay frahⁿ-ko-FONN | par-tazh presk TOO', ['centres'], FCVDR),
  sent(1016, 'À l’oral, chaque région a sa musique.', 'In speech, each region has its own music.',
    '/a lɔ.ʁal ʃak ʁe.ʒjɔ̃ a sa my.zik/', 'a lo-RAL | shak ray-ZHYOHⁿ a sa mü-ZEEK', ['centres'], FCVDR),
  phrase(1017, 'le français de référence', 'reference French: the common standard of dictionaries and exams',
    '/lə fʁɑ̃.sɛ də ʁe.fe.ʁɑ̃s/', 'luh frahⁿ-seh duh ray-fay-RAHⁿSS', ['reference']),
  phrase(1018, 'une langue pluricentrique', 'a pluricentric language: one with several centres',
    '/yn lɑ̃ɡ ply.ʁi.sɑ̃.tʁik/', 'ün lahⁿg plü-ree-sahⁿ-TREEK', ['centres']),
  phrase(1019, 'une variété de français', 'a variety of French',
    '/yn va.ʁje.te də fʁɑ̃.sɛ/', 'ün va-ryay-tay duh frahⁿ-SEH', ['centres']),
  phrase(1020, 'un régionalisme', 'a regionalism: a word or turn of phrase of one region',
    '/œ̃ ʁe.ʒjɔ.na.lism/', 'uhⁿ ray-zhyo-na-LEESM', ['centres']),
  sent(1021, 'Le français de référence est un repère utile, pas un accent meilleur que les autres.', 'Reference French is a useful landmark, not an accent better than the others.',
    '/lə fʁɑ̃.sɛ də ʁe.fe.ʁɑ̃s ɛ.tœ̃ ʁə.pɛʁ y.til pa.zœ̃.nak.sɑ̃ mɛ.jœʁ kə le.zotʁ/', 'luh frahⁿ-seh duh ray-fay-RAHⁿSS | eh-tuhⁿ ruh-pehr ü-TEEL | pa-zuhⁿ-nak-SAHⁿ | meh-yuhr kuh lay-ZOHTR', ['reference']),
  sent(1022, 'Personne ne parle exactement le français des manuels.', 'Nobody speaks exactly the French of textbooks.',
    '/pɛʁ.sɔn nə paʁl ɛɡ.zak.tə.mɑ̃ lə fʁɑ̃.sɛ de ma.nɥɛl/', 'pehr-SONN nuh PARL | eg-zak-tuh-MAHⁿ | luh frahⁿ-seh day ma-NWEL', ['reference', 'texte']),
  sent(1023, 'Au Québec, le dictionnaire Usito décrit le français standard d’ici.', 'In Québec, the Usito dictionary describes the local standard French.',
    '/o ke.bɛk lə dik.sjɔ.nɛʁ y.zi.to de.kʁi lə fʁɑ̃.sɛ stɑ̃.daʁ di.si/', 'oh kay-BEK | luh deek-syo-nehr ü-zee-TOH | day-kree luh frahⁿ-seh stahⁿ-dar dee-SEE', ['centres', 'fait']),
  sent(1024, 'La majorité des gens qui parlent français chaque jour vivent en Afrique.', 'Most people who speak French every day live in Africa.',
    '/la ma.ʒɔ.ʁi.te de ʒɑ̃ ki paʁl fʁɑ̃.sɛ ʃak ʒuʁ viv ɑ̃.na.fʁik/', 'la ma-zho-ree-TAY | day zhahⁿ kee parl frahⁿ-seh shak ZHOOR | veev ahⁿ-na-FREEK', ['centres', 'fait']),
  rule(1025, 'Une langue, plusieurs centres, un écrit commun.', 'One language, several centres, one shared written form.',
    '/yn lɑ̃ɡ ply.zjœʁ sɑ̃tʁ œ̃.ne.kʁi kɔ.mœ̃/', 'ün LAHⁿG | plü-zyuhr SAHⁿTR | uhⁿ-nay-kree ko-MUHⁿ',
    'Un ami affirme que le vrai français se parle à Paris. Que lui réponds-tu ?',
    'Le français a plusieurs centres : la France, le Québec, la Belgique, la Suisse, les pays d’Afrique. L’écrit est presque le même partout ; l’oral varie, et aucun accent n’est le seul vrai.', ['centres']),
  sent(1026, 'Le français de Paris est un accent parmi d’autres.', 'Paris French is one accent among others.',
    '/lə fʁɑ̃.sɛ də pa.ʁi ɛ.tœ̃.nak.sɑ̃ paʁ.mi dotʁ/', 'luh frahⁿ-seh duh pa-REE | eh-tuhⁿ-nak-SAHⁿ | par-mee DOHTR', ['centres'], FCVDR),
  sent(1027, 'Ce mot n’est pas une faute : c’est un régionalisme.', 'This word is not a mistake: it is a regionalism.',
    '/sə mo nɛ pa.zyn fot sɛ.tœ̃ ʁe.ʒjɔ.na.lism/', 'suh moh neh pa-zün FOHT | seh-tuhⁿ ray-zhyo-na-LEESM', ['lettre']),
  sent(1028, 'Dans ma lettre, je nomme la région de chaque mot.', 'In my letter, I name the region of each word.',
    '/dɑ̃ ma lɛtʁ ʒə nɔm la ʁe.ʒjɔ̃ də ʃak mo/', 'dahⁿ ma LETR | zhuh NOMM la ray-ZHYOHⁿ | duh shak MOH', ['lettre']),
  sent(1029, 'Ce mot s’emploie au Québec, pas en France.', 'This word is used in Québec, not in France.',
    '/sə mo sɑ̃.plwa o ke.bɛk pa.zɑ̃ fʁɑ̃s/', 'suh moh sahⁿ-PLWA | oh kay-BEK | pa-zahⁿ FRAHⁿSS', ['lettre']),
];

/* ── ACT 3 · LE QUÉBEC À L’OREILLE (.1030-.1047) ─────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1030, 'Tu dis que le petit arrive lundi midi.', 'You say the little one is arriving on Monday at noon.',
    '/ty di kə lə pə.ti.ta.ʁiv lœ̃.di mi.di/', 'tü DEE | kuh luh puh-tee-ta-REEV | luhⁿ-dee mee-DEE', ['sons', 'texte'], FCVDR),
  phrase(1031, 'l’affrication', 'affrication: in Québec, t and d before i and u sound like ts and dz',
    '/la.fʁi.ka.sjɔ̃/', 'la-free-ka-SYOHⁿ', ['sons'], RV),
  phrase(1032, 'le relâchement des voyelles', 'vowel laxing: i, u and ou opening slightly in some syllables (Québec)',
    '/lə ʁə.laʃ.mɑ̃ de vwa.jɛl/', 'luh ruh-lash-MAHⁿ | day vwa-YEL', ['sons'], RV),
  phrase(1033, 'une diphtongue', 'a diphthong: a vowel that glides into another',
    '/yn dif.tɔ̃ɡ/', 'ün deef-TOHⁿG', ['sons'], RV),
  sent(1034, 'Au Québec, le t et le d changent devant i et u.', 'In Québec, t and d change before i and u.',
    '/o ke.bɛk lə te e lə de ʃɑ̃ʒ də.vɑ̃ i e y/', 'oh kay-BEK | luh TAY ay luh DAY | shahⁿzh duh-vahⁿ EE ay Ü', ['sons']),
  sent(1035, 'On l’entend aussi à la radio : ce n’est pas un défaut.', 'You hear it on the radio too: it is not a flaw.',
    '/ɔ̃ lɑ̃.tɑ̃ o.si a la ʁa.djo sə nɛ pa.zœ̃ de.fo/', 'ohⁿ lahⁿ-tahⁿ oh-SEE a la ra-DYOH | suh neh pa-zuhⁿ day-FOH', ['sons', 'attitude']),
  sent(1036, 'La route est longue, mais on arrive vite.', 'The road is long, but you get there quickly.',
    '/la ʁu.tɛ lɔ̃ɡ mɛ ɔ̃.na.ʁiv vit/', 'la roo-teh LOHⁿG | meh ohⁿ-na-reev VEET', ['sons', 'texte']),
  sent(1037, 'Mon père prépare la fête.', 'My father is getting the party ready.',
    '/mɔ̃ pɛʁ pʁe.paʁ la fɛt/', 'mohⁿ PEHR | pray-par la FET', ['sons', 'texte']),
  sent(1038, 'Moi, je reste chez toi ce soir.', 'Me, I’m staying at your place tonight.',
    '/mwa ʒə ʁɛst ʃe twa sə swaʁ/', 'MWA | zhuh rest shay TWA | suh SWAR', ['sons', 'texte']),
  sent(1039, 'Une patte de chat, une pâte à pizza.', 'A cat’s paw, some pizza dough.',
    '/yn pat də ʃa yn pɑt a pid.za/', 'ün pat duh SHA | ün paht a peed-ZA', ['sons', 'texte'], RV),
  sent(1040, 'Ces sons disent d’où vient la personne, pas si elle parle bien ou mal.', 'These sounds say where the person comes from, not whether they speak well or badly.',
    '/se sɔ̃ diz du vjɛ̃ la pɛʁ.sɔn pa si ɛl paʁl bjɛ̃ u mal/', 'say SOHⁿ | deez doo vyehⁿ la pehr-SONN | pa see el parl BYEHⁿ oo MAL', ['attitude']),
  rule(1041, 'Un autre son, le même mot : écoute le sens.', 'A different sound, the same word: listen for the meaning.',
    '/œ̃.notʁ sɔ̃ lə mɛm mo e.kut lə sɑ̃s/', 'uhⁿ-nohtr SOHⁿ | luh mem MOH | ay-koot luh SAHⁿSS',
    'Ta collègue de Montréal dit « tsu » là où tu attends « tu ». Que fais-tu ?',
    'Tu reconnais le mot tu, prononcé à la québécoise. Rien à corriger : c’est la règle de sa variété, et le sens ne change pas.', ['sons']),
  sent(1042, 'Le joual est une variété populaire de Montréal, pas tout le français du Québec.', 'Joual is a popular Montréal variety, not the whole of Québec French.',
    '/lə ʒwal ɛ.tyn va.ʁje.te pɔ.py.lɛʁ də mɔ̃.ʁe.al pa tu lə fʁɑ̃.sɛ dy ke.bɛk/', 'luh ZHWAL | eh-tün va-ryay-tay po-pü-LEHR duh mohⁿ-ray-AL | pa too luh frahⁿ-seh dü kay-BEK', ['sons', 'fait']),
  sent(1043, 'À Radio-Canada, les journalistes parlent le français standard du Québec.', 'At Radio-Canada, journalists speak the standard French of Québec.',
    '/a ʁa.djo.ka.na.da le ʒuʁ.na.list paʁl lə fʁɑ̃.sɛ stɑ̃.daʁ dy ke.bɛk/', 'a ra-dyoh-ka-na-DA | lay zhoor-na-LEEST | parl luh frahⁿ-seh stahⁿ-dar dü kay-BEK', ['sons', 'fait']),
  sent(1044, 'Je reconnais l’accent, et je ne l’imite pas.', 'I recognise the accent, and I don’t imitate it.',
    '/ʒə ʁə.kɔ.nɛ lak.sɑ̃ e ʒə nə li.mit pa/', 'zhuh ruh-ko-neh lak-SAHⁿ | ay zhuh nuh lee-meet PA', ['attitude']),
  sent(1045, 'Pas besoin de parler comme eux pour les comprendre.', 'No need to speak like them to understand them.',
    '/pa bə.zwɛ̃ də paʁ.le kɔ.mø puʁ le kɔ̃.pʁɑ̃dʁ/', 'pa buh-ZWEHⁿ | duh par-lay ko-MEU | poor lay kohⁿ-PRAHⁿDR', ['attitude']),
  sent(1046, 'Dans ma lettre, je décris un son sans me moquer.', 'In my letter, I describe a sound without making fun of it.',
    '/dɑ̃ ma lɛtʁ ʒə de.kʁi œ̃ sɔ̃ sɑ̃ mə mɔ.ke/', 'dahⁿ ma LETR | zhuh day-kree uhⁿ SOHⁿ | sahⁿ muh mo-KAY', ['lettre']),
  sent(1047, 'Ce n’est pas du vieux français, c’est du français d’aujourd’hui.', 'It is not old French: it is today’s French.',
    '/sə nɛ pa dy vjø fʁɑ̃.sɛ sɛ dy fʁɑ̃.sɛ do.ʒuʁ.dɥi/', 'suh neh pa dü vyeu frahⁿ-SEH | seh dü frahⁿ-seh doh-zhoor-DWEE', ['attitude']),
];

/* ── ACT 4 · LE QUÉBEC, LES MOTS (.1048-.1066) ───────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1048, 'Au Québec, on déjeune le matin, on dîne à midi et on soupe le soir.', 'In Québec, you have déjeuner in the morning, dîner at noon and souper in the evening.',
    '/o ke.bɛk ɔ̃ de.ʒœn lə ma.tɛ̃ ɔ̃ din a mi.di e ɔ̃ sup lə swaʁ/', 'oh kay-BEK | ohⁿ day-zhuhn luh ma-TEHⁿ | ohⁿ deen a mee-DEE | ay ohⁿ soop luh SWAR', ['mots', 'repas'], FCVDR),
  reg(1049, 'phrase', 'des rôties', 'toast, on a breakfast menu (Québec)',
    '/de ʁo.ti/', 'day roh-TEE', ['mots', 'quebec']),
  reg(1050, 'phrase', 'un breuvage', 'a drink, on a menu (Québec)',
    '/œ̃ bʁœ.vaʒ/', 'uhⁿ bruh-VAZH', ['mots', 'quebec']),
  reg(1051, 'phrase', 'jaser', 'to chat (Québec)',
    '/ʒa.ze/', 'zha-ZAY', ['mots', 'quebec'], 'familier'),
  reg(1052, 'phrase', 'barrer la porte', 'to lock the door (Québec)',
    '/ba.ʁe la pɔʁt/', 'ba-ray la PORT', ['mots', 'quebec']),
  sent(1053, 'Au Québec, on répond souvent « bienvenue » à un merci.', 'In Québec, people often answer a thank-you with bienvenue (you’re welcome).',
    '/o ke.bɛk ɔ̃ ʁe.pɔ̃ su.vɑ̃ bjɛ̃v.ny a œ̃ mɛʁ.si/', 'oh kay-BEK | ohⁿ ray-pohⁿ soo-VAHⁿ | byehⁿv-NÜ | a uhⁿ mehr-SEE', ['mots', 'quebec']),
  reg(1054, 'sentence', 'Je passe au dépanneur acheter du lait.', 'I’m popping to the corner store for milk. (Québec)',
    '/ʒə pa.so de.pa.nœʁ aʃ.te dy lɛ/', 'zhuh pa-soh day-pa-NUHR | ash-tay dü LEH', ['mots', 'quebec']),
  reg(1055, 'sentence', 'Viens souper samedi, on va jaser.', 'Come for supper on Saturday, we’ll have a chat. (Québec)',
    '/vjɛ̃ su.pe sam.di ɔ̃ va ʒa.ze/', 'vyehⁿ soo-pay sam-DEE | ohⁿ va zha-ZAY', ['mots', 'quebec', 'repas'], 'familier'),
  reg(1056, 'sentence', 'Il est présentement en réunion.', 'He is in a meeting at the moment. (Québec, West Africa)',
    '/i.lɛ pʁe.zɑ̃t.mɑ̃ ɑ̃ ʁe.y.njɔ̃/', 'ee-leh pray-zahⁿt-MAHⁿ | ahⁿ ray-ü-NYOHⁿ', ['mots', 'quebec']),
  reg(1057, 'sentence', 'Mets ta tuque, il fait froid.', 'Put your hat on, it’s cold. (Québec)',
    '/mɛ ta tyk il fɛ fʁwa/', 'meh ta TÜK | eel feh FRWA', ['mots', 'quebec']),
  sent(1058, 'Écris-moi un courriel ce soir.', 'Send me an email tonight.',
    '/e.kʁi.mwa œ̃ ku.ʁjɛl sə swaʁ/', 'ay-kree-MWA | uhⁿ koo-ryel suh SWAR', ['mots']),
  sent(1059, 'Chez nous, le dîner, c’est le repas du midi.', 'Where we live, dîner is the midday meal.',
    '/ʃe nu lə di.ne sɛ lə ʁə.pa dy mi.di/', 'shay NOO | luh dee-NAY | seh luh ruh-pa dü mee-DEE', ['mots', 'repas']),
  sent(1060, 'Les sacres sont des jurons québécois, souvent tirés du vocabulaire religieux.', 'Sacres are Québec swear words, often taken from religious vocabulary.',
    '/le sakʁ sɔ̃ de ʒy.ʁɔ̃ ke.be.kwa su.vɑ̃ ti.ʁe dy vɔ.ka.by.lɛʁ ʁə.li.ʒjø/', 'lay SAKR | sohⁿ day zhü-rohⁿ kay-bay-KWA | soo-vahⁿ tee-ray dü vo-ka-bü-lehr ruh-lee-ZHYEU', ['mots', 'sacres']),
  sent(1061, 'Je reconnais un sacre au ton, et je ne le répète pas.', 'I recognise a sacre by its tone, and I don’t repeat it.',
    '/ʒə ʁə.kɔ.nɛ œ̃ sakʁ o tɔ̃ e ʒə nə lə ʁe.pɛt pa/', 'zhuh ruh-ko-neh uhⁿ SAKR oh TOHⁿ | ay zhuh nuh luh ray-pet PA', ['mots', 'sacres']),
  rule(1062, 'Un mot connu peut changer de sens d’une région à l’autre.', 'A familiar word can change meaning from one region to another.',
    '/œ̃ mo kɔ.ny pø ʃɑ̃.ʒe də sɑ̃s dyn ʁe.ʒjɔ̃ a lotʁ/', 'uhⁿ moh ko-NÜ | peu shahⁿ-zhay duh SAHⁿSS | dün ray-zhyohⁿ a LOHTR',
    'Ta collègue de Québec t’invite à dîner. À quelle heure arrives-tu ?',
    'Vers midi : au Québec, en Belgique et en Suisse, le dîner est le repas du midi, et le souper celui du soir.', ['mots', 'repas']),
  sent(1063, 'Dans ma lettre, j’écris « au Québec, on dit » avant le mot.', 'In my letter, I write « in Québec, people say » before the word.',
    '/dɑ̃ ma lɛtʁ ʒe.kʁi o ke.bɛk ɔ̃ di a.vɑ̃ lə mo/', 'dahⁿ ma LETR | zhay-KREE | oh kay-BEK ohⁿ DEE | a-vahⁿ luh MOH', ['lettre']),
  sent(1064, 'Sa blonde, c’est sa copine, pas la couleur de ses cheveux.', 'His blonde is his girlfriend, not the colour of her hair.',
    '/sa blɔ̃d sɛ sa kɔ.pin pa la ku.lœʁ də se ʃə.vø/', 'sa BLOHⁿD | seh sa ko-PEEN | pa la koo-luhr duh say shuh-VEU', ['mots', 'piege']),
  reg(1065, 'sentence', 'Si ça te tente, on va magasiner dimanche.', 'If you feel like it, we’ll go shopping on Sunday. (Québec)',
    '/si sa tə tɑ̃t ɔ̃ va ma.ɡa.zi.ne di.mɑ̃ʃ/', 'see sa tuh TAHⁿT | ohⁿ va ma-ga-zee-nay dee-MAHⁿSH', ['mots', 'quebec']),
  reg(1066, 'phrase', 'un casse-croûte', 'a snack bar, a small diner (Québec)',
    '/œ̃ kas.kʁut/', 'uhⁿ kass-KROOT', ['mots', 'quebec']),
];

/* ── ACT 5 · LA BELGIQUE ET LA SUISSE (.1067-.1088) ──────────────────────── */

export const ACT5_ROWS: Row[] = [
  reg(1067, 'phrase', 'septante', 'seventy (Belgium, Switzerland)',
    '/sɛp.tɑ̃t/', 'sep-TAHⁿT', ['nombres', 'belgique', 'suisse']),
  reg(1068, 'phrase', 'nonante', 'ninety (Belgium, Switzerland)',
    '/nɔ.nɑ̃t/', 'no-NAHⁿT', ['nombres', 'belgique', 'suisse']),
  reg(1069, 'phrase', 'huitante', 'eighty (Switzerland, notably Vaud and Valais)',
    '/ɥi.tɑ̃t/', 'wee-TAHⁿT', ['nombres', 'suisse']),
  reg(1070, 'phrase', 'à tantôt', 'see you later, later today (Belgium)',
    '/a tɑ̃.to/', 'a tahⁿ-TOH', ['mots', 'belgique']),
  reg(1071, 'phrase', 'un GSM', 'a mobile phone (Belgium)',
    '/œ̃ ʒe.ɛs.ɛm/', 'uhⁿ zhay-ess-EMM', ['mots', 'belgique']),
  reg(1072, 'phrase', 'un natel', 'a mobile phone (Switzerland)',
    '/œ̃ na.tɛl/', 'uhⁿ na-TEL', ['mots', 'suisse']),
  reg(1073, 'phrase', 'une drache', 'a downpour (Belgium)',
    '/yn dʁaʃ/', 'ün DRASH', ['mots', 'belgique']),
  reg(1074, 'phrase', 'un kot', 'a student room (Belgium)',
    '/œ̃ kɔt/', 'uhⁿ KOT', ['mots', 'belgique']),
  reg(1075, 'sentence', 'Ça fait septante-cinq francs, s’il vous plaît.', 'That’s seventy-five francs, please. (Switzerland)',
    '/sa fɛ sɛp.tɑ̃t.sɛ̃k fʁɑ̃ sil vu plɛ/', 'sa feh sep-tahⁿt-SEHⁿK FRAHⁿ | seel voo PLEH', ['nombres', 'suisse']),
  reg(1076, 'sentence', 'Il a nonante-deux ans et il fait encore son marché.', 'He is ninety-two and still does his own market shopping. (Belgium, Switzerland)',
    '/i.la nɔ.nɑ̃t.dø.zɑ̃ e il fɛ.tɑ̃.kɔʁ sɔ̃ maʁ.ʃe/', 'ee-la no-nahⁿt-deu-ZAHⁿ | ay eel feh-tahⁿ-kor sohⁿ mar-SHAY', ['nombres', 'belgique']),
  sent(1077, 'À Lausanne, on dit huitante ; à Genève, plutôt quatre-vingts.', 'In Lausanne people say huitante; in Geneva, rather quatre-vingts.',
    '/a lo.zan ɔ̃ di ɥi.tɑ̃t a ʒə.nɛv ply.to ka.tʁə.vɛ̃/', 'a loh-ZANN | ohⁿ dee wee-TAHⁿT | a zhuh-NEV | plü-toh ka-truh-VEHⁿ', ['nombres', 'suisse']),
  sent(1078, 'En Belgique, on dit septante et nonante, mais quatre-vingts.', 'In Belgium, people say septante and nonante, but quatre-vingts.',
    '/ɑ̃ bɛl.ʒik ɔ̃ di sɛp.tɑ̃t e nɔ.nɑ̃t mɛ ka.tʁə.vɛ̃/', 'ahⁿ bel-ZHEEK | ohⁿ dee sep-TAHⁿT ay no-NAHⁿT | meh ka-truh-VEHⁿ', ['nombres', 'belgique'], FCVDR),
  sent(1079, 'En Belgique, on dit « s’il vous plaît » en tendant quelque chose.', 'In Belgium, people say s’il vous plaît when handing something over.',
    '/ɑ̃ bɛl.ʒik ɔ̃ di sil vu plɛ ɑ̃ tɑ̃.dɑ̃ kɛl.kə ʃoz/', 'ahⁿ bel-ZHEEK | ohⁿ dee seel voo PLEH | ahⁿ tahⁿ-dahⁿ kel-kuh SHOHZ', ['mots', 'belgique']),
  reg(1080, 'sentence', 'Je ne sais pas venir ce soir, il drache.', 'I can’t come tonight, it’s pouring. (Belgium: savoir for pouvoir)',
    '/ʒə nə sɛ pa və.niʁ sə swaʁ il dʁaʃ/', 'zhuh nuh seh pa vuh-NEER suh SWAR | eel DRASH', ['mots', 'belgique']),
  reg(1081, 'sentence', 'Viens une fois ici, que je te montre.', 'Come over here a moment, let me show you. (Brussels, familiar)',
    '/vjɛ̃ yn fwa i.si kə ʒə tə mɔ̃tʁ/', 'vyehⁿ ün fwa ee-SEE | kuh zhuh tuh MOHⁿTR', ['mots', 'belgique'], 'familier'),
  sent(1082, 'En Belgique et en Suisse aussi, beaucoup de gens dînent à midi et soupent le soir.', 'In Belgium and Switzerland too, many people have dîner at noon and souper in the evening.',
    '/ɑ̃ bɛl.ʒik e ɑ̃ sɥis o.si bo.ku də ʒɑ̃ din a mi.di e sup lə swaʁ/', 'ahⁿ bel-ZHEEK | ay ahⁿ SWEESS oh-SEE | boh-koo duh ZHAHⁿ | deen a mee-DEE | ay soop luh SWAR', ['mots', 'repas']),
  reg(1083, 'sentence', 'À tantôt, je t’appelle sur ton GSM.', 'See you later, I’ll call you on your mobile. (Belgium)',
    '/a tɑ̃.to ʒə ta.pɛl syʁ tɔ̃ ʒe.ɛs.ɛm/', 'a tahⁿ-TOH | zhuh ta-PEL | sür tohⁿ zhay-ess-EMM', ['mots', 'belgique']),
  reg(1084, 'sentence', 'Je t’envoie l’adresse sur ton natel.', 'I’ll send the address to your mobile. (Switzerland)',
    '/ʒə tɑ̃.vwa la.dʁɛs syʁ tɔ̃ na.tɛl/', 'zhuh tahⁿ-VWA | la-DRESS | sür tohⁿ na-TEL', ['mots', 'suisse']),
  rule(1085, 'Septante, huitante, nonante : des nombres réguliers, pas des fautes.', 'Septante, huitante, nonante: regular numbers, not mistakes.',
    '/sɛp.tɑ̃t ɥi.tɑ̃t nɔ.nɑ̃t de nɔ̃bʁ ʁe.ɡy.lje pa de fot/', 'sep-TAHⁿT | wee-TAHⁿT | no-NAHⁿT | day nohⁿbr ray-gü-LYAY | pa day FOHT',
    'Au téléphone, une vendeuse de Lausanne te dit « septante-huit francs ». Tu as bien entendu ?',
    'Oui : 78 francs. En Belgique et en Suisse, on dit septante et nonante ; dans le canton de Vaud et en Valais, huitante. Ces formes sont régulières, comme trente, quarante ou cinquante.', ['nombres']),
  sent(1086, 'J’ai d’abord entendu septante, puis j’ai compris soixante-dix.', 'First I heard septante, then I understood seventy.',
    '/ʒe da.bɔʁ ɑ̃.tɑ̃.dy sɛp.tɑ̃t pɥi ʒe kɔ̃.pʁi swa.sɑ̃t.dis/', 'zhay da-BOR | ahⁿ-tahⁿ-dü sep-TAHⁿT | pwee zhay kohⁿ-pree swa-sahⁿt-DEESS', ['nombres', 'lettre']),
  reg(1087, 'sentence', 'Le kot de ma fille est à deux pas de l’université.', 'My daughter’s student room is a stone’s throw from the university. (Belgium)',
    '/lə kɔt də ma fij ɛ.ta dø pa də ly.ni.vɛʁ.si.te/', 'luh KOT duh ma FEEY | eh-ta deu pa duh lü-nee-vehr-see-TAY', ['mots', 'belgique']),
  sent(1088, 'Une drache, en Belgique, c’est une grosse averse.', 'A drache, in Belgium, is a heavy shower.',
    '/yn dʁaʃ ɑ̃ bɛl.ʒik sɛ.tyn ɡʁo.sa.vɛʁs/', 'ün DRASH | ahⁿ bel-ZHEEK | seh-tün groh-sa-VEHRSS', ['mots', 'belgique']),
];

/* ── ACT 6 · EN FRANCE AUSSI, DES ACCENTS (.1089-.1104) ──────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1089, 'Une petite table ronde, près de la fenêtre.', 'A small round table, near the window.',
    '/yn pə.tit tabl ʁɔ̃d pʁɛ də la fə.nɛtʁ/', 'ün puh-teet tabl ROHⁿD | preh duh la fuh-NETR', ['sons', 'midi', 'texte']),
  sent(1090, 'On a acheté du pain et du vin pour demain.', 'We bought bread and wine for tomorrow.',
    '/ɔ̃.na aʃ.te dy pɛ̃ e dy vɛ̃ puʁ də.mɛ̃/', 'ohⁿ-na ash-TAY | dü PEHⁿ ay dü VEHⁿ | poor duh-MEHⁿ', ['sons', 'midi', 'texte']),
  reg(1091, 'phrase', 'une chocolatine', 'a pain au chocolat (south-west of France)',
    '/yn ʃɔ.kɔ.la.tin/', 'ün sho-ko-la-TEEN', ['mots', 'midi']),
  phrase(1092, 'l’accent du Midi', 'the southern French accent',
    '/lak.sɑ̃ dy mi.di/', 'lak-sahⁿ dü mee-DEE', ['midi'], RV),
  phrase(1093, 'l’insécurité linguistique', 'linguistic insecurity: feeling that your way of speaking is worth less',
    '/lɛ̃.se.ky.ʁi.te lɛ̃.ɡɥis.tik/', 'lehⁿ-say-kü-ree-TAY | lehⁿ-gwees-TEEK', ['attitude']),
  sent(1094, 'L’accent de Paris s’entend partout à la télévision, alors on l’oublie.', 'The Paris accent is heard everywhere on television, so people forget it is one.',
    '/lak.sɑ̃ də pa.ʁi sɑ̃.tɑ̃ paʁ.tu a la te.le.vi.zjɔ̃ a.lɔʁ ɔ̃ lu.bli/', 'lak-sahⁿ duh pa-REE | sahⁿ-tahⁿ par-TOO a la tay-lay-vee-ZYOHⁿ | a-lor ohⁿ loo-BLEE', ['attitude']),
  sent(1095, 'On m’a conseillé de gommer mon accent pour l’entretien.', 'I was advised to erase my accent for the interview.',
    '/ɔ̃ ma kɔ̃.se.je də ɡɔ.me mɔ̃.nak.sɑ̃ puʁ lɑ̃.tʁə.tjɛ̃/', 'ohⁿ ma kohⁿ-say-YAY | duh go-may mohⁿ-nak-SAHⁿ | poor lahⁿ-truh-TYEHⁿ', ['attitude', 'texte']),
  sent(1096, 'Mon accent ne dit rien de mes compétences.', 'My accent says nothing about my skills.',
    '/mɔ̃.nak.sɑ̃ nə di ʁjɛ̃ də me kɔ̃.pe.tɑ̃s/', 'mohⁿ-nak-SAHⁿ | nuh dee RYEHⁿ | duh may kohⁿ-pay-TAHⁿSS', ['attitude'], FCVDR),
  sent(1097, 'Se moquer d’un accent, c’est se moquer d’une personne.', 'Mocking an accent is mocking a person.',
    '/sə mɔ.ke dœ̃.nak.sɑ̃ sɛ sə mɔ.ke dyn pɛʁ.sɔn/', 'suh mo-kay duhⁿ-nak-SAHⁿ | seh suh mo-kay dün pehr-SONN', ['attitude']),
  sent(1098, 'Certains linguistes parlent de glottophobie : la discrimination par la façon de parler.', 'Some linguists speak of glottophobia: discrimination based on the way people speak.',
    '/sɛʁ.tɛ̃ lɛ̃.ɡɥist paʁl də ɡlɔ.tɔ.fɔ.bi la dis.kʁi.mi.na.sjɔ̃ paʁ la fa.sɔ̃ də paʁ.le/', 'sehr-tehⁿ lehⁿ-GWEEST | parl duh glo-to-fo-BEE | la dees-kree-mee-na-SYOHⁿ | par la fa-sohⁿ duh par-LAY', ['attitude', 'fait']),
  reg(1099, 'sentence', 'À Toulouse, on dit chocolatine ; à Paris, pain au chocolat.', 'In Toulouse people say chocolatine; in Paris, pain au chocolat.',
    '/a tu.luz ɔ̃ di ʃɔ.kɔ.la.tin a pa.ʁi pɛ̃.o.ʃɔ.kɔ.la/', 'a too-LOOZ | ohⁿ dee sho-ko-la-TEEN | a pa-REE | pehⁿ-oh-sho-ko-LA', ['mots', 'midi']),
  sent(1100, 'En Alsace, dans le Nord ou en Corse, l’oreille entend d’autres musiques.', 'In Alsace, in the North or in Corsica, the ear hears other music.',
    '/ɑ̃.nal.zas dɑ̃ lə nɔʁ u ɑ̃ kɔʁs lɔ.ʁɛj ɑ̃.tɑ̃ dotʁ my.zik/', 'ahⁿ-nal-ZASS | dahⁿ luh NOR | oo ahⁿ KORSS | lo-REY ahⁿ-TAHⁿ | dohtr mü-ZEEK', ['midi']),
  rule(1101, 'Un accent n’est pas une faute de prononciation.', 'An accent is not a pronunciation mistake.',
    '/œ̃.nak.sɑ̃ nɛ pa.zyn fot də pʁɔ.nɔ̃.sja.sjɔ̃/', 'uhⁿ-nak-SAHⁿ | neh pa-zün foht duh pro-nohⁿ-sya-SYOHⁿ',
    'Une collègue de Toulouse prononce le e de « petite ». Faut-il la corriger ?',
    'Non : c’est un trait de l’accent du Midi, régulier et partagé par toute une région. On corrige une faute ; un accent, on le respecte.', ['midi', 'attitude']),
  sent(1102, 'Je parle de la personne, pas de son accent.', 'I talk about the person, not about their accent.',
    '/ʒə paʁl də la pɛʁ.sɔn pa də sɔ̃.nak.sɑ̃/', 'zhuh parl duh la pehr-SONN | pa duh sohⁿ-nak-SAHⁿ', ['attitude', 'lettre']),
  sent(1103, 'Elle a gardé son accent, et elle en est fière.', 'She kept her accent, and she is proud of it.',
    '/ɛ.la ɡaʁ.de sɔ̃.nak.sɑ̃ e ɛ.lɑ̃.nɛ fjɛʁ/', 'eh-la gar-DAY sohⁿ-nak-SAHⁿ | ay eh-lahⁿ-neh FYEHR', ['attitude', 'texte']),
  sent(1104, 'On ne corrige pas l’accent de quelqu’un qui ne l’a pas demandé.', 'You don’t correct the accent of someone who didn’t ask you to.',
    '/ɔ̃ nə kɔ.ʁiʒ pa lak.sɑ̃ də kɛl.kœ̃ ki nə la pa də.mɑ̃.de/', 'ohⁿ nuh ko-reezh pa lak-SAHⁿ | duh kel-KUHⁿ | kee nuh la pa duh-mahⁿ-DAY', ['attitude']),
];

/* ── ACT 7 · LE FRANÇAIS EN AFRIQUE, PAYS PAR PAYS (.1105-.1126) ─────────── */

export const ACT7_ROWS: Row[] = [
  reg(1105, 'phrase', 'une essencerie', 'a petrol station (Senegal)',
    '/y.ne.sɑ̃s.ʁi/', 'ü-nay-sahⁿss-REE', ['mots', 'senegal']),
  reg(1106, 'phrase', 'une dibiterie', 'a grilled-meat eatery (Senegal)',
    '/yn di.bi.tʁi/', 'ün dee-bee-TREE', ['mots', 'senegal']),
  reg(1107, 'phrase', 'un maquis', 'a small open-air restaurant (Côte d’Ivoire)',
    '/œ̃ ma.ki/', 'uhⁿ ma-KEE', ['mots', 'cote-divoire']),
  reg(1108, 'phrase', 'un gbaka', 'a minibus (Abidjan)',
    '/œ̃ ɡba.ka/', 'uhⁿ gba-KA', ['mots', 'cote-divoire']),
  reg(1109, 'phrase', 'une tantie', 'an auntie: a respectful way to address an older woman (Côte d’Ivoire)',
    '/yn tɑ̃.ti/', 'ün tahⁿ-TEE', ['mots', 'cote-divoire']),
  reg(1110, 'phrase', 'On dit quoi ?', 'What’s up? How are things? (Cameroon, Côte d’Ivoire)',
    '/ɔ̃ di kwa/', 'ohⁿ dee KWA', ['mots', 'cameroun', 'cote-divoire'], 'familier'),
  reg(1111, 'sentence', 'Mon téléphone est gâté.', 'My phone is broken. (Côte d’Ivoire, Cameroon)',
    '/mɔ̃ te.le.fɔn ɛ ɡɑ.te/', 'mohⁿ tay-lay-FONN | eh gah-TAY', ['mots', 'cote-divoire', 'cameroun']),
  reg(1112, 'phrase', 'un deuxième bureau', 'a second, hidden partner (Central and West Africa)',
    '/œ̃ dø.zjɛm by.ʁo/', 'uhⁿ deu-zyem bü-ROH', ['mots', 'cameroun'], 'familier'),
  sent(1113, 'En Côte d’Ivoire, le français est la seule langue officielle.', 'In Côte d’Ivoire, French is the only official language.',
    '/ɑ̃ kot di.vwaʁ lə fʁɑ̃.sɛ ɛ la sœl lɑ̃ɡ ɔ.fi.sjɛl/', 'ahⁿ koht dee-VWAR | luh frahⁿ-SEH | eh la suhl lahⁿg o-fee-SYEL', ['fait', 'cote-divoire']),
  sent(1114, 'À Dakar, on passe souvent du wolof au français dans la même phrase.', 'In Dakar, people often switch from Wolof to French in the same sentence.',
    '/a da.kaʁ ɔ̃ pas su.vɑ̃ dy wɔ.lɔf o fʁɑ̃.sɛ dɑ̃ la mɛm fʁaz/', 'a da-KAR | ohⁿ pass soo-VAHⁿ | dü wo-LOF oh frahⁿ-SEH | dahⁿ la mem FRAHZ', ['fait', 'senegal']),
  sent(1115, 'Beaucoup de ces mots sont décrits dans des dictionnaires du français d’Afrique.', 'Many of these words are described in dictionaries of African French.',
    '/bo.ku də se mo sɔ̃ de.kʁi dɑ̃ de dik.sjɔ.nɛʁ dy fʁɑ̃.sɛ da.fʁik/', 'boh-koo duh say MOH | sohⁿ day-KREE | dahⁿ day deek-syo-NEHR | dü frahⁿ-seh da-FREEK', ['fait']),
  reg(1116, 'sentence', 'Le gbaka est plein, on prend un taxi.', 'The minibus is full, we’ll take a taxi. (Abidjan)',
    '/lə ɡba.ka ɛ plɛ̃ ɔ̃ pʁɑ̃.tœ̃ tak.si/', 'luh gba-KA eh PLEHⁿ | ohⁿ prahⁿ-tuhⁿ tak-SEE', ['mots', 'cote-divoire']),
  reg(1117, 'sentence', 'Bonjour tantie, vous allez bien ?', 'Good morning, auntie, are you well? (Côte d’Ivoire)',
    '/bɔ̃.ʒuʁ tɑ̃.ti vu.za.le bjɛ̃/', 'bohⁿ-zhoor tahⁿ-TEE | voo-za-lay BYEHⁿ', ['mots', 'cote-divoire']),
  reg(1118, 'sentence', 'Il faut passer à l’essencerie avant de partir.', 'We need to stop at the petrol station before we leave. (Senegal)',
    '/il fo pa.se a le.sɑ̃s.ʁi a.vɑ̃ də paʁ.tiʁ/', 'eel foh pa-SAY | a lay-sahⁿss-REE | a-vahⁿ duh par-TEER', ['mots', 'senegal']),
  reg(1119, 'sentence', 'On mange à la dibiterie du coin ce soir.', 'We’re eating at the grill on the corner tonight. (Senegal)',
    '/ɔ̃ mɑ̃ʒ a la di.bi.tʁi dy kwɛ̃ sə swaʁ/', 'ohⁿ mahⁿzh a la dee-bee-TREE | dü KWEHⁿ | suh SWAR', ['mots', 'senegal']),
  sent(1120, 'Essencerie vient d’essence, comme boulangerie vient de boulanger.', 'Essencerie comes from essence, just as boulangerie comes from boulanger.',
    '/e.sɑ̃s.ʁi vjɛ̃ de.sɑ̃s kɔm bu.lɑ̃ʒ.ʁi vjɛ̃ də bu.lɑ̃.ʒe/', 'ay-sahⁿss-REE | vyehⁿ day-SAHⁿSS | kom boo-lahⁿzh-REE | vyehⁿ duh boo-lahⁿ-ZHAY', ['mots', 'senegal']),
  sent(1121, 'Au Cameroun, « on dit quoi ? » veut dire « comment ça va ? ».', 'In Cameroon, on dit quoi means how are you.',
    '/o kam.ʁun ɔ̃ di kwa vø diʁ kɔ.mɑ̃ sa va/', 'oh kam-ROON | ohⁿ dee KWA | veu deer ko-mahⁿ sa VA', ['mots', 'cameroun']),
  rule(1122, 'Le français d’Afrique crée ses mots avec les règles du français.', 'African French makes its words with the rules of French.',
    '/lə fʁɑ̃.sɛ da.fʁik kʁe se mo a.vɛk le ʁɛɡl dy fʁɑ̃.sɛ/', 'luh frahⁿ-seh da-FREEK | kray say MOH | a-vek lay REGL dü frahⁿ-SEH',
    'Un collègue de Dakar parle d’une « essencerie ». Est-ce une faute ?',
    'Non : essence + -erie, comme boulangerie. C’est un mot du français du Sénégal, formé avec les règles du français et compris de tous là-bas.', ['mots']),
  reg(1123, 'sentence', 'Présentement, il est au maquis avec ses collègues.', 'Right now, he is at the open-air restaurant with his colleagues. (Côte d’Ivoire)',
    '/pʁe.zɑ̃t.mɑ̃ i.lɛ.to ma.ki a.vɛk se kɔ.lɛɡ/', 'pray-zahⁿt-MAHⁿ | ee-leh-toh ma-KEE | a-vek say ko-LEG', ['mots', 'cote-divoire']),
  sent(1124, 'Dans ma lettre, je nomme le pays, pas seulement « l’Afrique ».', 'In my letter, I name the country, not just « Africa ».',
    '/dɑ̃ ma lɛtʁ ʒə nɔm lə pe.i pa sœl.mɑ̃ la.fʁik/', 'dahⁿ ma LETR | zhuh NOMM luh pay-EE | pa suhl-mahⁿ la-FREEK', ['lettre']),
  sent(1125, 'L’Afrique n’est pas un pays : chaque pays a ses mots.', 'Africa is not a country: each country has its own words.',
    '/la.fʁik nɛ pa.zœ̃ pe.i ʃak pe.i a se mo/', 'la-FREEK | neh pa-zuhⁿ pay-EE | shak pay-EE a say MOH', ['attitude'], FCVDR),
  reg(1126, 'sentence', 'Le frigo est gâté depuis hier.', 'The fridge has been broken since yesterday. (Côte d’Ivoire, Cameroon)',
    '/lə fʁi.ɡo ɛ ɡɑ.te də.pɥi.zjɛʁ/', 'luh free-GOH eh gah-TAY | duh-pwee-ZYEHR', ['mots', 'cote-divoire']),
];

/* ── ACT 8 · LES LANGUES EN CONTACT (.1127-.1146) ────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1127, 'Le créole n’est pas du français mal parlé : c’est une autre langue.', 'Creole is not badly spoken French: it is another language.',
    '/lə kʁe.ɔl nɛ pa dy fʁɑ̃.sɛ mal paʁ.le sɛ.ty.notʁ lɑ̃ɡ/', 'luh kray-OL | neh pa dü frahⁿ-seh mal par-LAY | seh-tü-nohtr LAHⁿG', ['creole'], FCVDR),
  reg(1128, 'phrase', 'Sa ou fè ?', 'How are you? (Creole of Martinique and Guadeloupe, not French)',
    '/sa u fɛ/', 'sa oo FEH', ['creole', 'antilles']),
  reg(1129, 'phrase', 'Koman i lé ?', 'How are you? (Réunion Creole, not French)',
    '/kɔ.mɑ̃ i le/', 'ko-mahⁿ ee LAY', ['creole', 'reunion']),
  sent(1130, 'En Haïti, le créole et le français sont les deux langues officielles.', 'In Haiti, Creole and French are the two official languages.',
    '/ɑ̃ a.i.ti lə kʁe.ɔl e lə fʁɑ̃.sɛ sɔ̃ le dø lɑ̃ɡ ɔ.fi.sjɛl/', 'ahⁿ a-ee-TEE | luh kray-OL ay luh frahⁿ-SEH | sohⁿ lay deu lahⁿg o-fee-SYEL', ['creole', 'fait']),
  sent(1131, 'Ma grand-mère me parle créole, et je lui réponds en français.', 'My grandmother speaks Creole to me, and I answer her in French.',
    '/ma ɡʁɑ̃.mɛʁ mə paʁl kʁe.ɔl e ʒə lɥi ʁe.pɔ̃ ɑ̃ fʁɑ̃.sɛ/', 'ma grahⁿ-MEHR | muh parl kray-OL | ay zhuh lwee ray-POHⁿ | ahⁿ frahⁿ-SEH', ['creole', 'texte']),
  reg(1132, 'phrase', 'un cari', 'a spiced stew (La Réunion)',
    '/œ̃ ka.ʁi/', 'uhⁿ ka-REE', ['mots', 'reunion']),
  sent(1133, 'En Acadie, certains disent encore « je parlons » pour « nous parlons ».', 'In Acadia, some people still say je parlons for nous parlons.',
    '/ɑ̃.na.ka.di sɛʁ.tɛ̃ diz ɑ̃.kɔʁ ʒə paʁ.lɔ̃ puʁ nu paʁ.lɔ̃/', 'ahⁿ-na-ka-DEE | sehr-tehⁿ deez ahⁿ-KOR | zhuh par-LOHⁿ | poor noo par-LOHⁿ', ['acadie']),
  reg(1134, 'phrase', 'le chiac', 'chiac: a French-English contact variety (south-east New Brunswick)',
    '/lə ʃjak/', 'luh SHYAK', ['acadie']),
  sent(1135, 'Le chiac mêle le français et l’anglais, surtout dans la région de Moncton.', 'Chiac mixes French and English, especially around Moncton.',
    '/lə ʃjak mɛl lə fʁɑ̃.sɛ e lɑ̃.ɡlɛ syʁ.tu dɑ̃ la ʁe.ʒjɔ̃ də mɔ̃k.tɔn/', 'luh SHYAK | mel luh frahⁿ-SEH ay lahⁿ-GLEH | sür-too dahⁿ la ray-zhyohⁿ duh mohⁿk-TONN', ['acadie', 'fait']),
  reg(1136, 'phrase', 'kif-kif', 'the same, no difference (familiar, from Arabic)',
    '/kif.kif/', 'keef-KEEF', ['maghreb', 'emprunt'], 'familier'),
  reg(1137, 'phrase', 'un toubib', 'a doctor (familiar, from Arabic)',
    '/œ̃ tu.bib/', 'uhⁿ too-BEEB', ['maghreb', 'emprunt'], 'familier'),
  reg(1138, 'sentence', 'C’est le souk dans ta chambre !', 'Your room is a mess! (familiar, from Arabic souk, a market)',
    '/sɛ lə suk dɑ̃ ta ʃɑ̃bʁ/', 'seh luh SOOK | dahⁿ ta SHAHⁿBR', ['maghreb', 'emprunt'], 'familier'),
  sent(1139, 'Au Maghreb, le français vit à côté de l’arabe et du tamazight.', 'In the Maghreb, French lives alongside Arabic and Tamazight.',
    '/o maɡ.ʁɛb lə fʁɑ̃.sɛ vi.ta ko.te də la.ʁab e dy ta.ma.ziɡt/', 'oh mag-REB | luh frahⁿ-SEH | vee-ta koh-TAY | duh la-RAB | ay dü ta-ma-ZEEGT', ['maghreb', 'fait']),
  reg(1140, 'sentence', 'Pour moi, c’est kif-kif : prends celui que tu veux.', 'For me it’s all the same: take whichever you want. (familiar)',
    '/puʁ mwa sɛ kif.kif pʁɑ̃ sə.lɥi kə ty vø/', 'poor MWA | seh keef-KEEF | prahⁿ suh-lwee kuh tü VEU', ['maghreb', 'emprunt'], 'familier'),
  reg(1141, 'sentence', 'Il faut appeler le toubib, elle a de la fièvre.', 'We need to call the doctor, she has a temperature. (familiar)',
    '/il fo a.ple lə tu.bib ɛ.la də la fjɛvʁ/', 'eel foh a-play luh too-BEEB | eh-la duh la FYEVR', ['maghreb', 'emprunt'], 'familier'),
  rule(1142, 'Quand deux langues se rencontrent, chacune prête des mots à l’autre.', 'When two languages meet, each lends words to the other.',
    '/kɑ̃ dø lɑ̃ɡ sə ʁɑ̃.kɔ̃tʁ ʃa.kyn pʁɛt de mo a lotʁ/', 'kahⁿ deu LAHⁿG | suh rahⁿ-KOHⁿTR | sha-kün pret day MOH | a LOHTR',
    'Un ami croit que « toubib » est un mot inventé, sans origine. Que lui apprends-tu ?',
    'Toubib vient de l’arabe, comme kif-kif et souk. Des langues en contact échangent des mots ; le créole, lui, est né d’un contact bien plus profond, et c’est une langue à part entière.', ['creole', 'emprunt']),
  sent(1143, 'Dans ma lettre, je distingue le créole du français.', 'In my letter, I tell Creole apart from French.',
    '/dɑ̃ ma lɛtʁ ʒə dis.tɛ̃ɡ lə kʁe.ɔl dy fʁɑ̃.sɛ/', 'dahⁿ ma LETR | zhuh dees-TEHⁿG | luh kray-OL dü frahⁿ-SEH', ['lettre']),
  sent(1144, 'Beaucoup de Martiniquais passent du créole au français selon la situation.', 'Many Martinicans move between Creole and French depending on the situation.',
    '/bo.ku də maʁ.ti.ni.kɛ pas dy kʁe.ɔl o fʁɑ̃.sɛ sə.lɔ̃ la si.tɥa.sjɔ̃/', 'boh-koo duh mar-tee-nee-KEH | pass dü kray-OL oh frahⁿ-SEH | suh-lohⁿ la see-twa-SYOHⁿ', ['creole', 'fait']),
  sent(1145, 'Ce mot vient de l’arabe, mais on l’entend partout en France.', 'This word comes from Arabic, but you hear it all over France.',
    '/sə mo vjɛ̃ də la.ʁab mɛ ɔ̃ lɑ̃.tɑ̃ paʁ.tu ɑ̃ fʁɑ̃s/', 'suh moh vyehⁿ duh la-RAB | meh ohⁿ lahⁿ-tahⁿ par-TOO | ahⁿ FRAHⁿSS', ['emprunt']),
  sent(1146, 'Le chiac est une façon de parler, pas une faute.', 'Chiac is a way of speaking, not a mistake.',
    '/lə ʃjak ɛ.tyn fa.sɔ̃ də paʁ.le pa.zyn fot/', 'luh SHYAK | eh-tün fa-sohⁿ duh par-LAY | pa-zün FOHT', ['acadie', 'attitude']),
];

/* ── ACT 9 · QUAND TU NE COMPRENDS PAS (.1147-.1166) ─────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1147, 'Pourriez-vous répéter la fin de la phrase ?', 'Could you repeat the end of the sentence?',
    '/pu.ʁje.vu ʁe.pe.te la fɛ̃ də la fʁaz/', 'poo-ryay-VOO | ray-pay-TAY | la fehⁿ duh la FRAHZ', ['strategie'], FCVDR),
  sent(1148, 'Excusez-moi, que veut dire « barrer », ici ?', 'Excuse me, what does barrer mean here?',
    '/ɛks.ky.ze.mwa kə vø diʁ ba.ʁe i.si/', 'eks-kü-zay-MWA | kuh veu deer ba-RAY | ee-SEE', ['strategie']),
  sent(1149, 'Si j’ai bien compris, vous passez samedi matin.', 'If I’ve understood correctly, you’re coming by on Saturday morning.',
    '/si ʒe bjɛ̃ kɔ̃.pʁi vu pa.se sam.di ma.tɛ̃/', 'see zhay byehⁿ kohⁿ-PREE | voo pa-say sam-dee ma-TEHⁿ', ['strategie'], FCVDR),
  sent(1150, 'Je connais le mot, mais pas ce sens-là.', 'I know the word, but not that meaning.',
    '/ʒə kɔ.nɛ lə mo mɛ pa sə sɑ̃s.la/', 'zhuh ko-neh luh MOH | meh pa suh sahⁿss-LA', ['strategie']),
  sent(1151, 'Je devine le sens grâce au contexte.', 'I guess the meaning from the context.',
    '/ʒə də.vin lə sɑ̃s ɡʁa.so kɔ̃.tɛkst/', 'zhuh duh-veen luh SAHⁿSS | gra-soh kohⁿ-TEKST', ['strategie']),
  sent(1152, 'Je repère d’abord les mots-clés.', 'I pick out the key words first.',
    '/ʒə ʁə.pɛʁ da.bɔʁ le mo.kle/', 'zhuh ruh-pehr da-BOR | lay moh-KLAY', ['strategie']),
  sent(1153, 'Je reste en français, même quand c’est difficile.', 'I stay in French, even when it’s hard.',
    '/ʒə ʁɛst ɑ̃ fʁɑ̃.sɛ mɛm kɑ̃ sɛ di.fi.sil/', 'zhuh rest ahⁿ frahⁿ-SEH | mem kahⁿ seh dee-fee-SEEL', ['strategie']),
  sent(1154, 'Excusez-moi, je ne suis pas d’ici : vous pouvez parler un peu plus lentement ?', 'Excuse me, I’m not from here: could you speak a little more slowly?',
    '/ɛks.ky.ze.mwa ʒə nə sɥi pa di.si vu pu.ve paʁ.le œ̃ pø ply lɑ̃t.mɑ̃/', 'eks-kü-zay-MWA | zhuh nuh swee pa dee-SEE | voo poo-vay par-LAY | uhⁿ peu plü lahⁿt-MAHⁿ', ['strategie']),
  sent(1155, 'Je pose une question sur le mot, pas sur l’accent.', 'I ask about the word, not about the accent.',
    '/ʒə po.zyn kɛs.tjɔ̃ syʁ lə mo pa syʁ lak.sɑ̃/', 'zhuh poh-zün kes-TYOHⁿ | sür luh MOH | pa sür lak-SAHⁿ', ['strategie', 'attitude']),
  sent(1156, 'Vous voulez dire que le garage est fermé aujourd’hui ?', 'You mean the garage is closed today?',
    '/vu vu.le diʁ kə lə ɡa.ʁaʒ ɛ fɛʁ.me o.ʒuʁ.dɥi/', 'voo voo-lay DEER | kuh luh ga-RAZH | eh fehr-may oh-zhoor-DWEE', ['strategie', 'texte']),
  sent(1157, 'Merci de m’avoir expliqué.', 'Thank you for explaining.',
    '/mɛʁ.si də ma.vwaʁ ɛks.pli.ke/', 'mehr-SEE | duh ma-vwar eks-plee-KAY', ['strategie']),
  phrase(1158, 'faire répéter', 'to ask someone to repeat',
    '/fɛʁ ʁe.pe.te/', 'fehr ray-pay-TAY', ['strategie']),
  phrase(1159, 'reformuler pour vérifier', 'to rephrase in order to check',
    '/ʁə.fɔʁ.my.le puʁ ve.ʁi.fje/', 'ruh-for-mü-LAY | poor vay-ree-FYAY', ['strategie']),
  rule(1160, 'Demande le sens, pas un autre accent.', 'Ask for the meaning, not for a different accent.',
    '/də.mɑ̃d lə sɑ̃s pa.zœ̃.no.tʁak.sɑ̃/', 'duh-mahⁿd luh SAHⁿSS | pa-zuhⁿ-noh-trak-SAHⁿ',
    'Un garagiste de Lévis te parle vite, avec des mots que tu ne connais pas. Que fais-tu ?',
    'Tu restes en français. Tu demandes la partie qui manque (« la fin de la phrase »), le sens d’un mot, puis tu reformules pour vérifier. Tu ne lui demandes jamais de « parler normalement ».', ['strategie']),
  sent(1161, 'Je laisse passer les premières minutes : l’oreille s’habitue.', 'I let the first few minutes go by: the ear gets used to it.',
    '/ʒə lɛs pa.se le pʁə.mjɛʁ mi.nyt lɔ.ʁɛj sa.bi.ty/', 'zhuh less pa-SAY | lay pruh-myehr mee-NÜT | lo-REY sa-bee-TÜ', ['strategie']),
  sent(1162, 'Dans ma lettre, je raconte ce que j’ai fait pour comprendre.', 'In my letter, I tell what I did to understand.',
    '/dɑ̃ ma lɛtʁ ʒə ʁa.kɔ̃t sə kə ʒe fɛ puʁ kɔ̃.pʁɑ̃dʁ/', 'dahⁿ ma LETR | zhuh ra-kohⁿt suh kuh zhay FEH | poor kohⁿ-PRAHⁿDR', ['lettre']),
  sent(1163, 'La prochaine fois, je demanderai tout de suite.', 'Next time, I’ll ask straight away.',
    '/la pʁɔ.ʃɛn fwa ʒə də.mɑ̃.də.ʁe tut.sɥit/', 'la pro-SHENN FWA | zhuh duh-mahⁿ-duh-RAY | toot-SWEET', ['lettre']),
  sent(1164, 'Si j’avais osé demander, j’aurais tout compris plus vite.', 'If I had dared to ask, I would have understood everything faster.',
    '/si ʒa.vɛ.zo.ze də.mɑ̃.de ʒo.ʁɛ tu kɔ̃.pʁi ply vit/', 'see zha-veh-zoh-ZAY duh-mahⁿ-DAY | zho-reh too kohⁿ-pree plü VEET', ['lettre']),
  sent(1165, 'Au lieu de passer à l’anglais, j’ai demandé ce que voulait dire le mot.', 'Instead of switching to English, I asked what the word meant.',
    '/o ljø də pa.se a lɑ̃.ɡlɛ ʒe də.mɑ̃.de sə kə vu.lɛ diʁ lə mo/', 'oh lyeu duh pa-say a lahⁿ-GLEH | zhay duh-mahⁿ-DAY | suh kuh voo-leh deer luh MOH', ['lettre', 'strategie']),
  sent(1166, 'Pardon, vous avez dit dîner ou souper ?', 'Sorry, did you say lunch or supper?',
    '/paʁ.dɔ̃ vu.za.ve di di.ne u su.pe/', 'par-DOHⁿ | voo-za-vay DEE | dee-NAY oo soo-PAY', ['strategie'], FCVDR),
];

/* ── ACT 10 · RESPECT, INSÉCURITÉ, INSTITUTIONS (.1167-.1182) ────────────── */

export const ACT10_ROWS: Row[] = [
  phrase(1167, 'l’Office québécois de la langue française', 'the Office québécois de la langue française (OQLF), Québec’s language agency',
    '/lɔ.fis ke.be.kwa də la lɑ̃ɡ fʁɑ̃.sɛz/', 'lo-FEESS kay-bay-KWA | duh la lahⁿg frahⁿ-SEZ', ['institutions'], RV),
  sent(1168, 'L’Office québécois de la langue française veille à l’application de la Charte de la langue française.', 'The Office québécois de la langue française sees to the application of the Charter of the French Language.',
    '/lɔ.fis ke.be.kwa də la lɑ̃ɡ fʁɑ̃.sɛz vɛj a la.pli.ka.sjɔ̃ də la ʃaʁt də la lɑ̃ɡ fʁɑ̃.sɛz/', 'lo-feess kay-bay-kwa duh la lahⁿg frahⁿ-SEZ | vey a la-plee-ka-SYOHⁿ | duh la shart duh la lahⁿg frahⁿ-SEZ', ['institutions', 'fait']),
  sent(1169, 'L’OQLF a proposé des mots comme courriel et clavardage.', 'The OQLF proposed words such as courriel (email) and clavardage (online chat).',
    '/lo.ky.ɛl.ɛf a pʁɔ.po.ze de mo kɔm ku.ʁjɛl e kla.vaʁ.daʒ/', 'loh-kü-el-EF | a pro-poh-ZAY | day moh kom koo-RYEL | ay kla-var-DAZH', ['institutions', 'fait']),
  sent(1170, 'En France, une délégation du ministère de la Culture coordonne la politique de la langue.', 'In France, a delegation within the Ministry of Culture coordinates language policy.',
    '/ɑ̃ fʁɑ̃s yn de.le.ɡa.sjɔ̃ dy mi.nis.tɛʁ də la kyl.tyʁ kɔ.ɔʁ.dɔn la pɔ.li.tik də la lɑ̃ɡ/', 'ahⁿ FRAHⁿSS | ün day-lay-ga-SYOHⁿ | dü mee-nees-tehr duh la kül-TÜR | ko-or-DONN | la po-lee-teek duh la LAHⁿG', ['institutions', 'fait']),
  sent(1171, 'L’Académie française rédige un dictionnaire, mais elle ne fait pas la loi sur l’usage.', 'The Académie française writes a dictionary, but it does not lay down the law on usage.',
    '/la.ka.de.mi fʁɑ̃.sɛz ʁe.di.ʒœ̃ dik.sjɔ.nɛʁ mɛ ɛl nə fɛ pa la lwa syʁ ly.zaʒ/', 'la-ka-day-MEE frahⁿ-SEZ | ray-dee-zhuhⁿ deek-syo-NEHR | meh el nuh feh pa la LWA | sür lü-ZAZH', ['institutions', 'fait']),
  phrase(1172, 'la Délégation générale à la langue française et aux langues de France', 'France’s language policy delegation (DGLFLF), within the Ministry of Culture',
    '/la de.le.ɡa.sjɔ̃ ʒe.ne.ʁal a la lɑ̃ɡ fʁɑ̃.sɛz e o lɑ̃ɡ də fʁɑ̃s/', 'la day-lay-ga-SYOHⁿ zhay-nay-RAL | a la lahⁿg frahⁿ-SEZ | ay oh lahⁿg duh FRAHⁿSS', ['institutions'], RV),
  sent(1173, 'Une institution conseille ; l’usage, lui, appartient à ceux qui parlent.', 'An institution advises; usage belongs to the people who speak.',
    '/y.nɛ̃s.ti.ty.sjɔ̃ kɔ̃.sɛj ly.zaʒ lɥi a.paʁ.tjɛ̃ a sø ki paʁl/', 'ü-nehⁿs-tee-tü-SYOHⁿ kohⁿ-SEY | lü-ZAZH LWEE | a-par-tyehⁿ a seu kee PARL', ['institutions']),
  sent(1174, 'Longtemps, beaucoup de Belges et de Québécois ont cru que leur français valait moins.', 'For a long time, many Belgians and Quebecers believed their French was worth less.',
    '/lɔ̃.tɑ̃ bo.ku də bɛlʒ e də ke.be.kwa ɔ̃ kʁy kə lœʁ fʁɑ̃.sɛ va.lɛ mwɛ̃/', 'lohⁿ-TAHⁿ | boh-koo duh BELZH ay duh kay-bay-KWA | ohⁿ krü kuh luhr frahⁿ-SEH | va-leh MWEHⁿ', ['attitude', 'texte']),
  sent(1175, 'L’insécurité linguistique fait parler moins, et parfois se taire.', 'Linguistic insecurity makes people speak less, and sometimes fall silent.',
    '/lɛ̃.se.ky.ʁi.te lɛ̃.ɡɥis.tik fɛ paʁ.le mwɛ̃ e paʁ.fwa sə tɛʁ/', 'lehⁿ-say-kü-ree-tay lehⁿ-gwees-TEEK | feh par-lay MWEHⁿ | ay par-fwa suh TEHR', ['attitude']),
  sent(1176, 'Respecter un accent, c’est écouter ce que la personne dit.', 'Respecting an accent means listening to what the person says.',
    '/ʁɛs.pɛk.te œ̃.nak.sɑ̃ sɛ.te.ku.te sə kə la pɛʁ.sɔn di/', 'res-pek-TAY uhⁿ-nak-SAHⁿ | seh-tay-koo-TAY | suh kuh la pehr-sonn DEE', ['attitude'], FCVDR),
  rule(1177, 'Les institutions conseillent ; elles ne classent pas les accents.', 'Institutions advise; they do not rank accents.',
    '/le.zɛ̃s.ti.ty.sjɔ̃ kɔ̃.sɛj ɛl nə klas pa le.zak.sɑ̃/', 'lay-zehⁿs-tee-tü-SYOHⁿ kohⁿ-SEY | el nuh klass pa lay-zak-SAHⁿ',
    'On te dit que l’Académie française interdit de dire septante. Vrai ?',
    'Non. L’Académie rédige un dictionnaire et donne des avis ; elle ne fait pas la loi sur l’usage. Septante est un usage belge et suisse, décrit dans les dictionnaires.', ['institutions']),
  sent(1178, 'La loi Toubon impose le français dans la publicité et au travail, entre autres.', 'The loi Toubon requires French in advertising and at work, among other things.',
    '/la lwa tu.bɔ̃ ɛ̃.poz lə fʁɑ̃.sɛ dɑ̃ la py.bli.si.te e o tʁa.vaj ɑ̃.tʁə.zotʁ/', 'la lwa too-BOHⁿ | ehⁿ-poz luh frahⁿ-SEH | dahⁿ la pü-blee-see-TAY | ay oh tra-VAHY | ahⁿ-truh-ZOHTR', ['institutions', 'fait']),
  sent(1179, 'Dans ma lettre, je parle de respect, pas de bon ou de mauvais français.', 'In my letter, I talk about respect, not about good or bad French.',
    '/dɑ̃ ma lɛtʁ ʒə paʁl də ʁɛs.pɛ pa də bɔ̃ u də mo.vɛ fʁɑ̃.sɛ/', 'dahⁿ ma LETR | zhuh parl duh res-PEH | pa duh BOHⁿ | oo duh moh-veh frahⁿ-SEH', ['lettre']),
  sent(1180, 'L’OIF réunit des États et des gouvernements qui ont le français en partage.', 'The OIF brings together states and governments that share the French language.',
    '/lo.i.ɛf ʁe.y.ni de.ze.ta e de ɡu.vɛʁ.nə.mɑ̃ ki ɔ̃ lə fʁɑ̃.sɛ ɑ̃ paʁ.taʒ/', 'loh-ee-EF | ray-ü-NEE | day-zay-TA ay day goo-vehr-nuh-MAHⁿ | kee ohⁿ luh frahⁿ-SEH | ahⁿ par-TAZH', ['institutions', 'fait']),
  sent(1181, 'On peut aimer la langue soignée et respecter tous les accents.', 'You can love careful French and respect every accent.',
    '/ɔ̃ pø e.me la lɑ̃ɡ swa.ɲe e ʁɛs.pɛk.te tu le.zak.sɑ̃/', 'ohⁿ peu ay-MAY | la lahⁿg swa-NYAY | ay res-pek-TAY | too lay-zak-SAHⁿ', ['attitude', 'texte']),
  sent(1182, 'Une recommandation n’oblige pas les particuliers.', 'A recommendation does not bind private individuals.',
    '/yn ʁə.kɔ.mɑ̃.da.sjɔ̃ nɔ.bliʒ pa le paʁ.ti.ky.lje/', 'ün ruh-ko-mahⁿ-da-SYOHⁿ | no-bleezh pa lay par-tee-kü-LYAY', ['institutions']),
];

/* ── ACT 11 · TA LETTRE (.1183-.1192) ────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1183, 'Je t’écris pour te raconter une conversation que je n’ai pas comprise tout de suite.', 'I’m writing to tell you about a conversation I didn’t understand straight away.',
    '/ʒə te.kʁi puʁ tə ʁa.kɔ̃.te yn kɔ̃.vɛʁ.sa.sjɔ̃ kə ʒə ne pa kɔ̃.pʁiz tut.sɥit/', 'zhuh tay-KREE | poor tuh ra-kohⁿ-TAY | ün kohⁿ-vehr-sa-SYOHⁿ | kuh zhuh nay pa kohⁿ-PREEZ | toot-SWEET', ['lettre', 'tache'], FCVDR),
  sent(1184, 'Sur le moment, j’ai cru que c’était mon français qui n’allait pas.', 'At the time, I thought it was my French that was the problem.',
    '/syʁ lə mɔ.mɑ̃ ʒe kʁy kə se.tɛ mɔ̃ fʁɑ̃.sɛ ki na.lɛ pa/', 'sür luh mo-MAHⁿ | zhay KRÜ | kuh say-teh mohⁿ frahⁿ-SEH | kee na-leh PA', ['lettre', 'tache']),
  sent(1185, 'Ce que j’ai appris, c’est qu’il n’y a pas de mauvais accent.', 'What I learned is that there is no such thing as a bad accent.',
    '/sə kə ʒe a.pʁi sɛ kil nja pa də mo.vɛ.zak.sɑ̃/', 'suh kuh zhay a-PREE | seh keel nya pa duh moh-veh-zak-SAHⁿ', ['lettre', 'tache']),
  sent(1186, 'Aujourd’hui, je demanderais tout de suite le sens du mot.', 'Today, I would ask for the meaning of the word straight away.',
    '/o.ʒuʁ.dɥi ʒə də.mɑ̃.də.ʁɛ tut.sɥit lə sɑ̃s dy mo/', 'oh-zhoor-DWEE | zhuh duh-mahⁿ-duh-REH | toot-SWEET | luh sahⁿss dü MOH', ['lettre', 'tache']),
  sent(1187, 'À Liège, on m’a dit « à tantôt » à dix heures du matin.', 'In Liège, someone said à tantôt to me at ten in the morning.',
    '/a ljɛʒ ɔ̃ ma di a tɑ̃.to a di.zœʁ dy ma.tɛ̃/', 'a LYEZH | ohⁿ ma DEE | a tahⁿ-TOH | a dee-zuhr dü ma-TEHⁿ', ['lettre', 'texte']),
  sent(1188, 'J’ai compris qu’elle voulait dire « à tout à l’heure ».', 'I realised she meant « see you later ».',
    '/ʒe kɔ̃.pʁi kɛl vu.lɛ diʁ a tu.ta lœʁ/', 'zhay kohⁿ-PREE | kel voo-leh DEER | a too-ta LUHR', ['lettre', 'texte']),
  sent(1189, 'Si c’était à refaire, je ne passerais pas à l’anglais.', 'If I had to do it again, I wouldn’t switch to English.',
    '/si se.tɛ.ta ʁə.fɛʁ ʒə nə pas.ʁɛ pa a lɑ̃.ɡlɛ/', 'see say-teh-ta ruh-FEHR | zhuh nuh pass-reh PA | a lahⁿ-GLEH', ['lettre', 'tache']),
  sent(1190, 'En y repensant, cette conversation m’a beaucoup appris.', 'Looking back, that conversation taught me a lot.',
    '/ɑ̃.ni ʁə.pɑ̃.sɑ̃ sɛt kɔ̃.vɛʁ.sa.sjɔ̃ ma bo.ku a.pʁi/', 'ahⁿ-nee ruh-pahⁿ-SAHⁿ | set kohⁿ-vehr-sa-SYOHⁿ | ma boh-koo a-PREE', ['lettre', 'tache']),
  rule(1191, 'Pour raconter un malentendu : la scène, le mot, la solution, la leçon.', 'To tell a misunderstanding: the scene, the word, the solution, the lesson.',
    '/puʁ ʁa.kɔ̃.te œ̃ ma.lɑ̃.tɑ̃.dy la sɛn lə mo la sɔ.ly.sjɔ̃ la lə.sɔ̃/', 'poor ra-kohⁿ-TAY uhⁿ ma-lahⁿ-tahⁿ-DÜ | la SENN | luh MOH | la so-lü-SYOHⁿ | la luh-SOHⁿ',
    'Tu écris à une amie à propos d’un malentendu. Quel plan suis-tu ?',
    'La scène (où, avec qui), le mot ou le son qui t’a arrêté, avec sa région, ce que tu as fait pour comprendre, puis ce que tu feras la prochaine fois.', ['lettre', 'tache']),
  sent(1192, 'Le problème ne venait pas de son accent, mais d’un mot que je ne connaissais pas.', 'The problem didn’t come from her accent, but from a word I didn’t know.',
    '/lə pʁɔ.blɛm nə və.nɛ pa də sɔ̃.nak.sɑ̃ mɛ dœ̃ mo kə ʒə nə kɔ.nɛ.sɛ pa/', 'luh pro-BLEM nuh vuh-neh PA | duh sohⁿ-nak-SAHⁿ | meh duhⁿ MOH | kuh zhuh nuh ko-neh-seh PA', ['lettre', 'tache']),
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

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE TEXTS
 *
 *  The anchor readings (200 to 350 words, B2-BUILD-LOG « Reading at B2 »)
 *  and the « Dans un texte » paragraphs (60 to 120 words) that close acts 3
 *  to 10: a forum post, an email, a menu, text messages, a dialogue
 *  transcript, a column. ALL ORIGINAL, written for the lesson and labelled
 *  so on screen. Word counts are asserted by scratch/_b231-words.mts. Every
 *  dialogue uses guillemets or a speaker label, never a dash.
 * ══════════════════════════════════════════════════════════════════════════ */

export const ORIGINAL = 'Texte original écrit pour la leçon.';

/** Act 1: a newcomer's forum post, Montréal. */
export const TEXTE_HANNAH =
  `${ORIGINAL} Forum des nouveaux arrivants à Montréal. Sujet : trois mois ici, et enfin je comprends. Message de Hannah, arrivée de Manchester. J’ai appris le français pendant six ans en Angleterre, avec des manuels faits en France, et j’avais réussi mon DELF B1. En arrivant à Montréal, en janvier, j’ai cru que je ne parlais pas français. Au dépanneur du coin, la caissière m’a posé une question dont je n’ai compris que le dernier mot : « sac ». Au bureau, mes collègues disaient « tsu » et « dzi » là où j’attendais « tu » et « dis ». Le premier vendredi, un collègue m’a invitée à dîner ; je suis arrivée chez lui à sept heures du soir, et toute la famille avait fini de manger depuis longtemps : ici, le dîner, c’est à midi, et le soir, on soupe. Pendant deux semaines, dès que je ne comprenais pas, je passais à l’anglais. Les gens me répondaient gentiment, mais je sentais que quelque chose se refermait. Un jour, la caissière du dépanneur m’a dit en riant : « Voyons, tu parles français, toi ! » Elle avait raison. Alors j’ai changé de méthode. Je dis : « Pardon, je n’ai pas bien saisi », et les gens répètent, presque toujours avec le sourire. Je demande ce que veut dire un mot que je ne connais pas. Je répète ce que j’ai compris pour vérifier. Et je ne dis plus jamais « votre accent ». Aujourd’hui, je comprends presque tout, et j’ai découvert une chose : ici, c’est moi qui ai un accent, et personne ne me le reproche.`;

/** Act 2: a magazine explainer on pluricentric French. */
export const TEXTE_CENTRES =
  `${ORIGINAL} Article de magazine. Qui parle le « vrai » français ? On entend souvent dire que le « vrai » français se parle à Paris, ou à Tours, et que le reste ne serait que des variantes plus ou moins réussies. Les linguistes voient les choses autrement. Pour eux, le français est une langue pluricentrique : il n’a pas un seul centre, il en a plusieurs. La France, le Québec, la Belgique et la Suisse ont chacun leurs habitudes, leurs mots et leurs accents, et le Québec a même son propre dictionnaire du français standard, Usito. Dans les pays d’Afrique où il est langue officielle, le français vit à côté de nombreuses autres langues, et il invente ses propres mots. Selon l’Organisation internationale de la Francophonie, la majorité des personnes qui parlent français tous les jours vivent aujourd’hui en Afrique. Faut-il en conclure que tout se vaut et que rien n’est commun ? Non. À l’écrit, les francophones partagent presque tout : l’orthographe, la grammaire, l’essentiel du vocabulaire. Un journal de Dakar se lit sans peine à Genève. C’est à l’oral que les différences s’entendent : la musique de la phrase, certaines voyelles, quelques centaines de mots du quotidien. Les manuels enseignent ce qu’on appelle le français de référence : une forme commune, proche du français soigné de France, celle des dictionnaires et des examens. C’est un repère utile. Mais personne ne le parle exactement, pas même à Paris, où l’on a aussi un accent. Le piège serait d’en faire une mesure de la valeur des gens. Un accent dit d’où l’on vient ; il ne dit rien de ce que l’on vaut.`;

/** Act 3: a radio column on the sounds of Québec French. */
export const TEXTE_CHRONIQUE =
  `${ORIGINAL} Transcription d’une chronique de radio, à Montréal : « L’oreille du lundi ». Chers auditeurs, cette semaine, la question d’une auditrice arrivée de Lyon : pourquoi entend-elle « tsu » et « dzi » quand ses collègues disent tu et dis ? Rassurez-la : personne ne se trompe. Au Québec, devant les voyelles i et u, le t et le d se prononcent avec un petit sifflement. « Tu dis que le petit arrive lundi midi » fait entendre cinq fois ce trait, qu’on appelle l’affrication. On l’entend chez tout le monde, à la maison comme au bulletin de nouvelles de Radio-Canada. Deuxième trait : dans certaines syllabes terminées par une consonne, les voyelles i, u et ou se relâchent. « Vite », « jupe » et « route » s’ouvrent un peu, et une oreille française croit parfois entendre une autre voyelle. Troisième trait, plus familier : dans une conversation détendue, certaines voyelles longues deviennent des diphtongues. « Père » ou « fête » peuvent alors glisser vers « paère » ou « faète ». Et chez certains locuteurs, surtout en famille, « moi » et « toi » deviennent « moé » et « toé ». Enfin, beaucoup de Québécois distinguent encore une patte de chat et une pâte à pizza, ce que bien des Parisiens ne font plus. Rien de tout cela n’est du « vieux français » ni du français mal prononcé : ce sont les règles d’une autre variété, aussi cohérente que celle de Paris. Et vous, chère auditrice, vous avez aussi un accent. À Montréal, c’est le vôtre qu’on remarque.`;

/** Act 3, « Dans un texte »: a forum question and answer. */
export const DANS_A3 =
  `${ORIGINAL} Forum de langue. Question : « Mon professeur de Montréal dit tsu au lieu de tu. Il a un défaut de prononciation ? » Réponse de Mathieu, à Québec : Pas du tout ! Chez nous, tout le monde fait ça devant i et u : tu, dire, petit, lundi. Même les lecteurs de nouvelles à la télévision. Ton professeur a l’accent de sa région, comme toi tu as le tien. Écoute-le quelques semaines, et tu ne l’entendras même plus. Par contre, ne l’imite pas pour lui faire plaisir : parle avec ta voix, il te comprendra très bien.`;

/** Act 4: an email from a future colleague in Québec City. */
export const TEXTE_JULIE =
  `${ORIGINAL} Courriel de Julie Tremblay, ta future collègue à Québec. Objet : ta première fin de semaine ici. Salut ! Contente que tu arrives lundi. Voici quelques conseils pour ta première semaine. Samedi, viens souper chez nous vers dix-huit heures : mon chum fait sa fameuse tourtière. Attention, chez nous, le souper, c’est le repas du soir ; le dîner, on le prend à midi, et le déjeuner, le matin. Pour le lait et le pain, le dépanneur au coin de ta rue est ouvert jusqu’à vingt-trois heures. Dimanche, si ça te tente, on pourrait aller magasiner dans le Vieux-Québec : en janvier, il peut faire moins vingt, alors apporte une tuque et des mitaines. Le bureau est présentement fermé pour des travaux, mais ton poste sera prêt lundi. Si tu as un problème, écris-moi un courriel ou appelle-moi sur mon cellulaire. Petit avertissement : si tu regardes le hockey avec l’équipe, tu vas entendre des sacres. Ce sont des jurons, souvent tirés du vocabulaire de l’église ; tu les reconnaîtras au ton, pas besoin de les apprendre ! Et ne t’inquiète pas si tu ne comprends pas tout la première semaine : c’est plate au début, mais ça passe vite. Tout le monde ici sait ce que c’est, d’arriver dans une nouvelle ville. On a hâte de te rencontrer. Bienvenue à Québec ! Julie`;

/** Act 4, « Dans un texte »: a snack-bar menu. */
export const DANS_A4 =
  `${ORIGINAL} Menu affiché au Casse-croûte chez Ginette, à Trois-Rivières. Déjeuners, servis jusqu’à 11 h : deux œufs, bacon, rôties et café. Spécial du dîner, de 11 h à 14 h : soupe du jour, pâté chinois, dessert, breuvage inclus. Souper, à partir de 17 h : pizza ou spaghetti, sur réservation le samedi soir. Tous nos prix sont avant taxes. Paiement au comptoir, comptant ou carte. Merci de votre visite, et à la prochaine !`;

/** Act 5: a travel blog, Brussels then Lausanne. */
export const TEXTE_WEEKEND =
  `${ORIGINAL} Blog de voyage de Karim, étudiant à Lyon. Un week-end, deux pays. Vendredi, Bruxelles. À la boulangerie, la vendeuse me tend ma monnaie en disant « s’il vous plaît ». J’ai cru qu’elle me demandait quelque chose ; en Belgique, c’est simplement ce qu’on dit en tendant un objet, là où l’on dirait « voilà » en France. Mon ami Thomas m’attend dans son kot, sa chambre d’étudiant, près de l’université. Il pleut à verse : « Quelle drache ! », dit-il. Il doit passer à la bibliothèque et me lance : « À tantôt ! » Je comprends qu’il sera de retour dans l’après-midi. Au marché, un vieux monsieur appelle son petit-fils : « Viens une fois ici ! » On entend souvent ce « une fois » caricaturé en France, mais dans le français populaire de Bruxelles, il adoucit simplement une demande. Le soir, l’addition du restaurant fait septante-huit euros. Samedi, Lausanne. Dans le train, je révise : septante, septante et un, puis quatre-vingts en Belgique, mais huitante ici, dans le canton de Vaud. Au café, le serveur annonce « quatre francs nonante » pour mon expresso. Mon amie Léa me donne rendez-vous : « Je t’envoie l’adresse sur ton natel. » À Bruxelles, Thomas aurait dit « sur ton GSM ». Et dans les deux pays, comme au Québec, beaucoup de gens dînent à midi et soupent le soir. Ce que je retiens ? Ce ne sont pas des fautes : ce sont d’autres habitudes, aussi logiques que les nôtres. Septante, c’est même plus simple que soixante-dix.`;

/** Act 5, « Dans un texte »: a group chat in a student house, Liège. */
export const DANS_A5 =
  `${ORIGINAL} Messages du groupe « Kot des Tilleuls », à Liège. Manon : Je ne sais pas venir au souper ce soir, j’ai un examen demain matin. Désolée ! Tom : Pas de souci. Il drache, de toute façon. Manon : Quelqu’un a vu mon chargeur de GSM ? Élise : Sur la table de la cuisine, je crois. Tom : On fait les courses samedi. Il faut septante euros chacun pour le mois. Manon : Nonante, plutôt, avec la facture d’électricité. OK, à tantôt !`;

/** Act 6: a testimony in a magazine, Toulouse. */
export const TEXTE_TOULOUSE =
  `${ORIGINAL} Témoignage publié dans un magazine. Mon accent de Toulouse. J’ai vingt-six ans, je suis ingénieure, et je viens de Toulouse. Il y a deux ans, j’ai passé un entretien d’embauche à Paris. Tout s’est bien passé, jusqu’à la dernière question : « Vous comptez garder cet accent avec nos clients ? » J’ai souri, je n’ai rien répondu, et je ne l’ai jamais oublié. Chez moi, on prononce souvent le e final : une petite table devient « u-ne pe-ti-te ta-ble ». Les voyelles nasales se terminent par un petit son de consonne, si bien que « pain » et « demain » sonnent un peu comme « pèng » et « demèng ». Et le matin, je commande une chocolatine, pas un pain au chocolat. Rien de tout cela n’est une faute : ce sont les habitudes d’une région où, pendant des siècles, on parlait aussi l’occitan. Pendant quelques mois, j’ai quand même essayé de gommer mon accent. Je parlais moins en réunion, j’avais peur de « mal » prononcer. Les linguistes appellent cela l’insécurité linguistique : le sentiment que sa façon de parler vaut moins que celle des autres. Certains parlent même de glottophobie quand la façon de parler sert à écarter quelqu’un. Aujourd’hui, j’ai gardé mon accent, et j’en suis fière. Mes clients me comprennent parfaitement, et certains me demandent d’où je viens, par simple curiosité. C’est une bonne question. « Vous comptez le garder ? » n’en était pas une.`;

/** Act 6, « Dans un texte »: a dialogue in a bakery, Bordeaux. */
export const DANS_A6 =
  `${ORIGINAL} Dans une boulangerie de Bordeaux. Le client, venu de Lille : Bonjour, un pain au chocolat, s’il vous plaît. La boulangère : Une chocolatine ? Bien sûr. Et avec ceci ? Le client : Ce sera tout, merci. Vous dites chocolatine, ici ? La boulangère : Ici, oui, depuis toujours. Chez vous, c’est pain au chocolat, c’est ça ? Le client : Oui. Mais je comprends les deux, c’est l’essentiel. La boulangère : Chacun ses mots, du moment qu’on se comprend ! Bonne journée.`;

/** Act 7: an intern's blog, Abidjan then Dakar. */
export const TEXTE_CAMILLE =
  `${ORIGINAL} Blog de Camille, stagiaire en communication, originaire de Sherbrooke. Six mois entre Abidjan et Dakar. Je pensais connaître le français : je le parle depuis toujours. À Abidjan, j’ai découvert qu’il avait encore beaucoup à m’apprendre. Le premier matin, ma collègue Awa m’a saluée d’un « On dit quoi ? » ; j’ai cherché ce qu’on disait, avant de comprendre qu’elle me demandait simplement comment j’allais. À midi, toute l’équipe est partie manger au maquis, un petit restaurant en plein air où l’on sert du poisson braisé avec de l’attiéké. Pour y aller, on a pris un gbaka, un minibus toujours plein. Quand l’imprimante est tombée en panne, le technicien a annoncé qu’elle était « gâtée ». J’ai appris à dire « tantie » à la dame qui tenait la cantine : c’est une marque de respect, pas de familiarité. En Côte d’Ivoire, le français est la seule langue officielle, mais on entend aussi le dioula, le baoulé et bien d’autres langues, et le français d’ici leur emprunte des mots et des tournures. À Dakar, trois mois plus tard, tout a recommencé. Mon chauffeur s’arrêtait à l’essencerie, un mot si logique que je me suis demandé pourquoi on ne l’avait pas au Québec. Le soir, on mangeait à la dibiterie du quartier. Autour de moi, les gens passaient du wolof au français dans la même phrase, sans effort. Ce que je retiens ? Il n’y a pas un « français d’Afrique », mais des français, pays par pays. Et « présentement », que je dis depuis toujours à Sherbrooke, je l’ai entendu partout à Dakar.`;

/** Act 7, « Dans un texte »: text messages between two cousins, Dakar. */
export const DANS_A7 =
  `${ORIGINAL} Messages entre Moussa et son cousin Ibou, à Dakar. Moussa : Tu es où, présentement ? Ibou : À l’essencerie de la corniche, je fais le plein. Moussa : Passe à la dibiterie en revenant, on a des invités ce soir. Ibou : Combien de personnes ? Moussa : Huit, avec les enfants de ma tante. Ibou : D’accord. Mais mon téléphone est presque déchargé, ne m’appelle pas. Moussa : Pas de souci. On t’attend pour manger. À tout à l’heure !`;

/** Act 8: a magazine article on languages in contact. */
export const TEXTE_CONTACT =
  `${ORIGINAL} Article de magazine. Quand le français rencontre d’autres langues. Partout où il est arrivé, le français a rencontré d’autres langues, et aucune n’en est sortie intacte. Aux Antilles, à La Réunion ou en Haïti, cette rencontre a donné naissance aux créoles, pendant la période coloniale et l’esclavage. Leur vocabulaire vient surtout du français, mais leur grammaire est la leur : « Sa ou fè ? », en Martinique ou en Guadeloupe, et « Koman i lé ? », à La Réunion, veulent dire « Comment ça va ? ». Ce ne sont pas des formes abîmées du français, mais des langues à part entière, qui s’écrivent, s’enseignent et ont leur littérature. En Haïti, le créole est même langue officielle, à côté du français. À Fort-de-France comme à Saint-Denis de La Réunion, beaucoup de gens passent d’une langue à l’autre selon la personne et la situation. Au Canada, l’Acadie a gardé des formes anciennes, comme « je parlons » pour « nous parlons », qu’on entend encore chez certains locuteurs âgés. Dans la région de Moncton, au Nouveau-Brunswick, le chiac mêle le français et l’anglais : longtemps moqué, il est aujourd’hui revendiqué par des artistes. En France, enfin, l’arabe du Maghreb a prêté au français familier des mots comme « toubib », « kif-kif » ou « souk ». Au Maghreb même, le français vit à côté de l’arabe et du tamazight. Aucune de ces rencontres n’a produit du « mauvais » français. Elles ont produit des langues et des façons de parler, chacune avec ses règles.`;

/** Act 8, « Dans un texte »: an email from Fort-de-France. */
export const DANS_A8 =
  `${ORIGINAL} Courriel de Maëlle, à Fort-de-France. Chère amie, merci pour ta carte ! Ici, tout va bien. Au travail, je parle français toute la journée ; à la maison, avec ma grand-mère, c’est le créole. Elle me demande « Sa ou fè ? » chaque matin, et je lui réponds dans sa langue. Mes cousins de Paris, eux, ne comprennent pas le créole : ils croient que c’est du français « déformé ». Je leur explique que c’est une autre langue, avec sa grammaire et ses chansons. Viens nous voir pour le carnaval ! Bises, Maëlle`;

/** Act 9: an advice column on unfamiliar accents. */
export const TEXTE_CONSEILS =
  `${ORIGINAL} Chronique « Parler sans frontières », dans un magazine pour les nouveaux arrivants. Cinq gestes pour comprendre un accent qu’on ne connaît pas. Premier geste : laisse passer les premières minutes. L’oreille s’habitue plus vite qu’on ne le croit, et ce qui semblait une autre langue devient, au bout d’un moment, du français avec une autre musique. Deuxième geste : appuie-toi sur le contexte et sur les mots-clés. Au garage, on te parle de ta voiture ; à la boulangerie, de pain. Tu n’as pas besoin de chaque son pour saisir l’essentiel. Troisième geste : demande poliment, et dis ce qui manque. « Pardon, je n’ai pas bien saisi la fin » aide davantage ton interlocuteur qu’un « Quoi ? » sec, qui oblige à tout répéter. Quatrième geste : reformule pour vérifier. « Si je comprends bien, je passe demain matin ? » Si tu t’es trompé, on te corrigera, et tu apprendras un mot. Cinquième geste : quand un mot est nouveau, demande le mot, pas l’accent. « Que veut dire barrer, ici ? » est une vraie question ; « Pouvez-vous parler normalement ? » est une petite insulte, même sans le vouloir. Enfin, deux réflexes à laisser au vestiaire. Le premier : passer à l’anglais sans qu’on te le propose. Ton interlocuteur y entend souvent que son français ne te convient pas. Le second : commenter ou imiter l’accent, même pour rire. Si vraiment rien ne passe, dis-le simplement : « Excusez-moi, je ne suis pas d’ici, vous pouvez parler un peu plus lentement ? » Presque tout le monde ralentira, et souvent avec le sourire.`;

/** Act 9, « Dans un texte »: a transcript in a hardware store, Québec City. */
export const DANS_A9 =
  `${ORIGINAL} Transcription, dans une quincaillerie de Québec. Le client : Bonjour, je cherche quelque chose pour barrer mon cabanon. Le vendeur : Un cadenas ? Allée sept, à côté des tuques. Le client : Pardon, je n’ai pas bien saisi la fin. Le vendeur : À côté des tuques, les bonnets d’hiver. Le client : Ah, merci ! Donc, si je comprends bien, c’est dans l’allée sept ? Le vendeur : C’est ça. Vous êtes pas d’ici, vous ? Le client : Non, de Lyon. Mais je commence à m’habituer. Le vendeur : Vous vous débrouillez très bien.`;

/** Act 10: an opinion column, Brussels. */
export const TEXTE_NADIA =
  `${ORIGINAL} Chronique d’un quotidien bruxellois, signée Nadia Lemaire. « Ton accent est mignon » : et si on arrêtait ? Pendant longtemps, beaucoup de Belges ont parlé leur français avec un léger sentiment de culpabilité. On s’excusait de dire septante, on évitait « à tantôt » devant des Parisiens, on corrigeait ses enfants quand ils disaient « il drache ». Les linguistes ont un nom pour ce malaise : l’insécurité linguistique. Les Québécois l’ont bien connue, et bien des francophones d’Afrique la connaissent encore, quand on leur fait sentir que « leur » français n’est pas le « bon ». Les institutions ont-elles aidé ? Leur rôle est souvent mal compris. L’Académie française, fondée en 1635, rédige un dictionnaire et publie des avis ; elle ne fait pas la loi sur la façon dont on parle. En France, la Délégation générale à la langue française et aux langues de France, au ministère de la Culture, coordonne la politique de la langue et le travail sur les mots nouveaux. Au Québec, l’Office québécois de la langue française veille à l’application de la Charte de la langue française et a proposé des mots comme « courriel » ou « clavardage ». Aucune de ces institutions ne classe les accents. Le problème n’est donc pas la norme : c’est l’usage qu’on en fait. On peut aimer une langue soignée et respecter tous les accents. Alors, la prochaine fois que vous trouvez un accent « mignon », demandez-vous si vous diriez la même chose d’un accent parisien. Et écoutez plutôt ce que la personne vous dit.`;

/** Act 10, « Dans un texte »: a forum exchange on courriel and mail. */
export const DANS_A10 =
  `${ORIGINAL} Forum de langue. Question de Tom, à Lyon : « Mes collègues de Montréal écrivent toujours courriel. C’est une faute ? » Réponse de Sylvie, à Québec : Pas du tout ! C’est le mot proposé dans les années 1990 par l’Office de la langue française, aujourd’hui l’OQLF, et on le trouve aussi dans les dictionnaires publiés en France. Chez vous, mail reste courant, surtout à l’oral. Aucune des deux formes n’est fausse : ce sont deux usages. Tom : Merci ! Je vais essayer courriel avec eux.`;

/** Act 11: the model reading, a student's blog post, Liège. */
export const TEXTE_RAVI =
  `${ORIGINAL} Blog de Ravi, étudiant en échange à Liège. Le jour où j’ai cru que mon français ne valait rien. Je suis arrivé à Liège en septembre, fier de mon niveau B2. Le premier matin, ma voisine de kot m’a dit, vers dix heures : « À tantôt ! » J’ai passé la journée à me demander ce que « tantôt » voulait dire, et si j’avais raté un rendez-vous. Le soir, elle a frappé à ma porte : « Je ne sais pas venir au souper, j’ai cours. » Je n’ai rien compris. Elle savait parfaitement venir, pensais-je ; elle avait des jambes ! Sur le moment, j’ai cru que c’était mon français qui n’allait pas. Alors j’ai fait ce que je faisais à Londres quand je ne comprenais pas : je suis passé à l’anglais. Elle a répondu en anglais, poliment, et la conversation s’est arrêtée là. Le lendemain, j’ai osé. « Pardon, je n’ai pas bien saisi hier : que veut dire savoir, dans ta phrase ? » Elle a ri, puis elle m’a expliqué qu’en Belgique, « je ne sais pas venir » veut dire « je ne peux pas venir », et que « à tantôt » signifie « à tout à l’heure ». J’ai répété pour vérifier : « Donc, si je comprends bien, tu ne pouvais pas venir ? » Exactement. Depuis, je note les mots belges dans un carnet : septante, nonante, une drache, un GSM. Et j’ai compris une chose : le problème ne venait ni de son accent ni de mon français, mais de deux mots que je ne connaissais pas encore. La prochaine fois, je demanderai tout de suite.`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. THE LISTENINGS (free lines: written for fr-FR TTS, every regional
 *  voice named in the studio brief). The lines that carry the act's move
 *  are phrased as the rows are; the connecting talk is owned by this file.
 * ══════════════════════════════════════════════════════════════════════════ */

export type Line = { fr: string; en: string };
const F = (fr: string, en: string): Line => ({ fr, en });

/** Act 4: Julie's voicemail, Québec City. */
export const MESSAGE_LINES: Line[] = [
  F('Salut, c’est Julie. Petit changement pour la fin de semaine.', 'Hi, it’s Julie. A small change for the weekend.'),
  F('On ne soupe pas samedi, finalement : on dîne dimanche, à midi.', 'We won’t have supper on Saturday after all: we’ll have lunch on Sunday, at noon.'),
  F('Mon chum a gardé la tourtière pour dimanche.', 'My boyfriend saved the meat pie for Sunday.'),
  F('Après, on va magasiner dans le Vieux-Québec, si ça te tente.', 'Afterwards we’ll go shopping in Old Québec, if you feel like it.'),
  F('Apporte ta tuque et tes mitaines, il va faire moins quinze.', 'Bring your hat and mittens, it’s going to be minus fifteen.'),
  F('Mon cellulaire est presque déchargé, alors réponds-moi par courriel.', 'My phone is almost dead, so answer me by email.'),
  F('Si tu te perds, j’habite juste à côté du dépanneur, au coin de la rue.', 'If you get lost, I live right next to the corner store, on the corner of the street.'),
  F('Bonne soirée, et à dimanche !', 'Have a good evening, and see you on Sunday!'),
];

/** Act 5: a phone call to a bike shop, Lausanne. */
export const CYCLES_LINES: Line[] = [
  F('Cycles du Lac, bonjour.', 'Cycles du Lac, good morning.'),
  F('Bonjour, j’appelle pour la réparation de mon vélo.', 'Hello, I’m calling about my bike repair.'),
  F('Alors, le pneu, c’est vingt-huit francs, et les freins, septante-deux.', 'So, the tyre is twenty-eight francs, and the brakes seventy-two.'),
  F('Avec la main-d’œuvre, ça fait cent huitante francs en tout.', 'With labour, that comes to one hundred and eighty francs in all.'),
  F('Cent huitante, vous dites ?', 'One hundred and eighty, you said?'),
  F('Oui, c’est ça. Vous pouvez passer le chercher samedi, avant midi.', 'Yes, that’s right. You can come and pick it up on Saturday, before noon.'),
  F('Parfait. Vous m’envoyez la facture sur mon natel ?', 'Perfect. Will you send the invoice to my mobile?'),
  F('Bien sûr. Merci, et bon après-midi.', 'Of course. Thank you, and have a good afternoon.'),
];

/** Act 7: lunch at an open-air restaurant, Abidjan. */
export const MAQUIS_LINES: Line[] = [
  F('On dit quoi, Camille ? Ça fait longtemps !', 'How are things, Camille? It’s been a while!'),
  F('Ça va bien. Je suis venue en gbaka, il était plein.', 'I’m fine. I came by minibus, it was full.'),
  F('Tantie, on voudrait deux poissons braisés avec de l’attiéké, s’il vous plaît.', 'Auntie, we’d like two grilled fish with attiéké, please.'),
  F('Présentement, il n’y a plus de poisson, mais j’ai du poulet.', 'At the moment there’s no fish left, but I have chicken.'),
  F('D’accord, le poulet. Mais mon téléphone est gâté, je ne peux pas payer avec.', 'All right, the chicken. But my phone is broken, I can’t pay with it.'),
  F('Pas de problème, tu paies en espèces.', 'No problem, you pay in cash.'),
  F('Demain, tu viens au bureau en gbaka ou en taxi ?', 'Tomorrow, are you coming to the office by minibus or by taxi?'),
  F('En taxi : ma cheffe veut que j’arrive à l’heure.', 'By taxi: my boss wants me to be on time.'),
];

/** Act 9: a call to a garage, Lévis. */
export const GARAGE_LINES: Line[] = [
  F('Garage Côté, bonjour.', 'Côté Garage, good morning.'),
  F('Bonjour, j’appelle pour ma voiture : elle fait un drôle de bruit.', 'Hello, I’m calling about my car: it’s making a strange noise.'),
  F('Ton char, je peux pas le regarder présentement, on est débordés.', 'Your car, I can’t look at it right now, we’re swamped.'),
  F('Pardon, je n’ai pas bien saisi. Vous pouvez répéter plus lentement ?', 'Sorry, I didn’t quite catch that. Could you repeat more slowly?'),
  F('Pas de problème. Aujourd’hui, c’est impossible. Apporte-le demain matin, de bonne heure.', 'No problem. Today it’s impossible. Bring it in tomorrow morning, early.'),
  F('Si je comprends bien, je l’apporte demain vers sept heures ?', 'If I understand correctly, I bring it tomorrow around seven?'),
  F('C’est ça. Et barre bien les portes, le stationnement est pas surveillé.', 'That’s right. And lock the doors, the car park isn’t watched.'),
  F('Merci beaucoup, bonne journée.', 'Thank you very much, have a good day.'),
];

/** The DELF B2 CO round: a radio interview with an invented sociolinguist. */
export const ENTREVUE_LINES: Line[] = [
  F('Pour moi, un accent n’est pas un défaut : c’est la trace de l’endroit où l’on a grandi.', 'For me, an accent is not a flaw: it is the trace of the place where you grew up.'),
  F('Certes, le français de référence est utile à l’école, mais personne ne le parle tel quel.', 'Admittedly, reference French is useful at school, but nobody speaks it as it stands.'),
  F('Ce qui me gêne, c’est quand on rit d’un accent au lieu d’écouter ce que dit la personne.', 'What bothers me is when people laugh at an accent instead of listening to what the person says.'),
  F('Dans ma famille, à Liège, mes enfants disent septante sans aucune gêne ; ma grand-mère, elle, s’en excusait.', 'In my family, in Liège, my children say septante without any embarrassment; my grandmother used to apologise for it.'),
  F('Et quand on ne comprend pas, le mieux est de demander le mot, tout simplement.', 'And when you don’t understand, the best thing is simply to ask for the word.'),
];
