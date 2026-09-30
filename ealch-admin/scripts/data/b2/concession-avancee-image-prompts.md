# b2.16 « La concession » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/concession-avancee/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/concession-avancee/actNN.jpg`, so a different name renders nothing).
  The folder is `concession-avancee`, NOT `concession` (that is lesson 32 in B1).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in
  `ealch-v2/src/content/lessonImages.ts`, with alt text. `require()` resolves
  statically, so a ref registered before its file exists breaks the bundle.
  Make the files first, then register them. This file does NOT touch
  lessonImages.ts.
- **Paul makes these himself in ChatGPT** (B2-BUILD-LOG, wave 0 item 6). Every
  prompt below stands alone: paste one in and it produces that act's picture
  without any other context. The house style block is repeated in full in each
  prompt on purpose.
- **No lettering of any kind** in any image, no close-up faces, and nothing that
  needs a caption to be understood. Tickets, notes, papers, screens and the
  on-air lamp appear: every one of them is BLANK.
- **The single visual metaphor is LE POINT ACCORDÉ**, a point granted without
  giving up the game: an open palm offered while the speaker holds the floor
  (acts 1 and 10), a small warm ochre token received in different ways (acts 2
  and 12), and figures who acknowledge something and still keep their course
  (acts 5, 6 and 7). Conceptual images (acts 2, 9, 11) alternate with quiet
  human scenes so twelve pictures do not read as twelve diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Accorder un point · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concession-avancee/act01.jpg`

A quiet public scene about granting a point without giving ground. Inside a simple community hall with pale cream walls and rows of folding chairs, a figure in a dusty slate blue jacket stands at a small microphone stand, turned slightly towards a seated older man in a terracotta cardigan, one open palm extended towards him as if offering something, while the other hand rests firmly on the lectern. At a side table, a clerk bends over a blank notebook. Two tall windows show the pale grey roofs of an old town. The subject is one speaker who concedes with a gesture and still holds the floor. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · Un point, cinq formes · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concession-avancee/act02.jpg`

A conceptual illustration about one thing taking five different shapes. On a long bone-coloured table, five different small trays sit in a neat row: a round sage green dish, a square slate blue tray, a shallow terracotta bowl, a narrow ochre box and a flat cream plate. On each one rests the same small warm ochre token, identical in size and colour, but each tray holds it in its own way. Soft shadows fall to the right. The subject is one identical token received five different ways. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Bien que, quoique, encore que · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concession-avancee/act03.jpg`

A calm office scene about writing with careful reservations. In a bright office with a large window overlooking a pale blue lake and distant mountains, a woman in a sage green blouse sits at a desk writing on a sheet of paper, adding a small note in the margin; the paper and the note are blank. A colleague in a slate blue sweater stands behind her, leaning in slightly to read over her shoulder, one hand on the back of her chair. A cup of tea steams beside a neat stack of blank folders. The subject is a report being written slowly, with room kept for a reservation. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · Quoi que, où que, qui que · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concession-avancee/act04.jpg`

A tender domestic scene about preparing for every possibility. In a warm bedroom in the late evening, an open suitcase lies on a bed with a patterned terracotta cover. A mother in an ochre headscarf tucks a small folded blank note between neatly packed clothes, while her daughter in a slate blue hoodie holds a folded coat and watches her. Through the window, far away, a tiny aeroplane crosses a dusk sky. The subject is someone packing for a journey whose every turn is still unknown. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Si riche qu'il soit · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concession-avancee/act05.jpg`

A light-filled scene about admitting a quality and still saying no. Two young adults stand in an empty two-room flat with tall windows and golden sunlight pouring onto a wooden floor. One, in a terracotta coat, looks up at the high bright window with admiration; the other, in a sage green scarf, holds a small blank sheet of paper and gently shakes her head. A tiny kitchen corner with a new white boiler is visible through a doorway. The subject is a place that is undeniably bright and still not the right choice. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · Même si, toujours l'indicatif · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concession-avancee/act06.jpg`

A quiet travel scene about choosing the slower way on purpose. A figure in a slate blue raincoat stands on a station platform beside a long sage green train, holding a small blank ticket and a paper coffee cup. High in the pale sky, far above the station roof, a small aeroplane leaves a faint white trail. The rails run long and straight into the distance towards soft hills. The subject is someone who knows the train is slower and takes it anyway. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · Quand bien même · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concession-avancee/act07.jpg`

A calm, determined scene about holding firm even in the most extreme case. In a small hospital break room with a window onto a grey city evening, a man in a terracotta cardigan stands by the window with his arms folded and a steady expression, while a colleague in pale sage scrubs sits at a round table with two mugs, leaning forward as if suggesting a softer path. Outside, heavy clouds gather over the rooftops but do not reach the room. The subject is one person whose position would not move whatever happened outside. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Avoir beau, loin de, au lieu de · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concession-avancee/act08.jpg`

A gently comic domestic scene about effort that changes nothing. At a kitchen table, a woman in an ochre sweater holds a phone to her ear with one hand and presses a button on a small internet box with the other; the little lights on the box show a single dull terracotta dot. Beside her, a laptop screen is blank and grey, and three small crumpled blank sticky notes lie on the table. A cat sleeps on a chair, unbothered. The subject is someone trying again and again while nothing responds. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Malgré, en dépit de · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concession-avancee/act09.jpg`

A conceptual illustration about turning something long into something compact. On a cream field, a long loose string of small slate blue and sage green beads winds across the left side of the image like a meandering sentence. On the right, the same beads have been gathered and pressed into one neat, solid ochre block that sits on its own, with a thin terracotta thread still connecting it back to the loose string. The subject is a long chain condensed into a single compact object. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Pourtant, toutefois · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concession-avancee/act10.jpg`

A warm scene about a calm radio debate. Inside a small radio studio with soft sound panels on the walls, three figures sit around a round table, each with a microphone on a stand: one in slate blue listens with a nod, one in terracotta raises an open hand as if granting a point, and one in sage green leans forward to answer. A red on-air lamp above the door glows softly, with no lettering on it. The subject is people taking turns, each acknowledging the other before replying. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Concéder ou opposer · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concession-avancee/act11.jpg`

A conceptual illustration about two different kinds of contrast. The image is divided by a pale vertical gap. On the left, a small figure in a slate blue coat steps easily over a low ochre stone wall that lies across a path, continuing forward on the other side. On the right, two houses stand side by side on the same line, one tall and terracotta, one small and sage green, simply placed next to each other with nothing between them. The subject is an obstacle crossed on one side and two things compared on the other. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 · Ton essai · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concession-avancee/act12.jpg`

A focused scene about writing a balanced argument. At a wooden desk by a window with a view over city rooftops, a figure in a sage green jumper writes on a sheet of paper with a pen; the page and a folded newspaper beside it are blank. On the desk, a small balance scale holds one warm ochre token on each pan, perfectly level. A lamp casts a soft circle of warm light over the paper. The subject is someone weighing the other side's best argument before answering it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
