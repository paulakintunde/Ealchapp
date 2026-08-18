// MUTATION PROBE: does the suite actually CATCH what it claims to guard?
//
//   pnpm tsx scripts/probe-seed-mutation.ts
//
// A suite that only ever sees correct content proves nothing. This mutates
// seed.json one defect at a time, runs the target test file, and records
// whether the suite noticed. A mutation the batch catches and the TEST does
// not is a hole in the test.
//
// IT IS ALSO THE RIG FOR THE STANDING RULE: run the suite against a
// REGENERATED seed before calling a build done. A publish --dry-run validates
// but does not rewrite seed.json, so it cannot tell you whether your tests
// survive regeneration. This can: write the generated shape, run the suite,
// restore the bytes.
//
// CURRENTLY TARGETS a2.32. It is written to be COPIED per build: change TEST,
// change the lesson id in the loop, and rewrite MUTATIONS for what that lesson
// claims to guard. a2.32 found two real holes this way (a scenario turn with no
// userEn, and one with no alts, both passing 56 assertions).
//
// SAFETY, and it matters because this writes a file four agents share:
//   1. seed.json is read into memory as BYTES once, before anything
//   2. each mutation writes, tests, and records
//   3. the ORIGINAL BYTES are restored in a finally, so a crash or a Ctrl-C
//      still puts the file back exactly as it was, verified byte-for-byte
// It never touches Postgres and it never runs git checkout, which would
// discard other authors uncommitted lessons.
//
// Full plan: ealch-admin/SEED-IS-GENERATED-FIX-PLAN.md
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const SEED = new URL('../../ealch-v2/src/content/seed.json', import.meta.url);
const TEST = 'src/content/a2-32-technologie.test.ts';
// `fileURLToPath`, NOT `.pathname`. This repo lives under « gitbuild appealch »
// and a URL pathname percent-encodes the space, so the cwd was a directory that
// does not exist and every run came back red for the wrong reason.
const CWD = fileURLToPath(new URL('../../ealch-v2/', import.meta.url));

type Sec = Record<string, unknown> & { type: string; id?: string };
type Lsn = Record<string, unknown> & { id: string; sections: Sec[] };

const ORIGINAL = readFileSync(SEED, 'utf8');

const MUTATIONS: { name: string; why: string; apply: (l: Lsn) => void }[] = [
  {
    name: 'a Quebec form as a scored key',
    why: 'C3 rule 1: the scored answer is always the France spoken standard',
    apply: (l) => {
      const q = l.sections.find((s) => s.type === 'quiz') as unknown as { rounds: Array<{ questions: Array<Record<string, unknown>> }> };
      const first = q.rounds[0].questions[0];
      first.opts = ['un courriel', 'un téléphone intelligent', 'une adresse électronique'];
      first.correct = 1;
    },
  },
  {
    name: 'commonErrors without swipe',
    why: 'three shipped lessons omit it and lose the deck',
    apply: (l) => { delete (l.sections.find((s) => s.id === 's15-errors') as Record<string, unknown>).swipe; },
  },
  {
    name: 'a technologie-quotidienne row in the practice section',
    why: 'that theme has ZERO voiceflash rows at any level, so the mic scores nothing',
    apply: (l) => {
      const p = l.sections.find((s) => s.id === 's19-speak') as unknown as { itemIds: string[] };
      p.itemIds = [...p.itemIds, 'fr.a2.technologie-quotidienne.001'];
    },
  },
  {
    name: 'a card that states the order rule',
    why: 'act 2 has NO paradigm: Paul answered item 2 with option B',
    apply: (l) => {
      const d = l.sections.find((s) => s.id === 's05-strings') as unknown as { cards: Array<Record<string, unknown>> };
      d.cards[0].body = 'To make one of these yourself, take the vous form and drop the pronoun.';
    },
  },
  {
    name: 'the mood named on a learner surface',
    why: 'naming it is the first half of teaching it, and nobody owns it',
    apply: (l) => {
      const t = l.sections.find((s) => s.id === 's04-screen') as unknown as { title: string };
      t.title = 'Six things a screen says, in the imperative';
    },
  },
  {
    name: 'a dictée that turns on a hyphen',
    why: 'Connectez-vous and connectez vous are one string to the check',
    apply: (l) => {
      const d = l.sections.find((s) => s.id === 's16-dictee') as unknown as { itemIds: string[] };
      d.itemIds = ['fr.a2.internet.087', ...d.itemIds.slice(1)];   // double-cliquer
    },
  },
  {
    name: 'a listening line that references this lesson',
    why: 'a2.35 lifts these lines, and a framed line cannot be lifted',
    apply: (l) => {
      const s = l.sections.find((s) => s.id === 's11-menu') as unknown as { lines: Array<{ fr: string; en: string }> };
      s.lines[0] = { fr: 'Bienvenue au service technique.', en: 'Welcome, as you saw in the last card.' };
    },
  },
  {
    name: 'a second quiz section',
    why: 'the second is silently never rendered',
    apply: (l) => {
      const q = JSON.parse(JSON.stringify(l.sections.find((s) => s.type === 'quiz')));
      q.id = 's24-quiz2';
      l.sections.push(q);
    },
  },
  {
    name: 'a voiceflash-only row released by a deckTranche',
    why: 'it carries no flashcard drill, so the release serves no card',
    apply: (l) => { (l.deckTranche as string[][])[1].push('fr.a2.internet.086'); },
  },
  {
    name: 'a second card naming a Quebec form',
    why: 'C3 rule 2 caps it at one per unit',
    apply: (l) => {
      const d = l.sections.find((s) => s.id === 's03-voices') as unknown as { cards: Array<Record<string, unknown>> };
      d.cards[0].body = 'What a form calls it. In Quebec you would hear le clavardage for chat, too.';
    },
  },
  {
    name: 'an escalation line, which is a2.29\'s ground',
    why: 'this unit\'s agent is asked for help, not pushed',
    apply: (l) => {
      const s = l.sections.find((s) => s.id === 's17-call') as unknown as { turns: Array<Record<string, unknown>> };
      s.turns[4].user = "Je voudrais parler au responsable, s'il vous plaît.";
    },
  },
  {
    name: 'the roundup summarising the band',
    why: 'being last is a position, not a job',
    apply: (l) => {
      const r = l.sections.find((s) => s.id === 's23-roundup') as unknown as { body: string };
      r.body = `${r.body} Look back at a2.07, a2.29 and a2.31 before you go on.`;
    },
  },

  /* ── THE SECOND WAVE. ────────────────────────────────────────────────────
   * The twelve above were all caught, and a clean sweep against mutations
   * chosen by whoever wrote the assertions proves less than it looks: they
   * test the things I already knew to check. These four deliberately aim at
   * contract lines the prompt states and that I suspect I did NOT assert. */
  {
    name: 'a scenario turn with no userEn',
    why: '§6 mission 17: userEn on EVERY turn, or the reveal shows a French sentence the learner cannot read',
    apply: (l) => {
      const s = l.sections.find((s) => s.id === 's17-call') as unknown as { turns: Array<Record<string, unknown>> };
      delete s.turns[2].userEn;
    },
  },
  {
    name: 'a scenario turn with no alts',
    why: '§6 mission 17: alts on EVERY turn, or a conversation reads as a cloze test with one right answer',
    apply: (l) => {
      const s = l.sections.find((s) => s.id === 's17-call') as unknown as { turns: Array<Record<string, unknown>> };
      delete s.turns[3].alts;
    },
  },
  {
    name: 'the reframe stripped out of all but two sections',
    why: 'the density validator wants three and doctrine §B.4 wants six; a reframe said once is a sentence',
    apply: (l) => {
      let seen = 0;
      for (const s of l.sections) {
        if (typeof (s as { say?: unknown }).say !== 'string') continue;
        if ((s as { say?: unknown }).say === l.reframe) { seen++; if (seen > 2) delete (s as Record<string, unknown>).say; }
      }
    },
  },
  {
    name: 'practice.itemIds emptied',
    why: 'lesson-contract.test.ts:505 mirrors the publish gate and fails an empty practice',
    apply: (l) => { (l.sections.find((s) => s.id === 's19-speak') as unknown as { itemIds: string[] }).itemIds = []; },
  },
];

function runTest(): { pass: number; fail: number } {
  try {
    const out = execSync(`node --test ${TEST}`, { cwd: CWD, encoding: 'utf8', stdio: 'pipe' });
    const p = /^# pass (\d+)$|ℹ pass (\d+)/m.exec(out);
    return { pass: Number(p?.[1] ?? p?.[2] ?? 0), fail: 0 };
  } catch (e) {
    const out = String((e as { stdout?: string }).stdout ?? '');
    const f = /ℹ fail (\d+)/.exec(out);
    return { pass: 0, fail: Number(f?.[1] ?? 1) };
  }
}

try {
  console.log('\n  BASELINE (unmutated):');
  const base = runTest();
  console.log(`    ${base.fail === 0 ? 'GREEN' : `RED (${base.fail} failing)`}`);
  if (base.fail !== 0) { console.error('  baseline is not green; fix that before mutating.'); process.exit(1); }

  const missed: string[] = [];
  console.log('\n  MUTATIONS:');
  for (const m of MUTATIONS) {
    const seed = JSON.parse(ORIGINAL) as unknown as { lessons: Lsn[] };
    const lesson = seed.lessons.find((l) => l.id === 'a2.32.l1')!;
    m.apply(lesson);
    writeFileSync(SEED, `${JSON.stringify(seed, null, 2)}\n`, 'utf8');
    const r = runTest();
    const caught = r.fail > 0;
    if (!caught) missed.push(m.name);
    console.log(`    ${caught ? 'CAUGHT ' : 'MISSED '} ${m.name}`);
    if (!caught) console.log(`             ^ ${m.why}`);
  }

  console.log(`\n  ${MUTATIONS.length - missed.length} of ${MUTATIONS.length} caught.`);
  if (missed.length) {
    console.log('\n  HOLES IN THE TEST, and each one is a real gap rather than a formality:');
    for (const n of missed) console.log(`    - ${n}`);
  }
} finally {
  writeFileSync(SEED, ORIGINAL, 'utf8');
  const restored = readFileSync(SEED, 'utf8') === ORIGINAL;
  console.log(`\n  seed.json restored byte-for-byte: ${restored ? 'YES' : 'NO — CHECK IT BY HAND'}\n`);
}
