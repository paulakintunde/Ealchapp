import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { playlists } from '../content/playlists.ts';
import { ITEM_ID_RE, LEVELS, SCENARIO_ID_RE } from '../content/schema.ts';
import { bandCap, introEligible } from '../store/progress.logic.ts';
import {
  parseTrackParam,
  playlistDeck,
  playlistStartIx,
  playerRouteFor,
  playlistTrackAt,
  listenPlaylistForDay,
  playlistPool,
  resolvePlaylistParam,
  shouldLogListen,
  speakRouteFor,
  LISTEN_SESSION_LINES,
} from './speakDeck.logic.ts';

// Counted here, independently of playlistDeck, so the deck is checked against a
// number that does not share its flatten. It lived in speakDeck.logic and the
// app never called it.
const lineCount = (p: { tracks: { lines: unknown[] }[] }) =>
  p.tracks.reduce((sum, tk) => sum + tk.lines.length, 0);

// The bug this file exists to prevent: every playlist opening the SAME speak
// deck. That shipped because nothing anywhere asserted a playlist's voice
// content was its own — the player's practice button pushed a bare '/speak'
// and there was no test file for playlists at all. These are the assertions
// that make the regression loud.

test('every playlist yields a deck of its own lines', () => {
  const byIds = new Map<string, string[]>();
  const byFr = new Map<string, string[]>();
  for (const p of playlists) {
    const deck = playlistDeck(p);
    ok(deck.length > 0, `${p.id} has no lines`);
    const idKey = deck.map((c) => c.id).join('|');
    const frKey = deck.map((c) => c.fr).join('|');
    byIds.set(idKey, [...(byIds.get(idKey) ?? []), p.id]);
    byFr.set(frKey, [...(byFr.get(frKey) ?? []), p.id]);
  }
  strictEqual(byIds.size, playlists.length, 'two playlists share a card-id sequence');
  const dupes = [...byFr.values()].filter((v) => v.length > 1);
  strictEqual(dupes.length, 0, `playlists share their spoken lines: ${JSON.stringify(dupes)}`);
});

test('card ids are unique across every playlist', () => {
  const ids = playlists.flatMap((p) => playlistDeck(p).map((c) => c.id));
  strictEqual(new Set(ids).size, ids.length, 'a card id repeats across the playlist set');
});

test('a card id is never mistaken for a corpus item or a scenario', () => {
  // isSchedulable (progress.logic.ts) keys the SRS on ITEM_ID_RE. A playlist
  // line has no recall card, so a card id that passed this regex would put an
  // undrillable row into Smart Review — where smartreview.tsx falls back to
  // rendering the raw id. Every id must fail it.
  for (const p of playlists) {
    for (const card of playlistDeck(p)) {
      ok(!ITEM_ID_RE.test(card.id), `${card.id} would be scheduled by the SRS`);
      ok(!SCENARIO_ID_RE.test(card.id), `${card.id} reads as a scenario id`);
    }
  }
});

test('a deck holds exactly the playlist line count, in track order', () => {
  for (const p of playlists) {
    const deck = playlistDeck(p);
    strictEqual(deck.length, lineCount(p), `${p.id} deck length`);
    let n = 0;
    for (const tk of p.tracks) {
      for (let i = 0; i < tk.lines.length; i += 1) {
        strictEqual(deck[n].fr, tk.lines[i].fr, `${p.id} line ${n}`);
        strictEqual(deck[n].en, tk.lines[i].en, `${p.id} gloss ${n}`);
        n += 1;
      }
    }
  }
});

test('a track index and a flattened line index agree in both directions', () => {
  // Listen and Voice must mean the same thing by "track 4": entering the mic
  // from a track row has to start on the line that row was showing.
  for (const p of playlists) {
    for (let tk = 0; tk < p.tracks.length; tk += 1) {
      const start = playlistStartIx(p, tk);
      strictEqual(playlistTrackAt(p, start), tk, `${p.id} track ${tk} round trip`);
      strictEqual(
        playlistDeck(p)[start].id,
        `${p.tracks[tk].id}.l0`,
        `${p.id} track ${tk} does not start on its own first line`
      );
    }
    strictEqual(playlistStartIx(p, 0), 0, `${p.id} first track starts at 0`);
  }
});

test('an out-of-range or junk track lands inside the playlist', () => {
  const p = playlists[0];
  const last = p.tracks.length - 1;
  strictEqual(parseTrackParam(p, undefined), 0);
  strictEqual(parseTrackParam(p, '2'), 2);
  strictEqual(parseTrackParam(p, ['2', '9']), 2, 'a repeated key takes the first value');
  strictEqual(parseTrackParam(p, 'banana'), 0);
  strictEqual(parseTrackParam(p, '-4'), 0);
  strictEqual(parseTrackParam(p, '9999'), last);
  strictEqual(playlistStartIx(p, 9999), playlistStartIx(p, last));
  strictEqual(playlistStartIx(p, -4), 0);
  strictEqual(playlistTrackAt(p, 9999), last);
});

test('the practice route carries the playlist it was opened from', () => {
  // The whole defect in one assertion: without a playlist the route is the
  // trail, and with one it must name it.
  strictEqual(speakRouteFor(), '/speak');
  strictEqual(speakRouteFor(undefined, 3), '/speak');
  strictEqual(speakRouteFor('la-voix', 0), '/speak?playlist=la-voix&track=0');
  strictEqual(speakRouteFor('argot', 2), '/speak?playlist=argot&track=2');
  strictEqual(speakRouteFor('argot', -1), '/speak?playlist=argot&track=0');

  const routes = new Set(playlists.map((p) => speakRouteFor(p.id, 0)));
  strictEqual(routes.size, playlists.length, 'two playlists produce the same practice route');
});

test('the listening route is a value too, and round-trips with the practice one', () => {
  strictEqual(playerRouteFor('la-voix', 0), '/player?playlist=la-voix&track=0');
  strictEqual(playerRouteFor('argot', 2), '/player?playlist=argot&track=2');
  strictEqual(playerRouteFor('argot', -1), '/player?playlist=argot&track=0');

  // Listen and Voice name the same playlist and the same track, always. If one
  // side ever stops carrying the playlist, these diverge.
  for (const p of playlists) {
    for (let tk = 0; tk < p.tracks.length; tk += 1) {
      const listen = playerRouteFor(p.id, tk);
      const voice = speakRouteFor(p.id, tk);
      strictEqual(
        listen.slice(listen.indexOf('?')),
        voice.slice(voice.indexOf('?')),
        `${p.id} track ${tk}: listen and voice disagree`
      );
    }
  }
});

test('a named-but-absent playlist is its own case, never a silent substitution', () => {
  // The bug this pins: both screens used to collapse "missing" into "none".
  // A link to a deleted playlist then played 21,650 unrelated corpus phrases in
  // the player, and opened whatever trail station the avatar was on in Speak,
  // with nothing on screen saying so.
  strictEqual(resolvePlaylistParam('nope-not-a-playlist').kind, 'missing');
  strictEqual(resolvePlaylistParam('la-voix').kind, 'found');
  strictEqual(resolvePlaylistParam(undefined).kind, 'none');

  const missing = resolvePlaylistParam('nope-not-a-playlist');
  ok(missing.kind === 'missing' && missing.id === 'nope-not-a-playlist', 'missing carries the id it was asked for');
});

test('an empty or repeated playlist param resolves the way a route can produce it', () => {
  // An empty value is not a request: /player?playlist= must still be the
  // default listening pass, not an empty screen.
  strictEqual(resolvePlaylistParam('').kind, 'none');
  strictEqual(resolvePlaylistParam([]).kind, 'none');
  strictEqual(resolvePlaylistParam(['']).kind, 'none');
  // expo-router hands back an array for a repeated key; the first value wins,
  // exactly as parseTrackParam already does for ?track=.
  const first = resolvePlaylistParam(['argot', 'la-voix']);
  ok(first.kind === 'found' && first.playlist.id === 'argot', 'a repeated key takes the first value');
});

test('every real playlist id resolves, and every route we mint resolves back', () => {
  for (const p of playlists) {
    const r = resolvePlaylistParam(p.id);
    ok(r.kind === 'found' && r.playlist.id === p.id, `${p.id} does not resolve`);
    // The route builders and the resolver must agree, or a link this app mints
    // could land on its own empty state.
    const id = new URL(`https://x${playerRouteFor(p.id, 0)}`).searchParams.get('playlist');
    strictEqual(resolvePlaylistParam(id ?? undefined).kind, 'found', `playerRouteFor(${p.id}) does not round-trip`);
    const sid = new URL(`https://x${speakRouteFor(p.id, 0)}`).searchParams.get('playlist');
    strictEqual(resolvePlaylistParam(sid ?? undefined).kind, 'found', `speakRouteFor(${p.id}) does not round-trip`);
  }
});

test('a listening session is logged by the end of a set OR a sitting of lines', () => {
  // The bug: logging only on the last line. A playlist ends so it worked there,
  // but the default pass streams 21,650 corpus phrases and has no last line, so
  // listening could never count toward a streak.
  const big = 21650;

  // The stream: never reaches the end, so the threshold is the only route.
  strictEqual(shouldLogListen({ heard: 1, index: 0, total: big, alreadyLogged: false }), false);
  strictEqual(shouldLogListen({ heard: LISTEN_SESSION_LINES - 1, index: 8, total: big, alreadyLogged: false }), false);
  strictEqual(shouldLogListen({ heard: LISTEN_SESSION_LINES, index: 9, total: big, alreadyLogged: false }), true);

  // A short set finishes long before the threshold and must still count. Six is
  // l-oreille, the smallest playlist in the corpus.
  strictEqual(shouldLogListen({ heard: 6, index: 5, total: 6, alreadyLogged: false }), true);

  // Once per visit.
  strictEqual(shouldLogListen({ heard: 999, index: 5, total: 6, alreadyLogged: true }), false);

  // An empty deck logs nothing — no phantom session from the empty state.
  strictEqual(shouldLogListen({ heard: 0, index: 0, total: 0, alreadyLogged: false }), false);
});

test('skipping cannot manufacture a listening session', () => {
  // `heard` counts lines that finished PLAYING. Holding skip moves index without
  // moving heard, so a learner who skipped to line 500 of the stream and heard
  // nothing has not had a session.
  strictEqual(shouldLogListen({ heard: 0, index: 500, total: 21650, alreadyLogged: false }), false);
  strictEqual(shouldLogListen({ heard: 2, index: 500, total: 21650, alreadyLogged: false }), false);
  // But skipping to the end of a SET is reaching the end of it, which counts —
  // the set is finishable and the learner got there.
  strictEqual(shouldLogListen({ heard: 0, index: 43, total: 44, alreadyLogged: false }), true);
});

test("the daily listening offer never sits above the learner's level", () => {
  // minLevel has been carried on every playlist since they were authored,
  // gating nothing. This is the feed it was written for: argot is b1, and a
  // sons learner being handed slang is the case the field exists to prevent.
  for (const storeLevel of ['sons', 'a1', 'A1', 'a2', 'b1', 'B1', 'b2', 'c1']) {
    const cap = LEVELS.indexOf(storeLevel.toLowerCase());
    for (let day = 0; day < 40; day += 1) {
      const p = listenPlaylistForDay(storeLevel, day);
      ok(p, `${storeLevel} day ${day} got no offer`);
      ok(
        LEVELS.indexOf(p.minLevel) <= cap,
        `${storeLevel} was offered ${p.id} (${p.minLevel}), which is above it`
      );
    }
  }
});

test('an unknown stored level is capped, not trusted', () => {
  // The store keeps level as a loose string and defaults to 'B1'; onboarding
  // and placement both write it. introEligible caps an unrecognised value at
  // a1 and this must agree, or the two disagree about the same learner.
  const capA1 = LEVELS.indexOf('a1');
  for (const storeLevel of ['', 'banana', 'Z9', 'intermediate']) {
    for (let day = 0; day < 20; day += 1) {
      const p = listenPlaylistForDay(storeLevel, day);
      ok(p && LEVELS.indexOf(p.minLevel) <= capA1, `"${storeLevel}" was offered ${p?.id}`);
    }
  }
});

test('the offer is stable within a day and moves across days', () => {
  const a = listenPlaylistForDay('b1', 100);
  strictEqual(listenPlaylistForDay('b1', 100)?.id, a?.id, 'same day, same offer');
  // Over a year a b1 learner should see more than one set, or the rotation is
  // decorative.
  const seen = new Set<string>();
  for (let day = 0; day < 365; day += 1) seen.add(listenPlaylistForDay('b1', day)!.id);
  ok(seen.size > 1, `rotation only ever offered ${seen.size} playlist(s)`);
  // A negative or fractional day (a clock oddity) must not throw or miss.
  ok(listenPlaylistForDay('b1', -3), 'negative day');
  ok(listenPlaylistForDay('b1', 12.7), 'fractional day');
});

test('the offer is a playlist the route builders and resolver all agree on', () => {
  // The hero opens playerRouteFor(offer.id, 0). If the offer could name
  // something resolvePlaylistParam rejects, the hero would land on the empty
  // state it was meant to replace.
  for (let day = 0; day < 30; day += 1) {
    const p = listenPlaylistForDay('b1', day)!;
    const id = new URL(`https://x${playerRouteFor(p.id, 0)}`).searchParams.get('playlist');
    strictEqual(resolvePlaylistParam(id ?? undefined).kind, 'found', `day ${day}: ${p.id}`);
  }
});

// ── The corpus pool ─────────────────────────────────────────────────────────

/** A playlist shaped the way the CORPUS carries one: the bundled fields plus
 *  version and status. If this stops type-checking, corpus playlists can no
 *  longer be used as a pool and the migration is blocked. */
const corpusPlaylist = {
  id: 'pl.a1.ota-only', minLevel: 'a1' as const, word: 'OTA', tag: 'TEST',
  glow: 'rgba(0,0,0,0.1)', labelFr: 'Publiée', labelEn: 'Published',
  topicFr: 'test', topicEn: 'test', version: 1, status: 'published' as const,
  tracks: [{ id: 'pl.a1.ota-only-t1', title: 'Piste', lines: [{ fr: 'bonjour', en: 'hello' }] }],
};

test('the pool prefers the corpus and falls back to the bundled set', () => {
  // Zero playlist rows exist today, so the fallback is what actually runs. An
  // empty or absent corpus must never mean an empty Listen tab.
  strictEqual(playlistPool(undefined).length, playlists.length);
  strictEqual(playlistPool([]).length, playlists.length);
  // One authored row takes over completely — no merging with the bundled set,
  // or a retired playlist could never be removed.
  const only = playlistPool([corpusPlaylist]);
  strictEqual(only.length, 1);
  strictEqual(only[0].id, 'pl.a1.ota-only');
});

test('every reader honours the pool it is given', () => {
  const pool = [corpusPlaylist];
  // Resolving finds what the pool holds...
  strictEqual(resolvePlaylistParam('pl.a1.ota-only', pool).kind, 'found');
  // ...and does NOT find a bundled id that is no longer published.
  strictEqual(resolvePlaylistParam('la-voix', pool).kind, 'missing');
  // The daily offer draws from the pool too, at every level.
  for (const lv of ['a1', 'a2', 'b1']) {
    strictEqual(listenPlaylistForDay(lv, 7, pool)?.id, 'pl.a1.ota-only', lv);
  }
  // Defaults are unchanged when no pool is passed.
  strictEqual(resolvePlaylistParam('la-voix').kind, 'found');
});

test('a playlist above the learner still gets an offer rather than an empty hero', () => {
  // Pool of one b1 playlist, learner at a1: nothing is eligible, so the
  // gentlest available set is offered instead of undefined.
  const b1Only = [{ ...corpusPlaylist, id: 'pl.b1.hard', minLevel: 'b1' as const }];
  strictEqual(listenPlaylistForDay('a1', 3, b1Only)?.id, 'pl.b1.hard');
  // A genuinely empty pool is the only undefined, and the hero keeps its own
  // fallback for it.
  strictEqual(listenPlaylistForDay('a1', 3, []), undefined);
});

// ── The shared band cap ─────────────────────────────────────────────────────

test('the listen offer and introEligible read the learner the same way', () => {
  // These were two copies of one rule. The store keeps level as a loose string
  // and placement writes 'A0', which is not a corpus band at all.
  for (const lv of ['sons', 'a1', 'A1', 'a2', 'b1', 'B1', 'b2', 'c1', 'A0', '', 'banana']) {
    const cap = bandCap(lv);
    // introEligible must draw the same line...
    const kept = introEligible(LEVELS.map((l) => ({ level: l })), lv);
    strictEqual(kept.length, cap + 1, `introEligible disagrees at "${lv}"`);
    // ...and no offer may sit above it.
    const offer = listenPlaylistForDay(lv, 11);
    ok(offer && LEVELS.indexOf(offer.minLevel) <= cap, `offer above cap at "${lv}"`);
  }
  // The documented A0 decision: unrecognised means the a1 floor, not the top.
  strictEqual(bandCap('A0'), LEVELS.indexOf('a1'));
  strictEqual(bandCap(''), LEVELS.indexOf('a1'));
});
