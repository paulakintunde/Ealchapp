/* MUTATION TESTING for a2.13. Breaks the content on purpose, one thing at a
 * time, and asks EACH of the three layers separately whether it noticed.
 *
 *   node scripts/_a213_mutate.mjs
 *
 * ── THE THREE LAYERS, AND WHY EACH IS ASKED ALONE ────────────────────────
 *
 *   batch   author-modaux-batch.ts --dry-run
 *   merge   merge-modaux-into-seed.ts --dry-run
 *   test    a2-13-modaux.test.ts, against a seed FORCED past both gates
 *
 * If a mutation is caught by the batch, the merge never runs in real life and
 * the test is never exercised, so a test that would have missed it looks fine.
 * a2.12's first harness had exactly that bug: it stopped at the first red and
 * reported a test column it had never measured. Here every layer is run for
 * every mutation, and the test column is fed by _a213_force.ts, which writes
 * the mutated lesson into the seed with no guards at all.
 *
 * A mutation caught by NOTHING is a real hole. A mutation caught by only one
 * layer is worth knowing about: the other two are where the next author will be
 * standing when they make the same change.
 *
 * ── SAFETY ───────────────────────────────────────────────────────────────
 *
 * seed.json is backed up before anything runs and restored after every single
 * mutation, and again at the end. Source files are patched in memory-safe
 * fashion: read, replace, write, and always restored in a finally.
 *
 * POSTGRES IS NEVER TOUCHED. Only --dry-run is ever passed to the batch.
 */
import { readFileSync, writeFileSync, copyFileSync, existsSync, unlinkSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const ADMIN = join(here, '..');
const SEED = join(ADMIN, '../ealch-v2/src/content/seed.json');
const SEED_BACKUP = join(ADMIN, '../ealch-v2/src/content/_seed.a213-mutation-backup.json');

const CORPUS = join(here, 'data/modaux-corpus.ts');
const LESSON = join(here, 'data/modaux-lesson.ts');
const TERMS = join(here, 'data/modaux-terms.ts');

/** Every mutation: which file, what to replace, and what the build claims about
 *  it. `why` is the claim being attacked, in one line. */
const MUTATIONS = [
  {
    name: 'strip the second verb from a frame row',
    why: 'the Owns is that a modal is always followed by another verb',
    file: CORPUS,
    from: "fr: 'Nous devons attendre le bus.'",
    to: "fr: 'Nous devons le bus.'",
  },
  {
    name: 'put an ending on the second verb',
    why: 'the second verb never changes, which is the entire lesson',
    file: CORPUS,
    from: "fr: 'Nous voulons payer.'",
    to: "fr: 'Nous voulons payons.'",
  },
  {
    name: 'teach savoir on a card',
    why: 'a2.14 owns savoir against connaitre and it is that lesson\'s whole payload',
    file: TERMS,
    from: 'Once you can say je veux, je peux and je dois,',
    to: 'Once you can say je veux, je peux, je sais and je dois,',
  },
  {
    name: 'conjugate the polite form beyond the two fixed ones',
    why: 'POLITE_FORMS is a closed list of two and the rest of the family is later',
    file: TERMS,
    from: 'is the only other one worth carrying at this stage.',
    to: 'and voudrait are the only other ones worth carrying at this stage.',
  },
  {
    name: 'remove the unseen-verb mission from the spine',
    why: 'that mission is the reason the lesson exists',
    file: LESSON,
    from: "'s13-unseen', 's14-generalise', 's15-evidence'",
    to: "'s14-generalise', 's15-evidence'",
  },
  {
    name: 'release the unseen verb as a card',
    why: 'the moment arroser is a card, the lesson has taught it',
    file: LESSON,
    from: '    ...UNSEEN_VERB.answerIds,',
    to: '    ...UNSEEN_VERB.answerIds, UNSEEN_VERB.sourceId,',
  },
  {
    name: 'break the stem recipe',
    why: 'the plural stem is claimed to be derivable on all three verbs',
    file: CORPUS,
    from: "vouloir: { singular: 'veu', nous: 'voul', ils: 'veul' },",
    to: "vouloir: { singular: 'veu', nous: 'voul', ils: 'vueil' },",
  },
  {
    name: 'regularise the plural off the wrong stem',
    why: 'ils veulent, not ils voulent',
    file: CORPUS,
    from: "forms: { vouloir: 'veulent', pouvoir: 'peuvent', devoir: 'doivent' }",
    to: "forms: { vouloir: 'voulent', pouvoir: 'peuvent', devoir: 'doivent' }",
  },
  {
    name: 'split the single grid into two frames',
    why: 'one frame is what makes reading across a row worth anything',
    file: CORPUS,
    from: "fr: 'Vous voulez payer.', en: 'You want to pay.'",
    to: "fr: 'Vous voulez commander.', en: 'You want to order.'",
  },
  {
    name: 'break the register minimal pair',
    why: 'one word changed and nothing else moved IS the teaching',
    file: CORPUS,
    from: "fr: 'Je voudrais payer.'",
    to: "fr: 'Je voudrais un café.'",
  },
  {
    name: 'take a superscript off a nasal respelling',
    why: 'twelve superscripts, twelve seen by the checker, none blind',
    file: CORPUS,
    from: "respell: 'noo voo-LOHⁿ pay-YAY'",
    to: "respell: 'noo voo-LOHn pay-YAY'",
  },
  {
    name: 'grow a dictee target past sixteen letters',
    why: 'word mode hands every word over pre-spelled, so nothing is tested',
    file: CORPUS,
    from: "fr: 'Ils doivent payer.'",
    to: "fr: 'Ils doivent payer maintenant.'",
  },
  {
    name: 'author an infinitive instead of importing it',
    why: 'every second verb comes from another theme, which is the argument of the lesson',
    file: CORPUS,
    from: "infinitive: 'attendre', tags: ['modal', 'devoir', 'use', 'nasal']",
    to: "infinitive: 'ranger', tags: ['modal', 'devoir', 'use', 'nasal']",
  },
  {
    name: 'invert the Owns: move a mission from act 3 to act 2',
    why: 'doctrine B.5, and the reason this lesson has the shape it does',
    file: LESSON,
    from: "sections: ['s04-verbs', 's05-grid', 's06-stems', 's07-newletter', 's08-singular'],",
    to: "sections: ['s04-verbs', 's05-grid', 's06-stems', 's07-newletter', 's08-singular', 's09-second'],",
  },
  {
    name: 'add a listenChoose question on a homophone pair',
    why: 'veux and veut are ONE SOUND; the question would certify a bug',
    file: LESSON,
    from: "format: 'typeIn',\n            accept: ['veux', 'je veux'],",
    to: "format: 'listenChoose',\n            accept: ['veux', 'je veux'],",
  },
  {
    name: 'state the wrong singular arithmetic',
    why: 'three persons, TWO spellings; saying three sends a learner hunting a distinction that is not there',
    file: TERMS,
    from: 'Two of those are spelled identically and the third differs by one silent letter',
    to: 'Three spellings, and the third differs by one silent letter',
  },
];

/** THESE FILES ARE CRLF ON THIS MACHINE.
 *
 *  A multi-line anchor written with plain `\n` matches nothing, and the harness
 *  then reports the mutation as SKIPPED. That is the right failure mode — it is
 *  visible rather than silent — but it still means the mutation never ran, and
 *  the first version of this file lost one that way. Every anchor is tried
 *  as-written and then with CRLF line endings. */
const variants = (s) => [s, s.replace(/\r?\n/g, '\r\n'), s.replace(/\r\n/g, '\n')];
const findAnchor = (haystack, needle) => variants(needle).find((v) => haystack.includes(v));

const run = (cmd) => {
  try {
    execSync(cmd, { cwd: ADMIN, stdio: 'pipe', encoding: 'utf8', timeout: 300000 });
    return { ok: true, out: '' };
  } catch (e) {
    return { ok: false, out: String(e.stdout ?? '') + String(e.stderr ?? '') };
  }
};

const firstLine = (s) => (s.split('\n').map((l) => l.trim()).filter(Boolean).pop() ?? '').slice(0, 96);

function main() {
  if (!existsSync(SEED)) { console.error('no seed.json'); process.exit(1); }
  copyFileSync(SEED, SEED_BACKUP);
  console.log(`  backed up seed.json -> ${SEED_BACKUP}\n`);

  /* BASELINE. If the unmutated build is not green on all three, every result
     below is meaningless. a2.12's harness did not check this and spent a cycle
     interpreting noise. */
  console.log('  BASELINE (no mutation)');
  const b1 = run('npx tsx scripts/author-modaux-batch.ts --dry-run');
  const b2 = run('npx tsx scripts/merge-modaux-into-seed.ts --dry-run');
  const b3 = run('cd ../ealch-v2 && node --test --experimental-strip-types src/content/a2-13-modaux.test.ts');
  console.log(`    batch ${b1.ok ? 'green' : 'RED'}  merge ${b2.ok ? 'green' : 'RED'}  test ${b3.ok ? 'green' : 'RED'}`);
  if (!b1.ok || !b2.ok || !b3.ok) {
    console.error('\n  THE BASELINE IS NOT GREEN. Every result below would be noise. Fix the build first.');
    if (!b1.ok) console.error(firstLine(b1.out));
    if (!b2.ok) console.error(firstLine(b2.out));
    if (!b3.ok) console.error(firstLine(b3.out));
    copyFileSync(SEED_BACKUP, SEED);
    process.exit(1);
  }

  const results = [];
  for (const m of MUTATIONS) {
    const original = readFileSync(m.file, 'utf8');
    const anchor = findAnchor(original, m.from);
    if (!anchor) {
      results.push({ ...m, skipped: true });
      console.log(`\n  !! ${m.name}: anchor not found, mutation SKIPPED`);
      console.log(`     ${JSON.stringify(m.from.slice(0, 70))}`);
      continue;
    }
    /* Replace with the SAME line endings the anchor was found with, so the file
       does not silently change from CRLF to LF and produce a whole-file diff. */
    const replacement = anchor.includes('\r\n') ? m.to.replace(/\r?\n/g, '\r\n') : m.to;
    try {
      writeFileSync(m.file, original.replace(anchor, replacement), 'utf8');

      const batch = run('npx tsx scripts/author-modaux-batch.ts --dry-run');
      const merge = run('npx tsx scripts/merge-modaux-into-seed.ts --dry-run');

      /* THE TEST IS ASKED INDEPENDENTLY. Force the mutated lesson into the seed
         past both gates, then run the test alone. */
      let test = { ok: true, out: '' };
      const forced = run('npx tsx scripts/_a213_force.ts');
      if (forced.ok) {
        test = run('cd ../ealch-v2 && node --test --experimental-strip-types src/content/a2-13-modaux.test.ts');
      } else {
        /* The force tool itself failed, which means the source will not even
           import. That IS a catch, and it is recorded as one rather than
           silently reported as a test pass. */
        test = { ok: false, out: `the source does not import: ${firstLine(forced.out)}` };
      }
      copyFileSync(SEED_BACKUP, SEED);

      const caught = [!batch.ok && 'batch', !merge.ok && 'merge', !test.ok && 'test'].filter(Boolean);
      results.push({ ...m, batch: !batch.ok, merge: !merge.ok, test: !test.ok, caught });
      console.log(`\n  ${m.name}`);
      console.log(`    ${m.why}`);
      console.log(`    batch ${batch.ok ? 'MISSED' : 'caught'}   merge ${merge.ok ? 'MISSED' : 'caught'}   test ${test.ok ? 'MISSED' : 'caught'}`);
      if (!batch.ok) console.log(`      batch: ${firstLine(batch.out)}`);
      else if (!merge.ok) console.log(`      merge: ${firstLine(merge.out)}`);
      else if (!test.ok) console.log(`      test:  ${firstLine(test.out)}`);
      if (!caught.length) console.log('      *** CAUGHT BY NOTHING ***');
    } finally {
      writeFileSync(m.file, original, 'utf8');
    }
  }

  copyFileSync(SEED_BACKUP, SEED);
  unlinkSync(SEED_BACKUP);

  const live = results.filter((r) => !r.skipped);
  const invisible = live.filter((r) => !r.caught.length);
  const testBlind = live.filter((r) => !r.test);
  console.log('\n  ─────────────────────────────────────────────────────────────');
  console.log(`  ${live.length} mutations run, ${results.length - live.length} skipped`);
  console.log(`  caught by all three : ${live.filter((r) => r.caught.length === 3).length}`);
  console.log(`  caught by two       : ${live.filter((r) => r.caught.length === 2).length}`);
  console.log(`  caught by one       : ${live.filter((r) => r.caught.length === 1).length}`);
  console.log(`  CAUGHT BY NOTHING   : ${invisible.length}${invisible.length ? `  -> ${invisible.map((r) => r.name).join('; ')}` : ''}`);
  console.log(`  invisible to the TEST alone: ${testBlind.length}${testBlind.length ? `  -> ${testBlind.map((r) => r.name).join('; ')}` : ''}`);
  console.log('  seed.json restored.\n');
  process.exit(invisible.length ? 1 : 0);
}

main();
