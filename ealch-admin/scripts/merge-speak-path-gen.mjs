// Merge the speak-path gap-fill batches (scripts/data/gen/speak-path-gen/)
// into seed.json — with full validation, or refuse.
//
// Run AFTER the speak-path-gapfill workflow completes. Dry-run by default:
//   node ealch-admin/scripts/merge-speak-path-gen.mjs          # validate only
//   node ealch-admin/scripts/merge-speak-path-gen.mjs --write  # validate + merge
//
// This script APPENDS items only. It never bumps the corpus version and never
// publishes — content:publish stays a separate, deliberate step (seed.json
// runs ahead of the published DB during authoring; check git diff first).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const SEED = path.join(ROOT, 'ealch-v2', 'src', 'content', 'seed.json');
const GEN_DIR = path.join(ROOT, 'ealch-admin', 'scripts', 'data', 'gen', 'speak-path-gen');
const REPORT = path.join(GEN_DIR, 'merge-report.json');

const WRITE = process.argv.includes('--write');

// The ten expected batches and their targets (blueprint gap plan).
const EXPECTED = {
  'sons-alphabet': { level: 'sons', theme: 'alphabet', need: 82, ipa: true },
  'sons-voyelles': { level: 'sons', theme: 'voyelles', need: 90, ipa: true },
  'sons-nasales': { level: 'sons', theme: 'nasales', need: 165, ipa: true },
  'sons-liaisons': { level: 'sons', theme: 'liaisons', need: 165, ipa: true },
  'sons-rythme': { level: 'sons', theme: 'rythme', need: 165, ipa: true },
  'c1-nuances-et-registres': { level: 'c1', theme: 'nuances-et-registres', need: 165, ipa: false },
  'c1-rhetorique': { level: 'c1', theme: 'rhetorique', need: 160, ipa: false },
  'c1-francais-professionnel-avance': { level: 'c1', theme: 'francais-professionnel-avance', need: 165, ipa: false },
  'c1-culture-profonde': { level: 'c1', theme: 'culture-profonde', need: 161, ipa: false },
  'c1-discours-dexamen': { level: 'c1', theme: 'discours-dexamen', need: 165, ipa: false },
};

const REGISTERS = new Set(['familier', 'courant', 'soutenu']);
const norm = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/['’‘`]/g, ' ')
    .replace(/[«»"“”.,!?;:()[\]…\-–—]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
const wc = (s) => norm(s).split(' ').filter(Boolean).length;

const seed = JSON.parse(fs.readFileSync(SEED, 'utf8'));
const seedIds = new Set(seed.items.map((i) => i.id));
// fr-dedupe scoped per level: identical sentences across levels are allowed
// in the corpus, but a new item must not duplicate its own level.
const seedFrByLevel = new Map();
for (const i of seed.items) {
  if (!seedFrByLevel.has(i.level)) seedFrByLevel.set(i.level, new Set());
  seedFrByLevel.get(i.level).add(norm(i.fr));
}

const errors = [];
const report = { writeMode: WRITE, batches: {}, totals: { staged: 0, valid: 0 } };
const toMerge = [];
const batchIds = new Set();

for (const [name, exp] of Object.entries(EXPECTED)) {
  const file = path.join(GEN_DIR, `${exp.level}-${exp.theme}.json`);
  if (!fs.existsSync(file)) {
    errors.push(`${name}: staged file missing (${file})`);
    continue;
  }
  let batch;
  try {
    batch = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    errors.push(`${name}: unparseable JSON (${e.message})`);
    continue;
  }
  const items = Array.isArray(batch.items) ? batch.items : [];
  report.totals.staged += items.length;
  let valid = 0;
  const levelFr = seedFrByLevel.get(exp.level) ?? new Set();

  items.forEach((it, ix) => {
    const where = `${name}[${ix}] ${it.id ?? '(no id)'}`;
    const bad = (m) => errors.push(`${where}: ${m}`);

    if (typeof it.id !== 'string' || !it.id.startsWith(`fr.${exp.level}.${exp.theme}.`)) return bad('id malformed');
    if (seedIds.has(it.id)) return bad('id already in seed.json');
    if (batchIds.has(it.id)) return bad('id duplicated across batches');
    if (it.kind !== 'sentence') return bad(`kind ${it.kind}`);
    if (it.level !== exp.level || it.theme !== exp.theme) return bad('level/theme mismatch');
    if (typeof it.fr !== 'string' || !it.fr.trim()) return bad('fr empty');
    if (typeof it.en !== 'string' || !it.en.trim()) return bad('en empty');
    if (/[–—]/.test(it.fr + it.en + (it.notes ?? ''))) return bad('em/en dash present');
    if (/honest/i.test(it.fr + ' ' + it.en + ' ' + (it.notes ?? ''))) return bad('banned word "honest"');
    if (exp.ipa && (typeof it.ipa !== 'string' || !it.ipa.trim())) return bad('ipa missing (required for sons)');
    if (!Array.isArray(it.tags)) return bad('tags not an array');
    if (!Array.isArray(it.drills) || !it.drills.includes('sentence')) return bad('drills must include sentence');
    if (it.version !== 1) return bad('version must be 1');
    if (it.register !== undefined && !REGISTERS.has(it.register)) return bad(`register ${it.register}`);
    const w = wc(it.fr);
    if (w < 2 || w > 24) return bad(`word count ${w} out of range`);
    const k = norm(it.fr);
    if (levelFr.has(k)) return bad('fr duplicates an existing sentence at this level');

    levelFr.add(k);
    batchIds.add(it.id);
    toMerge.push(it);
    valid++;
  });

  report.batches[name] = { staged: items.length, valid, need: exp.need, shortfall: Math.max(0, exp.need - valid) };
  report.totals.valid += valid;
}

report.errors = errors;
fs.writeFileSync(REPORT, JSON.stringify(report, null, 2));

for (const [name, b] of Object.entries(report.batches)) {
  console.log(
    `${name.padEnd(34)} staged ${String(b.staged).padStart(3)}  valid ${String(b.valid).padStart(3)}  need ${String(b.need).padStart(3)}${b.shortfall ? '  SHORT ' + b.shortfall : ''}`
  );
}
console.log(`\n${report.totals.valid}/${report.totals.staged} staged items valid. ${errors.length} error(s). Report: ${REPORT}`);
if (errors.length) {
  console.log(errors.slice(0, 20).map((e) => '  ✗ ' + e).join('\n') + (errors.length > 20 ? `\n  … and ${errors.length - 20} more (see report)` : ''));
}

if (!WRITE) {
  console.log('\nDry run — seed.json untouched. Re-run with --write to merge.');
  process.exit(errors.length ? 1 : 0);
}
if (errors.length) {
  console.log('\nREFUSING to merge with validation errors. seed.json untouched.');
  process.exit(1);
}

seed.items.push(...toMerge);
fs.writeFileSync(SEED, JSON.stringify(seed, null, 2));
console.log(`\nMerged ${toMerge.length} items into seed.json (items now ${seed.items.length}). Version NOT bumped; publish is a separate step.`);
