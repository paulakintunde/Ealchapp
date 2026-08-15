/* Mutation harness, WAVE 2: the assertions most likely to be hollow.
 *
 * Wave 1 caught 35 of 35, which is not evidence on its own — it can equally
 * mean the mutations were too obvious. These are aimed at the edges: claims
 * carried by a single loose regex, counts that might be derived rather than
 * asserted, and coverage checks that could pass on the wrong row.
 */
import { readFileSync, writeFileSync, copyFileSync, unlinkSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const SEED = '../ealch-v2/src/content/seed.json';
const BAK = '../ealch-v2/src/content/seed.json.mutbak2';
const A = (n) => `fr.a2.pronoms-essentiels.${String(n).padStart(3, '0')}`;
const L = (s) => s.lessons.find((l) => l.id === 'a2.06.l1');
const item = (s, id) => s.items.find((i) => i.id === id);
const sec = (s, id) => L(s).sections.find((x) => x.id === id);

const MUTATIONS = [
  // ── Coverage checks that could pass on the wrong row ────────────────────
  ["the dictée drops its only l' line but keeps twelve lines",
    (s) => { const d = sec(s, 's18-dictation'); d.itemIds = d.itemIds.map((x) => (x === A(207) ? A(202) : x)); }],
  ['the dictée drops the agreed ending but keeps twelve lines',
    (s) => { const d = sec(s, 's18-dictation'); d.itemIds = d.itemIds.map((x) => (x === A(225) ? A(203) : x)); }],
  ['the dictée drops every plural but stays in letters mode',
    (s) => { const d = sec(s, 's18-dictation'); d.itemIds = d.itemIds.map((x) => ([A(200), A(199), A(211)].includes(x) ? A(202) : x)); }],
  // ── Claims carried by one word ─────────────────────────────────────────
  ['the lesson stops calling this the fifth occurrence',
    (s) => { const l = L(s); const walk = (v) => { if (Array.isArray(v)) v.forEach((x, i) => { if (typeof x === 'string') v[i] = x.replace(/fifth/gi, 'latest'); else walk(x); }); else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) { if (typeof x === 'string') v[k] = x.replace(/fifth/gi, 'latest'); else walk(x); } }; walk(l); }],
  ['a1.03 stops being credited with the gender',
    (s) => { const l = L(s); const walk = (v) => { if (Array.isArray(v)) v.forEach((x, i) => { if (typeof x === 'string') v[i] = x.replaceAll('a1.03', 'an earlier lesson'); else walk(x); }); else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) { if (typeof x === 'string') v[k] = x.replaceAll('a1.03', 'an earlier lesson'); else walk(x); } }; walk(l); }],
  ['sons.07 stops being credited with elision',
    (s) => { const l = L(s); const walk = (v) => { if (Array.isArray(v)) v.forEach((x, i) => { if (typeof x === 'string') v[i] = x.replaceAll('sons.07', 'the sounds track'); else walk(x); }); else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) { if (typeof x === 'string') v[k] = x.replaceAll('sons.07', 'the sounds track'); else walk(x); } }; walk(l); }],
  ['the a2.22 loop is named but the "same slot" claim is removed',
    (s) => { const l = L(s); const walk = (v) => { if (Array.isArray(v)) v.forEach((x, i) => { if (typeof x === 'string') v[i] = x.replace(/this same slot/gi, 'a place'); else walk(x); }); else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) { if (typeof x === 'string') v[k] = x.replace(/this same slot/gi, 'a place'); else walk(x); } }; walk(l); }],
  // ── The ratio, which is a count rather than a ban ───────────────────────
  ['the plain phrase drops below the technical one',
    (s) => { const l = L(s); const walk = (v) => { if (Array.isArray(v)) v.forEach((x, i) => { if (typeof x === 'string') v[i] = x.replaceAll('the what or the who', 'the target').replaceAll('the word after the verb', 'the trailing word'); else walk(x); }); else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) { if (typeof x === 'string') v[k] = x.replaceAll('the what or the who', 'the target').replaceAll('the word after the verb', 'the trailing word'); else walk(x); } }; walk(l); }],
  // ── Counts that might be derived rather than asserted ───────────────────
  ['the reframe is authored one extra time',
    (s) => { sec(s, 's06-persons').say += ' The pronoun goes in front of the verb, not after it.'; }],
  ['one authored row is deleted from the block',
    (s) => { s.items = s.items.filter((i) => i.id !== A(236)); const l = L(s); l.itemIds = l.itemIds.filter((x) => x !== A(236)); l.deckTranche = l.deckTranche.map((t) => t.filter((x) => x !== A(236))); sec(s, 's19-talk').turns.pop(); }],
  ['a 25th section is added',
    (s) => { const l = L(s); l.sections.push({ id: 's25-extra', type: 'goals', title: 'Extra', layer: 'core', goals: [{ t: 'x', s: 'y' }] }); l.acts[5].sections.push('s25-extra'); }],
  ['a second quiz section is added, which nothing renders',
    (s) => { const l = L(s); const q = JSON.parse(JSON.stringify(sec(s, 's23-quiz'))); q.id = 's25-quiz2'; l.sections.push(q); l.acts[5].sections.push('s25-quiz2'); }],
  // ── Shape claims ───────────────────────────────────────────────────────
  ['a section stops belonging to any act',
    (s) => { const l = L(s); l.acts[3].sections = l.acts[3].sections.filter((x) => x !== 's13-listening'); }],
  ['the tapTable grows past the Pixel 6 ceiling',
    (s) => { const t = sec(s, 's05-table'); for (let i = 0; i < 4; i += 1) t.rows.push(JSON.parse(JSON.stringify(t.rows[0]))); }],
  ['the reference sheet loses its table',
    (s) => { const sh = L(s).sheets[0]; sh.sections = sh.sections.filter((x) => x.type !== 'table'); }],
  ['a sheetId is declared and no section reaches it',
    (s) => { delete sec(s, 's24-roundup').sheetId; }],
  ['an authored drills array goes out of DRILL_KINDS order',
    (s) => { item(s, A(190)).drills = ['sentence', 'flashcard', 'voiceflash', 'dictation', 'review']; }],
  ['an authored ipa loses its slashes',
    (s) => { item(s, A(190)).ipa = 'ʒə lə vwa'; }],
  ['an authored sentence goes over the 14-word A2 budget',
    (s) => { item(s, A(232)).fr = 'Je les invite ce soir chez moi avec tous les autres amis de la famille aussi.'; }],
  ['a gendered row is authored inside the block',
    (s) => { item(s, A(220)).gender = 'f'; }],
  ['the intro is emptied',
    (s) => { L(s).intro = ''; }],
  ['the intro keeps its length but loses the position claim',
    (s) => { L(s).intro = L(s).intro.replace('in front of the verb', 'somewhere else in the sentence'); }],
  ['overview.titleEn stops matching the unit name',
    (s) => { L(s).overview.titleEn = 'Object Pronouns'; }],
  ['the lesson version is bumped without a rebuild',
    (s) => { L(s).version = 4; }],
  ['a role-play turn loses one of its two alts',
    (s) => { sec(s, 's19-talk').turns[0].alts.pop(); }],
  ['a role-play turn says a line no authored row holds',
    (s) => { sec(s, 's19-talk').turns[0].user = 'Oui, je la connais un peu.'; }],
  ['a speak item loses its voiceflash drill',
    (s) => { item(s, A(202)).drills = ['flashcard', 'sentence', 'review']; }],
  ['the prerequisite unit loses its shipped lesson',
    (s) => { s.units.find((u) => u.id === 'a2.01').lessonIds = []; }],
  ['the unit stops listing this lesson',
    (s) => { const u = s.units.find((x) => x.id === 'a2.06'); u.lessonIds = u.lessonIds.filter((x) => x !== 'a2.06.l1'); }],
  ['the canDo is reworded',
    (s) => { s.units.find((u) => u.id === 'a2.06').canDo = 'Can use object pronouns correctly'; }],
];

copyFileSync(SEED, BAK);
const base = readFileSync(BAK, 'utf8');
let caught = 0; const missed = [];
for (const [name, mutate] of MUTATIONS) {
  const s = JSON.parse(base);
  try { mutate(s); } catch (e) { console.log(`  SETUP FAILED  ${name}: ${e.message}`); continue; }
  writeFileSync(SEED, `${JSON.stringify(s, null, 2)}\n`);
  let red = false;
  try { execFileSync('node', ['--test', '../ealch-v2/src/content/a2-06-pronoms-direct.test.ts'], { stdio: 'pipe' }); }
  catch { red = true; }
  if (red) { caught += 1; console.log(`  caught   ${name}`); }
  else { missed.push(name); console.log(`  MISSED   ${name}`); }
}
copyFileSync(BAK, SEED);
unlinkSync(BAK);
console.log(`\n  ${caught}/${MUTATIONS.length} caught, ${missed.length} missed`);
if (missed.length) console.log(`  MISSED:\n${missed.map((m) => `    ${m}`).join('\n')}`);
