/* a2.19 mutation harness.
 *
 *   node scripts/_a219_mutate.mjs            all mutations
 *   node scripts/_a219_mutate.mjs 3 7        only those rows
 *
 * Breaks one claim at a time and asks all three layers whether they notice.
 *
 * ── WHAT THE HARNESSES BEFORE THIS ONE LEARNED THE HARD WAY ──────────────
 *
 * 1. RUN EVERY LAYER UNMUTATED FIRST (a2.13 §7). If the baseline is not green,
 *    every row below it is noise.
 * 2. THESE FILES ARE LF (a2.17 §6, correcting a2.16's harness header, which
 *    says CRLF and is wrong). A missing anchor is SKIPPED rather than counted
 *    as a pass, which is what makes the mistake visible.
 * 3. ONCE THE LESSON HAS BEEN APPLIED, EVERY CONTENT MUTATION TRIPS THE BATCH'S
 *    VERSION CHECK (a2.14 §7), so the batch reports "caught" with that message
 *    rather than on the guard you meant to test. This harness prints the last
 *    line of the failure precisely so the column can be read against the reason.
 *    READ THE MESSAGE, NOT THE COLUMN.
 * 4. THE TEST READS seed.json AND NOTHING ELSE. A source-only mutation it cannot
 *    see is reported n/a, not MISS.
 * 5. ONE ANCHOR IS OFTEN NOT ENOUGH (a2.14 §8). A claim stated in a label, a
 *    `say`, a `why` and a card body is not removed by touching one of them.
 *
 * The four the brief names by name are rows 1 to 4:
 *   move pas after the naming form · separate the affirmative from the negative ·
 *   conjugate the one-word future · paraphrase the a2.02 term.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const CORPUS = join(here, 'data/futur-proche-corpus.ts');
const LESSON = join(here, 'data/futur-proche-lesson.ts');
const TERMS = join(here, 'data/futur-proche-terms.ts');
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const FILES = [CORPUS, LESSON, TERMS, SEED];

/** { label, src: [file, from, to], also: [...], seed: [from, to] } */
const M = [
  /* ── The four the brief asks for by name ─────────────────────────────── */
  {
    // MOVE THE pas AFTER THE NAMING FORM, on a correct surface. This is the
    // error the whole lesson exists to prevent, and the Owns rests on it never
    // appearing anywhere the learner is told the sentence is right.
    label: 'move pas after the naming form, on the Owns screen',
    src: [CORPUS, "  S(509, 'Il ne va pas partir.', 'He is not going to leave.',",
      "  S(509, 'Il ne va partir pas.', 'He is not going to leave.',"],
    seed: ['"fr": "Il ne va pas partir."', '"fr": "Il ne va partir pas."'],
  },
  {
    // AND IN THE PLACE A LATER AUTHOR WOULD ACTUALLY PUT IT: the reference
    // sheet, which no guard in this band walked before a2.03 §12.
    label: 'put the wrong order in the reference sheet',
    src: [LESSON, "        body: `${REFRAME} ${OWNS_CLAIM} ${POSITION_CLAIM}`,",
      "        body: `${REFRAME} ${OWNS_CLAIM} Je ne vais manger pas.`,"],
    seed: ['Ne in front of aller, pas straight after it, and the naming form outside both. Nothing else in the sentence moves at all."',
      'Je ne vais manger pas."'],
  },
  {
    // SEPARATE THE AFFIRMATIVE FROM THE NEGATIVE. The brief's one layout claim:
    // they belong on one screen, adjacent, with the pas visibly between the two
    // verbs. A lesson that shows them apart has hidden the whole thing.
    label: 'separate the affirmative from the negative in the pair screen',
    src: [LESSON, "      { fr: fr(A(507)), en: en(A(507)), note: `${sub(A(507))} ${POSITION_CLAIM}` },",
      "      { fr: fr(A(502)), en: en(A(502)), note: `${sub(A(502))} ${POSITION_CLAIM}` },"],
    seed: ['"fr": "Je ne vais pas partir.",\n              "en": "I am not going to leave.",\n              "note": "[zhuh nuh veh pah par-TEER] Ne in front of aller',
      '"fr": "Tu vas partir.",\n              "en": "You are going to leave.",\n              "note": "[tü vah par-TEER] Ne in front of aller'],
  },
  {
    // CONJUGATE THE ONE-WORD FUTURE. It is beyond A2 entirely: this lesson names
    // it so a learner who meets it does not conclude they were taught a
    // shortcut, and teaching it would be four levels of curriculum in one card.
    label: 'conjugate the one-word future on the time screen',
    src: [LESSON, "      { fr: fr(A(514)), en: en(A(514)), note: `${sub(A(514))} And a day instead of a length, which works exactly the same way.` },",
      "      { fr: fr(A(514)), en: en(A(514)), note: `${sub(A(514))} Or in one word: tu travailleras demain.` },"],
    seed: ['And a day instead of a length, which works exactly the same way.',
      'Or in one word: tu travailleras demain.'],
  },
  {
    // PARAPHRASE THE a2.02 TERM. Doctrine §B.7 says to quote it verbatim,
    // because a learner who sees the same words a third time recognises the
    // pattern and a learner who sees three paraphrases sees three lessons.
    label: "paraphrase a2.02's term instead of quoting it",
    src: [CORPUS, "export { WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT };\nexport const ALLER_UNIT = 'a2.02';",
      "export const WHAT_FOLLOWS = 'the next word settles it';\nexport { WHAT_FOLLOWS_UNIT };\nexport const ALLER_UNIT = 'a2.02';"],
    seed: ['"title": "what comes next decides"', '"title": "the next word settles it"'],
  },

  /* ── The other back-references ───────────────────────────────────────── */
  {
    // PARAPHRASE a2.13's REFRAME. The brief asks for the back-reference by name
    // and the same argument applies: the learner has read that sentence before.
    label: "paraphrase a2.13's reframe instead of quoting it",
    src: [CORPUS, "export const A213_REFRAME = 'One verb changes for the person, and the next one never does.';",
      "export const A213_REFRAME = 'Only the first verb takes a person ending.';"],
    seed: ['One verb changes for the person, and the next one never does.', 'Only the first verb takes a person ending.'],
  },
  {
    // CONTRADICT a1.18 ABOUT THE DROPPED ne. The brief says this lesson must not
    // say something different about it, and a1.18 introduced it for RECEPTION
    // ONLY across eight of its own screens.
    label: "contradict a1.18 about the dropped ne",
    src: [CORPUS, "export const A118_NE_DROP =\n  'In writing, both halves every time. In speech the ne very often goes, and you need to hear it.';",
      "export const A118_NE_DROP =\n  'Everybody drops the ne, so you can drop it too.';"],
    seed: ['In writing, both halves every time. In speech the ne very often goes, and you need to hear it.',
      'Everybody drops the ne, so you can drop it too.'],
  },
  {
    // DROP THE a2.05 HAND-OFF. a2.05 is told to extend this lesson's rule, so a
    // learner who is not told the rule comes back thinks it was a one-off.
    label: 'drop the a2.05 hand-off off every learner surface',
    src: [CORPUS, "export const PAST_DEFERRAL =\n  `The next lesson puts a past tense in front of a second verb the same way this one puts aller there, and the negative behaves exactly as it does here. That is ${PAST_UNIT}.`;",
      "export const PAST_DEFERRAL =\n  'There is more of this later on.';"],
    // THE REPLACEMENT MUST NOT REINTRODUCE THE PHRASE THE GUARD LOOKS FOR.
    // a2.15 §9: a bad mutation proves nothing and costs a diagnosis cycle. The
    // first version of this row put the sentence back in a negative frame and
    // the test reported MISS while the assertion was working correctly.
    seed: ['The next lesson puts a past tense in front of a second verb the same way this one puts aller there, and the negative behaves exactly as it does here. That is a2.05.',
      'There is more of this later on.'],
  },
  {
    // BREAK THE dans LOOP a2.18 ASKED THIS LESSON TO CLOSE, by putting its
    // sentence on a different screen from this lesson's version of it.
    label: "drop a2.18's own sentence off the screen that closes its loop",
    src: [LESSON, "      { fr: importedFr(DANS_PAIR.theirsId), en: importedEn(DANS_PAIR.theirsId), note: `${impSub(DANS_PAIR.theirsId)} ${TIME_UNIT}'s own sentence, and it is correct as it stands.` },",
      "      { fr: fr(A(518)), en: en(A(518)), note: `${sub(A(518))} Another plan, with no time on it at all.` },"],
    seed: ['"fr": "Je pars dans dix minutes.",\n              "en": "I am leaving in ten minutes."',
      '"fr": "Je vais rester ici.",\n              "en": "I am going to stay here."'],
  },

  /* ── The Owns ────────────────────────────────────────────────────────── */
  {
    // LET THE SECOND VERB CHANGE. The third column of the grid is one word six
    // times and that smallness IS the teaching.
    label: 'let the third column of the grid change for the person',
    src: [LESSON, "      cells: [p.person, p.aller, FRAME_VERB],",
      "      cells: [p.person, p.aller, i > 2 ? 'partent' : FRAME_VERB],"],
    seed: ['"nous",\n              "allons",\n              "partir"', '"nous",\n              "allons",\n              "partent"'],
  },
  {
    // CONJUGATE A COMPOUND TENSE, which is a2.05 and one seq ahead.
    label: 'conjugate a compound tense in the reading passage',
    src: [LESSON, "text: 'Ce soir, je ne vais pas travailler.",
      "text: 'Hier, j’ai travaillé tard. Ce soir, je ne vais pas travailler."],
    seed: ['"text": "Ce soir, je ne vais pas travailler.', '"text": "Hier, j’ai travaillé tard. Ce soir, je ne vais pas travailler.'],
  },
  {
    // TEACH THE WRONG VERB AS THE ONE THAT GETS WRAPPED, in the rule card of the
    // trap that exists to teach it.
    label: 'let the trap rule say the halves go round the second verb',
    src: [CORPUS, "export const OWNS_CLAIM =\n  'Two verbs, and only one of them gets wrapped. The two halves go round aller, which is the one that changed for you, and the verb carrying the meaning stays outside them.';",
      "export const OWNS_CLAIM =\n  'Two verbs, and only one of them gets wrapped. The two halves go round the verb carrying the meaning, and aller stays outside them.';"],
    seed: ['The two halves go round aller, which is the one that changed for you',
      'The two halves go round the verb carrying the meaning, and aller'],
  },
  {
    // REWORD THE REFRAME SO IT NO LONGER EXTENDS a1.18's. The brief is explicit
    // that this lesson must not contradict the earlier rule, and the chosen
    // wording opens on a1.18's own first three words for that reason.
    label: 'reword the reframe so it stops opening on a1.18\'s own words',
    src: [CORPUS, "export const REFRAME = 'Wrap the verb that changed, not the one carrying the meaning.';",
      "export const REFRAME = 'Negation goes round the first verb only.';"],
    seed: ['Wrap the verb that changed, not the one carrying the meaning.', 'Negation goes round the first verb only.'],
  },
  {
    // REWORD IT IN THE LESSON AND NOT IN THE CORPUS, which is the drift a
    // derived count cannot see.
    label: 'reword the reframe in the lesson but not in the corpus',
    src: [LESSON, "    closing: { text: REFRAME, size: 'md' },", "    closing: { text: 'The first verb takes the negative.', size: 'md' },"],
    seed: ['"text": "Wrap the verb that changed, not the one carrying the meaning.",\n          "size": "md"',
      '"text": "The first verb takes the negative.",\n          "size": "md"'],
  },

  /* ── The dropped ne, which is reception only ─────────────────────────── */
  {
    // MAKE THE RECEPTIVE ROW A PRODUCTION SURFACE. a1.18 produces the dropped ne
    // nowhere and says so in its own grammarIntroduced.
    label: 'put the dropped-ne row into the dictée',
    src: [CORPUS, "'register', RECEPTIVE, [...TN, 'receptive']", "'register', D, [...TN, 'receptive']"],
  },
  {
    // AND DROP THE MARK OFF ITS GLOSS, which is the other half: a card that does
    // not say it is speech reads as a second correct way to write it.
    label: 'drop the spoken-register mark off the dropped-ne gloss',
    src: [CORPUS, "'I am not going to go out. (spoken French, with the ne dropped)'", "'I am not going to go out, the short way.'"],
    seed: ['I am not going to go out. (spoken French, with the ne dropped)', 'I am not going to go out, the short way.'],
  },

  /* ── The respellings ─────────────────────────────────────────────────── */
  {
    // UN-REPAIR THE ONE BLIND NASAL. Corrections §6: a nasal followed by a
    // consonant inside the token is invisible to the shared checker, so this is
    // the mutation only a by-name assertion can catch.
    label: 'un-repair the blind nasal the shared checker cannot see',
    src: [CORPUS, "    to: 'zhuh nuh veh pah mahⁿ-ZHAY duh VYAHⁿD suh SWAR',",
      "    to: 'zhuh nuh veh pah mahⁿ-ZHAY duh VYAHND suh SWAR',"],
    seed: ['"respell": "zhuh nuh veh pah mahⁿ-ZHAY duh VYAHⁿD suh SWAR"',
      '"respell": "zhuh nuh veh pah mahⁿ-ZHAY duh VYAHND suh SWAR"'],
  },
  {
    // AND UN-REPAIR ONE THE CHECKER CAN SEE, so both halves of the nasal claim
    // have to be able to fail.
    label: 'break a nasal the shared checker CAN see',
    src: [CORPUS, "  S(506, 'Ils vont partir.', 'They are going to leave.', 'eel vohⁿ par-TEER'",
      "  S(506, 'Ils vont partir.', 'They are going to leave.', 'eel vohn par-TEER'"],
    seed: ['"respell": "eel vohⁿ par-TEER"', '"respell": "eel vohn par-TEER"'],
  },
  {
    // CLAIM THE FALSE-POSITIVE PATH IS MET WHERE IT IS NOT. Corrections §6 asks
    // for the absence to be reported, and a report has to be able to be wrong.
    label: 'claim a false positive on a candidate that does not fire',
    src: [CORPUS, "  { fr: 'samedi', respell: 'sam-DEE' },", "  { fr: 'jaune', respell: 'ZHOHN' },"],
  },

  /* ── The dictée ──────────────────────────────────────────────────────── */
  {
    // A WORD-MODE DICTÉE TARGET. Word mode hands every real word over
    // pre-spelled, which for a lesson about where two small words land hands
    // over the answer.
    label: 'put a WORD-mode row into the dictée',
    src: [CORPUS, "  S(507, 'Je ne vais pas partir.', 'I am not going to leave.', 'zhuh nuh veh pah par-TEER', '/ʒə nə vɛ pa paʁ.tiʁ/', 'owns', NO_D,",
      "  S(507, 'Je ne vais pas partir.', 'I am not going to leave.', 'zhuh nuh veh pah par-TEER', '/ʒə nə vɛ pa paʁ.tiʁ/', 'owns', D,"],
  },
  {
    // AND FALSIFY THE MATRIX THAT DECIDED THE FRAME. It is asserted through the
    // real dicteeMode in all three layers precisely so a figure that drifts
    // fails a build rather than a card printing a number nobody checked.
    label: 'falsify the dictée matrix the frame decision rests on',
    src: [CORPUS, "  { person: 'je', affirmative: 12, negative: 17, negativeFits: false },",
      "  { person: 'je', affirmative: 12, negative: 16, negativeFits: true },"],
  },

  /* ── The guards themselves ───────────────────────────────────────────── */
  {
    // A STACKED trapDrill. lesson-contract.test.ts enforces the shape seed-wide
    // and a2.03, a2.16 and a2.17 all shipped the stacked one.
    label: 'stack a trapDrill by removing its steps',
    src: [LESSON, "    steps: [\n      { kind: 'rule', label: 'The rule', title: 'The One That Changed' },\n      { kind: 'cards', label: 'Four cards', title: 'Two Routes, One Sentence' },\n      { kind: 'audio', label: 'Hear it', title: 'Wrong, Then Right' },\n      { kind: 'drill', label: 'Prove it', title: 'Where Does Pas Go', gate: true },\n    ],",
      "    size: 'lg',"],
    seed: ['"title": "Where Does Pas Go",\n              "gate": true', '"title": "Where Does Pas Go"'],
  },
  {
    // AN AUDIO STEP POINTING AT A TAKE THAT DOES NOT CONTAIN ITS CARDS. The
    // ledger's sweep names this as the one step with a cost.
    label: 'point a trapDrill audio step at a take without its lines',
    src: [LESSON, "    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-19-twice' },",
      "    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-19-dictee' },"],
    seed: ['"recordingId": "rec-a2-19-twice"', '"recordingId": "rec-a2-19-dictee"'],
  },
  {
    // AUTHOR OUTSIDE THE BLOCK, which is the a2.16 §1 / a2.03 defect from the
    // other side.
    label: 'author a row outside the id block',
    src: [CORPUS, "  S(518, 'Je vais rester ici.'", "  S(418, 'Je vais rester ici.'"],
  },
  {
    // AUTHOR INTO THE THEME THE BUILD REJECTED.
    label: 'write the lesson into negation-et-restriction instead',
    src: [CORPUS, "export const THEME = 'verbes';", "export const THEME = 'negation-et-restriction';"],
  },
  {
    // IMPORT A GENDERED SINGLE-WORD NOUN. a2.04's ledger §0: a1.03's population
    // is measured off the SEED and a CARRY is what puts a row there.
    label: 'import a gendered single-word noun',
    src: [CORPUS, "  { id: 'fr.sons.verbes-essentiels.010', fr: 'venir', use: 'headword',",
      "  { id: 'fr.a1.deplacements.003', fr: 'la gare', use: 'headword',"],
  },
  {
    // A FOURTH COLUMN IN THE SHEET, which a2.04 measured clipping on a Pixel 6.
    label: 'add a fourth column to a sheet table',
    src: [LESSON, "        cols: ['Person', 'Aller', 'Then'],\n        rows: PERSONS.map((p) => [p.person, p.aller, FRAME_VERB]),",
      "        cols: ['Person', 'Aller', 'Then', 'Means'],\n        rows: PERSONS.map((p) => [p.person, p.aller, FRAME_VERB, 'going to leave']),"],
    seed: ['"Person",\n              "Aller",\n              "Then"\n            ],', '"Person",\n              "Aller",\n              "Then",\n              "Means"\n            ],'],
  },
  {
    // A FOURTH TERM CHIP, and the row width with it.
    label: 'declare a fourth term chip on a section',
    src: [LESSON, "    terms: ['whichVerb', 'goingTo', 'neverChanges'],\n  },\n\n  /* ── Act 3",
      "    terms: ['whichVerb', 'goingTo', 'neverChanges', 'whatNext'],\n  },\n\n  /* ── Act 3"],
    seed: ['"whichVerb",\n            "goingTo",\n            "neverChanges"\n          ]', '"whichVerb",\n            "goingTo",\n            "neverChanges",\n            "whatNext"\n          ]'],
  },
  {
    // TWO ROUNDS LEADING ON ONE TRIGGER, which makes a drill unreachable. a1.05
    // shipped two dead drills that way.
    label: 'make two quiz rounds lead on the same trigger',
    src: [LESSON, "        targets: ['err-ne-drop', 'err-pas-position'],", "        targets: ['err-pas-position', 'err-ne-drop'],"],
    seed: ['"err-ne-drop",\n              "err-pas-position"', '"err-pas-position",\n              "err-ne-drop"'],
  },
  {
    // A ROLE-PLAY TURN WITH ONE ALTERNATIVE. scenario.logic.test.ts enforces two
    // across the whole seed and no document in this band mentions it.
    label: 'drop an alternative off a role-play turn',
    src: [LESSON, "        alts: [\n          { fr: 'Oui, je vais venir.', en: 'Yes, I am going to come.' },\n          { fr: 'Non, je ne vais pas venir samedi.', en: 'No, I am not going to come on Saturday.' },\n        ],",
      "        alts: [\n          { fr: 'Oui, je vais venir.', en: 'Yes, I am going to come.' },\n        ],"],
    seed: ['"fr": "Non, je ne vais pas venir samedi.",\n              "en": "No, I am not going to come on Saturday."\n            }\n          ]',
      '"fr": "Non, je ne vais pas venir samedi.",\n              "en": "No, I am not going to come on Saturday."\n            }\n          ],\n          "spare": []'],
  },
  {
    // A SECOND QUIZ SECTION, which is silently never rendered.
    label: 'add a second quiz section',
    src: [LESSON, "    type: 'roundup',\n    id: ROUNDUP_SECTION_ID,", "    type: 'quiz',\n    id: ROUNDUP_SECTION_ID,"],
  },
  {
    // GRAMMAR JARGON ON A LEARNER SURFACE, in the field a2.11 shipped one in.
    label: 'put grammar jargon in the intro',
    src: [LESSON, "  intro:\n    'Somebody is going to ask you what you are doing later,",
      "  intro:\n    'The periphrastic future takes an infinitive. Somebody is going to ask you what you are doing later,"],
    seed: ['"intro": "Somebody is going to ask you what you are doing later',
      '"intro": "The periphrastic future takes an infinitive. Somebody is going to ask you what you are doing later'],
  },
  {
    // A DUPLICATE fr INSIDE THE THEME, which is the defect a2.18 v1 shipped and
    // which only its merge caught.
    label: 'author a second copy of a sentence already in the theme',
    src: [CORPUS, "  S(513, 'Je vais payer.'", "  S(513, 'Je peux payer.'"],
  },
  {
    // LET THE HOUSE-CHROME EXEMPTION GROW. « Ce que vous saurez faire » is the
    // one place this lesson may print the tense it refuses to teach, and an
    // exemption nobody bounds is an exemption that spreads.
    label: 'use the house goals heading a second time',
    src: [LESSON, "    frSub: 'Ce que vous savez faire',", "    frSub: 'Ce que vous saurez faire',"],
    seed: ['"frSub": "Ce que vous savez faire"', '"frSub": "Ce que vous saurez faire"'],
  },
  {
    // DROP THE PUBLISHED NEGATIVE OFF THE PRODUCTION SURFACE. The brief asks for
    // at least one imported id from another theme to be used in production, and
    // asserted by id.
    label: 'drop the imported negative off the role-play surface',
    src: [LESSON, "        user: importedFr('fr.a2.negation-et-restriction.164'),\n        userEn: importedEn('fr.a2.negation-et-restriction.164'),",
      "        user: fr(A(524)),\n        userEn: en(A(524)),"],
    seed: ['"user": "Elle ne va pas finir le rapport ce soir."', '"user": "Je ne vais pas travailler."'],
  },
  {
    // MISCOUNT THE EVIDENCE. The figures on the cards come from a re-measured
    // read; a constant somebody typed and nobody re-checked is how a lesson
    // comes to print a number that was true once.
    label: 'print an evidence figure the manifest did not measure',
    src: [CORPUS, "export const NEGATIVE_EVIDENCE = {\n  rows: 13,", "export const NEGATIVE_EVIDENCE = {\n  rows: 40,"],
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
    return { ok: false, msg: line.slice(0, 140) };
  }
}

const BATCH = 'npx tsx scripts/author-futur-proche-batch.ts --dry-run';
const MERGE = 'npx tsx scripts/merge-futur-proche-into-seed.ts --dry-run';
const TEST = 'node --test ../ealch-v2/src/content/a2-19-futur-proche.test.ts';

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
