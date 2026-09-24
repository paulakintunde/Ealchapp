# The B1 build playbook

How to author one B1 lesson to the standard of `b1.01` to `b1.04`, from nothing.

You are expected to have read **this file** and **`ealch-v2/src/content/schema.ts`** and nothing else.
Everything else you need is quoted here. `b1.03` (`pc-imparfait-*`) is the reference
build: when this file says "as b1.03 does", open that file and copy the shape.

This supersedes nothing. It is the operational form of three documents you do not have
to read: `RICH-LESSON-STANDARD.md` (size and shape), `B1-PILOT-BRIEF.md` (house rules,
corpus rules) and `B1-C2-BUILD-SEQUENCE.md` (the wave order and the rules every wave
follows). Where they disagree with the four shipped lessons, the lessons win and the
disagreement is named in section 11.

Everything in `scripts/data/b1/` is DRAFT. Nothing is imported into Postgres, merged
into `seed.json` or published. You author files; you never write to the database and
you never touch `seed.json`.

---

## 0. The measured baseline

The four finished lessons, as they actually are on disk (counted, not claimed):

| | b1.01 imparfait-formation | b1.02 imparfait-usage | b1.03 pc-imparfait | b1.04 pc-imparfait-paires |
|---|---|---|---|---|
| missions (sections) | 91 | 76 | 76 | 86 |
| acts | 12 | 10 | 10 | 12 |
| missions per act | 6,7,7,9,7,7,6,8,8,8,8,10 | 7,8,7,8,7,8,6,8,7,10 | 6,8,8,6,8,7,7,8,7,11 | 6,7,7,7,7,8,7,6,8,6,7,10 |
| estScreens total | 518 | 454 | 290 | 516 |
| authored corpus rows | 213 | 177 | 139 | 200 |
| `itemIds` | 261 | 233 | 161 | 224 |
| quiz | 11 rounds x 8 = 88 | 10 x 8 = 80 | 10 x 8 = 80 | 11 x 8 = 88 |
| errorTriggers / drills | 11 / 11 | 10 / 10 | 10 / 10 | 11 / 11 |
| sheets | 4 | 5 | 5 | 5 |
| sheets linked by `sheetId` | **0 (the anti-pattern)** | 5 | 5 | 5 |
| terms | 11 | 11 | 8 | 9 |
| act openers with `imageRef` | 12/12 | 10/10 | 10/10 | 12/12 |
| task | text, 50-80 words | text, 90-130 | text, 80-120 | **audio**, 60-120 s |
| `Lesson.skill` | `PE` | `PE` | `PE` | `PO` |

All four pass `validateLesson` with zero issues and `validateDensity` with zero issues.
That is the bar. Not "mostly clean".

---

## 1. What a lesson is made of

### 1.1 Four files, one folder

Everything lives in `ealch-admin/scripts/data/b1/`. For slug `<slug>`:

```
<slug>-corpus.ts          identity, id helper, imports, the authored Item rows
<slug>-terms.ts           the lesson glossary (Record<string, LessonTerm>)
<slug>-lesson.ts          the sections, acts, quiz, drills, triggers, sheets, LESSON
<slug>-image-prompts.md   one chapter-art prompt per act, with full save paths
```

Import paths from this folder are four levels up:
`'../../../../ealch-v2/src/content/schema.ts'`. A2 lessons one folder up use three.

Slug is the topic, not the id: `imparfait-formation`, `pc-imparfait`,
`pc-imparfait-paires`. Pick one and use it for the file names, the asset folder
(`ealch-v2/assets/lessons/<slug>/`) and the `imageRef` prefix
(`lessons/<slug>/actNN.jpg`). They must match or the art does not render.

### 1.2 The corpus file: what it exports and what must stay stable

```ts
// <slug>-corpus.ts
// STABLE EXPORTS (b1.04 imports REFRAME from this file; do not rename):
// REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS.
```

That comment is not decoration. Later lessons import `REFRAME` by name and quote it
verbatim rather than retyping it, so renaming one of these breaks a downstream lesson
at compile time. Write the same warning in your header.

The identity block, copied from `pc-imparfait-corpus.ts`:

```ts
export const UNIT = {
  id: 'b1.03',
  seq: 3,
  title: 'Passé Composé or Imparfait: The Basics',        // English, the trail label
  sub: 'Passé composé ou imparfait : les bases',          // French, becomes Lesson.title
  canDo: 'Can narrate a past episode in speech and writing, separating the setting, states and habits from the completed events that move the story on',
  prereqUnitIds: ['b1.01', 'b1.02'],
} as const;

export const LESSON_ID = 'b1.03.l1';
export const THEME = 'recits-au-passe';
export const LEVEL = 'b1' as const;

export const ID_RANGES = [[201, 299], [1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;
```

**`E(n)` is the whole id discipline.** Never type an item id. `E(1037)` produces
`fr.b1.recits-au-passe.1037`. The padding is to three digits, so `E(7)` is `.007` and
`E(1037)` is `.1037`. Because every id in the lesson goes through `E`, changing the
theme is one edit, and `validateLesson`'s `ITEM_ID_RE` can never see a typo.

**Id ranges exist so parallel authors do not collide.** Used so far:

| lesson | theme | ranges |
|---|---|---|
| b1.01 | `recits-au-passe` | 001-099, 401-799 |
| b1.02 | `recits-au-passe` | 101-199, 800-999 |
| b1.03 | `recits-au-passe` | 201-299, 1000-1199 |
| b1.04 | `recits-au-passe` | 301-399, 1200-1399 |

Claim two blocks, write them into `ID_RANGES` and into the corpus header, and stay
inside them. Do not pick a range by "highest id + 1": a concurrent author's lesson can
land below your top.

Row constructors. Define them once and use nothing else:

```ts
type Row = Item;
const FCVR  = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (n, fr, en, ipa, respell, tags, drills = FCVR, extra = {}): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['passe-compose-imparfait'], ...extra,
});
const phrase = (...) => ({ ...same, kind: 'phrase' });

/** A gapfill card: `prompt` is the front, `fr` the answer (validateItem). */
const gap  = (prompt, notes) => ({ cardType: 'gapfill', prompt, notes });
/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt, notes) => ({ cardType: 'grammar', prompt, notes });
```

A real row:

```ts
sent(1021, 'Il pleuvait quand le voisin a frappé à la porte.',
  'It was raining when the neighbour knocked at the door.',
  '/il plø.vɛ kɑ̃ lə vwa.zɛ̃ a fʁa.pe a la pɔʁt/',
  'eel pluh-veh kahⁿ luh vwa-ZEHⁿ a fra-PAY a la PORT',
  ['decor', 'action', 'coupure']),
```

Note: `respell` in a corpus ROW carries no brackets. `respell` in a SECTION (a deck
card's `sub`, a scene bubble) does carry them: `[eel pluh-veh ...]`. The density
validator checks the bracketing on fields named `respell` inside sections only.

Rows are grouped one block per act and indexed:

```ts
export const ROWS_BY_ACT: Row[][] = [ACT1_ROWS, ACT2_ROWS, /* ... */ ACT10_ROWS];
export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);
```

Reused seed rows are declared per act, with the French in a trailing comment so a
reader never has to open `seed.json`:

```ts
export const IMPORTED = {
  act1: ['fr.a2.objets.106'],       // J'ai perdu mes clés parce que j'étais pressé ce matin.
  act3: [
    'fr.b1.cafe.085',               // Pendant que nous attendions l'addition, nous avons parlé de nos projets.
    'fr.b1.cuisine.015',            // La sauce a réduit pendant qu'on préparait les légumes.  (named only)
  ],
  // ... one key per act, `[] as string[]` for an act with none
};
export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = ['fr.a2.corps.016', /* ... */];
/** No `voiceflash` either: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [...NOT_DECK_ABLE, 'fr.b1.cafe.083', /* ... */];
```

Read each reused row out of `ealch-v2/src/content/seed.json` and copy its `fr`
verbatim wherever a section prints it. Seed.json holds roughly a quarter of Postgres,
so write in the corpus header: *"seed-checked only, DB check pending at import"*.

The corpus also owns the lesson's long texts and their answer keys, so the lesson file
and the quiz agree:

```ts
export const READING_TEXT = "C'était un samedi de novembre, à Lyon. ...";  // 174 words
export const READING_DECOR  = ["C'était", 'faisait', 'pleuvait', /* ... */] as const;
export const READING_ACTION = ['est arrivé', 'est montée', /* ... */] as const;
```

And the reframe, with its rejected alternatives and the reason each was rejected:

```ts
export const REFRAME = "L'imparfait pose le décor. Le passé composé fait avancer le film.";
export const REFRAME_EN = 'The imparfait sets the scene. The passé composé moves the film forward.';
export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  { text: "L'imparfait pour ce qui dure, le passé composé pour ce qui est court.",
    why: "False where the lesson has to hold: « J'ai habité à Lyon pendant dix ans » lasts ten years and takes the passé composé." },
  // ...
];
```

Write `REFRAME_REJECTED`. It is what stops the next author re-proposing a reframe your
act 6 was built to contradict.

Cross-references to other units go through `unitRef` from `../_unit-ref.ts`, never a
typed label:

```ts
export const PC_AVOIR_UNIT = 'a2.05';
export const PC_AVOIR_REF = unitRef(PC_AVOIR_UNIT);   // "lesson 5 in A2"

/** TODO(import): drop once b1.01 and b1.02 are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = { 'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4 };
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}
```

A2 labels come back in English (A2 is taught in English). B1 labels are French from the
plan until the B1 units exist in the seed. Neighbour reframes are re-exported, not
retyped:

```ts
export { REFRAME as B101_REFRAME, REFRAME_EN as B101_REFRAME_EN } from './imparfait-formation-corpus.ts';
export { REFRAME as A205_REFRAME } from '../passe-compose-corpus.ts';
export const A205_REFRAME_FR = 'Un verbe, deux mots, et les petits mots vont au milieu.';
```

An A2 reframe is English, so every screen that shows one follows it with the French
rendering.

### 1.3 The terms file

```ts
export const PC_IMPARFAIT_TERMS: Record<string, LessonTerm> = {
  decor: {
    term: 'le décor',
    title: "Le décor, c'est l'imparfait",
    body: "Dans un film, le décor est déjà là quand l'action commence. Le lieu, la météo, ce que tu faisais, comment tu te sentais : tout ça continue derrière. On ne voit ni le début ni la fin. EN: The décor is what was already going on, with no start and no end in view.",
    examples: [
      { itemId: E(203), note: 'la pluie et la terrasse vide' },
      { itemId: E(1012), note: 'une salle pleine, des gens qui parlent' },
      { itemId: 'fr.b1.cafe.083', note: 'la terrasse était pleine avant notre arrivée' },
    ],
  },
  // ...
};
```

8 to 11 terms is the shipped range. `term` is the chip label; keep it 8 to 13
characters (see 6.7). `body` is simple French with one trailing `EN: ` line.
`examples` cite corpus items by id and never restate French; the renderer resolves
`itemId` and shows the `note` in place of the item's own `en`.

`validateLesson` fails a section that names a term key with no definition. There is no
validator for the reverse, so assert it yourself: **every defined term must be
surfaced by at least one section's `terms` array.** All four lessons have zero
unsurfaced terms.

### 1.4 The lesson file: helpers, then acts, then assembly

The header block comes first. Its exact shape is in section 9.5.

Imports:

```ts
import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet, SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import type { DraftSection, TaskSection } from './_task-section.ts';
import { UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap, ALL_ROWS, ROWS_BY_ACT,
         IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor, READING_TEXT, /* refs */ } from './<slug>-corpus.ts';
import { PC_IMPARFAIT_TERMS } from './<slug>-terms.ts';
```

The helper block, verbatim from b1.03 (change `b1.03` in the throw and the `rec-`
prefix):

```ts
type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: DraftSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r]));

/** An item's fr/en, from this corpus or the seed. Throws on a typo, so no
 *  section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.03: no item ${id}`);
  return r;
}

/** A groupDrill item copied VERBATIM from its row (production-surface rule). */
const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
/** A free groupDrill item: a quotation of a passage, with no corpus row. */
const free = (fr: string, en: string, note?: string): GItem => ({ fr, en, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });          // listening line
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });  // examples row
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
/** A control page: a label and a gating question, no words. */
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });
```

`src()` throwing on a typo is the single most valuable line in the file: a mistyped id
fails at module load instead of shipping a blank card. **Never type French into a
section that a corpus row already holds.** Use `it()`, `ln()`, `ex()`.

The act check helper, so every act closes the same way:

```ts
/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}
```

Then one banner-commented block per act, each section a named `const`, then the act
definition, then assembly.

### 1.5 The exports, and what each is for

```ts
const ACTS: ActDef[] = [ACT1, ACT2, /* ... */ ACT10];

export const SECTIONS: DraftSection[] = ACTS.flatMap((a) => a.sections);

/** Every id the lesson can put in front of a learner. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ROW.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

/** One slice per act: that act's authored rows plus its imports, each id
 *  released ONCE, and only ids a flashcard drill can reach. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

export const LESSON: Omit<Lesson, 'sections'> & { sections: DraftSection[] } = { /* section 1.6 */ };

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** The lesson as the CURRENT validators accept it: the draft `task` removed
 *  from `sections` and from every act. */
export function lessonWithoutTask(): Lesson {
  const isTask = (s: DraftSection): s is TaskSection => s.type === 'task';
  const taskIds = new Set(LESSON.sections.filter(isTask).map((s) => s.id));
  return {
    ...LESSON,
    sections: LESSON.sections.filter((s): s is LessonSection => !isTask(s)),
    acts: LESSON.acts?.map((a) => ({
      ...a,
      sections: a.sections.filter((id) => !taskIds.has(id)),
      restPoints: a.restPoints?.filter((rp) => !taskIds.has(rp.split('/')[0])),
    })),
  };
}

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, READING_TEXT, dicteeFor };
```

Why each exists:

- **`SECTIONS`** so the act definitions stay the single source of section order. You
  never maintain a second flat list.
- **`ITEM_IDS`** is what goes in `Lesson.itemIds`. `validateLesson` refuses a
  `deckTranche` id that is not in it, and `acts.logic.ts` `tranche()` silently filters
  a tranche against it, so an id missing here is an item that is never released.
  *(b1.02's `a10-parler` names 12 b1.01 ids that are not in its own `itemIds`. Do not
  copy that: if a section names an id, put it in `ITEM_IDS`.)*
- **`DECK_TRANCHE`** must have exactly one slice per act (`validateLesson` checks the
  count) and may only carry ids the SRS can actually build a card from, which means
  rows with a `flashcard` drill. Shipped sizes run 8 to 66 per act.
- **`lessonWithoutTask()`** exists because `task` is not in `schema.ts`. Every
  validator run, every test and the preview generator go through it. When `task` lands
  in the schema union, this function and `DraftSection` both go away.
- **`NAMED_NOT_RELEASED`** so a later import script knows which named ids are
  deliberately absent from every tranche rather than forgotten.

### 1.6 The LESSON object

```ts
export const LESSON: Omit<Lesson, 'sections'> & { sections: DraftSection[] } = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,                // FRENCH
  level: LEVEL,
  tag: 'B1 · LEÇON 03',
  intro: 'You can build the imparfait and the passé composé. This lesson is about choosing between them. ...',   // ENGLISH
  skill: 'PE',                    // 'PE' for a written task, 'PO' for a spoken one
  grammarAssumed: [IMP_FORM_UNIT, IMP_USE_UNIT, PC_AVOIR_UNIT, /* ... */],
  grammarIntroduced: [
    'Aspectual choice between imparfait and passé composé by narrative function: ...',
    'The interruption frame: an ongoing imparfait action cut by a passé composé event, with quand or pendant que, in either clause order',
    // one English sentence per thing this lesson introduces for the first time
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu sais former l'imparfait et le passé composé. Cette leçon t'apprend à choisir. ...",
    minutes: 110,                 // shipped: 110 to 190
    difficulty: 3,                // 1..5
    glyph: 'ait',
    screens: 0,                   // overwritten below from estScreens
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: PC_IMPARFAIT_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 2,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};
```

`acts[].sections` is derived from the act definitions, never typed. That is what makes
inserting a mission a one-line edit.

`audio.recorded` is scraped from the sections so a studio brief can never be missed:

```ts
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-03-[a-z0-9-]+/g) ?? [])];
const REC_DESC: Record<string, string> = {
  'rec-b1-03-rapport': "The officer's written report (act 1), one female Québécoise voice, one take, read at dictation pace. The imparfait sentences are even and unhurried; from « un homme s'est arrêté » the pace picks up slightly. Every final -ait is a clean [ɛ] with no audible t.",
  'rec-b1-03-coupure-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. No pause between the two clauses beyond what the punctuation gives, or the learner hears the boundary instead of the tense.',
  // one entry per id, and `validateLesson` fails an entry with no `desc`
};
```

Write a real brief. Say how many takes, how many voices, what the pace does and what
must be audible. A `listening` with `hideLines: true` is unanswerable without a single
continuous take, so say so in capitals as b1.03 does.

### 1.7 The preview generator

`_preview-b101.ts` is the pattern. Copy it, change the three imports and the output
path:

```ts
import { writeFileSync } from 'node:fs';
import { LESSON } from './pc-imparfait-lesson.ts';
import { UNIT, ALL_ROWS } from './pc-imparfait-corpus.ts';
import type { TaskSection } from './_task-section.ts';

// The `task` section has no renderer yet. Shown as a `teach` card in place, so
// the lesson keeps its shape and the brief, criteria and model answer are visible.
const sections = LESSON.sections.map((s) => {
  if (s.type !== 'task') return s;
  const t = s as TaskSection;
  const criteria = t.rubric.criteria.map((c) => `• ${c.label} (${c.maxPoints} pts)`).join('\n');
  return {
    type: 'teach', id: t.id, frSub: t.frSub,
    title: `${t.title} (aperçu de la tâche)`,
    body: [t.brief, t.briefEn ? `EN: ${t.briefEn}` : '', `À faire : ${t.produce}`,
           `Critères :\n${criteria}`, `Exemple de réponse :\n${t.modelAnswer}`].filter(Boolean).join('\n\n'),
  };
});

const out = { units: [{ ...UNIT, level: 'b1', lessonIds: [LESSON.id] }],
              lessons: [{ ...LESSON, sections }], items: ALL_ROWS };
writeFileSync(new URL('../../../../ealch-v2/src/content/dev-preview-b103.json', import.meta.url),
              JSON.stringify(out, null, 2) + '\n');
console.log(`wrote ${out.lessons[0].sections.length} sections, ${out.items.length} items`);
```

It consumes exactly three exports: `LESSON`, `UNIT`, `ALL_ROWS`. It writes a
`dev-preview-*.json` next to `seed.json`; it does not touch `seed.json`. Mark the whole
scaffold with a grep-able marker comment (`DEV-PREVIEW-B103`) so it can be removed in
one pass once the real import pipeline exists.

Run it with `pnpm tsx scripts/data/b1/_preview-b103.ts` from `ealch-admin`.

---

## 2. The shape

### 2.1 Size

- **70 to 100 missions.** Shipped: 76, 76, 86, 91. Under 70 is not a rich lesson;
  over 100 is the hard ceiling from the standard.
- **8 to 12 acts.** Shipped: 10, 10, 12, 12.
- **6 to 11 missions per act.** 6 to 8 is the normal band; the closing act runs 10 or
  11 because it carries the task, the quiz, the review deck and the roundup.
- **No padding.** Every mission has a distinct job. If a sub-topic is finished in six
  missions, it gets six. Richness is covering the topic completely, not repeating it.

### 2.2 Act rhythm

One act covers ONE sub-topic and ends in its checkpoint. The default order, which you
adapt but do not abandon:

1. **Meet it.** Short input where the sub-topic appears in real French: `scene`,
   `story`, `reading` or `listening`. Noticing comes before the rule.
2. **Name it.** The rule, one idea per screen: `cardDeck`, `examples` or `tapTable`.
3. **Build it.** Controlled form practice: `groupDrill`, one gating check per group.
4. **Choose it.** Meaning practice, where the learner picks the form *because of what
   it means*, not because of a surface cue.
5. **Trap it.** The English-speaker errors for this sub-topic: stepped `trapDrill` or
   `commonErrors`.
6. **Check it.** A gated act check (control-page `groupDrill`) before the checkpoint.

Act 1 of b1.03, as built: `scene`, `goals`, `reading`, `groupDrill`, `useCases`,
`groupDrill` (check). Act 3: `story`, `cardDeck`, `cardDeck`, `examples`,
`groupDrill`, `listening`, `trapDrill`, `groupDrill` (check).

**Mechanics rotate.** Two consecutive missions of the same type need a reason.
`validateDensity` refuses more than 8 in a row, but 8 is headroom for a split XL drill,
not a licence: no b1 act has a run over 2.

### 2.3 What opens and closes a lesson

Opening, act 1, in this order:
- a `scene` (the v2 sequential player: the stakes, a commitment `choice`, a
  full-screen `break`, a `resolve`), or a `story` if the lesson opens gentler;
- `goals` (four `{ t, s }` pairs naming the acts that deliver each);
- a `reading` where the grammar is already doing its job, with `questionsInModal`;
- a `groupDrill` on that text;
- `useCases` ("where the wrong form costs something real");
- the act check.

Closing, the final act, in this order:
`reading` (the model the learner will imitate) → `steps` or `examples` (how to plan it)
→ `useCases` → `scenario` (say it out loud) → **`task`** → `practice` (`skill: 'speak'`)
→ `cheatSheet` (linked to a sheet) → `progressCheck` → **`quiz`** → `reviewDeck` →
`roundup`.

The `task` sits after the scenario and before the `progressCheck`. The quiz comes after
the `progressCheck` and before the `reviewDeck`.

### 2.4 The act object

```ts
const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'La coupure',
    opener: {
      line: "Tu dormais, et le téléphone a sonné : voilà la forme qui coupe une action déjà commencée. EN: You were sleeping and the phone rang: the shape that cuts an action already under way.",
      imageRef: 'lessons/pc-imparfait/act03.jpg',
    },
    sections: [],                 // filled by the assembly step, never typed
    milestone: "Tu construis une coupure dans les deux ordres, avec quand et avec pendant que. EN: You can build an interruption in both clause orders.",
    estScreens: 32, restPoints: ['a3-ordre', 'a3-ecoute'],
  },
  sections: [A3_HISTOIRE, A3_REGLE, A3_PENDANT, A3_ORDRE, A3_CONSTRUIRE, A3_ECOUTE, A3_PIEGE, A3_CHECK],
  imports: IMPORTED.act3,
};
```

**The opener contract.** `LessonPager` draws a full page before the act's first
mission: the artwork at 4:3, then `ACTE 03 · 8 MISSIONS`, then the act title, then
`opener.line`. So:
- `line` is one sentence of simple French, addressed as `tu`, naming what this act
  makes true, plus a trailing `EN: ` gloss. It is not a summary of the grammar.
- `imageRef` must match `IMAGE_REF_RE` (`^(?!\/)(?!.*\.\.)[a-z0-9][a-z0-9/_.-]*$`) and
  must be `lessons/<slug>/actNN.jpg`, two-digit, matching the prompt file.
- Every act gets one. All four lessons are 100% covered.
- The page is keyed on the act's FIRST section id, so reordering missions moves the
  card with them.

**`milestone`** is the one line shown at the checkpoint. Second person, French, what
the learner can now DO, plus `EN: `. No confetti language, no "well done", no badge.

**`estScreens`** is your honest estimate of screens this act renders (a `cardDeck` of
four cards is four screens; a `trapDrill` with four steps is four; a `groupDrill` of
three groups is three or six depending on whether the groups carry items and a check).
It feeds `overview.screens` and the checkpoint-spacing rule. Shipped values run 22 to
47 per act, and 120 to 150 for a closing act.

**`restPoints`** are mid-act stopping places, authored as `'sectionId'` or
`'sectionId/marker'`. The rule the validator enforces:

> `ceil(estScreens / (1 + restPoints.length)) <= 22`

So a 32-screen act needs at least one rest point (32/2 = 16, fine); a 47-screen act
needs two (47/3 = 16). A 150-screen closing act needs seven. Put them at natural
breath points, not at arithmetic intervals.

### 2.5 deckTranche per act

One slice per act, index-aligned with `acts`. Each act's slice holds that act's newly
authored rows plus its imports, each id appearing once across the whole lesson, and
only ids the SRS can build a flashcard from. Shipped slice sizes: 8 to 66. Generate it
(1.5), do not type it.

---

## 3. Section types in practice

Every section carries, at minimum, `type`, `id`, `layer: 'core'`, `title`, `audio` and
`say`. Ids are `a<act>-<slug>`: `a3-piege`, `a10-quiz`. They are pointed at by act
`sections`, `restPoints`, quiz `ref`, `errorTrigger.detectOn` and `watchFor.ref`, so
they must be stable and unique.

`say` is the coach's spoken line: **French, fr-FR, never English, never a re-read of
what is on the card.** The house default is the reframe, which is also how the reframe
clears its "verbatim in at least three sections" rule.

### 3.1 scene (the opener, once per lesson)

The sequential player: one beat per screen, the learner commits before being corrected.
Beat kinds: `narration`, `bubble` (`from: 'them' | 'you' | 'coach'`), `choice`,
`break`, `resolve`. `ScenePlayer` paints its own title, so no shared eyebrow.

Size: 8 to 10 beats. Exactly one `choice`, exactly one `break`.

```ts
const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Une déclaration au poste', frSub: 'Le vélo volé',
  setting: { place: 'Poste de police, avenue du Mont-Royal', city: 'Montréal', time: '17 h 40',
             ambience: 'un comptoir, un téléphone qui sonne, la pluie dehors' },
  beats: [
    { kind: 'narration', text: "Un poste de police sur l'avenue du Mont-Royal, à Montréal. Mardi, 17 h 40. Ton vélo a disparu devant un café. La policière ouvre un formulaire.", size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'La policière',
      fr: "Racontez-moi ce qui s'est passé.", en: 'Tell me what happened.',
      respell: '[ra-kohⁿ-tay-MWA suh kee seh pa-SAY]', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "J'ai lu le journal. Il a plu. Quelqu'un a pris mon vélo.",
      en: 'I read the paper. It rained. Someone took my bike.',
      respell: '[zhay lü luh zhoor-NAL | eel a PLÜ | kehl-KUHⁿ a pree mohⁿ vay-LOH]',
      stage: "Trois verbes au passé composé. Pour elle, ce sont trois étapes, l'une après l'autre.",
      size: 'md', audio: AUDIO },
    { kind: 'choice', prompt: 'Tu recommences. Quelle phrase dit que le vol a coupé ta lecture ?', size: 'lg',
      options: [
        { fr: "J'ai lu le journal, puis quelqu'un a pris mon vélo.", respell: '[...]', en: 'I read the paper, then someone took my bike.', outcome: 'breaks', audio: AUDIO },
        { fr: "Je lisais le journal quand quelqu'un a pris mon vélo.", respell: '[...]', en: 'I was reading the paper when someone took my bike.', outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Elle écrit : « pendant la lecture ». Elle sait maintenant à quelle heure regarder les caméras du café.",
        breaks: "Elle écrit : « après la lecture ». Elle va regarder les caméras à la mauvaise heure.",
      } },
    { kind: 'break', heading: 'Tout était au passé composé',
      body: "Au passé composé, chaque verbe est une étape, et les étapes se suivent. La policière a donc entendu une liste. L'imparfait dit ce qui se passait déjà. EN: In the passé composé every verb is a step; the imparfait says what was already going on.",
      wrong: { fr: "J'ai lu le journal, puis quelqu'un a pris mon vélo.", ipa: '/ʒe ly lə ʒuʁ.nal .../', respell: '[...]', en: 'I read the paper, then someone took my bike.' },
      right: { fr: "Je lisais le journal quand quelqu'un a pris mon vélo.", ipa: '/ʒə li.zɛ lə ʒuʁ.nal .../', respell: '[...]', en: 'I was reading the paper when someone took my bike.' },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO },
    { kind: 'resolve', text: "La déclaration est corrigée. Il manque encore le décor : la pluie, la terrasse vide, le vélo attaché. C'est le sujet de cette leçon.", size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['decor', 'action'],
};
```

Rules that bite here: **both `choice` options must be plausible and exactly one carries
the failing instinct**; both `followUp` branches are required because the `break` plays
either way; and **no spaced `?` or `!` in any bubble** (6.4).

### 3.2 story (3 to 6 per lesson)

The all-at-once bubble array. Cheaper than a scene, used for mid-lesson dialogue.
5 to 8 bubbles plus a `closing`. `warn` on a bubble is the stage note.

```ts
const A5_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a5-histoire', layer: 'core',
  title: 'La matinée, étape par étape', frSub: 'Avant le café, avant le vol',
  setting: "Chez M. Tremblay, le matin du vol. Il raconte sa matinée à la policière.",
  bubbles: [
    { from: 'narrator', fr: 'La policière veut la matinée dans l’ordre.', en: 'The officer wants the morning in order.' },
    { from: 'coach', fr: 'Racontez-moi votre matinée, étape par étape.', en: 'Tell me your morning, step by step.' },
    { from: 'user', fr: 'Je me suis levé, je me suis habillé et je suis sorti.', en: 'I got up, I got dressed and I went out.' },
    { from: 'coach', fr: 'Tout est clair. Chaque verbe est une étape, et l’ordre est le bon.', en: 'All clear. Every verb is a step, and the order is right.', warn: 'Passé composé, cinq fois' },
  ],
  closing: { fr: 'Des points, l’un après l’autre : voilà une suite.', en: 'Dots one after another: that is a chain.' },
  audio: REC('rec-b1-03-matinee'), say: REFRAME, terms: ['suite', 'action'],
};
```

Story bubbles avoid spaced `?` and `!` too (same renderer risk assumed).

### 3.3 reading (4 to 7 per lesson)

A B1 reading is 120 to 200 words, not a paragraph. It is exempt from the 45-word
density cap (`PASSAGE_SECTIONS`). Always set `questionsInModal: true` so the learner
cannot read the questions before the text. `questions` are `{ q, a }` short-answer
pairs, not multiple choice. `glossary` words must appear in `text` verbatim.

```ts
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'Le rapport de la policière', frSub: 'Lis, et regarde les verbes',
  text: "Mardi, il faisait gris et la rue était calme. Le vélo de M. Tremblay était attaché devant un café, rue Saint-Viateur. ... Il a appelé la police tout de suite.",
  glossary: [
    { word: 'était attaché', en: 'was locked up', note: 'Un état : le vélo était déjà comme ça. EN: a state.' },
    { word: 'le cadenas', en: 'the padlock', note: 'Le petit cadenas qui ferme la chaîne du vélo.' },
  ],
  questions: [
    { q: 'Quels verbes décrivent la situation, avant que rien ne se passe ?',
      a: "faisait, était, était attaché, lisait, pleuvait, était vide. Ils sont tous à l'imparfait." },
    { q: "Quel est le premier verbe qui fait avancer l'histoire ?",
      a: "« un homme s'est arrêté ». À partir de là, chaque verbe est une étape." },
  ],
  audio: REC('rec-b1-03-rapport'), say: REFRAME, terms: ['decor', 'action'],
};
```

Long readings and their answer keys live in the corpus file (`READING_TEXT`,
`READING_DECOR`, `READING_ACTION`) so the reading and the quiz cannot drift apart.

### 3.4 listening (4 to 10 per lesson)

8 to 14 lines at B1, never 4. `lines` are built with `ln(E(n))` so the French is
identical to the corpus. **Set `hideLines: true` whenever the questions are about what
the ear caught**, or the section is answerable by reading and tests nothing. 4 to 6
questions, each with a `why`.

```ts
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a3-ecoute', layer: 'core', hideLines: true,
  title: 'Qui était déjà en train de faire quoi',
  lines: [ln(E(1036)), ln(E(1038)), ln(E(1037)), ln(E(270)), ln(E(1032)), ln(E(1035)), ln(E(1033)), ln(E(1034))],
  questions: [
    { q: 'Première phrase : qui dormait ?', opts: ['moi', 'toi'], correct: 1,
      why: "« Tu dormais » : le sommeil était en cours quand je suis rentré. EN: you were already asleep." },
    { q: 'Deuxième phrase : les enfants se sont endormis à notre arrivée ?',
      opts: ['Oui', 'Non, ils dormaient déjà'], correct: 1,
      why: "L'imparfait dit que ça avait commencé avant. EN: it had started earlier." },
  ],
  audio: REC('rec-b1-03-coupure-ecoute'), say: REFRAME, terms: ['coupure'],
};
```

A `hideLines` section needs a one-take recording. Say so in its `REC_DESC` entry.

### 3.5 cardDeck (10 to 12 per lesson)

The "name it" workhorse. Set `render: 'deck'` and `size: 'lg'`. 4 cards is the house
size. Each card: `head` (the idea), `label` (the eyebrow, often the tense or a unit
citation), `fr` (the big line), `sub` (the bracketed respelling), `body` (the teaching
sentence plus `EN: `).

```ts
const A2_DECOR: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-decor', render: 'deck', layer: 'core', size: 'lg',
  title: 'Le décor : ce qui se passait', frSub: "L'imparfait",
  hint: 'Quatre cartes. Regarde ce qui ne bouge pas.',
  audio: REC('rec-b1-03-film'), say: REFRAME, terms: ['decor'],
  cards: [
    { head: 'Le lieu et la météo', label: "l'imparfait",
      fr: 'Il pleuvait et la terrasse était vide.',
      sub: '[eel pluh-veh ay la teh-RASS ay-teh VEED]',
      body: "Le film commence. On voit la pluie, la terrasse. Tout est déjà là, et rien n'avance encore. EN: the set is there before anything happens." },
    { head: "Ce que b1.02 t'a déjà donné", label: Cap(IMP_USE_REF),
      fr: "il faisait froid · j'avais vingt ans",
      sub: '[eel fuh-zeh FRWA] · [zha-veh vehⁿ-TAHⁿ]',
      body: `« ${B102_REFRAME} » Habitude, état, météo, heure, âge : c'est déjà le décor. EN: ${B102_REFRAME_EN}` },
  ],
};
```

A card with a middot pair in `fr` is fine at `lg`. At `size: 'xl'` it is refused by
`xl-single-unit` unless the element carries `pair: true`.

### 3.6 groupDrill (18 to 22 per lesson: the most-used type)

Two jobs, and both matter:

**(a) The build drill.** Two or three `grp()` groups of 3 to 4 corpus items each, every
group ending in a `chk()` that gates moving on, optionally closed by a `ctl()` control
page. `size: 'lg'`.

```ts
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-reperer', layer: 'core', size: 'lg',
  title: 'Repère les deux sortes de verbes',
  groups: [
    grp('Ce qui se passait déjà', [
      it(E(1000), 'la météo et la rue'),
      it(E(205), 'un état : le vélo était comme ça'),
      it(E(203), 'la pluie et la terrasse'),
      it(E(1005), 'dans la tête de M. Tremblay'),
    ], chk('Ces quatre phrases : est-ce que quelque chose de nouveau arrive ?',
        ['Non, elles décrivent la situation.', 'Oui, chaque verbe est une étape.'], 0,
        "Rien ne change entre le début et la fin de chaque phrase. EN: nothing changes, so this is the décor.")),
    grp("Ce qui s'est passé", [/* four more */], chk(/* ... */)),
    ctl('Et la phrase du milieu', "« Je buvais un café quand j'ai entendu un bruit. » Combien d'actions ?",
        ['une', 'deux', 'aucune'], 0,
        "Une seule : j'ai entendu. Le café, c'est le décor. EN: one event, one background."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['decor', 'action'],
};
```

**(b) The act check.** Control pages only, through `actCheck()`. Three `ctl()` groups
is the house size. It is the last section of every act.

```ts
const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le début', 'Dans un récit, les premières phrases servent souvent à...',
      ['poser le décor', 'raconter les étapes'], 0,
      "On plante la scène avant de la faire bouger. EN: the scene comes first."),
  ctl('Le test', 'Tu hésites sur un verbe. Que fais-tu ?',
      ['tu regardes sa terminaison', 'tu enlèves la phrase pour voir si l’histoire avance'], 1,
      "Si l'histoire avance sans elle, c'était du décor. EN: if the story still moves, it was background."),
  ctl('La coupure', 'Combien de coupures y a-t-il dans le texte du tram ?',
      ['trois', 'une seule', 'aucune'], 1,
      "Une seule, avec pendant que. EN: one, with pendant que."),
], ['recit', 'decor']);
```

Every `check.why` teaches; a control that only recolours two rows tells a learner they
were wrong at the exact moment the rule was most likely to land.

**Scatter the `correct` index.** The house pattern across a lesson's checks is roughly
even 0/1/2. Never the same index three times running.

### 3.7 trapDrill, the stepped shape (3 to 5 per lesson)

A trapDrill carries three jobs (meet the trap, hear the trap, prove you beat it) and
the stacked render makes them a column with the drill permanently below the fold. **Use
`steps` and `rule`.** A2's stacked shape hides the gate, the audio and the sub-mission
number.

```ts
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a3-piege', layer: 'core', swipe: true,
  title: 'Deux pièges de la coupure',
  rule: {
    title: 'Une bande et un point, jamais deux pareils',
    body: "Deux imparfaits, et personne ne coupe : ça devient deux décors. Deux passés composés, et il n'y a plus de bande : ça devient une suite. EN: two imparfaits give two backgrounds; two passés composés give a sequence.",
  },
  cards: [
    { promptLabel: 'deux imparfaits', promptSound: 'Je dormais quand le téléphone sonnait.',
      fr: 'Je dormais quand le téléphone a sonné.', ipa: '/ʒə dɔʁ.mɛ kɑ̃ lə te.le.fɔn a sɔ.ne/',
      tip: "La sonnerie est un point : elle arrive d'un coup. EN: the ring is the event." },
    // six cards
  ],
  drill: [
    { promptSay: 'Je dormais quand le téléphone ... .', opts: ['sonnait', 'a sonné'], correct: 1 },
    { promptSay: 'Pendant que je ... , il est arrivé.', opts: ['cuisinais', 'ai cuisiné'], correct: 0 },
    // eight questions
  ],
  steps: [
    { label: 'La règle', kind: 'rule',  title: 'Une bande et un point' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme plate raconte' },
    { label: 'Écoute',   kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi',    kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-03-piege-coupure'), say: REFRAME, terms: ['coupure'],
};
```

Shape: `rule` + 6 `cards` + 8 `drill` questions + 4 `steps` with `gate: true` on the
drill step, and `swipe: true`. `promptSound` on a card is the WRONG version and is
never spoken; the audio step plays each card's `fr`. Say that in the recording brief.
Scatter `drill[].correct`.

### 3.8 commonErrors (3 to 5 per lesson)

Four errors. Set `swipe: true` and `size: 'lg'`, or the fallback renderer stacks them.
`why` must say *why the wrong version was a reasonable thing to say*, not just that it
is wrong. That is the whole card.

```ts
const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a4-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre erreurs de décor',
  errors: [
    { wrong: 'Pendant que je lisais, il a regardé la télé.',
      right: 'Pendant que je lisais, il regardait la télé.',
      why: "Normal : en anglais, he watched TV passe partout. Ici, les deux duraient ensemble. EN: both were going on together." },
    { wrong: 'Le bébé a dormi et la maison était calme.',
      right: 'Le bébé dormait et la maison était calme.',
      why: "« A dormi » est correct ailleurs : il dit une sieste finie. Dans un décor, garde l'imparfait. EN: correct elsewhere, wrong as background." },
  ],
  audio: AUDIO, say: REFRAME, terms: ['ensemble', 'decor'],
};
```

### 3.9 tapTable (2 to 7 per lesson)

Exactly 6 rows. Every row carries `say` and a `detail` with its own `title`, `body`
(plus `EN: `) and `say`. **Give it a `sheetId`**: the flow shows the table, the sheet
holds the full reference.

```ts
const A6_MARQUEURS: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a6-marqueurs', layer: 'core', sheetId: 'sheet-duree',
  title: 'Six marqueurs de durée',
  cols: ['Marqueur', 'Fermée ?', 'Temps'],
  rows: [
    { cells: ['pendant deux ans', 'oui', 'passé composé'],
      say: "J'ai travaillé dans ce bureau pendant cinq ans.",
      detail: { title: 'pendant + durée', body: "Tu donnes la durée et elle est finie. EN: a stated, finished length.", say: "J'ai habité à Lyon pendant dix ans." } },
    { cells: ['à cette époque', 'non', 'imparfait'],
      say: 'À cette époque, nous habitions près du marché.',
      detail: { title: 'à cette époque', body: "Une période sans bords : le décor d'une vie. EN: a period with no edges.", say: 'Quand je travaillais à Abidjan, je rentrais tard.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['duree'],
};
```

**Budget: one per act, three per lesson.** The pilot brief says one per LESSON; the
four shipped lessons all break that (2, 3, 3 and 7), and b1.01's seven is the outlier
nobody defends. Three is the working number. See 11.2.

### 3.10 examples, useCases, steps, hacks, focus, flashcards

Small, cheap, and each has exactly one job.

- **`examples`** (3 to 6 per lesson). Build rows with `ex(E(n), note)` so the French is
  the corpus row. 4 to 6 rows. `note` is the teaching.
- **`useCases`** (1 to 2). Four `{ situation, fr, en }`: where the wrong form costs
  something real. b1.03's act 1 and act 10 both carry one.
- **`steps`** (0 to 1). A numbered procedure. b1.03's `a10-plan` is the only one in
  four lessons: five steps, each ending in `EN: `.
- **`hacks`** (1). Three `{ hack, why }`. The trick a good teacher gives you; `why`
  stops it being folklore.
- **`focus`** (1). **Maximum 4 `points`** at layer core (`core-list-items`). Give it a
  `sheetId`.
- **`flashcards`** (1 to 2). Eight `{ front, back, say }`. Front is English, back is
  French, `say` is a full French sentence using it. These are answers, so the EN toggle
  never hides them.

```ts
const A9_HACKS: Sec<'hacks'> = {
  type: 'hacks', id: 'a9-hacks', layer: 'core', title: 'Trois astuces quand tu hésites',
  hacks: [
    { hack: 'Enlève la phrase. Si l’histoire avance quand même, c’était du décor.',
      why: "Le décor peut disparaître sans casser la suite des étapes. EN: cut it; if the story still moves, it was background." },
  ],
  audio: AUDIO, say: REFRAME, terms: ['decor', 'duree'],
};

const A9_FOCUS: Sec<'focus'> = {
  type: 'focus', id: 'a9-focus', layer: 'core', sheetId: 'sheet-film',
  title: 'Ce qu’il faut retenir avant d’écrire',
  points: [
    "Le décor d'abord : où, quand, quel temps il faisait, ce que tu faisais. EN: set the scene first.",
    "Les actions ensuite, dans l'ordre, au passé composé. EN: then the events, in order.",
    "Une coupure au moins : quand ou pendant que. EN: at least one interruption.",
    "Une fin : ce qui a changé après. EN: an ending: what changed afterwards.",
  ],
  audio: AUDIO, say: REFRAME, terms: ['recit', 'coupure'],
};
```

### 3.11 dictation (1 to 2)

`itemIds` only. The renderer builds the letter-tile bank from each item's `fr`. Draw the
ids from the corpus so they are guaranteed to carry the `dictation` drill:

```ts
const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a5-dictee', layer: 'core',
  title: 'Écris la suite que tu entends',
  itemIds: dicteeFor(5),
  audio: AUDIO, say: REFRAME, terms: ['suite'],
};
```

### 3.12 scenario (1 to 2, in the closing act)

Six turns. Each turn is `{ ai, en, user, userEn, alts }`. `userEn` carries a
parenthetical naming the grammar the answer demonstrates. `alts` gives two other
acceptable answers with their own glosses; an alt that is right *for a different
reason* says so.

```ts
{
  ai: 'Vous utilisiez ce vélo souvent ?', en: 'Did you use this bike often?',
  user: "Je l'ai utilisé tous les jours pendant trois ans.",
  userEn: 'I used it every day for three years. (A closed period: passé composé.)',
  alts: [
    { fr: 'Oui, pendant trois ans, tous les jours.', en: 'Yes, for three years, every day.' },
    { fr: 'Oui, je le prenais tous les jours pour aller au travail.',
      en: 'Yes, I took it every day to go to work. (A habit, seen as décor: also right.)' },
  ],
}
```

### 3.13 practice (1, in the closing act)

The join between the lesson and the drills.

```ts
/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A10_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a10-parler', layer: 'core',
  title: 'Dis ton récit à voix haute', skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    'fr.a2.ecole.045',
  ],
  audio: AUDIO, say: REFRAME, terms: ['recit', 'action'],
};
```

`skill: 'speak'` needs `voiceflash` on **every** id it names. Filter, do not list.
Anything in `NOT_SPEAKABLE` is forbidden here, and every id you add by hand must be in
`Lesson.itemIds`.

### 3.14 cheatSheet (1, in the closing act)

Six rows, `{ k, v, say, detail }`. Give it a `sheetId`. Note that a `cheatSheet` placed
*inside* a reference sheet renders only its title (`ReferenceSheet.tsx` draws `teach`,
`table` and `letterGrid` and falls through to the title for everything else), so the
cheatSheet lives in the FLOW and points at a sheet, never the other way round.

```ts
const A10_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a10-cheat', layer: 'core', sheetId: 'sheet-recit',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'le décor', v: "l'imparfait : ce qui se passait", say: 'Il pleuvait et la terrasse était vide.',
      detail: { title: 'Le décor', body: "Lieu, météo, état, habitude, action en cours. EN: place, weather, state, habit, ongoing action.", say: 'Il neigeait et les rues étaient vides.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['recit', 'coupure', 'duree'],
};
```

### 3.15 progressCheck, reviewDeck, roundup (one each, closing act)

- **`progressCheck`** goes BEFORE the quiz. Prose (exempt from the word cap) plus four
  `{ k, v }` stats. Say what the learner can now do, name the trap that remains, and
  give one concrete revision instruction.
- **`reviewDeck`** goes AFTER the quiz. Nine `{ front, back, say }` cards, `front` the
  concept, `back` the form, `say` a full sentence.
- **`roundup`** closes. `body` opens with the reframe verbatim and ends by naming what
  the NEXT lesson adds. **Maximum 4 `points`.**

### 3.16 task (exactly one, in the closing act)

The draft type in `_task-section.ts`, not in `schema.ts`. It is the only open-answer
check in the lesson and it is where the unit outcome is actually tested.

```ts
const A10_TASK: TaskSection = {
  type: 'task', id: 'a10-mission',
  title: 'Raconte un imprévu', frSub: 'Mission écrite',
  brief: "Il t'est arrivé quelque chose d'imprévu : une panne, une rencontre ou un oubli. Ton amie Fatou, à Dakar, te demande ce qui s'est passé. Écris-lui un court message. Pose d'abord le décor, puis raconte les actions, jusqu'à la fin.",
  briefEn: 'Something unexpected happened to you: ... set the scene first, then tell the events, through to the end.',
  produce: "Écris un récit de 80 à 120 mots au passé, avec au moins trois verbes à l'imparfait pour le décor, au moins trois verbes au passé composé pour les actions, une coupure avec quand ou pendant que, et une fin.",
  responseSpec: { kind: 'text', minWords: 80, maxWords: 120 },
  rubric: { criteria: [
    { key: 'temps', label: 'Le bon temps pour chaque rôle', maxPoints: 4, descriptors: [
      "4 : Chaque verbe a le temps de son rôle. Au moins trois imparfaits pour le décor, ...",
      "3 : Presque tous les verbes ont le bon temps. ...",
      "2 : Le décor et les actions sont mélangés à plusieurs endroits, ...",
      "1 : Presque tout est au même temps. On ne peut pas séparer le décor de l'action.",
    ] },
    { key: 'formes', label: 'Des formes justes', maxPoints: 3, descriptors: [/* 3 */] },
    { key: 'recit',  label: 'Un récit qui se suit', maxPoints: 3, descriptors: [/* 3 */] },
    { key: 'tache',  label: 'La mission complète', maxPoints: 2, descriptors: [/* 2 */] },
  ] },
  scaffold: ["C'était...", 'Il faisait...', 'Je ... quand...', 'Pendant que...', "D'abord,", 'Ensuite,', 'Soudain,', 'Finalement,'],
  modelAnswer: "Salut Fatou ! Samedi dernier, j'ai passé une drôle de journée. ... Bises !",
  modelAnswerEn: "Hi Fatou! Last Saturday I had a strange day. ...",
  watchFor: [
    { pattern: "The setting told in the passé composé: weather, time, states and ongoing actions before the event (il a fait nuit, la route a été vide, j'ai écouté la radio).",
      criterion: 'temps',
      feedback: "Ton décor avance comme une liste d'actions. Mets à l'imparfait ce qui se passait déjà : il faisait nuit, la route était vide.",
      ref: 'a2-trier' },
    // 10 to 12 of these, one per way this lesson's learners actually go wrong
  ],
  graderNotes: [
    'Judge tense by FUNCTION in this text, not by surface cues. A verb after « soudain » can legitimately be imparfait if it describes a new state that lasts.',
    'Word count EXCLUDES the greeting and the sign-off (Paul, 2026-09-22). Count the body only, with 10% tolerance before criterion « tache » loses its point.',
    'Narrator gender is unknown: judge être agreement for internal consistency only.',
    'Do not score the meaning-shift verbs of b1.04 (savoir, connaître, vouloir, pouvoir, devoir, avoir) as errors in either tense.',
    'Accept regional vocabulary (dépanneuse / remorqueuse, char in Québec, taxi-brousse in West Africa).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
};
```

Shape rules:
- Four criteria, `maxPoints` summing to 12, each with one descriptor per point level.
  The descriptors are shown to the learner BEFORE they write, so they double as the
  checklist. Write them as things a learner can check, not as marker jargon.
- `responseSpec.kind` is `'text'` (`minWords`/`maxWords`) for a writing lesson and
  `'audio'` (`minDurationS`/`maxDurationS`) for a speaking one. Shipped: 50-80, 90-130,
  80-120 words; 60-120 seconds. Set `Lesson.skill` to `'PE'` or `'PO'` to match.
- `scaffold` chips are sentence openers. **None of them may complete the task alone.**
- `modelAnswer` is at the level, never above it, and it lands inside the word bounds.
- Every `watchFor.ref` must name a real section id in this lesson.
- `graderNotes` are never shown to the learner. Put every judgement call there: what
  counts toward the word budget, what regional forms are accepted, what belongs to
  another lesson and must not be marked.

---

## 4. The tests

### 4.1 The quiz: one per lesson

`LessonPager` renders exactly one quiz. A second is silently never drawn. The `exam`
flag exists because of that, and you do not set it.

```ts
const A10_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a10-quiz', layer: 'core', title: "L'examen",
  passMark: 70, roundFailThreshold: 60,
  rounds: [ /* 10 or 11 rounds, EXACTLY 8 questions each */ ],
  audio: AUDIO, say: REFRAME,
};
```

**Rounds x 8.** Shipped: 10 x 8 and 11 x 8. One round per act from act 1 (or act 2) to
the penultimate act, plus one integration round. `passMark: 70`, `roundFailThreshold:
60` on all four.

**One `targets` entry per round, and it must be a distinct errorTrigger id.** A failed
round fires that trigger's remediation drill. Ten rounds, ten triggers, ten drills, one
to one:

```ts
{ id: 'r3-coupure', label: 'La coupure', targets: ['coupure-plate'], questions: [ /* 8 */ ] },
```

**Question constructors.** Define them once so no question can be missing a required
field:

```ts
type QQ = QuizQuestion;
const tI = (q, prompt, answer, why, ref): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer], why, ref });
const mc = (q, opts, correct, why, ref): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt, answer, why, ref): QQ =>
  ({ format: 'errorSpot',
     q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.',
     prompt, answer, accept: [answer], why, ref });
const lC = (q, say, opts, correct, why, ref): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });
```

Real questions:

```ts
mc('Complète : « Il ... et la terrasse était vide. » (pleuvoir)', ['a plu', 'pleut', 'pleuvait'], 2,
   "Rien n'arrive : c'est le décor. EN: nothing happens here.", 'a2-decor'),
tI('Mets le verbe au bon temps et écris la phrase.', 'Mon vélo (être) attaché devant le café.',
   'Mon vélo était attaché devant le café.', "Un état, pas une étape. EN: a state.", 'a1-reperer'),
eS('Quand nous sommes arrivés, la terrasse a été déjà pleine.',
   'Quand nous sommes arrivés, la terrasse était déjà pleine.',
   "La terrasse était pleine avant l'arrivée. EN: it was full beforehand.", 'a2-test'),
lC("Écoute. Cette phrase fait-elle avancer l'histoire ?", 'Il neigeait et les rues étaient vides.',
   ["Non, c'est le décor.", "Oui, c'est une action."], 0,
   'Deux imparfaits, deux bandes. EN: two backgrounds.', 'a2-trier'),
```

**Every question needs `why` AND `ref`.** `validateDensity` fails on either missing.
`ref` names the section that TAUGHT the point, so the "see this again" jump lands
somewhere useful; it is also what `warmBackQuestions()` filters on.

**Question-type mix, as shipped:**

| | mcq | typeIn | errorSpot | listenChoose |
|---|---|---|---|---|
| b1.01 (88) | 27 | 34 | 14 | 13 |
| b1.02 (80) | 30 | 28 | 12 | 10 |
| b1.03 (80) | 31 | 21 | 18 | 10 |
| b1.04 (88) | 44 | 22 | 11 | 11 |

The working ratio: roughly **40% mcq, 30% typeIn, 15% errorSpot, 12% listenChoose**,
with at least one `listenChoose` in every round.

**Answer-position scatter.** `validateDensity` fails if more than **40%** of the
numeric `correct` values sit in one slot, counted across the whole lesson. Measured:

| | slot 0 | slot 1 | slot 2 | worst |
|---|---|---|---|---|
| b1.01 | 12 | 14 | 14 | 35% |
| b1.02 | 13 | 14 | 13 | 35% |
| b1.03 | 16 | 16 | 9 | 39% |
| b1.04 | 21 | 20 | 14 | 38% |

Aim for even thirds. b1.03 at 39% is one question from failing: do not run that close.
Also never put the answer at the same index more than twice in a row.

Two-option and three-option questions are both fine. A duplicate option in one question
is refused (`quiz-duplicate-option`).

### 4.2 Error triggers (10 to 11)

One per act's characteristic failure, each naming its drill and, where a retest makes
sense, its retest.

```ts
const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'tout-au-pc',
    description: 'Tells the whole episode in the passé composé, so the setting, states and habits become a list of steps.',
    detectOn: ['a1-scene', 'a1-reperer', 'a2-trier', 'a10-mission'],
    drill: 'd-decor', retest: 'd-decor' },
  { id: 'coupure-plate',
    description: 'Writes an interruption with both verbs in the same tense, which reads as two backgrounds or as a sequence.',
    detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a10-mission'],
    drill: 'd-coupure', retest: 'd-coupure' },
];
```

`description` is English, one sentence, describing the LEARNER BEHAVIOUR, not the rule.
`detectOn` names 3 to 4 real section ids, usually the act's build drill, its trap, its
check, and the task (`a10-mission`) when the task can show it.

### 4.3 Remediation drills (10 to 11)

One per trigger, each the resolving target of exactly one quiz round. **Not in
`sections`**: a learner who never trips one never sees it.

```ts
const DRILL_LIST: LessonDrill[] = [
  { id: 'd-decor', title: 'Décor ou action', format: 'sort',
    coach: "Deux piles. Demande-toi : ça se passait déjà, ou ça s'est passé ? EN: sort by what the verb does.",
    buckets: ['le décor', "l'action"],
    items: [E(203), E(205), E(1011), E(201), E(1016), E(1020)], audio: AUDIO },
  { id: 'd-coupure', title: 'Une bande, un point', format: 'mcq',
    coach: 'La chose en cours est à l’imparfait ; celle qui arrive est au passé composé. EN: ongoing imparfait, arriving event passé composé.',
    q: 'Je dormais quand le téléphone ... .', opts: ['sonnait', 'a sonné'], correct: 1,
    why: 'La sonnerie arrive d’un coup. EN: the ring happens at once.',
    items: [E(210), E(211), E(1030), E(1031), E(1036)], audio: AUDIO },
  { id: 'd-suite', title: 'Dans l’ordre', format: 'flashcard',
    coach: 'Lis la suite et dis-la à voix haute, avec d’abord, puis, finalement. EN: read each chain aloud with its connectors.',
    items: [E(230), E(231), E(232), E(1055), E(1057), E(1058)], audio: AUDIO },
];
```

Formats used: `'sort'` (with `buckets`), `'mcq'` (with `q`/`opts`/`correct`/`why`),
`'flashcard'`. Six items is the house size. Short by design: help, not a detour.

### 4.4 Act checks

Every act ends in one (3.6b). That is 10 to 12 gated checks before the quiz ever
arrives.

---

## 5. Language and style

- **`tu` everywhere** in instructions, coach lines, drill prompts, break bodies and
  milestones. Characters inside a scene use what the situation needs: the police
  officer and the insurance agent say `vous`.
- **French-first.** Instructions, titles, `frSub`, briefs, drill prompts, coach lines
  and break bodies are simple French (B1 vocabulary, short sentences). Model French is
  natural, never simplified into something a French speaker would not say.
- **English is always authored, never shown by default.** Two forms:
  1. an `en` field where the type has one (`bubble`, `examples`, `useCases`,
     `listening.lines`, `scenario`, `glossary`);
  2. a final sentence starting `EN: ` where it does not (`teach.body`, `break.body`,
     `trapDrill.rule.body`, `commonErrors.why`, `focus.points[]`, `chk().why`,
     quiz `why`, term `body`, act `opener.line`, `milestone`).

  `english.logic.ts` `stripEnTail()` matches `/(^|\s+)EN: [\s\S]*$/`, so the gloss must
  be **the last thing in the string** and must start with exactly `EN: ` after
  whitespace.
- **What the toggle must never hide: answers.** A flashcard back, a quiz meaning, a
  glossary tap, a `reviewDeck` back, a scenario `userEn` are the thing being asked for.
  They are not marked as glosses and stay visible. Do not push those behind `EN: `.
- **Titles, `frSub`, group labels, card `head`s and stat keys carry NO `EN: ` tail.**
  They are labels. All four lessons do this; it is open question 1 in three of the four
  headers.
- **`Lesson.intro` and `overview.titleEn` are English. `Lesson.title` (= `UNIT.sub`)
  and `overview.introFr` are French.** `tag` is `'B1 · LEÇON NN'`.
- **Register.** Adult learners, adult situations: work, moving house, childhood
  memories, travel, administration, family. Mixed francophone setting leaning slightly
  towards Canada: France, Québec, Belgium, Switzerland, Dakar, Abidjan. Characters
  recur only inside one lesson.
- **Sentence length.** Two clauses at most in an instruction. The 45-word cap is a
  ceiling, not a target: b1.03's longest core body is 38 words and most are under 25.
- **The 45-word density cap** (`core-words`) applies per authored FIELD on any
  `layer: 'core'` section, counting words with a letter or digit. `say`, `ipa`,
  `respell`, `audio`, `itemId(s)`, `id`, `type`, `render`, `layer` and `size` are
  excluded. `reading`, `progressCheck`, `roundup` and `inhibitionDrill` prose is
  exempt. Reference-sheet sections (`layer: 'deep'` or `render: 'sheet'`) are exempt.
- **Opener lines and milestones.** The pattern is: one concrete image or second-person
  situation, a colon, then the point, then `EN: `.
  - opener: `"Dix ans, c'est long, et pourtant c'est fermé : ici tu apprends à compter le temps. EN: Ten years is long and still closed: here you learn to count time."`
  - milestone: `"Une durée longue ne te fait plus hésiter : tu regardes si elle est fermée. EN: A long stretch no longer fools you: you look at whether it is closed."`
  - An opener promises. A milestone reports. Never swap them.
- **The reframe** is one sentence, memorable, and TRUE everywhere the lesson goes. It
  must appear VERBATIM in at least 3 sections (`validateDensity` `reframe` rule); the
  house way is to make it every section's `say`, which gives you 70+. Write the
  rejected candidates and why each fails.

---

## 6. The house rules that have shipped bugs

Every one of these has cost a real defect. The reason is given so you can tell when a
rule applies.

**6.1 No em dash (U+2014) anywhere in the lesson.** `validateDensity`'s `em-dash` rule
walks every string in the whole `Lesson` object, including sheets and drills, and fails
on one. Use a colon or a comma. Label separators in non-learner-facing code comments are
the only place it survives.

**6.2 The word "honest" or "honesty" never appears.** A test enforces it
(`sons-alphabet.test.ts`). There is no exception.

**6.3 No U+203F liaison tie.** It renders as a low underscore on a Pixel 6. A liaison
consonant just moves onto the next syllable in the respelling: `eh-ta-ree-VAY`, not
`eh‿ta‿ree‿VAY`.

**6.4 No spaced `?` or `!` in a scene or story bubble.** `Oui !` makes the bubble lose
its last word while the audio speaks it in full. Write French punctuation normally in
`reading.text`, `listening.lines`, `scenario` turns and `glossary` notes; in bubbles,
rewrite the line so it does not need one. b1.03's act 1 scene has no `?` in any bubble;
the officer says `Racontez-moi ce qui s'est passé.`

**6.5 One quiz per lesson.** A second `quiz` section is silently never rendered.

**6.6 `table` only inside a `ReferenceSheet`.** `validateDensity`'s `table-in-core`
refuses a `table` at `layer: 'core'`. Sheet sections are `layer: 'deep', render:
'sheet'`. A `tapTable` is the flow's table, capped at 6 rows.

**6.7 Term chips: 3 per section maximum, 37 characters for the row.** `MissionSection`
caps the visible chips at `CHIP_CAP = 3` and collapses the rest behind "+N", and the
row budget is 37 characters on a Pixel 6. Keep every `term` label 8 to 13 characters so
the widest trio fits. All four lessons have zero sections over three chips.

**6.8 `fold()` strips more than you think.** `answer.logic.ts`:

```ts
s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
 .replace(/[/[\]()«».,!?;:]/g, '').replace(/[-·’']/g, '').replace(/\s+/g, '').trim()
```

So a typed answer cannot turn on **accents, case, commas, full stops, question marks,
brackets, quotation marks, hyphens, apostrophes or spacing**. Never write a `typeIn` or
`errorSpot` whose only difference from the wrong answer is a cedilla, an `é`, a comma
or an apostrophe. Test the tense, the auxiliary, the agreement letter, the word choice.

**6.9 `listenChoose` needs `say`.** Without it `ListenChooseCard` falls back to speaking
`opts[correct]`, which speaks the answer, and on an English-option question speaks
English at a French listening exercise. a1.25 shipped in v22 with two such questions.

**6.10 `errorSpot` and `typeIn` need `prompt`.** `q` is the instruction; `prompt` is the
text the learner works ON, shown above the input. a1.16 shipped two questions whose
phrase lived only in `prompt` while the card rendered `q` alone: unanswerable.

**6.11 Missions do not shuffle their options; the quiz does.** `LessonRich` permutes a
quiz question's `opts` at runtime. `MissionRich` renders authored order. So every
`trapDrill.drill[].correct`, `groupDrill` `check.correct` and `listening`
`questions[].correct` must be scattered BY HAND, and no index may repeat more than
twice in a row.

**6.12 Respell house style.** Hyphenated syllables, the final stressed syllable of each
group in CAPS, `ü` for French u, nasals closed with the superscript `ⁿ`
(`kahⁿ`, `mohⁿ`, `uhⁿ`), never a plain n or m. `[zhuh pahr-LEH]`. Section `respell`
fields are bracketed; corpus `respell` fields are not. Reuse an existing respelling for
any word already in `seed.json`.

`validateDensity`'s `nasal-convention` checks every element carrying both `fr` and
`respell`. It has three known blind spots, and it also FALSE-POSITIVES on a real
consonant after a single vowel (`[OM]` for `homme` is fine, `[OM]` for `bon` is not;
the checker cannot always tell). Where it fires on a correct respelling, double the
consonant as a2.34 does: `PLENN` for `pleine`, `TRAMM` for `tram`, `deu-ZYEM` for
`deuxième`. Say in the corpus header which respellings are spelled for the checker
rather than for the ear, and why.

**6.13 Never edit, `git checkout`, or rewrite `ealch-v2/src/content/seed.json`.** Read
it only. Reverting it discards other authors' uncommitted lessons.

**6.14 Never bump `Lesson.version` for a text edit.** A bump wipes every learner's
mission checkmarks and XP for that lesson. It moves only when the SECTION LIST changes.
The four pilots sit at `version: 2` because they are rebuilds.

**6.15 A section type that needs `swipe` and does not get it draws nothing.**
`commonErrors` renders its own deck only when `swipe` is set; without it the shared
fallback runs, which is fine today but was a blank mission twice before the fallback
moved out of `default:`. Set `swipe: true` on `commonErrors` and `trapDrill`.

**6.16 `layer: 'more'` does NOT mean optional.** It relaxes the density budget on a
section the learner still walks. Use `render: 'sheet'` plus `sheetId` for anything
genuinely off the main path. All B1 flow sections are `layer: 'core'`.

---

## 7. Reference sheets and sheet links

Sheets are `layer: 'deep'`. They are the one place in the product where tables and
density are fine, because the learner arrives with a specific question.

```ts
const sheet = (id, title, contains, sections): ReferenceSheet =>
  ({ id, title, layer: 'deep', contains, sections });
const teach = (id, title, body): LessonSection =>
  ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id, title, cols, rows): LessonSection =>
  ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-duree', 'Les durées', ['fermée ou ouverte', 'les marqueurs'], [
    teach('sheet-duree-teach', 'La fin, pas la longueur',
      "Si la phrase donne la durée et que la période est finie, c'est le passé composé, même pour dix ans. Si aucune durée n'est donnée, ou si la période sert de décor à autre chose, c'est l'imparfait. EN: a stated, finished stretch takes the passé composé; an open one is background."),
    table('sheet-duree-table', 'Marqueurs et temps', ['Marqueur', 'Fermée ?', 'Exemple'], [
      ['pendant + durée', 'oui', "J'ai habité à Lyon pendant dix ans."],
      ['toute la journée, toute la nuit', 'oui', 'Il a neigé toute la nuit.'],
      ['à cette époque', 'non', 'À cette époque, nous habitions près du marché.'],
    ]),
  ]),
];
```

**What belongs in a sheet:** the full paradigm table, every rule the flow names, the
marker lists, the cue-and-counterexample table, the writing checklist. Anything a
learner needs to look up and would otherwise lose among 76 missions.

**What does not:** anything interactive. `ReferenceSheet.tsx` renders `teach`,
`letterGrid` and `table`, and falls through to drawing just the TITLE for every other
type. A `cheatSheet` or `examples` placed in a sheet is a title and nothing else.

Five sheets is the shipped number; four is the minimum. Each gets a `contains` list for
the index.

**Every mission whose full content lives in a sheet must carry `sheetId`.** b1.01
shipped four sheets with **zero** `sheetId` links: nothing in the flow reaches them and
the learner never knows they exist. That is the anti-pattern and it is the one thing in
b1.01 you must not copy. b1.02, b1.03 and b1.04 link every sheet, from 1 to 11 missions
each.

The natural link points: the `tapTable` whose six rows are a cut of the sheet's table,
the `focus` whose four points summarise it, the `cheatSheet` in the closing act, and any
`cardDeck` that names a rule the sheet spells out. `validateLesson` fails a `sheetId`
that names no sheet; there is no validator for an unlinked sheet, so check it yourself.

---

## 8. Artwork

### 8.1 Where the files go

```
ealch-v2/assets/lessons/<slug>/act01.jpg … actNN.jpg
```

Landscape 4:3, JPEG, two-digit filenames, one per act. The lesson points at
`lessons/<slug>/actNN.jpg`, so a different name renders nothing.

### 8.2 Registration, and the order it must happen in

A ref renders only once it is listed in `ealch-v2/src/content/lessonImages.ts`:

```ts
  // b1.01.l1 · L'imparfait : la formation
  'lessons/imparfait/act01.jpg': require('../../assets/lessons/imparfait/act01.jpg'),
```

`require()` resolves statically. **Register a ref only after its file exists**, or the
bundle breaks rather than degrading to no image. Generate the images, drop them in the
folder, then add the lines. The prompt file never touches `lessonImages.ts`.

Current state: only b1.01's twelve are registered. b1.02, b1.03 and b1.04 have finished
prompt files, no image files and no registry lines.

### 8.3 The prompt file

`<slug>-image-prompts.md`. Header, then the house STYLE block, then one section per act.

Header, copied from `pc-imparfait-image-prompts.md`:

```markdown
# b1.03 « Passé composé ou imparfait : les bases » — chapter opener artwork

Ten images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/pc-imparfait/`
- **Filenames, exactly:** `act01.jpg` … `act10.jpg` (the lesson already points at
  `lessons/pc-imparfait/actNN.jpg`, so a different name renders nothing).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in
  `ealch-v2/src/content/lessonImages.ts`. `require()` resolves statically, so a
  ref registered before its file exists breaks the bundle. Generate the files
  first, then register them. This file does NOT touch lessonImages.ts.
- Every prompt below stands alone: paste one into ChatGPT (or the Fal image
  script) and it produces that act's picture without any other context. The
  house style block is repeated in full in each prompt on purpose.
- **No lettering of any kind** in any image, no close-up faces, and nothing that
  needs a caption to be understood: the opener already carries the act title and
  the promise line underneath.
- [one line naming the lesson's single visual metaphor and how these ten hold it together]
```

The STYLE block, verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`:

> Flat editorial vector illustration, in the style of a modern French language
> textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue,
> terracotta, warm ochre, sage green. Soft rounded geometric figures with simple
> calm faces, no black outlines, gentle flat shading. Subtle paper grain texture
> over the whole image. Warm even light. No text unless explicitly described.
> Uncluttered composition with generous empty space. Absolutely no lettering,
> captions, watermarks or logos beyond what is described.

Then one block per act. **The full save path goes under every prompt** (Paul,
2026-09-22), so a prompt can be pasted into ChatGPT and the result dropped straight into
place:

```markdown
## Act 03 — La coupure · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/pc-imparfait/act03.jpg`

A conceptual illustration about something crossing something else. A long horizontal
band of dusty slate blue runs across a cream field, calm and even, clearly continuing
past both edges of the frame. Exactly at its centre, a single bright terracotta wedge
drops into it from above at a sharp angle, meeting the band and interrupting its smooth
surface with a small bright flare at the contact point. The band continues on both
sides of the wedge, unchanged. Everything else is empty cream space. The subject is one
continuous band and one sharp thing landing on it. Flat editorial vector illustration,
in the style of a modern French language textbook. Muted warm palette: … [the whole
STYLE block, repeated in full]
```

Prompt anatomy: one opening sentence naming the concept; three or four sentences of
concrete geometry and colour; one sentence beginning "The subject is…"; then the STYLE
block in full. Every prompt is one paragraph, self-contained, and repeats the style.
Alternate conceptual images (bands, dots, shadows, signposts) with quiet human scenes
(a counter, two rooms in cross-section, a roadside) so ten images do not read as ten
diagrams.

---

## 9. The build process

### 9.1 Act plan first

Before a line of content: acts, sub-topic per act, missions per act, corpus rows per
act. Write it into the lesson header (9.5) and keep it accurate. Decide the reframe and
write down the rejected candidates.

### 9.2 Author the corpus block for the act, then the act

Rows first, so `it()`, `ln()` and `ex()` have something to copy. Then the act's
sections in rhythm order, then the act definition.

### 9.3 Validate after EVERY act, never only at the end

From `ealch-admin`:

```bash
# 1. Typecheck. Filter to your files: errors elsewhere are not yours, and a red
#    local run can be gitignored scratch rather than a red repo.
pnpm exec tsc --noEmit 2>&1 | grep 'scripts/data/b1/<slug>-'
```

```bash
# 2. The schema's own validators, on the lesson with the draft `task` removed.
#    Write this into your session scratchpad as a .mts file and run it with tsx.
```

```ts
// scratch/validate-<slug>.mts
import { validateLesson, validateItem } from '../../../ealch-v2/src/content/schema.ts';
import { validateDensity, formatDensity } from '../../../ealch-v2/src/content/density.logic.ts';
import { lessonWithoutTask } from './scripts/data/b1/<slug>-lesson.ts';
import { ALL_ROWS } from './scripts/data/b1/<slug>-corpus.ts';

const L = lessonWithoutTask();
const known = new Set<string>(L.itemIds);
const li = validateLesson(L);
const di = validateDensity(L, known);
const ii = ALL_ROWS.flatMap((r) => validateItem(r, r.id));

console.log(`validateLesson ${li.length} | validateDensity ${di.length} | validateItem ${ii.length}/${ALL_ROWS.length}`);
if (li.length) console.log(li.map((i) => `  L ${i.path}: ${i.message}`).join('\n'));
if (di.length) console.log(formatDensity(di));
if (ii.length) console.log(ii.map((i) => `  I ${i.path}: ${i.message}`).join('\n'));

// The assertions no validator makes. Do them here.
const defined = Object.keys(L.terms ?? {});
const used = new Set(L.sections.flatMap((s: any) => s.terms ?? []));
console.log('unsurfaced terms:', defined.filter((t) => !used.has(t)));
console.log('sections with >3 chips:', L.sections.filter((s: any) => (s.terms ?? []).length > 3).map((s: any) => s.id));
const sheetIds = new Set((L.sheets ?? []).map((s) => s.id));
const linked = new Set(L.sections.map((s: any) => s.sheetId).filter(Boolean));
console.log('unlinked sheets:', [...sheetIds].filter((id) => !linked.has(id)));
const named = new Set(JSON.stringify(L.sections).match(/fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}/g) ?? []);
console.log('named but not in itemIds:', [...named].filter((id) => !known.has(id)));
```

```bash
pnpm exec tsx scratch/validate-<slug>.mts
```

Run it after every act. Report the output verbatim, not a summary.

```bash
# 3. The admin test suite, if you added a pinning test.
pnpm test
```

Note: `ealch-admin` is **pnpm**, `ealch-v2` is **npm**. Running `pnpm test` in the app
directory is wrong.

### 9.4 Assemble, preview, review

1. Quiz rounds, drills, triggers, sheets and deck tranches.
2. Full validation and typecheck, all zero.
3. Regenerate the preview JSON: `pnpm tsx scripts/data/b1/_preview-<id>.ts`.
4. Check on the device through Metro (the dev-client deep link, never `--localhost`).
5. Paul reviews on the phone. The next lesson starts only after his OK.

Lessons are built **one at a time**.

### 9.5 The lesson header comment

Required. Copy b1.03's shape exactly:

```
// <lessonId> « <French title> » — the lesson.
// REBUILD v2, DRAFT, to RICH-LESSON-STANDARD.md on top of B1-PILOT-BRIEF.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is the draft type in `_task-section.ts`, not in schema.ts, so `sections` is
// `DraftSection[]` and the validators run on `lessonWithoutTask()`.
//
// ═══ ACT PLAN  (sub-topic · missions · what the act releases) ═══
//   Rhythm per act: meet (…), name (…), build (…), choose (…), trap (…), check (…).
//    1  <act title>   <missions>   <what it covers>
//    …
//   TOTAL <n> missions, <n> acts. Corpus: <n> authored rows in <n> blocks plus
//   <n> reused seed rows, <n> of them released act by act through `deckTranche`.
//   Chapter artwork: `<slug>-image-prompts.md`, <n> prompts, one per act.
//
// ═══ REFRAME (which later lessons import it) ═══
//   « <the line> »
//   EN: <the gloss>
//   <one paragraph on the single metaphor and what it is NOT>
//
// ═══ OWNS / QUOTES ═══
//   OWNS    <what this lesson is the single source of>
//   QUOTES  <which reframes are imported, never retyped>
//   LEAVES  <what is deliberately left to a later lesson, and where that is said>
//
// ═══ HOUSE DECISIONS APPLIED (Paul, 2026-09-22) ═══
//   tu / English behind the toggle / French `say` / theme / citation style.
//
// ═══ OPEN QUESTIONS FOR PAUL ═══
//   1. …  (numbered, specific, each answerable yes or no)
```

The corpus file gets its own header: stable exports, what the unit owns, a `§A.
MEASURED` block stating the theme's status, the id block, which rows the seed does not
have, and the date the seed was read.

### 9.6 What "done" means

1. The three files typecheck, filtered to `scripts/data/b1/<slug>-*`.
2. `validateLesson`, `validateDensity` and `validateItem` all return **zero** issues,
   reported verbatim.
3. The extra assertions in 9.3 are clean: no unsurfaced terms, no section over three
   chips, no unlinked sheet, no named id missing from `itemIds`.
4. The header comment carries the act plan, the reframe, owns/quotes/leaves and the open
   questions.
5. The image prompt file exists, one prompt per act, each with its full save path and
   the full STYLE block.
6. The preview JSON regenerates and the lesson has been seen on the device.

---

## 10. Copy-paste checklist

Tick every line before reporting.

```
FILES
[ ] <slug>-corpus.ts, <slug>-terms.ts, <slug>-lesson.ts, <slug>-image-prompts.md all exist
[ ] Import path to schema is '../../../../ealch-v2/src/content/schema.ts'
[ ] Corpus header names the STABLE EXPORTS and warns against renaming them
[ ] Corpus header states the theme's status and "seed-checked only, DB check pending at import"
[ ] Two id ranges claimed, written into ID_RANGES and the header, and not exceeded
[ ] Every item id goes through E(n); none is typed as a literal
[ ] Every reused seed id has its French in a trailing comment
[ ] NOT_DECK_ABLE and NOT_SPEAKABLE listed with the reason per id

SHAPE
[ ] 70 to 100 missions, 8 to 12 acts, 6 to 11 missions per act
[ ] Every act follows meet / name / build / choose / trap / check
[ ] No two consecutive sections of the same type without a reason
[ ] Act 1 opens with a scene (or story), goals, a reading, a build drill, useCases, a check
[ ] Final act: reading, plan, useCases, scenario, TASK, practice, cheatSheet, progressCheck, QUIZ, reviewDeck, roundup
[ ] Every act has opener.line (French + "EN: ") and opener.imageRef lessons/<slug>/actNN.jpg
[ ] Every act has a milestone: French, second person, what the learner can now do, + "EN: "
[ ] estScreens set per act; ceil(estScreens / (1 + restPoints.length)) <= 22 for every act
[ ] deckTranche has exactly one slice per act, generated not typed, flashcard-able ids only

EXPORTS
[ ] SECTIONS derived from ACTS.flatMap, never a second typed list
[ ] ITEM_IDS covers every id any section, drill or term names
[ ] acts[].sections derived from the act definitions
[ ] LESSON.overview.screens set from the estScreens sum
[ ] lessonWithoutTask() present and used by every validator run
[ ] audio.recorded scraped from SECTIONS; every rec id has a real studio brief
[ ] version is 2 for a rebuild and is NOT bumped for a text edit

TESTS
[ ] Exactly ONE quiz section
[ ] 10 or 11 rounds of EXACTLY 8 questions; passMark 70; roundFailThreshold 60
[ ] Every round has exactly one `targets` entry, a distinct errorTrigger id
[ ] Every question has `why` AND `ref`, and `ref` names a real section id
[ ] Type mix roughly 40% mcq / 30% typeIn / 15% errorSpot / 12% listenChoose
[ ] At least one listenChoose per round, each with `say`
[ ] Every typeIn and errorSpot has `prompt`
[ ] No answer depends on an accent, comma, apostrophe, hyphen or spacing (fold())
[ ] MISSION answer slots spread WITHIN each option-count class: 2-option checks
    near 50/50, 3-option near a third each, nothing over 55%, never more than 3
    the same in a row. Measured by `scripts/b1-answer-slots.test.ts`.
[ ] correct indices scattered by hand in every trapDrill.drill, groupDrill check and listening
[ ] the QUIZ is exempt: LessonRich re-shuffles its options on every attempt, so
    authored quiz slots never reach a learner. validateDensity's quiz-spread rule
    still applies to it, and it is the only spread rule any validator enforces.
[ ] One errorTrigger per act, each naming a real drill (and retest where useful)
[ ] One drill per trigger, six items, not in `sections`
[ ] Every act ends in a gated act check (control-page groupDrill)
[ ] Exactly one `task`, in the final act, after the scenario, before progressCheck

LANGUAGE
[ ] `tu` in every instruction, coach line, prompt, break body and milestone
[ ] Every explanatory French string carries English: an `en` field or a trailing "EN: " LAST
[ ] Answers (flashcard backs, reviewDeck backs, glossary, scenario userEn) are NOT behind "EN: "
[ ] Titles, frSub, labels, card heads and stat keys carry NO "EN: " tail
[ ] Lesson.title and overview.introFr French; Lesson.intro and overview.titleEn English
[ ] tag is 'B1 · LEÇON NN'
[ ] No authored core-layer string over 45 words
[ ] reframe appears verbatim in at least 3 sections (house way: it is every `say`)
[ ] Every `say` is French, fr-FR, and is not a re-read of the card

HOUSE RULES
[ ] No em dash (U+2014) anywhere in the lesson object
[ ] No "honest" / "honesty" anywhere
[ ] No U+203F tie in any respelling
[ ] No spaced ? or ! in any scene or story bubble
[ ] No `table` outside a ReferenceSheet
[ ] At most one tapTable per act and three per lesson; exactly 6 rows each
[ ] At most 3 term chips per section; every term label 8 to 13 characters
[ ] Every defined term is surfaced by at least one section
[ ] focus.points and roundup.points: at most 4
[ ] `swipe: true` on commonErrors and trapDrill
[ ] trapDrill uses the stepped shape: rule + cards + audio + gated drill
[ ] Respell house style: hyphens, CAPS on the final stressed syllable, ü, nasal ⁿ
[ ] Any respelling spelled for the nasal checker rather than the ear is named in the corpus header
[ ] seed.json not edited, not checked out, not rewritten

SHEETS AND ART
[ ] 4 to 5 sheets, each layer 'deep' with a `contains` list
[ ] Sheets hold only teach / table / letterGrid sections
[ ] EVERY sheet is reached from at least one mission via `sheetId`
[ ] Image prompt file: one prompt per act, each with the FULL save path under it
[ ] Each prompt repeats the whole STYLE block and stands alone
[ ] No lettering, no close-up faces, no caption-dependent image
[ ] lessonImages.ts updated ONLY after the jpg files exist

DONE
[ ] pnpm exec tsc --noEmit clean for scripts/data/b1/<slug>-*
[ ] validateLesson 0, validateDensity 0, validateItem 0 — reported verbatim
[ ] No unsurfaced term, no >3-chip section, no unlinked sheet, no named id outside itemIds
[ ] Header comment: act plan, reframe, OWNS/QUOTES/LEAVES, house decisions, open questions
[ ] Preview JSON regenerated and the lesson seen on the device
```

---

## 11. Where the four lessons disagree with the standards docs

Read this before you treat a standards doc as binding.

**11.0 The old "no slot over 40% lesson-wide" rule was unreachable and has been
replaced.** Most checks in these lessons are two-option, and a two-option check
can only answer in slot 0 or 1, so slot 2 is fed only by three-option items.
Even a perfectly spread b1.03 lands at 47.7%. The rule was never met by any
lesson: measured on 2026-09-24, b1.09 sat at 75% on one slot across its binary
checks with a run of nineteen identical answers, and b1.10 at 72% with a run of
13. All fourteen were rebalanced by permuting each item's options and its
`correct` index together, which moves the answer without touching a word of
content, and the rule is now stated per option-count class and held by a test.

**11.1 `B1-PILOT-BRIEF.md` says "24 sections is the measured A2 shape and 30 is the
ceiling".** Superseded by `RICH-LESSON-STANDARD.md` and by the builds: 76 to 91. Ignore
the ceiling.

**11.2 The pilot brief says "one `tapTable` in the flow at most".** All four lessons
break it: b1.02 has 2, b1.03 and b1.04 have 3, b1.01 has 7. b1.01's open question 2 and
b1.03's open question 4 both flag this and propose "one per act" for a 76-mission
lesson. **Unresolved.** Author to three per lesson, one per act, and raise it in your
own open questions.

**11.3 `RICH-LESSON-STANDARD.md` says "the largest shipped lesson has 32 missions".**
Stale. The largest is now b1.01 at 91.

**11.4 The rich standard says "8 to 12 rounds of 8 questions".** Built: 10 and 11 only.
Treat 10 as the floor.

**11.5 b1.01's header claims "TOTAL 85 missions" and its act plan lists
6+7+7+8+6+6+6+7+7+7+8+10 = 85.** The file actually holds **91**, in acts of
6,7,7,9,7,7,6,8,8,8,8,10. The header drifted from the build. Keep yours accurate; it is
the first thing a reviewer reads.

**11.6 b1.01 shipped four reference sheets with zero `sheetId` links.** The rich
standard says sheets exist "so nothing a learner needs to look up is lost in 100
missions", and in b1.01 all four are unreachable. b1.02 to b1.04 fixed it. This is the
one structural defect in the finished set.

**11.7 b1.02's `a10-parler` names 12 item ids that are not in `b1.02.LESSON.itemIds`**
(they are b1.01 corpus rows). `tranche()` filters against `itemIds`, so those are named
but never released, and `validateDensity`'s `item-resolution` rule flags them when run
against the lesson's own id set. Not a crash; still an inconsistency. Put every id a
section names into `ITEM_IDS`.

**11.8 The rich standard says B1 id ranges are `fr.b1.recits-au-passe.001-099` and
`.401-.799` for b1.01 and that "the other pilot lessons keep their ranges until they
are rebuilt".** They have all been rebuilt, and the live allocation is the table in
section 1.2. Use that.

**11.9 `B1-C2-BUILD-SEQUENCE.md` Phase 0 item 3 says the bubble punctuation fix is
coming.** It has not landed. Keep writing bubbles without spaced `?` and `!`.

**11.10 `coach-fr-FR` does not exist.** All four lessons point at it and all four raise
it as an open question. Keep pointing at it and keep raising it.
