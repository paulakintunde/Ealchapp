// One-time extraction: Lexique383.tsv (142,694 rows, all inflected forms of
// ~50k lemmas) -> the two committed CSVs in this directory. Not part of the
// app build; run manually only when regenerating from a newer Lexique
// release (see README.md).
//
// Keyed by ORTHO (the exact surface word), not by lemma. Two real cases
// forced this after spot-checking the raw data:
//
//  1. French pairs a single dictionary lemma across BOTH genders for
//     agent/animal nouns — "chat"(m)/"chatte"(f) and "chien"(m)/"chienne"(f)
//     share one `lemme` in Lexique383 but are two distinct surface words an
//     author actually writes ("un chat" vs "une chatte"). Grouping by lemma
//     makes these look ambiguous and drops them; each ortho's OWN row
//     already carries its own correct, unambiguous genre, so resolving
//     ortho-first fixes this with no fallback needed.
//  2. Lexique383 leaves `genre` blank on a real share of singular lemma rows
//     that ARE single-gender ("maison"/"voiture" are blank on their own row
//     but filled `f` on their plural "maisons"/"voitures" row). For an ortho
//     with no genre of its own, falling back to its lemma's sibling rows
//     recovers these, but ONLY when every sibling with a genre agrees — an
//     ortho whose lemma siblings disagree (or are all blank, like "livre"
//     m. book / f. pound) is left unresolved rather than guessed.
import { readFileSync, writeFileSync } from 'node:fs';

const SRC = process.argv[2];
const OUT_DIR = process.argv[3];
if (!SRC || !OUT_DIR) {
  console.error('usage: node extract-lexique.mjs <path/to/Lexique383.tsv> <output-dir>');
  process.exit(1);
}

const raw = readFileSync(SRC, 'utf8');
const lines = raw.split('\n');
const header = lines[0].split('\t');
const col = Object.fromEntries(header.map((h, i) => [h, i]));

function csvField(s) {
  if (s == null) return '';
  const str = String(s);
  return /[",\n]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
}

const orthoOwnGenre = new Map(); // ortho -> Set<gender>
const orthoFreq = new Map();     // ortho -> freq (this row's lemma-level freq)
const orthoLemma = new Map();    // ortho -> lemma key
const lemmaGenres = new Map();   // lemma -> Set<gender>  (every NOM row of this lemma)
const freqByLemma = new Map();   // lemma -> freq

for (let i = 1; i < lines.length; i++) {
  const line = lines[i];
  if (!line) continue;
  const f = line.split('\t');
  const lemme = f[col.lemme]?.trim();
  const ortho = f[col.ortho]?.trim();
  if (!lemme || !ortho) continue;
  const cgram = f[col.cgram];
  const genre = f[col.genre];
  const islem = f[col.islem];
  const lemmaKey = lemme.toLowerCase();
  const orthoKey = ortho.toLowerCase();
  const freq = Math.max(Number(f[col.freqlemfilms2]) || 0, Number(f[col.freqlemlivres]) || 0);

  if (islem === '1') {
    freqByLemma.set(lemmaKey, Math.max(freqByLemma.get(lemmaKey) ?? 0, freq));
  }

  if (cgram !== 'NOM') continue;
  orthoLemma.set(orthoKey, lemmaKey);
  orthoFreq.set(orthoKey, Math.max(orthoFreq.get(orthoKey) ?? 0, freq));

  if (genre === 'm' || genre === 'f') {
    if (!orthoOwnGenre.has(orthoKey)) orthoOwnGenre.set(orthoKey, new Set());
    orthoOwnGenre.get(orthoKey).add(genre);
    if (!lemmaGenres.has(lemmaKey)) lemmaGenres.set(lemmaKey, new Set());
    lemmaGenres.get(lemmaKey).add(genre);
  }
}

let resolvedDirect = 0;
let resolvedFallback = 0;
let droppedAmbiguousOwn = 0;
let droppedAmbiguousFallback = 0;
let droppedNoData = 0;
const genderCsv = ['word,gender,freq'];

for (const orthoKey of orthoLemma.keys()) {
  const own = orthoOwnGenre.get(orthoKey);
  let gender;
  if (own && own.size === 1) {
    [gender] = own;
    resolvedDirect++;
  } else if (own && own.size > 1) {
    droppedAmbiguousOwn++;
    continue;
  } else {
    const lemmaKey = orthoLemma.get(orthoKey);
    const siblings = lemmaGenres.get(lemmaKey);
    if (siblings && siblings.size === 1) {
      [gender] = siblings;
      resolvedFallback++;
    } else if (siblings && siblings.size > 1) {
      droppedAmbiguousFallback++;
      continue;
    } else {
      droppedNoData++;
      continue;
    }
  }
  const freq = orthoFreq.get(orthoKey) ?? freqByLemma.get(orthoLemma.get(orthoKey)) ?? 0;
  genderCsv.push(`${csvField(orthoKey)},${gender},${freq.toFixed(2)}`);
}

let freqRows = 0;
const freqCsv = ['lemma,freq'];
for (const [lemma, freq] of freqByLemma) {
  freqCsv.push(`${csvField(lemma)},${freq.toFixed(2)}`);
  freqRows++;
}

writeFileSync(`${OUT_DIR}/lexique-gender.csv`, genderCsv.join('\n') + '\n', 'utf8');
writeFileSync(`${OUT_DIR}/lexique-freq.csv`, freqCsv.join('\n') + '\n', 'utf8');

console.log(`gender lexicon: ${genderCsv.length - 1} words ` +
  `(${resolvedDirect} direct, ${resolvedFallback} lemma-fallback; ` +
  `dropped: ${droppedAmbiguousOwn} ambiguous-own, ${droppedAmbiguousFallback} ambiguous-fallback, ${droppedNoData} no-data)`);
console.log(`frequency table: ${freqRows} lemmas`);
