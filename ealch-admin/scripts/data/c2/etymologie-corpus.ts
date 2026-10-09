// c2.05.l1 « Étymologie et formation des mots » — the authored corpus, the
// identity block and the citation constants. DRAFT, the first lesson of wave
// 2 of the C2 band. To B1-WORKSHOP-AND-VOCAB-SHAPES.md §2 (THE VOCAB SHAPE:
// word families in use, never isolated nouns) on top of
// B1-BUILD-PLAYBOOK.md, with the C2 rules of C2-BUILD-PLAN.md and the c2.05
// brief in C2-BUILD-LOG.md ("Wave 2 author briefs"). Structural model:
// cent-idiomes-corpus.ts (c2.03, the V/vocab shape with ten word families,
// the closest shape precedent) and precision-nuance-corpus.ts (c2.01, the
// Lesson assembly machinery, and the lesson with real pre-review defects to
// avoid: a leaked English word, a spaced punctuation mark in a scene bubble).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
// A read-only probe (BEGIN TRANSACTION READ ONLY, no SET) against the live
// `etymologie` theme is recorded in `ealch-admin/scratch/_c205-probe.out`
// (not committed): the theme row exists exactly as C2-BUILD-PLAN.md records
// it (domain fondations, c1-c2, sub_themes = ["les racines et les familles
// de mots"]), 0 rows exist in the theme at any level, and the claimed block
// 1000-1199 is clear. This file only needs to stay inside that block.
//
// STABLE EXPORTS (a later C2 lesson may import REFRAME from this file and
// quote it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME,
// LEVEL, E, ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   A GENUINELY NEW SKILL AND THEME: deriving a word's probable meaning from
//   its Greek/Latin roots, prefixes and suffixes, and explaining how French
//   actually built a given word historically (never a guess, always a named
//   source). Ten acts:
//
//     act 1   the problem: a word nobody can look up in the moment, guessed
//             wrong by sound-alike instinct, then right by decomposition
//     act 2   les racines grecques du savoir (tele-, phon-, graph-, bio-,
//             logie, scope, micro-/macro-): compound words built from them
//     act 3   les préfixes latins de position et de mouvement (trans-,
//             inter-, sur-/super-, sous-/sub-)
//     act 4   les préfixes latins de négation (in-/im-/il-/ir-, the
//             assimilation rule; dis-/dé-; anti-, and anti- vs ante-)
//     act 5   une racine, une famille de verbes (ducere -> conduire,
//             déduire, introduire, reproduire, séduire; portare ->
//             apporter, supporter, rapporter, comporter, reporter)
//     act 6   les suffixes qui fabriquent un nom depuis un verbe (-tion/
//             -sion, -ment, -age, -ure, -ance/-ence), and the trap of a
//             REAL word with the wrong meaning (fermage, ouvrage)
//     act 7   les suffixes qui fabriquent un adjectif (-able/-ible, -eux,
//             -if, -al/-el)
//     act 8   le mot populaire et le mot savant: how ONE Latin word gave
//             French TWO words (a natural sound-change twin and a later
//             learned reborrowing), seven documented doublets
//     act 9   racines qui se ressemblent, histoires différentes: diskos vs
//             dis-, phobos vs phone, and étymologie populaire, corrigée
//             (choucroute, contredanse: NOT built the way they look; and
//             forcené: a case where the surprising-sounding breakdown is
//             in fact the real, documented one)
//     act 10  the task: deriving two unseen compounds (photophobe,
//             insupportable) from roots taught in acts 2-7, and explaining
//             one doublet pair's shared history, with a named source
//
//   NOT OWNED, CITED ONLY (published, v88, C1 CLOSED):
//     - la leçon 18 du C1 (c1.18, les faux amis savants) owns learned
//       semantic anglicisms (initier, opportunité, alternative, impacter,
//       académique, versatile, juridiction, éligible, digital, faire sens,
//       questionner, canceller, céduler, booker) — a MEANING error a
//       word already has in modern use, never a question of its ROOTS or
//       its history. Act 1 cites it once, by trail position, and moves
//       past it: this lesson is not about which modern anglicism to avoid,
//       it is about reading the pieces ANY learned word is built from.
//       None of c1.18's fourteen words is reused as an example here.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. ID DISCIPLINE
// ══════════════════════════════════════════════════════════════════════════
//
//   THEME `etymologie` (domain `fondations`) is brand new, created
//   2026-10-09 (C2-BUILD-PLAN.md), range c1-c2, sub-theme already set at
//   creation (« les racines et les familles de mots »). Nothing is published
//   in it. This lesson owns block 1000-1199 and nothing else.
//
//   USED: .1000-.1112 across ten act blocks (§H below), 113 rows total;
//   .1113-.1199 left free inside the claimed block for the pre-review pass.
//
// ══════════════════════════════════════════════════════════════════════════
//  §B. SOURCES FOR EVERY ETYMOLOGICAL CLAIM
// ══════════════════════════════════════════════════════════════════════════
//
//   TLFi/CNRTL (atilf.fr, every entry carries an etymology section), Bloch &
//   Wartburg's "Dictionnaire étymologique de la langue française", and Le
//   Robert historique. Every claim below is one of the standard, widely
//   documented cases these three sources agree on; none is folk etymology
//   presented as fact, and two folk etymologies are explicitly named and
//   corrected (act 9). Where this author was not fully confident of a word's
//   real history, that word was replaced with a better-documented one rather
//   than guessed (the brief's own instruction, taken literally: no example
//   below is included on anything less than textbook-level confidence).
//
//   GREEK ROOTS (act 2): khronos (temps), phagein (manger), tele (loin),
//   phone (le son), phos/phot- (la lumière), graphein (écrire), bios (la
//   vie), logos (l'étude, le discours), skopein (regarder), mikros (petit),
//   makros (grand), pherein (porter) — all standard dictionary-entry Greek
//   roots for everyday French compounds (téléphone, photographe, biologie,
//   microscope, chronologie, télégraphe, phonétique, graphologie,
//   macroscopique, biographie, téléphérique, chronophage).
//
//   LATIN PREFIXES (acts 3-4): trans- (à travers), inter- (entre), super-/
//   sur- (au-dessus), sub-/sou(s)- (dessous), in- (négation, with its
//   assimilation allomorphs im-/il-/ir- before p/b/m, l, r — a standard rule
//   of French morphology, in no dictionary disputed), dis- (séparation),
//   dé- (séparation, cessation), anti- (contre, from Greek anti, not to be
//   confused with the separate prefix ante-, "avant").
//
//   LATIN VERB ROOTS (act 5): ducere ("mener"), portare ("porter") — two of
//   the most frequently cited Latin verb roots in French derivational
//   morphology, each generating a documented family by prefix (conduire,
//   déduire, introduire, reproduire, séduire; apporter, supporter,
//   rapporter, comporter, reporter).
//
//   FRENCH SUFFIXES (acts 6-7): -tion/-sion (Latin -tio), -ment (Latin
//   -mentum), -age (Latin -aticum), -ure (Latin -tura), -ance/-ence (Latin
//   -antia/-entia), -able/-ible (Latin -abilis/-ibilis), -eux (Latin
//   -osus), -if/-ive (Latin -ivus), -al/-el (Latin -alis) — all standard
//   entries in any French derivational-morphology reference.
//
//   DOUBLETS (act 8, the single most research-sensitive family): seven
//   pairs where ONE Latin word gave French two descendants, a popular one
//   (natural sound change) and a learned one (a later, separate borrowing
//   closer to the Latin form), each cross-checked in TLFi's own etymology
//   section for BOTH members of the pair: hospitale -> hôtel / hôpital;
//   potionem -> poison / potion; captivus -> chétif / captif; legalis ->
//   loyal / légal; directum -> droit / direct; fragilis -> frêle / fragile;
//   auscultare -> écouter / ausculter (TLFi's own entry for « écouter »
//   gives it as the popular-French descendant of Latin popular "ascultare",
//   a variant of "auscultare").
//
//   FOLK ETYMOLOGY, NAMED AND CORRECTED (act 9): « choucroute » LOOKS like
//   chou (cabbage) + croûte (crust) but TLFi's entry derives it from
//   Alsatian "sürkrut" ("chou aigre", sour cabbage), reshaped in French
//   under the influence of the existing word "chou" — a textbook case of
//   étymologie populaire actually changing a word's form, not a meaning
//   invented for this lesson. « contredanse » LOOKS like contre + danse but
//   is a reshaping of the English "country dance", the same phenomenon.
//   Against these two, « forcené » is presented as a case where the
//   surprising-sounding breakdown (fors, "hors", + sen, the Old French
//   ancestor of "sens") is in fact the real, TLFi-documented history — the
//   point of act 9 is that only a named source decides which is which,
//   never how plausible a guess sounds.
//
//   LOOK-ALIKE ROOTS, NOT FOLK ETYMOLOGY (act 9, the other half): « disque »
//   (Greek diskos, a round flat object) shares its first three letters with
//   the Latin negation prefix dis- (as in disparaître, act 4) but the two
//   are historically unrelated; « phobie » (Greek phobos, fear) is one
//   letter away from the -phone family (Greek phone, sound) taught in act
//   2, and equally unrelated to it.
//
// ══════════════════════════════════════════════════════════════════════════
//  §C. FACT CHECK ON PEOPLE AND PLACES
// ══════════════════════════════════════════════════════════════════════════
//
//   PEOPLE, ALL INVENTED: Léo Fontaine (the candidate, acts 1 and 10),
//   Mme Girard (an admissions-interview examiner, acts 1, 9 and 10).
//   ORGANISATIONS: none named; act 1's "un comité d'admission" and "une
//   maîtrise" are left unnamed, following the house convention of never
//   naming a specific real institution.
//   REAL PLACES, AS PLACES ONLY: Montréal.
//   LOW-HEAT TOPICS ONLY: a graduate-admissions interview, a lab report, a
//   building-site noise complaint, a medical exam, a historical word
//   origin. No living person, no political topic, no health claim beyond
//   "a patient stayed in hospital" / "a doctor examined a patient", no
//   legal fact.
//   QUOTATIONS: none from a real person or text; every quoted line is
//   invented for this lesson.
//
// ══════════════════════════════════════════════════════════════════════════
//  §D. HOUSE RULES APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use vous where the situation calls for it
//   (an admissions interview). No em dash. No U+203F tie. Never "honnête" /
//   "honest" / "honnêtement". Typographic ’ throughout. No spaced « ? » or
//   « ! » in a scene or story bubble (checked by hand, following c2.02's
//   pre-review defect and c2.01's own warning). No English word leaks into
//   French-facing copy (checked by hand, following c2.01's pre-review
//   defect). French only on the learner surface; English authored behind
//   every `en` field and every trailing « EN: », never shown by default.
//   Citations by trail position in French words only, never a raw id.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c2.05',
  seq: 5,
  title: 'Etymology and Word Formation',
  sub: 'Étymologie et formation des mots',
  canDo: "Can derive a word's probable meaning from its Greek or Latin roots, prefixes and suffixes, tell a real root apart from a look-alike one that means something different, and explain, with a named source, how French actually built a given word historically, including when one Latin word gave French two different descendants",
  prereqUnitIds: ['c1.18'],
} as const;

export const LESSON_ID = 'c2.05.l1';
export const THEME = 'etymologie';
export const LEVEL = 'c2' as const;

/** ONE block. Nothing published in this theme at any level. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. HOW THIS LESSON NAMES ITS NEIGHBOUR
 *
 *  c1.18 is published (v88) and in seed.json with a real seq, the same way
 *  every C1 citation since c2.01 has read it.
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const n = SEQ.get(unitId);
  if (!n) throw new Error(`c2.05: ${unitId} is not in the seed`);
  return `la leçon ${n} du C1`;
}

export const C118_UNIT = 'c1.18';
export const C118_REF = refFr(C118_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE QUOTATION, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as C118_REFRAME, REFRAME_EN as C118_REFRAME_EN } from '../c1/faux-amis-savants-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE STONE. Every learned word is a wall built from older stones: a root
 *  carved with a stable meaning, dressed in different prefixes and suffixes
 *  from one word to the next. Recognising a stone lets you guess the wall
 *  before anyone names it for you; and knowing WHERE a stone actually came
 *  from, rather than where it looks like it came from, is the other half of
 *  this lesson (the doublets of act 8, the folk etymologies of act 9).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Derrière chaque mot savant dort une pierre ancienne : la reconnaître, c’est deviner le mot avant de le connaître.";
export const REFRAME_EN = 'Behind every learned word sleeps an ancient stone: recognising it lets you guess the word before you know it.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Si deux mots se ressemblent, ils viennent forcément de la même racine.',
    why: "False where act 9 has to hold: « disque » (grec diskos) et le préfixe de négation « dis- » (comme dans disparaître) partagent trois lettres et deux histoires totalement séparées. La ressemblance de surface ne prouve rien.",
  },
  {
    text: 'Une explication qui semble logique est forcément la vraie histoire du mot.',
    why: "False where act 9 has to hold: « choucroute » semble logiquement construit sur chou et croûte, et ce n’est pourtant pas son histoire réelle (un mot alsacien remodelé). Seule une source nommée tranche, jamais la plausibilité seule.",
  },
  {
    text: "Un mot savant et son air de famille populaire sont juste deux synonymes.",
    why: "False where act 8 has to hold: « poison » et « potion » viennent du même mot latin, et pourtant l’un a glissé vers un sens dangereux pendant que l’autre a gardé le sens d’un remède. Même origine ne veut pas dire même sens aujourd’hui.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. ROW CONSTRUCTORS
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
/** Named for a wrong guess or a non-released support row: never released,
 *  never spoken as if it were correct French to produce. */
const SR = ['sentence', 'review'] as Item['drills'];

const sent = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, tags, drills, version: 1,
  grammarPoints: ['formation-des-mots'], ...extra,
});
const phrase = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  ...sent(n, fr, en, tags, drills, extra), kind: 'phrase',
});

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 1 ROWS — Le problème (1000-1009)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT1_ROWS: Row[] = [
  sent(1000, "Cette réunion est franchement chronophage, on recommence tout à chaque fois.", 'This meeting is frankly a time-eater, we start over every time.', ['comprehension']),
  sent(1001, "Chronophage ne figure pas dans tous les dictionnaires scolaires, mais ses deux morceaux, si.", 'Chronophage is not in every school dictionary, but its two pieces are.', ['probleme']),
  phrase(1002, 'chrono-', 'time- (from Greek khronos, time)', ['racine-grecque']),
  phrase(1003, '-phage', '-eating, -devouring (from Greek phagein, to eat)', ['racine-grecque']),
  sent(1004, "Ça doit venir de chrome, la couleur argentée.", 'It must come from chrome, the silvery colour.', ['reflexe-faux'], SR),
  sent(1005, "Chronophage veut dire qui mange le temps, qui en prend trop pour ce qu’il rapporte.", 'Chronophage means something that eats time, taking too much of it for what it gives back.', ['sens-correct']),
  sent(1006, "Deviner un mot savant, c’est d’abord repérer ses pierres anciennes, pas chercher un dictionnaire absent.", 'Guessing a learned word means first spotting its ancient stones, not reaching for a dictionary that is not there.', ['regle']),
  sent(1007, "Une racine grecque ou latine garde un sens stable, même changée de costume dans dix mots différents.", 'A Greek or Latin root keeps a stable meaning, even dressed differently across ten different words.', ['regle']),
  phrase(1008, 'une racine', 'a root', ['metalangage']),
  phrase(1009, 'un affixe (préfixe ou suffixe)', 'an affix (prefix or suffix)', ['metalangage']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 2 ROWS — Les racines grecques du savoir (1010-1020)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT2_ROWS: Row[] = [
  sent(1010, 'Léo a changé de téléphone la semaine dernière.', 'Léo got a new phone last week.', ['grec-tele-phone']),
  sent(1011, 'Le photographe a attendu la tombée du jour pour sa dernière prise.', 'The photographer waited for nightfall for his last shot.', ['grec-phot-graph']),
  sent(1012, 'Elle termine un doctorat en biologie marine.', 'She is finishing a doctorate in marine biology.', ['grec-bio-logie']),
  sent(1013, 'Sans microscope, cette bactérie reste invisible.', 'Without a microscope, this bacterium stays invisible.', ['grec-micro-scope']),
  sent(1014, 'La chronologie des événements reste confuse dans ce rapport.', 'The chronology of events stays confused in this report.', ['grec-chrono-logie']),
  sent(1015, 'Le télégraphe a longtemps précédé le téléphone.', 'The telegraph long preceded the telephone.', ['grec-tele-graph']),
  sent(1016, 'Son accent trahit une phonétique très régionale.', 'Her accent betrays a very regional phonetics.', ['grec-phon']),
  sent(1017, "L’expert en graphologie a examiné chaque lettre de la signature.", 'The handwriting expert examined every letter of the signature.', ['grec-graph-logie']),
  sent(1018, "À l’échelle macroscopique, le changement reste invisible.", 'At the macroscopic scale, the change stays invisible.', ['grec-macro-scope']),
  sent(1019, "Sa biographie officielle ne mentionne jamais cet échec.", 'His official biography never mentions this failure.', ['grec-bio-graph']),
  sent(1020, 'Le téléphérique relie la vallée au sommet en douze minutes.', 'The cable car links the valley to the summit in twelve minutes.', ['grec-tele-pherein']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 3 ROWS — Les préfixes de position et de mouvement (1021-1030)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT3_ROWS: Row[] = [
  sent(1021, 'Ils ont dû transporter le piano à bras.', 'They had to carry the piano by hand.', ['latin-trans']),
  sent(1022, 'Le contrat reste transparent sur chaque frais.', 'The contract stays transparent about every fee.', ['latin-trans']),
  sent(1023, 'Le festival attire un public international.', 'The festival draws an international crowd.', ['latin-inter']),
  sent(1024, 'Le médecin a dû intervenir en pleine nuit.', 'The doctor had to step in in the middle of the night.', ['latin-inter']),
  sent(1025, "L’avion a dû survoler la tempête.", 'The plane had to fly over the storm.', ['latin-sur']),
  sent(1026, 'Le juge a interrompu le témoin à deux reprises.', 'The judge interrupted the witness twice.', ['latin-inter']),
  sent(1027, 'Elle supervise désormais trois équipes.', 'She now supervises three teams.', ['latin-super']),
  sent(1028, 'Le roman mêle enquête policière et surnaturel.', 'The novel mixes police investigation and the supernatural.', ['latin-sur']),
  sent(1029, "Il a fallu soumettre le projet au comité avant vendredi.", 'The project had to be submitted to the committee before Friday.', ['latin-sous']),
  sent(1030, 'Le parking souterrain reste fermé ce mois-ci.', 'The underground car park stays closed this month.', ['latin-sous']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 4 ROWS — Les préfixes de négation (1031-1040)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT4_ROWS: Row[] = [
  sent(1031, 'Le dossier reste incomplet sans sa troisième signature.', 'The file stays incomplete without its third signature.', ['latin-in-negation']),
  sent(1032, 'Corriger ce brouillon avant minuit semble impossible.', 'Fixing this draft before midnight seems impossible.', ['latin-in-negation']),
  sent(1033, 'Son écriture devient illisible sous le stress.', 'Her handwriting becomes illegible under stress.', ['latin-in-negation']),
  sent(1034, 'Le rythme cardiaque du patient restait irrégulier.', "The patient's heart rhythm stayed irregular.", ['latin-in-negation']),
  sent(1035, 'Le dossier a fini par disparaître du système.', 'The file eventually disappeared from the system.', ['latin-dis']),
  sent(1036, 'Le technicien a dû déconnecter tout le réseau.', 'The technician had to disconnect the whole network.', ['latin-de']),
  sent(1037, "Il a fallu défaire entièrement ce nœud administratif.", 'That administrative knot had to be entirely undone.', ['latin-de']),
  sent(1038, 'Le médecin a prescrit un antibiotique pour dix jours.', 'The doctor prescribed an antibiotic for ten days.', ['grec-anti']),
  sent(1039, "N’oublie pas l’antigel avant l’hiver.", "Don't forget the antifreeze before winter.", ['grec-anti']),
  sent(1040, "Le test cherche la présence d’anticorps précis.", 'The test looks for the presence of specific antibodies.', ['grec-anti']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 5 ROWS — Une racine, une famille de verbes (1041-1050)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT5_ROWS: Row[] = [
  sent(1041, 'Elle conduit cette équipe depuis cinq ans.', 'She has been leading this team for five years.', ['latin-ducere']),
  sent(1042, 'On peut déduire son métier de ses seules mains.', 'You can deduce his trade from his hands alone.', ['latin-ducere']),
  sent(1043, 'Le président a introduit le nouvel invité sans le nommer.', 'The chair introduced the new guest without naming him.', ['latin-ducere']),
  sent(1044, 'Le laboratoire tente de reproduire exactement la même expérience.', 'The lab is trying to reproduce exactly the same experiment.', ['latin-ducere']),
  sent(1045, 'Son projet a fini par séduire tout le comité.', 'His project ended up winning over the whole committee.', ['latin-ducere']),
  sent(1046, 'Chaque stagiaire apporte un regard différent.', 'Each intern brings a different outlook.', ['latin-portare']),
  sent(1047, 'Elle supporte mal les réunions qui durent.', 'She can barely stand meetings that drag on.', ['latin-portare']),
  sent(1048, "Le témoin a rapporté la scène sans en changer un mot.", 'The witness reported the scene without changing a word.', ['latin-portare']),
  sent(1049, "Le contrat comporte une clause qu’on avait oubliée.", 'The contract includes a clause we had forgotten.', ['latin-portare']),
  sent(1050, "Le comité a dû reporter sa décision d’une semaine.", 'The committee had to postpone its decision by a week.', ['latin-portare']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 6 ROWS — Les suffixes qui fabriquent un nom (1051-1060)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT6_ROWS: Row[] = [
  sent(1051, 'Une seule action a suffi à calmer la salle.', 'A single action was enough to calm the room.', ['suffixe-tion']),
  sent(1052, 'Sa décision a surpris tout le conseil.', 'Her decision surprised the whole board.', ['suffixe-sion']),
  sent(1053, 'Ce changement de ton a tout de suite rassuré l’équipe.', "That change of tone immediately reassured the team.", ['suffixe-ment']),
  sent(1054, 'Le jugement du tribunal tombe la semaine prochaine.', "The court's ruling comes down next week.", ['suffixe-ment']),
  sent(1055, "Le nettoyage du site prendra tout l’après-midi.", 'Cleaning the site will take all afternoon.', ['suffixe-age']),
  sent(1056, 'Ce tissu ne supporte pas un lavage trop chaud.', 'This fabric cannot take too hot a wash.', ['suffixe-age']),
  sent(1057, 'La fermeture du dossier attend une dernière signature.', 'Closing the file is waiting on one last signature.', ['suffixe-ure']),
  sent(1058, "L’ouverture du nouveau marché a surpris les analystes.", 'The opening of the new market surprised analysts.', ['suffixe-ure']),
  sent(1059, 'Sa naissance a changé toute l’organisation familiale.', "Her birth changed the whole family's organisation.", ['suffixe-ance']),
  sent(1060, 'Il a fallu beaucoup de patience pour terminer ce dossier.', 'It took a lot of patience to finish this file.', ['suffixe-ence']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 7 ROWS — Les suffixes qui fabriquent un adjectif (1061-1070)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT7_ROWS: Row[] = [
  sent(1061, 'Le plat était à peine mangeable, trop salé.', 'The dish was barely edible, too salty.', ['suffixe-able']),
  sent(1062, 'Son rapport reste enfin lisible après la correction.', "Her report is finally readable after the edit.", ['suffixe-ible']),
  sent(1063, 'L’annonce a rendu tout le bureau joyeux.', 'The announcement made the whole office joyful.', ['suffixe-eux']),
  sent(1064, "Le chat reste peureux depuis l’orage.", 'The cat has stayed fearful since the storm.', ['suffixe-eux']),
  sent(1065, 'Il reste étonnamment actif pour son âge.', 'He stays surprisingly active for his age.', ['suffixe-if']),
  sent(1066, 'Le projet demandait un angle plus créatif.', 'The project needed a more creative angle.', ['suffixe-if']),
  sent(1067, 'Le débat est devenu un enjeu national.', 'The debate became a national issue.', ['suffixe-al']),
  sent(1068, "Le centre culturel rouvre enfin ses portes.", 'The cultural centre is finally reopening its doors.', ['suffixe-el']),
  sent(1069, "L’eau du robinet reste buvable dans ce quartier.", 'Tap water stays drinkable in this neighbourhood.', ['suffixe-able']),
  sent(1070, 'La fissure devient visible seulement de près.', 'The crack becomes visible only up close.', ['suffixe-ible']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 8 ROWS — Le mot populaire et le mot savant (1071-1084)
 *
 *  Each pair shares ONE Latin ancestor (noted in tags): a popular French
 *  descendant (natural sound change) and a learned descendant (a later,
 *  separate borrowing closer to the Latin form). Sources in §B above.
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT8_ROWS: Row[] = [
  // hospitale -> hôtel (populaire) / hôpital (savant)
  sent(1071, 'Le patient a passé trois jours à l’hôpital.', 'The patient spent three days in the hospital.', ['doublet-hospitale', 'savant']),
  sent(1076, 'Ils ont réservé une chambre dans un petit hôtel.', 'They booked a room in a small hotel.', ['doublet-hospitale', 'populaire']),
  // potionem -> poison (populaire) / potion (savant)
  sent(1072, 'Le vieux médecin préparait lui-même chaque potion.', 'The old doctor prepared each potion himself.', ['doublet-potionem', 'savant']),
  sent(1077, 'Le champignon contenait un poison puissant.', 'The mushroom contained a powerful poison.', ['doublet-potionem', 'populaire']),
  // captivus -> chétif (populaire) / captif (savant)
  sent(1073, 'Le public restait captif du moindre détail de l’histoire.', 'The audience stayed captive to the smallest detail of the story.', ['doublet-captivus', 'savant']),
  sent(1078, 'L’enfant paraissait chétif après cette longue maladie.', 'The child looked puny after that long illness.', ['doublet-captivus', 'populaire']),
  // legalis -> loyal (populaire) / légal (savant)
  sent(1074, 'Le contrat doit rester légal dans les deux pays.', 'The contract must remain legal in both countries.', ['doublet-legalis', 'savant']),
  sent(1079, 'Son associé est resté loyal malgré la faillite.', 'His partner stayed loyal despite the bankruptcy.', ['doublet-legalis', 'populaire']),
  // directum -> droit (populaire) / direct (savant)
  sent(1075, 'Le vol direct coûte deux fois plus cher.', 'The direct flight costs twice as much.', ['doublet-directum', 'savant']),
  sent(1080, 'Elle a toujours marché droit, sans dévier.', 'She always walked straight, without wavering.', ['doublet-directum', 'populaire']),
  // fragilis -> frêle (populaire) / fragile (savant)
  sent(1081, 'La passerelle semblait frêle sous le poids des visiteurs.', "The footbridge seemed frail under the visitors' weight.", ['doublet-fragilis', 'populaire']),
  sent(1082, 'Le vase ancien reste extrêmement fragile.', 'The old vase remains extremely fragile.', ['doublet-fragilis', 'savant']),
  // auscultare -> écouter (populaire) / ausculter (savant)
  sent(1083, 'Le médecin a pris le temps d’écouter chaque symptôme.', 'The doctor took the time to listen to each symptom.', ['doublet-auscultare', 'populaire']),
  sent(1084, 'Le médecin a dû ausculter le patient deux fois.', "The doctor had to examine the patient's chest twice.", ['doublet-auscultare', 'savant']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 9 ROWS — Racines voisines, histoires séparées (1085-1092)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT9_ROWS: Row[] = [
  sent(1085, 'Le disque rayé sautait à chaque lecture.', 'The scratched record skipped on every play.', ['grec-diskos']),
  sent(1086, "Sa phobie des araignées remonte à l’enfance.", 'Her phobia of spiders goes back to childhood.', ['grec-phobos']),
  sent(1087, 'Le secteur de la téléphonie mobile change vite.', 'The mobile telephony sector changes fast.', ['grec-phone']),
  sent(1088, 'Le repas alsacien se terminait par une choucroute garnie.', 'The Alsatian meal ended with a loaded choucroute.', ['folk-choucroute']),
  sent(1089, 'Le bal commençait toujours par une contredanse.', 'The ball always opened with a contredanse.', ['folk-contredanse']),
  sent(1090, "Le jardinier travaillait d’un air presque forcené.", 'The gardener worked almost like someone out of his mind.', ['vrai-forcene']),
  sent(1091, "Le seul test valable reste une source réelle, jamais une ressemblance qui sonne juste.", 'The only valid test is a real source, never a resemblance that merely sounds right.', ['regle']),
  sent(1092, "Le grec diskos a donné disque ; le latin dis- a donné disparaître : mêmes lettres, deux histoires séparées.", 'Greek diskos gave disque; Latin dis- gave disparaître: same letters, two separate histories.', ['regle']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 10 ROWS — La tâche (1093-1112)
 * ══════════════════════════════════════════════════════════════════════════ */

export const MESSAGE_GIRARD =
  "Léo,\n\nAvant notre dernier entretien, un petit exercice écrit. Explique-moi deux mots que tu n’as jamais vus : « photophobe » et « insupportable ». Décompose chacun en ses pierres, puis donne le sens que tu en déduis.\n\nEnsuite, choisis un couple de mots que nous avons vu ensemble, un mot populaire et son double savant venus du même mot latin (par exemple légal et loyal), et explique, avec une source nommée, comment le français a fini par en garder deux plutôt qu’un seul.\n\nMadame Girard";

export const MESSAGE_GIRARD_EN =
  "Léo,\n\nBefore our last interview, a short written exercise. Explain to me two words you have never seen: « photophobe » and « insupportable ». Break down each into its stones, then give the meaning you derive from it.\n\nThen choose a pair we have seen together, a popular word and its learned twin coming from the same Latin word (for example légal and loyal), and explain, with a named source, how French ended up keeping two rather than one.\n\nMadame Girard";

const ACT10_ROWS: Row[] = [
  sent(1093, "Après l’opération, elle restait photophobe pendant quelques jours.", 'After the operation, she stayed light-sensitive for a few days.', ['tache-photophobe']),
  sent(1094, "Le bruit du chantier devenait insupportable après seize heures.", 'The construction noise became unbearable after four in the afternoon.', ['tache-insupportable']),
  sent(1095, "Photophobe se lit phot-, la lumière, et -phobe, qui craint : qui craint la lumière.", 'Photophobe reads as phot-, light, and -phobe, which fears: something that fears the light.', ['modele']),
  sent(1096, "Insupportable se lit in-, négation, et supportable, qu’on peut supporter : qu’on ne peut pas supporter.", 'Insupportable reads as in-, negation, and supportable, which can be borne: something that cannot be borne.', ['modele']),
  sent(1097, "Légal et loyal viennent du même mot latin, legalis : l’un est resté proche du latin, l’autre a changé en vieux français.", 'Légal and loyal come from the same Latin word, legalis: one stayed close to Latin, the other changed in Old French.', ['modele']),
  sent(1098, "Selon le TLFi, loyal descend de legalis par le vieux français leial, pendant que légal a été repris plus tard, directement sur le latin.", "According to the TLFi, loyal descends from legalis through Old French leial, while légal was borrowed later, directly from the Latin.", ['modele', 'source']),
  sent(1099, "Mme Girard a lu la réponse de Léo sans un mot, puis a souligné une phrase.", 'Mme Girard read Léo’s answer without a word, then underlined one sentence.', ['scenario']),
  sent(1100, "J’ai décomposé chaque mot avant de proposer un sens, jamais l’inverse.", 'I broke down each word before proposing a meaning, never the other way round.', ['scenario-reponse']),
  sent(1101, "Je trouvais que ça ressemblait à un mot que je connaissais déjà, alors j’ai répondu vite.", "I thought it looked like a word I already knew, so I answered fast.", ['scenario-alt'], SR),
  sent(1102, "Pour le couple de mots, j’ai cité le TLFi avant d’écrire ma propre explication.", 'For the word pair, I cited the TLFi before writing my own explanation.', ['scenario-reponse']),
  sent(1103, "J’ai expliqué que les deux mots voulaient probablement dire la même chose, sans vérifier.", 'I explained that the two words probably meant the same thing, without checking.', ['scenario-alt'], SR),
  phrase(1104, 'le mot savant', 'the learned word', ['metalangage']),
  phrase(1105, 'le mot populaire', 'the popular word', ['metalangage']),
  phrase(1106, 'une source nommée', 'a named source', ['metalangage']),
  sent(1107, "Repère la racine ou l’affixe, nomme sa langue d’origine, puis déduis le sens du mot entier.", 'Spot the root or the affix, name its language of origin, then deduce the whole word’s meaning.', ['plan']),
  sent(1108, "Pour un mot d’origine, cite toujours une source réelle, jamais une ressemblance qui sonne juste.", 'For a word’s origin, always cite a real source, never a resemblance that merely sounds right.', ['plan']),
  sent(1109, "Mme Girard a noté : « Deux pierres bien lues, une source bien citée : voilà ce que je voulais. »", 'Mme Girard wrote: "Two stones well read, one source well cited: that is what I wanted."', ['bilan']),
  sent(1110, "Un mot savant inconnu n’est jamais tout à fait inconnu, une fois ses pierres repérées.", 'An unknown learned word is never quite unknown, once its stones are spotted.', ['bilan']),
  sent(1111, "La plausibilité d’une histoire ne remplace jamais la source qui la prouve.", "A story's plausibility never replaces the source that proves it.", ['bilan']),
  sent(1112, "Léo relit sa propre réponse et corrige une dernière fois le mot « potion », mal orthographié.", 'Léo rereads his own answer and fixes one last time the word "potion", misspelled.', ['bilan']),
];

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS, ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS,
];
export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** No row is reused from another lesson in this draft (c1.18 is cited by its
 *  REFRAME and trail position only, never by id): every act imports
 *  nothing. Kept as an export so the lesson file's assembly code is
 *  identical in shape to every other B1+/C1/C2 lesson. */
export const IMPORTED: Record<string, string[]> = {
  act1: [], act2: [], act3: [], act4: [], act5: [], act6: [], act7: [], act8: [], act9: [], act10: [],
};
export const IMPORT_IDS: string[] = [...new Set(Object.values(IMPORTED).flat())];

/** No row here is unreleasable by kind; some are NAMED but never released
 *  (the `SR` drills = {sentence, review}, no flashcard, no voiceflash): a
 *  wrong guess or a non-source-backed scenario alternative a learner must
 *  not be quizzed on as if it were correct French to produce. */
export const NOT_DECK_ABLE: string[] = ALL_ROWS.filter((r) => !(r.drills as string[]).includes('flashcard')).map((r) => r.id);
export const NOT_SPEAKABLE: string[] = [...NOT_DECK_ABLE];
