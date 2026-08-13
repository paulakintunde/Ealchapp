/* a2.03 mutation harness.
 *
 *   node scripts/_a203_mutate.mjs            all mutations
 *   node scripts/_a203_mutate.mjs 3 7        only those rows
 *
 * Breaks one claim at a time and asks all three layers whether they notice.
 *
 * ── FOUR THINGS THE HARNESSES BEFORE THIS ONE LEARNED THE HARD WAY ────────
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
 *
 * So a mutation carries a SOURCE edit, a SEED edit, or both. The seed edit is
 * what the merge would have written for that source edit; where there is no
 * clean single-line equivalent the test column says n/a and means it.
 *
 * The four the brief names by name are rows 1, 2, 3 and 4.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const CORPUS = join(here, 'data/accord-adjectifs-corpus.ts');
const LESSON = join(here, 'data/accord-adjectifs-lesson.ts');
const TERMS = join(here, 'data/accord-adjectifs-terms.ts');
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const FILES = [CORPUS, LESSON, TERMS, SEED];

/** { label, src: [file, from, to], also: [...], seed: [from, to] } */
const M = [
  /* ── The four the brief asks for by name ─────────────────────────────── */
  {
    label: 'add an s to the -eux masculine plural',
    src: [CORPUS, "forms: { default: 'grands', eux: 'sérieux', if: 'sportifs', invariable: 'marron' },", "forms: { default: 'grands', eux: 'sérieuxs', if: 'sportifs', invariable: 'marron' },"],
    seed: ['"fr": "Ils sont sérieux.",', '"fr": "Ils sont sérieuxs.",'],
  },
  {
    label: 'agree marron in the feminine plural',
    src: [CORPUS, "S('fr.a2.adjectifs-essentiels.016', 'Elles sont marron.'", "S('fr.a2.adjectifs-essentiels.016', 'Elles sont marrones.'"],
    seed: ['"fr": "Elles sont marron.",', '"fr": "Elles sont marrones.",'],
  },
  {
    label: 'teach bel, which is a2.16\'s',
    src: [LESSON, 'tip: `A chestnut. ${A113_REFRAME}` }', 'tip: `A chestnut, like bel and vieil. ${A113_REFRAME}` }'],
    seed: ['"tip": "A chestnut. Colours agree.', '"tip": "A chestnut, like bel and vieil. Colours agree.'],
  },
  {
    label: 'separate the invariable class from its regular neighbour',
    src: [LESSON, "{ fr: fr(CONTRAST_PAIR[0]), en: en(CONTRAST_PAIR[0]), note: 'The control. An ordinary colour on a feminine plural noun, carrying both endings.' },", ''],
    seed: ['"fr": "Ses vestes sont vertes.",\n            "en": "Her jackets are green.",\n            "note": "The control.', '"fr": "Ses vestes sont marron.",\n            "en": "Her jackets are green.",\n            "note": "The control.'],
  },

  /* ── The Owns ────────────────────────────────────────────────────────── */
  {
    // THREE ANCHORS. a2.14 §8: a claim stated in a label, a check question and a
    // why is not removed by touching one of them, and a mutation that does not
    // remove the claim proves nothing.
    label: 'take the cold adjectives out of the mission before the exam',
    src: [LESSON, 'label: `${u.masculine} · ${u.en}`,', "label: 'grand · tall',"],
    // FOUR ANCHORS. a2.14 §8: the claim is stated in the label, the section
    // `say` and TWO of the three checks' `why`. The first version of this row
    // touched the label and the say and left both whys naming every masculine,
    // so the claim was never removed and the row proved nothing.
    also: [
      [LESSON, "say: 'Three words. None of them is on any card in this lesson, in any deck, or in any list you have seen. You have everything you need for all three.',", "say: 'Three words you have already met on this screen.',"],
      [LESSON, '? `${u.masculine} ends in x, so the woman form swaps it for se and the s goes on the end of that.`', "? 'It ends in x, so the woman form swaps it for se and the s goes on the end of that.'"],
      [LESSON, ': `${u.masculine} ends in f, so the f becomes a v and then the s goes on.`,', ": 'It ends in f, so the f becomes a v and then the s goes on.',"],
    ],
    seed: ['courageux · brave', 'grand · tall'],
  },
  {
    label: 'give a cold adjective a corpus row',
    src: [CORPUS, "S('fr.a2.adjectifs-essentiels.023', 'Ils sont joyeux.'", "S('fr.a2.adjectifs-essentiels.023', 'Ils sont courageux.'"],
    seed: ['"fr": "Ils sont joyeux.",', '"fr": "Ils sont courageux.",'],
  },
  {
    // TARGETS THE ONE THAT HAS A SINGLE PRODUCTION QUESTION. The first version
    // of this row converted a `courageux` question, and `courageux` has two, so
    // the claim survived and the row proved nothing. `turquoise` has exactly one
    // and it is the whole cold test of the invariable pattern.
    label: 'make the exam RECOGNISE one cold pattern rather than produce it',
    src: [LESSON, "            accept: [UNSEEN[2].forms['f.pl'], `${CELL_SUBJECT['f.pl']} ${UNSEEN[2].forms['f.pl']}`],\n            answer: UNSEEN[2].forms['f.pl'],", "            opts: ['a', 'b', 'c'],\n            correct: 0,\n            answer: undefined,"],
    also: [[LESSON, `            q: \`\${CELL_SUBJECT['f.pl']} ___ . (\${UNSEEN[2].masculine})\`,\n            format: 'typeIn',`, `            q: \`\${CELL_SUBJECT['f.pl']} ___ . (\${UNSEEN[2].masculine})\`,\n            format: 'mcq',`]],
  },
  {
    label: 'invert the acts so the grid outweighs the Owns',
    src: [LESSON, "sections: [EUX_SECTION_ID, IDENTICAL_SECTION_ID, IF_SECTION_ID, EAR_SECTION_ID, BANK_SECTION_ID, READING_SECTION_ID, COLD_SECTION_ID],", "sections: [EUX_SECTION_ID, IDENTICAL_SECTION_ID, IF_SECTION_ID],"],
  },
  {
    label: 'cut the a1.14 back-reference out of the identical-cell section',
    src: [TERMS, "  `${IDENTICAL_UNIT} told you ${form('eux', 'm.sg')} and mauvais do not change in the plural.", "  `Somebody told you ${form('eux', 'm.sg')} and mauvais do not change in the plural."],
    also: [[LESSON, "note: 'Several men, and the describing word is the same six letters. There is no s and there never was one. DELIBERATE: an x has nowhere to put one.' },", "note: 'Several men, and it is the same six letters.' },"]],
    seed: ['a1.14 told you sérieux and mauvais', 'Somebody told you sérieux and mauvais'],
  },
  {
    label: 'cut the a1.13 back-reference out of the invariable section',
    src: [TERMS, '  `${INVARIABLE_UNIT} put it this way: ${A113_REFRAME}', '  `Here is the way to put it: ${A113_REFRAME}'],
    seed: ['a1.13 put it this way:', 'Here is the way to put it:'],
  },

  /* ── The neighbours ──────────────────────────────────────────────────── */
  {
    label: 'teach a -ment adverb, which is a2.17\'s',
    src: [CORPUS, "'Second adjective, same move. curieux loses its x and gains se.'", "'Second adjective, and it gives you curieusement too.'"],
    seed: ['Second adjective, same move. curieux loses its x and gains se.', 'Second adjective, and it gives you curieusement too.'],
  },
  {
    label: 'teach a comparative, which is a2.08\'s',
    src: [CORPUS, "'The form you start from. Nothing has been added to it yet.'", "'The form you start from, and plus grand comes off it.'"],
    seed: ['The form you start from. Nothing has been added to it yet.', 'The form you start from, and plus grand comes off it.'],
  },

  /* ── The mechanics ───────────────────────────────────────────────────── */
  {
    label: 'break the blind nasal the checker cannot see',
    src: [CORPUS, "'Elle est grande.', 'She is tall.', 'el eh GRAHⁿD'", "'Elle est grande.', 'She is tall.', 'el eh GRAHND'"],
    seed: ['"respell": "el eh GRAHⁿD"', '"respell": "el eh GRAHND"'],
  },
  {
    label: 'break the SECOND blind nasal, where the checker sees the other one',
    src: [CORPUS, "'Elles sont grandes.', 'They are tall.', 'el sohⁿ GRAHⁿD'", "'Elles sont grandes.', 'They are tall.', 'el sohⁿ GRAHND'"],
    seed: ['"respell": "el sohⁿ GRAHⁿD"', '"respell": "el sohⁿ GRAHND"'],
  },
  {
    label: 'superscript the false positive instead of dropping the H',
    src: [CORPUS, "from: 'KREHM', to: 'KREM'", "from: 'KREHM', to: 'KREHⁿM'"],
    seed: ['"respell": "KREM"', '"respell": "KREHⁿM"'],
  },
  {
    label: 'put a WORD-mode cell into the dictée',
    src: [CORPUS, "'el sohⁿ say-RYUHZ', '/ɛl sɔ̃ se.ʁjøz/', 'grid', GRID_DRILLS_NO_DICTEE", "'el sohⁿ say-RYUHZ', '/ɛl sɔ̃ se.ʁjøz/', 'grid', GRID_DRILLS"],
  },
  {
    label: 'offer an ear question between two forms that are one sound',
    src: [LESSON, "            opts: [form('if', 'm.sg'), form('if', 'f.sg')],\n            correct: 1,", "            opts: [form('if', 'm.pl'), form('if', 'm.sg')],\n            correct: 1,"],
    seed: ['"opts": [\n                  "sportif",\n                  "sportive"\n                ],', '"opts": [\n                  "sportifs",\n                  "sportif"\n                ],'],
  },
  {
    label: 'make the sheet disagree with the cards on one respelling',
    src: [LESSON, "rows: PATTERN_ORDER.map((p) => [PATTERN_LABEL[p], ...CELL_ORDER.map((c) => formRespell(p, c))]),", "rows: PATTERN_ORDER.map((p) => [PATTERN_LABEL[p], ...CELL_ORDER.map((c) => (p === 'eux' && c === 'f.sg' ? 'say-RYEUZ' : formRespell(p, c)))]),"],
  },
  {
    label: 'make the grid on screen disagree with the rows on one cell',
    src: [LESSON, "      cells: CELL_ORDER.map((c) => form(p, c)),", "      cells: CELL_ORDER.map((c) => (p === 'if' && c === 'm.pl' ? 'sportives' : form(p, c))),"],
  },
  {
    label: 'drop a role-play turn to one alternative',
    src: [LESSON, "          { fr: 'Oui, et ils sont curieux.', en: 'Yes, and they are curious.' },", ''],
    seed: ['{\n                    "fr": "Oui, et ils sont curieux.",\n                    "en": "Yes, and they are curious."\n                  }', '{\n                    "fr": "Oui, ils sont très calmes.",\n                    "en": "Yes, they are very calm."\n                  }'],
  },
  {
    label: 'give an imported row a gender, so it joins a1.03\'s ending population',
    seed: ['"id": "fr.sons.couleurs.011",\n      "kind": "word",\n      "level": "sons",\n      "theme": "couleurs",\n      "fr": "marron",', '"id": "fr.sons.couleurs.011",\n      "kind": "word",\n      "level": "sons",\n      "theme": "couleurs",\n      "gender": "m",\n      "fr": "marron",'],
  },
  {
    label: 'lean the section mix back on groupDrill, the way the verb band does',
    src: [LESSON, "    type: 'useCases',\n    id: USECASES_SECTION_ID,", "    type: 'groupDrill',\n    id: USECASES_SECTION_ID,"],
  },
  {
    label: 're-author an imported adjective instead of importing it',
    src: [CORPUS, "  W('fr.a2.adjectifs-essentiels.017', 'sportif', 'sporty', 'spor-TEEF'", "  W('fr.a2.adjectifs-essentiels.017', 'marron', 'brown', 'mah-ROHⁿ'"],
    seed: ['"fr": "sportif",', '"fr": "marron",'],
  },
  {
    label: 'put an English line in an frSub',
    src: [LESSON, "    frSub: 'Les quatre formes',", "    frSub: 'The Four Shapes',"],
    seed: ['"frSub": "Les quatre formes"', '"frSub": "The Four Shapes"'],
  },
  {
    label: 'put grammar jargon in Lesson.intro, which two screens draw',
    src: [LESSON, "    'Every describing word in French has four shapes,", "    'Every adjective in French has four inflected shapes,"],
    seed: ['"intro": "Every describing word in French has four shapes,', '"intro": "Every adjective in French has four inflected shapes,'],
  },
  {
    // Replacing the CONSTANT replaces it everywhere, so a count guard cannot see
    // this and the density validator's floor of three is still met. What is
    // actually guardable, and what doctrine §B.4 is asking for, is that the
    // reframe stays short enough to run in the half-second between the noun and
    // the adjective. Twelve words is the xl cap and the right ceiling.
    label: 'make the reframe too long to run mid-sentence',
    src: [CORPUS, "export const REFRAME = 'The plain form tells you the other three.';", "export const REFRAME = 'Look at the end of the word before you say it out loud in a sentence, every single time.';"],
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

const BATCH = 'npx tsx scripts/author-accord-adjectifs-batch.ts --dry-run';
const MERGE = 'npx tsx scripts/merge-accord-adjectifs-into-seed.ts --dry-run';
const TEST = 'node --test ../ealch-v2/src/content/a2-03-accord.test.ts';

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
    if (!cur.includes(from)) { srcOk = false; break; }
    writeFileSync(file, cur.replace(from, to), 'utf8');
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
