// RESTORE the liaison ties that repair-audit-findings.ts --undertie removed.
//
//   pnpm tsx scripts/restore-liaison-ties.ts            dry run
//   pnpm tsx scripts/restore-liaison-ties.ts --apply     write
//
// WHY THIS EXISTS
//
// The audit found the undertie U+203F rendering as a low underscore on a Pixel
// 9, and the fix removed it from 7,560 rows, joining the carried consonant to
// the syllable it lands on: « seh-t‿UHⁿ » became « seh-TUHⁿ ».
//
// That was wrong, and the test suite said so. The tie is not decoration: the
// liaisons lesson TAGS each row `liaison-t`, `liaison-n`, `liaison-z`, and
// sons-10-liaison.test.ts asserts every one of those tags is backed by a real
// tie in the IPA. The tie is how the corpus records WHICH consonant carries.
// Deleting it destroyed that, left the tags unbacked, and left sons.09.l1 —
// which teaches the tie, and whose overview glyph IS a tie — pointing at a
// marker no card had any more.
//
// The removal is not invertible from the current rows: « sɛ.tœ̃ » does not say
// where the tie was. So this restores from the last snapshot that still has
// them, v67, which is in the content bucket and inside the retention window.
//
// It restores ONLY fr / ipa / respell, and only where the snapshot value
// carries a tie. The note and prompt repairs from the same audit (build
// commentary, doubled respellings, gap-fill leaks) are good and stay.
import './env';
import { describeTarget } from './env';
import { downloadFromStorage } from './snapshot-utils.ts';

const APPLY = process.argv.includes('--apply');
const FROM = process.argv.includes('--from') ? process.argv[process.argv.indexOf('--from') + 1] : 'v67';

type SnapItem = { id: string; fr?: string; ipa?: string; respell?: string };

async function main() {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!url || !process.env.DATABASE_URL) {
    console.error('Need SUPABASE_URL and DATABASE_URL.');
    process.exit(2);
  }
  describeTarget();

  console.log(`  reading snapshots/${FROM}.json`);
  const body = await downloadFromStorage(url, process.env.SUPABASE_SERVICE_ROLE_KEY ?? '', `snapshots/${FROM}.json`);
  const snap = JSON.parse(body) as { items: SnapItem[] };
  const withTie = snap.items.filter(
    (i) => (i.fr ?? '').includes('‿') || (i.ipa ?? '').includes('‿') || (i.respell ?? '').includes('‿')
  );
  console.log(`  ${FROM} holds ${snap.items.length} items, ${withTie.length} of them carrying a tie`);

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });

  let changed = 0;
  for (const it of withTie) {
    const { rows } = await pool.query<{ fr: string; ipa: string | null; respell: string | null }>(
      'select fr, ipa, respell from content_items where id = $1',
      [it.id]
    );
    if (!rows.length) continue;
    const now = rows[0];
    const next = { fr: it.fr ?? now.fr, ipa: it.ipa ?? now.ipa, respell: it.respell ?? now.respell };
    if (next.fr === now.fr && next.ipa === now.ipa && next.respell === now.respell) continue;
    changed++;
    if (changed <= 6) {
      console.log(`\n${it.id}`);
      if (next.ipa !== now.ipa) console.log(`  ipa      ${now.ipa}\n        -> ${next.ipa}`);
      if (next.respell !== now.respell) console.log(`  respell  ${now.respell}\n        -> ${next.respell}`);
    }
    if (APPLY) {
      await pool.query('update content_items set fr = $1, ipa = $2, respell = $3, updated_at = now() where id = $4', [
        next.fr, next.ipa, next.respell, it.id,
      ]);
    }
  }
  console.log(`\n${changed} rows restored${APPLY ? '' : ' (dry run, nothing written)'}.`);
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
