// REPAIR — mechanical content fixes from the 2026-09-09 flashcard audit.
//
//   pnpm tsx scripts/repair-audit-findings.ts <repair>          dry run, prints every change
//   pnpm tsx scripts/repair-audit-findings.ts <repair> --apply  writes to the database
//
//   repairs:
//     --scaffolding    F1  strip build commentary out of learner-facing notes
//     --respell-dupes  F7  drop the bracketed respelling that repeats the respell field
//
// Both edit `content_items.notes` only. Nothing here touches a lesson, so no
// `version` moves: that counter guards SECTION INDEX DRIFT and bumping it for a
// text edit costs the learner their mission checkmarks and XP for nothing (see
// check-version-bumps.ts).
//
// Neither repair publishes. The database is canonical and a learner sees none of
// this until `content:publish` builds the next snapshot.
//
// ── WHY THESE NOTES NEEDED REPAIRING ──────────────────────────────────────────
//
// `noteFor()` hands `notes` straight to the card back, so whatever is in the
// column is what a learner reads. Authoring batches had been leaving their own
// working notes in it: stage and rung labels, internal item ids, section
// references, guard names, and the letter counts that decide whether the dictée
// runs in letters or word mode. A learner flipping one card was told that
// « mehm » is a measured false positive of hasPlainNasalFor.
//
// The repair is deliberately SENTENCE-level rather than note-level. Most of
// these notes are a real teaching line followed by a build line, and throwing
// the whole note away would lose content that is worth reading.
import './env';
import { describeTarget } from './env';

const APPLY = process.argv.includes('--apply');

/** A sentence is build scaffolding, not teaching, if it matches any of these.
 *  Case matters where the plain word is legitimate French-teaching vocabulary:
 *  `le brouillon` is glossed "A first draft before the final copy" and must
 *  survive, while "FIRST DRAFT read « sur la même note »" must not. */
const NUM = 'one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|twenty-\\w+|thirty-\\w+|\\d+';

/** A letter count is only scaffolding when it is about the DICTÉE THRESHOLD.
 *  The phonics themes count letters for a completely different and legitimate
 *  reason — "Eight letters, four sounds", "three letters, one sound" — and an
 *  earlier draft of this list deleted 69 of those. So a sentence that also
 *  talks about sounds is teaching and stays. */
const COUNTS_LETTERS = new RegExp(`\\b(${NUM})[\\s-]+letters?\\b`, 'i');
/** The whole sentence is the count and nothing else: "Twelve letters." */
const BARE_COUNT = new RegExp(`^\\W*(${NUM})[\\s-]+letters?\\W*$`, 'i');
const DICTEE_TALK = /\b(word mode|letters mode|dictée limit|dicteeMode|dictation drill|at the limit|the dictée (takes|can take|cannot take|is))\b/i;

const SCAFFOLD: RegExp[] = [
  // Dictée-threshold reasoning, and ONLY that. Two narrow shapes: a count sitting
  // next to the mode it selects, or a sentence that is nothing but a count.
  // Anything wider deletes real teaching — the phonics themes count letters to
  // teach spelling against sound ("Two letters at the front do one job, and the
  // d at the back does none"), and two earlier drafts of this list took those
  // out along with the scaffolding.
  (() => {
    const re = { test: (s: string) => (COUNTS_LETTERS.test(s) && DICTEE_TALK.test(s)) || BARE_COUNT.test(s) };
    return re as RegExp;
  })(),
  /\b(word mode|letters mode|dictée limit|dicteeMode|dictation drill)\b/i,
  /\bthe dictée (takes|can take|cannot take|is)\b/i,
  // Internal identifiers and document references.
  /\bfr\.(sons|a1|a2|b1|b2|c1)\.[a-z-]+\.\d+/,
  /§\s?[0-9A-Z]/,
  /\b(STAGE|RUNG|Turn) \d/,
  /\b[A-Z_]{4,}_[A-Z_]{4,}\b/,            // PROBLEME_FALSE_POSITIVE and friends
  // Build-process talk.
  /\b(IMPORTED|NOT authored|re-authored|FIRST DRAFT)\b/,
  /\b(hasPlainNasal\w*|commonErrors|deckTranche)\b/,
  /\b(false positive|corpus-wide|the probe|the brief|this build|the manifest|published rows|published sentences|zero times|claimed at|claimed \d)\b/i,
];

const isScaffold = (s: string) => SCAFFOLD.some((re) => re.test(s));

/** Split on sentence ends, keeping the punctuation with its sentence.
 *
 *  Two things this has to get right. French spaces its « ! » and « ? », so a
 *  bare /[.!?]\s/ split cuts « Ce sera tout ? » in half and strands the closing
 *  guillemet: hence the lookahead refusing to split before a closing quote. And
 *  a French sentence often opens lowercase on the word being discussed ("ne
 *  outside, pronoun and verb inside"), so requiring a capital would glue it to
 *  the build sentence in front of it and take it down with it — which an
 *  earlier draft did. */
function sentences(note: string): string[] {
  return note.split(/(?<=[.!?])(?!\s*[»"'’])\s+/u).filter((s) => s.trim() !== '');
}

function stripScaffolding(note: string): string | null {
  const kept = sentences(note).filter((s) => !isScaffold(s));
  const out = kept.join(' ').replace(/\s{2,}/g, ' ').trim();
  return out === '' ? null : out;
}

/** F4: the liaison tie, U+203F UNDERTIE, has to come out of the corpus.
 *
 *  None of the app's fonts carry it, so it has always been drawn by an Android
 *  fallback, and the glyph that fallback has reads as a low underscore on a
 *  phone: « seh-t‿UHⁿ » arrives as « seh-t_UHⁿ ». A font change cannot fix that,
 *  because the fallback IS what is already drawing it. The project reached the
 *  same conclusion while authoring lesson 11 in A2 and stopped using the tie in
 *  new rows; 642 older rows still carry it.
 *
 *  The replacement keeps the teaching without the glyph: the carried consonant
 *  joins the syllable it is carried ONTO, which is what the tie was there to
 *  say. « soo-vahⁿ-t‿ahⁿ » becomes « soo-vahⁿ-tahⁿ ». Where the receiving
 *  syllable is stressed, and so capitalised, the consonant is capitalised with
 *  it, because the caps mark stress and a lone lowercase letter in front of one
 *  would break that: « seh-t‿UHⁿ » becomes « seh-TUHⁿ », never « seh-tUHⁿ ».
 *
 *  In IPA the tie is simply dropped: « sɛ.t‿œ̃ » is « sɛ.tœ̃ », which is the
 *  ordinary syllabification anyway. */
export function retieLiaison(s: string): string {
  // Uppercase the consonant run before the tie when the syllable after it is
  // capitalised; otherwise just close the gap.
  return s.replace(/([^\s\-.]*)‿(.)/gu, (_m, before: string, next: string) =>
    next === next.toUpperCase() && next !== next.toLowerCase()
      ? before.toUpperCase() + next
      : before + next
  );
}

/** F7: a note that OPENS with a bracketed respelling repeats what the card's
 *  own `respell` field already shows above it — and on 51 cards the two
 *  disagree, so the learner is given two pronunciations of one word in a single
 *  flip. The field wins; the copy in the note goes. */
function stripBracketRespell(note: string): string | null {
  const out = note.replace(/^\[[^\]]{1,60}\]\s*(·\s*)?/u, '').trim();
  return out === '' ? null : out;
}

type Row = { id: string; fr: string; notes: string; respell: string | null };

/** F4 edits three columns at once, so it does not share the notes-only path. */
async function repairUndertie(pool: import('pg').Pool) {
  const { rows } = await pool.query<{ id: string; fr: string; ipa: string | null; respell: string | null }>(
    `select id, fr, ipa, respell from content_items
      where status = 'published'
        and (fr like '%‿%' or ipa like '%‿%' or respell like '%‿%')
      order by id`
  );
  let n = 0;
  for (const r of rows) {
    const next = {
      fr: retieLiaison(r.fr),
      ipa: r.ipa === null ? null : retieLiaison(r.ipa),
      respell: r.respell === null ? null : retieLiaison(r.respell),
    };
    console.log(`\n${r.id}`);
    if (next.fr !== r.fr) console.log(`  fr       ${r.fr}\n        -> ${next.fr}`);
    if (next.ipa !== r.ipa) console.log(`  ipa      ${r.ipa}\n        -> ${next.ipa}`);
    if (next.respell !== r.respell) console.log(`  respell  ${r.respell}\n        -> ${next.respell}`);
    n++;
    if (APPLY) {
      await pool.query('update content_items set fr = $1, ipa = $2, respell = $3, updated_at = now() where id = $4', [
        next.fr, next.ipa, next.respell, r.id,
      ]);
    }
  }
  console.log(`\n${n} rows carry the tie.`);
  console.log(APPLY ? `Applied ${n} updates.` : 'Dry run. Nothing written. Re-run with --apply to write.');
}

async function main() {
  const which = process.argv.find((a) => a === '--scaffolding' || a === '--respell-dupes' || a === '--undertie');
  if (!which) {
    console.error('Pick a repair: --scaffolding, --respell-dupes or --undertie');
    process.exit(2);
  }
  if (!process.env.DATABASE_URL) {
    console.error('No DATABASE_URL. This repair edits the canonical database; it must not run against PGlite.');
    process.exit(2);
  }
  describeTarget();

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });

  if (which === '--undertie') {
    await repairUndertie(pool);
    await pool.end();
    return;
  }

  // `notes` doubles as a JSON tile payload for the Sentence Builder — see
  // noteFor(). Those are not prose and must never be rewritten as if they were.
  const { rows } = (await pool.query(
    `select id, fr, notes, respell from content_items
      where status = 'published' and notes is not null and btrim(notes) <> '' and notes not like '{%'
      order by id`
  )) as { rows: Row[] };

  const transform = which === '--scaffolding' ? stripScaffolding : stripBracketRespell;
  const changes: { id: string; fr: string; before: string; after: string | null }[] = [];
  for (const r of rows) {
    // Only strip the bracket when the card has a respell FIELD to fall back
    // on. On the phonics error cards the bracketed note is the CORRECTION and
    // nothing else carries it — « beau said as [bɛo] » reveals « beau » and the
    // note « [bo] ». Clearing that would delete the answer, which a first pass
    // of this script would have done to 98 cards.
    if (which === '--respell-dupes' && (!/^\[/.test(r.notes) || !r.respell?.trim())) continue;
    const after = transform(r.notes);
    if (after !== r.notes) changes.push({ id: r.id, fr: r.fr, before: r.notes, after });
  }

  for (const c of changes) {
    console.log(`\n${c.id}  « ${c.fr} »`);
    console.log(`  -  ${c.before}`);
    console.log(`  +  ${c.after ?? '(note removed)'}`);
  }
  const emptied = changes.filter((c) => c.after === null).length;
  console.log(`\n${changes.length} notes change, ${emptied} become empty and are cleared.`);

  if (!APPLY) {
    console.log('Dry run. Nothing written. Re-run with --apply to write.');
    await pool.end();
    return;
  }

  const client = await pool.connect();
  try {
    await client.query('begin');
    for (const c of changes) {
      await client.query('update content_items set notes = $1, updated_at = now() where id = $2', [c.after, c.id]);
    }
    await client.query('commit');
    console.log(`Applied ${changes.length} updates.`);
  } catch (e) {
    await client.query('rollback');
    throw e;
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
