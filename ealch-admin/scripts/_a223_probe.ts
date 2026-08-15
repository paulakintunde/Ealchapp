/* a2.23 pre-authoring measurements. Throwaway.
 *
 *   pnpm tsx scripts/_a223_probe.ts
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { fold } from '../../ealch-v2/src/content/answer.logic.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import type { Item, Lesson } from '../../ealch-v2/src/content/schema.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(join(here, '../../ealch-v2/src/content/seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[]; units: { id: string; lessonIds?: string[] }[];
};

const MACHINE = new Set(['id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill', 'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId', 'clipIds', 'buckets', 'restPoints']);
const isId = (s: string) => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (!MACHINE.has(k)) display(x, out);
  return out;
}
const surface = (l: Lesson) => [
  ...display(l.sections), ...display(l.sheets ?? []), ...display(l.terms ?? {}),
  ...display(l.acts ?? []), ...display(l.drills ?? []), ...display(l.overview ?? {}),
  l.intro ?? '', l.reframe ?? '',
];

console.log('\n══ 1. THE FIVE NEGATION STATEMENTS ══════════════════════════════════');
const NEG = 'Wrap the verb that changed, not the one carrying the meaning.';
const A118 = 'Wrap the verb, then ask what the verb was.';
const EXT = 'Both words changed for the subject, so both go inside the wrap.';
for (const id of ['a1.18.l1', 'a2.19.l1', 'a2.05.l1', 'a2.21.l1', 'a2.22.l1']) {
  const l = seed.lessons.find((x) => x.id === id);
  if (!l) { console.log(`  ${id.padEnd(10)} NOT IN SEED`); continue; }
  const s = surface(l);
  console.log(`  ${id.padEnd(10)} reframe = « ${l.reframe} »`);
  console.log(`  ${''.padEnd(10)}   a2.19 line x${s.filter((t) => t.includes(NEG)).length}  a1.18 line x${s.filter((t) => t.includes(A118)).length}  a2.22 extension x${s.filter((t) => t.includes(EXT)).length}`);
}

console.log('\n══ 2. THE STRINGS a2.23 MUST QUOTE, READ OFF THE SHIPPED LESSONS ════');
const AGREEMENT = 'Add nothing for a man on his own, e for a woman, s for more than one, and es for more than one woman.';
const A201 = 'Four of the six forms sound the same, so the pronoun carries the person.';
const A221R = 'After être, the second word ends like a describing word.';
const A222R = 'The pronoun changes with the subject, because it is the subject.';
const A205R = 'One verb, two words, and the small ones go in between.';
const A220R = 'Do not build these. Reach for the group it is in.';
const PRESENT = 'In the present nothing on the end of the verb knows who the subject is. Only the extra word changes.';
for (const [label, str, where] of [
  ['AGREEMENT_RULE', AGREEMENT, 'a2.21.l1'],
  ['A201_REFRAME', A201, 'a2.21.l1'],
  ['A201 own reframe', A201, 'a2.01.l1'],
  ['a2.21 reframe', A221R, 'a2.21.l1'],
  ['a2.22 reframe', A222R, 'a2.22.l1'],
  ['a2.05 reframe', A205R, 'a2.05.l1'],
  ['a2.20 reframe', A220R, 'a2.20.l1'],
  ['PRESENT_NO_AGREEMENT', PRESENT, 'a2.22.l1'],
] as const) {
  const l = seed.lessons.find((x) => x.id === where);
  const n = l ? surface(l).filter((t) => t.includes(str)).length : -1;
  console.log(`  ${label.padEnd(22)} in ${where}: ${n < 0 ? 'LESSON ABSENT' : `${n} occurrence(s)`}`);
  if (l && where.startsWith('a2.01')) console.log(`      a2.01 reframe field = « ${l.reframe} »`);
  if (l && where === 'a2.21.l1' && label === 'a2.21 reframe') console.log(`      a2.21 reframe field = « ${l.reframe} »`);
}

console.log('\n══ 3. DICTÉE MODE, THROUGH THE REAL FUNCTION ════════════════════════');
const letters = (s: string) => s.replace(/[^A-Za-zÀ-ÿ]/gu, '').length;
const CANDIDATES = [
  "Il s'est lavé.", "Elle s'est lavée.", 'Ils se sont lavés.', 'Elles se sont lavées.',
  'Je me suis levé.', "Tu t'es levé.", "Il s'est levé.", 'Ils se sont levés.',
  'Je me suis levé tôt.', "Tu t'es levé tôt.", "Il s'est levé tôt.",
  'Nous nous sommes levés tôt.', 'Vous vous êtes levés tôt.', 'Ils se sont levés tôt.',
  'Nous nous sommes levés.', 'Vous vous êtes levés.', 'Vous vous êtes lavées.',
  'Je ne me suis pas levé.', "Tu ne t'es pas levé.", "Il ne s'est pas levé.",
  "Elle ne s'est pas levée.", 'Ils ne se sont pas levés.', 'Nous ne nous sommes pas levés.',
  'Je me suis lavé.', 'Je me suis couché.', "Tu t'es couché tard.", "Il s'est douché.",
  'Ils se sont douchés.', "Elle s'est levée.", "Elle s'est lavé les mains.",
  "J'ai lavé la voiture.", 'Elle a lavé la voiture.', "Elle s'est habillée.",
  'Nous nous sommes dépêchés.', "Il s'est habillé vite.", "Elle s'est reposée.",
];
for (const c of CANDIDATES) {
  const m = dicteeMode(c);
  console.log(`  ${m === 'letters' ? 'LETTERS' : 'word   '}  ${String(letters(c)).padStart(2)}  ${c}`);
}

console.log('\n══ 4. fold(): WHAT A TYPED SURFACE CAN AND CANNOT SEPARATE ══════════');
const PAIRS: [string, string][] = [
  ["Il s'est lavé.", "Elle s'est lavée."],
  ["Elle s'est lavée.", 'Elles se sont lavées.'],
  ['Ils se sont lavés.', 'Elles se sont lavées.'],
  ["Il s'est lavé.", 'Ils se sont lavés.'],
  ['Je me suis levé.', 'Je me suis levée.'],
  ['Je me suis levé.', 'Je me suis leve.'],
  ['Je me suis levé.', "J'ai levé."],
  ['Je me suis levé.', "Je m'ai levé."],
  ['Je me suis levé.', 'Je suis me levé.'],
  ['Je ne me suis pas levé.', 'Je me ne suis pas levé.'],
  ["Elle s'est lavée.", "Elle s'est lavé les mains."],
  ["Elle s'est lavé les mains.", "Elle s'est lavée les mains."],
];
for (const [a, b] of PAIRS) {
  console.log(`  ${fold(a) === fold(b) ? 'SAME  ' : 'DIFFER'}  « ${a} »  vs  « ${b} »`);
}

console.log('\n══ 5. hasPlainNasalFor ON THE CANDIDATE RESPELLINGS ══════════════════');
const RESPELL: [string, string][] = [
  ["Il s'est lavé.", 'eel seh lah-VAY'],
  ['Ils se sont lavés.', 'eel suh sohⁿ lah-VAY'],
  ['Ils se sont lavés.', 'eel suh sohn lah-VAY'],
  ['Nous nous sommes levés tôt.', 'noo noo somm luh-VAY TOH'],
  ['Nous nous sommes levés tôt.', 'noo noo sohm luh-VAY TOH'],
  ['Nous nous sommes levés tôt.', 'noo noo sohⁿm luh-VAY TOH'],
  ['Vous vous êtes levés tôt.', 'voo voo zeht luh-VAY TOH'],
  ["J'ai couché les enfants.", 'zhay koo-SHAY lay zahⁿ-FAHⁿ'],
  ["J'ai couché les enfants.", 'zhay koo-SHAY lay zahn-FAHN'],
  ["J'ai réveillé mon frère.", 'zhay ray-veh-YAY mohⁿ FREHR'],
  ["J'ai réveillé mon frère.", 'zhay ray-veh-YAY mohn FREHR'],
  ["Elle s'est lavé les mains.", 'ehl seh lah-VAY lay MAHⁿ'],
  ["Elle s'est lavé les mains.", 'ehl seh lah-VAY lay MAHN'],
  ["Elle s'est brossé les dents.", 'ehl seh bro-SAY lay DAHⁿ'],
  ['Et ce matin ?', 'ay suh mah-TAHⁿ'],
  ['Ah, tu t\'es levé. Je comprends.', 'ah, tü teh luh-VAY. zhuh kohⁿ-PRAHⁿ'],
  ['Ah, tu t\'es levé. Je comprends.', 'ah, tü teh luh-VAY. zhuh kohⁿ-PRAHNDR'],
  ['Nous nous sommes levés en même temps.', 'noo noo somm luh-VAY ahⁿ mem TAHⁿ'],
  ['Ils se sont dépêchés ce matin.', 'eel suh sohⁿ day-peh-SHAY suh mah-TAHⁿ'],
  ['Je me suis levé à six heures.', 'zhuh muh swee luh-VAY ah see ZUHR'],
  ['Nous nous sommes dépêchés.', 'noo noo somm day-peh-SHAY'],
  ["Je me suis douché et je me suis habillé.", 'zhuh muh swee doo-SHAY ay zhuh muh swee zah-bee-YAY'],
  ['Non, je ne me suis pas couché tard.', 'nohⁿ, zhuh nuh muh swee pah koo-SHAY TAR'],
  ["Elle s'est reposée après le travail.", 'ehl seh ruh-poh-ZAY ah-preh luh trah-VY'],
  ["J'ai lavé la voiture.", 'zhay lah-VAY lah vwah-TÜR'],
  ['Vous vous êtes reposés.', 'voo voo zeht ruh-poh-ZAY'],
];
for (const [fr, re] of RESPELL) {
  console.log(`  ${hasPlainNasalFor(fr, re) ? 'FLAGGED' : 'clean  '}  [${re}]   ${fr}`);
}

console.log('\n══ 6. WHAT a2.22 AND a2.21 LEFT: THE UNIT AND THE LESSONS ═══════════');
for (const id of ['a2.21', 'a2.22', 'a2.23']) {
  const u = seed.units.find((x) => x.id === id);
  console.log(`  ${id}  lessonIds=${JSON.stringify(u?.lessonIds ?? null)}`);
}
console.log(`  seed version ${seed.version}, ${seed.items.length} items, ${seed.lessons.length} lessons`);
const verbes = seed.items.filter((i) => i.id.startsWith('fr.a2.verbes.'));
console.log(`  fr.a2.verbes in SEED: ${verbes.length}`);

console.log('\n══ 7. DOES a2.22 OR a2.21 ALREADY SHOW A COMPOUND REFLEXIVE? ════════');
for (const id of ['a2.21.l1', 'a2.22.l1']) {
  const l = seed.lessons.find((x) => x.id === id);
  if (!l) continue;
  const s = surface(l).join('\n');
  for (const m of ['me suis', "s'est", 'se sont', 'lavé', 'levé']) {
    const re = new RegExp(`(?<![\\p{L}\\p{N}-])${m}(?![\\p{L}\\p{N}'’-])`, 'giu');
    const n = (s.match(re) ?? []).length;
    if (n) console.log(`  ${id}: « ${m} » x${n}`);
  }
}
console.log('  (nothing printed above means the background is clean)\n');
