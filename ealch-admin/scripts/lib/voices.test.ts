import { deepStrictEqual, ok, strictEqual, throws } from 'node:assert';
import { test } from 'node:test';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadVoices, parseBlockSpeed, parseSettings, parseVoices, voiceIdFor } from './voices.ts';
import type { SlotName } from './examAudio.ts';

const HERE = dirname(fileURLToPath(import.meta.url));

const FILE = `
**Render version:** \`v3\`

| Slot | Sex | Register | Serves | Voice id | Settings |
|---|---|---|---|---|---|
| \`f-neutral\` | F | Everyday | CO-A | abc123 | stability 0.4, similarity 0.85 |
| \`m-neutral\` | M | Everyday | CO-A | def456 | |
| \`f-street\` | F | Spontaneous | CO-C | | |
`;

test('a filled row becomes a cast entry, an empty one becomes uncast', () => {
  const cast = parseVoices(FILE);
  strictEqual(cast.entries.get('f-neutral')!.voiceId, 'abc123');
  strictEqual(cast.entries.get('m-neutral')!.voiceId, 'def456');
  ok(cast.uncast.includes('f-street'), 'an empty id cell is uncast');
  strictEqual(cast.renderVersion, 'v3');
});

test('a slot missing from the file altogether is uncast too', () => {
  // More likely an editing accident than a decision, and it must not be
  // silently treated as "no documents need it".
  const cast = parseVoices(FILE);
  ok(cast.uncast.includes('m-media'), 'a row that is not there is not cast');
  ok(cast.uncast.includes('f-formal'));
});

test('prosody is read as numbers, and prose in the cell is ignored', () => {
  deepStrictEqual(parseSettings('stability 0.4, similarity 0.85'), { stability: 0.4, similarity: 0.85 });
  deepStrictEqual(parseSettings('stability: 0.3 style=0.2'), { stability: 0.3, style: 0.2 });
  // A caster's note is not a setting, and NaN reaching a request is a wasted
  // credit.
  deepStrictEqual(parseSettings('sounds a bit flat, revisit'), {});
  deepStrictEqual(parseSettings(''), {});
});

test('an uncast slot refuses rather than borrowing another voice', () => {
  // Substituting is exactly how two speakers in one document end up sharing a
  // voice, which is the defect the casting module exists to prevent.
  const cast = parseVoices(FILE);
  strictEqual(voiceIdFor(cast, 'f-neutral'), 'abc123');
  throws(() => voiceIdFor(cast, 'f-street'), /not cast/);
});

test('the shipped TEF casting file parses, and every slot is accounted for', () => {
  // This used to assert the file was EMPTY, which was true the day it was
  // written and false the day it was filled in. A test pinned to a transient
  // state is a test that fails for the right thing happening, so it now
  // asserts the invariant: all eight slots exist, and each is either cast or
  // reported uncast — never silently absent.
  const cast = loadVoices(resolve(HERE, '../../exam-blueprints/VOICES-tef-canada.md'));
  strictEqual(cast.entries.size + cast.uncast.length, 8, 'every slot is either cast or reported');
  // The SHAPE, not the number. This asserted `v1` and then failed the day the
  // version was bumped to make a stitching change reach existing clips —
  // which is the file working, not breaking. A version that fails to parse is
  // the real fault: it would silently become 'v1' and re-render nothing.
  ok(/^v\d+$/.test(cast.renderVersion), `render version is not a version: "${cast.renderVersion}"`);
  for (const [slot, entry] of cast.entries) {
    // ElevenLabs ids are 20 URL-safe characters. A pasted cell with a stray
    // space or a truncated id would render in the wrong voice and cost money
    // to discover.
    ok(/^[A-Za-z0-9_-]{20}$/.test(entry.voiceId), `${slot}: "${entry.voiceId}" is not an ElevenLabs voice id`);
  }
  // Two slots sharing an id would put one voice in two registers, and in a
  // three-speaker document could put it twice in one.
  const ids = [...cast.entries.values()].map((e) => e.voiceId);
  strictEqual(new Set(ids).size, ids.length, 'two slots share a voice id');
});

test('the shipped TCF casting file declares a speed for every band', () => {
  // The whole ramp lives in this table, and the table is read POSITIONALLY:
  // first cell the band, LAST cell the speed. Adding a column after `Speed`
  // makes the parser read that column, find no number, and store nothing.
  //
  // Both of that defect's forms have now happened. First the renderer read
  // TCF's bands against TEF's block table and matched nothing; then a
  // "First render gave" column was appended after `Speed` and the speeds
  // silently disappeared again. Neither threw. Both produce a whole épreuve at
  // the provider's default rate, which is the difficulty lever of the format
  // switched off, and the only symptom is a number nobody measures.
  const cast = loadVoices(resolve(HERE, '../../exam-blueprints/VOICES-tcf-canada.md'));
  for (const band of ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']) {
    const speed = cast.blockSpeed.get(band);
    ok(speed !== undefined, `band ${band} has no speed: the ramp would not be in the audio`);
    // The provider's own limits. Outside them it answers 400
    // invalid_voice_settings and the run dies on the first document, which
    // is how the measured a1 correction of 0.66 was found to be unusable.
    ok(speed! >= 0.7 && speed! <= 1.2, `band ${band}: ${speed} is outside the provider's 0.7-1.2 range`);
  }
  ok(cast.blockSpeed.get('EO') !== undefined, 'the recorded interlocutor has no speed');

  // EVERY entry, including the per-paper overrides. The provider rejects a
  // speed outside its range whatever key it arrived under, and an override is
  // exactly the kind of row that gets added without rechecking the limits.
  for (const [key, speed] of cast.blockSpeed) {
    ok(speed >= 0.7 && speed <= 1.2, `${key}: ${speed} is outside the provider's 0.7-1.2 range`);
  }
  // An override must name a band that exists, or it silently does nothing.
  for (const key of cast.blockSpeed.keys()) {
    if (!key.includes('@')) continue;
    const band = key.split('@')[0]!;
    ok(cast.blockSpeed.has(band), `${key} overrides ${band}, which has no default row`);
  }

  // The rate must RISE across the ramp as DELIVERED, and the multipliers are
  // free to do whatever produces that — b2 is legitimately slower than b1
  // because those documents come out of the provider faster. So this asserts
  // the two ends, which no correct table can invert, rather than monotonicity.
  ok(
    cast.blockSpeed.get('c2')! > cast.blockSpeed.get('a1')!,
    'c2 is not paced faster than a1: the slope is upside down'
  );
});

test('an override set to exactly 1.00 survives the parse', () => {
  // The hole this closes. 1.0 is the provider's default, so an UNQUALIFIED row
  // set to 1 is genuinely the same as no row and is dropped on purpose: keeping
  // it would put `speed=1` in the assetKey and re-render a whole block to sound
  // identical.
  //
  // A QUALIFIED row set to 1 is not that. `c1@blanc-04 | 1.00` says "not the
  // 0.98 default", and dropping it hands blanc-04 the very value it was written
  // to override. That is what happened: the band was calibrated to 1.00, the
  // row vanished here, the paper re-rendered at 0.98, and the table and the
  // audio disagreed with nothing to say so.
  const md = `
| Band | Documents | Target wpm | Speed |
|---|---|---|---|
| c1 | 3 | ~ 175 | 0.98 |
| c2 | 1 | ~ 185 | 1.00 |
| c1@blanc-09 | 3 | ~ 175 | 1.00 |
`;
  const table = parseBlockSpeed(md);
  strictEqual(table.get('c1@blanc-09'), 1, 'a qualified 1.00 was dropped and falls back to 0.98');
  strictEqual(table.get('c2'), undefined, 'an unqualified 1.00 is still the same as no row');
  strictEqual(table.get('c1'), 0.98);
});

test('the two casting files are separate files with separate tables', () => {
  // render-audio.ts loaded VOICES-tef-canada.md for every format, TCF
  // included. It did not fail, because both files list the same eight slot
  // names: casting resolved, and only the speeds went missing.
  const tef = loadVoices(resolve(HERE, '../../exam-blueprints/VOICES-tef-canada.md'));
  const tcf = loadVoices(resolve(HERE, '../../exam-blueprints/VOICES-tcf-canada.md'));
  ok(tef.blockSpeed.has('A'), 'TEF keys its speeds by block letter');
  ok(!tef.blockSpeed.has('a1'), 'TEF has no band rows — this is why TCF could not use it');
  ok(tcf.blockSpeed.has('a1'), 'TCF keys its speeds by band');
  ok(!tcf.blockSpeed.has('A'), 'TCF has no block rows');
});

test('the shipped TCF casting file casts eight distinct, well-formed voices', () => {
  // The TEF file has had this check since it was filled in. TCF did not, and
  // then six of its eight slots were recast by hand in one sitting. A pasted
  // duplicate is the easy mistake, and its consequence is precise rather than
  // cosmetic: §2 turns on two women in one document being tellable apart, so
  // two slots sharing an id makes documents 20 and 30 unanswerable while every
  // other check stays green.
  const cast = loadVoices(resolve(HERE, '../../exam-blueprints/VOICES-tcf-canada.md'));
  strictEqual(cast.entries.size + cast.uncast.length, 8, 'every slot is either cast or reported');
  strictEqual(cast.uncast.length, 0, `uncast slots on a paper that renders: ${cast.uncast.join(', ')}`);
  ok(/^v\d+$/.test(cast.renderVersion), `render version is not a version: "${cast.renderVersion}"`);
  for (const [slot, entry] of cast.entries) {
    ok(/^[A-Za-z0-9_-]{20}$/.test(entry.voiceId), `${slot}: "${entry.voiceId}" is not an ElevenLabs voice id`);
  }
  const ids = [...cast.entries.values()].map((e) => e.voiceId);
  strictEqual(new Set(ids).size, ids.length, 'two slots share a voice id');

  // The three-voice documents specifically. These are the only two places on
  // the paper where a shared voice is not merely a blemish.
  const trios: SlotName[][] = [
    ['f-media', 'f-formal', 'm-formal'],
    ['f-media', 'm-formal', 'f-formal'],
  ];
  for (const trio of trios) {
    const heard = trio.map((s) => cast.entries.get(s)?.voiceId);
    strictEqual(new Set(heard).size, 3, `${trio.join(' + ')} do not resolve to three distinct voices`);
  }
});
