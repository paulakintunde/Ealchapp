# b2.01 « Le plus-que-parfait » : chapter opener artwork

Eleven images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/plus-que-parfait/`
- **Filenames, exactly:** `act01.jpg` … `act11.jpg` (the lesson already points at
  `lessons/plus-que-parfait/actNN.jpg`, so a different name renders nothing).
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
  needs a caption to be understood. Letters, notebooks, tickets and clocks appear:
  every one of them is BLANK.
- **The single visual metaphor is LE REPÈRE**, the marker in the past from which
  the plus-que-parfait is measured: a terracotta pin planted on a line (acts 5, 10,
  11) and, in the human scenes, a moment of arrival where something had already
  happened (the film under way in act 1, the rain just over in act 6, the train
  already gone in act 7). Conceptual images (acts 2, 5, 10) alternate with quiet
  human scenes so eleven pictures do not read as eleven diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Le film avait commencé · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/plus-que-parfait/act01.jpg`

A quiet human scene about arriving after something has already begun. Seen from behind, two young adults in raincoats stand in the doorway of a dark cinema auditorium, one of them holding a folded umbrella dripping onto the carpet. Ahead of them, rows of seated silhouettes face a large glowing screen that shows only soft abstract blocks of ochre and slate light, clearly already mid-film. A thin warm beam from the projector crosses the dark space above the seats. The subject is two late arrivals pausing at the threshold of something already under way. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · La forme · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/plus-que-parfait/act02.jpg`

A conceptual illustration about two pieces that fit together. On a cream field, two rounded wooden blocks sit side by side on a low slate-blue shelf: the left block is terracotta and slightly worn at the edges, the right block is sage green and clean. A small ochre hinge joins them so they read as one object with two parts. A faint shadow of the left block, shifted slightly backwards, falls on the wall behind it. Everything else is empty cream space. The subject is one object made of two joined parts, the first one set a step back. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Les accords · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/plus-que-parfait/act03.jpg`

A quiet human scene in an attic. A woman in her thirties kneels on wooden floorboards beside an open tin box, lifting out a bundle of blank letters tied with a terracotta ribbon; beside the box lie a few faded blank photographs and a small empty ring case. A round attic window lets in a slanting ochre light that falls across the box. Old trunks and a rolled rug sit in soft shade at the edges. The subject is someone gently handling things that were written and kept long ago. No writing is visible on any paper. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · Les pronominaux · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/plus-que-parfait/act04.jpg`

A calm early-morning interior. Two young women in a small flat, seen at a distance: one stands at a mirror tying back her hair, the other sits on the edge of a bed holding a phone to her ear, both in soft pre-dawn blue light, with a window showing a pale ochre sky just beginning to lighten over rooftops. Two cups sit on a small table between them. The subject is two people who have each just got themselves ready, in the quiet before a big day. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Une ligne, trois temps · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/plus-que-parfait/act05.jpg`

A conceptual illustration about a single moment on a line. A long horizontal slate-blue line runs across a cream field. At its centre, a tall terracotta pin stands upright on the line, like a marker planted in the ground. To the left of the pin, behind it, a small group of three sage-green dots sits on the line, slightly faded. A soft ochre band wraps around the pin itself. To the right, a single bright terracotta dot waits a little further along the line. Everything else is empty cream space. The subject is one marker on a line, with things behind it, around it, and ahead of it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · Raconter · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/plus-que-parfait/act06.jpg`

A quiet celebratory scene seen from outside. The open courtyard of a house in Dakar in early evening: long tables with white cloths, strings of small warm lights overhead, a few guests in colourful clothes arriving through an arched gate, the ground still dark and glistening from rain that has just stopped, with a few puddles reflecting the lights. Potted plants and a folded umbrella lean against a wall. The subject is people arriving at a party after the rain had already ended. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · Déjà, pas encore, juste · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/plus-que-parfait/act07.jpg`

A quiet human scene on a railway platform. A single traveller with a small suitcase stands at the edge of an empty platform, seen from behind, looking down the tracks where the back of a slate-blue train is already small in the distance, curving away. A large round platform clock hangs overhead with plain hands and no numerals. Morning light falls in long ochre stripes across the platform. The subject is someone arriving just after the train has gone. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Il a dit qu'il avait fini · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/plus-que-parfait/act08.jpg`

A quiet office scene about passing news on. Three colleagues stand around a small high table by a window with coffee cups, one leaning in and speaking with an open hand while the other two listen, one of them turning slightly towards a fourth person arriving with a coat over her arm. Behind them, a wall board holds a few blank pinned cards and one blank folded letter. Soft grey daylight comes through the window. The subject is news being passed from one person to the next. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Si j'avais su · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/plus-que-parfait/act09.jpg`

A quiet, slightly wry scene of a moving day. A young woman sits on a sealed cardboard box on a wet pavement outside a building, chin in hand, looking at a sofa standing on the pavement under light rain, a small notebook open on her knee with blank pages. Other boxes are stacked beside the entrance door. A faint outline of a moving van, drawn only as a pale slate contour like a daydream, hovers where the van should have been. The subject is someone imagining what might have happened instead. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Les fausses pistes · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/plus-que-parfait/act10.jpg`

A conceptual illustration about paths that look alike. On a cream field, a short slate-blue path splits into three identical-looking branches. Two of the branches end abruptly in small sage-green hedges, and only one continues on to a terracotta pin standing upright at its end. A small magnifying glass rests at the fork, tilted towards the branches. Everything else is empty cream space. The subject is choosing the one path that really leads to the marker. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Raconter ce qui s'était passé · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/plus-que-parfait/act11.jpg`

A quiet human scene of writing a story. A person sits at a wooden desk by a window at dusk, writing by hand in an open notebook with blank lines, a cup of tea and an unprinted train ticket beside them. On the wall above the desk, a simple horizontal string runs across with a few small blank cards pegged to it at intervals, and one terracotta pin marks a point near the middle. Warm lamp light mixes with the blue evening outside. The subject is someone arranging a past day into a story around one moment. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
