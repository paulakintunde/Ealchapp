// BUG-01: TTS pauses on backgrounding and resumes/restarts on foreground.
//
// There is no component-test infrastructure in this repo yet (Jest + RNTL is
// TEST-02, a later phase), so this is a structural pin on tts.ts's source
// text: does it register an AppState listener at module scope, does it
// remember the in-flight utterance, and — the one a code review would miss —
// does the pause path avoid bumping `generation`, the counter every resume
// callback in the file gates on.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok } from 'node:assert';
import { test } from 'node:test';

const here = dirname(fileURLToPath(import.meta.url));
const read = (rel: string) => readFileSync(resolve(here, rel), 'utf8');

// tts.ts is one of the most heavily commented files in the repo, and its
// prose can satisfy a naive includes() on its own — this test file's own
// header quotes `generation += 1`, the exact string test 4 forbids in code.
// Comments are stripped before every assertion below.
const strip = (s: string) => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
const tts = () => strip(read('./tts.ts'));
/** The body of an object-literal method, from its `name(` to the next line
 *  that is exactly two spaces + `},` — the file's house indentation. */
const method = (src: string, name: string) => {
  const at = src.indexOf(`  ${name}(`);
  if (at === -1) return '';
  const end = src.indexOf('\n  },', at);
  return end === -1 ? src.slice(at) : src.slice(at, end);
};

test('the service hears the app lifecycle', () => {
  const src = tts();
  ok(/import \{[^}]*AppState[^}]*\} from 'react-native'/.test(src));
  ok(
    /^AppState\.addEventListener\('change'/m.test(src),
    'the listener is registered at module scope, not inside a function nothing calls'
  );
});

test('both directions are handled', () => {
  const src = tts();
  const at = src.search(/^AppState\.addEventListener\('change'/m);
  ok(at !== -1, 'listener registration must exist');
  const body = src.slice(at, src.indexOf('});', at) + 3);
  ok(body.includes('pauseForBackground('));
  ok(body.includes('resumeFromForeground('));
  ok(body.includes("=== 'active'"));
});

test('the service remembers what it is saying', () => {
  const src = tts();
  ok(src.includes('let current'));
  ok(/current = \{/.test(src));
  ok(
    method(src, 'stop').includes('current = null'),
    'leaving the screen must forget the utterance, or a later foreground replays it'
  );
});

test('backgrounding does not cancel the utterance it means to resume', () => {
  const body = method(tts(), 'pauseForBackground');
  ok(body.length > 0, 'pauseForBackground must exist');
  ok(
    !/generation\s*\+=/.test(body),
    'pausing must not bump generation — every resume path gates on myGen === generation'
  );
  ok(body.includes('remotePlayer?.pause()'), 'the remote path pauses the player');
  ok(body.includes('Speech.stop()'), 'the device path has no pause; it stops');
});

test('the two paths diverge on resume, as designed', () => {
  const body = method(tts(), 'resumeFromForeground');
  ok(body.includes('remotePlayer?.play()'), 'remote resumes from position (D-05)');
  ok(body.includes('tts.speak('), 'device restarts the line from its start (D-06)');
  ok(!body.includes('seekTo(0)'), 'a remote resume that seeks to zero is a restart, not a resume');
});
