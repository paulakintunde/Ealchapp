// Flip the Examiner paywall, reversibly and out loud.
//
// examGateOn ships FALSE — the gate is wired and open, on purpose: a gate added
// later under launch pressure is a gate nobody has ever exercised, and the
// first person to exercise it is a paying customer (see
// ealch-v2/src/utils/examGate.logic.ts's header).
//
// Exercising it therefore means flipping this key, on the live row, and
// flipping it back. Doing that with a hand-typed UPDATE is how a test flag
// gets left on, so it lives here instead: every run prints the before and
// after state, and --show changes nothing.
//
// Phase 5 (PAY-02) owns the real flip. Read
// .planning/phases/04-.../04-07-SUMMARY.md first: an attempt begun while the
// authorization service is unreachable has no exam_attempts row and will be
// refused at grading once this flag is true.
import './env';
import { Pool } from 'pg';
import { describeTarget } from './env';

const USAGE = [
  'usage:',
  '  pnpm tsx scripts/set-exam-gate.ts --show                        print current state, write nothing',
  '  pnpm tsx scripts/set-exam-gate.ts --on [--free-papers N]         set examGateOn: true (and examFreePapers: N if given)',
  '  pnpm tsx scripts/set-exam-gate.ts --off                          set examGateOn: false',
].join('\n');

type State = { gate: boolean | null; free: number | null };

async function readState(c: import('pg').PoolClient): Promise<State> {
  const r = await c.query<{ gate: boolean | null; free: number | null }>(
    `select config->'examGateOn' as gate, config->'examFreePapers' as free
       from public.system_config
      where id = 'active'`,
  );
  const row = r.rows[0] ?? { gate: null, free: null };
  return { gate: row.gate, free: row.free };
}

function printState(label: string, s: State): void {
  console.log(`${label}: examGateOn=${s.gate} examFreePapers=${s.free}`);
}

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL unset — refusing to flip a flag on a throwaway PGlite database');
  }

  const args = process.argv.slice(2);
  const mode = args.includes('--on') ? 'on' : args.includes('--off') ? 'off' : args.includes('--show') ? 'show' : args.length === 0 ? 'show' : 'invalid';

  if (mode === 'invalid') {
    console.error(USAGE);
    process.exit(1);
  }

  let freePapers: number | undefined;
  const fpIdx = args.indexOf('--free-papers');
  if (fpIdx !== -1) {
    const raw = args[fpIdx + 1];
    const n = Number(raw);
    if (!Number.isInteger(n) || n < 0) {
      console.error(`--free-papers must be an integer >= 0 (got "${raw ?? ''}")`);
      console.error(USAGE);
      process.exit(1);
    }
    freePapers = n;
  }

  console.log('target:', describeTarget());

  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const before = await readState(c);
    printState('before', before);

    if (mode === 'show') {
      return;
    }

    const patch: Record<string, unknown> = { examGateOn: mode === 'on' };
    if (freePapers !== undefined) patch.examFreePapers = freePapers;

    const res = await c.query(
      `update public.system_config
          set config = config || $1::jsonb
        where id = 'active'`,
      [JSON.stringify(patch)],
    );
    if (res.rowCount !== 1) {
      throw new Error(`expected to update exactly 1 row (id='active'), updated ${res.rowCount}`);
    }

    const after = await readState(c);
    printState('after', after);

    const expectedGate = mode === 'on';
    if (after.gate !== expectedGate) {
      throw new Error(`examGateOn after write is ${after.gate}, expected ${expectedGate}`);
    }
    if (freePapers !== undefined && after.free !== freePapers) {
      throw new Error(`examFreePapers after write is ${after.free}, expected ${freePapers}`);
    }

    if (mode === 'on') {
      console.warn('⚠  the Examiner paywall is now LIVE. Run with --off to restore. Shipped default is OFF.');
    }
  } finally {
    c.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
