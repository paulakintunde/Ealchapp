import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { playlists } from '../content/playlists.ts';
import { ITEM_ID_RE, SCENARIO_ID_RE } from '../content/schema.ts';
import {
  parseTrackParam,
  playlistDeck,
  playlistLineCount,
  playlistStartIx,
  playerRouteFor,
  playlistTrackAt,
  speakRouteFor,
} from './speakDeck.logic.ts';

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
    strictEqual(deck.length, playlistLineCount(p), `${p.id} deck length`);
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
