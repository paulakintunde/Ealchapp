# c1.19 « Les figures et leur effet » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/figures-effet/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/figures-effet/actNN.jpg`, so a different name renders nothing).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in
  `ealch-v2/src/content/lessonImages.ts`, with alt text. `require()` resolves
  statically, so a ref registered before its file exists breaks the bundle.
  Make the files first, then register them. This file does NOT touch
  lessonImages.ts.
- **Paul makes these himself in ChatGPT** (never Fal). Every prompt below stands
  alone: paste one in and it produces that act's picture without any other
  context. The house style block is repeated in full in each prompt on purpose.
  The « The subject is » sentence of each prompt becomes its alt text.
- **No lettering of any kind** in any image, no close-up faces, and nothing that
  needs a caption to be understood. Books, pages and sheets appear: every one of
  them is BLANK. No letters, no phonetic symbols, no musical notes drawn as glyphs.
- **The single visual metaphor is THE PRISM.** A figure is a prism held in the
  text: its name is the glass, its effect is the coloured band it throws. Act 1
  shows readers looking at the glass and not at the band; the conceptual images
  (acts 2, 3, 4, 5, 9, 11) each carry a small prism or the light it throws, and
  the quiet human scenes (acts 1, 6, 7, 8, 10, 12) show the effect itself, so
  twelve pictures do not read as twelve diagrams. Act 12 (« Le Dormeur du
  val ») shows no wound and no blood, and the soldier is small and far away.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Le nom ne suffit pas · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/figures-effet/act01.jpg`

A quiet scene about finding a thing and not yet looking at what it does. In a small library reading room with tall cream shelves, four adults sit around a pale wooden table, seen from a middle distance, with blank open books and blank sheets. In the middle of the table stands a small clear glass prism catching a beam of light from a high window, but the coloured band it throws lands on the far wall behind them, and nobody has turned to look at it yet; one figure is pointing at the glass itself. The subject is a prism on a reading table and the unnoticed band of colour on the wall. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · La litote · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/figures-effet/act02.jpg`

A conceptual illustration about saying little and meaning much. A narrow terracotta curtain hangs almost closed across a tall cream doorway; through the thin gap between its two halves pours a wide, warm band of ochre and rose light that spreads across the floor, far larger than the gap itself. A small clear prism sits on the threshold where the light passes. Everything else is calm empty space. The subject is a nearly closed curtain and the large warm light that escapes through it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · L’antiphrase · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/figures-effet/act03.jpg`

A conceptual illustration about a word that means its opposite. On a cream field, a tall ornate golden picture frame, polished and triumphant, holds no painting: instead, seen through the frame, a distant smoking village of small grey houses lies under a dusty slate sky. In front of the frame a small prism splits a beam of light into two bands, one bright gold falling on the frame, one dark slate falling on the village. The subject is a splendid frame around a sad scene. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · La gradation · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/figures-effet/act04.jpg`

A conceptual illustration about speed rising to a single point. Four shapes cross a long cream field from left to right on a gentle rising line: a walking figure, then a running figure, then a bird in flight, and finally a sharp terracotta arrowhead that strikes a small ochre target on the right edge. Each shape is larger and more dynamic than the one before, and faint motion lines lengthen from one to the next. A small prism at the far left casts the first ray. The subject is four rising shapes that end in one point. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Le chiasme · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/figures-effet/act05.jpg`

A conceptual illustration about two paths that cross in an X. Two winding paths, one sage green and one terracotta, start at the top corners of a cream page and cross exactly in the centre, each ending at the opposite bottom corner. At the top left sits a small loaf of bread and at the top right a small sprouting seedling; at the bottom the same two objects appear swapped, each at the end of the other path. A small prism sits where the paths cross, throwing a soft band of colour. The subject is two crossing paths with their ends reversed. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · Le zeugme · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/figures-effet/act06.jpg`

A quiet scene about one word carrying two unlike things. An old bearded man in a long simple white linen robe stands in a pale field of wheat at dusk, seen from a middle distance, calm and upright, his face small and serene. A soft halo of warm light seems to come from the white cloth itself, as if the fabric were glowing with his goodness. Sheaves of wheat stand nearby under a slate blue evening sky with the first stars. The subject is a white linen robe that seems to shine with the man who wears it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · L’hypallage · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/figures-effet/act07.jpg`

A quiet scene about a trait that spills from a person onto an object. Inside an old shop seen from the side at mid distance, a stout shopkeeper leans on a heavy wooden counter. The counter itself seems to lean toward the coins on it: its edge curves forward like a reaching lip and its drawers stand slightly open, while a small heap of ochre coins slides toward it. The shopkeeper is small and unremarkable; all the hunger is in the furniture. The subject is a counter that looks greedy instead of the man behind it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Métonymie et synecdoque · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/figures-effet/act08.jpg`

A quiet harbour scene about seeing a part and understanding the whole. A small grey stone harbour at dusk, seen from a quay, with an empty mooring and coiled ropes in the foreground. Far out on a calm slate blue sea, a single tiny terracotta sail stands on the horizon, the boat beneath it hidden by distance. On the quay a few small figures stand together looking out, seen from behind. The subject is one small sail on the horizon that stands for a whole boat. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Les sons · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/figures-effet/act09.jpg`

A conceptual illustration about a sound repeated until it becomes a picture. Across a wide cream field, a row of soft sage and slate blue wave shapes ripples from left to right, each wave the same rounded curve repeated many times, like the visible form of one sound said again and again. From the waves rise three thin slate serpent shapes curling gently upward, made of the same repeated curve. A small prism at the left sends the first ray into the waves. The subject is one repeated wave shape that turns into hissing serpents. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Le rythme · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/figures-effet/act10.jpg`

A quiet scene about a long phrase that falls short. A lone small figure stands on a low hill at night, seen from far away, under an immense dark slate sky full of tiny scattered ochre stars that stretches across almost the whole image. Along the bottom edge, a line of stepping stones runs from left to right: two medium stones, then several longer ones, then one very small final stone at the figure’s feet. The subject is a vast silent sky and a small figure at the end of a path of stones. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · La rupture · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/figures-effet/act11.jpg`

A conceptual illustration about a line that breaks and starts again elsewhere. A smooth terracotta ribbon runs across a cream field from the left, then stops abruptly in mid-air; a small gap follows, and a much larger sage green ribbon sets off from a different height, sweeping wide across the rest of the image. At the point of the break, a single tiny ochre dot hangs alone. A small prism above throws a narrow beam onto the gap. The subject is a ribbon that breaks off and restarts larger and elsewhere. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 · Ton commentaire · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/figures-effet/act12.jpg`

A quiet scene about a valley that is calm only at first glance. A small green hollow beside a sparkling stream, seen from a distance in bright sunlight, with tall yellow and white wild flowers and soft mossy grass. A young soldier in a simple dark uniform lies on his back in the grass far away, very small in the frame, face not visible, one hand resting on his chest, as if asleep. Bright sunbeams fall through the trees; no wound and no blood are shown. The subject is a sunny green hollow where a small figure lies very still. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
