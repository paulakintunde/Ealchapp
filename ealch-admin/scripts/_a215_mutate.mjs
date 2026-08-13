/* a2.15 mutation harness.
 *
 *   node scripts/_a215_mutate.mjs            all mutations
 *   node scripts/_a215_mutate.mjs 3 7        only those rows
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
 * 4. THE TEST READS seed.json AND NOTHING ELSE. A source mutation it cannot see
 *    is reported n/a, not MISS. The first version of this harness ran the test
 *    against an unmutated seed and called eight correct assertions blind.
 *
 * So a mutation carries a SOURCE edit, a SEED edit, or both. The seed edit is
 * what the merge would have written for that source edit; where there is no
 * clean single-line equivalent the test column says n/a and means it.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const CORPUS = join(here, 'data/prendre-mettre-corpus.ts');
const LESSON = join(here, 'data/prendre-mettre-lesson.ts');
const TERMS = join(here, 'data/prendre-mettre-terms.ts');
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const FILES = [CORPUS, LESSON, TERMS, SEED];

/** { label, src: [file, from, to], seed: [from, to] } — either half may be absent. */
const M = [
  {
    label: 'teach a past participle the lesson reserves for a2.20',
    src: [LESSON, 'The past. ', 'The past, which is pris and mis. '],
    seed: ['The past. ', 'The past, which is pris and mis. '],
  },
  {
    label: 'de-weight prendre to battre parity',
    src: [CORPUS, "prendre: ['s05-doubled', 's06-prendre', 's10-identity', 's11-apprendre', 's16-listening', 's17-notvendre'],", "prendre: ['s05-doubled', 's06-prendre'],"],
  },
  {
    label: 'pad battre by moving mettre rows into its family',
    src: [CORPUS, "verb: 'mettre', role: 'compound', tags: ['mettre', 'family', 'nasal']", "verb: 'battre', role: 'compound', tags: ['mettre', 'family', 'nasal']"],
  },
  {
    // FOUR ANCHORS, and the first version of this row had one. a2.14 §8: a claim
    // stated in a label, a question and two whys is not removed by touching one
    // of them, and a mutation that does not remove the claim proves nothing.
    label: 'drop the unseen compound out of the mission before the exam',
    src: [LESSON, 'label: `${UNSEEN[0].infinitive}, and nothing else on this card`', "label: 'prendre, and nothing else on this card'"],
    also: [
      [LESSON, '`${UNSEEN[0].infinitive} means ${UNSEEN[0].en}. Which is the nous form?`', "'prendre means to take. Which is the nous form?'"],
      [LESSON, '`And the ils form of ${UNSEEN[0].infinitive}?`', "'And the ils form of prendre?'"],
      [LESSON, "opts: ['reprenent', 'reprendent', UNSEEN[0].forms.ils, 'reprenment'],", "opts: ['prenent', 'prendent', 'prennent', 'prenment'],"],
    ],
    seed: ['reprendre', 'prendre'],
  },
  {
    label: 'separate the prenons / prennent pair',
    src: [LESSON, '{ fr: fr(ADJACENT_PAIR[0]), en: en(ADJACENT_PAIR[0]), note: `One n. The -ons is doing the sounding, so the stem does not have to.` },', ''],
    seed: ['"fr": "Nous prenons la clé.",\n            "en": "We take the key.",\n            "note": "One n.', '"fr": "Vous prenez la clé.",\n            "en": "We take the key.",\n            "note": "One n.'],
  },
  {
    // TWO ANCHORS. The unit id is named in the section `say` AND inside the
    // sentence that explains the mechanism, so removing one leaves the other and
    // the by-id check goes on passing. Both go.
    label: 'cut the a2.09 back-reference out of the doubling section',
    src: [CORPUS, "export const STEM_PRINCIPLE = 'a2.09 doubled the l of appeler", "export const STEM_PRINCIPLE = 'Somebody doubled the l of appeler"],
    also: [[LESSON, '${STEM_UNIT} met this first, on appeler and jeter, and it is the same reason both times.', 'It is the same reason both times.']],
    seed: ['a2.09 doubled the l of appeler', 'Somebody doubled the l of appeler'],
  },
  {
    label: 'un-double the n in the respelling of prennent',
    src: [CORPUS, "battre: 'battent' }, respells: { prendre: 'PREN'", "battre: 'battent' }, respells: { prendre: 'PRENN'"],
  },
  {
    label: 'break the doubled n in the paradigm itself',
    src: [CORPUS, "forms: { prendre: 'prennent', mettre: 'mettent', battre: 'battent' }", "forms: { prendre: 'prenent', mettre: 'mettent', battre: 'battent' }"],
  },
  {
    label: 'correct the sheet respelling so it disagrees with the card',
    src: [CORPUS, "respells: { prendre: 'pruh-NOHⁿ', mettre: 'meh-TOHⁿ', battre: 'ba-TOHⁿ' }", "respells: { prendre: 'pruh-NOHN', mettre: 'meh-TOHⁿ', battre: 'ba-TOHⁿ' }"],
    seed: ['"pruh-NOHⁿ",\n                "meh-TOHⁿ"', '"pruh-NOHN",\n                "meh-TOHⁿ"'],
  },
  {
    label: 'drop the superscript the checker CANNOT see',
    src: [CORPUS, "respell: 'zhuh proh-MEH ün ray-POHⁿS'", "respell: 'zhuh proh-MEH ün ray-POHnS'"],
    seed: ['zhuh proh-MEH ün ray-POHⁿS', 'zhuh proh-MEH ün ray-POHnS'],
  },
  {
    label: 'put a2.27 transport vocabulary on a production surface',
    src: [CORPUS, "fr: 'Je prends la clé.'", "fr: 'Je prends le bus.'"],
    seed: ['"fr": "Je prends la clé.",\n      "en": "I take the key."', '"fr": "Je prends le bus.",\n      "en": "I take the key."'],
  },
  {
    label: 'give an authored infinitive a gender',
    src: [CORPUS, "respell: 'BATR', person: null", "respell: 'BATR', gender: 'm', person: null"],
    seed: ['"fr": "battre",\n      "en": "to beat"', '"fr": "battre",\n      "gender": "m",\n      "en": "to beat"'],
  },
  {
    label: 'put the ligature the dictee cannot see into a dictee target',
    src: [CORPUS, "fr: 'Je bats Paul.'", "fr: 'Je bats les œufs.'"],
    seed: ['"fr": "Je bats Paul."', '"fr": "Je bats les œufs."'],
  },
  {
    // THE FIRST VERSION OF THIS ROW WAS A BAD MUTATION AND THE GUARD WAS RIGHT TO
    // IGNORE IT. It offered « Je prends la clé. » against « Il prend la clé. »,
    // which differ by the PRONOUN as well as the verb form, and je against il is
    // perfectly audible. The guard fires only when two options differ ONLY by a
    // member of one group, which is the a2.10 shape and the correct rule. This
    // version is the real offence: same pronoun, one homophone apart.
    label: 'offer two members of one homophone group by ear',
    src: [LESSON, "opts: [fr('fr.a2.verbes.426'), fr('fr.a2.verbes.429')],", "opts: [fr('fr.a2.verbes.426'), 'Il prends la clé.'],"],
    seed: ['"Il prend la clé.",\n                  "Ils prennent la clé."\n                ],\n                "correct": 1', '"Je prends la clé.",\n                  "Il prend la clé."\n                ],\n                "correct": 1'],
  },
  {
    label: 'drop the say from a listenChoose so the card speaks the answer',
    src: [LESSON, "say: fr('fr.a2.verbes.429'),\n            why: 'The verb ends on an n", "why: 'The verb ends on an n"],
    seed: ['"say": "Ils prennent la clé.",\n                "why": "The verb ends on an n', '"why": "The verb ends on an n'],
  },
  {
    label: 'put the banned word back into a card sub, which is where v1 shipped it',
    src: [LESSON, "sub: 'the small one, and the lesson says so',", "sub: 'the small one, and it is honest about it',"],
    seed: ['the small one, and the lesson says so', 'the small one, and it is honest about it'],
  },
  {
    label: 'run a mission title past the hub ceiling',
    src: [LESSON, "title: 'One You Have Not Met',", "title: 'One You Have Never Met Before',"],
    seed: ['"title": "One You Have Not Met"', '"title": "One You Have Never Met Before"'],
  },
  {
    label: 'drop a compound out of the identity grid',
    src: [LESSON, "fr: [r.forms.prendre, `ap${r.forms.prendre}`, `com${r.forms.prendre}`].map((f) => `${el(f)}${f}`).join('  ·  '),", "fr: [r.forms.prendre, `ap${r.forms.prendre}`].map((f) => `${el(f)}${f}`).join('  ·  '),"],
    seed: ['je prends  ·  j\'apprends  ·  je comprends', 'je prends  ·  j\'apprends'],
  },
  {
    label: 'break the shared frame so the two head verbs compare two objects',
    src: [CORPUS, "fr: 'Nous mettons la clé.'", "fr: 'Nous mettons le sac.'"],
    seed: ['"fr": "Nous mettons la clé.",\n      "en": "We put the key down."', '"fr": "Nous mettons le sac.",\n      "en": "We put the key down."'],
  },
  {
    label: 'release an unseen compound into a deck',
    src: [LESSON, "['fr.a2.verbes.453', 'fr.a2.verbes.454'],", "['fr.a2.verbes.453', 'fr.a2.verbes.454', 'fr.b1.verbes.086'],"],
    seed: ['"fr.a2.verbes.453",\n      "fr.a2.verbes.454"\n    ],', '"fr.a2.verbes.453",\n      "fr.a2.verbes.454",\n      "fr.b1.verbes.086"\n    ],'],
  },
];

const only = process.argv.slice(2).map(Number).filter((n) => !Number.isNaN(n));
const backup = new Map(FILES.map((f) => [f, readFileSync(f, 'utf8')]));
const restore = () => { for (const [f, s] of backup) writeFileSync(f, s, 'utf8'); };

function run(cmd) {
  try {
    execSync(cmd, { cwd: join(here, '..'), stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8' });
    return { ok: true, msg: '' };
  } catch (e) {
    const out = `${e.stdout ?? ''}${e.stderr ?? ''}`.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)
      .filter((l) => !l.startsWith('$') && !/ELIFECYCLE|Command failed with exit code/.test(l));
    // `die()` writes LAST, and node --test writes its failure list last too.
    const interesting = out.filter((l) => !/^(ℹ|✔|›|#)/.test(l));
    const line = interesting[interesting.length - 1] ?? out[out.length - 1] ?? '(no output)';
    return { ok: false, msg: line.slice(0, 130) };
  }
}

const BATCH = 'npx tsx scripts/author-prendre-mettre-batch.ts --dry-run';
const MERGE = 'npx tsx scripts/merge-prendre-mettre-into-seed.ts --dry-run';
const TEST = 'node --test ../ealch-v2/src/content/a2-15-prendre-mettre.test.ts';

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
  // A MISSING SEED ANCHOR IS NOT A SKIPPED MUTATION, IT IS A SKIPPED LAYER.
  // The first version of this harness dropped the whole row when the seed
  // equivalent of a source edit could not be written as one line, which threw
  // away the batch and merge results with it. The source edit still ran, so the
  // two source-reading layers are still asked; the test column says n/a.
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
console.log(`\n  ${blind} mutation(s) caught by NOTHING, ${skipped} skipped.\n`);
