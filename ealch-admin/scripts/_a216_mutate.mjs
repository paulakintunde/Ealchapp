/* a2.16 mutation harness.
 *
 *   node scripts/_a216_mutate.mjs            all mutations
 *   node scripts/_a216_mutate.mjs 3 7        only those rows
 *
 * Breaks one claim at a time and asks all three layers whether they notice.
 *
 * ── FIVE THINGS THE HARNESSES BEFORE THIS ONE LEARNED THE HARD WAY ────────
 *
 * 1. RUN EVERY LAYER UNMUTATED FIRST (a2.13 §7). If the baseline is not green,
 *    every row below it is noise.
 * 2. THESE FILES ARE CRLF. A multi-line anchor written with \n matches nothing,
 *    so every anchor here is a single line and a missing one is SKIPPED rather
 *    than counted as a pass.
 * 3. ONCE THE LESSON HAS BEEN APPLIED, EVERY CONTENT MUTATION TRIPS THE BATCH'S
 *    VERSION CHECK (a2.14 §7), so the batch reports "caught" with that message
 *    rather than on the guard you meant to test. This harness prints the LAST
 *    line of the failure, which is what `die()` writes, precisely so the column
 *    can be read against the reason.
 * 4. THE TEST READS seed.json AND NOTHING ELSE (a2.15 §9). A source mutation it
 *    cannot see is reported n/a, not MISS.
 * 5. ONE ANCHOR IS OFTEN NOT ENOUGH (a2.14 §8). A claim stated in a label, a
 *    `say`, a `why` and a card body is not removed by touching one of them, and
 *    a mutation that does not remove the claim proves nothing and costs a
 *    diagnosis cycle. Rows that need more carry an `also` list.
 *
 * The five the brief names by name are rows 1 to 5:
 *   pluralise with -s · add an s to vieux · invent a feminine bel ·
 *   separate the audible contrast · cut the sons.07 reference.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const CORPUS = join(here, 'data/beau-nouveau-corpus.ts');
const LESSON = join(here, 'data/beau-nouveau-lesson.ts');
const TERMS = join(here, 'data/beau-nouveau-terms.ts');
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const FILES = [CORPUS, LESSON, TERMS, SEED];

/** { label, src: [file, from, to], also: [...], seed: [from, to] } */
const M = [
  /* ── The five the brief asks for by name ─────────────────────────────── */
  {
    label: 'pluralise beau with -s instead of -x',
    src: [CORPUS, "forms: { beau: 'beaux', nouveau: 'nouveaux', vieux: 'vieux' },", "forms: { beau: 'beaus', nouveau: 'nouveaux', vieux: 'vieux' },"],
    seed: ['"fr": "Ils sont beaux.",', '"fr": "Ils sont beaus.",'],
  },
  {
    label: 'add an s to the masculine plural of vieux',
    src: [CORPUS, "forms: { beau: 'beaux', nouveau: 'nouveaux', vieux: 'vieux' },", "forms: { beau: 'beaux', nouveau: 'nouveaux', vieux: 'vieuxs' },"],
    seed: ['"fr": "Ils sont vieux.",', '"fr": "Ils sont vieuxs.",'],
  },
  {
    // THE FIRST VERSION OF THIS ROW CARRIED A PLACEHOLDER ANCHOR and reported
    // SKIPPED, which proves nothing. a2.15 §9: a bad mutation costs a diagnosis
    // cycle. This one targets the silent-h screen, where the invented feminine
    // is exactly the mistake a learner would make.
    label: 'invent a feminine short form on a teaching card',
    src: [LESSON, "note: 'A consonant at the front of the next word ON THE PAGE. The short form anyway, because there is no consonant in the mouth and the mouth is what decides.' },", "note: 'A consonant on the page. Write une belle homme, because the mouth is what decides.' },"],
    seed: ['"note": "A consonant at the front of the next word ON THE PAGE.', '"note": "Write une belle homme. A consonant at the front of the next word ON THE PAGE.'],
  },
  {
    label: 'separate the audible contrast into two takes',
    src: [LESSON, 'THE THREE CONTRAST PAIRS, AND THIS IS THE MOST IMPORTANT TAKE IN THE LESSON. Each pair is ONE TAKE, ONE VOICE', 'THE THREE CONTRAST PAIRS. Each pair is read twice, separately'],
    seed: ['THE THREE CONTRAST PAIRS, AND THIS IS THE MOST IMPORTANT TAKE IN THE LESSON. Each pair is ONE TAKE, ONE VOICE', 'THE THREE CONTRAST PAIRS. Each pair is read twice, separately'],
  },
  {
    label: 'cut the sons.07 reference',
    src: [CORPUS, "export const ELISION_UNIT = 'sons.07';", "export const ELISION_UNIT = 'the pronunciation track';"],
    seed: ['sons.07 put it this way:', 'the pronunciation track put it this way:'],
  },

  /* ── The Owns ────────────────────────────────────────────────────────── */
  {
    // THE CENTRAL CLAIM. If the short form and the feminine stop sharing a
    // respelling, the lesson is teaching something the corpus contradicts.
    label: 'give the short form a different sound from the feminine',
    src: [CORPUS, "respells: { beau: 'BEL', nouveau: 'noo-VEL', vieux: 'VYEY' },", "respells: { beau: 'BELL', nouveau: 'noo-VEL', vieux: 'VYEY' },"],
  },
  {
    label: 'break the drop rule so the feminine is not the short form plus le',
    src: [CORPUS, "forms: { beau: 'belle', nouveau: 'nouvelle', vieux: 'vieille' },", "forms: { beau: 'bele', nouveau: 'nouvelle', vieux: 'vieille' },"],
    seed: ['"fr": "Elle est belle.",', '"fr": "Elle est bele.",'],
  },
  {
    label: 'move the third form to the last column, as an appendix',
    src: [CORPUS, "export const FORM_ORDER: readonly Form[] = ['plain', 'vowel', 'fem', 'plainPl', 'femPl'];", "export const FORM_ORDER: readonly Form[] = ['plain', 'fem', 'plainPl', 'femPl', 'vowel'];"],
    seed: ['"cells": [\n              "beau",\n              "bel",', '"cells": [\n              "beau",\n              "belle",'],
  },
  {
    // THE ENCHAÎNEMENT. A later author "tidying" the respelling so the short
    // form survives intact would spell out a pronunciation nobody uses.
    label: 'keep the short form intact instead of joining it to the next word',
    src: [CORPUS, "to: 'seh-tuhⁿ beh-LAHRBR'", "to: 'seh-tuhⁿ BEL AHRBR'"],
    seed: ['"respell": "seh-tuhⁿ beh-LAHRBR"', '"respell": "seh-tuhⁿ BEL AHRBR"'],
  },
  {
    label: 'make the contrast pairs use different nouns on each row',
    src: [CORPUS, "S('fr.a2.adjectifs-essentiels.055', \"C'est un vieux sac.\"", "S('fr.a2.adjectifs-essentiels.055', \"C'est un vieux mur.\""],
    seed: ['"fr": "C\'est un vieux sac.",', '"fr": "C\'est un vieux mur.",'],
  },
  {
    label: 'turn the contrast section from a tapTable into a read-only list',
    src: [LESSON, "    type: 'tapTable',\n    id: PAIRS_SECTION_ID,", "    type: 'examples',\n    id: PAIRS_SECTION_ID,"],
    seed: ['"type": "tapTable",\n      "id": "s07-pairs",', '"type": "examples",\n      "id": "s07-pairs",'],
  },
  {
    label: 'reverse the silent-h pair so the h case comes first',
    src: [LESSON, "      { fr: importedFr(silentHPartnerId), en: importedEn(silentHPartnerId), note: 'A vowel at the front of the next word, on the page and in the mouth. The short form, for the obvious reason.' },", "      { fr: importedFr(silentHId), en: importedEn(silentHId), note: 'A vowel at the front of the next word, on the page and in the mouth. The short form, for the obvious reason.' },"],
  },

  /* ── The traps ───────────────────────────────────────────────────────── */
  {
    label: 'let the short form stand after a verb on a teaching card',
    src: [LESSON, "{ label: 'The claim', head: 'Same sound', body: BORROW_CLAIM },", "{ label: 'The claim', head: 'Same sound', body: `Il est ${form('beau', 'vowel')}. ${BORROW_CLAIM}` },"],
    seed: ['"head": "Same sound",\n              "body": "The form before a vowel', '"head": "Same sound",\n              "body": "Il est bel. The form before a vowel'],
  },
  {
    label: 'drop the errorSpot questions that fix the invented feminine',
    src: [LESSON, "            format: 'errorSpot',\n            prompt: 'une belle appartement',", "            format: 'mcq',\n            prompt: 'une belle appartement',"],
  },
  {
    label: 'stop naming a1.14 and a2.03 on the plural screen',
    src: [CORPUS, "export const PLURAL_UNCHANGED_UNITS = ['a1.14', 'a2.03'] as const;", "export const PLURAL_UNCHANGED_UNITS = ['the earlier lessons'] as const;"],
  },
  {
    // a2.14 §8: ONE ANCHOR WAS NOT ENOUGH. `a1.17` is printed in the chain
    // section's `say` AND in an example note, so replacing one left the claim
    // standing and the test correctly reported it still there. The seed anchor
    // now removes every occurrence.
    label: 'stop naming a1.17, whose ma-to-mon is the same operation',
    src: [CORPUS, "export const POSSESSIVE_UNIT = 'a1.17';", "export const POSSESSIVE_UNIT = 'an earlier lesson';"],
    seed: ['a1.17', 'an earlier lesson'],
  },

  /* ── The ear ─────────────────────────────────────────────────────────── */
  {
    // A listenChoose between two members of one homophone group has no correct
    // answer. Corrections §5, and this lesson has more of them than any in the
    // band because five written forms reach the ear as two.
    label: 'ask an ear question between the short form and the feminine',
    src: [LESSON, "            opts: [fr(phraseId('beau')), importedFr(vowelRowId('beau'))],", "            opts: [importedFr(vowelRowId('beau')), `C'est une ${form('beau', 'fem')} maison.`],"],
  },
  {
    label: 'ask an ear question about the silent plural instead of the audible pair',
    src: [LESSON, "            say: importedFr(vowelRowId('beau')),\n            // The ONE audible contrast in the lesson. HOMOPHONE_GROUPS refuses", "            say: fr(cellId('beau', 'plainPl')),\n            // The ONE audible contrast in the lesson. HOMOPHONE_GROUPS refuses"],
    also: [[LESSON, "            opts: [fr(phraseId('beau')), importedFr(vowelRowId('beau'))],", "            opts: [fr(cellId('beau', 'plain')), fr(cellId('beau', 'plainPl'))],"]],
  },

  /* ── The neighbours ──────────────────────────────────────────────────── */
  {
    label: "teach a -ment adverb, which is a2.17's",
    src: [LESSON, "il connaît tout le monde ici.", "il connaît vraiment tout le monde ici."],
    seed: ['il connaît tout le monde ici.', 'il connaît vraiment tout le monde ici.'],
  },
  {
    label: "teach placement on a production surface, which is a1.16's",
    src: [LESSON, "    say: 'Three pairs. In each one the describing word is the same word and the thing after it is different, and that is the only reason anything changed. Tap a row to hear both.',", "    say: 'Three pairs. Every describing word here goes before the noun, and every other one goes after the noun.',"],
    seed: ['"say": "Three pairs. In each one the describing word', '"say": "Three pairs. Every describing word here goes before the noun, and every other one goes after the noun."\n      ,"unused": "'],
  },

  /* ── The walk that nothing used to cover (a2.03 §4) ──────────────────── */
  {
    // The corpus rows' `notes` were the fourth guard hole this band found and
    // the only one nothing caught. All three layers now walk them.
    label: "write a2.17's subject into an authored row's notes",
    src: [CORPUS, "'The plain form, and the one you learn the word in.', 'beau', 'plain'", "'Its adverb is bellement, which you will meet next.', 'beau', 'plain'"],
  },
  {
    label: 'put grammar jargon in a cardDeck sub, which prose() drops',
    src: [LESSON, "sub: `[${formRespell(a, 'fem')}] · [${formRespell(a, 'vowel')}]`,", "sub: 'the pre-vocalic allomorph',"],
  },
  {
    label: 'put grammar jargon in intro, which is drawn on two screens',
    src: [LESSON, "    'Three describing words in French have a fifth shape that nothing else has,", "    'Three describing words in French have a fifth inflection paradigm that nothing else has,"],
    seed: ['"intro": "Three describing words in French have a fifth shape', '"intro": "Three describing words in French have a fifth inflection paradigm'],
  },

  /* ── The shape of the lesson ─────────────────────────────────────────── */
  {
    label: 'move a mission out of the Owns act into the paradigm act',
    src: [LESSON, "    sections: [PAIRS_SECTION_ID, BORROW_SECTION_ID, REASON_SECTION_ID, CHAIN_SECTION_ID, ONLY_PAIR_SECTION_ID, SILENT_H_SECTION_ID, READING_SECTION_ID],", "    sections: [BORROW_SECTION_ID, REASON_SECTION_ID, CHAIN_SECTION_ID, ONLY_PAIR_SECTION_ID],"],
    also: [[LESSON, "    sections: [GRID_SECTION_ID, KNOWN_SECTION_ID, HEAR_SECTION_ID],", "    sections: [GRID_SECTION_ID, KNOWN_SECTION_ID, HEAR_SECTION_ID, PAIRS_SECTION_ID, SILENT_H_SECTION_ID, READING_SECTION_ID],"]],
  },
  {
    label: 'put a word-mode row into the dictée',
    src: [CORPUS, "S('fr.a2.adjectifs-essentiels.048', 'Elles sont nouvelles.', 'They are new.', 'el sohⁿ noo-VEL', '/ɛl sɔ̃ nu.vɛl/', 'grid', NO_D,", "S('fr.a2.adjectifs-essentiels.048', 'Elles sont nouvelles.', 'They are new.', 'el sohⁿ noo-VEL', '/ɛl sɔ̃ nu.vɛl/', 'grid', D,"],
  },
  {
    label: 'take the short form out of the dictée entirely',
    src: [LESSON, "  vowelRowId('beau'), vowelRowId('nouveau'), silentHId,", '  silentHId,'],
  },
  {
    label: 'ship a role-play turn with one way to answer',
    src: [LESSON, "          { fr: \"Il est très beau.\", en: 'It is very nice.' },", ''],
    seed: ['{\n              "fr": "Il est très beau.",\n              "en": "It is very nice."\n            },\n            ', ''],
  },
  {
    // a2.03 §14 row 26: replacing the constant replaces it everywhere, so the
    // COUNT does not move. What is guardable is the LENGTH.
    label: 'make the reframe too long to run mid-sentence',
    src: [CORPUS, "export const REFRAME = 'Before a vowel, say the feminine and drop its last two letters.';", "export const REFRAME = 'When the word that comes after this one begins with a vowel sound, reach for the feminine form and then take its final two letters away.';"],
  },
  {
    label: 'break the term-chip row budget',
    src: [TERMS, "    term: 'a vowel is coming',", "    term: 'a vowel sound is coming next',"],
  },
];

const only = process.argv.slice(2).map(Number).filter(Boolean);
const backup = new Map(FILES.map((f) => [f, readFileSync(f, 'utf8')]));
const restore = () => { for (const [f, s] of backup) writeFileSync(f, s, 'utf8'); };

function run(cmd) {
  try {
    execSync(cmd, { cwd: join(here, '..'), stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8' });
    return { ok: true, msg: '' };
  } catch (e) {
    const out = `${e.stdout ?? ''}${e.stderr ?? ''}`.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)
      .filter((l) => !l.startsWith('$') && !/ELIFECYCLE|Command failed with exit code/.test(l));
    const interesting = out.filter((l) => !/^(ℹ|✔|›|#)/.test(l));
    const line = interesting[interesting.length - 1] ?? out[out.length - 1] ?? '(no output)';
    return { ok: false, msg: line.slice(0, 130) };
  }
}

const BATCH = 'npx tsx scripts/author-beau-nouveau-batch.ts --dry-run';
const MERGE = 'npx tsx scripts/merge-beau-nouveau-into-seed.ts --dry-run';
const TEST = 'node --test ../ealch-v2/src/content/a2-16-beau-nouveau.test.ts';

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
  const applied = [];
  for (const [file, from, to] of edits) {
    const cur = readFileSync(file, 'utf8');
    if (!cur.includes(from)) continue;
    writeFileSync(file, cur.replace(from, to), 'utf8');
    applied.push(from);
  }
  // A row whose PRIMARY anchor is missing proves nothing. An `also` anchor that
  // is missing is a weaker mutation and is reported rather than dropped.
  if (mut.src) {
    const cur = backup.get(mut.src[0]);
    if (!cur.includes(mut.src[1])) srcOk = false;
  }
  if (mut.seed) {
    const [from, to] = mut.seed;
    const s = backup.get(SEED);
    if (s.includes(from)) { writeFileSync(SEED, s.split(from).join(to), 'utf8'); seedOk = true; }
  }
  if (mut.src && !srcOk) {
    skipped += 1;
    console.log(`  ${String(i + 1).padStart(2)}  SKIPPED — source anchor not found: ${mut.label}`);
    restore();
    return;
  }
  // A MISSING SEED ANCHOR IS A SKIPPED LAYER, NOT A SKIPPED MUTATION. a2.15 §9:
  // dropping the whole row throws away the batch and merge results with it.
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
