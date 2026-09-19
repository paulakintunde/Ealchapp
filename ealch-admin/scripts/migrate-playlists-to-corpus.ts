// Move the nineteen bundled playlists into content_units, so they can be
// authored and shipped OTA instead of requiring an app-store release.
//
//   pnpm tsx scripts/migrate-playlists-to-corpus.ts            report only
//   pnpm tsx scripts/migrate-playlists-to-corpus.ts --write     insert as draft
//   pnpm tsx scripts/migrate-playlists-to-corpus.ts --write --publish
//
// ── Why the ids change ──────────────────────────────────────────────────────
//
// The bundled ids predate the convention: 'la-voix', 'argot', 'l-argent'. The
// corpus requires pl.<level>.<slug>, and ALL NINETEEN fail validatePlaylist as
// they stand — so they cannot be published unchanged.
//
// ── Why this is all-or-nothing ──────────────────────────────────────────────
//
// playlistPool() REPLACES rather than merges: corpus playlists win outright, so
// that a retired playlist can actually be removed. The consequence is that
// publishing ONE corpus playlist would drop the app from nineteen sets to one.
// Migrate the whole set, or none of it.
//
// Renaming breaks any saved deep link to an old id. That is survivable and
// deliberate: an unknown id reaches the player's empty state, which fails
// visibly instead of silently playing something else.

import './env';
import { Pool } from 'pg';
import { playlists } from '../../ealch-v2/src/content/playlists.ts';
import { validatePlaylist, PLAYLIST_ID_RE } from '../../ealch-v2/src/content/schema.ts';

const args = new Set(process.argv.slice(2));
const WRITE = args.has('--write');
const PUBLISH = args.has('--publish');

/** The corpus id for a bundled playlist, and the matching track ids. */
function toCorpusShape(p: (typeof playlists)[number]) {
  const id = `pl.${p.minLevel}.${p.id}`;
  return {
    slug: p.id,
    id,
    body: {
      ...p,
      id,
      version: 1,
      status: PUBLISH ? 'published' : 'draft',
      tracks: p.tracks.map((t, i) => ({ ...t, id: `${id}-t${i + 1}` })),
    },
  };
}

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  try {
    const shaped = playlists.map(toCorpusShape);

    // 1. Every row must satisfy the corpus validator BEFORE anything is written.
    let invalid = 0;
    for (const s of shaped) {
      if (!PLAYLIST_ID_RE.test(s.id)) { console.error(`  ✖ ${s.id} does not match the id pattern`); invalid++; continue; }
      const issues = validatePlaylist(s.body);
      if (issues.length) { invalid++; console.error(`  ✖ ${s.id}: ${issues.map((i) => i.message).join('; ')}`); }
    }
    if (invalid) { console.error(`\n✖ ${invalid} playlist(s) failed validation. Nothing written.\n`); process.exit(1); }
    console.log(`✓ ${shaped.length} playlists validate as corpus rows`);

    // 2. Slugs are unique across ALL content_units, not just playlists.
    const slugs = shaped.map((s) => s.slug);
    const clash = await pool.query<{ slug: string; kind: string }>(
      `select slug, kind::text from content_units where slug = any($1::text[])`, [slugs]
    );
    const mine = new Set(clash.rows.filter((r) => r.kind === 'playlist').map((r) => r.slug));
    const foreign = clash.rows.filter((r) => r.kind !== 'playlist');
    if (foreign.length) {
      console.error(`\n✖ slug already used by another kind: ${foreign.map((r) => `${r.slug} (${r.kind})`).join(', ')}\n`);
      process.exit(1);
    }
    console.log(`  ${mine.size} already present as playlists, ${shaped.length - mine.size} new`);

    if (!WRITE) {
      console.log('\n(report only — pass --write to insert)\n');
      shaped.forEach((s) => console.log(`   ${s.slug.padEnd(12)} → ${s.id}  (${s.body.tracks.length} tracks)`));
      return;
    }

    // 3. Idempotent: re-running updates the body rather than duplicating.
    let inserted = 0, updated = 0;
    for (const s of shaped) {
      const status = PUBLISH ? 'published' : 'draft';
      const res = await pool.query(
        `insert into content_units (slug, title, kind, level, locale, status, generated_by, body, version)
         values ($1, $2, 'playlist', $3::content_level, 'fr', $4::content_status, 'human', $5::jsonb, 1)
         on conflict (slug) do update
           set body = excluded.body, status = excluded.status, level = excluded.level, updated_at = now()
         returning (xmax = 0) as is_insert`,
        [s.slug, s.body.word, s.body.minLevel, status, JSON.stringify(s.body)]
      );
      if (res.rows[0]?.is_insert) inserted++; else updated++;
    }
    console.log(`\n✓ ${inserted} inserted, ${updated} updated, status=${PUBLISH ? 'published' : 'draft'}`);
  } finally {
    await pool.end();
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
