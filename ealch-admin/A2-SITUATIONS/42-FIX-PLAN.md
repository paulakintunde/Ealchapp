# The fix plan, in order

Written 2026-08-15 at the close of the a2.07 build. Ordered so that each step is
safe to do without the ones below it, and so nothing gets published twice.

**The situation in one paragraph.** a2.07 shipped and was published in snapshot
**v49 at rollout 10** at 05:42Z. Its fix landed in the database at 06:06Z, twenty-
four minutes *after* the publish. So the defect is live and the repair is not.
Meanwhile a2.26 merged into the seed carrying the same defect, so publishing right
now would ship it a second time in a second unit.

---

## Step 1 — a2.26's `sub` → `note`  ·  BLOCKS THE PUBLISH

`scripts/data/courses-lesson.ts` fails `pnpm -C ealch-admin typecheck` with **19
errors**, of which **17 are groupDrill items carrying `sub`**. Those 17 second
lines are blank on device. The other two are the `beats` union typing and
`format: string` on a drill.

*Why first:* it is a rename, and it is the only thing standing between the band
and a clean publish. Publishing before it bakes the a2.07 defect into a second
unit and needs a third snapshot to undo.

*Done when:* `pnpm -C ealch-admin typecheck` reports zero errors in
`courses-*.ts`, a2.26 is re-applied and re-merged, and the suite is green.

*Owner:* whoever is building a2.26 — the file was last written at 23:00 and is
theirs. The instruction is now in their prompt
(`21-A2-26-COURSES-ARGENT-PROMPT.md`) with their file named explicitly.

## Step 2 — publish once, covering both units

*Not before step 1.* One snapshot, carrying a2.07's five-field repair and
a2.26's rename together.

Pre-flight, in order:

1. `pnpm -C ealch-admin typecheck` — **zero errors.** This is the check that
   caught all of it and it is now the gate.
2. `node --test` in `ealch-v2` — green.
3. `pnpm -C ealch-admin content:parity` — currently clean. It reports
   `b2.01.l1` as database-only and `in_review`; confirm a publish will not sweep
   an unreviewed B1/B2 lesson into the binary.
4. Check `seed.json` has not moved under you. It changed three times during the
   a2.07 build.

*Then decide the 10% already on v49.* Rollout 0 is not a fix: it stops new
adopters and heals nobody. Only a forward publish or a rollback heals. The defect
is missing supporting labels rather than a broken mission, so a forward publish
is the proportionate call — but it is a judgement about live learners and it
belongs to the product owner, not to a build.

## Step 3 — the a2.13 amendment

Specified in `05-A2-13-AMENDMENT-SPEC.md` and **still not applied**. Four strings
across three sections of shipped a2.13 content promise the learner nothing more
from the conditional family, which a2.29 needs to contradict.

*Why here:* it touches shipped content, so it wants its own supervised commit,
its own parity run and its own snapshot. Doing it in the same publish as step 2
makes one diff into three unrelated ones.

*Blocks:* nothing outright — a2.29 can be authored before it lands. But it must
not be forgotten after, and a2.29 is the next unit with a hard dependency behind
it.

## Step 4 — `SEED_CUT.themes`

Collation §1.2 deferred widening the cut until real row counts existed. They
exist now (`07-BAND-ID-LEDGER.md`): the band's eight themes hold 300 to 415
published rows each, against 0 to 17 in the seed. The dead `transport` entry is
already out.

*Why not sooner:* it is a binary-size decision, it is reviewable only against
counts, and it changes what a first-run user gets offline. It is not a
correctness fix and nothing is waiting on it.

## Step 5 — the `hasPlainNasalFor` ticket

`density.logic.ts` ends with an escape hatch whose comment names
`aime`, `dame`, `jaune`, `scène`, `pleine` as exempted. **Four of those five are
still flagged**, because `hasPlainNasal(respell)` short-circuits on line 1 before
the French is ever consulted. Only `dame` escapes, and only because a bare `AM`
does not trip the first check while a digraph like `EHM` or `OHN` does.

sons.07 ships `j'aime`. Every A2 build so far has worked around this by hand.

*Why last:* it is a latent defect in a checker, not in content, and every build
has a documented workaround. It deserves a ticket, not a scramble.

---

## Not on this list, deliberately

- **`A2-BUILD-DOCTRINE.md` is uncommitted** and was modified before the a2.07
  session began. It is not this band's to commit.
- **The `_`-prefixed scratch scripts** stay untracked, matching the convention
  every previous build followed. `_a207_devicecheck.mjs` mutates `seed.json` and
  has an `--off` flag; it is the reusable rig for the repeated-`scenario` checks
  a2.28, a2.29 and a2.32 still owe.
- **Re-reviewing a2.07's content decisions** (unscored menu reading, 8-of-30
  production balance, Quebec rows released as flashcards). Those are open
  questions in `40-A2-07-BUILD-REPORT.md`, not defects.

## The rule that came out of all of this

> **`pnpm -C ealch-admin typecheck` before every merge.**
>
> It is the only check in the project that sees a field the renderer does not
> read. a2.07 shipped, published, and passed 4,195 tests with 33 blank lines in
> it. The seed validator, the density validator and the whole suite stayed green
> the entire time.

It is now in all seven remaining prompts, immediately before each one's
"Your test" section, together with the five fields and the two typing fixes.
