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
import { findPresenceLosses, findUnitLosses, findVersionedLosses } from './drift-guard.logic.ts';
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
