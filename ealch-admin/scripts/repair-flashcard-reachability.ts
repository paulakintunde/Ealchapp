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
// ── WHY THE SUITE WAS GREEN, WHICH IS THE PART WORTH KEEPING ──────────────
//
// `flashhub-coverage.test.ts` exists precisely to catch this class: its own
// header calls it "REACHABILITY — items authored for other drills (voiceflash,
// sentence) before the hub existed carried no 'flashcard' drill, so no deck
// could ever select them." It did not catch these four, for two different
// reasons, and only one of them is correct behaviour.
//
//   `la douche` — `kind: 'word'`, level a2, drills {voiceflash, review}. Its
//   drill SIGNATURE is `review+voiceflash`, which sits in that test's
//   `SEPARATE_POOL_SIGNATURES` escape hatch. That hatch was built for the
//   2026-07 exam-vocab expansion, which deliberately authored distinct
//   flashcard-pool and voiceflash-pool vocabulary. `la douche` is not part of
//   that batch. It merely shares its drill signature, and the exemption
//   swallowed it. **The exemption is keyed on a signature and is therefore
//   broader than the batch it was written for.**
//
//   The three sentences — exempt because `kind: 'sentence'` is exempt by
//   design, on the reasoning that dictation sentences are spelling exercises
//   that legitimately live outside the flashcard decks. That reasoning is
//   right in general and wrong for these three: they are not dictation rows,
//   they are the published `pourriez-vous` evidence a cardDeck wants to show,
//   and they carry `sentence` rather than `dictation`.
//
// This script repairs the four rows. It does NOT widen the test's exemption —
// that is a judgement about the exam-vocab batch and belongs to whoever owns
// it. What it does do is remove the four rows from behind the exemption, so a
// future narrowing has less to find.
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

/** The four, with the drills each is expected to hold BEFORE the repair. Stated
 *  so the script refuses to run against rows that have moved since it was
 *  written, rather than blindly adding a drill to whatever is there now. */
const TARGETS: Array<{ id: string; before: string[]; why: string }> = [
  { id: 'fr.a2.hebergement.053', before: ['voiceflash', 'review'], why: 'la douche — the noun a2.29\'s scene, trap and six authored rows are built on' },
  { id: 'fr.a2.expressions-frequentes.072', before: ['sentence'], why: 'published pourriez-vous, cited by a2.29\'s softener term chip' },
  { id: 'fr.a2.expressions-frequentes.077', before: ['sentence'], why: 'published pourriez-vous' },
  { id: 'fr.sons.alphabet.282', before: ['sentence', 'review'], why: 'published pourriez-vous, upstream of a2.13 — the evidence behind decision item 1' },
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

    if (!plan.length) { console.log('\n  Nothing to repair: all four already carry flashcard.\n'); return; }
    if (DRY_RUN) { console.log(`\n  DRY RUN: ${plan.length} row(s) would be updated, nothing written.\n`); return; }

    await c.query('begin');
    try {
      for (const p of plan) {
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
      'select id, drills from content_items where id = any($1::text[]) order by id', [TARGETS.map((t) => t.id)]);
    const bad = after.rows.filter((r) => !toArray(r.drills).includes('flashcard'));
    if (bad.length) die(`${bad.length} row(s) still carry no flashcard after the write: ${bad.map((r) => r.id).join(', ')}`);
    console.log(`\n  Repaired ${plan.length} row(s). All four read back carrying flashcard.`);
    console.log('  Next: pnpm tsx scripts/merge-hotel-into-seed.ts  (carries them into the seed)\n');
  } finally {
    c.release();
    await pool.end();
  }
}

main();
