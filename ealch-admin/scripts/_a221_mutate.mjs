/* a2.21 mutation harness.
 *
 *   node scripts/_a221_mutate.mjs            all mutations
 *   node scripts/_a221_mutate.mjs 3 7        only those rows
 *
 * Breaks one claim at a time and asks all three layers whether they notice.
 *
 * ── WHAT THE HARNESSES BEFORE THIS ONE LEARNED THE HARD WAY ──────────────
 *
 * 1. RUN EVERY LAYER UNMUTATED FIRST (a2.13 §7). If the baseline is not green,
 *    every row below it is noise.
 * 2. A MISSING ANCHOR IS SKIPPED RATHER THAN COUNTED AS A PASS.
 * 3. ONCE THE LESSON HAS BEEN APPLIED, A MUTATION THAT PASSES EVERY GUARD TRIPS
 *    THE BATCH'S VERSION CHECK (a2.14 §7) and the batch reports "caught" with
 *    that message rather than on the guard you meant to test. The guards run
 *    BEFORE the version check, so the message distinguishes them cleanly.
 *    READ THE MESSAGE, NOT THE COLUMN.
 * 4. THE TEST READS seed.json AND NOTHING ELSE. A source-only mutation it cannot
 *    see is reported n/a, not MISS.
 * 5. ONE ANCHOR IS OFTEN NOT ENOUGH (a2.14 §8, and a2.20 §6). A claim stated in
 *    a label, a `say`, a `why` and a card body is not removed by touching one of
 *    them, and a mutation that does not remove the claim looks exactly like a
 *    hole. `also`, `alsoSeed` and `thirdSeed` exist for that.
 * 6. A GUARD WHOSE EXPECTED VALUE COMES FROM THE SAME MODULE AS THE CONTENT IS
 *    GUARDING NOTHING (a2.18 §6). Rows 30 and 31 test exactly that.
 *
 * The five the brief names by name are rows 1 to 5:
 *   drop an agreement form · paraphrase a2.01's reframe · agree an avoir
 *   participle · teach a reflexive · remove the pattern and leave the mnemonic.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const CORPUS = join(here, 'data/passe-compose-etre-corpus.ts');
const LESSON = join(here, 'data/passe-compose-etre-lesson.ts');
const TERMS = join(here, 'data/passe-compose-etre-terms.ts');
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const FILES = [CORPUS, LESSON, TERMS, SEED];

/** { label, src: [file, from, to], also: [...], seed: [from, to], alsoSeed, thirdSeed } */
const M = [
  /* ── The five the brief asks for by name ─────────────────────────────── */
  {
    // DROP AN AGREEMENT FORM. The brief asks for all four to be asserted form by
    // form rather than as a count, and this is why: a count passes when one is
    // dropped and another added.
    label: 'drop the feminine plural from the four-form screen',
    src: [CORPUS, "R(654, 'Elles sont allées.',", "R(654, 'Elles sont allée.',"],
    seed: ['"fr": "Elles sont allées."', '"fr": "Elles sont allée."'],
  },
  {
    // PARAPHRASE a2.01's REFRAME. THE BRIEF SAYS THIS MUST GO RED and calls it
    // the assertion most worth having in the file.
    label: "paraphrase a2.01's reframe on the bookend",
    src: [CORPUS, "export const A201_REFRAME = 'Four of the six forms sound the same, so the pronoun carries the person.';",
      "export const A201_REFRAME = 'Four of the six forms sound alike, so the pronoun carries the person.';"],
    seed: ['Four of the six forms sound the same, so the pronoun carries the person.',
      'Four of the six forms sound alike, so the pronoun carries the person.'],
  },
  {
    // AGREE AN avoir PARTICIPLE. The error a2.05 learners import, and the one
    // this lesson creates by succeeding.
    label: 'agree the participle after avoir, on the contrast screen',
    src: [CORPUS, "R(661, 'Elle a mangé au restaurant.',", "R(661, 'Elle a mangée au restaurant.',"],
    seed: ['"fr": "Elle a mangé au restaurant."', '"fr": "Elle a mangée au restaurant."'],
  },
  {
    // TEACH A REFLEXIVE. a2.22 and a2.23 own them and a2.23 declares this lesson
    // as a prerequisite.
    label: 'teach a reflexive verb on the boundary card',
    src: [LESSON, "{ label: 'more verbs with être', head: `${REFLEXIVE_UNIT} and ${REFLEXIVE_PAST_UNIT}`, body: REFLEXIVE_DEFERRAL }",
      "{ label: 'more verbs with être', head: `${REFLEXIVE_UNIT} and ${REFLEXIVE_PAST_UNIT}`, body: 'Je me suis levé tôt. A whole family carries a little word in front of it and they take être as well.' }"],
    seed: ['"body": "A whole family of verbs carries a little word in front of it',
      '"body": "Je me suis levé tôt. A whole family of verbs carries a little word in front of it'],
  },
  {
    // REMOVE THE PATTERN AND LEAVE ONLY THE MNEMONIC. A learner with only the
    // crutch cannot decide about a verb outside it, which is the brief's own
    // argument for teaching both.
    label: 'remove the pattern and leave only the crutch',
    src: [CORPUS, "export const PATTERN_CLAIM =\n  'Twelve of the fifteen move, and the other three change what is true rather than where you are.';",
      "export const PATTERN_CLAIM =\n  'Fifteen verbs, and the crutch below lists sixteen of them for you.';"],
    also: [
      [CORPUS, "export const REST_CLAIM =\n  'rester is the one that breaks it. Nothing moves and nothing changes, and it is the one people forget, which is the reason the mnemonic exists at all.';",
        "export const REST_CLAIM =\n  'rester is in the crutch, which is where you will find it.';"],
      [LESSON, "      { label: 'the pattern', head: PATTERN_CLAIM, body: 'Going, coming, arriving, leaving, going in, going out, going up, going down, falling, being born and dying. That is the thing they have in common and it is checkable on a verb the crutch does not list.' },",
        "      { label: 'the pattern', head: PATTERN_CLAIM, body: 'Learn the sixteen letters and you have the sixteen verbs.' },"],
      [LESSON, "    rule: {\n      title: 'The verb decides, and the meaning is the clue',\n      body: `${PATTERN_CLAIM} If the sentence is about getting somewhere, leaving somewhere, or starting or stopping existing, check for être first.`,\n    },",
        "    rule: {\n      title: 'The verb decides, and the crutch is the clue',\n      body: `${PATTERN_CLAIM} Run through the letters.`,\n    },"],
      [LESSON, "    coach: `${PATTERN_CLAIM} Ask what the sentence is about before you ask what the verb is. ${REST_CLAIM}`,",
        "    coach: `${PATTERN_CLAIM} Run through the letters. ${REST_CLAIM}`,"],
    ],
    seed: ['Twelve of the fifteen move, and the other three change what is true rather than where you are.',
      'Fifteen verbs, and the crutch below lists sixteen of them for you.'],
    alsoSeed: ['Going, coming, arriving, leaving, going in, going out, going up, going down, falling, being born and dying.',
      'Learn the sixteen letters and you have the sixteen verbs.'],
    thirdSeed: ['rester is the one that breaks it. Nothing moves and nothing changes, and it is the one people forget, which is the reason the mnemonic exists at all.',
      'rester is in the crutch, which is where you will find it.'],
  },

  /* ── The four forms, and the sound ───────────────────────────────────── */
  {
    label: 'break the identity of the four respelled tails',
    src: [CORPUS, "R(653, 'Ils sont allés.', 'They went.', 'eel sohⁿ tah-LAY'", "R(653, 'Ils sont allés.', 'They went.', 'eel sohⁿ tah-LAYZ'"],
    seed: ['"respell": "eel sohⁿ tah-LAY"', '"respell": "eel sohⁿ tah-LAYZ"'],
  },
  {
    label: 'drop the "one sound" claim from the four-form screen',
    src: [LESSON, "          why: 'Ils and elles are one sound, sont is one sound, and allés and allées are one sound. These two sentences are completely identical out loud and two letters apart on paper.',",
      "          why: 'The plural forms are written differently and that is the difference between them.',"],
    also: [
      [LESSON, "          why: 'The second word is identical: both are the same three sounds. Il and elle are different and the ending is not, which is the whole difficulty of this lesson.',",
        "          why: 'The second word is written differently. Il and elle are different too.',"],
      [LESSON, "          why: `${EAR_CLAIM} That is why most of the exam is typed.`,", "          why: 'That is why most of the exam is typed.',"],
      // EAR_CLAIM ITSELF SAYS « one sound », so the first version of this
      // mutation left the claim standing and reported a correct guard blind.
      [CORPUS, "  'You cannot check this by listening. For fourteen of the fifteen, all four spellings are one sound.';",
        "  'You cannot check this by listening. The spellings are what carry it.';"],
      [LESSON, "    say: `${REFRAME} ${AGREEMENT_RULE} Four cards, one verb, and the only thing that changes is who it is about. Read the respellings: all four end the same way.`,",
        "    say: `${REFRAME} ${AGREEMENT_RULE} Four cards, one verb, and the only thing that changes is who it is about.`,"],
    ],
    seed: ['Ils and elles are one sound, sont is one sound, and allés and allées are one sound.',
      'The plural forms are written differently and that is the difference between them.'],
    alsoSeed: ['The second word is identical: both are the same three sounds.', 'The second word is written differently.'],
    thirdSeed: ['Read the respellings: all four end the same way.', 'Read the cards.'],
  },
  {
    label: 'take a cell off every card that shows it',
    src: [LESSON, "        items: [card(CELL_IDS[2]!), card(CELL_IDS[3]!)],", "        items: [card(CELL_IDS[2]!), card(CELL_IDS[2]!)],"],
    // THE THIRD GROUP SHOWS IT TOO. Removing it from one group leaves it on a
    // card, and a guard that passes on that is doing its job.
    also: [[LESSON, "        items: [card(CELL_IDS[1]!), card(CELL_IDS[3]!)],", "        items: [card(CELL_IDS[1]!), card(CELL_IDS[1]!)],"]],
    seed: ['"fr": "Elles sont allées.",\n          "ipa": "/ɛl sɔ̃ ta.le/",\n          "note": "[ehl sohⁿ tah-LAY]',
      '"fr": "Ils sont allés.",\n          "ipa": "/il sɔ̃ ta.le/",\n          "note": "[eel sohⁿ tah-LAY]'],
  },

  /* ── The quotes, every one a literal ─────────────────────────────────── */
  {
    label: "reword a2.05's negation rule, which is a2.19's",
    src: [CORPUS, "export const NEGATION_RULE = 'Wrap the verb that changed, not the one carrying the meaning.';",
      "export const NEGATION_RULE = 'Wrap the verb that moved, not the one carrying the meaning.';"],
    seed: ['Wrap the verb that changed, not the one carrying the meaning.',
      'Wrap the verb that moved, not the one carrying the meaning.'],
  },
  {
    label: "reword a2.03's borrowed rule",
    src: [CORPUS, "export const A203_REFRAME = 'The plain form tells you the other three.';",
      "export const A203_REFRAME = 'The plain form gives you the other three.';"],
    seed: ['The plain form tells you the other three.', 'The plain form gives you the other three.'],
  },
  {
    label: "reword a2.05's reframe",
    src: [CORPUS, "export const A205_REFRAME = 'One verb, two words, and the small ones go in between.';",
      "export const A205_REFRAME = 'One verb, two words, and the small ones sit in between.';"],
    seed: ['One verb, two words, and the small ones go in between.', 'One verb, two words, and the small ones sit in between.'],
  },
  {
    // a2.15's REFRAME WAS INVENTED IN THE FIRST DRAFT AND NEITHER THE BATCH NOR
    // THE MERGE COULD SEE IT, because both compared the constant to itself. Its
    // own test caught it against seed.json. Both layers now hold the literal.
    label: "reword a2.15's move, which this lesson extends",
    src: [CORPUS, "export const A215_REFRAME = 'Cover the front of the verb. Build what is left.';",
      "export const A215_REFRAME = 'Cover the start of the verb. Build what is left.';"],
    seed: ['Cover the front of the verb. Build what is left.', 'Cover the start of the verb. Build what is left.'],
  },
  {
    label: 'remove the bookend distance, so it stops being a bookend',
    src: [CORPUS, "  `${ER_UNIT} said it in the first lesson of this level, about six forms of the present. Seventeen lessons later it is four forms of the past and the same sentence covers them.`;",
      "  `${ER_UNIT} said it about six forms of the present. Here it is four forms of the past and the same sentence covers them.`;"],
    also: [[LESSON, "    title: 'Seventeen Lessons Ago',", "    title: 'A Line You Have Read',"]],
    seed: ['Seventeen lessons later it is four forms of the past', 'Here it is four forms of the past'],
    alsoSeed: ['"title": "Seventeen Lessons Ago"', '"title": "A Line You Have Read"'],
  },

  /* ── The contrast, and the pair guards ───────────────────────────────── */
  {
    // a2.20 §5.2: a pair guard satisfied by `wrong === right` is not a pair.
    label: 'make a contrast pair the same sentence twice',
    src: [CORPUS, "R(662, 'Elle est allée au restaurant.',", "R(662, 'Elle a mangé au restaurant.',"],
  },
  {
    label: 'make the transitive pair the same sentence twice',
    src: [CORPUS, "R(666, \"J’ai sorti la poubelle.\",", "R(666, 'Je suis sorti hier soir.',"],
  },
  {
    label: 'widen a contrast pair so it compares two subjects',
    src: [CORPUS, "R(664, 'Ils sont allés au restaurant.',", "R(664, 'Nous sommes allés au cinéma hier.',"],
  },

  /* ── The transitive decision ─────────────────────────────────────────── */
  {
    label: 'put a transitive avoir sentence in the dictée',
    src: [CORPUS, "R(666, \"J’ai sorti la poubelle.\", 'I took the bin out.', 'zhay sor-TEE lah poo-BELL', '/ʒe sɔʁ.ti la pu.bɛl/', 'transitive', NO_D,",
      "R(666, \"J’ai sorti la poubelle.\", 'I took the bin out.', 'zhay sor-TEE lah poo-BELL', '/ʒe sɔʁ.ti la pu.bɛl/', 'transitive', WITH_DICTEE,"],
    seed: ['"fr": "J’ai sorti la poubelle.",\n      "en": "I took the bin out.",\n      "respell": "zhay sor-TEE lah poo-BELL",\n      "ipa": "/ʒe sɔʁ.ti la pu.bɛl/",\n      "tags": [\n        "a2.21",\n        "passe-compose",\n        "etre",\n        "transitive",\n        "avoir"\n      ],\n      "drills": [\n        "flashcard",\n        "sentence",\n        "voiceflash",\n        "review"\n      ]',
      '"fr": "J’ai sorti la poubelle.",\n      "en": "I took the bin out.",\n      "respell": "zhay sor-TEE lah poo-BELL",\n      "ipa": "/ʒe sɔʁ.ti la pu.bɛl/",\n      "tags": [\n        "a2.21",\n        "passe-compose",\n        "etre",\n        "transitive",\n        "avoir"\n      ],\n      "drills": [\n        "flashcard",\n        "sentence",\n        "voiceflash",\n        "review",\n        "dictation"\n      ]'],
  },
  {
    label: 'ask for a transitive form in the exam',
    src: [LESSON, "            q: 'Fix this. You mean that the glass fell.',\n            format: 'errorSpot',\n            prompt: 'Le verre a tombé.',\n            accept: [fr(A(693)), 'Le verre est tombe'],\n            answer: fr(A(693)),",
      "            q: 'Fix this. You mean that you took the bin out.',\n            format: 'errorSpot',\n            prompt: 'Je suis sorti la poubelle.',\n            accept: [fr(A(666)), 'J ai sorti la poubelle'],\n            answer: fr(A(666)),"],
    seed: ['"q": "Fix this. You mean that the glass fell."', '"q": "Fix this. You mean that you took the bin out."'],
  },
  {
    label: 'declare the transitive split TAUGHT rather than receptive',
    src: [CORPUS, "export const TRANSITIVE_DECISION = {\n  taught: false,", "export const TRANSITIVE_DECISION = {\n  taught: true,"],
  },
  {
    label: "drop a2.11 from descendre's screen",
    src: [CORPUS, "  `${RE_UNIT} taught descendre in the present and did not say which first word it takes.",
      "  `An earlier lesson taught descendre in the present and did not say which first word it takes."],
    seed: ['a2.11 taught descendre in the present', 'An earlier lesson taught descendre in the present'],
  },
  {
    label: 'drop descendre from the split screen entirely',
    src: [LESSON, "      { label: 'going down', head: 'descendre', body: DESCENDRE_CREDIT },",
      "      { label: 'going down', head: 'the same again', body: 'It happens with more than one of them.' },"],
    seed: ['"head": "descendre"', '"head": "the same again"'],
    alsoSeed: ['a2.11 taught descendre in the present and did not say which first word it takes. It takes être when you go down and avoir when you take something down, and this lesson owns that.',
      'It happens with more than one of them.'],
  },

  /* ── The ear ─────────────────────────────────────────────────────────── */
  {
    label: 'add an ear question that separates two cells of one sound',
    src: [LESSON, "            opts: [AUDIBLE.masculine, AUDIBLE.feminine],", "            opts: ['allé', 'allée'],"],
    seed: ['"opts": [\n                  "mort",\n                  "morte"\n                ]', '"opts": [\n                  "allé",\n                  "allée"\n                ]'],
  },
  {
    label: 'drop `say` from the ear question, so the card speaks the answer',
    src: [LESSON, "            say: AUDIBLE.feminine,\n            opts: [AUDIBLE.masculine, AUDIBLE.feminine],",
      "            opts: [AUDIBLE.masculine, AUDIBLE.feminine],"],
    seed: ['"say": "morte",\n                "opts"', '"opts"'],
  },
  {
    label: 'take the audible t off morte',
    src: [CORPUS, "R(670, 'Elle est morte en mars.', 'She died in March.', 'ehl eh MORT ahⁿ MARSS'",
      "R(670, 'Elle est morte en mars.', 'She died in March.', 'ehl eh MOR ahⁿ MARSS'"],
    seed: ['"respell": "ehl eh MORT ahⁿ MARSS"', '"respell": "ehl eh MOR ahⁿ MARSS"'],
  },
  {
    label: 'drop the plural pair, so "number is still silent" loses its evidence',
    src: [LESSON, "    lines: [A(669), A(670), A(671), A(672)].map((id) => ({ fr: fr(id), en: en(id) })),",
      "    lines: [A(669), A(670)].map((id) => ({ fr: fr(id), en: en(id) })),"],
    also: [
      [LESSON, "        q: `${noStop(fr(A(671)))} against ${noStop(fr(A(672)))}. And here?`,", "        q: 'And what about the plural?',"],
    ],
    seed: ['"q": "Ils sont morts en mars against Elles sont mortes en mars. And here?"', '"q": "And what about the plural?"'],
    alsoSeed: ['The number is still silent: morts is the first sound and mortes the second.',
      'The number is silent here too.'],
    thirdSeed: ['"en": "They died in March."', '"en": "removed"'],
  },

  /* ── The dictée ──────────────────────────────────────────────────────── */
  {
    label: 'put a dictée line into WORD mode',
    src: [CORPUS, "R(654, 'Elles sont allées.', 'They went, and they are all women.',",
      "R(654, 'Elles sont allées ensemble.', 'They went, and they are all women.',"],
    seed: ['"fr": "Elles sont allées."', '"fr": "Elles sont allées ensemble."'],
  },
  {
    label: 'strip the dictation drill from a cell row',
    src: [CORPUS, "R(652, 'Elle est allée.', 'She went.', 'ehl eh tah-LAY', '/ɛl ɛ ta.le/', 'cell', WITH_DICTEE,",
      "R(652, 'Elle est allée.', 'She went.', 'ehl eh tah-LAY', '/ɛl ɛ ta.le/', 'cell', FULL,"],
  },

  /* ── The respellings ─────────────────────────────────────────────────── */
  {
    label: 'break the superscript on the one blind nasal',
    src: [CORPUS, "'voo zeht zah-ree-VAY ahⁿ-SAHⁿBL'", "'voo zeht zah-ree-VAY ahⁿ-SAHNBL'"],
    seed: ['"respell": "voo zeht zah-ree-VAY ahⁿ-SAHⁿBL"', '"respell": "voo zeht zah-ree-VAY ahⁿ-SAHNBL"'],
  },
  {
    label: 'un-repair monter',
    src: [CORPUS, "    to: 'mohⁿ-TAY',\n    blind: false,", "    to: 'mohn-TAY',\n    blind: false,"],
    seed: ['"respell": "mohⁿ-TAY"', '"respell": "mohn-TAY"'],
  },
  {
    label: 'put a superscript on sommes, which has no nasal vowel at all',
    src: [CORPUS, "'noo somm pahr-TEE TOH'", "'noo sohⁿm pahr-TEE TOH'"],
    seed: ['"respell": "noo somm pahr-TEE TOH"', '"respell": "noo sohⁿm pahr-TEE TOH"'],
  },
  {
    label: 'file a VISIBLE repair as blind',
    src: [CORPUS, "    half: 'mohⁿ-TAY',\n    to: 'mohⁿ-TAY',\n    blind: false,\n    house: false,",
      "    half: 'mohⁿ-TAY',\n    to: 'mohⁿ-TAY',\n    blind: true,\n    house: false,"],
  },

  /* ── The scene ───────────────────────────────────────────────────────── */
  {
    // a2.05 §11.2, found on a Pixel 6: the bubble loses its last word while the
    // gloss under it still translates it.
    label: 'end a scene bubble on a spaced exclamation mark',
    src: [CORPUS, "R(683, 'Ah, avec des amis. Je comprends.',", "R(683, 'Ah, avec des amis !',"],
    seed: ['"fr": "Ah, avec des amis. Je comprends."', '"fr": "Ah, avec des amis !"'],
  },
  {
    // a2.20 §5.3: a scene guard walking EVERY string passes on a repaired scene,
    // because the English gloss still names the error. The guard here reads only
    // the French the scene SPEAKS.
    label: 'repair the scene French and leave the English gloss naming the error',
    src: [CORPUS, "export const SCENE_ERROR = 'J’ai sorti avec des amis.';", "export const SCENE_ERROR = 'Je suis sorti avec des amis.';"],
    seed: ['"fr": "J’ai sorti avec des amis."', '"fr": "Je suis sorti avec des amis."'],
  },

  /* ── The guards that guard the guards ────────────────────────────────── */
  {
    // a2.18 §6 and a2.20 §5.4: `namesUnit(text, UNIT_CONST)` renames both sides
    // when the constant moves, so the guard stays green while the credit
    // vanishes from every screen. Every unit id in this build's guards is a
    // LITERAL, so this must be CAUGHT.
    label: 'rename the a2.01 constant, which would rename both sides of a weak guard',
    src: [CORPUS, "export const ER_UNIT = 'a2.01';", "export const ER_UNIT = 'a2.99';"],
    seed: ['a2.01 said it in the first lesson of this level', 'a2.99 said it in the first lesson of this level'],
  },
  {
    label: 'drop an import from the manifest, so the carry silently skips it',
    src: [CORPUS, "  { id: 'fr.sons.verbes-essentiels.017', fr: 'passer',", "  { id: 'fr.sons.verbes-essentiels.117', fr: 'passer',"],
  },
  {
    label: 'swap an import for a gendered copy',
    src: [CORPUS, "  { id: 'fr.sons.verbes-essentiels.044', fr: 'tomber', why: 'REPAIRED", "  { id: 'fr.b2.argot-des-jeunes.029', fr: 'tomber', why: 'REPAIRED"],
  },

  /* ── The shape ───────────────────────────────────────────────────────── */
  {
    label: 'give the list more sections than the Owns',
    src: [CORPUS, "export const OWNS_SECTIONS = 8;\nexport const WHICH_VERBS_SECTIONS = 3;",
      "export const OWNS_SECTIONS = 3;\nexport const WHICH_VERBS_SECTIONS = 8;"],
  },
  {
    label: 'make two rounds lead on the same trigger, killing a drill',
    src: [LESSON, "        targets: ['err-only-feminine', 'err-no-ending'],", "        targets: ['err-no-ending', 'err-only-feminine'],"],
    seed: ['"targets": [\n              "err-only-feminine",\n              "err-no-ending"\n            ]',
      '"targets": [\n              "err-no-ending",\n              "err-only-feminine"\n            ]'],
  },
  {
    label: 'cluster the correct answers in one option slot',
    src: [LESSON, "            opts: ['est', 'a', 'ont', 'sont'],\n            correct: 0,", "            opts: ['a', 'est', 'ont', 'sont'],\n            correct: 1,"],
    also: [
      [LESSON, "            opts: ['être', 'avoir', 'either'],\n            correct: 0,", "            opts: ['avoir', 'être', 'either'],\n            correct: 1,"],
      [LESSON, "            opts: ['None', 'All four', 'Two'],\n            correct: 0,", "            opts: ['All four', 'None', 'Two'],\n            correct: 1,"],
      [LESSON, "            opts: ['It is the same shape and it describes her now', 'Yes, and it is a past tense too'],\n            correct: 0,",
        "            opts: ['Yes, and it is a past tense too', 'It is the same shape and it describes her now'],\n            correct: 1,"],
      [LESSON, "            opts: ['Whether it is about moving or about starting or stopping', 'The letters of the crutch', 'How long the verb is'],\n            correct: 0,",
        "            opts: ['The letters of the crutch', 'Whether it is about moving or about starting or stopping', 'How long the verb is'],\n            correct: 1,"],
    ],
    seed: ['"opts": [\n                  "est",\n                  "a",\n                  "ont",\n                  "sont"\n                ],\n                "correct": 0',
      '"opts": [\n                  "a",\n                  "est",\n                  "ont",\n                  "sont"\n                ],\n                "correct": 1'],
    alsoSeed: ['"opts": [\n                  "être",\n                  "avoir",\n                  "either"\n                ],\n                "correct": 0',
      '"opts": [\n                  "avoir",\n                  "être",\n                  "either"\n                ],\n                "correct": 1'],
    thirdSeed: ['"opts": [\n                  "None",\n                  "All four",\n                  "Two"\n                ],\n                "correct": 0',
      '"opts": [\n                  "All four",\n                  "None",\n                  "Two"\n                ],\n                "correct": 1'],
  },
  {
    // FOUR OF THEM, NOT ONE. A single swap takes the typed count from 20 of 36
    // to 19, which still keeps the promise the lesson makes on its own progress
    // card ("most of it is typed"), and no guard should fire on content that
    // keeps its promise. Four takes it to 16, which breaks it. A mutation that
    // does not break a claim proves nothing about the guard (a2.20 §6).
    label: 'replace four typeIns with mcqs, which tests recognition instead',
    src: [LESSON, "            q: 'A woman speaking. Je suis ___ au marché. (aller)',\n            format: 'typeIn',\n            accept: ['allée'],\n            answer: 'allée',",
      "            q: 'A woman speaking. Je suis ___ au marché. (aller)',\n            format: 'mcq',\n            opts: ['allé', 'allée', 'allés'],\n            correct: 1,"],
    also: [
      [LESSON, "            q: 'Two men. Ils sont ___ tôt. (partir)',\n            format: 'typeIn',\n            accept: ['partis'],\n            answer: 'partis',",
        "            q: 'Two men. Ils sont ___ tôt. (partir)',\n            format: 'mcq',\n            opts: ['parti', 'partis', 'parties'],\n            correct: 1,"],
      [LESSON, "            q: 'Three women. Elles sont ___ à midi. (descendre)',\n            format: 'typeIn',\n            accept: ['descendues'],\n            answer: 'descendues',",
        "            q: 'Three women. Elles sont ___ à midi. (descendre)',\n            format: 'mcq',\n            opts: ['descendu', 'descendus', 'descendues'],\n            correct: 2,"],
      [LESSON, "            q: 'One woman. Elle est ___ à la maison. (rester)',\n            format: 'typeIn',\n            accept: ['restée'],\n            answer: 'restée',",
        "            q: 'One woman. Elle est ___ à la maison. (rester)',\n            format: 'mcq',\n            opts: ['resté', 'restée', 'restés'],\n            correct: 1,"],
    ],
    seed: ['"q": "A woman speaking. Je suis ___ au marché. (aller)",\n                "format": "typeIn"',
      '"q": "A woman speaking. Je suis ___ au marché. (aller)",\n                "format": "mcq"'],
  },
  {
    label: 'lengthen a cardDeck hint past the sixty-character cut',
    src: [LESSON, "    hint: 'Swipe. Six cards, and the second one is the lesson.',",
      "    hint: 'Swipe through all six cards, and the second one of them is the whole lesson.',"],
    seed: ['"hint": "Swipe. Six cards, and the second one is the lesson."',
      '"hint": "Swipe through all six cards, and the second one of them is the whole lesson."'],
  },
  {
    label: 'leave a quoted row its own full stop, so a card reads « ..  »',
    src: [LESSON, "body: `${noStop(en(A(665)))} against ${noStop(en(A(666)))}. sortir on its own",
      "body: `${en(A(665))} against ${en(A(666))}. sortir on its own"],
    seed: ['I went out last night against I took the bin out. sortir on its own',
      'I went out last night. against I took the bin out.. sortir on its own'],
  },
  {
    label: 'put grammar jargon on a learner surface',
    src: [LESSON, "      { label: 'the first half', head: 'which first word',",
      "      { label: 'the first half', head: 'which auxiliary',"],
    seed: ['"head": "which first word"', '"head": "which auxiliary"'],
  },
  {
    label: 'drop the agreement rule a2.23 is told to inherit',
    src: [CORPUS, "export const AGREEMENT_RULE =\n  'Add nothing for a man on his own, e for a woman, s for more than one, and es for more than one woman.';",
      "export const AGREEMENT_RULE =\n  'The ending changes for the subject.';"],
    seed: ['Add nothing for a man on his own, e for a woman, s for more than one, and es for more than one woman.',
      'The ending changes for the subject.'],
  },
  {
    label: 'drop a verb from the fifteen',
    src: [CORPUS, "  { verb: 'retourner', past: 'retourné', cells: cellsOf('retourné'), family: 'inout', en: 'to go back', rowId: 'fr.sons.verbes-essentiels.085' },\n", ""],
  },
  {
    label: 'give a role-play turn one alternative',
    src: [LESSON, "        alts: [\n          { fr: fr(A(662)), en: en(A(662)) },\n          { fr: fr(A(694)), en: en(A(694)) },\n        ],",
      "        alts: [\n          { fr: fr(A(662)), en: en(A(662)) },\n        ],"],
  },
  {
    label: 'reword the reframe without moving its count',
    src: [CORPUS, "export const REFRAME = 'After être, the second word ends like a describing word.';",
      "export const REFRAME = 'After être, the second word ends like an adjective.';"],
    seed: ['After être, the second word ends like a describing word.',
      'After être, the second word ends like an adjective.'],
  },
];

/** EVERY SOURCE FILE IN THIS REPO IS CRLF and every anchor in this file is
 *  written with LF. Matching one against the other reports SKIPPED, which looks
 *  exactly like a stale harness: TWELVE of this harness's rows were reported
 *  that way on its first run and every one of the anchors was correct. Try the
 *  LF form and then the CRLF form, and return whichever matched. */
function pick(hay, from, to) {
  if (hay.includes(from)) return [from, to];
  const f = from.split('\n').join('\r\n');
  const t = to.split('\n').join('\r\n');
  if (hay.includes(f)) return [f, t];
  return [null, null];
}

const only = process.argv.slice(2).map(Number).filter((n) => !Number.isNaN(n));
const backup = new Map(FILES.map((f) => [f, readFileSync(f, 'utf8')]));
const restore = () => { for (const [f, s] of backup) writeFileSync(f, s, 'utf8'); };
process.on('exit', restore);
process.on('SIGINT', () => { restore(); process.exit(130); });

function run(cmd) {
  try {
    execSync(cmd, { cwd: join(here, '..'), stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8' });
    return { ok: true, msg: '' };
  } catch (e) {
    const out = `${e.stdout ?? ''}${e.stderr ?? ''}`.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)
      .filter((l) => !l.startsWith('$') && !/ELIFECYCLE|Command failed with exit code/.test(l));
    const interesting = out.filter((l) => !/^(ℹ|✔|›|#)/.test(l));
    const line = interesting[interesting.length - 1] ?? out[out.length - 1] ?? '(no output)';
    return { ok: false, msg: line.slice(0, 150) };
  }
}

const BATCH = 'npx tsx scripts/author-passe-compose-etre-batch.ts --dry-run';
const MERGE = 'npx tsx scripts/merge-passe-compose-etre-into-seed.ts --dry-run';
const TEST = 'node --test ../ealch-v2/src/content/a2-21-passe-compose-etre.test.ts';

console.log('\n  BASELINE, unmutated. If this is not green every row below it is noise.\n');
for (const [name, cmd] of [['batch', BATCH], ['merge', MERGE], ['test', TEST]]) {
  const r = run(cmd);
  console.log(`    ${name.padEnd(6)} ${r.ok ? 'GREEN' : `RED  ${r.msg}`}`);
  if (!r.ok) { console.error('\n  baseline is not green; stopping.\n'); process.exit(1); }
}

console.log('\n  MUTATIONS\n');
console.log('   #  batch  merge  test   claim');
let blind = 0;
let skipped = 0;
let seedSkipped = 0;
M.forEach((mut, i) => {
  if (only.length && !only.includes(i + 1)) return;
  let srcOk = true;
  let seedOk = false;
  const edits = [...(mut.src ? [mut.src] : []), ...(mut.also ?? [])];
  for (const [file, from, to] of edits) {
    const cur = readFileSync(file, 'utf8');
    const [f, t] = pick(cur, from, to);
    if (!f) continue;
    writeFileSync(file, cur.replace(f, t), 'utf8');
  }
  if (mut.src) {
    const cur = backup.get(mut.src[0]);
    if (!pick(cur, mut.src[1], mut.src[2])[0]) srcOk = false;
  }
  if (mut.seed) {
    let s = backup.get(SEED);
    const [f0, t0] = pick(s, mut.seed[0], mut.seed[1]);
    if (f0) { s = s.split(f0).join(t0); seedOk = true; }
    for (const extra of [mut.alsoSeed, mut.thirdSeed]) {
      if (!extra) continue;
      const [f, t] = pick(s, extra[0], extra[1]);
      if (f) s = s.split(f).join(t);
    }
    if (seedOk) writeFileSync(SEED, s, 'utf8');
  }
  if (mut.src && !srcOk) {
    skipped += 1;
    console.log(`  ${String(i + 1).padStart(2)}  SKIPPED — source anchor not found: ${mut.label}`);
    restore();
    return;
  }
  if (mut.seed && !seedOk) seedSkipped += 1;

  const b = mut.src ? run(BATCH) : { ok: true, msg: 'n/a' };
  const m = mut.src ? run(MERGE) : { ok: true, msg: 'n/a' };
  const t = seedOk ? run(TEST) : { ok: true, msg: 'n/a' };
  const col = (r, applicable) => (applicable ? (r.ok ? 'MISS ' : 'caught') : ' n/a ');
  const caught = (mut.src && (!b.ok || !m.ok)) || (seedOk && !t.ok);
  if (!caught) blind += 1;
  console.log(`  ${String(i + 1).padStart(2)}  ${col(b, !!mut.src).padEnd(6)} ${col(m, !!mut.src).padEnd(6)} ${col(t, seedOk).padEnd(6)} ${mut.label}`);
  for (const [who, r, applicable] of [['batch', b, !!mut.src], ['merge', m, !!mut.src], ['test ', t, seedOk]]) {
    if (applicable && !r.ok) console.log(`      ${who}: ${r.msg}`);
  }
  restore();
});

restore();
console.log(`\n  ${blind} mutation(s) caught by NOTHING, ${skipped} skipped, ${seedSkipped} with the seed layer n/a.\n`);
