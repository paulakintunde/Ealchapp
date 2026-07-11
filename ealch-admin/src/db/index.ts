// Database client — dual driver.
// With DATABASE_URL set → node-postgres (production).
// Without → embedded PGlite (WASM Postgres persisted to .data/), so
// `pnpm db:migrate && pnpm db:seed && pnpm dev` boots with zero external deps.
import 'server-only';
import * as schema from './schema';

export type DB = ReturnType<typeof import('drizzle-orm/node-postgres').drizzle<typeof schema>>;

type GlobalWithDb = typeof globalThis & { __ealchDb?: DB; __ealchDbPromise?: Promise<DB> };
const g = globalThis as GlobalWithDb;

async function create(): Promise<DB> {
  if (process.env.DATABASE_URL) {
    const { drizzle } = await import('drizzle-orm/node-postgres');
    const { Pool } = await import('pg');
    const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 10 });
    return drizzle(pool, { schema }) as unknown as DB;
  }
  const { drizzle } = await import('drizzle-orm/pglite');
  const { PGlite } = await import('@electric-sql/pglite');
  const dataDir = process.env.PGLITE_DIR ?? '.data/pglite';
  const client = new PGlite(dataDir);
  return drizzle(client, { schema }) as unknown as DB;
}

export function db(): Promise<DB> {
  if (g.__ealchDb) return Promise.resolve(g.__ealchDb);
  if (!g.__ealchDbPromise) {
    g.__ealchDbPromise = create().then((d) => {
      g.__ealchDb = d;
      return d;
    });
  }
  return g.__ealchDbPromise;
}

export { schema };
