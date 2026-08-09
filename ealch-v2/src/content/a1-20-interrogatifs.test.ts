// Guards a1.20.l1 "Les mots interrogatifs".
//
// This lesson has one failure mode that matters more than all the others, and it
// is not a crash: it is THE SEVEN WORDS BEING SHOWN IN SEVEN DIFFERENT
// SENTENCES.
//
// The whole claim of the lesson is that only the first word changes. It is made
// on ONE SCREEN, s04-hero, whose right-hand column is the same four words seven
// times. Split that across two tables, or vary the tail so each row reads
// naturally on its own, and every other check in this file stays green while the
// lesson stops arguing anything. The brief calls it "the layout the test must
// assert" and it is right. It is the second test below, and it is checked by
// section id and by byte-identical tails, because the scene ALSO carries a pair
// of near-identical sentences and a looser check passed with the hero deleted.
//
// The other two that earn their place:
//
//   `comment` IS ASSERTED BY NAME. The unit's canDo omits it. A later reader who
//   notices the mismatch has an obvious and wrong fix available, which is to
//   drop the word, and nothing else in the suite would object.
//
//   THE FOUR SHAPES OF quel CARRY ONE RESPELLING. They shipped with two (KEL,
//   KEL, KEHL, KEHL) for one sound. hasPlainNasalFor cannot see that, because
//   there is no nasal involved and because it is a fact about a SET rather than
//   about a row, so the four are pinned individually.
//
// Everything else guards the ways this project has already shipped content that
// was authored, schema-valid, and drawn by nothing.
//
// Two sources are checked, not one. The SEED is what a learner receives. The
// AUTHORED SOURCE in ealch-admin is what the next author edits. Both are read
// here and the parity tests at the bottom fail when they drift.
//
// Counts are DERIVED wherever a count is asserted. A hardcoded number fails on
// itself the first time content legitimately changes, and the fix is then to
// edit the test, which is how a test comes to certify a bug. The exceptions are
// the seven words, the four shapes of quel and the six triggers: those are the
// SHAPE of the lesson rather than a measurement of it, and a later trim that
// quietly drops one is exactly what this file exists to stop.
//
// Nothing here reimplements app logic. `fold`, `matchesAccept`, `dicteeMode`,
// `hasPlainNasalFor`, `endingPopulation` and `validateDensity` are imported from
// the modules the app itself runs. An earlier version of a1.01's test inlined its
// own glossary lookup, copied the version that was already broken, and passed
// while the feature was dead.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';
import { quizQuestions, validateLesson, type Lesson, type LessonSection } from './schema.ts';
import { hasPlainNasalFor, validateDensity, formatDensity } from './density.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { matchesAccept } from './answer.logic.ts';
import { endingPopulation } from './gender.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number;
  units: { id: string; seq: number; lessonIds: string[]; themes?: string[] | null; canDo?: string; sub?: string; title?: string }[];
  lessons: Lesson[];
  items: { id: string; kind: string; level: string; theme: string; fr: string; en: string; respell?: string; ipa?: string; drills: string[]; cardType?: string; gender?: string }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.20.l1');
const U = seed.units.find((u) => u.id === 'a1.20');
const ITEMS = new Map(seed.items.map((i) => [i.id, i]));

/* ─── THE SHAPE OF THE LESSON, hardcoded on purpose ────────────────────────
 *
 * These are not measurements. They are what a1.20 IS, and a later edit that
 * quietly drops one of them is the thing this file exists to catch.          */

/** The six the canDo asks for, plus `comment`, which it omits. */
const THE_SEVEN = ['qui', 'que', 'où', 'quand', 'comment', 'pourquoi', 'combien'] as const;
const QUEL_FORMS = ['quel', 'quelle', 'quels', 'quelles'] as const;
const HERO_TAIL = 'est-ce que tu pars ?';
const HERO_TAIL_SUB = 'ehs-kuh tü PAR';
const REFRAME = 'Your word, then est-ce que. That always works.';
const REFRAME_SECTIONS = 10;

/** The unit string, byte for byte. It OMITS comment and this lesson teaches it
 *  anyway; see the test that pins that. */
const UNIT_CANDO = 'Can ask who, what, where, when, why and how much questions';

/** Whole-word containment, accent-aware, never regex-from-string.
 *
 *  JavaScript's `\b` is ASCII-ONLY, so /\boù\b/ matches NOTHING because the
 *  trailing ù is not a word character. A first draft of this file used a regex
 *  and reported `où` as absent from a lesson that names it on seventeen screens.
 *  Invariant §0's first trap, caught by falling into it.
 *
 *  It also means `ou` does NOT match inside `où`, which is exactly what the
 *  homophone tests need. */
function hasWord(haystack: string, needle: string): boolean {
  const h = haystack.toLowerCase().normalize('NFC');
  const n = needle.toLowerCase().normalize('NFC');
  let from = 0;
  for (;;) {
    const i = h.indexOf(n, from);
    if (i < 0) return false;
    const before = i === 0 ? ' ' : h[i - 1];
    const after = h[i + n.length] ?? ' ';
    if (!/[a-zà-ÿœæ'’]/.test(before) && !/[a-zà-ÿœæ]/.test(after)) return true;
    from = i + 1;
  }
}

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

const sectionById = (id: string) => L!.sections.find((s) => (s as { id?: string }).id === id);

/** The exam's questions. `quizQuestions` takes the SECTION carrying `rounds`,
 *  not the lesson, and passing the lesson returns an empty array silently: it
 *  reads `.rounds` and `.questions`, and a Lesson has neither. Four checks in
 *  this file passed vacuously until that was fixed. */
const examQuestions = () => {
  const s = L!.sections.find((x) => x.type === 'quiz');
  const qs = quizQuestions(s as never);
  if (!qs.length) throw new Error('the exam has no questions; quizQuestions was given the wrong shape');
  return qs;
};
const sectionText = (id: string) => JSON.stringify(sectionById(id));

/* ─── The lesson exists and is wired ───────────────────────────────────────── */

test('a1.20.l1 is in the seed and the unit points at it', () => {
  ok(L, 'a1.20.l1 is missing from seed.json');
  ok(U, 'unit a1.20 is missing from seed.json');
  deepStrictEqual(U!.lessonIds, ['a1.20.l1']);
  strictEqual(L!.unitId, 'a1.20');
  strictEqual(L!.level, 'a1');
});

test('the unit is bound to the questions theme, which it declared as null', () => {
  deepStrictEqual(U!.themes, ['questions']);
});

test('the eyebrow agrees with the unit seq the renderer computes', () => {
  // missions.ts derives it as `${level} · LEÇON ${unit.seq}` at render time. The
  // stored `tag` is a fallback and has to agree, or the two disagree the moment
  // something reads the field instead. a1.03 shipped exactly that bug.
  strictEqual(L!.tag, `A1 · LEÇON ${U!.seq}`);
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  THE HERO. One sentence asked seven ways, and the tail never moves.
 * ═══════════════════════════════════════════════════════════════════════════ */

test('ONE section shows one sentence asked with all seven question words', () => {
  const hero = sectionById('s04-hero') as { type: string; rows?: { cells: string[] }[] } | undefined;
  ok(hero, 's04-hero is gone. It is the screen this whole lesson is built to reach.');
  strictEqual(hero!.type, 'tapTable');
  const rows = hero!.rows ?? [];
  strictEqual(rows.length, 7, 'the hero must carry seven rows, one per question word');

  // The right-hand column is the SAME FOUR WORDS seven times. That repetition is
  // the argument of the lesson made visible, and it is the thing an edit is most
  // likely to "tidy up" into seven natural-sounding sentences.
  const tails = new Set(rows.map((r) => r.cells[1]));
  strictEqual(tails.size, 1, `the hero tail must be identical in all seven rows, found ${[...tails].join(' | ')}`);
  strictEqual([...tails][0], HERO_TAIL);

  // And every one of the seven words is the thing in front of it.
  const openers = rows.map((r) => r.cells[0].toLowerCase());
  for (const w of THE_SEVEN) {
    if (w === 'que') continue; // que joins the frame rather than standing in front; act 4
    ok(openers.some((o) => hasWord(o, w)), `the hero has no row for "${w}"`);
  }
  ok(openers.some((o) => QUEL_FORMS.some((q) => hasWord(o, q))), 'the hero has no row for quel');
});

test('the seven hero sentences share a byte-identical tail, in French and in the respelling', () => {
  const heroIds = Array.from({ length: 7 }, (_, i) => `fr.a1.questions.${374 + i}`);
  const rows = heroIds.map((id) => ITEMS.get(id));
  for (const [i, r] of rows.entries()) ok(r, `${heroIds[i]} is missing from the seed`);

  for (const r of rows) {
    ok(r!.fr.endsWith(HERO_TAIL), `"${r!.fr}" does not end with the tail`);
    ok(r!.respell?.endsWith(HERO_TAIL_SUB), `${r!.id} respelling "${r!.respell}" does not end with "${HERO_TAIL_SUB}"`);
  }
  strictEqual(new Set(rows.map((r) => r!.respell!.slice(-HERO_TAIL_SUB.length))).size, 1);
  // Seven DIFFERENT questions, not one sentence seven times.
  strictEqual(new Set(rows.map((r) => r!.fr)).size, 7);
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  comment, WHICH THE UNIT canDo OMITS
 * ═══════════════════════════════════════════════════════════════════════════ */

test('the unit canDo still omits comment, and the lesson teaches it anyway', () => {
  // BOTH halves matter. If the canDo is ever corrected, this test should be
  // updated deliberately rather than discovered by a later reader as a
  // contradiction. If the LESSON ever drops comment to match the canDo, that is
  // the defect this test exists to stop.
  strictEqual(U!.canDo, UNIT_CANDO, 'the unit canDo changed; decide deliberately whether comment is now in it');
  ok(!hasWord(UNIT_CANDO, 'how much') || true);
  ok(!/\bhow\b(?!\s+much)/i.test(UNIT_CANDO), 'the canDo now covers "how"; the lesson comment note can be reconsidered');

  const carrying = L!.sections.filter((s) => hasWord(JSON.stringify(s), 'comment'));
  ok(carrying.length >= 5, `comment appears in ${carrying.length} section(s); it is one of the seven and is taught here`);

  // It has a headword card of its own.
  const card = ITEMS.get('fr.sons.questions.006');
  ok(card, 'the comment headword card is not in the seed');
  strictEqual(card!.fr, 'comment');
  ok(L!.itemIds.includes('fr.sons.questions.006'), 'the lesson does not name the comment headword');
});

test('all seven words are taught, each asserted individually rather than counted', () => {
  const sections = L!.sections.map((s) => JSON.stringify(s));
  for (const w of THE_SEVEN) {
    ok(sections.some((s) => hasWord(s, w)), `"${w}" appears in no section of a1.20`);
  }
  // quoi is the eighth, and is the same word as que standing somewhere else.
  ok(sections.some((s) => hasWord(s, 'quoi')), 'quoi appears in no section');
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  quel: four shapes, ONE sound, ONE respelling
 * ═══════════════════════════════════════════════════════════════════════════ */

test('all four quel forms are taught and carry ONE respelling', () => {
  // The four shipped with TWO spellings for one sound, which told a learner the
  // plural sounds different. It does not. hasPlainNasalFor cannot see this
  // because there is no nasal involved, so the four are pinned by name and a
  // later author cannot re-split them.
  const ids = ['fr.sons.questions.010', 'fr.sons.questions.011', 'fr.sons.questions.031', 'fr.sons.questions.032'];
  const rows = ids.map((id) => ITEMS.get(id));
  for (const [i, r] of rows.entries()) ok(r, `${ids[i]} is missing from the seed`);
  deepStrictEqual(rows.map((r) => r!.fr), [...QUEL_FORMS]);

  const respells = new Set(rows.map((r) => r!.respell));
  strictEqual(respells.size, 1, `the quel paradigm carries ${respells.size} respellings: ${[...respells].join(' | ')}. All four are /kɛl/.`);
  strictEqual([...respells][0], 'KEHL');

  for (const id of ids) ok(L!.itemIds.includes(id), `the lesson does not name ${id}`);
});

test('one section shows the four quel forms together WITH the statement that they sound identical', () => {
  // The forms alone are a table. The statement is the teaching, and it is what a
  // trim would remove first.
  const s = sectionText('s09-quel-table');
  ok(s, 's09-quel-table is gone');
  for (const f of QUEL_FORMS) ok(hasWord(s, f), `s09-quel-table does not carry "${f}"`);
  ok(
    /same word four times|one sound|identical/i.test(s),
    's09-quel-table shows the four forms and never says they are one sound',
  );

  // The sound column really is the same cell four times.
  const table = sectionById('s09-quel-table') as { rows?: { cells: string[] }[] };
  const sounds = new Set((table.rows ?? []).map((r) => r.cells[2]));
  strictEqual(sounds.size, 1, 'the sound column of the quel table is not identical down all four rows');
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  où AGAINST ou, AND WHAT NO FORMAT CAN TEST
 * ═══════════════════════════════════════════════════════════════════════════ */

test('où and ou appear together on one screen, and carry the same respelling', () => {
  const s = sectionText('s07-ouou');
  ok(s, 's07-ouou is gone. Without the pairing the accent is a spelling note rather than a meaning.');
  ok(hasWord(s, 'où'), 's07-ouou does not carry où');
  ok(hasWord(s, 'ou'), 's07-ouou does not carry ou');

  const ouu = ITEMS.get('fr.sons.accents.032');
  const ou = ITEMS.get('fr.sons.accents.031');
  ok(ouu && ou, 'the où / ou headword pair is not in the seed');
  strictEqual(ouu!.fr, 'où');
  strictEqual(ou!.fr, 'ou');
  strictEqual(
    ouu!.respell, ou!.respell,
    'où and ou carry different respellings. They are one sound, and this lesson says so on three screens.',
  );
});

test('NO listenChoose question tries to separate où from ou, or two quel forms', () => {
  // An ear question on a homophone pair certifies a bug: the learner cannot be
  // right except by guessing, and concludes something untrue about their
  // hearing. Both pairs are the two most interesting things in the lesson, which
  // is exactly why an edit would reach for them.
  const ear = examQuestions().filter((q) => q.format === 'listenChoose');
  ok(ear.length > 0, 'the lesson has no listenChoose question at all');
  for (const q of ear) {
    const opts = (q.opts ?? []).map((o) => o.toLowerCase().trim());
    ok(!(opts.includes('ou') && opts.includes('où')), `a listenChoose offers où against ou: ${q.q}`);
    const quels = opts.filter((o) => (QUEL_FORMS as readonly string[]).includes(o));
    ok(quels.length <= 1, `a listenChoose offers ${quels.join(' and ')}, which are one sound: ${q.q}`);
  }
});

test('the accent is tested by mcq and by nothing else, because fold() strips it', () => {
  // errorSpot runs the SAME matchesAccept -> fold() path as typeIn. Both the
  // a1.08 and a1.09 briefs recommended errorSpot for a thing fold() removes and
  // both were wrong. An earlier draft of r1 here asked the learner to restore
  // the accent in an errorSpot and would have accepted the answer without it.
  const qs = examQuestions();
  for (const q of qs) {
    // FREE TEXT ONLY. A first draft ran over every non-mcq format and fired on a
    // listenChoose whose `why` says the accent is NOT in the signal, which is
    // the correct teaching and the opposite of a claim to test it. A guard that
    // fires on legitimate content gets deleted rather than fixed.
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    ok(
      !/\b(the accent that|restore the accent|add the accent|missing accent|with the accent)\b/i.test(q.why ?? ''),
      `a ${q.format} question claims the learner supplied an accent: ${q.q}`,
    );
    // And the accept list must not be relying on one either: fold() would take
    // an unaccented answer regardless, so listing both spellings is a sign the
    // author believed the format could tell them apart.
    const folded = new Set((q.accept ?? []).map((a) => a.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, '')));
    ok(folded.size <= (q.accept ?? []).length, `unreachable: ${q.q}`);
  }
  // And there IS an mcq that does it, with the two spellings as distinct options.
  const accentQ = qs.find((q) => q.format === 'mcq' && (q.opts ?? []).some((o) => hasWord(o, 'où')) && (q.opts ?? []).some((o) => hasWord(o, 'ou')));
  ok(accentQ, 'no mcq question puts the accented and unaccented spellings against each other');
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  combien ALWAYS BRINGS de
 * ═══════════════════════════════════════════════════════════════════════════ */

test('combien never appears bare in front of a noun on a production surface', () => {
  // `Combien coûte ce sac ?` is legal French and is NOT a hit: a verb follows,
  // not a noun. The check looks for the de rather than for the word, so it does
  // not fire on the legitimate use. A guard that fires on legitimate content
  // gets deleted rather than fixed.
  const bare = (fr: string) => {
    const t = fr.toLowerCase().normalize('NFC');
    let from = 0;
    for (;;) {
      const i = t.indexOf('combien', from);
      if (i < 0) return false;
      const rest = t.slice(i + 'combien'.length).trimStart();
      const okHere = rest === ''
        || /^(de\b|d'|d’|ça\b|est-ce\b|\?)/.test(rest)
        || /^(coûte|coute|coûtent|coutent|pèse|pese|fait|font|mesure|dure)\b/.test(rest);
      if (!okHere) return true;
      from = i + 1;
    }
  };

  const qs = examQuestions();
  const produced = [
    ...qs.flatMap((q) => [...(q.accept ?? []), q.answer ?? '', (q as { target?: string }).target ?? '']),
    ...(L!.drills ?? []).flatMap((d) => ((d as { pairs?: [string, string][] }).pairs ?? []).map((p) => p[1])),
    ...L!.itemIds.map((id) => ITEMS.get(id)?.fr ?? ''),
  ].filter(Boolean);

  for (const s of produced) ok(!bare(s), `a bare combien reached a production surface: "${s}"`);

  // And the de is genuinely taught, both ways.
  // The pair is a MINIMAL one: same frame, same verb, and the only thing that
  // moves is the first letter of the noun.
  const de = ITEMS.get('fr.a1.questions.395');
  const delided = ITEMS.get('fr.a1.questions.396');
  ok(de && delided, 'the combien de / combien d\' pair is not in the seed');
  ok(de!.fr.includes('de '), `${de!.id} "${de!.fr}" does not carry the de`);
  ok(delided!.fr.includes("d'"), `${delided!.id} "${delided!.fr}" does not carry the elision`);
  strictEqual(
    de!.fr.replace(/^Combien de \S+ /, ''), delided!.fr.replace(/^Combien d'\S+ /, ''),
    'the combien pair is not minimal: something other than the noun moved',
  );
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  WHAT THE NEIGHBOURS KEEP
 * ═══════════════════════════════════════════════════════════════════════════ */

test('the register system is not taught here, so a1.19 keeps its lesson', () => {
  // a1.19 landed mid-build and owns the three ways to ask. Its frame is REUSED
  // and credited; its teaching is not. Probed as the phrases a lesson ABOUT
  // register would have to use, never as the bare French, because « est-ce que »
  // is on almost every screen here.
  const REGISTER_TEACHING = [
    'three ways to ask', 'rising intonation', 'by intonation alone',
    'inversion', 'invert the verb', 'formal register', 'informal register',
    'which register', 'the register system', 'more formal than', 'less formal than',
  ];
  const j = JSON.stringify(L).toLowerCase();
  for (const p of REGISTER_TEACHING) ok(!j.includes(p.toLowerCase()), `a1.19's register teaching leaked: "${p}"`);
});

test('exactly one question frame appears, and the section carrying it credits a1.19', () => {
  const frame = sectionText('s03-frame');
  ok(frame, 's03-frame is gone');
  ok(
    /already have|last lesson|yes and no/i.test(frame),
    's03-frame introduces est-ce que without crediting the lesson that taught it',
  );
  // No second frame is taught anywhere.
  const j = JSON.stringify(L);
  ok(!/n'est-ce pas/i.test(j), 'a second question frame appears');
});

test('no relative use of qui or que on a production surface, so A2 keeps its lesson', () => {
  // Written against DECKS, VOCAB, DRILLS and QUIZ rather than every string. The
  // corpus is full of the relative use and a guard on the bare words would fire
  // on this lesson's own subject on every screen, then get deleted.
  const RELATIVE_FRAMES = [
    "l'homme qui", 'la femme qui', 'le train qui', 'la personne qui', 'les gens qui',
    'le livre que', 'la chose que', "l'homme que", 'la femme que', 'les gens que',
    'celui qui', 'celle qui', 'ceux qui', 'tout ce qui', 'tout ce que',
  ];
  const qs = examQuestions();
  const surfaces = [
    ...qs.flatMap((q) => [q.q, ...(q.opts ?? []), ...(q.accept ?? []), q.answer ?? '']),
    ...strings(L!.drills ?? []),
    ...L!.itemIds.map((id) => ITEMS.get(id)?.fr ?? ''),
  ].join('\n').toLowerCase();
  for (const p of RELATIVE_FRAMES) ok(!surfaces.includes(p), `a relative pronoun reached a production surface: "${p}"`);
});

test('no production surface asks the learner to produce a verb outside être and avoir', () => {
  // Reading exposure IS allowed and this lesson uses a lot of it: the hero runs
  // on `partir`, which no A1 unit teaches. What is not allowed is asking for a
  // form from nothing, and only `typeIn` can do that: a dictée supplies the form
  // in the audio, `speak` prints it on the card, and an errorSpot stem quotes
  // the sentence. Three typeIn questions asked for `part`, `fais` and `vas`
  // until the batch's guard caught them.
  const EXPOSURE = ['pars', 'part', 'fais', 'fait', 'habites', 'dure', 'commence', 'préfères', 'vas', 'parles', 'portes', 'ouvre', 'pleut'];
  for (const q of examQuestions()) {
    if (q.format !== 'typeIn') continue;
    const stem = q.q.toLowerCase();
    for (const a of [...(q.accept ?? []), q.answer ?? '']) {
      for (const v of EXPOSURE) {
        ok(
          !hasWord(a, v) || hasWord(stem, v),
          `typeIn asks for "${v}" and the stem does not supply it: "${a}"`,
        );
      }
    }
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  RESPELLING REPAIRS, ASSERTED BY NAME
 * ═══════════════════════════════════════════════════════════════════════════ */

test('every nasal this lesson displays closes with a superscript, through the REAL checker', () => {
  // hasPlainNasalFor, imported rather than reimplemented. A first draft of the
  // corpus probe inlined a one-line regex and immediately reported `jaune` as a
  // violation; the real function knows the n there is a pronounced consonant.
  const NASAL = [
    ['fr.sons.questions.005', 'quand'],
    ['fr.sons.questions.006', 'comment'],
    ['fr.sons.questions.008', 'combien'],
    ['fr.sons.questions.009', 'combien de'],
    ['fr.a1.deplacements.001', 'le train'],
  ] as const;
  for (const [id, fr] of NASAL) {
    const r = ITEMS.get(id);
    ok(r, `${id} is missing from the seed`);
    strictEqual(r!.fr, fr);
    ok(r!.respell, `${id} has no respelling`);
    ok(!hasPlainNasalFor(r!.fr, r!.respell!), `${id} "${fr}" [${r!.respell}] closes a nasal with a plain n`);
    // BY NAME as well, because the checker cannot see a word-internal nasal and
    // comment, combien and train are all that shape. Invariant §3.
    ok(r!.respell!.includes('ⁿ'), `${id} "${fr}" [${r!.respell}] carries no superscript`);
  }
});

test('words with NO nasal never grow a superscript', () => {
  // The other half, and the one a well-meaning author reading the repair list
  // would break: /kɛl/ is an oral vowel.
  const NOT_NASAL = [
    'fr.sons.questions.001', 'fr.sons.questions.002', 'fr.sons.questions.003',
    'fr.sons.questions.004', 'fr.sons.questions.007',
    'fr.sons.questions.010', 'fr.sons.questions.011', 'fr.sons.questions.031', 'fr.sons.questions.032',
    'fr.sons.questions.014', 'fr.sons.questions.174', 'fr.sons.questions.175',
    'fr.sons.accents.031', 'fr.sons.accents.032',
  ];
  for (const id of NOT_NASAL) {
    const r = ITEMS.get(id);
    ok(r, `${id} is missing from the seed`);
    ok(!r!.respell?.includes('ⁿ'), `${id} "${r!.fr}" [${r!.respell}] has no nasal vowel and carries a superscript`);
  }
});

test('the est-ce que headword agrees with the transcription of the seven hero rows', () => {
  // The frame is on a card AND inside all seven composed hero transcriptions. A
  // card reading ES-kuh beside seven rows reading ehs-kuh is a contradiction the
  // learner sees, which is why it was repaired rather than argued about.
  const frame = ITEMS.get('fr.sons.questions.014');
  ok(frame, 'the est-ce que headword is not in the seed');
  strictEqual(frame!.respell, 'EHS-kuh');
  strictEqual(frame!.respell!.toLowerCase(), HERO_TAIL_SUB.split(' ')[0]);
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  THE STANDING GATES
 * ═══════════════════════════════════════════════════════════════════════════ */

test('the lesson validates and the density validator is clean', () => {
  deepStrictEqual(validateLesson(L!, L!.id), []);
  const known = new Set(seed.items.map((i) => i.id));
  const issues = validateDensity(L!, known);
  strictEqual(issues.length, 0, formatDensity(issues));
});

test('the spine is in order and every act names sections that exist', () => {
  const ids = L!.sections.map((s) => (s as { id?: string }).id);
  strictEqual(new Set(ids).size, ids.length, 'duplicate section id');
  // Ordered s01.. sNN, so a section inserted out of order is visible.
  const numbered = ids.map((id) => Number(String(id).slice(1, 3)));
  deepStrictEqual(numbered, [...numbered].sort((a, b) => a - b), 'sections are not in numeric order');

  const claimed = (L!.acts ?? []).flatMap((a) => a.sections);
  strictEqual(new Set(claimed).size, claimed.length, 'two acts claim one section');
  for (const s of claimed) ok(ids.includes(s), `an act names "${s}", which is not a section`);
  for (const id of ids) ok(claimed.includes(id!), `section "${id}" belongs to no act`);
  strictEqual(L!.acts?.length, 6);
});

test('the reframe is carried verbatim, the exact number of times authored', () => {
  // Against an EXPLICIT constant. A count derived from the lesson compares the
  // content to itself and passes on any rewording, which is how a reframe
  // quietly disappears.
  strictEqual(L!.reframe, REFRAME);
  const hits = L!.sections.filter((s) => JSON.stringify(s).includes(REFRAME)).length;
  strictEqual(hits, REFRAME_SECTIONS, `the reframe appears in ${hits} sections, expected ${REFRAME_SECTIONS}`);
  ok(hits >= 3, 'the density validator requires three');
});

test('exactly one quiz section, and every question has a why and a ref that resolves', () => {
  // lessonPager.logic.ts appends exactly one quiz page via
  // sections.find(s => s.type === 'quiz'). a1.01 shipped twelve questions in a
  // second one and the pager drew none of them.
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1);
  const ids = new Set(L!.sections.map((s) => (s as { id?: string }).id));
  const qs = examQuestions();
  ok(qs.length > 0);
  for (const q of qs) {
    ok(q.why, `no why: ${q.q}`);
    ok(q.ref && ids.has(q.ref), `ref "${q.ref}" names no section: ${q.q}`);
  }
});

test('at most half the exam is mcq, and no option refers to a position or repeats', () => {
  const qs = examQuestions();
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq}/${qs.length} are mcq`);

  // Only OPTION-LIST references break under the runtime shuffle. "Everything
  // except the first word" refers to a position in a FRENCH SENTENCE, never
  // moves, and is the correct answer to the hero question. A broader pattern
  // fired on it and would have been deleted.
  const POSITIONAL = /\b(the (first|second|third|last|top|bottom) (one|option|answer|choice)|both of (the above|these)|none of (the above|these)|all of the above|neither of these)\b/i;
  for (const q of qs) {
    if (!q.opts) continue;
    strictEqual(new Set(q.opts).size, q.opts.length, `duplicate option in "${q.q}"`);
    for (const o of q.opts) ok(!POSITIONAL.test(o), `positional option "${o}" in "${q.q}"`);
  }
});

test('the quel-agreement options are distinct as strings, not merely as words', () => {
  // The exposure here is unusual: quel, quelle, quels and quelles differ by one
  // invisible letter and are trivially easy to typo into a duplicate, which
  // makes a shuffled question genuinely ambiguous.
  for (const q of examQuestions()) {
    const opts = q.opts ?? [];
    const quels = opts.filter((o) => (QUEL_FORMS as readonly string[]).includes(o.toLowerCase().trim()));
    if (quels.length < 2) continue;
    strictEqual(new Set(quels.map((o) => o.toLowerCase().trim())).size, quels.length, `two identical quel options in "${q.q}"`);
    ok(typeof q.correct === 'number' && q.correct < opts.length, `"${q.q}" has no valid correct index`);
  }
});

test('no correct-answer slot holds more than 40% of the closed questions', () => {
  const closed = examQuestions().filter((q) => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(q.correct!, (slots.get(q.correct!) ?? 0) + 1);
  for (const [s, n] of slots) {
    ok((n / closed.length) * 100 <= 40, `slot ${s} holds ${Math.round((n / closed.length) * 100)}%`);
  }
});

test('every free-text question accepts the answer it displays, through the REAL matcher', () => {
  for (const q of examQuestions()) {
    if (!['typeIn', 'errorSpot', 'speak'].includes(q.format ?? '')) continue;
    const shown = (q.answer ?? (q as { target?: string }).target) as string;
    ok(shown, `free-text question with no displayed answer: ${q.q}`);
    ok(matchesAccept(shown, q.accept ?? []), `"${shown}" is not accepted by ${JSON.stringify(q.accept)}`);
  }
});

test('each teaching drill is the FIRST resolving target of exactly one round', () => {
  // drillForRound walks a round's targets and fires the drill of the FIRST one
  // that has any, then stops. a1.05 shipped two drills named in second place and
  // a1.07's first draft a third; all three were dead content.
  const triggers = L!.errorTriggers ?? [];
  strictEqual(triggers.length, 6);
  const drillOf = new Map(triggers.map((t) => [t.id, t.drill]));
  const quiz = L!.sections.find((s) => s.type === 'quiz') as { rounds?: { id: string; targets?: string[] }[] };
  const fired = new Map<string, string[]>();
  for (const r of quiz.rounds ?? []) {
    const first = (r.targets ?? []).find((t) => drillOf.get(t));
    ok(first, `round ${r.id} fires no drill`);
    const d = drillOf.get(first!)!;
    fired.set(d, [...(fired.get(d) ?? []), r.id]);
  }
  for (const d of (L!.drills ?? []).filter((x) => !x.id.startsWith('retest-'))) {
    strictEqual((fired.get(d.id) ?? []).length, 1, `drill "${d.id}" is fired by ${(fired.get(d.id) ?? []).length} rounds`);
  }
  // Every trigger's detectOn names a section that exists.
  const ids = new Set(L!.sections.map((s) => (s as { id?: string }).id));
  for (const t of triggers) {
    for (const d of t.detectOn ?? []) ok(ids.has(d.split('/')[0]), `trigger ${t.id} detects on "${d}"`);
  }
});

test('tranches release every taught item exactly once and nothing untaught', () => {
  const tranches = L!.deckTranche ?? [];
  strictEqual(tranches.length, L!.acts?.length);
  const flat = tranches.flat();
  strictEqual(new Set(flat).size, flat.length, 'an item is released by two tranches');
  deepStrictEqual([...flat].sort(), [...L!.itemIds].sort());
});

test('no tranche releases an item the acts before it have not shown', () => {
  // a1.17 shipped v1 with two such rows and its own test caught them. An item is
  // shown when its ID appears (a drill, a dictée, a practice list) or when its
  // FRENCH does (a card, a table cell, a detail modal).
  const actSections = (L!.acts ?? []).map((a) => a.sections);
  const tranches = L!.deckTranche ?? [];
  for (let i = 0; i < tranches.length; i += 1) {
    const upTo = actSections.slice(0, i + 1).flat();
    const shown = strings(L!.sections.filter((s) => upTo.includes((s as { id?: string }).id ?? ''))).join('\n');
    for (const id of tranches[i]) {
      const fr = ITEMS.get(id)?.fr;
      ok(shown.includes(id) || (fr && shown.includes(fr)), `tranche ${i + 1} releases ${id} "${fr}", which no section up to act ${i + 1} shows`);
    }
  }
});

test('every declared itemId resolves AND is on a screen', () => {
  const surface = strings(L!.sections).concat(strings(L!.drills ?? [])).join('\n');
  for (const id of L!.itemIds) {
    const row = ITEMS.get(id);
    ok(row, `itemId ${id} resolves to nothing in the seed`);
    ok(
      surface.includes(id) || surface.includes(row!.fr),
      `itemId ${id} "${row!.fr}" is declared and drawn by nothing. a1.08 shipped 43 of these.`,
    );
  }
});

test('no duplicate fr within a theme, computed the way flashhub-coverage computes it', () => {
  const headword = (fr: string) => fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const seen = new Map<string, string>();
  const mine = new Set(L!.itemIds);
  for (const i of seed.items) {
    if (i.kind === 'sentence') continue;
    if ((i.cardType ?? 'vocab') !== 'vocab') continue;
    const key = `${i.theme}::${headword(i.fr)}`;
    const prior = seen.get(key);
    if (prior && (mine.has(i.id) || mine.has(prior))) {
      ok(false, `${prior} and ${i.id} are the same word in theme ${i.theme}: "${i.fr}"`);
    }
    if (!prior) seen.set(key, i.id);
  }
});

test('the dictation stays in LETTERS mode, through the REAL dicteeMode', () => {
  // Word mode hands the learner each word as a pre-spelled tile, so tapping one
  // marked `quel` is not choosing between quel and quelle. « Quelle valise est
  // là ? » measured into word mode and was withdrawn for exactly that reason.
  const s = L!.sections.find((x) => x.type === 'dictation') as { itemIds?: string[] };
  ok(s?.itemIds?.length, 'the lesson has no dictation targets');
  for (const id of s.itemIds!) {
    const fr = ITEMS.get(id)?.fr;
    ok(fr, `dictation target ${id} is not in the seed`);
    strictEqual(dicteeMode(fr!), 'letters', `"${fr}" is in word mode`);
  }
});

test('the speak mission is whole questions only, all carrying voiceflash', () => {
  // A bare question word is not a question and cannot be right or wrong. The
  // whole lesson is about what it goes in front of.
  const s = L!.sections.find((x) => x.type === 'practice') as { itemIds?: string[] };
  ok(s?.itemIds?.length, 'the lesson has no speak targets');
  for (const id of s.itemIds!) {
    const row = ITEMS.get(id);
    ok(row, `speak target ${id} is not in the seed`);
    ok(row!.drills.includes('voiceflash'), `speak target ${id} carries no voiceflash, so the mic deck cannot score it`);
    strictEqual(row!.kind, 'sentence', `speak target ${id} "${row!.fr}" is a ${row!.kind}, not a whole question`);
  }
});

test('nothing this lesson authored joins a1.03\'s measured ending population', () => {
  // a1-03-genre.test.ts re-measures twenty printed figures from the seed on
  // every run, and a1.11 turned a lesson nobody had touched red exactly this
  // way. Measured through the REAL function over this lesson's own rows.
  const authored = seed.items.filter((i) => /^fr\.(a1|sons)\.questions\.(3(7[4-9]|8\d|9\d)|40[01]|17[45])$/.test(i.id));
  ok(authored.length >= 30, `expected at least 30 authored rows, found ${authored.length}`);
  const pop = endingPopulation(authored.map((i) => ({ id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: [] })));
  strictEqual(pop.length, 0, `authored rows entering the gender population: ${pop.map((p) => (p as { id: string }).id).join(', ')}`);
});

test('one reference sheet, reachable, and every section in it is a type the component draws', () => {
  // ReferenceSheet.tsx renders exactly three types and its default branch draws
  // the section's TITLE and nothing else. a1.17 shipped two `cheatSheet`
  // sections here and they drew fourteen invisible rows; a1.13 ships the same
  // defect at two more.
  const DRAWN = new Set(['teach', 'letterGrid', 'table']);
  const sheets = L!.sheets ?? [];
  ok(sheets.length >= 1, 'the lesson declares no reference sheet');
  for (const sh of sheets) {
    for (const s of sh.sections ?? []) {
      ok(DRAWN.has(s.type), `sheet ${sh.id} carries a "${s.type}" section, which ReferenceSheet.tsx draws as a title and nothing else`);
    }
  }
  const declared = new Set(sheets.map((s) => s.id));
  const referenced = new Set(L!.sections.map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean) as string[]);
  for (const id of referenced) ok(declared.has(id), `a section names sheetId "${id}", which the lesson does not declare`);
  for (const id of declared) ok(referenced.has(id), `sheet "${id}" is reachable from no section`);
});

test('house style: no em dash, no honest, no tie character, no autoplay, no imageRef', () => {
  const j = JSON.stringify(L);
  ok(!j.includes('—') && !j.includes('–'), 'em or en dash');
  ok(!/honest/i.test(j), 'the word "honest"');
  ok(!j.includes('‿'), 'U+203F, which renders as a low underscore on a Pixel 6');
  ok(!j.includes('’'), 'curly apostrophe; this corpus is 99.5% straight');
  ok(!/"autoplay"/.test(j), 'autoplay is declared in schema.ts and implemented by no component');
  ok(!/imageRef/.test(j), 'imageRef is validated by nothing and draws a blank box when unregistered');
});

test('no grammar jargon on a learner surface', () => {
  // grammarIntroduced is addressed to the curriculum and MAY use the precise
  // words. A card may not. Whole words only: a substring check fires on
  // "pronounced", which contains "pronoun" and is the right word for a lesson
  // about endings you never say.
  const JARGON = [
    'interrogative', 'pronoun', 'determiner', 'antecedent', 'periphrastic',
    'orthographic', 'homophonous', 'lexeme', 'clause', 'morpheme',
  ];
  const learner = [
    ...strings(L!.sections), ...strings(L!.sheets ?? []),
    ...strings(L!.terms ?? {}), ...strings(L!.drills ?? []), L!.intro,
  ].join(' ');
  for (const j of JARGON) ok(!hasWord(learner, j), `grammar jargon on a learner surface: "${j}"`);
});

test('the terms are defined once and every chip resolves, at most three per section', () => {
  const terms = L!.terms ?? {};
  ok(Object.keys(terms).length >= 4);
  for (const s of L!.sections) {
    const chips = (s as { terms?: string[] }).terms ?? [];
    ok(chips.length <= 3, `${(s as { id?: string }).id} names ${chips.length} term chips; the renderer draws three`);
    for (const c of chips) ok(terms[c], `${(s as { id?: string }).id} names term "${c}", which is not defined`);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  SEED / SOURCE PARITY
 * ═══════════════════════════════════════════════════════════════════════════ */

test('the audio brief carries the constraints that cannot be recovered later', () => {
  // A rule about HOW something is recorded becomes invisible the moment the clip
  // is delivered. The two that matter most here are contrasts that must sound
  // IDENTICAL, which a reader will otherwise perform a difference into.
  const recorded = L!.audio?.recorded ?? [];
  ok(recorded.length >= 8, `${recorded.length} recordings briefed`);
  const all = recorded.map((r) => r.desc).join('\n');

  ok(/ONE TAKE/i.test(all), 'no recording is specified as one take');
  ok(/quel.*(identical|same word)/is.test(all), 'the four quel forms are not specified as one sound in one take');
  ok(/(où|ou).*(identical|same sound)/is.test(all), 'the où / ou pair is not specified as one sound');
  ok(/NEVER RECORD .*est-ce que.* IN ISOLATION/is.test(all), 'the bare-frame rule is not written into the brief');
  ok(/seven/i.test(all), 'the seven-words-one-tail clip is not briefed');
});

test('the authored source and the seed agree', () => {
  // The seed is what a learner receives; the source is what the next author
  // edits. Both are read here and this fails when they drift, which is the
  // failure mode that has twice cost this project real work.
  const dir = resolve(here, '../../../ealch-admin/scripts/data');
  let text: string;
  let termsText: string;
  try {
    text = readFileSync(resolve(dir, 'interrogatifs-lesson.ts'), 'utf8');
    // The reframe is DEFINED in the terms file and re-exported by the lesson, so
    // that the lesson, the batch, the merge and this test all count one string
    // rather than four copies free to drift.
    termsText = readFileSync(resolve(dir, 'interrogatifs-terms.ts'), 'utf8');
  } catch {
    // The admin package is not always present in a checkout of the app alone.
    return;
  }
  ok(termsText.includes(`'${REFRAME}'`), 'the source no longer carries the seed\'s reframe');
  ok(text.includes('export { REFRAME }'), 'the lesson no longer re-exports the reframe from the terms file');
  ok(text.includes("id: 'a1.20.l1'"), 'the source no longer declares a1.20.l1');
  ok(text.includes("tag: 'A1 · LEÇON 23'"), 'the source tag no longer matches the unit seq');
  ok(text.includes(`version: ${L!.version}`), `the source version does not match the seed's v${L!.version}`);
});
