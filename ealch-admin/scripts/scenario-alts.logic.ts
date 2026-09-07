// Attaching the role-play alternatives to a lesson, in ONE place.
//
// ── Why this module exists (2026-08-09) ─────────────────────────────────────
//
// `apply-scenario-alts.ts` enriched the `scenario` turns of 18 lessons with
// `userEn` and `alts[]`, and it says in its own header that it writes seed.json
// and nothing else: "The database is a separate step and deliberately not done
// here." That was a reasonable call. What nobody wrote down is that there was a
// THIRD copy — the authored lesson source in scripts/data/*-lesson.ts — and it
// was never updated at all.
//
// So fourteen lesson sources now hold the bare three-field turns while the seed
// and the database hold the enriched ones, and every one of those lessons has a
// `content:*` batch that would write the poor copy straight back over the good
// one. It is not theoretical: re-rendering a1.03 for a1.22's ending counts on
// 2026-08-07 destroyed five turns exactly this way, and it was found by hand,
// afterwards.
//
// The fix is not to copy the answers into fourteen more files. It is to stop
// the lesson sources owning them. `scripts/data/scenario-alts.ts` is the single
// home for this content; a batch calls withScenarioAlts() on its lesson and
// gets the enriched version, so a source cannot drift from something it does
// not hold.
//
// The matching and refusal logic below is lifted from apply-scenario-alts.ts
// rather than rewritten, and that script now calls this too. One definition of
// what enrichment means, used by both writers.

import { SCENARIO_ALTS, type TurnAlt } from './data/scenario-alts.ts';
import { canonicalJson } from '../../ealch-v2/src/content/schema.ts';

export type AltTurn = {
  ai: string;
  en: string;
  user: string;
  userEn?: string;
  alts?: { fr: string; en: string }[];
};
type AnySection = { type: string; title?: string; turns?: AltTurn[] };
type AnyLesson = { id: string; sections?: AnySection[] };

/** Casing/accent/punctuation-insensitive compare — the same fold the schema
 *  validator uses. A curly apostrophe must not read as a re-authored line. */
export const fold = (s: string): string =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

/**
 * Match the apostrophe the lesson already uses.
 *
 * The a1 lessons were authored with the typographic apostrophe (’) and the
 * sons lessons with the straight one ('). Mixing both inside a single
 * conversation is visible on a device, so new lines adopt whichever the
 * surrounding turns use rather than imposing one.
 */
export function apostropheOf(turns: AltTurn[]): "'" | '’' {
  const text = turns.map((t) => `${t.ai}${t.user}`).join('');
  const curly = (text.match(/’/g) ?? []).length;
  const straight = (text.match(/'/g) ?? []).length;
  return curly > straight ? '’' : "'";
}

/** What withScenarioAlts would attach, without attaching it. */
export function altsPlanFor(lesson: AnyLesson): { turns: number; alts: number; mark: "'" | '’' } | null {
  const rows = SCENARIO_ALTS[lesson.id];
  const section = (lesson.sections ?? []).find((s) => s.type === 'scenario');
  if (!rows || !section?.turns?.length) return null;
  return {
    turns: rows.length,
    alts: rows.reduce((n, r) => n + r.alts.length, 0),
    mark: apostropheOf(section.turns),
  };
}

/** Every reason this lesson cannot be enriched, or [] if it can. */
export function scenarioAltsIssues(lesson: AnyLesson): string[] {
  const rows = SCENARIO_ALTS[lesson.id];
  if (!rows) return [];
  const problems: string[] = [];
  const section = (lesson.sections ?? []).find((s) => s.type === 'scenario');
  if (!section?.turns?.length) return [`${lesson.id}: no scenario section with turns`];
  if (section.turns.length !== rows.length) {
    return [`${lesson.id}: the lesson has ${section.turns.length} turns, scenario-alts.ts has ${rows.length}`];
  }

  rows.forEach((row: TurnAlt, i: number) => {
    const turn = section.turns![i];
    // The checksum. Answers attached to a line that has since been re-authored
    // are invisible in review and wrong on a device.
    if (fold(turn.user) !== fold(row.user)) {
      problems.push(
        `${lesson.id} turn ${i}: the model line has changed.\n` +
          `    lesson:       ${turn.user}\n` +
          `    scenario-alts: ${row.user}`
      );
    }
    if (!row.alts.length) problems.push(`${lesson.id} turn ${i}: no alternatives`);
    for (const a of row.alts) {
      if (fold(a.fr) === fold(row.user)) {
        problems.push(`${lesson.id} turn ${i}: alternative "${a.fr}" repeats the model line`);
      }
    }
    const seen = new Set(row.alts.map((a) => fold(a.fr)));
    if (seen.size !== row.alts.length) problems.push(`${lesson.id} turn ${i}: two alternatives are the same line`);

    // ── Already enriched ───────────────────────────────────────────────────
    // a1.03's source carries the answers inline: a previous session back-filled
    // genre-lesson.ts by hand after a re-render destroyed five turns. That copy
    // is correct and must not be silently overwritten by a copy that merely
    // looks similar, nor treated as a conflict when it is the same content.
    // Identical is a no-op; different is a stop.
    //
    // Compared through canonicalJson, NOT JSON.stringify. The seed round-trips
    // through Postgres and comes back with its keys in a different order, so
    // {fr,en} and {en,fr} are the same answer written twice. The first version
    // of this check used stringify and reported every already-correct turn in
    // a1.06 as a conflict — the third time that trap has been sprung in this
    // codebase in one day, which is why the canonicaliser is shared.
    if (turn.userEn !== undefined || turn.alts !== undefined) {
      const mark = apostropheOf(section.turns!);
      const punct = (s: string) => (mark === '’' ? s.replace(/'/g, '’') : s.replace(/’/g, "'"));
      const want = canonicalJson({ userEn: row.userEn, alts: row.alts.map((a) => ({ fr: punct(a.fr), en: a.en })) });
      const have = canonicalJson({ userEn: turn.userEn, alts: turn.alts });
      if (want !== have) {
        problems.push(
          `${lesson.id} turn ${i}: the lesson already carries DIFFERENT answers.\n` +
            `    lesson:        ${have}\n` +
            `    scenario-alts: ${want}\n` +
            `    One of the two is stale. Reconcile them by hand; this will not guess.`
        );
      }
    }
  });
  return problems;
}

/**
 * Return `lesson` with its role-play alternatives attached.
 *
 * A lesson with no entry in scenario-alts.ts is returned untouched, so this is
 * safe to call from every batch whether or not that lesson has a conversation.
 *
 * PURE: the input is a module-level `const` in some data file and callers keep
 * using it, so nothing here mutates. A new lesson, new sections array, new
 * turns.
 *
 * THROWS rather than degrading. A batch that quietly shipped the bare turns is
 * the failure this module exists to prevent, so an unattachable alt has to stop
 * the run — the same stance apply-scenario-alts.ts already takes.
 */
export function withScenarioAlts<T extends AnyLesson>(lesson: T): T {
  const rows = SCENARIO_ALTS[lesson.id];
  if (!rows) return lesson;

  const issues = scenarioAltsIssues(lesson);
  if (issues.length) {
    throw new Error(
      `\n✗ Cannot attach role-play alternatives to ${lesson.id}:\n\n` +
        issues.map((p) => `  · ${p}`).join('\n') +
        `\n\n  Source of truth is ealch-admin/scripts/data/scenario-alts.ts.\n`
    );
  }

  const sections = (lesson.sections ?? []).map((s) => {
    if (s.type !== 'scenario' || !s.turns?.length) return s;
    const mark = apostropheOf(s.turns);
    const punct = (x: string) => (mark === '’' ? x.replace(/'/g, '’') : x.replace(/’/g, "'"));
    return {
      ...s,
      turns: s.turns.map((turn, i) => {
        const row = rows[i];
        if (!row) return turn;
        return { ...turn, userEn: row.userEn, alts: row.alts.map((a) => ({ fr: punct(a.fr), en: a.en })) };
      }),
    };
  });

  return { ...lesson, sections } as T;
}
