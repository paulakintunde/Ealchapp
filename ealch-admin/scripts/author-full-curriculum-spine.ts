// The full-curriculum spine pass: SONS 10, A1 30, A2 35 (75 units).
//
// WHY THIS EXISTS
//
// The Den renders content.units(track) and nothing else, so the curriculum a
// learner sees IS the set of curriculum_unit rows. Against the approved
// curriculum (Stage 0 / Stage 1 / Stage 2, provided 2026-07-31) the database
// was short in three specific ways:
//
//   · SONS had 9 units and no LIAISON at all. The single most-taught rule of
//     connected French ("les_amis", "vous_avez") had no home in the track that
//     exists to teach the sound system. This is the one true content hole of
//     the three, and it is the one a learner would actually notice.
//   · A1 had 26 of 30. The missing four are all in the numbers block: the
//     approved curriculum splits counting across three units (1-20, 21-100,
//     100-1000000) where the DB carried one, and it ends the band on a
//     capstone the DB had no row for.
//   · A2 had 8 of 35. The DB's eight are broad umbrella units ("Verbes
//     irréguliers") where the curriculum wants the same ground taught in
//     narrower, teachable slices (five irregular-verb groups, each its own
//     unit). This is the largest gap by count.
//
// WHAT THIS SCRIPT DOES *NOT* DO
//
// It does not rename a single id. Unit ids are immutable in this codebase and
// the schema says so out loud (schema.ts on Unit.seq): progress rows and
// lessonIds key on ids, so a curriculum reorder is a `seq` edit and never an
// id rename. That constraint decides the whole shape of what follows:
//
//   · LIAISON is authored as a NEW id, sons.10, carrying seq 7. The three
//     units it displaces (élision, rythme, masterclass) keep their ids
//     sons.07/08/09 forever and simply move to seq 8/9/10. After this pass the
//     SONS ids and seqs deliberately disagree, exactly as A1's already do.
//   · Existing A1/A2 units keep their ids and are re-seq'd into the approved
//     order. New units take the next free id number in their band.
//
// This is the same trade the CF-17 A1 resequencing already made. It is not
// tidy, and it is the only version of tidy that does not silently orphan
// someone's progress.
//
// RELATIONSHIP TO update-spine.ts
//
// update-spine.ts authored canDo/themes/prereqs over the 43 units that existed
// then, and asserts it covers every unit in the DB. It will therefore fail
// after this pass until its SPINE map is extended — that is intended and
// documented here rather than papered over. This script is the structural pass
// (units exist, in the right order); update-spine.ts is the pedagogical pass
// (what each unit claims). Run this one first.
//
// Every unit is authored with its spine fields inline (canDo, themes,
// prereqUnitIds) so the two passes cannot drift apart for the new rows.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-full-curriculum-spine.ts --dry-run   validate + report
//   pnpm tsx scripts/author-full-curriculum-spine.ts             apply, one transaction
//   then: pnpm content:publish   (check git diff on seed.json first — see
//         ealch-admin/LESSON-CONTENT-STANDARD.md §5.3 and the seed-direct hazard)
//
// Idempotent: re-running writes the same values. New units are created with
// lessonIds: [] and render as the Den's existing "SOON" row until a lesson is
// authored against them. That is the honest state — a unit that promises a
// lesson it does not have is the failure mode this repo has been burned by.

// './env' MUST be imported first, or DATABASE_URL is unseen and this silently
// "updates" a throwaway PGlite database. See scripts/env.ts and migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateUnit, type Track, type Unit } from '../../ealch-v2/src/content/schema.ts';

/** A unit as the curriculum declares it. `id` is the immutable key; `seq` is
 *  the display position the Den sorts on. They are allowed to disagree. */
type SpineUnit = {
  id: string;
  seq: number;
  title: string;
  sub: string;
  canDo: string;
  themes?: string[];
  prereqUnitIds?: string[];
};

// ── STAGE 0 — SONS, the sound system (10 units) ─────────────────────────────
//
// Titles are French, sub-lines are the English gloss the Den renders muted
// under the title. Both follow the four units that already ship.
//
// The ordering change: LIAISON (sons.10, seq 7) lands immediately after the
// silent-letters unit, because liaison is precisely the rule that overrides
// it. Teaching "final consonants are silent" and then "except when the next
// word starts with a vowel" in adjacent units is the whole point; splitting
// them by three unrelated units, as append-at-the-end would have, is what
// makes learners think the two rules contradict each other.

const SONS: SpineUnit[] = [
  {
    id: 'sons.01',
    seq: 1,
    title: "L'alphabet",
    sub: 'the 26 letters & their French names',
    canDo: 'Can name the letters of the French alphabet and spell their own name aloud',
  },
  {
    id: 'sons.02',
    seq: 2,
    title: 'Les voyelles',
    sub: 'pure vowels — a, e, i, o, u, ou, eu',
    canDo: 'Can produce the pure French vowels, including ou and eu, without gliding',
    prereqUnitIds: ['sons.01'],
  },
  {
    id: 'sons.03',
    seq: 3,
    title: 'Les voyelles nasales',
    sub: 'on · en · in · un — through the nose',
    canDo: 'Can hear and produce the nasal vowels of on, en and in',
    prereqUnitIds: ['sons.02'],
  },
  {
    id: 'sons.04',
    seq: 4,
    title: 'Les consonnes',
    sub: 'consonant sounds & the French r',
    canDo: 'Can produce the French r and the consonant sounds that differ from English',
    prereqUnitIds: ['sons.01'],
  },
  {
    id: 'sons.05',
    seq: 5,
    title: 'Les accents',
    sub: 'é è ê ë ç — what each mark changes',
    canDo: 'Can read é, è, ê, ë and ç and say what each mark changes',
    prereqUnitIds: ['sons.02'],
  },
  {
    id: 'sons.06',
    seq: 6,
    title: 'Les lettres muettes',
    sub: 'silent letters — why « ils parlent » ends quietly',
    canDo: 'Can spot the silent letters in written French and stop pronouncing them',
    prereqUnitIds: ['sons.04'],
  },
  // NEW. The gap this pass exists to close.
  {
    id: 'sons.10',
    seq: 7,
    title: 'La liaison',
    sub: 'when silent letters wake up — les_amis, vous_avez',
    canDo: 'Can link a silent final consonant onto the next word when French requires it, and leave it silent when French forbids it',
    prereqUnitIds: ['sons.06'],
  },
  {
    id: 'sons.07',
    seq: 8,
    title: "L'élision",
    sub: "je → j', le → l' — dropping the vowel",
    canDo: "Can drop the vowel in je, le and la before a vowel sound, as in j'aime and l'école",
    prereqUnitIds: ['sons.06'],
  },
  {
    id: 'sons.08',
    seq: 9,
    title: 'Rythme & intonation',
    sub: 'the music of French — even syllables',
    canDo: 'Can keep syllables even and place the stress at the end of the phrase, the French way',
    prereqUnitIds: ['sons.03'],
  },
  {
    id: 'sons.09',
    seq: 10,
    title: 'Masterclass',
    sub: 'pronunciation masterclass — putting it all together',
    canDo: 'Can apply the whole sound system in connected speech: nasals, silent letters, liaison, elision and rhythm together',
    prereqUnitIds: [
      'sons.01', 'sons.02', 'sons.03', 'sons.04', 'sons.05',
      'sons.06', 'sons.10', 'sons.07', 'sons.08',
    ],
  },
];

// ── STAGE 1 — A1, absolute beginner (30 units) ──────────────────────────────
//
// The DB's 26 A1 units are all kept, re-seq'd into the approved curriculum
// order. Four are new:
//
//   · a1.27 / a1.28 split counting into the curriculum's three bands. a1.02
//     ("Les nombres", 0-100) keeps its id and narrows to 1-20, because its
//     authored items are the small numbers; 21-100 and the large numbers
//     become new units rather than stretching one unit over three lessons.
//   · a1.29 gives the partitive its own unit. The DB taught du/de la only
//     incidentally under articles; the curriculum makes it a unit, and it is
//     the article beginners actually get wrong when ordering food.
//   · a1.30 is the band capstone, which the DB had no row for at all.
//
// The curriculum's "Colors in Context + Body Parts" (a1-l27) maps onto the
// DB's existing a1.24 "Le corps" rather than a new unit: colours already have
// their own unit at seq 16, and re-teaching them beside body parts would be a
// second row covering ground a learner just walked.

const A1: SpineUnit[] = [
  {
    id: 'a1.01',
    seq: 1,
    title: 'Les salutations',
    sub: 'greetings & politeness — bonjour, merci',
    canDo: 'Can greet someone, ask how they are, and take leave, politely or informally',
    themes: ['salutations', 'politesse'],
  },
  {
    id: 'a1.02',
    seq: 2,
    title: 'Les nombres 1–20',
    sub: 'counting to twenty — the ones you say every day',
    canDo: 'Can count to twenty, hear the difference between them, and give a small quantity',
    themes: ['nombres'],
  },
  {
    id: 'a1.27',
    seq: 3,
    title: 'Les nombres 21–100',
    sub: 'the pattern — and the quirky 70s, 80s and 90s',
    canDo: 'Can count to a hundred, including soixante-dix, quatre-vingts and quatre-vingt-dix',
    themes: ['nombres'],
    prereqUnitIds: ['a1.02'],
  },
  {
    id: 'a1.28',
    seq: 4,
    title: 'Les grands nombres',
    sub: 'cent, mille, millions — and when they take an s',
    canDo: 'Can say prices, years and large quantities with cent, mille and million',
    themes: ['nombres'],
    prereqUnitIds: ['a1.27'],
  },
  {
    id: 'a1.03',
    seq: 5,
    title: 'Le genre des noms',
    sub: 'noun gender — masculin & féminin',
    canDo: 'Can tell masculine from feminine nouns and pick un or une',
  },
  {
    id: 'a1.04',
    seq: 6,
    title: 'Les articles définis',
    sub: "le, la, l', les",
    canDo: "Can pick le, la, l' or les for any noun they know",
    prereqUnitIds: ['a1.03'],
  },
  {
    id: 'a1.11',
    seq: 7,
    title: 'Les articles indéfinis',
    sub: 'un, une, des — first mention',
    canDo: 'Can pick un, une or des, and say when French wants the indefinite rather than the definite',
    prereqUnitIds: ['a1.03'],
  },
  {
    id: 'a1.29',
    seq: 8,
    title: 'Les articles partitifs',
    sub: "du, de la, de l' — some coffee, some water",
    canDo: 'Can ask for an unspecified amount of food or drink with du, de la and de l',
    themes: ['nourriture'],
    prereqUnitIds: ['a1.04'],
  },
  {
    id: 'a1.05',
    seq: 9,
    title: 'Les pronoms sujets',
    sub: 'je, tu, il, elle, on, nous, vous, ils',
    canDo: 'Can pick the right subject pronoun, including tu versus vous, and everyday on for nous',
  },
  {
    id: 'a1.06',
    seq: 10,
    title: 'Le verbe être',
    sub: 'to be — je suis, tu es…',
    canDo: 'Can say who they are, what they do and where they are from with être',
    themes: ['identite'],
    prereqUnitIds: ['a1.05'],
  },
  {
    id: 'a1.07',
    seq: 11,
    title: 'Le verbe avoir',
    sub: "to have — j'ai, tu as…",
    canDo: 'Can say their age and what they have with avoir',
    themes: ['identite'],
    prereqUnitIds: ['a1.05'],
  },
  {
    id: 'a1.08',
    seq: 12,
    title: 'Les jours de la semaine',
    sub: 'lundi to dimanche — and what le lundi changes',
    canDo: 'Can name the days and say what they do on a given day',
    themes: ['temps', 'calendrier'],
  },
  {
    id: 'a1.09',
    seq: 13,
    title: 'Les mois de l’année',
    sub: 'janvier to décembre — no capitals, en + month',
    canDo: 'Can name the months and give a date',
    themes: ['temps', 'calendrier'],
    prereqUnitIds: ['a1.08'],
  },
  {
    id: 'a1.10',
    seq: 14,
    title: 'Les saisons & la météo',
    sub: 'seasons & weather — il fait beau, il pleut',
    canDo: "Can name the seasons and describe today's weather",
    themes: ['temps', 'meteo'],
  },
  {
    id: 'a1.12',
    seq: 15,
    title: "L'heure",
    sub: 'telling time — il est, et demie, moins le quart',
    canDo: 'Can ask and tell the time and make a simple appointment',
    themes: ['temps'],
    prereqUnitIds: ['a1.27'],
  },
  {
    id: 'a1.13',
    seq: 16,
    title: 'Les couleurs',
    sub: 'colours & the ones that never agree',
    canDo: 'Can name the colours, agree them with the noun, and leave marron and orange alone',
    themes: ['couleurs'],
    prereqUnitIds: ['a1.03'],
  },
  {
    id: 'a1.14',
    seq: 17,
    title: 'Adjectifs de base',
    sub: 'basic adjectives — grand, petit, beau, vieux',
    canDo: 'Can describe people and things with common adjectives, agreed for gender',
    prereqUnitIds: ['a1.03'],
  },
  {
    id: 'a1.16',
    seq: 18,
    title: "La place de l'adjectif",
    sub: 'adjective placement — the BANGS rule',
    canDo: 'Can put the adjective on the right side of the noun, and knows which ones go before',
    prereqUnitIds: ['a1.14'],
  },
  {
    id: 'a1.15',
    seq: 19,
    title: 'La famille',
    sub: 'family vocabulary — immediate & extended',
    canDo: 'Can introduce their family and say who is who',
    themes: ['famille'],
  },
  {
    id: 'a1.17',
    seq: 20,
    title: 'Adjectifs possessifs',
    sub: 'mon, ma, mes, notre… — and the vowel rule',
    canDo: 'Can say whose things are whose with mon, ma, mes and their kin',
    themes: ['famille'],
    prereqUnitIds: ['a1.03'],
  },
  {
    id: 'a1.18',
    seq: 21,
    title: 'La négation',
    sub: 'ne… pas — and what happens to the article',
    canDo: 'Can turn any sentence they know negative with ne… pas',
    prereqUnitIds: ['a1.06', 'a1.07'],
  },
  {
    id: 'a1.19',
    seq: 22,
    title: 'Questions oui / non',
    sub: 'three ways — intonation, est-ce que, inversion',
    canDo: 'Can ask and answer yes-no questions three ways and pick the right register',
    prereqUnitIds: ['a1.06'],
  },
  {
    id: 'a1.20',
    seq: 23,
    title: 'Les mots interrogatifs',
    sub: 'qui, que, où, quand, comment, pourquoi, combien',
    canDo: 'Can ask who, what, where, when, why and how much questions',
    prereqUnitIds: ['a1.19'],
  },
  {
    id: 'a1.21',
    seq: 24,
    title: 'Prépositions de lieu',
    sub: 'à, dans, sur, sous, devant, derrière',
    canDo: 'Can say where things are with sur, sous, dans, devant and derrière',
  },
  {
    id: 'a1.22',
    seq: 25,
    title: 'Pays & nationalités',
    sub: 'countries, nationalities — en, au, aux',
    canDo: 'Can say which country they are from and are going to, and what nationality they are',
    themes: ['identite'],
    prereqUnitIds: ['a1.06'],
  },
  {
    id: 'a1.23',
    seq: 26,
    title: 'La nourriture',
    sub: 'everyday food vocabulary with its articles',
    canDo: 'Can name everyday food and say what they like and eat',
    themes: ['nourriture'],
    prereqUnitIds: ['a1.29'],
  },
  {
    id: 'a1.24',
    seq: 27,
    title: 'Le corps',
    sub: 'body parts & describing people',
    canDo: 'Can name the parts of the body, say what hurts, and describe how someone looks',
    themes: ['corps', 'sante'],
    prereqUnitIds: ['a1.13'],
  },
  {
    id: 'a1.25',
    seq: 28,
    title: 'La routine quotidienne',
    sub: 'matin, midi, soir — se lever, manger, dormir',
    canDo: 'Can describe their day from getting up to going to bed',
    themes: ['routine'],
    prereqUnitIds: ['a1.12'],
  },
  {
    id: 'a1.26',
    seq: 29,
    title: 'La maison',
    sub: 'rooms, furniture & household items',
    canDo: 'Can name the rooms and the furniture and say where things are at home',
    themes: ['maison'],
    prereqUnitIds: ['a1.21'],
  },
  {
    id: 'a1.30',
    seq: 30,
    title: 'Bilan A1',
    sub: 'A1 capstone — everything, put together',
    canDo: 'Can hold a short everyday exchange using the whole A1 band: introduce themselves, ask questions, count, tell the time and describe their world',
    prereqUnitIds: ['a1.20', 'a1.23', 'a1.25', 'a1.26'],
  },
];

// ── STAGE 2 — A2, elementary (35 units) ─────────────────────────────────────
//
// The eight existing A2 units are umbrella rows; the curriculum wants the same
// ground in teachable slices. Each existing id is kept and narrowed to the
// slice it best already covers, rather than deleted and re-created:
//
//   a2.01 regular verbs      → -ER verbs, the full system (seq 1)
//   a2.02 irregular verbs    → group 1, aller/venir/tenir (seq 5)
//   a2.03 adjectives+adverbs → adjective agreement, full system (seq 10)
//   a2.04 prepositions       → prepositions of place, full set (seq 13)
//   a2.05 passé composé      → passé composé with avoir (seq 16)
//   a2.06 object pronouns    → direct object pronouns (seq 21)
//   a2.07 daily situations   → food, restaurant & ordering (seq 24)
//   a2.08 comparisons        → comparatives & superlatives (seq 32)
//
// Everything else is new (a2.09 upward, 27 units).

const A2: SpineUnit[] = [
  {
    id: 'a2.01',
    seq: 1,
    title: 'Les verbes en -ER',
    sub: 'the full system — endings & 30 common verbs',
    canDo: 'Can conjugate any regular -er verb in the present and use it in a real sentence',
    prereqUnitIds: ['a1.05'],
  },
  {
    id: 'a2.09',
    seq: 2,
    title: 'Les verbes en -ER : exceptions',
    sub: '-ger, -cer, -eler, -eter and the é_er patterns',
    canDo: 'Can spell the stem changes in manger, commencer, appeler and préférer without guessing',
    prereqUnitIds: ['a2.01'],
  },
  {
    id: 'a2.10',
    seq: 3,
    title: 'Les verbes en -IR',
    sub: 'the finir model — and the -iss- in the plural',
    canDo: 'Can conjugate regular -ir verbs and hear where the -iss- belongs',
    prereqUnitIds: ['a2.01'],
  },
  {
    id: 'a2.11',
    seq: 4,
    title: 'Les verbes en -RE',
    sub: 'the vendre model — and the bare il form',
    canDo: 'Can conjugate regular -re verbs, including the il form that takes no ending',
    prereqUnitIds: ['a2.01'],
  },
  {
    id: 'a2.02',
    seq: 5,
    title: 'Irréguliers 1 : aller, venir, tenir',
    sub: 'the going & coming family',
    canDo: 'Can use aller, venir and tenir in the present, including venir de for the recent past',
    prereqUnitIds: ['a2.01'],
  },
  {
    id: 'a2.12',
    seq: 6,
    title: 'Irréguliers 2 : faire, dire, lire',
    sub: 'three verbs, thirty everyday expressions',
    canDo: 'Can use faire, dire and lire and the common expressions built on faire',
    prereqUnitIds: ['a2.02'],
  },
  {
    id: 'a2.13',
    seq: 7,
    title: 'Irréguliers 3 : vouloir, pouvoir, devoir',
    sub: 'the modals — want, can, must + infinitive',
    canDo: 'Can say what they want, can and must do with a modal plus an infinitive',
    prereqUnitIds: ['a2.02'],
  },
  {
    id: 'a2.14',
    seq: 8,
    title: 'Irréguliers 4 : savoir & connaître',
    sub: 'the two ways French knows things',
    canDo: 'Can pick savoir or connaître correctly, the distinction English does not make',
    prereqUnitIds: ['a2.13'],
  },
  {
    id: 'a2.15',
    seq: 9,
    title: 'Irréguliers 5 : prendre, mettre, battre',
    sub: 'pattern families & their compounds',
    canDo: 'Can conjugate prendre, mettre and battre and recognise their compounds',
    prereqUnitIds: ['a2.02'],
  },
  {
    id: 'a2.03',
    seq: 10,
    title: "L'accord des adjectifs",
    sub: 'the full system — -eux/-euse, -if/-ive, invariable',
    canDo: 'Can agree any adjective in all four forms and spot the invariable ones',
    prereqUnitIds: ['a1.14', 'a1.16'],
  },
  {
    id: 'a2.16',
    seq: 11,
    title: 'Beau, nouveau, vieux',
    sub: 'the triple forms — bel, nouvel, vieil',
    canDo: 'Can use bel, nouvel and vieil before a vowel and agree all three in the plural',
    prereqUnitIds: ['a2.03'],
  },
  {
    id: 'a2.17',
    seq: 12,
    title: 'Les adverbes',
    sub: 'formation & placement — the -ment pattern',
    canDo: 'Can build -ment adverbs, use the irregular ones, and place them correctly',
    prereqUnitIds: ['a2.03'],
  },
  {
    id: 'a2.04',
    seq: 13,
    title: 'Prépositions de lieu',
    sub: 'the full set — with countries & cities',
    canDo: 'Can pick à, de, en, au, aux and chez, and dodge their classic traps',
    prereqUnitIds: ['a1.21'],
  },
  {
    id: 'a2.18',
    seq: 14,
    title: 'Prépositions de temps',
    sub: 'depuis, pendant, il y a, dans, en',
    canDo: 'Can say how long, how long ago and when with the right time preposition',
    prereqUnitIds: ['a1.12'],
  },
  {
    id: 'a2.19',
    seq: 15,
    title: 'Le futur proche',
    sub: 'aller + infinitive — what happens next',
    canDo: 'Can say what they are going to do, and make it negative',
    prereqUnitIds: ['a2.02'],
  },
  {
    id: 'a2.05',
    seq: 16,
    title: 'Le passé composé avec avoir',
    sub: 'formation, 60 participles, negation',
    canDo: 'Can talk about the past with avoir and place the negation around the auxiliary',
    prereqUnitIds: ['a2.01', 'a1.07'],
  },
  {
    id: 'a2.20',
    seq: 17,
    title: 'Participes passés irréguliers',
    sub: 'the full list — the 40 that must be learnt',
    canDo: 'Can produce the irregular past participles rather than guessing from the infinitive',
    prereqUnitIds: ['a2.05'],
  },
  {
    id: 'a2.21',
    seq: 18,
    title: 'Le passé composé avec être',
    sub: 'DR MRS VANDERTRAMP & agreement',
    canDo: 'Can pick être as the auxiliary where French requires it and agree the participle',
    prereqUnitIds: ['a2.05'],
  },
  {
    id: 'a2.22',
    seq: 19,
    title: 'Les verbes pronominaux',
    sub: 'present tense — se lever, se coucher, se laver',
    canDo: 'Can describe their routine with reflexive verbs in the present',
    themes: ['routine'],
    prereqUnitIds: ['a2.01'],
  },
  {
    id: 'a2.23',
    seq: 20,
    title: 'Pronominaux au passé composé',
    sub: 'être auxiliary & the agreement rule',
    canDo: 'Can put reflexive verbs into the past with être and agree them correctly',
    prereqUnitIds: ['a2.22', 'a2.21'],
  },
  {
    id: 'a2.06',
    seq: 21,
    title: "Pronoms d'objet direct",
    sub: 'le, la, les — position & past agreement',
    canDo: 'Can replace a direct object with le, la or les and place it before the verb',
    prereqUnitIds: ['a2.01'],
  },
  {
    id: 'a2.24',
    seq: 22,
    title: "Pronoms d'objet indirect",
    sub: 'lui, leur — the verbs that take à',
    canDo: 'Can replace an indirect object with lui or leur and knows which verbs take à',
    prereqUnitIds: ['a2.06'],
  },
  {
    id: 'a2.25',
    seq: 23,
    title: 'Y et EN',
    sub: 'the two neutral pronouns — à + thing, de + thing',
    canDo: 'Can replace a place or a quantity with y and en in the right slot',
    prereqUnitIds: ['a2.24'],
  },
  {
    id: 'a2.07',
    seq: 24,
    title: 'Au restaurant',
    sub: 'ordering — the partitive in real use',
    canDo: 'Can order a full meal, ask for the bill and handle the waiter’s questions',
    themes: ['nourriture', 'cafe'],
    prereqUnitIds: ['a1.29'],
  },
  {
    id: 'a2.26',
    seq: 25,
    title: 'Les courses & l’argent',
    sub: 'shopping, money & prices',
    canDo: 'Can shop, ask a price, count change and complete a purchase',
    themes: ['courses'],
    prereqUnitIds: ['a1.28'],
  },
  {
    id: 'a2.27',
    seq: 26,
    title: 'Les transports',
    sub: 'getting around, directions & transport modes',
    canDo: 'Can buy a ticket, ask for directions and follow the answer',
    themes: ['transport', 'deplacements'],
    prereqUnitIds: ['a2.04'],
  },
  {
    id: 'a2.28',
    seq: 27,
    title: 'Chez le médecin',
    sub: 'health — symptoms & the body',
    canDo: 'Can describe a symptom, say what hurts and understand simple medical advice',
    themes: ['sante', 'corps'],
    prereqUnitIds: ['a1.24'],
  },
  {
    id: 'a2.29',
    seq: 28,
    title: "À l'hôtel",
    sub: 'check-in, requests & complaints',
    canDo: 'Can check in, make a request and raise a problem politely',
    themes: ['voyage'],
    prereqUnitIds: ['a2.13'],
  },
  {
    id: 'a2.30',
    seq: 29,
    title: 'Le travail & les métiers',
    sub: 'job titles & workplace vocabulary',
    canDo: 'Can say what they do for a living and describe a workplace',
    themes: ['metiers'],
    prereqUnitIds: ['a1.06'],
  },
  {
    id: 'a2.31',
    seq: 30,
    title: "L'école & les études",
    sub: 'subjects, grades & academic vocabulary',
    canDo: 'Can talk about what they studied, which subjects and how it went',
    themes: ['ecole'],
    prereqUnitIds: ['a2.05'],
  },
  {
    id: 'a2.32',
    seq: 31,
    title: 'La technologie',
    sub: 'smartphone, internet & digital life',
    canDo: 'Can talk about their phone, the internet and everyday digital tasks',
    themes: ['technologie'],
    prereqUnitIds: ['a2.01'],
  },
  {
    id: 'a2.08',
    seq: 32,
    title: 'Comparatifs & superlatifs',
    sub: 'plus / moins / aussi que — le plus, le moins',
    canDo: 'Can compare two things and say which is the most or the least',
    prereqUnitIds: ['a2.03'],
  },
  {
    id: 'a2.33',
    seq: 33,
    title: 'Démonstratifs',
    sub: 'ce, cet, cette, ces — celui, celle, ceux',
    canDo: 'Can point something out with ce and cette and replace it with celui and celle',
    prereqUnitIds: ['a1.03'],
  },
  {
    id: 'a2.34',
    seq: 34,
    title: 'Pronoms possessifs',
    sub: 'le mien, le tien, le sien — the full paradigm',
    canDo: 'Can say mine, yours and theirs with the right gender and number',
    prereqUnitIds: ['a1.17'],
  },
  {
    id: 'a2.35',
    seq: 35,
    title: 'Bilan A2',
    sub: 'A2 capstone — everything, put together',
    canDo: 'Can hold a conversation about their life past and present using the whole A2 band: verbs in three tenses, pronouns, and the everyday situations',
    prereqUnitIds: ['a2.21', 'a2.25', 'a2.27', 'a2.32'],
  },
];

const CURRICULUM: { track: Track; units: SpineUnit[] }[] = [
  { track: 'sons', units: SONS },
  { track: 'a1', units: A1 },
  { track: 'a2', units: A2 },
];

// ── Apply ───────────────────────────────────────────────────────────────────

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. The curriculum is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  // House style, same rules the seed tests enforce. Checked before the DB is
  // touched so a banned character can never reach a transaction.
  // Titles are held to the em-dash ban; `sub` lines are exempt because every
  // shipped sub already uses one as a label separator ("pure vowels — a, e, i"),
  // which is the documented exception to the rule.
  const titles = CURRICULUM.flatMap((c) => c.units.map((u) => u.title)).join('\n');
  if (titles.includes('—')) {
    die(`em dash found in a unit title, the house style bans it:\n` +
        CURRICULUM.flatMap((c) => c.units).filter((u) => u.title.includes('—'))
          .map((u) => `  ${u.id}: ${u.title}`).join('\n'));
  }
  const authored = JSON.stringify(CURRICULUM);
  if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

  // Structural guards over the declaration itself — these catch an authoring
  // slip in THIS file, before it can become a scrambled Den.
  const all = CURRICULUM.flatMap((c) => c.units.map((u) => ({ ...u, track: c.track })));
  const ids = all.map((u) => u.id);
  const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupeIds.length) die(`duplicate unit ids: ${[...new Set(dupeIds)].join(', ')}`);

  for (const { track, units } of CURRICULUM) {
    const seqs = units.map((u) => u.seq).sort((a, b) => a - b);
    const want = Array.from({ length: units.length }, (_, i) => i + 1);
    if (JSON.stringify(seqs) !== JSON.stringify(want)) {
      die(`track ${track} seqs are not 1..${units.length}: ${seqs.join(',')}`);
    }
    for (const u of units) {
      if (u.id.split('.')[0] !== track) die(`${u.id} is declared under track ${track} but its id says otherwise`);
    }
  }

  const known = new Set(ids);
  for (const u of all) {
    for (const p of u.prereqUnitIds ?? []) {
      if (!known.has(p)) die(`${u.id} requires unknown unit ${p}`);
      if (p === u.id) die(`${u.id} lists itself as a prerequisite`);
    }
  }

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    const { rows } = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit'`
    );
    const byId = new Map(rows.map((r) => [r.body.id, r.body]));

    // A unit in the DB that this file does not cover would keep rendering in
    // the Den at whatever seq it holds, colliding with the new ordering. That
    // is exactly the scrambled state this pass exists to end, so it is fatal
    // rather than a warning. (b1+ units carry no track and never reach the
    // Den's three columns, so they are correctly out of scope.)
    const uncovered = [...byId.values()]
      .filter((u) => u.track === 'sons' || u.track === 'a1' || u.track === 'a2')
      .filter((u) => !known.has(u.id))
      .map((u) => u.id);
    if (uncovered.length) {
      die(`DB has Den units this curriculum does not cover: ${uncovered.join(', ')}\n` +
          `  Either add them here or move them off the sons/a1/a2 tracks.`);
    }

    // Build the post-state and validate BEFORE writing anything. Existing rows
    // keep every field this pass does not own — above all lessonIds, which is
    // what links a unit to authored content.
    const next = new Map<string, Unit>();
    for (const u of all) {
      const prev = byId.get(u.id);
      next.set(u.id, {
        ...(prev ?? {}),
        id: u.id,
        track: u.track,
        level: u.track,
        seq: u.seq,
        title: u.title,
        sub: u.sub,
        canDo: u.canDo,
        lessonIds: prev?.lessonIds ?? [],
        ...(u.themes ? { themes: u.themes } : {}),
        ...(u.prereqUnitIds ? { prereqUnitIds: u.prereqUnitIds } : {}),
      } as Unit);
    }

    const issues = [...next.values()].flatMap((u) => validateUnit(u, u.id));
    if (issues.length) {
      die(`post-state fails validateUnit:\n${issues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);
    }

    // Report the plan, split by what actually changes.
    const created = all.filter((u) => !byId.has(u.id));
    const moved = all.filter((u) => byId.has(u.id) && byId.get(u.id)!.seq !== u.seq);
    const retitled = all.filter((u) => {
      const p = byId.get(u.id);
      return p && (p.title !== u.title || p.sub !== u.sub);
    });

    for (const { track, units } of CURRICULUM) {
      const nNew = units.filter((u) => !byId.has(u.id)).length;
      console.log(`\n  ${track.toUpperCase()}: ${units.length} units (${nNew} new)`);
      for (const u of units) {
        const prev = byId.get(u.id);
        const mark = !prev ? 'NEW ' : prev.seq !== u.seq ? `${String(prev.seq).padStart(2)}→` : '    ';
        const lessons = prev?.lessonIds?.length ?? 0;
        console.log(
          `    ${mark} seq ${String(u.seq).padStart(2, '0')}  ${u.id.padEnd(8)} ${u.title.padEnd(32)}` +
          `${lessons ? ` · ${lessons} lesson${lessons > 1 ? 's' : ''}` : ' · SOON'}`
        );
      }
    }

    console.log(
      `\n  summary: ${next.size} units total · ${created.length} created · ` +
      `${moved.length} resequenced · ${retitled.length} retitled`
    );
    const withLessons = [...next.values()].filter((u) => (u.lessonIds ?? []).length > 0).length;
    console.log(`  ${withLessons} units have a lesson; ${next.size - withLessons} render as SOON until authored.`);

    if (DRY_RUN) {
      console.log('\n✓ dry run — post-state valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    for (const [id, body] of next) {
      if (byId.has(id)) {
        const res = await client.query(
          `update content_units set body = $1::jsonb, title = $2, level = $3, updated_at = now()
            where kind = 'curriculum_unit' and body->>'id' = $4`,
          [JSON.stringify(body), body.title, body.level ?? null, id]
        );
        if (res.rowCount !== 1) {
          await client.query('rollback');
          die(`update for ${id} touched ${res.rowCount} rows — rolled back, nothing changed`);
        }
      } else {
        await client.query(
          `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
           values ($1,$2,'curriculum_unit',$3,'fr','published',$4::jsonb,1,'human')
           on conflict (slug) do update set
             title=excluded.title, level=excluded.level, body=excluded.body,
             status='published', updated_at=now()`,
          [id, body.title, body.level ?? null, JSON.stringify(body)]
        );
      }
    }
    await client.query('commit');

    console.log(
      `\n✓ curriculum spine applied: ${next.size} units (SONS 10 · A1 30 · A2 35), ` +
      `${created.length} created.\n` +
      `  Next: pnpm content:publish to ship it OTA. Check git diff on seed.json first.\n` +
      `  Note: update-spine.ts now covers only 43 of these units and will fail its\n` +
      `  own coverage assertion until its SPINE map is extended.\n`
    );
  } catch (e) {
    await client.query('rollback').catch(() => {});
    throw e;
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
