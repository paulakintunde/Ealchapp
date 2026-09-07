import { A_FRAMING, A_FRAMING_MINE, DE_FRAMING, EN_POSITION_RULE, MUST_RULE, POSITION_RULE, REFRAME } from './data/y-en-corpus.ts';
import { Y_EN_LESSON as L } from './data/y-en-lesson.ts';

const MACHINE_KEYS = new Set(['id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn',
  'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId', 'clipIds', 'restPoints']);
const ID_WHEN_STRING = new Set(['drill', 'retest']);
const isId = (s: string) => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) {
      if (MACHINE_KEYS.has(k)) continue;
      if (ID_WHEN_STRING.has(k) && typeof x === 'string') continue;
      display(x, out);
    }
  }
  return out;
}
const surface = [
  ...display(L.sections), ...display(L.sheets ?? []), ...display(L.terms ?? {}),
  ...display(L.acts ?? []), ...display(L.drills ?? []), ...display(L.errorTriggers ?? []),
  ...display(L.audio ?? {}), ...display(L.overview ?? {}), L.intro ?? '', L.reframe ?? '',
];
const n = (s: string) => surface.filter((x) => x.includes(s)).length;
console.log('strings              ', surface.length);
console.log('REFRAME              ', n(REFRAME));
console.log('POSITION_RULE (a2.06)', n(POSITION_RULE));
console.log('A_FRAMING (a2.24)    ', n(A_FRAMING));
console.log('A_FRAMING_MINE       ', n(A_FRAMING_MINE));
console.log('DE_FRAMING           ', n(DE_FRAMING));
console.log('MUST_RULE            ', n(MUST_RULE));
console.log('EN_POSITION_RULE     ', n(EN_POSITION_RULE));
