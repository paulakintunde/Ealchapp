# b2.24 « Lire de façon critique » : chapter opener artwork

Eleven images, one per act, shown on the chapter card the pager draws before each
act’s first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/lecture-critique/`
- **Filenames, exactly:** `act01.jpg` … `act11.jpg` (the lesson already points at
  `lessons/lecture-critique/actNN.jpg`, so a different name renders nothing).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in
  `ealch-v2/src/content/lessonImages.ts`, with alt text. `require()` resolves
  statically, so a ref registered before its file exists breaks the bundle. Make
  the files first, then register them. This file does NOT touch lessonImages.ts.
- Paul makes these himself in ChatGPT (B2 build log, wave 0, item 6). Every prompt
  below stands alone; the house style block is repeated in full in each one.
- **No lettering of any kind** in any image, no close-up faces, nothing that needs a
  caption. Text is drawn as soft grey horizontal bars; a headline is one thicker
  bar; quotation marks, where shown, are plain rounded shapes, never characters.
- **The single visual metaphor is THE MAGNIFYING GLASS.** b1.37 lit the page with a
  reader’s lamp; here a round glass is held over a text already understood and finds
  what holds it up, or does not: the small print, the hidden stones, the real bus
  stop under the glossy brochure. Conceptual images (acts 2, 3, 5, 7, 8) alternate
  with quiet human scenes (acts 1, 4, 6, 9, 10, 11).

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, repeated at the end of every prompt below:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 : Le titre affirme · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lecture-critique/act01.jpg`

A quiet office scene about a headline that promises more than it proves. A small meeting room seen from the side at mid distance, morning, six seated colleagues shown small and calm around a pale table with coffee cups. One figure holds up a phone; above it, drawn large as if projected into the air, a wordless article: one very thick slate-blue bar at the top, and many thin grey bars below. A round magnifying glass held by the figure at the head of the table hovers over the lower bars, and inside the glass three of the thin bars carry small terracotta underlines, while the big top bar outside the glass looks hollow and light. The subject is a loud top bar and a glass that finds the small print. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 : La thèse · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lecture-critique/act02.jpg`

A conceptual illustration about finding the real claim after a long concession. A long wordless column of grey text bars runs down a cream page. Near the top, several bars are drawn in soft sage, calm and slightly faded, like points being granted. Two thirds of the way down, one short thick ochre bar stands out, and a single curved arrow bends from the sage block toward it, like a road turning. A simple wordless thermometer shape rests beside the page, intact. The subject is the one bar where the text turns. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 : Preuve ou affirmation · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lecture-critique/act03.jpg`

A conceptual illustration about weighing evidence. A simple wooden beam rests on a narrow pivot on a cream ground, balanced like a see-saw. On one end sits a large hollow speech-bubble shape, light and airy, drawn in pale slate blue with nothing inside. On the other end sit three small solid blocks, terracotta, ochre and sage, stacked neatly like weights, and that end sits lower. A round magnifying glass leans against the pivot. In the background, a few small trees of a city park. The subject is a big empty claim outweighed by three small solid pieces. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 : Ce que le texte suppose · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lecture-critique/act04.jpg`

A quiet street scene about the unspoken idea beneath an argument. A narrow pedestrian street in a small Swiss old town, cobbles, a few shop fronts with blank awnings, one shutter down. In the foreground an older man writes a letter at a café table. Under the street, drawn as if the ground were cut away in cross-section, three pale stones hold the street up, each marked only by a simple shape: a small car outline, a clock, and two diverging arrows. A soft ochre glow lights these hidden stones. The subject is a visible street resting on three hidden stones. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 : La distance de l’auteur · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lecture-critique/act05.jpg`

A conceptual illustration about a journalist keeping a distance from what they report. On the left, a small figure at a desk writes on a wordless page. On the right, far across the cream space, a municipal swimming pool building under scaffolding, with a large blank price tag hanging from it. Between them runs a long dotted slate-blue line, and along it float three soft shapes: two large rounded comma shapes like empty quotation marks with no letters, a small curl, and a thin veil of pale sage. The subject is the measured space between the writer and the claim. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 : Le ton et l’ironie · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lecture-critique/act06.jpg`

A gentle scene about saying the opposite of what you mean. A young woman sits at a kitchen table at night in front of a laptop whose screen shows only a loop of identical empty form boxes. She has a small, patient, deadpan smile and holds a limp party blower. A cake with a single unlit candle sits beside the laptop, untouched. Through the window, the counter window of a town hall with its blind pulled down. The subject is a celebration that is clearly not a celebration. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 : À qui ça profite · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lecture-critique/act07.jpg`

A conceptual illustration about two texts on the same plan. Two wordless sheets lie side by side on a cream table. The left sheet is glossy, framed by a bright ochre border, with a few rounded bars and a simple drawing of a shiny new bus. The right sheet is plain, with more grey bars and a small drawing of an empty rural bus stop beside a village. A round magnifying glass rests on the edge of the glossy sheet, and inside its lens the same empty bus stop shows through. A small stack of coins sits beside the glossy sheet. The subject is a bright surface and what lies under it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 : Fait, opinion, interprétation · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lecture-critique/act08.jpg`

A conceptual illustration about sorting what an advert says. A cheerful wordless mattress poster on the left: a soft cloud-shaped mattress, stars, one big solid ochre block. On the right, three open wooden trays in sage, slate blue and terracotta, each receiving a few small paper slips that fly from the poster, each slip a single grey bar. At the very bottom of the poster, two tiny faint bars are lit by a round magnifying glass. The subject is one bright poster sorted into three trays, and its small print found. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 : Deux textes, un sujet · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lecture-critique/act09.jpg`

A city scene about comparing two views of the same thing. A city bus crosses the middle of the frame on a wide boulevard. On the left pavement, a figure in a jacket reads a thick bound report, calm; on the right pavement, a cyclist with a helmet reads from a phone and gestures with one hand. Above each figure floats a wordless page of grey bars, and both pages share one identical bright ochre bar at the same height, while their lower bars bend in opposite directions. The subject is one shared line and two different endings. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 : À l’examen · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lecture-critique/act10.jpg`

A quiet exam-room scene about proving an answer with the text. A candidate sits alone at a desk in a bright exam hall, seen at mid distance, rows of empty desks behind. On the desk lie a wordless document of grey bars and an answer sheet with small empty boxes. The candidate draws a thin terracotta line from one short bar in the document to one box on the answer sheet, like a thread connecting them. A wall clock with no numerals hangs in the background. The subject is one precise line from the text to the answer. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 : Ta réponse critique · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lecture-critique/act11.jpg`

A warm evening scene about writing a fair critical response. A figure sits at a desk by a window at dusk, writing on a short wordless page with a few neat bars. Beside it, a longer printed page of many bars lies under a round magnifying glass that lights three short bars with small ochre underlines. A few coins and a card-shaped rectangle rest next to the long page. Outside the window, rooftops of a French city in soft slate blue. The subject is a long text read closely and a short answer written with care. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
