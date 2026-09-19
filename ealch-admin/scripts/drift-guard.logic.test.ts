// On 2026-07-31 a publish overwrote seed-direct work: `sons.03.l1` went from
// 20 sections to 6, and `overview` collapsed on sons.01/02/03, a1.04 and
// a2.01. The guard added afterwards watched `lessons` only and compared
// `version` only, so both the same-version collapse and the overview erasure
// could still get through, and units, scenarios, playlists and speak stages
// were never watched at all.
//
// These tests are that whole surface, held open.
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { findPresenceLosses, findUnitLosses, findVersionedLosses, formatDiffReport, REPORT_KINDS } from './drift-guard.logic.ts';
import type { Lesson, Playlist, Scenario, SpeakStage, Unit } from '../../ealch-v2/src/content/schema.ts';

const lesson = (id: string, version: number, sections: number, overview?: boolean) =>
  ({
    id,
    version,
    sections: Array.from({ length: sections }, (_, i) => ({ type: 'practice', id: `s${i}` })),
    ...(overview ? { overview: { title: 'Aa' } } : {}),
  }) as unknown as Lesson;

const mapOf = <T extends { id: string }>(xs: T[]) => new Map(xs.map((x) => [x.id, x]));

test('it blocks a lesson the DB no longer has', () => {
  const committed = [lesson('sons.01.l1', 4, 20)];
  const losses = findVersionedLosses({
    kind: 'lesson',
    committed,
    live: new Map(),
    describe: (l: Lesson & { sections: unknown[] }) => `v${l.version}, ${l.sections.length} sections`,
    signals: [{ label: 'sections', of: (l: Lesson & { sections: unknown[] }) => l.sections.length }],
  });
  strictEqual(
    losses.length,
    1,
    'a lesson that is committed but has no DB row is about to be silently deleted by this publish'
  );
  ok(/would DELETE it/.test(losses[0].message), 'the message must say DELETE, that is what actually happens');
});

test('it blocks a lesson the DB would revert', () => {
  const committed = [lesson('sons.02.l1', 5, 10)];
  const live = mapOf([lesson('sons.02.l1', 3, 10)]);
  const losses = findVersionedLosses({
    kind: 'lesson',
    committed,
    live,
    describe: (l: Lesson & { sections: unknown[] }) => `v${l.version}, ${l.sections.length} sections`,
    signals: [{ label: 'sections', of: (l: Lesson & { sections: unknown[] }) => l.sections.length }],
  });
  strictEqual(losses.length, 1, 'a DB row older than the committed seed is a revert, not a routine ahead-state');
  ok(/would REVERT it/.test(losses[0].message), 'the message must say REVERT, not DELETE — the row exists, it is stale');
});

test('it does not block when Postgres is ahead of git', () => {
  // Pitfall-6 false-positive regression test: a guard that fires here blocks
  // every routine publish, because a DB ahead of git is the normal flow of
  // new content.
  const committed = [lesson('sons.03.l1', 3, 6)];
  const live = mapOf([lesson('sons.03.l1', 7, 20)]);
  const losses = findVersionedLosses({
    kind: 'lesson',
    committed,
    live,
    describe: (l: Lesson & { sections: unknown[] }) => `v${l.version}, ${l.sections.length} sections`,
    signals: [{ label: 'sections', of: (l: Lesson & { sections: unknown[] }) => l.sections.length }],
  });
  strictEqual(
    losses.length,
    0,
    'a version-ahead DB must never block — this is the routine direction and blocking it would stop every legitimate publish'
  );
});

test('it blocks a same-version lesson whose sections collapsed', () => {
  // The literal sons.03.l1 shape: 20 sections in git, 6 in the DB, same
  // version — a guard that reasons on version alone misses this entirely.
  const committed = [lesson('sons.03.l1', 4, 20)];
  const live = mapOf([lesson('sons.03.l1', 4, 6)]);
  const losses = findVersionedLosses({
    kind: 'lesson',
    committed,
    live,
    describe: (l: Lesson & { sections: unknown[] }) => `v${l.version}, ${l.sections.length} sections`,
    signals: [{ label: 'sections', of: (l: Lesson & { sections: unknown[] }) => l.sections.length }],
  });
  strictEqual(
    losses.length,
    1,
    'a guard that misses this is the 2026-07-31 incident happening again — same version, fewer sections, real loss'
  );
  ok(/FEWER sections/.test(losses[0].message), 'the message must name the signal that shrank');
});

test('it blocks an overview the DB has lost, even when the DB is version-ahead', () => {
  // The 2026-07-31 collapse on sons.01/02/03 + a1.04 + a2.01. Version relation
  // is deliberately DB-ahead here to prove the check is not gated on version.
  const committed = [lesson('a1.04.l1', 4, 10, true)];
  const live = mapOf([lesson('a1.04.l1', 9, 10, false)]);
  const losses = findPresenceLosses({
    kind: 'lesson',
    committed,
    live,
    fields: [{ label: 'an overview', present: (l: Lesson) => !!l.overview }],
  });
  strictEqual(
    losses.length,
    1,
    'an overview present in git and absent in a version-ahead DB is exactly the 2026-07-31 blind spot — version alone hid it'
  );
  ok(/overview/.test(losses[0].message), 'the message must name the field that was erased');
});

test('it blocks a scenario whose alternate answers vanished at the same version', () => {
  // The 2026-08-09 role-play rebuild shape: alts quietly dropped to zero.
  const turn = (alts: number) => ({
    ai: 'Bonjour',
    en: 'Hello',
    user: 'Bonjour',
    alts: Array.from({ length: alts }, () => ({ fr: 'Salut', en: 'Hi' })),
  });
  const scenario = (version: number, altsPerTurn: number[]) =>
    ({ id: 'sc.a1.marche.001', version, turns: altsPerTurn.map((n) => turn(n)) }) as unknown as Scenario;

  const committed = [scenario(2, [2, 1, 1])];
  const live = mapOf([scenario(2, [0, 0, 0])]);
  const losses = findVersionedLosses({
    kind: 'scenario',
    committed,
    live,
    describe: (s: Scenario) => `v${s.version}, ${s.turns.length} turns`,
    signals: [
      { label: 'turns', of: (s: Scenario) => s.turns.length },
      {
        label: 'alternate answers',
        of: (s: Scenario) => s.turns.reduce((n, t) => n + (t.alts?.length ?? 0), 0),
      },
    ],
  });
  strictEqual(
    losses.length,
    1,
    'a same-version scenario that lost every alternate answer is a real loss — the role-play reveal goes from three ways to say it to one'
  );
  ok(/alternate answers/.test(losses[0].message), 'the message must name alternate answers, not just turns');
});

test('it blocks a playlist and a speak stage the same way', () => {
  const playlist = (id: string, version: number, tracks: number) =>
    ({ id, version, tracks: Array.from({ length: tracks }, (_, i) => ({ id: `${id}-t${i}` })) }) as unknown as Playlist;
  const speakStage = (id: string, version: number, blocks: number) =>
    ({ id, version, blocks: Array.from({ length: blocks }, () => ({ itemIds: [] })) }) as unknown as SpeakStage;

  const committedPlaylist = [playlist('pl.a1.la-voix', 5, 8)];
  const livePlaylist = mapOf([playlist('pl.a1.la-voix', 2, 8)]);
  const playlistLosses = findVersionedLosses({
    kind: 'playlist',
    committed: committedPlaylist,
    live: livePlaylist,
    describe: (p: Playlist) => `v${p.version}, ${p.tracks.length} tracks`,
    signals: [{ label: 'tracks', of: (p: Playlist) => p.tracks.length }],
  });

  const committedStage = [speakStage('speak.2.3', 1, 4)];
  const stageLosses = findVersionedLosses({
    kind: 'speak stage',
    committed: committedStage,
    live: new Map(),
    describe: (s: SpeakStage) => `v${s.version}, ${s.blocks.length} blocks`,
    signals: [{ label: 'blocks', of: (s: SpeakStage) => s.blocks.length }],
  });

  strictEqual(
    playlistLosses.length + stageLosses.length,
    2,
    'playlists and speak stages must be covered by the same comparator as lessons and scenarios — before this phase neither was watched at all'
  );
  strictEqual(playlistLosses[0].kind, 'playlist', 'the loss must be labelled with its kind for the grouped CLI output');
  strictEqual(stageLosses[0].kind, 'speak stage', 'the loss must be labelled with its kind for the grouped CLI output');
});

test('it does not mistake the publisher\'s own lesson pruning for a lost unit', () => {
  // Pitfall 3: a1.04.l2 legitimately left the published set (step 2's prune),
  // so its absence from the unit must not be reported.
  const committedUnit = [{ id: 'a1.04', lessonIds: ['a1.04.l1', 'a1.04.l2'] } as unknown as Unit];
  const livePruned = mapOf([{ id: 'a1.04', lessonIds: ['a1.04.l1'] } as unknown as Unit]);
  const losses = findUnitLosses({
    committed: committedUnit,
    livePruned,
    livePublishedLessonIds: new Set(['a1.04.l1']),
  });
  strictEqual(
    losses.length,
    0,
    'a lesson that is no longer published anywhere is the publisher\'s own routine prune, not a loss — reporting it would fire on every normal publish'
  );
});

test('it blocks a unit that dropped a lesson which is still published', () => {
  const committedUnit = [{ id: 'a1.04', lessonIds: ['a1.04.l1', 'a1.04.l2'] } as unknown as Unit];
  const livePruned = mapOf([{ id: 'a1.04', lessonIds: ['a1.04.l1'] } as unknown as Unit]);
  const losses = findUnitLosses({
    committed: committedUnit,
    livePruned,
    livePublishedLessonIds: new Set(['a1.04.l1', 'a1.04.l2']),
  });
  strictEqual(
    losses.length,
    1,
    'a1.04.l2 is still published elsewhere but this unit no longer lists it — that is a real loss of the unit-lesson link, not a prune'
  );
  ok(losses[0].message.includes('a1.04.l2'), 'the message must name the specific lesson id that was dropped');
});

// PUBLISH-02: formatDiffReport turns step 7's console-only diff into one
// human-readable report, printed AND written to disk on every publish and
// every dry-run — including the first-snapshot and identical/no-op paths, so
// the habit of reviewing what a publish does is never conditional on there
// being news.
const REPORT_COUNTS = {
  domains: 1, themes: 2, units: 3, lessons: 4, items: 5,
  scenarios: 6, playlists: 7, speakPath: 8, examTasks: 9, examPapers: 10,
};

test('it reports the FIRST snapshot when there is no previous, with every kind counted', () => {
  const report = formatDiffReport({
    version: 1,
    previous: null,
    counts: REPORT_COUNTS,
    noop: false,
    checksum: 'abc123',
    contentDigest: 'def456',
    snapshotBytes: 1000,
    dryRun: false,
    generatedAt: '2026-09-19T00:00:00.000Z',
  });
  ok(report.includes('v1 is the FIRST snapshot.'), 'must say FIRST snapshot when there is no previous to compare against');
  for (const kind of REPORT_KINDS) {
    ok(report.includes(kind), `counts table must list ${kind} even on the first snapshot`);
  }
});

test('it still reports when nothing changed', () => {
  const report = formatDiffReport({
    version: 5,
    previous: { version: 4, counts: REPORT_COUNTS },
    counts: REPORT_COUNTS,
    noop: true,
    checksum: 'abc',
    contentDigest: 'def',
    snapshotBytes: 500,
    previousSnapshotBytes: 500,
    dryRun: true,
    generatedAt: '2026-09-19T00:00:00.000Z',
  });
  ok(report.includes('IDENTICAL to v4'), 'the no-op branch must name the version it is identical to');
  for (const kind of REPORT_KINDS) {
    ok(
      report.includes(kind),
      `the no-op report must still list ${kind} — D-02 says the report is never conditional on there being news`
    );
  }
});

test('it reports version-to-version deltas for a normal publish', () => {
  const previousCounts = { ...REPORT_COUNTS };
  const counts = { ...REPORT_COUNTS, units: 6, lessons: 2 }; // +3, -2
  const report = formatDiffReport({
    version: 6,
    previous: { version: 5, counts: previousCounts },
    counts,
    noop: false,
    checksum: 'abc',
    contentDigest: 'def',
    snapshotBytes: 700,
    previousSnapshotBytes: 650,
    dryRun: false,
    generatedAt: '2026-09-19T00:00:00.000Z',
  });
  ok(report.includes('v5 → v6'), 'must show the version transition');
  ok(report.includes('+3'), 'units grew by 3 and the delta column must show it');
  ok(report.includes('-2'), 'lessons shrank by 2 and the delta column must show it');
  ok(report.includes('+0'), 'a kind with no change must still show a signed +0, not a bare 0');
});

test('it surfaces a compareNote when the previous snapshot could not be fetched', () => {
  const report = formatDiffReport({
    version: 2,
    previous: { version: 1, counts: REPORT_COUNTS },
    counts: REPORT_COUNTS,
    noop: false,
    compareNote: 'Storage timed out after 5000ms',
    checksum: 'abc',
    contentDigest: 'def',
    snapshotBytes: 100,
    dryRun: false,
    generatedAt: '2026-09-19T00:00:00.000Z',
  });
  ok(report.includes('Storage timed out after 5000ms'), 'the compareNote text must appear verbatim in the report');
});

test('it reports every kind, including the speakPath the old counts object forgot', () => {
  const report = formatDiffReport({
    version: 1,
    previous: null,
    counts: REPORT_COUNTS,
    noop: false,
    checksum: 'abc',
    contentDigest: 'def',
    snapshotBytes: 1,
    dryRun: false,
    generatedAt: '2026-09-19T00:00:00.000Z',
  });
  strictEqual(REPORT_KINDS.length, 10, 'ten corpus kinds is the whole surface this report accounts for');
  for (const kind of REPORT_KINDS) {
    ok(report.includes(kind), `${kind} must appear in the report — a report that omits a kind is the same blind spot in a different place`);
  }
  ok(report.includes('speakPath'), 'speakPath specifically was missing from the old counts object entirely');
});

test('it shows a signed size delta against the previous snapshot when known', () => {
  const report = formatDiffReport({
    version: 2,
    previous: { version: 1, counts: REPORT_COUNTS },
    counts: REPORT_COUNTS,
    noop: false,
    checksum: 'abc',
    contentDigest: 'def',
    snapshotBytes: 1200,
    previousSnapshotBytes: 1000,
    dryRun: false,
    generatedAt: '2026-09-19T00:00:00.000Z',
  });
  ok(report.includes('1000'), 'the previous byte size must be shown');
  ok(report.includes('1200'), 'the current byte size must be shown');
  ok(report.includes('+200'), 'the size delta must be signed');
});

test('it shows an em-dash for the previous size when it could not be read', () => {
  const report = formatDiffReport({
    version: 1,
    previous: null,
    counts: REPORT_COUNTS,
    noop: false,
    checksum: 'abc',
    contentDigest: 'def',
    snapshotBytes: 900,
    dryRun: false,
    generatedAt: '2026-09-19T00:00:00.000Z',
  });
  ok(report.includes('900'), 'the current byte size must still be shown');
  ok(report.includes('—'), 'the previous size column must show an em-dash when there is nothing to compare against');
});

test('it names the mode as dry run or publish', () => {
  const base = {
    version: 1,
    previous: null,
    counts: REPORT_COUNTS,
    noop: false,
    checksum: 'abc',
    contentDigest: 'def',
    snapshotBytes: 1,
    generatedAt: '2026-09-19T00:00:00.000Z',
  };
  ok(formatDiffReport({ ...base, dryRun: true }).includes('dry run'), 'dryRun: true must say dry run');
  ok(formatDiffReport({ ...base, dryRun: false }).includes('publish'), 'dryRun: false must say publish');
});

test('it always starts with the report heading and ends with exactly one trailing newline', () => {
  const report = formatDiffReport({
    version: 1,
    previous: null,
    counts: REPORT_COUNTS,
    noop: false,
    checksum: 'abc',
    contentDigest: 'def',
    snapshotBytes: 1,
    dryRun: false,
    generatedAt: '2026-09-19T00:00:00.000Z',
  });
  ok(report.startsWith('# Publish report'), 'the report must open with its heading');
  ok(report.endsWith('\n') && !report.endsWith('\n\n'), 'the report must end with exactly one trailing newline, not zero or two');
});

test('it is a no-op when there is no committed seed to read', () => {
  // The fresh-clone / no-git-history path the CLI's try/catch produces.
  for (const committed of [null, undefined]) {
    strictEqual(
      findVersionedLosses({
        kind: 'lesson',
        committed: committed as unknown as Lesson[] | null | undefined,
        live: new Map(),
        describe: () => '',
      }).length,
      0,
      'no committed seed means nothing to compare — must return empty, not throw'
    );
    strictEqual(
      findUnitLosses({
        committed: committed as unknown as Unit[] | null | undefined,
        livePruned: new Map(),
        livePublishedLessonIds: new Set(),
      }).length,
      0,
      'no committed seed means nothing to compare — must return empty, not throw'
    );
    strictEqual(
      findPresenceLosses({
        kind: 'lesson',
        committed: committed as unknown as Lesson[] | null | undefined,
        live: new Map(),
        fields: [],
      }).length,
      0,
      'no committed seed means nothing to compare — must return empty, not throw'
    );
  }
});
