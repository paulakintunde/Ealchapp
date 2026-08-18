import { BILAN_A2_LESSONS } from './data/bilan-a2-lesson.ts';
import { JARGON, display, hasWord, countWord, PLAIN_PHRASE, TECHNICAL_WORD } from './data/bilan-a2-spread.ts';

for (const L of BILAN_A2_LESSONS) {
  const surface = [
    ...display(L.sections, 'sections'),
    ...display(L.sheets ?? [], 'sheets'),
    ...display(L.terms ?? {}, 'terms'),
    ...display(L.drills ?? [], 'drills'),
    ...display(L.intro ?? '', 'intro'),
    ...display(L.overview ?? {}, 'overview'),
  ];
  for (const { path, s } of surface) {
    for (const j of JARGON) {
      if (hasWord(s, j)) console.log(`${L.id}  ${j.toUpperCase().padEnd(14)} ${path}\n    ${s.slice(0, 150)}`);
    }
  }
  const all = surface.map((x) => x.s).join('\n');
  console.log(`${L.id}  ratio: "${PLAIN_PHRASE}" ${countWord(all, PLAIN_PHRASE)} against "${TECHNICAL_WORD}" ${countWord(all, TECHNICAL_WORD)}`);
}

const PAIRS: [string, string][] = [
  ['describing word', 'adjective'], ['past form', 'participle'],
  ['naming form', 'infinitive'], ['little word', 'clitic'], ['first word', 'auxiliary'],
];
let joint = '';
for (const L of BILAN_A2_LESSONS) {
  joint += [
    ...display(L.sections), ...display(L.sheets ?? []), ...display(L.terms ?? {}),
    ...display(L.drills ?? []), ...display(L.intro ?? ''), ...display(L.overview ?? {}),
  ].map((x) => x.s).join('\n');
}
console.log('\n=== plain against technical, both lessons ===');
for (const [p, t] of PAIRS) console.log(`  ${p.padEnd(16)} ${countWord(joint, p)}   ${t.padEnd(12)} ${countWord(joint, t)}`);
