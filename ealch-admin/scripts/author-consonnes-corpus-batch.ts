// Content Batch — Les consonnes corpus + the sons respell backfill.
//
// Two jobs, one transaction, because they are the same repair: the sons track's
// corpus layer has two holes and both were found by the same audit.
//
// ── Job 1: the consonnes corpus ────────────────────────────────────────────
//
// sons.04 ships titled "Les consonnes françaises" on a theme holding TEN items.
// Its lesson names 31 itemIds, and only 10 of them are consonnes: the other 21
// are borrowed from `alphabet` (11), `voyelles` (5) and five single-item scraps
// from `mots-essentiels`, `noms-essentiels`, `verbes-essentiels`, `questions`
// and `nombres`. Compare the themes authored since: liaisons 213, rythme 189,
// nasales 173, elision 71, muettes 63, accents 62. Consonnes is not a thin
// theme, it is an unauthored one, and the lesson on top of it is padding.
//
// It also fails the advisory theme-breadth gate in publish-content.ts (>= 20
// items), which logs and does not block, which is why this has survived.
//
// This batch authors the missing body: ids 011-170, covering the families the
// unit subtitle already promises ("consonant sounds & the French r"). The
// existing 001-010 are NOT touched. They are valid, they are published, and
// re-authoring them would churn ids that sons.04.l1 already names.
//
// ── Job 2: the respell backfill ───────────────────────────────────────────
//
// 503 sons items carry correct IPA and no `respell`: nasales 173, voyelles 165,
// alphabet 165. Every theme authored later is at or near 100% coverage (rythme
// 189/189, elision 71/71, muettes 63/63, accents 62/62), so this is the old
// bulk, not a policy.
//
// It matters most exactly where it is worst. sons.03 teaches nasal vowels and
// its theme has ZERO respellings, so the one lesson whose whole subject is a
// sound English spelling cannot represent is also the one lesson that never
// shows the learner how to say it. `respell` is what the XL word card renders
// under the French word.
//
// The respellings are DERIVED FROM EACH ITEM'S OWN SHIPPED IPA, never
// re-transcribed from the French spelling, so this pass cannot invent a
// pronunciation the corpus does not already assert. See the header of
// data/sons-respell-backfill.ts for the stress and nasal conventions and for
// the migration-debt note on the older plain-n rows.
//
// ── Contract ──────────────────────────────────────────────────────────────
//
// Same as author-accents-batch.ts: everything validates BEFORE the database is
// touched, then the whole set moves inside ONE transaction. Idempotent by id.
// This batch writes ITEMS ONLY. It does not touch a lesson, a unit, or any
// lessonIds, so nothing it does can change what a shipped screen renders
// except by filling in a respell that was blank.
//
// Usage (from ealch-admin/):
//   pnpm content:consonnes --dry-run   validate + report only
//   pnpm content:consonnes             apply, one transaction
//   then: pnpm content:publish         (ships OTA; CHECK git diff on seed.json
//                                       first, see the seed-direct hazard note)

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import {
  formatIssues,
  validateItem,
  type Item,
} from '../../ealch-v2/src/content/schema.ts';
import { hasPlainNasal, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { CONSONNES, toItem } from './data/consonnes-corpus.ts';
import { SONS_RESPELL, SONS_RESPELL_COUNT } from './data/sons-respell-backfill.ts';

const NEW_ITEMS: Item[] = CONSONNES.map(toItem);

/** The themes the respell backfill is allowed to touch. A key outside these is
 *  a typo, not a decision: every other sons theme is already at full coverage
 *  and rewriting one would churn shipped copy. */
const BACKFILL_THEMES = new Set(['nasales', 'voyelles', 'alphabet']);

/** The four French nasal vowels in IPA: a vowel carrying the combining tilde.
 *  An item's own transcription is the only authority on how many it has. */
const NASAL_IPA = /[ɔɑɛœ]̃/gu;

const nasalCount = (ipa: string) => (ipa.match(NASAL_IPA) ?? []).length;
const superscriptCount = (respell: string) => (respell.match(/ⁿ/gu) ?? []).length;

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

/** Every authored string reachable from a value. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Content is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  // ── Job 1 validates: the new items ───────────────────────────────────────

  const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
  if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

  const ids = NEW_ITEMS.map((i) => i.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) die(`duplicate ids in batch: ${[...new Set(dupes)].join(', ')}`);

  // 001-010 are shipped. Re-authoring them here would churn ids sons.04.l1
  // already names, so the batch refuses rather than silently overwriting.
  const reserved = ids.filter((id) => {
    const n = Number(id.split('.').pop());
    return Number.isFinite(n) && n <= 10;
  });
  if (reserved.length) die(`batch redefines already-shipped ids 001-010:\n  ${reserved.join('\n  ')}`);

  if (NEW_ITEMS.some((i) => i.theme !== 'consonnes' || i.level !== 'sons')) {
    die('every new item must be level "sons", theme "consonnes"');
  }

  // Notation guards. These are the corpus-side halves of the density rules:
  // the validator polices lesson sections, nothing polices items, and an item
  // with a plain-n nasal is what puts a plain-n nasal on a lesson screen.
  const badIpa = NEW_ITEMS.filter((i) => i.ipa && !/^\/.*\/$/.test(i.ipa));
  if (badIpa.length) die(`IPA must sit in slashes:\n  ${badIpa.map((i) => `${i.id} "${i.ipa}"`).join('\n  ')}`);

  const bracketed = NEW_ITEMS.filter((i) => i.respell?.includes('['));
  if (bracketed.length) {
    die(`corpus respell is bare, brackets are a lesson-section rule:\n  ${bracketed.map((i) => `${i.id} "${i.respell}"`).join('\n  ')}`);
  }

  const nasalTrap = NEW_ITEMS.filter(
    (i) => i.respell && (hasPlainNasal(i.respell) || hasPlainNasalFor(i.fr, i.respell))
  );
  if (nasalTrap.length) {
    die(`nasal closed with a plain n or m, use the superscript ⁿ:\n  ${nasalTrap.map((i) => `${i.id} ${i.fr} "${i.respell}"`).join('\n  ')}`);
  }

  const noRespell = NEW_ITEMS.filter((i) => !i.respell);
  if (noRespell.length) {
    die(`every new item needs a respell, that is the point of the batch:\n  ${noRespell.map((i) => i.id).join('\n  ')}`);
  }

  // ── Job 2 validates: the backfill map ────────────────────────────────────

  const backfillIds = Object.keys(SONS_RESPELL);
  if (backfillIds.length !== SONS_RESPELL_COUNT) {
    die(`backfill map holds ${backfillIds.length} rows, its own count says ${SONS_RESPELL_COUNT}`);
  }

  const offTheme = backfillIds.filter((id) => !BACKFILL_THEMES.has(id.split('.')[2]));
  if (offTheme.length) die(`backfill touches themes outside the audit's scope:\n  ${offTheme.join('\n  ')}`);

  // Bare `hasPlainNasal` is deliberately NOT run over the backfill. It cannot
  // see the French spelling, so it fires on every genuinely pronounced
  // consonant: jaune ZHOHN, meme MEHM, Etienne ay-TYEHN. Thirty rows in this
  // map are that shape and every one is correct French. The paired check,
  // which runs below once the database can supply each row's `fr`, is the only
  // one that can tell a nasal vowel from a real consonant.
  const bracketedBackfill = Object.entries(SONS_RESPELL).filter(([, r]) => r.includes('[') || !r.trim());
  if (bracketedBackfill.length) {
    die(`backfill respell must be bare and non-empty:\n  ${bracketedBackfill.map(([id]) => id).join('\n  ')}`);
  }

  // ── House style, over everything this batch authors ──────────────────────

  const authored = JSON.stringify({ NEW_ITEMS, SONS_RESPELL });
  if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // Every backfill target must already exist and be published. A miss means
    // the map was built against a seed.json that has since moved, and writing
    // it would either no-op silently or resurrect a withdrawn row.
    const found = await client.query<{ id: string; fr: string; ipa: string | null; respell: string | null }>(
      `select id, fr, ipa, respell from content_items where id = any($1) and status = 'published'`,
      [backfillIds]
    );
    const missing = backfillIds.filter((id) => !found.rows.some((r) => r.id === id));
    if (missing.length) {
      die(`backfill names items that are not published:\n  ${missing.slice(0, 20).join('\n  ')}${missing.length > 20 ? `\n  ... and ${missing.length - 20} more` : ''}`);
    }

    // Nasals are checked by COUNT PARITY against each row's own IPA, which
    // only the database has for these rows. `hasPlainNasalFor` decides from
    // the French SPELLING instead, and cannot separate a nasal vowel from a
    // pronounced consonant: it fires on 34 correct rows here (comme KOM, meme
    // MEHM, deuxieme ZYEHM, jaune ZHOHN, automne oh-TON, Wassim wa-SEEM, and
    // the spelled letters M and N). Its own source comment records the same
    // false positive for aime and scene. Asserting it would demand ZHOHⁿ for
    // `jaune`, teaching the exact error this convention exists to prevent.
    //
    // The rule is exact in both directions: as many superscripts as nasal
    // vowels, no more and no fewer. A missed nasal and an invented one both
    // fail, and no allowlist is needed.
    const nasalMismatch = found.rows.filter(
      (r) => r.ipa && nasalCount(r.ipa) !== superscriptCount(SONS_RESPELL[r.id])
    );
    if (nasalMismatch.length) {
      die(
        `superscript count must equal the IPA's nasal-vowel count:\n  ` +
        nasalMismatch.slice(0, 20).map((r) =>
          `${r.id} "${r.fr}"\n     ipa(${nasalCount(r.ipa!)}): ${r.ipa}\n     re (${superscriptCount(SONS_RESPELL[r.id])}): ${SONS_RESPELL[r.id]}`
        ).join('\n  ')
      );
    }

    // This batch FILLS BLANKS. A row that already carries a respell means
    // someone authored one in between, and overwriting it would discard their
    // work exactly the way the seed-direct incident discarded lessons.
    const occupied = found.rows.filter((r) => r.respell != null && r.respell !== '');
    if (occupied.length) {
      die(
        `these rows already carry a respell, refusing to overwrite:\n  ` +
        occupied.slice(0, 20).map((r) => `${r.id} "${r.respell}"`).join('\n  ') +
        (occupied.length > 20 ? `\n  ... and ${occupied.length - 20} more` : '') +
        `\n\nRe-derive the map from a fresh seed before running this.`
      );
    }

    const existing = await client.query<{ id: string }>(
      `select id from content_items where id = any($1)`,
      [ids]
    );

    const families = NEW_ITEMS.reduce<Record<string, number>>((a, i) => {
      const f = i.tags.find((t) => t !== 'consonant') ?? 'untagged';
      a[f] = (a[f] ?? 0) + 1;
      return a;
    }, {});

    console.log(`\n  JOB 1 — consonnes corpus`);
    console.log(`    new items: ${NEW_ITEMS.length} (${ids[0]} … ${ids[ids.length - 1]})`);
    console.log(`    of which already present: ${existing.rowCount} (will update)`);
    console.log(`    theme total after this batch: ${10 + NEW_ITEMS.length - (existing.rowCount ?? 0)}`);
    console.log(`    families: ${Object.entries(families).sort((a, b) => b[1] - a[1]).map(([f, n]) => `${f}:${n}`).join('  ')}`);
    console.log(`\n  JOB 2 — respell backfill`);
    console.log(`    rows: ${backfillIds.length} (all currently blank, all published)`);
    const byTheme = backfillIds.reduce<Record<string, number>>((a, id) => {
      const t = id.split('.')[2];
      a[t] = (a[t] ?? 0) + 1;
      return a;
    }, {});
    console.log(`    by theme: ${Object.entries(byTheme).map(([t, n]) => `${t}:${n}`).join('  ')}`);
    console.log(`\n  validators: schema ✓  ipa-notation ✓  respell-notation ✓  nasal-convention ✓  house style ✓`);
    console.log(`  writes: items only. No lesson, no unit, no lessonIds touched.`);

    if (DRY_RUN) {
      console.log('\n✓ dry run — all valid, nothing written.\n');
      return;
    }

    await client.query('begin');

    for (const it of NEW_ITEMS) {
      await client.query(
        `insert into content_items
           (id, kind, level, theme, fr, en, ipa, respell, gender, example, notes, tags, drills, audio_ref, version, status, generated_by)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10::jsonb,$11,$12,$13,null,$14,'published','human')
         on conflict (id) do update set
           kind=excluded.kind, level=excluded.level, theme=excluded.theme, fr=excluded.fr, en=excluded.en,
           ipa=excluded.ipa, respell=excluded.respell, gender=excluded.gender, example=excluded.example,
           notes=excluded.notes, tags=excluded.tags, drills=excluded.drills, version=excluded.version`,
        [
          it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.respell ?? null,
          it.gender ?? null, it.example ? JSON.stringify(it.example) : null, it.notes ?? null,
          it.tags, it.drills, it.version,
        ]
      );
    }

    // Blank-only update. The `respell is null or ''` guard is the same rule the
    // pre-flight check enforces, held at the row level so a concurrent write
    // between check and commit still cannot be clobbered.
    let filled = 0;
    for (const [id, respell] of Object.entries(SONS_RESPELL)) {
      const res = await client.query(
        `update content_items set respell = $2
          where id = $1 and status = 'published' and (respell is null or respell = '')`,
        [id, respell]
      );
      filled += res.rowCount ?? 0;
    }

    if (filled !== backfillIds.length) {
      await client.query('rollback');
      die(`backfill updated ${filled} rows, expected ${backfillIds.length} — rolled back`);
    }

    await client.query('commit');

    console.log(`\n✓ applied.`);
    console.log(`  ${NEW_ITEMS.length} consonnes items upserted`);
    console.log(`  ${filled} respellings backfilled`);
    console.log(`\n  Run \`pnpm content:publish\` to ship it OTA.`);
    console.log(`  Check \`git diff ealch-v2/src/content/seed.json\` FIRST — a stale local`);
    console.log(`  seed running ahead of the database has destroyed lessons before.\n`);
  } catch (err) {
    await client.query('rollback').catch(() => {});
    throw err;
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
