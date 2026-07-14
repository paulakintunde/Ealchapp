// Applies ./drizzle SQL migrations to whichever database is configured
// (node-postgres when DATABASE_URL is set, embedded PGlite otherwise).
//
// './env' MUST be imported first: without it this script never sees DATABASE_URL
// from .env, silently migrates a throwaway PGlite database instead of Supabase,
// and still prints "✓ migrations applied". See scripts/env.ts.
import './env';
import { mkdirSync } from 'node:fs';
import { describeTarget } from './env';
import * as schema from '../src/db/schema';

async function main() {
  // Say which database is about to be mutated. Silence here is how a migration
  // lands somewhere nobody intended.
  console.log(`→ ${describeTarget()}`);

  if (process.env.DATABASE_URL) {
    const { drizzle } = await import('drizzle-orm/node-postgres');
    const { migrate } = await import('drizzle-orm/node-postgres/migrator');
    const { Pool } = await import('pg');
    const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
    const db = drizzle(pool, { schema });
    await migrate(db, { migrationsFolder: './drizzle' });
    await pool.end();
  } else {
    const { drizzle } = await import('drizzle-orm/pglite');
    const { migrate } = await import('drizzle-orm/pglite/migrator');
    const { PGlite } = await import('@electric-sql/pglite');
    const dir = process.env.PGLITE_DIR ?? '.data/pglite';
    mkdirSync(dir, { recursive: true });
    const client = new PGlite(dir);
    const db = drizzle(client, { schema });
    await migrate(db, { migrationsFolder: './drizzle' });
    await client.close();
  }
  console.log('✓ migrations applied');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
