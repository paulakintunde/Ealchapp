/* a2.22 mutation harness.
 *
 *   node scripts/_a222_mutate.mjs            all mutations
 *   node scripts/_a222_mutate.mjs 3 7        only those rows
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
 * 5. ONE ANCHOR IS OFTEN NOT ENOUGH (a2.14 §8, a2.20 §6). A claim stated in a
 *    label, a `say`, a `why` and a card body is not removed by touching one of
 *    them, and a mutation that does not remove the claim looks exactly like a
 *    hole. `also`, `alsoSeed` and `thirdSeed` exist for that.
 * 6. A GUARD WHOSE EXPECTED VALUE COMES FROM THE SAME MODULE AS THE CONTENT IS
 *    GUARDING NOTHING (a2.18 §6, a2.21 §4).
 * 7. EVERY SOURCE FILE HERE IS CRLF (a2.21 §5). `pick()` tries both.
 *
 * The five the brief names by name are rows 1 to 5:
 *   put ne after the pronoun · drop a pronoun form · add a compound tense ·
 *   re-author a routine noun · explain the object pronoun system.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const CORPUS = join(here, 'data/pronominaux-corpus.ts');
const LESSON = join(here, 'data/pronominaux-lesson.ts');
const TERMS = join(here, 'data/pronominaux-terms.ts');
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const FILES = [CORPUS, LESSON, TERMS, SEED];

/** { label, src: [file, from, to], also: [...], seed: [from, to], alsoSeed } */
const M = [
  /* ── The five the brief asks for by name ─────────────────────────────── */
  {
    // PUT ne AFTER THE PRONOUN. The trap, and the thing the inherited rule
    // produces when it is read at its word.
    label: 'put ne after the pronoun in the authored negative',
    src: [CORPUS, "fr: 'Je ne me lave pas.'", "fr: 'Je me ne lave pas.'"],
    seed: ['"fr": "Je ne me lave pas."', '"fr": "Je me ne lave pas."'],
  },
  {
    // DROP A PRONOUN FORM. The brief asks for the six to be asserted form by
    // form rather than as a count, and this is why: a count survives a swap.
    label: 'drop the doubled nous from the six-form screen',
    src: [LESSON, "return {\n        cells: [row.subject, row.clitic, verb],", "return {\n        cells: [row.subject, row.clitic === 'nous' ? 'se' : row.clitic, verb],"],
    seed: ['"cells": [\n            "nous",\n            "nous",', '"cells": [\n            "nous",\n            "se",'],
  },
  {
    // ADD A COMPOUND TENSE. a2.23 is seq 20 and this is its entire subject.
    label: 'put a compound tense on the deferral card',
    src: [CORPUS, "'Every one of these has a past, and it does something no other verb does. That is the next lesson.'",
      "'Je me suis lavé. Every one of these has a past, and it does something no other verb does. That is the next lesson.'"],
    seed: ['Every one of these has a past, and it does something no other verb does.',
      'Je me suis lavé. Every one of these has a past, and it does something no other verb does.'],
  },
  {
    // RE-AUTHOR A ROUTINE NOUN. a1.25 owns the theme and re-authoring is the
    // most likely single failure of batch 2 (doctrine §D).
    label: 'author a headword into the routines theme',
    src: [CORPUS, "  { id: 'fr.a2.verbes.721', kind: 'sentence'",
      "  { id: 'fr.a2.routines.900', kind: 'word', level: 'a2', theme: 'routines', fr: 'se laver', en: 'to wash', ipa: '/sə la.ve/', respell: 'suh lah-VAY', person: 'je', bucket: 'paradigm', clitic: 'se', tags: ['a2'], drills: ['flashcard'], audioRef: null, version: 1 },\n  { id: 'fr.a2.verbes.721', kind: 'sentence'"],
  },
  {
    // EXPLAIN THE OBJECT PRONOUN SYSTEM. a2.06 and a2.24 own it, the forms
    // overlap almost completely, and the temptation is real.
    label: 'explain the object-pronoun system on a production surface',
    src: [LESSON, "why: 'Je takes me. Say the person out loud first and the little word is that person in another shape.'",
      "why: 'Je takes me. The same word is also a direct object pronoun that stands in for a thing, which is how the whole system works.'"],
    seed: ['"why": "Je takes me. Say the person out loud first',
      '"why": "Je takes me. The same word is also a direct object pronoun that stands in for a thing, and say the person out loud first'],
  },

  /* ── The layouts the brief requires the test to assert ────────────────── */
  {
    label: 'splice the pronoun into the verb column, so the two stop being separate',
    src: [LESSON, 'cells: [row.subject, row.clitic, verb],', 'cells: [row.subject, \'\', `${row.clitic} ${verb}`],'],
    seed: ['"cells": [\n            "je",\n            "me",\n            "lave"', '"cells": [\n            "je",\n            "",\n            "me lave"'],
  },
  {
    label: 'drop the bare verb from the meaning contrast',
    src: [LESSON, "        fr: fr(A(727)),\n        en: en(A(727)),", "        fr: fr(A(721)),\n        en: en(A(721)),"],
    seed: ['"fr": "Je lave la voiture.",\n            "en": "I wash the car.",\n            "note": "[zhuh LAHV lah vwah-TÜR]',
      '"fr": "Je me lave.",\n            "en": "I wash.",\n            "note": "[zhuh LAHV lah vwah-TÜR]'],
  },
  {
    label: 'take the affirmative off the negative pair card',
    src: [LESSON, 'fr: `${noStop(fr(A(721)))} · ${noStop(fr(A(728)))}`,\n        sub: `${sub(A(728))} ${en(A(728))}`,',
      'fr: `${noStop(fr(A(728)))}`,\n        sub: `${sub(A(728))} ${en(A(728))}`,'],
    seed: ['"fr": "Je me lave · Je ne me lave pas",', '"fr": "Je ne me lave pas",'],
  },

  /* ── The cross-lesson quotes, which must be LITERALS ──────────────────── */
  {
    label: "paraphrase a2.19's negation line",
    src: [CORPUS, "export const NEGATION_RULE = 'Wrap the verb that changed, not the one carrying the meaning.';",
      "export const NEGATION_RULE = 'Wrap the verb that moved, not the one carrying the meaning.';"],
    seed: ['Wrap the verb that changed, not the one carrying the meaning.',
      'Wrap the verb that moved, not the one carrying the meaning.'],
  },
  {
    label: 'paraphrase the reframe',
    src: [CORPUS, "export const REFRAME = 'The pronoun changes with the subject, because it is the subject.';",
      "export const REFRAME = 'The pronoun changes with the subject, since it is the subject.';"],
    seed: ['The pronoun changes with the subject, because it is the subject.',
      'The pronoun changes with the subject, since it is the subject.'],
  },
  {
    label: "paraphrase a2.01's reframe, which is why four cells are one sound",
    src: [CORPUS, "export const A201_REFRAME = 'Four of the six forms sound the same, so the pronoun carries the person.';",
      "export const A201_REFRAME = 'Four of the six forms sound alike, so the pronoun carries the person.';"],
    // ALL sites, not one. The first version of this row anchored on the single
    // occurrence that carries « That is a2.01 » and the test stayed green,
    // because the line is quoted on three screens and only one had moved.
    // a2.14 §8: one anchor is often not enough, and a mutation that does not
    // remove the claim looks exactly like a hole.
    seed: ['Four of the six forms sound the same, so the pronoun carries the person.',
      'Four of the six forms sound alike, so the pronoun carries the person.'],
  },
  {
    label: "paraphrase a1.25's hand-off sentence",
    src: [CORPUS, "  'What the small word does across every other person is a lesson of its own and it is a whole band from here.';",
      "  'What the small word does across every other person is a lesson of its own and it is a whole band away.';"],
    seed: ['is a lesson of its own and it is a whole band from here. » Two of them in one sentence',
      'is a lesson of its own and it is a whole band away. » Two of them in one sentence'],
  },
  {
    label: 'drop the negation extension, leaving the inherited rule to produce the trap',
    src: [CORPUS, "export const NEGATION_EXTENSION = 'Both words changed for the subject, so both go inside the wrap.';",
      "export const NEGATION_EXTENSION = 'Put the two halves round the verb.';"],
    seed: ['Both words changed for the subject, so both go inside the wrap.', 'Put the two halves round the verb.'],
  },

  /* ── The decisions, asserted whichever way they went ──────────────────── */
  {
    label: 'give the reciprocal a second screen',
    src: [LESSON, "        body: `The verb changed for the person, so it goes inside.",
      "        body: `Ils se parlent tous les jours. The verb changed for the person, so it goes inside."],
    seed: ['"body": "The verb changed for the person, so it goes inside.',
      '"body": "Ils se parlent tous les jours. The verb changed for the person, so it goes inside.'],
  },
  {
    label: 'give the reciprocal row a flashcard drill, so it becomes productive',
    src: [CORPUS, "bucket: 'reciprocal', clitic: 'se', tags: [...T, 'reciprocal', 'receptive'], drills: RO,",
      "bucket: 'reciprocal', clitic: 'se', tags: [...T, 'reciprocal', 'receptive'], drills: SD,"],
    seed: ['"fr": "Ils se parlent tous les jours.",\n      "en": "They talk to each other every day.",\n      "ipa": "/il sə paʁl tu le ʒuʁ/",\n      "respell": "eel suh PARL too lay ZHOOR",\n      "tags": [\n        "a2",\n        "pronominal",\n        "reflexive",\n        "present",\n        "reciprocal",\n        "receptive"\n      ],\n      "drills": [\n        "sentence",\n        "review"\n      ]',
      '"fr": "Ils se parlent tous les jours.",\n      "en": "They talk to each other every day.",\n      "ipa": "/il sə paʁl tu le ʒuʁ/",\n      "respell": "eel suh PARL too lay ZHOOR",\n      "tags": [\n        "a2",\n        "pronominal",\n        "reflexive",\n        "present",\n        "reciprocal",\n        "receptive"\n      ],\n      "drills": [\n        "flashcard",\n        "sentence",\n        "review"\n      ]'],
  },
  {
    label: 'drop the a2.09 stem-change credit',
    src: [LESSON, '        body: A209_CREDIT,', "        body: 'The vowel moves here and it does not move on the other verb.',"],
    seed: ['"body": "The vowel moves for the reason a2.09 gave', '"body": "The vowel moves here and it does not move on the other verb."'],
  },
  {
    label: "drop s'appeler from the not-reflexive group",
    src: [LESSON, "        label: \"s'appeler\",", "        label: 'a verb',"],
    seed: ['"label": "s\'appeler"', '"label": "a verb"'],
  },

  /* ── The rows and the notation ────────────────────────────────────────── */
  {
    label: 'break the superscript on the doubled nous form',
    src: [CORPUS, "respell: 'noo noo lah-VOHⁿ'", "respell: 'noo noo lah-VOHN'"],
    seed: ['"respell": "noo noo lah-VOHⁿ"', '"respell": "noo noo lah-VOHN"'],
  },
  {
    label: 'author a gendered single-word row',
    src: [CORPUS, "  { id: 'fr.a2.verbes.740', kind: 'sentence'",
      "  { id: 'fr.a2.verbes.789', kind: 'word', level: 'a2', theme: THEME, fr: 'le réveil', en: 'the alarm clock', ipa: '/le ʁe.vɛj/', respell: 'luh ray-VEY', gender: 'm', person: 'none', bucket: 'unseen', clitic: null, tags: [...T], drills: S, audioRef: null, version: 1 },\n  { id: 'fr.a2.verbes.740', kind: 'sentence'"],
  },
  {
    label: 'give the dictée a target that goes to word mode',
    src: [LESSON, '      A(728), A(730), A(736), A(737), A(739), A(744),', '      A(728), A(730), A(736), A(737), A(739), A(743),'],
    seed: ['"fr.a2.verbes.744"\n      ]\n    },\n    {\n      "id": "s19-talk"', '"fr.a2.verbes.743"\n      ]\n    },\n    {\n      "id": "s19-talk"'],
  },
  {
    label: 'offer two options that are one sound in an ear question',
    src: [LESSON, "            opts: [fr(A(721)), fr(A(727))],\n            correct: 0,\n            ref: LISTEN_SECTION_ID,\n            why: AUDIBLE_CONTRAST.claim,",
      "            opts: [fr(A(723)), fr(A(726))],\n            correct: 0,\n            ref: LISTEN_SECTION_ID,\n            why: AUDIBLE_CONTRAST.claim,"],
    seed: ['"Je me lave.",\n                    "Je lave la voiture."', '"Il se lave.",\n                    "Ils se lavent."'],
  },

  /* ── The house rules and the layout traps ─────────────────────────────── */
  {
    label: 'put grammar jargon on a learner surface',
    src: [LESSON, "    title: 'Six People, Six Little Words',", "    title: 'The Reflexive Pronoun Paradigm',"],
    seed: ['"title": "Six People, Six Little Words"', '"title": "The Reflexive Pronoun Paradigm"'],
  },
  {
    label: 'put jargon in the PLURAL, which hasPhrase is boundary-exact about',
    src: [LESSON, "    say: 'One verb, all six people. Read down the middle column rather than across, and tap any row to hear it.',",
      "    say: 'One verb, all six paradigms. Read down the middle column rather than across, and tap any row to hear it.',"],
    seed: ['"say": "One verb, all six people.', '"say": "One verb, all six paradigms.'],
  },
  {
    label: 'put an em dash on a card',
    src: [LESSON, "    hint: 'Same word twice, two different jobs.',", "    hint: 'Same word twice — two different jobs.',"],
    seed: ['"hint": "Same word twice, two different jobs."', '"hint": "Same word twice — two different jobs."'],
  },
  {
    label: 'quote a corpus row that already ends in a stop, producing two dots',
    src: [LESSON, '${noStop(fr(A(721)))} becomes ${noStop(fr(A(728)))}.', '${fr(A(721))} becomes ${fr(A(728))}.'],
    seed: ['Je me lave becomes Je ne me lave pas.', 'Je me lave. becomes Je ne me lave pas..'],
  },
  {
    label: 'put an exclamation mark in a scene bubble',
    src: [LESSON, "    fr: 'Raconte-moi ta matinée.',", "    fr: 'Raconte-moi ta matinée !',"],
    seed: ['"fr": "Raconte-moi ta matinée.",', '"fr": "Raconte-moi ta matinée !",'],
  },
  {
    label: 'stack the trapDrill by removing its steps',
    src: [LESSON, "    steps: [\n      { kind: 'rule', label: 'The rule', title: 'What Counts As The Verb' },", "    steps: [\n      { kind: 'cards', label: 'Four cards', title: 'One Wrong, Three Right' },\n      { kind: 'rule', label: 'The rule', title: 'What Counts As The Verb' },"],
    seed: ['"kind": "rule",\n          "label": "The rule",', '"kind": "cards",\n          "label": "The rule",'],
  },
  {
    label: 'add a fourth term chip to a section',
    src: [LESSON, "    terms: ['extraWord', 'samePerson', 'doubled'],\n    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-22-persons' },",
      "    terms: ['extraWord', 'samePerson', 'doubled', 'theWrap'],\n    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-22-persons' },"],
    seed: ['"extraWord",\n        "samePerson",\n        "doubled"\n      ],\n      "title": "Six People, Six Little Words"',
      '"extraWord",\n        "samePerson",\n        "doubled",\n        "theWrap"\n      ],\n      "title": "Six People, Six Little Words"'],
  },
  {
    label: 'move the six-form table into the flow, where a table is a density failure',
    src: [LESSON, "    id: PERSONS_SECTION_ID,\n    type: 'tapTable',", "    id: PERSONS_SECTION_ID,\n    type: 'table',"],
    seed: ['"type": "tapTable",\n      "audio": {\n        "lang": "fr-FR",\n        "mode": "tts",\n        "speeds": [\n          1,\n          0.65\n        ],\n        "recordingId": "rec-a2-22-persons"',
      '"type": "table",\n      "audio": {\n        "lang": "fr-FR",\n        "mode": "tts",\n        "speeds": [\n          1,\n          0.65\n        ],\n        "recordingId": "rec-a2-22-persons"'],
  },

  /* ── The guard-reads-its-own-constant shape (a2.18 §6, a2.21 §4) ──────── */
  {
    label: 'strip a role-play turn down to one alternative',
    src: [LESSON, "        alts: [\n          { fr: fr(A(732)), en: en(A(732)) },\n          { fr: importedFr('fr.a1.routines.003'), en: importedEn('fr.a1.routines.003') },\n        ],",
      "        alts: [\n          { fr: fr(A(732)), en: en(A(732)) },\n        ],"],
    seed: ['"fr": "Je me lève tôt.",\n              "en": "I get up early."\n            },\n            {\n              "fr": "Je me lève à sept heures.",\n              "en": "I get up at seven o\'clock."\n            }',
      '"fr": "Je me lève tôt.",\n              "en": "I get up early."\n            }'],
  },
  {
    label: 'drop a why from an exam question',
    src: [LESSON, "            why: 'Je takes me. Say the person out loud first and the little word is that person in another shape.',", "            why: '',"],
    seed: ['"why": "Je takes me. Say the person out loud first and the little word is that person in another shape."', '"why": ""'],
  },
  {
    label: 'point an exam ref at a section that does not exist',
    src: [LESSON, "            accept: ['me'],\n            ref: PERSONS_SECTION_ID,", "            accept: ['me'],\n            ref: 's99-nowhere',"],
    seed: ['"ref": "s05-persons",\n                  "why": "Je takes me.', '"ref": "s99-nowhere",\n                  "why": "Je takes me.'],
  },
  {
    label: 'make a free-text question reject the answer it displays',
    src: [LESSON, "            accept: [fr(A(743))],", "            accept: ['nous reposons le soir'],"],
    seed: ['"Nous nous reposons le soir."\n                  ],\n                  "format": "typeIn"', '"nous reposons le soir"\n                  ],\n                  "format": "typeIn"'],
  },
  {
    label: 'release an item by two tranches',
    src: [LESSON, "  [A(728), A(729), A(730), A(731)],", "  [A(728), A(729), A(730), A(731), A(721)],"],
    seed: ['"fr.a2.verbes.728",\n      "fr.a2.verbes.729",\n      "fr.a2.verbes.730",\n      "fr.a2.verbes.731"\n    ]',
      '"fr.a2.verbes.728",\n      "fr.a2.verbes.729",\n      "fr.a2.verbes.730",\n      "fr.a2.verbes.731",\n      "fr.a2.verbes.721"\n    ]'],
  },
  {
    label: 'shrink the Owns act below the paradigm act',
    src: [LESSON, `export const OWNS_SECTION_IDS = [
  LISTEN_SECTION_ID, BUILD_SECTION_ID, NOMEANING_SECTION_ID, ELISION_SECTION_ID,
  VOWEL_SECTION_ID, UNSEEN_SECTION_ID, LATER_SECTION_ID,
];`, `export const OWNS_SECTION_IDS = [
  LISTEN_SECTION_ID,
];`],
  },
];

/** EVERY SOURCE FILE IN THIS REPO IS CRLF and every anchor in this file is
 *  written with LF. Matching one against the other reports SKIPPED, which looks
 *  exactly like a stale harness: TWELVE of a2.21's rows were reported that way
 *  on its first run and every one of the anchors was correct. Try the LF form
 *  and then the CRLF form, and return whichever matched. */
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

const BATCH = 'npx tsx scripts/author-pronominaux-batch.ts --dry-run';
const MERGE = 'npx tsx scripts/merge-pronominaux-into-seed.ts --dry-run';
const TEST = 'node --test ../ealch-v2/src/content/a2-22-pronominaux.test.ts';

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
