/* Assembles scripts/data/routine-imported.ts from the generated manifest body,
 * so the 52 REUSED rows are never retyped. Run after _routine_manifest.ts.
 *
 *   node scripts/_routine_assemble.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';

const gen = readFileSync('scripts/data/_routine-manifest.gen.txt', 'utf8');
const m = gen.match(/export const REUSED: ReusedRow\[\] = \[([\s\S]*?)\];\s*$/);
if (!m) { console.error('no REUSED block in the generated manifest'); process.exit(1); }
const body = m[1].replace(/\n\s*why: 'TODO',/g, '').trimEnd() + '\n';

const imported = gen.match(/export const IMPORTED: ImportedRow\[\] = \[([\s\S]*?)\];/);
const nImported = ((imported?.[1] ?? '').match(/^  \{/gm) || []).length;
if (nImported !== 0) {
  console.error(`${nImported} rows landed in IMPORTED. routines was measured fully inside SEED_CUT.themes; re-measure the theme before trusting the brief.`);
  process.exit(1);
}

const header = `// a1.25's REUSED manifest: a RECORDED READ of Postgres taken on 2026-08-07 by
// scripts/_routine_manifest.ts, classified against seed.json, so the batch can
// verify these rows field by field without anybody retyping one.
//
// NOTHING BELOW WAS RETYPED. Regenerate with:
//
//     pnpm tsx scripts/_routine_manifest.ts > scripts/data/_routine-manifest.gen.txt
//     node scripts/_routine_assemble.mjs
//
// ── THERE IS NO IMPORTED ARRAY, AND THAT IS THE FINDING ──────────────────────
//
// a1.22 shipped 40 IMPORTED rows because pays-et-nationalites is OUTSIDE
// SEED_CUT.themes and every row it named was absent from the seed. a1.13 shipped
// 48 for the same reason with couleurs.
//
// routines IS INSIDE THE CUT: 338 published in Postgres, 338 in the seed. The
// generator wanted 52 rows and classified 52 REUSED and 0 IMPORTED. That is why
// this merge is the simple case: no row has to be carried through the cut, and
// no card can ship blank from a theme mismatch.
//
// The assembler EXITS 1 if a regeneration ever puts a row in IMPORTED, because
// that would mean the theme has changed shape and the brief's central claim
// needs re-measuring before anything else in it is trusted.
//
// ── WHY EACH GROUP IS HERE ───────────────────────────────────────────────────
//
// The justification is written per GROUP rather than per ROW. a1.22 wrote one
// per row and had four rows. This lesson has fifty-two, all doing one of ten
// jobs, and fifty-two hand-written justifications is noise that stops being
// read. GROUP_WHY holds the text as data so the batch can print it and the test
// can check every group is accounted for.
//
// respell and drills are recorded AS THEY ARE TODAY, BEFORE this build's
// repairs. The batch compares them against the live database and dies on drift,
// then applies RESPELL_REPAIRS, RESPELL_ADDITIONS and DRILL_ADDITIONS from
// routine-corpus.ts on top. A manifest holding the corrected values would read
// as drift and stop the run, which is the trap a1.22 documented in its own
// header and which is reproduced here on purpose.

export type ReusedRow = {
  id: string;
  fr: string;
  en: string;
  respell: string | null;
  drills: string[];
};

export const GROUP_WHY: Record<string, string> = {
  'the parts of the day, and the two that take no article at all':
    'THE LESSON. Four take an article and two take nothing, and the corpus stores them that way without '
    + 'being asked to: .002 is stored as "le matin" and .035 as bare "midi". The contrast is not constructed '
    + 'here. It is already in the data, and the job is to stop a later author flattening it.',
  'the habit words that mark a day as every day':
    'The escape hatch. When the article alone feels ambiguous to a learner, "tous les jours" says the same '
    + 'thing out loud. Taught beside the article rather than given its own act.',
  'the morning, in the order it happens':
    'The taught core of act 3, in sequence, because the canDo is "from getting up to going to bed" and a set '
    + 'of verbs in no order does not deliver it. Five of the eight carry a se.',
  'the middle of the day':
    'The smallest group, deliberately. The midday of the canDo is mostly the midi and minuit exception, '
    + 'which act 2 already owns, so act 3 does not spend a second pass on it.',
  'the evening and the night':
    'The other end of the canDo, and where dormir finally arrives after being the word everybody expects '
    + 'to meet first.',
  'three objects the day is built around':
    'Enough to make the day concrete and not one more. "la douche" and "le cafe" are also rows a1.26 and '
    + 'a1.23 will want in other themes; here they are objects in a routine, never rooms and never food.',
  'the three conjugated frames the corpus already publishes':
    'The only reflexive persons this lesson puts on a screen. All three carried NO respelling and NO '
    + 'voiceflash, so all three are repaired by this build before anything displays them.',
  'the day in the first person, published sentences':
    'What the learner produces. Every one is a corpus row nobody wrote to teach this, which is the standard '
    + 'this project holds authored sentences to and the reason this lesson authors none.',
  'the day in the third person, and the articled part of the day in the wild':
    'Reading exposure. .090 fronts "Le matin," with a comma, which is the runner-up reframe surviving in '
    + 'ordinary French, and .160 does the same habitual meaning with "chaque matin" instead of the article.',
  'the second and third persons, which are the only ones with evidence':
    'tu and nous, which have real sentences behind them. vous and ils do not: 0 rows each in 27,353 '
    + 'published sentences, and that measurement is the argument for leaving the paradigm to a2.22.',
};

export const REUSED: ReusedRow[] = [
`;

writeFileSync('scripts/data/routine-imported.ts', header + body + '];\n');
const rows = (body.match(/^  \{/gm) || []).length;
const groups = (body.match(/── /g) || []).length;
console.log(`scripts/data/routine-imported.ts written: ${rows} REUSED rows in ${groups} groups, 0 IMPORTED`);
