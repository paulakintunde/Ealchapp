import { readFileSync } from 'node:fs';
const seed = JSON.parse(readFileSync('../ealch-v2/src/content/seed.json', 'utf8')) as {
  lessons: { id: string; intro?: string }[];
};
const RE = /\b(?:sons|a1|a2|b1|b2|c1)\.\d{2}\b/gi;
let withId = 0;
for (const l of seed.lessons) {
  const hits = [...new Set((l.intro ?? '').match(RE) ?? [])];
  if (hits.length) { withId += 1; console.log(`${l.id.padEnd(12)} ${hits.join(', ')}`); }
}
console.log(`\n${withId} of ${seed.lessons.length} lesson intros name a unit id.`);
