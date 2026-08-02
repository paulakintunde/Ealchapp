// The curriculum spine authoring pass (CF-17 + master plan Phase 1).
//
// Gives 43 of the curriculum's units their spine: a CEFR-style canDo anchor,
// theme slugs where the unit has a lexical field, prerequisites where one unit
// genuinely assumes another, and the `level` backfill the schema has been
// waiting on.
//
// SCOPE, as of the 75-unit curriculum pass. This script no longer owns the
// whole Den and no longer sets display order at all:
//   · author-full-curriculum-spine.ts owns which units exist and their `seq`,
//     across all 75. It authors canDo/themes/prereqs inline for the units it
//     creates.
//   · this script owns the canDo/themes/prereqs of the original 43 only.
// Units outside its map are carried through untouched rather than treated as
// an error. The A1 resequencing this script used to perform is now dead (see
// SpinePatch.seq): two owners of `seq` produced duplicate positions.
//
// Prereqs are deliberately minimal: "earlier in the book" is sequence and
// lives in seq; only a gate the learner actually hits belongs in
// prereqUnitIds. A prereq wall over 43 units would be a lie in the other
// direction.
//
// Usage:
//   pnpm tsx scripts/update-spine.ts --dry-run    show the plan, write nothing
//   pnpm tsx scripts/update-spine.ts              apply, inside one transaction
//
// Idempotent: re-running applies the same values. This script writes the
// MANAGEMENT plane only — nothing reaches a phone until content:publish
// compiles a new snapshot.

// './env' MUST be imported first, or DATABASE_URL is unseen and this silently
// "updates" a throwaway PGlite database. See scripts/env.ts and the incident
// note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateUnit, type Unit } from '../../ealch-v2/src/content/schema.ts';

type SpinePatch = {
  /** DEAD FIELD — retained so the map below still type-checks, and deliberately
   *  NOT applied. Display order is now owned end to end by
   *  author-full-curriculum-spine.ts, which sequences all 75 units against the
   *  approved curriculum. The values still written here are the pre-75 A1
   *  ordering; re-applying them would reintroduce duplicate seqs and scramble
   *  the Den. Ordering has exactly one owner on purpose. */
  seq?: number;
  /** Sub-line correction (a1.05 gains everyday `on` alongside nous). */
  sub?: string;
  canDo: string;
  themes?: string[];
  prereqUnitIds?: string[];
};

// ── The spine, unit by unit ─────────────────────────────────────────────────

const SPINE: Record<string, SpinePatch> = {
  // SONS — the sound system. No lexical themes; the field is the mouth.
  'sons.01': { canDo: 'Can name the letters of the French alphabet and spell their own name aloud' },
  'sons.02': { canDo: 'Can produce the pure French vowels, including ou and eu, without gliding' },
  'sons.03': {
    canDo: 'Can hear and produce the nasal vowels of on, en and in',
    prereqUnitIds: ['sons.02'],
  },
  'sons.04': { canDo: 'Can produce the French r and the consonant sounds that differ from English' },
  'sons.05': {
    canDo: 'Can read é, è, ê, ë and ç and say what each mark changes',
    prereqUnitIds: ['sons.02'],
  },
  'sons.06': { canDo: 'Can spot the silent letters in written French and stop pronouncing them' },
  'sons.07': { canDo: "Can drop the vowel in je, le and la before a vowel sound, as in j'aime and l'école" },
  'sons.08': { canDo: 'Can keep syllables even and place the stress at the end of the phrase, the French way' },
  'sons.09': {
    canDo: 'Can apply the whole sound system in connected speech: nasals, silent letters, elision and rhythm together',
    // The masterclass is the putting-it-together unit; assuming everything
    // before it is its honest definition, not prereq inflation.
    prereqUnitIds: ['sons.01', 'sons.02', 'sons.03', 'sons.04', 'sons.05', 'sons.06', 'sons.07', 'sons.08'],
  },

  // A1 — resequenced so communicative payoff arrives early: pronouns and the
  // two survival verbs first, then negation and questions immediately after
  // (seq 6-8), then the noun system, then the lexical fields.
  'a1.01': {
    seq: 1,
    canDo: 'Can greet someone, ask how they are, and take leave, politely or informally',
    themes: ['salutations', 'politesse'],
  },
  'a1.02': { seq: 2, canDo: 'Can count to 100 and give a phone number and a price', themes: ['nombres'] },
  'a1.05': {
    seq: 3,
    sub: 'je, tu, il, elle, on, nous, vous, ils',
    canDo: 'Can pick the right subject pronoun, including tu versus vous, and everyday on for nous',
  },
  'a1.06': {
    seq: 4,
    canDo: 'Can say who they are, what they do and where they are from with être',
    themes: ['identite'],
    prereqUnitIds: ['a1.05'],
  },
  'a1.07': {
    seq: 5,
    canDo: 'Can say their age and what they have with avoir',
    themes: ['identite'],
    prereqUnitIds: ['a1.05'],
  },
  'a1.18': {
    seq: 6,
    canDo: 'Can turn any sentence they know negative with ne… pas',
    prereqUnitIds: ['a1.06', 'a1.07'],
  },
  'a1.19': {
    seq: 7,
    canDo: 'Can ask and answer yes-no questions with est-ce que and with intonation',
    prereqUnitIds: ['a1.06'],
  },
  'a1.20': {
    seq: 8,
    canDo: 'Can ask who, what, where, when and why questions',
    prereqUnitIds: ['a1.19'],
  },
  'a1.03': { seq: 9, canDo: 'Can tell masculine from feminine nouns and pick un or une' },
  'a1.04': {
    seq: 10,
    canDo: "Can pick le, la, l' or les for any noun they know",
    prereqUnitIds: ['a1.03'],
  },
  'a1.08': {
    seq: 11,
    canDo: 'Can say the day, the date and the time, and make a simple appointment',
    themes: ['temps', 'calendrier'],
    prereqUnitIds: ['a1.02'],
  },
  'a1.09': { seq: 12, canDo: 'Can name the seasons and say what happens in each', themes: ['temps'] },
  'a1.10': { seq: 13, canDo: "Can describe today's weather and understand a simple forecast", themes: ['meteo'] },
  'a1.11': { seq: 14, canDo: "Can point things out and describe them with c'est and il y a" },
  'a1.12': {
    seq: 15,
    canDo: 'Can name the colours and make them agree with the noun',
    themes: ['couleurs'],
    prereqUnitIds: ['a1.03'],
  },
  'a1.13': {
    seq: 16,
    canDo: 'Can describe people and things with common adjectives, agreed for gender',
    prereqUnitIds: ['a1.03'],
  },
  'a1.14': { seq: 17, canDo: 'Can introduce their family and say who is who', themes: ['famille'] },
  'a1.15': {
    seq: 18,
    canDo: 'Can say whose things are whose with mon, ma, mes and their kin',
    prereqUnitIds: ['a1.03'],
  },
  'a1.16': {
    seq: 19,
    canDo: 'Can put the adjective on the right side of the noun',
    prereqUnitIds: ['a1.13'],
  },
  'a1.17': {
    seq: 20,
    canDo: 'Can ask where something is and understand the answer',
    themes: ['ville'],
    prereqUnitIds: ['a1.20'],
  },
  'a1.21': { seq: 21, canDo: 'Can say where things are with sur, sous, dans, devant and derrière' },
  'a1.22': {
    seq: 22,
    canDo: 'Can say which country they are from and what nationality they are',
    themes: ['identite'],
    prereqUnitIds: ['a1.06'],
  },
  'a1.23': { seq: 23, canDo: 'Can name everyday food and say what they like and eat', themes: ['nourriture'] },
  'a1.24': { seq: 24, canDo: 'Can name the parts of the body and say what hurts', themes: ['corps', 'sante'] },
  'a1.25': {
    seq: 25,
    canDo: 'Can describe their day from getting up to going to bed',
    themes: ['routine'],
    prereqUnitIds: ['a1.08'],
  },
  'a1.26': {
    seq: 26,
    canDo: 'Can name the rooms and the furniture and say where things are at home',
    themes: ['maison'],
    prereqUnitIds: ['a1.21'],
  },

  // A2 — order unchanged; the spine fields are the change.
  'a2.01': {
    canDo: 'Can conjugate the -er, -ir and -re families in the present and use them in real sentences',
    prereqUnitIds: ['a1.05'],
  },
  'a2.02': {
    canDo: 'Can use aller, faire, venir, pouvoir and vouloir in the present',
    prereqUnitIds: ['a2.01'],
  },
  'a2.03': {
    canDo: 'Can form -ment adverbs and handle full adjective agreement, including beau, nouveau and vieux',
    prereqUnitIds: ['a1.13', 'a1.16'],
  },
  'a2.04': { canDo: 'Can pick à, de, en or chez, and dodge their classic traps' },
  'a2.05': {
    canDo: 'Can talk about the past with avoir and être, participles agreed where they must',
    prereqUnitIds: ['a2.01', 'a2.02'],
  },
  'a2.06': {
    canDo: 'Can replace nouns with le, la, lui, y and en, in the right slot',
    prereqUnitIds: ['a2.01'],
  },
  'a2.07': {
    canDo: 'Can handle shops, transport and the pharmacy in simple French',
    themes: ['courses', 'transport', 'sante'],
  },
  'a2.08': {
    canDo: 'Can compare things with plus… que and moins… que and point with celui-ci',
    prereqUnitIds: ['a1.13'],
  },
};

// ── Apply ───────────────────────────────────────────────────────────────────

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. The spine is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    const { rows } = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit'`
    );
    const byId = new Map(rows.map((r) => [r.body.id, r.body]));

    // Every patch must land on a real unit, and every unit must have a patch:
    // a partial spine is the "some rows honest, some not" state this pass
    // exists to end.
    const missing = Object.keys(SPINE).filter((id) => !byId.has(id));
    if (missing.length) die(`SPINE names units not in the DB: ${missing.join(', ')}`);

    // Units this map does not name are REPORTED, not fatal.
    //
    // This assertion was written when these 43 units were the whole curriculum,
    // and "a unit with no spine" then meant a genuine authoring omission. It
    // stopped meaning that twice over: b2.01 arrived on a band this script was
    // never about, and author-full-curriculum-spine.ts then took ownership of
    // the full 75-unit curriculum, authoring canDo/themes/prereqs inline as it
    // creates each unit. Its rows are not unpatched, they are patched
    // elsewhere, and failing here would make this script permanently unrunnable
    // for the 43 units it does still legitimately own.
    const unpatched = [...byId.keys()].filter((id) => !(id in SPINE));
    if (unpatched.length) {
      console.log(`\n  note: ${unpatched.length} units are outside this map and left untouched`);
      console.log(`  (owned by author-full-curriculum-spine.ts, or on a non-Den band):`);
      console.log(`    ${unpatched.sort().join(', ')}`);
    }

    // Build the post-state and validate it BEFORE writing anything.
    const next = new Map<string, Unit>();
    for (const [id, body] of byId) {
      const p = SPINE[id];
      // Outside this map: carried through untouched so the guards below still
      // see the WHOLE curriculum (a seq check over a subset proves nothing).
      if (!p) {
        next.set(id, body);
        continue;
      }
      const band = id.split('.')[0] as Unit['level'];
      next.set(id, {
        ...body,
        level: band, // the documented backfill: level restates the id's band
        // p.seq is intentionally NOT applied — see SpinePatch.seq.
        ...(p.sub !== undefined ? { sub: p.sub } : {}),
        canDo: p.canDo,
        ...(p.themes ? { themes: p.themes } : {}),
        ...(p.prereqUnitIds ? { prereqUnitIds: p.prereqUnitIds } : {}),
      });
    }

    const issues = [...next.values()].flatMap((u) => validateUnit(u, u.id));
    if (issues.length) die(`post-state fails validateUnit:\n${issues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);

    // Per-track seqs must be exactly 1..N — a gap or a dupe scrambles the Den.
    for (const track of ['sons', 'a1', 'a2'] as const) {
      const seqs = [...next.values()].filter((u) => u.track === track).map((u) => u.seq).sort((a, b) => a - b);
      const want = Array.from({ length: seqs.length }, (_, i) => i + 1);
      if (JSON.stringify(seqs) !== JSON.stringify(want)) die(`track ${track} seqs are not 1..${seqs.length}: ${seqs.join(',')}`);
    }

    // Every prereq must resolve inside the 43 (cross-track is fine and real:
    // a2 grammar genuinely assumes a1 grammar).
    for (const u of next.values()) {
      for (const p of u.prereqUnitIds ?? []) {
        if (!next.has(p)) die(`${u.id} requires unknown unit ${p}`);
      }
    }

    // Show the plan. Nothing is resequenced here any more, so the report is
    // about the spine fields this script actually owns.
    const patched = Object.keys(SPINE).length;
    console.log(`\n  ${patched} units patched (canDo/themes/prereqs), ${next.size - patched} carried through untouched.`);

    if (DRY_RUN) {
      console.log('\n✓ dry run — post-state valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    for (const [id, body] of next) {
      const res = await client.query(
        `update content_units set body = $1::jsonb, updated_at = now()
          where kind = 'curriculum_unit' and body->>'id' = $2`,
        [JSON.stringify(body), id]
      );
      if (res.rowCount !== 1) {
        await client.query('rollback');
        die(`update for ${id} touched ${res.rowCount} rows — rolled back, nothing changed`);
      }
    }
    await client.query('commit');
    console.log(`\n✓ spine applied to ${next.size} units. Run content:publish to ship it.\n`);
  } catch (e) {
    await client.query('rollback').catch(() => {});
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
