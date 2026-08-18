// a2.34 MUTATION TEST. Not part of the build; run by hand, reported in §13.
//
// Doctrine and A2-TAIL-AUDIT §4 both ask for this, and the reason is that a
// suite which only ever sees correct content proves nothing. Each mutation
// below is a specific way this lesson could have been wrong. A mutation the
// batch catches and the TEST does not is a hole in the test.
//
// ── HOW IT IS SAFE ─────────────────────────────────────────────────────────
//
// `a2-34-pronoms-possessifs.test.ts` does `import seed from './seed.json'`, so
// the only faithful way to mutate the lesson is to mutate that file. This
// script:
//
//   1. reads seed.json into memory as BYTES, once, before anything
//   2. for each mutation: writes the mutated file, runs the one test file,
//      records the result
//   3. restores the ORIGINAL BYTES in a finally, so a crash or a Ctrl-C still
//      puts the file back exactly as it was
//
// It never touches Postgres and it never runs `git checkout`, which would
// discard other authors' uncommitted lessons.

import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const SEED = new URL('../../ealch-v2/src/content/seed.json', import.meta.url);
const TEST = 'src/content/a2-34-pronoms-possessifs.test.ts';
// `fileURLToPath`, NOT `.pathname`. This repo lives under « gitbuild appealch »
// and a URL pathname percent-encodes the space, so the cwd was a directory that
// does not exist and every run came back red for the wrong reason.
const CWD = fileURLToPath(new URL('../../ealch-v2/', import.meta.url));

type Sec = Record<string, unknown> & { type: string; id?: string };
type Lsn = Record<string, unknown> & { id: string; sections: Sec[]; itemIds: string[] };
type Item = Record<string, unknown> & { id: string; fr: string; en?: string; respell?: string };
type Seed = { lessons: Lsn[]; items: Item[] };

const ORIGINAL = readFileSync(SEED, 'utf8');
const E = (n: number) => `fr.a2.pronoms-essentiels.${n}`;

const ALL_MUTATIONS: { name: string; why: string; apply: (l: Lsn, s: Seed) => void }[] = [
  /* ── THE THREE REQUIRED LAYOUTS ──────────────────────────────────────── */
  {
    name: 'the owned noun removed from one of the four cells',
    why: 'required layout 1 is that the SOURCE of the agreement is visible on the card',
    apply: (_l, s) => {
      const row = s.items.find((i) => i.id === E(373))!;
      row.fr = "C'est la mienne.";
    },
  },
  {
    name: 'the noun left in the pronoun half of a layout-2 pair',
    why: 'the whole claim is that the noun disappears; a2.08 mutation moved a row out from under the card that displayed it and every guard stayed green',
    apply: (_l, s) => {
      const row = s.items.find((i) => i.id === E(365))!;
      row.fr = "C'est le mien sac.";
    },
  },
  {
    name: 'the written register mark dropped, leaving only the spoken one',
    why: 'the prompt says « mark which is spoken and which is written » — on EACH, and a card that marks one implies the other is neutral',
    apply: (l) => {
      const d = l.sections.find((x) => x.id === 's17-amoi') as unknown as { cards: Array<Record<string, unknown>> };
      d.cards[0].label = 'the two-word one';
      d.cards[2].label = 'one meaning, two ways';
    },
  },

  /* ── THE FOUR QUOTATIONS ─────────────────────────────────────────────── */
  {
    name: "a1.17's reframe paraphrased",
    why: 'the prompt asks for a1.17 to be named and its rule presented as one the learner already has; a paraphrase is a new rule wearing its clothes',
    apply: (l) => {
      const sc = l.sections.find((x) => x.id === 's01-scene') as unknown as { beats: Array<Record<string, unknown>> };
      const brk = sc.beats.find((b) => b.kind === 'break')!;
      brk.coach = 'Ask yourself what is owned rather than who owns it. That is a1.17 and it has not changed.';
    },
  },
  {
    name: "a2.24's lui framing reworded",
    why: 'the prompt names it and asks for it verbatim; the build imports it so a paraphrase cannot pass',
    apply: (l) => {
      const d = l.sections.find((x) => x.id === 's10-third') as unknown as { cards: Array<Record<string, unknown>> };
      d.cards[1].body = 'a2.24 said the same thing about lui: you lose the gender, and it is one less thing to get right.';
    },
  },
  {
    name: "a2.24's leur rule quoted WITHOUT its scope",
    why: 'the sentence is true of the object pronoun and false of the possessive. Quoting it bare is the prompt own trap-2 error',
    apply: (l) => {
      const t = l.sections.find((x) => x.id === 's15-trap') as unknown as { rule: { body: string } };
      t.rule.body = 'The leur in front of a verb never takes an s. Ever. a1.17 test sorts them: a possessive has a thing behind it.'
        .replace(' in front of a verb', '');
    },
  },
  {
    name: "a2.33's reframe quoted and the extension deleted",
    why: 'a2.33 line is about pointing; quoting it and stopping hands the learner a rule that does not hold for a possessive',
    apply: (l) => {
      const d = l.sections.find((x) => x.id === 's03-adj') as unknown as { cards: Array<Record<string, unknown>> };
      d.cards[0].body = '« A noun after it means it points. No noun means it replaces. » is a2.33 line.';
    },
  },
  {
    name: 'the unit id stripped from the card that quotes it',
    why: "a2.33's mutation harness found that a section-wide check passes while the unit id sits on any one of three cards",
    apply: (l) => {
      const d = l.sections.find((x) => x.id === 's10-third') as unknown as { cards: Array<Record<string, unknown>> };
      d.cards[1].head = 'said first, one paradigm along';
      d.cards[1].body = String(d.cards[1].body).replace(/a2\.24/g, 'that lesson');
    },
  },

  /* ── THE FOUR TRAPS ──────────────────────────────────────────────────── */
  {
    name: 'a le sien row glossed with only one reading',
    why: 'trap 1 is that ONE French form carries TWO English owners; a row saying "his" teaches half of it',
    apply: (_l, s) => { s.items.find((i) => i.id === E(376))!.en = 'The bag is his.'; },
  },
  {
    name: 'the collapse row given two different forms',
    why: 'the card is that the French does NOT change while the English does',
    apply: (_l, s) => {
      s.items.find((i) => i.id === E(378))!.fr = 'Paul a le sien et Marie a la sienne.';
    },
  },
  {
    name: "the prompt's trap 2 reinstated on a card",
    why: '« leur never takes an -s; the article does » is not true of French (corpus §A.4) and a later author reading the brief will write it',
    apply: (l) => {
      const t = l.sections.find((x) => x.id === 's15-trap') as unknown as { cards: Array<Record<string, unknown>> };
      t.cards[3].tip = 'leur is invariable inside the pronoun. The plural is carried by les.';
    },
  },
  {
    name: 'les leur authored as correct French',
    why: 'the form does not exist at any level; it may appear only where it is marked as the error',
    apply: (_l, s) => { s.items.find((i) => i.id === E(384))!.fr = 'Les sacs sont les leur.'; },
  },
  {
    name: 'the leur plural pair made one sentence twice',
    why: 'a masculine plural noun and a feminine plural noun taking one form is the PROOF; the same noun twice proves nothing',
    apply: (_l, s) => { s.items.find((i) => i.id === E(385))!.fr = 'Les sacs sont les leurs.'; },
  },
  {
    name: 'a typed question keyed on the circumflex with no bare spelling accepted',
    why: 'fold() strips it, so the learner is marked wrong for something the app cannot see either way',
    apply: (l) => {
      const q = l.sections.find((x) => x.type === 'quiz') as unknown as { rounds: Array<{ questions: Array<Record<string, unknown>> }> };
      const last = q.rounds[3].questions[0];
      last.accept = ['La valise est la nôtre', 'La valise est la nôtre.'];
    },
  },
  {
    name: 'the accent removed from the pronoun half of the circumflex pair',
    why: 'the accent is the ONLY written difference and it is deliberate; a diff reads it as a typo',
    apply: (_l, s) => { s.items.find((i) => i.id === E(380))!.fr = 'La valise est la notre.'; },
  },

  /* ── THE RESPELLINGS, WHICH ARE THE LARGEST FINDING ──────────────────── */
  {
    name: "the checker's own half-repair shipped on la mienne",
    why: 'lah MYEHⁿ is CLEAN to hasPlainNasalFor and respells la mienne as la mien, collapsing the one contrast the ear can settle',
    apply: (_l, s) => { s.items.find((i) => i.id === 'fr.b1.pronoms-essentiels.027')!.respell = 'lah MYEHⁿ'; },
  },
  {
    name: 'the masculine repair reverted to the stored plain n',
    why: 'mien is /mjɛ̃/ and luh myehn closes a nasal with a plain n',
    apply: (_l, s) => { s.items.find((i) => i.id === 'fr.b1.pronoms-essentiels.026')!.respell = 'luh myehn'; },
  },
  {
    name: 'the feminine plural left identical to the masculine plural',
    why: 'both shipped as lay myehn, which is what made the prompt believe they were one sound',
    apply: (_l, s) => { s.items.find((i) => i.id === 'fr.b1.pronoms-essentiels.029')!.respell = 'lay MYEHⁿ'; },
  },

  /* ── THE HOMOPHONES, WHERE THE PROMPT IS BACKWARDS ───────────────────── */
  {
    name: 'an ear question offering a singular against its own plural',
    why: 'the -s is silent on all eighteen forms, so the question has no correct answer',
    apply: (l) => {
      const q = l.sections.find((x) => x.type === 'quiz') as unknown as { rounds: Array<{ questions: Array<Record<string, unknown>> }> };
      const ear = q.rounds[1].questions.find((x) => x.format === 'listenChoose')!;
      ear.opts = ['le mien', 'les miens'];
      ear.correct = 0;
    },
  },
  {
    name: 'both ear questions removed',
    why: 'the prompt asks for two listenChoose on le mien against la mienne, which is the one audible contrast',
    apply: (l) => {
      const q = l.sections.find((x) => x.type === 'quiz') as unknown as { rounds: Array<{ questions: Array<Record<string, unknown>> }> };
      for (const r of q.rounds) {
        for (const x of r.questions) if (x.format === 'listenChoose') { x.format = 'mcq'; delete x.say; }
      }
    },
  },

  /* ── THE BOUNDARIES ──────────────────────────────────────────────────── */
  {
    name: 'a demonstrative pronoun in a scenario alt',
    why: 'a2.33 owns celui; an alt is a line the learner may say, and a2.08 shipped one on its first draft',
    apply: (l) => {
      const sc = l.sections.find((x) => x.id === 's19-talk') as unknown as { turns: Array<{ alts: Array<Record<string, unknown>> }> };
      sc.turns[1].alts[0] = { fr: "Oui, celle-ci.", en: 'Yes, this one.' };
    },
  },
  {
    name: 'a comparative taught on a card body',
    why: 'this lesson imports nine of a2.08 rows and teaches none of it',
    apply: (l) => {
      const d = l.sections.find((x) => x.id === 's04-four') as unknown as { cards: Array<Record<string, unknown>> };
      d.cards[0].body = 'sac is masculine. Say Le sac est plus grand que le mien to compare two of them.';
    },
  },
  {
    name: 'the imparfait in a scenario turn',
    why: 'A2 teaches no tense past the passé composé and this is seq 34 of 35, so nothing downstream rescues it; a2.33 self-audit found exactly this after its build was applied',
    apply: (l) => {
      const sc = l.sections.find((x) => x.id === 's19-talk') as unknown as { turns: Array<Record<string, unknown>> };
      sc.turns[0].ai = 'Bonjour. Vous aviez un ticket ?';
    },
  },
  {
    name: 'the pronominal en on a card',
    why: 'a2.25 owns it, and a2.33 shipped « J\'en ai deux comme ça » past thirty guards',
    apply: (l) => {
      const d = l.sections.find((x) => x.id === 's17-amoi') as unknown as { cards: Array<Record<string, unknown>> };
      d.cards[1].fr = "C'est à moi. J'en ai deux.";
    },
  },

  /* ── REACHABILITY AND SHAPE ──────────────────────────────────────────── */
  {
    name: 'a comparative row released by a tranche',
    why: 'all nine are dictation-only or sentence-only, so the release validates, publishes and draws nothing',
    apply: (l) => {
      const t = l.deckTranche as string[][];
      t[2] = [...t[2], 'fr.a2.comparaisons.017'];
    },
  },
  {
    name: 'a comparative row named by nothing',
    why: 'a row that no deck can serve and no section names is on no screen at all',
    apply: (l) => {
      const g = l.sections.find((x) => x.id === 's07-agree') as unknown as { groups: Array<{ items: Array<Record<string, unknown>> }> };
      g.groups[0].items = g.groups[0].items.filter((i) => i.itemId !== 'fr.a2.bureau.130');
      const terms = l.terms as Record<string, { examples?: Array<{ itemId?: string }> }>;
      for (const t of Object.values(terms)) {
        if (t.examples) t.examples = t.examples.filter((e) => e.itemId !== 'fr.a2.bureau.130');
      }
      const drills = l.drills as Array<{ items?: string[] }>;
      for (const d of drills) if (d.items) d.items = d.items.filter((i) => i !== 'fr.a2.bureau.130');
    },
  },
  {
    name: 'a groupDrill card walked away from the row it names',
    why: 'a2.08 mutation harness destroyed a required layout this way and every guard stayed green',
    apply: (l) => {
      const g = l.sections.find((x) => x.id === 's07-agree') as unknown as { groups: Array<{ items: Array<Record<string, unknown>> }> };
      g.groups[0].items[0].fr = 'Le sac est le sien.';
    },
  },
  {
    name: 'practice naming a row with no voiceflash',
    why: "skill:'speak' scores through the mic and a row without voiceflash is a silent card",
    apply: (l) => {
      const p = l.sections.find((x) => x.id === 's20-speak') as unknown as { itemIds: string[] };
      p.itemIds = [...p.itemIds, 'fr.a2.comparaisons.017'];
    },
  },
  {
    name: 'the dictée given a word-mode target',
    why: 'word mode hands every real word over pre-spelled, so an agreement cannot be tested in it',
    apply: (l) => {
      const d = l.sections.find((x) => x.id === 's18-dictee') as unknown as { itemIds: string[] };
      d.itemIds = [...d.itemIds, E(373)];
    },
  },
  {
    name: 'the unseen noun leaked into a corpus row',
    why: 'the generalisation mission asks for a word the lesson never showed; a leak deletes the question',
    apply: (_l, s) => { s.items.find((i) => i.id === E(394))!.fr = 'La casquette est la tienne.'; },
  },

  /* ── THE SECOND WAVE ─────────────────────────────────────────────────────
   * The mutations above were all chosen by whoever wrote the assertions, so a
   * clean sweep against them proves less than it looks. These six aim at
   * contract lines the prompt states and that I suspect I did NOT assert. */
  {
    name: 'a scenario turn with no userEn',
    why: 'scenario.logic.test.ts requires one seed-wide, and the reveal otherwise shows a French sentence the learner cannot read',
    apply: (l) => {
      const sc = l.sections.find((x) => x.id === 's19-talk') as unknown as { turns: Array<Record<string, unknown>> };
      delete sc.turns[2].userEn;
    },
  },
  {
    name: 'a scenario turn with one alt',
    why: 'scenario.logic.test.ts requires two, or a conversation reads as a cloze test',
    apply: (l) => {
      const sc = l.sections.find((x) => x.id === 's19-talk') as unknown as { turns: Array<{ alts: unknown[] }> };
      sc.turns[3].alts = [sc.turns[3].alts[0]];
    },
  },
  {
    name: 'the tapTable given a seventh row',
    why: 'six is the Pixel 6 ceiling and there are exactly six families',
    apply: (l) => {
      const t = l.sections.find((x) => x.id === 's09-table') as unknown as { rows: unknown[] };
      t.rows = [...t.rows, { cells: ['mine, again', 'le mien', 'les miens'], say: "C'est le mien." }];
    },
  },
  {
    name: 'a fourth term chip on a section',
    why: 'the renderer shows three and collapses the rest',
    apply: (l) => {
      const s = l.sections.find((x) => x.id === 's04-four') as unknown as { terms: string[] };
      s.terms = ['owned', 'twoWords', 'third', 'accent'];
    },
  },
  {
    name: 'a term declared and surfaced by nothing',
    why: 'an unsurfaced term is a definition nobody can reach',
    apply: (l) => {
      for (const s of l.sections) {
        const t = (s as { terms?: string[] }).terms;
        if (t) (s as { terms?: string[] }).terms = t.filter((x) => x !== 'accent');
      }
    },
  },
  {
    name: 'a quiz round whose first resolving target has no drill',
    why: 'drillForRound fires the FIRST resolving target and stops, so a drill named second is dead content',
    apply: (l) => {
      const q = l.sections.find((x) => x.type === 'quiz') as unknown as { rounds: Array<{ targets: string[] }> };
      q.rounds[2].targets = ['owner-agreement'];
    },
  },
];

const ONLY = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const MUTATIONS = ONLY.length ? ALL_MUTATIONS.filter((m) => ONLY.some((o) => m.name.includes(o))) : ALL_MUTATIONS;

function runTest(): { pass: number; fail: number } {
  try {
    const out = execSync(`node --test ${TEST}`, { cwd: CWD, encoding: 'utf8', stdio: 'pipe' });
    const p = /ℹ pass (\d+)/.exec(out);
    return { pass: Number(p?.[1] ?? 0), fail: 0 };
  } catch (e) {
    const out = String((e as { stdout?: string }).stdout ?? '');
    const f = /ℹ fail (\d+)/.exec(out);
    return { pass: 0, fail: Number(f?.[1] ?? 1) };
  }
}

try {
  console.log('\n  BASELINE (unmutated):');
  const base = runTest();
  console.log(`    ${base.fail === 0 ? `GREEN, ${base.pass} assertions` : `RED (${base.fail} failing)`}`);
  if (base.fail !== 0) { console.error('  baseline is not green; fix that before mutating.'); process.exit(1); }

  const missed: string[] = [];
  console.log('\n  MUTATIONS:');
  for (const m of MUTATIONS) {
    const seed = JSON.parse(ORIGINAL) as Seed;
    const lesson = seed.lessons.find((l) => l.id === 'a2.34.l1')!;
    m.apply(lesson, seed);
    writeFileSync(SEED, `${JSON.stringify(seed, null, 2)}\n`, 'utf8');
    const r = runTest();
    const caught = r.fail > 0;
    if (!caught) missed.push(m.name);
    console.log(`    ${caught ? `caught (${r.fail})` : 'MISSED   '}  ${m.name}`);
  }

  console.log(`\n  ${MUTATIONS.length - missed.length}/${MUTATIONS.length} caught.`);
  if (missed.length) {
    console.log('\n  HOLES IN THE TEST:');
    for (const m of missed) console.log(`    - ${m}`);
  }
} finally {
  writeFileSync(SEED, ORIGINAL, 'utf8');
  console.log('\n  seed.json restored to its original bytes.\n');
}
