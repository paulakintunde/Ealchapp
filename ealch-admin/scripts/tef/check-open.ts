// Pre-review pass over the open tasks.
//
// The sixteen open tasks of papers 2 to 5 go to full human review. This does the
// part a person should not have to do by eye, so the review starts from a clean
// sheet rather than from known defects.
//
// WHAT IT CHECKS, and why each one is a real failure rather than a nicety:
//
//   1. The MODEL ANSWER obeys the responseSpec the candidate is held to. It is
//      the grader's only worked example of a strong answer; one that breaks the
//      word count demonstrates the opposite of what the task asks.
//   2. Every rubric criterion is DEMONSTRATED by the model answer. A criterion
//      the worked example does not satisfy cannot be marked consistently.
//   3. The spoken tasks fit their duration bounds at a plausible speaking rate.
//   4. The interlocutor bank's facts are distinct, and its register is one
//      person's, not four.
//
//   pnpm tsx scripts/tef/check-open.ts
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';

const HERE = dirname(fileURLToPath(import.meta.url));

/** Words, the way a marker counts them. */
const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

/** Spoken French runs about 150 words a minute at exam pace. Used only to
 *  sanity-check that a model answer could be delivered inside the window. */
const WPM = 150;

/** Lower-cased and unaccented, so « équipement » in the advert matches
 *  « equipement » in a covers line. */
const norm = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

/** French function words, so "novelty" counts facts rather than grammar. A turn
 *  that repeats the advert's nouns while varying its verbs is still a repeat. */
const STOPWORDS = new Set([
  'avec', 'dans', 'pour', 'vous', 'nous', 'elle', 'sont', 'este', 'cette', 'votre', 'notre',
  'leur', 'leurs', 'mais', 'donc', 'plus', 'moins', 'tout', 'tous', 'toute', 'toutes',
  'faut', 'peut', 'sera', 'sont', 'avez', 'etes', 'meme', 'aussi', 'alors', 'apres',
  'avant', 'depuis', 'entre', 'chaque', 'quand', 'comme', 'aucun', 'aucune', 'celui',
  'celle', 'ceux', 'quel', 'quelle', 'quels', 'quelles', 'jusqu', 'chez', 'sans',
]);

type Finding = { paper: string; task: string; level: 'FAIL' | 'LOOK'; note: string };

function checkTask(paper: string, t: ExamTask, out: Finding[]): void {
  const id = `${t.label ?? t.id} (${t.taskType})`;
  const model = t.modelAnswer ?? '';
  const n = words(model);
  const spec = t.responseSpec;

  // 1. The model answer against the spec the candidate must meet.
  if (spec?.kind === 'text') {
    if (spec.minWords !== undefined && n < spec.minWords) {
      out.push({ paper, task: id, level: 'FAIL', note: `model answer is ${n} words, the task demands at least ${spec.minWords}` });
    }
    if (spec.maxWords !== undefined && n > spec.maxWords) {
      out.push({ paper, task: id, level: 'FAIL', note: `model answer is ${n} words, the task caps candidates at ${spec.maxWords}` });
    }
  }

  // 3. Spoken tasks: could this be said inside the window?
  //
  // NOT CHECKED AGAINST minDurationS, deliberately. Traced through the stack:
  // grade-exam never reads responseSpec, ExamSpeakTask caps recording at
  // timingS + 30 rather than maxDurationS, and no EO rubric marks length. The
  // audio bounds are dead metadata, so a model answer under the floor breaks
  // nothing. Reporting it would be reporting a rule nothing applies.
  //
  // The cap is still worth checking: a model answer no one could deliver in the
  // time is a bad exemplar whether or not anything enforces it.
  if (spec?.kind === 'audio' && spec.maxDurationS !== undefined) {
    const seconds = Math.round((n / WPM) * 60);
    if (seconds > spec.maxDurationS) {
      out.push({ paper, task: id, level: 'FAIL', note: `model answer is ~${seconds}s at ${WPM} wpm, past the ${spec.maxDurationS}s cap` });
    }
  }

  // 2. A criterion that REQUIRES a concession must find one in the worked
  //    example.
  for (const c of t.rubric?.criteria ?? []) {
    const d = (c.descriptors ?? []).join(' ');
    // Only criteria that demand the move, not those that merely name the
    // lexical field. « Lexique de la persuasion et de la concession » says what
    // vocabulary to use; matching the bare word there fired on every EO-B.
    const requiresConcession =
      /est énoncé sérieusement|argument adverse|contre-position|échelle d’objections|réticences sont anticipées/i.test(d);
    if (requiresConcession) {
      // Written and SPOKEN registers concede differently. A letter says « on
      // objectera que » ; a person talking to a friend says « je sais que…
      // mais » or « justement ». Listing only the written formulas marked three
      // sound model answers as defective.
      const hasConcession =
        /objectera|certes|bien que|je ne conteste pas|il est vrai|je comprends|mérite d’être pris|je sais (?:bien )?(?:que|ce que)|justement|tu vas me dire|c’est vrai/i.test(model);
      if (!hasConcession) {
        out.push({ paper, task: id, level: 'FAIL', note: `criterion "${c.key}" requires a concession, but the model answer makes no concessive move` });
      }
    }
    // A rubric that demands the third person and no "je" must not be marked
    // against a model answer written in the first person.
    if (/troisième personne|pas de « je »/i.test(d)) {
      if (/\bje\b|\bj’/i.test(model)) {
        out.push({ paper, task: id, level: 'FAIL', note: `criterion "${c.key}" forbids « je », but the model answer uses it` });
      }
    }
  }

  // 4. The interlocutor bank.
  if (t.interlocutor) {
    const b = t.interlocutor;
    const covers = b.answers.map((a) => a.covers.trim().toLowerCase());
    const dupes = covers.filter((c, i) => covers.indexOf(c) !== i);
    if (dupes.length) {
      out.push({ paper, task: id, level: 'FAIL', note: `two bank answers cover the same fact: ${[...new Set(dupes)].join(', ')}` });
    }
    // Every cue is lower-case and unaccented, because cueMatches normalises the
    // candidate's transcript before comparing. An accented cue silently never
    // fires.
    for (const a of b.answers) {
      for (const cue of a.cues) {
        if (/[A-ZÀ-Ý]/.test(cue) || /[àâäéèêëîïôöùûüç]/.test(cue)) {
          out.push({ paper, task: id, level: 'FAIL', note: `cue "${cue}" (${a.id}) carries case or accents; the matcher compares normalised text` });
        }
      }
    }
    // The answers should be one person talking. A bank whose turns swing
    // between registers reads as several people.
    const tu = b.answers.filter((a) => /\btu\b|\bton\b|\bta\b/.test(a.text));
    if (tu.length) {
      out.push({ paper, task: id, level: 'FAIL', note: `${tu.length} bank answer(s) use « tu » in a service exchange` });
    }

    // Does the advert already ANSWER what the bank withholds?
    //
    // Section A is marked on whether the candidate covered every angle the
    // document affords. A fact the advert states outright is one a careful
    // candidate has no reason to ask about — so the bank answer sits there
    // unreachable and the coverage score punishes them for reading well.
    //
    // ── Why this compares the ANSWER and not the `covers` label ─────────────
    //
    // The first version took the longest word of `covers` and asked whether the
    // advert contained it. That reported four overlaps and every one was wrong,
    // because length is a poor proxy for which word carries the fact. In « le
    // délai avant installation » the longest word is `installation`, which the
    // advert does say — but the fact is the DÉLAI, which it does not. Same for
    // « les pièces du dossier » and « la commission et la réponse »: the advert
    // names the dossier and the commission as things that exist and withholds
    // every fact about them, which is precisely the design this file documents
    // ("the bank holds one answer per fact the advert withholds").
    //
    // Requiring every word of `covers` to appear would still have been wrong.
    // blanc-03's advert says « Certificat médical demandé » and the bank adds
    // that it goes in before the first session and must be under a year old.
    // That DEEPENS a stated fact, which is good design, and no comparison of
    // the label to the advert can tell deepening from duplication.
    //
    // So compare what the answer SAYS. A turn that only restates the advert
    // shares almost all its content words with it; one that deepens brings new
    // ones — a date, a price, a condition. That is measurable without knowing
    // what the words mean.
    const advert = new Set(norm(t.prompt).split(/[^a-z0-9]+/).filter(Boolean));
    for (const a of b.answers) {
      const content = norm(a.text)
        .split(/[^a-z0-9]+/)
        .filter((w) => w.length > 3 && !STOPWORDS.has(w));
      if (content.length < 4) continue;
      const fresh = content.filter((w) => !advert.has(w)).length;
      const novelty = fresh / content.length;
      if (novelty < 0.35) {
        out.push({
          paper, task: id, level: 'LOOK',
          note:
            `the bank's "${a.covers}" restates the advert (${Math.round(novelty * 100)}% new content words) — ` +
            `check a candidate who read carefully would still have a reason to ask`,
        });
      }
    }
  }
}

async function main() {
  const papers = ['02', '03', '04', '05'];
  const out: Finding[] = [];

  for (const p of papers) {
    // pathToFileURL, because a Windows absolute path is not a valid ESM
    // specifier: import('c:/…') is rejected as an unknown URL scheme.
    const m = await import(pathToFileURL(resolve(HERE, `../tef-blanc${p}/paper.ts`)).href);
    for (const t of [...m.EE_TASKS, ...m.EO_TASKS] as ExamTask[]) checkTask(`blanc-${p}`, t, out);
  }

  const fails = out.filter((f) => f.level === 'FAIL');
  const looks = out.filter((f) => f.level === 'LOOK');

  console.log(`\n  ${papers.length * 4} open tasks checked\n`);
  for (const f of [...fails, ...looks]) {
    console.log(`  ${f.level === 'FAIL' ? '✖' : '·'} ${f.paper} ${f.task}\n      ${f.note}`);
  }
  console.log(
    fails.length === 0 && looks.length === 0
      ? '\n  Nothing to fix before the human pass.\n'
      : `\n  ${fails.length} to fix, ${looks.length} to look at.\n`
  );
  if (fails.length) process.exitCode = 1;
}

main().catch((e) => { console.error(String(e)); process.exit(1); });
