// Pins the pure half of the B1 import pipeline (b1-import.logic.ts): the plan,
// its guards, the version rule and the seed merge. A guard that weakens here
// lets a wave overwrite a published row or wipe learners' progress.
import { test } from 'node:test';
import { deepStrictEqual, ok, strictEqual, throws } from 'node:assert';
import {
  B1_SLUGS, authoredFloors, crossLessonClashes, dbRowToItem, mergeIntoSeed, normaliseItem,
  planLesson, sameItem, twinCount, unitBody, versionVerdict, headwordClashes, headwordKey,
  type DbState, type LessonInput,
} from './b1-import.logic.ts';

const row = (n: number, over: Record<string, unknown> = {}) => ({
  id: `fr.b1.recits-au-passe.${n}`, kind: 'sentence', level: 'b1', theme: 'recits-au-passe',
  fr: `Phrase ${n}.`, en: `Sentence ${n}.`, tags: ['imparfait'], drills: ['flashcard'], version: 1,
  ...over,
});

const lesson = (over: Record<string, unknown> = {}) => ({
  id: 'b1.01.l1', unitId: 'b1.01', version: 2, title: 'T',
  sections: [{ id: 's01', type: 'teach' }, { id: 's02', type: 'task' }],
  acts: [{ id: 'act1', title: 'A', sections: ['s01', 's02'], opener: { line: 'x', imageRef: 'lessons/imparfait/act01.jpg' } }],
  itemIds: ['fr.b1.recits-au-passe.1401', 'fr.a2.verbes.001'],
  ...over,
});

const input = (over: Partial<LessonInput> = {}): LessonInput => ({
  slug: 'imparfait-formation',
  unit: { id: 'b1.01', seq: 1, title: 'The Imperfect', sub: "L'imparfait", canDo: 'x', prereqUnitIds: ['a2.01'] },
  lesson: lesson(),
  rows: [row(1401)],
  ...over,
});

const emptyDb = (over: Partial<DbState> = {}): DbState => ({
  items: new Map([['fr.a2.verbes.001', { status: 'published', item: normaliseItem(row(1, { id: 'fr.a2.verbes.001', level: 'a2', theme: 'verbes' })) }]]),
  units: new Map(),
  themes: new Set(['recits-au-passe', 'verbes']),
  ...over,
});

const ctx = { reapply: false, runAuthored: new Set(['fr.b1.recits-au-passe.1401']), images: new Set(['lessons/imparfait/act01.jpg']) };

test('the slug registry lists every authored lesson once', () => {
  strictEqual(new Set(B1_SLUGS).size, B1_SLUGS.length);
  strictEqual(B1_SLUGS.length, 34);
  strictEqual(B1_SLUGS[0], 'imparfait-formation');
});

test('a clean first import plans creates and nothing else', () => {
  const p = planLesson(input(), emptyDb(), ctx);
  deepStrictEqual(p.blockers, []);
  deepStrictEqual(p.insert, ['fr.b1.recits-au-passe.1401']);
  strictEqual(p.unit, 'create');
  strictEqual(p.lesson, 'create');
  strictEqual(p.reusedPublished, 1);
  deepStrictEqual(p.warnings, []);
});

test('an identical existing row is skipped, not rewritten', () => {
  const db = emptyDb();
  db.items.set('fr.b1.recits-au-passe.1401', { status: 'published', item: normaliseItem(row(1401)) });
  const p = planLesson(input(), db, ctx);
  deepStrictEqual(p.skip, ['fr.b1.recits-au-passe.1401']);
  deepStrictEqual(p.insert, []);
  deepStrictEqual(p.blockers, []);
});

test('an existing row with different content is REFUSED without --reapply', () => {
  const db = emptyDb();
  db.items.set('fr.b1.recits-au-passe.1401', { status: 'published', item: normaliseItem(row(1401, { fr: 'Autre chose.' })) });
  const p = planLesson(input(), db, ctx);
  deepStrictEqual(p.conflict, ['fr.b1.recits-au-passe.1401']);
  ok(p.blockers.some((b) => /DIFFERENT content/.test(b)));
  const r = planLesson(input(), db, { ...ctx, reapply: true });
  deepStrictEqual(r.update, ['fr.b1.recits-au-passe.1401']);
  deepStrictEqual(r.blockers, []);
});

test('key order, empty grammarPoints and a missing audioRef are not differences', () => {
  const a = row(1401, { grammarPoints: [] });
  const b = { audioRef: null, ...row(1401) };
  ok(sameItem(a, b));
  ok(!sameItem(a, row(1401, { en: 'Other.' })));
});

test('a DB row maps to the same shape as the authored row', () => {
  const authored = row(1401, { respell: 'zhah', cardType: 'conjugation', prompt: 'p', verbCheck: { infinitive: 'x', tense: 'imparfait', person: '1', number: 's' }, grammarPoints: ['imparfait'] });
  const db = {
    id: authored.id, kind: 'sentence', level: 'b1', theme: 'recits-au-passe', fr: authored.fr, en: authored.en,
    ipa: null, respell: 'zhah', gender: null, example: null, notes: null, tags: ['imparfait'], drills: '{flashcard}',
    audio_ref: null, image_ref: null, segments: null, asset_key: null, version: 1, skill: null, register: null,
    can_do: null, grammar_points: ['imparfait'], modality: null,
    verb_check: { number: 's', person: '1', tense: 'imparfait', infinitive: 'x' }, card_type: 'conjugation', prompt: 'p',
  };
  ok(sameItem(dbRowToItem(db), authored), 'the raw enum-array literal and jsonb key order must not read as a change');
});

test('a missing theme and an unpublished or absent named row are blockers', () => {
  const db = emptyDb({ themes: new Set(['verbes']) });
  db.items.set('fr.a2.verbes.001', { status: 'draft', item: {} });
  const p = planLesson(input({ lesson: lesson({ itemIds: ['fr.b1.recits-au-passe.1401', 'fr.a2.verbes.001', 'fr.b1.recits-au-passe.1999'] }) }), db, ctx);
  ok(p.blockers.some((b) => /not in content_themes/.test(b)));
  ok(p.blockers.some((b) => /fr\.a2\.verbes\.001.*'draft'/.test(b)));
  ok(p.blockers.some((b) => /1999.*neither published nor authored/.test(b)));
});

test('a row named from ANOTHER lesson in the same run resolves (the batch quotes itself)', () => {
  const run = new Set(['fr.b1.recits-au-passe.1401', 'fr.b1.recits-au-passe.1500']);
  const p = planLesson(input({ lesson: lesson({ itemIds: ['fr.b1.recits-au-passe.1401', 'fr.b1.recits-au-passe.1500'] }) }), emptyDb(), { ...ctx, runAuthored: run });
  deepStrictEqual(p.blockers, []);
  strictEqual(p.reusedInRun, 1);
});

test('foreign fr.b1 rows above the floor block the theme', () => {
  const p = planLesson(input(), emptyDb({ foreignAboveFloor: new Map([['recits-au-passe', ['fr.b1.recits-au-passe.2000']]]) }), ctx);
  ok(p.blockers.some((b) => /at or above the authored floor/.test(b)));
});

test('the floor is computed per theme from full ids, not across levels', () => {
  const f = authoredFloors(['fr.b1.recits-au-passe.1401', 'fr.b1.recits-au-passe.116', 'fr.b1.projets-et-futur.200']);
  strictEqual(f.get('recits-au-passe'), 116);
  strictEqual(f.get('projets-et-futur'), 200);
});

test('an existing unit or lesson: identical skips, different refuses, --reapply updates', () => {
  const x = input();
  const same = emptyDb({ units: new Map([
    ['b1.01', { kind: 'curriculum_unit', status: 'published', body: unitBody(x.unit, 'b1.01.l1') }],
    ['b1.01.l1', { kind: 'lesson', status: 'published', body: lesson() }],
  ]) });
  const p = planLesson(x, same, ctx);
  strictEqual(p.unit, 'skip');
  strictEqual(p.lesson, 'skip');
  const diff = emptyDb({ units: new Map([
    ['b1.01', { kind: 'curriculum_unit', status: 'published', body: { ...unitBody(x.unit, 'b1.01.l1'), title: 'Old' } }],
    ['b1.01.l1', { kind: 'lesson', status: 'published', body: lesson({ title: 'Old' }) }],
  ]) });
  const q = planLesson(x, diff, ctx);
  strictEqual(q.unit, 'conflict');
  strictEqual(q.lesson, 'conflict');
  const r = planLesson(x, diff, { ...ctx, reapply: true });
  strictEqual(r.unit, 'update');
  strictEqual(r.lesson, 'update');
  deepStrictEqual(r.blockers, []);
});

test('THE VERSION RULE: a text edit keeps the version, and a text-only bump is refused even under --reapply', () => {
  const v1 = lesson();
  deepStrictEqual(versionVerdict(v1, lesson({ title: 'New wording' })), { ok: true, kind: 'text-edit' });
  const bump = versionVerdict(v1, lesson({ title: 'New wording', version: 3 }));
  ok(!bump.ok && /SAME section list/.test(bump.reason));
  const x = input({ lesson: lesson({ version: 3 }) });
  const db = emptyDb({ units: new Map([['b1.01.l1', { kind: 'lesson', status: 'published', body: v1 }]]) });
  ok(planLesson(x, db, { ...ctx, reapply: true }).blockers.some((b) => /text-only bump/.test(b)));
});

test('THE VERSION RULE: a changed section list must raise the version', () => {
  const moved = { sections: [{ id: 's01', type: 'teach' }, { id: 's03', type: 'quiz' }, { id: 's02', type: 'task' }] };
  const stay = versionVerdict(lesson(), lesson(moved));
  ok(!stay.ok && /did not rise/.test(stay.reason));
  deepStrictEqual(versionVerdict(lesson(), lesson({ ...moved, version: 3 })), { ok: true, kind: 'structural-bump' });
});

test('unregistered opener art and a missing task section are warnings, not blockers', () => {
  const p = planLesson(input({ lesson: lesson({ sections: [{ id: 's01', type: 'teach' }] }) }), emptyDb(), { ...ctx, images: new Set() });
  deepStrictEqual(p.blockers, []);
  ok(p.warnings.some((w) => /opener image/.test(w)));
  ok(p.warnings.some((w) => /0 task section/.test(w)));
});

test('DB_ONLY_TWINS are counted in either shape and never change the plan', () => {
  strictEqual(twinCount([{ dbId: 'a' }, { dbId: 'b' }]), 2);
  strictEqual(twinCount({ a: 'x', b: 'y', c: 'z' }), 3);
  strictEqual(twinCount(undefined), 0);
  const p = planLesson(input({ twins: [{ dbId: 'a' }] }), emptyDb(), ctx);
  strictEqual(p.twins, 1);
  deepStrictEqual(p.insert, ['fr.b1.recits-au-passe.1401']);
});

test('an id authored by two lessons must be the same row', () => {
  deepStrictEqual(crossLessonClashes([{ slug: 'a', rows: [row(1)] }, { slug: 'b', rows: [row(1)] }]), []);
  strictEqual(crossLessonClashes([{ slug: 'a', rows: [row(1)] }, { slug: 'b', rows: [row(1, { fr: 'x' })] }]).length, 1);
});

test('the seed merge appends new docs, replaces changed ones in place, and leaves the input alone', () => {
  const seed = {
    version: 9,
    units: [{ id: 'a2.35' }],
    lessons: [{ id: 'a2.35.l1', version: 1, sections: [] }],
    items: [row(1, { id: 'fr.a2.verbes.001' }), row(1401, { fr: 'Old.' })],
  };
  const before = JSON.stringify(seed);
  const { seed: out, stats } = mergeIntoSeed(seed, {
    units: [unitBody(input().unit, 'b1.01.l1')], lessons: [lesson()],
    items: [row(1, { id: 'fr.a2.verbes.001' }), row(1401), row(1402)],
  }, (id) => id.startsWith('fr.b1.'));
  strictEqual(JSON.stringify(seed), before, 'the input seed must not be mutated');
  deepStrictEqual(stats.unitsAdded, ['b1.01']);
  deepStrictEqual(stats.lessonsAdded, ['b1.01.l1']);
  deepStrictEqual(stats.itemsAdded, ['fr.b1.recits-au-passe.1402']);
  deepStrictEqual(stats.itemsReplaced, ['fr.b1.recits-au-passe.1401']);
  strictEqual(stats.itemsUnchanged, 1);
  strictEqual(out.items[1]!.fr, 'Phrase 1401.', 'replaced in place, position kept');
  strictEqual(out.version, 9);
});

test('the seed merge never rewrites a row it does not own, and refuses a text-only bump', () => {
  const seed = { version: 1, units: [], lessons: [lesson()], items: [row(1, { id: 'fr.a2.verbes.001' })] };
  const other = mergeIntoSeed(seed, { units: [], lessons: [], items: [row(1, { id: 'fr.a2.verbes.001', fr: 'Changed.' })] }, (id) => id.startsWith('fr.b1.'));
  deepStrictEqual(other.stats.itemsLeftAlone, ['fr.a2.verbes.001']);
  strictEqual(other.seed.items[0]!.fr, 'Phrase 1.', "somebody else's row keeps the seed copy");
  throws(() => mergeIntoSeed(seed, { units: [], lessons: [lesson({ version: 3 })], items: [] }, () => true), /SAME section list/);
  const again = mergeIntoSeed(seed, { units: [], lessons: [lesson()], items: [] }, () => true);
  deepStrictEqual(again.stats.lessonsReplaced, [], 'an identical re-merge is a no-op');
});

test('the flashcard-hub duplicate rule: article dropped, sentences and non-vocab cards exempt', () => {
  const a = row(1115, { kind: 'phrase', fr: "d'habitude" });
  const b = row(1514, { kind: 'phrase', fr: "d'habitude" });
  const art = row(1600, { kind: 'word', fr: 'la maison' });
  const art2 = row(1601, { kind: 'word', fr: 'maison' });
  const s1 = row(1700, { kind: 'sentence', fr: 'Pareil.' });
  const s2 = row(1701, { kind: 'sentence', fr: 'Pareil.' });
  const c1 = row(1800, { kind: 'phrase', fr: 'je parlais', cardType: 'conjugation' });
  const c2 = row(1801, { kind: 'phrase', fr: 'je parlais', cardType: 'conjugation' });
  const clashes = headwordClashes([b, art2, s2, c2], [a, art, s1, c1]);
  deepStrictEqual(clashes.map((x) => [x.a, x.b]), [
    ['fr.b1.recits-au-passe.1115', 'fr.b1.recits-au-passe.1514'],
    ['fr.b1.recits-au-passe.1600', 'fr.b1.recits-au-passe.1601'],
  ]);
  deepStrictEqual(headwordClashes([b], [b]), [], 'a row already published as itself is not its own twin');
  strictEqual(headwordKey(s1), null);
});
