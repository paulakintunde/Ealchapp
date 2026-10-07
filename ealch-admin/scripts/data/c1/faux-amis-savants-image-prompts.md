# c1.18 « Les faux amis savants » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act’s first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/faux-amis-savants/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/faux-amis-savants/actNN.jpg`, so a different name renders nothing).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in
  `ealch-v2/src/content/lessonImages.ts`, with alt text. `require()` resolves
  statically, so a ref registered before its file exists breaks the bundle.
  Generate the files first, then register them. This file does NOT touch
  lessonImages.ts.
- Paul makes these himself in ChatGPT. Every prompt below stands alone: paste one
  and it produces that act’s picture without any other context. The house style
  block is repeated in full in each prompt on purpose. The « The subject is »
  sentence of each prompt becomes its alt text.
- **No lettering of any kind** in any image, no close-up faces, and nothing that
  needs a caption to be understood. Papers, notes, maps and calendars are BLANK or
  drawn as grey bars; no symbols, no question marks.
- **The single visual metaphor is LE SOSIE ET LA LOUPE.** A learned false friend is a
  lookalike: two near-identical things that differ by one decisive feature, examined
  under a magnifying glass, sometimes lit by two lamps (the authorities, which do not
  always agree). Acts 1 and 12 share the same desk, report and lens, so the lesson
  opens and closes on the same place. Conceptual images (acts 2, 3, 4, 5, 7, 8, 11)
  alternate with quiet human scenes (acts 1, 6, 9, 10, 12) so twelve pictures do not
  read as twelve diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs` (as repeated in `../b2/lecture-critique-image-prompts.md`), repeated at the end of every prompt below:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 : Le mot savant qui trompe · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/faux-amis-savants/act01.jpg`

A quiet office scene about a word that looks familiar and hides a difference. A small open-plan office at mid distance in the morning: a desk with two screens, a cooling cup, a printed report lying open. On the report, a round magnifying glass rests over one blank grey bar of text, and under the lens the bar shows a small terracotta notch that the bars outside the lens do not have. A seated figure, shown small and from behind, leans towards the lens. A window shows a pale city roofline. The subject is a reviser leaning over a report where a magnifying glass reveals one notched line. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 : Initier · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/faux-amis-savants/act02.jpg`

A conceptual illustration about two ways of beginning. Two identical small wooden boats sit side by side on a calm sage-green lake. The left boat is being pushed off from a jetty by a single terracotta arm, a short ochre wake behind it. In the right boat, an adult figure shown small and from the side guides a child's hands on an oar, the boat still at rest. A magnifying glass floats in the cream sky above the two boats. The subject is two identical boats, one launched from a jetty, one where an adult teaches a child to row. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 : Opportunité · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/faux-amis-savants/act03.jpg`

A conceptual illustration about seizing the right moment. A door stands ajar in a long cream wall, warm ochre light spilling through the gap onto the floor. Beside it, an identical door is closed, with a small slate-blue clock hanging above it. A single small figure, seen from behind, steps towards the open door. The subject is two identical doors, one open with light spilling out, one closed under a clock. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 : Alternative · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/faux-amis-savants/act04.jpg`

A conceptual illustration about a choice between two. A narrow path of pale stones runs from the bottom of the frame and splits cleanly into exactly two branches, one leading to a terracotta hill, one to a slate-blue lake. Off to the side, a separate signpost with three blank arms stands alone on the grass, plainly not part of the fork. The subject is a path that splits into exactly two branches beside a lone signpost with three blank arms. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 : Impacter · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/faux-amis-savants/act05.jpg`

A conceptual illustration about naming an effect precisely. A row of five identical small shopfronts with striped awnings lines a street under repair, a low barrier and a pile of paving stones in front. A pair of identical lamps lights the scene from two sides: the left lamp casts a single soft wide shadow, the right lamp casts a sharp clear shadow onto two of the shopfronts only. The subject is a row of shops beside roadworks, lit by two lamps, one casting a vague shadow, one a sharp shadow on two shops. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 : Académique, versatile · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/faux-amis-savants/act06.jpg`

A quiet scene about two lookalike adjectives. Two identical wooden desks stand side by side in a bright room. On the left desk, a single classical column ornament and a stiff stack of bound volumes. On the right desk, one multi-purpose kitchen robot with several attachments laid out neatly. A small figure, shown from behind, stands between them with a magnifying glass held low. The subject is two identical desks, one with a classical column and bound books, one with a multi-purpose kitchen robot. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 : Juridiction · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/faux-amis-savants/act07.jpg`

A conceptual illustration about who judges and who decides. On the left, a small courthouse with columns and a set of balance scales above its door, drawn in slate blue. On the right, an identical-sized map of a region divided into three soft ochre provinces with a small governmental building in one of them. A thin terracotta line separates the two halves of the image. The subject is a small courthouse with scales beside a map divided into provinces. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 : Éligible · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/faux-amis-savants/act08.jpg`

A conceptual illustration about two authorities disagreeing. A single envelope lies on a cream table between two identical desk lamps. The left lamp is slate blue and lights the envelope with a cool circle; the right lamp is warm ochre and lights it with a warm circle; where the two circles overlap, the envelope glows a soft sage. A map of an ocean with two coastlines is pinned faintly on the wall behind. The subject is one envelope lit by two differently coloured lamps whose light overlaps, before a map of two coastlines. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 : Digital ou numérique · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/faux-amis-savants/act09.jpg`

A quiet scene about fingers and data. A museum storeroom at mid distance: on the left, a photograph being slid under a flat scanner whose glass glows softly; on the right, an identical-sized panel by a door where a single fingertip touches a small round reader. Shelves of archive boxes recede in the background. No screens show any symbols. The subject is a scanner digitising a photograph beside a fingerprint reader by a storeroom door. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 : Faire sens, questionner · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/faux-amis-savants/act10.jpg`

A quiet scene about questioning a person and doubting a thing. A meeting table seen from above at an angle: on one side, a seated figure turns politely towards another seated figure, an open blank notebook between them; on the other side, a single sheet of paper with grey bars lies beneath a loose terracotta arc, like a raised eyebrow. A pot of sage-green plants sits at the centre. The subject is a meeting table where one person turns to question another beside a document under an arc of doubt. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 : Canceller, céduler, booker · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/faux-amis-savants/act11.jpg`

A conceptual illustration about moving from speech to writing. On the left, an old answering machine with a coiled cord gives off three soft curved sound waves in ochre. The waves travel to the right and settle as three neat blank grey bars on a clean sheet of paper held on a clipboard. A wall calendar with a blank grid hangs above. The subject is an answering machine whose sound waves become neat lines on a clipboard beneath a blank calendar. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 : Ta note de révision · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/faux-amis-savants/act12.jpg`

A quiet office scene that closes the lesson on the same report. The same small office desk as the first image, now seen from the side in late afternoon light: the report is closed, a short handwritten note shown only as grey bars lies on top of it, and the magnifying glass rests beside the note. Two small lamps, one slate blue and one ochre, stand at either end of the desk. The subject is a closed report with a short note on top, a magnifying glass and two lamps. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
