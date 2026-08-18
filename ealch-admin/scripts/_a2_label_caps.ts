// DID THE CAPITAL LAND IN THE RIGHT PLACE?
//
// A citation is built at interpolation time, so whether it needs a capital is a
// fact about the sentence around it and not about the citation. The source pass
// can only see the literal text of a line: `${LEUR_RULE} ${unitRef(X)}` looks
// mid-sentence to it while LEUR_RULE ends in a full stop.
//
// So the capital is decided in source and CHECKED HERE, on the rendered string,
// in both directions:
//
//   lowercase after a full stop   « ... works. lesson 20 in A1 gave you ... »
//   capital mid-sentence          « ... which Lesson 20 in A1 gave you ... »
//
// Reads the SEED, so it sees what a learner will actually read.
//
//   npx tsx scripts/_a2_label_caps.ts [a2.13]

import seed from '../../ealch-v2/src/content/seed.json' with { type: 'json' };

const only = process.argv[2];

const strs = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strs(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strs(x, out));
  return out;
};

type Unit = { id: string; seq: number; lessonIds?: string[] };
const units = (seed.units as unknown as Unit[]).filter((u) => u.id.startsWith('a2.'));
const lessons = seed.lessons as unknown as Array<{ id: string }>;

// A sentence ends, whitespace follows, and the next word is a lowercase
// « lesson ». The quotation marks the band uses count as sentence openers too.
const LOWER_AFTER_STOP = /[.!?…]["»']?\s+(lesson \d+)/g;
// A capital « Lesson » that follows a lowercase word, which is mid-sentence.
const CAPS_MIDSENTENCE = /(?<=[a-zà-ÿ,;:]\s)(Lesson \d+)/g;

let bad = 0;
for (const u of units.sort((a, b) => Number(a.seq) - Number(b.seq))) {
  if (only && u.id !== only) continue;
  for (const lid of u.lessonIds ?? []) {
    const L = lessons.find((l) => l.id === lid);
    if (!L) continue;
    const found: string[] = [];
    for (const s of strs(L)) {
      for (const m of s.matchAll(LOWER_AFTER_STOP)) {
        found.push(`lowercase  ...${s.slice(Math.max(0, m.index - 34), m.index + 26).replace(/\s+/g, ' ')}...`);
      }
      for (const m of s.matchAll(CAPS_MIDSENTENCE)) {
        found.push(`mid-caps   ...${s.slice(Math.max(0, m.index - 34), m.index + 26).replace(/\s+/g, ' ')}...`);
      }
    }
    if (found.length) {
      bad += found.length;
      console.log(`\n${lid}  (${found.length})`);
      for (const f of found.slice(0, 8)) console.log(`   ${f}`);
      if (found.length > 8) console.log(`   ... and ${found.length - 8} more`);
    }
  }
}
console.log(bad ? `\n${bad} citation${bad === 1 ? '' : 's'} capitalised wrongly` : '\ncapitalisation clear on every A2 lesson in the seed');
