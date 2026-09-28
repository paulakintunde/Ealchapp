/* ONE-SHOT CODEMOD, to run BEFORE the first `content:publish --packs`.
 *
 *   pnpm tsx scripts/lesson-data-seed-plus-packs.ts          report, write nothing
 *   pnpm tsx scripts/lesson-data-seed-plus-packs.ts --apply  rewrite the files
 *
 * The B1 and B2 lesson sources (scripts/data/b1, scripts/data/b2) look up the
 * rows they borrow (a2 and b1 items) in seed.json:
 *
 *   import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
 *
 * Once --packs publishes, seed.json is the free core and those rows live in
 * seed-packs.json, so every such file throws at import ("no item fr.a2...")
 * and b1-import.ts, b1-merge-into-seed.ts and the preview fixture die with it.
 * This rewrites that one line to read seed.json plus the paid layer:
 *
 *   import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
 *   const seed = seedPlusPacks();
 *
 * Before packs the layer is empty and seedPlusPacks() IS seed.json, so the
 * rewrite changes nothing a lesson builds; it can land any time before the
 * first --packs publish. It is a codemod rather than a commit because another
 * session owns these files (B2 authoring); run it where they are merged.
 * Touches nothing but that import line.
 */
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const SEED_IMPORT = /^import (\w+) from '((?:\.\.\/)+)ealch-v2\/src\/content\/seed\.json' with \{ type: 'json' \};(\r?)$/m;

/** The rewritten source, or null when the file has no seed.json import. */
export function rewriteSeedImport(src: string): string | null {
  const m = src.match(SEED_IMPORT);
  if (!m) return null;
  const [, name, up, cr] = m;
  return src.replace(
    SEED_IMPORT,
    `import { seedPlusPacks } from '${up}ealch-v2/src/content/seed-plus-packs.ts';${cr}\nconst ${name} = seedPlusPacks();${cr}`,
  );
}

function main() {
  const apply = process.argv.includes('--apply');
  const root = fileURLToPath(new URL('./data/', import.meta.url));
  const hits: string[] = [];
  for (const band of ['b1', 'b2']) {
    const dir = join(root, band);
    for (const f of readdirSync(dir).filter((x) => x.endsWith('.ts')).sort()) {
      const p = join(dir, f);
      const out = rewriteSeedImport(readFileSync(p, 'utf8'));
      if (out === null) continue;
      hits.push(`${band}/${f}`);
      if (apply) writeFileSync(p, out, 'utf8');
    }
  }
  console.log(`${hits.length} lesson source(s) import seed.json${apply ? ', rewritten' : ' (dry: nothing written; --apply to rewrite)'}:`);
  for (const h of hits) console.log(`  ${h}`);
}

if (process.argv[1]?.replace(/\\/g, '/').endsWith('scripts/lesson-data-seed-plus-packs.ts')) main();
