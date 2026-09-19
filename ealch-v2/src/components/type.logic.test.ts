import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ROLE, typeMetrics, type RoleKey } from './type.logic.ts';

const ROLES = Object.keys(ROLE) as RoleKey[];
// The scales Android actually offers in Settings > Display > Font size.
const OS_SCALES = [0.85, 1, 1.15, 1.3, 1.5, 1.8, 2];

/*
 * The rule these tests exist for.
 *
 * A flashcard front on a Pixel 9 read « À » where the card says « À bientôt ! ».
 * A conjugation prompt read « prendre · présent · » and dropped « nous » — the
 * pronoun that was the entire question. Eight of nine cards in one deck lost
 * text. It happened at OS font scale 1.3 and not at 1.0, 1.15 or 1.8.
 *
 * The cause was a size the glyphs and the line box did not share. `fontSize`
 * went to Android unscaled, `lineHeight` was pre-multiplied by the capped font
 * scale, and `allowFontScaling` plus `maxFontSizeMultiplier` were left to scale
 * things again. At 1.3 the display role's 1.25 cap bound, its glyphs did not
 * grow at all, and the line box grew anyway — leaving it taller than the text
 * inside it, so whatever wrapped past the measured line was never drawn.
 *
 * So: whatever else changes here, one capped scale is applied once, to the
 * glyphs and the line box together.
 */

test('the line box stays proportional to the size actually rendered', () => {
  for (const role of ROLES) {
    for (const fontScale of OS_SCALES) {
      const { fontSize, lineHeight } = typeMetrics({ role, fontScale });
      // Exact, not approximate: the line box is the RENDERED size times the
      // role's multiplier, rounded to a whole pixel and nothing else. The bug
      // was a lineHeight computed from a different size than the glyphs got.
      assert.equal(
        lineHeight,
        Math.round(fontSize * ROLE[role].lh),
        `${role} at ${fontScale}: line box ${lineHeight} does not match the ` +
          `rendered size ${fontSize} x ${ROLE[role].lh}`
      );
    }
  }
});

test('the glyphs grow with the OS font scale, not just the line box', () => {
  for (const role of ROLES) {
    const at1 = typeMetrics({ role, fontScale: 1 });
    const at13 = typeMetrics({ role, fontScale: 1.3 });
    // display and display2 cap below 1.3; everything else grows the full way.
    const expected = Math.min(1.3, ROLE[role].max);
    assert.equal(
      at13.fontSize,
      at1.fontSize * expected,
      `${role} glyphs did not grow at font scale 1.3`
    );
    assert.ok(at13.lineHeight > at1.lineHeight, `${role} line box did not grow`);
  }
});

test('growth is capped per role, and the cap binds both size and line box', () => {
  for (const role of ROLES) {
    const capped = typeMetrics({ role, fontScale: 3 });
    const atCap = typeMetrics({ role, fontScale: ROLE[role].max });
    assert.deepEqual(capped, atCap, `${role} grew past its cap of ${ROLE[role].max}`);
  }
});

test('a font scale below 1 is honoured rather than clamped up', () => {
  const small = typeMetrics({ role: 'body', fontScale: 0.85 });
  const normal = typeMetrics({ role: 'body', fontScale: 1 });
  assert.ok(small.fontSize < normal.fontSize);
  assert.ok(small.lineHeight < normal.lineHeight);
});

test('at font scale 1 the metrics are the plain role values', () => {
  for (const role of ROLES) {
    const { fontSize, lineHeight } = typeMetrics({ role, fontScale: 1 });
    assert.equal(fontSize, ROLE[role].size);
    assert.equal(lineHeight, Math.round(ROLE[role].size * ROLE[role].lh));
  }
});

test('maxScale tightens the cap below the role, for boxes that cannot grow', () => {
  const roleCap = typeMetrics({ role: 'body', fontScale: 2 });
  const tighter = typeMetrics({ role: 'body', fontScale: 2, maxScale: 1.1 });
  assert.ok(tighter.fontSize < roleCap.fontSize);
  assert.equal(tighter.fontSize, ROLE.body.size * 1.1);
});

test('an explicit size overrides the role but still scales', () => {
  const { fontSize } = typeMetrics({ role: 'display', size: 31, fontScale: 1.3 });
  // display caps at 1.25, so 31 -> 38.75. This is the flashcard question line.
  assert.equal(fontSize, 31 * 1.25);
});

test('an absolute lh is legacy and deliberately does not scale', () => {
  const a = typeMetrics({ role: 'body', fontScale: 1, lh: 20 });
  const b = typeMetrics({ role: 'body', fontScale: 1.8, lh: 20 });
  assert.equal(a.lineHeight, 20);
  assert.equal(b.lineHeight, 20);
});

test('lhMult overrides the role multiplier and still tracks the rendered size', () => {
  const { fontSize, lineHeight } = typeMetrics({ role: 'body', fontScale: 1.3, lhMult: 1.8 });
  assert.equal(lineHeight, Math.round(fontSize * 1.8));
});
