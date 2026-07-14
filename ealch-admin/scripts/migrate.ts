// Applies ./drizzle SQL migrations to whichever database is configured
// (node-postgres when DATABASE_URL is set, embedded PGlite otherwise).
import { mkdirSync } from 'node:fs';
import * as schema from '../src/db/schema';

async function main() {
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
