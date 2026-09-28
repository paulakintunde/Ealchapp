// The one-line codemod the B1/B2 lesson sources need before the first --packs
// publish (lesson-data-seed-plus-packs.ts).
import { strictEqual } from 'node:assert';
import { test } from 'node:test';
import { rewriteSeedImport } from './lesson-data-seed-plus-packs.ts';

test('rewrites the seed.json import to seedPlusPacks(), keeping the name, depth and line ending', () => {
  const src = "import x from 'y';\r\nimport seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };\r\nconst S = seed.items;\r\n";
  strictEqual(
    rewriteSeedImport(src),
    "import x from 'y';\r\nimport { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';\r\nconst seed = seedPlusPacks();\r\nconst S = seed.items;\r\n",
  );
  strictEqual(
    rewriteSeedImport("import corpus from '../../ealch-v2/src/content/seed.json' with { type: 'json' };\n"),
    "import { seedPlusPacks } from '../../ealch-v2/src/content/seed-plus-packs.ts';\nconst corpus = seedPlusPacks();\n",
  );
});

test('a file without the import is left alone', () => {
  strictEqual(rewriteSeedImport("// merged into seed.json later\nimport a from './a.ts';\n"), null);
});
