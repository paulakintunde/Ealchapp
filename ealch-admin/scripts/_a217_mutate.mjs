/* a2.17 mutation harness.
 *
 *   node scripts/_a217_mutate.mjs            all mutations
 *   node scripts/_a217_mutate.mjs 3 7        only those rows
 *
 * Breaks one claim at a time and asks all three layers whether they notice.
 *
 * ── FIVE THINGS THE HARNESSES BEFORE THIS ONE LEARNED THE HARD WAY ────────
 *
 * 1. RUN EVERY LAYER UNMUTATED FIRST (a2.13 §7). If the baseline is not green,
 *    every row below it is noise.
 * 2. THESE FILES ARE LF, NOT CRLF, AND a2.16's HARNESS SAYS THE OPPOSITE. Its
 *    header states "THESE FILES ARE CRLF" and every multi-line anchor here was
 *    written with \r\n on that authority. Three rows reported SKIPPED until the
 *    line endings were measured: both scripts/data/*.ts and seed.json are LF.
 *    A missing anchor is SKIPPED rather than counted as a pass, which is what
 *    made the mistake visible instead of quietly turning three rows green.
 * 3. ONCE THE LESSON HAS BEEN APPLIED, EVERY CONTENT MUTATION TRIPS THE BATCH'S
 *    VERSION CHECK (a2.14 §7), so the batch reports "caught" with that message
 *    rather than on the guard you meant to test. This harness prints the LAST
 *    line of the failure, which is what `die()` writes, precisely so the column
 *    can be read against the reason. READ THE MESSAGE, NOT THE COLUMN.
 * 4. THE TEST READS seed.json AND NOTHING ELSE (a2.15 §9). A source mutation it
 *    cannot see is reported n/a, not MISS.
 * 5. ONE ANCHOR IS OFTEN NOT ENOUGH (a2.14 §8). A claim stated in a label, a
 *    `say`, a `why` and a card body is not removed by touching one of them, and
 *    a mutation that does not remove the claim proves nothing.
 *
 * The four the brief names by name are rows 1 to 4:
 *   break the derivation chain · regularise bien · conjugate a compound tense ·
 *   drop the unseen-adjective item.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const CORPUS = join(here, 'data/adverbes-corpus.ts');
const LESSON = join(here, 'data/adverbes-lesson.ts');
const TERMS = join(here, 'data/adverbes-terms.ts');
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const FILES = [CORPUS, LESSON, TERMS, SEED];

/** { label, src: [file, from, to], also: [...], seed: [from, to] } */
const M = [
  /* ── The four the brief asks for by name ─────────────────────────────── */
  {
    // BREAK THE DERIVATION CHAIN. The middle step is deleted and the long word
    // is built straight off the plain form, which is the single most likely
    // "simplification" a later author will make.
    label: 'break the chain: build the long word off the plain form',
    src: [CORPUS, "    forms: { lent: 'lente', doux: 'douce', serieux: 'sérieuse' },", "    forms: { lent: 'lent', doux: 'douce', serieux: 'sérieuse' },"],
    seed: ['"cells": [\n              "lent",\n              "lente",', '"cells": [\n              "lent",\n              "lent",'],
  },
  {
    // AND THE SAME THING ONE LAYER DOWN: the respelling stops being the plain
    // form plus a consonant, so the arithmetic is false while the words are
    // still right.
    label: 'break the chain arithmetic: the woman form stops adding a consonant',
    src: [CORPUS, "    respells: { lent: 'LAHⁿT', doux: 'DOOS', serieux: 'say-RYUHZ' },", "    respells: { lent: 'LAHⁿ', doux: 'DOOS', serieux: 'say-RYUHZ' },"],
  },
  {
    label: 'regularise bien into bonnement',
    src: [CORPUS, "export const IRREGULARS = ['bien', 'mal', 'vite'] as const;", "export const IRREGULARS = ['bonnement', 'mal', 'vite'] as const;"],
  },
  {
    // AND THE SOFTER VERSION, which is the one that would actually ship: the
    // three are still there and the section stops naming one of them.
    // ONE ANCHOR WAS NOT ENOUGH (a2.14 §8). The first version of this row swapped
    // only the example, and `vite` survived in the section's `say`, which is
    // built from IRREGULAR_ARITHMETIC and lists all three. The mutation reported
    // caught on the TRANCHE guard rather than on the by-name one, which is the
    // wrong reason, and the test missed it because the claim was still there.
    label: 'stop naming vite on the irregular screen',
    src: [LESSON, "      { fr: fr('fr.a2.adverbes-essentiels.017'), en: en('fr.a2.adverbes-essentiels.017'), note: 'And this one has no describing word behind it at all. It is a word on its own and it always has been.' },", "      { fr: fr('fr.a2.adverbes-essentiels.014'), en: en('fr.a2.adverbes-essentiels.014'), note: 'And a word for how often, in the same place as everything else.' },"],
    also: [
      [LESSON, "    say: IRREGULAR_ARITHMETIC,", "    say: 'Two of these are not built from anything at all, and they are the two you will say most often.',"],
    ],
    seed: ['"fr": "Il parle vite.",\n              "en": "He speaks fast.",', '"fr": "Je mange souvent.",\n              "en": "I often eat.",'],
  },
  {
    label: 'conjugate a compound tense on a teaching card',
    src: [LESSON, "      { t: 'Put it in the right place', s: PLACEMENT_ARITHMETIC },", "      { t: 'Put it in the right place', s: `Hier j'ai bien mangé ici. ${PLACEMENT_ARITHMETIC}` },"],
    seed: ['"t": "Put it in the right place",\n          "s": "The word for how', '"t": "Put it in the right place",\n          "s": "Hier j\'ai bien mangé ici. The word for how'],
  },
  {
    label: 'drop the unseen-adjective item from the exam',
    src: [LESSON, '            accept: [UNSEEN[0].adverb],', '            accept: [step(\'lent\', \'adverb\')],'],
    also: [
      [LESSON, '            answer: UNSEEN[0].adverb,', "            answer: step('lent', 'adverb'),"],
    ],
    seed: ['"answer": "parfaitement",', '"answer": "lentement",'],
  },

  /* ── The Owns ────────────────────────────────────────────────────────── */
  {
    // THE SUFFIX. This is the decision the lesson settles for the level, and
    // 499 rows in this corpus already spell it the wrong way, so a later author
    // "matching the neighbours" is the likely path.
    label: 'respell the suffix with a plain n, the way 499 published rows do',
    src: [CORPUS, "export const MENT = 'MAHⁿ';", "export const MENT = 'MAHN';"],
    seed: ['"respell": "lahⁿt-MAHⁿ"', '"respell": "lahⁿt-MAHN"'],
  },
  {
    // THE BLIND HALF. Repair only what the checker reports and the row comes out
    // clean and still wrong. This is the finding the build exists to protect.
    label: 'repair only the nasal the checker can see',
    src: [CORPUS, "from: 'lahnt-MAHN', half: 'lahnt-MAHⁿ', to: 'lahⁿt-MAHⁿ', blind: true, house: false,", "from: 'lahnt-MAHN', half: 'lahnt-MAHⁿ', to: 'lahnt-MAHⁿ', blind: true, house: false,"],
    seed: ['"respell": "lahⁿt-MAHⁿ"', '"respell": "lahnt-MAHⁿ"'],
  },
  {
    label: 'give two chain adjectives the same added consonant',
    src: [CORPUS, "    respells: { lent: 'LAHⁿT', doux: 'DOOS', serieux: 'say-RYUHZ' },", "    respells: { lent: 'LAHⁿT', doux: 'DOOT', serieux: 'say-RYUHZ' },"],
  },
  {
    label: 'split the chain across sections by dropping a row',
    src: [CORPUS, "export const ADJ_ORDER: readonly Adj[] = ['lent', 'doux', 'serieux'];", "export const ADJ_ORDER: readonly Adj[] = ['lent', 'doux'];"],
  },
  {
    label: 'turn the chain from a tapTable into a read-only list',
    src: [LESSON, "    type: 'tapTable',\n    id: CHAIN_SECTION_ID,", "    type: 'examples',\n    id: CHAIN_SECTION_ID,"],
    seed: ['"type": "tapTable",\n      "id": "s07-chain",', '"type": "examples",\n      "id": "s07-chain",'],
  },
  {
    label: 'reorder the chain columns so the ending comes before the woman form',
    src: [CORPUS, "export const STEP_ORDER: readonly Step[] = ['masc', 'fem', 'adverb'];", "export const STEP_ORDER: readonly Step[] = ['masc', 'adverb', 'fem'];"],
  },
  {
    label: 'author sérieuse instead of importing a2.03\'s own row',
    src: [CORPUS, "    fem: 'fr.a2.adjectifs-essentiels.019',      // sérieuse     say-RYUHZ   <- a2.03's own row", "    fem: 'fr.a2.adverbes-essentiels.002',      // douce, standing in"],
  },
  {
    label: 'stop quoting a2.03\'s reframe on the payoff screen',
    src: [CORPUS, "export const A203_REFRAME = 'The plain form tells you the other three.';", "export const A203_REFRAME = 'The plain form gives you the rest of them.';"],
    seed: ['"fr": "The plain form tells you the other three.",', '"fr": "The plain form gives you the rest of them.",'],
  },

  /* ── Placement ───────────────────────────────────────────────────────── */
  {
    label: 'put the word for how in front of the verb on a teaching card',
    src: [LESSON, "      { fr: fr('fr.a2.adverbes-essentiels.014'), en: en('fr.a2.adverbes-essentiels.014'), note: 'Verb first, then how often. English does the opposite and it is the only thing you have to unlearn here.' },", "      { fr: 'Je souvent mange ici.', en: 'I often eat here.', note: 'Verb first, then how often. English does the opposite and it is the only thing you have to unlearn here.' },"],
    seed: ['"fr": "Je mange souvent.",\n              "en": "I often eat.",', '"fr": "Je souvent mange.",\n              "en": "I often eat.",'],
  },
  {
    label: 'reorder the placement table so the word for how comes second',
    src: [LESSON, "      cells: [p.subject, p.verb, p.adverb],", "      cells: [p.subject, p.adverb, p.verb],"],
  },
  {
    label: 'turn the placement table into a scrolling list',
    src: [LESSON, "    type: 'tapTable',\n    id: PLACE_SECTION_ID,", "    type: 'examples',\n    id: PLACE_SECTION_ID,"],
    seed: ['"type": "tapTable",\n      "id": "s04-place",', '"type": "examples",\n      "id": "s04-place",'],
  },
  {
    label: 'replace both placement errorSpots with recognition questions',
    src: [LESSON, "            format: 'errorSpot',\n            prompt: 'Je souvent mange ici.',", "            format: 'mcq',\n            prompt: 'Je souvent mange ici.',"],
  },

  /* ── The traps ───────────────────────────────────────────────────────── */
  {
    label: 'put bon after a verb on a teaching card',
    src: [LESSON, "        why: `${IRREGULAR_FROM.bien} is for a thing and this one is for a doing. There is no word ending in -ment here at all.`,", "        why: `Elle chante bon is what English would give you, and it is fine here.`,"],
    seed: ['"why": "bon is for a thing and this one is for a doing.', '"why": "Elle chante bon is what English gives you.'],
  },
  {
    label: 'separate évidemment and constamment onto two screens',
    src: [LESSON, "      { fr: fr('fr.a2.adverbes-essentiels.022'), en: en('fr.a2.adverbes-essentiels.022') },", "      { fr: fr('fr.a2.adverbes-essentiels.009'), en: en('fr.a2.adverbes-essentiels.009') },"],
    also: [
      [LESSON, "      { fr: fr('fr.a2.adverbes-essentiels.020'), en: en('fr.a2.adverbes-essentiels.020') },", "      { fr: fr('fr.a2.adverbes-essentiels.010'), en: en('fr.a2.adverbes-essentiels.010') },"],
      [TERMS, "    { itemId: 'fr.sons.adverbes-essentiels.045', note: 'The same story with an a on the page.' },", "    { itemId: 'fr.a2.adverbes-essentiels.009', note: 'And a long one, in the same place.' },"],
    ],
  },
  {
    label: 'make the two endings respell differently, so they are no longer one sound',
    src: [CORPUS, "adjRespell: 'kohⁿs-TAHⁿ', adverbRespell: `kohⁿs-ta-${MENT}` },", "adjRespell: 'kohⁿs-TAHⁿ', adverbRespell: `kohⁿs-tah-${MENT}` },"],
    seed: ['"respell": "kohⁿs-ta-MAHⁿ"', '"respell": "kohⁿs-tah-MAHⁿ"'],
  },
  {
    label: 'ask an ear question that turns on the suffix spelling',
    src: [LESSON, "            opts: [fr('fr.a2.adverbes-essentiels.016'), fr('fr.a2.adverbes-essentiels.015')],", "            opts: ['évidemment', 'évidamment'],"],
    seed: ['"opts": [\n              "Il chante mal.",\n              "Elle chante bien."\n            ],', '"opts": [\n              "évidemment",\n              "évidamment"\n            ],'],
  },
  {
    label: 'stop saying that the -emment pair does not use the woman form',
    src: [CORPUS, "  'And these two do not use the woman form at all. The ending on the adjective is taken off and replaced, so this is the one place in the lesson where the rule is not the answer.';", "  'And these two are worth learning as they are, because the spelling is the only thing that separates them.';"],
    // THE FIRST VERSION OF THIS ROW REPLACED HALF THE SENTENCE and left 'taken
    // off and replaced' standing, which the test's own regex accepts. The claim
    // was still there, so the MISS was the mutation's fault rather than the
    // guard's. a2.14 §8.
    seed: ['And these two do not use the woman form at all. The ending on the adjective is taken off and replaced, so this is the one place in the lesson where the rule is not the answer.', 'And these two are worth learning as they are, because the spelling is the only thing that separates them.'],
  },
  {
    label: 'print the invented évidentement on a teaching card',
    src: [LESSON, "      { fr: fr('fr.a2.adverbes-essentiels.019'), en: en('fr.a2.adverbes-essentiels.019') },", "      { fr: 'Il est évident.', en: 'It is obvious, and the long word is évidentement.' },"],
  },
  {
    label: 'drop évidemment from the dictée, where the spelling is testable',
    src: [LESSON, "  namingId('évidemment'), namingId('constamment'),", "  namingId('constamment'),"],
  },

  /* ── The neighbours ──────────────────────────────────────────────────── */
  {
    label: 'let mieux onto a learner surface',
    src: [LESSON, "      { front: 'Where does it go?', back: PLACEMENT_CLAIM, say: fr('fr.a2.adverbes-essentiels.014') },", "      { front: 'Where does it go?', back: `${PLACEMENT_CLAIM} And better is mieux.`, say: fr('fr.a2.adverbes-essentiels.014') },"],
    seed: ['"front": "Where does it go?",\n          "back": "The word for how goes after the verb. English puts it in front, and French never does."', '"front": "Where does it go?",\n          "back": "The word for how goes after the verb. And better is mieux."'],
  },
  {
    label: 'cut the deferral line, so a2.05 is never named',
    src: [CORPUS, "  `In a past tense the short ones move, and that rule arrives with the tense in ${PASSE_UNIT}. If you meet « j'ai bien mangé » before then, nothing here is wrong: it is a rule you have not been given yet.`;", "  'Everything here is about a sentence happening now, which is every sentence you can currently make.';"],
    seed: ['In a past tense the short ones move', 'In every tense the rule is the same'],
  },
  {
    label: 'keep the deferral line and drop its example',
    src: [CORPUS, "If you meet « j'ai bien mangé » before then, nothing here is wrong: it is a rule you have not been given yet.`;", "You will be told about it then.`;"],
    seed: ["If you meet « j'ai bien mangé » before then", 'You will be told about it then. Before then'],
  },
  {
    label: 're-teach negation on a production surface',
    src: [LESSON, "    say: `${PLACEMENT_CLAIM} Read the columns left to right. That is the order, and every one of these five was written by somebody else for another lesson.`,", "    say: `${PLACEMENT_CLAIM} Ne goes in front of the verb and pas goes behind it, two words either side of the verb.`,"],
    seed: ['Read the columns left to right.', 'Ne goes in front of the verb and pas goes behind it. Read the columns left to right.'],
  },
  {
    label: 'author lentement instead of importing it, so the theme serves one card twice',
    src: [CORPUS, "  W('fr.a2.adverbes-essentiels.003', 'évident'", "  W('fr.a2.adverbes-essentiels.003', 'lentement'"],
  },

  /* ── The shape ───────────────────────────────────────────────────────── */
  {
    label: 'move a mission from the Owns act into the paradigm act',
    // THREE, NOT ONE. Moving a single mission leaves act3 at six against act2's
    // four and the weight guard still passes, so the first version of this row
    // reported caught on the VERSION check instead (a2.14 §7: read the message,
    // not the column). Three inverts it.
    src: [LESSON, "    sections: [PLACE_SECTION_ID, ORDER_SECTION_ID, KNOWN_SECTION_ID],", "    sections: [PLACE_SECTION_ID, ORDER_SECTION_ID, KNOWN_SECTION_ID, DECK_SECTION_ID, READING_SECTION_ID, ALREADY_SECTION_ID],"],
    also: [
      [LESSON, "    sections: [CHAIN_SECTION_ID, HEAR_SECTION_ID, PAYOFF_SECTION_ID, ALREADY_SECTION_ID, UNSEEN_SECTION_ID, READING_SECTION_ID, DECK_SECTION_ID],", "    sections: [CHAIN_SECTION_ID, HEAR_SECTION_ID, PAYOFF_SECTION_ID, UNSEEN_SECTION_ID],"],
    ],
  },
  {
    label: 'soften the reframe from `say` to `take`',
    src: [CORPUS, "export const REFRAME = 'Say the feminine, then add -ment.';", "export const REFRAME = 'Take the feminine, then add -ment.';"],
    seed: ['"reframe": "Say the feminine, then add -ment."', '"reframe": "Take the feminine, then add -ment."'],
  },
  {
    label: 'stack the generalisation trapDrill instead of stepping it',
    src: [LESSON, "      { kind: 'drill', label: 'Prove it', title: 'Build It', gate: true },", "      { kind: 'drill', label: 'Prove it', title: 'Build It' },"],
    seed: ['"kind": "drill",\n          "label": "Prove it",\n          "title": "Build It",\n          "gate": true', '"kind": "drill",\n          "label": "Prove it",\n          "title": "Build It"'],
  },
  {
    label: 'give a role-play turn one way to answer',
    src: [LESSON, "          { fr: 'Oui, je mange toujours ici.', en: 'Yes, I always eat here.' },", ''],
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

const BATCH = 'npx tsx scripts/author-adverbes-batch.ts --dry-run';
const MERGE = 'npx tsx scripts/merge-adverbes-into-seed.ts --dry-run';
const TEST = 'node --test ../ealch-v2/src/content/a2-17-adverbes.test.ts';

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
