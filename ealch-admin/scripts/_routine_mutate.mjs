/* Mutation-tests a1-25-routine.test.ts. An assertion that cannot fail is worse
 * than no assertion, and the invariants require this before a build is claimed.
 *
 *   node scripts/_routine_mutate.mjs
 *
 * Backs seed.json up first, applies ONE mutation at a time, runs the test file,
 * asserts the named test goes RED, and restores. The backup is verified byte for
 * byte on the way out; if it cannot be restored the script says so loudly rather
 * than exiting quietly, because a concurrent build writing seed.json during the
 * window would be a real problem.
 */
import { readFileSync, writeFileSync, copyFileSync, existsSync, unlinkSync } from 'node:fs';
import { execSync } from 'node:child_process';

const SEED = '../ealch-v2/src/content/seed.json';
const BACKUP = '../ealch-v2/src/content/seed.json.mutation-backup';

if (existsSync(BACKUP)) { console.error(`${BACKUP} already exists. A previous run did not clean up; look before deleting it.`); process.exit(1); }
copyFileSync(SEED, BACKUP);
const original = readFileSync(BACKUP, 'utf8');

/** Each mutation gets the parsed seed and breaks exactly one thing. `expect` is
 *  a substring of the test name that MUST go red. */
const MUTATIONS = [
  {
    name: 'break the contrast: strip the bare column out of s05-contrast',
    expect: 'one tapTable carries every articled part',
    apply: (s) => {
      const l = s.lessons.find((x) => x.id === 'a1.25.l1');
      const hero = l.sections.find((x) => x.id === 's05-contrast');
      // Exactly the redraft that would look like a tidy-up: keep the articled
      // column, drop the one that takes nothing.
      hero.cols = ['the parts of the day'];
      hero.rows = hero.rows.map((r) => ({ ...r, cells: [r.cells[0]], detail: undefined }));
    },
  },
  {
    name: 'drop manger, the one authored row',
    expect: 'manger is authored at the sequence',
    apply: (s) => { s.items = s.items.filter((i) => i.id !== 'fr.a1.routines.185'); },
  },
  {
    name: 'un-repair the manger nasal to match cuisine',
    expect: 'manger is authored at the sequence',
    apply: (s) => { s.items.find((i) => i.id === 'fr.a1.routines.185').respell = 'mahn-ZHAY'; },
  },
  {
    name: 'un-repair le matin',
    expect: 'the three repaired rows carry their repaired value',
    apply: (s) => { s.items.find((i) => i.id === 'fr.a1.routines.002').respell = 'luh mah-TAN'; },
  },
  {
    name: 'leak a reflexive person with zero corpus evidence into a drill',
    expect: 'no reflexive person with zero corpus evidence',
    apply: (s) => {
      const l = s.lessons.find((x) => x.id === 'a1.25.l1');
      l.drills.find((d) => d.id === 'drill-small-word').pairs.push(['you all get up', 'vous vous levez']);
    },
  },
  {
    name: 'rebind the unit back to the dead singular theme',
    expect: 'a1.25 is bound to routines',
    apply: (s) => { s.units.find((u) => u.id === 'a1.25').themes = ['routine']; },
  },
  {
    name: 'cluster four in-mission answers in slot 0',
    expect: 'no two consecutive in-mission questions',
    apply: (s) => {
      const l = s.lessons.find((x) => x.id === 'a1.25.l1');
      const g = l.sections.find((x) => x.id === 's08-sort');
      for (const grp of g.groups) if (grp.check) grp.check.correct = 0;
    },
  },
  {
    name: 'delete the deliberate « Ce soir » context the scene turns on',
    expect: 'Ce soir » IS present as context',
    apply: (s) => {
      const l = s.lessons.find((x) => x.id === 'a1.25.l1');
      const blob = JSON.stringify(l).split('Ce soir').join('Le soir');
      Object.assign(l, JSON.parse(blob));
    },
  },
  {
    name: 'soften the measured zero on the midday card',
    expect: 'the corpus figures behind the rule',
    apply: (s) => {
      const l = s.lessons.find((x) => x.id === 'a1.25.l1');
      const blob = JSON.stringify(l).replace(/turns up not once/g, 'is rare').replace(/appears 0 times/g, 'is rare');
      Object.assign(l, JSON.parse(blob));
    },
  },
  {
    name: 'declare an item that no section shows',
    expect: 'every itemId is actually shown',
    apply: (s) => {
      const l = s.lessons.find((x) => x.id === 'a1.25.l1');
      l.itemIds.push('fr.a1.routines.030');
      l.deckTranche[4].push('fr.a1.routines.030');
    },
  },
  {
    name: 'strip voiceflash off a spoken-practice item',
    expect: 'every spoken-practice item carries voiceflash',
    apply: (s) => {
      const row = s.items.find((i) => i.id === 'fr.a1.routines.005');
      row.drills = row.drills.filter((d) => d !== 'voiceflash');
    },
  },
];

function runTest() {
  try {
    execSync('node --test src/content/a1-25-routine.test.ts', { cwd: '../ealch-v2', stdio: 'pipe', timeout: 300_000 });
    return '';
  } catch (e) {
    return `${e.stdout ?? ''}${e.stderr ?? ''}`;
  }
}

let survived = 0;
try {
  for (const m of MUTATIONS) {
    const seed = JSON.parse(original);
    m.apply(seed);
    writeFileSync(SEED, `${JSON.stringify(seed, null, 2)}\n`, 'utf8');
    const out = runTest();
    const red = out.includes(m.expect);
    console.log(`  ${red ? 'RED  ' : 'GREEN'}  ${m.name}`);
    if (!red) {
      survived++;
      console.log(`         expected "${m.expect}" to fail and it did not. That assertion cannot detect this.`);
    }
  }
} finally {
  writeFileSync(SEED, original, 'utf8');
  const restored = readFileSync(SEED, 'utf8');
  if (restored !== original) {
    console.error('\n  SEED.JSON WAS NOT RESTORED CLEANLY. The backup is at seed.json.mutation-backup. Do not run anything else until it is sorted.');
    process.exit(1);
  }
  unlinkSync(BACKUP);
  console.log('\n  seed.json restored byte for byte, backup removed');
}

console.log(survived ? `\n  ${survived} MUTATION(S) SURVIVED` : '\n  every mutation was caught');
process.exit(survived ? 1 : 0);
