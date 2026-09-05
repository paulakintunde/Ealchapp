import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  CHARS_PER_SECOND,
  canPlay,
  closePart,
  effectivePlayCount,
  endPlay,
  estimateDurationS,
  initPlayback,
  isEditable,
  markUnplayable,
  assignDeviceVoices,
  showsTranscript,
  spokenTranscript,
  transcriptTurns,
  startPlay,
  shouldAutoRepeat,
  beginTurn,
  isFinishedWithAudio,
} from './coPlayback.logic.ts';

const part = (over: Record<string, unknown> = {}) => ({ playCount: 1, readWindowS: 10, ...over });

test('a part with a reading window starts silent, not playing', () => {
  // The window is the point: both boards give it so the candidate can read the
  // questions BEFORE the recording starts.
  strictEqual(initPlayback(part()).phase, 'reading');
  strictEqual(initPlayback(part({ readWindowS: 0 })).phase, 'playing');
  strictEqual(initPlayback(part({ readWindowS: undefined })).phase, 'playing');
});

test('an absent play count means one, never zero', () => {
  strictEqual(effectivePlayCount({}), 1);
  strictEqual(effectivePlayCount({ playCount: 2 }), 2);
  // A part nobody may hear is not a listening item. validateExamTask rejects 0
  // upstream; this is the second line.
  strictEqual(effectivePlayCount({ playCount: 0 }), 1);
});

test('exam mode holds the paper’s play count and then the audio is gone', () => {
  let pb = initPlayback(part({ readWindowS: 0, playCount: 1 }));
  ok(canPlay(pb, 'exam'));
  pb = startPlay(pb);
  pb = endPlay(pb);
  strictEqual(pb.phase, 'answering');
  ok(!canPlay(pb, 'exam'), 'a single-play part must not play twice under exam conditions');
});

test('a TEF interview block gets its two plays, and only two', () => {
  // Changed 1 Sept 2025: interview segments may be played twice.
  let pb = initPlayback(part({ readWindowS: 0, playCount: 2 }));
  pb = endPlay(startPlay(pb));
  ok(canPlay(pb, 'exam'), 'the second play is allowed');
  pb = endPlay(startPlay(pb));
  ok(!canPlay(pb, 'exam'), 'a third is not');
});

test('practice mode lifts the limit; exam mode never does', () => {
  let pb = initPlayback(part({ readWindowS: 0, playCount: 1 }));
  pb = endPlay(startPlay(pb));
  ok(!canPlay(pb, 'exam'));
  ok(canPlay(pb, 'practice'), 'replaying is how a candidate learns what they missed');
  // And a practice attempt is already excluded from every reported number.
  ok(showsTranscript('practice'));
  ok(!showsTranscript('exam'), 'a transcript under exam conditions makes it a reading test');
});

test('questions stay editable while the audio runs, and lock only when the part closes', () => {
  // The common wrong model is "locked until the audio finishes". That is not
  // the paper: the questions are printed and readable throughout.
  let pb = initPlayback(part());
  ok(isEditable(pb), 'editable during the reading window');
  pb = startPlay(pb);
  ok(isEditable(pb), 'editable while playing');
  pb = endPlay(pb);
  ok(isEditable(pb), 'editable after the audio');
  pb = closePart(pb);
  ok(!isEditable(pb), 'and not once the candidate has moved on');
  ok(!canPlay(pb, 'practice'), 'a closed part cannot be replayed even in practice');
});

test('closing a part is one-way, because the paper has no way back', () => {
  const closed = closePart(initPlayback(part()));
  strictEqual(closePart(closed).phase, 'closed');
  strictEqual(startPlay(closed).phase, 'playing', 'startPlay itself does not guard — canPlay does');
  ok(!canPlay(closed, 'exam'));
  ok(!canPlay(closed, 'practice'));
});

test('an unplayable part stays unplayable and cannot be quietly closed over', () => {
  // If neither a clip nor device TTS made sound, that is a real outcome. The
  // section reports it rather than showing the transcript and scoring it as
  // listening.
  const dead = markUnplayable(initPlayback(part()));
  strictEqual(dead.phase, 'unplayable');
  ok(!isEditable(dead));
  ok(!canPlay(dead, 'practice'));
  strictEqual(closePart(dead).phase, 'unplayable', 'closing must not erase the failure');
});

test('endPlay only ends a play that was running', () => {
  const reading = initPlayback(part());
  strictEqual(endPlay(reading).phase, 'reading', 'a stray end must not skip the reading window');
  const dead = markUnplayable(reading);
  strictEqual(endPlay(dead).phase, 'unplayable');
});

test('duration prefers the rendered length and falls back to the transcript', () => {
  // E8 writes the real clip length. Until then an estimate, because the shared
  // player fires completion immediately on the clip path — without a duration a
  // two-play part starts both plays in the same tick.
  strictEqual(estimateDurationS({ durationS: 47, text: 'x' }), 47);
  const text = 'a'.repeat(CHARS_PER_SECOND * 30);
  strictEqual(estimateDurationS({ text }), 30);
  // Never zero for real text, and zero for none.
  strictEqual(estimateDurationS({ text: '' }), 0);
  strictEqual(estimateDurationS({}), 0);
  ok(estimateDurationS({ text: 'Bonjour.' }) >= 2, 'a short line still gets a floor');
  // A nonsense stored duration is ignored rather than trusted.
  strictEqual(estimateDurationS({ durationS: 0, text }), 30);
});

/* ─── what the TTS fallback actually says ────────────────────────────────── */

test('speaker labels are stripped before anything is spoken', () => {
  // Found while preparing to publish the gold paper: the transcript went to
  // device TTS verbatim, so a candidate heard the stage directions read out.
  const said = spokenTranscript(
    'LA CLIENTE : Bonjour !\nLE VENDEUR : Les framboises, c’est terminé.\nLA CLIENTE : Bon.'
  );
  ok(!said.includes('LA CLIENTE'), 'the label must not be spoken');
  ok(!said.includes('LE VENDEUR'), 'nor this one');
  ok(said.startsWith('Bonjour !'), `lost the first turn: ${said}`);
  ok(said.includes('Les framboises'), 'and kept the rest');
});

test('a micro-trottoir does not announce its own speakers', () => {
  // The block whose task is to tell three speakers apart is the one that can
  // least afford to name them.
  const said = spokenTranscript(
    'PERSONNE 1 : Moi je dis oui.\nPERSONNE 2 : Ah, complètement pour.\nPERSONNE 3 : Non.'
  );
  ok(!/PERSONNE/.test(said), `speaker numbers leaked: ${said}`);
  strictEqual(said, 'Moi je dis oui. Ah, complètement pour. Non.');
});

test('every turn ends stopped, so the voice pauses between speakers', () => {
  // Without terminal punctuation a synthesiser runs two speakers into one
  // breath, which is exactly the cue a listener uses to tell them apart.
  strictEqual(spokenTranscript('A : un\nB : deux'), 'un. deux.');
  // Punctuation the turn already has is left alone rather than doubled.
  strictEqual(spokenTranscript('A : Vraiment ?\nB : Oui !'), 'Vraiment ? Oui !');
  strictEqual(spokenTranscript('A : Il a dit « non »'), 'Il a dit « non ».');
});

test('a colon inside ordinary prose is not mistaken for a label', () => {
  // Administrative French is full of them, and one shouted word does not make
  // a speaker: the label pattern requires the whole run before the colon.
  const line = 'Ordre du jour : devis de ravalement, choix de l’entreprise.';
  strictEqual(spokenTranscript(line), line);
  strictEqual(
    spokenTranscript('Durée : dix minutes.'),
    'Durée : dix minutes.'
  );
});

test('a transcript with no labels at all survives unchanged', () => {
  const line = 'Le service de prévision place le département en vigilance orange.';
  strictEqual(spokenTranscript(line), line);
  strictEqual(spokenTranscript(''), '');
});

/* ─── the multi-voice device fallback ────────────────────────────────────── */

test('a transcript splits into turns, each one stopped', () => {
  const turns = transcriptTurns(
    'PERSONNE 1 : Moi je dis oui\nPERSONNE 2 : Ça dépend\nPERSONNE 3 : Non'
  );
  deepStrictEqual(turns.map((t) => t.speaker), ['PERSONNE 1', 'PERSONNE 2', 'PERSONNE 3']);
  // Terminal punctuation on every turn, or the engine runs two speakers into
  // one breath and the change is inaudible.
  for (const t of turns) ok(/[.!?…]$/.test(t.text), `not stopped: ${t.text}`);
});

test('a wrapped line continues its speaker rather than becoming a new one', () => {
  // A nameless extra speaker would be cast a voice of its own, so the narrator
  // would change voice mid-sentence.
  const turns = transcriptTurns('LA NARRATRICE : Meillac, trois mille habitants.\nLa commune n’avait rien gagné.');
  strictEqual(turns.length, 1);
  ok(turns[0]!.text.includes('rien gagné'));
});

test('punctuation a turn already has is not doubled', () => {
  const turns = transcriptTurns('A : Vraiment ?\nB : Oui !');
  deepStrictEqual(turns.map((t) => t.text), ['Vraiment ?', 'Oui !']);
});

test('three speakers get three different voices when the phone has three', () => {
  // The rule block C depends on: if two of the three sound alike the item is
  // broken however good the French is.
  const v = assignDeviceVoices(['A', 'B', 'C', 'A'], ['fr-1', 'fr-2', 'fr-3']);
  strictEqual(new Set([v.get('A'), v.get('B'), v.get('C')]).size, 3);
  // And the same speaker keeps one voice, so a replay sounds like the first play.
  strictEqual(v.get('A'), 'fr-1');
});

test('more speakers than voices cycles rather than failing', () => {
  // Most phones ship two or three French voices, not eight. Two speakers
  // sharing is worse than three distinct, and far better than no audio.
  const v = assignDeviceVoices(['A', 'B', 'C'], ['fr-1', 'fr-2']);
  strictEqual(v.get('A'), 'fr-1');
  strictEqual(v.get('B'), 'fr-2');
  strictEqual(v.get('C'), 'fr-1');
});

test('a phone with no voices at all speaks language-only', () => {
  // Exactly today's behaviour: undefined means "no voice id", and the engine
  // uses its language default rather than erroring on an id it lacks.
  const v = assignDeviceVoices(['A', 'B'], []);
  strictEqual(v.get('A'), undefined);
  strictEqual(v.get('B'), undefined);
  strictEqual(v.size, 2);
});

test('one voice is enough for a single-speaker document', () => {
  const v = assignDeviceVoices(['LA VOIX'], ['fr-1']);
  strictEqual(v.get('LA VOIX'), 'fr-1');
});

test('the two plays of a block E part are SEQUENTIAL, never stacked', () => {
  // The failure this pins: a second clip starting while the first is still
  // sounding. That is not a degraded item, it is an unanswerable one, and
  // `canPlay` cannot catch it — it asks whether plays REMAIN, and after the
  // first play starts one still does.
  let pb = initPlayback(part({ readWindowS: 0, playCount: 2 }));
  pb = startPlay(pb);
  strictEqual(pb.phase, 'playing');
  strictEqual(pb.playsStarted, 1);
  ok(canPlay(pb, 'exam'), 'a second play does remain — which is exactly why the phase must be checked too');
  ok(!shouldAutoRepeat(pb, 'exam'), 'the second play must NOT be scheduled over the first');

  // Only once the first has finished.
  pb = endPlay(pb);
  ok(shouldAutoRepeat(pb, 'exam'), 'after the first play ends, the second is due');
});

test('auto-repeat stops when the plays are spent, and never runs in practice', () => {
  let pb = initPlayback(part({ readWindowS: 0, playCount: 2 }));
  pb = endPlay(startPlay(pb));
  pb = endPlay(startPlay(pb));
  strictEqual(pb.playsStarted, 2);
  ok(!shouldAutoRepeat(pb, 'exam'), 'two plays is two, not a loop');

  // Practice replays through the button, on demand. A part that repeated itself
  // in practice would take the choice away from the learner it is there for.
  let pr = initPlayback(part({ readWindowS: 0, playCount: 2 }));
  pr = endPlay(startPlay(pr));
  ok(canPlay(pr, 'practice'));
  ok(!shouldAutoRepeat(pr, 'practice'), 'practice never auto-repeats');
});

test('a single-play part never auto-repeats, whatever its phase', () => {
  // Every block except E. The guard is the count, so this is the case that
  // would break first if `playsStarted < playCount` were ever loosened.
  let pb = initPlayback(part({ readWindowS: 0, playCount: 1 }));
  pb = endPlay(startPlay(pb));
  ok(!shouldAutoRepeat(pb, 'exam'));
});

/* ─── The running order ──────────────────────────────────────────────────────
 *
 * TCF blanc-01's compréhension orale has 24 documents over 8 distinct
 * readWindowS values. Every part used to start its own autoplay timer at mount,
 * so each of those 8 groups fired together into the ONE shared clip player and
 * the later document silently ate the earlier — while still counting as played,
 * which under `playCount: 1` left its questions unanswerable.
 */

test('a queued part parks in waiting and does not start its own clock', () => {
  const solo = initPlayback({ readWindowS: 10 });
  const queued = initPlayback({ readWindowS: 10 }, true);
  strictEqual(solo.phase, 'reading', 'unqueued keeps the old behaviour exactly');
  strictEqual(queued.phase, 'waiting');
  strictEqual(queued.readWindowS, 10, 'the window is kept, just not started');
});

test('a waiting part refuses to play, so a replay button cannot jump the queue', () => {
  const queued = initPlayback({ readWindowS: 10 }, true);
  strictEqual(canPlay(queued, 'exam'), false);
  strictEqual(canPlay(queued, 'practice'), false, 'practice must not be a loophole');
  strictEqual(isEditable(queued), false, 'nor answerable before it is heard');
});

test('beginTurn starts the reading window, and only from waiting', () => {
  const queued = initPlayback({ readWindowS: 12 }, true);
  const turn = beginTurn(queued);
  strictEqual(turn.phase, 'reading');
  strictEqual(canPlay(turn, 'exam'), true);
  // Idempotent: a re-render must not restart a window already running.
  strictEqual(beginTurn(turn).phase, 'reading');
  const playing = startPlay(turn);
  deepStrictEqual(beginTurn(playing), playing, 'never drags a playing part back');
});

test('the floor is held until the LAST repeat is done', () => {
  // Block E plays twice. Releasing after the first would let the next document
  // start over the second play — the same collision, one step later.
  let pb = initPlayback({ readWindowS: 20, playCount: 2 }, true);
  pb = beginTurn(pb);
  pb = endPlay(startPlay(pb));
  strictEqual(pb.phase, 'answering');
  strictEqual(shouldAutoRepeat(pb, 'exam'), true);
  strictEqual(isFinishedWithAudio(pb, 'exam'), false, 'a repeat is still due');
  pb = endPlay(startPlay(pb));
  strictEqual(isFinishedWithAudio(pb, 'exam'), true);
});

test('a part that made no sound still hands the floor on', () => {
  // Otherwise one unplayable document stalls every document after it.
  const dead = markUnplayable(beginTurn(initPlayback({ readWindowS: 10 }, true)));
  strictEqual(isFinishedWithAudio(dead, 'exam'), true);
  strictEqual(isFinishedWithAudio(closePart(beginTurn(initPlayback({}, true))), 'exam'), true);
});

test('practice releases after one play, since its repeats are on demand', () => {
  let pb = beginTurn(initPlayback({ readWindowS: 10, playCount: 2 }, true));
  pb = endPlay(startPlay(pb));
  strictEqual(shouldAutoRepeat(pb, 'practice'), false);
  strictEqual(isFinishedWithAudio(pb, 'practice'), true);
});
