/* Mutation harness for a2-25-y-en.test.ts. WAVE 2, AIMED AT THE EDGES.
 *
 * Wave 1 caught 90 of 90 and THAT IS NOT EVIDENCE — a2.06 caught 35 of 35 in
 * its first wave and its second found two real holes, and a2.24 caught 79 of 79
 * and its second found four. This wave is written for the shapes those two
 * builds found:
 *
 *   an assertion satisfied by a DIFFERENT sentence than the one it means
 *   a coverage check that passes on the WRONG ROW
 *   a claim the BATCH enforces that the TEST might not
 *   a check scoped to the quiz that the same defect can walk round
 *   a count that is an equality in one direction and a floor in the other
 *
 *     node scripts/_a225_mutate2.mjs
 */
import { readFileSync, writeFileSync, copyFileSync, unlinkSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const SEED = '../ealch-v2/src/content/seed.json';
const BAK = '../ealch-v2/src/content/seed.json.mutbak25b';
const A = (n) => `fr.a2.pronoms-essentiels.${String(n).padStart(3, '0')}`;

const L = (s) => s.lessons.find((l) => l.id === 'a2.25.l1');
const item = (s, id) => s.items.find((i) => i.id === id);
const sec = (s, id) => L(s).sections.find((x) => x.id === id);

const REFRAME = 'The preposition goes inside the pronoun, so it does not get said twice.';

const MUTATIONS = [
  /* ── A COVERAGE CHECK PASSING ON THE WRONG ROW. a2.24's HOLE 1 shape. ──── */
  ['the dictée loses BOTH past rows and keeps « J\'en ai. », which also contains ai',
    (s) => { const d = sec(s, 's18-dictation'); d.itemIds = d.itemIds.filter((x) => x !== A(326) && x !== A(328)); }],
  ['the dictée loses every j\'y row and keeps « Il y en a. », which the frozen strip removes',
    (s) => { const d = sec(s, 's18-dictation'); d.itemIds = d.itemIds.filter((x) => ![A(288), A(290), A(310), A(316), A(328)].includes(x)); }],
  ['the dictée keeps « y en » and loses every other y',
    (s) => { const d = sec(s, 's18-dictation'); d.itemIds = [A(314), A(292), A(294), A(296), A(298), A(300), A(317), A(325), A(326)]; }],

  /* ── AN ASSERTION SATISFIED BY A DIFFERENT SENTENCE. a2.24's HOLE 3. ──── */
  ['the person error leaves commonErrors and survives only in the quiz',
    (s) => { const ce = sec(s, 's14-errors'); ce.errors = ce.errors.filter((e) => e.wrong !== "J'y parle."); }],
  ['the frozen error leaves the frozen screen and survives in the review deck',
    (s) => { const c = sec(s, 's13-frozen').cards[1]; c.body = c.body.replace('« Il en a. » is what taking the phrase to pieces gives you: real French, and it means he has some.', 'The phrase stays whole.'); }],
  ['the doubled preposition leaves the trap CARDS and survives in the gated drill',
    (s) => { const t = sec(s, 's12-trap'); t.cards[0].fr = "J'y vais."; t.cards[2].fr = "J'en bois."; }],

  /* ── A CHECK SCOPED TO THE QUIZ THAT THE DEFECT CAN WALK ROUND ─────────── */
  ['the LISTENING section asks the learner to tell the two ens apart by ear',
    (s) => { const q = sec(s, 's06-listening').questions[1]; q.opts = ['Elle en parle.', 'Elle habite en France.', 'Nothing you can hear']; q.correct = 2; }],
  ['the listening lines stop carrying the two jobs of en at all',
    (s) => { const ls = sec(s, 's06-listening').lines; ls[2] = { fr: "J'en ai.", en: 'I have some.' }; ls[3] = { fr: "J'en bois.", en: 'I drink some.' }; }],
  ['a groupDrill check offers the doubled preposition as the CORRECT option',
    (s) => { const g = sec(s, 's10-unseen').groups[1]; g.check.correct = 2; }],

  /* ── A COUNT THAT IS AN EQUALITY IN ONE DIRECTION ONLY ─────────────────── */
  ['the reframe is authored a SIXTEENTH time',
    (s) => { sec(s, 's22-progress').body += ` ${REFRAME}`; }],
  ["a2.24's framing is quoted a SIXTH time, so the borrowed rule gets louder",
    (s) => { sec(s, 's22-progress').body += ' À plus a person becomes lui or leur, and the à disappears with it.'; }],

  /* ── THE TRANCHE ORDER, IN THE OTHER DIRECTION ────────────────────────── */
  ['an act-6 row is released by tranche 1',
    (s) => { const l = L(s); l.deckTranche[5] = l.deckTranche[5].filter((x) => x !== A(333)); l.deckTranche[0].push(A(333)); }],
  ['two tranches swap their contents entirely',
    (s) => { const l = L(s); const t = l.deckTranche[1]; l.deckTranche[1] = l.deckTranche[4]; l.deckTranche[4] = t; }],

  /* ── THE FROZEN PHRASE'S SPELLING, WHERE THE CHECK CANNOT SEE IT ───────── */
  ['« Il y en a. » gets a second spelling of the frozen phrase',
    (s) => { item(s, A(314)).respell = 'eel yahⁿ NAH'; }],
  ['« Il y en a trois. » gets a second spelling too',
    (s) => { item(s, A(315)).respell = 'eel yahⁿ nah TRWAH'; }],

  /* ── THE THREE ENS: THE CELLS RATHER THAN THE PROSE ───────────────────── */
  ['the tapTable names the WRONG units in its own cells, and the say still names both',
    (s) => { const t = sec(s, 's11-threeens'); t.rows[0].cells[2] = 'a2.25'; t.rows[1].cells[2] = 'a2.25'; }],
  ['two of the three rows carry the SAME job, with three different sentences',
    (s) => { const t = sec(s, 's11-threeens'); t.rows[1].cells[0] = 'Nous en prenons'; t.rows[1].cells[1] = 'a verb'; }],
  ['the tapTable loses its « what comes next » column',
    (s) => { const t = sec(s, 's11-threeens'); t.cols = ['French', 'whose lesson']; for (const r of t.rows) r.cells = [r.cells[0], r.cells[2]]; }],

  /* ── THE HANDSHAKE: a2.24's ROW OR A COPY OF IT ───────────────────────── */
  ["the a2.24 handshake uses a copy of its sentence rather than a2.24's row",
    (s) => { item(s, 'fr.a2.pronoms-essentiels.238').fr = 'Je lui parle bien.'; }],
  ["a2.24's own row leaves the seed entirely",
    (s) => { s.items = s.items.filter((i) => i.id !== 'fr.a2.pronoms-essentiels.237'); }],

  /* ── THE SCENE'S RESOLUTION ────────────────────────────────────────────── */
  ['the other person corrects the learner instead of asking again',
    (s) => { const b = sec(s, 's01-scene').beats.filter((x) => x.kind === 'bubble' && x.from === 'them')[1]; b.fr = 'Non, on dit « j\'en ai ».'; b.en = 'No, you say j\'en ai.'; }],
  ['the scene stops using the missing word in the question that follows',
    (s) => { const b = sec(s, 's01-scene').beats.filter((x) => x.kind === 'bubble' && x.from === 'them')[1]; b.fr = 'Pardon ?'; b.en = 'Sorry?'; }],

  /* ── A ROW THAT QUIETLY LEAVES THE THEME. a2.24's HOLE 4. ─────────────── */
  ['an authored row keeps its id and changes theme',
    (s) => { item(s, A(300)).theme = 'nombres'; }],
  ['an authored row keeps its id and changes level',
    (s) => { item(s, A(300)).level = 'b1'; }],

  /* ── THE QUIZ'S FREE-TEXT ANSWERS ─────────────────────────────────────── */
  ['a typed answer stops being a sentence the corpus owns',
    (s) => { sec(s, 's23-quiz').rounds[0].questions[0].accept = ["J'y vais vite."]; }],
  /* REPLACED. The first version set the accept list to ['zzz'], and
   * matchesAccept('zzz', ['zzz']) is TRUE by construction, so the mutation did
   * not create the defect it named: WEAK RATHER THAN REVEALING. What the
   * content actually needs guarding against is a typed question that gives its
   * own answer away, and that check was added. */
  ['a typed question quotes its own answer',
    (s) => { const q = sec(s, 's23-quiz').rounds[0].questions[0]; q.q = `${q.q} The answer is « J'y vais. »`; }],

  /* ── THE SHEET: WHAT IT HOLDS THAT THE NEIGHBOURS' COULD NOT ──────────── */
  ['the sheet keeps two tables and loses the preposition from all of them',
    (s) => { const sh = L(s).sheets[0]; for (const ss of sh.sections) { if (ss.type === 'table') ss.rows = ss.rows.map((r) => r.map((c) => String(c).replace('à plus', 'with').replace('de plus', 'with'))); if (ss.type === 'teach') ss.body = ss.body.replaceAll('À plus', 'With').replaceAll('De plus', 'With').replaceAll('à plus', 'with').replaceAll('de plus', 'with'); } }],
  ['the sheet loses the order, which is the second thing it is for',
    (s) => { const sh = L(s).sheets[0]; for (const ss of sh.sections) if (ss.body) ss.body = ss.body.replace('When both turn up, y comes first. Il y en a.', 'Both can turn up.'); }],

  /* ── A LATER UNIT QUIETLY TAKES THE RESERVED QUESTION ─────────────────── */
  ['a later A2 unit starts naming pronoun order, so this hand-off is stale',
    (s) => { const u = s.units.find((x) => x.id === 'a2.29'); if (u) u.canDo = 'Can put two pronouns in the right order'; else s.units.push({ id: 'a2.29', seq: 27, title: 'Pronoun Order', sub: 'Ordre', canDo: 'Can order two pronouns', level: 'a2', track: 'a2', lessonIds: [] }); }],

  /* ── A CLAIM THE BATCH ENFORCES THAT THE TEST MIGHT NOT ───────────────── */
  ['the en-half loses a section, so the y half is no longer outweighed',
    (s) => { const l = L(s); l.sections = l.sections.filter((x) => x.id !== 's09-quantity'); l.acts[2].sections = l.acts[2].sections.filter((x) => x !== 's09-quantity'); }],
  ['an authored row declared as the preposition becomes the pronoun',
    (s) => { item(s, A(312)).fr = 'Elle en habite.'; }],
  ['the speak surface names a row that carries no voiceflash',
    (s) => { item(s, A(287)).drills = ['flashcard', 'sentence', 'review']; }],
  ['a role-play turn drops one of its two alts',
    (s) => { sec(s, 's19-talk').turns[0].alts = [sec(s, 's19-talk').turns[0].alts[0]]; }],
];

copyFileSync(SEED, BAK);
const base = readFileSync(BAK, 'utf8');
let caught = 0; const missed = [];
for (const [name, mutate] of MUTATIONS) {
  const s = JSON.parse(base);
  try { mutate(s); } catch (e) { console.log(`  SETUP FAILED  ${name}: ${e.message}`); continue; }
  writeFileSync(SEED, `${JSON.stringify(s, null, 2)}\n`);
  let red = false;
  try {
    execFileSync('node', ['--test', '../ealch-v2/src/content/a2-25-y-en.test.ts'], { stdio: 'pipe' });
  } catch { red = true; }
  if (red) { caught += 1; console.log(`  caught   ${name}`); }
  else { missed.push(name); console.log(`  MISSED   ${name}`); }
}
copyFileSync(BAK, SEED);
unlinkSync(BAK);
console.log(`\n  ${caught}/${MUTATIONS.length} caught, ${missed.length} missed`);
if (missed.length) console.log(`  MISSED:\n${missed.map((m) => `    ${m}`).join('\n')}`);
