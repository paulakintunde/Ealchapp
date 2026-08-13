/* MUTATION TESTING for a2.14. Breaks the content on purpose, one thing at a
 * time, and asks EACH of the three layers separately whether it noticed.
 *
 *   node scripts/_a214_mutate.mjs
 *
 * ── THE THREE LAYERS, AND WHY EACH IS ASKED ALONE ────────────────────────
 *
 *   batch   author-savoir-connaitre-batch.ts --dry-run
 *   merge   merge-savoir-connaitre-into-seed.ts --dry-run
 *   test    a2-14-savoir-connaitre.test.ts, against a seed FORCED past both
 *
 * If a mutation is caught by the batch, the merge never runs in real life and
 * the test is never exercised, so a test that would have missed it looks fine.
 * a2.12's first harness had exactly that bug. Here every layer is run for every
 * mutation, and the test column is fed by _a214_force.ts.
 *
 * ── THE FOUR THE BRIEF ASKS FOR BY NAME ──────────────────────────────────
 *
 *   separate the contrast              -> mutation 1 and 2
 *   drop the pouvoir distractors       -> mutation 8
 *   "correct" the respellings          -> mutation 11, 12 and 13
 *   add a connaître + clause sentence
 *     outside the errorSpot            -> mutation 5
 *
 * ── SAFETY ───────────────────────────────────────────────────────────────
 *
 * seed.json is backed up before anything runs and restored after every single
 * mutation, and again at the end. POSTGRES IS NEVER TOUCHED: only --dry-run is
 * ever passed to the batch.
 */
import { readFileSync, writeFileSync, copyFileSync, existsSync, unlinkSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const ADMIN = join(here, '..');
const SEED = join(ADMIN, '../ealch-v2/src/content/seed.json');
const SEED_BACKUP = join(ADMIN, '../ealch-v2/src/content/_seed.a214-mutation-backup.json');

const CORPUS = join(here, 'data/savoir-connaitre-corpus.ts');
const LESSON = join(here, 'data/savoir-connaitre-lesson.ts');
const TERMS = join(here, 'data/savoir-connaitre-terms.ts');

const MUTATIONS = [
  {
    name: 'SEPARATE THE CONTRAST: drop connaître from the grid line',
    why: 'the brief: both verbs on one screen, adjacent, or the choice never appears',
    file: LESSON,
    from: "fr: `${r.person === 'je' ? 'je' : r.person} ${r.forms.savoir} ${FRAMES.savoir.complement}  ·  ${r.forms.connaître} ${FRAMES.connaître.complement}`,",
    to: "fr: `${r.person === 'je' ? 'je' : r.person} ${r.forms.savoir} ${FRAMES.savoir.complement}`,",
  },
  {
    name: 'SEPARATE THE CONTRAST: put the adjacent pair two cards apart',
    why: 'one savoir-plus-clause item and one connaître-plus-object item, ADJACENT',
    file: LESSON,
    from: "{ label: '2 of 4', head: 'A name follows', fr: fr('fr.a2.verbes.387')",
    to: "{ label: '2 of 4', head: 'A sentence follows', fr: fr('fr.a2.verbes.394')",
  },
  {
    name: 'give the two verbs ONE shared frame',
    why: 'the complement IS the teaching; a shared frame deletes the only difference',
    file: CORPUS,
    from: "connaître: { complement: 'Paris', id: 'fr.sons.muettes.004', kind: 'a name' },",
    to: "connaître: { complement: 'nager', id: 'fr.sons.verbes-essentiels.088', kind: 'a verb' },",
  },
  {
    name: 'author a savoir sentence taking a bare name',
    why: 'this lesson deliberately opens no savoir-plus-noun case; it would make the reframe false',
    file: CORPUS,
    from: "fr: 'Je sais où elle habite.', en: 'I know where she lives.'",
    to: "fr: 'Je sais Marie.', en: 'I know Marie.'",
  },
  {
    name: 'ADD A connaître + CLAUSE SENTENCE OUTSIDE THE errorSpot',
    why: 'there is no such sentence in French, and it may appear in exactly two strings',
    file: CORPUS,
    from: "fr: 'Je connais ce quartier.', en: 'I know this neighbourhood.'",
    to: "fr: 'Je connais où est la gare.', en: 'I know where the station is.'",
  },
  {
    name: 'delete the rejection from the errorSpot',
    why: 'the rejection must be DRILLED as free text, not only selected from a list',
    file: LESSON,
    from: "            q: `Fix this. « ${IMPOSSIBLE_PLURAL.wrong} »`,\n            format: 'errorSpot',",
    to: "            q: 'Which verb goes here? Nous ___ que le train est en retard.',\n            format: 'mcq',\n            opts: ['connaissons', 'savons', 'pouvons'],\n            correct: 1,",
  },
  {
    name: 'turn the place mission into a semantic rule',
    why: '« Je sais où elle habite. » is a PLACE and takes savoir; the semantic rule sends the learner to connaître',
    file: LESSON,
    from: "      { fr: fr('fr.a2.verbes.393'), en: en('fr.a2.verbes.393'), note: 'Also a place, and savoir. A whole sentence follows, so it cannot be the other one.' },",
    to: "      { fr: fr('fr.a2.verbes.398'), en: en('fr.a2.verbes.398'), note: 'A place, so connaître, and that is the rule.' },",
  },
  {
    name: 'DROP THE POUVOIR DISTRACTORS from the quiz',
    why: 'the brief asks for at least two, so the three-way choice is tested and not just the two-way',
    file: LESSON,
    from: "            q: 'Je ___ nager. (there is a lifeguard and the pool is open)',\n            format: 'typeIn',\n            accept: ['peux', 'je peux'],\n            answer: 'peux',",
    to: "            q: 'Je ___ nager. (somebody taught you)',\n            format: 'typeIn',\n            accept: ['sais', 'je sais'],\n            answer: 'sais',",
  },
  {
    name: 'break the savoir/pouvoir minimal pair',
    why: 'one word changes and nothing else moves, or it is a comparison of situations',
    file: CORPUS,
    from: "fr: 'Je peux nager.', en: 'I can swim.'",
    to: "fr: 'Je peux cuisiner.', en: 'I can cook.'",
  },
  {
    // STRENGTHENED AFTER THE FIRST RUN. The original changed only the `say`
    // line, and the section names a2.13 in three places, so the test passed
    // CORRECTLY and the mutation proved nothing. This one takes the unit id out
    // of every string in the section.
    name: 'stop naming a2.13 in the contrast section',
    why: 'the brief: bring pouvoir back in and name a2.13 by unit id',
    file: LESSON,
    from: "        label: `the third naming form, from ${CONTRAST_UNIT}`,",
    to: "        label: 'the third naming form, from an earlier lesson',",
    also: [
      // FOUR PLACES, not three. The second run still passed because the section
      // TITLE names it too, so the claim survived and the test was right again.
      ["title: 'And The One From ' + CONTRAST_UNIT,",
       "title: 'And The One From The Last Lesson',"],
      ["say: `${CONTRAST_UNIT} built this verb in full and this lesson does not build it again.",
       "say: `Another lesson built this verb in full and this one does not build it again."],
      ["q: `You built this verb at ${CONTRAST_UNIT}. What does it claim that savoir does not?`",
       "q: 'You built this verb earlier. What does it claim that savoir does not?'"],
    ],
  },
  {
    name: '"CORRECT" connaissent to a superscript it does not have',
    why: 'connaissent has no nasal vowel at all; the -ent is silent and the respelling ends on the /s/',
    file: CORPUS,
    from: "connaître: 'koh-NEHS' } },",
    to: "connaître: 'koh-NEHⁿ' } },",
  },
  {
    name: '"CORRECT" connaissons by dropping its superscript',
    why: 'the -ons IS nasal and the mark is load-bearing',
    file: CORPUS,
    from: "connaître: 'koh-neh-SOHⁿ' } },",
    to: "connaître: 'koh-neh-SOHN' } },",
  },
  {
    name: 'DROP THE SUPERSCRIPT THE CHECKER CANNOT SEE (byaⁿ)',
    why: 'hasPlainNasalFor is blind here because « connaît » puts an nn in the French; the by-name assertion is the only guard',
    file: CORPUS,
    from: "respell: 'eel koh-NEH byaⁿ la VEEL'",
    to: "respell: 'eel koh-NEH byan la VEEL'",
  },
  {
    name: 'spell connaître without its circumflex',
    why: '82 published rows carry it and zero do not; the decision is asserted so items stay consistent',
    file: CORPUS,
    from: "fr: 'Il connaît Paris.', en: 'He knows Paris.'",
    to: "fr: 'Il connait Paris.', en: 'He knows Paris.'",
  },
  {
    name: 'teach the passé composé meaning shift',
    why: 'j\'ai su is I found out and j\'ai connu is I met, and that is a2.05 at seq 16',
    file: TERMS,
    from: 'you have stood in the place, you have shaken the hand, you have heard the song.',
    to: 'you have stood in the place, and in the past j\'ai connu means I met rather than I knew.',
  },
  {
    name: 'let the future of savoir out of the goals heading',
    why: 'saurez is a tense this lesson does not teach; the house chrome is its only home',
    file: TERMS,
    from: 'Nobody explained it at the time because there was nothing yet to explain it with.',
    to: 'Nobody explained it at the time, and you will see « Ce que vous saurez faire » at the top too.',
  },
  {
    name: 'conjugate pouvoir beyond its singular',
    why: 'a2.13 owns the paradigm; one recap line and a pointer is the whole allowance',
    file: TERMS,
    from: 'peux is about nothing standing in the way: the pool is open',
    to: 'peux is about nothing standing in the way, and nous pouvons is the plural: the pool is open',
  },
  {
    name: 'claim reconnaître follows connaître exactly',
    why: 'FALSE for syntax: six published sentences put reconnaître straight before que',
    file: TERMS,
    from: 'That is all you need from it here, and it is recognition rather than something to produce.',
    to: 'It behaves like connaître in every way. That is all you need from it here.',
  },
  {
    name: 'name a second family member',
    why: 'the brief: name ONE, and leave the principle to a2.15',
    file: TERMS,
    from: 'and it takes every ending connaître takes:',
    to: 'and so does paraître, and it takes every ending connaître takes:',
  },
  {
    name: 'put a connaître plural in the dictée',
    why: 'connaissons is eleven letters; every object puts it past the sixteen-letter limit and word mode pre-spells everything',
    file: CORPUS,
    from: "respell: 'noo koh-neh-SOHⁿ pa-REE', person: 'nous', verb: 'connaître', complement: 'name', tags: ['connaitre', 'paradigm', 'plural', 'nasal', 'place'], drills: S,",
    to: "respell: 'noo koh-neh-SOHⁿ pa-REE', person: 'nous', verb: 'connaître', complement: 'name', tags: ['connaitre', 'paradigm', 'plural', 'nasal', 'place'], drills: SD,",
  },
  {
    // STRENGTHENED AFTER THE FIRST RUN. The original offered « Je sais nager. »
    // against « Il sait nager. », which is LEGAL: the pronouns differ and are
    // audibly different, exactly as corrections §5 records. The test passed
    // CORRECTLY and the mutation proved nothing. This one differs only by the
    // verb form, which is the shape that has no correct answer.
    name: 'offer a homophone pair in the listenChoose',
    why: 'with the same pronoun, sais and sait are one sound and the question cannot be answered',
    file: LESSON,
    from: "            opts: [fr('fr.a2.verbes.381'), fr('fr.a2.verbes.403')],\n            correct: 0,",
    to: "            opts: [fr('fr.a2.verbes.381'), 'Je sait nager.'],\n            correct: 0,",
  },
  {
    name: 'put grammar jargon on the lesson cover',
    why: 'intro is drawn on TWO screens and a2.11 shipped jargon there while every other guard was green',
    file: LESSON,
    from: "    'English has one word for both of these and gives you no instinct at all,",
    to: "    'English has one word for both of these and gives you no instinct at all, so the direct object matters,",
  },
  {
    name: 'make the paradigm act heavier than the Owns',
    why: 'doctrine §B.5: if the forms outweigh the choice, this is a table lesson',
    file: LESSON,
    from: "    sections: [GRID_SECTION_ID, SITUATIONS_SECTION_ID, 's06-savoir', 's07-second-verb'],",
    to: "    sections: [GRID_SECTION_ID, SITUATIONS_SECTION_ID, 's06-savoir', 's07-second-verb', 's08-next', 's09-sort', 's10-skill', 's11-place', 's12-both'],",
  },
  {
    name: 'reword the reframe in one place only',
    why: 'the reframe is carried verbatim and counted against an explicit constant',
    file: LESSON,
    from: "      { label: '4 of 4', head: 'A thing follows', fr: fr('fr.a2.verbes.398'), sub: sub('fr.a2.verbes.398'), body: 'Stops. connaître again.' },",
    to: "      { label: '4 of 4', head: 'A thing follows', fr: fr('fr.a2.verbes.398'), sub: sub('fr.a2.verbes.398'), body: `Stops. connaître again. ${REFRAME}` },",
  },
  {
    // a2.13's DEVICE-PASS FINDING, turned into a mutation. a2.14 had this defect
    // at v2 on all 53 of its item cards.
    name: 'put respell and en back on a lg groupDrill item',
    why: 'MissionRich draws fr, ipa and note at lg; respell and en are the XL card lines and reach no screen',
    file: LESSON,
    from: "const rowCard = (id: string) => ({ fr: fr(id), itemId: id, note: `${sub(id)} · ${en(id)}` });",
    to: "const rowCard = (id: string) => ({ fr: fr(id), itemId: id, respell: sub(id), en: en(id) });",
  },
  {
    name: 'run a mission title past the hub row',
    why: 'the hub draws the title and a type chip on one row and the chip wins, so a longer title ellipsises',
    file: LESSON,
    from: "    title: 'Three Verbs, One Word',",
    to: "    title: 'Three Verbs And One English Word',",
  },
  {
    name: 'drop the house chrome from the roundup',
    why: 'a2.13 handed this decision here; the decision was to ship it AND name it',
    file: LESSON,
    from: '    frSub: CHROME_DECISION.roundupHeading,\n    say: \'Four things, and then read the two words at the top of this screen again.\',',
    to: '    frSub: \'Ce que vous pouvez faire maintenant\',\n    say: \'Four things.\',',
  },
];

/** THESE FILES ARE CRLF ON THIS MACHINE.
 *
 *  A multi-line anchor written with plain `\n` matches nothing, and the harness
 *  then reports the mutation as SKIPPED. That is the right failure mode, and it
 *  still means the mutation never ran: a2.13's harness lost one that way. Every
 *  anchor is tried as-written and then in both line-ending forms. */
const variants = (s) => [s, s.replace(/\r?\n/g, '\r\n'), s.replace(/\r\n/g, '\n')];
const findAnchor = (haystack, needle) => variants(needle).find((v) => haystack.includes(v));

const run = (cmd) => {
  try {
    execSync(cmd, { cwd: ADMIN, stdio: 'pipe', encoding: 'utf8', timeout: 420000 });
    return { ok: true, out: '' };
  } catch (e) {
    return { ok: false, out: String(e.stdout ?? '') + String(e.stderr ?? '') };
  }
};

const firstLine = (s) => (s.split('\n').map((l) => l.trim()).filter(Boolean).pop() ?? '').slice(0, 110);

function main() {
  if (!existsSync(SEED)) { console.error('no seed.json'); process.exit(1); }
  copyFileSync(SEED, SEED_BACKUP);
  console.log(`  backed up seed.json -> ${SEED_BACKUP}\n`);

  /* BASELINE. If the unmutated build is not green on all three, every result
     below is meaningless. a2.13's harness added this step and it is what found
     the manifest-staleness defect. */
  console.log('  BASELINE (no mutation)');
  const b1 = run('npx tsx scripts/author-savoir-connaitre-batch.ts --dry-run');
  const b2 = run('npx tsx scripts/merge-savoir-connaitre-into-seed.ts --dry-run');
  const b3 = run('cd ../ealch-v2 && node --test src/content/a2-14-savoir-connaitre.test.ts');
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
      console.log(`     ${JSON.stringify(m.from.slice(0, 80))}`);
      continue;
    }
    const replacement = anchor.includes('\r\n') ? m.to.replace(/\r?\n/g, '\r\n') : m.to;
    try {
      let mutated = original.replace(anchor, replacement);
      /* Some claims are made in more than one string in one section, and a
         single-anchor mutation then proves nothing because the claim survives.
         Two of this file's mutations needed that and it was found by the first
         run reporting them as test-blind when the test was in fact correct. */
      for (const [from, to] of m.also ?? []) {
        const a2 = findAnchor(mutated, from);
        if (!a2) { console.log(`     (also-anchor not found: ${JSON.stringify(from.slice(0, 60))})`); continue; }
        mutated = mutated.replace(a2, a2.includes('\r\n') ? to.replace(/\r?\n/g, '\r\n') : to);
      }
      writeFileSync(m.file, mutated, 'utf8');

      const batch = run('npx tsx scripts/author-savoir-connaitre-batch.ts --dry-run');
      const merge = run('npx tsx scripts/merge-savoir-connaitre-into-seed.ts --dry-run');

      /* THE TEST IS ASKED INDEPENDENTLY, past both gates. */
      let test = { ok: true, out: '' };
      const forced = run('npx tsx scripts/_a214_force.ts');
      if (forced.ok) {
        test = run('cd ../ealch-v2 && node --test src/content/a2-14-savoir-connaitre.test.ts');
      } else {
        /* The force tool itself failed, which means the source will not even
           import. That IS a catch, recorded as one rather than silently
           reported as a test pass. */
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
