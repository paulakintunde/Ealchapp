/* a2.04 mutation harness.
 *
 *   node scripts/_a204_mutate.mjs            all mutations
 *   node scripts/_a204_mutate.mjs 3 7        only those rows
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
 * The five the brief names by name are rows 1 to 5:
 *   put chez before a place · re-author a country · teach sur/sous ·
 *   split the five-type grid · use dans temporally.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const CORPUS = join(here, 'data/prepositions-lieu-corpus.ts');
const LESSON = join(here, 'data/prepositions-lieu-lesson.ts');
const TERMS = join(here, 'data/prepositions-lieu-terms.ts');
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const FILES = [CORPUS, LESSON, TERMS, SEED];

/** { label, src: [file, from, to], also: [...], seed: [from, to] } */
const M = [
  /* ── The five the brief asks for by name ─────────────────────────────── */
  {
    // PUT CHEZ BEFORE A PLACE, on a correct surface. This is the error the
    // lesson exists to prevent and the corpus has never made it once.
    label: 'put chez in front of a place, on the shop screen',
    src: [LESSON, "      { fr: fr(A(137)), en: en(A(137)), note: `${sub(A(137))} The shop. A place, so à, and à and la do not fold.` },",
      "      { fr: fr(A(137)), en: en(A(137)), note: `${sub(A(137))} The shop. Or chez la boulangerie, which is the same thing.` },"],
    seed: ['"note": "[ah lah boo-lahⁿzh-REE] The shop. A place, so à, and à and la do not fold."',
      '"note": "[ah lah boo-lahⁿzh-REE] The shop. Or chez la boulangerie, which is the same thing."'],
  },
  {
    // AND IN THE PLACE A LATER AUTHOR WOULD ACTUALLY PUT IT: the reference
    // sheet, which no guard in this band walked before a2.03 §12.
    label: 'put chez in front of a place, in the reference sheet',
    src: [LESSON, "          ['la gare', 'à la gare', 'de la gare'],", "          ['la gare', 'chez la gare', 'de la gare'],"],
    seed: ['"à la gare",\n              "de la gare"', '"chez la gare",\n              "de la gare"'],
  },
  {
    // RE-AUTHOR A COUNTRY. a1.22 owns them and the flashcard hub serves two
    // rows sharing an fr in one theme as one card twice.
    label: 're-author a country as an owned row instead of importing it',
    src: [CORPUS, "  PH(136, 'chez Marie', \"at Marie's\", 'shay ma-REE', '/ʃe ma.ʁi/', 'phrase', PD, 'A name, so there is no article to leave alone. Nine letters and the shortest thing in the lesson.', 'person'),",
      "  PH(136, 'la France', 'France', 'LAH FRAHⁿSS', '/la fʁɑ̃s/', 'phrase', PD, 'The country, authored here rather than imported.', 'country'),"],
  },
  {
    // TEACH sur AND sous. a1.21 owns them and teaching them again is what
    // turns this lesson into a revision of its own prerequisite.
    label: 'teach sur and sous on a production surface',
    src: [LESSON, "      impCard('fr.a1.la-ville.105', 'a shop', 'À la pharmacie, and there is no person behind this one in the whole corpus.'),",
      "      impCard('fr.a1.la-ville.105', 'a shop', 'À la pharmacie. And sur and sous work the same way: sur la table, sous la table.'),"],
    seed: ['"body": "À la pharmacie, and there is no person behind this one in the whole corpus."',
      '"body": "À la pharmacie. And sur and sous work the same way: sur la table, sous la table."'],
  },
  {
    // SPLIT THE GRID. Presented as four separate rules the learner has four
    // things to remember. THREE anchors, because removing one row still leaves
    // three and the row-by-row assertion is what has to fail.
    label: 'split the four-kind grid by dropping a row out of it',
    src: [CORPUS, "export const KIND_ORDER: readonly Kind[] = ['person', 'city', 'country', 'building'];",
      "export const KIND_ORDER: readonly Kind[] = ['person', 'city', 'country'];"],
    seed: ['"cells": [\n              "a building",\n              "à + le",\n              "au marché"\n            ]', '"cells": [\n              "a building",\n              "à + le",\n              "au parc"\n            ]'],
  },
  {
    // USE dans TEMPORALLY. a2.18 is the very next lesson and owns it.
    label: 'use dans in its temporal sense on a card',
    src: [LESSON, "      { t: 'Answer for a place nobody taught you', s: UNSEEN_CLAIM },",
      "      { t: 'Answer for a place nobody taught you', s: 'On y va dans deux heures, et vous saurez quoi dire.' },"],
    seed: ['"s": "Four places this lesson has not shown you, and you can answer all four without being told. That is what a rule is for."',
      '"s": "On y va dans deux heures, et vous saurez quoi dire."'],
  },

  /* ── The Owns ────────────────────────────────────────────────────────── */
  {
    // MAKE CHEZ FOLD. This is the whole of what the lesson owns: chez is the
    // only place word in the language that leaves the article alone.
    label: 'make chez fold with the article, like à and de',
    src: [CORPUS, "    word: 'chez', withLe: 'chez le', withLa: 'chez la', behaviour: 'keeps', owner: null,",
      "    word: 'chez', withLe: 'au', withLa: 'chez la', behaviour: 'folds', owner: null,"],
    seed: ['"chez",\n              "chez le",\n              "chez la"', '"chez",\n              "au",\n              "chez la"'],
  },
  {
    // MAKE en KEEP THE ARTICLE, which is the mirror error and the one a learner
    // who has learned to fold actually makes.
    label: 'let en keep the article',
    src: [CORPUS, "    word: 'en', withLe: 'en', withLa: 'en', behaviour: 'drops', owner: COUNTRY_UNIT,",
      "    word: 'en', withLe: 'en le', withLa: 'en la', behaviour: 'drops', owner: COUNTRY_UNIT,"],
    seed: ['"en",\n              "en",\n              "en"', '"en",\n              "en le",\n              "en la"'],
  },
  {
    // DROP THE CREDIT. Three of the four kinds are somebody else's and the card
    // says so; tidying the unit ids away turns a synthesis into a repeat.
    label: 'drop a1.22 out of the country row of the grid',
    src: [CORPUS, "  person: null,\n  city: CONTRACTION_UNIT,\n  country: COUNTRY_UNIT,\n  building: CONTRACTION_UNIT,",
      "  person: null,\n  city: CONTRACTION_UNIT,\n  country: null,\n  building: CONTRACTION_UNIT,"],
    seed: ['a1.22 taught you this one already.', 'Nobody has taught you this one, and it is the reason this lesson exists.'],
  },

  /* ── The guards themselves ───────────────────────────────────────────── */
  {
    // A GENDERED NOUN BECOMING AN ITEM AGAIN. This is the defect v1 shipped and
    // four of a1.03's printed figures moved.
    label: 'put a gendered noun back into itemIds',
    src: [CORPUS, "  'fr.a2.systeme-de-sante.001',      // le médecin", "  // 'fr.a2.systeme-de-sante.001',   // le médecin"],
  },
  {
    // AUTHOR A HEADWORD, which is the other half of the same hazard.
    label: 'author a gendered headword into the block',
    src: [CORPUS, "  PH(133, 'chez le médecin', \"at the doctor's\", `shay luh mayd-S${EN_IN}`, '/ʃe lə med.sɛ̃/', 'phrase', PD, 'Three words and they stay three words. This is the phrase the whole lesson is built to produce.', 'person'),",
      "  { id: P(133), kind: 'word', level: 'a2', theme: THEME, fr: 'le coiffeur', en: 'the hairdresser', ipa: '/lə kwa.fœʁ/', respell: 'luh kwah-FUHR', gender: 'm', notes: 'A person.', tags: ['prepositions'], drills: PD, version: 1, role: 'phrase', placeKind: 'person' },"],
  },
  {
    // BREAK THE NASAL. `en` is a bare nasal on every country screen.
    label: 'close en with a plain n instead of the superscript',
    src: [CORPUS, "export const EN_RESPELL = 'ahⁿ';", "export const EN_RESPELL = 'ahn';"],
    seed: ['"respell": "zhuh veh ahⁿ FRAHⁿSS"', '"respell": "zhuh veh ahn FRAHⁿSS"'],
  },
  {
    // AND THE ONE THE CHECKER CANNOT SEE. `la boulangerie` is unflagged AND
    // wrong in the database, so a build that trusted the checker would ship it.
    label: 'un-repair the invisible nasal in la boulangerie',
    src: [CORPUS, "    from: 'lah boo-lahnzh-REE', half: 'lah boo-lahnzh-REE', to: 'lah boo-lahⁿzh-REE', blind: true, house: false,",
      "    from: 'lah boo-lahnzh-REE', half: 'lah boo-lahnzh-REE', to: 'lah boo-lahnzh-REE', blind: true, house: false,"],
  },
  {
    // AND THE HOUSE ONE, which is a different reason for the same symptom.
    label: 'stop distinguishing the house repair from the blind one',
    src: [CORPUS, "    from: 'mayd-SAN', half: 'mayd-SAⁿ', to: `mayd-S${EN_IN}`, blind: false, house: true,",
      "    from: 'mayd-SAN', half: 'mayd-SAⁿ', to: `mayd-S${EN_IN}`, blind: false, house: false,"],
  },
  {
    // A DICTÉE TARGET IN WORD MODE hands every real word over pre-spelled.
    label: 'put a dictée target long enough to spell in word mode',
    src: [CORPUS, "  S(141, 'Je reste chez moi.', 'I am staying at my place.', 'zhuh REST shay MWAH', '/ʒə ʁɛst ʃe mwa/', 'person', D,",
      "  S(141, 'Je reste chez moi ce soir avec mes amis.', 'I am staying at my place tonight with my friends.', 'zhuh REST shay MWAH suh SWAR', '/ʒə ʁɛst ʃe mwa sə swaʁ/', 'person', D,"],
  },
  {
    // AN EAR QUESTION about two things that are one sound.
    label: 'add a listenChoose round on au against aux',
    src: [LESSON, "            q: 'Which word gets rid of the article rather than doing something to it?',\n            format: 'mcq',",
      "            q: 'Listen. Which one is it?',\n            format: 'listenChoose',"],
    seed: ['"q": "Which word gets rid of the article rather than doing something to it?",\n                  "format": "mcq"',
      '"q": "Listen. Which one is it?",\n                  "format": "listenChoose"'],
  },
  {
    // STACK A trapDrill. lesson-contract.test.ts enforces the shape seed-wide
    // and it was written after a2.03 and a2.16 had both shipped the defect.
    label: 'stack the chez trapDrill instead of stepping it',
    src: [LESSON, "      { kind: 'drill', label: 'Prove it', title: 'Person Or Place', gate: true },",
      "      { kind: 'drill', label: 'Prove it', title: 'Person Or Place' },"],
    seed: ['"title": "Person Or Place",\n          "gate": true', '"title": "Person Or Place"'],
  },
  {
    // AND THE THING THE CONTRACT DOES NOT CHECK: the audio step plays each
    // card's own line, so the take has to contain it.
    label: 'point the trap audio step at a take that does not hold its lines',
    src: [LESSON, "    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-04-trap' },",
      "    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-04-dictee' },"],
    seed: ['"recordingId": "rec-a2-04-trap"', '"recordingId": "rec-a2-04-dictee"'],
  },
  {
    // GIVE THE GENERALISATION AWAY by naming one of the four places earlier.
    label: 'name a generalisation place on an earlier screen',
    src: [LESSON, "      impCard('fr.a1.deplacements.003', 'a building', 'À la gare, and this is where the conversation at the end of the lesson goes.'),",
      "      impCard('fr.a1.deplacements.003', 'a building', 'À la gare, like à la piscine and every other building with a la.'),"],
    seed: ['"body": "À la gare, and this is where the conversation at the end of the lesson goes."',
      '"body": "À la gare, like à la piscine and every other building with a la."'],
  },
  {
    // SOFTEN THE REFRAME so it names no behaviour.
    label: 'soften the reframe into a definition',
    src: [CORPUS, "export const REFRAME = 'À folds the article in. En throws it out. Chez leaves it alone.';",
      "export const REFRAME = 'The place decides which little word you use.';"],
    seed: ['"reframe": "À folds the article in. En throws it out. Chez leaves it alone."',
      '"reframe": "The place decides which little word you use."'],
  },
  {
    // INVERT THE ACT WEIGHTS, so the paradigm outweighs the Owns. THREE
    // sections move, because moving one leaves act3 ahead and the guard passes.
    label: 'give the four-kind paradigm more sections than the Owns',
    src: [LESSON, "    sections: [PERSON_SECTION_ID, PEOPLE_SECTION_ID, SHOP_SECTION_ID, TRAP_SECTION_ID, ERRORS_SECTION_ID, READING_SECTION_ID],",
      "    sections: [PERSON_SECTION_ID, TRAP_SECTION_ID],"],
    also: [
      [LESSON, "    sections: [CITY_SECTION_ID, COUNTRY_SECTION_ID, BUILDING_SECTION_ID, UNSEEN_SECTION_ID],",
        "    sections: [CITY_SECTION_ID, COUNTRY_SECTION_ID, BUILDING_SECTION_ID, UNSEEN_SECTION_ID, PEOPLE_SECTION_ID, SHOP_SECTION_ID, ERRORS_SECTION_ID, READING_SECTION_ID],"],
    ],
  },
  {
    // GIVE A ROLE-PLAY TURN ONE ANSWER. scenario.logic.test.ts is seed-wide and
    // no document in this band mentions it; a2.03 shipped three such turns.
    label: 'give a role-play turn one way to answer',
    src: [LESSON, "          { fr: 'Non, ça va.', en: 'No, it is fine.' },", ''],
  },
  {
    // PUT JARGON ON THE INTRO, which is drawn on two screens and which every
    // guard in this band walked past until a2.11 found it on a Pixel 6.
    label: 'put grammar jargon in intro',
    src: [LESSON, "    'French has four small words for where somebody is or where they are going,",
      "    'French has four locative prepositions taking an animate or inanimate complement,"],
    seed: ['"intro": "French has four small words for where somebody is or where they are going,',
      '"intro": "French has four locative prepositions taking an animate or inanimate complement,'],
  },
  {
    // AND ON A cardDeck `sub`, which prose() drops as notation. a2.15 §3.
    label: 'put a banned word in a cardDeck sub',
    src: [LESSON, "      { label: 'the word', head: importedFr('fr.sons.muettes.009'), sub: impSub('fr.sons.muettes.009'),",
      "      { label: 'the word', head: importedFr('fr.sons.muettes.009'), sub: 'the locative complement',"],
    seed: ['"head": "chez",\n            "sub": "[SHAY]"', '"head": "chez",\n            "sub": "the locative complement"'],
  },
  {
    // A CLUSTERED ANSWER SLOT.
    label: 'cluster the exam answers into one slot',
    src: [LESSON, "              'Whether it is a person, a town, a country or a building',\n              'Whether it is far',",
      "              'Whether it is far',\n              'Whether it is a person, a town, a country or a building',"],
    also: [
      [LESSON, "            correct: 0,\n            why: `${THE_MOVE} The gender only matters once you know it is a country", "            correct: 1,\n            why: `${THE_MOVE} The gender only matters once you know it is a country"],
    ],
  },
  {
    // BREAK THE FALSE-POSITIVE ASSERTION, which is the day the checker improves.
    label: 'claim the checker does not flag MEHM',
    src: [CORPUS, "  flagged: 'MEHM',\n  clean: 'mem',", "  flagged: 'mem',\n  clean: 'MEHM',"],
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
    return { ok: false, msg: line.slice(0, 140) };
  }
}

const BATCH = 'npx tsx scripts/author-prepositions-lieu-batch.ts --dry-run';
const MERGE = 'npx tsx scripts/merge-prepositions-lieu-into-seed.ts --dry-run';
const TEST = 'node --test ../ealch-v2/src/content/a2-04-prepositions-lieu.test.ts';

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
