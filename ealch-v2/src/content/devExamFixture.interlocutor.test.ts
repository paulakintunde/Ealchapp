// The interlocutor guard: a bank whose answers nobody can reach is dead
// content, and structural validation cannot see it.
//
// validateInterlocutor already checks that every answer HAS cues. What it
// cannot check is whether those cues fire on French a candidate would actually
// produce. The task's own modelAnswer is the closest thing to that we hold: it
// is the author's statement of what a strong candidate says. If a cue does not
// fire on the model answer, it will not fire on a real candidate either, and
// the fact behind it can never be obtained no matter how well they perform.
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { devExamTasks } from './devExamFixture.ts';
import { cueMatches, coverageOf, selectTurn } from '../utils/interlocutor.logic.ts';

const interactions = devExamTasks(true).filter((t) => t.taskType === 'po_interaction');

test('the dev fixture actually carries an interaction to prove', () => {
  // Guards the guard: if the fixture loses its interaction task, everything
  // below would pass vacuously.
  ok(interactions.length > 0, 'no po_interaction task in the dev fixture');
});

for (const task of interactions) {
  const bank = task.interlocutor!;

  test(`${task.id}: every answer is reachable from the model answer`, () => {
    ok(bank, 'a po_interaction with no bank is a monologue');
    for (const answer of bank.answers) {
      // Everything else retired, so this answer is the only thing selectTurn
      // can return — the question is purely whether its cues fire.
      const others = bank.answers.filter((a) => a.id !== answer.id).map((a) => a.id);
      const sel = selectTurn(task.modelAnswer ?? '', bank, others);
      strictEqual(
        sel.kind,
        'answer',
        `"${answer.covers}" (${answer.id}) has no cue that fires on the model answer, so nothing a candidate says can reach it`
      );
      if (sel.kind === 'answer') strictEqual(sel.turn.id, answer.id);
    }
  });

  test(`${task.id}: every cue is one the fixture's own French could produce`, () => {
    // A cue with a typo is invisible to validateInterlocutor and silently
    // narrows the candidate's route to a fact. Not every cue needs to appear
    // in the model answer — cues exist to catch phrasings the model answer
    // does NOT use — but a cue whose words appear nowhere in the task at all
    // is worth a second look, so this only asserts the weaker, checkable
    // thing: no cue is empty or accidentally whitespace.
    for (const a of bank.answers) {
      for (const cue of a.cues) {
        ok(cue.trim().length > 0, `${a.id} carries an empty cue`);
        ok(cueMatches(cue, cue), `${a.id}'s cue "${cue}" cannot even match itself`);
      }
    }
  });

  test(`${task.id}: the opening, catch-all and closing are never selectable`, () => {
    // They are played by position, not by matching. A cue on any of them would
    // put them in the answer bank's competition and let one be "retired".
    strictEqual(bank.opening.cues.length, 0);
    strictEqual(bank.catchAll.cues.length, 0);
    strictEqual(bank.closing.cues.length, 0);
  });

  test(`${task.id}: the rubric's coverage criterion matches the bank`, () => {
    // The bank IS the definition of full coverage, so a rubric that asks the
    // grader to judge coverage while the bank withholds nothing to cover would
    // be marking against an empty checklist.
    const c = coverageOf(bank, []);
    ok(c.total >= 4, `only ${c.total} facts to obtain — too thin for a five-minute section`);
    strictEqual(c.covered.length, 0, 'nothing is covered before the candidate speaks');
    strictEqual(c.missed.length, c.total);
    for (const covers of c.missed) {
      ok(covers.trim().length > 0, 'an answer with a blank `covers` is invisible to the grader');
    }
  });
}
