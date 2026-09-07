// Add the `flashcard` drill to four published rows that no deck can reach.
//
//   pnpm tsx scripts/repair-flashcard-reachability.ts --dry
//   pnpm tsx scripts/repair-flashcard-reachability.ts
//
// Found by the a2.29 « À l'hôtel » build, 2026-08-16, while checking that every
// id its `deckTranche` released could actually be served. Four could not:
//
//   fr.a2.hebergement.053              la douche                     {voiceflash, review}
//   fr.a2.expressions-frequentes.072   Pourriez-vous m'aider…        {sentence}
//   fr.a2.expressions-frequentes.077   Excusez-moi, pourriez-vous…   {sentence}
//   fr.sons.alphabet.282               Pourriez-vous répéter…        {sentence, review}
//
// A `deckTranche` releases through the flashcard deck, so an id with no
// `flashcard` drill releases NOTHING. a2.29 had to drop all four from its
// tranche rather than ship four lines that look like they work and do not.
//
// ── CORRECTED 2026-08-16, AND THE CORRECTION IS THE POINT ─────────────────
//
// The first version of this script claimed `flashhub-coverage.test.ts`'s
// `SEPARATE_POOL_SIGNATURES` escape hatch was "keyed on a signature and
// therefore broader than the batch it was written for", and repaired all four
// rows on that basis. **That claim was false, and it was measured false against
// Postgres provenance, which the seed withholds:**
//
//   a1/a2 vocab rows with no flashcard drill        2055
//   of those, prompt_version = exam-vocab-2026-07   2055
//   genuinely stranded                                 0
//
// The exemption has ZERO false negatives across the whole corpus. It does
// exactly its job. And two of the four rows this script first touched are
// themselves `exam-vocab-2026-07` rows:
//
//   fr.a2.hebergement.053   la douche              prompt_version = exam-vocab-2026-07
//   fr.sons.alphabet.282    Pourriez-vous répéter… prompt_version = exam-vocab-2026-07
//
// Those two were NOT stranded. They were deliberately assigned to the
// voiceflash pool by a batch whose whole design is distinct vocabulary per
// drill, approved per batch. Adding `flashcard` to them reversed a decision
// somebody made on purpose, on a premise that did not hold.
//
// So this script now does two things, and re-running it is idempotent either
// way:
//
//   REPAIR the two rows that are genuinely stranded (prompt_version null).
//   REVERT the two rows that were deliberately pooled.
//
// The lesson worth keeping is not about drills. It is that "the guard did not
// catch it" and "the guard is wrong" are different claims, and the second one
// needs the provenance the seed does not carry. Check Postgres before calling
// an exemption over-broad.
//
// ── SAFETY ─────────────────────────────────────────────────────────────────
//
// `flashhub-coverage.test.ts` also pins that no theme holds the same word twice
// under different articles: adding `flashcard` to a row whose theme already
// serves that string as a card would create a duplicate card. Checked before
// the write, per row, against every published sibling in the same theme, using
// the same strip-the-article comparison the test uses. Measured 2026-08-16:
// zero collisions on all four.
import './env';

const die: (m: string) => never = (m) => { console.error(`\n  STOP: ${m}\n`); process.exit(1); };
const DRY_RUN = process.argv.includes('--dry');

/** The rows that are GENUINELY stranded: `prompt_version` is null, so no batch
 *  deliberately pooled them. `before` is what each must hold for the repair to
 *  run, so the script refuses against a row that has moved since it was written
 *  rather than blindly adding a drill to whatever is there now. */
const TARGETS: Array<{ id: string; before: string[]; why: string }> = [
  { id: 'fr.a2.expressions-frequentes.072', before: ['sentence'], why: 'published pourriez-vous, prompt_version null — genuinely stranded' },
  { id: 'fr.a2.expressions-frequentes.077', before: ['sentence'], why: 'published pourriez-vous, prompt_version null — genuinely stranded' },
];

/** The two this script should never have touched. `exam-vocab-2026-07` assigned
 *  them to the voiceflash pool deliberately; the first version of this script
 *  gave them `flashcard` on a premise that measured false. Restored here rather
 *  than left, because a wrong repair nobody reverses becomes the new baseline. */
const REVERT: Array<{ id: string; to: string[]; why: string }> = [
  { id: 'fr.a2.hebergement.053', to: ['voiceflash', 'review'], why: 'la douche — exam-vocab voiceflash pool, not stranded' },
  { id: 'fr.sons.alphabet.282', to: ['sentence', 'review'], why: 'exam-vocab pool, not stranded' },
];

/** `drills` is a Postgres enum array and node-postgres can hand it back as the
 *  RAW LITERAL `{flashcard,review}`. A `.includes()` on that string lies. */
const toArray = (d: unknown): string[] =>
  Array.isArray(d) ? d as string[] : String(d ?? '').replace(/[{}"]/g, '').split(',').filter(Boolean);

/** The comparison `flashhub-coverage.test.ts` uses for its duplicate check. */
const norm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();

async function main() {
  console.log(`\n  flashcard reachability repair${DRY_RUN ? '   [DRY RUN]' : ''}\n`);
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const rows = await c.query<{ id: string; fr: string; kind: string; level: string; theme: string; status: string; drills: unknown }>(
      'select id, fr, kind, level, theme, status, drills from content_items where id = any($1::text[]) order by id',
      [TARGETS.map((t) => t.id)]);
    if (rows.rows.length !== TARGETS.length) {
      die(`expected ${TARGETS.length} rows, found ${rows.rows.length}: ${rows.rows.map((r) => r.id).join(', ')}`);
    }

    const plan: Array<{ id: string; next: string[] }> = [];
    for (const t of TARGETS) {
      const r = rows.rows.find((x) => x.id === t.id)!;
      const have = toArray(r.drills);
      if (r.status !== 'published') die(`${r.id} is ${r.status}, not published`);

      if (have.includes('flashcard')) {
        console.log(`  ${r.id.padEnd(34)} ALREADY has flashcard (${have.join(', ')}) — nothing to do`);
        continue;
      }
      // Refuse if the row has drifted from what this script was written against.
      const sameSet = have.length === t.before.length && t.before.every((d) => have.includes(d));
      if (!sameSet) {
        die(`${r.id} holds {${have.join(', ')}} and this repair was written against {${t.before.join(', ')}}.\n`
          + '      Re-measure before widening it: the row has changed since 2026-08-16.');
      }

      // THE DUPLICATE CHECK. Adding `flashcard` publishes a card into this
      // theme's deck; if a sibling already serves the same string as a card,
      // that is the duplicate `flashhub-coverage.test.ts` pins at zero.
      const sib = await c.query<{ id: string; fr: string; drills: unknown }>(
        "select id, fr, drills from content_items where theme=$1 and status='published' and id <> $2", [r.theme, r.id]);
      const clash = sib.rows.filter((x) => norm(x.fr) === norm(r.fr) && toArray(x.drills).includes('flashcard'));
      if (clash.length) {
        die(`${r.id} « ${r.fr} » would become the SECOND flashcard for that string in ${r.theme}: ${clash.map((x) => x.id).join(', ')}`);
      }

      const next = [...have, 'flashcard'];
      plan.push({ id: r.id, next });
      console.log(`  ${r.id.padEnd(34)} {${have.join(', ')}} -> {${next.join(', ')}}   [${r.theme}] ${r.fr}`);
      console.log(`      ${t.why}`);
    }

    // THE REVERT. Two rows this script wrongly gave `flashcard` on a premise
    // that measured false. Restore the exam-vocab pooling they were authored
    // with. Idempotent: a row already at its target is skipped.
    const undo: Array<{ id: string; next: string[] }> = [];
    const rev = await c.query<{ id: string; fr: string; drills: unknown; prompt_version: string | null }>(
      'select id, fr, drills, prompt_version from content_items where id = any($1::text[]) order by id',
      [REVERT.map((r) => r.id)]);
    for (const t of REVERT) {
      const r = rev.rows.find((x) => x.id === t.id);
      if (!r) die(`${t.id} is not in Postgres`);
      // Only revert what the exam-vocab batch actually owns. If provenance ever
      // says otherwise, stop rather than undo somebody else's deliberate work.
      if (!String(r.prompt_version ?? '').includes('exam-vocab')) {
        die(`${t.id} is not an exam-vocab row (prompt_version=${r.prompt_version}); the reason for reverting it does not hold`);
      }
      const have = toArray(r.drills);
      const sameSet = have.length === t.to.length && t.to.every((d) => have.includes(d));
      if (sameSet) { console.log(`  ${t.id.padEnd(34)} already back at {${t.to.join(', ')}} — nothing to undo`); continue; }
      if (!have.includes('flashcard')) {
        die(`${t.id} holds {${have.join(', ')}} and carries no flashcard, so this is not the state this script created`);
      }
      undo.push({ id: t.id, next: t.to });
      console.log(`  ${t.id.padEnd(34)} {${have.join(', ')}} -> {${t.to.join(', ')}}   REVERT: ${t.why}`);
    }

    if (!plan.length && !undo.length) {
      console.log('\n  Nothing to do: both repairs and both reverts are already in place.\n');
      return;
    }
    if (DRY_RUN) {
      console.log(`\n  DRY RUN: ${plan.length} repair(s) and ${undo.length} revert(s), nothing written.\n`);
      return;
    }

    await c.query('begin');
    try {
      for (const p of [...plan, ...undo]) {
        const res = await c.query('update content_items set drills=$1::drill_kind[], updated_at=now() where id=$2', [p.next, p.id]);
        if (res.rowCount !== 1) throw new Error(`${p.id} update touched ${res.rowCount} rows`);
      }
      await c.query('commit');
    } catch (e) {
      await c.query('rollback');
      die(`rolled back: ${(e as Error).message}`);
    }

    // Read back rather than trust the write.
    const after = await c.query<{ id: string; drills: unknown }>(
      'select id, drills from content_items where id = any($1::text[]) order by id',
      [[...TARGETS.map((t) => t.id), ...REVERT.map((r) => r.id)]]);
    const wantFC = new Set<string>(TARGETS.map((t) => t.id));
    const bad = after.rows.filter((r) => wantFC.has(r.id) !== toArray(r.drills).includes('flashcard'));
    if (bad.length) die(`${bad.length} row(s) are not in their intended state: ${bad.map((r) => `${r.id} {${toArray(r.drills).join(',')}}`).join(', ')}`);
    console.log(`
  Repaired ${plan.length}, reverted ${undo.length}. All four read back in their intended state.`);
    console.log('  Next: pnpm tsx scripts/merge-hotel-into-seed.ts  (carries them into the seed)\n');
  } finally {
    c.release();
    await pool.end();
  }
}

main();
