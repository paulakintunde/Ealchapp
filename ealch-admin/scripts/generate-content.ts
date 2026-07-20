// CLI entry point for the generation pipeline (Workstream 4). Talks to the
// DB directly, same as every other scripts/*.ts file — no HTTP, no admin
// session. Item-target generation only; see src/lib/generation/pipeline.ts.
//
// Usage:
//   pnpm content:generate --template=tpl.item.vocab-word --level=a1 --theme=cafe --count=20
import './env';
import { generateContent } from '../src/lib/generation/pipeline';
import type { GenerationJob } from '../src/lib/generation/types';

function die(msg: string): never {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
}

function parseFlags(argv: string[]): Record<string, string> {
  const flags: Record<string, string> = {};
  for (const arg of argv) {
    const m = /^--([a-zA-Z0-9_-]+)=(.*)$/.exec(arg);
    if (m) flags[m[1]] = m[2];
  }
  return flags;
}

async function main() {
  const flags = parseFlags(process.argv.slice(2));
  const { template, level, theme, count } = flags;

  if (!template || !level || !theme || !count) {
    die(
      'usage: pnpm content:generate --template=<id> --level=<level> --theme=<theme> --count=<n>\n' +
        '  e.g.  pnpm content:generate --template=tpl.item.vocab-word --level=a1 --theme=cafe --count=20'
    );
  }
  const countNum = Number(count);
  if (!Number.isInteger(countNum) || countNum < 1 || countNum > 100) {
    die(`--count must be an integer 1..100, got "${count}"`);
  }

  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Generation reads/writes the canonical database; it must not run against PGlite.');
  }

  // A local Drizzle connection, NOT '../src/db' — that module imports
  // 'server-only', which throws at runtime outside a Next.js server context.
  // Same reason publish-content.ts uses a raw pg.Pool instead of '@/db'.
  const { drizzle } = await import('drizzle-orm/node-postgres');
  const { Pool } = await import('pg');
  const schema = await import('../src/db/schema');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const d = drizzle(pool, { schema });

  const job: GenerationJob = {
    templateId: template,
    target: { entity: 'item', level, theme, count: countNum },
    requestedBy: 'cli',
  };

  console.log(`→ generating ${countNum} item(s) — template "${template}", level "${level}", theme "${theme}"`);
  const result = await generateContent(d, job);
  await pool.end();

  if (!result.ok) die(result.error);

  console.log(`\n✓ created ${result.createdIds.length} draft item(s) via ${result.model}:`);
  for (const id of result.createdIds) console.log(`  · ${id}`);
  console.log(`\n  Review them at /admin/content/items?level=${level}&theme=${theme}&status=draft\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
