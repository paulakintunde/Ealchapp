/* a2.18 mutation harness.
 *
 *   node scripts/_a218_mutate.mjs            all mutations
 *   node scripts/_a218_mutate.mjs 3 7        only those rows
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
 *   pair depuis with a past tense · merge the two il y a uses ·
 *   teach the futur proche · paraphrase the a2.02 term.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const CORPUS = join(here, 'data/prepositions-temps-corpus.ts');
const LESSON = join(here, 'data/prepositions-temps-lesson.ts');
const TERMS = join(here, 'data/prepositions-temps-terms.ts');
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const FILES = [CORPUS, LESSON, TERMS, SEED];

/** { label, src: [file, from, to], also: [...], seed: [from, to] } */
const M = [
  /* ── The four the brief asks for by name ─────────────────────────────── */
  {
    // PAIR depuis WITH A PAST TENSE, on a correct surface. This is the error
    // the lesson exists to prevent, and the whole Owns rests on it never
    // appearing anywhere the learner is told the sentence is right.
    label: 'pair depuis with a past tense, on the Owns screen',
    src: [CORPUS, "  S(177, 'Il pleut depuis ce matin.', 'It has been raining since this morning.',",
      "  S(177, 'Il a plu depuis ce matin.', 'It has been raining since this morning.',"],
    seed: ['"fr": "Il pleut depuis ce matin."', '"fr": "Il a plu depuis ce matin."'],
  },
  {
    // AND IN THE PLACE A LATER AUTHOR WOULD ACTUALLY PUT IT: the reference
    // sheet, which no guard in this band walked before a2.03 §12.
    label: 'pair depuis with a past tense, in the reference sheet',
    src: [LESSON, "        body: `${DEPUIS_CLAIM} ${REFRAME} ${EVIDENCE_LINE}`,",
      "        body: `${DEPUIS_CLAIM} On a habité ici depuis trois ans. ${EVIDENCE_LINE}`,"],
    seed: ['French says I live here, and adds depuis to say since when. If it is still happening',
      'French says I live here, and adds depuis to say since when. On a habité ici depuis trois ans. If it is still happening'],
  },
  {
    // MERGE THE TWO il y a USES. The trap is that three words do two jobs; a
    // lesson that presents one job has taught a word rather than a pattern.
    label: 'merge the two il y a uses by making both cards the same job',
    src: [LESSON, "      { promptLabel: 'ago', promptSound: fr(A(189)), fr: fr(A(189)), ipa: '/il i a dø ʒuʁ/', tip: 'A measurement behind it and nothing after that, so the same three words say how far back.' },",
      "      { promptLabel: 'there is', promptSound: fr(A(189)), fr: fr(A(189)), ipa: '/il i a dø ʒuʁ/', tip: 'A measurement behind it, and it still just says the days exist.' },"],
    seed: ['"tip": "A measurement behind it and nothing after that, so the same three words say how far back."',
      '"tip": "A measurement behind it, and it still just says the days exist."'],
    alsoSeed: ['"promptLabel": "ago",\n              "promptSound": "Il y a deux jours."',
      '"promptLabel": "there is",\n              "promptSound": "Il y a deux jours."'],
  },
  {
    // TEACH THE FUTUR PROCHE. a2.19 is the very next lesson and owns it, and
    // `dans` is exactly the word that invites it.
    label: 'teach the futur proche on the dans screen',
    src: [LESSON, "      { fr: fr(A(172)), en: en(A(172)), note: `${sub(A(172))} And the sentence round it, in the present, about something that has not happened.` },",
      "      { fr: fr(A(172)), en: en(A(172)), note: `${sub(A(172))} Or say it with aller in front: je vais partir dans dix minutes.` },"],
    seed: ['And the sentence round it, in the present, about something that has not happened.',
      'Or say it with aller in front: je vais partir dans dix minutes.'],
  },
  {
    // PARAPHRASE THE a2.02 TERM. Doctrine §B.7 says to quote it verbatim,
    // because a learner who sees the same words twice recognises the pattern
    // and a learner who sees two paraphrases sees two lessons.
    label: 'paraphrase a2.02\'s term instead of quoting it',
    src: [CORPUS, "export { WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT };",
      "export const WHAT_FOLLOWS = 'the next word settles it';\nexport { WHAT_FOLLOWS_UNIT };"],
    seed: ['"title": "what comes next decides"', '"title": "the next word settles it"'],
  },

  /* ── The Owns ────────────────────────────────────────────────────────── */
  {
    // CHANGE THE TENSE depuis WANTS. This is the whole of what the lesson owns
    // and it is one cell of the grid.
    label: 'let the grid say depuis takes any tense',
    src: [CORPUS, "    prep: 'depuis', tense: 'present', measures: 'still going', example: 'depuis une heure',",
      "    prep: 'depuis', tense: 'any tense', measures: 'still going', example: 'depuis une heure',"],
    seed: ['"depuis",\n              "present",\n              "still going"', '"depuis",\n              "any tense",\n              "still going"'],
  },
  {
    // DROP THE RECEPTIVE MARK. il y a needs a past tense the learner does not
    // have; a grid that says it is producible has promised something the trail
    // position cannot deliver.
    label: 'mark il y a as producible at seq 14',
    src: [CORPUS, "    prep: 'il y a', tense: 'a past', measures: 'behind you', example: 'il y a une heure',\n    producible: false,",
      "    prep: 'il y a', tense: 'a past', measures: 'behind you', example: 'il y a une heure',\n    producible: true,"],
  },
  {
    // MAKE THE RECEPTIVE ROW A PRODUCTION SURFACE. The one compound tense in
    // the lesson is shown once and asked for nowhere.
    label: 'put the compound-tense row into the dictée',
    src: [CORPUS, "'grid', PN, ['prepositions', 'temps', 'il-y-a', 'receptive']",
      "'grid', PD, ['prepositions', 'temps', 'il-y-a', 'receptive']"],
  },
  {
    // SPLIT THE GRID. Presented as five separate rules the learner has five
    // things to remember; presented as one grid they have one question to ask.
    label: 'split the five-word grid by dropping a row out of it',
    src: [CORPUS, "export const PREP_ORDER: readonly Prep[] = ['depuis', 'pendant', 'il y a', 'dans', 'en'];",
      "export const PREP_ORDER: readonly Prep[] = ['depuis', 'pendant', 'il y a', 'dans'];"],
    seed: ['"en",\n              "any tense",\n              "how long"', '"en",\n              "any tense",\n              "how far"'],
  },
  {
    // MERGE depuis AND pendant. Both come out as "for" in English and the
    // second required contrast is that they are not interchangeable.
    label: 'let pendant mean the stretch is still running',
    src: [CORPUS, "    prep: 'pendant', tense: 'any tense', measures: 'finished', example: 'pendant une heure',",
      "    prep: 'pendant', tense: 'any tense', measures: 'still going', example: 'pendant une heure',"],
    seed: ['"pendant",\n              "any tense",\n              "finished"', '"pendant",\n              "any tense",\n              "still going"'],
  },
  {
    // MERGE en AND dans, which is the third required contrast and the one
    // learners get wrong about half the time.
    label: 'let en mean when it starts, like dans',
    src: [CORPUS, "    prep: 'en', tense: 'any tense', measures: 'how long', example: 'en une heure',",
      "    prep: 'en', tense: 'any tense', measures: 'ahead', example: 'en une heure',"],
    seed: ['"en",\n              "any tense",\n              "how long"', '"en",\n              "any tense",\n              "ahead"'],
  },

  /* ── The neighbours' ground ──────────────────────────────────────────── */
  {
    // TEACH A PLACE SENSE OF dans, which is a2.04's and one seq behind.
    label: 'teach dans in front of a place on a production surface',
    src: [LESSON, "      { front: 'dans or en?', back: EN_DANS_CLAIM, say: fr(A(185)) },",
      "      { front: 'dans or en?', back: 'Dans une heure, and dans le sac for a place.', say: fr(A(185)) },"],
    seed: ['"back": "Dans says when it starts. En says how long it took. One of them is a point and the other is a length, and English uses \\"in\\" for both."',
      '"back": "Dans une heure, and dans le sac for a place."'],
  },
  {
    // RE-TEACH THE CLOCK. a1.12 owns telling the time and this lesson uses it.
    label: 're-teach the clock, which is a1.12\'s',
    src: [LESSON, "      { t: 'Say when something starts', s: ALREADY_YOURS },",
      "      { t: 'Say when something starts', s: 'Il est midi et demie, et quart, moins le quart.' },"],
    seed: ['"s": "The clock and the calendar gave you when on a dial and when on a page.',
      '"s": "Il est midi et demie, et quart, moins le quart. The clock and the calendar gave you when on a dial and when on a page.'],
  },
  {
    // PROMOTE pour TO A SIXTH WORD. The decision is that it is named once and
    // taught nowhere, and the guard counts, so both directions fail.
    label: 'promote pour to a sixth taught word',
    src: [LESSON, "      { front: 'When does « il y a » mean ago?', back: AGO_RULE, say: fr(A(189)) },",
      "      { front: 'When does « il y a » mean ago?', back: `${AGO_RULE} And pour deux semaines is a sixth.`, say: fr(A(189)) },"],
    seed: ['"back": "A measurement and then a full stop means ago. A time word still being described is a thing."',
      '"back": "A measurement and then a full stop means ago. And valide pour six mois is a sixth word."'],
  },
  {
    // DROP THE pour LINE ALTOGETHER, which is the other direction and which a
    // presence-only guard would miss.
    label: 'drop the one pour line out of the sheet',
    src: [LESSON, "        body: POUR_LINE,", "        body: 'And that is the whole set.',"],
    seed: ['You will also meet pour with a length behind it, as in « valide pour six mois ».',
      'And that is the whole set. This sentence used to name a sixth word.'],
  },
  {
    // DROP THE DEFERRAL. A learner who is not told the tense is coming thinks
    // the lesson forgot, and a2.05 gets no hand-off.
    label: 'drop the a2.05 deferral off every learner surface',
    src: [CORPUS, "export const PAST_DEFERRAL =\n  `Il y a for \"ago\" wants a past tense, and you do not have one yet. It arrives in ${PAST_UNIT}, and this is the phrase it will arrive holding.`;",
      "export const PAST_DEFERRAL =\n  'Il y a for \"ago\" is one you will meet again.';"],
    seed: ['wants a past tense, and you do not have one yet. It arrives in a2.05',
      'is one you will meet again. Nothing arrives in'],
  },

  /* ── The respellings ─────────────────────────────────────────────────── */
  {
    // UN-REPAIR pendant. It holds TWO nasals and the checker sees both, so a
    // half repair is caught too; this is the whole un-repair.
    label: 'un-repair the pendant headword back to a plain nasal',
    src: [CORPUS, "    from: 'pahn-DAHN', half: 'pahⁿ-DAHⁿ', to: 'pahⁿ-DAHⁿ', blind: false, house: false,",
      "    from: 'pahn-DAHN', half: 'pahn-DAHN', to: 'pahn-DAHN', blind: false, house: false,"],
    seed: ['"respell": "pahⁿ-DAHⁿ"', '"respell": "pahn-DAHN"'],
  },
  {
    // HALF-REPAIR IT, which is corrections §14.1's failure mode: repair what
    // the checker reports, get a clean report, ship a wrong value. On THIS row
    // the checker sees both nasals, so the half repair is still flagged and the
    // guard fires. That is the finding, asserted.
    label: 'half-repair pendant, fixing only the second nasal',
    src: [CORPUS, "    from: 'pahn-DAHN', half: 'pahⁿ-DAHⁿ', to: 'pahⁿ-DAHⁿ', blind: false, house: false,",
      "    from: 'pahn-DAHN', half: 'pahn-DAHⁿ', to: 'pahn-DAHⁿ', blind: false, house: false,"],
  },
  {
    // CLAIM A BLIND ROW WHERE THERE IS NONE. This build asserts that all five
    // repairs are visible and minimal, which is a first in the band, and the
    // claim has to be able to fail.
    label: 'claim the checker is blind to a row it can see',
    src: [CORPUS, "    from: 'AHN', half: AHN, to: AHN, blind: false, house: false,",
      "    from: 'AHN', half: AHN, to: AHN, blind: true, house: false,"],
  },
  {
    // SPELL il y a TWO WAYS INSIDE ONE LESSON, which is the decision the build
    // spent nine published sentences on.
    label: 'use the other published spelling of il y a on one card',
    src: [CORPUS, "export const IL_Y_A_RESPELL_LOWER = 'eel ee ah';", "export const IL_Y_A_RESPELL_LOWER = 'eel ee a';"],
    seed: ['"respell": "eel ee ah uhⁿ proh-BLEM"', '"respell": "eel ee a uhⁿ proh-BLEM"'],
  },
  {
    // RESPELL problème THE HOUSE WAY, which the checker's first branch flags
    // with no rescue path. a2.04 found this on `même` and listed five nouns;
    // this is the sixth and it is not on the list.
    label: 'respell problème with the two-letter house vowel',
    src: [CORPUS, "uhⁿ proh-BLEM`, '/il i a œ̃ pʁɔ.blɛm/'", "uhⁿ proh-BLEHM`, '/il i a œ̃ pʁɔ.blɛm/'"],
    seed: ['uhⁿ proh-BLEM"', 'uhⁿ proh-BLEHM"'],
  },

  /* ── The guards themselves ───────────────────────────────────────────── */
  {
    // A WORD-MODE DICTÉE TARGET. Word mode hands every real word over
    // pre-spelled, which for a lesson about a small word in front of a duration
    // hands over the answer.
    label: 'put a WORD-mode row into the dictée',
    src: [CORPUS, "  S(170, \"J'habite ici depuis trois ans.\", 'I have lived here for three years.', `zha-BEET ee-SEE ${DEPUIS_RESPELL} trwah-Z${AHN}`, '/ʒa.bit i.si də.pɥi tʁwa.zɑ̃/', 'grid', NO_D,",
      "  S(170, \"J'habite ici depuis trois ans.\", 'I have lived here for three years.', `zha-BEET ee-SEE ${DEPUIS_RESPELL} trwah-Z${AHN}`, '/ʒa.bit i.si də.pɥi tʁwa.zɑ̃/', 'grid', D,"],
  },
  {
    // A STACKED trapDrill. lesson-contract.test.ts enforces the shape seed-wide
    // and a2.03, a2.16 and a2.17 all shipped the stacked one.
    label: 'stack a trapDrill by removing its steps',
    src: [LESSON, "    steps: [\n      { kind: 'rule', label: 'The rule', title: 'Still True, Still Present' },\n      { kind: 'cards', label: 'Three cards', title: 'One Sentence, Two Routes' },\n      { kind: 'audio', label: 'Hear it', title: 'Wrong, Then Right' },\n      { kind: 'drill', label: 'Prove it', title: 'Which Verb', gate: true },\n    ],",
      "    size: 'lg',"],
    seed: ['"title": "Which Verb",\n              "gate": true', '"title": "Which Verb"'],
  },
  {
    // AN AUDIO STEP POINTING AT A TAKE THAT DOES NOT CONTAIN ITS CARDS. The
    // ledger's sweep names this as the one step with a cost.
    label: 'point a trapDrill audio step at a take without its lines',
    src: [LESSON, "    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-18-twice' },",
      "    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-18-dictee' },"],
    seed: ['"recordingId": "rec-a2-18-twice"', '"recordingId": "rec-a2-18-dictee"'],
  },
  {
    // A GENDERED ROW BECOMING AN IMPORT. a2.04's ledger §0: a1.03's population
    // is measured off the SEED and a CARRY is what puts a row there.
    label: 'import a gendered single-word noun',
    src: [CORPUS, "  { id: 'fr.sons.mots-essentiels.013', fr: 'dans', use: 'preposition',",
      "  { id: 'fr.a1.deplacements.003', fr: 'la gare', use: 'preposition',"],
  },
  {
    // AUTHOR INTO THE THEME THE BUILD REJECTED.
    label: 'write the lesson into temps-et-frequence instead',
    src: [CORPUS, "export const THEME = 'prepositions-essentielles';", "export const THEME = 'temps-et-frequence';"],
  },
  {
    // AUTHOR OUTSIDE THE BLOCK, which is the a2.16 §1 / a2.03 defect from the
    // other side.
    label: 'author a row outside the id block',
    src: [CORPUS, "  PH(180, 'depuis trois ans'", "  PH(120, 'depuis trois ans'"],
  },
  {
    // A FOURTH COLUMN IN THE SHEET, which a2.04 measured clipping on a Pixel 6.
    label: 'add a fourth column to a sheet table',
    src: [LESSON, "        cols: ['The word', 'The tense', 'It measures'],\n        rows: GRID.map((g) => [g.prep, g.tense, g.measures]),",
      "        cols: ['The word', 'The tense', 'It measures', 'Example'],\n        rows: GRID.map((g) => [g.prep, g.tense, g.measures, g.example]),"],
    seed: ['"The word",\n              "The tense",\n              "It measures"\n            ],', '"The word",\n              "The tense",\n              "It measures",\n              "Example"\n            ],'],
  },
  {
    // A FOURTH TERM CHIP, and the row width with it.
    label: 'declare a fourth term chip on a section',
    src: [LESSON, "    terms: ['stillRunning', 'presentNotPerfect', 'theTwoFors'],\n  },\n\n  /* ── Act 2",
      "    terms: ['stillRunning', 'presentNotPerfect', 'theTwoFors', 'whatComesNext'],\n  },\n\n  /* ── Act 2"],
    seed: ['"stillRunning",\n            "presentNotPerfect",\n            "theTwoFors"\n          ]', '"stillRunning",\n            "presentNotPerfect",\n            "theTwoFors",\n            "whatComesNext"\n          ]'],
  },
  {
    // TWO ROUNDS LEADING ON ONE TRIGGER, which makes a drill unreachable. a1.05
    // shipped two dead drills that way.
    label: 'make two quiz rounds lead on the same trigger',
    src: [LESSON, "        targets: ['err-dans-for-en', 'err-ilya-job'],", "        targets: ['err-ilya-job', 'err-dans-for-en'],"],
    seed: ['"err-dans-for-en",\n              "err-ilya-job"', '"err-ilya-job",\n              "err-dans-for-en"'],
  },
  {
    // A ROLE-PLAY TURN WITH ONE ALTERNATIVE. scenario.logic.test.ts enforces
    // two across the whole seed and no document in this band mentions it.
    label: 'drop an alternative off a role-play turn',
    src: [LESSON, "        alts: [\n          { fr: fr(A(170)), en: en(A(170)) },\n          { fr: 'Depuis six mois, oui.', en: 'For six months, yes.' },\n        ],",
      "        alts: [\n          { fr: fr(A(170)), en: en(A(170)) },\n        ],"],
    seed: ['"fr": "Depuis six mois, oui.",\n              "en": "For six months, yes."\n            }\n          ]', '"fr": "Depuis six mois, oui.",\n              "en": "For six months, yes."\n            }\n          ],\n          "spare": []'],
  },
  {
    // THE REFRAME REWORDED IN ONE PLACE, which is the drift a derived count
    // cannot see.
    label: 'reword the reframe in the lesson but not in the corpus',
    src: [LESSON, "    closing: { text: REFRAME, size: 'md' },", "    closing: { text: 'Still going means still present.', size: 'md' },"],
    seed: ['"text": "If it is still happening, French keeps it in the present.",\n          "size": "md"', '"text": "Still going means still present.",\n          "size": "md"'],
  },
  {
    // A SECOND QUIZ SECTION, which is silently never rendered.
    label: 'add a second quiz section',
    src: [LESSON, "    type: 'roundup',\n    id: ROUNDUP_SECTION_ID,", "    type: 'quiz',\n    id: ROUNDUP_SECTION_ID,"],
  },
  {
    // GRAMMAR JARGON ON A LEARNER SURFACE, in the field a2.11 shipped one in.
    label: 'put grammar jargon in the intro',
    src: [LESSON, "  intro:\n    'Somebody is going to ask you how long you have been here,", "  intro:\n    'The present perfect is what English uses here. Somebody is going to ask you how long you have been here,"],
    seed: ['"intro": "Somebody is going to ask you', '"intro": "The present perfect is what English uses here. Somebody is going to ask you'],
  },
  {
    // A DUPLICATE fr INSIDE THE THEME, which is the defect v1 actually shipped
    // and which only the merge caught.
    label: 'author a second copy of a sentence already in the theme',
    src: [CORPUS, "  S(179, 'Je suis ici depuis six mois.'", "  S(179, 'Elle vit ici depuis trois ans.'"],
  },
  {
    // THE SAME PHRASE RESPELLED TWO WAYS INSIDE ONE LESSON, in the OTHER
    // direction: change the imported card rather than the authored ones. Both
    // values are published and neither is flagged, so this is the mutation that
    // no layer caught before this run.
    label: 'respell the imported il y a card the other published way',
    src: [CORPUS, "export const IL_Y_A_RESPELL = 'EEL EE AH';", "export const IL_Y_A_RESPELL = 'EEL EE A';"],
  },
  {
    // GUT THE DEFERRAL SENTENCE while leaving a2.05 named elsewhere, which is
    // what a loose "is a2.05 mentioned" check cannot see.
    label: 'gut the deferral sentence but leave a2.05 named',
    src: [CORPUS, "It arrives in ${PAST_UNIT}, and this is the phrase it will arrive holding.`;",
      "You will see it again.`;"],
    seed: ['wants a past tense, and you do not have one yet. It arrives in a2.05, and this is the phrase it will arrive holding.',
      'is one of the five. You will see it again.'],
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

const BATCH = 'npx tsx scripts/author-prepositions-temps-batch.ts --dry-run';
const MERGE = 'npx tsx scripts/merge-prepositions-temps-into-seed.ts --dry-run';
const TEST = 'node --test ../ealch-v2/src/content/a2-18-prepositions-temps.test.ts';

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
