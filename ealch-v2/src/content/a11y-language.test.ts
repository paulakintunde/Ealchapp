// French content carries a language tag, and the pronunciation aids do not.
//
// ── The defect (UDL 08) ─────────────────────────────────────────────────────
//
// `accessibilityLanguage` appeared three times in the whole app, none of them on
// content. Every French string was announced by a screen reader in the interface
// voice: in a pronunciation-teaching app, the core content delivered wrong to
// the learners who depend on a screen reader most.
//
// ── What is and is not proven here ──────────────────────────────────────────
//
// This guard proves the prop is THREADED. It cannot prove a screen reader says
// the word in French, and the two platforms genuinely differ:
//
//   iOS      accessibilityLanguage switches the VoiceOver voice. This works.
//   Android  TalkBack does not read the prop. The sweep is inert there, and
//            the Android mechanism is NOT established. That is an open job,
//            not something this file quietly covers.
//
// So: a green run here means no French surface was MISSED. It does not mean a
// blind learner hears French on a Pixel. UDL 08's gate is a TalkBack walk of a
// full lesson, and that is still owed.
//
// ── The shape ───────────────────────────────────────────────────────────────
//
// UDL 08 warns this test is easy to write badly. It does not assert a hardcoded
// list of components, and it does not compare a constant to itself: it walks the
// render tree on disk, finds every place a French schema field is rendered into
// a TX, and asserts that TX carries the tag. A new French surface fails it by
// existing.
import { test } from 'node:test';
import { ok, deepStrictEqual } from 'node:assert';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(HERE, '..');
/** Expo Router keeps the routes at the PROJECT root, not under src. */
const ROOT = resolve(SRC, '..');

function walk(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) { if (e !== 'node_modules') walk(p, out); }
    else if (/\.tsx$/.test(e) && !/\.test\.tsx$/.test(e)) out.push(p);
  }
  return out;
}

const FILES = walk(join(SRC, 'components')).concat(walk(join(ROOT, 'app')));

/** A French content field rendered as a TX child: `{item.fr}`, `{c.fr}`, and
 *  the rest. Deliberately the SCHEMA field, not any string that looks French —
 *  `.fr` on a corpus item is French by definition, which is what makes this
 *  measurable rather than a judgement call. */
const FR_CHILD = /\{\s*(?:item|c|d|w|x|it|card|turn)\.fr\s*\}/g;

/** The `<TX` opening tag immediately enclosing a position, or null when the
 *  render is not inside one (a prop, a template string, an aria label). */
function enclosingTag(body: string, at: number): string | null {
  const open = body.lastIndexOf('<TX', at);
  if (open < 0) return null;
  const close = body.indexOf('>', open);
  if (close < 0 || close > at) return null;
  const tag = body.slice(open, close + 1);
  // Another element opened in between means the .fr is not this TX's own child.
  const between = body.slice(close + 1, at);
  if (/<[A-Za-z]/.test(between)) return null;
  // And it must not have closed already.
  if (between.includes('</TX>')) return null;
  return tag;
}

test('every French content field rendered as text carries the language tag', () => {
  const missing: string[] = [];
  let found = 0;

  for (const f of FILES) {
    const body = readFileSync(f, 'utf8');
    for (const m of body.matchAll(FR_CHILD)) {
      const tag = enclosingTag(body, m.index);
      if (!tag) continue; // not a TX child — a prop or a label, covered below
      found++;
      if (!/\blang="fr"/.test(tag)) {
        const line = body.slice(0, m.index).split('\n').length;
        missing.push(`${f.slice(ROOT.length + 1)}:${line}  ${m[0]}`);
      }
    }
  }

  // If the walk stops finding anything, the guard has silently stopped working.
  ok(found >= 12, `only ${found} French renders found; the walk or the pattern is wrong`);
  deepStrictEqual(
    missing,
    [],
    `French rendered without lang="fr" — a screen reader says these in the interface voice:\n  ${missing.join('\n  ')}`,
  );
});

test('the respelling and the IPA are NOT tagged French', () => {
  // The opposite treatment, and getting it backwards is worse than doing
  // nothing. Both are pronunciation aids written in English-ish orthography:
  // "ROOZH" announced by a French voice is gibberish twice over.
  //
  // DECISION (UDL 08 step 4): announce them, in the interface voice, rather
  // than hiding them. A learner who reads the respelling is using it as the
  // written form of a sound they may not be able to hear, so removing it from
  // the accessibility tree takes away the one representation that is not audio.
  // That is the argument for announcing it; it is a pedagogical call and is
  // written here so the next person can disagree with the reasoning rather than
  // guess at it.
  const offenders: string[] = [];
  for (const f of FILES) {
    const body = readFileSync(f, 'utf8');
    for (const m of body.matchAll(/\{\s*(?:respell|ipa|displayIpa\([^)]*\))\s*\}/g)) {
      const tag = enclosingTag(body, m.index);
      if (tag && /\blang="fr"/.test(tag)) {
        const line = body.slice(0, m.index).split('\n').length;
        offenders.push(`${f.slice(ROOT.length + 1)}:${line}`);
      }
    }
  }
  deepStrictEqual(offenders, [], `notation tagged as French:\n  ${offenders.join('\n  ')}`);
});

test('the tag is threaded by the primitive, not sprinkled per call site', () => {
  // The mechanism UDL 08 asks for: one prop on TX, because every string in the
  // app already flows through it. If a component ever sets accessibilityLanguage
  // directly it has gone around the primitive, and the next sweep will miss it.
  const type = readFileSync(join(SRC, 'components', 'Type.tsx'), 'utf8');
  ok(/lang\?: 'fr'/.test(type), 'TX has no lang prop');
  ok(/accessibilityLanguage=\{lang === 'fr' \? 'fr-FR' : undefined\}/.test(type), 'TX does not thread lang to the platform');

  const direct = FILES.filter((f) => {
    if (f.endsWith(`components${'\\'}Type.tsx`) || f.endsWith('components/Type.tsx')) return false;
    const body = readFileSync(f, 'utf8');
    // Scoped to a HARDCODED language on a TX, which is a call site going
    // around the primitive. A computed one — accessibilityLanguage={lang ===
    // 'fr' ? ...} on an interface string that follows the app language — is a
    // different thing the `lang` prop deliberately does not express: it means
    // "whatever the interface is", not "French". ExamDebateTask's own label
    // does exactly that and is correct as it stands.
    return /<TX[^>]*accessibilityLanguage="/.test(body);
  });
  deepStrictEqual(
    direct.map((f) => f.slice(ROOT.length + 1)),
    [],
    'a TX sets accessibilityLanguage directly instead of using the lang prop',
  );
});
