import { deepStrictEqual, ok, strictEqual, throws } from 'node:assert';
import { test } from 'node:test';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadVoices, parseSettings, parseVoices, voiceIdFor } from './voices.ts';

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
