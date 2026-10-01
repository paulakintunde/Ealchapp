# c1.08 « Persuader » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act’s first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/persuader/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/persuader/actNN.jpg`, so a different name renders nothing).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in
  `ealch-v2/src/content/lessonImages.ts`, with alt text. `require()` resolves
  statically, so a ref registered before its file exists breaks the bundle.
  Generate the files first, then register them. This file does NOT touch
  lessonImages.ts.
- Paul makes these himself in ChatGPT. Every prompt below stands alone: paste one
  and it produces that act's picture without any other context. The house style
  block is repeated in full in each prompt on purpose. The « The subject is »
  sentence of each prompt becomes its alt text.
- **No lettering of any kind** in any image, no close-up faces, and nothing that
  needs a caption to be understood. Pages and registers are BLANK or drawn as grey
  bars; no question marks or other glyphs.
- **The single visual metaphor is THE LAMP.** Naming a persuasive move is turning a
  lamp on it: a solid thing keeps its shape and casts a clear shadow, a trick goes
  thin or shows itself (the star with no shadow, the shadow under the curtain).
  Every picture holds one lamp or one pool of light. Conceptual images (acts 2, 3,
  5, 6, 7, 9, 10, 11) alternate with quiet human scenes (acts 1, 4, 8, 12) so twelve
  pictures do not read as twelve diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs` (as repeated in `../b2/lecture-critique-image-prompts.md`), repeated at the end of every prompt below:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 : Le discours qui marche trop bien · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/persuader/act01.jpg`

A quiet scene about a speech that moves a whole room. A community hall seen from the back at mid distance: rows of small seated figures, their hands raised in applause as small rounded shapes, a speaker far away at a pale wooden lectern under warm stage light. In the front corner, close to the viewer but shown small and from the side, a figure sits at a little desk with a pen, and a single desk lamp throws a clear circle of light onto a blank sheet of paper. Everything outside the circle of the lamp is softer and dimmer. The subject is a crowd applauding a speaker and one small lamp lighting a blank page. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 : L’ethos · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/persuader/act02.jpg`

A conceptual illustration about a speaker who says where she speaks from. A simple pale wooden lectern stands in the middle of a cream space, lit from above by one hanging lamp with a slate blue shade. On the lectern lie three plain objects, neatly spaced: a small garden trowel with a terracotta handle, a single house key on a ring, and an open notebook whose two pages are blank. Each object casts a short, clear shadow. Nothing else is in the frame. The subject is a lamp-lit lectern holding a garden trowel, a house key and an open blank notebook. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 : Le logos · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/persuader/act03.jpg`

A conceptual illustration about reasons that can be checked. A sturdy workbench seen from the front, lit by an adjustable desk lamp. On the bench, a repaired toaster with a small screwdriver beside it, a table lamp with its base open, and a large open register whose pages are drawn only as neat grey bars and small tick marks in columns. A round magnifying glass rests on the register. The lamp light falls on the open pages. The subject is a workbench with a repaired toaster and an open register under a desk lamp. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 : Le pathos · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/persuader/act04.jpg`

A quiet scene about an emotion and the fact behind it. An indoor swimming pool seen from the side at a distance, tall windows letting in soft warm light, the water drawn in calm dusty slate blue bands. At the edge of the big pool stands a very small child figure, arms close to the body, and beside it an adult figure kneels with one hand held out, both shown small and from the side. Reflections of the windows lie on the water. The rest of the hall is empty and calm. The subject is a small child at the edge of a big pool with an adult kneeling beside it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 : L’autorité et l’expertise · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/persuader/act05.jpg`

A conceptual illustration about prestige and expertise under the same light. On a cream floor stand two low pedestals side by side, lit by one lamp hanging between them. On the left pedestal, a large glittering ochre star shape, shiny and decorative, which casts almost no shadow. On the right pedestal, a neat stack of plain folders with a measuring tape and a small notebook on top, which casts a solid, well-defined shadow. The space around them is empty. The subject is a glittering star with almost no shadow beside a stack of plain folders with a solid shadow. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 : L’analogie · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/persuader/act06.jpg`

A conceptual illustration about the one feature two things share. On a pale table, two objects stand side by side under one warm lamp: on the left, a worn leather shoe on a cobbler’s iron last with a small hammer beside it; on the right, a table lamp lying open with a screwdriver and a new cable. A single thin terracotta thread runs from the shoe to the lamp, joining them at one point only. Behind them, a cream wall and nothing else. The subject is a shoe on a cobbler’s last and a lamp being repaired, joined by one thin thread. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 : Les mots qui cadrent · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/persuader/act07.jpg`

A conceptual illustration about one fact lit in two colours. On a table in the middle of a cream room stands a small model of a covered bicycle shelter with tiny bicycles inside. Two lamps lean toward it from either side: the lamp on the left has a sage green shade and bathes its side of the model in green light, the lamp on the right has a terracotta shade and bathes the other side in warm red light. The model is the same object in both lights. The subject is one small bike shelter model lit by two lamps of different colours. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 : La question rhétorique · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/persuader/act08.jpg`

A quiet scene about a question that leaves room to judge. A library reading room on a rainy afternoon, tall windows streaked with soft slate blue rain lines. A few small figures read at long tables under green-shaded lamps, seen from the side at a distance. In the foreground, one wooden chair stands empty at the end of a table, and the lamp above it is lit, its circle of light falling on the empty seat and on a closed book waiting there. The subject is an empty chair under a lit lamp in a library on a rainy afternoon. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 : Anaphore et gradation · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/persuader/act09.jpg`

A conceptual illustration about repetition and rising steps. A garden path runs from left to right across a cream ground. Over the first half of the path stand three identical sage green garden arches in a row, evenly spaced, exactly the same shape. Along the second half, a row of plants grows step by step: a seed in the soil, a small sprout, a young plant, a bush, and finally a small tree, each clearly larger than the one before. Warm light falls evenly on the whole scene. The subject is three identical garden arches and a row of plants growing from a seed to a tree. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 : La prétérition · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/persuader/act10.jpg`

A conceptual illustration about saying something while claiming to hide it. A tall slate blue curtain hangs in a cream room, lit by one lamp from the side. A hand reaches in from the edge of the frame and draws the curtain closed, while from beneath the hem of the curtain a long, thin terracotta shadow of an object slips out across the floor toward the viewer. The object itself stays hidden; only its shadow escapes. The subject is a hand drawing a curtain closed while a long shadow slips out beneath it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 : L’objection prévenue · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/persuader/act11.jpg`

A conceptual illustration about answering the strongest objection. A simple wooden game board seen from slightly above, with rounded pieces in two colours, sage and terracotta, and no symbols or markings on the squares. A hand reaches in from one side and carefully places the opponent’s tallest, strongest piece in front of its own pieces, in full view, before making any move. A lamp above lights the board evenly. The subject is a hand placing the opponent’s strongest piece in plain view before its own move. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 : Ton plaidoyer · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/persuader/act12.jpg`

A quiet scene about writing a fair plea. A writing desk by a window in the evening, seen from behind and slightly to the side: a calm figure, shown small, writes on a sheet of paper lit by a warm desk lamp. Through the window, in the soft dusk, a small town spreads out: a little train station with a covered bicycle shelter, a garden of raised beds where a car park used to be, and the lit windows of a library. The lamp and the town lights echo each other. The subject is a person writing at a lamp-lit desk, with the station, the garden and the library seen through the window. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
