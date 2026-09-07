// The a2.03 corpus: what this lesson authored, what it imports, what it refused
// to touch, and the claims its brief got wrong.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 33 authored entries below and
// for every respelling a2.03 puts on a screen. The lesson body reads `fr`,
// `ipa`, `respell` and `en` FROM HERE and never restates them.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE GENERAL PRINCIPLE
//
//  FOUR WRITTEN FORMS, TWO SOUNDS. AND ONE PATTERN THAT HAS ONE OF EACH.
//
//  a1.13 and a1.14 both already print a four-form grid, so the grid is not what
//  this lesson owns and building the whole thing around it would have produced
//  a third copy of a screen the learner has seen twice. What neither of them
//  taught, and what no lesson in this project teaches anywhere, is the two
//  NAMED FAMILIES: -eux going to -euse, and -if going to -ive. Measured across
//  every shipped lesson body: `heureux` 0 · `sportif` 0 · `actif` 0 in all three
//  prerequisites, and `sportif` 0 in all forty-nine lessons in the seed.
//
//  So the Owns is the family, in the doctrine §B.5 sense: a pattern that
//  generalises to items the lesson never taught. Act 3 is seven missions and the
//  grid act is five. The last mission before the exam hands the learner
//  `courageux`, `actif` and `turquoise` cold, and round 4 of the exam makes them
//  type forms of adjectives that appear on no card, in no deck and in no
//  vocabulary anywhere in this lesson.
// ══════════════════════════════════════════════════════════════════════════
//
// ── WHAT THE BRIEF GOT WRONG, MEASURED 2026-08-13 ─────────────────────────
//
// 1. "orange and marron are the invariable colours this lesson turns on, and
//    every orange row carries gender. Importing one puts a gendered single-word
//    row in your itemIds and moves a1.03's printed figures."
//
//    FALSE, AND IT IS THE CLAIM THAT WOULD HAVE COST THE MOST. There are two
//    ungendered rows and they are the two this lesson wants:
//
//      fr.sons.couleurs.009   orange   oh-RAHⁿZH   gender NULL   published
//      fr.sons.couleurs.011   marron   mah-ROHⁿ    gender NULL   published
//
//    The gendered rows are all the FRUIT: `une orange` (fr.a1.cuisine.022),
//    `l'orange` (fr.a1.marche.048), and fr.sons.consonnes.055, which is a second
//    `orange` carrying gender=f in a different theme. The colour and the fruit
//    are different rows and the brief collapsed them. Nothing was withdrawn,
//    a1.03's ending population is untouched, and `endingPopulation` is run in
//    the batch anyway rather than argued about.
//
// 2. "The four-form grid is the hero and it is the only thing the lesson has
//    that a1.14 did not."
//
//    FALSE IN BOTH HALVES, AND IT RESHAPED THE LESSON. a1.14 ships `s07-grid`
//    "One Word, Four Shapes" and a1.13 ships `s07-grid` "One Colour, Four
//    Shapes". Counted in the stored bodies: a1.14 says `grands` 20 times and
//    `grandes` 13; a1.13 says "four shapes" 12 times. The grid is the learner's
//    THIRD, and it is act 2 rather than the lesson.
//
//    What the grid can do that neither predecessor's could is hold FOUR PATTERNS
//    at once, which is the thing that makes an unseen adjective agreeable. That
//    is why it is a `tapTable` of four rows and not a table of four cells.
//
// 3. "beau, nouveau, vieux and their bel/nouvel/vieil forms are a2.16.
//    Teaching any of their forms is not [allowed]. They are the most famous
//    irregular adjectives in French and the temptation is total."
//
//    THE PROHIBITION IS RIGHT AND THE REASON GIVEN FOR IT IS NOT. There is no
//    temptation, because BOTH PREREQUISITES ALREADY TEACH THEM, heavily:
//
//      string    a1.14   a1.16
//      beau       107      70
//      belle       58      28
//      bel         39      19
//      vieux      136      49
//      vieille     61       4
//      vieil      120      29
//      nouvel       3      21
//
//    a1.14's grammarIntroduced claims "Irregular feminine formation by
//    suppletion: beau to belle, vieux to vieille" and "The third masculine form
//    before a vowel: bel and vieil" in as many words. a1.16 claims the
//    pre-vocalic forms as position-bound. So a2.16 at seq 11 is a
//    systematisation of something taught twice at A1, not a first teach, and
//    a2.03's job is to keep OUT of it rather than to resist wanting it. The
//    guard ships unchanged; only the reason in its comment changed.
//
// 4. "One: the invariable class looks like the rule failing. marron, orange,
//    and every colour compound do not agree at all... Teach them as a named
//    category, not as exceptions."
//
//    a1.13 ALREADY DID EXACTLY THIS, AND ITS REFRAME IS THE SENTENCE THE BRIEF
//    ASKS a2.03 TO WRITE. Measured in the stored body:
//
//      a1.13.l1 reframe   "Colours agree. Things that became colours do not."
//      marron     x176      orange      x115      invariable   x18
//      chestnut    x27      foncé        x15      clair         x6
//      sections   s14-orange "The Fruit And The Colour", s15-marron "Marron Is
//                 A Chestnut"
//      grammarIntroduced  "Invariable colour adjectives derived from nouns:
//                 marron and orange", "Invariable compound colour adjectives:
//                 vert pomme, vert foncé, bleu clair"
//
//    Restating it would have been the third telling. So act 4 does the A2 move
//    instead: it NAMES a1.13, states the class as a rule with a reason, and then
//    hands the learner four colours a1.13 never released — `kaki`, `crème`,
//    `bleu marine`, `bleu clair` — and one, `turquoise`, that no screen in this
//    lesson prints at all. a1.13's 53 itemIds were read to establish that: it
//    releases `marron`, `orange`, `vert foncé` and `vert pomme` and none of the
//    other four.
//
// 5. "-eux → -euse changes the sound. Almost no other agreement in French does."
//
//    TRUE BUT MUCH TOO NARROW, AND THE WIDER VERSION IS THE BETTER LESSON. The
//    default family changes the sound too (grand /gʁɑ̃/ to grande /gʁɑ̃d/), and
//    so does -if. What is actually true of all three, and false of none of them:
//
//      THE FEMININE IS AUDIBLE IN EVERY FAMILY. THE PLURAL IS AUDIBLE IN NONE.
//
//    Four written forms and two sounds, three times over; and one written form
//    and one sound for the invariable class. That is the listening section's
//    whole claim and it bookends a2.01 exactly, as the brief asks, but on a
//    sharper edge than "these two are the loud ones".
//
// 6. "sportif/sportive are genuinely absent; everything else exists."
//
//    TRUE AS FAR AS HEADWORDS GO, AND "ABSENT" IS AGAIN NOT "NOWHERE" (a2.15
//    §1). Both plurals are already published as sentences:
//
//      fr.a2.description-personnes-objets.003   "Les jumeaux sont sportifs."
//      fr.a2.description-personnes-objets.004   "Les jumelles sont sportives."
//
//    NEITHER HAS A RESPELLING, so both reach a card the learner cannot say
//    (a2.13 §1). This build imports both and supplies the respellings rather
//    than authoring a third and fourth copy of the same sentence.
//
//    And ONE MORE HEADWORD IS ABSENT that neither the brief nor corrections §2
//    lists: `sérieuse`, 0 rows at any status, against `sérieux`'s three. So this
//    build authors THREE headwords, not two.
//
// 7. "adjectifs has 0 rows in Postgres — the theme does not exist... THE THEME
//    DECISION IS STILL OPEN AND IT IS YOURS."
//
//    TRUE, AND THE QUESTION WAS ASKED THE WRONG WAY ROUND. a1.14 and a1.16 have
//    a home and the ledger never named it: `adjectifs-essentiels`, 645 published
//    rows, of which a1.14's corpus file references 93 and a1.16's 77. No theme
//    is created. This lesson opens `fr.a2.adjectifs-essentiels`, a new LEVEL
//    NAMESPACE inside a live theme, which `fr.a2.description-personnes-objets`
//    (120 rows) already sets the precedent for. Ledger §3, amended.
//
// ── WHAT THIS BUILD FOUND THAT NO BRIEF MENTIONS ──────────────────────────
//
// 8. THE -IF FAMILY HAS ALMOST NO CORPUS FOOTPRINT, AND THE -EUX FAMILY HAS A
//    LARGE ONE. Counted in the home theme, single-word rows only:
//
//      -eux headwords in adjectifs-essentiels    25
//      -if  headwords in adjectifs-essentiels     1     (impulsif)
//
//    That asymmetry is real and the lesson does not pretend otherwise: -eux gets
//    the family bank and -if gets the minimal pair, in the same way a2.15 gave
//    battre two missions because two was what it earned. It is also why `actif`
//    is one of the three cold-test adjectives: the -if family needs a member the
//    learner can be handed, and the corpus has almost none to import.
//
// 9. THE GRID MUST NOT CONTAIN A LIAISON, AND THAT PICKED THE HEAD ADJECTIVE.
//
//    `Ils sont heureux.` liaises: the t of `sont` is pronounced into `heureux`.
//    Correct notation for that needs U+203F, which renders as a low underscore
//    on a Pixel 6 and which invariants §2 forbids introducing. Writing the
//    liaison without the tie on the hero screen would teach a sound the notation
//    does not mark, and dropping it would teach a pronunciation nobody uses.
//
//    So `sérieux` heads the -eux family rather than `heureux`: it is
//    consonant-initial, it already lives in the HOME theme
//    (fr.sons.adjectifs-essentiels.037), and its feminine did not exist, which is
//    the row a2.17 needs. All sixteen cells are liaison-free and the batch
//    asserts it. `heureux` and `heureuse` are still imported and still carry the
//    family screen; they are simply not the frame.
//
// 10. `Elle est grande.` IS A NASAL THE CHECKER CANNOT SEE, AND ITS PLURAL IS
//     ONE IT CAN. Corrections §6's shape, on this lesson's own hero row:
//
//       el eh GRAHⁿD      hasPlainNasalFor -> FALSE   BLIND
//       el sohⁿ GRAHⁿD    hasPlainNasalFor -> TRUE    seen, and it fires on sohⁿ
//
//     The second is a2.11's `entendre` exactly: the checker sees the FIRST nasal,
//     so a future author who breaks only `GRAHⁿD` gets a green run on both rows.
//     `GRAHⁿD` is asserted by name in all three layers, in both rows.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/** Every authored row lands in `adjectifs-essentiels`, which is where a1.14 and
 *  a1.16 already live. Ledger §3, decided by this build. */
export const THEME = 'adjectifs-essentiels';

/** The unit, byte for byte from Postgres on 2026-08-13 via
 *  `scripts/_a2_preflight.ts`. Corrections §1. This one matches the brief's
 *  corrected block exactly. */
export const UNIT = {
  id: 'a2.03',
  seq: 10,
  title: 'Adjective Agreement',
  sub: "L'accord des adjectifs",
  canDo: 'Can agree any adjective in all four forms and spot the invariable ones',
  prereqUnitIds: ['a1.14', 'a1.16'] as const,
} as const;

/** `fr.a2.adjectifs-essentiels` held exactly this many rows when a2.03 claimed
 *  `.001`: the namespace did not exist. Ledger §10 says the row COUNT is the
 *  only signal left and the maximum tells you nothing; here the count is the
 *  easy case, because ANY row inside the block that this build does not own is
 *  somebody else landing in it. The theme-wide figure is checked too, and
 *  narrowed the way ledger §a2.14-12 asks: a total that has GROWN by somebody
 *  else's allocation is a report, one that has SHRUNK is fatal. */
export const ROW_COUNT_BEFORE = 0;
export const THEME_COUNT_BEFORE = 645;
export const ID_BLOCK = { from: 'fr.a2.adjectifs-essentiels.001', to: 'fr.a2.adjectifs-essentiels.040' } as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE FOUR PATTERNS
 * ═══════════════════════════════════════════════════════════════════════ */

export type Pattern = 'default' | 'eux' | 'if' | 'invariable';

/** The order the learner meets them, which is also the row order on the grid.
 *  `invariable` is LAST deliberately: it only reads as a class once three
 *  patterns that do change are on the screen above it. */
export const PATTERN_ORDER: readonly Pattern[] = ['default', 'eux', 'if', 'invariable'];

export const PATTERN_LABEL: Record<Pattern, string> = {
  default: 'the ordinary one',
  eux: 'ends in -eux',
  if: 'ends in -if',
  invariable: 'never changes',
};

/** The four cells of one pattern, in reading order. The grid, the sheet, the
 *  cards and the exam all read THIS; a2.13 §6.2 shipped a grid that disagreed
 *  with the rows the learner was scored on, and a2.14 §5 found the same shape
 *  one file apart in the respellings. */
export type Cell = 'm.sg' | 'f.sg' | 'm.pl' | 'f.pl';
export const CELL_ORDER: readonly Cell[] = ['m.sg', 'f.sg', 'm.pl', 'f.pl'];
export const CELL_SUBJECT: Record<Cell, string> = {
  'm.sg': 'Il est',
  'f.sg': 'Elle est',
  'm.pl': 'Ils sont',
  'f.pl': 'Elles sont',
};

/** Four patterns across, four cells down. `forms` is the ADJECTIVE ALONE so a
 *  grid can print a cell without repeating the frame in every box; `respells`
 *  likewise. Both are asserted against the authored rows in all three layers. */
export const GRID: readonly {
  cell: Cell;
  forms: Record<Pattern, string>;
  respells: Record<Pattern, string>;
}[] = [
  {
    cell: 'm.sg',
    forms: { default: 'grand', eux: 'sérieux', if: 'sportif', invariable: 'marron' },
    respells: { default: 'GRAHⁿ', eux: 'say-RYUH', if: 'spor-TEEF', invariable: 'mah-ROHⁿ' },
  },
  {
    cell: 'f.sg',
    forms: { default: 'grande', eux: 'sérieuse', if: 'sportive', invariable: 'marron' },
    respells: { default: 'GRAHⁿD', eux: 'say-RYUHZ', if: 'spor-TEEV', invariable: 'mah-ROHⁿ' },
  },
  {
    cell: 'm.pl',
    forms: { default: 'grands', eux: 'sérieux', if: 'sportifs', invariable: 'marron' },
    respells: { default: 'GRAHⁿ', eux: 'say-RYUH', if: 'spor-TEEF', invariable: 'mah-ROHⁿ' },
  },
  {
    cell: 'f.pl',
    forms: { default: 'grandes', eux: 'sérieuses', if: 'sportives', invariable: 'marron' },
    respells: { default: 'GRAHⁿD', eux: 'say-RYUHZ', if: 'spor-TEEV', invariable: 'mah-ROHⁿ' },
  },
];

/** THE ODDITY, AND THE ASSERTION THAT STOPS A FUTURE AUTHOR ADDING AN s.
 *
 *  An adjective already ending in -x or -s takes NOTHING in the masculine
 *  plural, so `sérieux` is the same word in two of its four cells. This is
 *  DELIBERATE and it is not a copy-paste error: `sérieuxs` and `sérieuxes` are
 *  not French and never have been.
 *
 *  a1.14 already owns the fact for two specific words — its grammarIntroduced
 *  says "Invariance of the masculine plural on adjectives already ending in -s
 *  or -x: vieux, mauvais" — so this lesson does not introduce it. It
 *  GENERALISES it from two words to a family of twenty-five, which is the whole
 *  difference between a1.14's lesson and this one, and it names a1.14 on the
 *  screen that does it. */
export const IDENTICAL_CELLS: readonly [Cell, Cell] = ['m.sg', 'm.pl'];
export const IDENTICAL_PATTERN: Pattern = 'eux';
export const IDENTICAL_UNIT = 'a1.14';
export const IDENTICAL_CLAIM =
  'sérieux is already finished. A word that ends in -x has nowhere to put the plural s, so the masculine singular and the masculine plural are the same word.';
/** The wrong form a learner produces, and the one guard that must never see it
 *  on a learner surface except as a marked error. */
export const OVER_PLURALISED = 'sérieuxs';

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT IS AUDIBLE, WHICH IS THE a2.01 BOOKEND
 * ═══════════════════════════════════════════════════════════════════════ */

export const EAR_UNIT = 'a2.01';
/** a2.01's reframe, quoted rather than paraphrased. Doctrine §B.7: from seq 14
 *  onward name the earlier instance by unit id, and this band has found it worth
 *  doing earlier. */
export const A201_REFRAME = 'The spelling changes so the sound does not.';

/** Four written forms, two sounds. Measured per pattern and asserted, because
 *  it is the claim the listening section is built on and it is the one a later
 *  author is most likely to soften into "sometimes you can hear it". */
export const SOUND_COUNT: Record<Pattern, number> = { default: 2, eux: 2, if: 2, invariable: 1 };
export const FORM_COUNT: Record<Pattern, number> = { default: 4, eux: 4, if: 4, invariable: 1 };
export const AUDIBLE_CELL: Cell = 'f.sg';
export const SILENT_CELL: Cell = 'm.pl';
export const EAR_CLAIM =
  'The feminine is something you can hear in all three. The plural is something you can hear in none of them.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE INVARIABLE CLASS
 * ═══════════════════════════════════════════════════════════════════════ */

export const INVARIABLE_UNIT = 'a1.13';
/** a1.13's reframe, quoted. Act 4 opens by naming it rather than by restating
 *  its content in different words. */
export const A113_REFRAME = 'Colours agree. Things that became colours do not.';
/** The rule as a rule, with the reason attached. Brief: "These are the ones that
 *  never change" is a rule; "these are irregular" is an apology. */
export const INVARIABLE_RULE =
  'A colour borrowed from a thing keeps the thing’s shape. A chestnut is a chestnut whatever it is painted on, so marron never grows an e or an s, and neither does any colour made of two words.';
/** The four a1.13 never released, read off its own 53 itemIds. These are what
 *  makes act 4 new rather than a third telling. */
export const NEW_INVARIABLES = ['kaki', 'crème', 'bleu marine', 'bleu clair'] as const;
/** The two a1.13 did release, named so the lesson can say so out loud. */
export const KNOWN_INVARIABLES = ['marron', 'orange'] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE GENERALISATION TEST
 *
 *  Doctrine §B.1: a mission that lists the forms has taught nothing a table
 *  cannot. These three appear in EXACTLY TWO PLACES — the last mission before
 *  the exam, and the exam — and in no corpus row, no itemId, no deck release,
 *  no term and on no card. The batch asserts both directions, because a guard
 *  whose exception list has quietly emptied has stopped guarding.
 * ═══════════════════════════════════════════════════════════════════════ */

export const UNSEEN: readonly {
  masculine: string;
  pattern: Pattern;
  forms: Record<Cell, string>;
  en: string;
  liveRow: string | null;
}[] = [
  {
    masculine: 'courageux',
    pattern: 'eux',
    forms: { 'm.sg': 'courageux', 'f.sg': 'courageuse', 'm.pl': 'courageux', 'f.pl': 'courageuses' },
    en: 'brave',
    liveRow: 'fr.sons.adjectifs-essentiels.094',
  },
  {
    masculine: 'actif',
    pattern: 'if',
    forms: { 'm.sg': 'actif', 'f.sg': 'active', 'm.pl': 'actifs', 'f.pl': 'actives' },
    en: 'active',
    liveRow: 'fr.sons.muettes.027',
  },
  {
    masculine: 'turquoise',
    pattern: 'invariable',
    forms: { 'm.sg': 'turquoise', 'f.sg': 'turquoise', 'm.pl': 'turquoise', 'f.pl': 'turquoise' },
    en: 'turquoise',
    liveRow: 'fr.sons.couleurs.013',
  },
];

export const UNSEEN_MASCULINES = UNSEEN.map((u) => u.masculine);
/** Every form of every cold adjective, which is what the batch searches for. */
export const UNSEEN_FORMS: readonly string[] = [
  ...new Set(UNSEEN.flatMap((u) => Object.values(u.forms))),
];
/** The only two sections allowed to print any of them. */
export const UNSEEN_HOMES = ['s15-cold', 's24-quiz'] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT IS LEFT TO NEIGHBOURS
 * ═══════════════════════════════════════════════════════════════════════ */

/** a2.16, seq 11, immediately after. Naming them as coming next is allowed;
 *  printing any of their forms is not. See header item 3: both prerequisites
 *  already teach them, so a2.16's lesson is a systematisation and this guard is
 *  what keeps it worth building. */
export const BEAU_UNIT = 'a2.16';
export const BEAU_FORMS = [
  'beau', 'belle', 'beaux', 'belles', 'bel',
  'nouveau', 'nouvelle', 'nouveaux', 'nouvelles', 'nouvel',
  'vieux', 'vieille', 'vieilles', 'vieil',
] as const;

/** a2.17, seq 12, the next lesson but one, and it depends on this one. The
 *  feminine forms it imports are authored here CLEANLY and deliberately:
 *  `sérieuse` and `sportive` did not exist and now do, and `heureuse` is
 *  repaired to sit beside `heureux`. -ment is taught nowhere here. */
export const ADVERB_UNIT = 'a2.17';
export const ADVERB_SUFFIX = '-ment';
export const ADVERB_FEEDS = ['sérieuse', 'sportive', 'heureuse', 'active'] as const;

/** a1.16, seq 18 at A1, fully shipped. One recap line and a pointer, no more. */
export const PLACEMENT_UNIT = 'a1.16';
export const PLACEMENT_LINE = `Where the adjective goes is ${unitRef('a1.16')} and it has not changed: after the noun unless it is one of the ten that go in front.`;

/** a2.08, seq 32. Not here. */
export const COMPARATIVE_UNIT = 'a2.08';
export const COMPARATIVE_FORMS = ['plus grand', 'moins grand', 'le plus grand', 'aussi grand', 'meilleur'] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME
 * ═══════════════════════════════════════════════════════════════════════ */

/** A production rule, doctrine §B.4: short enough to run in the half-second
 *  between the noun and the adjective. You already have the masculine; the
 *  question is never "does this agree" but "which of four patterns is it in",
 *  and the masculine ending is the whole answer. */
export const REFRAME = 'The plain form tells you the other three.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'The masculine tells you the other three.',
    why: 'The same rule, and the wrong register for this lesson. The grid columns are `Plain form`, `A woman`, `Several`, `Several women`, deliberately concrete; a reframe that says `the masculine` gives the same thing two names on one screen. `masculine` is house vocabulary — a1.13 uses it fifteen times — so this was a copy decision rather than a jargon one.',
  },
  {
    text: 'Every adjective has four forms. Your job is to work out which pattern it follows.',
    why: 'The brief\'s candidate. Two sentences, and the second is a description of the lesson rather than a rule anybody can run mid-utterance. Doctrine §B.4: if it needs a table to apply, it is a term.',
  },
  {
    text: 'Adjectives agree with the noun.',
    why: 'a1.13\'s and a1.14\'s lesson, already taught. a1.13\'s own reframe is "Colours agree. Things that became colours do not." Restating it means this lesson has nothing new.',
  },
  {
    text: 'When in doubt, put it after.',
    why: `${Cap(unitRef('a1.16'))}\'s reframe verbatim. Placement is not this lesson\'s subject.`,
  },
  {
    text: 'Four forms, two sounds.',
    why: 'True, and it is the listening act\'s claim rather than the lesson\'s. It tells the learner what to expect and not what to do, and it is false of the invariable pattern, which has one of each.',
  },
];

/** The move the reframe cashes out to, said once in the terms and once in the
 *  sheet. */
export const THE_MOVE =
  'Read the last two letters of the masculine. -eux, -if, a colour that used to be a thing, or none of those. That is the whole decision, and the other three forms follow from it without another thought.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE ROWS
 * ═══════════════════════════════════════════════════════════════════════ */

type Role = 'grid' | 'naming' | 'family' | 'invariable' | 'contrast' | 'scene';

export type AaRow = Omit<Item, 'drills'> & {
  drills: string[];
  role: Role;
  /** Set on `grid` rows only, so a guard can find the cell it is looking for
   *  rather than parsing the French. */
  pattern?: Pattern;
  cell?: Cell;
};

const W = (
  id: string, fr: string, en: string, respell: string, ipa: string,
  role: Role, drills: string[], notes?: string,
): AaRow => ({
  id, kind: 'word', level: 'a2', theme: THEME, fr, en, ipa, respell,
  notes, tags: ['adjectifs-essentiels', 'accord'], drills, version: 1, role,
});

const S = (
  id: string, fr: string, en: string, respell: string, ipa: string,
  role: Role, drills: string[], tags: string[], notes: string,
  pattern?: Pattern, cell?: Cell,
): AaRow => ({
  id, kind: 'sentence', level: 'a2', theme: THEME, fr, en, ipa, respell,
  notes, tags, drills, version: 1, role, pattern, cell,
});

/** A row carries `dictation` only if `dicteeMode()` puts it in LETTERS mode.
 *  Corrections §4: WORD mode hands every real word over pre-spelled, so a lesson
 *  about a spelling tested in word mode is testing nothing. The batch runs the
 *  real `dicteeMode` over every row carrying this drill and dies if one of them
 *  is words. */
const GRID_DRILLS = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];
/** The same, for the two grid cells that do not fit. Eighteen letters, and there
 *  is no subject shorter than `Elles sont`. */
const GRID_DRILLS_NO_DICTEE = ['sentence', 'flashcard', 'voiceflash', 'review'];
const SENT_DRILLS = ['sentence', 'flashcard', 'voiceflash', 'review'];

/** THE SIXTEEN CELLS, IN ONE FRAME.
 *
 *  Corrections §3, which has held for six builds running: the corpus is full of
 *  the forms and holds no minimal pairs, because every published sentence was
 *  written for its own theme and carries its own object. Three of these sixteen
 *  DO exist elsewhere — `Il est grand.` twice in description-personnes-objets,
 *  `Ils sont grands.` once, and `Elle est grande.` in metiers — and two of the
 *  three have no respelling at all. A hero grid assembled out of four themes
 *  would have carried three cards the learner cannot say and four different
 *  subjects. So the paradigm is authored, in one frame, and the three live rows
 *  are recorded in READ_NOT_IMPORTED rather than quietly ignored.
 *
 *  THE FRAME IS THE SUBJECT PRONOUN AND NOTHING ELSE. It is the shortest thing
 *  that fixes gender and number, which is what puts fourteen of the sixteen in
 *  LETTERS mode for the dictée (corrections §4); a noun subject costs four to
 *  six letters and would have put every plural cell into WORD mode, where every
 *  real word is handed over pre-spelled. a2.15 §4 asks which half of the
 *  sentence the lesson is about: here it is the adjective, so the front of the
 *  sentence carries the grammar and nothing else. */
export const ACCORD_ADJECTIFS: AaRow[] = [
  /* ── default ── */
  S('fr.a2.adjectifs-essentiels.001', 'Il est grand.', 'He is tall.', 'eel eh GRAHⁿ', '/il ɛ ɡʁɑ̃/', 'grid', GRID_DRILLS, ['accord', 'accord-defaut'], 'The form you start from. Nothing has been added to it yet.', 'default', 'm.sg'),
  S('fr.a2.adjectifs-essentiels.002', 'Elle est grande.', 'She is tall.', 'el eh GRAHⁿD', '/ɛl ɛ ɡʁɑ̃d/', 'grid', GRID_DRILLS, ['accord', 'accord-defaut', 'accord-genre'], 'An e arrives and the d wakes up. This is the one you can hear.', 'default', 'f.sg'),
  S('fr.a2.adjectifs-essentiels.003', 'Ils sont grands.', 'They are tall.', 'eel sohⁿ GRAHⁿ', '/il sɔ̃ ɡʁɑ̃/', 'grid', GRID_DRILLS, ['accord', 'accord-defaut', 'accord-nombre'], 'An s arrives and nothing at all happens to the sound.', 'default', 'm.pl'),
  S('fr.a2.adjectifs-essentiels.004', 'Elles sont grandes.', 'They are tall.', 'el sohⁿ GRAHⁿD', '/ɛl sɔ̃ ɡʁɑ̃d/', 'grid', GRID_DRILLS, ['accord', 'accord-defaut', 'accord-nombre'], 'Both endings at once, and it sounds exactly like the feminine singular.', 'default', 'f.pl'),
  /* ── -eux ── */
  S('fr.a2.adjectifs-essentiels.005', 'Il est sérieux.', 'He is serious.', 'eel eh say-RYUH', '/il ɛ se.ʁjø/', 'grid', GRID_DRILLS, ['accord', 'accord-eux'], 'Ends in x. Remember that, because it decides two of the next three.', 'eux', 'm.sg'),
  S('fr.a2.adjectifs-essentiels.006', 'Elle est sérieuse.', 'She is serious.', 'el eh say-RYUHZ', '/ɛl ɛ se.ʁjøz/', 'grid', GRID_DRILLS, ['accord', 'accord-eux', 'accord-genre'], 'The x becomes se, and the ending gains a buzz you can hear across a room.', 'eux', 'f.sg'),
  S('fr.a2.adjectifs-essentiels.007', 'Ils sont sérieux.', 'They are serious.', 'eel sohⁿ say-RYUH', '/il sɔ̃ se.ʁjø/', 'grid', GRID_DRILLS, ['accord', 'accord-eux', 'accord-nombre'], 'The same word as the singular. There is no room after an x for anything else.', 'eux', 'm.pl'),
  S('fr.a2.adjectifs-essentiels.008', 'Elles sont sérieuses.', 'They are serious.', 'el sohⁿ say-RYUHZ', '/ɛl sɔ̃ se.ʁjøz/', 'grid', GRID_DRILLS_NO_DICTEE, ['accord', 'accord-eux', 'accord-nombre'], 'Once the feminine has arrived the plural s goes on the end of it as usual.', 'eux', 'f.pl'),
  /* ── -if ── */
  S('fr.a2.adjectifs-essentiels.009', 'Il est sportif.', 'He is sporty.', 'eel eh spor-TEEF', '/il ɛ spɔʁ.tif/', 'grid', GRID_DRILLS, ['accord', 'accord-if'], 'Ends in f, and the f is said. Both of those matter in the next cell.', 'if', 'm.sg'),
  S('fr.a2.adjectifs-essentiels.010', 'Elle est sportive.', 'She is sporty.', 'el eh spor-TEEV', '/ɛl ɛ spɔʁ.tiv/', 'grid', GRID_DRILLS, ['accord', 'accord-if', 'accord-genre'], 'The f turns into a v. Nothing else in the word moves.', 'if', 'f.sg'),
  S('fr.a2.adjectifs-essentiels.011', 'Ils sont sportifs.', 'They are sporty.', 'eel sohⁿ spor-TEEF', '/il sɔ̃ spɔʁ.tif/', 'grid', GRID_DRILLS, ['accord', 'accord-if', 'accord-nombre'], 'An ordinary s, and it is silent like every other plural s.', 'if', 'm.pl'),
  S('fr.a2.adjectifs-essentiels.012', 'Elles sont sportives.', 'They are sporty.', 'el sohⁿ spor-TEEV', '/ɛl sɔ̃ spɔʁ.tiv/', 'grid', GRID_DRILLS_NO_DICTEE, ['accord', 'accord-if', 'accord-nombre'], 'The v from the feminine, then the s. They stack in that order every time.', 'if', 'f.pl'),
  /* ── invariable ── */
  S('fr.a2.adjectifs-essentiels.013', 'Il est marron.', 'It is brown.', 'eel eh mah-ROHⁿ', '/il ɛ ma.ʁɔ̃/', 'grid', GRID_DRILLS, ['accord', 'accord-invariable'], 'A bag, a coat, anything. The word is the word.', 'invariable', 'm.sg'),
  S('fr.a2.adjectifs-essentiels.014', 'Elle est marron.', 'It is brown.', 'el eh mah-ROHⁿ', '/ɛl ɛ ma.ʁɔ̃/', 'grid', GRID_DRILLS, ['accord', 'accord-invariable', 'accord-genre'], 'No e. Compare the row above this one, where an e was the whole story.', 'invariable', 'f.sg'),
  S('fr.a2.adjectifs-essentiels.015', 'Ils sont marron.', 'They are brown.', 'eel sohⁿ mah-ROHⁿ', '/il sɔ̃ ma.ʁɔ̃/', 'grid', GRID_DRILLS, ['accord', 'accord-invariable', 'accord-nombre'], 'No s either. Writing marrons is the one slip a French reader always notices.', 'invariable', 'm.pl'),
  S('fr.a2.adjectifs-essentiels.016', 'Elles sont marron.', 'They are brown.', 'el sohⁿ mah-ROHⁿ', '/ɛl sɔ̃ ma.ʁɔ̃/', 'grid', GRID_DRILLS, ['accord', 'accord-invariable', 'accord-nombre'], 'Feminine and plural and still the same six letters. All four rows are one word.', 'invariable', 'f.pl'),

  /* ── The three headwords that did not exist ──────────────────────────────
   *
   * Corrections §2 lists `sportif` and `sportive` as two of the six absences at
   * this level. `sérieuse` is a THIRD and neither the brief nor corrections
   * names it: 0 rows at any status, against `sérieux`'s three.
   *
   * Bare adjectives, no article, no gender, matching every one of the 645 rows
   * already in this theme. A `gender` here would join a1.03's measured ending
   * population and move twenty printed figures; the batch runs the real
   * `endingPopulation` over the seed before and after rather than trusting this
   * comment. a2.17 imports all three.                                        */
  W('fr.a2.adjectifs-essentiels.017', 'sportif', 'sporty', 'spor-TEEF', '/spɔʁ.tif/', 'naming', ['flashcard', 'voiceflash', 'review'], 'The masculine. The f at the end is what puts it in its family.'),
  W('fr.a2.adjectifs-essentiels.018', 'sportive', 'sporty (feminine)', 'spor-TEEV', '/spɔʁ.tiv/', 'naming', ['flashcard', 'voiceflash', 'review'], 'The f has become a v, which is the only thing that ever happens to this family.'),
  W('fr.a2.adjectifs-essentiels.019', 'sérieuse', 'serious (feminine)', 'say-RYUHZ', '/se.ʁjøz/', 'naming', ['flashcard', 'voiceflash', 'review'], 'The x has become se. Say it and you will hear the buzz on the end.'),

  /* ── The -eux family, generalised past its head ─────────────────────────── */
  S('fr.a2.adjectifs-essentiels.020', 'Elle est curieuse.', 'She is curious.', 'el eh kü-RYUHZ', '/ɛl ɛ ky.ʁjøz/', 'family', SENT_DRILLS, ['accord', 'accord-eux', 'famille'], 'Second adjective, same move. curieux loses its x and gains se.'),
  S('fr.a2.adjectifs-essentiels.021', 'Elles sont curieuses.', 'They are curious.', 'el sohⁿ kü-RYUHZ', '/ɛl sɔ̃ ky.ʁjøz/', 'family', SENT_DRILLS, ['accord', 'accord-eux', 'famille'], 'And the plural s goes on the end of the feminine, exactly as it did with sérieuses.'),
  S('fr.a2.adjectifs-essentiels.022', 'Elle est généreuse.', 'She is generous.', 'el eh zhay-nay-RUHZ', '/ɛl ɛ ʒe.ne.ʁøz/', 'family', SENT_DRILLS, ['accord', 'accord-eux', 'famille'], 'Third adjective, third time the same two letters do the same job.'),
  S('fr.a2.adjectifs-essentiels.023', 'Ils sont joyeux.', 'They are cheerful.', 'eel sohⁿ zhwah-YUH', '/il sɔ̃ ʒwa.jø/', 'family', SENT_DRILLS, ['accord', 'accord-eux', 'famille', 'accord-nombre'], 'Plural, and still no s anywhere. Every word in this family behaves this way.'),

  /* ── The -if family, which the corpus barely has ─────────────────────────
   * Header item 8: 25 -eux headwords in this theme against 1 -if. The lesson
   * shows the pattern on the one member it can import and hands `actif` over
   * cold rather than pretending the family is large.                         */
  S('fr.a2.adjectifs-essentiels.024', 'Elle est impulsive.', 'She is impulsive.', 'el eh aⁿ-pewl-SEEV', '/ɛl ɛ ɛ̃.pyl.siv/', 'family', SENT_DRILLS, ['accord', 'accord-if', 'famille'], 'A second -if adjective, and the f has done the same thing again.'),
  S('fr.a2.adjectifs-essentiels.025', 'Ils sont impulsifs.', 'They are impulsive.', 'eel sohⁿ aⁿ-pewl-SEEF', '/il sɔ̃ ɛ̃.pyl.sif/', 'family', SENT_DRILLS, ['accord', 'accord-if', 'famille', 'accord-nombre'], 'The f is back, because this is the masculine again, and the s is silent.'),

  /* ── The invariable class, on four colours a1.13 never released ─────────── */
  S('fr.a2.adjectifs-essentiels.026', 'Mes rideaux sont kaki.', 'My curtains are khaki.', 'may ree-DOH sohⁿ kah-KEE', '/me ʁi.do sɔ̃ ka.ki/', 'invariable', SENT_DRILLS, ['accord', 'accord-invariable', 'couleurs'], 'Kaki is a dust colour named after the dust. It has never agreed with anything.'),
  S('fr.a2.adjectifs-essentiels.027', 'Les murs sont crème.', 'The walls are cream.', 'lay MÜR sohⁿ KREM', '/le myʁ sɔ̃ kʁɛm/', 'invariable', SENT_DRILLS, ['accord', 'accord-invariable', 'couleurs'], 'Cream is a thing you can pour. Borrowed as a colour, it keeps the thing’s shape.'),
  S('fr.a2.adjectifs-essentiels.028', 'Ses gants sont bleu marine.', 'Her gloves are navy blue.', 'say GAHⁿ sohⁿ bluh mah-REEN', '/se ɡɑ̃ sɔ̃ blø ma.ʁin/', 'invariable', SENT_DRILLS, ['accord', 'accord-invariable', 'couleurs'], 'Two words, so neither of them moves. Not bleus, not marines.'),
  S('fr.a2.adjectifs-essentiels.029', 'Mes chaises sont bleu clair.', 'My chairs are light blue.', 'may SHEHZ sohⁿ BLUH KLEHR', '/me ʃɛz sɔ̃ blø klɛʁ/', 'invariable', SENT_DRILLS, ['accord', 'accord-invariable', 'couleurs'], 'Feminine and plural, and the colour is two words, so it stays exactly as it is.'),

  /* ── The pair act 4 turns on: one noun, one number, two adjectives ─────── */
  S('fr.a2.adjectifs-essentiels.030', 'Ses vestes sont vertes.', 'Her jackets are green.', 'say VEST sohⁿ VEHRT', '/se vɛst sɔ̃ vɛʁt/', 'contrast', SENT_DRILLS, ['accord', 'accord-defaut', 'couleurs', 'accord-nombre'], 'An ordinary colour on a feminine plural noun: e for the gender, s for the number.'),
  S('fr.a2.adjectifs-essentiels.031', 'Ses vestes sont marron.', 'Her jackets are brown.', 'say VEST sohⁿ mah-ROHⁿ', '/se vɛst sɔ̃ ma.ʁɔ̃/', 'contrast', SENT_DRILLS, ['accord', 'accord-invariable', 'couleurs', 'accord-nombre'], 'Same jackets, same sentence, and this one refuses both endings.'),

  /* ── The scene ─────────────────────────────────────────────────────────── */
  S('fr.a2.adjectifs-essentiels.032', 'Elle est sérieuse, votre colocataire ?', 'Is your flatmate serious?', 'el eh say-RYUHZ | votr koh-loh-ka-TEHR', '/ɛl ɛ se.ʁjøz vɔtʁ kɔ.lɔ.ka.tɛʁ/', 'scene', SENT_DRILLS, ['accord', 'accord-eux'], 'The question that stopped the sentence. The form is in it, and it is not the one you own.'),
  S('fr.a2.adjectifs-essentiels.033', 'Oui, elle est très sérieuse.', 'Yes, she is very serious.', 'WEE | el eh treh say-RYUHZ', '/wi ɛl ɛ tʁɛ se.ʁjøz/', 'scene', SENT_DRILLS, ['accord', 'accord-eux'], 'Four words, and the only one you had to build is the last.'),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  DERIVED SETS
 * ═══════════════════════════════════════════════════════════════════════ */

export const GRID_ROWS = ACCORD_ADJECTIFS.filter((r) => r.role === 'grid');
export const NAMING_ROWS = ACCORD_ADJECTIFS.filter((r) => r.role === 'naming');
export const FAMILY_ROWS = ACCORD_ADJECTIFS.filter((r) => r.role === 'family');
export const INVARIABLE_ROWS = ACCORD_ADJECTIFS.filter((r) => r.role === 'invariable');
export const CONTRAST_ROWS = ACCORD_ADJECTIFS.filter((r) => r.role === 'contrast');
export const SCENE_ROWS = ACCORD_ADJECTIFS.filter((r) => r.role === 'scene');

export const AUTHORED_IDS: string[] = ACCORD_ADJECTIFS.map((r) => r.id);
export const DICTATION_IDS = ACCORD_ADJECTIFS.filter((r) => r.drills.includes('dictation')).map((r) => r.id);

/** The headwords this build authors, and the reason each had to be. */
export const AUTHORED_HEADWORDS: Record<string, string> = {
  sportif: 'ABSENT at any status in any theme. Corrections §2 lists it.',
  sportive: 'ABSENT at any status in any theme. Corrections §2 lists it.',
  sérieuse: `ABSENT at any status in any theme, and NEITHER the brief NOR corrections §2 lists it. ${Cap(unitRef('a2.17'))} needs it.`,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE NASALS
 *
 *  Corrections §6, measured through the real `hasPlainNasalFor` rather than
 *  predicted. Every superscript in the authored rows was broken back to a plain
 *  n one at a time and the checker was asked whether it noticed.
 * ═══════════════════════════════════════════════════════════════════════ */

export const VISIBLE_NASALS = ACCORD_ADJECTIFS.filter((r) => (r.respell ?? '').includes('ⁿ')).map((r) => r.id);

/** The rows where at least one superscript is INVISIBLE to the checker, so a
 *  future author who breaks it gets a green run. Asserted BY NAME.
 *
 *  `fr.a2.adjectifs-essentiels.002` is the pure case: `el eh GRAHⁿD` has one
 *  nasal and the checker cannot see it.
 *
 *  `.004` is a2.11's `entendre` on this lesson's own hero row: `el sohⁿ GRAHⁿD`
 *  IS flagged when you break it, but only because of `sohⁿ`. Break the `GRAHⁿD`
 *  alone and the checker stays quiet. Repairing what it reports produces a value
 *  it then calls clean and which is still wrong.
 *
 *  MEASURED, NOT PREDICTED, AND THE PREDICTION WAS WRONG. The first version of
 *  this table also listed `aⁿ-pewl-SEEV` and `aⁿ-pewl-SEEF` in
 *  `Elle est impulsive.` and `Ils sont impulsifs.`, on the reasoning that the
 *  nasal is followed by P inside the token. The checker SEES both. 29
 *  superscripts, 27 seen, 2 missed, and the two are one token in two rows. */
export const BLIND_NASAL_ROWS: readonly { id: string; token: string; why: string }[] = [
  { id: 'fr.a2.adjectifs-essentiels.002', token: 'GRAHⁿD', why: 'The nasal is followed by D inside the token, and it is the only nasal in the row.' },
  { id: 'fr.a2.adjectifs-essentiels.004', token: 'GRAHⁿD', why: `The row IS flagged, but on sohⁿ. Break only the GRAHⁿD and the checker stays quiet. ${Cap(unitRef('a2.11'))} met this on entendre.` },
];
export const BLIND_NASALS: readonly string[] = BLIND_NASAL_ROWS.map((r) => r.token);

/** THE FALSE-POSITIVE PATH IS MET, AND IT IS A FOURTH INSTANCE OF A CLASS
 *  INVARIANTS §3 ALREADY RECORDS.
 *
 *  Corrections §6 asks for it to be looked for and its ABSENCE reported if it is
 *  not found. It was found, on a row this lesson imports:
 *
 *    crème   /kʁɛm/   a real /m/, NO nasal vowel anywhere in the word
 *            KREHM    FLAGGED       fr.sons.couleurs.032, published
 *            KREM     not flagged   and this is the repair
 *
 *  It is `jaune` exactly. Invariants §3 measured `ZHOHN` as flagged and `ZHON`
 *  as correct, and said in as many words that the fix is to drop the H rather
 *  than to add a superscript, because there is no nasal vowel to close and a
 *  `ⁿ` there teaches a sound that is not in the word. `KREHMM` also passes, by
 *  the `nn|mm` rescue, and is rejected: `automne` needed a doubled letter
 *  because its French spelling forces it, and `crème` does not.
 *
 *  So this is a REPAIR and not an exemption. See RESPELL_REPAIRS_VISIBLE.
 *
 *  a2.14 §1's doubled-nasal blind spot is NOT met, and it was measured rather
 *  than assumed: not one French string in this lesson holds `nn` or `mm`, so the
 *  rescue that switches the whole check off never runs. */
export const FALSE_POSITIVES_FOUND: readonly { fr: string; respell: string; fix: string; why: string }[] = [
  { fr: 'crème', respell: 'KREHM', fix: 'KREM', why: 'A real /m/ and no nasal vowel. Invariants §3 on jaune: drop the H, do not add a superscript.' },
];
/** Looked at, and genuinely clean. Recorded so the pair reads as a measurement
 *  rather than as a single lucky hit. */
export const FALSE_POSITIVE_CANDIDATES: readonly { fr: string; respell: string; flagged: false; why: string }[] = [
  { fr: 'Ses gants sont bleu marine.', respell: 'say GAHⁿ sohⁿ bluh mah-REEN', flagged: false, why: 'marine has a real /n/, and REEN ends in a consonant rather than in a vowel plus n, so the path is not reachable.' },
  { fr: 'Mes rideaux sont kaki.', respell: 'may ree-DOH sohⁿ kah-KEE', flagged: false, why: 'No n or m anywhere after the subject.' },
];
export const DOUBLED_NASAL_WORDS: readonly string[] = [];

/* ══════════════════════════════════════════════════════════════════════════
 *  REPAIRS
 * ═══════════════════════════════════════════════════════════════════════ */

export type Repair = { id: string; fr: string; from: string; to: string; why: string };

/** The checker FLAGS the stored value. Guard through the real function, exactly
 *  as a2.10 does: the stored value must be seen, the replacement must not be.
 *
 *  ONE ROW, AND IT IS A FALSE POSITIVE RATHER THAN A REAL NASAL. `crème` has no
 *  nasal vowel in it at all; the checker reads `EHM` at the end of a token as
 *  one. Invariants §3 gives the fix for the identical `jaune`/`ZHOHN` case and
 *  it is to DROP THE H, never to add a superscript. See FALSE_POSITIVES_FOUND. */
export const RESPELL_REPAIRS_VISIBLE: readonly Repair[] = [
  { id: 'fr.sons.couleurs.032', fr: 'crème', from: 'KREHM', to: 'KREM', why: 'Flagged, and there is no nasal vowel to close. Invariants §3\'s jaune case, fourth instance, on a row this lesson displays.' },
];

/** The checker does NOT flag the stored value, so a guard that requires a
 *  violation before accepting a repair rejects every one of these. Corrections
 *  §6: guard the opposite way, and assert the replacement BY NAME.
 *
 *  All four are the same shape — a nasal followed by a consonant inside the
 *  token — and all four are rows this lesson puts on a screen. */
export const RESPELL_REPAIRS_INVISIBLE: readonly Repair[] = [
  { id: 'fr.sons.adjectifs-essentiels.052', fr: 'dangereux', from: 'dahn-', to: 'dahⁿ-', why: 'The nasal is followed by ZH inside the token, so the checker never saw the plain n.' },
  { id: 'fr.sons.adjectifs-essentiels.118', fr: 'nombreux', from: 'nohn-', to: 'nohⁿ-', why: 'Nasal followed by B inside the token.' },
  { id: 'fr.sons.adjectifs-essentiels.261', fr: 'impulsif', from: 'an-', to: 'aⁿ-', why: 'Nasal followed by P inside the token, and it is the only -if headword in the theme.' },
  { id: 'fr.sons.couleurs.022', fr: 'vert foncé', from: 'fohn-', to: 'fohⁿ-', why: 'Nasal followed by S inside the token, on a compound colour this lesson prints.' },
];

/** NOT a nasal repair, and it needs its own table because the guards for the
 *  other two turn on `hasPlainNasalFor`, which has no opinion about this.
 *
 *  `heureux` is `uh-RUH` and `heureuse` is `eu-REUZ`. Two spellings of /ø/ in
 *  the same word, and this lesson puts them side by side as a minimal pair on
 *  the family screen, where a learner reading them would conclude the STEM
 *  changes when only the ending does. Ledger a2.13 §9 measured that the shipped
 *  corpus writes /ø œ/ as `UH` — `puh`, `vuh`, `KUH`, `nuh-VUH`, `nehr-VUH` —
 *  and shipped `UH` on that basis, against invariants §3's `EU`. This follows
 *  a2.13. Invariants §9 says a variant is not a violation; what makes this one
 *  is that the two halves of one pair disagree on the same screen. */
export const RESPELL_REPAIRS_HOUSE: readonly Repair[] = [
  { id: 'fr.sons.muettes.053', fr: 'heureuse', from: 'eu-REUZ', to: 'uh-REUZ', why: 'heureux is uh-RUH. On the family screen the two sit one above the other and the stem has to be the same two letters in both.' },
];

export const ALL_REPAIRS: readonly Repair[] = [
  ...RESPELL_REPAIRS_VISIBLE, ...RESPELL_REPAIRS_INVISIBLE, ...RESPELL_REPAIRS_HOUSE,
];

/** a2.13 §1: a row without a respelling reaches a card the learner cannot say.
 *  These two are the only published evidence of `sportif` and `sportive`
 *  anywhere in 27,600 rows, and neither had one. */
export const RESPELL_ADDITIONS: readonly { id: string; fr: string; to: string; why: string }[] = [
  { id: 'fr.a2.description-personnes-objets.003', fr: 'Les jumeaux sont sportifs.', to: 'lay zhü-MOH sohⁿ spor-TEEF', why: 'The only published masculine plural of sportif in the corpus, and it had no respelling.' },
  { id: 'fr.a2.description-personnes-objets.004', fr: 'Les jumelles sont sportives.', to: 'lay zhü-MEL sohⁿ spor-TEEV', why: 'The only published feminine plural of sportive in the corpus, and it had no respelling.' },
];

/** Both evidence rows carry `dictation` and nothing else, so neither could be
 *  released into the deck or spoken. */
export const DRILL_ADDITIONS: readonly { id: string; fr: string; add: string; why: string }[] = [
  { id: 'fr.a2.description-personnes-objets.003', fr: 'Les jumeaux sont sportifs.', add: 'flashcard', why: 'Carried only `dictation`, so a deck release would have had nothing to draw.' },
  { id: 'fr.a2.description-personnes-objets.004', fr: 'Les jumelles sont sportives.', add: 'flashcard', why: 'Carried only `dictation`, so a deck release would have had nothing to draw.' },
];

/** Read, considered, and NOT repaired. Invariants §9: repair only what breaks a
 *  stated rule; a variant is not a violation. */
export const NOT_REPAIRED: readonly { id: string; respell: string; why: string }[] = [
  { id: 'fr.sons.faux-amis.024', respell: 'GRAHⁿ', why: 'A genuine plain-n violation on `grand`, and the checker DOES see it. It is in faux-amis, this lesson neither imports nor displays it, and repairing a row you do not show is how a build acquires a defect it cannot test. Reported for whoever owns that theme.' },
  { id: 'fr.sons.consonnes.055', respell: 'oh-RAHⁿZH', why: 'A second `orange` carrying gender=f in a different theme. Correct notation, wrong for this lesson because of the gender. fr.sons.couleurs.009 is imported instead.' },
  { id: 'fr.a1.emotions.057', respell: 'zhwa-YEU', why: '`joyeux` spelled EU against fr.sons.adjectifs-essentiels.266\'s UH. A variant, in a theme this lesson does not touch, and the home-theme row is the one imported.' },
  { id: 'fr.sons.voyelles.757', respell: '', why: 'A second `heureuse` with no respelling at all, glossed as an IPA demonstration rather than as vocabulary. Not this lesson\'s row and not repairable into one.' },
];

/** Rows read during the build and deliberately left alone, with the reason.
 *  a2.15's READ_NOT_IMPORTED, and the first three are the three grid cells that
 *  already exist somewhere else. */
export const READ_NOT_IMPORTED: readonly { id: string; fr: string; why: string }[] = [
  { id: 'fr.a1.description-personnes-objets.001', fr: 'Il est grand.', why: 'The m.sg cell, already published, with NO respelling. Importing it would have put a card on the hero grid that the learner cannot say, and its theme carries a second identical copy at .076.' },
  { id: 'fr.a1.description-personnes-objets.076', fr: 'Il est grand.', why: 'The second copy. Two rows sharing an fr inside one theme is what flashhub-coverage counts as one card served twice; it is pre-existing, it is not in adjectifs-essentiels, and it is not this build\'s to fix. Reported.' },
  { id: 'fr.a1.description-personnes-objets.003', fr: 'Ils sont grands.', why: 'The m.pl cell, published, no respelling.' },
  { id: 'fr.a1.metiers.273', fr: 'Elle est grande.', why: 'The f.sg cell, published, and respelled `el eh GRAHⁿD` — which is exactly the value this build authored independently, so the house form was confirmed rather than invented. Left where it is: a grid assembled out of metiers, description-personnes-objets and adjectifs-essentiels would carry three subjects and two missing respellings.' },
  { id: 'fr.a1.adjectifs-essentiels.268', fr: 'Il est heureux avec elle.', why: 'The home theme already holds a four-cell heureux paradigm at .268 to .271, in four different frames (avec elle, de vivre ici, ce matin, de leur voyage) and with no respellings. Corrections §3 exactly: the forms exist and the minimal pair does not.' },
  { id: 'fr.a1.adjectifs-essentiels.271', fr: 'Elles sont heureuses de leur voyage.', why: 'The f.pl of that paradigm. Same reason.' },
  { id: 'fr.a1.couleurs.269', fr: 'Mes sacs sont marron.', why: `${Cap(unitRef('a1.13'))} authored a four-cell marron paradigm at .267 to .271 and this lesson does not restate it. Act 4 names ${unitRef('a1.13')} and moves to colours it never released.` },
  { id: 'fr.sons.couleurs.013', fr: 'turquoise', why: 'RESERVED. It is one of the three cold adjectives and importing it would delete the mission it is the point of.' },
  { id: 'fr.sons.adjectifs-essentiels.094', fr: 'courageux', why: 'RESERVED, same reason.' },
  { id: 'fr.sons.muettes.027', fr: 'actif', why: 'RESERVED, same reason. Three other `actif` rows exist and none is imported.' },
  { id: 'fr.sons.adjectifs-essentiels.314', fr: 'bel', why: `${Cap(unitRef('a2.16'))}\'s,. Both prerequisites already teach it and this lesson prints no form of it.` },
  { id: 'fr.sons.adjectifs-essentiels.315', fr: 'vieil', why: `${Cap(unitRef('a2.16'))}\'s.` },
  { id: 'fr.sons.adjectifs-essentiels.312', fr: 'vieille', why: `${Cap(unitRef('a2.16'))}\'s.` },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  SHAPES THE GUARDS SEARCH FOR
 * ═══════════════════════════════════════════════════════════════════════ */

/** Accent-aware alternation with real word boundaries on both sides. NEVER
 *  build a regex out of a search term with `\b`: it is ASCII-only in JavaScript
 *  and returns zero on a trailing accent, which looks exactly like an absence.
 *  a2.02 shipped that bug and a2.12 found it. */
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const shape = (words: readonly string[]) =>
  new RegExp(`(?<![\\p{L}\\p{N}'’-])(?:${words.map(esc).join('|')})(?![\\p{L}\\p{N}'’-])`, 'iu');

export const BEAU_SHAPE = shape(BEAU_FORMS);
export const UNSEEN_SHAPE = shape(UNSEEN_FORMS);
export const COMPARATIVE_SHAPE = shape(COMPARATIVE_FORMS);
export const OVER_PLURALISED_SHAPE = shape([OVER_PLURALISED, 'sérieuxes', 'marrons', 'oranges', 'sportifves', 'kakis', 'turquoises']);
/** `-ment` is a2.17's, and it CANNOT be guarded as a suffix.
 *
 *  THE FIRST TWO VERSIONS OF THIS GUARD WERE BOTH WRONG, in the way invariants
 *  §0 promises. A shape of `[\p{L}]{3,}ment` fires on `arrondissement`, on
 *  `appartement`, on `moment`, on `comment` — and, less obviously, on
 *  **`Agreement`**, which is the unit's own English title as the database holds
 *  it. Every one of those is a legitimate string and none is an adverb, so the
 *  guard was an exception list that would have grown for the life of the lesson.
 *
 *  a2.14 §6 is the answer: guard the THING rather than the letters. What a2.17
 *  owns is an adverb built by putting -ment on a FEMININE adjective, so the
 *  shape is built from this lesson's own feminine forms plus the adverbs a2.17's
 *  brief names. It cannot fire on an English word or on a French noun, and it
 *  fires on exactly what would steal a2.17's lesson.
 *
 *  DERIVED, so it maintains itself: add an adjective to the grid or to a family
 *  and its adverb is guarded automatically. */
const ADVERB_STEMS: readonly string[] = [
  // Every feminine this lesson teaches or names.
  'grande', 'sérieuse', 'sportive', 'heureuse', 'curieuse', 'généreuse',
  'joyeuse', 'dangereuse', 'nombreuse', 'impulsive', 'naïve', 'active',
  'courageuse', 'verte', 'petite', 'douce', 'lente', 'rapide', 'simple',
  // And the ones a2.17's brief names that are not built this way at all.
  'vrai', 'évidem', 'constam', 'seule', 'égale', 'directe', 'exacte',
  'certaine', 'probable', 'normale', 'finale', 'facile',
];
export const ADVERB_SHAPE = new RegExp(
  `(?<![\\p{L}\\p{N}'’-])(?:${ADVERB_STEMS.join('|')})ment(?![\\p{L}\\p{N}'’-])`, 'iu');
/** Kept as an empty list on purpose. The shape above cannot fire on a noun or on
 *  an English word, so there is nothing to except, and the batch asserts the list
 *  is empty rather than letting a later author reintroduce one quietly. */
export const ADVERB_ALLOWED: readonly string[] = [];
/** Proof the shape still fires on the thing it exists for, and does not fire on
 *  the five strings that broke the two earlier versions of it. Asserted in all
 *  three layers, because a guard that cannot fire is worse than no guard. */
export const ADVERB_MUST_FIRE: readonly string[] = ['sérieusement', 'heureusement', 'vraiment', 'activement'];
export const ADVERB_MUST_NOT_FIRE: readonly string[] = ['Agreement', 'arrondissement', 'appartement', 'moment', 'comment'];

/* ══════════════════════════════════════════════════════════════════════════
 *  BUDGETS AND HOUSE CONSTANTS
 * ═══════════════════════════════════════════════════════════════════════ */

/** Ledger §a2.14-13: the ceiling is a WIDTH and not a character count, so a
 *  character guard is necessary and not sufficient. 27 is kept because the
 *  house heading that 36 lessons ship is 27 and demonstrably fits; 25 is the
 *  target, and anything at 26 or 27 is UNVERIFIED until it has been read off
 *  the hub. */
export const MISSION_TITLE_MAX = 27;
export const MISSION_TITLE_TARGET = 25;

/** Corrections §4. `dicteeMode()` switches to WORD tiles above 16 letters and
 *  word mode hands every real word over pre-spelled, so a lesson about a
 *  spelling can only be tested in LETTERS mode. Measured through the real
 *  function: FOURTEEN of the sixteen grid cells are LETTERS. The two that are
 *  not are `Elles sont sérieuses.` and `Elles sont sportives.`, both 18, and
 *  both are the feminine plural of a family whose feminine is nine letters
 *  long. There is no shorter subject than `Elles sont`, so this is a hard
 *  limit and not a choice, and neither is a dictée target. */
export const DICTEE_LETTER_MAX = 16;
export const DICTEE_WORD_MODE_CELLS: readonly string[] = [
  'Elles sont sérieuses.', 'Elles sont sportives.',
];
/** So the dictée covers fourteen of the sixteen cells, and the two it cannot
 *  reach are named on the screen rather than quietly skipped. */
export const EXPECTED_GRID_DICTEE = 14;

/** a2.14 §5 and a2.13 §6.2: if a lesson prints a respelling in more than one
 *  place, compare them. This lesson prints each grid respelling three times —
 *  the row, the tapTable and the sheet. */
export const RESPELL_COPIES = 3;

export const UNIT_ID = UNIT.id;
export const UNIT_SEQ = UNIT.seq;
export const LESSON_ID = 'a2.03.l1';
export const OWNED_ID_RANGE = ID_BLOCK;

/* ── The counts, as explicit constants ────────────────────────────────────
 *
 * Invariants §5: assert against an explicit constant, never against a figure
 * derived from the lesson. A derived count compares the content to itself and
 * passes on any rewording.                                                   */

export const EXPECTED_AUTHORED = 33;
export const EXPECTED_AUTHORED_HEADWORDS = 3;
export const EXPECTED_GRID_ROWS = 16;
export const EXPECTED_IMPORTED = 23;
export const EXPECTED_SOURCE_THEMES = 6;
export const EXPECTED_READ_ONLY = 13;
export const EXPECTED_PATTERNS = 4;
export const EXPECTED_CELLS = 4;

export const EXPECTED_SECTIONS = 25;
export const EXPECTED_ACTS = 6;
export const EXPECTED_TRIGGERS = 5;
export const EXPECTED_DRILLS = 10;
export const EXPECTED_SHEETS = 1;
export const EXPECTED_TAPTABLES = 2;
export const EXPECTED_USECASES = 2;
export const EXPECTED_VOCABTHEMES = 1;
export const EXPECTED_GROUPDRILLS = 1;
export const EXPECTED_CARDDECKS = 3;
export const EXPECTED_QUESTIONS = 32;
export const EXPECTED_ROUNDS = 5;
export const EXPECTED_DICTATION = 14;
export const EXPECTED_UNSEEN = 3;

export const EXPECTED_RESPELL_REPAIRS = 6;
export const EXPECTED_RESPELL_REPAIRS_VISIBLE = 1;
export const EXPECTED_RESPELL_REPAIRS_INVISIBLE = 4;
export const EXPECTED_RESPELL_REPAIRS_HOUSE = 1;
export const EXPECTED_RESPELL_ADDITIONS = 2;
export const EXPECTED_DRILL_ADDITIONS = 2;
/** Measured by breaking every superscript one at a time. `_a203_nasal.ts` prints
 *  the table and both figures are asserted, so the day the checker improves the
 *  build fails rather than carrying a dead by-name list. */
export const EXPECTED_SUPERSCRIPTS = 29;
export const EXPECTED_SEEN_NASALS = 27;
export const EXPECTED_BLIND_NASALS = 2;
export const EXPECTED_FALSE_POSITIVES = 1;

/** Act 3 is the Owns and it must outweigh the grid act. Doctrine §B.5: if the
 *  paradigm gets more missions than the Owns, the wrong lesson was built. */
export const OWNS_ACT_ID = 'act3';
export const PARADIGM_ACT_ID = 'act2';

/** Doctrine §B.4 requires the reframe carried verbatim across at least three
 *  sections; the good lessons use six to eight. */
export const EXPECTED_REFRAME_USES = 9;
export const EXPECTED_REFRAME_SECTIONS = 6;

/** Every unit this lesson names, so a guard can check they all still exist and
 *  that none of them is named only in a comment. */
export const CITED_UNITS = ['a1.13', 'a1.14', 'a1.16', 'a2.01', 'a2.16', 'a2.17', 'a2.08'] as const;

/** The mix, measured against the nine verb lessons that precede this one on the
 *  trail. Doctrine and the brief both ask for the section mix to CHANGE; this
 *  is the figure that makes the claim checkable rather than felt.
 *
 *  Measured 2026-08-13 across all ten shipped A2 lesson bodies:
 *    groupDrill 45 and cardDeck 42 out of 255 sections, 34% between them
 *    tapTable 1.0 per lesson · useCases 0 · vocabThemes 0 in ALL TEN */
export const BAND_MIX_BEFORE = {
  lessons: 10,
  sections: 255,
  groupDrill: 45,
  cardDeck: 42,
  tapTable: 10,
  useCases: 0,
  vocabThemes: 0,
  measured: '2026-08-13',
} as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  ACCESSORS
 * ═══════════════════════════════════════════════════════════════════════ */

const BY_ID: Map<string, AaRow> = new Map(ACCORD_ADJECTIFS.map((r) => [r.id, r]));

function must(id: string): AaRow {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`accord-adjectifs-corpus: no authored row ${id}`);
  return r;
}

export function toItem(r: AaRow): Item {
  const { role, pattern, cell, ...rest } = r;
  void role; void pattern; void cell;
  return rest as Item;
}

export const fr = (id: string): string => must(id).fr;
export const en = (id: string): string => must(id).en ?? '';
export const bare = (id: string): string => must(id).respell ?? '';
export const sub = (id: string): string => `[${bare(id)}]`;
export const noStop = (s: string): string => s.replace(/\.$/, '');

/** The authored row for one cell of one pattern. The grid, the decks, the
 *  dictée and the exam all reach a cell through THIS, so no screen can print a
 *  form that is not the row the learner is scored on. */
export const cellId = (pattern: Pattern, cell: Cell): string => {
  const r = GRID_ROWS.find((x) => x.pattern === pattern && x.cell === cell);
  if (!r) throw new Error(`accord-adjectifs-corpus: no grid row for ${pattern}/${cell}`);
  return r.id;
};
export const patternIds = (pattern: Pattern): string[] =>
  CELL_ORDER.map((c) => cellId(pattern, c));
export const cellIds = (cell: Cell): string[] =>
  PATTERN_ORDER.map((p) => cellId(p, cell));

/** The adjective alone, off the GRID constant rather than off the sentence, so
 *  the two copies can be compared instead of one being derived from the other. */
export const form = (pattern: Pattern, cell: Cell): string => {
  const row = GRID.find((r) => r.cell === cell);
  if (!row) throw new Error(`accord-adjectifs-corpus: no grid cell ${cell}`);
  return row.forms[pattern];
};
export const formRespell = (pattern: Pattern, cell: Cell): string => {
  const row = GRID.find((r) => r.cell === cell);
  if (!row) throw new Error(`accord-adjectifs-corpus: no grid cell ${cell}`);
  return row.respells[pattern];
};
