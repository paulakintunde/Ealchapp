/* a2.23 mutation harness.
 *
 *   node scripts/_a223_mutate.mjs            all mutations
 *   node scripts/_a223_mutate.mjs 3 7        only those rows
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
 *    GUARDING NOTHING (a2.18 §6, a2.21 §4). THIS LESSON IS FULL OF THAT SHAPE,
 *    because its layouts are built from FLIP_PAIRS, OBJECT_PAIR and SLOTS and
 *    the batch reads the same constants. The TEST holds every one of them as a
 *    hand-written literal, which is the only reason those rows are catchable.
 * 7. EVERY SOURCE FILE HERE IS CRLF (a2.21 §5). `pick()` tries both.
 *
 * The five the brief names by name are rows 1 to 5:
 *   use avoir · move the pronoun after the auxiliary · agree the les mains
 *   case · paraphrase an inherited string · drop the auxiliary-flip pair.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const CORPUS = join(here, 'data/pronominaux-passe-corpus.ts');
const LESSON = join(here, 'data/pronominaux-passe-lesson.ts');
const TERMS = join(here, 'data/pronominaux-passe-terms.ts');
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const FILES = [CORPUS, LESSON, TERMS, SEED];

/** { label, src: [file, from, to], also: [...], seed: [from, to], alsoSeed } */
const M = [
  /* ── The five the brief asks for by name ─────────────────────────────── */
  {
    // USE AVOIR. The Owns, and the single most likely real error.
    label: 'use avoir as the first word of a reflexive',
    src: [CORPUS, "fr: 'Je me suis levé tôt.'", "fr: \"Je m'ai levé tôt.\""],
    seed: ['"fr": "Je me suis levé tôt."', '"fr": "Je m\'ai levé tôt."'],
  },
  {
    // MOVE THE PRONOUN AFTER THE AUXILIARY. a2.22's rule, one tense later.
    label: 'move the little word behind the first word',
    src: [CORPUS, "fr: 'Je me suis lavé.'", "fr: 'Je suis me lavé.'"],
    seed: ['"fr": "Je me suis lavé."', '"fr": "Je suis me lavé."'],
  },
  {
    // AGREE THE les mains CASE. The exception taught wrongly.
    label: 'agree the second word in the les mains case',
    src: [CORPUS, "fr: \"Elle s'est lavé les mains.\"", "fr: \"Elle s'est lavée les mains.\""],
    seed: ['"fr": "Elle s\'est lavé les mains."', '"fr": "Elle s\'est lavée les mains."'],
  },
  {
    // PARAPHRASE AN INHERITED STRING. a2.21 §8: its own quote of a2.15 was
    // INVENTED and neither the batch nor the merge could see it.
    label: "paraphrase a2.21's agreement rule",
    src: [CORPUS,
      "  'Add nothing for a man on his own, e for a woman, s for more than one, and es for more than one woman.';",
      "  'Add nothing for a man, an e for a woman, an s for a group and es for a group of women.';"],
    seed: ['Add nothing for a man on his own, e for a woman, s for more than one, and es for more than one woman.',
      'Add nothing for a man, an e for a woman, an s for a group and es for a group of women.'],
  },
  {
    // DROP THE AUXILIARY-FLIP PAIR. The required layout, and the Owns.
    label: 'take the avoir half off the flip card',
    src: [LESSON, 'fr: pair(FLIP_PAIRS[0]![0], FLIP_PAIRS[0]![1]),', 'fr: noStop(fr(FLIP_PAIRS[0]![1])),'],
    seed: ['"fr": "J\'ai lavé la voiture · Je me suis lavé",', '"fr": "Je me suis lavé",'],
  },

  /* ── The layouts ─────────────────────────────────────────────────────── */
  {
    label: 'take the les-mains half off the exception card',
    src: [LESSON, 'fr: pair(OBJECT_PAIR[0]![0], OBJECT_PAIR[0]![1]),', 'fr: noStop(fr(OBJECT_PAIR[0]![0])),'],
    seed: ['"fr": "Elle s\'est lavée · Elle s\'est lavé les mains",', '"fr": "Elle s\'est lavée",'],
  },
  {
    label: 'drop a position out of the slot diagram',
    src: [CORPUS, "  { pos: 'then', word: 'pas', job: 'the second half of the wrap, and it closes after the first word' },\n", ''],
  },
  {
    label: 'build the slot diagram from an affirmative rather than a negative',
    src: [CORPUS, "export const SLOT_SENTENCE = 'Je ne me suis pas levé.';", "export const SLOT_SENTENCE = 'Je me suis levé.';"],
  },
  {
    label: 'make a slot row speak its own word rather than the whole sentence',
    src: [LESSON, '      cells: [slot.pos, slot.word, slot.job],\n      say: SLOT_SENTENCE,', '      cells: [slot.pos, slot.word, slot.job],\n      say: slot.word,'],
    seed: ['"say": "Je ne me suis pas levé.",\n              "detail"', '"say": "Je",\n              "detail"'],
  },
  {
    label: 'put a real table in the flow instead of the tapTable',
    src: [LESSON, "    id: SLOTS_SECTION_ID,\n    type: 'tapTable',", "    id: SLOTS_SECTION_ID,\n    type: 'table',"],
  },
  {
    label: 'drop the fourth cell out of the agreement screen',
    src: [CORPUS, "export const CELL_IDS: readonly string[] = ['fr.a2.verbes.791', 'fr.a2.verbes.792', 'fr.a2.verbes.793', 'fr.a2.verbes.794'];",
      "export const CELL_IDS: readonly string[] = ['fr.a2.verbes.791', 'fr.a2.verbes.792', 'fr.a2.verbes.793'];"],
  },
  {
    label: 'take the avoir contrast off the agreement screen',
    src: [LESSON, "      { fr: fr(AVOIR_PAIR[0]), en: en(AVOIR_PAIR[0]), note: `${sub(AVOIR_PAIR[0])} The same woman", "      { fr: fr(CELL_IDS[0]!), en: en(AVOIR_PAIR[0]), note: `${sub(AVOIR_PAIR[0])} The same woman"],
  },

  /* ── The option-1 decision ───────────────────────────────────────────── */
  {
    label: 'explain the direct object on a reading card',
    src: [LESSON, '        body: OBJECT_DEFERRAL,', '        body: `Here se is the indirect object and les mains is the direct object.`,'],
  },
  {
    label: 'put the exception into a typed exam answer',
    src: [LESSON, "            accept: [fr(A(832))],", "            accept: [fr(A(807))],"],
  },
  {
    label: 'give the exception a dictation drill',
    src: [CORPUS, "person: 'elle', bucket: 'object', aux: 'etre', ending: null, tags: [...T, 'object', 'receptive'], drills: RO, audioRef: null, version: 1, notes: 'NAMED, NOT TAUGHT.",
      "person: 'elle', bucket: 'object', aux: 'etre', ending: null, tags: [...T, 'object', 'receptive'], drills: SD, audioRef: null, version: 1, notes: 'NAMED, NOT TAUGHT."],
    seed: ['"id": "fr.a2.verbes.807",\n      "kind": "sentence",', '"id": "fr.a2.verbes.807",\n      "kind": "sentence",\n      "_mutated": true,'],
    alsoSeed: ['"_mutated": true,\n      "level": "a2",\n      "theme": "verbes",\n      "fr": "Elle s\'est lavé les mains.",\n      "en": "She washed her hands.",\n      "ipa": "/ɛl sɛ la.ve le mɛ̃/",\n      "respell": "ehl seh lah-VAY lay MAHⁿ",\n      "tags": [\n        "a2",\n        "pronominal",\n        "passe-compose",\n        "etre",\n        "object",\n        "receptive"\n      ],\n      "drills": [\n        "sentence",\n        "review"\n      ]',
      '"level": "a2",\n      "theme": "verbes",\n      "fr": "Elle s\'est lavé les mains.",\n      "en": "She washed her hands.",\n      "ipa": "/ɛl sɛ la.ve le mɛ̃/",\n      "respell": "ehl seh lah-VAY lay MAHⁿ",\n      "tags": [\n        "a2",\n        "pronominal",\n        "passe-compose",\n        "etre",\n        "object",\n        "receptive"\n      ],\n      "drills": [\n        "sentence",\n        "review",\n        "dictation"\n      ]'],
  },
  {
    label: 'stop naming a2.24, so the exception is left to nobody',
    src: [CORPUS, "export const INDIRECT_OBJECT_UNIT = 'a2.24';", "export const INDIRECT_OBJECT_UNIT = 'later on';"],
  },

  /* ── The inherited lines ─────────────────────────────────────────────── */
  {
    label: "paraphrase a2.01's reframe",
    src: [CORPUS, "export const A201_REFRAME = 'Four of the six forms sound the same, so the pronoun carries the person.';",
      "export const A201_REFRAME = 'Four of the six sound alike, so the pronoun does the work.';"],
    seed: ['Four of the six forms sound the same, so the pronoun carries the person.', 'Four of the six sound alike, so the pronoun does the work.'],
  },
  {
    label: "paraphrase a2.19's negation line",
    src: [CORPUS, "export const NEGATION_RULE = 'Wrap the verb that changed, not the one carrying the meaning.';",
      "export const NEGATION_RULE = 'Wrap the verb that moved, not the one with the meaning in it.';"],
    seed: ['Wrap the verb that changed, not the one carrying the meaning.', 'Wrap the verb that moved, not the one with the meaning in it.'],
  },
  {
    // HARNESS NOTE 5: ONE ANCHOR IS NOT ENOUGH. The first version of this row
    // touched only the negative card, and a1.18's line survived in the `theWrap`
    // term, so the claim was not removed and both content layers were right to
    // pass. Removing it from BOTH is the mutation that tests the guard.
    label: "drop a1.18's line, so the arc reads as one string when it is two",
    src: [LESSON, '`« ${A118_REFRAME} » is ${NEGATION_UNIT}\'s. ', '`'],
    also: [[TERMS, '${NEGATION_UNIT} gave you two words either side of the verb: « ${A118_REFRAME} » ', '${NEGATION_UNIT} gave you two words either side of the verb. ']],
  },
  {
    label: 'drop the third negation sentence, which is what stops the trap',
    src: [CORPUS, "export const NEGATION_OUTSIDE =\n  'The wrap goes round the little word and the first word. The second word sits outside it.';",
      "export const NEGATION_OUTSIDE = 'The wrap goes round the words that changed.';"],
    seed: ['The wrap goes round the little word and the first word. The second word sits outside it.', 'The wrap goes round the words that changed.'],
  },
  {
    label: "paraphrase a2.22's present-tense background",
    src: [CORPUS, "export const PRESENT_NO_AGREEMENT =\n  'In the present nothing on the end of the verb knows who the subject is. Only the extra word changes.';",
      "export const PRESENT_NO_AGREEMENT = 'The present puts nothing on the end of the verb.';"],
    seed: ['In the present nothing on the end of the verb knows who the subject is. Only the extra word changes.', 'The present puts nothing on the end of the verb.'],
  },
  {
    label: 'reword the reframe',
    src: [CORPUS, "export const REFRAME = 'If the little word is there, the first word is être.';",
      "export const REFRAME = 'A little word in front means you use être.';"],
    seed: ['If the little word is there, the first word is être.', 'A little word in front means you use être.'],
  },

  /* ── The boundary: what is not here ──────────────────────────────────── */
  {
    label: 'put a reciprocal on a screen',
    src: [LESSON, "        body: PAST_TENSE_DEFERRAL,", "        body: `Ils se sont parlé means they talked to each other, and it takes no ending.`"],
  },
  {
    label: 'put the imperfect on a screen',
    src: [LESSON, "        en: 'And then?',", "        en: 'And then? It was a long morning.',"],
    also: [[LESSON, "        ai: 'Et ensuite ?',", "        ai: 'Et ensuite ? C\\'était long ?',"]],
  },
  {
    label: 'author a headword instead of importing it',
    src: [CORPUS, "{ id: 'fr.a2.verbes.833', kind: 'sentence', level: 'a2', theme: THEME, fr: \"Elle s'est levée.\"",
      "{ id: 'fr.a2.verbes.833', kind: 'word', level: 'a2', theme: THEME, fr: 'se lever'"],
  },
  {
    label: 'author a participle as a corpus item',
    src: [CORPUS, "fr: \"Il s'est douché.\", en: 'He showered.'", "fr: 'douché', en: 'showered'"],
    seed: ['"fr": "Il s\'est douché.",', '"fr": "douché",'],
  },

  /* ── The respellings ─────────────────────────────────────────────────── */
  {
    // a2.21 §3: THE CHECKER CALLS THIS CLEAN, so only a by-name assertion sees
    // it. This is the row that proves the band's usual guard is the wrong shape.
    label: 'put a superscript on the sommes false positive',
    src: [CORPUS, "respell: 'noo noo somm luh-VAY TOH'", "respell: 'noo noo sohⁿm luh-VAY TOH'"],
    seed: ['"respell": "noo noo somm luh-VAY TOH"', '"respell": "noo noo sohⁿm luh-VAY TOH"'],
  },
  {
    label: 'break a nasal superscript back to a plain n',
    src: [CORPUS, "respell: 'eel suh sohⁿ lah-VAY'", "respell: 'eel suh sohn lah-VAY'"],
    seed: ['"respell": "eel suh sohⁿ lah-VAY"', '"respell": "eel suh sohn lah-VAY"'],
  },

  /* ── The exam and the dictée ─────────────────────────────────────────── */
  {
    label: 'put a word-mode line in the dictée',
    src: [LESSON, '      A(831), A(832), A(833),\n    ],', '      A(831), A(832), A(794),\n    ],'],
    seed: ['"fr.a2.verbes.831",\n              "fr.a2.verbes.832",\n              "fr.a2.verbes.833"', '"fr.a2.verbes.831",\n              "fr.a2.verbes.832",\n              "fr.a2.verbes.794"'],
  },
  {
    label: 'make an ear question separate two forms that are one sound',
    src: [LESSON, "            opts: [fr(A(803)), fr(A(804))],\n            correct: 1,", "            opts: [fr(A(791)), fr(A(793))],\n            correct: 1,"],
    seed: ['"J\'ai couché les enfants.",\n                    "Je me suis couché."', '"Il s\'est lavé.",\n                    "Ils se sont lavés."'],
  },
  {
    label: 'make a free-text question accept a sentence the lesson does not own',
    src: [LESSON, "            accept: [fr(A(816))],", "            accept: ['Elle est habillée.'],"],
    seed: ['"Elle s\'est habillée."\n                  ],\n                  "format": "typeIn"', '"Elle est habillée."\n                  ],\n                  "format": "typeIn"'],
  },
  {
    label: 'drop a why from an exam question',
    src: [LESSON, "            why: `${THE_NEW_FACT} The little word is in front of it, so it is être, and je takes suis.`,", "            why: '',"],
    seed: ['"why": "Every verb that carries the little word takes être, including the ones that take avoir without it. The little word is in front of it, so it is être, and je takes suis."', '"why": ""'],
  },
  {
    label: 'point an exam ref at a section that does not exist',
    src: [LESSON, "            accept: ['suis'],\n            ref: FLIP_SECTION_ID,", "            accept: ['suis'],\n            ref: 's99-nowhere',"],
    seed: ['"ref": "s02-flip",\n                  "why": "Every verb that carries', '"ref": "s99-nowhere",\n                  "why": "Every verb that carries'],
  },

  /* ── The shape ───────────────────────────────────────────────────────── */
  {
    label: 'release an item by two tranches',
    src: [LESSON, '  [A(811), A(812), A(813), A(814), A(815)],', '  [A(811), A(812), A(813), A(814), A(815), A(791)],'],
    seed: ['"fr.a2.verbes.813",\n      "fr.a2.verbes.814",\n      "fr.a2.verbes.815"\n    ]',
      '"fr.a2.verbes.813",\n      "fr.a2.verbes.814",\n      "fr.a2.verbes.815",\n      "fr.a2.verbes.791"\n    ]'],
  },
  {
    label: 'shrink the Owns act below the positions act',
    src: [LESSON, `export const OWNS_SECTION_IDS = [
  ASSEMBLY_SECTION_ID, AGREEMENT_SECTION_ID, SILENT_SECTION_ID,
  NEWVERBS_SECTION_ID, OBJECT_SECTION_ID, NOMEANING_SECTION_ID,
  LATER_SECTION_ID,
];`, `export const OWNS_SECTION_IDS = [
  ASSEMBLY_SECTION_ID,
];`],
  },
  {
    label: 'take the size off nothing and put one on the trapDrill',
    src: [LESSON, "    layer: 'core',\n    swipe: true,\n    say: 'Four cards and then six to prove it.", "    layer: 'core',\n    size: 'lg',\n    swipe: true,\n    say: 'Four cards and then six to prove it."],
  },
  {
    label: 'take the error off the first card of the trap',
    src: [LESSON, "        fr: AVOIR_TRAP,\n        ipa: '/ʒə me lə.ve/',", "        fr: fr(A(795)),\n        ipa: '/ʒə me lə.ve/',"],
  },
  {
    label: 'give a role play turn one alternative',
    src: [LESSON, "          { fr: fr(A(821)), en: en(A(821)) },\n          { fr: fr(A(795)), en: en(A(795)) },", "          { fr: fr(A(821)), en: en(A(821)) },"],
    seed: ['"fr": "Je me suis levé à six heures.",\n                  "en": "I got up at six."\n                },\n                {\n                  "fr": "Je me suis levé tôt.",\n                  "en": "I got up early."\n                }',
      '"fr": "Je me suis levé à six heures.",\n                  "en": "I got up at six."\n                }'],
  },
  {
    label: 'put an exclamation mark in a scene bubble',
    src: [CORPUS, 'export const SCENE_ERROR = "J\'ai levé à six heures.";', 'export const SCENE_ERROR = "J\'ai levé à six heures !";'],
  },
  {
    // THE ONE INHERITED LINE THAT WAS NOT A LITERAL IN EITHER LAYER. It is one
    // now, and this row is why.
    label: 'give the trap a size, which comes OFF a stepped trapDrill',
    src: [LESSON, "    frSub: 'Avoir ou être',\n    layer: 'core',", "    frSub: 'Avoir ou être',\n    layer: 'core',\n    size: 'xl',"],
  },
  {
    label: 'reword the unit title so overview.titleEn stops matching it',
    src: [LESSON, "    titleEn: UNIT.title,", "    titleEn: 'Reflexive Verbs in the Past',"],
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

const BATCH = 'npx tsx scripts/author-pronominaux-passe-batch.ts --dry-run';
const MERGE = 'npx tsx scripts/merge-pronominaux-passe-into-seed.ts --dry-run';
const TEST = 'node --test ../ealch-v2/src/content/a2-23-pronominaux-passe.test.ts';

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
