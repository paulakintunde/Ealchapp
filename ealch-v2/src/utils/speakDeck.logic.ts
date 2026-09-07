// The deck a Speak session actually drills — pure, no React.
//
// ── Why this file exists ────────────────────────────────────────────────────
//
// Speak had exactly one deck source: the corpus speakPath, resolved from the
// learner's frontier station. The player's "practice out loud" button pushed a
// bare `/speak`, so tapping it from any of the nineteen playlists opened the
// SAME thirty-three cards. Listening was playlist-specific and speaking was
// not, which reads as a broken button rather than a design.
//
// The obvious repair — map a playlist's lines to corpus items and reuse the
// trail — is not available. Playlist lines are authored prose, not items
// (schema.ts: "Raw lines, not itemIds"), and it is measured: 29 of 704 lines
// exist as a seed item, and only three of eleven sampled against the full
// published corpus. So a playlist needs its own deck, and this is it.
//
// ── Why the card ids are deliberately NOT item ids ──────────────────────────
//
// A card id here is `<trackId>.l<n>` — `la-voix-t1.l0`. That fails ITEM_ID_RE,
// which is the whole point: `isSchedulable` (progress.logic.ts) keys the SRS on
// that regex, so a playlist attempt is logged, counts as a real session, and
// surfaces in Le Rapport, while the scheduler correctly declines to bring back
// a line there is no recall card for. Same contract a roleplay turn already
// uses (`${scenario}.t${ix}`). Nothing here can move the Speak trail either:
// a synthetic id never matches a station's itemIds, so `speakPassedIds` folds
// it into a set no stage reads.

import { playlist, type Playlist } from '../content/playlists.ts';

/** One card of a playlist speak deck. The three fields Speak reads off an
 *  Item — nothing else about an Item is needed to drill a line. */
export type SpeakCard = { id: string; fr: string; en: string };

/**
 * What a `?playlist=` parameter resolved to.
 *
 * The three cases are deliberately distinct, because collapsing "missing" into
 * "none" is a silent-substitution bug and both screens had it: a link naming a
 * playlist that does not exist left `pl` undefined, so the player fell through
 * to its 21,650-phrase default listening pass under a "Listen" header, and
 * Speak fell through to whatever trail station the avatar was standing on.
 * Neither told the learner anything was wrong. A named-but-absent playlist has
 * to reach an empty state, not a different set of content.
 */
export type PlaylistRequest =
  | { kind: 'none' }
  | { kind: 'found'; playlist: Playlist }
  | { kind: 'missing'; id: string };

/**
 * Resolve a route's `?playlist=` into one of those three. Tolerant of the array
 * form expo-router hands back for a repeated key; an empty value counts as not
 * asking, which is what `/player` with a stray `?playlist=` should mean.
 *
 * Both screens resolve through here so they cannot disagree about whether a
 * playlist was asked for — the same reason the routes themselves are values.
 */
export function resolvePlaylistParam(raw: string | string[] | undefined): PlaylistRequest {
  const id = (Array.isArray(raw) ? raw[0] : raw) ?? '';
  if (!id) return { kind: 'none' };
  const found = playlist(id);
  return found ? { kind: 'found', playlist: found } : { kind: 'missing', id };
}

/**
 * Every line in the playlist, flattened in track order.
 *
 * This flattening is the SAME one the player performs to build its listening
 * pass, and that is load-bearing: Listen and Voice must agree on what "line 12
 * of this playlist" means, or entering Voice from a track would land somewhere
 * else than the track you were hearing. Both screens go through this file now
 * rather than each keeping their own copy of the arithmetic.
 */
export function playlistDeck(pl: Playlist): SpeakCard[] {
  return pl.tracks.flatMap((tk) =>
    tk.lines.map((ln, i) => ({ id: `${tk.id}.l${i}`, fr: ln.fr, en: ln.en }))
  );
}

/** How many lines the playlist holds in total. */
export function playlistLineCount(pl: Playlist): number {
  return pl.tracks.reduce((sum, tk) => sum + tk.lines.length, 0);
}

/**
 * A `?track=` param as a track index: tolerant of the array form expo-router
 * hands back for a repeated key, of a missing value, and of junk, and clamped
 * into the playlist. Both screens parse the param through here so a malformed
 * link cannot land them on different tracks.
 */
export function parseTrackParam(pl: Playlist, raw: string | string[] | undefined): number {
  const first = Array.isArray(raw) ? raw[0] : raw;
  const n = parseInt(first ?? '0', 10) || 0;
  return Math.max(0, Math.min(pl.tracks.length - 1, n));
}

/** The flattened index of track N's first line. */
export function playlistStartIx(pl: Playlist, track: number): number {
  const n = Math.max(0, Math.min(pl.tracks.length - 1, Math.floor(track)));
  return pl.tracks.slice(0, n).reduce((sum, tk) => sum + tk.lines.length, 0);
}

/** Which track owns the flattened line at `lineIx`. The inverse of
 *  playlistStartIx, and what names the current track in a header. */
export function playlistTrackAt(pl: Playlist, lineIx: number): number {
  let acc = 0;
  for (let i = 0; i < pl.tracks.length; i += 1) {
    acc += pl.tracks[i].lines.length;
    if (lineIx < acc) return i;
  }
  return Math.max(0, pl.tracks.length - 1);
}

/**
 * The single source of the practice CTA's target.
 *
 * A route built inline in JSX is a route no test can see, which is exactly how
 * a bare `/speak` survived nineteen playlists. This is a value, so a test can
 * assert the playlist actually travels.
 */
export function speakRouteFor(playlistId?: string, track = 0): string {
  if (!playlistId) return '/speak';
  return `/speak?playlist=${encodeURIComponent(playlistId)}&track=${clampTrack(track)}`;
}

/** The listening route, for the same reason: four screens build this URL by
 *  hand, and a route built inline in JSX is a route no test can see. */
export function playerRouteFor(playlistId: string, track = 0): string {
  return `/player?playlist=${encodeURIComponent(playlistId)}&track=${clampTrack(track)}`;
}

function clampTrack(track: number): number {
  return Math.max(0, Math.floor(track) || 0);
}
