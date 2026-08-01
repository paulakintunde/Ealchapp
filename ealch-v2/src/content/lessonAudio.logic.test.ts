import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  CLIP_MANIFEST,
  NORMAL_RATE,
  SLOW_RATE,
  audioIndex,
  clipPath,
  hasSlow,
  pendingRecordings,
  referencedRecordingIds,
  resolveAudio,
  resolveByText,
  speedsFor,
} from './lessonAudio.logic.ts';

test('an undelivered recording falls back to TTS rather than going silent', () => {
  // The whole point: the lesson runs today on synthesis and improves later
  // without a content edit.
  const r = resolveAudio('deux', { mode: 'recorded', recordingId: 'rec-scene-break' });
  strictEqual(r.audioRef, null, 'no clip yet');
  strictEqual(r.text, 'deux', 'TTS speaks the French');
  ok(!r.isRecorded);
});

test('a delivered recording resolves to its clip', () => {
  // Simulate the studio delivering, without touching the real manifest.
  CLIP_MANIFEST['rec-test'] = { hiver: 'lessons/x/hiver.m4a', _: 'lessons/x/default.m4a' };
  try {
    strictEqual(clipPath('rec-test', 'hiver'), 'lessons/x/hiver.m4a');
    strictEqual(clipPath('rec-test'), 'lessons/x/default.m4a', 'the set default');
    strictEqual(clipPath('rec-test', 'nope'), null, 'an unknown clip in a known set');
    const r = resolveAudio('hiver', { mode: 'recorded', recordingId: 'rec-test', clip: 'hiver' });
    strictEqual(r.audioRef, 'lessons/x/hiver.m4a');
    ok(r.isRecorded);
  } finally {
    delete CLIP_MANIFEST['rec-test'];
  }
});

test('a single-path recording resolves without a clip name', () => {
  CLIP_MANIFEST['rec-solo'] = 'lessons/x/solo.m4a';
  try {
    strictEqual(clipPath('rec-solo'), 'lessons/x/solo.m4a');
    strictEqual(clipPath('rec-solo', 'anything'), 'lessons/x/solo.m4a');
  } finally {
    delete CLIP_MANIFEST['rec-solo'];
  }
});

test('slow is the 0.65 comprehension pass', () => {
  strictEqual(resolveAudio('x', undefined).rate, NORMAL_RATE);
  strictEqual(resolveAudio('x', undefined, { slow: true }).rate, SLOW_RATE);
});

test('speeds come from the card, then the lesson, then a sane default', () => {
  deepStrictEqual(speedsFor({ mode: 'tts', speeds: [1, 0.5] }), [1, 0.5], 'the card wins');
  deepStrictEqual(speedsFor(undefined, { speeds: [1, 0.65] }), [1, 0.65], 'the lesson default');
  deepStrictEqual(speedsFor(undefined, undefined), [NORMAL_RATE], 'always playable at normal speed');
});

test('long-press-for-slow is offered only where a slow speed exists', () => {
  ok(hasSlow(undefined, { speeds: [1, 0.65] }));
  ok(hasSlow({ mode: 'tts', speeds: [1.0, 0.65] }));
  ok(!hasSlow({ mode: 'tts', speeds: [1.0] }));
  ok(!hasSlow(undefined, undefined));
});

test('audio-first is carried through so the ear answers before the eye', () => {
  ok(resolveAudio('x', { mode: 'recorded', audioFirst: true }).audioFirst);
  ok(!resolveAudio('x', { mode: 'recorded' }).audioFirst);
});

test('a play budget is carried through for dictation', () => {
  strictEqual(resolveAudio('x', { mode: 'recorded', maxPlays: 3 }).maxPlays, 3);
  strictEqual(resolveAudio('x', { mode: 'tts' }).maxPlays, null, 'unbudgeted by default');
});

test('pendingRecordings is the studio worklist', () => {
  const owed = pendingRecordings({
    recorded: [
      { id: 'rec-a', desc: 'first' },
      { id: 'rec-b', desc: 'second' },
    ],
  });
  strictEqual(owed.length, 2, 'nothing delivered yet');
  CLIP_MANIFEST['rec-a'] = 'x.m4a';
  try {
    const after = pendingRecordings({ recorded: [{ id: 'rec-a', desc: 'first' }, { id: 'rec-b', desc: 'second' }] });
    deepStrictEqual(after.map((r) => r.id), ['rec-b'], 'delivered sets drop off the list');
  } finally {
    delete CLIP_MANIFEST['rec-a'];
  }
});

test('referencedRecordingIds finds every id a lesson body points at', () => {
  const lesson = {
    sections: [
      { audio: { recordingId: 'rec-one' } },
      { beats: [{ audio: { recordingId: 'rec-two' } }, { kind: 'narration' }] },
      { groups: [{ check: { audio: { recordingId: 'rec-one' } } }] },
    ],
  };
  deepStrictEqual(referencedRecordingIds(lesson).sort(), ['rec-one', 'rec-two']);
});

test('the index finds a spec authored beside its French, at any depth', () => {
  const ix = audioIndex({
    sections: [
      { type: 'contrast', targets: [{ fr: 'petit', audio: { mode: 'recorded', recordingId: 'rec-a' } }] },
      { beats: [{ kind: 'narration', text: 'Bonjour', audio: { mode: 'tts', speeds: [1, 0.65] } }] },
    ],
  });
  strictEqual(ix.get('petit')?.recordingId, 'rec-a');
  deepStrictEqual(ix.get('Bonjour')?.speeds, [1, 0.65]);
  strictEqual(ix.get('never authored'), undefined);
});

test('a scene break indexes the reading it speaks, not just the heading', () => {
  // The spec sits on the beat; the French sits one level down on `right`.
  // Indexing only the beat's own keys would miss the word actually played.
  const ix = audioIndex({
    beats: [
      {
        kind: 'break',
        heading: 'What they heard',
        right: { fr: 'deux', ipa: '/dø/', en: 'two' },
        wrong: { fr: 'DEUKS', ipa: '/døks/', en: '' },
        audio: { mode: 'recorded', recordingId: 'rec-scene-break', audioFirst: true },
      },
    ],
  });
  strictEqual(ix.get('deux')?.recordingId, 'rec-scene-break');
  ok(ix.get('deux')?.audioFirst, 'audio-first survives the lookup');
  strictEqual(ix.get('DEUKS')?.recordingId, 'rec-scene-break', 'both sides are playable');
});

test('a SECTION-level spec is the default voicing for the French inside it', () => {
  // How the real lesson authors dictation, listening and reading: one spec on
  // the section, then cards/lines/targets that carry French and no audio of
  // their own. Indexing only sibling keys would leave every one of them bare.
  const ix = audioIndex({
    sections: [
      {
        type: 'dictation',
        audio: { mode: 'recorded', recordingId: 'rec-dictation-10', maxPlays: 3 },
        cards: [{ fr: 'hiver' }, { fr: 'parler' }],
      },
    ],
  });
  strictEqual(ix.get('hiver')?.recordingId, 'rec-dictation-10');
  strictEqual(ix.get('parler')?.maxPlays, 3);
});

test('a nearer spec beats the one it is nested inside', () => {
  const ix = audioIndex({
    sections: [
      {
        audio: { mode: 'recorded', recordingId: 'rec-section' },
        targets: [{ fr: 'petit', audio: { mode: 'recorded', recordingId: 'rec-own' } }, { fr: 'grand' }],
      },
    ],
  });
  strictEqual(ix.get('petit')?.recordingId, 'rec-own', 'its own spec wins');
  strictEqual(ix.get('grand')?.recordingId, 'rec-section', 'the sibling still inherits');
});

test('an English quiz stem is never indexed as French', () => {
  // A listen-and-choose spec describes its clip, not the question text. If `q`
  // were indexed, tapping the stem would try to speak English in fr-FR.
  const ix = audioIndex({
    rounds: [{ questions: [{ q: 'Which word has a silent final S?', audio: { mode: 'recorded', recordingId: 'rec-a', clip: 'nez' } }] }],
  });
  strictEqual(ix.get('Which word has a silent final S?'), undefined);
});

test('a bare object that merely has an `audio` key is not treated as a spec', () => {
  // `mode` is what makes it a SectionAudio. Without this guard, any field
  // named `audio` in future content would silently capture its neighbours.
  const ix = audioIndex({ sections: [{ fr: 'chat', audio: { url: 'x.m4a' } }] });
  strictEqual(ix.get('chat'), undefined);
});

test('an unindexed word still plays, on the defaults', () => {
  // The fallback that makes this safe to wire in: text with no authored spec
  // behaves exactly as it did before the index existed.
  const r = resolveByText('inconnu', new Map());
  strictEqual(r.text, 'inconnu');
  strictEqual(r.audioRef, null);
  strictEqual(r.rate, NORMAL_RATE);
  ok(!r.isRecorded);
});

test('resolveByText carries the authored spec through, including slow', () => {
  const ix = audioIndex({ s: [{ fr: 'hiver', audio: { mode: 'recorded', recordingId: 'rec-careful-pairs', maxPlays: 3 } }] });
  strictEqual(resolveByText('hiver', ix).maxPlays, 3);
  strictEqual(resolveByText('hiver', ix, { slow: true }).rate, SLOW_RATE);
});

test('a missing index is not a crash', () => {
  // The pre-v2 lessons have no audio block at all.
  strictEqual(resolveByText('bonjour', undefined).text, 'bonjour');
});

test('the real manifest is empty, so the lesson ships on TTS', () => {
  // A guard on intent: if this ever fails, someone has added clips and should
  // confirm they exist in the asset bundle before shipping.
  strictEqual(Object.keys(CLIP_MANIFEST).length, 0);
});
