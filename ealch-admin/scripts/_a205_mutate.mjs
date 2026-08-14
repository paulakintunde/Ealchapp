/* a2.05 mutation harness.
 *
 *   node scripts/_a205_mutate.mjs            all mutations
 *   node scripts/_a205_mutate.mjs 3 7        only those rows
 *
 * Breaks one claim at a time and asks all three layers whether they notice.
 *
 * ── WHAT THE HARNESSES BEFORE THIS ONE LEARNED THE HARD WAY ──────────────
 *
 * 1. RUN EVERY LAYER UNMUTATED FIRST (a2.13 §7). If the baseline is not green,
 *    every row below it is noise.
 * 2. THESE FILES ARE CRLF ON THIS MACHINE. a2.16's harness header says CRLF,
 *    a2.17 §6 corrected it to LF, and both are describing their own checkout
 *    rather than a fact about the repo. This harness reads the file and matches
 *    what is there; a missing anchor is SKIPPED rather than counted as a pass,
 *    which is what makes the mistake visible either way.
 * 3. ONCE THE LESSON HAS BEEN APPLIED, EVERY CONTENT MUTATION TRIPS THE BATCH'S
 *    VERSION CHECK (a2.14 §7), so the batch reports "caught" with that message
 *    rather than on the guard you meant to test. This harness prints the last
 *    line of the failure precisely so the column can be read against the reason.
 *    READ THE MESSAGE, NOT THE COLUMN.
 * 4. THE TEST READS seed.json AND NOTHING ELSE. A source-only mutation it cannot
 *    see is reported n/a, not MISS.
 * 5. ONE ANCHOR IS OFTEN NOT ENOUGH (a2.14 §8). A claim stated in a label, a
 *    `say`, a `why` and a card body is not removed by touching one of them.
 * 6. A GUARD WHOSE EXPECTED VALUE COMES FROM THE SAME MODULE AS THE CONTENT IS
 *    GUARDING NOTHING (a2.18 §6), and that includes guards written while fixing
 *    exactly that.
 *
 * The five the brief names by name are rows 1 to 5:
 *   move pas after the participle · paraphrase a2.19's rule · agree a
 *   participle with avoir · teach an irregular participle · drop a deferral
 *   loop.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const CORPUS = join(here, 'data/passe-compose-corpus.ts');
const LESSON = join(here, 'data/passe-compose-lesson.ts');
const TERMS = join(here, 'data/passe-compose-terms.ts');
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const FILES = [CORPUS, LESSON, TERMS, SEED];

/** { label, src: [file, from, to], also: [...], seed: [from, to] } */
const M = [
  /* ── The five the brief asks for by name ─────────────────────────────── */
  {
    // MOVE THE pas AFTER THE PARTICIPLE, on a correct surface. This is the
    // error the whole lesson exists to prevent, and the Owns rests on it never
    // appearing anywhere the learner is told the sentence is right.
    label: 'move pas after the past form, on a paradigm row',
    src: [CORPUS, `  S(551, "Ils n'ont pas mangé.", 'They did not eat.',`,
      `  S(551, "Ils n'ont mangé pas.", 'They did not eat.',`],
    seed: ['"fr": "Ils n\'ont pas mangé."', '"fr": "Ils n\'ont mangé pas."'],
  },
  {
    // AND IN THE PLACE A LATER AUTHOR WOULD ACTUALLY PUT IT: the reference
    // sheet, which no guard in this band walked before a2.03 §12.
    label: 'put the wrong order in the reference sheet',
    src: [LESSON, "        body: `${REFRAME} ${OWNS_CLAIM} ${POSITION_CLAIM}`,",
      "        body: `${REFRAME} ${OWNS_CLAIM} Je n'ai mangé pas.`,"],
    seed: ['Ne in front of avoir, pas straight after it, and the past form outside both. The gap is one word wide and nothing longer goes in it."',
      'Je n\'ai mangé pas."'],
  },
  {
    // PARAPHRASE a2.19's RULE. The brief says to use its wording verbatim and
    // that a paraphrase must go red, because repeating it in the same words is
    // what turns two lessons into one rule.
    label: "paraphrase a2.19's negation rule",
    src: [CORPUS, "export const NEGATION_CREDIT =\n  `${FUTUR_UNIT} said it one lesson ago: ${A219_REFRAME} Here",
      "export const NEGATION_CREDIT =\n  `${FUTUR_UNIT} said it one lesson ago: Wrap the auxiliary, not the participle. Here"],
    seed: ['a2.19 said it one lesson ago: Wrap the verb that changed, not the one carrying the meaning.',
      'a2.19 said it one lesson ago: Wrap the auxiliary, not the participle.'],
  },
  {
    // AGREE A PARTICIPLE WITH AVOIR. a2.21 says the opposite two lessons later
    // and the contrast only works if this lesson states its side and holds it.
    label: 'agree a past form with avoir on a correct surface',
    src: [CORPUS, "  S(569, 'Elle a mangé une pomme.', 'She ate an apple.',",
      "  S(569, 'Elle a mangée une pomme.', 'She ate an apple.',"],
    seed: ['"fr": "Elle a mangé une pomme."', '"fr": "Elle a mangée une pomme."'],
  },
  {
    // TEACH AN IRREGULAR PARTICIPLE. a2.20 owns forty of them and it is the
    // very next lesson; the brief calls this the hardest restriction in the
    // build because fait, pris, vu and dit are all extremely frequent.
    label: 'teach an irregular past form on the endings screen',
    src: [LESSON, "      { fr: fr(A(556)), en: en(A(556)), note: `${sub(A(556))} And a second -RE verb, which behaves exactly like the first.` },",
      "      { fr: fr(A(556)), en: en(A(556)), note: `${sub(A(556))} And a second -RE verb. Prendre goes to pris, which you cannot build.` },"],
    seed: ['And a second -RE verb, which behaves exactly like the first.',
      'And a second -RE verb. Prendre goes to pris, which you cannot build.'],
  },
  {
    // DROP A DEFERRAL LOOP. a2.17 deferred adverb placement in compound tenses
    // to this lesson ON A LEARNER SURFACE, and this is the lesson that closes it.
    label: "drop a2.17's deferral off the screen that closes it",
    src: [LESSON, "    say: `${ADVERB_UNIT} taught you where a short adverb goes and then said this: « ${A217_DEFERRAL} » This is the tense, and this is the rule. ${ADVERB_PAIR.why}`,",
      "    say: `A short adverb goes in the gap. ${ADVERB_PAIR.why}`,"],
    seed: ['a2.17 taught you where a short adverb goes and then said this: « In a past tense the short ones move',
      'A short adverb goes in the gap. a2.17 put the short ones straight after the verb'],
  },
  {
    // AND THE OTHER ONE. a2.18's canDo was reworded because it promised
    // something that needs this tense, so dropping this loop takes a promise
    // another unit already gave up with it.
    label: "drop a2.18's own sentence off the screen that closes its loop",
    src: [LESSON, "      { fr: importedFr(AGO_PAIR.theirsId), en: importedEn(AGO_PAIR.theirsId), note: `${impSub(AGO_PAIR.theirsId)} That lesson's own sentence,",
      "      { fr: fr(A(562)), en: en(A(562)), note: `${sub(A(562))} That lesson's own sentence,"],
    seed: ['"fr": "J\'ai commencé il y a trois jours.",\n              "en": "I started three days ago."',
      '"fr": "J\'ai travaillé hier.",\n              "en": "I worked yesterday."'],
  },

  /* ── The ledger decision, which is what this lesson existed to make ──── */
  {
    // AUTHOR A BARE PAST FORM AS A CORPUS ROW. This is the decision doctrine §E
    // left open and the brief said was worth sixty rows. The answer is zero on
    // both sides and a2.20 inherits it; a lesson that quietly authors one has
    // reopened a level-wide question in a card.
    label: 'author a bare past form as a headword',
    src: [CORPUS, "  S(552, \"J'ai parlé.\", 'I spoke.',", "  S(552, 'parlé', 'spoken',"],
  },
  {
    // INVERT THE DECISION ITSELF, which the guards read as data rather than as
    // a comment.
    label: 'invert PARTICIPLE_DECISION',
    src: [CORPUS, '  isCorpusItem: false,', '  isCorpusItem: true,'],
  },
  {
    // TAKE a2.20's RESERVED BLOCK. The split with the next lesson is ids, and
    // a row inside its range is the a1.20 failure a build hour was lost to.
    label: "author into a2.20's reserved block",
    src: [CORPUS, 'const V = (n: number) => `fr.a2.verbes.${n}`;',
      'const V = (n: number) => `fr.a2.verbes.${n + 50}`;'],
  },

  /* ── The three layout claims the brief asks the test to assert ───────── */
  {
    // SEPARATE THE AFFIRMATIVE FROM THE NEGATIVE. The first layout claim: they
    // belong on one screen, adjacent, with the two extra words visible in the
    // gap. A lesson that shows them apart has hidden the whole thing.
    label: 'break the pairing in the pair screen',
    src: [LESSON, "      { fr: fr(A(547)), en: en(A(547)), note: `${sub(A(547))} ${POSITION_CLAIM}` },",
      "      { fr: fr(A(548)), en: en(A(548)), note: `${sub(A(548))} ${POSITION_CLAIM}` },"],
    seed: ['"fr": "Je n\'ai pas mangé.",\n              "en": "I did not eat.",\n              "note": "[zhuh nay pa mahⁿ-ZHAY] Ne in front of avoir',
      '"fr": "Tu n\'as pas mangé.",\n              "en": "You did not eat.",\n              "note": "[tü na pa mahⁿ-ZHAY] Ne in front of avoir'],
  },
  {
    // MAKE TWO OF THE THREE GROUPS SHARE AN ENDING. The second layout claim is
    // one grid with one row per group, and the argument of the screen is that
    // the three endings are three different things.
    label: 'give two groups the same ending in the grid',
    src: [CORPUS, "  { group: '-IR', verb: 'finir', past: 'fini', ending: '-i', unit: IR_UNIT,",
      "  { group: '-IR', verb: 'finir', past: 'finu', ending: '-u', unit: IR_UNIT,"],
    seed: ['"cells": [\n                "-IR",\n                "finir",\n                "fini"',
      '"cells": [\n                "-IR",\n                "finir",\n                "finu"'],
  },
  {
    // DROP ONE OF THE THREE UNITS OFF THE PAYOFF SCREEN. The brief asks for all
    // three to be named, because a learner who sees the groups reappear intact
    // has been shown that fifteen lessons of structure were load-bearing.
    label: 'stop naming a2.11 on the groups screen',
    src: [LESSON, "      { fr: fr(A(554)), en: en(A(554)), note: `${sub(A(554))} ${RE_UNIT}'s frame verb. The -re comes off and -u goes on.` },",
      "      { fr: fr(A(554)), en: en(A(554)), note: `${sub(A(554))} The -re comes off and -u goes on.` },"],
    // THREE ANCHORS. a2.14 §8: the claim is stated in the `say` AND in two
    // notes, and touching one of them leaves it true. The first run of this
    // harness had one and reported both the merge and the test blind when both
    // were correct.
    also: [
      [LESSON, "      { fr: fr(A(556)), en: en(A(556)), note: `${sub(A(556))} And a second -RE verb, which behaves exactly like the first.` },",
        "      { fr: fr(A(556)), en: en(A(556)), note: `${sub(A(556))} And a second one, which behaves exactly like the first.` },"],
      [LESSON, "    say: `Six sentences, three groups, and the ending is the group rather than the verb. ${ER_UNIT}, ${IR_UNIT} and ${RE_UNIT} taught you all three of these classes and they have not changed.`,",
        "    say: 'Six sentences, three groups, and the ending is the group rather than the verb.',"],
    ],
    seed: ["a2.01, a2.10 and a2.11 taught you all three of these classes and they have not changed.", 'Nothing has changed.'],
    alsoSeed: ["a2.11's frame verb. The -re comes off and -u goes on.", 'The -re comes off and -u goes on.'],
  },
  {
    // MAKE THE SOUND CONTRAST A READING ONE. The third layout claim: « Je vais
    // manger » and « J'ai mangé » must be audible and in ONE take, because
    // apart the learner compares two performances instead of two auxiliaries.
    label: 'take the tense contrast out of its single take',
    src: [LESSON, "    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-05-tense' },",
      "    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-05-six' },"],
    seed: ['"recordingId": "rec-a2-05-tense"', '"recordingId": "rec-a2-05-six"'],
  },
  {
    // AND STRIP THE INSTRUCTION THAT MAKES THE TAKE WORTH ANYTHING. A constraint
    // on how something is recorded is invisible the moment the clip lands.
    label: 'drop ONE TAKE from the tense audio brief',
    src: [LESSON, "          'THE FUTUR PROCHE AGAINST THE PASSÉ COMPOSÉ, ONE TAKE, ONE VOICE, RECORDED ADJACENTLY, AND THE BRIEF '",
      "          'THE FUTUR PROCHE AGAINST THE PASSÉ COMPOSÉ, AND THE BRIEF '"],
    seed: ['THE FUTUR PROCHE AGAINST THE PASSÉ COMPOSÉ, ONE TAKE, ONE VOICE, RECORDED ADJACENTLY',
      'THE FUTUR PROCHE AGAINST THE PASSÉ COMPOSÉ'],
  },

  /* ── The ear, which is the centre of the lesson ──────────────────────── */
  {
    // ASK THE EAR TO CHOOSE BETWEEN manger AND mangé. There is no correct answer
    // and marking one right certifies a bug. The brief asks for this to be said
    // in a report; a sentence in a report cannot fail.
    label: 'offer manger against mangé in the ear question',
    src: [LESSON, "            opts: [fr(A(566)), fr(A(541))],", "            opts: ['Je vais manger.', 'Je vais mangé.'],"],
    seed: ['"opts": [\n                    "Je vais manger.",\n                    "J\'ai mangé."',
      '"opts": [\n                    "Je vais manger.",\n                    "Je vais mangé."'],
  },
  {
    // ADD A SECOND EAR QUESTION. One is the measured limit of what the ear can
    // be asked in this lesson, and the second one always ends up being the pair
    // that has no answer.
    label: 'add a second listenChoose question',
    src: [LESSON, "            q: 'Il va manger. When is this?',\n            format: 'mcq',",
      "            q: 'Il va manger. When is this?',\n            format: 'listenChoose',"],
    seed: ['"q": "Il va manger. When is this?",\n                  "format": "mcq"',
      '"q": "Il va manger. When is this?",\n                  "format": "listenChoose"'],
  },

  /* ── The neighbours' ground ──────────────────────────────────────────── */
  {
    // USE ÊTRE AS THE FIRST WORD. a2.21 owns the choice and it is two lessons
    // ahead; not one verb of it belongs here.
    label: 'use être as the first word in the reading passage',
    src: [LESSON, "    text: \"Hier, j'ai travaillé jusqu'à sept heures.",
      "    text: \"Hier, je suis allé au bureau. Hier, j'ai travaillé jusqu'à sept heures."],
    seed: ['"text": "Hier, j\'ai travaillé jusqu\'à sept heures.',
      '"text": "Hier, je suis allé au bureau. Hier, j\'ai travaillé jusqu\'à sept heures.'],
  },
  {
    // WRITE THE NAMING FORM WHERE THE PAST FORM BELONGS, on a correct surface.
    // « j'ai manger » is the one nobody hears themselves make.
    label: "put « j'ai manger » on a correct surface",
    src: [LESSON, "      { fr: fr(A(541)), en: en(A(541)), note: `${sub(A(541))} j'ai` },",
      "      { fr: fr(A(541)), en: en(A(541)), note: `${sub(A(541))} j'ai manger` },"],
    seed: ['"note": "[zhay mahⁿ-ZHAY] j\'ai"', '"note": "[zhay mahⁿ-ZHAY] j\'ai manger"'],
  },

  /* ── The reframe, and the false rule it was written against ──────────── */
  {
    // REWORD THE REFRAME IN ONE PLACE. a2.19 §7: a threshold is not a location,
    // and rewording it in one section left eight carrying it.
    label: 'reword the reframe on the scene, where the learner meets it',
    src: [LESSON, "    closing: { text: REFRAME, size: 'md' },",
      "    closing: { text: 'The past is two words long.', size: 'md' },"],
    seed: ['"closing": {\n            "text": "One verb, two words, and the small ones go in between.",\n            "size": "md"',
      '"closing": {\n            "text": "The past is two words long.",\n            "size": "md"'],
  },
  {
    // STATE THE FALSE RULE THE BRIEF'S OWN CANDIDATE STATED. « J'ai mangé une
    // pomme. » is the counterexample this build authors, and the reframe says
    // SMALL words for that reason.
    label: 'say that everything goes in the gap, on a teaching screen',
    src: [TERMS, "      `${OWNS_CLAIM} ${POSITION_CLAIM} A short adverb goes there too",
      "      `Everything goes in the gap. A short adverb goes there too"],
    seed: ['A short adverb goes there too: bien, mal, déjà, beaucoup, encore.',
      'Everything goes in the gap. A short adverb goes there too: bien, mal, déjà, beaucoup, encore.'],
  },
  {
    // AND REMOVE THE COUNTEREXAMPLE, which is the other half of the same claim.
    label: 'drop the apple card that makes the reframe true',
    src: [LESSON, "      { label: 'where it goes', head: 'the apple is outside', body: 'And this is what stops the rule being « everything goes in the gap ».",
      "      { label: 'where it goes', head: 'the apple is outside', body: 'And this is a thing to remember."],
    seed: ['And this is what stops the rule being « everything goes in the gap ».', 'And this is a thing to remember.'],
  },

  /* ── The dictée, and the finding it rests on ─────────────────────────── */
  {
    // PUT A WORD-MODE ROW IN THE DICTÉE. Word mode hands every real word over
    // pre-spelled, so a lesson about a spelling tested there tests nothing.
    label: 'give a WORD-mode row a dictation drill',
    src: [CORPUS, `  S(549, "Nous n'avons pas mangé.", 'We did not eat.', 'noo na-vohⁿ pa mahⁿ-ZHAY', '/nu na.vɔ̃ pa mɑ̃.ʒe/', 'owns', NO_D,`,
      `  S(549, "Nous n'avons pas mangé.", 'We did not eat.', 'noo na-vohⁿ pa mahⁿ-ZHAY', '/nu na.vɔ̃ pa mɑ̃.ʒe/', 'owns', D,`],
    seed: ['"id": "fr.a2.verbes.549",\n      "kind": "sentence",\n      "level": "a2",\n      "theme": "verbes",\n      "fr": "Nous n\'avons pas mangé."',
      '"id": "fr.a2.verbes.549",\n      "kind": "sentence",\n      "level": "a2",\n      "theme": "verbes",\n      "fr": "Nous n\'avons pas mange."'],
  },
  {
    // MISSTATE THE MEASUREMENT THAT MADE `je` REACHABLE. It is the finding of
    // this build and it is checked through the real function on both sides.
    label: 'claim the je negative does not fit',
    src: [CORPUS, "  { person: 'je', affirmative: 8, negative: 13, negativeFits: true },",
      "  { person: 'je', affirmative: 8, negative: 13, negativeFits: false },"],
  },

  /* ── The guards every lesson in this band copies ─────────────────────── */
  {
    // GRAMMAR JARGON IN THE INTRO, which is the field a2.11 shipped one in and
    // which every guard in this band walked past until the ledger widened it.
    label: 'put grammar jargon in the intro',
    src: [LESSON, "  intro:\n    'Somebody is going to ask you about yesterday,",
      "  intro:\n    'The auxiliary takes a past participle. Somebody is going to ask you about yesterday,"],
    seed: ['"intro": "Somebody is going to ask you about yesterday',
      '"intro": "The auxiliary takes a past participle. Somebody is going to ask you about yesterday'],
  },
  {
    // A BANNED WORD IN AN AUDIO BRIEF, which is the hole the seed-wide test
    // found in this build's own v1 and which the widened walk now closes.
    label: 'put a banned word in an audio brief',
    src: [LESSON, "          'THE SIX PERSONS, ONE TAKE, ONE VOICE, IN THE ORDER THE SHEET PRINTS THEM AND AT AN EVEN PACE: '",
      "          'THE SIX PERSONS, ONE TAKE, READ HONESTLY, IN THE ORDER THE SHEET PRINTS THEM: '"],
    seed: ['THE SIX PERSONS, ONE TAKE, ONE VOICE, IN THE ORDER THE SHEET PRINTS THEM AND AT AN EVEN PACE',
      'THE SIX PERSONS, ONE TAKE, READ HONESTLY, IN THE ORDER THE SHEET PRINTS THEM'],
  },
  {
    // A SECOND QUIZ SECTION, which is silently never rendered.
    label: 'add a second quiz section',
    src: [LESSON, "    type: 'roundup',\n    id: ROUNDUP_SECTION_ID,", "    type: 'quiz',\n    id: ROUNDUP_SECTION_ID,"],
  },
  {
    // A STACKED trapDrill, which puts the drill permanently below the fold and
    // freezes the pager header. Two of the thirteen in the band shipped this way.
    label: 'un-step the gap trap',
    src: [LESSON, "      { kind: 'rule', label: 'The rule', title: 'One Gap, One Word' },\n      { kind: 'cards', label: 'Four cards', title: 'In It, Or After It' },\n      { kind: 'audio', label: 'Hear it', title: 'Wrong, Then Right' },\n      { kind: 'drill', label: 'Prove it', title: 'Where Does It Land', gate: true },",
      "      { kind: 'rule', label: 'The rule', title: 'One Gap, One Word' },\n      { kind: 'cards', label: 'Four cards', title: 'In It, Or After It' },\n      { kind: 'drill', label: 'Prove it', title: 'Where Does It Land', gate: true },"],
    seed: ['"kind": "audio",\n                "label": "Hear it",\n                "title": "Wrong, Then Right"\n              },\n              {\n                "kind": "drill",\n                "label": "Prove it",\n                "title": "Where Does It Land",',
      '"kind": "drill",\n                "label": "Prove it",\n                "title": "Where Does It Land",'],
  },
  {
    // MISCOUNT THE CARDS STEP. a2.18 §3: the pager draws one dot per card
    // directly under the label, and every host gate passes THREE CARDS over
    // four dots. Found on a Pixel 6 and by nothing else.
    label: 'label the cards step with the wrong count',
    src: [LESSON, "      { kind: 'cards', label: 'Four cards', title: 'In It, Or After It' },",
      "      { kind: 'cards', label: 'Three cards', title: 'In It, Or After It' },"],
    seed: ['"label": "Four cards",\n                "title": "In It, Or After It"',
      '"label": "Three cards",\n                "title": "In It, Or After It"'],
  },
  {
    // A DUPLICATE fr INSIDE THE THEME, which is one card served twice in the
    // flashcard hub.
    label: 'author a second copy of a sentence already in the theme',
    src: [CORPUS, `  S(566, 'Je vais manger.', 'I am going to eat.',`, `  S(566, 'Je vais payer.', 'I am going to pay.',`],
  },
  {
    // A GENDERED IMPORT, which joins a1.03's ending population the moment the
    // merge CARRIES it into the seed. a2.04 §0, the most expensive thing this
    // band has found. This lesson wanted exactly one such row and refused it.
    label: 'import the gendered row this build refused',
    src: [CORPUS, "  { id: 'fr.sons.jours-et-mois.025', fr: 'hier', use: 'time',",
      "  { id: 'fr.sons.jours-et-mois.036', fr: 'la semaine dernière', use: 'time',"],
  },
  {
    // MISCOUNT THE EVIDENCE. The figures on the cards come from a re-measured
    // read; a constant somebody typed and nobody re-checked is how a lesson
    // comes to print a number that was true once.
    label: 'print an evidence figure the manifest did not measure',
    src: [CORPUS, 'export const NEGATIVE_EVIDENCE = {\n  rows: 90,', 'export const NEGATIVE_EVIDENCE = {\n  rows: 40,'],
  },
  {
    // BREAK A NASAL. Every superscript in the lesson is broken back one at a
    // time by the batch itself; this proves the arithmetic is load-bearing.
    label: 'break a nasal back to a plain n',
    src: [CORPUS, "'eel zohⁿ mahⁿ-ZHAY', '/il.zɔ̃ mɑ̃.ʒe/', 'shape'",
      "'eel zohn mahⁿ-ZHAY', '/il.zɔ̃ mɑ̃.ʒe/', 'shape'"],
    seed: ['"respell": "eel zohⁿ mahⁿ-ZHAY"', '"respell": "eel zohn mahⁿ-ZHAY"'],
  },
  {
    // REPAIR A ROW THE CHECKER IS WRONG ABOUT. « deuxième » is /dø.zjɛm/ with a
    // real /m/; writing a nasal into it would be inventing one. The exemption is
    // by name and asserted to fire, so a build that "fixes" the row goes red.
    label: 'silently drop the false-positive exemption',
    src: [CORPUS, "    id: 'fr.sons.alphabet.402',\n    fr: \"J'ai mal entendu la deuxième lettre.\",",
      "    id: 'fr.sons.voyelles.355',\n    fr: \"J'ai mal entendu la deuxième lettre.\","],
  },
  {
    // DROP THE PUBLISHED NEGATIVE OFF THE PRODUCTION SURFACE. The brief asks for
    // at least one imported id from another theme to be used in production.
    label: 'drop the imported negative off the role-play surface',
    src: [LESSON, "        user: importedFr('fr.a2.negation-et-restriction.113'),\n        userEn: importedEn('fr.a2.negation-et-restriction.113'),",
      "        user: fr(A(561)),\n        userEn: en(A(561)),"],
    seed: ['"user": "Elle n\'a pas répondu à mon message."', '"user": "Elle a bien répondu."'],
  },
  {
    // MAKE THE OWNS LIGHTER THAN THE PARADIGM. Doctrine §B.5: if the act
    // structure gives the paradigm more missions than the Owns, the wrong
    // lesson got built.
    label: 'move a mission out of the Owns act',
    src: [LESSON, "    sections: [PAIR_SECTION_ID, ENGLISH_SECTION_ID, SIX_SECTION_ID, GAP_TRAP_SECTION_ID, PRODUCE_SECTION_ID],",
      "    sections: [PAIR_SECTION_ID, ENGLISH_SECTION_ID, SIX_SECTION_ID, GAP_TRAP_SECTION_ID],"],
    also: [[LESSON, "    sections: [AVOIR_SECTION_ID, GROUPS_SECTION_ID, NOAGREE_SECTION_ID, ERRORS_SECTION_ID],",
      "    sections: [PRODUCE_SECTION_ID, AVOIR_SECTION_ID, GROUPS_SECTION_ID, NOAGREE_SECTION_ID, ERRORS_SECTION_ID],"]],
    seed: ['"s04-pair",\n            "s05-english",\n            "s06-six",\n            "s07-where",\n            "s08-produce"',
      '"s04-pair",\n            "s05-english",\n            "s06-six",\n            "s07-where"'],
  },
  {
    // DROP THE GENERALISATION QUESTION. Doctrine §B.1: a mission that makes the
    // learner answer for a verb the lesson never showed them has taught the
    // system rather than the list, and the brief asks for it by name.
    label: 'ask for a past form the lesson already printed',
    src: [LESSON, "            accept: ['grandi'],\n            answer: 'grandi',", "            accept: ['fini'],\n            answer: 'fini',"],
    seed: ['"accept": [\n                    "grandi"\n                  ],\n                  "answer": "grandi"',
      '"accept": [\n                    "fini"\n                  ],\n                  "answer": "fini"'],
  },
  {
    // DROP a2.31, the third dependent, which no document in this band names and
    // which the brief missed.
    label: 'stop naming the third dependent',
    // THREE ANCHORS, AND THE HARNESS FOUND THE THIRD. The unit is named in the
    // `laterOn` term, in the progress card's stats AND in a roundup point, and
    // the first two runs of this row reported the merge and the test blind
    // while both were correct. a2.14 §8: budget four anchors for any claim
    // about what a lesson names.
    src: [TERMS, "You will need all of this again at ${SCHOOL_UNIT}, where the whole conversation is about what you studied and how it went.",
      'You will need all of this again later.'],
    also: [
      [LESSON, "      { k: 'Used again in', v: `${IRREGULAR_UNIT}, ${ETRE_UNIT} and ${SCHOOL_UNIT}.` },",
        "      { k: 'Used again in', v: `${IRREGULAR_UNIT} and ${ETRE_UNIT}.` },"],
      [LESSON, "      `${IRREGULAR_DEFERRAL} ${ETRE_DEFERRAL} You will want all of it again at ${SCHOOL_UNIT}, where the whole conversation is about what you studied and how it went.`,",
        "      `${IRREGULAR_DEFERRAL} ${ETRE_DEFERRAL}`,"],
    ],
    seed: ['You will need all of this again at a2.31, where the whole conversation is about what you studied and how it went.',
      'You will need all of this again later.'],
    alsoSeed: ['"v": "a2.20, a2.21 and a2.31."', '"v": "a2.20 and a2.21."'],
    thirdSeed: [' You will want all of it again at a2.31, where the whole conversation is about what you studied and how it went.', ''],
  },
];

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

const BATCH = 'npx tsx scripts/author-passe-compose-batch.ts --dry-run';
const MERGE = 'npx tsx scripts/merge-passe-compose-into-seed.ts --dry-run';
const TEST = 'node --test ../ealch-v2/src/content/a2-05-passe-compose.test.ts';

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
    if (!cur.includes(from)) continue;
    writeFileSync(file, cur.replace(from, to), 'utf8');
  }
  if (mut.src) {
    const cur = backup.get(mut.src[0]);
    if (!cur.includes(mut.src[1])) srcOk = false;
  }
  if (mut.seed) {
    const [from, to] = mut.seed;
    let s = backup.get(SEED);
    if (s.includes(from)) { s = s.split(from).join(to); seedOk = true; }
    if (mut.alsoSeed && s.includes(mut.alsoSeed[0])) s = s.split(mut.alsoSeed[0]).join(mut.alsoSeed[1]);
    if (mut.thirdSeed && s.includes(mut.thirdSeed[0])) s = s.split(mut.thirdSeed[0]).join(mut.thirdSeed[1]);
    if (seedOk) writeFileSync(SEED, s, 'utf8');
  }
  if (mut.src && !srcOk) {
    skipped += 1;
    console.log(`  ${String(i + 1).padStart(2)}  SKIPPED — source anchor not found: ${mut.label}`);
    restore();
    return;
  }
  // A MISSING SEED ANCHOR IS A SKIPPED LAYER, NOT A SKIPPED MUTATION.
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
