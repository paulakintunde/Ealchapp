// Demote the two metalinguistic `internet` rows out of the learner corpus.
//
//   pnpm tsx scripts/demote-metalinguistic-rows.ts --dry     guards only
//   pnpm tsx scripts/demote-metalinguistic-rows.ts           applies
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THESE ROWS ARE
// ══════════════════════════════════════════════════════════════════════════
//
//   fr.a2.internet.009  "On dit sur Internet, sans article et avec une majuscule."
//   fr.a2.internet.010  "Les trois se disent ; courriel est le terme officiel,
//                        mail est le plus courant."
//
// Notes ABOUT French, written IN French, in a table whose rows are served as
// flashcards, dictée sentences and TTS lines. Both carry `flashcard`. A learner
// meeting `.010` in the flashcard hub sees a French sentence explaining French
// with an English gloss explaining the explanation.
//
// Doctrine §E settled the analogous case when it ruled a participle is never a
// corpus item. a2.32's build flagged these and proposed the demotion; this is
// the demotion.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHY THIS IS SAFE, MEASURED 2026-08-17 BEFORE IT WAS WRITTEN
// ══════════════════════════════════════════════════════════════════════════
//
//   referenced by a content_unit   NONE   (exact-quoted id search, all kinds)
//   present in seed.json           NO     (neither id is in the file)
//   referenced by a seed lesson    NO
//
// So no lesson names them, no deckTranche releases them, no SRS key exists for
// them, and no learner can reach them today. The one thing that WOULD surface
// them is a future widening of `SEED_CUT.themes` to include `internet`, which
// is an open product decision — which is exactly why this is worth doing now
// rather than after.
//
// A first pass reported `speak.4.4` as a referrer. That was a false positive in
// the probe, not a real reference: the SQL used `like '%internet.009%'`, which
// also matches `fr.b1.internet.009`. Recorded because the next person will write
// the same query.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT IT DOES, AND WHAT IT DELIBERATELY DOES NOT
// ══════════════════════════════════════════════════════════════════════════
//
// DOES: sets `status` from 'published' to 'archived'. `content_status` is
// (draft, in_review, published, archived) and 'archived' is the honest one:
// these are not drafts and they are not awaiting review, they are retired.
//
// DOES NOT: delete the rows, change their ids, or rewrite their text. Ids are
// the SRS key and are never reused. The material is GOOD and both points are
// worth teaching; a2.32 already teaches them from its own authored strings. The
// text stays in the table so the next author can read what was retired and why.
//
// DOES NOT touch seed.json. Neither row is in it. Nothing to merge.
import './env';

const DRY_RUN = process.argv.includes('--dry');
const die: (m: string) => never = (m) => { console.error(`\n  STOP: ${m}\n`); process.exit(1); };

/** The two rows, with the demotion each was proposed for in a2.32's report. */
const ROWS = [
  {
    id: 'fr.a2.internet.009',
    fr: 'On dit sur Internet, sans article et avec une majuscule.',
    proposal: 'the capital-I rule belongs in a lesson term plus notes, not in an utterance',
  },
  {
    id: 'fr.a2.internet.010',
    fr: 'Les trois se disent ; courriel est le terme officiel, mail est le plus courant.',
    proposal: 'a usage note belongs on a commonErrors card, not in an utterance',
  },
] as const;

async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    // 1. THE ROWS ARE WHAT THIS SCRIPT THINKS THEY ARE. Checked by `fr`, not
    //    by id alone: an id that has been re-pointed at other content must not
    //    be archived on the strength of a stale comment.
    const found = await c.query<{ id: string; fr: string; status: string; drills: unknown }>(
      'select id, fr, status, drills from content_items where id = any($1::text[])',
      [ROWS.map((r) => r.id)]);
    if (found.rowCount !== ROWS.length) die(`expected ${ROWS.length} rows, read back ${found.rowCount}`);
    for (const r of ROWS) {
      const row = found.rows.find((x) => x.id === r.id);
      if (row?.fr !== r.fr) die(`${r.id} reads "${row?.fr}", not the text this demotion was written against. Re-check before archiving.`);
    }
    const already = found.rows.filter((r) => r.status !== 'published');
    if (already.length === ROWS.length) {
      console.log('\n  Both rows are already out of `published`. Nothing to do.\n');
      return;
    }

    // 2. NOTHING REFERENCES THEM. The check that makes this safe, run against
    //    the database rather than trusted from a report. EXACT-QUOTED so
    //    `fr.b1.internet.009` cannot masquerade as a hit.
    for (const r of ROWS) {
      const refs = await c.query<{ uid: string; kind: string }>(
        `select body->>'id' as uid, kind::text as kind from content_units where body::text like $1`,
        [`%"${r.id}"%`]);
      if (refs.rowCount) {
        die(`${r.id} is referenced by ${refs.rows.map((x) => `${x.uid} (${x.kind})`).join(', ')}. `
          + 'Archiving it would leave that content pointing at a row learners cannot reach. Fix the referrer first.');
      }
    }

    // 3. AND NOTHING IN THE SEED. A row in the binary is reachable regardless
    //    of its database status, so archiving one that ships offline would put
    //    the two out of step.
    const { readFileSync } = await import('node:fs');
    const seed = JSON.parse(readFileSync(new URL('../../ealch-v2/src/content/seed.json', import.meta.url), 'utf8')) as
      { items: { id: string }[]; lessons: unknown[] };
    const seedIds = new Set(seed.items.map((i) => i.id));
    const seedText = JSON.stringify(seed.lessons);
    for (const r of ROWS) {
      if (seedIds.has(r.id)) die(`${r.id} IS in seed.json, so it ships in the binary. Remove it from the seed in the same change or leave it published.`);
      if (seedText.includes(`"${r.id}"`)) die(`${r.id} is referenced by a lesson in seed.json`);
    }

    console.log('\n  guards passed:');
    for (const r of ROWS) {
      const row = found.rows.find((x) => x.id === r.id)!;
      console.log(`    ${r.id}  status=${row.status}  drills=${JSON.stringify(row.drills)}`);
      console.log(`      "${r.fr}"`);
      console.log(`      -> ${r.proposal}`);
    }
    console.log('    referenced by no content_unit, absent from seed.json, reachable by no learner');

    if (DRY_RUN) { console.log('\n  DRY RUN: nothing written.\n'); return; }

    const res = await c.query(
      `update content_items set status='archived', updated_at=now()
        where id = any($1::text[]) and status='published'`, [ROWS.map((r) => r.id)]);
    console.log(`\n  archived ${res.rowCount} row(s). Ids kept, text kept, nothing deleted.`);
    console.log('  seed.json untouched: neither row was in it.');
    console.log('\n  A future widening of SEED_CUT.themes to include `internet` can no longer');
    console.log('  sweep either of them into the binary.\n');
  } finally {
    c.release();
    await pool.end();
  }
}

main();
