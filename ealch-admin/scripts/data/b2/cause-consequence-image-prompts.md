# b2.15 « Cause et conséquence » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/cause-consequence/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/cause-consequence/actNN.jpg`, so a different name renders nothing).
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
  needs a caption to be understood. Screens, envelopes, notebooks and the bus
  timetable appear: every one of them is BLANK.
- **The single visual metaphor is LE NUANCIER**, one plain colour and its shades:
  a fan of colour swatches sits on the desk in acts 1 and 12, and the conceptual
  images (acts 2, 3, 7, 8, 9, 11) each show one plain thing against its graded
  or varied versions (a weight added, four different stones, lamps from dim to
  bright). They alternate with quiet human scenes (acts 1, 4, 5, 6, 10, 12) so
  twelve pictures do not read as twelve diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Au-delà de parce que · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/cause-consequence/act01.jpg`

A quiet scene about choosing words carefully before publishing. A small figure in a dusty slate blue cardigan sits at a desk in a calm newsroom at dusk, one hand resting above a keyboard, the computer screen a plain glowing cream rectangle with nothing on it. Through the large window behind, an old stone bridge crosses a river, a simple terracotta barrier across its entrance and one small figure in a hard hat looking closely at the stonework. On the desk, beside a cup, lies an open fan of paint colour swatches, one plain ochre card and several cards shading from it. The subject is a person pausing before writing, with the closed bridge in view and a fan of shades at hand. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · La cause admise · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/cause-consequence/act02.jpg`

A conceptual illustration about a cause that nobody disputes. In the centre of a cream field, a wide, solid sage green foundation block sits flat and heavy, clearly settled into the ground. On top of it, a neat stack of three smaller terracotta and ochre blocks rises straight and stable, each one resting squarely on the one below. Soft shadows show the whole column stands on the same firm base. The subject is one firm base that everything above it can rest on. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · La raison qui pèse · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/cause-consequence/act03.jpg`

A conceptual illustration about a second reason that tips the decision. An old-fashioned brass balance with two shallow pans stands on a bone-coloured table. One pan already holds a small dusty slate blue weight; a hand in a terracotta sleeve is placing a second, larger ochre weight beside it, and that pan is clearly dipping lower than the other. The empty pan on the opposite side rises. Everything else is empty cream space. The subject is one weight, then a heavier one added to the same side, and the scale giving way. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · La cause qu’on conteste · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/cause-consequence/act04.jpg`

A quiet scene about doubting a reason. A building manager in a sage green jacket sits at a tidy desk in a small office with a window onto a brick courtyard. She holds one plain envelope up towards the light, head slightly tilted in polite scepticism. A second envelope lies face down, set apart at the far edge of the desk, and a third rests in a small wooden tray in front of her. All envelopes are blank. The subject is one reason examined with doubt, one set aside, and one kept. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · La cause dans un nom · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/cause-consequence/act05.jpg`

A quiet scene in a community garden after a hot summer. Raised wooden vegetable beds stand on dry, lightly cracked ochre earth under a pale cream sky. Two neighbours, one in dusty slate blue and one in terracotta, carry watering cans between the beds, and a large rounded green water tank has been set up at the end of the path. A few tomato plants still show small red fruit. The subject is a dry garden and the neighbours whose effort saved part of it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · La cause dans le verbe · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/cause-consequence/act06.jpg`

A quiet scene in the basement boiler room of an apartment building. Three rounded pumps stand in a row on a cream concrete floor, connected by pipes painted dusty slate blue that rise towards the ceiling. A technician in a sage green overall kneels by the middle pump and points a torch at it, the soft beam of light resting only on that one pump. A small toolbox sits open on the floor, its tools plain and simple. The subject is one faulty machine singled out as the origin of everything that went wrong upstairs. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · La conséquence, en connecteur · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/cause-consequence/act07.jpg`

A conceptual illustration about varying the way from one bank to the other. A calm, pale slate blue stream crosses a cream landscape from left to right. Across it runs a line of four stepping stones, each one a different shape and colour: a round ochre stone, a flat terracotta slab, a small sage green oval, and a wide bone-coloured block. On the near bank, set aside on the grass, lie four identical grey stones that were not used. The subject is a crossing made of four different stones instead of four identical ones. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Le résultat ou le but · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/cause-consequence/act08.jpg`

A conceptual illustration about what has happened and what is still aimed at. The image is split softly into two halves on a cream background. On the left, an arrow already sits in the centre of a round target painted in sage green and ochre rings, clearly landed and still. On the right, a calm archer figure in dusty slate blue draws a bow towards an identical target, the arrow not yet released. Both targets are the same size and at the same height. The subject is the same target, reached on one side and only aimed at on the other. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · L’intensité · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/cause-consequence/act09.jpg`

A conceptual illustration about a degree that tips into a consequence. A tall clear glass stands on a bone-coloured table, filled with pale slate blue water right up to the brim. A single drop is falling from above into it, and on one side a thin trickle has just spilled over the rim, running down the glass into a small round puddle on the table. Everything else is empty cream space. The subject is a glass filled to the limit and the one drop that makes it overflow. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · La conséquence dans le verbe · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/cause-consequence/act10.jpg`

A quiet scene at a neighbourhood bus stop. A simple bus shelter stands on a pavement, a terracotta and cream striped barrier tape stretched across its entrance, and the timetable panel on the shelter wall is completely blank. A small group of residents in muted slate blue, ochre and sage green coats stands near it, one gesturing towards the empty road, another holding a phone, a child holding a parent's hand. The subject is a service cut off and the reactions it sets off in a small crowd. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Doser la certitude · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/cause-consequence/act11.jpg`

A conceptual illustration about grading how sure you are. On a long cream shelf stand five small identical table lamps in a row, their round shades glowing from very faint on the left to fully bright on the right, in warm ochre light. A hand in a dusty slate blue sleeve is turning the small dial on the middle lamp, setting it halfway. The wall behind is plain bone. The subject is a row of lights from dim to bright and one being carefully set in between. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 · Ton analyse · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/cause-consequence/act12.jpg`

A quiet scene about writing an explanation. A person in a terracotta sweater sits at a wooden kitchen table, writing in an open notebook whose pages are blank, a mug of tea beside it. Behind the table, a wide window is divided: through its left pane stands a distant skyline of pale slate blue city buildings, through its right pane stretch sage green fields and a small village with a church roof. A cardboard moving box sits on the floor by the chair, and an open fan of ochre colour swatches rests on the table. The subject is a person thinking through why people leave the city, between the two views. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
