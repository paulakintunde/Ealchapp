// The carry is the thing that stops an authoring run from deleting a render.
// It has already failed once in production, so it is tested rather than trusted.
import { deepStrictEqual, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { mergeRenderedParts, mergeRenderedBank } from './merge-rendered.ts';

const part = (label: string, text: string, extra: Record<string, unknown> = {}) =>
  ({ label, text, items: [], ...extra }) as never;

const turn = (id: string, text: string, extra: Record<string, unknown> = {}) =>
  ({ id, text, covers: '', cues: [], ...extra }) as never;

const bank = (answers: unknown[], extra: Record<string, unknown> = {}) =>
  ({
    opening: turn('open', 'Bonjour.'),
    catchAll: turn('catch', 'Je n’ai pas l’information.'),
    closing: turn('close', 'Bonne journée.'),
    answers,
    ...extra,
  }) as never;

test('a part with unchanged text keeps its clip and its measured duration', () => {
  const authored = [part('Doc 1', 'Bonjour à tous.')];
  const stored = [part('Doc 1', 'Bonjour à tous.', { audioRef: 'audio/a/b.mp3', durationS: 24 })];
  const out = mergeRenderedParts(authored, stored) as { audioRef?: string; durationS?: number }[];
  strictEqual(out[0]!.audioRef, 'audio/a/b.mp3');
  strictEqual(out[0]!.durationS, 24);
});

test('an EDITED part loses its clip, because the recording is now wrong', () => {
  const authored = [part('Doc 1', 'Bonjour à toutes et à tous.')];
  const stored = [part('Doc 1', 'Bonjour à tous.', { audioRef: 'audio/a/b.mp3', durationS: 24 })];
  const out = mergeRenderedParts(authored, stored) as { audioRef?: string }[];
  strictEqual(out[0]!.audioRef, undefined);
});

test('with nothing stored, the authored parts pass through untouched', () => {
  const authored = [part('Doc 1', 'Bonjour.')];
  deepStrictEqual(mergeRenderedParts(authored, null), authored);
});

test('every bank turn keeps its clip, opening and closing included', () => {
  // The opening, catch-all and closing are rendered too. An earlier version of
  // this carry existed only for `parts` and dropped all thirteen.
  const authored = bank([turn('prix', 'Quarante euros.')]);
  const stored = bank([turn('prix', 'Quarante euros.', { audioRef: 'a/prix.mp3', durationS: 6 })], {
    opening: turn('open', 'Bonjour.', { audioRef: 'a/open.mp3', durationS: 3 }),
    catchAll: turn('catch', 'Je n’ai pas l’information.', { audioRef: 'a/catch.mp3' }),
    closing: turn('close', 'Bonne journée.', { audioRef: 'a/close.mp3' }),
  });
  const out = mergeRenderedBank(authored, stored) as {
    opening: { audioRef?: string }; catchAll: { audioRef?: string }; closing: { audioRef?: string };
    answers: { audioRef?: string; durationS?: number }[];
  };
  strictEqual(out.opening.audioRef, 'a/open.mp3');
  strictEqual(out.catchAll.audioRef, 'a/catch.mp3');
  strictEqual(out.closing.audioRef, 'a/close.mp3');
  strictEqual(out.answers[0]!.audioRef, 'a/prix.mp3');
  strictEqual(out.answers[0]!.durationS, 6);
});

test('bank answers are matched by id, not by position', () => {
  // Reordering the bank is an ordinary edit. Matching positionally would attach
  // the clip of "le prix" to "l'horaire" the first time an answer moved.
  const authored = bank([turn('horaire', 'Le mardi.'), turn('prix', 'Quarante euros.')]);
  const stored = bank([
    turn('prix', 'Quarante euros.', { audioRef: 'a/prix.mp3' }),
    turn('horaire', 'Le mardi.', { audioRef: 'a/horaire.mp3' }),
  ]);
  const out = mergeRenderedBank(authored, stored) as { answers: { id: string; audioRef?: string }[] };
  strictEqual(out.answers[0]!.id, 'horaire');
  strictEqual(out.answers[0]!.audioRef, 'a/horaire.mp3');
  strictEqual(out.answers[1]!.audioRef, 'a/prix.mp3');
});

test('an edited bank answer loses its clip, and its neighbours keep theirs', () => {
  const authored = bank([turn('prix', 'Quarante-cinq euros.'), turn('horaire', 'Le mardi.')]);
  const stored = bank([
    turn('prix', 'Quarante euros.', { audioRef: 'a/prix.mp3' }),
    turn('horaire', 'Le mardi.', { audioRef: 'a/horaire.mp3' }),
  ]);
  const out = mergeRenderedBank(authored, stored) as { answers: { audioRef?: string }[] };
  strictEqual(out.answers[0]!.audioRef, undefined);
  strictEqual(out.answers[1]!.audioRef, 'a/horaire.mp3');
});

test('a NEW answer added to the bank simply has no clip yet', () => {
  const authored = bank([turn('prix', 'Quarante euros.'), turn('nouveau', 'Une précision.')]);
  const stored = bank([turn('prix', 'Quarante euros.', { audioRef: 'a/prix.mp3' })]);
  const out = mergeRenderedBank(authored, stored) as { answers: { audioRef?: string }[] };
  strictEqual(out.answers[0]!.audioRef, 'a/prix.mp3');
  strictEqual(out.answers[1]!.audioRef, undefined);
});
