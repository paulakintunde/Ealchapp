import { readFileSync } from 'node:fs';

const seed = JSON.parse(readFileSync('../ealch-v2/src/content/seed.json', 'utf8'));

const strs = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strs(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strs(x, out));
  return out;
};
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const countOf = (hay: string, n: string) =>
  (hay.match(new RegExp(`(?<![\\p{L}\\p{N}])${esc(n)}(?![\\p{L}\\p{N}])`, 'giu')) ?? []).length;

const surface: string[] = [];
for (const L of seed.lessons.filter((l: any) => l.level === 'a2' && !l.id.startsWith('a2.35'))) {
  surface.push(
    ...strs(L.sections), ...strs(L.sheets ?? []), ...strs(L.terms ?? {}),
    L.intro ?? '', ...strs(L.overview ?? {}), ...strs(L.drills ?? []),
  );
}
const band = surface.join('\n');

const WORDS = [
  'auxiliary', 'auxiliaries', 'participle', 'participles', 'past participle',
  'clitic', 'clitics', 'proform', 'anaphoric', 'antecedent', 'referent',
  'nominal', 'substantive', 'paradigm', 'paradigms', 'inflection', 'inflections',
  'morphology', 'allomorph', 'noun phrase', 'head noun', 'partitive', 'partitives',
  'periphrastic', 'suppletive', 'valency', 'intransitive', 'transitive',
  'orthographic', 'phonological', 'deictic', 'infinitive', 'infinitives',
  'conjugate', 'conjugated', 'conjugation', 'determiner', 'determiners',
  'subjunctive', 'conditional', 'imperfect', 'stem', 'stems',
  'adjective', 'adjectives', 'adverb', 'adverbs', 'pronoun', 'pronouns',
  'superlative', 'superlatives', 'comparative', 'comparatives', 'reflexive',
  'preposition', 'prepositions', 'tense', 'tenses', 'plural', 'feminine',
  'masculine', 'verb', 'noun', 'describing word', 'past form', 'naming form',
];

console.log('=== A2 BAND, learner surfaces ===');
for (const w of WORDS) { const n = countOf(band, w); if (n) console.log(`  ${w.padEnd(18)} ${n}`); }
console.log('\n=== ZERO IN THE BAND ===');
console.log('  ' + WORDS.filter((w) => countOf(band, w) === 0).join(' · '));
