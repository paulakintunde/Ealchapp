# c1.11 « Rapports et comptes rendus » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act’s first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/rapports-comptes-rendus/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/rapports-comptes-rendus/actNN.jpg`, so a different name renders nothing).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in
  `ealch-v2/src/content/lessonImages.ts`, with alt text. `require()` resolves
  statically, so a ref registered before its file exists breaks the bundle.
  Make the files first, then register them. This file does NOT touch
  lessonImages.ts.
- **Paul makes these himself in ChatGPT** (B2-BUILD-LOG, wave 0 item 6). Every
  prompt below stands alone: paste one in and it produces that act's picture
  without any other context. The house style block is repeated in full in each
  prompt on purpose. Never Fal.
- **No lettering of any kind** in any image, no close-up faces (people are shown
  small, from behind or at a distance), and nothing that needs a caption to be
  understood. Every sheet, screen, tag, register and notebook is BLANK.
- **The single visual metaphor is THE ABSENT READER.** The reframe says « Écris
  pour qui n’était pas là » : every document in the lesson leaves a room for
  someone who was not in it. The busy reader who leaves in act 1, the house of
  six rooms in act 2, threads back to the source in act 3, the canteen nobody can
  reach in act 4, one scale for three boxes in act 5, the sheet slid across the
  table in act 6, the single glowing page in act 7, five equal voices gathered in
  act 8, the bound register in act 9, the ribbons narrowed to three in act 10,
  the lamp and magnifying glass in act 11, and the empty chair waiting for the
  reader in act 12. Conceptual images (acts 2, 3, 5, 7, 10) alternate with quiet
  human scenes so twelve pictures do not read as twelve diagrams.
- Each prompt's scene ends with « The subject is … »: that sentence is the alt
  text when the image is registered.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs` (as repeated in
`../b2/lecture-critique-image-prompts.md`), and repeated in full at the end of
every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Le rapport qu’on ne lit pas · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/rapports-comptes-rendus/act01.jpg`

A quiet office scene about a document that loses its reader. A wide wooden desk seen from the side at mid distance, by a tall window at dusk. A woman shown small, her coat already on, stands up from the desk and turns towards the open door, while on the desk a long paper scroll unrolls off the edge and down to the floor in loose loops, every sheet blank. A wall clock without numbers hangs above the door. The subject is a long scroll of blank pages unrolling off a desk while a busy reader leaves the room. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · L’architecture d’un rapport · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/rapports-comptes-rendus/act02.jpg`

A conceptual illustration about a document built like a house. On a cream field stands a simple cut-away model of a small two-storey building, seen straight on, its six rooms stacked and side by side like boxes: each room a different flat colour, dusty slate blue, terracotta, warm ochre, sage green, bone and a pale blue, each empty and tidy. A small cellar under the house holds neat stacks of blank folders. The subject is a small house cut open to show six tidy rooms and a cellar of folders. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Le constat · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/rapports-comptes-rendus/act03.jpg`

A conceptual illustration about checking each fact at its source. Five small terracotta pebbles lie in a row on a cream table, and from each pebble a thin dusty slate blue thread runs back across the table to a different small object at the far edge: a till receipt roll, a clipboard, a kitchen scale, a stack of blank survey cards, a ledger. One more pebble at the end of the row has no thread and sits slightly apart, paler than the others. The subject is a row of pebbles each tied by a thread to where it came from, except one. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · Du symptôme aux causes · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/rapports-comptes-rendus/act04.jpg`

A quiet scene about tracing a problem back to its cause. A large company canteen seen from above at a gentle angle, rows of tables mostly empty under warm light, only a few figures shown small eating at one end. Through a wide glass wall at the back, a corridor shows a group of workers shown small arriving with their bags, walking past the closed shutters of the serving counter. A wall clock without numbers hangs above the shutters. The subject is an empty canteen with closed shutters while workers arrive too late to eat. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Les options et les critères · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/rapports-comptes-rendus/act05.jpg`

A conceptual illustration about weighing three choices on the same scale. A large old-fashioned balance scale in warm ochre stands at the centre of a cream field. Beside it, three small closed boxes of different colours, terracotta, dusty slate blue and sage green, wait in a row on a low shelf, and one of them is already on the scale's pan. Four small identical brass weights sit neatly in a line on the other pan. The subject is a balance scale weighing three boxes one after another against the same four weights. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · Recommander · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/rapports-comptes-rendus/act06.jpg`

A quiet scene about proposing rather than ordering. A meeting table seen from the side, a woman director shown small seated at the head with a pen in her hand. Across from her, a younger colleague shown small slides a single sheet of paper towards her across the table with an open, upturned hand, leaving it there for her to take. Behind them, a window shows a calm grey sky. The sheet is blank. The subject is one person sliding a sheet of paper across a table towards the person who will decide. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · La synthèse en tête · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/rapports-comptes-rendus/act07.jpg`

A conceptual illustration about the one page that matters. A thick stack of blank paper in pale bone sits on a cream field, slightly fanned at the edges. Lifted just above the top of the stack, a single sheet in warm ochre floats and glows softly, as if it carried the weight of all the others below. A pair of reading glasses rests folded beside the stack. The subject is a thick stack of pages with a single glowing sheet lifted above it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Le compte rendu · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/rapports-comptes-rendus/act08.jpg`

A quiet scene about recording a meeting without taking sides. A round table seen from above at a gentle angle, five figures shown small seated around it, each with a small rounded speech shape above them in a different colour, all of the same size, empty inside. A sixth figure, slightly apart at a side desk, writes in a notebook, and the five coloured shapes drift in a line towards the notebook, all kept the same size. The subject is a secretary gathering five equal voices from a round table into one notebook. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Le procès-verbal · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/rapports-comptes-rendus/act09.jpg`

A quiet scene about the official record of a meeting. A long boardroom table seen from the end, chairs pushed in, the meeting over, warm evening light. At the near end of the table lies an open bound register with blank pages, a fountain pen beside it and a small round ink stamp pad. On a shelf behind, several identical bound registers stand in a neat row, their spines plain and blank. The subject is an open bound register with a pen and a stamp on an empty boardroom table. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Le relevé de décisions · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/rapports-comptes-rendus/act10.jpg`

A conceptual illustration about keeping only what was decided. On a cream field, a tangle of loose ribbons in many muted colours spills from the left side, curling and crossing. As they move to the right they pass through a small slate blue ring, and only three straight ribbons come out on the other side, each ending in a small blank terracotta tag pinned to a cork strip. The subject is a tangle of ribbons passing through a ring and coming out as three straight tagged ribbons. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Relire en rapporteur · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/rapports-comptes-rendus/act11.jpg`

A quiet scene about a careful last reading. A desk lamp casts a warm circle of light on a few spread pages, all blank, and a figure shown from behind and at a distance leans over them holding a magnifying glass above one page. A pencil lies beside the pages, and two small blank sticky notes in sage green mark the edges of the papers. The rest of the room is in soft shadow. The subject is a person reading spread pages under a lamp with a magnifying glass before sending them. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 · Ton rapport · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/rapports-comptes-rendus/act12.jpg`

A quiet scene about writing for someone who is not in the room. A small desk by a window with a view of a railway station platform where a short shuttle bus waits, shown small and far away. On the desk, an open laptop with a blank screen, a single printed sheet with blank lines, and a closed envelope ready to send. An empty chair stands on the other side of the desk, facing the writer's chair. The subject is a desk with a fact sheet and an envelope, and an empty chair waiting for the reader. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
